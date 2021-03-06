import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddUser from '../views/AddUser.vue'
import EditUser from '../views/EditUser.vue'
import Login from '../views/Login.vue'


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
  {
    path: '/users/:id',
    name: 'EditUser',
    component: EditUser,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
