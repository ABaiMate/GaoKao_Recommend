var qe = Object.defineProperty;
var Ie = (e, t, n) => t in e ? qe(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
var U = (e, t, n) => (Ie(e, typeof t != "symbol" ? t + "" : t, n), n);
import {B as Me, U as ze, z as Je, A as $e, V as j} from "./index-d31968a7.js";

function we(e, t) {
    return function () {
        return e.apply(t, arguments)
    }
}

const {toString: Ve} = Object.prototype, {getPrototypeOf: te} = Object, M = (e => t => {
        const n = Ve.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)), A = e => (e = e.toLowerCase(), t => M(t) === e),
    z = e => t => typeof t === e, {isArray: C} = Array, B = z("undefined");

function We(e) {
    return e !== null && !B(e) && e.constructor !== null && !B(e.constructor) && S(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}

const be = A("ArrayBuffer");

function Ke(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && be(e.buffer), t
}

const Ge = z("string"), S = z("function"), Se = z("number"), J = e => e !== null && typeof e == "object",
    ve = e => e === !0 || e === !1, k = e => {
        if (M(e) !== "object") return !1;
        const t = te(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    }, Xe = A("Date"), Qe = A("File"), Ze = A("Blob"), Ye = A("FileList"), et = e => J(e) && S(e.pipe), tt = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || S(e.append) && ((t = M(e)) === "formdata" || t === "object" && S(e.toString) && e.toString() === "[object FormData]"))
    }, nt = A("URLSearchParams"), rt = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function L(e, t, {allOwnKeys: n = !1} = {}) {
    if (e === null || typeof e > "u") return;
    let r, s;
    if (typeof e != "object" && (e = [e]), C(e)) for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e); else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
        let u;
        for (r = 0; r < i; r++) u = o[r], t.call(null, e[u], u, e)
    }
}

function Re(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, s;
    for (; r-- > 0;) if (s = n[r], t === s.toLowerCase()) return s;
    return null
}

const Oe = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    Ae = e => !B(e) && e !== Oe;

function X() {
    const {caseless: e} = Ae(this) && this || {}, t = {}, n = (r, s) => {
        const o = e && Re(t, s) || s;
        k(t[o]) && k(r) ? t[o] = X(t[o], r) : k(r) ? t[o] = X({}, r) : C(r) ? t[o] = r.slice() : t[o] = r
    };
    for (let r = 0, s = arguments.length; r < s; r++) arguments[r] && L(arguments[r], n);
    return t
}

