<template>
  <mc-flex align="center" bg="#fff" @click="$emit('click',$event)">
    <img :src="msg.img" class="msg-img" :class="{'left-line':index%2==1}" />
    <mc-flex column>
      <span class="msg-title">{{msg.title}}</span>
      <span class="msg-info">{{msg.info}}</span>
    </mc-flex>
  </mc-flex>
</template>
<script>
import McFlex from "@/components/flex";

export default {
  components: { McFlex },
  props: {
    msg: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
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
.msg-img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}
.msg-title {
  font-size: 34px;
}
.msg-info {
  font-size: 20px;
  color: #999999;
  margin-top: 10px;
}
.left-line {
  border-left: 2px solid #ededed;
  padding-left: 20px;
}
</style>