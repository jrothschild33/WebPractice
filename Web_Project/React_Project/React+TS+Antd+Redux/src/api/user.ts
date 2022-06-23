import request from '../utils/request'

export const getUserList = (page: number = 1) => {
    return request({
        url: '/admin/user/list',
        params: {page: page}
    })
}

export const deleteUser = (userId: number) => {
    return request({
        url: '/admin/user/' + userId,
        method: 'delete'
    })
}

export const updateUser = (userId: number, data: any) => {
    return request({
        url: '/admin/user/' + userId,
        method: 'put',
        data: data
    })
}
