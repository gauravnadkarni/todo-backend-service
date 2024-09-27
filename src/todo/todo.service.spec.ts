import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  const mockTodoRepository = {
    findOne: jest.fn(),
    update: jest.fn(),
    // Add other methods you need to mock
  };
  let service: TodoService;
  let todoRepository: typeof mockTodoRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService,{
        provide: 'TodoRepository', // Change this to the actual token you're using
        useValue: mockTodoRepository,
      }],
    }).compile();

    service = module.get<TodoService>(TodoService);
    //todoRepository = module.get('TodoRepository');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
