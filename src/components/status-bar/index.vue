<template>
  <mc-flex justify="space-between" class="wrapper-status-bar">
    <span class="text-bold">{{title}}</span>
    <mc-flex align="center" class="status" @click="$emit('click',$event)">
      <span>{{status}}</span>
      <i class="el-icon-arrow-right"></i>
    </mc-flex>
  </mc-flex>
</template>
<script>
import McFlex from "@/components/flex";
export default {
  components: { McFlex },
  props: {
    title: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style scoped>
.wrapper-status-bar {
  padding: 20px 25px;
  font-size: 14px;
  border-bottom: 1px solid #e7e7e7;
}
.status {
  color: #e7b801;
}
</style>
