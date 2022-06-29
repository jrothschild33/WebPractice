// 作用：使用axios发送请求，获取管理员admin相关信息
import request from '@utils/request'
import { IAdmin } from '@/pages/AdminList'

export const getAdminList = (page: number = 1) => {
  return request({
    url: '/admin/admin/list',
    params: { page: page },
  })
}

export const deleteAdmin = (adminId: number) => {
  return request({
    url: '/admin/admin/delete/' + adminId,
    method: 'DELETE',
  })
}

export const addAdmin = (admin: any) => {
  return request({
    url: '/admin/admin/add',
    method: 'POST',
    data: admin,
  })
}

export const saveAdmin = (adminId: number, admin: IAdmin) => {
  return request({
    url: '/admin/admin/update/' + adminId,
    method: 'PUT',
    data: admin,
  })
}

export const getAdminInfo = () => {
  return request({
    url: '/admin/admin/info',
  })
}
