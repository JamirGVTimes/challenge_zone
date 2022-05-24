import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: { value: { userName: '', todoTitle: '', todoDescription: '' } },
    reducers: {
        addTodo: (state, action) => {
            state.value = action.payload;
        },
        deleteTodo: (state) => {
            state.value = {name:"", email:"", contact:""}
        },
        editTodo: (state, action) => {
            state.value = action.payload;
        }
    },
});
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;