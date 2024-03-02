import {U as B} from "./UserComment-3b891e0d.js";
import {U as g} from "./UserItem-db9f1dba.js";
import {u as h} from "./useDate-0b7f99ef.js";
import {u as x} from "./useNotify-cedc1ad3.js";
import {
    d as y,
    B as C,
    z as T,
    A as k,
    r as d,
    f as I,
    G as D,
    g as o,
    o as u,
    b as N,
    j as e,
    i as a,
    t as m,
    l as n,
    q as U,
    u as w,
    h as R,
    k as V,
    m as A
} from "./index-d31968a7.js";
import {u as L, a as M} from "./useRequest-4cb19bee.js";
import {B as H} from "./BbsApi-9114505e.js";
import "./UserAvatar-c28f9a89.js";
import "./avatar-dc521f05.js";
import "./UserCommentApi-5c7fae53.js";
import "./QueryPagination-33101695.js";
import "./usePage-8ca7a06e.js";
import "./useLoginInfo-0c571403.js";
import "./LoginApi-1dda4bc2.js";
import "./UserApi-7044f7f4.js";
import "./useTimes-c127d28f.js";

const S = {class: "bbs-detail"}, j = {class: "text-caption"}, z = ["textContent"], E = ["innerHTML"], G = y({
    __name: "TheBbsDetail", setup(Q) {
        x(), C();
        const _ = L(), r = M();
        T();
        const p = k();
        let i = d(parseInt(p.params.id)), t = d({});
        I(async () => {
            await l()
        }), D(c => {
            i.value = parseInt(c.params.id), l()
        });

        async function l() {
            r.start(), t.value = await _.run(H.getById(i.value)).finally(r.close) ?? {}
        }

        return (c, F) => {
            const s = o("q-item-section"), f = o("q-item-label"), b = o("q-item"), q = o("q-card-section"),
                v = o("q-card");
            return u(), N("div", S, [e(b, {
                clickable: "",
                class: "q-table--bordered rounded-borders bg-white"
            }, {
                default: a(() => [e(s, {side: ""}, {
                    default: a(() => [e(g, {"user-id": t.value.userId}, null, 8, ["user-id"])]),
                    _: 1
                }), e(s, null, {
                    default: a(() => [e(f, {textContent: m(t.value.title)}, null, 8, ["textContent"])]),
                    _: 1
                }), e(s, {side: ""}, {
                    default: a(() => [n("div", j, [U(" 创建于 "), n("span", {textContent: m(w(h)(t.value.createTime))}, null, 8, z)])]),
                    _: 1
                })]), _: 1
            }), e(v, {
                class: "q-mt-md",
                flat: "",
                bordered: ""
            }, {
                default: a(() => [e(q, null, {
                    default: a(() => [n("div", {innerHTML: t.value.content}, null, 8, E)]),
                    _: 1
                })]), _: 1
            }), t.value.id ? (u(), R(B, {
                key: 0,
                "target-id": t.value.id,
                "target-type": "BBS",
                class: "q-mt-md"
            }, null, 8, ["target-id"])) : V("", !0)])
        }
    }
});
const ie = A(G, [["__scopeId", "data-v-bfc7657a"]]);
export {ie as default};
