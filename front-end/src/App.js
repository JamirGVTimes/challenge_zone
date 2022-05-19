import React, {useEffect} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Login from './components/Login';
import AuthTest from './AuthTest';
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector((go) => go.authenticate.value);
    return (
        <div className="App">
        {auth ? <AuthTest /> : <Login/>} 
        </div>
            
    );
}

export default App;
