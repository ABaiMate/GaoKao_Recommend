import {Q as c} from "./QueryChipSelect-b4a32d7e.js";
import {Q as g} from "./QueryContainer-778ca57d.js";
import {Q as h} from "./QuerySearchCard-abfe6caa.js";
import {Q as C} from "./QueryPagination-33101695.js";
import {T as j} from "./TableContainer-6b49de73.js";
import {Q} from "./QueryInput-b0beacee.js";
import {u as V} from "./useNotify-cedc1ad3.js";
import {u as q, a as F} from "./useRequest-4cb19bee.js";
import {
    d as S,
    B as b,
    z as M,
    r as x,
    f as N,
    o as p,
    b as m,
    j as l,
    i as d,
    F as T,
    s as U,
    x as I,
    y as B,
    l as o,
    t as n,
    m as P
} from "./index-d31968a7.js";
import {u as k} from "./usePage-8ca7a06e.js";
import {M as w} from "./MajorApi-605bf878.js";

const r = u => (I("data-v-84f0fa2f"), u = u(), B(), u), L = {class: "major"},
    R = r(() => o("th", {class: "text-left"}, "专业代码", -1)), z = r(() => o("th", {class: "text-left"}, "专业名称", -1)),
    A = r(() => o("th", {class: "text-left"}, "专业类型", -1)), D = r(() => o("th", {class: "text-left"}, "专业门类", -1)),
    E = r(() => o("th", {class: "text-left"}, "授予门类", -1)), G = r(() => o("th", {class: "text-left"}, "修业年限", -1)),
    H = ["textContent"], J = ["textContent"], K = ["textContent"], O = ["textContent"], W = ["textContent"],
    X = ["textContent"], Y = S({
        __name: "TheMajor", setup(u) {
            V(), b();
            const y = q(), f = F(), {toPage: v} = k();
            M();
            const _ = ["哲学", "经济学", "法学", "教育学", "文学", "历史学", "理学", "工学", "农学", "医学", "管理学", "艺术学"];
            let a = x({}), s = x({});
            N(() => {
            });

            async function i() {
                f.start(), s.value = await y.run(w.getPage({...a.value, ...v(s.value)})).finally(f.close)
            }

            return (Z, t) => (p(), m("div", L, [l(g, {
                query: a.value,
                "onUpdate:query": t[4] || (t[4] = e => a.value = e),
                page: s.value,
                "onUpdate:page": t[5] || (t[5] = e => s.value = e),
                onSearch: i
            }, {
                default: d(() => [l(h, {ref: "querySearchRef"}, {
                    default: d(() => [l(Q, {
                        class: "col-12",
                        modelValue: a.value.majorName,
                        "onUpdate:modelValue": t[0] || (t[0] = e => a.value.majorName = e),
                        label: "输入专业名称搜索"
                    }, null, 8, ["modelValue"]), l(c, {
                        modelValue: a.value.majorField,
                        "onUpdate:modelValue": [t[1] || (t[1] = e => a.value.majorField = e), i],
                        options: _,
                        label: "专业门类"
                    }, null, 8, ["modelValue"]), l(c, {
                        modelValue: a.value.grantField,
                        "onUpdate:modelValue": [t[2] || (t[2] = e => a.value.grantField = e), i],
                        options: _,
                        label: "授予门类"
                    }, null, 8, ["modelValue"])]), _: 1
                }, 512), l(j, {class: "q-mt-md"}, {
                    header: d(() => [R, z, A, D, E, G]),
                    body: d(() => [(p(!0), m(T, null, U(s.value.list ?? [], e => (p(), m("tr", {key: e.id}, [o("td", {textContent: n(e.majorCode)}, null, 8, H), o("td", {textContent: n(e.majorName)}, null, 8, J), o("td", {textContent: n(e.majorType)}, null, 8, K), o("td", {textContent: n(e.majorField)}, null, 8, O), o("td", {textContent: n(e.grantField)}, null, 8, W), o("td", {textContent: n(e.year)}, null, 8, X)]))), 128))]),
                    _: 1
                }), l(C, {
                    class: "q-my-xl",
                    page: s.value,
                    "onUpdate:page": t[3] || (t[3] = e => s.value = e)
                }, null, 8, ["page"])]), _: 1
            }, 8, ["query", "page"])]))
        }
    });
const ie = P(Y, [["__scopeId", "data-v-84f0fa2f"]]);
export {ie as default};
