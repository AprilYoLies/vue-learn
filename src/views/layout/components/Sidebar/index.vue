<template>
  <scroll-bar>
    <el-menu>

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
