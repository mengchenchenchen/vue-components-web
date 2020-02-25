<template>
  <div class="mainbox">
    <div class="tab">
      <div
        class="bring"
        :class="{ active: isActive == 2 }"
        @click="isActive = 1"
      >
        取送件
      </div>
      <!-- <div class="buy" :class="{ active: isActive == 2 }" @click="isActive = 2">
        代购
      </div> -->
    </div>
    <div class="position" id="app">{{city}}</div>
    <div class="logo">
      <img src="../../assets/paisonglogo.jpg" alt="" />
    </div>
    <div class="chufa" @click="chooseAdress">
      <div class="label">
        <i class="el-icon-message-solid" style="color:#52b4f9"></i>
      </div>
      <div class="content">{{ letAdress }}</div>
      <div class="enter">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="daoda" @click="chooseAdress2">
      <div class="label">
        <i class="el-icon-message-solid" style="color:#52b4f9"></i>
      </div>
      <div class="content">{{ goAdress }}</div>
      <div class="enter">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="time">
      <el-cascader
        placeholder="请选择物品类型、重量"
        :options="options"
        clearable
      ></el-cascader>
      <el-time-select
        v-model="value"
        :picker-options="{
          start: '9:30',
          step: '00:15',
          end: '18:30'
        }"
        placeholder="选择时间"
      >
      </el-time-select>
    </div>
    <div class="huosunfei">
      <div class="name">货损费</div>
      <el-input
        placeholder="请输入货损费"
        v-model="moneyValue"
        clearable
      ></el-input>
    </div>
    <div class="xiaofei">
      <div class="name">小费</div>
      <el-input placeholder="请输入小费" v-model="xiaofei" clearable></el-input>
    </div>
    <div class="remark">
      <div class="name">备注</div>
      <el-input
        placeholder="请输入备注内容"
        v-model="inputValue"
        clearable
      ></el-input>
    </div>
    <div class="footer">
      <div class="total">
        <div>合计</div>
        <div>{{ totalMarks }}元</div>
      </div>
      <div>立即下单</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
      isActive: 1,
      letAdress: "请输入出发地址",
      goAdress: "请输入到达地址",
      time: "取件时间",
      value: "", //时间选择
      moneyValue: "", //货损费的钱数
      xiaofei: "", //小费的钱数
      inputValue: "", //备注的内容
	  city:'定位中...',
      options: [
        {
          value: "canyin",
          label: "餐饮",
          children: [
            {
              label: "小于5kg"
            },
            {
              label: "5kg"
            },
            {
              label: "6kg"
            },
            {
              label: "7kg"
            },
            {
              label: "8kg"
            },
            {
              label: "9kg"
            },
            {
              label: "10kg"
            }
          ]
        },
        {
          value: "shengxian",
          label: "生鲜",
          children: [
            {
              label: "小于5kg"
            },
            {
              label: "5kg"
            },
            {
              label: "6kg"
            },
            {
              label: "7kg"
            },
            {
              label: "8kg"
            },
            {
              label: "9kg"
            },
            {
              label: "10kg"
            }
          ]
        },
        {
          value: "dangao",
          label: "蛋糕",
          children: [
            {
              label: "小于5kg"
            },
            {
              label: "5kg"
            },
            {
              label: "6kg"
            },
            {
              label: "7kg"
            },
            {
              label: "8kg"
            },
            {
              label: "9kg"
            },
            {
              label: "10kg"
            }
          ]
        },
        {
          value: "xianhua",
          label: "鲜花",
          children: [
            {
              label: "小于5kg"
            },
            {
              label: "5kg"
            },
            {
              label: "6kg"
            },
            {
              label: "7kg"
            },
            {
              label: "8kg"
            },
            {
              label: "9kg"
            },
            {
              label: "10kg"
            }
          ]
        },
        {
          value: "qita",
          label: "其他",
          children: [
            {
              label: "小于5kg"
            },
            {
              label: "5kg"
            },
            {
              label: "6kg"
            },
            {
              label: "7kg"
            },
            {
              label: "8kg"
            },
            {
              label: "9kg"
            },
            {
              label: "10kg"
            }
          ]
        }
      ]
    };
  },
  computed: {
	  totalMarks:function(){
	  let totalmoney = 7;
	  let a ;
	  let b;
	  if(this.moneyValue == ''){
		  	a  = 0;
	  }else{
		  a = parseFloat(this.moneyValue)
	  }
	  if(this.xiaofei == ''){
		  b = 0
	  }else{
		  b = parseFloat(this.xiaofei)
	  }
	  totalmoney = a + b + totalmoney
	//   console.log(this.moneyValue)	
      return parseFloat(totalmoney);
    }
  },
  mounted() {
     this.getLngLatLocation()
     
  },
  methods: {
    chooseAdress() {
      this.$router.push({
        path: "./sendAddress",
      });
	},
	chooseAdress2(){
		this.$router.push({
        path: "./arriveAddress",
      });
	},
      getLngLatLocation() {
		  let _this = this;
        AMap.plugin('AMap.CitySearch', function () {
          var citySearch = new AMap.CitySearch()
          citySearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              // 查询成功，result即为当前所在城市信息
			//   console.log('通过ip获取当前城市：',result)
			  _this.city = result.city
            }
          })
        })
      }
    }
  }
</script>

<style lang="less">
.mainbox {
  .tab {
    font-size: 36px;
    text-align: center;
    padding-bottom: 10px;
    margin-bottom: 20px;
    padding: 40px 20px 20px;
    // border:1px solid blue;
    div {
      margin-right: 50px;
      display: inline-block;
      padding-bottom: 10px;
    }
    .active {
      border-bottom: 4px solid #1a489d;
      color: #1a489d;
    }
  }
  .position {
    margin-top: -100px;
    margin-left: 20px;
  }
  .logo {
    margin-top: 40px;
    img {
      width: 100%;
    }
  }
  .chufa,
  .daoda {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 10px;
    border-bottom: 1px solid #cfcccc;
    .label {
      width: 10%;
      text-align: center;
    }
    .content {
      box-sizing: border-box;
      padding: 10px;
      width: 85%;
    }
    .enter {
      text-align: center;
    }
  }
  .time {
    padding: 10px;
    .el-input--suffix .el-input__inner {
      padding: 40px;
    }
    .el-input__inner {
      font-size: 30px;
    }
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 30%;
      .el-input__inner {
        padding: 40px;
      }
    }
  }
  .remark,
  .huosunfei,
  .xiaofei {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #cfcccc;
    .name {
      text-align: center;
      width: 20%;
    }
    .el-input {
      width: 80%;
      .el-input__inner {
        padding: 40px;
        border: none;
      }
    }
  }
  .footer {
    width: 100%;
    height: 100px;
    border-radius: 10px;
    background-color: #1a489d;
    color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	div{
		flex: 1;
		text-align: center;
	}
	.total{
		div{
			display: inline-block;
			margin-right: 20px;
		}
	}
  }
}
</style>
