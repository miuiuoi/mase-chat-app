import React from 'react'
import { Collapse, Typography } from 'antd'
import styled from 'styled-components'
import { Button } from 'antd'
import {PlusSquareOutlined} from "@ant-design/icons"

const {Panel} = Collapse
const PanelStyled = styled(Panel)`
    &&&{
        .ant-collapse-header, p{
            color: white
        }
    }

    .ant-collapse-content-box{
        padding: 0 40px
    }

    .addRoom{
        color: white;
        padding: 0;
    }
`

const LinkStyled = styled(Typography.Link)`
    display: flex;
    margin-bottom: 5px;
    color: white;
`

export default function RoomList() {

  return (
    <Collapse ghost defaultActiveKey={'1'}>
        <PanelStyled header="Danh sách các phòng" key = "1">
            <LinkStyled>Room 1</LinkStyled>
            <LinkStyled>Room 2</LinkStyled>
            <LinkStyled>Room 3</LinkStyled>
            <Button className='addRoom' type='text' icon={<PlusSquareOutlined/>}>Thêm Phòng</Button>
        </PanelStyled>
    </Collapse>
  )
}
