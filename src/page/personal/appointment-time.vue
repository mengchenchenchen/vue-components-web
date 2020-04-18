<template>
  <div>
    <mc-header back> 
      <span slot="center" class="text-bold">预约时间</span>
    </mc-header>
    <input-text
      class="mt-2"
      v-for="info in userInfoConfig"
      :key="info.label"
      :name="info.name"
      :placeholder="info.placeholder"
      v-model="info.value"
    ></input-text>
    <div class="mt-2" v-for="item in appointmentInfoConfig" :key="item.name">
      <card-cell :item="item"></card-cell>
    </div>
    <div class="footer" @click="preserve">
      <div>立即预约</div>
    </div>

    <popup-picker
      ref="aptTime"
      :slots="appointmentTimeSlot"
      title="预约上门时间"
      @ok="appointmentTimeChange"
    ></popup-picker>

    <popup-picker ref="pickRider" :slots="chooseRiderSlot" title="选择快递员" @ok="chooseRiderChange"></popup-picker>
    <mc-success :msg="msg" v-if="isShow"></mc-success>
  </div>
</template>

<script>
import McHeader from "@/components/header";
import McFlex from "@comp/flex";
import McSuccess from "@comp/success";
import PopupPicker from "@comp/popup-picker";
import InputText from "@comp/input-text";
import CardCell from "@comp/card-cell";
import store from "@/util/store";
import api from "@/util/api";
import util from "@/util/index";
export default {
  components: { McHeader, McFlex, PopupPicker, McSuccess, InputText, CardCell },
  data() {
    return {
      userInfoConfig: [
        {
          name: "姓名",
          placeholder: "请填写姓名",
          label: "name",
          value: ""
        },
        {
          name: "电话",
          placeholder: "请填写发货人电话",
          label: "phone",
          value: ""
        },
        {
          name: "详细地址",
          placeholder: "请填写详细地址",
          label: "address",
          value: ""
        }
      ],
      isShow: false, //成功的弹框 显隐
      msg: "",
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
      riderList: [],
      appointmentInfoConfig: [
        {
          type: 0,
          title: "预约上门时间",
          name: "appointmentTime",
          value: "",
          handler: () => {
            this.$refs.aptTime.show = true;
          }
        },
        {
          type: 0,
          title: "选择快递员",
          name: "chooseRider",
          value: "",
          handler: () => {
            this.$refs.pickRider.show = true;
          }
        }
      ]
    };
  },
  mounted() {
    this.get_rider_name();
    this.load_user_info();
  },
  computed: {
    userInfo() {
      return this.userInfoConfig.reduce((acc, cur) => {
        acc[cur.label] = cur.value;
        return acc;
      }, {});
    },
    chooseRiderSlot() {
      return [
        {
          flex: 1,
          values: this.riderList
        }
      ];
    },
    appointmentInfo() {
      return this.appointmentInfoConfig.reduce((acc, cur) => {
        acc[cur.name] = cur.value;
        return acc;
      }, {});
    }
  },
  methods: {
    load_user_info() {
      this.$store.commit("getUserInfo");
      const phone_config = this.userInfoConfig.filter(
        val => val.label === "phone"
      )[0];
      const { phone } = this.$store.state.user;
      if (phone_config) {
        phone_config.value = phone;
      }
    },
    get_rider_name() {
      api.post("/php-ci/index.php/test/rider_name").then(res => {
        if (res.status == 200) {
          this.riderList = [];
          for (let i in res.data) {
            this.riderList.push(res.data[i].name);
          }
        }
      });
    },
    appointmentTimeChange(values) {
      this.updateAppointmentInfoConfig(
        "appointmentTime",
        values[0] + values[1]
      );
    },
    chooseRiderChange(values) {
      this.updateAppointmentInfoConfig("chooseRider", values[0]);
    },
    updateAppointmentInfoConfig(name, value) {
      for (const item of this.appointmentInfoConfig) {
        if (item.name === name) {
          item.value = value;
          break;
        }
      }
    },
    preserve() {
      const { name, phone, address } = this.userInfo;
      const { appointmentTime, chooseRider } = this.appointmentInfo;
      const params = {
        name,
        phone,
        address,
        appointmentTime,
        chooseRider
      };
      const empty = util.check_empty(params);
      if (empty) {
        this.isShow = true;
        this.msg = "您有信息未填写";
        setTimeout(() => {
          this.isShow = false;
        }, 1000);
      } else {
        api
          .post("/php-ci/index.php/test/add_appointmentTime", params)
          .then(res => {
            if (res.data.ret == 200) {
              this.isShow = true;
              this.msg = `您的订单已经被 ${chooseRider} 同意，快递员将在 ${appointmentTime} 上门，请您耐心等待！`;
              setTimeout(() => {
                this.isShow = false;
                this.$router.push("home");
              }, 1000);
              this.$store.commit("updateUserInfo", { name, phone, address });
            } else {
              this.msg = "请求失败，请稍后再试";
              this.isShow = true;
              setTimeout(() => {
                this.isShow = false;
              }, 1000);
            }
          });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0.2rem;
  height: 80px;
  line-height: 80px;
  width: 100%;
  background-color: #1a489d;
  text-align: center;
  color: white;
}
</style>