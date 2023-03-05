import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Searchcollege from "../views/Searchcollege";
import Searchmajor from "../views/Searchmajor";
import Search from "../views/Search";
import School from "../views/School";
import Major from "../views/Major";
import Selectcollege from "../views/Selectcollege";
import Counsellingroom from "../views/Counsellingroom";
import Counselling from "../views/Counselling";


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home',
    component: Home
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/counsellingroom',
    name :'Counsellingroom',
    component: Counsellingroom
  },
  {
    path:'/counselling',
    name :'Counselling',
    component: Counselling
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    children:[
      {
        path: 'college',
        name: 'searchcollege',
        component: Searchcollege
      },
      {
        path: 'major',
        name: 'searchmajor',
        component: Searchmajor
      },
      {
        path:'college/:id',
        name: 'school',
        component: School
      },
      {
        path:'major/:id',
        name: 'major',
        component: Major
      },
      {
        path:'selectcollege',
        name:'selectcollege',
        component: Selectcollege
      }
    ]
  },
  // {
  //   path:'/searchcollege',
  //   name: 'Searchcollege',
  //   component: Searchcollege
  // },
  // {
  //   path:'/searchmajor',
  //   name :'Searchmajor',
  //   component: Searchmajor
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // // route level code-splitting
  //   // // this generates a separate chunk (about.[hash].js) for this route
  //   // // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
