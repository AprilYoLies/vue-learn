import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({ // 创建 router 实例，然后传 `routes` 配置
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    }
  ]
})
