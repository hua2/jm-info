<template>
  <div class="condition">
    <div class="condition-left flex flex-col">
      <p>实施采买-条件设定</p>
      <div>商品属性：</div>
      <div class="c-l-select flex">
        <span class="">类别</span>
        <button>公制(Metric)</button>
        <button>美制(ANSI/ASME)</button>
        <button>英制(BSW)</button>
      </div>
      <div class="c-l-select flex">
        <span class="">系列</span>
        <button>粗牙</button>
        <button>细牙</button>
      </div>
      <div class="c-l-select flex">
        <span class="">材质</span>
        <button>35CrMoA(SCM435)</button>
        <button>ML35号钢</button>
        <button>ML40CR钢</button>
        <button>PA66</button>
        <button>不锈钢304</button>
        <span style="color: #1e98ea" class="ml-12 cursor-pointer">更多</span>
      </div>
      <div class="c-l-select flex">
        <span class="">强度等级</span>
        <button>10.9级</button>
        <button>12.9级</button>
        <button>14.9级</button>
        <button>8.8级</button>
        <button>A2-70</button>
        <button>A4-70</button>
      </div>
      <div class="c-l-select flex">
        <span class="">产品标准 </span>
        <button>NSI/ASME</button>
        <button>B18.3</button>
        <button>BS2470</button>
        <button>DIN912</button>
        <button>GB70-76</button>
        <button>GB70.1</button>
        <span style="color: #1e98ea" class="ml-12 cursor-pointer">更多</span>
      </div>
      <div class="c-l-select flex">
        <span class="">螺纹规格d</span>
        <button>M1.4-0.3</button>
        <button>M10-1.0</button>
        <button>M10-1.5</button>
        <button>M12-1.5</button>
        <button>M12-1.75</button>
        <button>M14-1.5</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped lang="scss">
.condition {
  margin: 0 auto;
  padding: 0 100px;
  .condition-left {
    margin-top: 36px;
    width: 100%;
    height: 600px;
    p {
      font-weight: 500;
      font-size: 24px;
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid #c8cdd1;
    }
    .c-l-select {
      color: #415058;
      span {
        width: 76px;
        height: 42px;
        margin-top: 20px;
      }
      button {
        width: fit-content;
        padding: 0 12px;
        height: 42px;
        margin: 12px;
        line-height: 42px;
        border-radius: 3px;
        border: 1px solid #c8cdd1;
        &:hover {
          border-color: transparent;
          box-shadow: 0 0 4px 0 rgba(31, 41, 46, 0.22);
        }
        .active {
          background-color: #e8f3fc;
          border-color: #1e98ea;
        }
      }
    }
  }
}
</style>
