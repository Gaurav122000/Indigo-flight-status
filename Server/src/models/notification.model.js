import mongoose from 'mongoose';

const scheduledJobSchema = new mongoose.Schema({
    jobId: String,
    time: Date,
    status: {
        type: String,
        enum: ['scheduled', 'completed'],
        default: 'scheduled'
    }
});

const notificationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    flightNumber: {
        type: String,
        required: true
    },
    choice: {
        type: String
    },
    scheduledJobs: [scheduledJobSchema]
});

const notificationModel = mongoose.model('notificationModel', notificationSchema);
export default notificationModel;
