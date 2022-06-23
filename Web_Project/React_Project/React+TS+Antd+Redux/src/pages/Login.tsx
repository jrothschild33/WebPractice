import React, { Component } from 'react'
import { Button, Form, Input, message } from 'antd'
import { login } from '../api'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { doLogin, syncAdminInfo } from '../store/actions/AdminAction'
import { RouteComponentProps, withRouter } from 'react-router'
import { getPermissionList } from '../store/actions/PermissionAction'
import { set } from '../utils/storage'
import '../static/css/login/login.css'
import { check } from '../api/config'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

interface IState {
  name: string
  password: string

  width: number
  height: number
}

interface IProps extends RouteComponentProps {
  login: (data: any) => void
  getAdminInfo: () => void
  getPermissionList: () => void
}

class Login extends Component<IProps, IState> {
  constructor(props: IProps, context: any) {
    super(props, context)
    let height = window.document.body.clientHeight
    let width = window.document.body.clientWidth
    this.state = {
      width: width,
      height: height,
      name: '',
      password: '',
    }
    window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
    this.check()
  }

  check = () => {
    check().then((response) => {
      const { code } = response.data
      if (code === 1) {
        this.props.history.push('/config')
      }
    })
  }
  handleResize = () => {
    let height = window.document.body.clientHeight
    let width = window.document.body.clientWidth
    this.setState({
      width: width,
      height: height,
    })
  }
  onFinish = (values: IState) => {
    login(values)
      .then((response) => {
        const { code, msg } = response.data
        if (code === 0) {
          const { token, admin } = response.data.data
          set('token', token)
          return admin
        } else {
          message.error(msg)
          return Promise.reject(msg)
        }
      })
      .then((admin) => {
        this.props.login(admin)
        this.props.getAdminInfo()
        this.props.getPermissionList()
        this.props.history.replace('/')
      })
  }

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  render() {
    return (
      <div
        className="login"
        style={{
          width: this.state.width + 'px',
          height: this.state.height + 'px',
        }}
      >
        <Form id="login-form" className="login-form" ref={null} initialValues={this.state} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} {...layout}>
          <Form.Item
            label="用户名"
            name="name"
            rules={[
              {
                required: true,
                message: '用户名不可以为空',
              },
              {
                type: 'string',
                min: 2,
                message: '用户名长度不可以小于2位',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '密码不可以为空',
              },
              {
                type: 'string',
                min: 2,
                message: '密码长度不可以小于2位',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (data: any) => {
    doLogin(dispatch, data)
  },
  getAdminInfo: () => {
    syncAdminInfo(dispatch)
  },
  getPermissionList: () => {
    getPermissionList(dispatch)
  },
})
export default connect(null, mapDispatchToProps)(withRouter(Login))
