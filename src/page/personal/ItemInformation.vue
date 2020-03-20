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
        :class="{active:isactive == index}"
      >{{item}}</div>
    </div>
    <div class="weight">
      <div class="weight-title">
        预计重量（KG）
        <span>[最终价格以快递员最终揽件为准]</span>
      </div>
      <div class="calculation">
        <span class="weight-min" @click="min">-</span>
        <input class="weight-number" v-model="number" readonly="readonly" />
        <span class="weight-add" @click="add">+</span>
      </div>
    </div>
    <div class="danger">
      <div class="danger-title">禁止和限制运输的物品：</div>
      <div class="info">
        1、爆炸性、易燃性、腐蚀性、毒性、强酸碱性和放射性的各种危险物品;
        2、麻醉药物和精神物品，如鸦片、吗啡、可卡因(高根)等;国家法令禁止流通或寄递的物品，如军火武器、本国或外国货币等;
        3、容易腐烂的物品、各种活的动物(如鲜鱼、鲜肉等);
        4、妨碍公共卫生的物品，如尸骨(包括已焚化的尸骨)、未经硝制的兽皮、未经药制的兽骨等;
        5、反动报刊、书籍、窗口或者淫秽物品等;
      </div>
    </div>
    <div class="sure">
      <button @click="sure">确定</button>
    </div>
  </div>
</template>

<script>
import McHeader from "@/components/header";
import store from "@/util/store";

export default {
  components: {
    McHeader
  },
  data() {
    return {
      classifyList: ["食品", "电子商品", "化妆品", "衣物", "文件票件", "其他"],
      isactive:-1, // 点击选择class
      number: 1,
      goods:'',
    };
  },
  methods: {
    back() {
      window.history.go(-1)
    },
    chooseClassify(item, index) {
      this.isactive = index;
      this.goods = item;
    },
    min() {
      if (this.number <= 0) {
        alert("不能小于0kg!");
      } else {
        this.number--;
      }
    },
    add() {
      if (this.number >= 10) {
        alert("不能小于10kg!");
      } else {
        this.number++;
      }
    },
    sure() {
      let itemInformation = this.goods +','+ this.number
      store.setSession("goodsinfo",itemInformation);
      window.history.go(-1)
    }
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
    border-bottom: 1px solid blue;
    .classify {
      margin-bottom: 20px;
      width: 200px;
      height: 60px;
      border: 2px solid #e0e0e0;
      text-align: center;
      line-height: 60px;
      border-radius: 20px;
    }
    .active {
      border: 2px solid #1a489d;
    }
  }
  .weight {
    padding: 20px;
    font-size: 40px;
    border-bottom: 1px solid blue;
    .weight-title {
      span {
        font-size: 26px;
      }
    }
    .calculation {
      margin-top: 20px;
      font-size: 50px;
      input {
        width: 100px;
        border: none;
        background-color: #ececec;
        text-align: center;
        font-size: 50px;
      }
    }
  }
  .danger {
    padding: 30px;
    font-size: 30px;
    .danger-title{
      font-size: 40px;
      margin-bottom: 20px;
    }
    .info{
      font-size: 36px;
      line-height: 50px;
    }
  }
  .sure {
    width: 100%;
    text-align: center;
    button {
      border: none;
      margin: 60px auto 20px;
      background: #1a489d;
      width: 300px;
      height: 80px;
      border-radius: 20px;
      color: #fff;
      font-size: 36px;
    }
  }
}
</style>
