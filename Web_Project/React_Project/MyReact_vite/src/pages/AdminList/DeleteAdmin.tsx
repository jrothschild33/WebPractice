import { Button, message, Popconfirm } from 'antd'
import React, { FC, useCallback } from 'react'
import { deleteAdmin } from '@api/admin'

interface Props {
  id: number
  handleDeleteAdmin: (id: number) => void
}

export const DeleteAdmin: FC<Props> = ({ id, handleDeleteAdmin }) => {
  // 点击确定删除后，向服务器发送请求
  const serverDeleteAdmin = useCallback(() => {
    deleteAdmin(id).then((res) => {
      const { code, msg } = res.data
      if (code === 0) {
        message.success(msg)
        // 调用AdminList主页面的handleDeleteAdmin函数，进行filter操作（模拟删除）
        handleDeleteAdmin(id)
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
      title="你确定要删除管理员吗？删除后不可以恢复！"
      onConfirm={serverDeleteAdmin}
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
