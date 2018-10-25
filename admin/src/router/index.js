import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: '/login'
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: '/layout',
      redirect: '/layout/admin',
      component: () => import('@/views/layout'),
      children: [
        {
          path: 'admin',
          component: () => import('@/views/admin')
        },
        {
          path: 'task',
          component: () => import('@/views/task')
        }
      ]
    }
  ]
})
