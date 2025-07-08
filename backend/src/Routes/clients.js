import express from "express";
import customersController from "../Controllers/clientsController.js";

const router = express.Router();
router
  .route("/")
  .get(customersController.getClients)
  .post(customersController.insertClient);

router
  .route("/:id")
  .get(customersController.getClientById)
  .put(customersController.updateClient)
  .delete(customersController.deleteClient);

export default router;