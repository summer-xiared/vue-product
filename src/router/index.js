import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login/'

Vue.use(VueRouter)

const routes = [
  {//普通引入
    path: '/Login',
    name: 'login',
    component: Login
  },
  {//懒加载
    path: '/Home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home')
  }
]

const router = new VueRouter({
  routes
})

export default router
