import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Portfolio from '@/views/Portfolio.vue'
import Login from '@/views/Login.vue'
import PaperMarket from '@/views/PaperMarket.vue'
import Register from '@/views/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {path:'/portfolio', component:Portfolio},
  {path:'/login', component:Login},
  {path:'/', component:Register},
  {path:'/paper_market', component:PaperMarket}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
