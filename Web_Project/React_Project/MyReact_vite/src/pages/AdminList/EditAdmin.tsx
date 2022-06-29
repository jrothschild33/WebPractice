import React, { FC, useCallback, useEffect, useRef } from 'react'
import { IAdmin } from './index'
import { saveAdmin } from '@api/admin'
import { FormInstance, Form, Input, message, Modal, Space, Button } from 'antd'

interface Props {
  admin?: IAdmin
  visible: boolean
  cancel: (refresh?: boolean) => void
}

export const EditAdmin: FC<Props> = ({ admin, visible, cancel }) => {
  // 表格样式
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }
  // 表格ref
  const formRef = useRef<FormInstance>(null)

  // 获取当前点击单元格的信息（密码不显示，重置为空值）
  useEffect(() => {
    formRef.current?.setFieldsValue({ ...admin, password: '' })
  })

  // 点击关闭弹窗（admin、visible、cacel回调函数由AdminList主界面通过props传递）
  const handelCancel = useCallback(() => {
    cancel()
  }, [])

  // 提交表格
  const handelSaveAdmin = useCallback((admin: IAdmin) => {
    admin.roleId = admin.id
    // console.log(admin)
    saveAdmin(admin.id as number, admin).then((res) => {
      const { code, msg } = res.data
      // console.log(res.data)
      if (code === 0) {
        message.success(msg)
        // 表格提交后，向cancel回调函数传递refresh=true，并关闭弹窗
        cancel(true)
      } else {
        message.error(msg)
      }
    })
  }, [])

  return (
    <Modal title="编辑管理员" visible={visible} onCancel={handelCancel} footer={null}>
      <Form
        ref={formRef}
        {...layout}
        onFinish={handelSaveAdmin}
        initialValues={{ ...admin, password: '' }}
      >
        <Form.Item name="id" label="ID">
          <Input disabled />
        </Form.Item>

        <Form.Item
          name="name"
          label="用户名"
          shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
          rules={[
            {
              type: 'string',
              required: true,
              message: '用户名不可以为空',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
          shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
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
          name="mobile"
          label="手机号"
          shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
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
          shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
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
              确定
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
