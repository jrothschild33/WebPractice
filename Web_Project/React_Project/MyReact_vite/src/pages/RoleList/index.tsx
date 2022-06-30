import React, { FC, useCallback, useEffect, useState } from 'react'
import { getRoleList } from '@api/role'
import AddRole from './AddRole'
import DeleteRole from './DeleteRole'
import Auth from '@components/Auth'
import EditRole from './EditRole'
import { Button, Space } from 'antd'
import Table, { ColumnsType } from 'antd/lib/table'

export interface IRole {
  id: number
  roleName: string
}

export interface IState {
  roleList: IRole[]
  current: number
  pageSize: number
  total: number
  loading: boolean
  showAddRoleModal: boolean
  showEditRoleModal: boolean
  role?: IRole
}

const RoleList: FC = () => {
  // 数据源，服务器返回，表格【dataSource】
  const [roleList, setRoleList] = useState<IRole[]>([])
  // 当前页码，表格【pagination】
  const [current, setCurrent] = useState<number>(1)
  // 每页条数，表格【pagination.pageSize】
  const [pageSize, setPageSize] = useState<number>(15)
  // 数据总数，表格【pagination.total】
  const [total, setTotal] = useState<number>(0)
  // 页面是否加载中，表格【loading】
  const [loading, setLoading] = useState<boolean>(true)
  // 是否显示添加用户角色弹窗，点击添加按钮后弹出
  const [showAddRoleModal, setShowAddRoleModal] = useState<boolean>(false)
  // 是否显示编辑用户角色弹窗，点击编辑按钮后弹出
  const [showEditRoleModal, setShowEditRoleModal] = useState<boolean>(false)
  // 添加新用户角色
  const [role, setRole] = useState<IRole>()

  // 页面渲染时向服务器取数据
  useEffect(() => {
    getMyRoleList()
  }, [])

  // 根据当前页码，向服务器取数据
  const getMyRoleList = useCallback(
    (page: number = 1) => {
      getRoleList(page).then((res) => {
        const { dataList, limit, totalCount } = res.data.data
        setRoleList(dataList)
        setLoading(false)
        setPageSize(limit)
        setTotal(totalCount)
      })
    },
    [roleList, loading, pageSize, total]
  )

  // 点击表格下方页码，服务器根据页码号返回数据
  const pageChange = useCallback((pagination: any) => {
    getMyRoleList(pagination.current)
  }, [])

  // 点击添加按钮：弹出添加用户角色弹窗
  const handleShowAddRoleModal = useCallback(() => {
    setShowAddRoleModal(true)
  }, [showAddRoleModal])

  // 点击关闭按钮：隐藏添加用户角色弹窗
  const handleHideAddRoleModal = useCallback(
    (refresh?: boolean) => {
      if (refresh) {
        // 重新从服务器获取数据
        getMyRoleList()
      }
      setShowAddRoleModal(false)
    },
    [showAddRoleModal]
  )

  // 点击编辑按钮：弹出编辑用户角色弹窗
  const handleShowEditRoleModal = useCallback(
    (role: IRole) => {
      setRole(role)
      setShowEditRoleModal(true)
    },
    [role, showEditRoleModal]
  )

  // 点击关闭按钮：隐藏编辑用户角色弹窗
  const handleHideEditRoleModal = useCallback(
    (refresh?: boolean) => {
      if (refresh) {
        getMyRoleList()
      }
      setShowEditRoleModal(false)
    },
    [showEditRoleModal]
  )

  // 删除管理员：使用filter过滤器，隐藏被删除的数据
  const handleDeleteRole = useCallback(
    (id: number) => {
      setRoleList((roleList) => roleList.filter((role) => role.id !== id))
    },
    [roleList]
  )

  // table--------------------------------------------------------------------

  const columns: ColumnsType<IRole> = [
    {
      title: 'ID',
      dataIndex: 'id',
      align: 'center',
      sorter: (a, b) => a.id - b.id,
      width: '10%',
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
      align: 'center',
    },
    {
      title: '创建日期',
      dataIndex: 'createdAt',
      align: 'center',
    },
    {
      title: 'button',
      align: 'center',
      render: (role: IRole) => (
        <Space>
          <Button
            type="primary"
            onClick={() => {
              handleShowEditRoleModal(role)
            }}
          >
            编辑
          </Button>
          {/* 如果该管理员权限中有path="deleteRole"，说明该管理员可以删除用户角色 */}
          <Auth path="deleteRole">
            <DeleteRole id={role.id} handleDeleteRole={handleDeleteRole} />
          </Auth>
        </Space>
      ),
    },
  ]

  return (
    <>
      <Button type="primary" onClick={handleShowAddRoleModal}>
        添加角色
      </Button>
      {/* 在AddAdmin组件中定义了需要传递props的接口格式：visible、callback */}
      <AddRole visible={showAddRoleModal} cancel={handleHideAddRoleModal} />
      <EditRole role={role} visible={showEditRoleModal} cancel={handleHideEditRoleModal} />
      <Table
        loading={loading}
        dataSource={roleList}
        columns={columns}
        rowKey={'id'}
        pagination={{
          position: ['bottomCenter'],
          total: total,
          pageSize: pageSize,
          showSizeChanger: false,
        }}
        onChange={pageChange}
        style={{ marginTop: 20 }}
      />
    </>
  )
}

export default RoleList
