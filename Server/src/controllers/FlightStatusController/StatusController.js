import axios from 'axios';

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
        console.log(flightData);
    } catch (error) {
        res.status(500).send('Error retrieving flight data');
    }
};
//----------------------------------------------------------------------------------------------------------------

// updated notificationSave function
