(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
    new MutationObserver(l => {
        for (const a of l) if (a.type === "childList") for (const i of a.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && o(i)
    }).observe(document, {childList: !0, subtree: !0});

    function n(l) {
        const a = {};
        return l.integrity && (a.integrity = l.integrity), l.referrerPolicy && (a.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? a.credentials = "include" : l.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function o(l) {
        if (l.ep) return;
        l.ep = !0;
        const a = n(l);
        fetch(l.href, a)
    }
})();

function Ss(e, t) {
    const n = Object.create(null), o = e.split(",");
    for (let l = 0; l < o.length; l++) n[o[l]] = !0;
    return t ? l => !!n[l.toLowerCase()] : l => !!n[l]
}

const bt = {}, tl = [], wn = () => {
    }, Z0 = () => !1, G0 = /^on[^a-z]/, Oi = e => G0.test(e), Cs = e => e.startsWith("onUpdate:"), Pt = Object.assign,
    ks = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }, J0 = Object.prototype.hasOwnProperty, nt = (e, t) => J0.call(e, t), ze = Array.isArray,
    nl = e => pa(e) === "[object Map]", uf = e => pa(e) === "[object Set]", em = e => pa(e) === "[object RegExp]",
    je = e => typeof e == "function", Ct = e => typeof e == "string", Li = e => typeof e == "symbol",
    pt = e => e !== null && typeof e == "object", cf = e => (pt(e) || je(e)) && je(e.then) && je(e.catch),
    df = Object.prototype.toString, pa = e => df.call(e), tm = e => pa(e).slice(8, -1),
    ff = e => pa(e) === "[object Object]", qs = e => Ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Xa = Ss(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Ri = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    }, nm = /-(\w)/g, Pn = Ri(e => e.replace(nm, (t, n) => n ? n.toUpperCase() : "")), om = /\B([A-Z])/g,
    Fo = Ri(e => e.replace(om, "-$1").toLowerCase()), Vi = Ri(e => e.charAt(0).toUpperCase() + e.slice(1)),
    fr = Ri(e => e ? `on${Vi(e)}` : ""), Ro = (e, t) => !Object.is(e, t), Ul = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t)
    }, ii = (e, t, n) => {
        Object.defineProperty(e, t, {configurable: !0, enumerable: !1, value: n})
    }, lm = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    }, am = e => {
        const t = Ct(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Bu;
const jr = () => Bu || (Bu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Fi(e) {
    if (ze(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n], l = Ct(o) ? um(o) : Fi(o);
            if (l) for (const a in l) t[a] = l[a]
        }
        return t
    } else if (Ct(e) || pt(e)) return e
}

const im = /;(?![^(]*\))/g, rm = /:([^]+)/, sm = /\/\*[^]*?\*\//g;

function um(e) {
    const t = {};
    return e.replace(sm, "").split(im).forEach(n => {
        if (n) {
            const o = n.split(rm);
            o.length > 1 && (t[o[0].trim()] = o[1].trim())
        }
    }), t
}

function zi(e) {
    let t = "";
    if (Ct(e)) t = e; else if (ze(e)) for (let n = 0; n < e.length; n++) {
        const o = zi(e[n]);
        o && (t += o + " ")
    } else if (pt(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

function US(e) {
    if (!e) return null;
    let {class: t, style: n} = e;
    return t && !Ct(t) && (e.class = zi(t)), n && (e.style = Fi(n)), e
}

const cm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", dm = Ss(cm);

function vf(e) {
    return !!e || e === ""
}

const WS = e => Ct(e) ? e : e == null ? "" : ze(e) || pt(e) && (e.toString === df || !je(e.toString)) ? JSON.stringify(e, pf, 2) : String(e),
    pf = (e, t) => t && t.__v_isRef ? pf(e, t.value) : nl(t) ? {[`Map(${t.size})`]: [...t.entries()].reduce((n, [o, l]) => (n[`${o} =>`] = l, n), {})} : uf(t) ? {[`Set(${t.size})`]: [...t.values()]} : pt(t) && !ze(t) && !ff(t) ? String(t) : t;
let mn;

class fm {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = mn, !t && mn && (this.index = (mn.scopes || (mn.scopes = [])).push(this) - 1)
    }

    get active() {
        return this._active
    }

    run(t) {
        if (this._active) {
            const n = mn;
            try {
                return mn = this, t()
            } finally {
                mn = n
            }
        }
    }

    on() {
        mn = this
    }

    off() {
        mn = this.parent
    }

    stop(t) {
        if (this._active) {
            let n, o;
            for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
            for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
            if (this.scopes) for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const l = this.parent.scopes.pop();
                l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function vm(e, t = mn) {
    t && t.active && t.effects.push(e)
}

function pm() {
    return mn
}

const Ts = e => {
    const t = new Set(e);
    return t.w = 0, t.n = 0, t
}, mf = e => (e.w & uo) > 0, hf = e => (e.n & uo) > 0, mm = ({deps: e}) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= uo
}, hm = e => {
    const {deps: t} = e;
    if (t.length) {
        let n = 0;
        for (let o = 0; o < t.length; o++) {
            const l = t[o];
            mf(l) && !hf(l) ? l.delete(e) : t[n++] = l, l.w &= ~uo, l.n &= ~uo
        }
        t.length = n
    }
}, ri = new WeakMap;
let Dl = 0, uo = 1;
const Qr = 30;
let bn;
const Eo = Symbol(""), Kr = Symbol("");

class $s {
    constructor(t, n = null, o) {
        this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, vm(this, o)
    }

    run() {
        if (!this.active) return this.fn();
        let t = bn, n = io;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try {
            return this.parent = bn, bn = this, io = !0, uo = 1 << ++Dl, Dl <= Qr ? mm(this) : Ou(this), this.fn()
        } finally {
            Dl <= Qr && hm(this), uo = 1 << --Dl, bn = this.parent, io = n, this.parent = void 0, this.deferStop && this.stop()
        }
    }

    stop() {
        bn === this ? this.deferStop = !0 : this.active && (Ou(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function Ou(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}

let io = !0;
const gf = [];

function Sl() {
    gf.push(io), io = !1
}

function Cl() {
    const e = gf.pop();
    io = e === void 0 ? !0 : e
}

function Xt(e, t, n) {
    if (io && bn) {
        let o = ri.get(e);
        o || ri.set(e, o = new Map);
        let l = o.get(n);
        l || o.set(n, l = Ts()), bf(l)
    }
}

function bf(e, t) {
    let n = !1;
    Dl <= Qr ? hf(e) || (e.n |= uo, n = !mf(e)) : n = !e.has(bn), n && (e.add(bn), bn.deps.push(e))
}

function Nn(e, t, n, o, l, a) {
    const i = ri.get(e);
    if (!i) return;
    let r = [];
    if (t === "clear") r = [...i.values()]; else if (n === "length" && ze(e)) {
        const s = Number(o);
        i.forEach((d, c) => {
            (c === "length" || !Li(c) && c >= s) && r.push(d)
        })
    } else switch (n !== void 0 && r.push(i.get(n)), t) {
        case"add":
            ze(e) ? qs(n) && r.push(i.get("length")) : (r.push(i.get(Eo)), nl(e) && r.push(i.get(Kr)));
            break;
        case"delete":
            ze(e) || (r.push(i.get(Eo)), nl(e) && r.push(i.get(Kr)));
            break;
        case"set":
            nl(e) && r.push(i.get(Eo));
            break
    }
    if (r.length === 1) r[0] && Ur(r[0]); else {
        const s = [];
        for (const d of r) d && s.push(...d);
        Ur(Ts(s))
    }
}

function Ur(e, t) {
    const n = ze(e) ? e : [...e];
    for (const o of n) o.computed && Lu(o);
    for (const o of n) o.computed || Lu(o)
}

function Lu(e, t) {
    (e !== bn || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}

function gm(e, t) {
    var n;
    return (n = ri.get(e)) == null ? void 0 : n.get(t)
}

const bm = Ss("__proto__,__v_isRef,__isVue"),
    yf = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Li)),
    Ru = ym();

function ym() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function (...n) {
            const o = Qe(this);
            for (let a = 0, i = this.length; a < i; a++) Xt(o, "get", a + "");
            const l = o[t](...n);
            return l === -1 || l === !1 ? o[t](...n.map(Qe)) : l
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function (...n) {
            Sl();
            const o = Qe(this)[t].apply(this, n);
            return Cl(), o
        }
    }), e
}

function _m(e) {
    const t = Qe(this);
    return Xt(t, "has", e), t.hasOwnProperty(e)
}

class _f {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._shallow = n
    }

    get(t, n, o) {
        const l = this._isReadonly, a = this._shallow;
        if (n === "__v_isReactive") return !l;
        if (n === "__v_isReadonly") return l;
        if (n === "__v_isShallow") return a;
        if (n === "__v_raw" && o === (l ? a ? Bm : Cf : a ? Sf : xf).get(t)) return t;
        const i = ze(t);
        if (!l) {
            if (i && nt(Ru, n)) return Reflect.get(Ru, n, o);
            if (n === "hasOwnProperty") return _m
        }
        const r = Reflect.get(t, n, o);
        return (Li(n) ? yf.has(n) : bm(n)) || (l || Xt(t, "get", n), a) ? r : Ot(r) ? i && qs(n) ? r : r.value : pt(r) ? l ? kf(r) : En(r) : r
    }
}

class wf extends _f {
    constructor(t = !1) {
        super(!1, t)
    }

    set(t, n, o, l) {
        let a = t[n];
        if (vl(a) && Ot(a) && !Ot(o)) return !1;
        if (!this._shallow && (!si(o) && !vl(o) && (a = Qe(a), o = Qe(o)), !ze(t) && Ot(a) && !Ot(o))) return a.value = o, !0;
        const i = ze(t) && qs(n) ? Number(n) < t.length : nt(t, n), r = Reflect.set(t, n, o, l);
        return t === Qe(l) && (i ? Ro(o, a) && Nn(t, "set", n, o) : Nn(t, "add", n, o)), r
    }

    deleteProperty(t, n) {
        const o = nt(t, n);
        t[n];
        const l = Reflect.deleteProperty(t, n);
        return l && o && Nn(t, "delete", n, void 0), l
    }

    has(t, n) {
        const o = Reflect.has(t, n);
        return (!Li(n) || !yf.has(n)) && Xt(t, "has", n), o
    }

    ownKeys(t) {
        return Xt(t, "iterate", ze(t) ? "length" : Eo), Reflect.ownKeys(t)
    }
}

class wm extends _f {
    constructor(t = !1) {
        super(!0, t)
    }

    set(t, n) {
        return !0
    }

    deleteProperty(t, n) {
        return !0
    }
}

const xm = new wf, Sm = new wm, Cm = new wf(!0), Ms = e => e, Ni = e => Reflect.getPrototypeOf(e);

function Ta(e, t, n = !1, o = !1) {
    e = e.__v_raw;
    const l = Qe(e), a = Qe(t);
    n || (Ro(t, a) && Xt(l, "get", t), Xt(l, "get", a));
    const {has: i} = Ni(l), r = o ? Ms : n ? Bs : na;
    if (i.call(l, t)) return r(e.get(t));
    if (i.call(l, a)) return r(e.get(a));
    e !== l && e.get(t)
}

function $a(e, t = !1) {
    const n = this.__v_raw, o = Qe(n), l = Qe(e);
    return t || (Ro(e, l) && Xt(o, "has", e), Xt(o, "has", l)), e === l ? n.has(e) : n.has(e) || n.has(l)
}

function Ma(e, t = !1) {
    return e = e.__v_raw, !t && Xt(Qe(e), "iterate", Eo), Reflect.get(e, "size", e)
}

function Vu(e) {
    e = Qe(e);
    const t = Qe(this);
    return Ni(t).has.call(t, e) || (t.add(e), Nn(t, "add", e, e)), this
}

function Fu(e, t) {
    t = Qe(t);
    const n = Qe(this), {has: o, get: l} = Ni(n);
    let a = o.call(n, e);
    a || (e = Qe(e), a = o.call(n, e));
    const i = l.call(n, e);
    return n.set(e, t), a ? Ro(t, i) && Nn(n, "set", e, t) : Nn(n, "add", e, t), this
}

function zu(e) {
    const t = Qe(this), {has: n, get: o} = Ni(t);
    let l = n.call(t, e);
    l || (e = Qe(e), l = n.call(t, e)), o && o.call(t, e);
    const a = t.delete(e);
    return l && Nn(t, "delete", e, void 0), a
}

function Nu() {
    const e = Qe(this), t = e.size !== 0, n = e.clear();
    return t && Nn(e, "clear", void 0, void 0), n
}

function Ea(e, t) {
    return function (o, l) {
        const a = this, i = a.__v_raw, r = Qe(i), s = t ? Ms : e ? Bs : na;
        return !e && Xt(r, "iterate", Eo), i.forEach((d, c) => o.call(l, s(d), s(c), a))
    }
}

function Pa(e, t, n) {
    return function (...o) {
        const l = this.__v_raw, a = Qe(l), i = nl(a), r = e === "entries" || e === Symbol.iterator && i,
            s = e === "keys" && i, d = l[e](...o), c = n ? Ms : t ? Bs : na;
        return !t && Xt(a, "iterate", s ? Kr : Eo), {
            next() {
                const {value: p, done: v} = d.next();
                return v ? {value: p, done: v} : {value: r ? [c(p[0]), c(p[1])] : c(p), done: v}
            }, [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Un(e) {
    return function (...t) {
        return e === "delete" ? !1 : this
    }
}

function km() {
    const e = {
        get(a) {
            return Ta(this, a)
        }, get size() {
            return Ma(this)
        }, has: $a, add: Vu, set: Fu, delete: zu, clear: Nu, forEach: Ea(!1, !1)
    }, t = {
        get(a) {
            return Ta(this, a, !1, !0)
        }, get size() {
            return Ma(this)
        }, has: $a, add: Vu, set: Fu, delete: zu, clear: Nu, forEach: Ea(!1, !0)
    }, n = {
        get(a) {
            return Ta(this, a, !0)
        }, get size() {
            return Ma(this, !0)
        }, has(a) {
            return $a.call(this, a, !0)
        }, add: Un("add"), set: Un("set"), delete: Un("delete"), clear: Un("clear"), forEach: Ea(!0, !1)
    }, o = {
        get(a) {
            return Ta(this, a, !0, !0)
        }, get size() {
            return Ma(this, !0)
        }, has(a) {
            return $a.call(this, a, !0)
        }, add: Un("add"), set: Un("set"), delete: Un("delete"), clear: Un("clear"), forEach: Ea(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(a => {
        e[a] = Pa(a, !1, !1), n[a] = Pa(a, !0, !1), t[a] = Pa(a, !1, !0), o[a] = Pa(a, !0, !0)
    }), [e, n, t, o]
}

const [qm, Tm, $m, Mm] = km();

function Es(e, t) {
    const n = t ? e ? Mm : $m : e ? Tm : qm;
    return (o, l, a) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? o : Reflect.get(nt(n, l) && l in o ? n : o, l, a)
}

const Em = {get: Es(!1, !1)}, Pm = {get: Es(!1, !0)}, Am = {get: Es(!0, !1)}, xf = new WeakMap, Sf = new WeakMap,
    Cf = new WeakMap, Bm = new WeakMap;

function Om(e) {
    switch (e) {
        case"Object":
        case"Array":
            return 1;
        case"Map":
        case"Set":
        case"WeakMap":
        case"WeakSet":
            return 2;
        default:
            return 0
    }
}

function Lm(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Om(tm(e))
}

function En(e) {
    return vl(e) ? e : As(e, !1, xm, Em, xf)
}

function Ps(e) {
    return As(e, !1, Cm, Pm, Sf)
}

function kf(e) {
    return As(e, !0, Sm, Am, Cf)
}

function As(e, t, n, o, l) {
    if (!pt(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const a = l.get(e);
    if (a) return a;
    const i = Lm(e);
    if (i === 0) return e;
    const r = new Proxy(e, i === 2 ? o : n);
    return l.set(e, r), r
}

function ol(e) {
    return vl(e) ? ol(e.__v_raw) : !!(e && e.__v_isReactive)
}

function vl(e) {
    return !!(e && e.__v_isReadonly)
}

function si(e) {
    return !!(e && e.__v_isShallow)
}

function qf(e) {
    return ol(e) || vl(e)
}

function Qe(e) {
    const t = e && e.__v_raw;
    return t ? Qe(t) : e
}

function ma(e) {
    return ii(e, "__v_skip", !0), e
}

const na = e => pt(e) ? En(e) : e, Bs = e => pt(e) ? kf(e) : e;

function Tf(e) {
    io && bn && (e = Qe(e), bf(e.dep || (e.dep = Ts())))
}

function $f(e, t) {
    e = Qe(e);
    const n = e.dep;
    n && Ur(n)
}

function Ot(e) {
    return !!(e && e.__v_isRef === !0)
}

function D(e) {
    return Mf(e, !1)
}

function Rm(e) {
    return Mf(e, !0)
}

function Mf(e, t) {
    return Ot(e) ? e : new Vm(e, t)
}

class Vm {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Qe(t), this._value = n ? t : na(t)
    }

    get value() {
        return Tf(this), this._value
    }

    set value(t) {
        const n = this.__v_isShallow || si(t) || vl(t);
        t = n ? t : Qe(t), Ro(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : na(t), $f(this))
    }
}

function Po(e) {
    return Ot(e) ? e.value : e
}

const Fm = {
    get: (e, t, n) => Po(Reflect.get(e, t, n)), set: (e, t, n, o) => {
        const l = e[t];
        return Ot(l) && !Ot(n) ? (l.value = n, !0) : Reflect.set(e, t, n, o)
    }
};

function Ef(e) {
    return ol(e) ? e : new Proxy(e, Fm)
}

class zm {
    constructor(t, n, o) {
        this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0
    }

    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }

    set value(t) {
        this._object[this._key] = t
    }

    get dep() {
        return gm(Qe(this._object), this._key)
    }
}

class Nm {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0
    }

    get value() {
        return this._getter()
    }
}

function YS(e, t, n) {
    return Ot(e) ? e : je(e) ? new Nm(e) : pt(e) && arguments.length > 1 ? Im(e, t, n) : D(e)
}

function Im(e, t, n) {
    const o = e[t];
    return Ot(o) ? o : new zm(e, t, n)
}

class Dm {
    constructor(t, n, o, l) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new $s(t, () => {
            this._dirty || (this._dirty = !0, $f(this))
        }), this.effect.computed = this, this.effect.active = this._cacheable = !l, this.__v_isReadonly = o
    }

    get value() {
        const t = Qe(this);
        return Tf(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
    }

    set value(t) {
        this._setter(t)
    }
}

function Hm(e, t, n = !1) {
    let o, l;
    const a = je(e);
    return a ? (o = e, l = wn) : (o = e.get, l = e.set), new Dm(o, l, a || !l, n)
}

function ro(e, t, n, o) {
    let l;
    try {
        l = o ? e(...o) : e()
    } catch (a) {
        Ii(a, t, n)
    }
    return l
}

function sn(e, t, n, o) {
    if (je(e)) {
        const a = ro(e, t, n, o);
        return a && cf(a) && a.catch(i => {
            Ii(i, t, n)
        }), a
    }
    const l = [];
    for (let a = 0; a < e.length; a++) l.push(sn(e[a], t, n, o));
    return l
}

function Ii(e, t, n, o = !0) {
    const l = t ? t.vnode : null;
    if (t) {
        let a = t.parent;
        const i = t.proxy, r = n;
        for (; a;) {
            const d = a.ec;
            if (d) {
                for (let c = 0; c < d.length; c++) if (d[c](e, i, r) === !1) return
            }
            a = a.parent
        }
        const s = t.appContext.config.errorHandler;
        if (s) {
            ro(s, null, 10, [e, i, r]);
            return
        }
    }
    jm(e, n, l, o)
}

function jm(e, t, n, o = !0) {
    console.error(e)
}

let oa = !1, Wr = !1;
const Dt = [];
let Mn = 0;
const ll = [];
let zn = null, ko = 0;
const Pf = Promise.resolve();
let Os = null;

function We(e) {
    const t = Os || Pf;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Qm(e) {
    let t = Mn + 1, n = Dt.length;
    for (; t < n;) {
        const o = t + n >>> 1, l = Dt[o], a = la(l);
        a < e || a === e && l.pre ? t = o + 1 : n = o
    }
    return t
}

function Ls(e) {
    (!Dt.length || !Dt.includes(e, oa && e.allowRecurse ? Mn + 1 : Mn)) && (e.id == null ? Dt.push(e) : Dt.splice(Qm(e.id), 0, e), Af())
}

function Af() {
    !oa && !Wr && (Wr = !0, Os = Pf.then(Of))
}

function Km(e) {
    const t = Dt.indexOf(e);
    t > Mn && Dt.splice(t, 1)
}

function Um(e) {
    ze(e) ? ll.push(...e) : (!zn || !zn.includes(e, e.allowRecurse ? ko + 1 : ko)) && ll.push(e), Af()
}

function Iu(e, t = oa ? Mn + 1 : 0) {
    for (; t < Dt.length; t++) {
        const n = Dt[t];
        n && n.pre && (Dt.splice(t, 1), t--, n())
    }
}

function Bf(e) {
    if (ll.length) {
        const t = [...new Set(ll)];
        if (ll.length = 0, zn) {
            zn.push(...t);
            return
        }
        for (zn = t, zn.sort((n, o) => la(n) - la(o)), ko = 0; ko < zn.length; ko++) zn[ko]();
        zn = null, ko = 0
    }
}

const la = e => e.id == null ? 1 / 0 : e.id, Wm = (e, t) => {
    const n = la(e) - la(t);
    if (n === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1
    }
    return n
};

function Of(e) {
    Wr = !1, oa = !0, Dt.sort(Wm);
    const t = wn;
    try {
        for (Mn = 0; Mn < Dt.length; Mn++) {
            const n = Dt[Mn];
            n && n.active !== !1 && ro(n, null, 14)
        }
    } finally {
        Mn = 0, Dt.length = 0, Bf(), oa = !1, Os = null, (Dt.length || ll.length) && Of()
    }
}

function Ym(e, t, ...n) {
    if (e.isUnmounted) return;
    const o = e.vnode.props || bt;
    let l = n;
    const a = t.startsWith("update:"), i = a && t.slice(7);
    if (i && i in o) {
        const c = `${i === "modelValue" ? "model" : i}Modifiers`, {number: p, trim: v} = o[c] || bt;
        v && (l = n.map(m => Ct(m) ? m.trim() : m)), p && (l = n.map(lm))
    }
    let r, s = o[r = fr(t)] || o[r = fr(Pn(t))];
    !s && a && (s = o[r = fr(Fo(t))]), s && sn(s, e, 6, l);
    const d = o[r + "Once"];
    if (d) {
        if (!e.emitted) e.emitted = {}; else if (e.emitted[r]) return;
        e.emitted[r] = !0, sn(d, e, 6, l)
    }
}

function Lf(e, t, n = !1) {
    const o = t.emitsCache, l = o.get(e);
    if (l !== void 0) return l;
    const a = e.emits;
    let i = {}, r = !1;
    if (!je(e)) {
        const s = d => {
            const c = Lf(d, t, !0);
            c && (r = !0, Pt(i, c))
        };
        !n && t.mixins.length && t.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s)
    }
    return !a && !r ? (pt(e) && o.set(e, null), null) : (ze(a) ? a.forEach(s => i[s] = null) : Pt(i, a), pt(e) && o.set(e, i), i)
}

function Di(e, t) {
    return !e || !Oi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), nt(e, t[0].toLowerCase() + t.slice(1)) || nt(e, Fo(t)) || nt(e, t))
}

let zt = null, Hi = null;

function ui(e) {
    const t = zt;
    return zt = e, Hi = e && e.type.__scopeId || null, t
}

function XS(e) {
    Hi = e
}

function ZS() {
    Hi = null
}

function Xm(e, t = zt, n) {
    if (!t || e._n) return e;
    const o = (...l) => {
        o._d && ec(-1);
        const a = ui(t);
        let i;
        try {
            i = e(...l)
        } finally {
            ui(a), o._d && ec(1)
        }
        return i
    };
    return o._n = !0, o._c = !0, o._d = !0, o
}

function vr(e) {
    const {
        type: t,
        vnode: n,
        proxy: o,
        withProxy: l,
        props: a,
        propsOptions: [i],
        slots: r,
        attrs: s,
        emit: d,
        render: c,
        renderCache: p,
        data: v,
        setupState: m,
        ctx: g,
        inheritAttrs: x
    } = e;
    let w, S;
    const y = ui(e);
    try {
        if (n.shapeFlag & 4) {
            const h = l || o;
            w = $n(c.call(h, h, p, a, m, v, g)), S = s
        } else {
            const h = t;
            w = $n(h.length > 1 ? h(a, {attrs: s, slots: r, emit: d}) : h(a, null)), S = t.props ? s : Zm(s)
        }
    } catch (h) {
        Xl.length = 0, Ii(h, e, 1), w = Ut(cn)
    }
    let b = w;
    if (S && x !== !1) {
        const h = Object.keys(S), {shapeFlag: C} = b;
        h.length && C & 7 && (i && h.some(Cs) && (S = Gm(S, i)), b = Dn(b, S))
    }
    return n.dirs && (b = Dn(b), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && (b.transition = n.transition), w = b, ui(y), w
}

const Zm = e => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Oi(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}, Gm = (e, t) => {
    const n = {};
    for (const o in e) (!Cs(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n
};

function Jm(e, t, n) {
    const {props: o, children: l, component: a} = e, {props: i, children: r, patchFlag: s} = t, d = a.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && s >= 0) {
        if (s & 1024) return !0;
        if (s & 16) return o ? Du(o, i, d) : !!i;
        if (s & 8) {
            const c = t.dynamicProps;
            for (let p = 0; p < c.length; p++) {
                const v = c[p];
                if (i[v] !== o[v] && !Di(d, v)) return !0
            }
        }
    } else return (l || r) && (!r || !r.$stable) ? !0 : o === i ? !1 : o ? i ? Du(o, i, d) : !0 : !!i;
    return !1
}

function Du(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length) return !0;
    for (let l = 0; l < o.length; l++) {
        const a = o[l];
        if (t[a] !== e[a] && !Di(n, a)) return !0
    }
    return !1
}

function eh({vnode: e, parent: t}, n) {
    for (; t && t.subTree === e;) (e = t.vnode).el = n, t = t.parent
}

const Rf = e => e.__isSuspense;

function th(e, t) {
    t && t.pendingBranch ? ze(e) ? t.effects.push(...e) : t.effects.push(e) : Um(e)
}

function GS(e, t) {
    return ji(e, null, t)
}

function nh(e, t) {
    return ji(e, null, {flush: "post"})
}

const Aa = {};

function pe(e, t, n) {
    return ji(e, t, n)
}

function ji(e, t, {immediate: n, deep: o, flush: l, onTrack: a, onTrigger: i} = bt) {
    var r;
    const s = pm() === ((r = Rt) == null ? void 0 : r.scope) ? Rt : null;
    let d, c = !1, p = !1;
    if (Ot(e) ? (d = () => e.value, c = si(e)) : ol(e) ? (d = () => e, o = !0) : ze(e) ? (p = !0, c = e.some(h => ol(h) || si(h)), d = () => e.map(h => {
        if (Ot(h)) return h.value;
        if (ol(h)) return To(h);
        if (je(h)) return ro(h, s, 2)
    })) : je(e) ? t ? d = () => ro(e, s, 2) : d = () => {
        if (!(s && s.isUnmounted)) return v && v(), sn(e, s, 3, [m])
    } : d = wn, t && o) {
        const h = d;
        d = () => To(h())
    }
    let v, m = h => {
        v = y.onStop = () => {
            ro(h, s, 4)
        }
    }, g;
    if (sa) if (m = wn, t ? n && sn(t, s, 3, [d(), p ? [] : void 0, m]) : d(), l === "sync") {
        const h = Xh();
        g = h.__watcherHandles || (h.__watcherHandles = [])
    } else return wn;
    let x = p ? new Array(e.length).fill(Aa) : Aa;
    const w = () => {
        if (y.active) if (t) {
            const h = y.run();
            (o || c || (p ? h.some((C, A) => Ro(C, x[A])) : Ro(h, x))) && (v && v(), sn(t, s, 3, [h, x === Aa ? void 0 : p && x[0] === Aa ? [] : x, m]), x = h)
        } else y.run()
    };
    w.allowRecurse = !!t;
    let S;
    l === "sync" ? S = w : l === "post" ? S = () => Ft(w, s && s.suspense) : (w.pre = !0, s && (w.id = s.uid), S = () => Ls(w));
    const y = new $s(d, S);
    t ? n ? w() : x = y.run() : l === "post" ? Ft(y.run.bind(y), s && s.suspense) : y.run();
    const b = () => {
        y.stop(), s && s.scope && ks(s.scope.effects, y)
    };
    return g && g.push(b), b
}

function oh(e, t, n) {
    const o = this.proxy, l = Ct(e) ? e.includes(".") ? Vf(o, e) : () => o[e] : e.bind(o, o);
    let a;
    je(t) ? a = t : (a = t.handler, n = t);
    const i = Rt;
    ml(this);
    const r = ji(l, a.bind(o), n);
    return i ? ml(i) : Ao(), r
}

function Vf(e, t) {
    const n = t.split(".");
    return () => {
        let o = e;
        for (let l = 0; l < n.length && o; l++) o = o[n[l]];
        return o
    }
}

function To(e, t) {
    if (!pt(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), Ot(e)) To(e.value, t); else if (ze(e)) for (let n = 0; n < e.length; n++) To(e[n], t); else if (uf(e) || nl(e)) e.forEach(n => {
        To(n, t)
    }); else if (ff(e)) for (const n in e) To(e[n], t);
    return e
}

function Sn(e, t) {
    const n = zt;
    if (n === null) return e;
    const o = Zi(n) || n.proxy, l = e.dirs || (e.dirs = []);
    for (let a = 0; a < t.length; a++) {
        let [i, r, s, d = bt] = t[a];
        i && (je(i) && (i = {mounted: i, updated: i}), i.deep && To(r), l.push({
            dir: i,
            instance: o,
            value: r,
            oldValue: void 0,
            arg: s,
            modifiers: d
        }))
    }
    return e
}

function ho(e, t, n, o) {
    const l = e.dirs, a = t && t.dirs;
    for (let i = 0; i < l.length; i++) {
        const r = l[i];
        a && (r.oldValue = a[i].value);
        let s = r.dir[o];
        s && (Sl(), sn(s, n, 8, [e.el, r, e, t]), Cl())
    }
}

const eo = Symbol("_leaveCb"), Ba = Symbol("_enterCb");

function Ff() {
    const e = {isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map};
    return mt(() => {
        e.isMounted = !0
    }), Ke(() => {
        e.isUnmounting = !0
    }), e
}

const ln = [Function, Array], zf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ln,
    onEnter: ln,
    onAfterEnter: ln,
    onEnterCancelled: ln,
    onBeforeLeave: ln,
    onLeave: ln,
    onAfterLeave: ln,
    onLeaveCancelled: ln,
    onBeforeAppear: ln,
    onAppear: ln,
    onAfterAppear: ln,
    onAppearCancelled: ln
}, lh = {
    name: "BaseTransition", props: zf, setup(e, {slots: t}) {
        const n = Se(), o = Ff();
        let l;
        return () => {
            const a = t.default && Rs(t.default(), !0);
            if (!a || !a.length) return;
            let i = a[0];
            if (a.length > 1) {
                for (const x of a) if (x.type !== cn) {
                    i = x;
                    break
                }
            }
            const r = Qe(e), {mode: s} = r;
            if (o.isLeaving) return pr(i);
            const d = Hu(i);
            if (!d) return pr(i);
            const c = aa(d, r, o, n);
            pl(d, c);
            const p = n.subTree, v = p && Hu(p);
            let m = !1;
            const {getTransitionKey: g} = d.type;
            if (g) {
                const x = g();
                l === void 0 ? l = x : x !== l && (l = x, m = !0)
            }
            if (v && v.type !== cn && (!oo(d, v) || m)) {
                const x = aa(v, r, o, n);
                if (pl(v, x), s === "out-in") return o.isLeaving = !0, x.afterLeave = () => {
                    o.isLeaving = !1, n.update.active !== !1 && n.update()
                }, pr(i);
                s === "in-out" && d.type !== cn && (x.delayLeave = (w, S, y) => {
                    const b = Nf(o, v);
                    b[String(v.key)] = v, w[eo] = () => {
                        S(), w[eo] = void 0, delete c.delayedLeave
                    }, c.delayedLeave = y
                })
            }
            return i
        }
    }
}, ah = lh;

function Nf(e, t) {
    const {leavingVNodes: n} = e;
    let o = n.get(t.type);
    return o || (o = Object.create(null), n.set(t.type, o)), o
}

function aa(e, t, n, o) {
    const {
        appear: l,
        mode: a,
        persisted: i = !1,
        onBeforeEnter: r,
        onEnter: s,
        onAfterEnter: d,
        onEnterCancelled: c,
        onBeforeLeave: p,
        onLeave: v,
        onAfterLeave: m,
        onLeaveCancelled: g,
        onBeforeAppear: x,
        onAppear: w,
        onAfterAppear: S,
        onAppearCancelled: y
    } = t, b = String(e.key), h = Nf(n, e), C = (E, V) => {
        E && sn(E, o, 9, V)
    }, A = (E, V) => {
        const O = V[1];
        C(E, V), ze(E) ? E.every(z => z.length <= 1) && O() : E.length <= 1 && O()
    }, L = {
        mode: a, persisted: i, beforeEnter(E) {
            let V = r;
            if (!n.isMounted) if (l) V = x || r; else return;
            E[eo] && E[eo](!0);
            const O = h[b];
            O && oo(e, O) && O.el[eo] && O.el[eo](), C(V, [E])
        }, enter(E) {
            let V = s, O = d, z = c;
            if (!n.isMounted) if (l) V = w || s, O = S || d, z = y || c; else return;
            let M = !1;
            const k = E[Ba] = B => {
                M || (M = !0, B ? C(z, [E]) : C(O, [E]), L.delayedLeave && L.delayedLeave(), E[Ba] = void 0)
            };
            V ? A(V, [E, k]) : k()
        }, leave(E, V) {
            const O = String(e.key);
            if (E[Ba] && E[Ba](!0), n.isUnmounting) return V();
            C(p, [E]);
            let z = !1;
            const M = E[eo] = k => {
                z || (z = !0, V(), k ? C(g, [E]) : C(m, [E]), E[eo] = void 0, h[O] === e && delete h[O])
            };
            h[O] = e, v ? A(v, [E, M]) : M()
        }, clone(E) {
            return aa(E, t, n, o)
        }
    };
    return L
}

function pr(e) {
    if (Qi(e)) return e = Dn(e), e.children = null, e
}

function Hu(e) {
    return Qi(e) ? e.children ? e.children[0] : void 0 : e
}

function pl(e, t) {
    e.shapeFlag & 6 && e.component ? pl(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Rs(e, t = !1, n) {
    let o = [], l = 0;
    for (let a = 0; a < e.length; a++) {
        let i = e[a];
        const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
        i.type === Yt ? (i.patchFlag & 128 && l++, o = o.concat(Rs(i.children, t, r))) : (t || i.type !== cn) && o.push(r != null ? Dn(i, {key: r}) : i)
    }
    if (l > 1) for (let a = 0; a < o.length; a++) o[a].patchFlag = -2;
    return o
}/*! #__NO_SIDE_EFFECTS__ */
function Vs(e, t) {
    return je(e) ? (() => Pt({name: e.name}, t, {setup: e}))() : e
}

const al = e => !!e.type.__asyncLoader, Qi = e => e.type.__isKeepAlive, ih = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {include: [String, RegExp, Array], exclude: [String, RegExp, Array], max: [String, Number]},
    setup(e, {slots: t}) {
        const n = Se(), o = n.ctx;
        if (!o.renderer) return () => {
            const y = t.default && t.default();
            return y && y.length === 1 ? y[0] : y
        };
        const l = new Map, a = new Set;
        let i = null;
        const r = n.suspense, {renderer: {p: s, m: d, um: c, o: {createElement: p}}} = o, v = p("div");
        o.activate = (y, b, h, C, A) => {
            const L = y.component;
            d(y, b, h, 0, r), s(L.vnode, y, b, h, L, r, C, y.slotScopeIds, A), Ft(() => {
                L.isDeactivated = !1, L.a && Ul(L.a);
                const E = y.props && y.props.onVnodeMounted;
                E && rn(E, L.parent, y)
            }, r)
        }, o.deactivate = y => {
            const b = y.component;
            d(y, v, null, 1, r), Ft(() => {
                b.da && Ul(b.da);
                const h = y.props && y.props.onVnodeUnmounted;
                h && rn(h, b.parent, y), b.isDeactivated = !0
            }, r)
        };

        function m(y) {
            mr(y), c(y, n, r, !0)
        }

        function g(y) {
            l.forEach((b, h) => {
                const C = ts(b.type);
                C && (!y || !y(C)) && x(h)
            })
        }

        function x(y) {
            const b = l.get(y);
            !i || !oo(b, i) ? m(b) : i && mr(i), l.delete(y), a.delete(y)
        }

        pe(() => [e.include, e.exclude], ([y, b]) => {
            y && g(h => Hl(y, h)), b && g(h => !Hl(b, h))
        }, {flush: "post", deep: !0});
        let w = null;
        const S = () => {
            w != null && l.set(w, hr(n.subTree))
        };
        return mt(S), Wi(S), Ke(() => {
            l.forEach(y => {
                const {subTree: b, suspense: h} = n, C = hr(b);
                if (y.type === C.type && y.key === C.key) {
                    mr(C);
                    const A = C.component.da;
                    A && Ft(A, h);
                    return
                }
                m(y)
            })
        }), () => {
            if (w = null, !t.default) return null;
            const y = t.default(), b = y[0];
            if (y.length > 1) return i = null, y;
            if (!ra(b) || !(b.shapeFlag & 4) && !(b.shapeFlag & 128)) return i = null, b;
            let h = hr(b);
            const C = h.type, A = ts(al(h) ? h.type.__asyncResolved || {} : C), {include: L, exclude: E, max: V} = e;
            if (L && (!A || !Hl(L, A)) || E && A && Hl(E, A)) return i = h, b;
            const O = h.key == null ? C : h.key, z = l.get(O);
            return h.el && (h = Dn(h), b.shapeFlag & 128 && (b.ssContent = h)), w = O, z ? (h.el = z.el, h.component = z.component, h.transition && pl(h, h.transition), h.shapeFlag |= 512, a.delete(O), a.add(O)) : (a.add(O), V && a.size > parseInt(V, 10) && x(a.values().next().value)), h.shapeFlag |= 256, i = h, Rf(b.type) ? b : h
        }
    }
}, If = ih;

function Hl(e, t) {
    return ze(e) ? e.some(n => Hl(n, t)) : Ct(e) ? e.split(",").includes(t) : em(e) ? e.test(t) : !1
}

function Hn(e, t) {
    Df(e, "a", t)
}

function kn(e, t) {
    Df(e, "da", t)
}

function Df(e, t, n = Rt) {
    const o = e.__wdc || (e.__wdc = () => {
        let l = n;
        for (; l;) {
            if (l.isDeactivated) return;
            l = l.parent
        }
        return e()
    });
    if (Ki(t, o, n), n) {
        let l = n.parent;
        for (; l && l.parent;) Qi(l.parent.vnode) && rh(o, t, n, l), l = l.parent
    }
}

function rh(e, t, n, o) {
    const l = Ki(t, e, o, !0);
    ql(() => {
        ks(o[t], l)
    }, n)
}

function mr(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function hr(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function Ki(e, t, n = Rt, o = !1) {
    if (n) {
        const l = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...i) => {
            if (n.isUnmounted) return;
            Sl(), ml(n);
            const r = sn(t, n, e, i);
            return Ao(), Cl(), r
        });
        return o ? l.unshift(a) : l.push(a), a
    }
}

const jn = e => (t, n = Rt) => (!sa || e === "sp") && Ki(e, (...o) => t(...o), n), Ui = jn("bm"), mt = jn("m"),
    kl = jn("bu"), Wi = jn("u"), Ke = jn("bum"), ql = jn("um"), sh = jn("sp"), uh = jn("rtg"), ch = jn("rtc");

function dh(e, t = Rt) {
    Ki("ec", e, t)
}

const Hf = "components", fh = "directives";

function vh(e, t) {
    return jf(Hf, e, !0, t) || e
}

const ph = Symbol.for("v-ndc");

function JS(e) {
    return jf(fh, e)
}

function jf(e, t, n = !0, o = !1) {
    const l = zt || Rt;
    if (l) {
        const a = l.type;
        if (e === Hf) {
            const r = ts(a, !1);
            if (r && (r === t || r === Pn(t) || r === Vi(Pn(t)))) return a
        }
        const i = ju(l[e] || a[e], t) || ju(l.appContext[e], t);
        return !i && o ? a : i
    }
}

function ju(e, t) {
    return e && (e[t] || e[Pn(t)] || e[Vi(Pn(t))])
}

function eC(e, t, n, o) {
    let l;
    const a = n && n[o];
    if (ze(e) || Ct(e)) {
        l = new Array(e.length);
        for (let i = 0, r = e.length; i < r; i++) l[i] = t(e[i], i, void 0, a && a[i])
    } else if (typeof e == "number") {
        l = new Array(e);
        for (let i = 0; i < e; i++) l[i] = t(i + 1, i, void 0, a && a[i])
    } else if (pt(e)) if (e[Symbol.iterator]) l = Array.from(e, (i, r) => t(i, r, void 0, a && a[r])); else {
        const i = Object.keys(e);
        l = new Array(i.length);
        for (let r = 0, s = i.length; r < s; r++) {
            const d = i[r];
            l[r] = t(e[d], d, r, a && a[r])
        }
    } else l = [];
    return n && (n[o] = l), l
}

function tC(e, t) {
    for (let n = 0; n < t.length; n++) {
        const o = t[n];
        if (ze(o)) for (let l = 0; l < o.length; l++) e[o[l].name] = o[l].fn; else o && (e[o.name] = o.key ? (...l) => {
            const a = o.fn(...l);
            return a && (a.key = o.key), a
        } : o.fn)
    }
    return e
}

function nC(e, t, n = {}, o, l) {
    if (zt.isCE || zt.parent && al(zt.parent) && zt.parent.isCE) return t !== "default" && (n.name = t), Ut("slot", n, o && o());
    let a = e[t];
    a && a._c && (a._d = !1), Is();
    const i = a && Qf(a(n)),
        r = Ds(Yt, {key: n.key || i && i.key || `_${t}`}, i || (o ? o() : []), i && e._ === 1 ? 64 : -2);
    return !l && r.scopeId && (r.slotScopeIds = [r.scopeId + "-s"]), a && a._c && (a._d = !0), r
}

function Qf(e) {
    return e.some(t => ra(t) ? !(t.type === cn || t.type === Yt && !Qf(t.children)) : !0) ? e : null
}

const Yr = e => e ? ov(e) ? Zi(e) || e.proxy : Yr(e.parent) : null, Wl = Pt(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Yr(e.parent),
    $root: e => Yr(e.root),
    $emit: e => e.emit,
    $options: e => Fs(e),
    $forceUpdate: e => e.f || (e.f = () => Ls(e.update)),
    $nextTick: e => e.n || (e.n = We.bind(e.proxy)),
    $watch: e => oh.bind(e)
}), gr = (e, t) => e !== bt && !e.__isScriptSetup && nt(e, t), mh = {
    get({_: e}, t) {
        const {ctx: n, setupState: o, data: l, props: a, accessCache: i, type: r, appContext: s} = e;
        let d;
        if (t[0] !== "$") {
            const m = i[t];
            if (m !== void 0) switch (m) {
                case 1:
                    return o[t];
                case 2:
                    return l[t];
                case 4:
                    return n[t];
                case 3:
                    return a[t]
            } else {
                if (gr(o, t)) return i[t] = 1, o[t];
                if (l !== bt && nt(l, t)) return i[t] = 2, l[t];
                if ((d = e.propsOptions[0]) && nt(d, t)) return i[t] = 3, a[t];
                if (n !== bt && nt(n, t)) return i[t] = 4, n[t];
                Xr && (i[t] = 0)
            }
        }
        const c = Wl[t];
        let p, v;
        if (c) return t === "$attrs" && Xt(e, "get", t), c(e);
        if ((p = r.__cssModules) && (p = p[t])) return p;
        if (n !== bt && nt(n, t)) return i[t] = 4, n[t];
        if (v = s.config.globalProperties, nt(v, t)) return v[t]
    }, set({_: e}, t, n) {
        const {data: o, setupState: l, ctx: a} = e;
        return gr(l, t) ? (l[t] = n, !0) : o !== bt && nt(o, t) ? (o[t] = n, !0) : nt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0)
    }, has({_: {data: e, setupState: t, accessCache: n, ctx: o, appContext: l, propsOptions: a}}, i) {
        let r;
        return !!n[i] || e !== bt && nt(e, i) || gr(t, i) || (r = a[0]) && nt(r, i) || nt(o, i) || nt(Wl, i) || nt(l.config.globalProperties, i)
    }, defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : nt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
};

function Qu(e) {
    return ze(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

let Xr = !0;

function hh(e) {
    const t = Fs(e), n = e.proxy, o = e.ctx;
    Xr = !1, t.beforeCreate && Ku(t.beforeCreate, e, "bc");
    const {
        data: l,
        computed: a,
        methods: i,
        watch: r,
        provide: s,
        inject: d,
        created: c,
        beforeMount: p,
        mounted: v,
        beforeUpdate: m,
        updated: g,
        activated: x,
        deactivated: w,
        beforeDestroy: S,
        beforeUnmount: y,
        destroyed: b,
        unmounted: h,
        render: C,
        renderTracked: A,
        renderTriggered: L,
        errorCaptured: E,
        serverPrefetch: V,
        expose: O,
        inheritAttrs: z,
        components: M,
        directives: k,
        filters: B
    } = t;
    if (d && gh(d, o, null), i) for (const $ in i) {
        const Q = i[$];
        je(Q) && (o[$] = Q.bind(n))
    }
    if (l) {
        const $ = l.call(n, n);
        pt($) && (e.data = En($))
    }
    if (Xr = !0, a) for (const $ in a) {
        const Q = a[$], ae = je(Q) ? Q.bind(n, n) : je(Q.get) ? Q.get.bind(n, n) : wn,
            be = !je(Q) && je(Q.set) ? Q.set.bind(n) : wn, K = f({get: ae, set: be});
        Object.defineProperty(o, $, {enumerable: !0, configurable: !0, get: () => K.value, set: T => K.value = T})
    }
    if (r) for (const $ in r) Kf(r[$], o, n, $);
    if (s) {
        const $ = je(s) ? s.call(n) : s;
        Reflect.ownKeys($).forEach(Q => {
            un(Q, $[Q])
        })
    }
    c && Ku(c, e, "c");

    function J($, Q) {
        ze(Q) ? Q.forEach(ae => $(ae.bind(n))) : Q && $(Q.bind(n))
    }

    if (J(Ui, p), J(mt, v), J(kl, m), J(Wi, g), J(Hn, x), J(kn, w), J(dh, E), J(ch, A), J(uh, L), J(Ke, y), J(ql, h), J(sh, V), ze(O)) if (O.length) {
        const $ = e.exposed || (e.exposed = {});
        O.forEach(Q => {
            Object.defineProperty($, Q, {get: () => n[Q], set: ae => n[Q] = ae})
        })
    } else e.exposed || (e.exposed = {});
    C && e.render === wn && (e.render = C), z != null && (e.inheritAttrs = z), M && (e.components = M), k && (e.directives = k)
}

function gh(e, t, n = wn) {
    ze(e) && (e = Zr(e));
    for (const o in e) {
        const l = e[o];
        let a;
        pt(l) ? "default" in l ? a = vt(l.from || o, l.default, !0) : a = vt(l.from || o) : a = vt(l), Ot(a) ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: i => a.value = i
        }) : t[o] = a
    }
}

function Ku(e, t, n) {
    sn(ze(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Kf(e, t, n, o) {
    const l = o.includes(".") ? Vf(n, o) : () => n[o];
    if (Ct(e)) {
        const a = t[e];
        je(a) && pe(l, a)
    } else if (je(e)) pe(l, e.bind(n)); else if (pt(e)) if (ze(e)) e.forEach(a => Kf(a, t, n, o)); else {
        const a = je(e.handler) ? e.handler.bind(n) : t[e.handler];
        je(a) && pe(l, a, e)
    }
}

function Fs(e) {
    const t = e.type, {mixins: n, extends: o} = t, {
        mixins: l,
        optionsCache: a,
        config: {optionMergeStrategies: i}
    } = e.appContext, r = a.get(t);
    let s;
    return r ? s = r : !l.length && !n && !o ? s = t : (s = {}, l.length && l.forEach(d => ci(s, d, i, !0)), ci(s, t, i)), pt(t) && a.set(t, s), s
}

function ci(e, t, n, o = !1) {
    const {mixins: l, extends: a} = t;
    a && ci(e, a, n, !0), l && l.forEach(i => ci(e, i, n, !0));
    for (const i in t) if (!(o && i === "expose")) {
        const r = bh[i] || n && n[i];
        e[i] = r ? r(e[i], t[i]) : t[i]
    }
    return e
}

const bh = {
    data: Uu,
    props: Wu,
    emits: Wu,
    methods: jl,
    computed: jl,
    beforeCreate: Kt,
    created: Kt,
    beforeMount: Kt,
    mounted: Kt,
    beforeUpdate: Kt,
    updated: Kt,
    beforeDestroy: Kt,
    beforeUnmount: Kt,
    destroyed: Kt,
    unmounted: Kt,
    activated: Kt,
    deactivated: Kt,
    errorCaptured: Kt,
    serverPrefetch: Kt,
    components: jl,
    directives: jl,
    watch: _h,
    provide: Uu,
    inject: yh
};

function Uu(e, t) {
    return t ? e ? function () {
        return Pt(je(e) ? e.call(this, this) : e, je(t) ? t.call(this, this) : t)
    } : t : e
}

function yh(e, t) {
    return jl(Zr(e), Zr(t))
}

function Zr(e) {
    if (ze(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function Kt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function jl(e, t) {
    return e ? Pt(Object.create(null), e, t) : t
}

function Wu(e, t) {
    return e ? ze(e) && ze(t) ? [...new Set([...e, ...t])] : Pt(Object.create(null), Qu(e), Qu(t ?? {})) : t
}

function _h(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Pt(Object.create(null), e);
    for (const o in t) n[o] = Kt(e[o], t[o]);
    return n
}

function Uf() {
    return {
        app: null,
        config: {
            isNativeTag: Z0,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}

let wh = 0;

function xh(e, t) {
    return function (o, l = null) {
        je(o) || (o = Pt({}, o)), l != null && !pt(l) && (l = null);
        const a = Uf(), i = new WeakSet;
        let r = !1;
        const s = a.app = {
            _uid: wh++,
            _component: o,
            _props: l,
            _container: null,
            _context: a,
            _instance: null,
            version: Zh,
            get config() {
                return a.config
            },
            set config(d) {
            },
            use(d, ...c) {
                return i.has(d) || (d && je(d.install) ? (i.add(d), d.install(s, ...c)) : je(d) && (i.add(d), d(s, ...c))), s
            },
            mixin(d) {
                return a.mixins.includes(d) || a.mixins.push(d), s
            },
            component(d, c) {
                return c ? (a.components[d] = c, s) : a.components[d]
            },
            directive(d, c) {
                return c ? (a.directives[d] = c, s) : a.directives[d]
            },
            mount(d, c, p) {
                if (!r) {
                    const v = Ut(o, l);
                    return v.appContext = a, c && t ? t(v, d) : e(v, d, p), r = !0, s._container = d, d.__vue_app__ = s, Zi(v.component) || v.component.proxy
                }
            },
            unmount() {
                r && (e(null, s._container), delete s._container.__vue_app__)
            },
            provide(d, c) {
                return a.provides[d] = c, s
            },
            runWithContext(d) {
                di = s;
                try {
                    return d()
                } finally {
                    di = null
                }
            }
        };
        return s
    }
}

let di = null;

function un(e, t) {
    if (Rt) {
        let n = Rt.provides;
        const o = Rt.parent && Rt.parent.provides;
        o === n && (n = Rt.provides = Object.create(o)), n[e] = t
    }
}

function vt(e, t, n = !1) {
    const o = Rt || zt;
    if (o || di) {
        const l = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : di._context.provides;
        if (l && e in l) return l[e];
        if (arguments.length > 1) return n && je(t) ? t.call(o && o.proxy) : t
    }
}

function Sh(e, t, n, o = !1) {
    const l = {}, a = {};
    ii(a, Xi, 1), e.propsDefaults = Object.create(null), Wf(e, t, l, a);
    for (const i in e.propsOptions[0]) i in l || (l[i] = void 0);
    n ? e.props = o ? l : Ps(l) : e.type.props ? e.props = l : e.props = a, e.attrs = a
}

function Ch(e, t, n, o) {
    const {props: l, attrs: a, vnode: {patchFlag: i}} = e, r = Qe(l), [s] = e.propsOptions;
    let d = !1;
    if ((o || i > 0) && !(i & 16)) {
        if (i & 8) {
            const c = e.vnode.dynamicProps;
            for (let p = 0; p < c.length; p++) {
                let v = c[p];
                if (Di(e.emitsOptions, v)) continue;
                const m = t[v];
                if (s) if (nt(a, v)) m !== a[v] && (a[v] = m, d = !0); else {
                    const g = Pn(v);
                    l[g] = Gr(s, r, g, m, e, !1)
                } else m !== a[v] && (a[v] = m, d = !0)
            }
        }
    } else {
        Wf(e, t, l, a) && (d = !0);
        let c;
        for (const p in r) (!t || !nt(t, p) && ((c = Fo(p)) === p || !nt(t, c))) && (s ? n && (n[p] !== void 0 || n[c] !== void 0) && (l[p] = Gr(s, r, p, void 0, e, !0)) : delete l[p]);
        if (a !== r) for (const p in a) (!t || !nt(t, p)) && (delete a[p], d = !0)
    }
    d && Nn(e, "set", "$attrs")
}

function Wf(e, t, n, o) {
    const [l, a] = e.propsOptions;
    let i = !1, r;
    if (t) for (let s in t) {
        if (Xa(s)) continue;
        const d = t[s];
        let c;
        l && nt(l, c = Pn(s)) ? !a || !a.includes(c) ? n[c] = d : (r || (r = {}))[c] = d : Di(e.emitsOptions, s) || (!(s in o) || d !== o[s]) && (o[s] = d, i = !0)
    }
    if (a) {
        const s = Qe(n), d = r || bt;
        for (let c = 0; c < a.length; c++) {
            const p = a[c];
            n[p] = Gr(l, s, p, d[p], e, !nt(d, p))
        }
    }
    return i
}

function Gr(e, t, n, o, l, a) {
    const i = e[n];
    if (i != null) {
        const r = nt(i, "default");
        if (r && o === void 0) {
            const s = i.default;
            if (i.type !== Function && !i.skipFactory && je(s)) {
                const {propsDefaults: d} = l;
                n in d ? o = d[n] : (ml(l), o = d[n] = s.call(null, t), Ao())
            } else o = s
        }
        i[0] && (a && !r ? o = !1 : i[1] && (o === "" || o === Fo(n)) && (o = !0))
    }
    return o
}

function Yf(e, t, n = !1) {
    const o = t.propsCache, l = o.get(e);
    if (l) return l;
    const a = e.props, i = {}, r = [];
    let s = !1;
    if (!je(e)) {
        const c = p => {
            s = !0;
            const [v, m] = Yf(p, t, !0);
            Pt(i, v), m && r.push(...m)
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    if (!a && !s) return pt(e) && o.set(e, tl), tl;
    if (ze(a)) for (let c = 0; c < a.length; c++) {
        const p = Pn(a[c]);
        Yu(p) && (i[p] = bt)
    } else if (a) for (const c in a) {
        const p = Pn(c);
        if (Yu(p)) {
            const v = a[c], m = i[p] = ze(v) || je(v) ? {type: v} : Pt({}, v);
            if (m) {
                const g = Gu(Boolean, m.type), x = Gu(String, m.type);
                m[0] = g > -1, m[1] = x < 0 || g < x, (g > -1 || nt(m, "default")) && r.push(p)
            }
        }
    }
    const d = [i, r];
    return pt(e) && o.set(e, d), d
}

function Yu(e) {
    return e[0] !== "$"
}

function Xu(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}

function Zu(e, t) {
    return Xu(e) === Xu(t)
}

function Gu(e, t) {
    return ze(t) ? t.findIndex(n => Zu(n, e)) : je(t) && Zu(t, e) ? 0 : -1
}

const Xf = e => e[0] === "_" || e === "$stable", zs = e => ze(e) ? e.map($n) : [$n(e)], kh = (e, t, n) => {
    if (t._n) return t;
    const o = Xm((...l) => zs(t(...l)), n);
    return o._c = !1, o
}, Zf = (e, t, n) => {
    const o = e._ctx;
    for (const l in e) {
        if (Xf(l)) continue;
        const a = e[l];
        if (je(a)) t[l] = kh(l, a, o); else if (a != null) {
            const i = zs(a);
            t[l] = () => i
        }
    }
}, Gf = (e, t) => {
    const n = zs(t);
    e.slots.default = () => n
}, qh = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = Qe(t), ii(t, "_", n)) : Zf(t, e.slots = {})
    } else e.slots = {}, t && Gf(e, t);
    ii(e.slots, Xi, 1)
}, Th = (e, t, n) => {
    const {vnode: o, slots: l} = e;
    let a = !0, i = bt;
    if (o.shapeFlag & 32) {
        const r = t._;
        r ? n && r === 1 ? a = !1 : (Pt(l, t), !n && r === 1 && delete l._) : (a = !t.$stable, Zf(t, l)), i = t
    } else t && (Gf(e, t), i = {default: 1});
    if (a) for (const r in l) !Xf(r) && i[r] == null && delete l[r]
};

function Jr(e, t, n, o, l = !1) {
    if (ze(e)) {
        e.forEach((v, m) => Jr(v, t && (ze(t) ? t[m] : t), n, o, l));
        return
    }
    if (al(o) && !l) return;
    const a = o.shapeFlag & 4 ? Zi(o.component) || o.component.proxy : o.el, i = l ? null : a, {i: r, r: s} = e,
        d = t && t.r, c = r.refs === bt ? r.refs = {} : r.refs, p = r.setupState;
    if (d != null && d !== s && (Ct(d) ? (c[d] = null, nt(p, d) && (p[d] = null)) : Ot(d) && (d.value = null)), je(s)) ro(s, r, 12, [i, c]); else {
        const v = Ct(s), m = Ot(s);
        if (v || m) {
            const g = () => {
                if (e.f) {
                    const x = v ? nt(p, s) ? p[s] : c[s] : s.value;
                    l ? ze(x) && ks(x, a) : ze(x) ? x.includes(a) || x.push(a) : v ? (c[s] = [a], nt(p, s) && (p[s] = c[s])) : (s.value = [a], e.k && (c[e.k] = s.value))
                } else v ? (c[s] = i, nt(p, s) && (p[s] = i)) : m && (s.value = i, e.k && (c[e.k] = i))
            };
            i ? (g.id = -1, Ft(g, n)) : g()
        }
    }
}

const Ft = th;

function $h(e) {
    return Mh(e)
}

function Mh(e, t) {
    const n = jr();
    n.__VUE__ = !0;
    const {
            insert: o,
            remove: l,
            patchProp: a,
            createElement: i,
            createText: r,
            createComment: s,
            setText: d,
            setElementText: c,
            parentNode: p,
            nextSibling: v,
            setScopeId: m = wn,
            insertStaticContent: g
        } = e, x = (q, P, F, te = null, oe = null, ne = null, ge = !1, he = null, me = !!P.dynamicChildren) => {
            if (q === P) return;
            q && !oo(q, P) && (te = I(q), T(q, oe, ne, !0), q = null), P.patchFlag === -2 && (me = !1, P.dynamicChildren = null);
            const {type: W, ref: ue, shapeFlag: U} = P;
            switch (W) {
                case Yi:
                    w(q, P, F, te);
                    break;
                case cn:
                    S(q, P, F, te);
                    break;
                case Za:
                    q == null && y(P, F, te, ge);
                    break;
                case Yt:
                    M(q, P, F, te, oe, ne, ge, he, me);
                    break;
                default:
                    U & 1 ? C(q, P, F, te, oe, ne, ge, he, me) : U & 6 ? k(q, P, F, te, oe, ne, ge, he, me) : (U & 64 || U & 128) && W.process(q, P, F, te, oe, ne, ge, he, me, _)
            }
            ue != null && oe && Jr(ue, q && q.ref, ne, P || q, !P)
        }, w = (q, P, F, te) => {
            if (q == null) o(P.el = r(P.children), F, te); else {
                const oe = P.el = q.el;
                P.children !== q.children && d(oe, P.children)
            }
        }, S = (q, P, F, te) => {
            q == null ? o(P.el = s(P.children || ""), F, te) : P.el = q.el
        }, y = (q, P, F, te) => {
            [q.el, q.anchor] = g(q.children, P, F, te, q.el, q.anchor)
        }, b = ({el: q, anchor: P}, F, te) => {
            let oe;
            for (; q && q !== P;) oe = v(q), o(q, F, te), q = oe;
            o(P, F, te)
        }, h = ({el: q, anchor: P}) => {
            let F;
            for (; q && q !== P;) F = v(q), l(q), q = F;
            l(P)
        }, C = (q, P, F, te, oe, ne, ge, he, me) => {
            ge = ge || P.type === "svg", q == null ? A(P, F, te, oe, ne, ge, he, me) : V(q, P, oe, ne, ge, he, me)
        }, A = (q, P, F, te, oe, ne, ge, he) => {
            let me, W;
            const {type: ue, props: U, shapeFlag: de, transition: we, dirs: xe} = q;
            if (me = q.el = i(q.type, ne, U && U.is, U), de & 8 ? c(me, q.children) : de & 16 && E(q.children, me, null, te, oe, ne && ue !== "foreignObject", ge, he), xe && ho(q, null, te, "created"), L(me, q, q.scopeId, ge, te), U) {
                for (const Be in U) Be !== "value" && !Xa(Be) && a(me, Be, null, U[Be], ne, q.children, te, oe, G);
                "value" in U && a(me, "value", null, U.value), (W = U.onVnodeBeforeMount) && rn(W, te, q)
            }
            xe && ho(q, null, te, "beforeMount");
            const Ce = Eh(oe, we);
            Ce && we.beforeEnter(me), o(me, P, F), ((W = U && U.onVnodeMounted) || Ce || xe) && Ft(() => {
                W && rn(W, te, q), Ce && we.enter(me), xe && ho(q, null, te, "mounted")
            }, oe)
        }, L = (q, P, F, te, oe) => {
            if (F && m(q, F), te) for (let ne = 0; ne < te.length; ne++) m(q, te[ne]);
            if (oe) {
                let ne = oe.subTree;
                if (P === ne) {
                    const ge = oe.vnode;
                    L(q, ge, ge.scopeId, ge.slotScopeIds, oe.parent)
                }
            }
        }, E = (q, P, F, te, oe, ne, ge, he, me = 0) => {
            for (let W = me; W < q.length; W++) {
                const ue = q[W] = he ? to(q[W]) : $n(q[W]);
                x(null, ue, P, F, te, oe, ne, ge, he)
            }
        }, V = (q, P, F, te, oe, ne, ge) => {
            const he = P.el = q.el;
            let {patchFlag: me, dynamicChildren: W, dirs: ue} = P;
            me |= q.patchFlag & 16;
            const U = q.props || bt, de = P.props || bt;
            let we;
            F && go(F, !1), (we = de.onVnodeBeforeUpdate) && rn(we, F, P, q), ue && ho(P, q, F, "beforeUpdate"), F && go(F, !0);
            const xe = oe && P.type !== "foreignObject";
            if (W ? O(q.dynamicChildren, W, he, F, te, xe, ne) : ge || Q(q, P, he, null, F, te, xe, ne, !1), me > 0) {
                if (me & 16) z(he, P, U, de, F, te, oe); else if (me & 2 && U.class !== de.class && a(he, "class", null, de.class, oe), me & 4 && a(he, "style", U.style, de.style, oe), me & 8) {
                    const Ce = P.dynamicProps;
                    for (let Be = 0; Be < Ce.length; Be++) {
                        const Ne = Ce[Be], Ye = U[Ne], se = de[Ne];
                        (se !== Ye || Ne === "value") && a(he, Ne, Ye, se, oe, q.children, F, te, G)
                    }
                }
                me & 1 && q.children !== P.children && c(he, P.children)
            } else !ge && W == null && z(he, P, U, de, F, te, oe);
            ((we = de.onVnodeUpdated) || ue) && Ft(() => {
                we && rn(we, F, P, q), ue && ho(P, q, F, "updated")
            }, te)
        }, O = (q, P, F, te, oe, ne, ge) => {
            for (let he = 0; he < P.length; he++) {
                const me = q[he], W = P[he],
                    ue = me.el && (me.type === Yt || !oo(me, W) || me.shapeFlag & 70) ? p(me.el) : F;
                x(me, W, ue, null, te, oe, ne, ge, !0)
            }
        }, z = (q, P, F, te, oe, ne, ge) => {
            if (F !== te) {
                if (F !== bt) for (const he in F) !Xa(he) && !(he in te) && a(q, he, F[he], null, ge, P.children, oe, ne, G);
                for (const he in te) {
                    if (Xa(he)) continue;
                    const me = te[he], W = F[he];
                    me !== W && he !== "value" && a(q, he, W, me, ge, P.children, oe, ne, G)
                }
                "value" in te && a(q, "value", F.value, te.value)
            }
        }, M = (q, P, F, te, oe, ne, ge, he, me) => {
            const W = P.el = q ? q.el : r(""), ue = P.anchor = q ? q.anchor : r("");
            let {patchFlag: U, dynamicChildren: de, slotScopeIds: we} = P;
            we && (he = he ? he.concat(we) : we), q == null ? (o(W, F, te), o(ue, F, te), E(P.children, F, ue, oe, ne, ge, he, me)) : U > 0 && U & 64 && de && q.dynamicChildren ? (O(q.dynamicChildren, de, F, oe, ne, ge, he), (P.key != null || oe && P === oe.subTree) && Ns(q, P, !0)) : Q(q, P, F, ue, oe, ne, ge, he, me)
        }, k = (q, P, F, te, oe, ne, ge, he, me) => {
            P.slotScopeIds = he, q == null ? P.shapeFlag & 512 ? oe.ctx.activate(P, F, te, ge, me) : B(P, F, te, oe, ne, ge, me) : Y(q, P, me)
        }, B = (q, P, F, te, oe, ne, ge) => {
            const he = q.component = Hh(q, te, oe);
            if (Qi(q) && (he.ctx.renderer = _), jh(he), he.asyncDep) {
                if (oe && oe.registerDep(he, J), !q.el) {
                    const me = he.subTree = Ut(cn);
                    S(null, me, P, F)
                }
                return
            }
            J(he, q, P, F, oe, ne, ge)
        }, Y = (q, P, F) => {
            const te = P.component = q.component;
            if (Jm(q, P, F)) if (te.asyncDep && !te.asyncResolved) {
                $(te, P, F);
                return
            } else te.next = P, Km(te.update), te.update(); else P.el = q.el, te.vnode = P
        }, J = (q, P, F, te, oe, ne, ge) => {
            const he = () => {
                if (q.isMounted) {
                    let {next: ue, bu: U, u: de, parent: we, vnode: xe} = q, Ce = ue, Be;
                    go(q, !1), ue ? (ue.el = xe.el, $(q, ue, ge)) : ue = xe, U && Ul(U), (Be = ue.props && ue.props.onVnodeBeforeUpdate) && rn(Be, we, ue, xe), go(q, !0);
                    const Ne = vr(q), Ye = q.subTree;
                    q.subTree = Ne, x(Ye, Ne, p(Ye.el), I(Ye), q, oe, ne), ue.el = Ne.el, Ce === null && eh(q, Ne.el), de && Ft(de, oe), (Be = ue.props && ue.props.onVnodeUpdated) && Ft(() => rn(Be, we, ue, xe), oe)
                } else {
                    let ue;
                    const {el: U, props: de} = P, {bm: we, m: xe, parent: Ce} = q, Be = al(P);
                    if (go(q, !1), we && Ul(we), !Be && (ue = de && de.onVnodeBeforeMount) && rn(ue, Ce, P), go(q, !0), U && re) {
                        const Ne = () => {
                            q.subTree = vr(q), re(U, q.subTree, q, oe, null)
                        };
                        Be ? P.type.__asyncLoader().then(() => !q.isUnmounted && Ne()) : Ne()
                    } else {
                        const Ne = q.subTree = vr(q);
                        x(null, Ne, F, te, q, oe, ne), P.el = Ne.el
                    }
                    if (xe && Ft(xe, oe), !Be && (ue = de && de.onVnodeMounted)) {
                        const Ne = P;
                        Ft(() => rn(ue, Ce, Ne), oe)
                    }
                    (P.shapeFlag & 256 || Ce && al(Ce.vnode) && Ce.vnode.shapeFlag & 256) && q.a && Ft(q.a, oe), q.isMounted = !0, P = F = te = null
                }
            }, me = q.effect = new $s(he, () => Ls(W), q.scope), W = q.update = () => me.run();
            W.id = q.uid, go(q, !0), W()
        }, $ = (q, P, F) => {
            P.component = q;
            const te = q.vnode.props;
            q.vnode = P, q.next = null, Ch(q, P.props, te, F), Th(q, P.children, F), Sl(), Iu(), Cl()
        }, Q = (q, P, F, te, oe, ne, ge, he, me = !1) => {
            const W = q && q.children, ue = q ? q.shapeFlag : 0, U = P.children, {patchFlag: de, shapeFlag: we} = P;
            if (de > 0) {
                if (de & 128) {
                    be(W, U, F, te, oe, ne, ge, he, me);
                    return
                } else if (de & 256) {
                    ae(W, U, F, te, oe, ne, ge, he, me);
                    return
                }
            }
            we & 8 ? (ue & 16 && G(W, oe, ne), U !== W && c(F, U)) : ue & 16 ? we & 16 ? be(W, U, F, te, oe, ne, ge, he, me) : G(W, oe, ne, !0) : (ue & 8 && c(F, ""), we & 16 && E(U, F, te, oe, ne, ge, he, me))
        }, ae = (q, P, F, te, oe, ne, ge, he, me) => {
            q = q || tl, P = P || tl;
            const W = q.length, ue = P.length, U = Math.min(W, ue);
            let de;
            for (de = 0; de < U; de++) {
                const we = P[de] = me ? to(P[de]) : $n(P[de]);
                x(q[de], we, F, null, oe, ne, ge, he, me)
            }
            W > ue ? G(q, oe, ne, !0, !1, U) : E(P, F, te, oe, ne, ge, he, me, U)
        }, be = (q, P, F, te, oe, ne, ge, he, me) => {
            let W = 0;
            const ue = P.length;
            let U = q.length - 1, de = ue - 1;
            for (; W <= U && W <= de;) {
                const we = q[W], xe = P[W] = me ? to(P[W]) : $n(P[W]);
                if (oo(we, xe)) x(we, xe, F, null, oe, ne, ge, he, me); else break;
                W++
            }
            for (; W <= U && W <= de;) {
                const we = q[U], xe = P[de] = me ? to(P[de]) : $n(P[de]);
                if (oo(we, xe)) x(we, xe, F, null, oe, ne, ge, he, me); else break;
                U--, de--
            }
            if (W > U) {
                if (W <= de) {
                    const we = de + 1, xe = we < ue ? P[we].el : te;
                    for (; W <= de;) x(null, P[W] = me ? to(P[W]) : $n(P[W]), F, xe, oe, ne, ge, he, me), W++
                }
            } else if (W > de) for (; W <= U;) T(q[W], oe, ne, !0), W++; else {
                const we = W, xe = W, Ce = new Map;
                for (W = xe; W <= de; W++) {
                    const Te = P[W] = me ? to(P[W]) : $n(P[W]);
                    Te.key != null && Ce.set(Te.key, W)
                }
                let Be, Ne = 0;
                const Ye = de - xe + 1;
                let se = !1, _e = 0;
                const le = new Array(Ye);
                for (W = 0; W < Ye; W++) le[W] = 0;
                for (W = we; W <= U; W++) {
                    const Te = q[W];
                    if (Ne >= Ye) {
                        T(Te, oe, ne, !0);
                        continue
                    }
                    let Re;
                    if (Te.key != null) Re = Ce.get(Te.key); else for (Be = xe; Be <= de; Be++) if (le[Be - xe] === 0 && oo(Te, P[Be])) {
                        Re = Be;
                        break
                    }
                    Re === void 0 ? T(Te, oe, ne, !0) : (le[Re - xe] = W + 1, Re >= _e ? _e = Re : se = !0, x(Te, P[Re], F, null, oe, ne, ge, he, me), Ne++)
                }
                const ye = se ? Ph(le) : tl;
                for (Be = ye.length - 1, W = Ye - 1; W >= 0; W--) {
                    const Te = xe + W, Re = P[Te], Me = Te + 1 < ue ? P[Te + 1].el : te;
                    le[W] === 0 ? x(null, Re, F, Me, oe, ne, ge, he, me) : se && (Be < 0 || W !== ye[Be] ? K(Re, F, Me, 2) : Be--)
                }
            }
        }, K = (q, P, F, te, oe = null) => {
            const {el: ne, type: ge, transition: he, children: me, shapeFlag: W} = q;
            if (W & 6) {
                K(q.component.subTree, P, F, te);
                return
            }
            if (W & 128) {
                q.suspense.move(P, F, te);
                return
            }
            if (W & 64) {
                ge.move(q, P, F, _);
                return
            }
            if (ge === Yt) {
                o(ne, P, F);
                for (let U = 0; U < me.length; U++) K(me[U], P, F, te);
                o(q.anchor, P, F);
                return
            }
            if (ge === Za) {
                b(q, P, F);
                return
            }
            if (te !== 2 && W & 1 && he) if (te === 0) he.beforeEnter(ne), o(ne, P, F), Ft(() => he.enter(ne), oe); else {
                const {leave: U, delayLeave: de, afterLeave: we} = he, xe = () => o(ne, P, F), Ce = () => {
                    U(ne, () => {
                        xe(), we && we()
                    })
                };
                de ? de(ne, xe, Ce) : Ce()
            } else o(ne, P, F)
        }, T = (q, P, F, te = !1, oe = !1) => {
            const {
                type: ne,
                props: ge,
                ref: he,
                children: me,
                dynamicChildren: W,
                shapeFlag: ue,
                patchFlag: U,
                dirs: de
            } = q;
            if (he != null && Jr(he, null, F, q, !0), ue & 256) {
                P.ctx.deactivate(q);
                return
            }
            const we = ue & 1 && de, xe = !al(q);
            let Ce;
            if (xe && (Ce = ge && ge.onVnodeBeforeUnmount) && rn(Ce, P, q), ue & 6) ie(q.component, F, te); else {
                if (ue & 128) {
                    q.suspense.unmount(F, te);
                    return
                }
                we && ho(q, null, P, "beforeUnmount"), ue & 64 ? q.type.remove(q, P, F, oe, _, te) : W && (ne !== Yt || U > 0 && U & 64) ? G(W, P, F, !1, !0) : (ne === Yt && U & 384 || !oe && ue & 16) && G(me, P, F), te && ee(q)
            }
            (xe && (Ce = ge && ge.onVnodeUnmounted) || we) && Ft(() => {
                Ce && rn(Ce, P, q), we && ho(q, null, P, "unmounted")
            }, F)
        }, ee = q => {
            const {type: P, el: F, anchor: te, transition: oe} = q;
            if (P === Yt) {
                Z(F, te);
                return
            }
            if (P === Za) {
                h(q);
                return
            }
            const ne = () => {
                l(F), oe && !oe.persisted && oe.afterLeave && oe.afterLeave()
            };
            if (q.shapeFlag & 1 && oe && !oe.persisted) {
                const {leave: ge, delayLeave: he} = oe, me = () => ge(F, ne);
                he ? he(q.el, ne, me) : me()
            } else ne()
        }, Z = (q, P) => {
            let F;
            for (; q !== P;) F = v(q), l(q), q = F;
            l(P)
        }, ie = (q, P, F) => {
            const {bum: te, scope: oe, update: ne, subTree: ge, um: he} = q;
            te && Ul(te), oe.stop(), ne && (ne.active = !1, T(ge, q, P, F)), he && Ft(he, P), Ft(() => {
                q.isUnmounted = !0
            }, P), P && P.pendingBranch && !P.isUnmounted && q.asyncDep && !q.asyncResolved && q.suspenseId === P.pendingId && (P.deps--, P.deps === 0 && P.resolve())
        }, G = (q, P, F, te = !1, oe = !1, ne = 0) => {
            for (let ge = ne; ge < q.length; ge++) T(q[ge], P, F, te, oe)
        }, I = q => q.shapeFlag & 6 ? I(q.component.subTree) : q.shapeFlag & 128 ? q.suspense.next() : v(q.anchor || q.el),
        N = (q, P, F) => {
            q == null ? P._vnode && T(P._vnode, null, null, !0) : x(P._vnode || null, q, P, null, null, null, F), Iu(), Bf(), P._vnode = q
        }, _ = {p: x, um: T, m: K, r: ee, mt: B, mc: E, pc: Q, pbc: O, n: I, o: e};
    let H, re;
    return t && ([H, re] = t(_)), {render: N, hydrate: H, createApp: xh(N, H)}
}

function go({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function Eh(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Ns(e, t, n = !1) {
    const o = e.children, l = t.children;
    if (ze(o) && ze(l)) for (let a = 0; a < o.length; a++) {
        const i = o[a];
        let r = l[a];
        r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = l[a] = to(l[a]), r.el = i.el), n || Ns(i, r)), r.type === Yi && (r.el = i.el)
    }
}

function Ph(e) {
    const t = e.slice(), n = [0];
    let o, l, a, i, r;
    const s = e.length;
    for (o = 0; o < s; o++) {
        const d = e[o];
        if (d !== 0) {
            if (l = n[n.length - 1], e[l] < d) {
                t[o] = l, n.push(o);
                continue
            }
            for (a = 0, i = n.length - 1; a < i;) r = a + i >> 1, e[n[r]] < d ? a = r + 1 : i = r;
            d < e[n[a]] && (a > 0 && (t[o] = n[a - 1]), n[a] = o)
        }
    }
    for (a = n.length, i = n[a - 1]; a-- > 0;) n[a] = i, i = t[i];
    return n
}

const Ah = e => e.__isTeleport, Yl = e => e && (e.disabled || e.disabled === ""),
    Ju = e => typeof SVGElement < "u" && e instanceof SVGElement, es = (e, t) => {
        const n = e && e.to;
        return Ct(n) ? t ? t(n) : null : n
    }, Bh = {
        __isTeleport: !0, process(e, t, n, o, l, a, i, r, s, d) {
            const {mc: c, pc: p, pbc: v, o: {insert: m, querySelector: g, createText: x, createComment: w}} = d,
                S = Yl(t.props);
            let {shapeFlag: y, children: b, dynamicChildren: h} = t;
            if (e == null) {
                const C = t.el = x(""), A = t.anchor = x("");
                m(C, n, o), m(A, n, o);
                const L = t.target = es(t.props, g), E = t.targetAnchor = x("");
                L && (m(E, L), i = i || Ju(L));
                const V = (O, z) => {
                    y & 16 && c(b, O, z, l, a, i, r, s)
                };
                S ? V(n, A) : L && V(L, E)
            } else {
                t.el = e.el;
                const C = t.anchor = e.anchor, A = t.target = e.target, L = t.targetAnchor = e.targetAnchor,
                    E = Yl(e.props), V = E ? n : A, O = E ? C : L;
                if (i = i || Ju(A), h ? (v(e.dynamicChildren, h, V, l, a, i, r), Ns(e, t, !0)) : s || p(e, t, V, O, l, a, i, r, !1), S) E ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Oa(t, n, C, d, 1); else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const z = t.target = es(t.props, g);
                    z && Oa(t, z, null, d, 0)
                } else E && Oa(t, A, L, d, 1)
            }
            Jf(t)
        }, remove(e, t, n, o, {um: l, o: {remove: a}}, i) {
            const {shapeFlag: r, children: s, anchor: d, targetAnchor: c, target: p, props: v} = e;
            if (p && a(c), i && a(d), r & 16) {
                const m = i || !Yl(v);
                for (let g = 0; g < s.length; g++) {
                    const x = s[g];
                    l(x, t, n, m, !!x.dynamicChildren)
                }
            }
        }, move: Oa, hydrate: Oh
    };

function Oa(e, t, n, {o: {insert: o}, m: l}, a = 2) {
    a === 0 && o(e.targetAnchor, t, n);
    const {el: i, anchor: r, shapeFlag: s, children: d, props: c} = e, p = a === 2;
    if (p && o(i, t, n), (!p || Yl(c)) && s & 16) for (let v = 0; v < d.length; v++) l(d[v], t, n, 2);
    p && o(r, t, n)
}

function Oh(e, t, n, o, l, a, {o: {nextSibling: i, parentNode: r, querySelector: s}}, d) {
    const c = t.target = es(t.props, s);
    if (c) {
        const p = c._lpa || c.firstChild;
        if (t.shapeFlag & 16) if (Yl(t.props)) t.anchor = d(i(e), t, r(e), n, o, l, a), t.targetAnchor = p; else {
            t.anchor = i(e);
            let v = p;
            for (; v;) if (v = i(v), v && v.nodeType === 8 && v.data === "teleport anchor") {
                t.targetAnchor = v, c._lpa = t.targetAnchor && i(t.targetAnchor);
                break
            }
            d(p, t, c, n, o, l, a)
        }
        Jf(t)
    }
    return t.anchor && i(t.anchor)
}

const Lh = Bh;

function Jf(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
        t.ut()
    }
}

const Yt = Symbol.for("v-fgt"), Yi = Symbol.for("v-txt"), cn = Symbol.for("v-cmt"), Za = Symbol.for("v-stc"), Xl = [];
let _n = null;

function Is(e = !1) {
    Xl.push(_n = e ? null : [])
}

function Rh() {
    Xl.pop(), _n = Xl[Xl.length - 1] || null
}

let ia = 1;

function ec(e) {
    ia += e
}

function ev(e) {
    return e.dynamicChildren = ia > 0 ? _n || tl : null, Rh(), ia > 0 && _n && _n.push(e), e
}

function oC(e, t, n, o, l, a) {
    return ev(nv(e, t, n, o, l, a, !0))
}

function Ds(e, t, n, o, l) {
    return ev(Ut(e, t, n, o, l, !0))
}

function ra(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function oo(e, t) {
    return e.type === t.type && e.key === t.key
}

const Xi = "__vInternal", tv = ({key: e}) => e ?? null, Ga = ({
                                                                  ref: e,
                                                                  ref_key: t,
                                                                  ref_for: n
                                                              }) => (typeof e == "number" && (e = "" + e), e != null ? Ct(e) || Ot(e) || je(e) ? {
    i: zt,
    r: e,
    k: t,
    f: !!n
} : e : null);

function nv(e, t = null, n = null, o = 0, l = null, a = e === Yt ? 0 : 1, i = !1, r = !1) {
    const s = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && tv(t),
        ref: t && Ga(t),
        scopeId: Hi,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: o,
        dynamicProps: l,
        dynamicChildren: null,
        appContext: null,
        ctx: zt
    };
    return r ? (Hs(s, n), a & 128 && e.normalize(s)) : n && (s.shapeFlag |= Ct(n) ? 8 : 16), ia > 0 && !i && _n && (s.patchFlag > 0 || a & 6) && s.patchFlag !== 32 && _n.push(s), s
}

const Ut = Vh;

function Vh(e, t = null, n = null, o = 0, l = null, a = !1) {
    if ((!e || e === ph) && (e = cn), ra(e)) {
        const r = Dn(e, t, !0);
        return n && Hs(r, n), ia > 0 && !a && _n && (r.shapeFlag & 6 ? _n[_n.indexOf(e)] = r : _n.push(r)), r.patchFlag |= -2, r
    }
    if (Wh(e) && (e = e.__vccOpts), t) {
        t = Fh(t);
        let {class: r, style: s} = t;
        r && !Ct(r) && (t.class = zi(r)), pt(s) && (qf(s) && !ze(s) && (s = Pt({}, s)), t.style = Fi(s))
    }
    const i = Ct(e) ? 1 : Rf(e) ? 128 : Ah(e) ? 64 : pt(e) ? 4 : je(e) ? 2 : 0;
    return nv(e, t, n, o, l, i, a, !0)
}

function Fh(e) {
    return e ? qf(e) || Xi in e ? Pt({}, e) : e : null
}

function Dn(e, t, n = !1) {
    const {props: o, ref: l, patchFlag: a, children: i} = e, r = t ? Nh(o || {}, t) : o;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: r,
        key: r && tv(r),
        ref: t && t.ref ? n && l ? ze(l) ? l.concat(Ga(t)) : [l, Ga(t)] : Ga(t) : l,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Yt ? a === -1 ? 16 : a | 16 : a,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Dn(e.ssContent),
        ssFallback: e.ssFallback && Dn(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function zh(e = " ", t = 0) {
    return Ut(Yi, null, e, t)
}

function lC(e = "", t = !1) {
    return t ? (Is(), Ds(cn, null, e)) : Ut(cn, null, e)
}

function $n(e) {
    return e == null || typeof e == "boolean" ? Ut(cn) : ze(e) ? Ut(Yt, null, e.slice()) : typeof e == "object" ? to(e) : Ut(Yi, null, String(e))
}

function to(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dn(e)
}

function Hs(e, t) {
    let n = 0;
    const {shapeFlag: o} = e;
    if (t == null) t = null; else if (ze(t)) n = 16; else if (typeof t == "object") if (o & 65) {
        const l = t.default;
        l && (l._c && (l._d = !1), Hs(e, l()), l._c && (l._d = !0));
        return
    } else {
        n = 32;
        const l = t._;
        !l && !(Xi in t) ? t._ctx = zt : l === 3 && zt && (zt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    } else je(t) ? (t = {default: t, _ctx: zt}, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [zh(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function Nh(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        for (const l in o) if (l === "class") t.class !== o.class && (t.class = zi([t.class, o.class])); else if (l === "style") t.style = Fi([t.style, o.style]); else if (Oi(l)) {
            const a = t[l], i = o[l];
            i && a !== i && !(ze(a) && a.includes(i)) && (t[l] = a ? [].concat(a, i) : i)
        } else l !== "" && (t[l] = o[l])
    }
    return t
}

function rn(e, t, n, o = null) {
    sn(e, t, 7, [n, o])
}

const Ih = Uf();
let Dh = 0;

function Hh(e, t, n) {
    const o = e.type, l = (t ? t.appContext : e.appContext) || Ih, a = {
        uid: Dh++,
        vnode: e,
        type: o,
        parent: t,
        appContext: l,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new fm(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(l.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Yf(o, l),
        emitsOptions: Lf(o, l),
        emit: null,
        emitted: null,
        propsDefaults: bt,
        inheritAttrs: o.inheritAttrs,
        ctx: bt,
        data: bt,
        props: bt,
        attrs: bt,
        slots: bt,
        refs: bt,
        setupState: bt,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return a.ctx = {_: a}, a.root = t ? t.root : a, a.emit = Ym.bind(null, a), e.ce && e.ce(a), a
}

let Rt = null;
const Se = () => Rt || zt;
let js, Do, tc = "__VUE_INSTANCE_SETTERS__";
(Do = jr()[tc]) || (Do = jr()[tc] = []), Do.push(e => Rt = e), js = e => {
    Do.length > 1 ? Do.forEach(t => t(e)) : Do[0](e)
};
const ml = e => {
    js(e), e.scope.on()
}, Ao = () => {
    Rt && Rt.scope.off(), js(null)
};

function ov(e) {
    return e.vnode.shapeFlag & 4
}

let sa = !1;

function jh(e, t = !1) {
    sa = t;
    const {props: n, children: o} = e.vnode, l = ov(e);
    Sh(e, n, l, t), qh(e, o);
    const a = l ? Qh(e, t) : void 0;
    return sa = !1, a
}

function Qh(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = ma(new Proxy(e.ctx, mh));
    const {setup: o} = n;
    if (o) {
        const l = e.setupContext = o.length > 1 ? Uh(e) : null;
        ml(e), Sl();
        const a = ro(o, e, 0, [e.props, l]);
        if (Cl(), Ao(), cf(a)) {
            if (a.then(Ao, Ao), t) return a.then(i => {
                nc(e, i, t)
            }).catch(i => {
                Ii(i, e, 0)
            });
            e.asyncDep = a
        } else nc(e, a, t)
    } else lv(e, t)
}

function nc(e, t, n) {
    je(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : pt(t) && (e.setupState = Ef(t)), lv(e, n)
}

let oc;

function lv(e, t, n) {
    const o = e.type;
    if (!e.render) {
        if (!t && oc && !o.render) {
            const l = o.template || Fs(e).template;
            if (l) {
                const {isCustomElement: a, compilerOptions: i} = e.appContext.config, {
                    delimiters: r,
                    compilerOptions: s
                } = o, d = Pt(Pt({isCustomElement: a, delimiters: r}, i), s);
                o.render = oc(l, d)
            }
        }
        e.render = o.render || wn
    }
    {
        ml(e), Sl();
        try {
            hh(e)
        } finally {
            Cl(), Ao()
        }
    }
}

function Kh(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
        get(t, n) {
            return Xt(e, "get", "$attrs"), t[n]
        }
    }))
}

function Uh(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        get attrs() {
            return Kh(e)
        }, slots: e.slots, emit: e.emit, expose: t
    }
}

function Zi(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Ef(ma(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Wl) return Wl[n](e)
        }, has(t, n) {
            return n in t || n in Wl
        }
    }))
}

function ts(e, t = !0) {
    return je(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Wh(e) {
    return je(e) && "__vccOpts" in e
}

const f = (e, t) => Hm(e, t, sa);

function u(e, t, n) {
    const o = arguments.length;
    return o === 2 ? pt(t) && !ze(t) ? ra(t) ? Ut(e, null, [t]) : Ut(e, t) : Ut(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && ra(n) && (n = [n]), Ut(e, t, n))
}

const Yh = Symbol.for("v-scx"), Xh = () => vt(Yh), Zh = "3.3.7", Gh = "http://www.w3.org/2000/svg",
    qo = typeof document < "u" ? document : null, lc = qo && qo.createElement("template"), Jh = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, o) => {
            const l = t ? qo.createElementNS(Gh, e) : qo.createElement(e, n ? {is: n} : void 0);
            return e === "select" && o && o.multiple != null && l.setAttribute("multiple", o.multiple), l
        },
        createText: e => qo.createTextNode(e),
        createComment: e => qo.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => qo.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, o, l, a) {
            const i = n ? n.previousSibling : t.lastChild;
            if (l && (l === a || l.nextSibling)) for (; t.insertBefore(l.cloneNode(!0), n), !(l === a || !(l = l.nextSibling));) ; else {
                lc.innerHTML = o ? `<svg>${e}</svg>` : e;
                const r = lc.content;
                if (o) {
                    const s = r.firstChild;
                    for (; s.firstChild;) r.appendChild(s.firstChild);
                    r.removeChild(s)
                }
                t.insertBefore(r, n)
            }
            return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    }, Wn = "transition", Bl = "animation", hl = Symbol("_vtc"), $t = (e, {slots: t}) => u(ah, iv(e), t);
$t.displayName = "Transition";
const av = {
    name: String,
    type: String,
    css: {type: Boolean, default: !0},
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}, eg = $t.props = Pt({}, zf, av), bo = (e, t = []) => {
    ze(e) ? e.forEach(n => n(...t)) : e && e(...t)
}, ac = e => e ? ze(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function iv(e) {
    const t = {};
    for (const M in e) M in av || (t[M] = e[M]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: o,
        duration: l,
        enterFromClass: a = `${n}-enter-from`,
        enterActiveClass: i = `${n}-enter-active`,
        enterToClass: r = `${n}-enter-to`,
        appearFromClass: s = a,
        appearActiveClass: d = i,
        appearToClass: c = r,
        leaveFromClass: p = `${n}-leave-from`,
        leaveActiveClass: v = `${n}-leave-active`,
        leaveToClass: m = `${n}-leave-to`
    } = e, g = tg(l), x = g && g[0], w = g && g[1], {
        onBeforeEnter: S,
        onEnter: y,
        onEnterCancelled: b,
        onLeave: h,
        onLeaveCancelled: C,
        onBeforeAppear: A = S,
        onAppear: L = y,
        onAppearCancelled: E = b
    } = t, V = (M, k, B) => {
        Gn(M, k ? c : r), Gn(M, k ? d : i), B && B()
    }, O = (M, k) => {
        M._isLeaving = !1, Gn(M, p), Gn(M, m), Gn(M, v), k && k()
    }, z = M => (k, B) => {
        const Y = M ? L : y, J = () => V(k, M, B);
        bo(Y, [k, J]), ic(() => {
            Gn(k, M ? s : a), Rn(k, M ? c : r), ac(Y) || rc(k, o, x, J)
        })
    };
    return Pt(t, {
        onBeforeEnter(M) {
            bo(S, [M]), Rn(M, a), Rn(M, i)
        }, onBeforeAppear(M) {
            bo(A, [M]), Rn(M, s), Rn(M, d)
        }, onEnter: z(!1), onAppear: z(!0), onLeave(M, k) {
            M._isLeaving = !0;
            const B = () => O(M, k);
            Rn(M, p), sv(), Rn(M, v), ic(() => {
                M._isLeaving && (Gn(M, p), Rn(M, m), ac(h) || rc(M, o, w, B))
            }), bo(h, [M, B])
        }, onEnterCancelled(M) {
            V(M, !1), bo(b, [M])
        }, onAppearCancelled(M) {
            V(M, !0), bo(E, [M])
        }, onLeaveCancelled(M) {
            O(M), bo(C, [M])
        }
    })
}

function tg(e) {
    if (e == null) return null;
    if (pt(e)) return [br(e.enter), br(e.leave)];
    {
        const t = br(e);
        return [t, t]
    }
}

function br(e) {
    return am(e)
}

function Rn(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[hl] || (e[hl] = new Set)).add(t)
}

function Gn(e, t) {
    t.split(/\s+/).forEach(o => o && e.classList.remove(o));
    const n = e[hl];
    n && (n.delete(t), n.size || (e[hl] = void 0))
}

function ic(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}

let ng = 0;

function rc(e, t, n, o) {
    const l = e._endId = ++ng, a = () => {
        l === e._endId && o()
    };
    if (n) return setTimeout(a, n);
    const {type: i, timeout: r, propCount: s} = rv(e, t);
    if (!i) return o();
    const d = i + "end";
    let c = 0;
    const p = () => {
        e.removeEventListener(d, v), a()
    }, v = m => {
        m.target === e && ++c >= s && p()
    };
    setTimeout(() => {
        c < s && p()
    }, r + 1), e.addEventListener(d, v)
}

function rv(e, t) {
    const n = window.getComputedStyle(e), o = g => (n[g] || "").split(", "), l = o(`${Wn}Delay`),
        a = o(`${Wn}Duration`), i = sc(l, a), r = o(`${Bl}Delay`), s = o(`${Bl}Duration`), d = sc(r, s);
    let c = null, p = 0, v = 0;
    t === Wn ? i > 0 && (c = Wn, p = i, v = a.length) : t === Bl ? d > 0 && (c = Bl, p = d, v = s.length) : (p = Math.max(i, d), c = p > 0 ? i > d ? Wn : Bl : null, v = c ? c === Wn ? a.length : s.length : 0);
    const m = c === Wn && /\b(transform|all)(,|$)/.test(o(`${Wn}Property`).toString());
    return {type: c, timeout: p, propCount: v, hasTransform: m}
}

function sc(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, o) => uc(n) + uc(e[o])))
}

function uc(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function sv() {
    return document.body.offsetHeight
}

function og(e, t, n) {
    const o = e[hl];
    o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

const Qs = Symbol("_vod"), uv = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Qs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ol(e, t)
    }, mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    }, updated(e, {value: t, oldValue: n}, {transition: o}) {
        !t != !n && (o ? t ? (o.beforeEnter(e), Ol(e, !0), o.enter(e)) : o.leave(e, () => {
            Ol(e, !1)
        }) : Ol(e, t))
    }, beforeUnmount(e, {value: t}) {
        Ol(e, t)
    }
};

function Ol(e, t) {
    e.style.display = t ? e[Qs] : "none"
}

function lg(e, t, n) {
    const o = e.style, l = Ct(n);
    if (n && !l) {
        if (t && !Ct(t)) for (const a in t) n[a] == null && ns(o, a, "");
        for (const a in n) ns(o, a, n[a])
    } else {
        const a = o.display;
        l ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), Qs in e && (o.display = a)
    }
}

const cc = /\s*!important$/;

function ns(e, t, n) {
    if (ze(n)) n.forEach(o => ns(e, t, o)); else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n); else {
        const o = ag(e, t);
        cc.test(n) ? e.setProperty(Fo(o), n.replace(cc, ""), "important") : e[o] = n
    }
}

const dc = ["Webkit", "Moz", "ms"], yr = {};

function ag(e, t) {
    const n = yr[t];
    if (n) return n;
    let o = Pn(t);
    if (o !== "filter" && o in e) return yr[t] = o;
    o = Vi(o);
    for (let l = 0; l < dc.length; l++) {
        const a = dc[l] + o;
        if (a in e) return yr[t] = a
    }
    return t
}

const fc = "http://www.w3.org/1999/xlink";

function ig(e, t, n, o, l) {
    if (o && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(fc, t.slice(6, t.length)) : e.setAttributeNS(fc, t, n); else {
        const a = dm(t);
        n == null || a && !vf(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n)
    }
}

function rg(e, t, n, o, l, a, i) {
    if (t === "innerHTML" || t === "textContent") {
        o && i(o, l, a), e[t] = n ?? "";
        return
    }
    const r = e.tagName;
    if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
        e._value = n;
        const d = r === "OPTION" ? e.getAttribute("value") : e.value, c = n ?? "";
        d !== c && (e.value = c), n == null && e.removeAttribute(t);
        return
    }
    let s = !1;
    if (n === "" || n == null) {
        const d = typeof e[t];
        d === "boolean" ? n = vf(n) : n == null && d === "string" ? (n = "", s = !0) : d === "number" && (n = 0, s = !0)
    }
    try {
        e[t] = n
    } catch {
    }
    s && e.removeAttribute(t)
}

function sg(e, t, n, o) {
    e.addEventListener(t, n, o)
}

function ug(e, t, n, o) {
    e.removeEventListener(t, n, o)
}

const vc = Symbol("_vei");

function cg(e, t, n, o, l = null) {
    const a = e[vc] || (e[vc] = {}), i = a[t];
    if (o && i) i.value = o; else {
        const [r, s] = dg(t);
        if (o) {
            const d = a[t] = pg(o, l);
            sg(e, r, d, s)
        } else i && (ug(e, r, i, s), a[t] = void 0)
    }
}

const pc = /(?:Once|Passive|Capture)$/;

function dg(e) {
    let t;
    if (pc.test(e)) {
        t = {};
        let o;
        for (; o = e.match(pc);) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Fo(e.slice(2)), t]
}

let _r = 0;
const fg = Promise.resolve(), vg = () => _r || (fg.then(() => _r = 0), _r = Date.now());

function pg(e, t) {
    const n = o => {
        if (!o._vts) o._vts = Date.now(); else if (o._vts <= n.attached) return;
        sn(mg(o, n.value), t, 5, [o])
    };
    return n.value = e, n.attached = vg(), n
}

function mg(e, t) {
    if (ze(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(o => l => !l._stopped && o && o(l))
    } else return t
}

const mc = /^on[a-z]/, hg = (e, t, n, o, l = !1, a, i, r, s) => {
    t === "class" ? og(e, o, l) : t === "style" ? lg(e, n, o) : Oi(t) ? Cs(t) || cg(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : gg(e, t, o, l)) ? rg(e, t, o, a, i, r, s) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ig(e, t, o, l))
};

function gg(e, t, n, o) {
    return o ? !!(t === "innerHTML" || t === "textContent" || t in e && mc.test(t) && je(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || mc.test(t) && Ct(n) ? !1 : t in e
}

function aC(e) {
    const t = Se();
    if (!t) return;
    const n = t.ut = (l = e(t.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(a => ls(a, l))
    }, o = () => {
        const l = e(t.proxy);
        os(t.subTree, l), n(l)
    };
    nh(o), mt(() => {
        const l = new MutationObserver(o);
        l.observe(t.subTree.el.parentNode, {childList: !0}), ql(() => l.disconnect())
    })
}

function os(e, t) {
    if (e.shapeFlag & 128) {
        const n = e.suspense;
        e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
            os(n.activeBranch, t)
        })
    }
    for (; e.component;) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) ls(e.el, t); else if (e.type === Yt) e.children.forEach(n => os(n, t)); else if (e.type === Za) {
        let {el: n, anchor: o} = e;
        for (; n && (ls(n, t), n !== o);) n = n.nextSibling
    }
}

function ls(e, t) {
    if (e.nodeType === 1) {
        const n = e.style;
        for (const o in t) n.setProperty(`--${o}`, t[o])
    }
}

const cv = new WeakMap, dv = new WeakMap, fi = Symbol("_moveCb"), hc = Symbol("_enterCb"), fv = {
    name: "TransitionGroup", props: Pt({}, eg, {tag: String, moveClass: String}), setup(e, {slots: t}) {
        const n = Se(), o = Ff();
        let l, a;
        return Wi(() => {
            if (!l.length) return;
            const i = e.moveClass || `${e.name || "v"}-move`;
            if (!Sg(l[0].el, n.vnode.el, i)) return;
            l.forEach(_g), l.forEach(wg);
            const r = l.filter(xg);
            sv(), r.forEach(s => {
                const d = s.el, c = d.style;
                Rn(d, i), c.transform = c.webkitTransform = c.transitionDuration = "";
                const p = d[fi] = v => {
                    v && v.target !== d || (!v || /transform$/.test(v.propertyName)) && (d.removeEventListener("transitionend", p), d[fi] = null, Gn(d, i))
                };
                d.addEventListener("transitionend", p)
            })
        }), () => {
            const i = Qe(e), r = iv(i);
            let s = i.tag || Yt;
            l = a, a = t.default ? Rs(t.default()) : [];
            for (let d = 0; d < a.length; d++) {
                const c = a[d];
                c.key != null && pl(c, aa(c, r, o, n))
            }
            if (l) for (let d = 0; d < l.length; d++) {
                const c = l[d];
                pl(c, aa(c, r, o, n)), cv.set(c, c.el.getBoundingClientRect())
            }
            return Ut(s, null, a)
        }
    }
}, bg = e => delete e.mode;
fv.props;
const yg = fv;

function _g(e) {
    const t = e.el;
    t[fi] && t[fi](), t[hc] && t[hc]()
}

function wg(e) {
    dv.set(e, e.el.getBoundingClientRect())
}

function xg(e) {
    const t = cv.get(e), n = dv.get(e), o = t.left - n.left, l = t.top - n.top;
    if (o || l) {
        const a = e.el.style;
        return a.transform = a.webkitTransform = `translate(${o}px,${l}px)`, a.transitionDuration = "0s", e
    }
}

function Sg(e, t, n) {
    const o = e.cloneNode(), l = e[hl];
    l && l.forEach(r => {
        r.split(/\s+/).forEach(s => s && o.classList.remove(s))
    }), n.split(/\s+/).forEach(r => r && o.classList.add(r)), o.style.display = "none";
    const a = t.nodeType === 1 ? t : t.parentNode;
    a.appendChild(o);
    const {hasTransform: i} = rv(o);
    return a.removeChild(o), i
}

const Cg = ["ctrl", "shift", "alt", "meta"], kg = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button" in e && e.button !== 0,
    middle: e => "button" in e && e.button !== 1,
    right: e => "button" in e && e.button !== 2,
    exact: (e, t) => Cg.some(n => e[`${n}Key`] && !t.includes(n))
}, iC = (e, t) => (n, ...o) => {
    for (let l = 0; l < t.length; l++) {
        const a = kg[t[l]];
        if (a && a(n, t)) return
    }
    return e(n, ...o)
}, qg = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}, rC = (e, t) => n => {
    if (!("key" in n)) return;
    const o = Fo(n.key);
    if (t.some(l => l === o || qg[l] === o)) return e(n)
}, Tg = Pt({patchProp: hg}, Jh);
let gc;

function $g() {
    return gc || (gc = $h(Tg))
}

const vv = (...e) => {
    const t = $g().createApp(...e), {mount: n} = t;
    return t.mount = o => {
        const l = Mg(o);
        if (!l) return;
        const a = t._component;
        !je(a) && !a.render && !a.template && (a.template = l.innerHTML), l.innerHTML = "";
        const i = n(l, !1, l instanceof SVGElement);
        return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), i
    }, t
};

function Mg(e) {
    return Ct(e) ? document.querySelector(e) : e
}

const Eg = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, l] of t) n[o] = l;
    return n
}, Pg = {};

function Ag(e, t) {
    const n = vh("router-view");
    return Is(), Ds(n)
}

const Bg = Eg(Pg, [["render", Ag]]), Og = "modulepreload", Lg = function (e) {
    return "/" + e
}, bc = {}, st = function (t, n, o) {
    if (!n || n.length === 0) return t();
    const l = document.getElementsByTagName("link");
    return Promise.all(n.map(a => {
        if (a = Lg(a), a in bc) return;
        bc[a] = !0;
        const i = a.endsWith(".css"), r = i ? '[rel="stylesheet"]' : "";
        if (!!o) for (let c = l.length - 1; c >= 0; c--) {
            const p = l[c];
            if (p.href === a && (!i || p.rel === "stylesheet")) return
        } else if (document.querySelector(`link[href="${a}"]${r}`)) return;
        const d = document.createElement("link");
        if (d.rel = i ? "stylesheet" : Og, i || (d.as = "script", d.crossOrigin = ""), d.href = a, document.head.appendChild(d), i) return new Promise((c, p) => {
            d.addEventListener("load", c), d.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${a}`)))
        })
    })).then(() => t()).catch(a => {
        const i = new Event("vite:preloadError", {cancelable: !0});
        if (i.payload = a, window.dispatchEvent(i), !i.defaultPrevented) throw a
    })
};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Xo = typeof window < "u";

function Rg(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}

const rt = Object.assign;

function wr(e, t) {
    const n = {};
    for (const o in t) {
        const l = t[o];
        n[o] = Cn(l) ? l.map(e) : e(l)
    }
    return n
}

const Zl = () => {
}, Cn = Array.isArray, Vg = /\/$/, Fg = e => e.replace(Vg, "");

function xr(e, t, n = "/") {
    let o, l = {}, a = "", i = "";
    const r = t.indexOf("#");
    let s = t.indexOf("?");
    return r < s && r >= 0 && (s = -1), s > -1 && (o = t.slice(0, s), a = t.slice(s + 1, r > -1 ? r : t.length), l = e(a)), r > -1 && (o = o || t.slice(0, r), i = t.slice(r, t.length)), o = Dg(o ?? t, n), {
        fullPath: o + (a && "?") + a + i,
        path: o,
        query: l,
        hash: i
    }
}

function zg(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function yc(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function Ng(e, t, n) {
    const o = t.matched.length - 1, l = n.matched.length - 1;
    return o > -1 && o === l && gl(t.matched[o], n.matched[l]) && pv(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function gl(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function pv(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!Ig(e[n], t[n])) return !1;
    return !0
}

function Ig(e, t) {
    return Cn(e) ? _c(e, t) : Cn(t) ? _c(t, e) : e === t
}

function _c(e, t) {
    return Cn(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t
}

function Dg(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), o = e.split("/"), l = o[o.length - 1];
    (l === ".." || l === ".") && o.push("");
    let a = n.length - 1, i, r;
    for (i = 0; i < o.length; i++) if (r = o[i], r !== ".") if (r === "..") a > 1 && a--; else break;
    return n.slice(0, a).join("/") + "/" + o.slice(i - (i === o.length ? 1 : 0)).join("/")
}

var ua;
(function (e) {
    e.pop = "pop", e.push = "push"
})(ua || (ua = {}));
var Gl;
(function (e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(Gl || (Gl = {}));

function Hg(e) {
    if (!e) if (Xo) {
        const t = document.querySelector("base");
        e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Fg(e)
}

const jg = /^[^#]+#/;

function Qg(e, t) {
    return e.replace(jg, "#") + t
}

function Kg(e, t) {
    const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
    return {behavior: t.behavior, left: o.left - n.left - (t.left || 0), top: o.top - n.top - (t.top || 0)}
}

const Gi = () => ({left: window.pageXOffset, top: window.pageYOffset});

function Ug(e) {
    let t;
    if ("el" in e) {
        const n = e.el, o = typeof n == "string" && n.startsWith("#"),
            l = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!l) return;
        t = Kg(l, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function wc(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}

const as = new Map;

function Wg(e, t) {
    as.set(e, t)
}

function Yg(e) {
    const t = as.get(e);
    return as.delete(e), t
}

let Xg = () => location.protocol + "//" + location.host;

function mv(e, t) {
    const {pathname: n, search: o, hash: l} = t, a = e.indexOf("#");
    if (a > -1) {
        let r = l.includes(e.slice(a)) ? e.slice(a).length : 1, s = l.slice(r);
        return s[0] !== "/" && (s = "/" + s), yc(s, "")
    }
    return yc(n, e) + o + l
}

function Zg(e, t, n, o) {
    let l = [], a = [], i = null;
    const r = ({state: v}) => {
        const m = mv(e, location), g = n.value, x = t.value;
        let w = 0;
        if (v) {
            if (n.value = m, t.value = v, i && i === g) {
                i = null;
                return
            }
            w = x ? v.position - x.position : 0
        } else o(m);
        l.forEach(S => {
            S(n.value, g, {delta: w, type: ua.pop, direction: w ? w > 0 ? Gl.forward : Gl.back : Gl.unknown})
        })
    };

    function s() {
        i = n.value
    }

    function d(v) {
        l.push(v);
        const m = () => {
            const g = l.indexOf(v);
            g > -1 && l.splice(g, 1)
        };
        return a.push(m), m
    }

    function c() {
        const {history: v} = window;
        v.state && v.replaceState(rt({}, v.state, {scroll: Gi()}), "")
    }

    function p() {
        for (const v of a) v();
        a = [], window.removeEventListener("popstate", r), window.removeEventListener("beforeunload", c)
    }

    return window.addEventListener("popstate", r), window.addEventListener("beforeunload", c, {passive: !0}), {
        pauseListeners: s,
        listen: d,
        destroy: p
    }
}

function xc(e, t, n, o = !1, l = !1) {
    return {back: e, current: t, forward: n, replaced: o, position: window.history.length, scroll: l ? Gi() : null}
}

function Gg(e) {
    const {history: t, location: n} = window, o = {value: mv(e, n)}, l = {value: t.state};
    l.value || a(o.value, {
        back: null,
        current: o.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function a(s, d, c) {
        const p = e.indexOf("#"),
            v = p > -1 ? (n.host && document.querySelector("base") ? e : e.slice(p)) + s : Xg() + e + s;
        try {
            t[c ? "replaceState" : "pushState"](d, "", v), l.value = d
        } catch (m) {
            console.error(m), n[c ? "replace" : "assign"](v)
        }
    }

    function i(s, d) {
        const c = rt({}, t.state, xc(l.value.back, s, l.value.forward, !0), d, {position: l.value.position});
        a(s, c, !0), o.value = s
    }

    function r(s, d) {
        const c = rt({}, l.value, t.state, {forward: s, scroll: Gi()});
        a(c.current, c, !0);
        const p = rt({}, xc(o.value, s, null), {position: c.position + 1}, d);
        a(s, p, !1), o.value = s
    }

    return {location: o, state: l, push: r, replace: i}
}

function Jg(e) {
    e = Hg(e);
    const t = Gg(e), n = Zg(e, t.state, t.location, t.replace);

    function o(a, i = !0) {
        i || n.pauseListeners(), history.go(a)
    }

    const l = rt({location: "", base: e, go: o, createHref: Qg.bind(null, e)}, t, n);
    return Object.defineProperty(l, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(l, "state", {enumerable: !0, get: () => t.state.value}), l
}

function eb(e) {
    return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), Jg(e)
}

function tb(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function hv(e) {
    return typeof e == "string" || typeof e == "symbol"
}

const Yn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}, gv = Symbol("");
var Sc;
(function (e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Sc || (Sc = {}));

function bl(e, t) {
    return rt(new Error, {type: e, [gv]: !0}, t)
}

function On(e, t) {
    return e instanceof Error && gv in e && (t == null || !!(e.type & t))
}

const Cc = "[^/]+?", nb = {sensitive: !1, strict: !1, start: !0, end: !0}, ob = /[.+*?^${}()[\]/\\]/g;

function lb(e, t) {
    const n = rt({}, nb, t), o = [];
    let l = n.start ? "^" : "";
    const a = [];
    for (const d of e) {
        const c = d.length ? [] : [90];
        n.strict && !d.length && (l += "/");
        for (let p = 0; p < d.length; p++) {
            const v = d[p];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (v.type === 0) p || (l += "/"), l += v.value.replace(ob, "\\$&"), m += 40; else if (v.type === 1) {
                const {value: g, repeatable: x, optional: w, regexp: S} = v;
                a.push({name: g, repeatable: x, optional: w});
                const y = S || Cc;
                if (y !== Cc) {
                    m += 10;
                    try {
                        new RegExp(`(${y})`)
                    } catch (h) {
                        throw new Error(`Invalid custom RegExp for param "${g}" (${y}): ` + h.message)
                    }
                }
                let b = x ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
                p || (b = w && d.length < 2 ? `(?:/${b})` : "/" + b), w && (b += "?"), l += b, m += 20, w && (m += -8), x && (m += -20), y === ".*" && (m += -50)
            }
            c.push(m)
        }
        o.push(c)
    }
    if (n.strict && n.end) {
        const d = o.length - 1;
        o[d][o[d].length - 1] += .7000000000000001
    }
    n.strict || (l += "/?"), n.end ? l += "$" : n.strict && (l += "(?:/|$)");
    const i = new RegExp(l, n.sensitive ? "" : "i");

    function r(d) {
        const c = d.match(i), p = {};
        if (!c) return null;
        for (let v = 1; v < c.length; v++) {
            const m = c[v] || "", g = a[v - 1];
            p[g.name] = m && g.repeatable ? m.split("/") : m
        }
        return p
    }

    function s(d) {
        let c = "", p = !1;
        for (const v of e) {
            (!p || !c.endsWith("/")) && (c += "/"), p = !1;
            for (const m of v) if (m.type === 0) c += m.value; else if (m.type === 1) {
                const {value: g, repeatable: x, optional: w} = m, S = g in d ? d[g] : "";
                if (Cn(S) && !x) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
                const y = Cn(S) ? S.join("/") : S;
                if (!y) if (w) v.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : p = !0); else throw new Error(`Missing required param "${g}"`);
                c += y
            }
        }
        return c || "/"
    }

    return {re: i, score: o, keys: a, parse: r, stringify: s}
}

function ab(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const o = t[n] - e[n];
        if (o) return o;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}

function ib(e, t) {
    let n = 0;
    const o = e.score, l = t.score;
    for (; n < o.length && n < l.length;) {
        const a = ab(o[n], l[n]);
        if (a) return a;
        n++
    }
    if (Math.abs(l.length - o.length) === 1) {
        if (kc(o)) return 1;
        if (kc(l)) return -1
    }
    return l.length - o.length
}

function kc(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}

const rb = {type: 0, value: ""}, sb = /[a-zA-Z0-9_]/;

function ub(e) {
    if (!e) return [[]];
    if (e === "/") return [[rb]];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(m) {
        throw new Error(`ERR (${n})/"${d}": ${m}`)
    }

    let n = 0, o = n;
    const l = [];
    let a;

    function i() {
        a && l.push(a), a = []
    }

    let r = 0, s, d = "", c = "";

    function p() {
        d && (n === 0 ? a.push({
            type: 0,
            value: d
        }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (s === "*" || s === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), a.push({
            type: 1,
            value: d,
            regexp: c,
            repeatable: s === "*" || s === "+",
            optional: s === "*" || s === "?"
        })) : t("Invalid state to consume buffer"), d = "")
    }

    function v() {
        d += s
    }

    for (; r < e.length;) {
        if (s = e[r++], s === "\\" && n !== 2) {
            o = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                s === "/" ? (d && p(), i()) : s === ":" ? (p(), n = 1) : v();
                break;
            case 4:
                v(), n = o;
                break;
            case 1:
                s === "(" ? n = 2 : sb.test(s) ? v() : (p(), n = 0, s !== "*" && s !== "?" && s !== "+" && r--);
                break;
            case 2:
                s === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + s : n = 3 : c += s;
                break;
            case 3:
                p(), n = 0, s !== "*" && s !== "?" && s !== "+" && r--, c = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), p(), i(), l
}

function cb(e, t, n) {
    const o = lb(ub(e.path), n), l = rt(o, {record: e, parent: t, children: [], alias: []});
    return t && !l.record.aliasOf == !t.record.aliasOf && t.children.push(l), l
}

function db(e, t) {
    const n = [], o = new Map;
    t = $c({strict: !1, end: !0, sensitive: !1}, t);

    function l(c) {
        return o.get(c)
    }

    function a(c, p, v) {
        const m = !v, g = fb(c);
        g.aliasOf = v && v.record;
        const x = $c(t, c), w = [g];
        if ("alias" in c) {
            const b = typeof c.alias == "string" ? [c.alias] : c.alias;
            for (const h of b) w.push(rt({}, g, {
                components: v ? v.record.components : g.components,
                path: h,
                aliasOf: v ? v.record : g
            }))
        }
        let S, y;
        for (const b of w) {
            const {path: h} = b;
            if (p && h[0] !== "/") {
                const C = p.record.path, A = C[C.length - 1] === "/" ? "" : "/";
                b.path = p.record.path + (h && A + h)
            }
            if (S = cb(b, p, x), v ? v.alias.push(S) : (y = y || S, y !== S && y.alias.push(S), m && c.name && !Tc(S) && i(c.name)), g.children) {
                const C = g.children;
                for (let A = 0; A < C.length; A++) a(C[A], S, v && v.children[A])
            }
            v = v || S, (S.record.components && Object.keys(S.record.components).length || S.record.name || S.record.redirect) && s(S)
        }
        return y ? () => {
            i(y)
        } : Zl
    }

    function i(c) {
        if (hv(c)) {
            const p = o.get(c);
            p && (o.delete(c), n.splice(n.indexOf(p), 1), p.children.forEach(i), p.alias.forEach(i))
        } else {
            const p = n.indexOf(c);
            p > -1 && (n.splice(p, 1), c.record.name && o.delete(c.record.name), c.children.forEach(i), c.alias.forEach(i))
        }
    }

    function r() {
        return n
    }

    function s(c) {
        let p = 0;
        for (; p < n.length && ib(c, n[p]) >= 0 && (c.record.path !== n[p].record.path || !bv(c, n[p]));) p++;
        n.splice(p, 0, c), c.record.name && !Tc(c) && o.set(c.record.name, c)
    }

    function d(c, p) {
        let v, m = {}, g, x;
        if ("name" in c && c.name) {
            if (v = o.get(c.name), !v) throw bl(1, {location: c});
            x = v.record.name, m = rt(qc(p.params, v.keys.filter(y => !y.optional).map(y => y.name)), c.params && qc(c.params, v.keys.map(y => y.name))), g = v.stringify(m)
        } else if ("path" in c) g = c.path, v = n.find(y => y.re.test(g)), v && (m = v.parse(g), x = v.record.name); else {
            if (v = p.name ? o.get(p.name) : n.find(y => y.re.test(p.path)), !v) throw bl(1, {
                location: c,
                currentLocation: p
            });
            x = v.record.name, m = rt({}, p.params, c.params), g = v.stringify(m)
        }
        const w = [];
        let S = v;
        for (; S;) w.unshift(S.record), S = S.parent;
        return {name: x, path: g, params: m, matched: w, meta: pb(w)}
    }

    return e.forEach(c => a(c)), {addRoute: a, resolve: d, removeRoute: i, getRoutes: r, getRecordMatcher: l}
}

function qc(e, t) {
    const n = {};
    for (const o of t) o in e && (n[o] = e[o]);
    return n
}

function fb(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: vb(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {default: e.component}
    }
}

function vb(e) {
    const t = {}, n = e.props || !1;
    if ("component" in e) t.default = n; else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
    return t
}

function Tc(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function pb(e) {
    return e.reduce((t, n) => rt(t, n.meta), {})
}

function $c(e, t) {
    const n = {};
    for (const o in e) n[o] = o in t ? t[o] : e[o];
    return n
}

function bv(e, t) {
    return t.children.some(n => n === e || bv(e, n))
}

const yv = /#/g, mb = /&/g, hb = /\//g, gb = /=/g, bb = /\?/g, _v = /\+/g, yb = /%5B/g, _b = /%5D/g, wv = /%5E/g,
    wb = /%60/g, xv = /%7B/g, xb = /%7C/g, Sv = /%7D/g, Sb = /%20/g;

function Ks(e) {
    return encodeURI("" + e).replace(xb, "|").replace(yb, "[").replace(_b, "]")
}

function Cb(e) {
    return Ks(e).replace(xv, "{").replace(Sv, "}").replace(wv, "^")
}

function is(e) {
    return Ks(e).replace(_v, "%2B").replace(Sb, "+").replace(yv, "%23").replace(mb, "%26").replace(wb, "`").replace(xv, "{").replace(Sv, "}").replace(wv, "^")
}

function kb(e) {
    return is(e).replace(gb, "%3D")
}

function qb(e) {
    return Ks(e).replace(yv, "%23").replace(bb, "%3F")
}

function Tb(e) {
    return e == null ? "" : qb(e).replace(hb, "%2F")
}

function vi(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {
    }
    return "" + e
}

function $b(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const o = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let l = 0; l < o.length; ++l) {
        const a = o[l].replace(_v, " "), i = a.indexOf("="), r = vi(i < 0 ? a : a.slice(0, i)),
            s = i < 0 ? null : vi(a.slice(i + 1));
        if (r in t) {
            let d = t[r];
            Cn(d) || (d = t[r] = [d]), d.push(s)
        } else t[r] = s
    }
    return t
}

function Mc(e) {
    let t = "";
    for (let n in e) {
        const o = e[n];
        if (n = kb(n), o == null) {
            o !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Cn(o) ? o.map(a => a && is(a)) : [o && is(o)]).forEach(a => {
            a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a))
        })
    }
    return t
}

function Mb(e) {
    const t = {};
    for (const n in e) {
        const o = e[n];
        o !== void 0 && (t[n] = Cn(o) ? o.map(l => l == null ? null : "" + l) : o == null ? o : "" + o)
    }
    return t
}

const Cv = Symbol(""), Ec = Symbol(""), Ji = Symbol(""), Us = Symbol(""), rs = Symbol("");

function Ll() {
    let e = [];

    function t(o) {
        return e.push(o), () => {
            const l = e.indexOf(o);
            l > -1 && e.splice(l, 1)
        }
    }

    function n() {
        e = []
    }

    return {add: t, list: () => e.slice(), reset: n}
}

function Eb(e, t, n) {
    const o = () => {
        e[t].delete(n)
    };
    ql(o), kn(o), Hn(() => {
        e[t].add(n)
    }), e[t].add(n)
}

function sC(e) {
    const t = vt(Cv, {}).value;
    t && Eb(t, "updateGuards", e)
}

function no(e, t, n, o, l) {
    const a = o && (o.enterCallbacks[l] = o.enterCallbacks[l] || []);
    return () => new Promise((i, r) => {
        const s = p => {
            p === !1 ? r(bl(4, {from: n, to: t})) : p instanceof Error ? r(p) : tb(p) ? r(bl(2, {
                from: t,
                to: p
            })) : (a && o.enterCallbacks[l] === a && typeof p == "function" && a.push(p), i())
        }, d = e.call(o && o.instances[l], t, n, s);
        let c = Promise.resolve(d);
        e.length < 3 && (c = c.then(s)), c.catch(p => r(p))
    })
}

function Sr(e, t, n, o) {
    const l = [];
    for (const a of e) for (const i in a.components) {
        let r = a.components[i];
        if (!(t !== "beforeRouteEnter" && !a.instances[i])) if (Pb(r)) {
            const d = (r.__vccOpts || r)[t];
            d && l.push(no(d, n, o, a, i))
        } else {
            let s = r();
            l.push(() => s.then(d => {
                if (!d) return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
                const c = Rg(d) ? d.default : d;
                a.components[i] = c;
                const v = (c.__vccOpts || c)[t];
                return v && no(v, n, o, a, i)()
            }))
        }
    }
    return l
}

function Pb(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Pc(e) {
    const t = vt(Ji), n = vt(Us), o = f(() => t.resolve(Po(e.to))), l = f(() => {
            const {matched: s} = o.value, {length: d} = s, c = s[d - 1], p = n.matched;
            if (!c || !p.length) return -1;
            const v = p.findIndex(gl.bind(null, c));
            if (v > -1) return v;
            const m = Ac(s[d - 2]);
            return d > 1 && Ac(c) === m && p[p.length - 1].path !== m ? p.findIndex(gl.bind(null, s[d - 2])) : v
        }), a = f(() => l.value > -1 && Lb(n.params, o.value.params)),
        i = f(() => l.value > -1 && l.value === n.matched.length - 1 && pv(n.params, o.value.params));

    function r(s = {}) {
        return Ob(s) ? t[Po(e.replace) ? "replace" : "push"](Po(e.to)).catch(Zl) : Promise.resolve()
    }

    return {route: o, href: f(() => o.value.href), isActive: a, isExactActive: i, navigate: r}
}

const Ab = Vs({
    name: "RouterLink",
    compatConfig: {MODE: 3},
    props: {
        to: {type: [String, Object], required: !0},
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {type: String, default: "page"}
    },
    useLink: Pc,
    setup(e, {slots: t}) {
        const n = En(Pc(e)), {options: o} = vt(Ji), l = f(() => ({
            [Bc(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
            [Bc(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const a = t.default && t.default(n);
            return e.custom ? a : u("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: l.value
            }, a)
        }
    }
}), Bb = Ab;

function Ob(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Lb(e, t) {
    for (const n in t) {
        const o = t[n], l = e[n];
        if (typeof o == "string") {
            if (o !== l) return !1
        } else if (!Cn(l) || l.length !== o.length || o.some((a, i) => a !== l[i])) return !1
    }
    return !0
}

function Ac(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}

const Bc = (e, t, n) => e ?? t ?? n, Rb = Vs({
    name: "RouterView",
    inheritAttrs: !1,
    props: {name: {type: String, default: "default"}, route: Object},
    compatConfig: {MODE: 3},
    setup(e, {attrs: t, slots: n}) {
        const o = vt(rs), l = f(() => e.route || o.value), a = vt(Ec, 0), i = f(() => {
            let d = Po(a);
            const {matched: c} = l.value;
            let p;
            for (; (p = c[d]) && !p.components;) d++;
            return d
        }), r = f(() => l.value.matched[i.value]);
        un(Ec, f(() => i.value + 1)), un(Cv, r), un(rs, l);
        const s = D();
        return pe(() => [s.value, r.value, e.name], ([d, c, p], [v, m, g]) => {
            c && (c.instances[p] = d, m && m !== c && d && d === v && (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards), c.updateGuards.size || (c.updateGuards = m.updateGuards))), d && c && (!m || !gl(c, m) || !v) && (c.enterCallbacks[p] || []).forEach(x => x(d))
        }, {flush: "post"}), () => {
            const d = l.value, c = e.name, p = r.value, v = p && p.components[c];
            if (!v) return Oc(n.default, {Component: v, route: d});
            const m = p.props[c], g = m ? m === !0 ? d.params : typeof m == "function" ? m(d) : m : null,
                w = u(v, rt({}, g, t, {
                    onVnodeUnmounted: S => {
                        S.component.isUnmounted && (p.instances[c] = null)
                    }, ref: s
                }));
            return Oc(n.default, {Component: w, route: d}) || w
        }
    }
});

function Oc(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}

const Vb = Rb;

function Fb(e) {
    const t = db(e.routes, e), n = e.parseQuery || $b, o = e.stringifyQuery || Mc, l = e.history, a = Ll(), i = Ll(),
        r = Ll(), s = Rm(Yn);
    let d = Yn;
    Xo && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = wr.bind(null, I => "" + I), p = wr.bind(null, Tb), v = wr.bind(null, vi);

    function m(I, N) {
        let _, H;
        return hv(I) ? (_ = t.getRecordMatcher(I), H = N) : H = I, t.addRoute(H, _)
    }

    function g(I) {
        const N = t.getRecordMatcher(I);
        N && t.removeRoute(N)
    }

    function x() {
        return t.getRoutes().map(I => I.record)
    }

    function w(I) {
        return !!t.getRecordMatcher(I)
    }

    function S(I, N) {
        if (N = rt({}, N || s.value), typeof I == "string") {
            const F = xr(n, I, N.path), te = t.resolve({path: F.path}, N), oe = l.createHref(F.fullPath);
            return rt(F, te, {params: v(te.params), hash: vi(F.hash), redirectedFrom: void 0, href: oe})
        }
        let _;
        if ("path" in I) _ = rt({}, I, {path: xr(n, I.path, N.path).path}); else {
            const F = rt({}, I.params);
            for (const te in F) F[te] == null && delete F[te];
            _ = rt({}, I, {params: p(F)}), N.params = p(N.params)
        }
        const H = t.resolve(_, N), re = I.hash || "";
        H.params = c(v(H.params));
        const q = zg(o, rt({}, I, {hash: Cb(re), path: H.path})), P = l.createHref(q);
        return rt({fullPath: q, hash: re, query: o === Mc ? Mb(I.query) : I.query || {}}, H, {
            redirectedFrom: void 0,
            href: P
        })
    }

    function y(I) {
        return typeof I == "string" ? xr(n, I, s.value.path) : rt({}, I)
    }

    function b(I, N) {
        if (d !== I) return bl(8, {from: N, to: I})
    }

    function h(I) {
        return L(I)
    }

    function C(I) {
        return h(rt(y(I), {replace: !0}))
    }

    function A(I) {
        const N = I.matched[I.matched.length - 1];
        if (N && N.redirect) {
            const {redirect: _} = N;
            let H = typeof _ == "function" ? _(I) : _;
            return typeof H == "string" && (H = H.includes("?") || H.includes("#") ? H = y(H) : {path: H}, H.params = {}), rt({
                query: I.query,
                hash: I.hash,
                params: "path" in H ? {} : I.params
            }, H)
        }
    }

    function L(I, N) {
        const _ = d = S(I), H = s.value, re = I.state, q = I.force, P = I.replace === !0, F = A(_);
        if (F) return L(rt(y(F), {
            state: typeof F == "object" ? rt({}, re, F.state) : re,
            force: q,
            replace: P
        }), N || _);
        const te = _;
        te.redirectedFrom = N;
        let oe;
        return !q && Ng(o, H, _) && (oe = bl(16, {
            to: te,
            from: H
        }), K(H, H, !0, !1)), (oe ? Promise.resolve(oe) : O(te, H)).catch(ne => On(ne) ? On(ne, 2) ? ne : be(ne) : Q(ne, te, H)).then(ne => {
            if (ne) {
                if (On(ne, 2)) return L(rt({replace: P}, y(ne.to), {
                    state: typeof ne.to == "object" ? rt({}, re, ne.to.state) : re,
                    force: q
                }), N || te)
            } else ne = M(te, H, !0, P, re);
            return z(te, H, ne), ne
        })
    }

    function E(I, N) {
        const _ = b(I, N);
        return _ ? Promise.reject(_) : Promise.resolve()
    }

    function V(I) {
        const N = Z.values().next().value;
        return N && typeof N.runWithContext == "function" ? N.runWithContext(I) : I()
    }

    function O(I, N) {
        let _;
        const [H, re, q] = zb(I, N);
        _ = Sr(H.reverse(), "beforeRouteLeave", I, N);
        for (const F of H) F.leaveGuards.forEach(te => {
            _.push(no(te, I, N))
        });
        const P = E.bind(null, I, N);
        return _.push(P), G(_).then(() => {
            _ = [];
            for (const F of a.list()) _.push(no(F, I, N));
            return _.push(P), G(_)
        }).then(() => {
            _ = Sr(re, "beforeRouteUpdate", I, N);
            for (const F of re) F.updateGuards.forEach(te => {
                _.push(no(te, I, N))
            });
            return _.push(P), G(_)
        }).then(() => {
            _ = [];
            for (const F of q) if (F.beforeEnter) if (Cn(F.beforeEnter)) for (const te of F.beforeEnter) _.push(no(te, I, N)); else _.push(no(F.beforeEnter, I, N));
            return _.push(P), G(_)
        }).then(() => (I.matched.forEach(F => F.enterCallbacks = {}), _ = Sr(q, "beforeRouteEnter", I, N), _.push(P), G(_))).then(() => {
            _ = [];
            for (const F of i.list()) _.push(no(F, I, N));
            return _.push(P), G(_)
        }).catch(F => On(F, 8) ? F : Promise.reject(F))
    }

    function z(I, N, _) {
        r.list().forEach(H => V(() => H(I, N, _)))
    }

    function M(I, N, _, H, re) {
        const q = b(I, N);
        if (q) return q;
        const P = N === Yn, F = Xo ? history.state : {};
        _ && (H || P ? l.replace(I.fullPath, rt({scroll: P && F && F.scroll}, re)) : l.push(I.fullPath, re)), s.value = I, K(I, N, _, P), be()
    }

    let k;

    function B() {
        k || (k = l.listen((I, N, _) => {
            if (!ie.listening) return;
            const H = S(I), re = A(H);
            if (re) {
                L(rt(re, {replace: !0}), H).catch(Zl);
                return
            }
            d = H;
            const q = s.value;
            Xo && Wg(wc(q.fullPath, _.delta), Gi()), O(H, q).catch(P => On(P, 12) ? P : On(P, 2) ? (L(P.to, H).then(F => {
                On(F, 20) && !_.delta && _.type === ua.pop && l.go(-1, !1)
            }).catch(Zl), Promise.reject()) : (_.delta && l.go(-_.delta, !1), Q(P, H, q))).then(P => {
                P = P || M(H, q, !1), P && (_.delta && !On(P, 8) ? l.go(-_.delta, !1) : _.type === ua.pop && On(P, 20) && l.go(-1, !1)), z(H, q, P)
            }).catch(Zl)
        }))
    }

    let Y = Ll(), J = Ll(), $;

    function Q(I, N, _) {
        be(I);
        const H = J.list();
        return H.length ? H.forEach(re => re(I, N, _)) : console.error(I), Promise.reject(I)
    }

    function ae() {
        return $ && s.value !== Yn ? Promise.resolve() : new Promise((I, N) => {
            Y.add([I, N])
        })
    }

    function be(I) {
        return $ || ($ = !I, B(), Y.list().forEach(([N, _]) => I ? _(I) : N()), Y.reset()), I
    }

    function K(I, N, _, H) {
        const {scrollBehavior: re} = e;
        if (!Xo || !re) return Promise.resolve();
        const q = !_ && Yg(wc(I.fullPath, 0)) || (H || !_) && history.state && history.state.scroll || null;
        return We().then(() => re(I, N, q)).then(P => P && Ug(P)).catch(P => Q(P, I, N))
    }

    const T = I => l.go(I);
    let ee;
    const Z = new Set, ie = {
        currentRoute: s,
        listening: !0,
        addRoute: m,
        removeRoute: g,
        hasRoute: w,
        getRoutes: x,
        resolve: S,
        options: e,
        push: h,
        replace: C,
        go: T,
        back: () => T(-1),
        forward: () => T(1),
        beforeEach: a.add,
        beforeResolve: i.add,
        afterEach: r.add,
        onError: J.add,
        isReady: ae,
        install(I) {
            const N = this;
            I.component("RouterLink", Bb), I.component("RouterView", Vb), I.config.globalProperties.$router = N, Object.defineProperty(I.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => Po(s)
            }), Xo && !ee && s.value === Yn && (ee = !0, h(l.location).catch(re => {
            }));
            const _ = {};
            for (const re in Yn) Object.defineProperty(_, re, {get: () => s.value[re], enumerable: !0});
            I.provide(Ji, N), I.provide(Us, Ps(_)), I.provide(rs, s);
            const H = I.unmount;
            Z.add(I), I.unmount = function () {
                Z.delete(I), Z.size < 1 && (d = Yn, k && k(), k = null, s.value = Yn, ee = !1, $ = !1), H()
            }
        }
    };

    function G(I) {
        return I.reduce((N, _) => N.then(() => V(_)), Promise.resolve())
    }

    return ie
}

function zb(e, t) {
    const n = [], o = [], l = [], a = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < a; i++) {
        const r = t.matched[i];
        r && (e.matched.find(d => gl(d, r)) ? o.push(r) : n.push(r));
        const s = e.matched[i];
        s && (t.matched.find(d => gl(d, s)) || l.push(s))
    }
    return [n, o, l]
}

function uC() {
    return vt(Ji)
}

function cC() {
    return vt(Us)
}

const Lc = [{
        path: "school",
        component: () => st(() => import("./TheSchool-9b7444bc.js"), ["assets/TheSchool-9b7444bc.js", "assets/SchoolApi-997a0d35.js", "assets/useRequest-4cb19bee.js", "assets/QueryChipSelect-b4a32d7e.js", "assets/QueryContainer-778ca57d.js", "assets/QueryInput-b0beacee.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/QuerySearchCard-abfe6caa.js", "assets/useArray-1b072fc4.js", "assets/useNotify-cedc1ad3.js", "assets/TheSchool-890ef793.css"]),
        meta: {menuName: "高校", roleCodes: [], icon: "l1"}
    }, {
        path: "major",
        component: () => st(() => import("./TheMajor-2bd7c83b.js"), ["assets/TheMajor-2bd7c83b.js", "assets/QueryChipSelect-b4a32d7e.js", "assets/QueryContainer-778ca57d.js", "assets/QuerySearchCard-abfe6caa.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/TableContainer-6b49de73.js", "assets/QueryInput-b0beacee.js", "assets/useNotify-cedc1ad3.js", "assets/useRequest-4cb19bee.js", "assets/MajorApi-605bf878.js", "assets/TheMajor-f0631ab1.css"]),
        meta: {menuName: "专业", roleCodes: [], icon: "l2"}
    }, {
        path: "recommend",
        component: () => st(() => import("./TheRecommend-1f41fbdd.js"), ["assets/TheRecommend-1f41fbdd.js", "assets/useRequest-4cb19bee.js", "assets/useValid-d1447d9b.js", "assets/useFormRules-cbf82972.js", "assets/useNotify-cedc1ad3.js", "assets/TheRecommend-94e4c6a2.css"]),
        meta: {menuName: "专业推荐", roleCodes: [], icon: "l5"}
    }, {
        path: "profession",
        component: () => st(() => import("./TheProfession-5ce445f5.js"), ["assets/TheProfession-5ce445f5.js", "assets/QueryChipSelect-b4a32d7e.js", "assets/QueryContainer-778ca57d.js", "assets/QuerySearchCard-abfe6caa.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/QueryInput-b0beacee.js", "assets/useArray-1b072fc4.js", "assets/useNotify-cedc1ad3.js", "assets/useRequest-4cb19bee.js", "assets/ProfessionApi-32b74b1a.js", "assets/TheProfession-7033671d.css"]),
        meta: {menuName: "职业", roleCodes: [], icon: "l3"}
    }, {
        path: "profession-recommend",
        component: () => st(() => import("./TheProfessionRecommend-ccfd39e7.js"), ["assets/TheProfessionRecommend-ccfd39e7.js", "assets/ProfessionApi-32b74b1a.js", "assets/useRequest-4cb19bee.js", "assets/useValid-d1447d9b.js", "assets/useArray-1b072fc4.js", "assets/useFormRules-cbf82972.js", "assets/useNotify-cedc1ad3.js", "assets/usePage-8ca7a06e.js", "assets/TheProfessionRecommend-3e4f805d.css"]),
        meta: {menuName: "职业推荐", roleCodes: [], icon: "l4"}
    }, {
        path: "bbs",
        component: () => st(() => import("./TheBbs-7af7ebb7.js"), ["assets/TheBbs-7af7ebb7.js", "assets/QueryContainer-778ca57d.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/UserItem-db9f1dba.js", "assets/avatar-dc521f05.js", "assets/useRequest-4cb19bee.js", "assets/UserApi-7044f7f4.js", "assets/useTimes-c127d28f.js", "assets/useDate-0b7f99ef.js", "assets/useDialog-abda8b4e.js", "assets/useNotify-cedc1ad3.js", "assets/BbsApi-9114505e.js", "assets/BbsDialog-d7a87b8f.js", "assets/FormEditor-af66954e.js", "assets/useValid-d1447d9b.js", "assets/BaseDialog-82865103.js", "assets/useFormRules-cbf82972.js", "assets/TheBbs-37d88951.css"]),
        meta: {menuName: "论坛", roleCodes: [], icon: "l6"}
    }, {
        path: "data-map",
        component: () => st(() => import("./TheDataMap-ddfb296c.js"), ["assets/TheDataMap-ddfb296c.js", "assets/Chart-0c5350db.js", "assets/useRequest-4cb19bee.js", "assets/Chart-91acf088.css", "assets/useNotify-cedc1ad3.js"]),
        meta: {menuName: "数据大图", roleCodes: []}
    }, {
        path: "feedback",
        component: () => st(() => import("./TheFeedback-4f30545b.js"), ["assets/TheFeedback-4f30545b.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/UserItem-db9f1dba.js", "assets/avatar-dc521f05.js", "assets/useRequest-4cb19bee.js", "assets/UserApi-7044f7f4.js", "assets/useTimes-c127d28f.js", "assets/useDate-0b7f99ef.js", "assets/useDialog-abda8b4e.js", "assets/useLoginInfo-0c571403.js", "assets/LoginApi-1dda4bc2.js", "assets/useNotify-cedc1ad3.js", "assets/FeedbackApi-dd3975b5.js", "assets/TheFeedback-fb72993d.css"]),
        meta: {menuName: "用户反馈", roleCodes: []}
    }, {
        path: "bbs/:id",
        component: () => st(() => import("./TheBbsDetail-ea66cf27.js"), ["assets/TheBbsDetail-ea66cf27.js", "assets/UserComment-3b891e0d.js", "assets/UserAvatar-c28f9a89.js", "assets/avatar-dc521f05.js", "assets/useNotify-cedc1ad3.js", "assets/useRequest-4cb19bee.js", "assets/UserCommentApi-5c7fae53.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/useLoginInfo-0c571403.js", "assets/LoginApi-1dda4bc2.js", "assets/UserItem-db9f1dba.js", "assets/UserApi-7044f7f4.js", "assets/useTimes-c127d28f.js", "assets/useDate-0b7f99ef.js", "assets/BbsApi-9114505e.js", "assets/TheBbsDetail-3b332274.css"]),
        meta: {roleCodes: [], parent: "/home/bbs"}
    }, {
        path: "major/:id",
        component: () => st(() => import("./TheMajorDetail-de666667.js"), ["assets/TheMajorDetail-de666667.js", "assets/useNotify-cedc1ad3.js", "assets/useRequest-4cb19bee.js", "assets/MajorApi-605bf878.js", "assets/TheMajorDetail-800ce686.css"]),
        meta: {roleCodes: [], parent: "/home/major"}
    }, {
        path: "school/:id",
        component: () => st(() => import("./TheSchoolDetail-22bc4458.js"), ["assets/TheSchoolDetail-22bc4458.js", "assets/TitleSeparator-7c98d06d.js", "assets/TitleSeparator-a341dc95.css", "assets/UserComment-3b891e0d.js", "assets/UserAvatar-c28f9a89.js", "assets/avatar-dc521f05.js", "assets/useNotify-cedc1ad3.js", "assets/useRequest-4cb19bee.js", "assets/UserCommentApi-5c7fae53.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/useLoginInfo-0c571403.js", "assets/LoginApi-1dda4bc2.js", "assets/useArray-1b072fc4.js", "assets/SchoolApi-997a0d35.js", "assets/Chart-0c5350db.js", "assets/Chart-91acf088.css", "assets/SchoolLineApi-27d0a5a5.js", "assets/TheSchoolDetail-3aef2bdf.css"]),
        meta: {roleCodes: [], parent: "/home/school"}
    }, {
        path: "school-line/:id",
        component: () => st(() => import("./TheSchoolLineDetail-f84eaaef.js"), ["assets/TheSchoolLineDetail-f84eaaef.js", "assets/useNotify-cedc1ad3.js", "assets/useRequest-4cb19bee.js", "assets/SchoolLineApi-27d0a5a5.js", "assets/TheSchoolLineDetail-41ff0665.css"]),
        meta: {roleCodes: [], parent: "/home/school-line"}
    }, {
        path: "profession/:id",
        component: () => st(() => import("./TheProfessionDetail-aa126d95.js"), ["assets/TheProfessionDetail-aa126d95.js", "assets/TitleSeparator-7c98d06d.js", "assets/TitleSeparator-a341dc95.css", "assets/useNotify-cedc1ad3.js", "assets/useRequest-4cb19bee.js", "assets/ProfessionApi-32b74b1a.js", "assets/TheProfessionDetail-7d306b5c.css"]),
        meta: {roleCodes: [], parent: "/home/profession"}
    }, {
        path: "feedback/:id",
        component: () => st(() => import("./TheFeedbackDetail-c4c948df.js"), ["assets/TheFeedbackDetail-c4c948df.js", "assets/UserItem-db9f1dba.js", "assets/avatar-dc521f05.js", "assets/useRequest-4cb19bee.js", "assets/UserApi-7044f7f4.js", "assets/useTimes-c127d28f.js", "assets/useDate-0b7f99ef.js", "assets/useNotify-cedc1ad3.js", "assets/FeedbackApi-dd3975b5.js", "assets/TheFeedbackDetail-5a7eccd5.css"]),
        meta: {roleCodes: [], parent: "/home/feedback"}
    }], Nb = [{path: "/", redirect: "/home"}, {
        path: "/home",
        component: () => st(() => import("./TheHome-13aed74d.js"), ["assets/TheHome-13aed74d.js", "assets/useLoginInfo-0c571403.js", "assets/useRequest-4cb19bee.js", "assets/LoginApi-1dda4bc2.js", "assets/UserAvatar-c28f9a89.js", "assets/avatar-dc521f05.js", "assets/UserHeaderMenu-d13b6e99.js", "assets/useDialog-abda8b4e.js", "assets/BaseDialog-82865103.js", "assets/useValid-d1447d9b.js", "assets/useNotify-cedc1ad3.js", "assets/UserApi-7044f7f4.js", "assets/UploadUserAvatar-5e232abe.js", "assets/FormInputPassword-77e6c8e9.js", "assets/useMenu-af9bf147.js", "assets/TheHome-d3093bcb.css"]),
        redirect: "/home/" + Lc[0].path,
        children: [...Lc]
    }], Rc = [{
        path: "school",
        component: () => st(() => import("./TheAdminSchool-c2d3faea.js"), ["assets/TheAdminSchool-c2d3faea.js", "assets/QueryContainer-778ca57d.js", "assets/QuerySearchCard-abfe6caa.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/TableContainer-6b49de73.js", "assets/TableToolbar-630e4f38.js", "assets/QueryInput-b0beacee.js", "assets/FormEditor-af66954e.js", "assets/useValid-d1447d9b.js", "assets/BaseDialog-82865103.js", "assets/useDialog-abda8b4e.js", "assets/useRequest-4cb19bee.js", "assets/useNotify-cedc1ad3.js", "assets/SchoolApi-997a0d35.js"]),
        meta: {menuName: "高校管理", roleCodes: ["ADMIN"]}
    }, {
        path: "school-line",
        component: () => st(() => import("./TheAdminSchoolLine-ccf5fd58.js"), ["assets/TheAdminSchoolLine-ccf5fd58.js", "assets/SchoolApi-997a0d35.js", "assets/useRequest-4cb19bee.js", "assets/QueryContainer-778ca57d.js", "assets/QuerySearchCard-abfe6caa.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/QuerySelectRemote-9681b92c.js", "assets/TableContainer-6b49de73.js", "assets/TableToolbar-630e4f38.js", "assets/QueryInput-b0beacee.js", "assets/FormSelect-62b36c15.js", "assets/useArray-1b072fc4.js", "assets/useValid-d1447d9b.js", "assets/BaseDialog-82865103.js", "assets/useDialog-abda8b4e.js", "assets/useNotify-cedc1ad3.js", "assets/SchoolLineApi-27d0a5a5.js"]),
        meta: {menuName: "分数线管理", roleCodes: ["ADMIN"]}
    }, {
        path: "major",
        component: () => st(() => import("./TheAdminMajor-bd4a49a0.js"), ["assets/TheAdminMajor-bd4a49a0.js", "assets/QueryContainer-778ca57d.js", "assets/QuerySearchCard-abfe6caa.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/TableContainer-6b49de73.js", "assets/TableToolbar-630e4f38.js", "assets/QueryInput-b0beacee.js", "assets/useValid-d1447d9b.js", "assets/BaseDialog-82865103.js", "assets/useDialog-abda8b4e.js", "assets/useRequest-4cb19bee.js", "assets/useNotify-cedc1ad3.js", "assets/MajorApi-605bf878.js"]),
        meta: {menuName: "专业管理", roleCodes: ["ADMIN"]}
    }, {
        path: "profession",
        component: () => st(() => import("./TheAdminProfession-516ed2cf.js"), ["assets/TheAdminProfession-516ed2cf.js", "assets/QueryContainer-778ca57d.js", "assets/QuerySearchCard-abfe6caa.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/TableContainer-6b49de73.js", "assets/TableToolbar-630e4f38.js", "assets/QueryInput-b0beacee.js", "assets/FormEditor-af66954e.js", "assets/useValid-d1447d9b.js", "assets/BaseDialog-82865103.js", "assets/useDialog-abda8b4e.js", "assets/useRequest-4cb19bee.js", "assets/useNotify-cedc1ad3.js", "assets/useFormRules-cbf82972.js", "assets/ProfessionApi-32b74b1a.js"]),
        meta: {menuName: "职业管理", roleCodes: ["ADMIN"]}
    }, {
        path: "bbs",
        component: () => st(() => import("./TheAdminBbs-8f1a46c7.js"), ["assets/TheAdminBbs-8f1a46c7.js", "assets/QueryContainer-778ca57d.js", "assets/QuerySearchCard-abfe6caa.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/TableContainer-6b49de73.js", "assets/TableToolbar-630e4f38.js", "assets/QueryInput-b0beacee.js", "assets/BbsDialog-d7a87b8f.js", "assets/FormEditor-af66954e.js", "assets/useValid-d1447d9b.js", "assets/BaseDialog-82865103.js", "assets/useDialog-abda8b4e.js", "assets/useRequest-4cb19bee.js", "assets/useNotify-cedc1ad3.js", "assets/useFormRules-cbf82972.js", "assets/BbsApi-9114505e.js"]),
        meta: {menuName: "论坛管理", roleCodes: ["ADMIN"]}
    }, {
        path: "user-comment",
        component: () => st(() => import("./TheAdminUserComment-2a7ffed6.js"), ["assets/TheAdminUserComment-2a7ffed6.js", "assets/QueryContainer-778ca57d.js", "assets/QuerySearchCard-abfe6caa.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/TableContainer-6b49de73.js", "assets/useNotify-cedc1ad3.js", "assets/useRequest-4cb19bee.js", "assets/useDialog-abda8b4e.js", "assets/UserCommentApi-5c7fae53.js", "assets/QuerySelectRemote-9681b92c.js", "assets/UserApi-7044f7f4.js", "assets/useArray-1b072fc4.js"]),
        meta: {menuName: "评论管理", roleCodes: ["ADMIN"]}
    }, {
        path: "user",
        component: () => st(() => import("./TheAdminUser-fcf2d69d.js"), ["assets/TheAdminUser-fcf2d69d.js", "assets/QueryContainer-778ca57d.js", "assets/QuerySearchCard-abfe6caa.js", "assets/QueryInput-b0beacee.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/TableContainer-6b49de73.js", "assets/FormSelect-62b36c15.js", "assets/UserApi-7044f7f4.js", "assets/useRequest-4cb19bee.js", "assets/useValid-d1447d9b.js", "assets/UserAvatar-c28f9a89.js", "assets/avatar-dc521f05.js", "assets/UploadUserAvatar-5e232abe.js", "assets/useNotify-cedc1ad3.js", "assets/BaseDialog-82865103.js", "assets/useDialog-abda8b4e.js", "assets/useFormRules-cbf82972.js", "assets/TableToolbar-630e4f38.js"]),
        meta: {menuName: "用户管理", roleCodes: ["ADMIN"]}
    }, {
        path: "setting",
        component: () => st(() => import("./TheAdminSetting-2c93474c.js"), ["assets/TheAdminSetting-2c93474c.js", "assets/QueryContainer-778ca57d.js", "assets/QuerySearchCard-abfe6caa.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/TableContainer-6b49de73.js", "assets/TableToolbar-630e4f38.js", "assets/QueryInput-b0beacee.js", "assets/useValid-d1447d9b.js", "assets/BaseDialog-82865103.js", "assets/useDialog-abda8b4e.js", "assets/useRequest-4cb19bee.js", "assets/useNotify-cedc1ad3.js", "assets/useFormRules-cbf82972.js"]),
        meta: {menuName: "基础配置", roleCodes: ["ADMIN"]}
    }, {
        path: "feedback",
        component: () => st(() => import("./TheAdminFeedback-839b7969.js"), ["assets/TheAdminFeedback-839b7969.js", "assets/QueryContainer-778ca57d.js", "assets/QuerySearchCard-abfe6caa.js", "assets/QueryPagination-33101695.js", "assets/usePage-8ca7a06e.js", "assets/TableContainer-6b49de73.js", "assets/TableToolbar-630e4f38.js", "assets/QueryInput-b0beacee.js", "assets/UserItem-db9f1dba.js", "assets/avatar-dc521f05.js", "assets/useRequest-4cb19bee.js", "assets/UserApi-7044f7f4.js", "assets/useTimes-c127d28f.js", "assets/useValid-d1447d9b.js", "assets/BaseDialog-82865103.js", "assets/useDialog-abda8b4e.js", "assets/useNotify-cedc1ad3.js", "assets/useFormRules-cbf82972.js", "assets/FeedbackApi-dd3975b5.js"]),
        meta: {menuName: "用户反馈", roleCodes: ["ADMIN"]}
    }], Ib = [{path: "/", redirect: "/admin"}, {
        path: "/admin",
        component: () => st(() => import("./TheAdmin-5adc890f.js"), ["assets/TheAdmin-5adc890f.js", "assets/useRequest-4cb19bee.js", "assets/useNotify-cedc1ad3.js", "assets/useMenu-af9bf147.js", "assets/useLoginInfo-0c571403.js", "assets/LoginApi-1dda4bc2.js", "assets/UserHeaderMenu-d13b6e99.js", "assets/useDialog-abda8b4e.js", "assets/BaseDialog-82865103.js", "assets/useValid-d1447d9b.js", "assets/UserApi-7044f7f4.js", "assets/UserAvatar-c28f9a89.js", "assets/avatar-dc521f05.js", "assets/UploadUserAvatar-5e232abe.js", "assets/FormInputPassword-77e6c8e9.js"]),
        redirect: "/admin/" + Rc[0].path,
        children: [...Rc]
    }], Db = [{
        path: "/login",
        component: () => st(() => import("./TheLogin-1937215e.js"), ["assets/TheLogin-1937215e.js", "assets/useValid-d1447d9b.js", "assets/FormInputPassword-77e6c8e9.js", "assets/useFormRules-cbf82972.js", "assets/useRequest-4cb19bee.js", "assets/LoginApi-1dda4bc2.js", "assets/useTimes-c127d28f.js", "assets/useNotify-cedc1ad3.js", "assets/useLoginInfo-0c571403.js", "assets/TheLogin-ae030e73.css"])
    }, {
        path: "/register",
        component: () => st(() => import("./TheRegister-04f4fa6d.js"), ["assets/TheRegister-04f4fa6d.js", "assets/useValid-d1447d9b.js", "assets/FormInputPassword-77e6c8e9.js", "assets/useFormRules-cbf82972.js", "assets/useRequest-4cb19bee.js", "assets/LoginApi-1dda4bc2.js", "assets/useNotify-cedc1ad3.js", "assets/TheRegister-0d58bf91.css"])
    }], Hb = [{path: "/", redirect: "/index"}, ...Nb, ...Ib, ...Db, {
        path: "/index",
        component: () => st(() => import("./TheHomeIndex-b438ab99.js"), ["assets/TheHomeIndex-b438ab99.js", "assets/useMenu-af9bf147.js", "assets/useLoginInfo-0c571403.js", "assets/useRequest-4cb19bee.js", "assets/LoginApi-1dda4bc2.js", "assets/TheHomeIndex-b5b4c2d3.css"])
    }, {path: "/:pathMatch(.*)*", component: () => st(() => import("./TheError-d257b9bb.js"), [])}],
    jb = Fb({history: eb(), routes: Hb});/*!
 * Quasar Framework v2.13.0
 * (c) 2015-present Razvan Stoenescu
 * Released under the MIT License.
 */
function At(e, t, n, o) {
    return Object.defineProperty(e, t, {get: n, set: o, enumerable: !0}), e
}

function kv(e, t) {
    for (const n in t) At(e, n, t[n]);
    return e
}

const en = D(!1);
let er;

function Qb(e, t) {
    const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
    return {
        browser: n[5] || n[3] || n[1] || "",
        version: n[2] || n[4] || "0",
        versionNumber: n[4] || n[2] || "0",
        platform: t[0] || ""
    }
}

function Kb(e) {
    return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || []
}

const qv = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;

function Ub(e) {
    er = {is: {...e}}, delete e.mac, delete e.desktop;
    const t = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
    Object.assign(e, {mobile: !0, ios: !0, platform: t, [t]: !0})
}

function Wb(e) {
    const t = e.toLowerCase(), n = Kb(t), o = Qb(t, n), l = {};
    o.browser && (l[o.browser] = !0, l.version = o.version, l.versionNumber = parseInt(o.versionNumber, 10)), o.platform && (l[o.platform] = !0);
    const a = l.android || l.ios || l.bb || l.blackberry || l.ipad || l.iphone || l.ipod || l.kindle || l.playbook || l.silk || l["windows phone"];
    return a === !0 || t.indexOf("mobile") > -1 ? (l.mobile = !0, l.edga || l.edgios ? (l.edge = !0, o.browser = "edge") : l.crios ? (l.chrome = !0, o.browser = "chrome") : l.fxios && (l.firefox = !0, o.browser = "firefox")) : l.desktop = !0, (l.ipod || l.ipad || l.iphone) && (l.ios = !0), l["windows phone"] && (l.winphone = !0, delete l["windows phone"]), (l.chrome || l.opr || l.safari || l.vivaldi || l.mobile === !0 && l.ios !== !0 && a !== !0) && (l.webkit = !0), l.edg && (o.browser = "edgechromium", l.edgeChromium = !0), (l.safari && l.blackberry || l.bb) && (o.browser = "blackberry", l.blackberry = !0), l.safari && l.playbook && (o.browser = "playbook", l.playbook = !0), l.opr && (o.browser = "opera", l.opera = !0), l.safari && l.android && (o.browser = "android", l.android = !0), l.safari && l.kindle && (o.browser = "kindle", l.kindle = !0), l.safari && l.silk && (o.browser = "silk", l.silk = !0), l.vivaldi && (o.browser = "vivaldi", l.vivaldi = !0), l.name = o.browser, l.platform = o.platform, t.indexOf("electron") > -1 ? l.electron = !0 : document.location.href.indexOf("-extension://") > -1 ? l.bex = !0 : (window.Capacitor !== void 0 ? (l.capacitor = !0, l.nativeMobile = !0, l.nativeMobileWrapper = "capacitor") : window._cordovaNative === void 0 && window.cordova === void 0 || (l.cordova = !0, l.nativeMobile = !0, l.nativeMobileWrapper = "cordova"), qv === !0 && l.mac === !0 && (l.desktop === !0 && l.safari === !0 || l.nativeMobile === !0 && l.android !== !0 && l.ios !== !0 && l.ipad !== !0) && Ub(l)), l
}

const Vc = navigator.userAgent || navigator.vendor || window.opera,
    Yb = {has: {touch: !1, webStorage: !1}, within: {iframe: !1}},
    Fe = {userAgent: Vc, is: Wb(Vc), has: {touch: qv}, within: {iframe: window.self !== window.top}}, pi = {
        install(e) {
            const {$q: t} = e;
            en.value === !0 ? (e.onSSRHydrated.push(() => {
                Object.assign(t.platform, Fe), en.value = !1, er = void 0
            }), t.platform = En(this)) : t.platform = this
        }
    };
{
    let e;
    At(Fe.has, "webStorage", () => {
        if (e !== void 0) return e;
        try {
            if (window.localStorage) return e = !0, !0
        } catch {
        }
        return e = !1, !1
    }), Fe.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf("apple"), en.value === !0 ? Object.assign(pi, Fe, er, Yb) : Object.assign(pi, Fe)
}
var vo = (e, t) => {
    const n = En(e);
    for (const o in e) At(t, o, () => n[o], l => {
        n[o] = l
    });
    return t
};
const ut = {hasPassive: !1, passiveCapture: !0, notPassiveCapture: !0};
try {
    const e = Object.defineProperty({}, "passive", {
        get() {
            Object.assign(ut, {
                hasPassive: !0,
                passive: {passive: !0},
                notPassive: {passive: !1},
                passiveCapture: {passive: !0, capture: !0},
                notPassiveCapture: {passive: !1, capture: !0}
            })
        }
    });
    window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e)
} catch {
}

function xt() {
}

function tr(e) {
    return e.button === 0
}

function Wt(e) {
    return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), {
        top: e.clientY,
        left: e.clientX
    }
}

function Xb(e) {
    if (e.path) return e.path;
    if (e.composedPath) return e.composedPath();
    const t = [];
    let n = e.target;
    for (; n;) {
        if (t.push(n), n.tagName === "HTML") return t.push(document), t.push(window), t;
        n = n.parentElement
    }
}

function _t(e) {
    e.stopPropagation()
}

function Bt(e) {
    e.cancelable !== !1 && e.preventDefault()
}

function Ie(e) {
    e.cancelable !== !1 && e.preventDefault(), e.stopPropagation()
}

function il(e, t) {
    if (e === void 0 || t === !0 && e.__dragPrevented === !0) return;
    const n = t === !0 ? o => {
        o.__dragPrevented = !0, o.addEventListener("dragstart", Bt, ut.notPassiveCapture)
    } : o => {
        delete o.__dragPrevented, o.removeEventListener("dragstart", Bt, ut.notPassiveCapture)
    };
    e.querySelectorAll("a, img").forEach(n)
}

function wt(e, t, n) {
    const o = `__q_${t}_evt`;
    e[o] = e[o] !== void 0 ? e[o].concat(n) : n, n.forEach(l => {
        l[0].addEventListener(l[1], e[l[2]], ut[l[3]])
    })
}

function Ht(e, t) {
    const n = `__q_${t}_evt`;
    e[n] !== void 0 && (e[n].forEach(o => {
        o[0].removeEventListener(o[1], e[o[2]], ut[o[3]])
    }), e[n] = void 0)
}

function Tl(e, t = 250, n) {
    let o = null;

    function l() {
        const a = arguments, i = () => {
            o = null, n !== !0 && e.apply(this, a)
        };
        o !== null ? clearTimeout(o) : n === !0 && e.apply(this, a), o = setTimeout(i, t)
    }

    return l.cancel = () => {
        o !== null && clearTimeout(o)
    }, l
}

const Cr = ["sm", "md", "lg", "xl"], {passive: Fc} = ut;
var Zb = vo({
    width: 0,
    height: 0,
    name: "xs",
    sizes: {sm: 600, md: 1024, lg: 1440, xl: 1920},
    lt: {sm: !0, md: !0, lg: !0, xl: !0},
    gt: {xs: !1, sm: !1, md: !1, lg: !1},
    xs: !0,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1
}, {
    setSizes: xt, setDebounce: xt, install({$q: e, onSSRHydrated: t}) {
        if (e.screen = this, this.__installed === !0) return void (e.config.screen !== void 0 && (e.config.screen.bodyClasses === !1 ? document.body.classList.remove(`screen--${this.name}`) : this.__update(!0)));
        const {visualViewport: n} = window, o = n || window, l = document.scrollingElement || document.documentElement,
            a = n === void 0 || Fe.is.mobile === !0 ? () => [Math.max(window.innerWidth, l.clientWidth), Math.max(window.innerHeight, l.clientHeight)] : () => [n.width * n.scale + window.innerWidth - l.clientWidth, n.height * n.scale + window.innerHeight - l.clientHeight],
            i = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0;
        this.__update = p => {
            const [v, m] = a();
            if (m !== this.height && (this.height = m), v !== this.width) this.width = v; else if (p !== !0) return;
            let g = this.sizes;
            this.gt.xs = v >= g.sm, this.gt.sm = v >= g.md, this.gt.md = v >= g.lg, this.gt.lg = v >= g.xl, this.lt.sm = v < g.sm, this.lt.md = v < g.md, this.lt.lg = v < g.lg, this.lt.xl = v < g.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === !0 && this.lt.md === !0, this.md = this.gt.sm === !0 && this.lt.lg === !0, this.lg = this.gt.md === !0 && this.lt.xl === !0, this.xl = this.gt.lg, g = (this.xs === !0 ? "xs" : this.sm === !0 && "sm") || this.md === !0 && "md" || this.lg === !0 && "lg" || "xl", g !== this.name && (i === !0 && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${g}`)), this.name = g)
        };
        let r, s = {}, d = 16;
        this.setSizes = p => {
            Cr.forEach(v => {
                p[v] !== void 0 && (s[v] = p[v])
            })
        }, this.setDebounce = p => {
            d = p
        };
        const c = () => {
            const p = getComputedStyle(document.body);
            p.getPropertyValue("--q-size-sm") && Cr.forEach(v => {
                this.sizes[v] = parseInt(p.getPropertyValue(`--q-size-${v}`), 10)
            }), this.setSizes = v => {
                Cr.forEach(m => {
                    v[m] && (this.sizes[m] = v[m])
                }), this.__update(!0)
            }, this.setDebounce = v => {
                r !== void 0 && o.removeEventListener("resize", r, Fc), r = v > 0 ? Tl(this.__update, v) : this.__update, o.addEventListener("resize", r, Fc)
            }, this.setDebounce(d), Object.keys(s).length !== 0 ? (this.setSizes(s), s = void 0) : this.__update(), i === !0 && this.name === "xs" && document.body.classList.add("screen--xs")
        };
        en.value === !0 ? t.push(c) : c()
    }
});
const Nt = vo({isActive: !1, mode: !1}, {
    __media: void 0, set(e) {
        Nt.mode = e, e === "auto" ? (Nt.__media === void 0 && (Nt.__media = window.matchMedia("(prefers-color-scheme: dark)"), Nt.__updateMedia = () => {
            Nt.set("auto")
        }, Nt.__media.addListener(Nt.__updateMedia)), e = Nt.__media.matches) : Nt.__media !== void 0 && (Nt.__media.removeListener(Nt.__updateMedia), Nt.__media = void 0), Nt.isActive = e === !0, document.body.classList.remove(`body--${e === !0 ? "light" : "dark"}`), document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`)
    }, toggle() {
        Nt.set(Nt.isActive === !1)
    }, install({$q: e, onSSRHydrated: t, ssrContext: n}) {
        const {dark: o} = e.config;
        if (e.dark = this, this.__installed === !0 && o === void 0) return;
        this.isActive = o === !0;
        const l = o !== void 0 && o;
        if (en.value === !0) {
            const a = r => {
                this.__fromSSR = r
            }, i = this.set;
            this.set = a, a(l), t.push(() => {
                this.set = i, this.set(this.__fromSSR)
            })
        } else this.set(l)
    }
}), Tv = () => !0;

function Gb(e) {
    return typeof e == "string" && e !== "" && e !== "/" && e !== "#/"
}

function Jb(e) {
    return e.startsWith("#") === !0 && (e = e.substring(1)), e.startsWith("/") === !1 && (e = "/" + e), e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)), "#" + e
}

function ey(e) {
    if (e.backButtonExit === !1) return () => !1;
    if (e.backButtonExit === "*") return Tv;
    const t = ["#/"];
    return Array.isArray(e.backButtonExit) === !0 && t.push(...e.backButtonExit.filter(Gb).map(Jb)), () => t.includes(window.location.hash)
}

var ca = {
    __history: [], add: xt, remove: xt, install({$q: e}) {
        if (this.__installed === !0) return;
        const {cordova: t, capacitor: n} = Fe.is;
        if (t !== !0 && n !== !0) return;
        const o = e.config[t === !0 ? "cordova" : "capacitor"];
        if (o !== void 0 && o.backButton === !1 || n === !0 && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0)) return;
        this.add = i => {
            i.condition === void 0 && (i.condition = Tv), this.__history.push(i)
        }, this.remove = i => {
            const r = this.__history.indexOf(i);
            r >= 0 && this.__history.splice(r, 1)
        };
        const l = ey(Object.assign({backButtonExit: !0}, o)), a = () => {
            if (this.__history.length) {
                const i = this.__history[this.__history.length - 1];
                i.condition() === !0 && (this.__history.pop(), i.handler())
            } else l() === !0 ? navigator.app.exitApp() : window.history.back()
        };
        t === !0 ? document.addEventListener("deviceready", () => {
            document.addEventListener("backbutton", a, !1)
        }) : window.Capacitor.Plugins.App.addListener("backButton", a)
    }
}, ss = {
    isoName: "en-US",
    nativeName: "English (US)",
    label: {
        clear: "Clear",
        ok: "OK",
        cancel: "Cancel",
        close: "Close",
        set: "Set",
        select: "Select",
        reset: "Reset",
        remove: "Remove",
        update: "Update",
        create: "Create",
        search: "Search",
        filter: "Filter",
        refresh: "Refresh",
        expand: e => e ? `Expand "${e}"` : "Expand",
        collapse: e => e ? `Collapse "${e}"` : "Collapse"
    },
    date: {
        days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        firstDayOfWeek: 0,
        format24h: !1,
        pluralDay: "days"
    },
    table: {
        noData: "No data available",
        noResults: "No matching records found",
        loading: "Loading...",
        selectedRecords: e => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.",
        recordsPerPage: "Records per page:",
        allRows: "All",
        pagination: (e, t, n) => e + "-" + t + " of " + n,
        columns: "Columns"
    },
    editor: {
        url: "URL",
        bold: "Bold",
        italic: "Italic",
        strikethrough: "Strikethrough",
        underline: "Underline",
        unorderedList: "Unordered List",
        orderedList: "Ordered List",
        subscript: "Subscript",
        superscript: "Superscript",
        hyperlink: "Hyperlink",
        toggleFullscreen: "Toggle Fullscreen",
        quote: "Quote",
        left: "Left align",
        center: "Center align",
        right: "Right align",
        justify: "Justify align",
        print: "Print",
        outdent: "Decrease indentation",
        indent: "Increase indentation",
        removeFormat: "Remove formatting",
        formatting: "Formatting",
        fontSize: "Font Size",
        align: "Align",
        hr: "Insert Horizontal Rule",
        undo: "Undo",
        redo: "Redo",
        heading1: "Heading 1",
        heading2: "Heading 2",
        heading3: "Heading 3",
        heading4: "Heading 4",
        heading5: "Heading 5",
        heading6: "Heading 6",
        paragraph: "Paragraph",
        code: "Code",
        size1: "Very small",
        size2: "A bit small",
        size3: "Normal",
        size4: "Medium-large",
        size5: "Big",
        size6: "Very big",
        size7: "Maximum",
        defaultFont: "Default Font",
        viewSource: "View Source"
    },
    tree: {noNodes: "No nodes available", noResults: "No matching nodes found"}
};

function zc() {
    const e = Array.isArray(navigator.languages) === !0 && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
    if (typeof e == "string") return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-")
}

const Zt = vo({__langPack: {}}, {
    getLocale: zc, set(e = ss, t) {
        const n = {...e, rtl: e.rtl === !0, getLocale: zc};
        if (n.set = Zt.set, Zt.__langConfig === void 0 || Zt.__langConfig.noHtmlAttrs !== !0) {
            const o = document.documentElement;
            o.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"), o.setAttribute("lang", n.isoName)
        }
        Object.assign(Zt.__langPack, n), Zt.props = n, Zt.isoName = n.isoName, Zt.nativeName = n.nativeName
    }, install({$q: e, lang: t, ssrContext: n}) {
        e.lang = Zt.__langPack, Zt.__langConfig = e.config.lang, this.__installed === !0 ? t !== void 0 && this.set(t) : this.set(t || ss)
    }
});

function ty(e, t, n = document.body) {
    if (typeof e != "string") throw new TypeError("Expected a string as propName");
    if (typeof t != "string") throw new TypeError("Expected a string as value");
    if (!(n instanceof Element)) throw new TypeError("Expected a DOM element");
    n.style.setProperty(`--q-${e}`, t)
}

let $v = !1;

function ny(e) {
    $v = e.isComposing === !0
}

function zo(e) {
    return $v === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
}

function dn(e, t) {
    return zo(e) !== !0 && [].concat(t).includes(e.keyCode)
}

function Mv(e) {
    return e.ios === !0 ? "ios" : e.android === !0 ? "android" : void 0
}

function oy({is: e, has: t, within: n}, o) {
    const l = [e.desktop === !0 ? "desktop" : "mobile", `${t.touch === !1 ? "no-" : ""}touch`];
    if (e.mobile === !0) {
        const a = Mv(e);
        a !== void 0 && l.push("platform-" + a)
    }
    if (e.nativeMobile === !0) {
        const a = e.nativeMobileWrapper;
        l.push(a), l.push("native-mobile"), e.ios !== !0 || o[a] !== void 0 && o[a].iosStatusBarPadding === !1 || l.push("q-ios-padding")
    } else e.electron === !0 ? l.push("electron") : e.bex === !0 && l.push("bex");
    return n.iframe === !0 && l.push("within-iframe"), l
}

function ly() {
    const {is: e} = Fe, t = document.body.className, n = new Set(t.replace(/ {2}/g, " ").split(" "));
    if (er !== void 0) n.delete("desktop"), n.add("platform-ios"), n.add("mobile"); else if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
        if (e.desktop === !0) n.delete("mobile"), n.delete("platform-ios"), n.delete("platform-android"), n.add("desktop"); else if (e.mobile === !0) {
            n.delete("desktop"), n.add("mobile");
            const l = Mv(e);
            l !== void 0 ? (n.add(`platform-${l}`), n.delete(`platform-${l === "ios" ? "android" : "ios"}`)) : (n.delete("platform-ios"), n.delete("platform-android"))
        }
    }
    Fe.has.touch === !0 && (n.delete("no-touch"), n.add("touch")), Fe.within.iframe === !0 && n.add("within-iframe");
    const o = Array.from(n).join(" ");
    t !== o && (document.body.className = o)
}

function ay(e) {
    for (const t in e) ty(t, e[t])
}

var iy = {
    install(e) {
        if (this.__installed !== !0) {
            if (en.value === !0) ly(); else {
                const {$q: t} = e;
                t.config.brand !== void 0 && ay(t.config.brand);
                const n = oy(Fe, t.config);
                document.body.classList.add.apply(document.body.classList, n)
            }
            Fe.is.ios === !0 && document.body.addEventListener("touchstart", xt), window.addEventListener("keydown", ny, !0)
        }
    }
}, ry = {
    name: "material-icons",
    type: {positive: "check_circle", negative: "warning", info: "info", warning: "priority_high"},
    arrow: {
        up: "arrow_upward",
        right: "arrow_forward",
        down: "arrow_downward",
        left: "arrow_back",
        dropdown: "arrow_drop_down"
    },
    chevron: {left: "chevron_left", right: "chevron_right"},
    colorPicker: {spectrum: "gradient", tune: "tune", palette: "style"},
    pullToRefresh: {icon: "refresh"},
    carousel: {
        left: "chevron_left",
        right: "chevron_right",
        up: "keyboard_arrow_up",
        down: "keyboard_arrow_down",
        navigationIcon: "lens"
    },
    chip: {remove: "cancel", selected: "check"},
    datetime: {arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today"},
    editor: {
        bold: "format_bold",
        italic: "format_italic",
        strikethrough: "strikethrough_s",
        underline: "format_underlined",
        unorderedList: "format_list_bulleted",
        orderedList: "format_list_numbered",
        subscript: "vertical_align_bottom",
        superscript: "vertical_align_top",
        hyperlink: "link",
        toggleFullscreen: "fullscreen",
        quote: "format_quote",
        left: "format_align_left",
        center: "format_align_center",
        right: "format_align_right",
        justify: "format_align_justify",
        print: "print",
        outdent: "format_indent_decrease",
        indent: "format_indent_increase",
        removeFormat: "format_clear",
        formatting: "text_format",
        fontSize: "format_size",
        align: "format_align_left",
        hr: "remove",
        undo: "undo",
        redo: "redo",
        heading: "format_size",
        code: "code",
        size: "format_size",
        font: "font_download",
        viewSource: "code"
    },
    expansionItem: {icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down"},
    fab: {icon: "add", activeIcon: "close"},
    field: {clear: "cancel", error: "error"},
    pagination: {first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page"},
    rating: {icon: "grade"},
    stepper: {done: "check", active: "edit", error: "warning"},
    tabs: {left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down"},
    table: {
        arrowUp: "arrow_upward",
        warning: "warning",
        firstPage: "first_page",
        prevPage: "chevron_left",
        nextPage: "chevron_right",
        lastPage: "last_page"
    },
    tree: {icon: "play_arrow"},
    uploader: {
        done: "done",
        clear: "clear",
        add: "add_box",
        upload: "cloud_upload",
        removeQueue: "clear_all",
        removeUploaded: "done_all"
    }
};
const mi = vo({iconMapFn: null, __icons: {}}, {
        set(e, t) {
            const n = {...e, rtl: e.rtl === !0};
            n.set = mi.set, Object.assign(mi.__icons, n)
        }, install({$q: e, iconSet: t, ssrContext: n}) {
            e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__icons, At(e, "iconMapFn", () => this.iconMapFn, o => {
                this.iconMapFn = o
            }), this.__installed === !0 ? t !== void 0 && this.set(t) : this.set(t || ry)
        }
    }), Ev = "_q_", Pv = "_q_t_", Av = "_q_s_", No = "_q_l_", Bv = "_q_pc_", Ov = "_q_f_", Jo = "_q_fo_", Lv = "_q_tabs_",
    Rv = "_q_u_", at = () => {
    }, hi = {};
let Vv = !1;

function sy() {
    Vv = !0
}

function yn(e, t) {
    if (e === t) return !0;
    if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        let n, o;
        if (e.constructor === Array) {
            if (n = e.length, n !== t.length) return !1;
            for (o = n; o-- !== 0;) if (yn(e[o], t[o]) !== !0) return !1;
            return !0
        }
        if (e.constructor === Map) {
            if (e.size !== t.size) return !1;
            let a = e.entries();
            for (o = a.next(); o.done !== !0;) {
                if (t.has(o.value[0]) !== !0) return !1;
                o = a.next()
            }
            for (a = e.entries(), o = a.next(); o.done !== !0;) {
                if (yn(o.value[1], t.get(o.value[0])) !== !0) return !1;
                o = a.next()
            }
            return !0
        }
        if (e.constructor === Set) {
            if (e.size !== t.size) return !1;
            const a = e.entries();
            for (o = a.next(); o.done !== !0;) {
                if (t.has(o.value[0]) !== !0) return !1;
                o = a.next()
            }
            return !0
        }
        if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
            if (n = e.length, n !== t.length) return !1;
            for (o = n; o-- !== 0;) if (e[o] !== t[o]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        const l = Object.keys(e).filter(a => e[a] !== void 0);
        if (n = l.length, n !== Object.keys(t).filter(a => t[a] !== void 0).length) return !1;
        for (o = n; o-- !== 0;) {
            const a = l[o];
            if (yn(e[a], t[a]) !== !0) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Et(e) {
    return e !== null && typeof e == "object" && Array.isArray(e) !== !0
}

function us(e) {
    return Object.prototype.toString.call(e) === "[object Date]"
}

function uy(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]"
}

function da(e) {
    return typeof e == "number" && isFinite(e)
}

const Nc = [pi, iy, Nt, Zb, ca, Zt, mi];

function nr(e, t) {
    const n = vv(e);
    n.config.globalProperties = t.config.globalProperties;
    const {reload: o, ...l} = t._context;
    return Object.assign(n._context, l), n
}

function Ic(e, t) {
    t.forEach(n => {
        n.install(e), n.__installed = !0
    })
}

function cy(e, t, n) {
    e.config.globalProperties.$q = n.$q, e.provide(Ev, n.$q), Ic(n, Nc), t.components !== void 0 && Object.values(t.components).forEach(o => {
        Et(o) === !0 && o.name !== void 0 && e.component(o.name, o)
    }), t.directives !== void 0 && Object.values(t.directives).forEach(o => {
        Et(o) === !0 && o.name !== void 0 && e.directive(o.name, o)
    }), t.plugins !== void 0 && Ic(n, Object.values(t.plugins).filter(o => typeof o.install == "function" && Nc.includes(o) === !1)), en.value === !0 && (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach(o => {
            o()
        }), n.$q.onSSRHydrated = () => {
        }
    })
}

var dy = function (e, t = {}) {
    const n = {version: "2.13.0"};
    Vv === !1 ? (t.config !== void 0 && Object.assign(hi, t.config), n.config = {...hi}, sy()) : n.config = t.config || {}, cy(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: []
    })
};
const ve = e => ma(Vs(e)), qn = e => ma(e), Dc = ["B", "KB", "MB", "GB", "TB", "PB"];

function cs(e) {
    let t = 0;
    for (; parseInt(e, 10) >= 1024 && t < Dc.length - 1;) e /= 1024, ++t;
    return `${e.toFixed(1)}${Dc[t]}`
}

function ct(e, t, n) {
    return n <= t ? t : Math.min(n, Math.max(t, e))
}

function gi(e, t, n) {
    if (n <= t) return t;
    const o = n - t + 1;
    let l = t + (e - t) % o;
    return l < t && (l = o + l), l === 0 ? 0 : l
}

function ot(e, t = 2, n = "0") {
    if (e == null) return e;
    const o = "" + e;
    return o.length >= t ? o : new Array(t - o.length + 1).join(n) + o
}

const Ws = XMLHttpRequest, Fv = Ws.prototype.open, fy = ["top", "right", "bottom", "left"];
let bi = [], Jl = 0;

function vy({p: e, pos: t, active: n, horiz: o, reverse: l, dir: a}) {
    let i = 1, r = 1;
    return o === !0 ? (l === !0 && (i = -1), t === "bottom" && (r = -1), {transform: `translate3d(${i * (e - 100)}%,${n ? 0 : -200 * r}%,0)`}) : (l === !0 && (r = -1), t === "right" && (i = -1), {transform: `translate3d(${n ? 0 : a * i * -200}%,${r * (e - 100)}%,0)`})
}

function py(e, t) {
    return typeof t != "number" && (t = e < 25 ? 3 * Math.random() + 3 : e < 65 ? 3 * Math.random() : e < 85 ? 2 * Math.random() : e < 99 ? .6 : 0), ct(e + t, 0, 100)
}

function my(e) {
    Jl++, bi.push(e), Jl > 1 || (Ws.prototype.open = function (t, n) {
        const o = [], l = () => {
            bi.forEach(i => {
                i.hijackFilter.value !== null && i.hijackFilter.value(n) !== !0 || (i.start(), o.push(i.stop))
            })
        }, a = () => {
            o.forEach(i => {
                i()
            })
        };
        this.addEventListener("loadstart", l, {once: !0}), this.addEventListener("loadend", a, {once: !0}), Fv.apply(this, arguments)
    })
}

function hy(e) {
    bi = bi.filter(t => t.start !== e), Jl = Math.max(0, Jl - 1), Jl === 0 && (Ws.prototype.open = Fv)
}

var zv = ve({
    name: "QAjaxBar",
    props: {
        position: {type: String, default: "top", validator: e => fy.includes(e)},
        size: {type: String, default: "2px"},
        color: String,
        skipHijack: Boolean,
        reverse: Boolean,
        hijackFilter: Function
    },
    emits: ["start", "stop"],
    setup(e, {emit: t}) {
        const {proxy: n} = Se(), o = D(0), l = D(!1), a = D(!0);
        let i, r = 0, s = null;
        const d = f(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (a.value === !0 ? "" : " no-transition")),
            c = f(() => e.position === "top" || e.position === "bottom"),
            p = f(() => c.value === !0 ? "height" : "width"), v = f(() => {
                const b = l.value, h = vy({
                    p: o.value,
                    pos: e.position,
                    active: b,
                    horiz: c.value,
                    reverse: n.$q.lang.rtl === !0 && ["top", "bottom"].includes(e.position) ? e.reverse === !1 : e.reverse,
                    dir: n.$q.lang.rtl === !0 ? -1 : 1
                });
                return h[p.value] = e.size, h.opacity = b ? 1 : 0, h
            }), m = f(() => l.value === !0 ? {
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": o.value
            } : {"aria-hidden": "true"});

        function g(b = 300) {
            const h = i;
            return i = Math.max(0, b) || 0, r++, r > 1 ? (h === 0 && b > 0 ? S() : s !== null && h > 0 && b <= 0 && (clearTimeout(s), s = null), r) : (s !== null && clearTimeout(s), t("start"), o.value = 0, s = setTimeout(() => {
                s = null, a.value = !0, b > 0 && S()
            }, l.value === !0 ? 500 : 1), l.value !== !0 && (l.value = !0, a.value = !1), r)
        }

        function x(b) {
            return r > 0 && (o.value = py(o.value, b)), r
        }

        function w() {
            if (r = Math.max(0, r - 1), r > 0) return r;
            s !== null && (clearTimeout(s), s = null), t("stop");
            const b = () => {
                a.value = !0, o.value = 100, s = setTimeout(() => {
                    s = null, l.value = !1
                }, 1e3)
            };
            return o.value === 0 ? s = setTimeout(b, 1) : b(), r
        }

        function S() {
            o.value < 100 && (s = setTimeout(() => {
                s = null, x(), S()
            }, i))
        }

        let y;
        return mt(() => {
            e.skipHijack !== !0 && (y = !0, my({start: g, stop: w, hijackFilter: f(() => e.hijackFilter || null)}))
        }), Ke(() => {
            s !== null && clearTimeout(s), y === !0 && hy(g)
        }), Object.assign(n, {start: g, stop: w, increment: x}), () => u("div", {
            class: d.value,
            style: v.value, ...m.value
        })
    }
});
const ds = {xs: 18, sm: 24, md: 32, lg: 38, xl: 46}, Qn = {size: String};

function Kn(e, t = ds) {
    return f(() => e.size !== void 0 ? {fontSize: e.size in t ? `${t[e.size]}px` : e.size} : null)
}

function Ae(e, t) {
    return e !== void 0 && e() || t
}

function ha(e, t) {
    if (e !== void 0) {
        const n = e();
        if (n != null) return n.slice()
    }
    return t
}

function St(e, t) {
    return e !== void 0 ? t.concat(e()) : t
}

function Ys(e, t) {
    return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e()
}

function fn(e, t, n, o, l, a) {
    t.key = o + l;
    const i = u(e, t, n);
    return l === !0 ? Sn(i, a()) : i
}

const Hc = "0 0 24 24", jc = e => e, kr = e => `ionicons ${e}`, Nv = {
        "mdi-": e => `mdi ${e}`,
        "icon-": jc,
        "bt-": e => `bt ${e}`,
        "eva-": e => `eva ${e}`,
        "ion-md": kr,
        "ion-ios": kr,
        "ion-logo": kr,
        "iconfont ": jc,
        "ti-": e => `themify-icon ${e}`,
        "bi-": e => `bootstrap-icons ${e}`
    }, Iv = {o_: "-outlined", r_: "-round", s_: "-sharp"}, Dv = {sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp"},
    gy = new RegExp("^(" + Object.keys(Nv).join("|") + ")"), by = new RegExp("^(" + Object.keys(Iv).join("|") + ")"),
    Qc = new RegExp("^(" + Object.keys(Dv).join("|") + ")"), yy = /^[Mm]\s?[-+]?\.?\d/, _y = /^img:/, wy = /^svguse:/,
    xy = /^ion-/, Sy = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var Ze = ve({
    name: "QIcon",
    props: {...Qn, tag: {type: String, default: "i"}, name: String, color: String, left: Boolean, right: Boolean},
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Se(), o = Kn(e),
            l = f(() => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")),
            a = f(() => {
                let i, r = e.name;
                if (r === "none" || !r) return {none: !0};
                if (n.iconMapFn !== null) {
                    const c = n.iconMapFn(r);
                    if (c !== void 0) {
                        if (c.icon === void 0) return {cls: c.cls, content: c.content !== void 0 ? c.content : " "};
                        if (r = c.icon, r === "none" || !r) return {none: !0}
                    }
                }
                if (yy.test(r) === !0) {
                    const [c, p = Hc] = r.split("|");
                    return {
                        svg: !0, viewBox: p, nodes: c.split("&&").map(v => {
                            const [m, g, x] = v.split("@@");
                            return u("path", {style: g, d: m, transform: x})
                        })
                    }
                }
                if (_y.test(r) === !0) return {img: !0, src: r.substring(4)};
                if (wy.test(r) === !0) {
                    const [c, p = Hc] = r.split("|");
                    return {svguse: !0, src: c.substring(7), viewBox: p}
                }
                let s = " ";
                const d = r.match(gy);
                if (d !== null) i = Nv[d[1]](r); else if (Sy.test(r) === !0) i = r; else if (xy.test(r) === !0) i = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${r.substring(3)}`; else if (Qc.test(r) === !0) {
                    i = "notranslate material-symbols";
                    const c = r.match(Qc);
                    c !== null && (r = r.substring(6), i += Dv[c[1]]), s = r
                } else {
                    i = "notranslate material-icons";
                    const c = r.match(by);
                    c !== null && (r = r.substring(2), i += Iv[c[1]]), s = r
                }
                return {cls: i, content: s}
            });
        return () => {
            const i = {class: l.value, style: o.value, "aria-hidden": "true", role: "presentation"};
            return a.value.none === !0 ? u(e.tag, i, Ae(t.default)) : a.value.img === !0 ? u("span", i, St(t.default, [u("img", {src: a.value.src})])) : a.value.svg === !0 ? u("span", i, St(t.default, [u("svg", {viewBox: a.value.viewBox || "0 0 24 24"}, a.value.nodes)])) : a.value.svguse === !0 ? u("span", i, St(t.default, [u("svg", {viewBox: a.value.viewBox}, [u("use", {"xlink:href": a.value.src})])])) : (a.value.cls !== void 0 && (i.class += " " + a.value.cls), u(e.tag, i, St(t.default, [a.value.content])))
        }
    }
}), Hv = ve({
    name: "QAvatar",
    props: {...Qn, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean},
    setup(e, {slots: t}) {
        const n = Kn(e),
            o = f(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === !0 ? " q-avatar--square" : e.rounded === !0 ? " rounded-borders" : "")),
            l = f(() => e.fontSize ? {fontSize: e.fontSize} : null);
        return () => {
            const a = e.icon !== void 0 ? [u(Ze, {name: e.icon})] : void 0;
            return u("div", {
                class: o.value,
                style: n.value
            }, [u("div", {
                class: "q-avatar__content row flex-center overflow-hidden",
                style: l.value
            }, Ys(t.default, a))])
        }
    }
});
const Cy = ["top", "middle", "bottom"];
var ky = ve({
    name: "QBadge",
    props: {
        color: String,
        textColor: String,
        floating: Boolean,
        transparent: Boolean,
        multiLine: Boolean,
        outline: Boolean,
        rounded: Boolean,
        label: [Number, String],
        align: {type: String, validator: e => Cy.includes(e)}
    },
    setup(e, {slots: t}) {
        const n = f(() => e.align !== void 0 ? {verticalAlign: e.align} : null), o = f(() => {
            const l = e.outline === !0 && e.color || e.textColor;
            return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === !0 ? "multi" : "single"}-line` + (e.outline === !0 ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (l !== void 0 ? ` text-${l}` : "") + (e.floating === !0 ? " q-badge--floating" : "") + (e.rounded === !0 ? " q-badge--rounded" : "") + (e.transparent === !0 ? " q-badge--transparent" : "")
        });
        return () => u("div", {
            class: o.value,
            style: n.value,
            role: "status",
            "aria-label": e.label
        }, St(t.default, e.label !== void 0 ? [e.label] : []))
    }
});
const Ge = {dark: {type: Boolean, default: null}};

function Je(e, t) {
    return f(() => e.dark === null ? t.dark.isActive : e.dark)
}

var qy = ve({
    name: "QBanner",
    props: {...Ge, inlineActions: Boolean, dense: Boolean, rounded: Boolean},
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Se(), o = Je(e, n),
            l = f(() => "q-banner row items-center" + (e.dense === !0 ? " q-banner--dense" : "") + (o.value === !0 ? " q-banner--dark q-dark" : "") + (e.rounded === !0 ? " rounded-borders" : "")),
            a = f(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === !0 ? "auto" : "all"}`);
        return () => {
            const i = [u("div", {class: "q-banner__avatar col-auto row items-center self-start"}, Ae(t.avatar)), u("div", {class: "q-banner__content col text-body2"}, Ae(t.default))],
                r = Ae(t.action);
            return r !== void 0 && i.push(u("div", {class: a.value}, r)), u("div", {
                class: l.value + (e.inlineActions === !1 && r !== void 0 ? " q-banner--top-padding" : ""),
                role: "alert"
            }, i)
        }
    }
}), Ty = ve({
    name: "QBar", props: {...Ge, dense: Boolean}, setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Se(), o = Je(e, n),
            l = f(() => `q-bar row no-wrap items-center q-bar--${e.dense === !0 ? "dense" : "standard"}  q-bar--${o.value === !0 ? "dark" : "light"}`);
        return () => u("div", {class: l.value, role: "toolbar"}, Ae(t.default))
    }
});
const jv = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch"
}, $y = Object.keys(jv), Xs = {align: {type: String, validator: e => $y.includes(e)}};

function Zs(e) {
    return f(() => {
        const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
        return `${e.vertical === !0 ? "items" : "justify"}-${jv[t]}`
    })
}

function Ja(e) {
    if (Object(e.$parent) === e.$parent) return e.$parent;
    let {parent: t} = e.$;
    for (; Object(t) === t;) {
        if (Object(t.proxy) === t.proxy) return t.proxy;
        t = t.parent
    }
}

function Qv(e, t) {
    typeof t.type == "symbol" ? Array.isArray(t.children) === !0 && t.children.forEach(n => {
        Qv(e, n)
    }) : e.add(t)
}

function Gs(e) {
    const t = new Set;
    return e.forEach(n => {
        Qv(t, n)
    }), Array.from(t)
}

function Js(e) {
    return e.appContext.config.globalProperties.$router !== void 0
}

function ga(e) {
    return e.isUnmounted === !0 || e.isDeactivated === !0
}

const My = ["", !0];
var Ey = ve({
    name: "QBreadcrumbs",
    props: {
        ...Xs,
        separator: {type: String, default: "/"},
        separatorColor: String,
        activeColor: {type: String, default: "primary"},
        gutter: {type: String, validator: e => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm"}
    },
    setup(e, {slots: t}) {
        const n = Zs(e),
            o = f(() => `flex items-center ${n.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`),
            l = f(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), a = f(() => ` text-${e.activeColor}`);
        return () => {
            const i = Gs(Ae(t.default));
            if (i.length === 0) return;
            let r = 1;
            const s = [], d = i.filter(p => p.type !== void 0 && p.type.name === "QBreadcrumbsEl").length,
                c = t.separator !== void 0 ? t.separator : () => e.separator;
            return i.forEach(p => {
                if (p.type !== void 0 && p.type.name === "QBreadcrumbsEl") {
                    const v = r < d, m = p.props !== null && My.includes(p.props.disable),
                        g = (v === !0 ? "" : " q-breadcrumbs--last") + (m !== !0 && v === !0 ? a.value : "");
                    r++, s.push(u("div", {class: `flex items-center${g}`}, [p])), v === !0 && s.push(u("div", {class: "q-breadcrumbs__separator" + l.value}, c()))
                } else s.push(p)
            }), u("div", {class: "q-breadcrumbs"}, [u("div", {class: o.value}, s)])
        }
    }
});

function Kc(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}

function Uc(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Py(e, t) {
    for (const n in t) {
        const o = t[n], l = e[n];
        if (typeof o == "string") {
            if (o !== l) return !1
        } else if (Array.isArray(l) === !1 || l.length !== o.length || o.some((a, i) => a !== l[i])) return !1
    }
    return !0
}

function Wc(e, t) {
    return Array.isArray(t) === !0 ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t
}

function Ay(e, t) {
    return Array.isArray(e) === !0 ? Wc(e, t) : Array.isArray(t) === !0 ? Wc(t, e) : e === t
}

function By(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (Ay(e[n], t[n]) === !1) return !1;
    return !0
}

const $l = {
    to: [String, Object],
    replace: Boolean,
    exact: Boolean,
    activeClass: {type: String, default: "q-router-link--active"},
    exactActiveClass: {type: String, default: "q-router-link--exact-active"},
    href: String,
    target: String,
    disable: Boolean
};

function or({fallbackTag: e, useDisableForRouterLinkProps: t = !0} = {}) {
    const n = Se(), {props: o, proxy: l, emit: a} = n, i = Js(n), r = f(() => o.disable !== !0 && o.href !== void 0),
        s = f(t === !0 ? () => i === !0 && o.disable !== !0 && r.value !== !0 && o.to !== void 0 && o.to !== null && o.to !== "" : () => i === !0 && r.value !== !0 && o.to !== void 0 && o.to !== null && o.to !== ""),
        d = f(() => s.value === !0 ? y(o.to) : null), c = f(() => d.value !== null),
        p = f(() => r.value === !0 || c.value === !0),
        v = f(() => o.type === "a" || p.value === !0 ? "a" : o.tag || e || "div"),
        m = f(() => r.value === !0 ? {href: o.href, target: o.target} : c.value === !0 ? {
            href: d.value.href,
            target: o.target
        } : {}), g = f(() => {
            if (c.value === !1) return -1;
            const {matched: C} = d.value, {length: A} = C, L = C[A - 1];
            if (L === void 0) return -1;
            const E = l.$route.matched;
            if (E.length === 0) return -1;
            const V = E.findIndex(Uc.bind(null, L));
            if (V > -1) return V;
            const O = Kc(C[A - 2]);
            return A > 1 && Kc(L) === O && E[E.length - 1].path !== O ? E.findIndex(Uc.bind(null, C[A - 2])) : V
        }), x = f(() => c.value === !0 && g.value !== -1 && Py(l.$route.params, d.value.params)),
        w = f(() => x.value === !0 && g.value === l.$route.matched.length - 1 && By(l.$route.params, d.value.params)),
        S = f(() => c.value === !0 ? w.value === !0 ? ` ${o.exactActiveClass} ${o.activeClass}` : o.exact === !0 ? "" : x.value === !0 ? ` ${o.activeClass}` : "" : "");

    function y(C) {
        try {
            return l.$router.resolve(C)
        } catch {
        }
        return null
    }

    function b(C, {returnRouterError: A, to: L = o.to, replace: E = o.replace} = {}) {
        if (o.disable === !0) return C.preventDefault(), Promise.resolve(!1);
        if (C.metaKey || C.altKey || C.ctrlKey || C.shiftKey || C.button !== void 0 && C.button !== 0 || o.target === "_blank") return Promise.resolve(!1);
        C.preventDefault();
        const V = l.$router[E === !0 ? "replace" : "push"](L);
        return A === !0 ? V : V.then(() => {
        }).catch(() => {
        })
    }

    function h(C) {
        if (c.value === !0) {
            const A = L => b(C, L);
            a("click", C, A), C.defaultPrevented !== !0 && A()
        } else a("click", C)
    }

    return {
        hasRouterLink: c,
        hasHrefLink: r,
        hasLink: p,
        linkTag: v,
        resolvedLink: d,
        linkIsActive: x,
        linkIsExactActive: w,
        linkClass: S,
        linkAttrs: m,
        getLink: y,
        navigateToRouterLink: b,
        navigateOnClick: h
    }
}

var Oy = ve({
    name: "QBreadcrumbsEl",
    props: {...$l, label: String, icon: String, tag: {type: String, default: "span"}},
    emits: ["click"],
    setup(e, {slots: t}) {
        const {linkTag: n, linkAttrs: o, linkClass: l, navigateOnClick: a} = or(), i = f(() => ({
            class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== !0 ? "q-link--focusable" + l.value : "q-breadcrumbs__el--disable"), ...o.value,
            onClick: a
        })), r = f(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
        return () => {
            const s = [];
            return e.icon !== void 0 && s.push(u(Ze, {
                class: r.value,
                name: e.icon
            })), e.label !== void 0 && s.push(e.label), u(n.value, {...i.value}, St(t.default, s))
        }
    }
});
const kt = {size: {type: [Number, String], default: "1em"}, color: String};

function qt(e) {
    return {
        cSize: f(() => e.size in ds ? `${ds[e.size]}px` : e.size),
        classes: f(() => "q-spinner" + (e.color ? ` text-${e.color}` : ""))
    }
}

var tn = ve({
    name: "QSpinner", props: {...kt, thickness: {type: Number, default: 5}}, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value + " q-spinner-mat",
            width: t.value,
            height: t.value,
            viewBox: "25 25 50 50"
        }, [u("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": e.thickness,
            "stroke-miterlimit": "10"
        })])
    }
});

function yi(e) {
    if (e === window) return {top: 0, left: 0};
    const {top: t, left: n} = e.getBoundingClientRect();
    return {top: t, left: n}
}

function yl(e) {
    return e === window ? window.innerHeight : e.getBoundingClientRect().height
}

function fs(e, t) {
    const n = e.style;
    for (const o in t) n[o] = t[o]
}

function Ly(e) {
    if (e == null) return;
    if (typeof e == "string") try {
        return document.querySelector(e) || void 0
    } catch {
        return
    }
    const t = Po(e);
    return t ? t.$el || t : void 0
}

function Kv(e, t) {
    if (e == null || e.contains(t) === !0) return !0;
    for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling) if (n.contains(t)) return !0;
    return !1
}

function Uv(e, t = 250) {
    let n, o = !1;
    return function () {
        return o === !1 && (o = !0, setTimeout(() => {
            o = !1
        }, t), n = e.apply(this, arguments)), n
    }
}

function Yc(e, t, n, o) {
    n.modifiers.stop === !0 && _t(e);
    const l = n.modifiers.color;
    let a = n.modifiers.center;
    a = a === !0 || o === !0;
    const i = document.createElement("span"), r = document.createElement("span"), s = Wt(e), {
            left: d,
            top: c,
            width: p,
            height: v
        } = t.getBoundingClientRect(), m = Math.sqrt(p * p + v * v), g = m / 2, x = `${(p - m) / 2}px`,
        w = a ? x : `${s.left - d - g}px`, S = `${(v - m) / 2}px`, y = a ? S : `${s.top - c - g}px`;
    r.className = "q-ripple__inner", fs(r, {
        height: `${m}px`,
        width: `${m}px`,
        transform: `translate3d(${w},${y},0) scale3d(.2,.2,1)`,
        opacity: 0
    }), i.className = `q-ripple${l ? " text-" + l : ""}`, i.setAttribute("dir", "ltr"), i.appendChild(r), t.appendChild(i);
    const b = () => {
        i.remove(), clearTimeout(h)
    };
    n.abort.push(b);
    let h = setTimeout(() => {
        r.classList.add("q-ripple__inner--enter"), r.style.transform = `translate3d(${x},${S},0) scale3d(1,1,1)`, r.style.opacity = .2, h = setTimeout(() => {
            r.classList.remove("q-ripple__inner--enter"), r.classList.add("q-ripple__inner--leave"), r.style.opacity = 0, h = setTimeout(() => {
                i.remove(), n.abort.splice(n.abort.indexOf(b), 1)
            }, 275)
        }, 250)
    }, 50)
}

function Xc(e, {modifiers: t, value: n, arg: o}) {
    const l = Object.assign({}, e.cfg.ripple, t, n);
    e.modifiers = {
        early: l.early === !0,
        stop: l.stop === !0,
        center: l.center === !0,
        color: l.color || o,
        keyCodes: [].concat(l.keyCodes || 13)
    }
}

var ba = qn({
    name: "ripple", beforeMount(e, t) {
        const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
        if (n.ripple === !1) return;
        const o = {
            cfg: n, enabled: t.value !== !1, modifiers: {}, abort: [], start(l) {
                o.enabled === !0 && l.qSkipRipple !== !0 && l.type === (o.modifiers.early === !0 ? "pointerdown" : "click") && Yc(l, e, o, l.qKeyEvent === !0)
            }, keystart: Uv(l => {
                o.enabled === !0 && l.qSkipRipple !== !0 && dn(l, o.modifiers.keyCodes) === !0 && l.type === `key${o.modifiers.early === !0 ? "down" : "up"}` && Yc(l, e, o, !0)
            }, 300)
        };
        Xc(o, t), e.__qripple = o, wt(o, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]])
    }, updated(e, t) {
        if (t.oldValue !== t.value) {
            const n = e.__qripple;
            n !== void 0 && (n.enabled = t.value !== !1, n.enabled === !0 && Object(t.value) === t.value && Xc(n, t))
        }
    }, beforeUnmount(e) {
        const t = e.__qripple;
        t !== void 0 && (t.abort.forEach(n => {
            n()
        }), Ht(t, "main"), delete e._qripple)
    }
});
const _i = {none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32}, Ry = {xs: 8, sm: 10, md: 14, lg: 20, xl: 24},
    Vy = ["button", "submit", "reset"], Fy = /[^\s]\/[^\s]/, Wv = ["flat", "outline", "push", "unelevated"],
    eu = (e, t) => e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t,
    Yv = e => {
        const t = eu(e);
        return t !== void 0 ? {[t]: !0} : {}
    }, tu = {
        ...Qn, ...$l,
        type: {type: String, default: "button"},
        label: [Number, String],
        icon: String,
        iconRight: String, ...Wv.reduce((e, t) => (e[t] = Boolean) && e, {}),
        square: Boolean,
        round: Boolean,
        rounded: Boolean,
        glossy: Boolean,
        size: String,
        fab: Boolean,
        fabMini: Boolean,
        padding: String,
        color: String,
        textColor: String,
        noCaps: Boolean,
        noWrap: Boolean,
        dense: Boolean,
        tabindex: [Number, String],
        ripple: {type: [Boolean, Object], default: !0},
        align: {...Xs.align, default: "center"},
        stack: Boolean,
        stretch: Boolean,
        loading: {type: Boolean, default: null},
        disable: Boolean
    };

function zy(e) {
    const t = Kn(e, Ry), n = Zs(e), {
            hasRouterLink: o,
            hasLink: l,
            linkTag: a,
            linkAttrs: i,
            navigateOnClick: r
        } = or({fallbackTag: "button"}), s = f(() => {
            const w = e.fab === !1 && e.fabMini === !1 ? t.value : {};
            return e.padding !== void 0 ? Object.assign({}, w, {
                padding: e.padding.split(/\s+/).map(S => S in _i ? _i[S] + "px" : S).join(" "),
                minWidth: "0",
                minHeight: "0"
            }) : w
        }), d = f(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
        c = f(() => e.disable !== !0 && e.loading !== !0), p = f(() => c.value === !0 ? e.tabindex || 0 : -1),
        v = f(() => eu(e, "standard")), m = f(() => {
            const w = {tabindex: p.value};
            return l.value === !0 ? Object.assign(w, i.value) : Vy.includes(e.type) === !0 && (w.type = e.type), a.value === "a" ? (e.disable === !0 ? w["aria-disabled"] = "true" : w.href === void 0 && (w.role = "button"), o.value !== !0 && Fy.test(e.type) === !0 && (w.type = e.type)) : e.disable === !0 && (w.disabled = "", w["aria-disabled"] = "true"), e.loading === !0 && e.percentage !== void 0 && Object.assign(w, {
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": e.percentage
            }), w
        }), g = f(() => {
            let w;
            e.color !== void 0 ? w = e.flat === !0 || e.outline === !0 ? `text-${e.textColor || e.color}` : `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (w = `text-${e.textColor}`);
            const S = e.round === !0 ? "round" : `rectangle${d.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
            return `q-btn--${v.value} q-btn--${S}` + (w !== void 0 ? " " + w : "") + (c.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "")
        }),
        x = f(() => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : ""));
    return {
        classes: g,
        style: s,
        innerClasses: x,
        attributes: m,
        hasLink: l,
        linkTag: a,
        navigateOnClick: r,
        isActionable: c
    }
}

const {passiveCapture: an} = ut;
let Ho = null, jo = null, Qo = null;
var tt = ve({
    name: "QBtn",
    props: {...tu, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array]},
    emits: ["click", "keydown", "mousedown", "keyup"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: o} = Se(), {
            classes: l,
            style: a,
            innerClasses: i,
            attributes: r,
            hasLink: s,
            linkTag: d,
            navigateOnClick: c,
            isActionable: p
        } = zy(e), v = D(null), m = D(null);
        let g, x = null, w = null;
        const S = f(() => e.label !== void 0 && e.label !== null && e.label !== ""),
            y = f(() => e.disable !== !0 && e.ripple !== !1 && {keyCodes: s.value === !0 ? [13, 32] : [13], ...e.ripple === !0 ? {} : e.ripple}),
            b = f(() => ({center: e.round})), h = f(() => {
                const B = Math.max(0, Math.min(100, e.percentage));
                return B > 0 ? {transition: "transform 0.6s", transform: `translateX(${B - 100}%)`} : {}
            }), C = f(() => {
                if (e.loading === !0) return {onMousedown: k, onTouchstart: k, onClick: k, onKeydown: k, onKeyup: k};
                if (p.value === !0) {
                    const B = {onClick: L, onKeydown: E, onMousedown: O};
                    if (o.$q.platform.has.touch === !0) {
                        const Y = e.onTouchstart !== void 0 ? "" : "Passive";
                        B[`onTouchstart${Y}`] = V
                    }
                    return B
                }
                return {onClick: Ie}
            }), A = f(() => ({
                ref: v,
                class: "q-btn q-btn-item non-selectable no-outline " + l.value,
                style: a.value, ...r.value, ...C.value
            }));

        function L(B) {
            if (v.value !== null) {
                if (B !== void 0) {
                    if (B.defaultPrevented === !0) return;
                    const Y = document.activeElement;
                    if (e.type === "submit" && Y !== document.body && v.value.contains(Y) === !1 && Y.contains(v.value) === !1) {
                        v.value.focus();
                        const J = () => {
                            document.removeEventListener("keydown", Ie, !0), document.removeEventListener("keyup", J, an), v.value !== null && v.value.removeEventListener("blur", J, an)
                        };
                        document.addEventListener("keydown", Ie, !0), document.addEventListener("keyup", J, an), v.value.addEventListener("blur", J, an)
                    }
                }
                c(B)
            }
        }

        function E(B) {
            v.value !== null && (n("keydown", B), dn(B, [13, 32]) === !0 && jo !== v.value && (jo !== null && M(), B.defaultPrevented !== !0 && (v.value.focus(), jo = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("keyup", z, !0), v.value.addEventListener("blur", z, an)), Ie(B)))
        }

        function V(B) {
            v.value !== null && (n("touchstart", B), B.defaultPrevented !== !0 && (Ho !== v.value && (Ho !== null && M(), Ho = v.value, x = B.target, x.addEventListener("touchcancel", z, an), x.addEventListener("touchend", z, an)), g = !0, w !== null && clearTimeout(w), w = setTimeout(() => {
                w = null, g = !1
            }, 200)))
        }

        function O(B) {
            v.value !== null && (B.qSkipRipple = g === !0, n("mousedown", B), B.defaultPrevented !== !0 && Qo !== v.value && (Qo !== null && M(), Qo = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("mouseup", z, an)))
        }

        function z(B) {
            if (v.value !== null && (B === void 0 || B.type !== "blur" || document.activeElement !== v.value)) {
                if (B !== void 0 && B.type === "keyup") {
                    if (jo === v.value && dn(B, [13, 32]) === !0) {
                        const Y = new MouseEvent("click", B);
                        Y.qKeyEvent = !0, B.defaultPrevented === !0 && Bt(Y), B.cancelBubble === !0 && _t(Y), v.value.dispatchEvent(Y), Ie(B), B.qKeyEvent = !0
                    }
                    n("keyup", B)
                }
                M()
            }
        }

        function M(B) {
            const Y = m.value;
            B === !0 || Ho !== v.value && Qo !== v.value || Y === null || Y === document.activeElement || (Y.setAttribute("tabindex", -1), Y.focus()), Ho === v.value && (x !== null && (x.removeEventListener("touchcancel", z, an), x.removeEventListener("touchend", z, an)), Ho = x = null), Qo === v.value && (document.removeEventListener("mouseup", z, an), Qo = null), jo === v.value && (document.removeEventListener("keyup", z, !0), v.value !== null && v.value.removeEventListener("blur", z, an), jo = null), v.value !== null && v.value.classList.remove("q-btn--active")
        }

        function k(B) {
            Ie(B), B.qSkipRipple = !0
        }

        return Ke(() => {
            M(!0)
        }), Object.assign(o, {click: L}), () => {
            let B = [];
            e.icon !== void 0 && B.push(u(Ze, {
                name: e.icon,
                left: e.stack === !1 && S.value === !0,
                role: "img",
                "aria-hidden": "true"
            })), S.value === !0 && B.push(u("span", {class: "block"}, [e.label])), B = St(t.default, B), e.iconRight !== void 0 && e.round === !1 && B.push(u(Ze, {
                name: e.iconRight,
                right: e.stack === !1 && S.value === !0,
                role: "img",
                "aria-hidden": "true"
            }));
            const Y = [u("span", {class: "q-focus-helper", ref: m})];
            return e.loading === !0 && e.percentage !== void 0 && Y.push(u("span", {class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")}, [u("span", {
                class: "q-btn__progress-indicator fit block",
                style: h.value
            })])), Y.push(u("span", {class: "q-btn__content text-center col items-center q-anchor--skip " + i.value}, B)), e.loading !== null && Y.push(u($t, {name: "q-transition--fade"}, () => e.loading === !0 ? [u("span", {
                key: "loading",
                class: "absolute-full flex flex-center"
            }, t.loading !== void 0 ? t.loading() : [u(tn)])] : null)), Sn(u(d.value, A.value, Y), [[ba, y.value, void 0, b.value]])
        }
    }
}), nu = ve({
    name: "QBtnGroup",
    props: {
        unelevated: Boolean,
        outline: Boolean,
        flat: Boolean,
        rounded: Boolean,
        square: Boolean,
        push: Boolean,
        stretch: Boolean,
        glossy: Boolean,
        spread: Boolean
    },
    setup(e, {slots: t}) {
        const n = f(() => {
            const o = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter(l => e[l] === !0).map(l => `q-btn-group--${l}`).join(" ");
            return `q-btn-group row no-wrap${o.length !== 0 ? " " + o : ""}` + (e.spread === !0 ? " q-btn-group--spread" : " inline")
        });
        return () => u("div", {class: n.value}, Ae(t.default))
    }
});

function xn() {
    if (window.getSelection !== void 0) {
        const e = window.getSelection();
        e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), pi.is.mobile !== !0 && e.addRange(document.createRange()))
    } else document.selection !== void 0 && document.selection.empty()
}

const ou = {target: {default: !0}, noParentEvent: Boolean, contextMenu: Boolean};

function lu({showing: e, avoidEmit: t, configureAnchorEl: n}) {
    const {props: o, proxy: l, emit: a} = Se(), i = D(null);
    let r = null;

    function s(m) {
        return i.value !== null && (m === void 0 || m.touches === void 0 || m.touches.length <= 1)
    }

    const d = {};

    function c() {
        Ht(d, "anchor")
    }

    function p(m) {
        for (i.value = m; i.value.classList.contains("q-anchor--skip");) i.value = i.value.parentNode;
        n()
    }

    function v() {
        if (o.target === !1 || o.target === "" || l.$el.parentNode === null) i.value = null; else if (o.target === !0) p(l.$el.parentNode); else {
            let m = o.target;
            if (typeof o.target == "string") try {
                m = document.querySelector(o.target)
            } catch {
                m = void 0
            }
            m != null ? (i.value = m.$el || m, n()) : (i.value = null, console.error(`Anchor: target "${o.target}" not found`))
        }
    }

    return n === void 0 && (Object.assign(d, {
        hide(m) {
            l.hide(m)
        }, toggle(m) {
            l.toggle(m), m.qAnchorHandled = !0
        }, toggleKey(m) {
            dn(m, 13) === !0 && d.toggle(m)
        }, contextClick(m) {
            l.hide(m), Bt(m), We(() => {
                l.show(m), m.qAnchorHandled = !0
            })
        }, prevent: Bt, mobileTouch(m) {
            if (d.mobileCleanup(m), s(m) !== !0) return;
            l.hide(m), i.value.classList.add("non-selectable");
            const g = m.target;
            wt(d, "anchor", [[g, "touchmove", "mobileCleanup", "passive"], [g, "touchend", "mobileCleanup", "passive"], [g, "touchcancel", "mobileCleanup", "passive"], [i.value, "contextmenu", "prevent", "notPassive"]]), r = setTimeout(() => {
                r = null, l.show(m), m.qAnchorHandled = !0
            }, 300)
        }, mobileCleanup(m) {
            i.value.classList.remove("non-selectable"), r !== null && (clearTimeout(r), r = null), e.value === !0 && m !== void 0 && xn()
        }
    }), n = function (m = o.contextMenu) {
        if (o.noParentEvent === !0 || i.value === null) return;
        let g;
        g = m === !0 ? l.$q.platform.is.mobile === !0 ? [[i.value, "touchstart", "mobileTouch", "passive"]] : [[i.value, "mousedown", "hide", "passive"], [i.value, "contextmenu", "contextClick", "notPassive"]] : [[i.value, "click", "toggle", "passive"], [i.value, "keyup", "toggleKey", "passive"]], wt(d, "anchor", g)
    }), pe(() => o.contextMenu, m => {
        i.value !== null && (c(), n(m))
    }), pe(() => o.target, () => {
        i.value !== null && c(), v()
    }), pe(() => o.noParentEvent, m => {
        i.value !== null && (m === !0 ? c() : n())
    }), mt(() => {
        v(), t !== !0 && o.modelValue === !0 && i.value === null && a("update:modelValue", !1)
    }), Ke(() => {
        r !== null && clearTimeout(r), c()
    }), {anchorEl: i, canShow: s, anchorEvents: d}
}

function Xv(e, t) {
    const n = D(null);
    let o;

    function l(r, s) {
        const d = `${s !== void 0 ? "add" : "remove"}EventListener`, c = s !== void 0 ? s : o;
        r !== window && r[d]("scroll", c, ut.passive), window[d]("scroll", c, ut.passive), o = s
    }

    function a() {
        n.value !== null && (l(n.value), n.value = null)
    }

    const i = pe(() => e.noParentEvent, () => {
        n.value !== null && (a(), t())
    });
    return Ke(i), {localScrollTarget: n, unconfigureScrollTarget: a, changeScrollEvent: l}
}

const Ml = {modelValue: {type: Boolean, default: null}, "onUpdate:modelValue": [Function, Array]},
    El = ["beforeShow", "show", "beforeHide", "hide"];

function Pl({showing: e, canShow: t, hideOnRouteChange: n, handleShow: o, handleHide: l, processOnMount: a}) {
    const i = Se(), {props: r, emit: s, proxy: d} = i;
    let c;

    function p(y) {
        e.value === !0 ? g(y) : v(y)
    }

    function v(y) {
        if (r.disable === !0 || y !== void 0 && y.qAnchorHandled === !0 || t !== void 0 && t(y) !== !0) return;
        const b = r["onUpdate:modelValue"] !== void 0;
        b === !0 && (s("update:modelValue", !0), c = y, We(() => {
            c === y && (c = void 0)
        })), r.modelValue !== null && b !== !1 || m(y)
    }

    function m(y) {
        e.value !== !0 && (e.value = !0, s("beforeShow", y), o !== void 0 ? o(y) : s("show", y))
    }

    function g(y) {
        if (r.disable === !0) return;
        const b = r["onUpdate:modelValue"] !== void 0;
        b === !0 && (s("update:modelValue", !1), c = y, We(() => {
            c === y && (c = void 0)
        })), r.modelValue !== null && b !== !1 || x(y)
    }

    function x(y) {
        e.value !== !1 && (e.value = !1, s("beforeHide", y), l !== void 0 ? l(y) : s("hide", y))
    }

    function w(y) {
        r.disable === !0 && y === !0 ? r["onUpdate:modelValue"] !== void 0 && s("update:modelValue", !1) : y === !0 !== e.value && (y === !0 ? m : x)(c)
    }

    pe(() => r.modelValue, w), n !== void 0 && Js(i) === !0 && pe(() => d.$route.fullPath, () => {
        n.value === !0 && e.value === !0 && g()
    }), a === !0 && mt(() => {
        w(r.modelValue)
    });
    const S = {show: v, hide: g, toggle: p};
    return Object.assign(d, S), S
}

let $o = [], fa = [];

function Zv(e) {
    fa = fa.filter(t => t !== e)
}

function Ny(e) {
    Zv(e), fa.push(e)
}

function Zc(e) {
    Zv(e), fa.length === 0 && $o.length !== 0 && ($o[$o.length - 1](), $o = [])
}

function Al(e) {
    fa.length === 0 ? e() : $o.push(e)
}

function Iy(e) {
    $o = $o.filter(t => t !== e)
}

const rl = [], ea = [];
let Dy = 1, Jn = document.body;

function ya(e, t) {
    const n = document.createElement("div");
    if (n.id = t !== void 0 ? `q-portal--${t}--${Dy++}` : e, hi.globalNodes !== void 0) {
        const o = hi.globalNodes.class;
        o !== void 0 && (n.className = o)
    }
    return Jn.appendChild(n), rl.push(n), ea.push(t), n
}

function au(e) {
    const t = rl.indexOf(e);
    rl.splice(t, 1), ea.splice(t, 1), e.remove()
}

function Hy(e) {
    if (e === Jn) return;
    if (Jn = e, Jn === document.body || ea.reduce((n, o) => o === "dialog" ? n + 1 : n, 0) < 2) return void rl.forEach(n => {
        n.contains(Jn) === !1 && Jn.appendChild(n)
    });
    const t = ea.lastIndexOf("dialog");
    for (let n = 0; n < rl.length; n++) {
        const o = rl[n];
        n !== t && ea[n] === "dialog" || o.contains(Jn) !== !1 || Jn.appendChild(o)
    }
}

const sl = [];

function jy(e) {
    return sl.find(t => t.contentEl !== null && t.contentEl.contains(e))
}

function Gv(e, t) {
    do {
        if (e.$options.name === "QMenu") {
            if (e.hide(t), e.$props.separateClosePopup === !0) return Ja(e)
        } else if (e.__qPortal === !0) {
            const n = Ja(e);
            return n !== void 0 && n.$options.name === "QPopupProxy" ? (e.hide(t), n) : e
        }
        e = Ja(e)
    } while (e != null)
}

function Qy(e, t, n) {
    for (; n !== 0 && e !== void 0 && e !== null;) {
        if (e.__qPortal === !0) {
            if (n--, e.$options.name === "QMenu") {
                e = Gv(e, t);
                continue
            }
            e.hide(t)
        }
        e = Ja(e)
    }
}

function Ky(e) {
    for (e = e.parent; e != null;) {
        if (e.type.name === "QGlobalDialog") return !0;
        if (e.type.name === "QDialog" || e.type.name === "QMenu") return !1;
        e = e.parent
    }
    return !1
}

function iu(e, t, n, o) {
    const l = D(!1), a = D(!1);
    let i = null;
    const r = {}, s = o === "dialog" && Ky(e);

    function d(p) {
        if (p === !0) return Zc(r), void (a.value = !0);
        a.value = !1, l.value === !1 && (s === !1 && i === null && (i = ya(!1, o)), l.value = !0, sl.push(e.proxy), Ny(r))
    }

    function c(p) {
        if (a.value = !1, p !== !0) return;
        Zc(r), l.value = !1;
        const v = sl.indexOf(e.proxy);
        v !== -1 && sl.splice(v, 1), i !== null && (au(i), i = null)
    }

    return ql(() => {
        c(!0)
    }), e.proxy.__qPortal = !0, At(e.proxy, "contentEl", () => t.value), {
        showPortal: d,
        hidePortal: c,
        portalIsActive: l,
        portalIsAccessible: a,
        renderPortal: () => s === !0 ? n() : l.value === !0 ? [u(Lh, {to: i}, n())] : void 0
    }
}

const _a = {
    transitionShow: {type: String, default: "fade"},
    transitionHide: {type: String, default: "fade"},
    transitionDuration: {type: [String, Number], default: 300}
};

function lr(e, t = () => {
}, n = () => {
}) {
    return {
        transitionProps: f(() => {
            const o = `q-transition--${e.transitionShow || t()}`, l = `q-transition--${e.transitionHide || n()}`;
            return {
                appear: !0,
                enterFromClass: `${o}-enter-from`,
                enterActiveClass: `${o}-enter-active`,
                enterToClass: `${o}-enter-to`,
                leaveFromClass: `${l}-leave-from`,
                leaveActiveClass: `${l}-leave-active`,
                leaveToClass: `${l}-leave-to`
            }
        }), transitionStyle: f(() => `--q-transition-duration: ${e.transitionDuration}ms`)
    }
}

function ul() {
    let e;
    const t = Se();

    function n() {
        e = void 0
    }

    return kn(n), Ke(n), {
        removeTick: n, registerTick(o) {
            e = o, We(() => {
                e === o && (ga(t) === !1 && e(), e = void 0)
            })
        }
    }
}

function _l() {
    let e = null;
    const t = Se();

    function n() {
        e !== null && (clearTimeout(e), e = null)
    }

    return kn(n), Ke(n), {
        removeTimeout: n, registerTimeout(o, l) {
            n(), ga(t) === !1 && (e = setTimeout(o, l))
        }
    }
}

const Uy = [null, document, document.body, document.scrollingElement, document.documentElement];

function An(e, t) {
    let n = Ly(t);
    if (n === void 0) {
        if (e == null) return window;
        n = e.closest(".scroll,.scroll-y,.overflow-auto")
    }
    return Uy.includes(n) ? window : n
}

function La(e) {
    return (e === window ? document.body : e).scrollHeight
}

function so(e) {
    return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop
}

function ar(e) {
    return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft
}

function Jv(e, t, n = 0) {
    const o = arguments[3] === void 0 ? performance.now() : arguments[3], l = so(e);
    n <= 0 ? l !== t && vs(e, t) : requestAnimationFrame(a => {
        const i = a - o, r = l + (t - l) / Math.max(i, n) * i;
        vs(e, r), r !== t && Jv(e, t, n - i, a)
    })
}

function ep(e, t, n = 0) {
    const o = arguments[3] === void 0 ? performance.now() : arguments[3], l = ar(e);
    n <= 0 ? l !== t && ps(e, t) : requestAnimationFrame(a => {
        const i = a - o, r = l + (t - l) / Math.max(i, n) * i;
        ps(e, r), r !== t && ep(e, t, n - i, a)
    })
}

function vs(e, t) {
    e !== window ? e.scrollTop = t : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t)
}

function ps(e, t) {
    e !== window ? e.scrollLeft = t : window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)
}

function cl(e, t, n) {
    n ? Jv(e, t, n) : vs(e, t)
}

function qr(e, t, n) {
    n ? ep(e, t, n) : ps(e, t)
}

let Ra;

function ei() {
    if (Ra !== void 0) return Ra;
    const e = document.createElement("p"), t = document.createElement("div");
    fs(e, {width: "100%", height: "200px"}), fs(t, {
        position: "absolute",
        top: "0px",
        left: "0px",
        visibility: "hidden",
        width: "200px",
        height: "150px",
        overflow: "hidden"
    }), t.appendChild(e), document.body.appendChild(t);
    const n = e.offsetWidth;
    t.style.overflow = "scroll";
    let o = e.offsetWidth;
    return n === o && (o = t.clientWidth), t.remove(), Ra = n - o, Ra
}

function Wy(e, t = !0) {
    return !(!e || e.nodeType !== Node.ELEMENT_NODE) && (t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"])))
}

const Bo = [];
let wl;

function Yy(e) {
    wl = e.keyCode === 27
}

function Xy() {
    wl === !0 && (wl = !1)
}

function Zy(e) {
    wl === !0 && (wl = !1, dn(e, 27) === !0 && Bo[Bo.length - 1](e))
}

function tp(e) {
    window[e]("keydown", Yy), window[e]("blur", Xy), window[e]("keyup", Zy), wl = !1
}

function np(e) {
    Fe.is.desktop === !0 && (Bo.push(e), Bo.length === 1 && tp("addEventListener"))
}

function wi(e) {
    const t = Bo.indexOf(e);
    t > -1 && (Bo.splice(t, 1), Bo.length === 0 && tp("removeEventListener"))
}

const Oo = [];

function op(e) {
    Oo[Oo.length - 1](e)
}

function lp(e) {
    Fe.is.desktop === !0 && (Oo.push(e), Oo.length === 1 && document.body.addEventListener("focusin", op))
}

function ms(e) {
    const t = Oo.indexOf(e);
    t > -1 && (Oo.splice(t, 1), Oo.length === 0 && document.body.removeEventListener("focusin", op))
}

const {notPassiveCapture: xi} = ut, Lo = [];

function Si(e) {
    const t = e.target;
    if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === !0) return;
    let n = sl.length - 1;
    for (; n >= 0;) {
        const o = sl[n].$;
        if (o.type.name !== "QTooltip") {
            if (o.type.name !== "QDialog") break;
            if (o.props.seamless !== !0) return;
            n--
        } else n--
    }
    for (let o = Lo.length - 1; o >= 0; o--) {
        const l = Lo[o];
        if (l.anchorEl.value !== null && l.anchorEl.value.contains(t) !== !1 || t !== document.body && (l.innerRef.value === null || l.innerRef.value.contains(t) !== !1)) return;
        e.qClickOutside = !0, l.onClickOutside(e)
    }
}

function ap(e) {
    Lo.push(e), Lo.length === 1 && (document.addEventListener("mousedown", Si, xi), document.addEventListener("touchstart", Si, xi))
}

function Ci(e) {
    const t = Lo.findIndex(n => n === e);
    t > -1 && (Lo.splice(t, 1), Lo.length === 0 && (document.removeEventListener("mousedown", Si, xi), document.removeEventListener("touchstart", Si, xi)))
}

let Gc, Jc;

function ki(e) {
    const t = e.split(" ");
    return t.length === 2 && (["top", "center", "bottom"].includes(t[0]) !== !0 ? (console.error("Anchor/Self position must start with one of top/center/bottom"), !1) : ["left", "middle", "right", "start", "end"].includes(t[1]) === !0 || (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1))
}

function ip(e) {
    return !e || e.length === 2 && typeof e[0] == "number" && typeof e[1] == "number"
}

const hs = {"start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left"};

function qi(e, t) {
    const n = e.split(" ");
    return {vertical: n[0], horizontal: hs[`${n[1]}#${t === !0 ? "rtl" : "ltr"}`]}
}

function Gy(e, t) {
    let {top: n, left: o, right: l, bottom: a, width: i, height: r} = e.getBoundingClientRect();
    return t !== void 0 && (n -= t[1], o -= t[0], a += t[1], l += t[0], i += t[0], r += t[1]), {
        top: n,
        bottom: a,
        height: r,
        left: o,
        right: l,
        width: i,
        middle: o + (l - o) / 2,
        center: n + (a - n) / 2
    }
}

function Jy(e, t, n) {
    let {top: o, left: l} = e.getBoundingClientRect();
    return o += t.top, l += t.left, n !== void 0 && (o += n[1], l += n[0]), {
        top: o,
        bottom: o + 1,
        height: 1,
        left: l,
        right: l + 1,
        width: 1,
        middle: l,
        center: o
    }
}

function e1(e, t) {
    return {top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e}
}

function ed(e, t, n, o) {
    return {top: e[n.vertical] - t[o.vertical], left: e[n.horizontal] - t[o.horizontal]}
}

function ru(e, t = 0) {
    if (e.targetEl === null || e.anchorEl === null || t > 5) return;
    if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) return void setTimeout(() => {
        ru(e, t + 1)
    }, 10);
    const {
        targetEl: n,
        offset: o,
        anchorEl: l,
        anchorOrigin: a,
        selfOrigin: i,
        absoluteOffset: r,
        fit: s,
        cover: d,
        maxHeight: c,
        maxWidth: p
    } = e;
    if (Fe.is.ios === !0 && window.visualViewport !== void 0) {
        const A = document.body.style, {offsetLeft: L, offsetTop: E} = window.visualViewport;
        L !== Gc && (A.setProperty("--q-pe-left", L + "px"), Gc = L), E !== Jc && (A.setProperty("--q-pe-top", E + "px"), Jc = E)
    }
    const {scrollLeft: v, scrollTop: m} = n, g = r === void 0 ? Gy(l, d === !0 ? [0, 0] : o) : Jy(l, r, o);
    Object.assign(n.style, {
        top: 0,
        left: 0,
        minWidth: null,
        minHeight: null,
        maxWidth: p || "100vw",
        maxHeight: c || "100vh",
        visibility: "visible"
    });
    const {offsetWidth: x, offsetHeight: w} = n, {
        elWidth: S,
        elHeight: y
    } = s === !0 || d === !0 ? {
        elWidth: Math.max(g.width, x),
        elHeight: d === !0 ? Math.max(g.height, w) : w
    } : {elWidth: x, elHeight: w};
    let b = {maxWidth: p, maxHeight: c};
    s !== !0 && d !== !0 || (b.minWidth = g.width + "px", d === !0 && (b.minHeight = g.height + "px")), Object.assign(n.style, b);
    const h = e1(S, y);
    let C = ed(g, h, a, i);
    if (r === void 0 || o === void 0) Tr(C, g, h, a, i); else {
        const {top: A, left: L} = C;
        Tr(C, g, h, a, i);
        let E = !1;
        if (C.top !== A) {
            E = !0;
            const V = 2 * o[1];
            g.center = g.top -= V, g.bottom -= V + 2
        }
        if (C.left !== L) {
            E = !0;
            const V = 2 * o[0];
            g.middle = g.left -= V, g.right -= V + 2
        }
        E === !0 && (C = ed(g, h, a, i), Tr(C, g, h, a, i))
    }
    b = {
        top: C.top + "px",
        left: C.left + "px"
    }, C.maxHeight !== void 0 && (b.maxHeight = C.maxHeight + "px", g.height > C.maxHeight && (b.minHeight = b.maxHeight)), C.maxWidth !== void 0 && (b.maxWidth = C.maxWidth + "px", g.width > C.maxWidth && (b.minWidth = b.maxWidth)), Object.assign(n.style, b), n.scrollTop !== m && (n.scrollTop = m), n.scrollLeft !== v && (n.scrollLeft = v)
}

function Tr(e, t, n, o, l) {
    const a = n.bottom, i = n.right, r = ei(), s = window.innerHeight - r, d = document.body.clientWidth;
    if (e.top < 0 || e.top + a > s) if (l.vertical === "center") e.top = t[o.vertical] > s / 2 ? Math.max(0, s - a) : 0, e.maxHeight = Math.min(a, s); else if (t[o.vertical] > s / 2) {
        const c = Math.min(s, o.vertical === "center" ? t.center : o.vertical === l.vertical ? t.bottom : t.top);
        e.maxHeight = Math.min(a, c), e.top = Math.max(0, c - a)
    } else e.top = Math.max(0, o.vertical === "center" ? t.center : o.vertical === l.vertical ? t.top : t.bottom), e.maxHeight = Math.min(a, s - e.top);
    if (e.left < 0 || e.left + i > d) if (e.maxWidth = Math.min(i, d), l.horizontal === "middle") e.left = t[o.horizontal] > d / 2 ? Math.max(0, d - i) : 0; else if (t[o.horizontal] > d / 2) {
        const c = Math.min(d, o.horizontal === "middle" ? t.middle : o.horizontal === l.horizontal ? t.right : t.left);
        e.maxWidth = Math.min(i, c), e.left = Math.max(0, c - e.maxWidth)
    } else e.left = Math.max(0, o.horizontal === "middle" ? t.middle : o.horizontal === l.horizontal ? t.left : t.right), e.maxWidth = Math.min(i, d - e.left)
}

["left", "middle", "right"].forEach(e => {
    hs[`${e}#ltr`] = e, hs[`${e}#rtl`] = e
});
var wa = ve({
    name: "QMenu",
    inheritAttrs: !1,
    props: {
        ...ou, ...Ml, ...Ge, ..._a,
        persistent: Boolean,
        autoClose: Boolean,
        separateClosePopup: Boolean,
        noRouteDismiss: Boolean,
        noRefocus: Boolean,
        noFocus: Boolean,
        fit: Boolean,
        cover: Boolean,
        square: Boolean,
        anchor: {type: String, validator: ki},
        self: {type: String, validator: ki},
        offset: {type: Array, validator: ip},
        scrollTarget: {default: void 0},
        touchPosition: Boolean,
        maxHeight: {type: String, default: null},
        maxWidth: {type: String, default: null}
    },
    emits: [...El, "click", "escapeKey"],
    setup(e, {slots: t, emit: n, attrs: o}) {
        let l, a, i, r = null;
        const s = Se(), {proxy: d} = s, {$q: c} = d, p = D(null), v = D(!1),
            m = f(() => e.persistent !== !0 && e.noRouteDismiss !== !0), g = Je(e, c), {
                registerTick: x,
                removeTick: w
            } = ul(), {registerTimeout: S} = _l(), {transitionProps: y, transitionStyle: b} = lr(e), {
                localScrollTarget: h,
                changeScrollEvent: C,
                unconfigureScrollTarget: A
            } = Xv(e, ee), {anchorEl: L, canShow: E} = lu({showing: v}), {hide: V} = Pl({
                showing: v,
                canShow: E,
                handleShow: be,
                handleHide: K,
                hideOnRouteChange: m,
                processOnMount: !0
            }), {showPortal: O, hidePortal: z, renderPortal: M} = iu(s, p, N, "menu"), k = {
                anchorEl: L, innerRef: p, onClickOutside(_) {
                    if (e.persistent !== !0 && v.value === !0) return V(_), (_.type === "touchstart" || _.target.classList.contains("q-dialog__backdrop")) && Ie(_), !0
                }
            }, B = f(() => qi(e.anchor || (e.cover === !0 ? "center middle" : "bottom start"), c.lang.rtl)),
            Y = f(() => e.cover === !0 ? B.value : qi(e.self || "top start", c.lang.rtl)),
            J = f(() => (e.square === !0 ? " q-menu--square" : "") + (g.value === !0 ? " q-menu--dark q-dark" : "")),
            $ = f(() => e.autoClose === !0 ? {onClick: Z} : {}), Q = f(() => v.value === !0 && e.persistent !== !0);

        function ae() {
            Al(() => {
                let _ = p.value;
                _ && _.contains(document.activeElement) !== !0 && (_ = _.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || _.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || _.querySelector("[autofocus], [data-autofocus]") || _, _.focus({preventScroll: !0}))
            })
        }

        function be(_) {
            if (r = e.noRefocus === !1 ? document.activeElement : null, lp(ie), O(), ee(), l = void 0, _ !== void 0 && (e.touchPosition || e.contextMenu)) {
                const H = Wt(_);
                if (H.left !== void 0) {
                    const {top: re, left: q} = L.value.getBoundingClientRect();
                    l = {left: H.left - q, top: H.top - re}
                }
            }
            a === void 0 && (a = pe(() => c.screen.width + "|" + c.screen.height + "|" + e.self + "|" + e.anchor + "|" + c.lang.rtl, I)), e.noFocus !== !0 && document.activeElement.blur(), x(() => {
                I(), e.noFocus !== !0 && ae()
            }), S(() => {
                c.platform.is.ios === !0 && (i = e.autoClose, p.value.click()), I(), O(!0), n("show", _)
            }, e.transitionDuration)
        }

        function K(_) {
            w(), z(), T(!0), r === null || _ !== void 0 && _.qClickOutside === !0 || (((_ && _.type.indexOf("key") === 0 ? r.closest('[tabindex]:not([tabindex^="-"])') : void 0) || r).focus(), r = null), S(() => {
                z(!0), n("hide", _)
            }, e.transitionDuration)
        }

        function T(_) {
            l = void 0, a !== void 0 && (a(), a = void 0), _ !== !0 && v.value !== !0 || (ms(ie), A(), Ci(k), wi(G)), _ !== !0 && (r = null)
        }

        function ee() {
            L.value === null && e.scrollTarget === void 0 || (h.value = An(L.value, e.scrollTarget), C(h.value, I))
        }

        function Z(_) {
            i !== !0 ? (Gv(d, _), n("click", _)) : i = !1
        }

        function ie(_) {
            Q.value === !0 && e.noFocus !== !0 && Kv(p.value, _.target) !== !0 && ae()
        }

        function G(_) {
            n("escapeKey"), V(_)
        }

        function I() {
            ru({
                targetEl: p.value,
                offset: e.offset,
                anchorEl: L.value,
                anchorOrigin: B.value,
                selfOrigin: Y.value,
                absoluteOffset: l,
                fit: e.fit,
                cover: e.cover,
                maxHeight: e.maxHeight,
                maxWidth: e.maxWidth
            })
        }

        function N() {
            return u($t, y.value, () => v.value === !0 ? u("div", {
                role: "menu", ...o,
                ref: p,
                tabindex: -1,
                class: ["q-menu q-position-engine scroll" + J.value, o.class],
                style: [o.style, b.value], ...$.value
            }, Ae(t.default)) : null)
        }

        return pe(Q, _ => {
            _ === !0 ? (np(G), ap(k)) : (wi(G), Ci(k))
        }), Ke(T), Object.assign(d, {focus: ae, updatePosition: I}), M
    }
});
let $r, Va = 0;
const Vt = new Array(256);
for (let e = 0; e < 256; e++) Vt[e] = (e + 256).toString(16).substring(1);
const t1 = (() => {
    const e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
    if (e !== void 0) {
        if (e.randomBytes !== void 0) return e.randomBytes;
        if (e.getRandomValues !== void 0) return t => {
            const n = new Uint8Array(t);
            return e.getRandomValues(n), n
        }
    }
    return t => {
        const n = [];
        for (let o = t; o > 0; o--) n.push(Math.floor(256 * Math.random()));
        return n
    }
})(), td = 4096;

function xl() {
    ($r === void 0 || Va + 16 > td) && (Va = 0, $r = t1(td));
    const e = Array.prototype.slice.call($r, Va, Va += 16);
    return e[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, Vt[e[0]] + Vt[e[1]] + Vt[e[2]] + Vt[e[3]] + "-" + Vt[e[4]] + Vt[e[5]] + "-" + Vt[e[6]] + Vt[e[7]] + "-" + Vt[e[8]] + Vt[e[9]] + "-" + Vt[e[10]] + Vt[e[11]] + Vt[e[12]] + Vt[e[13]] + Vt[e[14]] + Vt[e[15]]
}

const n1 = Object.keys(tu), o1 = e => n1.reduce((t, n) => {
    const o = e[n];
    return o !== void 0 && (t[n] = o), t
}, {});
var rp = ve({
    name: "QBtnDropdown",
    props: {
        ...tu, ..._a,
        modelValue: Boolean,
        split: Boolean,
        dropdownIcon: String,
        contentClass: [Array, String, Object],
        contentStyle: [Array, String, Object],
        cover: Boolean,
        persistent: Boolean,
        noRouteDismiss: Boolean,
        autoClose: Boolean,
        menuAnchor: {type: String, default: "bottom end"},
        menuSelf: {type: String, default: "top end"},
        menuOffset: Array,
        disableMainBtn: Boolean,
        disableDropdown: Boolean,
        noIconAnimation: Boolean,
        toggleAriaLabel: String
    },
    emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: o} = Se(), l = D(e.modelValue), a = D(null), i = xl(), r = f(() => {
                const h = {
                    "aria-expanded": l.value === !0 ? "true" : "false",
                    "aria-haspopup": "true",
                    "aria-controls": i,
                    "aria-label": e.toggleAriaLabel || o.$q.lang.label[l.value === !0 ? "collapse" : "expand"](e.label)
                };
                return (e.disable === !0 || e.split === !1 && e.disableMainBtn === !0 || e.disableDropdown === !0) && (h["aria-disabled"] = "true"), h
            }),
            s = f(() => "q-btn-dropdown__arrow" + (l.value === !0 && e.noIconAnimation === !1 ? " rotate-180" : "") + (e.split === !1 ? " q-btn-dropdown__arrow-container" : "")),
            d = f(() => Yv(e)), c = f(() => o1(e));

        function p(h) {
            l.value = !0, n("beforeShow", h)
        }

        function v(h) {
            n("show", h), n("update:modelValue", !0)
        }

        function m(h) {
            l.value = !1, n("beforeHide", h)
        }

        function g(h) {
            n("hide", h), n("update:modelValue", !1)
        }

        function x(h) {
            n("click", h)
        }

        function w(h) {
            _t(h), b(), n("click", h)
        }

        function S(h) {
            a.value !== null && a.value.toggle(h)
        }

        function y(h) {
            a.value !== null && a.value.show(h)
        }

        function b(h) {
            a.value !== null && a.value.hide(h)
        }

        return pe(() => e.modelValue, h => {
            a.value !== null && a.value[h ? "show" : "hide"]()
        }), pe(() => e.split, b), Object.assign(o, {show: y, hide: b, toggle: S}), mt(() => {
            e.modelValue === !0 && y()
        }), () => {
            const h = [u(Ze, {class: s.value, name: e.dropdownIcon || o.$q.iconSet.arrow.dropdown})];
            return e.disableDropdown !== !0 && h.push(u(wa, {
                ref: a,
                id: i,
                class: e.contentClass,
                style: e.contentStyle,
                cover: e.cover,
                fit: !0,
                persistent: e.persistent,
                noRouteDismiss: e.noRouteDismiss,
                autoClose: e.autoClose,
                anchor: e.menuAnchor,
                self: e.menuSelf,
                offset: e.menuOffset,
                separateClosePopup: !0,
                transitionShow: e.transitionShow,
                transitionHide: e.transitionHide,
                transitionDuration: e.transitionDuration,
                onBeforeShow: p,
                onShow: v,
                onBeforeHide: m,
                onHide: g
            }, t.default)), e.split === !1 ? u(tt, {
                class: "q-btn-dropdown q-btn-dropdown--simple", ...c.value, ...r.value,
                disable: e.disable === !0 || e.disableMainBtn === !0,
                noWrap: !0,
                round: !1,
                onClick: x
            }, {
                default: () => Ae(t.label, []).concat(h),
                loading: t.loading
            }) : u(nu, {
                class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
                rounded: e.rounded,
                square: e.square, ...d.value,
                glossy: e.glossy,
                stretch: e.stretch
            }, () => [u(tt, {
                class: "q-btn-dropdown--current", ...c.value,
                disable: e.disable === !0 || e.disableMainBtn === !0,
                noWrap: !0,
                round: !1,
                onClick: w
            }, {
                default: t.label,
                loading: t.loading
            }), u(tt, {
                class: "q-btn-dropdown__arrow-container q-anchor--skip", ...r.value, ...d.value,
                disable: e.disable === !0 || e.disableDropdown === !0,
                rounded: e.rounded,
                color: e.color,
                textColor: e.textColor,
                dense: e.dense,
                size: e.size,
                padding: e.padding,
                ripple: e.ripple
            }, () => h)])
        }
    }
});
const vn = {name: String};

function xa(e) {
    return f(() => ({type: "hidden", name: e.name, value: e.modelValue}))
}

function po(e = {}) {
    return (t, n, o) => {
        t[n](u("input", {class: "hidden" + (o || ""), ...e.value}))
    }
}

function su(e) {
    return f(() => e.name || e.for)
}

var l1 = ve({
    name: "QBtnToggle",
    props: {
        ...vn,
        modelValue: {required: !0},
        options: {
            type: Array,
            required: !0,
            validator: e => e.every(t => ("label" in t || "icon" in t || "slot" in t) && "value" in t)
        },
        color: String,
        textColor: String,
        toggleColor: {type: String, default: "primary"},
        toggleTextColor: String,
        outline: Boolean,
        flat: Boolean,
        unelevated: Boolean,
        rounded: Boolean,
        push: Boolean,
        glossy: Boolean,
        size: String,
        padding: String,
        noCaps: Boolean,
        noWrap: Boolean,
        dense: Boolean,
        readonly: Boolean,
        disable: Boolean,
        stack: Boolean,
        stretch: Boolean,
        spread: Boolean,
        clearable: Boolean,
        ripple: {type: [Boolean, Object], default: !0}
    },
    emits: ["update:modelValue", "clear", "click"],
    setup(e, {slots: t, emit: n}) {
        const o = f(() => e.options.find(v => v.value === e.modelValue) !== void 0),
            l = f(() => ({type: "hidden", name: e.name, value: e.modelValue})), a = po(l), i = f(() => Yv(e)),
            r = f(() => ({rounded: e.rounded, dense: e.dense, ...i.value})), s = f(() => e.options.map((v, m) => {
                const {attrs: g, value: x, slot: w, ...S} = v;
                return {
                    slot: w,
                    props: {
                        key: m,
                        "aria-pressed": x === e.modelValue ? "true" : "false", ...g, ...S, ...r.value,
                        disable: e.disable === !0 || S.disable === !0,
                        color: x === e.modelValue ? c(S, "toggleColor") : c(S, "color"),
                        textColor: x === e.modelValue ? c(S, "toggleTextColor") : c(S, "textColor"),
                        noCaps: c(S, "noCaps") === !0,
                        noWrap: c(S, "noWrap") === !0,
                        size: c(S, "size"),
                        padding: c(S, "padding"),
                        ripple: c(S, "ripple"),
                        stack: c(S, "stack") === !0,
                        stretch: c(S, "stretch") === !0,
                        onClick(y) {
                            d(x, v, y)
                        }
                    }
                }
            }));

        function d(v, m, g) {
            e.readonly !== !0 && (e.modelValue === v ? e.clearable === !0 && (n("update:modelValue", null, null), n("clear")) : n("update:modelValue", v, m), n("click", g))
        }

        function c(v, m) {
            return v[m] === void 0 ? e[m] : v[m]
        }

        function p() {
            const v = s.value.map(m => u(tt, m.props, m.slot !== void 0 ? t[m.slot] : void 0));
            return e.name !== void 0 && e.disable !== !0 && o.value === !0 && a(v, "push"), St(t.default, v)
        }

        return () => u(nu, {
            class: "q-btn-toggle", ...i.value,
            rounded: e.rounded,
            stretch: e.stretch,
            glossy: e.glossy,
            spread: e.spread
        }, p)
    }
}), uu = ve({
    name: "QCard",
    props: {...Ge, tag: {type: String, default: "div"}, square: Boolean, flat: Boolean, bordered: Boolean},
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Se(), o = Je(e, n),
            l = f(() => "q-card" + (o.value === !0 ? " q-card--dark q-dark" : "") + (e.bordered === !0 ? " q-card--bordered" : "") + (e.square === !0 ? " q-card--square no-border-radius" : "") + (e.flat === !0 ? " q-card--flat no-shadow" : ""));
        return () => u(e.tag, {class: l.value}, Ae(t.default))
    }
}), lo = ve({
    name: "QCardSection",
    props: {tag: {type: String, default: "div"}, horizontal: Boolean},
    setup(e, {slots: t}) {
        const n = f(() => `q-card__section q-card__section--${e.horizontal === !0 ? "horiz row no-wrap" : "vert"}`);
        return () => u(e.tag, {class: n.value}, Ae(t.default))
    }
}), sp = ve({
    name: "QCardActions", props: {...Xs, vertical: Boolean}, setup(e, {slots: t}) {
        const n = Zs(e),
            o = f(() => `q-card__actions ${n.value} q-card__actions--${e.vertical === !0 ? "vert column" : "horiz row"}`);
        return () => u("div", {class: o.value}, Ae(t.default))
    }
});
const cu = {left: !0, right: !0, up: !0, down: !0, horizontal: !0, vertical: !0}, a1 = Object.keys(cu);

function Ti(e) {
    const t = {};
    for (const n of a1) e[n] === !0 && (t[n] = !0);
    return Object.keys(t).length === 0 ? cu : (t.horizontal === !0 ? t.left = t.right = !0 : t.left === !0 && t.right === !0 && (t.horizontal = !0), t.vertical === !0 ? t.up = t.down = !0 : t.up === !0 && t.down === !0 && (t.vertical = !0), t.horizontal === !0 && t.vertical === !0 && (t.all = !0), t)
}

cu.all = !0;
const i1 = ["INPUT", "TEXTAREA"];

function $i(e, t) {
    return t.event === void 0 && e.target !== void 0 && e.target.draggable !== !0 && typeof t.handler == "function" && i1.includes(e.target.nodeName.toUpperCase()) === !1 && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1)
}

function r1(e) {
    const t = [.06, 6, 50];
    return typeof e == "string" && e.length && e.split(":").forEach((n, o) => {
        const l = parseFloat(n);
        l && (t[o] = l)
    }), t
}

var up = qn({
    name: "touch-swipe", beforeMount(e, {value: t, arg: n, modifiers: o}) {
        if (o.mouse !== !0 && Fe.has.touch !== !0) return;
        const l = o.mouseCapture === !0 ? "Capture" : "", a = {
            handler: t, sensitivity: r1(n), direction: Ti(o), noop: xt, mouseStart(i) {
                $i(i, a) && tr(i) && (wt(a, "temp", [[document, "mousemove", "move", `notPassive${l}`], [document, "mouseup", "end", "notPassiveCapture"]]), a.start(i, !0))
            }, touchStart(i) {
                if ($i(i, a)) {
                    const r = i.target;
                    wt(a, "temp", [[r, "touchmove", "move", "notPassiveCapture"], [r, "touchcancel", "end", "notPassiveCapture"], [r, "touchend", "end", "notPassiveCapture"]]), a.start(i)
                }
            }, start(i, r) {
                Fe.is.firefox === !0 && il(e, !0);
                const s = Wt(i);
                a.event = {x: s.left, y: s.top, time: Date.now(), mouse: r === !0, dir: !1}
            }, move(i) {
                if (a.event === void 0) return;
                if (a.event.dir !== !1) return void Ie(i);
                const r = Date.now() - a.event.time;
                if (r === 0) return;
                const s = Wt(i), d = s.left - a.event.x, c = Math.abs(d), p = s.top - a.event.y, v = Math.abs(p);
                if (a.event.mouse !== !0) {
                    if (c < a.sensitivity[1] && v < a.sensitivity[1]) return void a.end(i)
                } else {
                    if (window.getSelection().toString() !== "") return void a.end(i);
                    if (c < a.sensitivity[2] && v < a.sensitivity[2]) return
                }
                const m = c / r, g = v / r;
                a.direction.vertical === !0 && c < v && c < 100 && g > a.sensitivity[0] && (a.event.dir = p < 0 ? "up" : "down"), a.direction.horizontal === !0 && c > v && v < 100 && m > a.sensitivity[0] && (a.event.dir = d < 0 ? "left" : "right"), a.direction.up === !0 && c < v && p < 0 && c < 100 && g > a.sensitivity[0] && (a.event.dir = "up"), a.direction.down === !0 && c < v && p > 0 && c < 100 && g > a.sensitivity[0] && (a.event.dir = "down"), a.direction.left === !0 && c > v && d < 0 && v < 100 && m > a.sensitivity[0] && (a.event.dir = "left"), a.direction.right === !0 && c > v && d > 0 && v < 100 && m > a.sensitivity[0] && (a.event.dir = "right"), a.event.dir !== !1 ? (Ie(i), a.event.mouse === !0 && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), xn(), a.styleCleanup = x => {
                    a.styleCleanup = void 0, document.body.classList.remove("non-selectable");
                    const w = () => {
                        document.body.classList.remove("no-pointer-events--children")
                    };
                    x === !0 ? setTimeout(w, 50) : w()
                }), a.handler({
                    evt: i,
                    touch: a.event.mouse !== !0,
                    mouse: a.event.mouse,
                    direction: a.event.dir,
                    duration: r,
                    distance: {x: c, y: v}
                })) : a.end(i)
            }, end(i) {
                a.event !== void 0 && (Ht(a, "temp"), Fe.is.firefox === !0 && il(e, !1), a.styleCleanup !== void 0 && a.styleCleanup(!0), i !== void 0 && a.event.dir !== !1 && Ie(i), a.event = void 0)
            }
        };
        if (e.__qtouchswipe = a, o.mouse === !0) {
            const i = o.mouseCapture === !0 || o.mousecapture === !0 ? "Capture" : "";
            wt(a, "main", [[e, "mousedown", "mouseStart", `passive${i}`]])
        }
        Fe.has.touch === !0 && wt(a, "main", [[e, "touchstart", "touchStart", `passive${o.capture === !0 ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]])
    }, updated(e, t) {
        const n = e.__qtouchswipe;
        n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value), n.direction = Ti(t.modifiers))
    }, beforeUnmount(e) {
        const t = e.__qtouchswipe;
        t !== void 0 && (Ht(t, "main"), Ht(t, "temp"), Fe.is.firefox === !0 && il(e, !1), t.styleCleanup !== void 0 && t.styleCleanup(), delete e.__qtouchswipe)
    }
});

function Sa() {
    const e = new Map;
    return {
        getCache: function (t, n) {
            return e[t] === void 0 ? e[t] = n : e[t]
        }, getCacheWithFn: function (t, n) {
            return e[t] === void 0 ? e[t] = n() : e[t]
        }
    }
}

const du = {name: {required: !0}, disable: Boolean}, nd = {
    setup(e, {slots: t}) {
        return () => u("div", {class: "q-panel scroll", role: "tabpanel"}, Ae(t.default))
    }
}, fu = {
    modelValue: {required: !0},
    animated: Boolean,
    infinite: Boolean,
    swipeable: Boolean,
    vertical: Boolean,
    transitionPrev: String,
    transitionNext: String,
    transitionDuration: {type: [String, Number], default: 300},
    keepAlive: Boolean,
    keepAliveInclude: [String, Array, RegExp],
    keepAliveExclude: [String, Array, RegExp],
    keepAliveMax: Number
}, vu = ["update:modelValue", "beforeTransition", "transition"];

function pu() {
    const {props: e, emit: t, proxy: n} = Se(), {getCacheWithFn: o} = Sa();
    let l, a;
    const i = D(null), r = D(null);

    function s(k) {
        const B = e.vertical === !0 ? "up" : "left";
        L((n.$q.lang.rtl === !0 ? -1 : 1) * (k.direction === B ? 1 : -1))
    }

    const d = f(() => [[up, s, void 0, {horizontal: e.vertical !== !0, vertical: e.vertical, mouse: !0}]]),
        c = f(() => e.transitionPrev || `slide-${e.vertical === !0 ? "down" : "right"}`),
        p = f(() => e.transitionNext || `slide-${e.vertical === !0 ? "up" : "left"}`),
        v = f(() => `--q-transition-duration: ${e.transitionDuration}ms`),
        m = f(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)),
        g = f(() => ({include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax})),
        x = f(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);

    function w() {
        L(1)
    }

    function S() {
        L(-1)
    }

    function y(k) {
        t("update:modelValue", k)
    }

    function b(k) {
        return k != null && k !== ""
    }

    function h(k) {
        return l.findIndex(B => B.props.name === k && B.props.disable !== "" && B.props.disable !== !0)
    }

    function C() {
        return l.filter(k => k.props.disable !== "" && k.props.disable !== !0)
    }

    function A(k) {
        const B = k !== 0 && e.animated === !0 && i.value !== -1 ? "q-transition--" + (k === -1 ? c.value : p.value) : null;
        r.value !== B && (r.value = B)
    }

    function L(k, B = i.value) {
        let Y = B + k;
        for (; Y > -1 && Y < l.length;) {
            const J = l[Y];
            if (J !== void 0 && J.props.disable !== "" && J.props.disable !== !0) return A(k), a = !0, t("update:modelValue", J.props.name), void setTimeout(() => {
                a = !1
            });
            Y += k
        }
        e.infinite === !0 && l.length !== 0 && B !== -1 && B !== l.length && L(k, k === -1 ? l.length : -1)
    }

    function E() {
        const k = h(e.modelValue);
        return i.value !== k && (i.value = k), !0
    }

    function V() {
        const k = b(e.modelValue) === !0 && E() && l[i.value];
        return e.keepAlive === !0 ? [u(If, g.value, [u(x.value === !0 ? o(m.value, () => ({
            ...nd,
            name: m.value
        })) : nd, {key: m.value, style: v.value}, () => k)])] : [u("div", {
            class: "q-panel scroll",
            style: v.value,
            key: m.value,
            role: "tabpanel"
        }, [k])]
    }

    function O() {
        if (l.length !== 0) return e.animated === !0 ? [u($t, {name: r.value}, V)] : V()
    }

    function z(k) {
        return l = Gs(Ae(k.default, [])).filter(B => B.props !== null && B.props.slot === void 0 && b(B.props.name) === !0), l.length
    }

    function M() {
        return l
    }

    return pe(() => e.modelValue, (k, B) => {
        const Y = b(k) === !0 ? h(k) : -1;
        a !== !0 && A(Y === -1 ? 0 : Y < h(B) ? -1 : 1), i.value !== Y && (i.value = Y, t("beforeTransition", k, B), We(() => {
            t("transition", k, B)
        }))
    }), Object.assign(n, {next: w, previous: S, goTo: y}), {
        panelIndex: i,
        panelDirectives: d,
        updatePanelsList: z,
        updatePanelIndex: E,
        getPanelContent: O,
        getEnabledPanels: C,
        getPanels: M,
        isValidPanelName: b,
        keepAliveProps: g,
        needsUniqueKeepAliveWrapper: x,
        goToPanelByOffset: L,
        goToPanel: y,
        nextPanel: w,
        previousPanel: S
    }
}

let Rl = 0;
const mu = {fullscreen: Boolean, noRouteFullscreenExit: Boolean}, hu = ["update:fullscreen", "fullscreen"];

function gu() {
    const e = Se(), {props: t, emit: n, proxy: o} = e;
    let l, a, i;
    const r = D(!1);

    function s() {
        r.value === !0 ? c() : d()
    }

    function d() {
        r.value !== !0 && (r.value = !0, i = o.$el.parentNode, i.replaceChild(a, o.$el), document.body.appendChild(o.$el), Rl++, Rl === 1 && document.body.classList.add("q-body--fullscreen-mixin"), l = {handler: c}, ca.add(l))
    }

    function c() {
        r.value === !0 && (l !== void 0 && (ca.remove(l), l = void 0), i.replaceChild(o.$el, a), r.value = !1, Rl = Math.max(0, Rl - 1), Rl === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), o.$el.scrollIntoView !== void 0 && setTimeout(() => {
            o.$el.scrollIntoView()
        })))
    }

    return Js(e) === !0 && pe(() => o.$route.fullPath, () => {
        t.noRouteFullscreenExit !== !0 && c()
    }), pe(() => t.fullscreen, p => {
        r.value !== p && s()
    }), pe(r, p => {
        n("update:fullscreen", p), n("fullscreen", p)
    }), Ui(() => {
        a = document.createElement("span")
    }), mt(() => {
        t.fullscreen === !0 && d()
    }), Ke(c), Object.assign(o, {toggleFullscreen: s, setFullscreen: d, exitFullscreen: c}), {
        inFullscreen: r,
        toggleFullscreen: s
    }
}

const s1 = ["top", "right", "bottom", "left"], u1 = ["regular", "flat", "outline", "push", "unelevated"];
var c1 = ve({
    name: "QCarousel",
    props: {
        ...Ge, ...fu, ...mu,
        transitionPrev: {type: String, default: "fade"},
        transitionNext: {type: String, default: "fade"},
        height: String,
        padding: Boolean,
        controlColor: String,
        controlTextColor: String,
        controlType: {type: String, validator: e => u1.includes(e), default: "flat"},
        autoplay: [Number, Boolean],
        arrows: Boolean,
        prevIcon: String,
        nextIcon: String,
        navigation: Boolean,
        navigationPosition: {type: String, validator: e => s1.includes(e)},
        navigationIcon: String,
        navigationActiveIcon: String,
        thumbnails: Boolean
    },
    emits: [...hu, ...vu],
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Se(), o = Je(e, n);
        let l, a = null;
        const {
                updatePanelsList: i,
                getPanelContent: r,
                panelDirectives: s,
                goToPanel: d,
                previousPanel: c,
                nextPanel: p,
                getEnabledPanels: v,
                panelIndex: m
            } = pu(), {inFullscreen: g} = gu(),
            x = f(() => g.value !== !0 && e.height !== void 0 ? {height: e.height} : {}),
            w = f(() => e.vertical === !0 ? "vertical" : "horizontal"),
            S = f(() => `q-carousel q-panel-parent q-carousel--with${e.padding === !0 ? "" : "out"}-padding` + (g.value === !0 ? " fullscreen" : "") + (o.value === !0 ? " q-carousel--dark q-dark" : "") + (e.arrows === !0 ? ` q-carousel--arrows-${w.value}` : "") + (e.navigation === !0 ? ` q-carousel--navigation-${C.value}` : "")),
            y = f(() => {
                const O = [e.prevIcon || n.iconSet.carousel[e.vertical === !0 ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === !0 ? "down" : "right"]];
                return e.vertical === !1 && n.lang.rtl === !0 ? O.reverse() : O
            }), b = f(() => e.navigationIcon || n.iconSet.carousel.navigationIcon),
            h = f(() => e.navigationActiveIcon || b.value),
            C = f(() => e.navigationPosition || (e.vertical === !0 ? "right" : "bottom")), A = f(() => ({
                color: e.controlColor,
                textColor: e.controlTextColor,
                round: !0,
                [e.controlType]: !0,
                dense: !0
            }));

        function L() {
            const O = da(e.autoplay) === !0 ? Math.abs(e.autoplay) : 5e3;
            a !== null && clearTimeout(a), a = setTimeout(() => {
                a = null, O >= 0 ? p() : c()
            }, O)
        }

        function E(O, z) {
            return u("div", {class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${O} q-carousel__navigation--${C.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "")}, [u("div", {class: "q-carousel__navigation-inner flex flex-center no-wrap"}, v().map(z))])
        }

        function V() {
            const O = [];
            if (e.navigation === !0) {
                const z = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : k => u(tt, {
                    key: "nav" + k.name,
                    class: `q-carousel__navigation-icon q-carousel__navigation-icon--${k.active === !0 ? "" : "in"}active`, ...k.btnProps,
                    onClick: k.onClick
                }), M = l - 1;
                O.push(E("buttons", (k, B) => {
                    const Y = k.props.name, J = m.value === B;
                    return z({
                        index: B,
                        maxIndex: M,
                        name: Y,
                        active: J,
                        btnProps: {icon: J === !0 ? h.value : b.value, size: "sm", ...A.value},
                        onClick: () => {
                            d(Y)
                        }
                    })
                }))
            } else if (e.thumbnails === !0) {
                const z = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
                O.push(E("thumbnails", M => {
                    const k = M.props;
                    return u("img", {
                        key: "tmb#" + k.name,
                        class: `q-carousel__thumbnail q-carousel__thumbnail--${k.name === e.modelValue ? "" : "in"}active` + z,
                        src: k.imgSrc || k["img-src"],
                        onClick: () => {
                            d(k.name)
                        }
                    })
                }))
            }
            return e.arrows === !0 && m.value >= 0 && ((e.infinite === !0 || m.value > 0) && O.push(u("div", {
                key: "prev",
                class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${w.value} absolute flex flex-center`
            }, [u(tt, {
                icon: y.value[0], ...A.value,
                onClick: c
            })])), (e.infinite === !0 || m.value < l - 1) && O.push(u("div", {
                key: "next",
                class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${w.value} absolute flex flex-center`
            }, [u(tt, {icon: y.value[1], ...A.value, onClick: p})]))), St(t.control, O)
        }

        return pe(() => e.modelValue, () => {
            e.autoplay && L()
        }), pe(() => e.autoplay, O => {
            O ? L() : a !== null && (clearTimeout(a), a = null)
        }), mt(() => {
            e.autoplay && L()
        }), Ke(() => {
            a !== null && clearTimeout(a)
        }), () => (l = i(t), u("div", {
            class: S.value,
            style: x.value
        }, [fn("div", {class: "q-carousel__slides-container"}, r(), "sl-cont", e.swipeable, () => s.value)].concat(V())))
    }
}), d1 = ve({
    name: "QCarouselSlide", props: {...du, imgSrc: String}, setup(e, {slots: t}) {
        const n = f(() => e.imgSrc ? {backgroundImage: `url("${e.imgSrc}")`} : {});
        return () => u("div", {class: "q-carousel__slide", style: n.value}, Ae(t.default))
    }
}), f1 = ve({
    name: "QCarouselControl",
    props: {
        position: {
            type: String,
            default: "bottom-right",
            validator: e => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e)
        }, offset: {type: Array, default: () => [18, 18], validator: e => e.length === 2}
    },
    setup(e, {slots: t}) {
        const n = f(() => `q-carousel__control absolute absolute-${e.position}`),
            o = f(() => ({margin: `${e.offset[1]}px ${e.offset[0]}px`}));
        return () => u("div", {class: n.value, style: o.value}, Ae(t.default))
    }
}), v1 = ve({
    name: "QChatMessage",
    props: {
        sent: Boolean,
        label: String,
        bgColor: String,
        textColor: String,
        name: String,
        avatar: String,
        text: Array,
        stamp: String,
        size: String,
        labelHtml: Boolean,
        nameHtml: Boolean,
        textHtml: Boolean,
        stampHtml: Boolean
    },
    setup(e, {slots: t}) {
        const n = f(() => e.sent === !0 ? "sent" : "received"),
            o = f(() => `q-message-text-content q-message-text-content--${n.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")),
            l = f(() => `q-message-text q-message-text--${n.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")),
            a = f(() => "q-message-container row items-end no-wrap" + (e.sent === !0 ? " reverse" : "")),
            i = f(() => e.size !== void 0 ? `col-${e.size}` : ""), r = f(() => ({
                msg: e.textHtml === !0 ? "innerHTML" : "textContent",
                stamp: e.stampHtml === !0 ? "innerHTML" : "textContent",
                name: e.nameHtml === !0 ? "innerHTML" : "textContent",
                label: e.labelHtml === !0 ? "innerHTML" : "textContent"
            }));

        function s(c) {
            return t.stamp !== void 0 ? [c, u("div", {class: "q-message-stamp"}, t.stamp())] : e.stamp ? [c, u("div", {
                class: "q-message-stamp",
                [r.value.stamp]: e.stamp
            })] : [c]
        }

        function d(c, p) {
            const v = p === !0 ? c.length > 1 ? m => m : m => u("div", [m]) : m => u("div", {[r.value.msg]: m});
            return c.map((m, g) => u("div", {key: g, class: l.value}, [u("div", {class: o.value}, s(v(m)))]))
        }

        return () => {
            const c = [];
            t.avatar !== void 0 ? c.push(t.avatar()) : e.avatar !== void 0 && c.push(u("img", {
                class: `q-message-avatar q-message-avatar--${n.value}`,
                src: e.avatar,
                "aria-hidden": "true"
            }));
            const p = [];
            t.name !== void 0 ? p.push(u("div", {class: `q-message-name q-message-name--${n.value}`}, t.name())) : e.name !== void 0 && p.push(u("div", {
                class: `q-message-name q-message-name--${n.value}`,
                [r.value.name]: e.name
            })), t.default !== void 0 ? p.push(d(Gs(t.default()), !0)) : e.text !== void 0 && p.push(d(e.text)), c.push(u("div", {class: i.value}, p));
            const v = [];
            return t.label !== void 0 ? v.push(u("div", {class: "q-message-label"}, t.label())) : e.label !== void 0 && v.push(u("div", {
                class: "q-message-label",
                [r.value.label]: e.label
            })), v.push(u("div", {class: a.value}, c)), u("div", {class: `q-message q-message-${n.value}`}, v)
        }
    }
});

function cp(e, t) {
    const n = D(null), o = f(() => e.disable === !0 ? null : u("span", {ref: n, class: "no-outline", tabindex: -1}));

    function l(a) {
        const i = t.value;
        a !== void 0 && a.type.indexOf("key") === 0 ? i !== null && document.activeElement !== i && i.contains(document.activeElement) === !0 && i.focus() : n.value !== null && (a === void 0 || i !== null && i.contains(a.target) === !0) && n.value.focus()
    }

    return {refocusTargetEl: o, refocusTarget: l}
}

var dp = {xs: 30, sm: 35, md: 40, lg: 50, xl: 60};
const fp = {
    ...Ge, ...Qn, ...vn,
    modelValue: {required: !0, default: null},
    val: {},
    trueValue: {default: !0},
    falseValue: {default: !1},
    indeterminateValue: {default: null},
    checkedIcon: String,
    uncheckedIcon: String,
    indeterminateIcon: String,
    toggleOrder: {type: String, validator: e => e === "tf" || e === "ft"},
    toggleIndeterminate: Boolean,
    label: String,
    leftLabel: Boolean,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
}, vp = ["update:modelValue"];

function pp(e, t) {
    const {props: n, slots: o, emit: l, proxy: a} = Se(), {$q: i} = a, r = Je(n, i), s = D(null), {
            refocusTargetEl: d,
            refocusTarget: c
        } = cp(n, s), p = Kn(n, dp), v = f(() => n.val !== void 0 && Array.isArray(n.modelValue)), m = f(() => {
            const M = Qe(n.val);
            return v.value === !0 ? n.modelValue.findIndex(k => Qe(k) === M) : -1
        }), g = f(() => v.value === !0 ? m.value > -1 : Qe(n.modelValue) === Qe(n.trueValue)),
        x = f(() => v.value === !0 ? m.value === -1 : Qe(n.modelValue) === Qe(n.falseValue)),
        w = f(() => g.value === !1 && x.value === !1), S = f(() => n.disable === !0 ? -1 : n.tabindex || 0),
        y = f(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === !0 ? " disabled" : "") + (r.value === !0 ? ` q-${e}--dark` : "") + (n.dense === !0 ? ` q-${e}--dense` : "") + (n.leftLabel === !0 ? " reverse" : "")),
        b = f(() => {
            const M = g.value === !0 ? "truthy" : x.value === !0 ? "falsy" : "indet",
                k = n.color === void 0 || n.keepColor !== !0 && (e === "toggle" ? g.value !== !0 : x.value === !0) ? "" : ` text-${n.color}`;
            return `q-${e}__inner relative-position non-selectable q-${e}__inner--${M}${k}`
        }), h = f(() => {
            const M = {type: "checkbox"};
            return n.name !== void 0 && Object.assign(M, {
                ".checked": g.value,
                "^checked": g.value === !0 ? "checked" : void 0,
                name: n.name,
                value: v.value === !0 ? n.val : n.trueValue
            }), M
        }), C = po(h), A = f(() => {
            const M = {
                tabindex: S.value,
                role: e === "toggle" ? "switch" : "checkbox",
                "aria-label": n.label,
                "aria-checked": w.value === !0 ? "mixed" : g.value === !0 ? "true" : "false"
            };
            return n.disable === !0 && (M["aria-disabled"] = "true"), M
        });

    function L(M) {
        M !== void 0 && (Ie(M), c(M)), n.disable !== !0 && l("update:modelValue", E(), M)
    }

    function E() {
        if (v.value === !0) {
            if (g.value === !0) {
                const M = n.modelValue.slice();
                return M.splice(m.value, 1), M
            }
            return n.modelValue.concat([n.val])
        }
        if (g.value === !0) {
            if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1) return n.falseValue
        } else {
            if (x.value !== !0) return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
            if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1) return n.trueValue
        }
        return n.indeterminateValue
    }

    function V(M) {
        M.keyCode !== 13 && M.keyCode !== 32 || Ie(M)
    }

    function O(M) {
        M.keyCode !== 13 && M.keyCode !== 32 || L(M)
    }

    const z = t(g, w);
    return Object.assign(a, {toggle: L}), () => {
        const M = z();
        n.disable !== !0 && C(M, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
        const k = [u("div", {class: b.value, style: p.value, "aria-hidden": "true"}, M)];
        d.value !== null && k.push(d.value);
        const B = n.label !== void 0 ? St(o.default, [n.label]) : Ae(o.default);
        return B !== void 0 && k.push(u("div", {class: `q-${e}__label q-anchor--skip`}, B)), u("div", {
            ref: s,
            class: y.value, ...A.value,
            onClick: L,
            onKeydown: V,
            onKeyup: O
        }, k)
    }
}

const p1 = u("div", {
    key: "svg",
    class: "q-checkbox__bg absolute"
}, [u("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
}, [u("path", {
    class: "q-checkbox__truthy",
    fill: "none",
    d: "M1.73,12.91 8.1,19.28 22.79,4.59"
}), u("path", {class: "q-checkbox__indet", d: "M4,14H20V10H4"})])]);
var dl = ve({
    name: "QCheckbox", props: fp, emits: vp, setup(e) {
        function t(n, o) {
            const l = f(() => (n.value === !0 ? e.checkedIcon : o.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || null);
            return () => l.value !== null ? [u("div", {
                key: "icon",
                class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
            }, [u(Ze, {class: "q-checkbox__icon", name: l.value})])] : [p1]
        }

        return pp("checkbox", t)
    }
});
const m1 = {xs: 8, sm: 10, md: 14, lg: 20, xl: 24};
var bu = ve({
    name: "QChip",
    props: {
        ...Ge, ...Qn,
        dense: Boolean,
        icon: String,
        iconRight: String,
        iconRemove: String,
        iconSelected: String,
        label: [String, Number],
        color: String,
        textColor: String,
        modelValue: {type: Boolean, default: !0},
        selected: {type: Boolean, default: null},
        square: Boolean,
        outline: Boolean,
        clickable: Boolean,
        removable: Boolean,
        removeAriaLabel: String,
        tabindex: [String, Number],
        disable: Boolean,
        ripple: {type: [Boolean, Object], default: !0}
    },
    emits: ["update:modelValue", "update:selected", "remove", "click"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: o}} = Se(), l = Je(e, o), a = Kn(e, m1), i = f(() => e.selected === !0 || e.icon !== void 0),
            r = f(() => e.selected === !0 ? e.iconSelected || o.iconSet.chip.selected : e.icon),
            s = f(() => e.iconRemove || o.iconSet.chip.remove),
            d = f(() => e.disable === !1 && (e.clickable === !0 || e.selected !== null)), c = f(() => {
                const w = e.outline === !0 && e.color || e.textColor;
                return "q-chip row inline no-wrap items-center" + (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") + (w ? ` text-${w} q-chip--colored` : "") + (e.disable === !0 ? " disabled" : "") + (e.dense === !0 ? " q-chip--dense" : "") + (e.outline === !0 ? " q-chip--outline" : "") + (e.selected === !0 ? " q-chip--selected" : "") + (d.value === !0 ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === !0 ? " q-chip--square" : "") + (l.value === !0 ? " q-chip--dark q-dark" : "")
            }), p = f(() => {
                const w = e.disable === !0 ? {tabindex: -1, "aria-disabled": "true"} : {tabindex: e.tabindex || 0}, S = {
                    ...w,
                    role: "button",
                    "aria-hidden": "false",
                    "aria-label": e.removeAriaLabel || o.lang.label.remove
                };
                return {chip: w, remove: S}
            });

        function v(w) {
            w.keyCode === 13 && m(w)
        }

        function m(w) {
            e.disable || (n("update:selected", !e.selected), n("click", w))
        }

        function g(w) {
            w.keyCode !== void 0 && w.keyCode !== 13 || (Ie(w), e.disable === !1 && (n("update:modelValue", !1), n("remove")))
        }

        function x() {
            const w = [];
            d.value === !0 && w.push(u("div", {class: "q-focus-helper"})), i.value === !0 && w.push(u(Ze, {
                class: "q-chip__icon q-chip__icon--left",
                name: r.value
            }));
            const S = e.label !== void 0 ? [u("div", {class: "ellipsis"}, [e.label])] : void 0;
            return w.push(u("div", {class: "q-chip__content col row no-wrap items-center q-anchor--skip"}, Ys(t.default, S))), e.iconRight && w.push(u(Ze, {
                class: "q-chip__icon q-chip__icon--right",
                name: e.iconRight
            })), e.removable === !0 && w.push(u(Ze, {
                class: "q-chip__icon q-chip__icon--remove cursor-pointer",
                name: s.value, ...p.value.remove,
                onClick: g,
                onKeyup: g
            })), w
        }

        return () => {
            if (e.modelValue === !1) return;
            const w = {class: c.value, style: a.value};
            return d.value === !0 && Object.assign(w, p.value.chip, {
                onClick: m,
                onKeyup: v
            }), fn("div", w, x(), "ripple", e.ripple !== !1 && e.disable !== !0, () => [[ba, e.ripple]])
        }
    }
});
const yu = {
    ...Qn,
    min: {type: Number, default: 0},
    max: {type: Number, default: 100},
    color: String,
    centerColor: String,
    trackColor: String,
    fontSize: String,
    rounded: Boolean,
    thickness: {type: Number, default: .2, validator: e => e >= 0 && e <= 1},
    angle: {type: Number, default: 0},
    showValue: Boolean,
    reverse: Boolean,
    instantFeedback: Boolean
}, gs = 50, mp = 2 * gs, hp = mp * Math.PI, h1 = Math.round(1e3 * hp) / 1e3;
var _u = ve({
    name: "QCircularProgress",
    props: {
        ...yu,
        value: {type: Number, default: 0},
        animationSpeed: {type: [String, Number], default: 600},
        indeterminate: Boolean
    },
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Se(), o = Kn(e), l = f(() => {
                const v = (n.lang.rtl === !0 ? -1 : 1) * e.angle;
                return {transform: e.reverse !== (n.lang.rtl === !0) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - v}deg)` : `rotate3d(0, 0, 1, ${v - 90}deg)`}
            }),
            a = f(() => e.instantFeedback !== !0 && e.indeterminate !== !0 ? {transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`} : ""),
            i = f(() => mp / (1 - e.thickness / 2)), r = f(() => `${i.value / 2} ${i.value / 2} ${i.value} ${i.value}`),
            s = f(() => ct(e.value, e.min, e.max)), d = f(() => hp * (1 - (s.value - e.min) / (e.max - e.min))),
            c = f(() => e.thickness / 2 * i.value);

        function p({thickness: v, offset: m, color: g, cls: x, rounded: w}) {
            return u("circle", {
                class: "q-circular-progress__" + x + (g !== void 0 ? ` text-${g}` : ""),
                style: a.value,
                fill: "transparent",
                stroke: "currentColor",
                "stroke-width": v,
                "stroke-dasharray": h1,
                "stroke-dashoffset": m,
                "stroke-linecap": w,
                cx: i.value,
                cy: i.value,
                r: gs
            })
        }

        return () => {
            const v = [];
            e.centerColor !== void 0 && e.centerColor !== "transparent" && v.push(u("circle", {
                class: `q-circular-progress__center text-${e.centerColor}`,
                fill: "currentColor",
                r: gs - c.value / 2,
                cx: i.value,
                cy: i.value
            })), e.trackColor !== void 0 && e.trackColor !== "transparent" && v.push(p({
                cls: "track",
                thickness: c.value,
                offset: 0,
                color: e.trackColor
            })), v.push(p({
                cls: "circle",
                thickness: c.value,
                offset: d.value,
                color: e.color,
                rounded: e.rounded === !0 ? "round" : void 0
            }));
            const m = [u("svg", {
                class: "q-circular-progress__svg",
                style: l.value,
                viewBox: r.value,
                "aria-hidden": "true"
            }, v)];
            return e.showValue === !0 && m.push(u("div", {
                class: "q-circular-progress__text absolute-full row flex-center content-center",
                style: {fontSize: e.fontSize}
            }, t.default !== void 0 ? t.default() : [u("div", s.value)])), u("div", {
                class: `q-circular-progress q-circular-progress--${e.indeterminate === !0 ? "in" : ""}determinate`,
                style: o.value,
                role: "progressbar",
                "aria-valuemin": e.min,
                "aria-valuemax": e.max,
                "aria-valuenow": e.indeterminate === !0 ? void 0 : s.value
            }, Ys(t.internal, m))
        }
    }
});

function Mr(e, t, n) {
    const o = Wt(e);
    let l, a = o.left - t.event.x, i = o.top - t.event.y, r = Math.abs(a), s = Math.abs(i);
    const d = t.direction;
    d.horizontal === !0 && d.vertical !== !0 ? l = a < 0 ? "left" : "right" : d.horizontal !== !0 && d.vertical === !0 ? l = i < 0 ? "up" : "down" : d.up === !0 && i < 0 ? (l = "up", r > s && (d.left === !0 && a < 0 ? l = "left" : d.right === !0 && a > 0 && (l = "right"))) : d.down === !0 && i > 0 ? (l = "down", r > s && (d.left === !0 && a < 0 ? l = "left" : d.right === !0 && a > 0 && (l = "right"))) : d.left === !0 && a < 0 ? (l = "left", r < s && (d.up === !0 && i < 0 ? l = "up" : d.down === !0 && i > 0 && (l = "down"))) : d.right === !0 && a > 0 && (l = "right", r < s && (d.up === !0 && i < 0 ? l = "up" : d.down === !0 && i > 0 && (l = "down")));
    let c = !1;
    if (l === void 0 && n === !1) {
        if (t.event.isFirst === !0 || t.event.lastDir === void 0) return {};
        l = t.event.lastDir, c = !0, l === "left" || l === "right" ? (o.left -= a, r = 0, a = 0) : (o.top -= i, s = 0, i = 0)
    }
    return {
        synthetic: c,
        payload: {
            evt: e,
            touch: t.event.mouse !== !0,
            mouse: t.event.mouse === !0,
            position: o,
            direction: l,
            isFirst: t.event.isFirst,
            isFinal: n === !0,
            duration: Date.now() - t.event.time,
            distance: {x: r, y: s},
            offset: {x: a, y: i},
            delta: {x: o.left - t.event.lastX, y: o.top - t.event.lastY}
        }
    }
}

let g1 = 0;
var Jt = qn({
    name: "touch-pan", beforeMount(e, {value: t, modifiers: n}) {
        if (n.mouse !== !0 && Fe.has.touch !== !0) return;

        function o(a, i) {
            n.mouse === !0 && i === !0 ? Ie(a) : (n.stop === !0 && _t(a), n.prevent === !0 && Bt(a))
        }

        const l = {
            uid: "qvtp_" + g1++, handler: t, modifiers: n, direction: Ti(n), noop: xt, mouseStart(a) {
                $i(a, l) && tr(a) && (wt(l, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), l.start(a, !0))
            }, touchStart(a) {
                if ($i(a, l)) {
                    const i = a.target;
                    wt(l, "temp", [[i, "touchmove", "move", "notPassiveCapture"], [i, "touchcancel", "end", "passiveCapture"], [i, "touchend", "end", "passiveCapture"]]), l.start(a)
                }
            }, start(a, i) {
                if (Fe.is.firefox === !0 && il(e, !0), l.lastEvt = a, i === !0 || n.stop === !0) {
                    if (l.direction.all !== !0 && (i !== !0 || l.modifiers.mouseAllDir !== !0 && l.modifiers.mousealldir !== !0)) {
                        const d = a.type.indexOf("mouse") > -1 ? new MouseEvent(a.type, a) : new TouchEvent(a.type, a);
                        a.defaultPrevented === !0 && Bt(d), a.cancelBubble === !0 && _t(d), Object.assign(d, {
                            qKeyEvent: a.qKeyEvent,
                            qClickOutside: a.qClickOutside,
                            qAnchorHandled: a.qAnchorHandled,
                            qClonedBy: a.qClonedBy === void 0 ? [l.uid] : a.qClonedBy.concat(l.uid)
                        }), l.initialEvent = {target: a.target, event: d}
                    }
                    _t(a)
                }
                const {left: r, top: s} = Wt(a);
                l.event = {
                    x: r,
                    y: s,
                    time: Date.now(),
                    mouse: i === !0,
                    detected: !1,
                    isFirst: !0,
                    isFinal: !1,
                    lastX: r,
                    lastY: s
                }
            }, move(a) {
                if (l.event === void 0) return;
                const i = Wt(a), r = i.left - l.event.x, s = i.top - l.event.y;
                if (r === 0 && s === 0) return;
                l.lastEvt = a;
                const d = l.event.mouse === !0, c = () => {
                    let m;
                    o(a, d), n.preserveCursor !== !0 && n.preservecursor !== !0 && (m = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), d === !0 && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), xn(), l.styleCleanup = g => {
                        if (l.styleCleanup = void 0, m !== void 0 && (document.documentElement.style.cursor = m), document.body.classList.remove("non-selectable"), d === !0) {
                            const x = () => {
                                document.body.classList.remove("no-pointer-events--children")
                            };
                            g !== void 0 ? setTimeout(() => {
                                x(), g()
                            }, 50) : x()
                        } else g !== void 0 && g()
                    }
                };
                if (l.event.detected === !0) {
                    l.event.isFirst !== !0 && o(a, l.event.mouse);
                    const {payload: m, synthetic: g} = Mr(a, l, !1);
                    return void (m !== void 0 && (l.handler(m) === !1 ? l.end(a) : (l.styleCleanup === void 0 && l.event.isFirst === !0 && c(), l.event.lastX = m.position.left, l.event.lastY = m.position.top, l.event.lastDir = g === !0 ? void 0 : m.direction, l.event.isFirst = !1)))
                }
                if (l.direction.all === !0 || d === !0 && (l.modifiers.mouseAllDir === !0 || l.modifiers.mousealldir === !0)) return c(), l.event.detected = !0, void l.move(a);
                const p = Math.abs(r), v = Math.abs(s);
                p !== v && (l.direction.horizontal === !0 && p > v || l.direction.vertical === !0 && p < v || l.direction.up === !0 && p < v && s < 0 || l.direction.down === !0 && p < v && s > 0 || l.direction.left === !0 && p > v && r < 0 || l.direction.right === !0 && p > v && r > 0 ? (l.event.detected = !0, l.move(a)) : l.end(a, !0))
            }, end(a, i) {
                if (l.event !== void 0) {
                    if (Ht(l, "temp"), Fe.is.firefox === !0 && il(e, !1), i === !0) l.styleCleanup !== void 0 && l.styleCleanup(), l.event.detected !== !0 && l.initialEvent !== void 0 && l.initialEvent.target.dispatchEvent(l.initialEvent.event); else if (l.event.detected === !0) {
                        l.event.isFirst === !0 && l.handler(Mr(a === void 0 ? l.lastEvt : a, l).payload);
                        const {payload: r} = Mr(a === void 0 ? l.lastEvt : a, l, !0), s = () => {
                            l.handler(r)
                        };
                        l.styleCleanup !== void 0 ? l.styleCleanup(s) : s()
                    }
                    l.event = void 0, l.initialEvent = void 0, l.lastEvt = void 0
                }
            }
        };
        if (e.__qtouchpan = l, n.mouse === !0) {
            const a = n.mouseCapture === !0 || n.mousecapture === !0 ? "Capture" : "";
            wt(l, "main", [[e, "mousedown", "mouseStart", `passive${a}`]])
        }
        Fe.has.touch === !0 && wt(l, "main", [[e, "touchstart", "touchStart", `passive${n.capture === !0 ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]])
    }, updated(e, t) {
        const n = e.__qtouchpan;
        n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = Ti(t.modifiers))
    }, beforeUnmount(e) {
        const t = e.__qtouchpan;
        t !== void 0 && (t.event !== void 0 && t.end(), Ht(t, "main"), Ht(t, "temp"), Fe.is.firefox === !0 && il(e, !1), t.styleCleanup !== void 0 && t.styleCleanup(), delete e.__qtouchpan)
    }
});
const od = "q-slider__marker-labels", b1 = e => ({value: e}),
    y1 = ({marker: e}) => u("div", {key: e.value, style: e.style, class: e.classes}, e.label),
    wu = [34, 37, 40, 33, 39, 38], gp = {
        ...Ge, ...vn,
        min: {type: Number, default: 0},
        max: {type: Number, default: 100},
        innerMin: Number,
        innerMax: Number,
        step: {type: Number, default: 1, validator: e => e >= 0},
        snap: Boolean,
        vertical: Boolean,
        reverse: Boolean,
        hideSelection: Boolean,
        color: String,
        markerLabelsClass: String,
        label: Boolean,
        labelColor: String,
        labelTextColor: String,
        labelAlways: Boolean,
        switchLabelSide: Boolean,
        markers: [Boolean, Number],
        markerLabels: [Boolean, Array, Object, Function],
        switchMarkerLabelsSide: Boolean,
        trackImg: String,
        trackColor: String,
        innerTrackImg: String,
        innerTrackColor: String,
        selectionColor: String,
        selectionImg: String,
        thumbSize: {type: String, default: "20px"},
        trackSize: {type: String, default: "4px"},
        disable: Boolean,
        readonly: Boolean,
        dense: Boolean,
        tabindex: [String, Number],
        thumbColor: String,
        thumbPath: {type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}
    }, bp = ["pan", "update:modelValue", "change"];

function yp({updateValue: e, updatePosition: t, getDragging: n, formAttrs: o}) {
    const {props: l, emit: a, slots: i, proxy: {$q: r}} = Se(), s = Je(l, r), d = po(o), c = D(!1), p = D(!1),
        v = D(!1), m = D(!1), g = f(() => l.vertical === !0 ? "--v" : "--h"),
        x = f(() => "-" + (l.switchLabelSide === !0 ? "switched" : "standard")),
        w = f(() => l.vertical === !0 ? l.reverse === !0 : l.reverse !== (r.lang.rtl === !0)),
        S = f(() => isNaN(l.innerMin) === !0 || l.innerMin < l.min ? l.min : l.innerMin),
        y = f(() => isNaN(l.innerMax) === !0 || l.innerMax > l.max ? l.max : l.innerMax),
        b = f(() => l.disable !== !0 && l.readonly !== !0 && S.value < y.value),
        h = f(() => (String(l.step).trim().split(".")[1] || "").length), C = f(() => l.step === 0 ? 1 : l.step),
        A = f(() => b.value === !0 ? l.tabindex || 0 : -1), L = f(() => l.max - l.min), E = f(() => y.value - S.value),
        V = f(() => re(S.value)), O = f(() => re(y.value)),
        z = f(() => l.vertical === !0 ? w.value === !0 ? "bottom" : "top" : w.value === !0 ? "right" : "left"),
        M = f(() => l.vertical === !0 ? "height" : "width"), k = f(() => l.vertical === !0 ? "width" : "height"),
        B = f(() => l.vertical === !0 ? "vertical" : "horizontal"), Y = f(() => {
            const le = {
                role: "slider",
                "aria-valuemin": S.value,
                "aria-valuemax": y.value,
                "aria-orientation": B.value,
                "data-step": l.step
            };
            return l.disable === !0 ? le["aria-disabled"] = "true" : l.readonly === !0 && (le["aria-readonly"] = "true"), le
        }),
        J = f(() => `q-slider q-slider${g.value} q-slider--${c.value === !0 ? "" : "in"}active inline no-wrap ` + (l.vertical === !0 ? "row" : "column") + (l.disable === !0 ? " disabled" : " q-slider--enabled" + (b.value === !0 ? " q-slider--editable" : "")) + (v.value === "both" ? " q-slider--focus" : "") + (l.label || l.labelAlways === !0 ? " q-slider--label" : "") + (l.labelAlways === !0 ? " q-slider--label-always" : "") + (s.value === !0 ? " q-slider--dark" : "") + (l.dense === !0 ? " q-slider--dense q-slider--dense" + g.value : ""));

    function $(le) {
        const ye = "q-slider__" + le;
        return `${ye} ${ye}${g.value} ${ye}${g.value}${x.value}`
    }

    function Q(le) {
        const ye = "q-slider__" + le;
        return `${ye} ${ye}${g.value}`
    }

    const ae = f(() => {
            const le = l.selectionColor || l.color;
            return "q-slider__selection absolute" + (le !== void 0 ? ` text-${le}` : "")
        }), be = f(() => Q("markers") + " absolute overflow-hidden"), K = f(() => Q("track-container")),
        T = f(() => $("pin")), ee = f(() => $("label")), Z = f(() => $("text-container")),
        ie = f(() => $("marker-labels-container") + (l.markerLabelsClass !== void 0 ? ` ${l.markerLabelsClass}` : "")),
        G = f(() => "q-slider__track relative-position no-outline" + (l.trackColor !== void 0 ? ` bg-${l.trackColor}` : "")),
        I = f(() => {
            const le = {[k.value]: l.trackSize};
            return l.trackImg !== void 0 && (le.backgroundImage = `url(${l.trackImg}) !important`), le
        }), N = f(() => "q-slider__inner absolute" + (l.innerTrackColor !== void 0 ? ` bg-${l.innerTrackColor}` : "")),
        _ = f(() => {
            const le = O.value - V.value,
                ye = {[z.value]: `${100 * V.value}%`, [M.value]: le === 0 ? "2px" : `${100 * le}%`};
            return l.innerTrackImg !== void 0 && (ye.backgroundImage = `url(${l.innerTrackImg}) !important`), ye
        });

    function H(le) {
        const {min: ye, max: Te, step: Re} = l;
        let Me = ye + le * (Te - ye);
        if (Re > 0) {
            const Xe = (Me - ye) % Re;
            Me += (Math.abs(Xe) >= Re / 2 ? (Xe < 0 ? -1 : 1) * Re : 0) - Xe
        }
        return h.value > 0 && (Me = parseFloat(Me.toFixed(h.value))), ct(Me, S.value, y.value)
    }

    function re(le) {
        return L.value === 0 ? 0 : (le - l.min) / L.value
    }

    function q(le, ye) {
        const Te = Wt(le),
            Re = l.vertical === !0 ? ct((Te.top - ye.top) / ye.height, 0, 1) : ct((Te.left - ye.left) / ye.width, 0, 1);
        return ct(w.value === !0 ? 1 - Re : Re, V.value, O.value)
    }

    const P = f(() => da(l.markers) === !0 ? l.markers : C.value), F = f(() => {
        const le = [], ye = P.value, Te = l.max;
        let Re = l.min;
        do le.push(Re), Re += ye; while (Re < Te);
        return le.push(Te), le
    }), te = f(() => {
        const le = ` ${od}${g.value}-`;
        return od + `${le}${l.switchMarkerLabelsSide === !0 ? "switched" : "standard"}${le}${w.value === !0 ? "rtl" : "ltr"}`
    }), oe = f(() => l.markerLabels === !1 ? null : he(l.markerLabels).map((le, ye) => ({
        index: ye,
        value: le.value,
        label: le.label || le.value,
        classes: te.value + (le.classes !== void 0 ? " " + le.classes : ""),
        style: {...me(le.value), ...le.style || {}}
    }))), ne = f(() => ({markerList: oe.value, markerMap: W.value, classes: te.value, getStyle: me})), ge = f(() => {
        const le = E.value === 0 ? "2px" : 100 * P.value / E.value;
        return {..._.value, backgroundSize: l.vertical === !0 ? `2px ${le}%` : `${le}% 2px`}
    });

    function he(le) {
        if (le === !1) return null;
        if (le === !0) return F.value.map(b1);
        if (typeof le == "function") return F.value.map(Te => {
            const Re = le(Te);
            return Et(Re) === !0 ? {...Re, value: Te} : {value: Te, label: Re}
        });
        const ye = ({value: Te}) => Te >= l.min && Te <= l.max;
        return Array.isArray(le) === !0 ? le.map(Te => Et(Te) === !0 ? Te : {value: Te}).filter(ye) : Object.keys(le).map(Te => {
            const Re = le[Te], Me = Number(Te);
            return Et(Re) === !0 ? {...Re, value: Me} : {value: Me, label: Re}
        }).filter(ye)
    }

    function me(le) {
        return {[z.value]: `${100 * (le - l.min) / L.value}%`}
    }

    const W = f(() => {
        if (l.markerLabels === !1) return null;
        const le = {};
        return oe.value.forEach(ye => {
            le[ye.value] = ye
        }), le
    });

    function ue() {
        if (i["marker-label-group"] !== void 0) return i["marker-label-group"](ne.value);
        const le = i["marker-label"] || y1;
        return oe.value.map(ye => le({marker: ye, ...ne.value}))
    }

    const U = f(() => [[Jt, de, void 0, {[B.value]: !0, prevent: !0, stop: !0, mouse: !0, mouseAllDir: !0}]]);

    function de(le) {
        le.isFinal === !0 ? (m.value !== void 0 && (t(le.evt), le.touch === !0 && e(!0), m.value = void 0, a("pan", "end")), c.value = !1, v.value = !1) : le.isFirst === !0 ? (m.value = n(le.evt), t(le.evt), e(), c.value = !0, a("pan", "start")) : (t(le.evt), e())
    }

    function we() {
        v.value = !1
    }

    function xe(le) {
        t(le, n(le)), e(), p.value = !0, c.value = !0, document.addEventListener("mouseup", Ce, !0)
    }

    function Ce() {
        p.value = !1, c.value = !1, e(!0), we(), document.removeEventListener("mouseup", Ce, !0)
    }

    function Be(le) {
        t(le, n(le)), e(!0)
    }

    function Ne(le) {
        wu.includes(le.keyCode) && e(!0)
    }

    function Ye(le) {
        if (l.vertical === !0) return null;
        const ye = r.lang.rtl !== l.reverse ? 1 - le : le;
        return {transform: `translateX(calc(${2 * ye - 1} * ${l.thumbSize} / 2 + ${50 - 100 * ye}%))`}
    }

    function se(le) {
        const ye = f(() => p.value !== !1 || v.value !== le.focusValue && v.value !== "both" ? "" : " q-slider--focus"),
            Te = f(() => `q-slider__thumb q-slider__thumb${g.value} q-slider__thumb${g.value}-${w.value === !0 ? "rtl" : "ltr"} absolute non-selectable` + ye.value + (le.thumbColor.value !== void 0 ? ` text-${le.thumbColor.value}` : "")),
            Re = f(() => ({
                width: l.thumbSize,
                height: l.thumbSize,
                [z.value]: `${100 * le.ratio.value}%`,
                zIndex: v.value === le.focusValue ? 2 : void 0
            })), Me = f(() => le.labelColor.value !== void 0 ? ` text-${le.labelColor.value}` : ""),
            Xe = f(() => Ye(le.ratio.value)),
            dt = f(() => "q-slider__text" + (le.labelTextColor.value !== void 0 ? ` text-${le.labelTextColor.value}` : ""));
        return () => {
            const ht = [u("svg", {
                class: "q-slider__thumb-shape absolute-full",
                viewBox: "0 0 20 20",
                "aria-hidden": "true"
            }, [u("path", {d: l.thumbPath})]), u("div", {class: "q-slider__focus-ring fit"})];
            return l.label !== !0 && l.labelAlways !== !0 || (ht.push(u("div", {class: T.value + " absolute fit no-pointer-events" + Me.value}, [u("div", {
                class: ee.value,
                style: {minWidth: l.thumbSize}
            }, [u("div", {
                class: Z.value,
                style: Xe.value
            }, [u("span", {class: dt.value}, le.label.value)])])])), l.name !== void 0 && l.disable !== !0 && d(ht, "push")), u("div", {
                class: Te.value,
                style: Re.value, ...le.getNodeData()
            }, ht)
        }
    }

    function _e(le, ye, Te, Re) {
        const Me = [];
        l.innerTrackColor !== "transparent" && Me.push(u("div", {
            key: "inner",
            class: N.value,
            style: _.value
        })), l.selectionColor !== "transparent" && Me.push(u("div", {
            key: "selection",
            class: ae.value,
            style: le.value
        })), l.markers !== !1 && Me.push(u("div", {key: "marker", class: be.value, style: ge.value})), Re(Me);
        const Xe = [fn("div", {
            key: "trackC",
            class: K.value,
            tabindex: ye.value, ...Te.value
        }, [u("div", {class: G.value, style: I.value}, Me)], "slide", b.value, () => U.value)];
        if (l.markerLabels !== !1) {
            const dt = l.switchMarkerLabelsSide === !0 ? "unshift" : "push";
            Xe[dt](u("div", {key: "markerL", class: ie.value}, ue()))
        }
        return Xe
    }

    return Ke(() => {
        document.removeEventListener("mouseup", Ce, !0)
    }), {
        state: {
            active: c,
            focus: v,
            preventFocus: p,
            dragging: m,
            editable: b,
            classes: J,
            tabindex: A,
            attributes: Y,
            step: C,
            decimals: h,
            trackLen: L,
            innerMin: S,
            innerMinRatio: V,
            innerMax: y,
            innerMaxRatio: O,
            positionProp: z,
            sizeProp: M,
            isReversed: w
        },
        methods: {
            onActivate: xe,
            onMobileClick: Be,
            onBlur: we,
            onKeyup: Ne,
            getContent: _e,
            getThumbRenderFn: se,
            convertRatioToModel: H,
            convertModelToRatio: re,
            getDraggingRatio: q
        }
    }
}

const _1 = () => ({});
var Co = ve({
    name: "QSlider",
    props: {
        ...gp,
        modelValue: {required: !0, default: null, validator: e => typeof e == "number" || e === null},
        labelValue: [String, Number]
    },
    emits: bp,
    setup(e, {emit: t}) {
        const {proxy: {$q: n}} = Se(), {state: o, methods: l} = yp({
            updateValue: g,
            updatePosition: w,
            getDragging: x,
            formAttrs: xa(e)
        }), a = D(null), i = D(0), r = D(0);

        function s() {
            r.value = e.modelValue === null ? o.innerMin.value : ct(e.modelValue, o.innerMin.value, o.innerMax.value)
        }

        pe(() => `${e.modelValue}|${o.innerMin.value}|${o.innerMax.value}`, s), s();
        const d = f(() => l.convertModelToRatio(r.value)), c = f(() => o.active.value === !0 ? i.value : d.value),
            p = f(() => {
                const b = {
                    [o.positionProp.value]: `${100 * o.innerMinRatio.value}%`,
                    [o.sizeProp.value]: `${100 * (c.value - o.innerMinRatio.value)}%`
                };
                return e.selectionImg !== void 0 && (b.backgroundImage = `url(${e.selectionImg}) !important`), b
            }), v = l.getThumbRenderFn({
                focusValue: !0,
                getNodeData: _1,
                ratio: c,
                label: f(() => e.labelValue !== void 0 ? e.labelValue : r.value),
                thumbColor: f(() => e.thumbColor || e.color),
                labelColor: f(() => e.labelColor),
                labelTextColor: f(() => e.labelTextColor)
            }), m = f(() => o.editable.value !== !0 ? {} : n.platform.is.mobile === !0 ? {onClick: l.onMobileClick} : {
                onMousedown: l.onActivate,
                onFocus: S,
                onBlur: l.onBlur,
                onKeydown: y,
                onKeyup: l.onKeyup
            });

        function g(b) {
            r.value !== e.modelValue && t("update:modelValue", r.value), b === !0 && t("change", r.value)
        }

        function x() {
            return a.value.getBoundingClientRect()
        }

        function w(b, h = o.dragging.value) {
            const C = l.getDraggingRatio(b, h);
            r.value = l.convertRatioToModel(C), i.value = e.snap !== !0 || e.step === 0 ? C : l.convertModelToRatio(r.value)
        }

        function S() {
            o.focus.value = !0
        }

        function y(b) {
            if (!wu.includes(b.keyCode)) return;
            Ie(b);
            const h = ([34, 33].includes(b.keyCode) ? 10 : 1) * o.step.value,
                C = ([34, 37, 40].includes(b.keyCode) ? -1 : 1) * (o.isReversed.value === !0 ? -1 : 1) * (e.vertical === !0 ? -1 : 1) * h;
            r.value = ct(parseFloat((r.value + C).toFixed(o.decimals.value)), o.innerMin.value, o.innerMax.value), g()
        }

        return () => {
            const b = l.getContent(p, o.tabindex, m, h => {
                h.push(v())
            });
            return u("div", {
                ref: a,
                class: o.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...o.attributes.value,
                "aria-valuenow": e.modelValue
            }, b)
        }
    }
});

function _p() {
    const e = D(!en.value);
    return e.value === !1 && mt(() => {
        e.value = !0
    }), e
}

const wp = typeof ResizeObserver < "u", ld = wp === !0 ? {} : {
    style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
    url: "about:blank"
};
var co = ve({
    name: "QResizeObserver",
    props: {debounce: {type: [String, Number], default: 100}},
    emits: ["resize"],
    setup(e, {emit: t}) {
        let n, o = null, l = {width: -1, height: -1};

        function a(s) {
            s === !0 || e.debounce === 0 || e.debounce === "0" ? i() : o === null && (o = setTimeout(i, e.debounce))
        }

        function i() {
            if (o !== null && (clearTimeout(o), o = null), n) {
                const {offsetWidth: s, offsetHeight: d} = n;
                s === l.width && d === l.height || (l = {width: s, height: d}, t("resize", l))
            }
        }

        const {proxy: r} = Se();
        if (wp === !0) {
            let s;
            const d = c => {
                n = r.$el.parentNode, n ? (s = new ResizeObserver(a), s.observe(n), i()) : c !== !0 && We(() => {
                    d(!0)
                })
            };
            return mt(() => {
                d()
            }), Ke(() => {
                o !== null && clearTimeout(o), s !== void 0 && (s.disconnect !== void 0 ? s.disconnect() : n && s.unobserve(n))
            }), xt
        }
        {
            let c = function () {
                o !== null && (clearTimeout(o), o = null), d !== void 0 && (d.removeEventListener !== void 0 && d.removeEventListener("resize", a, ut.passive), d = void 0)
            }, p = function () {
                c(), n && n.contentDocument && (d = n.contentDocument.defaultView, d.addEventListener("resize", a, ut.passive), i())
            };
            const s = _p();
            let d;
            return mt(() => {
                We(() => {
                    n = r.$el, n && p()
                })
            }), Ke(c), r.trigger = a, () => {
                if (s.value === !0) return u("object", {
                    style: ld.style,
                    tabindex: -1,
                    type: "text/html",
                    data: ld.url,
                    "aria-hidden": "true",
                    onLoad: p
                })
            }
        }
    }
});
let va = !1;
{
    const e = document.createElement("div");
    e.setAttribute("dir", "rtl"), Object.assign(e.style, {width: "1px", height: "1px", overflow: "auto"});
    const t = document.createElement("div");
    Object.assign(t.style, {
        width: "1000px",
        height: "1px"
    }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, va = e.scrollLeft >= 0, e.remove()
}

function w1(e, t, n) {
    const o = n === !0 ? ["left", "right"] : ["top", "bottom"];
    return `absolute-${t === !0 ? o[0] : o[1]}${e ? ` text-${e}` : ""}`
}

const x1 = ["left", "center", "right", "justify"];
var bs = ve({
    name: "QTabs",
    props: {
        modelValue: [Number, String],
        align: {type: String, default: "center", validator: e => x1.includes(e)},
        breakpoint: {type: [String, Number], default: 600},
        vertical: Boolean,
        shrink: Boolean,
        stretch: Boolean,
        activeClass: String,
        activeColor: String,
        activeBgColor: String,
        indicatorColor: String,
        leftIcon: String,
        rightIcon: String,
        outsideArrows: Boolean,
        mobileArrows: Boolean,
        switchIndicator: Boolean,
        narrowIndicator: Boolean,
        inlineLabel: Boolean,
        noCaps: Boolean,
        dense: Boolean,
        contentClass: String,
        "onUpdate:modelValue": [Function, Array]
    },
    setup(e, {slots: t, emit: n}) {
        const {proxy: o} = Se(), {$q: l} = o, {registerTick: a} = ul(), {registerTick: i} = ul(), {registerTick: r} = ul(), {
                registerTimeout: s,
                removeTimeout: d
            } = _l(), {registerTimeout: c, removeTimeout: p} = _l(), v = D(null), m = D(null), g = D(e.modelValue),
            x = D(!1), w = D(!0), S = D(!1), y = D(!1), b = [], h = D(0), C = D(!1);
        let A, L = null, E = null;
        const V = f(() => ({
                activeClass: e.activeClass,
                activeColor: e.activeColor,
                activeBgColor: e.activeBgColor,
                indicatorClass: w1(e.indicatorColor, e.switchIndicator, e.vertical),
                narrowIndicator: e.narrowIndicator,
                inlineLabel: e.inlineLabel,
                noCaps: e.noCaps
            })), O = f(() => {
                const W = h.value, ue = g.value;
                for (let U = 0; U < W; U++) if (b[U].name.value === ue) return !0;
                return !1
            }), z = f(() => `q-tabs__content--align-${x.value === !0 ? "left" : y.value === !0 ? "justify" : e.align}`),
            M = f(() => `q-tabs row no-wrap items-center q-tabs--${x.value === !0 ? "" : "not-"}scrollable q-tabs--${e.vertical === !0 ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === !0 ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === !0 ? "" : "out"}-arrows` + (e.dense === !0 ? " q-tabs--dense" : "") + (e.shrink === !0 ? " col-shrink" : "") + (e.stretch === !0 ? " self-stretch" : "")),
            k = f(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + z.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")),
            B = f(() => e.vertical === !0 ? {
                container: "height",
                content: "offsetHeight",
                scroll: "scrollHeight"
            } : {container: "width", content: "offsetWidth", scroll: "scrollWidth"}),
            Y = f(() => e.vertical !== !0 && l.lang.rtl === !0), J = f(() => va === !1 && Y.value === !0);

        function $({name: W, setCurrent: ue, skipEmit: U}) {
            g.value !== W && (U !== !0 && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", W), ue !== !0 && e["onUpdate:modelValue"] !== void 0 || (be(g.value, W), g.value = W))
        }

        function Q() {
            a(() => {
                ae({width: v.value.offsetWidth, height: v.value.offsetHeight})
            })
        }

        function ae(W) {
            if (B.value === void 0 || m.value === null) return;
            const ue = W[B.value.container],
                U = Math.min(m.value[B.value.scroll], Array.prototype.reduce.call(m.value.children, (we, xe) => we + (xe[B.value.content] || 0), 0)),
                de = ue > 0 && U > ue;
            x.value = de, de === !0 && i(T), y.value = ue < parseInt(e.breakpoint, 10)
        }

        function be(W, ue) {
            const U = W != null && W !== "" ? b.find(we => we.name.value === W) : null,
                de = ue != null && ue !== "" ? b.find(we => we.name.value === ue) : null;
            if (U && de) {
                const we = U.tabIndicatorRef.value, xe = de.tabIndicatorRef.value;
                L !== null && (clearTimeout(L), L = null), we.style.transition = "none", we.style.transform = "none", xe.style.transition = "none", xe.style.transform = "none";
                const Ce = we.getBoundingClientRect(), Be = xe.getBoundingClientRect();
                xe.style.transform = e.vertical === !0 ? `translate3d(0,${Ce.top - Be.top}px,0) scale3d(1,${Be.height ? Ce.height / Be.height : 1},1)` : `translate3d(${Ce.left - Be.left}px,0,0) scale3d(${Be.width ? Ce.width / Be.width : 1},1,1)`, r(() => {
                    L = setTimeout(() => {
                        L = null, xe.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", xe.style.transform = "none"
                    }, 70)
                })
            }
            de && x.value === !0 && K(de.rootRef.value)
        }

        function K(W) {
            const {left: ue, width: U, top: de, height: we} = m.value.getBoundingClientRect(),
                xe = W.getBoundingClientRect();
            let Ce = e.vertical === !0 ? xe.top - de : xe.left - ue;
            if (Ce < 0) return m.value[e.vertical === !0 ? "scrollTop" : "scrollLeft"] += Math.floor(Ce), void T();
            Ce += e.vertical === !0 ? xe.height - we : xe.width - U, Ce > 0 && (m.value[e.vertical === !0 ? "scrollTop" : "scrollLeft"] += Math.ceil(Ce), T())
        }

        function T() {
            const W = m.value;
            if (W === null) return;
            const ue = W.getBoundingClientRect(), U = e.vertical === !0 ? W.scrollTop : Math.abs(W.scrollLeft);
            Y.value === !0 ? (w.value = Math.ceil(U + ue.width) < W.scrollWidth - 1, S.value = U > 0) : (w.value = U > 0, S.value = e.vertical === !0 ? Math.ceil(U + ue.height) < W.scrollHeight : Math.ceil(U + ue.width) < W.scrollWidth)
        }

        function ee(W) {
            E !== null && clearInterval(E), E = setInterval(() => {
                _(W) === !0 && G()
            }, 5)
        }

        function Z() {
            ee(J.value === !0 ? Number.MAX_SAFE_INTEGER : 0)
        }

        function ie() {
            ee(J.value === !0 ? 0 : Number.MAX_SAFE_INTEGER)
        }

        function G() {
            E !== null && (clearInterval(E), E = null)
        }

        function I(W, ue) {
            const U = Array.prototype.filter.call(m.value.children, Be => Be === ue || Be.matches && Be.matches(".q-tab.q-focusable") === !0),
                de = U.length;
            if (de === 0) return;
            if (W === 36) return K(U[0]), U[0].focus(), !0;
            if (W === 35) return K(U[de - 1]), U[de - 1].focus(), !0;
            const we = W === (e.vertical === !0 ? 38 : 37), xe = W === (e.vertical === !0 ? 40 : 39),
                Ce = we === !0 ? -1 : xe === !0 ? 1 : void 0;
            if (Ce !== void 0) {
                const Be = Y.value === !0 ? -1 : 1, Ne = U.indexOf(ue) + Ce * Be;
                return Ne >= 0 && Ne < de && (K(U[Ne]), U[Ne].focus({preventScroll: !0})), !0
            }
        }

        pe(Y, T), pe(() => e.modelValue, W => {
            $({name: W, setCurrent: !0, skipEmit: !0})
        }), pe(() => e.outsideArrows, Q);
        const N = f(() => J.value === !0 ? {
            get: W => Math.abs(W.scrollLeft), set: (W, ue) => {
                W.scrollLeft = -ue
            }
        } : e.vertical === !0 ? {
            get: W => W.scrollTop, set: (W, ue) => {
                W.scrollTop = ue
            }
        } : {
            get: W => W.scrollLeft, set: (W, ue) => {
                W.scrollLeft = ue
            }
        });

        function _(W) {
            const ue = m.value, {get: U, set: de} = N.value;
            let we = !1, xe = U(ue);
            const Ce = W < xe ? -1 : 1;
            return xe += 5 * Ce, xe < 0 ? (we = !0, xe = 0) : (Ce === -1 && xe <= W || Ce === 1 && xe >= W) && (we = !0, xe = W), de(ue, xe), T(), we
        }

        function H(W, ue) {
            for (const U in W) if (W[U] !== ue[U]) return !1;
            return !0
        }

        function re() {
            let W = null, ue = {matchedLen: 0, queryDiff: 9999, hrefLen: 0};
            const U = b.filter(Ce => Ce.routeData !== void 0 && Ce.routeData.hasRouterLink.value === !0), {
                hash: de,
                query: we
            } = o.$route, xe = Object.keys(we).length;
            for (const Ce of U) {
                const Be = Ce.routeData.exact.value === !0;
                if (Ce.routeData[Be === !0 ? "linkIsExactActive" : "linkIsActive"].value !== !0) continue;
                const {hash: Ne, query: Ye, matched: se, href: _e} = Ce.routeData.resolvedLink.value,
                    le = Object.keys(Ye).length;
                if (Be === !0) {
                    if (Ne !== de || le !== xe || H(we, Ye) === !1) continue;
                    W = Ce.name.value;
                    break
                }
                if (Ne !== "" && Ne !== de || le !== 0 && H(Ye, we) === !1) continue;
                const ye = {matchedLen: se.length, queryDiff: xe - le, hrefLen: _e.length - Ne.length};
                if (ye.matchedLen > ue.matchedLen) W = Ce.name.value, ue = ye; else if (ye.matchedLen === ue.matchedLen) {
                    if (ye.queryDiff < ue.queryDiff) W = Ce.name.value, ue = ye; else if (ye.queryDiff !== ue.queryDiff) continue;
                    ye.hrefLen > ue.hrefLen && (W = Ce.name.value, ue = ye)
                }
            }
            W === null && b.some(Ce => Ce.routeData === void 0 && Ce.name.value === g.value) === !0 || $({
                name: W,
                setCurrent: !0
            })
        }

        function q(W) {
            if (d(), C.value !== !0 && v.value !== null && W.target && typeof W.target.closest == "function") {
                const ue = W.target.closest(".q-tab");
                ue && v.value.contains(ue) === !0 && (C.value = !0, x.value === !0 && K(ue))
            }
        }

        function P() {
            s(() => {
                C.value = !1
            }, 30)
        }

        function F() {
            ge.avoidRouteWatcher === !1 ? c(re) : p()
        }

        function te() {
            if (A === void 0) {
                const W = pe(() => o.$route.fullPath, F);
                A = () => {
                    W(), A = void 0
                }
            }
        }

        function oe(W) {
            b.push(W), h.value++, Q(), W.routeData === void 0 || o.$route === void 0 ? c(() => {
                if (x.value === !0) {
                    const ue = g.value, U = ue != null && ue !== "" ? b.find(de => de.name.value === ue) : null;
                    U && K(U.rootRef.value)
                }
            }) : (te(), W.routeData.hasRouterLink.value === !0 && F())
        }

        function ne(W) {
            b.splice(b.indexOf(W), 1), h.value--, Q(), A !== void 0 && W.routeData !== void 0 && (b.every(ue => ue.routeData === void 0) === !0 && A(), F())
        }

        const ge = {
            currentModel: g,
            tabProps: V,
            hasFocus: C,
            hasActiveTab: O,
            registerTab: oe,
            unregisterTab: ne,
            verifyRouteModel: F,
            updateModel: $,
            onKbdNavigate: I,
            avoidRouteWatcher: !1
        };

        function he() {
            L !== null && clearTimeout(L), G(), A !== void 0 && A()
        }

        let me;
        return un(Lv, ge), Ke(he), kn(() => {
            me = A !== void 0, he()
        }), Hn(() => {
            me === !0 && te(), Q()
        }), () => u("div", {
            ref: v,
            class: M.value,
            role: "tablist",
            onFocusin: q,
            onFocusout: P
        }, [u(co, {onResize: ae}), u("div", {
            ref: m,
            class: k.value,
            onScroll: T
        }, Ae(t.default)), u(Ze, {
            class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (w.value === !0 ? "" : " q-tabs__arrow--faded"),
            name: e.leftIcon || l.iconSet.tabs[e.vertical === !0 ? "up" : "left"],
            onMousedownPassive: Z,
            onTouchstartPassive: Z,
            onMouseupPassive: G,
            onMouseleavePassive: G,
            onTouchendPassive: G
        }), u(Ze, {
            class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (S.value === !0 ? "" : " q-tabs__arrow--faded"),
            name: e.rightIcon || l.iconSet.tabs[e.vertical === !0 ? "down" : "right"],
            onMousedownPassive: ie,
            onTouchstartPassive: ie,
            onMouseupPassive: G,
            onMouseleavePassive: G,
            onTouchendPassive: G
        })])
    }
});
let S1 = 0;
const xp = ["click", "keydown"], Sp = {
    icon: String,
    label: [Number, String],
    alert: [Boolean, String],
    alertIcon: String,
    name: {type: [Number, String], default: () => `t_${S1++}`},
    noCaps: Boolean,
    tabindex: [String, Number],
    disable: Boolean,
    contentClass: String,
    ripple: {type: [Boolean, Object], default: !0}
};

function Cp(e, t, n, o) {
    const l = vt(Lv, at);
    if (l === at) return console.error("QTab/QRouteTab component needs to be child of QTabs"), at;
    const {proxy: a} = Se(), i = D(null), r = D(null), s = D(null),
        d = f(() => e.disable !== !0 && e.ripple !== !1 && Object.assign({
            keyCodes: [13, 32],
            early: !0
        }, e.ripple === !0 ? {} : e.ripple)), c = f(() => l.currentModel.value === e.name),
        p = f(() => "q-tab relative-position self-stretch flex flex-center text-center" + (c.value === !0 ? " q-tab--active" + (l.tabProps.value.activeClass ? " " + l.tabProps.value.activeClass : "") + (l.tabProps.value.activeColor ? ` text-${l.tabProps.value.activeColor}` : "") + (l.tabProps.value.activeBgColor ? ` bg-${l.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && l.tabProps.value.inlineLabel === !1 ? " q-tab--full" : "") + (e.noCaps === !0 || l.tabProps.value.noCaps === !0 ? " q-tab--no-caps" : "") + (e.disable === !0 ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (o !== void 0 ? o.linkClass.value : "")),
        v = f(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (l.tabProps.value.inlineLabel === !0 ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")),
        m = f(() => e.disable === !0 || l.hasFocus.value === !0 || c.value === !1 && l.hasActiveTab.value === !0 ? -1 : e.tabindex || 0);

    function g(b, h) {
        if (h !== !0 && i.value !== null && i.value.focus(), e.disable !== !0) {
            if (o === void 0) return l.updateModel({name: e.name}), void n("click", b);
            if (o.hasRouterLink.value === !0) {
                const C = (A = {}) => {
                    let L;
                    const E = A.to === void 0 || yn(A.to, e.to) === !0 ? l.avoidRouteWatcher = xl() : null;
                    return o.navigateToRouterLink(b, {...A, returnRouterError: !0}).catch(V => {
                        L = V
                    }).then(V => {
                        if (E === l.avoidRouteWatcher && (l.avoidRouteWatcher = !1, L !== void 0 || V !== void 0 && V.message.startsWith("Avoided redundant navigation") !== !0 || l.updateModel({name: e.name})), A.returnRouterError === !0) return L !== void 0 ? Promise.reject(L) : V
                    })
                };
                return n("click", b, C), void (b.defaultPrevented !== !0 && C())
            }
            n("click", b)
        } else o !== void 0 && o.hasRouterLink.value === !0 && Ie(b)
    }

    function x(b) {
        dn(b, [13, 32]) ? g(b, !0) : zo(b) !== !0 && b.keyCode >= 35 && b.keyCode <= 40 && b.altKey !== !0 && b.metaKey !== !0 && l.onKbdNavigate(b.keyCode, a.$el) === !0 && Ie(b), n("keydown", b)
    }

    function w() {
        const b = l.tabProps.value.narrowIndicator, h = [],
            C = u("div", {ref: s, class: ["q-tab__indicator", l.tabProps.value.indicatorClass]});
        e.icon !== void 0 && h.push(u(Ze, {
            class: "q-tab__icon",
            name: e.icon
        })), e.label !== void 0 && h.push(u("div", {class: "q-tab__label"}, e.label)), e.alert !== !1 && h.push(e.alertIcon !== void 0 ? u(Ze, {
            class: "q-tab__alert-icon",
            color: e.alert !== !0 ? e.alert : void 0,
            name: e.alertIcon
        }) : u("div", {class: "q-tab__alert" + (e.alert !== !0 ? ` text-${e.alert}` : "")})), b === !0 && h.push(C);
        const A = [u("div", {
            class: "q-focus-helper",
            tabindex: -1,
            ref: i
        }), u("div", {class: v.value}, St(t.default, h))];
        return b === !1 && A.push(C), A
    }

    const S = {name: f(() => e.name), rootRef: r, tabIndicatorRef: s, routeData: o};

    function y(b, h) {
        const C = {
            ref: r,
            class: p.value,
            tabindex: m.value,
            role: "tab",
            "aria-selected": c.value === !0 ? "true" : "false",
            "aria-disabled": e.disable === !0 ? "true" : void 0,
            onClick: g,
            onKeydown: x, ...h
        };
        return Sn(u(b, C, w()), [[ba, d.value]])
    }

    return Ke(() => {
        l.unregisterTab(S)
    }), mt(() => {
        l.registerTab(S)
    }), {renderTab: y, $tabs: l}
}

var Zo = ve({
    name: "QTab", props: Sp, emits: xp, setup(e, {slots: t, emit: n}) {
        const {renderTab: o} = Cp(e, t, n);
        return () => o("div")
    }
}), kp = ve({
    name: "QTabPanels", props: {...fu, ...Ge}, emits: vu, setup(e, {slots: t}) {
        const n = Se(), o = Je(e, n.proxy.$q), {updatePanelsList: l, getPanelContent: a, panelDirectives: i} = pu(),
            r = f(() => "q-tab-panels q-panel-parent" + (o.value === !0 ? " q-tab-panels--dark q-dark" : ""));
        return () => (l(t), fn("div", {class: r.value}, a(), "pan", e.swipeable, () => i.value))
    }
}), ti = ve({
    name: "QTabPanel", props: du, setup(e, {slots: t}) {
        return () => u("div", {class: "q-tab-panel", role: "tabpanel"}, Ae(t.default))
    }
});
const ad = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, id = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
    rd = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    Fa = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
    za = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
    ni = {
        date: e => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
        time: e => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
        fulltime: e => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
        timeOrFulltime: e => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
        email: e => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),
        hexColor: e => ad.test(e),
        hexaColor: e => id.test(e),
        hexOrHexaColor: e => rd.test(e),
        rgbColor: e => Fa.test(e),
        rgbaColor: e => za.test(e),
        rgbOrRgbaColor: e => Fa.test(e) || za.test(e),
        hexOrRgbColor: e => ad.test(e) || Fa.test(e),
        hexaOrRgbaColor: e => id.test(e) || za.test(e),
        anyColor: e => rd.test(e) || Fa.test(e) || za.test(e)
    }, C1 = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;

function sd({r: e, g: t, b: n, a: o}) {
    const l = o !== void 0;
    if (e = Math.round(e), t = Math.round(t), n = Math.round(n), e > 255 || t > 255 || n > 255 || l && o > 100) throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
    return o = l ? (256 | Math.round(255 * o / 100)).toString(16).slice(1) : "", "#" + (n | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + o
}

function ud({r: e, g: t, b: n, a: o}) {
    return `rgb${o !== void 0 ? "a" : ""}(${e},${t},${n}${o !== void 0 ? "," + o / 100 : ""})`
}

function qp(e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
    const t = parseInt(e, 16);
    return e.length > 6 ? {
        r: t >> 24 & 255,
        g: t >> 16 & 255,
        b: t >> 8 & 255,
        a: Math.round((255 & t) / 2.55)
    } : {r: t >> 16, g: t >> 8 & 255, b: 255 & t}
}

function cd({h: e, s: t, v: n, a: o}) {
    let l, a, i;
    t /= 100, n /= 100, e /= 360;
    const r = Math.floor(6 * e), s = 6 * e - r, d = n * (1 - t), c = n * (1 - s * t), p = n * (1 - (1 - s) * t);
    switch (r % 6) {
        case 0:
            l = n, a = p, i = d;
            break;
        case 1:
            l = c, a = n, i = d;
            break;
        case 2:
            l = d, a = n, i = p;
            break;
        case 3:
            l = d, a = c, i = n;
            break;
        case 4:
            l = p, a = d, i = n;
            break;
        case 5:
            l = n, a = d, i = c;
            break
    }
    return {r: Math.round(255 * l), g: Math.round(255 * a), b: Math.round(255 * i), a: o}
}

function Er({r: e, g: t, b: n, a: o}) {
    const l = Math.max(e, t, n), a = Math.min(e, t, n), i = l - a, r = l === 0 ? 0 : i / l, s = l / 255;
    let d;
    switch (l) {
        case a:
            d = 0;
            break;
        case e:
            d = t - n + i * (t < n ? 6 : 0), d /= 6 * i;
            break;
        case t:
            d = n - e + 2 * i, d /= 6 * i;
            break;
        case n:
            d = e - t + 4 * i, d /= 6 * i;
            break
    }
    return {h: Math.round(360 * d), s: Math.round(100 * r), v: Math.round(100 * s), a: o}
}

function Tp(e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    const t = e.replace(/ /g, ""), n = C1.exec(t);
    if (n === null) return qp(t);
    const o = {
        r: Math.min(255, parseInt(n[2], 10)),
        g: Math.min(255, parseInt(n[3], 10)),
        b: Math.min(255, parseInt(n[4], 10))
    };
    if (n[1]) {
        const l = parseFloat(n[5]);
        o.a = 100 * Math.min(1, isNaN(l) === !0 ? 1 : l)
    }
    return o
}

function k1(e) {
    if (typeof e != "string" && (!e || e.r === void 0)) throw new TypeError("Expected a string or a {r, g, b} object as color");
    const t = typeof e == "string" ? Tp(e) : e, n = t.r / 255, o = t.g / 255, l = t.b / 255,
        a = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4),
        i = o <= .03928 ? o / 12.92 : Math.pow((o + .055) / 1.055, 2.4),
        r = l <= .03928 ? l / 12.92 : Math.pow((l + .055) / 1.055, 2.4);
    return .2126 * a + .7152 * i + .0722 * r
}

const q1 = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"],
    dd = "M5 5 h10 v10 h-10 v-10 z",
    T1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
var $1 = ve({
    name: "QColor",
    props: {
        ...Ge, ...vn,
        modelValue: String,
        defaultValue: String,
        defaultView: {type: String, default: "spectrum", validator: e => ["spectrum", "tune", "palette"].includes(e)},
        formatModel: {
            type: String,
            default: "auto",
            validator: e => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e)
        },
        palette: Array,
        noHeader: Boolean,
        noHeaderTabs: Boolean,
        noFooter: Boolean,
        square: Boolean,
        flat: Boolean,
        bordered: Boolean,
        disable: Boolean,
        readonly: Boolean
    },
    emits: ["update:modelValue", "change"],
    setup(e, {emit: t}) {
        const {proxy: n} = Se(), {$q: o} = n, l = Je(e, o), {getCache: a} = Sa(), i = D(null), r = D(null),
            s = f(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") > -1),
            d = f(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") > -1),
            c = D(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"),
            p = D(e.defaultView), v = D(M(e.modelValue || e.defaultValue)),
            m = f(() => e.disable !== !0 && e.readonly !== !0),
            g = f(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")),
            x = f(() => s.value !== null ? s.value : g.value),
            w = f(() => ({type: "hidden", name: e.name, value: v.value[x.value === !0 ? "hex" : "rgb"]})), S = po(w),
            y = f(() => d.value !== null ? d.value : v.value.a !== void 0),
            b = f(() => ({backgroundColor: v.value.rgb || "#000"})),
            h = f(() => `q-color-picker__header-content q-color-picker__header-content--${v.value.a !== void 0 && v.value.a < 65 || k1(v.value) > .4 ? "light" : "dark"}`),
            C = f(() => ({background: `hsl(${v.value.h},100%,50%)`})),
            A = f(() => ({top: `${100 - v.value.v}%`, [o.lang.rtl === !0 ? "right" : "left"]: `${v.value.s}%`})),
            L = f(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : q1),
            E = f(() => "q-color-picker" + (e.bordered === !0 ? " q-color-picker--bordered" : "") + (e.square === !0 ? " q-color-picker--square no-border-radius" : "") + (e.flat === !0 ? " q-color-picker--flat no-shadow" : "") + (e.disable === !0 ? " disabled" : "") + (l.value === !0 ? " q-color-picker--dark q-dark" : "")),
            V = f(() => e.disable === !0 ? {"aria-disabled": "true"} : e.readonly === !0 ? {"aria-readonly": "true"} : {}),
            O = f(() => [[Jt, Q, void 0, {prevent: !0, stop: !0, mouse: !0}]]);

        function z(_, H) {
            v.value.hex = sd(_), v.value.rgb = ud(_), v.value.r = _.r, v.value.g = _.g, v.value.b = _.b, v.value.a = _.a;
            const re = v.value[x.value === !0 ? "hex" : "rgb"];
            t("update:modelValue", re), H === !0 && t("change", re)
        }

        function M(_) {
            const H = d.value !== void 0 ? d.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") > -1;
            if (typeof _ != "string" || _.length === 0 || ni.anyColor(_.replace(/ /g, "")) !== !0) return {
                h: 0,
                s: 0,
                v: 0,
                r: 0,
                g: 0,
                b: 0,
                a: H === !0 ? 100 : void 0,
                hex: void 0,
                rgb: void 0
            };
            const re = Tp(_);
            return H === !0 && re.a === void 0 && (re.a = 100), re.hex = sd(re), re.rgb = ud(re), Object.assign(re, Er(re))
        }

        function k(_, H, re) {
            const q = i.value;
            if (q === null) return;
            const P = q.clientWidth, F = q.clientHeight, te = q.getBoundingClientRect();
            let oe = Math.min(P, Math.max(0, _ - te.left));
            o.lang.rtl === !0 && (oe = P - oe);
            const ne = Math.min(F, Math.max(0, H - te.top)), ge = Math.round(100 * oe / P),
                he = Math.round(100 * Math.max(0, Math.min(1, -ne / F + 1))),
                me = cd({h: v.value.h, s: ge, v: he, a: y.value === !0 ? v.value.a : void 0});
            v.value.s = ge, v.value.v = he, z(me, re)
        }

        function B(_, H) {
            const re = Math.round(_),
                q = cd({h: re, s: v.value.s, v: v.value.v, a: y.value === !0 ? v.value.a : void 0});
            v.value.h = re, z(q, H)
        }

        function Y(_, H, re, q, P) {
            if (q !== void 0 && _t(q), !/^[0-9]+$/.test(_)) return void (P === !0 && n.$forceUpdate());
            const F = Math.floor(Number(_));
            if (F < 0 || F > re) return void (P === !0 && n.$forceUpdate());
            const te = {
                r: H === "r" ? F : v.value.r,
                g: H === "g" ? F : v.value.g,
                b: H === "b" ? F : v.value.b,
                a: y.value === !0 ? H === "a" ? F : v.value.a : void 0
            };
            if (H !== "a") {
                const oe = Er(te);
                v.value.h = oe.h, v.value.s = oe.s, v.value.v = oe.v
            }
            if (z(te, P), q !== void 0 && P !== !0 && q.target.selectionEnd !== void 0) {
                const oe = q.target.selectionEnd;
                We(() => {
                    q.target.setSelectionRange(oe, oe)
                })
            }
        }

        function J(_, H) {
            let re;
            const q = _.target.value;
            if (_t(_), c.value === "hex") {
                if (q.length !== (y.value === !0 ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(q)) return !0;
                re = qp(q)
            } else {
                let F;
                if (!q.endsWith(")")) return !0;
                if (y.value !== !0 && q.startsWith("rgb(")) {
                    if (F = q.substring(4, q.length - 1).split(",").map(te => parseInt(te, 10)), F.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(q)) return !0
                } else {
                    if (y.value !== !0 || !q.startsWith("rgba(")) return !0;
                    {
                        if (F = q.substring(5, q.length - 1).split(","), F.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(q)) return !0;
                        for (let oe = 0; oe < 3; oe++) {
                            const ne = parseInt(F[oe], 10);
                            if (ne < 0 || ne > 255) return !0;
                            F[oe] = ne
                        }
                        const te = parseFloat(F[3]);
                        if (te < 0 || te > 1) return !0;
                        F[3] = te
                    }
                }
                if (F[0] < 0 || F[0] > 255 || F[1] < 0 || F[1] > 255 || F[2] < 0 || F[2] > 255 || y.value === !0 && (F[3] < 0 || F[3] > 1)) return !0;
                re = {r: F[0], g: F[1], b: F[2], a: y.value === !0 ? 100 * F[3] : void 0}
            }
            const P = Er(re);
            if (v.value.h = P.h, v.value.s = P.s, v.value.v = P.v, z(re, H), H !== !0) {
                const F = _.target.selectionEnd;
                We(() => {
                    _.target.setSelectionRange(F, F)
                })
            }
        }

        function $(_) {
            const H = M(_), re = {r: H.r, g: H.g, b: H.b, a: H.a};
            re.a === void 0 && (re.a = v.value.a), v.value.h = H.h, v.value.s = H.s, v.value.v = H.v, z(re, !0)
        }

        function Q(_) {
            _.isFinal ? k(_.position.left, _.position.top, !0) : ae(_)
        }

        pe(() => e.modelValue, _ => {
            const H = M(_ || e.defaultValue);
            H.hex !== v.value.hex && (v.value = H)
        }), pe(() => e.defaultValue, _ => {
            if (!e.modelValue && _) {
                const H = M(_);
                H.hex !== v.value.hex && (v.value = H)
            }
        });
        const ae = Uv(_ => {
            k(_.position.left, _.position.top)
        }, 20);

        function be(_) {
            k(_.pageX - window.pageXOffset, _.pageY - window.pageYOffset, !0)
        }

        function K(_) {
            k(_.pageX - window.pageXOffset, _.pageY - window.pageYOffset)
        }

        function T(_) {
            r.value !== null && (r.value.$el.style.opacity = _ ? 1 : 0)
        }

        function ee() {
            const _ = [];
            return e.noHeaderTabs !== !0 && _.push(u(bs, {
                class: "q-color-picker__header-tabs",
                modelValue: c.value,
                dense: !0,
                align: "justify", ...a("topVTab", {
                    "onUpdate:modelValue": H => {
                        c.value = H
                    }
                })
            }, () => [u(Zo, {
                label: "HEX" + (y.value === !0 ? "A" : ""),
                name: "hex",
                ripple: !1
            }), u(Zo, {
                label: "RGB" + (y.value === !0 ? "A" : ""),
                name: "rgb",
                ripple: !1
            })])), _.push(u("div", {class: "q-color-picker__header-banner row flex-center no-wrap"}, [u("input", {
                class: "fit",
                value: v.value[c.value], ...m.value !== !0 ? {readonly: !0} : {}, ...a("topIn", {
                    onInput: H => {
                        T(J(H) === !0)
                    }, onChange: _t, onBlur: H => {
                        J(H, !0) === !0 && n.$forceUpdate(), T(!1)
                    }
                })
            }), u(Ze, {
                ref: r,
                class: "q-color-picker__error-icon absolute no-pointer-events",
                name: o.iconSet.type.negative
            })])), u("div", {class: "q-color-picker__header relative-position overflow-hidden"}, [u("div", {class: "q-color-picker__header-bg absolute-full"}), u("div", {
                class: h.value,
                style: b.value
            }, _)])
        }

        function Z() {
            return u(kp, {
                modelValue: p.value,
                animated: !0
            }, () => [u(ti, {
                class: "q-color-picker__spectrum-tab overflow-hidden",
                name: "spectrum"
            }, G), u(ti, {
                class: "q-pa-md q-color-picker__tune-tab",
                name: "tune"
            }, I), u(ti, {class: "q-color-picker__palette-tab", name: "palette"}, N)])
        }

        function ie() {
            return u("div", {class: "q-color-picker__footer relative-position overflow-hidden"}, [u(bs, {
                class: "absolute-full",
                modelValue: p.value,
                dense: !0,
                align: "justify", ...a("ftIn", {
                    "onUpdate:modelValue": _ => {
                        p.value = _
                    }
                })
            }, () => [u(Zo, {
                icon: o.iconSet.colorPicker.spectrum,
                name: "spectrum",
                ripple: !1
            }), u(Zo, {
                icon: o.iconSet.colorPicker.tune,
                name: "tune",
                ripple: !1
            }), u(Zo, {icon: o.iconSet.colorPicker.palette, name: "palette", ripple: !1})])])
        }

        function G() {
            const _ = {
                    ref: i,
                    class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (m.value !== !0 ? " readonly" : ""),
                    style: C.value, ...m.value === !0 ? {onClick: be, onMousedown: K} : {}
                },
                H = [u("div", {style: {paddingBottom: "100%"}}), u("div", {class: "q-color-picker__spectrum-white absolute-full"}), u("div", {class: "q-color-picker__spectrum-black absolute-full"}), u("div", {
                    class: "absolute",
                    style: A.value
                }, [v.value.hex !== void 0 ? u("div", {class: "q-color-picker__spectrum-circle"}) : null])],
                re = [u(Co, {
                    class: "q-color-picker__hue non-selectable",
                    modelValue: v.value.h,
                    min: 0,
                    max: 360,
                    trackSize: "8px",
                    innerTrackColor: "transparent",
                    selectionColor: "transparent",
                    readonly: m.value !== !0,
                    thumbPath: dd,
                    "onUpdate:modelValue": B, ...a("lazyhue", {onChange: q => B(q, !0)})
                })];
            return y.value === !0 && re.push(u(Co, {
                class: "q-color-picker__alpha non-selectable",
                modelValue: v.value.a,
                min: 0,
                max: 100,
                trackSize: "8px",
                trackColor: "white",
                innerTrackColor: "transparent",
                selectionColor: "transparent",
                trackImg: T1,
                readonly: m.value !== !0,
                hideSelection: !0,
                thumbPath: dd, ...a("alphaSlide", {
                    "onUpdate:modelValue": q => Y(q, "a", 100),
                    onChange: q => Y(q, "a", 100, void 0, !0)
                })
            })), [fn("div", _, H, "spec", m.value, () => O.value), u("div", {class: "q-color-picker__sliders"}, re)]
        }

        function I() {
            return [u("div", {class: "row items-center no-wrap"}, [u("div", "R"), u(Co, {
                modelValue: v.value.r,
                min: 0,
                max: 255,
                color: "red",
                dark: l.value,
                readonly: m.value !== !0, ...a("rSlide", {
                    "onUpdate:modelValue": _ => Y(_, "r", 255),
                    onChange: _ => Y(_, "r", 255, void 0, !0)
                })
            }), u("input", {
                value: v.value.r,
                maxlength: 3,
                readonly: m.value !== !0,
                onChange: _t, ...a("rIn", {
                    onInput: _ => Y(_.target.value, "r", 255, _),
                    onBlur: _ => Y(_.target.value, "r", 255, _, !0)
                })
            })]), u("div", {class: "row items-center no-wrap"}, [u("div", "G"), u(Co, {
                modelValue: v.value.g,
                min: 0,
                max: 255,
                color: "green",
                dark: l.value,
                readonly: m.value !== !0, ...a("gSlide", {
                    "onUpdate:modelValue": _ => Y(_, "g", 255),
                    onChange: _ => Y(_, "g", 255, void 0, !0)
                })
            }), u("input", {
                value: v.value.g,
                maxlength: 3,
                readonly: m.value !== !0,
                onChange: _t, ...a("gIn", {
                    onInput: _ => Y(_.target.value, "g", 255, _),
                    onBlur: _ => Y(_.target.value, "g", 255, _, !0)
                })
            })]), u("div", {class: "row items-center no-wrap"}, [u("div", "B"), u(Co, {
                modelValue: v.value.b,
                min: 0,
                max: 255,
                color: "blue",
                readonly: m.value !== !0,
                dark: l.value, ...a("bSlide", {
                    "onUpdate:modelValue": _ => Y(_, "b", 255),
                    onChange: _ => Y(_, "b", 255, void 0, !0)
                })
            }), u("input", {
                value: v.value.b,
                maxlength: 3,
                readonly: m.value !== !0,
                onChange: _t, ...a("bIn", {
                    onInput: _ => Y(_.target.value, "b", 255, _),
                    onBlur: _ => Y(_.target.value, "b", 255, _, !0)
                })
            })]), y.value === !0 ? u("div", {class: "row items-center no-wrap"}, [u("div", "A"), u(Co, {
                modelValue: v.value.a,
                color: "grey",
                readonly: m.value !== !0,
                dark: l.value, ...a("aSlide", {
                    "onUpdate:modelValue": _ => Y(_, "a", 100),
                    onChange: _ => Y(_, "a", 100, void 0, !0)
                })
            }), u("input", {
                value: v.value.a,
                maxlength: 3,
                readonly: m.value !== !0,
                onChange: _t, ...a("aIn", {
                    onInput: _ => Y(_.target.value, "a", 100, _),
                    onBlur: _ => Y(_.target.value, "a", 100, _, !0)
                })
            })]) : null]
        }

        function N() {
            const _ = H => u("div", {
                class: "q-color-picker__cube col-auto",
                style: {backgroundColor: H}, ...m.value === !0 ? a("palette#" + H, {
                    onClick: () => {
                        $(H)
                    }
                }) : {}
            });
            return [u("div", {class: "row items-center q-color-picker__palette-rows" + (m.value === !0 ? " q-color-picker__palette-rows--editable" : "")}, L.value.map(_))]
        }

        return () => {
            const _ = [Z()];
            return e.name !== void 0 && e.disable !== !0 && S(_, "push"), e.noHeader !== !0 && _.unshift(ee()), e.noFooter !== !0 && _.push(ie()), u("div", {class: E.value, ...V.value}, _)
        }
    }
});
const ao = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];

function M1(e, t, n) {
    return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), B1(xu(e, t, n))
}

function fd(e, t, n) {
    return Mp(A1(e, t, n))
}

function E1(e) {
    return P1(e) === 0
}

function oi(e, t) {
    return t <= 6 ? 31 : t <= 11 || E1(e) ? 30 : 29
}

function P1(e) {
    const t = ao.length;
    let n, o, l, a, i, r = ao[0];
    if (e < r || e >= ao[t - 1]) throw new Error("Invalid Jalaali year " + e);
    for (i = 1; i < t && (n = ao[i], o = n - r, !(e < n)); i += 1) r = n;
    return a = e - r, o - a < 6 && (a = a - o + 33 * yt(o + 4, 33)), l = Gt(Gt(a + 1, 33) - 1, 4), l === -1 && (l = 4), l
}

function $p(e, t) {
    const n = ao.length, o = e + 621;
    let l, a, i, r, s, d = -14, c = ao[0];
    if (e < c || e >= ao[n - 1]) throw new Error("Invalid Jalaali year " + e);
    for (s = 1; s < n && (l = ao[s], a = l - c, !(e < l)); s += 1) d = d + 8 * yt(a, 33) + yt(Gt(a, 33), 4), c = l;
    r = e - c, d = d + 8 * yt(r, 33) + yt(Gt(r, 33) + 3, 4), Gt(a, 33) === 4 && a - r === 4 && (d += 1);
    const p = yt(o, 4) - yt(3 * (yt(o, 100) + 1), 4) - 150, v = 20 + d - p;
    return t || (a - r < 6 && (r = r - a + 33 * yt(a + 4, 33)), i = Gt(Gt(r + 1, 33) - 1, 4), i === -1 && (i = 4)), {
        leap: i,
        gy: o,
        march: v
    }
}

function A1(e, t, n) {
    const o = $p(e, !0);
    return xu(o.gy, 3, o.march) + 31 * (t - 1) - yt(t, 7) * (t - 7) + n - 1
}

function B1(e) {
    const t = Mp(e).gy;
    let n, o, l, a = t - 621;
    const i = $p(a, !1), r = xu(t, 3, i.march);
    if (l = e - r, l >= 0) {
        if (l <= 185) return o = 1 + yt(l, 31), n = Gt(l, 31) + 1, {jy: a, jm: o, jd: n};
        l -= 186
    } else a -= 1, l += 179, i.leap === 1 && (l += 1);
    return o = 7 + yt(l, 30), n = Gt(l, 30) + 1, {jy: a, jm: o, jd: n}
}

function xu(e, t, n) {
    let o = yt(1461 * (e + yt(t - 8, 6) + 100100), 4) + yt(153 * Gt(t + 9, 12) + 2, 5) + n - 34840408;
    return o = o - yt(3 * yt(e + 100100 + yt(t - 8, 6), 100), 4) + 752, o
}

function Mp(e) {
    let t = 4 * e + 139361631;
    t = t + 4 * yt(3 * yt(4 * e + 183187720, 146097), 4) - 3908;
    const n = 5 * yt(Gt(t, 1461), 4) + 308, o = yt(Gt(n, 153), 5) + 1, l = Gt(yt(n, 153), 12) + 1;
    return {gy: yt(t, 1461) - 100100 + yt(8 - l, 6), gm: l, gd: o}
}

function yt(e, t) {
    return ~~(e / t)
}

function Gt(e, t) {
    return e - ~~(e / t) * t
}

const O1 = ["gregorian", "persian"], Ep = {
    modelValue: {required: !0},
    mask: {type: String},
    locale: Object,
    calendar: {type: String, validator: e => O1.includes(e), default: "gregorian"},
    landscape: Boolean,
    color: String,
    textColor: String,
    square: Boolean,
    flat: Boolean,
    bordered: Boolean,
    readonly: Boolean,
    disable: Boolean
}, Pp = ["update:modelValue"];

function Vn(e) {
    return e.year + "/" + ot(e.month) + "/" + ot(e.day)
}

function Ap(e, t) {
    const n = f(() => e.disable !== !0 && e.readonly !== !0), o = f(() => n.value === !0 ? 0 : -1), l = f(() => {
        const r = [];
        return e.color !== void 0 && r.push(`bg-${e.color}`), e.textColor !== void 0 && r.push(`text-${e.textColor}`), r.join(" ")
    });

    function a() {
        return e.locale !== void 0 ? {...t.lang.date, ...e.locale} : t.lang.date
    }

    function i(r) {
        const s = new Date, d = r === !0 ? null : 0;
        if (e.calendar === "persian") {
            const c = M1(s);
            return {year: c.jy, month: c.jm, day: c.jd}
        }
        return {
            year: s.getFullYear(),
            month: s.getMonth() + 1,
            day: s.getDate(),
            hour: d,
            minute: d,
            second: d,
            millisecond: d
        }
    }

    return {editable: n, tabindex: o, headerClass: l, getLocale: a, getCurrentDate: i}
}

const Bp = 864e5, L1 = 36e5, ys = 6e4, Op = "YYYY-MM-DDTHH:mm:ss.SSSZ",
    R1 = /\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,
    V1 = /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,
    Pr = {};

function F1(e, t) {
    const n = "(" + t.days.join("|") + ")", o = e + n;
    if (Pr[o] !== void 0) return Pr[o];
    const l = "(" + t.daysShort.join("|") + ")", a = "(" + t.months.join("|") + ")",
        i = "(" + t.monthsShort.join("|") + ")", r = {};
    let s = 0;
    const d = e.replace(V1, p => {
        switch (s++, p) {
            case"YY":
                return r.YY = s, "(-?\\d{1,2})";
            case"YYYY":
                return r.YYYY = s, "(-?\\d{1,4})";
            case"M":
                return r.M = s, "(\\d{1,2})";
            case"MM":
                return r.M = s, "(\\d{2})";
            case"MMM":
                return r.MMM = s, i;
            case"MMMM":
                return r.MMMM = s, a;
            case"D":
                return r.D = s, "(\\d{1,2})";
            case"Do":
                return r.D = s++, "(\\d{1,2}(st|nd|rd|th))";
            case"DD":
                return r.D = s, "(\\d{2})";
            case"H":
                return r.H = s, "(\\d{1,2})";
            case"HH":
                return r.H = s, "(\\d{2})";
            case"h":
                return r.h = s, "(\\d{1,2})";
            case"hh":
                return r.h = s, "(\\d{2})";
            case"m":
                return r.m = s, "(\\d{1,2})";
            case"mm":
                return r.m = s, "(\\d{2})";
            case"s":
                return r.s = s, "(\\d{1,2})";
            case"ss":
                return r.s = s, "(\\d{2})";
            case"S":
                return r.S = s, "(\\d{1})";
            case"SS":
                return r.S = s, "(\\d{2})";
            case"SSS":
                return r.S = s, "(\\d{3})";
            case"A":
                return r.A = s, "(AM|PM)";
            case"a":
                return r.a = s, "(am|pm)";
            case"aa":
                return r.aa = s, "(a\\.m\\.|p\\.m\\.)";
            case"ddd":
                return l;
            case"dddd":
                return n;
            case"Q":
            case"d":
            case"E":
                return "(\\d{1})";
            case"Qo":
                return "(1st|2nd|3rd|4th)";
            case"DDD":
            case"DDDD":
                return "(\\d{1,3})";
            case"w":
                return "(\\d{1,2})";
            case"ww":
                return "(\\d{2})";
            case"Z":
                return r.Z = s, "(Z|[+-]\\d{2}:\\d{2})";
            case"ZZ":
                return r.ZZ = s, "(Z|[+-]\\d{2}\\d{2})";
            case"X":
                return r.X = s, "(-?\\d+)";
            case"x":
                return r.x = s, "(-?\\d{4,})";
            default:
                return s--, p[0] === "[" && (p = p.substring(1, p.length - 1)), p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }
    }), c = {map: r, regex: new RegExp("^" + d)};
    return Pr[o] = c, c
}

function Lp(e, t) {
    return e !== void 0 ? e : t !== void 0 ? t.date : ss.date
}

function vd(e, t = "") {
    const n = e > 0 ? "-" : "+", o = Math.abs(e), l = Math.floor(o / 60), a = o % 60;
    return n + ot(l) + t + ot(a)
}

function Ql(e, t, n, o, l) {
    const a = {
        year: null,
        month: null,
        day: null,
        hour: null,
        minute: null,
        second: null,
        millisecond: null,
        timezoneOffset: null,
        dateHash: null,
        timeHash: null
    };
    if (l !== void 0 && Object.assign(a, l), e == null || e === "" || typeof e != "string") return a;
    t === void 0 && (t = Op);
    const i = Lp(n, Zt.props), r = i.months, s = i.monthsShort, {regex: d, map: c} = F1(t, i), p = e.match(d);
    if (p === null) return a;
    let v = "";
    if (c.X !== void 0 || c.x !== void 0) {
        const m = parseInt(p[c.X !== void 0 ? c.X : c.x], 10);
        if (isNaN(m) === !0 || m < 0) return a;
        const g = new Date(m * (c.X !== void 0 ? 1e3 : 1));
        a.year = g.getFullYear(), a.month = g.getMonth() + 1, a.day = g.getDate(), a.hour = g.getHours(), a.minute = g.getMinutes(), a.second = g.getSeconds(), a.millisecond = g.getMilliseconds()
    } else {
        if (c.YYYY !== void 0) a.year = parseInt(p[c.YYYY], 10); else if (c.YY !== void 0) {
            const m = parseInt(p[c.YY], 10);
            a.year = m < 0 ? m : 2e3 + m
        }
        if (c.M !== void 0) {
            if (a.month = parseInt(p[c.M], 10), a.month < 1 || a.month > 12) return a
        } else c.MMM !== void 0 ? a.month = s.indexOf(p[c.MMM]) + 1 : c.MMMM !== void 0 && (a.month = r.indexOf(p[c.MMMM]) + 1);
        if (c.D !== void 0) {
            if (a.day = parseInt(p[c.D], 10), a.year === null || a.month === null || a.day < 1) return a;
            const m = o !== "persian" ? new Date(a.year, a.month, 0).getDate() : oi(a.year, a.month);
            if (a.day > m) return a
        }
        c.H !== void 0 ? a.hour = parseInt(p[c.H], 10) % 24 : c.h !== void 0 && (a.hour = parseInt(p[c.h], 10) % 12, (c.A && p[c.A] === "PM" || c.a && p[c.a] === "pm" || c.aa && p[c.aa] === "p.m.") && (a.hour += 12), a.hour = a.hour % 24), c.m !== void 0 && (a.minute = parseInt(p[c.m], 10) % 60), c.s !== void 0 && (a.second = parseInt(p[c.s], 10) % 60), c.S !== void 0 && (a.millisecond = parseInt(p[c.S], 10) * 10 ** (3 - p[c.S].length)), c.Z === void 0 && c.ZZ === void 0 || (v = c.Z !== void 0 ? p[c.Z].replace(":", "") : p[c.ZZ], a.timezoneOffset = (v[0] === "+" ? -1 : 1) * (60 * v.slice(1, 3) + 1 * v.slice(3, 5)))
    }
    return a.dateHash = ot(a.year, 6) + "/" + ot(a.month) + "/" + ot(a.day), a.timeHash = ot(a.hour) + ":" + ot(a.minute) + ":" + ot(a.second) + v, a
}

function pd(e) {
    const t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
    t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
    const n = new Date(t.getFullYear(), 0, 4);
    n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
    const o = t.getTimezoneOffset() - n.getTimezoneOffset();
    t.setHours(t.getHours() - o);
    const l = (t - n) / (7 * Bp);
    return 1 + Math.floor(l)
}

function Fn(e, t, n) {
    const o = new Date(e), l = `set${n === !0 ? "UTC" : ""}`;
    switch (t) {
        case"year":
        case"years":
            o[`${l}Month`](0);
        case"month":
        case"months":
            o[`${l}Date`](1);
        case"day":
        case"days":
        case"date":
            o[`${l}Hours`](0);
        case"hour":
        case"hours":
            o[`${l}Minutes`](0);
        case"minute":
        case"minutes":
            o[`${l}Seconds`](0);
        case"second":
        case"seconds":
            o[`${l}Milliseconds`](0)
    }
    return o
}

function Na(e, t, n) {
    return (e.getTime() - e.getTimezoneOffset() * ys - (t.getTime() - t.getTimezoneOffset() * ys)) / n
}

function Rp(e, t, n = "days") {
    const o = new Date(e), l = new Date(t);
    switch (n) {
        case"years":
        case"year":
            return o.getFullYear() - l.getFullYear();
        case"months":
        case"month":
            return 12 * (o.getFullYear() - l.getFullYear()) + o.getMonth() - l.getMonth();
        case"days":
        case"day":
        case"date":
            return Na(Fn(o, "day"), Fn(l, "day"), Bp);
        case"hours":
        case"hour":
            return Na(Fn(o, "hour"), Fn(l, "hour"), L1);
        case"minutes":
        case"minute":
            return Na(Fn(o, "minute"), Fn(l, "minute"), ys);
        case"seconds":
        case"second":
            return Na(Fn(o, "second"), Fn(l, "second"), 1e3)
    }
}

function md(e) {
    return Rp(e, Fn(e, "year"), "days") + 1
}

function hd(e) {
    if (e >= 11 && e <= 13) return `${e}th`;
    switch (e % 10) {
        case 1:
            return `${e}st`;
        case 2:
            return `${e}nd`;
        case 3:
            return `${e}rd`
    }
    return `${e}th`
}

const gd = {
    YY(e, t, n) {
        const o = this.YYYY(e, t, n) % 100;
        return o >= 0 ? ot(o) : "-" + ot(Math.abs(o))
    }, YYYY(e, t, n) {
        return n ?? e.getFullYear()
    }, M(e) {
        return e.getMonth() + 1
    }, MM(e) {
        return ot(e.getMonth() + 1)
    }, MMM(e, t) {
        return t.monthsShort[e.getMonth()]
    }, MMMM(e, t) {
        return t.months[e.getMonth()]
    }, Q(e) {
        return Math.ceil((e.getMonth() + 1) / 3)
    }, Qo(e) {
        return hd(this.Q(e))
    }, D(e) {
        return e.getDate()
    }, Do(e) {
        return hd(e.getDate())
    }, DD(e) {
        return ot(e.getDate())
    }, DDD(e) {
        return md(e)
    }, DDDD(e) {
        return ot(md(e), 3)
    }, d(e) {
        return e.getDay()
    }, dd(e, t) {
        return this.dddd(e, t).slice(0, 2)
    }, ddd(e, t) {
        return t.daysShort[e.getDay()]
    }, dddd(e, t) {
        return t.days[e.getDay()]
    }, E(e) {
        return e.getDay() || 7
    }, w(e) {
        return pd(e)
    }, ww(e) {
        return ot(pd(e))
    }, H(e) {
        return e.getHours()
    }, HH(e) {
        return ot(e.getHours())
    }, h(e) {
        const t = e.getHours();
        return t === 0 ? 12 : t > 12 ? t % 12 : t
    }, hh(e) {
        return ot(this.h(e))
    }, m(e) {
        return e.getMinutes()
    }, mm(e) {
        return ot(e.getMinutes())
    }, s(e) {
        return e.getSeconds()
    }, ss(e) {
        return ot(e.getSeconds())
    }, S(e) {
        return Math.floor(e.getMilliseconds() / 100)
    }, SS(e) {
        return ot(Math.floor(e.getMilliseconds() / 10))
    }, SSS(e) {
        return ot(e.getMilliseconds(), 3)
    }, A(e) {
        return this.H(e) < 12 ? "AM" : "PM"
    }, a(e) {
        return this.H(e) < 12 ? "am" : "pm"
    }, aa(e) {
        return this.H(e) < 12 ? "a.m." : "p.m."
    }, Z(e, t, n, o) {
        const l = o ?? e.getTimezoneOffset();
        return vd(l, ":")
    }, ZZ(e, t, n, o) {
        const l = o ?? e.getTimezoneOffset();
        return vd(l)
    }, X(e) {
        return Math.floor(e.getTime() / 1e3)
    }, x(e) {
        return e.getTime()
    }
};

function Vp(e, t, n, o, l) {
    if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0) return;
    const a = new Date(e);
    if (isNaN(a)) return;
    t === void 0 && (t = Op);
    const i = Lp(n, Zt.props);
    return t.replace(R1, (r, s) => r in gd ? gd[r](a, i, o, l) : s === void 0 ? r : s.split("\\]").join("]"))
}

const yo = 20, z1 = ["Calendar", "Years", "Months"], bd = e => z1.includes(e), Ar = e => /^-?[\d]+\/[0-1]\d$/.test(e),
    Ko = " — ";

function Xn(e) {
    return e.year + "/" + ot(e.month)
}

var N1 = ve({
    name: "QDate",
    props: {
        ...Ep, ...vn, ...Ge,
        multiple: Boolean,
        range: Boolean,
        title: String,
        subtitle: String,
        mask: {default: "YYYY/MM/DD"},
        defaultYearMonth: {type: String, validator: Ar},
        yearsInMonthView: Boolean,
        events: [Array, Function],
        eventColor: [String, Function],
        emitImmediately: Boolean,
        options: [Array, Function],
        navigationMinYearMonth: {type: String, validator: Ar},
        navigationMaxYearMonth: {type: String, validator: Ar},
        noUnset: Boolean,
        firstDayOfWeek: [String, Number],
        todayBtn: Boolean,
        minimal: Boolean,
        defaultView: {type: String, default: "Calendar", validator: bd}
    },
    emits: [...Pp, "rangeStart", "rangeEnd", "navigation"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: o} = Se(), {$q: l} = o, a = Je(e, l), {getCache: i} = Sa(), {
            tabindex: r,
            headerClass: s,
            getLocale: d,
            getCurrentDate: c
        } = Ap(e, l);
        let p;
        const v = xa(e), m = po(v), g = D(null), x = D(Be()), w = D(d()), S = f(() => Be()), y = f(() => d()),
            b = f(() => c()), h = D(Ye(x.value, w.value)), C = D(e.defaultView),
            A = l.lang.rtl === !0 ? "right" : "left", L = D(A.value), E = D(A.value), V = h.value.year,
            O = D(V - V % yo - (V < 0 ? yo : 0)), z = D(null), M = f(() => {
                const R = e.landscape === !0 ? "landscape" : "portrait";
                return `q-date q-date--${R} q-date--${R}-${e.minimal === !0 ? "minimal" : "standard"}` + (a.value === !0 ? " q-date--dark q-dark" : "") + (e.bordered === !0 ? " q-date--bordered" : "") + (e.square === !0 ? " q-date--square no-border-radius" : "") + (e.flat === !0 ? " q-date--flat no-shadow" : "") + (e.disable === !0 ? " disabled" : e.readonly === !0 ? " q-date--readonly" : "")
            }), k = f(() => e.color || "primary"), B = f(() => e.textColor || "white"),
            Y = f(() => e.emitImmediately === !0 && e.multiple !== !0 && e.range !== !0),
            J = f(() => Array.isArray(e.modelValue) === !0 ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []),
            $ = f(() => J.value.filter(R => typeof R == "string").map(R => Ne(R, x.value, w.value)).filter(R => R.dateHash !== null && R.day !== null && R.month !== null && R.year !== null)),
            Q = f(() => {
                const R = X => Ne(X, x.value, w.value);
                return J.value.filter(X => Et(X) === !0 && X.from !== void 0 && X.to !== void 0).map(X => ({
                    from: R(X.from),
                    to: R(X.to)
                })).filter(X => X.from.dateHash !== null && X.to.dateHash !== null && X.from.dateHash < X.to.dateHash)
            }), ae = f(() => e.calendar !== "persian" ? R => new Date(R.year, R.month - 1, R.day) : R => {
                const X = fd(R.year, R.month, R.day);
                return new Date(X.gy, X.gm - 1, X.gd)
            }),
            be = f(() => e.calendar === "persian" ? Vn : (R, X, ce) => Vp(new Date(R.year, R.month - 1, R.day, R.hour, R.minute, R.second, R.millisecond), X === void 0 ? x.value : X, ce === void 0 ? w.value : ce, R.year, R.timezoneOffset)),
            K = f(() => $.value.length + Q.value.reduce((R, X) => R + 1 + Rp(ae.value(X.to), ae.value(X.from)), 0)),
            T = f(() => {
                if (e.title !== void 0 && e.title !== null && e.title.length !== 0) return e.title;
                if (z.value !== null) {
                    const ce = z.value.init, $e = ae.value(ce);
                    return w.value.daysShort[$e.getDay()] + ", " + w.value.monthsShort[ce.month - 1] + " " + ce.day + Ko + "?"
                }
                if (K.value === 0) return Ko;
                if (K.value > 1) return `${K.value} ${w.value.pluralDay}`;
                const R = $.value[0], X = ae.value(R);
                return isNaN(X.valueOf()) === !0 ? Ko : w.value.headerTitle !== void 0 ? w.value.headerTitle(X, R) : w.value.daysShort[X.getDay()] + ", " + w.value.monthsShort[R.month - 1] + " " + R.day
            }),
            ee = f(() => $.value.concat(Q.value.map(X => X.from)).sort((X, ce) => X.year - ce.year || X.month - ce.month)[0]),
            Z = f(() => $.value.concat(Q.value.map(X => X.to)).sort((X, ce) => ce.year - X.year || ce.month - X.month)[0]),
            ie = f(() => {
                if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0) return e.subtitle;
                if (K.value === 0) return Ko;
                if (K.value > 1) {
                    const R = ee.value, X = Z.value, ce = w.value.monthsShort;
                    return ce[R.month - 1] + (R.year !== X.year ? " " + R.year + Ko + ce[X.month - 1] + " " : R.month !== X.month ? Ko + ce[X.month - 1] : "") + " " + X.year
                }
                return $.value[0].year
            }), G = f(() => {
                const R = [l.iconSet.datetime.arrowLeft, l.iconSet.datetime.arrowRight];
                return l.lang.rtl === !0 ? R.reverse() : R
            }), I = f(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : w.value.firstDayOfWeek), N = f(() => {
                const R = w.value.daysShort, X = I.value;
                return X > 0 ? R.slice(X, 7).concat(R.slice(0, X)) : R
            }), _ = f(() => {
                const R = h.value;
                return e.calendar !== "persian" ? new Date(R.year, R.month, 0).getDate() : oi(R.year, R.month)
            }), H = f(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), re = f(() => {
                if (e.navigationMinYearMonth === void 0) return null;
                const R = e.navigationMinYearMonth.split("/");
                return {year: parseInt(R[0], 10), month: parseInt(R[1], 10)}
            }), q = f(() => {
                if (e.navigationMaxYearMonth === void 0) return null;
                const R = e.navigationMaxYearMonth.split("/");
                return {year: parseInt(R[0], 10), month: parseInt(R[1], 10)}
            }), P = f(() => {
                const R = {month: {prev: !0, next: !0}, year: {prev: !0, next: !0}};
                return re.value !== null && re.value.year >= h.value.year && (R.year.prev = !1, re.value.year === h.value.year && re.value.month >= h.value.month && (R.month.prev = !1)), q.value !== null && q.value.year <= h.value.year && (R.year.next = !1, q.value.year === h.value.year && q.value.month <= h.value.month && (R.month.next = !1)), R
            }), F = f(() => {
                const R = {};
                return $.value.forEach(X => {
                    const ce = Xn(X);
                    R[ce] === void 0 && (R[ce] = []), R[ce].push(X.day)
                }), R
            }), te = f(() => {
                const R = {};
                return Q.value.forEach(X => {
                    const ce = Xn(X.from), $e = Xn(X.to);
                    if (R[ce] === void 0 && (R[ce] = []), R[ce].push({
                        from: X.from.day,
                        to: ce === $e ? X.to.day : void 0,
                        range: X
                    }), ce < $e) {
                        let qe;
                        const {year: et, month: Le} = X.from,
                            Ue = Le < 12 ? {year: et, month: Le + 1} : {year: et + 1, month: 1};
                        for (; (qe = Xn(Ue)) <= $e;) R[qe] === void 0 && (R[qe] = []), R[qe].push({
                            from: void 0,
                            to: qe === $e ? X.to.day : void 0,
                            range: X
                        }), Ue.month++, Ue.month > 12 && (Ue.year++, Ue.month = 1)
                    }
                }), R
            }), oe = f(() => {
                if (z.value === null) return;
                const {init: R, initHash: X, final: ce, finalHash: $e} = z.value, [qe, et] = X <= $e ? [R, ce] : [ce, R],
                    Le = Xn(qe), Ue = Xn(et);
                if (Le !== ne.value && Ue !== ne.value) return;
                const lt = {};
                return Le === ne.value ? (lt.from = qe.day, lt.includeFrom = !0) : lt.from = 1, Ue === ne.value ? (lt.to = et.day, lt.includeTo = !0) : lt.to = _.value, lt
            }), ne = f(() => Xn(h.value)), ge = f(() => {
                const R = {};
                if (e.options === void 0) {
                    for (let ce = 1; ce <= _.value; ce++) R[ce] = !0;
                    return R
                }
                const X = typeof e.options == "function" ? e.options : ce => e.options.includes(ce);
                for (let ce = 1; ce <= _.value; ce++) {
                    const $e = ne.value + "/" + ot(ce);
                    R[ce] = X($e)
                }
                return R
            }), he = f(() => {
                const R = {};
                if (e.events === void 0) for (let X = 1; X <= _.value; X++) R[X] = !1; else {
                    const X = typeof e.events == "function" ? e.events : ce => e.events.includes(ce);
                    for (let ce = 1; ce <= _.value; ce++) {
                        const $e = ne.value + "/" + ot(ce);
                        R[ce] = X($e) === !0 && H.value($e)
                    }
                }
                return R
            }), me = f(() => {
                let R, X;
                const {year: ce, month: $e} = h.value;
                if (e.calendar !== "persian") R = new Date(ce, $e - 1, 1), X = new Date(ce, $e - 1, 0).getDate(); else {
                    const qe = fd(ce, $e, 1);
                    R = new Date(qe.gy, qe.gm - 1, qe.gd);
                    let et = $e - 1, Le = ce;
                    et === 0 && (et = 12, Le--), X = oi(Le, et)
                }
                return {days: R.getDay() - I.value - 1, endDay: X}
            }), W = f(() => {
                const R = [], {days: X, endDay: ce} = me.value, $e = X < 0 ? X + 7 : X;
                if ($e < 6) for (let Le = ce - $e; Le <= ce; Le++) R.push({i: Le, fill: !0});
                const qe = R.length;
                for (let Le = 1; Le <= _.value; Le++) {
                    const Ue = {i: Le, event: he.value[Le], classes: []};
                    ge.value[Le] === !0 && (Ue.in = !0, Ue.flat = !0), R.push(Ue)
                }
                if (F.value[ne.value] !== void 0 && F.value[ne.value].forEach(Le => {
                    const Ue = qe + Le - 1;
                    Object.assign(R[Ue], {selected: !0, unelevated: !0, flat: !1, color: k.value, textColor: B.value})
                }), te.value[ne.value] !== void 0 && te.value[ne.value].forEach(Le => {
                    if (Le.from !== void 0) {
                        const Ue = qe + Le.from - 1, lt = qe + (Le.to || _.value) - 1;
                        for (let on = Ue; on <= lt; on++) Object.assign(R[on], {
                            range: Le.range,
                            unelevated: !0,
                            color: k.value,
                            textColor: B.value
                        });
                        Object.assign(R[Ue], {
                            rangeFrom: !0,
                            flat: !1
                        }), Le.to !== void 0 && Object.assign(R[lt], {rangeTo: !0, flat: !1})
                    } else if (Le.to !== void 0) {
                        const Ue = qe + Le.to - 1;
                        for (let lt = qe; lt <= Ue; lt++) Object.assign(R[lt], {
                            range: Le.range,
                            unelevated: !0,
                            color: k.value,
                            textColor: B.value
                        });
                        Object.assign(R[Ue], {flat: !1, rangeTo: !0})
                    } else {
                        const Ue = qe + _.value - 1;
                        for (let lt = qe; lt <= Ue; lt++) Object.assign(R[lt], {
                            range: Le.range,
                            unelevated: !0,
                            color: k.value,
                            textColor: B.value
                        })
                    }
                }), oe.value !== void 0) {
                    const Le = qe + oe.value.from - 1, Ue = qe + oe.value.to - 1;
                    for (let lt = Le; lt <= Ue; lt++) R[lt].color = k.value, R[lt].editRange = !0;
                    oe.value.includeFrom === !0 && (R[Le].editRangeFrom = !0), oe.value.includeTo === !0 && (R[Ue].editRangeTo = !0)
                }
                h.value.year === b.value.year && h.value.month === b.value.month && (R[qe + b.value.day - 1].today = !0);
                const et = R.length % 7;
                if (et > 0) {
                    const Le = 7 - et;
                    for (let Ue = 1; Ue <= Le; Ue++) R.push({i: Ue, fill: !0})
                }
                return R.forEach(Le => {
                    let Ue = "q-date__calendar-item ";
                    Le.fill === !0 ? Ue += "q-date__calendar-item--fill" : (Ue += `q-date__calendar-item--${Le.in === !0 ? "in" : "out"}`, Le.range !== void 0 && (Ue += ` q-date__range${Le.rangeTo === !0 ? "-to" : Le.rangeFrom === !0 ? "-from" : ""}`), Le.editRange === !0 && (Ue += ` q-date__edit-range${Le.editRangeFrom === !0 ? "-from" : ""}${Le.editRangeTo === !0 ? "-to" : ""}`), Le.range === void 0 && Le.editRange !== !0 || (Ue += ` text-${Le.color}`)), Le.classes = Ue
                }), R
            }),
            ue = f(() => e.disable === !0 ? {"aria-disabled": "true"} : e.readonly === !0 ? {"aria-readonly": "true"} : {});

        function U() {
            const R = b.value, X = F.value[Xn(R)];
            X !== void 0 && X.includes(R.day) !== !1 || Bn(R), xe(R.year, R.month)
        }

        function de(R) {
            bd(R) === !0 && (C.value = R)
        }

        function we(R, X) {
            ["month", "year"].includes(R) && (R === "month" ? _e : le)(X === !0 ? -1 : 1)
        }

        function xe(R, X) {
            C.value = "Calendar", Xe(R, X)
        }

        function Ce(R, X) {
            if (e.range === !1 || !R) return void (z.value = null);
            const ce = Object.assign({...h.value}, R), $e = X !== void 0 ? Object.assign({...h.value}, X) : ce;
            z.value = {init: ce, initHash: Vn(ce), final: $e, finalHash: Vn($e)}, xe(ce.year, ce.month)
        }

        function Be() {
            return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask
        }

        function Ne(R, X, ce) {
            return Ql(R, X, ce, e.calendar, {hour: 0, minute: 0, second: 0, millisecond: 0})
        }

        function Ye(R, X) {
            const ce = Array.isArray(e.modelValue) === !0 ? e.modelValue : e.modelValue ? [e.modelValue] : [];
            if (ce.length === 0) return se();
            const $e = ce[ce.length - 1], qe = Ne($e.from !== void 0 ? $e.from : $e, R, X);
            return qe.dateHash === null ? se() : qe
        }

        function se() {
            let R, X;
            if (e.defaultYearMonth !== void 0) {
                const ce = e.defaultYearMonth.split("/");
                R = parseInt(ce[0], 10), X = parseInt(ce[1], 10)
            } else {
                const ce = b.value !== void 0 ? b.value : c();
                R = ce.year, X = ce.month
            }
            return {
                year: R,
                month: X,
                day: 1,
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
                dateHash: R + "/" + ot(X) + "/01"
            }
        }

        function _e(R) {
            let X = h.value.year, ce = Number(h.value.month) + R;
            ce === 13 ? (ce = 1, X++) : ce === 0 && (ce = 12, X--), Xe(X, ce), Y.value === !0 && ht("month")
        }

        function le(R) {
            const X = Number(h.value.year) + R;
            Xe(X, h.value.month), Y.value === !0 && ht("year")
        }

        function ye(R) {
            Xe(R, h.value.month), C.value = e.defaultView === "Years" ? "Months" : "Calendar", Y.value === !0 && ht("year")
        }

        function Te(R) {
            Xe(h.value.year, R), C.value = "Calendar", Y.value === !0 && ht("month")
        }

        function Re(R, X) {
            const ce = F.value[X];
            (ce !== void 0 && ce.includes(R.day) === !0 ? Tn : Bn)(R)
        }

        function Me(R) {
            return {year: R.year, month: R.month, day: R.day}
        }

        function Xe(R, X, ce) {
            if (re.value !== null && R <= re.value.year && (R = re.value.year, X < re.value.month && (X = re.value.month)), q.value !== null && R >= q.value.year && (R = q.value.year, X > q.value.month && (X = q.value.month)), ce !== void 0) {
                const {hour: qe, minute: et, second: Le, millisecond: Ue, timezoneOffset: lt, timeHash: on} = ce;
                Object.assign(h.value, {
                    hour: qe,
                    minute: et,
                    second: Le,
                    millisecond: Ue,
                    timezoneOffset: lt,
                    timeHash: on
                })
            }
            const $e = R + "/" + ot(X) + "/01";
            $e !== h.value.dateHash && (L.value = h.value.dateHash < $e == (l.lang.rtl !== !0) ? "left" : "right", R !== h.value.year && (E.value = L.value), We(() => {
                O.value = R - R % yo - (R < 0 ? yo : 0), Object.assign(h.value, {
                    year: R,
                    month: X,
                    day: 1,
                    dateHash: $e
                })
            }))
        }

        function dt(R, X, ce) {
            const $e = R !== null && R.length === 1 && e.multiple === !1 ? R[0] : R;
            p = $e;
            const {reason: qe, details: et} = jt(X, ce);
            n("update:modelValue", $e, qe, et)
        }

        function ht(R) {
            const X = $.value[0] !== void 0 && $.value[0].dateHash !== null ? {...$.value[0]} : {...h.value};
            We(() => {
                X.year = h.value.year, X.month = h.value.month;
                const ce = e.calendar !== "persian" ? new Date(X.year, X.month, 0).getDate() : oi(X.year, X.month);
                X.day = Math.min(Math.max(1, X.day), ce);
                const $e = nn(X);
                p = $e;
                const {details: qe} = jt("", X);
                n("update:modelValue", $e, R, qe)
            })
        }

        function jt(R, X) {
            return X.from !== void 0 ? {
                reason: `${R}-range`,
                details: {...Me(X.target), from: Me(X.from), to: Me(X.to)}
            } : {reason: `${R}-day`, details: Me(X)}
        }

        function nn(R, X, ce) {
            return R.from !== void 0 ? {from: be.value(R.from, X, ce), to: be.value(R.to, X, ce)} : be.value(R, X, ce)
        }

        function Bn(R) {
            let X;
            if (e.multiple === !0) if (R.from !== void 0) {
                const ce = Vn(R.from), $e = Vn(R.to), qe = $.value.filter(Le => Le.dateHash < ce || Le.dateHash > $e),
                    et = Q.value.filter(({from: Le, to: Ue}) => Ue.dateHash < ce || Le.dateHash > $e);
                X = qe.concat(et).concat(R).map(Le => nn(Le))
            } else {
                const ce = J.value.slice();
                ce.push(nn(R)), X = ce
            } else X = nn(R);
            dt(X, "add", R)
        }

        function Tn(R) {
            if (e.noUnset === !0) return;
            let X = null;
            if (e.multiple === !0 && Array.isArray(e.modelValue) === !0) {
                const ce = nn(R);
                X = R.from !== void 0 ? e.modelValue.filter($e => $e.from === void 0 || $e.from !== ce.from && $e.to !== ce.to) : e.modelValue.filter($e => $e !== ce), X.length === 0 && (X = null)
            }
            dt(X, "remove", R)
        }

        function fe(R, X, ce) {
            const $e = $.value.concat(Q.value).map(qe => nn(qe, R, X)).filter(qe => qe.from !== void 0 ? qe.from.dateHash !== null && qe.to.dateHash !== null : qe.dateHash !== null);
            n("update:modelValue", (e.multiple === !0 ? $e : $e[0]) || null, ce)
        }

        function ke() {
            if (e.minimal !== !0) return u("div", {class: "q-date__header " + s.value}, [u("div", {class: "relative-position"}, [u($t, {name: "q-transition--fade"}, () => u("div", {
                key: "h-yr-" + ie.value,
                class: "q-date__header-subtitle q-date__header-link " + (C.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"),
                tabindex: r.value, ...i("vY", {
                    onClick() {
                        C.value = "Years"
                    }, onKeyup(R) {
                        R.keyCode === 13 && (C.value = "Years")
                    }
                })
            }, [ie.value]))]), u("div", {class: "q-date__header-title relative-position flex no-wrap"}, [u("div", {class: "relative-position col"}, [u($t, {name: "q-transition--fade"}, () => u("div", {
                key: "h-sub" + T.value,
                class: "q-date__header-title-label q-date__header-link " + (C.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"),
                tabindex: r.value, ...i("vC", {
                    onClick() {
                        C.value = "Calendar"
                    }, onKeyup(R) {
                        R.keyCode === 13 && (C.value = "Calendar")
                    }
                })
            }, [T.value]))]), e.todayBtn === !0 ? u(tt, {
                class: "q-date__header-today self-start",
                icon: l.iconSet.datetime.today,
                flat: !0,
                size: "sm",
                round: !0,
                tabindex: r.value,
                onClick: U
            }) : null])])
        }

        function Oe({label: R, type: X, key: ce, dir: $e, goTo: qe, boundaries: et, cls: Le}) {
            return [u("div", {class: "row items-center q-date__arrow"}, [u(tt, {
                round: !0,
                dense: !0,
                size: "sm",
                flat: !0,
                icon: G.value[0],
                tabindex: r.value,
                disable: et.prev === !1, ...i("go-#" + X, {
                    onClick() {
                        qe(-1)
                    }
                })
            })]), u("div", {class: "relative-position overflow-hidden flex flex-center" + Le}, [u($t, {name: "q-transition--jump-" + $e}, () => u("div", {key: ce}, [u(tt, {
                flat: !0,
                dense: !0,
                noCaps: !0,
                label: R,
                tabindex: r.value, ...i("view#" + X, {
                    onClick: () => {
                        C.value = X
                    }
                })
            })]))]), u("div", {class: "row items-center q-date__arrow"}, [u(tt, {
                round: !0,
                dense: !0,
                size: "sm",
                flat: !0,
                icon: G.value[1],
                tabindex: r.value,
                disable: et.next === !1, ...i("go+#" + X, {
                    onClick() {
                        qe(1)
                    }
                })
            })])]
        }

        pe(() => e.modelValue, R => {
            if (p === R) p = 0; else {
                const X = Ye(x.value, w.value);
                Xe(X.year, X.month, X)
            }
        }), pe(C, () => {
            g.value !== null && o.$el.contains(document.activeElement) === !0 && g.value.focus()
        }), pe(() => h.value.year + "|" + h.value.month, () => {
            n("navigation", {year: h.value.year, month: h.value.month})
        }), pe(S, R => {
            fe(R, w.value, "mask"), x.value = R
        }), pe(y, R => {
            fe(x.value, R, "locale"), w.value = R
        });
        const Ve = {
            Calendar: () => [u("div", {
                key: "calendar-view",
                class: "q-date__view q-date__calendar"
            }, [u("div", {class: "q-date__navigation row items-center no-wrap"}, Oe({
                label: w.value.months[h.value.month - 1],
                type: "Months",
                key: h.value.month,
                dir: L.value,
                goTo: _e,
                boundaries: P.value.month,
                cls: " col"
            }).concat(Oe({
                label: h.value.year,
                type: "Years",
                key: h.value.year,
                dir: E.value,
                goTo: le,
                boundaries: P.value.year,
                cls: ""
            }))), u("div", {class: "q-date__calendar-weekdays row items-center no-wrap"}, N.value.map(R => u("div", {class: "q-date__calendar-item"}, [u("div", R)]))), u("div", {class: "q-date__calendar-days-container relative-position overflow-hidden"}, [u($t, {name: "q-transition--slide-" + L.value}, () => u("div", {
                key: ne.value,
                class: "q-date__calendar-days fit"
            }, W.value.map(R => u("div", {class: R.classes}, [R.in === !0 ? u(tt, {
                class: R.today === !0 ? "q-date__today" : "",
                dense: !0,
                flat: R.flat,
                unelevated: R.unelevated,
                color: R.color,
                textColor: R.textColor,
                label: R.i,
                tabindex: r.value, ...i("day#" + R.i, {
                    onClick: () => {
                        De(R.i)
                    }, onMouseover: () => {
                        gt(R.i)
                    }
                })
            }, R.event !== !1 ? () => u("div", {class: "q-date__event bg-" + R.event}) : null) : u("div", "" + R.i)]))))])])],
            Months() {
                const R = h.value.year === b.value.year,
                    X = $e => re.value !== null && h.value.year === re.value.year && re.value.month > $e || q.value !== null && h.value.year === q.value.year && q.value.month < $e,
                    ce = w.value.monthsShort.map(($e, qe) => {
                        const et = h.value.month === qe + 1;
                        return u("div", {class: "q-date__months-item flex flex-center"}, [u(tt, {
                            class: R === !0 && b.value.month === qe + 1 ? "q-date__today" : null,
                            flat: et !== !0,
                            label: $e,
                            unelevated: et,
                            color: et === !0 ? k.value : null,
                            textColor: et === !0 ? B.value : null,
                            tabindex: r.value,
                            disable: X(qe + 1), ...i("month#" + qe, {
                                onClick: () => {
                                    Te(qe + 1)
                                }
                            })
                        })])
                    });
                return e.yearsInMonthView === !0 && ce.unshift(u("div", {class: "row no-wrap full-width"}, [Oe({
                    label: h.value.year,
                    type: "Years",
                    key: h.value.year,
                    dir: E.value,
                    goTo: le,
                    boundaries: P.value.year,
                    cls: " col"
                })])), u("div", {key: "months-view", class: "q-date__view q-date__months flex flex-center"}, ce)
            },
            Years() {
                const R = O.value, X = R + yo, ce = [],
                    $e = qe => re.value !== null && re.value.year > qe || q.value !== null && q.value.year < qe;
                for (let qe = R; qe <= X; qe++) {
                    const et = h.value.year === qe;
                    ce.push(u("div", {class: "q-date__years-item flex flex-center"}, [u(tt, {
                        key: "yr" + qe,
                        class: b.value.year === qe ? "q-date__today" : null,
                        flat: !et,
                        label: qe,
                        dense: !0,
                        unelevated: et,
                        color: et === !0 ? k.value : null,
                        textColor: et === !0 ? B.value : null,
                        tabindex: r.value,
                        disable: $e(qe), ...i("yr#" + qe, {
                            onClick: () => {
                                ye(qe)
                            }
                        })
                    })]))
                }
                return u("div", {class: "q-date__view q-date__years flex flex-center"}, [u("div", {class: "col-auto"}, [u(tt, {
                    round: !0,
                    dense: !0,
                    flat: !0,
                    icon: G.value[0],
                    tabindex: r.value,
                    disable: $e(R), ...i("y-", {
                        onClick: () => {
                            O.value -= yo
                        }
                    })
                })]), u("div", {class: "q-date__years-content col self-stretch row items-center"}, ce), u("div", {class: "col-auto"}, [u(tt, {
                    round: !0,
                    dense: !0,
                    flat: !0,
                    icon: G.value[1],
                    tabindex: r.value,
                    disable: $e(X), ...i("y+", {
                        onClick: () => {
                            O.value += yo
                        }
                    })
                })])])
            }
        };

        function De(R) {
            const X = {...h.value, day: R};
            if (e.range !== !1) if (z.value === null) {
                const ce = W.value.find(qe => qe.fill !== !0 && qe.i === R);
                if (e.noUnset !== !0 && ce.range !== void 0) return void Tn({
                    target: X,
                    from: ce.range.from,
                    to: ce.range.to
                });
                if (ce.selected === !0) return void Tn(X);
                const $e = Vn(X);
                z.value = {init: X, initHash: $e, final: X, finalHash: $e}, n("rangeStart", Me(X))
            } else {
                const ce = z.value.initHash, $e = Vn(X),
                    qe = ce <= $e ? {from: z.value.init, to: X} : {from: X, to: z.value.init};
                z.value = null, Bn(ce === $e ? X : {target: X, ...qe}), n("rangeEnd", {
                    from: Me(qe.from),
                    to: Me(qe.to)
                })
            } else Re(X, ne.value)
        }

        function gt(R) {
            if (z.value !== null) {
                const X = {...h.value, day: R};
                Object.assign(z.value, {final: X, finalHash: Vn(X)})
            }
        }

        return Object.assign(o, {
            setToday: U,
            setView: de,
            offsetCalendar: we,
            setCalendarTo: xe,
            setEditingRange: Ce
        }), () => {
            const R = [u("div", {class: "q-date__content col relative-position"}, [u($t, {name: "q-transition--fade"}, Ve[C.value])])],
                X = Ae(t.default);
            return X !== void 0 && R.push(u("div", {class: "q-date__actions"}, X)), e.name !== void 0 && e.disable !== !0 && m(R, "push"), u("div", {class: M.value, ...ue.value}, [ke(), u("div", {
                ref: g,
                class: "q-date__main col column",
                tabindex: -1
            }, R)])
        }
    }
});

function Fp(e, t, n) {
    let o;

    function l() {
        o !== void 0 && (ca.remove(o), o = void 0)
    }

    return Ke(() => {
        e.value === !0 && l()
    }), {
        removeFromHistory: l, addToHistory() {
            o = {condition: () => n.value === !0, handler: t}, ca.add(o)
        }
    }
}

let Br, Or, Kl, yd, _d, wd, Vl = 0, Lr = !1, _o = null;

function I1(e) {
    D1(e) && Ie(e)
}

function D1(e) {
    if (e.target === document.body || e.target.classList.contains("q-layout__backdrop")) return !0;
    const t = Xb(e), n = e.shiftKey && !e.deltaX, o = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
        l = n || o ? e.deltaY : e.deltaX;
    for (let a = 0; a < t.length; a++) {
        const i = t[a];
        if (Wy(i, o)) return o ? l < 0 && i.scrollTop === 0 || l > 0 && i.scrollTop + i.clientHeight === i.scrollHeight : l < 0 && i.scrollLeft === 0 || l > 0 && i.scrollLeft + i.clientWidth === i.scrollWidth
    }
    return !0
}

function xd(e) {
    e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop)
}

function Ia(e) {
    Lr !== !0 && (Lr = !0, requestAnimationFrame(() => {
        Lr = !1;
        const {height: t} = e.target, {clientHeight: n, scrollTop: o} = document.scrollingElement;
        Kl !== void 0 && t === window.innerHeight || (Kl = n - t, document.scrollingElement.scrollTop = o), o > Kl && (document.scrollingElement.scrollTop -= Math.ceil((o - Kl) / 8))
    }))
}

function Sd(e) {
    const t = document.body, n = window.visualViewport !== void 0;
    if (e === "add") {
        const {overflowY: o, overflowX: l} = window.getComputedStyle(t);
        Br = ar(window), Or = so(window), yd = t.style.left, _d = t.style.top, wd = window.location.href, t.style.left = `-${Br}px`, t.style.top = `-${Or}px`, l !== "hidden" && (l === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), o !== "hidden" && (o === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, Fe.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Ia, ut.passiveCapture), window.visualViewport.addEventListener("scroll", Ia, ut.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", xd, ut.passiveCapture))
    }
    Fe.is.desktop === !0 && Fe.is.mac === !0 && window[`${e}EventListener`]("wheel", I1, ut.notPassive), e === "remove" && (Fe.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", Ia, ut.passiveCapture), window.visualViewport.removeEventListener("scroll", Ia, ut.passiveCapture)) : window.removeEventListener("scroll", xd, ut.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, t.style.left = yd, t.style.top = _d, window.location.href === wd && window.scrollTo(Br, Or), Kl = void 0)
}

function _s(e) {
    let t = "add";
    if (e === !0) {
        if (Vl++, _o !== null) return clearTimeout(_o), void (_o = null);
        if (Vl > 1) return
    } else {
        if (Vl === 0 || (Vl--, Vl > 0)) return;
        if (t = "remove", Fe.is.ios === !0 && Fe.is.nativeMobile === !0) return _o !== null && clearTimeout(_o), void (_o = setTimeout(() => {
            Sd(t), _o = null
        }, 100))
    }
    Sd(t)
}

function zp() {
    let e;
    return {
        preventBodyScroll(t) {
            t === e || e === void 0 && t !== !0 || (e = t, _s(t))
        }
    }
}

let Da = 0;
const H1 = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center"
}, Cd = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"]
};
var Ca = ve({
    name: "QDialog",
    inheritAttrs: !1,
    props: {
        ...Ml, ..._a,
        transitionShow: String,
        transitionHide: String,
        persistent: Boolean,
        autoClose: Boolean,
        allowFocusOutside: Boolean,
        noEscDismiss: Boolean,
        noBackdropDismiss: Boolean,
        noRouteDismiss: Boolean,
        noRefocus: Boolean,
        noFocus: Boolean,
        noShake: Boolean,
        seamless: Boolean,
        maximized: Boolean,
        fullWidth: Boolean,
        fullHeight: Boolean,
        square: Boolean,
        position: {
            type: String,
            default: "standard",
            validator: e => e === "standard" || ["top", "bottom", "left", "right"].includes(e)
        }
    },
    emits: [...El, "shake", "click", "escapeKey"],
    setup(e, {slots: t, emit: n, attrs: o}) {
        const l = Se(), a = D(null), i = D(!1), r = D(!1);
        let s, d, c = null, p = null;
        const v = f(() => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0), {preventBodyScroll: m} = zp(), {registerTimeout: g} = _l(), {
                registerTick: x,
                removeTick: w
            } = ul(), {
                transitionProps: S,
                transitionStyle: y
            } = lr(e, () => Cd[e.position][0], () => Cd[e.position][1]), {
                showPortal: b,
                hidePortal: h,
                portalIsAccessible: C,
                renderPortal: A
            } = iu(l, a, Z, "dialog"), {hide: L} = Pl({
                showing: i,
                hideOnRouteChange: v,
                handleShow: B,
                handleHide: Y,
                processOnMount: !0
            }), {addToHistory: E, removeFromHistory: V} = Fp(i, L, v),
            O = f(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${H1[e.position]}` + (r.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : "")),
            z = f(() => i.value === !0 && e.seamless !== !0), M = f(() => e.autoClose === !0 ? {onClick: K} : {}),
            k = f(() => [`q-dialog fullscreen no-pointer-events q-dialog--${z.value === !0 ? "modal" : "seamless"}`, o.class]);

        function B(ie) {
            E(), p = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null, be(e.maximized), b(), r.value = !0, e.noFocus !== !0 ? (document.activeElement !== null && document.activeElement.blur(), x(J)) : w(), g(() => {
                if (l.proxy.$q.platform.is.ios === !0) {
                    if (e.seamless !== !0 && document.activeElement) {
                        const {
                                top: G,
                                bottom: I
                            } = document.activeElement.getBoundingClientRect(), {innerHeight: N} = window,
                            _ = window.visualViewport !== void 0 ? window.visualViewport.height : N;
                        G > 0 && I > _ / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - _, I >= N ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + I - _ / 2))), document.activeElement.scrollIntoView()
                    }
                    d = !0, a.value.click(), d = !1
                }
                b(!0), r.value = !1, n("show", ie)
            }, e.transitionDuration)
        }

        function Y(ie) {
            w(), V(), ae(!0), r.value = !0, h(), p !== null && (((ie && ie.type.indexOf("key") === 0 ? p.closest('[tabindex]:not([tabindex^="-"])') : void 0) || p).focus(), p = null), g(() => {
                h(!0), r.value = !1, n("hide", ie)
            }, e.transitionDuration)
        }

        function J(ie) {
            Al(() => {
                let G = a.value;
                G !== null && G.contains(document.activeElement) !== !0 && (G = (ie !== "" ? G.querySelector(ie) : null) || G.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || G.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || G.querySelector("[autofocus], [data-autofocus]") || G, G.focus({preventScroll: !0}))
            })
        }

        function $(ie) {
            ie && typeof ie.focus == "function" ? ie.focus({preventScroll: !0}) : J(), n("shake");
            const G = a.value;
            G !== null && (G.classList.remove("q-animate--scale"), G.classList.add("q-animate--scale"), c !== null && clearTimeout(c), c = setTimeout(() => {
                c = null, a.value !== null && (G.classList.remove("q-animate--scale"), J())
            }, 170))
        }

        function Q() {
            e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && $() : (n("escapeKey"), L()))
        }

        function ae(ie) {
            c !== null && (clearTimeout(c), c = null), ie !== !0 && i.value !== !0 || (be(!1), e.seamless !== !0 && (m(!1), ms(ee), wi(Q))), ie !== !0 && (p = null)
        }

        function be(ie) {
            ie === !0 ? s !== !0 && (Da < 1 && document.body.classList.add("q-body--dialog"), Da++, s = !0) : s === !0 && (Da < 2 && document.body.classList.remove("q-body--dialog"), Da--, s = !1)
        }

        function K(ie) {
            d !== !0 && (L(ie), n("click", ie))
        }

        function T(ie) {
            e.persistent !== !0 && e.noBackdropDismiss !== !0 ? L(ie) : e.noShake !== !0 && $()
        }

        function ee(ie) {
            e.allowFocusOutside !== !0 && C.value === !0 && Kv(a.value, ie.target) !== !0 && J('[tabindex]:not([tabindex="-1"])')
        }

        function Z() {
            return u("div", {
                role: "dialog",
                "aria-modal": z.value === !0 ? "true" : "false", ...o,
                class: k.value
            }, [u($t, {
                name: "q-transition--fade",
                appear: !0
            }, () => z.value === !0 ? u("div", {
                class: "q-dialog__backdrop fixed-full",
                style: y.value,
                "aria-hidden": "true",
                tabindex: -1,
                onClick: T
            }) : null), u($t, S.value, () => i.value === !0 ? u("div", {
                ref: a,
                class: O.value,
                style: y.value,
                tabindex: -1, ...M.value
            }, Ae(t.default)) : null)])
        }

        return pe(() => e.maximized, ie => {
            i.value === !0 && be(ie)
        }), pe(z, ie => {
            m(ie), ie === !0 ? (lp(ee), np(Q)) : (ms(ee), wi(Q))
        }), Object.assign(l.proxy, {
            focus: J, shake: $, __updateRefocusTarget(ie) {
                p = ie || null
            }
        }), Ke(ae), A
    }
});
const kd = 150;
var j1 = ve({
    name: "QDrawer",
    inheritAttrs: !1,
    props: {
        ...Ml, ...Ge,
        side: {type: String, default: "left", validator: e => ["left", "right"].includes(e)},
        width: {type: Number, default: 300},
        mini: Boolean,
        miniToOverlay: Boolean,
        miniWidth: {type: Number, default: 57},
        noMiniAnimation: Boolean,
        breakpoint: {type: Number, default: 1023},
        showIfAbove: Boolean,
        behavior: {type: String, validator: e => ["default", "desktop", "mobile"].includes(e), default: "default"},
        bordered: Boolean,
        elevated: Boolean,
        overlay: Boolean,
        persistent: Boolean,
        noSwipeOpen: Boolean,
        noSwipeClose: Boolean,
        noSwipeBackdrop: Boolean
    },
    emits: [...El, "onLayout", "miniState"],
    setup(e, {slots: t, emit: n, attrs: o}) {
        const l = Se(), {proxy: {$q: a}} = l, i = Je(e, a), {preventBodyScroll: r} = zp(), {
            registerTimeout: s,
            removeTimeout: d
        } = _l(), c = vt(No, at);
        if (c === at) return console.error("QDrawer needs to be child of QLayout"), at;
        let p, v, m = null;
        const g = D(e.behavior === "mobile" || e.behavior !== "desktop" && c.totalWidth.value <= e.breakpoint),
            x = f(() => e.mini === !0 && g.value !== !0), w = f(() => x.value === !0 ? e.miniWidth : e.width),
            S = D(e.showIfAbove === !0 && g.value === !1 || e.modelValue === !0),
            y = f(() => e.persistent !== !0 && (g.value === !0 || be.value === !0));

        function b(U, de) {
            if (L(), U !== !1 && c.animate(), P(0), g.value === !0) {
                const we = c.instances[J.value];
                we !== void 0 && we.belowBreakpoint === !0 && we.hide(!1), F(1), c.isContainer.value !== !0 && r(!0)
            } else F(0), U !== !1 && te(!1);
            s(() => {
                U !== !1 && te(!0), de !== !0 && n("show", U)
            }, kd)
        }

        function h(U, de) {
            E(), U !== !1 && c.animate(), F(0), P(z.value * w.value), he(), de !== !0 ? s(() => {
                n("hide", U)
            }, kd) : d()
        }

        const {show: C, hide: A} = Pl({
                showing: S,
                hideOnRouteChange: y,
                handleShow: b,
                handleHide: h
            }), {addToHistory: L, removeFromHistory: E} = Fp(S, A, y), V = {belowBreakpoint: g, hide: A},
            O = f(() => e.side === "right"), z = f(() => (a.lang.rtl === !0 ? -1 : 1) * (O.value === !0 ? 1 : -1)),
            M = D(0), k = D(!1), B = D(!1), Y = D(w.value * z.value), J = f(() => O.value === !0 ? "left" : "right"),
            $ = f(() => S.value === !0 && g.value === !1 && e.overlay === !1 ? e.miniToOverlay === !0 ? e.miniWidth : w.value : 0),
            Q = f(() => e.overlay === !0 || e.miniToOverlay === !0 || c.view.value.indexOf(O.value ? "R" : "L") > -1 || a.platform.is.ios === !0 && c.isContainer.value === !0),
            ae = f(() => e.overlay === !1 && S.value === !0 && g.value === !1),
            be = f(() => e.overlay === !0 && S.value === !0 && g.value === !1),
            K = f(() => "fullscreen q-drawer__backdrop" + (S.value === !1 && k.value === !1 ? " hidden" : "")),
            T = f(() => ({backgroundColor: `rgba(0,0,0,${.4 * M.value})`})),
            ee = f(() => O.value === !0 ? c.rows.value.top[2] === "r" : c.rows.value.top[0] === "l"),
            Z = f(() => O.value === !0 ? c.rows.value.bottom[2] === "r" : c.rows.value.bottom[0] === "l"),
            ie = f(() => {
                const U = {};
                return c.header.space === !0 && ee.value === !1 && (Q.value === !0 ? U.top = `${c.header.offset}px` : c.header.space === !0 && (U.top = `${c.header.size}px`)), c.footer.space === !0 && Z.value === !1 && (Q.value === !0 ? U.bottom = `${c.footer.offset}px` : c.footer.space === !0 && (U.bottom = `${c.footer.size}px`)), U
            }), G = f(() => {
                const U = {width: `${w.value}px`, transform: `translateX(${Y.value}px)`};
                return g.value === !0 ? U : Object.assign(U, ie.value)
            }), I = f(() => "q-drawer__content fit " + (c.isContainer.value !== !0 ? "scroll" : "overflow-auto")),
            N = f(() => `q-drawer q-drawer--${e.side}` + (B.value === !0 ? " q-drawer--mini-animate" : "") + (e.bordered === !0 ? " q-drawer--bordered" : "") + (i.value === !0 ? " q-drawer--dark q-dark" : "") + (k.value === !0 ? " no-transition" : S.value === !0 ? "" : " q-layout--prevent-focus") + (g.value === !0 ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${x.value === !0 ? "mini" : "standard"}` + (Q.value === !0 || ae.value !== !0 ? " fixed" : "") + (e.overlay === !0 || e.miniToOverlay === !0 ? " q-drawer--on-top" : "") + (ee.value === !0 ? " q-drawer--top-padding" : ""))),
            _ = f(() => {
                const U = a.lang.rtl === !0 ? e.side : J.value;
                return [[Jt, ne, void 0, {[U]: !0, mouse: !0}]]
            }), H = f(() => {
                const U = a.lang.rtl === !0 ? J.value : e.side;
                return [[Jt, ge, void 0, {[U]: !0, mouse: !0}]]
            }), re = f(() => {
                const U = a.lang.rtl === !0 ? J.value : e.side;
                return [[Jt, ge, void 0, {[U]: !0, mouse: !0, mouseAllDir: !0}]]
            });

        function q() {
            W(g, e.behavior === "mobile" || e.behavior !== "desktop" && c.totalWidth.value <= e.breakpoint)
        }

        function P(U) {
            U === void 0 ? We(() => {
                U = S.value === !0 ? 0 : w.value, P(z.value * U)
            }) : (c.isContainer.value !== !0 || O.value !== !0 || g.value !== !0 && Math.abs(U) !== w.value || (U += z.value * c.scrollbarWidth.value), Y.value = U)
        }

        function F(U) {
            M.value = U
        }

        function te(U) {
            const de = U === !0 ? "remove" : c.isContainer.value !== !0 ? "add" : "";
            de !== "" && document.body.classList[de]("q-body--drawer-toggle")
        }

        function oe() {
            m !== null && clearTimeout(m), l.proxy && l.proxy.$el && l.proxy.$el.classList.add("q-drawer--mini-animate"), B.value = !0, m = setTimeout(() => {
                m = null, B.value = !1, l && l.proxy && l.proxy.$el && l.proxy.$el.classList.remove("q-drawer--mini-animate")
            }, 150)
        }

        function ne(U) {
            if (S.value !== !1) return;
            const de = w.value, we = ct(U.distance.x, 0, de);
            if (U.isFinal === !0) return we >= Math.min(75, de) === !0 ? C() : (c.animate(), F(0), P(z.value * de)), void (k.value = !1);
            P((a.lang.rtl === !0 ? O.value !== !0 : O.value) ? Math.max(de - we, 0) : Math.min(0, we - de)), F(ct(we / de, 0, 1)), U.isFirst === !0 && (k.value = !0)
        }

        function ge(U) {
            if (S.value !== !0) return;
            const de = w.value, we = U.direction === e.side,
                xe = (a.lang.rtl === !0 ? we !== !0 : we) ? ct(U.distance.x, 0, de) : 0;
            if (U.isFinal === !0) return Math.abs(xe) < Math.min(75, de) === !0 ? (c.animate(), F(1), P(0)) : A(), void (k.value = !1);
            P(z.value * xe), F(ct(1 - xe / de, 0, 1)), U.isFirst === !0 && (k.value = !0)
        }

        function he() {
            r(!1), te(!0)
        }

        function me(U, de) {
            c.update(e.side, U, de)
        }

        function W(U, de) {
            U.value !== de && (U.value = de)
        }

        function ue(U, de) {
            me("size", U === !0 ? e.miniWidth : de)
        }

        return pe(g, U => {
            U === !0 ? (p = S.value, S.value === !0 && A(!1)) : e.overlay === !1 && e.behavior !== "mobile" && p !== !1 && (S.value === !0 ? (P(0), F(0), he()) : C(!1))
        }), pe(() => e.side, (U, de) => {
            c.instances[de] === V && (c.instances[de] = void 0, c[de].space = !1, c[de].offset = 0), c.instances[U] = V, c[U].size = w.value, c[U].space = ae.value, c[U].offset = $.value
        }), pe(c.totalWidth, () => {
            c.isContainer.value !== !0 && document.qScrollPrevented === !0 || q()
        }), pe(() => e.behavior + e.breakpoint, q), pe(c.isContainer, U => {
            S.value === !0 && r(U !== !0), U === !0 && q()
        }), pe(c.scrollbarWidth, () => {
            P(S.value === !0 ? 0 : void 0)
        }), pe($, U => {
            me("offset", U)
        }), pe(ae, U => {
            n("onLayout", U), me("space", U)
        }), pe(O, () => {
            P()
        }), pe(w, U => {
            P(), ue(e.miniToOverlay, U)
        }), pe(() => e.miniToOverlay, U => {
            ue(U, w.value)
        }), pe(() => a.lang.rtl, () => {
            P()
        }), pe(() => e.mini, () => {
            e.noMiniAnimation || e.modelValue === !0 && (oe(), c.animate())
        }), pe(x, U => {
            n("miniState", U)
        }), c.instances[e.side] = V, ue(e.miniToOverlay, w.value), me("space", ae.value), me("offset", $.value), e.showIfAbove === !0 && e.modelValue !== !0 && S.value === !0 && e["onUpdate:modelValue"] !== void 0 && n("update:modelValue", !0), mt(() => {
            n("onLayout", ae.value), n("miniState", x.value), p = e.showIfAbove === !0;
            const U = () => {
                (S.value === !0 ? b : h)(!1, !0)
            };
            c.totalWidth.value === 0 ? v = pe(c.totalWidth, () => {
                v(), v = void 0, S.value === !1 && e.showIfAbove === !0 && g.value === !1 ? C(!1) : U()
            }) : We(U)
        }), Ke(() => {
            v !== void 0 && v(), m !== null && (clearTimeout(m), m = null), S.value === !0 && he(), c.instances[e.side] === V && (c.instances[e.side] = void 0, me("size", 0), me("offset", 0), me("space", !1))
        }), () => {
            const U = [];
            g.value === !0 && (e.noSwipeOpen === !1 && U.push(Sn(u("div", {
                key: "open",
                class: `q-drawer__opener fixed-${e.side}`,
                "aria-hidden": "true"
            }), _.value)), U.push(fn("div", {
                ref: "backdrop",
                class: K.value,
                style: T.value,
                "aria-hidden": "true",
                onClick: A
            }, void 0, "backdrop", e.noSwipeBackdrop !== !0 && S.value === !0, () => re.value)));
            const de = x.value === !0 && t.mini !== void 0,
                we = [u("div", {...o, key: "" + de, class: [I.value, o.class]}, de === !0 ? t.mini() : Ae(t.default))];
            return e.elevated === !0 && S.value === !0 && we.push(u("div", {class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"})), U.push(fn("aside", {
                ref: "content",
                class: N.value,
                style: G.value
            }, we, "contentclose", e.noSwipeClose !== !0 && g.value === !0, () => H.value)), u("div", {class: "q-drawer-container"}, U)
        }
    }
});

function Np(e, t) {
    if (t && e === t) return null;
    const n = e.nodeName.toLowerCase();
    if (["div", "li", "ul", "ol", "blockquote"].includes(n) === !0) return e;
    const o = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, l = o.display;
    return l === "block" || l === "table" ? e : Np(e.parentNode)
}

function Rr(e, t, n) {
    return !(!e || e === document.body) && (n === !0 && e === t || (t === document ? document.body : t).contains(e.parentNode))
}

function Ip(e, t, n) {
    if (n || (n = document.createRange(), n.selectNode(e), n.setStart(e, 0)), t.count === 0) n.setEnd(e, t.count); else if (t.count > 0) if (e.nodeType === Node.TEXT_NODE) e.textContent.length < t.count ? t.count -= e.textContent.length : (n.setEnd(e, t.count), t.count = 0); else for (let o = 0; t.count !== 0 && o < e.childNodes.length; o++) n = Ip(e.childNodes[o], t, n);
    return n
}

const Q1 = /^https?:\/\//;

class K1 {
    constructor(t, n) {
        this.el = t, this.eVm = n, this._range = null
    }

    get selection() {
        if (this.el) {
            const t = document.getSelection();
            if (Rr(t.anchorNode, this.el, !0) && Rr(t.focusNode, this.el, !0)) return t
        }
        return null
    }

    get hasSelection() {
        return this.selection !== null && this.selection.toString().length !== 0
    }

    get range() {
        const t = this.selection;
        return t !== null && t.rangeCount ? t.getRangeAt(0) : this._range
    }

    get parent() {
        const t = this.range;
        if (t !== null) {
            const n = t.startContainer;
            return n.nodeType === document.ELEMENT_NODE ? n : n.parentNode
        }
        return null
    }

    get blockParent() {
        const t = this.parent;
        return t !== null ? Np(t, this.el) : null
    }

    save(t = this.range) {
        t !== null && (this._range = t)
    }

    restore(t = this._range) {
        const n = document.createRange(), o = document.getSelection();
        t !== null ? (n.setStart(t.startContainer, t.startOffset), n.setEnd(t.endContainer, t.endOffset), o.removeAllRanges(), o.addRange(n)) : (o.selectAllChildren(this.el), o.collapseToEnd())
    }

    savePosition() {
        let t, n = -1;
        const o = document.getSelection(), l = this.el.parentNode;
        if (o.focusNode && Rr(o.focusNode, l)) for (t = o.focusNode, n = o.focusOffset; t && t !== l;) t !== this.el && t.previousSibling ? (t = t.previousSibling, n += t.textContent.length) : t = t.parentNode;
        this.savedPos = n
    }

    restorePosition(t = 0) {
        if (this.savedPos > 0 && this.savedPos < t) {
            const n = window.getSelection(), o = Ip(this.el, {count: this.savedPos});
            o && (o.collapse(!1), n.removeAllRanges(), n.addRange(o))
        }
    }

    hasParent(t, n) {
        const o = n ? this.parent : this.blockParent;
        return o !== null && o.nodeName.toLowerCase() === t.toLowerCase()
    }

    hasParents(t, n, o = this.parent) {
        return o !== null && (t.includes(o.nodeName.toLowerCase()) === !0 || n === !0 && this.hasParents(t, n, o.parentNode))
    }

    is(t, n) {
        if (this.selection === null) return !1;
        switch (t) {
            case"formatBlock":
                return n === "DIV" && this.parent === this.el || this.hasParent(n, n === "PRE");
            case"link":
                return this.hasParent("A", !0);
            case"fontSize":
                return document.queryCommandValue(t) === n;
            case"fontName":
                const o = document.queryCommandValue(t);
                return o === `"${n}"` || o === n;
            case"fullscreen":
                return this.eVm.inFullscreen.value;
            case"viewsource":
                return this.eVm.isViewingSource.value;
            case void 0:
                return !1;
            default:
                const l = document.queryCommandState(t);
                return n !== void 0 ? l === n : l
        }
    }

    getParentAttribute(t) {
        return this.parent !== null ? this.parent.getAttribute(t) : null
    }

    can(t) {
        return t === "outdent" ? this.hasParents(["blockquote", "li"], !0) : t === "indent" ? this.hasParents(["li"], !0) : t === "link" ? this.selection !== null || this.is("link") : void 0
    }

    apply(t, n, o = xt) {
        if (t === "formatBlock") ["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(n) && this.is(t, n) && (t = "outdent", n = null), n === "PRE" && this.is(t, "PRE") && (n = "P"); else {
            if (t === "print") {
                o();
                const l = window.open();
                return l.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `), l.print(), void l.close()
            }
            if (t === "link") {
                const l = this.getParentAttribute("href");
                if (l === null) {
                    const a = this.selectWord(this.selection), i = a ? a.toString() : "";
                    if (!i.length && (!this.range || !this.range.cloneContents().querySelector("img"))) return;
                    this.eVm.editLinkUrl.value = Q1.test(i) ? i : "https://", document.execCommand("createLink", !1, this.eVm.editLinkUrl.value), this.save(a.getRangeAt(0))
                } else this.eVm.editLinkUrl.value = l, this.range.selectNodeContents(this.parent), this.save();
                return
            }
            if (t === "fullscreen") return this.eVm.toggleFullscreen(), void o();
            if (t === "viewsource") return this.eVm.isViewingSource.value = this.eVm.isViewingSource.value === !1, this.eVm.setContent(this.eVm.props.modelValue), void o()
        }
        document.execCommand(t, !1, n), o()
    }

    selectWord(t) {
        if (t === null || t.isCollapsed !== !0 || t.modify === void 0) return t;
        const n = document.createRange();
        n.setStart(t.anchorNode, t.anchorOffset), n.setEnd(t.focusNode, t.focusOffset);
        const o = n.collapsed ? ["backward", "forward"] : ["forward", "backward"];
        n.detach();
        const l = t.focusNode, a = t.focusOffset;
        return t.collapse(t.anchorNode, t.anchorOffset), t.modify("move", o[0], "character"), t.modify("move", o[1], "word"), t.extend(l, a), t.modify("extend", o[1], "character"), t.modify("extend", o[0], "word"), t
    }
}

var Dp = ve({
    name: "QTooltip",
    inheritAttrs: !1,
    props: {
        ...ou, ...Ml, ..._a,
        maxHeight: {type: String, default: null},
        maxWidth: {type: String, default: null},
        transitionShow: {default: "jump-down"},
        transitionHide: {default: "jump-up"},
        anchor: {type: String, default: "bottom middle", validator: ki},
        self: {type: String, default: "top middle", validator: ki},
        offset: {type: Array, default: () => [14, 14], validator: ip},
        scrollTarget: {default: void 0},
        delay: {type: Number, default: 0},
        hideDelay: {type: Number, default: 0}
    },
    emits: [...El],
    setup(e, {slots: t, emit: n, attrs: o}) {
        let l, a;
        const i = Se(), {proxy: {$q: r}} = i, s = D(null), d = D(!1), c = f(() => qi(e.anchor, r.lang.rtl)),
            p = f(() => qi(e.self, r.lang.rtl)), v = f(() => e.persistent !== !0), {
                registerTick: m,
                removeTick: g
            } = ul(), {registerTimeout: x} = _l(), {transitionProps: w, transitionStyle: S} = lr(e), {
                localScrollTarget: y,
                changeScrollEvent: b,
                unconfigureScrollTarget: h
            } = Xv(e, be), {anchorEl: C, canShow: A, anchorEvents: L} = lu({showing: d, configureAnchorEl: ae}), {
                show: E,
                hide: V
            } = Pl({showing: d, canShow: A, handleShow: k, handleHide: B, hideOnRouteChange: v, processOnMount: !0});
        Object.assign(L, {delayShow: $, delayHide: Q});
        const {showPortal: O, hidePortal: z, renderPortal: M} = iu(i, s, T, "tooltip");
        if (r.platform.is.mobile === !0) {
            const ee = {
                anchorEl: C, innerRef: s, onClickOutside(ie) {
                    return V(ie), ie.target.classList.contains("q-dialog__backdrop") && Ie(ie), !0
                }
            }, Z = f(() => e.modelValue === null && e.persistent !== !0 && d.value === !0);
            pe(Z, ie => {
                (ie === !0 ? ap : Ci)(ee)
            }), Ke(() => {
                Ci(ee)
            })
        }

        function k(ee) {
            O(), m(() => {
                a = new MutationObserver(() => J()), a.observe(s.value, {
                    attributes: !1,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), J(), be()
            }), l === void 0 && (l = pe(() => r.screen.width + "|" + r.screen.height + "|" + e.self + "|" + e.anchor + "|" + r.lang.rtl, J)), x(() => {
                O(!0), n("show", ee)
            }, e.transitionDuration)
        }

        function B(ee) {
            g(), z(), Y(), x(() => {
                z(!0), n("hide", ee)
            }, e.transitionDuration)
        }

        function Y() {
            a !== void 0 && (a.disconnect(), a = void 0), l !== void 0 && (l(), l = void 0), h(), Ht(L, "tooltipTemp")
        }

        function J() {
            ru({
                targetEl: s.value,
                offset: e.offset,
                anchorEl: C.value,
                anchorOrigin: c.value,
                selfOrigin: p.value,
                maxHeight: e.maxHeight,
                maxWidth: e.maxWidth
            })
        }

        function $(ee) {
            if (r.platform.is.mobile === !0) {
                xn(), document.body.classList.add("non-selectable");
                const Z = C.value,
                    ie = ["touchmove", "touchcancel", "touchend", "click"].map(G => [Z, G, "delayHide", "passiveCapture"]);
                wt(L, "tooltipTemp", ie)
            }
            x(() => {
                E(ee)
            }, e.delay)
        }

        function Q(ee) {
            r.platform.is.mobile === !0 && (Ht(L, "tooltipTemp"), xn(), setTimeout(() => {
                document.body.classList.remove("non-selectable")
            }, 10)), x(() => {
                V(ee)
            }, e.hideDelay)
        }

        function ae() {
            if (e.noParentEvent === !0 || C.value === null) return;
            const ee = r.platform.is.mobile === !0 ? [[C.value, "touchstart", "delayShow", "passive"]] : [[C.value, "mouseenter", "delayShow", "passive"], [C.value, "mouseleave", "delayHide", "passive"]];
            wt(L, "anchor", ee)
        }

        function be() {
            if (C.value !== null || e.scrollTarget !== void 0) {
                y.value = An(C.value, e.scrollTarget);
                const ee = e.noParentEvent === !0 ? J : V;
                b(y.value, ee)
            }
        }

        function K() {
            return d.value === !0 ? u("div", {
                ...o,
                ref: s,
                class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", o.class],
                style: [o.style, S.value],
                role: "tooltip"
            }, Ae(t.default)) : null
        }

        function T() {
            return u($t, w.value, K)
        }

        return Ke(Y), Object.assign(i.proxy, {updatePosition: J}), M
    }
}), ka = ve({
    name: "QItem",
    props: {
        ...Ge, ...$l,
        tag: {type: String, default: "div"},
        active: {type: Boolean, default: null},
        clickable: Boolean,
        dense: Boolean,
        insetLevel: Number,
        tabindex: [String, Number],
        focused: Boolean,
        manualFocus: Boolean
    },
    emits: ["click", "keyup"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: o}} = Se(), l = Je(e, o), {
                hasLink: a,
                linkAttrs: i,
                linkClass: r,
                linkTag: s,
                navigateOnClick: d
            } = or(), c = D(null), p = D(null), v = f(() => e.clickable === !0 || a.value === !0 || e.tag === "label"),
            m = f(() => e.disable !== !0 && v.value === !0),
            g = f(() => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (l.value === !0 ? " q-item--dark" : "") + (a.value === !0 && e.active === null ? r.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (m.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")),
            x = f(() => e.insetLevel === void 0 ? null : {["padding" + (o.lang.rtl === !0 ? "Right" : "Left")]: 16 + 56 * e.insetLevel + "px"});

        function w(b) {
            m.value === !0 && (p.value !== null && (b.qKeyEvent !== !0 && document.activeElement === c.value ? p.value.focus() : document.activeElement === p.value && c.value.focus()), d(b))
        }

        function S(b) {
            if (m.value === !0 && dn(b, 13) === !0) {
                Ie(b), b.qKeyEvent = !0;
                const h = new MouseEvent("click", b);
                h.qKeyEvent = !0, c.value.dispatchEvent(h)
            }
            n("keyup", b)
        }

        function y() {
            const b = ha(t.default, []);
            return m.value === !0 && b.unshift(u("div", {class: "q-focus-helper", tabindex: -1, ref: p})), b
        }

        return () => {
            const b = {ref: c, class: g.value, style: x.value, role: "listitem", onClick: w, onKeyup: S};
            return m.value === !0 ? (b.tabindex = e.tabindex || "0", Object.assign(b, i.value)) : v.value === !0 && (b["aria-disabled"] = "true"), u(s.value, b, y())
        }
    }
}), In = ve({
    name: "QItemSection",
    props: {avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean},
    setup(e, {slots: t}) {
        const n = f(() => `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main"}` + (e.top === !0 ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === !0 ? " q-item__section--avatar" : "") + (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") + (e.noWrap === !0 ? " q-item__section--nowrap" : ""));
        return () => u("div", {class: n.value}, Ae(t.default))
    }
});

function Hp(e, t, n) {
    t.handler ? t.handler(e, n, n.caret) : n.runCmd(t.cmd, t.param)
}

function Su(e) {
    return u("div", {class: "q-editor__toolbar-group"}, e)
}

function jp(e, t, n, o = !1) {
    const l = o || t.type === "toggle" && (t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param)), a = [];
    if (t.tip && e.$q.platform.is.desktop) {
        const i = t.key ? u("div", [u("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
        a.push(u(Dp, {delay: 1e3}, () => [u("div", {innerHTML: t.tip}), i]))
    }
    return u(tt, {
        ...e.buttonProps.value,
        icon: t.icon !== null ? t.icon : void 0,
        color: l ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor,
        textColor: l && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor,
        label: t.label,
        disable: !!t.disable && (typeof t.disable != "function" || t.disable(e)),
        size: "sm",
        onClick(i) {
            n && n(), Hp(i, t, e)
        }
    }, () => a)
}

function U1(e, t) {
    const n = t.list === "only-icons";
    let o, l, a = t.label, i = t.icon !== null ? t.icon : void 0;

    function r() {
        d.component.proxy.hide()
    }

    if (n) l = t.options.map(c => {
        const p = c.type === void 0 && e.caret.is(c.cmd, c.param);
        return p && (a = c.tip, i = c.icon !== null ? c.icon : void 0), jp(e, c, r, p)
    }), o = e.toolbarBackgroundClass.value, l = [Su(l)]; else {
        const c = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null,
            p = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null,
            v = t.list === "no-icons";
        l = t.options.map(m => {
            const g = !!m.disable && m.disable(e), x = m.type === void 0 && e.caret.is(m.cmd, m.param);
            x && (a = m.tip, i = m.icon !== null ? m.icon : void 0);
            const w = m.htmlTip;
            return u(ka, {
                active: x, activeClass: c, clickable: !0, disable: g, dense: !0, onClick(S) {
                    r(), e.contentRef.value !== null && e.contentRef.value.focus(), e.caret.restore(), Hp(S, m, e)
                }
            }, () => [v === !0 ? null : u(In, {
                class: x ? c : p,
                side: !0
            }, () => u(Ze, {name: m.icon !== null ? m.icon : void 0})), u(In, w ? () => u("div", {
                class: "text-no-wrap",
                innerHTML: m.htmlTip
            }) : m.tip ? () => u("div", {class: "text-no-wrap"}, m.tip) : void 0)])
        }), o = [e.toolbarBackgroundClass.value, p]
    }
    const s = t.highlight && a !== t.label, d = u(rp, {
        ...e.buttonProps.value,
        noCaps: !0,
        noWrap: !0,
        color: s ? e.props.toolbarToggleColor : e.props.toolbarColor,
        textColor: s && !e.props.toolbarPush ? null : e.props.toolbarTextColor,
        label: t.fixedLabel ? t.label : a,
        icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : i,
        contentClass: o,
        onShow: c => e.emit("dropdownShow", c),
        onHide: c => e.emit("dropdownHide", c),
        onBeforeShow: c => e.emit("dropdownBeforeShow", c),
        onBeforeHide: c => e.emit("dropdownBeforeHide", c)
    }, () => l);
    return d
}

function W1(e) {
    if (e.caret) return e.buttons.value.filter(t => !e.isViewingSource.value || t.find(n => n.cmd === "viewsource")).map(t => Su(t.map(n => (!e.isViewingSource.value || n.cmd === "viewsource") && (n.type === "slot" ? Ae(e.slots[n.slot]) : n.type === "dropdown" ? U1(e, n) : jp(e, n)))))
}

function Y1(e, t, n, o = {}) {
    const l = Object.keys(o);
    if (l.length === 0) return {};
    const a = {default_font: {cmd: "fontName", param: e, icon: n, tip: t}};
    return l.forEach(i => {
        const r = o[i];
        a[i] = {cmd: "fontName", param: r, icon: n, tip: r, htmlTip: `<font face="${r}">${r}</font>`}
    }), a
}

function X1(e) {
    if (e.caret) {
        const t = e.props.toolbarColor || e.props.toolbarTextColor;
        let n = e.editLinkUrl.value;
        const o = () => {
            e.caret.restore(), n !== e.editLinkUrl.value && document.execCommand("createLink", !1, n === "" ? " " : n), e.editLinkUrl.value = null
        };
        return [u("div", {class: `q-mx-xs text-${t}`}, `${e.$q.lang.editor.url}: `), u("input", {
            key: "qedt_btm_input",
            class: "col q-editor__link-input",
            value: n,
            onInput: l => {
                _t(l), n = l.target.value
            },
            onKeydown: l => {
                if (zo(l) !== !0) switch (l.keyCode) {
                    case 13:
                        return Bt(l), o();
                    case 27:
                        Bt(l), e.caret.restore(), e.editLinkUrl.value && e.editLinkUrl.value !== "https://" || document.execCommand("unlink"), e.editLinkUrl.value = null;
                        break
                }
            }
        }), Su([u(tt, {
            key: "qedt_btm_rem",
            tabindex: -1, ...e.buttonProps.value,
            label: e.$q.lang.label.remove,
            noCaps: !0,
            onClick: () => {
                e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null
            }
        }), u(tt, {
            key: "qedt_btm_upd", ...e.buttonProps.value,
            label: e.$q.lang.label.update,
            noCaps: !0,
            onClick: o
        })])]
    }
}

const qd = /^on[A-Z]/;

function Qp(e, t) {
    const n = {listeners: D({}), attributes: D({})};

    function o() {
        const l = {}, a = {};
        for (const i in e) i !== "class" && i !== "style" && qd.test(i) === !1 && (l[i] = e[i]);
        for (const i in t.props) qd.test(i) === !0 && (a[i] = t.props[i]);
        n.attributes.value = l, n.listeners.value = a
    }

    return kl(o), o(), n
}

const Z1 = Object.prototype.toString, Vr = Object.prototype.hasOwnProperty,
    G1 = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map(e => "[object " + e + "]"));

function Td(e) {
    if (e !== Object(e) || G1.has(Z1.call(e)) === !0 || e.constructor && Vr.call(e, "constructor") === !1 && Vr.call(e.constructor.prototype, "isPrototypeOf") === !1) return !1;
    let t;
    for (t in e) ;
    return t === void 0 || Vr.call(e, t)
}

function Kp() {
    let e, t, n, o, l, a, i = arguments[0] || {}, r = 1, s = !1;
    const d = arguments.length;
    for (typeof i == "boolean" && (s = i, i = arguments[1] || {}, r = 2), Object(i) !== i && typeof i != "function" && (i = {}), d === r && (i = this, r--); r < d; r++) if ((e = arguments[r]) !== null) for (t in e) n = i[t], o = e[t], i !== o && (s === !0 && o && ((l = Array.isArray(o)) || Td(o) === !0) ? (a = l === !0 ? Array.isArray(n) === !0 ? n : [] : Td(n) === !0 ? n : {}, i[t] = Kp(s, a, o)) : o !== void 0 && (i[t] = o));
    return i
}

var J1 = ve({
    name: "QEditor",
    props: {
        ...Ge, ...mu,
        modelValue: {type: String, required: !0},
        readonly: Boolean,
        disable: Boolean,
        minHeight: {type: String, default: "10rem"},
        maxHeight: String,
        height: String,
        definitions: Object,
        fonts: Object,
        placeholder: String,
        toolbar: {
            type: Array, validator: e => e.length === 0 || e.every(t => t.length), default() {
                return [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]]
            }
        },
        toolbarColor: String,
        toolbarBg: String,
        toolbarTextColor: String,
        toolbarToggleColor: {type: String, default: "primary"},
        toolbarOutline: Boolean,
        toolbarPush: Boolean,
        toolbarRounded: Boolean,
        paragraphTag: {type: String, validator: e => ["div", "p"].includes(e), default: "div"},
        contentStyle: Object,
        contentClass: [Object, Array, String],
        square: Boolean,
        flat: Boolean,
        dense: Boolean
    },
    emits: [...hu, "update:modelValue", "keydown", "click", "mouseup", "keyup", "touchend", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"],
    setup(e, {slots: t, emit: n, attrs: o}) {
        const {proxy: l, vnode: a} = Se(), {$q: i} = l, r = Je(e, i), {inFullscreen: s, toggleFullscreen: d} = gu(),
            c = Qp(o, a), p = D(null), v = D(null), m = D(null), g = D(!1), x = f(() => !e.readonly && !e.disable);
        let w, S, y = e.modelValue;
        document.execCommand("defaultParagraphSeparator", !1, e.paragraphTag), w = window.getComputedStyle(document.body).fontFamily;
        const b = f(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), h = f(() => ({
            type: "a",
            flat: e.toolbarOutline !== !0 && e.toolbarPush !== !0,
            noWrap: !0,
            outline: e.toolbarOutline,
            push: e.toolbarPush,
            rounded: e.toolbarRounded,
            dense: !0,
            color: e.toolbarColor,
            disable: !x.value,
            size: "sm"
        })), C = f(() => {
            const N = i.lang.editor, _ = i.iconSet.editor;
            return {
                bold: {cmd: "bold", icon: _.bold, tip: N.bold, key: 66},
                italic: {cmd: "italic", icon: _.italic, tip: N.italic, key: 73},
                strike: {cmd: "strikeThrough", icon: _.strikethrough, tip: N.strikethrough, key: 83},
                underline: {cmd: "underline", icon: _.underline, tip: N.underline, key: 85},
                unordered: {cmd: "insertUnorderedList", icon: _.unorderedList, tip: N.unorderedList},
                ordered: {cmd: "insertOrderedList", icon: _.orderedList, tip: N.orderedList},
                subscript: {
                    cmd: "subscript",
                    icon: _.subscript,
                    tip: N.subscript,
                    htmlTip: "x<subscript>2</subscript>"
                },
                superscript: {
                    cmd: "superscript",
                    icon: _.superscript,
                    tip: N.superscript,
                    htmlTip: "x<superscript>2</superscript>"
                },
                link: {
                    cmd: "link",
                    disable: H => H.caret && !H.caret.can("link"),
                    icon: _.hyperlink,
                    tip: N.hyperlink,
                    key: 76
                },
                fullscreen: {cmd: "fullscreen", icon: _.toggleFullscreen, tip: N.toggleFullscreen, key: 70},
                viewsource: {cmd: "viewsource", icon: _.viewSource, tip: N.viewSource},
                quote: {cmd: "formatBlock", param: "BLOCKQUOTE", icon: _.quote, tip: N.quote, key: 81},
                left: {cmd: "justifyLeft", icon: _.left, tip: N.left},
                center: {cmd: "justifyCenter", icon: _.center, tip: N.center},
                right: {cmd: "justifyRight", icon: _.right, tip: N.right},
                justify: {cmd: "justifyFull", icon: _.justify, tip: N.justify},
                print: {type: "no-state", cmd: "print", icon: _.print, tip: N.print, key: 80},
                outdent: {
                    type: "no-state",
                    disable: H => H.caret && !H.caret.can("outdent"),
                    cmd: "outdent",
                    icon: _.outdent,
                    tip: N.outdent
                },
                indent: {
                    type: "no-state",
                    disable: H => H.caret && !H.caret.can("indent"),
                    cmd: "indent",
                    icon: _.indent,
                    tip: N.indent
                },
                removeFormat: {type: "no-state", cmd: "removeFormat", icon: _.removeFormat, tip: N.removeFormat},
                hr: {type: "no-state", cmd: "insertHorizontalRule", icon: _.hr, tip: N.hr},
                undo: {type: "no-state", cmd: "undo", icon: _.undo, tip: N.undo, key: 90},
                redo: {type: "no-state", cmd: "redo", icon: _.redo, tip: N.redo, key: 89},
                h1: {
                    cmd: "formatBlock",
                    param: "H1",
                    icon: _.heading1 || _.heading,
                    tip: N.heading1,
                    htmlTip: `<h1 class="q-ma-none">${N.heading1}</h1>`
                },
                h2: {
                    cmd: "formatBlock",
                    param: "H2",
                    icon: _.heading2 || _.heading,
                    tip: N.heading2,
                    htmlTip: `<h2 class="q-ma-none">${N.heading2}</h2>`
                },
                h3: {
                    cmd: "formatBlock",
                    param: "H3",
                    icon: _.heading3 || _.heading,
                    tip: N.heading3,
                    htmlTip: `<h3 class="q-ma-none">${N.heading3}</h3>`
                },
                h4: {
                    cmd: "formatBlock",
                    param: "H4",
                    icon: _.heading4 || _.heading,
                    tip: N.heading4,
                    htmlTip: `<h4 class="q-ma-none">${N.heading4}</h4>`
                },
                h5: {
                    cmd: "formatBlock",
                    param: "H5",
                    icon: _.heading5 || _.heading,
                    tip: N.heading5,
                    htmlTip: `<h5 class="q-ma-none">${N.heading5}</h5>`
                },
                h6: {
                    cmd: "formatBlock",
                    param: "H6",
                    icon: _.heading6 || _.heading,
                    tip: N.heading6,
                    htmlTip: `<h6 class="q-ma-none">${N.heading6}</h6>`
                },
                p: {cmd: "formatBlock", param: e.paragraphTag, icon: _.heading, tip: N.paragraph},
                code: {cmd: "formatBlock", param: "PRE", icon: _.code, htmlTip: `<code>${N.code}</code>`},
                "size-1": {
                    cmd: "fontSize",
                    param: "1",
                    icon: _.size1 || _.size,
                    tip: N.size1,
                    htmlTip: `<font size="1">${N.size1}</font>`
                },
                "size-2": {
                    cmd: "fontSize",
                    param: "2",
                    icon: _.size2 || _.size,
                    tip: N.size2,
                    htmlTip: `<font size="2">${N.size2}</font>`
                },
                "size-3": {
                    cmd: "fontSize",
                    param: "3",
                    icon: _.size3 || _.size,
                    tip: N.size3,
                    htmlTip: `<font size="3">${N.size3}</font>`
                },
                "size-4": {
                    cmd: "fontSize",
                    param: "4",
                    icon: _.size4 || _.size,
                    tip: N.size4,
                    htmlTip: `<font size="4">${N.size4}</font>`
                },
                "size-5": {
                    cmd: "fontSize",
                    param: "5",
                    icon: _.size5 || _.size,
                    tip: N.size5,
                    htmlTip: `<font size="5">${N.size5}</font>`
                },
                "size-6": {
                    cmd: "fontSize",
                    param: "6",
                    icon: _.size6 || _.size,
                    tip: N.size6,
                    htmlTip: `<font size="6">${N.size6}</font>`
                },
                "size-7": {
                    cmd: "fontSize",
                    param: "7",
                    icon: _.size7 || _.size,
                    tip: N.size7,
                    htmlTip: `<font size="7">${N.size7}</font>`
                }
            }
        }), A = f(() => {
            const N = e.definitions || {},
                _ = e.definitions || e.fonts ? Kp(!0, {}, C.value, N, Y1(w, i.lang.editor.defaultFont, i.iconSet.editor.font, e.fonts)) : C.value;
            return e.toolbar.map(H => H.map(re => {
                if (re.options) return {
                    type: "dropdown",
                    icon: re.icon,
                    label: re.label,
                    size: "sm",
                    dense: !0,
                    fixedLabel: re.fixedLabel,
                    fixedIcon: re.fixedIcon,
                    highlight: re.highlight,
                    list: re.list,
                    options: re.options.map(P => _[P])
                };
                const q = _[re];
                return q ? q.type === "no-state" || N[re] && (q.cmd === void 0 || C.value[q.cmd] && C.value[q.cmd].type === "no-state") ? q : Object.assign({type: "toggle"}, q) : {
                    type: "slot",
                    slot: re
                }
            }))
        }), L = {
            $q: i,
            props: e,
            slots: t,
            emit: n,
            inFullscreen: s,
            toggleFullscreen: d,
            runCmd: Z,
            isViewingSource: g,
            editLinkUrl: m,
            toolbarBackgroundClass: b,
            buttonProps: h,
            contentRef: v,
            buttons: A,
            setContent: ee
        };
        pe(() => e.modelValue, N => {
            y !== N && (y = N, ee(N, !0))
        }), pe(m, N => {
            n(`link${N ? "Show" : "Hide"}`)
        });
        const E = f(() => e.toolbar && e.toolbar.length !== 0), V = f(() => {
                const N = {}, _ = H => {
                    H.key && (N[H.key] = {cmd: H.cmd, param: H.param})
                };
                return A.value.forEach(H => {
                    H.forEach(re => {
                        re.options ? re.options.forEach(_) : _(re)
                    })
                }), N
            }), O = f(() => s.value ? e.contentStyle : [{
                minHeight: e.minHeight,
                height: e.height,
                maxHeight: e.maxHeight
            }, e.contentStyle]),
            z = f(() => `q-editor q-editor--${g.value === !0 ? "source" : "default"}` + (e.disable === !0 ? " disabled" : "") + (s.value === !0 ? " fullscreen column" : "") + (e.square === !0 ? " q-editor--square no-border-radius" : "") + (e.flat === !0 ? " q-editor--flat" : "") + (e.dense === !0 ? " q-editor--dense" : "") + (r.value === !0 ? " q-editor--dark q-dark" : "")),
            M = f(() => [e.contentClass, "q-editor__content", {col: s.value, "overflow-auto": s.value || e.maxHeight}]),
            k = f(() => e.disable === !0 ? {"aria-disabled": "true"} : e.readonly === !0 ? {"aria-readonly": "true"} : {});

        function B() {
            if (v.value !== null) {
                const N = `inner${g.value === !0 ? "Text" : "HTML"}`, _ = v.value[N];
                _ !== e.modelValue && (y = _, n("update:modelValue", _))
            }
        }

        function Y(N) {
            if (n("keydown", N), N.ctrlKey !== !0 || zo(N) === !0) return void ie();
            const _ = N.keyCode, H = V.value[_];
            if (H !== void 0) {
                const {cmd: re, param: q} = H;
                Ie(N), Z(re, q, !1)
            }
        }

        function J(N) {
            ie(), n("click", N)
        }

        function $(N) {
            if (v.value !== null) {
                const {scrollTop: _, scrollHeight: H} = v.value;
                S = H - _
            }
            L.caret.save(), n("blur", N)
        }

        function Q(N) {
            We(() => {
                v.value !== null && S !== void 0 && (v.value.scrollTop = v.value.scrollHeight - S)
            }), n("focus", N)
        }

        function ae(N) {
            const _ = p.value;
            if (_ !== null && _.contains(N.target) === !0 && (N.relatedTarget === null || _.contains(N.relatedTarget) !== !0)) {
                const H = `inner${g.value === !0 ? "Text" : "HTML"}`;
                L.caret.restorePosition(v.value[H].length), ie()
            }
        }

        function be(N) {
            const _ = p.value;
            _ === null || _.contains(N.target) !== !0 || N.relatedTarget !== null && _.contains(N.relatedTarget) === !0 || (L.caret.savePosition(), ie())
        }

        function K() {
            S = void 0
        }

        function T(N) {
            L.caret.save()
        }

        function ee(N, _) {
            if (v.value !== null) {
                _ === !0 && L.caret.savePosition();
                const H = `inner${g.value === !0 ? "Text" : "HTML"}`;
                v.value[H] = N, _ === !0 && (L.caret.restorePosition(v.value[H].length), ie())
            }
        }

        function Z(N, _, H = !0) {
            G(), L.caret.restore(), L.caret.apply(N, _, () => {
                G(), L.caret.save(), H && ie()
            })
        }

        function ie() {
            setTimeout(() => {
                m.value = null, l.$forceUpdate()
            }, 1)
        }

        function G() {
            Al(() => {
                v.value !== null && v.value.focus({preventScroll: !0})
            })
        }

        function I() {
            return v.value
        }

        return mt(() => {
            L.caret = l.caret = new K1(v.value, L), ee(e.modelValue), ie(), document.addEventListener("selectionchange", T)
        }), Ke(() => {
            document.removeEventListener("selectionchange", T)
        }), Object.assign(l, {runCmd: Z, refreshToolbar: ie, focus: G, getContentEl: I}), () => {
            let N;
            if (E.value) {
                const _ = [u("div", {
                    key: "qedt_top",
                    class: "q-editor__toolbar row no-wrap scroll-x" + b.value
                }, W1(L))];
                m.value !== null && _.push(u("div", {
                    key: "qedt_btm",
                    class: "q-editor__toolbar row no-wrap items-center scroll-x" + b.value
                }, X1(L))), N = u("div", {key: "toolbar_ctainer", class: "q-editor__toolbars-container"}, _)
            }
            return u("div", {
                ref: p,
                class: z.value,
                style: {height: s.value === !0 ? "100%" : null}, ...k.value,
                onFocusin: ae,
                onFocusout: be
            }, [N, u("div", {
                ref: v,
                style: O.value,
                class: M.value,
                contenteditable: x.value,
                placeholder: e.placeholder, ...c.listeners.value,
                onInput: B,
                onKeydown: Y,
                onClick: J,
                onBlur: $,
                onFocus: Q,
                onMousedown: K,
                onTouchstartPassive: K
            })])
        }
    }
}), Mi = ve({
    name: "QItemLabel",
    props: {overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String]},
    setup(e, {slots: t}) {
        const n = f(() => parseInt(e.lines, 10)),
            o = f(() => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")),
            l = f(() => e.lines !== void 0 && n.value > 1 ? {
                overflow: "hidden",
                display: "-webkit-box",
                "-webkit-box-orient": "vertical",
                "-webkit-line-clamp": n.value
            } : null);
        return () => u("div", {style: l.value, class: o.value}, Ae(t.default))
    }
}), ir = ve({
    name: "QSlideTransition",
    props: {appear: Boolean, duration: {type: Number, default: 300}},
    emits: ["show", "hide"],
    setup(e, {slots: t, emit: n}) {
        let o, l, a, i, r = !1, s = null, d = null;

        function c() {
            o && o(), o = null, r = !1, s !== null && (clearTimeout(s), s = null), d !== null && (clearTimeout(d), d = null), l !== void 0 && l.removeEventListener("transitionend", a), a = null
        }

        function p(x, w, S) {
            w !== void 0 && (x.style.height = `${w}px`), x.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, r = !0, o = S
        }

        function v(x, w) {
            x.style.overflowY = null, x.style.height = null, x.style.transition = null, c(), w !== i && n(w)
        }

        function m(x, w) {
            let S = 0;
            l = x, r === !0 ? (c(), S = x.offsetHeight === x.scrollHeight ? 0 : void 0) : (i = "hide", x.style.overflowY = "hidden"), p(x, S, w), s = setTimeout(() => {
                s = null, x.style.height = `${x.scrollHeight}px`, a = y => {
                    d = null, Object(y) === y && y.target !== x || v(x, "show")
                }, x.addEventListener("transitionend", a), d = setTimeout(a, 1.1 * e.duration)
            }, 100)
        }

        function g(x, w) {
            let S;
            l = x, r === !0 ? c() : (i = "show", x.style.overflowY = "hidden", S = x.scrollHeight), p(x, S, w), s = setTimeout(() => {
                s = null, x.style.height = 0, a = y => {
                    d = null, Object(y) === y && y.target !== x || v(x, "hide")
                }, x.addEventListener("transitionend", a), d = setTimeout(a, 1.1 * e.duration)
            }, 100)
        }

        return Ke(() => {
            r === !0 && c()
        }), () => u($t, {css: !1, appear: e.appear, onEnter: m, onLeave: g}, t.default)
    }
});
const e_ = {true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset"},
    Fr = {xs: 2, sm: 4, md: 8, lg: 16, xl: 24};
var fo = ve({
    name: "QSeparator",
    props: {...Ge, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String},
    setup(e) {
        const t = Se(), n = Je(e, t.proxy.$q), o = f(() => e.vertical === !0 ? "vertical" : "horizontal"),
            l = f(() => ` q-separator--${o.value}`), a = f(() => e.inset !== !1 ? `${l.value}-${e_[e.inset]}` : ""),
            i = f(() => `q-separator${l.value}${a.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === !0 ? " q-separator--dark" : "")),
            r = f(() => {
                const s = {};
                if (e.size !== void 0 && (s[e.vertical === !0 ? "width" : "height"] = e.size), e.spaced !== !1) {
                    const d = e.spaced === !0 ? `${Fr.md}px` : e.spaced in Fr ? `${Fr[e.spaced]}px` : e.spaced,
                        c = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
                    s[`margin${c[0]}`] = s[`margin${c[1]}`] = d
                }
                return s
            });
        return () => u("hr", {class: i.value, style: r.value, "aria-orientation": o.value})
    }
});
const wo = Ps({}), t_ = Object.keys($l);
var n_ = ve({
    name: "QExpansionItem",
    props: {
        ...$l, ...Ml, ...Ge,
        icon: String,
        label: String,
        labelLines: [Number, String],
        caption: String,
        captionLines: [Number, String],
        dense: Boolean,
        toggleAriaLabel: String,
        expandIcon: String,
        expandedIcon: String,
        expandIconClass: [Array, String, Object],
        duration: Number,
        headerInsetLevel: Number,
        contentInsetLevel: Number,
        expandSeparator: Boolean,
        defaultOpened: Boolean,
        hideExpandIcon: Boolean,
        expandIconToggle: Boolean,
        switchToggleSide: Boolean,
        denseToggle: Boolean,
        group: String,
        popup: Boolean,
        headerStyle: [Array, String, Object],
        headerClass: [Array, String, Object]
    },
    emits: [...El, "click", "afterShow", "afterHide"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: o}} = Se(), l = Je(e, o), a = D(e.modelValue !== null ? e.modelValue : e.defaultOpened),
            i = D(null), r = xl(), {show: s, hide: d, toggle: c} = Pl({showing: a});
        let p, v;
        const m = f(() => `q-expansion-item q-item-type q-expansion-item--${a.value === !0 ? "expanded" : "collapsed"} q-expansion-item--${e.popup === !0 ? "popup" : "standard"}`),
            g = f(() => e.contentInsetLevel === void 0 ? null : {["padding" + (o.lang.rtl === !0 ? "Right" : "Left")]: 56 * e.contentInsetLevel + "px"}),
            x = f(() => e.disable !== !0 && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")),
            w = f(() => {
                const $ = {};
                return t_.forEach(Q => {
                    $[Q] = e[Q]
                }), $
            }), S = f(() => x.value === !0 || e.expandIconToggle !== !0),
            y = f(() => e.expandedIcon !== void 0 && a.value === !0 ? e.expandedIcon : e.expandIcon || o.iconSet.expansionItem[e.denseToggle === !0 ? "denseIcon" : "icon"]),
            b = f(() => e.disable !== !0 && (x.value === !0 || e.expandIconToggle === !0)),
            h = f(() => ({expanded: a.value === !0, detailsId: e.targetUid, toggle: c, show: s, hide: d})),
            C = f(() => {
                const $ = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : o.lang.label[a.value === !0 ? "collapse" : "expand"](e.label);
                return {
                    role: "button",
                    "aria-expanded": a.value === !0 ? "true" : "false",
                    "aria-controls": r,
                    "aria-label": $
                }
            });

        function A($) {
            x.value !== !0 && c($), n("click", $)
        }

        function L($) {
            $.keyCode === 13 && E($, !0)
        }

        function E($, Q) {
            Q !== !0 && i.value !== null && i.value.focus(), c($), Ie($)
        }

        function V() {
            n("afterShow")
        }

        function O() {
            n("afterHide")
        }

        function z() {
            p === void 0 && (p = xl()), a.value === !0 && (wo[e.group] = p);
            const $ = pe(a, ae => {
                ae === !0 ? wo[e.group] = p : wo[e.group] === p && delete wo[e.group]
            }), Q = pe(() => wo[e.group], (ae, be) => {
                be === p && ae !== void 0 && ae !== p && d()
            });
            v = () => {
                $(), Q(), wo[e.group] === p && delete wo[e.group], v = void 0
            }
        }

        function M() {
            const $ = {
                class: [`q-focusable relative-position cursor-pointer${e.denseToggle === !0 && e.switchToggleSide === !0 ? " items-end" : ""}`, e.expandIconClass],
                side: e.switchToggleSide !== !0,
                avatar: e.switchToggleSide
            }, Q = [u(Ze, {
                class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && a.value === !0 ? " q-expansion-item__toggle-icon--rotated" : ""),
                name: y.value
            })];
            return b.value === !0 && (Object.assign($, {
                tabindex: 0, ...C.value,
                onClick: E,
                onKeyup: L
            }), Q.unshift(u("div", {
                ref: i,
                class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
                tabindex: -1
            }))), u(In, $, () => Q)
        }

        function k() {
            let $;
            return t.header !== void 0 ? $ = [].concat(t.header(h.value)) : ($ = [u(In, () => [u(Mi, {lines: e.labelLines}, () => e.label || ""), e.caption ? u(Mi, {
                lines: e.captionLines,
                caption: !0
            }, () => e.caption) : null])], e.icon && $[e.switchToggleSide === !0 ? "push" : "unshift"](u(In, {
                side: e.switchToggleSide === !0,
                avatar: e.switchToggleSide !== !0
            }, () => u(Ze, {name: e.icon})))), e.disable !== !0 && e.hideExpandIcon !== !0 && $[e.switchToggleSide === !0 ? "unshift" : "push"](M()), $
        }

        function B() {
            const $ = {
                ref: "item",
                style: e.headerStyle,
                class: e.headerClass,
                dark: l.value,
                disable: e.disable,
                dense: e.dense,
                insetLevel: e.headerInsetLevel
            };
            return S.value === !0 && ($.clickable = !0, $.onClick = A, Object.assign($, x.value === !0 ? w.value : C.value)), u(ka, $, k)
        }

        function Y() {
            return Sn(u("div", {
                key: "e-content",
                class: "q-expansion-item__content relative-position",
                style: g.value,
                id: r
            }, Ae(t.default)), [[uv, a.value]])
        }

        function J() {
            const $ = [B(), u(ir, {duration: e.duration, onShow: V, onHide: O}, Y)];
            return e.expandSeparator === !0 && $.push(u(fo, {
                class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
                dark: l.value
            }), u(fo, {
                class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
                dark: l.value
            })), $
        }

        return pe(() => e.group, $ => {
            v !== void 0 && v(), $ !== void 0 && z()
        }), e.group !== void 0 && z(), Ke(() => {
            v !== void 0 && v()
        }), () => u("div", {class: m.value}, [u("div", {class: "q-expansion-item__container relative-position"}, J())])
    }
});
const o_ = ["top", "right", "bottom", "left"], Up = {
    type: {type: String, default: "a"},
    outline: Boolean,
    push: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    color: String,
    textColor: String,
    glossy: Boolean,
    square: Boolean,
    padding: String,
    label: {type: [String, Number], default: ""},
    labelPosition: {type: String, default: "right", validator: e => o_.includes(e)},
    externalLabel: Boolean,
    hideLabel: {type: Boolean},
    labelClass: [Array, String, Object],
    labelStyle: [Array, String, Object],
    disable: Boolean,
    tabindex: [Number, String]
};

function Wp(e, t) {
    return {
        formClass: f(() => `q-fab--form-${e.square === !0 ? "square" : "rounded"}`),
        stacked: f(() => e.externalLabel === !1 && ["top", "bottom"].includes(e.labelPosition)),
        labelProps: f(() => {
            if (e.externalLabel === !0) {
                const n = e.hideLabel === null ? t.value === !1 : e.hideLabel;
                return {
                    action: "push",
                    data: {
                        class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (n === !0 ? " q-fab__label--external-hidden" : "")],
                        style: e.labelStyle
                    }
                }
            }
            return {
                action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push",
                data: {
                    class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === !0 ? " q-fab__label--internal-hidden" : "")],
                    style: e.labelStyle
                }
            }
        })
    }
}

const l_ = ["up", "right", "down", "left"], a_ = ["left", "center", "right"];
var i_ = ve({
    name: "QFab",
    props: {
        ...Up, ...Ml,
        icon: String,
        activeIcon: String,
        hideIcon: Boolean,
        hideLabel: {default: null},
        direction: {type: String, default: "right", validator: e => l_.includes(e)},
        persistent: Boolean,
        verticalActionsAlign: {type: String, default: "center", validator: e => a_.includes(e)}
    },
    emits: El,
    setup(e, {slots: t}) {
        const n = D(null), o = D(e.modelValue === !0), l = xl(), {proxy: {$q: a}} = Se(), {
                formClass: i,
                labelProps: r
            } = Wp(e, o), s = f(() => e.persistent !== !0), {hide: d, toggle: c} = Pl({showing: o, hideOnRouteChange: s}),
            p = f(() => ({opened: o.value})),
            v = f(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${i.value}` + (o.value === !0 ? " q-fab--opened" : " q-fab--closed")),
            m = f(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${o.value === !0 ? "opened" : "closed"}`),
            g = f(() => {
                const y = {id: l, role: "menu"};
                return o.value !== !0 && (y["aria-hidden"] = "true"), y
            }), x = f(() => `q-fab__icon-holder  q-fab__icon-holder--${o.value === !0 ? "opened" : "closed"}`);

        function w(y, b) {
            const h = t[y], C = `q-fab__${y} absolute-full`;
            return h === void 0 ? u(Ze, {class: C, name: e[b] || a.iconSet.fab[b]}) : u("div", {class: C}, h(p.value))
        }

        function S() {
            const y = [];
            return e.hideIcon !== !0 && y.push(u("div", {class: x.value}, [w("icon", "icon"), w("active-icon", "activeIcon")])), e.label === "" && t.label === void 0 || y[r.value.action](u("div", r.value.data, t.label !== void 0 ? t.label(p.value) : [e.label])), St(t.tooltip, y)
        }

        return un(Ov, {
            showing: o, onChildClick(y) {
                d(y), n.value !== null && n.value.$el.focus()
            }
        }), () => u("div", {class: v.value}, [u(tt, {
            ref: n,
            class: i.value, ...e,
            noWrap: !0,
            stack: e.stacked,
            align: void 0,
            icon: void 0,
            label: void 0,
            noCaps: !0,
            fab: !0,
            "aria-expanded": o.value === !0 ? "true" : "false",
            "aria-haspopup": "true",
            "aria-controls": l,
            onClick: c
        }, S), u("div", {class: m.value, ...g.value}, Ae(t.default))])
    }
});
const Yp = {start: "self-end", center: "self-center", end: "self-start"}, r_ = Object.keys(Yp);
var s_ = ve({
    name: "QFabAction",
    props: {
        ...Up,
        icon: {type: String, default: ""},
        anchor: {type: String, validator: e => r_.includes(e)},
        to: [String, Object],
        replace: Boolean
    },
    emits: ["click"],
    setup(e, {slots: t, emit: n}) {
        const o = vt(Ov, () => ({showing: {value: !0}, onChildClick: xt})), {
            formClass: l,
            labelProps: a
        } = Wp(e, o.showing), i = f(() => {
            const p = Yp[e.anchor];
            return l.value + (p !== void 0 ? ` ${p}` : "")
        }), r = f(() => e.disable === !0 || o.showing.value !== !0);

        function s(p) {
            o.onChildClick(p), n("click", p)
        }

        function d() {
            const p = [];
            return t.icon !== void 0 ? p.push(t.icon()) : e.icon !== "" && p.push(u(Ze, {name: e.icon})), e.label === "" && t.label === void 0 || p[a.value.action](u("div", a.value.data, t.label !== void 0 ? t.label() : [e.label])), St(t.default, p)
        }

        const c = Se();
        return Object.assign(c.proxy, {click: s}), () => u(tt, {
            class: i.value, ...e,
            noWrap: !0,
            stack: e.stacked,
            icon: void 0,
            label: void 0,
            noCaps: !0,
            fabMini: !0,
            disable: r.value,
            onClick: s
        }, d)
    }
});

function u_({validate: e, resetValidation: t, requiresQForm: n}) {
    const o = vt(Jo, !1);
    if (o !== !1) {
        const {props: l, proxy: a} = Se();
        Object.assign(a, {validate: e, resetValidation: t}), pe(() => l.disable, i => {
            i === !0 ? (typeof t == "function" && t(), o.unbindComponent(a)) : o.bindComponent(a)
        }), mt(() => {
            l.disable !== !0 && o.bindComponent(a)
        }), Ke(() => {
            l.disable !== !0 && o.unbindComponent(a)
        })
    } else n === !0 && console.error("Parent QForm not found on useFormChild()!")
}

const c_ = [!0, !1, "ondemand"], d_ = {
    modelValue: {},
    error: {type: Boolean, default: null},
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: {type: [Boolean, String], validator: e => c_.includes(e)}
};

function f_(e, t) {
    const {props: n, proxy: o} = Se(), l = D(!1), a = D(null), i = D(null);
    u_({validate: g, resetValidation: m});
    let r, s = 0;
    const d = f(() => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0),
        c = f(() => n.disable !== !0 && d.value === !0), p = f(() => n.error === !0 || l.value === !0),
        v = f(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : a.value);

    function m() {
        s++, t.value = !1, i.value = null, l.value = !1, a.value = null, w.cancel()
    }

    function g(S = n.modelValue) {
        if (c.value !== !0) return !0;
        const y = ++s, b = t.value !== !0 ? () => {
            i.value = !0
        } : () => {
        }, h = (A, L) => {
            A === !0 && b(), l.value = A, a.value = L || null, t.value = !1
        }, C = [];
        for (let A = 0; A < n.rules.length; A++) {
            const L = n.rules[A];
            let E;
            if (typeof L == "function" ? E = L(S, ni) : typeof L == "string" && ni[L] !== void 0 && (E = ni[L](S)), E === !1 || typeof E == "string") return h(!0, E), !1;
            E !== !0 && E !== void 0 && C.push(E)
        }
        return C.length === 0 ? (h(!1), !0) : (t.value = !0, Promise.all(C).then(A => {
            if (A === void 0 || Array.isArray(A) === !1 || A.length === 0) return y === s && h(!1), !0;
            const L = A.find(E => E === !1 || typeof E == "string");
            return y === s && h(L !== void 0, L), L === void 0
        }, A => (y === s && (console.error(A), h(!0)), !1)))
    }

    function x(S) {
        c.value === !0 && n.lazyRules !== "ondemand" && (i.value === !0 || n.lazyRules !== !0 && S !== !0) && w()
    }

    pe(() => n.modelValue, () => {
        x()
    }), pe(() => n.reactiveRules, S => {
        S === !0 ? r === void 0 && (r = pe(() => n.rules, () => {
            x(!0)
        })) : r !== void 0 && (r(), r = void 0)
    }, {immediate: !0}), pe(e, S => {
        S === !0 ? i.value === null && (i.value = !1) : i.value === !1 && (i.value = !0, c.value === !0 && n.lazyRules !== "ondemand" && t.value === !1 && w())
    });
    const w = Tl(g, 0);
    return Ke(() => {
        r !== void 0 && r(), w.cancel()
    }), Object.assign(o, {resetValidation: m, validate: g}), At(o, "hasError", () => p.value), {
        isDirtyModel: i,
        hasRules: d,
        hasError: p,
        errorMessage: v,
        validate: g,
        resetValidation: m
    }
}

function ws(e) {
    return e === void 0 ? `f_${xl()}` : e
}

function Vo(e) {
    return e != null && ("" + e).length !== 0
}

const qa = {
    ...Ge, ...d_,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String,
    maxlength: [Number, String]
}, rr = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];

function sr() {
    const {props: e, attrs: t, proxy: n, vnode: o} = Se();
    return {
        isDark: Je(e, n.$q),
        editable: f(() => e.disable !== !0 && e.readonly !== !0),
        innerLoading: D(!1),
        focused: D(!1),
        hasPopupOpen: !1,
        splitAttrs: Qp(t, o),
        targetUid: D(ws(e.for)),
        rootRef: D(null),
        targetRef: D(null),
        controlRef: D(null)
    }
}

function ur(e) {
    const {props: t, emit: n, slots: o, attrs: l, proxy: a} = Se(), {$q: i} = a;
    let r = null;
    e.hasValue === void 0 && (e.hasValue = f(() => Vo(t.modelValue))), e.emitValue === void 0 && (e.emitValue = $ => {
        n("update:modelValue", $)
    }), e.controlEvents === void 0 && (e.controlEvents = {
        onFocusin: V,
        onFocusout: O
    }), Object.assign(e, {
        clearValue: z,
        onControlFocusin: V,
        onControlFocusout: O,
        focus: L
    }), e.computedCounter === void 0 && (e.computedCounter = f(() => {
        if (t.counter !== !1) {
            const $ = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0,
                Q = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
            return $ + (Q !== void 0 ? " / " + Q : "")
        }
    }));
    const {
            isDirtyModel: s,
            hasRules: d,
            hasError: c,
            errorMessage: p,
            resetValidation: v
        } = f_(e.focused, e.innerLoading),
        m = e.floatingLabel !== void 0 ? f(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : f(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0),
        g = f(() => t.bottomSlots === !0 || t.hint !== void 0 || d.value === !0 || t.counter === !0 || t.error !== null),
        x = f(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"),
        w = f(() => `q-field row no-wrap items-start q-field--${x.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (m.value === !0 ? " q-field--float" : "") + (y.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (c.value === !0 ? " q-field--error" : "") + (c.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && g.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")),
        S = f(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (c.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")),
        y = f(() => t.labelSlot === !0 || t.label !== void 0),
        b = f(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && c.value !== !0 ? ` text-${t.labelColor}` : "")),
        h = f(() => ({
            id: e.targetUid.value,
            editable: e.editable.value,
            focused: e.focused.value,
            floatingLabel: m.value,
            modelValue: t.modelValue,
            emitValue: e.emitValue
        })), C = f(() => {
            const $ = {for: e.targetUid.value};
            return t.disable === !0 ? $["aria-disabled"] = "true" : t.readonly === !0 && ($["aria-readonly"] = "true"), $
        });

    function A() {
        const $ = document.activeElement;
        let Q = e.targetRef !== void 0 && e.targetRef.value;
        !Q || $ !== null && $.id === e.targetUid.value || (Q.hasAttribute("tabindex") === !0 || (Q = Q.querySelector("[tabindex]")), Q && Q !== $ && Q.focus({preventScroll: !0}))
    }

    function L() {
        Al(A)
    }

    function E() {
        Iy(A);
        const $ = document.activeElement;
        $ !== null && e.rootRef.value.contains($) && $.blur()
    }

    function V($) {
        r !== null && (clearTimeout(r), r = null), e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0, n("focus", $))
    }

    function O($, Q) {
        r !== null && clearTimeout(r), r = setTimeout(() => {
            r = null, (document.hasFocus() !== !0 || e.hasPopupOpen !== !0 && e.controlRef !== void 0 && e.controlRef.value !== null && e.controlRef.value.contains(document.activeElement) === !1) && (e.focused.value === !0 && (e.focused.value = !1, n("blur", $)), Q !== void 0 && Q())
        })
    }

    function z($) {
        Ie($), i.platform.is.mobile !== !0 ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), n("clear", t.modelValue), We(() => {
            v(), i.platform.is.mobile !== !0 && (s.value = !1)
        })
    }

    function M() {
        const $ = [];
        return o.prepend !== void 0 && $.push(u("div", {
            class: "q-field__prepend q-field__marginal row no-wrap items-center",
            key: "prepend",
            onClick: Bt
        }, o.prepend())), $.push(u("div", {class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"}, k())), c.value === !0 && t.noErrorIcon === !1 && $.push(Y("error", [u(Ze, {
            name: i.iconSet.field.error,
            color: "negative"
        })])), t.loading === !0 || e.innerLoading.value === !0 ? $.push(Y("inner-loading-append", o.loading !== void 0 ? o.loading() : [u(tn, {color: t.color})])) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && $.push(Y("inner-clearable-append", [u(Ze, {
            class: "q-field__focusable-action",
            tag: "button",
            name: t.clearIcon || i.iconSet.field.clear,
            tabindex: 0,
            type: "button",
            "aria-hidden": null,
            role: null,
            onClick: z
        })])), o.append !== void 0 && $.push(u("div", {
            class: "q-field__append q-field__marginal row no-wrap items-center",
            key: "append",
            onClick: Bt
        }, o.append())), e.getInnerAppend !== void 0 && $.push(Y("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && $.push(e.getControlChild()), $
    }

    function k() {
        const $ = [];
        return t.prefix !== void 0 && t.prefix !== null && $.push(u("div", {class: "q-field__prefix no-pointer-events row items-center"}, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && $.push(e.getShadowControl()), e.getControl !== void 0 ? $.push(e.getControl()) : o.rawControl !== void 0 ? $.push(o.rawControl()) : o.control !== void 0 && $.push(u("div", {
            ref: e.targetRef,
            class: "q-field__native row",
            tabindex: -1, ...e.splitAttrs.attributes.value,
            "data-autofocus": t.autofocus === !0 || void 0
        }, o.control(h.value))), y.value === !0 && $.push(u("div", {class: b.value}, Ae(o.label, t.label))), t.suffix !== void 0 && t.suffix !== null && $.push(u("div", {class: "q-field__suffix no-pointer-events row items-center"}, t.suffix)), $.concat(Ae(o.default))
    }

    function B() {
        let $, Q;
        c.value === !0 ? p.value !== null ? ($ = [u("div", {role: "alert"}, p.value)], Q = `q--slot-error-${p.value}`) : ($ = Ae(o.error), Q = "q--slot-error") : t.hideHint === !0 && e.focused.value !== !0 || (t.hint !== void 0 ? ($ = [u("div", t.hint)], Q = `q--slot-hint-${t.hint}`) : ($ = Ae(o.hint), Q = "q--slot-hint"));
        const ae = t.counter === !0 || o.counter !== void 0;
        if (t.hideBottomSpace === !0 && ae === !1 && $ === void 0) return;
        const be = u("div", {key: Q, class: "q-field__messages col"}, $);
        return u("div", {
            class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
            onClick: Bt
        }, [t.hideBottomSpace === !0 ? be : u($t, {name: "q-transition--field-message"}, () => be), ae === !0 ? u("div", {class: "q-field__counter"}, o.counter !== void 0 ? o.counter() : e.computedCounter.value) : null])
    }

    function Y($, Q) {
        return Q === null ? null : u("div", {
            key: $,
            class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
        }, Q)
    }

    pe(() => t.for, $ => {
        e.targetUid.value = ws($)
    });
    let J = !1;
    return kn(() => {
        J = !0
    }), Hn(() => {
        J === !0 && t.autofocus === !0 && a.focus()
    }), mt(() => {
        en.value === !0 && t.for === void 0 && (e.targetUid.value = ws()), t.autofocus === !0 && a.focus()
    }), Ke(() => {
        r !== null && clearTimeout(r)
    }), Object.assign(a, {focus: L, blur: E}), function () {
        const $ = e.getControl === void 0 && o.control === void 0 ? {
            ...e.splitAttrs.attributes.value,
            "data-autofocus": t.autofocus === !0 || void 0, ...C.value
        } : C.value;
        return u("label", {
            ref: e.rootRef,
            class: [w.value, l.class],
            style: l.style, ...$
        }, [o.before !== void 0 ? u("div", {
            class: "q-field__before q-field__marginal row no-wrap items-center",
            onClick: Bt
        }, o.before()) : null, u("div", {class: "q-field__inner relative-position col self-stretch"}, [u("div", {
            ref: e.controlRef,
            class: S.value,
            tabindex: -1, ...e.controlEvents
        }, M()), g.value === !0 ? B() : null]), o.after !== void 0 ? u("div", {
            class: "q-field__after q-field__marginal row no-wrap items-center",
            onClick: Bt
        }, o.after()) : null])
    }
}

var Xp = ve({
    name: "QField", inheritAttrs: !1, props: qa, emits: rr, setup() {
        return ur(sr())
    }
});

function Uo(e, t, n, o) {
    const l = [];
    return e.forEach(a => {
        o(a) === !0 ? l.push(a) : t.push({failedPropValidation: n, file: a})
    }), l
}

function Ha(e) {
    e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy"), Ie(e)
}

const Zp = {
    multiple: Boolean,
    accept: String,
    capture: String,
    maxFileSize: [Number, String],
    maxTotalSize: [Number, String],
    maxFiles: [Number, String],
    filter: Function
}, Gp = ["rejected"];

function Jp({editable: e, dnd: t, getFileInput: n, addFilesToQueue: o}) {
    const {props: l, emit: a, proxy: i} = Se(), r = D(null),
        s = f(() => l.accept !== void 0 ? l.accept.split(",").map(y => (y = y.trim(), y === "*" ? "*/" : (y.endsWith("/*") && (y = y.slice(0, y.length - 1)), y.toUpperCase()))) : null),
        d = f(() => parseInt(l.maxFiles, 10)), c = f(() => parseInt(l.maxTotalSize, 10));

    function p(y) {
        if (e.value) if (y !== Object(y) && (y = {target: null}), y.target !== null && y.target.matches('input[type="file"]') === !0) y.clientX === 0 && y.clientY === 0 && _t(y); else {
            const b = n();
            b && b !== y.target && b.click(y)
        }
    }

    function v(y) {
        e.value && y && o(null, y)
    }

    function m(y, b, h, C) {
        let A = Array.from(b || y.target.files);
        const L = [], E = () => {
            L.length !== 0 && a("rejected", L)
        };
        if (l.accept !== void 0 && s.value.indexOf("*/") === -1 && (A = Uo(A, L, "accept", V => s.value.some(O => V.type.toUpperCase().startsWith(O) || V.name.toUpperCase().endsWith(O))), A.length === 0)) return E();
        if (l.maxFileSize !== void 0) {
            const V = parseInt(l.maxFileSize, 10);
            if (A = Uo(A, L, "max-file-size", O => O.size <= V), A.length === 0) return E()
        }
        if (l.multiple !== !0 && A.length !== 0 && (A = [A[0]]), A.forEach(V => {
            V.__key = V.webkitRelativePath + V.lastModified + V.name + V.size
        }), C === !0) {
            const V = h.map(O => O.__key);
            A = Uo(A, L, "duplicate", O => V.includes(O.__key) === !1)
        }
        if (A.length === 0) return E();
        if (l.maxTotalSize !== void 0) {
            let V = C === !0 ? h.reduce((O, z) => O + z.size, 0) : 0;
            if (A = Uo(A, L, "max-total-size", O => (V += O.size, V <= c.value)), A.length === 0) return E()
        }
        if (typeof l.filter == "function") {
            const V = l.filter(A);
            A = Uo(A, L, "filter", O => V.includes(O))
        }
        if (l.maxFiles !== void 0) {
            let V = C === !0 ? h.length : 0;
            if (A = Uo(A, L, "max-files", () => (V++, V <= d.value)), A.length === 0) return E()
        }
        return E(), A.length !== 0 ? A : void 0
    }

    function g(y) {
        Ha(y), t.value !== !0 && (t.value = !0)
    }

    function x(y) {
        Ie(y), (y.relatedTarget !== null || Fe.is.safari !== !0 ? y.relatedTarget !== r.value : document.elementsFromPoint(y.clientX, y.clientY).includes(r.value) === !1) === !0 && (t.value = !1)
    }

    function w(y) {
        Ha(y);
        const b = y.dataTransfer.files;
        b.length !== 0 && o(null, b), t.value = !1
    }

    function S(y) {
        if (t.value === !0) return u("div", {
            ref: r,
            class: `q-${y}__dnd absolute-full`,
            onDragenter: Ha,
            onDragover: Ha,
            onDragleave: x,
            onDrop: w
        })
    }

    return Object.assign(i, {pickFiles: p, addFiles: v}), {
        pickFiles: p,
        addFiles: v,
        onDragover: g,
        onDragleave: x,
        processFiles: m,
        getDndNode: S,
        maxFilesNumber: d,
        maxTotalSizeNumber: c
    }
}

function e0(e, t) {
    function n() {
        const o = e.modelValue;
        try {
            const l = "DataTransfer" in window ? new DataTransfer : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
            return Object(o) === o && ("length" in o ? Array.from(o) : [o]).forEach(a => {
                l.items.add(a)
            }), {files: l.files}
        } catch {
            return {files: void 0}
        }
    }

    return f(t === !0 ? () => {
        if (e.type === "file") return n()
    } : n)
}

var v_ = ve({
    name: "QFile",
    inheritAttrs: !1,
    props: {
        ...qa, ...vn, ...Zp,
        modelValue: [File, FileList, Array],
        append: Boolean,
        useChips: Boolean,
        displayValue: [String, Number],
        tabindex: {type: [String, Number], default: 0},
        counterLabel: Function,
        inputClass: [Array, String, Object],
        inputStyle: [Array, String, Object]
    },
    emits: [...rr, ...Gp],
    setup(e, {slots: t, emit: n, attrs: o}) {
        const {proxy: l} = Se(), a = sr(), i = D(null), r = D(!1), s = su(e), {
                pickFiles: d,
                onDragover: c,
                onDragleave: p,
                processFiles: v,
                getDndNode: m
            } = Jp({editable: a.editable, dnd: r, getFileInput: M, addFilesToQueue: k}), g = e0(e),
            x = f(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []),
            w = f(() => Vo(x.value)), S = f(() => x.value.map($ => $.name).join(", ")),
            y = f(() => cs(x.value.reduce(($, Q) => $ + Q.size, 0))),
            b = f(() => ({totalSize: y.value, filesNumber: x.value.length, maxFiles: e.maxFiles})), h = f(() => ({
                tabindex: -1,
                type: "file",
                title: "",
                accept: e.accept,
                capture: e.capture,
                name: s.value, ...o,
                id: a.targetUid.value,
                disabled: a.editable.value !== !0
            })), C = f(() => "q-file q-field--auto-height" + (r.value === !0 ? " q-file--dnd" : "")),
            A = f(() => e.multiple === !0 && e.append === !0);

        function L($) {
            const Q = x.value.slice();
            Q.splice($, 1), V(Q)
        }

        function E($) {
            const Q = x.value.indexOf($);
            Q > -1 && L(Q)
        }

        function V($) {
            n("update:modelValue", e.multiple === !0 ? $ : $[0])
        }

        function O($) {
            $.keyCode === 13 && Bt($)
        }

        function z($) {
            $.keyCode !== 13 && $.keyCode !== 32 || d($)
        }

        function M() {
            return i.value
        }

        function k($, Q) {
            const ae = v($, Q, x.value, A.value), be = M();
            be != null && (be.value = ""), ae !== void 0 && ((e.multiple === !0 ? e.modelValue && ae.every(K => x.value.includes(K)) : e.modelValue === ae[0]) || V(A.value === !0 ? x.value.concat(ae) : ae))
        }

        function B() {
            return [u("input", {class: [e.inputClass, "q-file__filler"], style: e.inputStyle})]
        }

        function Y() {
            if (t.file !== void 0) return x.value.length === 0 ? B() : x.value.map((Q, ae) => t.file({
                index: ae,
                file: Q,
                ref: this
            }));
            if (t.selected !== void 0) return x.value.length === 0 ? B() : t.selected({files: x.value, ref: this});
            if (e.useChips === !0) return x.value.length === 0 ? B() : x.value.map((Q, ae) => u(bu, {
                key: "file-" + ae,
                removable: a.editable.value,
                dense: !0,
                textColor: e.color,
                tabindex: e.tabindex,
                onRemove: () => {
                    L(ae)
                }
            }, () => u("span", {class: "ellipsis", textContent: Q.name})));
            const $ = e.displayValue !== void 0 ? e.displayValue : S.value;
            return $.length !== 0 ? [u("div", {class: e.inputClass, style: e.inputStyle, textContent: $})] : B()
        }

        function J() {
            const $ = {
                ref: i, ...h.value, ...g.value,
                class: "q-field__input fit absolute-full cursor-pointer",
                onChange: k
            };
            return e.multiple === !0 && ($.multiple = !0), u("input", $)
        }

        return Object.assign(a, {
            fieldClass: C,
            emitValue: V,
            hasValue: w,
            inputRef: i,
            innerValue: x,
            floatingLabel: f(() => w.value === !0 || Vo(e.displayValue)),
            computedCounter: f(() => {
                if (e.counterLabel !== void 0) return e.counterLabel(b.value);
                const $ = e.maxFiles;
                return `${x.value.length}${$ !== void 0 ? " / " + $ : ""} (${y.value})`
            }),
            getControlChild: () => m("file"),
            getControl: () => {
                const $ = {
                    ref: a.targetRef,
                    class: "q-field__native row items-center cursor-pointer",
                    tabindex: e.tabindex
                };
                return a.editable.value === !0 && Object.assign($, {
                    onDragover: c,
                    onDragleave: p,
                    onKeydown: O,
                    onKeyup: z
                }), u("div", $, [J()].concat(Y()))
            }
        }), Object.assign(l, {
            removeAtIndex: L,
            removeFile: E,
            getNativeElement: () => i.value
        }), At(l, "nativeEl", () => i.value), ur(a)
    }
}), p_ = ve({
    name: "QFooter",
    props: {
        modelValue: {type: Boolean, default: !0},
        reveal: Boolean,
        bordered: Boolean,
        elevated: Boolean,
        heightHint: {type: [String, Number], default: 50}
    },
    emits: ["reveal", "focusin"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: o}} = Se(), l = vt(No, at);
        if (l === at) return console.error("QFooter needs to be child of QLayout"), at;
        const a = D(parseInt(e.heightHint, 10)), i = D(!0),
            r = D(en.value === !0 || l.isContainer.value === !0 ? 0 : window.innerHeight),
            s = f(() => e.reveal === !0 || l.view.value.indexOf("F") > -1 || o.platform.is.ios && l.isContainer.value === !0),
            d = f(() => l.isContainer.value === !0 ? l.containerHeight.value : r.value), c = f(() => {
                if (e.modelValue !== !0) return 0;
                if (s.value === !0) return i.value === !0 ? a.value : 0;
                const C = l.scroll.value.position + d.value + a.value - l.height.value;
                return C > 0 ? C : 0
            }), p = f(() => e.modelValue !== !0 || s.value === !0 && i.value !== !0),
            v = f(() => e.modelValue === !0 && p.value === !0 && e.reveal === !0),
            m = f(() => "q-footer q-layout__section--marginal " + (s.value === !0 ? "fixed" : "absolute") + "-bottom" + (e.bordered === !0 ? " q-footer--bordered" : "") + (p.value === !0 ? " q-footer--hidden" : "") + (e.modelValue !== !0 ? " q-layout--prevent-focus" + (s.value !== !0 ? " hidden" : "") : "")),
            g = f(() => {
                const C = l.rows.value.bottom, A = {};
                return C[0] === "l" && l.left.space === !0 && (A[o.lang.rtl === !0 ? "right" : "left"] = `${l.left.size}px`), C[2] === "r" && l.right.space === !0 && (A[o.lang.rtl === !0 ? "left" : "right"] = `${l.right.size}px`), A
            });

        function x(C, A) {
            l.update("footer", C, A)
        }

        function w(C, A) {
            C.value !== A && (C.value = A)
        }

        function S({height: C}) {
            w(a, C), x("size", C)
        }

        function y() {
            if (e.reveal !== !0) return;
            const {direction: C, position: A, inflectionPoint: L} = l.scroll.value;
            w(i, C === "up" || A - L < 100 || l.height.value - d.value - A - a.value < 300)
        }

        function b(C) {
            v.value === !0 && w(i, !0), n("focusin", C)
        }

        pe(() => e.modelValue, C => {
            x("space", C), w(i, !0), l.animate()
        }), pe(c, C => {
            x("offset", C)
        }), pe(() => e.reveal, C => {
            C === !1 && w(i, e.modelValue)
        }), pe(i, C => {
            l.animate(), n("reveal", C)
        }), pe([a, l.scroll, l.height], y), pe(() => o.screen.height, C => {
            l.isContainer.value !== !0 && w(r, C)
        });
        const h = {};
        return l.instances.footer = h, e.modelValue === !0 && x("size", a.value), x("space", e.modelValue), x("offset", c.value), Ke(() => {
            l.instances.footer === h && (l.instances.footer = void 0, x("size", 0), x("offset", 0), x("space", !1))
        }), () => {
            const C = St(t.default, [u(co, {debounce: 0, onResize: S})]);
            return e.elevated === !0 && C.push(u("div", {class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"})), u("footer", {
                class: m.value,
                style: g.value,
                onFocusin: b
            }, C)
        }
    }
}), m_ = ve({
    name: "QForm",
    props: {autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function},
    emits: ["reset", "validationSuccess", "validationError"],
    setup(e, {slots: t, emit: n}) {
        const o = Se(), l = D(null);
        let a = 0;
        const i = [];

        function r(m) {
            const g = typeof m == "boolean" ? m : e.noErrorFocus !== !0, x = ++a, w = (b, h) => {
                n("validation" + (b === !0 ? "Success" : "Error"), h)
            }, S = b => {
                const h = b.validate();
                return typeof h.then == "function" ? h.then(C => ({valid: C, comp: b}), C => ({
                    valid: !1,
                    comp: b,
                    err: C
                })) : Promise.resolve({valid: h, comp: b})
            };
            return (e.greedy === !0 ? Promise.all(i.map(S)).then(b => b.filter(h => h.valid !== !0)) : i.reduce((b, h) => b.then(() => S(h).then(C => {
                if (C.valid === !1) return Promise.reject(C)
            })), Promise.resolve()).catch(b => [b])).then(b => {
                if (b === void 0 || b.length === 0) return x === a && w(!0), !0;
                if (x === a) {
                    const {comp: h, err: C} = b[0];
                    if (C !== void 0 && console.error(C), w(!1, h), g === !0) {
                        const A = b.find(({comp: L}) => typeof L.focus == "function" && ga(L.$) === !1);
                        A !== void 0 && A.comp.focus()
                    }
                }
                return !1
            })
        }

        function s() {
            a++, i.forEach(m => {
                typeof m.resetValidation == "function" && m.resetValidation()
            })
        }

        function d(m) {
            m !== void 0 && Ie(m);
            const g = a + 1;
            r().then(x => {
                g === a && x === !0 && (e.onSubmit !== void 0 ? n("submit", m) : m !== void 0 && m.target !== void 0 && typeof m.target.submit == "function" && m.target.submit())
            })
        }

        function c(m) {
            m !== void 0 && Ie(m), n("reset"), We(() => {
                s(), e.autofocus === !0 && e.noResetFocus !== !0 && p()
            })
        }

        function p() {
            Al(() => {
                if (l.value === null) return;
                const m = l.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || l.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || l.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(l.value.querySelectorAll("[tabindex]"), g => g.tabIndex > -1);
                m != null && m.focus({preventScroll: !0})
            })
        }

        un(Jo, {
            bindComponent(m) {
                i.push(m)
            }, unbindComponent(m) {
                const g = i.indexOf(m);
                g > -1 && i.splice(g, 1)
            }
        });
        let v = !1;
        return kn(() => {
            v = !0
        }), Hn(() => {
            v === !0 && e.autofocus === !0 && p()
        }), mt(() => {
            e.autofocus === !0 && p()
        }), Object.assign(o.proxy, {
            validate: r,
            resetValidation: s,
            submit: d,
            reset: c,
            focus: p,
            getValidationComponents: () => i
        }), () => u("form", {class: "q-form", ref: l, onSubmit: d, onReset: c}, Ae(t.default))
    }
}), h_ = {
    inject: {[Jo]: {default: xt}}, watch: {
        disable(e) {
            const t = this.$.provides[Jo];
            t !== void 0 && (e === !0 ? (this.resetValidation(), t.unbindComponent(this)) : t.bindComponent(this))
        }
    }, methods: {
        validate() {
        }, resetValidation() {
        }
    }, mounted() {
        const e = this.$.provides[Jo];
        e !== void 0 && this.disable !== !0 && e.bindComponent(this)
    }, beforeUnmount() {
        const e = this.$.provides[Jo];
        e !== void 0 && this.disable !== !0 && e.unbindComponent(this)
    }
}, g_ = ve({
    name: "QHeader",
    props: {
        modelValue: {type: Boolean, default: !0},
        reveal: Boolean,
        revealOffset: {type: Number, default: 250},
        bordered: Boolean,
        elevated: Boolean,
        heightHint: {type: [String, Number], default: 50}
    },
    emits: ["reveal", "focusin"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: o}} = Se(), l = vt(No, at);
        if (l === at) return console.error("QHeader needs to be child of QLayout"), at;
        const a = D(parseInt(e.heightHint, 10)), i = D(!0),
            r = f(() => e.reveal === !0 || l.view.value.indexOf("H") > -1 || o.platform.is.ios && l.isContainer.value === !0),
            s = f(() => {
                if (e.modelValue !== !0) return 0;
                if (r.value === !0) return i.value === !0 ? a.value : 0;
                const y = a.value - l.scroll.value.position;
                return y > 0 ? y : 0
            }), d = f(() => e.modelValue !== !0 || r.value === !0 && i.value !== !0),
            c = f(() => e.modelValue === !0 && d.value === !0 && e.reveal === !0),
            p = f(() => "q-header q-layout__section--marginal " + (r.value === !0 ? "fixed" : "absolute") + "-top" + (e.bordered === !0 ? " q-header--bordered" : "") + (d.value === !0 ? " q-header--hidden" : "") + (e.modelValue !== !0 ? " q-layout--prevent-focus" : "")),
            v = f(() => {
                const y = l.rows.value.top, b = {};
                return y[0] === "l" && l.left.space === !0 && (b[o.lang.rtl === !0 ? "right" : "left"] = `${l.left.size}px`), y[2] === "r" && l.right.space === !0 && (b[o.lang.rtl === !0 ? "left" : "right"] = `${l.right.size}px`), b
            });

        function m(y, b) {
            l.update("header", y, b)
        }

        function g(y, b) {
            y.value !== b && (y.value = b)
        }

        function x({height: y}) {
            g(a, y), m("size", y)
        }

        function w(y) {
            c.value === !0 && g(i, !0), n("focusin", y)
        }

        pe(() => e.modelValue, y => {
            m("space", y), g(i, !0), l.animate()
        }), pe(s, y => {
            m("offset", y)
        }), pe(() => e.reveal, y => {
            y === !1 && g(i, e.modelValue)
        }), pe(i, y => {
            l.animate(), n("reveal", y)
        }), pe(l.scroll, y => {
            e.reveal === !0 && g(i, y.direction === "up" || y.position <= e.revealOffset || y.position - y.inflectionPoint < 100)
        });
        const S = {};
        return l.instances.header = S, e.modelValue === !0 && m("size", a.value), m("space", e.modelValue), m("offset", s.value), Ke(() => {
            l.instances.header === S && (l.instances.header = void 0, m("size", 0), m("offset", 0), m("space", !1))
        }), () => {
            const y = ha(t.default, []);
            return e.elevated === !0 && y.push(u("div", {class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"})), y.push(u(co, {
                debounce: 0,
                onResize: x
            })), u("header", {class: p.value, style: v.value, onFocusin: w}, y)
        }
    }
});
const Cu = {ratio: [String, Number]};

function ku(e, t) {
    return f(() => {
        const n = Number(e.ratio || (t !== void 0 ? t.value : void 0));
        return isNaN(n) !== !0 && n > 0 ? {paddingBottom: `${100 / n}%`} : null
    })
}

const b_ = 16 / 9;
var y_ = ve({
    name: "QImg",
    props: {
        ...Cu,
        src: String,
        srcset: String,
        sizes: String,
        alt: String,
        crossorigin: String,
        decoding: String,
        referrerpolicy: String,
        draggable: Boolean,
        loading: {type: String, default: "lazy"},
        fetchpriority: {type: String, default: "auto"},
        width: String,
        height: String,
        initialRatio: {type: [Number, String], default: b_},
        placeholderSrc: String,
        fit: {type: String, default: "cover"},
        position: {type: String, default: "50% 50%"},
        imgClass: String,
        imgStyle: Object,
        noSpinner: Boolean,
        noNativeMenu: Boolean,
        noTransition: Boolean,
        spinnerColor: String,
        spinnerSize: String
    },
    emits: ["load", "error"],
    setup(e, {slots: t, emit: n}) {
        const o = D(e.initialRatio), l = ku(e, o);
        let a = null, i = !1;
        const r = [D(null), D(w())], s = D(0), d = D(!1), c = D(!1),
            p = f(() => `q-img q-img--${e.noNativeMenu === !0 ? "no-" : ""}menu`),
            v = f(() => ({width: e.width, height: e.height})),
            m = f(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === !0 ? "out" : ""}-transition`),
            g = f(() => ({...e.imgStyle, objectFit: e.fit, objectPosition: e.position}));

        function x() {
            return e.src || e.srcset || e.sizes ? {src: e.src, srcset: e.srcset, sizes: e.sizes} : null
        }

        function w() {
            return e.placeholderSrc !== void 0 ? {src: e.placeholderSrc} : null
        }

        function S(E) {
            a !== null && (clearTimeout(a), a = null), c.value = !1, E === null ? (d.value = !1, r[1 ^ s.value].value = w()) : d.value = !0, r[s.value].value = E
        }

        function y({target: E}) {
            i !== !0 && (a !== null && (clearTimeout(a), a = null), o.value = E.naturalHeight === 0 ? .5 : E.naturalWidth / E.naturalHeight, b(E, 1))
        }

        function b(E, V) {
            i !== !0 && V !== 1e3 && (E.complete === !0 ? h(E) : a = setTimeout(() => {
                a = null, b(E, V + 1)
            }, 50))
        }

        function h(E) {
            i !== !0 && (s.value = 1 ^ s.value, r[s.value].value = null, d.value = !1, c.value = !1, n("load", E.currentSrc || E.src))
        }

        function C(E) {
            a !== null && (clearTimeout(a), a = null), d.value = !1, c.value = !0, r[s.value].value = null, r[1 ^ s.value].value = w(), n("error", E)
        }

        function A(E) {
            const V = r[E].value, O = {
                key: "img_" + E,
                class: m.value,
                style: g.value,
                crossorigin: e.crossorigin,
                decoding: e.decoding,
                referrerpolicy: e.referrerpolicy,
                height: e.height,
                width: e.width,
                loading: e.loading,
                fetchpriority: e.fetchpriority,
                "aria-hidden": "true",
                draggable: e.draggable, ...V
            };
            return s.value === E ? (O.class += " q-img__image--waiting", Object.assign(O, {
                onLoad: y,
                onError: C
            })) : O.class += " q-img__image--loaded", u("div", {
                class: "q-img__container absolute-full",
                key: "img" + E
            }, u("img", O))
        }

        function L() {
            return d.value !== !0 ? u("div", {
                key: "content",
                class: "q-img__content absolute-full q-anchor--skip"
            }, Ae(t[c.value === !0 ? "error" : "default"])) : u("div", {
                key: "loading",
                class: "q-img__loading absolute-full flex flex-center"
            }, t.loading !== void 0 ? t.loading() : e.noSpinner === !0 ? void 0 : [u(tn, {
                color: e.spinnerColor,
                size: e.spinnerSize
            })])
        }

        return pe(() => x(), S), S(x()), Ke(() => {
            i = !0, a !== null && (clearTimeout(a), a = null)
        }), () => {
            const E = [];
            return l.value !== null && E.push(u("div", {
                key: "filler",
                style: l.value
            })), c.value !== !0 && (r[0].value !== null && E.push(A(0)), r[1].value !== null && E.push(A(1))), E.push(u($t, {name: "q-transition--fade"}, L)), u("div", {
                class: p.value,
                style: v.value,
                role: "img",
                "aria-label": e.alt
            }, E)
        }
    }
});
const {passive: xo} = ut;
var __ = ve({
    name: "QInfiniteScroll",
    props: {
        offset: {type: Number, default: 500},
        debounce: {type: [String, Number], default: 100},
        scrollTarget: {default: void 0},
        initialIndex: Number,
        disable: Boolean,
        reverse: Boolean
    },
    emits: ["load"],
    setup(e, {slots: t, emit: n}) {
        const o = D(!1), l = D(!0), a = D(null), i = D(null);
        let r, s, d = e.initialIndex || 0;
        const c = f(() => "q-infinite-scroll__loading" + (o.value === !0 ? "" : " invisible"));

        function p() {
            if (e.disable === !0 || o.value === !0 || l.value === !1) return;
            const L = La(r), E = so(r), V = yl(r);
            e.reverse === !1 ? Math.round(E + V + e.offset) >= Math.round(L) && v() : Math.round(E) <= e.offset && v()
        }

        function v() {
            if (e.disable === !0 || o.value === !0 || l.value === !1) return;
            d++, o.value = !0;
            const L = La(r);
            n("load", d, E => {
                l.value === !0 && (o.value = !1, We(() => {
                    if (e.reverse === !0) {
                        const V = La(r), O = so(r), z = V - L;
                        cl(r, O + z)
                    }
                    E === !0 ? x() : a.value && a.value.closest("body") && s()
                }))
            })
        }

        function m() {
            d = 0
        }

        function g() {
            l.value === !1 && (l.value = !0, r.addEventListener("scroll", s, xo)), p()
        }

        function x() {
            l.value === !0 && (l.value = !1, o.value = !1, r.removeEventListener("scroll", s, xo), s !== void 0 && s.cancel !== void 0 && s.cancel())
        }

        function w() {
            if (r && l.value === !0 && r.removeEventListener("scroll", s, xo), r = An(a.value, e.scrollTarget), l.value === !0) {
                if (r.addEventListener("scroll", s, xo), e.reverse === !0) {
                    const L = La(r), E = yl(r);
                    cl(r, L - E)
                }
                p()
            }
        }

        function S(L) {
            d = L
        }

        function y(L) {
            L = parseInt(L, 10);
            const E = s;
            s = L <= 0 ? p : Tl(p, isNaN(L) === !0 ? 100 : L), r && l.value === !0 && (E !== void 0 && r.removeEventListener("scroll", E, xo), r.addEventListener("scroll", s, xo))
        }

        function b(L) {
            if (h.value === !0) {
                if (i.value === null) return void (L !== !0 && We(() => {
                    b(!0)
                }));
                const E = `${o.value === !0 ? "un" : ""}pauseAnimations`;
                Array.from(i.value.getElementsByTagName("svg")).forEach(V => {
                    V[E]()
                })
            }
        }

        const h = f(() => e.disable !== !0 && l.value === !0);
        pe([o, h], () => {
            b()
        }), pe(() => e.disable, L => {
            L === !0 ? x() : g()
        }), pe(() => e.reverse, () => {
            o.value === !1 && l.value === !0 && p()
        }), pe(() => e.scrollTarget, w), pe(() => e.debounce, y);
        let C = !1;
        Hn(() => {
            C !== !1 && r && cl(r, C)
        }), kn(() => {
            C = !!r && so(r)
        }), Ke(() => {
            l.value === !0 && r.removeEventListener("scroll", s, xo)
        }), mt(() => {
            y(e.debounce), w(), o.value === !1 && b()
        });
        const A = Se();
        return Object.assign(A.proxy, {
            poll: () => {
                s !== void 0 && s()
            }, trigger: v, stop: x, reset: m, resume: g, setIndex: S
        }), () => {
            const L = ha(t.default, []);
            return h.value === !0 && L[e.reverse === !1 ? "push" : "unshift"](u("div", {
                ref: i,
                class: c.value
            }, Ae(t.loading))), u("div", {class: "q-infinite-scroll", ref: a}, L)
        }
    }
}), w_ = ve({
    name: "QInnerLoading",
    props: {
        ...Ge, ..._a,
        showing: Boolean,
        color: String,
        size: {type: [String, Number], default: 42},
        label: String,
        labelClass: String,
        labelStyle: [String, Array, Object]
    },
    setup(e, {slots: t}) {
        const n = Se(), o = Je(e, n.proxy.$q), {transitionProps: l, transitionStyle: a} = lr(e),
            i = f(() => "q-inner-loading absolute-full column flex-center" + (o.value === !0 ? " q-inner-loading--dark" : "")),
            r = f(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));

        function s() {
            const c = [u(tn, {size: e.size, color: e.color})];
            return e.label !== void 0 && c.push(u("div", {class: r.value, style: e.labelStyle}, [e.label])), c
        }

        function d() {
            return e.showing === !0 ? u("div", {
                class: i.value,
                style: a.value
            }, t.default !== void 0 ? t.default() : s()) : null
        }

        return () => u($t, l.value, d)
    }
});
const $d = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####"
}, Ei = {
    "#": {pattern: "[\\d]", negate: "[^\\d]"},
    S: {pattern: "[a-zA-Z]", negate: "[^a-zA-Z]"},
    N: {pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]"},
    A: {pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: e => e.toLocaleUpperCase()},
    a: {pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: e => e.toLocaleLowerCase()},
    X: {pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: e => e.toLocaleUpperCase()},
    x: {pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: e => e.toLocaleLowerCase()}
}, t0 = Object.keys(Ei);
t0.forEach(e => {
    Ei[e].regex = new RegExp(Ei[e].pattern)
});
const x_ = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + t0.join("") + "])|(.)", "g"),
    Md = /[.*+?^${}()|[\]\\]/g, Mt = String.fromCharCode(1),
    S_ = {mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean};

function C_(e, t, n, o) {
    let l, a, i, r, s, d;
    const c = D(null), p = D(m());

    function v() {
        return e.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    }

    function m() {
        if (x(), c.value === !0) {
            const V = C(L(e.modelValue));
            return e.fillMask !== !1 ? E(V) : V
        }
        return e.modelValue
    }

    function g(V) {
        if (V < l.length) return l.slice(-V);
        let O = "", z = l;
        const M = z.indexOf(Mt);
        if (M > -1) {
            for (let k = V - z.length; k > 0; k--) O += Mt;
            z = z.slice(0, M) + O + z.slice(M)
        }
        return z
    }

    function x() {
        if (c.value = e.mask !== void 0 && e.mask.length !== 0 && v(), c.value === !1) return r = void 0, l = "", void (a = "");
        const V = $d[e.mask] === void 0 ? e.mask : $d[e.mask],
            O = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_",
            z = O.replace(Md, "\\$&"), M = [], k = [], B = [];
        let Y = e.reverseFillMask === !0, J = "", $ = "";
        V.replace(x_, (K, T, ee, Z, ie) => {
            if (Z !== void 0) {
                const G = Ei[Z];
                B.push(G), $ = G.negate, Y === !0 && (k.push("(?:" + $ + "+)?(" + G.pattern + "+)?(?:" + $ + "+)?(" + G.pattern + "+)?"), Y = !1), k.push("(?:" + $ + "+)?(" + G.pattern + ")?")
            } else if (ee !== void 0) J = "\\" + (ee === "\\" ? "" : ee), B.push(ee), M.push("([^" + J + "]+)?" + J + "?"); else {
                const G = T !== void 0 ? T : ie;
                J = G === "\\" ? "\\\\\\\\" : G.replace(Md, "\\\\$&"), B.push(G), M.push("([^" + J + "]+)?" + J + "?")
            }
        });
        const Q = new RegExp("^" + M.join("") + "(" + (J === "" ? "." : "[^" + J + "]") + "+)?" + (J === "" ? "" : "[" + J + "]*") + "$"),
            ae = k.length - 1,
            be = k.map((K, T) => T === 0 && e.reverseFillMask === !0 ? new RegExp("^" + z + "*" + K) : T === ae ? new RegExp("^" + K + "(" + ($ === "" ? "." : $) + "+)?" + (e.reverseFillMask === !0 ? "$" : z + "*")) : new RegExp("^" + K));
        i = B, r = K => {
            const T = Q.exec(e.reverseFillMask === !0 ? K : K.slice(0, B.length + 1));
            T !== null && (K = T.slice(1).join(""));
            const ee = [], Z = be.length;
            for (let ie = 0, G = K; ie < Z; ie++) {
                const I = be[ie].exec(G);
                if (I === null) break;
                G = G.slice(I.shift().length), ee.push(...I)
            }
            return ee.length !== 0 ? ee.join("") : K
        }, l = B.map(K => typeof K == "string" ? K : Mt).join(""), a = l.split(Mt).join(O)
    }

    function w(V, O, z) {
        const M = o.value, k = M.selectionEnd, B = M.value.length - k, Y = L(V);
        O === !0 && x();
        const J = C(Y), $ = e.fillMask !== !1 ? E(J) : J, Q = p.value !== $;
        M.value !== $ && (M.value = $), Q === !0 && (p.value = $), document.activeElement === M && We(() => {
            if ($ !== a) if (z !== "insertFromPaste" || e.reverseFillMask === !0) if (["deleteContentBackward", "deleteContentForward"].indexOf(z) > -1) {
                const be = e.reverseFillMask === !0 ? k === 0 ? $.length > J.length ? 1 : 0 : Math.max(0, $.length - ($ === a ? 0 : Math.min(J.length, B) + 1)) + 1 : k;
                M.setSelectionRange(be, be, "forward")
            } else if (e.reverseFillMask === !0) if (Q === !0) {
                const be = Math.max(0, $.length - ($ === a ? 0 : Math.min(J.length, B + 1)));
                be === 1 && k === 1 ? M.setSelectionRange(be, be, "forward") : y.rightReverse(M, be)
            } else {
                const be = $.length - B;
                M.setSelectionRange(be, be, "backward")
            } else if (Q === !0) {
                const be = Math.max(0, l.indexOf(Mt), Math.min(J.length, k) - 1);
                y.right(M, be)
            } else {
                const be = k - 1;
                y.right(M, be)
            } else {
                const be = M.selectionEnd;
                let K = k - 1;
                for (let T = s; T <= K && T < be; T++) l[T] !== Mt && K++;
                y.right(M, K)
            } else {
                const be = e.reverseFillMask === !0 ? a.length : 0;
                M.setSelectionRange(be, be, "forward")
            }
        });
        const ae = e.unmaskedValue === !0 ? L($) : $;
        String(e.modelValue) === ae || e.modelValue === null && ae === "" || n(ae, !0)
    }

    function S(V, O, z) {
        const M = C(L(V.value));
        O = Math.max(0, l.indexOf(Mt), Math.min(M.length, O)), s = O, V.setSelectionRange(O, z, "forward")
    }

    pe(() => e.type + e.autogrow, x), pe(() => e.mask, V => {
        if (V !== void 0) w(p.value, !0); else {
            const O = L(p.value);
            x(), e.modelValue !== O && t("update:modelValue", O)
        }
    }), pe(() => e.fillMask + e.reverseFillMask, () => {
        c.value === !0 && w(p.value, !0)
    }), pe(() => e.unmaskedValue, () => {
        c.value === !0 && w(p.value)
    });
    const y = {
        left(V, O) {
            const z = l.slice(O - 1).indexOf(Mt) === -1;
            let M = Math.max(0, O - 1);
            for (; M >= 0; M--) if (l[M] === Mt) {
                O = M, z === !0 && O++;
                break
            }
            if (M < 0 && l[O] !== void 0 && l[O] !== Mt) return y.right(V, 0);
            O >= 0 && V.setSelectionRange(O, O, "backward")
        }, right(V, O) {
            const z = V.value.length;
            let M = Math.min(z, O + 1);
            for (; M <= z; M++) {
                if (l[M] === Mt) {
                    O = M;
                    break
                }
                l[M - 1] === Mt && (O = M)
            }
            if (M > z && l[O - 1] !== void 0 && l[O - 1] !== Mt) return y.left(V, z);
            V.setSelectionRange(O, O, "forward")
        }, leftReverse(V, O) {
            const z = g(V.value.length);
            let M = Math.max(0, O - 1);
            for (; M >= 0; M--) {
                if (z[M - 1] === Mt) {
                    O = M;
                    break
                }
                if (z[M] === Mt && (O = M, M === 0)) break
            }
            if (M < 0 && z[O] !== void 0 && z[O] !== Mt) return y.rightReverse(V, 0);
            O >= 0 && V.setSelectionRange(O, O, "backward")
        }, rightReverse(V, O) {
            const z = V.value.length, M = g(z), k = M.slice(0, O + 1).indexOf(Mt) === -1;
            let B = Math.min(z, O + 1);
            for (; B <= z; B++) if (M[B - 1] === Mt) {
                O = B, O > 0 && k === !0 && O--;
                break
            }
            if (B > z && M[O - 1] !== void 0 && M[O - 1] !== Mt) return y.leftReverse(V, z);
            V.setSelectionRange(O, O, "forward")
        }
    };

    function b(V) {
        t("click", V), d = void 0
    }

    function h(V) {
        if (t("keydown", V), zo(V) === !0 || V.altKey === !0) return;
        const O = o.value, z = O.selectionStart, M = O.selectionEnd;
        if (V.shiftKey || (d = void 0), V.keyCode === 37 || V.keyCode === 39) {
            V.shiftKey && d === void 0 && (d = O.selectionDirection === "forward" ? z : M);
            const k = y[(V.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === !0 ? "Reverse" : "")];
            if (V.preventDefault(), k(O, d === z ? M : z), V.shiftKey) {
                const B = O.selectionStart;
                O.setSelectionRange(Math.min(d, B), Math.max(d, B), "forward")
            }
        } else V.keyCode === 8 && e.reverseFillMask !== !0 && z === M ? (y.left(O, z), O.setSelectionRange(O.selectionStart, M, "backward")) : V.keyCode === 46 && e.reverseFillMask === !0 && z === M && (y.rightReverse(O, M), O.setSelectionRange(z, O.selectionEnd, "forward"))
    }

    function C(V) {
        if (V == null || V === "") return "";
        if (e.reverseFillMask === !0) return A(V);
        const O = i;
        let z = 0, M = "";
        for (let k = 0; k < O.length; k++) {
            const B = V[z], Y = O[k];
            if (typeof Y == "string") M += Y, B === Y && z++; else {
                if (B === void 0 || !Y.regex.test(B)) return M;
                M += Y.transform !== void 0 ? Y.transform(B) : B, z++
            }
        }
        return M
    }

    function A(V) {
        const O = i, z = l.indexOf(Mt);
        let M = V.length - 1, k = "";
        for (let B = O.length - 1; B >= 0 && M > -1; B--) {
            const Y = O[B];
            let J = V[M];
            if (typeof Y == "string") k = Y + k, J === Y && M--; else {
                if (J === void 0 || !Y.regex.test(J)) return k;
                do k = (Y.transform !== void 0 ? Y.transform(J) : J) + k, M--, J = V[M]; while (z === B && J !== void 0 && Y.regex.test(J))
            }
        }
        return k
    }

    function L(V) {
        return typeof V != "string" || r === void 0 ? typeof V == "number" ? r("" + V) : V : r(V)
    }

    function E(V) {
        return a.length - V.length <= 0 ? V : e.reverseFillMask === !0 && V.length !== 0 ? a.slice(0, -V.length) + V : V + a.slice(V.length)
    }

    return {innerValue: p, hasMask: c, moveCursorForPaste: S, updateMaskValue: w, onMaskedKeydown: h, onMaskedClick: b}
}

const k_ = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
    q_ = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
    T_ = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, $_ = /[a-z0-9_ -]$/i;

function n0(e) {
    return function (t) {
        if (t.type === "compositionend" || t.type === "change") {
            if (t.target.qComposing !== !0) return;
            t.target.qComposing = !1, e(t)
        } else t.type === "compositionupdate" && t.target.qComposing !== !0 && typeof t.data == "string" && (Fe.is.firefox === !0 ? $_.test(t.data) === !1 : k_.test(t.data) === !0 || q_.test(t.data) === !0 || T_.test(t.data) === !0) === !0 && (t.target.qComposing = !0)
    }
}

var qu = ve({
    name: "QInput",
    inheritAttrs: !1,
    props: {
        ...qa, ...S_, ...vn,
        modelValue: {required: !1},
        shadowText: String,
        type: {type: String, default: "text"},
        debounce: [String, Number],
        autogrow: Boolean,
        inputClass: [Array, String, Object],
        inputStyle: [Array, String, Object]
    },
    emits: [...rr, "paste", "change", "keydown", "click", "animationend"],
    setup(e, {emit: t, attrs: n}) {
        const {proxy: o} = Se(), {$q: l} = o, a = {};
        let i, r, s, d = NaN, c = null;
        const p = D(null), v = su(e), {
                innerValue: m,
                hasMask: g,
                moveCursorForPaste: x,
                updateMaskValue: w,
                onMaskedKeydown: S,
                onMaskedClick: y
            } = C_(e, t, J, p), b = e0(e, !0), h = f(() => Vo(m.value)), C = n0(B), A = sr(),
            L = f(() => e.type === "textarea" || e.autogrow === !0),
            E = f(() => L.value === !0 || ["text", "search", "url", "tel", "password"].includes(e.type)), V = f(() => {
                const T = {...A.splitAttrs.listeners.value, onInput: B, onPaste: k, onChange: Q, onBlur: ae, onFocus: _t};
                return T.onCompositionstart = T.onCompositionupdate = T.onCompositionend = C, g.value === !0 && (T.onKeydown = S, T.onClick = y), e.autogrow === !0 && (T.onAnimationend = Y), T
            }), O = f(() => {
                const T = {
                    tabindex: 0,
                    "data-autofocus": e.autofocus === !0 || void 0,
                    rows: e.type === "textarea" ? 6 : void 0,
                    "aria-label": e.label,
                    name: v.value, ...A.splitAttrs.attributes.value,
                    id: A.targetUid.value,
                    maxlength: e.maxlength,
                    disabled: e.disable === !0,
                    readonly: e.readonly === !0
                };
                return L.value === !1 && (T.type = e.type), e.autogrow === !0 && (T.rows = 1), T
            });

        function z() {
            Al(() => {
                const T = document.activeElement;
                p.value === null || p.value === T || T !== null && T.id === A.targetUid.value || p.value.focus({preventScroll: !0})
            })
        }

        function M() {
            p.value !== null && p.value.select()
        }

        function k(T) {
            if (g.value === !0 && e.reverseFillMask !== !0) {
                const ee = T.target;
                x(ee, ee.selectionStart, ee.selectionEnd)
            }
            t("paste", T)
        }

        function B(T) {
            if (!T || !T.target) return;
            if (e.type === "file") return void t("update:modelValue", T.target.files);
            const ee = T.target.value;
            if (T.target.qComposing !== !0) {
                if (g.value === !0) w(ee, !1, T.inputType); else if (J(ee), E.value === !0 && T.target === document.activeElement) {
                    const {selectionStart: Z, selectionEnd: ie} = T.target;
                    Z !== void 0 && ie !== void 0 && We(() => {
                        T.target === document.activeElement && ee.indexOf(T.target.value) === 0 && T.target.setSelectionRange(Z, ie)
                    })
                }
                e.autogrow === !0 && $()
            } else a.value = ee
        }

        function Y(T) {
            t("animationend", T), $()
        }

        function J(T, ee) {
            s = () => {
                c = null, e.type !== "number" && a.hasOwnProperty("value") === !0 && delete a.value, e.modelValue !== T && d !== T && (d = T, ee === !0 && (r = !0), t("update:modelValue", T), We(() => {
                    d === T && (d = NaN)
                })), s = void 0
            }, e.type === "number" && (i = !0, a.value = T), e.debounce !== void 0 ? (c !== null && clearTimeout(c), a.value = T, c = setTimeout(s, e.debounce)) : s()
        }

        function $() {
            requestAnimationFrame(() => {
                const T = p.value;
                if (T !== null) {
                    const ee = T.parentNode.style, {scrollTop: Z} = T, {
                            overflowY: ie,
                            maxHeight: G
                        } = l.platform.is.firefox === !0 ? {} : window.getComputedStyle(T),
                        I = ie !== void 0 && ie !== "scroll";
                    I === !0 && (T.style.overflowY = "hidden"), ee.marginBottom = T.scrollHeight - 1 + "px", T.style.height = "1px", T.style.height = T.scrollHeight + "px", I === !0 && (T.style.overflowY = parseInt(G, 10) < T.scrollHeight ? "auto" : "hidden"), ee.marginBottom = "", T.scrollTop = Z
                }
            })
        }

        function Q(T) {
            C(T), c !== null && (clearTimeout(c), c = null), s !== void 0 && s(), t("change", T.target.value)
        }

        function ae(T) {
            T !== void 0 && _t(T), c !== null && (clearTimeout(c), c = null), s !== void 0 && s(), i = !1, r = !1, delete a.value, e.type !== "file" && setTimeout(() => {
                p.value !== null && (p.value.value = m.value !== void 0 ? m.value : "")
            })
        }

        function be() {
            return a.hasOwnProperty("value") === !0 ? a.value : m.value !== void 0 ? m.value : ""
        }

        pe(() => e.type, () => {
            p.value && (p.value.value = e.modelValue)
        }), pe(() => e.modelValue, T => {
            if (g.value === !0) {
                if (r === !0 && (r = !1, String(T) === d)) return;
                w(T)
            } else m.value !== T && (m.value = T, e.type === "number" && a.hasOwnProperty("value") === !0 && (i === !0 ? i = !1 : delete a.value));
            e.autogrow === !0 && We($)
        }), pe(() => e.autogrow, T => {
            T === !0 ? We($) : p.value !== null && n.rows > 0 && (p.value.style.height = "auto")
        }), pe(() => e.dense, () => {
            e.autogrow === !0 && We($)
        }), Ke(() => {
            ae()
        }), mt(() => {
            e.autogrow === !0 && $()
        }), Object.assign(A, {
            innerValue: m,
            fieldClass: f(() => `q-${L.value === !0 ? "textarea" : "input"}` + (e.autogrow === !0 ? " q-textarea--autogrow" : "")),
            hasShadow: f(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0),
            inputRef: p,
            emitValue: J,
            hasValue: h,
            floatingLabel: f(() => h.value === !0 && (e.type !== "number" || isNaN(m.value) === !1) || Vo(e.displayValue)),
            getControl: () => u(L.value === !0 ? "textarea" : "input", {
                ref: p,
                class: ["q-field__native q-placeholder", e.inputClass],
                style: e.inputStyle, ...O.value, ...V.value, ...e.type !== "file" ? {value: be()} : b.value
            }),
            getShadowControl: () => u("div", {class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (L.value === !0 ? "" : " text-no-wrap")}, [u("span", {class: "invisible"}, be()), u("span", e.shadowText)])
        });
        const K = ur(A);
        return Object.assign(o, {
            focus: z,
            select: M,
            getNativeElement: () => p.value
        }), At(o, "nativeEl", () => p.value), K
    }
});
const Ed = {threshold: 0, root: null, rootMargin: "0px"};

function Pd(e, t, n) {
    let o, l, a;
    typeof n == "function" ? (o = n, l = Ed, a = t.cfg === void 0) : (o = n.handler, l = Object.assign({}, Ed, n.cfg), a = t.cfg === void 0 || yn(t.cfg, l) === !1), t.handler !== o && (t.handler = o), a === !0 && (t.cfg = l, t.observer !== void 0 && t.observer.unobserve(e), t.observer = new IntersectionObserver(([i]) => {
        if (typeof t.handler == "function") {
            if (i.rootBounds === null && document.body.contains(e) === !0) return t.observer.unobserve(e), void t.observer.observe(e);
            (t.handler(i, t.observer) === !1 || t.once === !0 && i.isIntersecting === !0) && o0(e)
        }
    }, l), t.observer.observe(e))
}

function o0(e) {
    const t = e.__qvisible;
    t !== void 0 && (t.observer !== void 0 && t.observer.unobserve(e), delete e.__qvisible)
}

var l0 = qn({
    name: "intersection", mounted(e, {modifiers: t, value: n}) {
        const o = {once: t.once === !0};
        Pd(e, o, n), e.__qvisible = o
    }, updated(e, t) {
        const n = e.__qvisible;
        n !== void 0 && Pd(e, n, t.value)
    }, beforeUnmount: o0
}), M_ = ve({
    name: "QIntersection",
    props: {
        tag: {type: String, default: "div"},
        once: Boolean,
        transition: String,
        transitionDuration: {type: [String, Number], default: 300},
        ssrPrerender: Boolean,
        margin: String,
        threshold: [Number, Array],
        root: {default: null},
        disable: Boolean,
        onVisibility: Function
    },
    setup(e, {slots: t, emit: n}) {
        const o = D(en.value === !0 && e.ssrPrerender),
            l = f(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? {
                handler: s,
                cfg: {root: e.root, rootMargin: e.margin, threshold: e.threshold}
            } : s), a = f(() => e.disable !== !0 && (en.value !== !0 || e.once !== !0 || e.ssrPrerender !== !0)),
            i = f(() => [[l0, l.value, void 0, {once: e.once}]]),
            r = f(() => `--q-transition-duration: ${e.transitionDuration}ms`);

        function s(c) {
            o.value !== c.isIntersecting && (o.value = c.isIntersecting, e.onVisibility !== void 0 && n("visibility", o.value))
        }

        function d() {
            return o.value === !0 ? [u("div", {
                key: "content",
                style: r.value
            }, Ae(t.default))] : t.hidden !== void 0 ? [u("div", {key: "hidden", style: r.value}, t.hidden())] : void 0
        }

        return () => {
            const c = e.transition ? [u($t, {name: "q-transition--" + e.transition}, d)] : d();
            return fn(e.tag, {class: "q-intersection"}, c, "main", a.value, () => i.value)
        }
    }
}), a0 = ve({
    name: "QList",
    props: {
        ...Ge,
        bordered: Boolean,
        dense: Boolean,
        separator: Boolean,
        padding: Boolean,
        tag: {type: String, default: "div"}
    },
    setup(e, {slots: t}) {
        const n = Se(), o = Je(e, n.proxy.$q),
            l = f(() => "q-list" + (e.bordered === !0 ? " q-list--bordered" : "") + (e.dense === !0 ? " q-list--dense" : "") + (e.separator === !0 ? " q-list--separator" : "") + (o.value === !0 ? " q-list--dark" : "") + (e.padding === !0 ? " q-list--padding" : ""));
        return () => u(e.tag, {class: l.value}, Ae(t.default))
    }
});
const Ad = [34, 37, 40, 33, 39, 38], E_ = Object.keys(yu);
var P_ = ve({
    name: "QKnob",
    props: {
        ...vn, ...yu,
        modelValue: {type: Number, required: !0},
        innerMin: Number,
        innerMax: Number,
        step: {type: Number, default: 1, validator: e => e >= 0},
        tabindex: {type: [Number, String], default: 0},
        disable: Boolean,
        readonly: Boolean
    },
    emits: ["update:modelValue", "change", "dragValue"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: o} = Se(), {$q: l} = o, a = D(e.modelValue), i = D(!1),
            r = f(() => isNaN(e.innerMin) === !0 || e.innerMin < e.min ? e.min : e.innerMin),
            s = f(() => isNaN(e.innerMax) === !0 || e.innerMax > e.max ? e.max : e.innerMax);
        let d;

        function c() {
            a.value = e.modelValue === null ? r.value : ct(e.modelValue, r.value, s.value), z(!0)
        }

        pe(() => `${e.modelValue}|${r.value}|${s.value}`, c), c();
        const p = f(() => e.disable === !1 && e.readonly === !1),
            v = f(() => "q-knob non-selectable" + (p.value === !0 ? " q-knob--editable" : e.disable === !0 ? " disabled" : "")),
            m = f(() => (String(e.step).trim().split(".")[1] || "").length), g = f(() => e.step === 0 ? 1 : e.step),
            x = f(() => e.instantFeedback === !0 || i.value === !0),
            w = l.platform.is.mobile === !0 ? f(() => p.value === !0 ? {onClick: L} : {}) : f(() => p.value === !0 ? {
                onMousedown: A,
                onClick: L,
                onKeydown: E,
                onKeyup: O
            } : {}),
            S = f(() => p.value === !0 ? {tabindex: e.tabindex} : {[`aria-${e.disable === !0 ? "disabled" : "readonly"}`]: "true"}),
            y = f(() => {
                const B = {};
                return E_.forEach(Y => {
                    B[Y] = e[Y]
                }), B
            });

        function b(B) {
            B.isFinal ? (V(B.evt, !0), i.value = !1) : (B.isFirst && (C(), i.value = !0), V(B.evt))
        }

        const h = f(() => [[Jt, b, void 0, {prevent: !0, stop: !0, mouse: !0}]]);

        function C() {
            const {top: B, left: Y, width: J, height: $} = o.$el.getBoundingClientRect();
            d = {top: B + $ / 2, left: Y + J / 2}
        }

        function A(B) {
            C(), V(B)
        }

        function L(B) {
            C(), V(B, !0)
        }

        function E(B) {
            if (!Ad.includes(B.keyCode)) return;
            Ie(B);
            const Y = ([34, 33].includes(B.keyCode) ? 10 : 1) * g.value, J = [34, 37, 40].includes(B.keyCode) ? -Y : Y;
            a.value = ct(parseFloat((a.value + J).toFixed(m.value)), r.value, s.value), z()
        }

        function V(B, Y) {
            const J = Wt(B), $ = Math.abs(J.top - d.top), Q = Math.sqrt($ ** 2 + Math.abs(J.left - d.left) ** 2);
            let ae = Math.asin($ / Q) * (180 / Math.PI);
            ae = J.top < d.top ? d.left < J.left ? 90 - ae : 270 + ae : d.left < J.left ? ae + 90 : 270 - ae, l.lang.rtl === !0 ? ae = gi(-ae - e.angle, 0, 360) : e.angle && (ae = gi(ae - e.angle, 0, 360)), e.reverse === !0 && (ae = 360 - ae);
            let be = e.min + ae / 360 * (e.max - e.min);
            if (g.value !== 0) {
                const K = be % g.value;
                be = be - K + (Math.abs(K) >= g.value / 2 ? (K < 0 ? -1 : 1) * g.value : 0), be = parseFloat(be.toFixed(m.value))
            }
            be = ct(be, r.value, s.value), n("dragValue", be), a.value !== be && (a.value = be), z(Y)
        }

        function O(B) {
            Ad.includes(B.keyCode) && z(!0)
        }

        function z(B) {
            e.modelValue !== a.value && n("update:modelValue", a.value), B === !0 && n("change", a.value)
        }

        const M = xa(e);

        function k() {
            return u("input", M.value)
        }

        return () => {
            const B = {
                class: v.value,
                role: "slider",
                "aria-valuemin": r.value,
                "aria-valuemax": s.value,
                "aria-valuenow": e.modelValue, ...S.value, ...y.value,
                value: a.value,
                instantFeedback: x.value, ...w.value
            }, Y = {default: t.default};
            return p.value === !0 && e.name !== void 0 && (Y.internal = k), fn(_u, B, Y, "knob", p.value, () => h.value)
        }
    }
});
const {passive: Bd} = ut, A_ = ["both", "horizontal", "vertical"];
var Tu = ve({
    name: "QScrollObserver",
    props: {
        axis: {type: String, validator: e => A_.includes(e), default: "vertical"},
        debounce: [String, Number],
        scrollTarget: {default: void 0}
    },
    emits: ["scroll"],
    setup(e, {emit: t}) {
        const n = {
            position: {top: 0, left: 0},
            direction: "down",
            directionChanged: !1,
            delta: {top: 0, left: 0},
            inflectionPoint: {top: 0, left: 0}
        };
        let o, l, a = null;

        function i() {
            a !== null && a();
            const p = Math.max(0, so(o)), v = ar(o), m = {top: p - n.position.top, left: v - n.position.left};
            if (e.axis === "vertical" && m.top === 0 || e.axis === "horizontal" && m.left === 0) return;
            const g = Math.abs(m.top) >= Math.abs(m.left) ? m.top < 0 ? "up" : "down" : m.left < 0 ? "left" : "right";
            n.position = {
                top: p,
                left: v
            }, n.directionChanged = n.direction !== g, n.delta = m, n.directionChanged === !0 && (n.direction = g, n.inflectionPoint = n.position), t("scroll", {...n})
        }

        function r() {
            o = An(l, e.scrollTarget), o.addEventListener("scroll", d, Bd), d(!0)
        }

        function s() {
            o !== void 0 && (o.removeEventListener("scroll", d, Bd), o = void 0)
        }

        function d(p) {
            if (p === !0 || e.debounce === 0 || e.debounce === "0") i(); else if (a === null) {
                const [v, m] = e.debounce ? [setTimeout(i, e.debounce), clearTimeout] : [requestAnimationFrame(i), cancelAnimationFrame];
                a = () => {
                    m(v), a = null
                }
            }
        }

        pe(() => e.scrollTarget, () => {
            s(), r()
        });
        const {proxy: c} = Se();
        return pe(() => c.$q.lang.rtl, i), mt(() => {
            l = c.$el.parentNode, r()
        }), Ke(() => {
            a !== null && a(), s()
        }), Object.assign(c, {trigger: d, getPosition: () => n}), xt
    }
}), B_ = ve({
    name: "QLayout",
    props: {
        container: Boolean,
        view: {
            type: String,
            default: "hhh lpr fff",
            validator: e => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())
        },
        onScroll: Function,
        onScrollHeight: Function,
        onResize: Function
    },
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: o}} = Se(), l = D(null), a = D(o.screen.height),
            i = D(e.container === !0 ? 0 : o.screen.width), r = D({position: 0, direction: "down", inflectionPoint: 0}),
            s = D(0), d = D(en.value === !0 ? 0 : ei()),
            c = f(() => "q-layout q-layout--" + (e.container === !0 ? "containerized" : "standard")),
            p = f(() => e.container === !1 ? {minHeight: o.screen.height + "px"} : null),
            v = f(() => d.value !== 0 ? {[o.lang.rtl === !0 ? "left" : "right"]: `${d.value}px`} : null),
            m = f(() => d.value !== 0 ? {
                [o.lang.rtl === !0 ? "right" : "left"]: 0,
                [o.lang.rtl === !0 ? "left" : "right"]: `-${d.value}px`,
                width: `calc(100% + ${d.value}px)`
            } : null);

        function g(h) {
            if (e.container === !0 || document.qScrollPrevented !== !0) {
                const C = {
                    position: h.position.top,
                    direction: h.direction,
                    directionChanged: h.directionChanged,
                    inflectionPoint: h.inflectionPoint.top,
                    delta: h.delta.top
                };
                r.value = C, e.onScroll !== void 0 && n("scroll", C)
            }
        }

        function x(h) {
            const {height: C, width: A} = h;
            let L = !1;
            a.value !== C && (L = !0, a.value = C, e.onScrollHeight !== void 0 && n("scrollHeight", C), S()), i.value !== A && (L = !0, i.value = A), L === !0 && e.onResize !== void 0 && n("resize", h)
        }

        function w({height: h}) {
            s.value !== h && (s.value = h, S())
        }

        function S() {
            if (e.container === !0) {
                const h = a.value > s.value ? ei() : 0;
                d.value !== h && (d.value = h)
            }
        }

        let y = null;
        const b = {
            instances: {},
            view: f(() => e.view),
            isContainer: f(() => e.container),
            rootRef: l,
            height: a,
            containerHeight: s,
            scrollbarWidth: d,
            totalWidth: f(() => i.value + d.value),
            rows: f(() => {
                const h = e.view.toLowerCase().split(" ");
                return {top: h[0].split(""), middle: h[1].split(""), bottom: h[2].split("")}
            }),
            header: En({size: 0, offset: 0, space: !1}),
            right: En({size: 300, offset: 0, space: !1}),
            footer: En({size: 0, offset: 0, space: !1}),
            left: En({size: 300, offset: 0, space: !1}),
            scroll: r,
            animate() {
                y !== null ? clearTimeout(y) : document.body.classList.add("q-body--layout-animate"), y = setTimeout(() => {
                    y = null, document.body.classList.remove("q-body--layout-animate")
                }, 155)
            },
            update(h, C, A) {
                b[h][C] = A
            }
        };
        if (un(No, b), ei() > 0) {
            let A = function () {
                h = null, C.classList.remove("hide-scrollbar")
            }, L = function () {
                if (h === null) {
                    if (C.scrollHeight > o.screen.height) return;
                    C.classList.add("hide-scrollbar")
                } else clearTimeout(h);
                h = setTimeout(A, 300)
            }, E = function (V) {
                h !== null && V === "remove" && (clearTimeout(h), A()), window[`${V}EventListener`]("resize", L)
            }, h = null;
            const C = document.body;
            pe(() => e.container !== !0 ? "add" : "remove", E), e.container !== !0 && E("add"), ql(() => {
                E("remove")
            })
        }
        return () => {
            const h = St(t.default, [u(Tu, {onScroll: g}), u(co, {onResize: x})]),
                C = u("div", {class: c.value, style: p.value, ref: e.container === !0 ? void 0 : l, tabindex: -1}, h);
            return e.container === !0 ? u("div", {
                class: "q-layout-container overflow-hidden",
                ref: l
            }, [u(co, {onResize: w}), u("div", {class: "absolute-full", style: v.value}, [u("div", {
                class: "scroll",
                style: m.value
            }, [C])])]) : C
        }
    }
});
const O_ = ["horizontal", "vertical", "cell", "none"];
var i0 = ve({
    name: "QMarkupTable",
    props: {
        ...Ge,
        dense: Boolean,
        flat: Boolean,
        bordered: Boolean,
        square: Boolean,
        wrapCells: Boolean,
        separator: {type: String, default: "horizontal", validator: e => O_.includes(e)}
    },
    setup(e, {slots: t}) {
        const n = Se(), o = Je(e, n.proxy.$q),
            l = f(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (o.value === !0 ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === !0 ? " q-table--dense" : "") + (e.flat === !0 ? " q-table--flat" : "") + (e.bordered === !0 ? " q-table--bordered" : "") + (e.square === !0 ? " q-table--square" : "") + (e.wrapCells === !1 ? " q-table--no-wrap" : ""));
        return () => u("div", {class: l.value}, [u("table", {class: "q-table"}, Ae(t.default))])
    }
}), L_ = ve({
    name: "QNoSsr", props: {tag: {type: String, default: "div"}, placeholder: String}, setup(e, {slots: t}) {
        const n = _p();
        return () => {
            const o = {};
            if (n.value === !0) {
                const a = Ae(t.default);
                return a === void 0 ? a : a.length > 1 ? u(e.tag, o, a) : a[0]
            }
            o.class = "q-no-ssr-placeholder";
            const l = Ae(t.placeholder);
            return l !== void 0 ? l.length > 1 ? u(e.tag, o, l) : l[0] : e.placeholder !== void 0 ? u(e.tag, o, e.placeholder) : void 0
        }
    }
});
const R_ = u("svg", {
    key: "svg",
    class: "q-radio__bg absolute non-selectable",
    viewBox: "0 0 24 24"
}, [u("path", {d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}), u("path", {
    class: "q-radio__check",
    d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
})]);
var r0 = ve({
    name: "QRadio",
    props: {
        ...Ge, ...Qn, ...vn,
        modelValue: {required: !0},
        val: {required: !0},
        label: String,
        leftLabel: Boolean,
        checkedIcon: String,
        uncheckedIcon: String,
        color: String,
        keepColor: Boolean,
        dense: Boolean,
        disable: Boolean,
        tabindex: [String, Number]
    },
    emits: ["update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: o} = Se(), l = Je(e, o.$q), a = Kn(e, dp), i = D(null), {
                refocusTargetEl: r,
                refocusTarget: s
            } = cp(e, i), d = f(() => Qe(e.modelValue) === Qe(e.val)),
            c = f(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === !0 ? " disabled" : "") + (l.value === !0 ? " q-radio--dark" : "") + (e.dense === !0 ? " q-radio--dense" : "") + (e.leftLabel === !0 ? " reverse" : "")),
            p = f(() => {
                const b = e.color === void 0 || e.keepColor !== !0 && d.value !== !0 ? "" : ` text-${e.color}`;
                return `q-radio__inner relative-position q-radio__inner--${d.value === !0 ? "truthy" : "falsy"}${b}`
            }), v = f(() => (d.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null),
            m = f(() => e.disable === !0 ? -1 : e.tabindex || 0), g = f(() => {
                const b = {type: "radio"};
                return e.name !== void 0 && Object.assign(b, {
                    ".checked": d.value === !0,
                    "^checked": d.value === !0 ? "checked" : void 0,
                    name: e.name,
                    value: e.val
                }), b
            }), x = po(g);

        function w(b) {
            b !== void 0 && (Ie(b), s(b)), e.disable !== !0 && d.value !== !0 && n("update:modelValue", e.val, b)
        }

        function S(b) {
            b.keyCode !== 13 && b.keyCode !== 32 || Ie(b)
        }

        function y(b) {
            b.keyCode !== 13 && b.keyCode !== 32 || w(b)
        }

        return Object.assign(o, {set: w}), () => {
            const b = v.value !== null ? [u("div", {
                key: "icon",
                class: "q-radio__icon-container absolute-full flex flex-center no-wrap"
            }, [u(Ze, {class: "q-radio__icon", name: v.value})])] : [R_];
            e.disable !== !0 && x(b, "unshift", " q-radio__native q-ma-none q-pa-none");
            const h = [u("div", {class: p.value, style: a.value, "aria-hidden": "true"}, b)];
            r.value !== null && h.push(r.value);
            const C = e.label !== void 0 ? St(t.default, [e.label]) : Ae(t.default);
            return C !== void 0 && h.push(u("div", {class: "q-radio__label q-anchor--skip"}, C)), u("div", {
                ref: i,
                class: c.value,
                tabindex: m.value,
                role: "radio",
                "aria-label": e.label,
                "aria-checked": d.value === !0 ? "true" : "false",
                "aria-disabled": e.disable === !0 ? "true" : void 0,
                onClick: w,
                onKeydown: S,
                onKeyup: y
            }, h)
        }
    }
}), s0 = ve({
    name: "QToggle", props: {...fp, icon: String, iconColor: String}, emits: vp, setup(e) {
        function t(n, o) {
            const l = f(() => (n.value === !0 ? e.checkedIcon : o.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || e.icon),
                a = f(() => n.value === !0 ? e.iconColor : null);
            return () => [u("div", {class: "q-toggle__track"}), u("div", {class: "q-toggle__thumb absolute flex flex-center no-wrap"}, l.value !== void 0 ? [u(Ze, {
                name: l.value,
                color: a.value
            })] : void 0)]
        }

        return pp("toggle", t)
    }
});
const u0 = {radio: r0, checkbox: dl, toggle: s0}, V_ = Object.keys(u0);
var c0 = ve({
    name: "QOptionGroup",
    props: {
        ...Ge,
        modelValue: {required: !0},
        options: {type: Array, validator: e => e.every(t => "value" in t && "label" in t)},
        name: String,
        type: {default: "radio", validator: e => V_.includes(e)},
        color: String,
        keepColor: Boolean,
        dense: Boolean,
        size: String,
        leftLabel: Boolean,
        inline: Boolean,
        disable: Boolean
    },
    emits: ["update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {proxy: {$q: o}} = Se(), l = Array.isArray(e.modelValue);
        e.type === "radio" ? l === !0 && console.error("q-option-group: model should not be array") : l === !1 && console.error("q-option-group: model should be array in your case");
        const a = Je(e, o), i = f(() => u0[e.type]),
            r = f(() => "q-option-group q-gutter-x-sm" + (e.inline === !0 ? " q-option-group--inline" : "")),
            s = f(() => {
                const c = {role: "group"};
                return e.type === "radio" && (c.role = "radiogroup", e.disable === !0 && (c["aria-disabled"] = "true")), c
            });

        function d(c) {
            t("update:modelValue", c)
        }

        return () => u("div", {class: r.value, ...s.value}, e.options.map((c, p) => {
            const v = n["label-" + p] !== void 0 ? () => n["label-" + p](c) : n.label !== void 0 ? () => n.label(c) : void 0;
            return u("div", [u(i.value, {
                modelValue: e.modelValue,
                val: c.value,
                name: c.name === void 0 ? e.name : c.name,
                disable: e.disable || c.disable,
                label: v === void 0 ? c.label : null,
                leftLabel: c.leftLabel === void 0 ? e.leftLabel : c.leftLabel,
                color: c.color === void 0 ? e.color : c.color,
                checkedIcon: c.checkedIcon,
                uncheckedIcon: c.uncheckedIcon,
                dark: c.dark || a.value,
                size: c.size === void 0 ? e.size : c.size,
                dense: e.dense,
                keepColor: c.keepColor === void 0 ? e.keepColor : c.keepColor,
                "onUpdate:modelValue": d
            }, v)])
        }))
    }
}), F_ = ve({
    name: "QPage", props: {padding: Boolean, styleFn: Function}, setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Se(), o = vt(No, at);
        if (o === at) return console.error("QPage needs to be a deep child of QLayout"), at;
        if (vt(Bv, at) === at) return console.error("QPage needs to be child of QPageContainer"), at;
        const a = f(() => {
            const r = (o.header.space === !0 ? o.header.size : 0) + (o.footer.space === !0 ? o.footer.size : 0);
            if (typeof e.styleFn == "function") {
                const s = o.isContainer.value === !0 ? o.containerHeight.value : n.screen.height;
                return e.styleFn(r, s)
            }
            return {minHeight: o.isContainer.value === !0 ? o.containerHeight.value - r + "px" : n.screen.height === 0 ? r !== 0 ? `calc(100vh - ${r}px)` : "100vh" : n.screen.height - r + "px"}
        }), i = f(() => `q-page${e.padding === !0 ? " q-layout-padding" : ""}`);
        return () => u("main", {class: i.value, style: a.value}, Ae(t.default))
    }
}), z_ = ve({
    name: "QPageContainer", setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Se(), o = vt(No, at);
        if (o === at) return console.error("QPageContainer needs to be child of QLayout"), at;
        un(Bv, !0);
        const l = f(() => {
            const a = {};
            return o.header.space === !0 && (a.paddingTop = `${o.header.size}px`), o.right.space === !0 && (a[`padding${n.lang.rtl === !0 ? "Left" : "Right"}`] = `${o.right.size}px`), o.footer.space === !0 && (a.paddingBottom = `${o.footer.size}px`), o.left.space === !0 && (a[`padding${n.lang.rtl === !0 ? "Right" : "Left"}`] = `${o.left.size}px`), a
        });
        return () => u("div", {class: "q-page-container", style: l.value}, Ae(t.default))
    }
});
const d0 = {
    position: {
        type: String,
        default: "bottom-right",
        validator: e => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e)
    }, offset: {type: Array, validator: e => e.length === 2}, expand: Boolean
};

function f0() {
    const {props: e, proxy: {$q: t}} = Se(), n = vt(No, at);
    if (n === at) return console.error("QPageSticky needs to be child of QLayout"), at;
    const o = f(() => {
            const p = e.position;
            return {
                top: p.indexOf("top") > -1,
                right: p.indexOf("right") > -1,
                bottom: p.indexOf("bottom") > -1,
                left: p.indexOf("left") > -1,
                vertical: p === "top" || p === "bottom",
                horizontal: p === "left" || p === "right"
            }
        }), l = f(() => n.header.offset), a = f(() => n.right.offset), i = f(() => n.footer.offset),
        r = f(() => n.left.offset), s = f(() => {
            let p = 0, v = 0;
            const m = o.value, g = t.lang.rtl === !0 ? -1 : 1;
            m.top === !0 && l.value !== 0 ? v = `${l.value}px` : m.bottom === !0 && i.value !== 0 && (v = `${-i.value}px`), m.left === !0 && r.value !== 0 ? p = `${g * r.value}px` : m.right === !0 && a.value !== 0 && (p = `${-g * a.value}px`);
            const x = {transform: `translate(${p}, ${v})`};
            return e.offset && (x.margin = `${e.offset[1]}px ${e.offset[0]}px`), m.vertical === !0 ? (r.value !== 0 && (x[t.lang.rtl === !0 ? "right" : "left"] = `${r.value}px`), a.value !== 0 && (x[t.lang.rtl === !0 ? "left" : "right"] = `${a.value}px`)) : m.horizontal === !0 && (l.value !== 0 && (x.top = `${l.value}px`), i.value !== 0 && (x.bottom = `${i.value}px`)), x
        }),
        d = f(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === !0 ? "expand" : "shrink"}`);

    function c(p) {
        const v = Ae(p.default);
        return u("div", {class: d.value, style: s.value}, e.expand === !0 ? v : [u("div", v)])
    }

    return {$layout: n, getStickyContent: c}
}

var N_ = ve({
    name: "QPageScroller",
    props: {
        ...d0,
        scrollOffset: {type: Number, default: 1e3},
        reverse: Boolean,
        duration: {type: Number, default: 300},
        offset: {default: () => [18, 18]}
    },
    emits: ["click"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: o}} = Se(), {$layout: l, getStickyContent: a} = f0(), i = D(null);
        let r;
        const s = f(() => l.height.value - (l.isContainer.value === !0 ? l.containerHeight.value : o.screen.height));

        function d() {
            return e.reverse === !0 ? s.value - l.scroll.value.position > e.scrollOffset : l.scroll.value.position > e.scrollOffset
        }

        const c = D(d());

        function p() {
            const w = d();
            c.value !== w && (c.value = w)
        }

        function v() {
            e.reverse === !0 ? r === void 0 && (r = pe(s, p)) : m()
        }

        function m() {
            r !== void 0 && (r(), r = void 0)
        }

        function g(w) {
            const S = An(l.isContainer.value === !0 ? i.value : l.rootRef.value);
            cl(S, e.reverse === !0 ? l.height.value : 0, e.duration), n("click", w)
        }

        function x() {
            return c.value === !0 ? u("div", {ref: i, class: "q-page-scroller", onClick: g}, a(t)) : null
        }

        return pe(l.scroll, p), pe(() => e.reverse, v), v(), Ke(m), () => u($t, {name: "q-transition--fade"}, x)
    }
}), I_ = ve({
    name: "QPageSticky", props: d0, setup(e, {slots: t}) {
        const {getStickyContent: n} = f0();
        return () => n(t)
    }
});

function ja(e, t) {
    return [!0, !1].includes(e) ? e : t
}

var D_ = ve({
    name: "QPagination",
    props: {
        ...Ge,
        modelValue: {type: Number, required: !0},
        min: {type: [Number, String], default: 1},
        max: {type: [Number, String], required: !0},
        maxPages: {
            type: [Number, String],
            default: 0,
            validator: e => (typeof e == "string" ? parseInt(e, 10) : e) >= 0
        },
        inputStyle: [Array, String, Object],
        inputClass: [Array, String, Object],
        size: String,
        disable: Boolean,
        input: Boolean,
        iconPrev: String,
        iconNext: String,
        iconFirst: String,
        iconLast: String,
        toFn: Function,
        boundaryLinks: {type: Boolean, default: null},
        boundaryNumbers: {type: Boolean, default: null},
        directionLinks: {type: Boolean, default: null},
        ellipses: {type: Boolean, default: null},
        ripple: {type: [Boolean, Object], default: null},
        round: Boolean,
        rounded: Boolean,
        flat: Boolean,
        outline: Boolean,
        unelevated: Boolean,
        push: Boolean,
        glossy: Boolean,
        color: {type: String, default: "primary"},
        textColor: String,
        activeDesign: {type: String, default: "", values: e => e === "" || Wv.includes(e)},
        activeColor: String,
        activeTextColor: String,
        gutter: String,
        padding: {type: String, default: "3px 2px"}
    },
    emits: ["update:modelValue"],
    setup(e, {emit: t}) {
        const {proxy: n} = Se(), {$q: o} = n, l = Je(e, o), a = f(() => parseInt(e.min, 10)),
            i = f(() => parseInt(e.max, 10)), r = f(() => parseInt(e.maxPages, 10)),
            s = f(() => g.value + " / " + i.value), d = f(() => ja(e.boundaryLinks, e.input)),
            c = f(() => ja(e.boundaryNumbers, !e.input)), p = f(() => ja(e.directionLinks, e.input)),
            v = f(() => ja(e.ellipses, !e.input)), m = D(null), g = f({
                get: () => e.modelValue, set: k => {
                    if (k = parseInt(k, 10), e.disable || isNaN(k)) return;
                    const B = ct(k, a.value, i.value);
                    e.modelValue !== B && t("update:modelValue", B)
                }
            });
        pe(() => `${a.value}|${i.value}`, () => {
            g.value = e.modelValue
        });
        const x = f(() => "q-pagination row no-wrap items-center" + (e.disable === !0 ? " disabled" : "")),
            w = f(() => e.gutter in _i ? `${_i[e.gutter]}px` : e.gutter || null),
            S = f(() => w.value !== null ? `--q-pagination-gutter-parent:-${w.value};--q-pagination-gutter-child:${w.value}` : null),
            y = f(() => {
                const k = [e.iconFirst || o.iconSet.pagination.first, e.iconPrev || o.iconSet.pagination.prev, e.iconNext || o.iconSet.pagination.next, e.iconLast || o.iconSet.pagination.last];
                return o.lang.rtl === !0 ? k.reverse() : k
            }), b = f(() => ({"aria-disabled": e.disable === !0 ? "true" : "false", role: "navigation"})),
            h = f(() => eu(e, "flat")), C = f(() => ({
                [h.value]: !0,
                round: e.round,
                rounded: e.rounded,
                padding: e.padding,
                color: e.color,
                textColor: e.textColor,
                size: e.size,
                ripple: e.ripple === null || e.ripple
            })), A = f(() => {
                const k = {[h.value]: !1};
                return e.activeDesign !== "" && (k[e.activeDesign] = !0), k
            }), L = f(() => ({...A.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor})),
            E = f(() => {
                let k = Math.max(r.value, 1 + (v.value ? 2 : 0) + (c.value ? 2 : 0));
                const B = {
                    pgFrom: a.value,
                    pgTo: i.value,
                    ellipsesStart: !1,
                    ellipsesEnd: !1,
                    boundaryStart: !1,
                    boundaryEnd: !1,
                    marginalStyle: {minWidth: `${Math.max(2, String(i.value).length)}em`}
                };
                return r.value && k < i.value - a.value + 1 && (k = 1 + 2 * Math.floor(k / 2), B.pgFrom = Math.max(a.value, Math.min(i.value - k + 1, e.modelValue - Math.floor(k / 2))), B.pgTo = Math.min(i.value, B.pgFrom + k - 1), c.value && (B.boundaryStart = !0, B.pgFrom++), v.value && B.pgFrom > a.value + (c.value ? 1 : 0) && (B.ellipsesStart = !0, B.pgFrom++), c.value && (B.boundaryEnd = !0, B.pgTo--), v.value && B.pgTo < i.value - (c.value ? 1 : 0) && (B.ellipsesEnd = !0, B.pgTo--)), B
            });

        function V(k) {
            g.value = k
        }

        function O(k) {
            g.value = g.value + k
        }

        const z = f(() => {
            function k() {
                g.value = m.value, m.value = null
            }

            return {
                "onUpdate:modelValue": B => {
                    m.value = B
                }, onKeyup: B => {
                    dn(B, 13) === !0 && k()
                }, onBlur: k
            }
        });

        function M(k, B, Y) {
            const J = {"aria-label": B, "aria-current": "false", ...C.value, ...k};
            return Y === !0 && Object.assign(J, {"aria-current": "true", ...L.value}), B !== void 0 && (e.toFn !== void 0 ? J.to = e.toFn(B) : J.onClick = () => {
                V(B)
            }), u(tt, J)
        }

        return Object.assign(n, {set: V, setByOffset: O}), () => {
            const k = [], B = [];
            let Y;
            if (d.value === !0 && (k.push(M({
                key: "bls",
                disable: e.disable || e.modelValue <= a.value,
                icon: y.value[0]
            }, a.value)), B.unshift(M({
                key: "ble",
                disable: e.disable || e.modelValue >= i.value,
                icon: y.value[3]
            }, i.value))), p.value === !0 && (k.push(M({
                key: "bdp",
                disable: e.disable || e.modelValue <= a.value,
                icon: y.value[1]
            }, e.modelValue - 1)), B.unshift(M({
                key: "bdn",
                disable: e.disable || e.modelValue >= i.value,
                icon: y.value[2]
            }, e.modelValue + 1))), e.input !== !0) {
                Y = [];
                const {pgFrom: J, pgTo: $, marginalStyle: Q} = E.value;
                if (E.value.boundaryStart === !0) {
                    const ae = a.value === e.modelValue;
                    k.push(M({key: "bns", style: Q, disable: e.disable, label: a.value}, a.value, ae))
                }
                if (E.value.boundaryEnd === !0) {
                    const ae = i.value === e.modelValue;
                    B.unshift(M({key: "bne", style: Q, disable: e.disable, label: i.value}, i.value, ae))
                }
                E.value.ellipsesStart === !0 && k.push(M({
                    key: "bes",
                    style: Q,
                    disable: e.disable,
                    label: "…",
                    ripple: !1
                }, J - 1)), E.value.ellipsesEnd === !0 && B.unshift(M({
                    key: "bee",
                    style: Q,
                    disable: e.disable,
                    label: "…",
                    ripple: !1
                }, $ + 1));
                for (let ae = J; ae <= $; ae++) Y.push(M({
                    key: `bpg${ae}`,
                    style: Q,
                    disable: e.disable,
                    label: ae
                }, ae, ae === e.modelValue))
            }
            return u("div", {class: x.value, ...b.value}, [u("div", {
                class: "q-pagination__content row no-wrap items-center",
                style: S.value
            }, [...k, e.input === !0 ? u(qu, {
                class: "inline",
                style: {width: `${s.value.length / 1.5}em`},
                type: "number",
                dense: !0,
                value: m.value,
                disable: e.disable,
                dark: l.value,
                borderless: !0,
                inputClass: e.inputClass,
                inputStyle: e.inputStyle,
                placeholder: s.value,
                min: a.value,
                max: i.value, ...z.value
            }) : u("div", {class: "q-pagination__middle row justify-center"}, Y), ...B])])
        }
    }
});

function zr(e) {
    let t, n, o = !1;

    function l() {
        n = arguments, o !== !0 && (o = !0, t = requestAnimationFrame(() => {
            e.apply(this, n), n = void 0, o = !1
        }))
    }

    return l.cancel = () => {
        window.cancelAnimationFrame(t), o = !1
    }, l
}

const {passive: Qa} = ut;
var H_ = ve({
    name: "QParallax",
    props: {
        src: String,
        height: {type: Number, default: 500},
        speed: {type: Number, default: 1, validator: e => e >= 0 && e <= 1},
        scrollTarget: {default: void 0},
        onScroll: Function
    },
    setup(e, {slots: t, emit: n}) {
        const o = D(0), l = D(null), a = D(null), i = D(null);
        let r, s, d, c, p, v;
        pe(() => e.height, () => {
            r === !0 && g()
        }), pe(() => e.scrollTarget, () => {
            r === !0 && (y(), S())
        });
        let m = b => {
            o.value = b, e.onScroll !== void 0 && n("scroll", b)
        };

        function g() {
            let b, h, C;
            v === window ? (b = 0, C = h = window.innerHeight) : (b = yi(v).top, h = yl(v), C = b + h);
            const A = yi(l.value).top, L = A + e.height;
            if (p !== void 0 || L > b && A < C) {
                const E = (C - A) / (e.height + h);
                x((d - e.height) * E * e.speed), m(E)
            }
        }

        let x = b => {
            s.style.transform = `translate3d(-50%,${Math.round(b)}px,0)`
        };

        function w() {
            d = s.naturalHeight || s.videoHeight || yl(s), r === !0 && g()
        }

        function S() {
            r = !0, v = An(l.value, e.scrollTarget), v.addEventListener("scroll", g, Qa), window.addEventListener("resize", c, Qa), g()
        }

        function y() {
            r === !0 && (r = !1, v.removeEventListener("scroll", g, Qa), window.removeEventListener("resize", c, Qa), v = void 0, x.cancel(), m.cancel(), c.cancel())
        }

        return mt(() => {
            x = zr(x), m = zr(m), c = zr(w), s = t.media !== void 0 ? a.value.children[0] : i.value, s.onload = s.onloadstart = s.loadedmetadata = w, w(), s.style.display = "initial", window.IntersectionObserver !== void 0 ? (p = new IntersectionObserver(b => {
                (b[0].isIntersecting === !0 ? S : y)()
            }), p.observe(l.value)) : S()
        }), Ke(() => {
            y(), p !== void 0 && p.disconnect(), s.onload = s.onloadstart = s.loadedmetadata = null
        }), () => u("div", {ref: l, class: "q-parallax", style: {height: `${e.height}px`}}, [u("div", {
            ref: a,
            class: "q-parallax__media absolute-full"
        }, t.media !== void 0 ? t.media() : [u("img", {
            ref: i,
            src: e.src
        })]), u("div", {class: "q-parallax__content absolute-full column flex-center"}, t.content !== void 0 ? t.content({percentScrolled: o.value}) : Ae(t.default))])
    }
});

function ta(e, t = new WeakMap) {
    if (Object(e) !== e) return e;
    if (t.has(e)) return t.get(e);
    const n = e instanceof Date ? new Date(e) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Set ? new Set : e instanceof Map ? new Map : typeof e.constructor != "function" ? Object.create(null) : e.prototype !== void 0 && typeof e.prototype.constructor == "function" ? e : new e.constructor;
    if (typeof e.constructor == "function" && typeof e.valueOf == "function") {
        const o = e.valueOf();
        if (Object(o) !== o) {
            const l = new e.constructor(o);
            return t.set(e, l), l
        }
    }
    return t.set(e, n), e instanceof Set ? e.forEach(o => {
        n.add(ta(o, t))
    }) : e instanceof Map && e.forEach((o, l) => {
        n.set(l, ta(o, t))
    }), Object.assign(n, ...Object.keys(e).map(o => ({[o]: ta(e[o], t)})))
}

var j_ = ve({
    name: "QPopupEdit",
    props: {
        modelValue: {required: !0},
        title: String,
        buttons: Boolean,
        labelSet: String,
        labelCancel: String,
        color: {type: String, default: "primary"},
        validate: {type: Function, default: () => !0},
        autoSave: Boolean,
        cover: {type: Boolean, default: !0},
        disable: Boolean
    },
    emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: o} = Se(), {$q: l} = o, a = D(null), i = D(""), r = D("");
        let s = !1;
        const d = f(() => At({
            initialValue: i.value,
            validate: e.validate,
            set: c,
            cancel: p,
            updatePosition: v
        }, "value", () => r.value, h => {
            r.value = h
        }));

        function c() {
            e.validate(r.value) !== !1 && (m() === !0 && (n("save", r.value, i.value), n("update:modelValue", r.value)), g())
        }

        function p() {
            m() === !0 && n("cancel", r.value, i.value), g()
        }

        function v() {
            We(() => {
                a.value.updatePosition()
            })
        }

        function m() {
            return yn(r.value, i.value) === !1
        }

        function g() {
            s = !0, a.value.hide()
        }

        function x() {
            s = !1, i.value = ta(e.modelValue), r.value = ta(e.modelValue), n("beforeShow")
        }

        function w() {
            n("show")
        }

        function S() {
            s === !1 && m() === !0 && (e.autoSave === !0 && e.validate(r.value) === !0 ? (n("save", r.value, i.value), n("update:modelValue", r.value)) : n("cancel", r.value, i.value)), n("beforeHide")
        }

        function y() {
            n("hide")
        }

        function b() {
            const h = t.default !== void 0 ? [].concat(t.default(d.value)) : [];
            return e.title && h.unshift(u("div", {class: "q-dialog__title q-mt-sm q-mb-sm"}, e.title)), e.buttons === !0 && h.push(u("div", {class: "q-popup-edit__buttons row justify-center no-wrap"}, [u(tt, {
                flat: !0,
                color: e.color,
                label: e.labelCancel || l.lang.label.cancel,
                onClick: p
            }), u(tt, {flat: !0, color: e.color, label: e.labelSet || l.lang.label.set, onClick: c})])), h
        }

        return Object.assign(o, {
            set: c, cancel: p, show(h) {
                a.value !== null && a.value.show(h)
            }, hide(h) {
                a.value !== null && a.value.hide(h)
            }, updatePosition: v
        }), () => {
            if (e.disable !== !0) return u(wa, {
                ref: a,
                class: "q-popup-edit",
                cover: e.cover,
                onBeforeShow: x,
                onShow: w,
                onBeforeHide: S,
                onHide: y,
                onEscapeKey: p
            }, b)
        }
    }
}), Q_ = ve({
    name: "QPopupProxy",
    props: {...ou, breakpoint: {type: [String, Number], default: 450}},
    emits: ["show", "hide"],
    setup(e, {slots: t, emit: n, attrs: o}) {
        const {proxy: l} = Se(), {$q: a} = l, i = D(!1), r = D(null),
            s = f(() => parseInt(e.breakpoint, 10)), {canShow: d} = lu({showing: i});

        function c() {
            return a.screen.width < s.value || a.screen.height < s.value ? "dialog" : "menu"
        }

        const p = D(c()), v = f(() => p.value === "menu" ? {maxHeight: "99vh"} : {});

        function m(x) {
            i.value = !0, n("show", x)
        }

        function g(x) {
            i.value = !1, p.value = c(), n("hide", x)
        }

        return pe(() => c(), x => {
            i.value !== !0 && (p.value = x)
        }), Object.assign(l, {
            show(x) {
                d(x) === !0 && r.value.show(x)
            }, hide(x) {
                r.value.hide(x)
            }, toggle(x) {
                r.value.toggle(x)
            }
        }), At(l, "currentComponent", () => ({type: p.value, ref: r.value})), () => {
            const x = {ref: r, ...v.value, ...o, onShow: m, onHide: g};
            let w;
            return p.value === "dialog" ? w = Ca : (w = wa, Object.assign(x, {
                target: e.target,
                contextMenu: e.contextMenu,
                noParentEvent: !0,
                separateClosePopup: !0
            })), u(w, x, t.default)
        }
    }
});
const K_ = {xs: 2, sm: 4, md: 6, lg: 10, xl: 14};

function Od(e, t, n) {
    return {transform: t === !0 ? `translateX(${n.lang.rtl === !0 ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)`}
}

var v0 = ve({
    name: "QLinearProgress",
    props: {
        ...Ge, ...Qn,
        value: {type: Number, default: 0},
        buffer: Number,
        color: String,
        trackColor: String,
        reverse: Boolean,
        stripe: Boolean,
        indeterminate: Boolean,
        query: Boolean,
        rounded: Boolean,
        animationSpeed: {type: [String, Number], default: 2100},
        instantFeedback: Boolean
    },
    setup(e, {slots: t}) {
        const {proxy: n} = Se(), o = Je(e, n.$q), l = Kn(e, K_), a = f(() => e.indeterminate === !0 || e.query === !0),
            i = f(() => e.reverse !== e.query),
            r = f(() => ({...l.value !== null ? l.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms`})),
            s = f(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === !0 || e.query === !0 ? " q-linear-progress--reverse" : "") + (e.rounded === !0 ? " rounded-borders" : "")),
            d = f(() => Od(e.buffer !== void 0 ? e.buffer : 1, i.value, n.$q)),
            c = f(() => `with${e.instantFeedback === !0 ? "out" : ""}-transition`),
            p = f(() => `q-linear-progress__track absolute-full q-linear-progress__track--${c.value} q-linear-progress__track--${o.value === !0 ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")),
            v = f(() => Od(a.value === !0 ? 1 : e.value, i.value, n.$q)),
            m = f(() => `q-linear-progress__model absolute-full q-linear-progress__model--${c.value} q-linear-progress__model--${a.value === !0 ? "in" : ""}determinate`),
            g = f(() => ({width: `${100 * e.value}%`})),
            x = f(() => `q-linear-progress__stripe absolute-${e.reverse === !0 ? "right" : "left"} q-linear-progress__stripe--${c.value}`);
        return () => {
            const w = [u("div", {class: p.value, style: d.value}), u("div", {class: m.value, style: v.value})];
            return e.stripe === !0 && a.value === !1 && w.push(u("div", {
                class: x.value,
                style: g.value
            })), u("div", {
                class: s.value,
                style: r.value,
                role: "progressbar",
                "aria-valuemin": 0,
                "aria-valuemax": 1,
                "aria-valuenow": e.indeterminate === !0 ? void 0 : e.value
            }, St(t.default, w))
        }
    }
});
const Wo = 40, Nr = 20;
var U_ = ve({
    name: "QPullToRefresh",
    props: {
        color: String,
        bgColor: String,
        icon: String,
        noMouse: Boolean,
        disable: Boolean,
        scrollTarget: {default: void 0}
    },
    emits: ["refresh"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: o} = Se(), {$q: l} = o, a = D("pull"), i = D(0), r = D(!1), s = D(-Wo), d = D(!1), c = D({}),
            p = f(() => ({opacity: i.value, transform: `translateY(${s.value}px) rotate(${360 * i.value}deg)`})),
            v = f(() => "q-pull-to-refresh__puller row flex-center" + (d.value === !0 ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));

        function m(A) {
            if (A.isFinal === !0) return void (r.value === !0 && (r.value = !1, a.value === "pulled" ? (a.value = "refreshing", h({pos: Nr}), w()) : a.value === "pull" && h({
                pos: -Wo,
                ratio: 0
            })));
            if (d.value === !0 || a.value === "refreshing") return !1;
            if (A.isFirst === !0) {
                if (so(y) !== 0 || A.direction !== "down") return r.value === !0 && (r.value = !1, a.value = "pull", h({
                    pos: -Wo,
                    ratio: 0
                })), !1;
                r.value = !0;
                const {top: V, left: O} = S.getBoundingClientRect();
                c.value = {top: V + "px", left: O + "px", width: window.getComputedStyle(S).getPropertyValue("width")}
            }
            Bt(A.evt);
            const L = Math.min(140, Math.max(0, A.distance.y));
            s.value = L - Wo, i.value = ct(L / (Nr + Wo), 0, 1);
            const E = s.value > Nr ? "pulled" : "pull";
            a.value !== E && (a.value = E)
        }

        const g = f(() => {
            const A = {down: !0};
            return e.noMouse !== !0 && (A.mouse = !0), [[Jt, m, void 0, A]]
        }), x = f(() => `q-pull-to-refresh__content${r.value === !0 ? " no-pointer-events" : ""}`);

        function w() {
            n("refresh", () => {
                h({pos: -Wo, ratio: 0}, () => {
                    a.value = "pull"
                })
            })
        }

        let S, y, b = null;

        function h({pos: A, ratio: L}, E) {
            d.value = !0, s.value = A, L !== void 0 && (i.value = L), b !== null && clearTimeout(b), b = setTimeout(() => {
                b = null, d.value = !1, E && E()
            }, 300)
        }

        function C() {
            y = An(S, e.scrollTarget)
        }

        return pe(() => e.scrollTarget, C), mt(() => {
            S = o.$el, C()
        }), Ke(() => {
            b !== null && clearTimeout(b)
        }), Object.assign(o, {trigger: w, updateScrollTarget: C}), () => {
            const A = [u("div", {class: x.value}, Ae(t.default)), u("div", {
                class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top",
                style: c.value
            }, [u("div", {
                class: v.value,
                style: p.value
            }, [a.value !== "refreshing" ? u(Ze, {
                name: e.icon || l.iconSet.pullToRefresh.icon,
                color: e.color,
                size: "32px"
            }) : u(tn, {size: "24px", color: e.color})])])];
            return fn("div", {class: "q-pull-to-refresh"}, A, "main", e.disable === !1, () => g.value)
        }
    }
});
const Zn = {MIN: 0, RANGE: 1, MAX: 2};
var W_ = ve({
    name: "QRange",
    props: {
        ...gp,
        modelValue: {type: Object, default: () => ({min: null, max: null}), validator: e => "min" in e && "max" in e},
        dragRange: Boolean,
        dragOnlyRange: Boolean,
        leftLabelColor: String,
        leftLabelTextColor: String,
        rightLabelColor: String,
        rightLabelTextColor: String,
        leftLabelValue: [String, Number],
        rightLabelValue: [String, Number],
        leftThumbColor: String,
        rightThumbColor: String
    },
    emits: bp,
    setup(e, {emit: t}) {
        const {proxy: {$q: n}} = Se(), {state: o, methods: l} = yp({
            updateValue: E,
            updatePosition: O,
            getDragging: V,
            formAttrs: f(() => ({type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}`}))
        }), a = D(null), i = D(0), r = D(0), s = D({min: 0, max: 0});

        function d() {
            s.value.min = e.modelValue.min === null ? o.innerMin.value : ct(e.modelValue.min, o.innerMin.value, o.innerMax.value), s.value.max = e.modelValue.max === null ? o.innerMax.value : ct(e.modelValue.max, o.innerMin.value, o.innerMax.value)
        }

        pe(() => `${e.modelValue.min}|${e.modelValue.max}|${o.innerMin.value}|${o.innerMax.value}`, d), d();
        const c = f(() => l.convertModelToRatio(s.value.min)), p = f(() => l.convertModelToRatio(s.value.max)),
            v = f(() => o.active.value === !0 ? i.value : c.value),
            m = f(() => o.active.value === !0 ? r.value : p.value), g = f(() => {
                const M = {
                    [o.positionProp.value]: `${100 * v.value}%`,
                    [o.sizeProp.value]: `${100 * (m.value - v.value)}%`
                };
                return e.selectionImg !== void 0 && (M.backgroundImage = `url(${e.selectionImg}) !important`), M
            }), x = f(() => {
                if (o.editable.value !== !0) return {};
                if (n.platform.is.mobile === !0) return {onClick: l.onMobileClick};
                const M = {onMousedown: l.onActivate};
                return e.dragRange !== !0 && e.dragOnlyRange !== !0 || Object.assign(M, {
                    onFocus: () => {
                        o.focus.value = "both"
                    }, onBlur: l.onBlur, onKeydown: z, onKeyup: l.onKeyup
                }), M
            });

        function w(M) {
            return n.platform.is.mobile !== !0 && o.editable.value === !0 && e.dragOnlyRange !== !0 ? {
                onFocus: () => {
                    o.focus.value = M
                }, onBlur: l.onBlur, onKeydown: z, onKeyup: l.onKeyup
            } : {}
        }

        const S = f(() => e.dragOnlyRange !== !0 ? o.tabindex.value : null),
            y = f(() => n.platform.is.mobile === !0 || !e.dragRange && e.dragOnlyRange !== !0 ? null : o.tabindex.value),
            b = D(null), h = f(() => w("min")), C = l.getThumbRenderFn({
                focusValue: "min",
                getNodeData: () => ({ref: b, key: "tmin", ...h.value, tabindex: S.value}),
                ratio: v,
                label: f(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : s.value.min),
                thumbColor: f(() => e.leftThumbColor || e.thumbColor || e.color),
                labelColor: f(() => e.leftLabelColor || e.labelColor),
                labelTextColor: f(() => e.leftLabelTextColor || e.labelTextColor)
            }), A = f(() => w("max")), L = l.getThumbRenderFn({
                focusValue: "max",
                getNodeData: () => ({...A.value, key: "tmax", tabindex: S.value}),
                ratio: m,
                label: f(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : s.value.max),
                thumbColor: f(() => e.rightThumbColor || e.thumbColor || e.color),
                labelColor: f(() => e.rightLabelColor || e.labelColor),
                labelTextColor: f(() => e.rightLabelTextColor || e.labelTextColor)
            });

        function E(M) {
            s.value.min === e.modelValue.min && s.value.max === e.modelValue.max || t("update:modelValue", {...s.value}), M === !0 && t("change", {...s.value})
        }

        function V(M) {
            const {left: k, top: B, width: Y, height: J} = a.value.getBoundingClientRect(),
                $ = e.dragOnlyRange === !0 ? 0 : e.vertical === !0 ? b.value.offsetHeight / (2 * J) : b.value.offsetWidth / (2 * Y),
                Q = {
                    left: k,
                    top: B,
                    width: Y,
                    height: J,
                    valueMin: s.value.min,
                    valueMax: s.value.max,
                    ratioMin: c.value,
                    ratioMax: p.value
                }, ae = l.getDraggingRatio(M, Q);
            return e.dragOnlyRange !== !0 && ae < Q.ratioMin + $ ? Q.type = Zn.MIN : e.dragOnlyRange === !0 || ae < Q.ratioMax - $ ? e.dragRange === !0 || e.dragOnlyRange === !0 ? (Q.type = Zn.RANGE, Object.assign(Q, {
                offsetRatio: ae,
                offsetModel: l.convertRatioToModel(ae),
                rangeValue: Q.valueMax - Q.valueMin,
                rangeRatio: Q.ratioMax - Q.ratioMin
            })) : Q.type = Q.ratioMax - ae < ae - Q.ratioMin ? Zn.MAX : Zn.MIN : Q.type = Zn.MAX, Q
        }

        function O(M, k = o.dragging.value) {
            let B;
            const Y = l.getDraggingRatio(M, k), J = l.convertRatioToModel(Y);
            switch (k.type) {
                case Zn.MIN:
                    Y <= k.ratioMax ? (B = {
                        minR: Y,
                        maxR: k.ratioMax,
                        min: J,
                        max: k.valueMax
                    }, o.focus.value = "min") : (B = {
                        minR: k.ratioMax,
                        maxR: Y,
                        min: k.valueMax,
                        max: J
                    }, o.focus.value = "max");
                    break;
                case Zn.MAX:
                    Y >= k.ratioMin ? (B = {
                        minR: k.ratioMin,
                        maxR: Y,
                        min: k.valueMin,
                        max: J
                    }, o.focus.value = "max") : (B = {
                        minR: Y,
                        maxR: k.ratioMin,
                        min: J,
                        max: k.valueMin
                    }, o.focus.value = "min");
                    break;
                case Zn.RANGE:
                    const $ = Y - k.offsetRatio, Q = ct(k.ratioMin + $, 0, 1 - k.rangeRatio), ae = J - k.offsetModel,
                        be = ct(k.valueMin + ae, e.min, e.max - k.rangeValue);
                    B = {
                        minR: Q,
                        maxR: Q + k.rangeRatio,
                        min: parseFloat(be.toFixed(o.decimals.value)),
                        max: parseFloat((be + k.rangeValue).toFixed(o.decimals.value))
                    }, o.focus.value = "both";
                    break
            }
            s.value = s.value.min === null || s.value.max === null ? {
                min: B.min || e.min,
                max: B.max || e.max
            } : {
                min: B.min,
                max: B.max
            }, e.snap !== !0 || e.step === 0 ? (i.value = B.minR, r.value = B.maxR) : (i.value = l.convertModelToRatio(s.value.min), r.value = l.convertModelToRatio(s.value.max))
        }

        function z(M) {
            if (!wu.includes(M.keyCode)) return;
            Ie(M);
            const k = ([34, 33].includes(M.keyCode) ? 10 : 1) * o.step.value,
                B = ([34, 37, 40].includes(M.keyCode) ? -1 : 1) * (o.isReversed.value === !0 ? -1 : 1) * (e.vertical === !0 ? -1 : 1) * k;
            if (o.focus.value === "both") {
                const Y = s.value.max - s.value.min,
                    J = ct(parseFloat((s.value.min + B).toFixed(o.decimals.value)), o.innerMin.value, o.innerMax.value - Y);
                s.value = {min: J, max: parseFloat((J + Y).toFixed(o.decimals.value))}
            } else {
                if (o.focus.value === !1) return;
                {
                    const Y = o.focus.value;
                    s.value = {
                        ...s.value,
                        [Y]: ct(parseFloat((s.value[Y] + B).toFixed(o.decimals.value)), Y === "min" ? o.innerMin.value : s.value.min, Y === "max" ? o.innerMax.value : s.value.max)
                    }
                }
            }
            E()
        }

        return () => {
            const M = l.getContent(g, y, x, k => {
                k.push(C(), L())
            });
            return u("div", {
                ref: a,
                class: "q-range " + o.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...o.attributes.value,
                "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max
            }, M)
        }
    }
}), Y_ = ve({
    name: "QRating",
    props: {
        ...Qn, ...vn,
        modelValue: {type: Number, required: !0},
        max: {type: [String, Number], default: 5},
        icon: [String, Array],
        iconHalf: [String, Array],
        iconSelected: [String, Array],
        iconAriaLabel: [String, Array],
        color: [String, Array],
        colorHalf: [String, Array],
        colorSelected: [String, Array],
        noReset: Boolean,
        noDimming: Boolean,
        readonly: Boolean,
        disable: Boolean
    },
    emits: ["update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: o}} = Se(), l = Kn(e), a = xa(e), i = po(a), r = D(0);
        let s = {};
        const d = f(() => e.readonly !== !0 && e.disable !== !0),
            c = f(() => `q-rating row inline items-center q-rating--${d.value === !0 ? "" : "non-"}editable` + (e.noDimming === !0 ? " q-rating--no-dimming" : "") + (e.disable === !0 ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === !1 ? ` text-${e.color}` : "")),
            p = f(() => {
                const b = Array.isArray(e.icon) === !0 ? e.icon.length : 0,
                    h = Array.isArray(e.iconSelected) === !0 ? e.iconSelected.length : 0,
                    C = Array.isArray(e.iconHalf) === !0 ? e.iconHalf.length : 0,
                    A = Array.isArray(e.color) === !0 ? e.color.length : 0,
                    L = Array.isArray(e.colorSelected) === !0 ? e.colorSelected.length : 0,
                    E = Array.isArray(e.colorHalf) === !0 ? e.colorHalf.length : 0;
                return {
                    iconLen: b,
                    icon: b > 0 ? e.icon[b - 1] : e.icon,
                    selIconLen: h,
                    selIcon: h > 0 ? e.iconSelected[h - 1] : e.iconSelected,
                    halfIconLen: C,
                    halfIcon: C > 0 ? e.iconHalf[h - 1] : e.iconHalf,
                    colorLen: A,
                    color: A > 0 ? e.color[A - 1] : e.color,
                    selColorLen: L,
                    selColor: L > 0 ? e.colorSelected[L - 1] : e.colorSelected,
                    halfColorLen: E,
                    halfColor: E > 0 ? e.colorHalf[E - 1] : e.colorHalf
                }
            }), v = f(() => {
                if (typeof e.iconAriaLabel == "string") {
                    const b = e.iconAriaLabel.length !== 0 ? `${e.iconAriaLabel} ` : "";
                    return h => `${b}${h}`
                }
                if (Array.isArray(e.iconAriaLabel) === !0) {
                    const b = e.iconAriaLabel.length;
                    if (b > 0) return h => e.iconAriaLabel[Math.min(h, b) - 1]
                }
                return (b, h) => `${h} ${b}`
            }), m = f(() => {
                const b = [], h = p.value, C = Math.ceil(e.modelValue), A = d.value === !0 ? 0 : null,
                    L = e.iconHalf === void 0 || C === e.modelValue ? -1 : C;
                for (let E = 1; E <= e.max; E++) {
                    const V = r.value === 0 && e.modelValue >= E || r.value > 0 && r.value >= E, O = L === E && r.value < E,
                        z = r.value > 0 && (O === !0 ? C : e.modelValue) >= E && r.value < E,
                        M = O === !0 ? E <= h.halfColorLen ? e.colorHalf[E - 1] : h.halfColor : h.selColor !== void 0 && V === !0 ? E <= h.selColorLen ? e.colorSelected[E - 1] : h.selColor : E <= h.colorLen ? e.color[E - 1] : h.color,
                        k = (O === !0 ? E <= h.halfIconLen ? e.iconHalf[E - 1] : h.halfIcon : h.selIcon === void 0 || V !== !0 && z !== !0 ? E <= h.iconLen ? e.icon[E - 1] : h.icon : E <= h.selIconLen ? e.iconSelected[E - 1] : h.selIcon) || o.iconSet.rating.icon;
                    b.push({
                        name: (O === !0 ? E <= h.halfIconLen ? e.iconHalf[E - 1] : h.halfIcon : h.selIcon === void 0 || V !== !0 && z !== !0 ? E <= h.iconLen ? e.icon[E - 1] : h.icon : E <= h.selIconLen ? e.iconSelected[E - 1] : h.selIcon) || o.iconSet.rating.icon,
                        attrs: {
                            tabindex: A,
                            role: "radio",
                            "aria-checked": e.modelValue === E ? "true" : "false",
                            "aria-label": v.value(E, k)
                        },
                        iconClass: "q-rating__icon" + (V === !0 || O === !0 ? " q-rating__icon--active" : "") + (z === !0 ? " q-rating__icon--exselected" : "") + (r.value === E ? " q-rating__icon--hovered" : "") + (M !== void 0 ? ` text-${M}` : "")
                    })
                }
                return b
            }), g = f(() => {
                const b = {role: "radiogroup"};
                return e.disable === !0 && (b["aria-disabled"] = "true"), e.readonly === !0 && (b["aria-readonly"] = "true"), b
            });

        function x(b) {
            if (d.value === !0) {
                const h = ct(parseInt(b, 10), 1, parseInt(e.max, 10)),
                    C = e.noReset !== !0 && e.modelValue === h ? 0 : h;
                C !== e.modelValue && n("update:modelValue", C), r.value = 0
            }
        }

        function w(b) {
            d.value === !0 && (r.value = b)
        }

        function S(b, h) {
            switch (b.keyCode) {
                case 13:
                case 32:
                    return x(h), Ie(b);
                case 37:
                case 40:
                    return s[`rt${h - 1}`] && s[`rt${h - 1}`].focus(), Ie(b);
                case 39:
                case 38:
                    return s[`rt${h + 1}`] && s[`rt${h + 1}`].focus(), Ie(b)
            }
        }

        function y() {
            r.value = 0
        }

        return kl(() => {
            s = {}
        }), () => {
            const b = [];
            return m.value.forEach(({iconClass: h, name: C, attrs: A}, L) => {
                const E = L + 1;
                b.push(u("div", {
                    key: E, ref: V => {
                        s[`rt${E}`] = V
                    }, class: "q-rating__icon-container flex flex-center", ...A, onClick() {
                        x(E)
                    }, onMouseover() {
                        w(E)
                    }, onMouseout: y, onFocus() {
                        w(E)
                    }, onBlur: y, onKeyup(V) {
                        S(V, E)
                    }
                }, St(t[`tip-${E}`], [u(Ze, {class: h, name: C})])))
            }), e.name !== void 0 && e.disable !== !0 && i(b, "push"), u("div", {
                class: c.value,
                style: l.value, ...g.value
            }, b)
        }
    }
}), X_ = ve({
    name: "QResponsive", props: Cu, setup(e, {slots: t}) {
        const n = ku(e);
        return () => u("div", {class: "q-responsive"}, [u("div", {class: "q-responsive__filler overflow-hidden"}, [u("div", {style: n.value})]), u("div", {class: "q-responsive__content absolute-full fit"}, Ae(t.default))])
    }
});
const Ld = ["vertical", "horizontal"], Ir = {
    vertical: {offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y"},
    horizontal: {offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x"}
}, Rd = {prevent: !0, mouse: !0, mouseAllDir: !0}, Vd = e => e >= 250 ? 50 : Math.ceil(e / 5);
var Z_ = ve({
    name: "QScrollArea",
    props: {
        ...Ge,
        thumbStyle: Object,
        verticalThumbStyle: Object,
        horizontalThumbStyle: Object,
        barStyle: [Array, String, Object],
        verticalBarStyle: [Array, String, Object],
        horizontalBarStyle: [Array, String, Object],
        contentStyle: [Array, String, Object],
        contentActiveStyle: [Array, String, Object],
        delay: {type: [String, Number], default: 1e3},
        visible: {type: Boolean, default: null},
        tabindex: [String, Number],
        onScroll: Function
    },
    setup(e, {slots: t, emit: n}) {
        const o = D(!1), l = D(!1), a = D(!1), i = {vertical: D(0), horizontal: D(0)}, r = {
            vertical: {ref: D(null), position: D(0), size: D(0)},
            horizontal: {ref: D(null), position: D(0), size: D(0)}
        }, {proxy: s} = Se(), d = Je(e, s.$q);
        let c, p = null;
        const v = D(null), m = f(() => "q-scrollarea" + (d.value === !0 ? " q-scrollarea--dark" : ""));
        r.vertical.percentage = f(() => {
            const $ = r.vertical.size.value - i.vertical.value;
            if ($ <= 0) return 0;
            const Q = ct(r.vertical.position.value / $, 0, 1);
            return Math.round(1e4 * Q) / 1e4
        }), r.vertical.thumbHidden = f(() => (e.visible === null ? a.value : e.visible) !== !0 && o.value === !1 && l.value === !1 || r.vertical.size.value <= i.vertical.value + 1), r.vertical.thumbStart = f(() => r.vertical.percentage.value * (i.vertical.value - r.vertical.thumbSize.value)), r.vertical.thumbSize = f(() => Math.round(ct(i.vertical.value * i.vertical.value / r.vertical.size.value, Vd(i.vertical.value), i.vertical.value))), r.vertical.style = f(() => ({
            ...e.thumbStyle, ...e.verticalThumbStyle,
            top: `${r.vertical.thumbStart.value}px`,
            height: `${r.vertical.thumbSize.value}px`
        })), r.vertical.thumbClass = f(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (r.vertical.thumbHidden.value === !0 ? " q-scrollarea__thumb--invisible" : "")), r.vertical.barClass = f(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (r.vertical.thumbHidden.value === !0 ? " q-scrollarea__bar--invisible" : "")), r.horizontal.percentage = f(() => {
            const $ = r.horizontal.size.value - i.horizontal.value;
            if ($ <= 0) return 0;
            const Q = ct(Math.abs(r.horizontal.position.value) / $, 0, 1);
            return Math.round(1e4 * Q) / 1e4
        }), r.horizontal.thumbHidden = f(() => (e.visible === null ? a.value : e.visible) !== !0 && o.value === !1 && l.value === !1 || r.horizontal.size.value <= i.horizontal.value + 1), r.horizontal.thumbStart = f(() => r.horizontal.percentage.value * (i.horizontal.value - r.horizontal.thumbSize.value)), r.horizontal.thumbSize = f(() => Math.round(ct(i.horizontal.value * i.horizontal.value / r.horizontal.size.value, Vd(i.horizontal.value), i.horizontal.value))), r.horizontal.style = f(() => ({
            ...e.thumbStyle, ...e.horizontalThumbStyle,
            [s.$q.lang.rtl === !0 ? "right" : "left"]: `${r.horizontal.thumbStart.value}px`,
            width: `${r.horizontal.thumbSize.value}px`
        })), r.horizontal.thumbClass = f(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (r.horizontal.thumbHidden.value === !0 ? " q-scrollarea__thumb--invisible" : "")), r.horizontal.barClass = f(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (r.horizontal.thumbHidden.value === !0 ? " q-scrollarea__bar--invisible" : ""));
        const g = f(() => r.vertical.thumbHidden.value === !0 && r.horizontal.thumbHidden.value === !0 ? e.contentStyle : e.contentActiveStyle),
            x = [[Jt, $ => {
                L($, "vertical")
            }, void 0, {vertical: !0, ...Rd}]], w = [[Jt, $ => {
                L($, "horizontal")
            }, void 0, {horizontal: !0, ...Rd}]];

        function S() {
            const $ = {};
            return Ld.forEach(Q => {
                const ae = r[Q];
                $[Q + "Position"] = ae.position.value, $[Q + "Percentage"] = ae.percentage.value, $[Q + "Size"] = ae.size.value, $[Q + "ContainerSize"] = i[Q].value
            }), $
        }

        const y = Tl(() => {
            const $ = S();
            $.ref = s, n("scroll", $)
        }, 0);

        function b($, Q, ae) {
            if (Ld.includes($) === !1) return void console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
            ($ === "vertical" ? cl : qr)(v.value, Q, ae)
        }

        function h({height: $, width: Q}) {
            let ae = !1;
            i.vertical.value !== $ && (i.vertical.value = $, ae = !0), i.horizontal.value !== Q && (i.horizontal.value = Q, ae = !0), ae === !0 && z()
        }

        function C({position: $}) {
            let Q = !1;
            r.vertical.position.value !== $.top && (r.vertical.position.value = $.top, Q = !0), r.horizontal.position.value !== $.left && (r.horizontal.position.value = $.left, Q = !0), Q === !0 && z()
        }

        function A({height: $, width: Q}) {
            r.horizontal.size.value !== Q && (r.horizontal.size.value = Q, z()), r.vertical.size.value !== $ && (r.vertical.size.value = $, z())
        }

        function L($, Q) {
            const ae = r[Q];
            if ($.isFirst === !0) {
                if (ae.thumbHidden.value === !0) return;
                c = ae.position.value, l.value = !0
            } else if (l.value !== !0) return;
            $.isFinal === !0 && (l.value = !1);
            const be = Ir[Q], K = i[Q].value, T = (ae.size.value - K) / (K - ae.thumbSize.value),
                ee = $.distance[be.dist], Z = c + ($.direction === be.dir ? 1 : -1) * ee * T;
            M(Z, Q)
        }

        function E($, Q) {
            const ae = r[Q];
            if (ae.thumbHidden.value !== !0) {
                const be = $[Ir[Q].offset];
                if (be < ae.thumbStart.value || be > ae.thumbStart.value + ae.thumbSize.value) {
                    const K = be - ae.thumbSize.value / 2;
                    M(K / i[Q].value * ae.size.value, Q)
                }
                ae.ref.value !== null && ae.ref.value.dispatchEvent(new MouseEvent($.type, $))
            }
        }

        function V($) {
            E($, "vertical")
        }

        function O($) {
            E($, "horizontal")
        }

        function z() {
            o.value = !0, p !== null && clearTimeout(p), p = setTimeout(() => {
                p = null, o.value = !1
            }, e.delay), e.onScroll !== void 0 && y()
        }

        function M($, Q) {
            v.value[Ir[Q].scroll] = $
        }

        let k = null;

        function B() {
            k !== null && clearTimeout(k), k = setTimeout(() => {
                k = null, a.value = !0
            }, s.$q.platform.is.ios ? 50 : 0)
        }

        function Y() {
            k !== null && (clearTimeout(k), k = null), a.value = !1
        }

        let J = null;
        return pe(() => s.$q.lang.rtl, $ => {
            v.value !== null && qr(v.value, Math.abs(r.horizontal.position.value) * ($ === !0 ? -1 : 1))
        }), kn(() => {
            J = {top: r.vertical.position.value, left: r.horizontal.position.value}
        }), Hn(() => {
            if (J === null) return;
            const $ = v.value;
            $ !== null && (qr($, J.left), cl($, J.top))
        }), Ke(y.cancel), Object.assign(s, {
            getScrollTarget: () => v.value,
            getScroll: S,
            getScrollPosition: () => ({top: r.vertical.position.value, left: r.horizontal.position.value}),
            getScrollPercentage: () => ({top: r.vertical.percentage.value, left: r.horizontal.percentage.value}),
            setScrollPosition: b,
            setScrollPercentage($, Q, ae) {
                b($, Q * (r[$].size.value - i[$].value) * ($ === "horizontal" && s.$q.lang.rtl === !0 ? -1 : 1), ae)
            }
        }), () => u("div", {class: m.value, onMouseenter: B, onMouseleave: Y}, [u("div", {
            ref: v,
            class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
            tabindex: e.tabindex !== void 0 ? e.tabindex : void 0
        }, [u("div", {class: "q-scrollarea__content absolute", style: g.value}, St(t.default, [u(co, {
            debounce: 0,
            onResize: A
        })])), u(Tu, {axis: "both", onScroll: C})]), u(co, {
            debounce: 0,
            onResize: h
        }), u("div", {
            class: r.vertical.barClass.value,
            style: [e.barStyle, e.verticalBarStyle],
            "aria-hidden": "true",
            onMousedown: V
        }), u("div", {
            class: r.horizontal.barClass.value,
            style: [e.barStyle, e.horizontalBarStyle],
            "aria-hidden": "true",
            onMousedown: O
        }), Sn(u("div", {
            ref: r.vertical.ref,
            class: r.vertical.thumbClass.value,
            style: r.vertical.style.value,
            "aria-hidden": "true"
        }), x), Sn(u("div", {
            ref: r.horizontal.ref,
            class: r.horizontal.thumbClass.value,
            style: r.horizontal.style.value,
            "aria-hidden": "true"
        }), w)])
    }
});
const gn = 1e3, G_ = ["start", "center", "end", "start-force", "center-force", "end-force"],
    p0 = Array.prototype.filter,
    J_ = window.getComputedStyle(document.body).overflowAnchor === void 0 ? xt : function (e, t) {
        e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
            if (e === null) return;
            e._qOverflowAnimationFrame = void 0;
            const n = e.children || [];
            p0.call(n, l => l.dataset && l.dataset.qVsAnchor !== void 0).forEach(l => {
                delete l.dataset.qVsAnchor
            });
            const o = n[t];
            o && o.dataset && (o.dataset.qVsAnchor = "")
        }))
    };

function fl(e, t) {
    return e + t
}

function Dr(e, t, n, o, l, a, i, r) {
    const s = e === window ? document.scrollingElement || document.documentElement : e,
        d = l === !0 ? "offsetWidth" : "offsetHeight",
        c = {scrollStart: 0, scrollViewSize: -i - r, scrollMaxSize: 0, offsetStart: -i, offsetEnd: -r};
    if (l === !0 ? (e === window ? (c.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, c.scrollViewSize += document.documentElement.clientWidth) : (c.scrollStart = s.scrollLeft, c.scrollViewSize += s.clientWidth), c.scrollMaxSize = s.scrollWidth, a === !0 && (c.scrollStart = (va === !0 ? c.scrollMaxSize - c.scrollViewSize : 0) - c.scrollStart)) : (e === window ? (c.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, c.scrollViewSize += document.documentElement.clientHeight) : (c.scrollStart = s.scrollTop, c.scrollViewSize += s.clientHeight), c.scrollMaxSize = s.scrollHeight), n !== null) for (let p = n.previousElementSibling; p !== null; p = p.previousElementSibling) p.classList.contains("q-virtual-scroll--skip") === !1 && (c.offsetStart += p[d]);
    if (o !== null) for (let p = o.nextElementSibling; p !== null; p = p.nextElementSibling) p.classList.contains("q-virtual-scroll--skip") === !1 && (c.offsetEnd += p[d]);
    if (t !== e) {
        const p = s.getBoundingClientRect(), v = t.getBoundingClientRect();
        l === !0 ? (c.offsetStart += v.left - p.left, c.offsetEnd -= v.width) : (c.offsetStart += v.top - p.top, c.offsetEnd -= v.height), e !== window && (c.offsetStart += c.scrollStart), c.offsetEnd += c.scrollMaxSize - c.offsetStart
    }
    return c
}

function Fd(e, t, n, o) {
    t === "end" && (t = (e === window ? document.body : e)[n === !0 ? "scrollWidth" : "scrollHeight"]), e === window ? n === !0 ? (o === !0 && (t = (va === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === !0 ? (o === !0 && (t = (va === !0 ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t
}

function Fl(e, t, n, o) {
    if (n >= o) return 0;
    const l = t.length, a = Math.floor(n / gn), i = Math.floor((o - 1) / gn) + 1;
    let r = e.slice(a, i).reduce(fl, 0);
    return n % gn !== 0 && (r -= t.slice(a * gn, n).reduce(fl, 0)), o % gn !== 0 && o !== l && (r -= t.slice(o, i * gn).reduce(fl, 0)), r
}

const m0 = {
    virtualScrollSliceSize: {type: [Number, String], default: null},
    virtualScrollSliceRatioBefore: {type: [Number, String], default: 1},
    virtualScrollSliceRatioAfter: {type: [Number, String], default: 1},
    virtualScrollItemSize: {type: [Number, String], default: 24},
    virtualScrollStickySizeStart: {type: [Number, String], default: 0},
    virtualScrollStickySizeEnd: {type: [Number, String], default: 0},
    tableColspan: [Number, String]
}, h0 = Object.keys(m0), g0 = {virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...m0};

function b0({
                virtualScrollLength: e,
                getVirtualScrollTarget: t,
                getVirtualScrollEl: n,
                virtualScrollItemSizeComputed: o
            }) {
    const l = Se(), {props: a, emit: i, proxy: r} = l, {$q: s} = r;
    let d, c, p, v, m = [];
    const g = D(0), x = D(0), w = D({}), S = D(null), y = D(null), b = D(null), h = D({from: 0, to: 0}),
        C = f(() => a.tableColspan !== void 0 ? a.tableColspan : 100);
    o === void 0 && (o = f(() => a.virtualScrollItemSize));
    const A = f(() => o.value + ";" + a.virtualScrollHorizontal),
        L = f(() => A.value + ";" + a.virtualScrollSliceRatioBefore + ";" + a.virtualScrollSliceRatioAfter);

    function E() {
        Y(c, !0)
    }

    function V(K) {
        Y(K === void 0 ? c : K)
    }

    function O(K, T) {
        const ee = t();
        if (ee == null || ee.nodeType === 8) return;
        const Z = Dr(ee, n(), S.value, y.value, a.virtualScrollHorizontal, s.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd);
        p !== Z.scrollViewSize && J(Z.scrollViewSize), M(ee, Z, Math.min(e.value - 1, Math.max(0, parseInt(K, 10) || 0)), 0, G_.indexOf(T) > -1 ? T : c > -1 && K > c ? "end" : "start")
    }

    function z() {
        const K = t();
        if (K == null || K.nodeType === 8) return;
        const T = Dr(K, n(), S.value, y.value, a.virtualScrollHorizontal, s.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd),
            ee = e.value - 1, Z = T.scrollMaxSize - T.offsetStart - T.offsetEnd - x.value;
        if (d === T.scrollStart) return;
        if (T.scrollMaxSize <= 0) return void M(K, T, 0, 0);
        p !== T.scrollViewSize && J(T.scrollViewSize), k(h.value.from);
        const ie = Math.floor(T.scrollMaxSize - Math.max(T.scrollViewSize, T.offsetEnd) - Math.min(v[ee], T.scrollViewSize / 2));
        if (ie > 0 && Math.ceil(T.scrollStart) >= ie) return void M(K, T, ee, T.scrollMaxSize - T.offsetEnd - m.reduce(fl, 0));
        let G = 0, I = T.scrollStart - T.offsetStart, N = I;
        if (I <= Z && I + T.scrollViewSize >= g.value) I -= g.value, G = h.value.from, N = I; else for (let _ = 0; I >= m[_] && G < ee; _++) I -= m[_], G += gn;
        for (; I > 0 && G < ee;) I -= v[G], I > -T.scrollViewSize ? (G++, N = I) : N = v[G] + I;
        M(K, T, G, N)
    }

    function M(K, T, ee, Z, ie) {
        const G = typeof ie == "string" && ie.indexOf("-force") > -1, I = G === !0 ? ie.replace("-force", "") : ie,
            N = I !== void 0 ? I : "start";
        let _ = Math.max(0, ee - w.value[N]), H = _ + w.value.total;
        H > e.value && (H = e.value, _ = Math.max(0, H - w.value.total)), d = T.scrollStart;
        const re = _ !== h.value.from || H !== h.value.to;
        if (re === !1 && I === void 0) return void Q(ee);
        const {activeElement: q} = document, P = b.value;
        re === !0 && P !== null && P !== q && P.contains(q) === !0 && (P.addEventListener("focusout", B), setTimeout(() => {
            P !== null && P.removeEventListener("focusout", B)
        })), J_(P, ee - _);
        const F = I !== void 0 ? v.slice(_, ee).reduce(fl, 0) : 0;
        if (re === !0) {
            const te = H >= h.value.from && _ <= h.value.to ? h.value.to : H;
            h.value = {
                from: _,
                to: te
            }, g.value = Fl(m, v, 0, _), x.value = Fl(m, v, H, e.value), requestAnimationFrame(() => {
                h.value.to !== H && d === T.scrollStart && (h.value = {
                    from: h.value.from,
                    to: H
                }, x.value = Fl(m, v, H, e.value))
            })
        }
        requestAnimationFrame(() => {
            if (d !== T.scrollStart) return;
            re === !0 && k(_);
            const te = v.slice(_, ee).reduce(fl, 0), oe = te + T.offsetStart + g.value, ne = oe + v[ee];
            let ge = oe + Z;
            if (I !== void 0) {
                const he = te - F, me = T.scrollStart + he;
                ge = G !== !0 && me < oe && ne < me + T.scrollViewSize ? me : I === "end" ? ne - T.scrollViewSize : oe - (I === "start" ? 0 : Math.round((T.scrollViewSize - v[ee]) / 2))
            }
            d = ge, Fd(K, ge, a.virtualScrollHorizontal, s.lang.rtl), Q(ee)
        })
    }

    function k(K) {
        const T = b.value;
        if (T) {
            const ee = p0.call(T.children, _ => _.classList && _.classList.contains("q-virtual-scroll--skip") === !1),
                Z = ee.length,
                ie = a.virtualScrollHorizontal === !0 ? _ => _.getBoundingClientRect().width : _ => _.offsetHeight;
            let G, I, N = K;
            for (let _ = 0; _ < Z;) {
                for (G = ie(ee[_]), _++; _ < Z && ee[_].classList.contains("q-virtual-scroll--with-prev") === !0;) G += ie(ee[_]), _++;
                I = G - v[N], I !== 0 && (v[N] += I, m[Math.floor(N / gn)] += I), N++
            }
        }
    }

    function B() {
        b.value !== null && b.value !== void 0 && b.value.focus()
    }

    function Y(K, T) {
        const ee = 1 * o.value;
        T !== !0 && Array.isArray(v) !== !1 || (v = []);
        const Z = v.length;
        v.length = e.value;
        for (let G = e.value - 1; G >= Z; G--) v[G] = ee;
        const ie = Math.floor((e.value - 1) / gn);
        m = [];
        for (let G = 0; G <= ie; G++) {
            let I = 0;
            const N = Math.min((G + 1) * gn, e.value);
            for (let _ = G * gn; _ < N; _++) I += v[_];
            m.push(I)
        }
        c = -1, d = void 0, g.value = Fl(m, v, 0, h.value.from), x.value = Fl(m, v, h.value.to, e.value), K >= 0 ? (k(h.value.from), We(() => {
            O(K)
        })) : ae()
    }

    function J(K) {
        if (K === void 0 && typeof window < "u") {
            const I = t();
            I != null && I.nodeType !== 8 && (K = Dr(I, n(), S.value, y.value, a.virtualScrollHorizontal, s.lang.rtl, a.virtualScrollStickySizeStart, a.virtualScrollStickySizeEnd).scrollViewSize)
        }
        p = K;
        const T = parseFloat(a.virtualScrollSliceRatioBefore) || 0,
            ee = parseFloat(a.virtualScrollSliceRatioAfter) || 0, Z = 1 + T + ee,
            ie = K === void 0 || K <= 0 ? 1 : Math.ceil(K / o.value),
            G = Math.max(1, ie, Math.ceil((a.virtualScrollSliceSize > 0 ? a.virtualScrollSliceSize : 10) / Z));
        w.value = {
            total: Math.ceil(G * Z),
            start: Math.ceil(G * T),
            center: Math.ceil(G * (.5 + T)),
            end: Math.ceil(G * (1 + T)),
            view: ie
        }
    }

    function $(K, T) {
        const ee = a.virtualScrollHorizontal === !0 ? "width" : "height",
            Z = {["--q-virtual-scroll-item-" + ee]: o.value + "px"};
        return [K === "tbody" ? u(K, {
            class: "q-virtual-scroll__padding",
            key: "before",
            ref: S
        }, [u("tr", [u("td", {
            style: {[ee]: `${g.value}px`, ...Z},
            colspan: C.value
        })])]) : u(K, {
            class: "q-virtual-scroll__padding",
            key: "before",
            ref: S,
            style: {[ee]: `${g.value}px`, ...Z}
        }), u(K, {
            class: "q-virtual-scroll__content",
            key: "content",
            ref: b,
            tabindex: -1
        }, T.flat()), K === "tbody" ? u(K, {
            class: "q-virtual-scroll__padding",
            key: "after",
            ref: y
        }, [u("tr", [u("td", {
            style: {[ee]: `${x.value}px`, ...Z},
            colspan: C.value
        })])]) : u(K, {class: "q-virtual-scroll__padding", key: "after", ref: y, style: {[ee]: `${x.value}px`, ...Z}})]
    }

    function Q(K) {
        c !== K && (a.onVirtualScroll !== void 0 && i("virtualScroll", {
            index: K,
            from: h.value.from,
            to: h.value.to - 1,
            direction: K < c ? "decrease" : "increase",
            ref: r
        }), c = K)
    }

    pe(L, () => {
        J()
    }), pe(A, E), J();
    const ae = Tl(z, s.platform.is.ios === !0 ? 120 : 35);
    Ui(() => {
        J()
    });
    let be = !1;
    return kn(() => {
        be = !0
    }), Hn(() => {
        if (be !== !0) return;
        const K = t();
        d !== void 0 && K !== void 0 && K !== null && K.nodeType !== 8 ? Fd(K, d, a.virtualScrollHorizontal, s.lang.rtl) : O(c)
    }), Ke(() => {
        ae.cancel()
    }), Object.assign(r, {scrollTo: O, reset: E, refresh: V}), {
        virtualScrollSliceRange: h,
        virtualScrollSliceSizeComputed: w,
        setVirtualScrollSize: J,
        onVirtualScrollEvt: ae,
        localResetVirtualScroll: Y,
        padVirtualScroll: $,
        scrollTo: O,
        reset: E,
        refresh: V
    }
}

const zd = e => ["add", "add-unique", "toggle"].includes(e), ew = ".*+?^${}()|[]\\", tw = Object.keys(qa);
var y0 = ve({
    name: "QSelect",
    inheritAttrs: !1,
    props: {
        ...g0, ...vn, ...qa,
        modelValue: {required: !0},
        multiple: Boolean,
        displayValue: [String, Number],
        displayValueHtml: Boolean,
        dropdownIcon: String,
        options: {type: Array, default: () => []},
        optionValue: [Function, String],
        optionLabel: [Function, String],
        optionDisable: [Function, String],
        hideSelected: Boolean,
        hideDropdownIcon: Boolean,
        fillInput: Boolean,
        maxValues: [Number, String],
        optionsDense: Boolean,
        optionsDark: {type: Boolean, default: null},
        optionsSelectedClass: String,
        optionsHtml: Boolean,
        optionsCover: Boolean,
        menuShrink: Boolean,
        menuAnchor: String,
        menuSelf: String,
        menuOffset: Array,
        popupContentClass: String,
        popupContentStyle: [String, Array, Object],
        useInput: Boolean,
        useChips: Boolean,
        newValueMode: {type: String, validator: zd},
        mapOptions: Boolean,
        emitValue: Boolean,
        inputDebounce: {type: [Number, String], default: 500},
        inputClass: [Array, String, Object],
        inputStyle: [Array, String, Object],
        tabindex: {type: [String, Number], default: 0},
        autocomplete: String,
        transitionShow: String,
        transitionHide: String,
        transitionDuration: [String, Number],
        behavior: {type: String, validator: e => ["default", "menu", "dialog"].includes(e), default: "default"},
        virtualScrollItemSize: {type: [Number, String], default: void 0},
        onNewValue: Function,
        onFilter: Function
    },
    emits: [...rr, "add", "remove", "inputValue", "newValue", "keyup", "keypress", "keydown", "filterAbort"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: o} = Se(), {$q: l} = o, a = D(!1), i = D(!1), r = D(-1), s = D(""), d = D(!1), c = D(!1);
        let p, v, m, g, x, w, S, y = null, b = null, h = null;
        const C = D(null), A = D(null), L = D(null), E = D(null), V = D(null), O = su(e), z = n0(ke),
            M = f(() => Array.isArray(e.options) ? e.options.length : 0),
            k = f(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize), {
                virtualScrollSliceRange: B,
                virtualScrollSliceSizeComputed: Y,
                localResetVirtualScroll: J,
                padVirtualScroll: $,
                onVirtualScrollEvt: Q,
                scrollTo: ae,
                setVirtualScrollSize: be
            } = b0({
                virtualScrollLength: M,
                getVirtualScrollTarget: nn,
                getVirtualScrollEl: jt,
                virtualScrollItemSizeComputed: k
            }), K = sr(), T = f(() => {
                const j = e.mapOptions === !0 && e.multiple !== !0,
                    Pe = e.modelValue === void 0 || e.modelValue === null && j !== !0 ? [] : e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue];
                if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
                    const Ee = e.mapOptions === !0 && p !== void 0 ? p : [], He = Pe.map(ft => le(ft, Ee));
                    return e.modelValue === null && j === !0 ? He.filter(ft => ft !== null) : He
                }
                return Pe
            }), ee = f(() => {
                const j = {};
                return tw.forEach(Pe => {
                    const Ee = e[Pe];
                    Ee !== void 0 && (j[Pe] = Ee)
                }), j
            }), Z = f(() => e.optionsDark === null ? K.isDark.value : e.optionsDark), ie = f(() => Vo(T.value)),
            G = f(() => {
                let j = "q-field__input q-placeholder col";
                return e.hideSelected === !0 || T.value.length === 0 ? [j, e.inputClass] : (j += " q-field__input--padding", e.inputClass === void 0 ? j : [j, e.inputClass])
            }),
            I = f(() => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")),
            N = f(() => M.value === 0), _ = f(() => T.value.map(j => ue.value(j)).join(", ")),
            H = f(() => e.displayValue !== void 0 ? e.displayValue : _.value),
            re = f(() => e.optionsHtml === !0 ? () => !0 : j => j != null && j.html === !0),
            q = f(() => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || T.value.some(re.value))),
            P = f(() => K.focused.value === !0 ? e.tabindex : -1), F = f(() => {
                const j = {
                    tabindex: e.tabindex,
                    role: "combobox",
                    "aria-label": e.label,
                    "aria-readonly": e.readonly === !0 ? "true" : "false",
                    "aria-autocomplete": e.useInput === !0 ? "list" : "none",
                    "aria-expanded": a.value === !0 ? "true" : "false",
                    "aria-controls": `${K.targetUid.value}_lb`
                };
                return r.value >= 0 && (j["aria-activedescendant"] = `${K.targetUid.value}_${r.value}`), j
            }), te = f(() => ({
                id: `${K.targetUid.value}_lb`,
                role: "listbox",
                "aria-multiselectable": e.multiple === !0 ? "true" : "false"
            })), oe = f(() => T.value.map((j, Pe) => ({
                index: Pe,
                opt: j,
                html: re.value(j),
                selected: !0,
                removeAtIndex: Be,
                toggleOption: Ye,
                tabindex: P.value
            }))), ne = f(() => {
                if (M.value === 0) return [];
                const {from: j, to: Pe} = B.value;
                return e.options.slice(j, Pe).map((Ee, He) => {
                    const ft = U.value(Ee) === !0, it = j + He, Tt = {
                        clickable: !0,
                        active: !1,
                        activeClass: me.value,
                        manualFocus: !0,
                        focused: !1,
                        disable: ft,
                        tabindex: -1,
                        dense: e.optionsDense,
                        dark: Z.value,
                        role: "option",
                        id: `${K.targetUid.value}_${it}`,
                        onClick: () => {
                            Ye(Ee)
                        }
                    };
                    return ft !== !0 && (Te(Ee) === !0 && (Tt.active = !0), r.value === it && (Tt.focused = !0), Tt["aria-selected"] = Tt.active === !0 ? "true" : "false", l.platform.is.desktop === !0 && (Tt.onMousemove = () => {
                        a.value === !0 && se(it)
                    })), {
                        index: it,
                        opt: Ee,
                        html: re.value(Ee),
                        label: ue.value(Ee),
                        selected: Tt.active,
                        focused: Tt.focused,
                        toggleOption: Ye,
                        setOptionIndex: se,
                        itemProps: Tt
                    }
                })
            }), ge = f(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : l.iconSet.arrow.dropdown),
            he = f(() => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0),
            me = f(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""),
            W = f(() => ye(e.optionValue, "value")), ue = f(() => ye(e.optionLabel, "label")),
            U = f(() => ye(e.optionDisable, "disable")), de = f(() => T.value.map(j => W.value(j))), we = f(() => {
                const j = {
                    onInput: ke, onChange: z, onKeydown: ht, onKeyup: Xe, onKeypress: dt, onFocus: Re, onClick(Pe) {
                        v === !0 && _t(Pe)
                    }
                };
                return j.onCompositionstart = j.onCompositionupdate = j.onCompositionend = z, j
            });

        function xe(j) {
            return e.emitValue === !0 ? W.value(j) : j
        }

        function Ce(j) {
            if (j > -1 && j < T.value.length) if (e.multiple === !0) {
                const Pe = e.modelValue.slice();
                n("remove", {index: j, value: Pe.splice(j, 1)[0]}), n("update:modelValue", Pe)
            } else n("update:modelValue", null)
        }

        function Be(j) {
            Ce(j), K.focus()
        }

        function Ne(j, Pe) {
            const Ee = xe(j);
            if (e.multiple !== !0) return e.fillInput === !0 && Ve(ue.value(j), !0, !0), void n("update:modelValue", Ee);
            if (T.value.length === 0) return n("add", {
                index: 0,
                value: Ee
            }), void n("update:modelValue", e.multiple === !0 ? [Ee] : Ee);
            if (Pe === !0 && Te(j) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues) return;
            const He = e.modelValue.slice();
            n("add", {index: He.length, value: Ee}), He.push(Ee), n("update:modelValue", He)
        }

        function Ye(j, Pe) {
            if (K.editable.value !== !0 || j === void 0 || U.value(j) === !0) return;
            const Ee = W.value(j);
            if (e.multiple !== !0) return Pe !== !0 && (Ve(e.fillInput === !0 ? ue.value(j) : "", !0, !0), mo()), A.value !== null && A.value.focus(), void (T.value.length !== 0 && yn(W.value(T.value[0]), Ee) === !0 || n("update:modelValue", e.emitValue === !0 ? Ee : j));
            if ((v !== !0 || d.value === !0) && K.focus(), Re(), T.value.length === 0) {
                const it = e.emitValue === !0 ? Ee : j;
                return n("add", {index: 0, value: it}), void n("update:modelValue", e.multiple === !0 ? [it] : it)
            }
            const He = e.modelValue.slice(), ft = de.value.findIndex(it => yn(it, Ee));
            if (ft > -1) n("remove", {index: ft, value: He.splice(ft, 1)[0]}); else {
                if (e.maxValues !== void 0 && He.length >= e.maxValues) return;
                const it = e.emitValue === !0 ? Ee : j;
                n("add", {index: He.length, value: it}), He.push(it)
            }
            n("update:modelValue", He)
        }

        function se(j) {
            if (l.platform.is.desktop !== !0) return;
            const Pe = j > -1 && j < M.value ? j : -1;
            r.value !== Pe && (r.value = Pe)
        }

        function _e(j = 1, Pe) {
            if (a.value === !0) {
                let Ee = r.value;
                do Ee = gi(Ee + j, -1, M.value - 1); while (Ee !== -1 && Ee !== r.value && U.value(e.options[Ee]) === !0);
                r.value !== Ee && (se(Ee), ae(Ee), Pe !== !0 && e.useInput === !0 && e.fillInput === !0 && Oe(Ee >= 0 ? ue.value(e.options[Ee]) : g, !0))
            }
        }

        function le(j, Pe) {
            const Ee = He => yn(W.value(He), j);
            return e.options.find(Ee) || Pe.find(Ee) || j
        }

        function ye(j, Pe) {
            const Ee = j !== void 0 ? j : Pe;
            return typeof Ee == "function" ? Ee : He => He !== null && typeof He == "object" && Ee in He ? He[Ee] : He
        }

        function Te(j) {
            const Pe = W.value(j);
            return de.value.find(Ee => yn(Ee, Pe)) !== void 0
        }

        function Re(j) {
            e.useInput === !0 && A.value !== null && (j === void 0 || A.value === j.target && j.target.value === _.value) && A.value.select()
        }

        function Me(j) {
            dn(j, 27) === !0 && a.value === !0 && (_t(j), mo(), Io()), n("keyup", j)
        }

        function Xe(j) {
            const {value: Pe} = j.target;
            if (j.keyCode === void 0) if (j.target.value = "", y !== null && (clearTimeout(y), y = null), b !== null && (clearTimeout(b), b = null), Io(), typeof Pe == "string" && Pe.length !== 0) {
                const Ee = Pe.toLocaleLowerCase(), He = it => {
                    const Tt = e.options.find(Qt => it.value(Qt).toLocaleLowerCase() === Ee);
                    return Tt !== void 0 && (T.value.indexOf(Tt) === -1 ? Ye(Tt) : mo(), !0)
                }, ft = it => {
                    He(W) !== !0 && He(ue) !== !0 && it !== !0 && De(Pe, !0, () => ft(!0))
                };
                ft()
            } else K.clearValue(j); else Me(j)
        }

        function dt(j) {
            n("keypress", j)
        }

        function ht(j) {
            if (n("keydown", j), zo(j) === !0) return;
            const Pe = s.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0),
                Ee = j.shiftKey !== !0 && e.multiple !== !0 && (r.value > -1 || Pe === !0);
            if (j.keyCode === 27) return void Bt(j);
            if (j.keyCode === 9 && Ee === !1) return void lt();
            if (j.target === void 0 || j.target.id !== K.targetUid.value || K.editable.value !== !0) return;
            if (j.keyCode === 40 && K.innerLoading.value !== !0 && a.value === !1) return Ie(j), void on();
            if (j.keyCode === 8 && (e.useChips === !0 || e.clearable === !0) && e.hideSelected !== !0 && s.value.length === 0) return void (e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? Ce(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && n("update:modelValue", null));
            j.keyCode !== 35 && j.keyCode !== 36 || typeof s.value == "string" && s.value.length !== 0 || (Ie(j), r.value = -1, _e(j.keyCode === 36 ? 1 : -1, e.multiple)), j.keyCode !== 33 && j.keyCode !== 34 || Y.value === void 0 || (Ie(j), r.value = Math.max(-1, Math.min(M.value, r.value + (j.keyCode === 33 ? -1 : 1) * Y.value.view)), _e(j.keyCode === 33 ? 1 : -1, e.multiple)), j.keyCode !== 38 && j.keyCode !== 40 || (Ie(j), _e(j.keyCode === 38 ? -1 : 1, e.multiple));
            const He = M.value;
            if ((w === void 0 || S < Date.now()) && (w = ""), He > 0 && e.useInput !== !0 && j.key !== void 0 && j.key.length === 1 && j.altKey === !1 && j.ctrlKey === !1 && j.metaKey === !1 && (j.keyCode !== 32 || w.length !== 0)) {
                a.value !== !0 && on(j);
                const ft = j.key.toLocaleLowerCase(), it = w.length === 1 && w[0] === ft;
                S = Date.now() + 1500, it === !1 && (Ie(j), w += ft);
                const Tt = new RegExp("^" + w.split("").map(dr => ew.indexOf(dr) > -1 ? "\\" + dr : dr).join(".*"), "i");
                let Qt = r.value;
                if (it === !0 || Qt < 0 || Tt.test(ue.value(e.options[Qt])) !== !0) do Qt = gi(Qt + 1, -1, He - 1); while (Qt !== r.value && (U.value(e.options[Qt]) === !0 || Tt.test(ue.value(e.options[Qt])) !== !0));
                r.value !== Qt && We(() => {
                    se(Qt), ae(Qt), Qt >= 0 && e.useInput === !0 && e.fillInput === !0 && Oe(ue.value(e.options[Qt]), !0)
                })
            } else if (j.keyCode === 13 || j.keyCode === 32 && e.useInput !== !0 && w === "" || j.keyCode === 9 && Ee !== !1) if (j.keyCode !== 9 && Ie(j), r.value > -1 && r.value < He) Ye(e.options[r.value]); else {
                if (Pe === !0) {
                    const ft = (it, Tt) => {
                        if (Tt) {
                            if (zd(Tt) !== !0) return
                        } else Tt = e.newValueMode;
                        if (Ve("", e.multiple !== !0, !0), it == null) return;
                        (Tt === "toggle" ? Ye : Ne)(it, Tt === "add-unique"), e.multiple !== !0 && (A.value !== null && A.value.focus(), mo())
                    };
                    if (e.onNewValue !== void 0 ? n("newValue", s.value, ft) : ft(s.value), e.multiple !== !0) return
                }
                a.value === !0 ? lt() : K.innerLoading.value !== !0 && on()
            }
        }

        function jt() {
            return v === !0 ? V.value : L.value !== null && L.value.contentEl !== null ? L.value.contentEl : void 0
        }

        function nn() {
            return jt()
        }

        function Bn() {
            return e.hideSelected === !0 ? [] : t["selected-item"] !== void 0 ? oe.value.map(j => t["selected-item"](j)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === !0 ? oe.value.map((j, Pe) => u(bu, {
                key: "option-" + Pe,
                removable: K.editable.value === !0 && U.value(j.opt) !== !0,
                dense: !0,
                textColor: e.color,
                tabindex: P.value,
                onRemove() {
                    j.removeAtIndex(Pe)
                }
            }, () => u("span", {
                class: "ellipsis",
                [j.html === !0 ? "innerHTML" : "textContent"]: ue.value(j.opt)
            }))) : [u("span", {[q.value === !0 ? "innerHTML" : "textContent"]: H.value})]
        }

        function Tn() {
            if (N.value === !0) return t["no-option"] !== void 0 ? t["no-option"]({inputValue: s.value}) : void 0;
            const j = t.option !== void 0 ? t.option : Ee => u(ka, {key: Ee.index, ...Ee.itemProps}, () => u(In, () => u(Mi, () => u("span", {[Ee.html === !0 ? "innerHTML" : "textContent"]: Ee.label}))));
            let Pe = $("div", ne.value.map(j));
            return t["before-options"] !== void 0 && (Pe = t["before-options"]().concat(Pe)), St(t["after-options"], Pe)
        }

        function fe(j, Pe) {
            const Ee = Pe === !0 ? {...F.value, ...K.splitAttrs.attributes.value} : void 0, He = {
                ref: Pe === !0 ? A : void 0,
                key: "i_t",
                class: G.value,
                style: e.inputStyle,
                value: s.value !== void 0 ? s.value : "",
                type: "search", ...Ee,
                id: Pe === !0 ? K.targetUid.value : void 0,
                maxlength: e.maxlength,
                autocomplete: e.autocomplete,
                "data-autofocus": j === !0 || e.autofocus === !0 || void 0,
                disabled: e.disable === !0,
                readonly: e.readonly === !0, ...we.value
            };
            return j !== !0 && v === !0 && (Array.isArray(He.class) === !0 ? He.class = [...He.class, "no-pointer-events"] : He.class += " no-pointer-events"), u("input", He)
        }

        function ke(j) {
            y !== null && (clearTimeout(y), y = null), b !== null && (clearTimeout(b), b = null), j && j.target && j.target.qComposing === !0 || (Oe(j.target.value || ""), m = !0, g = s.value, K.focused.value === !0 || v === !0 && d.value !== !0 || K.focus(), e.onFilter !== void 0 && (y = setTimeout(() => {
                y = null, De(s.value)
            }, e.inputDebounce)))
        }

        function Oe(j, Pe) {
            s.value !== j && (s.value = j, Pe === !0 || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", j) : b = setTimeout(() => {
                b = null, n("inputValue", j)
            }, e.inputDebounce))
        }

        function Ve(j, Pe, Ee) {
            m = Ee !== !0, e.useInput === !0 && (Oe(j, !0), Pe !== !0 && Ee === !0 || (g = j), Pe !== !0 && De(j))
        }

        function De(j, Pe, Ee) {
            if (e.onFilter === void 0 || Pe !== !0 && K.focused.value !== !0) return;
            K.innerLoading.value === !0 ? n("filterAbort") : (K.innerLoading.value = !0, c.value = !0), j !== "" && e.multiple !== !0 && T.value.length !== 0 && m !== !0 && j === ue.value(T.value[0]) && (j = "");
            const He = setTimeout(() => {
                a.value === !0 && (a.value = !1)
            }, 10);
            h !== null && clearTimeout(h), h = He, n("filter", j, (ft, it) => {
                Pe !== !0 && K.focused.value !== !0 || h !== He || (clearTimeout(h), typeof ft == "function" && ft(), c.value = !1, We(() => {
                    K.innerLoading.value = !1, K.editable.value === !0 && (Pe === !0 ? a.value === !0 && mo() : a.value === !0 ? cr(!0) : a.value = !0), typeof it == "function" && We(() => {
                        it(o)
                    }), typeof Ee == "function" && We(() => {
                        Ee(o)
                    })
                }))
            }, () => {
                K.focused.value === !0 && h === He && (clearTimeout(h), K.innerLoading.value = !1, c.value = !1), a.value === !0 && (a.value = !1)
            })
        }

        function gt() {
            return u(wa, {
                ref: L,
                class: I.value,
                style: e.popupContentStyle,
                modelValue: a.value,
                fit: e.menuShrink !== !0,
                cover: e.optionsCover === !0 && N.value !== !0 && e.useInput !== !0,
                anchor: e.menuAnchor,
                self: e.menuSelf,
                offset: e.menuOffset,
                dark: Z.value,
                noParentEvent: !0,
                noRefocus: !0,
                noFocus: !0,
                square: he.value,
                transitionShow: e.transitionShow,
                transitionHide: e.transitionHide,
                transitionDuration: e.transitionDuration,
                separateClosePopup: !0, ...te.value,
                onScrollPassive: Q,
                onBeforeShow: Eu,
                onBeforeHide: R,
                onShow: X
            }, Tn)
        }

        function R(j) {
            Pu(j), lt()
        }

        function X() {
            be()
        }

        function ce(j) {
            _t(j), A.value !== null && A.value.focus(), d.value = !0, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0)
        }

        function $e(j) {
            _t(j), We(() => {
                d.value = !1
            })
        }

        function qe() {
            const j = [u(Xp, {
                class: `col-auto ${K.fieldClass.value}`, ...ee.value,
                for: K.targetUid.value,
                dark: Z.value,
                square: !0,
                loading: c.value,
                itemAligned: !1,
                filled: !0,
                stackLabel: s.value.length !== 0, ...K.splitAttrs.listeners.value,
                onFocus: ce,
                onBlur: $e
            }, {...t, rawControl: () => K.getControl(!0), before: void 0, after: void 0})];
            return a.value === !0 && j.push(u("div", {
                ref: V,
                class: I.value + " scroll",
                style: e.popupContentStyle, ...te.value,
                onClick: Bt,
                onScrollPassive: Q
            }, Tn())), u(Ca, {
                ref: E,
                modelValue: i.value,
                position: e.useInput === !0 ? "top" : void 0,
                transitionShow: x,
                transitionHide: e.transitionHide,
                transitionDuration: e.transitionDuration,
                onBeforeShow: Eu,
                onBeforeHide: et,
                onHide: Le,
                onShow: Ue
            }, () => u("div", {class: "q-select__dialog" + (Z.value === !0 ? " q-select__dialog--dark q-dark" : "") + (d.value === !0 ? " q-select__dialog--focused" : "")}, j))
        }

        function et(j) {
            Pu(j), E.value !== null && E.value.__updateRefocusTarget(K.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), K.focused.value = !1
        }

        function Le(j) {
            mo(), K.focused.value === !1 && n("blur", j), Io()
        }

        function Ue() {
            const j = document.activeElement;
            j !== null && j.id === K.targetUid.value || A.value === null || A.value === j || A.value.focus(), be()
        }

        function lt() {
            i.value !== !0 && (r.value = -1, a.value === !0 && (a.value = !1), K.focused.value === !1 && (h !== null && (clearTimeout(h), h = null), K.innerLoading.value === !0 && (n("filterAbort"), K.innerLoading.value = !1, c.value = !1)))
        }

        function on(j) {
            K.editable.value === !0 && (v === !0 ? (K.onControlFocusin(j), i.value = !0, We(() => {
                K.focus()
            })) : K.focus(), e.onFilter !== void 0 ? De(s.value) : N.value === !0 && t["no-option"] === void 0 || (a.value = !0))
        }

        function mo() {
            i.value = !1, lt()
        }

        function Io() {
            e.useInput === !0 && Ve(e.multiple !== !0 && e.fillInput === !0 && T.value.length !== 0 && ue.value(T.value[0]) || "", !0, !0)
        }

        function cr(j) {
            let Pe = -1;
            if (j === !0) {
                if (T.value.length !== 0) {
                    const Ee = W.value(T.value[0]);
                    Pe = e.options.findIndex(He => yn(W.value(He), Ee))
                }
                J(Pe)
            }
            se(Pe)
        }

        function X0(j, Pe) {
            a.value === !0 && K.innerLoading.value === !1 && (J(-1, !0), We(() => {
                a.value === !0 && K.innerLoading.value === !1 && (j > Pe ? J() : cr(!0))
            }))
        }

        function Mu() {
            i.value === !1 && L.value !== null && L.value.updatePosition()
        }

        function Eu(j) {
            j !== void 0 && _t(j), n("popupShow", j), K.hasPopupOpen = !0, K.onControlFocusin(j)
        }

        function Pu(j) {
            j !== void 0 && _t(j), n("popupHide", j), K.hasPopupOpen = !1, K.onControlFocusout(j)
        }

        function Au() {
            v = (l.platform.is.mobile === !0 || e.behavior === "dialog") && e.behavior !== "menu" && (e.useInput !== !0 || t["no-option"] !== void 0 || e.onFilter !== void 0 || N.value === !1), x = l.platform.is.ios === !0 && v === !0 && e.useInput === !0 ? "fade" : e.transitionShow
        }

        return pe(T, j => {
            p = j, e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && K.innerLoading.value !== !0 && (i.value !== !0 && a.value !== !0 || ie.value !== !0) && (m !== !0 && Io(), i.value !== !0 && a.value !== !0 || De(""))
        }, {immediate: !0}), pe(() => e.fillInput, Io), pe(a, cr), pe(M, X0), kl(Au), Wi(Mu), Au(), Ke(() => {
            y !== null && clearTimeout(y), b !== null && clearTimeout(b)
        }), Object.assign(o, {
            showPopup: on,
            hidePopup: mo,
            removeAtIndex: Ce,
            add: Ne,
            toggleOption: Ye,
            getOptionIndex: () => r.value,
            setOptionIndex: se,
            moveOptionSelection: _e,
            filter: De,
            updateMenuPosition: Mu,
            updateInputValue: Ve,
            isOptionSelected: Te,
            getEmittingOptionValue: xe,
            isOptionDisabled: (...j) => U.value.apply(null, j) === !0,
            getOptionValue: (...j) => W.value.apply(null, j),
            getOptionLabel: (...j) => ue.value.apply(null, j)
        }), Object.assign(K, {
            innerValue: T,
            fieldClass: f(() => `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`),
            inputRef: C,
            targetRef: A,
            hasValue: ie,
            showPopup: on,
            floatingLabel: f(() => e.hideSelected !== !0 && ie.value === !0 || typeof s.value == "number" || s.value.length !== 0 || Vo(e.displayValue)),
            getControlChild: () => {
                if (K.editable.value !== !1 && (i.value === !0 || N.value !== !0 || t["no-option"] !== void 0)) return v === !0 ? qe() : gt();
                K.hasPopupOpen === !0 && (K.hasPopupOpen = !1)
            },
            controlEvents: {
                onFocusin(j) {
                    K.onControlFocusin(j)
                }, onFocusout(j) {
                    K.onControlFocusout(j, () => {
                        Io(), lt()
                    })
                }, onClick(j) {
                    if (Bt(j), v !== !0 && a.value === !0) return lt(), void (A.value !== null && A.value.focus());
                    on(j)
                }
            },
            getControl: j => {
                const Pe = Bn(), Ee = j === !0 || i.value !== !0 || v !== !0;
                if (e.useInput === !0) Pe.push(fe(j, Ee)); else if (K.editable.value === !0) {
                    const ft = Ee === !0 ? F.value : void 0;
                    Pe.push(u("input", {
                        ref: Ee === !0 ? A : void 0,
                        key: "d_t",
                        class: "q-select__focus-target",
                        id: Ee === !0 ? K.targetUid.value : void 0,
                        value: H.value,
                        readonly: !0,
                        "data-autofocus": j === !0 || e.autofocus === !0 || void 0, ...ft,
                        onKeydown: ht,
                        onKeyup: Me,
                        onKeypress: dt
                    })), Ee === !0 && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && Pe.push(u("input", {
                        class: "q-select__autocomplete-input",
                        autocomplete: e.autocomplete,
                        tabindex: -1,
                        onKeyup: Xe
                    }))
                }
                if (O.value !== void 0 && e.disable !== !0 && de.value.length !== 0) {
                    const ft = de.value.map(it => u("option", {value: it, selected: !0}));
                    Pe.push(u("select", {class: "hidden", name: O.value, multiple: e.multiple}, ft))
                }
                const He = e.useInput === !0 || Ee !== !0 ? void 0 : K.splitAttrs.attributes.value;
                return u("div", {class: "q-field__native row items-center", ...He, ...K.splitAttrs.listeners.value}, Pe)
            },
            getInnerAppend: () => e.loading !== !0 && c.value !== !0 && e.hideDropdownIcon !== !0 ? [u(Ze, {
                class: "q-select__dropdown-icon" + (a.value === !0 ? " rotate-180" : ""),
                name: ge.value
            })] : null
        }), ur(K)
    }
});
const nw = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"],
    ow = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
var lw = ve({
    name: "QSkeleton",
    props: {
        ...Ge,
        tag: {type: String, default: "div"},
        type: {type: String, validator: e => nw.includes(e), default: "rect"},
        animation: {type: String, validator: e => ow.includes(e), default: "wave"},
        animationSpeed: {type: [String, Number], default: 1500},
        square: Boolean,
        bordered: Boolean,
        size: String,
        width: String,
        height: String
    },
    setup(e, {slots: t}) {
        const n = Se(), o = Je(e, n.proxy.$q), l = f(() => {
                const i = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
                return {"--q-skeleton-speed": `${e.animationSpeed}ms`, width: i[0], height: i[1]}
            }),
            a = f(() => `q-skeleton q-skeleton--${o.value === !0 ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === !0 ? " q-skeleton--square" : "") + (e.bordered === !0 ? " q-skeleton--bordered" : ""));
        return () => u(e.tag, {class: a.value, style: l.value}, Ae(t.default))
    }
});
const Nd = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
var aw = ve({
    name: "QSlideItem",
    props: {...Ge, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function},
    emits: ["action", "top", "right", "bottom", "left"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: o} = Se(), {$q: l} = o, a = Je(e, l), {getCacheWithFn: i} = Sa(), r = D(null);
        let s = null, d = {}, c = {}, p = {};
        const v = f(() => l.lang.rtl === !0 ? {left: "right", right: "left"} : {left: "left", right: "right"}),
            m = f(() => "q-slide-item q-item-type overflow-hidden" + (a.value === !0 ? " q-slide-item--dark q-dark" : ""));

        function g() {
            r.value.style.transform = "translate(0,0)"
        }

        function x(S, y, b) {
            e.onSlide !== void 0 && n("slide", {side: S, ratio: y, isReset: b})
        }

        function w(S) {
            const y = r.value;
            if (S.isFirst) d = {
                dir: null,
                size: {left: 0, right: 0, top: 0, bottom: 0},
                scale: 0
            }, y.classList.add("no-transition"), Nd.forEach(A => {
                if (t[A[0]] !== void 0) {
                    const L = p[A[0]];
                    L.style.transform = "scale(1)", d.size[A[0]] = L.getBoundingClientRect()[A[3]]
                }
            }), d.axis = S.direction === "up" || S.direction === "down" ? "Y" : "X"; else {
                if (S.isFinal) return y.classList.remove("no-transition"), void (d.scale === 1 ? (y.style.transform = `translate${d.axis}(${100 * d.dir}%)`, s !== null && clearTimeout(s), s = setTimeout(() => {
                    s = null, n(d.showing, {reset: g}), n("action", {side: d.showing, reset: g})
                }, 230)) : (y.style.transform = "translate(0,0)", x(d.showing, 0, !0)));
                S.direction = d.axis === "X" ? S.offset.x < 0 ? "left" : "right" : S.offset.y < 0 ? "up" : "down"
            }
            if (t.left === void 0 && S.direction === v.value.right || t.right === void 0 && S.direction === v.value.left || t.top === void 0 && S.direction === "down" || t.bottom === void 0 && S.direction === "up") return void (y.style.transform = "translate(0,0)");
            let b, h, C;
            d.axis === "X" ? (h = S.direction === "left" ? -1 : 1, b = h === 1 ? v.value.left : v.value.right, C = S.distance.x) : (h = S.direction === "up" ? -2 : 2, b = h === 2 ? "top" : "bottom", C = S.distance.y), d.dir !== null && Math.abs(h) !== Math.abs(d.dir) || (d.dir !== h && (["left", "right", "top", "bottom"].forEach(A => {
                c[A] && (c[A].style.visibility = b === A ? "visible" : "hidden")
            }), d.showing = b, d.dir = h), d.scale = Math.max(0, Math.min(1, (C - 40) / d.size[b])), y.style.transform = `translate${d.axis}(${C * h / Math.abs(h)}px)`, p[b].style.transform = `scale(${d.scale})`, x(b, d.scale, !1))
        }

        return kl(() => {
            c = {}, p = {}
        }), Ke(() => {
            s !== null && clearTimeout(s)
        }), Object.assign(o, {reset: g}), () => {
            const S = [], y = {
                left: t[v.value.right] !== void 0,
                right: t[v.value.left] !== void 0,
                up: t.bottom !== void 0,
                down: t.top !== void 0
            }, b = Object.keys(y).filter(C => y[C] === !0);
            Nd.forEach(C => {
                const A = C[0];
                t[A] !== void 0 && S.push(u("div", {
                    ref: L => {
                        c[A] = L
                    },
                    class: `q-slide-item__${A} absolute-full row no-wrap items-${C[1]} justify-${C[2]}` + (e[A + "Color"] !== void 0 ? ` bg-${e[A + "Color"]}` : "")
                }, [u("div", {
                    ref: L => {
                        p[A] = L
                    }
                }, t[A]())]))
            });
            const h = u("div", {
                key: `${b.length === 0 ? "only-" : ""} content`,
                ref: r,
                class: "q-slide-item__content"
            }, Ae(t.default));
            return b.length === 0 ? S.push(h) : S.push(Sn(h, i("dir#" + b.join(""), () => {
                const C = {prevent: !0, stop: !0, mouse: !0};
                return b.forEach(A => {
                    C[A] = !0
                }), [[Jt, w, void 0, C]]
            }))), u("div", {class: m.value}, S)
        }
    }
});
const iw = u("div", {class: "q-space"});
var rw = ve({
    name: "QSpace", setup() {
        return () => iw
    }
});
const sw = [u("g", {transform: "matrix(1 0 0 -1 0 80)"}, [u("rect", {
    width: "10",
    height: "20",
    rx: "3"
}, [u("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "4.3s",
    values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("rect", {x: "15", width: "10", height: "80", rx: "3"}, [u("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "80;55;33;5;75;23;73;33;12;14;60;80",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("rect", {x: "30", width: "10", height: "50", rx: "3"}, [u("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1.4s",
    values: "50;34;78;23;56;23;34;76;80;54;21;50",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("rect", {x: "45", width: "10", height: "30", rx: "3"}, [u("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "30;45;13;80;56;72;45;76;34;23;67;30",
    calcMode: "linear",
    repeatCount: "indefinite"
})])])];
var uw = ve({
    name: "QSpinnerAudio", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            fill: "currentColor",
            width: t.value,
            height: t.value,
            viewBox: "0 0 55 80",
            xmlns: "http://www.w3.org/2000/svg"
        }, sw)
    }
});
const cw = [u("g", {
    transform: "translate(1 1)",
    "stroke-width": "2",
    fill: "none",
    "fill-rule": "evenodd"
}, [u("circle", {cx: "5", cy: "50", r: "5"}, [u("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;5;50;50",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    values: "5;27;49;5",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "27", cy: "5", r: "5"}, [u("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    from: "5",
    to: "5",
    values: "5;50;50;5",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "cx",
    begin: "0s",
    dur: "2.2s",
    from: "27",
    to: "27",
    values: "27;49;5;27",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "49", cy: "50", r: "5"}, [u("animate", {
    attributeName: "cy",
    begin: "0s",
    dur: "2.2s",
    values: "50;50;5;50",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "cx",
    from: "49",
    to: "49",
    begin: "0s",
    dur: "2.2s",
    values: "49;5;27;49",
    calcMode: "linear",
    repeatCount: "indefinite"
})])])];
var dw = ve({
    name: "QSpinnerBall", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            stroke: "currentColor",
            width: t.value,
            height: t.value,
            viewBox: "0 0 57 57",
            xmlns: "http://www.w3.org/2000/svg"
        }, cw)
    }
});
const fw = [u("rect", {y: "10", width: "15", height: "120", rx: "6"}, [u("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("rect", {x: "30", y: "10", width: "15", height: "120", rx: "6"}, [u("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("rect", {x: "60", width: "15", height: "140", rx: "6"}, [u("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "y",
    begin: "0s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("rect", {x: "90", y: "10", width: "15", height: "120", rx: "6"}, [u("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("rect", {x: "120", y: "10", width: "15", height: "120", rx: "6"}, [u("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
})])];
var vw = ve({
    name: "QSpinnerBars", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            fill: "currentColor",
            width: t.value,
            height: t.value,
            viewBox: "0 0 135 140",
            xmlns: "http://www.w3.org/2000/svg"
        }, fw)
    }
});
const pw = [u("rect", {
    x: "25",
    y: "25",
    width: "50",
    height: "50",
    fill: "none",
    "stroke-width": "4",
    stroke: "currentColor"
}, [u("animateTransform", {
    id: "spinnerBox",
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "180 50 50",
    dur: "0.5s",
    begin: "rectBox.end"
})]), u("rect", {x: "27", y: "27", width: "46", height: "50", fill: "currentColor"}, [u("animate", {
    id: "rectBox",
    attributeName: "height",
    begin: "0s;spinnerBox.end",
    dur: "1.3s",
    from: "50",
    to: "0",
    fill: "freeze"
})])];
var mw = ve({
    name: "QSpinnerBox", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            xmlns: "http://www.w3.org/2000/svg"
        }, pw)
    }
});
const hw = [u("circle", {
    cx: "50",
    cy: "50",
    r: "48",
    fill: "none",
    "stroke-width": "4",
    "stroke-miterlimit": "10",
    stroke: "currentColor"
}), u("line", {
    "stroke-linecap": "round",
    "stroke-width": "4",
    "stroke-miterlimit": "10",
    stroke: "currentColor",
    x1: "50",
    y1: "50",
    x2: "85",
    y2: "50.5"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    dur: "2s",
    repeatCount: "indefinite"
})]), u("line", {
    "stroke-linecap": "round",
    "stroke-width": "4",
    "stroke-miterlimit": "10",
    stroke: "currentColor",
    x1: "50",
    y1: "50",
    x2: "49.5",
    y2: "74"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    dur: "15s",
    repeatCount: "indefinite"
})])];
var gw = ve({
    name: "QSpinnerClock", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            xmlns: "http://www.w3.org/2000/svg"
        }, hw)
    }
});
const bw = [u("rect", {
    x: "0",
    y: "0",
    width: "100",
    height: "100",
    fill: "none"
}), u("path", {
    d: "M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z",
    fill: "currentColor"
}), u("circle", {cx: "30", cy: "47", r: "5", fill: "#fff"}, [u("animate", {
    attributeName: "opacity",
    from: "0",
    to: "1",
    values: "0;1;1",
    keyTimes: "0;0.2;1",
    dur: "1s",
    repeatCount: "indefinite"
})]), u("circle", {cx: "50", cy: "47", r: "5", fill: "#fff"}, [u("animate", {
    attributeName: "opacity",
    from: "0",
    to: "1",
    values: "0;0;1;1",
    keyTimes: "0;0.2;0.4;1",
    dur: "1s",
    repeatCount: "indefinite"
})]), u("circle", {cx: "70", cy: "47", r: "5", fill: "#fff"}, [u("animate", {
    attributeName: "opacity",
    from: "0",
    to: "1",
    values: "0;0;1;1",
    keyTimes: "0;0.4;0.6;1",
    dur: "1s",
    repeatCount: "indefinite"
})])];
var yw = ve({
    name: "QSpinnerComment", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid"
        }, bw)
    }
});
const _w = [u("rect", {
    x: "0",
    y: "0",
    width: "100",
    height: "100",
    fill: "none"
}), u("g", {transform: "translate(25 25)"}, [u("rect", {
    x: "-20",
    y: "-20",
    width: "40",
    height: "40",
    fill: "currentColor",
    opacity: "0.9"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "scale",
    from: "1.5",
    to: "1",
    repeatCount: "indefinite",
    begin: "0s",
    dur: "1s",
    calcMode: "spline",
    keySplines: "0.2 0.8 0.2 0.8",
    keyTimes: "0;1"
})])]), u("g", {transform: "translate(75 25)"}, [u("rect", {
    x: "-20",
    y: "-20",
    width: "40",
    height: "40",
    fill: "currentColor",
    opacity: "0.8"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "scale",
    from: "1.5",
    to: "1",
    repeatCount: "indefinite",
    begin: "0.1s",
    dur: "1s",
    calcMode: "spline",
    keySplines: "0.2 0.8 0.2 0.8",
    keyTimes: "0;1"
})])]), u("g", {transform: "translate(25 75)"}, [u("rect", {
    x: "-20",
    y: "-20",
    width: "40",
    height: "40",
    fill: "currentColor",
    opacity: "0.7"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "scale",
    from: "1.5",
    to: "1",
    repeatCount: "indefinite",
    begin: "0.3s",
    dur: "1s",
    calcMode: "spline",
    keySplines: "0.2 0.8 0.2 0.8",
    keyTimes: "0;1"
})])]), u("g", {transform: "translate(75 75)"}, [u("rect", {
    x: "-20",
    y: "-20",
    width: "40",
    height: "40",
    fill: "currentColor",
    opacity: "0.6"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "scale",
    from: "1.5",
    to: "1",
    repeatCount: "indefinite",
    begin: "0.2s",
    dur: "1s",
    calcMode: "spline",
    keySplines: "0.2 0.8 0.2 0.8",
    keyTimes: "0;1"
})])])];
var ww = ve({
    name: "QSpinnerCube", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid"
        }, _w)
    }
});
const xw = [u("circle", {cx: "15", cy: "15", r: "15"}, [u("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "60", cy: "15", r: "9", "fill-opacity": ".3"}, [u("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "fill-opacity",
    from: ".5",
    to: ".5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "105", cy: "15", r: "15"}, [u("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
})])];
var Sw = ve({
    name: "QSpinnerDots", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            fill: "currentColor",
            width: t.value,
            height: t.value,
            viewBox: "0 0 120 30",
            xmlns: "http://www.w3.org/2000/svg"
        }, xw)
    }
});
const Cw = [u("g", {transform: "translate(20 50)"}, [u("rect", {
    x: "-10",
    y: "-30",
    width: "20",
    height: "60",
    fill: "currentColor",
    opacity: "0.6"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "scale",
    from: "2",
    to: "1",
    begin: "0s",
    repeatCount: "indefinite",
    dur: "1s",
    calcMode: "spline",
    keySplines: "0.1 0.9 0.4 1",
    keyTimes: "0;1",
    values: "2;1"
})])]), u("g", {transform: "translate(50 50)"}, [u("rect", {
    x: "-10",
    y: "-30",
    width: "20",
    height: "60",
    fill: "currentColor",
    opacity: "0.8"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "scale",
    from: "2",
    to: "1",
    begin: "0.1s",
    repeatCount: "indefinite",
    dur: "1s",
    calcMode: "spline",
    keySplines: "0.1 0.9 0.4 1",
    keyTimes: "0;1",
    values: "2;1"
})])]), u("g", {transform: "translate(80 50)"}, [u("rect", {
    x: "-10",
    y: "-30",
    width: "20",
    height: "60",
    fill: "currentColor",
    opacity: "0.9"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "scale",
    from: "2",
    to: "1",
    begin: "0.2s",
    repeatCount: "indefinite",
    dur: "1s",
    calcMode: "spline",
    keySplines: "0.1 0.9 0.4 1",
    keyTimes: "0;1",
    values: "2;1"
})])])];
var kw = ve({
    name: "QSpinnerFacebook", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "xMidYMid"
        }, Cw)
    }
});
const qw = [u("g", {transform: "translate(-20,-20)"}, [u("path", {
    d: "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",
    fill: "currentColor"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "90 50 50",
    to: "0 50 50",
    dur: "1s",
    repeatCount: "indefinite"
})])]), u("g", {transform: "translate(20,20) rotate(15 50 50)"}, [u("path", {
    d: "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",
    fill: "currentColor"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "90 50 50",
    dur: "1s",
    repeatCount: "indefinite"
})])])];
var Tw = ve({
    name: "QSpinnerGears", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            xmlns: "http://www.w3.org/2000/svg"
        }, qw)
    }
});
const $w = [u("circle", {cx: "12.5", cy: "12.5", r: "12.5"}, [u("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {
    cx: "12.5",
    cy: "52.5",
    r: "12.5",
    "fill-opacity": ".5"
}, [u("animate", {
    attributeName: "fill-opacity",
    begin: "100ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "52.5", cy: "12.5", r: "12.5"}, [u("animate", {
    attributeName: "fill-opacity",
    begin: "300ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "52.5", cy: "52.5", r: "12.5"}, [u("animate", {
    attributeName: "fill-opacity",
    begin: "600ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "92.5", cy: "12.5", r: "12.5"}, [u("animate", {
    attributeName: "fill-opacity",
    begin: "800ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "92.5", cy: "52.5", r: "12.5"}, [u("animate", {
    attributeName: "fill-opacity",
    begin: "400ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "12.5", cy: "92.5", r: "12.5"}, [u("animate", {
    attributeName: "fill-opacity",
    begin: "700ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "52.5", cy: "92.5", r: "12.5"}, [u("animate", {
    attributeName: "fill-opacity",
    begin: "500ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "92.5", cy: "92.5", r: "12.5"}, [u("animate", {
    attributeName: "fill-opacity",
    begin: "200ms",
    dur: "1s",
    values: "1;.2;1",
    calcMode: "linear",
    repeatCount: "indefinite"
})])];
var Mw = ve({
    name: "QSpinnerGrid", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            fill: "currentColor",
            width: t.value,
            height: t.value,
            viewBox: "0 0 105 105",
            xmlns: "http://www.w3.org/2000/svg"
        }, $w)
    }
});
const Ew = [u("path", {
    d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
    "fill-opacity": ".5"
}, [u("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("path", {
    d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
    "fill-opacity": ".5"
}, [u("animate", {
    attributeName: "fill-opacity",
    begin: "0.7s",
    dur: "1.4s",
    values: "0.5;1;0.5",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("path", {d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"})];
var Pw = ve({
    name: "QSpinnerHearts", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            fill: "currentColor",
            width: t.value,
            height: t.value,
            viewBox: "0 0 140 64",
            xmlns: "http://www.w3.org/2000/svg"
        }, Ew)
    }
});
const Aw = [u("g", [u("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "5",
    "stroke-miterlimit": "10",
    d: "M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"
}), u("clipPath", {id: "uil-hourglass-clip1"}, [u("rect", {
    x: "15",
    y: "20",
    width: "70",
    height: "25"
}, [u("animate", {
    attributeName: "height",
    from: "25",
    to: "0",
    dur: "1s",
    repeatCount: "indefinite",
    values: "25;0;0",
    keyTimes: "0;0.5;1"
}), u("animate", {
    attributeName: "y",
    from: "20",
    to: "45",
    dur: "1s",
    repeatCount: "indefinite",
    values: "20;45;45",
    keyTimes: "0;0.5;1"
})])]), u("clipPath", {id: "uil-hourglass-clip2"}, [u("rect", {
    x: "15",
    y: "55",
    width: "70",
    height: "25"
}, [u("animate", {
    attributeName: "height",
    from: "0",
    to: "25",
    dur: "1s",
    repeatCount: "indefinite",
    values: "0;25;25",
    keyTimes: "0;0.5;1"
}), u("animate", {
    attributeName: "y",
    from: "80",
    to: "55",
    dur: "1s",
    repeatCount: "indefinite",
    values: "80;55;55",
    keyTimes: "0;0.5;1"
})])]), u("path", {
    d: "M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z",
    "clip-path": "url(#uil-hourglass-clip1)",
    fill: "currentColor"
}), u("path", {
    d: "M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z",
    "clip-path": "url(#uil-hourglass-clip2)",
    fill: "currentColor"
}), u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "180 50 50",
    repeatCount: "indefinite",
    dur: "1s",
    values: "0 50 50;0 50 50;180 50 50",
    keyTimes: "0;0.7;1"
})])];
var Bw = ve({
    name: "QSpinnerHourglass", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            xmlns: "http://www.w3.org/2000/svg"
        }, Aw)
    }
});
const Ow = [u("path", {
    d: "M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "8",
    "stroke-dasharray": "10.691205342610678 10.691205342610678",
    "stroke-dashoffset": "0"
}, [u("animate", {
    attributeName: "stroke-dashoffset",
    from: "0",
    to: "21.382410685221355",
    begin: "0",
    dur: "2s",
    repeatCount: "indefinite",
    fill: "freeze"
})])];
var Lw = ve({
    name: "QSpinnerInfinity", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid"
        }, Ow)
    }
});
const Rw = [u("g", {"stroke-width": "4", "stroke-linecap": "round"}, [u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(180)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",
    repeatCount: "indefinite"
})]), u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(210)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: "0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0",
    repeatCount: "indefinite"
})]), u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(240)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: ".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1",
    repeatCount: "indefinite"
})]), u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(270)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: ".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15",
    repeatCount: "indefinite"
})]), u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(300)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: ".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25",
    repeatCount: "indefinite"
})]), u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(330)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: ".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35",
    repeatCount: "indefinite"
})]), u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(0)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: ".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45",
    repeatCount: "indefinite"
})]), u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(30)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: ".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55",
    repeatCount: "indefinite"
})]), u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(60)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: ".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65",
    repeatCount: "indefinite"
})]), u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(90)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: ".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7",
    repeatCount: "indefinite"
})]), u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(120)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: ".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85",
    repeatCount: "indefinite"
})]), u("line", {
    y1: "17",
    y2: "29",
    transform: "translate(32,32) rotate(150)"
}, [u("animate", {
    attributeName: "stroke-opacity",
    dur: "750ms",
    values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1",
    repeatCount: "indefinite"
})])])];
var Vw = ve({
    name: "QSpinnerIos", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            stroke: "currentColor",
            fill: "currentColor",
            viewBox: "0 0 64 64"
        }, Rw)
    }
});
const Fw = [u("circle", {
    cx: "50",
    cy: "50",
    r: "44",
    fill: "none",
    "stroke-width": "4",
    "stroke-opacity": ".5",
    stroke: "currentColor"
}), u("circle", {
    cx: "8",
    cy: "54",
    r: "6",
    fill: "currentColor",
    "stroke-width": "3",
    stroke: "currentColor"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 48",
    to: "360 50 52",
    dur: "2s",
    repeatCount: "indefinite"
})])];
var zw = ve({
    name: "QSpinnerOrbit", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            xmlns: "http://www.w3.org/2000/svg"
        }, Fw)
    }
});
const Nw = [u("g", {
    transform: "translate(1 1)",
    "stroke-width": "2",
    fill: "none",
    "fill-rule": "evenodd"
}, [u("circle", {
    "stroke-opacity": ".5",
    cx: "18",
    cy: "18",
    r: "18"
}), u("path", {d: "M36 18c0-9.94-8.06-18-18-18"}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "1s",
    repeatCount: "indefinite"
})])])];
var Iw = ve({
    name: "QSpinnerOval", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            stroke: "currentColor",
            width: t.value,
            height: t.value,
            viewBox: "0 0 38 38",
            xmlns: "http://www.w3.org/2000/svg"
        }, Nw)
    }
});
const Dw = [u("path", {
    d: "M0 50A50 50 0 0 1 50 0L50 50L0 50",
    fill: "currentColor",
    opacity: "0.5"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    dur: "0.8s",
    repeatCount: "indefinite"
})]), u("path", {
    d: "M50 0A50 50 0 0 1 100 50L50 50L50 0",
    fill: "currentColor",
    opacity: "0.5"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    dur: "1.6s",
    repeatCount: "indefinite"
})]), u("path", {
    d: "M100 50A50 50 0 0 1 50 100L50 50L100 50",
    fill: "currentColor",
    opacity: "0.5"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    dur: "2.4s",
    repeatCount: "indefinite"
})]), u("path", {
    d: "M50 100A50 50 0 0 1 0 50L50 50L50 100",
    fill: "currentColor",
    opacity: "0.5"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    dur: "3.2s",
    repeatCount: "indefinite"
})])];
var Hw = ve({
    name: "QSpinnerPie", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            xmlns: "http://www.w3.org/2000/svg"
        }, Dw)
    }
});
const jw = [u("g", {fill: "none", "fill-rule": "evenodd", "stroke-width": "2"}, [u("circle", {
    cx: "22",
    cy: "22",
    r: "1"
}, [u("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "stroke-opacity",
    begin: "0s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
})]), u("circle", {cx: "22", cy: "22", r: "1"}, [u("animate", {
    attributeName: "r",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 20",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.165, 0.84, 0.44, 1",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "stroke-opacity",
    begin: "-0.9s",
    dur: "1.8s",
    values: "1; 0",
    calcMode: "spline",
    keyTimes: "0; 1",
    keySplines: "0.3, 0.61, 0.355, 1",
    repeatCount: "indefinite"
})])])];
var Qw = ve({
    name: "QSpinnerPuff", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            stroke: "currentColor",
            width: t.value,
            height: t.value,
            viewBox: "0 0 44 44",
            xmlns: "http://www.w3.org/2000/svg"
        }, jw)
    }
});
const Kw = [u("g", {transform: "scale(0.55)"}, [u("circle", {
    cx: "30",
    cy: "150",
    r: "30",
    fill: "currentColor"
}, [u("animate", {
    attributeName: "opacity",
    from: "0",
    to: "1",
    dur: "1s",
    begin: "0",
    repeatCount: "indefinite",
    keyTimes: "0;0.5;1",
    values: "0;1;1"
})]), u("path", {
    d: "M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z",
    fill: "currentColor"
}, [u("animate", {
    attributeName: "opacity",
    from: "0",
    to: "1",
    dur: "1s",
    begin: "0.1",
    repeatCount: "indefinite",
    keyTimes: "0;0.5;1",
    values: "0;1;1"
})]), u("path", {
    d: "M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z",
    fill: "currentColor"
}, [u("animate", {
    attributeName: "opacity",
    from: "0",
    to: "1",
    dur: "1s",
    begin: "0.2",
    repeatCount: "indefinite",
    keyTimes: "0;0.5;1",
    values: "0;1;1"
})])])];
var Uw = ve({
    name: "QSpinnerRadio", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            xmlns: "http://www.w3.org/2000/svg"
        }, Kw)
    }
});
const Ww = [u("g", {
    fill: "none",
    "fill-rule": "evenodd",
    transform: "translate(1 1)",
    "stroke-width": "2"
}, [u("circle", {cx: "22", cy: "22", r: "6"}, [u("animate", {
    attributeName: "r",
    begin: "1.5s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "stroke-opacity",
    begin: "1.5s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "stroke-width",
    begin: "1.5s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "22", cy: "22", r: "6"}, [u("animate", {
    attributeName: "r",
    begin: "3s",
    dur: "3s",
    values: "6;22",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "stroke-opacity",
    begin: "3s",
    dur: "3s",
    values: "1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
}), u("animate", {
    attributeName: "stroke-width",
    begin: "3s",
    dur: "3s",
    values: "2;0",
    calcMode: "linear",
    repeatCount: "indefinite"
})]), u("circle", {cx: "22", cy: "22", r: "8"}, [u("animate", {
    attributeName: "r",
    begin: "0s",
    dur: "1.5s",
    values: "6;1;2;3;4;5;6",
    calcMode: "linear",
    repeatCount: "indefinite"
})])])];
var Yw = ve({
    name: "QSpinnerRings", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            stroke: "currentColor",
            width: t.value,
            height: t.value,
            viewBox: "0 0 45 45",
            xmlns: "http://www.w3.org/2000/svg"
        }, Ww)
    }
});
const Xw = [u("defs", [u("linearGradient", {
    x1: "8.042%",
    y1: "0%",
    x2: "65.682%",
    y2: "23.865%",
    id: "a"
}, [u("stop", {
    "stop-color": "currentColor",
    "stop-opacity": "0",
    offset: "0%"
}), u("stop", {
    "stop-color": "currentColor",
    "stop-opacity": ".631",
    offset: "63.146%"
}), u("stop", {"stop-color": "currentColor", offset: "100%"})])]), u("g", {
    transform: "translate(1 1)",
    fill: "none",
    "fill-rule": "evenodd"
}, [u("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    stroke: "url(#a)",
    "stroke-width": "2"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
})]), u("circle", {
    fill: "currentColor",
    cx: "36",
    cy: "18",
    r: "1"
}, [u("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
})])])];
var Zw = ve({
    name: "QSpinnerTail", props: kt, setup(e) {
        const {cSize: t, classes: n} = qt(e);
        return () => u("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            viewBox: "0 0 38 38",
            xmlns: "http://www.w3.org/2000/svg"
        }, Xw)
    }
}), Gw = ve({
    name: "QSplitter",
    props: {
        ...Ge,
        modelValue: {type: Number, required: !0},
        reverse: Boolean,
        unit: {type: String, default: "%", validator: e => ["%", "px"].includes(e)},
        limits: {
            type: Array,
            validator: e => e.length === 2 && typeof e[0] == "number" && typeof e[1] == "number" && e[0] >= 0 && e[0] <= e[1]
        },
        emitImmediately: Boolean,
        horizontal: Boolean,
        disable: Boolean,
        beforeClass: [Array, String, Object],
        afterClass: [Array, String, Object],
        separatorClass: [Array, String, Object],
        separatorStyle: [Array, String, Object]
    },
    emits: ["update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: o}} = Se(), l = Je(e, o), a = D(null), i = {before: D(null), after: D(null)},
            r = f(() => `q-splitter no-wrap ${e.horizontal === !0 ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === !0 ? "disabled" : "workable"}` + (l.value === !0 ? " q-splitter--dark" : "")),
            s = f(() => e.horizontal === !0 ? "height" : "width"), d = f(() => e.reverse !== !0 ? "before" : "after"),
            c = f(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);

        function p(C) {
            return (e.unit === "%" ? C : Math.round(C)) + e.unit
        }

        const v = f(() => ({[d.value]: {[s.value]: p(e.modelValue)}}));
        let m, g, x, w, S;

        function y(C) {
            if (C.isFirst === !0) {
                const L = a.value.getBoundingClientRect()[s.value];
                return m = e.horizontal === !0 ? "up" : "left", g = e.unit === "%" ? 100 : L, x = Math.min(g, c.value[1], Math.max(c.value[0], e.modelValue)), w = (e.reverse !== !0 ? 1 : -1) * (e.horizontal === !0 ? 1 : o.lang.rtl === !0 ? -1 : 1) * (e.unit === "%" ? L === 0 ? 0 : 100 / L : 1), void a.value.classList.add("q-splitter--active")
            }
            if (C.isFinal === !0) return S !== e.modelValue && n("update:modelValue", S), void a.value.classList.remove("q-splitter--active");
            const A = x + w * (C.direction === m ? -1 : 1) * C.distance[e.horizontal === !0 ? "y" : "x"];
            S = Math.min(g, c.value[1], Math.max(c.value[0], A)), i[d.value].value.style[s.value] = p(S), e.emitImmediately === !0 && e.modelValue !== S && n("update:modelValue", S)
        }

        const b = f(() => [[Jt, y, void 0, {
            [e.horizontal === !0 ? "vertical" : "horizontal"]: !0,
            prevent: !0,
            stop: !0,
            mouse: !0,
            mouseAllDir: !0
        }]]);

        function h(C, A) {
            C < A[0] ? n("update:modelValue", A[0]) : C > A[1] && n("update:modelValue", A[1])
        }

        return pe(() => e.modelValue, C => {
            h(C, c.value)
        }), pe(() => e.limits, () => {
            We(() => {
                h(e.modelValue, c.value)
            })
        }), () => {
            const C = [u("div", {
                ref: i.before,
                class: ["q-splitter__panel q-splitter__before" + (e.reverse === !0 ? " col" : ""), e.beforeClass],
                style: v.value.before
            }, Ae(t.before)), u("div", {
                class: ["q-splitter__separator", e.separatorClass],
                style: e.separatorStyle,
                "aria-disabled": e.disable === !0 ? "true" : void 0
            }, [fn("div", {class: "q-splitter__separator-area absolute-full"}, Ae(t.separator), "sep", e.disable !== !0, () => b.value)]), u("div", {
                ref: i.after,
                class: ["q-splitter__panel q-splitter__after" + (e.reverse === !0 ? "" : " col"), e.afterClass],
                style: v.value.after
            }, Ae(t.after))];
            return u("div", {class: r.value, ref: a}, St(t.default, C))
        }
    }
}), _0 = ve({
    name: "StepHeader", props: {stepper: {}, step: {}, goToPanel: Function}, setup(e, {attrs: t}) {
        const {proxy: {$q: n}} = Se(), o = D(null), l = f(() => e.stepper.modelValue === e.step.name), a = f(() => {
                const w = e.step.disable;
                return w === !0 || w === ""
            }), i = f(() => {
                const w = e.step.error;
                return w === !0 || w === ""
            }), r = f(() => {
                const w = e.step.done;
                return a.value === !1 && (w === !0 || w === "")
            }), s = f(() => {
                const w = e.step.headerNav, S = w === !0 || w === "" || w === void 0;
                return a.value === !1 && e.stepper.headerNav && S
            }),
            d = f(() => e.step.prefix && (l.value === !1 || e.stepper.activeIcon === "none") && (i.value === !1 || e.stepper.errorIcon === "none") && (r.value === !1 || e.stepper.doneIcon === "none")),
            c = f(() => {
                const w = e.step.icon || e.stepper.inactiveIcon;
                if (l.value === !0) {
                    const S = e.step.activeIcon || e.stepper.activeIcon;
                    return S === "none" ? w : S || n.iconSet.stepper.active
                }
                if (i.value === !0) {
                    const S = e.step.errorIcon || e.stepper.errorIcon;
                    return S === "none" ? w : S || n.iconSet.stepper.error
                }
                if (a.value === !1 && r.value === !0) {
                    const S = e.step.doneIcon || e.stepper.doneIcon;
                    return S === "none" ? w : S || n.iconSet.stepper.done
                }
                return w
            }), p = f(() => {
                const w = i.value === !0 ? e.step.errorColor || e.stepper.errorColor : void 0;
                if (l.value === !0) {
                    const S = e.step.activeColor || e.stepper.activeColor || e.step.color;
                    return S !== void 0 ? S : w
                }
                return w !== void 0 ? w : a.value === !1 && r.value === !0 ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor
            }),
            v = f(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (p.value !== void 0 ? ` text-${p.value}` : "") + (i.value === !0 ? " q-stepper__tab--error q-stepper__tab--error-with-" + (d.value === !0 ? "prefix" : "icon") : "") + (l.value === !0 ? " q-stepper__tab--active" : "") + (r.value === !0 ? " q-stepper__tab--done" : "") + (s.value === !0 ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (a.value === !0 ? " q-stepper__tab--disabled" : "")),
            m = f(() => e.stepper.headerNav === !0 && s.value);

        function g() {
            o.value !== null && o.value.focus(), l.value === !1 && e.goToPanel(e.step.name)
        }

        function x(w) {
            w.keyCode === 13 && l.value === !1 && e.goToPanel(e.step.name)
        }

        return () => {
            const w = {class: v.value};
            s.value === !0 && (w.onClick = g, w.onKeyup = x, Object.assign(w, a.value === !0 ? {
                tabindex: -1,
                "aria-disabled": "true"
            } : {tabindex: t.tabindex || 0}));
            const S = [u("div", {
                class: "q-focus-helper",
                tabindex: -1,
                ref: o
            }), u("div", {class: "q-stepper__dot row flex-center q-stepper__line relative-position"}, [u("span", {class: "row flex-center"}, [d.value === !0 ? e.step.prefix : u(Ze, {name: c.value})])])];
            if (e.step.title !== void 0 && e.step.title !== null) {
                const y = [u("div", {class: "q-stepper__title"}, e.step.title)];
                e.step.caption !== void 0 && e.step.caption !== null && y.push(u("div", {class: "q-stepper__caption"}, e.step.caption)), S.push(u("div", {class: "q-stepper__label q-stepper__line relative-position"}, y))
            }
            return Sn(u("div", w, S), [[ba, m.value]])
        }
    }
});

function w0(e) {
    return u("div", {class: "q-stepper__step-content"}, [u("div", {class: "q-stepper__step-inner"}, Ae(e.default))])
}

const Id = {
    setup(e, {slots: t}) {
        return () => w0(t)
    }
};
var Jw = ve({
    name: "QStep",
    props: {
        ...du,
        icon: String,
        color: String,
        title: {type: String, required: !0},
        caption: String,
        prefix: [String, Number],
        doneIcon: String,
        doneColor: String,
        activeIcon: String,
        activeColor: String,
        errorIcon: String,
        errorColor: String,
        headerNav: {type: Boolean, default: !0},
        done: Boolean,
        error: Boolean,
        onScroll: [Function, Array]
    },
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: o}} = Se(), l = vt(Av, at);
        if (l === at) return console.error("QStep needs to be a child of QStepper"), at;
        const {getCacheWithFn: a} = Sa(), i = D(null), r = f(() => l.value.modelValue === e.name),
            s = f(() => o.platform.is.ios !== !0 && o.platform.is.chrome === !0 || r.value !== !0 || l.value.vertical !== !0 ? {} : {
                onScroll(p) {
                    const {target: v} = p;
                    v.scrollTop > 0 && (v.scrollTop = 0), e.onScroll !== void 0 && n("scroll", p)
                }
            }), d = f(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));

        function c() {
            const p = l.value.vertical;
            return p === !0 && l.value.keepAlive === !0 ? u(If, l.value.keepAliveProps.value, r.value === !0 ? [u(l.value.needsUniqueKeepAliveWrapper.value === !0 ? a(d.value, () => ({
                ...Id,
                name: d.value
            })) : Id, {key: d.value}, t.default)] : void 0) : p !== !0 || r.value === !0 ? w0(t) : void 0
        }

        return () => u("div", {
            ref: i,
            class: "q-stepper__step",
            role: "tabpanel", ...s.value
        }, l.value.vertical === !0 ? [u(_0, {
            stepper: l.value,
            step: e,
            goToPanel: l.value.goToPanel
        }), l.value.animated === !0 ? u(ir, c) : c()] : [c()])
    }
});
const ex = /(-\w)/g;

function tx(e) {
    const t = {};
    for (const n in e) {
        const o = n.replace(ex, l => l[1].toUpperCase());
        t[o] = e[n]
    }
    return t
}

var nx = ve({
    name: "QStepper",
    props: {
        ...Ge, ...fu,
        flat: Boolean,
        bordered: Boolean,
        alternativeLabels: Boolean,
        headerNav: Boolean,
        contracted: Boolean,
        headerClass: String,
        inactiveColor: String,
        inactiveIcon: String,
        doneIcon: String,
        doneColor: String,
        activeIcon: String,
        activeColor: String,
        errorIcon: String,
        errorColor: String
    },
    emits: vu,
    setup(e, {slots: t}) {
        const n = Se(), o = Je(e, n.proxy.$q), {
            updatePanelsList: l,
            isValidPanelName: a,
            updatePanelIndex: i,
            getPanelContent: r,
            getPanels: s,
            panelDirectives: d,
            goToPanel: c,
            keepAliveProps: p,
            needsUniqueKeepAliveWrapper: v
        } = pu();
        un(Av, f(() => ({goToPanel: c, keepAliveProps: p, needsUniqueKeepAliveWrapper: v, ...e})));
        const m = f(() => `q-stepper q-stepper--${e.vertical === !0 ? "vertical" : "horizontal"}` + (e.flat === !0 ? " q-stepper--flat" : "") + (e.bordered === !0 ? " q-stepper--bordered" : "") + (o.value === !0 ? " q-stepper--dark q-dark" : "")),
            g = f(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === !0 ? "alternative" : "standard"}-labels` + (e.flat === !1 || e.bordered === !0 ? " q-stepper__header--border" : "") + (e.contracted === !0 ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));

        function x() {
            const w = Ae(t.message, []);
            if (e.vertical === !0) {
                a(e.modelValue) && i();
                const S = u("div", {class: "q-stepper__content"}, Ae(t.default));
                return w === void 0 ? [S] : w.concat(S)
            }
            return [u("div", {class: g.value}, s().map(S => {
                const y = tx(S.props);
                return u(_0, {key: y.name, stepper: e, step: y, goToPanel: c})
            })), w, fn("div", {class: "q-stepper__content q-panel-parent"}, r(), "cont", e.swipeable, () => d.value)]
        }

        return () => (l(t), u("div", {class: m.value}, St(t.navigation, x())))
    }
}), ox = ve({
    name: "QStepperNavigation", setup(e, {slots: t}) {
        return () => u("div", {class: "q-stepper__nav"}, Ae(t.default))
    }
}), x0 = ve({
    name: "QTh", props: {props: Object, autoWidth: Boolean}, emits: ["click"], setup(e, {slots: t, emit: n}) {
        const o = Se(), {proxy: {$q: l}} = o, a = i => {
            n("click", i)
        };
        return () => {
            if (e.props === void 0) return u("th", {
                class: e.autoWidth === !0 ? "q-table--col-auto-width" : "",
                onClick: a
            }, Ae(t.default));
            let i, r;
            const s = o.vnode.key;
            if (s) {
                if (i = e.props.colsMap[s], i === void 0) return
            } else i = e.props.col;
            if (i.sortable === !0) {
                const c = i.align === "right" ? "unshift" : "push";
                r = ha(t.default, []), r[c](u(Ze, {class: i.__iconClass, name: l.iconSet.table.arrowUp}))
            } else r = Ae(t.default);
            const d = {
                class: i.__thClass + (e.autoWidth === !0 ? " q-table--col-auto-width" : ""),
                style: i.headerStyle,
                onClick: c => {
                    i.sortable === !0 && e.props.sort(i), a(c)
                }
            };
            return u("th", d, r)
        }
    }
});

function S0(e, t) {
    return u("div", e, [u("table", {class: "q-table"}, t)])
}

const lx = {list: a0, table: i0}, ax = ["list", "table", "__qtable"];
var C0 = ve({
    name: "QVirtualScroll",
    props: {
        ...g0,
        type: {type: String, default: "list", validator: e => ax.includes(e)},
        items: {type: Array, default: () => []},
        itemsFn: Function,
        itemsSize: Number,
        scrollTarget: {default: void 0}
    },
    setup(e, {slots: t, attrs: n}) {
        let o;
        const l = D(null),
            a = f(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), {
                virtualScrollSliceRange: i,
                localResetVirtualScroll: r,
                padVirtualScroll: s,
                onVirtualScrollEvt: d
            } = b0({virtualScrollLength: a, getVirtualScrollTarget: g, getVirtualScrollEl: m}), c = f(() => {
                if (a.value === 0) return [];
                const y = (b, h) => ({index: i.value.from + h, item: b});
                return e.itemsFn === void 0 ? e.items.slice(i.value.from, i.value.to).map(y) : e.itemsFn(i.value.from, i.value.to - i.value.from).map(y)
            }),
            p = f(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === !0 ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")),
            v = f(() => e.scrollTarget !== void 0 ? {} : {tabindex: 0});

        function m() {
            return l.value.$el || l.value
        }

        function g() {
            return o
        }

        function x() {
            o = An(m(), e.scrollTarget), o.addEventListener("scroll", d, ut.passive)
        }

        function w() {
            o !== void 0 && (o.removeEventListener("scroll", d, ut.passive), o = void 0)
        }

        function S() {
            let y = s(e.type === "list" ? "div" : "tbody", c.value.map(t.default));
            return t.before !== void 0 && (y = t.before().concat(y)), St(t.after, y)
        }

        return pe(a, () => {
            r()
        }), pe(() => e.scrollTarget, () => {
            w(), x()
        }), Ui(() => {
            r()
        }), mt(() => {
            x()
        }), Hn(() => {
            x()
        }), kn(() => {
            w()
        }), Ke(() => {
            w()
        }), () => {
            if (t.default !== void 0) return e.type === "__qtable" ? S0({
                ref: l,
                class: "q-table__middle " + p.value
            }, S()) : u(lx[e.type], {...n, ref: l, class: [n.class, p.value], ...v.value}, S);
            console.error("QVirtualScroll: default scoped slot is required for rendering")
        }
    }
});

function ix(e, t) {
    return new Date(e) - new Date(t)
}

const rx = {
    sortMethod: Function,
    binaryStateSort: Boolean,
    columnSortOrder: {type: String, validator: e => e === "ad" || e === "da", default: "ad"}
};

function sx(e, t, n, o) {
    const l = f(() => {
        const {sortBy: r} = t.value;
        return r && n.value.find(s => s.name === r) || null
    }), a = f(() => e.sortMethod !== void 0 ? e.sortMethod : (r, s, d) => {
        const c = n.value.find(m => m.name === s);
        if (c === void 0 || c.field === void 0) return r;
        const p = d === !0 ? -1 : 1, v = typeof c.field == "function" ? m => c.field(m) : m => m[c.field];
        return r.sort((m, g) => {
            let x = v(m), w = v(g);
            return c.rawSort !== void 0 ? c.rawSort(x, w, m, g) * p : x == null ? -1 * p : w == null ? 1 * p : c.sort !== void 0 ? c.sort(x, w, m, g) * p : da(x) === !0 && da(w) === !0 ? (x - w) * p : us(x) === !0 && us(w) === !0 ? ix(x, w) * p : typeof x == "boolean" && typeof w == "boolean" ? (x - w) * p : ([x, w] = [x, w].map(S => (S + "").toLocaleString().toLowerCase()), x < w ? -1 * p : x === w ? 0 : p)
        })
    });

    function i(r) {
        let s = e.columnSortOrder;
        if (Et(r) === !0) r.sortOrder && (s = r.sortOrder), r = r.name; else {
            const p = n.value.find(v => v.name === r);
            p !== void 0 && p.sortOrder && (s = p.sortOrder)
        }
        let {sortBy: d, descending: c} = t.value;
        d !== r ? (d = r, c = s === "da") : e.binaryStateSort === !0 ? c = !c : c === !0 ? s === "ad" ? d = null : c = !1 : s === "ad" ? c = !0 : d = null, o({
            sortBy: d,
            descending: c,
            page: 1
        })
    }

    return {columnToSort: l, computedSortMethod: a, sort: i}
}

const ux = {filter: [String, Object], filterMethod: Function};

function cx(e, t) {
    const n = f(() => e.filterMethod !== void 0 ? e.filterMethod : (o, l, a, i) => {
        const r = l ? l.toLowerCase() : "";
        return o.filter(s => a.some(d => {
            const c = i(d, s) + "";
            return (c === "undefined" || c === "null" ? "" : c.toLowerCase()).indexOf(r) !== -1
        }))
    });
    return pe(() => e.filter, () => {
        We(() => {
            t({page: 1}, !0)
        })
    }, {deep: !0}), {computedFilterMethod: n}
}

function dx(e, t) {
    for (const n in t) if (t[n] !== e[n]) return !1;
    return !0
}

function Dd(e) {
    return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e
}

const fx = {
    pagination: Object,
    rowsPerPageOptions: {type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0]},
    "onUpdate:pagination": [Function, Array]
};

function vx(e, t) {
    const {props: n, emit: o} = e, l = D(Object.assign({
        sortBy: null,
        descending: !1,
        page: 1,
        rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5
    }, n.pagination)), a = f(() => {
        const c = n["onUpdate:pagination"] !== void 0 ? {...l.value, ...n.pagination} : l.value;
        return Dd(c)
    }), i = f(() => a.value.rowsNumber !== void 0);

    function r(c) {
        s({pagination: c, filter: n.filter})
    }

    function s(c = {}) {
        We(() => {
            o("request", {pagination: c.pagination || a.value, filter: c.filter || n.filter, getCellValue: t})
        })
    }

    function d(c, p) {
        const v = Dd({...a.value, ...c});
        dx(a.value, v) !== !0 ? i.value !== !0 ? n.pagination !== void 0 && n["onUpdate:pagination"] !== void 0 ? o("update:pagination", v) : l.value = v : r(v) : i.value === !0 && p === !0 && r(v)
    }

    return {innerPagination: l, computedPagination: a, isServerSide: i, requestServerInteraction: s, setPagination: d}
}

function px(e, t, n, o, l, a) {
    const {props: i, emit: r, proxy: {$q: s}} = e, d = f(() => o.value === !0 ? n.value.rowsNumber || 0 : a.value),
        c = f(() => {
            const {page: h, rowsPerPage: C} = n.value;
            return (h - 1) * C
        }), p = f(() => {
            const {page: h, rowsPerPage: C} = n.value;
            return h * C
        }), v = f(() => n.value.page === 1),
        m = f(() => n.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(d.value / n.value.rowsPerPage))),
        g = f(() => p.value === 0 || n.value.page >= m.value),
        x = f(() => (i.rowsPerPageOptions.includes(t.value.rowsPerPage) ? i.rowsPerPageOptions : [t.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(C => ({
            label: C === 0 ? s.lang.table.allRows : "" + C,
            value: C
        })));

    function w() {
        l({page: 1})
    }

    function S() {
        const {page: h} = n.value;
        h > 1 && l({page: h - 1})
    }

    function y() {
        const {page: h, rowsPerPage: C} = n.value;
        p.value > 0 && h * C < d.value && l({page: h + 1})
    }

    function b() {
        l({page: m.value})
    }

    return pe(m, (h, C) => {
        if (h === C) return;
        const A = n.value.page;
        h && !A ? l({page: 1}) : h < A && l({page: h})
    }), i["onUpdate:pagination"] !== void 0 && r("update:pagination", {...n.value}), {
        firstRowIndex: c,
        lastRowIndex: p,
        isFirstPage: v,
        isLastPage: g,
        pagesNumber: m,
        computedRowsPerPageOptions: x,
        computedRowsNumber: d,
        firstPage: w,
        prevPage: S,
        nextPage: y,
        lastPage: b
    }
}

const mx = {
    selection: {type: String, default: "none", validator: e => ["single", "multiple", "none"].includes(e)},
    selected: {type: Array, default: () => []}
}, hx = ["update:selected", "selection"];

function gx(e, t, n, o) {
    const l = f(() => {
            const g = {};
            return e.selected.map(o.value).forEach(x => {
                g[x] = !0
            }), g
        }), a = f(() => e.selection !== "none"), i = f(() => e.selection === "single"),
        r = f(() => e.selection === "multiple"),
        s = f(() => n.value.length !== 0 && n.value.every(g => l.value[o.value(g)] === !0)),
        d = f(() => s.value !== !0 && n.value.some(g => l.value[o.value(g)] === !0)), c = f(() => e.selected.length);

    function p(g) {
        return l.value[g] === !0
    }

    function v() {
        t("update:selected", [])
    }

    function m(g, x, w, S) {
        t("selection", {rows: x, added: w, keys: g, evt: S});
        const y = i.value === !0 ? w === !0 ? x : [] : w === !0 ? e.selected.concat(x) : e.selected.filter(b => g.includes(o.value(b)) === !1);
        t("update:selected", y)
    }

    return {
        hasSelectionMode: a,
        singleSelection: i,
        multipleSelection: r,
        allRowsSelected: s,
        someRowsSelected: d,
        rowsSelectedNumber: c,
        isRowSelected: p,
        clearSelection: v,
        updateSelection: m
    }
}

function Hd(e) {
    return Array.isArray(e) ? e.slice() : []
}

const bx = {expanded: Array}, yx = ["update:expanded"];

function _x(e, t) {
    const n = D(Hd(e.expanded));

    function o(i) {
        return n.value.includes(i)
    }

    function l(i) {
        e.expanded !== void 0 ? t("update:expanded", i) : n.value = i
    }

    function a(i, r) {
        const s = n.value.slice(), d = s.indexOf(i);
        r === !0 ? d === -1 && (s.push(i), l(s)) : d !== -1 && (s.splice(d, 1), l(s))
    }

    return pe(() => e.expanded, i => {
        n.value = Hd(i)
    }), {isRowExpanded: o, setExpanded: l, updateExpanded: a}
}

const wx = {visibleColumns: Array};

function xx(e, t, n) {
    const o = f(() => {
        if (e.columns !== void 0) return e.columns;
        const r = e.rows[0];
        return r !== void 0 ? Object.keys(r).map(s => ({
            name: s,
            label: s.toUpperCase(),
            field: s,
            align: da(r[s]) ? "right" : "left",
            sortable: !0
        })) : []
    }), l = f(() => {
        const {sortBy: r, descending: s} = t.value;
        return (e.visibleColumns !== void 0 ? o.value.filter(c => c.required === !0 || e.visibleColumns.includes(c.name) === !0) : o.value).map(c => {
            const p = c.align || "right", v = `text-${p}`;
            return {
                ...c,
                align: p,
                __iconClass: `q-table__sort-icon q-table__sort-icon--${p}`,
                __thClass: v + (c.headerClasses !== void 0 ? " " + c.headerClasses : "") + (c.sortable === !0 ? " sortable" : "") + (c.name === r ? ` sorted ${s === !0 ? "sort-desc" : ""}` : ""),
                __tdStyle: c.style !== void 0 ? typeof c.style != "function" ? () => c.style : c.style : () => null,
                __tdClass: c.classes !== void 0 ? typeof c.classes != "function" ? () => v + " " + c.classes : m => v + " " + c.classes(m) : () => v
            }
        })
    }), a = f(() => {
        const r = {};
        return l.value.forEach(s => {
            r[s.name] = s
        }), r
    }), i = f(() => e.tableColspan !== void 0 ? e.tableColspan : l.value.length + (n.value === !0 ? 1 : 0));
    return {colList: o, computedCols: l, computedColsMap: a, computedColspan: i}
}

const Ka = "q-table__bottom row items-center", k0 = {};
h0.forEach(e => {
    k0[e] = {}
});
var Sx = ve({
    name: "QTable", props: {
        rows: {type: Array, default: () => []},
        rowKey: {type: [String, Function], default: "id"},
        columns: Array,
        loading: Boolean,
        iconFirstPage: String,
        iconPrevPage: String,
        iconNextPage: String,
        iconLastPage: String,
        title: String,
        hideHeader: Boolean,
        grid: Boolean,
        gridHeader: Boolean,
        dense: Boolean,
        flat: Boolean,
        bordered: Boolean,
        square: Boolean,
        separator: {
            type: String,
            default: "horizontal",
            validator: e => ["horizontal", "vertical", "cell", "none"].includes(e)
        },
        wrapCells: Boolean,
        virtualScroll: Boolean,
        virtualScrollTarget: {default: void 0}, ...k0,
        noDataLabel: String,
        noResultsLabel: String,
        loadingLabel: String,
        selectedRowsLabel: Function,
        rowsPerPageLabel: String,
        paginationLabel: Function,
        color: {type: String, default: "grey-8"},
        titleClass: [String, Array, Object],
        tableStyle: [String, Array, Object],
        tableClass: [String, Array, Object],
        tableHeaderStyle: [String, Array, Object],
        tableHeaderClass: [String, Array, Object],
        cardContainerClass: [String, Array, Object],
        cardContainerStyle: [String, Array, Object],
        cardStyle: [String, Array, Object],
        cardClass: [String, Array, Object],
        hideBottom: Boolean,
        hideSelectedBanner: Boolean,
        hideNoData: Boolean,
        hidePagination: Boolean,
        onRowClick: Function,
        onRowDblclick: Function,
        onRowContextmenu: Function, ...Ge, ...mu, ...wx, ...ux, ...fx, ...bx, ...mx, ...rx
    }, emits: ["request", "virtualScroll", ...hu, ...yx, ...hx], setup(e, {slots: t, emit: n}) {
        const o = Se(), {proxy: {$q: l}} = o, a = Je(e, l), {inFullscreen: i, toggleFullscreen: r} = gu(),
            s = f(() => typeof e.rowKey == "function" ? e.rowKey : fe => fe[e.rowKey]), d = D(null), c = D(null),
            p = f(() => e.grid !== !0 && e.virtualScroll === !0),
            v = f(() => " q-table__card" + (a.value === !0 ? " q-table__card--dark q-dark" : "") + (e.square === !0 ? " q-table--square" : "") + (e.flat === !0 ? " q-table--flat" : "") + (e.bordered === !0 ? " q-table--bordered" : "")),
            m = f(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === !0 ? " q-table--grid" : v.value) + (a.value === !0 ? " q-table--dark" : "") + (e.dense === !0 ? " q-table--dense" : "") + (e.wrapCells === !1 ? " q-table--no-wrap" : "") + (i.value === !0 ? " fullscreen scroll" : "")),
            g = f(() => m.value + (e.loading === !0 ? " q-table--loading" : ""));
        pe(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + m.value, () => {
            p.value === !0 && c.value !== null && c.value.reset()
        });
        const {
            innerPagination: x,
            computedPagination: w,
            isServerSide: S,
            requestServerInteraction: y,
            setPagination: b
        } = vx(o, se), {computedFilterMethod: h} = cx(e, b), {
            isRowExpanded: C,
            setExpanded: A,
            updateExpanded: L
        } = _x(e, n), E = f(() => {
            let fe = e.rows;
            if (S.value === !0 || fe.length === 0) return fe;
            const {sortBy: ke, descending: Oe} = w.value;
            return e.filter && (fe = h.value(fe, e.filter, K.value, se)), Z.value !== null && (fe = ie.value(e.rows === fe ? fe.slice() : fe, ke, Oe)), fe
        }), V = f(() => E.value.length), O = f(() => {
            let fe = E.value;
            if (S.value === !0) return fe;
            const {rowsPerPage: ke} = w.value;
            return ke !== 0 && (I.value === 0 && e.rows !== fe ? fe.length > N.value && (fe = fe.slice(0, N.value)) : fe = fe.slice(I.value, N.value)), fe
        }), {
            hasSelectionMode: z,
            singleSelection: M,
            multipleSelection: k,
            allRowsSelected: B,
            someRowsSelected: Y,
            rowsSelectedNumber: J,
            isRowSelected: $,
            clearSelection: Q,
            updateSelection: ae
        } = gx(e, n, O, s), {
            colList: be,
            computedCols: K,
            computedColsMap: T,
            computedColspan: ee
        } = xx(e, w, z), {columnToSort: Z, computedSortMethod: ie, sort: G} = sx(e, w, be, b), {
            firstRowIndex: I,
            lastRowIndex: N,
            isFirstPage: _,
            isLastPage: H,
            pagesNumber: re,
            computedRowsPerPageOptions: q,
            computedRowsNumber: P,
            firstPage: F,
            prevPage: te,
            nextPage: oe,
            lastPage: ne
        } = px(o, x, w, S, b, V), ge = f(() => O.value.length === 0), he = f(() => {
            const fe = {};
            return h0.forEach(ke => {
                fe[ke] = e[ke]
            }), fe.virtualScrollItemSize === void 0 && (fe.virtualScrollItemSize = e.dense === !0 ? 28 : 48), fe
        });

        function me() {
            p.value === !0 && c.value.reset()
        }

        function W() {
            if (e.grid === !0) return Tn();
            const fe = e.hideHeader !== !0 ? Te : null;
            if (p.value === !0) {
                const Oe = t["top-row"], Ve = t["bottom-row"], De = {default: gt => we(gt.item, t.body, gt.index)};
                if (Oe !== void 0) {
                    const gt = u("tbody", Oe({cols: K.value}));
                    De.before = fe === null ? () => gt : () => [fe()].concat(gt)
                } else fe !== null && (De.before = fe);
                return Ve !== void 0 && (De.after = () => u("tbody", Ve({cols: K.value}))), u(C0, {
                    ref: c,
                    class: e.tableClass,
                    style: e.tableStyle, ...he.value,
                    scrollTarget: e.virtualScrollTarget,
                    items: O.value,
                    type: "__qtable",
                    tableColspan: ee.value,
                    onVirtualScroll: U
                }, De)
            }
            const ke = [xe()];
            return fe !== null && ke.unshift(fe()), S0({
                class: ["q-table__middle scroll", e.tableClass],
                style: e.tableStyle
            }, ke)
        }

        function ue(fe, ke) {
            if (c.value !== null) return void c.value.scrollTo(fe, ke);
            fe = parseInt(fe, 10);
            const Oe = d.value.querySelector(`tbody tr:nth-of-type(${fe + 1})`);
            if (Oe !== null) {
                const Ve = d.value.querySelector(".q-table__middle.scroll"),
                    De = Oe.offsetTop - e.virtualScrollStickySizeStart,
                    gt = De < Ve.scrollTop ? "decrease" : "increase";
                Ve.scrollTop = De, n("virtualScroll", {index: fe, from: 0, to: x.value.rowsPerPage - 1, direction: gt})
            }
        }

        function U(fe) {
            n("virtualScroll", fe)
        }

        function de() {
            return [u(v0, {
                class: "q-table__linear-progress",
                color: e.color,
                dark: a.value,
                indeterminate: !0,
                trackColor: "transparent"
            })]
        }

        function we(fe, ke, Oe) {
            const Ve = s.value(fe), De = $(Ve);
            if (ke !== void 0) return ke(Ce({key: Ve, row: fe, pageIndex: Oe, __trClass: De ? "selected" : ""}));
            const gt = t["body-cell"], R = K.value.map(ce => {
                const $e = t[`body-cell-${ce.name}`], qe = $e !== void 0 ? $e : gt;
                return qe !== void 0 ? qe(Be({
                    key: Ve,
                    row: fe,
                    pageIndex: Oe,
                    col: ce
                })) : u("td", {class: ce.__tdClass(fe), style: ce.__tdStyle(fe)}, se(ce, fe))
            });
            if (z.value === !0) {
                const ce = t["body-selection"],
                    $e = ce !== void 0 ? ce(Ne({key: Ve, row: fe, pageIndex: Oe})) : [u(dl, {
                        modelValue: De,
                        color: e.color,
                        dark: a.value,
                        dense: e.dense,
                        "onUpdate:modelValue": (qe, et) => {
                            ae([Ve], [fe], qe, et)
                        }
                    })];
                R.unshift(u("td", {class: "q-table--col-auto-width"}, $e))
            }
            const X = {key: Ve, class: {selected: De}};
            return e.onRowClick !== void 0 && (X.class["cursor-pointer"] = !0, X.onClick = ce => {
                n("RowClick", ce, fe, Oe)
            }), e.onRowDblclick !== void 0 && (X.class["cursor-pointer"] = !0, X.onDblclick = ce => {
                n("RowDblclick", ce, fe, Oe)
            }), e.onRowContextmenu !== void 0 && (X.class["cursor-pointer"] = !0, X.onContextmenu = ce => {
                n("RowContextmenu", ce, fe, Oe)
            }), u("tr", X, R)
        }

        function xe() {
            const fe = t.body, ke = t["top-row"], Oe = t["bottom-row"];
            let Ve = O.value.map((De, gt) => we(De, fe, gt));
            return ke !== void 0 && (Ve = ke({cols: K.value}).concat(Ve)), Oe !== void 0 && (Ve = Ve.concat(Oe({cols: K.value}))), u("tbody", Ve)
        }

        function Ce(fe) {
            return Ye(fe), fe.cols = fe.cols.map(ke => At({...ke}, "value", () => se(ke, fe.row))), fe
        }

        function Be(fe) {
            return Ye(fe), At(fe, "value", () => se(fe.col, fe.row)), fe
        }

        function Ne(fe) {
            return Ye(fe), fe
        }

        function Ye(fe) {
            Object.assign(fe, {
                cols: K.value,
                colsMap: T.value,
                sort: G,
                rowIndex: I.value + fe.pageIndex,
                color: e.color,
                dark: a.value,
                dense: e.dense
            }), z.value === !0 && At(fe, "selected", () => $(fe.key), (ke, Oe) => {
                ae([fe.key], [fe.row], ke, Oe)
            }), At(fe, "expand", () => C(fe.key), ke => {
                L(fe.key, ke)
            })
        }

        function se(fe, ke) {
            const Oe = typeof fe.field == "function" ? fe.field(ke) : ke[fe.field];
            return fe.format !== void 0 ? fe.format(Oe, ke) : Oe
        }

        const _e = f(() => ({
            pagination: w.value,
            pagesNumber: re.value,
            isFirstPage: _.value,
            isLastPage: H.value,
            firstPage: F,
            prevPage: te,
            nextPage: oe,
            lastPage: ne,
            inFullscreen: i.value,
            toggleFullscreen: r
        }));

        function le() {
            const fe = t.top, ke = t["top-left"], Oe = t["top-right"], Ve = t["top-selection"],
                De = z.value === !0 && Ve !== void 0 && J.value > 0,
                gt = "q-table__top relative-position row items-center";
            if (fe !== void 0) return u("div", {class: gt}, [fe(_e.value)]);
            let R;
            return De === !0 ? R = Ve(_e.value).slice() : (R = [], ke !== void 0 ? R.push(u("div", {class: "q-table__control"}, [ke(_e.value)])) : e.title && R.push(u("div", {class: "q-table__control"}, [u("div", {class: ["q-table__title", e.titleClass]}, e.title)]))), Oe !== void 0 && (R.push(u("div", {class: "q-table__separator col"})), R.push(u("div", {class: "q-table__control"}, [Oe(_e.value)]))), R.length !== 0 ? u("div", {class: gt}, R) : void 0
        }

        const ye = f(() => Y.value === !0 ? null : B.value);

        function Te() {
            const fe = Re();
            return e.loading === !0 && t.loading === void 0 && fe.push(u("tr", {class: "q-table__progress"}, [u("th", {
                class: "relative-position",
                colspan: ee.value
            }, de())])), u("thead", fe)
        }

        function Re() {
            const fe = t.header, ke = t["header-cell"];
            if (fe !== void 0) return fe(Me({header: !0})).slice();
            const Oe = K.value.map(Ve => {
                const De = t[`header-cell-${Ve.name}`], gt = De !== void 0 ? De : ke, R = Me({col: Ve});
                return gt !== void 0 ? gt(R) : u(x0, {key: Ve.name, props: R}, () => Ve.label)
            });
            if (M.value === !0 && e.grid !== !0) Oe.unshift(u("th", {class: "q-table--col-auto-width"}, " ")); else if (k.value === !0) {
                const Ve = t["header-selection"], De = Ve !== void 0 ? Ve(Me({})) : [u(dl, {
                    color: e.color,
                    modelValue: ye.value,
                    dark: a.value,
                    dense: e.dense,
                    "onUpdate:modelValue": Xe
                })];
                Oe.unshift(u("th", {class: "q-table--col-auto-width"}, De))
            }
            return [u("tr", {class: e.tableHeaderClass, style: e.tableHeaderStyle}, Oe)]
        }

        function Me(fe) {
            return Object.assign(fe, {
                cols: K.value,
                sort: G,
                colsMap: T.value,
                color: e.color,
                dark: a.value,
                dense: e.dense
            }), k.value === !0 && At(fe, "selected", () => ye.value, Xe), fe
        }

        function Xe(fe) {
            Y.value === !0 && (fe = !1), ae(O.value.map(s.value), O.value, fe)
        }

        const dt = f(() => {
            const fe = [e.iconFirstPage || l.iconSet.table.firstPage, e.iconPrevPage || l.iconSet.table.prevPage, e.iconNextPage || l.iconSet.table.nextPage, e.iconLastPage || l.iconSet.table.lastPage];
            return l.lang.rtl === !0 ? fe.reverse() : fe
        });

        function ht() {
            if (e.hideBottom === !0) return;
            if (ge.value === !0) {
                if (e.hideNoData === !0) return;
                const Oe = e.loading === !0 ? e.loadingLabel || l.lang.table.loading : e.filter ? e.noResultsLabel || l.lang.table.noResults : e.noDataLabel || l.lang.table.noData,
                    Ve = t["no-data"], De = Ve !== void 0 ? [Ve({
                        message: Oe,
                        icon: l.iconSet.table.warning,
                        filter: e.filter
                    })] : [u(Ze, {class: "q-table__bottom-nodata-icon", name: l.iconSet.table.warning}), Oe];
                return u("div", {class: Ka + " q-table__bottom--nodata"}, De)
            }
            const fe = t.bottom;
            if (fe !== void 0) return u("div", {class: Ka}, [fe(_e.value)]);
            const ke = e.hideSelectedBanner !== !0 && z.value === !0 && J.value > 0 ? [u("div", {class: "q-table__control"}, [u("div", [(e.selectedRowsLabel || l.lang.table.selectedRecords)(J.value)])])] : [];
            return e.hidePagination !== !0 ? u("div", {class: Ka + " justify-end"}, nn(ke)) : ke.length !== 0 ? u("div", {class: Ka}, ke) : void 0
        }

        function jt(fe) {
            b({page: 1, rowsPerPage: fe.value})
        }

        function nn(fe) {
            let ke;
            const {rowsPerPage: Oe} = w.value, Ve = e.paginationLabel || l.lang.table.pagination, De = t.pagination,
                gt = e.rowsPerPageOptions.length > 1;
            if (fe.push(u("div", {class: "q-table__separator col"})), gt === !0 && fe.push(u("div", {class: "q-table__control"}, [u("span", {class: "q-table__bottom-item"}, [e.rowsPerPageLabel || l.lang.table.recordsPerPage]), u(y0, {
                class: "q-table__select inline q-table__bottom-item",
                color: e.color,
                modelValue: Oe,
                options: q.value,
                displayValue: Oe === 0 ? l.lang.table.allRows : Oe,
                dark: a.value,
                borderless: !0,
                dense: !0,
                optionsDense: !0,
                optionsCover: !0,
                "onUpdate:modelValue": jt
            })])), De !== void 0) ke = De(_e.value); else if (ke = [u("span", Oe !== 0 ? {class: "q-table__bottom-item"} : {}, [Oe ? Ve(I.value + 1, Math.min(N.value, P.value), P.value) : Ve(1, V.value, P.value)])], Oe !== 0 && re.value > 1) {
                const R = {color: e.color, round: !0, dense: !0, flat: !0};
                e.dense === !0 && (R.size = "sm"), re.value > 2 && ke.push(u(tt, {
                    key: "pgFirst", ...R,
                    icon: dt.value[0],
                    disable: _.value,
                    onClick: F
                })), ke.push(u(tt, {
                    key: "pgPrev", ...R,
                    icon: dt.value[1],
                    disable: _.value,
                    onClick: te
                }), u(tt, {
                    key: "pgNext", ...R,
                    icon: dt.value[2],
                    disable: H.value,
                    onClick: oe
                })), re.value > 2 && ke.push(u(tt, {
                    key: "pgLast", ...R,
                    icon: dt.value[3],
                    disable: H.value,
                    onClick: ne
                }))
            }
            return fe.push(u("div", {class: "q-table__control"}, ke)), fe
        }

        function Bn() {
            const fe = e.gridHeader === !0 ? [u("table", {class: "q-table"}, [Te()])] : e.loading === !0 && t.loading === void 0 ? de() : void 0;
            return u("div", {class: "q-table__middle"}, fe)
        }

        function Tn() {
            const fe = t.item !== void 0 ? t.item : ke => {
                const Oe = ke.cols.map(De => u("div", {class: "q-table__grid-item-row"}, [u("div", {class: "q-table__grid-item-title"}, [De.label]), u("div", {class: "q-table__grid-item-value"}, [De.value])]));
                if (z.value === !0) {
                    const De = t["body-selection"], gt = De !== void 0 ? De(ke) : [u(dl, {
                        modelValue: ke.selected,
                        color: e.color,
                        dark: a.value,
                        dense: e.dense,
                        "onUpdate:modelValue": (R, X) => {
                            ae([ke.key], [ke.row], R, X)
                        }
                    })];
                    Oe.unshift(u("div", {class: "q-table__grid-item-row"}, gt), u(fo, {dark: a.value}))
                }
                const Ve = {class: ["q-table__grid-item-card" + v.value, e.cardClass], style: e.cardStyle};
                return e.onRowClick === void 0 && e.onRowDblclick === void 0 || (Ve.class[0] += " cursor-pointer", e.onRowClick !== void 0 && (Ve.onClick = De => {
                    n("RowClick", De, ke.row, ke.pageIndex)
                }), e.onRowDblclick !== void 0 && (Ve.onDblclick = De => {
                    n("RowDblclick", De, ke.row, ke.pageIndex)
                })), u("div", {class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (ke.selected === !0 ? " q-table__grid-item--selected" : "")}, [u("div", Ve, Oe)])
            };
            return u("div", {
                class: ["q-table__grid-content row", e.cardContainerClass],
                style: e.cardContainerStyle
            }, O.value.map((ke, Oe) => fe(Ce({key: s.value(ke), row: ke, pageIndex: Oe}))))
        }

        return Object.assign(o.proxy, {
            requestServerInteraction: y,
            setPagination: b,
            firstPage: F,
            prevPage: te,
            nextPage: oe,
            lastPage: ne,
            isRowSelected: $,
            clearSelection: Q,
            isRowExpanded: C,
            setExpanded: A,
            sort: G,
            resetVirtualScroll: me,
            scrollTo: ue,
            getCellValue: se
        }), kv(o.proxy, {
            filteredSortedRows: () => E.value,
            computedRows: () => O.value,
            computedRowsNumber: () => P.value
        }), () => {
            const fe = [le()], ke = {ref: d, class: g.value};
            return e.grid === !0 ? fe.push(Bn()) : Object.assign(ke, {
                class: [ke.class, e.cardClass],
                style: e.cardStyle
            }), fe.push(W(), ht()), e.loading === !0 && t.loading !== void 0 && fe.push(t.loading()), u("div", ke, fe)
        }
    }
}), Cx = ve({
    name: "QTr", props: {props: Object, noHover: Boolean}, setup(e, {slots: t}) {
        const n = f(() => "q-tr" + (e.props === void 0 || e.props.header === !0 ? "" : " " + e.props.__trClass) + (e.noHover === !0 ? " q-tr--no-hover" : ""));
        return () => u("tr", {class: n.value}, Ae(t.default))
    }
}), kx = ve({
    name: "QTd", props: {props: Object, autoWidth: Boolean, noHover: Boolean}, setup(e, {slots: t}) {
        const n = Se(),
            o = f(() => "q-td" + (e.autoWidth === !0 ? " q-table--col-auto-width" : "") + (e.noHover === !0 ? " q-td--no-hover" : "") + " ");
        return () => {
            if (e.props === void 0) return u("td", {class: o.value}, Ae(t.default));
            const l = n.vnode.key, a = (e.props.colsMap !== void 0 ? e.props.colsMap[l] : null) || e.props.col;
            if (a === void 0) return;
            const {row: i} = e.props;
            return u("td", {class: o.value + a.__tdClass(i), style: a.__tdStyle(i)}, Ae(t.default))
        }
    }
}), qx = ve({
    name: "QRouteTab", props: {...$l, ...Sp}, emits: xp, setup(e, {slots: t, emit: n}) {
        const o = or({useDisableForRouterLinkProps: !1}), {
            renderTab: l,
            $tabs: a
        } = Cp(e, t, n, {exact: f(() => e.exact), ...o});
        return pe(() => `${e.name} | ${e.exact} | ${(o.resolvedLink.value || {}).href}`, () => {
            a.verifyRouteModel()
        }), () => l(o.linkTag.value, o.linkAttrs.value)
    }
});

function Tx(e, t) {
    if (e.hour !== null) {
        if (e.minute === null) return "minute";
        if (t === !0 && e.second === null) return "second"
    }
    return "hour"
}

function $x() {
    const e = new Date;
    return {hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds()}
}

var Mx = ve({
    name: "QTime",
    props: {
        ...Ge, ...vn, ...Ep,
        mask: {default: null},
        format24h: {type: Boolean, default: null},
        defaultDate: {type: String, validator: e => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e)},
        options: Function,
        hourOptions: Array,
        minuteOptions: Array,
        secondOptions: Array,
        withSeconds: Boolean,
        nowBtn: Boolean
    },
    emits: Pp,
    setup(e, {slots: t, emit: n}) {
        const o = Se(), {$q: l} = o.proxy, a = Je(e, l), {
            tabindex: i,
            headerClass: r,
            getLocale: s,
            getCurrentDate: d
        } = Ap(e, l), c = xa(e), p = po(c);
        let v, m;
        const g = D(null), x = f(() => ie()), w = f(() => s()), S = f(() => G()),
            y = Ql(e.modelValue, x.value, w.value, e.calendar, S.value), b = D(Tx(y)), h = D(y),
            C = D(y.hour === null || y.hour < 12),
            A = f(() => `q-time q-time--${e.landscape === !0 ? "landscape" : "portrait"}` + (a.value === !0 ? " q-time--dark q-dark" : "") + (e.disable === !0 ? " disabled" : e.readonly === !0 ? " q-time--readonly" : "") + (e.bordered === !0 ? " q-time--bordered" : "") + (e.square === !0 ? " q-time--square no-border-radius" : "") + (e.flat === !0 ? " q-time--flat no-shadow" : "")),
            L = f(() => {
                const se = h.value;
                return {
                    hour: se.hour === null ? "--" : E.value === !0 ? ot(se.hour) : String(C.value === !0 ? se.hour === 0 ? 12 : se.hour : se.hour > 12 ? se.hour - 12 : se.hour),
                    minute: se.minute === null ? "--" : ot(se.minute),
                    second: se.second === null ? "--" : ot(se.second)
                }
            }), E = f(() => e.format24h !== null ? e.format24h : l.lang.date.format24h), V = f(() => {
                const se = b.value === "hour", _e = se === !0 ? 12 : 60, le = h.value[b.value];
                let Te = `rotate(${Math.round(le * (360 / _e)) - 180}deg) translateX(-50%)`;
                return se === !0 && E.value === !0 && h.value.hour >= 12 && (Te += " scale(.7)"), {transform: Te}
            }), O = f(() => h.value.hour !== null), z = f(() => O.value === !0 && h.value.minute !== null),
            M = f(() => e.hourOptions !== void 0 ? se => e.hourOptions.includes(se) : e.options !== void 0 ? se => e.options(se, null, null) : null),
            k = f(() => e.minuteOptions !== void 0 ? se => e.minuteOptions.includes(se) : e.options !== void 0 ? se => e.options(h.value.hour, se, null) : null),
            B = f(() => e.secondOptions !== void 0 ? se => e.secondOptions.includes(se) : e.options !== void 0 ? se => e.options(h.value.hour, h.value.minute, se) : null),
            Y = f(() => {
                if (M.value === null) return null;
                const se = T(0, 11, M.value), _e = T(12, 11, M.value);
                return {am: se, pm: _e, values: se.values.concat(_e.values)}
            }), J = f(() => k.value !== null ? T(0, 59, k.value) : null),
            $ = f(() => B.value !== null ? T(0, 59, B.value) : null), Q = f(() => {
                switch (b.value) {
                    case"hour":
                        return Y.value;
                    case"minute":
                        return J.value;
                    case"second":
                        return $.value
                }
            }), ae = f(() => {
                let se, _e, le = 0, ye = 1;
                const Te = Q.value !== null ? Q.value.values : void 0;
                b.value === "hour" ? E.value === !0 ? (se = 0, _e = 23) : (se = 0, _e = 11, C.value === !1 && (le = 12)) : (se = 0, _e = 55, ye = 5);
                const Re = [];
                for (let Me = se, Xe = se; Me <= _e; Me += ye, Xe++) {
                    const dt = Me + le, ht = Te !== void 0 && Te.includes(dt) === !1,
                        jt = b.value === "hour" && Me === 0 ? E.value === !0 ? "00" : "12" : Me;
                    Re.push({val: dt, index: Xe, disable: ht, label: jt})
                }
                return Re
            }), be = f(() => [[Jt, _, void 0, {stop: !0, prevent: !0, mouse: !0}]]);

        function K() {
            const se = {...d(), ...$x()};
            Be(se), Object.assign(h.value, se), b.value = "hour"
        }

        function T(se, _e, le) {
            const ye = Array.apply(null, {length: _e + 1}).map((Te, Re) => {
                const Me = Re + se;
                return {index: Me, val: le(Me) === !0}
            }).filter(Te => Te.val === !0).map(Te => Te.index);
            return {min: ye[0], max: ye[ye.length - 1], values: ye, threshold: _e + 1}
        }

        function ee(se, _e, le) {
            const ye = Math.abs(se - _e);
            return Math.min(ye, le - ye)
        }

        function Z(se, {min: _e, max: le, values: ye, threshold: Te}) {
            if (se === _e) return _e;
            if (se < _e || se > le) return ee(se, _e, Te) <= ee(se, le, Te) ? _e : le;
            const Re = ye.findIndex(dt => se <= dt), Me = ye[Re - 1], Xe = ye[Re];
            return se - Me <= Xe - se ? Me : Xe
        }

        function ie() {
            return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === !0 ? ":ss" : ""}`
        }

        function G() {
            if (typeof e.defaultDate != "string") {
                const se = d(!0);
                return se.dateHash = Vn(se), se
            }
            return Ql(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar)
        }

        function I() {
            return ga(o) === !0 || Q.value !== null && (Q.value.values.length === 0 || b.value === "hour" && E.value !== !0 && Y.value[C.value === !0 ? "am" : "pm"].values.length === 0)
        }

        function N() {
            const se = g.value, {top: _e, left: le, width: ye} = se.getBoundingClientRect(), Te = ye / 2;
            return {top: _e + Te, left: le + Te, dist: .7 * Te}
        }

        function _(se) {
            if (I() !== !0) {
                if (se.isFirst === !0) return v = N(), void (m = re(se.evt, v));
                m = re(se.evt, v, m), se.isFinal === !0 && (v = !1, m = null, H())
            }
        }

        function H() {
            b.value === "hour" ? b.value = "minute" : e.withSeconds && b.value === "minute" && (b.value = "second")
        }

        function re(se, _e, le) {
            const ye = Wt(se), Te = Math.abs(ye.top - _e.top),
                Re = Math.sqrt(Math.pow(Math.abs(ye.top - _e.top), 2) + Math.pow(Math.abs(ye.left - _e.left), 2));
            let Me, Xe = Math.asin(Te / Re) * (180 / Math.PI);
            if (Xe = ye.top < _e.top ? _e.left < ye.left ? 90 - Xe : 270 + Xe : _e.left < ye.left ? Xe + 90 : 270 - Xe, b.value === "hour") {
                if (Me = Xe / 30, Y.value !== null) {
                    const dt = E.value !== !0 ? C.value === !0 : Y.value.am.values.length !== 0 && Y.value.pm.values.length !== 0 ? Re >= _e.dist : Y.value.am.values.length !== 0;
                    Me = Z(Me + (dt === !0 ? 0 : 12), Y.value[dt === !0 ? "am" : "pm"])
                } else Me = Math.round(Me), E.value === !0 ? Re < _e.dist ? Me < 12 && (Me += 12) : Me === 12 && (Me = 0) : C.value === !0 && Me === 12 ? Me = 0 : C.value === !1 && Me !== 12 && (Me += 12);
                E.value === !0 && (C.value = Me < 12)
            } else Me = Math.round(Xe / 6) % 60, b.value === "minute" && J.value !== null ? Me = Z(Me, J.value) : b.value === "second" && $.value !== null && (Me = Z(Me, $.value));
            return le !== Me && U[b.value](Me), Me
        }

        pe(() => e.modelValue, se => {
            const _e = Ql(se, x.value, w.value, e.calendar, S.value);
            _e.dateHash === h.value.dateHash && _e.timeHash === h.value.timeHash || (h.value = _e, _e.hour === null ? b.value = "hour" : C.value = _e.hour < 12)
        }), pe([x, w], () => {
            We(() => {
                Be()
            })
        });
        const q = {
            hour() {
                b.value = "hour"
            }, minute() {
                b.value = "minute"
            }, second() {
                b.value = "second"
            }
        };

        function P(se) {
            se.keyCode === 13 && de()
        }

        function F(se) {
            se.keyCode === 13 && we()
        }

        function te(se) {
            I() !== !0 && (l.platform.is.desktop !== !0 && re(se, N()), H())
        }

        function oe(se) {
            I() !== !0 && re(se, N())
        }

        function ne(se) {
            if (se.keyCode === 13) b.value = "hour"; else if ([37, 39].includes(se.keyCode)) {
                const _e = se.keyCode === 37 ? -1 : 1;
                if (Y.value !== null) {
                    const le = E.value === !0 ? Y.value.values : Y.value[C.value === !0 ? "am" : "pm"].values;
                    if (le.length === 0) return;
                    if (h.value.hour === null) me(le[0]); else {
                        const ye = (le.length + le.indexOf(h.value.hour) + _e) % le.length;
                        me(le[ye])
                    }
                } else {
                    const le = E.value === !0 ? 24 : 12, ye = E.value !== !0 && C.value === !1 ? 12 : 0,
                        Te = h.value.hour === null ? -_e : h.value.hour;
                    me(ye + (24 + Te + _e) % le)
                }
            }
        }

        function ge(se) {
            if (se.keyCode === 13) b.value = "minute"; else if ([37, 39].includes(se.keyCode)) {
                const _e = se.keyCode === 37 ? -1 : 1;
                if (J.value !== null) {
                    const le = J.value.values;
                    if (le.length === 0) return;
                    if (h.value.minute === null) W(le[0]); else {
                        const ye = (le.length + le.indexOf(h.value.minute) + _e) % le.length;
                        W(le[ye])
                    }
                } else {
                    const le = h.value.minute === null ? -_e : h.value.minute;
                    W((60 + le + _e) % 60)
                }
            }
        }

        function he(se) {
            if (se.keyCode === 13) b.value = "second"; else if ([37, 39].includes(se.keyCode)) {
                const _e = se.keyCode === 37 ? -1 : 1;
                if ($.value !== null) {
                    const le = $.value.values;
                    if (le.length === 0) return;
                    if (h.value.seconds === null) ue(le[0]); else {
                        const ye = (le.length + le.indexOf(h.value.second) + _e) % le.length;
                        ue(le[ye])
                    }
                } else {
                    const le = h.value.second === null ? -_e : h.value.second;
                    ue((60 + le + _e) % 60)
                }
            }
        }

        function me(se) {
            h.value.hour !== se && (h.value.hour = se, Ce())
        }

        function W(se) {
            h.value.minute !== se && (h.value.minute = se, Ce())
        }

        function ue(se) {
            h.value.second !== se && (h.value.second = se, Ce())
        }

        const U = {hour: me, minute: W, second: ue};

        function de() {
            C.value === !1 && (C.value = !0, h.value.hour !== null && (h.value.hour -= 12, Ce()))
        }

        function we() {
            C.value === !0 && (C.value = !1, h.value.hour !== null && (h.value.hour += 12, Ce()))
        }

        function xe(se) {
            const _e = e.modelValue;
            b.value !== se && _e !== void 0 && _e !== null && _e !== "" && typeof _e != "string" && (b.value = se)
        }

        function Ce() {
            return M.value !== null && M.value(h.value.hour) !== !0 ? (h.value = Ql(), void xe("hour")) : k.value !== null && k.value(h.value.minute) !== !0 ? (h.value.minute = null, h.value.second = null, void xe("minute")) : e.withSeconds === !0 && B.value !== null && B.value(h.value.second) !== !0 ? (h.value.second = null, void xe("second")) : void (h.value.hour === null || h.value.minute === null || e.withSeconds === !0 && h.value.second === null || Be())
        }

        function Be(se) {
            const _e = Object.assign({...h.value}, se),
                le = e.calendar === "persian" ? ot(_e.hour) + ":" + ot(_e.minute) + (e.withSeconds === !0 ? ":" + ot(_e.second) : "") : Vp(new Date(_e.year, _e.month === null ? null : _e.month - 1, _e.day, _e.hour, _e.minute, _e.second, _e.millisecond), x.value, w.value, _e.year, _e.timezoneOffset);
            _e.changed = le !== e.modelValue, n("update:modelValue", le, _e)
        }

        function Ne() {
            const se = [u("div", {
                class: "q-time__link " + (b.value === "hour" ? "q-time__link--active" : "cursor-pointer"),
                tabindex: i.value,
                onClick: q.hour,
                onKeyup: ne
            }, L.value.hour), u("div", ":"), u("div", O.value === !0 ? {
                class: "q-time__link " + (b.value === "minute" ? "q-time__link--active" : "cursor-pointer"),
                tabindex: i.value,
                onKeyup: ge,
                onClick: q.minute
            } : {class: "q-time__link"}, L.value.minute)];
            e.withSeconds === !0 && se.push(u("div", ":"), u("div", z.value === !0 ? {
                class: "q-time__link " + (b.value === "second" ? "q-time__link--active" : "cursor-pointer"),
                tabindex: i.value,
                onKeyup: he,
                onClick: q.second
            } : {class: "q-time__link"}, L.value.second));
            const _e = [u("div", {class: "q-time__header-label row items-center no-wrap", dir: "ltr"}, se)];
            return E.value === !1 && _e.push(u("div", {class: "q-time__header-ampm column items-between no-wrap"}, [u("div", {
                class: "q-time__link " + (C.value === !0 ? "q-time__link--active" : "cursor-pointer"),
                tabindex: i.value,
                onClick: de,
                onKeyup: P
            }, "AM"), u("div", {
                class: "q-time__link " + (C.value !== !0 ? "q-time__link--active" : "cursor-pointer"),
                tabindex: i.value,
                onClick: we,
                onKeyup: F
            }, "PM")])), u("div", {class: "q-time__header flex flex-center no-wrap " + r.value}, _e)
        }

        function Ye() {
            const se = h.value[b.value];
            return u("div", {class: "q-time__content col relative-position"}, [u($t, {name: "q-transition--scale"}, () => u("div", {
                key: "clock" + b.value,
                class: "q-time__container-parent absolute-full"
            }, [u("div", {
                ref: g,
                class: "q-time__container-child fit overflow-hidden"
            }, [Sn(u("div", {
                class: "q-time__clock cursor-pointer non-selectable",
                onClick: te,
                onMousedown: oe
            }, [u("div", {class: "q-time__clock-circle fit"}, [u("div", {
                class: "q-time__clock-pointer" + (h.value[b.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""),
                style: V.value
            }), ae.value.map(_e => u("div", {class: `q-time__clock-position row flex-center q-time__clock-pos-${_e.index}` + (_e.val === se ? " q-time__clock-position--active " + r.value : _e.disable === !0 ? " q-time__clock-position--disable" : "")}, [u("span", _e.label)]))])]), be.value)])])), e.nowBtn === !0 ? u(tt, {
                class: "q-time__now-button absolute",
                icon: l.iconSet.datetime.now,
                unelevated: !0,
                size: "sm",
                round: !0,
                color: e.color,
                textColor: e.textColor,
                tabindex: i.value,
                onClick: K
            }) : null])
        }

        return o.proxy.setNow = K, () => {
            const se = [Ye()], _e = Ae(t.default);
            return _e !== void 0 && se.push(u("div", {class: "q-time__actions"}, _e)), e.name !== void 0 && e.disable !== !0 && p(se, "push"), u("div", {
                class: A.value,
                tabindex: -1
            }, [Ne(), u("div", {class: "q-time__main col overflow-auto"}, se)])
        }
    }
}), Ex = ve({
    name: "QTimeline",
    props: {
        ...Ge,
        color: {type: String, default: "primary"},
        side: {type: String, default: "right", validator: e => ["left", "right"].includes(e)},
        layout: {type: String, default: "dense", validator: e => ["dense", "comfortable", "loose"].includes(e)}
    },
    setup(e, {slots: t}) {
        const n = Se(), o = Je(e, n.proxy.$q);
        un(Pv, e);
        const l = f(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (o.value === !0 ? " q-timeline--dark" : ""));
        return () => u("ul", {class: l.value}, Ae(t.default))
    }
}), Px = ve({
    name: "QTimelineEntry",
    props: {
        heading: Boolean,
        tag: {type: String, default: "h3"},
        side: {type: String, default: "right", validator: e => ["left", "right"].includes(e)},
        icon: String,
        avatar: String,
        color: String,
        title: String,
        subtitle: String,
        body: String
    },
    setup(e, {slots: t}) {
        const n = vt(Pv, at);
        if (n === at) return console.error("QTimelineEntry needs to be child of QTimeline"), at;
        const o = f(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")),
            l = f(() => `q-timeline__dot text-${e.color || n.color}`),
            a = f(() => n.layout === "comfortable" && n.side === "left");
        return () => {
            const i = ha(t.default, []);
            if (e.body !== void 0 && i.unshift(e.body), e.heading === !0) {
                const d = [u("div"), u("div"), u(e.tag, {class: "q-timeline__heading-title"}, i)];
                return u("div", {class: "q-timeline__heading"}, a.value === !0 ? d.reverse() : d)
            }
            let r;
            e.icon !== void 0 ? r = [u(Ze, {
                class: "row items-center justify-center",
                name: e.icon
            })] : e.avatar !== void 0 && (r = [u("img", {class: "q-timeline__dot-img", src: e.avatar})]);
            const s = [u("div", {class: "q-timeline__subtitle"}, [u("span", {}, Ae(t.subtitle, [e.subtitle]))]), u("div", {class: l.value}, r), u("div", {class: "q-timeline__content"}, [u("h6", {class: "q-timeline__title"}, Ae(t.title, [e.title]))].concat(i))];
            return u("li", {class: o.value}, a.value === !0 ? s.reverse() : s)
        }
    }
}), Ax = ve({
    name: "QToolbar", props: {inset: Boolean}, setup(e, {slots: t}) {
        const n = f(() => "q-toolbar row no-wrap items-center" + (e.inset === !0 ? " q-toolbar--inset" : ""));
        return () => u("div", {class: n.value, role: "toolbar"}, Ae(t.default))
    }
}), Bx = ve({
    name: "QToolbarTitle", props: {shrink: Boolean}, setup(e, {slots: t}) {
        const n = f(() => "q-toolbar__title ellipsis" + (e.shrink === !0 ? " col-shrink" : ""));
        return () => u("div", {class: n.value}, Ae(t.default))
    }
});
const Ox = ["none", "strict", "leaf", "leaf-filtered"];
var Lx = ve({
    name: "QTree",
    props: {
        ...Ge,
        nodes: {type: Array, required: !0},
        nodeKey: {type: String, required: !0},
        labelKey: {type: String, default: "label"},
        childrenKey: {type: String, default: "children"},
        dense: Boolean,
        color: String,
        controlColor: String,
        textColor: String,
        selectedColor: String,
        icon: String,
        tickStrategy: {type: String, default: "none", validator: e => Ox.includes(e)},
        ticked: Array,
        expanded: Array,
        selected: {},
        noSelectionUnset: Boolean,
        defaultExpandAll: Boolean,
        accordion: Boolean,
        filter: String,
        filterMethod: Function,
        duration: Number,
        noConnectors: Boolean,
        noTransition: Boolean,
        noNodesLabel: String,
        noResultsLabel: String
    },
    emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: o} = Se(), {$q: l} = o, a = Je(e, l), i = D({}), r = D(e.ticked || []), s = D(e.expanded || []);
        let d = {};
        kl(() => {
            d = {}
        });
        const c = f(() => `q-tree q-tree--${e.dense === !0 ? "dense" : "standard"}` + (e.noConnectors === !0 ? " q-tree--no-connectors" : "") + (a.value === !0 ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")),
            p = f(() => e.selected !== void 0), v = f(() => e.icon || l.iconSet.tree.icon),
            m = f(() => e.controlColor || e.color), g = f(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""),
            x = f(() => {
                const T = e.selectedColor || e.color;
                return T ? ` text-${T}` : ""
            }), w = f(() => e.filterMethod !== void 0 ? e.filterMethod : (T, ee) => {
                const Z = ee.toLowerCase();
                return T[e.labelKey] && T[e.labelKey].toLowerCase().indexOf(Z) > -1
            }), S = f(() => {
                const T = {}, ee = (Z, ie) => {
                    const G = Z.tickStrategy || (ie ? ie.tickStrategy : e.tickStrategy), I = Z[e.nodeKey],
                        N = Z[e.childrenKey] && Array.isArray(Z[e.childrenKey]) && Z[e.childrenKey].length !== 0,
                        _ = Z.disabled !== !0 && p.value === !0 && Z.selectable !== !1,
                        H = Z.disabled !== !0 && Z.expandable !== !1, re = G !== "none", q = G === "strict",
                        P = G === "leaf-filtered", F = G === "leaf" || G === "leaf-filtered";
                    let te = Z.disabled !== !0 && Z.tickable !== !1;
                    F === !0 && te === !0 && ie && ie.tickable !== !0 && (te = !1);
                    let oe = Z.lazy;
                    oe === !0 && i.value[I] !== void 0 && Array.isArray(Z[e.childrenKey]) === !0 && (oe = i.value[I]);
                    const ne = {
                        key: I,
                        parent: ie,
                        isParent: N,
                        lazy: oe,
                        disabled: Z.disabled,
                        link: Z.disabled !== !0 && (_ === !0 || H === !0 && (N === !0 || oe === !0)),
                        children: [],
                        matchesFilter: !e.filter || w.value(Z, e.filter),
                        selected: I === e.selected && _ === !0,
                        selectable: _,
                        expanded: N === !0 && s.value.includes(I),
                        expandable: H,
                        noTick: Z.noTick === !0 || q !== !0 && oe && oe !== "loaded",
                        tickable: te,
                        tickStrategy: G,
                        hasTicking: re,
                        strictTicking: q,
                        leafFilteredTicking: P,
                        leafTicking: F,
                        ticked: (q === !0 || N !== !0) && r.value.includes(I)
                    };
                    if (T[I] = ne, N === !0 && (ne.children = Z[e.childrenKey].map(ge => ee(ge, ne)), e.filter && (ne.matchesFilter !== !0 ? ne.matchesFilter = ne.children.some(ge => ge.matchesFilter) : ne.noTick !== !0 && ne.disabled !== !0 && ne.tickable === !0 && P === !0 && ne.children.every(ge => ge.matchesFilter !== !0 || ge.noTick === !0 || ge.tickable !== !0) === !0 && (ne.tickable = !1)), ne.matchesFilter === !0 && (ne.noTick !== !0 && q !== !0 && ne.children.every(ge => ge.noTick) === !0 && (ne.noTick = !0), F))) {
                        if (ne.ticked = !1, ne.indeterminate = ne.children.some(ge => ge.indeterminate === !0), ne.tickable = ne.tickable === !0 && ne.children.some(ge => ge.tickable), ne.indeterminate !== !0) {
                            const ge = ne.children.reduce((he, me) => me.ticked === !0 ? he + 1 : he, 0);
                            ge === ne.children.length ? ne.ticked = !0 : ge > 0 && (ne.indeterminate = !0)
                        }
                        ne.indeterminate === !0 && (ne.indeterminateNextState = ne.children.every(ge => ge.tickable !== !0 || ge.ticked !== !0))
                    }
                    return ne
                };
                return e.nodes.forEach(Z => ee(Z, null)), T
            });

        function y(T) {
            const ee = [].reduce,
                Z = (ie, G) => ie || !G ? ie : Array.isArray(G) === !0 ? ee.call(Object(G), Z, ie) : G[e.nodeKey] === T ? G : G[e.childrenKey] ? Z(null, G[e.childrenKey]) : void 0;
            return Z(null, e.nodes)
        }

        function b() {
            return r.value.map(T => y(T))
        }

        function h() {
            return s.value.map(T => y(T))
        }

        function C(T) {
            return !(!T || !S.value[T]) && S.value[T].expanded
        }

        function A() {
            e.expanded !== void 0 ? n("update:expanded", []) : s.value = []
        }

        function L() {
            const T = [], ee = Z => {
                Z[e.childrenKey] && Z[e.childrenKey].length !== 0 && Z.expandable !== !1 && Z.disabled !== !0 && (T.push(Z[e.nodeKey]), Z[e.childrenKey].forEach(ee))
            };
            e.nodes.forEach(ee), e.expanded !== void 0 ? n("update:expanded", T) : s.value = T
        }

        function E(T, ee, Z = y(T), ie = S.value[T]) {
            if (ie.lazy && ie.lazy !== "loaded") {
                if (ie.lazy === "loading") return;
                i.value[T] = "loading", Array.isArray(Z[e.childrenKey]) !== !0 && (Z[e.childrenKey] = []), n("lazyLoad", {
                    node: Z,
                    key: T,
                    done: G => {
                        i.value[T] = "loaded", Z[e.childrenKey] = Array.isArray(G) === !0 ? G : [], We(() => {
                            const I = S.value[T];
                            I && I.isParent === !0 && V(T, !0)
                        })
                    },
                    fail: () => {
                        delete i.value[T], Z[e.childrenKey].length === 0 && delete Z[e.childrenKey]
                    }
                })
            } else ie.isParent === !0 && ie.expandable === !0 && V(T, ee)
        }

        function V(T, ee) {
            let Z = s.value;
            const ie = e.expanded !== void 0;
            if (ie === !0 && (Z = Z.slice()), ee) {
                if (e.accordion && S.value[T]) {
                    const G = [];
                    S.value[T].parent ? S.value[T].parent.children.forEach(I => {
                        I.key !== T && I.expandable === !0 && G.push(I.key)
                    }) : e.nodes.forEach(I => {
                        const N = I[e.nodeKey];
                        N !== T && G.push(N)
                    }), G.length !== 0 && (Z = Z.filter(I => G.includes(I) === !1))
                }
                Z = Z.concat([T]).filter((G, I, N) => N.indexOf(G) === I)
            } else Z = Z.filter(G => G !== T);
            ie === !0 ? n("update:expanded", Z) : s.value = Z
        }

        function O(T) {
            return !(!T || !S.value[T]) && S.value[T].ticked
        }

        function z(T, ee) {
            let Z = r.value;
            const ie = e.ticked !== void 0;
            ie === !0 && (Z = Z.slice()), Z = ee ? Z.concat(T).filter((G, I, N) => N.indexOf(G) === I) : Z.filter(G => T.includes(G) === !1), ie === !0 && n("update:ticked", Z)
        }

        function M(T, ee, Z) {
            const ie = {tree: o, node: T, key: Z, color: e.color, dark: a.value};
            return At(ie, "expanded", () => ee.expanded, G => {
                G !== ee.expanded && E(Z, G)
            }), At(ie, "ticked", () => ee.ticked, G => {
                G !== ee.ticked && z([Z], G)
            }), ie
        }

        function k(T) {
            return (e.filter ? T.filter(ee => S.value[ee[e.nodeKey]].matchesFilter) : T).map(ee => $(ee))
        }

        function B(T) {
            if (T.icon !== void 0) return u(Ze, {class: "q-tree__icon q-mr-sm", name: T.icon, color: T.iconColor});
            const ee = T.img || T.avatar;
            return ee ? u("img", {class: `q-tree__${T.img ? "img" : "avatar"} q-mr-sm`, src: ee}) : void 0
        }

        function Y() {
            n("afterShow")
        }

        function J() {
            n("afterHide")
        }

        function $(T) {
            const ee = T[e.nodeKey], Z = S.value[ee], ie = T.header && t[`header-${T.header}`] || t["default-header"],
                G = Z.isParent === !0 ? k(T[e.childrenKey]) : [], I = G.length !== 0 || Z.lazy && Z.lazy !== "loaded";
            let N = T.body && t[`body-${T.body}`] || t["default-body"];
            const _ = ie !== void 0 || N !== void 0 ? M(T, Z, ee) : null;
            return N !== void 0 && (N = u("div", {class: "q-tree__node-body relative-position"}, [u("div", {class: g.value}, [N(_)])])), u("div", {
                key: ee,
                class: `q-tree__node relative-position q-tree__node--${I === !0 ? "parent" : "child"}`
            }, [u("div", {
                class: "q-tree__node-header relative-position row no-wrap items-center" + (Z.link === !0 ? " q-tree__node--link q-hoverable q-focusable" : "") + (Z.selected === !0 ? " q-tree__node--selected" : "") + (Z.disabled === !0 ? " q-tree__node--disabled" : ""),
                tabindex: Z.link === !0 ? 0 : -1,
                ariaExpanded: G.length > 0 ? Z.expanded : null,
                role: "treeitem",
                onClick: H => {
                    ae(T, Z, H)
                },
                onKeypress(H) {
                    zo(H) !== !0 && (H.keyCode === 13 ? ae(T, Z, H, !0) : H.keyCode === 32 && be(T, Z, H, !0))
                }
            }, [u("div", {
                class: "q-focus-helper", tabindex: -1, ref: H => {
                    d[Z.key] = H
                }
            }), Z.lazy === "loading" ? u(tn, {
                class: "q-tree__spinner",
                color: m.value
            }) : I === !0 ? u(Ze, {
                class: "q-tree__arrow" + (Z.expanded === !0 ? " q-tree__arrow--rotate" : ""),
                name: v.value,
                onClick(H) {
                    be(T, Z, H)
                }
            }) : null, Z.hasTicking === !0 && Z.noTick !== !0 ? u(dl, {
                class: "q-tree__tickbox",
                modelValue: Z.indeterminate === !0 ? null : Z.ticked,
                color: m.value,
                dark: a.value,
                dense: !0,
                keepColor: !0,
                disable: Z.tickable !== !0,
                onKeydown: Ie,
                "onUpdate:modelValue": H => {
                    K(Z, H)
                }
            }) : null, u("div", {class: "q-tree__node-header-content col row no-wrap items-center" + (Z.selected === !0 ? x.value : g.value)}, [ie ? ie(_) : [B(T), u("div", T[e.labelKey])]])]), I === !0 ? e.noTransition === !0 ? Z.expanded === !0 ? u("div", {
                class: "q-tree__node-collapsible" + g.value,
                key: `${ee}__q`
            }, [N, u("div", {
                class: "q-tree__children" + (Z.disabled === !0 ? " q-tree__node--disabled" : ""),
                role: "group"
            }, G)]) : null : u(ir, {
                duration: e.duration,
                onShow: Y,
                onHide: J
            }, () => Sn(u("div", {
                class: "q-tree__node-collapsible" + g.value,
                key: `${ee}__q`
            }, [N, u("div", {
                class: "q-tree__children" + (Z.disabled === !0 ? " q-tree__node--disabled" : ""),
                role: "group"
            }, G)]), [[uv, Z.expanded]])) : N])
        }

        function Q(T) {
            const ee = d[T];
            ee && ee.focus()
        }

        function ae(T, ee, Z, ie) {
            ie !== !0 && ee.selectable !== !1 && Q(ee.key), p.value && ee.selectable ? e.noSelectionUnset === !1 ? n("update:selected", ee.key !== e.selected ? ee.key : null) : ee.key !== e.selected && n("update:selected", ee.key === void 0 ? null : ee.key) : be(T, ee, Z, ie), typeof T.handler == "function" && T.handler(T)
        }

        function be(T, ee, Z, ie) {
            Z !== void 0 && Ie(Z), ie !== !0 && ee.selectable !== !1 && Q(ee.key), E(ee.key, !ee.expanded, T, ee)
        }

        function K(T, ee) {
            if (T.indeterminate === !0 && (ee = T.indeterminateNextState), T.strictTicking) z([T.key], ee); else if (T.leafTicking) {
                const Z = [], ie = G => {
                    G.isParent ? (ee !== !0 && G.noTick !== !0 && G.tickable === !0 && Z.push(G.key), G.leafTicking === !0 && G.children.forEach(ie)) : G.noTick === !0 || G.tickable !== !0 || G.leafFilteredTicking === !0 && G.matchesFilter !== !0 || Z.push(G.key)
                };
                ie(T), z(Z, ee)
            }
        }

        return pe(() => e.ticked, T => {
            r.value = T
        }), pe(() => e.expanded, T => {
            s.value = T
        }), e.defaultExpandAll === !0 && L(), Object.assign(o, {
            getNodeByKey: y,
            getTickedNodes: b,
            getExpandedNodes: h,
            isExpanded: C,
            collapseAll: A,
            expandAll: L,
            setExpanded: E,
            isTicked: O,
            setTicked: z
        }), () => {
            const T = k(e.nodes);
            return u("div", {
                class: c.value,
                role: "tree"
            }, T.length === 0 ? e.filter ? e.noResultsLabel || l.lang.tree.noResults : e.noNodesLabel || l.lang.tree.noNodes : T)
        }
    }
});

function jd(e) {
    return (100 * e).toFixed(2) + "%"
}

const Rx = {
    ...Ge, ...Zp,
    label: String,
    color: String,
    textColor: String,
    square: Boolean,
    flat: Boolean,
    bordered: Boolean,
    noThumbnails: Boolean,
    autoUpload: Boolean,
    hideUploadBtn: Boolean,
    disable: Boolean,
    readonly: Boolean
}, q0 = [...Gp, "start", "finish", "added", "removed"];

function Vx(e, t) {
    const n = Se(), {props: o, slots: l, emit: a, proxy: i} = n, {$q: r} = i, s = Je(o, r);

    function d(_, H, re) {
        if (_.__status = H, H === "idle") return _.__uploaded = 0, _.__progress = 0, _.__sizeLabel = cs(_.size), void (_.__progressLabel = "0.00%");
        H !== "failed" && (_.__uploaded = H === "uploaded" ? _.size : re, _.__progress = H === "uploaded" ? 1 : Math.min(.9999, _.__uploaded / _.size), _.__progressLabel = jd(_.__progress)), i.$forceUpdate()
    }

    const c = f(() => o.disable !== !0 && o.readonly !== !0), p = D(!1), v = D(null), m = D(null), g = {
        files: D([]),
        queuedFiles: D([]),
        uploadedFiles: D([]),
        uploadedSize: D(0),
        updateFileStatus: d,
        isAlive: () => ga(n) === !1
    }, {
        pickFiles: x,
        addFiles: w,
        onDragover: S,
        onDragleave: y,
        processFiles: b,
        getDndNode: h,
        maxFilesNumber: C,
        maxTotalSizeNumber: A
    } = Jp({editable: c, dnd: p, getFileInput: K, addFilesToQueue: T});
    Object.assign(g, e({
        props: o, slots: l, emit: a, helpers: g, exposeApi: _ => {
            Object.assign(g, _)
        }
    })), g.isBusy === void 0 && (g.isBusy = D(!1));
    const L = D(0), E = f(() => L.value === 0 ? 0 : g.uploadedSize.value / L.value), V = f(() => jd(E.value)),
        O = f(() => cs(L.value)),
        z = f(() => c.value === !0 && g.isUploading.value !== !0 && (o.multiple === !0 || g.queuedFiles.value.length === 0) && (o.maxFiles === void 0 || g.files.value.length < C.value) && (o.maxTotalSize === void 0 || L.value < A.value)),
        M = f(() => c.value === !0 && g.isBusy.value !== !0 && g.isUploading.value !== !0 && g.queuedFiles.value.length !== 0);
    un(Rv, ie);
    const k = f(() => "q-uploader column no-wrap" + (s.value === !0 ? " q-uploader--dark q-dark" : "") + (o.bordered === !0 ? " q-uploader--bordered" : "") + (o.square === !0 ? " q-uploader--square no-border-radius" : "") + (o.flat === !0 ? " q-uploader--flat no-shadow" : "") + (o.disable === !0 ? " disabled q-uploader--disable" : "") + (p.value === !0 ? " q-uploader--dnd" : "")),
        B = f(() => "q-uploader__header" + (o.color !== void 0 ? ` bg-${o.color}` : "") + (o.textColor !== void 0 ? ` text-${o.textColor}` : ""));

    function Y() {
        o.disable === !1 && (g.abort(), g.uploadedSize.value = 0, L.value = 0, be(), g.files.value = [], g.queuedFiles.value = [], g.uploadedFiles.value = [])
    }

    function J() {
        o.disable === !1 && Q(["uploaded"], () => {
            g.uploadedFiles.value = []
        })
    }

    function $() {
        Q(["idle", "failed"], ({size: _}) => {
            L.value -= _, g.queuedFiles.value = []
        })
    }

    function Q(_, H) {
        if (o.disable === !0) return;
        const re = {files: [], size: 0},
            q = g.files.value.filter(P => _.indexOf(P.__status) === -1 || (re.size += P.size, re.files.push(P), P.__img !== void 0 && window.URL.revokeObjectURL(P.__img.src), !1));
        re.files.length !== 0 && (g.files.value = q, H(re), a("removed", re.files))
    }

    function ae(_) {
        o.disable || (_.__status === "uploaded" ? g.uploadedFiles.value = g.uploadedFiles.value.filter(H => H.__key !== _.__key) : _.__status === "uploading" ? _.__abort() : L.value -= _.size, g.files.value = g.files.value.filter(H => H.__key !== _.__key || (H.__img !== void 0 && window.URL.revokeObjectURL(H.__img.src), !1)), g.queuedFiles.value = g.queuedFiles.value.filter(H => H.__key !== _.__key), a("removed", [_]))
    }

    function be() {
        g.files.value.forEach(_ => {
            _.__img !== void 0 && window.URL.revokeObjectURL(_.__img.src)
        })
    }

    function K() {
        return m.value || v.value.getElementsByClassName("q-uploader__input")[0]
    }

    function T(_, H) {
        const re = b(_, H, g.files.value, !0), q = K();
        q != null && (q.value = ""), re !== void 0 && (re.forEach(P => {
            if (g.updateFileStatus(P, "idle"), L.value += P.size, o.noThumbnails !== !0 && P.type.toUpperCase().startsWith("IMAGE")) {
                const F = new Image;
                F.src = window.URL.createObjectURL(P), P.__img = F
            }
        }), g.files.value = g.files.value.concat(re), g.queuedFiles.value = g.queuedFiles.value.concat(re), a("added", re), o.autoUpload === !0 && g.upload())
    }

    function ee() {
        M.value === !0 && g.upload()
    }

    function Z(_, H, re) {
        if (_ === !0) {
            const q = {type: "a", key: H, icon: r.iconSet.uploader[H], flat: !0, dense: !0};
            let P;
            return H === "add" ? (q.onClick = x, P = ie) : q.onClick = re, u(tt, q, P)
        }
    }

    function ie() {
        return u("input", {
            ref: m,
            class: "q-uploader__input overflow-hidden absolute-full",
            tabindex: -1,
            type: "file",
            title: "",
            accept: o.accept,
            multiple: o.multiple === !0 ? "multiple" : void 0,
            capture: o.capture,
            onMousedown: _t,
            onClick: x,
            onChange: T
        })
    }

    function G() {
        return l.header !== void 0 ? l.header(N) : [u("div", {class: "q-uploader__header-content column"}, [u("div", {class: "flex flex-center no-wrap q-gutter-xs"}, [Z(g.queuedFiles.value.length !== 0, "removeQueue", $), Z(g.uploadedFiles.value.length !== 0, "removeUploaded", J), g.isUploading.value === !0 ? u(tn, {class: "q-uploader__spinner"}) : null, u("div", {class: "col column justify-center"}, [o.label !== void 0 ? u("div", {class: "q-uploader__title"}, [o.label]) : null, u("div", {class: "q-uploader__subtitle"}, [O.value + " / " + V.value])]), Z(z.value, "add"), Z(o.hideUploadBtn === !1 && M.value === !0, "upload", g.upload), Z(g.isUploading.value, "clear", g.abort)])])]
    }

    function I() {
        return l.list !== void 0 ? l.list(N) : g.files.value.map(_ => u("div", {
            key: _.__key,
            class: "q-uploader__file relative-position" + (o.noThumbnails !== !0 && _.__img !== void 0 ? " q-uploader__file--img" : "") + (_.__status === "failed" ? " q-uploader__file--failed" : _.__status === "uploaded" ? " q-uploader__file--uploaded" : ""),
            style: o.noThumbnails !== !0 && _.__img !== void 0 ? {backgroundImage: 'url("' + _.__img.src + '")'} : null
        }, [u("div", {class: "q-uploader__file-header row flex-center no-wrap"}, [_.__status === "failed" ? u(Ze, {
            class: "q-uploader__file-status",
            name: r.iconSet.type.negative,
            color: "negative"
        }) : null, u("div", {class: "q-uploader__file-header-content col"}, [u("div", {class: "q-uploader__title"}, [_.name]), u("div", {class: "q-uploader__subtitle row items-center no-wrap"}, [_.__sizeLabel + " / " + _.__progressLabel])]), _.__status === "uploading" ? u(_u, {
            value: _.__progress,
            min: 0,
            max: 1,
            indeterminate: _.__progress === 0
        }) : u(tt, {
            round: !0,
            dense: !0,
            flat: !0,
            icon: r.iconSet.uploader[_.__status === "uploaded" ? "done" : "clear"],
            onClick: () => {
                ae(_)
            }
        })])]))
    }

    pe(g.isUploading, (_, H) => {
        H === !1 && _ === !0 ? a("start") : H === !0 && _ === !1 && a("finish")
    }), Ke(() => {
        g.isUploading.value === !0 && g.abort(), g.files.value.length !== 0 && be()
    });
    const N = {};
    for (const _ in g) Ot(g[_]) === !0 ? At(N, _, () => g[_].value) : N[_] = g[_];
    return Object.assign(N, {
        upload: ee,
        reset: Y,
        removeUploadedFiles: J,
        removeQueuedFiles: $,
        removeFile: ae,
        pickFiles: x,
        addFiles: w
    }), kv(N, {
        canAddFiles: () => z.value,
        canUpload: () => M.value,
        uploadSizeLabel: () => O.value,
        uploadProgressLabel: () => V.value
    }), t({
        ...g,
        upload: ee,
        reset: Y,
        removeUploadedFiles: J,
        removeQueuedFiles: $,
        removeFile: ae,
        pickFiles: x,
        addFiles: w,
        canAddFiles: z,
        canUpload: M,
        uploadSizeLabel: O,
        uploadProgressLabel: V
    }), () => {
        const _ = [u("div", {class: B.value}, G()), u("div", {class: "q-uploader__list scroll"}, I()), h("uploader")];
        g.isBusy.value === !0 && _.push(u("div", {class: "q-uploader__overlay absolute-full flex flex-center"}, [u(tn)]));
        const H = {ref: v, class: k.value};
        return z.value === !0 && Object.assign(H, {onDragover: S, onDragleave: y}), u("div", H, _)
    }
}

const Fx = () => !0;

function T0(e) {
    const t = {};
    return e.forEach(n => {
        t[n] = Fx
    }), t
}

const zx = T0(q0);
var Nx = ({name: e, props: t, emits: n, injectPlugin: o}) => ve({
    name: e,
    props: {...Rx, ...t},
    emits: Et(n) === !0 ? {...zx, ...n} : [...q0, ...n],
    setup(l, {expose: a}) {
        return Vx(o, a)
    }
});

function Ln(e) {
    return typeof e == "function" ? e : () => e
}

const Ix = {
    url: [Function, String],
    method: {type: [Function, String], default: "POST"},
    fieldName: {type: [Function, String], default: () => e => e.name},
    headers: [Function, Array],
    formFields: [Function, Array],
    withCredentials: [Function, Boolean],
    sendRaw: [Function, Boolean],
    batch: [Function, Boolean],
    factory: Function
}, Dx = ["factoryFailed", "uploaded", "failed", "uploading"];

function Hx({props: e, emit: t, helpers: n}) {
    const o = D([]), l = D([]), a = D(0), i = f(() => ({
        url: Ln(e.url),
        method: Ln(e.method),
        headers: Ln(e.headers),
        formFields: Ln(e.formFields),
        fieldName: Ln(e.fieldName),
        withCredentials: Ln(e.withCredentials),
        sendRaw: Ln(e.sendRaw),
        batch: Ln(e.batch)
    })), r = f(() => a.value > 0), s = f(() => l.value.length !== 0);
    let d;

    function c() {
        o.value.forEach(g => {
            g.abort()
        }), l.value.length !== 0 && (d = !0)
    }

    function p() {
        const g = n.queuedFiles.value.slice(0);
        n.queuedFiles.value = [], i.value.batch(g) ? v(g) : g.forEach(x => {
            v([x])
        })
    }

    function v(g) {
        if (a.value++, typeof e.factory != "function") return void m(g, {});
        const x = e.factory(g);
        if (x) if (typeof x.catch == "function" && typeof x.then == "function") {
            l.value.push(x);
            const w = S => {
                n.isAlive() === !0 && (l.value = l.value.filter(y => y !== x), l.value.length === 0 && (d = !1), n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach(y => {
                    n.updateFileStatus(y, "failed")
                }), t("factoryFailed", S, g), a.value--)
            };
            x.then(S => {
                d === !0 ? w(new Error("Aborted")) : n.isAlive() === !0 && (l.value = l.value.filter(y => y !== x), m(g, S))
            }).catch(w)
        } else m(g, x || {}); else t("factoryFailed", new Error("QUploader: factory() does not return properly"), g), a.value--
    }

    function m(g, x) {
        const w = new FormData, S = new XMLHttpRequest, y = (M, k) => x[M] !== void 0 ? Ln(x[M])(k) : i.value[M](k),
            b = y("url", g);
        if (!b) return console.error("q-uploader: invalid or no URL specified"), void a.value--;
        const h = y("formFields", g);
        h !== void 0 && h.forEach(M => {
            w.append(M.name, M.value)
        });
        let C, A = 0, L = 0, E = 0, V = 0;
        S.upload.addEventListener("progress", M => {
            if (C === !0) return;
            const k = Math.min(V, M.loaded);
            n.uploadedSize.value += k - E, E = k;
            let B = E - L;
            for (let Y = A; B > 0 && Y < g.length; Y++) {
                const J = g[Y];
                if (!(B > J.size)) return void n.updateFileStatus(J, "uploading", B);
                B -= J.size, A++, L += J.size, n.updateFileStatus(J, "uploading", J.size)
            }
        }, !1), S.onreadystatechange = () => {
            S.readyState < 4 || (S.status && S.status < 400 ? (n.uploadedFiles.value = n.uploadedFiles.value.concat(g), g.forEach(M => {
                n.updateFileStatus(M, "uploaded")
            }), t("uploaded", {
                files: g,
                xhr: S
            })) : (C = !0, n.uploadedSize.value -= E, n.queuedFiles.value = n.queuedFiles.value.concat(g), g.forEach(M => {
                n.updateFileStatus(M, "failed")
            }), t("failed", {files: g, xhr: S})), a.value--, o.value = o.value.filter(M => M !== S))
        }, S.open(y("method", g), b), y("withCredentials", g) === !0 && (S.withCredentials = !0);
        const O = y("headers", g);
        O !== void 0 && O.forEach(M => {
            S.setRequestHeader(M.name, M.value)
        });
        const z = y("sendRaw", g);
        g.forEach(M => {
            n.updateFileStatus(M, "uploading", 0), z !== !0 && w.append(y("fieldName", M), M, M.name), M.xhr = S, M.__abort = () => {
                S.abort()
            }, V += M.size
        }), t("uploading", {files: g, xhr: S}), o.value.push(S), z === !0 ? S.send(new Blob(g)) : S.send(w)
    }

    return {isUploading: r, isBusy: s, abort: c, upload: p}
}

var jx = {name: "QUploader", props: Ix, emits: Dx, injectPlugin: Hx}, Qx = Nx(jx), Kx = ve({
    name: "QUploaderAddTrigger", setup() {
        const e = vt(Rv, at);
        return e === at && console.error("QUploaderAddTrigger needs to be child of QUploader"), e
    }
}), Ux = ve({
    name: "QVideo",
    props: {
        ...Cu,
        src: {type: String, required: !0},
        title: String,
        fetchpriority: {type: String, default: "auto"},
        loading: {type: String, default: "eager"},
        referrerpolicy: {type: String, default: "strict-origin-when-cross-origin"}
    },
    setup(e) {
        const t = ku(e), n = f(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
        return () => u("div", {class: n.value, style: t.value}, [u("iframe", {
            src: e.src,
            title: e.title,
            fetchpriority: e.fetchpriority,
            loading: e.loading,
            referrerpolicy: e.referrerpolicy,
            frameborder: "0",
            allowfullscreen: !0
        })])
    }
}), Wx = Object.freeze({
    __proto__: null,
    QAjaxBar: zv,
    QAvatar: Hv,
    QBadge: ky,
    QBanner: qy,
    QBar: Ty,
    QBreadcrumbs: Ey,
    QBreadcrumbsEl: Oy,
    QBtn: tt,
    QBtnDropdown: rp,
    QBtnGroup: nu,
    QBtnToggle: l1,
    QCard: uu,
    QCardSection: lo,
    QCardActions: sp,
    QCarousel: c1,
    QCarouselSlide: d1,
    QCarouselControl: f1,
    QChatMessage: v1,
    QCheckbox: dl,
    QChip: bu,
    QCircularProgress: _u,
    QColor: $1,
    QDate: N1,
    QDialog: Ca,
    QDrawer: j1,
    QEditor: J1,
    QExpansionItem: n_,
    QFab: i_,
    QFabAction: s_,
    QField: Xp,
    QFile: v_,
    QFooter: p_,
    QForm: m_,
    QFormChildMixin: h_,
    QHeader: g_,
    QIcon: Ze,
    QImg: y_,
    QInfiniteScroll: __,
    QInnerLoading: w_,
    QInput: qu,
    QIntersection: M_,
    QList: a0,
    QItem: ka,
    QItemSection: In,
    QItemLabel: Mi,
    QKnob: P_,
    QLayout: B_,
    QMarkupTable: i0,
    QMenu: wa,
    QNoSsr: L_,
    QOptionGroup: c0,
    QPage: F_,
    QPageContainer: z_,
    QPageScroller: N_,
    QPageSticky: I_,
    QPagination: D_,
    QParallax: H_,
    QPopupEdit: j_,
    QPopupProxy: Q_,
    QLinearProgress: v0,
    QPullToRefresh: U_,
    QRadio: r0,
    QRange: W_,
    QRating: Y_,
    QResizeObserver: co,
    QResponsive: X_,
    QScrollArea: Z_,
    QScrollObserver: Tu,
    QSelect: y0,
    QSeparator: fo,
    QSkeleton: lw,
    QSlideItem: aw,
    QSlideTransition: ir,
    QSlider: Co,
    QSpace: rw,
    QSpinner: tn,
    QSpinnerAudio: uw,
    QSpinnerBall: dw,
    QSpinnerBars: vw,
    QSpinnerBox: mw,
    QSpinnerClock: gw,
    QSpinnerComment: yw,
    QSpinnerCube: ww,
    QSpinnerDots: Sw,
    QSpinnerFacebook: kw,
    QSpinnerGears: Tw,
    QSpinnerGrid: Mw,
    QSpinnerHearts: Pw,
    QSpinnerHourglass: Bw,
    QSpinnerInfinity: Lw,
    QSpinnerIos: Vw,
    QSpinnerOrbit: zw,
    QSpinnerOval: Iw,
    QSpinnerPie: Hw,
    QSpinnerPuff: Qw,
    QSpinnerRadio: Uw,
    QSpinnerRings: Yw,
    QSpinnerTail: Zw,
    QSplitter: Gw,
    QStep: Jw,
    QStepper: nx,
    QStepperNavigation: ox,
    QTabPanels: kp,
    QTabPanel: ti,
    QTable: Sx,
    QTh: x0,
    QTr: Cx,
    QTd: kx,
    QTabs: bs,
    QTab: Zo,
    QRouteTab: qx,
    QTime: Mx,
    QTimeline: Ex,
    QTimelineEntry: Px,
    QToggle: s0,
    QToolbar: Ax,
    QToolbarTitle: Bx,
    QTooltip: Dp,
    QTree: Lx,
    QUploader: Qx,
    QUploaderAddTrigger: Kx,
    QVideo: Ux,
    QVirtualScroll: C0
});

function Qd(e) {
    if (e === !1) return 0;
    if (e === !0 || e === void 0) return 1;
    const t = parseInt(e, 10);
    return isNaN(t) ? 0 : t
}

var Yx = qn({
    name: "close-popup", beforeMount(e, {value: t}) {
        const n = {
            depth: Qd(t), handler(o) {
                n.depth !== 0 && setTimeout(() => {
                    const l = jy(e);
                    l !== void 0 && Qy(l, o, n.depth)
                })
            }, handlerKey(o) {
                dn(o, 13) === !0 && n.handler(o)
            }
        };
        e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey)
    }, updated(e, {value: t, oldValue: n}) {
        t !== n && (e.__qclosepopup.depth = Qd(t))
    }, beforeUnmount(e) {
        const t = e.__qclosepopup;
        e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup
    }
});
let Xx = 0, zl;

function Kd(e, t) {
    zl === void 0 && (zl = document.createElement("div"), zl.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(zl));
    const n = e.getBoundingClientRect(), o = zl.getBoundingClientRect(), {
        marginLeft: l,
        marginRight: a,
        marginTop: i,
        marginBottom: r
    } = window.getComputedStyle(e), s = parseInt(l, 10) + parseInt(a, 10), d = parseInt(i, 10) + parseInt(r, 10);
    return {
        left: n.left - o.left,
        top: n.top - o.top,
        width: n.right - n.left,
        height: n.bottom - n.top,
        widthM: n.right - n.left + (t === !0 ? 0 : s),
        heightM: n.bottom - n.top + (t === !0 ? 0 : d),
        marginH: t === !0 ? s : 0,
        marginV: t === !0 ? d : 0
    }
}

function Ua(e) {
    return {width: e.scrollWidth, height: e.scrollHeight}
}

const Ud = ["Top", "Right", "Bottom", "Left"],
    Wd = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
    Zx = /-block|-inline|block-|inline-/, Gx = /(-block|-inline|block-|inline-).*:/;

function Yd(e, t) {
    const n = window.getComputedStyle(e), o = {};
    for (let l = 0; l < t.length; l++) {
        const a = t[l];
        if (n[a] === "") if (a === "cssText") {
            const i = n.length;
            let r = "";
            for (let s = 0; s < i; s++) Zx.test(n[s]) !== !0 && (r += n[s] + ": " + n[n[s]] + "; ");
            o[a] = r
        } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(a) > -1) {
            const i = a.replace("border", "");
            let r = "";
            for (let s = 0; s < Ud.length; s++) {
                const d = "border" + Ud[s] + i;
                r += n[d] + " "
            }
            o[a] = r
        } else if (a === "borderRadius") {
            let i = "", r = "";
            for (let s = 0; s < Wd.length; s++) {
                const d = n[Wd[s]].split(" ");
                i += d[0] + " ", r += (d[1] === void 0 ? d[0] : d[1]) + " "
            }
            o[a] = i + "/ " + r
        } else o[a] = n[a]; else o[a] = a === "cssText" ? n[a].split(";").filter(i => Gx.test(i) !== !0).join(";") : n[a]
    }
    return o
}

const Jx = ["absolute", "fixed", "relative", "sticky"];

function Xd(e) {
    let t = e, n = 0;
    for (; t !== null && t !== document;) {
        const {position: o, zIndex: l} = window.getComputedStyle(t), a = Number(l);
        a > n && (t === e || Jx.includes(o) === !0) && (n = a), t = t.parentNode
    }
    return n
}

function eS(e) {
    return {from: e.from, to: e.to !== void 0 ? e.to : e.from}
}

function tS(e) {
    return typeof e == "number" ? e = {duration: e} : typeof e == "function" && (e = {onEnd: e}), {
        ...e,
        waitFor: e.waitFor === void 0 ? 0 : e.waitFor,
        duration: isNaN(e.duration) === !0 ? 300 : parseInt(e.duration, 10),
        easing: typeof e.easing == "string" && e.easing.length !== 0 ? e.easing : "ease-in-out",
        delay: isNaN(e.delay) === !0 ? 0 : parseInt(e.delay, 10),
        fill: typeof e.fill == "string" && e.fill.length !== 0 ? e.fill : "none",
        resize: e.resize === !0,
        useCSS: e.useCSS === !0 || e.usecss === !0,
        hideFromClone: e.hideFromClone === !0 || e.hidefromclone === !0,
        keepToClone: e.keepToClone === !0 || e.keeptoclone === !0,
        tween: e.tween === !0,
        tweenFromOpacity: isNaN(e.tweenFromOpacity) === !0 ? .6 : parseFloat(e.tweenFromOpacity),
        tweenToOpacity: isNaN(e.tweenToOpacity) === !0 ? .5 : parseFloat(e.tweenToOpacity)
    }
}

function Zd(e) {
    const t = typeof e;
    return t === "function" ? e() : t === "string" ? document.querySelector(e) : e
}

function Gd(e) {
    return e && e.ownerDocument === document && e.parentNode !== null
}

function nS(e) {
    let t = () => !1, n = !1, o = !0;
    const l = eS(e), a = tS(e), i = Zd(l.from);
    if (Gd(i) !== !0) return t;
    typeof i.qMorphCancel == "function" && i.qMorphCancel();
    let r, s, d, c;
    const p = i.parentNode, v = i.nextElementSibling, m = Kd(i, a.resize), {
            width: g,
            height: x
        } = Ua(p), {
            borderWidth: w,
            borderStyle: S,
            borderColor: y,
            borderRadius: b,
            backgroundColor: h,
            transform: C,
            position: A,
            cssText: L
        } = Yd(i, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]),
        E = i.classList.toString(), V = i.style.cssText, O = i.cloneNode(!0),
        z = a.tween === !0 ? i.cloneNode(!0) : void 0;
    z !== void 0 && (z.className = z.classList.toString().split(" ").filter(k => /^bg-/.test(k) === !1).join(" ")), a.hideFromClone === !0 && O.classList.add("q-morph--internal"), O.setAttribute("aria-hidden", "true"), O.style.transition = "none", O.style.animation = "none", O.style.pointerEvents = "none", p.insertBefore(O, v), i.qMorphCancel = () => {
        n = !0, O.remove(), z !== void 0 && z.remove(), a.hideFromClone === !0 && O.classList.remove("q-morph--internal"), i.qMorphCancel = void 0
    };
    const M = () => {
        const k = Zd(l.to);
        if (n === !0 || Gd(k) !== !0) return void (typeof i.qMorphCancel == "function" && i.qMorphCancel());
        i !== k && typeof k.qMorphCancel == "function" && k.qMorphCancel(), a.keepToClone !== !0 && k.classList.add("q-morph--internal"), O.classList.add("q-morph--internal");
        const {width: B, height: Y} = Ua(p), {width: J, height: $} = Ua(k.parentNode);
        a.hideFromClone !== !0 && O.classList.remove("q-morph--internal"), k.qMorphCancel = () => {
            n = !0, O.remove(), z !== void 0 && z.remove(), a.hideFromClone === !0 && O.classList.remove("q-morph--internal"), a.keepToClone !== !0 && k.classList.remove("q-morph--internal"), i.qMorphCancel = void 0, k.qMorphCancel = void 0
        };
        const Q = () => {
            if (n === !0) return void (typeof k.qMorphCancel == "function" && k.qMorphCancel());
            a.hideFromClone !== !0 && (O.classList.add("q-morph--internal"), O.innerHTML = "", O.style.left = 0, O.style.right = "unset", O.style.top = 0, O.style.bottom = "unset", O.style.transform = "none"), a.keepToClone !== !0 && k.classList.remove("q-morph--internal");
            const ae = k.parentNode, {width: be, height: K} = Ua(ae), T = k.cloneNode(a.keepToClone);
            T.setAttribute("aria-hidden", "true"), a.keepToClone !== !0 && (T.style.left = 0, T.style.right = "unset", T.style.top = 0, T.style.bottom = "unset", T.style.transform = "none", T.style.pointerEvents = "none"), T.classList.add("q-morph--internal");
            const ee = k === i && p === ae ? O : k.nextElementSibling;
            ae.insertBefore(T, ee);
            const {
                    borderWidth: Z,
                    borderStyle: ie,
                    borderColor: G,
                    borderRadius: I,
                    backgroundColor: N,
                    transform: _,
                    position: H,
                    cssText: re
                } = Yd(k, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]),
                q = k.classList.toString(), P = k.style.cssText;
            k.style.cssText = re, k.style.transform = "none", k.style.animation = "none", k.style.transition = "none", k.className = q.split(" ").filter(ye => /^bg-/.test(ye) === !1).join(" ");
            const F = Kd(k, a.resize), te = m.left - F.left, oe = m.top - F.top,
                ne = m.width / (F.width > 0 ? F.width : 10), ge = m.height / (F.height > 0 ? F.height : 100),
                he = g - B, me = x - Y, W = be - J, ue = K - $, U = Math.max(m.widthM, he),
                de = Math.max(m.heightM, me), we = Math.max(F.widthM, W), xe = Math.max(F.heightM, ue),
                Ce = i === k && ["absolute", "fixed"].includes(H) === !1 && ["absolute", "fixed"].includes(A) === !1;
            let Be = H === "fixed", Ne = ae;
            for (; Be !== !0 && Ne !== document;) Be = window.getComputedStyle(Ne).position === "fixed", Ne = Ne.parentNode;
            if (a.hideFromClone !== !0 && (O.style.display = "block", O.style.flex = "0 0 auto", O.style.opacity = 0, O.style.minWidth = "unset", O.style.maxWidth = "unset", O.style.minHeight = "unset", O.style.maxHeight = "unset", O.classList.remove("q-morph--internal")), a.keepToClone !== !0 && (T.style.display = "block", T.style.flex = "0 0 auto", T.style.opacity = 0, T.style.minWidth = "unset", T.style.maxWidth = "unset", T.style.minHeight = "unset", T.style.maxHeight = "unset"), T.classList.remove("q-morph--internal"), typeof a.classes == "string" && (k.className += " " + a.classes), typeof a.style == "string") k.style.cssText += " " + a.style; else if (Et(a.style) === !0) for (const ye in a.style) k.style[ye] = a.style[ye];
            const Ye = Xd(O), se = Xd(k), _e = Be === !0 ? document.documentElement : {scrollLeft: 0, scrollTop: 0};
            k.style.position = Be === !0 ? "fixed" : "absolute", k.style.left = `${F.left - _e.scrollLeft}px`, k.style.right = "unset", k.style.top = `${F.top - _e.scrollTop}px`, k.style.margin = 0, a.resize === !0 && (k.style.minWidth = "unset", k.style.maxWidth = "unset", k.style.minHeight = "unset", k.style.maxHeight = "unset", k.style.overflow = "hidden", k.style.overflowX = "hidden", k.style.overflowY = "hidden"), document.body.appendChild(k), z !== void 0 && (z.style.cssText = L, z.style.transform = "none", z.style.animation = "none", z.style.transition = "none", z.style.position = k.style.position, z.style.left = `${m.left - _e.scrollLeft}px`, z.style.right = "unset", z.style.top = `${m.top - _e.scrollTop}px`, z.style.margin = 0, z.style.pointerEvents = "none", a.resize === !0 && (z.style.minWidth = "unset", z.style.maxWidth = "unset", z.style.minHeight = "unset", z.style.maxHeight = "unset", z.style.overflow = "hidden", z.style.overflowX = "hidden", z.style.overflowY = "hidden"), document.body.appendChild(z));
            const le = ye => {
                i === k && o !== !0 ? (k.style.cssText = V, k.className = E) : (k.style.cssText = P, k.className = q), T.parentNode === ae && ae.insertBefore(k, T), O.remove(), T.remove(), z !== void 0 && z.remove(), t = () => !1, i.qMorphCancel = void 0, k.qMorphCancel = void 0, typeof a.onEnd == "function" && a.onEnd(o === !0 ? "to" : "from", ye === !0)
            };
            if (a.useCSS !== !0 && typeof k.animate == "function") {
                const ye = a.resize === !0 ? {
                        transform: `translate(${te}px, ${oe}px)`,
                        width: `${U}px`,
                        height: `${de}px`
                    } : {transform: `translate(${te}px, ${oe}px) scale(${ne}, ${ge})`},
                    Te = a.resize === !0 ? {width: `${we}px`, height: `${xe}px`} : {},
                    Re = a.resize === !0 ? {width: `${U}px`, height: `${de}px`} : {}, Me = a.resize === !0 ? {
                        transform: `translate(${-1 * te}px, ${-1 * oe}px)`,
                        width: `${we}px`,
                        height: `${xe}px`
                    } : {transform: `translate(${-1 * te}px, ${-1 * oe}px) scale(${1 / ne}, ${1 / ge})`},
                    Xe = z !== void 0 ? {opacity: a.tweenToOpacity} : {backgroundColor: h},
                    dt = z !== void 0 ? {opacity: 1} : {backgroundColor: N};
                c = k.animate([{
                    margin: 0,
                    borderWidth: w,
                    borderStyle: S,
                    borderColor: y,
                    borderRadius: b,
                    zIndex: Ye,
                    transformOrigin: "0 0", ...ye, ...Xe
                }, {
                    margin: 0,
                    borderWidth: Z,
                    borderStyle: ie,
                    borderColor: G,
                    borderRadius: I,
                    zIndex: se,
                    transformOrigin: "0 0",
                    transform: _, ...Te, ...dt
                }], {
                    duration: a.duration,
                    easing: a.easing,
                    fill: a.fill,
                    delay: a.delay
                }), s = z === void 0 ? void 0 : z.animate([{
                    opacity: a.tweenFromOpacity,
                    margin: 0,
                    borderWidth: w,
                    borderStyle: S,
                    borderColor: y,
                    borderRadius: b,
                    zIndex: Ye,
                    transformOrigin: "0 0",
                    transform: C, ...Re
                }, {
                    opacity: 0,
                    margin: 0,
                    borderWidth: Z,
                    borderStyle: ie,
                    borderColor: G,
                    borderRadius: I,
                    zIndex: se,
                    transformOrigin: "0 0", ...Me
                }], {
                    duration: a.duration,
                    easing: a.easing,
                    fill: a.fill,
                    delay: a.delay
                }), r = a.hideFromClone === !0 || Ce === !0 ? void 0 : O.animate([{
                    margin: `${me < 0 ? me / 2 : 0}px ${he < 0 ? he / 2 : 0}px`,
                    width: `${U + m.marginH}px`,
                    height: `${de + m.marginV}px`
                }, {margin: 0, width: 0, height: 0}], {
                    duration: a.duration,
                    easing: a.easing,
                    fill: a.fill,
                    delay: a.delay
                }), d = a.keepToClone === !0 ? void 0 : T.animate([Ce === !0 ? {
                    margin: `${me < 0 ? me / 2 : 0}px ${he < 0 ? he / 2 : 0}px`,
                    width: `${U + m.marginH}px`,
                    height: `${de + m.marginV}px`
                } : {margin: 0, width: 0, height: 0}, {
                    margin: `${ue < 0 ? ue / 2 : 0}px ${W < 0 ? W / 2 : 0}px`,
                    width: `${we + F.marginH}px`,
                    height: `${xe + F.marginV}px`
                }], {duration: a.duration, easing: a.easing, fill: a.fill, delay: a.delay});
                const ht = jt => {
                    r !== void 0 && r.cancel(), s !== void 0 && s.cancel(), d !== void 0 && d.cancel(), c.cancel(), c.removeEventListener("finish", ht), c.removeEventListener("cancel", ht), le(jt), r = void 0, s = void 0, d = void 0, c = void 0
                };
                i.qMorphCancel = () => {
                    i.qMorphCancel = void 0, n = !0, ht()
                }, k.qMorphCancel = () => {
                    k.qMorphCancel = void 0, n = !0, ht()
                }, c.addEventListener("finish", ht), c.addEventListener("cancel", ht), t = jt => n !== !0 && c !== void 0 && (jt === !0 ? (ht(!0), !0) : (o = o !== !0, r !== void 0 && r.reverse(), s !== void 0 && s.reverse(), d !== void 0 && d.reverse(), c.reverse(), !0))
            } else {
                const ye = `q-morph-anim-${++Xx}`, Te = document.createElement("style"), Re = a.resize === !0 ? `
            transform: translate(${te}px, ${oe}px);
            width: ${U}px;
            height: ${de}px;
          ` : `transform: translate(${te}px, ${oe}px) scale(${ne}, ${ge});`, Me = a.resize === !0 ? `
            width: ${we}px;
            height: ${xe}px;
          ` : "", Xe = a.resize === !0 ? `
            width: ${U}px;
            height: ${de}px;
          ` : "", dt = a.resize === !0 ? `
            transform: translate(${-1 * te}px, ${-1 * oe}px);
            width: ${we}px;
            height: ${xe}px;
          ` : `transform: translate(${-1 * te}px, ${-1 * oe}px) scale(${1 / ne}, ${1 / ge});`,
                    ht = z !== void 0 ? `opacity: ${a.tweenToOpacity};` : `background-color: ${h};`,
                    jt = z !== void 0 ? "opacity: 1;" : `background-color: ${N};`, nn = z === void 0 ? "" : `
            @keyframes ${ye}-from-tween {
              0% {
                opacity: ${a.tweenFromOpacity};
                margin: 0;
                border-width: ${w};
                border-style: ${S};
                border-color: ${y};
                border-radius: ${b};
                z-index: ${Ye};
                transform-origin: 0 0;
                transform: ${C};
                ${Xe}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${Z};
                border-style: ${ie};
                border-color: ${G};
                border-radius: ${I};
                z-index: ${se};
                transform-origin: 0 0;
                ${dt}
              }
            }
          `, Bn = a.hideFromClone === !0 || Ce === !0 ? "" : `
            @keyframes ${ye}-from {
              0% {
                margin: ${me < 0 ? me / 2 : 0}px ${he < 0 ? he / 2 : 0}px;
                width: ${U + m.marginH}px;
                height: ${de + m.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, Tn = Ce === !0 ? `
            margin: ${me < 0 ? me / 2 : 0}px ${he < 0 ? he / 2 : 0}px;
            width: ${U + m.marginH}px;
            height: ${de + m.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, fe = a.keepToClone === !0 ? "" : `
            @keyframes ${ye}-to {
              0% {
                ${Tn}
              }

              100% {
                margin: ${ue < 0 ? ue / 2 : 0}px ${W < 0 ? W / 2 : 0}px;
                width: ${we + F.marginH}px;
                height: ${xe + F.marginV}px;
              }
            }
          `;
                Te.innerHTML = `
          @keyframes ${ye} {
            0% {
              margin: 0;
              border-width: ${w};
              border-style: ${S};
              border-color: ${y};
              border-radius: ${b};
              background-color: ${h};
              z-index: ${Ye};
              transform-origin: 0 0;
              ${Re}
              ${ht}
            }

            100% {
              margin: 0;
              border-width: ${Z};
              border-style: ${ie};
              border-color: ${G};
              border-radius: ${I};
              background-color: ${N};
              z-index: ${se};
              transform-origin: 0 0;
              transform: ${_};
              ${Me}
              ${jt}
            }
          }

          ${Bn}

          ${nn}

          ${fe}
        `, document.head.appendChild(Te);
                let ke = "normal";
                O.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${ke} ${a.fill} ${ye}-from`, z !== void 0 && (z.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${ke} ${a.fill} ${ye}-from-tween`), T.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${ke} ${a.fill} ${ye}-to`, k.style.animation = `${a.duration}ms ${a.easing} ${a.delay}ms ${ke} ${a.fill} ${ye}`;
                const Oe = Ve => {
                    Ve === Object(Ve) && Ve.animationName !== ye || (k.removeEventListener("animationend", Oe), k.removeEventListener("animationcancel", Oe), le(), Te.remove())
                };
                i.qMorphCancel = () => {
                    i.qMorphCancel = void 0, n = !0, Oe()
                }, k.qMorphCancel = () => {
                    k.qMorphCancel = void 0, n = !0, Oe()
                }, k.addEventListener("animationend", Oe), k.addEventListener("animationcancel", Oe), t = Ve => !!(n !== !0 && k && O && T) && (Ve === !0 ? (Oe(), !0) : (o = o !== !0, ke = ke === "normal" ? "reverse" : "normal", O.style.animationDirection = ke, z.style.animationDirection = ke, T.style.animationDirection = ke, k.style.animationDirection = ke, !0))
            }
        };
        a.waitFor > 0 || a.waitFor === "transitionend" || a.waitFor === Object(a.waitFor) && typeof a.waitFor.then == "function" ? (a.waitFor > 0 ? new Promise(be => setTimeout(be, a.waitFor)) : a.waitFor === "transitionend" ? new Promise(be => {
            const K = () => {
                T !== null && (clearTimeout(T), T = null), k && (k.removeEventListener("transitionend", K), k.removeEventListener("transitioncancel", K)), be()
            };
            let T = setTimeout(K, 400);
            k.addEventListener("transitionend", K), k.addEventListener("transitioncancel", K)
        }) : a.waitFor).then(Q).catch(() => {
            typeof k.qMorphCancel == "function" && k.qMorphCancel()
        }) : Q()
    };
    return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(M), k => t(k)
}

const Pi = {},
    oS = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"],
    lS = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];

function el(e, t) {
    e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"))
}

function $0(e) {
    if (e.animating === !0 || e.queue.length < 2) return;
    const [t, n] = e.queue;
    e.animating = !0, t.animating = !0, n.animating = !0, el(t, "remove"), el(n, "remove");
    const o = nS({
        from: t.el, to: n.el, onToggle() {
            el(t, "add"), el(n, "remove")
        }, ...n.opts, onEnd(l, a) {
            n.opts.onEnd !== void 0 && n.opts.onEnd(l, a), a !== !0 && (t.animating = !1, n.animating = !1, e.animating = !1, e.cancel = void 0, e.queue.shift(), $0(e))
        }
    });
    e.cancel = () => {
        o(!0), e.cancel = void 0
    }
}

function M0(e, t) {
    const n = t.opts;
    lS.forEach(o => {
        n[o] = e[o] === !0
    })
}

function aS(e, t) {
    const n = typeof e == "string" && e.length !== 0 ? e.split(":") : [];
    t.name = n[0], t.group = n[1], Object.assign(t.opts, {
        duration: isNaN(n[2]) === !0 ? 300 : parseFloat(n[2]),
        waitFor: n[3]
    })
}

function iS(e, t) {
    e.group !== void 0 && (t.group = e.group), e.name !== void 0 && (t.name = e.name);
    const n = t.opts;
    oS.forEach(o => {
        e[o] !== void 0 && (n[o] = e[o])
    })
}

function rS(e, t) {
    if (t.name !== e) t.animating === !1 && el(t, "add"); else {
        const n = Pi[t.group];
        n === void 0 ? (Pi[t.group] = {
            name: t.group,
            model: e,
            queue: [t],
            animating: !1
        }, el(t, "remove")) : n.model !== e && (n.model = e, n.queue.push(t), n.animating === !1 && n.queue.length === 2 && $0(n))
    }
}

function Jd(e, t) {
    let n;
    Object(t) === t ? (n = "" + t.model, iS(t, e), M0(t, e)) : n = "" + t, n !== e.model ? (e.model = n, rS(n, e)) : e.animating === !1 && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible")
}

var sS = qn({
    name: "morph", mounted(e, t) {
        const n = {el: e, animating: !1, opts: {}};
        M0(t.modifiers, n), aS(t.arg, n), Jd(n, t.value), e.__qmorph = n
    }, updated(e, t) {
        Jd(e.__qmorph, t.value)
    }, beforeUnmount(e) {
        const t = e.__qmorph, n = Pi[t.group];
        n !== void 0 && n.queue.indexOf(t) !== -1 && (n.queue = n.queue.filter(l => l !== t), n.queue.length === 0 && (n.cancel !== void 0 && n.cancel(), delete Pi[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph
    }
});
const uS = {
    childList: !0,
    subtree: !0,
    attributes: !0,
    characterData: !0,
    attributeOldValue: !0,
    characterDataOldValue: !0
};

function ef(e, t, n) {
    t.handler = n, t.observer !== void 0 && t.observer.disconnect(), t.observer = new MutationObserver(o => {
        typeof t.handler == "function" && (t.handler(o) !== !1 && t.once !== !0 || E0(e))
    }), t.observer.observe(e, t.opts)
}

function E0(e) {
    const t = e.__qmutation;
    t !== void 0 && (t.observer !== void 0 && t.observer.disconnect(), delete e.__qmutation)
}

var cS = qn({
    name: "mutation", mounted(e, {modifiers: {once: t, ...n}, value: o}) {
        const l = {once: t, opts: Object.keys(n).length === 0 ? uS : n};
        ef(e, l, o), e.__qmutation = l
    }, updated(e, {oldValue: t, value: n}) {
        const o = e.__qmutation;
        o !== void 0 && t !== n && ef(e, o, n)
    }, beforeUnmount: E0
});
const {passive: Ai} = ut;

function tf(e, {value: t, oldValue: n}) {
    typeof t == "function" ? (e.handler = t, typeof n != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, Ai), e.scroll())) : e.scrollTarget.removeEventListener("scroll", e.scroll, Ai)
}

var dS = qn({
    name: "scroll-fire", mounted(e, t) {
        const n = {
            scrollTarget: An(e), scroll: Tl(() => {
                let o, l;
                n.scrollTarget === window ? (l = e.getBoundingClientRect().bottom, o = window.innerHeight) : (l = yi(e).top + yl(e), o = yi(n.scrollTarget).top + yl(n.scrollTarget)), l > 0 && l < o && (n.scrollTarget.removeEventListener("scroll", n.scroll, Ai), n.handler(e))
            }, 25)
        };
        tf(n, t), e.__qscrollfire = n
    }, updated(e, t) {
        t.value !== t.oldValue && tf(e.__qscrollfire, t)
    }, beforeUnmount(e) {
        const t = e.__qscrollfire;
        t.scrollTarget.removeEventListener("scroll", t.scroll, Ai), t.scroll.cancel(), delete e.__qscrollfire
    }
});

function nf(e, {value: t, oldValue: n}) {
    typeof t == "function" ? (e.handler = t, typeof n != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, ut.passive)) : e.scrollTarget.removeEventListener("scroll", e.scroll, ut.passive)
}

var fS = qn({
    name: "scroll", mounted(e, t) {
        const n = {
            scrollTarget: An(e), scroll() {
                n.handler(so(n.scrollTarget), ar(n.scrollTarget))
            }
        };
        nf(n, t), e.__qscroll = n
    }, updated(e, t) {
        e.__qscroll !== void 0 && t.oldValue !== t.value && nf(e.__qscroll, t)
    }, beforeUnmount(e) {
        const t = e.__qscroll;
        t.scrollTarget.removeEventListener("scroll", t.scroll, ut.passive), delete e.__qscroll
    }
}), vS = qn({
    name: "touch-hold", beforeMount(e, t) {
        const {modifiers: n} = t;
        if (n.mouse !== !0 && Fe.has.touch !== !0) return;
        const o = {
            handler: t.value, noop: xt, mouseStart(a) {
                typeof o.handler == "function" && tr(a) === !0 && (wt(o, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), o.start(a, !0))
            }, touchStart(a) {
                if (a.target !== void 0 && typeof o.handler == "function") {
                    const i = a.target;
                    wt(o, "temp", [[i, "touchmove", "move", "passiveCapture"], [i, "touchcancel", "end", "notPassiveCapture"], [i, "touchend", "end", "notPassiveCapture"]]), o.start(a)
                }
            }, start(a, i) {
                o.origin = Wt(a);
                const r = Date.now();
                Fe.is.mobile === !0 && (document.body.classList.add("non-selectable"), xn(), o.styleCleanup = s => {
                    o.styleCleanup = void 0;
                    const d = () => {
                        document.body.classList.remove("non-selectable")
                    };
                    s === !0 ? (xn(), setTimeout(d, 10)) : d()
                }), o.triggered = !1, o.sensitivity = i === !0 ? o.mouseSensitivity : o.touchSensitivity, o.timer = setTimeout(() => {
                    o.timer = void 0, xn(), o.triggered = !0, o.handler({
                        evt: a,
                        touch: i !== !0,
                        mouse: i === !0,
                        position: o.origin,
                        duration: Date.now() - r
                    })
                }, o.duration)
            }, move(a) {
                const {top: i, left: r} = Wt(a);
                o.timer !== void 0 && (Math.abs(r - o.origin.left) >= o.sensitivity || Math.abs(i - o.origin.top) >= o.sensitivity) && (clearTimeout(o.timer), o.timer = void 0)
            }, end(a) {
                Ht(o, "temp"), o.styleCleanup !== void 0 && o.styleCleanup(o.triggered), o.triggered === !0 ? a !== void 0 && Ie(a) : o.timer !== void 0 && (clearTimeout(o.timer), o.timer = void 0)
            }
        }, l = [600, 5, 7];
        if (typeof t.arg == "string" && t.arg.length !== 0 && t.arg.split(":").forEach((a, i) => {
            const r = parseInt(a, 10);
            r && (l[i] = r)
        }), [o.duration, o.touchSensitivity, o.mouseSensitivity] = l, e.__qtouchhold = o, n.mouse === !0) {
            const a = n.mouseCapture === !0 || n.mousecapture === !0 ? "Capture" : "";
            wt(o, "main", [[e, "mousedown", "mouseStart", `passive${a}`]])
        }
        Fe.has.touch === !0 && wt(o, "main", [[e, "touchstart", "touchStart", `passive${n.capture === !0 ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]])
    }, updated(e, t) {
        const n = e.__qtouchhold;
        n !== void 0 && t.oldValue !== t.value && (typeof t.value != "function" && n.end(), n.handler = t.value)
    }, beforeUnmount(e) {
        const t = e.__qtouchhold;
        t !== void 0 && (Ht(t, "main"), Ht(t, "temp"), t.timer !== void 0 && clearTimeout(t.timer), t.styleCleanup !== void 0 && t.styleCleanup(), delete e.__qtouchhold)
    }
});
const P0 = {esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46]},
    pS = new RegExp(`^([\\d+]+|${Object.keys(P0).join("|")})$`, "i");

function mS(e, t) {
    const {top: n, left: o} = Wt(e);
    return Math.abs(o - t.left) >= 7 || Math.abs(n - t.top) >= 7
}

var hS = qn({
    name: "touch-repeat", beforeMount(e, {modifiers: t, value: n, arg: o}) {
        const l = Object.keys(t).reduce((s, d) => {
            if (pS.test(d) === !0) {
                const c = isNaN(parseInt(d, 10)) ? P0[d.toLowerCase()] : parseInt(d, 10);
                c >= 0 && s.push(c)
            }
            return s
        }, []);
        if (t.mouse !== !0 && Fe.has.touch !== !0 && l.length === 0) return;
        const a = typeof o == "string" && o.length !== 0 ? o.split(":").map(s => parseInt(s, 10)) : [0, 600, 300],
            i = a.length - 1, r = {
                keyboard: l, handler: n, noop: xt, mouseStart(s) {
                    r.event === void 0 && typeof r.handler == "function" && tr(s) === !0 && (wt(r, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), r.start(s, !0))
                }, keyboardStart(s) {
                    if (typeof r.handler == "function" && dn(s, l) === !0) {
                        if ((a[0] === 0 || r.event !== void 0) && (Ie(s), e.focus(), r.event !== void 0)) return;
                        wt(r, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]), r.start(s, !1, !0)
                    }
                }, touchStart(s) {
                    if (s.target !== void 0 && typeof r.handler == "function") {
                        const d = s.target;
                        wt(r, "temp", [[d, "touchmove", "move", "passiveCapture"], [d, "touchcancel", "end", "notPassiveCapture"], [d, "touchend", "end", "notPassiveCapture"]]), r.start(s)
                    }
                }, start(s, d, c) {
                    function p(m) {
                        r.styleCleanup = void 0, document.documentElement.style.cursor = "";
                        const g = () => {
                            document.body.classList.remove("non-selectable")
                        };
                        m === !0 ? (xn(), setTimeout(g, 10)) : g()
                    }

                    c !== !0 && (r.origin = Wt(s)), Fe.is.mobile === !0 && (document.body.classList.add("non-selectable"), xn(), r.styleCleanup = p), r.event = {
                        touch: d !== !0 && c !== !0,
                        mouse: d === !0,
                        keyboard: c === !0,
                        startTime: Date.now(),
                        repeatCount: 0
                    };
                    const v = () => {
                        if (r.timer = void 0, r.event === void 0) return;
                        r.event.repeatCount === 0 && (r.event.evt = s, c === !0 ? r.event.keyCode = s.keyCode : r.event.position = Wt(s), Fe.is.mobile !== !0 && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), xn(), r.styleCleanup = p)), r.event.duration = Date.now() - r.event.startTime, r.event.repeatCount += 1, r.handler(r.event);
                        const m = i < r.event.repeatCount ? i : r.event.repeatCount;
                        r.timer = setTimeout(v, a[m])
                    };
                    a[0] === 0 ? v() : r.timer = setTimeout(v, a[0])
                }, move(s) {
                    r.event !== void 0 && r.timer !== void 0 && mS(s, r.origin) === !0 && (clearTimeout(r.timer), r.timer = void 0)
                }, end(s) {
                    r.event !== void 0 && (r.styleCleanup !== void 0 && r.styleCleanup(!0), s !== void 0 && r.event.repeatCount > 0 && Ie(s), Ht(r, "temp"), r.timer !== void 0 && (clearTimeout(r.timer), r.timer = void 0), r.event = void 0)
                }
            };
        if (e.__qtouchrepeat = r, t.mouse === !0) {
            const s = t.mouseCapture === !0 || t.mousecapture === !0 ? "Capture" : "";
            wt(r, "main", [[e, "mousedown", "mouseStart", `passive${s}`]])
        }
        if (Fe.has.touch === !0 && wt(r, "main", [[e, "touchstart", "touchStart", `passive${t.capture === !0 ? "Capture" : ""}`], [e, "touchend", "noop", "passiveCapture"]]), l.length !== 0) {
            const s = t.keyCapture === !0 || t.keycapture === !0 ? "Capture" : "";
            wt(r, "main", [[e, "keydown", "keyboardStart", `notPassive${s}`]])
        }
    }, updated(e, {oldValue: t, value: n}) {
        const o = e.__qtouchrepeat;
        o !== void 0 && t !== n && (typeof n != "function" && o.end(), o.handler = n)
    }, beforeUnmount(e) {
        const t = e.__qtouchrepeat;
        t !== void 0 && (t.timer !== void 0 && clearTimeout(t.timer), Ht(t, "main"), Ht(t, "temp"), t.styleCleanup !== void 0 && t.styleCleanup(), delete e.__qtouchrepeat)
    }
}), gS = Object.freeze({
    __proto__: null,
    ClosePopup: Yx,
    Intersection: l0,
    Morph: sS,
    Mutation: cS,
    Ripple: ba,
    ScrollFire: dS,
    Scroll: fS,
    TouchHold: vS,
    TouchPan: Jt,
    TouchRepeat: hS,
    TouchSwipe: up
});

function bS(e, t = document.body) {
    if (typeof e != "string") throw new TypeError("Expected a string as propName");
    if (!(t instanceof Element)) throw new TypeError("Expected a DOM element");
    return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null
}

let Wa;

function yS() {
    return Fe.is.winphone ? "msapplication-navbutton-color" : Fe.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color"
}

function _S(e) {
    const t = document.getElementsByTagName("META");
    for (const n in t) if (t[n].name === e) return t[n]
}

function wS(e) {
    Wa === void 0 && (Wa = yS());
    let t = _S(Wa);
    const n = t === void 0;
    n && (t = document.createElement("meta"), t.setAttribute("name", Wa)), t.setAttribute("content", e), n && document.head.appendChild(t)
}

Fe.is.mobile !== !0 || Fe.is.nativeMobile !== !0 && Fe.is.winphone !== !0 && Fe.is.safari !== !0 && Fe.is.webkit !== !0 && Fe.is.vivaldi;
const Nl = {};

function xS(e) {
    Object.assign(It, {request: e, exit: e, toggle: e})
}

function A0() {
    return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null
}

function B0() {
    const e = It.activeEl = It.isActive === !1 ? null : A0();
    Hy(e === null || e === document.documentElement ? document.body : e)
}

function SS() {
    It.isActive = It.isActive === !1, B0()
}

function of(e, t) {
    try {
        const n = e[t]();
        return n === void 0 ? Promise.resolve() : n
    } catch (n) {
        return Promise.reject(n)
    }
}

const It = vo({isActive: !1, activeEl: null}, {
    isCapable: !1, install({$q: e}) {
        e.fullscreen = this
    }
});
Nl.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find(e => document.documentElement[e] !== void 0), It.isCapable = Nl.request !== void 0, It.isCapable === !1 ? xS(() => Promise.reject("Not capable")) : (Object.assign(It, {
    request(e) {
        const t = e || document.documentElement, {activeEl: n} = It;
        return t === n ? Promise.resolve() : (n !== null && t.contains(n) === !0 ? It.exit() : Promise.resolve()).finally(() => of(t, Nl.request))
    }, exit() {
        return It.isActive === !0 ? of(document, Nl.exit) : Promise.resolve()
    }, toggle(e) {
        return It.isActive === !0 ? It.exit() : It.request(e)
    }
}), Nl.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find(e => document[e]), It.isActive = !!A0(), It.isActive === !0 && B0(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach(e => {
    document[e] = SS
}));
const CS = vo({appVisible: !0}, {
    install({$q: e}) {
        At(e, "appVisible", () => this.appVisible)
    }
});
{
    let e, t;
    if (typeof document.hidden < "u" ? (e = "hidden", t = "visibilitychange") : typeof document.msHidden < "u" ? (e = "msHidden", t = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e = "webkitHidden", t = "webkitvisibilitychange"), t && typeof document[e] < "u") {
        const n = () => {
            CS.appVisible = !document[e]
        };
        document.addEventListener(t, n, !1)
    }
}
ve({
    name: "BottomSheetPlugin",
    props: {
        ...Ge,
        title: String,
        message: String,
        actions: Array,
        grid: Boolean,
        cardClass: [String, Array, Object],
        cardStyle: [String, Array, Object]
    },
    emits: ["ok", "hide"],
    setup(e, {emit: t}) {
        const {proxy: n} = Se(), o = Je(e, n.$q), l = D(null);

        function a() {
            l.value.show()
        }

        function i() {
            l.value.hide()
        }

        function r(m) {
            t("ok", m), i()
        }

        function s() {
            t("hide")
        }

        function d() {
            return e.actions.map(m => {
                const g = m.avatar || m.img;
                return m.label === void 0 ? u(fo, {
                    class: "col-all",
                    dark: o.value
                }) : u("div", {
                    class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", m.class],
                    style: m.style,
                    tabindex: 0,
                    role: "listitem",
                    onClick() {
                        r(m)
                    },
                    onKeyup(x) {
                        x.keyCode === 13 && r(m)
                    }
                }, [u("div", {class: "q-focus-helper"}), m.icon ? u(Ze, {
                    name: m.icon,
                    color: m.color
                }) : g ? u("img", {
                    class: m.avatar ? "q-bottom-sheet__avatar" : "",
                    src: g
                }) : u("div", {class: "q-bottom-sheet__empty-icon"}), u("div", m.label)])
            })
        }

        function c() {
            return e.actions.map(m => {
                const g = m.avatar || m.img;
                return m.label === void 0 ? u(fo, {
                    spaced: !0,
                    dark: o.value
                }) : u(ka, {
                    class: ["q-bottom-sheet__item", m.classes],
                    style: m.style,
                    tabindex: 0,
                    clickable: !0,
                    dark: o.value,
                    onClick() {
                        r(m)
                    }
                }, () => [u(In, {avatar: !0}, () => m.icon ? u(Ze, {
                    name: m.icon,
                    color: m.color
                }) : g ? u("img", {
                    class: m.avatar ? "q-bottom-sheet__avatar" : "",
                    src: g
                }) : null), u(In, () => m.label)])
            })
        }

        function p() {
            const m = [];
            return e.title && m.push(u(lo, {class: "q-dialog__title"}, () => e.title)), e.message && m.push(u(lo, {class: "q-dialog__message"}, () => e.message)), m.push(e.grid === !0 ? u("div", {
                class: "row items-stretch justify-start",
                role: "list"
            }, d()) : u("div", {role: "list"}, c())), m
        }

        function v() {
            return [u(uu, {
                class: [`q-bottom-sheet q-bottom-sheet--${e.grid === !0 ? "grid" : "list"}` + (o.value === !0 ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass],
                style: e.cardStyle
            }, p)]
        }

        return Object.assign(n, {show: a, hide: i}), () => u(Ca, {ref: l, position: "bottom", onHide: s}, v)
    }
});

function O0(e, t) {
    for (const n in t) n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : {...e[n]}, O0(e[n], t[n])) : e[n] = t[n]
}

function kS(e, t, n) {
    return o => {
        let l, a;
        const i = t === !0 && o.component !== void 0;
        if (i === !0) {
            const {component: y, componentProps: b} = o;
            l = typeof y == "string" ? n.component(y) : y, a = b || {}
        } else {
            const {class: y, style: b, ...h} = o;
            l = e, a = h, y !== void 0 && (h.cardClass = y), b !== void 0 && (h.cardStyle = b)
        }
        let r, s = !1;
        const d = D(null), c = ya(!1, "dialog"), p = y => {
            if (d.value !== null && d.value[y] !== void 0) return void d.value[y]();
            const b = r.$.subTree;
            if (b && b.component) {
                if (b.component.proxy && b.component.proxy[y]) return void b.component.proxy[y]();
                if (b.component.subTree && b.component.subTree.component && b.component.subTree.component.proxy && b.component.subTree.component.proxy[y]) return void b.component.subTree.component.proxy[y]()
            }
            console.error("[Quasar] Incorrectly defined Dialog component")
        }, v = [], m = [], g = {
            onOk(y) {
                return v.push(y), g
            }, onCancel(y) {
                return m.push(y), g
            }, onDismiss(y) {
                return v.push(y), m.push(y), g
            }, hide() {
                return p("hide"), g
            }, update(y) {
                if (r !== null) {
                    if (i === !0) Object.assign(a, y); else {
                        const {class: b, style: h, ...C} = y;
                        b !== void 0 && (C.cardClass = b), h !== void 0 && (C.cardStyle = h), O0(a, C)
                    }
                    r.$forceUpdate()
                }
                return g
            }
        }, x = y => {
            s = !0, v.forEach(b => {
                b(y)
            })
        }, w = () => {
            S.unmount(c), au(c), S = null, r = null, s !== !0 && m.forEach(y => {
                y()
            })
        };
        let S = nr({
            name: "QGlobalDialog",
            setup: () => () => u(l, {
                ...a, ref: d, onOk: x, onHide: w, onVnodeMounted(...y) {
                    typeof a.onVnodeMounted == "function" && a.onVnodeMounted(...y), We(() => p("show"))
                }
            })
        }, n);
        return r = S.mount(c), g
    }
}

function L0(e) {
    return encodeURIComponent(e)
}

function R0(e) {
    return decodeURIComponent(e)
}

function qS(e) {
    return L0(e === Object(e) ? JSON.stringify(e) : "" + e)
}

function TS(e) {
    if (e === "") return e;
    e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = R0(e.replace(/\+/g, " "));
    try {
        const t = JSON.parse(e);
        t !== Object(t) && Array.isArray(t) !== !0 || (e = t)
    } catch {
    }
    return e
}

function V0(e) {
    const t = new Date;
    return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString()
}

function $S(e) {
    let t = 0;
    const n = e.match(/(\d+)d/), o = e.match(/(\d+)h/), l = e.match(/(\d+)m/), a = e.match(/(\d+)s/);
    return n && (t += 864e5 * n[1]), o && (t += 36e5 * o[1]), l && (t += 6e4 * l[1]), a && (t += 1e3 * a[1]), t === 0 ? e : V0(t)
}

function F0(e, t, n = {}, o) {
    let l, a;
    n.expires !== void 0 && (Object.prototype.toString.call(n.expires) === "[object Date]" ? l = n.expires.toUTCString() : typeof n.expires == "string" ? l = $S(n.expires) : (a = parseFloat(n.expires), l = isNaN(a) === !1 ? V0(864e5 * a) : n.expires));
    const i = `${L0(e)}=${qS(t)}`,
        r = [i, l !== void 0 ? "; Expires=" + l : "", n.path ? "; Path=" + n.path : "", n.domain ? "; Domain=" + n.domain : "", n.sameSite ? "; SameSite=" + n.sameSite : "", n.httpOnly ? "; HttpOnly" : "", n.secure ? "; Secure" : "", n.other ? "; " + n.other : ""].join("");
    if (o) {
        o.req.qCookies ? o.req.qCookies.push(r) : o.req.qCookies = [r], o.res.setHeader("Set-Cookie", o.req.qCookies);
        let s = o.req.headers.cookie || "";
        if (l !== void 0 && a < 0) {
            const d = Bi(e, o);
            d !== void 0 && (s = s.replace(`${e}=${d}; `, "").replace(`; ${e}=${d}`, "").replace(`${e}=${d}`, ""))
        } else s = s ? `${i}; ${s}` : r;
        o.req.headers.cookie = s
    } else document.cookie = r
}

function Bi(e, t) {
    const n = t ? t.req.headers : document, o = n.cookie ? n.cookie.split("; ") : [], l = o.length;
    let a, i, r, s = e ? null : {}, d = 0;
    for (; d < l; d++) if (a = o[d].split("="), i = R0(a.shift()), r = a.join("="), e) {
        if (e === i) {
            s = TS(r);
            break
        }
    } else s[i] = r;
    return s
}

function MS(e, t, n) {
    F0(e, "", {expires: -1, ...t}, n)
}

function ES(e, t) {
    return Bi(e, t) !== null
}

function PS(e) {
    return {
        get: t => Bi(t, e),
        set: (t, n, o) => F0(t, n, o, e),
        has: t => ES(t, e),
        remove: (t, n) => MS(t, n, e),
        getAll: () => Bi(null, e)
    }
}

const AS = {
    install({$q: e, ssrContext: t}) {
        e.cookies = this
    }
};
Object.assign(AS, PS());
var BS = ve({
    name: "DialogPlugin",
    props: {
        ...Ge,
        title: String,
        message: String,
        prompt: Object,
        options: Object,
        progress: [Boolean, Object],
        html: Boolean,
        ok: {type: [String, Object, Boolean], default: !0},
        cancel: [String, Object, Boolean],
        focus: {type: String, default: "ok", validator: e => ["ok", "cancel", "none"].includes(e)},
        stackButtons: Boolean,
        color: String,
        cardClass: [String, Array, Object],
        cardStyle: [String, Array, Object]
    },
    emits: ["ok", "hide"],
    setup(e, {emit: t}) {
        const {proxy: n} = Se(), {$q: o} = n, l = Je(e, o), a = D(null),
            i = D(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0),
            r = f(() => "q-dialog-plugin" + (l.value === !0 ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== !1 ? " q-dialog-plugin--progress" : "")),
            s = f(() => e.color || (l.value === !0 ? "amber" : "primary")),
            d = f(() => e.progress === !1 ? null : Et(e.progress) === !0 ? {
                component: e.progress.spinner || tn,
                props: {color: e.progress.color || s.value}
            } : {component: tn, props: {color: s.value}}), c = f(() => e.prompt !== void 0 || e.options !== void 0),
            p = f(() => {
                if (c.value !== !0) return {};
                const {model: B, isValid: Y, items: J, ...$} = e.prompt !== void 0 ? e.prompt : e.options;
                return $
            }), v = f(() => Et(e.ok) === !0 || e.ok === !0 ? o.lang.label.ok : e.ok),
            m = f(() => Et(e.cancel) === !0 || e.cancel === !0 ? o.lang.label.cancel : e.cancel),
            g = f(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(i.value) !== !0 : e.options !== void 0 && e.options.isValid !== void 0 && e.options.isValid(i.value) !== !0),
            x = f(() => ({
                color: s.value,
                label: v.value,
                ripple: !1,
                disable: g.value, ...Et(e.ok) === !0 ? e.ok : {flat: !0},
                "data-autofocus": e.focus === "ok" && c.value !== !0 || void 0,
                onClick: b
            })), w = f(() => ({
                color: s.value,
                label: m.value,
                ripple: !1, ...Et(e.cancel) === !0 ? e.cancel : {flat: !0},
                "data-autofocus": e.focus === "cancel" && c.value !== !0 || void 0,
                onClick: h
            }));

        function S() {
            a.value.show()
        }

        function y() {
            a.value.hide()
        }

        function b() {
            t("ok", Qe(i.value)), y()
        }

        function h() {
            y()
        }

        function C() {
            t("hide")
        }

        function A(B) {
            i.value = B
        }

        function L(B) {
            g.value !== !0 && e.prompt.type !== "textarea" && dn(B, 13) === !0 && b()
        }

        function E(B, Y) {
            return e.html === !0 ? u(lo, {class: B, innerHTML: Y}) : u(lo, {class: B}, () => Y)
        }

        function V() {
            return [u(qu, {
                color: s.value,
                dense: !0,
                autofocus: !0,
                dark: l.value, ...p.value,
                modelValue: i.value,
                "onUpdate:modelValue": A,
                onKeyup: L
            })]
        }

        function O() {
            return [u(c0, {
                color: s.value,
                options: e.options.items,
                dark: l.value, ...p.value,
                modelValue: i.value,
                "onUpdate:modelValue": A
            })]
        }

        function z() {
            const B = [];
            return e.cancel && B.push(u(tt, w.value)), e.ok && B.push(u(tt, x.value)), u(sp, {
                class: e.stackButtons === !0 ? "items-end" : "",
                vertical: e.stackButtons,
                align: "right"
            }, () => B)
        }

        function M() {
            const B = [];
            return e.title && B.push(E("q-dialog__title", e.title)), e.progress !== !1 && B.push(u(lo, {class: "q-dialog__progress"}, () => u(d.value.component, d.value.props))), e.message && B.push(E("q-dialog__message", e.message)), e.prompt !== void 0 ? B.push(u(lo, {class: "scroll q-dialog-plugin__form"}, V)) : e.options !== void 0 && B.push(u(fo, {dark: l.value}), u(lo, {class: "scroll q-dialog-plugin__form"}, O), u(fo, {dark: l.value})), (e.ok || e.cancel) && B.push(z()), B
        }

        function k() {
            return [u(uu, {class: [r.value, e.cardClass], style: e.cardStyle, dark: l.value}, M)]
        }

        return pe(() => e.prompt && e.prompt.model, A), pe(() => e.options && e.options.model, A), Object.assign(n, {
            show: S,
            hide: y
        }), () => u(Ca, {ref: a, onHide: C}, k)
    }
}), OS = {
    install({$q: e, parentApp: t}) {
        e.dialog = kS(BS, !0, t), this.__installed !== !0 && (this.create = e.dialog)
    }
};
const Ya = D(null), xs = vo({isActive: !1}, {
    start: xt, stop: xt, increment: xt, setDefaults: xt, install({$q: e, parentApp: t}) {
        if (e.loadingBar = this, this.__installed === !0) return void (e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar));
        const n = D(e.config.loadingBar !== void 0 ? {...e.config.loadingBar} : {});

        function o() {
            xs.isActive = !0
        }

        function l() {
            xs.isActive = !1
        }

        const a = ya("q-loading-bar");
        nr({
            name: "LoadingBar",
            devtools: {hide: !0},
            setup: () => () => u(zv, {...n.value, onStart: o, onStop: l, ref: Ya})
        }, t).mount(a), Object.assign(this, {
            start(i) {
                Ya.value.start(i)
            }, stop() {
                Ya.value.stop()
            }, increment() {
                Ya.value.increment.apply(null, arguments)
            }, setDefaults(i) {
                Et(i) === !0 && Object.assign(n.value, i)
            }
        })
    }
});
let Yo, Hr, lf = 0, So = null, Lt = {}, Mo = {};
const z0 = {
    group: "__default_quasar_group__",
    delay: 0,
    message: !1,
    html: !1,
    spinnerSize: 80,
    spinnerColor: "",
    messageColor: "",
    backgroundColor: "",
    boxClass: "",
    spinner: tn,
    customClass: ""
}, N0 = {...z0};

function LS(e) {
    if (e && e.group !== void 0 && Mo[e.group] !== void 0) return Object.assign(Mo[e.group], e);
    const t = Et(e) === !0 && e.ignoreDefaults === !0 ? {...z0, ...e} : {...N0, ...e};
    return Mo[t.group] = t, t
}

const pn = vo({isActive: !1}, {
    show(e) {
        Lt = LS(e);
        const {group: t} = Lt;
        return pn.isActive = !0, Yo !== void 0 ? (Lt.uid = lf, Hr.$forceUpdate()) : (Lt.uid = ++lf, So !== null && clearTimeout(So), So = setTimeout(() => {
            So = null;
            const n = ya("q-loading");
            Yo = nr({
                name: "QLoading", setup() {
                    function o() {
                        pn.isActive !== !0 && Yo !== void 0 && (_s(!1), Yo.unmount(n), au(n), Yo = void 0, Hr = void 0)
                    }

                    function l() {
                        if (pn.isActive !== !0) return null;
                        const a = [u(Lt.spinner, {
                            class: "q-loading__spinner",
                            color: Lt.spinnerColor,
                            size: Lt.spinnerSize
                        })];
                        return Lt.message && a.push(u("div", {
                            class: "q-loading__message" + (Lt.messageColor ? ` text-${Lt.messageColor}` : ""),
                            [Lt.html === !0 ? "innerHTML" : "textContent"]: Lt.message
                        })), u("div", {
                            class: "q-loading fullscreen flex flex-center z-max " + Lt.customClass.trim(),
                            key: Lt.uid
                        }, [u("div", {class: "q-loading__backdrop" + (Lt.backgroundColor ? ` bg-${Lt.backgroundColor}` : "")}), u("div", {class: "q-loading__box column items-center " + Lt.boxClass}, a)])
                    }

                    return mt(() => {
                        _s(!0)
                    }), () => u($t, {name: "q-transition--fade", appear: !0, onAfterLeave: o}, l)
                }
            }, pn.__parentApp), Hr = Yo.mount(n)
        }, Lt.delay)), n => {
            n !== void 0 && Object(n) === n ? pn.show({...n, group: t}) : pn.hide(t)
        }
    }, hide(e) {
        if (pn.isActive === !0) {
            if (e === void 0) Mo = {}; else {
                if (Mo[e] === void 0) return;
                {
                    delete Mo[e];
                    const t = Object.keys(Mo);
                    if (t.length !== 0) {
                        const n = t[t.length - 1];
                        return void pn.show({group: n})
                    }
                }
            }
            So !== null && (clearTimeout(So), So = null), pn.isActive = !1
        }
    }, setDefaults(e) {
        Et(e) === !0 && Object.assign(N0, e)
    }, install({$q: e, parentApp: t}) {
        e.loading = this, pn.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading)
    }
});
let RS = 0;
const li = {}, ai = {}, hn = {}, I0 = {}, VS = /^\s*$/, D0 = [],
    $u = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"],
    FS = ["top-left", "top-right", "bottom-left", "bottom-right"], Go = {
        positive: {icon: e => e.iconSet.type.positive, color: "positive"},
        negative: {icon: e => e.iconSet.type.negative, color: "negative"},
        warning: {icon: e => e.iconSet.type.warning, color: "warning", textColor: "dark"},
        info: {icon: e => e.iconSet.type.info, color: "info"},
        ongoing: {group: !1, timeout: 0, spinner: !0, color: "grey-8"}
    };

function H0(e, t, n) {
    if (!e) return Il("parameter required");
    let o;
    const l = {textColor: "white"};
    if (e.ignoreDefaults !== !0 && Object.assign(l, li), Et(e) === !1 && (l.type && Object.assign(l, Go[l.type]), e = {message: e}), Object.assign(l, Go[e.type || l.type], e), typeof l.icon == "function" && (l.icon = l.icon(t)), l.spinner ? (l.spinner === !0 && (l.spinner = tn), l.spinner = ma(l.spinner)) : l.spinner = !1, l.meta = {
        hasMedia: !!(l.spinner !== !1 || l.icon || l.avatar),
        hasText: af(l.message) || af(l.caption)
    }, l.position) {
        if ($u.includes(l.position) === !1) return Il("wrong position", e)
    } else l.position = "bottom";
    if (l.timeout === void 0) l.timeout = 5e3; else {
        const s = parseInt(l.timeout, 10);
        if (isNaN(s) || s < 0) return Il("wrong timeout", e);
        l.timeout = s
    }
    l.timeout === 0 ? l.progress = !1 : l.progress === !0 && (l.meta.progressClass = "q-notification__progress" + (l.progressClass ? ` ${l.progressClass}` : ""), l.meta.progressStyle = {animationDuration: `${l.timeout + 1e3}ms`});
    const a = (Array.isArray(e.actions) === !0 ? e.actions : []).concat(e.ignoreDefaults !== !0 && Array.isArray(li.actions) === !0 ? li.actions : []).concat(Go[e.type] !== void 0 && Array.isArray(Go[e.type].actions) === !0 ? Go[e.type].actions : []), {closeBtn: i} = l;
    if (i && a.push({label: typeof i == "string" ? i : t.lang.label.close}), l.actions = a.map(({
                                                                                                    handler: s,
                                                                                                    noDismiss: d,
                                                                                                    ...c
                                                                                                }) => ({
        flat: !0, ...c,
        onClick: typeof s == "function" ? () => {
            s(), d !== !0 && r()
        } : () => {
            r()
        }
    })), l.multiLine === void 0 && (l.multiLine = l.actions.length > 1), Object.assign(l.meta, {
        class: `q-notification row items-stretch q-notification--${l.multiLine === !0 ? "multi-line" : "standard"}` + (l.color !== void 0 ? ` bg-${l.color}` : "") + (l.textColor !== void 0 ? ` text-${l.textColor}` : "") + (l.classes !== void 0 ? ` ${l.classes}` : ""),
        wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (l.multiLine === !0 ? "column no-wrap justify-center" : "row items-center"),
        contentClass: "q-notification__content row items-center" + (l.multiLine === !0 ? "" : " col"),
        leftClass: l.meta.hasText === !0 ? "additional" : "single",
        attrs: {role: "alert", ...l.attrs}
    }), l.group === !1 ? (l.group = void 0, l.meta.group = void 0) : (l.group !== void 0 && l.group !== !0 || (l.group = [l.message, l.caption, l.multiline].concat(l.actions.map(s => `${s.label}*${s.icon}`)).join("|")), l.meta.group = l.group + "|" + l.position), l.actions.length === 0 ? l.actions = void 0 : l.meta.actionsClass = "q-notification__actions row items-center " + (l.multiLine === !0 ? "justify-end" : "col-auto") + (l.meta.hasMedia === !0 ? " q-notification__actions--with-media" : ""), n !== void 0) {
        n.notif.meta.timer && (clearTimeout(n.notif.meta.timer), n.notif.meta.timer = void 0), l.meta.uid = n.notif.meta.uid;
        const s = hn[l.position].value.indexOf(n.notif);
        hn[l.position].value[s] = l
    } else {
        const s = ai[l.meta.group];
        if (s === void 0) {
            if (l.meta.uid = RS++, l.meta.badge = 1, ["left", "right", "center"].indexOf(l.position) !== -1) hn[l.position].value.splice(Math.floor(hn[l.position].value.length / 2), 0, l); else {
                const d = l.position.indexOf("top") > -1 ? "unshift" : "push";
                hn[l.position].value[d](l)
            }
            l.group !== void 0 && (ai[l.meta.group] = l)
        } else {
            if (s.meta.timer && (clearTimeout(s.meta.timer), s.meta.timer = void 0), l.badgePosition !== void 0) {
                if (FS.includes(l.badgePosition) === !1) return Il("wrong badgePosition", e)
            } else l.badgePosition = `top-${l.position.indexOf("left") > -1 ? "right" : "left"}`;
            l.meta.uid = s.meta.uid, l.meta.badge = s.meta.badge + 1, l.meta.badgeClass = `q-notification__badge q-notification__badge--${l.badgePosition}` + (l.badgeColor !== void 0 ? ` bg-${l.badgeColor}` : "") + (l.badgeTextColor !== void 0 ? ` text-${l.badgeTextColor}` : "") + (l.badgeClass ? ` ${l.badgeClass}` : "");
            const d = hn[l.position].value.indexOf(s);
            hn[l.position].value[d] = ai[l.meta.group] = l
        }
    }
    const r = () => {
        zS(l), o = void 0
    };
    return l.timeout > 0 && (l.meta.timer = setTimeout(() => {
        l.meta.timer = void 0, r()
    }, l.timeout + 1e3)), l.group !== void 0 ? s => {
        s !== void 0 ? Il("trying to update a grouped one which is forbidden", e) : r()
    } : (o = {dismiss: r, config: e, notif: l}, n === void 0 ? s => {
        if (o !== void 0) if (s === void 0) o.dismiss(); else {
            const d = Object.assign({}, o.config, s, {group: !1, position: l.position});
            H0(d, t, o)
        }
    } : void Object.assign(n, o))
}

function zS(e) {
    e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
    const t = hn[e.position].value.indexOf(e);
    if (t !== -1) {
        e.group !== void 0 && delete ai[e.meta.group];
        const n = D0["" + e.meta.uid];
        if (n) {
            const {width: o, height: l} = getComputedStyle(n);
            n.style.left = `${n.offsetLeft}px`, n.style.width = o, n.style.height = l
        }
        hn[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss()
    }
}

function af(e) {
    return e != null && VS.test(e) !== !0
}

function Il(e, t) {
    return console.error(`Notify: ${e}`, t), !1
}

function NS() {
    return ve({
        name: "QNotifications", devtools: {hide: !0}, setup() {
            return () => u("div", {class: "q-notifications"}, $u.map(e => u(yg, {
                key: e,
                class: I0[e],
                tag: "div",
                name: `q-notification--${e}`
            }, () => hn[e].value.map(t => {
                const n = t.meta, o = [];
                if (n.hasMedia === !0 && (t.spinner !== !1 ? o.push(u(t.spinner, {
                    class: "q-notification__spinner q-notification__spinner--" + n.leftClass,
                    color: t.spinnerColor,
                    size: t.spinnerSize
                })) : t.icon ? o.push(u(Ze, {
                    class: "q-notification__icon q-notification__icon--" + n.leftClass,
                    name: t.icon,
                    color: t.iconColor,
                    size: t.iconSize,
                    role: "img"
                })) : t.avatar && o.push(u(Hv, {class: "q-notification__avatar q-notification__avatar--" + n.leftClass}, () => u("img", {
                    src: t.avatar,
                    "aria-hidden": "true"
                })))), n.hasText === !0) {
                    let a;
                    const i = {class: "q-notification__message col"};
                    if (t.html === !0) i.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message; else {
                        const r = [t.message];
                        a = t.caption ? [u("div", r), u("div", {class: "q-notification__caption"}, [t.caption])] : r
                    }
                    o.push(u("div", i, a))
                }
                const l = [u("div", {class: n.contentClass}, o)];
                return t.progress === !0 && l.push(u("div", {
                    key: `${n.uid}|p|${n.badge}`,
                    class: n.progressClass,
                    style: n.progressStyle
                })), t.actions !== void 0 && l.push(u("div", {class: n.actionsClass}, t.actions.map(a => u(tt, a)))), n.badge > 1 && l.push(u("div", {
                    key: `${n.uid}|${n.badge}`,
                    class: t.meta.badgeClass,
                    style: t.badgeStyle
                }, [n.badge])), u("div", {
                    ref: a => {
                        D0["" + n.uid] = a
                    }, key: n.uid, class: n.class, ...n.attrs
                }, [u("div", {class: n.wrapperClass}, l)])
            }))))
        }
    })
}

var IS = {
    setDefaults(e) {
        Et(e) === !0 && Object.assign(li, e)
    }, registerType(e, t) {
        Et(t) === !0 && (Go[e] = t)
    }, install({$q: e, parentApp: t}) {
        if (e.notify = this.create = n => H0(n, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== !0) {
            $u.forEach(o => {
                hn[o] = D([]);
                const l = ["left", "center", "right"].includes(o) === !0 ? "center" : o.indexOf("top") > -1 ? "top" : "bottom",
                    a = o.indexOf("left") > -1 ? "start" : o.indexOf("right") > -1 ? "end" : "center",
                    i = ["left", "right"].includes(o) ? `items-${o === "left" ? "start" : "end"} justify-center` : o === "center" ? "flex-center" : `items-${a}`;
                I0[o] = `q-notifications__list q-notifications__list--${l} fixed column no-wrap ${i}`
            });
            const n = ya("q-notify");
            nr(NS(), t).mount(n)
        }
    }
};

function DS(e) {
    return us(e) === !0 ? "__q_date|" + e.toUTCString() : uy(e) === !0 ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e
}

function HS(e) {
    if (e.length < 9) return e;
    const n = e.substring(0, 8), o = e.substring(9);
    switch (n) {
        case"__q_date":
            return new Date(o);
        case"__q_expr":
            return new RegExp(o);
        case"__q_numb":
            return Number(o);
        case"__q_bool":
            return o === "1";
        case"__q_strn":
            return "" + o;
        case"__q_objt":
            return JSON.parse(o);
        default:
            return e
    }
}

function j0() {
    const e = () => null;
    return {
        has: () => !1, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
        }, getAllKeys: () => [], set: xt, remove: xt, clear: xt, isEmpty: () => !0
    }
}

function Q0(e) {
    const t = window[e + "Storage"], n = o => {
        const l = t.getItem(o);
        return l ? HS(l) : null
    };
    return {
        has: o => t.getItem(o) !== null,
        getLength: () => t.length,
        getItem: n,
        getIndex: o => o < t.length ? n(t.key(o)) : null,
        getKey: o => o < t.length ? t.key(o) : null,
        getAll: () => {
            let o;
            const l = {}, a = t.length;
            for (let i = 0; i < a; i++) o = t.key(i), l[o] = n(o);
            return l
        },
        getAllKeys: () => {
            const o = [], l = t.length;
            for (let a = 0; a < l; a++) o.push(t.key(a));
            return o
        },
        set: (o, l) => {
            t.setItem(o, DS(l))
        },
        remove: o => {
            t.removeItem(o)
        },
        clear: () => {
            t.clear()
        },
        isEmpty: () => t.length === 0
    }
}

const K0 = Fe.has.webStorage === !1 ? j0() : Q0("local"), U0 = {
    install({$q: e}) {
        e.localStorage = K0
    }
};
Object.assign(U0, K0);
const W0 = Fe.has.webStorage === !1 ? j0() : Q0("session"), Y0 = {
    install({$q: e}) {
        e.sessionStorage = W0
    }
};

function rf() {
    const {emit: e, proxy: t} = Se(), n = D(null);

    function o() {
        n.value.show()
    }

    function l() {
        n.value.hide()
    }

    function a(r) {
        e("ok", r), l()
    }

    function i() {
        e("hide")
    }

    return Object.assign(t, {show: o, hide: l}), {dialogRef: n, onDialogHide: i, onDialogOK: a, onDialogCancel: l}
}

Object.assign(Y0, W0);
const sf = ["ok", "hide"];

function dC() {
    return vt(Ev)
}

rf.emits = sf, rf.emitsObject = T0(sf);
const jS = {
    version: "2.13.0", install(e, t, n) {
        dy(e, {components: Wx, directives: gS, ...t})
    }, lang: Zt, iconSet: mi
};
const QS = {
    isoName: "zh-CN",
    nativeName: "中文(简体)",
    label: {
        clear: "清空",
        ok: "确定",
        cancel: "取消",
        close: "关闭",
        set: "设置",
        select: "选择",
        reset: "重置",
        remove: "移除",
        update: "更新",
        create: "创建",
        search: "搜索",
        filter: "过滤",
        refresh: "刷新",
        expand: e => e ? `展开"${e}"` : "扩张",
        collapse: e => e ? `折叠"${e}"` : "坍塌"
    },
    date: {
        days: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        daysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        headerTitle: e => new Intl.DateTimeFormat("zh-CN", {
            weekday: "short",
            month: "short",
            day: "numeric"
        }).format(e),
        firstDayOfWeek: 0,
        format24h: !1,
        pluralDay: "天"
    },
    table: {
        noData: "没有可用数据",
        noResults: "找不到匹配的数据",
        loading: "正在加载...",
        selectedRecords: e => "已选择" + e + "行",
        recordsPerPage: "每页的行数:",
        allRows: "全部",
        pagination: (e, t, n) => e + "-" + t + " / " + n,
        columns: "列"
    },
    editor: {
        url: "URL",
        bold: "粗体",
        italic: "斜体",
        strikethrough: "删除线",
        underline: "下划线",
        unorderedList: "无序列表",
        orderedList: "有序列表",
        subscript: "下标",
        superscript: "上标",
        hyperlink: "超链接",
        toggleFullscreen: "全屏切换",
        quote: "引号",
        left: "左对齐",
        center: "居中对齐",
        right: "右对齐",
        justify: "两端对齐",
        print: "打印",
        outdent: "减少缩进",
        indent: "增加缩进",
        removeFormat: "清除样式",
        formatting: "格式化",
        fontSize: "字体大小",
        align: "对齐",
        hr: "插入水平线",
        undo: "撤消",
        redo: "重做",
        heading1: "标题一",
        heading2: "标题二",
        heading3: "标题三",
        heading4: "标题四",
        heading5: "标题五",
        heading6: "标题六",
        paragraph: "段落",
        code: "代码",
        size1: "非常小",
        size2: "比较小",
        size3: "正常",
        size4: "中等偏大",
        size5: "大",
        size6: "非常大",
        size7: "超级大",
        defaultFont: "默认字体",
        viewSource: "查看资料"
    },
    tree: {noNodes: "没有可用节点", noResults: "找不到匹配的节点"}
};
const KS = {
    config: {
        loading: {},
        loadingBar: {color: "light-blue"},
        notify: {position: "top", timeout: 1e3, textColor: "white", color: "orange"}
    }, plugins: {Loading: pn, LoadingBar: xs, Notify: IS, LocalStorage: U0, SessionStorage: Y0, Dialog: OS}, lang: QS
};
vv(Bg).use(jb).use(jS, KS).mount("#app");
export {
    cC as A,
    dC as B,
    nC as C,
    iC as D,
    vt as E,
    Yt as F,
    sC as G,
    aC as H,
    rC as I,
    JS as J,
    Sn as K,
    US as L,
    Nh as M,
    tC as N,
    zi as O,
    un as P,
    Tw as Q,
    Rc as R,
    rf as S,
    Se as T,
    mw as U,
    IS as V,
    st as _,
    pe as a,
    oC as b,
    f as c,
    Vs as d,
    We as e,
    mt as f,
    vh as g,
    Ds as h,
    Xm as i,
    Ut as j,
    lC as k,
    nv as l,
    Eg as m,
    Fi as n,
    Is as o,
    YS as p,
    zh as q,
    D as r,
    eC as s,
    WS as t,
    Po as u,
    Lc as v,
    GS as w,
    XS as x,
    ZS as y,
    uC as z
};
