import { useState } from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import {useDispatch } from 'react-redux';
import axios from 'axios';
import Bgimahood_logo from '../Pics/Bgimahood_logo.svg';
import { closeModal } from '../features/modalSlice';

const CreateAccount = () => {
    const [details, setDetails] = useState([{
        fullName: '',
        email: '',
        contact: '',
        password: ''
    }]);
    const dispatch = useDispatch();      
    function onFinish() {
        message.success("Account created successfully");
        const newUser = {
            userName: details.fullName,
            email: details.email,
            contact: details.contact,
            password: details.password
        }
        axios.post('/bgima/user', newUser)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
        dispatch(closeModal());
    }
    return (
        <>
            <div className="modal-container">
                <div className="modal-conte">
                    <img src={Bgimahood_logo} alt='bgima_logo' />
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
                            value={details.password}
                            onChange={(e)=>setDetails({...details, password: e.target.value})}
                        >
                            <Input.Password
                                type='password'
                                placeholder='Password'
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