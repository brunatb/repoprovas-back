import { getRepository } from "typeorm";
import Test from "../entities/Test";
import { test_create } from "../protocols/testProtocol";

async function createTest(test: Test) {
    const newTest = await getRepository(Test).create(test);
    await getRepository(Test).save(newTest);

    return newTest;
}

export {
    createTest
}