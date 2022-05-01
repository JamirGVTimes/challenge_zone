import { Button, Divider, Tabs, Row, Col } from 'antd';
import CreateAcoount from './CreateAccount';
const { TabPane } = Tabs;
const Login = () => {
    return (
        <>
            <div className="card-view">
                <div className="header blue">Welcome to Bgimahood Inc Techs</div>
                <div className="form-container">  
                    <Tabs type='card'>
                        <TabPane tab="Login" key='1'>
                            <form className='user-form'>
                                <p>
                                    <label>Email:</label><br/>
                                    <input type='text' placeholder="Enter your email" />
                                </p>
                                <p>
                                    <label>Password:</label>
                                    <input type='password' placeholder="Password" />
                                </p>
                                
                                <button className="btn blue"> Login </button>
                            </form>
                        </TabPane>
                         <TabPane tab="Create new account" key='2'>
                            <CreateAcoount/>
                        </TabPane>
                    </Tabs>       
                    
                </div>
               
            </div>
            
        </>
    );
}
export default Login;