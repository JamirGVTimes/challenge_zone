import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import UserHome from './components/UserHome';
import TodoCreate from './components/TodoCreate';
import TodoDisplay from './components/TodoDisplay';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';
import AdminHome from './components/AdminHome';
import AdminUsersView from './components/AdminUsersView';
import Swapper from './Swapper';
import SingleTodoView from './components/SingleTodoView';

function AuthTest() {
    return (       
      <Routes>
        <Route path='/' element={<Swapper />}/>
          <Route path='/home' element={<Layout/>}>
             <Route  index element={<UserHome />} /> 
              <Route path='/home/create-todo' element={<TodoCreate />} />
          <Route path='/home/view-todos' element={<TodoDisplay />} />  
          <Route path='/home/view-todos/:id' element={<SingleTodoView/>}/>
          </Route>
            <Route path='/home/admin' element={<AdminLayout/>}>
              <Route index element={<AdminHome/>}/>
              <Route path='/home/admin/users' element={<AdminUsersView />} />
            </Route>           
          </Routes>       
    );
}

export default AuthTest;
