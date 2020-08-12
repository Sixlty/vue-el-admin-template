<template>
  <div class="el-menu-item">
    <img :src="require('@/assets/logoNew.png')" class="logo" alt="">
    <span class="app-title">admin</span>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.el-menu-item:hover {
  background-color: #19536e;
  cursor: auto;
}
.el-menu-item {
  text-align: center;
  background-color:  #19536e;
  padding: 0;
}
.logo {
  padding: 10px;
  height: 100%
}
.app-title {
  margin-left: 10px;
  color: #fff;
  font-weight: 1000;
  font-size: 18px;
}
</style>