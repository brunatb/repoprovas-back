import { Request, Response } from "express";
import Test from "../entities/Test";
import * as testService from "../services/testServices";

async function storeTest(req:  Request, res: Response) {
    const { name, category, subject, professor, pdfLink } = req.body;
    if (!name || !category || !subject || !professor || !pdfLink) {
        return res.sendStatus(403);
    }

    try{
        const test : Test = req.body;
        const data = await testService.createTest(test);
        res.sendStatus(201)
    }catch( err ){
        console.error(err);
        res.sendStatus(500);
    }
}

async function getTestProfessor(req:  Request, res: Response) {
  try {
    const resul = await testService.getTestByProfessorId(req.params.id);
    res.send(resul);
  }catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getTestSubject(req:  Request, res: Response) {
  try {
    const resul = await testService.getTestBySubjectId(req.params.id);
    console.log(resul);
    res.send(resul);
  }catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export {
    storeTest,
    getTestProfessor,
    getTestSubject
}