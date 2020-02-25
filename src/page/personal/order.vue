<template>
  <div class="mainbox">
    <div class="header">
      <div class="title">我的订单</div>
    </div>
    <div class="adressItem" v-for="(item, index) in orderList" :key="index">
      <div class="adress">{{ item.address }}{{item.gate}}</div>
      <div class="info">
        <div class="name">{{ item.name }}</div>
        <div class="link">{{ item.phone }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      addressList: [
        {
          address: "江苏省徐州市丰县",
          gate:'1504',
          name: "liu梦晨",
          phone: "18251723449"
        },
      ]
    };
  },
  mounted() {
    let address = JSON.parse(sessionStorage.getItem('address'));
    this.addressList.push(address);
  },
  methods: {
    back() {
      this.$router.push({ path: "./customerIndex"});
    },
    addAddress() {
      this.$router.push({ path: "./address" ,query:{msg:this.msg}});
    },
    chooseAddress(item){
        this.$router.push({ path: "./customerIndex" ,query:{sendmessage:this.item}});
        // console.log(item)
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
