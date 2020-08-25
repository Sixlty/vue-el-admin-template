<template>
  <div class="section">
    <div class="title">计量单位</div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;" />
    <el-checkbox-group v-model="checkItems" @change="handleCheckItems">
      <el-checkbox v-for="item in items" :key="item.value" :label="item.value">{{ item.label }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    value: Array
  },
  data() {
    return {
      checkAll: false,
      isIndeterminate: false,
    }
  },
  computed: {
    items() { // 选项
      return this.options
    },
    checkItems: { // 选中的id数组
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
        this.$emit('change', val)
        return val
      }
    } 
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkItems = val ? this.items.map(v => v.value) : []
      this.isIndeterminate = false
    },
    handleCheckItems(val) {
      let checkedCount = val.length;
      this.checkAll = checkedCount === this.items.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.items.length;
    }
  }
}
</script>

<style lang="less" scoped>
.section {
  padding: 20px 40px;
  .title {
    font-weight: bold;
    margin-bottom: 15px;
  }
}
</style>