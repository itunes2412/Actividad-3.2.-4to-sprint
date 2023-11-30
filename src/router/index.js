import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '../components/LoginForm.vue'
import CorreoEnviado from '../components/CorreoEnviado.vue'
import AvisoPrivacidad from '../components/AvisoPrivacidad.vue'
import TarjetaCasa from '../components/TarjetaCasa.vue'
import TarjetaCasaa from '../components/TarjetaCasaa.vue'
import TarjetaCasaaa from '../components/TarjetaCasaaa.vue'
import TarjetaCasaaaa from '../components/TarjetaCasaaaa.vue'
import TarjetaCasaaaaa from '../components/TarjetaCasaaaaa.vue'
import TarjetaCasaaaaaa from '../components/TarjetaCasaaaaaa.vue'
import NosotrosSitio from '../components/NosotrosSitio.vue'
import PropiedadesSitio from '../components/PopiedadesSitio.vue'
import VisionMision from '../components/VisionMision.vue'
import UbicacionSitio from '../components/UbicacionSitio.vue'




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
    path: '/tarjetacasa',
    name: 'TarjetaCasa',
    component: TarjetaCasa,
  },
  {
    path: '/tarjetacasaa',
    name: 'TarjetaCasaa',
    component: TarjetaCasaa,
  },
  {
    path: '/tarjetacasaaa',
    name: 'TarjetaCasaaa',
    component: TarjetaCasaaa,
  },
  {
    path: '/tarjetacasaaaa',
    name: 'TarjetaCasaaaa',
    component: TarjetaCasaaaa,
  },
  {
    path: '/tarjetacasaaaaa',
    name: 'TarjetaCasaaaaa',
    component: TarjetaCasaaaaa,
  },
  {
    path: '/tarjetacasaaaaaa',
    name: 'TarjetaCasaaaaaa',
    component: TarjetaCasaaaaaa,
  },
  
  {
    path: '/nosotrossitio',
    name: 'NosotrosSitio',
    component: NosotrosSitio,
  },
  {
    path: '/propiedadessitio',
    name: 'PropiedadesSitio',
    component: PropiedadesSitio,
  },
  {
    path: '/visionmision',
    name: 'VisionMision',
    component: VisionMision,
  },
  {
    path: '/ubicacionsitio',
    name: 'UbicacionSitio',
    component: UbicacionSitio,
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
