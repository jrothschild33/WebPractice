import axios from 'axios'
import { message, Modal } from 'antd'
import NProgress from 'nprogress'
import { clear, get } from './storage'

const service = axios.create({
  // baseURL: process.env.REACT_APP_BASE_API, // url = base url + request url
  baseURL: 'http://127.0.0.1:886',
  // withCredentials: true, // 跨域请求时是否携带cookie
  timeout: 5000, // request timeout
})
// request interceptor
service.interceptors.request.use(
  (config) => {
    NProgress.start()
    config.headers['Authorization'] = get('token')
    return config
  },
  (error) => {
    NProgress.done()
    return Promise.reject(error)
  }
)

// response interceptor
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
