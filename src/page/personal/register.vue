<template>
  <div id="register">
    <div class="app_width">
      <img src="../../assets/login.png" alt="" />
      <div class="cancel">
        <router-link
          :to="{
            name: 'index',
            params: {
              msg: ''
            }
          }"
        >
          取消
        </router-link>
      </div>
      <div class="login_logo">
        <img src="../../assets/login_logo.png" alt="" />
      </div>
      <form>
        <input type="text" placeholder="邮箱/手机号" v-model="val" ref="val" style="color:white" />
        <br />
        <input type="text" placeholder="密码" v-model="val1" ref="val1" style="color:white"/>
        <br />
        <input type="button" value="登录" @click="fun" />
      </form>
      <div class="register">
        <div class="icon">
          <span class="left">
            <router-link
              :to="{
                name: 'reReg',
                params: {
                  msg: ''
                }
              }"
            >
              忘记密码?
            </router-link>
          </span>
          <span class="right">
            <router-link
              :to="{
                name: 'set',
                params: {
                  msg: ''
                }
              }"
            >
              注册账号
            </router-link>
          </span>
        </div>
      </div>
      <div class="other_ways">
        <a
          href="https://api.weibo.com/2/oauth2/authorize?client_id=3697372087&response_type=token&display=js&transport=html5&referer=http://m.xymens.com/index.php/Home/User/login.html"
          target="_blank"
        >
          <img src="../../assets/sina_login@2x.png" class="sina" />
        </a>
        <el-button type="text" @click="open">
          <img src="../../assets/wx_login@2x.png" alt="" />
        </el-button>
      </div>
    </div>
    <div class="dialog" v-if="isShow">
        请输入正确的账号和密码！
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      val: "",
      val1: "",
      isShow:false,
    };
  },
  methods: {
    fun() {
      if(this.val == '18251723449' &&  this.val1 == "123456"){
        this.$router.push({path:'/customerIndex'})
      }else{
        
        this.isShow=true;
      }
    },
    open() {
      this.$confirm("微信登录目前只支持app下载,请问是否下载?", {
        confirmButtonText: "取消",
        cancelButtonText: "下载XYAPP",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "已取消下载!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "下载成功!"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
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
        a {
          text-decoration: none;
          color: #757575;
        }
      }
      span:last-child {
        float: right;
      }
    }
  }
  .other_ways {
    position: absolute;
    left: 0;
    top:850px;
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
.dialog{
  width:160px;
  height: 100px;
  background-color: #dd5044;
  color:white;
  position: fixed;
  top:260px;
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
