import { getRepository } from "typeorm";
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

export {
    getSubjectIdByName,
    getPeriodFromId
}