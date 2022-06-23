import React, { Component } from 'react'
import { Button, message, Popconfirm } from 'antd'
import { deleteRole } from '../../api/role'

interface IProps {
  id: number
  callback: (roleId: number) => void
}

class DeleteRole extends Component<IProps> {
  deleteRole = () => {
    deleteRole(this.props.id).then((response) => {
      const { code, msg } = response.data
      if (code === 0) {
        message.success(msg)
        this.props.callback(this.props.id)
      } else {
        message.error(msg)
      }
    })
  }

  render() {
    return (
      <Popconfirm title="删除角色" onConfirm={this.deleteRole}>
        <Button type="primary" danger>
          删除角色
        </Button>
      </Popconfirm>
    )
  }
}

export default DeleteRole
