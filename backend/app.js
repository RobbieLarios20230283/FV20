import express from "express";
import clientRoutes from "./src/Routes/clients.js";
import reservationRoutes from "./src/Routes/reservation.js";

const app = express(); 

app.use(express.json());
app.use("/api/clients", clientRoutes);
app.use("/api/reservations", reservationRoutes);

export default app;
