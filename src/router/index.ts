import { createRouter, createWebHistory } from 'vue-router'
import OrderBook from '../views/OrderBook'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OrderBook,
    }
  ],
})

export default router
