import { getRepository } from "typeorm";
import Test from "../entities/Test";
import * as professorService from "../services/professorService";
import * as subjectService from "../services/subjectServices";
import * as categoryService from "../services/categoryServices";

async function createTest(test: Test) {
    const newTest = await getRepository(Test).create(test);
    await getRepository(Test).save(newTest);

    return newTest;
}

async function getTestByProfessorId(id: string) {
  let datas : any =[];
  const professor = await professorService.getProfessorById(Number(id));
  const tests = await getRepository(Test).find({
      relations: ['professor'],
      where: { professor: { id: Number(id)} },
  });
  
  for(let i=0; i<tests.length; i++){
    const subject = await subjectService.getSubjectById(tests[i].subject.id);
    const category = await categoryService.getCategoryById(tests[i].category.id);
    let data = {
      name:tests[i].name,
      link:tests[i].pdfLink,  
      subject:subject.name,
      category:category.name,
      professor:professor.name,
    };
    datas.push(data);
  }

  return datas;
}

export {
    createTest,
    getTestByProfessorId,
}