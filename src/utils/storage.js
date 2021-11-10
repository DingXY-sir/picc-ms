/**
 * 封装本地化储存
 */

export const getItem = (name)=>{
 
  const data = window.localStorage.getItem(name)
   // data有可能不是json字符串类型的处理
  try{
    return JSON.parse(data)
  }catch(err){
    return data
  }
}

export const setItem = (name, value)=>{
  //如何value是对象转成json格式的字符串
  if(typeof value === 'object'){
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}

export const removeItem = name =>{
  window.localStorage.removeItem(name)
}