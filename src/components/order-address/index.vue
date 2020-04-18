<template>
  <div>
    <mc-flex
      align="center"
      style="margin: 0rem .5rem;border-radius:.2rem;padding:.5rem 0rem;"
      v-for="item in address_list"
      :key="item.key"
      @click="$router.push(item.router)"
    >
      <span class="icon" :style="{backgroundColor:item.bg}">{{item.flag}}</span>
      <mc-flex column style="margin-left:1rem;border-bottom: 1px solid #ededed;flex:1;">
        <mc-flex>
          <span>{{item.title}}&nbsp;</span>
          <span>{{item.subtitle}}</span>
        </mc-flex>
        <span style="color: #a9a9a9;font-size:.5rem;margin:.3rem 0rem;">{{item.tip}}</span>
      </mc-flex>
    </mc-flex>
  </div>
</template>
<script>
import McFlex from "@comp/flex";
import util from "@/util/index";
export default {
  components: { McFlex },
  data() {
    return {};
  },
  computed: {
    senderInfo() {
      return this.$store.state.senderInfo;
    },
    receiverInfo() {
      return this.$store.state.receiverInfo;
    },
    address_list() {
      //
      const sender_empty = util.check_empty(this.senderInfo);
      const sender_title = sender_empty ? "从哪里寄？" : this.senderInfo.name;
      const sender_subtitle = sender_empty ? "" : this.senderInfo.phone;
      const sender_tip = sender_empty
        ? "点击选择寄件人信息"
        : this.senderInfo.addr;

      //
      const receiver_empty = util.check_empty(this.receiverInfo);
      const receiver_title = receiver_empty
        ? "寄到哪里？"
        : this.receiverInfo.name;
      const receiver_subtitle = receiver_empty ? "" : this.receiverInfo.phone;
      const receiver_tip = receiver_empty
        ? "点击选择收件人信息"
        : this.receiverInfo.addr;
      return [
        {
          key: "senderInfo",
          flag: "寄",
          title: sender_title,
          subtitle: sender_subtitle,
          tip: sender_tip,
          bg: "#3478f6",
          router: "sendAddress"
        },
        {
          key: "receiverInfo",
          flag: "收",
          title: receiver_title,
          subtitle: receiver_subtitle,
          tip: receiver_tip,
          bg: "#ebc95d",
          router: "arriveAddress"
        }
      ];
    }
  },
  methods: {}
};
</script>
<style scoped>
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
</style>
