<template>
  <mc-flex align="center">
    <div class="label">{{name}}:</div>
    <input
      class="value"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input',$event.target.value)"
    />
  </mc-flex>
</template>
<script>
import McFlex from "@/components/flex";
export default {
  model: {
    methods: "input",
    model: "value"
  },
  props: {
    name: {
      type: String,
      default: "NA"
    },
    value: {
      type: String,
      default: "NA"
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  components: { McFlex },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style scoped>
.label {
  width: 30%;
  margin: 0 3%;
  font-size: 1.2rem;
  /* text-align: justify; */
  /* text-align-last: justify; */
  /* background-color: red; */
}
.value {
  width: 60%;
  font-size: 1.1rem;
  padding: 0.2rem 0.5rem;
  outline: 0;
  border: 0;
  /* border-radius: 4px; */
  /* border: 1px solid #eee; */
  /* box-shadow: 1px 1px 1px #eee */
}
</style>
