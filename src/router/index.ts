import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/TabHome.vue')
      },
      {
        path: 'att',
        component: () => import('@/views/TabAttendance.vue')
      },
      {
        path: 'hist',
        component: () => import('@/views/TabHistory.vue')
      },
      {
        path: 'report',
        component: () => import('@/views/TabReport.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
