import { Router } from "express";
import *  as testController from "../controllers/testController";

const testRouter = Router();

testRouter.post('/test', testController.storeTest);
testRouter.get('/test/professor/:id', testController.getTestProfessor);
testRouter.get('/test/subject/:id', testController.getTestSubject);

export default testRouter;