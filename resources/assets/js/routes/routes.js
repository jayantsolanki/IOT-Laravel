

/*************************************************** Used for Authentication **********************************************************************/
// Authentication
import GeneralLayout from '../components/Auth/Layout/GeneralLayout.vue'
import Login from '../components/Auth/Views/Login.vue'
import Register from '../components/Auth/Views/Register.vue'
/***************************************************************************************************************************************/
// GeneralViews, Page Not Found
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

/*************************************************** Admin pages **********************************************************************/
// import DashboardLayout from '../components/Dashboard/Admin/Layout/DashboardLayout.vue' // main layout, header,footer and sidebar
/***************************************************************************************************************************************/


/*************************************************** Member Pages **********************************************************************/
/***************************************************************************************************************************************/

/*************************************************** Old webpages **********************************************************************/
// Admin pages
import DashboardLayout from '../components/Dashboard-old/Layout/DashboardLayout.vue' // main layout, header,footer and sidebar
import Overview from './../components/Dashboard-old/Views/Overview.vue'
import UserProfile from './../components/Dashboard-old/Views/UserProfile.vue'
import Notifications from './../components/Dashboard-old/Views/Notifications.vue'
import Icons from './../components/Dashboard-old/Views/Icons.vue'
import Maps from './../components/Dashboard-old/Views/Maps.vue'
import Typography from './../components/Dashboard-old/Views/Typography.vue'
import TableList from './../components/Dashboard-old/Views/TableList.vue'
/***************************************************************************************************************************************/

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
    redirect: '/def/stats'
  },
  {
    path: '/def',
    name: 'def',
    component: DashboardLayout,
    redirect: '/def/stats',
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
