import { getToken, setToken, removeToken } from '@/utils/auth'
import { getuserInfoAPI, getuserInfoBaseAPI } from '@/api/user'
export default {
  namespaced: true,
  state: {
    // 获得token
    token: getToken(),
    userinfo: {}
  },
  mutations: {
    // 设置token
    SETTOKEN (state, payload) {
      setToken(payload)
      state.token = payload
    },
    // 删除token
    REMOVETOKEN (state) {
      removeToken()
      state.token = null
    },
    // 获得用户信息
    GETUSERINFO (state, payload) {
      state.userinfo = payload
    },
    // 删除用户信息
    REMOVEUSERINFO (state) {
      state.userinfo = {}
    }
  },
  actions: {
    // 调用设置
    settoken (context, payload) {
      context.commit('SETTOKEN', payload)
    },
    // 调用删除
    removetoken (context) {
      context.commit('REMOVETOKEN')
    },
    // 调用获取用户信息
    async getuserInfo (context) {
      const res = await getuserInfoAPI()
      const result = await getuserInfoBaseAPI(res.userId)
      context.commit('GETUSERINFO', { ...res, ...result })
    },
    removeUserinfo (context) {
      context.commit('REMOVEUSERINFO')
    },
    // 退出登录
    logout (context) {
      context.commit('REMOVEUSERINFO')
      context.commit('REMOVETOKEN')
    }
  }
}
