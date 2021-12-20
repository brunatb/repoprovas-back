import { getRepository } from "typeorm";
import Professor from "../entities/Professor";

async function getAllProfessorsSubjects() {
    const ids = await getRepository(Professor).find({});

    console.log(ids);
    return ids;
}

async function getProfessorById(id: string) {
    const professor = await getRepository(Professor).find({
        where: {
            id
        }
    });

    return professor;
}

async function getIdProfessorByName(name: string) {
    console.log(name)
    const professor = await getRepository(Professor).find({
        where: {
            name
        }
    });

    console.log(professor);

    return professor[0].id;
}

export {
    getAllProfessorsSubjects,
    getProfessorById,
    getIdProfessorByName
}