<template>
  <div class="third">
    <h1>实施采买-报价大厅</h1>
    <div class="third-content flex justify-between">
      <div class="t-c-left">
        <div class="t-c-details">
          <h2>采买要求</h2>
          <table class="third-table">
            <tr>
              <td>类别：</td>
              <td>公制(Metric)</td>
              <td>系列：</td>
              <td>粗牙</td>
            </tr>
            <tr>
              <td>材质：</td>
              <td>35CrMoA(SCM435)</td>
              <td>强度等级：</td>
              <td>12.9级</td>
            </tr>
            <tr>
              <td>产品标准：</td>
              <td>DIN912</td>
              <td>螺纹规格d：</td>
              <td>M1.4-0.3</td>
            </tr>
            <tr>
              <td>长度L：</td>
              <td>发黑</td>
              <td>表面处理：</td>
              <td>强度等级 12.9级</td>
            </tr>
            <tr>
              <td>货期：</td>
              <td>1天</td>
              <td>供应商信用等级：</td>
              <td>金牌供应商</td>
            </tr>
            <tr>
              <td>付款方式：</td>
              <td>微信，角马分期</td>
              <td>配送方式：</td>
              <td>物流，快递</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="t-c-right flex flex-col">
        <div class="flex flex-wrap t-c-seats">
          <div v-for="(seat, index) in seats" :key="index" class="t-c-s-seat">
            <span class="seat-3" v-if="seat.isConfirmed"></span>
            <span class="seat-2" v-else-if="seat.isSeated"></span>
            <span class="seat-1" v-else></span>
          </div>
          <div class="t-c-countdown" v-if="isSeatedAlready">供应商已就绪</div>
          <div class="t-c-countdown" v-else-if="isConfirmedAlready">
            已报价完毕
          </div>
          <div class="t-c-countdown" v-else>
            等待供应商{{ countdownType === "seated" ? "加入" : "报价"
            }}{{ countdownTime }}
          </div>
        </div>
      </div>
    </div>
    <div class="third-footer mt-24" v-if="isConfirmedAlready">
      <h2>报价结果</h2>
      <div class="t-f-content flex justify-between">
        <table class="third-table">
          <tr
            v-for="(c, index) in companies"
            :key="index"
            @click="showCompany = c"
          >
            <td
              style="width: 280px"
              class="cursor-pointer"
              :class="c.name === showCompany.name ? 'active' : ''"
            >
              {{ c.name }}
            </td>
          </tr>
        </table>

        <div class="t-f-active">
          <p>{{ showCompany.detail }}</p>
          <table class="third-table mt-16">
            <tr>
              <td>阶梯报价</td>
              <td>第一报价</td>
              <td>第二报价</td>
              <td>第三报价</td>
            </tr>
            <tr>
              <td>价格</td>
              <td>{{ showCompany.firstPrice }}</td>
              <td>{{ showCompany.secondPrice }}</td>
              <td>{{ showCompany.thirdPrice }}</td>
            </tr>
            <tr>
              <td>数量</td>
              <td>{{ showCompany.firstPriceCount }}</td>
              <td>{{ showCompany.secondPriceCount }}</td>
              <td>{{ showCompany.thirdPriceCount }}</td>
            </tr>
          </table>

          <button class="float-right mt-6" @click="payClick">去支付</button>
        </div>
      </div>
    </div>
    <PayDialog ref="payDialog" />
  </div>
</template>

