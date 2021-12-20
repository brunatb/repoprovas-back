import { getRepository } from "typeorm";
import Professor from "../entities/Professor";

async function getAllProfessorsSubjects() {
    const ids = await getRepository(Professor).find({});

    console.log(ids);
    return ids;
}

export {
    getAllProfessorsSubjects,
}