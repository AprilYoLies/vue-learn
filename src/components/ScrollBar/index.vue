<template>
  <div class="scroll-container">
    <div class="scroll-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '../../styles/variables.scss';

.scroll-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $menuBg;
  .scroll-wrapper {
    position: absolute;
    width: 100%!important;
  }
}
</style>
