import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input,Col, Row } from 'antd';
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
    const [errorHand, setErrorHand] = useState('');
    const modal = useSelector((pop) => pop.modalPopIn.value);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('/bgima/users').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(userJson => setUser(userJson));
    }); 
   const adf = user.find((df) => df.email === searchEmail && df.password === searchPassword);
    const onFinish =()=>{       
        if (adf === undefined) {
            console.log('failed');
            setErrorHand(() => (
                <>
                    Incorrect Username or Password, Retry!!!
                </>
            ));
            setSearchPassword('');
        } else {
            console.log('success');
            dispatch(setAuth());
            dispatch(login({
                userName: adf.userName,
                email: adf.email,
                contact: adf.contact,
                password: adf.password
            }));
        };
    };   
    return (
        <>
            <div className="card-view">
                <img src={Bgimahood_logo} alt='bgima_logo' />
                <div className="header blue">Welcome to Bgimahood Inc Techs</div>
                <div className="form-container">
                    <h4 style={{color:'red',textAlign:'center'}}>{ errorHand }</h4>
                    <Form
                        layout='vertical'
                        onFinish={onFinish}
                    >
                             
                         <Form.Item
                            label='Email:'
                            rules={[{ required: true, message: 'Please enter your username!' }]}
                            >
                            <Input
                                type='text'
                                placeholder="Enter your email"
                                value={searchEmail}
                                onChange={(e) => {
                                    setSearchEmail(e.target.value);
                                    setErrorHand('');
                                }}
                                />
                        </Form.Item>
                        <Form.Item
                            label='Password:'
                            rules={[{ required: true, message: 'Please enter password!' }]}
                        >
                            <Input.Password
                                placeholder="Password"
                                value={searchPassword}
                                onChange={(e)=>setSearchPassword(e.target.value)}
                            />
                        </Form.Item>
                        <Row>
                            <Col>
                                <Form.Item>
                                    <Button
                                        htmlType='submit'
                                        type='primary'
                                    >Login
                                    </Button>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Button
                                    type='link'
                                    onClick={()=>dispatch(openModal())}
                                >
                                    Create Account
                                </Button>
                            </Col>
                        </Row>
                        
                        
                         
                    </Form>   
                </div>
               {modal && <CreateAccount/>}
            </div>
            
        </>
    );
}
export default Login;