<template>
  <div class="box">{{msg}}</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    msg: {
      type: String,
      default: "下单成功！"
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 25px 40px;
  border-radius: 20px;
  background: #1a489d;
  color: #fff;
  text-align: center;
  line-height: 100px;
  z-index: 100;
  font-size: 40px;
}
</style>>
