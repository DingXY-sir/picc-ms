import axios from 'axios'
import router from '../router'

// 使用自定义配置新建一个 axios 实例
const request= axios.create({
  // 基础的请求地址
   baseURL: 'https://api.shop.eduwork.cn',
  // 设置超时时间 5s
   timeout: 5000
});

// 响应拦截器
request.interceptors.response.use(success => {
  //根据状态吗返回数据
  //1、判断业务逻辑
  if(success.status && success.status == 200){
    if(success.data.code ==500 || success.data.code ==400 ||success.data.code == 401){
      Message.error({message:success.data.message})
      return
    }
    //响应成功提示 类似（添加成功、删除成功）
    if(success.data.message){
      Message.success({message:success.data.message})
    }
  }
  return success.data
},error => {
  //error:接口访问失败
  if(error.response.code == 504 || error.response.code == 404){
    Message.error({message:'服务器响应失败！'})
  }else if(error.response.code == 403){
    Message.error({message:'权限不足,请联系管理员'})
  }else if(error.response.code == 401) {
    Message.error({message:'尚未登录,请登录'})
    router.replace('/')
  }else{
    if(error.response.data.message){
      Message.error({message:error.response.data.message})
    }else{
      Message.error({message:'未知错误！'})
    }
  }
  return
})


export default request