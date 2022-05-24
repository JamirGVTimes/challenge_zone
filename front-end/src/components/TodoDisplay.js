import { useState, useEffect } from 'react';
import { Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { EyeFilled, DeleteTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import axios from 'axios';


function TodoDisplay() {
    const user = useSelector((ut) => ut.user.value);
    const [retrieveTodos, setRetrieveTodos] = useState([{
        _id:'',
        userName:'',
        todoTitle: '',
        todoDescription: '',
        updatedAt: ''
    }]);
  
     useEffect(() => {
         axios.get('/bgima/user-created-todos')
         .then((response)=>response.data)
             .then((json) => {                
                const result = json.sort((a, b) => a.todoTitle.localeCompare(b.todoTitle));
                setRetrieveTodos(result)
             });
     });
    const mytodos = retrieveTodos.filter((doh) => doh.userName === user.userName);

    const deleteTodo = (_id) => {
        axios.delete(`/bgima/delete-todo/${_id}`)
            .then((respo) => {
                console.log(respo.data);
            });
    };

    return (
        <div className='todo-table'>
            <h2> You created the following <b>{mytodos.length} </b> todos </h2>
            <Divider dashed/>
               
                 <Row gutter={4} className='row-header user-row'>
                    <Col span={1}>
                        S/N
                    </Col>
                    <Col span={6}>
                        Todo Title
                    </Col>
                    <Col span={14}>
                        Todo Description
                    </Col>
                    <Col span={3} style={{textAlign:'center'}}>
                      View  <Divider type='vertical'/>  Delete
                </Col>
               
            </Row>
            {mytodos !=''
                ? 
                
            mytodos.map((todo, index) => (
                <Row gutter={6} className='map' key={todo._id} >
                    <Col span={1} style={{fontSize:'1em',textAlign:'left',padding:'0.5em'}}>
                    {index+1}
                    </Col>
                    <Col span={6} style={{fontSize:'1em',textAlign:'left',padding:'0.5em'}}>
                         { todo.todoTitle}
                    </Col>
                    <Col span={14} style={{fontSize:'1em',textAlign:'left',padding:'0.5em'}}>
                    {todo.todoDescription}
                    </Col>
                    <Col span={3} style={{fontSize:'1.2em',textAlign:'center'}}>
                        <Link
                            to={'/home/view-todos/' + todo._id}
                            state={{id: todo._id}}
                        >
                            <EyeFilled/>                            
                        </Link>   
                        <Divider type='vertical'/>
                        <DeleteTwoTone onClick={() => deleteTodo(todo._id)} />
                      
                    </Col>
                   
                </Row>
            ))
                
                :
                <div style={{ fontSize: '1.3em', color: 'red'}}>
                    Oops No todos retrieved yet!
                </div>
                
        }
            
            
            
        </div>
    );
}

export default TodoDisplay;