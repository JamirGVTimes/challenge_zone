import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'authenticate',
    initialState: { value:false },
    reducers: {
        setAuth: (state) => {
            state.value = true;
        },
        setAuthOut:(state)=>{
            state.value = false;
        },
    },
});
export const { setAuth, setAuthOut } = authSlice.actions;
export default authSlice.reducer;