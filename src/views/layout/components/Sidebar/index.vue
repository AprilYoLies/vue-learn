<template>
  <scroll-bar>
    <el-menu>
      <!-- 父组件给子组件传递参数 -->
<!--      <sidebar-item :routes="routes"></sidebar-item>-->
    </el-menu>
  </scroll-bar>
</template>

<script>
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  name: "index",
  components: {
    ScrollBar,
    SidebarItem
  }
}
</script>

<style scoped>

</style>
