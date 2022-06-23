import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// 引入Antd
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { Provider } from 'mobx-react'
import store from './store'

moment.locale('cn')

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider {...store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)
