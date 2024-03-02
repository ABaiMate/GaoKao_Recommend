import {u as useMenu} from "./useMenu-af9bf147.js";
import {
    d as defineComponent,
    r as ref,
    w as watchEffect,
    c as computed,
    a as watch,
    o as openBlock,
    b as createElementBlock,
    n as normalizeStyle,
    e as nextTick,
    f as onMounted,
    g as resolveComponent,
    h as createBlock,
    i as withCtx,
    j as createVNode,
    u as unref,
    k as createCommentVNode,
    l as createBaseVNode,
    t as toDisplayString,
    _ as __vitePreload,
    m as _export_sfc$1,
    p as toRef,
    q as createTextVNode,
    F as Fragment,
    s as renderList,
    v as children,
    x as pushScopeId,
    y as popScopeId
} from "./index-d31968a7.js";
import {u as useLoginInfo} from "./useLoginInfo-0c571403.js";
import "./useRequest-4cb19bee.js";
import "./LoginApi-1dda4bc2.js";

const bg1Png = "/assets/bg1-4db4ea75.png", bg2Png = "/assets/bg2-7d47272d.png", logoPng = "/assets/logo-8c6ed30f.png";
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function getDefaultExportFromCjs(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

var lottie = {exports: {}};
(function (module, exports) {
    typeof navigator < "u" && function (t, e) {
        module.exports = e()
    }(commonjsGlobal, function () {
        var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999,
            setWebWorker = function (e) {
                _useWebWorker = !!e
            }, getWebWorker = function () {
                return _useWebWorker
            }, setLocationHref = function (e) {
                locationHref = e
            }, getLocationHref = function () {
                return locationHref
            };

        function createTag(t) {
            return document.createElement(t)
        }

        function extendPrototype(t, e) {
            var r, i = t.length, s;
            for (r = 0; r < i; r += 1) {
                s = t[r].prototype;
                for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a])
            }
        }

        function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
            function e() {
            }

            return e.prototype = t, e
        }

        var audioControllerFactory = function () {
            function t(e) {
                this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1
            }

            return t.prototype = {
                addAudio: function (r) {
                    this.audios.push(r)
                }, pause: function () {
                    var r, i = this.audios.length;
                    for (r = 0; r < i; r += 1) this.audios[r].pause()
                }, resume: function () {
                    var r, i = this.audios.length;
                    for (r = 0; r < i; r += 1) this.audios[r].resume()
                }, setRate: function (r) {
                    var i, s = this.audios.length;
                    for (i = 0; i < s; i += 1) this.audios[i].setRate(r)
                }, createAudio: function (r) {
                    return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({src: [r]}) : {
                        isPlaying: !1,
                        play: function () {
                            this.isPlaying = !0
                        },
                        seek: function () {
                            this.isPlaying = !1
                        },
                        playing: function () {
                        },
                        rate: function () {
                        },
                        setVolume: function () {
                        }
                    }
                }, setAudioFactory: function (r) {
                    this.audioFactory = r
                }, setVolume: function (r) {
                    this._volume = r, this._updateVolume()
                }, mute: function () {
                    this._isMuted = !0, this._updateVolume()
                }, unmute: function () {
                    this._isMuted = !1, this._updateVolume()
                }, getVolume: function () {
                    return this._volume
                }, _updateVolume: function () {
                    var r, i = this.audios.length;
                    for (r = 0; r < i; r += 1) this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1))
                }
            }, function () {
                return new t
            }
        }(), createTypedArray = function () {
            function t(r, i) {
                var s = 0, a = [], n;
                switch (r) {
                    case"int16":
                    case"uint8c":
                        n = 1;
                        break;
                    default:
                        n = 1.1;
                        break
                }
                for (s = 0; s < i; s += 1) a.push(n);
                return a
            }

            function e(r, i) {
                return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : t(r, i)
            }

            return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t
        }();

        function createSizedArray(t) {
            return Array.apply(null, {length: t})
        }

        function _typeof$6(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function (r) {
                return typeof r
            } : _typeof$6 = function (r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$6(t)
        }

        var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "",
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt,
            bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
        (function () {
            var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                e, r = t.length;
            for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
        })(), BMMath.random = Math.random, BMMath.abs = function (t) {
            var e = _typeof$6(t);
            if (e === "object" && t.length) {
                var r = createSizedArray(t.length), i, s = t.length;
                for (i = 0; i < s; i += 1) r[i] = Math.abs(t[i]);
                return r
            }
            return Math.abs(t)
        };
        var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;

        function styleDiv(t) {
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, r, i) {
            this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, r, i) {
            this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, r) {
            this.type = t, this.firstFrame = e, this.totalFrames = r
        }

        function BMDestroyEvent(t, e) {
            this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
            this.type = "configError", this.nativeError = t
        }

        var createElementID = function () {
            var t = 0;
            return function () {
                return t += 1, idPrefix$1 + "__lottie_element_" + t
            }
        }();

        function HSVtoRGB(t, e, r) {
            var i, s, a, n, l, o, h, m;
            switch (n = Math.floor(t * 6), l = t * 6 - n, o = r * (1 - e), h = r * (1 - l * e), m = r * (1 - (1 - l) * e), n % 6) {
                case 0:
                    i = r, s = m, a = o;
                    break;
                case 1:
                    i = h, s = r, a = o;
                    break;
                case 2:
                    i = o, s = r, a = m;
                    break;
                case 3:
                    i = o, s = h, a = r;
                    break;
                case 4:
                    i = m, s = o, a = r;
                    break;
                case 5:
                    i = r, s = o, a = h;
                    break
            }
            return [i, s, a]
        }

        function RGBtoHSV(t, e, r) {
            var i = Math.max(t, e, r), s = Math.min(t, e, r), a = i - s, n, l = i === 0 ? 0 : a / i, o = i / 255;
            switch (i) {
                case s:
                    n = 0;
                    break;
                case t:
                    n = e - r + a * (e < r ? 6 : 0), n /= 6 * a;
                    break;
                case e:
                    n = r - t + a * 2, n /= 6 * a;
                    break;
                case r:
                    n = t - e + a * 4, n /= 6 * a;
                    break
            }
            return [n, l, o]
        }

        function addSaturationToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(t, e) {
            var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
            return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }

        var rgbToHex = function () {
            var t = [], e, r;
            for (e = 0; e < 256; e += 1) r = e.toString(16), t[e] = r.length === 1 ? "0" + r : r;
            return function (i, s, a) {
                return i < 0 && (i = 0), s < 0 && (s = 0), a < 0 && (a = 0), "#" + t[i] + t[s] + t[a]
            }
        }(), setSubframeEnabled = function (e) {
            subframeEnabled = !!e
        }, getSubframeEnabled = function () {
            return subframeEnabled
        }, setExpressionsPlugin = function (e) {
            expressionsPlugin = e
        }, getExpressionsPlugin = function () {
            return expressionsPlugin
        }, setExpressionInterfaces = function (e) {
            expressionsInterfaces = e
        }, getExpressionInterfaces = function () {
            return expressionsInterfaces
        }, setDefaultCurveSegments = function (e) {
            defaultCurveSegments = e
        }, getDefaultCurveSegments = function () {
            return defaultCurveSegments
        }, setIdPrefix = function (e) {
            idPrefix$1 = e
        };

        function createNS(t) {
            return document.createElementNS(svgNS, t)
        }

        function _typeof$5(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function (r) {
                return typeof r
            } : _typeof$5 = function (r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$5(t)
        }

        var dataManager = function () {
            var t = 1, e = [], r, i, s = {
                onmessage: function () {
                }, postMessage: function (b) {
                    r({data: b})
                }
            }, a = {
                postMessage: function (b) {
                    s.onmessage({data: b})
                }
            };

            function n(f) {
                if (window.Worker && window.Blob && getWebWorker()) {
                    var b = new Blob(["var _workerSelf = self; self.onmessage = ", f.toString()], {type: "text/javascript"}),
                        y = URL.createObjectURL(b);
                    return new Worker(y)
                }
                return r = f, s
            }

            function l() {
                i || (i = n(function (b) {
                    function y() {
                        function x(k, C) {
                            var A, g, P = k.length, F, w, D, G;
                            for (g = 0; g < P; g += 1) if (A = k[g], "ks" in A && !A.completed) {
                                if (A.completed = !0, A.hasMask) {
                                    var N = A.masksProperties;
                                    for (w = N.length, F = 0; F < w; F += 1) if (N[F].pt.k.i) _(N[F].pt.k); else for (G = N[F].pt.k.length, D = 0; D < G; D += 1) N[F].pt.k[D].s && _(N[F].pt.k[D].s[0]), N[F].pt.k[D].e && _(N[F].pt.k[D].e[0])
                                }
                                A.ty === 0 ? (A.layers = c(A.refId, C), x(A.layers, C)) : A.ty === 4 ? v(A.shapes) : A.ty === 5 && R(A)
                            }
                        }

                        function p(k, C) {
                            if (k) {
                                var A = 0, g = k.length;
                                for (A = 0; A < g; A += 1) k[A].t === 1 && (k[A].data.layers = c(k[A].data.refId, C), x(k[A].data.layers, C))
                            }
                        }

                        function u(k, C) {
                            for (var A = 0, g = C.length; A < g;) {
                                if (C[A].id === k) return C[A];
                                A += 1
                            }
                            return null
                        }

                        function c(k, C) {
                            var A = u(k, C);
                            return A ? A.layers.__used ? JSON.parse(JSON.stringify(A.layers)) : (A.layers.__used = !0, A.layers) : null
                        }

                        function v(k) {
                            var C, A = k.length, g, P;
                            for (C = A - 1; C >= 0; C -= 1) if (k[C].ty === "sh") if (k[C].ks.k.i) _(k[C].ks.k); else for (P = k[C].ks.k.length, g = 0; g < P; g += 1) k[C].ks.k[g].s && _(k[C].ks.k[g].s[0]), k[C].ks.k[g].e && _(k[C].ks.k[g].e[0]); else k[C].ty === "gr" && v(k[C].it)
                        }

                        function _(k) {
                            var C, A = k.i.length;
                            for (C = 0; C < A; C += 1) k.i[C][0] += k.v[C][0], k.i[C][1] += k.v[C][1], k.o[C][0] += k.v[C][0], k.o[C][1] += k.v[C][1]
                        }

                        function E(k, C) {
                            var A = C ? C.split(".") : [100, 100, 100];
                            return k[0] > A[0] ? !0 : A[0] > k[0] ? !1 : k[1] > A[1] ? !0 : A[1] > k[1] ? !1 : k[2] > A[2] ? !0 : A[2] > k[2] ? !1 : null
                        }

                        var T = function () {
                            var k = [4, 4, 14];

                            function C(g) {
                                var P = g.t.d;
                                g.t.d = {k: [{s: P, t: 0}]}
                            }

                            function A(g) {
                                var P, F = g.length;
                                for (P = 0; P < F; P += 1) g[P].ty === 5 && C(g[P])
                            }

                            return function (g) {
                                if (E(k, g.v) && (A(g.layers), g.assets)) {
                                    var P, F = g.assets.length;
                                    for (P = 0; P < F; P += 1) g.assets[P].layers && A(g.assets[P].layers)
                                }
                            }
                        }(), M = function () {
                            var k = [4, 7, 99];
                            return function (C) {
                                if (C.chars && !E(k, C.v)) {
                                    var A, g = C.chars.length;
                                    for (A = 0; A < g; A += 1) {
                                        var P = C.chars[A];
                                        P.data && P.data.shapes && (v(P.data.shapes), P.data.ip = 0, P.data.op = 99999, P.data.st = 0, P.data.sr = 1, P.data.ks = {
                                            p: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            s: {k: [100, 100], a: 0},
                                            a: {k: [0, 0], a: 0},
                                            r: {k: 0, a: 0},
                                            o: {k: 100, a: 0}
                                        }, C.chars[A].t || (P.data.shapes.push({ty: "no"}), P.data.shapes[0].it.push({
                                            p: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            s: {k: [100, 100], a: 0},
                                            a: {k: [0, 0], a: 0},
                                            r: {k: 0, a: 0},
                                            o: {k: 100, a: 0},
                                            sk: {k: 0, a: 0},
                                            sa: {k: 0, a: 0},
                                            ty: "tr"
                                        })))
                                    }
                                }
                            }
                        }(), I = function () {
                            var k = [5, 7, 15];

                            function C(g) {
                                var P = g.t.p;
                                typeof P.a == "number" && (P.a = {
                                    a: 0,
                                    k: P.a
                                }), typeof P.p == "number" && (P.p = {
                                    a: 0,
                                    k: P.p
                                }), typeof P.r == "number" && (P.r = {a: 0, k: P.r})
                            }

                            function A(g) {
                                var P, F = g.length;
                                for (P = 0; P < F; P += 1) g[P].ty === 5 && C(g[P])
                            }

                            return function (g) {
                                if (E(k, g.v) && (A(g.layers), g.assets)) {
                                    var P, F = g.assets.length;
                                    for (P = 0; P < F; P += 1) g.assets[P].layers && A(g.assets[P].layers)
                                }
                            }
                        }(), O = function () {
                            var k = [4, 1, 9];

                            function C(g) {
                                var P, F = g.length, w, D;
                                for (P = 0; P < F; P += 1) if (g[P].ty === "gr") C(g[P].it); else if (g[P].ty === "fl" || g[P].ty === "st") if (g[P].c.k && g[P].c.k[0].i) for (D = g[P].c.k.length, w = 0; w < D; w += 1) g[P].c.k[w].s && (g[P].c.k[w].s[0] /= 255, g[P].c.k[w].s[1] /= 255, g[P].c.k[w].s[2] /= 255, g[P].c.k[w].s[3] /= 255), g[P].c.k[w].e && (g[P].c.k[w].e[0] /= 255, g[P].c.k[w].e[1] /= 255, g[P].c.k[w].e[2] /= 255, g[P].c.k[w].e[3] /= 255); else g[P].c.k[0] /= 255, g[P].c.k[1] /= 255, g[P].c.k[2] /= 255, g[P].c.k[3] /= 255
                            }

                            function A(g) {
                                var P, F = g.length;
                                for (P = 0; P < F; P += 1) g[P].ty === 4 && C(g[P].shapes)
                            }

                            return function (g) {
                                if (E(k, g.v) && (A(g.layers), g.assets)) {
                                    var P, F = g.assets.length;
                                    for (P = 0; P < F; P += 1) g.assets[P].layers && A(g.assets[P].layers)
                                }
                            }
                        }(), V = function () {
                            var k = [4, 4, 18];

                            function C(g) {
                                var P, F = g.length, w, D;
                                for (P = F - 1; P >= 0; P -= 1) if (g[P].ty === "sh") if (g[P].ks.k.i) g[P].ks.k.c = g[P].closed; else for (D = g[P].ks.k.length, w = 0; w < D; w += 1) g[P].ks.k[w].s && (g[P].ks.k[w].s[0].c = g[P].closed), g[P].ks.k[w].e && (g[P].ks.k[w].e[0].c = g[P].closed); else g[P].ty === "gr" && C(g[P].it)
                            }

                            function A(g) {
                                var P, F, w = g.length, D, G, N, z;
                                for (F = 0; F < w; F += 1) {
                                    if (P = g[F], P.hasMask) {
                                        var j = P.masksProperties;
                                        for (G = j.length, D = 0; D < G; D += 1) if (j[D].pt.k.i) j[D].pt.k.c = j[D].cl; else for (z = j[D].pt.k.length, N = 0; N < z; N += 1) j[D].pt.k[N].s && (j[D].pt.k[N].s[0].c = j[D].cl), j[D].pt.k[N].e && (j[D].pt.k[N].e[0].c = j[D].cl)
                                    }
                                    P.ty === 4 && C(P.shapes)
                                }
                            }

                            return function (g) {
                                if (E(k, g.v) && (A(g.layers), g.assets)) {
                                    var P, F = g.assets.length;
                                    for (P = 0; P < F; P += 1) g.assets[P].layers && A(g.assets[P].layers)
                                }
                            }
                        }();

                        function L(k) {
                            k.__complete || (O(k), T(k), M(k), I(k), V(k), x(k.layers, k.assets), p(k.chars, k.assets), k.__complete = !0)
                        }

                        function R(k) {
                            k.t.a.length === 0 && "m" in k.t.p
                        }

                        var B = {};
                        return B.completeData = L, B.checkColors = O, B.checkChars = M, B.checkPathProperties = I, B.checkShapes = V, B.completeLayers = x, B
                    }

                    if (a.dataManager || (a.dataManager = y()), a.assetLoader || (a.assetLoader = function () {
                        function x(u) {
                            var c = u.getResponseHeader("content-type");
                            return c && u.responseType === "json" && c.indexOf("json") !== -1 || u.response && _typeof$5(u.response) === "object" ? u.response : u.response && typeof u.response == "string" ? JSON.parse(u.response) : u.responseText ? JSON.parse(u.responseText) : null
                        }

                        function p(u, c, v, _) {
                            var E, T = new XMLHttpRequest;
                            try {
                                T.responseType = "json"
                            } catch {
                            }
                            T.onreadystatechange = function () {
                                if (T.readyState === 4) if (T.status === 200) E = x(T), v(E); else try {
                                    E = x(T), v(E)
                                } catch (M) {
                                    _ && _(M)
                                }
                            };
                            try {
                                T.open(["G", "E", "T"].join(""), u, !0)
                            } catch {
                                T.open(["G", "E", "T"].join(""), c + "/" + u, !0)
                            }
                            T.send()
                        }

                        return {load: p}
                    }()), b.data.type === "loadAnimation") a.assetLoader.load(b.data.path, b.data.fullPath, function (x) {
                        a.dataManager.completeData(x), a.postMessage({id: b.data.id, payload: x, status: "success"})
                    }, function () {
                        a.postMessage({id: b.data.id, status: "error"})
                    }); else if (b.data.type === "complete") {
                        var d = b.data.animation;
                        a.dataManager.completeData(d), a.postMessage({id: b.data.id, payload: d, status: "success"})
                    } else b.data.type === "loadData" && a.assetLoader.load(b.data.path, b.data.fullPath, function (x) {
                        a.postMessage({id: b.data.id, payload: x, status: "success"})
                    }, function () {
                        a.postMessage({id: b.data.id, status: "error"})
                    })
                }), i.onmessage = function (f) {
                    var b = f.data, y = b.id, d = e[y];
                    e[y] = null, b.status === "success" ? d.onComplete(b.payload) : d.onError && d.onError()
                })
            }

            function o(f, b) {
                t += 1;
                var y = "processId_" + t;
                return e[y] = {onComplete: f, onError: b}, y
            }

            function h(f, b, y) {
                l();
                var d = o(b, y);
                i.postMessage({
                    type: "loadAnimation",
                    path: f,
                    fullPath: window.location.origin + window.location.pathname,
                    id: d
                })
            }

            function m(f, b, y) {
                l();
                var d = o(b, y);
                i.postMessage({
                    type: "loadData",
                    path: f,
                    fullPath: window.location.origin + window.location.pathname,
                    id: d
                })
            }

            function S(f, b, y) {
                l();
                var d = o(b, y);
                i.postMessage({type: "complete", animation: f, id: d})
            }

            return {loadAnimation: h, loadData: m, completeAnimation: S}
        }(), ImagePreloader = function () {
            var t = function () {
                var p = createTag("canvas");
                p.width = 1, p.height = 1;
                var u = p.getContext("2d");
                return u.fillStyle = "rgba(0,0,0,0)", u.fillRect(0, 0, 1, 1), p
            }();

            function e() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function r() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function i(p, u, c) {
                var v = "";
                if (p.e) v = p.p; else if (u) {
                    var _ = p.p;
                    _.indexOf("images/") !== -1 && (_ = _.split("/")[1]), v = u + _
                } else v = c, v += p.u ? p.u : "", v += p.p;
                return v
            }

            function s(p) {
                var u = 0, c = setInterval((function () {
                    var v = p.getBBox();
                    (v.width || u > 500) && (this._imageLoaded(), clearInterval(c)), u += 1
                }).bind(this), 50)
            }

            function a(p) {
                var u = i(p, this.assetsPath, this.path), c = createNS("image");
                isSafari ? this.testImageLoaded(c) : c.addEventListener("load", this._imageLoaded, !1), c.addEventListener("error", (function () {
                    v.img = t, this._imageLoaded()
                }).bind(this), !1), c.setAttributeNS("http://www.w3.org/1999/xlink", "href", u), this._elementHelper.append ? this._elementHelper.append(c) : this._elementHelper.appendChild(c);
                var v = {img: c, assetData: p};
                return v
            }

            function n(p) {
                var u = i(p, this.assetsPath, this.path), c = createTag("img");
                c.crossOrigin = "anonymous", c.addEventListener("load", this._imageLoaded, !1), c.addEventListener("error", (function () {
                    v.img = t, this._imageLoaded()
                }).bind(this), !1), c.src = u;
                var v = {img: c, assetData: p};
                return v
            }

            function l(p) {
                var u = {assetData: p}, c = i(p, this.assetsPath, this.path);
                return dataManager.loadData(c, (function (v) {
                    u.img = v, this._footageLoaded()
                }).bind(this), (function () {
                    u.img = {}, this._footageLoaded()
                }).bind(this)), u
            }

            function o(p, u) {
                this.imagesLoadedCb = u;
                var c, v = p.length;
                for (c = 0; c < v; c += 1) p[c].layers || (!p[c].t || p[c].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(p[c]))) : p[c].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(p[c]))))
            }

            function h(p) {
                this.path = p || ""
            }

            function m(p) {
                this.assetsPath = p || ""
            }

            function S(p) {
                for (var u = 0, c = this.images.length; u < c;) {
                    if (this.images[u].assetData === p) return this.images[u].img;
                    u += 1
                }
                return null
            }

            function f() {
                this.imagesLoadedCb = null, this.images.length = 0
            }

            function b() {
                return this.totalImages === this.loadedAssets
            }

            function y() {
                return this.totalFootages === this.loadedFootagesCount
            }

            function d(p, u) {
                p === "svg" ? (this._elementHelper = u, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
            }

            function x() {
                this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = l.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }

            return x.prototype = {
                loadAssets: o,
                setAssetsPath: m,
                setPath: h,
                loadedImages: b,
                loadedFootages: y,
                destroy: f,
                getAsset: S,
                createImgData: n,
                createImageData: a,
                imageLoaded: e,
                footageLoaded: r,
                setCacheType: d
            }, x
        }();

        function BaseEvent() {
        }

        BaseEvent.prototype = {
            triggerEvent: function (e, r) {
                if (this._cbs[e]) for (var i = this._cbs[e], s = 0; s < i.length; s += 1) i[s](r)
            }, addEventListener: function (e, r) {
                return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(r), (function () {
                    this.removeEventListener(e, r)
                }).bind(this)
            }, removeEventListener: function (e, r) {
                if (!r) this._cbs[e] = null; else if (this._cbs[e]) {
                    for (var i = 0, s = this._cbs[e].length; i < s;) this._cbs[e][i] === r && (this._cbs[e].splice(i, 1), i -= 1, s -= 1), i += 1;
                    this._cbs[e].length || (this._cbs[e] = null)
                }
            }
        };
        var markerParser = function () {
            function t(e) {
                for (var r = e.split(`\r
`), i = {}, s, a = 0, n = 0; n < r.length; n += 1) s = r[n].split(":"), s.length === 2 && (i[s[0]] = s[1].trim(), a += 1);
                if (a === 0) throw new Error;
                return i
            }

            return function (e) {
                for (var r = [], i = 0; i < e.length; i += 1) {
                    var s = e[i], a = {time: s.tm, duration: s.dr};
                    try {
                        a.payload = JSON.parse(e[i].cm)
                    } catch {
                        try {
                            a.payload = t(e[i].cm)
                        } catch {
                            a.payload = {name: e[i].cm}
                        }
                    }
                    r.push(a)
                }
                return r
            }
        }(), ProjectInterface = function () {
            function t(e) {
                this.compositions.push(e)
            }

            return function () {
                function e(r) {
                    for (var i = 0, s = this.compositions.length; i < s;) {
                        if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
                        i += 1
                    }
                    return null
                }

                return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
            }
        }(), renderers = {}, registerRenderer = function (e, r) {
            renderers[e] = r
        };

        function getRenderer(t) {
            return renderers[t]
        }

        function getRegisteredRenderer() {
            if (renderers.canvas) return "canvas";
            for (var t in renderers) if (renderers[t]) return t;
            return ""
        }

        function _typeof$4(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function (r) {
                return typeof r
            } : _typeof$4 = function (r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$4(t)
        }

        var AnimationItem = function () {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function (t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? e = t.animType : t.renderer && (e = t.renderer);
            var r = getRenderer(e);
            this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function () {
            this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function (t) {
            dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function (t, e) {
            e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
            var r = {wrapper: t, animationData: e}, i = t.attributes;
            r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
            var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            s === "false" ? r.loop = !1 : s === "true" ? r.loop = !0 : s !== "" && (r.loop = parseInt(s, 10));
            var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
            r.autoplay = a !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
            var n = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
            n === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function (t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e = this.animationData.layers, r, i = e.length, s = t.layers, a, n = s.length;
            for (a = 0; a < n; a += 1) for (r = 0; r < i;) {
                if (e[r].id === s[a].id) {
                    e[r] = s[a];
                    break
                }
                r += 1
            }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (i = t.assets.length, r = 0; r < i; r += 1) this.animationData.assets.push(t.assets[r]);
            this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function (t) {
            this.animationData = t;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function () {
            var t = this.animationData.segments;
            if (!t || t.length === 0 || !this.autoloadSegments) {
                this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                return
            }
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), (function () {
                this.trigger("data_failed")
            }).bind(this))
        }, AnimationItem.prototype.loadSegments = function () {
            var t = this.animationData.segments;
            t || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function () {
            this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function () {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function (t) {
            if (this.renderer) try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
            } catch (e) {
                this.triggerConfigError(e)
            }
        }, AnimationItem.prototype.waitForFontsLoaded = function () {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function () {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var t = getExpressionsPlugin();
                t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function () {
                    this.trigger("DOMLoaded")
                }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
            }
        }, AnimationItem.prototype.resize = function (t, e) {
            var r = typeof t == "number" ? t : void 0, i = typeof e == "number" ? e : void 0;
            this.renderer.updateContainerSize(r, i)
        }, AnimationItem.prototype.setSubframe = function (t) {
            this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function () {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function () {
            if (!(this.isLoaded === !1 || !this.renderer)) try {
                this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
            } catch (t) {
                this.triggerRenderFrameError(t)
            }
        }, AnimationItem.prototype.play = function (t) {
            t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function (t) {
            t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function (t) {
            t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function (t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function (t) {
            for (var e, r = 0; r < this.markers.length; r += 1) if (e = this.markers[r], e.payload && e.payload.name === t) return e;
            return null
        }, AnimationItem.prototype.goToAndStop = function (t, e, r) {
            if (!(r && this.name !== r)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var s = this.getMarkerData(t);
                    s && this.goToAndStop(s.time, !0)
                } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause()
            }
        }, AnimationItem.prototype.goToAndPlay = function (t, e, r) {
            if (!(r && this.name !== r)) {
                var i = Number(t);
                if (isNaN(i)) {
                    var s = this.getMarkerData(t);
                    s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
                } else this.goToAndStop(i, e, r);
                this.play()
            }
        }, AnimationItem.prototype.advanceTime = function (t) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var e = this.currentRawFrame + t * this.frameModifier, r = !1;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (r = !0, e = 0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
            }
        }, AnimationItem.prototype.adjustSegment = function (t, e) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function (t, e) {
            var r = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function (t, e) {
            if (e && (this.segments.length = 0), _typeof$4(t[0]) === "object") {
                var r, i = t.length;
                for (r = 0; r < i; r += 1) this.segments.push(t[r])
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function (t) {
            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function (t) {
            return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), !0) : !1
        }, AnimationItem.prototype.destroy = function (t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
            this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function (t) {
            this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function (t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function (t) {
            this.loop = t
        }, AnimationItem.prototype.setVolume = function (t, e) {
            e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function () {
            return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function (t) {
            t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function (t) {
            t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function () {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function () {
            return this.path
        }, AnimationItem.prototype.getAssetsPath = function (t) {
            var e = "";
            if (t.e) e = t.p; else if (this.assetsPath) {
                var r = t.p;
                r.indexOf("images/") !== -1 && (r = r.split("/")[1]), e = this.assetsPath + r
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e
        }, AnimationItem.prototype.getAssetData = function (t) {
            for (var e = 0, r = this.assets.length; e < r;) {
                if (t === this.assets[e].id) return this.assets[e];
                e += 1
            }
            return null
        }, AnimationItem.prototype.hide = function () {
            this.renderer.hide()
        }, AnimationItem.prototype.show = function () {
            this.renderer.show()
        }, AnimationItem.prototype.getDuration = function (t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function (t, e, r) {
            try {
                var i = this.renderer.getElementByPath(t);
                i.updateDocumentData(e, r)
            } catch {
            }
        }, AnimationItem.prototype.trigger = function (t) {
            if (this._cbs && this._cbs[t]) switch (t) {
                case"enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case"drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                    break;
                case"loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                case"complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                case"segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                case"destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                default:
                    this.triggerEvent(t)
            }
            t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function (t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function (t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var animationManager = function () {
            var t = {}, e = [], r = 0, i = 0, s = 0, a = !0, n = !1;

            function l(C) {
                for (var A = 0, g = C.target; A < i;) e[A].animation === g && (e.splice(A, 1), A -= 1, i -= 1, g.isPaused || S()), A += 1
            }

            function o(C, A) {
                if (!C) return null;
                for (var g = 0; g < i;) {
                    if (e[g].elem === C && e[g].elem !== null) return e[g].animation;
                    g += 1
                }
                var P = new AnimationItem;
                return f(P, C), P.setData(C, A), P
            }

            function h() {
                var C, A = e.length, g = [];
                for (C = 0; C < A; C += 1) g.push(e[C].animation);
                return g
            }

            function m() {
                s += 1, O()
            }

            function S() {
                s -= 1
            }

            function f(C, A) {
                C.addEventListener("destroy", l), C.addEventListener("_active", m), C.addEventListener("_idle", S), e.push({
                    elem: A,
                    animation: C
                }), i += 1
            }

            function b(C) {
                var A = new AnimationItem;
                return f(A, null), A.setParams(C), A
            }

            function y(C, A) {
                var g;
                for (g = 0; g < i; g += 1) e[g].animation.setSpeed(C, A)
            }

            function d(C, A) {
                var g;
                for (g = 0; g < i; g += 1) e[g].animation.setDirection(C, A)
            }

            function x(C) {
                var A;
                for (A = 0; A < i; A += 1) e[A].animation.play(C)
            }

            function p(C) {
                var A = C - r, g;
                for (g = 0; g < i; g += 1) e[g].animation.advanceTime(A);
                r = C, s && !n ? window.requestAnimationFrame(p) : a = !0
            }

            function u(C) {
                r = C, window.requestAnimationFrame(p)
            }

            function c(C) {
                var A;
                for (A = 0; A < i; A += 1) e[A].animation.pause(C)
            }

            function v(C, A, g) {
                var P;
                for (P = 0; P < i; P += 1) e[P].animation.goToAndStop(C, A, g)
            }

            function _(C) {
                var A;
                for (A = 0; A < i; A += 1) e[A].animation.stop(C)
            }

            function E(C) {
                var A;
                for (A = 0; A < i; A += 1) e[A].animation.togglePause(C)
            }

            function T(C) {
                var A;
                for (A = i - 1; A >= 0; A -= 1) e[A].animation.destroy(C)
            }

            function M(C, A, g) {
                var P = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                    F, w = P.length;
                for (F = 0; F < w; F += 1) g && P[F].setAttribute("data-bm-type", g), o(P[F], C);
                if (A && w === 0) {
                    g || (g = "svg");
                    var D = document.getElementsByTagName("body")[0];
                    D.innerText = "";
                    var G = createTag("div");
                    G.style.width = "100%", G.style.height = "100%", G.setAttribute("data-bm-type", g), D.appendChild(G), o(G, C)
                }
            }

            function I() {
                var C;
                for (C = 0; C < i; C += 1) e[C].animation.resize()
            }

            function O() {
                !n && s && a && (window.requestAnimationFrame(u), a = !1)
            }

            function V() {
                n = !0
            }

            function L() {
                n = !1, O()
            }

            function R(C, A) {
                var g;
                for (g = 0; g < i; g += 1) e[g].animation.setVolume(C, A)
            }

            function B(C) {
                var A;
                for (A = 0; A < i; A += 1) e[A].animation.mute(C)
            }

            function k(C) {
                var A;
                for (A = 0; A < i; A += 1) e[A].animation.unmute(C)
            }

            return t.registerAnimation = o, t.loadAnimation = b, t.setSpeed = y, t.setDirection = d, t.play = x, t.pause = c, t.stop = _, t.togglePause = E, t.searchAnimations = M, t.resize = I, t.goToAndStop = v, t.destroy = T, t.freeze = V, t.unfreeze = L, t.setVolume = R, t.mute = B, t.unmute = k, t.getRegisteredAnimations = h, t
        }(), BezierFactory = function () {
            var t = {};
            t.getBezierEasing = r;
            var e = {};

            function r(u, c, v, _, E) {
                var T = E || ("bez_" + u + "_" + c + "_" + v + "_" + _).replace(/\./g, "p");
                if (e[T]) return e[T];
                var M = new p([u, c, v, _]);
                return e[T] = M, M
            }

            var i = 4, s = .001, a = 1e-7, n = 10, l = 11, o = 1 / (l - 1), h = typeof Float32Array == "function";

            function m(u, c) {
                return 1 - 3 * c + 3 * u
            }

            function S(u, c) {
                return 3 * c - 6 * u
            }

            function f(u) {
                return 3 * u
            }

            function b(u, c, v) {
                return ((m(c, v) * u + S(c, v)) * u + f(c)) * u
            }

            function y(u, c, v) {
                return 3 * m(c, v) * u * u + 2 * S(c, v) * u + f(c)
            }

            function d(u, c, v, _, E) {
                var T, M, I = 0;
                do M = c + (v - c) / 2, T = b(M, _, E) - u, T > 0 ? v = M : c = M; while (Math.abs(T) > a && ++I < n);
                return M
            }

            function x(u, c, v, _) {
                for (var E = 0; E < i; ++E) {
                    var T = y(c, v, _);
                    if (T === 0) return c;
                    var M = b(c, v, _) - u;
                    c -= M / T
                }
                return c
            }

            function p(u) {
                this._p = u, this._mSampleValues = h ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this)
            }

            return p.prototype = {
                get: function (c) {
                    var v = this._p[0], _ = this._p[1], E = this._p[2], T = this._p[3];
                    return this._precomputed || this._precompute(), v === _ && E === T ? c : c === 0 ? 0 : c === 1 ? 1 : b(this._getTForX(c), _, T)
                }, _precompute: function () {
                    var c = this._p[0], v = this._p[1], _ = this._p[2], E = this._p[3];
                    this._precomputed = !0, (c !== v || _ !== E) && this._calcSampleValues()
                }, _calcSampleValues: function () {
                    for (var c = this._p[0], v = this._p[2], _ = 0; _ < l; ++_) this._mSampleValues[_] = b(_ * o, c, v)
                }, _getTForX: function (c) {
                    for (var v = this._p[0], _ = this._p[2], E = this._mSampleValues, T = 0, M = 1, I = l - 1; M !== I && E[M] <= c; ++M) T += o;
                    --M;
                    var O = (c - E[M]) / (E[M + 1] - E[M]), V = T + O * o, L = y(V, v, _);
                    return L >= s ? x(c, V, v, _) : L === 0 ? V : d(c, T, T + o, v, _)
                }
            }, t
        }(), pooling = function () {
            function t(e) {
                return e.concat(createSizedArray(e.length))
            }

            return {double: t}
        }(), poolFactory = function () {
            return function (t, e, r) {
                var i = 0, s = t, a = createSizedArray(s), n = {newElement: l, release: o};

                function l() {
                    var h;
                    return i ? (i -= 1, h = a[i]) : h = e(), h
                }

                function o(h) {
                    i === s && (a = pooling.double(a), s *= 2), r && r(h), a[i] = h, i += 1
                }

                return n
            }
        }(), bezierLengthPool = function () {
            function t() {
                return {
                    addedLength: 0,
                    percents: createTypedArray("float32", getDefaultCurveSegments()),
                    lengths: createTypedArray("float32", getDefaultCurveSegments())
                }
            }

            return poolFactory(8, t)
        }(), segmentsLengthPool = function () {
            function t() {
                return {lengths: [], totalLength: 0}
            }

            function e(r) {
                var i, s = r.lengths.length;
                for (i = 0; i < s; i += 1) bezierLengthPool.release(r.lengths[i]);
                r.lengths.length = 0
            }

            return poolFactory(8, t, e)
        }();

        function bezFunction() {
            var t = Math;

            function e(f, b, y, d, x, p) {
                var u = f * d + b * x + y * p - x * d - p * f - y * b;
                return u > -.001 && u < .001
            }

            function r(f, b, y, d, x, p, u, c, v) {
                if (y === 0 && p === 0 && v === 0) return e(f, b, d, x, u, c);
                var _ = t.sqrt(t.pow(d - f, 2) + t.pow(x - b, 2) + t.pow(p - y, 2)),
                    E = t.sqrt(t.pow(u - f, 2) + t.pow(c - b, 2) + t.pow(v - y, 2)),
                    T = t.sqrt(t.pow(u - d, 2) + t.pow(c - x, 2) + t.pow(v - p, 2)), M;
                return _ > E ? _ > T ? M = _ - E - T : M = T - E - _ : T > E ? M = T - E - _ : M = E - _ - T, M > -1e-4 && M < 1e-4
            }

            var i = function () {
                return function (f, b, y, d) {
                    var x = getDefaultCurveSegments(), p, u, c, v, _, E = 0, T, M = [], I = [],
                        O = bezierLengthPool.newElement();
                    for (c = y.length, p = 0; p < x; p += 1) {
                        for (_ = p / (x - 1), T = 0, u = 0; u < c; u += 1) v = bmPow(1 - _, 3) * f[u] + 3 * bmPow(1 - _, 2) * _ * y[u] + 3 * (1 - _) * bmPow(_, 2) * d[u] + bmPow(_, 3) * b[u], M[u] = v, I[u] !== null && (T += bmPow(M[u] - I[u], 2)), I[u] = M[u];
                        T && (T = bmSqrt(T), E += T), O.percents[p] = _, O.lengths[p] = E
                    }
                    return O.addedLength = E, O
                }
            }();

            function s(f) {
                var b = segmentsLengthPool.newElement(), y = f.c, d = f.v, x = f.o, p = f.i, u, c = f._length,
                    v = b.lengths, _ = 0;
                for (u = 0; u < c - 1; u += 1) v[u] = i(d[u], d[u + 1], x[u], p[u + 1]), _ += v[u].addedLength;
                return y && c && (v[u] = i(d[u], d[0], x[u], p[0]), _ += v[u].addedLength), b.totalLength = _, b
            }

            function a(f) {
                this.segmentLength = 0, this.points = new Array(f)
            }

            function n(f, b) {
                this.partialLength = f, this.point = b
            }

            var l = function () {
                var f = {};
                return function (b, y, d, x) {
                    var p = (b[0] + "_" + b[1] + "_" + y[0] + "_" + y[1] + "_" + d[0] + "_" + d[1] + "_" + x[0] + "_" + x[1]).replace(/\./g, "p");
                    if (!f[p]) {
                        var u = getDefaultCurveSegments(), c, v, _, E, T, M = 0, I, O, V = null;
                        b.length === 2 && (b[0] !== y[0] || b[1] !== y[1]) && e(b[0], b[1], y[0], y[1], b[0] + d[0], b[1] + d[1]) && e(b[0], b[1], y[0], y[1], y[0] + x[0], y[1] + x[1]) && (u = 2);
                        var L = new a(u);
                        for (_ = d.length, c = 0; c < u; c += 1) {
                            for (O = createSizedArray(_), T = c / (u - 1), I = 0, v = 0; v < _; v += 1) E = bmPow(1 - T, 3) * b[v] + 3 * bmPow(1 - T, 2) * T * (b[v] + d[v]) + 3 * (1 - T) * bmPow(T, 2) * (y[v] + x[v]) + bmPow(T, 3) * y[v], O[v] = E, V !== null && (I += bmPow(O[v] - V[v], 2));
                            I = bmSqrt(I), M += I, L.points[c] = new n(I, O), V = O
                        }
                        L.segmentLength = M, f[p] = L
                    }
                    return f[p]
                }
            }();

            function o(f, b) {
                var y = b.percents, d = b.lengths, x = y.length, p = bmFloor((x - 1) * f), u = f * b.addedLength, c = 0;
                if (p === x - 1 || p === 0 || u === d[p]) return y[p];
                for (var v = d[p] > u ? -1 : 1, _ = !0; _;) if (d[p] <= u && d[p + 1] > u ? (c = (u - d[p]) / (d[p + 1] - d[p]), _ = !1) : p += v, p < 0 || p >= x - 1) {
                    if (p === x - 1) return y[p];
                    _ = !1
                }
                return y[p] + (y[p + 1] - y[p]) * c
            }

            function h(f, b, y, d, x, p) {
                var u = o(x, p), c = 1 - u,
                    v = t.round((c * c * c * f[0] + (u * c * c + c * u * c + c * c * u) * y[0] + (u * u * c + c * u * u + u * c * u) * d[0] + u * u * u * b[0]) * 1e3) / 1e3,
                    _ = t.round((c * c * c * f[1] + (u * c * c + c * u * c + c * c * u) * y[1] + (u * u * c + c * u * u + u * c * u) * d[1] + u * u * u * b[1]) * 1e3) / 1e3;
                return [v, _]
            }

            var m = createTypedArray("float32", 8);

            function S(f, b, y, d, x, p, u) {
                x < 0 ? x = 0 : x > 1 && (x = 1);
                var c = o(x, u);
                p = p > 1 ? 1 : p;
                var v = o(p, u), _, E = f.length, T = 1 - c, M = 1 - v, I = T * T * T, O = c * T * T * 3,
                    V = c * c * T * 3, L = c * c * c, R = T * T * M, B = c * T * M + T * c * M + T * T * v,
                    k = c * c * M + T * c * v + c * T * v, C = c * c * v, A = T * M * M,
                    g = c * M * M + T * v * M + T * M * v, P = c * v * M + T * v * v + c * M * v, F = c * v * v,
                    w = M * M * M, D = v * M * M + M * v * M + M * M * v, G = v * v * M + M * v * v + v * M * v,
                    N = v * v * v;
                for (_ = 0; _ < E; _ += 1) m[_ * 4] = t.round((I * f[_] + O * y[_] + V * d[_] + L * b[_]) * 1e3) / 1e3, m[_ * 4 + 1] = t.round((R * f[_] + B * y[_] + k * d[_] + C * b[_]) * 1e3) / 1e3, m[_ * 4 + 2] = t.round((A * f[_] + g * y[_] + P * d[_] + F * b[_]) * 1e3) / 1e3, m[_ * 4 + 3] = t.round((w * f[_] + D * y[_] + G * d[_] + N * b[_]) * 1e3) / 1e3;
                return m
            }

            return {
                getSegmentsLength: s,
                getNewSegment: S,
                getPointInSegment: h,
                buildBezierData: l,
                pointOnLine2D: e,
                pointOnLine3D: r
            }
        }

        var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;

        function interpolateValue(t, e) {
            var r = this.offsetTime, i;
            this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
            for (var s = e.lastIndex, a = s, n = this.keyframes.length - 1, l = !0, o, h, m; l;) {
                if (o = this.keyframes[a], h = this.keyframes[a + 1], a === n - 1 && t >= h.t - r) {
                    o.h && (o = h), s = 0;
                    break
                }
                if (h.t - r > t) {
                    s = a;
                    break
                }
                a < n - 1 ? a += 1 : (s = 0, l = !1)
            }
            m = this.keyframesMetadata[a] || {};
            var S, f, b, y, d, x, p = h.t - r, u = o.t - r, c;
            if (o.to) {
                m.bezierData || (m.bezierData = bez.buildBezierData(o.s, h.s || o.e, o.to, o.ti));
                var v = m.bezierData;
                if (t >= p || t < u) {
                    var _ = t >= p ? v.points.length - 1 : 0;
                    for (f = v.points[_].point.length, S = 0; S < f; S += 1) i[S] = v.points[_].point[S]
                } else {
                    m.__fnct ? x = m.__fnct : (x = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, m.__fnct = x), b = x((t - u) / (p - u));
                    var E = v.segmentLength * b, T,
                        M = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
                    for (d = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, l = !0, y = v.points.length; l;) {
                        if (M += v.points[d].partialLength, E === 0 || b === 0 || d === v.points.length - 1) {
                            for (f = v.points[d].point.length, S = 0; S < f; S += 1) i[S] = v.points[d].point[S];
                            break
                        } else if (E >= M && E < M + v.points[d + 1].partialLength) {
                            for (T = (E - M) / v.points[d + 1].partialLength, f = v.points[d].point.length, S = 0; S < f; S += 1) i[S] = v.points[d].point[S] + (v.points[d + 1].point[S] - v.points[d].point[S]) * T;
                            break
                        }
                        d < y - 1 ? d += 1 : l = !1
                    }
                    e._lastPoint = d, e._lastAddedLength = M - v.points[d].partialLength, e._lastKeyframeIndex = a
                }
            } else {
                var I, O, V, L, R;
                if (n = o.s.length, c = h.s || o.e, this.sh && o.h !== 1) if (t >= p) i[0] = c[0], i[1] = c[1], i[2] = c[2]; else if (t <= u) i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2]; else {
                    var B = createQuaternion(o.s), k = createQuaternion(c), C = (t - u) / (p - u);
                    quaternionToEuler(i, slerp(B, k, C))
                } else for (a = 0; a < n; a += 1) o.h !== 1 && (t >= p ? b = 1 : t < u ? b = 0 : (o.o.x.constructor === Array ? (m.__fnct || (m.__fnct = []), m.__fnct[a] ? x = m.__fnct[a] : (I = o.o.x[a] === void 0 ? o.o.x[0] : o.o.x[a], O = o.o.y[a] === void 0 ? o.o.y[0] : o.o.y[a], V = o.i.x[a] === void 0 ? o.i.x[0] : o.i.x[a], L = o.i.y[a] === void 0 ? o.i.y[0] : o.i.y[a], x = BezierFactory.getBezierEasing(I, O, V, L).get, m.__fnct[a] = x)) : m.__fnct ? x = m.__fnct : (I = o.o.x, O = o.o.y, V = o.i.x, L = o.i.y, x = BezierFactory.getBezierEasing(I, O, V, L).get, o.keyframeMetadata = x), b = x((t - u) / (p - u)))), c = h.s || o.e, R = o.h === 1 ? o.s[a] : o.s[a] + (c[a] - o.s[a]) * b, this.propType === "multidimensional" ? i[a] = R : i = R
            }
            return e.lastIndex = s, i
        }

        function slerp(t, e, r) {
            var i = [], s = t[0], a = t[1], n = t[2], l = t[3], o = e[0], h = e[1], m = e[2], S = e[3], f, b, y, d, x;
            return b = s * o + a * h + n * m + l * S, b < 0 && (b = -b, o = -o, h = -h, m = -m, S = -S), 1 - b > 1e-6 ? (f = Math.acos(b), y = Math.sin(f), d = Math.sin((1 - r) * f) / y, x = Math.sin(r * f) / y) : (d = 1 - r, x = r), i[0] = d * s + x * o, i[1] = d * a + x * h, i[2] = d * n + x * m, i[3] = d * l + x * S, i
        }

        function quaternionToEuler(t, e) {
            var r = e[0], i = e[1], s = e[2], a = e[3],
                n = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s), l = Math.asin(2 * r * i + 2 * s * a),
                o = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
            t[0] = n / degToRads, t[1] = l / degToRads, t[2] = o / degToRads
        }

        function createQuaternion(t) {
            var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, s = Math.cos(e / 2),
                a = Math.cos(r / 2), n = Math.cos(i / 2), l = Math.sin(e / 2), o = Math.sin(r / 2), h = Math.sin(i / 2),
                m = s * a * n - l * o * h, S = l * o * n + s * a * h, f = l * a * n + s * o * h,
                b = s * o * n - l * a * h;
            return [S, f, b, m]
        }

        function getValueAtCurrentTime() {
            var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime,
                r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
                this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var i = this.interpolateValue(t, this._caching);
                this.pv = i
            }
            return this._caching.lastFrame = t, this.pv
        }

        function setVValue(t) {
            var e;
            if (this.propType === "unidimensional") e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0); else for (var r = 0, i = this.v.length; r < i;) e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = !0), r += 1
        }

        function processEffectsSequence() {
            if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return
                }
                this.lock = !0, this._mdf = this._isFirstFrame;
                var t, e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
                for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(t) {
            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function ValueProperty(t, e, r, i) {
            this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(t, e, r, i) {
            this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
            var s, a = e.k.length;
            for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(t, e, r, i) {
            this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(t, e, r, i) {
            this.propType = "multidimensional";
            var s, a = e.k.length, n, l, o, h;
            for (s = 0; s < a - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (n = e.k[s].s, l = e.k[s + 1].s, o = e.k[s].to, h = e.k[s].ti, (n.length === 2 && !(n[0] === l[0] && n[1] === l[1]) && bez.pointOnLine2D(n[0], n[1], l[0], l[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], l[0], l[1], l[0] + h[0], l[1] + h[1]) || n.length === 3 && !(n[0] === l[0] && n[1] === l[1] && n[2] === l[2]) && bez.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], l[0] + h[0], l[1] + h[1], l[2] + h[2])) && (e.k[s].to = null, e.k[s].ti = null), n[0] === l[0] && n[1] === l[1] && o[0] === 0 && o[1] === 0 && h[0] === 0 && h[1] === 0 && (n.length === 2 || n[2] === l[2] && o[2] === 0 && h[2] === 0) && (e.k[s].to = null, e.k[s].ti = null));
            this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
            var m = e.k[0].s.length;
            for (this.v = createTypedArray("float32", m), this.pv = createTypedArray("float32", m), s = 0; s < m; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray("float32", m)
            }, this.addEffect = addEffect
        }

        var PropertyFactory = function () {
            function t(r, i, s, a, n) {
                i.sid && (i = r.globalData.slotManager.getProp(i));
                var l;
                if (!i.k.length) l = new ValueProperty(r, i, a, n); else if (typeof i.k[0] == "number") l = new MultiDimensionalProperty(r, i, a, n); else switch (s) {
                    case 0:
                        l = new KeyframedValueProperty(r, i, a, n);
                        break;
                    case 1:
                        l = new KeyframedMultidimensionalProperty(r, i, a, n);
                        break
                }
                return l.effectsSequence.length && n.addDynamicProperty(l), l
            }

            var e = {getProp: t};
            return e
        }();

        function DynamicPropertyContainer() {
        }

        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function (e) {
                this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
            }, iterateDynamicProperties: function () {
                this._mdf = !1;
                var e, r = this.dynamicProperties.length;
                for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
            }, initDynamicPropertyContainer: function (e) {
                this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
            }
        };
        var pointPool = function () {
            function t() {
                return createTypedArray("float32", 2)
            }

            return poolFactory(8, t)
        }();

        function ShapePath() {
            this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }

        ShapePath.prototype.setPathData = function (t, e) {
            this.c = t, this.setLength(e);
            for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function (t) {
            for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t
        }, ShapePath.prototype.doubleArrayLength = function () {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function (t, e, r, i, s) {
            var a;
            switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                case"v":
                    a = this.v;
                    break;
                case"i":
                    a = this.i;
                    break;
                case"o":
                    a = this.o;
                    break;
                default:
                    a = [];
                    break
            }
            (!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e
        }, ShapePath.prototype.setTripleAt = function (t, e, r, i, s, a, n, l) {
            this.setXYAt(t, e, "v", n, l), this.setXYAt(r, i, "o", n, l), this.setXYAt(s, a, "i", n, l)
        }, ShapePath.prototype.reverse = function () {
            var t = new ShapePath;
            t.setPathData(this.c, this._length);
            var e = this.v, r = this.o, i = this.i, s = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
            var a = this._length - 1, n = this._length, l;
            for (l = s; l < n; l += 1) t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], r[a][0], r[a][1], l, !1), a -= 1;
            return t
        }, ShapePath.prototype.length = function () {
            return this._length
        };
        var shapePool = function () {
            function t() {
                return new ShapePath
            }

            function e(s) {
                var a = s._length, n;
                for (n = 0; n < a; n += 1) pointPool.release(s.v[n]), pointPool.release(s.i[n]), pointPool.release(s.o[n]), s.v[n] = null, s.i[n] = null, s.o[n] = null;
                s._length = 0, s.c = !1
            }

            function r(s) {
                var a = i.newElement(), n, l = s._length === void 0 ? s.v.length : s._length;
                for (a.setLength(l), a.c = s.c, n = 0; n < l; n += 1) a.setTripleAt(s.v[n][0], s.v[n][1], s.o[n][0], s.o[n][1], s.i[n][0], s.i[n][1], n);
                return a
            }

            var i = poolFactory(4, t, e);
            return i.clone = r, i
        }();

        function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }

        ShapeCollection.prototype.addShape = function (t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function () {
            var t;
            for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
            this._length = 0
        };
        var shapeCollectionPool = function () {
            var t = {newShapeCollection: s, release: a}, e = 0, r = 4, i = createSizedArray(r);

            function s() {
                var n;
                return e ? (e -= 1, n = i[e]) : n = new ShapeCollection, n
            }

            function a(n) {
                var l, o = n._length;
                for (l = 0; l < o; l += 1) shapePool.release(n.shapes[l]);
                n._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = n, e += 1
            }

            return t
        }(), ShapePropertyFactory = function () {
            var t = -999999;

            function e(p, u, c) {
                var v = c.lastIndex, _, E, T, M, I, O, V, L, R, B = this.keyframes;
                if (p < B[0].t - this.offsetTime) _ = B[0].s[0], T = !0, v = 0; else if (p >= B[B.length - 1].t - this.offsetTime) _ = B[B.length - 1].s ? B[B.length - 1].s[0] : B[B.length - 2].e[0], T = !0; else {
                    for (var k = v, C = B.length - 1, A = !0, g, P, F; A && (g = B[k], P = B[k + 1], !(P.t - this.offsetTime > p));) k < C - 1 ? k += 1 : A = !1;
                    if (F = this.keyframesMetadata[k] || {}, T = g.h === 1, v = k, !T) {
                        if (p >= P.t - this.offsetTime) L = 1; else if (p < g.t - this.offsetTime) L = 0; else {
                            var w;
                            F.__fnct ? w = F.__fnct : (w = BezierFactory.getBezierEasing(g.o.x, g.o.y, g.i.x, g.i.y).get, F.__fnct = w), L = w((p - (g.t - this.offsetTime)) / (P.t - this.offsetTime - (g.t - this.offsetTime)))
                        }
                        E = P.s ? P.s[0] : g.e[0]
                    }
                    _ = g.s[0]
                }
                for (O = u._length, V = _.i[0].length, c.lastIndex = v, M = 0; M < O; M += 1) for (I = 0; I < V; I += 1) R = T ? _.i[M][I] : _.i[M][I] + (E.i[M][I] - _.i[M][I]) * L, u.i[M][I] = R, R = T ? _.o[M][I] : _.o[M][I] + (E.o[M][I] - _.o[M][I]) * L, u.o[M][I] = R, R = T ? _.v[M][I] : _.v[M][I] + (E.v[M][I] - _.v[M][I]) * L, u.v[M][I] = R
            }

            function r() {
                var p = this.comp.renderedFrame - this.offsetTime, u = this.keyframes[0].t - this.offsetTime,
                    c = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, v = this._caching.lastFrame;
                return v !== t && (v < u && p < u || v > c && p > c) || (this._caching.lastIndex = v < p ? this._caching.lastIndex : 0, this.interpolateShape(p, this.pv, this._caching)), this._caching.lastFrame = p, this.pv
            }

            function i() {
                this.paths = this.localShapeCollection
            }

            function s(p, u) {
                if (p._length !== u._length || p.c !== u.c) return !1;
                var c, v = p._length;
                for (c = 0; c < v; c += 1) if (p.v[c][0] !== u.v[c][0] || p.v[c][1] !== u.v[c][1] || p.o[c][0] !== u.o[c][0] || p.o[c][1] !== u.o[c][1] || p.i[c][0] !== u.i[c][0] || p.i[c][1] !== u.i[c][1]) return !1;
                return !0
            }

            function a(p) {
                s(this.v, p) || (this.v = shapePool.clone(p), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function n() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (!this.effectsSequence.length) {
                        this._mdf = !1;
                        return
                    }
                    if (this.lock) {
                        this.setVValue(this.pv);
                        return
                    }
                    this.lock = !0, this._mdf = !1;
                    var p;
                    this.kf ? p = this.pv : this.data.ks ? p = this.data.ks.k : p = this.data.pt.k;
                    var u, c = this.effectsSequence.length;
                    for (u = 0; u < c; u += 1) p = this.effectsSequence[u](p);
                    this.setVValue(p), this.lock = !1, this.frameId = this.elem.globalData.frameId
                }
            }

            function l(p, u, c) {
                this.propType = "shape", this.comp = p.comp, this.container = p, this.elem = p, this.data = u, this.k = !1, this.kf = !1, this._mdf = !1;
                var v = c === 3 ? u.pt.k : u.ks.k;
                this.v = shapePool.clone(v), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
            }

            function o(p) {
                this.effectsSequence.push(p), this.container.addDynamicProperty(this)
            }

            l.prototype.interpolateShape = e, l.prototype.getValue = n, l.prototype.setVValue = a, l.prototype.addEffect = o;

            function h(p, u, c) {
                this.propType = "shape", this.comp = p.comp, this.elem = p, this.container = p, this.offsetTime = p.data.st, this.keyframes = c === 3 ? u.pt.k : u.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                var v = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, v), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                    lastFrame: t,
                    lastIndex: 0
                }, this.effectsSequence = [r.bind(this)]
            }

            h.prototype.getValue = n, h.prototype.interpolateShape = e, h.prototype.setVValue = a, h.prototype.addEffect = o;
            var m = function () {
                var p = roundCorner;

                function u(c, v) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = v.d, this.elem = c, this.comp = c.comp, this.frameId = -1, this.initDynamicPropertyContainer(c), this.p = PropertyFactory.getProp(c, v.p, 1, 0, this), this.s = PropertyFactory.getProp(c, v.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }

                return u.prototype = {
                    reset: i, getValue: function () {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                    }, convertEllToPath: function () {
                        var v = this.p.v[0], _ = this.p.v[1], E = this.s.v[0] / 2, T = this.s.v[1] / 2,
                            M = this.d !== 3, I = this.v;
                        I.v[0][0] = v, I.v[0][1] = _ - T, I.v[1][0] = M ? v + E : v - E, I.v[1][1] = _, I.v[2][0] = v, I.v[2][1] = _ + T, I.v[3][0] = M ? v - E : v + E, I.v[3][1] = _, I.i[0][0] = M ? v - E * p : v + E * p, I.i[0][1] = _ - T, I.i[1][0] = M ? v + E : v - E, I.i[1][1] = _ - T * p, I.i[2][0] = M ? v + E * p : v - E * p, I.i[2][1] = _ + T, I.i[3][0] = M ? v - E : v + E, I.i[3][1] = _ + T * p, I.o[0][0] = M ? v + E * p : v - E * p, I.o[0][1] = _ - T, I.o[1][0] = M ? v + E : v - E, I.o[1][1] = _ + T * p, I.o[2][0] = M ? v - E * p : v + E * p, I.o[2][1] = _ + T, I.o[3][0] = M ? v - E : v + E, I.o[3][1] = _ - T * p
                    }
                }, extendPrototype([DynamicPropertyContainer], u), u
            }(), S = function () {
                function p(u, c) {
                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = u, this.comp = u.comp, this.data = c, this.frameId = -1, this.d = c.d, this.initDynamicPropertyContainer(u), c.sy === 1 ? (this.ir = PropertyFactory.getProp(u, c.ir, 0, 0, this), this.is = PropertyFactory.getProp(u, c.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(u, c.pt, 0, 0, this), this.p = PropertyFactory.getProp(u, c.p, 1, 0, this), this.r = PropertyFactory.getProp(u, c.r, 0, degToRads, this), this.or = PropertyFactory.getProp(u, c.or, 0, 0, this), this.os = PropertyFactory.getProp(u, c.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }

                return p.prototype = {
                    reset: i, getValue: function () {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                    }, convertStarToPath: function () {
                        var c = Math.floor(this.pt.v) * 2, v = Math.PI * 2 / c, _ = !0, E = this.or.v, T = this.ir.v,
                            M = this.os.v, I = this.is.v, O = 2 * Math.PI * E / (c * 2), V = 2 * Math.PI * T / (c * 2),
                            L, R, B, k, C = -Math.PI / 2;
                        C += this.r.v;
                        var A = this.data.d === 3 ? -1 : 1;
                        for (this.v._length = 0, L = 0; L < c; L += 1) {
                            R = _ ? E : T, B = _ ? M : I, k = _ ? O : V;
                            var g = R * Math.cos(C), P = R * Math.sin(C),
                                F = g === 0 && P === 0 ? 0 : P / Math.sqrt(g * g + P * P),
                                w = g === 0 && P === 0 ? 0 : -g / Math.sqrt(g * g + P * P);
                            g += +this.p.v[0], P += +this.p.v[1], this.v.setTripleAt(g, P, g - F * k * B * A, P - w * k * B * A, g + F * k * B * A, P + w * k * B * A, L, !0), _ = !_, C += v * A
                        }
                    }, convertPolygonToPath: function () {
                        var c = Math.floor(this.pt.v), v = Math.PI * 2 / c, _ = this.or.v, E = this.os.v,
                            T = 2 * Math.PI * _ / (c * 4), M, I = -Math.PI * .5, O = this.data.d === 3 ? -1 : 1;
                        for (I += this.r.v, this.v._length = 0, M = 0; M < c; M += 1) {
                            var V = _ * Math.cos(I), L = _ * Math.sin(I),
                                R = V === 0 && L === 0 ? 0 : L / Math.sqrt(V * V + L * L),
                                B = V === 0 && L === 0 ? 0 : -V / Math.sqrt(V * V + L * L);
                            V += +this.p.v[0], L += +this.p.v[1], this.v.setTripleAt(V, L, V - R * T * E * O, L - B * T * E * O, V + R * T * E * O, L + B * T * E * O, M, !0), I += v * O
                        }
                        this.paths.length = 0, this.paths[0] = this.v
                    }
                }, extendPrototype([DynamicPropertyContainer], p), p
            }(), f = function () {
                function p(u, c) {
                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = u, this.comp = u.comp, this.frameId = -1, this.d = c.d, this.initDynamicPropertyContainer(u), this.p = PropertyFactory.getProp(u, c.p, 1, 0, this), this.s = PropertyFactory.getProp(u, c.s, 1, 0, this), this.r = PropertyFactory.getProp(u, c.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                }

                return p.prototype = {
                    convertRectToPath: function () {
                        var c = this.p.v[0], v = this.p.v[1], _ = this.s.v[0] / 2, E = this.s.v[1] / 2,
                            T = bmMin(_, E, this.r.v), M = T * (1 - roundCorner);
                        this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(c + _, v - E + T, c + _, v - E + T, c + _, v - E + M, 0, !0), this.v.setTripleAt(c + _, v + E - T, c + _, v + E - M, c + _, v + E - T, 1, !0), T !== 0 ? (this.v.setTripleAt(c + _ - T, v + E, c + _ - T, v + E, c + _ - M, v + E, 2, !0), this.v.setTripleAt(c - _ + T, v + E, c - _ + M, v + E, c - _ + T, v + E, 3, !0), this.v.setTripleAt(c - _, v + E - T, c - _, v + E - T, c - _, v + E - M, 4, !0), this.v.setTripleAt(c - _, v - E + T, c - _, v - E + M, c - _, v - E + T, 5, !0), this.v.setTripleAt(c - _ + T, v - E, c - _ + T, v - E, c - _ + M, v - E, 6, !0), this.v.setTripleAt(c + _ - T, v - E, c + _ - M, v - E, c + _ - T, v - E, 7, !0)) : (this.v.setTripleAt(c - _, v + E, c - _ + M, v + E, c - _, v + E, 2), this.v.setTripleAt(c - _, v - E, c - _, v - E + M, c - _, v - E, 3))) : (this.v.setTripleAt(c + _, v - E + T, c + _, v - E + M, c + _, v - E + T, 0, !0), T !== 0 ? (this.v.setTripleAt(c + _ - T, v - E, c + _ - T, v - E, c + _ - M, v - E, 1, !0), this.v.setTripleAt(c - _ + T, v - E, c - _ + M, v - E, c - _ + T, v - E, 2, !0), this.v.setTripleAt(c - _, v - E + T, c - _, v - E + T, c - _, v - E + M, 3, !0), this.v.setTripleAt(c - _, v + E - T, c - _, v + E - M, c - _, v + E - T, 4, !0), this.v.setTripleAt(c - _ + T, v + E, c - _ + T, v + E, c - _ + M, v + E, 5, !0), this.v.setTripleAt(c + _ - T, v + E, c + _ - M, v + E, c + _ - T, v + E, 6, !0), this.v.setTripleAt(c + _, v + E - T, c + _, v + E - T, c + _, v + E - M, 7, !0)) : (this.v.setTripleAt(c - _, v - E, c - _ + M, v - E, c - _, v - E, 1, !0), this.v.setTripleAt(c - _, v + E, c - _, v + E - M, c - _, v + E, 2, !0), this.v.setTripleAt(c + _, v + E, c + _ - M, v + E, c + _, v + E, 3, !0)))
                    }, getValue: function () {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                    }, reset: i
                }, extendPrototype([DynamicPropertyContainer], p), p
            }();

            function b(p, u, c) {
                var v;
                if (c === 3 || c === 4) {
                    var _ = c === 3 ? u.pt : u.ks, E = _.k;
                    E.length ? v = new h(p, u, c) : v = new l(p, u, c)
                } else c === 5 ? v = new f(p, u) : c === 6 ? v = new m(p, u) : c === 7 && (v = new S(p, u));
                return v.k && p.addDynamicProperty(v), v
            }

            function y() {
                return l
            }

            function d() {
                return h
            }

            var x = {};
            return x.getShapeProp = b, x.getConstructorFunction = y, x.getKeyframedConstructorFunction = d, x
        }();/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */
        var Matrix = function () {
            var t = Math.cos, e = Math.sin, r = Math.tan, i = Math.round;

            function s() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function a(g) {
                if (g === 0) return this;
                var P = t(g), F = e(g);
                return this._t(P, -F, 0, 0, F, P, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function n(g) {
                if (g === 0) return this;
                var P = t(g), F = e(g);
                return this._t(1, 0, 0, 0, 0, P, -F, 0, 0, F, P, 0, 0, 0, 0, 1)
            }

            function l(g) {
                if (g === 0) return this;
                var P = t(g), F = e(g);
                return this._t(P, 0, F, 0, 0, 1, 0, 0, -F, 0, P, 0, 0, 0, 0, 1)
            }

            function o(g) {
                if (g === 0) return this;
                var P = t(g), F = e(g);
                return this._t(P, -F, 0, 0, F, P, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function h(g, P) {
                return this._t(1, P, g, 1, 0, 0)
            }

            function m(g, P) {
                return this.shear(r(g), r(P))
            }

            function S(g, P) {
                var F = t(P), w = e(P);
                return this._t(F, w, 0, 0, -w, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(g), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(F, -w, 0, 0, w, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function f(g, P, F) {
                return !F && F !== 0 && (F = 1), g === 1 && P === 1 && F === 1 ? this : this._t(g, 0, 0, 0, 0, P, 0, 0, 0, 0, F, 0, 0, 0, 0, 1)
            }

            function b(g, P, F, w, D, G, N, z, j, q, U, Q, K, W, X, H) {
                return this.props[0] = g, this.props[1] = P, this.props[2] = F, this.props[3] = w, this.props[4] = D, this.props[5] = G, this.props[6] = N, this.props[7] = z, this.props[8] = j, this.props[9] = q, this.props[10] = U, this.props[11] = Q, this.props[12] = K, this.props[13] = W, this.props[14] = X, this.props[15] = H, this
            }

            function y(g, P, F) {
                return F = F || 0, g !== 0 || P !== 0 || F !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, g, P, F, 1) : this
            }

            function d(g, P, F, w, D, G, N, z, j, q, U, Q, K, W, X, H) {
                var $ = this.props;
                if (g === 1 && P === 0 && F === 0 && w === 0 && D === 0 && G === 1 && N === 0 && z === 0 && j === 0 && q === 0 && U === 1 && Q === 0) return $[12] = $[12] * g + $[15] * K, $[13] = $[13] * G + $[15] * W, $[14] = $[14] * U + $[15] * X, $[15] *= H, this._identityCalculated = !1, this;
                var et = $[0], at = $[1], rt = $[2], tt = $[3], it = $[4], st = $[5], Y = $[6], nt = $[7], ot = $[8],
                    J = $[9], lt = $[10], Z = $[11], ht = $[12], ft = $[13], pt = $[14], ct = $[15];
                return $[0] = et * g + at * D + rt * j + tt * K, $[1] = et * P + at * G + rt * q + tt * W, $[2] = et * F + at * N + rt * U + tt * X, $[3] = et * w + at * z + rt * Q + tt * H, $[4] = it * g + st * D + Y * j + nt * K, $[5] = it * P + st * G + Y * q + nt * W, $[6] = it * F + st * N + Y * U + nt * X, $[7] = it * w + st * z + Y * Q + nt * H, $[8] = ot * g + J * D + lt * j + Z * K, $[9] = ot * P + J * G + lt * q + Z * W, $[10] = ot * F + J * N + lt * U + Z * X, $[11] = ot * w + J * z + lt * Q + Z * H, $[12] = ht * g + ft * D + pt * j + ct * K, $[13] = ht * P + ft * G + pt * q + ct * W, $[14] = ht * F + ft * N + pt * U + ct * X, $[15] = ht * w + ft * z + pt * Q + ct * H, this._identityCalculated = !1, this
            }

            function x(g) {
                var P = g.props;
                return this.transform(P[0], P[1], P[2], P[3], P[4], P[5], P[6], P[7], P[8], P[9], P[10], P[11], P[12], P[13], P[14], P[15])
            }

            function p() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
            }

            function u(g) {
                for (var P = 0; P < 16;) {
                    if (g.props[P] !== this.props[P]) return !1;
                    P += 1
                }
                return !0
            }

            function c(g) {
                var P;
                for (P = 0; P < 16; P += 1) g.props[P] = this.props[P];
                return g
            }

            function v(g) {
                var P;
                for (P = 0; P < 16; P += 1) this.props[P] = g[P]
            }

            function _(g, P, F) {
                return {
                    x: g * this.props[0] + P * this.props[4] + F * this.props[8] + this.props[12],
                    y: g * this.props[1] + P * this.props[5] + F * this.props[9] + this.props[13],
                    z: g * this.props[2] + P * this.props[6] + F * this.props[10] + this.props[14]
                }
            }

            function E(g, P, F) {
                return g * this.props[0] + P * this.props[4] + F * this.props[8] + this.props[12]
            }

            function T(g, P, F) {
                return g * this.props[1] + P * this.props[5] + F * this.props[9] + this.props[13]
            }

            function M(g, P, F) {
                return g * this.props[2] + P * this.props[6] + F * this.props[10] + this.props[14]
            }

            function I() {
                var g = this.props[0] * this.props[5] - this.props[1] * this.props[4], P = this.props[5] / g,
                    F = -this.props[1] / g, w = -this.props[4] / g, D = this.props[0] / g,
                    G = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / g,
                    N = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / g, z = new Matrix;
                return z.props[0] = P, z.props[1] = F, z.props[4] = w, z.props[5] = D, z.props[12] = G, z.props[13] = N, z
            }

            function O(g) {
                var P = this.getInverseMatrix();
                return P.applyToPointArray(g[0], g[1], g[2] || 0)
            }

            function V(g) {
                var P, F = g.length, w = [];
                for (P = 0; P < F; P += 1) w[P] = O(g[P]);
                return w
            }

            function L(g, P, F) {
                var w = createTypedArray("float32", 6);
                if (this.isIdentity()) w[0] = g[0], w[1] = g[1], w[2] = P[0], w[3] = P[1], w[4] = F[0], w[5] = F[1]; else {
                    var D = this.props[0], G = this.props[1], N = this.props[4], z = this.props[5], j = this.props[12],
                        q = this.props[13];
                    w[0] = g[0] * D + g[1] * N + j, w[1] = g[0] * G + g[1] * z + q, w[2] = P[0] * D + P[1] * N + j, w[3] = P[0] * G + P[1] * z + q, w[4] = F[0] * D + F[1] * N + j, w[5] = F[0] * G + F[1] * z + q
                }
                return w
            }

            function R(g, P, F) {
                var w;
                return this.isIdentity() ? w = [g, P, F] : w = [g * this.props[0] + P * this.props[4] + F * this.props[8] + this.props[12], g * this.props[1] + P * this.props[5] + F * this.props[9] + this.props[13], g * this.props[2] + P * this.props[6] + F * this.props[10] + this.props[14]], w
            }

            function B(g, P) {
                if (this.isIdentity()) return g + "," + P;
                var F = this.props;
                return Math.round((g * F[0] + P * F[4] + F[12]) * 100) / 100 + "," + Math.round((g * F[1] + P * F[5] + F[13]) * 100) / 100
            }

            function k() {
                for (var g = 0, P = this.props, F = "matrix3d(", w = 1e4; g < 16;) F += i(P[g] * w) / w, F += g === 15 ? ")" : ",", g += 1;
                return F
            }

            function C(g) {
                var P = 1e4;
                return g < 1e-6 && g > 0 || g > -1e-6 && g < 0 ? i(g * P) / P : g
            }

            function A() {
                var g = this.props, P = C(g[0]), F = C(g[1]), w = C(g[4]), D = C(g[5]), G = C(g[12]), N = C(g[13]);
                return "matrix(" + P + "," + F + "," + w + "," + D + "," + G + "," + N + ")"
            }

            return function () {
                this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = l, this.rotateZ = o, this.skew = m, this.skewFromAxis = S, this.shear = h, this.scale = f, this.setTransform = b, this.translate = y, this.transform = d, this.multiply = x, this.applyToPoint = _, this.applyToX = E, this.applyToY = T, this.applyToZ = M, this.applyToPointArray = R, this.applyToTriplePoints = L, this.applyToPointStringified = B, this.toCSS = k, this.to2dCSS = A, this.clone = c, this.cloneFromProps = v, this.equals = u, this.inversePoints = V, this.inversePoint = O, this.getInverseMatrix = I, this._t = this.transform, this.isIdentity = p, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
        }();

        function _typeof$3(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function (r) {
                return typeof r
            } : _typeof$3 = function (r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$3(t)
        }

        var lottie = {};

        function setLocation(t) {
            setLocationHref(t)
        }

        function searchAnimations() {
            animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
            setSubframeEnabled(t)
        }

        function setPrefix(t) {
            setIdPrefix(t)
        }

        function loadAnimation(t) {
            return animationManager.loadAnimation(t)
        }

        function setQuality(t) {
            if (typeof t == "string") switch (t) {
                case"high":
                    setDefaultCurveSegments(200);
                    break;
                default:
                case"medium":
                    setDefaultCurveSegments(50);
                    break;
                case"low":
                    setDefaultCurveSegments(10);
                    break
            } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t)
        }

        function inBrowser() {
            return typeof navigator < "u"
        }

        function installPlugin(t, e) {
            t === "expressions" && setExpressionsPlugin(e)
        }

        function getFactory(t) {
            switch (t) {
                case"propertyFactory":
                    return PropertyFactory;
                case"shapePropertyFactory":
                    return ShapePropertyFactory;
                case"matrix":
                    return Matrix;
                default:
                    return null
            }
        }

        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";

        function checkReady() {
            document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
            for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
                var i = e[r].split("=");
                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
            }
            return null
        }

        var queryString = "";
        {
            var scripts = document.getElementsByTagName("script"), index = scripts.length - 1,
                myScript = scripts[index] || {src: ""};
            queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            _typeof$3(exports) !== "object" && (window.bodymovin = lottie)
        } catch (t) {
        }
        var ShapeModifiers = function () {
            var t = {}, e = {};
            t.registerModifier = r, t.getModifier = i;

            function r(s, a) {
                e[s] || (e[s] = a)
            }

            function i(s, a, n) {
                return new e[s](a, n)
            }

            return t
        }();

        function ShapeModifier() {
        }

        ShapeModifier.prototype.initModifierProperties = function () {
        }, ShapeModifier.prototype.addShapeToModifier = function () {
        }, ShapeModifier.prototype.addShape = function (t) {
            if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection()};
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
            }
        }, ShapeModifier.prototype.init = function (t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function () {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier);

        function TrimModifier() {
        }

        extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function (t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function (t) {
            t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function (t, e, r, i, s) {
            var a = [];
            e <= 1 ? a.push({s: t, e}) : t >= 1 ? a.push({s: t - 1, e: e - 1}) : (a.push({s: t, e: 1}), a.push({
                s: 0,
                e: e - 1
            }));
            var n = [], l, o = a.length, h;
            for (l = 0; l < o; l += 1) if (h = a[l], !(h.e * s < i || h.s * s > i + r)) {
                var m, S;
                h.s * s <= i ? m = 0 : m = (h.s * s - i) / r, h.e * s >= i + r ? S = 1 : S = (h.e * s - i) / r, n.push([m, S])
            }
            return n.length || n.push([0, 0]), n
        }, TrimModifier.prototype.releasePathsData = function (t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
            return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function (t) {
            var e, r;
            if (this._mdf || t) {
                var i = this.o.v % 360 / 360;
                if (i < 0 && (i += 1), this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i, this.e.v > 1 ? r = 1 + i : this.e.v < 0 ? r = 0 + i : r = this.e.v + i, e > r) {
                    var s = e;
                    e = r, r = s
                }
                e = Math.round(e * 1e4) * 1e-4, r = Math.round(r * 1e4) * 1e-4, this.sValue = e, this.eValue = r
            } else e = this.sValue, r = this.eValue;
            var a, n, l = this.shapes.length, o, h, m, S, f, b = 0;
            if (r === e) for (n = 0; n < l; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0); else if (r === 1 && e === 0 || r === 0 && e === 1) {
                if (this._mdf) for (n = 0; n < l; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
            } else {
                var y = [], d, x;
                for (n = 0; n < l; n += 1) if (d = this.shapes[n], !d.shape._mdf && !this._mdf && !t && this.m !== 2) d.shape.paths = d.localShapeCollection; else {
                    if (a = d.shape.paths, h = a._length, f = 0, !d.shape._mdf && d.pathsData.length) f = d.totalShapeLength; else {
                        for (m = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) S = bez.getSegmentsLength(a.shapes[o]), m.push(S), f += S.totalLength;
                        d.totalShapeLength = f, d.pathsData = m
                    }
                    b += f, d.shape._mdf = !0
                }
                var p = e, u = r, c = 0, v;
                for (n = l - 1; n >= 0; n -= 1) if (d = this.shapes[n], d.shape._mdf) {
                    for (x = d.localShapeCollection, x.releaseShapes(), this.m === 2 && l > 1 ? (v = this.calculateShapeEdges(e, r, d.totalShapeLength, c, b), c += d.totalShapeLength) : v = [[p, u]], h = v.length, o = 0; o < h; o += 1) {
                        p = v[o][0], u = v[o][1], y.length = 0, u <= 1 ? y.push({
                            s: d.totalShapeLength * p,
                            e: d.totalShapeLength * u
                        }) : p >= 1 ? y.push({
                            s: d.totalShapeLength * (p - 1),
                            e: d.totalShapeLength * (u - 1)
                        }) : (y.push({s: d.totalShapeLength * p, e: d.totalShapeLength}), y.push({
                            s: 0,
                            e: d.totalShapeLength * (u - 1)
                        }));
                        var _ = this.addShapes(d, y[0]);
                        if (y[0].s !== y[0].e) {
                            if (y.length > 1) {
                                var E = d.shape.paths.shapes[d.shape.paths._length - 1];
                                if (E.c) {
                                    var T = _.pop();
                                    this.addPaths(_, x), _ = this.addShapes(d, y[1], T)
                                } else this.addPaths(_, x), _ = this.addShapes(d, y[1])
                            }
                            this.addPaths(_, x)
                        }
                    }
                    d.shape.paths = x
                }
            }
        }, TrimModifier.prototype.addPaths = function (t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) e.addShape(t[r])
        }, TrimModifier.prototype.addSegment = function (t, e, r, i, s, a, n) {
            s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function (t, e, r, i) {
            e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function (t, e, r) {
            var i = t.pathsData, s = t.shape.paths.shapes, a, n = t.shape.paths._length, l, o, h = 0, m, S, f, b,
                y = [], d, x = !0;
            for (r ? (S = r._length, d = r._length) : (r = shapePool.newElement(), S = 0, d = 0), y.push(r), a = 0; a < n; a += 1) {
                for (f = i[a].lengths, r.c = s[a].c, o = s[a].c ? f.length : f.length + 1, l = 1; l < o; l += 1) if (m = f[l - 1], h + m.addedLength < e.s) h += m.addedLength, r.c = !1; else if (h > e.e) {
                    r.c = !1;
                    break
                } else e.s <= h && e.e >= h + m.addedLength ? (this.addSegment(s[a].v[l - 1], s[a].o[l - 1], s[a].i[l], s[a].v[l], r, S, x), x = !1) : (b = bez.getNewSegment(s[a].v[l - 1], s[a].v[l], s[a].o[l - 1], s[a].i[l], (e.s - h) / m.addedLength, (e.e - h) / m.addedLength, f[l - 1]), this.addSegmentFromArray(b, r, S, x), x = !1, r.c = !1), h += m.addedLength, S += 1;
                if (s[a].c && f.length) {
                    if (m = f[l - 1], h <= e.e) {
                        var p = f[l - 1].addedLength;
                        e.s <= h && e.e >= h + p ? (this.addSegment(s[a].v[l - 1], s[a].o[l - 1], s[a].i[0], s[a].v[0], r, S, x), x = !1) : (b = bez.getNewSegment(s[a].v[l - 1], s[a].v[0], s[a].o[l - 1], s[a].i[0], (e.s - h) / p, (e.e - h) / p, f[l - 1]), this.addSegmentFromArray(b, r, S, x), x = !1, r.c = !1)
                    } else r.c = !1;
                    h += m.addedLength, S += 1
                }
                if (r._length && (r.setXYAt(r.v[d][0], r.v[d][1], "i", d), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), h > e.e) break;
                a < n - 1 && (r = shapePool.newElement(), x = !0, y.push(r), S = 0)
            }
            return y
        };

        function PuckerAndBloatModifier() {
        }

        extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function (t, e) {
            var r = e / 100, i = [0, 0], s = t._length, a = 0;
            for (a = 0; a < s; a += 1) i[0] += t.v[a][0], i[1] += t.v[a][1];
            i[0] /= s, i[1] /= s;
            var n = shapePool.newElement();
            n.c = t.c;
            var l, o, h, m, S, f;
            for (a = 0; a < s; a += 1) l = t.v[a][0] + (i[0] - t.v[a][0]) * r, o = t.v[a][1] + (i[1] - t.v[a][1]) * r, h = t.o[a][0] + (i[0] - t.o[a][0]) * -r, m = t.o[a][1] + (i[1] - t.o[a][1]) * -r, S = t.i[a][0] + (i[0] - t.i[a][0]) * -r, f = t.i[a][1] + (i[1] - t.i[a][1]) * -r, n.setTripleAt(l, o, h, m, S, f, a);
            return n
        }, PuckerAndBloatModifier.prototype.processShapes = function (t) {
            var e, r, i = this.shapes.length, s, a, n = this.amount.v;
            if (n !== 0) {
                var l, o;
                for (r = 0; r < i; r += 1) {
                    if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), l.shape._mdf = !0, e = l.shape.paths.shapes, a = l.shape.paths._length, s = 0; s < a; s += 1) o.addShape(this.processPath(e[s], n));
                    l.shape.paths = l.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function () {
            var t = [0, 0];

            function e(o) {
                var h = this._mdf;
                this.iterateDynamicProperties(), this._mdf = this._mdf || h, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            }

            function r(o) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
                        var h;
                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                            var m, S;
                            if (h = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (m = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / h, 0), S = this.p.getValueAtTime(this.p.keyframes[0].t / h, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (m = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / h, 0), S = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / h, 0)) : (m = this.p.pv, S = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / h, this.p.offsetTime)); else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                m = [], S = [];
                                var f = this.px, b = this.py;
                                f._caching.lastFrame + f.offsetTime <= f.keyframes[0].t ? (m[0] = f.getValueAtTime((f.keyframes[0].t + .01) / h, 0), m[1] = b.getValueAtTime((b.keyframes[0].t + .01) / h, 0), S[0] = f.getValueAtTime(f.keyframes[0].t / h, 0), S[1] = b.getValueAtTime(b.keyframes[0].t / h, 0)) : f._caching.lastFrame + f.offsetTime >= f.keyframes[f.keyframes.length - 1].t ? (m[0] = f.getValueAtTime(f.keyframes[f.keyframes.length - 1].t / h, 0), m[1] = b.getValueAtTime(b.keyframes[b.keyframes.length - 1].t / h, 0), S[0] = f.getValueAtTime((f.keyframes[f.keyframes.length - 1].t - .01) / h, 0), S[1] = b.getValueAtTime((b.keyframes[b.keyframes.length - 1].t - .01) / h, 0)) : (m = [f.pv, b.pv], S[0] = f.getValueAtTime((f._caching.lastFrame + f.offsetTime - .01) / h, f.offsetTime), S[1] = b.getValueAtTime((b._caching.lastFrame + b.offsetTime - .01) / h, b.offsetTime))
                            } else S = t, m = S;
                            this.v.rotate(-Math.atan2(m[1] - S[1], m[0] - S[0]))
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }
                    this.frameId = this.elem.globalData.frameId
                }
            }

            function i() {
                if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1; else return;
                if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2; else return;
                if (this.sk) if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3; else return;
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
            }

            function s() {
            }

            function a(o) {
                this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0
            }

            function n(o, h, m) {
                if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = h, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(m || o), h.p && h.p.s ? (this.px = PropertyFactory.getProp(o, h.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, h.p.y, 0, 0, this), h.p.z && (this.pz = PropertyFactory.getProp(o, h.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, h.p || {k: [0, 0, 0]}, 1, 0, this), h.rx) {
                    if (this.rx = PropertyFactory.getProp(o, h.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, h.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, h.rz, 0, degToRads, this), h.or.k[0].ti) {
                        var S, f = h.or.k.length;
                        for (S = 0; S < f; S += 1) h.or.k[S].to = null, h.or.k[S].ti = null
                    }
                    this.or = PropertyFactory.getProp(o, h.or, 1, degToRads, this), this.or.sh = !0
                } else this.r = PropertyFactory.getProp(o, h.r || {k: 0}, 0, degToRads, this);
                h.sk && (this.sk = PropertyFactory.getProp(o, h.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, h.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, h.a || {k: [0, 0, 0]}, 1, 0, this), this.s = PropertyFactory.getProp(o, h.s || {k: [100, 100, 100]}, 1, .01, this), h.o ? this.o = PropertyFactory.getProp(o, h.o, 0, .01, o) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
            }

            n.prototype = {
                applyToMatrix: e,
                getValue: r,
                precalculateMatrix: i,
                autoOrient: s
            }, extendPrototype([DynamicPropertyContainer], n), n.prototype.addDynamicProperty = a, n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

            function l(o, h, m) {
                return new n(o, h, m)
            }

            return {getTransformProperty: l}
        }();

        function RepeaterModifier() {
        }

        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function (t, e, r, i, s, a) {
            var n = a ? -1 : 1, l = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
            t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / l : l, a ? 1 / o : o), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
        }, RepeaterModifier.prototype.init = function (t, e, r, i) {
            for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function (t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function (t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function (t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) t[r]._render = e, t[r].ty === "gr" && this.changeGroupRender(t[r].it, e)
        }, RepeaterModifier.prototype.processShapes = function (t) {
            var e, r, i, s, a, n = !1;
            if (this._mdf || t) {
                var l = Math.ceil(this.c.v);
                if (this._groups.length < l) {
                    for (; this._groups.length < l;) {
                        var o = {it: this.cloneElements(this._elements), ty: "gr"};
                        o.it.push({
                            a: {a: 0, ix: 1, k: [0, 0]},
                            nm: "Transform",
                            o: {a: 0, ix: 7, k: 100},
                            p: {a: 0, ix: 2, k: [0, 0]},
                            r: {a: 1, ix: 6, k: [{s: 0, e: 0, t: 0}, {s: 0, e: 0, t: 1}]},
                            s: {a: 0, ix: 3, k: [100, 100]},
                            sa: {a: 0, ix: 5, k: 0},
                            sk: {a: 0, ix: 4, k: 0},
                            ty: "tr"
                        }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1
                    }
                    this.elem.reloadShapes(), n = !0
                }
                a = 0;
                var h;
                for (i = 0; i <= this._groups.length - 1; i += 1) {
                    if (h = a < l, this._groups[i]._render = h, this.changeGroupRender(this._groups[i].it, h), !h) {
                        var m = this.elemsData[i].it, S = m[m.length - 1];
                        S.transform.op.v !== 0 ? (S.transform.op._mdf = !0, S.transform.op.v = 0) : S.transform.op._mdf = !1
                    }
                    a += 1
                }
                this._currentCopies = l;
                var f = this.o.v, b = f % 1, y = f > 0 ? Math.floor(f) : Math.ceil(f), d = this.pMatrix.props,
                    x = this.rMatrix.props, p = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var u = 0;
                if (f > 0) {
                    for (; u < y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), u += 1;
                    b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, b, !1), u += b)
                } else if (f < 0) {
                    for (; u > y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), u -= 1;
                    b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -b, !0), u -= b)
                }
                i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
                for (var c, v; a;) {
                    if (e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, v = r.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), u !== 0) {
                        for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9], x[10], x[11], x[12], x[13], x[14], x[15]), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), c = 0; c < v; c += 1) r[c] = this.matrix.props[c];
                        this.matrix.reset()
                    } else for (this.matrix.reset(), c = 0; c < v; c += 1) r[c] = this.matrix.props[c];
                    u += 1, a -= 1, i += s
                }
            } else for (a = this._currentCopies, i = 0, s = 1; a;) e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += s;
            return n
        }, RepeaterModifier.prototype.addShape = function () {
        };

        function RoundCornersModifier() {
        }

        extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function (t, e) {
            var r = shapePool.newElement();
            r.c = t.c;
            var i, s = t._length, a, n, l, o, h, m, S = 0, f, b, y, d, x, p;
            for (i = 0; i < s; i += 1) a = t.v[i], l = t.o[i], n = t.i[i], a[0] === l[0] && a[1] === l[1] && a[0] === n[0] && a[1] === n[1] ? (i === 0 || i === s - 1) && !t.c ? (r.setTripleAt(a[0], a[1], l[0], l[1], n[0], n[1], S), S += 1) : (i === 0 ? o = t.v[s - 1] : o = t.v[i - 1], h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), m = h ? Math.min(h / 2, e) / h : 0, x = a[0] + (o[0] - a[0]) * m, f = x, p = a[1] - (a[1] - o[1]) * m, b = p, y = f - (f - a[0]) * roundCorner, d = b - (b - a[1]) * roundCorner, r.setTripleAt(f, b, y, d, x, p, S), S += 1, i === s - 1 ? o = t.v[0] : o = t.v[i + 1], h = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), m = h ? Math.min(h / 2, e) / h : 0, y = a[0] + (o[0] - a[0]) * m, f = y, d = a[1] + (o[1] - a[1]) * m, b = d, x = f - (f - a[0]) * roundCorner, p = b - (b - a[1]) * roundCorner, r.setTripleAt(f, b, y, d, x, p, S), S += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], S), S += 1);
            return r
        }, RoundCornersModifier.prototype.processShapes = function (t) {
            var e, r, i = this.shapes.length, s, a, n = this.rd.v;
            if (n !== 0) {
                var l, o;
                for (r = 0; r < i; r += 1) {
                    if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), l.shape._mdf = !0, e = l.shape.paths.shapes, a = l.shape.paths._length, s = 0; s < a; s += 1) o.addShape(this.processPath(e[s], n));
                    l.shape.paths = l.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function floatEqual(t, e) {
            return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e))
        }

        function floatZero(t) {
            return Math.abs(t) <= 1e-5
        }

        function lerp(t, e, r) {
            return t * (1 - r) + e * r
        }

        function lerpPoint(t, e, r) {
            return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)]
        }

        function quadRoots(t, e, r) {
            if (t === 0) return [];
            var i = e * e - 4 * t * r;
            if (i < 0) return [];
            var s = -e / (2 * t);
            if (i === 0) return [s];
            var a = Math.sqrt(i) / (2 * t);
            return [s - a, s + a]
        }

        function polynomialCoefficients(t, e, r, i) {
            return [-t + 3 * e - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
            return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, r, i, s) {
            s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
            var a = polynomialCoefficients(t[0], e[0], r[0], i[0]), n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
            this.a = [a[0], n[0]], this.b = [a[1], n[1]], this.c = [a[2], n[2]], this.d = [a[3], n[3]], this.points = [t, e, r, i]
        }

        PolynomialBezier.prototype.point = function (t) {
            return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function (t) {
            return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function (t) {
            var e = this.derivative(t);
            return Math.atan2(e[1], e[0])
        }, PolynomialBezier.prototype.normalAngle = function (t) {
            var e = this.derivative(t);
            return Math.atan2(e[0], e[1])
        }, PolynomialBezier.prototype.inflectionPoints = function () {
            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (floatZero(t)) return [];
            var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
                r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
            if (r < 0) return [];
            var i = Math.sqrt(r);
            return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function (s) {
                return s > 0 && s < 1
            })
        }, PolynomialBezier.prototype.split = function (t) {
            if (t <= 0) return [singlePoint(this.points[0]), this];
            if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
            var e = lerpPoint(this.points[0], this.points[1], t), r = lerpPoint(this.points[1], this.points[2], t),
                i = lerpPoint(this.points[2], this.points[3], t), s = lerpPoint(e, r, t), a = lerpPoint(r, i, t),
                n = lerpPoint(s, a, t);
            return [new PolynomialBezier(this.points[0], e, s, n, !0), new PolynomialBezier(n, a, i, this.points[3], !0)]
        };

        function extrema(t, e) {
            var r = t.points[0][e], i = t.points[t.points.length - 1][e];
            if (r > i) {
                var s = i;
                i = r, r = s
            }
            for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1) if (a[n] > 0 && a[n] < 1) {
                var l = t.point(a[n])[e];
                l < r ? r = l : l > i && (i = l)
            }
            return {min: r, max: i}
        }

        PolynomialBezier.prototype.bounds = function () {
            return {x: extrema(this, 0), y: extrema(this, 1)}
        }, PolynomialBezier.prototype.boundingBox = function () {
            var t = this.bounds();
            return {
                left: t.x.min,
                right: t.x.max,
                top: t.y.min,
                bottom: t.y.max,
                width: t.x.max - t.x.min,
                height: t.y.max - t.y.min,
                cx: (t.x.max + t.x.min) / 2,
                cy: (t.y.max + t.y.min) / 2
            }
        };

        function intersectData(t, e, r) {
            var i = t.boundingBox();
            return {cx: i.cx, cy: i.cy, width: i.width, height: i.height, bez: t, t: (e + r) / 2, t1: e, t2: r}
        }

        function splitData(t) {
            var e = t.bez.split(.5);
            return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect(t, e) {
            return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height
        }

        function intersectsImpl(t, e, r, i, s, a) {
            if (boxIntersect(t, e)) {
                if (r >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
                    s.push([t.t, e.t]);
                    return
                }
                var n = splitData(t), l = splitData(e);
                intersectsImpl(n[0], l[0], r + 1, i, s, a), intersectsImpl(n[0], l[1], r + 1, i, s, a), intersectsImpl(n[1], l[0], r + 1, i, s, a), intersectsImpl(n[1], l[1], r + 1, i, s, a)
            }
        }

        PolynomialBezier.prototype.intersections = function (t, e, r) {
            e === void 0 && (e = 2), r === void 0 && (r = 7);
            var i = [];
            return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i
        }, PolynomialBezier.shapeSegment = function (t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0)
        }, PolynomialBezier.shapeSegmentInverted = function (t, e) {
            var r = (e + 1) % t.length();
            return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0)
        };

        function crossProduct(t, e) {
            return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, r, i) {
            var s = [t[0], t[1], 1], a = [e[0], e[1], 1], n = [r[0], r[1], 1], l = [i[0], i[1], 1],
                o = crossProduct(crossProduct(s, a), crossProduct(n, l));
            return floatZero(o[2]) ? null : [o[0] / o[2], o[1] / o[2]]
        }

        function polarOffset(t, e, r) {
            return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r]
        }

        function pointDistance(t, e) {
            return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual(t, e) {
            return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier() {
        }

        extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
        };

        function setPoint(t, e, r, i, s, a, n) {
            var l = r - Math.PI / 2, o = r + Math.PI / 2, h = e[0] + Math.cos(r) * i * s,
                m = e[1] - Math.sin(r) * i * s;
            t.setTripleAt(h, m, h + Math.cos(l) * a, m - Math.sin(l) * a, h + Math.cos(o) * n, m - Math.sin(o) * n, t.length())
        }

        function getPerpendicularVector(t, e) {
            var r = [e[0] - t[0], e[1] - t[1]], i = -Math.PI * .5,
                s = [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
            return s
        }

        function getProjectingAngle(t, e) {
            var r = e === 0 ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), s = t.v[r], a = t.v[i],
                n = getPerpendicularVector(s, a);
            return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
        }

        function zigZagCorner(t, e, r, i, s, a, n) {
            var l = getProjectingAngle(e, r), o = e.v[r % e._length], h = e.v[r === 0 ? e._length - 1 : r - 1],
                m = e.v[(r + 1) % e._length],
                S = a === 2 ? Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)) : 0,
                f = a === 2 ? Math.sqrt(Math.pow(o[0] - m[0], 2) + Math.pow(o[1] - m[1], 2)) : 0;
            setPoint(t, e.v[r % e._length], l, n, i, f / ((s + 1) * 2), S / ((s + 1) * 2))
        }

        function zigZagSegment(t, e, r, i, s, a) {
            for (var n = 0; n < i; n += 1) {
                var l = (n + 1) / (i + 1),
                    o = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                    h = e.normalAngle(l), m = e.point(l);
                setPoint(t, m, h, a, r, o / ((i + 1) * 2), o / ((i + 1) * 2)), a = -a
            }
            return a
        }

        ZigZagModifier.prototype.processPath = function (t, e, r, i) {
            var s = t._length, a = shapePool.newElement();
            if (a.c = t.c, t.c || (s -= 1), s === 0) return a;
            var n = -1, l = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(a, t, 0, e, r, i, n);
            for (var o = 0; o < s; o += 1) n = zigZagSegment(a, l, e, r, i, -n), o === s - 1 && !t.c ? l = null : l = PolynomialBezier.shapeSegment(t, (o + 1) % s), zigZagCorner(a, t, o + 1, e, r, i, n);
            return a
        }, ZigZagModifier.prototype.processShapes = function (t) {
            var e, r, i = this.shapes.length, s, a, n = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)),
                o = this.pointsType.v;
            if (n !== 0) {
                var h, m;
                for (r = 0; r < i; r += 1) {
                    if (h = this.shapes[r], m = h.localShapeCollection, !(!h.shape._mdf && !this._mdf && !t)) for (m.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, a = h.shape.paths._length, s = 0; s < a; s += 1) m.addShape(this.processPath(e[s], n, l, o));
                    h.shape.paths = h.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function linearOffset(t, e, r) {
            var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
            return [polarOffset(t, i, r), polarOffset(e, i, r)]
        }

        function offsetSegment(t, e) {
            var r, i, s, a, n, l, o;
            o = linearOffset(t.points[0], t.points[1], e), r = o[0], i = o[1], o = linearOffset(t.points[1], t.points[2], e), s = o[0], a = o[1], o = linearOffset(t.points[2], t.points[3], e), n = o[0], l = o[1];
            var h = lineIntersection(r, i, s, a);
            h === null && (h = i);
            var m = lineIntersection(n, l, s, a);
            return m === null && (m = n), new PolynomialBezier(r, h, m, l)
        }

        function joinLines(t, e, r, i, s) {
            var a = e.points[3], n = r.points[0];
            if (i === 3 || pointEqual(a, n)) return a;
            if (i === 2) {
                var l = -e.tangentAngle(1), o = -r.tangentAngle(0) + Math.PI,
                    h = lineIntersection(a, polarOffset(a, l + Math.PI / 2, 100), n, polarOffset(n, l + Math.PI / 2, 100)),
                    m = h ? pointDistance(h, a) : pointDistance(a, n) / 2, S = polarOffset(a, l, 2 * m * roundCorner);
                return t.setXYAt(S[0], S[1], "o", t.length() - 1), S = polarOffset(n, o, 2 * m * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], S[0], S[1], t.length()), n
            }
            var f = pointEqual(a, e.points[2]) ? e.points[0] : e.points[2],
                b = pointEqual(n, r.points[1]) ? r.points[3] : r.points[1], y = lineIntersection(f, a, n, b);
            return y && pointDistance(y, a) < s ? (t.setTripleAt(y[0], y[1], y[0], y[1], y[0], y[1], t.length()), y) : a
        }

        function getIntersection(t, e) {
            var r = t.intersections(e);
            return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
        }

        function pruneSegmentIntersection(t, e) {
            var r = t.slice(), i = e.slice(), s = getIntersection(t[t.length - 1], e[0]);
            return s && (r[t.length - 1] = t[t.length - 1].split(s[0])[0], i[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1]), s) ? [[t[0].split(s[0])[0]], [e[e.length - 1].split(s[1])[1]]] : [r, i]
        }

        function pruneIntersections(t) {
            for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
            return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
            var r = t.inflectionPoints(), i, s, a, n;
            if (r.length === 0) return [offsetSegment(t, e)];
            if (r.length === 1 || floatEqual(r[1], 1)) return a = t.split(r[0]), i = a[0], s = a[1], [offsetSegment(i, e), offsetSegment(s, e)];
            a = t.split(r[0]), i = a[0];
            var l = (r[1] - r[0]) / (1 - r[0]);
            return a = a[1].split(l), n = a[0], s = a[1], [offsetSegment(i, e), offsetSegment(n, e), offsetSegment(s, e)]
        }

        function OffsetPathModifier() {
        }

        extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function (t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
        }, OffsetPathModifier.prototype.processPath = function (t, e, r, i) {
            var s = shapePool.newElement();
            s.c = t.c;
            var a = t.length();
            t.c || (a -= 1);
            var n, l, o, h = [];
            for (n = 0; n < a; n += 1) o = PolynomialBezier.shapeSegment(t, n), h.push(offsetSegmentSplit(o, e));
            if (!t.c) for (n = a - 1; n >= 0; n -= 1) o = PolynomialBezier.shapeSegmentInverted(t, n), h.push(offsetSegmentSplit(o, e));
            h = pruneIntersections(h);
            var m = null, S = null;
            for (n = 0; n < h.length; n += 1) {
                var f = h[n];
                for (S && (m = joinLines(s, S, f[0], r, i)), S = f[f.length - 1], l = 0; l < f.length; l += 1) o = f[l], m && pointEqual(o.points[0], m) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), m = o.points[3]
            }
            return h.length && joinLines(s, S, h[0][0], r, i), s
        }, OffsetPathModifier.prototype.processShapes = function (t) {
            var e, r, i = this.shapes.length, s, a, n = this.amount.v, l = this.miterLimit.v, o = this.lineJoin;
            if (n !== 0) {
                var h, m;
                for (r = 0; r < i; r += 1) {
                    if (h = this.shapes[r], m = h.localShapeCollection, !(!h.shape._mdf && !this._mdf && !t)) for (m.releaseShapes(), h.shape._mdf = !0, e = h.shape.paths.shapes, a = h.shape.paths._length, s = 0; s < a; s += 1) m.addShape(this.processPath(e[s], n, o, l));
                    h.shape.paths = h.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        };

        function getFontProperties(t) {
            for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, a, n = 0; n < s; n += 1) switch (a = e[n].toLowerCase(), a) {
                case"italic":
                    i = "italic";
                    break;
                case"bold":
                    r = "700";
                    break;
                case"black":
                    r = "900";
                    break;
                case"medium":
                    r = "500";
                    break;
                case"regular":
                case"normal":
                    r = "400";
                    break;
                case"light":
                case"thin":
                    r = "200";
                    break
            }
            return {style: i, weight: t.fWeight || r}
        }

        var FontManager = function () {
            var t = 5e3, e = {w: 0, size: 0, shapes: [], data: {shapes: []}}, r = [];
            r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var i = 127988, s = 917631, a = 917601, n = 917626, l = 65039, o = 8205, h = 127462, m = 127487,
                S = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

            function f(C) {
                var A = C.split(","), g, P = A.length, F = [];
                for (g = 0; g < P; g += 1) A[g] !== "sans-serif" && A[g] !== "monospace" && F.push(A[g]);
                return F.join(",")
            }

            function b(C, A) {
                var g = createTag("span");
                g.setAttribute("aria-hidden", !0), g.style.fontFamily = A;
                var P = createTag("span");
                P.innerText = "giItT1WQy@!-/#", g.style.position = "absolute", g.style.left = "-10000px", g.style.top = "-10000px", g.style.fontSize = "300px", g.style.fontVariant = "normal", g.style.fontStyle = "normal", g.style.fontWeight = "normal", g.style.letterSpacing = "0", g.appendChild(P), document.body.appendChild(g);
                var F = P.offsetWidth;
                return P.style.fontFamily = f(C) + ", " + A, {node: P, w: F, parent: g}
            }

            function y() {
                var C, A = this.fonts.length, g, P, F = A;
                for (C = 0; C < A; C += 1) this.fonts[C].loaded ? F -= 1 : this.fonts[C].fOrigin === "n" || this.fonts[C].origin === 0 ? this.fonts[C].loaded = !0 : (g = this.fonts[C].monoCase.node, P = this.fonts[C].monoCase.w, g.offsetWidth !== P ? (F -= 1, this.fonts[C].loaded = !0) : (g = this.fonts[C].sansCase.node, P = this.fonts[C].sansCase.w, g.offsetWidth !== P && (F -= 1, this.fonts[C].loaded = !0)), this.fonts[C].loaded && (this.fonts[C].sansCase.parent.parentNode.removeChild(this.fonts[C].sansCase.parent), this.fonts[C].monoCase.parent.parentNode.removeChild(this.fonts[C].monoCase.parent)));
                F !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            }

            function d(C, A) {
                var g = document.body && A ? "svg" : "canvas", P, F = getFontProperties(C);
                if (g === "svg") {
                    var w = createNS("text");
                    w.style.fontSize = "100px", w.setAttribute("font-family", C.fFamily), w.setAttribute("font-style", F.style), w.setAttribute("font-weight", F.weight), w.textContent = "1", C.fClass ? (w.style.fontFamily = "inherit", w.setAttribute("class", C.fClass)) : w.style.fontFamily = C.fFamily, A.appendChild(w), P = w
                } else {
                    var D = new OffscreenCanvas(500, 500).getContext("2d");
                    D.font = F.style + " " + F.weight + " 100px " + C.fFamily, P = D
                }

                function G(N) {
                    return g === "svg" ? (P.textContent = N, P.getComputedTextLength()) : P.measureText(N).width
                }

                return {measureText: G}
            }

            function x(C, A) {
                if (!C) {
                    this.isLoaded = !0;
                    return
                }
                if (this.chars) {
                    this.isLoaded = !0, this.fonts = C.list;
                    return
                }
                if (!document.body) {
                    this.isLoaded = !0, C.list.forEach(function (U) {
                        U.helper = d(U), U.cache = {}
                    }), this.fonts = C.list;
                    return
                }
                var g = C.list, P, F = g.length, w = F;
                for (P = 0; P < F; P += 1) {
                    var D = !0, G, N;
                    if (g[P].loaded = !1, g[P].monoCase = b(g[P].fFamily, "monospace"), g[P].sansCase = b(g[P].fFamily, "sans-serif"), !g[P].fPath) g[P].loaded = !0, w -= 1; else if (g[P].fOrigin === "p" || g[P].origin === 3) {
                        if (G = document.querySelectorAll('style[f-forigin="p"][f-family="' + g[P].fFamily + '"], style[f-origin="3"][f-family="' + g[P].fFamily + '"]'), G.length > 0 && (D = !1), D) {
                            var z = createTag("style");
                            z.setAttribute("f-forigin", g[P].fOrigin), z.setAttribute("f-origin", g[P].origin), z.setAttribute("f-family", g[P].fFamily), z.type = "text/css", z.innerText = "@font-face {font-family: " + g[P].fFamily + "; font-style: normal; src: url('" + g[P].fPath + "');}", A.appendChild(z)
                        }
                    } else if (g[P].fOrigin === "g" || g[P].origin === 1) {
                        for (G = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), N = 0; N < G.length; N += 1) G[N].href.indexOf(g[P].fPath) !== -1 && (D = !1);
                        if (D) {
                            var j = createTag("link");
                            j.setAttribute("f-forigin", g[P].fOrigin), j.setAttribute("f-origin", g[P].origin), j.type = "text/css", j.rel = "stylesheet", j.href = g[P].fPath, document.body.appendChild(j)
                        }
                    } else if (g[P].fOrigin === "t" || g[P].origin === 2) {
                        for (G = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), N = 0; N < G.length; N += 1) g[P].fPath === G[N].src && (D = !1);
                        if (D) {
                            var q = createTag("link");
                            q.setAttribute("f-forigin", g[P].fOrigin), q.setAttribute("f-origin", g[P].origin), q.setAttribute("rel", "stylesheet"), q.setAttribute("href", g[P].fPath), A.appendChild(q)
                        }
                    }
                    g[P].helper = d(g[P], A), g[P].cache = {}, this.fonts.push(g[P])
                }
                w === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
            }

            function p(C) {
                if (C) {
                    this.chars || (this.chars = []);
                    var A, g = C.length, P, F = this.chars.length, w;
                    for (A = 0; A < g; A += 1) {
                        for (P = 0, w = !1; P < F;) this.chars[P].style === C[A].style && this.chars[P].fFamily === C[A].fFamily && this.chars[P].ch === C[A].ch && (w = !0), P += 1;
                        w || (this.chars.push(C[A]), F += 1)
                    }
                }
            }

            function u(C, A, g) {
                for (var P = 0, F = this.chars.length; P < F;) {
                    if (this.chars[P].ch === C && this.chars[P].style === A && this.chars[P].fFamily === g) return this.chars[P];
                    P += 1
                }
                return (typeof C == "string" && C.charCodeAt(0) !== 13 || !C) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", C, A, g)), e
            }

            function c(C, A, g) {
                var P = this.getFontByName(A), F = C;
                if (!P.cache[F]) {
                    var w = P.helper;
                    if (C === " ") {
                        var D = w.measureText("|" + C + "|"), G = w.measureText("||");
                        P.cache[F] = (D - G) / 100
                    } else P.cache[F] = w.measureText(C) / 100
                }
                return P.cache[F] * g
            }

            function v(C) {
                for (var A = 0, g = this.fonts.length; A < g;) {
                    if (this.fonts[A].fName === C) return this.fonts[A];
                    A += 1
                }
                return this.fonts[0]
            }

            function _(C) {
                var A = 0, g = C.charCodeAt(0);
                if (g >= 55296 && g <= 56319) {
                    var P = C.charCodeAt(1);
                    P >= 56320 && P <= 57343 && (A = (g - 55296) * 1024 + P - 56320 + 65536)
                }
                return A
            }

            function E(C, A) {
                var g = C.toString(16) + A.toString(16);
                return S.indexOf(g) !== -1
            }

            function T(C) {
                return C === o
            }

            function M(C) {
                return C === l
            }

            function I(C) {
                var A = _(C);
                return A >= h && A <= m
            }

            function O(C) {
                return I(C.substr(0, 2)) && I(C.substr(2, 2))
            }

            function V(C) {
                return r.indexOf(C) !== -1
            }

            function L(C, A) {
                var g = _(C.substr(A, 2));
                if (g !== i) return !1;
                var P = 0;
                for (A += 2; P < 5;) {
                    if (g = _(C.substr(A, 2)), g < a || g > n) return !1;
                    P += 1, A += 2
                }
                return _(C.substr(A, 2)) === s
            }

            function R() {
                this.isLoaded = !0
            }

            var B = function () {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
            };
            B.isModifier = E, B.isZeroWidthJoiner = T, B.isFlagEmoji = O, B.isRegionalCode = I, B.isCombinedCharacter = V, B.isRegionalFlag = L, B.isVariationSelector = M, B.BLACK_FLAG_CODE_POINT = i;
            var k = {
                addChars: p,
                addFonts: x,
                getCharData: u,
                getFontByName: v,
                measureText: c,
                checkLoadedFonts: y,
                setIsLoaded: R
            };
            return B.prototype = k, B
        }();

        function SlotManager(t) {
            this.animationData = t
        }

        SlotManager.prototype.getProp = function (t) {
            return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
        };

        function slotFactory(t) {
            return new SlotManager(t)
        }

        function RenderableElement() {
        }

        RenderableElement.prototype = {
            initRenderable: function () {
                this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
            }, addRenderableComponent: function (e) {
                this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e)
            }, removeRenderableComponent: function (e) {
                this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
            }, prepareRenderableFrame: function (e) {
                this.checkLayerLimits(e)
            }, checkTransparency: function () {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
            }, checkLayerLimits: function (e) {
                this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
            }, renderRenderable: function () {
                var e, r = this.renderableComponents.length;
                for (e = 0; e < r; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
            }, sourceRectAtTime: function () {
                return {top: 0, left: 0, width: 100, height: 100}
            }, getLayerSize: function () {
                return this.data.ty === 5 ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {w: this.data.width, h: this.data.height}
            }
        };
        var getBlendMode = function () {
            var t = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            };
            return function (e) {
                return t[e] || ""
            }
        }();

        function SliderEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function AngleEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function ColorEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function PointEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function LayerIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function MaskIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function CheckboxEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function NoValueEffect() {
            this.p = {}
        }

        function EffectsManager(t, e) {
            var r = t.ef || [];
            this.effectElements = [];
            var i, s = r.length, a;
            for (i = 0; i < s; i += 1) a = new GroupEffect(r[i], e), this.effectElements.push(a)
        }

        function GroupEffect(t, e) {
            this.init(t, e)
        }

        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function (t, e) {
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var r, i = this.data.ef.length, s, a = this.data.ef;
            for (r = 0; r < i; r += 1) {
                switch (s = null, a[r].ty) {
                    case 0:
                        s = new SliderEffect(a[r], e, this);
                        break;
                    case 1:
                        s = new AngleEffect(a[r], e, this);
                        break;
                    case 2:
                        s = new ColorEffect(a[r], e, this);
                        break;
                    case 3:
                        s = new PointEffect(a[r], e, this);
                        break;
                    case 4:
                    case 7:
                        s = new CheckboxEffect(a[r], e, this);
                        break;
                    case 10:
                        s = new LayerIndexEffect(a[r], e, this);
                        break;
                    case 11:
                        s = new MaskIndexEffect(a[r], e, this);
                        break;
                    case 5:
                        s = new EffectsManager(a[r], e);
                        break;
                    default:
                        s = new NoValueEffect(a[r]);
                        break
                }
                s && this.effectElements.push(s)
            }
        };

        function BaseElement() {
        }

        BaseElement.prototype = {
            checkMasks: function () {
                if (!this.data.hasMask) return !1;
                for (var e = 0, r = this.data.masksProperties.length; e < r;) {
                    if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1) return !0;
                    e += 1
                }
                return !1
            }, initExpressions: function () {
                var e = getExpressionInterfaces();
                if (e) {
                    var r = e("layer"), i = e("effects"), s = e("shape"), a = e("text"), n = e("comp");
                    this.layerInterface = r(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var l = i.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(l), this.data.ty === 0 || this.data.xt ? this.compInterface = n(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface)
                }
            }, setBlendMode: function () {
                var e = getBlendMode(this.data.bm), r = this.baseElement || this.layerElement;
                r.style["mix-blend-mode"] = e
            }, initBaseData: function (e, r, i) {
                this.globalData = r, this.comp = i, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
            }, getType: function () {
                return this.type
            }, sourceRectAtTime: function () {
            }
        };

        function FrameElement() {
        }

        FrameElement.prototype = {
            initFrame: function () {
                this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
            }, prepareProperties: function (e, r) {
                var i, s = this.dynamicProperties.length;
                for (i = 0; i < s; i += 1) (r || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
            }, addDynamicProperty: function (e) {
                this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e)
            }
        };

        function FootageElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
        }

        FootageElement.prototype.prepareFrame = function () {
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function () {
            return null
        }, FootageElement.prototype.renderFrame = function () {
        }, FootageElement.prototype.destroy = function () {
        }, FootageElement.prototype.initExpressions = function () {
            var t = getExpressionInterfaces();
            if (t) {
                var e = t("footage");
                this.layerInterface = e(this)
            }
        }, FootageElement.prototype.getFootageData = function () {
            return this.footageData
        };

        function AudioElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
            var i = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0}, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {k: [100]}, 1, .01, this)
        }

        AudioElement.prototype.prepareFrame = function (t) {
            if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr; else {
                var e = this.tm.v;
                this._currentTime = e
            }
            this._volume = this.lv.v[0];
            var r = this._volume * this._volumeMultiplier;
            this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function () {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function () {
        }, AudioElement.prototype.hide = function () {
            this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function () {
            this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function () {
            this._canPlay = !0
        }, AudioElement.prototype.setRate = function (t) {
            this.audio.rate(t)
        }, AudioElement.prototype.volume = function (t) {
            this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function () {
            return null
        }, AudioElement.prototype.destroy = function () {
        }, AudioElement.prototype.sourceRectAtTime = function () {
        }, AudioElement.prototype.initExpressions = function () {
        };

        function BaseRenderer() {
        }

        BaseRenderer.prototype.checkLayers = function (t) {
            var e, r = this.layers.length, i;
            for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
            this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function (t) {
            switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t)
            }
        }, BaseRenderer.prototype.createCamera = function () {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function (t) {
            return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function (t) {
            return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function () {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function (t) {
            this.completeLayers = !1;
            var e, r = t.length, i, s = this.layers.length;
            for (e = 0; e < r; e += 1) for (i = 0; i < s;) {
                if (this.layers[i].id === t[e].id) {
                    this.layers[i] = t[e];
                    break
                }
                i += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function (t) {
            this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function () {
            this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
            for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n;) s[a].ind == e && (!i[a] || i[a] === !0 ? (this.buildItem(a), this.addPendingElement(t)) : (r.push(i[a]), i[a].setAsParent(), s[a].parent !== void 0 ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function (t) {
            this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function (t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) if (t[e].xt) {
                var i = this.createComp(t[e]);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
        }, BaseRenderer.prototype.getElementById = function (t) {
            var e, r = this.elements.length;
            for (e = 0; e < r; e += 1) if (this.elements[e].data.ind === t) return this.elements[e];
            return null
        }, BaseRenderer.prototype.getElementByPath = function (t) {
            var e = t.shift(), r;
            if (typeof e == "number") r = this.elements[e]; else {
                var i, s = this.elements.length;
                for (i = 0; i < s; i += 1) if (this.elements[i].data.nm === e) {
                    r = this.elements[i];
                    break
                }
            }
            return t.length === 0 ? r : r.getElementByPath(t)
        }, BaseRenderer.prototype.setupGlobalData = function (t, e) {
            this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                w: t.w,
                h: t.h
            }
        };
        var effectTypes = {TRANSFORM_EFFECT: "transformEFfect"};

        function TransformElement() {
        }

        TransformElement.prototype = {
            initTransform: function () {
                var e = new Matrix;
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {o: 0},
                    _matMdf: !1,
                    _localMatMdf: !1,
                    _opMdf: !1,
                    mat: e,
                    localMat: e,
                    localOpacity: 1
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
            }, renderTransform: function () {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                    var e, r = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
                    if (!this.finalTransform._matMdf) for (; i < s;) {
                        if (this.hierarchy[i].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break
                        }
                        i += 1
                    }
                    if (this.finalTransform._matMdf) for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), i = 0; i < s; i += 1) r.multiply(this.hierarchy[i].finalTransform.mProp.v)
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
            }, renderLocalTransform: function () {
                if (this.localTransforms) {
                    var e = 0, r = this.localTransforms.length;
                    if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for (; e < r;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
                    if (this.finalTransform._localMatMdf) {
                        var i = this.finalTransform.localMat;
                        for (this.localTransforms[0].matrix.clone(i), e = 1; e < r; e += 1) {
                            var s = this.localTransforms[e].matrix;
                            i.multiply(s)
                        }
                        i.multiply(this.finalTransform.mat)
                    }
                    if (this.finalTransform._opMdf) {
                        var a = this.finalTransform.localOpacity;
                        for (e = 0; e < r; e += 1) a *= this.localTransforms[e].opacity * .01;
                        this.finalTransform.localOpacity = a
                    }
                }
            }, searchEffectTransforms: function () {
                if (this.renderableEffectsManager) {
                    var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                    if (e.length) {
                        this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                        var r = 0, i = e.length;
                        for (r = 0; r < i; r += 1) this.localTransforms.push(e[r])
                    }
                }
            }, globalToLocal: function (e) {
                var r = [];
                r.push(this.finalTransform);
                for (var i = !0, s = this.comp; i;) s.finalTransform ? (s.data.hasMask && r.splice(0, 0, s.finalTransform), s = s.comp) : i = !1;
                var a, n = r.length, l;
                for (a = 0; a < n; a += 1) l = r[a].mat.applyToPointArray(0, 0, 0), e = [e[0] - l[0], e[1] - l[1], 0];
                return e
            }, mHelper: new Matrix
        };

        function MaskElement(t, e, r) {
            this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i = this.globalData.defs, s, a = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(a), this.solidPath = "";
            var n, l = this.masksProperties, o = 0, h = [], m, S, f = createElementID(), b, y, d, x, p = "clipPath",
                u = "clip-path";
            for (s = 0; s < a; s += 1) if ((l[s].mode !== "a" && l[s].mode !== "n" || l[s].inv || l[s].o.k !== 100 || l[s].o.x) && (p = "mask", u = "mask"), (l[s].mode === "s" || l[s].mode === "i") && o === 0 ? (b = createNS("rect"), b.setAttribute("fill", "#ffffff"), b.setAttribute("width", this.element.comp.data.w || 0), b.setAttribute("height", this.element.comp.data.h || 0), h.push(b)) : b = null, n = createNS("path"), l[s].mode === "n") this.viewData[s] = {
                op: PropertyFactory.getProp(this.element, l[s].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
                elem: n,
                lastPath: ""
            }, i.appendChild(n); else {
                o += 1, n.setAttribute("fill", l[s].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
                var c;
                if (l[s].x.k !== 0 ? (p = "mask", u = "mask", x = PropertyFactory.getProp(this.element, l[s].x, 0, null, this.element), c = createElementID(), y = createNS("filter"), y.setAttribute("id", c), d = createNS("feMorphology"), d.setAttribute("operator", "erode"), d.setAttribute("in", "SourceGraphic"), d.setAttribute("radius", "0"), y.appendChild(d), i.appendChild(y), n.setAttribute("stroke", l[s].mode === "s" ? "#000000" : "#ffffff")) : (d = null, x = null), this.storedData[s] = {
                    elem: n,
                    x,
                    expan: d,
                    lastPath: "",
                    lastOperator: "",
                    filterId: c,
                    lastRadius: 0
                }, l[s].mode === "i") {
                    S = h.length;
                    var v = createNS("g");
                    for (m = 0; m < S; m += 1) v.appendChild(h[m]);
                    var _ = createNS("mask");
                    _.setAttribute("mask-type", "alpha"), _.setAttribute("id", f + "_" + o), _.appendChild(n), i.appendChild(_), v.setAttribute("mask", "url(" + getLocationHref() + "#" + f + "_" + o + ")"), h.length = 0, h.push(v)
                } else h.push(n);
                l[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
                    elem: n,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, l[s].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
                    invRect: b
                }, this.viewData[s].prop.k || this.drawPath(l[s], this.viewData[s].prop.v, this.viewData[s])
            }
            for (this.maskElement = createNS(p), a = h.length, s = 0; s < a; s += 1) this.maskElement.appendChild(h[s]);
            o > 0 && (this.maskElement.setAttribute("id", f), this.element.maskedElement.setAttribute(u, "url(" + getLocationHref() + "#" + f + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }

        MaskElement.prototype.getMaskProperty = function (t) {
            return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function (t) {
            var e = this.element.finalTransform.mat, r, i = this.masksProperties.length;
            for (r = 0; r < i; r += 1) if ((this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || t))) {
                var s = this.storedData[r].expan;
                this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), s.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2))
            }
        }, MaskElement.prototype.getMaskelement = function () {
            return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function () {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t
        }, MaskElement.prototype.drawPath = function (t, e, r) {
            var i = " M" + e.v[0][0] + "," + e.v[0][1], s, a;
            for (a = e._length, s = 1; s < a; s += 1) i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
            if (e.c && a > 1 && (i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== i) {
                var n = "";
                r.elem && (e.c && (n = t.inv ? this.solidPath + i : i), r.elem.setAttribute("d", n)), r.lastPath = i
            }
        }, MaskElement.prototype.destroy = function () {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = function () {
            var t = {};
            t.createFilter = e, t.createAlphaToLuminanceFilter = r;

            function e(i, s) {
                var a = createNS("filter");
                return a.setAttribute("id", i), s !== !0 && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a
            }

            function r() {
                var i = createNS("feColorMatrix");
                return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i
            }

            return t
        }(), featureSupport = function () {
            var t = {maskType: !0, svgLumaHidden: !0, offscreenCanvas: typeof OffscreenCanvas < "u"};
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
        }(), registeredEffects$1 = {}, idPrefix = "filter_result_";

        function SVGEffects(t) {
            var e, r = "SourceGraphic", i = t.data.ef ? t.data.ef.length : 0, s = createElementID(),
                a = filtersFactory.createFilter(s, !0), n = 0;
            this.filters = [];
            var l;
            for (e = 0; e < i; e += 1) {
                l = null;
                var o = t.data.ef[e].ty;
                if (registeredEffects$1[o]) {
                    var h = registeredEffects$1[o].effect;
                    l = new h(a, t.effectsManager.effectElements[e], t, idPrefix + n, r), r = idPrefix + n, registeredEffects$1[o].countsAsEffect && (n += 1)
                }
                l && this.filters.push(l)
            }
            n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        SVGEffects.prototype.renderFrame = function (t) {
            var e, r = this.filters.length;
            for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, SVGEffects.prototype.getEffects = function (t) {
            var e, r = this.filters.length, i = [];
            for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
            return i
        };

        function registerEffect$1(t, e, r) {
            registeredEffects$1[t] = {effect: e, countsAsEffect: r}
        }

        function SVGBaseElement() {
        }

        SVGBaseElement.prototype = {
            initRendererElement: function () {
                this.layerElement = createNS("g")
            }, createContainerElements: function () {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                var e = null;
                if (this.data.td) {
                    this.matteMasks = {};
                    var r = createNS("g");
                    r.setAttribute("id", this.layerId), r.appendChild(this.layerElement), e = r, this.globalData.defs.appendChild(r)
                } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                    var i = createNS("clipPath"), s = createNS("path");
                    s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var a = createElementID();
                    if (i.setAttribute("id", a), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
                        var n = createNS("g");
                        n.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), n.appendChild(this.layerElement), this.transformedElement = n, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")")
                }
                this.data.bm !== 0 && this.setBlendMode()
            }, renderElement: function () {
                this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
            }, destroyBaseElement: function () {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
            }, getBaseElement: function () {
                return this.data.hd ? null : this.baseElement
            }, createRenderableComponents: function () {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
            }, getMatte: function (e) {
                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
                    var r = this.layerId + "_" + e, i, s, a, n;
                    if (e === 1 || e === 3) {
                        var l = createNS("mask");
                        l.setAttribute("id", r), l.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(a), this.globalData.defs.appendChild(l), !featureSupport.maskType && e === 1 && (l.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), n.appendChild(a), l.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"))
                    } else if (e === 2) {
                        var o = createNS("mask");
                        o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
                        var h = createNS("g");
                        o.appendChild(h), i = createElementID(), s = filtersFactory.createFilter(i);
                        var m = createNS("feComponentTransfer");
                        m.setAttribute("in", "SourceGraphic"), s.appendChild(m);
                        var S = createNS("feFuncA");
                        S.setAttribute("type", "table"), S.setAttribute("tableValues", "1.0 0.0"), m.appendChild(S), this.globalData.defs.appendChild(s);
                        var f = createNS("rect");
                        f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), h.appendChild(f), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(a), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), h.appendChild(f), n.appendChild(this.layerElement), h.appendChild(n)), this.globalData.defs.appendChild(o)
                    }
                    this.matteMasks[e] = r
                }
                return this.matteMasks[e]
            }, setMatte: function (e) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
            }
        };

        function HierarchyElement() {
        }

        HierarchyElement.prototype = {
            initHierarchy: function () {
                this.hierarchy = [], this._isParent = !1, this.checkParenting()
            }, setHierarchy: function (e) {
                this.hierarchy = e
            }, setAsParent: function () {
                this._isParent = !0
            }, checkParenting: function () {
                this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        };

        function RenderableDOMElement() {
        }

        (function () {
            var t = {
                initElement: function (r, i, s) {
                    this.initFrame(), this.initBaseData(r, i, s), this.initTransform(r, i, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                }, hide: function () {
                    if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                        var r = this.baseElement || this.layerElement;
                        r.style.display = "none", this.hidden = !0
                    }
                }, show: function () {
                    if (this.isInRange && !this.isTransparent) {
                        if (!this.data.hd) {
                            var r = this.baseElement || this.layerElement;
                            r.style.display = "block"
                        }
                        this.hidden = !1, this._isFirstFrame = !0
                    }
                }, renderFrame: function () {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                }, renderInnerContent: function () {
                }, prepareFrame: function (r) {
                    this._mdf = !1, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.checkTransparency()
                }, destroy: function () {
                    this.innerElem = null, this.destroyBaseElement()
                }
            };
            extendPrototype([RenderableElement, createProxyFunction(t)], RenderableDOMElement)
        })();

        function IImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }

        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function () {
            return this.sourceRect
        };

        function ProcessedElement(t, e) {
            this.elem = t, this.pos = e
        }

        function IShapeElement() {
        }

        IShapeElement.prototype = {
            addShapeToModifiers: function (e) {
                var r, i = this.shapeModifiers.length;
                for (r = 0; r < i; r += 1) this.shapeModifiers[r].addShape(e)
            }, isShapeInAnimatedModifiers: function (e) {
                for (var r = 0, i = this.shapeModifiers.length; r < i;) if (this.shapeModifiers[r].isAnimatedWithShape(e)) return !0;
                return !1
            }, renderModifiers: function () {
                if (this.shapeModifiers.length) {
                    var e, r = this.shapes.length;
                    for (e = 0; e < r; e += 1) this.shapes[e].sh.reset();
                    r = this.shapeModifiers.length;
                    var i;
                    for (e = r - 1; e >= 0 && (i = this.shapeModifiers[e].processShapes(this._isFirstFrame), !i); e -= 1) ;
                }
            }, searchProcessedElement: function (e) {
                for (var r = this.processedElements, i = 0, s = r.length; i < s;) {
                    if (r[i].elem === e) return r[i].pos;
                    i += 1
                }
                return 0
            }, addProcessedElement: function (e, r) {
                for (var i = this.processedElements, s = i.length; s;) if (s -= 1, i[s].elem === e) {
                    i[s].pos = r;
                    return
                }
                i.push(new ProcessedElement(e, r))
            }, prepareFrame: function (e) {
                this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
            }
        };
        var lineCapEnum = {1: "butt", 2: "round", 3: "square"}, lineJoinEnum = {1: "miter", 2: "round", 3: "bevel"};

        function SVGShapeData(t, e, r) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
            for (var i = 0, s = t.length; i < s;) {
                if (t[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                i += 1
            }
        }

        SVGShapeData.prototype.setAsAnimated = function () {
            this._isAnimated = !0
        };

        function SVGStyleData(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = createNS("path"), this.msElem = null
        }

        SVGStyleData.prototype.reset = function () {
            this.d = "", this._mdf = !1
        };

        function DashProperty(t, e, r, i) {
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
            var s, a = e.length || 0, n;
            for (s = 0; s < a; s += 1) n = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[s] = {
                n: e[s].n,
                p: n
            };
            this.k || this.getValue(!0), this._isAnimated = this.k
        }

        DashProperty.prototype.getValue = function (t) {
            if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0, r = this.dataProps.length;
                for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < r; e += 1) this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
            }
        }, extendPrototype([DynamicPropertyContainer], DashProperty);

        function SVGStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }

        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

        function SVGFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
        }

        extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

        function SVGNoStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r
        }

        extendPrototype([DynamicPropertyContainer], SVGNoStyleData);

        function GradientProperty(t, e, r) {
            this.data = e, this.c = createTypedArray("uint8c", e.p * 4);
            var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
            this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        GradientProperty.prototype.comparePoints = function (t, e) {
            for (var r = 0, i = this.o.length / 2, s; r < i;) {
                if (s = Math.abs(t[r * 4] - t[e * 4 + r * 2]), s > .01) return !1;
                r += 1
            }
            return !0
        }, GradientProperty.prototype.checkCollapsable = function () {
            if (this.o.length / 2 !== this.c.length / 4) return !1;
            if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e;) {
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                t += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0
        }, GradientProperty.prototype.getValue = function (t) {
            if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                var e, r = this.data.p * 4, i, s;
                for (e = 0; e < r; e += 1) i = e % 4 === 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
                if (this.o.length) for (r = this.prop.v.length, e = this.data.p * 4; e < r; e += 1) i = e % 2 === 0 ? 100 : 1, s = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== s && (this.o[e - this.data.p * 4] = s, this._omdf = !t);
                this._mdf = !t
            }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty);

        function SVGGradientFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
        }

        SVGGradientFillStyleData.prototype.initGradientData = function (t, e, r) {
            this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {k: 0}, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {k: 0}, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
            var r = createElementID(), i = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
            i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
            var s = [], a, n, l;
            for (l = e.g.p * 4, n = 0; n < l; n += 4) a = createNS("stop"), i.appendChild(a), s.push(a);
            t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var r, i, s, a = createNS("mask"), n = createNS("path");
                a.appendChild(n);
                var l = createElementID(), o = createElementID();
                a.setAttribute("id", o);
                var h = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
                h.setAttribute("id", l), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var m = this.stops;
                for (i = t.g.p * 4; i < s; i += 2) r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), m.push(r);
                n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + l + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = h, this.ms = a, this.ost = m, this.maskId = o, e.msElem = n
            }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

        function SVGGradientStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
        }

        extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

        function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, r) {
            this.transform = {
                mProps: t,
                op: e,
                container: r
            }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }

        var buildShapeString = function (e, r, i, s) {
            if (r === 0) return "";
            var a = e.o, n = e.i, l = e.v, o, h = " M" + s.applyToPointStringified(l[0][0], l[0][1]);
            for (o = 1; o < r; o += 1) h += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[o][0], n[o][1]) + " " + s.applyToPointStringified(l[o][0], l[o][1]);
            return i && r && (h += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(l[0][0], l[0][1]), h += "z"), h
        }, SVGElementsRenderer = function () {
            var t = new Matrix, e = new Matrix, r = {createRenderFunction: i};

            function i(S) {
                switch (S.ty) {
                    case"fl":
                        return l;
                    case"gf":
                        return h;
                    case"gs":
                        return o;
                    case"st":
                        return m;
                    case"sh":
                    case"el":
                    case"rc":
                    case"sr":
                        return n;
                    case"tr":
                        return s;
                    case"no":
                        return a;
                    default:
                        return null
                }
            }

            function s(S, f, b) {
                (b || f.transform.op._mdf) && f.transform.container.setAttribute("opacity", f.transform.op.v), (b || f.transform.mProps._mdf) && f.transform.container.setAttribute("transform", f.transform.mProps.v.to2dCSS())
            }

            function a() {
            }

            function n(S, f, b) {
                var y, d, x, p, u, c, v = f.styles.length, _ = f.lvl, E, T, M, I;
                for (c = 0; c < v; c += 1) {
                    if (p = f.sh._mdf || b, f.styles[c].lvl < _) {
                        for (T = e.reset(), M = _ - f.styles[c].lvl, I = f.transformers.length - 1; !p && M > 0;) p = f.transformers[I].mProps._mdf || p, M -= 1, I -= 1;
                        if (p) for (M = _ - f.styles[c].lvl, I = f.transformers.length - 1; M > 0;) T.multiply(f.transformers[I].mProps.v), M -= 1, I -= 1
                    } else T = t;
                    if (E = f.sh.paths, d = E._length, p) {
                        for (x = "", y = 0; y < d; y += 1) u = E.shapes[y], u && u._length && (x += buildShapeString(u, u._length, u.c, T));
                        f.caches[c] = x
                    } else x = f.caches[c];
                    f.styles[c].d += S.hd === !0 ? "" : x, f.styles[c]._mdf = p || f.styles[c]._mdf
                }
            }

            function l(S, f, b) {
                var y = f.style;
                (f.c._mdf || b) && y.pElem.setAttribute("fill", "rgb(" + bmFloor(f.c.v[0]) + "," + bmFloor(f.c.v[1]) + "," + bmFloor(f.c.v[2]) + ")"), (f.o._mdf || b) && y.pElem.setAttribute("fill-opacity", f.o.v)
            }

            function o(S, f, b) {
                h(S, f, b), m(S, f, b)
            }

            function h(S, f, b) {
                var y = f.gf, d = f.g._hasOpacity, x = f.s.v, p = f.e.v;
                if (f.o._mdf || b) {
                    var u = S.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                    f.style.pElem.setAttribute(u, f.o.v)
                }
                if (f.s._mdf || b) {
                    var c = S.t === 1 ? "x1" : "cx", v = c === "x1" ? "y1" : "cy";
                    y.setAttribute(c, x[0]), y.setAttribute(v, x[1]), d && !f.g._collapsable && (f.of.setAttribute(c, x[0]), f.of.setAttribute(v, x[1]))
                }
                var _, E, T, M;
                if (f.g._cmdf || b) {
                    _ = f.cst;
                    var I = f.g.c;
                    for (T = _.length, E = 0; E < T; E += 1) M = _[E], M.setAttribute("offset", I[E * 4] + "%"), M.setAttribute("stop-color", "rgb(" + I[E * 4 + 1] + "," + I[E * 4 + 2] + "," + I[E * 4 + 3] + ")")
                }
                if (d && (f.g._omdf || b)) {
                    var O = f.g.o;
                    for (f.g._collapsable ? _ = f.cst : _ = f.ost, T = _.length, E = 0; E < T; E += 1) M = _[E], f.g._collapsable || M.setAttribute("offset", O[E * 2] + "%"), M.setAttribute("stop-opacity", O[E * 2 + 1])
                }
                if (S.t === 1) (f.e._mdf || b) && (y.setAttribute("x2", p[0]), y.setAttribute("y2", p[1]), d && !f.g._collapsable && (f.of.setAttribute("x2", p[0]), f.of.setAttribute("y2", p[1]))); else {
                    var V;
                    if ((f.s._mdf || f.e._mdf || b) && (V = Math.sqrt(Math.pow(x[0] - p[0], 2) + Math.pow(x[1] - p[1], 2)), y.setAttribute("r", V), d && !f.g._collapsable && f.of.setAttribute("r", V)), f.e._mdf || f.h._mdf || f.a._mdf || b) {
                        V || (V = Math.sqrt(Math.pow(x[0] - p[0], 2) + Math.pow(x[1] - p[1], 2)));
                        var L = Math.atan2(p[1] - x[1], p[0] - x[0]), R = f.h.v;
                        R >= 1 ? R = .99 : R <= -1 && (R = -.99);
                        var B = V * R, k = Math.cos(L + f.a.v) * B + x[0], C = Math.sin(L + f.a.v) * B + x[1];
                        y.setAttribute("fx", k), y.setAttribute("fy", C), d && !f.g._collapsable && (f.of.setAttribute("fx", k), f.of.setAttribute("fy", C))
                    }
                }
            }

            function m(S, f, b) {
                var y = f.style, d = f.d;
                d && (d._mdf || b) && d.dashStr && (y.pElem.setAttribute("stroke-dasharray", d.dashStr), y.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), f.c && (f.c._mdf || b) && y.pElem.setAttribute("stroke", "rgb(" + bmFloor(f.c.v[0]) + "," + bmFloor(f.c.v[1]) + "," + bmFloor(f.c.v[2]) + ")"), (f.o._mdf || b) && y.pElem.setAttribute("stroke-opacity", f.o.v), (f.w._mdf || b) && (y.pElem.setAttribute("stroke-width", f.w.v), y.msElem && y.msElem.setAttribute("stroke-width", f.w.v))
            }

            return r
        }();

        function SVGShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
        }

        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function () {
        }, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function () {
        }, SVGShapeElement.prototype.createContent = function () {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function () {
            var t, e = this.shapes.length, r, i, s = this.stylesList.length, a, n = [], l = !1;
            for (i = 0; i < s; i += 1) {
                for (a = this.stylesList[i], l = !1, n.length = 0, t = 0; t < e; t += 1) r = this.shapes[t], r.styles.indexOf(a) !== -1 && (n.push(r), l = r._isAnimated || l);
                n.length > 1 && l && this.setShapesAsAnimated(n)
            }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function (t, e) {
            var r, i = new SVGStyleData(t, e), s = i.pElem;
            if (t.ty === "st") r = new SVGStrokeStyleData(this, t, i); else if (t.ty === "fl") r = new SVGFillStyleData(this, t, i); else if (t.ty === "gf" || t.ty === "gs") {
                var a = t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                r = new a(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))
            } else t.ty === "no" && (r = new SVGNoStyleData(this, t, i));
            return (t.ty === "st" || t.ty === "gs") && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), t.lj === 1 && s.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createGroupElement = function (t) {
            var e = new ShapeGroupData;
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function (t, e) {
            var r = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r, r.o, e);
            return this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createShapeElement = function (t, e, r) {
            var i = 4;
            t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
            var s = ShapePropertyFactory.getShapeProp(this, t, i, this), a = new SVGShapeData(e, r, s);
            return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
        }, SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
            for (var r = 0, i = this.animatedContents.length; r < i;) {
                if (this.animatedContents[r].element === e) return;
                r += 1
            }
            this.animatedContents.push({fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t})
        }, SVGShapeElement.prototype.setElementStyles = function (t) {
            var e = t.styles, r, i = this.stylesList.length;
            for (r = 0; r < i; r += 1) this.stylesList[r].closed || e.push(this.stylesList[r])
        }, SVGShapeElement.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function (t, e, r, i, s, a, n) {
            var l = [].concat(a), o, h = t.length - 1, m, S, f = [], b = [], y, d, x;
            for (o = h; o >= 0; o -= 1) {
                if (x = this.searchProcessedElement(t[o]), x ? e[o] = r[x - 1] : t[o]._render = n, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") x ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), f.push(e[o].style); else if (t[o].ty === "gr") {
                    if (!x) e[o] = this.createGroupElement(t[o]); else for (S = e[o].it.length, m = 0; m < S; m += 1) e[o].prevViewData[m] = e[o].it[m];
                    this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, l, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
                } else t[o].ty === "tr" ? (x || (e[o] = this.createTransformElement(t[o], i)), y = e[o].transform, l.push(y)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (x || (e[o] = this.createShapeElement(t[o], l, s)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (x ? (d = e[o], d.closed = !1) : (d = ShapeModifiers.getModifier(t[o].ty), d.init(this, t[o]), e[o] = d, this.shapeModifiers.push(d)), b.push(d)) : t[o].ty === "rp" && (x ? (d = e[o], d.closed = !0) : (d = ShapeModifiers.getModifier(t[o].ty), e[o] = d, d.init(this, t, o, e), this.shapeModifiers.push(d), n = !1), b.push(d));
                this.addProcessedElement(t[o], o + 1)
            }
            for (h = f.length, o = 0; o < h; o += 1) f[o].closed = !0;
            for (h = b.length, o = 0; o < h; o += 1) b[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function () {
            this.renderModifiers();
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1) (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function () {
            var t, e = this.animatedContents.length, r;
            for (t = 0; t < e; t += 1) r = this.animatedContents[t], (this._isFirstFrame || r.element._isAnimated) && r.data !== !0 && r.fn(r.data, r.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function () {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        };

        function LetterProps(t, e, r, i, s, a) {
            this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = {
                o: !0,
                sw: !!e,
                sc: !!r,
                fc: !!i,
                m: !0,
                p: !0
            }
        }

        LetterProps.prototype.update = function (t, e, r, i, s, a) {
            this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
            var n = !1;
            return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== s && (this.m = s, this._mdf.m = !0, n = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, n = !0), n
        };

        function TextProperty(t, e) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }

        TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function (t, e) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }, TextProperty.prototype.setCurrentData = function (t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function () {
            return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function () {
            return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function (t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function (t) {
            if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData, r = this.keysIndex;
                if (this.lock) {
                    this.setCurrentData(this.currentData);
                    return
                }
                this.lock = !0, this._mdf = !1;
                var i, s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
                for (i = 0; i < s; i += 1) r !== this.keysIndex ? a = this.effectsSequence[i](a, a.t) : a = this.effectsSequence[i](this.currentData, a.t);
                e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }, TextProperty.prototype.getKeyframeValue = function () {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);) r += 1;
            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function (t) {
            for (var e = [], r = 0, i = t.length, s, a, n = !1, l = !1, o = ""; r < i;) n = l, l = !1, s = t.charCodeAt(r), o = t.charAt(r), FontManager.isCombinedCharacter(s) ? n = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, r) ? o = t.substr(r, 14) : (a = t.charCodeAt(r + 1), a >= 56320 && a <= 57343 && (FontManager.isModifier(s, a) ? (o = t.substr(r, 2), n = !0) : FontManager.isFlagEmoji(t.substr(r, 4)) ? o = t.substr(r, 4) : o = t.substr(r, 2))) : s > 56319 ? (a = t.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (n = !0)) : FontManager.isZeroWidthJoiner(s) && (n = !0, l = !0), n ? (e[e.length - 1] += o, n = !1) : e.push(o), r += o.length;
            return e
        }, TextProperty.prototype.completeTextData = function (t) {
            t.__complete = !0;
            var e = this.elem.globalData.fontManager, r = this.data, i = [], s, a, n, l = 0, o, h = r.m.g, m = 0, S = 0,
                f = 0, b = [], y = 0, d = 0, x, p, u = e.getFontByName(t.f), c, v = 0, _ = getFontProperties(u);
            t.fWeight = _.weight, t.fStyle = _.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), a = t.finalText.length, t.finalLineHeight = t.lh;
            var E = t.tr / 1e3 * t.finalSize, T;
            if (t.sz) for (var M = !0, I = t.sz[0], O = t.sz[1], V, L; M;) {
                L = this.buildFinalText(t.t), V = 0, y = 0, a = L.length, E = t.tr / 1e3 * t.finalSize;
                var R = -1;
                for (s = 0; s < a; s += 1) T = L[s].charCodeAt(0), n = !1, L[s] === " " ? R = s : (T === 13 || T === 3) && (y = 0, n = !0, V += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (c = e.getCharData(L[s], u.fStyle, u.fFamily), v = n ? 0 : c.w * t.finalSize / 100) : v = e.measureText(L[s], t.f, t.finalSize), y + v > I && L[s] !== " " ? (R === -1 ? a += 1 : s = R, V += t.finalLineHeight || t.finalSize * 1.2, L.splice(s, R === s ? 1 : 0, "\r"), R = -1, y = 0) : (y += v, y += E);
                V += u.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && O < V ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = L, a = t.finalText.length, M = !1)
            }
            y = -E, v = 0;
            var B = 0, k;
            for (s = 0; s < a; s += 1) if (n = !1, k = t.finalText[s], T = k.charCodeAt(0), T === 13 || T === 3 ? (B = 0, b.push(y), d = y > d ? y : d, y = -2 * E, o = "", n = !0, f += 1) : o = k, e.chars ? (c = e.getCharData(k, u.fStyle, e.getFontByName(t.f).fFamily), v = n ? 0 : c.w * t.finalSize / 100) : v = e.measureText(o, t.f, t.finalSize), k === " " ? B += v + E : (y += v + E + B, B = 0), i.push({
                l: v,
                an: v,
                add: m,
                n,
                anIndexes: [],
                val: o,
                line: f,
                animatorJustifyOffset: 0
            }), h == 2) {
                if (m += v, o === "" || o === " " || s === a - 1) {
                    for ((o === "" || o === " ") && (m -= v); S <= s;) i[S].an = m, i[S].ind = l, i[S].extra = v, S += 1;
                    l += 1, m = 0
                }
            } else if (h == 3) {
                if (m += v, o === "" || s === a - 1) {
                    for (o === "" && (m -= v); S <= s;) i[S].an = m, i[S].ind = l, i[S].extra = v, S += 1;
                    m = 0, l += 1
                }
            } else i[l].ind = l, i[l].extra = 0, l += 1;
            if (t.l = i, d = y > d ? y : d, b.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0; else switch (t.boxWidth = d, t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                default:
                    t.justifyOffset = 0
            }
            t.lineWidths = b;
            var C = r.a, A, g;
            p = C.length;
            var P, F, w = [];
            for (x = 0; x < p; x += 1) {
                for (A = C[x], A.a.sc && (t.strokeColorAnim = !0), A.a.sw && (t.strokeWidthAnim = !0), (A.a.fc || A.a.fh || A.a.fs || A.a.fb) && (t.fillColorAnim = !0), F = 0, P = A.s.b, s = 0; s < a; s += 1) g = i[s], g.anIndexes[x] = F, (P == 1 && g.val !== "" || P == 2 && g.val !== "" && g.val !== " " || P == 3 && (g.n || g.val == " " || s == a - 1) || P == 4 && (g.n || s == a - 1)) && (A.s.rn === 1 && w.push(F), F += 1);
                r.a[x].s.totalChars = F;
                var D = -1, G;
                if (A.s.rn === 1) for (s = 0; s < a; s += 1) g = i[s], D != g.anIndexes[x] && (D = g.anIndexes[x], G = w.splice(Math.floor(Math.random() * w.length), 1)[0]), g.anIndexes[x] = G
            }
            t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = u.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function (t, e) {
            e = e === void 0 ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function (t) {
            var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function (t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function (t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function () {
            var t = Math.max, e = Math.min, r = Math.floor;

            function i(a, n) {
                this._currentTextLength = -1, this.k = !1, this.data = n, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = PropertyFactory.getProp(a, n.s || {k: 0}, 0, 0, this), "e" in n ? this.e = PropertyFactory.getProp(a, n.e, 0, 0, this) : this.e = {v: 100}, this.o = PropertyFactory.getProp(a, n.o || {k: 0}, 0, 0, this), this.xe = PropertyFactory.getProp(a, n.xe || {k: 0}, 0, 0, this), this.ne = PropertyFactory.getProp(a, n.ne || {k: 0}, 0, 0, this), this.sm = PropertyFactory.getProp(a, n.sm || {k: 100}, 0, 0, this), this.a = PropertyFactory.getProp(a, n.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
            }

            i.prototype = {
                getMult: function (n) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var l = 0, o = 0, h = 1, m = 1;
                    this.ne.v > 0 ? l = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? h = 1 - this.xe.v / 100 : m = 1 + this.xe.v / 100;
                    var S = BezierFactory.getBezierEasing(l, o, h, m).get, f = 0, b = this.finalS, y = this.finalE,
                        d = this.data.sh;
                    if (d === 2) y === b ? f = n >= y ? 1 : 0 : f = t(0, e(.5 / (y - b) + (n - b) / (y - b), 1)), f = S(f); else if (d === 3) y === b ? f = n >= y ? 0 : 1 : f = 1 - t(0, e(.5 / (y - b) + (n - b) / (y - b), 1)), f = S(f); else if (d === 4) y === b ? f = 0 : (f = t(0, e(.5 / (y - b) + (n - b) / (y - b), 1)), f < .5 ? f *= 2 : f = 1 - 2 * (f - .5)), f = S(f); else if (d === 5) {
                        if (y === b) f = 0; else {
                            var x = y - b;
                            n = e(t(0, n + .5 - b), y - b);
                            var p = -x / 2 + n, u = x / 2;
                            f = Math.sqrt(1 - p * p / (u * u))
                        }
                        f = S(f)
                    } else d === 6 ? (y === b ? f = 0 : (n = e(t(0, n + .5 - b), y - b), f = (1 + Math.cos(Math.PI + Math.PI * 2 * n / (y - b))) / 2), f = S(f)) : (n >= r(b) && (n - b < 0 ? f = t(0, e(e(y, 1) - (b - n), 1)) : f = t(0, e(y - n, 1))), f = S(f));
                    if (this.sm.v !== 100) {
                        var c = this.sm.v * .01;
                        c === 0 && (c = 1e-8);
                        var v = .5 - c * .5;
                        f < v ? f = 0 : (f = (f - v) / c, f > 1 && (f = 1))
                    }
                    return f * this.a.v
                }, getValue: function (n) {
                    this.iterateDynamicProperties(), this._mdf = n || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, n && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars, o = this.o.v / l, h = this.s.v / l + o,
                        m = this.e.v / l + o;
                    if (h > m) {
                        var S = h;
                        h = m, m = S
                    }
                    this.finalS = h, this.finalE = m
                }
            }, extendPrototype([DynamicPropertyContainer], i);

            function s(a, n, l) {
                return new i(a, n)
            }

            return {getTextSelectorProp: s}
        }();

        function TextAnimatorDataProperty(t, e, r) {
            var i = {propType: !1}, s = PropertyFactory.getProp, a = e.a;
            this.a = {
                r: a.r ? s(t, a.r, 0, degToRads, r) : i,
                rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
                ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
                sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
                sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
                s: a.s ? s(t, a.s, 1, .01, r) : i,
                a: a.a ? s(t, a.a, 1, 0, r) : i,
                o: a.o ? s(t, a.o, 0, .01, r) : i,
                p: a.p ? s(t, a.p, 1, 0, r) : i,
                sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
                sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
                fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
                fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
                fs: a.fs ? s(t, a.fs, 0, .01, r) : i,
                fb: a.fb ? s(t, a.fb, 0, .01, r) : i,
                t: a.t ? s(t, a.t, 0, 0, r) : i
            }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, r) {
            this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {alignment: {}}, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }

        TextAnimatorProperty.prototype.searchProperties = function () {
            var t, e = this._textData.a.length, r, i = PropertyFactory.getProp;
            for (t = 0; t < e; t += 1) r = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, r, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function (t, e) {
            if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var r = this._moreOptions.alignment.v, i = this._animatorsData, s = this._textData, a = this.mHelper,
                    n = this._renderType, l = this.renderedLetters.length, o, h, m, S, f = t.l, b, y, d, x, p, u, c, v,
                    _, E, T, M, I, O, V;
                if (this._hasMaskedPath) {
                    if (V = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                        var L = V.v;
                        this._pathData.r.v && (L = L.reverse()), b = {tLength: 0, segments: []}, S = L._length - 1;
                        var R;
                        for (M = 0, m = 0; m < S; m += 1) R = bez.buildBezierData(L.v[m], L.v[m + 1], [L.o[m][0] - L.v[m][0], L.o[m][1] - L.v[m][1]], [L.i[m + 1][0] - L.v[m + 1][0], L.i[m + 1][1] - L.v[m + 1][1]]), b.tLength += R.segmentLength, b.segments.push(R), M += R.segmentLength;
                        m = S, V.v.c && (R = bez.buildBezierData(L.v[m], L.v[0], [L.o[m][0] - L.v[m][0], L.o[m][1] - L.v[m][1]], [L.i[0][0] - L.v[0][0], L.i[0][1] - L.v[0][1]]), b.tLength += R.segmentLength, b.segments.push(R), M += R.segmentLength), this._pathData.pi = b
                    }
                    if (b = this._pathData.pi, y = this._pathData.f.v, c = 0, u = 1, x = 0, p = !0, E = b.segments, y < 0 && V.v.c) for (b.tLength < Math.abs(y) && (y = -Math.abs(y) % b.tLength), c = E.length - 1, _ = E[c].points, u = _.length - 1; y < 0;) y += _[u].partialLength, u -= 1, u < 0 && (c -= 1, _ = E[c].points, u = _.length - 1);
                    _ = E[c].points, v = _[u - 1], d = _[u], T = d.partialLength
                }
                S = f.length, o = 0, h = 0;
                var B = t.finalSize * 1.2 * .714, k = !0, C, A, g, P, F;
                P = i.length;
                var w, D = -1, G, N, z, j = y, q = c, U = u, Q = -1, K, W, X, H, $, et, at, rt, tt = "",
                    it = this.defaultPropsArray, st;
                if (t.j === 2 || t.j === 1) {
                    var Y = 0, nt = 0, ot = t.j === 2 ? -.5 : -1, J = 0, lt = !0;
                    for (m = 0; m < S; m += 1) if (f[m].n) {
                        for (Y && (Y += nt); J < m;) f[J].animatorJustifyOffset = Y, J += 1;
                        Y = 0, lt = !0
                    } else {
                        for (g = 0; g < P; g += 1) C = i[g].a, C.t.propType && (lt && t.j === 2 && (nt += C.t.v * ot), A = i[g].s, w = A.getMult(f[m].anIndexes[g], s.a[g].s.totalChars), w.length ? Y += C.t.v * w[0] * ot : Y += C.t.v * w * ot);
                        lt = !1
                    }
                    for (Y && (Y += nt); J < m;) f[J].animatorJustifyOffset = Y, J += 1
                }
                for (m = 0; m < S; m += 1) {
                    if (a.reset(), K = 1, f[m].n) o = 0, h += t.yOffset, h += k ? 1 : 0, y = j, k = !1, this._hasMaskedPath && (c = q, u = U, _ = E[c].points, v = _[u - 1], d = _[u], T = d.partialLength, x = 0), tt = "", rt = "", et = "", st = "", it = this.defaultPropsArray; else {
                        if (this._hasMaskedPath) {
                            if (Q !== f[m].line) {
                                switch (t.j) {
                                    case 1:
                                        y += M - t.lineWidths[f[m].line];
                                        break;
                                    case 2:
                                        y += (M - t.lineWidths[f[m].line]) / 2;
                                        break
                                }
                                Q = f[m].line
                            }
                            D !== f[m].ind && (f[D] && (y += f[D].extra), y += f[m].an / 2, D = f[m].ind), y += r[0] * f[m].an * .005;
                            var Z = 0;
                            for (g = 0; g < P; g += 1) C = i[g].a, C.p.propType && (A = i[g].s, w = A.getMult(f[m].anIndexes[g], s.a[g].s.totalChars), w.length ? Z += C.p.v[0] * w[0] : Z += C.p.v[0] * w), C.a.propType && (A = i[g].s, w = A.getMult(f[m].anIndexes[g], s.a[g].s.totalChars), w.length ? Z += C.a.v[0] * w[0] : Z += C.a.v[0] * w);
                            for (p = !0, this._pathData.a.v && (y = f[0].an * .5 + (M - this._pathData.f.v - f[0].an * .5 - f[f.length - 1].an * .5) * D / (S - 1), y += this._pathData.f.v); p;) x + T >= y + Z || !_ ? (I = (y + Z - x) / d.partialLength, N = v.point[0] + (d.point[0] - v.point[0]) * I, z = v.point[1] + (d.point[1] - v.point[1]) * I, a.translate(-r[0] * f[m].an * .005, -(r[1] * B) * .01), p = !1) : _ && (x += d.partialLength, u += 1, u >= _.length && (u = 0, c += 1, E[c] ? _ = E[c].points : V.v.c ? (u = 0, c = 0, _ = E[c].points) : (x -= d.partialLength, _ = null)), _ && (v = d, d = _[u], T = d.partialLength));
                            G = f[m].an / 2 - f[m].add, a.translate(-G, 0, 0)
                        } else G = f[m].an / 2 - f[m].add, a.translate(-G, 0, 0), a.translate(-r[0] * f[m].an * .005, -r[1] * B * .01, 0);
                        for (g = 0; g < P; g += 1) C = i[g].a, C.t.propType && (A = i[g].s, w = A.getMult(f[m].anIndexes[g], s.a[g].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? w.length ? y += C.t.v * w[0] : y += C.t.v * w : w.length ? o += C.t.v * w[0] : o += C.t.v * w));
                        for (t.strokeWidthAnim && (X = t.sw || 0), t.strokeColorAnim && (t.sc ? W = [t.sc[0], t.sc[1], t.sc[2]] : W = [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), g = 0; g < P; g += 1) C = i[g].a, C.a.propType && (A = i[g].s, w = A.getMult(f[m].anIndexes[g], s.a[g].s.totalChars), w.length ? a.translate(-C.a.v[0] * w[0], -C.a.v[1] * w[1], C.a.v[2] * w[2]) : a.translate(-C.a.v[0] * w, -C.a.v[1] * w, C.a.v[2] * w));
                        for (g = 0; g < P; g += 1) C = i[g].a, C.s.propType && (A = i[g].s, w = A.getMult(f[m].anIndexes[g], s.a[g].s.totalChars), w.length ? a.scale(1 + (C.s.v[0] - 1) * w[0], 1 + (C.s.v[1] - 1) * w[1], 1) : a.scale(1 + (C.s.v[0] - 1) * w, 1 + (C.s.v[1] - 1) * w, 1));
                        for (g = 0; g < P; g += 1) {
                            if (C = i[g].a, A = i[g].s, w = A.getMult(f[m].anIndexes[g], s.a[g].s.totalChars), C.sk.propType && (w.length ? a.skewFromAxis(-C.sk.v * w[0], C.sa.v * w[1]) : a.skewFromAxis(-C.sk.v * w, C.sa.v * w)), C.r.propType && (w.length ? a.rotateZ(-C.r.v * w[2]) : a.rotateZ(-C.r.v * w)), C.ry.propType && (w.length ? a.rotateY(C.ry.v * w[1]) : a.rotateY(C.ry.v * w)), C.rx.propType && (w.length ? a.rotateX(C.rx.v * w[0]) : a.rotateX(C.rx.v * w)), C.o.propType && (w.length ? K += (C.o.v * w[0] - K) * w[0] : K += (C.o.v * w - K) * w), t.strokeWidthAnim && C.sw.propType && (w.length ? X += C.sw.v * w[0] : X += C.sw.v * w), t.strokeColorAnim && C.sc.propType) for ($ = 0; $ < 3; $ += 1) w.length ? W[$] += (C.sc.v[$] - W[$]) * w[0] : W[$] += (C.sc.v[$] - W[$]) * w;
                            if (t.fillColorAnim && t.fc) {
                                if (C.fc.propType) for ($ = 0; $ < 3; $ += 1) w.length ? H[$] += (C.fc.v[$] - H[$]) * w[0] : H[$] += (C.fc.v[$] - H[$]) * w;
                                C.fh.propType && (w.length ? H = addHueToRGB(H, C.fh.v * w[0]) : H = addHueToRGB(H, C.fh.v * w)), C.fs.propType && (w.length ? H = addSaturationToRGB(H, C.fs.v * w[0]) : H = addSaturationToRGB(H, C.fs.v * w)), C.fb.propType && (w.length ? H = addBrightnessToRGB(H, C.fb.v * w[0]) : H = addBrightnessToRGB(H, C.fb.v * w))
                            }
                        }
                        for (g = 0; g < P; g += 1) C = i[g].a, C.p.propType && (A = i[g].s, w = A.getMult(f[m].anIndexes[g], s.a[g].s.totalChars), this._hasMaskedPath ? w.length ? a.translate(0, C.p.v[1] * w[0], -C.p.v[2] * w[1]) : a.translate(0, C.p.v[1] * w, -C.p.v[2] * w) : w.length ? a.translate(C.p.v[0] * w[0], C.p.v[1] * w[1], -C.p.v[2] * w[2]) : a.translate(C.p.v[0] * w, C.p.v[1] * w, -C.p.v[2] * w));
                        if (t.strokeWidthAnim && (et = X < 0 ? 0 : X), t.strokeColorAnim && (at = "rgb(" + Math.round(W[0] * 255) + "," + Math.round(W[1] * 255) + "," + Math.round(W[2] * 255) + ")"), t.fillColorAnim && t.fc && (rt = "rgb(" + Math.round(H[0] * 255) + "," + Math.round(H[1] * 255) + "," + Math.round(H[2] * 255) + ")"), this._hasMaskedPath) {
                            if (a.translate(0, -t.ls), a.translate(0, r[1] * B * .01 + h, 0), this._pathData.p.v) {
                                O = (d.point[1] - v.point[1]) / (d.point[0] - v.point[0]);
                                var ht = Math.atan(O) * 180 / Math.PI;
                                d.point[0] < v.point[0] && (ht += 180), a.rotate(-ht * Math.PI / 180)
                            }
                            a.translate(N, z, 0), y -= r[0] * f[m].an * .005, f[m + 1] && D !== f[m + 1].ind && (y += f[m].an / 2, y += t.tr * .001 * t.finalSize)
                        } else {
                            switch (a.translate(o, h, 0), t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    a.translate(f[m].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[m].line]), 0, 0);
                                    break;
                                case 2:
                                    a.translate(f[m].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[f[m].line]) / 2, 0, 0);
                                    break
                            }
                            a.translate(0, -t.ls), a.translate(G, 0, 0), a.translate(r[0] * f[m].an * .005, r[1] * B * .01, 0), o += f[m].l + t.tr * .001 * t.finalSize
                        }
                        n === "html" ? tt = a.toCSS() : n === "svg" ? tt = a.to2dCSS() : it = [a.props[0], a.props[1], a.props[2], a.props[3], a.props[4], a.props[5], a.props[6], a.props[7], a.props[8], a.props[9], a.props[10], a.props[11], a.props[12], a.props[13], a.props[14], a.props[15]], st = K
                    }
                    l <= m ? (F = new LetterProps(st, et, at, rt, tt, it), this.renderedLetters.push(F), l += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[m], this.lettersChangedFlag = F.update(st, et, at, rt, tt, it) || this.lettersChangedFlag)
                }
            }
        }, TextAnimatorProperty.prototype.getValue = function () {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

        function ITextElement() {
        }

        ITextElement.prototype.initElement = function (t, e, r) {
            this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function (t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }, ITextElement.prototype.createPathShape = function (t, e) {
            var r, i = e.length, s, a = "";
            for (r = 0; r < i; r += 1) e[r].ty === "sh" && (s = e[r].ks.k, a += buildShapeString(s, s.i.length, !0, t));
            return a
        }, ITextElement.prototype.updateDocumentData = function (t, e) {
            this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function (t) {
            this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function (t) {
            this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, r, i, s) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
                    break
            }
            e.translate(i, s, 0)
        }, ITextElement.prototype.buildColor = function (t) {
            return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function () {
        }, ITextElement.prototype.validateText = function () {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {shapes: []};

        function SVGTextLottieElement(t, e, r) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
        }

        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function () {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function (t) {
            for (var e = 0, r = t.length, i = [], s = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
            return i.push(s), i
        }, SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
            if (t.shapes && t.shapes.length) {
                var r = t.shapes[0];
                if (r.it) {
                    var i = r.it[r.it.length - 1];
                    i.s && (i.s.k[0] = e, i.s.k[1] = e)
                }
            }
            return t
        }, SVGTextLottieElement.prototype.buildNewText = function () {
            this.addDynamicProperty(this);
            var t, e, r = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
            var i = this.globalData.fontManager.getFontByName(r.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass); else {
                this.layerElement.setAttribute("font-family", i.fFamily);
                var s = r.fWeight, a = r.fStyle;
                this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s)
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var n = r.l || [], l = !!this.globalData.fontManager.chars;
            e = n.length;
            var o, h = this.mHelper, m = "", S = this.data.singleShape, f = 0, b = 0, y = !0,
                d = r.tr * .001 * r.finalSize;
            if (S && !l && !r.sz) {
                var x = this.textContainer, p = "start";
                switch (r.j) {
                    case 1:
                        p = "end";
                        break;
                    case 2:
                        p = "middle";
                        break;
                    default:
                        p = "start";
                        break
                }
                x.setAttribute("text-anchor", p), x.setAttribute("letter-spacing", d);
                var u = this.buildTextContents(r.finalText);
                for (e = u.length, b = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1) o = this.textSpans[t].span || createNS("tspan"), o.textContent = u[t], o.setAttribute("x", 0), o.setAttribute("y", b), o.style.display = "inherit", x.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
                    span: null,
                    glyph: null
                }), this.textSpans[t].span = o, b += r.finalLineHeight;
                this.layerElement.appendChild(x)
            } else {
                var c = this.textSpans.length, v;
                for (t = 0; t < e; t += 1) {
                    if (this.textSpans[t] || (this.textSpans[t] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }), !l || !S || t === 0) {
                        if (o = c > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), c <= t) {
                            if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, l) {
                                var _ = createNS("g");
                                o.appendChild(_), this.textSpans[t].childSpan = _
                            }
                            this.textSpans[t].span = o, this.layerElement.appendChild(o)
                        }
                        o.style.display = "inherit"
                    }
                    if (h.reset(), S && (n[t].n && (f = -d, b += r.yOffset, b += y ? 1 : 0, y = !1), this.applyTextPropertiesToMatrix(r, h, n[t].line, f, b), f += n[t].l || 0, f += d), l) {
                        v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
                        var E;
                        if (v.t === 1) E = new SVGCompElement(v.data, this.globalData, this); else {
                            var T = emptyShapeData;
                            v.data && v.data.shapes && (T = this.buildShapeData(v.data, r.finalSize)), E = new SVGShapeElement(T, this.globalData, this)
                        }
                        if (this.textSpans[t].glyph) {
                            var M = this.textSpans[t].glyph;
                            this.textSpans[t].childSpan.removeChild(M.layerElement), M.destroy()
                        }
                        this.textSpans[t].glyph = E, E._debug = !0, E.prepareFrame(0), E.renderFrame(), this.textSpans[t].childSpan.appendChild(E.layerElement), v.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
                    } else S && o.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                }
                S && o && o.setAttribute("d", m)
            }
            for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
            this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function () {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = !1;
                var t = this.layerElement.getBBox();
                this.bbox = {top: t.y, left: t.x, width: t.width, height: t.height}
            }
            return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function () {
            var t, e = this.textSpans.length, r;
            for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1) r = this.textSpans[t].glyph, r && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function () {
            if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var t, e, r = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l;
                e = i.length;
                var s, a, n;
                for (t = 0; t < e; t += 1) i[t].n || (s = r[t], a = this.textSpans[t].span, n = this.textSpans[t].glyph, n && n.renderFrame(), s._mdf.m && a.setAttribute("transform", s.m), s._mdf.o && a.setAttribute("opacity", s.o), s._mdf.sw && a.setAttribute("stroke-width", s.sw), s._mdf.sc && a.setAttribute("stroke", s.sc), s._mdf.fc && a.setAttribute("fill", s.fc))
            }
        };

        function ISolidElement(t, e, r) {
            this.initElement(t, e, r)
        }

        extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function () {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        };

        function NullElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
        }

        NullElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function () {
        }, NullElement.prototype.getBaseElement = function () {
            return null
        }, NullElement.prototype.destroy = function () {
        }, NullElement.prototype.sourceRectAtTime = function () {
        }, NullElement.prototype.hide = function () {
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

        function SVGRendererBase() {
        }

        extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function (t) {
            return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function (t) {
            return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function (t) {
            return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function (t) {
            return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function (t) {
            return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function (t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var r = createNS("clipPath"), i = createNS("rect");
            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
            var s = createElementID();
            r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function () {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function () {
        }, SVGRendererBase.prototype.findIndexByInd = function (t) {
            var e = 0, r = this.layers.length;
            for (e = 0; e < r; e += 1) if (this.layers[e].ind === t) return e;
            return -1
        }, SVGRendererBase.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                e[t] = !0;
                var r = this.createItem(this.layers[t]);
                if (e[t] = r, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
                    var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                    if (i === -1) return;
                    if (!this.elements[i] || this.elements[i] === !0) this.buildItem(i), this.addPendingElement(r); else {
                        var s = e[i], a = s.getMatte(this.layers[t].tt);
                        r.setMatte(a)
                    }
                }
            }
        }, SVGRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt) for (var e = 0, r = this.elements.length; e < r;) {
                    if (this.elements[e] === t) {
                        var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, s = this.elements[i],
                            a = s.getMatte(this.layers[e].tt);
                        t.setMatte(a);
                        break
                    }
                    e += 1
                }
            }
        }, SVGRendererBase.prototype.renderFrame = function (t) {
            if (!(this.renderedFrame === t || this.destroyed)) {
                t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                var e, r = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf) for (e = 0; e < r; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
        }, SVGRendererBase.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
                for (var i = 0, s; i < e;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (s = this.elements[i].getBaseElement()), i += 1;
                s ? this.layerElement.insertBefore(r, s) : this.layerElement.appendChild(r)
            }
        }, SVGRendererBase.prototype.hide = function () {
            this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function () {
            this.layerElement.style.display = "block"
        };

        function ICompElement() {
        }

        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function (t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function (t) {
            if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder) this.renderedFrame = t / this.data.sr; else {
                    var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                }
                var r, i = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
            }
        }, ICompElement.prototype.renderInnerContent = function () {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function (t) {
            this.elements = t
        }, ICompElement.prototype.getElements = function () {
            return this.elements
        }, ICompElement.prototype.destroyElements = function () {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function () {
            this.destroyElements(), this.destroyBaseElement()
        };

        function SVGCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0}
        }

        extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this)
        };

        function SVGRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var r = "";
            if (e && e.title) {
                var i = createNS("title"), s = createElementID();
                i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s
            }
            if (e && e.description) {
                var a = createNS("desc"), n = createElementID();
                a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + n
            }
            r && this.svgElement.setAttribute("aria-labelledby", r);
            var l = createNS("defs");
            this.svgElement.appendChild(l);
            var o = createNS("g");
            this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                progressiveLoad: e && e.progressiveLoad || !1,
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                viewBoxOnly: e && e.viewBoxOnly || !1,
                viewBoxSize: e && e.viewBoxSize || !1,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "100%",
                    height: e && e.filterSize && e.filterSize.height || "100%",
                    x: e && e.filterSize && e.filterSize.x || "0%",
                    y: e && e.filterSize && e.filterSize.y || "0%"
                },
                width: e && e.width,
                height: e && e.height,
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: l,
                renderConfig: this.renderConfig
            }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this)
        };

        function ShapeTransformManager() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }

        ShapeTransformManager.prototype = {
            addTransformSequence: function (e) {
                var r, i = e.length, s = "_";
                for (r = 0; r < i; r += 1) s += e[r].transform.key + "_";
                var a = this.sequences[s];
                return a || (a = {
                    transforms: [].concat(e),
                    finalTransform: new Matrix,
                    _mdf: !1
                }, this.sequences[s] = a, this.sequenceList.push(a)), a
            }, processSequence: function (e, r) {
                for (var i = 0, s = e.transforms.length, a = r; i < s && !r;) {
                    if (e.transforms[i].transform.mProps._mdf) {
                        a = !0;
                        break
                    }
                    i += 1
                }
                if (a) for (e.finalTransform.reset(), i = s - 1; i >= 0; i -= 1) e.finalTransform.multiply(e.transforms[i].transform.mProps.v);
                e._mdf = a
            }, processSequences: function (e) {
                var r, i = this.sequenceList.length;
                for (r = 0; r < i; r += 1) this.processSequence(this.sequenceList[r], e)
            }, getNewKey: function () {
                return this.transform_key_count += 1, "_" + this.transform_key_count
            }
        };
        var lumaLoader = function () {
            var e = "__lottie_element_luma_buffer", r = null, i = null, s = null;

            function a() {
                var o = createNS("svg"), h = createNS("filter"), m = createNS("feColorMatrix");
                return h.setAttribute("id", e), m.setAttribute("type", "matrix"), m.setAttribute("color-interpolation-filters", "sRGB"), m.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), h.appendChild(m), o.appendChild(h), o.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (o.style.display = "none"), o
            }

            function n() {
                r || (s = a(), document.body.appendChild(s), r = createTag("canvas"), i = r.getContext("2d"), i.filter = "url(#" + e + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1))
            }

            function l(o) {
                return r || n(), r.width = o.width, r.height = o.height, i.filter = "url(#" + e + ")", r
            }

            return {load: n, get: l}
        };

        function createCanvas(t, e) {
            if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
            var r = createTag("canvas");
            return r.width = t, r.height = e, r
        }

        var assetLoader = function () {
            return {loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas}
        }(), registeredEffects = {};

        function CVEffects(t) {
            var e, r = t.data.ef ? t.data.ef.length : 0;
            this.filters = [];
            var i;
            for (e = 0; e < r; e += 1) {
                i = null;
                var s = t.data.ef[e].ty;
                if (registeredEffects[s]) {
                    var a = registeredEffects[s].effect;
                    i = new a(t.effectsManager.effectElements[e], t)
                }
                i && this.filters.push(i)
            }
            this.filters.length && t.addRenderableComponent(this)
        }

        CVEffects.prototype.renderFrame = function (t) {
            var e, r = this.filters.length;
            for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, CVEffects.prototype.getEffects = function (t) {
            var e, r = this.filters.length, i = [];
            for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
            return i
        };

        function registerEffect(t, e) {
            registeredEffects[t] = {effect: e}
        }

        function CVMaskElement(t, e) {
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var r, i = this.masksProperties.length, s = !1;
            for (r = 0; r < i; r += 1) this.masksProperties[r].mode !== "n" && (s = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
            this.hasMasks = s, s && this.element.addRenderableComponent(this)
        }

        CVMaskElement.prototype.renderFrame = function () {
            if (this.hasMasks) {
                var t = this.element.finalTransform.mat, e = this.element.canvasContext, r,
                    i = this.masksProperties.length, s, a, n;
                for (e.beginPath(), r = 0; r < i; r += 1) if (this.masksProperties[r].mode !== "n") {
                    this.masksProperties[r].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), n = this.viewData[r].v, s = t.applyToPointArray(n.v[0][0], n.v[0][1], 0), e.moveTo(s[0], s[1]);
                    var l, o = n._length;
                    for (l = 1; l < o; l += 1) a = t.applyToTriplePoints(n.o[l - 1], n.i[l], n.v[l]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                    a = t.applyToTriplePoints(n.o[l - 1], n.i[0], n.v[0]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5])
                }
                this.element.globalData.renderer.save(!0), e.clip()
            }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
            this.element = null
        };

        function CVBaseElement() {
        }

        var operationsMap = {1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out"};
        CVBaseElement.prototype = {
            createElements: function () {
            }, initRendererElement: function () {
            }, createContainerElements: function () {
                if (this.data.tt >= 1) {
                    this.buffers = [];
                    var e = this.globalData.canvasContext,
                        r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(r);
                    var i = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                }
                this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
            }, createContent: function () {
            }, setBlendMode: function () {
                var e = this.globalData;
                if (e.blendMode !== this.data.bm) {
                    e.blendMode = this.data.bm;
                    var r = getBlendMode(this.data.bm);
                    e.canvasContext.globalCompositeOperation = r
                }
            }, createRenderableComponents: function () {
                this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
            }, hideElement: function () {
                !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0)
            }, showElement: function () {
                this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
            }, clearCanvas: function (e) {
                e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
            }, prepareLayer: function () {
                if (this.data.tt >= 1) {
                    var e = this.buffers[0], r = e.getContext("2d");
                    this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                }
            }, exitLayer: function () {
                if (this.data.tt >= 1) {
                    var e = this.buffers[1], r = e.getContext("2d");
                    this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                    var i = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
                    if (i.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                        var s = assetLoader.getLumaCanvas(this.canvasContext.canvas), a = s.getContext("2d");
                        a.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(s, 0, 0)
                    }
                    this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                }
            }, renderFrame: function (e) {
                if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !e)) {
                    this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                    var r = this.data.ty === 0;
                    this.prepareLayer(), this.globalData.renderer.save(r), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(r), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                }
            }, destroy: function () {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
            }, mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

        function CVShapeData(t, e, r, i) {
            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
            var s = 4;
            e.ty === "rc" ? s = 5 : e.ty === "el" ? s = 6 : e.ty === "sr" && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
            var a, n = r.length, l;
            for (a = 0; a < n; a += 1) r[a].closed || (l = {
                transforms: i.addTransformSequence(r[a].transforms),
                trNodes: []
            }, this.styledShapes.push(l), r[a].elements.push(l))
        }

        CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;

        function CVShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
        }

        extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function () {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function (t, e) {
            var r = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: t.hd === !0
            }, i = {};
            if (t.ty === "fl" || t.ty === "st" ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : (t.ty === "gf" || t.ty === "gs") && (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {k: 0}, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {k: 0}, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), t.ty === "st" || t.ty === "gs") {
                if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], t.lj == 1 && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                    var s = new DashProperty(this, t.d, "canvas", this);
                    i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
                }
            } else r.r = t.r === 2 ? "evenodd" : "nonzero";
            return this.stylesList.push(r), i.style = r, i
        }, CVShapeElement.prototype.createGroupElement = function () {
            var t = {it: [], prevViewData: []};
            return t
        }, CVShapeElement.prototype.createTransformElement = function (t) {
            var e = {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
            };
            return e
        }, CVShapeElement.prototype.createShapeElement = function (t) {
            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function (t) {
            var e, r = this.stylesList.length;
            for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function () {
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function (t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function (t, e, r, i, s) {
            var a, n = t.length - 1, l, o, h = [], m = [], S, f, b, y = [].concat(s);
            for (a = n; a >= 0; a -= 1) {
                if (S = this.searchProcessedElement(t[a]), S ? e[a] = r[S - 1] : t[a]._shouldRender = i, t[a].ty === "fl" || t[a].ty === "st" || t[a].ty === "gf" || t[a].ty === "gs") S ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], y), h.push(e[a].style); else if (t[a].ty === "gr") {
                    if (!S) e[a] = this.createGroupElement(t[a]); else for (o = e[a].it.length, l = 0; l < o; l += 1) e[a].prevViewData[l] = e[a].it[l];
                    this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, y)
                } else t[a].ty === "tr" ? (S || (b = this.createTransformElement(t[a]), e[a] = b), y.push(e[a]), this.addTransformToStyleList(e[a])) : t[a].ty === "sh" || t[a].ty === "rc" || t[a].ty === "el" || t[a].ty === "sr" ? S || (e[a] = this.createShapeElement(t[a])) : t[a].ty === "tm" || t[a].ty === "rd" || t[a].ty === "pb" || t[a].ty === "zz" || t[a].ty === "op" ? (S ? (f = e[a], f.closed = !1) : (f = ShapeModifiers.getModifier(t[a].ty), f.init(this, t[a]), e[a] = f, this.shapeModifiers.push(f)), m.push(f)) : t[a].ty === "rp" && (S ? (f = e[a], f.closed = !0) : (f = ShapeModifiers.getModifier(t[a].ty), e[a] = f, f.init(this, t, a, e), this.shapeModifiers.push(f), i = !1), m.push(f));
                this.addProcessedElement(t[a], a + 1)
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(h), n = m.length, a = 0; a < n; a += 1) m[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function () {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function (t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function () {
            var t, e = this.stylesList.length, r, i, s, a, n, l, o = this.globalData.renderer,
                h = this.globalData.canvasContext, m, S;
            for (t = 0; t < e; t += 1) if (S = this.stylesList[t], m = S.type, !((m === "st" || m === "gs") && S.wi === 0 || !S.data._shouldRender || S.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
                for (o.save(), n = S.elements, m === "st" || m === "gs" ? (o.ctxStrokeStyle(m === "st" ? S.co : S.grd), o.ctxLineWidth(S.wi), o.ctxLineCap(S.lc), o.ctxLineJoin(S.lj), o.ctxMiterLimit(S.ml || 0)) : o.ctxFillStyle(m === "fl" ? S.co : S.grd), o.ctxOpacity(S.coOp), m !== "st" && m !== "gs" && h.beginPath(), o.ctxTransform(S.preTransforms.finalTransform.props), i = n.length, r = 0; r < i; r += 1) {
                    for ((m === "st" || m === "gs") && (h.beginPath(), S.da && (h.setLineDash(S.da), h.lineDashOffset = S.do)), l = n[r].trNodes, a = l.length, s = 0; s < a; s += 1) l[s].t === "m" ? h.moveTo(l[s].p[0], l[s].p[1]) : l[s].t === "c" ? h.bezierCurveTo(l[s].pts[0], l[s].pts[1], l[s].pts[2], l[s].pts[3], l[s].pts[4], l[s].pts[5]) : h.closePath();
                    (m === "st" || m === "gs") && (o.ctxStroke(), S.da && h.setLineDash(this.dashResetter))
                }
                m !== "st" && m !== "gs" && this.globalData.renderer.ctxFill(S.r), o.restore()
            }
        }, CVShapeElement.prototype.renderShape = function (t, e, r, i) {
            var s, a = e.length - 1, n;
            for (n = t, s = a; s >= 0; s -= 1) e[s].ty === "tr" ? (n = r[s].transform, this.renderShapeTransform(t, n)) : e[s].ty === "sh" || e[s].ty === "el" || e[s].ty === "rc" || e[s].ty === "sr" ? this.renderPath(e[s], r[s]) : e[s].ty === "fl" ? this.renderFill(e[s], r[s], n) : e[s].ty === "st" ? this.renderStroke(e[s], r[s], n) : e[s].ty === "gf" || e[s].ty === "gs" ? this.renderGradientFill(e[s], r[s], n) : e[s].ty === "gr" ? this.renderShape(n, e[s].it, r[s].it) : e[s].ty;
            i && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function (t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var r = t.trNodes, i = e.paths, s, a, n, l = i._length;
                r.length = 0;
                var o = t.transforms.finalTransform;
                for (n = 0; n < l; n += 1) {
                    var h = i.shapes[n];
                    if (h && h.v) {
                        for (a = h._length, s = 1; s < a; s += 1) s === 1 && r.push({
                            t: "m",
                            p: o.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), r.push({t: "c", pts: o.applyToTriplePoints(h.o[s - 1], h.i[s], h.v[s])});
                        a === 1 && r.push({
                            t: "m",
                            p: o.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), h.c && a && (r.push({
                            t: "c",
                            pts: o.applyToTriplePoints(h.o[s - 1], h.i[0], h.v[0])
                        }), r.push({t: "z"}))
                    }
                }
                t.trNodes = r
            }
        }, CVShapeElement.prototype.renderPath = function (t, e) {
            if (t.hd !== !0 && t._shouldRender) {
                var r, i = e.styledShapes.length;
                for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
            }
        }, CVShapeElement.prototype.renderFill = function (t, e, r) {
            var i = e.style;
            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function (t, e, r) {
            var i = e.style, s;
            if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
                var a = this.globalData.canvasContext, n = e.s.v, l = e.e.v;
                if (t.t === 1) s = a.createLinearGradient(n[0], n[1], l[0], l[1]); else {
                    var o = Math.sqrt(Math.pow(n[0] - l[0], 2) + Math.pow(n[1] - l[1], 2)),
                        h = Math.atan2(l[1] - n[1], l[0] - n[0]), m = e.h.v;
                    m >= 1 ? m = .99 : m <= -1 && (m = -.99);
                    var S = o * m, f = Math.cos(h + e.a.v) * S + n[0], b = Math.sin(h + e.a.v) * S + n[1];
                    s = a.createRadialGradient(f, b, 0, n[0], n[1], o)
                }
                var y, d = t.g.p, x = e.g.c, p = 1;
                for (y = 0; y < d; y += 1) e.g._hasOpacity && e.g._collapsable && (p = e.g.o[y * 2 + 1]), s.addColorStop(x[y * 4] / 100, "rgba(" + x[y * 4 + 1] + "," + x[y * 4 + 2] + "," + x[y * 4 + 3] + "," + p + ")");
                i.grd = s
            }
            i.coOp = e.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function (t, e, r) {
            var i = e.style, s = e.d;
            s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function () {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        };

        function CVTextElement(t, e, r) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            }, this.initElement(t, e, r)
        }

        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var r = !1;
            t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var i = this.globalData.fontManager.getFontByName(t.f), s, a, n = t.l, l = this.mHelper;
            this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
            var o, h, m, S, f, b, y, d, x, p, u = this.data.singleShape, c = t.tr * .001 * t.finalSize, v = 0, _ = 0,
                E = !0, T = 0;
            for (s = 0; s < a; s += 1) {
                o = this.globalData.fontManager.getCharData(t.finalText[s], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), h = o && o.data || {}, l.reset(), u && n[s].n && (v = -c, _ += t.yOffset, _ += E ? 1 : 0, E = !1), f = h.shapes ? h.shapes[0].it : [], y = f.length, l.scale(t.finalSize / 100, t.finalSize / 100), u && this.applyTextPropertiesToMatrix(t, l, n[s].line, v, _), x = createSizedArray(y - 1);
                var M = 0;
                for (b = 0; b < y; b += 1) if (f[b].ty === "sh") {
                    for (S = f[b].ks.k.i.length, d = f[b].ks.k, p = [], m = 1; m < S; m += 1) m === 1 && p.push(l.applyToX(d.v[0][0], d.v[0][1], 0), l.applyToY(d.v[0][0], d.v[0][1], 0)), p.push(l.applyToX(d.o[m - 1][0], d.o[m - 1][1], 0), l.applyToY(d.o[m - 1][0], d.o[m - 1][1], 0), l.applyToX(d.i[m][0], d.i[m][1], 0), l.applyToY(d.i[m][0], d.i[m][1], 0), l.applyToX(d.v[m][0], d.v[m][1], 0), l.applyToY(d.v[m][0], d.v[m][1], 0));
                    p.push(l.applyToX(d.o[m - 1][0], d.o[m - 1][1], 0), l.applyToY(d.o[m - 1][0], d.o[m - 1][1], 0), l.applyToX(d.i[0][0], d.i[0][1], 0), l.applyToY(d.i[0][0], d.i[0][1], 0), l.applyToX(d.v[0][0], d.v[0][1], 0), l.applyToY(d.v[0][0], d.v[0][1], 0)), x[M] = p, M += 1
                }
                u && (v += n[s].l, v += c), this.textSpans[T] ? this.textSpans[T].elem = x : this.textSpans[T] = {elem: x}, T += 1
            }
        }, CVTextElement.prototype.renderInnerContent = function () {
            this.validateText();
            var t = this.canvasContext;
            t.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var e, r, i, s, a, n, l = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
            r = o.length;
            var h, m = null, S = null, f = null, b, y, d = this.globalData.renderer;
            for (e = 0; e < r; e += 1) if (!o[e].n) {
                if (h = l[e], h && (d.save(), d.ctxTransform(h.p), d.ctxOpacity(h.o)), this.fill) {
                    for (h && h.fc ? m !== h.fc && (d.ctxFillStyle(h.fc), m = h.fc) : m !== this.values.fill && (m = this.values.fill, d.ctxFillStyle(this.values.fill)), b = this.textSpans[e].elem, s = b.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1) for (y = b[i], n = y.length, this.globalData.canvasContext.moveTo(y[0], y[1]), a = 2; a < n; a += 6) this.globalData.canvasContext.bezierCurveTo(y[a], y[a + 1], y[a + 2], y[a + 3], y[a + 4], y[a + 5]);
                    this.globalData.canvasContext.closePath(), d.ctxFill()
                }
                if (this.stroke) {
                    for (h && h.sw ? f !== h.sw && (f = h.sw, d.ctxLineWidth(h.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), h && h.sc ? S !== h.sc && (S = h.sc, d.ctxStrokeStyle(h.sc)) : S !== this.values.stroke && (S = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), b = this.textSpans[e].elem, s = b.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1) for (y = b[i], n = y.length, this.globalData.canvasContext.moveTo(y[0], y[1]), a = 2; a < n; a += 6) this.globalData.canvasContext.bezierCurveTo(y[a], y[a + 1], y[a + 2], y[a + 3], y[a + 4], y[a + 5]);
                    this.globalData.canvasContext.closePath(), d.ctxStroke()
                }
                h && this.globalData.renderer.restore()
            }
        };

        function CVImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
        }

        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function () {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e = t.getContext("2d"), r = this.img.width, i = this.img.height, s = r / i,
                    a = this.assetData.w / this.assetData.h, n, l,
                    o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                s > a && o === "xMidYMid slice" || s < a && o !== "xMidYMid slice" ? (l = i, n = l * a) : (n = r, l = n / a), e.drawImage(this.img, (r - n) / 2, (i - l) / 2, n, l, 0, 0, this.assetData.w, this.assetData.h), this.img = t
            }
        }, CVImageElement.prototype.renderInnerContent = function () {
            this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function () {
            this.img = null
        };

        function CVSolidElement(t, e, r) {
            this.initElement(t, e, r)
        }

        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function () {
            this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        };

        function CanvasRendererBase() {
        }

        extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function (t) {
            return new CVShapeElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function (t) {
            return new CVTextElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function (t) {
            return new CVImageElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function (t) {
            return new CVSolidElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function (t) {
            t[0] === 1 && t[1] === 0 && t[4] === 0 && t[5] === 1 && t[12] === 0 && t[13] === 0 || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function (t) {
            this.canvasContext.globalAlpha *= t < 0 ? 0 : t
        }, CanvasRendererBase.prototype.ctxFillStyle = function (t) {
            this.canvasContext.fillStyle = t
        }, CanvasRendererBase.prototype.ctxStrokeStyle = function (t) {
            this.canvasContext.strokeStyle = t
        }, CanvasRendererBase.prototype.ctxLineWidth = function (t) {
            this.canvasContext.lineWidth = t
        }, CanvasRendererBase.prototype.ctxLineCap = function (t) {
            this.canvasContext.lineCap = t
        }, CanvasRendererBase.prototype.ctxLineJoin = function (t) {
            this.canvasContext.lineJoin = t
        }, CanvasRendererBase.prototype.ctxMiterLimit = function (t) {
            this.canvasContext.miterLimit = t
        }, CanvasRendererBase.prototype.ctxFill = function (t) {
            this.canvasContext.fill(t)
        }, CanvasRendererBase.prototype.ctxFillRect = function (t, e, r, i) {
            this.canvasContext.fillRect(t, e, r, i)
        }, CanvasRendererBase.prototype.ctxStroke = function () {
            this.canvasContext.stroke()
        }, CanvasRendererBase.prototype.reset = function () {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return
            }
            this.contextData.reset()
        }, CanvasRendererBase.prototype.save = function () {
            this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function (t) {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return
            }
            t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)
        }, CanvasRendererBase.prototype.configAnimation = function (t) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var e = this.animationItem.container.style;
                e.width = "100%", e.height = "100%";
                var r = "0px 0px 0px";
                e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
            } else this.canvasContext = this.renderConfig.context;
            this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function (t, e) {
            this.reset();
            var r, i;
            t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr);
            var s, a;
            if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                var n = this.renderConfig.preserveAspectRatio.split(" "), l = n[1] || "meet", o = n[0] || "xMidYMid",
                    h = o.substr(0, 4), m = o.substr(4);
                s = r / i, a = this.transformCanvas.w / this.transformCanvas.h, a > s && l === "meet" || a < s && l === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), h === "xMid" && (a < s && l === "meet" || a > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : h === "xMax" && (a < s && l === "meet" || a > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, m === "YMid" && (a > s && l === "meet" || a < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : m === "YMax" && (a > s && l === "meet" || a < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0
            } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function () {
            this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
            var t, e = this.layers ? this.layers.length : 0;
            for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function (t, e) {
            if (!(this.renderedFrame === t && this.renderConfig.clearCanvas === !0 && !e || this.destroyed || t === -1)) {
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                var r, i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), r = i - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                if (this.globalData._mdf) {
                    for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                    this.renderConfig.clearCanvas !== !0 && this.restore()
                }
            }
        }, CanvasRendererBase.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
                var r = this.createItem(this.layers[t], this, this.globalData);
                e[t] = r, r.initExpressions()
            }
        }, CanvasRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                t.checkParenting()
            }
        }, CanvasRendererBase.prototype.hide = function () {
            this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function () {
            this.animationItem.container.style.display = "block"
        };

        function CanvasContext() {
            this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
        }

        function CVContextData() {
            this.stack = [], this.cArrPos = 0, this.cTr = new Matrix;
            var t, e = 15;
            for (t = 0; t < e; t += 1) {
                var r = new CanvasContext;
                this.stack[t] = r
            }
            this._length = e, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
        }

        CVContextData.prototype.duplicate = function () {
            var t = this._length * 2, e = 0;
            for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext;
            this._length = t
        }, CVContextData.prototype.reset = function () {
            this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
        }, CVContextData.prototype.restore = function (t) {
            this.cArrPos -= 1;
            var e = this.stack[this.cArrPos], r = e.transform, i, s = this.cTr.props;
            for (i = 0; i < 16; i += 1) s[i] = r[i];
            if (t) {
                this.nativeContext.restore();
                var a = this.stack[this.cArrPos + 1];
                this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
            }
            this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (t || e.opacity !== -1 && this.currentOpacity !== e.opacity) && (this.nativeContext.globalAlpha = e.opacity, this.currentOpacity = e.opacity), this.currentFillStyle = e.fillStyle, this.currentStrokeStyle = e.strokeStyle, this.currentLineWidth = e.lineWidth, this.currentLineCap = e.lineCap, this.currentLineJoin = e.lineJoin, this.currentMiterLimit = e.miterLimit
        }, CVContextData.prototype.save = function (t) {
            t && this.nativeContext.save();
            var e = this.cTr.props;
            this._length <= this.cArrPos && this.duplicate();
            var r = this.stack[this.cArrPos], i;
            for (i = 0; i < 16; i += 1) r.transform[i] = e[i];
            this.cArrPos += 1;
            var s = this.stack[this.cArrPos];
            s.opacity = r.opacity, s.fillStyle = r.fillStyle, s.strokeStyle = r.strokeStyle, s.lineWidth = r.lineWidth, s.lineCap = r.lineCap, s.lineJoin = r.lineJoin, s.miterLimit = r.miterLimit
        }, CVContextData.prototype.setOpacity = function (t) {
            this.stack[this.cArrPos].opacity = t
        }, CVContextData.prototype.setContext = function (t) {
            this.nativeContext = t
        }, CVContextData.prototype.fillStyle = function (t) {
            this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
        }, CVContextData.prototype.strokeStyle = function (t) {
            this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
        }, CVContextData.prototype.lineWidth = function (t) {
            this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
        }, CVContextData.prototype.lineCap = function (t) {
            this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
        }, CVContextData.prototype.lineJoin = function (t) {
            this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
        }, CVContextData.prototype.miterLimit = function (t) {
            this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
        }, CVContextData.prototype.transform = function (t) {
            this.transformMat.cloneFromProps(t);
            var e = this.cTr;
            this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
            var r = e.props;
            this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
        }, CVContextData.prototype.opacity = function (t) {
            var e = this.stack[this.cArrPos].opacity;
            e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
        }, CVContextData.prototype.fill = function (t) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
        }, CVContextData.prototype.fillRect = function (t, e, r, i) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, r, i)
        }, CVContextData.prototype.stroke = function () {
            this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
        };

        function CVCompElement(t, e, r) {
            this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0}
        }

        extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function () {
            var t = this.canvasContext;
            t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip();
            var e, r = this.layers.length;
            for (e = r - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }, CVCompElement.prototype.destroy = function () {
            var t, e = this.layers.length;
            for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this)
        };

        function CanvasRenderer(t, e) {
            this.animationItem = t, this.renderConfig = {
                clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : !0,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || !1,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                className: e && e.className || "",
                id: e && e.id || "",
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
        }

        extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this)
        };

        function HBaseElement() {
        }

        HBaseElement.prototype = {
            checkBlendMode: function () {
            }, initRendererElement: function () {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
            }, createContainerElements: function () {
                this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
            }, renderElement: function () {
                var e = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var r = this.finalTransform.mat.toCSS();
                    e.transform = r, e.webkitTransform = r
                }
                this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
            }, renderFrame: function () {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
            }, destroy: function () {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
            }, createRenderableComponents: function () {
                this.maskManager = new MaskElement(this.data, this, this.globalData)
            }, addEffects: function () {
            }, setMatte: function () {
            }
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;

        function HSolidElement(t, e, r) {
            this.initElement(t, e, r)
        }

        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function () {
            var t;
            this.data.hasMask ? (t = createNS("rect"), t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (t = createTag("div"), t.style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        };

        function HShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }

        extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function () {
            var t;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement; else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function (t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
            var r = t.sh.v, i = t.transformers, s, a = r._length, n, l, o, h;
            if (!(a <= 1)) {
                for (s = 0; s < a - 1; s += 1) n = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[s + 1]), h = this.getTransformedPoint(i, r.v[s + 1]), this.checkBounds(n, l, o, h, e);
                r.c && (n = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[0]), h = this.getTransformedPoint(i, r.v[0]), this.checkBounds(n, l, o, h, e))
            }
        }, HShapeElement.prototype.checkBounds = function (t, e, r, i, s) {
            this.getBoundsOfCurve(t, e, r, i);
            var a = this.shapeBoundingBox;
            s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, i) {
            for (var s = [[t[0], i[0]], [t[1], i[1]]], a, n, l, o, h, m, S, f = 0; f < 2; ++f) n = 6 * t[f] - 12 * e[f] + 6 * r[f], a = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f], l = 3 * e[f] - 3 * t[f], n |= 0, a |= 0, l |= 0, a === 0 && n === 0 || (a === 0 ? (o = -l / n, o > 0 && o < 1 && s[f].push(this.calculateF(o, t, e, r, i, f))) : (h = n * n - 4 * l * a, h >= 0 && (m = (-n + bmSqrt(h)) / (2 * a), m > 0 && m < 1 && s[f].push(this.calculateF(m, t, e, r, i, f)), S = (-n - bmSqrt(h)) / (2 * a), S > 0 && S < 1 && s[f].push(this.calculateF(S, t, e, r, i, f)))));
            this.shapeBoundingBox.left = bmMin.apply(null, s[0]), this.shapeBoundingBox.top = bmMin.apply(null, s[1]), this.shapeBoundingBox.right = bmMax.apply(null, s[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, s[1])
        }, HShapeElement.prototype.calculateF = function (t, e, r, i, s, a) {
            return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * s[a]
        }, HShapeElement.prototype.calculateBoundingBox = function (t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function (t, e) {
            var r = 0;
            if (t.keyframes) {
                for (var i = 0; i < t.keyframes.length; i += 1) {
                    var s = t.keyframes[i].s;
                    s > r && (r = s)
                }
                r *= t.mult
            } else r = t.v * t.mult;
            e.x -= r, e.xMax += r, e.y -= r, e.yMax += r
        }, HShapeElement.prototype.currentBoxContains = function (t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function () {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox, e = 999999;
                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                var r = !1;
                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                    this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var i = this.shapeCont.style,
                        s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    i.transform = s, i.webkitTransform = s
                }
            }
        };

        function HTextElement(t, e, r) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
        }

        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function () {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), this.innerElem = t
            } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting()
        }, HTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style, r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
            var i = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars) if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", i.fClass) this.innerElem.className = i.fClass; else {
                e.fontFamily = i.fFamily;
                var s = t.fWeight, a = t.fStyle;
                e.fontStyle = a, e.fontWeight = s
            }
            var n, l, o = t.l;
            l = o.length;
            var h, m, S, f = this.mHelper, b, y = "", d = 0;
            for (n = 0; n < l; n += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[d] ? h = this.textPaths[d] : (h = createNS("path"), h.setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? (m = this.textSpans[d], S = m.children[0]) : (m = createTag("div"), m.style.lineHeight = 0, S = createNS("svg"), S.appendChild(h), styleDiv(m)))) : this.isMasked ? h = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (m = this.textSpans[d], h = this.textPaths[d]) : (m = createTag("span"), styleDiv(m), h = createTag("span"), styleDiv(h), m.appendChild(h)), this.globalData.fontManager.chars) {
                    var x = this.globalData.fontManager.getCharData(t.finalText[n], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily),
                        p;
                    if (x ? p = x.data : p = null, f.reset(), p && p.shapes && p.shapes.length && (b = p.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), y = this.createPathShape(f, b), h.setAttribute("d", y)), this.isMasked) this.innerElem.appendChild(h); else {
                        if (this.innerElem.appendChild(m), p && p.shapes) {
                            document.body.appendChild(S);
                            var u = S.getBBox();
                            S.setAttribute("width", u.width + 2), S.setAttribute("height", u.height + 2), S.setAttribute("viewBox", u.x - 1 + " " + (u.y - 1) + " " + (u.width + 2) + " " + (u.height + 2));
                            var c = S.style, v = "translate(" + (u.x - 1) + "px," + (u.y - 1) + "px)";
                            c.transform = v, c.webkitTransform = v, o[n].yOffset = u.y - 1
                        } else S.setAttribute("width", 1), S.setAttribute("height", 1);
                        m.appendChild(S)
                    }
                } else if (h.textContent = o[n].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h); else {
                    this.innerElem.appendChild(m);
                    var _ = h.style, E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    _.transform = E, _.webkitTransform = E
                }
                this.isMasked ? this.textSpans[d] = h : this.textSpans[d] = m, this.textSpans[d].style.display = "block", this.textPaths[d] = h, d += 1
            }
            for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
        }, HTextElement.prototype.renderInnerContent = function () {
            this.validateText();
            var t;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                    var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t.transform = e, t.webkitTransform = e
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
                var r, i, s = 0, a = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
                i = n.length;
                var l, o, h;
                for (r = 0; r < i; r += 1) n[r].n ? s += 1 : (o = this.textSpans[r], h = this.textPaths[r], l = a[s], s += 1, l._mdf.m && (this.isMasked ? o.setAttribute("transform", l.m) : (o.style.webkitTransform = l.m, o.style.transform = l.m)), o.style.opacity = l.o, l.sw && l._mdf.sw && h.setAttribute("stroke-width", l.sw), l.sc && l._mdf.sc && h.setAttribute("stroke", l.sc), l.fc && l._mdf.fc && (h.setAttribute("fill", l.fc), h.style.color = l.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var m = this.innerElem.getBBox();
                    this.currentBBox.w !== m.width && (this.currentBBox.w = m.width, this.svgElement.setAttribute("width", m.width)), this.currentBBox.h !== m.height && (this.currentBBox.h = m.height, this.svgElement.setAttribute("height", m.height));
                    var S = 1;
                    if (this.currentBBox.w !== m.width + S * 2 || this.currentBBox.h !== m.height + S * 2 || this.currentBBox.x !== m.x - S || this.currentBBox.y !== m.y - S) {
                        this.currentBBox.w = m.width + S * 2, this.currentBBox.h = m.height + S * 2, this.currentBBox.x = m.x - S, this.currentBBox.y = m.y - S, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                        var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = f, t.webkitTransform = f
                    }
                }
            }
        };

        function HCameraElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
            var i = PropertyFactory.getProp;
            if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                var s, a = t.ks.or.k.length;
                for (s = 0; s < a; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
            }
            this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {mProp: this}
        }

        extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function () {
            var t, e = this.comp.threeDElements.length, r, i, s;
            for (t = 0; t < e; t += 1) if (r = this.comp.threeDElements[t], r.type === "3d") {
                i = r.perspectiveElem.style, s = r.container.style;
                var a = this.pe.v + "px", n = "0px 0px 0px", l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                i.perspective = a, i.webkitPerspective = a, s.transformOrigin = n, s.mozTransformOrigin = n, s.webkitTransformOrigin = n, i.transform = l, i.webkitTransform = l
            }
        }, HCameraElement.prototype.createElements = function () {
        }, HCameraElement.prototype.hide = function () {
        }, HCameraElement.prototype.renderFrame = function () {
            var t = this._isFirstFrame, e, r;
            if (this.hierarchy) for (r = this.hierarchy.length, e = 0; e < r; e += 1) t = this.hierarchy[e].finalTransform.mProp._mdf || t;
            if (t || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy) for (r = this.hierarchy.length - 1, e = r; e >= 0; e -= 1) {
                    var i = this.hierarchy[e].finalTransform.mProp;
                    this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                    var s;
                    this.p ? s = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : s = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
                        n = [s[0] / a, s[1] / a, s[2] / a], l = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                        o = Math.atan2(n[1], l), h = Math.atan2(n[0], -n[2]);
                    this.mat.rotateY(h).rotateX(-o)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var m = !this._prevMat.equals(this.mat);
                if ((m || this.pe._mdf) && this.comp.threeDElements) {
                    r = this.comp.threeDElements.length;
                    var S, f, b;
                    for (e = 0; e < r; e += 1) if (S = this.comp.threeDElements[e], S.type === "3d") {
                        if (m) {
                            var y = this.mat.toCSS();
                            b = S.container.style, b.transform = y, b.webkitTransform = y
                        }
                        this.pe._mdf && (f = S.perspectiveElem.style, f.perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px")
                    }
                    this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function () {
        }, HCameraElement.prototype.getBaseElement = function () {
            return null
        };

        function HImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
        }

        extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData), e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        };

        function HybridRendererBase(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                }
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                t.checkParenting()
            }
        }, HybridRendererBase.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
                var i = this.layers[e];
                if (!i.ddd || !this.supports3d) if (this.threeDElements) this.addTo3dContainer(r, e); else {
                    for (var s = 0, a, n, l; s < e;) this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (n = this.elements[s], l = this.layers[s].ddd ? this.getThreeDContainerByPos(s) : n.getBaseElement(), a = l || a), s += 1;
                    a ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(r, a) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(r)
                } else this.addTo3dContainer(r, e)
            }
        }, HybridRendererBase.prototype.createShape = function (t) {
            return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function (t) {
            return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function (t) {
            return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function (t) {
            return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function (t) {
            return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function (t) {
            for (var e = 0, r = this.threeDElements.length; e < r;) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1
            }
            return null
        }, HybridRendererBase.prototype.createThreeDContainer = function (t, e) {
            var r = createTag("div"), i, s;
            styleDiv(r);
            var a = createTag("div");
            if (styleDiv(a), e === "3d") {
                i = r.style, i.width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
                var n = "50% 50%";
                i.webkitTransformOrigin = n, i.mozTransformOrigin = n, i.transformOrigin = n, s = a.style;
                var l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                s.transform = l, s.webkitTransform = l
            }
            r.appendChild(a);
            var o = {container: a, perspectiveElem: r, startPos: t, endPos: t, type: e};
            return this.threeDElements.push(o), o
        }, HybridRendererBase.prototype.build3dContainers = function () {
            var t, e = this.layers.length, r, i = "";
            for (t = 0; t < e; t += 1) this.layers[t].ddd && this.layers[t].ty !== 3 ? (i !== "3d" && (i = "3d", r = this.createThreeDContainer(t, "3d")), r.endPos = Math.max(r.endPos, t)) : (i !== "2d" && (i = "2d", r = this.createThreeDContainer(t, "2d")), r.endPos = Math.max(r.endPos, t));
            for (e = this.threeDElements.length, t = e - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
            for (var r = 0, i = this.threeDElements.length; r < i;) {
                if (e <= this.threeDElements[r].endPos) {
                    for (var s = this.threeDElements[r].startPos, a; s < e;) this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
                    a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
                    break
                }
                r += 1
            }
        }, HybridRendererBase.prototype.configAnimation = function (t) {
            var e = createTag("div"), r = this.animationItem.wrapper, i = e.style;
            i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
            var s = createNS("svg");
            s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
            var a = createNS("defs");
            s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function () {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function () {
            var t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, r = t / e,
                i = this.globalData.compSize.w / this.globalData.compSize.h, s, a, n, l;
            i > r ? (s = t / this.globalData.compSize.w, a = t / this.globalData.compSize.w, n = 0, l = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (s = e / this.globalData.compSize.h, a = e / this.globalData.compSize.h, n = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2, l = 0);
            var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + a + ",0,0,0,0,1,0," + n + "," + l + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function () {
            this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function () {
            this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function () {
            if (this.buildAllItems(), this.camera) this.camera.setup(); else {
                var t = this.globalData.compSize.w, e = this.globalData.compSize.h, r, i = this.threeDElements.length;
                for (r = 0; r < i; r += 1) {
                    var s = this.threeDElements[r].perspectiveElem.style;
                    s.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", s.perspective = s.webkitPerspective
                }
            }
        }, HybridRendererBase.prototype.searchExtraCompositions = function (t) {
            var e, r = t.length, i = createTag("div");
            for (e = 0; e < r; e += 1) if (t[e].xt) {
                var s = this.createComp(t[e], i, this.globalData.comp, null);
                s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
            }
        };

        function HCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0}
        }

        extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function () {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function (t, e) {
            for (var r = 0, i; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
            i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
        }, HCompElement.prototype.createComp = function (t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };

        function HybridRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && e.hideOnTransparent === !1),
                filterSize: {
                    width: e && e.filterSize && e.filterSize.width || "400%",
                    height: e && e.filterSize && e.filterSize.height || "400%",
                    x: e && e.filterSize && e.filterSize.x || "-100%",
                    y: e && e.filterSize && e.filterSize.y || "-100%"
                },
                runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
            }, this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function (t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };
        var CompExpressionInterface = function () {
            return function (t) {
                function e(r) {
                    for (var i = 0, s = t.layers.length; i < s;) {
                        if (t.layers[i].nm === r || t.layers[i].ind === r) return t.elements[i].layerInterface;
                        i += 1
                    }
                    return null
                }

                return Object.defineProperty(e, "_name", {value: t.data.nm}), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
            }
        }();

        function _typeof$2(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function (r) {
                return typeof r
            } : _typeof$2 = function (r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$2(t)
        }

        function seedRandom(t, e) {
            var r = this, i = 256, s = 6, a = 52, n = "random", l = e.pow(i, s), o = e.pow(2, a), h = o * 2, m = i - 1,
                S;

            function f(c, v, _) {
                var E = [];
                v = v === !0 ? {entropy: !0} : v || {};
                var T = x(d(v.entropy ? [c, u(t)] : c === null ? p() : c, 3), E), M = new b(E), I = function () {
                    for (var V = M.g(s), L = l, R = 0; V < o;) V = (V + R) * i, L *= i, R = M.g(1);
                    for (; V >= h;) V /= 2, L /= 2, R >>>= 1;
                    return (V + R) / L
                };
                return I.int32 = function () {
                    return M.g(4) | 0
                }, I.quick = function () {
                    return M.g(4) / 4294967296
                }, I.double = I, x(u(M.S), t), (v.pass || _ || function (O, V, L, R) {
                    return R && (R.S && y(R, M), O.state = function () {
                        return y(M, {})
                    }), L ? (e[n] = O, V) : O
                })(I, T, "global" in v ? v.global : this == e, v.state)
            }

            e["seed" + n] = f;

            function b(c) {
                var v, _ = c.length, E = this, T = 0, M = E.i = E.j = 0, I = E.S = [];
                for (_ || (c = [_++]); T < i;) I[T] = T++;
                for (T = 0; T < i; T++) I[T] = I[M = m & M + c[T % _] + (v = I[T])], I[M] = v;
                E.g = function (O) {
                    for (var V, L = 0, R = E.i, B = E.j, k = E.S; O--;) V = k[R = m & R + 1], L = L * i + k[m & (k[R] = k[B = m & B + V]) + (k[B] = V)];
                    return E.i = R, E.j = B, L
                }
            }

            function y(c, v) {
                return v.i = c.i, v.j = c.j, v.S = c.S.slice(), v
            }

            function d(c, v) {
                var _ = [], E = _typeof$2(c), T;
                if (v && E == "object") for (T in c) try {
                    _.push(d(c[T], v - 1))
                } catch {
                }
                return _.length ? _ : E == "string" ? c : c + "\0"
            }

            function x(c, v) {
                for (var _ = c + "", E, T = 0; T < _.length;) v[m & T] = m & (E ^= v[m & T] * 19) + _.charCodeAt(T++);
                return u(v)
            }

            function p() {
                try {
                    var c = new Uint8Array(i);
                    return (r.crypto || r.msCrypto).getRandomValues(c), u(c)
                } catch {
                    var v = r.navigator, _ = v && v.plugins;
                    return [+new Date, r, _, r.screen, u(t)]
                }
            }

            function u(c) {
                return String.fromCharCode.apply(0, c)
            }

            x(e.random(), t)
        }

        function initialize$2(t) {
            seedRandom([], t)
        }

        var propTypes = {SHAPE: "shape"};

        function _typeof$1(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function (r) {
                return typeof r
            } : _typeof$1 = function (r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof$1(t)
        }

        var ExpressionManager = function () {
            var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null,
                frames = null, _lottieGlobal = {};
            initialize$2(BMMath);

            function resetFrame() {
                _lottieGlobal = {}
            }

            function $bm_isInstanceOfArray(t) {
                return t.constructor === Array || t.constructor === Float32Array
            }

            function isNumerable(t, e) {
                return t === "number" || e instanceof Number || t === "boolean" || t === "string"
            }

            function $bm_neg(t) {
                var e = _typeof$1(t);
                if (e === "number" || t instanceof Number || e === "boolean") return -t;
                if ($bm_isInstanceOfArray(t)) {
                    var r, i = t.length, s = [];
                    for (r = 0; r < i; r += 1) s[r] = -t[r];
                    return s
                }
                return t.propType ? t.v : -t
            }

            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(t, e) {
                var r = _typeof$1(t), i = _typeof$1(e);
                if (isNumerable(r, t) && isNumerable(i, e) || r === "string" || i === "string") return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] += e, t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t + e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var s = 0, a = t.length, n = e.length, l = []; s < a || s < n;) (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? l[s] = t[s] + e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                    return l
                }
                return 0
            }

            var add = sum;

            function sub(t, e) {
                var r = _typeof$1(t), i = _typeof$1(e);
                if (isNumerable(r, t) && isNumerable(i, e)) return r === "string" && (t = parseInt(t, 10)), i === "string" && (e = parseInt(e, 10)), t - e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] -= e, t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t - e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var s = 0, a = t.length, n = e.length, l = []; s < a || s < n;) (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? l[s] = t[s] - e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                    return l
                }
                return 0
            }

            function mul(t, e) {
                var r = _typeof$1(t), i = _typeof$1(e), s;
                if (isNumerable(r, t) && isNumerable(i, e)) return t * e;
                var a, n;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                    for (n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t[a] * e;
                    return s
                }
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                    for (n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t * e[a];
                    return s
                }
                return 0
            }

            function div(t, e) {
                var r = _typeof$1(t), i = _typeof$1(e), s;
                if (isNumerable(r, t) && isNumerable(i, e)) return t / e;
                var a, n;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
                    for (n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t[a] / e;
                    return s
                }
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
                    for (n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1) s[a] = t / e[a];
                    return s
                }
                return 0
            }

            function mod(t, e) {
                return typeof t == "string" && (t = parseInt(t, 10)), typeof e == "string" && (e = parseInt(e, 10)), t % e
            }

            var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;

            function clamp(t, e, r) {
                if (e > r) {
                    var i = r;
                    r = e, e = i
                }
                return Math.min(Math.max(t, e), r)
            }

            function radiansToDegrees(t) {
                return t / degToRads
            }

            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(t) {
                return t * degToRads
            }

            var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(t, e) {
                if (typeof t == "number" || t instanceof Number) return e = e || 0, Math.abs(t - e);
                e || (e = helperLengthArray);
                var r, i = Math.min(t.length, e.length), s = 0;
                for (r = 0; r < i; r += 1) s += Math.pow(e[r] - t[r], 2);
                return Math.sqrt(s)
            }

            function normalize(t) {
                return div(t, length(t))
            }

            function rgbToHsl(t) {
                var e = t[0], r = t[1], i = t[2], s = Math.max(e, r, i), a = Math.min(e, r, i), n, l, o = (s + a) / 2;
                if (s === a) n = 0, l = 0; else {
                    var h = s - a;
                    switch (l = o > .5 ? h / (2 - s - a) : h / (s + a), s) {
                        case e:
                            n = (r - i) / h + (r < i ? 6 : 0);
                            break;
                        case r:
                            n = (i - e) / h + 2;
                            break;
                        case i:
                            n = (e - r) / h + 4;
                            break
                    }
                    n /= 6
                }
                return [n, l, o, t[3]]
            }

            function hue2rgb(t, e, r) {
                return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function hslToRgb(t) {
                var e = t[0], r = t[1], i = t[2], s, a, n;
                if (r === 0) s = i, n = i, a = i; else {
                    var l = i < .5 ? i * (1 + r) : i + r - i * r, o = 2 * i - l;
                    s = hue2rgb(o, l, e + 1 / 3), a = hue2rgb(o, l, e), n = hue2rgb(o, l, e - 1 / 3)
                }
                return [s, a, n, t[3]]
            }

            function linear(t, e, r, i, s) {
                if ((i === void 0 || s === void 0) && (i = e, s = r, e = 0, r = 1), r < e) {
                    var a = r;
                    r = e, e = a
                }
                if (t <= e) return i;
                if (t >= r) return s;
                var n = r === e ? 0 : (t - e) / (r - e);
                if (!i.length) return i + (s - i) * n;
                var l, o = i.length, h = createTypedArray("float32", o);
                for (l = 0; l < o; l += 1) h[l] = i[l] + (s[l] - i[l]) * n;
                return h
            }

            function random(t, e) {
                if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                    var r, i = e.length;
                    t || (t = createTypedArray("float32", i));
                    var s = createTypedArray("float32", i), a = BMMath.random();
                    for (r = 0; r < i; r += 1) s[r] = t[r] + a * (e[r] - t[r]);
                    return s
                }
                t === void 0 && (t = 0);
                var n = BMMath.random();
                return t + n * (e - t)
            }

            function createPath(t, e, r, i) {
                var s, a = t.length, n = shapePool.newElement();
                n.setPathData(!!i, a);
                var l = [0, 0], o, h;
                for (s = 0; s < a; s += 1) o = e && e[s] ? e[s] : l, h = r && r[s] ? r[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
                return n
            }

            function initiateExpression(elem, data, property) {
                function noOp(t) {
                    return t
                }

                if (!elem.globalData.renderConfig.runExpressions) return noOp;
                var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val),
                    _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform,
                    content, effect, thisProperty = property;
                thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                    get: function () {
                        return thisProperty.v
                    }
                }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                    outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0,
                    height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out,
                    smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint,
                    scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt,
                    expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                    numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0,
                    wiggle = (function t(e, r) {
                        var i, s, a = this.pv.length ? this.pv.length : 1, n = createTypedArray("float32", a);
                        e = 5;
                        var l = Math.floor(time * e);
                        for (i = 0, s = 0; i < l;) {
                            for (s = 0; s < a; s += 1) n[s] += -r + r * 2 * BMMath.random();
                            i += 1
                        }
                        var o = time * e, h = o - Math.floor(o), m = createTypedArray("float32", a);
                        if (a > 1) {
                            for (s = 0; s < a; s += 1) m[s] = this.pv[s] + n[s] + (-r + r * 2 * BMMath.random()) * h;
                            return m
                        }
                        return this.pv + n[0] + (-r + r * 2 * BMMath.random()) * h
                    }).bind(this);
                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));

                function loopInDuration(t, e) {
                    return loopIn(t, e, !0)
                }

                function loopOutDuration(t, e) {
                    return loopOut(t, e, !0)
                }

                this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

                function lookAt(t, e) {
                    var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                        i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads,
                        s = -Math.atan2(r[1], r[2]) / degToRads;
                    return [s, i, 0]
                }

                function easeOut(t, e, r, i, s) {
                    return applyEase(easeOutBez, t, e, r, i, s)
                }

                function easeIn(t, e, r, i, s) {
                    return applyEase(easeInBez, t, e, r, i, s)
                }

                function ease(t, e, r, i, s) {
                    return applyEase(easeInOutBez, t, e, r, i, s)
                }

                function applyEase(t, e, r, i, s, a) {
                    s === void 0 ? (s = r, a = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                    var n = t(e);
                    if ($bm_isInstanceOfArray(s)) {
                        var l, o = s.length, h = createTypedArray("float32", o);
                        for (l = 0; l < o; l += 1) h[l] = (a[l] - s[l]) * n + s[l];
                        return h
                    }
                    return (a - s) * n + s
                }

                function nearestKey(t) {
                    var e, r = data.k.length, i, s;
                    if (!data.k.length || typeof data.k[0] == "number") i = 0, s = 0; else if (i = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t) i = 1, s = data.k[0].t; else {
                        for (e = 0; e < r - 1; e += 1) if (t === data.k[e].t) {
                            i = e + 1, s = data.k[e].t;
                            break
                        } else if (t > data.k[e].t && t < data.k[e + 1].t) {
                            t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, s = data.k[e + 1].t) : (i = e + 1, s = data.k[e].t);
                            break
                        }
                        i === -1 && (i = e + 1, s = data.k[e].t)
                    }
                    var a = {};
                    return a.index = i, a.time = s / elem.comp.globalData.frameRate, a
                }

                function key(t) {
                    var e, r, i;
                    if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t);
                    t -= 1, e = {time: data.k[t].t / elem.comp.globalData.frameRate, value: []};
                    var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                    for (i = s.length, r = 0; r < i; r += 1) e[r] = s[r], e.value[r] = s[r];
                    return e
                }

                function framesToTime(t, e) {
                    return e || (e = elem.comp.globalData.frameRate), t / e
                }

                function timeToFrames(t, e) {
                    return !t && t !== 0 && (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                }

                function seedRandom(t) {
                    BMMath.seedrandom(randSeed + t)
                }

                function sourceRectAtTime() {
                    return elem.sourceRectAtTime()
                }

                function substring(t, e) {
                    return typeof value == "string" ? e === void 0 ? value.substring(t) : value.substring(t, e) : ""
                }

                function substr(t, e) {
                    return typeof value == "string" ? e === void 0 ? value.substr(t) : value.substr(t, e) : ""
                }

                function posterizeTime(t) {
                    time = t === 0 ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                }

                var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind,
                    hasParent = !!(elem.hierarchy && elem.hierarchy.length), parent,
                    randSeed = Math.floor(Math.random() * 1e6), globalData = elem.globalData;

                function executeExpression(t) {
                    return value = t, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt)
                }

                return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
            }

            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
        }(), Expressions = function () {
            var t = {};
            t.initExpressions = e, t.resetFrame = ExpressionManager.resetFrame;

            function e(r) {
                var i = 0, s = [];

                function a() {
                    i += 1
                }

                function n() {
                    i -= 1, i === 0 && o()
                }

                function l(h) {
                    s.indexOf(h) === -1 && s.push(h)
                }

                function o() {
                    var h, m = s.length;
                    for (h = 0; h < m; h += 1) s[h].release();
                    s.length = 0
                }

                r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = a, r.renderer.globalData.popExpression = n, r.renderer.globalData.registerExpressionProperty = l
            }

            return t
        }(), MaskManagerInterface = function () {
            function t(r, i) {
                this._mask = r, this._data = i
            }

            Object.defineProperty(t.prototype, "maskPath", {
                get: function () {
                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
            }), Object.defineProperty(t.prototype, "maskOpacity", {
                get: function () {
                    return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100
                }
            });
            var e = function (i) {
                var s = createSizedArray(i.viewData.length), a, n = i.viewData.length;
                for (a = 0; a < n; a += 1) s[a] = new t(i.viewData[a], i.masksProperties[a]);
                var l = function (h) {
                    for (a = 0; a < n;) {
                        if (i.masksProperties[a].nm === h) return s[a];
                        a += 1
                    }
                    return null
                };
                return l
            };
            return e
        }(), ExpressionPropertyInterface = function () {
            var t = {pv: 0, v: 0, mult: 1}, e = {pv: [0, 0, 0], v: [0, 0, 0], mult: 1};

            function r(n, l, o) {
                Object.defineProperty(n, "velocity", {
                    get: function () {
                        return l.getVelocityAtTime(l.comp.currentFrame)
                    }
                }), n.numKeys = l.keyframes ? l.keyframes.length : 0, n.key = function (h) {
                    if (!n.numKeys) return 0;
                    var m = "";
                    "s" in l.keyframes[h - 1] ? m = l.keyframes[h - 1].s : "e" in l.keyframes[h - 2] ? m = l.keyframes[h - 2].e : m = l.keyframes[h - 2].s;
                    var S = o === "unidimensional" ? new Number(m) : Object.assign({}, m);
                    return S.time = l.keyframes[h - 1].t / l.elem.comp.globalData.frameRate, S.value = o === "unidimensional" ? m[0] : m, S
                }, n.valueAtTime = l.getValueAtTime, n.speedAtTime = l.getSpeedAtTime, n.velocityAtTime = l.getVelocityAtTime, n.propertyGroup = l.propertyGroup
            }

            function i(n) {
                (!n || !("pv" in n)) && (n = t);
                var l = 1 / n.mult, o = n.pv * l, h = new Number(o);
                return h.value = o, r(h, n, "unidimensional"), function () {
                    return n.k && n.getValue(), o = n.v * l, h.value !== o && (h = new Number(o), h.value = o, r(h, n, "unidimensional")), h
                }
            }

            function s(n) {
                (!n || !("pv" in n)) && (n = e);
                var l = 1 / n.mult, o = n.data && n.data.l || n.pv.length, h = createTypedArray("float32", o),
                    m = createTypedArray("float32", o);
                return h.value = m, r(h, n, "multidimensional"), function () {
                    n.k && n.getValue();
                    for (var S = 0; S < o; S += 1) m[S] = n.v[S] * l, h[S] = m[S];
                    return h
                }
            }

            function a() {
                return t
            }

            return function (n) {
                return n ? n.propType === "unidimensional" ? i(n) : s(n) : a
            }
        }(), TransformExpressionInterface = function () {
            return function (t) {
                function e(n) {
                    switch (n) {
                        case"scale":
                        case"Scale":
                        case"ADBE Scale":
                        case 6:
                            return e.scale;
                        case"rotation":
                        case"Rotation":
                        case"ADBE Rotation":
                        case"ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case"ADBE Rotate X":
                            return e.xRotation;
                        case"ADBE Rotate Y":
                            return e.yRotation;
                        case"position":
                        case"Position":
                        case"ADBE Position":
                        case 2:
                            return e.position;
                        case"ADBE Position_0":
                            return e.xPosition;
                        case"ADBE Position_1":
                            return e.yPosition;
                        case"ADBE Position_2":
                            return e.zPosition;
                        case"anchorPoint":
                        case"AnchorPoint":
                        case"Anchor Point":
                        case"ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case"opacity":
                        case"Opacity":
                        case 11:
                            return e.opacity;
                        default:
                            return null
                    }
                }

                Object.defineProperty(e, "rotation", {get: ExpressionPropertyInterface(t.r || t.rz)}), Object.defineProperty(e, "zRotation", {get: ExpressionPropertyInterface(t.rz || t.r)}), Object.defineProperty(e, "xRotation", {get: ExpressionPropertyInterface(t.rx)}), Object.defineProperty(e, "yRotation", {get: ExpressionPropertyInterface(t.ry)}), Object.defineProperty(e, "scale", {get: ExpressionPropertyInterface(t.s)});
                var r, i, s, a;
                return t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                    get: function () {
                        return t.p ? a() : [r(), i(), s ? s() : 0]
                    }
                }), Object.defineProperty(e, "xPosition", {get: ExpressionPropertyInterface(t.px)}), Object.defineProperty(e, "yPosition", {get: ExpressionPropertyInterface(t.py)}), Object.defineProperty(e, "zPosition", {get: ExpressionPropertyInterface(t.pz)}), Object.defineProperty(e, "anchorPoint", {get: ExpressionPropertyInterface(t.a)}), Object.defineProperty(e, "opacity", {get: ExpressionPropertyInterface(t.o)}), Object.defineProperty(e, "skew", {get: ExpressionPropertyInterface(t.sk)}), Object.defineProperty(e, "skewAxis", {get: ExpressionPropertyInterface(t.sa)}), Object.defineProperty(e, "orientation", {get: ExpressionPropertyInterface(t.or)}), e
            }
        }(), LayerExpressionInterface = function () {
            function t(h) {
                var m = new Matrix;
                if (h !== void 0) {
                    var S = this._elem.finalTransform.mProp.getValueAtTime(h);
                    S.clone(m)
                } else {
                    var f = this._elem.finalTransform.mProp;
                    f.applyToMatrix(m)
                }
                return m
            }

            function e(h, m) {
                var S = this.getMatrix(m);
                return S.props[12] = 0, S.props[13] = 0, S.props[14] = 0, this.applyPoint(S, h)
            }

            function r(h, m) {
                var S = this.getMatrix(m);
                return this.applyPoint(S, h)
            }

            function i(h, m) {
                var S = this.getMatrix(m);
                return S.props[12] = 0, S.props[13] = 0, S.props[14] = 0, this.invertPoint(S, h)
            }

            function s(h, m) {
                var S = this.getMatrix(m);
                return this.invertPoint(S, h)
            }

            function a(h, m) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var S, f = this._elem.hierarchy.length;
                    for (S = 0; S < f; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(h)
                }
                return h.applyToPointArray(m[0], m[1], m[2] || 0)
            }

            function n(h, m) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var S, f = this._elem.hierarchy.length;
                    for (S = 0; S < f; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(h)
                }
                return h.inversePoint(m)
            }

            function l(h) {
                var m = new Matrix;
                if (m.reset(), this._elem.finalTransform.mProp.applyToMatrix(m), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var S, f = this._elem.hierarchy.length;
                    for (S = 0; S < f; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(m);
                    return m.inversePoint(h)
                }
                return m.inversePoint(h)
            }

            function o() {
                return [1, 1, 1, 1]
            }

            return function (h) {
                var m;

                function S(d) {
                    b.mask = new MaskManagerInterface(d, h)
                }

                function f(d) {
                    b.effect = d
                }

                function b(d) {
                    switch (d) {
                        case"ADBE Root Vectors Group":
                        case"Contents":
                        case 2:
                            return b.shapeInterface;
                        case 1:
                        case 6:
                        case"Transform":
                        case"transform":
                        case"ADBE Transform Group":
                            return m;
                        case 4:
                        case"ADBE Effect Parade":
                        case"effects":
                        case"Effects":
                            return b.effect;
                        case"ADBE Text Properties":
                            return b.textInterface;
                        default:
                            return null
                    }
                }

                b.getMatrix = t, b.invertPoint = n, b.applyPoint = a, b.toWorld = r, b.toWorldVec = e, b.fromWorld = s, b.fromWorldVec = i, b.toComp = r, b.fromComp = l, b.sampleImage = o, b.sourceRectAtTime = h.sourceRectAtTime.bind(h), b._elem = h, m = TransformExpressionInterface(h.finalTransform.mProp);
                var y = getDescriptor(m, "anchorPoint");
                return Object.defineProperties(b, {
                    hasParent: {
                        get: function () {
                            return h.hierarchy.length
                        }
                    },
                    parent: {
                        get: function () {
                            return h.hierarchy[0].layerInterface
                        }
                    },
                    rotation: getDescriptor(m, "rotation"),
                    scale: getDescriptor(m, "scale"),
                    position: getDescriptor(m, "position"),
                    opacity: getDescriptor(m, "opacity"),
                    anchorPoint: y,
                    anchor_point: y,
                    transform: {
                        get: function () {
                            return m
                        }
                    },
                    active: {
                        get: function () {
                            return h.isInRange
                        }
                    }
                }), b.startTime = h.data.st, b.index = h.data.ind, b.source = h.data.refId, b.height = h.data.ty === 0 ? h.data.h : 100, b.width = h.data.ty === 0 ? h.data.w : 100, b.inPoint = h.data.ip / h.comp.globalData.frameRate, b.outPoint = h.data.op / h.comp.globalData.frameRate, b._name = h.data.nm, b.registerMaskInterface = S, b.registerEffectsInterface = f, b
            }
        }(), propertyGroupFactory = function () {
            return function (t, e) {
                return function (r) {
                    return r = r === void 0 ? 1 : r, r <= 0 ? t : e(r - 1)
                }
            }
        }(), PropertyInterface = function () {
            return function (t, e) {
                var r = {_name: t};

                function i(s) {
                    return s = s === void 0 ? 1 : s, s <= 0 ? r : e(s - 1)
                }

                return i
            }
        }(), EffectsExpressionInterface = function () {
            var t = {createEffectsInterface: e};

            function e(s, a) {
                if (s.effectsManager) {
                    var n = [], l = s.data.ef, o, h = s.effectsManager.effectElements.length;
                    for (o = 0; o < h; o += 1) n.push(r(l[o], s.effectsManager.effectElements[o], a, s));
                    var m = s.data.ef || [], S = function (b) {
                        for (o = 0, h = m.length; o < h;) {
                            if (b === m[o].nm || b === m[o].mn || b === m[o].ix) return n[o];
                            o += 1
                        }
                        return null
                    };
                    return Object.defineProperty(S, "numProperties", {
                        get: function () {
                            return m.length
                        }
                    }), S
                }
                return null
            }

            function r(s, a, n, l) {
                function o(b) {
                    for (var y = s.ef, d = 0, x = y.length; d < x;) {
                        if (b === y[d].nm || b === y[d].mn || b === y[d].ix) return y[d].ty === 5 ? m[d] : m[d]();
                        d += 1
                    }
                    throw new Error
                }

                var h = propertyGroupFactory(o, n), m = [], S, f = s.ef.length;
                for (S = 0; S < f; S += 1) s.ef[S].ty === 5 ? m.push(r(s.ef[S], a.effectElements[S], a.effectElements[S].propertyGroup, l)) : m.push(i(a.effectElements[S], s.ef[S].ty, l, h));
                return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
                    get: function () {
                        return m[0]()
                    }
                }), Object.defineProperties(o, {
                    numProperties: {
                        get: function () {
                            return s.np
                        }
                    }, _name: {value: s.nm}, propertyGroup: {value: h}
                }), o.enabled = s.en !== 0, o.active = o.enabled, o
            }

            function i(s, a, n, l) {
                var o = ExpressionPropertyInterface(s.p);

                function h() {
                    return a === 10 ? n.comp.compInterface(s.p.v) : o()
                }

                return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", l)), h
            }

            return t
        }(), ShapePathInterface = function () {
            return function (e, r, i) {
                var s = r.sh;

                function a(l) {
                    return l === "Shape" || l === "shape" || l === "Path" || l === "path" || l === "ADBE Vector Shape" || l === 2 ? a.path : null
                }

                var n = propertyGroupFactory(a, i);
                return s.setGroupProperty(PropertyInterface("Path", n)), Object.defineProperties(a, {
                    path: {
                        get: function () {
                            return s.k && s.getValue(), s
                        }
                    },
                    shape: {
                        get: function () {
                            return s.k && s.getValue(), s
                        }
                    },
                    _name: {value: e.nm},
                    ix: {value: e.ix},
                    propertyIndex: {value: e.ix},
                    mn: {value: e.mn},
                    propertyGroup: {value: i}
                }), a
            }
        }(), ShapeExpressionInterface = function () {
            function t(y, d, x) {
                var p = [], u, c = y ? y.length : 0;
                for (u = 0; u < c; u += 1) y[u].ty === "gr" ? p.push(r(y[u], d[u], x)) : y[u].ty === "fl" ? p.push(i(y[u], d[u], x)) : y[u].ty === "st" ? p.push(n(y[u], d[u], x)) : y[u].ty === "tm" ? p.push(l(y[u], d[u], x)) : y[u].ty === "tr" || (y[u].ty === "el" ? p.push(h(y[u], d[u], x)) : y[u].ty === "sr" ? p.push(m(y[u], d[u], x)) : y[u].ty === "sh" ? p.push(ShapePathInterface(y[u], d[u], x)) : y[u].ty === "rc" ? p.push(S(y[u], d[u], x)) : y[u].ty === "rd" ? p.push(f(y[u], d[u], x)) : y[u].ty === "rp" ? p.push(b(y[u], d[u], x)) : y[u].ty === "gf" ? p.push(s(y[u], d[u], x)) : p.push(a(y[u], d[u])));
                return p
            }

            function e(y, d, x) {
                var p, u = function (_) {
                    for (var E = 0, T = p.length; E < T;) {
                        if (p[E]._name === _ || p[E].mn === _ || p[E].propertyIndex === _ || p[E].ix === _ || p[E].ind === _) return p[E];
                        E += 1
                    }
                    return typeof _ == "number" ? p[_ - 1] : null
                };
                u.propertyGroup = propertyGroupFactory(u, x), p = t(y.it, d.it, u.propertyGroup), u.numProperties = p.length;
                var c = o(y.it[y.it.length - 1], d.it[d.it.length - 1], u.propertyGroup);
                return u.transform = c, u.propertyIndex = y.cix, u._name = y.nm, u
            }

            function r(y, d, x) {
                var p = function (_) {
                    switch (_) {
                        case"ADBE Vectors Group":
                        case"Contents":
                        case 2:
                            return p.content;
                        default:
                            return p.transform
                    }
                };
                p.propertyGroup = propertyGroupFactory(p, x);
                var u = e(y, d, p.propertyGroup), c = o(y.it[y.it.length - 1], d.it[d.it.length - 1], p.propertyGroup);
                return p.content = u, p.transform = c, Object.defineProperty(p, "_name", {
                    get: function () {
                        return y.nm
                    }
                }), p.numProperties = y.np, p.propertyIndex = y.ix, p.nm = y.nm, p.mn = y.mn, p
            }

            function i(y, d, x) {
                function p(u) {
                    return u === "Color" || u === "color" ? p.color : u === "Opacity" || u === "opacity" ? p.opacity : null
                }

                return Object.defineProperties(p, {
                    color: {get: ExpressionPropertyInterface(d.c)},
                    opacity: {get: ExpressionPropertyInterface(d.o)},
                    _name: {value: y.nm},
                    mn: {value: y.mn}
                }), d.c.setGroupProperty(PropertyInterface("Color", x)), d.o.setGroupProperty(PropertyInterface("Opacity", x)), p
            }

            function s(y, d, x) {
                function p(u) {
                    return u === "Start Point" || u === "start point" ? p.startPoint : u === "End Point" || u === "end point" ? p.endPoint : u === "Opacity" || u === "opacity" ? p.opacity : null
                }

                return Object.defineProperties(p, {
                    startPoint: {get: ExpressionPropertyInterface(d.s)},
                    endPoint: {get: ExpressionPropertyInterface(d.e)},
                    opacity: {get: ExpressionPropertyInterface(d.o)},
                    type: {
                        get: function () {
                            return "a"
                        }
                    },
                    _name: {value: y.nm},
                    mn: {value: y.mn}
                }), d.s.setGroupProperty(PropertyInterface("Start Point", x)), d.e.setGroupProperty(PropertyInterface("End Point", x)), d.o.setGroupProperty(PropertyInterface("Opacity", x)), p
            }

            function a() {
                function y() {
                    return null
                }

                return y
            }

            function n(y, d, x) {
                var p = propertyGroupFactory(T, x), u = propertyGroupFactory(E, p);

                function c(M) {
                    Object.defineProperty(E, y.d[M].nm, {get: ExpressionPropertyInterface(d.d.dataProps[M].p)})
                }

                var v, _ = y.d ? y.d.length : 0, E = {};
                for (v = 0; v < _; v += 1) c(v), d.d.dataProps[v].p.setGroupProperty(u);

                function T(M) {
                    return M === "Color" || M === "color" ? T.color : M === "Opacity" || M === "opacity" ? T.opacity : M === "Stroke Width" || M === "stroke width" ? T.strokeWidth : null
                }

                return Object.defineProperties(T, {
                    color: {get: ExpressionPropertyInterface(d.c)},
                    opacity: {get: ExpressionPropertyInterface(d.o)},
                    strokeWidth: {get: ExpressionPropertyInterface(d.w)},
                    dash: {
                        get: function () {
                            return E
                        }
                    },
                    _name: {value: y.nm},
                    mn: {value: y.mn}
                }), d.c.setGroupProperty(PropertyInterface("Color", p)), d.o.setGroupProperty(PropertyInterface("Opacity", p)), d.w.setGroupProperty(PropertyInterface("Stroke Width", p)), T
            }

            function l(y, d, x) {
                function p(c) {
                    return c === y.e.ix || c === "End" || c === "end" ? p.end : c === y.s.ix ? p.start : c === y.o.ix ? p.offset : null
                }

                var u = propertyGroupFactory(p, x);
                return p.propertyIndex = y.ix, d.s.setGroupProperty(PropertyInterface("Start", u)), d.e.setGroupProperty(PropertyInterface("End", u)), d.o.setGroupProperty(PropertyInterface("Offset", u)), p.propertyIndex = y.ix, p.propertyGroup = x, Object.defineProperties(p, {
                    start: {get: ExpressionPropertyInterface(d.s)},
                    end: {get: ExpressionPropertyInterface(d.e)},
                    offset: {get: ExpressionPropertyInterface(d.o)},
                    _name: {value: y.nm}
                }), p.mn = y.mn, p
            }

            function o(y, d, x) {
                function p(c) {
                    return y.a.ix === c || c === "Anchor Point" ? p.anchorPoint : y.o.ix === c || c === "Opacity" ? p.opacity : y.p.ix === c || c === "Position" ? p.position : y.r.ix === c || c === "Rotation" || c === "ADBE Vector Rotation" ? p.rotation : y.s.ix === c || c === "Scale" ? p.scale : y.sk && y.sk.ix === c || c === "Skew" ? p.skew : y.sa && y.sa.ix === c || c === "Skew Axis" ? p.skewAxis : null
                }

                var u = propertyGroupFactory(p, x);
                return d.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", u)), d.transform.mProps.p.setGroupProperty(PropertyInterface("Position", u)), d.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", u)), d.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", u)), d.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", u)), d.transform.mProps.sk && (d.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", u)), d.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", u))), d.transform.op.setGroupProperty(PropertyInterface("Opacity", u)), Object.defineProperties(p, {
                    opacity: {get: ExpressionPropertyInterface(d.transform.mProps.o)},
                    position: {get: ExpressionPropertyInterface(d.transform.mProps.p)},
                    anchorPoint: {get: ExpressionPropertyInterface(d.transform.mProps.a)},
                    scale: {get: ExpressionPropertyInterface(d.transform.mProps.s)},
                    rotation: {get: ExpressionPropertyInterface(d.transform.mProps.r)},
                    skew: {get: ExpressionPropertyInterface(d.transform.mProps.sk)},
                    skewAxis: {get: ExpressionPropertyInterface(d.transform.mProps.sa)},
                    _name: {value: y.nm}
                }), p.ty = "tr", p.mn = y.mn, p.propertyGroup = x, p
            }

            function h(y, d, x) {
                function p(v) {
                    return y.p.ix === v ? p.position : y.s.ix === v ? p.size : null
                }

                var u = propertyGroupFactory(p, x);
                p.propertyIndex = y.ix;
                var c = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                return c.s.setGroupProperty(PropertyInterface("Size", u)), c.p.setGroupProperty(PropertyInterface("Position", u)), Object.defineProperties(p, {
                    size: {get: ExpressionPropertyInterface(c.s)},
                    position: {get: ExpressionPropertyInterface(c.p)},
                    _name: {value: y.nm}
                }), p.mn = y.mn, p
            }

            function m(y, d, x) {
                function p(v) {
                    return y.p.ix === v ? p.position : y.r.ix === v ? p.rotation : y.pt.ix === v ? p.points : y.or.ix === v || v === "ADBE Vector Star Outer Radius" ? p.outerRadius : y.os.ix === v ? p.outerRoundness : y.ir && (y.ir.ix === v || v === "ADBE Vector Star Inner Radius") ? p.innerRadius : y.is && y.is.ix === v ? p.innerRoundness : null
                }

                var u = propertyGroupFactory(p, x), c = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                return p.propertyIndex = y.ix, c.or.setGroupProperty(PropertyInterface("Outer Radius", u)), c.os.setGroupProperty(PropertyInterface("Outer Roundness", u)), c.pt.setGroupProperty(PropertyInterface("Points", u)), c.p.setGroupProperty(PropertyInterface("Position", u)), c.r.setGroupProperty(PropertyInterface("Rotation", u)), y.ir && (c.ir.setGroupProperty(PropertyInterface("Inner Radius", u)), c.is.setGroupProperty(PropertyInterface("Inner Roundness", u))), Object.defineProperties(p, {
                    position: {get: ExpressionPropertyInterface(c.p)},
                    rotation: {get: ExpressionPropertyInterface(c.r)},
                    points: {get: ExpressionPropertyInterface(c.pt)},
                    outerRadius: {get: ExpressionPropertyInterface(c.or)},
                    outerRoundness: {get: ExpressionPropertyInterface(c.os)},
                    innerRadius: {get: ExpressionPropertyInterface(c.ir)},
                    innerRoundness: {get: ExpressionPropertyInterface(c.is)},
                    _name: {value: y.nm}
                }), p.mn = y.mn, p
            }

            function S(y, d, x) {
                function p(v) {
                    return y.p.ix === v ? p.position : y.r.ix === v ? p.roundness : y.s.ix === v || v === "Size" || v === "ADBE Vector Rect Size" ? p.size : null
                }

                var u = propertyGroupFactory(p, x), c = d.sh.ty === "tm" ? d.sh.prop : d.sh;
                return p.propertyIndex = y.ix, c.p.setGroupProperty(PropertyInterface("Position", u)), c.s.setGroupProperty(PropertyInterface("Size", u)), c.r.setGroupProperty(PropertyInterface("Rotation", u)), Object.defineProperties(p, {
                    position: {get: ExpressionPropertyInterface(c.p)},
                    roundness: {get: ExpressionPropertyInterface(c.r)},
                    size: {get: ExpressionPropertyInterface(c.s)},
                    _name: {value: y.nm}
                }), p.mn = y.mn, p
            }

            function f(y, d, x) {
                function p(v) {
                    return y.r.ix === v || v === "Round Corners 1" ? p.radius : null
                }

                var u = propertyGroupFactory(p, x), c = d;
                return p.propertyIndex = y.ix, c.rd.setGroupProperty(PropertyInterface("Radius", u)), Object.defineProperties(p, {
                    radius: {get: ExpressionPropertyInterface(c.rd)},
                    _name: {value: y.nm}
                }), p.mn = y.mn, p
            }

            function b(y, d, x) {
                function p(v) {
                    return y.c.ix === v || v === "Copies" ? p.copies : y.o.ix === v || v === "Offset" ? p.offset : null
                }

                var u = propertyGroupFactory(p, x), c = d;
                return p.propertyIndex = y.ix, c.c.setGroupProperty(PropertyInterface("Copies", u)), c.o.setGroupProperty(PropertyInterface("Offset", u)), Object.defineProperties(p, {
                    copies: {get: ExpressionPropertyInterface(c.c)},
                    offset: {get: ExpressionPropertyInterface(c.o)},
                    _name: {value: y.nm}
                }), p.mn = y.mn, p
            }

            return function (y, d, x) {
                var p;

                function u(v) {
                    if (typeof v == "number") return v = v === void 0 ? 1 : v, v === 0 ? x : p[v - 1];
                    for (var _ = 0, E = p.length; _ < E;) {
                        if (p[_]._name === v) return p[_];
                        _ += 1
                    }
                    return null
                }

                function c() {
                    return x
                }

                return u.propertyGroup = propertyGroupFactory(u, c), p = t(y, d, u.propertyGroup), u.numProperties = p.length, u._name = "Contents", u
            }
        }(), TextExpressionInterface = function () {
            return function (t) {
                var e;

                function r(i) {
                    switch (i) {
                        case"ADBE Text Document":
                            return r.sourceText;
                        default:
                            return null
                    }
                }

                return Object.defineProperty(r, "sourceText", {
                    get: function () {
                        t.textProperty.getValue();
                        var s = t.textProperty.currentData.t;
                        return (!e || s !== e.value) && (e = new String(s), e.value = s || new String(s), Object.defineProperty(e, "style", {
                            get: function () {
                                return {fillColor: t.textProperty.currentData.fc}
                            }
                        })), e
                    }
                }), r
            }
        }();

        function _typeof(t) {
            "@babel/helpers - typeof";
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function (r) {
                return typeof r
            } : _typeof = function (r) {
                return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            }, _typeof(t)
        }

        var FootageInterface = function () {
            var t = function (i) {
                var s = "", a = i.getFootageData();

                function n() {
                    return s = "", a = i.getFootageData(), l
                }

                function l(o) {
                    if (a[o]) return s = o, a = a[o], _typeof(a) === "object" ? l : a;
                    var h = o.indexOf(s);
                    if (h !== -1) {
                        var m = parseInt(o.substr(h + s.length), 10);
                        return a = a[m], _typeof(a) === "object" ? l : a
                    }
                    return ""
                }

                return n
            }, e = function (i) {
                function s(a) {
                    return a === "Outline" ? s.outlineInterface() : null
                }

                return s._name = "Outline", s.outlineInterface = t(i), s
            };
            return function (r) {
                function i(s) {
                    return s === "Data" ? i.dataInterface : null
                }

                return i._name = "Data", i.dataInterface = e(r), i
            }
        }(), interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
        };

        function getInterface(t) {
            return interfaces[t] || null
        }

        var expressionHelpers = function () {
            function t(n, l, o) {
                l.x && (o.k = !0, o.x = !0, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(n, l, o).bind(o)))
            }

            function e(n) {
                return n *= this.elem.globalData.frameRate, n -= this.offsetTime, n !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime), this._cachingAtTime.lastFrame = n), this._cachingAtTime.value
            }

            function r(n) {
                var l = -.01, o = this.getValueAtTime(n), h = this.getValueAtTime(n + l), m = 0;
                if (o.length) {
                    var S;
                    for (S = 0; S < o.length; S += 1) m += Math.pow(h[S] - o[S], 2);
                    m = Math.sqrt(m) * 100
                } else m = 0;
                return m
            }

            function i(n) {
                if (this.vel !== void 0) return this.vel;
                var l = -.001, o = this.getValueAtTime(n), h = this.getValueAtTime(n + l), m;
                if (o.length) {
                    m = createTypedArray("float32", o.length);
                    var S;
                    for (S = 0; S < o.length; S += 1) m[S] = (h[S] - o[S]) / l
                } else m = (h - o) / l;
                return m
            }

            function s() {
                return this.pv
            }

            function a(n) {
                this.propertyGroup = n
            }

            return {
                searchExpressions: t,
                getSpeedAtTime: r,
                getVelocityAtTime: i,
                getValueAtTime: e,
                getStaticValueAtTime: s,
                setGroupProperty: a
            }
        }();

        function addPropertyDecorator() {
            function t(f, b, y) {
                if (!this.k || !this.keyframes) return this.pv;
                f = f ? f.toLowerCase() : "";
                var d = this.comp.renderedFrame, x = this.keyframes, p = x[x.length - 1].t;
                if (d <= p) return this.pv;
                var u, c;
                y ? (b ? u = Math.abs(p - this.elem.comp.globalData.frameRate * b) : u = Math.max(0, p - this.elem.data.ip), c = p - u) : ((!b || b > x.length - 1) && (b = x.length - 1), c = x[x.length - 1 - b].t, u = p - c);
                var v, _, E;
                if (f === "pingpong") {
                    var T = Math.floor((d - c) / u);
                    if (T % 2 !== 0) return this.getValueAtTime((u - (d - c) % u + c) / this.comp.globalData.frameRate, 0)
                } else if (f === "offset") {
                    var M = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        I = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        O = this.getValueAtTime(((d - c) % u + c) / this.comp.globalData.frameRate, 0),
                        V = Math.floor((d - c) / u);
                    if (this.pv.length) {
                        for (E = new Array(M.length), _ = E.length, v = 0; v < _; v += 1) E[v] = (I[v] - M[v]) * V + O[v];
                        return E
                    }
                    return (I - M) * V + O
                } else if (f === "continue") {
                    var L = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        R = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (E = new Array(L.length), _ = E.length, v = 0; v < _; v += 1) E[v] = L[v] + (L[v] - R[v]) * ((d - p) / this.comp.globalData.frameRate) / 5e-4;
                        return E
                    }
                    return L + (L - R) * ((d - p) / .001)
                }
                return this.getValueAtTime(((d - c) % u + c) / this.comp.globalData.frameRate, 0)
            }

            function e(f, b, y) {
                if (!this.k) return this.pv;
                f = f ? f.toLowerCase() : "";
                var d = this.comp.renderedFrame, x = this.keyframes, p = x[0].t;
                if (d >= p) return this.pv;
                var u, c;
                y ? (b ? u = Math.abs(this.elem.comp.globalData.frameRate * b) : u = Math.max(0, this.elem.data.op - p), c = p + u) : ((!b || b > x.length - 1) && (b = x.length - 1), c = x[b].t, u = c - p);
                var v, _, E;
                if (f === "pingpong") {
                    var T = Math.floor((p - d) / u);
                    if (T % 2 === 0) return this.getValueAtTime(((p - d) % u + p) / this.comp.globalData.frameRate, 0)
                } else if (f === "offset") {
                    var M = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        I = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        O = this.getValueAtTime((u - (p - d) % u + p) / this.comp.globalData.frameRate, 0),
                        V = Math.floor((p - d) / u) + 1;
                    if (this.pv.length) {
                        for (E = new Array(M.length), _ = E.length, v = 0; v < _; v += 1) E[v] = O[v] - (I[v] - M[v]) * V;
                        return E
                    }
                    return O - (I - M) * V
                } else if (f === "continue") {
                    var L = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        R = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (E = new Array(L.length), _ = E.length, v = 0; v < _; v += 1) E[v] = L[v] + (L[v] - R[v]) * (p - d) / .001;
                        return E
                    }
                    return L + (L - R) * (p - d) / .001
                }
                return this.getValueAtTime((u - ((p - d) % u + p)) / this.comp.globalData.frameRate, 0)
            }

            function r(f, b) {
                if (!this.k) return this.pv;
                if (f = (f || .4) * .5, b = Math.floor(b || 5), b <= 1) return this.pv;
                var y = this.comp.renderedFrame / this.comp.globalData.frameRate, d = y - f, x = y + f,
                    p = b > 1 ? (x - d) / (b - 1) : 1, u = 0, c = 0, v;
                this.pv.length ? v = createTypedArray("float32", this.pv.length) : v = 0;
                for (var _; u < b;) {
                    if (_ = this.getValueAtTime(d + u * p), this.pv.length) for (c = 0; c < this.pv.length; c += 1) v[c] += _[c]; else v += _;
                    u += 1
                }
                if (this.pv.length) for (c = 0; c < this.pv.length; c += 1) v[c] /= b; else v /= b;
                return v
            }

            function i(f) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {v: new Matrix});
                var b = this._transformCachingAtTime.v;
                if (b.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                    var y = this.a.getValueAtTime(f);
                    b.translate(-y[0] * this.a.mult, -y[1] * this.a.mult, y[2] * this.a.mult)
                }
                if (this.appliedTransformations < 2) {
                    var d = this.s.getValueAtTime(f);
                    b.scale(d[0] * this.s.mult, d[1] * this.s.mult, d[2] * this.s.mult)
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var x = this.sk.getValueAtTime(f), p = this.sa.getValueAtTime(f);
                    b.skewFromAxis(-x * this.sk.mult, p * this.sa.mult)
                }
                if (this.r && this.appliedTransformations < 4) {
                    var u = this.r.getValueAtTime(f);
                    b.rotate(-u * this.r.mult)
                } else if (!this.r && this.appliedTransformations < 4) {
                    var c = this.rz.getValueAtTime(f), v = this.ry.getValueAtTime(f), _ = this.rx.getValueAtTime(f),
                        E = this.or.getValueAtTime(f);
                    b.rotateZ(-c * this.rz.mult).rotateY(v * this.ry.mult).rotateX(_ * this.rx.mult).rotateZ(-E[2] * this.or.mult).rotateY(E[1] * this.or.mult).rotateX(E[0] * this.or.mult)
                }
                if (this.data.p && this.data.p.s) {
                    var T = this.px.getValueAtTime(f), M = this.py.getValueAtTime(f);
                    if (this.data.p.z) {
                        var I = this.pz.getValueAtTime(f);
                        b.translate(T * this.px.mult, M * this.py.mult, -I * this.pz.mult)
                    } else b.translate(T * this.px.mult, M * this.py.mult, 0)
                } else {
                    var O = this.p.getValueAtTime(f);
                    b.translate(O[0] * this.p.mult, O[1] * this.p.mult, -O[2] * this.p.mult)
                }
                return b
            }

            function s() {
                return this.v.clone(new Matrix)
            }

            var a = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (f, b, y) {
                var d = a(f, b, y);
                return d.dynamicProperties.length ? d.getValueAtTime = i.bind(d) : d.getValueAtTime = s.bind(d), d.setGroupProperty = expressionHelpers.setGroupProperty, d
            };
            var n = PropertyFactory.getProp;
            PropertyFactory.getProp = function (f, b, y, d, x) {
                var p = n(f, b, y, d, x);
                p.kf ? p.getValueAtTime = expressionHelpers.getValueAtTime.bind(p) : p.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p.loopOut = t, p.loopIn = e, p.smooth = r, p.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(p), p.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(p), p.numKeys = b.a === 1 ? b.k.length : 0, p.propertyIndex = b.ix;
                var u = 0;
                return y !== 0 && (u = createTypedArray("float32", b.a === 1 ? b.k[0].s.length : b.k.length)), p._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: u
                }, expressionHelpers.searchExpressions(f, b, p), p.k && x.addDynamicProperty(p), p
            };

            function l(f) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }), f *= this.elem.globalData.frameRate, f -= this.offsetTime, f !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < f ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = f, this.interpolateShape(f, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
            }

            var o = ShapePropertyFactory.getConstructorFunction(),
                h = ShapePropertyFactory.getKeyframedConstructorFunction();

            function m() {
            }

            m.prototype = {
                vertices: function (b, y) {
                    this.k && this.getValue();
                    var d = this.v;
                    y !== void 0 && (d = this.getValueAtTime(y, 0));
                    var x, p = d._length, u = d[b], c = d.v, v = createSizedArray(p);
                    for (x = 0; x < p; x += 1) b === "i" || b === "o" ? v[x] = [u[x][0] - c[x][0], u[x][1] - c[x][1]] : v[x] = [u[x][0], u[x][1]];
                    return v
                },
                points: function (b) {
                    return this.vertices("v", b)
                },
                inTangents: function (b) {
                    return this.vertices("i", b)
                },
                outTangents: function (b) {
                    return this.vertices("o", b)
                },
                isClosed: function () {
                    return this.v.c
                },
                pointOnPath: function (b, y) {
                    var d = this.v;
                    y !== void 0 && (d = this.getValueAtTime(y, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(d));
                    for (var x = this._segmentsLength, p = x.lengths, u = x.totalLength * b, c = 0, v = p.length, _ = 0, E; c < v;) {
                        if (_ + p[c].addedLength > u) {
                            var T = c, M = d.c && c === v - 1 ? 0 : c + 1, I = (u - _) / p[c].addedLength;
                            E = bez.getPointInSegment(d.v[T], d.v[M], d.o[T], d.i[M], I, p[c]);
                            break
                        } else _ += p[c].addedLength;
                        c += 1
                    }
                    return E || (E = d.c ? [d.v[0][0], d.v[0][1]] : [d.v[d._length - 1][0], d.v[d._length - 1][1]]), E
                },
                vectorOnPath: function (b, y, d) {
                    b == 1 ? b = this.v.c : b == 0 && (b = .999);
                    var x = this.pointOnPath(b, y), p = this.pointOnPath(b + .001, y), u = p[0] - x[0], c = p[1] - x[1],
                        v = Math.sqrt(Math.pow(u, 2) + Math.pow(c, 2));
                    if (v === 0) return [0, 0];
                    var _ = d === "tangent" ? [u / v, c / v] : [-c / v, u / v];
                    return _
                },
                tangentOnPath: function (b, y) {
                    return this.vectorOnPath(b, y, "tangent")
                },
                normalOnPath: function (b, y) {
                    return this.vectorOnPath(b, y, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }, extendPrototype([m], o), extendPrototype([m], h), h.prototype.getValueAtTime = l, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var S = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (f, b, y, d, x) {
                var p = S(f, b, y, d, x);
                return p.propertyIndex = b.ix, p.lock = !1, y === 3 ? expressionHelpers.searchExpressions(f, b.pt, p) : y === 4 && expressionHelpers.searchExpressions(f, b.ks, p), p.k && f.addDynamicProperty(p), p
            }
        }

        function initialize$1() {
            addPropertyDecorator()
        }

        function addDecorator() {
            function t() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
            }

            TextProperty.prototype.getExpressionValue = function (e, r) {
                var i = this.calculateExpression(r);
                if (e.t !== i) {
                    var s = {};
                    return this.copyData(s, e), s.t = i.toString(), s.__complete = !1, s
                }
                return e
            }, TextProperty.prototype.searchProperty = function () {
                var e = this.searchKeyframes(), r = this.searchExpressions();
                return this.kf = e || r, this.kf
            }, TextProperty.prototype.searchExpressions = t
        }

        function initialize() {
            addDecorator()
        }

        function SVGComposableEffect() {
        }

        SVGComposableEffect.prototype = {
            createMergeNode: function t(e, r) {
                var i = createNS("feMerge");
                i.setAttribute("result", e);
                var s, a;
                for (a = 0; a < r.length; a += 1) s = createNS("feMergeNode"), s.setAttribute("in", r[a]), i.appendChild(s), i.appendChild(s);
                return i
            }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, r, i, s) {
            this.filterManager = e;
            var a = createNS("feColorMatrix");
            a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), t.appendChild(a), a = createNS("feColorMatrix"), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
            var n = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
            t.appendChild(n)
        }

        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v,
                    i = this.filterManager.effectElements[2].p.v / 100;
                this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
            }
        };

        function SVGFillFilter(t, e, r, i) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), t.appendChild(s), this.matrixFilter = s
        }

        SVGFillFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
            }
        };

        function SVGStrokeEffect(t, e, r) {
            this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = []
        }

        SVGStrokeEffect.prototype.initialize = function () {
            var t = this.elem.layerElement.children || this.elem.layerElement.childNodes, e, r, i, s;
            for (this.filterManager.effectElements[1].p.v === 1 ? (s = this.elem.maskManager.masksProperties.length, i = 0) : (i = this.filterManager.effectElements[0].p.v - 1, s = i + 1), r = createNS("g"), r.setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-dashoffset", 1), i; i < s; i += 1) e = createNS("path"), r.appendChild(e), this.paths.push({
                p: e,
                m: i
            });
            if (this.filterManager.effectElements[10].p.v === 3) {
                var a = createNS("mask"), n = createElementID();
                a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(r), this.elem.globalData.defs.appendChild(a);
                var l = createNS("g");
                for (l.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); t[0];) l.appendChild(t[0]);
                this.elem.layerElement.appendChild(l), this.masker = a, r.setAttribute("stroke", "#fff")
            } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                if (this.filterManager.effectElements[10].p.v === 2) for (t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length;) this.elem.layerElement.removeChild(t[0]);
                this.elem.layerElement.appendChild(r), this.elem.layerElement.removeAttribute("mask"), r.setAttribute("stroke", "#fff")
            }
            this.initialized = !0, this.pathMasker = r
        }, SVGStrokeEffect.prototype.renderFrame = function (t) {
            this.initialized || this.initialize();
            var e, r = this.paths.length, i, s;
            for (e = 0; e < r; e += 1) if (this.paths[e].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                var a;
                if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                    var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                        l = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                        o = s.getTotalLength();
                    a = "0 0 0 " + o * n + " ";
                    var h = o * (l - n),
                        m = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01,
                        S = Math.floor(h / m), f;
                    for (f = 0; f < S; f += 1) a += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                    a += "0 " + o * 10 + " 0 0"
                } else a = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                s.setAttribute("stroke-dasharray", a)
            }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var b = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(b[0] * 255) + "," + bmFloor(b[1] * 255) + "," + bmFloor(b[2] * 255) + ")")
            }
        };

        function SVGTritoneFilter(t, e, r, i) {
            this.filterManager = e;
            var s = createNS("feColorMatrix");
            s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
            var a = createNS("feComponentTransfer");
            a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
            var n = createNS("feFuncR");
            n.setAttribute("type", "table"), a.appendChild(n), this.feFuncR = n;
            var l = createNS("feFuncG");
            l.setAttribute("type", "table"), a.appendChild(l), this.feFuncG = l;
            var o = createNS("feFuncB");
            o.setAttribute("type", "table"), a.appendChild(o), this.feFuncB = o, t.appendChild(a)
        }

        SVGTritoneFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v,
                    i = this.filterManager.effectElements[2].p.v, s = i[0] + " " + r[0] + " " + e[0],
                    a = i[1] + " " + r[1] + " " + e[1], n = i[2] + " " + r[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n)
            }
        };

        function SVGProLevelsFilter(t, e, r, i) {
            this.filterManager = e;
            var s = this.filterManager.effectElements, a = createNS("feComponentTransfer");
            (s[10].p.k || s[10].p.v !== 0 || s[11].p.k || s[11].p.v !== 1 || s[12].p.k || s[12].p.v !== 1 || s[13].p.k || s[13].p.v !== 0 || s[14].p.k || s[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (s[17].p.k || s[17].p.v !== 0 || s[18].p.k || s[18].p.v !== 1 || s[19].p.k || s[19].p.v !== 1 || s[20].p.k || s[20].p.v !== 0 || s[21].p.k || s[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (s[24].p.k || s[24].p.v !== 0 || s[25].p.k || s[25].p.v !== 1 || s[26].p.k || s[26].p.v !== 1 || s[27].p.k || s[27].p.v !== 0 || s[28].p.k || s[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (s[31].p.k || s[31].p.v !== 0 || s[32].p.k || s[32].p.v !== 1 || s[33].p.k || s[33].p.v !== 1 || s[34].p.k || s[34].p.v !== 0 || s[35].p.k || s[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (s[3].p.k || s[3].p.v !== 0 || s[4].p.k || s[4].p.v !== 1 || s[5].p.k || s[5].p.v !== 1 || s[6].p.k || s[6].p.v !== 0 || s[7].p.k || s[7].p.v !== 1) && (a = createNS("feComponentTransfer"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
        }

        SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
            var r = createNS(t);
            return r.setAttribute("type", "table"), e.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function (t, e, r, i, s) {
            for (var a = 0, n = 256, l, o = Math.min(t, e), h = Math.max(t, e), m = Array.call(null, {length: n}), S, f = 0, b = s - i, y = e - t; a <= 256;) l = a / 256, l <= o ? S = y < 0 ? s : i : l >= h ? S = y < 0 ? i : s : S = i + b * Math.pow((l - t) / y, 1 / r), m[f] = S, f += 1, a += 256 / (n - 1);
            return m.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e, r = this.filterManager.effectElements;
                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
            }
        };

        function SVGDropShadowEffect(t, e, r, i, s) {
            var a = e.container.globalData.renderConfig.filterSize, n = e.data.fs || a;
            t.setAttribute("x", n.x || a.x), t.setAttribute("y", n.y || a.y), t.setAttribute("width", n.width || a.width), t.setAttribute("height", n.height || a.height), this.filterManager = e;
            var l = createNS("feGaussianBlur");
            l.setAttribute("in", "SourceAlpha"), l.setAttribute("result", i + "_drop_shadow_1"), l.setAttribute("stdDeviation", "0"), this.feGaussianBlur = l, t.appendChild(l);
            var o = createNS("feOffset");
            o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", i + "_drop_shadow_1"), o.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = o, t.appendChild(o);
            var h = createNS("feFlood");
            h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = h, t.appendChild(h);
            var m = createNS("feComposite");
            m.setAttribute("in", i + "_drop_shadow_3"), m.setAttribute("in2", i + "_drop_shadow_2"), m.setAttribute("operator", "in"), m.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(m);
            var S = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
            t.appendChild(S)
        }

        extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                    var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(e[0] * 255), Math.round(e[1] * 255), Math.round(e[2] * 255)))
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var r = this.filterManager.effectElements[3].p.v,
                        i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = r * Math.cos(i),
                        a = r * Math.sin(i);
                    this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a)
                }
            }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, r) {
            this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        SVGMatte3Effect.prototype.findSymbol = function (t) {
            for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1
            }
            return null
        }, SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
                for (var i = r.children, s = 0, a = i.length; s < a && i[s] !== t.layerElement;) s += 1;
                var n;
                s <= a - 2 && (n = i[s + 1]);
                var l = createNS("use");
                l.setAttribute("href", "#" + e), n ? r.insertBefore(l, n) : r.appendChild(l)
            }
        }, SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
            if (!this.findSymbol(e)) {
                var r = createElementID(), i = createNS("mask");
                i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var s = t.globalData.defs;
                s.appendChild(i);
                var a = createNS("symbol");
                a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a);
                var n = createNS("use");
                n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show()
            }
            t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function () {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
            this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function () {
            this.initialized || this.initialize()
        };

        function SVGGaussianBlurEffect(t, e, r, i) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var s = createNS("feGaussianBlur");
            s.setAttribute("result", i), t.appendChild(s), this.feGaussianBlur = s
        }

        SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
                var e = .3, r = this.filterManager.effectElements[0].p.v * e,
                    i = this.filterManager.effectElements[1].p.v, s = i == 3 ? 0 : r, a = i == 2 ? 0 : r;
                this.feGaussianBlur.setAttribute("stdDeviation", s + " " + a);
                var n = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", n)
            }
        };

        function TransformEffect() {
        }

        TransformEffect.prototype.init = function (t) {
            this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function (t) {
            if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
                var e = this.effectsManager.effectElements, r = e[0].p.v, i = e[1].p.v, s = e[2].p.v === 1,
                    a = e[3].p.v, n = s ? a : e[4].p.v, l = e[5].p.v, o = e[6].p.v, h = e[7].p.v;
                this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(n * .01, a * .01, 1), this.matrix.rotate(-h * degToRads), this.matrix.skewFromAxis(-l * degToRads, (o + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
            }
        };

        function SVGTransformEffect(t, e) {
            this.init(e)
        }

        extendPrototype([TransformEffect], SVGTransformEffect);

        function CVTransformEffect(t) {
            this.init(t)
        }

        return extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
    })
})(lottie, lottie.exports);
var lottieExports = lottie.exports;
const Lottie = getDefaultExportFromCjs(lottieExports);
(function () {
    try {
        if (typeof document < "u") {
            var t = document.createElement("style");
            t.appendChild(document.createTextNode(".lottie-animation-container{width:var(--lottie-animation-container-width);height:var(--lottie-animation-container-height);background-color:var(--lottie-animation-container-background-color);overflow:hidden;margin:var(--lottie-animation-margin)}.lottie-animation-container svg{transform:scale(var(--lottie-animation-scale))}")), document.head.appendChild(t)
        }
    } catch (e) {
        console.error("vite-plugin-css-injected-by-js", e)
    }
})();
var __defProp = Object.defineProperty, __defProps = Object.defineProperties,
    __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropSymbols = Object.getOwnPropertySymbols,
    __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable,
    __defNormalProp = (t, e, r) => e in t ? __defProp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : t[e] = r, __spreadValues = (t, e) => {
        for (var r in e || (e = {})) __hasOwnProp.call(e, r) && __defNormalProp(t, r, e[r]);
        if (__getOwnPropSymbols) for (var r of __getOwnPropSymbols(e)) __propIsEnum.call(e, r) && __defNormalProp(t, r, e[r]);
        return t
    }, __spreadProps = (t, e) => __defProps(t, __getOwnPropDescs(e)),
    freeGlobal = typeof global == "object" && global && global.Object === Object && global, freeGlobal$1 = freeGlobal,
    freeSelf = typeof self == "object" && self && self.Object === Object && self,
    root = freeGlobal$1 || freeSelf || Function("return this")(), root$1 = root, Symbol$1 = root$1.Symbol,
    Symbol$2 = Symbol$1, objectProto$e = Object.prototype, hasOwnProperty$b = objectProto$e.hasOwnProperty,
    nativeObjectToString$1 = objectProto$e.toString, symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;

