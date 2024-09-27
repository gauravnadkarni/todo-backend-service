import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodoTable1724424520168 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE tbl_todos (
                id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
                title character varying NOT NULL,
                dueDate timestamp with time zone,
                isCompleted boolean NOT NULL,
                createdAt timestamp with time zone default CURRENT_TIMESTAMP,
                updatedAt timestamp with time zone default CURRENT_TIMESTAMP
            )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE tbl_todos`);
  }
}
