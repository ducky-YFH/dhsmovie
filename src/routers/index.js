import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import theater from './theater'
import admin from './admin'


Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: 'dhsmovie',
  routes: [
    movieRouter,
    mineRouter,
    theater,
    admin,
    {
      path: "*",
      redirect: '/movie'
    }
  ],
  linkActiveClass: 'active'
})
