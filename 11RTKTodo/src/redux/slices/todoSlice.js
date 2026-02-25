import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos: [{ id: nanoid(), text: 'hello world' }]
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (action.payload.text.trim() === '') {
                alert('Please write something');
                return;
            }
            state.todos.push({ id: nanoid(), text: action.payload.text })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(ele => {
                return ele.id !== action.payload.id;
            })
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(ele => {
                if (action.payload.text.trim() === '') {
                    alert('Please write something');
                    return;
                }
                if (ele.id === action.payload.id) return { ...ele, text: action.payload.text }
                return ele;
            })
        }
    }

}
);
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export const todoSliceReducer = todoSlice.reducer;
