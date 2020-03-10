<template>
  <div class="mainbox">
    <div class="tab">
      <div class="title">罗马快递</div>
    </div>
    <div class="table">
      <div :class="{active : isActive == 0}" @click="isActive = 0">订单</div>
      <div :class="{active : isActive == 1}" @click="isActive = 1">派送员</div>
    </div>
    <!-- 待接单 -->
    <div v-if="isActive == 0">
      <div class="box">
        这里是待接单
        <!-- <div class="name"></div> -->
      </div>
    </div>
    <!-- 送货中 -->
    <div v-if="isActive == 1">这里是送货中</div>
    <!-- 异常单 -->
    <div v-if="isActive == 2">这里是异常单</div>
    <!-- 已完成 -->
    <div v-if="isActive == 3">这里是已完成</div>
    <footerRider></footerRider>
  </div>
</template>

<script>
import footerRider from "../../components/footerRider";

export default {
  name: "index",
  components: {
    footerRider
  },
  data() {
    return {
      isActive: 0
    };
  },
  methods: {}
};
</script>

<style lang='less'>
.mainbox {
  padding: 0px;
  .tab {
    font-size: 46px;
    text-align: center;
    padding: 40px 20px 20px;
    color: #fff;
    background-color: #1a489d;
    div {
      font-weight: bold;
    }
  }
  .table {
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #333;
    .active {
      color: #402fdb;
    }
  }
}
</style>
