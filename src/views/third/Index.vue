<template>
  <div class="third">
    <p>实施采买-报价大厅</p>
    <div class="third-content flex">
      <div class="t-c-left">
        <div class="flex">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="flex">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="flex">
          <span class="active"></span>
          <span class="active"></span>
          <span class="active"></span>
          <span class="active"></span>
          <span class="active"></span>
        </div>
        <div class="flex">
          <span class="active"></span>
          <span class="active"></span>
          <span class="active"></span>
          <span class="active"></span>
          <span class="active"></span>
        </div>
      </div>
      <div class="t-c-right flex flex-col">
        <div id="app">{{ `${sec}分钟` }}</div>
        <div class="t-c-details">
          <h1 class="">商品详情</h1>
          <div><span>类别:</span>公制(Metric)</div>
          <div><span>系列:</span>粗牙</div>
          <div><span>材质:</span>5CrMoA(SCM435)</div>
          <div><span>强度等级:</span>12.9级</div>
          <div><span>产品标准:</span>DIN912</div>
          <div><span>螺纹规格d:</span>M1.4-0.3</div>
          <div><span>长度L:</span>发黑</div>
          <div><span>表面处理:</span>强度等级 12.9级</div>
          <div><span>货期:</span>1天</div>
          <div><span>供应商信用等级:</span>金牌供应商</div>
          <div><span>付款方式:</span>微信，角马分期</div>
          <div><span>配送方式:</span>物流，快递</div>
        </div>
      </div>
    </div>
    <button @click="$router.push('/four')">44444</button>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      day: 0,
      hr: 0,
      min: 0,
      sec: 0
    };
  },
  mounted: function() {
    this.countdown();
  },
  methods: {
    countdown: function() {
      const end = Date.parse(new Date("2019-11-21"));
      const now = Date.parse(new Date());
      const msec = end - now;
      // let day = parseInt(msec / 1000 / 60 / 60 / 24);
      // let hr = parseInt((msec / 1000 / 60 / 60) % 24);
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      // this.day = day;
      // this.hr = hr > 9 ? hr : "0" + hr;
      this.min = min > 9 ? min : "0" + min;
      this.sec = sec > 9 ? sec : "0" + sec;
      const that = this;
      setTimeout(function() {
        that.countdown();
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.third {
  width: 100%;
  margin-top: 48px;
  padding: 0 100px;
  p {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 20px;
    padding-bottom: 16px;
    padding-top: 12px;
    border-bottom: 1px solid #c8cdd1;
  }
  .third-content {
    span {
      width: 82px;
      height: 82px;
      margin: 12px;
      background: #eeeeee;
    }
    .active {
      width: 82px;
      height: 82px;
      margin: 12px;
      background: #2c7a7b;
    }
    .t-c-right {
      margin-left: 96px;
      /*background: #eeeeee;*/
      .t-c-details {
        h1 {
          font-size: 20px;
          margin-left: 12px;
        }
        div {
          font-size: 14px;
          margin-bottom: 6px;
          span {
            font-size: 14px;
            font-weight: 400;
            background: #ffffff;
          }
        }
      }
    }
  }
}
</style>
