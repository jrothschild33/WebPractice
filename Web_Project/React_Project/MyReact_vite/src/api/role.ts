// 作用：使用axios发送请求，获取用户角色role相关信息
import request from '@utils/request'
import { IRole } from '@pages/RoleList'

export const getRoleList = (page: number = 1) => {
  return request({
    url: '/admin/role/list',
    params: { page: page },
  })
}

export const addRole = (data: any) => {
  return request({
    url: '/admin/role/add',
    method: 'POST',
    data: data,
  })
}

export const deleteRole = (roleId: number) => {
  return request({
    url: '/admin/role/delete/' + roleId,
    method: 'DELETE',
  })
}

export const getRoleDetail = (roleId: number) => {
  return request({
    url: '/admin/role/detail/' + roleId,
  })
}

export const updateRole = (roleId: number, role: IRole) => {
  return request({
    url: 'admin/role/update/' + roleId,
    method: 'PUT',
    data: role,
  })
}
