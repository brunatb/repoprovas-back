import "./setup";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database/database";
import * as userController from "./controllers/userConroller";
import { router } from './routes/index';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.get("/users", userController.getUsers);

export async function init () {
  await connectDatabase();
}

export default app;
