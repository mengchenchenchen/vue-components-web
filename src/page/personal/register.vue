
<template>
  <div id="set">
    <div class="set">
      <img src="../../assets/login.png" alt />
      <div class="return" @click="back">返回</div>
      <form>
        <input type="text" placeholder="输入昵称" class="sendName" v-model="nameValue" />
        <input type="text" placeholder="输入手机号" v-model="phoneNum" />
        <input type="password" placeholder="设置密码" v-model="pwd" />
        <div class="chooseButton">
          <input type="radio" id="one" value="1" v-model="permissions" />
          <label for="one">个人用户</label>
          <input type="radio" id="two" value="2" v-model="permissions" />
          <label for="two">派送员</label>
          <input type="radio" id="three" value="3" v-model="permissions" />
          <label for="three">管理员</label>
        </div>
        <el-button type="text" @click="setSuccess" class="success">完成注册</el-button>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/util/api";

export default {
  name: "set",
  data() {
    return {
      nameValue: "", //昵称
      phoneNum: "", //手机号
      pwd: "", //密码
      permissions: "" //权限的值
    };
  },
  mounted() {
  
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getNum() {
      if (this.phoneNum == "") {
        this.$alert("请填写电话号码", {
          dangerouslyUseHTMLString: true
        });
      }
    },
    setSuccess() {
      
      let params = {
        name: this.nameValue,
        telephone: this.phoneNum,
        password: this.pwd,
        permissions: this.permissions
      };
      api.post("/php-ci/index.php/test/register", params).then(res => {
        //18752190420   000000
        if (res.data.ret == "200") {
          alert("完成注册！");
          localStorage.phone = this.phoneNum;
          if (this.permissions == 1) {
            this.$router.push("./home");
          } else if (this.permissions == 2) {
            this.$router.push("Riderindex");
          } else if (this.permissions == 3) {
            this.$router.push("/adminIndex");
          }
        }
        if (res.data.ret == "600") {
          alert(res.data.data);
          this.$router.push("./register");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.set {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .return {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
  }
  form {
    position: absolute;
    top: 100px;
    left: 0;
    text-align: center;
    font-size: 34px;
    &>input {
      text-align: center;
      padding: 10px;
      width: 80%;
      background-color: transparent;
      margin-bottom: 10px;
      border: 2px solid #44413f;
      box-sizing: border-box;
      padding: 20px;
      color: white;
    }
    .sendName {
      width: 50%;
      border: none;
      border-bottom: 2px solid #44413f;
      margin-bottom: 20px;
    }
    .sendNum {
      width: 50%;
    }
    .getNum {
      width: 30%;
      border: none;
      color: #e7b800;
      background-color: transparent;
    }
    .chooseButton {
      input{

      }
      color: #757575;
      margin-bottom: 30px; 
    }
    .success {
      width: 80%;
      color: white;
      background-color: #e7b800;
      border: none;
      margin-top: 50px;
      box-sizing: border-box;
      padding: 30px;
    }
  }
}
</style>

<style lang="less">
.success {
  width: auto;
}
.el-message-box {
  background-color: #e9bf1a;
  width: 60%;
  .el-message-box__content {
    color: white;
    text-align: center;
    font-size: 20px;
  }
  .el-button {
    display: none;
  }
}
</style>