<template>
  <div>
    <el-upload 
      ref="upload"
      :class="{'hidden': !isShowUpload}"
      v-bind="$attrs" 
      v-on="$listeners"
      :file-list="fileList"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :on-preview="handlePreview"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String,Array],
      required: true
    },
    dataExp: {
      type: Function,
      default: function(val) {
        return val
      }
    }
  },
  data() {
    return {
      isSingle: false,
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      isShowUpload: true,

      fileUrls: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      if(Array.isArray(this.value)) {
        this.isSingle = false
        this.fileUrls = this.value
        this.fileList = this.value.map(val => {
          return {
            url: val
          }
        })
      } else if(typeof this.value === 'string') {
        this.isSingle = true
        if(!this.value) { return }
        else {
          this.fileList.push({url: this.value})
          this.fileUrls.push(this.value)
          this.isShowUpload = false
        }
      } else return
    },
    // 图片成功
    handleSuccess(res, file, fileList) {
      if(res.code == 0) {
        this.fileUrls.push(this.dataExp(res))
        if(this.isSingle) {
          this.$emit('input', this.dataExp(res))
          this.isShowUpload = false
        } else {
          this.$emit('input', this.fileUrls)
        }
      } else {
        fileList.splice(fileList.indexOf(file), 1)
      }
    },
    // 图片删除
    handleRemove(file, fileList) {
      this.fileUrls.splice(this.fileUrls.findIndex(val => val == file.url), 1)
      if(fileList.length == 0) {
        this.isShowUpload = true
      }
      if(this.isSingle) {
        this.$emit('input', '')
      } else {
        this.$emit('input', this.fileUrls)
      }
    },

    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  }
}
</script>

<style lang="less" scoped>
.hidden {
  /deep/ .el-upload{
    visibility: hidden;
  }
}
</style>