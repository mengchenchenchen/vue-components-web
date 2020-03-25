<template>
  <div>
    <mc-header bg="#1a489d" :size="40" padding="15px">
      <span slot="center" class="text-bold">预约时间</span>
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
      <div>详细地址：</div>
      <input type="text" placeholder="请填写详细地址" v-model="address" />
    </div>

    <div v-for="item in objectInfo" :key="item.name">
      <mc-flex
        justify="space-between"
        style="margin: 0rem .5rem;padding:.5rem"
        v-if="item.type===0"
        @click="item.handler"
      >
        <span style="color:#747474;font-size:1.2rem;">{{item.title}}</span>
        <mc-flex align="center" style="height:100%">
          <span style="font-size:1.2rem;margin: 0rem .5rem;">{{item.value}}</span>
          <i class="el-icon-arrow-right"></i>
        </mc-flex>
      </mc-flex>
      <mc-flex column v-else style="margin: 0rem .5rem;padding:.5rem;">
        <span style="color:#747474;margin:.5rem 0rem;">{{item.title}}</span>
        <textarea rows="4" style="width:90%;" v-model="item.value"></textarea>
      </mc-flex>
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
    <popup-picker ref="valAdded" :slots="chooseRiderSlot" title="选择快递员" @ok="chooseRiderChange"></popup-picker>
  </div>
</template>

<script>
import McHeader from "@/components/header";
import McFlex from "@comp/flex";
import PopupPicker from "@comp/popup-picker";

import api from "@/util/api";

export default {
  components: { McHeader, McFlex, PopupPicker },
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      appointmentTime:'',
      chooseRider:'',
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
      chooseRiderSlot: [
        {
          flex: 1,
          values: ['5元',"10元"],
        }
      ],
      objectInfo: [
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
          title: "选择快递员",
          name: "chooseRider",
          value: "",
          handler: () => {
            this.$refs.valAdded.show = true;
          }
        }
      ]
    };
  },
  mounted() {
    this.get_rider_name();
  },
  methods: {
    get_rider_name() {
      api.post("/php-ci/index.php/test/rider_name").then(res => {
        if (res.status == 200) {
            this.chooseRiderSlot[0].values = []
          for(let i in res.data){
              this.chooseRiderSlot[0].values.push(res.data[i].name)
          }
        }
      });
    },
    appointmentTimeChange(values) {
        this.appointmentTime = values[0] + values[1]
      this.set_object_info("saleType", values[0] + values[1]);
    },
    chooseRiderChange(values) {
        this.chooseRider = values[0]
      this.set_object_info("chooseRider", values[0]);
    },
    set_object_info(name, value) {
      for (const item of this.objectInfo) {
        if (item.name === name) {
          item.value = value;
          break;
        }
      }
    },
    preserve() {
      let params = {
        name: this.name,
        phone: this.phone,
        address: this.address,
        appointmentTime:this.appointmentTime,
        chooseRider:this.chooseRider,
      };
      console.log(params);
      api.post("/php-ci/index.php/test/add_appointmentTime", params).then(res => {
        console.log(res);
        if (res.data.ret == 200) {
          alert("预约成功！");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.name,
.phone,
.address {
  background-color: #fff;
  box-sizing: border-box;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.2rem;
  input {
    border: none;
    padding: 20px;
    font-size: 36px;
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