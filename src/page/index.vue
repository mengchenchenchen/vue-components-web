<template>
  <div class="mainbox">
      <div class="introduce">选择适合你的身份</div>
      <div class="introduce2">开始高效体验</div>
      <div class="label">支持三种身份任意切换</div>
      <div class="customer">
          <div class="info">
                我是 <span>个人用户</span> 
          </div>
          <div class="enter" @click="enterCus">进入 ></div>
      </div>
      <div class="rider">
        <div class="info">
            我是 <span>派送员</span>
        </div>
          <div class="enter" @click="enterRider">进入 ></div>
      </div>
      <div class="admin">
        <div class="info">
            我是 <span>管理员</span>
        </div>
          <div class="enter" @click="enterAdmin">进入 ></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  mounted(){
      
  },
  methods:{
      enterCus(){
          this.$router.push({path:'./register', query:{permissions: 1}})
      },
      enterRider(){
          this.$router.push({path:'/register',query: {permissions: 2}})
      },
      enterAdmin(){
          this.$router.push({path:'/register',query: {permissions: 3}})
      }
  }
}
</script>

<style lang='less'>
.mainbox{
    margin: 0;
    padding: 20px;
    .introduce{
        margin-top: 100px;
        margin-bottom: 20px;
        font-size: 60px;
        color: black;
    }
    .introduce2{
        font-size: 50px;
        color: black;
    }
    .label{
        margin-top: 20px;
        font-size: 26px;
    }
    .customer{
        display: flex;
        font-size: 40px;
        margin-top: 200px;
        padding: 10px 20px 20px;
        border-bottom: 1px solid #666;
        justify-content: space-between;
        .info{
            span{
                padding-bottom: 5px;
                border-bottom: 2px solid red;
            }
        }
        .enter{
            font-size: 30px;
            color:red;
        }
        
    }
    .rider{
        font-size:40px;
        padding: 10px 20px 20px;
        display: flex;
        justify-content: space-between;
         border-bottom: 1px solid #666;
        .info{
            span{
                padding-bottom: 5px;
                border-bottom: 4px solid rgb(212, 0, 255);
            }
        }
        .enter{
            font-size: 30px;
            color: rgb(212, 0, 255);
        }
    }
    .admin{
        font-size:40px;
        padding: 10px 20px 20px; 
        display: flex;
        justify-content: space-between;
         border-bottom: 1px solid #666;
        .info{
            span{
                padding-bottom: 5px;
                border-bottom: 4px solid rgb(212, 0, 255);
            }
        }
        .enter{
            font-size: 30px;
            color: rgb(212, 0, 255);
        }
    }
}
</style>
 