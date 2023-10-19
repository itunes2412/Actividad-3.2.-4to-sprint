import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '../components/LoginForm.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/loginform', // Cambia a minúsculas
    name: 'loginform', // Cambia a minúsculas
    component: LoginForm
  },
  
  {
    path: '/about',
    name: 'about',
    // Genera un fragmento separado (about.[hash].js) para esta ruta, cargado de forma diferida cuando se visita la ruta.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
