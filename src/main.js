import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { initialize } from './helpers/general'

Vue.config.productionTip = false
import '../src/assets/sass/main.css'

initialize(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
