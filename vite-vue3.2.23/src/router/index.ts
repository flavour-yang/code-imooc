import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/user/login/index.vue'),
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('@/pages/pageIndex/index.vue'),
  }

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
