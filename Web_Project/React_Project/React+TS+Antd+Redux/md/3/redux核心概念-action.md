# redux核心概念-action

> Redux 本身很简单。
  
## action

Action 是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）传到 store 的有效载荷。
它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。

1. 定义type用于描述action要做什么

```

export enum AdminType {
    LOADING,
    GET,
    LOGIN,
    LOGOUT,
    SET,
    DEL
}

```

2. 定义action
> action中携带的数据是可选的

```

export interface AdminAction {
    type: AdminType,
    data?: any
}


```