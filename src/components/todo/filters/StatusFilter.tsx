import React from "react"
import { useDispatch } from "react-redux"
import { IFilterState, statusChanged } from "../../../features/todos/filtersSlicer"

export const StatusFilter = () => {
  const dispatch = useDispatch()

  const changeStatus = (status: IFilterState["status"]) => {
    dispatch(statusChanged(status))
  }

  return (
    <div className="status-filters-column column">
      <div className="status-filters-header">Filter by status</div>
      <div className="status-filters">
        <div
          onClick={e => changeStatus('all')}
         className="status-filter">All</div>
        <div
          onClick={e => changeStatus('active')}
         className="status-filter">Active</div>
        <div
          onClick={e => changeStatus('completed')}
         className="status-filter">Completed</div>
      </div>
    </div>
  )
}