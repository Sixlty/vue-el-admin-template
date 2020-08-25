<template>
  <div class="table-view">
    <div v-if="hasHeader" class="header">
      <div class="header_left">
        <slot name="header_left">
          <!-- 如果左头部未定义，默认以路由标题作为本页标题 -->
          <div class="title">{{ title || $route.meta.title }}</div>
        </slot>
      </div>
      <div class="header_right">
        <slot name="header_right" />
      </div>
    </div>
    <div class="main">
      <slot />
    </div>
    <!-- <div v-if="hasFooter" class="footer"> -->
      <slot name="footer" />
    <!-- </div> -->
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    },
    data() {
      return {
        hasHeader: !!this.$slots.header_left || !!this.$slots.header_right, // 判断有无头部插槽
        hasFooter: !!this.$slots.footer // 判断有无底部插槽
      }
    }
  }
</script>

<style lang="less" scoped>
.table-view {
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  .header {
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    .header_left {
      .title {
        display: inline-block;
        height: 25px;
        line-height: 25px;
        border-left: 5px solid #409eff;
        padding-left: 8px;
      }
    }
  }
  .main {
    flex: 1;
    background: #fff;
    overflow-y: auto;
    padding: 10px;
  }
  .main::-webkit-scrollbar {
    width: 6px;
    height: 4px;
    background: #fff;
  }
  .main::-webkit-scrollbar-thumb {
    background:#ccc;
  }
  // .footer { // 需要统一固定的底部时添加
  //   height: 50px;
  //   background: #fff;
  // }
}
</style>