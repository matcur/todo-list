import React from "react"
import { useSelector } from "react-redux"
import { completedTodosSelector } from "../../features/todos/todosSlicer"
import { ActionFilter } from "./filters/ActionFilter"
import { ColorFilter } from "./filters/ColorFilter"
import { StatusFilter } from "./filters/StatusFilter"

export const TodoAppFooter = () => {
  const completedTodoCount = useSelector(completedTodosSelector).length

  return (
    <div className="todo-footer">
      <ActionFilter/>
      <div className="remaining-todos-column column">
        <div className="remaining-todos-header">Remaining todos</div>
        <div className="remaining-todos-info">
            {completedTodoCount} item{completedTodoCount != 0? 's': ''} left
        </div>
      </div>
      <ColorFilter/>
      <StatusFilter/>
    </div>
  )
}