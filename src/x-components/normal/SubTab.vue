<template>
  <el-tabs v-model="activeName" type="border-card" @tab-click="tabClick">
    <el-tab-pane v-for="tab in tabs" :key="tab.props.name" v-bind="tab.props">
      <el-tabs v-if="tab.children && tab.children.length > 0" v-model="subTab">
        <el-tab-pane v-for="child in tab.children" :key="child.props.name" v-bind="child.props">
          <component :is="child.component" v-bind="child.componetProps"></component>
        </el-tab-pane>
      </el-tabs>
      <component v-else :is="tab.component" v-bind="tab.componetProps"></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script>

export default {
  // 二级tab组件，跳转页面返回后还是当前的tab页
  name: 'subTabs',
  props: {
    tabs: {
      required: true,
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      subTab: '',
      activeName: '',
    }
  },
  watch: {
    // 保持路由query与页面数据一致
    activeName(val) {
      this.$router.replace({
        query: {
          ...this.$route.query,
          activeName: val
        }
      })
    },
    subTab(val) {
      this.$router.replace({
        query: {
          ...this.$route.query,
          subTab: val
        }
      })
    }
  },
  created() {
    // 定位到某个tab
    if(!!this.$route.query.activeName) {
      this.activeName = this.$route.query.activeName
    }
    if(!!this.$route.query.subTab) {
      this.subTab = this.$route.query.subTab
    }
  },
  methods: {
    goBack() {
      this.$router.back('-1')
    },
    tabClick(val) {
      // 设置二级tab的默认首页
      if(!val) { return }
      for(let i = 0; i < this.tabs.length ; i++ ) {
        if(this.tabs[i].props.name === val) {
          this.subTab = this.tabs.children.props.name
        }
        break
      }
    }
  }
}
</script>

<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
  transition: none;
  background: #fff;
  /deep/ .el-tabs--top {
    .el-tabs__header {
      // width: calc(100% - 97px);
      margin-bottom: 0;
    }
    .el-tabs__content {
      height: calc(100vh - 92px);
      overflow: hidden;
      overflow-y: auto;
    }
  }
}
.sub-tabs {
  margin: -15px -15px;
  /deep/ .el-tabs--top {
    .el-tabs__item:nth-child(2) {
      padding-left: 20px;
    }
    .el-tabs__content {
      height: calc(100vh - 132px);
      overflow: hidden;
      overflow-y: auto;
    }
  }
}
</style>
