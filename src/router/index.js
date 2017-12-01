import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout'
import { userMap } from './userMap'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: _import('login') },
  { path: '/register', component: _import('register') },
  { path: '/error/:code', component: _import('error'), props: true },
  { path: '/page', component: _import('system/page') },
  { path: '/role', component: _import('system/role') },
  {
    path: '/',
    component: Layout,
    children: userMap
  },
  { path: '*', redirect: '/error/404' }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
