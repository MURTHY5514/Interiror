/* clarity-js v0.7.10: https://github.com/microsoft/clarity (License: MIT) */ ! function() {
    "use strict";
    var t = Object.freeze({
            __proto__: null,
            get queue() {
                return Ta
            },
            get start() {
                return Na
            },
            get stop() {
                return _a
            },
            get track() {
                return Ea
            }
        }),
        e = Object.freeze({
            __proto__: null,
            get clone() {
                return Za
            },
            get compute() {
                return Ka
            },
            get data() {
                return Xa
            },
            get keys() {
                return Pa
            },
            get reset() {
                return Qa
            },
            get start() {
                return Ja
            },
            get stop() {
                return tr
            },
            get trigger() {
                return Ga
            },
            get update() {
                return $a
            }
        }),
        n = Object.freeze({
            __proto__: null,
            get check() {
                return or
            },
            get compute() {
                return cr
            },
            get data() {
                return Ya
            },
            get start() {
                return ir
            },
            get stop() {
                return sr
            },
            get trigger() {
                return ur
            }
        }),
        a = Object.freeze({
            __proto__: null,
            get compute() {
                return vr
            },
            get data() {
                return lr
            },
            get log() {
                return pr
            },
            get reset() {
                return gr
            },
            get start() {
                return fr
            },
            get stop() {
                return hr
            },
            get updates() {
                return dr
            }
        }),
        r = Object.freeze({
            __proto__: null,
            get callbacks() {
                return br
            },
            get clear() {
                return xr
            },
            get consent() {
                return Sr
            },
            get data() {
                return mr
            },
            get id() {
                return Or
            },
            get metadata() {
                return Er
            },
            get save() {
                return Mr
            },
            get start() {
                return wr
            },
            get stop() {
                return kr
            }
        }),
        i = Object.freeze({
            __proto__: null,
            get data() {
                return Lr
            },
            get envelope() {
                return Hr
            },
            get start() {
                return zr
            },
            get stop() {
                return Rr
            }
        }),
        o = {
            projectId: null,
            delay: 1e3,
            lean: !1,
            track: !0,
            content: !0,
            drop: [],
            mask: [],
            unmask: [],
            regions: [],
            cookies: [],
            fraud: !0,
            checksum: [],
            report: null,
            upload: null,
            fallback: null,
            upgrade: null,
            action: null,
            dob: null
        };

    function u(t) {
        return window.Zone && "__symbol__" in window.Zone ? window.Zone.__symbol__(t) : t
    }
    var c = 0;

    function s(t) {
        void 0 === t && (t = null);
        var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now();
        return Math.max(Math.round(e - c), 0)
    }
    var l = "0.7.10";

    function d(t, e) {
        void 0 === e && (e = null);
        for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
            if (a = (a << 5) + a ^ t.charCodeAt(i), i + 1 < t.length) r = (r << 5) + r ^ t.charCodeAt(i + 1)
        }
        return n = Math.abs(a + 11579 * r), (e ? n % Math.pow(2, e) : n).toString(36)
    }
    var f = /\S/gi,
        h = !0,
        p = null,
        v = null,
        g = null;

    function m(t, e, n, a) {
        if (void 0 === a && (a = !1), t) switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                    case "*T":
                    case "value":
                    case "placeholder":
                    case "click":
                        return function(t) {
                            var e = -1,
                                n = 0,
                                a = !1,
                                r = !1,
                                i = !1,
                                o = null;
                            O();
                            for (var u = 0; u < t.length; u++) {
                                var c = t.charCodeAt(u);
                                if (a = a || c >= 48 && c <= 57, r = r || 64 === c, i = 9 === c || 10 === c || 13 === c || 32 === c, 0 === u || u === t.length - 1 || i) {
                                    if (a || r) {
                                        null === o && (o = t.split(""));
                                        var s = t.substring(e + 1, i ? u : u + 1);
                                        s = h && null !== g ? s.match(g) ? s : k(s, "▪", "▫") : w(s), o.splice(e + 1 - n, s.length, s), n += s.length - 1
                                    }
                                    i && (a = !1, r = !1, e = u)
                                }
                            }
                            return o ? o.join("") : t
                        }(t);
                    case "input":
                    case "change":
                        return E(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                    case "*T":
                    case "data-":
                        return a ? y(t) : w(t);
                    case "src":
                    case "srcset":
                    case "title":
                    case "alt":
                        return 3 === n ? "" : t;
                    case "value":
                    case "click":
                    case "input":
                    case "change":
                        return E(t);
                    case "placeholder":
                        return w(t)
                }
                break;
            case 4:
                switch (e) {
                    case "*T":
                    case "data-":
                        return a ? y(t) : w(t);
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                        return ""
                }
                break;
            case 5:
                switch (e) {
                    case "*T":
                    case "data-":
                        return k(t, "▪", "▫");
                    case "value":
                    case "input":
                    case "click":
                    case "change":
                        return Array(5).join("•");
                    case "checksum":
                    case "src":
                    case "srcset":
                    case "alt":
                    case "title":
                        return ""
                }
        }
        return t
    }

    function b(t, e) {
        if (void 0 === e && (e = !1), e) return "".concat("https://").concat("Electron");
        var n = o.drop;
        if (n && n.length > 0 && t && t.indexOf("?") > 0) {
            var a = t.split("?"),
                r = a[0],
                i = a[1];
            return r + "?" + i.split("&").map((function(t) {
                return n.some((function(e) {
                    return 0 === t.indexOf("".concat(e, "="))
                })) ? "".concat(t.split("=")[0], "=").concat("*na*") : t
            })).join("&")
        }
        return t
    }

    function y(t) {
        var e = t.trim();
        if (e.length > 0) {
            var n = e[0],
                a = t.indexOf(n),
                r = t.substr(0, a),
                i = t.substr(a + e.length);
            return "".concat(r).concat(e.length.toString(36)).concat(i)
        }
        return t
    }

    function w(t) {
        return t.replace(f, "•")
    }

    function k(t, e, n) {
        return O(), t ? t.replace(v, e).replace(p, n) : t
    }

    function E(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++) n += a > 0 && a % 5 == 0 ? " " : "•";
        return n
    }

    function O() {
        if (h && null === p) try {
            p = new RegExp("\\p{N}", "gu"), v = new RegExp("\\p{L}", "gu"), g = new RegExp("\\p{Sc}", "gu")
        } catch (t) {
            h = !1
        }
    }
    var S = null,
        x = null,
        M = !1;

    function N() {
        M && (S = {
            time: s(),
            event: 4,
            data: {
                visible: x.visible,
                docWidth: x.docWidth,
                docHeight: x.docHeight,
                screenWidth: x.screenWidth,
                screenHeight: x.screenHeight,
                scrollX: x.scrollX,
                scrollY: x.scrollY,
                pointerX: x.pointerX,
                pointerY: x.pointerY,
                activityTime: x.activityTime
            }
        }), x = x || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0
        }
    }

    function T(t, e, n) {
        switch (t) {
            case 8:
                x.docWidth = e, x.docHeight = n;
                break;
            case 11:
                x.screenWidth = e, x.screenHeight = n;
                break;
            case 10:
                x.scrollX = e, x.scrollY = n;
                break;
            default:
                x.pointerX = e, x.pointerY = n
        }
        M = !0
    }

    function _(t) {
        x.activityTime = t
    }

    function I(t, e) {
        x.visible = "visible" === e ? 1 : 0, x.visible || _(t), M = !0
    }

    function D() {
        M && rr(4)
    }
    var C = Object.freeze({
            __proto__: null,
            activity: _,
            compute: D,
            reset: N,
            start: function() {
                M = !1, N()
            },
            get state() {
                return S
            },
            stop: function() {
                N()
            },
            track: T,
            visibility: I
        }),
        j = null;

    function A(t, e) {
        ni() && t && e && "string" == typeof t && "string" == typeof e && t.length < 255 && e.length < 255 && (j = {
            key: t,
            value: e
        }, rr(24))
    }
    var L, z = null,
        R = null;

    function H(t) {
        t in z || (z[t] = 0), t in R || (R[t] = 0), z[t]++, R[t]++
    }

    function q(t, e) {
        null !== e && (t in z || (z[t] = 0), t in R || (R[t] = 0), z[t] += e, R[t] += e)
    }

    function W(t, e) {
        null !== e && !1 === isNaN(e) && (t in z || (z[t] = 0), (e > z[t] || 0 === z[t]) && (R[t] = e, z[t] = e))
    }

    function Y(t, e, n) {
        return window.setTimeout(Yr(t), e, n)
    }

    function X(t) {
        return window.clearTimeout(t)
    }
    var P = 0,
        U = 0,
        B = null;

    function V() {
        B && X(B), B = Y(F, U), P = s()
    }

    function F() {
        var t = s();
        L = {
            gap: t - P
        }, rr(25), L.gap < 3e5 ? B = Y(F, U) : $r && (A("clarity", "suspend"), bi(), ["mousemove", "touchstart"].forEach((function(t) {
            return Pr(document, t, ri)
        })), ["resize", "scroll", "pageshow"].forEach((function(t) {
            return Pr(window, t, ri)
        })))
    }
    var J = Object.freeze({
            __proto__: null,
            get data() {
                return L
            },
            reset: V,
            start: function() {
                U = 6e4, P = 0
            },
            stop: function() {
                X(B), P = 0, U = 0
            }
        }),
        G = null;

    function Z(t, e) {
        if (t in G) {
            var n = G[t],
                a = n[n.length - 1];
            e - a[0] > 100 ? G[t].push([e, 0]) : a[1] = e - a[0]
        } else G[t] = [
            [e, 0]
        ]
    }

    function K() {
        rr(36)
    }

    function Q() {
        G = {}
    }
    var $ = Object.freeze({
            __proto__: null,
            compute: K,
            get data() {
                return G
            },
            reset: Q,
            start: function() {
                G = {}
            },
            stop: function() {
                G = {}
            },
            track: Z
        }),
        tt = null;

    function et(t) {
        ni() && o.lean && (o.lean = !1, tt = {
            key: t
        }, Mr(), o.upgrade && o.upgrade(t), rr(3))
    }
    var nt = Object.freeze({
        __proto__: null,
        get data() {
            return tt
        },
        start: function() {
            !o.lean && o.upgrade && o.upgrade("Config"), tt = null
        },
        stop: function() {
            tt = null
        },
        upgrade: et
    });

    function at(t, e, n, a) {
        return new(n || (n = Promise))((function(r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        }))
    }

    function rt(t, e) {
        var n, a, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(u) {
            return function(c) {
                return function(u) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0, u[0] && (o = 0)), o;) try {
                        if (n = 1, a && (r = 2 & u[0] ? a.return : u[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, u[1])).done) return r;
                        switch (a = 0, r && (u = [2 & u[0], r.value]), u[0]) {
                            case 0:
                            case 1:
                                r = u;
                                break;
                            case 4:
                                return o.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = u[1], u = [0];
                                continue;
                            case 7:
                                u = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                    o.label = u[1];
                                    break
                                }
                                if (6 === u[0] && o.label < r[1]) {
                                    o.label = r[1], r = u;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2], o.ops.push(u);
                                    break
                                }
                                r[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        u = e.call(t, o)
                    } catch (t) {
                        u = [6, t], a = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }
    var it = null;

    function ot(t, e) {
        ct(t, "string" == typeof e ? [e] : e)
    }

    function ut(t, e, n, a) {
        return void 0 === e && (e = null), void 0 === n && (n = null), void 0 === a && (a = null), at(this, void 0, void 0, (function() {
            var r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        return i = {}, [4, dt(t)];
                    case 1:
                        return i.userId = o.sent(), i.userHint = a || ((u = t) && u.length >= 5 ? "".concat(u.substring(0, 2)).concat(k(u.substring(2), "*", "*")) : k(u, "*", "*")), ct("userId", [(r = i).userId]), ct("userHint", [r.userHint]), ct("userType", [ft(t)]), e && (ct("sessionId", [e]), r.sessionId = e), n && (ct("pageId", [n]), r.pageId = n), [2, r]
                }
                var u
            }))
        }))
    }

    function ct(t, e) {
        if (ni() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in it ? it[t] : []), a = 0; a < e.length; a++) "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            it[t] = n
        }
    }

    function st() {
        rr(34)
    }

    function lt() {
        it = {}
    }

    function dt(t) {
        return at(this, void 0, void 0, (function() {
            var e;
            return rt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 4, , 5]), crypto && t ? [4, crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t))] : [3, 2];
                    case 1:
                        return e = n.sent(), [2, Array.prototype.map.call(new Uint8Array(e), (function(t) {
                            return ("00" + t.toString(16)).slice(-2)
                        })).join("")];
                    case 2:
                        return [2, ""];
                    case 3:
                        return [3, 5];
                    case 4:
                        return n.sent(), [2, ""];
                    case 5:
                        return [2]
                }
            }))
        }))
    }

    function ft(t) {
        return t && t.indexOf("@") > 0 ? "email" : "string"
    }
    var ht = "CompressionStream" in window;

    function pt(t) {
        return at(this, void 0, void 0, (function() {
            var e, n;
            return rt(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 3, , 4]), ht ? (e = new ReadableStream({
                            start: function(e) {
                                return at(this, void 0, void 0, (function() {
                                    return rt(this, (function(n) {
                                        return e.enqueue(t), e.close(), [2]
                                    }))
                                }))
                            }
                        }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")), n = Uint8Array.bind, [4, vt(e)]) : [3, 2];
                    case 1:
                        return [2, new(n.apply(Uint8Array, [void 0, a.sent()]))];
                    case 2:
                        return [3, 4];
                    case 3:
                        return a.sent(), [3, 4];
                    case 4:
                        return [2, null]
                }
            }))
        }))
    }

    function vt(t) {
        return at(this, void 0, void 0, (function() {
            var e, n, a, r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        e = t.getReader(), n = [], a = !1, r = [], o.label = 1;
                    case 1:
                        return a ? [3, 3] : [4, e.read()];
                    case 2:
                        return i = o.sent(), a = i.done, r = i.value, a ? [2, n] : (n.push.apply(n, r), [3, 1]);
                    case 3:
                        return [2, n]
                }
            }))
        }))
    }
    var gt = [C, a, Object.freeze({
        __proto__: null,
        compute: st,
        get data() {
            return it
        },
        identify: ut,
        reset: lt,
        set: ot,
        start: function() {
            lt()
        },
        stop: function() {
            lt()
        }
    }), n, $, r, i, t, J, nt, e];

    function mt() {
        z = {}, R = {}, H(5), gt.forEach((function(t) {
            return Yr(t.start)()
        }))
    }

    function bt() {
        gt.slice().reverse().forEach((function(t) {
            return Yr(t.stop)()
        })), z = {}, R = {}
    }

    function yt() {
        st(), D(), vr(), rr(0), K(), cr(), Ka()
    }
    var wt, kt = [];

    function Et(t, e, n) {
        o.fraud && null !== t && n && n.length >= 5 && (wt = {
            id: t,
            target: e,
            checksum: d(n, 24)
        }, kt.indexOf(wt.checksum) < 0 && (kt.push(wt.checksum), Ra(41)))
    }
    var Ot = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
        St = {};

    function xt(t, e) {
        var n = t.attributes,
            a = t.prefix ? t.prefix[e] : null,
            r = 0 === e ? "".concat("~").concat(t.position - 1) : ":nth-of-type(".concat(t.position, ")");
        switch (t.tag) {
            case "STYLE":
            case "TITLE":
            case "LINK":
            case "META":
            case "*T":
            case "*D":
                return "";
            case "HTML":
                return "HTML";
            default:
                if (null === a) return "";
                a = "".concat(a).concat(">"), t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
                var i = "".concat(a).concat(t.tag).concat(r),
                    o = "id" in n && n.id.length > 0 ? n.id : null,
                    u = "BODY" !== t.tag && "class" in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function(t) {
                        return Mt(t)
                    })).join(".") : null;
                if (u && u.length > 0)
                    if (0 === e) {
                        var c = "".concat(function(t) {
                            for (var e = t.split(">"), n = 0; n < e.length; n++) {
                                var a = e[n].indexOf("~"),
                                    r = e[n].indexOf(".");
                                e[n] = e[n].substring(0, r > 0 ? r : a > 0 ? a : e[n].length)
                            }
                            return e.join(">")
                        }(a)).concat(t.tag).concat(".").concat(u);
                        c in St || (St[c] = []), St[c].indexOf(t.id) < 0 && St[c].push(t.id), i = "".concat(c).concat("~").concat(St[c].indexOf(t.id))
                    } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
                return i = o && Mt(o) ? "".concat(function(t) {
                    var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                    if (a < 0) return "";
                    return t.substring(0, t.indexOf(">", a) + 1)
                }(a)).concat("#").concat(o) : i, i
        }
    }

    function Mt(t) {
        if (!t) return !1;
        if (Ot.some((function(e) {
                return t.toLowerCase().indexOf(e) >= 0
            }))) return !1;
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57) return !1
        }
        return !0
    }
    var Nt = 1,
        Tt = [],
        _t = [],
        It = [],
        Dt = {},
        Ct = [],
        jt = [],
        At = [],
        Lt = [],
        zt = [],
        Rt = [],
        Ht = null,
        qt = null,
        Wt = null,
        Yt = null;

    function Xt() {
        Ut(), Bt(document, !0)
    }

    function Pt() {
        Ut()
    }

    function Ut() {
        Nt = 1, Tt = [], _t = [], It = [], Dt = {}, Ct = [], jt = [], At = "address,password,contact".split(","), Lt = "password,secret,pass,social,ssn,code,hidden".split(","), zt = "radio,checkbox,range,button,reset,submit".split(","), Rt = "INPUT,SELECT,TEXTAREA".split(","), Ht = new WeakMap, qt = new WeakMap, Wt = new WeakMap, Yt = new WeakMap, St = {}
    }

    function Bt(t, e) {
        void 0 === e && (e = !1);
        try {
            e && o.unmask.forEach((function(t) {
                return t.indexOf("!") < 0 ? jt.push(t) : Ct.push(t.substr(1))
            })), "querySelectorAll" in t && (o.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Le(t, "".concat(e[0]))
                }))
            })), o.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Wt.set(t, 3)
                }))
            })), o.checksum.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Yt.set(t, e[0])
                }))
            })), jt.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return Wt.set(t, 0)
                }))
            })))
        } catch (t) {
            Wa(5, 1, t ? t.name : null)
        }
    }

    function Vt(t, e) {
        if (void 0 === e && (e = !1), null === t) return null;
        var n = Ht.get(t);
        return !n && e && (n = Nt++, Ht.set(t, n)), n || null
    }

    function Ft(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (qt.set(n.contentDocument, n), e = !0)
            } catch (t) {}
        }
        return e
    }

    function Jt(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && qt.has(e) ? qt.get(e) : null
    }

    function Gt(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n])
                if (t[n][a] !== e[n][a]) return !0;
            for (var a in e[n])
                if (e[n][a] !== t[n][a]) return !0;
            return !1
        }
        return t[n] !== e[n]
    }

    function Zt(t) {
        var e = t.parent && t.parent in _t ? _t[t.parent] : null,
            n = e ? e.selector : null,
            a = t.data,
            r = function(t, e) {
                e.metadata.position = 1;
                for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0;) {
                    var a = _t[t.children[n]];
                    if (e.data.tag === a.data.tag) {
                        e.metadata.position = a.metadata.position + 1;
                        break
                    }
                }
                return e.metadata.position
            }(e, t),
            i = {
                id: t.id,
                tag: a.tag,
                prefix: n,
                position: r,
                attributes: a.attributes
            };
        t.selector = [xt(i, 0), xt(i, 1)], t.hash = t.selector.map((function(t) {
            return t ? d(t) : null
        })), t.hash.forEach((function(e) {
            return Dt[e] = t.id
        }))
    }

    function Kt(t) {
        var e = Qt(te(t));
        return null !== e && null !== e.textContent ? e.textContent.substr(0, 25) : ""
    }

    function Qt(t) {
        return t in Tt ? Tt[t] : null
    }

    function $t(t) {
        var e = Vt(t);
        return e in _t ? _t[e] : null
    }

    function te(t) {
        return t in Dt ? Dt[t] : null
    }

    function ee(t) {
        return Vt(t) in Tt
    }

    function ne() {
        for (var t = [], e = 0, n = It; e < n.length; e++) {
            var a = n[e];
            a in _t && t.push(_t[a])
        }
        return It = [], t
    }

    function ae(t) {
        for (var e = null; null === e && t.previousSibling;) e = Vt(t.previousSibling), t = t.previousSibling;
        return e
    }

    function re(t, e, n, a) {
        void 0 === n && (n = !0), void 0 === a && (a = !1);
        var r = It.indexOf(t);
        r >= 0 && 1 === e && a ? (It.splice(r, 1), It.push(t)) : -1 === r && n && It.push(t)
    }
    var ie = Object.freeze({
            __proto__: null,
            add: function(t, e, n, a) {
                var r, i = Vt(t, !0),
                    u = e ? Vt(e) : null,
                    c = ae(t),
                    s = null,
                    l = ze(t) ? i : null,
                    d = Yt.has(t) ? Yt.get(t) : null,
                    f = o.content ? 1 : 3;
                u >= 0 && _t[u] && ((s = _t[u]).children.push(i), l = null === l ? s.region : l, d = null === d ? s.metadata.fraud : d, f = s.metadata.privacy), n.attributes && "data-clarity-region" in n.attributes && (Le(t, n.attributes["data-clarity-region"]), l = i), Tt[i] = t, _t[i] = {
                        id: i,
                        parent: u,
                        previous: c,
                        children: [],
                        data: n,
                        selector: null,
                        hash: null,
                        region: l,
                        metadata: {
                            active: !0,
                            suspend: !1,
                            privacy: f,
                            position: null,
                            fraud: d,
                            size: null
                        }
                    },
                    function(t, e, n) {
                        var a = e.data,
                            r = e.metadata,
                            i = r.privacy,
                            o = a.attributes || {},
                            u = a.tag.toUpperCase();
                        switch (!0) {
                            case Rt.indexOf(u) >= 0:
                                var c = o.type,
                                    s = "";
                                Object.keys(o).forEach((function(t) {
                                    return s += o[t].toLowerCase()
                                }));
                                var l = Lt.some((function(t) {
                                    return s.indexOf(t) >= 0
                                }));
                                r.privacy = "INPUT" === u && zt.indexOf(c) >= 0 ? i : l ? 4 : 2;
                                break;
                            case "data-clarity-mask" in o:
                                r.privacy = 3;
                                break;
                            case "data-clarity-unmask" in o:
                                r.privacy = 0;
                                break;
                            case Wt.has(t):
                                r.privacy = Wt.get(t);
                                break;
                            case Yt.has(t):
                                r.privacy = 2;
                                break;
                            case "*T" === u:
                                var d = n && n.data ? n.data.tag : "",
                                    f = n && n.selector ? n.selector[1] : "",
                                    h = ["STYLE", "TITLE", "svg:style"];
                                r.privacy = h.includes(d) || Ct.some((function(t) {
                                    return f.indexOf(t) >= 0
                                })) ? 0 : i;
                                break;
                            case 1 === i:
                                r.privacy = function(t, e, n) {
                                    if (t && e.some((function(e) {
                                            return t.indexOf(e) >= 0
                                        }))) return 2;
                                    return n.privacy
                                }(o.class, At, r)
                        }
                    }(t, _t[i], s), Zt(_t[i]), "IMG" === (r = _t[i]).data.tag && 3 === r.metadata.privacy && (r.metadata.size = []), re(i, a)
            },
            get: $t,
            getId: Vt,
            getNode: Qt,
            getValue: function(t) {
                return t in _t ? _t[t] : null
            },
            has: ee,
            hashText: Kt,
            iframe: Jt,
            lookup: te,
            parse: Bt,
            sameorigin: Ft,
            start: Xt,
            stop: Pt,
            update: function(t, e, n, a) {
                var r = Vt(t),
                    i = e ? Vt(e) : null,
                    o = ae(t),
                    u = !1,
                    c = !1;
                if (r in _t) {
                    var s = _t[r];
                    if (s.metadata.active = !0, s.previous !== o && (u = !0, s.previous = o), s.parent !== i) {
                        u = !0;
                        var l = s.parent;
                        if (s.parent = i, null !== i && i >= 0) {
                            var d = null === o ? 0 : _t[i].children.indexOf(o) + 1;
                            _t[i].children.splice(d, 0, r), s.region = ze(t) ? r : _t[i].region
                        } else ! function(t, e) {
                            if (t in _t) {
                                var n = _t[t];
                                n.metadata.active = !1, n.parent = null, re(t, e)
                            }
                        }(r, a);
                        if (null !== l && l >= 0) {
                            var f = _t[l].children.indexOf(r);
                            f >= 0 && _t[l].children.splice(f, 1)
                        }
                        c = !0
                    }
                    for (var h in n) Gt(s.data, n, h) && (u = !0, s.data[h] = n[h]);
                    Zt(s), re(r, a, u, c)
                }
            },
            updates: ne
        }),
        oe = 5e3,
        ue = {},
        ce = [],
        se = null,
        le = null,
        de = null;

    function fe() {
        ue = {}, ce = [], se = null, le = null
    }

    function he(t, e) {
        return void 0 === e && (e = 0), at(this, void 0, void 0, (function() {
            var n, a, r;
            return rt(this, (function(i) {
                for (n = 0, a = ce; n < a.length; n++)
                    if (a[n].task === t) return [2];
                return r = new Promise((function(n) {
                    ce[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: Or()
                    })
                })), null === se && null === le && pe(), [2, r]
            }))
        }))
    }

    function pe() {
        var t = ce.shift();
        t && (se = t, t.task().then((function() {
            t.id === Or() && (t.resolve(), se = null, pe())
        })).catch((function(e) {
            t.id === Or() && (e && Wa(0, 1, e.name, e.message, e.stack), se = null, pe())
        })))
    }

    function ve(t) {
        var e = ye(t);
        return e in ue ? performance.now() - ue[e].start > ue[e].yield ? 0 : 1 : 2
    }

    function ge(t) {
        ue[ye(t)] = {
            start: performance.now(),
            calls: 0,
            yield: 30
        }
    }

    function me(t) {
        var e = performance.now(),
            n = ye(t),
            a = e - ue[n].start;
        q(t.cost, a), H(5), ue[n].calls > 0 && q(4, a)
    }

    function be(t) {
        return at(this, void 0, void 0, (function() {
            var e, n;
            return rt(this, (function(a) {
                switch (a.label) {
                    case 0:
                        return (e = ye(t)) in ue ? (me(t), n = ue[e], [4, we()]) : [3, 2];
                    case 1:
                        n.yield = a.sent().timeRemaining(),
                            function(t) {
                                var e = ye(t);
                                if (ue && ue[e]) {
                                    var n = ue[e].calls,
                                        a = ue[e].yield;
                                    ge(t), ue[e].calls = n + 1, ue[e].yield = a
                                }
                            }(t), a.label = 2;
                    case 2:
                        return [2, e in ue ? 1 : 2]
                }
            }))
        }))
    }

    function ye(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }

    function we() {
        return at(this, void 0, void 0, (function() {
            return rt(this, (function(t) {
                switch (t.label) {
                    case 0:
                        return le ? [4, le] : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, new Promise((function(t) {
                            Ee(t, {
                                timeout: oe
                            })
                        }))]
                }
            }))
        }))
    }
    var ke, Ee = window.requestIdleCallback || function(t, e) {
        var n = performance.now(),
            a = new MessageChannel,
            r = a.port1,
            i = a.port2;
        r.onmessage = function(a) {
            var r = performance.now(),
                o = r - n,
                u = r - a.data;
            if (u > 30 && o < e.timeout) requestAnimationFrame((function() {
                i.postMessage(r)
            }));
            else {
                var c = o > e.timeout;
                t({
                    didTimeout: c,
                    timeRemaining: function() {
                        return c ? 30 : Math.max(0, 30 - u)
                    }
                })
            }
        }, requestAnimationFrame((function() {
            i.postMessage(performance.now())
        }))
    };

    function Oe() {
        ke = null
    }

    function Se() {
        var t = document.body,
            e = document.documentElement,
            n = t ? t.clientWidth : null,
            a = t ? t.scrollWidth : null,
            r = t ? t.offsetWidth : null,
            i = e ? e.clientWidth : null,
            o = e ? e.scrollWidth : null,
            u = e ? e.offsetWidth : null,
            c = Math.max(n, a, r, i, o, u),
            s = t ? t.clientHeight : null,
            l = t ? t.scrollHeight : null,
            d = t ? t.offsetHeight : null,
            f = e ? e.clientHeight : null,
            h = e ? e.scrollHeight : null,
            p = e ? e.offsetHeight : null,
            v = Math.max(s, l, d, f, h, p);
        null !== ke && c === ke.width && v === ke.height || null === c || null === v || (ke = {
            width: c,
            height: v
        }, xe(8))
    }

    function xe(t, e, n) {
        return void 0 === e && (e = null), void 0 === n && (n = null), at(this, void 0, void 0, (function() {
            var a, r, i, u, c, l, d, f, h, p, v, g, b, y, w, k, E, O, S, x, M, N;
            return rt(this, (function(I) {
                switch (I.label) {
                    case 0:
                        switch (a = n || s(), r = [a, t], t) {
                            case 8:
                                return [3, 1];
                            case 7:
                                return [3, 2];
                            case 5:
                            case 6:
                                return [3, 3]
                        }
                        return [3, 10];
                    case 1:
                        return i = ke, r.push(i.width), r.push(i.height), T(t, i.width, i.height), Ta(r), [3, 10];
                    case 2:
                        for (u = 0, c = _e; u < c.length; u++) l = c[u], (r = [l.time, 7]).push(l.data.id), r.push(l.data.interaction), r.push(l.data.visibility), r.push(l.data.name), Ta(r);
                        return Ye(), [3, 10];
                    case 3:
                        if (2 === ve(e)) return [3, 10];
                        if (!((d = ne()).length > 0)) return [3, 9];
                        f = 0, h = d, I.label = 4;
                    case 4:
                        return f < h.length ? (p = h[f], 0 !== (v = ve(e)) ? [3, 6] : [4, be(e)]) : [3, 8];
                    case 5:
                        v = I.sent(), I.label = 6;
                    case 6:
                        if (2 === v) return [3, 8];
                        for (g = p.data, b = p.metadata.active, y = p.metadata.suspend, w = p.metadata.privacy, k = function(t) {
                                var e = t.metadata.privacy;
                                return "*T" === t.data.tag && !(0 === e || 1 === e)
                            }(p), E = 0, O = b ? ["tag", "attributes", "value"] : ["tag"]; E < O.length; E++)
                            if (g[S = O[E]]) switch (S) {
                                case "tag":
                                    x = Me(p), M = k ? -1 : 1, r.push(p.id * M), p.parent && b && r.push(p.parent), p.previous && b && r.push(p.previous), r.push(y ? "*M" : g[S]), x && 2 === x.length && r.push("".concat("#").concat(Ne(x[0]), ".").concat(Ne(x[1])));
                                    break;
                                case "attributes":
                                    for (N in g[S]) void 0 !== g[S][N] && r.push(Te(N, g[S][N], w));
                                    break;
                                case "value":
                                    Et(p.metadata.fraud, p.id, g[S]), r.push(m(g[S], g.tag, w, k))
                            }
                        I.label = 7;
                    case 7:
                        return f++, [3, 4];
                    case 8:
                        6 === t && _(a), Ta(function(t) {
                            for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++)
                                if ("string" == typeof t[i]) {
                                    var o = t[i],
                                        u = n[o] || -1;
                                    u >= 0 ? r ? r.push(u) : (r = [u], e.push(r), a++) : (r = null, e.push(o), n[o] = a++)
                                } else r = null, e.push(t[i]), a++;
                            return e
                        }(r), !o.lean), I.label = 9;
                    case 9:
                        return [3, 10];
                    case 10:
                        return [2]
                }
            }))
        }))
    }

    function Me(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = Qt(t.id);
            if (e) return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }

    function Ne(t) {
        return t.toString(36)
    }

    function Te(t, e, n) {
        return "".concat(t, "=").concat(m(e, 0 === t.indexOf("data-") ? "data-" : t, n))
    }
    var _e = [],
        Ie = null,
        De = {},
        Ce = [],
        je = !1,
        Ae = null;

    function Le(t, e) {
        !1 === Ie.has(t) && (Ie.set(t, e), (Ae = null === Ae && je ? new IntersectionObserver(He, {
            threshold: [0, .2, .4, .6, .8, 1]
        }) : Ae) && t && t.nodeType === Node.ELEMENT_NODE && Ae.observe(t))
    }

    function ze(t) {
        return Ie && Ie.has(t)
    }

    function Re() {
        for (var t = [], e = 0, n = Ce; e < n.length; e++) {
            var a = n[e],
                r = Vt(a.node);
            r in De || (r ? (a.data.id = r, De[r] = a.data, _e.push(We(a.data))) : t.push(a))
        }
        Ce = t, _e.length > 0 && xe(7)
    }

    function He(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e],
                r = a.target,
                i = a.boundingClientRect,
                o = a.intersectionRect,
                u = a.rootBounds;
            if (Ie.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? Vt(r) : null,
                    s = c in De ? De[c] : {
                        id: c,
                        name: Ie.get(r),
                        interaction: 16,
                        visibility: 0
                    },
                    l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8,
                    d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                qe(r, s, s.interaction, d ? 13 : l ? 10 : 0), s.visibility >= 13 && Ae && Ae.unobserve(r)
            }
        }
        _e.length > 0 && xe(7)
    }

    function qe(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction, e.visibility = a > e.visibility ? a : e.visibility, e.id ? (e.id in De && r || !(e.id in De)) && (De[e.id] = e, _e.push(We(e))) : Ce.push({
            node: t,
            data: e
        })
    }

    function We(t) {
        return {
            time: s(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }

    function Ye() {
        _e = []
    }
    var Xe = [];

    function Pe(t) {
        var e = da(t);
        if (e) {
            var n = e.value,
                a = n && n.length >= 5 && o.fraud ? d(n, 24) : "";
            Xe.push({
                time: s(t),
                event: 42,
                data: {
                    target: da(t),
                    type: e.type,
                    value: n,
                    checksum: a
                }
            }), he(ha.bind(this, 42))
        }
    }

    function Ue() {
        Xe = []
    }

    function Be(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent,
                    a = null === n ? Jt(t.ownerDocument) : null;
                e.x += t.offsetLeft, e.y += t.offsetTop, t = a || n
            } while (t);
        return e
    }
    var Ve = ["input", "textarea", "radio", "button", "canvas"],
        Fe = [];

    function Je(t) {
        Pr(t, "click", Ge.bind(this, 9, t), !0)
    }

    function Ge(t, e, n) {
        var a = Jt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Be(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        var c = da(n),
            l = function(t) {
                for (; t && t !== document;) {
                    if (t.nodeType === Node.ELEMENT_NODE) {
                        var e = t;
                        if ("A" === e.tagName) return e
                    }
                    t = t.parentNode
                }
                return null
            }(c),
            d = function(t) {
                var e = null,
                    n = document.documentElement;
                if ("function" == typeof t.getBoundingClientRect) {
                    var a = t.getBoundingClientRect();
                    a && a.width > 0 && a.height > 0 && (e = {
                        x: Math.floor(a.left + ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)),
                        y: Math.floor(a.top + ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)),
                        w: Math.floor(a.width),
                        h: Math.floor(a.height)
                    })
                }
                return e
            }(c);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2), o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0,
            h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        null !== i && null !== o && (Fe.push({
            time: s(n),
            event: t,
            data: {
                target: c,
                x: i,
                y: o,
                eX: f,
                eY: h,
                button: n.button,
                reaction: Ke(c),
                context: Qe(l),
                text: Ze(c),
                link: l ? l.href : null,
                hash: null,
                trust: n.isTrusted ? 1 : 0
            }
        }), he(ha.bind(this, t)))
    }

    function Ze(t) {
        var e = null;
        if (t) {
            var n = t.textContent || t.value || t.alt;
            n && (e = n.replace(/\s+/g, " ").trim().substr(0, 25))
        }
        return e
    }

    function Ke(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (Ve.indexOf(e) >= 0) return 0
        }
        return 1
    }

    function Qe(t) {
        if (t && t.hasAttribute("target")) switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
        }
        return 0
    }

    function $e() {
        Fe = []
    }
    var tn = [];

    function en(t, e) {
        tn.push({
            time: s(e),
            event: 38,
            data: {
                target: da(e),
                action: t
            }
        }), he(ha.bind(this, 38))
    }

    function nn() {
        tn = []
    }
    var an = null,
        rn = [];

    function on(t) {
        var e = da(t),
            n = $t(e);
        if (e && e.type && n) {
            var a = e.value;
            switch (e.type) {
                case "radio":
                case "checkbox":
                    a = e.checked ? "true" : "false"
            }
            var r = {
                target: e,
                value: a
            };
            rn.length > 0 && rn[rn.length - 1].data.target === r.target && rn.pop(), rn.push({
                time: s(t),
                event: 27,
                data: r
            }), X(an), an = Y(un, 1e3, 27)
        }
    }

    function un(t) {
        he(ha.bind(this, t))
    }

    function cn() {
        rn = []
    }
    var sn, ln = [],
        dn = null;

    function fn(t, e, n) {
        var a = Jt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = "pageX" in n ? Math.round(n.pageX) : "clientX" in n ? Math.round(n.clientX + r.scrollLeft) : null,
            o = "pageY" in n ? Math.round(n.pageY) : "clientY" in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = Be(a);
            i = i ? i + Math.round(u.x) : i, o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && pn({
            time: s(n),
            event: t,
            data: {
                target: da(n),
                x: i,
                y: o
            }
        })
    }

    function hn(t, e, n) {
        var a = Jt(e),
            r = a ? a.contentDocument.documentElement : document.documentElement,
            i = n.changedTouches,
            o = s(n);
        if (i)
            for (var u = 0; u < i.length; u++) {
                var c = i[u],
                    l = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
                    d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
                l = l && a ? l + Math.round(a.offsetLeft) : l, d = d && a ? d + Math.round(a.offsetTop) : d, null !== l && null !== d && pn({
                    time: o,
                    event: t,
                    data: {
                        target: da(n),
                        x: l,
                        y: d
                    }
                })
            }
    }

    function pn(t) {
        switch (t.event) {
            case 12:
            case 15:
            case 19:
                var e = ln.length,
                    n = e > 1 ? ln[e - 2] : null;
                n && function(t, e) {
                    var n = t.data.x - e.data.x,
                        a = t.data.y - e.data.y,
                        r = Math.sqrt(n * n + a * a),
                        i = e.time - t.time,
                        o = e.data.target === t.data.target;
                    return e.event === t.event && o && r < 20 && i < 25
                }(n, t) && ln.pop(), ln.push(t), X(dn), dn = Y(vn, 500, t.event);
                break;
            default:
                ln.push(t), vn(t.event)
        }
    }

    function vn(t) {
        he(ha.bind(this, t))
    }

    function gn() {
        ln = []
    }

    function mn() {
        var t = document.documentElement;
        sn = {
            width: t && "clientWidth" in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight" in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        }, ha(11)
    }

    function bn() {
        sn = null
    }
    var yn = [],
        wn = null;

    function kn(t) {
        void 0 === t && (t = null);
        var e = window,
            n = document.documentElement,
            a = t ? da(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = Jt(a);
            e = r ? r.contentWindow : e, a = n = a.documentElement
        }
        var i = a === n && "pageXOffset" in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft),
            o = a === n && "pageYOffset" in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop),
            u = {
                time: s(t),
                event: 10,
                data: {
                    target: a,
                    x: i,
                    y: o
                }
            };
        if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
            var c = yn.length,
                l = c > 1 ? yn[c - 2] : null;
            l && function(t, e) {
                var n = t.data.x - e.data.x,
                    a = t.data.y - e.data.y;
                return n * n + a * a < 400 && e.time - t.time < 25
            }(l, u) && yn.pop(), yn.push(u), X(wn), wn = Y(En, 500, 10)
        }
    }

    function En(t) {
        he(ha.bind(this, t))
    }
    var On = null,
        Sn = null,
        xn = null;

    function Mn(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = On.start ? On.start : null;
            null !== Sn && null !== On.start && n !== e.anchorNode && (X(xn), Nn(21)), On = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            }, Sn = e, X(xn), xn = Y(Nn, 500, 21)
        }
    }

    function Nn(t) {
        he(ha.bind(this, t))
    }

    function Tn() {
        Sn = null, On = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    var _n, In, Dn = [];

    function Cn(t) {
        Dn.push({
            time: s(t),
            event: 39,
            data: {
                target: da(t)
            }
        }), he(ha.bind(this, 39))
    }

    function jn() {
        Dn = []
    }

    function An(t) {
        _n = {
            name: t.type
        }, ha(26, s(t)), bi()
    }

    function Ln() {
        _n = null
    }

    function zn(t) {
        void 0 === t && (t = null), In = {
            visible: "visibilityState" in document ? document.visibilityState : "default"
        }, ha(28, s(t))
    }

    function Rn() {
        In = null
    }

    function Hn(t) {
        ! function(t) {
            var e = Jt(t);
            Pr(e ? e.contentWindow : t === document ? window : t, "scroll", kn, !0)
        }(t), t.nodeType === Node.DOCUMENT_NODE && (Je(t), function(t) {
            Pr(t, "cut", en.bind(this, 0), !0), Pr(t, "copy", en.bind(this, 1), !0), Pr(t, "paste", en.bind(this, 2), !0)
        }(t), function(t) {
            Pr(t, "mousedown", fn.bind(this, 13, t), !0), Pr(t, "mouseup", fn.bind(this, 14, t), !0), Pr(t, "mousemove", fn.bind(this, 12, t), !0), Pr(t, "wheel", fn.bind(this, 15, t), !0), Pr(t, "dblclick", fn.bind(this, 16, t), !0), Pr(t, "touchstart", hn.bind(this, 17, t), !0), Pr(t, "touchend", hn.bind(this, 18, t), !0), Pr(t, "touchmove", hn.bind(this, 19, t), !0), Pr(t, "touchcancel", hn.bind(this, 20, t), !0)
        }(t), function(t) {
            Pr(t, "input", on, !0)
        }(t), function(t) {
            Pr(t, "selectstart", Mn.bind(this, t), !0), Pr(t, "selectionchange", Mn.bind(this, t), !0)
        }(t), function(t) {
            Pr(t, "change", Pe, !0)
        }(t), function(t) {
            Pr(t, "submit", Cn, !0)
        }(t))
    }
    var qn = Object.freeze({
            __proto__: null,
            observe: Hn,
            start: function() {
                pa = [], ga(), $e(), nn(), gn(), cn(), Pr(window, "resize", mn), mn(), Pr(document, "visibilitychange", zn), zn(), yn = [], kn(), Tn(), Ue(), jn(), Pr(window, "pagehide", An)
            },
            stop: function() {
                pa = [], ga(), $e(), nn(), X(dn), ln.length > 0 && vn(ln[ln.length - 1].event), X(an), cn(), bn(), Rn(), X(wn), yn = [], Tn(), X(xn), Ue(), jn(), Ln()
            }
        }),
        Wn = /[^0-9\.]/g;

    function Yn(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e],
                r = t[a];
            if ("@type" === a && "string" == typeof r) switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case "article":
                case "recipe":
                    pr(5, t[a]), pr(8, t.creator), pr(18, t.headline);
                    break;
                case "product":
                    pr(5, t[a]), pr(10, t.name), pr(12, t.sku), t.brand && pr(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (W(11, Xn(t.ratingValue, 100)), W(18, Xn(t.bestRating)), W(19, Xn(t.worstRating))), W(12, Xn(t.ratingCount)), W(17, Xn(t.reviewCount));
                    break;
                case "person":
                    pr(8, t.name);
                    break;
                case "offer":
                    pr(7, t.availability), pr(14, t.itemCondition), pr(13, t.priceCurrency), pr(12, t.sku), W(13, Xn(t.price));
                    break;
                case "brand":
                    pr(6, t.name)
            }
            null !== r && "object" == typeof r && Yn(r)
        }
    }

    function Xn(t, e) {
        if (void 0 === e && (e = 1), null !== t) switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(Wn, "")) * e)
        }
        return null
    }
    var Pn = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last"],
        Un = /[\r\n]+/g;

    function Bn(t, e) {
        var n, a = null;
        if (2 === e && !1 === ee(t)) return a;
        0 !== e && t.nodeType === Node.TEXT_NODE && t.parentElement && "STYLE" === t.parentElement.tagName && (t = t.parentNode);
        var r = !1 === ee(t) ? "add" : "update",
            i = t.parentElement ? t.parentElement : null,
            o = t.ownerDocument !== document;
        switch (t.nodeType) {
            case Node.DOCUMENT_TYPE_NODE:
                i = o && t.parentNode ? Jt(t.parentNode) : i;
                var u = t,
                    c = {
                        tag: (o ? "iframe:" : "") + "*D",
                        attributes: {
                            name: u.name,
                            publicId: u.publicId,
                            systemId: u.systemId
                        }
                    };
                ie[r](t, i, c, e);
                break;
            case Node.DOCUMENT_NODE:
                t === document && Bt(document), Vn(t);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                var s = t;
                if (s.host)
                    if (Bt(s), "function" === typeof s.constructor && s.constructor.toString().indexOf("[native code]") >= 0) {
                        Vn(s);
                        for (var l = "", d = 0, f = ("adoptedStyleSheets" in s ? s.adoptedStyleSheets : []); d < f.length; d++) {
                            l += Jn(f[d])
                        }
                        var h = {
                            tag: "*S",
                            attributes: {
                                style: l
                            }
                        };
                        ie[r](t, s.host, h, e)
                    } else ie[r](t, s.host, {
                        tag: "*P",
                        attributes: {}
                    }, e);
                break;
            case Node.TEXT_NODE:
                if (i = i || t.parentNode, "update" === r || i && ee(i) && "STYLE" !== i.tagName) {
                    var p = {
                        tag: "*T",
                        value: t.nodeValue
                    };
                    ie[r](t, i, p, e)
                }
                break;
            case Node.ELEMENT_NODE:
                var v = t,
                    g = v.tagName,
                    m = function(t) {
                        var e = {},
                            n = t.attributes;
                        if (n && n.length > 0)
                            for (var a = 0; a < n.length; a++) {
                                var r = n[a].name;
                                Pn.indexOf(r) < 0 && (e[r] = n[a].value)
                            }
                        "INPUT" === t.tagName && !("value" in e) && t.value && (e.value = t.value);
                        return e
                    }(v);
                switch (i = t.parentElement ? t.parentElement : t.parentNode ? t.parentNode : null, "http://www.w3.org/2000/svg" === v.namespaceURI && (g = "svg:" + g), g) {
                    case "HTML":
                        i = o && i ? Jt(i) : null;
                        var b = {
                            tag: (o ? "iframe:" : "") + g,
                            attributes: m
                        };
                        ie[r](t, i, b, e);
                        break;
                    case "SCRIPT":
                        if ("type" in m && "application/ld+json" === m.type) try {
                            Yn(JSON.parse(v.text.replace(Un, "")))
                        } catch (t) {}
                        break;
                    case "NOSCRIPT":
                        break;
                    case "META":
                        var y = "property" in m ? "property" : "name" in m ? "name" : null;
                        if (y && "content" in m) {
                            var w = m.content;
                            switch (m[y]) {
                                case "og:title":
                                    pr(20, w);
                                    break;
                                case "og:type":
                                    pr(19, w);
                                    break;
                                case "generator":
                                    pr(21, w)
                            }
                        }
                        break;
                    case "HEAD":
                        var k = {
                                tag: g,
                                attributes: m
                            },
                            E = o && (null === (n = t.ownerDocument) || void 0 === n ? void 0 : n.location) ? t.ownerDocument.location : location;
                        k.attributes["*B"] = E.protocol + "//" + E.host + E.pathname, ie[r](t, i, k, e);
                        break;
                    case "BASE":
                        var O = $t(t.parentElement);
                        if (O) {
                            var S = document.createElement("a");
                            S.href = m.href, O.data.attributes["*B"] = S.protocol + "//" + S.host + S.pathname
                        }
                        break;
                    case "STYLE":
                        var x = {
                            tag: g,
                            attributes: m,
                            value: Fn(v)
                        };
                        ie[r](t, i, x, e);
                        break;
                    case "IFRAME":
                        var M = t,
                            N = {
                                tag: g,
                                attributes: m
                            };
                        Ft(M) && (! function(t) {
                            !1 === ee(t) && Pr(t, "load", la.bind(this, t, "childList"), !0)
                        }(M), N.attributes["*O"] = "true", M.contentDocument && M.contentWindow && "loading" !== M.contentDocument.readyState && (a = M.contentDocument)), ie[r](t, i, N, e);
                        break;
                    default:
                        var T = {
                            tag: g,
                            attributes: m
                        };
                        v.shadowRoot && (a = v.shadowRoot), ie[r](t, i, T, e)
                }
        }
        return a
    }

    function Vn(t) {
        ee(t) || (! function(t) {
            try {
                var e = u("MutationObserver"),
                    n = e in window ? new window[e](Yr(ia)) : null;
                n && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }), Zn.push(n))
            } catch (t) {
                Wa(2, 0, t ? t.name : null)
            }
        }(t), Hn(t))
    }

    function Fn(t) {
        var e = t.textContent ? t.textContent.trim() : "",
            n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0) && (e = Jn(t.sheet)), e
    }

    function Jn(t) {
        var e = "",
            n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (Wa(1, 1, t ? t.name : null), t && "SecurityError" !== t.name) throw t
        }
        if (null !== n)
            for (var a = 0; a < n.length; a++) e += n[a].cssText;
        return e
    }

    function Gn(t, e, n) {
        return at(this, void 0, void 0, (function() {
            var a, r, i, o, u;
            return rt(this, (function(c) {
                switch (c.label) {
                    case 0:
                        a = [t], c.label = 1;
                    case 1:
                        if (!(a.length > 0)) return [3, 4];
                        for (r = a.shift(), i = r.firstChild; i;) a.push(i), i = i.nextSibling;
                        return 0 !== (o = ve(e)) ? [3, 3] : [4, be(e)];
                    case 2:
                        o = c.sent(), c.label = 3;
                    case 3:
                        return 2 === o ? [3, 4] : ((u = Bn(r, n)) && a.push(u), [3, 1]);
                    case 4:
                        return [2]
                }
            }))
        }))
    }
    var Zn = [],
        Kn = [],
        Qn = null,
        $n = null,
        ta = null,
        ea = [],
        na = null,
        aa = null,
        ra = {};

    function ia(t) {
        var e = s();
        Z(6, e), Kn.push({
            time: e,
            mutations: t
        }), he(oa, 1).then((function() {
            Y(Se), Yr(Re)()
        }))
    }

    function oa() {
        return at(this, void 0, void 0, (function() {
            var t, e, n, a, r, i, o, u, c, l;
            return rt(this, (function(d) {
                switch (d.label) {
                    case 0:
                        ge(t = {
                            id: Or(),
                            cost: 3
                        }), d.label = 1;
                    case 1:
                        if (!(Kn.length > 0)) return [3, 8];
                        e = Kn.shift(), n = s(), a = 0, r = e.mutations, d.label = 2;
                    case 2:
                        return a < r.length ? (i = r[a], 0 !== (o = ve(t)) ? [3, 4] : [4, be(t)]) : [3, 6];
                    case 3:
                        o = d.sent(), d.label = 4;
                    case 4:
                        if (2 === o) return [3, 6];
                        switch (u = i.target, c = function(t, e, n) {
                            var a = t.target ? $t(t.target.parentNode) : null;
                            if (a && "HTML" !== a.data.tag) {
                                var r = s() > aa,
                                    i = $t(t.target),
                                    o = i && i.selector ? i.selector.join() : t.target.nodeName,
                                    u = [a.selector ? a.selector.join() : "", o, t.attributeName, ua(t.addedNodes), ua(t.removedNodes)].join();
                                ra[u] = u in ra ? ra[u] : [0, n];
                                var c = ra[u];
                                if (!1 === r && c[0] >= 10 && ca(c[2], 2, e), c[0] = r ? c[1] === n ? c[0] : c[0] + 1 : 1, c[1] = n, 10 === c[0]) return c[2] = t.removedNodes, "suspend";
                                if (c[0] > 10) return ""
                            }
                            return t.type
                        }(i, t, n), c && u && u.ownerDocument && Bt(u.ownerDocument), c && u && u.nodeType == Node.DOCUMENT_FRAGMENT_NODE && u.host && Bt(u), c) {
                            case "attributes":
                                Bn(u, 3);
                                break;
                            case "characterData":
                                Bn(u, 4);
                                break;
                            case "childList":
                                ca(i.addedNodes, 1, t), ca(i.removedNodes, 2, t);
                                break;
                            case "suspend":
                                (l = $t(u)) && (l.metadata.suspend = !0)
                        }
                        d.label = 5;
                    case 5:
                        return a++, [3, 2];
                    case 6:
                        return [4, xe(6, t, e.time)];
                    case 7:
                        return d.sent(), [3, 1];
                    case 8:
                        return me(t), [2]
                }
            }))
        }))
    }

    function ua(t) {
        for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
        return e.join()
    }

    function ca(t, e, n) {
        return at(this, void 0, void 0, (function() {
            var a, r, i;
            return rt(this, (function(o) {
                switch (o.label) {
                    case 0:
                        a = t ? t.length : 0, r = 0, o.label = 1;
                    case 1:
                        return r < a ? 1 !== e ? [3, 2] : (Gn(t[r], n, e), [3, 5]) : [3, 6];
                    case 2:
                        return 0 !== (i = ve(n)) ? [3, 4] : [4, be(n)];
                    case 3:
                        i = o.sent(), o.label = 4;
                    case 4:
                        if (2 === i) return [3, 6];
                        Bn(t[r], e), o.label = 5;
                    case 5:
                        return r++, [3, 1];
                    case 6:
                        return [2]
                }
            }))
        }))
    }

    function sa(t) {
        return ea.indexOf(t) < 0 && ea.push(t), na && X(na), na = Y((function() {
            ! function() {
                for (var t = 0, e = ea; t < e.length; t++) {
                    var n = e[t];
                    if (n) {
                        var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (a && ee(n)) continue;
                        la(n, a ? "childList" : "characterData")
                    }
                }
                ea = []
            }()
        }), 33), t
    }

    function la(t, e) {
        Yr(ia)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }

    function da(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null,
            n = e && e.length > 0 ? e[0] : t.target;
        return aa = s() + 3e3, n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }

    function fa(t, e, n) {
        void 0 === n && (n = null);
        var a = {
            id: 0,
            hash: null,
            privacy: 2,
            node: t
        };
        if (t) {
            var r = $t(t);
            if (null !== r) {
                var i = r.metadata;
                a.id = r.id, a.hash = r.hash, a.privacy = i.privacy, r.region && function(t, e) {
                    var n = Qt(t),
                        a = t in De ? De[t] : {
                            id: t,
                            visibility: 0,
                            interaction: 16,
                            name: Ie.get(n)
                        },
                        r = 16;
                    switch (e) {
                        case 9:
                            r = 20;
                            break;
                        case 27:
                            r = 30
                    }
                    qe(n, a, r, a.visibility)
                }(r.region, e), i.fraud && Et(i.fraud, r.id, n || r.data.value)
            }
        }
        return a
    }

    function ha(t, e) {
        return void 0 === e && (e = null), at(this, void 0, void 0, (function() {
            var n, a, r, i, o, u, c, l, d, f, h, p, v, g, y, w, k, E, O, S, x, M, N, _, D, C, j, A, L, z, R;
            return rt(this, (function(H) {
                switch (n = e || s(), a = [n, t], t) {
                    case 13:
                    case 14:
                    case 12:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        for (r = 0, i = ln; r < i.length; r++) z = i[r], (o = fa(z.data.target, z.event)).id > 0 && ((a = [z.time, z.event]).push(o.id), a.push(z.data.x), a.push(z.data.y), Ta(a), T(z.event, z.data.x, z.data.y));
                        gn();
                        break;
                    case 9:
                        for (u = 0, c = Fe; u < c.length; u++) z = c[u], l = fa(z.data.target, z.event, z.data.text), a = [z.time, z.event], d = l.hash ? l.hash.join(".") : "", a.push(l.id), a.push(z.data.x), a.push(z.data.y), a.push(z.data.eX), a.push(z.data.eY), a.push(z.data.button), a.push(z.data.reaction), a.push(z.data.context), a.push(m(z.data.text, "click", l.privacy)), a.push(b(z.data.link)), a.push(d), a.push(z.data.trust), Ta(a), ma(z.time, z.event, d, z.data.x, z.data.y, z.data.reaction, z.data.context);
                        $e();
                        break;
                    case 38:
                        for (f = 0, h = tn; f < h.length; f++) z = h[f], a = [z.time, z.event], (j = fa(z.data.target, z.event)).id > 0 && (a.push(j.id), a.push(z.data.action), Ta(a));
                        nn();
                        break;
                    case 11:
                        p = sn, a.push(p.width), a.push(p.height), T(t, p.width, p.height), bn(), Ta(a);
                        break;
                    case 26:
                        v = _n, a.push(v.name), Ln(), Ta(a);
                        break;
                    case 27:
                        for (g = 0, y = rn; g < y.length; g++) z = y[g], w = fa(z.data.target, z.event, z.data.value), (a = [z.time, z.event]).push(w.id), a.push(m(z.data.value, "input", w.privacy)), Ta(a);
                        cn();
                        break;
                    case 21:
                        (k = On) && (E = fa(k.start, t), O = fa(k.end, t), a.push(E.id), a.push(k.startOffset), a.push(O.id), a.push(k.endOffset), Tn(), Ta(a));
                        break;
                    case 10:
                        for (S = 0, x = yn; S < x.length; S++) z = x[S], (M = fa(z.data.target, z.event)).id > 0 && ((a = [z.time, z.event]).push(M.id), a.push(z.data.x), a.push(z.data.y), Ta(a), T(z.event, z.data.x, z.data.y));
                        yn = [];
                        break;
                    case 42:
                        for (N = 0, _ = Xe; N < _.length; N++) z = _[N], a = [z.time, z.event], (j = fa(z.data.target, z.event)).id > 0 && ((a = [z.time, z.event]).push(j.id), a.push(z.data.type), a.push(m(z.data.value, "change", j.privacy)), a.push(m(z.data.checksum, "checksum", j.privacy)), Ta(a));
                        Ue();
                        break;
                    case 39:
                        for (D = 0, C = Dn; D < C.length; D++) z = C[D], a = [z.time, z.event], (j = fa(z.data.target, z.event)).id > 0 && (a.push(j.id), Ta(a));
                        jn();
                        break;
                    case 22:
                        for (A = 0, L = va; A < L.length; A++) z = L[A], (a = [z.time, z.event]).push(z.data.type), a.push(z.data.hash), a.push(z.data.x), a.push(z.data.y), a.push(z.data.reaction), a.push(z.data.context), Ta(a, !1);
                        ga();
                        break;
                    case 28:
                        R = In, a.push(R.visible), Ta(a), I(n, R.visible), Rn()
                }
                return [2]
            }))
        }))
    }
    var pa = [],
        va = [];

    function ga() {
        va = []
    }

    function ma(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1), void 0 === o && (o = 0), pa.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: r,
                reaction: i,
                context: o
            }
        }), T(e, a, r)
    }
    var ba, ya, wa, ka, Ea, Oa = 0,
        Sa = 0,
        xa = null,
        Ma = 0;

    function Na() {
        ka = !0, Oa = 0, Sa = 0, Ma = 0, ba = [], ya = [], wa = {}, Ea = null
    }

    function Ta(t, e) {
        if (void 0 === e && (e = !0), ka) {
            var n = s(),
                a = t.length > 1 ? t[1] : null,
                r = JSON.stringify(t);
            switch (a) {
                case 5:
                    Oa += r.length;
                case 37:
                case 6:
                case 43:
                    Sa += r.length, ba.push(r);
                    break;
                default:
                    ya.push(r)
            }
            H(25);
            var i = function() {
                var t = !1 === o.lean && Oa > 0 ? 100 : Lr.sequence * o.delay;
                return "string" == typeof o.upload ? Math.max(Math.min(t, 3e4), 100) : o.delay
            }();
            n - Ma > 2 * i && (X(xa), xa = null), e && null === xa && (25 !== a && V(), xa = Y(Ia, i), Ma = n, or(Sa))
        }
    }

    function _a() {
        X(xa), Ia(!0), Oa = 0, Sa = 0, Ma = 0, ba = [], ya = [], wa = {}, Ea = null, ka = !1
    }

    function Ia(t) {
        return void 0 === t && (t = !1), at(this, void 0, void 0, (function() {
            var e, n, a, r, i, u, c, s;
            return rt(this, (function(l) {
                switch (l.label) {
                    case 0:
                        return xa = null, (e = !1 === o.lean && Sa > 0 && (Sa < 1048576 || Lr.sequence > 0)) && W(1, 1), Re(),
                            function() {
                                var t = [];
                                va = [];
                                for (var e = Lr.start + Lr.duration, n = Math.max(e - 2e3, 0), a = 0, r = pa; a < r.length; a++) {
                                    var i = r[a];
                                    i.time >= n && (i.time <= e && va.push(i), t.push(i))
                                }
                                pa = t, ha(22)
                            }(), yt(), n = !0 === t, a = JSON.stringify(Hr(n)), r = "[".concat(ya.join(), "]"), i = e ? "[".concat(ba.join(), "]") : "", u = function(t) {
                                return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                            }({
                                e: a,
                                a: r,
                                p: i
                            }), n ? (s = null, [3, 3]) : [3, 1];
                    case 1:
                        return [4, pt(u)];
                    case 2:
                        s = l.sent(), l.label = 3;
                    case 3:
                        return q(2, (c = s) ? c.length : u.length), Da(u, c, Lr.sequence, n), ya = [], e && (ba = [], Sa = 0, Oa = 0), [2]
                }
            }))
        }))
    }

    function Da(t, e, n, a) {
        if (void 0 === a && (a = !1), "string" == typeof o.upload) {
            var r = o.upload,
                i = !1;
            if (a && "sendBeacon" in navigator) try {
                (i = navigator.sendBeacon.bind(navigator)(r, t)) && ja(n)
            } catch (t) {}
            if (!1 === i) {
                n in wa ? wa[n].attempts++ : wa[n] = {
                    data: t,
                    attempts: 1
                };
                var u = new XMLHttpRequest;
                u.open("POST", r, !0), u.timeout = 15e3, u.ontimeout = function() {
                    Wr(new Error("".concat("Timeout", " : ").concat(r)))
                }, null !== n && (u.onreadystatechange = function() {
                    Yr(Ca)(u, n)
                }), u.withCredentials = !0, e ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"), u.send(e)) : u.send(t)
            }
        } else if (o.upload) {
            (0, o.upload)(t), ja(n)
        }
    }

    function Ca(t, e) {
        var n = wa[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? ur(6) : (0 === t.status && (o.upload = o.fallback ? o.fallback : o.upload), Da(n.data, null, e)) : (Ea = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        }, n.attempts > 1 && rr(2), 200 === t.status && t.responseText && function(t) {
            for (var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e; n < a.length; n++) {
                var r = a[n],
                    i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                    case "END":
                        ur(6);
                        break;
                    case "UPGRADE":
                        et("Auto");
                        break;
                    case "ACTION":
                        o.action && i.length > 1 && o.action(i[1]);
                        break;
                    case "EXTRACT":
                        i.length > 1 && Ga(i[1])
                }
            }
        }(t.responseText), 0 === t.status && (Da(n.data, null, e, !0), ur(3)), t.status >= 200 && t.status <= 208 && ja(e), delete wa[e]))
    }

    function ja(t) {
        1 === t && Mr()
    }
    var Aa, La = {};

    function za(t) {
        var e = t.error || t;
        return e.message in La || (La[e.message] = 0), La[e.message]++ >= 5 || e && e.message && (Aa = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        }, Ra(31)), !0
    }

    function Ra(t) {
        return at(this, void 0, void 0, (function() {
            var e;
            return rt(this, (function(n) {
                switch (e = [s(), t], t) {
                    case 31:
                        e.push(Aa.message), e.push(Aa.line), e.push(Aa.column), e.push(Aa.stack), e.push(b(Aa.source)), Ta(e);
                        break;
                    case 33:
                        Ha && (e.push(Ha.code), e.push(Ha.name), e.push(Ha.message), e.push(Ha.stack), e.push(Ha.severity), Ta(e, !1));
                        break;
                    case 41:
                        wt && (e.push(wt.id), e.push(wt.target), e.push(wt.checksum), Ta(e, !1))
                }
                return [2]
            }))
        }))
    }
    var Ha, qa = {};

    function Wa(t, e, n, a, r) {
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in qa && qa[t].indexOf(i) >= 0 || (Ha = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        }, t in qa ? qa[t].push(i) : qa[t] = [i], Ra(33))
    }
    var Ya, Xa = {},
        Pa = new Set,
        Ua = {},
        Ba = {},
        Va = {},
        Fa = {};

    function Ja() {
        Qa()
    }

    function Ga(t) {
        try {
            var e = t && t.length > 0 ? t.split(/ (.*)/) : [""],
                n = e[0].split(/\|(.*)/),
                a = parseInt(n[0]),
                r = n.length > 1 ? n[1] : "",
                i = e.length > 1 ? JSON.parse(e[1]) : {};
            for (var o in Ua[a] = {}, Ba[a] = {}, Va[a] = {}, Fa[a] = r, i) {
                var u = parseInt(o),
                    c = i[o],
                    s = 2;
                switch (c.startsWith("~") ? s = 0 : c.startsWith("!") && (s = 4), s) {
                    case 0:
                        var l = c.substring(1, c.length);
                        Ua[a][u] = er(l);
                        break;
                    case 2:
                        Ba[a][u] = c;
                        break;
                    case 4:
                        var d = c.substring(1, c.length);
                        Va[a][u] = d
                }
            }
        } catch (t) {
            Wa(8, 1, t ? t.name : null)
        }
    }

    function Za(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function Ka() {
        try {
            for (var t in Ua) {
                var e = parseInt(t);
                if ("" == Fa[e] || document.querySelector(Fa[e])) {
                    var n = Ua[e];
                    for (var a in n) {
                        var r = parseInt(a),
                            i = (h = nr(Za(n[r]))) ? JSON.stringify(h).substring(0, 1e4) : h;
                        i && $a(e, r, i)
                    }
                    var o = Ba[e];
                    for (var u in o) {
                        var c = parseInt(u),
                            s = document.querySelectorAll(o[c]);
                        if (s) $a(e, c, Array.from(s).map((function(t) {
                            return t.textContent
                        })).join("<SEP>").substring(0, 1e4))
                    }
                    var l = Va[e];
                    for (var d in l) {
                        var f = parseInt(d);
                        $a(e, f, Kt(l[f]).trim().substring(0, 1e4))
                    }
                }
            }
            Pa.size > 0 && rr(40)
        } catch (t) {
            Wa(5, 1, t ? t.name : null)
        }
        var h
    }

    function Qa() {
        Pa.clear()
    }

    function $a(t, e, n) {
        var a, r = !1;
        t in Xa || (Xa[t] = {}, r = !0), a = Va[t], 0 == Object.keys(a).length || e in Xa[t] && Xa[t][e] == n || (r = !0), Xa[t][e] = n, r && Pa.add(t)
    }

    function tr() {
        Qa()
    }

    function er(t) {
        for (var e = [], n = t.split("."); n.length > 0;) {
            var a = n.shift(),
                r = a.indexOf("["),
                i = a.indexOf("{"),
                o = a.indexOf("}");
            e.push({
                name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
                type: r > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? a.substring(i + 1, o) : null
            })
        }
        return e
    }

    function nr(t, e) {
        if (void 0 === e && (e = window), 0 == t.length) return e;
        var n, a = t.shift();
        if (e && e[a.name]) {
            var r = e[a.name];
            if (1 !== a.type && ar(r, a.condition)) n = nr(t, r);
            else if (Array.isArray(r)) {
                for (var i = [], o = 0, u = r; o < u.length; o++) {
                    var c = u[o];
                    if (ar(c, a.condition)) {
                        var s = nr(t, c);
                        s && i.push(s)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }

    function ar(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }

    function rr(t) {
        var e = [s(), t];
        switch (t) {
            case 4:
                var n = S;
                n && ((e = [n.time, n.event]).push(n.data.visible), e.push(n.data.docWidth), e.push(n.data.docHeight), e.push(n.data.screenWidth), e.push(n.data.screenHeight), e.push(n.data.scrollX), e.push(n.data.scrollY), e.push(n.data.pointerX), e.push(n.data.pointerY), e.push(n.data.activityTime), Ta(e, !1)), N();
                break;
            case 25:
                e.push(L.gap), Ta(e);
                break;
            case 35:
                e.push(Ya.check), Ta(e, !1);
                break;
            case 3:
                e.push(tt.key), Ta(e);
                break;
            case 2:
                e.push(Ea.sequence), e.push(Ea.attempts), e.push(Ea.status), Ta(e, !1);
                break;
            case 24:
                e.push(j.key), e.push(j.value), Ta(e);
                break;
            case 34:
                var a = Object.keys(it);
                if (a.length > 0) {
                    for (var r = 0, i = a; r < i.length; r++) {
                        var o = i[r];
                        e.push(o), e.push(it[o])
                    }
                    lt(), Ta(e, !1)
                }
                break;
            case 0:
                var u = Object.keys(R);
                if (u.length > 0) {
                    for (var c = 0, l = u; c < l.length; c++) {
                        var d = l[c],
                            f = parseInt(d, 10);
                        e.push(f), e.push(Math.round(R[d]))
                    }
                    R = {}, Ta(e, !1)
                }
                break;
            case 1:
                var h = Object.keys(dr);
                if (h.length > 0) {
                    for (var p = 0, v = h; p < v.length; p++) {
                        var g = v[p];
                        f = parseInt(g, 10);
                        e.push(f), e.push(dr[g])
                    }
                    gr(), Ta(e, !1)
                }
                break;
            case 36:
                var m = Object.keys(G);
                if (m.length > 0) {
                    for (var b = 0, y = m; b < y.length; b++) {
                        var w = y[b];
                        f = parseInt(w, 10);
                        e.push(f), e.push([].concat.apply([], G[w]))
                    }
                    Q(), Ta(e, !1)
                }
                break;
            case 40:
                Pa.forEach((function(t) {
                    e.push(t);
                    var n = [];
                    for (var a in Xa[t]) {
                        var r = parseInt(a, 10);
                        n.push(r), n.push(Xa[t][a])
                    }
                    e.push(n)
                })), Qa(), Ta(e, !1)
        }
    }

    function ir() {
        Ya = {
            check: 0
        }
    }

    function or(t) {
        if (0 === Ya.check) {
            var e = Ya.check;
            e = Lr.sequence >= 128 ? 1 : e, e = Lr.pageNum >= 128 ? 7 : e, e = s() > 72e5 ? 2 : e, (e = t > 10485760 ? 2 : e) !== Ya.check && ur(e)
        }
    }

    function ur(t) {
        Ya.check = t, xr(), bi()
    }

    function cr() {
        0 !== Ya.check && rr(35)
    }

    function sr() {
        Ya = null
    }
    var lr = null,
        dr = null;

    function fr() {
        lr = {}, dr = {}
    }

    function hr() {
        lr = {}, dr = {}
    }

    function pr(t, e) {
        e && (e = "".concat(e), t in lr || (lr[t] = []), lr[t].indexOf(e) < 0 && (lr[t].push(e), t in dr || (dr[t] = []), dr[t].push(e), lr[t].length > 128 && ur(5)))
    }

    function vr() {
        rr(1)
    }

    function gr() {
        dr = {}
    }
    var mr = null,
        br = [],
        yr = null;

    function wr() {
        yr = null;
        var t, e = navigator && "userAgent" in navigator ? navigator.userAgent : "",
            n = document && document.title ? document.title : "",
            a = e.indexOf("Electron") > 0 ? 1 : 0,
            r = function() {
                var t = {
                        session: _r(),
                        ts: Math.round(Date.now()),
                        count: 1,
                        upgrade: null,
                        upload: ""
                    },
                    e = Cr("_clsk");
                if (e) {
                    var n = e.split("|");
                    n.length >= 5 && t.ts - Ir(n[1]) < 18e5 && (t.session = n[0], t.count = Ir(n[2]) + 1, t.upgrade = Ir(n[3]), t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
                }
                return t
            }(),
            i = Dr(),
            u = o.projectId || d(location.host);
        mr = {
            projectId: u,
            userId: i.id,
            sessionId: r.session,
            pageNum: r.count
        }, o.lean = o.track && null !== r.upgrade ? 0 === r.upgrade : o.lean, o.upload = o.track && "string" == typeof o.upload && r.upload && r.upload.length > "https://".length ? r.upload : o.upload, pr(0, e), pr(3, n), pr(1, b(location.href, !!a)), pr(2, document.referrer), pr(15, function() {
            var t = _r();
            if (o.track && Nr(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t, sessionStorage.setItem("_cltk", t)
            }
            return t
        }()), pr(16, document.documentElement.lang), pr(17, document.dir), pr(26, "".concat(window.devicePixelRatio)), pr(28, i.dob.toString()), pr(29, i.version.toString()), W(0, r.ts), W(1, 0), W(35, a), navigator && (pr(9, navigator.language), W(33, navigator.hardwareConcurrency), W(32, navigator.maxTouchPoints), W(34, Math.round(navigator.deviceMemory)), (t = navigator.userAgentData) && t.getHighEntropyValues ? t.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            pr(22, t.platform), pr(23, t.platformVersion), null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                pr(24, t.name + "~" + t.version)
            })), pr(25, t.model), W(27, t.mobile ? 1 : 0)
        })) : pr(22, navigator.platform)), screen && (W(14, Math.round(screen.width)), W(15, Math.round(screen.height)), W(16, Math.round(screen.colorDepth)));
        for (var c = 0, s = o.cookies; c < s.length; c++) {
            var l = s[c],
                f = Cr(l);
            f && ot(l, f)
        }
        Tr(i)
    }

    function kr() {
        yr = null, mr = null
    }

    function Er(t, e) {
        void 0 === e && (e = !0);
        var n = o.lean ? 0 : 1;
        mr && (n || !1 === e) ? t(mr, !o.lean) : br.push({
            callback: t,
            wait: e
        })
    }

    function Or() {
        return mr ? [mr.userId, mr.sessionId, mr.pageNum].join(".") : ""
    }

    function Sr() {
        ni() && (o.track = !0, Tr(Dr(), 1))
    }

    function xr() {
        jr("_clsk", "", 0)
    }

    function Mr() {
        var t = Math.round(Date.now()),
            e = o.upload && "string" == typeof o.upload ? o.upload.replace("https://", "") : "",
            n = o.lean ? 0 : 1;
        ! function(t) {
            br.length > 0 && br.forEach((function(e) {
                !e.callback || e.wait && !t || e.callback(mr, !o.lean)
            }))
        }(n), jr("_clsk", [mr.sessionId, t, mr.pageNum, n, e].join("|"), 1)
    }

    function Nr(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }

    function Tr(t, e) {
        void 0 === e && (e = null), e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5),
            a = 0 === t.dob ? null === o.dob ? 0 : o.dob : t.dob;
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e || t.dob !== a) && jr("_clck", [mr.userId, 2, n.toString(36), e, a].join("|"), 365)
    }

    function _r() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]), t.toString(36)
    }

    function Ir(t, e) {
        return void 0 === e && (e = 10), parseInt(t, e)
    }

    function Dr() {
        var t = {
                id: _r(),
                version: 0,
                expiry: null,
                consent: 0,
                dob: 0
            },
            e = Cr("_clck");
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var u = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(u), document.cookie = "".concat("_clsk", "=").concat(u)
            }
            n.length > 1 && (t.version = Ir(n[1])), n.length > 2 && (t.expiry = Ir(n[2], 36)), n.length > 3 && 1 === Ir(n[3]) && (t.consent = 1), n.length > 4 && Ir(n[1]) > 1 && (t.dob = Ir(n[4])), o.track = o.track || 1 === t.consent, t.id = o.track ? n[0] : t.id
        }
        return t
    }

    function Cr(t) {
        if (Nr(document, "cookie")) {
            var e = document.cookie.split(";");
            if (e)
                for (var n = 0; n < e.length; n++) {
                    var a = e[n].split("=");
                    if (a.length > 1 && a[0] && a[0].trim() === t) return a[1]
                }
        }
        return null
    }

    function jr(t, e, n) {
        if (o.track && (navigator && navigator.cookieEnabled || Nr(document, "cookie"))) {
            var a = new Date;
            a.setDate(a.getDate() + n);
            var r = a ? "expires=" + a.toUTCString() : "",
                i = "".concat(t, "=").concat(e).concat(";").concat(r).concat(";path=/");
            try {
                if (null === yr) {
                    for (var u = location.hostname ? location.hostname.split(".") : [], c = u.length - 1; c >= 0; c--)
                        if (yr = ".".concat(u[c]).concat(yr || ""), c < u.length - 1 && (document.cookie = "".concat(i).concat(";").concat("domain=").concat(yr), Cr(t) === e)) return;
                    yr = ""
                }
            } catch (t) {
                yr = ""
            }
            document.cookie = yr ? "".concat(i).concat(";").concat("domain=").concat(yr) : i
        }
    }
    var Ar, Lr = null;

    function zr() {
        var t = mr;
        Lr = {
            version: l,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0
        }
    }

    function Rr() {
        Lr = null
    }

    function Hr(t) {
        return Lr.start = Lr.start + Lr.duration, Lr.duration = s() - Lr.start, Lr.sequence++, Lr.upload = t && "sendBeacon" in navigator ? 1 : 0, Lr.end = t ? 1 : 0, [Lr.version, Lr.sequence, Lr.start, Lr.duration, Lr.projectId, Lr.userId, Lr.sessionId, Lr.pageNum, Lr.upload, Lr.end]
    }

    function qr() {
        Ar = []
    }

    function Wr(t) {
        if (Ar && -1 === Ar.indexOf(t.message)) {
            var e = o.report;
            if (e && e.length > 0) {
                var n = {
                    v: Lr.version,
                    p: Lr.projectId,
                    u: Lr.userId,
                    s: Lr.sessionId,
                    n: Lr.pageNum
                };
                t.message && (n.m = t.message), t.stack && (n.e = t.stack);
                var a = new XMLHttpRequest;
                a.open("POST", e, !0), a.send(JSON.stringify(n)), Ar.push(t.message)
            }
        }
        return t
    }

    function Yr(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw Wr(t)
            }
            var n = performance.now() - e;
            q(4, n), n > 30 && (H(7), W(6, n))
        }
    }
    var Xr = [];

    function Pr(t, e, n, a) {
        void 0 === a && (a = !1), n = Yr(n);
        try {
            t[u("addEventListener")](e, n, a), Xr.push({
                event: e,
                target: t,
                listener: n,
                capture: a
            })
        } catch (t) {}
    }

    function Ur() {
        for (var t = 0, e = Xr; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[u("removeEventListener")](n.event, n.listener, n.capture)
            } catch (t) {}
        }
        Xr = []
    }
    var Br = null,
        Vr = null,
        Fr = null,
        Jr = 0;

    function Gr() {
        return !(Jr++ > 20) || (Wa(4, 0), !1)
    }

    function Zr() {
        Jr = 0, Fr !== Qr() && (bi(), window.setTimeout(Kr, 250))
    }

    function Kr() {
        mi(), W(29, 1)
    }

    function Qr() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    var $r = !1;

    function ti() {
        $r = !0, c = performance.now(), fe(), Ur(), qr(), Fr = Qr(), Jr = 0, Pr(window, "popstate", Zr), null === Br && (Br = history.pushState, history.pushState = function() {
            Br.apply(this, arguments), ni() && Gr() && Zr()
        }), null === Vr && (Vr = history.replaceState, history.replaceState = function() {
            Vr.apply(this, arguments), ni() && Gr() && Zr()
        })
    }

    function ei() {
        Fr = null, Jr = 0, qr(), Ur(), fe(), c = 0, $r = !1
    }

    function ni() {
        return $r
    }

    function ai(t) {
        if (null === t || $r) return !1;
        for (var e in t) e in o && (o[e] = t[e]);
        return !0
    }

    function ri() {
        mi(), A("clarity", "restart")
    }
    var ii = Object.freeze({
        __proto__: null,
        start: function() {
            ! function() {
                kt = [], W(26, navigator.webdriver ? 1 : 0);
                try {
                    W(31, window.top == window.self ? 1 : 2)
                } catch (t) {
                    W(31, 0)
                }
            }(), Pr(window, "error", za), La = {}, qa = {}
        },
        stop: function() {
            qa = {}
        }
    });

    function oi() {
        return at(this, void 0, void 0, (function() {
            var t, e;
            return rt(this, (function(n) {
                switch (n.label) {
                    case 0:
                        return t = s(), ge(e = {
                            id: Or(),
                            cost: 3
                        }), [4, Gn(document, e, 0)];
                    case 1:
                        return n.sent(), [4, xe(5, e, t)];
                    case 2:
                        return n.sent(), me(e), [2]
                }
            }))
        }))
    }
    var ui = Object.freeze({
        __proto__: null,
        hashText: Kt,
        start: function() {
            Oe(), Se(), Ye(), Ae = null, Ie = new WeakMap, De = {}, Ce = [], je = !!window.IntersectionObserver, Xt(),
                function() {
                    if (Zn = [], ea = [], na = null, aa = 0, ra = {}, null === Qn && (Qn = CSSStyleSheet.prototype.insertRule, CSSStyleSheet.prototype.insertRule = function() {
                            return ni() && sa(this.ownerNode), Qn.apply(this, arguments)
                        }), null === $n && ($n = CSSStyleSheet.prototype.deleteRule, CSSStyleSheet.prototype.deleteRule = function() {
                            return ni() && sa(this.ownerNode), $n.apply(this, arguments)
                        }), null === ta) {
                        ta = Element.prototype.attachShadow;
                        try {
                            Element.prototype.attachShadow = function() {
                                return ni() ? sa(ta.apply(this, arguments)) : ta.apply(this, arguments)
                            }
                        } catch (t) {
                            ta = null
                        }
                    }
                }(), he(oi, 1).then((function() {
                    Yr(Se)(), Yr(Re)()
                }))
        },
        stop: function() {
            Ye(), Ie = null, De = {}, Ce = [], Ae && (Ae.disconnect(), Ae = null), je = !1, Pt(),
                function() {
                    for (var t = 0, e = Zn; t < e.length; t++) {
                        var n = e[t];
                        n && n.disconnect()
                    }
                    Zn = [], ra = {}, Kn = [], ea = [], aa = 0, na = null
                }(), Oe()
        }
    });
    var ci, si = null;

    function li() {
        si = null
    }

    function di(t) {
        si = {
                fetchStart: Math.round(t.fetchStart),
                connectStart: Math.round(t.connectStart),
                connectEnd: Math.round(t.connectEnd),
                requestStart: Math.round(t.requestStart),
                responseStart: Math.round(t.responseStart),
                responseEnd: Math.round(t.responseEnd),
                domInteractive: Math.round(t.domInteractive),
                domComplete: Math.round(t.domComplete),
                loadEventStart: Math.round(t.loadEventStart),
                loadEventEnd: Math.round(t.loadEventEnd),
                redirectCount: Math.round(t.redirectCount),
                size: t.transferSize ? t.transferSize : 0,
                type: t.type,
                protocol: t.nextHopProtocol,
                encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
                decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
            },
            function(t) {
                at(this, void 0, void 0, (function() {
                    var e, n;
                    return rt(this, (function(a) {
                        return e = s(), n = [e, t], 29 === t && (n.push(si.fetchStart), n.push(si.connectStart), n.push(si.connectEnd), n.push(si.requestStart), n.push(si.responseStart), n.push(si.responseEnd), n.push(si.domInteractive), n.push(si.domComplete), n.push(si.loadEventStart), n.push(si.loadEventEnd), n.push(si.redirectCount), n.push(si.size), n.push(si.type), n.push(si.protocol), n.push(si.encodedSize), n.push(si.decodedSize), li(), Ta(n)), [2]
                    }))
                }))
            }(29)
    }
    var fi = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint"];

    function hi() {
        try {
            ci && ci.disconnect(), ci = new PerformanceObserver(Yr(pi));
            for (var t = 0, e = fi; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && q(9, 0), ci.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            Wa(3, 1)
        }
    }

    function pi(t) {
        ! function(t) {
            for (var e = (!("visibilityState" in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var a = t[n];
                switch (a.entryType) {
                    case "navigation":
                        di(a);
                        break;
                    case "resource":
                        var r = a.name;
                        pr(4, vi(r)), r !== o.upload && r !== o.fallback || W(28, a.duration);
                        break;
                    case "longtask":
                        H(7);
                        break;
                    case "first-input":
                        e && W(10, a.processingStart - a.startTime);
                        break;
                    case "layout-shift":
                        e && !a.hadRecentInput && q(9, 1e3 * a.value);
                        break;
                    case "largest-contentful-paint":
                        e && W(8, a.startTime)
                }
            }
        }(t.getEntries())
    }

    function vi(t) {
        var e = document.createElement("a");
        return e.href = t, e.host
    }
    var gi = [ii, ui, qn, Object.freeze({
        __proto__: null,
        start: function() {
            li(),
                function() {
                    navigator && "connection" in navigator && pr(27, navigator.connection.effectiveType), window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? Pr(window, "load", Y.bind(this, hi, 0)) : hi() : Wa(3, 0)
                }()
        },
        stop: function() {
            ci && ci.disconnect(), ci = null, li()
        }
    })];

    function mi(t) {
        void 0 === t && (t = null),
            function() {
                try {
                    return !1 === $r && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now" in Date && "now" in performance && "undefined" != typeof WeakMap
                } catch (t) {
                    return !1
                }
            }() && (ai(t), ti(), mt(), gi.forEach((function(t) {
                return Yr(t.start)()
            })), null === t && Ei())
    }

    function bi() {
        ni() && (gi.slice().reverse().forEach((function(t) {
            return Yr(t.stop)()
        })), bt(), ei(), void 0 !== wi && (wi[ki] = function() {
            (wi[ki].q = wi[ki].q || []).push(arguments), "start" === arguments[0] && wi[ki].q.unshift(wi[ki].q.pop()) && Ei()
        }))
    }
    var yi = Object.freeze({
            __proto__: null,
            consent: Sr,
            event: A,
            hashText: Kt,
            identify: ut,
            metadata: Er,
            pause: function() {
                ni() && (A("clarity", "pause"), null === le && (le = new Promise((function(t) {
                    de = t
                }))))
            },
            resume: function() {
                ni() && (le && (de(), le = null, null === se && pe()), A("clarity", "resume"))
            },
            set: ot,
            start: mi,
            stop: bi,
            upgrade: et,
            version: l
        }),
        wi = window,
        ki = "clarity";

    function Ei() {
        if (void 0 !== wi) {
            if (wi[ki] && wi[ki].v) return console.warn("Error CL001: Multiple Clarity tags detected.");
            var t = wi[ki] && wi[ki].q || [];
            for (wi[ki] = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    return yi[t].apply(yi, e)
                }, wi[ki].v = l; t.length > 0;) wi[ki].apply(wi, t.shift())
        }
    }
    Ei()
}();