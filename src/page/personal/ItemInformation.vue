<template>
  <div class="mainbox">
    <mc-header bg="#1a489d" :size="40" padding="15px">
      <i slot="left" class="el-icon-arrow-left" @click="back"></i>
      <span slot="center" class="text-bold">物品类型</span>
    </mc-header>
    <div class="classifyBox">
      <div
        class="classify"
        v-for="(item,index) in classifyList"
        :key="index"
        @click="chooseClassify(item,index)"
      >{{item}}</div>
    </div>
  </div>
</template>

<script>
import McHeader from "@/components/header";

export default {
  components: {
    McHeader
  },
  data() {
    return {
	  classifyList: ["食品", "电子商品", "化妆品", "衣物", "文件票件", "其他"],
	  ins:'',
    };
  },
  methods: {
    back() {
      this.$router.push({ path: "./customerIndex" });
    },
  }
};
</script>

<style lang='less' scoped>
.mainbox {
  .classifyBox {
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .classify {
      margin-bottom: 20px;
      width: 200px;
      height: 60px;
      border: 2px solid #e0e0e0;
      text-align: center;
      line-height: 60px;
      border-radius: 20px;
	}
	.active{
		border: 2px solid #1a489d;
	}
  }
}
</style>
