import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Divider } from 'antd';
import { openModal } from '../features/modalSlice';
import TodoCreate from './TodoCreate';
import axios from 'axios';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

function AdminHome() {
    
    const modal = useSelector((pop) => pop.modalPopIn.value);
    const user = useSelector((ut) => ut.user.value);
    const usersArr = useSelector((uh) => uh.retrieveUsers.value);
    const adyerries = useSelector((eh) => eh.retrieveTodos.value);
    const dispatch = useDispatch();   
    
    const myOwn = adyerries.filter((gig) => gig.userName === user.userName);
   
    return (
        <div className='todo-table'>
            <Divider dashed />
            <h2> You have <b>{myOwn.length}</b>  Todos created</h2>            
            
            <Divider dashed />
            <h3> You Created the following todos</h3>
            <Row gutter={4} className='row-header admin-row'>
                <Col span={4}>
                    Todo Title
                </Col>
                <Col span={12}>
                    Todo Description
                </Col>
                <Col span={4}>
                    Modification Date
                </Col>
                <Col span={4}>
                    Action
                </Col>
            </Row>
            {myOwn.map((td) => (
                <Row gutter={4} className='map' key={td._id}>
                <Col span={6}>
                    <h3> {td.todoTitle }</h3> 
                </Col>
                <Col span={14} >
                   {td.todoDescription}
                </Col>
               
                <Col span={4} style={{fontSize:'1.3em'}}>
                        <a> <EditTwoTone /></a>
                        <Divider type='vertical' />
                        <a> <DeleteTwoTone/></a>
                </Col>
            </Row>
            ))}
             
             
            {modal && <TodoCreate/>}
        </div>
    );
}

export default AdminHome;