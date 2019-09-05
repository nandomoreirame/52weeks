export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue')
  },
  {
    path: '*',
    name: 'error404',
    component: () => import(/* webpackChunkName: "about" */ '@/views/404.vue')
  }
]
