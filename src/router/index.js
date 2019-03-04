import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import explain from '@/view/explain'
import html from './html/html'
import css from './css/css'
import js from './js/js'
import other from './other/other'

Vue.use(Router)

export default new Router({
  routes: [
    ...html,
    ...css,
    ...js,
    ...other,
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {path: '*', redirect: 'other/explain'}
  ]
})
