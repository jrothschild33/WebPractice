import React, { Component, createRef, RefObject } from 'react'
import { Button, Form, FormInstance, Input, message, Modal, Tree } from 'antd'
import { getAllPermission } from '../../api/permission'
import { addRole } from '../../api/role'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

// apiPath: "/admin/role/list"
// createdAt: "2021-04-09 13:44:16"
// deletedAt: ""
// id: 2
// isMenu: 1
// method: "get"
// parentId: 0
// path: "/admin/role"
// rule: "/admin/role/list"
// title: "角色管理"
interface IPermission {
  id: number
  key: number
  isMenu: number
  parentId: number
  path: string
  title: string
  children: IPermission[]
}

interface IState {
  nodeList: IPermission[]
}

interface IProps {
  visible: boolean
  callback: (refresh?: boolean) => void
}

class AddRole extends Component<IProps, IState> {
  formRef: RefObject<FormInstance>

  constructor(props: IProps, context: any) {
    super(props, context)
    this.state = {
      nodeList: [],
    }
    this.formRef = createRef<FormInstance>()
  }

  cancel = () => {
    this.props.callback()
  }
  getAllPermission = () => {
    getAllPermission().then((response) => {
      const { data } = response.data
      this.setState({
        nodeList: this.generatePermissionList(data),
      })
    })
  }
  generatePermissionList = (permissionList: IPermission[], parentId: number = 0) => {
    let pList: IPermission[] = []
    permissionList.forEach((permission) => {
      if (permission.parentId === parentId) {
        permission.key = permission.id
        permission.children = this.generatePermissionList(permissionList, permission.id)
        pList.push(permission)
      }
    })
    return pList
  }

  componentDidMount() {
    this.getAllPermission()
  }

  onCheck = (checkedKeys: any) => {
    this.formRef.current?.setFieldsValue({ permissionList: checkedKeys.checked })
  }
  addRole = (form: any) => {
    addRole(form).then((response) => {
      const { code, msg } = response.data
      if (code === 0) {
        this.props.callback(true)
        this.formRef.current?.resetFields()
        message.success(msg)
      } else {
        message.error(msg)
      }
    })
  }

  render() {
    return (
      <Modal title="添加角色" visible={this.props.visible} onCancel={this.cancel} footer={null}>
        <Form
          ref={this.formRef}
          {...layout}
          onFinish={this.addRole}
          initialValues={{
            roleName: '',
            permissionList: [],
          }}
        >
          <Form.Item
            name={'roleName'}
            rules={[
              {
                type: 'string',
                required: true,
                validator: (rule, value) => {
                  if (value === undefined || value === '') {
                    return Promise.reject('角色名称不可以为空')
                  }
                  if (value.length < 2) {
                    return Promise.reject('角色名称长度不可以小于两位')
                  }
                  return Promise.resolve()
                },
              },
            ]}
            label="角色名称"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={'权限'}
            name="permissionList"
            rules={[
              {
                type: 'array',
                min: 1,
                required: true,
                validator: (rule, value) => {
                  if (value === undefined) {
                    return Promise.reject('至少要选择一个权限！')
                  }
                  if (value.length <= 0) {
                    return Promise.reject('至少要选择一个权限！')
                  }
                  return Promise.resolve()
                },
              },
            ]}
          >
            <Tree defaultExpandAll checkStrictly showLine checkable treeData={this.state.nodeList} onCheck={this.onCheck} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              添加角色
            </Button>
            <Button type="default" htmlType="reset">
              重置
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

export default AddRole
