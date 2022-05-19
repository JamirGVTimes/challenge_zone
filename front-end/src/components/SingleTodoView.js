import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import {Divider, Input, Row, Col, Form} from 'antd'
import { useDispatch, useSelector } from 'react-redux';


const SingleTodoView = () => {
    const [modalD, setModalD] = useState(false);
    const [retrievedTodos, setRetrievedTodos] = useState([]);
    const [updateTodo, setUpdateTodo] = useState({
        todoTi: '',
        todoDes: ''
    });
    const [anotherArray, setAnotherArray] = useState([]);
    useEffect(() => {
        axios.get('/bgima/user-created-todos')
            .then((res) => {
                setRetrievedTodos(res.data)
            });         
    },[]);
    const user = useSelector((guy) => guy.user.value);
    const location = useLocation();
    const { id } = location.state;
    const thisTodo = retrievedTodos.filter((doh) => doh._id === id);

    const handleUpdate = (_id) => {
        const updateObj = {
            userName: user.userName,
            todoTitle: updateTodo.todoTi,
            todoDescription: updateTodo.todoDes
        };
        axios.put(`/bgima/update-todo/${_id}`, updateObj)
            .then((response) => {
                setAnotherArray(response.data);
            })
    };

    return ( 
        <div>
            <Link to='/home/view-todos'> Back to Todos </Link> | Single todo Preview
        <Divider dashed/>
            {thisTodo.map((fg) => {
                return (
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
                               
                            <button
                                className='btn orange'
                                onClick={()=>setModalD(true)}
                            > Update Details</button>
                            </Col>
                    </div>
                )
            })}

            {modalD && 
                <div className='single-todo'>
                            <Col span={24}>
                                <Form
                                    layout='vertical'
                                >
                                    <Form.Item
                                        label='Todo Title:'     
                                    >
                                    <Input
                                        placeholder='Todo Title'
                                        value={updateTodo.todoTi}
                                        onChange={(e)=>setUpdateTodo({...updateTodo, todoTi: e.target.value})}
                                    />
                                    </Form.Item>
                                    <Form.Item
                                        label='Todo Description:'                                        
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
                                    onClick={handleUpdate}
                                >
                                    Submit Update
                                </button>
                            </Col>
                      
                    </div>
            
            }
                     
              
                            
        </div>
    );
}

export default SingleTodoView;