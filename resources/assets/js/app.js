require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

// Auth
// import Login from './components/Auth/Views/Login'
// import Register from './components/Auth/Views/Register'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App'

// router setup
import routes from './routes/routes'

// library imports
import Chartist from 'chartist'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/paper-dashboard.scss'
import 'es6-promise/auto'

// plugin setup
Vue.use(VueRouter)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)
Vue.use(SideBar)
// Auth Setup
// Vue.use(Login)
// Vue.use(Register)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})
// setting up the auth control for router
router.beforeEach((to, from, next) => {
  if(!to.meta.requiresAuth) {
    return next()
  }
  const authUser =  JSON.parse(window.localStorage.getItem('user'));
  if(!authUser || !authUser.token) {// if no record or token found redirect to login page
    return next({name:'login'})
  }
  if(to.meta.roles.length==0){// for login or register
    return next()
  }
  if(to.meta.roles.includes(authUser.user.role)){//admin or client
    if(to.meta.title=="Dashboard"){
      return next({name:authUser.user.role})
    }
    return next()
  }
  return next({name:'denied'})

})

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get() {
    return this.$root.Chartist
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})
