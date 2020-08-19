<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item v-for="route in routes" :key="route.path" :to="{ path: route.path }">{{ route.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="header-right">
      <img class="avatar" :src="require('@/assets/logoNew.png')" alt="">
    </div>
    <AppMain />
  </div>
</template>

<script>
import AppMain from './AppMain'
export default {
  components: {
    AppMain
  },
  computed: {
    routes() {
      let matched = this.$route.matched.filter(val => val.meta && val.meta.title)
      if(matched[0].path !== '/') [
        matched = [{path: '/', meta: { title: '首页' }}].concat(matched)
      ]
      return matched
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
/deep/ .el-breadcrumb {
  line-height: 50px;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)
}
.header-right {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 50px;
  * {
    float: right;
  }

  .avatar {
    height: 50px;
    padding: 10px;
    vertical-align: center;
    background: #000
  }
}
</style>