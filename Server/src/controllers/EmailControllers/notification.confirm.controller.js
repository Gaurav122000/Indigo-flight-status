import nodemailer from 'nodemailer';
import generateThankYouEmail from '../../views/notification.confirm.templates.js';

export default async function sendMail({name, email, flightNumber}, flightData){
    //console.log("flight", flightData);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.e_id,
            pass: process.env.e_pass,
        },
    });

    let mailOptions = {
        from:'Gaurav@flightconpanion.co',
        to: email,
        subject: `You are Onboard ${name}, I'm your companion for this journey`,
        html: generateThankYouEmail(name, flightNumber, flightData),
    };

    try{
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully :-)');
    }catch (err) {
        console.log(':-( Email send failed with error: '+ err);
    }
};
