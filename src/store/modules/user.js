import { getToken, setToken, removeToken } from '@/utils/auth'
// 调接口保存数据
import { getuserInfoAPI, getuserImgApi } from '@/api/user' // 导入获取用户信息api

export default {
  namespaced: true,
  state: {
    // 获得token
    token: getToken(),
    userinfo: {}
  },
  mutations: {
    // 设置token
    SETTOKEN(state, payload) {
      setToken(payload)
      state.token = payload
    },
    // 删除token
    REMOVETOKEN(state) {
      removeToken()
      state.token = null
    },
    // 获得用户信息
    GETUSERINFO(state, payload) {
      state.userinfo = payload
    },
    // 删除用户信息
    REMOVEUSERINFO(state) {
      state.userinfo = null
    }
  },
  actions: {
    // 调用设置
    settoken(context, payload) {
      context.commit('SETTOKEN', payload)
    },
    // 调用删除
    removetoken(context) {
      context.commit('REMOVETOKEN')
    },
    // 调用获取用户信息
    async getuserInfo(context) {
      const res = await getuserInfoAPI()
      const result = await getuserImgApi(res.userId)
      context.commit('GETUSERINFO', { ...res, ...result })
    },
    removeUserinfo(context) {
      context.commit('REMOVEUSERINFO')
    }
  }
}
