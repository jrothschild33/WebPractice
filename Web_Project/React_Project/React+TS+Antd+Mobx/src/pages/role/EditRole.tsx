import { Button, Form, FormInstance, Input, message, Modal, Tree } from 'antd'
import React, { Component, createRef, RefObject } from 'react'
import { IRole } from './RoleList'
import { getRoleDetail, updateRole } from '../../api/role'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

interface IProps {
  visible: boolean
  role?: IRole
  cancel: (refresh?: boolean) => void
}

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
  defaultCheckedKeys: number[]
}

class EditRole extends Component<IProps, IState> {
  formRef: RefObject<FormInstance>

  constructor(props: IProps, context: any) {
    super(props, context)
    this.state = {
      nodeList: [],
      defaultCheckedKeys: [],
    }
    this.formRef = createRef<FormInstance>()
  }

  onCheck = (checkedKeys: any) => {
    this.formRef.current?.setFieldsValue({
      permissionList: checkedKeys.checked,
    })
  }

  generatePermissionList = (
    permissionList: IPermission[],
    parentId: number = 0
  ) => {
    let pList: IPermission[] = []
    permissionList.forEach((permission) => {
      if (permission.parentId === parentId) {
        permission.key = permission.id
        permission.children = this.generatePermissionList(
          permissionList,
          permission.id
        )
        pList.push(permission)
      }
    })
    return pList
  }

  getRoleDetail = () => {
    getRoleDetail(this.props.role?.id as number).then((response) => {
      const { permissionList, permissionAll } = response.data.data
      let pAll = this.generatePermissionList(permissionAll)

      let permissions = permissionList.map((permission: IPermission) => {
        return permission.id
      })
      this.formRef.current?.setFieldsValue({
        permissionList: permissions,
      })
      this.setState({
        nodeList: pAll,
        defaultCheckedKeys: permissions,
      })
    })
  }

  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ) {
    if (!prevProps.visible) {
      if (this.props.role && prevState.nodeList.length === 0) {
        this.getRoleDetail()
      }
    }
  }

  cancel = () => {
    this.setState({
      nodeList: [],
      defaultCheckedKeys: [],
    })
    this.props.cancel()
  }

  updateRole = (role: any) => {
    updateRole(this.props.role?.id as number, role).then((response) => {
      const { code, msg } = response.data
      if (code === 0) {
        message.success(msg)
        this.props.cancel(true)
      } else {
        message.error(msg)
      }
    })
  }

  render() {
    this.formRef.current?.setFieldsValue({ ...this.props.role })
    return (
      <Modal
        title="编辑角色"
        visible={this.props.visible}
        footer={null}
        onCancel={this.cancel}
      >
        <Form ref={this.formRef} {...layout} onFinish={this.updateRole}>
          <Form.Item
            name={'roleName'}
            shouldUpdate={(prevValues, curValues) =>
              prevValues.additional !== curValues.additional
            }
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

          {this.state.nodeList.length > 0 ? (
            <Form.Item
              label={'权限'}
              name="permissionList"
              shouldUpdate={(prevValues, curValues) =>
                prevValues.additional !== curValues.additional
              }
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
              <Tree
                defaultExpandAll
                checkStrictly
                showLine
                checkable
                treeData={this.state.nodeList}
                defaultCheckedKeys={this.state.defaultCheckedKeys}
                onCheck={this.onCheck}
              />
            </Form.Item>
          ) : null}

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              编辑角色
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

export default EditRole
