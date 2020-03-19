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
    clear(name, value) {
        localStorage.clear()
    },
    getSession(name) {
        return sessionStorage.getItem(name)
    },
    setSession(name, value) {
        return sessionStorage.setItem(name, value)
    },
    clearSession() {
        sessionStorage.clear()
    }
}