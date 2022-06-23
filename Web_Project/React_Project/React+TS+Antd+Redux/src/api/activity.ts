import request from '../utils/request'

export const getActivityList = (page: number = 1) => {
    return request({
        url: '/admin/activity',
        params: {
            page: page
        }
    })
}
