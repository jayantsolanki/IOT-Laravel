import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue' // main layout, header,footer and sidebar

// AccountViews
import GeneralLayout from '../components/Account/Layout/GeneralLayout.vue'
import Login from '../components/Account/Views/Login.vue'
import Register from '../components/Account/Views/Register.vue'

// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from './../components/Dashboard/Views/Overview.vue'
import UserProfile from './../components/Dashboard/Views/UserProfile.vue'
import Notifications from './../components/Dashboard/Views/Notifications.vue'
import Icons from './../components/Dashboard/Views/Icons.vue'
import Maps from './../components/Dashboard/Views/Maps.vue'
import Typography from './../components/Dashboard/Views/Typography.vue'
import TableList from './../components/Dashboard/Views/TableList.vue'

const routes = [
  {
    path: '/', 
    meta: { title: 'Dashboard', requiresAuth: true, roles: ['admin','member']}
  },
  {
    path: '/auth',
    component: GeneralLayout,
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {title: 'Login', requiresAuth: false, roles: []},
        component: Login
      },
      {
        path: 'register',
        name: 'register',
        meta: {title: 'Register', requiresAuth: false, roles: []},
        component: Register
      },
      {
        path: 'denied',
        // meta: { requiresAuth: false, roles: []},
        name: 'denied'
       // component: Denied
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview,
        meta: {title: 'Overview', requiresAuth: true, roles: ['admin']}
      },
      {
        path: 'stats',
        name: 'stats',
        component: UserProfile,
        meta: {title: 'Your Profile', requiresAuth: true, roles: ['admin']}
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications,
        meta: {title: 'Notifications', requiresAuth: true, roles: ['admin']}
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons,
        meta: {title: 'Icons', requiresAuth: true, roles: ['admin']}
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps,
        meta: {title: 'Maps', requiresAuth: true, roles: ['admin']}
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography,
        meta: {title: 'Typography', requiresAuth: true, roles: ['admin']}
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList,
        meta: {title: 'Table List', requiresAuth: true, roles: ['admin']}
      }
    ]
  },
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
