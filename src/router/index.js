import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/home',
    name: '首页',
    component: () => import ('../views/home/Home.vue'),
    children:[
      {
        path:'/companySvs',
        name:'公司服务',
        component: () => import ('../views/home/company-svs/company-svs.vue')
      },
      {
        path:'/threeLoability',
        name:'三责险',
        component: () => import ('../views/home/three-liability/three-liability.vue')
      },
      {
        path:'/wrongCar',
        name:'非车险',
        component: () => import ('../views/home/wrong-car-insurance/wrong-car-insurance.vue')
      },
      {
        path:'/salesMethod',
        name:'销售方法',
        component: () => import ('../views/home/sales-method/sales-method.vue')
      },
      {
        path:'/salesProcess',
        name:'销售流程',
        component: () => import ('../views/home/sales-process/sales-process.vue')
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component: () => import ('../views/login/Login.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // ...
  if(to.path == "/login") {
    return next()
  }

  if(!store.state.token) {
    return next('/login')
  }
  next()
})

export default router
