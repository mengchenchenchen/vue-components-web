<template>
  <div>
    <div v-for="item in list" :key="item.name">
      <status-bar :title="item.title" :status="get_status(item.status)" @click="handle(item)"></status-bar>
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
        if (item.value == val) {
          temp = item.label;
          break;
        }
      }
      return temp;
    },
    handle(item){
      console.log(item)
      if(item.status == 2){
        this.$router.push('/distributionDetails')
      }
      if(item.status == 3){
        this.$router.push({
          path: '/evaluate',
          query: {
            orderNumber: item.orderNumber
          }
        })
      }
    }
  }
};
</script>
<style scoped>
</style>