<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <status-bar :title="item.title" :status="get_status(item.status)"></status-bar>
      <order-item :item="item"></order-item>
    </div>
  </div>
</template>
<script>
import StatusBar from "@/components/status-bar";
import OrderItem from "@/components/order-item";
export default {
  components: { OrderItem, StatusBar },
  props: {
    list: {
      type: Array,
      default: []
    },
    status: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    get_status(val) {
      let temp = "";
      for (const item of this.status) {
        if (item.value === val) {
          temp = item.label;
          break;
        }
      }
      return temp;
    }
  }
};
</script>
<style scoped>
</style>