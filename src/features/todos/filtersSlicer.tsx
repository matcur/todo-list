import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoColor, TodoStatus } from "./todosSlicer";

export interface IFilterState {
  status: TodoStatus | 'all',
  colors: TodoColor[],
}

const initialState: IFilterState = {
  status: 'all',
  colors: []
}

const filterSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    colorAdded: (state, action: PayloadAction<TodoColor>) => {
      state.colors.push(action.payload)
    },
    colorRemoved: (state, action: PayloadAction<TodoColor>) => {
      let colors = state.colors
      let i = colors.indexOf(action.payload)
      colors.splice(i, 1)
    },
    statusChanged: (state: IFilterState, action: PayloadAction<IFilterState["status"]>) => {
      state.status = action.payload
    }
  }
})

export const {colorAdded, colorRemoved, statusChanged } = filterSlice.actions

export default filterSlice.reducer