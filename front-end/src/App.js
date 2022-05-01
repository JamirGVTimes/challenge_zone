import React from 'react';
import Bgimahood_logo from './Pics/Bgimahood_logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Login from './components/Login';
import UserHome from './components/UserHome';

function App() {
  return (
    <div className="App">
      <img src={Bgimahood_logo} alt='bgima_logo' />
      <Login />
      <hr/>
      <UserHome />
    </div>
  );
}

export default App;
