require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

// Plugins
import Login from './components/Account/Views/Login'
import Register from './components/Account/Views/Register'
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
Vue.use(Login)
Vue.use(Register)
Vue.use(VueRouter)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)
Vue.use(SideBar)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})
// setting up the auth control for router
router.beforeEach((to, from, next) => {
  // if(to.meta.requiresAuth) {
  //   let authUser = JSON.parse(window.localStorage.getItem('user'))
  //   if(!authUser || !authUser.token) {// if no record or token found redirect to login page
  //     next({name:'login'})
  //   }
  //   else if(to.meta.adminAuth) {
  //     const authUser = JSON.parse(window.localStorage.getItem('user'))
  //     if(authUser.data.role === 'ADMIN') {
  //       next()
  //     }
  //     else {
  //       next('/resident')
  //     }
  //   } 
  //   else if(to.meta.memberAuth) {
  //     const authUser = JSON.parse(window.localStorage.getItem('user'))
  //     if(authUser.data.role_id === 'MEMBER') {
  //       next()
  //     }else {
  //       console.log('Im in admin')
  //       next('/admin')
  //     }
  //   }
  // }
  // else {
  // next()
  // }
  //
  if(!to.meta.requiresAuth) {
    next()
  }
  const authUser =  JSON.parse(window.localStorage.getItem('user'));
  // alert(authUser.user.role)
  if(!authUser || !authUser.token) {// if no record or token found redirect to login page
    next({name:'login'})
  }
  if(!to.meta.roles){
    next()
  }
  if(to.meta.roles.includes(authUser.user.role)){//admin or client
    next({name:authUser.user.role})
    // next({name:'denied'})
  }
  next({name:'denied'})

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
