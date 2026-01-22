var ty = Object.defineProperty;
var ry = (Fe, pe, rt) => pe in Fe ? ty(Fe, pe, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: rt
}) : Fe[pe] = rt;
var ka = (Fe, pe, rt) => ry(Fe, typeof pe != "symbol" ? pe + "" : pe, rt);
var background = (function () {
    "use strict";
    var Fl, Ll, Ul, ql;

    function Fe(e) {
        return e == null || typeof e == "function" ? {main: e} : e
    }

    var pe = typeof global == "object" && global && global.Object === Object && global,
        rt = typeof self == "object" && self && self.Object === Object && self,
        Ae = pe || rt || Function("return this")(), Oe = Ae.Symbol, Ta = Object.prototype, Ql = Ta.hasOwnProperty,
        Jl = Ta.toString, mt = Oe ? Oe.toStringTag : void 0;

    function ef(e) {
        var r = Ql.call(e, mt), t = e[mt];
        try {
            e[mt] = void 0;
            var n = !0
        } catch {
        }
        var a = Jl.call(e);
        return n && (r ? e[mt] = t : delete e[mt]), a
    }

    var tf = Object.prototype, rf = tf.toString;

    function nf(e) {
        return rf.call(e)
    }

    var af = "[object Null]", of = "[object Undefined]", Ia = Oe ? Oe.toStringTag : void 0;

    function Le(e) {
        return e == null ? e === void 0 ? of : af : Ia && Ia in Object(e) ? ef(e) : nf(e)
    }

    function xt(e) {
        return e != null && typeof e == "object"
    }

    var lf = "[object Symbol]";

    function Sr(e) {
        return typeof e == "symbol" || xt(e) && Le(e) == lf
    }

    function ff(e, r) {
        for (var t = -1, n = e == null ? 0 : e.length, a = Array(n); ++t < n;) a[t] = r(e[t], t, e);
        return a
    }

    var nt = Array.isArray, Pa = Oe ? Oe.prototype : void 0, Da = Pa ? Pa.toString : void 0;

    function $a(e) {
        if (typeof e == "string") return e;
        if (nt(e)) return ff(e, $a) + "";
        if (Sr(e)) return Da ? Da.call(e) : "";
        var r = e + "";
        return r == "0" && 1 / e == -1 / 0 ? "-0" : r
    }

    function Vt(e) {
        var r = typeof e;
        return e != null && (r == "object" || r == "function")
    }

    function Ma(e) {
        return e
    }

    var sf = "[object AsyncFunction]", cf = "[object Function]", uf = "[object GeneratorFunction]",
        df = "[object Proxy]";

    function Er(e) {
        if (!Vt(e)) return !1;
        var r = Le(e);
        return r == cf || r == uf || r == sf || r == df
    }

    var Ar = Ae["__core-js_shared__"], Ca = (function () {
        var e = /[^.]+$/.exec(Ar && Ar.keys && Ar.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    })();

    function hf(e) {
        return !!Ca && Ca in e
    }

    var pf = Function.prototype, yf = pf.toString;

    function Ue(e) {
        if (e != null) {
            try {
                return yf.call(e)
            } catch {
            }
            try {
                return e + ""
            } catch {
            }
        }
        return ""
    }

    var _f = /[\\^$.*+?()[\]{}|]/g, gf = /^\[object .+?Constructor\]$/, vf = Function.prototype, wf = Object.prototype,
        bf = vf.toString, mf = wf.hasOwnProperty,
        xf = RegExp("^" + bf.call(mf).replace(_f, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function Sf(e) {
        if (!Vt(e) || hf(e)) return !1;
        var r = Er(e) ? xf : gf;
        return r.test(Ue(e))
    }

    function Ef(e, r) {
        return e == null ? void 0 : e[r]
    }

    function qe(e, r) {
        var t = Ef(e, r);
        return Sf(t) ? t : void 0
    }

    var Or = qe(Ae, "WeakMap");

    function za(e, r, t) {
        switch (t.length) {
            case 0:
                return e.call(r);
            case 1:
                return e.call(r, t[0]);
            case 2:
                return e.call(r, t[0], t[1]);
            case 3:
                return e.call(r, t[0], t[1], t[2])
        }
        return e.apply(r, t)
    }

    var Af = 800, Of = 16, Rf = Date.now;

    function kf(e) {
        var r = 0, t = 0;
        return function () {
            var n = Rf(), a = Of - (n - t);
            if (t = n, a > 0) {
                if (++r >= Af) return arguments[0]
            } else r = 0;
            return e.apply(void 0, arguments)
        }
    }

    function Tf(e) {
        return function () {
            return e
        }
    }

    var Xt = (function () {
        try {
            var e = qe(Object, "defineProperty");
            return e({}, "", {}), e
        } catch {
        }
    })(), If = Xt ? function (e, r) {
        return Xt(e, "toString", {configurable: !0, enumerable: !1, value: Tf(r), writable: !0})
    } : Ma, Na = kf(If), Pf = 9007199254740991, Df = /^(?:0|[1-9]\d*)$/;

    function Fa(e, r) {
        var t = typeof e;
        return r = r ?? Pf, !!r && (t == "number" || t != "symbol" && Df.test(e)) && e > -1 && e % 1 == 0 && e < r
    }

    function $f(e, r, t) {
        r == "__proto__" && Xt ? Xt(e, r, {configurable: !0, enumerable: !0, value: t, writable: !0}) : e[r] = t
    }

    function La(e, r) {
        return e === r || e !== e && r !== r
    }

    var Mf = Object.prototype, Cf = Mf.hasOwnProperty;

    function zf(e, r, t) {
        var n = e[r];
        (!(Cf.call(e, r) && La(n, t)) || t === void 0 && !(r in e)) && $f(e, r, t)
    }

    var Ua = Math.max;

    function qa(e, r, t) {
        return r = Ua(r === void 0 ? e.length - 1 : r, 0), function () {
            for (var n = arguments, a = -1, i = Ua(n.length - r, 0), f = Array(i); ++a < i;) f[a] = n[r + a];
            a = -1;
            for (var l = Array(r + 1); ++a < r;) l[a] = n[a];
            return l[r] = t(f), za(e, this, l)
        }
    }

    function Nf(e, r) {
        return Na(qa(e, r, Ma), e + "")
    }

    var Ff = 9007199254740991;

    function Rr(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ff
    }

    function Lf(e) {
        return e != null && Rr(e.length) && !Er(e)
    }

    var Uf = Object.prototype;

    function Ba(e) {
        var r = e && e.constructor, t = typeof r == "function" && r.prototype || Uf;
        return e === t
    }

    var qf = "[object Arguments]";

    function ja(e) {
        return xt(e) && Le(e) == qf
    }

    var Za = Object.prototype, Bf = Za.hasOwnProperty, jf = Za.propertyIsEnumerable, kr = ja((function () {
        return arguments
    })()) ? ja : function (e) {
        return xt(e) && Bf.call(e, "callee") && !jf.call(e, "callee")
    };

    function Zf() {
        return !1
    }

    var Ha = typeof exports == "object" && exports && !exports.nodeType && exports,
        Ka = Ha && typeof module == "object" && module && !module.nodeType && module, Hf = Ka && Ka.exports === Ha,
        Ga = Hf ? Ae.Buffer : void 0, Kf = Ga ? Ga.isBuffer : void 0, Gf = Kf || Zf, Wf = "[object Arguments]",
        Vf = "[object Array]", Xf = "[object Boolean]", Yf = "[object Date]", Qf = "[object Error]",
        Jf = "[object Function]", es = "[object Map]", ts = "[object Number]", rs = "[object Object]",
        ns = "[object RegExp]", as = "[object Set]", is = "[object String]", os = "[object WeakMap]",
        ls = "[object ArrayBuffer]", fs = "[object DataView]", ss = "[object Float32Array]",
        cs = "[object Float64Array]", us = "[object Int8Array]", ds = "[object Int16Array]", hs = "[object Int32Array]",
        ps = "[object Uint8Array]", ys = "[object Uint8ClampedArray]", _s = "[object Uint16Array]",
        gs = "[object Uint32Array]", B = {};
    B[ss] = B[cs] = B[us] = B[ds] = B[hs] = B[ps] = B[ys] = B[_s] = B[gs] = !0, B[Wf] = B[Vf] = B[ls] = B[Xf] = B[fs] = B[Yf] = B[Qf] = B[Jf] = B[es] = B[ts] = B[rs] = B[ns] = B[as] = B[is] = B[os] = !1;

    function vs(e) {
        return xt(e) && Rr(e.length) && !!B[Le(e)]
    }

    function ws(e) {
        return function (r) {
            return e(r)
        }
    }

    var Wa = typeof exports == "object" && exports && !exports.nodeType && exports,
        St = Wa && typeof module == "object" && module && !module.nodeType && module, bs = St && St.exports === Wa,
        Tr = bs && pe.process, Va = (function () {
            try {
                var e = St && St.require && St.require("util").types;
                return e || Tr && Tr.binding && Tr.binding("util")
            } catch {
            }
        })(), Xa = Va && Va.isTypedArray, ms = Xa ? ws(Xa) : vs;

    function Ya(e, r) {
        return function (t) {
            return e(r(t))
        }
    }

    var xs = Ya(Object.keys, Object), Ss = Object.prototype, Es = Ss.hasOwnProperty;

    function As(e) {
        if (!Ba(e)) return xs(e);
        var r = [];
        for (var t in Object(e)) Es.call(e, t) && t != "constructor" && r.push(t);
        return r
    }

    var Os = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Rs = /^\w*$/;

    function ks(e, r) {
        if (nt(e)) return !1;
        var t = typeof e;
        return t == "number" || t == "symbol" || t == "boolean" || e == null || Sr(e) ? !0 : Rs.test(e) || !Os.test(e) || r != null && e in Object(r)
    }

    var Et = qe(Object, "create");

    function Ts() {
        this.__data__ = Et ? Et(null) : {}, this.size = 0
    }

    function Is(e) {
        var r = this.has(e) && delete this.__data__[e];
        return this.size -= r ? 1 : 0, r
    }

    var Ps = "__lodash_hash_undefined__", Ds = Object.prototype, $s = Ds.hasOwnProperty;

    function Ms(e) {
        var r = this.__data__;
        if (Et) {
            var t = r[e];
            return t === Ps ? void 0 : t
        }
        return $s.call(r, e) ? r[e] : void 0
    }

    var Cs = Object.prototype, zs = Cs.hasOwnProperty;

    function Ns(e) {
        var r = this.__data__;
        return Et ? r[e] !== void 0 : zs.call(r, e)
    }

    var Fs = "__lodash_hash_undefined__";

    function Ls(e, r) {
        var t = this.__data__;
        return this.size += this.has(e) ? 0 : 1, t[e] = Et && r === void 0 ? Fs : r, this
    }

    function Be(e) {
        var r = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++r < t;) {
            var n = e[r];
            this.set(n[0], n[1])
        }
    }

    Be.prototype.clear = Ts, Be.prototype.delete = Is, Be.prototype.get = Ms, Be.prototype.has = Ns, Be.prototype.set = Ls;

    function Us() {
        this.__data__ = [], this.size = 0
    }

    function Yt(e, r) {
        for (var t = e.length; t--;) if (La(e[t][0], r)) return t;
        return -1
    }

    var qs = Array.prototype, Bs = qs.splice;

    function js(e) {
        var r = this.__data__, t = Yt(r, e);
        if (t < 0) return !1;
        var n = r.length - 1;
        return t == n ? r.pop() : Bs.call(r, t, 1), --this.size, !0
    }

    function Zs(e) {
        var r = this.__data__, t = Yt(r, e);
        return t < 0 ? void 0 : r[t][1]
    }

    function Hs(e) {
        return Yt(this.__data__, e) > -1
    }

    function Ks(e, r) {
        var t = this.__data__, n = Yt(t, e);
        return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this
    }

    function at(e) {
        var r = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++r < t;) {
            var n = e[r];
            this.set(n[0], n[1])
        }
    }

    at.prototype.clear = Us, at.prototype.delete = js, at.prototype.get = Zs, at.prototype.has = Hs, at.prototype.set = Ks;
    var Qt = qe(Ae, "Map");

    function Gs() {
        this.size = 0, this.__data__ = {hash: new Be, map: new (Qt || at), string: new Be}
    }

    function Ws(e) {
        var r = typeof e;
        return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null
    }

    function Jt(e, r) {
        var t = e.__data__;
        return Ws(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map
    }

    function Vs(e) {
        var r = Jt(this, e).delete(e);
        return this.size -= r ? 1 : 0, r
    }

    function Xs(e) {
        return Jt(this, e).get(e)
    }

    function Ys(e) {
        return Jt(this, e).has(e)
    }

    function Qs(e, r) {
        var t = Jt(this, e), n = t.size;
        return t.set(e, r), this.size += t.size == n ? 0 : 1, this
    }

    function je(e) {
        var r = -1, t = e == null ? 0 : e.length;
        for (this.clear(); ++r < t;) {
            var n = e[r];
            this.set(n[0], n[1])
        }
    }

    je.prototype.clear = Gs, je.prototype.delete = Vs, je.prototype.get = Xs, je.prototype.has = Ys, je.prototype.set = Qs;
    var Js = "Expected a function";

    function Ir(e, r) {
        if (typeof e != "function" || r != null && typeof r != "function") throw new TypeError(Js);
        var t = function () {
            var n = arguments, a = r ? r.apply(this, n) : n[0], i = t.cache;
            if (i.has(a)) return i.get(a);
            var f = e.apply(this, n);
            return t.cache = i.set(a, f) || i, f
        };
        return t.cache = new (Ir.Cache || je), t
    }

    Ir.Cache = je;
    var ec = 500;

    function tc(e) {
        var r = Ir(e, function (n) {
            return t.size === ec && t.clear(), n
        }), t = r.cache;
        return r
    }

    var rc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        nc = /\\(\\)?/g, ac = tc(function (e) {
            var r = [];
            return e.charCodeAt(0) === 46 && r.push(""), e.replace(rc, function (t, n, a, i) {
                r.push(a ? i.replace(nc, "$1") : n || t)
            }), r
        });

    function ic(e) {
        return e == null ? "" : $a(e)
    }

    function At(e, r) {
        return nt(e) ? e : ks(e, r) ? [e] : ac(ic(e))
    }

    function er(e) {
        if (typeof e == "string" || Sr(e)) return e;
        var r = e + "";
        return r == "0" && 1 / e == -1 / 0 ? "-0" : r
    }

    function Pr(e, r) {
        r = At(r, e);
        for (var t = 0, n = r.length; e != null && t < n;) e = e[er(r[t++])];
        return t && t == n ? e : void 0
    }

    function oc(e, r, t) {
        var n = e == null ? void 0 : Pr(e, r);
        return n === void 0 ? t : n
    }

    function lc(e, r) {
        for (var t = -1, n = r.length, a = e.length; ++t < n;) e[a + t] = r[t];
        return e
    }

    var Qa = Oe ? Oe.isConcatSpreadable : void 0;

    function fc(e) {
        return nt(e) || kr(e) || !!(Qa && e && e[Qa])
    }

    function sc(e, r, t, n, a) {
        var i = -1, f = e.length;
        for (t || (t = fc), a || (a = []); ++i < f;) {
            var l = e[i];
            t(l) ? lc(a, l) : a[a.length] = l
        }
        return a
    }

    function cc(e) {
        var r = e == null ? 0 : e.length;
        return r ? sc(e) : []
    }

    function uc(e) {
        return Na(qa(e, void 0, cc), e + "")
    }

    var dc = Ya(Object.getPrototypeOf, Object), hc = "[object Object]", pc = Function.prototype, yc = Object.prototype,
        Ja = pc.toString, _c = yc.hasOwnProperty, gc = Ja.call(Object);

    function Dr(e) {
        if (!xt(e) || Le(e) != hc) return !1;
        var r = dc(e);
        if (r === null) return !0;
        var t = _c.call(r, "constructor") && r.constructor;
        return typeof t == "function" && t instanceof t && Ja.call(t) == gc
    }

    function vc(e, r, t) {
        var n = -1, a = e.length;
        r < 0 && (r = -r > a ? 0 : a + r), t = t > a ? a : t, t < 0 && (t += a), a = r > t ? 0 : t - r >>> 0, r >>>= 0;
        for (var i = Array(a); ++n < a;) i[n] = e[n + r];
        return i
    }

    var $r = qe(Ae, "DataView"), Mr = qe(Ae, "Promise"), Cr = qe(Ae, "Set"), ei = "[object Map]",
        wc = "[object Object]", ti = "[object Promise]", ri = "[object Set]", ni = "[object WeakMap]",
        ai = "[object DataView]", bc = Ue($r), mc = Ue(Qt), xc = Ue(Mr), Sc = Ue(Cr), Ec = Ue(Or), Ze = Le;
    ($r && Ze(new $r(new ArrayBuffer(1))) != ai || Qt && Ze(new Qt) != ei || Mr && Ze(Mr.resolve()) != ti || Cr && Ze(new Cr) != ri || Or && Ze(new Or) != ni) && (Ze = function (e) {
        var r = Le(e), t = r == wc ? e.constructor : void 0, n = t ? Ue(t) : "";
        if (n) switch (n) {
            case bc:
                return ai;
            case mc:
                return ei;
            case xc:
                return ti;
            case Sc:
                return ri;
            case Ec:
                return ni
        }
        return r
    });

    function Ac(e, r) {
        return e != null && r in Object(e)
    }

    function Oc(e, r, t) {
        r = At(r, e);
        for (var n = -1, a = r.length, i = !1; ++n < a;) {
            var f = er(r[n]);
            if (!(i = e != null && t(e, f))) break;
            e = e[f]
        }
        return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && Rr(a) && Fa(f, a) && (nt(e) || kr(e)))
    }

    function ii(e, r) {
        return e != null && Oc(e, r, Ac)
    }

    function Rc(e) {
        var r = e == null ? 0 : e.length;
        return r ? e[r - 1] : void 0
    }

    function kc(e, r) {
        return r.length < 2 ? e : Pr(e, vc(r, 0, -1))
    }

    function Tc(e, r, t) {
        r = At(r, e), e = kc(e, r);
        var n = e == null ? e : e[er(Rc(r))];
        return n == null ? void 0 : za(n, e, t)
    }

    var zr = Nf(Tc), Ic = "[object Map]", Pc = "[object Set]", Dc = Object.prototype, $c = Dc.hasOwnProperty;

    function Mc(e) {
        if (e == null) return !0;
        if (Lf(e) && (nt(e) || typeof e == "string" || typeof e.splice == "function" || Gf(e) || ms(e) || kr(e))) return !e.length;
        var r = Ze(e);
        if (r == Ic || r == Pc) return !e.size;
        if (Ba(e)) return !As(e).length;
        for (var t in e) if ($c.call(e, t)) return !1;
        return !0
    }

    function Cc(e, r, t, n) {
        if (!Vt(e)) return e;
        r = At(r, e);
        for (var a = -1, i = r.length, f = i - 1, l = e; l != null && ++a < i;) {
            var _ = er(r[a]), o = t;
            if (_ === "__proto__" || _ === "constructor" || _ === "prototype") return e;
            if (a != f) {
                var s = l[_];
                o = void 0, o === void 0 && (o = Vt(s) ? s : Fa(r[a + 1]) ? [] : {})
            }
            zf(l, _, o), l = l[_]
        }
        return e
    }

    function zc(e, r, t) {
        for (var n = -1, a = r.length, i = {}; ++n < a;) {
            var f = r[n], l = Pr(e, f);
            t(l, f) && Cc(i, At(f, e), l)
        }
        return i
    }

    function Nc(e, r) {
        return zc(e, r, function (t, n) {
            return ii(e, n)
        })
    }

    var Fc = uc(function (e, r) {
        return e == null ? {} : Nc(e, r)
    });
    const C = (Ll = (Fl = globalThis.browser) == null ? void 0 : Fl.runtime) != null && Ll.id ? globalThis.browser : globalThis.chrome,
        Ot = new Set, oi = (e, r, t) => (Ot.forEach(n => {
            n(e, r, t)
        }), !0), Nr = e => (Ot.add(e), Ot.size === 1 && C.runtime.onMessage.addListener(oi), () => {
            Ot.delete(e), Ot.size || C.runtime.onMessage.removeListener(oi)
        }), Lc = e => {
            const r = {browser: C}, t = "__registerBackgroundEvent", n = [], a = async (y, ...d) => {
                const {[t]: v} = await C.storage.session.get(t);
                if (v != null && v[y]) {
                    const {tabIds: g, message: c} = v[y],
                        u = {...c, type: e.responseKey, data: JSON.parse(JSON.stringify(d))};
                    g.forEach(h => {
                        try {
                            C.tabs.sendMessage(h, u)
                        } catch {
                        }
                    })
                }
            }, i = {}, f = y => {
                i[y] || (y === "browser.runtime.onMessage.addListener" ? Nr(a.bind(null, y)) : zr(r, y, a.bind(null, y)), i[y] = !0)
            }, l = async (y, d) => {
                n.push([y, d]);
                let {[t]: v} = await C.storage.session.get(t);
                if (!n.length) return;
                const g = [...n];
                n.length = 0, v || (v = {}), g.forEach(([c, u]) => {
                    v[c.key] || (v[c.key] = {
                        message: c,
                        tabIds: []
                    }, f(c.key)), v[c.key].tabIds.includes(u) || v[c.key].tabIds.push(u)
                }), await C.storage.session.set({[t]: v})
            };
            let _ = !1;
            const o = async y => {
                if (!_) try {
                    _ = !0;
                    const {[t]: d} = await C.storage.session.get(t);
                    if (d) {
                        const v = Object.entries(d).reduce((g, [c, u]) => (g[c] = {
                            ...u,
                            tabIds: u.tabIds.filter(h => h !== y)
                        }, g), {});
                        await C.storage.session.set({[t]: v})
                    }
                } finally {
                    _ = !1
                }
            }, s = async y => {
                if (!_) try {
                    _ = !0;
                    const {[t]: d} = await C.storage.session.get(t);
                    if (d) {
                        const v = Object.entries(d).reduce((g, [c, u]) => (g[c] = {
                            ...u,
                            tabIds: u.tabIds.filter(h => y.includes(h))
                        }, g), {});
                        await C.storage.session.set({[t]: v})
                    }
                } finally {
                    _ = !1
                }
            };
            (async () => {
                const d = (await C.windows.getAll({populate: !0})).flatMap(g => (g.tabs || []).map(c => c.id)).filter(Boolean);
                await s(d);
                const {[t]: v} = await C.storage.session.get(t);
                v && Object.keys(v).forEach(g => {
                    f(g)
                })
            })(), Nr((y, d, v) => {
                var g;
                if (Dr(y) && y.type === e.requestKey && ((g = d.tab) != null && g.id) && ii(r, y.message.key)) {
                    const c = d.tab.id;
                    v(), l(y.message, c)
                }
            }), C.tabs.onRemoved.addListener(y => {
                setTimeout(() => {
                    o(y)
                }, 10 * 1e3)
            })
        };
    var li = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function Uc(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function qc(e) {
        if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
        var r = e.default;
        if (typeof r == "function") {
            var t = function n() {
                return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments)
            };
            t.prototype = r.prototype
        } else t = {};
        return Object.defineProperty(t, "__esModule", {value: !0}), Object.keys(e).forEach(function (n) {
            var a = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(t, n, a.get ? a : {
                enumerable: !0, get: function () {
                    return e[n]
                }
            })
        }), t
    }

    var Fr, fi;

    function it() {
        return fi || (fi = 1, Fr = TypeError), Fr
    }

    const Bc = qc(Object.freeze(Object.defineProperty({
        __proto__: null,
        default: {}
    }, Symbol.toStringTag, {value: "Module"})));
    var Lr, si;

    function tr() {
        if (si) return Lr;
        si = 1;
        var e = typeof Map == "function" && Map.prototype,
            r = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
            t = e && r && typeof r.get == "function" ? r.get : null, n = e && Map.prototype.forEach,
            a = typeof Set == "function" && Set.prototype,
            i = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
            f = a && i && typeof i.get == "function" ? i.get : null, l = a && Set.prototype.forEach,
            _ = typeof WeakMap == "function" && WeakMap.prototype, o = _ ? WeakMap.prototype.has : null,
            s = typeof WeakSet == "function" && WeakSet.prototype, x = s ? WeakSet.prototype.has : null,
            y = typeof WeakRef == "function" && WeakRef.prototype, d = y ? WeakRef.prototype.deref : null,
            v = Boolean.prototype.valueOf, g = Object.prototype.toString, c = Function.prototype.toString,
            u = String.prototype.match, h = String.prototype.slice, b = String.prototype.replace,
            p = String.prototype.toUpperCase, E = String.prototype.toLowerCase, O = RegExp.prototype.test,
            S = Array.prototype.concat, R = Array.prototype.join, k = Array.prototype.slice, A = Math.floor,
            T = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, I = Object.getOwnPropertySymbols,
            j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
            L = typeof Symbol == "function" && typeof Symbol.iterator == "object",
            M = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === L || !0) ? Symbol.toStringTag : null,
            ce = Object.prototype.propertyIsEnumerable,
            ae = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (w) {
                return w.__proto__
            } : null);

        function P(w, m) {
            if (w === 1 / 0 || w === -1 / 0 || w !== w || w && w > -1e3 && w < 1e3 || O.call(/e/, m)) return m;
            var F = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
            if (typeof w == "number") {
                var q = w < 0 ? -A(-w) : A(w);
                if (q !== w) {
                    var Z = String(q), D = h.call(m, Z.length + 1);
                    return b.call(Z, F, "$&_") + "." + b.call(b.call(D, /([0-9]{3})/g, "$&_"), /_$/, "")
                }
            }
            return b.call(m, F, "$&_")
        }

        var ie = Bc, xe = ie.custom, Qe = W(xe) ? xe : null, De = {__proto__: null, double: '"', single: "'"},
            $e = {__proto__: null, double: /(["\\])/g, single: /(['\\])/g};
        Lr = function w(m, F, q, Z) {
            var D = F || {};
            if (K(D, "quoteStyle") && !K(De, D.quoteStyle)) throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (K(D, "maxStringLength") && (typeof D.maxStringLength == "number" ? D.maxStringLength < 0 && D.maxStringLength !== 1 / 0 : D.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var ze = K(D, "customInspect") ? D.customInspect : !0;
            if (typeof ze != "boolean" && ze !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (K(D, "indent") && D.indent !== null && D.indent !== "	" && !(parseInt(D.indent, 10) === D.indent && D.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (K(D, "numericSeparator") && typeof D.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var tt = D.numericSeparator;
            if (typeof m > "u") return "undefined";
            if (m === null) return "null";
            if (typeof m == "boolean") return m ? "true" : "false";
            if (typeof m == "string") return Bl(m, D);
            if (typeof m == "number") {
                if (m === 0) return 1 / 0 / m > 0 ? "0" : "-0";
                var le = String(m);
                return tt ? P(m, le) : le
            }
            if (typeof m == "bigint") {
                var Ne = String(m) + "n";
                return tt ? P(m, Ne) : Ne
            }
            var ma = typeof D.depth > "u" ? 5 : D.depth;
            if (typeof q > "u" && (q = 0), q >= ma && ma > 0 && typeof m == "object") return Ce(m) ? "[Array]" : "[Object]";
            var wt = Qp(D, q);
            if (typeof Z > "u") Z = []; else if (Je(Z, m) >= 0) return "[Circular]";

            function he(bt, xr, ey) {
                if (xr && (Z = k.call(Z), Z.push(xr)), ey) {
                    var Yl = {depth: D.depth};
                    return K(D, "quoteStyle") && (Yl.quoteStyle = D.quoteStyle), w(bt, Yl, q + 1, Z)
                }
                return w(bt, D, q + 1, Z)
            }

            if (typeof m == "function" && !Ee(m)) {
                var Zl = Kt(m), Hl = br(m, he);
                return "[Function" + (Zl ? ": " + Zl : " (anonymous)") + "]" + (Hl.length > 0 ? " { " + R.call(Hl, ", ") + " }" : "")
            }
            if (W(m)) {
                var Kl = L ? b.call(String(m), /^(Symbol\(.*\))_[^)]*$/, "$1") : j.call(m);
                return typeof m == "object" && !L ? Gt(Kl) : Kl
            }
            if (Vp(m)) {
                for (var Wt = "<" + E.call(String(m.nodeName)), xa = m.attributes || [], mr = 0; mr < xa.length; mr++) Wt += " " + xa[mr].name + "=" + Me(Se(xa[mr].value), "double", D);
                return Wt += ">", m.childNodes && m.childNodes.length && (Wt += "..."), Wt += "</" + E.call(String(m.nodeName)) + ">", Wt
            }
            if (Ce(m)) {
                if (m.length === 0) return "[]";
                var Sa = br(m, he);
                return wt && !Yp(Sa) ? "[" + ba(Sa, wt) + "]" : "[ " + R.call(Sa, ", ") + " ]"
            }
            if (Q(m)) {
                var Ea = br(m, he);
                return !("cause" in Error.prototype) && "cause" in m && !ce.call(m, "cause") ? "{ [" + String(m) + "] " + R.call(S.call("[cause]: " + he(m.cause), Ea), ", ") + " }" : Ea.length === 0 ? "[" + String(m) + "]" : "{ [" + String(m) + "] " + R.call(Ea, ", ") + " }"
            }
            if (typeof m == "object" && ze) {
                if (Qe && typeof m[Qe] == "function" && ie) return ie(m, {depth: ma - q});
                if (ze !== "symbol" && typeof m.inspect == "function") return m.inspect()
            }
            if (et(m)) {
                var Gl = [];
                return n && n.call(m, function (bt, xr) {
                    Gl.push(he(xr, m, !0) + " => " + he(bt, m))
                }), jl("Map", t.call(m), Gl, wt)
            }
            if (gt(m)) {
                var Wl = [];
                return l && l.call(m, function (bt) {
                    Wl.push(he(bt, m))
                }), jl("Set", f.call(m), Wl, wt)
            }
            if (de(m)) return wa("WeakMap");
            if (vt(m)) return wa("WeakSet");
            if (_t(m)) return wa("WeakRef");
            if (G(m)) return Gt(he(Number(m)));
            if (ee(m)) return Gt(he(T.call(m)));
            if (U(m)) return Gt(v.call(m));
            if (z(m)) return Gt(he(String(m)));
            if (typeof window < "u" && m === window) return "{ [object Window] }";
            if (typeof globalThis < "u" && m === globalThis || typeof li < "u" && m === li) return "{ [object globalThis] }";
            if (!yt(m) && !Ee(m)) {
                var Aa = br(m, he),
                    Vl = ae ? ae(m) === Object.prototype : m instanceof Object || m.constructor === Object,
                    Oa = m instanceof Object ? "" : "null prototype",
                    Xl = !Vl && M && Object(m) === m && M in m ? h.call(oe(m), 8, -1) : Oa ? "Object" : "",
                    Jp = Vl || typeof m.constructor != "function" ? "" : m.constructor.name ? m.constructor.name + " " : "",
                    Ra = Jp + (Xl || Oa ? "[" + R.call(S.call([], Xl || [], Oa || []), ": ") + "] " : "");
                return Aa.length === 0 ? Ra + "{}" : wt ? Ra + "{" + ba(Aa, wt) + "}" : Ra + "{ " + R.call(Aa, ", ") + " }"
            }
            return String(m)
        };

        function Me(w, m, F) {
            var q = F.quoteStyle || m, Z = De[q];
            return Z + w + Z
        }

        function Se(w) {
            return b.call(String(w), /"/g, "&quot;")
        }

        function Ce(w) {
            return oe(w) === "[object Array]" && (!M || !(typeof w == "object" && M in w))
        }

        function yt(w) {
            return oe(w) === "[object Date]" && (!M || !(typeof w == "object" && M in w))
        }

        function Ee(w) {
            return oe(w) === "[object RegExp]" && (!M || !(typeof w == "object" && M in w))
        }

        function Q(w) {
            return oe(w) === "[object Error]" && (!M || !(typeof w == "object" && M in w))
        }

        function z(w) {
            return oe(w) === "[object String]" && (!M || !(typeof w == "object" && M in w))
        }

        function G(w) {
            return oe(w) === "[object Number]" && (!M || !(typeof w == "object" && M in w))
        }

        function U(w) {
            return oe(w) === "[object Boolean]" && (!M || !(typeof w == "object" && M in w))
        }

        function W(w) {
            if (L) return w && typeof w == "object" && w instanceof Symbol;
            if (typeof w == "symbol") return !0;
            if (!w || typeof w != "object" || !j) return !1;
            try {
                return j.call(w), !0
            } catch {
            }
            return !1
        }

        function ee(w) {
            if (!w || typeof w != "object" || !T) return !1;
            try {
                return T.call(w), !0
            } catch {
            }
            return !1
        }

        var ue = Object.prototype.hasOwnProperty || function (w) {
            return w in this
        };

        function K(w, m) {
            return ue.call(w, m)
        }

        function oe(w) {
            return g.call(w)
        }

        function Kt(w) {
            if (w.name) return w.name;
            var m = u.call(c.call(w), /^function\s*([\w$]+)/);
            return m ? m[1] : null
        }

        function Je(w, m) {
            if (w.indexOf) return w.indexOf(m);
            for (var F = 0, q = w.length; F < q; F++) if (w[F] === m) return F;
            return -1
        }

        function et(w) {
            if (!t || !w || typeof w != "object") return !1;
            try {
                t.call(w);
                try {
                    f.call(w)
                } catch {
                    return !0
                }
                return w instanceof Map
            } catch {
            }
            return !1
        }

        function de(w) {
            if (!o || !w || typeof w != "object") return !1;
            try {
                o.call(w, o);
                try {
                    x.call(w, x)
                } catch {
                    return !0
                }
                return w instanceof WeakMap
            } catch {
            }
            return !1
        }

        function _t(w) {
            if (!d || !w || typeof w != "object") return !1;
            try {
                return d.call(w), !0
            } catch {
            }
            return !1
        }

        function gt(w) {
            if (!f || !w || typeof w != "object") return !1;
            try {
                f.call(w);
                try {
                    t.call(w)
                } catch {
                    return !0
                }
                return w instanceof Set
            } catch {
            }
            return !1
        }

        function vt(w) {
            if (!x || !w || typeof w != "object") return !1;
            try {
                x.call(w, x);
                try {
                    o.call(w, o)
                } catch {
                    return !0
                }
                return w instanceof WeakSet
            } catch {
            }
            return !1
        }

        function Vp(w) {
            return !w || typeof w != "object" ? !1 : typeof HTMLElement < "u" && w instanceof HTMLElement ? !0 : typeof w.nodeName == "string" && typeof w.getAttribute == "function"
        }

        function Bl(w, m) {
            if (w.length > m.maxStringLength) {
                var F = w.length - m.maxStringLength, q = "... " + F + " more character" + (F > 1 ? "s" : "");
                return Bl(h.call(w, 0, m.maxStringLength), m) + q
            }
            var Z = $e[m.quoteStyle || "single"];
            Z.lastIndex = 0;
            var D = b.call(b.call(w, Z, "\\$1"), /[\x00-\x1f]/g, Xp);
            return Me(D, "single", m)
        }

        function Xp(w) {
            var m = w.charCodeAt(0), F = {8: "b", 9: "t", 10: "n", 12: "f", 13: "r"}[m];
            return F ? "\\" + F : "\\x" + (m < 16 ? "0" : "") + p.call(m.toString(16))
        }

        function Gt(w) {
            return "Object(" + w + ")"
        }

        function wa(w) {
            return w + " { ? }"
        }

        function jl(w, m, F, q) {
            var Z = q ? ba(F, q) : R.call(F, ", ");
            return w + " (" + m + ") {" + Z + "}"
        }

        function Yp(w) {
            for (var m = 0; m < w.length; m++) if (Je(w[m], `
`) >= 0) return !1;
            return !0
        }

        function Qp(w, m) {
            var F;
            if (w.indent === "	") F = "	"; else if (typeof w.indent == "number" && w.indent > 0) F = R.call(Array(w.indent + 1), " "); else return null;
            return {base: F, prev: R.call(Array(m + 1), F)}
        }

        function ba(w, m) {
            if (w.length === 0) return "";
            var F = `
` + m.prev + m.base;
            return F + R.call(w, "," + F) + `
` + m.prev
        }

        function br(w, m) {
            var F = Ce(w), q = [];
            if (F) {
                q.length = w.length;
                for (var Z = 0; Z < w.length; Z++) q[Z] = K(w, Z) ? m(w[Z], w) : ""
            }
            var D = typeof I == "function" ? I(w) : [], ze;
            if (L) {
                ze = {};
                for (var tt = 0; tt < D.length; tt++) ze["$" + D[tt]] = D[tt]
            }
            for (var le in w) K(w, le) && (F && String(Number(le)) === le && le < w.length || L && ze["$" + le] instanceof Symbol || (O.call(/[^\w$]/, le) ? q.push(m(le, w) + ": " + m(w[le], w)) : q.push(le + ": " + m(w[le], w))));
            if (typeof I == "function") for (var Ne = 0; Ne < D.length; Ne++) ce.call(w, D[Ne]) && q.push("[" + m(D[Ne]) + "]: " + m(w[D[Ne]], w));
            return q
        }

        return Lr
    }

    var Ur, ci;

    function jc() {
        if (ci) return Ur;
        ci = 1;
        var e = tr(), r = it(), t = function (l, _, o) {
            for (var s = l, x; (x = s.next) != null; s = x) if (x.key === _) return s.next = x.next, o || (x.next = l.next, l.next = x), x
        }, n = function (l, _) {
            if (l) {
                var o = t(l, _);
                return o && o.value
            }
        }, a = function (l, _, o) {
            var s = t(l, _);
            s ? s.value = o : l.next = {key: _, next: l.next, value: o}
        }, i = function (l, _) {
            return l ? !!t(l, _) : !1
        }, f = function (l, _) {
            if (l) return t(l, _, !0)
        };
        return Ur = function () {
            var _, o = {
                assert: function (s) {
                    if (!o.has(s)) throw new r("Side channel does not contain " + e(s))
                }, delete: function (s) {
                    var x = _ && _.next, y = f(_, s);
                    return y && x && x === y && (_ = void 0), !!y
                }, get: function (s) {
                    return n(_, s)
                }, has: function (s) {
                    return i(_, s)
                }, set: function (s, x) {
                    _ || (_ = {next: void 0}), a(_, s, x)
                }
            };
            return o
        }, Ur
    }

    var qr, ui;

    function Zc() {
        return ui || (ui = 1, qr = Object), qr
    }

    var Br, di;

    function Hc() {
        return di || (di = 1, Br = Error), Br
    }

    var jr, hi;

    function Kc() {
        return hi || (hi = 1, jr = EvalError), jr
    }

    var Zr, pi;

    function Gc() {
        return pi || (pi = 1, Zr = RangeError), Zr
    }

    var Hr, yi;

    function Wc() {
        return yi || (yi = 1, Hr = ReferenceError), Hr
    }

    var Kr, _i;

    function Vc() {
        return _i || (_i = 1, Kr = SyntaxError), Kr
    }

    var Gr, gi;

    function Xc() {
        return gi || (gi = 1, Gr = URIError), Gr
    }

    var Wr, vi;

    function Yc() {
        return vi || (vi = 1, Wr = Math.abs), Wr
    }

    var Vr, wi;

    function Qc() {
        return wi || (wi = 1, Vr = Math.floor), Vr
    }

    var Xr, bi;

    function Jc() {
        return bi || (bi = 1, Xr = Math.max), Xr
    }

    var Yr, mi;

    function eu() {
        return mi || (mi = 1, Yr = Math.min), Yr
    }

    var Qr, xi;

    function tu() {
        return xi || (xi = 1, Qr = Math.pow), Qr
    }

    var Jr, Si;

    function ru() {
        return Si || (Si = 1, Jr = Math.round), Jr
    }

    var en, Ei;

    function nu() {
        return Ei || (Ei = 1, en = Number.isNaN || function (r) {
            return r !== r
        }), en
    }

    var tn, Ai;

    function au() {
        if (Ai) return tn;
        Ai = 1;
        var e = nu();
        return tn = function (t) {
            return e(t) || t === 0 ? t : t < 0 ? -1 : 1
        }, tn
    }

    var rn, Oi;

    function iu() {
        return Oi || (Oi = 1, rn = Object.getOwnPropertyDescriptor), rn
    }

    var nn, Ri;

    function ki() {
        if (Ri) return nn;
        Ri = 1;
        var e = iu();
        if (e) try {
            e([], "length")
        } catch {
            e = null
        }
        return nn = e, nn
    }

    var an, Ti;

    function ou() {
        if (Ti) return an;
        Ti = 1;
        var e = Object.defineProperty || !1;
        if (e) try {
            e({}, "a", {value: 1})
        } catch {
            e = !1
        }
        return an = e, an
    }

    var on, Ii;

    function lu() {
        return Ii || (Ii = 1, on = function () {
            if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
            if (typeof Symbol.iterator == "symbol") return !0;
            var r = {}, t = Symbol("test"), n = Object(t);
            if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
            var a = 42;
            r[t] = a;
            for (var i in r) return !1;
            if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0) return !1;
            var f = Object.getOwnPropertySymbols(r);
            if (f.length !== 1 || f[0] !== t || !Object.prototype.propertyIsEnumerable.call(r, t)) return !1;
            if (typeof Object.getOwnPropertyDescriptor == "function") {
                var l = Object.getOwnPropertyDescriptor(r, t);
                if (l.value !== a || l.enumerable !== !0) return !1
            }
            return !0
        }), on
    }

    var ln, Pi;

    function fu() {
        if (Pi) return ln;
        Pi = 1;
        var e = typeof Symbol < "u" && Symbol, r = lu();
        return ln = function () {
            return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r()
        }, ln
    }

    var fn, Di;

    function $i() {
        return Di || (Di = 1, fn = typeof Reflect < "u" && Reflect.getPrototypeOf || null), fn
    }

    var sn, Mi;

    function su() {
        return Mi || (Mi = 1, sn = Object), sn
    }

    var cn, Ci;

    function zi() {
        if (Ci) return cn;
        Ci = 1;
        var e = su();
        return cn = e.getPrototypeOf || null, cn
    }

    var un, Ni;

    function cu() {
        if (Ni) return un;
        Ni = 1;
        var e = "Function.prototype.bind called on incompatible ", r = Object.prototype.toString, t = Math.max,
            n = "[object Function]", a = function (_, o) {
                for (var s = [], x = 0; x < _.length; x += 1) s[x] = _[x];
                for (var y = 0; y < o.length; y += 1) s[y + _.length] = o[y];
                return s
            }, i = function (_, o) {
                for (var s = [], x = o, y = 0; x < _.length; x += 1, y += 1) s[y] = _[x];
                return s
            }, f = function (l, _) {
                for (var o = "", s = 0; s < l.length; s += 1) o += l[s], s + 1 < l.length && (o += _);
                return o
            };
        return un = function (_) {
            var o = this;
            if (typeof o != "function" || r.apply(o) !== n) throw new TypeError(e + o);
            for (var s = i(arguments, 1), x, y = function () {
                if (this instanceof x) {
                    var u = o.apply(this, a(s, arguments));
                    return Object(u) === u ? u : this
                }
                return o.apply(_, a(s, arguments))
            }, d = t(0, o.length - s.length), v = [], g = 0; g < d; g++) v[g] = "$" + g;
            if (x = Function("binder", "return function (" + f(v, ",") + "){ return binder.apply(this,arguments); }")(y), o.prototype) {
                var c = function () {
                };
                c.prototype = o.prototype, x.prototype = new c, c.prototype = null
            }
            return x
        }, un
    }

    var dn, Fi;

    function rr() {
        if (Fi) return dn;
        Fi = 1;
        var e = cu();
        return dn = Function.prototype.bind || e, dn
    }

    var hn, Li;

    function pn() {
        return Li || (Li = 1, hn = Function.prototype.call), hn
    }

    var yn, Ui;

    function qi() {
        return Ui || (Ui = 1, yn = Function.prototype.apply), yn
    }

    var _n, Bi;

    function uu() {
        return Bi || (Bi = 1, _n = typeof Reflect < "u" && Reflect && Reflect.apply), _n
    }

    var gn, ji;

    function du() {
        if (ji) return gn;
        ji = 1;
        var e = rr(), r = qi(), t = pn(), n = uu();
        return gn = n || e.call(t, r), gn
    }

    var vn, Zi;

    function Hi() {
        if (Zi) return vn;
        Zi = 1;
        var e = rr(), r = it(), t = pn(), n = du();
        return vn = function (i) {
            if (i.length < 1 || typeof i[0] != "function") throw new r("a function is required");
            return n(e, t, i)
        }, vn
    }

    var wn, Ki;

    function hu() {
        if (Ki) return wn;
        Ki = 1;
        var e = Hi(), r = ki(), t;
        try {
            t = [].__proto__ === Array.prototype
        } catch (f) {
            if (!f || typeof f != "object" || !("code" in f) || f.code !== "ERR_PROTO_ACCESS") throw f
        }
        var n = !!t && r && r(Object.prototype, "__proto__"), a = Object, i = a.getPrototypeOf;
        return wn = n && typeof n.get == "function" ? e([n.get]) : typeof i == "function" ? function (l) {
            return i(l == null ? l : a(l))
        } : !1, wn
    }

    var bn, Gi;

    function pu() {
        if (Gi) return bn;
        Gi = 1;
        var e = $i(), r = zi(), t = hu();
        return bn = e ? function (a) {
            return e(a)
        } : r ? function (a) {
            if (!a || typeof a != "object" && typeof a != "function") throw new TypeError("getProto: not an object");
            return r(a)
        } : t ? function (a) {
            return t(a)
        } : null, bn
    }

    var mn, Wi;

    function yu() {
        if (Wi) return mn;
        Wi = 1;
        var e = Function.prototype.call, r = Object.prototype.hasOwnProperty, t = rr();
        return mn = t.call(e, r), mn
    }

    var xn, Vi;

    function Sn() {
        if (Vi) return xn;
        Vi = 1;
        var e, r = Zc(), t = Hc(), n = Kc(), a = Gc(), i = Wc(), f = Vc(), l = it(), _ = Xc(), o = Yc(), s = Qc(),
            x = Jc(), y = eu(), d = tu(), v = ru(), g = au(), c = Function, u = function (Q) {
                try {
                    return c('"use strict"; return (' + Q + ").constructor;")()
                } catch {
                }
            }, h = ki(), b = ou(), p = function () {
                throw new l
            }, E = h ? (function () {
                try {
                    return arguments.callee, p
                } catch {
                    try {
                        return h(arguments, "callee").get
                    } catch {
                        return p
                    }
                }
            })() : p, O = fu()(), S = pu(), R = zi(), k = $i(), A = qi(), T = pn(), I = {},
            j = typeof Uint8Array > "u" || !S ? e : S(Uint8Array), L = {
                __proto__: null,
                "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
                "%ArrayIteratorPrototype%": O && S ? S([][Symbol.iterator]()) : e,
                "%AsyncFromSyncIteratorPrototype%": e,
                "%AsyncFunction%": I,
                "%AsyncGenerator%": I,
                "%AsyncGeneratorFunction%": I,
                "%AsyncIteratorPrototype%": I,
                "%Atomics%": typeof Atomics > "u" ? e : Atomics,
                "%BigInt%": typeof BigInt > "u" ? e : BigInt,
                "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
                "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
                "%Boolean%": Boolean,
                "%DataView%": typeof DataView > "u" ? e : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": t,
                "%eval%": eval,
                "%EvalError%": n,
                "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
                "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
                "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
                "%Function%": c,
                "%GeneratorFunction%": I,
                "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
                "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
                "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": O && S ? S(S([][Symbol.iterator]())) : e,
                "%JSON%": typeof JSON == "object" ? JSON : e,
                "%Map%": typeof Map > "u" ? e : Map,
                "%MapIteratorPrototype%": typeof Map > "u" || !O || !S ? e : S(new Map()[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": r,
                "%Object.getOwnPropertyDescriptor%": h,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": typeof Promise > "u" ? e : Promise,
                "%Proxy%": typeof Proxy > "u" ? e : Proxy,
                "%RangeError%": a,
                "%ReferenceError%": i,
                "%Reflect%": typeof Reflect > "u" ? e : Reflect,
                "%RegExp%": RegExp,
                "%Set%": typeof Set > "u" ? e : Set,
                "%SetIteratorPrototype%": typeof Set > "u" || !O || !S ? e : S(new Set()[Symbol.iterator]()),
                "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": O && S ? S(""[Symbol.iterator]()) : e,
                "%Symbol%": O ? Symbol : e,
                "%SyntaxError%": f,
                "%ThrowTypeError%": E,
                "%TypedArray%": j,
                "%TypeError%": l,
                "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
                "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
                "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
                "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
                "%URIError%": _,
                "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
                "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
                "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
                "%Function.prototype.call%": T,
                "%Function.prototype.apply%": A,
                "%Object.defineProperty%": b,
                "%Object.getPrototypeOf%": R,
                "%Math.abs%": o,
                "%Math.floor%": s,
                "%Math.max%": x,
                "%Math.min%": y,
                "%Math.pow%": d,
                "%Math.round%": v,
                "%Math.sign%": g,
                "%Reflect.getPrototypeOf%": k
            };
        if (S) try {
            null.error
        } catch (Q) {
            var M = S(S(Q));
            L["%Error.prototype%"] = M
        }
        var ce = function Q(z) {
                var G;
                if (z === "%AsyncFunction%") G = u("async function () {}"); else if (z === "%GeneratorFunction%") G = u("function* () {}"); else if (z === "%AsyncGeneratorFunction%") G = u("async function* () {}"); else if (z === "%AsyncGenerator%") {
                    var U = Q("%AsyncGeneratorFunction%");
                    U && (G = U.prototype)
                } else if (z === "%AsyncIteratorPrototype%") {
                    var W = Q("%AsyncGenerator%");
                    W && S && (G = S(W.prototype))
                }
                return L[z] = G, G
            }, ae = {
                __proto__: null,
                "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                "%ArrayPrototype%": ["Array", "prototype"],
                "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                "%ArrayProto_values%": ["Array", "prototype", "values"],
                "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                "%BooleanPrototype%": ["Boolean", "prototype"],
                "%DataViewPrototype%": ["DataView", "prototype"],
                "%DatePrototype%": ["Date", "prototype"],
                "%ErrorPrototype%": ["Error", "prototype"],
                "%EvalErrorPrototype%": ["EvalError", "prototype"],
                "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                "%FunctionPrototype%": ["Function", "prototype"],
                "%Generator%": ["GeneratorFunction", "prototype"],
                "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                "%JSONParse%": ["JSON", "parse"],
                "%JSONStringify%": ["JSON", "stringify"],
                "%MapPrototype%": ["Map", "prototype"],
                "%NumberPrototype%": ["Number", "prototype"],
                "%ObjectPrototype%": ["Object", "prototype"],
                "%ObjProto_toString%": ["Object", "prototype", "toString"],
                "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                "%PromisePrototype%": ["Promise", "prototype"],
                "%PromiseProto_then%": ["Promise", "prototype", "then"],
                "%Promise_all%": ["Promise", "all"],
                "%Promise_reject%": ["Promise", "reject"],
                "%Promise_resolve%": ["Promise", "resolve"],
                "%RangeErrorPrototype%": ["RangeError", "prototype"],
                "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                "%RegExpPrototype%": ["RegExp", "prototype"],
                "%SetPrototype%": ["Set", "prototype"],
                "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                "%StringPrototype%": ["String", "prototype"],
                "%SymbolPrototype%": ["Symbol", "prototype"],
                "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                "%TypeErrorPrototype%": ["TypeError", "prototype"],
                "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                "%URIErrorPrototype%": ["URIError", "prototype"],
                "%WeakMapPrototype%": ["WeakMap", "prototype"],
                "%WeakSetPrototype%": ["WeakSet", "prototype"]
            }, P = rr(), ie = yu(), xe = P.call(T, Array.prototype.concat), Qe = P.call(A, Array.prototype.splice),
            De = P.call(T, String.prototype.replace), $e = P.call(T, String.prototype.slice),
            Me = P.call(T, RegExp.prototype.exec),
            Se = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
            Ce = /\\(\\)?/g, yt = function (z) {
                var G = $e(z, 0, 1), U = $e(z, -1);
                if (G === "%" && U !== "%") throw new f("invalid intrinsic syntax, expected closing `%`");
                if (U === "%" && G !== "%") throw new f("invalid intrinsic syntax, expected opening `%`");
                var W = [];
                return De(z, Se, function (ee, ue, K, oe) {
                    W[W.length] = K ? De(oe, Ce, "$1") : ue || ee
                }), W
            }, Ee = function (z, G) {
                var U = z, W;
                if (ie(ae, U) && (W = ae[U], U = "%" + W[0] + "%"), ie(L, U)) {
                    var ee = L[U];
                    if (ee === I && (ee = ce(U)), typeof ee > "u" && !G) throw new l("intrinsic " + z + " exists, but is not available. Please file an issue!");
                    return {alias: W, name: U, value: ee}
                }
                throw new f("intrinsic " + z + " does not exist!")
            };
        return xn = function (z, G) {
            if (typeof z != "string" || z.length === 0) throw new l("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && typeof G != "boolean") throw new l('"allowMissing" argument must be a boolean');
            if (Me(/^%?[^%]*%?$/, z) === null) throw new f("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var U = yt(z), W = U.length > 0 ? U[0] : "", ee = Ee("%" + W + "%", G), ue = ee.name, K = ee.value, oe = !1,
                Kt = ee.alias;
            Kt && (W = Kt[0], Qe(U, xe([0, 1], Kt)));
            for (var Je = 1, et = !0; Je < U.length; Je += 1) {
                var de = U[Je], _t = $e(de, 0, 1), gt = $e(de, -1);
                if ((_t === '"' || _t === "'" || _t === "`" || gt === '"' || gt === "'" || gt === "`") && _t !== gt) throw new f("property names with quotes must have matching quotes");
                if ((de === "constructor" || !et) && (oe = !0), W += "." + de, ue = "%" + W + "%", ie(L, ue)) K = L[ue]; else if (K != null) {
                    if (!(de in K)) {
                        if (!G) throw new l("base intrinsic for " + z + " exists, but the property is not available.");
                        return
                    }
                    if (h && Je + 1 >= U.length) {
                        var vt = h(K, de);
                        et = !!vt, et && "get" in vt && !("originalValue" in vt.get) ? K = vt.get : K = K[de]
                    } else et = ie(K, de), K = K[de];
                    et && !oe && (L[ue] = K)
                }
            }
            return K
        }, xn
    }

    var En, Xi;

    function Yi() {
        if (Xi) return En;
        Xi = 1;
        var e = Sn(), r = Hi(), t = r([e("%String.prototype.indexOf%")]);
        return En = function (a, i) {
            var f = e(a, !!i);
            return typeof f == "function" && t(a, ".prototype.") > -1 ? r([f]) : f
        }, En
    }

    var An, Qi;

    function Ji() {
        if (Qi) return An;
        Qi = 1;
        var e = Sn(), r = Yi(), t = tr(), n = it(), a = e("%Map%", !0), i = r("Map.prototype.get", !0),
            f = r("Map.prototype.set", !0), l = r("Map.prototype.has", !0), _ = r("Map.prototype.delete", !0),
            o = r("Map.prototype.size", !0);
        return An = !!a && function () {
            var x, y = {
                assert: function (d) {
                    if (!y.has(d)) throw new n("Side channel does not contain " + t(d))
                }, delete: function (d) {
                    if (x) {
                        var v = _(x, d);
                        return o(x) === 0 && (x = void 0), v
                    }
                    return !1
                }, get: function (d) {
                    if (x) return i(x, d)
                }, has: function (d) {
                    return x ? l(x, d) : !1
                }, set: function (d, v) {
                    x || (x = new a), f(x, d, v)
                }
            };
            return y
        }, An
    }

    var On, eo;

    function _u() {
        if (eo) return On;
        eo = 1;
        var e = Sn(), r = Yi(), t = tr(), n = Ji(), a = it(), i = e("%WeakMap%", !0),
            f = r("WeakMap.prototype.get", !0), l = r("WeakMap.prototype.set", !0), _ = r("WeakMap.prototype.has", !0),
            o = r("WeakMap.prototype.delete", !0);
        return On = i ? function () {
            var x, y, d = {
                assert: function (v) {
                    if (!d.has(v)) throw new a("Side channel does not contain " + t(v))
                }, delete: function (v) {
                    if (i && v && (typeof v == "object" || typeof v == "function")) {
                        if (x) return o(x, v)
                    } else if (n && y) return y.delete(v);
                    return !1
                }, get: function (v) {
                    return i && v && (typeof v == "object" || typeof v == "function") && x ? f(x, v) : y && y.get(v)
                }, has: function (v) {
                    return i && v && (typeof v == "object" || typeof v == "function") && x ? _(x, v) : !!y && y.has(v)
                }, set: function (v, g) {
                    i && v && (typeof v == "object" || typeof v == "function") ? (x || (x = new i), l(x, v, g)) : n && (y || (y = n()), y.set(v, g))
                }
            };
            return d
        } : n, On
    }

    var Rn, to;

    function gu() {
        if (to) return Rn;
        to = 1;
        var e = it(), r = tr(), t = jc(), n = Ji(), a = _u(), i = a || n || t;
        return Rn = function () {
            var l, _ = {
                assert: function (o) {
                    if (!_.has(o)) throw new e("Side channel does not contain " + r(o))
                }, delete: function (o) {
                    return !!l && l.delete(o)
                }, get: function (o) {
                    return l && l.get(o)
                }, has: function (o) {
                    return !!l && l.has(o)
                }, set: function (o, s) {
                    l || (l = i()), l.set(o, s)
                }
            };
            return _
        }, Rn
    }

    var kn, ro;

    function Tn() {
        if (ro) return kn;
        ro = 1;
        var e = String.prototype.replace, r = /%20/g, t = {RFC1738: "RFC1738", RFC3986: "RFC3986"};
        return kn = {
            default: t.RFC3986, formatters: {
                RFC1738: function (n) {
                    return e.call(n, r, "+")
                }, RFC3986: function (n) {
                    return String(n)
                }
            }, RFC1738: t.RFC1738, RFC3986: t.RFC3986
        }, kn
    }

    var In, no;

    function ao() {
        if (no) return In;
        no = 1;
        var e = Tn(), r = Object.prototype.hasOwnProperty, t = Array.isArray, n = (function () {
            for (var c = [], u = 0; u < 256; ++u) c.push("%" + ((u < 16 ? "0" : "") + u.toString(16)).toUpperCase());
            return c
        })(), a = function (u) {
            for (; u.length > 1;) {
                var h = u.pop(), b = h.obj[h.prop];
                if (t(b)) {
                    for (var p = [], E = 0; E < b.length; ++E) typeof b[E] < "u" && p.push(b[E]);
                    h.obj[h.prop] = p
                }
            }
        }, i = function (u, h) {
            for (var b = h && h.plainObjects ? {__proto__: null} : {}, p = 0; p < u.length; ++p) typeof u[p] < "u" && (b[p] = u[p]);
            return b
        }, f = function c(u, h, b) {
            if (!h) return u;
            if (typeof h != "object" && typeof h != "function") {
                if (t(u)) u.push(h); else if (u && typeof u == "object") (b && (b.plainObjects || b.allowPrototypes) || !r.call(Object.prototype, h)) && (u[h] = !0); else return [u, h];
                return u
            }
            if (!u || typeof u != "object") return [u].concat(h);
            var p = u;
            return t(u) && !t(h) && (p = i(u, b)), t(u) && t(h) ? (h.forEach(function (E, O) {
                if (r.call(u, O)) {
                    var S = u[O];
                    S && typeof S == "object" && E && typeof E == "object" ? u[O] = c(S, E, b) : u.push(E)
                } else u[O] = E
            }), u) : Object.keys(h).reduce(function (E, O) {
                var S = h[O];
                return r.call(E, O) ? E[O] = c(E[O], S, b) : E[O] = S, E
            }, p)
        }, l = function (u, h) {
            return Object.keys(h).reduce(function (b, p) {
                return b[p] = h[p], b
            }, u)
        }, _ = function (c, u, h) {
            var b = c.replace(/\+/g, " ");
            if (h === "iso-8859-1") return b.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(b)
            } catch {
                return b
            }
        }, o = 1024, s = function (u, h, b, p, E) {
            if (u.length === 0) return u;
            var O = u;
            if (typeof u == "symbol" ? O = Symbol.prototype.toString.call(u) : typeof u != "string" && (O = String(u)), b === "iso-8859-1") return escape(O).replace(/%u[0-9a-f]{4}/gi, function (j) {
                return "%26%23" + parseInt(j.slice(2), 16) + "%3B"
            });
            for (var S = "", R = 0; R < O.length; R += o) {
                for (var k = O.length >= o ? O.slice(R, R + o) : O, A = [], T = 0; T < k.length; ++T) {
                    var I = k.charCodeAt(T);
                    if (I === 45 || I === 46 || I === 95 || I === 126 || I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || E === e.RFC1738 && (I === 40 || I === 41)) {
                        A[A.length] = k.charAt(T);
                        continue
                    }
                    if (I < 128) {
                        A[A.length] = n[I];
                        continue
                    }
                    if (I < 2048) {
                        A[A.length] = n[192 | I >> 6] + n[128 | I & 63];
                        continue
                    }
                    if (I < 55296 || I >= 57344) {
                        A[A.length] = n[224 | I >> 12] + n[128 | I >> 6 & 63] + n[128 | I & 63];
                        continue
                    }
                    T += 1, I = 65536 + ((I & 1023) << 10 | k.charCodeAt(T) & 1023), A[A.length] = n[240 | I >> 18] + n[128 | I >> 12 & 63] + n[128 | I >> 6 & 63] + n[128 | I & 63]
                }
                S += A.join("")
            }
            return S
        }, x = function (u) {
            for (var h = [{
                obj: {o: u},
                prop: "o"
            }], b = [], p = 0; p < h.length; ++p) for (var E = h[p], O = E.obj[E.prop], S = Object.keys(O), R = 0; R < S.length; ++R) {
                var k = S[R], A = O[k];
                typeof A == "object" && A !== null && b.indexOf(A) === -1 && (h.push({obj: O, prop: k}), b.push(A))
            }
            return a(h), u
        }, y = function (u) {
            return Object.prototype.toString.call(u) === "[object RegExp]"
        }, d = function (u) {
            return !u || typeof u != "object" ? !1 : !!(u.constructor && u.constructor.isBuffer && u.constructor.isBuffer(u))
        }, v = function (u, h) {
            return [].concat(u, h)
        }, g = function (u, h) {
            if (t(u)) {
                for (var b = [], p = 0; p < u.length; p += 1) b.push(h(u[p]));
                return b
            }
            return h(u)
        };
        return In = {
            arrayToObject: i,
            assign: l,
            combine: v,
            compact: x,
            decode: _,
            encode: s,
            isBuffer: d,
            isRegExp: y,
            maybeMap: g,
            merge: f
        }, In
    }

    var Pn, io;

    function vu() {
        if (io) return Pn;
        io = 1;
        var e = gu(), r = ao(), t = Tn(), n = Object.prototype.hasOwnProperty, a = {
            brackets: function (c) {
                return c + "[]"
            }, comma: "comma", indices: function (c, u) {
                return c + "[" + u + "]"
            }, repeat: function (c) {
                return c
            }
        }, i = Array.isArray, f = Array.prototype.push, l = function (g, c) {
            f.apply(g, i(c) ? c : [c])
        }, _ = Date.prototype.toISOString, o = t.default, s = {
            addQueryPrefix: !1,
            allowDots: !1,
            allowEmptyArrays: !1,
            arrayFormat: "indices",
            charset: "utf-8",
            charsetSentinel: !1,
            commaRoundTrip: !1,
            delimiter: "&",
            encode: !0,
            encodeDotInKeys: !1,
            encoder: r.encode,
            encodeValuesOnly: !1,
            filter: void 0,
            format: o,
            formatter: t.formatters[o],
            indices: !1,
            serializeDate: function (c) {
                return _.call(c)
            },
            skipNulls: !1,
            strictNullHandling: !1
        }, x = function (c) {
            return typeof c == "string" || typeof c == "number" || typeof c == "boolean" || typeof c == "symbol" || typeof c == "bigint"
        }, y = {}, d = function g(c, u, h, b, p, E, O, S, R, k, A, T, I, j, L, M, ce, ae) {
            for (var P = c, ie = ae, xe = 0, Qe = !1; (ie = ie.get(y)) !== void 0 && !Qe;) {
                var De = ie.get(c);
                if (xe += 1, typeof De < "u") {
                    if (De === xe) throw new RangeError("Cyclic object value");
                    Qe = !0
                }
                typeof ie.get(y) > "u" && (xe = 0)
            }
            if (typeof k == "function" ? P = k(u, P) : P instanceof Date ? P = I(P) : h === "comma" && i(P) && (P = r.maybeMap(P, function (ue) {
                return ue instanceof Date ? I(ue) : ue
            })), P === null) {
                if (E) return R && !M ? R(u, s.encoder, ce, "key", j) : u;
                P = ""
            }
            if (x(P) || r.isBuffer(P)) {
                if (R) {
                    var $e = M ? u : R(u, s.encoder, ce, "key", j);
                    return [L($e) + "=" + L(R(P, s.encoder, ce, "value", j))]
                }
                return [L(u) + "=" + L(String(P))]
            }
            var Me = [];
            if (typeof P > "u") return Me;
            var Se;
            if (h === "comma" && i(P)) M && R && (P = r.maybeMap(P, R)), Se = [{value: P.length > 0 ? P.join(",") || null : void 0}]; else if (i(k)) Se = k; else {
                var Ce = Object.keys(P);
                Se = A ? Ce.sort(A) : Ce
            }
            var yt = S ? String(u).replace(/\./g, "%2E") : String(u), Ee = b && i(P) && P.length === 1 ? yt + "[]" : yt;
            if (p && i(P) && P.length === 0) return Ee + "[]";
            for (var Q = 0; Q < Se.length; ++Q) {
                var z = Se[Q], G = typeof z == "object" && z && typeof z.value < "u" ? z.value : P[z];
                if (!(O && G === null)) {
                    var U = T && S ? String(z).replace(/\./g, "%2E") : String(z),
                        W = i(P) ? typeof h == "function" ? h(Ee, U) : Ee : Ee + (T ? "." + U : "[" + U + "]");
                    ae.set(c, xe);
                    var ee = e();
                    ee.set(y, ae), l(Me, g(G, W, h, b, p, E, O, S, h === "comma" && M && i(P) ? null : R, k, A, T, I, j, L, M, ce, ee))
                }
            }
            return Me
        }, v = function (c) {
            if (!c) return s;
            if (typeof c.allowEmptyArrays < "u" && typeof c.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
            if (typeof c.encodeDotInKeys < "u" && typeof c.encodeDotInKeys != "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
            if (c.encoder !== null && typeof c.encoder < "u" && typeof c.encoder != "function") throw new TypeError("Encoder has to be a function.");
            var u = c.charset || s.charset;
            if (typeof c.charset < "u" && c.charset !== "utf-8" && c.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var h = t.default;
            if (typeof c.format < "u") {
                if (!n.call(t.formatters, c.format)) throw new TypeError("Unknown format option provided.");
                h = c.format
            }
            var b = t.formatters[h], p = s.filter;
            (typeof c.filter == "function" || i(c.filter)) && (p = c.filter);
            var E;
            if (c.arrayFormat in a ? E = c.arrayFormat : "indices" in c ? E = c.indices ? "indices" : "repeat" : E = s.arrayFormat, "commaRoundTrip" in c && typeof c.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
            var O = typeof c.allowDots > "u" ? c.encodeDotInKeys === !0 ? !0 : s.allowDots : !!c.allowDots;
            return {
                addQueryPrefix: typeof c.addQueryPrefix == "boolean" ? c.addQueryPrefix : s.addQueryPrefix,
                allowDots: O,
                allowEmptyArrays: typeof c.allowEmptyArrays == "boolean" ? !!c.allowEmptyArrays : s.allowEmptyArrays,
                arrayFormat: E,
                charset: u,
                charsetSentinel: typeof c.charsetSentinel == "boolean" ? c.charsetSentinel : s.charsetSentinel,
                commaRoundTrip: !!c.commaRoundTrip,
                delimiter: typeof c.delimiter > "u" ? s.delimiter : c.delimiter,
                encode: typeof c.encode == "boolean" ? c.encode : s.encode,
                encodeDotInKeys: typeof c.encodeDotInKeys == "boolean" ? c.encodeDotInKeys : s.encodeDotInKeys,
                encoder: typeof c.encoder == "function" ? c.encoder : s.encoder,
                encodeValuesOnly: typeof c.encodeValuesOnly == "boolean" ? c.encodeValuesOnly : s.encodeValuesOnly,
                filter: p,
                format: h,
                formatter: b,
                serializeDate: typeof c.serializeDate == "function" ? c.serializeDate : s.serializeDate,
                skipNulls: typeof c.skipNulls == "boolean" ? c.skipNulls : s.skipNulls,
                sort: typeof c.sort == "function" ? c.sort : null,
                strictNullHandling: typeof c.strictNullHandling == "boolean" ? c.strictNullHandling : s.strictNullHandling
            }
        };
        return Pn = function (g, c) {
            var u = g, h = v(c), b, p;
            typeof h.filter == "function" ? (p = h.filter, u = p("", u)) : i(h.filter) && (p = h.filter, b = p);
            var E = [];
            if (typeof u != "object" || u === null) return "";
            var O = a[h.arrayFormat], S = O === "comma" && h.commaRoundTrip;
            b || (b = Object.keys(u)), h.sort && b.sort(h.sort);
            for (var R = e(), k = 0; k < b.length; ++k) {
                var A = b[k], T = u[A];
                h.skipNulls && T === null || l(E, d(T, A, O, S, h.allowEmptyArrays, h.strictNullHandling, h.skipNulls, h.encodeDotInKeys, h.encode ? h.encoder : null, h.filter, h.sort, h.allowDots, h.serializeDate, h.format, h.formatter, h.encodeValuesOnly, h.charset, R))
            }
            var I = E.join(h.delimiter), j = h.addQueryPrefix === !0 ? "?" : "";
            return h.charsetSentinel && (h.charset === "iso-8859-1" ? j += "utf8=%26%2310003%3B&" : j += "utf8=%E2%9C%93&"), I.length > 0 ? j + I : ""
        }, Pn
    }

    var Dn, oo;

    function wu() {
        if (oo) return Dn;
        oo = 1;
        var e = ao(), r = Object.prototype.hasOwnProperty, t = Array.isArray, n = {
            allowDots: !1,
            allowEmptyArrays: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decodeDotInKeys: !1,
            decoder: e.decode,
            delimiter: "&",
            depth: 5,
            duplicates: "combine",
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictDepth: !1,
            strictNullHandling: !1,
            throwOnLimitExceeded: !1
        }, a = function (y) {
            return y.replace(/&#(\d+);/g, function (d, v) {
                return String.fromCharCode(parseInt(v, 10))
            })
        }, i = function (y, d, v) {
            if (y && typeof y == "string" && d.comma && y.indexOf(",") > -1) return y.split(",");
            if (d.throwOnLimitExceeded && v >= d.arrayLimit) throw new RangeError("Array limit exceeded. Only " + d.arrayLimit + " element" + (d.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            return y
        }, f = "utf8=%26%2310003%3B", l = "utf8=%E2%9C%93", _ = function (d, v) {
            var g = {__proto__: null}, c = v.ignoreQueryPrefix ? d.replace(/^\?/, "") : d;
            c = c.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
            var u = v.parameterLimit === 1 / 0 ? void 0 : v.parameterLimit,
                h = c.split(v.delimiter, v.throwOnLimitExceeded ? u + 1 : u);
            if (v.throwOnLimitExceeded && h.length > u) throw new RangeError("Parameter limit exceeded. Only " + u + " parameter" + (u === 1 ? "" : "s") + " allowed.");
            var b = -1, p, E = v.charset;
            if (v.charsetSentinel) for (p = 0; p < h.length; ++p) h[p].indexOf("utf8=") === 0 && (h[p] === l ? E = "utf-8" : h[p] === f && (E = "iso-8859-1"), b = p, p = h.length);
            for (p = 0; p < h.length; ++p) if (p !== b) {
                var O = h[p], S = O.indexOf("]="), R = S === -1 ? O.indexOf("=") : S + 1, k, A;
                R === -1 ? (k = v.decoder(O, n.decoder, E, "key"), A = v.strictNullHandling ? null : "") : (k = v.decoder(O.slice(0, R), n.decoder, E, "key"), A = e.maybeMap(i(O.slice(R + 1), v, t(g[k]) ? g[k].length : 0), function (I) {
                    return v.decoder(I, n.decoder, E, "value")
                })), A && v.interpretNumericEntities && E === "iso-8859-1" && (A = a(String(A))), O.indexOf("[]=") > -1 && (A = t(A) ? [A] : A);
                var T = r.call(g, k);
                T && v.duplicates === "combine" ? g[k] = e.combine(g[k], A) : (!T || v.duplicates === "last") && (g[k] = A)
            }
            return g
        }, o = function (y, d, v, g) {
            var c = 0;
            if (y.length > 0 && y[y.length - 1] === "[]") {
                var u = y.slice(0, -1).join("");
                c = Array.isArray(d) && d[u] ? d[u].length : 0
            }
            for (var h = g ? d : i(d, v, c), b = y.length - 1; b >= 0; --b) {
                var p, E = y[b];
                if (E === "[]" && v.parseArrays) p = v.allowEmptyArrays && (h === "" || v.strictNullHandling && h === null) ? [] : e.combine([], h); else {
                    p = v.plainObjects ? {__proto__: null} : {};
                    var O = E.charAt(0) === "[" && E.charAt(E.length - 1) === "]" ? E.slice(1, -1) : E,
                        S = v.decodeDotInKeys ? O.replace(/%2E/g, ".") : O, R = parseInt(S, 10);
                    !v.parseArrays && S === "" ? p = {0: h} : !isNaN(R) && E !== S && String(R) === S && R >= 0 && v.parseArrays && R <= v.arrayLimit ? (p = [], p[R] = h) : S !== "__proto__" && (p[S] = h)
                }
                h = p
            }
            return h
        }, s = function (d, v, g, c) {
            if (d) {
                var u = g.allowDots ? d.replace(/\.([^.[]+)/g, "[$1]") : d, h = /(\[[^[\]]*])/, b = /(\[[^[\]]*])/g,
                    p = g.depth > 0 && h.exec(u), E = p ? u.slice(0, p.index) : u, O = [];
                if (E) {
                    if (!g.plainObjects && r.call(Object.prototype, E) && !g.allowPrototypes) return;
                    O.push(E)
                }
                for (var S = 0; g.depth > 0 && (p = b.exec(u)) !== null && S < g.depth;) {
                    if (S += 1, !g.plainObjects && r.call(Object.prototype, p[1].slice(1, -1)) && !g.allowPrototypes) return;
                    O.push(p[1])
                }
                if (p) {
                    if (g.strictDepth === !0) throw new RangeError("Input depth exceeded depth option of " + g.depth + " and strictDepth is true");
                    O.push("[" + u.slice(p.index) + "]")
                }
                return o(O, v, g, c)
            }
        }, x = function (d) {
            if (!d) return n;
            if (typeof d.allowEmptyArrays < "u" && typeof d.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
            if (typeof d.decodeDotInKeys < "u" && typeof d.decodeDotInKeys != "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
            if (d.decoder !== null && typeof d.decoder < "u" && typeof d.decoder != "function") throw new TypeError("Decoder has to be a function.");
            if (typeof d.charset < "u" && d.charset !== "utf-8" && d.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            if (typeof d.throwOnLimitExceeded < "u" && typeof d.throwOnLimitExceeded != "boolean") throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
            var v = typeof d.charset > "u" ? n.charset : d.charset,
                g = typeof d.duplicates > "u" ? n.duplicates : d.duplicates;
            if (g !== "combine" && g !== "first" && g !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
            var c = typeof d.allowDots > "u" ? d.decodeDotInKeys === !0 ? !0 : n.allowDots : !!d.allowDots;
            return {
                allowDots: c,
                allowEmptyArrays: typeof d.allowEmptyArrays == "boolean" ? !!d.allowEmptyArrays : n.allowEmptyArrays,
                allowPrototypes: typeof d.allowPrototypes == "boolean" ? d.allowPrototypes : n.allowPrototypes,
                allowSparse: typeof d.allowSparse == "boolean" ? d.allowSparse : n.allowSparse,
                arrayLimit: typeof d.arrayLimit == "number" ? d.arrayLimit : n.arrayLimit,
                charset: v,
                charsetSentinel: typeof d.charsetSentinel == "boolean" ? d.charsetSentinel : n.charsetSentinel,
                comma: typeof d.comma == "boolean" ? d.comma : n.comma,
                decodeDotInKeys: typeof d.decodeDotInKeys == "boolean" ? d.decodeDotInKeys : n.decodeDotInKeys,
                decoder: typeof d.decoder == "function" ? d.decoder : n.decoder,
                delimiter: typeof d.delimiter == "string" || e.isRegExp(d.delimiter) ? d.delimiter : n.delimiter,
                depth: typeof d.depth == "number" || d.depth === !1 ? +d.depth : n.depth,
                duplicates: g,
                ignoreQueryPrefix: d.ignoreQueryPrefix === !0,
                interpretNumericEntities: typeof d.interpretNumericEntities == "boolean" ? d.interpretNumericEntities : n.interpretNumericEntities,
                parameterLimit: typeof d.parameterLimit == "number" ? d.parameterLimit : n.parameterLimit,
                parseArrays: d.parseArrays !== !1,
                plainObjects: typeof d.plainObjects == "boolean" ? d.plainObjects : n.plainObjects,
                strictDepth: typeof d.strictDepth == "boolean" ? !!d.strictDepth : n.strictDepth,
                strictNullHandling: typeof d.strictNullHandling == "boolean" ? d.strictNullHandling : n.strictNullHandling,
                throwOnLimitExceeded: typeof d.throwOnLimitExceeded == "boolean" ? d.throwOnLimitExceeded : !1
            }
        };
        return Dn = function (y, d) {
            var v = x(d);
            if (y === "" || y === null || typeof y > "u") return v.plainObjects ? {__proto__: null} : {};
            for (var g = typeof y == "string" ? _(y, v) : y, c = v.plainObjects ? {__proto__: null} : {}, u = Object.keys(g), h = 0; h < u.length; ++h) {
                var b = u[h], p = s(b, g[b], v, typeof y == "string");
                c = e.merge(c, p, v)
            }
            return v.allowSparse === !0 ? c : e.compact(c)
        }, Dn
    }

    var $n, lo;

    function bu() {
        if (lo) return $n;
        lo = 1;
        var e = vu(), r = wu(), t = Tn();
        return $n = {formats: t, parse: r, stringify: e}, $n
    }

    var mu = bu();
    const Mn = Uc(mu);
    var fo = Object.prototype.hasOwnProperty;

    function Cn(e, r) {
        var t, n;
        if (e === r) return !0;
        if (e && r && (t = e.constructor) === r.constructor) {
            if (t === Date) return e.getTime() === r.getTime();
            if (t === RegExp) return e.toString() === r.toString();
            if (t === Array) {
                if ((n = e.length) === r.length) for (; n-- && Cn(e[n], r[n]);) ;
                return n === -1
            }
            if (!t || typeof e == "object") {
                n = 0;
                for (t in e) if (fo.call(e, t) && ++n && !fo.call(r, t) || !(t in r) || !Cn(e[t], r[t])) return !1;
                return Object.keys(r).length === n
            }
        }
        return e !== e && r !== r
    }

    const xu = new Error("request for lock canceled");
    var Su = function (e, r, t, n) {
        function a(i) {
            return i instanceof t ? i : new t(function (f) {
                f(i)
            })
        }

        return new (t || (t = Promise))(function (i, f) {
            function l(s) {
                try {
                    o(n.next(s))
                } catch (x) {
                    f(x)
                }
            }

            function _(s) {
                try {
                    o(n.throw(s))
                } catch (x) {
                    f(x)
                }
            }

            function o(s) {
                s.done ? i(s.value) : a(s.value).then(l, _)
            }

            o((n = n.apply(e, r || [])).next())
        })
    };

    class Eu {
        constructor(r, t = xu) {
            this._value = r, this._cancelError = t, this._queue = [], this._weightedWaiters = []
        }

        acquire(r = 1, t = 0) {
            if (r <= 0) throw new Error(`invalid weight ${r}: must be positive`);
            return new Promise((n, a) => {
                const i = {resolve: n, reject: a, weight: r, priority: t}, f = so(this._queue, l => t <= l.priority);
                f === -1 && r <= this._value ? this._dispatchItem(i) : this._queue.splice(f + 1, 0, i)
            })
        }

        runExclusive(r) {
            return Su(this, arguments, void 0, function* (t, n = 1, a = 0) {
                const [i, f] = yield this.acquire(n, a);
                try {
                    return yield t(i)
                } finally {
                    f()
                }
            })
        }

        waitForUnlock(r = 1, t = 0) {
            if (r <= 0) throw new Error(`invalid weight ${r}: must be positive`);
            return this._couldLockImmediately(r, t) ? Promise.resolve() : new Promise(n => {
                this._weightedWaiters[r - 1] || (this._weightedWaiters[r - 1] = []), Au(this._weightedWaiters[r - 1], {
                    resolve: n,
                    priority: t
                })
            })
        }

        isLocked() {
            return this._value <= 0
        }

        getValue() {
            return this._value
        }

        setValue(r) {
            this._value = r, this._dispatchQueue()
        }

        release(r = 1) {
            if (r <= 0) throw new Error(`invalid weight ${r}: must be positive`);
            this._value += r, this._dispatchQueue()
        }

        cancel() {
            this._queue.forEach(r => r.reject(this._cancelError)), this._queue = []
        }

        _dispatchQueue() {
            for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value;) this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters()
        }

        _dispatchItem(r) {
            const t = this._value;
            this._value -= r.weight, r.resolve([t, this._newReleaser(r.weight)])
        }

        _newReleaser(r) {
            let t = !1;
            return () => {
                t || (t = !0, this.release(r))
            }
        }

        _drainUnlockWaiters() {
            if (this._queue.length === 0) for (let r = this._value; r > 0; r--) {
                const t = this._weightedWaiters[r - 1];
                t && (t.forEach(n => n.resolve()), this._weightedWaiters[r - 1] = [])
            } else {
                const r = this._queue[0].priority;
                for (let t = this._value; t > 0; t--) {
                    const n = this._weightedWaiters[t - 1];
                    if (!n) continue;
                    const a = n.findIndex(i => i.priority <= r);
                    (a === -1 ? n : n.splice(0, a)).forEach((i => i.resolve()))
                }
            }
        }

        _couldLockImmediately(r, t) {
            return (this._queue.length === 0 || this._queue[0].priority < t) && r <= this._value
        }
    }

    function Au(e, r) {
        const t = so(e, n => r.priority <= n.priority);
        e.splice(t + 1, 0, r)
    }

    function so(e, r) {
        for (let t = e.length - 1; t >= 0; t--) if (r(e[t])) return t;
        return -1
    }

    var Ou = function (e, r, t, n) {
        function a(i) {
            return i instanceof t ? i : new t(function (f) {
                f(i)
            })
        }

        return new (t || (t = Promise))(function (i, f) {
            function l(s) {
                try {
                    o(n.next(s))
                } catch (x) {
                    f(x)
                }
            }

            function _(s) {
                try {
                    o(n.throw(s))
                } catch (x) {
                    f(x)
                }
            }

            function o(s) {
                s.done ? i(s.value) : a(s.value).then(l, _)
            }

            o((n = n.apply(e, r || [])).next())
        })
    };

    class Ru {
        constructor(r) {
            this._semaphore = new Eu(1, r)
        }

        acquire() {
            return Ou(this, arguments, void 0, function* (r = 0) {
                const [, t] = yield this._semaphore.acquire(1, r);
                return t
            })
        }

        runExclusive(r, t = 0) {
            return this._semaphore.runExclusive(() => r(), 1, t)
        }

        isLocked() {
            return this._semaphore.isLocked()
        }

        waitForUnlock(r = 0) {
            return this._semaphore.waitForUnlock(1, r)
        }

        release() {
            this._semaphore.isLocked() && this._semaphore.release()
        }

        cancel() {
            return this._semaphore.cancel()
        }
    }

    const nr = ((ql = (Ul = globalThis.browser) == null ? void 0 : Ul.runtime) == null ? void 0 : ql.id) == null ? globalThis.chrome : globalThis.browser,
        co = ku();

    function ku() {
        const e = {local: ar("local"), session: ar("session"), sync: ar("sync"), managed: ar("managed")}, r = g => {
                const c = e[g];
                if (c == null) {
                    const u = Object.keys(e).join(", ");
                    throw Error(`Invalid area "${g}". Options: ${u}`)
                }
                return c
            }, t = g => {
                const c = g.indexOf(":"), u = g.substring(0, c), h = g.substring(c + 1);
                if (h == null) throw Error(`Storage key should be in the form of "area:key", but received "${g}"`);
                return {driverArea: u, driverKey: h, driver: r(u)}
            }, n = g => g + "$", a = (g, c) => {
                const u = {...g};
                return Object.entries(c).forEach(([h, b]) => {
                    b == null ? delete u[h] : u[h] = b
                }), u
            }, i = (g, c) => g ?? c ?? null, f = g => typeof g == "object" && !Array.isArray(g) ? g : {},
            l = async (g, c, u) => {
                const h = await g.getItem(c);
                return i(h, (u == null ? void 0 : u.fallback) ?? (u == null ? void 0 : u.defaultValue))
            }, _ = async (g, c) => {
                const u = n(c), h = await g.getItem(u);
                return f(h)
            }, o = async (g, c, u) => {
                await g.setItem(c, u ?? null)
            }, s = async (g, c, u) => {
                const h = n(c), b = f(await g.getItem(h));
                await g.setItem(h, a(b, u))
            }, x = async (g, c, u) => {
                if (await g.removeItem(c), u != null && u.removeMeta) {
                    const h = n(c);
                    await g.removeItem(h)
                }
            }, y = async (g, c, u) => {
                const h = n(c);
                if (u == null) await g.removeItem(h); else {
                    const b = f(await g.getItem(h));
                    [u].flat().forEach(p => delete b[p]), await g.setItem(h, b)
                }
            }, d = (g, c, u) => g.watch(c, u);
        return {
            getItem: async (g, c) => {
                const {driver: u, driverKey: h} = t(g);
                return await l(u, h, c)
            }, getItems: async g => {
                const c = new Map, u = new Map, h = [];
                g.forEach(p => {
                    let E, O;
                    typeof p == "string" ? E = p : "getValue" in p ? (E = p.key, O = {fallback: p.fallback}) : (E = p.key, O = p.options), h.push(E);
                    const {driverArea: S, driverKey: R} = t(E), k = c.get(S) ?? [];
                    c.set(S, k.concat(R)), u.set(E, O)
                });
                const b = new Map;
                return await Promise.all(Array.from(c.entries()).map(async ([p, E]) => {
                    (await e[p].getItems(E)).forEach(S => {
                        const R = `${p}:${S.key}`, k = u.get(R),
                            A = i(S.value, (k == null ? void 0 : k.fallback) ?? (k == null ? void 0 : k.defaultValue));
                        b.set(R, A)
                    })
                })), h.map(p => ({key: p, value: b.get(p)}))
            }, getMeta: async g => {
                const {driver: c, driverKey: u} = t(g);
                return await _(c, u)
            }, getMetas: async g => {
                const c = g.map(b => {
                    const p = typeof b == "string" ? b : b.key, {driverArea: E, driverKey: O} = t(p);
                    return {key: p, driverArea: E, driverKey: O, driverMetaKey: n(O)}
                }), u = c.reduce((b, p) => {
                    var E;
                    return b[E = p.driverArea] ?? (b[E] = []), b[p.driverArea].push(p), b
                }, {}), h = {};
                return await Promise.all(Object.entries(u).map(async ([b, p]) => {
                    const E = await nr.storage[b].get(p.map(O => O.driverMetaKey));
                    p.forEach(O => {
                        h[O.key] = E[O.driverMetaKey] ?? {}
                    })
                })), c.map(b => ({key: b.key, meta: h[b.key]}))
            }, setItem: async (g, c) => {
                const {driver: u, driverKey: h} = t(g);
                await o(u, h, c)
            }, setItems: async g => {
                const c = {};
                g.forEach(u => {
                    const {driverArea: h, driverKey: b} = t("key" in u ? u.key : u.item.key);
                    c[h] ?? (c[h] = []), c[h].push({key: b, value: u.value})
                }), await Promise.all(Object.entries(c).map(async ([u, h]) => {
                    await r(u).setItems(h)
                }))
            }, setMeta: async (g, c) => {
                const {driver: u, driverKey: h} = t(g);
                await s(u, h, c)
            }, setMetas: async g => {
                const c = {};
                g.forEach(u => {
                    const {driverArea: h, driverKey: b} = t("key" in u ? u.key : u.item.key);
                    c[h] ?? (c[h] = []), c[h].push({key: b, properties: u.meta})
                }), await Promise.all(Object.entries(c).map(async ([u, h]) => {
                    const b = r(u), p = h.map(({key: R}) => n(R));
                    console.log(u, p);
                    const E = await b.getItems(p), O = Object.fromEntries(E.map(({key: R, value: k}) => [R, f(k)])),
                        S = h.map(({key: R, properties: k}) => {
                            const A = n(R);
                            return {key: A, value: a(O[A] ?? {}, k)}
                        });
                    await b.setItems(S)
                }))
            }, removeItem: async (g, c) => {
                const {driver: u, driverKey: h} = t(g);
                await x(u, h, c)
            }, removeItems: async g => {
                const c = {};
                g.forEach(u => {
                    let h, b;
                    typeof u == "string" ? h = u : "getValue" in u ? h = u.key : "item" in u ? (h = u.item.key, b = u.options) : (h = u.key, b = u.options);
                    const {driverArea: p, driverKey: E} = t(h);
                    c[p] ?? (c[p] = []), c[p].push(E), b != null && b.removeMeta && c[p].push(n(E))
                }), await Promise.all(Object.entries(c).map(async ([u, h]) => {
                    await r(u).removeItems(h)
                }))
            }, removeMeta: async (g, c) => {
                const {driver: u, driverKey: h} = t(g);
                await y(u, h, c)
            }, snapshot: async (g, c) => {
                var b;
                const h = await r(g).snapshot();
                return (b = c == null ? void 0 : c.excludeKeys) == null || b.forEach(p => {
                    delete h[p], delete h[n(p)]
                }), h
            }, restoreSnapshot: async (g, c) => {
                await r(g).restoreSnapshot(c)
            }, watch: (g, c) => {
                const {driver: u, driverKey: h} = t(g);
                return d(u, h, c)
            }, unwatch() {
                Object.values(e).forEach(g => {
                    g.unwatch()
                })
            }, defineItem: (g, c) => {
                const {driver: u, driverKey: h} = t(g), {version: b = 1, migrations: p = {}} = c ?? {};
                if (b < 1) throw Error("Storage item version cannot be less than 1. Initial versions should be set to 1, not 0.");
                const E = async () => {
                        var ce;
                        const A = n(h), [{value: T}, {value: I}] = await u.getItems([h, A]);
                        if (T == null) return;
                        const j = (I == null ? void 0 : I.v) ?? 1;
                        if (j > b) throw Error(`Version downgrade detected (v${j} -> v${b}) for "${g}"`);
                        console.debug(`[@wxt-dev/storage] Running storage migration for ${g}: v${j} -> v${b}`);
                        const L = Array.from({length: b - j}, (ae, P) => j + P + 1);
                        let M = T;
                        for (const ae of L) try {
                            M = await ((ce = p == null ? void 0 : p[ae]) == null ? void 0 : ce.call(p, M)) ?? M
                        } catch (P) {
                            throw Error(`v${ae} migration failed for "${g}"`, {cause: P})
                        }
                        await u.setItems([{key: h, value: M}, {
                            key: A,
                            value: {...I, v: b}
                        }]), console.debug(`[@wxt-dev/storage] Storage migration completed for ${g} v${b}`, {migratedValue: M})
                    }, O = (c == null ? void 0 : c.migrations) == null ? Promise.resolve() : E().catch(A => {
                        console.error(`[@wxt-dev/storage] Migration failed for ${g}`, A)
                    }), S = new Ru,
                    R = () => (c == null ? void 0 : c.fallback) ?? (c == null ? void 0 : c.defaultValue) ?? null,
                    k = () => S.runExclusive(async () => {
                        const A = await u.getItem(h);
                        if (A != null || (c == null ? void 0 : c.init) == null) return A;
                        const T = await c.init();
                        return await u.setItem(h, T), T
                    });
                return O.then(k), {
                    key: g,
                    get defaultValue() {
                        return R()
                    },
                    get fallback() {
                        return R()
                    },
                    getValue: async () => (await O, c != null && c.init ? await k() : await l(u, h, c)),
                    getMeta: async () => (await O, await _(u, h)),
                    setValue: async A => (await O, await o(u, h, A)),
                    setMeta: async A => (await O, await s(u, h, A)),
                    removeValue: async A => (await O, await x(u, h, A)),
                    removeMeta: async A => (await O, await y(u, h, A)),
                    watch: A => d(u, h, (T, I) => A(T ?? R(), I ?? R())),
                    migrate: E
                }
            }
        }
    }

    function ar(e) {
        const r = () => {
            if (nr.runtime == null) throw Error(["'wxt/storage' must be loaded in a web extension environment", `
 - If thrown during a build, see https://github.com/wxt-dev/wxt/issues/371`, ` - If thrown during tests, mock 'wxt/browser' correctly. See https://wxt.dev/guide/go-further/testing.html
`].join(`
`));
            if (nr.storage == null) throw Error("You must add the 'storage' permission to your manifest to use 'wxt/storage'");
            const n = nr.storage[e];
            if (n == null) throw Error(`"browser.storage.${e}" is undefined`);
            return n
        }, t = new Set;
        return {
            getItem: async n => (await r().get(n))[n], getItems: async n => {
                const a = await r().get(n);
                return n.map(i => ({key: i, value: a[i] ?? null}))
            }, setItem: async (n, a) => {
                a == null ? await r().remove(n) : await r().set({[n]: a})
            }, setItems: async n => {
                const a = n.reduce((i, {key: f, value: l}) => (i[f] = l, i), {});
                await r().set(a)
            }, removeItem: async n => {
                await r().remove(n)
            }, removeItems: async n => {
                await r().remove(n)
            }, snapshot: async () => await r().get(), restoreSnapshot: async n => {
                await r().set(n)
            }, watch(n, a) {
                const i = f => {
                    const l = f[n];
                    l != null && (Cn(l.newValue, l.oldValue) || a(l.newValue ?? null, l.oldValue ?? null))
                };
                return r().onChanged.addListener(i), t.add(i), () => {
                    r().onChanged.removeListener(i), t.delete(i)
                }
            }, unwatch() {
                t.forEach(n => {
                    r().onChanged.removeListener(n)
                }), t.clear()
            }
        }
    }

    function Tu(e) {
        try {
            return new URL(e), !0
        } catch {
            return !1
        }
    }/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    const Iu = 4, uo = 0, ho = 1, Pu = 2;

    function ot(e) {
        let r = e.length;
        for (; --r >= 0;) e[r] = 0
    }

    const Du = 0, po = 1, $u = 2, Mu = 3, Cu = 258, zn = 29, Rt = 256, kt = Rt + 1 + zn, lt = 30, Nn = 19,
        yo = 2 * kt + 1, He = 15, Fn = 16, zu = 7, Ln = 256, _o = 16, go = 17, vo = 18,
        Un = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
        ir = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
        Nu = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
        wo = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Fu = 512,
        we = new Array((kt + 2) * 2);
    ot(we);
    const Tt = new Array(lt * 2);
    ot(Tt);
    const It = new Array(Fu);
    ot(It);
    const Pt = new Array(Cu - Mu + 1);
    ot(Pt);
    const qn = new Array(zn);
    ot(qn);
    const or = new Array(lt);
    ot(or);

    function Bn(e, r, t, n, a) {
        this.static_tree = e, this.extra_bits = r, this.extra_base = t, this.elems = n, this.max_length = a, this.has_stree = e && e.length
    }

    let bo, mo, xo;

    function jn(e, r) {
        this.dyn_tree = e, this.max_code = 0, this.stat_desc = r
    }

    const So = e => e < 256 ? It[e] : It[256 + (e >>> 7)], Dt = (e, r) => {
        e.pending_buf[e.pending++] = r & 255, e.pending_buf[e.pending++] = r >>> 8 & 255
    }, te = (e, r, t) => {
        e.bi_valid > Fn - t ? (e.bi_buf |= r << e.bi_valid & 65535, Dt(e, e.bi_buf), e.bi_buf = r >> Fn - e.bi_valid, e.bi_valid += t - Fn) : (e.bi_buf |= r << e.bi_valid & 65535, e.bi_valid += t)
    }, ye = (e, r, t) => {
        te(e, t[r * 2], t[r * 2 + 1])
    }, Eo = (e, r) => {
        let t = 0;
        do t |= e & 1, e >>>= 1, t <<= 1; while (--r > 0);
        return t >>> 1
    }, Lu = e => {
        e.bi_valid === 16 ? (Dt(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8)
    }, Uu = (e, r) => {
        const t = r.dyn_tree, n = r.max_code, a = r.stat_desc.static_tree, i = r.stat_desc.has_stree,
            f = r.stat_desc.extra_bits, l = r.stat_desc.extra_base, _ = r.stat_desc.max_length;
        let o, s, x, y, d, v, g = 0;
        for (y = 0; y <= He; y++) e.bl_count[y] = 0;
        for (t[e.heap[e.heap_max] * 2 + 1] = 0, o = e.heap_max + 1; o < yo; o++) s = e.heap[o], y = t[t[s * 2 + 1] * 2 + 1] + 1, y > _ && (y = _, g++), t[s * 2 + 1] = y, !(s > n) && (e.bl_count[y]++, d = 0, s >= l && (d = f[s - l]), v = t[s * 2], e.opt_len += v * (y + d), i && (e.static_len += v * (a[s * 2 + 1] + d)));
        if (g !== 0) {
            do {
                for (y = _ - 1; e.bl_count[y] === 0;) y--;
                e.bl_count[y]--, e.bl_count[y + 1] += 2, e.bl_count[_]--, g -= 2
            } while (g > 0);
            for (y = _; y !== 0; y--) for (s = e.bl_count[y]; s !== 0;) x = e.heap[--o], !(x > n) && (t[x * 2 + 1] !== y && (e.opt_len += (y - t[x * 2 + 1]) * t[x * 2], t[x * 2 + 1] = y), s--)
        }
    }, Ao = (e, r, t) => {
        const n = new Array(He + 1);
        let a = 0, i, f;
        for (i = 1; i <= He; i++) a = a + t[i - 1] << 1, n[i] = a;
        for (f = 0; f <= r; f++) {
            let l = e[f * 2 + 1];
            l !== 0 && (e[f * 2] = Eo(n[l]++, l))
        }
    }, qu = () => {
        let e, r, t, n, a;
        const i = new Array(He + 1);
        for (t = 0, n = 0; n < zn - 1; n++) for (qn[n] = t, e = 0; e < 1 << Un[n]; e++) Pt[t++] = n;
        for (Pt[t - 1] = n, a = 0, n = 0; n < 16; n++) for (or[n] = a, e = 0; e < 1 << ir[n]; e++) It[a++] = n;
        for (a >>= 7; n < lt; n++) for (or[n] = a << 7, e = 0; e < 1 << ir[n] - 7; e++) It[256 + a++] = n;
        for (r = 0; r <= He; r++) i[r] = 0;
        for (e = 0; e <= 143;) we[e * 2 + 1] = 8, e++, i[8]++;
        for (; e <= 255;) we[e * 2 + 1] = 9, e++, i[9]++;
        for (; e <= 279;) we[e * 2 + 1] = 7, e++, i[7]++;
        for (; e <= 287;) we[e * 2 + 1] = 8, e++, i[8]++;
        for (Ao(we, kt + 1, i), e = 0; e < lt; e++) Tt[e * 2 + 1] = 5, Tt[e * 2] = Eo(e, 5);
        bo = new Bn(we, Un, Rt + 1, kt, He), mo = new Bn(Tt, ir, 0, lt, He), xo = new Bn(new Array(0), Nu, 0, Nn, zu)
    }, Oo = e => {
        let r;
        for (r = 0; r < kt; r++) e.dyn_ltree[r * 2] = 0;
        for (r = 0; r < lt; r++) e.dyn_dtree[r * 2] = 0;
        for (r = 0; r < Nn; r++) e.bl_tree[r * 2] = 0;
        e.dyn_ltree[Ln * 2] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0
    }, Ro = e => {
        e.bi_valid > 8 ? Dt(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
    }, ko = (e, r, t, n) => {
        const a = r * 2, i = t * 2;
        return e[a] < e[i] || e[a] === e[i] && n[r] <= n[t]
    }, Zn = (e, r, t) => {
        const n = e.heap[t];
        let a = t << 1;
        for (; a <= e.heap_len && (a < e.heap_len && ko(r, e.heap[a + 1], e.heap[a], e.depth) && a++, !ko(r, n, e.heap[a], e.depth));) e.heap[t] = e.heap[a], t = a, a <<= 1;
        e.heap[t] = n
    }, To = (e, r, t) => {
        let n, a, i = 0, f, l;
        if (e.sym_next !== 0) do n = e.pending_buf[e.sym_buf + i++] & 255, n += (e.pending_buf[e.sym_buf + i++] & 255) << 8, a = e.pending_buf[e.sym_buf + i++], n === 0 ? ye(e, a, r) : (f = Pt[a], ye(e, f + Rt + 1, r), l = Un[f], l !== 0 && (a -= qn[f], te(e, a, l)), n--, f = So(n), ye(e, f, t), l = ir[f], l !== 0 && (n -= or[f], te(e, n, l))); while (i < e.sym_next);
        ye(e, Ln, r)
    }, Hn = (e, r) => {
        const t = r.dyn_tree, n = r.stat_desc.static_tree, a = r.stat_desc.has_stree, i = r.stat_desc.elems;
        let f, l, _ = -1, o;
        for (e.heap_len = 0, e.heap_max = yo, f = 0; f < i; f++) t[f * 2] !== 0 ? (e.heap[++e.heap_len] = _ = f, e.depth[f] = 0) : t[f * 2 + 1] = 0;
        for (; e.heap_len < 2;) o = e.heap[++e.heap_len] = _ < 2 ? ++_ : 0, t[o * 2] = 1, e.depth[o] = 0, e.opt_len--, a && (e.static_len -= n[o * 2 + 1]);
        for (r.max_code = _, f = e.heap_len >> 1; f >= 1; f--) Zn(e, t, f);
        o = i;
        do f = e.heap[1], e.heap[1] = e.heap[e.heap_len--], Zn(e, t, 1), l = e.heap[1], e.heap[--e.heap_max] = f, e.heap[--e.heap_max] = l, t[o * 2] = t[f * 2] + t[l * 2], e.depth[o] = (e.depth[f] >= e.depth[l] ? e.depth[f] : e.depth[l]) + 1, t[f * 2 + 1] = t[l * 2 + 1] = o, e.heap[1] = o++, Zn(e, t, 1); while (e.heap_len >= 2);
        e.heap[--e.heap_max] = e.heap[1], Uu(e, r), Ao(t, _, e.bl_count)
    }, Io = (e, r, t) => {
        let n, a = -1, i, f = r[1], l = 0, _ = 7, o = 4;
        for (f === 0 && (_ = 138, o = 3), r[(t + 1) * 2 + 1] = 65535, n = 0; n <= t; n++) i = f, f = r[(n + 1) * 2 + 1], !(++l < _ && i === f) && (l < o ? e.bl_tree[i * 2] += l : i !== 0 ? (i !== a && e.bl_tree[i * 2]++, e.bl_tree[_o * 2]++) : l <= 10 ? e.bl_tree[go * 2]++ : e.bl_tree[vo * 2]++, l = 0, a = i, f === 0 ? (_ = 138, o = 3) : i === f ? (_ = 6, o = 3) : (_ = 7, o = 4))
    }, Po = (e, r, t) => {
        let n, a = -1, i, f = r[1], l = 0, _ = 7, o = 4;
        for (f === 0 && (_ = 138, o = 3), n = 0; n <= t; n++) if (i = f, f = r[(n + 1) * 2 + 1], !(++l < _ && i === f)) {
            if (l < o) do ye(e, i, e.bl_tree); while (--l !== 0); else i !== 0 ? (i !== a && (ye(e, i, e.bl_tree), l--), ye(e, _o, e.bl_tree), te(e, l - 3, 2)) : l <= 10 ? (ye(e, go, e.bl_tree), te(e, l - 3, 3)) : (ye(e, vo, e.bl_tree), te(e, l - 11, 7));
            l = 0, a = i, f === 0 ? (_ = 138, o = 3) : i === f ? (_ = 6, o = 3) : (_ = 7, o = 4)
        }
    }, Bu = e => {
        let r;
        for (Io(e, e.dyn_ltree, e.l_desc.max_code), Io(e, e.dyn_dtree, e.d_desc.max_code), Hn(e, e.bl_desc), r = Nn - 1; r >= 3 && e.bl_tree[wo[r] * 2 + 1] === 0; r--) ;
        return e.opt_len += 3 * (r + 1) + 5 + 5 + 4, r
    }, ju = (e, r, t, n) => {
        let a;
        for (te(e, r - 257, 5), te(e, t - 1, 5), te(e, n - 4, 4), a = 0; a < n; a++) te(e, e.bl_tree[wo[a] * 2 + 1], 3);
        Po(e, e.dyn_ltree, r - 1), Po(e, e.dyn_dtree, t - 1)
    }, Zu = e => {
        let r = 4093624447, t;
        for (t = 0; t <= 31; t++, r >>>= 1) if (r & 1 && e.dyn_ltree[t * 2] !== 0) return uo;
        if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) return ho;
        for (t = 32; t < Rt; t++) if (e.dyn_ltree[t * 2] !== 0) return ho;
        return uo
    };
    let Do = !1;
    const Hu = e => {
            Do || (qu(), Do = !0), e.l_desc = new jn(e.dyn_ltree, bo), e.d_desc = new jn(e.dyn_dtree, mo), e.bl_desc = new jn(e.bl_tree, xo), e.bi_buf = 0, e.bi_valid = 0, Oo(e)
        }, $o = (e, r, t, n) => {
            te(e, (Du << 1) + (n ? 1 : 0), 3), Ro(e), Dt(e, t), Dt(e, ~t), t && e.pending_buf.set(e.window.subarray(r, r + t), e.pending), e.pending += t
        }, Ku = e => {
            te(e, po << 1, 3), ye(e, Ln, we), Lu(e)
        }, Gu = (e, r, t, n) => {
            let a, i, f = 0;
            e.level > 0 ? (e.strm.data_type === Pu && (e.strm.data_type = Zu(e)), Hn(e, e.l_desc), Hn(e, e.d_desc), f = Bu(e), a = e.opt_len + 3 + 7 >>> 3, i = e.static_len + 3 + 7 >>> 3, i <= a && (a = i)) : a = i = t + 5, t + 4 <= a && r !== -1 ? $o(e, r, t, n) : e.strategy === Iu || i === a ? (te(e, (po << 1) + (n ? 1 : 0), 3), To(e, we, Tt)) : (te(e, ($u << 1) + (n ? 1 : 0), 3), ju(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, f + 1), To(e, e.dyn_ltree, e.dyn_dtree)), Oo(e), n && Ro(e)
        },
        Wu = (e, r, t) => (e.pending_buf[e.sym_buf + e.sym_next++] = r, e.pending_buf[e.sym_buf + e.sym_next++] = r >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = t, r === 0 ? e.dyn_ltree[t * 2]++ : (e.matches++, r--, e.dyn_ltree[(Pt[t] + Rt + 1) * 2]++, e.dyn_dtree[So(r) * 2]++), e.sym_next === e.sym_end);
    var Vu = Hu, Xu = $o, Yu = Gu, Qu = Wu, Ju = Ku,
        ed = {_tr_init: Vu, _tr_stored_block: Xu, _tr_flush_block: Yu, _tr_tally: Qu, _tr_align: Ju},
        $t = (e, r, t, n) => {
            let a = e & 65535 | 0, i = e >>> 16 & 65535 | 0, f = 0;
            for (; t !== 0;) {
                f = t > 2e3 ? 2e3 : t, t -= f;
                do a = a + r[n++] | 0, i = i + a | 0; while (--f);
                a %= 65521, i %= 65521
            }
            return a | i << 16 | 0
        };
    const td = () => {
        let e, r = [];
        for (var t = 0; t < 256; t++) {
            e = t;
            for (var n = 0; n < 8; n++) e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
            r[t] = e
        }
        return r
    }, rd = new Uint32Array(td());
    var V = (e, r, t, n) => {
        const a = rd, i = n + t;
        e ^= -1;
        for (let f = n; f < i; f++) e = e >>> 8 ^ a[(e ^ r[f]) & 255];
        return e ^ -1
    }, Ke = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    }, Mt = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
    };
    const {_tr_init: nd, _tr_stored_block: Kn, _tr_flush_block: ad, _tr_tally: Re, _tr_align: id} = ed, {
            Z_NO_FLUSH: ke,
            Z_PARTIAL_FLUSH: od,
            Z_FULL_FLUSH: ld,
            Z_FINISH: fe,
            Z_BLOCK: Mo,
            Z_OK: X,
            Z_STREAM_END: Co,
            Z_STREAM_ERROR: _e,
            Z_DATA_ERROR: fd,
            Z_BUF_ERROR: Gn,
            Z_DEFAULT_COMPRESSION: sd,
            Z_FILTERED: cd,
            Z_HUFFMAN_ONLY: lr,
            Z_RLE: ud,
            Z_FIXED: dd,
            Z_DEFAULT_STRATEGY: hd,
            Z_UNKNOWN: pd,
            Z_DEFLATED: fr
        } = Mt, yd = 9, _d = 15, gd = 8, Wn = 256 + 1 + 29, vd = 30, wd = 19, bd = 2 * Wn + 1, md = 15, $ = 3, Te = 258,
        ge = Te + $ + 1, xd = 32, ft = 42, Vn = 57, Xn = 69, Yn = 73, Qn = 91, Jn = 103, Ge = 113, Ct = 666, J = 1,
        st = 2, We = 3, ct = 4, Sd = 3, Ve = (e, r) => (e.msg = Ke[r], r), zo = e => e * 2 - (e > 4 ? 9 : 0),
        Ie = e => {
            let r = e.length;
            for (; --r >= 0;) e[r] = 0
        }, Ed = e => {
            let r, t, n, a = e.w_size;
            r = e.hash_size, n = r;
            do t = e.head[--n], e.head[n] = t >= a ? t - a : 0; while (--r);
            r = a, n = r;
            do t = e.prev[--n], e.prev[n] = t >= a ? t - a : 0; while (--r)
        };
    let Pe = (e, r, t) => (r << e.hash_shift ^ t) & e.hash_mask;
    const re = e => {
        const r = e.state;
        let t = r.pending;
        t > e.avail_out && (t = e.avail_out), t !== 0 && (e.output.set(r.pending_buf.subarray(r.pending_out, r.pending_out + t), e.next_out), e.next_out += t, r.pending_out += t, e.total_out += t, e.avail_out -= t, r.pending -= t, r.pending === 0 && (r.pending_out = 0))
    }, ne = (e, r) => {
        ad(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, r), e.block_start = e.strstart, re(e.strm)
    }, N = (e, r) => {
        e.pending_buf[e.pending++] = r
    }, zt = (e, r) => {
        e.pending_buf[e.pending++] = r >>> 8 & 255, e.pending_buf[e.pending++] = r & 255
    }, ea = (e, r, t, n) => {
        let a = e.avail_in;
        return a > n && (a = n), a === 0 ? 0 : (e.avail_in -= a, r.set(e.input.subarray(e.next_in, e.next_in + a), t), e.state.wrap === 1 ? e.adler = $t(e.adler, r, a, t) : e.state.wrap === 2 && (e.adler = V(e.adler, r, a, t)), e.next_in += a, e.total_in += a, a)
    }, No = (e, r) => {
        let t = e.max_chain_length, n = e.strstart, a, i, f = e.prev_length, l = e.nice_match;
        const _ = e.strstart > e.w_size - ge ? e.strstart - (e.w_size - ge) : 0, o = e.window, s = e.w_mask, x = e.prev,
            y = e.strstart + Te;
        let d = o[n + f - 1], v = o[n + f];
        e.prev_length >= e.good_match && (t >>= 2), l > e.lookahead && (l = e.lookahead);
        do if (a = r, !(o[a + f] !== v || o[a + f - 1] !== d || o[a] !== o[n] || o[++a] !== o[n + 1])) {
            n += 2, a++;
            do ; while (o[++n] === o[++a] && o[++n] === o[++a] && o[++n] === o[++a] && o[++n] === o[++a] && o[++n] === o[++a] && o[++n] === o[++a] && o[++n] === o[++a] && o[++n] === o[++a] && n < y);
            if (i = Te - (y - n), n = y - Te, i > f) {
                if (e.match_start = r, f = i, i >= l) break;
                d = o[n + f - 1], v = o[n + f]
            }
        } while ((r = x[r & s]) > _ && --t !== 0);
        return f <= e.lookahead ? f : e.lookahead
    }, ut = e => {
        const r = e.w_size;
        let t, n, a;
        do {
            if (n = e.window_size - e.lookahead - e.strstart, e.strstart >= r + (r - ge) && (e.window.set(e.window.subarray(r, r + r - n), 0), e.match_start -= r, e.strstart -= r, e.block_start -= r, e.insert > e.strstart && (e.insert = e.strstart), Ed(e), n += r), e.strm.avail_in === 0) break;
            if (t = ea(e.strm, e.window, e.strstart + e.lookahead, n), e.lookahead += t, e.lookahead + e.insert >= $) for (a = e.strstart - e.insert, e.ins_h = e.window[a], e.ins_h = Pe(e, e.ins_h, e.window[a + 1]); e.insert && (e.ins_h = Pe(e, e.ins_h, e.window[a + $ - 1]), e.prev[a & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = a, a++, e.insert--, !(e.lookahead + e.insert < $));) ;
        } while (e.lookahead < ge && e.strm.avail_in !== 0)
    }, Fo = (e, r) => {
        let t = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5, n, a, i, f = 0,
            l = e.strm.avail_in;
        do {
            if (n = 65535, i = e.bi_valid + 42 >> 3, e.strm.avail_out < i || (i = e.strm.avail_out - i, a = e.strstart - e.block_start, n > a + e.strm.avail_in && (n = a + e.strm.avail_in), n > i && (n = i), n < t && (n === 0 && r !== fe || r === ke || n !== a + e.strm.avail_in))) break;
            f = r === fe && n === a + e.strm.avail_in ? 1 : 0, Kn(e, 0, 0, f), e.pending_buf[e.pending - 4] = n, e.pending_buf[e.pending - 3] = n >> 8, e.pending_buf[e.pending - 2] = ~n, e.pending_buf[e.pending - 1] = ~n >> 8, re(e.strm), a && (a > n && (a = n), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + a), e.strm.next_out), e.strm.next_out += a, e.strm.avail_out -= a, e.strm.total_out += a, e.block_start += a, n -= a), n && (ea(e.strm, e.strm.output, e.strm.next_out, n), e.strm.next_out += n, e.strm.avail_out -= n, e.strm.total_out += n)
        } while (f === 0);
        return l -= e.strm.avail_in, l && (l >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= l && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - l, e.strm.next_in), e.strstart), e.strstart += l, e.insert += l > e.w_size - e.insert ? e.w_size - e.insert : l), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), f ? ct : r !== ke && r !== fe && e.strm.avail_in === 0 && e.strstart === e.block_start ? st : (i = e.window_size - e.strstart, e.strm.avail_in > i && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, i += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), i > e.strm.avail_in && (i = e.strm.avail_in), i && (ea(e.strm, e.window, e.strstart, i), e.strstart += i, e.insert += i > e.w_size - e.insert ? e.w_size - e.insert : i), e.high_water < e.strstart && (e.high_water = e.strstart), i = e.bi_valid + 42 >> 3, i = e.pending_buf_size - i > 65535 ? 65535 : e.pending_buf_size - i, t = i > e.w_size ? e.w_size : i, a = e.strstart - e.block_start, (a >= t || (a || r === fe) && r !== ke && e.strm.avail_in === 0 && a <= i) && (n = a > i ? i : a, f = r === fe && e.strm.avail_in === 0 && n === a ? 1 : 0, Kn(e, e.block_start, n, f), e.block_start += n, re(e.strm)), f ? We : J)
    }, ta = (e, r) => {
        let t, n;
        for (; ;) {
            if (e.lookahead < ge) {
                if (ut(e), e.lookahead < ge && r === ke) return J;
                if (e.lookahead === 0) break
            }
            if (t = 0, e.lookahead >= $ && (e.ins_h = Pe(e, e.ins_h, e.window[e.strstart + $ - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), t !== 0 && e.strstart - t <= e.w_size - ge && (e.match_length = No(e, t)), e.match_length >= $) if (n = Re(e, e.strstart - e.match_start, e.match_length - $), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= $) {
                e.match_length--;
                do e.strstart++, e.ins_h = Pe(e, e.ins_h, e.window[e.strstart + $ - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart; while (--e.match_length !== 0);
                e.strstart++
            } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = Pe(e, e.ins_h, e.window[e.strstart + 1]); else n = Re(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
            if (n && (ne(e, !1), e.strm.avail_out === 0)) return J
        }
        return e.insert = e.strstart < $ - 1 ? e.strstart : $ - 1, r === fe ? (ne(e, !0), e.strm.avail_out === 0 ? We : ct) : e.sym_next && (ne(e, !1), e.strm.avail_out === 0) ? J : st
    }, dt = (e, r) => {
        let t, n, a;
        for (; ;) {
            if (e.lookahead < ge) {
                if (ut(e), e.lookahead < ge && r === ke) return J;
                if (e.lookahead === 0) break
            }
            if (t = 0, e.lookahead >= $ && (e.ins_h = Pe(e, e.ins_h, e.window[e.strstart + $ - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = $ - 1, t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - ge && (e.match_length = No(e, t), e.match_length <= 5 && (e.strategy === cd || e.match_length === $ && e.strstart - e.match_start > 4096) && (e.match_length = $ - 1)), e.prev_length >= $ && e.match_length <= e.prev_length) {
                a = e.strstart + e.lookahead - $, n = Re(e, e.strstart - 1 - e.prev_match, e.prev_length - $), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                do ++e.strstart <= a && (e.ins_h = Pe(e, e.ins_h, e.window[e.strstart + $ - 1]), t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart); while (--e.prev_length !== 0);
                if (e.match_available = 0, e.match_length = $ - 1, e.strstart++, n && (ne(e, !1), e.strm.avail_out === 0)) return J
            } else if (e.match_available) {
                if (n = Re(e, 0, e.window[e.strstart - 1]), n && ne(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return J
            } else e.match_available = 1, e.strstart++, e.lookahead--
        }
        return e.match_available && (n = Re(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < $ - 1 ? e.strstart : $ - 1, r === fe ? (ne(e, !0), e.strm.avail_out === 0 ? We : ct) : e.sym_next && (ne(e, !1), e.strm.avail_out === 0) ? J : st
    }, Ad = (e, r) => {
        let t, n, a, i;
        const f = e.window;
        for (; ;) {
            if (e.lookahead <= Te) {
                if (ut(e), e.lookahead <= Te && r === ke) return J;
                if (e.lookahead === 0) break
            }
            if (e.match_length = 0, e.lookahead >= $ && e.strstart > 0 && (a = e.strstart - 1, n = f[a], n === f[++a] && n === f[++a] && n === f[++a])) {
                i = e.strstart + Te;
                do ; while (n === f[++a] && n === f[++a] && n === f[++a] && n === f[++a] && n === f[++a] && n === f[++a] && n === f[++a] && n === f[++a] && a < i);
                e.match_length = Te - (i - a), e.match_length > e.lookahead && (e.match_length = e.lookahead)
            }
            if (e.match_length >= $ ? (t = Re(e, 1, e.match_length - $), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (t = Re(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), t && (ne(e, !1), e.strm.avail_out === 0)) return J
        }
        return e.insert = 0, r === fe ? (ne(e, !0), e.strm.avail_out === 0 ? We : ct) : e.sym_next && (ne(e, !1), e.strm.avail_out === 0) ? J : st
    }, Od = (e, r) => {
        let t;
        for (; ;) {
            if (e.lookahead === 0 && (ut(e), e.lookahead === 0)) {
                if (r === ke) return J;
                break
            }
            if (e.match_length = 0, t = Re(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, t && (ne(e, !1), e.strm.avail_out === 0)) return J
        }
        return e.insert = 0, r === fe ? (ne(e, !0), e.strm.avail_out === 0 ? We : ct) : e.sym_next && (ne(e, !1), e.strm.avail_out === 0) ? J : st
    };

    function ve(e, r, t, n, a) {
        this.good_length = e, this.max_lazy = r, this.nice_length = t, this.max_chain = n, this.func = a
    }

    const Nt = [new ve(0, 0, 0, 0, Fo), new ve(4, 4, 8, 4, ta), new ve(4, 5, 16, 8, ta), new ve(4, 6, 32, 32, ta), new ve(4, 4, 16, 16, dt), new ve(8, 16, 32, 32, dt), new ve(8, 16, 128, 128, dt), new ve(8, 32, 128, 256, dt), new ve(32, 128, 258, 1024, dt), new ve(32, 258, 258, 4096, dt)],
        Rd = e => {
            e.window_size = 2 * e.w_size, Ie(e.head), e.max_lazy_match = Nt[e.level].max_lazy, e.good_match = Nt[e.level].good_length, e.nice_match = Nt[e.level].nice_length, e.max_chain_length = Nt[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = $ - 1, e.match_available = 0, e.ins_h = 0
        };

    function kd() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = fr, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(bd * 2), this.dyn_dtree = new Uint16Array((2 * vd + 1) * 2), this.bl_tree = new Uint16Array((2 * wd + 1) * 2), Ie(this.dyn_ltree), Ie(this.dyn_dtree), Ie(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(md + 1), this.heap = new Uint16Array(2 * Wn + 1), Ie(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Wn + 1), Ie(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
    }

    const Ft = e => {
        if (!e) return 1;
        const r = e.state;
        return !r || r.strm !== e || r.status !== ft && r.status !== Vn && r.status !== Xn && r.status !== Yn && r.status !== Qn && r.status !== Jn && r.status !== Ge && r.status !== Ct ? 1 : 0
    }, Lo = e => {
        if (Ft(e)) return Ve(e, _e);
        e.total_in = e.total_out = 0, e.data_type = pd;
        const r = e.state;
        return r.pending = 0, r.pending_out = 0, r.wrap < 0 && (r.wrap = -r.wrap), r.status = r.wrap === 2 ? Vn : r.wrap ? ft : Ge, e.adler = r.wrap === 2 ? 0 : 1, r.last_flush = -2, nd(r), X
    }, Uo = e => {
        const r = Lo(e);
        return r === X && Rd(e.state), r
    }, Td = (e, r) => Ft(e) || e.state.wrap !== 2 ? _e : (e.state.gzhead = r, X), qo = (e, r, t, n, a, i) => {
        if (!e) return _e;
        let f = 1;
        if (r === sd && (r = 6), n < 0 ? (f = 0, n = -n) : n > 15 && (f = 2, n -= 16), a < 1 || a > yd || t !== fr || n < 8 || n > 15 || r < 0 || r > 9 || i < 0 || i > dd || n === 8 && f !== 1) return Ve(e, _e);
        n === 8 && (n = 9);
        const l = new kd;
        return e.state = l, l.strm = e, l.status = ft, l.wrap = f, l.gzhead = null, l.w_bits = n, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = a + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + $ - 1) / $), l.window = new Uint8Array(l.w_size * 2), l.head = new Uint16Array(l.hash_size), l.prev = new Uint16Array(l.w_size), l.lit_bufsize = 1 << a + 6, l.pending_buf_size = l.lit_bufsize * 4, l.pending_buf = new Uint8Array(l.pending_buf_size), l.sym_buf = l.lit_bufsize, l.sym_end = (l.lit_bufsize - 1) * 3, l.level = r, l.strategy = i, l.method = t, Uo(e)
    }, Id = (e, r) => qo(e, r, fr, _d, gd, hd), Pd = (e, r) => {
        if (Ft(e) || r > Mo || r < 0) return e ? Ve(e, _e) : _e;
        const t = e.state;
        if (!e.output || e.avail_in !== 0 && !e.input || t.status === Ct && r !== fe) return Ve(e, e.avail_out === 0 ? Gn : _e);
        const n = t.last_flush;
        if (t.last_flush = r, t.pending !== 0) {
            if (re(e), e.avail_out === 0) return t.last_flush = -1, X
        } else if (e.avail_in === 0 && zo(r) <= zo(n) && r !== fe) return Ve(e, Gn);
        if (t.status === Ct && e.avail_in !== 0) return Ve(e, Gn);
        if (t.status === ft && t.wrap === 0 && (t.status = Ge), t.status === ft) {
            let a = fr + (t.w_bits - 8 << 4) << 8, i = -1;
            if (t.strategy >= lr || t.level < 2 ? i = 0 : t.level < 6 ? i = 1 : t.level === 6 ? i = 2 : i = 3, a |= i << 6, t.strstart !== 0 && (a |= xd), a += 31 - a % 31, zt(t, a), t.strstart !== 0 && (zt(t, e.adler >>> 16), zt(t, e.adler & 65535)), e.adler = 1, t.status = Ge, re(e), t.pending !== 0) return t.last_flush = -1, X
        }
        if (t.status === Vn) {
            if (e.adler = 0, N(t, 31), N(t, 139), N(t, 8), t.gzhead) N(t, (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0)), N(t, t.gzhead.time & 255), N(t, t.gzhead.time >> 8 & 255), N(t, t.gzhead.time >> 16 & 255), N(t, t.gzhead.time >> 24 & 255), N(t, t.level === 9 ? 2 : t.strategy >= lr || t.level < 2 ? 4 : 0), N(t, t.gzhead.os & 255), t.gzhead.extra && t.gzhead.extra.length && (N(t, t.gzhead.extra.length & 255), N(t, t.gzhead.extra.length >> 8 & 255)), t.gzhead.hcrc && (e.adler = V(e.adler, t.pending_buf, t.pending, 0)), t.gzindex = 0, t.status = Xn; else if (N(t, 0), N(t, 0), N(t, 0), N(t, 0), N(t, 0), N(t, t.level === 9 ? 2 : t.strategy >= lr || t.level < 2 ? 4 : 0), N(t, Sd), t.status = Ge, re(e), t.pending !== 0) return t.last_flush = -1, X
        }
        if (t.status === Xn) {
            if (t.gzhead.extra) {
                let a = t.pending, i = (t.gzhead.extra.length & 65535) - t.gzindex;
                for (; t.pending + i > t.pending_buf_size;) {
                    let l = t.pending_buf_size - t.pending;
                    if (t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + l), t.pending), t.pending = t.pending_buf_size, t.gzhead.hcrc && t.pending > a && (e.adler = V(e.adler, t.pending_buf, t.pending - a, a)), t.gzindex += l, re(e), t.pending !== 0) return t.last_flush = -1, X;
                    a = 0, i -= l
                }
                let f = new Uint8Array(t.gzhead.extra);
                t.pending_buf.set(f.subarray(t.gzindex, t.gzindex + i), t.pending), t.pending += i, t.gzhead.hcrc && t.pending > a && (e.adler = V(e.adler, t.pending_buf, t.pending - a, a)), t.gzindex = 0
            }
            t.status = Yn
        }
        if (t.status === Yn) {
            if (t.gzhead.name) {
                let a = t.pending, i;
                do {
                    if (t.pending === t.pending_buf_size) {
                        if (t.gzhead.hcrc && t.pending > a && (e.adler = V(e.adler, t.pending_buf, t.pending - a, a)), re(e), t.pending !== 0) return t.last_flush = -1, X;
                        a = 0
                    }
                    t.gzindex < t.gzhead.name.length ? i = t.gzhead.name.charCodeAt(t.gzindex++) & 255 : i = 0, N(t, i)
                } while (i !== 0);
                t.gzhead.hcrc && t.pending > a && (e.adler = V(e.adler, t.pending_buf, t.pending - a, a)), t.gzindex = 0
            }
            t.status = Qn
        }
        if (t.status === Qn) {
            if (t.gzhead.comment) {
                let a = t.pending, i;
                do {
                    if (t.pending === t.pending_buf_size) {
                        if (t.gzhead.hcrc && t.pending > a && (e.adler = V(e.adler, t.pending_buf, t.pending - a, a)), re(e), t.pending !== 0) return t.last_flush = -1, X;
                        a = 0
                    }
                    t.gzindex < t.gzhead.comment.length ? i = t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : i = 0, N(t, i)
                } while (i !== 0);
                t.gzhead.hcrc && t.pending > a && (e.adler = V(e.adler, t.pending_buf, t.pending - a, a))
            }
            t.status = Jn
        }
        if (t.status === Jn) {
            if (t.gzhead.hcrc) {
                if (t.pending + 2 > t.pending_buf_size && (re(e), t.pending !== 0)) return t.last_flush = -1, X;
                N(t, e.adler & 255), N(t, e.adler >> 8 & 255), e.adler = 0
            }
            if (t.status = Ge, re(e), t.pending !== 0) return t.last_flush = -1, X
        }
        if (e.avail_in !== 0 || t.lookahead !== 0 || r !== ke && t.status !== Ct) {
            let a = t.level === 0 ? Fo(t, r) : t.strategy === lr ? Od(t, r) : t.strategy === ud ? Ad(t, r) : Nt[t.level].func(t, r);
            if ((a === We || a === ct) && (t.status = Ct), a === J || a === We) return e.avail_out === 0 && (t.last_flush = -1), X;
            if (a === st && (r === od ? id(t) : r !== Mo && (Kn(t, 0, 0, !1), r === ld && (Ie(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), re(e), e.avail_out === 0)) return t.last_flush = -1, X
        }
        return r !== fe ? X : t.wrap <= 0 ? Co : (t.wrap === 2 ? (N(t, e.adler & 255), N(t, e.adler >> 8 & 255), N(t, e.adler >> 16 & 255), N(t, e.adler >> 24 & 255), N(t, e.total_in & 255), N(t, e.total_in >> 8 & 255), N(t, e.total_in >> 16 & 255), N(t, e.total_in >> 24 & 255)) : (zt(t, e.adler >>> 16), zt(t, e.adler & 65535)), re(e), t.wrap > 0 && (t.wrap = -t.wrap), t.pending !== 0 ? X : Co)
    }, Dd = e => {
        if (Ft(e)) return _e;
        const r = e.state.status;
        return e.state = null, r === Ge ? Ve(e, fd) : X
    }, $d = (e, r) => {
        let t = r.length;
        if (Ft(e)) return _e;
        const n = e.state, a = n.wrap;
        if (a === 2 || a === 1 && n.status !== ft || n.lookahead) return _e;
        if (a === 1 && (e.adler = $t(e.adler, r, t, 0)), n.wrap = 0, t >= n.w_size) {
            a === 0 && (Ie(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0);
            let _ = new Uint8Array(n.w_size);
            _.set(r.subarray(t - n.w_size, t), 0), r = _, t = n.w_size
        }
        const i = e.avail_in, f = e.next_in, l = e.input;
        for (e.avail_in = t, e.next_in = 0, e.input = r, ut(n); n.lookahead >= $;) {
            let _ = n.strstart, o = n.lookahead - ($ - 1);
            do n.ins_h = Pe(n, n.ins_h, n.window[_ + $ - 1]), n.prev[_ & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = _, _++; while (--o);
            n.strstart = _, n.lookahead = $ - 1, ut(n)
        }
        return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = $ - 1, n.match_available = 0, e.next_in = f, e.input = l, e.avail_in = i, n.wrap = a, X
    };
    var Md = Id, Cd = qo, zd = Uo, Nd = Lo, Fd = Td, Ld = Pd, Ud = Dd, qd = $d,
        Bd = "pako deflate (from Nodeca project)", Lt = {
            deflateInit: Md,
            deflateInit2: Cd,
            deflateReset: zd,
            deflateResetKeep: Nd,
            deflateSetHeader: Fd,
            deflate: Ld,
            deflateEnd: Ud,
            deflateSetDictionary: qd,
            deflateInfo: Bd
        };
    const jd = (e, r) => Object.prototype.hasOwnProperty.call(e, r);
    var Zd = function (e) {
        const r = Array.prototype.slice.call(arguments, 1);
        for (; r.length;) {
            const t = r.shift();
            if (t) {
                if (typeof t != "object") throw new TypeError(t + "must be non-object");
                for (const n in t) jd(t, n) && (e[n] = t[n])
            }
        }
        return e
    }, Hd = e => {
        let r = 0;
        for (let n = 0, a = e.length; n < a; n++) r += e[n].length;
        const t = new Uint8Array(r);
        for (let n = 0, a = 0, i = e.length; n < i; n++) {
            let f = e[n];
            t.set(f, a), a += f.length
        }
        return t
    }, sr = {assign: Zd, flattenChunks: Hd};
    let Bo = !0;
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch {
        Bo = !1
    }
    const Ut = new Uint8Array(256);
    for (let e = 0; e < 256; e++) Ut[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
    Ut[254] = Ut[254] = 1;
    var Kd = e => {
        if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(e);
        let r, t, n, a, i, f = e.length, l = 0;
        for (a = 0; a < f; a++) t = e.charCodeAt(a), (t & 64512) === 55296 && a + 1 < f && (n = e.charCodeAt(a + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), a++)), l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
        for (r = new Uint8Array(l), i = 0, a = 0; i < l; a++) t = e.charCodeAt(a), (t & 64512) === 55296 && a + 1 < f && (n = e.charCodeAt(a + 1), (n & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (n - 56320), a++)), t < 128 ? r[i++] = t : t < 2048 ? (r[i++] = 192 | t >>> 6, r[i++] = 128 | t & 63) : t < 65536 ? (r[i++] = 224 | t >>> 12, r[i++] = 128 | t >>> 6 & 63, r[i++] = 128 | t & 63) : (r[i++] = 240 | t >>> 18, r[i++] = 128 | t >>> 12 & 63, r[i++] = 128 | t >>> 6 & 63, r[i++] = 128 | t & 63);
        return r
    };
    const Gd = (e, r) => {
        if (r < 65534 && e.subarray && Bo) return String.fromCharCode.apply(null, e.length === r ? e : e.subarray(0, r));
        let t = "";
        for (let n = 0; n < r; n++) t += String.fromCharCode(e[n]);
        return t
    };
    var Wd = (e, r) => {
        const t = r || e.length;
        if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(e.subarray(0, r));
        let n, a;
        const i = new Array(t * 2);
        for (a = 0, n = 0; n < t;) {
            let f = e[n++];
            if (f < 128) {
                i[a++] = f;
                continue
            }
            let l = Ut[f];
            if (l > 4) {
                i[a++] = 65533, n += l - 1;
                continue
            }
            for (f &= l === 2 ? 31 : l === 3 ? 15 : 7; l > 1 && n < t;) f = f << 6 | e[n++] & 63, l--;
            if (l > 1) {
                i[a++] = 65533;
                continue
            }
            f < 65536 ? i[a++] = f : (f -= 65536, i[a++] = 55296 | f >> 10 & 1023, i[a++] = 56320 | f & 1023)
        }
        return Gd(i, a)
    }, Vd = (e, r) => {
        r = r || e.length, r > e.length && (r = e.length);
        let t = r - 1;
        for (; t >= 0 && (e[t] & 192) === 128;) t--;
        return t < 0 || t === 0 ? r : t + Ut[e[t]] > r ? t : r
    }, qt = {string2buf: Kd, buf2string: Wd, utf8border: Vd};

    function Xd() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
    }

    var jo = Xd;
    const Zo = Object.prototype.toString, {
        Z_NO_FLUSH: Yd,
        Z_SYNC_FLUSH: Qd,
        Z_FULL_FLUSH: Jd,
        Z_FINISH: eh,
        Z_OK: cr,
        Z_STREAM_END: th,
        Z_DEFAULT_COMPRESSION: rh,
        Z_DEFAULT_STRATEGY: nh,
        Z_DEFLATED: ah
    } = Mt;

    function Bt(e) {
        this.options = sr.assign({
            level: rh,
            method: ah,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: nh
        }, e || {});
        let r = this.options;
        r.raw && r.windowBits > 0 ? r.windowBits = -r.windowBits : r.gzip && r.windowBits > 0 && r.windowBits < 16 && (r.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new jo, this.strm.avail_out = 0;
        let t = Lt.deflateInit2(this.strm, r.level, r.method, r.windowBits, r.memLevel, r.strategy);
        if (t !== cr) throw new Error(Ke[t]);
        if (r.header && Lt.deflateSetHeader(this.strm, r.header), r.dictionary) {
            let n;
            if (typeof r.dictionary == "string" ? n = qt.string2buf(r.dictionary) : Zo.call(r.dictionary) === "[object ArrayBuffer]" ? n = new Uint8Array(r.dictionary) : n = r.dictionary, t = Lt.deflateSetDictionary(this.strm, n), t !== cr) throw new Error(Ke[t]);
            this._dict_set = !0
        }
    }

    Bt.prototype.push = function (e, r) {
        const t = this.strm, n = this.options.chunkSize;
        let a, i;
        if (this.ended) return !1;
        for (r === ~~r ? i = r : i = r === !0 ? eh : Yd, typeof e == "string" ? t.input = qt.string2buf(e) : Zo.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ;) {
            if (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), (i === Qd || i === Jd) && t.avail_out <= 6) {
                this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
                continue
            }
            if (a = Lt.deflate(t, i), a === th) return t.next_out > 0 && this.onData(t.output.subarray(0, t.next_out)), a = Lt.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === cr;
            if (t.avail_out === 0) {
                this.onData(t.output);
                continue
            }
            if (i > 0 && t.next_out > 0) {
                this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
                continue
            }
            if (t.avail_in === 0) break
        }
        return !0
    }, Bt.prototype.onData = function (e) {
        this.chunks.push(e)
    }, Bt.prototype.onEnd = function (e) {
        e === cr && (this.result = sr.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
    };

    function ra(e, r) {
        const t = new Bt(r);
        if (t.push(e, !0), t.err) throw t.msg || Ke[t.err];
        return t.result
    }

    function ih(e, r) {
        return r = r || {}, r.raw = !0, ra(e, r)
    }

    function oh(e, r) {
        return r = r || {}, r.gzip = !0, ra(e, r)
    }

    var lh = Bt, fh = ra, sh = ih, ch = oh, uh = {Deflate: lh, deflate: fh, deflateRaw: sh, gzip: ch};
    const ur = 16209, dh = 16191;
    var hh = function (r, t) {
        let n, a, i, f, l, _, o, s, x, y, d, v, g, c, u, h, b, p, E, O, S, R, k, A;
        const T = r.state;
        n = r.next_in, k = r.input, a = n + (r.avail_in - 5), i = r.next_out, A = r.output, f = i - (t - r.avail_out), l = i + (r.avail_out - 257), _ = T.dmax, o = T.wsize, s = T.whave, x = T.wnext, y = T.window, d = T.hold, v = T.bits, g = T.lencode, c = T.distcode, u = (1 << T.lenbits) - 1, h = (1 << T.distbits) - 1;
        e:do {
            v < 15 && (d += k[n++] << v, v += 8, d += k[n++] << v, v += 8), b = g[d & u];
            t:for (; ;) {
                if (p = b >>> 24, d >>>= p, v -= p, p = b >>> 16 & 255, p === 0) A[i++] = b & 65535; else if (p & 16) {
                    E = b & 65535, p &= 15, p && (v < p && (d += k[n++] << v, v += 8), E += d & (1 << p) - 1, d >>>= p, v -= p), v < 15 && (d += k[n++] << v, v += 8, d += k[n++] << v, v += 8), b = c[d & h];
                    r:for (; ;) {
                        if (p = b >>> 24, d >>>= p, v -= p, p = b >>> 16 & 255, p & 16) {
                            if (O = b & 65535, p &= 15, v < p && (d += k[n++] << v, v += 8, v < p && (d += k[n++] << v, v += 8)), O += d & (1 << p) - 1, O > _) {
                                r.msg = "invalid distance too far back", T.mode = ur;
                                break e
                            }
                            if (d >>>= p, v -= p, p = i - f, O > p) {
                                if (p = O - p, p > s && T.sane) {
                                    r.msg = "invalid distance too far back", T.mode = ur;
                                    break e
                                }
                                if (S = 0, R = y, x === 0) {
                                    if (S += o - p, p < E) {
                                        E -= p;
                                        do A[i++] = y[S++]; while (--p);
                                        S = i - O, R = A
                                    }
                                } else if (x < p) {
                                    if (S += o + x - p, p -= x, p < E) {
                                        E -= p;
                                        do A[i++] = y[S++]; while (--p);
                                        if (S = 0, x < E) {
                                            p = x, E -= p;
                                            do A[i++] = y[S++]; while (--p);
                                            S = i - O, R = A
                                        }
                                    }
                                } else if (S += x - p, p < E) {
                                    E -= p;
                                    do A[i++] = y[S++]; while (--p);
                                    S = i - O, R = A
                                }
                                for (; E > 2;) A[i++] = R[S++], A[i++] = R[S++], A[i++] = R[S++], E -= 3;
                                E && (A[i++] = R[S++], E > 1 && (A[i++] = R[S++]))
                            } else {
                                S = i - O;
                                do A[i++] = A[S++], A[i++] = A[S++], A[i++] = A[S++], E -= 3; while (E > 2);
                                E && (A[i++] = A[S++], E > 1 && (A[i++] = A[S++]))
                            }
                        } else if ((p & 64) === 0) {
                            b = c[(b & 65535) + (d & (1 << p) - 1)];
                            continue r
                        } else {
                            r.msg = "invalid distance code", T.mode = ur;
                            break e
                        }
                        break
                    }
                } else if ((p & 64) === 0) {
                    b = g[(b & 65535) + (d & (1 << p) - 1)];
                    continue t
                } else if (p & 32) {
                    T.mode = dh;
                    break e
                } else {
                    r.msg = "invalid literal/length code", T.mode = ur;
                    break e
                }
                break
            }
        } while (n < a && i < l);
        E = v >> 3, n -= E, v -= E << 3, d &= (1 << v) - 1, r.next_in = n, r.next_out = i, r.avail_in = n < a ? 5 + (a - n) : 5 - (n - a), r.avail_out = i < l ? 257 + (l - i) : 257 - (i - l), T.hold = d, T.bits = v
    };
    const ht = 15, Ho = 852, Ko = 592, Go = 0, na = 1, Wo = 2,
        ph = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
        yh = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
        _h = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
        gh = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    var jt = (e, r, t, n, a, i, f, l) => {
        const _ = l.bits;
        let o = 0, s = 0, x = 0, y = 0, d = 0, v = 0, g = 0, c = 0, u = 0, h = 0, b, p, E, O, S, R = null, k;
        const A = new Uint16Array(ht + 1), T = new Uint16Array(ht + 1);
        let I = null, j, L, M;
        for (o = 0; o <= ht; o++) A[o] = 0;
        for (s = 0; s < n; s++) A[r[t + s]]++;
        for (d = _, y = ht; y >= 1 && A[y] === 0; y--) ;
        if (d > y && (d = y), y === 0) return a[i++] = 1 << 24 | 64 << 16 | 0, a[i++] = 1 << 24 | 64 << 16 | 0, l.bits = 1, 0;
        for (x = 1; x < y && A[x] === 0; x++) ;
        for (d < x && (d = x), c = 1, o = 1; o <= ht; o++) if (c <<= 1, c -= A[o], c < 0) return -1;
        if (c > 0 && (e === Go || y !== 1)) return -1;
        for (T[1] = 0, o = 1; o < ht; o++) T[o + 1] = T[o] + A[o];
        for (s = 0; s < n; s++) r[t + s] !== 0 && (f[T[r[t + s]]++] = s);
        if (e === Go ? (R = I = f, k = 20) : e === na ? (R = ph, I = yh, k = 257) : (R = _h, I = gh, k = 0), h = 0, s = 0, o = x, S = i, v = d, g = 0, E = -1, u = 1 << d, O = u - 1, e === na && u > Ho || e === Wo && u > Ko) return 1;
        for (; ;) {
            j = o - g, f[s] + 1 < k ? (L = 0, M = f[s]) : f[s] >= k ? (L = I[f[s] - k], M = R[f[s] - k]) : (L = 96, M = 0), b = 1 << o - g, p = 1 << v, x = p;
            do p -= b, a[S + (h >> g) + p] = j << 24 | L << 16 | M | 0; while (p !== 0);
            for (b = 1 << o - 1; h & b;) b >>= 1;
            if (b !== 0 ? (h &= b - 1, h += b) : h = 0, s++, --A[o] === 0) {
                if (o === y) break;
                o = r[t + f[s]]
            }
            if (o > d && (h & O) !== E) {
                for (g === 0 && (g = d), S += x, v = o - g, c = 1 << v; v + g < y && (c -= A[v + g], !(c <= 0));) v++, c <<= 1;
                if (u += 1 << v, e === na && u > Ho || e === Wo && u > Ko) return 1;
                E = h & O, a[E] = d << 24 | v << 16 | S - i | 0
            }
        }
        return h !== 0 && (a[S + h] = o - g << 24 | 64 << 16 | 0), l.bits = d, 0
    };
    const vh = 0, Vo = 1, Xo = 2, {
            Z_FINISH: Yo,
            Z_BLOCK: wh,
            Z_TREES: dr,
            Z_OK: Xe,
            Z_STREAM_END: bh,
            Z_NEED_DICT: mh,
            Z_STREAM_ERROR: se,
            Z_DATA_ERROR: Qo,
            Z_MEM_ERROR: Jo,
            Z_BUF_ERROR: xh,
            Z_DEFLATED: el
        } = Mt, hr = 16180, tl = 16181, rl = 16182, nl = 16183, al = 16184, il = 16185, ol = 16186, ll = 16187, fl = 16188,
        sl = 16189, pr = 16190, be = 16191, aa = 16192, cl = 16193, ia = 16194, ul = 16195, dl = 16196, hl = 16197,
        pl = 16198, yr = 16199, _r = 16200, yl = 16201, _l = 16202, gl = 16203, vl = 16204, wl = 16205, oa = 16206,
        bl = 16207, ml = 16208, H = 16209, xl = 16210, Sl = 16211, Sh = 852, Eh = 592, Ah = 15,
        El = e => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);

    function Oh() {
        this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
    }

    const Ye = e => {
        if (!e) return 1;
        const r = e.state;
        return !r || r.strm !== e || r.mode < hr || r.mode > Sl ? 1 : 0
    }, Al = e => {
        if (Ye(e)) return se;
        const r = e.state;
        return e.total_in = e.total_out = r.total = 0, e.msg = "", r.wrap && (e.adler = r.wrap & 1), r.mode = hr, r.last = 0, r.havedict = 0, r.flags = -1, r.dmax = 32768, r.head = null, r.hold = 0, r.bits = 0, r.lencode = r.lendyn = new Int32Array(Sh), r.distcode = r.distdyn = new Int32Array(Eh), r.sane = 1, r.back = -1, Xe
    }, Ol = e => {
        if (Ye(e)) return se;
        const r = e.state;
        return r.wsize = 0, r.whave = 0, r.wnext = 0, Al(e)
    }, Rl = (e, r) => {
        let t;
        if (Ye(e)) return se;
        const n = e.state;
        return r < 0 ? (t = 0, r = -r) : (t = (r >> 4) + 5, r < 48 && (r &= 15)), r && (r < 8 || r > 15) ? se : (n.window !== null && n.wbits !== r && (n.window = null), n.wrap = t, n.wbits = r, Ol(e))
    }, kl = (e, r) => {
        if (!e) return se;
        const t = new Oh;
        e.state = t, t.strm = e, t.window = null, t.mode = hr;
        const n = Rl(e, r);
        return n !== Xe && (e.state = null), n
    }, Rh = e => kl(e, Ah);
    let Tl = !0, la, fa;
    const kh = e => {
        if (Tl) {
            la = new Int32Array(512), fa = new Int32Array(32);
            let r = 0;
            for (; r < 144;) e.lens[r++] = 8;
            for (; r < 256;) e.lens[r++] = 9;
            for (; r < 280;) e.lens[r++] = 7;
            for (; r < 288;) e.lens[r++] = 8;
            for (jt(Vo, e.lens, 0, 288, la, 0, e.work, {bits: 9}), r = 0; r < 32;) e.lens[r++] = 5;
            jt(Xo, e.lens, 0, 32, fa, 0, e.work, {bits: 5}), Tl = !1
        }
        e.lencode = la, e.lenbits = 9, e.distcode = fa, e.distbits = 5
    }, Il = (e, r, t, n) => {
        let a;
        const i = e.state;
        return i.window === null && (i.wsize = 1 << i.wbits, i.wnext = 0, i.whave = 0, i.window = new Uint8Array(i.wsize)), n >= i.wsize ? (i.window.set(r.subarray(t - i.wsize, t), 0), i.wnext = 0, i.whave = i.wsize) : (a = i.wsize - i.wnext, a > n && (a = n), i.window.set(r.subarray(t - n, t - n + a), i.wnext), n -= a, n ? (i.window.set(r.subarray(t - n, t), 0), i.wnext = n, i.whave = i.wsize) : (i.wnext += a, i.wnext === i.wsize && (i.wnext = 0), i.whave < i.wsize && (i.whave += a))), 0
    }, Th = (e, r) => {
        let t, n, a, i, f, l, _, o, s, x, y, d, v, g, c = 0, u, h, b, p, E, O, S, R;
        const k = new Uint8Array(4);
        let A, T;
        const I = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        if (Ye(e) || !e.output || !e.input && e.avail_in !== 0) return se;
        t = e.state, t.mode === be && (t.mode = aa), f = e.next_out, a = e.output, _ = e.avail_out, i = e.next_in, n = e.input, l = e.avail_in, o = t.hold, s = t.bits, x = l, y = _, R = Xe;
        e:for (; ;) switch (t.mode) {
            case hr:
                if (t.wrap === 0) {
                    t.mode = aa;
                    break
                }
                for (; s < 16;) {
                    if (l === 0) break e;
                    l--, o += n[i++] << s, s += 8
                }
                if (t.wrap & 2 && o === 35615) {
                    t.wbits === 0 && (t.wbits = 15), t.check = 0, k[0] = o & 255, k[1] = o >>> 8 & 255, t.check = V(t.check, k, 2, 0), o = 0, s = 0, t.mode = tl;
                    break
                }
                if (t.head && (t.head.done = !1), !(t.wrap & 1) || (((o & 255) << 8) + (o >> 8)) % 31) {
                    e.msg = "incorrect header check", t.mode = H;
                    break
                }
                if ((o & 15) !== el) {
                    e.msg = "unknown compression method", t.mode = H;
                    break
                }
                if (o >>>= 4, s -= 4, S = (o & 15) + 8, t.wbits === 0 && (t.wbits = S), S > 15 || S > t.wbits) {
                    e.msg = "invalid window size", t.mode = H;
                    break
                }
                t.dmax = 1 << t.wbits, t.flags = 0, e.adler = t.check = 1, t.mode = o & 512 ? sl : be, o = 0, s = 0;
                break;
            case tl:
                for (; s < 16;) {
                    if (l === 0) break e;
                    l--, o += n[i++] << s, s += 8
                }
                if (t.flags = o, (t.flags & 255) !== el) {
                    e.msg = "unknown compression method", t.mode = H;
                    break
                }
                if (t.flags & 57344) {
                    e.msg = "unknown header flags set", t.mode = H;
                    break
                }
                t.head && (t.head.text = o >> 8 & 1), t.flags & 512 && t.wrap & 4 && (k[0] = o & 255, k[1] = o >>> 8 & 255, t.check = V(t.check, k, 2, 0)), o = 0, s = 0, t.mode = rl;
            case rl:
                for (; s < 32;) {
                    if (l === 0) break e;
                    l--, o += n[i++] << s, s += 8
                }
                t.head && (t.head.time = o), t.flags & 512 && t.wrap & 4 && (k[0] = o & 255, k[1] = o >>> 8 & 255, k[2] = o >>> 16 & 255, k[3] = o >>> 24 & 255, t.check = V(t.check, k, 4, 0)), o = 0, s = 0, t.mode = nl;
            case nl:
                for (; s < 16;) {
                    if (l === 0) break e;
                    l--, o += n[i++] << s, s += 8
                }
                t.head && (t.head.xflags = o & 255, t.head.os = o >> 8), t.flags & 512 && t.wrap & 4 && (k[0] = o & 255, k[1] = o >>> 8 & 255, t.check = V(t.check, k, 2, 0)), o = 0, s = 0, t.mode = al;
            case al:
                if (t.flags & 1024) {
                    for (; s < 16;) {
                        if (l === 0) break e;
                        l--, o += n[i++] << s, s += 8
                    }
                    t.length = o, t.head && (t.head.extra_len = o), t.flags & 512 && t.wrap & 4 && (k[0] = o & 255, k[1] = o >>> 8 & 255, t.check = V(t.check, k, 2, 0)), o = 0, s = 0
                } else t.head && (t.head.extra = null);
                t.mode = il;
            case il:
                if (t.flags & 1024 && (d = t.length, d > l && (d = l), d && (t.head && (S = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(n.subarray(i, i + d), S)), t.flags & 512 && t.wrap & 4 && (t.check = V(t.check, n, d, i)), l -= d, i += d, t.length -= d), t.length)) break e;
                t.length = 0, t.mode = ol;
            case ol:
                if (t.flags & 2048) {
                    if (l === 0) break e;
                    d = 0;
                    do S = n[i + d++], t.head && S && t.length < 65536 && (t.head.name += String.fromCharCode(S)); while (S && d < l);
                    if (t.flags & 512 && t.wrap & 4 && (t.check = V(t.check, n, d, i)), l -= d, i += d, S) break e
                } else t.head && (t.head.name = null);
                t.length = 0, t.mode = ll;
            case ll:
                if (t.flags & 4096) {
                    if (l === 0) break e;
                    d = 0;
                    do S = n[i + d++], t.head && S && t.length < 65536 && (t.head.comment += String.fromCharCode(S)); while (S && d < l);
                    if (t.flags & 512 && t.wrap & 4 && (t.check = V(t.check, n, d, i)), l -= d, i += d, S) break e
                } else t.head && (t.head.comment = null);
                t.mode = fl;
            case fl:
                if (t.flags & 512) {
                    for (; s < 16;) {
                        if (l === 0) break e;
                        l--, o += n[i++] << s, s += 8
                    }
                    if (t.wrap & 4 && o !== (t.check & 65535)) {
                        e.msg = "header crc mismatch", t.mode = H;
                        break
                    }
                    o = 0, s = 0
                }
                t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), e.adler = t.check = 0, t.mode = be;
                break;
            case sl:
                for (; s < 32;) {
                    if (l === 0) break e;
                    l--, o += n[i++] << s, s += 8
                }
                e.adler = t.check = El(o), o = 0, s = 0, t.mode = pr;
            case pr:
                if (t.havedict === 0) return e.next_out = f, e.avail_out = _, e.next_in = i, e.avail_in = l, t.hold = o, t.bits = s, mh;
                e.adler = t.check = 1, t.mode = be;
            case be:
                if (r === wh || r === dr) break e;
            case aa:
                if (t.last) {
                    o >>>= s & 7, s -= s & 7, t.mode = oa;
                    break
                }
                for (; s < 3;) {
                    if (l === 0) break e;
                    l--, o += n[i++] << s, s += 8
                }
                switch (t.last = o & 1, o >>>= 1, s -= 1, o & 3) {
                    case 0:
                        t.mode = cl;
                        break;
                    case 1:
                        if (kh(t), t.mode = yr, r === dr) {
                            o >>>= 2, s -= 2;
                            break e
                        }
                        break;
                    case 2:
                        t.mode = dl;
                        break;
                    case 3:
                        e.msg = "invalid block type", t.mode = H
                }
                o >>>= 2, s -= 2;
                break;
            case cl:
                for (o >>>= s & 7, s -= s & 7; s < 32;) {
                    if (l === 0) break e;
                    l--, o += n[i++] << s, s += 8
                }
                if ((o & 65535) !== (o >>> 16 ^ 65535)) {
                    e.msg = "invalid stored block lengths", t.mode = H;
                    break
                }
                if (t.length = o & 65535, o = 0, s = 0, t.mode = ia, r === dr) break e;
            case ia:
                t.mode = ul;
            case ul:
                if (d = t.length, d) {
                    if (d > l && (d = l), d > _ && (d = _), d === 0) break e;
                    a.set(n.subarray(i, i + d), f), l -= d, i += d, _ -= d, f += d, t.length -= d;
                    break
                }
                t.mode = be;
                break;
            case dl:
                for (; s < 14;) {
                    if (l === 0) break e;
                    l--, o += n[i++] << s, s += 8
                }
                if (t.nlen = (o & 31) + 257, o >>>= 5, s -= 5, t.ndist = (o & 31) + 1, o >>>= 5, s -= 5, t.ncode = (o & 15) + 4, o >>>= 4, s -= 4, t.nlen > 286 || t.ndist > 30) {
                    e.msg = "too many length or distance symbols", t.mode = H;
                    break
                }
                t.have = 0, t.mode = hl;
            case hl:
                for (; t.have < t.ncode;) {
                    for (; s < 3;) {
                        if (l === 0) break e;
                        l--, o += n[i++] << s, s += 8
                    }
                    t.lens[I[t.have++]] = o & 7, o >>>= 3, s -= 3
                }
                for (; t.have < 19;) t.lens[I[t.have++]] = 0;
                if (t.lencode = t.lendyn, t.lenbits = 7, A = {bits: t.lenbits}, R = jt(vh, t.lens, 0, 19, t.lencode, 0, t.work, A), t.lenbits = A.bits, R) {
                    e.msg = "invalid code lengths set", t.mode = H;
                    break
                }
                t.have = 0, t.mode = pl;
            case pl:
                for (; t.have < t.nlen + t.ndist;) {
                    for (; c = t.lencode[o & (1 << t.lenbits) - 1], u = c >>> 24, h = c >>> 16 & 255, b = c & 65535, !(u <= s);) {
                        if (l === 0) break e;
                        l--, o += n[i++] << s, s += 8
                    }
                    if (b < 16) o >>>= u, s -= u, t.lens[t.have++] = b; else {
                        if (b === 16) {
                            for (T = u + 2; s < T;) {
                                if (l === 0) break e;
                                l--, o += n[i++] << s, s += 8
                            }
                            if (o >>>= u, s -= u, t.have === 0) {
                                e.msg = "invalid bit length repeat", t.mode = H;
                                break
                            }
                            S = t.lens[t.have - 1], d = 3 + (o & 3), o >>>= 2, s -= 2
                        } else if (b === 17) {
                            for (T = u + 3; s < T;) {
                                if (l === 0) break e;
                                l--, o += n[i++] << s, s += 8
                            }
                            o >>>= u, s -= u, S = 0, d = 3 + (o & 7), o >>>= 3, s -= 3
                        } else {
                            for (T = u + 7; s < T;) {
                                if (l === 0) break e;
                                l--, o += n[i++] << s, s += 8
                            }
                            o >>>= u, s -= u, S = 0, d = 11 + (o & 127), o >>>= 7, s -= 7
                        }
                        if (t.have + d > t.nlen + t.ndist) {
                            e.msg = "invalid bit length repeat", t.mode = H;
                            break
                        }
                        for (; d--;) t.lens[t.have++] = S
                    }
                }
                if (t.mode === H) break;
                if (t.lens[256] === 0) {
                    e.msg = "invalid code -- missing end-of-block", t.mode = H;
                    break
                }
                if (t.lenbits = 9, A = {bits: t.lenbits}, R = jt(Vo, t.lens, 0, t.nlen, t.lencode, 0, t.work, A), t.lenbits = A.bits, R) {
                    e.msg = "invalid literal/lengths set", t.mode = H;
                    break
                }
                if (t.distbits = 6, t.distcode = t.distdyn, A = {bits: t.distbits}, R = jt(Xo, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, A), t.distbits = A.bits, R) {
                    e.msg = "invalid distances set", t.mode = H;
                    break
                }
                if (t.mode = yr, r === dr) break e;
            case yr:
                t.mode = _r;
            case _r:
                if (l >= 6 && _ >= 258) {
                    e.next_out = f, e.avail_out = _, e.next_in = i, e.avail_in = l, t.hold = o, t.bits = s, hh(e, y), f = e.next_out, a = e.output, _ = e.avail_out, i = e.next_in, n = e.input, l = e.avail_in, o = t.hold, s = t.bits, t.mode === be && (t.back = -1);
                    break
                }
                for (t.back = 0; c = t.lencode[o & (1 << t.lenbits) - 1], u = c >>> 24, h = c >>> 16 & 255, b = c & 65535, !(u <= s);) {
                    if (l === 0) break e;
                    l--, o += n[i++] << s, s += 8
                }
                if (h && (h & 240) === 0) {
                    for (p = u, E = h, O = b; c = t.lencode[O + ((o & (1 << p + E) - 1) >> p)], u = c >>> 24, h = c >>> 16 & 255, b = c & 65535, !(p + u <= s);) {
                        if (l === 0) break e;
                        l--, o += n[i++] << s, s += 8
                    }
                    o >>>= p, s -= p, t.back += p
                }
                if (o >>>= u, s -= u, t.back += u, t.length = b, h === 0) {
                    t.mode = wl;
                    break
                }
                if (h & 32) {
                    t.back = -1, t.mode = be;
                    break
                }
                if (h & 64) {
                    e.msg = "invalid literal/length code", t.mode = H;
                    break
                }
                t.extra = h & 15, t.mode = yl;
            case yl:
                if (t.extra) {
                    for (T = t.extra; s < T;) {
                        if (l === 0) break e;
                        l--, o += n[i++] << s, s += 8
                    }
                    t.length += o & (1 << t.extra) - 1, o >>>= t.extra, s -= t.extra, t.back += t.extra
                }
                t.was = t.length, t.mode = _l;
            case _l:
                for (; c = t.distcode[o & (1 << t.distbits) - 1], u = c >>> 24, h = c >>> 16 & 255, b = c & 65535, !(u <= s);) {
                    if (l === 0) break e;
                    l--, o += n[i++] << s, s += 8
                }
                if ((h & 240) === 0) {
                    for (p = u, E = h, O = b; c = t.distcode[O + ((o & (1 << p + E) - 1) >> p)], u = c >>> 24, h = c >>> 16 & 255, b = c & 65535, !(p + u <= s);) {
                        if (l === 0) break e;
                        l--, o += n[i++] << s, s += 8
                    }
                    o >>>= p, s -= p, t.back += p
                }
                if (o >>>= u, s -= u, t.back += u, h & 64) {
                    e.msg = "invalid distance code", t.mode = H;
                    break
                }
                t.offset = b, t.extra = h & 15, t.mode = gl;
            case gl:
                if (t.extra) {
                    for (T = t.extra; s < T;) {
                        if (l === 0) break e;
                        l--, o += n[i++] << s, s += 8
                    }
                    t.offset += o & (1 << t.extra) - 1, o >>>= t.extra, s -= t.extra, t.back += t.extra
                }
                if (t.offset > t.dmax) {
                    e.msg = "invalid distance too far back", t.mode = H;
                    break
                }
                t.mode = vl;
            case vl:
                if (_ === 0) break e;
                if (d = y - _, t.offset > d) {
                    if (d = t.offset - d, d > t.whave && t.sane) {
                        e.msg = "invalid distance too far back", t.mode = H;
                        break
                    }
                    d > t.wnext ? (d -= t.wnext, v = t.wsize - d) : v = t.wnext - d, d > t.length && (d = t.length), g = t.window
                } else g = a, v = f - t.offset, d = t.length;
                d > _ && (d = _), _ -= d, t.length -= d;
                do a[f++] = g[v++]; while (--d);
                t.length === 0 && (t.mode = _r);
                break;
            case wl:
                if (_ === 0) break e;
                a[f++] = t.length, _--, t.mode = _r;
                break;
            case oa:
                if (t.wrap) {
                    for (; s < 32;) {
                        if (l === 0) break e;
                        l--, o |= n[i++] << s, s += 8
                    }
                    if (y -= _, e.total_out += y, t.total += y, t.wrap & 4 && y && (e.adler = t.check = t.flags ? V(t.check, a, y, f - y) : $t(t.check, a, y, f - y)), y = _, t.wrap & 4 && (t.flags ? o : El(o)) !== t.check) {
                        e.msg = "incorrect data check", t.mode = H;
                        break
                    }
                    o = 0, s = 0
                }
                t.mode = bl;
            case bl:
                if (t.wrap && t.flags) {
                    for (; s < 32;) {
                        if (l === 0) break e;
                        l--, o += n[i++] << s, s += 8
                    }
                    if (t.wrap & 4 && o !== (t.total & 4294967295)) {
                        e.msg = "incorrect length check", t.mode = H;
                        break
                    }
                    o = 0, s = 0
                }
                t.mode = ml;
            case ml:
                R = bh;
                break e;
            case H:
                R = Qo;
                break e;
            case xl:
                return Jo;
            case Sl:
            default:
                return se
        }
        return e.next_out = f, e.avail_out = _, e.next_in = i, e.avail_in = l, t.hold = o, t.bits = s, (t.wsize || y !== e.avail_out && t.mode < H && (t.mode < oa || r !== Yo)) && Il(e, e.output, e.next_out, y - e.avail_out), x -= e.avail_in, y -= e.avail_out, e.total_in += x, e.total_out += y, t.total += y, t.wrap & 4 && y && (e.adler = t.check = t.flags ? V(t.check, a, y, e.next_out - y) : $t(t.check, a, y, e.next_out - y)), e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === be ? 128 : 0) + (t.mode === yr || t.mode === ia ? 256 : 0), (x === 0 && y === 0 || r === Yo) && R === Xe && (R = xh), R
    }, Ih = e => {
        if (Ye(e)) return se;
        let r = e.state;
        return r.window && (r.window = null), e.state = null, Xe
    }, Ph = (e, r) => {
        if (Ye(e)) return se;
        const t = e.state;
        return (t.wrap & 2) === 0 ? se : (t.head = r, r.done = !1, Xe)
    }, Dh = (e, r) => {
        const t = r.length;
        let n, a, i;
        return Ye(e) || (n = e.state, n.wrap !== 0 && n.mode !== pr) ? se : n.mode === pr && (a = 1, a = $t(a, r, t, 0), a !== n.check) ? Qo : (i = Il(e, r, t, t), i ? (n.mode = xl, Jo) : (n.havedict = 1, Xe))
    };
    var $h = Ol, Mh = Rl, Ch = Al, zh = Rh, Nh = kl, Fh = Th, Lh = Ih, Uh = Ph, qh = Dh,
        Bh = "pako inflate (from Nodeca project)", me = {
            inflateReset: $h,
            inflateReset2: Mh,
            inflateResetKeep: Ch,
            inflateInit: zh,
            inflateInit2: Nh,
            inflate: Fh,
            inflateEnd: Lh,
            inflateGetHeader: Uh,
            inflateSetDictionary: qh,
            inflateInfo: Bh
        };

    function jh() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
    }

    var Zh = jh;
    const Pl = Object.prototype.toString, {
        Z_NO_FLUSH: Hh,
        Z_FINISH: Kh,
        Z_OK: Zt,
        Z_STREAM_END: sa,
        Z_NEED_DICT: ca,
        Z_STREAM_ERROR: Gh,
        Z_DATA_ERROR: Dl,
        Z_MEM_ERROR: Wh
    } = Mt;

    function Ht(e) {
        this.options = sr.assign({chunkSize: 65536, windowBits: 15, to: ""}, e || {});
        const r = this.options;
        r.raw && r.windowBits >= 0 && r.windowBits < 16 && (r.windowBits = -r.windowBits, r.windowBits === 0 && (r.windowBits = -15)), r.windowBits >= 0 && r.windowBits < 16 && !(e && e.windowBits) && (r.windowBits += 32), r.windowBits > 15 && r.windowBits < 48 && (r.windowBits & 15) === 0 && (r.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new jo, this.strm.avail_out = 0;
        let t = me.inflateInit2(this.strm, r.windowBits);
        if (t !== Zt) throw new Error(Ke[t]);
        if (this.header = new Zh, me.inflateGetHeader(this.strm, this.header), r.dictionary && (typeof r.dictionary == "string" ? r.dictionary = qt.string2buf(r.dictionary) : Pl.call(r.dictionary) === "[object ArrayBuffer]" && (r.dictionary = new Uint8Array(r.dictionary)), r.raw && (t = me.inflateSetDictionary(this.strm, r.dictionary), t !== Zt))) throw new Error(Ke[t])
    }

    Ht.prototype.push = function (e, r) {
        const t = this.strm, n = this.options.chunkSize, a = this.options.dictionary;
        let i, f, l;
        if (this.ended) return !1;
        for (r === ~~r ? f = r : f = r === !0 ? Kh : Hh, Pl.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ;) {
            for (t.avail_out === 0 && (t.output = new Uint8Array(n), t.next_out = 0, t.avail_out = n), i = me.inflate(t, f), i === ca && a && (i = me.inflateSetDictionary(t, a), i === Zt ? i = me.inflate(t, f) : i === Dl && (i = ca)); t.avail_in > 0 && i === sa && t.state.wrap > 0 && e[t.next_in] !== 0;) me.inflateReset(t), i = me.inflate(t, f);
            switch (i) {
                case Gh:
                case Dl:
                case ca:
                case Wh:
                    return this.onEnd(i), this.ended = !0, !1
            }
            if (l = t.avail_out, t.next_out && (t.avail_out === 0 || i === sa)) if (this.options.to === "string") {
                let _ = qt.utf8border(t.output, t.next_out), o = t.next_out - _, s = qt.buf2string(t.output, _);
                t.next_out = o, t.avail_out = n - o, o && t.output.set(t.output.subarray(_, _ + o), 0), this.onData(s)
            } else this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out));
            if (!(i === Zt && l === 0)) {
                if (i === sa) return i = me.inflateEnd(this.strm), this.onEnd(i), this.ended = !0, !0;
                if (t.avail_in === 0) break
            }
        }
        return !0
    }, Ht.prototype.onData = function (e) {
        this.chunks.push(e)
    }, Ht.prototype.onEnd = function (e) {
        e === Zt && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = sr.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
    };

    function ua(e, r) {
        const t = new Ht(r);
        if (t.push(e), t.err) throw t.msg || Ke[t.err];
        return t.result
    }

    function Vh(e, r) {
        return r = r || {}, r.raw = !0, ua(e, r)
    }

    var Xh = Ht, Yh = ua, Qh = Vh, Jh = ua, ep = {Inflate: Xh, inflate: Yh, inflateRaw: Qh, ungzip: Jh};
    const {Deflate: tp, deflate: rp, deflateRaw: np, gzip: ap} = uh, {
        Inflate: ip,
        inflate: op,
        inflateRaw: lp,
        ungzip: fp
    } = ep;
    var sp = tp, cp = rp, up = np, dp = ap, hp = ip, pp = op, yp = lp, _p = fp, gp = Mt, vp = {
        Deflate: sp,
        deflate: cp,
        deflateRaw: up,
        gzip: dp,
        Inflate: hp,
        inflate: pp,
        inflateRaw: yp,
        ungzip: _p,
        constants: gp
    };
    const gr = 8 * 1024;

    function wp(e) {
        const t = atob(decodeURIComponent(e)).split("").map(o => o.charCodeAt(0)), n = new Uint8Array(t),
            a = vp.ungzip(n);
        let i = "", f;
        for (f = 0; f < a.length / gr; f++) i += String.fromCharCode(...a.slice(f * gr, (f + 1) * gr));
        i += String.fromCharCode(...a.slice(f * gr));
        const l = decodeURIComponent(i);
        let _ = "";
        try {
            _ = JSON.parse(l)
        } catch {
            _ = l
        }
        return _
    }

    const $l = () => {
        if (Promise.withResolvers) return Promise.withResolvers();
        let e, r;
        return {
            promise: new Promise((n, a) => {
                e = n, r = a
            }), resolve: e, reject: r
        }
    }, da = async e => {
        try {
            return [await e, null]
        } catch (r) {
            return [void 0, r]
        }
    };

    function bp(e, r = "https://kuajing-plw.happyporsche.com") {
        return Tu(e) ? e : `${r}${e}`
    }

    async function ha(e) {
        const {
                url: r,
                method: t = "GET",
                dataType: n = "json",
                params: a,
                body: i = null,
                baseUrl: f,
                needResponseHeaders: l,
                ..._
            } = e, o = n === "base64" ? r : bp(r, f), s = a ? `${o}?${new URLSearchParams(a).toString()}` : o,
            x = {..._, body: i, method: t},
            y = await fetch(s, x), [d, v] = await da(n === "base64" ? Ap(y) : n === "json" ? y.json() : Ep(y)), g = {};
        return l && y.headers.forEach((c, u) => {
            g[u] = c
        }), v ? Promise.reject(l ? {error: v, headers: g} : v) : l ? {data: d, headers: g} : d
    }

    const mp = 300 * 1e3;

    async function xp(e) {
        const {data: r, headers: t, dataType: n = "json", ...a} = e, {cacheKey: i, cacheMaxAge: f, isZip: l} = e,
            _ = Date.now();
        if (i) {
            const x = await co.getItem(i);
            if (x && x.expireTime > _) return x.res
        }
        const o = l ? wp(r) : r, s = await ha({
            ...a,
            dataType: n,
            body: o && Mn.stringify(o),
            headers: {"content-type": "application/x-www-form-urlencoded; charset=UTF-8", ...t}
        });
        if (i) {
            const y = {expireTime: _ + (f || mp), res: s};
            co.setItem(i, y)
        }
        if (s.result === "success") return s;
        throw s
    }

    function Sp(e) {
        return new Promise((r, t) => {
            const {
                url: n,
                method: a = "GET",
                data: i,
                params: f,
                headers: l = {},
                xhrFields: _ = {},
                needResponseHeaders: o
            } = e, s = new XMLHttpRequest;
            s.addEventListener("readystatechange", () => {
                if (s.readyState === 4) {
                    const y = {};
                    o && s.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(d => {
                        const v = d.split(": "), g = v.shift(), c = v.join(": ");
                        y[g] = c
                    }), s.status === 200 ? r(o ? {
                        data: s.response,
                        headers: y
                    } : s.response) : t(o ? {error: s.response, headers: y} : s.response)
                }
            }), s.addEventListener("error", y => {
                t(y)
            });
            const x = f ? [n, Mn.stringify(f)].join("?") : n;
            s.open(a, x);
            for (const [y, d] of Object.entries(l)) s.setRequestHeader(y, d);
            for (const [y, d] of Object.entries(_)) s[y] = d;
            s.send(Dr(i) ? Mn.stringify(i) : i)
        })
    }

    async function Ep(e) {
        var r;
        return (r = e.headers.get("Content-Type")) != null && r.includes("GBK") ? e.blob().then(t => {
            const {promise: n, resolve: a, reject: i} = $l(), f = new FileReader;
            return f.onload = () => {
                a(f.result)
            }, f.onerror = l => {
                i(l)
            }, f.readAsText(t, "GBK"), n
        }) : await e.text()
    }

    async function Ap(e) {
        return e.blob().then(r => {
            const {promise: t, resolve: n, reject: a} = $l(), i = new FileReader;
            return i.onload = function (f) {
                var _;
                const l = (_ = f == null ? void 0 : f.target) == null ? void 0 : _.result;
                n(l)
            }, i.onerror = f => {
                a(f)
            }, i.readAsDataURL(r), t
        })
    }

    const Op = [{property: "name", enumerable: !1}, {property: "message", enumerable: !1}, {
            property: "stack",
            enumerable: !1
        }, {property: "code", enumerable: !0}, {property: "cause", enumerable: !1}, {property: "errors", enumerable: !1}],
        pa = new WeakSet, Rp = e => {
            pa.add(e);
            const r = e.toJSON();
            return pa.delete(e), r
        }, Ml = ({from: e, seen: r, to: t, forceEnumerable: n, maxDepth: a, depth: i, useToJSON: f, serialize: l}) => {
            if (t || (Array.isArray(e) ? t = [] : t = {}), r.push(e), i >= a) return t;
            if (f && typeof e.toJSON == "function" && !pa.has(e)) return Rp(e);
            const _ = o => Ml({
                from: o,
                seen: [...r],
                forceEnumerable: n,
                maxDepth: a,
                depth: i,
                useToJSON: f,
                serialize: l
            });
            for (const [o, s] of Object.entries(e)) {
                if (s && s instanceof Uint8Array && s.constructor.name === "Buffer") {
                    t[o] = "[object Buffer]";
                    continue
                }
                if (s !== null && typeof s == "object" && typeof s.pipe == "function") {
                    t[o] = "[object Stream]";
                    continue
                }
                if (typeof s != "function") {
                    if (!s || typeof s != "object") {
                        try {
                            t[o] = s
                        } catch {
                        }
                        continue
                    }
                    if (!r.includes(e[o])) {
                        i++, t[o] = _(e[o]);
                        continue
                    }
                    t[o] = "[Circular]"
                }
            }
            for (const {
                property: o,
                enumerable: s
            } of Op) e[o] !== void 0 && e[o] !== null && Object.defineProperty(t, o, {
                value: kp(e[o]) || Array.isArray(e[o]) ? _(e[o]) : e[o],
                enumerable: !0,
                configurable: !0,
                writable: !0
            });
            return t
        };

    function Cl(e, r = {}) {
        const {maxDepth: t = Number.POSITIVE_INFINITY, useToJSON: n = !0} = r;
        return typeof e == "object" && e !== null ? Ml({
            from: e,
            seen: [],
            forceEnumerable: !0,
            maxDepth: t,
            depth: 0,
            useToJSON: n,
            serialize: !0
        }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e
    }

    function kp(e) {
        return !!e && typeof e == "object" && typeof e.name == "string" && typeof e.message == "string" && typeof e.stack == "string"
    }

    const Y = [];
    for (let e = 0; e < 256; ++e) Y.push((e + 256).toString(16).slice(1));

    function Tp(e, r = 0) {
        return (Y[e[r + 0]] + Y[e[r + 1]] + Y[e[r + 2]] + Y[e[r + 3]] + "-" + Y[e[r + 4]] + Y[e[r + 5]] + "-" + Y[e[r + 6]] + Y[e[r + 7]] + "-" + Y[e[r + 8]] + Y[e[r + 9]] + "-" + Y[e[r + 10]] + Y[e[r + 11]] + Y[e[r + 12]] + Y[e[r + 13]] + Y[e[r + 14]] + Y[e[r + 15]]).toLowerCase()
    }

    let ya;
    const Ip = new Uint8Array(16);

    function Pp() {
        if (!ya) {
            if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            ya = crypto.getRandomValues.bind(crypto)
        }
        return ya(Ip)
    }

    const zl = {randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)};

    function Dp(e, r, t) {
        var a;
        if (zl.randomUUID && !e) return zl.randomUUID();
        e = e || {};
        const n = e.random ?? ((a = e.rng) == null ? void 0 : a.call(e)) ?? Pp();
        if (n.length < 16) throw new Error("Random bytes length must be >= 16");
        return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Tp(n)
    }

    const _a = "__$$__MESSAGE__$$__", $p = (e, r) => ({uuid: Dp(), key: e, data: r, [_a]: !0}), Mp = e => {
        let r = null;
        const t = {};

        function n() {
            Object.entries(t).length === 0 && (r == null || r(), r = null)
        }

        async function a(_, o) {
            var u;
            const s = Date.now(), x = await ((u = e.verifyMessageData) == null ? void 0 : u.call(e, o)) ?? o,
                y = await e.sendMessage($p(_, x)), d = Date.now();
            console.debug(`%cearth-wxt-message %ctime：${d - s} (${s}~${d}) %c结果:`, "border:1px solid #03b3b2;color:#03b3b2;padding: 1px; border-radius: 2px;", "margin-left:5px;color:#fd974f;", "color:#67c23a;", y);
            const {response: v} = y, {result: g, error: c} = v;
            if (c) throw c.message === "Extension context invalidated." ? new Error("请刷新页面重试") : c;
            return g
        }

        function i(_) {
            if (Object.entries(t).length || r) throw new Error("请勿重复订阅");
            return r || (r = e.addRootListener(async (o, ...s) => {
                if (o[_a] && o.uuid) {
                    const [x, y] = await da(_(o, ...s));
                    return {...o, response: {result: x, error: y && Cl(y)}}
                }
            })), r
        }

        function f(_, o) {
            if (r || (r = e.addRootListener(async (s, ...x) => {
                if (s[_a] && s.uuid) {
                    const y = t[s.key];
                    if (y) {
                        const [d, v] = await da(y(s, ...x));
                        return {...s, response: {result: d, error: v && Cl(v)}}
                    }
                }
            })), t[_] != null) throw new Error("请勿重复订阅");
            return t[_] = o, () => {
                delete t[_], n == null || n()
            }
        }

        function l() {
            Object.keys(t).forEach(_ => {
                delete t[_]
            }), n()
        }

        return {sendMessage: a, onMessage: f, onRootMessage: i, removeAllListeners: l}
    }, Cp = e => Mp({
        sendMessage(r) {
            return C.runtime.sendMessage({type: e.requestKey, message: r})
        }, addRootListener: r => {
            const t = Nr((n, a, i) => {
                n.type === e.requestKey && r(n.message, a).then(f => {
                    i(f)
                })
            });
            return () => {
                t()
            }
        }
    });

    class zp {
        constructor() {
            ka(this, "data", new Map);
            C.tabs.onRemoved.addListener(r => {
                this.data.has(r) && this.clear(r)
            })
        }

        get(r, t) {
            var n;
            if (this.data.has(r)) return (n = this.data.get(r)) == null ? void 0 : n.get(t)
        }

        set(r, t, n) {
            var a;
            this.data.has(r) || this.data.set(r, new Map), (a = this.data.get(r)) == null || a.set(t, n)
        }

        delete(r, t) {
            var n;
            this.data.has(r) && ((n = this.data.get(r)) == null || n.delete(t))
        }

        clear(r) {
            this.data.delete(r)
        }
    }

    const Np = () => {
        const e = new zp;
        return {
            get: e.get.bind(e),
            set: e.set.bind(e),
            delete: e.delete.bind(e),
            clear: e.clear.bind(e),
            getCurrent: (r, t) => e.get(r.tab.id, t),
            setCurrent: (r, t, n) => e.set(r.tab.id, t, n),
            deleteCurrent: (r, t) => e.delete(r.tab.id, t)
        }
    };

    class Fp {
        constructor() {
            ka(this, "data", new Map)
        }

        get(r) {
            return this.data.get(r)
        }

        set(r, t) {
            this.data.set(r, t)
        }

        delete(r) {
            this.data.delete(r)
        }

        clear() {
            this.data.clear()
        }
    }

    const Lp = e => {
            const {onRootMessage: r, sendMessage: t} = Cp(e);
            return {
                backgroundServiceRequest: (i => t(i.path, i.data)), onBackgroundServiceRequest: () => {
                    const i = {
                        browser: C,
                        tabData: Np(),
                        globalData: new Fp,
                        commonFetch: (...f) => ha(...f),
                        plwFetch: (...f) => xp(...f),
                        commonXhr: (...f) => Sp(...f),
                        getCurrentSenderInfo: f => f,
                        globalThis
                    };
                    r(async (f, l) => {
                        if (Dr(f) && f.key) {
                            const _ = oc(i, f.key);
                            if (_) switch (f.key) {
                                case"tabData.getCurrent":
                                case"tabData.setCurrent":
                                case"tabData.deleteCurrent":
                                case"getCurrentSenderInfo":
                                    return await zr(i, f.key, l, ...f.data || []);
                                default:
                                    return Er(_) ? await zr(i, f.key, ...f.data || []) : _
                            }
                        }
                    })
                }
            }
        }, Up = "earth", ga = e => `__$$${Up}_browser_extension$$__${e}__`, qp = {requestKey: ga("service_request_key")},
        Bp = {
            requestKey: ga("event_request_key"),
            responseKey: ga("event_response_key")
        }, {onBackgroundServiceRequest: jp} = Lp(qp), vr = "local:earth-plugin-popup-window-id";

    async function Nl() {
        const r = (await C.storage.local.get([vr]))[vr];
        if (r) {
            const t = await C.windows.getAll({windowTypes: ["popup"]});
            for (const n of t) if (n.id === r) return n
        }
    }

    async function Zp() {
        const e = await Nl();
        if (e) {
            C.windows.update(e.id, {focused: !0});
            return
        }
        C.windows.create({
            url: "https://kuajing-plv3.happyporsche.com/popup.html",
            type: "popup",
            left: 100,
            top: 100,
            width: 800,
            height: 520
        }, t => {
            t && C.storage.local.set({[vr]: t.id})
        })
    }

    const Hp = () => {
        C.action.onClicked.addListener(() => {
            Zp()
        }), C.windows.onRemoved.addListener(async () => {
            await Nl() || C.storage.local.set({[vr]: ""})
        })
    }, pt = "local:onBeforeRequestList";

    function Kp() {
        let e = [];
        const r = [{
            rule: "(yangkeduo|pinduoduo).com/(wechat_h5_pay_callback|transac_wechat_wapcallback).html",
            hasParams: !0,
            isPurchase: !0
        }];
        ha({url: "/open/plugin/getInjectRecordWebRequestHistoryRules", method: "GET"}).then(f => {
            e = f || []
        });

        function t(f) {
            const l = [...r, ...e];
            let _;
            try {
                if (!l || !l.length) return _;
                for (const o of l) if (new RegExp(o.rule, "i").test(f)) {
                    _ = o;
                    break
                }
            } catch {
                _ = void 0
            }
            return _
        }

        function n({details: f, url: l}) {
            C.storage.local.get(pt).then(_ => {
                const o = _[pt] || {}, s = (o == null ? void 0 : o[f.tabId]) || {};
                s[l] = Fc(f, ["tabId", "url"]), o[f.tabId] = s, C.storage.local.set({[pt]: o})
            })
        }

        function a({details: f, url: l}) {
            const _ = `purchaseOrderInfo-${f.tabId}`;
            C.storage.local.get(_).then(o => {
                Mc(o) || n({details: f, url: l})
            })
        }

        function i(f) {
            const l = t(f.url);
            if (!l) return;
            let _ = f.url;
            l.formatUrl ? _ = l.formatUrl : l.hasParams || (_ = f.url.replace(/\?.*/, "")), l.isPurchase ? a({
                details: f,
                url: _
            }) : n({details: f, url: _})
        }

        C.webRequest.onBeforeRequest.addListener(i, {
            urls: ["<all_urls>"],
            types: ["main_frame", "sub_frame"]
        }, ["requestBody"]), C.tabs.onRemoved.addListener(f => {
            C.storage.local.get(pt).then(l => {
                const _ = l[pt];
                _ && (_[f] && delete _[f], C.storage.local.set({[pt]: _}))
            })
        })
    }

    const Gp = Fe(() => {
        jp(), Lc(Bp), Hp(), Kp()
    });

    function py() {
    }

    function wr(e, ...r) {
    }

    const Wp = {
        debug: (...e) => wr(console.debug, ...e),
        log: (...e) => wr(console.log, ...e),
        warn: (...e) => wr(console.warn, ...e),
        error: (...e) => wr(console.error, ...e)
    };
    let va;
    try {
        va = Gp.main(), va instanceof Promise && console.warn("The background's main() function return a promise, but it must be synchronous")
    } catch (e) {
        throw Wp.error("The background crashed on startup!"), e
    }
    return va
})();
