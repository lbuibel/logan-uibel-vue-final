import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Checkout from './views/Checkout.vue'
import VehiclePage from './views/Vehicle.vue'
import Confirmation from './views/Confirmation.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/vehicles',
      name: 'vehicle-page',
      component: VehiclePage
    },
    {
      path: '/confirmation',
      name: 'confirmation-page',
      component: Confirmation
    }
  ]
})
