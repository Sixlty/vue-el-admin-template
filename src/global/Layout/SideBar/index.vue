<template>
  <div @click="isCollapse = !isCollapse" class="sideBar-wrapper">
    <Logo />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu class="sideBar-menu" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#3092C0">
        <SideItem :routes="$router.options.routes" />
      </el-menu>
    </el-scrollbar>
  </div>
  
</template>

<script>
import Logo from './Logo'
import SideItem from './SideItem'
export default {
  components: {
    Logo,
    SideItem
  },
  data() {
    return {
      isCollapse: false
    }
  }
}
</script>

<style lang="less" scoped>
@import '~g/style/variable.less';
.sideBar-wrapper {
  border-radius: 0 10px 10px 0;
  position: relative;
  height: 100vh;
  background-color: @theme-color;
  max-width: 240px;

  .scrollbar-wrapper {
    overflow-x: hidden;
  }

  .sideBar-menu {
    border-right: 0;
    height: 100%;
    background-color: @theme-color;
  }
}
</style>