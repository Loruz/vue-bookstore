import Auth from '../../services/Auth'
import http from '../../helpers/http'

const state = {
  isLoggedIn: false,
  token: localStorage.getItem('accessToken') || false
}

const getters = {
  isLoggedIn: state => Boolean(state.token),
  token: state => state.token
}

const actions = {
  register ({commit}, data) {
    return Auth.register(data)
      .then(res => {
        commit('setAccessToken', res.token)
      })
  },
  login ({commit}, credentials) {
    return Auth.login(credentials)
      .then(res => {
        commit('setAccessToken', res.token)
        http.defaults.headers.common["Authorization"] = `Bearer ${res.token}`
      })
  },
  logout({ commit }) {
    commit('setUser', false);
    commit('clearAccessToken', false);
    delete http.defaults.headers.common["Authorization"]
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}