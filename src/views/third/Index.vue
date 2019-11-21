<template>
  <div class="third">
    <h1>实施采买-报价大厅</h1>
    <div class="third-content flex justify-around">
      <div class="t-c-left">
        <div class="flex flex-wrap t-c-seats">
          <div v-for="(seat, index) in seats" :key="index" class="t-c-s-seat">
            <p>{{ seat.id }}</p>
            <p>{{ seat.isSeated ? "已落座" : "" }}</p>
            <p>{{ seat.isConfirmed ? "已确认" : "" }}</p>
          </div>
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
    <button @click="$router.push('/four')">[44444]</button>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      seats: [
        {
          id: 1,
          isConfirmed: false,
          isSeated: false
        }
      ],
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
    .t-c-left {
      position: relative;
      width: 440px;
      .t-c-seats {
        width: 100%;
        .t-c-s-seat {
          width: 64px;
          height: 64px;
          margin: 12px;
          background: #eeeeee;
          font-size: 12px;
        }
      }
      .t-c-countdown {
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        width: 100%;
        padding-top: 158px;
        font-size: 24px;
        font-weight: bold;
      }
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
}
</style>
