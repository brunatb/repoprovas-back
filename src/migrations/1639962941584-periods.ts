import {MigrationInterface, QueryRunner} from "typeorm";

export class periods1639962941584 implements MigrationInterface {
    name = 'periods1639962941584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "periods" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_0a192306a0c7abbcfc1106b434e" UNIQUE ("name"), CONSTRAINT "PK_86c6afb6c818d97dc321898627c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_f9db75a00bf67b296be74649f45" FOREIGN KEY ("period_id") REFERENCES "periods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_f9db75a00bf67b296be74649f45"`);
        await queryRunner.query(`DROP TABLE "periods"`);
    }

}
