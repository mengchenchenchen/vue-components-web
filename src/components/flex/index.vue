<template>
  <div :style="flex_style" @click="$emit('click',$event)">
    <slot></slot>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    display: {
      type: String,
      default: "flex"
    },
    column: {
      type: Boolean,
      default: false
    },
    justify: {
      type: String,
      default: "flex-start"
    },
    align: {
      type: String,
      default: "flex-start"
    },
    bg: {
      type: String,
      default: "#fff"
    },
    wrap: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    flex_style() {
      const { display, column, justify, align, bg, wrap } = this;
      return {
        display,
        boxSizing: "border-box",
        flexDirection: column ? "column" : "row",
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap ? "wrap" : "nowrap",
        backgroundColor: bg
      };
    }
  },
  methods: {}
};
</script>
<style scoped>
</style>