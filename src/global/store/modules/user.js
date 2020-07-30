export default {
  state: {
    token: '',
    userInfo: '',
  },

  namespaced: true,

  mutations: {
    Set_Token(state, token) {
      state.token = token
    },
    Set_UserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },

  action: {
    login({ commit }, loginForm) {

    }
  }
  
}