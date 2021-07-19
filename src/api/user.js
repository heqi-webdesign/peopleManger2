import request from '@/utils/request'

export function logiAPI(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data: data
  })
}

export function getInfAPI() {}

export function logoutAPI() {}
