import React from 'react'
import { Row, Col } from 'antd'
import UserInfo from './UserInfo'
import RoomList from './RoomList'
import styled from 'styled-components'

const SideBarStyled = styled.div`
    background: #a4c3a2;
    color: white;
    height: 100vh;
`;

export default function SideBar() {
  return (
    <SideBarStyled>
        <div>
            <Row>
                <Col span={24}><UserInfo/></Col>
                <Col span={24}><RoomList/></Col>
            </Row>
        </div>
    </SideBarStyled>
  )
}
