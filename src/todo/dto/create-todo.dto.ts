import { IDto } from 'src/shared/dto/Idto';
import { Todo as TodoEntity } from '../entities/todo.entity';

export class CreateTodoDto implements IDto<CreateTodoDto, TodoEntity> {
  id: string | undefined;
  title: string;
  dueDate: Date | undefined;
  isDone: boolean;
 
  toEntity(createTodoDto?: CreateTodoDto): TodoEntity {
    const dto = createTodoDto || this;
    const todoEntity: TodoEntity = new TodoEntity();
    todoEntity.id=  dto.id;
    todoEntity.title = dto.title ;
    todoEntity.dueDate= dto.dueDate;
    todoEntity.isDone= dto.isDone;
    return todoEntity;
  }
}
