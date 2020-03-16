<template>
  <div class="mainbox">
    <div class="tab">
      <div class="title">罗马快递</div>
    </div>
    <div class="table">
      <div :class="{active : isActive == 0}" @click="isActive = 0">订单</div>
      <div :class="{active : isActive == 1}" @click="isActive = 1">派送员</div>
    </div>
    <!-- 待接单 -->
    <div v-if="isActive == 0">
      <!-- 这里是待接单 -->
      <!-- <div class="name"></div> -->
      <div class="box">
        <!-- 这里是待接单 -->
        <div class="goods_list">
          <img src="../../assets/nothingforcart.png" alt v-show="flag" />
          <div class="goods_icon" v-show="goods" v-for="(i,index) in items1" :key="index">
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
                        name:'',
                        params:{
                        msg:'不包邮'
                        }
                      }"
                  >
                    <a :href="'tel:' + 18251723449">{{i.postage}}</a>
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
    <footerRider></footerRider>
  </div>
</template>

<script>
import footerRider from "../../components/footerRider";

export default {
  name: "index",
  components: {
    footerRider
  },
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
  .table {
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #333;
    .active {
      color: #402fdb;
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
        padding: 15px;
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
          // height: 100px;
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
}
</style>
