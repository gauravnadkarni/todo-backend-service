import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
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
  @UsePipes(new ValidationPipe({transform:true}))
  async create(@Body() createTodo: CreateTodoDto): Promise<TodoEntity> {
    return this.todoService.addTodo(createTodo);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({transform:true}))
  async update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<TodoEntity> {
    return this.todoService.updateTodo(id,updateTodoDto);
  }

  @Get()
  async list(
    @Query('start') start: number= 1,
    @Query('limit') limit: number= 10,
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
