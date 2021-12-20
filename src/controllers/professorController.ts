import { Request, Response } from "express";
import * as professorService from '../services/professorService';

async function getAllProfessors(req: Request, res: Response) {
    try {
        const data = await professorService.getAllProfessorsSubjects();
        res.send(data)
    }catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

async function getProfessor(req: Request, res: Response) {
  try {
    const professor = await professorService.getProfessorById(Number(req.params.id));  
    res.send(professor);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export {
    getAllProfessors,
    getProfessor,
}