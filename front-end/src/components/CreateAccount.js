import {Row, Col } from 'antd';
const CreateAcoount = () => {
    return (
        <>
            <form className='user-form'>
                                <p>
                                    <label>Full Names:</label><br/>
                                    <input type='text' placeholder="Enter your full names" />
                                </p>
                                <p>
                                    <label>Email:</label><br/>
                                    <input type='text' placeholder="Enter your email" />
                                </p>
                                <p>
                                    <label>Contact:</label><br/>
                                    <input type='text' placeholder="+256 0000000" />
                                </p>
                                <p>
                                   
                                    <Row gutter={6}>
                                        <Col span={12}>
                                            <label>Password:</label>
                                            <input type='password' placeholder="Password" />
                                        </Col>
                                        <Col span={12}>
                                            <label>Re-enter Password:</label>
                                            <input type='password' placeholder="Password" />
                                        </Col>
                                    </Row>
                                    
                                </p>
                                
                                <button className="btn blue"> Create account</button>
                            </form>
        </>

    );
}
export default CreateAcoount;