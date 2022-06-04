<template>
  <scroll-bar>
    <el-menu>
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
    }
  }
}
</script>

<style scoped>

</style>
