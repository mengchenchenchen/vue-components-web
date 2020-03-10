<template>
  <div id="shopping_cart">
    <el-container class="app_width">
      <div class="tab">
        <i class="el-icon-arrow-left" @click="back"></i>
        <div class="bring">快递上门</div>
        <div @click="write" class="edit">{{msg}}</div>
      </div>
      <div class="table">
        <div :class="{active : isActive == 0}" @click="isActive = 0">待接单</div>
        <div :class="{active : isActive == 1}" @click="isActive = 1">送货中</div>
        <div :class="{active : isActive == 2}" @click="isActive = 2">异常单</div>
        <div :class="{active : isActive == 3}" @click="isActive = 3">已完成</div>
      </div>
      <!-- 待接单 -->
      <div v-if="isActive == 0">
        <div class="box">
          <!-- 这里是待接单 -->
          <div class="goods_list">
            <img src="../../assets/nothingforcart.png" alt v-show="flag" />
            <div class="goods_icon" v-show="goods" v-for="(i,index) in items" :key="index">
              <div class="goods_title">
                <el-row :gutter="0">
                  <el-col :span="2">
                    <input type="checkbox" v-model="checked" @click="checkedAll(index)" />
                  </el-col>
                  <el-col :span="10">
                    <span>{{i.name}}</span>
                  </el-col>
                  <el-col :span="12">
                    <router-link
                      :to="{
						name:'goodsShow',
						params:{
						msg:'不包邮'
						}
					}"
                    >
                      <span>{{i.postage}}</span>
                      <i class="el-icon-arrow-right"></i>
                    </router-link>
                  </el-col>
                </el-row>
              </div>
              <div class="goods_dec">
                <el-row :gutter="0">
                  <el-col :span="2">
                    <input type="checkbox" v-show="input" v-model="checked" />
                    <img src="../../assets/forbidden.png" v-show="forb" @click="del(index)" />
                  </el-col>
                  <el-col :span="6">
                    <img src="../../assets/shirt.jpg" alt />
                  </el-col>
                  <el-col :span="16">
                    <div class="goods_name">{{ i.names }}</div>
                    <div class="dec">
                      <div class="size">
                        <span>尺寸:{{ i.size }}</span>
                        <span>颜色:{{i.color}}</span>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 送货中 -->
      <div v-if="isActive == 1">这里是送货中</div>
      <!-- 异常单 -->
      <div v-if="isActive == 2">这里是异常单</div>
      <!-- 已完成 -->
      <div v-if="isActive == 3">这里是已完成</div>

      <el-footer></el-footer>
    </el-container>
    <FooterItem></FooterItem>
  </div>
</template>

<script>
import FooterItem from "../../components/footerbox";

