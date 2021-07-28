// 封装axios
import axios from 'axios'
import { Message } from 'element-ui'
// 获得token
import store from '@/store'
// 路由跳转
import router from '@/router'

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
      return Promise.reject(error)
    }
    // 添加判断
  },
  // 响应失败
  error => {
    // token超时
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
    Message.error('登陆失败2:' + error.message)
    return Promise.reject(error)
  }
)

export default request
