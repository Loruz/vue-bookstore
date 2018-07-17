import store from '../../store' // your vuex store

export default (to, from, next) => {
  if (!store.getters['auth/isLoggedIn']) {
    // SEND MESSAGE
    store.dispatch('auth/logout');
    return next('/login')
  }
  next()
}
