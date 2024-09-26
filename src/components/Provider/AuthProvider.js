import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { Spin } from 'antd';

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) { // Destructure children
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL}); // Sửa lại để lưu thông tin người dùng
                setIsLoading(false); // Sửa cách gọi hàm
                navigate('/'); // Điều hướng đến trang chính
                return;
            } else {
                setIsLoading(false); // Đặt loading thành false nếu không có người dùng
                navigate('/login'); // Điều hướng đến trang đăng nhập
            }
        });

        // Clean function
        return () => {
            unsubscribe();
        };
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin /> : children} {/* Sửa lại cú pháp */}
        </AuthContext.Provider>
    );
}