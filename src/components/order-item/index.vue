<template>
  <mc-flex style="margin:1rem auto;border-bottom:1px solid #7f7f7f">
    <img src="@/assets/order.jpg" class="left-image" />
    <mc-flex column class="right-info">
      <span>{{item.info}}</span>
      <span>始发地: {{item.provenance}}</span>
      <span>目的地: {{item.destination}}</span>
      <span>备注：{{item.remarks}}</span>
      <span>价格：{{item.price}}</span>
    </mc-flex>
  </mc-flex>
</template>
<script>
import McFlex from "@/components/flex";
// import shirt from "@/assets/shirt.jpg";
export default {
  components: { McFlex },
  props: {
    item: {
      type: Object,
      required: true
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
.left-image {
  flex: 3 3 auto;
  width: 80px;
  padding-left: 50px;
}
.right-info {
  flex: 7 7 auto;
  font-size: 30px;
  padding-left: 20px;
}
</style>
