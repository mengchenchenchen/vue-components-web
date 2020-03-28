<template>
  <div>
    <mc-header bg="#1a489d" padding="15px">
      <i slot="left" class="el-icon-arrow-left" @click="back"></i>
      <span slot="center" class="text-bold" style="position:relative;left:0.5rem;">搜索订单</span>
    </mc-header>
    <div class="inputbox">
      <input type="text" v-model="searchWords" placeholder="请输入订单号" />
      <button @click="searchOrder">搜索</button>
    </div>
    <div class="orderList">
      <div class="orderTitle">您的订单有：</div>
      <div v-for="(item,index) in orderList" :key="index">
        <order-item :item="item"></order-item>
      </div>
    </div>
  </div>
</template>

<script>
import McHeader from "@/components/header";
import OrderItem from "@/components/order-item";

import api from "@/util/api";

export default {
  components: { McHeader, OrderItem },
  data() {
    return {
      searchWords: "",
      orderList: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    back() {
      this.$router.back();
    },
    getList() {
      api
        .post("/php-ci/index.php/test/order")
        .then(res => {
          if (res.status === 200) {
            this.orderList = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    searchOrder() {
      const params = {
        orderNumber: this.searchWords
      };
      api
        .post("/php-ci/index.php/test/searchOrder", params)
        .then(res => {
          if (res.status === 200) {
            this.orderList = res.data.data
            // console.log(11)
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less">
.inputbox {
  padding: 25px;
  text-align: center;
  border-bottom: 1px solid #1a489d;
  input {
    width: 400px;
    font-size: 36px;
    padding: 20px;
    border: 1px solid #1a489d;
    border-radius: 10px;
  }
  button {
    width: 100px;
    height: 80px;
    border: none;
    border-radius: 10px;
    background-color: #1a489d;
    color: white;
    font-size: 30px;
  }
}
.orderList {
  padding: 25px;
  font-size: 36px;
}
</style>