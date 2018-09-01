import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import About from '@/views/about'
import Solution from '@/views/solution'
import Product from '@/views/product'
import Live from '@/views/live'
import Case from '@/views/case'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/solution',
      name: 'Solution',
      component: Solution
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/case',
      name: 'Case',
      component: Case
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
