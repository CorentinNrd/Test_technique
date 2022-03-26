import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/chercher',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/connexion',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/inscription',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router