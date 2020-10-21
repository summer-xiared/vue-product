<template>
  <div class="homepage">
    <el-container>
      <!-- 左侧菜单栏 -->
      <el-aside width="200px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 头部 -->
      <el-container>
        <el-header>
          <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6"
              ><div class="grid-content bg-purple">图标</div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple-light">
                夏天的管理系统
              </div></el-col
            >
            <el-col :span="6"
              >
              <!-- 头像 -->
                <el-avatar shape="circle"
                           :size="70"
                           fit="fit"
                           src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603276166933&di=d86abaa301f1c6497b19b9c8f47920fa&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn17%2F325%2Fw640h485%2F20180325%2F14e7-fysnevn0134794.jpg">
                           </el-avatar>
                           <b class="nikename">{{userInfo.nickname}}</b>
                           <span class="tc" @click="quit">退出</span>
              <!-- <div class="grid-content bg-purple"> 退出</div> -->
                
                </el-col> 
          </el-row>
        </el-header>

        <!-- 内容区域 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['userInfo'])
  },
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    // 退出登录页面 1 清除token userInfo  2.跳转登录页面
    quit(){
      localStorage.removeItem('summer-token')
      localStorage.removeItem('summer-userInfo')
      this.$router.push("/login")

    },

  
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
/* 容器布局 */
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/* 头部 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/* 头部 */
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
      margin-bottom: 0;
    } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.tc, .nikename {
  vertical-align: middle;
  font:20px/30px '';
  width: 30px;
  height: 30px;
}
</style>


      
      // <div class="demo-basic--circle">
      //   <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
      //   <div class="block" v-for="size in sizeList" :key="size">
      //     <el-avatar :size="size" :src="circleUrl"></el-avatar>
      //   </div>
      // </div>
  

 