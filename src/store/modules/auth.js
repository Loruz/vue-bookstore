import Auth from '../../services/Auth'

const state = {
  isLoggedIn: false,
  token: false
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  token: state => state.token
}

const actions = {
  register ({commit}, data) {
    return Auth.register(data)
      .then(res => {
        commit('setLoggedIn', true)
        commit('setAccessToken', res.token)
      })
  },
  login ({commit}, credentials) {
    return Auth.login(credentials)
      .then(res => {
        commit('setLoggedIn', true)
        commit('setAccessToken', res.token)
      })
  },
  logout({ commit }) {
    commit('setLoggedIn', false);
    commit('setUser', false);
    commit('clearAccessToken', false);
  }
}

const mutations = {
  setAccessToken (state, token) {
    localStorage.setItem('accessToken', token)
    state.token = token
  },
  clearAccessToken (state) {
    localStorage.removeItem('accessToken')
    state.token = false
  },
  setLoggedIn (state, status) {
    state.isLoggedIn = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}