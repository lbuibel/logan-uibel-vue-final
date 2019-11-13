import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Apply from './views/Apply.vue'
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
      path: '/apply',
      name: 'apply',
      component: Apply
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Vehicle.vue')

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
