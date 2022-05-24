import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Col, Row, Divider, Space } from 'antd';
import {EyeFilled, DeleteTwoTone  } from '@ant-design/icons';
import Spinner from './Spinner';

function AdminUsersView() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('/bgima/users').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(userJson => {
            const sortList = userJson.sort((a, b) => a.userName.localeCompare(b.userName));
            setUsers(sortList)
        });
    },[]);
   
    return (
        <div>
           <h2>The System has registered:{users.length} users </h2>
            <Divider dashed />
            <div className='user-section'>
                {users != ''
                    ?
                    <div className='left-pag'>
                        {users.map((user, index) => (
                        
                            <Row gutter={4} className='map' key={index}>
                                <Col span={2}>
                                    {index + 1}
                                </Col>
                                <Col span={12}>
                                    {user.userName}
                                </Col>
                                <Col span={10}>
                                    <Link to={'/home/admin/users/' + user._id} state={{ from: user._id }}>                               
                                        <button className='btn green'>View Details</button>
                                    </Link>
                                </Col>
                            </Row>
                         
                        ))}
                    </div>  
                    :
                    <Spinner/>
                }
                

            </div>
            <div className='user-displayed'>
                <Outlet/>

            </div>

            
        </div>
    );
}

export default AdminUsersView;