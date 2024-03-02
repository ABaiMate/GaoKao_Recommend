import {
    d as F,
    z as L,
    p as _,
    r as N,
    f as V,
    g as e,
    J as j,
    o as n,
    h as i,
    i as o,
    j as t,
    q as z,
    l as c,
    t as u,
    b as f,
    s as $,
    F as A,
    v as E,
    K as J,
    D as K,
    x as G,
    y as O,
    m as P
} from "./index-d31968a7.js";
import {u as Q} from "./useLoginInfo-0c571403.js";
import {u as W} from "./useRequest-4cb19bee.js";
import {U as X} from "./UserAvatar-c28f9a89.js";
import {U as Y} from "./UserHeaderMenu-d13b6e99.js";
import {u as Z} from "./useMenu-af9bf147.js";
import "./LoginApi-1dda4bc2.js";
import "./avatar-dc521f05.js";
import "./useDialog-abda8b4e.js";
import "./BaseDialog-82865103.js";
import "./useValid-d1447d9b.js";
import "./useNotify-cedc1ad3.js";
import "./UserApi-7044f7f4.js";
import "./UploadUserAvatar-5e232abe.js";
import "./FormInputPassword-77e6c8e9.js";

const ee = a => (G("data-v-51236479"), a = a(), O(), a), te = {class: "col"}, oe = {class: "col-8 text-center q-pl-md"},
    ne = ["textContent"], ae = {key: 1}, se = ee(() => c("span", {class: "q-mx-sm"}, "/", -1)), re = F({
        __name: "TheHome", setup(a) {
            W(), L();
            let q = Q(!0), s = _(q, "loginInfo");
            N("");
            let l = Z(E, "/home", s), v = _(l, "menus"), h = _(l, "activeMenu");
            return V(async () => {
            }), (ce, p) => {
                const g = e("q-toolbar-title"), x = e("q-space"), b = e("q-card-section"), w = e("q-card"), d = e("q-btn"),
                    y = e("q-toolbar"), k = e("q-header"), C = e("q-item-section"), I = e("q-item"), M = e("q-list"),
                    H = e("q-scroll-area"), B = e("q-drawer"), D = e("router-view"), R = e("q-page"),
                    S = e("q-page-container"), T = e("q-layout"), U = j("ripple");
                return n(), i(T, {view: "hHh LpR fFf"}, {
                    default: o(() => [t(k, {
                        elevated: "",
                        class: "bg-linear-gradient2 text-white"
                    }, {
                        default: o(() => [t(y, null, {
                            default: o(() => [t(g, {class: "text-bold"}, {
                                default: o(() => [z(" 高考平台 ")]),
                                _: 1
                            }), t(x), s.value.id ? (n(), i(w, {
                                key: 0,
                                class: "cursor-pointer bg-transparent",
                                flat: ""
                            }, {
                                default: o(() => [t(b, {
                                    horizontal: "",
                                    class: "row justify-between items-center q-gutter-x-md q-px-md"
                                }, {
                                    default: o(() => [c("div", te, [t(X, {
                                        color: "green",
                                        class: "cursor-pointer text-white",
                                        "login-info": s.value
                                    }, null, 8, ["login-info"])]), c("div", oe, [c("span", {textContent: u(s.value.nickname)}, null, 8, ne)])]),
                                    _: 1
                                }), t(Y)]), _: 1
                            })) : (n(), f("div", ae, [t(d, {
                                label: "登录",
                                to: "/login",
                                flat: "",
                                dense: ""
                            }), se, t(d, {label: "注册", to: "/register", flat: "", dense: ""})]))]), _: 1
                        })]), _: 1
                    }), t(B, {
                        "show-if-above": "",
                        side: "left",
                        width: 200,
                        bordered: "",
                        breakpoint: 500
                    }, {
                        default: o(() => [t(H, {class: "fit"}, {
                            default: o(() => [t(M, {
                                class: "menu-list",
                                padding: ""
                            }, {
                                default: o(() => [(n(!0), f(A, null, $(v.value, r => {
                                    var m;
                                    return J((n(), i(I, {
                                        key: r.path,
                                        active: r.path === ((m = h.value) == null ? void 0 : m.path),
                                        class: "q-mx-md q-btn--rounded text-center",
                                        "active-class": "bg-linear-gradient text-white",
                                        clickable: "",
                                        to: r.path,
                                        onContextmenu: p[0] || (p[0] = K(() => {
                                        }, ["prevent"]))
                                    }, {
                                        default: o(() => [t(C, {textContent: u(r.name)}, null, 8, ["textContent"])]),
                                        _: 2
                                    }, 1032, ["active", "to"])), [[U]])
                                }), 128))]), _: 1
                            })]), _: 1
                        })]), _: 1
                    }), t(S, null, {default: o(() => [t(R, {padding: ""}, {default: o(() => [t(D)]), _: 1})]), _: 1})]),
                    _: 1
                })
            }
        }
    });
const ye = P(re, [["__scopeId", "data-v-51236479"]]);
export {ye as default};
