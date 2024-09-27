import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { DatabaseModule } from '@/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo as TodoEntity } from './entities/todo.entity';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([TodoEntity])
  ],
  controllers: [TodoController],
  providers: [
    TodoService
  ],
})
export class TodoModule {}
