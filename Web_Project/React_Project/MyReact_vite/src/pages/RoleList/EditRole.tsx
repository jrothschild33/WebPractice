import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { getRoleDetail, updateRole } from '@api/role'
import { IRole } from './index'
import { FormInstance, Form, Input, message, Modal, Space, Button, TreeProps, Tree } from 'antd'
import { IPermission, generatePermissionList } from './AddRole'

interface Props {
  role?: IRole
  visible: boolean
  cancel: (refresh?: boolean) => void
}

const EditRole: FC<Props> = ({ role, visible, cancel }) => {
  // 状态 state ------------------------------------------------------------
  const [nodeList, setNodeList] = useState<IPermission[]>([])
  const [checkedKeys, setCheckedKeys] = useState<string[]>([])

  // 索引 ref ------------------------------------------------------------
  const formRef = useRef<FormInstance>(null)

  // 表格 Table ------------------------------------------------------------
  // 表格样式
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }

  // 提交表格：向服务器请求数据，刷新表格，并关闭模态框
  const handelUpdateRole = useCallback((role: any) => {
    updateRole(role?.id as number, role).then((res) => {
      console.log('update', role, res)
      const { code, msg } = res.data
      if (code === 0) {
        message.success(msg)
        // 向主页面的hide函数传递refresh=true，刷新页面
        cancel(true)
      } else {
        message.error(msg)
      }
    })
  }, [])

  // 生命周期 ------------------------------------------------------------
  useEffect(() => {
    formRef.current?.setFieldsValue({ ...role })
    handelGetRoleDetail()
  }, [role, formRef.current, visible])

  // 树形控件 Tree ------------------------------------------------------------
  // 树形控件：获取角色权限详情
  const handelGetRoleDetail = useCallback(() => {
    getRoleDetail(role?.id as number)
      .then((res) => {
        const { permissionList, permissionAll } = res.data.data
        // 服务器返回全部用户权限列表
        let pAll = generatePermissionList(permissionAll)
        // 服务器返回当前用户拥有的权限（只需要记录id，然后传入name为permissionList的Form.Item）
        let permissions = permissionList.map((p: IPermission) => {
          // 大坑：Antd的checkedKeys需要为字符串类型
          return p.id.toString()
        })
        formRef.current?.setFieldsValue({
          permissionList: permissions,
        })
        // 将全部用户权限列表传给nodeList
        setNodeList(pAll)
        // 将用户拥有的权限id（本质上就是tree控件里的checkedKeys）传给dheckedKeys
        setCheckedKeys(permissions)
      })
      .catch(() => {})
  }, [role, formRef.current, nodeList, checkedKeys])

  // 树形控件：选中后的处理函数
  const onCheck = (checkedKeys: any) => {
    setCheckedKeys(checkedKeys)
    // 大坑：Antd的checkedKeys需要为字符串类型，而回传给服务器时，需要再次转为数字型
    const permissionList = checkedKeys.checked.map((x: string) => parseInt(x))
    formRef.current?.setFieldsValue({
      permissionList: permissionList,
    })
  }

  // 模态框 Modal ------------------------------------------------------------
  // 关闭模态框：不刷新数据
  const handleCancel = useCallback(() => {
    setNodeList([])
    setCheckedKeys([])
    cancel()
  }, [nodeList, checkedKeys])

  // 渲染页面 ------------------------------------------------------------
  return (
    <Modal title="添加角色" visible={visible} onCancel={handleCancel} footer={null}>
      <Form ref={formRef} {...layout} onFinish={handelUpdateRole}>
        <Form.Item name="id" label="ID">
          <Input disabled />
        </Form.Item>

        <Form.Item
          name="roleName"
          label="角色名称"
          shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
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

        {nodeList.length > 0 ? (
          <Form.Item
            name="permissionList"
            label="权限"
            shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
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
              // 大坑：不能用defaultCheckedKyes
              checkedKeys={checkedKeys}
              onCheck={onCheck}
            />
          </Form.Item>
        ) : null}

        <Form.Item {...tailLayout}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              确定
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

export default EditRole
