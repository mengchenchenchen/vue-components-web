import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
import storeUtil from "@/util/store";
const store = new Vuex.Store({
  state: {
    user: {
      name: "",
      phone: "",
      address: ""
    },
    senderInfo: {
      addr: "",
      gate: "",
      name: "",
      phone: ""
    }
  },
  mutations: {
    updateUserInfo(state, payload) {
      Object.assign(state.user, payload);
      storeUtil.setDataToLocal(state, "user");
    },
    getUserInfo(state) {
      storeUtil.getDataFromLocal(state, "user");
    },
    updateSenderInfo(state, payload) {
      Object.assign(state.senderInfo, payload);
      storeUtil.setDataToLocal(state, "senderInfo");
    },
    getSenderInfo(state) {
      storeUtil.getDataFromLocal(state, "senderInfo");
    }
  },
  actions: {
    initUserInfo(context) {
      context.commit("updateUserInfo", { name: "", phone: "", address: "" });
      localStorage.auth = "false";
    }
  }
});

export default store;
