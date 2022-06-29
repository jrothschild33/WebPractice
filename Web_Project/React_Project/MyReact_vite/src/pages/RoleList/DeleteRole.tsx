import React, { FC, useCallback } from 'react'
import { Button, message, Popconfirm } from 'antd'
import { deleteRole } from '@api/role'

interface Props {
  id: number
  handleDeleteRole: (roleId: number) => void
}

const DeleteRole: FC<Props> = ({ id, handleDeleteRole }) => {
  // 通知服务器删除某角色，下次获取数据时更新
  const serverDelteRole = useCallback(() => {
    deleteRole(id).then((res) => {
      const { code, msg } = res.data
      if (code === 0) {
        message.success(msg)
        // 从画面隐藏
        handleDeleteRole(id)
      } else {
        message.error(msg)
      }
    })
  }, [])

  // 点击取消按钮
  const handleCancel = useCallback(() => {
    message.info('取消删除')
  }, [])

  return (
    <Popconfirm
      title="你确定要删除角色吗？删除后不可以恢复！"
      onConfirm={serverDelteRole}
      onCancel={handleCancel}
      okText="删除"
      cancelText="取消"
    >
      <Button type="primary" danger>
        删除
      </Button>
    </Popconfirm>
  )
}

export default DeleteRole
