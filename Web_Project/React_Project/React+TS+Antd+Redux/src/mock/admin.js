const arr = [
    // user login
    {
        url: '/admin/login',
        type: 'post',
        response: config => {
            return {
                code: 0,
                data: {accessToken: '1111111111', admin: {id: 1, name: 'hanyun'}}
            }
        }
    },
    {
        url: '/admin/admin/info',
        type: 'get',
        response: config => {
            return {
                code: 0,
                data: {
                    accessToken: '1111111111',
                    admin: {
                        id: 1,
                        name: 'hanyun'
                    },
                    permissionList: [
                        {
                            path: '/'
                        },
                        {
                            path: '/admin/role/list'
                        }
                    ]
                }
            }
        }
    }
]

export default arr