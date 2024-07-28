import React from 'react';
//import './Contact.css';
import Navbar from "../Navbar/Navbar.jsx";
import image1 from '../../assets/image4.jpg';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <h1>Contact Us</h1>
                <img src={image1} className='background fade-in' alt='' />
                <form className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
