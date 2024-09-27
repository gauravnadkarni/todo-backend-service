import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTodosTable1727433714039 implements MigrationInterface {
    name = 'CreateTodosTable1727433714039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tbl_todos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "isCompleted" boolean NOT NULL, "dueDate" TIMESTAMP, "createdBy" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1fac50b7051ec22ad0a1f4dbf42" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tbl_todos"`);
    }

}
