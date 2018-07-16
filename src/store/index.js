import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import notice from './modules/notice'
import auth from './modules/auth'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    user,
    notice,
    auth
  }
})
