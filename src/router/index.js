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
import local from '@/utils/local'
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
router.beforeEach((to, from, next) => {
  // to跳转目标路由对象
  // from从哪里跳过来的路由对象
  // next（）放行 next（'/login'）拦截到登录
  // 如果你访问的不是登录页面，且没有登录，跳转到登录页面
  const user = local.getUser()
  if (to.path !== '/login' && !user) return
  next('/login')
  next()
})

export default router
