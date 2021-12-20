import {MigrationInterface, QueryRunner} from "typeorm";

export class tests1639982919175 implements MigrationInterface {
    name = 'tests1639982919175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tests" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "pdf_link" character varying NOT NULL, "subject_id" integer, "professor_id" integer, "category_id" integer, CONSTRAINT "PK_4301ca51edf839623386860aed2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_bb708701ab45cf6120ebe279652" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_257351f88db5f46e3d0a0af49e6" FOREIGN KEY ("professor_id") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tests" ADD CONSTRAINT "FK_13bfe0fc818e4966575f0b83195" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_13bfe0fc818e4966575f0b83195"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_257351f88db5f46e3d0a0af49e6"`);
        await queryRunner.query(`ALTER TABLE "tests" DROP CONSTRAINT "FK_bb708701ab45cf6120ebe279652"`);
        await queryRunner.query(`DROP TABLE "tests"`);
    }

}
