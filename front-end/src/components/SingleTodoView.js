import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import {Divider, Input, Row, Col, Form} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { todoSet } from '../features/retrieveTodosSlice';


const SingleTodoView = () => {
    const location = useLocation();
    const { id } = location.state;
    const retrievedTodos = useSelector((todox) => todox.retrieveTodos.value);
    const [updateTodo, setUpdateTodo] = useState({
        id: id,
        todoTi: '',
        todoDes: ''
    });
    const user = useSelector((guy) => guy.user.value);  
    const dispatch = useDispatch();
    const thisTodo = retrievedTodos.filter((doh) => doh._id === id);

    useEffect(() => {
        axios.get('/bgima/user-created-todos')
            .then((res) => {
                dispatch(todoSet(res.data));
            });         
    });
   //This useEffect above is looping: the resaon is, 
   //i need it to get an update automatically on the same page

    const handleUpdate = (id) => {        
        const updateObj = {
            userName: user.userName,
            todoTitle: updateTodo.todoTi,
            todoDescription: updateTodo.todoDes
        };
       axios.put(`/bgima/update-todo/${id}`, updateObj)
         .then((response) => {
             console.log(response.data);
      });
    };

    return ( 
        <div>
            <Link to='/home/view-todos'> Back to Todos </Link> | Single todo Preview
        <Divider dashed/>
            {thisTodo.map((fg) => {
                return (
                    <div>
                    <div key={Math.random()} className='single-todo'>
                       
                            <Col span={24}>
                                <Form
                                layout='vertical'
                                className='form-single'
                                >
                                    <Form.Item
                                    label='Todo Title:'
                                    >
                                        <Input
                                            value={fg.todoTitle}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label='Todo Description:'
                                    >
                                        <Input.TextArea
                                            value={fg.todoDescription}
                                            rows={4}
                                        />
                                    </Form.Item>
                                </Form>  
                                <Divider />
                                <Link to='/home/view-todos'>
                                    <button className='btn blue'> Back to List</button>
                                </Link>                                
                               
                            
                            </Col>
                    </div>
                    <div className='single-todo'>
                            <Col span={24}>
                                <Form
                                    layout='vertical'
                                >
                                    <Form.Item
                                        label='New Todo Title:'     
                                    >
                                    <Input
                                        placeholder='Todo Title'
                                        value={updateTodo.todoTi}
                                        onChange={(e)=>setUpdateTodo({...updateTodo, todoTi: e.target.value})}
                                    />
                                    </Form.Item>
                                    <Form.Item
                                        label=' New Todo Description:'                                        
                                    >
                                     <Input.TextArea
                                        value={updateTodo.todoDes}
                                        onChange={(e)=>setUpdateTodo({...updateTodo, todoDes: e.target.value})}
                                        rows={4}
                                        placeholder='Todo Description'
                                        />
                                    </Form.Item>
                                </Form>  
                                <Divider />
                                
                                <button
                                    className='btn orange'
                                    onClick={() => {
                                        handleUpdate(fg._id);
                                    }}
                                > Update Details</button>
                            </Col>
                      
                        </div>
                        </div>
                )
            })}

           
                     
              
                            
        </div>
    );
}

export default SingleTodoView;