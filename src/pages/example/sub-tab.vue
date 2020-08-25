<template>
  <div>
    <TabView style="height:calc(100vh - 50px)"  >
      <SubTab style="height: 100%" :tabs="data" slot="header_left"/>
      <div slot="header_right" style="height: 41px" >
        <el-button>按钮</el-button>
        <el-button>按钮</el-button>
      </div>
    </TabView>
  </div>
</template>

<script>
// 测试二级tab
import TabView from '@/x-components/normal/TabView'
import SubTab from '@/x-components/normal/SubTab'
import dialog from './components/basic'
export default {
  components: {
    TabView,
    SubTab
  },
  data() {
    return {
      data: [
        {
          props: {
            label: '基本信息',
            name: 'basicInfo',
            lazy: true,
            style: {
              fontSize: '12px',
              height: '1500px'
            }
          },
          component: dialog,
          componetProps: {
            name: '啊实打实',
            style: {
              height: '100%',
              color: 'red'
            }
          },
          children: [
            {
              props: {
                label: '二级啊啊',
                name: 'asd34as',
                lazy: true,
              },
              component: dialog,
              componetProps: {
                name: '阿斯顿撒',
              }
            },
          ]
        },
        {
          props: {
            label: '测试游戏啊啊',
            name: 'asdas',
            lazy: true,
          },
          component: dialog,
          componetProps: {
            name: '阿斯顿撒',
          }
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>