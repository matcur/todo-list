import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ITodo } from "../../models";
import { NullableExcept } from "../../utils/types/NullableExcept";

export type TodoColor = 'red' | 'green' | 'blue'

export type TodoStatus = 'completed' | 'active'

const initialState: ITodo[] = [
  {
    id: 1,
    title: 'first',
    status: 'active',
    color: 'red',
  },
  {
    id: 2,
    title: 'first 2',
    status: 'active',
    color: 'red',
  },
  {
    id: 3,
    title: 'first 3',
    status: 'completed',
    color: 'blue',
  },
]

const getNextId = (todos: ITodo[]) => {
  const result = todos.map(t => t.id).reduce((maxId, id) => Math.max(maxId, id), 0)

  return result
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: (state: ITodo[], action: PayloadAction<{ title: string }>) => {
      state.push({
        id: getNextId(state),
        status: 'active',
        color: 'red',
        ...action.payload
      })
    },
    allCompleted: (state: ITodo[]) => {
      state.forEach(t => t.status = 'completed')      
    },
    allActived: (state: ITodo[]) => {
      state.forEach(t => t.status = 'active')
    },
    todoUpdated: (state: ITodo[], action: PayloadAction<NullableExcept<ITodo, 'id'>>) => {
      const payload = action.payload
      let todo = state.find(t => t.id == payload.id)
      if (todo != undefined)
        todo = Object.assign(todo, payload)
    },
  }
})

export const completedTodosSelector = (state: RootState) => state.todos.filter(t => t.status == 'completed')

export const { todoAdded, todoUpdated, allCompleted, allActived } = todosSlice.actions

export default todosSlice.reducer