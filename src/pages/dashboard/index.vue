<template>
  <div class="dashboard-container">
    <TableView>
      <div slot="header_left">
        
      </div>
      <!-- <el-table height="100%" border></el-table> -->
      <div style="position:relative; height:100%"></div>
      <!-- <input ref="input11" v-model="url" type="text"> -->
      <Xinput v-model="url" oninput="console.log(111)" />
      <div slot="footer">
        <el-image :src="url" lazy></el-image>
        <el-button @click="show">点击</el-button>
      </div>
    </TableView>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TableView from '@/x-components/normal/TableView'
import Xinput from './components/input'

export default {
  name: 'Dashboard',
  components: {
    TableView,
    Xinput
  },
  data() {
    return {
      url: undefined,
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    show() {
      // this.url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      // console.log(this.$refs.input)
      const h = this.$createElement
      this.$msgbox({
        title: '消息',
        message: h('Xinput', {
          // 无用
          // directives: [
          //   {
          //     name: 'model',
          //     value: this.url
          //   }
          // ]
          // 无用
          // model: {
          //   value: this.url,
          //   callback(val) {
          //     this.url = val
          //   }
          // }
          // 可，官方说明渲染函数中没有与 v-model 的直接对应——你必须自己实现相应的逻辑，并也是使用此方法实现
          props: {
            value: this.url
          },
          on: {
            input: (val) => {
              this.url = val
            }
          }
        }),
        // message: h('el-input', {
        //     props: {
        //       value: this.url
        //     },
        //     on: {
        //       input: (val) => {
        //         this.url = val
        //       }
        //     }
        // }),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        });
      });
    }
  }
}
</script>

<style lang="less" scoped>
// .dashboard {
//   &-container {
//     margin: 30px;
//   }
//   &-text {
//     font-size: 30px;
//     line-height: 46px;
//   }
// }
</style>
