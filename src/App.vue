<template>
  <div id="app">
    <div class="nav">
 <!-- <el-tabs v-model="activeName" class="tab">
    <el-tab-pane class="tab-nav" label="用户管理" name="first"> -->
     <!-- <app-header ></app-header>  -->
    <!-- </el-tab-pane>
    <el-tab-pane class="tab-nav" label="配置管理" name="second"> -->
      <!-- <app-main></app-main> -->
    <!-- </el-tab-pane>
    <el-tab-pane class="tab-nav" label="角色管理" name="third"> -->
      <!-- <app-footer></app-footer> -->
    <!-- </el-tab-pane>
    <el-tab-pane class="tab-nav" label="定时任务补偿" name="fourth" >定时任务补偿00cl</el-tab-pane>
  </el-tabs> -->
  <router-view />
  <!-- <div v-for="item in test" :key="item.id">{{item}}</div>
  <div @click="goToQuery('HelloWorld',add)">点击</div> -->
    </div>
    <!-- <div>{{childMsg}}</div> -->
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  data() {
    return {
       
    };
  },
  components: {
    "app-header": Header,
    
  },
  methods: {
     
  }
};
</script>

<style lang="less" scoped>

</style>
