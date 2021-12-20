import "./setup";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database/database";
import professorRouter from "./routes/professorsRoute";
const app = express();
app.use(cors());
app.use(express.json());
app.use(professorRouter);

export async function init () {
  await connectDatabase();
}

export default app;
