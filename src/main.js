import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/styles/base.css"
import "./assets/styles/el-reset.css"
// 全局引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')