import { Router } from "express";
import * as subjectController from '../controllers/subjectController';

const subjectRouter = new (Router as any)();
subjectRouter.get('/subjects', subjectController.getAllSubjects);

export default subjectRouter;