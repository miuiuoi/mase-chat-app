import React, { useContext, useState } from 'react'
import {Modal, Form, Input} from 'antd'
import { AppContext } from '../Provider/AppProvider'
import useFirestore from '../../hooks/useFirestore';

export default function AddRoom() {
  const {isAddRoomVisible, setIsAddRoomVisible} = useContext(AppContext)


  const [form] = Form.useForm();

  const handleOk = () => {
    setIsAddRoomVisible(false);
};

const handleCancel = () => {
    setIsAddRoomVisible(false);
};

  return (
    <div>
      <Modal
        title="Tạo Phòng"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >

        <Form form={form}>
          <Form.Item label="Tên phòng" name='name'>
            <Input placeholder='Nhập tên phòng'/>
          </Form.Item>
          <Form.Item label="Mô tả" name='description'>
            <Input.TextArea placeholder='Nhập mô tả'/>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
