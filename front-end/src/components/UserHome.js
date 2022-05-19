import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { EyeFilled, DeleteTwoTone } from '@ant-design/icons';

function UserHome() {
    const [search, setSearch] = useState('');
    const todoList = useSelector((ub) => ub.retrieveTodos.value);
    const logedInUser = useSelector((ub) => ub.user.value);
    const myOwnTodos = todoList.filter((got) => got.userName === logedInUser.userName);

    const deleteTodo = (_id) => {
        axios.delete(`/bgima/delete-todo/${_id}`)
            .then((respo) => {
                console.log(respo.data);
            });
    };
    return (
        <div>

           <h3>You have <b> {myOwnTodos.length}</b>  Todos </h3>  
           
            <h3> Easily create todos and as well <Link to='/home/view-todos'>view </Link> them. </h3>  
                <div className='userHome'>  
                <Divider dashed/>
                <h2>Search Todo: </h2>
                <Row gutter={6}>
                    <Col span={12} >
                        <input
                            value={search}
                            placeholder='Enter todo title'
                            onChange={(event)=>setSearch(event.target.value)}
                        />
                    </Col>
                    <Col span={12}>
                        <button
                            className='btn blue'
                        >
                            Search
                        </button>
                    </Col>
                </Row>
                <Divider dashed/>
                     <h2> Search results for : <b style={{color:'brown'}}> {search}</b> </h2>
               <Row gutter={6} className='row-header user-row'>
                <Col span={4}>
                    Todo Title
                </Col>
                <Col span={16}>
                    Todo Description
                </Col>
                <Col span={4}>
                    Action
                </Col>
            </Row>
                   
                     {myOwnTodos.filter((val) => {
                        if (search == "") {
                        return
                        } else if (val.todoTitle.toLowerCase().includes(search.toLowerCase())) {
                            return val
                        }
                    }).map((val) => {
                        return (                                            
                                <Row className="map" key={Math.random()} >
                                    <Col span={4}>
                                        {val.todoTitle}
                                    </Col>
                                    <Col span={16}>
                                        {val.todoDescription}
                                    </Col>
                                    <Col span={4}>
                                    <Link
                                        to={'/home/view-todos/' + val._id}
                                        state={{id: val._id}}
                                    >
                                        <EyeFilled/>                            
                                    </Link>   
                                    <Divider type='vertical'/>
                                    <DeleteTwoTone onClick={() => deleteTodo(val._id)} />
                                    </Col>
                                </Row>                                     
                        )
                    })}
                </div>  
        </div>
    );
}

export default UserHome;