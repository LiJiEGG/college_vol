import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";


import '/src/assets/font/Nunito.css'
import store from "./store";

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

// getschoolinfo({
//   startPage: 2,
//   pageSize: 15
//   }
// ).then(res => {
//   console.log(res)
// })
// axios({
//   url: 'http://25.1.3.85:8181/allSchoolInfo',
//   method: 'get',
//   headers: '',
//   params:{
//     startPage: 2,
//     pageSize: 15
//   }
// }).then(res => {
//   console.log(res.data);
// })

