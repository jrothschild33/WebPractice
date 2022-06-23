import React, { Component } from 'react'
import { getRoleList } from '../../api/role'
import { Button, Space, Table } from 'antd'
import AddRole from './AddRole'
import DeleteRole from './DeleteRole'
import EditRole from './EditRole'
import Auth from '../../componments/Auth'

export interface IRole {
  id: number
  roleName: string
}

interface IState {
  roleList: IRole[]
  current: number
  pageSize: number
  total: number
  loading: boolean
  visibleAddRoleModal: boolean
  visibleEditRoleModal: boolean
  role?: IRole
}

class RoleList extends Component<any, IState> {
  constructor(props: any, context: any) {
    super(props, context)
    this.state = {
      roleList: [],
      current: 1,
      pageSize: 15,
      total: 0,
      loading: true,
      visibleAddRoleModal: false,
      visibleEditRoleModal: false,
    }
  }

  getRoleList = (page: number = 1) => {
    getRoleList(page).then((response) => {
      const { dataList, limit, totalCount } = response.data.data
      this.setState({
        roleList: dataList,
        loading: false,
        pageSize: limit,
        total: totalCount,
      })
    })
  }

  componentDidMount() {
    this.getRoleList()
  }

  change = (pagination: any) => {
    this.getRoleList(pagination.current)
  }
  showAddRoleModal = () => {
    this.setState({
      visibleAddRoleModal: true,
    })
  }
  hideAddRoleModal = (refresh?: boolean) => {
    if (refresh) {
      this.getRoleList()
    }
    this.setState({
      visibleAddRoleModal: false,
    })
  }

  deleteRole = (roleId: number) => {
    this.setState((state) => ({
      roleList: state.roleList.filter((r) => r.id !== roleId),
    }))
  }
  showEditRoleModal = (role: IRole) => {
    this.setState({
      role: role,
      visibleEditRoleModal: true,
    })
  }
  hideEditRoleModal = (refresh?: boolean) => {
    if (refresh) {
      this.getRoleList()
    }
    this.setState({
      visibleEditRoleModal: false,
    })
  }

  render() {
    return (
      <>
        <EditRole visible={this.state.visibleEditRoleModal} role={this.state.role} cancel={this.hideEditRoleModal} />
        <Button type="primary" onClick={this.showAddRoleModal}>
          添加角色
        </Button>
        <AddRole visible={this.state.visibleAddRoleModal} callback={this.hideAddRoleModal} />
        <Table
          dataSource={this.state.roleList}
          rowKey={'id'}
          pagination={{
            position: ['bottomCenter'],
            total: this.state.total,
            pageSize: this.state.pageSize,
            showSizeChanger: false,
          }}
          onChange={this.change}
        >
          <Table.Column title={'id'} dataIndex={'id'} />

          <Table.Column title={'角色名称'} dataIndex={'roleName'} />
          <Table.Column
            title={'管理'}
            render={(role: IRole) => (
              <Space>
                <Button
                  type="primary"
                  onClick={() => {
                    this.showEditRoleModal(role)
                  }}
                >
                  编辑
                </Button>
                <Auth path="deleteRole">
                  <DeleteRole id={role.id} callback={this.deleteRole} />
                </Auth>
              </Space>
            )}
          />
        </Table>
      </>
    )
  }
}

export default RoleList
