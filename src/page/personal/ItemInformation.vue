<template>
  <div class="mainbox">
    <div class="tab">
      <div class="title">物品类型</div>
    </div>
    <div class="classify">
        <div>包裹类型</div>
        
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      isActive: 0,
      flag: false,
      checked: false,
      forb: false,
      goods: true,
      input: true,
      items1: [
        {
          name: "免税自营",
          postage: "领取任务",
          names: "2nd Witness 恶搞kaws 薯条印花圆领卫衣",
          size: "s",
          color: "黑色",
          money: 139
        },
        {
          name: "免税自营",
          postage: "领取任务",
          names: "2nd Witness 恶搞kaws 薯条印花圆领卫衣",
          size: "s",
          color: "黑色",
          money: 139
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang='less'>
.mainbox {
  padding: 0px;
  .tab {
    font-size: 46px;
    text-align: center;
    padding: 40px 20px 20px;
    color: #fff;
    background-color: #1a489d;
    div {
      font-weight: bold;
    }
  }
}
</style>
