import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo as TodoEntity } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  async addTodo(createTodoDto: CreateTodoDto) {
    const todoEntity = createTodoDto.toEntity();
    return this.todoRepository.save(todoEntity);
  }

  async getTodoById(id: string): Promise<TodoEntity> {
    const todoEntity: TodoEntity = await this.todoRepository.findOneBy({ id });
    if (!todoEntity) {
      return undefined;
    }
    return todoEntity;
  }

  async updateTodo(id: string, updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
    return this.todoRepository.manager.transaction(async (transactionalEntityManager) => {
        const todoEntity:TodoEntity = await transactionalEntityManager.findOne(TodoEntity,{where:{id}})
        if(!todoEntity) {
          return;
        }
  
        await transactionalEntityManager.update(TodoEntity,{id},{
          title: updateTodoDto.title,
          dueDate: updateTodoDto.dueDate,
          isDone:updateTodoDto.isDone,
        });
        return transactionalEntityManager.findOne(TodoEntity, { where: { id } });;
    });
  }

  async listAllTodosPaginated(start: number, pageSize: number): Promise<Array<TodoEntity>> {
    const todoEntities: Array<TodoEntity> = await this.todoRepository.find({
        skip: (start - 1) * pageSize,
        take: pageSize,
      });

    return todoEntities;
  }

  async deleteTodo(id: string): Promise<void> {
    await this.todoRepository.manager.transaction(async (transactionalEntityManager) => {
        const todoEntity:TodoEntity = await transactionalEntityManager.findOne(TodoEntity,{where:{id}})
        if(!todoEntity) {
          return;
        }
  
        const result= await transactionalEntityManager.delete(TodoEntity,{id});

        if (result.affected === 0) {
          throw new NotFoundException(`Todo with ID ${id} not found`);
        }
    });
  }
}
