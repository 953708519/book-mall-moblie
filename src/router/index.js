import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Allclassify from '@/components/allclassify/Allclassify'
import Bookelse from '@/components/home/components/bookelse'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'bookelse',
          component: Bookelse
        }
      ]
    },
    {
      path: '/allclassify',
      name: 'allclassify',
      component: Allclassify
    }
  ]
})
