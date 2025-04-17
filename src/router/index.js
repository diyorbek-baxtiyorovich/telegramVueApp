// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../pages/Home.vue') },
  { path: '/catalog', component: () => import('../pages/Catalog.vue') },
  { path: '/cart', component: () => import('../pages/Cart.vue') },
  { path: '/profile', component: () => import('../pages/Profile.vue') }
  // { path: '/map', component: () => import('../pages/AddressSelector.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
