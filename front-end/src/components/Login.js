import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/userSlice';
import Bgimahood_logo from '../Pics/Bgimahood_logo.svg';
import { setAuth } from '../features/authSlice';
import { openModal } from '../features/modalSlice';
import CreateAccount from './CreateAccount';

const Login = () => {   
    const [user, setUser] = useState([{
        userName:'',
        email: '',
        contact: '',
        password: ''
    }]);
    const [searchEmail, setSearchEmail] = useState('');
    const [searchPassword, setSearchPassword] = useState('');
    const modal = useSelector((pop) => pop.modalPopIn.value);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('/bgima/users').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(userJson => setUser(userJson));
     }); 
    const handleSubmit =(e)=>{
        e.preventDefault();           
        const adf = user.find((df) => df.email === searchEmail && df.password === searchPassword);
        if (adf === undefined) {
            return console.log('failed');
        } 
        console.log('success');
        dispatch(setAuth()); 
        dispatch(login({
            userName: adf.userName,
            email: adf.email,
            contact: adf.contact,
            password: adf.password
            }));
    };     
    
    return (
        <>
            <div className="card-view">
                <img src={Bgimahood_logo} alt='bgima_logo' />
                <div className="header blue">Welcome to Bgimahood Inc Techs</div>
                <div className="form-container">
                    <form className='user-form' onSubmit={handleSubmit}>
                                <p>
                                    <label>Email:</label><br/>
                                    <input
                                        type='text'
                                        placeholder="Enter your email"
                                        value={searchEmail}
                                        onChange={(e)=>setSearchEmail(e.target.value)}
                                    />
                                </p>
                                <p>
                                    <label>Password:</label>
                                    <input 
                                        type='password' 
                                        placeholder="Password"
                                        value={searchPassword}
                                        onChange={(e)=>setSearchPassword(e.target.value)}
                                    />
                                </p>
                                
                                <button
                                    className="btn blue"                                   
                                  >
                                      Login
                                 </button>
                        <Button
                            type='link'
                            onClick={()=>dispatch(openModal())}
                        >
                            Create Account
                        </Button> 
                    </form>   
                </div>
               {modal && <CreateAccount/>}
            </div>
            
        </>
    );
}
export default Login;