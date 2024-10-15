import React, { useContext } from 'react'
import { Collapse, Typography } from 'antd'
import styled from 'styled-components'
import { Button } from 'antd'
import {PlusSquareOutlined} from "@ant-design/icons"
import useFirestore from '../../hooks/useFirestore'
import { AuthContext } from '../Provider/AuthProvider'
import {AppContext} from "../Provider/AppProvider"

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
    const {rooms,setIsAddRoomVisible,setSelectedRoomId} = useContext(AppContext);

    
    // const {user: {uid}} = React.useContext(AuthContext);
    // console.log({uid});
    

    // const roomsCondition = React.useMemo(() => {
    //     return {
    //         fieldName: 'members',
    //         operator: 'array-contains',
    //         compareValue: uid
    //     }
    // }, [uid]);

    // const rooms = useFirestore('rooms', roomsCondition)

    const handleAddRoom = () => {
        setIsAddRoomVisible(true)
    }

  return (
    <Collapse ghost defaultActiveKey={['1']}>
        <PanelStyled header="Danh sách các phòng" key = '1'>
        {rooms.map(room => (
          <LinkStyled key={room.id}  onClick={() => setSelectedRoomId(room.id)}>
            {room.name}
          </LinkStyled>
        ))}
            <Button className='addRoom' type='text' icon={<PlusSquareOutlined/>}  onClick={handleAddRoom}>Thêm Phòng</Button>
        </PanelStyled>
    </Collapse>
  )
}
