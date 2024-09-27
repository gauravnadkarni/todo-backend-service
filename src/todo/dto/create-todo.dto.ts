import { IDto } from 'src/shared/dto/Idto';
import { Todo as TodoEntity } from '../entities/todo.entity';

export class CreateTodoDto implements IDto<CreateTodoDto, TodoEntity> {
  id: string | undefined;
  title: string;
  dueDate: Date;
  isCompleted: boolean | undefined;
 
  toEntity(createTodoDto?: CreateTodoDto): TodoEntity {
    const dto = createTodoDto || this;
    const todoEntity: TodoEntity = new TodoEntity();
    todoEntity.id=  dto.id;
    todoEntity.title = dto.title ;
    todoEntity.dueDate= dto.dueDate;
    todoEntity.isCompleted= dto.isCompleted;
    return todoEntity;
  }
}
