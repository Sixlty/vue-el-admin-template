<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="app-main">
      <router-view ></router-view>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.app-main {
  height: calc(100vh - 50px);
}
</style>