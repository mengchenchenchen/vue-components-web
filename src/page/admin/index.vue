<template>
  <div class="mainbox">
    <div class="tab">
      <div class="title">罗马快递</div>
    </div>
    <div class="table">
      <div :class="{active : isActive == 0}" @click="isActive = 0">订单</div>
      <div :class="{active : isActive == 1}" @click="isActive = 1">派送员</div>
    </div>
    <div v-if="isActive == 0">
      <div v-for="(item,index) in temp" :key="index">
        <order-item :item="item"></order-item>
      </div>
    </div>
    <div v-if="isActive == 1">
        <div class="riderNum" v-for="item in riderNum" :key="item.id">
            <div>{{item.name}}</div>
            <div>{{item.phone}}</div>
        </div>
    </div>
    <!-- <footerAdmin></footerAdmin> -->
  </div>
</template>

<script>
// import footerAdmin from "@/components/footerAdmin";
import OrderItem from "@/components/order-item";

import api from "@/util/api";

export default {
  name: "index",
  components: {
    // footerAdmin,
    OrderItem
  },
  data() {
    return {
      isActive: 0,
      flag: false,
      checked: false,
      forb: false,
      goods: true,
      input: true,
      temp: [],
      riderNum:[],
      activeNames: ["1"]
    };
  },
  mounted() {
    this.get_order();
    this.get_rider();
  },
  methods: {
    get_order() {
      api.post("/php-ci/index.php/test/order").then(res => {
        if (res.status === 200) {
          this.temp = res.data;
          // console.log(this.temp);
        } else {
          alert("错误！");
        }
      });
    },
    handleChange(val) {
      console.log(val);
    },
    get_rider() {
      api.post("/php-ci/index.php/test/rider_name").then(res => {
        // console.log(res)
        if (res.status === 200) {
          this.riderNum = res.data;
          console.log(this.riderNum);
        } else {
          alert("错误！");
        }
      });
    },
  }
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
  .riderNum{
    display: flex;
    justify-content: space-around;
    font-size: 36px;
    &>div{
      padding: 20px 30px;
    }
  }
}
</style>
