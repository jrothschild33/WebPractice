import React, { FC, useCallback, useEffect, useState } from 'react'
import { Button, Space, Table } from 'antd'
import type { ColumnsType, TableProps } from 'antd/lib/table'
import { getAdminList } from '@api/admin'
import { AddAdmin } from './AddAdmin'
import { EditAdmin } from './EditAdmin'
import { DeleteAdmin } from './DeleteAdmin'

export interface IAdmin {
  id: number
  name: string
  mobile: string
  email: string
  createdAt: string
  roleId: number
}
export interface IState {
  adminList: IAdmin[]
  current: number
  pageSize: number
  total: number
  loading: boolean
  showAddAdminModal: boolean
  showEditAdminModal: boolean
  admin?: IAdmin
}

const AdminList: FC = () => {
  // 数据源，服务器返回，表格【dataSource】
  const [adminList, setAdminList] = useState<IAdmin[]>([])
  // 当前页码，表格【pagination】
  const [current, setCurrent] = useState<number>(1)
  // 每页条数，表格【pagination.pageSize】
  const [pageSize, setPageSize] = useState<number>(15)
  // 数据总数，表格【pagination.total】
  const [total, setTotal] = useState<number>(0)
  // 页面是否加载中，表格【loading】
  const [loading, setLoading] = useState<boolean>(true)
  // 是否显示添加管理员弹窗，点击添加按钮后弹出
  const [showAddAdminModal, setShowAddAdminModal] = useState<boolean>(false)
  // 是否显示编辑管理员弹窗，点击编辑按钮后弹出
  const [showEditAdminModal, setShowEditAdminModal] = useState<boolean>(false)
  // 添加新管理员
  const [admin, setAdmin] = useState<IAdmin>()

  // 页面渲染时向服务器取数据
  useEffect(() => {
    getMyAdminList()
  }, [])

  // 根据当前页码，向服务器取数据
  const getMyAdminList = useCallback(
    (page: number = 1) => {
      getAdminList(page).then((res) => {
        const { dataList, limit, totalCount } = res.data.data
        setAdminList(dataList)
        setLoading(false)
        setPageSize(limit)
        setTotal(totalCount)
      })
    },
    [adminList, loading, pageSize, total]
  )

  // 点击表格下方页码，服务器根据页码号返回数据
  const pageChange = useCallback((pagination: any) => {
    getMyAdminList(pagination.current)
  }, [])

  // 点击添加按钮：弹出添加管理员弹窗
  const handleShowAddAdminModal = useCallback(() => {
    setShowAddAdminModal(true)
  }, [showAddAdminModal])

  // 点击关闭按钮：隐藏添加管理员弹窗
  const handleHideAddAdminModal = useCallback(
    (refresh?: boolean) => {
      if (refresh) {
        // 重新从服务器获取数据
        getMyAdminList()
      }
      setShowAddAdminModal(false)
    },
    [showAddAdminModal]
  )

  // 点击编辑按钮：弹出编辑管理员弹窗
  const handleShowEditAdminModal = useCallback(
    (admin?: IAdmin) => {
      setAdmin(admin)
      setShowEditAdminModal(true)
    },
    [admin, showEditAdminModal]
  )

  // 点击关闭按钮：隐藏编辑管理员弹窗
  const handleHideEditAdminModal = useCallback(
    (refresh?: boolean) => {
      if (refresh) {
        getMyAdminList()
      }
      setShowEditAdminModal(false)
    },
    [showEditAdminModal]
  )

  // 删除管理员：使用filter过滤器，隐藏被删除的数据
  const handleDeleteAdmin = useCallback(
    (id: number) => {
      setAdminList((adminList) => adminList.filter((admin) => admin.id !== id))
    },
    [adminList]
  )

  // table--------------------------------------------------------------------

  const columns: ColumnsType<IAdmin> = [
    {
      title: 'ID',
      dataIndex: 'id',
      align: 'center',
      /* filters: [
        {
          text: 'admin1',
          value: 'admin1',
        },
        {
          text: 'admin2',
          value: 'admin2',
        },
        {
          text: 'admin3',
          value: 'admin3',
        },
      ],
      filterMode: 'tree',
      filterSearch: true, */
      // onFilter: (value: any, record) => record.address.startsWith(value),
      sorter: (a, b) => a.id - b.id,
      width: '10%',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '手机',
      dataIndex: 'mobile',
      align: 'center',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
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
      render: (admin: IAdmin) => (
        <Space>
          <Button
            type="primary"
            onClick={() => {
              handleShowEditAdminModal(admin)
            }}
          >
            编辑
          </Button>
          <DeleteAdmin id={admin.id} handleDeleteAdmin={handleDeleteAdmin} />
        </Space>
      ),
    },
  ]

  /* const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  } */

  return (
    <>
      <Button type="primary" onClick={handleShowAddAdminModal}>
        添加管理员
      </Button>
      {/* 在AddAdmin组件中定义了需要传递props的接口格式：visible、callback */}
      <AddAdmin visible={showAddAdminModal} cancel={handleHideAddAdminModal} />
      <EditAdmin admin={admin} visible={showEditAdminModal} cancel={handleHideEditAdminModal} />
      <Table
        loading={loading}
        dataSource={adminList}
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

export default AdminList
