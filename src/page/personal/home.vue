<template>
  <div>
    <mc-header bg="#1a489d" :size="40" padding="15px">
      <span slot="center" class="text-bold">罗马快递</span>
    </mc-header>

    <div class="logo">
      <img :src="bgcimg" alt />
    </div>

    <mc-flex wrap justify="center">
      <home-box
        class="box-item"
        v-for="(item,index) in  optionList"
        :key="item.title"
        :index="index"
        :msg="item"
        @click.stop="goto(item.value)"
      ></home-box>
    </mc-flex>
    <FooterItem></FooterItem>
  </div>
</template>

<script>
import FooterItem from "../../components/footerbox";
import McHeader from "@/components/header";
import HomeBox from "@/components/home-box";
import McFlex from "@/components/flex";

import kuaidiyuan from "@/assets/kuaidiyuan.png";
import search from "@/assets/search.png";
import jijian from "@/assets/jijian.png";
import dingdan from "@/assets/dingdan.png";

export default {
  components: {
    FooterItem,
    McHeader,
    McFlex,
    HomeBox
  },
  data() {
    return {
      bgcimg: require("@/assets/bgcimg.jpg"),
      optionList: [
        {
          img: kuaidiyuan,
          title: "快递员上门",
          info: "安心下单 闪电送达",
          value: "customerIndex"
        },
        {
          img: search,
          title: "扫码寄件",
          info: "扫码寄件 更快捷",
          value: "scanning"
        },
        {
          img: jijian,
          title: "批量寄件",
          info: "批量寄件 更急速",
          value: "batchSend"
        },
        {
          img: dingdan,
          title: "寄件订单",
          info: "近期订单 轻松查",
          value: "order"
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="less">
.logo {
  background-color: #1a489d;
  width: 100%;
  img {
    width: 100%;
  }
}
.box-item {
  flex: 0 0 43%;
  padding: 10px 0px;
  &:nth-child(n + 3) {
    border-top: 2px solid #ededed;
  }
}
</style>
