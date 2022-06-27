import { Button, Table } from 'antd'
import type { ColumnsType, TableProps } from 'antd/lib/table'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { getAdminList } from '../../api/admin'

const AdminList: FC = () => {
  interface IAdmin {
    id: number
    name: string
    mobile: string
    email: string
    createdAt: string
  }

  interface IState {
    adminList: IAdmin[]
    current: number
    pageSize: number
    total: number
    loading: boolean
    showAddAdminModal: boolean
    showEditAdminModal: boolean
    admin?: IAdmin
  }

  const [adminList, setAdminList] = useState<IAdmin[]>([])
  const [current, setCurrent] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(15)
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [showAddAdminModal, setShowAddAdminModal] = useState<boolean>(false)
  const [showEditAdminModal, setShowEditAdminModal] = useState<boolean>(false)

  const getMyAdminList = (page: number = 1) => {
    getAdminList(page).then((res) => {
      const { dataList, limit, totalCount } = res.data.data
      // console.log(res.data.data)
      setAdminList(dataList)
      setLoading(false)
      setPageSize(limit)
      setTotal(totalCount)
    })
  }

  useEffect(() => {
    getMyAdminList()
  }, [])

  const change = (pagination: any) => {
    getMyAdminList(pagination.current)
  }

  // 点击按钮：添加管理员，弹窗弹出
  const handleShowAddAdminModal = useCallback(() => {
    setShowAddAdminModal(true)
  }, [showAddAdminModal])

  // table--------------------------------------------------------------------
  /* interface DataType {
    key: React.Key
    id: number
    name: string
    age: number
    address: string
    button?: any
  } */

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
      render: () => <Button type="primary">编辑</Button>,
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
      <Table
        columns={columns}
        dataSource={adminList}
        rowKey={'id'}
        onChange={change}
        style={{ marginTop: 20 }}
      />
    </>
  )
}

export default AdminList
