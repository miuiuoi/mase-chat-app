import { Avatar, Button, Form, Input, Tooltip } from 'antd'
import React from 'react'
import styled from 'styled-components'
import {UserAddOutlined} from "@ant-design/icons"
import Message from './Message';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid red;


  .header{
    &_info{
      display: flex;
      flex-direction: column;
      justify-content: center;

    }

    &_title{
      margin: 0;
      font-weight: bold;
    }

    &_description{
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`

const WrapperStyled = styled.div`
  height: 100vh;
`

const ContentStyled = styled.div`
  height: calc(100% - 56px); 
  display:flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border-radius: 2px;

  .ant-form-item{
    felx: 1;
  }
`

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`



export default function ChatWindows() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className='header_info'>
          <p className='header_title'>Room 1</p>
          <span className='header_description'>this is room 1</span>
        
        </div>

        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined/>} type='text'>Mời</Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar src="">A</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar src="">A</Avatar>
            </Tooltip>
            <Tooltip title="A">
              <Avatar src="">A</Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>

      <ContentStyled>
        <MessageListStyled>
          <Message text ="Test" photoURL={null} displayName="Toan" createdAt={123}/>
          <Message text ="Test" photoURL={null} displayName="Toan" createdAt={123}/>
          <Message text ="Test" photoURL={null} displayName="Toan" createdAt={123}/>
          
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input bordered={false} autoComplete='off' placeholder='Nhập tin nhắn'/>
          </Form.Item>

          <Button type='primary' >Gửi</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  )
}
