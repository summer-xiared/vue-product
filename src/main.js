import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入css样式
import "./assets/styles/base.css"
import "./assets/styles/el-reset.css"
// 全局引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  // 如果没有注册
  let token = localStorage.getItem('summer-token')
  if(token){
    next()
  }else{
    if(to.path==='/login'){
      next()
    }else{
      next({path:'/login'})

    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
