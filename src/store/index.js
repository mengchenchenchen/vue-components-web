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
      id: "",
      addr: "",
      gate: "",
      name: "",
      phone: ""
    },
    receiverInfo: {
      id: "",
      addr: "",
      gate: "",
      name: "",
      phone: ""
    },
    itemInfo: {
      goods: "",
      number: ""
    },
    valueAdded: "",
    remark: ""
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
    },
    updateReceiverInfo(state, payload) {
      Object.assign(state.receiverInfo, payload);
    },
    updateItemInfo(state, payload) {
      Object.assign(state.itemInfo, payload);
    },
    updateValueAdded(state, payload) {
      state.valueAdded = payload;
    },
    updateRemake(state, payload) {
      state.remark = payload;
    }
  },
  actions: {
    initUserInfo(context) {
      context.commit("updateUserInfo", { name: "", phone: "", address: "" });
      localStorage.auth = "false";
    },
    initOrderInfo(context) {
      context.commit("updateItemInfo", { goods: "", number: "" });
      context.commit("updateValueAdded", "");
      context.commit("updateRemake", "");
    }
  }
});

export default store;
