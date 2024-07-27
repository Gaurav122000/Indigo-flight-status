import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import './Status.css';
import Navbar from "../Navbar/Navbar.jsx";
import image1 from '../../assets/image1.jpg';
import axios from 'axios';

const Status = () => {
    const [flightNumber, setFlightNumber] = useState('');
    const [flightStatus, setFlightStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3200/track-flight', { flightNumber })
            .then(response => {
                setFlightStatus(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <div className='sta-out'>
            <Navbar />
            <img src={image1} className='background fade-in' alt='' />
            <div className='Sta-form'>
                <Form onSubmit={handleSubmit}>
                    <Form.Floating>
                        <Form.Control
                            id="flightNumber"
                            type="text"
                            placeholder=""
                            size='lg'
                            name='flightNumber'
                            onChange={(e) => setFlightNumber(e.target.value)}
                            required
                        />
                        <label htmlFor="flightNumber">Enter Flight Number</label>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid flight number.
                        </Form.Control.Feedback>
                    </Form.Floating>

                    <Button variant="primary" type="submit">Track Flight</Button>
                </Form>
                {flightStatus && (
                    <div className="flight-status">
                        <h3>Flight Status</h3>
                        <p>{JSON.stringify(flightStatus, null, 2)}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Status;
