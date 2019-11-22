<template>
  <JmFullDialog v-if="show" @close="show = false">
    <div class="search-content slide-in-top">
      <h1>实施采买-支付</h1>
      <div class="s-c-left">
        <div class="s-c-select">
          <span>付款方式</span>
          <button @click="choose">
            <img src="../../../assets/img/wx.png" alt="" />
          </button>
          <button @click="choose">
            <img src="../../../assets/img/zfb.png" alt="" />
          </button>
          <button @click="choose">
            <img src="../../../assets/img/visa.png" alt="" />
          </button>
          <button @click="choose">角马分期</button>
          <button @click="choose">银联</button>
        </div>
      </div>
      <div class="s-c-left">
        <div class="s-c-select">
          <span>优惠券</span>
          <button @click="choose">199-20</button>
          <a href="javascript:">添加优惠券</a>
        </div>
      </div>
      <div class="s-c-billing mt-24">
        <div class="s-c-price">
          <span>订单金额</span><span class="s-c-p-detail">¥199.00</span>
        </div>
        <div class="s-c-price">
          <span>优惠金额</span
          ><span class="s-c-p-detail" style="color: #D0021B;">−¥20.00</span>
        </div>
        <div class="s-c-price">
          <span>应付金额</span
          ><span
            class="s-c-p-detail"
            style="font-size: 20px;color: #D0021B;font-weight: 500"
            >¥179.00</span
          >
        </div>
        <p class="s-c-price">购买后到期日为 2020 年 11 月 25 日</p>
      </div>
      <div class="s-c-submit ">
        <div class="flex justify-between">
          <p class="">
            了解<a href="javascript:">开票须知</a>，若有其它问题请发送邮件到<a
              href="javascript:"
              >support@mockingbot.com</a
            >，我们会及时响应
          </p>
          <p class="confirm">
            <label class="">
              <input type="checkbox" class="mr-4" />
              <span class=""><span class=""></span></span>
              <span class=""
                >我已阅读并同意<a
                  target="_blank"
                  href="javascript:"
                  style="text-decoration: underline"
                  >《服务协议》</a
                ></span
              >
            </label>
          </p>
        </div>
        <button type="button" disabled="">确认购买</button>
      </div>
    </div>
  </JmFullDialog>
</template>

<script>
import JmFullDialog from "../../../components/JmFullDialog/index";
export default {
  name: "PayDialog",
  components: { JmFullDialog },
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
.search-content {
  width: 1200px;
  margin: 0 auto;
}
.slide-in-top {
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
  margin-bottom: 32px;
  padding-bottom: 16px;
  padding-top: 12px;
  border-bottom: 1px solid #c8cdd1;
}
.search-content {
  .s-c-left {
    width: 100%;
    height: fit-content;
    .s-c-select {
      color: #415058;
      display: flex;
      align-items: center;
      a {
        font-size: 14px;
        color: #d7262e;
      }
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
        img {
          width: 152px;
          height: 40px;
        }
      }
    }
  }
  .s-c-billing {
    width: 100%;
    padding: 10px 16px;
    font-size: 0.875rem;
    background-color: #f7f7f7;
    border-radius: 2px;
    color: #7d8694;
    .s-c-price {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 16px;
      padding-right: 16px;
      .s-c-p-detail {
        width: 72px;
        text-align: right;
        margin-left: 24px;
      }
    }
    p {
      padding-top: 12px;
      border: 0;
      border-top: 1px solid #dfdfdf;
    }
  }
  .s-c-submit {
    color: #c8cdd1;
    padding: 8px 0;
    font-size: 14px;
    button {
      color: #fff;
      float: right;
      margin-top: 16px;
      background-color: #d7262e;
      width: 92px;
      text-align: center;
      border-radius: 2px;
      -webkit-box-shadow: none;
      box-shadow: none;
      border: none;
      padding: 0;
      height: 40px;
      line-height: 40px;
      &:hover {
        background: #d0021b;
      }
    }
  }
}
</style>
