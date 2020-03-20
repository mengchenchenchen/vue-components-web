<template>
  <mc-flex justify="space-around">
    <span
      :class="{'active':value===item.value}"
      v-for="item in list"
      :key="item.value"
      @click="handleClick(item.value)"
    >{{item.label}}</span>
  </mc-flex>
</template>
<script>
import McFlex from "@/components/flex";
export default {
  components: { McFlex },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleClick(val) {
      this.$emit("change", val);
    }
  }
};
</script>
<style scoped>
.active {
  color: #1a489d;
}
</style>