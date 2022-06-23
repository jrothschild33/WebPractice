const arr = [
    // user login
    {
        url: '/admin/role/list',
        type: 'get',
        response: config => {
            return {
                code: 0,
                data: [
                    {
                        id: 1
                    },
                    {
                        id: 2
                    }
                ]
            }
        }
    }
]

export default arr