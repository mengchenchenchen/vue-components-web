<template>
  <div>
    <mc-header bg="#1a489d" padding="15px">
      <i slot="left" class="el-icon-arrow-left" @click="back"></i>
      <span slot="center" class="text-bold" style="position:relative;left:0.5rem;">接收订单</span>
    </mc-header>
    <div class="orderNum">请问您要接收订单号为：{{item.orderNumber}}的订单吗？</div>

    <div class="footer" @click="sure">
      <div>确定</div>
    </div>
    <mc-success :msg="msg" v-if="isShow"></mc-success>
  </div>
</template>

<script>
import McHeader from "@/components/header";
import McSuccess from "@comp/success";


import api from "@/util/api";

export default {
  components: { McHeader ,McSuccess},
  data() {
    return {
        item:'',
      msg:'评价成功！',
      isShow: false //成功的弹框 显隐
    };
  },
  mounted() {
    this.item = this.$route.query.item;
    // console.log(this.item.status)
  },
  methods: {
    back() {
      this.$router.back();
    },
    sure() {
        this.item.status = 1
      let params = this.item
      api
        .post("/php-ci/index.php/test/updateOrderStatus", params)
        .then(res => {
          console.log(res);
          if (res.data.ret == 200) {
            this.isShow = true
            setTimeout(() => {
              this.isShow = false;
              this.$router.push("./order");
            }, 1000);
          }
        });
    }
  }
};
</script>

<style lang="less">
.orderNum {
  padding: 30px;
  font-size: 46px;
}
.tellWords {
  padding: 30px;
  font-size: 36px;
  textarea {
      margin-top: 20px;
    width: 100%;
    border-radius: 5px;
    background-color: rgba(241, 241, 241, 0.98);
    padding: 10px;
    resize: none;
  }
}
.footer {
  position: fixed;
  bottom: 0;
  height: 80px;
  line-height: 80px;
  width: 100%;
  background-color: #1a489d;
  text-align: center;
  color: white;
}
</style>