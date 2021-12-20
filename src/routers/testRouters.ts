import { Router } from "express";
import *  as testController from "../controllers/testController";

const testRouter = Router();

testRouter.post('/test', testController.storeTest);
testRouter.get('/test/professor/:id', testController.getTestProfessor);

export default testRouter;