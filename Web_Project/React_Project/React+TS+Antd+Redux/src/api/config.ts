import request from '../utils/request'

export const config = (data: any) => {
    return request({
        url: '/admin/config',
        method: 'post',
        data: data
    })
}
export const check = () => {
    return request({
        url: '/admin/config/check'
    })
}
