import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { isAdmin, notAdmin } from './features/adminPageSlice';
import axios from 'axios';
import { usersFetch } from './features/retrievedUsersSlice';
import { todoSet } from './features/retrieveTodosSlice';

function Swapper() {
    const user = useSelector((dog) => dog.user.value);
    const adm = useSelector((wod) => wod.adminPage.value);
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('/bgima/user-created-todos')
            .then((res) => {
                dispatch(todoSet(res.data));
            });
        
    });
    useEffect(() => {
        fetch('/bgima/users').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(userJson => {
            dispatch(usersFetch(userJson));
        });
    });

    if (user.userName === 'Muhumuza Jamir') {
        dispatch(isAdmin());
    } else {
        dispatch(notAdmin());
    };
    return (
        <div className="account-changer">
            <Link to='/home'>
                <div className="user-icon">
                    <p >
                           <UsergroupAddOutlined style={{fontSize:'4em', margnin:'0'}}/>
                    </p>
                 
                    Continue as Local User
                </div>
            </Link>
            {adm &&
                <Link to='/home/admin'>
                    <div className="admin-icon">
                    <p>
                        <UserAddOutlined style={{fontSize:'4em', margnin:'0'}} />
                    </p>
                    
                    Continue as Administrator
                        </div>
                </Link>
            }
           
        </div>
    );
}

export default Swapper;