const st = (e, t, n, {allOwnKeys: r} = {}) => (L(t, (s, o) => {
        n && S(s) ? e[o] = we(s, n) : e[o] = s
    }, {allOwnKeys: r}), e), ot = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), it = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {value: t.prototype}), n && Object.assign(e.prototype, n)
    }, at = (e, t, n, r) => {
        let s, o, i;
        const u = {};
        if (t = t || {}, e == null) return t;
        do {
            for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0;) i = s[o], (!r || r(i, e, t)) && !u[i] && (t[i] = e[i], u[i] = !0);
            e = n !== !1 && te(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    }, ct = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    }, ut = e => {
        if (!e) return null;
        if (C(e)) return e;
        let t = e.length;
        if (!Se(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    }, lt = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && te(Uint8Array)), ft = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let s;
        for (; (s = r.next()) && !s.done;) {
            const o = s.value;
            t.call(e, o[0], o[1])
        }
    }, dt = (e, t) => {
        let n;
        const r = [];
        for (; (n = e.exec(t)) !== null;) r.push(n);
        return r
    }, pt = A("HTMLFormElement"), ht = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
        return r.toUpperCase() + s
    }), ae = (({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype), mt = A("RegExp"), Te = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e), r = {};
        L(n, (s, o) => {
            let i;
            (i = t(s, o, e)) !== !1 && (r[o] = i || s)
        }), Object.defineProperties(e, r)
    }, yt = e => {
        Te(e, (t, n) => {
            if (S(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if (S(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    }, Et = (e, t) => {
        const n = {}, r = s => {
            s.forEach(o => {
                n[o] = !0
            })
        };
        return C(e) ? r(e) : r(String(e).split(t)), n
    }, wt = () => {
    }, bt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), W = "abcdefghijklmnopqrstuvwxyz", ce = "0123456789",
    ge = {DIGIT: ce, ALPHA: W, ALPHA_DIGIT: W + W.toUpperCase() + ce}, St = (e = 16, t = ge.ALPHA_DIGIT) => {
        let n = "";
        const {length: r} = t;
        for (; e--;) n += t[Math.random() * r | 0];
        return n
    };

function Rt(e) {
    return !!(e && S(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}

const Ot = e => {
    const t = new Array(10), n = (r, s) => {
        if (J(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
                t[s] = r;
                const o = C(r) ? [] : {};
                return L(r, (i, u) => {
                    const f = n(i, s + 1);
                    !B(f) && (o[u] = f)
                }), t[s] = void 0, o
            }
        }
        return r
    };
    return n(e, 0)
}, At = A("AsyncFunction"), Tt = e => e && (J(e) || S(e)) && S(e.then) && S(e.catch), a = {
    isArray: C,
    isArrayBuffer: be,
    isBuffer: We,
    isFormData: tt,
    isArrayBufferView: Ke,
    isString: Ge,
    isNumber: Se,
    isBoolean: ve,
    isObject: J,
    isPlainObject: k,
    isUndefined: B,
    isDate: Xe,
    isFile: Qe,
    isBlob: Ze,
    isRegExp: mt,
    isFunction: S,
    isStream: et,
    isURLSearchParams: nt,
    isTypedArray: lt,
    isFileList: Ye,
    forEach: L,
    merge: X,
    extend: st,
    trim: rt,
    stripBOM: ot,
    inherits: it,
    toFlatObject: at,
    kindOf: M,
    kindOfTest: A,
    endsWith: ct,
    toArray: ut,
    forEachEntry: ft,
    matchAll: dt,
    isHTMLForm: pt,
    hasOwnProperty: ae,
    hasOwnProp: ae,
    reduceDescriptors: Te,
    freezeMethods: yt,
    toObjectSet: Et,
    toCamelCase: ht,
    noop: wt,
    toFiniteNumber: bt,
    findKey: Re,
    global: Oe,
    isContextDefined: Ae,
    ALPHABET: ge,
    generateString: St,
    isSpecCompliantForm: Rt,
    toJSONObject: Ot,
    isAsyncFn: At,
    isThenable: Tt
};

function m(e, t, n, r, s) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s)
}

a.inherits(m, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: a.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const xe = m.prototype, Pe = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Pe[e] = {value: e}
});
Object.defineProperties(m, Pe);
Object.defineProperty(xe, "isAxiosError", {value: !0});
m.from = (e, t, n, r, s, o) => {
    const i = Object.create(xe);
    return a.toFlatObject(e, i, function (f) {
        return f !== Error.prototype
    }, u => u !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i
};
const gt = null;

function Q(e) {
    return a.isPlainObject(e) || a.isArray(e)
}

function Ne(e) {
    return a.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function ue(e, t, n) {
    return e ? e.concat(t).map(function (s, o) {
        return s = Ne(s), !n && o ? "[" + s + "]" : s
    }).join(n ? "." : "") : t
}

function xt(e) {
    return a.isArray(e) && !e.some(Q)
}

const Pt = a.toFlatObject(a, {}, null, function (t) {
    return /^is[A-Z]/.test(t)
});

function $(e, t, n) {
    if (!a.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = a.toFlatObject(n, {metaTokens: !0, dots: !1, indexes: !1}, !1, function (h, b) {
        return !a.isUndefined(b[h])
    });
    const r = n.metaTokens, s = n.visitor || c, o = n.dots, i = n.indexes,
        f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
    if (!a.isFunction(s)) throw new TypeError("visitor must be a function");

    function d(l) {
        if (l === null) return "";
        if (a.isDate(l)) return l.toISOString();
        if (!f && a.isBlob(l)) throw new m("Blob is not supported. Use a Buffer instead.");
        return a.isArrayBuffer(l) || a.isTypedArray(l) ? f && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l
    }

    function c(l, h, b) {
        let T = l;
        if (l && !b && typeof l == "object") {
            if (a.endsWith(h, "{}")) h = r ? h : h.slice(0, -2), l = JSON.stringify(l); else if (a.isArray(l) && xt(l) || (a.isFileList(l) || a.endsWith(h, "[]")) && (T = a.toArray(l))) return h = Ne(h), T.forEach(function (D, He) {
                !(a.isUndefined(D) || D === null) && t.append(i === !0 ? ue([h], He, o) : i === null ? h : h + "[]", d(D))
            }), !1
        }
        return Q(l) ? !0 : (t.append(ue(b, h, o), d(l)), !1)
    }

    const p = [], E = Object.assign(Pt, {defaultVisitor: c, convertValue: d, isVisitable: Q});

    function w(l, h) {
        if (!a.isUndefined(l)) {
            if (p.indexOf(l) !== -1) throw Error("Circular reference detected in " + h.join("."));
            p.push(l), a.forEach(l, function (T, R) {
                (!(a.isUndefined(T) || T === null) && s.call(t, T, a.isString(R) ? R.trim() : R, h, E)) === !0 && w(T, h ? h.concat(R) : [R])
            }), p.pop()
        }
    }

    if (!a.isObject(e)) throw new TypeError("data must be an object");
    return w(e), t
}

function le(e) {
    const t = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0"};
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r]
    })
}

function ne(e, t) {
    this._pairs = [], e && $(e, this, t)
}

const Ce = ne.prototype;
Ce.append = function (t, n) {
    this._pairs.push([t, n])
};
Ce.toString = function (t) {
    const n = t ? function (r) {
        return t.call(this, r, le)
    } : le;
    return this._pairs.map(function (s) {
        return n(s[0]) + "=" + n(s[1])
    }, "").join("&")
};

function Nt(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function Fe(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || Nt, s = n && n.serialize;
    let o;
    if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ne(t, n).toString(r), o) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}

class Ct {
    constructor() {
        this.handlers = []
    }

    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }

    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }

    clear() {
        this.handlers && (this.handlers = [])
    }

    forEach(t) {
        a.forEach(this.handlers, function (r) {
            r !== null && t(r)
        })
    }
}

const fe = Ct, Be = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
    Ft = typeof URLSearchParams < "u" ? URLSearchParams : ne, Bt = typeof FormData < "u" ? FormData : null,
    Lt = typeof Blob < "u" ? Blob : null, _t = (() => {
        let e;
        return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    })(),
    Dt = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    O = {
        isBrowser: !0,
        classes: {URLSearchParams: Ft, FormData: Bt, Blob: Lt},
        isStandardBrowserEnv: _t,
        isStandardBrowserWebWorkerEnv: Dt,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function Ut(e, t) {
    return $(e, new O.classes.URLSearchParams, Object.assign({
        visitor: function (n, r, s, o) {
            return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function jt(e) {
    return a.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function kt(e) {
    const t = {}, n = Object.keys(e);
    let r;
    const s = n.length;
    let o;
    for (r = 0; r < s; r++) o = n[r], t[o] = e[o];
    return t
}

function Le(e) {
    function t(n, r, s, o) {
        let i = n[o++];
        const u = Number.isFinite(+i), f = o >= n.length;
        return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !u) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = kt(s[i])), !u)
    }

    if (a.isFormData(e) && a.isFunction(e.entries)) {
        const n = {};
        return a.forEachEntry(e, (r, s) => {
            t(jt(r), s, n, 0)
        }), n
    }
    return null
}

function Ht(e, t, n) {
    if (a.isString(e)) try {
        return (t || JSON.parse)(e), a.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}

const re = {
    transitional: Be,
    adapter: ["xhr", "http"],
    transformRequest: [function (t, n) {
        const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
        if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)) return s && s ? JSON.stringify(Le(t)) : t;
        if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t)) return t;
        if (a.isArrayBufferView(t)) return t.buffer;
        if (a.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let u;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return Ut(t, this.formSerializer).toString();
            if ((u = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const f = this.env && this.env.FormData;
                return $(u ? {"files[]": t} : t, f && new f, this.formSerializer)
            }
        }
        return o || s ? (n.setContentType("application/json", !1), Ht(t)) : t
    }],
    transformResponse: [function (t) {
        const n = this.transitional || re.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
        if (t && a.isString(t) && (r && !this.responseType || s)) {
            const i = !(n && n.silentJSONParsing) && s;
            try {
                return JSON.parse(t)
            } catch (u) {
                if (i) throw u.name === "SyntaxError" ? m.from(u, m.ERR_BAD_RESPONSE, this, null, this.response) : u
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {FormData: O.classes.FormData, Blob: O.classes.Blob},
    validateStatus: function (t) {
        return t >= 200 && t < 300
    },
    headers: {common: {Accept: "application/json, text/plain, */*", "Content-Type": void 0}}
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    re.headers[e] = {}
});
const se = re,
    qt = a.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    It = e => {
        const t = {};
        let n, r, s;
        return e && e.split(`
`).forEach(function (i) {
            s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && qt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    }, de = Symbol("internals");

function F(e) {
    return e && String(e).trim().toLowerCase()
}

function H(e) {
    return e === !1 || e == null ? e : a.isArray(e) ? e.map(H) : String(e)
}

function Mt(e) {
    const t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}

const zt = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function K(e, t, n, r, s) {
    if (a.isFunction(r)) return r.call(this, t, n);
    if (s && (t = n), !!a.isString(t)) {
        if (a.isString(r)) return t.indexOf(r) !== -1;
        if (a.isRegExp(r)) return r.test(t)
    }
}

function Jt(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function $t(e, t) {
    const n = a.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function (s, o, i) {
                return this[r].call(this, t, s, o, i)
            }, configurable: !0
        })
    })
}

class V {
    constructor(t) {
        t && this.set(t)
    }

    set(t, n, r) {
        const s = this;

        function o(u, f, d) {
            const c = F(f);
            if (!c) throw new Error("header name must be a non-empty string");
            const p = a.findKey(s, c);
            (!p || s[p] === void 0 || d === !0 || d === void 0 && s[p] !== !1) && (s[p || f] = H(u))
        }

        const i = (u, f) => a.forEach(u, (d, c) => o(d, c, f));
        return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !zt(t) ? i(It(t), n) : t != null && o(n, t, r), this
    }

    get(t, n) {
        if (t = F(t), t) {
            const r = a.findKey(this, t);
            if (r) {
                const s = this[r];
                if (!n) return s;
                if (n === !0) return Mt(s);
                if (a.isFunction(n)) return n.call(this, s, r);
                if (a.isRegExp(n)) return n.exec(s);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }

    has(t, n) {
        if (t = F(t), t) {
            const r = a.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || K(this, this[r], r, n)))
        }
        return !1
    }

    delete(t, n) {
        const r = this;
        let s = !1;

        function o(i) {
            if (i = F(i), i) {
                const u = a.findKey(r, i);
                u && (!n || K(r, r[u], u, n)) && (delete r[u], s = !0)
            }
        }

        return a.isArray(t) ? t.forEach(o) : o(t), s
    }

    clear(t) {
        const n = Object.keys(this);
        let r = n.length, s = !1;
        for (; r--;) {
            const o = n[r];
            (!t || K(this, this[o], o, t, !0)) && (delete this[o], s = !0)
        }
        return s
    }

    normalize(t) {
        const n = this, r = {};
        return a.forEach(this, (s, o) => {
            const i = a.findKey(r, o);
            if (i) {
                n[i] = H(s), delete n[o];
                return
            }
            const u = t ? Jt(o) : String(o).trim();
            u !== o && delete n[o], n[u] = H(s), r[u] = !0
        }), this
    }

    concat(...t) {
        return this.constructor.concat(this, ...t)
    }

    toJSON(t) {
        const n = Object.create(null);
        return a.forEach(this, (r, s) => {
            r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r)
        }), n
    }

    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }

    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }

    get [Symbol.toStringTag]() {
        return "AxiosHeaders"
    }

    static from(t) {
        return t instanceof this ? t : new this(t)
    }

    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(s => r.set(s)), r
    }

    static accessor(t) {
        const r = (this[de] = this[de] = {accessors: {}}).accessors, s = this.prototype;

        function o(i) {
            const u = F(i);
            r[u] || ($t(s, i), r[u] = !0)
        }

        return a.isArray(t) ? t.forEach(o) : o(t), this
    }
}

V.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(V.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e, set(r) {
            this[n] = r
        }
    }
});
a.freezeMethods(V);
const g = V;

