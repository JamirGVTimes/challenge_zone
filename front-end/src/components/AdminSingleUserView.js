import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation, Link} from 'react-router-dom';
import { Input, Divider, Row, Col, Space} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import AdminCreateTodo from './AdminCreateTodo';
import { openModal } from '../features/modalSlice';
import { todoSet } from '../features/retrieveTodosSlice';
import { EyeFilled, DeleteTwoTone } from '@ant-design/icons';

const AdminSingleUserView = () => {
    const userx = useSelector((bog) => bog.retrieveUsers.value);

    const todozb = useSelector((ev) => ev.retrieveTodos.value);

    const myModal = useSelector((pop) => pop.modalPopIn.value);
    const location = useLocation();
    const { from } = location.state;
    const dispatch = useDispatch();
    const matchedUser = userx.find((adyerrie) => adyerrie._id === from);
    const matchedTodos = todozb.filter((ngala) => ngala.userName === matchedUser.userName);
    const hisName = matchedUser.userName;
    
    useEffect(() => {
        axios.get('/bgima/user-created-todos')
            .then((res) => {
                dispatch(todoSet(res.data));
            });
        
    },[todozb]);
   const deleteTodo = (_id) => {
        axios.delete(`/bgima/delete-todo/${_id}`)
            .then((respo) => {
                console.log(respo.data);
            });
    };
    return (
        <div>
            <h2> USER DETAILS</h2>
            <Divider dashed />
            <Row gutter={6}>
                <Col span={12} style={{textAlign:'left'}}>
                   <h4> <b>User Name: </b> {matchedUser.userName} </h4> 
                    <h4> <b>Email Address:</b> {matchedUser.email} </h4>
                    <h4>  <b> Phone Number:</b> {matchedUser.contact} </h4>
           
                </Col>
                <Col  span={12} style={{textAlign:'left'}}>
                    <h4> <Space>
                        <b> Password:</b>
                        <Input.Password
                    value={matchedUser.password}
                        />
                    </Space>                
                    </h4>
                    <h4>
                          <b>Joined On:</b> {matchedUser.updatedAt}
                    </h4>
                    <h4>
                        <b>Total Number of Todos:</b> {matchedTodos.length}
                    </h4>
                </Col>
            </Row>
            
            <Divider dashed />
            <h2>USER CREATED TODOS</h2>
            <Divider dashed />
            <button
                className='btn green'
                onClick={()=>dispatch(openModal())}
            >
                Add todo for this User! +
            </button>

            <Row gutter={6} className='row-header admin-row'>
                <Col span={2}>
                    S/N
                </Col>
                <Col span={6}>
                    Todo Title
                </Col>
                <Col span={8}>
                    Todo Description
                </Col>
                <Col span={4}>
                    Date of Creation
                </Col>
                <Col span={4}>
                    
                        View | Delete
                
                </Col>
            </Row>
            {matchedTodos !=''
                ?
               matchedTodos.map((hisTodos, index) => (
                <Row gutter={6} className='map' key={Math.random()}>
                <Col span={2}>
                   {index+1}
                </Col>
                <Col span={6}>
                    {hisTodos.todoTitle}
                </Col>
                <Col span={8}>
                  {hisTodos.todoDescription}
                </Col>
                <Col span={4}>
                    {hisTodos.updatedAt}
                </Col>
                       <Col span={4} style={{fontSize:'1.2em'}}>
                           <Space>
                                <Link
                                    to={'/home/admin/users/view-todos/' + hisTodos._id}
                                    state={{id: hisTodos._id}}
                               >
                                   <EyeFilled /> 
                                 </Link>
                              
                                <Divider type='vertical'/>
                                 <DeleteTwoTone onClick={() => deleteTodo(hisTodos._id)} />
                           </Space>                    
                </Col>
            </Row>
               ))
                :
                <div style={{color:'red', fontSize:'1.3em'}}>
                   No Todos created yet! 
                </div>
        }
           
            {myModal && <AdminCreateTodo from={from} hisName={hisName}/>}
        </div>
    );
}

export default AdminSingleUserView;