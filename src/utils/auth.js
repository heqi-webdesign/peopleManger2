import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token' // token
const timeStamp = 'times' // 时间戳

// token 处理
export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

// timeStamp处理
export function getTimestamp () {
  return Cookies.get(timeStamp)
}
export function setTimestamp () {
  return Cookies.set(timeStamp, Date.now())
}
export function removeTimestamp () {
  return Cookies.remove(timeStamp)
}
