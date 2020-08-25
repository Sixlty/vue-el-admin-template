<template>
  <div class="box" >
    <div ref="left" class="header_left" :class="{ 'fix-padding' : isDefaultType }">
       <slot name="header_left" />
    </div>
    <div ref="right" class="header_right" :style="position">
      <slot name="header_right"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDefaultType: { // 如果是tabs布局，判断其是否是默认布局
      type: Boolean,
      default: true
    },
    position: {
      type: Object,
      default: function() {
        return {
          top: 0,
          right: 0
        }
      }
    }
  },
  data() {
    return{
      widthObject: {} //设置tab条的总宽度
    }
  },
  mounted() {
    this.fixedRight()
  },
  methods: {
    fixedRight() {
      this.$refs.left.querySelector('.el-tabs--top .el-tabs__header').style.width = `calc(100% - ${this.$refs.right.offsetWidth}px)`
    }
  }
}
</script>

<style scoped lang="less">
.fix-padding { // 修复tabs默认样式的padding
  transition: none;
  /deep/ .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding-left: 20px;
  }
}
.box {
  width: 100%;
  height: 100%;
  background: #fff;
  .header_left {
    height: 100%
  }
  .header_right {
    position: absolute;
  }
  .header_right::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #E4E7ED;
    z-index: 1;
  }
}
</style>
