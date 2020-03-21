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
import FooterItem from "@/components/footerbox";
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
    OrderBox,
  },
  data() {
    return {
      statusList: [
        { label: "待接单", value: 0 },
        { label: "送货中", value: 1 },
        { label: "异常单", value: 2 },
        { label: "已完成", value: 3 }
      ],
      isActive: 0, //显示  订单状态
      temp: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    filterList(val) {
      return this.temp.filter(v => v.status == val);
    },
    getList() {
<<<<<<< HEAD
      api.post("/php-ci/index.php/test/order").then(res => {
        if (res.status === 200) {
          this.temp = res.data;
        } else {
          alert("错误！");
        }
      });
=======
      api
        .post("/php-ci/index.php/test/order")
        .then(res => {
          if (res.status === 200) {
            this.temp = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
>>>>>>> 71cb9599efe83636dbdf36208197cb0ec42e910e
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
