import express from "express";
import { trackFlight } from "../controllers/FlightStatusController/StatusController.js";
import { notificationSave } from "../controllers/NotificationController/NotificationController.js";
const router = express.Router();

//eg -- 
//router.get('/', userController.getLandingPage)
router.post('/track-flight', trackFlight);
router.post('/notification-flight', notificationSave);

export default router;