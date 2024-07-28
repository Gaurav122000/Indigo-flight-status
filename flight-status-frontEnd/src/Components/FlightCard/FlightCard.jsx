import React from 'react';
import Card from 'react-bootstrap/Card';

const FlightCard = ({ flight }) => {
    const options = { timeZone: 'Asia/Kolkata', timeZoneName: 'short' };
    //const departureTime = new Date(flight.departure.actual).toLocaleString('en-US', options);
    //const arrivalTime = new Date(flight.arrival.actual).toLocaleString('en-US', options);
    const flightDate = new Date(flight.flight_date).toLocaleDateString('en-US', options);

    return (
        <Card className="flight-card">
            <Card.Body>
                <Card.Title>{flight.departure.airport} to {flight.arrival.airport}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Flight Status: {flight.flight_status}</Card.Subtitle>
                <Card.Text>
                    <strong>Flight Date:</strong> {flightDate}<br />
                    <strong>Departure Actual:</strong> {flight.departure.actual}<br />
                    <strong>Departure Terminal:</strong> {flight.departure.terminal} &nbsp; <strong>Departure Gate:</strong> {flight.departure.gate}<br />
                    <strong>Arrival:</strong> {flight.arrival.actual}<br />
                    <strong>Arrival Terminal:</strong> {flight.arrival.terminal} &nbsp; <strong>Arrival Gate:</strong> {flight.arrival.gate}<br />
                    <strong>Delay in departure: </strong> 
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {flight.departure.delay}
                    </span><span> Min</span><br/>
                    <strong>Airline:</strong> {flight.airline.name}<br />
                    <strong>Flight Number:</strong> {flight.flight.iata}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default FlightCard;
