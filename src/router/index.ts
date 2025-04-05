import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import WaifuDetail from '../pages/WaifuDetail.vue'
import Checkout from '../pages/Checkout.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/waifu/:id',
    name: 'WaifuDetail',
    component: WaifuDetail
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
