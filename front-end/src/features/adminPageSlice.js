import { createSlice } from '@reduxjs/toolkit';

export const adminPageSlice = createSlice({
    name: 'adminPage',
    initialState: { value:false },
    reducers: {
        isAdmin: (state) => {
            state.value = true;
        },
    },
});
export const { isAdmin } = adminPageSlice.actions;
export default adminPageSlice.reducer;