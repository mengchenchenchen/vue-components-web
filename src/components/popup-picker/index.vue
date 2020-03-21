<template>
  <mt-popup v-model="show" style="width:100%;" popup-transition="popup-fade" position="bottom">
    <mt-picker :slots="slots" showToolbar @change="handleChange">
      <mc-flex justify="space-between" style="margin:1rem;">
        <span style="color:#ff6600;" @click="show = false">取消</span>
        <span>{{title}}</span>
        <span style="color:#ff6600;" @click="handleOk">确定</span>
      </mc-flex>
    </mt-picker>
  </mt-popup>
</template>
<script>
import McFlex from "@comp/flex";
export default {
  components: { McFlex },
  props: {
    slots: {
      type: Array,
      default() {
        return [];
      }
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      show: false,
      values: []
    };
  },
  methods: {
    handleOk() {
      this.$emit("ok", this.values);
      this.show = false;
    },
    handleChange(picker, values) {
      this.values = values;
    }
  }
};
</script>
<style scoped>
</style>
