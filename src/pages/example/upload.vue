<template>
  <div>
    <upload ref="upload" :auto-upload="false" v-model="url" name="files" action="http://47.96.25.125/gj-mng/oss:oss/files" :dataExp="fun" list-type="picture-card" />
    <el-button type="primary" @click="upload">上传</el-button>
  </div>
</template>

<script>
import upload from '@/x-components/normal/Upload'
  export default {
    components: {
      upload,
    },
    data(){
      return {
        url: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1425709553,871336533&fm=26&gp=0.jpg']
      }
    },
    methods: {
      fun(val) {
        return 'https://gj-cloud.oss-cn-shenzhen.aliyuncs.com/' + val.data.content[0]
      },
      upload() {
        this.$refs.upload.$refs.upload.submit()
      }
    }
  }
</script>

<style lang="less" scoped>

</style>