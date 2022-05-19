import React, {useEffect, useState} from 'react';
import { Col, Row, Divider, Space } from 'antd';
import {EyeFilled, DeleteTwoTone  } from '@ant-design/icons';
function AdminUsersView() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('/bgima/users').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(userJson => setUsers(userJson));
    },[]);
    return (
        <div className='userHome'>
           <h2>The System has registered:{users.length} users </h2>
            <Divider dashed />
            <Row gutter={4} className='row-header admin-row'>
                    <Col span={2}>
                        S/N
                    </Col>
                    <Col span={6}>                        
                        User Name
                    </Col>
                    <Col span={10}>
                        Contact
                    </Col>
                    <Col span={6}>
                        Action
                    </Col>
            </Row>
             { users.map(user => (
            <Row gutter={4} className='map' key={Math.random()}>
                    <Col span={2}>
                       1
                    </Col>
                    <Col span={6}>
                         {user.userName}
                    </Col>
                    <Col span={10}>
                        {user.contact}
                    </Col>
                    <Col span={6}>
                        <Space>
                            <a> <EyeFilled /> </a>
                            <Divider type='vertical'/>
                        <button className='btn green'> More Actions</button>
                        </Space>
                    </Col>
                <Col span={3} style={{ fontSize: '1.3em'}}>
                    
                 
                    </Col>
            </Row>         
                ))}
        </div>
    );
}

export default AdminUsersView;