<template>
  <div class="third">
    <h1>实施采买-报价大厅</h1>
    <div class="third-content flex justify-around">
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
      <div class="third-countdown">
        <div class="t-c-cn">倒计时</div>
        <div class="t-c-en">COUNT DOWN</div>
        <i class="t-c-io"></i>
        <div class="t-c-info">距离结束还剩</div>
        <div class="t-c-count">
          <div class="t-c-c-hour">
            <span class="t-c-c-txt">{{ now | moment("HH") }}</span>
          </div>
          <div class="t-c-c-min">
            <span class="t-c-c-txt">{{ now | moment("mm") }}</span>
          </div>
          <div class="t-c-c-sec">
            <span class="t-c-c-txt">{{ now | moment("ss") }}</span>
          </div>
        </div>
      </div>
      <div class="t-c-right flex flex-col">
        <div class="t-c-details">
          <p class="">商品详情</p>
          <div>
            <div>类别 <span>公制(Metric)</span></div>
            <div>系列 <span>粗牙</span></div>
            <div>材质<span>35CrMoA(SCM435)</span></div>
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
    <button @click="$router.push('/four')">44444</button>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      now: new Date(),
      countdownIntervalId: null,
      countdownTimeoutId: null
    };
  },
  created() {
    this.now.setHours(0, 10, 0, 0);
    this.countdown();
    this.autoStopCountdown();
  },
  methods: {
    countdown() {
      this.countdownIntervalId = setInterval(() => {
        this.now.setSeconds(this.now.getSeconds() - 1);
        this.$forceUpdate();
      }, 1000);
    },
    autoStopCountdown() {
      this.countdownTimeoutId = setTimeout(() => {
        clearInterval(this.countdownIntervalId);
      }, 1000 * 60 * 10);
    }
  },
  beforeDestroy() {
    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
    }
    if (this.countdownTimeoutId) {
      clearTimeout(this.countdownTimeoutId);
    }
  }
};
</script>

<style scoped lang="scss">
.third {
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
  .third-content {
    span {
      width: 64px;
      height: 64px;
      margin: 12px;
      background: #eeeeee;
    }
    .active {
      width: 64px;
      height: 64px;
      margin: 12px;
      background: #2c7a7b;
    }
    .t-c-right {
      margin-left: 32px;
      /*background: #eeeeee;*/
      .t-c-details {
        p {
          font-size: 20px;
          margin-left: 12px;
          margin-bottom: 12px;
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

  .third-countdown {
    width: 190px;
    height: 275px;
    margin-left: 32px;
    background-color: #e83632;
    position: relative;
    .t-c-cn {
      position: absolute;
      top: 42px;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 34px;
      color: #fff;
    }

    .t-c-en {
      position: absolute;
      top: 90px;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 20px;
      color: rgba(255, 255, 255, 0.5);
    }

    .t-c-io {
      width: 20px;
      height: 33px;
      position: absolute;
      background: url("../../assets/img/seckill.png") no-repeat -32.5px 0;
      background-size: 52.5px 40px;
      left: 85px;
      top: 126px;
      display: block;
    }

    .t-c-info {
      position: absolute;
      top: 170px;
      text-align: center;
      width: 100%;
      font-size: 16px;
      color: #fff;
    }

    .t-c-count {
      position: absolute;
      top: 212px;
      left: 30px;
      height: 40px;
      .t-c-c-hour,
      .t-c-c-min,
      .t-c-c-sec {
        position: relative;
        background-color: #2f3430;
        width: 40px;
        height: 40px;
        float: left;
        text-align: center;
        line-height: 40px;
        margin-right: 5px;
      }

      .t-c-c-txt {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        height: auto;
        width: auto;
        margin: 0;
        background: unset;
        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #e83632;
        }
      }
    }
  }
}
</style>
