import express from "express";
import { trackFlight, notificationSave } from "../controllers/FlightStatusController/StatusController.js";
//import { notificationSave } from "../controllers/NotificationController/NotificationController.js";
const router = express.Router();

//for tracking the flight status 
router.post('/track-flight', trackFlight);
//for sending confirmation notification
router.post('/notification-flight', notificationSave);

export default router;