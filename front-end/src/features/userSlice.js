import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: { userName: '', email: '', contact: '', password:'' } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = {userName:"", email:"", contact:"", password:""}
        },
        editTodo: (state, action) => {
            state.value = action.payload;
        }
    },
});
export const { login, logout, editTodo } = userSlice.actions;
export default userSlice.reducer;