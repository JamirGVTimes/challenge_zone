import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Divider } from 'antd';
import Spinner from './Spinner';

const AdminHome = () => { 
    const [loader, setLoader] = useState(() => <Spinner/>);
    const usersArr = useSelector((uh) => uh.retrieveUsers.value);
    setTimeout(() => {
            setLoader(() => (
                <div>
                  <h2> You have <b>{usersArr.length}</b> users registered on this Platform</h2>
                </div>
       ))
        }, 3000);
        
    return (
        <div className='todo-table'>
            <Divider dashed />
            {usersArr == ""
                ?
                <Spinner/>
                :
                <div>
                   {loader}
                </div>
             }      
        </div>
    );
}

export default AdminHome;