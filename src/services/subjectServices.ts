import { getRepository } from "typeorm";
import Period from "../entities/Period";
import Subject from "../entities/Subject";
import * as testService from "../services/testServices";

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

async function getAllSubjects() {
    const ids = await getRepository(Subject).find({});
    let data = [];
    for(let i=0; i<ids.length; i++){
        const qtd = await testService.getLengthSubjectIdTests(ids[i].id);
        data.push({id: ids[i].id, name: ids[i].name, qtd: qtd});
    }
    return data;
}


export {
    getSubjectIdByName,
    getPeriodFromId,
    getSubjectById,
    getAllSubjects
}