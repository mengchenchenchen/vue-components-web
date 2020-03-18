<template>
  <mc-flex align="center" justify="space-between" :style="wrapper_style">
    <slot name="left">&nbsp;</slot>
    <slot name="center">&nbsp;</slot>
    <slot name="right">&nbsp;</slot>
  </mc-flex>
</template>
<script>
import McFlex from "@/components/flex";
export default {
  components: { McFlex },
  props: {
    bg: {
      type: String,
      default: "#fff"
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
      default: "0px"
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
        fontSize: size * 0.0312 + "rem"
      };
    }
  },
  methods: {}
};
</script>
<style scoped>
</style>
