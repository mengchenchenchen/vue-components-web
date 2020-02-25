<template>
  <div class="mainbox">
    <div class="header">
      <div class="title">发货地址</div>
    </div>
    <div class="back" @click="back">
      <i class="el-icon-arrow-left" style="width:20px;"></i>
    </div>
    <div class="name">
      <div>姓名：</div>
      <input type="text" placeholder="请填写姓名" v-model="addressList.name" />
    </div>
    <div class="phone">
      <div>电话：</div>
      <input type="text" placeholder="请填写发货人电话" v-model="addressList.phone" />
    </div>
    <div class="address">
      <div>地址：</div>
      <input type="text" placeholder="请填写地址" v-model="addressList.address" />
    </div>
    <div class="gate">
      <div>楼号门牌：</div>
      <input type="text" placeholder="例16号楼427室" v-model="addressList.gate" />
    </div>
    <div class="footer" @click="preserve">
      <div>保存</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressList: {
        name: "",
        phone: "",
        address: "",
        gate: "",
      }
    };
  },
  mounted() {

  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    preserve() {
        console.log(this.addressList);
        sessionStorage.setItem('address', JSON.stringify(this.addressList))
        this.$router.push({path:'./sendAddress'})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  .name,
  .phone,
  .address,
  .gate {
    background-color: #fff;
    box-sizing: border-box;
    padding: 30px 20px;
    display: flex;
    margin-bottom: 20px;
    input {
      border: none;
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
