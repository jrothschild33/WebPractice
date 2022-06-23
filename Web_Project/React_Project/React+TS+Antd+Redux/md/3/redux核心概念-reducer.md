# redux核心概念-reducer

> Redux 本身很简单。
  
## reducer

Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。

## 定义reducer
> reducer根据不同的action类型返回不同的state

reducer需要一个state，一个action。state用来定义reducer接受的state类型，action用来定义reducer响应什么样的action，最后返回新的状态

```

const admin = (state: AdminState = initAdminState, action: AdminAction): AdminState => {
    switch (action.type) {
        case AdminType.LOADING:
            return {...state, ...action.data}
        case AdminType.GET:
            return {...state}
        case AdminType.SET:
            return {...state, ...action.data}
        case AdminType.LOGIN:
            return {...state, ...action.data}
        default:
            return state
    }
}

```

## 合并reducer
单一的reducer处理状态的时候，这个reducer过于臃肿，这个时候我们就需要拆分reducer，把逻辑判断放在多个reducer里面，可以简化我们的逻辑，防止耦合。
我们拆分完成以后，可以把多个reducer合并为一个reducer，然后创建我们的store容器。
例如：我们有个获得管理员信息的reducer和一个获得角色权限的reducer，这个时候，我们就以把这两个合并为一个reducer

```

import {combineReducers} from 'redux'
import admin from './AdminReducer'
import permission from './PermissionReducer'

export default combineReducers({admin, permission})

```