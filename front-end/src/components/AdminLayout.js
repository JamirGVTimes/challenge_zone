import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { setAuthOut } from '../features/authSlice';
function AdminLayout() {
     const user = useSelector((guy) => guy.user.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="top-nav admin">
                    <ul>
                       <Link to='/home/admin'><li>Dashboard</li>  </Link> 
                      <Link to='/home/admin/users'> <li>Users</li> </Link>
                       
                    <li>Admin Name: <b style={{color:'yellow'}}>{user.userName } </b> </li>
                    <li>
                      
                        <Link to='/'> <button className='btn green'>Back to Accounts</button> </Link> 
                        <Link to='/'>
                        <button
                            className='btn orange'
                            onClick={()=>dispatch(setAuthOut())}
                        >
                            Log Out
                        </button>
                        </Link>
                        
                    </li>
                    </ul>              
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default AdminLayout;