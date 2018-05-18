<template>
  <div class="header">
    <div class="head between">
      <div>观察记录</div>
      <div @click="showDate">日历</div>
    </div>
    <ul class="week-title between">
      <li v-for="item in arrDate" :key="item.id">{{item}}</li>
    </ul>
    <ul class="day ">
      <li v-for="(item,index) in arrDay" @click="showchangeDate(index)" class="around" :key="item.id">
        <p :class="{active : index == indexNum}">{{item}}</p>
      </li>
    </ul>
    <div class="dates" :class="{fixdate : fixed}">
      <span>{{time.year}}年</span>
      <span>{{time.month}}月</span>
      <span>{{time.date}}日</span>
      <span style="margin-left:5px;">星期{{time.day}}</span>
    </div>

    <div class="content-box" >
      <p>血压</p>
      <div class="box" @click="goTo('Newdate')">
        <div class="between top">
          <div>高压</div>
          <div>
            <span>130</span>
            <span>kpa</span>
          </div>
        </div>
        <div class="bottom">今天</div>
      </div>
    </div>

     <div class="content-box" >
      <p>血压</p>
      <div class="box" @click="goTo('Newdate')">
        <div class="between top">
          <div>高压</div>
          <div>
            <span>130</span>
            <span>kpa</span>
          </div>
        </div>
        <div class="bottom">今天</div>
      </div>
    </div>

     <div class="content-box" >
      <p>血压</p>
      <div class="box" @click="goTo('Newdate')">
        <div class="between top">
          <div>高压</div>
          <div>
            <span>130</span>
            <span>kpa</span>
          </div>
        </div>
        <div class="bottom">今天</div>
      </div>
    </div>

     <div class="content-box" >
      <p>血压</p>
      <div class="box" @click="goTo('Newdate')">
        <div class="between top">
          <div>高压</div>
          <div>
            <span>130</span>
            <span>kpa</span>
          </div>
        </div>
        <div class="bottom">今天</div>
      </div>
    </div>

     <div class="content-box" >
      <p>血压</p>
      <div class="box" @click="goTo('Newdate')">
        <div class="between top">
          <div>高压</div>
          <div>
            <span>130</span>
            <span>kpa</span>
          </div>
        </div>
        <div class="bottom">今天</div>
      </div>
    </div>

     <div class="content-box" >
      <p>血压</p>
      <div class="box" @click="goTo('Newdate')">
        <div class="between top">
          <div>高压</div>
          <div>
            <span>130</span>
            <span>kpa</span>
          </div>
        </div>
        <div class="bottom">今天</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      arrDate: ["一", "二", "三", "四", "五", "六", "日"],
      arrDay: [],
      indexNum: "",
      index: "",
      fixed: "",
      lastMonth: "",
      afterMonth: "",
      time: {
        year: "",
        month: "",
        date: "",
        hours: "",
        minutes: "",
        second: "",
        day: ""
      }
    };
  },
  created() {
    this.reset();
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  },
  methods: {
    //滚动条事件
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(this.scroll)
      if (this.scroll >= 61) {
        this.reset();
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },

    reset() {
      let times = new Date();
      let month = times.getMonth() + 1;
      this.time.year = times.getFullYear();
      this.time.month = times.getMonth() + 1;
      this.time.date = times.getDate();
      this.time.hours = times.getHours();
      this.time.minutes = times.getMinutes();
      this.time.second = times.getSeconds();
      this.arrDay = [];
      let year = times.getFullYear();
      let day = times.getDay();
      let date = times.getDate();
      // 处理时间格式
      switch (day) {
        case 0:
          this.time.day = "日";
          this.index = 6;
          this.indexNum = 6;
          break;
        case 1:
          this.time.day = "一";
          this.index = 0;
          this.indexNum = 0;
          break;
        case 2:
          this.time.day = "二";
          this.index = 1;
          this.indexNum = 1;
          break;
        case 3:
          this.time.day = "三";
          this.index = 2;
          this.indexNum = 2;
          break;
        case 4:
          this.time.day = "四";
          this.index = 3;
          this.indexNum = 3;
          break;
        case 5:
          this.time.day = "五";
          this.index = 4;
          this.indexNum = 4;
          break;
        case 6:
          this.time.day = "六";
          this.index = 5;
          this.indexNum = 5;
          break;
      }
      // 大月
      if (
        month == 1 ||
        month == 3 ||
        month == 5 ||
        month == 7 ||
        month == 8 ||
        month == 10 ||
        month == 12
      ) {
        let arr = [];
        let arrs = [];
        for (
          let i = date - this.index;
          i < date - this.index - 1 + 8 && i < 32;
          i++
        ) {
          arrs.push(i);
        }
        for (let i = 0; i < arrs.length; i++) {
          if (arrs[i] > 0) {
            arr.push(arrs[i]);
          }
        }
        let leng = arr.length;

        if (leng < 7) {
          if (arr[0] == 1) {
            if (this.time.month - 1 == 7) {
              for (let j = 31; j > 32 - (8 - leng); j--) {
                arr.unshift(j);
              }
            }
            if (
              this.time.month - 1 == 4 ||
              this.time.month - 1 == 6 ||
              this.time.month - 1 == 9 ||
              this.time.month - 1 == 11
            ) {
              for (let j = 30; j > 31 - (8 - leng); j--) {
                arr.unshift(j);
              }
            }
            if (
              this.time.month - 1 == 2 &&
              this.time.year % 4 == 0 &&
              this.time.year % 100 != 0
            ) {
              for (let j = 29; j > 30 - (8 - leng); j--) {
                arr.unshift(j);
              }
            }
            if (
              this.time.month - 1 == 2 &&
              this.time.year % 4 != 0 &&
              this.time.year % 100 == 0
            ) {
              for (let j = 28; j > 29 - (8 - leng); j--) {
                arr.unshift(j);
              }
            }
            this.arrDay.push(...arr);
          } else {
            for (let j = 1; j < 8 - leng; j++) {
              arr.push(j);
            }
            this.arrDay.push(...arr);
          }
        } else {
          this.arrDay.push(...arr);
        }
      }
      //小月
      if (month == 4 || month == 6 || month == 9 || month == 11) {
        let arr = [];
        for (
          let i = date - this.index;
          i < date - this.index + 7 && i < 31;
          i++
        ) {
          arr.push(i);
        }
        let leng = arr.length;
        if (leng < 7) {
          for (let j = 1; j < 8 - leng; j++) {
            arr.push(j);
          }
        }
        this.arrDay.push(...arr);
      }
      //2月 闰年
      if (year % 4 == 0 && year % 100 != 0) {
        if (month == 2) {
          let arr = [];
          for (
            let i = date - this.index;
            i < date - this.index + 7 && i < 30;
            i++
          ) {
            arr.push(i);
          }
          let leng = arr.length;
          if (leng < 7) {
            for (let j = 1; j < 8 - leng; j++) {
              arr.push(j);
            }
          }
          this.arrDay.push(...arr);
        }
      } else {
        if (month == 2) {
          let arr = [];
          for (
            let i = date - this.index;
            i < date - this.index + 7 && i < 29;
            i++
          ) {
            arr.push(i);
          }
          let leng = arr.length;
          if (leng < 7) {
            for (let j = 1; j < 8 - leng; j++) {
              arr.push(j);
            }
          }
          this.arrDay.push(...arr);
        }
      }
    },
    showDate() {
      let num = new Date(
        this.time.year + "," + this.time.month + "," + 1
      ).getDay();
      if (num == 0) {
        num = 7;
      }
      //判断月份
      //大月
      if (
        this.time.month == 1 ||
        this.time.month == 3 ||
        this.time.month == 5 ||
        this.time.month == 7 ||
        this.time.month == 8 ||
        this.time.month == 10 ||
        this.time.month == 12
      ) {
        this.arrDay = [];
        for (let i = 1; i < 32; i++) {
          this.arrDay.push(i);
        }
        for (let j = 1; j < num; j++) {
          this.arrDay.unshift("");
        }
        this.indexNum = this.time.date + num - 2;
      }
      //小月
      if (
        this.time.month == 4 ||
        this.time.month == 6 ||
        this.time.month == 9 ||
        this.time.month == 11
      ) {
        this.arrDay = [];
        for (let i = 1; i < 31; i++) {
          this.arrDay.push(i);
        }
        for (let j = 1; j < num; j++) {
          this.arrDay.unshift("");
        }
        this.indexNum = this.time.date + num - 2;
      }
      //平月
      //闰年
      if (
        this.time.year % 4 == 0 &&
        this.time.year % 100 != 0 &&
        this.time.month == 2
      ) {
        this.arrDay = [];
        for (let i = 1; i < 30; i++) {
          this.arrDay.push(i);
        }
        for (let j = 1; j < num; j++) {
          this.arrDay.unshift("");
        }
        this.indexNum = this.time.date + num - 2;
      }
      //平年
      if (
        (this.time.year % 4 != 0 || this.time.year % 100 == 0) &&
        this.time.month == 2
      ) {
        this.arrDay = [];
        for (let i = 1; i < 29; i++) {
          this.arrDay.push(i);
        }
        for (let j = 1; j < num; j++) {
          this.arrDay.unshift("");
        }
        this.indexNum = this.time.date + num - 2;
      }
    },
    showchangeDate(index) {
      let times = new Date();
      let month = times.getMonth() + 1;
      let year = times.getFullYear();
      let day = times.getDay();
      let date = times.getDate();
      let array = [];
      let x;
      if (this.arrDay.length == 7) {
        switch (index) {
          case 6:
            this.time.day = "日";
            break;
          case 0:
            this.time.day = "一";
            break;
          case 1:
            this.time.day = "二";
            break;
          case 2:
            this.time.day = "三";
            break;
          case 3:
            this.time.day = "四";
            break;
          case 4:
            this.time.day = "五";
            break;
          case 5:
            this.time.day = "六";
            break;
        }
        for (let i = 0; i < this.arrDay.length; i++) {
          if (this.arrDay[i] == 1) {
            x = i;
            if (index < x && this.lastMonth != this.time.month) {
              if (this.lastMonth == 1) {
                this.time.month = this.lastMonth = 12;
              } else {
                this.lastMonth = this.time.month = this.time.month - 1;
                this.afterMonth = this.time.month;
              }
            }
            if (index >= x && this.afterMonth == this.time.month) {
              if (this.afterMonth == 12) {
                this.time.month = afterMonth = 1;
              } else {
                 this.time.month = this.time.month + 1;
                this.afterMonth = this.time.month-2;
              }
            }
          }
        }
        this.indexNum = index;
        this.time.date = this.arrDay[index];
      } else {
        let dates = new Date(new Date().setDate(this.arrDay[index]));
        let weekday = dates.getDay();
        if (weekday == 0) {
          weekday = 7;
        }
        for (let i = 0; i < this.arrDay.length; i++) {
          if (this.arrDay[i] != "") {
            array.push(this.arrDay[i]);
          }
        }
        let newIndex = this.arrDay.length - array.length;
        index = index - newIndex;
        this.arrDay = array;
        let time = this.arrDay[index] - weekday;
        this.indexNum = index - time;
        this.time.date = index + 1;
        let changeDay = index - time + 1;
        switch (changeDay) {
          case 7:
            this.time.day = "日";
            break;
          case 1:
            this.time.day = "一";
            break;
          case 2:
            this.time.day = "二";
            break;
          case 3:
            this.time.day = "三";
            break;
          case 4:
            this.time.day = "四";
            break;
          case 5:
            this.time.day = "五";
            break;
          case 6:
            this.time.day = "六";
            break;
        }

        //信息补全
        // 大月
        if (
          month == 1 ||
          month == 3 ||
          month == 5 ||
          month == 7 ||
          month == 8 ||
          month == 10 ||
          month == 12
        ) {
          let arrs = [];
          let arr = [];
          //根据日期显示号数
          let dates = new Date(new Date().setDate(this.arrDay[index]));
          let weekday = dates.getDay();
          if (weekday == 0) {
            weekday = 7;
          }
          let time = this.arrDay[index] - weekday + 1;
          for (let i = time; i < time + 7 && i < 32; i++) {
            arrs.push(i);
          }
          for (let i = 0; i < arrs.length; i++) {
            if (arrs[i] > 0) {
              arr.push(arrs[i]);
            }
          }
          let leng = arr.length;
          if (leng < 7) {
            if (arr[0] == 1) {
              if (this.time.month - 1 == 0 || this.time.month - 1 == 7) {
                for (let j = 30; j > 32 - (7 - leng); j--) {
                  arr.unshift(j);
                }
              }
              if (
                this.time.month - 1 == 4 ||
                this.time.month - 1 == 6 ||
                this.time.month - 1 == 9 ||
                this.time.month - 1 == 11
              ) {
                for (let j = 30; j > 31 - (8 - leng); j--) {
                  arr.unshift(j);
                }
              }
              if (
                this.time.month - 1 == 2 &&
                this.time.year % 4 == 0 &&
                this.time.year % 100 != 0
              ) {
                for (let j = 29; j > 30 - (8 - leng); j--) {
                  arr.unshift(j);
                }
              }
              if (
                this.time.month - 1 == 2 &&
                this.time.year % 4 != 0 &&
                this.time.year % 100 == 0
              ) {
                for (let j = 28; j > 29 - (8 - leng); j--) {
                  arr.unshift(j);
                }
              }
            } else {
              for (let j = 1; j < 8 - leng; j++) {
                arr.push(j);
              }
            }
          }
          this.arrDay = [];
          this.arrDay.push(...arr);
        }
        //小月
        if (month == 4 || month == 6 || month == 9 || month == 11) {
          let arrs = [];
          let arr = [];
          //根据日期显示号数
          let dates = new Date(new Date().setDate(this.arrDay[index]));
          let weekday = dates.getDay();
          if (weekday == 0) {
            weekday = 7;
          }
          let time = this.arrDay[index] - weekday + 1;
          for (let i = time; i < time + 7 && i < 31; i++) {
            arrs.push(i);
          }
          for (let i = 0; i < arrs.length; i++) {
            if (arrs[i] > 0) {
              arr.push(arrs[i]);
            }
          }
          let leng = arr.length;
          if (leng < 7) {
            if (arr[0] == 1) {
              if (
                this.time.month - 1 == 3 ||
                this.time.month - 1 == 5 ||
                this.time.month - 1 == 8 ||
                this.time.month - 1 == 10
              ) {
                for (let j = 31; j > 31 - (7 - leng); j--) {
                  arr.unshift(j);
                }
              }
            } else {
              for (let j = 1; j < 8 - leng; j++) {
                arr.push(j);
              }
            }
          }
          this.arrDay = [];
          this.arrDay.push(...arr);
        }
        //2月
        if (month == 2) {
          let arrs = [];
          let arr = [];
          let leng;
          //根据日期显示号数
          let dates = new Date(new Date().setDate(this.arrDay[index]));
          let weekday = dates.getDay();
          if (weekday == 0) {
            weekday = 7;
          }
          let time = this.arrDay[index] - weekday + 1;
          //闰年
          if (year % 4 == 0 && year % 100 != 0) {
            for (let i = time; i < time + 7 && i < 30; i++) {
              arrs.push(i);
            }
            for (let i = 0; i < arrs.length; i++) {
              if (arrs[i] > 0) {
                arr.push(arrs[i]);
              }
            }
            leng = arr.length;
          } else {
            //平年
            for (let i = time; i < time + 7 && i < 29; i++) {
              arrs.push(i);
            }
            for (let i = 0; i < arrs.length; i++) {
              if (arrs[i] > 0) {
                arr.push(arrs[i]);
              }
            }
            leng = arr.length;
          }
          if (leng < 7) {
            if (arr[0] == 1) {
              if (this.time.month - 1 == 1) {
                for (let j = 31; j > 31 - (7 - leng); j--) {
                  arr.unshift(j);
                }
              }
            } else {
              for (let j = 1; j < 8 - leng; j++) {
                arr.push(j);
              }
            }
          }
          this.arrDay = [];
          this.arrDay.push(...arr);
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/normalize.css";
@colorBg: rgb(0, 153, 255);
.header {
  .head {
    width: 100%;
    height: 40px;
    position: fixed;
    left: 0;
    top: 0;
    padding: 3% 7.5%;
    background: #fff;
  }
  padding: 0 1.3%;
  .week-title {
    margin-top: 40px;
    li {
      width: 14.2%;
      text-align: center;
      color: #888;
      font-size: 14px;
    }
  }
  .day {
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 14.2%;
      flex-wrap: wrap;
      justify-content: center;

      p {
        font-size: 18px;
        width: 36px;
        height: 36px;
        text-align: center;
        line-height: 36px;

        &.active {
          background-color: #2f44d3;
          border: none;
          border-radius: 36px;
          color: #fff;
        }
      }
    }
  }
  .dates {
    text-align: center;
    font-size: 0;
    margin-top: 10px;
    &.fixdate {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      top: 30px;
      background: white;
      width: 100%;
      height: 50px;
      line-height: 50px;
    }
    span {
      font-size: 16px;
      color: #333333;
    }
  }
  .content-box {
    padding: 0 2%;
    p {
      font-size: 18px;
      color: #333333;
      line-height: 28px;
    }
    .box {
      width: 100%;
      height: 80px;
      text-align: center;
      line-height: 80px;
      color: #fff;
      background-image: linear-gradient(-269deg, #5c79eb 1%, #2f44d3 100%);
      border-radius: 4px;
      .top {
        padding: 1.8% 5.3% 0;
        font-size: 18px;
        color: #ffffff;
        line-height: 36px;
        div {
          span:nth-child(1) {
            font-size: 28px;
            margin-right: 1.1%;
          }
          span:nth-child(2) {
            opacity: 0.6;
            font-size: 18px;
          }
        }
      }
      .bottom {
        padding: 1.8% 5.3%;
        text-align: right;
        opacity: 0.6;
        font-size: 14px;
        color: #ffffff;
        line-height: 0px;
      }
    }
  }
}
</style>
