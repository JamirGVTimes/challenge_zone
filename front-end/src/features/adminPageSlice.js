import { createSlice } from '@reduxjs/toolkit';

export const adminPageSlice = createSlice({
    name: 'adminPage',
    initialState: { value:false },
    reducers: {
        isAdmin: (state) => {
            state.value = true;
        },
        notAdmin: (state) => {
            state.value = false;
        },
    },
});
export const { isAdmin, notAdmin } = adminPageSlice.actions;
export default adminPageSlice.reducer;