import axios from 'axios'
import { message, Modal } from 'antd' // message：消息提示框；Modal：对话框
import NProgress from 'nprogress' // 进度条
import { clear, get } from './storage'
const env = import.meta.env

// 这个文件的配置需要和服务器后端商量
const service = axios.create({
  // baseURL: process.env.REACT_APP_BASE_API, // url = base url + request url
  // baseURL: 'http://127.0.0.1:886', // url = base url + request url
  baseURL: env.VITE_APP_BASE_API,
  // withCredentials: true, // 跨域请求时是否携带cookie
  timeout: 5000, // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    NProgress.start()
    // 控制请求头信息(由于get设置的返回类型是string|null，需要声明不是null)
    config.headers!['Authorization'] = get('token')!
    return config
  },
  (error) => {
    NProgress.done()
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    NProgress.done()
    if (response.status === 200) {
      const { code } = response.data
      if (code === 4003) {
        message.warning('你的登录状态已经丢失，请退出后重新登录！')
        return Promise.reject('请登录')
      } else if (code === 4000) {
        clear()
        // window.location.href = '/login'
        return Promise.reject('认证失败')
      }
      return response
    } else {
      Modal.error({
        title: '网络请求错误',
      })
      return Promise.reject('网络请求错误')
    }
  },
  (error) => {
    Modal.error({
      title: '网络请求错误',
    })
    NProgress.done()
    return Promise.reject(error)
  }
)

export default service
