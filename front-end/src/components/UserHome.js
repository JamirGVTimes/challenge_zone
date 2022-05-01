import { Divider, Button } from "antd";
import axios from 'axios';
const Home = () => {
    return (
        <>
            <div className="top-nav">
                    <ul>
                        <li>Welcome to Bgimahood</li>
                        <li>Create Todo</li>
                        <li>View Your Todos</li>
                        <li>User Name</li>
                        <li> <button>Log Out</button></li>
                    </ul>              
            </div>
            <Divider dashed />
            Create your todo List here!
            <div className="form-container">
                <form>
                    <p>
                        <label>Todo Name:</label> <br/>
                        <input placeholder="Todo name..."/>
                    </p>
                    <p>
                        <label>Description:</label>  <br/>
                        <textarea
                        rows="5"
                            placeholder="Type your description..."
                        ></textarea>
                    </p>
                    <Button type="primary">Add</Button>
                </form>
            </div>
            <Divider />
            Your todos today
        </>
    );
}
export default Home;