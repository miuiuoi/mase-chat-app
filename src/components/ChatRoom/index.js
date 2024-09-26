import React from 'react'
import { Row, Col } from 'antd'
import ChatWindows from './ChatWindows'
import SideBar from './SideBar'

export default function ChatRoom() {
  return (
    <div>
      <Row>
        <Col span={6}><SideBar/></Col>
        <Col span={18}><ChatWindows/></Col>
      </Row>
    </div>
  )
}
