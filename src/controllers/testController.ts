import { Request, Response } from "express";
import Test from "../entities/Test";
import { test_create } from "../protocols/testProtocol";
import * as categoryService from "../services/categoryServices";
import * as professorService from "../services/professorService";
import * as subjectService from "../services/subjectServices";
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

export {
    storeTest,
}