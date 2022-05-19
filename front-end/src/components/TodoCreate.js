import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../features/todoSlice';
import { closeModal } from '../features/modalSlice';



function TodoCreate() {
    const [guys, setGuys] = useState({
        todoTi: '',
        todoDesc: ''
    });
    const dispatch = useDispatch();
    const user1 = useSelector((vg) => vg.user.value);
    const onFinish =()=> {
        dispatch(addTodo({
            userName: user1.userName,
            todoTitle: guys.todoTi,
            todoDescription: guys.todoDesc
        }));
        dispatch(closeModal());
        const newTodo = {
            userName: user1.userName,
            todoTitle: guys.todoTi,
            todoDescription: guys.todoDesc
        };        
        axios.post('/bgima/usercreate-todo', newTodo)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
        
    };
 

        return (
            <div className='modal-container'>                
                <div className="modal-conte">
                    Create your todo here!
                    <Form
                        layout='vertical'
                        onFinish={onFinish}
                        autoComplete="off"
                        initialValues={false }
                        className='content'
                    >
                       
                        <Form.Item
                            label='Todo Title:'
                            onChange={(e)=>setGuys({...guys, todoTi:e.target.value})}
                            value={guys.todoTi}
                        >
                            <Input
                                name='todoTitle'
                                placeholder='Enter title'
                            />
                        </Form.Item>
                        <Form.Item
                            label='Description:'
                            onChange={(e)=>setGuys({...guys, todoDesc:e.target.value})}
                            value={guys.todoDesc}
                        >
                            <Input.TextArea
                                name='todoDescription'
                                placeholder='Add descriptio...'
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

