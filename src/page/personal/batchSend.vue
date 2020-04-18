<template>
  <div>
    <mc-header back>
      <span slot="center" class="text-bold">批量寄件</span>
    </mc-header>

    <div class="logo">
      <img :src="paisonglogo" />
    </div>
    <order-address ref="addr"></order-address>
    <div v-for="item in cellList" :key="item.name">
      <card-cell :item="item"></card-cell>
    </div>
    <popup-picker ref="valAdded" :slots="valueAddedSlot" title="增值服务" @ok="valueAddedChange"></popup-picker>

    <div class="footer">
      <div class="total">
        <div>合计{{ totalMarks }}元</div>
        <div class="label">基础价格7元</div>
      </div>
      <div @click="place_orders">立即下单</div>
    </div>
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
import OrderAddress from "@comp/order-address";
import CardCell from "@comp/card-cell";
import util from "@/util/index";

export default {
  components: {
    FooterItem,
    McHeader,
    McSuccess,
    McFlex,
    PopupPicker,
    OrderAddress,
    CardCell
  },
  data() {
    return {
      paisonglogo: require("@/assets/paisonglogo.jpg"),
      valueAddedSlot: [
        {
          flex: 1,
          values: ["2元", "5元", "10元", "50元"]
        }
      ]
    };
  },

  mounted() {},
  methods: {
    valueAddedChange(values) {
      this.$store.commit("updateValueAdded", values[0]);
    },
    place_orders() {
      const timestamp = new Date().getTime();
      const rid = `${Math.random() * 100000}`.substring(0, 5);
      let orderId = `tsp${timestamp}rid${rid}`;

      const { totalMarks } = this;
      const { tellWords, goodsinfo } = this.cellInfo;
      const sendmsg = `${this.senderInfo.addr} ${this.senderInfo.gate}`;
      const collectmsg = `${this.receiverInfo.addr} ${this.receiverInfo.gate}`;
      const params = {
        title: goodsinfo,
        provenance: sendmsg,
        destination: collectmsg,
        price: totalMarks,
        remarks: tellWords,
        phone: this.receiverInfo.phone,
        orderNumber: orderId
      };
      const empty = util.check_empty(params);
      if (empty) {
        this.$message({
          message: "您有信息未填写",
          type: "error",
          duration: 1000
        });
        return;
      }
      api
        .post("/php-ci/index.php/test/add_order", params)
        .then(res => {
          this.$message({
            message: "下单成功",
            type: "success",
            duration: 1000
          });
          this.$router.push("order");
        })
        .catch(err => {
          this.$message({
            message: "下单失败,请稍后再试",
            type: "error",
            duration: 1000
          });
        });
    }
  },
  computed: {
    senderInfo() {
      return this.$store.state.senderInfo;
    },
    receiverInfo() {
      return this.$store.state.receiverInfo;
    },
    totalMarks() {
      const { valueAdded } = this;
      const { number } = this.itemInfo;
      return 7 + util.get_number(valueAdded) + util.get_number(number);
    },
    itemInfo() {
      return this.$store.state.itemInfo;
    },
    valueAdded() {
      return this.$store.state.valueAdded;
    },
    remark() {
      return this.$store.state.remark;
    },
    cellInfo() {
      return this.cellList.reduce((acc, cur) => {
        acc[cur.name] = cur.value;
        return acc;
      }, {});
    },
    cellList() {
      const goodsinfo_empty = util.check_empty(this.itemInfo);
      const goodsinfo_value = goodsinfo_empty
        ? ""
        : `${this.itemInfo.goods} , ${this.itemInfo.number}`;
      return [
        {
          type: 0,
          title: "物品信息",
          name: "goodsinfo",
          value: goodsinfo_value,
          handler: () => {
            this.$router.push("ItemInformation");
          }
        },
        {
          type: 0,
          title: "增值服务",
          name: "money",
          value: this.valueAdded,
          handler: () => {
            this.$refs.valAdded.show = true;
          }
        },
        {
          type: 1,
          title: "对小哥说",
          name: "tellWords",
          value: this.remark,
          handler: () => {}
        }
      ];
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
