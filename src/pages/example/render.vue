<template>
  <div>
    <!-- 递归调用 -->
    <!-- <div v-for="item of list" :key="item.name">
      <div style="padding-left: 15px;margin-bottom: 10px">{{ item.name }}
        <quote v-if="!!item.children && item.children.length > 0" :value='item.children' />
      </div>
    </div> -->

    <!-- 内联模板 -->
    <!-- <el-table :data="list" inline-template>
      <p>{{ 'asds' }}</p>
    </el-table> -->
    <my />
  </div>
</template>

<script>
  export default {
    name: 'quote',
    components: {
      my: { // 函数式组件
        functional: true,
        render(h, context) {
          console.log(context)
          return <p>asd</p>
        }
      }
    },
    props: ['value'],
    render(h) {
      // 渲染函数
      return h('p', { style: {
        color: 'red'
      } },'asdas')

      // jsx
      // return <h1>标题</h1>
    },
    data() {
      return {
        list: this.value || [
          {
            name: '一级1',
            children: [
              {
                name: '二级1',
                children: []
              }
            ]
          },
          {
            name: '一级2',
            children: [
              {
                name: '二级1',
                children: []
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>

</style>