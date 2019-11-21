<template>
  <div>
    <ChinaMap />
    <div class="second-right">
      <div class="mb-10">
        <p>货期</p>
        <div class="c-l-select flex">
          <button>公制</button>
          <button>美制</button>
          <button>英制</button>
        </div>
      </div>
      <div class="mb-10">
        <p>信用等级</p>
        <div class="c-l-select flex">
          <button>认证供应商</button>
          <button>银牌供应商</button>
          <button>金牌供应商</button>
        </div>
      </div>
      <div class="mb-10">
        <p>付款方式</p>
        <div class="c-l-select flex">
          <button>微信</button>
          <button>支付宝</button>
          <button>银联</button>
          <button>Visa</button>
          <button>角马分期</button>
        </div>
      </div>
      <div>
        <p>配送</p>
        <div class="c-l-select flex">
          <button>物流</button>
          <button>快递</button>
          <button>供应商配送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChinaMap from "@/components/ChinaMap/index";
export default {
  name: "SecondRight",
  components: { ChinaMap }
};
</script>

<style scoped lang="scss">
.second-right {
  margin-top: 42px;
  color: #415058;
  .c-l-select {
    color: #415058;
    span {
      width: 76px;
      height: 42px;
      margin-top: 20px;
    }
    button {
      width: fit-content;
      padding: 0 24px;
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
</style>
