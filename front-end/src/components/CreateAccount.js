import { useState } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import {useDispatch } from 'react-redux';
import axios from 'axios';
import Bgimahood_logo from '../Pics/Bgimahood_logo.svg';
import { closeModal } from '../features/modalSlice';
import ReplyOnJoin from './ReplyOnJoin';

const CreateAccount = () => {
    const [details, setDetails] = useState({
        fullName: '',
        email: '',
        contact: '',
        password: ''
    });
    const [errHand, setErrHand] = useState('');
    const [pw1, setpw1] = useState('');
      const [pw2, setpw2] = useState('');
    const dispatch = useDispatch();      
    function onFinish() {
        if (pw1 != pw2) {
            setErrHand(() => (
                <div style={{color:'red', fontSize:'1.2em'}}>
                   The Passwords you entered do not match!!!
                </div>
            ))
        } else {
            const newUser = {
                userName: details.fullName,
                email: details.email,
                contact: details.contact,
                password: pw1
            };
            setErrHand(() => (
                    <div>
                       <ReplyOnJoin /> 
                    </div>

            ));
            setDetails({
                fullName: '',
                email: '',
                contact: '',
                password: ''
            });
        axios.post('/bgima/user', newUser)
            .then((res) => {
                console.log(res);                
            
            })
            .catch((error) => {
                console.log(error);
            });
            };
        };
        
    return (
        <>
            <div className="modal-container">
                <div className="modal-conte">
                    <img src={Bgimahood_logo} alt='bgima_logo' />
                    {errHand}
            <Form
                onFinish={onFinish}
                autoComplete="off"
                layout='vertical'
                className='content'
            >
                <Form.Item
                    label="Full names:"
                    value={details.fullName}
                    onChange={(e) => setDetails({...details, fullName: e.target.value })}
                    hasFeedback
                >
                    <Input 
                        type="text"    
                        placeholder='Enter your full names ...'
                        
                    />
                </Form.Item>
                <Form.Item
                    label="Email Address:"
                    value={details.email}
                    onChange={(e) => setDetails({...details,  email: e.target.value })}
                    hasFeedback
                >
                    <Input 
                        type="text"    
                        placeholder='bgimahood@gmail.com'
                    />
                </Form.Item>
                <Form.Item
                    label="Mobile Contact:"
                    value={details.contact}
                    onChange={(e) => setDetails({...details, contact: e.target.value })}
                >
                    <Input
                        type="text"    
                        placeholder='+256-774058894'
                    />
                </Form.Item>
                <Row gutter={6}>
                    <Col span={12}>
                        <Form.Item
                            label='Password:'                            
                        >
                            <Input.Password
                                placeholder='Password'
                                value={pw1}
                                onChange={(e)=>setpw1(e.target.value)}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Confirm Password:"
                        >
                            <Input.Password
                                type='password'
                                placeholder='Password'
                                value={pw2}
                                onChange={(e)=>setpw2(e.target.value)}
                            />
                        </Form.Item>
                    </Col>
                        </Row>
                
                        <Button
                            type='primary'
                            onClick={()=>dispatch(closeModal())}
                        > 
                            Back to Login
                        </Button>
                      
                        <Button
                            type='primary'
                            htmlType='submit' 
                            style={{ width: '40%', float: 'right' }}
                            
                        >
                            Create account
                        </Button>
                
                </Form>
            </div>
        </div>
            
            
        </>

    );
}
export default CreateAccount;