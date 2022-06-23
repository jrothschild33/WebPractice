import request from "../utils/request";

export const getAllPermission = () => {
    return request({
        url: '/admin/permission/list'
    })
}
export const getAdminPermissionList = () => {
    return request({
        url: '/admin/admin/permission'
    })
}
