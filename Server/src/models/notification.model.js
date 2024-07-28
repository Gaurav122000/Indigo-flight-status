import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
    },
    flight:{
        type:String,
        required:true,
    }
})
const notificationModel = mongoose.model('notificationModel', notificationSchema);
export default notificationModel;