<script>
import PayDialog from "../home/dialog/PayDialog";
export default {
  name: "Index",
  components: { PayDialog },
  data() {
    return {
      seats: [
        {
          id: 1,
          isConfirmed: false,
          isSeated: false
        }
      ],
      companies: require("./companies"),
      showCompany: {
        name: "河北省广平县建筑安装企业集团公司",
        detail: "成交了888笔，信用级别（良好）",
        firstPrice: 1000,
        firstPriceCount: 500,
        secondPrice: 3000,
        secondPriceCount: 400,
        thirdPrice: 5000,
        thirdPriceCount: 300
      },
      isSeatedAlready: false,
      isConfirmedAlready: false,
      countdownTime: 10, // 倒计时多少秒开始
      countdownIntervalId: null,
      countdownType: "seated" //confirmed
    };
  },
  created() {
    this.initSeats();
    setTimeout(() => {
      this.countdownSeated();
    }, 1000);
  },
  methods: {
    payClick() {
      this.$refs.payDialog.show = true;
    },
    initSeats() {
      this.seats = [];
      for (let i = 0; i < 20; i++) {
        this.seats.push({
          id: i + 1,
          isConfirmed: false,
          isSeated: false
        });
      }
    },
    countdownSeated() {
      this.isSeatedAlready = false;
      this.isConfirmedAlready = false;
      this.countdownType = "seated";
      this.countdown();
    },
    countdownConfirmed() {
      this.isSeatedAlready = false;
      this.isConfirmedAlready = false;
      this.countdownType = "confirmed";
      this.countdown();
    },
    countdown() {
      if (this.countdownIntervalId) {
        clearInterval(this.countdownIntervalId);
      }
      // 重新设置倒计时
      this.countdownTime = 10;
      this.countdownIntervalId = setInterval(() => {
        this.countdownTime--;
        if (this.countdownType === "seated") {
          this.randomSeatedSeats();
        }
        if (this.countdownType === "confirmed") {
          this.randomSeatedConfirmed();
        }
        // 倒计时结束
        if (this.countdownTime === 0) {
          clearInterval(this.countdownIntervalId);

          if (this.countdownType === "confirmed") {
            this.isConfirmedAlready = true;
            this.randomCompany();
          }
          if (this.countdownType === "seated") {
            this.isSeatedAlready = true;
            setTimeout(() => {
              this.countdownConfirmed();
            }, 2000);
          }
        }
      }, 1000);
    },
    randomCompany() {
      const isConfirmedSeats = this.seats.filter(
        s => s.isConfirmed === true && s.isSeated === true
      );
      let allCompanies = [...this.companies];
      allCompanies = this.getArrRandomly(allCompanies);
      const useCompanies = [];
      for (let i = 0; i < isConfirmedSeats.length; i++) {
        useCompanies.push(allCompanies[i]);
      }
      this.companies = [...useCompanies];
      this.showCompany = this.companies[0];
    },
    randomSeatedSeats() {
      let notSeatedSeats = this.seats.filter(s => s.isSeated === false);
      if (notSeatedSeats.length === 0) {
        return;
      }
      // 随机生成 这次落座数量 （如果想提前落座 调大max）
      let randomNum = this.getRandomNum(1, 2);
      // 判断是否超过未落坐人数
      if (randomNum >= notSeatedSeats.length) {
        randomNum = notSeatedSeats.length;
      }
      // 随机打乱数组
      notSeatedSeats = this.getArrRandomly(notSeatedSeats);
      for (let i = 0; i < randomNum; i++) {
        notSeatedSeats[i].isSeated = true;
      }
      // 把落座数据重新 赋值显示
      this.seats = this.seats.map(s => {
        const newSeat = notSeatedSeats.find(n => n.id === s.id);
        if (newSeat && newSeat.id) {
          return newSeat;
        } else {
          return s;
        }
      });
    },
    randomSeatedConfirmed() {
      // 获取已落座 但是未选的坐席
      let notConfirmedSeats = this.seats.filter(
        s => s.isConfirmed === false && s.isSeated === true
      );
      if (notConfirmedSeats.length === 0) {
        return;
      }
      // 随机生成 这次落座数量 （如果想提前落座 调大max）
      let randomNum = this.getRandomNum(0, 2);
      // 判断是否超过未落坐人数
      if (randomNum >= notConfirmedSeats.length) {
        randomNum = notConfirmedSeats.length;
      }
      // 随机打乱数组
      notConfirmedSeats = this.getArrRandomly(notConfirmedSeats);
      for (let i = 0; i < randomNum; i++) {
        notConfirmedSeats[i].isConfirmed = true;
      }
      // 把落座数据重新 赋值显示
      this.seats = this.seats.map(s => {
        const newSeat = notConfirmedSeats.find(n => n.id === s.id);
        if (newSeat && newSeat.id) {
          return newSeat;
        } else {
          return s;
        }
      });
    },
    //生成从min到max的随机数
    getRandomNum(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    },
    getArrRandomly(arr) {
      let len = arr.length;
      //首先从最大的数开始遍历，之后递减
      for (let i = len - 1; i >= 0; i--) {
        //随机索引值randomIndex是从0-arr.length中随机抽取的
        let randomIndex = Math.floor(Math.random() * (i + 1));
        //下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置
        let itemIndex = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = itemIndex;
      }
      //每一次的遍历都相当于把从数组中随机抽取（不重复）的一个元素放到数组的最后面（索引顺序为：len-1,len-2,len-3......0）
      return arr;
    }
  },
  beforeDestroy() {
    if (this.countdownIntervalId) {
      clearInterval(this.countdownIntervalId);
    }
  }
};
</script>

