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
export {
    getAllProfessorsSubjects,
    getProfessorById,
}