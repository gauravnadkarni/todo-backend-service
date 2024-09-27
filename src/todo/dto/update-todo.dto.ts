export class UpdateTodoDto {
  readonly title: string;
  readonly dueDate?: Date;
  readonly isCompleted?: boolean;
}
