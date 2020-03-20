<template>
  <div class="mainbox">
      <div class="box">{{msg}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        msg:{
            type:String,
            default:'下单成功！',
        }
    }

}
</script>

<style lang="less" scoped>
    .mainbox{
        .box{
            position: fixed;
            left: 50%;
            right:50%;
            transform: translate(-50%,-50%);
            width: 260px;
            height: 260px;
            border-radius: 20px;
            background:#1a489d;
            color: #fff;
        }
    }
</style>>
