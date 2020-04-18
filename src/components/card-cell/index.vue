<template>
  <mc-flex
    justify="space-between"
    style="margin: 0rem .5rem;padding:.5rem"
    v-if="item.type===0"
    @click="item.handler"
  >
    <span style="color:#747474;font-size:1.2rem;">{{item.title}}</span>
    <mc-flex align="center" style="height:100%">
      <span style="font-size:1.2rem;margin: 0rem .5rem;">{{item.value}}</span>
      <i class="el-icon-arrow-right"></i>
    </mc-flex>
  </mc-flex>
  <mc-flex column v-else style="margin: 0rem .5rem;padding:.5rem;">
    <span style="color:#747474;margin:.5rem 0rem;">{{item.title}}</span>
    <textarea rows="4" style="width:90%;margin-left:0.1rem" v-model="item.value"></textarea>
  </mc-flex>
</template>
<script>
import McFlex from "@comp/flex";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: { McFlex },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleTextInput(ev) {
      this.$store.commit("updateRemake", ev.target.value);
    }
  }
};
</script>
<style scoped>
</style>