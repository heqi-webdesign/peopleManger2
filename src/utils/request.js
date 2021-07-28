import axios from 'axios' // 封装axios
import { Message } from 'element-ui'
import store from '@/store' // 获得token
import router from '@/router' // 路由跳转
import { getTimestamp, removeTimestamp } from '@/utils/auth'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器 在请求当中附带token
request.interceptors.request.use(
  config => {
    // 添加一个判断 如果有token 就添加上请求头 附带token
    const token = store.getters.token
    if (token) {
      // token失效主动介入
      if (Date.now() - getTimestamp() > 5000) {
        removeTimestamp()
        store.dispatch('user/logout').then(res => {
          if (res) {
            router.push('/login')
            return Message.error('token超时，重新登录')
          }
        })
      }
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器  登录请求响应成功 结构数据 失败则报错
request.interceptors.response.use(
  // 成功返回数据
  response => {
    const { data, success, message } = response.data
    // 解构数据 根据成功之后进行以下操作
    if (success) {
      return data
    } else {
      // 此时登录失败 返回了false
      Message.error('登陆失败1:' + message)
      return new Promise(new Error('登陆失败'))
    }
    // 添加判断
  },
  // 响应失败
  error => {
    // token超时 失效被动介入
    if (
      error.response ||
      error.response.data ||
      error.response.code === 10002
    ) {
      try {
        store.dispatch('user/logout').then(res => {
          if (res) {
            router.push('/login')
          }
        })
      } catch {
        console.log('token超时')
      }
    }
    // 返回提示信息
    return Promise.reject(error)
  }
)

export default request
