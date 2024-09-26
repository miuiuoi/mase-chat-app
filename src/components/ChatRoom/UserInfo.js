import React from 'react'
import { Button, Avatar, Typography } from 'antd'
import styled from 'styled-components';
import {auth} from "../../firebase/config";
import { useNavigate } from 'react-router-dom';


const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    
    padding: 12px 16px; 
    border: 1px solid rgba(82,38,83);

    .username{
        color: white;
        margin-left: 5px;
    }
`;


export default function UserInfo() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
        await auth.signOut(); // Gọi phương thức signOut từ Firebase
        navigate('/chatRoom'); // Điều hướng đến trang đăng nhập
    } catch (error) {
        console.error("Error signing out: ", error);
    }
};

  return (
    <WrapperStyled >

        <div>
            <Avatar src="">A</Avatar>
            <Typography.Text className='username'>ABC</Typography.Text>
        </div>
        <Button onClick={handleLogout}>Log out</Button>

    </WrapperStyled>
    
  );
}
