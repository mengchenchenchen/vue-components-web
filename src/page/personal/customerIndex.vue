<template>
  <div>
    <mc-header bg="#1a489d" :size="40" padding="15px">
      <i slot="left" class="el-icon-arrow-left" @click="back"></i>
      <span slot="center" class="text-bold">快递上门</span>
    </mc-header>

    <div class="logo">
      <img :src="paisonglogo" alt />
    </div>

    <mc-flex
      align="center"
      style="margin: 0rem .5rem;border-radius:.2rem;padding:.5rem 0rem;"
      v-for="item in addrList"
      :key="item.name"
      @click="$router.push(item.router)"
    >
      <span class="icon" :style="{backgroundColor:item.bg}">{{item.flag}}</span>
      <mc-flex column style="margin-left:1rem;border-bottom: 1px solid #ededed;flex:1;">
        <mc-flex>
          <span>{{item.title}}</span>
          <span>{{item.subtitle}}</span>
        </mc-flex>
        <span style="color: #a9a9a9;font-size:.5rem;margin:.3rem 0rem;">{{item.tip}}</span>
      </mc-flex>
    </mc-flex>

    <!--  -->
    <div v-for="item in objectInfo" :key="item.name">
      <mc-flex
        justify="space-between"
        style="margin: 0rem .5rem;padding:.5rem;"
        v-if="item.type===0"
        @click="item.handler"
      >
        <span style="color:#747474">{{item.title}}</span>
        <mc-flex>
          <span style="font-size:.5rem;margin: 0rem .5rem;">{{item.value}}</span>
          <i class="el-icon-arrow-right"></i>
        </mc-flex>
      </mc-flex>
      <mc-flex column v-else style="margin: 0rem .5rem;padding:.5rem;">
        <span style="color:#747474;margin:.5rem 0rem;">{{item.title}}</span>
        <textarea rows="4" style="width:90%;" v-model="item.value"></textarea>
      </mc-flex>
    </div>
    <popup-picker
      ref="aptTime"
      :slots="appointmentTimeSlot"
      title="预约上门时间"
      @ok="appointmentTimeChange"
    ></popup-picker>
    <popup-picker ref="valAdded" :slots="valueAddedSlot" title="增值服务" @ok="valueAddedChange"></popup-picker>

    <div class="footer">
      <div class="total">
        <div>合计{{ totalMarks }}元</div>
        <div class="label">基础价格7元</div>
      </div>
      <div @click="getOrder">立即下单</div>
    </div>

    <mc-success :msg="msg" v-if="isShow"></mc-success>
  </div>
</template>

<script>
import FooterItem from "@comp/footerbox";
import McHeader from "@comp/header";
import McSuccess from "@comp/success";
import McFlex from "@comp/flex";
import PopupPicker from "@comp/popup-picker";
import store from "@/util/store";
import api from "@/util/api";

