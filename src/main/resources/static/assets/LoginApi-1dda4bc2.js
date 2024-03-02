import {R as n, H as t} from "./useRequest-4cb19bee.js";

const g = {
    getLogin: o => new n(t.GET, "/login", {ignore: o}),
    getCaptcha: () => new n(t.GET, "/login/captcha"),
    register: o => new n(t.POST, "/login", o),
    login: o => new n(t.PUT, "/login", o),
    logout: () => new n(t.DELETE, "/login")
};
export {g as L};
