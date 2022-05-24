import { createSlice } from '@reduxjs/toolkit';

export const retrivedUsersSlice = createSlice({
    name: 'retrieveUsers',
    initialState: { value:[{_id:'', userName:'', email:'', contact:'', password:'',updatedAt:''}] },
    reducers: {
        usersFetch: (state,action) => {
            state.value = action.payload;
        },
    },
});
export const { usersFetch} = retrivedUsersSlice.actions;
export default retrivedUsersSlice.reducer;