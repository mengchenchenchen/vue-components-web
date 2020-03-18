<template>
  <div :style="flex_style">
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
    margin: {
      type: String,
      default: "0"
    },
    padding: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {};
  },
  computed: {
    flex_style() {
      const { display, column, justify, align, padding, margin } = this;
      return {
        display,
        flexDirection: column ? "column" : "row",
        justifyContent: justify,
        alignItems: align,
        margin,
        padding
      };
    }
  },
  methods: {}
};
</script>
<style scoped>
</style>