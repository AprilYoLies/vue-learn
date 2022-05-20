import Vue from 'vue'
import Router from 'vue-router'
import Layouts from '@/components/layouts' // 导入layouts.vue 组件

Vue.use(Router)

export default new Router({ // 创建 router 实例，然后传 `routes` 配置
  routes: [
    {
      path: '/',
      name: 'Layouts',
      component: Layouts
    }
  ]
})
