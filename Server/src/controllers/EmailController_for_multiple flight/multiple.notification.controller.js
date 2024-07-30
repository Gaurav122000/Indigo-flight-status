import nodemailer from 'nodemailer';
import generateThankYouEmail2 from '../../views/multiple.notification.templates.js';

export default async function sendMail2({name, email, flightNumber}, flightData){

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.e_id,
            pass: process.env.e_pass,
        },
    });

    let mailOptions = {
        from: "Gaurav@flightconpanion.co",
        to: email,
        subject: `You are Onboard ${name}, I'm your flight companion for this journey`,
        html: generateThankYouEmail2(name, flightNumber, flightData),
    };

    try{
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    }catch (err) {
        console.log('Email send failed with error: ' + err);
    }
}; 