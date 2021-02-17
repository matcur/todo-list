import React from "react"
import { useDispatch } from "react-redux"
import { allActived, allCompleted } from "../../../features/todos/todosSlicer"

export const ActionFilter = () => {
  const dispatch = useDispatch()

  const completeTodos = () => {
    dispatch(allCompleted())
  }
  const activeTodos = () => {
    dispatch(allActived())
  }

  return (
    <div className="action-column column">
      <div className="action-header">Actions</div>
      <div className="actions">
        <div onClick={completeTodos} className="complet-all action">Complete all</div>
        <div onClick={activeTodos} className="clear-all action">Clear all</div>
      </div>
    </div>
  )
}