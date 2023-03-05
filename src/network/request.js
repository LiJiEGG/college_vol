import axios from 'axios';
import QS from 'querystring'

let BASE_URL = 'http://47.94.8.95:8181/api';
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 3000;

export var Base_url = 'http://47.94.8.95:8181/';

// axios.interceptors.request.use(config => {
//   config.headers['token'] = Cookies.get('token') || ''
//   config.headers['tenant_code'] = Cookies.get('tenant_code') || ''
//   return config;
// }, error => {
//   return Promise.reject(error);
// })
//
// // 成功状态 有3的接口一般是资源重定向
// // service.defaults.validateStatus=status=>{
// //     return /^(2|3)\d{2}$/.test(status);
// // };
//
// // response响应拦截器
// axios.interceptors.response.use(response => {
//   if (response.data.code === 401 || response.data.code === 10001) {
//     Cookies.remove('token')
//     router.push('/')
//     return Message('cookie失效，请重新登陆');
//   }
//   return response;
//   }, error => {
//   let { response } = error;
//   if (response) {
//     //服务器有返回内容
//     var errormsg = '';
//     switch (response.status) {
//       case 400:
//         errormsg = '错误请求'
//         break;
//       // case 401:
//       //     errormsg = '未登录,请重新登录'
//       //     break;
//       case 403:
//         errormsg = '决绝访问'
//         break;
//       case 404:
//         errormsg = '请求错误，未找到该资源'
//         break;
//       case 405:
//         errormsg = '请求方法未允许'
//         break;
//       case 408:
//         errormsg = '请求超时'
//         break;
//       case 500:
//         errormsg = '服务器出错'
//         break;
//       case 501:
//         errormsg = '网络未实现'
//         break;
//       case 502:
//         errormsg = '网络错误'
//         break;
//       case 503:
//         errormsg = '服务不可用'
//         break;
//       case 504:
//         errormsg = '网络超时'
//         break;
//       case 505:
//         errormsg = 'http版本不支持该请求'
//         break;
//       default:
//         errormsg = '连接错误'
//     }
//     Message({ type: 'warning', message: errormsg });
//     return false;
//   } else {
//     //服务器连结果都没有返回  有可能是断网或者服务器奔溃
//     if (!window.navigator.online) {
//       //断网处理
//       Message('网络中断');
//       return;
//     } else {
//       //服务器奔了
//       Message('服务器奔了');
//       return Promise.reject(error);
//     }
//   }
// })




/*
 get方法， 对应get请求
 @param {string} url
 @param {Object} param{请求携带的参数}
*/

export function get(url,params) {
  return new Promise((resolve,reject) => {
    axios.get(
      url,
      {
        params: params
      }).then(res => {
        resolve(res.data);
    }).catch(err => {
      reject(err.data);
      })
  });
}

/*
post请求：
@params {string} url,
@param {Object} param
 */

export function post(url,params) {
  return new Promise((resolve, reject) => {
    axios.post(
      url,
      QS.stringify(params)
    ).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })
  });
}
