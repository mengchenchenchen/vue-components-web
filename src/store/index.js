import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    name: "emlia",
  },
  mutations: {
    add(state, payload) {
      state.count++;
      console.log(payload);
    },
  },
});

export default store;
