# college_vol项目交接及开发文档

## 一、开发准备

1.开发及启动环境

​	node v14

2.项目环境版本

​	本项目采用Vue 2.0版本脚手架进行开发

3.依赖下载

```
npm i
```

4.启动：

```
npm run dev 
```

5.打包：

```
npm run build
```



## 二、项目架构设计详解

1. vue.config.js

   vue主要配置：

   端口：8181，

   代理配置

   ```javascript
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
   ```

2. views

   主要视图页面

3. store

   vuex——响应式数据配置

4. router

   路由配置目录

5. network

   axios请求封装模块

   api.js： axios的请求配置

   主要封装了Get请求方法，Post请求方法

   request.js：请求接口方法

6. components

   主要组件模块

   













