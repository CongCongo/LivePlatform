//这个文件是路由,主要是用于当后端返回数据时候改变页面url以及页面内的组件用的

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Signup from '@/components/Signup'
import Welcome from '@/components/Welcome'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/signup',
    	name: 'signup',
    	component: Signup,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
})
