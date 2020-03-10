<template>
  <div class="mainbox">
    <div class="tab">
      <div class="title">罗马快递</div>
    </div>
    <div class="logo">
      <img src="../../assets/bgcimg.jpg" alt />
    </div>
    <div class="classify">
      <div class="item">
        <div class="one" @click="getOrder">
          <img src="../../assets/kuaidiyuan.png" alt />
          <div class="des">
            <div class="name">快递员上门</div>
            <div class="lable">安心下单 闪电送达</div>
          </div>
        </div>
        <div class="one" @click="sendMsg">
          <img src="../../assets/search.png" alt />
          <div class="des">
            <div class="name">扫码寄件</div>
            <div class="lable">扫码寄件 更快捷</div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="one" @click="toSend">
          <img src="../../assets/jijian.png" alt />
          <div class="des">
            <div class="name">批量寄件</div>
            <div class="lable">批量寄件 更急速</div>
          </div>
        </div>
        <div class="one">
          <img src="../../assets/dingdan.png" alt />
          <div class="des">
            <div class="name">寄件订单</div>
            <div class="lable">近期订单 轻松查</div>
          </div>
        </div>
      </div>
    </div>
    <FooterItem></FooterItem>
  </div>
</template>

<script>
import FooterItem from "../../components/footerbox";
import axios from 'axios'

export default {
  name: "HelloWorld",
  components: {
    FooterItem
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
  },
  methods: {
      getOrder(){
          this.$router.push('./customerIndex')
      },
      sendMsg(){
         this.$router.push('./scanning')
      },
      toSend(){
        this.$router.push('./batchSend')
      }
  }
};
</script>

<style lang="less">
.mainbox {
  padding: 0;
  .tab {
    font-size: 46px;
    text-align: center;
    padding: 40px 20px 20px;
    color: #fff;
    background-color: #1a489d;
    div {
      font-weight: bold;
    }
  }
  .logo {
      background-color: #1a489d;
    width: 100%;
    img {
      width: 100%;
    }
  }
  .classify {
      background-color: #1a489d;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 30px;
    background-color: #fff;
    .item {
      box-sizing: border-box;
      padding: 10px 20px 20px;
      display: flex;
      &:first-child {
        border-bottom: 2px solid #ededed;
      }
      .one {
        flex: 1;
        display: flex;
        &:last-child {
          box-sizing: border-box;
          padding-left: 10px;
        }
        &:first-child {
          border-right: 2px solid #ededed;
        }
        img {
          width: 80px;
          height: 80px;
          margin-right: 10px;
        }
        .des {
          .name {
            color: #000000;
            font-size: 34px;
          }
          .lable {
            font-size: 20px;
            color: #999999;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