function G(e, t) {
    const n = this || se, r = t || n, s = g.from(r.headers);
    let o = r.data;
    return a.forEach(e, function (u) {
        o = u.call(n, o, s.normalize(), t ? t.status : void 0)
    }), s.normalize(), o
}

function _e(e) {
    return !!(e && e.__CANCEL__)
}

function _(e, t, n) {
    m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError"
}

a.inherits(_, m, {__CANCEL__: !0});

function Vt(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new m("Request failed with status code " + n.status, [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}

const Wt = O.isStandardBrowserEnv ? function () {
    return {
        write: function (n, r, s, o, i, u) {
            const f = [];
            f.push(n + "=" + encodeURIComponent(r)), a.isNumber(s) && f.push("expires=" + new Date(s).toGMTString()), a.isString(o) && f.push("path=" + o), a.isString(i) && f.push("domain=" + i), u === !0 && f.push("secure"), document.cookie = f.join("; ")
        }, read: function (n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        }, remove: function (n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function () {
    return {
        write: function () {
        }, read: function () {
            return null
        }, remove: function () {
        }
    }
}();

function Kt(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function Gt(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function De(e, t) {
    return e && !Kt(t) ? Gt(e, t) : t
}

const vt = O.isStandardBrowserEnv ? function () {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;

    function s(o) {
        let i = o;
        return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }

    return r = s(window.location.href), function (i) {
        const u = a.isString(i) ? s(i) : i;
        return u.protocol === r.protocol && u.host === r.host
    }
}() : function () {
    return function () {
        return !0
    }
}();

function Xt(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function Qt(e, t) {
    e = e || 10;
    const n = new Array(e), r = new Array(e);
    let s = 0, o = 0, i;
    return t = t !== void 0 ? t : 1e3, function (f) {
        const d = Date.now(), c = r[o];
        i || (i = d), n[s] = f, r[s] = d;
        let p = o, E = 0;
        for (; p !== s;) E += n[p++], p = p % e;
        if (s = (s + 1) % e, s === o && (o = (o + 1) % e), d - i < t) return;
        const w = c && d - c;
        return w ? Math.round(E * 1e3 / w) : void 0
    }
}

function pe(e, t) {
    let n = 0;
    const r = Qt(50, 250);
    return s => {
        const o = s.loaded, i = s.lengthComputable ? s.total : void 0, u = o - n, f = r(u), d = o <= i;
        n = o;
        const c = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: u,
            rate: f || void 0,
            estimated: f && i && d ? (i - o) / f : void 0,
            event: s
        };
        c[t ? "download" : "upload"] = !0, e(c)
    }
}

const Zt = typeof XMLHttpRequest < "u", Yt = Zt && function (e) {
    return new Promise(function (n, r) {
        let s = e.data;
        const o = g.from(e.headers).normalize(), i = e.responseType;
        let u;

        function f() {
            e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u)
        }

        let d;
        a.isFormData(s) && (O.isStandardBrowserEnv || O.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.getContentType(/^\s*multipart\/form-data/) ? a.isString(d = o.getContentType()) && o.setContentType(d.replace(/^\s*(multipart\/form-data);+/, "$1")) : o.setContentType("multipart/form-data"));
        let c = new XMLHttpRequest;
        if (e.auth) {
            const l = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            o.set("Authorization", "Basic " + btoa(l + ":" + h))
        }
        const p = De(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Fe(p, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;

        function E() {
            if (!c) return;
            const l = g.from("getAllResponseHeaders" in c && c.getAllResponseHeaders()), b = {
                data: !i || i === "text" || i === "json" ? c.responseText : c.response,
                status: c.status,
                statusText: c.statusText,
                headers: l,
                config: e,
                request: c
            };
            Vt(function (R) {
                n(R), f()
            }, function (R) {
                r(R), f()
            }, b), c = null
        }

        if ("onloadend" in c ? c.onloadend = E : c.onreadystatechange = function () {
            !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(E)
        }, c.onabort = function () {
            c && (r(new m("Request aborted", m.ECONNABORTED, e, c)), c = null)
        }, c.onerror = function () {
            r(new m("Network Error", m.ERR_NETWORK, e, c)), c = null
        }, c.ontimeout = function () {
            let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
            const b = e.transitional || Be;
            e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new m(h, b.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED, e, c)), c = null
        }, O.isStandardBrowserEnv) {
            const l = vt(p) && e.xsrfCookieName && Wt.read(e.xsrfCookieName);
            l && o.set(e.xsrfHeaderName, l)
        }
        s === void 0 && o.setContentType(null), "setRequestHeader" in c && a.forEach(o.toJSON(), function (h, b) {
            c.setRequestHeader(b, h)
        }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", pe(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", pe(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = l => {
            c && (r(!l || l.type ? new _(null, e, c) : l), c.abort(), c = null)
        }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
        const w = Xt(p);
        if (w && O.protocols.indexOf(w) === -1) {
            r(new m("Unsupported protocol " + w + ":", m.ERR_BAD_REQUEST, e));
            return
        }
        c.send(s || null)
    })
}, Z = {http: gt, xhr: Yt};
a.forEach(Z, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {value: t})
        } catch {
        }
        Object.defineProperty(e, "adapterName", {value: t})
    }
});
const he = e => `- ${e}`, en = e => a.isFunction(e) || e === null || e === !1, Ue = {
    getAdapter: e => {
        e = a.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const s = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let i;
            if (r = n, !en(n) && (r = Z[(i = String(n)).toLowerCase()], r === void 0)) throw new m(`Unknown adapter '${i}'`);
            if (r) break;
            s[i || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(s).map(([u, f]) => `adapter ${u} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build"));
            let i = t ? o.length > 1 ? `since :
` + o.map(he).join(`
`) : " " + he(o[0]) : "as no adapter specified";
            throw new m("There is no suitable adapter to dispatch the request " + i, "ERR_NOT_SUPPORT")
        }
        return r
    }, adapters: Z
};

function v(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new _(null, e)
}

function me(e) {
    return v(e), e.headers = g.from(e.headers), e.data = G.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ue.getAdapter(e.adapter || se.adapter)(e).then(function (r) {
        return v(e), r.data = G.call(e, e.transformResponse, r), r.headers = g.from(r.headers), r
    }, function (r) {
        return _e(r) || (v(e), r && r.response && (r.response.data = G.call(e, e.transformResponse, r.response), r.response.headers = g.from(r.response.headers))), Promise.reject(r)
    })
}

const ye = e => e instanceof g ? e.toJSON() : e;

function N(e, t) {
    t = t || {};
    const n = {};

    function r(d, c, p) {
        return a.isPlainObject(d) && a.isPlainObject(c) ? a.merge.call({caseless: p}, d, c) : a.isPlainObject(c) ? a.merge({}, c) : a.isArray(c) ? c.slice() : c
    }

    function s(d, c, p) {
        if (a.isUndefined(c)) {
            if (!a.isUndefined(d)) return r(void 0, d, p)
        } else return r(d, c, p)
    }

    function o(d, c) {
        if (!a.isUndefined(c)) return r(void 0, c)
    }

    function i(d, c) {
        if (a.isUndefined(c)) {
            if (!a.isUndefined(d)) return r(void 0, d)
        } else return r(void 0, c)
    }

    function u(d, c, p) {
        if (p in t) return r(d, c);
        if (p in e) return r(void 0, d)
    }

    const f = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: u,
        headers: (d, c) => s(ye(d), ye(c), !0)
    };
    return a.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
        const p = f[c] || s, E = p(e[c], t[c], c);
        a.isUndefined(E) && p !== u || (n[c] = E)
    }), n
}

const je = "1.6.0", oe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    oe[e] = function (r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Ee = {};
oe.transitional = function (t, n, r) {
    function s(o, i) {
        return "[Axios v" + je + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "")
    }

    return (o, i, u) => {
        if (t === !1) throw new m(s(i, " has been removed" + (n ? " in " + n : "")), m.ERR_DEPRECATED);
        return n && !Ee[i] && (Ee[i] = !0, console.warn(s(i, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, i, u) : !0
    }
};

function tn(e, t, n) {
    if (typeof e != "object") throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let s = r.length;
    for (; s-- > 0;) {
        const o = r[s], i = t[o];
        if (i) {
            const u = e[o], f = u === void 0 || i(u, o, e);
            if (f !== !0) throw new m("option " + o + " must be " + f, m.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new m("Unknown option " + o, m.ERR_BAD_OPTION)
    }
}

const Y = {assertOptions: tn, validators: oe}, x = Y.validators;

class I {
    constructor(t) {
        this.defaults = t, this.interceptors = {request: new fe, response: new fe}
    }

    request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = N(this.defaults, n);
        const {transitional: r, paramsSerializer: s, headers: o} = n;
        r !== void 0 && Y.assertOptions(r, {
            silentJSONParsing: x.transitional(x.boolean),
            forcedJSONParsing: x.transitional(x.boolean),
            clarifyTimeoutError: x.transitional(x.boolean)
        }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {serialize: s} : Y.assertOptions(s, {
            encode: x.function,
            serialize: x.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i = o && a.merge(o.common, o[n.method]);
        o && a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], l => {
            delete o[l]
        }), n.headers = g.concat(i, o);
        const u = [];
        let f = !0;
        this.interceptors.request.forEach(function (h) {
            typeof h.runWhen == "function" && h.runWhen(n) === !1 || (f = f && h.synchronous, u.unshift(h.fulfilled, h.rejected))
        });
        const d = [];
        this.interceptors.response.forEach(function (h) {
            d.push(h.fulfilled, h.rejected)
        });
        let c, p = 0, E;
        if (!f) {
            const l = [me.bind(this), void 0];
            for (l.unshift.apply(l, u), l.push.apply(l, d), E = l.length, c = Promise.resolve(n); p < E;) c = c.then(l[p++], l[p++]);
            return c
        }
        E = u.length;
        let w = n;
        for (p = 0; p < E;) {
            const l = u[p++], h = u[p++];
            try {
                w = l(w)
            } catch (b) {
                h.call(this, b);
                break
            }
        }
        try {
            c = me.call(this, w)
        } catch (l) {
            return Promise.reject(l)
        }
        for (p = 0, E = d.length; p < E;) c = c.then(d[p++], d[p++]);
        return c
    }

    getUri(t) {
        t = N(this.defaults, t);
        const n = De(t.baseURL, t.url);
        return Fe(n, t.params, t.paramsSerializer)
    }
}

a.forEach(["delete", "get", "head", "options"], function (t) {
    I.prototype[t] = function (n, r) {
        return this.request(N(r || {}, {method: t, url: n, data: (r || {}).data}))
    }
});
a.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
        return function (o, i, u) {
            return this.request(N(u || {}, {
                method: t,
                headers: r ? {"Content-Type": "multipart/form-data"} : {},
                url: o,
                data: i
            }))
        }
    }

    I.prototype[t] = n(), I.prototype[t + "Form"] = n(!0)
});
const q = I;

class ie {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (o) {
            n = o
        });
        const r = this;
        this.promise.then(s => {
            if (!r._listeners) return;
            let o = r._listeners.length;
            for (; o-- > 0;) r._listeners[o](s);
            r._listeners = null
        }), this.promise.then = s => {
            let o;
            const i = new Promise(u => {
                r.subscribe(u), o = u
            }).then(s);
            return i.cancel = function () {
                r.unsubscribe(o)
            }, i
        }, t(function (o, i, u) {
            r.reason || (r.reason = new _(o, i, u), n(r.reason))
        })
    }

    throwIfRequested() {
        if (this.reason) throw this.reason
    }

    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }

    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }

    static source() {
        let t;
        return {
            token: new ie(function (s) {
                t = s
            }), cancel: t
        }
    }
}

const nn = ie;

function rn(e) {
    return function (n) {
        return e.apply(null, n)
    }
}

function sn(e) {
    return a.isObject(e) && e.isAxiosError === !0
}

const ee = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(ee).forEach(([e, t]) => {
    ee[t] = e
});
const on = ee;

function ke(e) {
    const t = new q(e), n = we(q.prototype.request, t);
    return a.extend(n, q.prototype, t, {allOwnKeys: !0}), a.extend(n, t, null, {allOwnKeys: !0}), n.create = function (s) {
        return ke(N(e, s))
    }, n
}

const y = ke(se);
y.Axios = q;
y.CanceledError = _;
y.CancelToken = nn;
y.isCancel = _e;
y.VERSION = je;
y.toFormData = $;
y.AxiosError = m;
y.Cancel = y.CanceledError;
y.all = function (t) {
    return Promise.all(t)
};
y.spread = rn;
y.isAxiosError = sn;
y.mergeConfig = N;
y.AxiosHeaders = g;
y.formToJSON = e => Le(a.isHTMLForm(e) ? new FormData(e) : e);
y.getAdapter = Ue.getAdapter;
y.HttpStatusCode = on;
y.default = y;
const an = y;
let P = 0;

function cn(e = 300) {
    const t = Me();

    function n(s) {
        if (P > 0) {
            P++;
            return
        }
        setTimeout(() => {
            P > 0 && t.loading.show({
                spinner: ze,
                message: `${s || "Loading"} . . . `,
                boxClass: t.dark.isActive ? "bg-grey-9 text-white" : "bg-grey-1 text-grey-8",
                spinnerColor: "blue",
                backgroundColor: "transparent"
            })
        }, e), P++
    }

    function r() {
        P > 0 && P--, P <= 0 && (t.loading.hide(), P = 0)
    }

    return {start: n, close: r}
}

var un = (e => (e.GET = "get", e.POST = "post", e.PUT = "put", e.PATCH = "patch", e.DELETE = "delete", e))(un || {});

class mn {
    constructor(t, n, r) {
        U(this, "method");
        U(this, "path");
        U(this, "param");
        console.log(n)
        this.method = t, this.path = n, this.param = r
    }
}
// function removePrefix(str, prefix) {
//     if (str.startsWith(prefix)) {
//         return str.substring(prefix.length);
//     } else {
//         return str;
//     }
// }

const ln = an.create({
    // baseURL: "",
    timeout: 3e4,
    responseType: "json",
    withCredentials: !0,
    headers: {"Content-Type": "application/json"}
}), fn = ["get", "delete"];

async function dn(e, t, n) {
    const r = e.response;
    if (!r || !r.status) {
        j.create("网络异常...");
        return
    }
    switch (r.status) {
        case 400:
        case 403:
            j.create(r.data.message);
            break;
        case 404:
        case 500:
            j.create("有点问题，稍等一下");
            break;
        case 401:
            n.path !== "/login" && await t.replace({path: "/login", query: {from: n.fullPath}});
            break
    }
}

function yn() {
    const e = Je(), t = $e();
    cn();

    function n(r) {
        const s = fn.includes(r.method),
            o = ln({url: r.path, method: r.method, params: s && r.param, data: !s && r.param});
        return new Promise((i, u) => o.then(f => {
            const d = f.data;
            if (!d.success) {
                j.create(d.message), u(f);
                return
            }
            i(d.data)
        }).catch(async f => {
            await dn(f, e, t), u(f)
        }))
    }

    return {run: n}
}

export {un as H, mn as R, cn as a, yn as u};
