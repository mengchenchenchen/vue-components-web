<template>
  <div>
    <div v-html="iframe_html"></div>
  </div>
</template>
<script>
import mapFactory from "./map";
export default {
  components: {},
  props:{
    path:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      list: [
        [121.432386, 31.173544],
        [121.435393, 31.17373],
        [121.443005, 31.17043]
      ]
    };
  },
  computed: {
    filter_code() {
      return mapFactory(JSON.stringify(this.path)).replace(/"/g, "'");
    },
    iframe_html() {
      return `
      <iframe srcdoc="${this.filter_code}" 
      width="100%" height="300px" 
       style="box-sizing:border-box;padding: 0 1rem;border:none;">
      </iframe>
      `;
    }
  },
  methods: {}
};
</script>
<style scoped>
</style>