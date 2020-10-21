import axios from "axios";
import ElementUI from "element-ui";
import router from "../router";


axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? "/api" : "http://www.chst.vip"
// 携带认证 携带cookie
axios.defaults.withCredentials = true;

axios.interceptors.request.use(config=>{
    // 登录和注册不需要携带token的  
    if(config.url=="/users/login"){
        return config//放行
    }else{
        let token = localStorage.getItem('summer-token')
        config.headers['authorization']=token
        // console.log(config);
        return config//放行？？？？？？
    }  
})
// 响应拦截
axios.interceptors.response.use(config=>{
    let {data} = config;
console.log(data);
    if(data.code=='1004' || data.code=='10022'){
        // console.log( Elementui);
        ElementUI.Message.error('登入信息失效请重新登录')
        router.push('/login')

    }else{
       return config
    }
})

axios.create({
    timeout: 4000
})
export default axios
