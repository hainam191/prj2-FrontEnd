import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Home from '@/components/Home'
import BgAdmin from '@/components/BgAdmin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/home',
      name: 'LS',
      component: Home,
      // children:[{
      //   path: 'login',
      //   component: Login,
      // }]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: BgAdmin
    },
    {
      path: '*',
      component: {
        template: `<h1>404 Not Found</h1>`
      }
    }
  ],
  mode:'history'
})
