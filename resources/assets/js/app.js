import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from "./App";
import router from "./router/index";
import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);
// import App from './views/App'
// import Welcome from './views/Welcome'

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
  




