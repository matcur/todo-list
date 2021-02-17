import React from "react";
import { useDispatch } from "react-redux";
import { TodoColor, todoUpdated } from "../../features/todos/todosSlicer";
import { ITodo } from "../../models";
import { colors } from "./TodoApp";

export const Todo: React.FC<ITodo> = ({ id, title, status, color }) => {
  const dispatch = useDispatch()

  const changeTodoColor = (color: TodoColor) => {
    dispatch(todoUpdated({
      id,
      color,
    }))
  }
  const toggleStatus = () => {
    const newStatus = status == 'active'? 'completed': 'active'
    dispatch(todoUpdated({
      id,
      status: newStatus,
    }))
  }

  const options = colors.map((c, i) => (
    <option value={c} key={i} selected={c == color}>{c}</option>
  ))

  return (
    <div className="todo">
      <div
        onClick={e => toggleStatus()} 
        className={`todo-${status} todo-status`}></div>
      <div className="todo-title">{title}</div>
      <select
        onChange={e => changeTodoColor(e.target.value as TodoColor)}
        className="todo-color">
        {options}
      </select>
    </div>
  )
}