import Auth from '../../services/Auth'

const state = {
  notification: {
    message: false,
    type: false
  }
}

const getters = {
  notification: state => state.notification
}

const actions = {
  setNotificationMessage ({commit}, payload) {
    commit('setNotificationMessage', payload)
  },
  clearNotificationMessage ({commit}) {
    commit('clearNotificationMessage')
  }
}

const mutations = {
  setNotificationMessage (state, {message, type}) {
    state.notification.message = message
    state.notification.type = type
    state.notification = {...state.notification}
  },
  clearNotificationMessage(state) {
    state.notification.message = false
    state.notification.type = false
    state.notification = {...state.notification}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}