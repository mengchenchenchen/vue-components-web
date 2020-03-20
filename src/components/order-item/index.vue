<template>
  <mc-flex style="margin-top:1rem;">
    <img :src="item.img" class="left-image" />
    <mc-flex column class="right-info">
      <span>{{item.info}}</span>
      <span>始发地: {{item.provenance}}</span>
      <span>目的地: {{item.destination}}</span>
      <span>{{item.create_time}}</span>
      <span>{{item.price}}</span>
    </mc-flex>
  </mc-flex>
</template>
<script>
import McFlex from "@/components/flex";
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
  width: 120px;
  padding-left: 50px;
}
.right-info {
  flex: 7 7 auto;
  font-size: 12px;
  padding-left: 20px;
}
</style>
