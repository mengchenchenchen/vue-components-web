<template>
  <div>
    <mc-header bg="#1a489d" padding="15px">
      <span slot="center" class="text-bold" style="position:relative;left:0.5rem;">物流详情</span>
    </mc-header>
    <mc-flex style="margin:1rem .5rem;">
      <img :src="watch" style="width:5rem;flex:3 3 auto;" />
      <mc-flex column style="flex:7 7 auto;">
        <span style="margin-top:.8rem .5rem;font-size:1rem;" class="text-bold">{{item.title}}</span>
        <span style="color:#888;font-size:.8rem;">订单号:{{item.id}}</span>
      </mc-flex>
    </mc-flex>
    <map-box :path="points"></map-box>
    <el-timeline style="padding:1rem;">
      <el-timeline-item
        v-for="(activity, index) in item.activities"
        :key="index"
        :color="activity.color"
        :type="activity.type"
        :timestamp="activity.timestamp"
      >{{activity.content}}</el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
import McFlex from "@comp/flex";
import McHeader from "@/components/header";
import MapBox from "@comp/map-box";
export default {
  components: { McFlex, McHeader, MapBox },
  props: {
    item: {
      type: Object,
      default() {
        return {
          title: "这是标题，这是标题",
          id: "1823828738128378213821",
          activities: [
            {
              content: "江苏师范大学",
              timestamp: "2020-03-22",
              type:'info',
              point: [117.186728, 34.202541]
            },
            {
              content: "扬州",
              timestamp: "2020-03-21",
              type:'warning',
              point: [119.431369, 32.400225]
            },
            {
              content: "无锡",
              timestamp: "2020-03-20",
              type:'success',
              point: [120.325938, 31.50809]
            },
            {
              content: "上海",
              timestamp: "2020-03-19",
              type:'success',
              point: [121.489567, 31.231834]
            }
          ]
        };
      }
    }
  },
  data() {
    return {
      watch: require("@/assets/watch.jpg")
    };
  },
  computed: {
    points() {
      const { activities } = this.item;
      const arr = JSON.parse(JSON.stringify(activities));
      return arr
        .sort((a, b) => this.get_date(a.timestamp) - this.get_date(b.timestamp))
        .map(el => el.point);
    }
  },
  methods: {
    get_date(val) {
      const date = new Date(val);
      return date.getTime();
    }
  }
};
</script>
<style scoped>
</style>