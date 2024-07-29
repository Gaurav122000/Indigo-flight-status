import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar/Navbar";
import image1 from "../../assets/image1.jpg";
import "./Notification.css";
import axios from "axios";

const Notification = () => {
  //useStates for getting the data
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [flightNumber, setflight] = useState();

  //validator
  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phone) => {
    var re = /^\d{10}$/;
    return re.test(phone);
  };

  //handle submit controlling the submition
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Create an object with user data
      const userData = {
        name,
        email,
        phone,
        flightNumber,
      };
  
      try {
        // Send the data to your backend (provide the full URL)
        const response = await axios.post("http://127.0.0.1:3200/notification-flight", userData);
  
        // Handle the successful response (e.g., show an alert)
        if (response.status === 200) {
            console.log(response);
          alert("Data submitted successfully!");
          // You can also reset the form fields here if needed
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        // Handle any errors (e.g., show an error message)
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
                id="phone"
                type="number"
                placeholder=""
                size="lg"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                required
                isValid={phone && validatePhoneNumber(phone)}
              />
              <label htmlFor="phone">Mobile Number</label>
              <Form.Control.Feedback type="invalid">
                Please provide a valid mobile number.
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

            <Button variant="primary" type="submit">
              I want Notification
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Notification;
