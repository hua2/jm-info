<template>
  <div class="jm-dialog">
    <div class="dialog-content">
      <div class="dialog-header">
        <span class="dialog-title">{{ title }}</span>
        <button type="button" class="dialog-close" @click="close">X</button>
      </div>
      <div class="dialog-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JmDialog",
  props: {
    title: {
      type: String,
      default: "提示"
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped lang="scss">
.jm-dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  .dialog-header {
    padding: 20px 20px 10px;
  }
  .dialog-title {
    line-height: 24px;
    font-size: 18px;
    color: #303133;
  }
  .dialog-close {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    cursor: pointer;
    font-size: 14px;
    color: #909399;
    &:hover {
      color: #d7262e;
    }
  }
  .dialog-body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }
  .dialog-content {
    position: relative;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    margin: 15vh auto 50px;
    width: 30%;
  }
}
</style>
