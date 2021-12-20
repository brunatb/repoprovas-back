import { Request, Response } from "express";
import * as categoryService from '../services/categoryServices';

async function getCategories(req: Request, res: Response) {
    try {
        const data = await categoryService.getAllCategories();
        res.send(data)
    }catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export {
    getCategories,
}