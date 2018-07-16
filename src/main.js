import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

Vue.config.productionTip = false
import '../src/assets/sass/main.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
