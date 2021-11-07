import request from '../network/request'

//get请求
export const companyUrl = (data) => {
  return request ({
    url:'',
    params:data,
    method:'get'
  })
} 

//post请求
export const flyCarInsurance = (data) => {
  return request({
    url:'',
    method:'post',
    data
  })
}