import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import part1 from '@/components/part1'
import part2 from '@/components/part2'
import part3 from '@/components/part3'
import part4 from '@/components/part4'
import part5 from '@/components/part5'
import CSSpart1 from '@/components/CSS_2020/part1'
import Video from '@/components/Video/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/part1',
      component: part1
    },
    {
      path: '/part2',
      component: part2
    },
    {
      path: '/part3',
      component: part3
    },
    {
      path: '/part4',
      component: part4
    },
    {
      path: '/part5',
      component: part5
    },
    {
      path: '/CSSpart1',
      component: CSSpart1
    },
    {
      path: '/video',
      component: Video
    },
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // 如果你的連結是帶 # 這種
    // to.hash 就會有值(值就是連結)
    // 例如 #3
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
