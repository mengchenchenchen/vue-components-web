<template>
  <div class="mainbox">
    <mc-header :back="true">
      <span slot="center" class="text-bold">用户中心</span>
    </mc-header>
    <div class="header">
      <div class="adatar">
        <img :src="adatar?adatar:require('../../assets/lixian.jpg')" alt />
        <input
          type="file"
          name
          accept="image/gif, image/jpeg, image/jpg, image/png"
          @change="fileChange"
        />
      </div>
      <div class="userInfo">
        <div class="name">{{username}}</div>
        <div class="phone">{{phone}}</div>
      </div>
    </div>
    <div class="loginOut">
      <button @click="loginOut">退出登录</button>
    </div>
    <Footer-rider></Footer-rider>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>
import api from "@/util/api";
import FooterRider from "@/components/footerRider";
import McHeader from "@/components/header";

export default {
  name: "adatar",
  components: {
    McHeader,
    FooterRider
  },
  data() {
    return {
      adatar: "", //用户头像
      phone: "", //用户手机号
      username: "" //用户名
    };
  },
  mounted() {
    this.$store.commit("getUserInfo");
    const { phone } = this.$store.state.user;

    api
      .post("/php-ci/index.php/test/user_info", { telephone: phone })
      .then(res => {
        this.username = res.data[0].name;
      });
  },
  methods: {
    //头像选择
    fileChange(e) {
      var that = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        that.adatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    back() {
      this.$router.go(-1);
    },
    loginOut() {
      window.localStorage.clear();
      this.$store.dispatch("initUserInfo");
      this.$router.replace("/login");
    }
  }
};
</script>
<style lang="less" scoped>
.mainbox {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #ececec;
  .tab {
    font-size: 40px;
    padding: 40px 20px 20px;
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
  }
  .header {
    display: flex;
    background-color: #fff;
    padding: 20px;
    .adatar {
      position: relative;
      width: 168px;
      height: 168px;
      margin-right: 20px;
      img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      input {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        outline: none;
        opacity: 0;
        cursor: pointer;
        &:focus {
          box-shadow: none;
        }
      }
    }
    .userInfo {
      font-size: 38px;
      width: 300px;
      height: 168px;
      box-sizing: border-box;
      padding: 20px;
      .name {
        margin: 20px auto;
      }
    }
  }
  .loginOut {
    width: 90%;
    height: 100px;
    margin: 30px auto;
    button {
      width: 100%;
      height: 100px;
      border: none;
      background-color: #1a489d;
      color: #fff;
      border-radius: 10px;
      font-size: 38px;
    }
  }
}
</style>