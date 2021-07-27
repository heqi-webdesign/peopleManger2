import request from '@/utils/request'

// 登录请求
export function logiAPI (data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data: data
  })
}

// 获取用户信息
export function getuserInfoAPI () {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}

// 获取基本信息
export function getuserInfoBaseAPI (id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'GET'
  })
}

export function logoutAPI () {}
