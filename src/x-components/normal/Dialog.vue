<template>
  <el-dialog class="dialog" v-bind="$attrs" v-on="$listeners" top="50px" width="80%">
    <div class="main">
      <slot name="default" />
    </div>
    <div slot="footer">
      <slot name="footer" />
    </div>
  </el-dialog>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.dialog {
  /deep/ .el-dialog{
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    .el-dialog__body {
      flex: 1;
      padding: 0;
      overflow: hidden;
      overflow-y: auto;
      .main {
        height: 100%;
        padding: 10px 20px;
      }
    }
    .el-dialog__body::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .el-dialog__body::-webkit-scrollbar-thumb{
      background-color: #aaa;
      border-radius: 4px
    }
  }
}
</style>