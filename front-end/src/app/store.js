import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todoSlice';
import userReducer from '../features/userSlice';
import authReducer from '../features/authSlice';
import modalReducer from '../features/modalSlice';
import adminPageReducer from '../features/adminPageSlice';
import retrieveTodosSlice from '../features/retrieveTodosSlice';
import retrievedUsersSlice from '../features/retrievedUsersSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    user: userReducer,
    authenticate: authReducer,
    modalPopIn: modalReducer,
    adminPage: adminPageReducer,
    retrieveTodos: retrieveTodosSlice,
    retrieveUsers: retrievedUsersSlice,
  },
});
