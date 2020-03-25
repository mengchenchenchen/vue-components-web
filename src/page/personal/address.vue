<template>
  <div class="mainbox">
    <mc-header bg="#1a489d" :size="40" padding="15px">
      <i slot="left" class="el-icon-arrow-left" @click="back"></i>
      <span slot="center" class="text-bold">发货地址</span>
    </mc-header>
    <div class="name">
      <div>姓名：</div>
      <input type="text" placeholder="请填写姓名" v-model="name" />
    </div>
    <div class="phone">
      <div>电话：</div>
      <input type="text" placeholder="请填写发货人电话" v-model="phone" />
    </div>
    <div class="address">
      <div>地址：</div>
      <input type="text" placeholder="请填写地址" v-model="addr" />
    </div>
    <div class="gate">
      <div>楼号门牌：</div>
      <input type="text" placeholder="例16号楼427室" v-model="gate" />
    </div>
    <div class="footer" @click="preserve">
      <div>保存</div>
    </div>
  </div>
</template>

<script>
import api from "@/util/api";
import McHeader from '@/components/header'

export default {
  components:{
    McHeader
  },
  data() {
    return {
       name: "",
        phone: "",
        addr: "",
        gate: ""
    };
  },
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    preserve() {
      let params = {
        name: this.name,
        phone: this.phone,
        addr: this.addr,
        gate: this.gate,
      };
      console.log(params);
      api.post('/php-ci/index.php/test/add_address',params).then(res=>{
          console.log(res);
          if(res.data.ret == 200){
            alert('添加地址成功！')
            this.$router.go(-1);
          }
      })
    }
  }
};
</script>

<style lang="less" scoped>
html,
body {
  width: 100%;
  height: 100%;
  background-color: rgb(250, 248, 248);
}
.mainbox {
  .name,
  .phone,
  .address,
  .gate {
    background-color: #fff;
    box-sizing: border-box;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 26px;
    input {
      border: none;
      padding: 20px;
      font-size: 26px;

    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    height: 80px;
    line-height: 80px;
    width: 100%;
    background-color:#1a489d;
    text-align: center;
    color: white;
  }
}
</style>
