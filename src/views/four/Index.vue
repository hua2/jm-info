<template>
  <div class="four">
    <h1>实施采买-结果</h1>
    <div class="four-content">
      <div class="f-c-con flex justify-around">
        <span>广东有限责任公司</span>
        <span>
          <p>共成交了38笔；</p>
          <p>信用级别良好；</p>
          <p>阶梯报价数为200元</p>
        </span>
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
.four {
  width: 100%;
  margin-top: 48px;
  padding: 0 100px;
  h1 {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 20px;
    padding-bottom: 16px;
    padding-top: 12px;
    border-bottom: 1px solid #c8cdd1;
  }
  .four-content {
    width: 1000px;
    margin: 0 auto;
    .f-c-con {
      height: fit-content;
      p {
        margin-bottom: 10px;
      }
      span {
        color: #415058;
        width: 100%;
        line-height: 20px;
        padding: 10px 6px;
        border: 1px solid #e2e8f0;
      }
      button {
        color: #fff;
        background-color: #d7262e;
        width: 64px;
        margin: 0 6px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 2px;
        -webkit-box-shadow: none;
        box-shadow: none;
        border: none;
        padding: 0;
      }
    }
  }
}
</style>
