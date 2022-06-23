import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 引入Antd
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
