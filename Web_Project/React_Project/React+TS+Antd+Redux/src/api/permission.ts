import request from '../utils/request'

export const getAllPermission = () => {
    return request({
        url: '/admin/permission/list'
    })
}