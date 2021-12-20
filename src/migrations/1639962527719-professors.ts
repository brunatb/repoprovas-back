import {MigrationInterface, QueryRunner} from "typeorm";

export class professors1639962527719 implements MigrationInterface {
    name = 'professors1639962527719'

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.query(`CREATE TABLE "professors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "professors"`);
    }

}
