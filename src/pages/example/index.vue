<template>
  <div >
    <TabView style="height:calc(100vh - 50px)"  >
      <el-tabs type="card" tab-position="top" slot="header_left" >
        <el-tab-pane label="基本信息">
          <el-button type="primary" class="test">测试按钮</el-button>
        </el-tab-pane>
        <el-tab-pane label="地址">
        </el-tab-pane>
        <el-tab-pane label="采购商推荐">
        </el-tab-pane>
        <el-tab-pane label="供应商推荐">
        </el-tab-pane>
        <el-tab-pane label="支付设置" />
      </el-tabs>
      <div slot="header_right" style="height: 41px" >
        <el-button>按钮</el-button>
        <el-button>按钮</el-button>
      </div>
    </TabView>
    <el-dialog :visible.sync="dialogTableVisible">
      <TabView :position="{ top: '60px', right: '20px' }" >
        <el-tabs tab-position="top" slot="header_left" >
          <el-tab-pane label="基本信息">
          </el-tab-pane>
          <el-tab-pane label="地址">
          </el-tab-pane>
          <el-tab-pane label="采购商推荐">
          </el-tab-pane>
          <el-tab-pane label="供应商推荐">
          </el-tab-pane>
          <el-tab-pane label="支付设置" />
        </el-tabs>
        <div slot="header_right" >
          <el-button>按钮</el-button>
          <el-button>按钮</el-button>
        </div>
      </TabView>
    </el-dialog>
  </div>
</template>

<script>
// 测试tab组件
import TabView from '@/x-components/normal/TabView'

export default {
  components: {
    TabView
  },
  data() {
    return {
      dialogTableVisible: false
    }
  }
}
</script>

<style lang="less" scoped>
.test {
  display: inline-flex;
  margin: 30% 50%;
  
  // 过渡
  transition: 2s;
  
}
.test:focus {
  // 2d
  // transform: translate(300px) rotate(30deg) scale(2) skew(30deg,20deg)
  // 3d
  // transform: translate3d(-300px,-200px,10px) scale3d(2,2,2)
  
  // 测试过渡
  // transform: rotate(30deg) skew(30deg,20deg)

  // 动画
  animation: test 2s;
}

// 动画
@keyframes test {
  from {
  }
  to {
    transform: scale(4);
  }
}
</style>
