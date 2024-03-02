import {U as C} from "./UserItem-db9f1dba.js";
import {u as g} from "./useDate-0b7f99ef.js";
import {u as y} from "./useNotify-cedc1ad3.js";
import {
    d as B,
    B as I,
    z as T,
    A as w,
    r as u,
    f as D,
    G as F,
    g as t,
    o as m,
    b as N,
    j as e,
    i as a,
    t as n,
    l as c,
    q as p,
    u as R,
    h as V,
    k as A,
    m as U
} from "./index-d31968a7.js";
import {u as z, a as j} from "./useRequest-4cb19bee.js";
import {F as E} from "./FeedbackApi-dd3975b5.js";
import "./avatar-dc521f05.js";
import "./UserApi-7044f7f4.js";
import "./useTimes-c127d28f.js";

const G = {class: "feedback-detail"}, L = {class: "text-caption"}, M = ["textContent"], Q = ["textContent"], S = B({
    __name: "TheFeedbackDetail", setup(H) {
        y(), I();
        const f = z(), r = j();
        T();
        const b = w();
        let l = u(parseInt(b.params.id)), o = u({});
        D(async () => {
            await d()
        }), F(i => {
            l.value = parseInt(i.params.id), d()
        });

        async function d() {
            r.start(), o.value = await f.run(E.getById(l.value)).finally(r.close) ?? {}
        }

        return (i, J) => {
            const s = t("q-item-section"), _ = t("q-item-label"), q = t("q-chip"), h = t("q-item"),
                v = t("q-separator"), x = t("q-card-section"), k = t("q-card");
            return m(), N("div", G, [e(h, {
                class: "q-table--bordered rounded-borders",
                clickable: ""
            }, {
                default: a(() => [e(s, {side: ""}, {
                    default: a(() => [e(C, {"user-id": o.value.userId}, null, 8, ["user-id"])]),
                    _: 1
                }), e(s, null, {
                    default: a(() => [e(_, {textContent: n(o.value.content)}, null, 8, ["textContent"])]),
                    _: 1
                }), e(s, {side: ""}, {
                    default: a(() => [e(q, {
                        label: "已反馈",
                        color: "red",
                        "text-color": "white",
                        size: "xs",
                        square: ""
                    }), c("div", L, [p(" 创建于 "), c("span", {textContent: n(R(g)(o.value.createTime))}, null, 8, M)])]),
                    _: 1
                })]), _: 1
            }), o.value.feedback ? (m(), V(k, {
                key: 0,
                flat: "",
                bordered: "",
                class: "q-mt-md bg-transparent"
            }, {
                default: a(() => [e(_, {header: "", class: "bg-white"}, {
                    default: a(() => [p("反馈内容")]),
                    _: 1
                }), e(v), e(x, null, {
                    default: a(() => [c("div", {textContent: n(o.value.feedback)}, null, 8, Q)]),
                    _: 1
                })]), _: 1
            })) : A("", !0)])
        }
    }
});
const te = U(S, [["__scopeId", "data-v-4b619547"]]);
export {te as default};
