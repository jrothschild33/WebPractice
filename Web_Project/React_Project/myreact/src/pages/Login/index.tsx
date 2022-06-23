import React, { useCallback, useRef } from 'react'
import { Form, FormInstance, Input, Button, Space, message } from 'antd'
import './index.css'
import { login } from '../../api/login'

// Antd表单样式设置
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 14 },
}
const tailLayout = {
  wrapperCol: { offset: 9, span: 14 },
}

// 定义提交表单的处理函数：登录处理
const handleLogin = (form: any) => {
  login(form.name, form.password).then((res) => {
    // 这里的结构也是服务器后端定义的
    const { code, msg } = res.data
    if (code === 0) {
      // message是Antd的组件，消息提示框
      message.success(msg)
    } else {
      message.error(msg)
    }
  })
}

export default function Login() {
  // FormInstance是Antd规定的表单类型
  const formRef = useRef<FormInstance>(null)

  return (
    <>
      <div id="login">
        <Form id="login-form" {...layout} ref={formRef} onFinish={handleLogin}>
          <Form.Item
            label="用户名"
            name="name"
            // 表单校验
            rules={[
              {
                type: 'string',
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            // 表单校验
            rules={[
              {
                type: 'string',
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            {/* Space组件可以让按钮之间有些空隙 */}
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Button type="primary" htmlType="reset">
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}
