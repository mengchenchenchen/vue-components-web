<template>
  <div class="wrapper">
    <mc-flex column align="center">
      <div v-for="item in titleList" :key="item.text">{{item.text}}</div>
    </mc-flex>
    <mc-flex justify="space-around" v-for="item in roleList" :key="item.value">
      <span>我是{{item.text}}</span>
      <span @click="gotoRegister(item.value)">进入</span>
    </mc-flex>
  </div>
</template>

<script>
import McFlex from "@/components/flex";
export default {
  components: {
    McFlex
  },
  data() {
    return {
      titleList: [
        { text: "选择适合你的身份"},
        { text: "开始高效体验" },
        { text: "支持三种身份任意切换" }
      ],
      roleList: [
        { text: "个人用户", value: 1 },
        { text: "派送员", value: 2 },
        { text: "管理员", value: 3 }
      ]
    };
  },
  mounted() {},
  methods: {
    gotoRegister(permissions) {
      this.$router.replace({ path: "/login", query: { permissions } });
    }
  }
};
</script>

<style lang='less'>
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translate(0, -50%);
}
</style>
 