function getRawTag(t) {
    var e = hasOwnProperty$b.call(t, symToStringTag$1), r = t[symToStringTag$1];
    try {
        t[symToStringTag$1] = void 0;
        var i = !0
    } catch {
    }
    var s = nativeObjectToString$1.call(t);
    return i && (e ? t[symToStringTag$1] = r : delete t[symToStringTag$1]), s
}

var objectProto$d = Object.prototype, nativeObjectToString = objectProto$d.toString;

function objectToString(t) {
    return nativeObjectToString.call(t)
}

var nullTag = "[object Null]", undefinedTag = "[object Undefined]",
    symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;

function baseGetTag(t) {
    return t == null ? t === void 0 ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(t) ? getRawTag(t) : objectToString(t)
}

function isObjectLike(t) {
    return t != null && typeof t == "object"
}

var isArray = Array.isArray, isArray$1 = isArray;

function isObject(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}

var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]",
    proxyTag = "[object Proxy]";

function isFunction(t) {
    if (!isObject(t)) return !1;
    var e = baseGetTag(t);
    return e == funcTag$2 || e == genTag$1 || e == asyncTag || e == proxyTag
}

var coreJsData = root$1["__core-js_shared__"], coreJsData$1 = coreJsData, maskSrcKey = function () {
    var t = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : ""
}();

function isMasked(t) {
    return !!maskSrcKey && maskSrcKey in t
}

var funcProto$1 = Function.prototype, funcToString$1 = funcProto$1.toString;

function toSource(t) {
    if (t != null) {
        try {
            return funcToString$1.call(t)
        } catch {
        }
        try {
            return t + ""
        } catch {
        }
    }
    return ""
}

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto = Function.prototype,
    objectProto$c = Object.prototype, funcToString = funcProto.toString,
    hasOwnProperty$a = objectProto$c.hasOwnProperty,
    reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function baseIsNative(t) {
    if (!isObject(t) || isMasked(t)) return !1;
    var e = isFunction(t) ? reIsNative : reIsHostCtor;
    return e.test(toSource(t))
}

function getValue(t, e) {
    return t == null ? void 0 : t[e]
}

function getNative(t, e) {
    var r = getValue(t, e);
    return baseIsNative(r) ? r : void 0
}

var WeakMap = getNative(root$1, "WeakMap"), WeakMap$1 = WeakMap, objectCreate = Object.create,
    baseCreate = function () {
        function t() {
        }

        return function (e) {
            if (!isObject(e)) return {};
            if (objectCreate) return objectCreate(e);
            t.prototype = e;
            var r = new t;
            return t.prototype = void 0, r
        }
    }(), baseCreate$1 = baseCreate;

function copyArray(t, e) {
    var r = -1, i = t.length;
    for (e || (e = Array(i)); ++r < i;) e[r] = t[r];
    return e
}

var defineProperty = function () {
    try {
        var t = getNative(Object, "defineProperty");
        return t({}, "", {}), t
    } catch {
    }
}(), defineProperty$1 = defineProperty;

function arrayEach(t, e) {
    for (var r = -1, i = t == null ? 0 : t.length; ++r < i && e(t[r], r, t) !== !1;) ;
    return t
}

var MAX_SAFE_INTEGER$1 = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;

function isIndex(t, e) {
    var r = typeof t;
    return e = e ?? MAX_SAFE_INTEGER$1, !!e && (r == "number" || r != "symbol" && reIsUint.test(t)) && t > -1 && t % 1 == 0 && t < e
}

function baseAssignValue(t, e, r) {
    e == "__proto__" && defineProperty$1 ? defineProperty$1(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : t[e] = r
}

function eq(t, e) {
    return t === e || t !== t && e !== e
}

var objectProto$b = Object.prototype, hasOwnProperty$9 = objectProto$b.hasOwnProperty;

function assignValue(t, e, r) {
    var i = t[e];
    (!(hasOwnProperty$9.call(t, e) && eq(i, r)) || r === void 0 && !(e in t)) && baseAssignValue(t, e, r)
}

function copyObject(t, e, r, i) {
    var s = !r;
    r || (r = {});
    for (var a = -1, n = e.length; ++a < n;) {
        var l = e[a], o = i ? i(r[l], t[l], l, r, t) : void 0;
        o === void 0 && (o = t[l]), s ? baseAssignValue(r, l, o) : assignValue(r, l, o)
    }
    return r
}

var MAX_SAFE_INTEGER = 9007199254740991;

function isLength(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= MAX_SAFE_INTEGER
}

function isArrayLike(t) {
    return t != null && isLength(t.length) && !isFunction(t)
}

var objectProto$a = Object.prototype;

function isPrototype(t) {
    var e = t && t.constructor, r = typeof e == "function" && e.prototype || objectProto$a;
    return t === r
}

function baseTimes(t, e) {
    for (var r = -1, i = Array(t); ++r < t;) i[r] = e(r);
    return i
}

var argsTag$3 = "[object Arguments]";

function baseIsArguments(t) {
    return isObjectLike(t) && baseGetTag(t) == argsTag$3
}

var objectProto$9 = Object.prototype, hasOwnProperty$8 = objectProto$9.hasOwnProperty,
    propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable, isArguments = baseIsArguments(function () {
        return arguments
    }()) ? baseIsArguments : function (t) {
        return isObjectLike(t) && hasOwnProperty$8.call(t, "callee") && !propertyIsEnumerable$1.call(t, "callee")
    }, isArguments$1 = isArguments;

function stubFalse() {
    return !1
}

var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports,
    freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module,
    moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2,
    Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0, nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0,
    isBuffer = nativeIsBuffer || stubFalse, isBuffer$1 = isBuffer, argsTag$2 = "[object Arguments]",
    arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]",
    errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]",
    numberTag$3 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$3 = "[object RegExp]",
    setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]",
    arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]",
    float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]",
    int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]",
    uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]",
    uint32Tag$2 = "[object Uint32Array]", typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = !0;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = !1;

function baseIsTypedArray(t) {
    return isObjectLike(t) && isLength(t.length) && !!typedArrayTags[baseGetTag(t)]
}

function baseUnary(t) {
    return function (e) {
        return t(e)
    }
}

var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports,
    freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module,
    moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1,
    freeProcess = moduleExports$1 && freeGlobal$1.process, nodeUtil = function () {
        try {
            var t = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
            return t || freeProcess && freeProcess.binding && freeProcess.binding("util")
        } catch {
        }
    }(), nodeUtil$1 = nodeUtil, nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray,
    isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray, isTypedArray$1 = isTypedArray,
    objectProto$8 = Object.prototype, hasOwnProperty$7 = objectProto$8.hasOwnProperty;

function arrayLikeKeys(t, e) {
    var r = isArray$1(t), i = !r && isArguments$1(t), s = !r && !i && isBuffer$1(t),
        a = !r && !i && !s && isTypedArray$1(t), n = r || i || s || a, l = n ? baseTimes(t.length, String) : [],
        o = l.length;
    for (var h in t) (e || hasOwnProperty$7.call(t, h)) && !(n && (h == "length" || s && (h == "offset" || h == "parent") || a && (h == "buffer" || h == "byteLength" || h == "byteOffset") || isIndex(h, o))) && l.push(h);
    return l
}

function overArg(t, e) {
    return function (r) {
        return t(e(r))
    }
}

var nativeKeys = overArg(Object.keys, Object), nativeKeys$1 = nativeKeys, objectProto$7 = Object.prototype,
    hasOwnProperty$6 = objectProto$7.hasOwnProperty;

function baseKeys(t) {
    if (!isPrototype(t)) return nativeKeys$1(t);
    var e = [];
    for (var r in Object(t)) hasOwnProperty$6.call(t, r) && r != "constructor" && e.push(r);
    return e
}

function keys(t) {
    return isArrayLike(t) ? arrayLikeKeys(t) : baseKeys(t)
}

function nativeKeysIn(t) {
    var e = [];
    if (t != null) for (var r in Object(t)) e.push(r);
    return e
}

var objectProto$6 = Object.prototype, hasOwnProperty$5 = objectProto$6.hasOwnProperty;

function baseKeysIn(t) {
    if (!isObject(t)) return nativeKeysIn(t);
    var e = isPrototype(t), r = [];
    for (var i in t) i == "constructor" && (e || !hasOwnProperty$5.call(t, i)) || r.push(i);
    return r
}

function keysIn(t) {
    return isArrayLike(t) ? arrayLikeKeys(t, !0) : baseKeysIn(t)
}

var nativeCreate = getNative(Object, "create"), nativeCreate$1 = nativeCreate;

function hashClear() {
    this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {}, this.size = 0
}

function hashDelete(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}

var HASH_UNDEFINED$2 = "__lodash_hash_undefined__", objectProto$5 = Object.prototype,
    hasOwnProperty$4 = objectProto$5.hasOwnProperty;

function hashGet(t) {
    var e = this.__data__;
    if (nativeCreate$1) {
        var r = e[t];
        return r === HASH_UNDEFINED$2 ? void 0 : r
    }
    return hasOwnProperty$4.call(e, t) ? e[t] : void 0
}

var objectProto$4 = Object.prototype, hasOwnProperty$3 = objectProto$4.hasOwnProperty;

function hashHas(t) {
    var e = this.__data__;
    return nativeCreate$1 ? e[t] !== void 0 : hasOwnProperty$3.call(e, t)
}

var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";

function hashSet(t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = nativeCreate$1 && e === void 0 ? HASH_UNDEFINED$1 : e, this
}

function Hash(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}

Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

function listCacheClear() {
    this.__data__ = [], this.size = 0
}

function assocIndexOf(t, e) {
    for (var r = t.length; r--;) if (eq(t[r][0], e)) return r;
    return -1
}

var arrayProto = Array.prototype, splice = arrayProto.splice;

function listCacheDelete(t) {
    var e = this.__data__, r = assocIndexOf(e, t);
    if (r < 0) return !1;
    var i = e.length - 1;
    return r == i ? e.pop() : splice.call(e, r, 1), --this.size, !0
}

function listCacheGet(t) {
    var e = this.__data__, r = assocIndexOf(e, t);
    return r < 0 ? void 0 : e[r][1]
}

function listCacheHas(t) {
    return assocIndexOf(this.__data__, t) > -1
}

function listCacheSet(t, e) {
    var r = this.__data__, i = assocIndexOf(r, t);
    return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this
}

function ListCache(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}

ListCache.prototype.clear = listCacheClear;
ListCache.prototype.delete = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map = getNative(root$1, "Map"), Map$1 = Map;

function mapCacheClear() {
    this.size = 0, this.__data__ = {hash: new Hash, map: new (Map$1 || ListCache), string: new Hash}
}

function isKeyable(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}

function getMapData(t, e) {
    var r = t.__data__;
    return isKeyable(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map
}

function mapCacheDelete(t) {
    var e = getMapData(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}

function mapCacheGet(t) {
    return getMapData(this, t).get(t)
}

function mapCacheHas(t) {
    return getMapData(this, t).has(t)
}

function mapCacheSet(t, e) {
    var r = getMapData(this, t), i = r.size;
    return r.set(t, e), this.size += r.size == i ? 0 : 1, this
}

function MapCache(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}

MapCache.prototype.clear = mapCacheClear;
MapCache.prototype.delete = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

function arrayPush(t, e) {
    for (var r = -1, i = e.length, s = t.length; ++r < i;) t[s + r] = e[r];
    return t
}

var getPrototype = overArg(Object.getPrototypeOf, Object), getPrototype$1 = getPrototype;

function stackClear() {
    this.__data__ = new ListCache, this.size = 0
}

function stackDelete(t) {
    var e = this.__data__, r = e.delete(t);
    return this.size = e.size, r
}

function stackGet(t) {
    return this.__data__.get(t)
}

function stackHas(t) {
    return this.__data__.has(t)
}

var LARGE_ARRAY_SIZE = 200;

function stackSet(t, e) {
    var r = this.__data__;
    if (r instanceof ListCache) {
        var i = r.__data__;
        if (!Map$1 || i.length < LARGE_ARRAY_SIZE - 1) return i.push([t, e]), this.size = ++r.size, this;
        r = this.__data__ = new MapCache(i)
    }
    return r.set(t, e), this.size = r.size, this
}

function Stack(t) {
    var e = this.__data__ = new ListCache(t);
    this.size = e.size
}

Stack.prototype.clear = stackClear;
Stack.prototype.delete = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

function baseAssign(t, e) {
    return t && copyObject(e, keys(e), t)
}

function baseAssignIn(t, e) {
    return t && copyObject(e, keysIn(e), t)
}

var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports,
    freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module,
    moduleExports = freeModule && freeModule.exports === freeExports, Buffer2 = moduleExports ? root$1.Buffer : void 0,
    allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;

function cloneBuffer(t, e) {
    if (e) return t.slice();
    var r = t.length, i = allocUnsafe ? allocUnsafe(r) : new t.constructor(r);
    return t.copy(i), i
}

function arrayFilter(t, e) {
    for (var r = -1, i = t == null ? 0 : t.length, s = 0, a = []; ++r < i;) {
        var n = t[r];
        e(n, r, t) && (a[s++] = n)
    }
    return a
}

function stubArray() {
    return []
}

var objectProto$3 = Object.prototype, propertyIsEnumerable = objectProto$3.propertyIsEnumerable,
    nativeGetSymbols$1 = Object.getOwnPropertySymbols, getSymbols = nativeGetSymbols$1 ? function (t) {
        return t == null ? [] : (t = Object(t), arrayFilter(nativeGetSymbols$1(t), function (e) {
            return propertyIsEnumerable.call(t, e)
        }))
    } : stubArray, getSymbols$1 = getSymbols;

function copySymbols(t, e) {
    return copyObject(t, getSymbols$1(t), e)
}

var nativeGetSymbols = Object.getOwnPropertySymbols, getSymbolsIn = nativeGetSymbols ? function (t) {
    for (var e = []; t;) arrayPush(e, getSymbols$1(t)), t = getPrototype$1(t);
    return e
} : stubArray, getSymbolsIn$1 = getSymbolsIn;

function copySymbolsIn(t, e) {
    return copyObject(t, getSymbolsIn$1(t), e)
}

function baseGetAllKeys(t, e, r) {
    var i = e(t);
    return isArray$1(t) ? i : arrayPush(i, r(t))
}

function getAllKeys(t) {
    return baseGetAllKeys(t, keys, getSymbols$1)
}

function getAllKeysIn(t) {
    return baseGetAllKeys(t, keysIn, getSymbolsIn$1)
}

var DataView = getNative(root$1, "DataView"), DataView$1 = DataView, Promise$1 = getNative(root$1, "Promise"),
    Promise$2 = Promise$1, Set = getNative(root$1, "Set"), Set$1 = Set, mapTag$4 = "[object Map]",
    objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]",
    weakMapTag$1 = "[object WeakMap]", dataViewTag$3 = "[object DataView]", dataViewCtorString = toSource(DataView$1),
    mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$1),
    weakMapCtorString = toSource(WeakMap$1), getTag = baseGetTag;
(DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1) != mapTag$4 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1 && getTag(new Set$1) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1) != weakMapTag$1) && (getTag = function (t) {
    var e = baseGetTag(t), r = e == objectTag$2 ? t.constructor : void 0, i = r ? toSource(r) : "";
    if (i) switch (i) {
        case dataViewCtorString:
            return dataViewTag$3;
        case mapCtorString:
            return mapTag$4;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag$4;
        case weakMapCtorString:
            return weakMapTag$1
    }
    return e
});
var getTag$1 = getTag, objectProto$2 = Object.prototype, hasOwnProperty$2 = objectProto$2.hasOwnProperty;

function initCloneArray(t) {
    var e = t.length, r = new t.constructor(e);
    return e && typeof t[0] == "string" && hasOwnProperty$2.call(t, "index") && (r.index = t.index, r.input = t.input), r
}

var Uint8Array2 = root$1.Uint8Array, Uint8Array$1 = Uint8Array2;

function cloneArrayBuffer(t) {
    var e = new t.constructor(t.byteLength);
    return new Uint8Array$1(e).set(new Uint8Array$1(t)), e
}

function cloneDataView(t, e) {
    var r = e ? cloneArrayBuffer(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.byteLength)
}

var reFlags = /\w*$/;

function cloneRegExp(t) {
    var e = new t.constructor(t.source, reFlags.exec(t));
    return e.lastIndex = t.lastIndex, e
}

var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0,
    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;

function cloneSymbol(t) {
    return symbolValueOf$1 ? Object(symbolValueOf$1.call(t)) : {}
}

function cloneTypedArray(t, e) {
    var r = e ? cloneArrayBuffer(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.length)
}

var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]",
    numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]",
    stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]", arrayBufferTag$2 = "[object ArrayBuffer]",
    dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]",
    int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]",
    uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]",
    uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";

function initCloneByTag(t, e, r) {
    var i = t.constructor;
    switch (e) {
        case arrayBufferTag$2:
            return cloneArrayBuffer(t);
        case boolTag$2:
        case dateTag$2:
            return new i(+t);
        case dataViewTag$2:
            return cloneDataView(t, r);
        case float32Tag$1:
        case float64Tag$1:
        case int8Tag$1:
        case int16Tag$1:
        case int32Tag$1:
        case uint8Tag$1:
        case uint8ClampedTag$1:
        case uint16Tag$1:
        case uint32Tag$1:
            return cloneTypedArray(t, r);
        case mapTag$3:
            return new i;
        case numberTag$2:
        case stringTag$2:
            return new i(t);
        case regexpTag$2:
            return cloneRegExp(t);
        case setTag$3:
            return new i;
        case symbolTag$2:
            return cloneSymbol(t)
    }
}

function initCloneObject(t) {
    return typeof t.constructor == "function" && !isPrototype(t) ? baseCreate$1(getPrototype$1(t)) : {}
}

var mapTag$2 = "[object Map]";

function baseIsMap(t) {
    return isObjectLike(t) && getTag$1(t) == mapTag$2
}

var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap, isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap, isMap$1 = isMap,
    setTag$2 = "[object Set]";

function baseIsSet(t) {
    return isObjectLike(t) && getTag$1(t) == setTag$2
}

var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet, isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet, isSet$1 = isSet,
    CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4, argsTag$1 = "[object Arguments]",
    arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]",
    errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]",
    mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]",
    regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]",
    symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]", arrayBufferTag$1 = "[object ArrayBuffer]",
    dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]",
    int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]",
    uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]",
    uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;

function baseClone(t, e, r, i, s, a) {
    var n, l = e & CLONE_DEEP_FLAG$1, o = e & CLONE_FLAT_FLAG, h = e & CLONE_SYMBOLS_FLAG$1;
    if (r && (n = s ? r(t, i, s, a) : r(t)), n !== void 0) return n;
    if (!isObject(t)) return t;
    var m = isArray$1(t);
    if (m) {
        if (n = initCloneArray(t), !l) return copyArray(t, n)
    } else {
        var S = getTag$1(t), f = S == funcTag || S == genTag;
        if (isBuffer$1(t)) return cloneBuffer(t, l);
        if (S == objectTag$1 || S == argsTag$1 || f && !s) {
            if (n = o || f ? {} : initCloneObject(t), !l) return o ? copySymbolsIn(t, baseAssignIn(n, t)) : copySymbols(t, baseAssign(n, t))
        } else {
            if (!cloneableTags[S]) return s ? t : {};
            n = initCloneByTag(t, S, l)
        }
    }
    a || (a = new Stack);
    var b = a.get(t);
    if (b) return b;
    a.set(t, n), isSet$1(t) ? t.forEach(function (x) {
        n.add(baseClone(x, e, r, x, t, a))
    }) : isMap$1(t) && t.forEach(function (x, p) {
        n.set(p, baseClone(x, e, r, p, t, a))
    });
    var y = h ? o ? getAllKeysIn : getAllKeys : o ? keysIn : keys, d = m ? void 0 : y(t);
    return arrayEach(d || t, function (x, p) {
        d && (p = x, x = t[p]), assignValue(n, p, baseClone(x, e, r, p, t, a))
    }), n
}

var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;

function cloneDeep(t) {
    return baseClone(t, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG)
}

var HASH_UNDEFINED = "__lodash_hash_undefined__";

function setCacheAdd(t) {
    return this.__data__.set(t, HASH_UNDEFINED), this
}

function setCacheHas(t) {
    return this.__data__.has(t)
}

function SetCache(t) {
    var e = -1, r = t == null ? 0 : t.length;
    for (this.__data__ = new MapCache; ++e < r;) this.add(t[e])
}

SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

function arraySome(t, e) {
    for (var r = -1, i = t == null ? 0 : t.length; ++r < i;) if (e(t[r], r, t)) return !0;
    return !1
}

function cacheHas(t, e) {
    return t.has(e)
}

var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;

function equalArrays(t, e, r, i, s, a) {
    var n = r & COMPARE_PARTIAL_FLAG$3, l = t.length, o = e.length;
    if (l != o && !(n && o > l)) return !1;
    var h = a.get(t), m = a.get(e);
    if (h && m) return h == e && m == t;
    var S = -1, f = !0, b = r & COMPARE_UNORDERED_FLAG$1 ? new SetCache : void 0;
    for (a.set(t, e), a.set(e, t); ++S < l;) {
        var y = t[S], d = e[S];
        if (i) var x = n ? i(d, y, S, e, t, a) : i(y, d, S, t, e, a);
        if (x !== void 0) {
            if (x) continue;
            f = !1;
            break
        }
        if (b) {
            if (!arraySome(e, function (p, u) {
                if (!cacheHas(b, u) && (y === p || s(y, p, r, i, a))) return b.push(u)
            })) {
                f = !1;
                break
            }
        } else if (!(y === d || s(y, d, r, i, a))) {
            f = !1;
            break
        }
    }
    return a.delete(t), a.delete(e), f
}

function mapToArray(t) {
    var e = -1, r = Array(t.size);
    return t.forEach(function (i, s) {
        r[++e] = [s, i]
    }), r
}

function setToArray(t) {
    var e = -1, r = Array(t.size);
    return t.forEach(function (i) {
        r[++e] = i
    }), r
}

var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2, boolTag = "[object Boolean]", dateTag = "[object Date]",
    errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]",
    setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]",
    arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]",
    symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;

function equalByTag(t, e, r, i, s, a, n) {
    switch (r) {
        case dataViewTag:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
            t = t.buffer, e = e.buffer;
        case arrayBufferTag:
            return !(t.byteLength != e.byteLength || !a(new Uint8Array$1(t), new Uint8Array$1(e)));
        case boolTag:
        case dateTag:
        case numberTag:
            return eq(+t, +e);
        case errorTag:
            return t.name == e.name && t.message == e.message;
        case regexpTag:
        case stringTag:
            return t == e + "";
        case mapTag:
            var l = mapToArray;
        case setTag:
            var o = i & COMPARE_PARTIAL_FLAG$2;
            if (l || (l = setToArray), t.size != e.size && !o) return !1;
            var h = n.get(t);
            if (h) return h == e;
            i |= COMPARE_UNORDERED_FLAG, n.set(t, e);
            var m = equalArrays(l(t), l(e), i, s, a, n);
            return n.delete(t), m;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(t) == symbolValueOf.call(e)
    }
    return !1
}

var COMPARE_PARTIAL_FLAG$1 = 1, objectProto$1 = Object.prototype, hasOwnProperty$1 = objectProto$1.hasOwnProperty;

function equalObjects(t, e, r, i, s, a) {
    var n = r & COMPARE_PARTIAL_FLAG$1, l = getAllKeys(t), o = l.length, h = getAllKeys(e), m = h.length;
    if (o != m && !n) return !1;
    for (var S = o; S--;) {
        var f = l[S];
        if (!(n ? f in e : hasOwnProperty$1.call(e, f))) return !1
    }
    var b = a.get(t), y = a.get(e);
    if (b && y) return b == e && y == t;
    var d = !0;
    a.set(t, e), a.set(e, t);
    for (var x = n; ++S < o;) {
        f = l[S];
        var p = t[f], u = e[f];
        if (i) var c = n ? i(u, p, f, e, t, a) : i(p, u, f, t, e, a);
        if (!(c === void 0 ? p === u || s(p, u, r, i, a) : c)) {
            d = !1;
            break
        }
        x || (x = f == "constructor")
    }
    if (d && !x) {
        var v = t.constructor, _ = e.constructor;
        v != _ && "constructor" in t && "constructor" in e && !(typeof v == "function" && v instanceof v && typeof _ == "function" && _ instanceof _) && (d = !1)
    }
    return a.delete(t), a.delete(e), d
}

var COMPARE_PARTIAL_FLAG = 1, argsTag = "[object Arguments]", arrayTag = "[object Array]",
    objectTag = "[object Object]", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;

function baseIsEqualDeep(t, e, r, i, s, a) {
    var n = isArray$1(t), l = isArray$1(e), o = n ? arrayTag : getTag$1(t), h = l ? arrayTag : getTag$1(e);
    o = o == argsTag ? objectTag : o, h = h == argsTag ? objectTag : h;
    var m = o == objectTag, S = h == objectTag, f = o == h;
    if (f && isBuffer$1(t)) {
        if (!isBuffer$1(e)) return !1;
        n = !0, m = !1
    }
    if (f && !m) return a || (a = new Stack), n || isTypedArray$1(t) ? equalArrays(t, e, r, i, s, a) : equalByTag(t, e, o, r, i, s, a);
    if (!(r & COMPARE_PARTIAL_FLAG)) {
        var b = m && hasOwnProperty.call(t, "__wrapped__"), y = S && hasOwnProperty.call(e, "__wrapped__");
        if (b || y) {
            var d = b ? t.value() : t, x = y ? e.value() : e;
            return a || (a = new Stack), s(d, x, r, i, a)
        }
    }
    return f ? (a || (a = new Stack), equalObjects(t, e, r, i, s, a)) : !1
}

function baseIsEqual(t, e, r, i, s) {
    return t === e ? !0 : t == null || e == null || !isObjectLike(t) && !isObjectLike(e) ? t !== t && e !== e : baseIsEqualDeep(t, e, r, i, baseIsEqual, s)
}

function isEqual(t, e) {
    return baseIsEqual(t, e)
}

var _export_sfc = (t, e) => {
    const r = t.__vccOpts || t;
    for (const [i, s] of e) r[i] = s;
    return r
};
const _sfc_main$2 = defineComponent({
    props: {
        animationData: {type: Object, default: () => ({})},
        animationLink: {type: String, default: ""},
        loop: {type: [Boolean, Number], default: !0},
        autoPlay: {type: Boolean, default: !0},
        width: {type: [Number, String], default: "100%"},
        height: {type: [Number, String], default: "100%"},
        speed: {type: Number, default: 1},
        delay: {type: Number, default: 0},
        direction: {type: String, default: "forward"},
        pauseOnHover: {type: Boolean, default: !1},
        playOnHover: {type: Boolean, default: !1},
        backgroundColor: {type: String, default: "transparent"},
        pauseAnimation: {type: Boolean, default: !1},
        noMargin: {type: Boolean, default: !1},
        scale: {type: Number, default: 1},
        renderer: {type: String, default: "svg"},
        rendererSettings: {type: Object, default: () => ({})},
        assetsPath: {type: String, default: ""}
    },
    emits: {onComplete: null, onLoopComplete: null, onEnterFrame: null, onSegmentStart: null, onAnimationLoaded: null},
    setup(t, {emit: e}) {
        const r = ref(), i = ref();
        let s = null, a = 1;
        watchEffect(async () => {
            if (t.animationLink != "") try {
                const T = await (await fetch(t.animationLink)).json();
                r.value = T, nextTick(() => n())
            } catch (E) {
                console.error(E);
                return
            } else if (isEqual(t.animationData, {}) === !1) r.value = cloneDeep(t.animationData), nextTick(() => n()); else throw new Error("You must provide either animationLink or animationData")
        });
        const n = () => {
            if (!i.value || !r.value) return;
            s == null || s.destroy(), s = null;
            let E = t.autoPlay, T = t.loop;
            t.playOnHover && (E = !1), typeof T == "number" && T > 0 && (T = T - 1), t.delay > 0 && (E = !1);
            const M = {
                container: i.value,
                renderer: t.renderer,
                loop: T,
                autoplay: E,
                animationData: r.value,
                assetsPath: t.assetsPath
            };
            isEqual(t.rendererSettings, {}) === !1 && (M.rendererSettings = t.rendererSettings), t.scale !== 1 && (M.rendererSettings = __spreadProps(__spreadValues({}, M.rendererSettings), {viewBoxOnly: !0})), s = Lottie.loadAnimation(M), setTimeout(() => {
                E = t.autoPlay, t.playOnHover ? s == null || s.pause() : E ? s == null || s.play() : s == null || s.pause(), e("onAnimationLoaded")
            }, t.delay), s.setSpeed(t.speed), t.direction === "reverse" && s.setDirection(-1), t.direction === "normal" && s.setDirection(1), (t.pauseAnimation || t.playOnHover) && s.pause(), s.addEventListener("loopComplete", () => {
                t.direction === "alternate" && (s == null || s.stop(), a = a === -1 ? 1 : -1, s == null || s.setDirection(a), s == null || s.play()), e("onLoopComplete")
            }), s.addEventListener("complete", () => {
                e("onComplete")
            }), s.addEventListener("enterFrame", () => {
                e("onEnterFrame")
            }), s.addEventListener("segmentStart", () => {
                e("onSegmentStart")
            })
        }, l = computed(() => {
            let E = t.width, T = t.height;
            return typeof t.width == "number" && (E = `${t.width}px`), typeof t.height == "number" && (T = `${t.height}px`), {
                "--lottie-animation-container-width": E,
                "--lottie-animation-container-height": T,
                "--lottie-animation-container-background-color": t.backgroundColor,
                "--lottie-animation-margin": t.noMargin ? "0" : "0 auto",
                "--lottie-animation-scale": t.scale != 1 ? t.scale : ""
            }
        }), o = () => {
            s && t.pauseOnHover && s.pause(), s && t.playOnHover && s.play()
        }, h = () => {
            s && t.pauseOnHover && s.play(), s && t.playOnHover && s.pause()
        };
        return watch(() => t.pauseAnimation, () => {
            if ((t.pauseOnHover || t.playOnHover) && t.pauseAnimation) {
                console.error("If you are using pauseAnimation prop for Vue3-Lottie, please remove the props pauseOnHover and playOnHover");
                return
            }
            s && (t.pauseAnimation ? s.pause() : s.play())
        }), {
            lottieAnimationContainer: i, hoverEnded: h, hoverStarted: o, getCurrentStyle: l, play: () => {
                s && s.play()
            }, pause: () => {
                s && s.pause()
            }, stop: () => {
                s && s.stop()
            }, destroy: () => {
                s && s.destroy()
            }, setSpeed: (E = 1) => {
                if (E <= 0) throw new Error("Speed must be greater than 0");
                s && s.setSpeed(E)
            }, setDirection: E => {
                s && (E === "forward" ? s.setDirection(1) : E === "reverse" && s.setDirection(-1))
            }, goToAndStop: (E, T = !0) => {
                s && s.goToAndStop(E, T)
            }, goToAndPlay: (E, T = !0) => {
                s && s.goToAndPlay(E, T)
            }, playSegments: (E, T = !1) => {
                s && s.playSegments(E, T)
            }, setSubFrame: (E = !0) => {
                s && s.setSubframe(E)
            }, getDuration: (E = !0) => {
                if (s) return s.getDuration(E)
            }, updateDocumentData: (E, T = 0) => {
                s && s.renderer.elements[T].updateDocumentData(E)
            }
        }
    }
});

function _sfc_render(t, e, r, i, s, a) {
    return openBlock(), createElementBlock("div", {
        ref: "lottieAnimationContainer",
        class: "lottie-animation-container",
        style: normalizeStyle(t.getCurrentStyle),
        onMouseenter: e[0] || (e[0] = (...n) => t.hoverStarted && t.hoverStarted(...n)),
        onMouseleave: e[1] || (e[1] = (...n) => t.hoverEnded && t.hoverEnded(...n))
    }, null, 36)
}

var Vue3Lottie = _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _hoisted_1$1 = ["textContent"], _sfc_main$1 = defineComponent({
        __name: "IndexItemCard", props: {name: {}, path: {}, icon: {}}, setup(t) {
            const e = t, r = {
                l1: () => __vitePreload(() => import("./l1-5ad38fe7.js"), []),
                l2: () => __vitePreload(() => import("./l2-916d48db.js"), []),
                l3: () => __vitePreload(() => import("./l3-a06d0d4d.js"), []),
                l4: () => __vitePreload(() => import("./l4-5c1c26ff.js"), []),
                l5: () => __vitePreload(() => import("./l5-acd9898a.js"), []),
                l6: () => __vitePreload(() => import("./l6-2564599c.js"), [])
            };
            let i = ref("");
            return onMounted(async () => {
                i.value = await r[e.icon]().then(s => s.default)
            }), (s, a) => {
                const n = resolveComponent("q-card-section"), l = resolveComponent("q-card");
                return openBlock(), createBlock(l, {
                    class: "index-item-card inline-block q-ma-md cursor-pointer",
                    bordered: "",
                    flat: "",
                    onClick: a[0] || (a[0] = o => s.$router.push(s.path))
                }, {
                    default: withCtx(() => [createVNode(n, {class: "text-center"}, {
                        default: withCtx(() => [i.value ? (openBlock(), createBlock(unref(Vue3Lottie), {
                            key: 0,
                            "animation-data": i.value,
                            width: 100,
                            height: 100
                        }, null, 8, ["animation-data"])) : createCommentVNode("", !0), createBaseVNode("p", {
                            textContent: toDisplayString(s.name),
                            class: "q-mt-md text-subtitle1"
                        }, null, 8, _hoisted_1$1)]), _: 1
                    })]), _: 1
                })
            }
        }
    }), IndexItemCard_vue_vue_type_style_index_0_scoped_3d101ca9_lang = "",
    IndexItemCard = _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-3d101ca9"]]),
    _withScopeId = t => (pushScopeId("data-v-3be576a2"), t = t(), popScopeId(), t),
    _hoisted_1 = {class: "TheHomeIndex"}, _hoisted_2 = {class: "relative-position"},
    _hoisted_3 = {class: "absolute-top z-top full-width text-white", style: {top: "5%"}},
    _hoisted_4 = _withScopeId(() => createBaseVNode("div", {
        class: "absolute-left",
        style: {left: "20%", top: "37%"}
    }, [createBaseVNode("p", {
        class: "text-h2 text-bold text-white",
        style: {"letter-spacing": "8px"}
    }, "高考推荐论坛"), createBaseVNode("p", {
        class: "text-overline text-white",
        style: {"font-size": "1.1em"}
    }, "Gao Kao Recommend Forum")], -1)),
    _hoisted_5 = {class: "absolute-bottom-right", style: {right: "20%", bottom: "10%"}},
    _hoisted_6 = {style: {width: "80%"}, class: "q-mx-auto text-center"},
    _hoisted_7 = _withScopeId(() => createBaseVNode("div", {
        style: {height: "150px"},
        class: "bg-grey-8"
    }, [createBaseVNode("div", {
        class: "q-mx-auto q-pa-lg text-white",
        style: {width: "80%", "letter-spacing": "5px"}
    }, [createBaseVNode("p", null, "xxxxxxxxxxxxxxxxxxxxxxxx"), createBaseVNode("p", {class: "q-ml-lg"}, "xxxxxxxxxxxxxxxxxxxxxxxx"), createBaseVNode("p", {class: "q-ml-xl"}, "xxxxxxxxxxxxxxxxxxxxxxxx")])], -1)),
    _sfc_main = defineComponent({
        __name: "TheHomeIndex", setup(t) {
            let e = useLoginInfo(!0), r = toRef(e, "loginInfo"), i = ref("bg1"), s = useMenu(children, "/home", r),
                a = toRef(s, "menus");
            toRef(s, "activeMenu");
            let n = computed(() => a.value.filter(l => l.icon));
            return onMounted(() => {
            }), (l, o) => {
                const h = resolveComponent("q-toolbar-title"), m = resolveComponent("q-separator"),
                    S = resolveComponent("q-btn"), f = resolveComponent("q-btn-group"),
                    b = resolveComponent("q-toolbar"), y = resolveComponent("q-img"),
                    d = resolveComponent("q-carousel-slide"), x = resolveComponent("q-carousel");
                return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createVNode(b, {
                    style: {width: "80%"},
                    class: "q-mx-auto"
                }, {
                    default: withCtx(() => [createVNode(h, null, {
                        default: withCtx(() => [createTextVNode(" 非国家教育考试科研规划重点课题·还没成果 ")]),
                        _: 1
                    }), createVNode(f, {
                        unelevated: "",
                        outline: ""
                    }, {
                        default: withCtx(() => [(openBlock(!0), createElementBlock(Fragment, null, renderList(n.value, (p, u) => (openBlock(), createElementBlock(Fragment, null, [u !== 0 ? (openBlock(), createBlock(m, {
                            key: 0,
                            vertical: ""
                        })) : createCommentVNode("", !0), createVNode(S, {
                            label: p.name,
                            unelevated: "",
                            outline: "",
                            to: p.path
                        }, null, 8, ["label", "to"])], 64))), 256))]), _: 1
                    })]), _: 1
                })]), createVNode(x, {
                    modelValue: i.value,
                    "onUpdate:modelValue": o[0] || (o[0] = p => i.value = p),
                    "transition-prev": "slide-right",
                    "transition-next": "slide-left",
                    animated: "",
                    navigation: "",
                    arrows: "",
                    height: "600px",
                    infinite: "",
                    autoplay: ""
                }, {
                    default: withCtx(() => [createVNode(d, {
                        name: "bg1",
                        class: "q-pa-none overflow-hidden"
                    }, {
                        default: withCtx(() => [createVNode(y, {src: unref(bg1Png)}, null, 8, ["src"])]),
                        _: 1
                    }), createVNode(d, {
                        name: "bg2",
                        class: "q-pa-none overflow-hidden"
                    }, {default: withCtx(() => [createVNode(y, {src: unref(bg2Png)}, null, 8, ["src"])]), _: 1})]), _: 1
                }, 8, ["modelValue"]), _hoisted_4, createBaseVNode("div", _hoisted_5, [createVNode(y, {
                    src: unref(logoPng),
                    width: "380px"
                }, null, 8, ["src"])])]), createBaseVNode("div", _hoisted_6, [(openBlock(!0), createElementBlock(Fragment, null, renderList(n.value, p => (openBlock(), createBlock(IndexItemCard, {
                    name: p.name,
                    path: p.path,
                    icon: p.icon
                }, null, 8, ["name", "path", "icon"]))), 256))]), _hoisted_7])
            }
        }
    }), TheHomeIndex_vue_vue_type_style_index_0_scoped_3be576a2_lang = "",
    TheHomeIndex = _export_sfc$1(_sfc_main, [["__scopeId", "data-v-3be576a2"]]);
export {TheHomeIndex as default};
