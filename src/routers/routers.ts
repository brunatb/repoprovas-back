import { Router } from "express";
import * as professorController from '../controllers/professorController';
import professorRouter from "./professorRoutes";
import subjectRouter from "./subjectRoutes";


const routes = Router();
routes.use('/professors', professorRouter);
routes.use('/subjects', subjectRouter);

export default routes;