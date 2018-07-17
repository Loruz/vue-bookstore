import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import RedirectIfLoggedIn from './guards/RedirectIfLoggedIn';
import IsLoggedIn from './guards/IsLoggedIn';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: IsLoggedIn
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      beforeEnter: IsLoggedIn
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: RedirectIfLoggedIn
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: RedirectIfLoggedIn
    }
  ]
})
