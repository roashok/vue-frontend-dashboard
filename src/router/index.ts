import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeComponent from '@/views/Home.vue'
import LoginComponent from '@/views/Login.vue'
import RegisterComponent from '@/views/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {path:'',component: HomeComponent},
  {path:'/login',component: LoginComponent},
  {path:'/register',component: RegisterComponent}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
