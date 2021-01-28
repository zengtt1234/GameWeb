import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
  baseURL:'http://localhost:3000/admin/api/'
})

//请求拦截器
// Add a request interceptor
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  if(localStorage.token){
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

//响应拦截器
//通用的处理接口
http.interceptors.response.use(res=>{
  return res
},err => {
  if(err.response.data.message){
    //el-UI的message方法
    //vue add element-ui的时候，element把message方法加入到Vue原型上了
    Vue.prototype.$message({
      type:'error',
      message:err.response.data.message
    })
    //console.log(err.response.data)
    if(err.response.status === 401){
      router.push('/login')
    }
  }
  
  return Promise.reject(err)
})
export default http