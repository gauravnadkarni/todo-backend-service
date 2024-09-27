import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo as TodoEntity } from './entities/todo.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get("test")
  async get(@Body() createTodo: CreateTodoDto): Promise<void> {
    console.log("test successful");
  }

  @Post()
  async create(@Body() createTodo: CreateTodoDto): Promise<TodoEntity> {
    return this.todoService.addTodo(createTodo);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<TodoEntity> {
    return this.todoService.updateTodo(id,updateTodoDto);
  }

  @Get()
  async list(
    @Query('start') start: number,
    @Query('limit') limit: number,
  ): Promise<Array<TodoEntity>> {
    return this.todoService.listAllTodosPaginated(start,limit);
  }

  @Get(":id")
  async byId(
    @Param('id') id: string,
  ): Promise<TodoEntity> {
    return this.todoService.getTodoById(id);
  }

  @Delete(":id")
  async delete(@Param('id') id: string): Promise<void> {
    await this.todoService.deleteTodo(id);
  }
}
