<template>
  <div class="mainbox">
    <div class="header">
      <div class="title">选择发件地址</div>
    </div>
    <div class="back" @click="back">
      <i class="el-icon-arrow-left" style="width:20px;"></i>
    </div>
    <div
      class="adressItem"
      v-for="(item, index) in addressList"
      :key="index"
      @click="chooseAddress(item)"
    >
      <div class="adress">{{ item.addr }}{{item.gate}}</div>
      <div class="info">
        <div class="name">{{ item.name }}</div>
        <div class="link">{{ item.phone }}</div>
      </div>
    </div>
    <div class="footer" @click="addAddress">
      <div>添加收货地址</div>
    </div>
  </div>
</template>

<script>
import api from "@/util/api";
import store from "@/util/store";

export default {
  data() {
    return {
      msg: "",
      addressList: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    addAddress() {
      this.$router.push({ path: "./address" });
    },
    chooseAddress(item) {
      store.setSession("collectmsg",JSON.stringify(item));
      this.$router.go(-1)
    },
    getList() {
      api.post("/php-ci/index.php/test/address").then(res => {
        this.addressList = res.data;
      });
    }
  }
};
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 248, 248);
}
.mainbox {
  .header {
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
    font-size: 40px;
    background-color: #fff;
    color: black;
  }
  .back {
    background-color: #fff;
    margin-top: -68px;
    font-size: 40px;
    margin-bottom: 40px;
  }
  .adressItem {
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px 40px;
    margin-bottom: 20px;
    .adress {
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .footer {
    height: 80px;
    line-height: 80px;
    width: 100%;
    background-color: rgb(64, 47, 219);
    text-align: center;
    color: white;
  }
}
</style>
