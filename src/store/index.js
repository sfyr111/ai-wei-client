import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const types = {
  SET_TOKEN: 'SET_TOKEN',
  SET_USER_INFO: 'SET_USER_INFO'
}

export default new Vuex.Store({
  modules: {},
  actions: {
    saveWecharLogin ({ commit }, data) {
      commit(types.SET_USER_INFO, data.user)
      commit(types.SET_TOKEN, data.token)
    }
  },
  getters: {
    userInfo (state) {
      return state.userInfo
    },
    token (state) {
      return state.token
    }
  },
  state: {
    userInfo: '',
    token: ''
  },
  mutations: {
    [types.SET_TOKEN] (state, token) {
      state.token = token
    },
    [types.SET_USER_INFO] (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
  plugins: [
    createLogger(),
    createPersistedState({ key: 'aiwei' })
  ]
})
