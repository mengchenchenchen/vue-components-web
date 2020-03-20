<template>
  <div class="mainbox">
    <div class="tab">
      <i class="el-icon-arrow-left" @click="back"></i>
      <div class="bring">批量寄件</div>
      <div></div>
    </div>
    <!-- <div class="position" id="app">{{city}}</div> -->
    <div class="logo">
      <img src="../../assets/paisonglogo.jpg" alt />
    </div>
    <div class="chufa" @click="chooseAdress">
      <div class="ji">寄</div>
      <div class="info">
        <div class="qus">
          <span class="one">{{sendname}}</span>
          <span class="two">{{sendphone}}</span>
        </div>
        <div class="ans">{{sendaddress}}</div>
      </div>
    </div>
    <div class="anthor_info">
      <div class="time">
        <div class="before">预约上门时间</div>
        <div class="after" @click="popupVisible1=true">
          <input type="text" v-model="saleType" />
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="tell">
        <div class="before">对小哥说</div>
        <textarea name id cols="44" rows="4" v-model="tellWords"></textarea>
      </div>
      <mt-popup
        v-model="popupVisible1"
        popup-transition="popup-fade"
        closeOnClickModal="true"
        position="bottom"
      >
        <mt-picker :slots="slots1" @change="onValuesChange1" showToolbar>
          <div class="picker-toolbar-title">
            <div class="usi-btn-cancel" @click="popupVisible1 = !popupVisible1">取消</div>
            <div class>预约上门时间</div>
            <div class="usi-btn-sure" @click="sure1()">确定</div>
          </div>
        </mt-picker>
      </mt-popup>
    </div>
    <div class="footer">
      <div class="total">
        <div>合计</div>
        <div>7元</div>
      </div>
      <div @click="getOrder">立即下单</div>
    </div>
  </div>
</template>

<script>
import FooterItem from "../../components/footerbox";
import { MessageBox, Toast, Picker, Popup, Header } from "mint-ui";
import store from "@/util/store";

export default {
  name: "HelloWorld",
  components: {
    FooterItem
  },
  data() {
    return {
      sendname:'寄往哪里？',
      sendphone:'',
      sendaddress:'点击选择寄件地址',
      value: "", //时间选择
      inputValue: "", //备注的内容
      popupVisible1: false, //弹框的显示隐藏
      popupVisible: false, //弹框的显示隐藏
      saleType: "", //时间
      tellWords: "", //给小哥说的话
      slots1: [
        {
          flex: 1,
          values: ["今天", "明天", "后天"],
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [
            "08:00-10:00",
            "10:00-12:00",
            "12:00-14:00",
            "14:00-16:00",
            "16:00-16:00"
          ],
          className: "slot3",
          textAlign: "center"
        }
      ],
    };
  },
  computed: {
    // totalMarks: function() {
    //   let totalmoney = 7;
    //   let a;
    //   let b;
    //   if (this.moneyValue == "") {
    //     a = 0;
    //   } else {
    //     a = parseFloat(this.moneyValue);
    //   }
    //   if (this.xiaofei == "") {
    //     b = 0;
    //   } else {
    //     b = parseFloat(this.xiaofei);
    //   }
    //   totalmoney = a + b + totalmoney;
    //   //   console.log(this.moneyValue)
    //   return parseFloat(totalmoney);
    // }
  },
  mounted() {
    this.sendmsg = window.localStorage.getItem('sendmsg')
    this.getLngLatLocation();
    let sendmsg = JSON.parse(store.getSession("sendmsg"));
    if (sendmsg) {
      this.sendname = sendmsg.name;
      this.sendphone = sendmsg.phone;
      this.sendaddress = sendmsg.addr + sendmsg.gate;
    } else {
      return;
    }
  },
  methods: {
    back(){
      window.history.go(-1)
    },
    chooseAdress() {
      this.$router.push({
        path: "./sendAddress"
      });
    },
    getLngLatLocation() {
      let _this = this;
      AMap.plugin("AMap.CitySearch", function() {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            //   console.log('通过ip获取当前城市：',result)
            _this.city = result.city;
          }
        });
      });
    },
    onValuesChange1(picker, values) {
      this.message = values[0] + values[1];
    },
    sure1() {
      this.saleType = this.message;
      this.popupVisible1 = false;
    },
    getOrder(){

    }
  }
};
</script>

<style lang="less">
.mainbox {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #ececec;
  .tab {
    font-size: 40px;
    padding: 40px 20px 20px;
    border:1px solid #fff;
    background-color: #1a489d;
    color: #fff;
    display: flex;
    align-items: center;
    div,i{
      flex:1;
    }
    i{
      text-align: left;
    }
    .bring{
      text-align: center;
    }
  }
  .logo {
    margin-bottom: 20px;
    img {
      width: 100%;
    }
  }
  .chufa,
  .daoda {
    width: 95%;
    background-color: #fff;
    margin: auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    .ji {
      font-size: 28px;
      width: 60px;
      height: 60px;
      text-align: center;
      box-sizing: border-box;
      padding-top: 10px;
      background-color: #3478f6;
      color: #fff;
      border-radius: 60px;
      margin-right: 30px;
    }
    .shou {
      font-size: 28px;
      width: 60px;
      height: 60px;
      text-align: center;
      box-sizing: border-box;
      padding-top: 10px;
      background-color: #ebc95d;
      color: #000;
      border-radius: 60px;
      margin-right: 30px;
    }
    .info {
      width: 100%;
      box-sizing: border-box;
      padding-bottom: 20px;
      border-bottom: 1px solid #ededed;
      .qus {
        margin-bottom: 10px;
        .one {
          font-size: 34px;
          color: #1e1e1e;
        }
      }
      .ans {
        font-size: 28px;
        color: #a9a9a9;
      }
    }
  }
  .anthor_info {
    width: 95%;
    background-color: #fff;
    margin: auto;
    border-radius: 10px;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 20px;
    .time {
      border-bottom: 1px solid #eeeeee;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 20px 10px;
      .before {
        color: #747474;
      }
      .after {
        text-align: right;
        width: 70%;
        input {
          width: 80%;
          text-align: right;
          padding: 10px;
          border: none;
        }
        input:focus {
          outline: none;
          color: transparent;
        }
      }
    }
    .tell {
      border-bottom: 1px solid #eeeeee;
      box-sizing: border-box;
      padding: 20px 10px;
      .before {
        color: #747474;
        margin-bottom: 20px;
      }
      textarea {
        border-radius: 5px;
        background-color: rgba(241, 241, 241, 0.98);
        padding: 10px;
        resize: none;
      }
    }
    .mint-popup-bottom {
      width: 100%;
    }
    .picker-toolbar {
      height: 200px;
    }
    .picker-toolbar-title {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      line-height: 100%;
      .usi-btn-cancel,
      .usi-btn-sure {
        color: #ff6600;
      }
    }
  }
  .footer {
	  position: fixed;
	  bottom: 0;
    width: 100%;
    height: 100px;
    border-radius: 10px;
    background-color: #1a489d;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      flex: 1;
      text-align: center;
    }
    .total {
      div {
        display: inline-block;
        margin-right: 20px;
      }
    }
  }
}
</style>
