import util from "@/util/index";

export default {
  get(name) {
    const result = localStorage.getItem(name);
    if (/^[{\[].*[}\]]$/g.test(result)) {
      return JSON.parse(result);
    }
    return result;
  },
  set(name, value) {
    if (typeof value === "object") {
      localStorage.setItem(name, JSON.stringify(value));
    } else {
      localStorage.setItem(name, value);
    }
  },
  clear() {
    localStorage.clear();
  },
  setDataToLocal(state, name) {
    this.set(name, state[name]);
  },
  getDataFromLocal(state, name) {
    const empty = util.check_empty(state[name]);
    if (empty) {
      Object.assign(state[name], this.get(name));
    }
  },
  getSession(name) {
    const result = sessionStorage.getItem(name);
    if (/^[{\[].*[}\]]$/g.test(result)) {
      return JSON.parse(result);
    }
    return result;
  },
  setSession(name, value) {
    if (typeof value === "object") {
      sessionStorage.setItem(name, JSON.stringify(value));
    } else {
      sessionStorage.setItem(name, value);
    }
  },
  clearSession() {
    sessionStorage.clear();
  }
};
