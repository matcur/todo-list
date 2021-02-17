import { TodoColor, TodoStatus } from "./features/todos/todosSlicer";

export interface ITodo {
  id: number
  title: string
  status: TodoStatus,
  color: TodoColor,
}