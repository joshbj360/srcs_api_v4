// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'register/',
        name: 'Register',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Register.vue'),
        children: [
          {
            path:'login/',
            name:'login',
            component: () => import('@/user/components/LoginComponent.vue')
          },
          {
            path:'signup/',
            name:'signup',
            component: () => import('@/user/components/SignUpComponent.vue')
          },
        ]
      },
      {
        path: 'settings/',
        name: 'Settings',
        component: () => import('@/views/Settings.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
