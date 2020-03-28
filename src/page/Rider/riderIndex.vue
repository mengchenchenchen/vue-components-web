<template>
  <div>
    <div class="wrapper-order">
      <mc-header bg="#1a489d" padding="15px">
        <span slot="center" class="text-bold" style="position:relative;left:0.5rem;">快递上门</span>
      </mc-header>
      <order-tab style="margin-top:1rem;" v-model="isActive" :list="statusList"></order-tab>
      <order-box :list="filterList(isActive)" :status="statusList"></order-box>
    </div>
    <footer-item></footer-item>
  </div>
</template>

<script>
import FooterItem from "@/components/footerRider";
import McHeader from "@/components/header";
import OrderTab from "@/components/order-tab";
import StatusBar from "@/components/status-bar";
import OrderItem from "@/components/order-item";
import OrderBox from "@/components/order-box";

import nothingforcart from "@/assets/nothingforcart.png";

import api from "@/util/api";
export default {
  components: {
    FooterItem,
    McHeader,
    OrderTab,
    StatusBar,
    OrderItem,
    OrderBox
  },
  data() {
    return {
      statusList: [
        { label: "新任务", value: 3 },
        { label: "待取货", value: 1 },
        { label: "配送中", value: 2 }
      ],
      isActive: 3, //显示  订单状态
      temp: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    filterList(val) {
      // console.log(val)
      return this.temp.filter(v => v.status == val);
    },
    getList() {
      api.post("/php-ci/index.php/test/order").then(res => {
        if (res.status === 200) {
          this.temp = res.data;
          // console.log(this.temp);
        } else {
          alert("错误！");
        }
      });
      api.post("/php-ci/index.php/test/appoint_order").then(res => {
        if (res.status === 200) {
          for (let i in res.data) {
            this.temp.push(res.data[i]);
          }
          this.isShow = true;
          setTimeout(() => {
            this.isShow = false;
            this.$router.push("order");
          }, 1000);
          // console.log(this.temp);
        }
      });
    }
  }
};
</script>

<style lang="less">
.wrapper-order {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 120px;
  overflow-y: scroll;
}
</style>
