import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '../components/LoginForm.vue'
import CorreoEnviado from '../components/CorreoEnviado.vue'
import AvisoPrivacidad from '../components/AvisoPrivacidad.vue'



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
    path: '/correo-enviado',
    name: 'CorreoEnviado',
    component: CorreoEnviado,
  },
  {
    path: '/avisoprivacidad',
    name: 'AvisoPrivacidad',
    component: AvisoPrivacidad,
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
