import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Login from 'views/Login.vue'
import Signup from 'views/Signup.vue'
import Home from 'views/Home.vue'
import PageNotFound from 'views/PageNotFound.vue';

import AuthLayout from 'layouts/AuthLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/auth/login',
    component: Login,
    meta: {
      layout: AuthLayout
    }
  },
  {
    path: '/auth/signup',
    component: Signup,
    meta: {
      layout: AuthLayout
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
  }
]
const router =  createRouter({
  history: createWebHistory(),
  routes
})

export default router
