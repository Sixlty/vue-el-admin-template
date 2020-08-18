<template>
  <div class="app-container">
    <SideBar class="sideBar" />
    <NavBar class="nav" />
  </div>
</template>

<script>
import NavBar from './NavBar'
import SideBar from './SideBar' 
export default {
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style lang="less" scoped>
.app-container {
  display: flex;
  .sideBar, .nav {
    flex: 1
  }
}
</style>