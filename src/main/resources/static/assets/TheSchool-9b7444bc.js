import {
    d as L,
    B as P,
    r as v,
    c as B,
    f as U,
    g as i,
    o,
    h as g,
    i as c,
    j as l,
    b as r,
    s as p,
    F as d,
    l as m,
    t as y,
    m as $
} from "./index-d31968a7.js";
import {S as x} from "./SchoolApi-997a0d35.js";
import {Q as j} from "./QueryChipSelect-b4a32d7e.js";
import {Q as M} from "./QueryContainer-778ca57d.js";
import {Q as A} from "./QueryInput-b0beacee.js";
import {Q as F} from "./QueryPagination-33101695.js";
import {Q as H} from "./QuerySearchCard-abfe6caa.js";
import {u as I} from "./useArray-1b072fc4.js";
import {u as R, a as z} from "./useRequest-4cb19bee.js";
import {u as D} from "./useNotify-cedc1ad3.js";
import {u as E} from "./usePage-8ca7a06e.js";

const G = {class: "row justify-start q-gutter-md q-mt-md"}, J = ["textContent"], K = ["textContent"], O = ["innerHTML"],
    W = {class: "q-mt-md"}, X = {class: "col"}, Y = L({
        __name: "TheSchool", setup(Z) {
            D(), P();
            const h = R(), u = z(), {toPage: C} = E();
            let a = v({}), s = v({}), q = v([]), Q = B(() => I(s.value.list ?? [], 3));
            U(() => {
                S(), _()
            });

            async function S() {
                u.start(), q.value = await h.run(x.getProvinceList()).finally(u.close)
            }

            async function _() {
                u.start(), s.value = await h.run(x.getPage({...a.value, ...C(s.value)})).finally(u.close)
            }

            return (b, t) => {
                const V = i("q-img"), N = i("q-chip"), T = i("q-card-section"), k = i("q-card");
                return o(), g(M, {
                    query: a.value,
                    "onUpdate:query": t[3] || (t[3] = e => a.value = e),
                    page: s.value,
                    "onUpdate:page": t[4] || (t[4] = e => s.value = e),
                    onSearch: _
                }, {
                    default: c(() => [l(H, {ref: "querySearchRef"}, {
                        default: c(() => [l(A, {
                            class: "col-12",
                            modelValue: a.value.schoolName,
                            "onUpdate:modelValue": t[0] || (t[0] = e => a.value.schoolName = e),
                            label: "输入学校名称搜索"
                        }, null, 8, ["modelValue"]), l(j, {
                            modelValue: a.value.province,
                            "onUpdate:modelValue": [t[1] || (t[1] = e => a.value.province = e), _],
                            options: q.value,
                            label: "省份"
                        }, null, 8, ["modelValue", "options"])]), _: 1
                    }, 512), (o(!0), r(d, null, p(Q.value, e => (o(), r("div", G, [(o(!0), r(d, null, p(e, n => (o(), g(k, {
                        class: "col cursor-pointer text-center",
                        onClick: f => b.$router.push(`/home/school/${n.id}`),
                        flat: "",
                        bordered: ""
                    }, {
                        default: c(() => [l(T, null, {
                            default: c(() => {
                                var f;
                                return [l(V, {
                                    src: `http://static.xiangxuegaokao.com/img/school_logo/${n.schoolName}.jpg`,
                                    class: "rounded-borders",
                                    width: "80px"
                                }, null, 8, ["src"]), m("p", {
                                    class: "q-mt-md text-subtitle1",
                                    textContent: y(n.schoolName)
                                }, null, 8, J), m("p", {
                                    class: "text-overline",
                                    textContent: y(n.province)
                                }, null, 8, K), m("div", {
                                    class: "text-caption overflow-hidden",
                                    style: {"max-height": "100px"},
                                    innerHTML: n.synopsis
                                }, null, 8, O), m("div", W, [(o(!0), r(d, null, p(((f = n.info) == null ? void 0 : f.tags) ?? [], w => (o(), g(N, {
                                    textContent: y(w),
                                    size: "sm"
                                }, null, 8, ["textContent"]))), 256))])]
                            }), _: 2
                        }, 1024)]), _: 2
                    }, 1032, ["onClick"]))), 256)), (o(!0), r(d, null, p(3 - e.length, n => (o(), r("div", X))), 256))]))), 256)), l(F, {
                        class: "q-my-xl",
                        page: s.value,
                        "onUpdate:page": t[2] || (t[2] = e => s.value = e)
                    }, null, 8, ["page"])]), _: 1
                }, 8, ["query", "page"])
            }
        }
    });
const pe = $(Y, [["__scopeId", "data-v-2b4f1528"]]);
export {pe as default};
