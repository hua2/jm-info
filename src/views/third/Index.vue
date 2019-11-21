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
        <div>
          <div>类别 <span>公制(Metric)</span></div>
          <div>系列 <span>粗牙</span></div>
          <div><span>材质 35CrMoA(SCM435)</span></div>
          <div>强度等级<span> 12.9级</span></div>
          <div>产品标准<span> DIN912</span></div>
          <div>螺纹规格d<span> M1.4-0.3</span></div>
          <div>长度L<span> 发黑</span></div>
          <div>表面处理<span> 强度等级 12.9级</span></div>
          <div>货期：</div>
          <div>供应商信用等级<span> 金牌供应商</span></div>
          <div>付款方式<span> 微信，角马分期</span></div>
          <div>配送方式<span> 物流，快递</span></div>
        </div>
      </div>
    </div>
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
      width: 96px;
      height: 96px;
      margin: 12px;
      background: #eeeeee;
    }
    .active {
      width: 96px;
      height: 96px;
      margin: 12px;
      background: #2c7a7b;
    }
    .t-c-right {
      margin-left: 96px;
      /*background: #eeeeee;*/
    }
  }
}
</style>
