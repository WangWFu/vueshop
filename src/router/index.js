import Vue from 'vue'
import Router from 'vue-router'
const home=()=> import('@/views/home/home') 
const category=()=>import('@/views/category/category')
const car=()=>import('@/views/car/car')
const my=()=>import('@/views/my/my')
const Detail=()=>import('@/views/detail/Detail')
const login=()=>import('@/views/login/Login')
const register = () =>import('@/views/register/Register')

import VueRouter from 'vue-router'
Vue.use(Router)

const routes=[
  {
    path:'',
    redirect:'/home'
  },
    {
      path:'/home',
      component:home
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/car',
      component:car
    },
    {
      path:'/my',
      component:my
    },
    {
      path:'/detail/:id',
      component:Detail
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/register',
      component:register
    }
]
const router=new VueRouter({
  mode: 'history',
  routes
})
export default router
