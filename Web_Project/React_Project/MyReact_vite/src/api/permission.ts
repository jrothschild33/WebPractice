// 作用：获取当前管理员的权限（能否修改角色等）

import request from '@utils/request'

export const getAllPermission = () => {
  return request({
    url: '/admin/permission/list',
  })
}

export const getAdminPermissionList = () => {
  return request({
    url: 'admin/admin/permission',
  })
}
