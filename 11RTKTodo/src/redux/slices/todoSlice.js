import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos: [{ id: 1, text: 'hello world' }]
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ id: nanoid(), text: action.payload.text })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(ele => {
                return ele.id !== action.payload.id;
            })
        },
    }
}
);
export const { addTodo, removeTodo } = todoSlice.actions;
export const todoSliceReducer = todoSlice.reducer;
