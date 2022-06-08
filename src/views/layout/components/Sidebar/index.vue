<template>
  <scroll-bar>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <!-- 父组件给子组件传递参数 -->
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  name: "index",
  components: {
    ScrollBar,
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'routers'
    ]),
    routes() {
      return this.routers
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style scoped>

</style>
