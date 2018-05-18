<template>
  <div class="head">
    <el-tabs v-model="activeName" class="tab">
    <el-tab-pane class="tab-nav" label="周" name="week">
     <div class="between">

        <div @click="prev">上周</div>

        <div>{{weekTimeP}} - {{weekTimeN}}</div>

        <div @click="next">下周</div>
     </div>
      
    </el-tab-pane>
    <el-tab-pane class="tab-nav" label="月" name="month">
      2
    </el-tab-pane>
    <el-tab-pane class="tab-nav" label="年" name="year">
      3
    </el-tab-pane>
    </el-tabs>

    <h2 style="text-align:center">图表</h2>
    <div class="content" @click="goTo('Details')">
      <div>3次空腹血糖超高</div>
      <p>标准值：<span>3.9-6.2</span> </p>
    </div>

    <div class="content">
      <div>2次空腹血糖过低</div>
      <p>标准值：<span>3.9-6.2</span> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "newdate",
  data() {
    return {
      activeName: "week",
      weekTimeP: "",
      weekTimeN: "",
      arrDay: [],
      time: {
        year: "",
        yearN: "",
        month: "",
        monthN: "",
        date: "",
        hours: "",
        minutes: "",
        second: "",
        day: ""
      }
    };
  },
  created() {
    // someThing();
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    this.time.year = time.getFullYear();
    this.time.yearN = time.getFullYear();
    this.time.month = time.getMonth() + 1;
    this.time.monthN = time.getMonth() + 1;
    this.time.date = time.getDate();
    this.time.hours = time.getHours();
    this.time.minutes = time.getMinutes();
    this.time.second = time.getSeconds();
    // this.time.indexNum = time.getDate();
    let day = time.getDay();
    let date = time.getDate();
    // 处理时间格式
    switch (day) {
      case 0:
        this.time.day = "日";
        this.indexNum = 6;
        break;
      case 1:
        this.time.day = "一";
        this.indexNum = 0;
        break;
      case 2:
        this.time.day = "二";
        this.indexNum = 1;
        break;
      case 3:
        this.time.day = "三";
        this.indexNum = 2;
        break;
      case 4:
        this.time.day = "四";
        this.indexNum = 3;
        break;
      case 5:
        this.time.day = "五";
        this.indexNum = 4;
        break;
      case 6:
        this.time.day = "六";
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
      for (let i = date - day + 1; i < date - day + 8 && i < 32; i++) {
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
    //小月
    if (month == 4 || month == 6 || month == 9 || month == 11) {
      let arr = [];
      for (let i = date - day + 1; i < date - day + 8 && i < 31; i++) {
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
        for (let i = date - day + 1; i < date - day + 8 && i < 30; i++) {
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
        for (let i = date - day + 1; i < date - day + 8 && i < 29; i++) {
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
    this.weekTimeP = year + "/" + month + "/" + this.arrDay[0];
    this.weekTimeN = year + "/" + month + "/" + this.arrDay[6];
  },

  methods: {
    prev: function() {
      //判断第一位数字大小
      if (this.arrDay[0] < 8) {
        let month = this.time.month;
        let year = this.time.year;
        //大月
        if (
          month - 1 == 1 ||
          month - 1 == 3 ||
          month - 1 == 5 ||
          month - 1 == 7 ||
          month - 1 == 8 ||
          month - 1 == 10 ||
          month - 1 == 12
        ) {
          this.time.month = month - 1;
          this.weekTimeP =
            this.time.year +
            "/" +
            this.time.month +
            "/" +
            (31 + this.arrDay[0] - 7);
          this.arrDay[0] = this.arrDay[0] + 31 - 7;
        }
        if (month - 1 == 0) {
          this.time.month = 12;
          this.weekTimeP =
            this.time.year -
            1 +
            "/" +
            this.time.month +
            "/" +
            (31 + this.arrDay[0] - 7);
          this.arrDay[0] = this.arrDay[0] + 31 - 7;
          this.time.year = this.time.year - 1;
        }
        //小月
        if (
          month - 1 == 4 ||
          month - 1 == 6 ||
          month - 1 == 9 ||
          month - 1 == 11
        ) {
          this.time.month = month - 1;
          this.weekTimeP =
            this.time.year +
            "/" +
            this.time.month +
            "/" +
            (this.arrDay[0] + 30 - 7);
          this.arrDay[0] = this.arrDay[0] + 30 - 7;
          console.log(this.arrDay[0]);
        }
        //平月
        //闰年
        if (year % 4 == 0 && year % 100 != 0) {
          if (month - 1 == 2) {
            this.time.month = month - 1;
            this.weekTimeP =
              this.time.year +
              "/" +
              this.time.month +
              "/" +
              (29 + this.arrDay[0] - 7);
            this.arrDay[0] = this.arrDay[0] + 29 - 7;
          }
        } else {
          //平年
          if (month - 1 == 2) {
            this.time.month = month - 1;
            this.weekTimeP =
              this.time.year +
              "/" +
              this.time.month +
              "/" +
              (28 + this.arrDay[0] - 7);
            this.arrDay[0] = this.arrDay[0] + 28 - 7;
          }
        }
        console.log(this.arrDay[0]);
      } else {
        this.weekTimeP =
          this.time.year + "/" + this.time.month + "/" + (this.arrDay[0] - 7);
        this.arrDay[0] = this.arrDay[0] - 7;
      }
      //判断第二位数字大小
      if (this.arrDay[6] < 8) {
        let month = this.time.monthN;
        let year = this.time.year;
        //大月
        if (
          month - 1 == 1 ||
          month - 1 == 3 ||
          month - 1 == 5 ||
          month - 1 == 7 ||
          month - 1 == 8 ||
          month - 1 == 10 ||
          month - 1 == 12
        ) {
          this.time.monthN = month - 1;
          this.weekTimeN =
            this.time.yearN +
            "/" +
            this.time.monthN +
            "/" +
            (31 + this.arrDay[6] - 7);
          this.arrDay[6] = this.arrDay[6] + 31 - 7;
        }
        if (month - 1 == 0) {
          this.time.monthN = 12;
          this.weekTimeN =
            this.time.yearN -
            1 +
            "/" +
            this.time.monthN +
            "/" +
            (31 + this.arrDay[6] - 7);
          this.arrDay[6] = this.arrDay[6] + 31 - 7;
          this.time.yearN = this.time.yearN - 1;
        }
        //小月
        if (
          month - 1 == 4 ||
          month - 1 == 6 ||
          month - 1 == 9 ||
          month - 1 == 11
        ) {
          this.time.monthN = month - 1;
          this.weekTimeN =
            this.time.year +
            "/" +
            this.time.monthN +
            "/" +
            (this.arrDay[6] + 30 - 7);
          this.arrDay[6] = this.arrDay[6] + 30 - 7;
          // console.log(this.arrDay[6]);
        }
        //平月
        //闰年
        if (year % 4 == 0 && year % 100 != 0) {
          if (month - 1 == 2) {
            this.time.monthN = month - 1;
            this.weekTimeN =
              this.time.yearN +
              "/" +
              this.time.monthN +
              "/" +
              (29 + this.arrDay[6] - 7);
            this.arrDay[6] = this.arrDay[6] + 29 - 7;
          }
        } else {
          //平年
          if (month - 1 == 2) {
            this.time.monthN = month - 1;
            this.weekTimeN =
              this.time.yearN +
              "/" +
              this.time.monthN +
              "/" +
              (28 + this.arrDay[6] - 7);
            this.arrDay[6] = this.arrDay[6] + 28 - 7;
          }
        }
        // console.log(this.arrDay[6]);
      } else {
        this.weekTimeN =
          this.time.year + "/" + this.time.monthN + "/" + (this.arrDay[6] - 7);
        this.arrDay[6] = this.arrDay[6] - 7;
      }
    },
    prev1: function() {
      //判断第一位数字大小
      if (this.arrDay[0] < 8) {
        this.prevDate(0, this.weekTimeP, this.time.month, this.time.year);
      } else {
        this.weekTimeP =
          this.time.year + "/" + this.time.month + "/" + (this.arrDay[0] - 7);
        this.arrDay[0] = this.arrDay[0] - 7;
      }
      //判断第二位数字大小
      if (this.arrDay[6] < 8) {
        this.prevDate(6, this.weekTimeN, this.time.monthN, this.time.yearN);
      } else {
        this.weekTimeN =
          this.time.year + "/" + this.time.monthN + "/" + (this.arrDay[6] - 7);
        this.arrDay[6] = this.arrDay[6] - 7;
      }
    },
    next: function() {
      let month = this.time.month;
      let monthN = this.time.monthN;
      let year = this.time.year;
      //大月
      if (
        month == 1 ||
        month == 3 ||
        month == 5 ||
        month == 7 ||
        month == 8 ||
        month == 10
      ) {
        //判断第一位数字大小
        if (this.arrDay[0] > 25) {
          this.time.month = month + 1;
          this.weekTimeP =
            this.time.year +
            "/" +
            this.time.month +
            "/" +
            (7 - (31 - this.arrDay[0]));
          this.arrDay[0] = 7 - (31 - this.arrDay[0]);
        } else {
          this.weekTimeP =
            this.time.year + "/" + this.time.month + "/" + (this.arrDay[0] + 7);
          this.arrDay[0] = this.arrDay[0] + 7;
        }
        //判断第二位数
        if (this.arrDay[6] > 25) {
          this.time.monthN = monthN + 1;
          this.weekTimeN =
            this.time.year +
            "/" +
            this.time.monthN +
            "/" +
            (7 - (31 - this.arrDay[6]));
          this.arrDay[6] = 7 - (31 - this.arrDay[6]);
        } else {
          this.weekTimeN =
            this.time.year +
            "/" +
            this.time.monthN +
            "/" +
            (this.arrDay[6] + 7);
          this.arrDay[6] = this.arrDay[6] + 7;
        }
      }
      if (month == 12) {
        //判断第一位数字大小
        if (this.arrDay[0] > 25) {
          this.time.month = 1;
          this.weekTimeP =
            this.time.year +
            1 +
            "/" +
            this.time.month +
            "/" +
            (7 - (31 - this.arrDay[0]));
          this.arrDay[0] = 7 - (31 - this.arrDay[0]);
          this.time.year = this.time.year + 1;
        } else {
          console.log(this.time.year);
          this.weekTimeP =
            this.time.year + "/" + this.time.month + "/" + (this.arrDay[0] + 7);
          this.arrDay[0] = this.arrDay[0] + 7;
        }
        //判断第二位数
        if (this.arrDay[6] > 25) {
          this.time.monthN = 1;
          this.weekTimeN =
            this.time.yearN +
            1 +
            "/" +
            this.time.monthN +
            "/" +
            (7 - (31 - this.arrDay[6]));
          this.arrDay[6] = 7 - (31 - this.arrDay[6]);
          this.time.yearN = this.time.yearN + 1;
        } else {
          this.weekTimeN =
            this.time.year +
            "/" +
            this.time.monthN +
            "/" +
            (this.arrDay[6] + 7);
          this.arrDay[6] = this.arrDay[6] + 7;
        }
      }

      //小月
      if (month == 4 || month == 6 || month == 9 || month == 11) {
        //判断第一位数字大小
        if (this.arrDay[0] > 24) {
          this.time.month = month + 1;
          this.weekTimeP =
            this.time.year +
            "/" +
            this.time.month +
            "/" +
            (7 - (30 - this.arrDay[0]));
          this.arrDay[0] = 7 - (30 - this.arrDay[0]);
        } else {
          this.weekTimeP =
            this.time.year + "/" + this.time.month + "/" + (this.arrDay[0] + 7);
          this.arrDay[0] = this.arrDay[0] + 7;
        }
        //判断第二位数
        if (this.arrDay[6] > 24) {
          this.time.monthN = monthN + 1;
          this.weekTimeN =
            this.time.year +
            "/" +
            this.time.monthN +
            "/" +
            (7 - (30 - this.arrDay[6]));
          this.arrDay[6] = 7 - (30 - this.arrDay[6]);
        } else {
          this.weekTimeN =
            this.time.year +
            "/" +
            this.time.monthN +
            "/" +
            (this.arrDay[6] + 7);
          this.arrDay[6] = this.arrDay[6] + 7;
        }
      }

      //平月
      //闰年
      if (year % 4 == 0 && year % 100 != 0) {
        if (month == 2) {
          //判断第一位数字大小
          if (this.arrDay[0] > 23) {
            this.time.month = month + 1;
            this.weekTimeP =
              this.time.year +
              "/" +
              this.time.month +
              "/" +
              (7 - (29 - this.arrDay[0]));
            this.arrDay[0] = 7 - (29 - this.arrDay[0]);
          } else {
            this.weekTimeP =
              this.time.year +
              "/" +
              this.time.month +
              "/" +
              (this.arrDay[0] + 7);
            this.arrDay[0] = this.arrDay[0] + 7;
          }
          //判断第二位数
          if (this.arrDay[6] > 23) {
            this.time.monthN = monthN + 1;
            this.weekTimeN =
              this.time.year +
              "/" +
              this.time.monthN +
              "/" +
              (7 - (29 - this.arrDay[6]));
            this.arrDay[6] = 7 - (29 - this.arrDay[6]);
          } else {
            this.weekTimeN =
              this.time.year +
              "/" +
              this.time.monthN +
              "/" +
              (this.arrDay[6] + 7);
            this.arrDay[6] = this.arrDay[6] + 7;
          }
        }
      } else {
        //平年
        if (month == 2) {
          //判断第一位数字大小
          if (this.arrDay[0] > 22) {
            this.time.month = month + 1;
            this.weekTimeP =
              this.time.year +
              "/" +
              this.time.month +
              "/" +
              (7 - (31 - this.arrDay[0]));
            this.arrDay[0] = 7 - (28 - this.arrDay[0]);
          } else {
            this.weekTimeP =
              this.time.year +
              "/" +
              this.time.month +
              "/" +
              (this.arrDay[0] + 7);
            this.arrDay[0] = this.arrDay[0] + 7;
          }
          //判断第二位数
          if (this.arrDay[6] > 22) {
            this.time.monthN = monthN + 1;
            this.weekTimeN =
              this.time.year +
              "/" +
              this.time.monthN +
              "/" +
              (7 - (28 - this.arrDay[6]));
            this.arrDay[6] = 7 - (28 - this.arrDay[6]);
          } else {
            this.weekTimeN =
              this.time.year +
              "/" +
              this.time.monthN +
              "/" +
              (this.arrDay[6] + 7);
            this.arrDay[6] = this.arrDay[6] + 7;
          }
        }
      }
    },

    prevDate: function(index, week, monthDate, yearDate) {
      let month = this.time.month;
      let year = yearDate;
      console.log(this.time.month);

      //大月
      if (
        month - 1 == 1 ||
        month - 1 == 3 ||
        month - 1 == 5 ||
        month - 1 == 7 ||
        month - 1 == 8 ||
        month - 1 == 10 ||
        month - 1 == 12
      ) {
        monthDate = monthDate - 1;
        week = yearDate + "/" + monthDate + "/" + (31 + this.arrDay[index] - 7);
        this.arrDay[index] = this.arrDay[index] + 31 - 7;
      }
      //小月
      if (
        month - 1 == 4 ||
        month - 1 == 6 ||
        month - 1 == 9 ||
        month - 1 == 11
      ) {
        monthDate = monthDate - 1;
        week = yearDate + "/" + monthDate + "/" + (this.arrDay[index] + 30 - 7);
        this.arrDay[index] = this.arrDay[index] + 30 - 7;
      }
      //平月
      //闰年
      if (year % 4 == 0 && year % 100 != 0) {
        if (month - 1 == 2) {
          monthDate = month - 1;
          this.week =
            yearDate + "/" + monthDate + "/" + (29 + this.arrDay[index] - 7);
          this.arrDay[index] = this.arrDay[index] + 29 - 7;
        }
      } else {
        //平年
        if (month - 1 == 2) {
          monthDate = month - 1;
          this.week =
            yearDate + "/" + monthDate + "/" + (28 + this.arrDay[index] - 7);
          this.arrDay[index] = this.arrDay[index] + 28 - 7;
        }
      }
    },

    nextDate: function(param) {}
  }
};
</script>

<style lang="less" scoped>
@import "../assets/normalize.css";
.head {
  padding: 0 3.3%;
  .content {
    margin-bottom: 10px;
    padding: 4.8% 5.3%;
    width: 100%;
    height: 80px;
    text-align: left;
    color: #fff;
    background-image: linear-gradient(-269deg, #5c79eb 1%, #2f44d3 100%);
    border-radius: 4px;
    div {
      font-size: 18px;
      color: #fff;
      margin-bottom: 5px;
    }
    p {
      font-size: 14px;
      opacity: 0.6;
    }
  }
}
</style>
<style lang="less">
@colorBg:#2F44D3;
.tab {
  .el-tabs__header {
    .el-tabs__nav-wrap {
      .el-tabs__nav-scroll {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .el-tabs__nav {
          border: 1px solid @colorBg;
          border-radius: 5px;
          width: 100%;
          .el-tabs__active-bar{
            background:@colorBg;
          }
          #tab-month {
            border-left: 1px solid @colorBg;
            border-right: 1px solid @colorBg;
          }
          .el-tabs__item {
            padding: 0;
            width: 33.33%;
            text-align: center;
            &.is-active {
              background: @colorBg;
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>
