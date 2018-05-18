<template>
  <div class="details">
    <div class="title">
      <span class="tit-head" @click="goTo('Newdate')">后退</span>
      <span class="tit-head">过高记录</span>
    </div>

    <div class="title between">
      <p><span>6.1</span><span>mmol</span></p>
      <p class="date">2018-02-15</p>
    </div>

    <div class="title between">
       <p><span>6.1</span><span>mmol</span></p>
      <p class="date">2018-02-15</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='less' scoped>
@import "../assets/normalize.css";
.details{
  padding: 0 3.6%;
  .title{
  width: 100%;
  height: 60px;
  line-height: 60px;
  .tit-head{
    font-size: 20px;
    color: #333;
  }
  p{
    span{
font-size: 16px;
color: #333333;
    }
  }
  .date{
    font-size: 16px;
color: #AAAAAA;
line-height: 24px;
  }
}
}

</style>
