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
import shirt from "@/assets/shirt.jpg";
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
        { label: "待接单", value: 0 },
        { label: "送货中", value: 1 },
        { label: "异常单", value: 2 },
        { label: "已完成", value: 3 }
      ],
      isActive: 0, //显示  订单状态
      temp: [
        {
          id: "12vwh1vghw2vg32hg1",
          title: "免税自营1",
          status: 0,
          img: shirt,
          provenance: "始发地",
          destination: "目的地",
          info: "薯条印花圆领卫衣",
          create_time: "12:45",
          price: "998"
        },
        {
          id: "asvagdg2v312vgh321",
          title: "免税自营2",
          status: 1,
          img: shirt,
          provenance: "始发地",
          destination: "目的地",
          info: "薯条印花圆领卫衣",
          create_time: "12:45",
          price: "998"
        },
        {
          id: "23sahbxhja21321",
          title: "免税自营3",
          status: 2,
          img: shirt,
          provenance: "始发地",
          destination: "目的地",
          info: "薯条印花圆领卫衣",
          create_time: "12:45",
          price: "998"
        },
        {
          id: "ashb672t3123",
          title: "免税自营4",
          status: 0,
          img: shirt,
          provenance: "始发地",
          destination: "目的地",
          info: "薯条印花圆领卫衣",
          create_time: "12:45",
          price: "998"
        },
        {
          id: "23y872y4squwq",
          title: "免税自营5",
          status: 3,
          img: shirt,
          provenance: "始发地",
          destination: "目的地",
          info: "薯条印花圆领卫衣",
          create_time: "12:45",
          price: "998"
        },
        {
          id: "ashjbbdhajs78sadha",
          title: "免税自营5",
          status: 3,
          img: shirt,
          provenance: "始发地",
          destination: "目的地",
          info: "薯条印花圆领卫衣",
          create_time: "12:45",
          price: "998"
        },
        {
          id: "asgdyuaa62715316",
          title: "免税自营5",
          status: 3,
          img: shirt,
          provenance: "始发地",
          destination: "目的地",
          info: "薯条印花圆领卫衣",
          create_time: "12:45",
          price: "998"
        }
      ]
    };
  },
  methods: {
    filterList(val) {
      return this.temp.filter(v => v.status == val);
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
