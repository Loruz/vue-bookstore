import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import http from './helpers/http'

Vue.config.productionTip = false
import '../src/assets/sass/main.css'
const token = localStorage.getItem('user-token')
if (token) {
  http.defaults.headers.common['Authorization'] = `Bearer ${token}`
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
