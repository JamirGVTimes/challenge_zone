import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todoSlice';
import { closeModal } from '../features/modalSlice';



function TodoCreate() {
    const [guys, setGuys] = useState({
        todoTi: '',
        todoDesc: ''
    });
    const [reply, setReply] = useState(() => (
        <div style={{ color: '#aaa', fontSize: '1.3em' }}>
           Create todo here...
        </div>
    ));
    const dispatch = useDispatch();
    const user1 = useSelector((vg) => vg.user.value);
    const onFinish =()=> {
        dispatch(addTodo({
            userName: user1.userName,
            todoTitle: guys.todoTi,
            todoDescription: guys.todoDesc
        }));
        const newTodo = {
            userName: user1.userName,
            todoTitle: guys.todoTi,
            todoDescription: guys.todoDesc
        };        
        axios.post('/bgima/usercreate-todo', newTodo)
            .then((res) => {
                console.log(res);
                setReply(() => (
                    <div style={{ color: 'green', fontSize: '1.1em' }}>
                       <h4> ...Todo added successfully</h4>  
                      <i>You can create a new One or Close </i>
                    </div>
                ));
                setGuys({
                    todoTi: '',
                    todoDesc: ''
                });

            })
            .catch((error) => {
                console.log(error);
            });
        
    };
 

        return (
            <div className='modal-container'>                
                <div className="modal-conte">
                    {reply}
                    <Form
                        layout='vertical'
                        onFinish={onFinish}
                        autoComplete="off"
                        initialValues={false }
                        className='content'
                    >
                       
                        <Form.Item
                            label='Todo Title:'                          
                        >
                            <Input
                                name='todoTitle'
                                placeholder='Enter title'
                                value={guys.todoTi}
                                onChange={(e)=>setGuys({...guys, todoTi:e.target.value})} 
                            />
                        </Form.Item>
                        <Form.Item
                            label='Description:'
                            
                        >
                            <Input.TextArea
                                name='todoDescription'
                                placeholder='Add descriptio...'
                                onChange={(e) => setGuys({ ...guys, todoDesc: e.target.value })}
                                value={guys.todoDesc}
                                rows={5}
                            />
                        </Form.Item>
                         
                            <Button                       
                                type='primary' htmlType='submit'> Add toto </Button>
                          
                            <Link to='/home/view-todos'>
                            <button className='btn orange' onClick={() => dispatch(closeModal())}> Close </button>
                         </Link>
                    </Form>
                </div>
            </div>
        );
    };

export default TodoCreate;

