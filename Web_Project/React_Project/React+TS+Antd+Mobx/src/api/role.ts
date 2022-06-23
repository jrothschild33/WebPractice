import request from "../utils/request";

export const getRoleList = (page: number = 1) => {
    return request({
        url: '/admin/role/list',
        params: {page: page}
    })
}

export const addRole = (data: any) => {
    return request({
        url: '/admin/role/add',
        method: 'post',
        data: data
    })
}

export const deleteRole = (roleId: number) => {
    return request({
        url: '/admin/role/delete/' + roleId,
        method: 'delete'
    })
}
export const getRoleDetail = (roleId: number) => {
    return request({
        url: '/admin/role/detail/' + roleId
    })
}

export const updateRole = (roleId: number, role: any) => {
    return request({
        url: '/admin/role/update/' + roleId,
        method: 'put',
        data: role
    })
}
