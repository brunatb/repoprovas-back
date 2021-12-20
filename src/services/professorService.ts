import { getRepository } from "typeorm";
import Professor from "../entities/Professor";
import * as testService from "../services/testServices";

async function getAllProfessors() {
    const ids = await getRepository(Professor).find({});
    let data = [];
    for(let i=0; i<ids.length; i++){
        const qtd = await testService.getLengthProfessorIdTests(ids[i].id);
        data.push({id: ids[i].id, name: ids[i].name, qtd: qtd});
    }
    return data;
}

async function getProfessorById(id: number) {
    const professor = await getRepository(Professor).find({
        where: {
            id
        }
    });
    return professor[0];
}

async function getIdProfessorByName(name: string) {
    const professor = await getRepository(Professor).find({
        where: {
            name
        }
    });
    return professor[0].id;
}

export {
    getAllProfessors,
    getProfessorById,
    getIdProfessorByName
}