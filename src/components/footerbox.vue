<template>
  <mc-flex justify="space-around" align="center" class="foot-box">
    <mc-flex
      column
      align="center"
      v-for="item in tabs"
      :key="item.text"
      @click.stop="$router.replace(item.route)"
    >
      <img v-if="curr_name=== item.route" :src="item.selected" class="icon" />
      <img v-else :src="item.unselect" class="icon" />
      <span class="text" :class="{'text-active':curr_name=== item.route}">{{item.text}}</span>
    </mc-flex>
  </mc-flex>
</template>

<script>
import home_icon_off from "@/assets/home_icon_off.png";
import cart_icon_off from "@/assets/cart_icon_off.png";
import my_icon_off from "@/assets/my_icon_off.png";
import home_icon_on from "@/assets/home_icon_on.png";
import cart_icon_on from "@/assets/cart_icon_on.png";
import my_icon_on from "@/assets/my_icon_on.png";
import McFlex from "@/components/flex";
export default {
  components: { McFlex },
  data() {
    return {
      tabs: [
        {
          text: "首页",
          selected: home_icon_on,
          unselect: home_icon_off,
          route: "home"
        },
        {
          text: "订单",
          selected: cart_icon_on,
          unselect: cart_icon_off,
          route: "order"
        },
        {
          text: "我的",
          selected: my_icon_on,
          unselect: my_icon_off,
          route: "mine"
        }
      ]
    };
  },
  computed: {
    curr_name() {
      return this.$route.name || "null";
    }
  }
};
</script>
<style scoped lang="less">
.icon {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}
.text-active {
  color: #402fdb;
}
.text {
  font-size: 12px;
}
.foot-box {
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;
  border-top: 1px solid #e7e7e7;
}
</style>
