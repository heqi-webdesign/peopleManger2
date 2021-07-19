import { getToken, setToken, removeToken } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    // 获得token
    token: getToken()
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
    }
  }
}
