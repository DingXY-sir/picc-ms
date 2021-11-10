module.exports = {
  // devServer:{
  //   //默认端口号
  //   port:'8888',
  //   //默认地址
  //   host:'localhost',
  //   open:true
  // },
  devServer:{
    proxy: {    
      '/api': {    
          target: 'http://192.168.0.35:9999',
          changeOrigin: true,
          wx: true,
          pathRewrite: {
          '^/api': ''
          }
      }
    }
  }
  
}