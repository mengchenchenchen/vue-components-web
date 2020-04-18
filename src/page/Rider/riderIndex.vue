<template>
  <div>
    <div class="wrapper-order">
      <mc-header bg="#1a489d" padding="15px">
        <span slot="center" class="text-bold" style="position:relative;left:0.5rem;">快递上门</span>
      </mc-header>
      <order-tab style="margin-top:1rem;" v-model="isActive" :list="statusList" @change="tabChange"></order-tab>
      <div v-for="item in appointOrder" :key="item.id">
        <div v-if="isActive == 4">
          <mc-flex style="margin:1rem auto;border-bottom:1px solid #7f7f7f;padding-bottom:20px">
            <img src="@/assets/order.jpg" class="left-image" />
            <mc-flex column class="right-info">
              <span>姓名: {{item.name}}</span>
              <span>电话: {{item.phone}}</span>
              <span>时间：{{item.appointmentTime}}</span>
              <span>地址：{{item.address}}</span>
            </mc-flex>
            <button @click="sureOrder(item.name)">确定订单</button>
          </mc-flex>
        </div>
      </div>
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
import McFlex from "@/components/flex";

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
    McFlex
  },
  data() {
    return {
      statusList: [
        { label: "新任务", value: 4 },
        { label: "待取货", value: 0 },
        { label: "配送中", value: 1 }
      ],
      isActive: 4, //显示  订单状态
      temp: [],
      appointOrder: [] //预约订单
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    tabChange(val) {
      // console.log(val);
      if (val < 2) {
        // one
        this.get_order();
      } else {
        // two
        this.get_appoint_order();
      }
    },
    filterList(val) {
      return this.temp.filter(v => v.status == val);
    },
    get_order() {
      api.post("/php-ci/index.php/test/order").then(res => {
        if (res.status === 200) {
          this.temp = res.data;
        } else {
          alert("错误！");
        }
      });
    },
    get_appoint_order() {
      // let phone = localStorage.getItem('')
      api.post("/php-ci/index.php/test/appoint_order").then(res => {
        if (res.status === 200) {
          this.appointOrder = res.data;
          // console.log(this.appointOrder);
        }
      });
    },
    getList() {
      this.get_order();
      this.get_appoint_order();
    },
    sureOrder(val){
      let params = {
        name:val
      }
      api.post("/php-ci/index.php/test/deleteAppointOrder",params).then(res => {
        window.location.reload()
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
.left-image {
  flex: 3 3 auto;
  width: 80px;
  padding-left: 50px;
}
.right-info {
  flex: 7 7 auto;
  font-size: 30px;
  padding-left: 20px;
}
button{
  border:none;
  background-color: #fff;
  padding: 10px 20px;
  border:1px solid blue;
}
</style>
