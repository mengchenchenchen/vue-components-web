<template>
  <div class="mainbox">
    <el-footer style="height: auto;">
      <div class="footerbox">
        <router-link
          :to="{
            name: 'Index',
            params: {
              msg: ''
            }
          }"
        >
          <i class="recommend"></i>
          <p>首页</p>
        </router-link>
        <router-link
          :to="{
            name: 'order',
            params: {
              msg: ''
            }
          }"
        >
          <i class="shop"></i>
          <p>订单</p>
        </router-link>
        <router-link
          :to="{
            name: 'register',
            params: {
              msg: ''
            }
          }"
        >
          <i class="mine"></i>
          <p>我的</p>
        </router-link>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
.el-footer {
  padding: 0;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.footerbox {
  padding: 20px 0;
  max-width: 750px;
  min-width: 150px;
  width: 100%;
  margin: auto;
  display: flex;
  border-top: 5px solid #e7e7e7;
  background-color: #fff;
  a {
    flex: 1;
    display: block;
    color: #333;
    font-size: 18px;
    line-height: 20px;
    text-decoration: none;
    text-align: center;
    i {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-repeat: no-repeat;
      background-size: contain;
      margin-bottom: 10px;
    }
    p {
        padding: 5px;
    }
    .recommend {
      background-image: url(../assets/home_icon_off.png);
    }
    .shop {
      background-image: url(../assets/cart_icon_off.png);
    }
    .mine {
      background-image: url(../assets/my_icon_off.png);
    }
  }
  .router-link-active {
    color: #402fdb;
    .recommend {
      background-image: url(../assets/home_icon_on.png);
    }
    .shop {
      background-image: url(../assets/cart_icon_on.png);
    }
    .mine {
      background-image: url(../assets/my_icon_on.png);
    }
  }
}
</style>
