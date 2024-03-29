// Composables
import { RouteLocationNormalized, createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/layouts/Default.vue'),
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
            component: () => import('@/apps/user/components/LoginComponent.vue')
          },
          {
            path:'signup/',
            name:'signup',
            component: () => import('@/apps/user/components/SignUpComponent.vue')
          },
        ]
      },
      {
        path: 'dashboard/',
        name: 'class',
        component: () => import('@/views/ClassDashboard.vue'),
        children: [
          {
            path: 'add/',
            name: 'addClass',
            component: () => import('@/apps/class/components/Children/ClassForm.vue')
          },
          {
            path: 'edit/',
            name: 'editClass',
            component: () => import('@/apps/class/components/Children/ClassForm.vue'),
            props: true
          },
          {
            path: 'list/',
            name: 'classList',
            component: () => import('@/apps/class/components/ClassCardList.vue')
          },
        ]
      },
    ],
  },
  {
    path: '/school/',
    name: 'studentsDetail',
    component: () => import('@/components/layouts/Default.vue'),
    children: [
      {
        path: 'student/',
        name: 'studentDashboard',
        component: () => import('@/apps/student/component/StudentDashboard.vue'),
        children: [
          {
            path: 'add/',
            name: 'addStudent',
            component: () => import('@/apps/student/component/children/StudentForm.vue')
          },
          {
            path: 'list/',
            name: 'listStudent',
            component: () => import('@/apps/student/component/children/StudentList.vue'),
            props: (route: RouteLocationNormalized) => ({
              classID: route.query.classID
            })
          },
        ]
      },
      {
        path: 'subject/',
        name: 'subject',
        component: () => import('@/apps/subjects/components/SubjectDashboard.vue')
      },
    ]
  },
  {
    path: '/core/',
    name: 'Settings',
    component: () => import('@/components/layouts/Default.vue'),
      children: [
        {
          name: 'settings',
          path: 'settings/',
          component: () => import('@/views/Settings.vue')
        }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
