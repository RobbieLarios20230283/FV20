import express from "express";
import reservationController from "../Controllers/reservationController.js";

const router = express.Router();
router
  .route("/")
    .get(reservationController.getReservations)
    .post(reservationController.insertReservation);
router
  .route("/:id")
    .get(reservationController.getReservationById)
    .put(reservationController.updateReservation)
    .delete(reservationController.deleteReservation);
export default router;