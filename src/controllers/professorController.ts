import { Request, Response } from "express";

async function getAllProfessors(req: Request, res: Response) {
    try {
        return res.sendStatus(200);
    }catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export {
    getAllProfessors,
}