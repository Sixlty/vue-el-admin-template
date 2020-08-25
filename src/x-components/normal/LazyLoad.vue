<template>
  <div>
    <slot v-if="isShow" />
  </div>
</template>

<script>
export default {
  props: {
    delay: {
      default: '6s'
    }
  },
  data() {
    return {
      time: this.delay,
      isShow: false
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      let time = 0
      if(typeof this.time === 'number') {
        time = this.time
      } else {
        let num = this.time.replace(/ms$|s$/g,'') * 1
        if(num.toString() === 'NaN') { return console.warn('请输入正确的延迟时间') }
        if(this.time.search(/ms$/g) > 0) { time = num }
        if(this.time.search(/s$/g) > 0) { time = num * 1000 }
      }
      console.log(time)
      setTimeout(() => {
        this.isShow = true
      }, time)
    }
  }
}
</script>

<style lang="less" scoped>

</style>