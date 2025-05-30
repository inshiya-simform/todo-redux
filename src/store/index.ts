import { configureStore, createSlice } from "@reduxjs/toolkit";

type InitialTodo ={
    title:string,
    isDone: boolean,
    createdAt: Date,
}
const initialTodo:InitialTodo[] = []
const todoSlice = createSlice({
    name:'todo',
    initialState: initialTodo,
    reducers: {
        add(state,action){
            state.push(action.payload)
        }
    }
})

export const todoActions = todoSlice.actions;
export const store = configureStore({
    reducer: todoSlice.reducer
})