import React, { FC, useCallback, useRef } from 'react'
import { IAdmin } from './index'
import { addAdmin } from '../../api/admin'
import { FormInstance, Modal, Form, message, Input, Button, Space } from 'antd'

interface IProps {
  visible: boolean
  cancel: (refresh?: boolean) => void
}

export const AddAdmin: FC<IProps> = ({ visible, cancel }) => {
  // 表格样式
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: { offset: 7, span: 16 },
  }

  // 表格ref
  const formRef = useRef<FormInstance>(null)

  // 点击关闭弹窗（visible、cacel回调函数由AdminList主界面通过props传递）
  const handleCancel = useCallback(() => {
    cancel()
  }, [])

  // 表格提交后：发送到服务器处理，并接收返回结果，关闭弹窗后向callback传递refresh=true，刷新数据
  const handelAddAdmin = useCallback((admin?: IAdmin) => {
    addAdmin(admin).then((res) => {
      // 取回数据
      const { code, msg } = res.data
      if (code === 0) {
        // 提示成功消息
        message.success(msg)
        // 清空表格
        formRef.current?.resetFields()
        // 表格提交后，向cancel回调函数传递refresh=true，并关闭弹窗
        cancel(true)
      } else {
        // 提示失败信息
        message.error(msg)
      }
    })
  }, [])

  return (
    <Modal title="添加管理员" visible={visible} onCancel={handleCancel} footer={null}>
      <Form ref={formRef} {...layout} onFinish={handelAddAdmin}>
        <Form.Item
          name="name"
          label="用户名"
          rules={[
            {
              type: 'string',
              required: true,
              message: '用户名不可为空',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              type: 'string',
              required: true,
              validator: (rule, value) => {
                if (value === undefined || value === '') {
                  return Promise.resolve()
                }
                if (value.length < 6) {
                  return Promise.reject('密码长度不可以小于6位')
                }
                return Promise.resolve()
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请确认您的密码',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('两次输入的密码不一致'))
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="mobile"
          label="手机号"
          rules={[
            {
              type: 'string',
              required: true,
              message: '手机号不可为空',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            {
              type: 'email',
              message: '输入的邮箱格式不正确',
            },
            {
              required: true,
              message: '邮箱不可为空',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              添加管理员
            </Button>
            <Button type="default" htmlType="reset">
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  )
}
