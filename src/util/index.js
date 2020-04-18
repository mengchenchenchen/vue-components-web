export default {
  px2rem(len) {
    return len * 0.0312 + "rem";
  },
  check_empty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const el = obj[key];
        if (el == undefined || el === "") {
          return true;
        }
      }
    }
    return false;
  }
};
