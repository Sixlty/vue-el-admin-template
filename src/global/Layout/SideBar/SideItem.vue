<template>
  <div>
    <el-menu-item v-for="route in routes.filter(val => !val.hidden && (val.meta && val.meta.title))" :key="route.path">
      <Item v-if="!routes.children" :icon="route.meta && route.meta.icon" :title="route.meta && route.meta.title" />

      <el-submenu v-else>
        <template slot="title">
          <Item v-if="!routes.children" :icon="route.meta && route.meta.icon" :title="route.meta && route.meta.title" />
        </template>
        <SideItem :routes="routes.children" />
      </el-submenu>
    </el-menu-item>

    <!-- <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
      <el-submenu index="1-4">
        <span slot="title">选项7</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="4">
      <Item icon="el-icon-setting" title="导航四" />
    </el-menu-item> -->
  </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'SideItem',
  components: {
    Item
  },
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.el-submenu__title i, .el-menu-item i{
  color: rgb(241, 238, 238);
}

.is-active {
  background-color:rgb(29, 94, 124)!important;
  /deep/ .el-menu-item {
    background-color:rgb(29, 94, 124)!important;
  }
  /deep/ .el-menu-item:hover {
    background-color: rgb(19, 60, 80)!important;
  }
}

/deep/ .el-submenu__title:hover {
  background-color: inherit;
}
</style>