<style scoped lang="scss">
.third {
  width: 1200px;
  margin: 0 auto;
  padding-top: 48px;
  h1 {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 20px;
    padding-bottom: 16px;
    padding-top: 12px;
    border-bottom: 1px solid #c8cdd1;
  }
  .third-content {
    .t-c-right {
      margin-top: -12px;
      margin-right: -12px;
      .t-c-seats {
        width: 330px;
        position: relative;
        .t-c-s-seat {
          width: 42px;
          height: 32px;
          margin: 12px;
          span {
            display: block;
            width: 100%;
            height: 100%;
          }
          .seat-1 {
            background: url("../../assets/img/1.png");
            background-size: 100% 100%;
          }
          .seat-2 {
            background: url("../../assets/img/2.png");
            background-size: 100% 100%;
          }
          .seat-3 {
            background: url("../../assets/img/3.png");
            background-size: 100% 100%;
          }
        }
        .t-c-countdown {
          position: absolute;
          top: 0;
          left: 0;
          text-align: center;
          width: 100%;
          padding-top: 92px;
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
    .t-c-left {
      .t-c-details {
        width: 620px;
        h2 {
          font-size: 16px;
          text-align: center;
          background: #eeeeee;
          height: 32px;
          line-height: 32px;
        }
      }
    }
  }
  .third-table {
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid #ebeef5;
    width: 100%;
    tr {
      background-color: #fff;
      &:hover > td {
        background-color: #f5f7fa;
      }
    }
    td {
      font-size: 14px;
      color: #606266;
      border-collapse: collapse;
      padding: 8px 6px;
      min-width: 0;
      box-sizing: border-box;
      text-overflow: ellipsis;
      vertical-align: middle;
      position: relative;
      text-align: left;
      border-bottom: 1px solid #ebeef5;
      transition: background-color 0.25s ease;
      &:nth-child(odd) {
        text-align: right;
      }
      &.active {
        background: #ecf5ff;
      }
    }
  }
  .third-footer {
    /*width: 620px;*/
    width: 100%;
    margin-bottom: 48px;
    h2 {
      font-size: 16px;
      text-align: center;
      background: #eeeeee;
      height: 32px;
      line-height: 32px;
    }
    .t-f-active {
      background: #ecf5ff;
      padding: 8px 6px;
      font-size: 14px;
      .third-table {
        width: 100%;
        td {
          text-align: center;
        }
      }
      &:hover > td {
        background: #ecf5ff;
      }
      button {
        color: #fff;
        background-color: #d7262e;
        width: 92px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border-radius: 2px;
        box-shadow: none;
        border: none;
        padding: 0;
      }
    }
  }
}
</style>
