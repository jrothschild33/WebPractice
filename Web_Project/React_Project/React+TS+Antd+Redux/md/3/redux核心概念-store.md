# redux核心概念-store

> Redux 本身很简单。
  
## store

Store 就是把state，action和reducer联系到一起的对象。

## 创建store容器
>   store中保存的是一个完整的state。也就是说，无论你定义了多少个state，他都是放在一个store中！

```
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))
export default store

```