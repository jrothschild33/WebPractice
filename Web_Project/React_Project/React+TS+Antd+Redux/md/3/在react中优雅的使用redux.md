# 如何在react中优雅的使用redux

## 在react项目中注入store

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'nprogress/nprogress.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();


```

## 定义react的props

```

interface IProps extends AdminState {
    getAdminInfo: () => void
    getPermissionList: () => void

}
```

## mapStateToProps将state转化为props
> 当你有多个reducer的时候，任何一个reducer的更改都会修改更新store生成新的state

```

interface IStateProps extends AdminState, PermissionState {
}

const mapStateToProps = (state: IStoreState): IStateProps => {
    if (!state.admin.loading && !state.permission.loading) {
        return {...state.admin, ...state.permission};
    }
    return {...state.admin, ...state.permission, loading: true};
}

```

## mapDispatchToProps将action装换为props
> Redux store 仅支持同步数据流。使用 thunk 等中间件可以帮助在 Redux 应用中实现异步性。可以将 thunk 看做 store 的 dispatch() 方法的封装器；我们可以使用 thunk action creator 派遣函数或 Promise，而不是返回 action 对象。
  
### 安装

```

yarn add redux-thunk
yarn add @types/redux-thunk

```

### 将action转换为react的props

```
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getAdminInfo: () => {
        syncAdminInfo(dispatch)
    },
    getPermissionList: () => {
        getPermissionList(dispatch)
    }
})

```

### 在react中调用

```
    constructor(props: IProps) {
        super(props);
        if (this.props.loading) {
            this.props.getAdminInfo();
            this.props.getPermissionList()
        }
    }

```