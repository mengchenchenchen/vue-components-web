<template>
  <div id="register">
    <div class="app_width">
      <img src="../../assets/login.png" alt />
      <div class="cancel">
        <router-link
          :to="{
            name: 'index',
            params: {
              msg: ''
            }
          }"
        >取消</router-link>
      </div>
      <div class="login_logo">
        <img src="../../assets/login_logo.png" alt />
      </div>
      <form>
        <input type="text" placeholder="请输入手机号" v-model="phoneVal" ref="val" style="color:white" />
        <br />
        <input type="text" placeholder="密码" v-model="pwd" ref="val1" style="color:white" />
        <br />

        <input type="button" value="登录" @click="login" />
      </form>
      <div class="register" @click="toSet">
        <div class="icon">
          <span class="right">还没有账号，去注册账号>></span>
        </div>
      </div>
    </div>
    <div class="dialog" v-if="isShow">请输入正确的账号和密码！</div>
  </div>
</template>

<script>
import api from "@/util/api";
export default {
  data() {
    return {
      phoneVal: "",
      pwd: "",
      isShow: false,
      permissions: ""
    };
  },
  mounted() {
    this.permissions = this.$route.query.permissions;
  },
  methods: {
    login() {
      let params = {
        telephone: this.phoneVal,
        password: this.pwd,
        permissions: this.permissions
      };
      if (!/^1[3456789]\d{9}$/.test(this.phoneVal)) {
        alert("手机号码有误，请重填");
        return false;
      } else {
        api.post("/php-ci/index.php/test/login", params).then(res => {
          if (res.data.ret == "200") {
            localStorage.phone = this.phoneVal;
            if (this.permissions == 1) {
              this.$router.push("./Index");
            } else if (this.permissions == 2) {
              this.$router.push("Riderindex");
            } else if (this.permissions == 3) {
              this.$router.push("/adminIndex");
            }
          } else {
            alert("没有找到你的账户，请先注册！");
          }
        });
      }
    },
    toSet() {
      let _this = this;
      this.$router.push({
        path: "./set",
        query: { permissions: _this.permissions }
      });
    }
  }
};
</script>

<style lang="less">
.app_width {
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .cancel {
    position: absolute;
    left: 40px;
    top: 40px;
    a {
      color: white;
      text-decoration: none;
    }
  }
  .login_logo {
    position: absolute;
    left: 0;
    top: 200px;
    text-align: center;
    width: 100%;
    img {
      width: 160px;
      height: 160px;
    }
  }
  form {
    position: absolute;
    top: 450px;
    left: 0;
    width: 100%;
    text-align: center;
    input {
      width: 460px;
      text-align: center;
      background-color: transparent;
      border: 1px solid #504e4d;
      height: 80px;
      margin-bottom: 20px;
    }
    input:last-child {
      border: none;
      background-color: #e7b800;
      color: white;
    }
  }
  .register {
    position: absolute;
    top: 750px;
    left: 0;
    width: 100%;
    .icon {
      width: 460px;
      margin: auto;
      span {
        display: inline-block;
        padding: 10px;
        color: #757575;
      }
      span:last-child {
        float: right;
      }
    }
  }
  .other_ways {
    position: absolute;
    left: 0;
    top: 850px;
    width: 100%;
    text-align: center;
    img {
      width: 80px;
      height: 80px;
    }
    .sina {
      margin-right: 60px;
    }
  }
}
.dialog {
  width: 160px;
  height: 100px;
  background-color: #dd5044;
  color: white;
  position: fixed;
  top: 260px;
  left: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px;
  line-height: 30px;
}
</style>
<style>
.el-message-box {
  width: auto;
}
</style>
