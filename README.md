# Flight Companion - A flight Status and live Notification web App
In the case study, I created a web app using react.js, node.js, express.js, MongoDB, and AWS S3 bucket for development. 

In front-end, I have created a very appealing, easy-to-understand, simple, and responsive UI So, that users can easily use the website as needed, in front-end there are 3 pages home, notification, and flight status. For this, I have used HTML, CSS, react.js, fontAwesome for icons, and react-bootstrap for better UI. 

In the back end, I have created very clean, proper, and well-structured APIs, So, that our developer can easily understand and update the code easily in the future. in the backend, I have created 2 main APIs first for fetching flight status from 3rd party and second for storing user info and sending email notifications as needed. for this, I have used node.js, express.js, and nodemailer for emails.
In the database, I have used MongoDB Atlas which is a cloud-based non-relational database in which I have created a well-structured schema with all the necessary details. 

Now, Working For status, I take the Flight number from the user and pass it to my node Api where I run the query on 3rd third-party database to fetch the current data, once I receive the data from the 3rd party Api then I need to clean the data and send back as a response in my front-end. where I further filter the data and arrange it then show it to the user. At every stage of my Apis, I tried to handle every possible error and exception that I could think of this step. 
