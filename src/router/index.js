import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cube from "../components/cube/cube.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cube',
    component: Cube
  }
]

const router = new VueRouter({
  routes
})

export default router
