import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddUser from '../views/AddUser.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddUser',
    component: AddUser
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