export default {
  name: "shopping_cart",
  components: {
    FooterItem
  },
  data() {
    return {
      isActive: 0, //显示  订单状态
      msg: "编辑",
      flag: false,
      goods: true,
      input: true,
      forb: false,
      many: true,
      checked: false,
      change: false,
      num: 1,
      total: 0,
      q1: -1,
      items: [
        {
          name: "免税自营",
          postage: "不包邮,满1亿包邮",
          names: "2nd Witness 恶搞kaws 薯条印花圆领卫衣",
          size: "s",
          color: "黑色",
          money: 139
        }
      ],
      adds: {
        name: "免税自营",
        postage: "不包邮,满1亿包邮",
        names: "2nd Witness 恶搞kaws 薯条印花圆领卫衣",
        size: "s",
        color: "黑色",
        money: 139
      }
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    write() {
      if (this.msg == "编辑") {
        this.msg = "完成";
        this.input = false;
        this.forb = true;
        this.many = false;
        this.change = true;
      } else if (this.msg == "完成") {
        this.msg = "编辑";
        this.input = true;
        this.forb = false;
        this.many = true;
        this.change = false;
      }
    },
    addGoods() {
      this.flag = false;
      this.goods = true;
      let AddGoods = this.adds;
      this.items.push(AddGoods);
    },
    add(v) {
      if (v >= 2) {
        this.num = 2;
        alert("您已经超过购买数量");
      } else if (v < 2 && v >= 1) {
        this.num += 1;
      }
      console.log(this.num);
    },
    minus(v) {
      console.log(v);
      if (v <= 1) {
        alert("sorry,您必须买!");
        this.num = 1;
      } else if (v > 1 && v <= 2) {
        this.num -= 1;
      }
    },
    checkedAll(v) {
      console.log(v);
      this.items[v].checked = true;
    },
    del(index) {
      this.items.splice(index, 1);
      if (this.items.length == 0) {
        this.flag = true;
      }
    }
  }
};
</script>

<style lang="less">
#shopping_cart {
  .app_width {
    .tab {
      font-size: 40px;
      box-sizing: border-box;
      padding: 40px 30px 20px 20px;
      border: 1px solid #fff;
      background-color: #1a489d;
      color: #fff;
      display: flex;
      align-items: center;
      div,
      i {
        flex: 1;
      }
      i {
        text-align: left;
      }
      .bring {
        text-align: center;
      }
      .edit {
        text-align: right;
      }
    }
    .table {
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #333;
      .active {
        color: #1a489d;
      }
    }
  }
}
.page {
  border: none;
}
.el-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: white;
  padding: 20px;
}
.goods_news {
  text-align: center;
  font-weight: bold;
  span {
    display: inline-block;
    padding-left: 10px;
    width: 100px;
    padding: 20px 0;
  }
}
.goods_list {
  background-color: #e7e7e7;
  img {
    width: 100%;
  }
  .goods_icon {
    margin-top: 10px;
    background-color: white;
    font-size: 14px;
    .goods_title {
      padding: 5px;
      border-bottom: 4px solid #e7e7e7;
      .el-col {
        height: 30px;
        padding: 0;
      }
      .el-col:first-child {
        text-align: center;
        input {
          margin-top: 8px;
        }
      }
      .el-col:nth-child(2) {
        line-height: 30px;
      }
      .el-col:last-child {
        padding: 0 10px;
        text-align: right;
        a {
          color: #e7b801;
          text-decoration: none;
          line-height: 30px;
        }
      }
    }
    .goods_dec {
      padding: 5px;
      margin-bottom: 5px;
      .el-col {
        height: 100px;
        font-size: 12px;
      }
      .el-col:first-child {
        text-align: center;
        input {
          margin-top: 43px;
        }
        img {
          margin-top: 30px;
        }
      }
      .el-col:nth-child(2) {
        img {
          width: 100%;
          height: 100%;
        }
      }
      .el-col:last-child {
        position: relative;
        padding: 5px;
        .dec {
          position: absolute;
          left: 5px;
          bottom: 5px;
          width: 95%;
          display: flex;
          justify-content: space-between;
          .size {
            padding: 5px;
            display: flex;
            flex-direction: column;
          }
          .pay {
            font-size: 15px;
            font-weight: bold;
            padding: 5px;
            display: flex;
            flex-direction: column;
          }
          table {
            border: 1px solid black;
            border-collapse: collapse;
            td {
              padding: 2px;
              border: 1px solid black;
            }
            input {
              width: 30px;
              border: none;
            }
          }
        }
      }
    }
  }
}
.add {
  margin-top: 10px;
  margin-bottom: 60px;
  input {
    width: 100%;
    border: none;
    background-color: #80c342;
    border-radius: 5px;
    padding: 10px 0;
    color: white;
  }
}
.el-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  .el-col {
    height: 60px;
  }
  .el-col:first-child {
    display: flex;
    background-color: #f1e63b;
    font-size: 14px;
    .all_choose {
      padding: 0 5px;
      margin-right: 10px;
      line-height: 60px;
    }
    .money {
      text-align: left;
      p:first-child {
        margin-top: 12px;
      }
    }
  }
  .el-col:last-child {
    background-color: #000000;
    color: white;
    font-size: 18px;
    line-height: 60px;
  }
}
</style>
