module.exports = {
  publicPath:'./',
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: "localhost",
    port: '8181',
    proxy: {
      '/api': {
        target: 'http://192.168.43.229:8181/', // 请求服务器根路径
        changeOrigin: true, // 是否跨域
        ws: true,
        pathRewrite: {
          '^/api': 'http://192.168.43.229:8181/',
        }
      }
    }
  },

};
