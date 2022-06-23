# redux核心概念-state

> Redux 本身很简单。
  
## state

1. 首先设计state
state就是描述我们store容易的数据结构，简单的就是说，我们的store容器里面存了什么数据。

```

export interface IAdmin {
    id: number
    avatar: string
    name: string
    roleId: number
    password: string
}

export interface AdminState {
    loading: boolean
    admin: IAdmin
}

```

2. 初始化状态

```

const initAdminState: AdminState = {
    loading: true,
    admin: {
        id: 0,
        avatar: '',
        name: '',
        roleId: 0,
        password: ''
    }
}


```