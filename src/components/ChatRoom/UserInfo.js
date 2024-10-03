import React from 'react'
import { Button, Avatar, Typography } from 'antd'
import styled from 'styled-components';
import {auth} from "../../firebase/config";
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../Provider/AuthProvider"

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
        await auth.signOut(); 
        navigate('/chatRoom');
    } catch (error) {
        console.error("Error signing out: ", error);
    }
};

const {user: {
    displayName,
    photoURL
}}= React.useContext(AuthContext);

  return (
    <WrapperStyled >

        <div>
            <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}</Avatar>
            <Typography.Text className='username'>{displayName}</Typography.Text>
        </div>
        <Button onClick={handleLogout}>Log out</Button>

    </WrapperStyled>
    
  );
}
