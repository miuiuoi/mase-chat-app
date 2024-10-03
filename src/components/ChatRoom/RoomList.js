import React from 'react'
import { Collapse, Typography } from 'antd'
import styled from 'styled-components'
import { Button } from 'antd'
import {PlusSquareOutlined} from "@ant-design/icons"
import useFirestore from '../../hooks/useFirestore'
import { AuthContext } from '../Provider/AuthProvider'

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
    const {user: {uid}} = React.useContext(AuthContext);

    const roomsCondition = React.useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid
        }
    }, [uid])


    /**
     * {
     *      name: 'room name'
     *      description: 'mo ta'
     *      members: [uid1,uid2,...]
     * }
     */
    const rooms = useFirestore('rooms', roomsCondition);
    console.log({rooms})
    console.log({roomsCondition});
    
    
    
    

  return (
    <Collapse ghost defaultActiveKey={['1']}>
        <PanelStyled header="Danh sách các phòng" key = '1'>
        {rooms.map(room => (
          <LinkStyled key={room.id} >
            {room.name}
          </LinkStyled>
        ))}
            <Button className='addRoom' type='text' icon={<PlusSquareOutlined/>}>Thêm Phòng</Button>
        </PanelStyled>
    </Collapse>
  )
}
