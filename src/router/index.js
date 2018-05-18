import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Newdate from '@/components/Newdate'
import Details from '@/components/Details'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/newdate',
      name: 'Newdate',
      component: Newdate
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/',
      name: 'Header',
      component: Header,
    }
  ]
})
