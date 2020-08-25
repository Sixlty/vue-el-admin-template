<template>
  <div style="height: 100%">
    {{ 56464 }}
    <el-button @click="to">跳转</el-button> 
  </div>
</template>

<script>
import lazy from '@/x-components/normal/LazyLoad'
export default {
  props: {
    name: String
  },
  components: {
    lazy
  },
  created(){
    console.log(this.name)
  },
  methods: {
    to() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>

</style>