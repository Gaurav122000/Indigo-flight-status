import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar/Navbar";
import image1 from "../../assets/image1.jpg";
import "./Notification.css";
import axios from "axios";

const Notification = () => {
  //useStates for getting the data
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [flightNumber, setflight] = useState();
  const [choice, setChoice] = useState();
  const [buttonText, setButtonText] = useState('I want Notification'); // button state

  //validator
  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  //handle submit controlling the submition
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {

      setButtonText('Fetching Please Wait...'); // Update button text

      // Create an object with user data
      const userData = {
        name,
        email,
        flightNumber,
        choice,
      };

      try {
        // Send the data to your backend (provide the full URL)
        const response = await axios.post("http://127.0.0.1:3200/notification-flight", userData);

        const { message, notification, flightData } = response.data;

            if (message === 'Your flight has already landed.') {
                alert('Your flight has already landed.');
            } else if (message === 'You already have an active flight scheduler.') {
                alert('You already have an active flight scheduler.');
            } else {
                // Extract the flight status
                const flightStatus = flightData?.data[0]?.flight_status || 'Unknown';
                alert(`Data submitted successfully! Flight Status: ${flightStatus}`);
            }

        window.location.href = '/';
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("There was an error submitting your data. Please try again.");
        window.location.href = '/Notification';
      }
    }

    form.classList.add("was-validated");
  };

  return (
    <>
      <Navbar />
      <img src={image1} className="background fade-in" alt="" />
      <div className="noti-body">
        <div className="noti-form-h3">
          <h3>Live Notification of Departure and arrival to your phone</h3>
        </div>
        <div className="noti-form">
          <Form className="noti-form-main" onSubmit={handleSubmit}>
            <Form.Floating>
              <Form.Control
                id="name"
                type="text"
                placeholder=""
                size="lg"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="name">Full Name</label>
              {/* <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback> */}
            </Form.Floating>

            <Form.Floating>
              <Form.Control
                id="email"
                type="email"
                placeholder=""
                size="lg"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                isValid={email && validateEmail(email)}
              />
              <label htmlFor="email">Email address</label>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Floating>

            <Form.Floating>
              <Form.Control
                id="flightNumber"
                type="text"
                placeholder=""
                size="lg"
                name="flightNumber"
                onChange={(e) => setflight(e.target.value)}
                required
              // isValid={phone && validatePhoneNumber(phone)}
              />
              <label htmlFor="flightNumber">Flight Number</label>
              {/* <Form.Control.Feedback type="invalid">
                Please provide a valid mobile number.
              </Form.Control.Feedback> */}
            </Form.Floating>

            <FloatingLabel controlId="floatingSelect" label="Please Select The Notification Frequency">
              <Form.Select name='choice' onChange={(e) => setChoice(e.target.value)} id='choice' aria-label="choice">
                <option value="Choose one">Choose one</option>
                <option value="false">One time only</option>
                <option value="true">Throughtout the Flight</option>
              </Form.Select>
            </FloatingLabel>

            <Button variant="primary" type="submit" disabled={buttonText === 'Fetching Please Wait...'}>
              {buttonText}
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Notification;
