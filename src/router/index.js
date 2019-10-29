import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import NotFound from '@/views/404'
import Welcome from '@/views/welcome'
import Article from '@/views/article'
import Image from '@/views/image'
import Publish from '@/views/publish'
import Comment from '@/views/comment'
import Fans from '@/views/fans'
import Setting from '@/views/setting'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home,
    children: [{
      path: '/',
      component: Welcome
    },
    {
      path: '/article',
      component: Article
    }, {
      path: '/image',
      component: Image
    }, {
      path: '/publish',
      component: Publish
    }, {
      path: '/comment',
      component: Comment
    },
    {
      path: '/fans',
      component: Fans
    }, {
      path: '/setting',
      component: Setting
    }
    ]
  },

  {
    path: '*',
    component: NotFound
  }
  ]
})
export default router
