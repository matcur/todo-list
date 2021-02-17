import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { IFilterState } from "../../features/todos/filtersSlicer"
import { ITodo } from "../../models"
import { Todo } from "./Todo"

export const TodoList = () => {
  const todos = useSelector<RootState, ITodo[]>(state => state.todos)
  const filters = useSelector<RootState, IFilterState>(state => state.filters)

  const getFilteredTodos = () => {
    const status = filters.status
    const colors = filters.colors
    
    return todos.filter(
      t => (t.status == status || status == 'all') && colors.includes(t.color)
    )
  }
  
  return (
    <div className="todo-list">
      {getFilteredTodos().map(t => <Todo key={t.id} {...t} />)}
    </div>
  )
}