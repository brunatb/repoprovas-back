import { Router } from "express";
import *  as testController from "../controllers/testController";

const testRouter = Router();

testRouter.post('/test', testController.storeTest);

export default testRouter;