import { Request, Response } from "express";
import * as subjectService from "../services/subjectServices";

async function getAllSubjects (req: Request, res: Response) {
  try {
    const subjects = await subjectService.getAllSubjects();
    res.send(subjects);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export {
    getAllSubjects,
}