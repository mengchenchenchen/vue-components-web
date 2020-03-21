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
