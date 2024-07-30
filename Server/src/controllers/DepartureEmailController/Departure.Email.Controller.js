import nodemailer from 'nodemailer';
import generateThankYouEmail3 from '../../views/departure.notification.template.js';

export default async function sendMail3({name, email, flightNumber}, flightData){

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.e_id,
            pass: process.env.e_pass,
        },
    });

    let mailOptions = {
        from: "Gaurav@flightcompanion.co",
        to: email,
        subject: `Have a safe journey ${name}, your flight companion`,
        html: generateThankYouEmail3(name, flightNumber, flightData),
    }

    try{
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    }catch (err) {
        console.log('Email send failed with error: ' + err);
    }
}