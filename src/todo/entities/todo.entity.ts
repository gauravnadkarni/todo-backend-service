// src/entities/user.entity.ts
import { table } from 'console';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("tbl_todos")
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({default: false})
  isDone: boolean;

  @Column({ type: 'timestamp', nullable:true})
  dueDate: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdBy: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedBy: Date;
}
