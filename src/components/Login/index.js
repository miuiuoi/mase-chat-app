import React from 'react';
import { Row, Col, Typography, Button, Form, Input } from 'antd';
import { auth } from '../../firebase/config'; // Đảm bảo đây là module đã được cập nhật
import {FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Nhập từ SDK mới
import {useNavigate} from 'react-router-dom'
import { FacebookFilled, FacebookOutlined, GoogleCircleFilled, GoogleOutlined } from '@ant-design/icons';
import "../../css/login.css"


const { Title } = Typography;

export default function Login() {
    const fbProvider = new FacebookAuthProvider(); 
    const GgProvider = new GoogleAuthProvider();
    
    const handleFaceBookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, fbProvider);
            console.log('User Info:', result.user); // Thông tin người dùng
        } catch (error) {
            console.error('Error during Facebook login:', error); // Xử lý lỗi
        }
    };

    const handleGoogleLogin = async () => {
        try {   
            const result = await signInWithPopup(auth, GgProvider);
            console.log('User Info:', result.user);
            
        }catch(error){
            console.error('Error during Google login:', error);
        }
    }

    

    return (
        <div className='backgroundLogin'>
            <Form className='loginForm'>
                {/* <Title className='loginTitle'>Login</Title> */}
                <img  className='loginTitle' src="assets/double-chat-bubble-icon.webp"/>

                <Row>
                    <Col xs={7}>
                        <Title 
                            level={5} 
                            style={Object.assign(
                                {margin: "0 0 32px 0"},
                                {padding: 0},
                                {textAlign: "left"}
                            )}>
                                UserID
                        </Title>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={16}>
                            <Form.Item>
                                <Input 
                                    name='userID'
                                    style={Object.assign(
                                        {margin: 0},
                                        {padding: 5},
                                        
                                    )}
                                    placeholder='Enter your UserID'
                                    className='input-field'
                                />
                                
                            </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col xs={7}>    
                       <Title
                        level={5}
                        style={Object.assign(
                            {margin: "0 0 32px 0"},
                            {padding: 0},
                            {textAlign: "left"}
                        )}
                       >
                            Password
                        </Title> 
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={16}>
                        <Form.Item>
                            <Input.Password 
                                name='password'
                                style={Object.assign(
                                    {margin: 0},
                                    {padding: 5}
                                )}
                                placeholder='Enter your password'
                                className='input-field'
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type='primary' htmlType='submit' className='loginBtn'>Loign</Button>
                </Form.Item>

                <Form.Item>
                    <div className="button-container">
                        <Button 
                            style={{ width: "48%", marginRight: "4%" , height: "35px"}} 
                            icon={<FacebookFilled />}
                            onClick={handleFaceBookLogin}
                        >
                            Facebook
                        </Button>

                        <Button 
                            style={{ width: "48%", height: "35px" }} 
                            icon={<GoogleOutlined />}
                            onClick={handleGoogleLogin}
                        >
                            Google
                        </Button>
                    </div>
                </Form.Item>
            </Form>

            <ul className='background'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li> 
                <li></li>
                <li></li>
                <li></li>        
            </ul>
        </div>
    );
}