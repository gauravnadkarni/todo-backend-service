// src/entities/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  isCompleted: boolean;

  @Column()
  dueDate: Date;

  @Column()
  createdBy: Date;

  @Column()
  updatedBy: Date;
}
