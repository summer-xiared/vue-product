<template>
  <div class="login-page">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="success" @click="submitForm('loginForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
    <video
      id="video"
      muted
      src="../video/bg_video.d2d602a9.mp4"
      autoplay
      loop
    ></video>
    <!-- 背景 -->
    <!-- <div class="v">
    <video class="f"  id="bgvid" playsinline="" autoplay muted loop="">
        <source src="../video/bg_video.d2d602a9.mp4" type="video/mp4">
    </video> -->
    <!-- </div> -->
  </div>
</template>
<script>
//登入逻辑的实现
//1.收集用户输入的username&password传递给后端

//2.登入通过后,将后端返回的token存到本地,跳转到主页
//3.每次请求的时候,携带token到请求头authorization

//4.展示token校验正确的数据

//5.校验不通过,跳转到登入页
import { login } from "@/api";
//  vuex渲染登录名到页面
import {mapMutations} from "vuex"

export default {
  
  data() {
    var validateUsername = (rule, value, callback) => {
      // var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
      // if (!uPattern.test(value)) {
      //   callback("4-16位（数字，字母，下划线，减号）");
      // } else {
      //   callback();
      // }
      if (!value) {
        console.log(123);
        callback(new Error("请输入用户名4到16位"));
      } else {
        callback();
      }
      // };
      //  if (value === "") {
      //     callback(new Error("请输入用户名"));
      //   } else {
      //     if (this.loginForm.password !== "") {
      //       this.$refs.loginForm.validateField("password");
      //     }
      //     callback();
      //   }
    };
    // 校验用户密码
    var validatePassword = (rule, value, callback) => {
      // console.log(rule);
      // console.log(value);
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  methods: {
      // vuex渲染登录名到页面
    ...mapMutations(['SET_USERINFO']),

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 登录加载
          const loading = this.$loading({
            lock: true,
            text: "拼命加载",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
          });
          //代表本地校验通过
          console.log(this.loginForm.username, this.loginForm.password);
          let { username, password } = this.loginForm;
          // 发送登录请求收集信息
          login(username, password)
            .then((res) => {
              // 登录加载成功后关闭相应加载
              loading.close()
              // console.log(res);
              if (res.data.state) {
                 this.$message.success('登录成功')
                // 把token存到本地
                localStorage.setItem("summer-token", res.data.token);

                localStorage.setItem("summer-userInfo",JSON.stringify(res.data.userInfo));

           
                // 渲染登录名
                this.SET_USERINFO(res.data.userInfo)


                // 跳转到主页
                this.$router.push("/Home"); //???????????
              } else {
               this.$message.error('错了哦，这是一条错误消息');
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          // return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.el-form {
  width: 260px;
  position: absolute;
  bottom: 200px;
  right: 300px;
}

.loginpage {
  position: relative;
}

/* 背景图 */
body {
  margin: 0;
}
#video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  -webkit-filter: grayscale(300%);
}
</style>
  