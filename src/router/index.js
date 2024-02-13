import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/alunos',
      name: 'alunos',
      component: () => import('../views/StudentsView.vue')
    },
    {
      path: '/alunos/:id',
      name: 'alunos detalhes',
      component: () => import('../views/StudentsDetails.vue')
    },
    {
      path: '/docentes',
      name: 'docentes',
      component: () => import('../views/DocentesView.vue')
    },
  ]
})

export default router
