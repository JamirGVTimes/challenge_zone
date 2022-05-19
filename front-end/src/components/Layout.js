import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthOut } from '../features/authSlice';
import { openModal } from '../features/modalSlice';
import TodoCreate from './TodoCreate';

const Layout = () => {
    const user = useSelector((dq) => dq.user.value);
    const modal = useSelector((pop) => pop.modalPopIn.value);
    const adm = useSelector((wod) => wod.adminPage.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="top-nav user">
                    <ul>
                        <Link to='/home'><li>Welcome to Bgimahood</li> </Link>
                        
                    <Link to='/home/create-todo'>
                        <li onClick={() => dispatch(openModal())}
                                style={{cursor:'pointer'}}
                            >
                                Create Todo
                         </li>
                    </Link> 
                    <Link to='/home/view-todos'> <li>View Your Todos</li></Link>
                    <li> <b style={{color:'yellow'}}> { user.userName }</b></li>
                    <li>
                        <Link to='/'>
                            <button className='orange' onClick={() => dispatch(setAuthOut())}> Log Out </button>
                        </Link>
                    </li>
                    <li>
                         {adm && 
                            <Link to='/'>
                                <button className='btn green'  >
                                    Change Account 
                                    </button>
                            </Link>
                         }  
                    </li>
                </ul>  
               
            </div>

            <div>
                <Outlet/>
            </div>
            {modal && <TodoCreate />}
        </div> 
    );
}

export default Layout;