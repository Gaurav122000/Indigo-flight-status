import axios from 'axios';
import notificationModel from '../../models/notification.model.js';
import sendMail from '../EmailControllers/notification.confirm.controller.js'

// Configuration
const apiKey = '78c06db5c4405697c9b97ec7e8da7de3';
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

// updated notificationSave function
export const notificationSave = async (req, res) => {
    const Datafront = req.body;
    // console.log('fk',Datafront);

    try{
        // Crete the notification document in MongoDB
        const notification = await notificationModel.create(Datafront);
        console.log('Notification created: ', notification);

        // Fetch flight details using the flight number
        const flightData = await getFlightDetailsByNumber(Datafront.flightNumber); // Use Datafront.flightNumber

        // Send email with flight details
        sendMail(notification, flightData);

        // Respond with the notification and flight data
        res.json(notification);

    }catch(err){
        console.error('Error creating notification or retrieving flight data:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}