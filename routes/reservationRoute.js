import express from "express";
import {sendReservation} from '../controller/reservation.js'

const router = express.Router()     // created an instance of a router

router.post('/send', sendReservation);

export default router;
