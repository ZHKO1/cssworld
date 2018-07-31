import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import part1 from '@/components/part1'
import part2 from '@/components/part2'
import part3 from '@/components/part3'

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
  ]
})
