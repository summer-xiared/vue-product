import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 头像刷新就没有了的解决办法
let userInfo = localStorage.getItem('summer-userInfo') || '{}'
userInfo = JSON.parse(userInfo)
export default new Vuex.Store({
  state: {
    // 头像刷新就没有了的解决办法
    // userInfo:{}
    userInfo
  },
  mutations: {
    // 更改userInfo 渲染昵称
    SET_USERINFO(state,payload){
      state.userInfo = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
