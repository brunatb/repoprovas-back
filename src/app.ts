import "./setup";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database/database";
import professorRouter from "./routers/professorRoutes";
import subjectRouter from "./routers/subjectRoutes";
import testRouter from "./routers/testRouters";
import categoryRouter from "./routers/categoryRouters";

const app = express();
app.use(cors());
app.use(express.json());
app.use(professorRouter);
app.use(subjectRouter);
app.use(testRouter);
app.use(categoryRouter);

export async function init () {
  await connectDatabase();
}

export default app;