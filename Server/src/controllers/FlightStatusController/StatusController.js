import axios from 'axios';
import notificationModel from '../../models/notification.model.js';
import sendMail from '../EmailControllers/notification.confirm.controller.js'
import sendMail2 from '../EmailController_for_multiple flight/multiple.notification.controller.js';
import sendMail3 from '../DepartureEmailController/Departure.Email.Controller.js';
import schedule from 'node-schedule';
import dotenv from 'dotenv';
dotenv.config();

// Configuration
const apiKey = process.env.avi_key;
const baseUrl = 'http://api.aviationstack.com/v1/';

// Function to get flight details by flight number
const getFlightDetailsByNumber = async (flightNumber) => {
    const url = `${baseUrl}flights?access_key=${apiKey}&flight_iata=${flightNumber}&limit=1`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error retrieving flight data:', error.response ? error.response.data : error.message);
        throw error;
    }
};
//----------------------------------------------------------------------------------------------------------------

// Controller function to handle the request
export const trackFlight = async (req, res) => {
    const { flightNumber } = req.body;
    try {
        const flightData = await getFlightDetailsByNumber(flightNumber);
        res.json(flightData);
        console.log('flight status from trackFlight: ', flightData);
    } catch (error) {
        res.status(500).send('Error retrieving flight data');
    }
};
//----------------------------------------------------------------------------------------------------------------

// notificationSave function
export const notificationSave = async (req, res) => {
    const Datafront = req.body;

    try {

        // Check for active schedulers for the user
        const activeScheduler = await notificationModel.findOne({
            email: Datafront.email,
            'scheduledJobs.status': 'scheduled'
        });

        if (activeScheduler) {
            return res.status(400).json({ error: 'You already have an active flight scheduler.' });
        }

        // Crete the notification document in MongoDB
        const notification = await notificationModel.create(Datafront);
        console.log('Notification created: ', notification);

        // Fetch flight details using the flight number
        const flightData = await getFlightDetailsByNumber(Datafront.flightNumber);

        if (notification.choice == 'true') {

            const flightStatus = flightData.data[0].flight_status;
            const departureTime = new Date(flightData.data[0].departure.scheduled);
            const currentTime = new Date();

            if (flightStatus === 'scheduled') {
                if ((departureTime - currentTime) > 60 * 60 * 1000) {
                    sendMail2(notification, flightData);
                    // Schedule email 1 hour before departure
                    const firstEmailTime = new Date(departureTime.getTime() - 60 * 60 * 1000);
                    const firstJob = schedule.scheduleJob(firstEmailTime, async () => {
                        await sendMail3(notification, flightData);
                        console.log("Email sent 1 hour before departure at: ", firstEmailTime);
                        await updateJobStatus(notification._id, firstJob.name);
                    });

                    // Save scheduled job details in the notification document
                    notification.scheduledJobs = [
                        { jobId: firstJob.name, time: firstEmailTime }
                    ];
                    await notification.save();

                    console.log("Scheduled email for flight: ", flightData.data);
                }else {
                    // Send email immediately if departure time is less than 1 hour away
                    await sendMail3(notification, flightData);
                    console.log("Email sent immediately as departure is less than 1 hour away.");
                }
            }else if (flightStatus === 'landed') {
                // Send email immediately if the flight has already landed
                return res.status(200).json({ message: 'Your flight has already landed.' });
            } else {
                return res.status(400).json({ error: 'Flight is not scheduled or departure time is less than 1 hour away.' });
            }
    
        } else {
            // email with flight details once time only
            sendMail(notification, flightData);
        }

        // Respond with the notification and flight data
        res.json({ notification, flightData });

    } catch (err) {
        console.error('Error creating notification or retrieving flight data:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Function to update job status
const updateJobStatus = async (notificationId, jobId) => {
    await notificationModel.updateOne(
        { _id: notificationId, 'scheduledJobs.jobId': jobId },
        { $set: { 'scheduledJobs.$.status': 'completed' } }
    );

    // Check if all jobs are completed
    const notification = await notificationModel.findById(notificationId);
    const allCompleted = notification.scheduledJobs.every(job => job.status === 'completed');
    if (allCompleted) {
        await notificationModel.updateOne(
            { _id: notificationId },
            { $set: { choice: 'false' } }
        );
    }
};