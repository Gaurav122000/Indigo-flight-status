import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import router from './src/routes/web.js';

// for .env file
import dotenv from 'dotenv';
dotenv.config();
let PORT = process.env.PORT;

//for mongoDB local compass
mongoose.connect("mongodb://127.0.0.1:27017/flight_status_DB").then(() => {
    console.log('Connected to DB ..... :)');
}).catch((err) => {
    console.log(err, 'Not Connected to DB ...... :(');
})

const app = express();

app.use(express.static("./public"));
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}....... :-) Yeah Buddy`)
})