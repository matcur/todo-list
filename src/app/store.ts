import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlicer';
import filtersResucer from '../features/todos/filtersSlicer';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersResucer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
