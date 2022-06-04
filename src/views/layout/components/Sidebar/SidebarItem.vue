<template>
  <div>
    <!-- key 用于控制是否复用组件，影响 beforeRouteUpdate => created => mounted 钩子函数的调用顺序 -->
    <template v-for="item in routes" v-if="!item.hidden&item.children">
      <router-link v-if="onlyOneShowingChildren(item.children)" :to="item.path + '/' + item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path + '/' + item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <svg-icon v-if="item.children[0].meta && item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.children[0].meta && item.children[0].meta.title" slot="title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    },
    isNest: {
      Type: Boolean
    }
  },
  methods: {
    onlyOneShowingChildren(children) {
      let showingChildren = children.filter(item => {
        return !item.hidden
      })
      return showingChildren.length === 1;

    }
  }
}
</script>package-lock.json

<style scoped>

</style>
