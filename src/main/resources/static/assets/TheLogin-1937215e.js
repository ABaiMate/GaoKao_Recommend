import {u as T, F as I, a as A} from "./useValid-d1447d9b.js";
import {F as B} from "./FormInputPassword-77e6c8e9.js";
import {u as R} from "./useFormRules-cbf82972.js";
import {
    d as x,
    p as V,
    r as k,
    c as U,
    f as y,
    g as s,
    o as w,
    h as N,
    i as n,
    j as t,
    m as M,
    B as D,
    z as $,
    A as S,
    u as h,
    l as L,
    b as G,
    k as j,
    x as z,
    y as E
} from "./index-d31968a7.js";
import {u as O, a as P} from "./useRequest-4cb19bee.js";
import {L as F} from "./LoginApi-1dda4bc2.js";
import {u as Q} from "./useTimes-c127d28f.js";
import {u as H} from "./useNotify-cedc1ad3.js";
import {u as J} from "./useLoginInfo-0c571403.js";

const K = x({
    __name: "FormCaptchaInput",
    props: {modelValue: {}, token: {}, env: {}},
    emits: ["update:modelValue", "update:token", "update:env"],
    setup(r, {emit: _}) {
        const c = _, f = O();
        let d = Q(), g = V(d, "isLoading"), b = V(d, "incrTimes"), q = V(d, "decrTimes"), o = k({}), i = U(() => {
            if (o.value.base64) return "data:image/png;base64," + o.value.base64
        });
        y(async () => {
            await l()
        });

        async function l() {
            b.value(), o.value = await f.run(F.getCaptcha()).finally(q.value), c("update:token", o.value.token), c("update:env", o.value.env)
        }

        function m(e) {
            c("update:modelValue", e)
        }

        return (e, v) => {
            const p = s("q-img"), u = s("q-inner-loading"), C = s("q-input");
            return w(), N(C, {
                class: "form-input col q-mb-md",
                "model-value": e.modelValue,
                "onUpdate:modelValue": m,
                outlined: "",
                dense: "",
                placeholder: "验证码"
            }, {
                before: n(() => [t(p, {
                    class: "captcha cursor-pointer q-mx-md",
                    src: i.value,
                    onClick: l
                }, null, 8, ["src"]), t(u, {showing: g.value}, null, 8, ["showing"])]), _: 1
            }, 8, ["model-value"])
        }
    }
});
const W = M(K, [["__scopeId", "data-v-c0da4110"]]), X = r => (z("data-v-c895c7bb"), r = r(), E(), r),
    Y = X(() => L("div", {class: "text-subtitle1 text-bold text-white"}, "登 录", -1)),
    Z = {class: "text-center q-mt-md"}, ee = {key: 0, class: "row q-mt-md q-gutter-x-sm"}, oe = x({
        __name: "TheLogin", setup(r) {
            const {validNull: _} = R();
            D();
            const c = T(), f = P(), d = O(), g = $();
            S();
            const b = H(), {clearLoginInfo: q} = J(!0);
            let o = k({}), i = k("prod");
            y(async () => {
            });

            async function l(m) {
                m === "COMMON" ? o.value = {username: "1", password: "1"} : m === "ADMIN" && (o.value = {
                    username: "2",
                    password: "2"
                }), q(), await c.submit(), f.start();
                const e = await d.run(F.login({...o.value})).finally(f.close);
                b.success("登录成功");
                const p = {COMMON: "/index", ADMIN: "/admin"}[e.roleCode];
                await g.push(p)
            }

            return (m, e) => {
                const v = s("q-card-section"), p = s("q-form"), u = s("q-btn"), C = s("q-card");
                return w(), N(C, {class: "login card fixed-center"}, {
                    default: n(() => [t(v, {class: "text-center bg-logo"}, {default: n(() => [Y]), _: 1}), t(v, null, {
                        default: n(() => [t(p, {
                            ref: "formRef",
                            class: "form q-col-gutter-y-md"
                        }, {
                            default: n(() => [t(I, null, {
                                default: n(() => [t(A, {
                                    modelValue: o.value.username,
                                    "onUpdate:modelValue": e[0] || (e[0] = a => o.value.username = a),
                                    placeholder: "用户名",
                                    rules: [a => h(_)(a, !1, "请输入用户名")]
                                }, null, 8, ["modelValue", "rules"])]), _: 1
                            }), t(I, null, {
                                default: n(() => [t(B, {
                                    modelValue: o.value.password,
                                    "onUpdate:modelValue": e[1] || (e[1] = a => o.value.password = a),
                                    placeholder: "密码",
                                    rules: [a => h(_)(a, !1, "请输入密码")]
                                }, null, 8, ["modelValue", "rules"])]), _: 1
                            }), t(I, null, {
                                default: n(() => [t(W, {
                                    modelValue: o.value.captcha,
                                    "onUpdate:modelValue": e[2] || (e[2] = a => o.value.captcha = a),
                                    token: o.value.token,
                                    "onUpdate:token": e[3] || (e[3] = a => o.value.token = a),
                                    env: i.value,
                                    "onUpdate:env": e[4] || (e[4] = a => i.value = a)
                                }, null, 8, ["modelValue", "token", "env"])]), _: 1
                            })]), _: 1
                        }, 512), L("div", Z, [t(u, {
                            class: "full-width bg-login-btn",
                            label: "登 录",
                            onClick: l
                        }), i.value === "dev" ? (w(), G("div", ee, [t(u, {
                            class: "col",
                            outline: "",
                            label: "COMMON LOGIN",
                            onClick: e[5] || (e[5] = a => l("COMMON"))
                        }), t(u, {
                            class: "col",
                            outline: "",
                            label: "ADMIN LOGIN",
                            onClick: e[6] || (e[6] = a => l("ADMIN"))
                        })])) : j("", !0), t(u, {
                            class: "q-mt-md",
                            flat: "",
                            color: "blue",
                            label: "注 册",
                            to: "/register"
                        })])]), _: 1
                    })]), _: 1
                })
            }
        }
    });
const ie = M(oe, [["__scopeId", "data-v-c895c7bb"]]);
export {ie as default};
