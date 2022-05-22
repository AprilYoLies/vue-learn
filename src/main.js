// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import '@/permission'
import '@/icons'

Vue.config.productionTip = false  // 关闭生产模式下给出的提示

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({ // 创建一个 Vue 的根实例
  el: '#app', //挂载id,这个实例下所有的内容都会在index.html 一个id为app的div下显示
  router, // 注入路由配置
  store,  // 使用 vuex
  components: { App },  //配置根模板 即打开页面显示那个组件
  template: '<App/>'  // 注入组件
})
