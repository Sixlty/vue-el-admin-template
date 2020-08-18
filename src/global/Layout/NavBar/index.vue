<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
/deep/ .el-breadcrumb {
  line-height: 50px;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)
}
</style>