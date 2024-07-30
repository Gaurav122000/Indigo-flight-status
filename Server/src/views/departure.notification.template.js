const generateThankYouEmail3 = (name, flightNumber, flightData) => 
    `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Flight Status Email</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }

            .container {
                width: 50%;
                margin: auto;
            }

            .header {
                text-align: center;
                padding: 20px;
                background-color: #f8f9fa;
            }

            .header img {
                width: 100%;
                height: auto;
            }

            .content {
                margin-top: 20px;
                display: grid;
                grid-column: auto;
            }
            
            .footer {
                margin-top: 20px;
                padding: 20px;
                background-color: #f8f9fa;
                text-align: center;
            }

            .btn {
                background-color: rgb(28, 178, 28);
                border: none;
                padding: 1rem 2rem;
                border-radius: 8px;
                display: block;
                margin: auto;
            }

            .btn a {
                color: white;
                font-weight: bold;
                font-size: medium;
            }

            .btn:hover {
                background-color: darkgreen;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <div class="header">
                <img src="https://goodwill-ngo.s3.ap-south-1.amazonaws.com/flight-status/Screenshot+2024-07-29+005507.png" alt="donation thanks">
                <h1>Hello ${name.toUpperCase()},</h1>
            </div>
            <div class="content">
                    <h1 style="text-align: center;">Your flight (${flightNumber}) status is = ${flightData.data[0].flight_status}</h1>
                    <h3 style="text-align: center;">From ${flightData.data[0].departure.airport} To ${flightData.data[0].arrival.airport}</h3>
                    <h3 style="text-align: center;">your Flight Departure at: ${flightData.data[0].departure.scheduled} with Delay: ${flightData.data[0].departure.delay} min</h3>
                    <p style="text-align: center;">Thank for choosing us, This is your departure update email</p>
                    <p style="text-align: center;">Thank you, have a safe journey!.... >->- </p>
            </div>
            <div class="footer">
                <p>Best Regards,</p>
                <p>Your Flight Companion</p>
            </div>
        </div>
    </body>

</html>`;

export default generateThankYouEmail3;
