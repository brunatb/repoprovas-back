import { getRepository } from "typeorm";
import Category from "../entities/Category";
import Period from "../entities/Period";

async function getIdCategoryByName(name: string) {
    const category = await getRepository(Category).find({
        where: {
            name
        }
    });

    return category[0].id;
}

async function getCategoryById(id: number) {
    const category = await getRepository(Category).find({
        where: {
            id
        }
    });

    return category[0];
}

async function getAllPeriods() {
    const periods = await getRepository(Period).find({});
    return periods;
}

export {
    getIdCategoryByName,
    getAllPeriods,
    getCategoryById
}