# Flight Companion - A flight Status and live Notification web App
In the case study, I created a web app using react.js, node.js, express.js, MongoDB, AviationStack for flight data, and AWS S3 bucket for development. 

For a video demo of the project click the link ....
https://goodwill-ngo.s3.ap-south-1.amazonaws.com/flight-status/flight-site-video.mp4

In front-end, I have created a very appealing, easy-to-understand, simple, and responsive UI So, that users can easily use the website as needed, in front-end there are 3 pages home, notification, and flight status. For this, I have used HTML, CSS, react.js, fontAwesome for icons, and react-bootstrap for better UI. 

In the back end, I have created very clean, proper, and well-structured APIs, So, that our developer can easily understand and update the code easily in the future. in the backend, I have created 2 main APIs first for fetching flight status from 3rd party and second for storing user info and sending email notifications as needed. for this, I have used node.js, express.js, and nodemailer for emails.
In the database, I have used MongoDB Atlas which is a cloud-based non-relational database in which I have created a well-structured schema with all the necessary details. 

I have used AWS S3 to store a few images and videos that I want to access quickly and easily.

I have also created custom Email templates with the help of plane HTMl and Internal CSS then Passed these templates as a response to the user for notification purposes. and these email templates consist of live dynamic data of flight schedules, airport names, departure/Arrival times and delays, etc... 
Like these...

![Screenshot 2024-07-30 220603](https://github.com/user-attachments/assets/be2b9e90-1a3a-49d4-9c48-a37c84ca0a67)

Now, Working...........
For status, I take the Flight number from the user and pass it to my node Api where I run the query on 3rd third-party database to fetch the current data, once I receive the data from the 3rd party Api then I need to clean the data and send back as a response in my front-end. where I further filter the data and arrange it then show it to the user. At every stage of my Apis, I tried to handle every possible error and exception that I could think of this step. 

For Notification, I take a few details from the user and then pass these details to my backend where first I store them in my database and then filter the flight number from the monogoDB return object then pass that flight Number to my getFlightDetailsByNumber function with fetch me the details from the 3rd party database, then pass those information to my nodemailer api sendmail which takes the user data from mongoDB return data then fill these data in the html template and send the email to the user.

Some Screen Shots of the Project...

![Screenshot 2024-07-30 203747](https://github.com/user-attachments/assets/fc9531d9-d45a-4906-9415-cf0d73a12aa9)

![Screenshot 2024-07-30 203812](https://github.com/user-attachments/assets/e7cc18de-ee8c-48e1-90fd-a7b0a0bf4c6c)

![Screenshot 2024-07-30 203836](https://github.com/user-attachments/assets/a26aa30f-6399-487b-8113-31da5aa143c7)

![Screenshot 2024-07-30 204112](https://github.com/user-attachments/assets/29cfbda1-9b55-4f05-a03e-b27067e579f9)

![Screenshot 2024-07-30 204143](https://github.com/user-attachments/assets/e1a19cbc-3421-40c7-9c6a-beeea6d30c6a)

![Screenshot 2024-07-30 204202](https://github.com/user-attachments/assets/c6b7f1b0-525e-4c43-b224-10e8d09f13ef)

![Screenshot 2024-07-30 230500](https://github.com/user-attachments/assets/f42573c4-93e2-4b7d-98a7-571b81244344)

