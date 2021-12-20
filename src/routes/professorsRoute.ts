import { Router } from "express";
import * as professorController from '../controllers/professorController';

const professorRouter = new (Router as any)();

professorRouter.get('/professors', professorController.getAllProfessors);

export default professorRouter;