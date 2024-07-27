import express from "express";
import { trackFlight } from "../controllers/FlightStatusController/StatusController.js";
const router = express.Router();

//eg -- 
//router.get('/', userController.getLandingPage)
router.post('/track-flight', trackFlight);

export default router;