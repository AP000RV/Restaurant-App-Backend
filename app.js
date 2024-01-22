import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./database/dbConnection.js";
import { errorMiddleWare } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" }); // give the path where we have stored our env valriables...

app.use(
  cors({
    // to connect FE and BE
    // origin: [process.env.FRONTEND_URL], // FE Path from where you wish to connect FE
    origin: ["process.env.FRONTEND_URL", "http://localhost:5173"],
    methods: ["POST"], // which methods u want to use in frontend backend
    credentials: true,
  })
);

app.use(express.json()); // if i give string to it then it'll convert that to Json
app.use(express.urlencoded({ extended: true })); // what is the type of data which we have
app.use("/api/v1/reservation", reservationRouter); // not mandatory to write it this way.. you can give whatever you want to...

// Database connection...
dbConnection(); // database connection

// error Handler...
app.use(errorMiddleWare);

export default app;
