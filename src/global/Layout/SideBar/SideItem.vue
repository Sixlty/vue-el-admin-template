<template>
  <div>
    <div v-for="route in routes.filter(val => !val.hidden && (val.meta && val.meta.title))" :key="route.path">
      <el-menu-item :index="route.path" v-if="!route.children" @click="toRoute(route.path)" >
        <Item :icon="route.meta && route.meta.icon" :title="route.meta && route.meta.title" />
      </el-menu-item>

      <el-submenu :index="route.path" v-else>
        <template slot="title">
          <Item :icon="route.meta && route.meta.icon" :title="route.meta && route.meta.title" />
        </template>
        <SideItem :routes="route.children" :base-path="route.path"/>
      </el-submenu>
    </div>
    

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
    },
    basePath: {
      type: String,
    }
  },
  methods: {
    toRoute(path) {
      let toRoute = ''
      if(!this.basePath) {
        toRoute = path
      } else {
        toRoute = this.basePath + path
      }
      if(this.$route.path == toRoute) { return  }
      this.$router.push(toRoute)
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-item {
  i, span {
    color: #fff
  }
}
.el-submenu__title {
  i, span {
    color: #fff
  }
}
.el-submenu {
  .el-menu-item {
    background-color: rgb(33, 103, 136)!important;
  }
  .el-menu-item:hover {
    background-color: rgb(19, 60, 80)!important
  }
}
.el-menu-item.is-active {
  background-color: rgb(37, 117, 154)!important;
  i,span {
    color: #409EFF
  }
}
</style>