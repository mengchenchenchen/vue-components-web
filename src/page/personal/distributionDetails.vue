<template>
  <div class="mainbox">
    <mc-header bg="#1a489d" :size="40" padding="15px">
      <i slot="left" class="el-icon-arrow-left" @click="back"></i>
      <span slot="center" class="text-bold">派送详情</span>
    </mc-header>

    <div id="container"></div>

    <div class="timeline">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >{{activity.content}}</el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>


<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=855b40e3566cb2b1e84ba5d13d294920"></script>

<script>
import McHeader from "@/components/header";

export default {
  components: {
    McHeader
  },
  data() {
    return {
      msg: "",
      activities: [
        {
          content: "四川成都",
          timestamp: "2020-01-06 20:46",
          size: "large",
          type: "primary",
        },
        {
          content: "重庆",
          timestamp: "2020-01-05 20:46",
        },
        {
          content: "江苏无锡",
          timestamp: "2020-01-04 20:46",
          size: "large"
        },
        {
          content: "江苏徐州",
          timestamp: "2020-01-03 20:46"
        }
      ]
    };
  },
  mounted() {
    this.getMap();
  },
  methods: {
    back(){
        window.history.go(-1)
    },
    getMap() {
      let map = new AMap.Map("container", {
        resizeEnable: true
      });
      AMap.plugin("AMap.CitySearch", function() {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            // console.log(result);
          }
        });
      });
    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#container {
  width: 95%;
  height: 400px;
}
.timeline {
  width: 50%;
  margin:auto;
  margin-top: 60px;
  font-size: 40px;
  .el-timeline{
    font-size: 34px;
  }
  .el-timeline-item{
    padding-bottom:1.6rem;
  }
}
</style>
