<template>
  <JmFullDialog v-if="show" @close="show = false">
    <div class="search-result">
      <div class="search-content slide-in-top">
        <h1>实施采买-条件设定</h1>
        <div class="flex">
          <div class="s-c-left">
            <h2>商品要求</h2>
            <div class="s-c-select">
              <span>类别</span>
              <button @click="choose">公制(Metric)</button>
              <button @click="choose">美制(ANSI/ASME)</button>
              <button @click="choose">英制(BSW)</button>
            </div>
            <div class="s-c-select">
              <span>系列</span>
              <button @click="choose">粗牙</button>
              <button @click="choose">细牙</button>
            </div>
            <div class="s-c-select">
              <span>材质</span>
              <button @click="choose">35CrMoA(SCM435)</button>
              <button @click="choose">ML35</button>
              <button @click="choose">ML40CR</button>
              <!--            <button @click="choose">PA66</button>-->
              <!--        <button @click="choose">不锈钢304</button>-->
              <span style="color: #1e98ea">更多</span>
            </div>
            <div class="s-c-select">
              <span>强度等级</span>
              <button @click="choose">10.9级</button>
              <button @click="choose">12.9级</button>
              <button @click="choose">14.9级</button>
              <button @click="choose">8.8级</button>
              <button @click="choose">A2-70</button>
              <!--        <button @click="choose">A4-70</button>-->
            </div>
            <div class="s-c-select">
              <span>产品标准 </span>
              <button @click="choose">NSI/ASME</button>
              <button @click="choose">B18.3</button>
              <button @click="choose">BS2470</button>
              <button @click="choose">DIN912</button>
              <!--        <button @click="choose">GB70-76</button>-->
              <!--        <button @click="choose">GB70.1</button>-->
              <span style="color: #1e98ea">更多</span>
            </div>
            <div class="s-c-select">
              <span>螺纹规格d</span>
              <button @click="choose">M1.4-0.3</button>
              <button @click="choose">M10-1.0</button>
              <button @click="choose">M10-1.5</button>
              <button @click="choose">M12-1.5</button>
              <!--            <button @click="choose">M12-1.75</button>-->
              <!--        <button @click="choose">M14-1.5</button>-->
            </div>
            <h2 class="mt-14">供应商筛选</h2>
            <div class="s-c-select">
              <span>货期</span>
              <button @click="choose">一天</button>
              <button @click="choose">两天</button>
              <button @click="choose">三天</button>
              <button @click="choose">四天</button>
              <button @click="choose">五天</button>
            </div>
            <div class="s-c-select">
              <span>信用等级</span>
              <button @click="choose">认证供应商</button>
              <button @click="choose">银牌供应商</button>
              <button @click="choose">金牌供应商</button>
            </div>
            <div class="s-c-select">
              <span>付款方式</span>
              <button @click="choose">微信</button>
              <button @click="choose">支付宝</button>
              <button @click="choose">银联</button>
              <button @click="choose">Visa</button>
              <button @click="choose">角马分期</button>
            </div>
            <div class="s-c-select">
              <span>配送</span>
              <button @click="choose">物流</button>
              <button @click="choose">快递</button>
              <button @click="choose">供应商配送</button>
            </div>
            <div>
              <h2 class="mt-14">供应商所在地</h2>
              <ChinaMap />
            </div>
          </div>
          <div class="s-c-right">
            <p>
              根据您的搜索关键字 <span>”螺丝“</span> ，我们检索到了
              <span style="color: #ffb247">1290</span>家提供此商品的供应商。
            </p>
            <p>
              这些供应商分布在 <span>广东40%</span> ，
              <span>苏州49%</span> ，<span>河北 5%</span> ，
              <span>浙江4%</span> ，
              <span> 黑龙江2%</span>
              其中金牌供应商有 <span>132</span>家，银牌供应商有
              <span>306</span>家，认证供应商有 <span>650</span>家。
            </p>
            <p style="border-bottom: 1px solid #c8cdd1;" class="pb-6">
              您的信用能力为 <span>93</span>分，超过全平台
              <span>72%</span>的采购企业 查看信用分的构成。
            </p>
            <p>
              您搜索的零件
              <span>”螺丝“</span
              >属于紧固件的一种，您可以细化您的搜索分类来进行更精确的匹配
            </p>
          </div>
        </div>
        <div class="search-bottom">
          <button @click="$router.push('/inquiry')">发起询价</button>
        </div>
      </div>
    </div>
  </JmFullDialog>
</template>

<script>
import JmFullDialog from "@/components/JmFullDialog/index";
import ChinaMap from "../../../components/ChinaMap/index";
export default {
  name: "SearchResultDialog",
  components: { ChinaMap, JmFullDialog },
  data() {
    return {
      show: false
    };
  },
  methods: {
    choose(e) {
      const buttonIndex = e.path.findIndex(p => p.tagName === "BUTTON");
      const isSelf = e.path[buttonIndex];
      const isParent = e.path[buttonIndex + 1];
      isParent.childNodes.forEach(c => {
        c.classList = [];
      });
      isSelf.classList.add("active");
    }
  }
};
</script>

<style scoped lang="scss">
.search-result {
  margin: 0 auto;
  width: 1200px;
  .slide-in-top {
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  h1 {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 20px;
    padding-bottom: 16px;
    padding-top: 12px;
    border-bottom: 1px solid #c8cdd1;
  }
  .search-content {
    .s-c-left {
      width: 600px;
      height: fit-content;
      h2 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 12px;
      }
      .s-c-select {
        color: #415058;
        span {
          width: 74px;
          text-align: left;
          display: inline-block;
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
          &.active {
            background-color: #ffffff;
            border-color: #d7262e;
          }
        }
      }
    }
    .s-c-right {
      width: 400px;
      margin-top: 64px;
      margin-left: 200px;
      p {
        margin-bottom: 16px;
        letter-spacing: 2px;
        span {
          font-weight: 500;
          font-size: 18px;
        }
      }
    }
  }
  .search-bottom {
    margin-top: 32px;
    border-top: 1px solid #c8cdd1;
    button {
      position: absolute;
      cursor: pointer;
      right: 0;
      margin-top: 24px;
      color: #fff;
      background-color: #d7262e;
      width: 92px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-radius: 2px;
      -webkit-box-shadow: none;
      box-shadow: none;
      border: none;
      padding: 0;
      &:hover {
        background: #d0021b;
      }
    }
  }
}
</style>
