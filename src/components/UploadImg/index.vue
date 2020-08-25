<template>
  <el-upload
    ref="upload"
    :class="{myclass:hide}"
    :limit="limit"
    :multiple="multiple"
    :action="action"
    :show-file-list="showFileList"
    list-type="picture-card"
    accept=".jpg,.png,.jpeg"
    name="files"
    :file-list="fileList"
    :on-preview="reelect"
    :on-change="change"
    :on-success="success"
    :before-remove="beforeRemove">
    <slot name="tip" slot="tip"></slot>
    <i class="el-icon-plus"></i>
  </el-upload>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      required: true
    },
    fileList: {
      type: Array,
      default: function() {
        return []
      }
    },
    // 是否隐藏原组件模式
    isHideUpload: {
      type: Boolean,
      default: false
    },
    showFileList: {
      type: Boolean,
      default: true
    },
    limit: {
      type: Number,
      default: 10
    },
    multiple: {
      type: Boolean,
      default: false
    },
    afterSuccess: {
      type: Function,
      default: () => {}
    },
    remove: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      index: 0,
      mode: 'upload',
      list: this.fileList,
      hide: this.isHideUpload
    }
  },
  watch: {
    list() {
      this.$emit('update:file-list', this.list)
    }
  },
  created() {
    if (this.fileList.length === 0) { this.hide = false }
  },
  methods: {
    change(f, files) {
      this.list = files
    },
    success(res, f, files) {
      if (this.isHideUpload) { this.hide = true }
      this.$options.methods.tranSuccess.bind(this)(res, f, files, this.mode)
      this.afterSuccess(res)
    },
    tranSuccess(res, f, files, mode) {
      if (mode !== 'replace') { return }
      files.splice(this.index, 1, f)
      files.pop()
      this.mode = 'upload'
    },
    reelect(f) {
      this.index = this.list.indexOf(f)
      this.mode = 'replace'
      this.$refs.upload.$refs['upload-inner'].handleClick()
    },
    beforeRemove(file, files) {
      this.$confirm('您确定删除此图片吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$options.methods.deletePic.bind(this)(file, files)
        this.$options.methods.change.bind(this)(file,files)
        this.remove()
      }).catch(() => {})
      return false // 无论是否确定都终止el-upload默认的移除事件，改成手动的移除事件
    },
    deletePic(f, files) { // 手动删除图片
      files.splice(files.indexOf(f), 1)
      this.hide = false
    }
  }
}
</script>

<style>
.el-icon-zoom-in:before {
  content: "\e6c7";
}
.myclass .el-upload {
  display: none
}
</style>
