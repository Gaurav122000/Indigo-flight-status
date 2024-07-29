import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './src/routes/web.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
let PORT = process.env.PORT;

// for .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const db = process.env.atlas_db;
// mongoose.connect(db).then(() => {
//     console.log('Connected to DB ..... :)');
// }).catch((err) => {
//     console.log(err, 'Not Connected to DB ...... :(');
// });

// for mongoDB local compass
mongoose.connect("mongodb://127.0.0.1:27017/flight_status_DB").then(() => {
    console.log('Connected to DB ..... :)');
}).catch((err) => {
    console.log(err, 'Not Connected to DB ...... :(');
});

const app = express();
app.use(express.json());

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}....... :-) Yeah Buddy`);
});
