<template>
  <div>
    <mc-header bg="#1a489d" padding="15px">
      <i slot="left" class="el-icon-arrow-left" @click="back"></i>
      <span slot="center" class="text-bold" style="position:relative;left:0.5rem;">评价订单</span>
    </mc-header>
    <div class="orderNum">订单号：{{orderNumber}}</div>
    <div class="tellWords">
      <div>对小哥的评价：</div>
      <textarea rows="4" style="width:90%;" v-model="tellWords"></textarea>
    </div>

    <div class="footer" @click="preserve">
      <div>立即评价</div>
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
      orderNumber: "",
      tellWords: "",
      msg:'评价成功！',
      isShow: false //成功的弹框 显隐
    };
  },
  mounted() {
    this.orderNumber = this.$route.query.orderNumber;
  },
  methods: {
    back() {
      this.$router.back();
    },
    preserve() {
      let params = {
        orderNumber: this.orderNumber,
        evaluation: this.tellWords,
      };
      api
        .post("/php-ci/index.php/test/add_evaluation", params)
        .then(res => {
          console.log(res);
          if (res.data.ret == 200) {
            this.isShow = true
            setInterval(() => {
              this.isShow = false;
              this.$router.push("./home");
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
  font-size: 36px;
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