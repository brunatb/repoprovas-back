import { getRepository } from "typeorm";
import Period from "../entities/Period";
import Subject from "../entities/Subject";

async function getSubjectIdByName(name: string) {
    const id = await getRepository(Subject).find({
        where: {
            name
        }
    });

    return id[0].id;
}

async function getPeriodFromId(id:number){
    const period = await getRepository(Period).find({
        where: {
            id
        }
    });
    return period[0].name;
}

async function getSubjectById(id: number) {
    const subject = await getRepository(Subject).find({
        where: {
            id
        }
    });

    return subject[0];
}


export {
    getSubjectIdByName,
    getPeriodFromId,
    getSubjectById
}