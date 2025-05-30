import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { ReactNode } from "react";

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
  createdAt: ReactNode;
};
const initialTodo: Todo[] = [];
export const todoSlice = createSlice({
  name: "Todo",
  initialState: initialTodo,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    edit(state, action) {
      const editedTodo = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[editedTodo] = {
        ...state[editedTodo],
        title: action.payload.title,
      };
    },
    markAsDone(state, action) {
      const markedAsDoneTodo = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[markedAsDoneTodo] = {
        ...state[markedAsDoneTodo],
        isDone: true,
      };
    },
  },
});

export const todoActions = todoSlice.actions;
export const store = configureStore({
  reducer: todoSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
