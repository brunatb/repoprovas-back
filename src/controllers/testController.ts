import { Request, Response } from "express";

async function storeTest(req:  Request, res: Response) {
    try{
        res.sendStatus(200);
    }catch( err ){
        console.error(err);
        res.sendStatus(500);
    }
}

export {
    storeTest,
}