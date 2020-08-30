import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/List.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/User.vue')
      }
    ]
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/Add.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
