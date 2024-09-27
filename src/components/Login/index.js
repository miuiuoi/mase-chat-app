import React from 'react';
import { Row, Col, Typography, Button, Form, Input } from 'antd';
import { auth, db } from '../../firebase/config'; // Đảm bảo đây là module đã được cập nhật
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Nhập từ SDK mới
import { useNavigate } from 'react-router-dom';
import { FacebookFilled, GoogleOutlined } from '@ant-design/icons';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import "../../css/login.css";

const { Title } = Typography;

export default function Login() {
    const fbProvider = new FacebookAuthProvider(); 
    const GgProvider = new GoogleAuthProvider();
    const navigate = useNavigate(); // Để điều hướng sau khi đăng nhập

    const handleFaceBookLogin = async () => {
        try {
            const { user } = await signInWithPopup(auth, fbProvider);
            console.log({ user }); // Thông tin người dùng    

            // Ghi thông tin người dùng vào Firestore
            const userRef = doc(db, 'users', user.uid); // Lấy tham chiếu đến tài liệu
            await setDoc(userRef, {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                providerId: user.providerData[0]?.providerId,
                createdAt: new Date(),
            }, { merge: true }); // Sử dụng merge để không ghi đè dữ liệu cũ

            console.log("Thông tin người dùng đã được lưu vào Firestore");
            navigate('/'); // Chuyển hướng sau khi đăng nhập thành công
        } catch (error) {
            console.error('Error during Facebook login:', error); // Xử lý lỗi
        }
    };

    const handleGoogleLogin = async () => {
        try {   
            const { user } = await signInWithPopup(auth, GgProvider);
            console.log({ user });

            // Ghi thông tin người dùng vào Firestore
            const userRef = doc(db, 'users', user.uid); // Lấy tham chiếu đến tài liệu
            await setDoc(userRef, {
                displayName: user.displayName || '',
                email: user.email || '',
                photoURL: user.photoURL || '',
                providerId: user.providerData[0]?.providerId || '',
                createdAt: new Date(),
            }, { merge: true });

            console.log("Thông tin người dùng đã được lưu vào Firestore");
            navigate('/'); // Chuyển hướng sau khi đăng nhập thành công
        } catch (error) {
            console.error('Error during Google login:', error);
        }
    };

    return (
        <div className='backgroundLogin'>
            <Form className='loginForm'>
                <img className='loginTitle' src="assets/double-chat-bubble-icon.webp" alt="Chat Bubble Icon"/>

                <Row>
                    <Col xs={7}>
                        <Title level={5} style={{ margin: "0 0 32px 0", padding: 0, textAlign: "left" }}>
                            UserID
                        </Title>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={16}>
                        <Form.Item>
                            <Input 
                                name='userID'
                                style={{ margin: 0, padding: 5 }}
                                placeholder='Enter your UserID'
                                className='input-field'
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col xs={7}>    
                        <Title level={5} style={{ margin: "0 0 32px 0", padding: 0, textAlign: "left" }}>
                            Password
                        </Title> 
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={16}>
                        <Form.Item>
                            <Input.Password 
                                name='password'
                                style={{ margin: 0, padding: 5 }}
                                placeholder='Enter your password'
                                className='input-field'
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type='primary' htmlType='submit' className='loginBtn'>Login</Button>
                </Form.Item>

                <Form.Item>
                    <div className="button-container">
                        <Button 
                            style={{ width: "48%", marginRight: "4%", height: "35px" }} 
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
                {/* Các phần tử nền */}
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