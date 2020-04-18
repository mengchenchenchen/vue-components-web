<template>
  <mc-flex align="center" justify="space-between" :style="wrapper_style">
    <i v-if="back" class="el-icon-arrow-left" @click="handleBack"></i>
    <slot v-else name="left">&nbsp;</slot>
    <slot name="center">&nbsp;</slot>
    <slot name="right">&nbsp;</slot>
  </mc-flex>
</template>
<script>
import McFlex from "@/components/flex";
import util from "@/util";
export default {
  components: { McFlex },
  props: {
    // back 为 true , 显示 后退键
    // back 为 false 时，且 this.$slots.left 无内容时，显示 空格
    // back 为 false , this.$slots.left 有内容 ， 显示内容
    back: {
      type: Boolean,
      default: false
    },
    bg: {
      type: String,
      default: "#1a489d"
    },
    color: {
      type: String,
      default: "#fff"
    },
    size: {
      type: Number,
      default: 40
    },
    padding: {
      type: String,
      default: "0.8rem"
    }
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    wrapper_style() {
      const { bg, color, size, padding } = this;
      return {
        backgroundColor: bg,
        color,
        padding,
        fontSize: util.px2rem(size)
      };
    }
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
</style>
