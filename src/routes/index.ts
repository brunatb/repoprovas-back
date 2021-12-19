import { Request, Response } from "express";
import { Router } from "express";

const router = new (Router as any)();
router.get('/check', (req : Request, res : Response) => {
    res.send({message: 'Server is on'});
})

export {
    router,
}