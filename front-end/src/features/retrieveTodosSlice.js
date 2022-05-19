import { createSlice } from '@reduxjs/toolkit';

export const retrieveTodoSlice = createSlice({
    name: 'retrieveTodos',
    initialState: { value:[{_id:'',userName:'',todoTitle:'', todoDescription:'',updatedAt:''}] },
    reducers: {
        todoSet: (state,action) => {
            state.value = action.payload;
        },
        emptyTodoSet: (state) => {
            state.value = {value:[{ _id: '', userName: '', todoTitle: '', todoDescription: '', updatedAt: '' }]};
        },
    },
});
export const { todoSet, emptyTodoSet } = retrieveTodoSlice.actions;
export default retrieveTodoSlice.reducer;