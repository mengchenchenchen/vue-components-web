<template>
  <div class="mainbox">
    <div class="title">超市派送</div>
    <div class="table">
      <div :class="{active : isActive == 0}" @click="isActive = 0">新任务</div>
      <div :class="{active : isActive == 1}" @click="isActive = 1">待取货</div>
      <div :class="{active : isActive == 2}" @click="isActive = 2">配送中</div>
    </div>
    <!-- 新任务 -->
    <div v-if = "isActive == 0">
      <div class="box">
        这里是新任务
        <!-- <div class="name"></div> -->
      </div>
    </div>
    <!-- 待取货 -->
    <div v-if = "isActive == 1">这里是待取货</div>
    <!-- 配送中 -->
    <div v-if = "isActive == 2">这里是配送中</div>
    <footerRider></footerRider>
  </div>
</template>

<script>
import footerRider from "../../components/footerRider"

export default {
  name: 'index',
  components:{
      footerRider,
  },
  data () {
    return {
      isActive:0,
    }
  },
  methods:{
    
  }
}
</script>

<style lang='less'>
  .mainbox{
    padding: 0px;
    .title{
      text-align: center;
      font-size: 30px;
      color: #fff;
      box-sizing: border-box;
      padding: 20px 30px;
      background-color: #402fdb;

    }
    .table{
      box-sizing: border-box;
      padding: 20px;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #333;
      .active{
        color:#402fdb;
      }
    }
    
  }
</style>
