<template>
  <div>
    <sidebar class="sidebar-container"></sidebar>
  </div>
</template>

<script>
import { Sidebar } from './components'

export default {
  name: "Layout",
  components: {
    Sidebar
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
