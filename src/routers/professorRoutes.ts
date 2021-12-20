import { Router } from "express";
import * as professorController from '../controllers/professorController';

const professorRouter = Router();

professorRouter.get('/professors', professorController.getAllProfessors);
professorRouter.get('/professor/:id', professorController.getProfessor);

export default professorRouter;