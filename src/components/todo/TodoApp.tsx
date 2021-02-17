import React from "react"
import { TodoColor } from "../../features/todos/todosSlicer"
import { NewTodo } from "./NewTodo"
import { TodoAppFooter } from "./TodoAppFooter"
import { TodoList } from "./TodoList"

export const colors: TodoColor[] = ['red', 'green', 'blue']

export const TodoApp = () => {
  return (
    <div className="todo-app">
      <NewTodo/>
      <TodoList/>
      <TodoAppFooter/>
    </div>
  )
} 