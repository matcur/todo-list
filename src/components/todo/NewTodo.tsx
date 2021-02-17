import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { todoAdded } from "../../features/todos/todosSlicer"

export const NewTodo = () => {
  const [title, setTitle] = useState('')

  const dispath = useDispatch()
  
  const saveTodo = () => {
    dispath(todoAdded({title}))
    setTitle('')
  }

  return (
    <div className="new-todo">
      <input 
        className="new-todo-input"
        type="text"
        onChange={e => setTitle(e.target.value)}/>
      <button onClick={e => saveTodo()}>Save</button>
    </div>
  )
}