import {MigrationInterface, QueryRunner} from "typeorm";

export class periods1639956514561 implements MigrationInterface {
    name = 'periods1639956514561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "periods" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_0a192306a0c7abbcfc1106b434e" UNIQUE ("name"), CONSTRAINT "PK_86c6afb6c818d97dc321898627c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "periods"`);
    }

}
