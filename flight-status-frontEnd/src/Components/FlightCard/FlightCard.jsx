import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import './FlightCard.css';

const FlightCard = ({ flight }) => {
    return (
        <div className="flight-card">
            <div className='heading'>
                <span>{flight.departure.airport}</span> &nbsp; <FontAwesomeIcon icon={faArrowRightLong} size="2xl" style={{color: "#0ce91b",}} /> &nbsp; <span>{flight.arrival.airport}</span>
            </div>
            <div className='status'>
                <strong >Flight Status: </strong> {flight.flight_status}
            </div>
            <div className="flight-details">
                <div className="departure">
                    <h3>Departure</h3>
                    <strong>Airport: </strong> {flight.departure.airport}<br/>
                    <strong>Scheduled Departure: </strong> {flight.departure.scheduled}<br />
                    <strong>Actual Departure: </strong> {flight.departure.actual}<br />
                    <strong>Terminal: </strong> {flight.departure.terminal}<br/>
                    <strong>Gate:</strong> {flight.departure.gate}<br />
                    <strong>Delay in departure: </strong> 
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {flight.departure.delay}
                    </span><span> Min</span>
                </div>
                <div className="arrival">
                    <h3>Arrival</h3>
                    <strong>Airport: </strong> {flight.arrival.airport}<br/>
                    <strong>Scheduled Arrival: </strong> {flight.arrival.scheduled}<br />
                    <strong>Actual Arrival:</strong> {flight.arrival.actual}<br />
                    <strong>Arrival Terminal:</strong> {flight.arrival.terminal}<br/>
                    <strong>Arrival Gate:</strong> {flight.arrival.gate}<br />
                    <strong>Delay in arrival: </strong>
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {flight.arrival.delay}
                    </span><span> Min</span>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;