export default {
  components: {
    FooterItem,
    McHeader,
    McSuccess,
    McFlex,
    PopupPicker
  },
  data() {
    return {
      paisonglogo: require("@/assets/paisonglogo.jpg"),
      addrList: [
        {
          name: "sendmsg",
          flag: "寄",
          title: "从哪里寄？",
          subtitle: "",
          tip: "点击选择寄件人信息",
          bg: "#3478f6",
          router: "sendAddress"
        },
        {
          name: "collectmsg",
          flag: "收",
          title: "寄到哪里？",
          subtitle: "",
          tip: "点击选择收件人信息",
          bg: "#ebc95d",
          router: "arriveAddress"
        }
      ],
      objectInfo: [
        {
          type: 0,
          title: "物品信息",
          name: "goodsinfo",
          value: "",
          handler: () => {
            this.$router.push("ItemInformation");
          }
        },
        {
          type: 0,
          title: "预约上门时间",
          name: "saleType",
          value: "",
          handler: () => {
            this.$refs.aptTime.show = true;
          }
        },
        {
          type: 0,
          title: "增值服务",
          name: "money",
          value: "",
          handler: () => {
            this.$refs.valAdded.show = true;
          }
        },
        {
          type: 1,
          title: "对小哥说",
          name: "tellWords",
          value: "",
          handler: () => {}
        }
      ],

      msg: "下单成功！",
      valueAddedSlot: [
        {
          flex: 1,
          values: ["2元", "5元", "10元", "50元"]
        }
      ],
      appointmentTimeSlot: [
        {
          flex: 1,
          values: ["今天", "明天", "后天"],
          textAlign: "center"
        },
        {
          divider: true,
          content: "-"
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
          textAlign: "center"
        }
      ],
      isShow: false //成功的弹框 显隐
    };
  },

  mounted() {
    this.init_object_info();
    this.get_address();
  },
  methods: {
    init_object_info() {
      const goodsinfo = store.getSession("goodsinfo");
      this.set_object_info("goodsinfo", goodsinfo);
    },
    set_object_info(name, value) {
      for (const item of this.objectInfo) {
        if (item.name === name) {
          item.value = value;
          break;
        }
      }
    },
    get_object_info() {
      const temp = {};
      for (const item of this.objectInfo) {
        temp[item.name] = item.value;
      }
      return temp;
    },
    get_address() {
      const sendmsg = store.getSession("sendmsg");
      const collectmsg = store.getSession("collectmsg");
      if (sendmsg) {
        const send_addr = this.addrList[0];
        send_addr.title = sendmsg.name;
        send_addr.subtitle = sendmsg.phone;
        send_addr.tip = sendmsg.addr + sendmsg.gate;
      }

      if (collectmsg) {
        const arrive_addr = this.addrList[0];
        arrive_addr.title = collectmsg.name;
        arrive_addr.subtitle = collectmsg.phone;
        arrive_addr.tip = collectmsg.addr + sendmsg.gate;
      }
    },
    get_addr_list() {
      const temp = {};
      for (const item of this.addrList) {
        temp[item.name] = item.tip;
      }
      return temp;
    },
    back() {
      this.$router.back();
    },
    appointmentTimeChange(values) {
      this.set_object_info("saleType", values[0] + values[1]);
    },
    valueAddedChange(values) {
      this.set_object_info("money", values[0]);
    },
    getOrder() {
<<<<<<< HEAD
      let params = {
        title: this.goodsinfo,
        provenance: this.sendaddress,
        destination: this.collectaddress,
        price: this.totalMarks,
        remarks: this.tellWords
      }
      api.post("/php-ci/index.php/test/add_order",params).then(res=>{
        
      })
=======
      const { totalMarks } = this;
      const { tellWords, goodsinfo } = this.get_object_info();
      const { sendmsg, collectmsg } = this.get_addr_list();
      const params = {
        title: goodsinfo,
        provenance: sendmsg,
        destination: collectmsg,
        price: totalMarks,
        remarks: tellWords
      };
      api
        .post("/php-ci/index.php/test/add_order", params)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
>>>>>>> 71cb9599efe83636dbdf36208197cb0ec42e910e
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.$router.push("order");
      }, 1000);
      store.clearSession();
    }
  },
  computed: {
    totalMarks() {
      let totalmoney = 7;
      const { money } = this.get_object_info();
      if (money) {
        totalmoney = parseFloat(money) + parseFloat(totalmoney);
      } else {
        totalmoney = 7;
      }
      return parseFloat(totalmoney);
    }
  }
};
</script>

<style lang="less" scoped>
.logo {
  margin-bottom: 20px;
  img {
    width: 100%;
  }
}
.icon {
  font-size: 28px;
  width: 60px;
  height: 60px;
  text-align: center;
  box-sizing: border-box;
  padding-top: 10px;
  background-color: #3478f6;
  color: #fff;
  border-radius: 60px;
  margin-left: 20px;
}

textarea {
  width: 100%;
  border-radius: 5px;
  background-color: rgba(241, 241, 241, 0.98);
  padding: 10px;
  resize: none;
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
    .label {
      font-size: 16px;
    }
  }
}
</style>
