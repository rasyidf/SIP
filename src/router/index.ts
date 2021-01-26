import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/TabHome.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/TabAttendance.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/TabHistory.vue')
      },
      {
        path: 'tab4',
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
