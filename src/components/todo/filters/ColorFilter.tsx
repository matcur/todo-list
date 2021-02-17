import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { colorAdded, colorRemoved } from "../../../features/todos/filtersSlicer";
import { TodoColor } from "../../../features/todos/todosSlicer";
import { colors } from "../TodoApp"

export const ColorFilter = () => {
  const filterColors = useSelector<RootState, TodoColor[]>(state => state.filters.colors)

  const dispatch = useDispatch();

  const updateFilterColor = (color: TodoColor) => {
    if (isChosenColor(color))
      dispatch(colorRemoved(color))
    else
      dispatch(colorAdded(color))
  }
  const isChosenColor = (color: TodoColor) => filterColors.includes(color)
  
  return (
    <div className="color-filters-column column">
      <div className="color-filters-header">Filter by color</div>
      <div className="color-filters">
        {colors.map((c, i) => (
          <div key={i} className="color-filter">
            <input
              onChange={e => updateFilterColor(c)} 
              type="checkbox"
              name="todo-colors"/>
            <span style={{color: c}}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  )
}