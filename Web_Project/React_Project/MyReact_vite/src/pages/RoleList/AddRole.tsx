import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { IRole } from './index'
import { addRole } from '@/api/role'
import { getAllPermission } from '@api/permission'
import { Button, Form, FormInstance, Input, message, Modal, Space, Tree } from 'antd'
import type { DataNode, TreeProps } from 'antd/lib/tree'

export interface IPermission {
  id: number
  key: number
  isMenu: number
  parentId: number
  path: string
  title: string
  children: IPermission[]
}

interface Props {
  visible: boolean
  cancel: (refresh?: boolean) => void
}

// 生成权限列表（用于构建点击添加用户后的弹窗里的tree）
export const generatePermissionList = (permissionList: IPermission[], parendId: number = 0) => {
  let pList: IPermission[] = []
  permissionList.forEach((p) => {
    // 如果parendId为0，证明属于最外层权限（从0开始，逐层递进查找）
    if (p.parentId === parendId) {
      // 添加key属性，与id相同
      p.key = p.id
      // 添加children属性，使用递归，令parentId变为id值，继续查找（id与parentId对应，证明其为父子关系）
      p.children = generatePermissionList(permissionList, p.id)
      pList.push(p)
    }
  })
  return pList
}

// 函数式组件 ===========================================================================================
const AddRole: FC<Props> = ({ visible, cancel }) => {
  // 状态 state ------------------------------------------------------------
  const [nodeList, setNodeList] = useState<IPermission[]>([])
  // 索引 ref ------------------------------------------------------------
  const formRef = useRef<FormInstance>(null)

  // 表格 Table ------------------------------------------------------------
  // 表格样式
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: { offset: 7, span: 16 },
  }

  // 提交表格：向服务器请求数据，刷新表格，并关闭模态框
  const handelAddRole = useCallback((form: any) => {
    addRole(form).then((res) => {
      // 取回数据
      const { code, msg } = res.data
      if (code === 0) {
        // 提示成功消息
        message.success(msg)
        // 清空表格
        formRef.current?.resetFields()
        // 表格提交后，向cancel回调函数传递refresh=true，并关闭弹窗
        cancel(true)
      } else {
        // 提示失败信息
        message.error(msg)
      }
    })
  }, [])

  // 树形控件 Tree ------------------------------------------------------------
  // 初始化树形控件：向服务器发送请求，返回的数据用于生成权限列表，填充nodeList
  const handelGetAllPermission = useCallback(() => {
    getAllPermission().then((res) => {
      const { data } = res.data
      setNodeList(generatePermissionList(data))
    })
  }, [nodeList])

  // 生命周期 ------------------------------------------------------------
  useEffect(() => {
    handelGetAllPermission()
  }, [])

  // 树形控件：选中后的处理函数
  // checkedKeys.checked：选中的复选框编号（编号从0开始，每点击一次返回当前所有选中的复选框编号数组，如[0,1,2]，代表选中了前三个框）
  const onCheck: TreeProps['onCheck'] = (checkedKeys: any) => {
    formRef.current?.setFieldsValue({
      // permissionList是"权限列表"Form.Item的name
      permissionList: checkedKeys.checked,
    })
  }

  // 模态框 Modal ------------------------------------------------------------
  // 关闭模态框：不刷新数据
  const handleCancel = useCallback(() => {
    cancel()
  }, [])

  // 渲染页面 ------------------------------------------------------------
  return (
    <Modal title="添加角色" visible={visible} onCancel={handleCancel} footer={null}>
      <Form
        ref={formRef}
        {...layout}
        onFinish={handelAddRole}
        initialValues={{
          roleName: '',
          permissionList: [],
        }}
      >
        <Form.Item
          name="roleName"
          label="角色名称"
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
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="permissionList"
          label="权限列表"
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
            treeData={nodeList}
            onCheck={onCheck}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              添加角色
            </Button>
            <Button type="default" htmlType="reset">
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddRole
