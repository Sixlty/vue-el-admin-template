<template>
  <div>
    <input ref="input" :value="data" @input="handleInput" type="text">
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    data: {
      get() {
        console.log(this.value)
        return this.value
      },
      // set(val) {
      //   this.$emit('input', val)
      //   return val
      // }
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
      console.log(this.value)
      // this.$nextTick(this.set)
    },
    set() {
      // this.$refs.input.value = this.data
      console.log(this.value)
    }
  }
}
</script>

<style lang="less" scoped>

</style>