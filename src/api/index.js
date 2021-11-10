import request from '../network/request'

//get请求
export const companyUrl = (data) => {
  return request ({
    url:'/api/index',
    params:data,
    method:'get'
  })
} 

//post请求
export const comExport = (data) => {
  return request({
    url:'/yuyin/sfunc/export',
    method:'post',
    data
  })
}

export const companySvsRead = (data) => {
  return request({
    url:'/yuyin/sfunc/selectcompanyservice',
    method:'post',
    data
  })
}

export const userLogin = (data) => {
  return request({
    url:'/yuyin/user/login',
    method:'post',
    data
  })
}
