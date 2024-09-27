import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

describe('TodoController', () => {
  const mockTodoService = {
    addTodo: jest.fn(),
    getTodoById: jest.fn(),
    updateTodo: jest.fn(),
    listAllTodosPaginated: jest.fn(),
    deleteTodo: jest.fn(),
    // Add other methods you need to mock
  };
  const mockTodoRepository = {
    findOne: jest.fn(),
    update: jest.fn(),
    // Add other methods you need to mock
  };
  let controller: TodoController;
  let todoService: typeof mockTodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers:[TodoService,{
        provide: 'TodoRepository', // Change this to the actual token you're using
        useValue: mockTodoRepository,
      },{
        provide: 'TodoService', // Change this to the actual token you're using
        useValue: mockTodoService,
      }]
    }).compile();

    controller = module.get<TodoController>(TodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
