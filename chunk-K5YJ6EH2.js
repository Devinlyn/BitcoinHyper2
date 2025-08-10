import {a as zo, b as yc} from "./chunk-ZU6Q67UT.js";
import {a as lt, b as je, c as yn, d as jt, e as Ct, f as Qr, g as es, h as ye, i as ts, j as pn, k as $n, l as bt, m as Do, n as Et, o as Yt, p as Wn, q as rs, r as gc} from "./chunk-XQAGV3NV.js";
import {a as ns, b as _c} from "./chunk-QV7AMSUB.js";
import {a as Co, b as xo, c as Po} from "./chunk-L4DL45FQ.js";
import {a as qn, b as Lo, d as Bo, l as Bt, m as Jr, p as et, s as gn, t as lc} from "./chunk-XMCF3TCT.js";
import {a as Zr, b as Uo, c as hc} from "./chunk-CP7YJKJV.js";
import {a as K, b as H, d as Qe, e as ce, f as Lt, g as Yr, i as ft, j as Xr, l as A} from "./chunk-QE6IBIJD.js";
function Ae(r, e) {
    let t = r % e;
    return t >= Fe ? t : e + t
}
function pe(r, e, t) {
    let n = r;
    for (; e-- > Fe; )
        n *= n,
        n %= t;
    return n
}
function Mo(r, e) {
    if (r === Fe)
        throw new Error("invert: expected non-zero number");
    if (e <= Fe)
        throw new Error("invert: expected positive modulus, got " + e);
    let t = Ae(r, e)
      , n = e
      , s = Fe
      , o = Oe
      , i = Oe
      , c = Fe;
    for (; t !== Fe; ) {
        let d = n / t
          , f = n % t
          , y = s - i * d
          , h = o - c * d;
        n = t,
        t = f,
        s = i,
        o = c,
        i = y,
        c = h
    }
    if (n !== Oe)
        throw new Error("invert: does not exist");
    return Ae(s, e)
}
function ss(r, e, t) {
    if (!r.eql(r.sqr(e), t))
        throw new Error("Cannot find square root")
}
function Go(r, e) {
    let t = (r.ORDER + Oe) / Vo
      , n = r.pow(e, t);
    return ss(r, n, e),
    n
}
function Rc(r, e) {
    let t = (r.ORDER - qo) / $o
      , n = r.mul(e, xt)
      , s = r.pow(n, t)
      , o = r.mul(e, s)
      , i = r.mul(r.mul(o, xt), s)
      , c = r.mul(o, r.sub(i, r.ONE));
    return ss(r, c, e),
    c
}
function bc(r) {
    let e = Ze(r)
      , t = Ho(r)
      , n = t(e, e.neg(e.ONE))
      , s = t(e, n)
      , o = t(e, e.neg(n))
      , i = (r + pc) / Wo;
    return (c, a) => {
        let d = c.pow(a, i)
          , f = c.mul(d, n)
          , y = c.mul(d, s)
          , h = c.mul(d, o)
          , l = c.eql(c.sqr(f), a)
          , _ = c.eql(c.sqr(y), a);
        d = c.cmov(d, f, l),
        f = c.cmov(h, y, _);
        let m = c.eql(c.sqr(f), a)
          , b = c.cmov(d, f, m);
        return ss(c, b, a),
        b
    }
}
function Ho(r) {
    if (r < Fo)
        throw new Error("sqrt is not defined for small field");
    let e = r - Oe
      , t = 0;
    for (; e % xt === Fe; )
        e /= xt,
        t++;
    let n = xt
      , s = Ze(r);
    for (; Ko(s, n) === 1; )
        if (n++ > 1e3)
            throw new Error("Cannot find square root: probably non-prime P");
    if (t === 1)
        return Go;
    let o = s.pow(n, e)
      , i = (e + Oe) / xt;
    return function(a, d) {
        if (a.is0(d))
            return d;
        if (Ko(a, d) !== 1)
            throw new Error("Cannot find square root");
        let f = t
          , y = a.mul(a.ONE, o)
          , h = a.pow(d, e)
          , l = a.pow(d, i);
        for (; !a.eql(h, a.ONE); ) {
            if (a.is0(h))
                return a.ZERO;
            let _ = 1
              , m = a.sqr(h);
            for (; !a.eql(m, a.ONE); )
                if (_++,
                m = a.sqr(m),
                _ === f)
                    throw new Error("Cannot find square root");
            let b = Oe << BigInt(f - _ - 1)
              , R = a.pow(y, b);
            f = _,
            y = a.sqr(R),
            h = a.mul(h, y),
            l = a.mul(l, R)
        }
        return l
    }
}
function Ec(r) {
    return r % Vo === Fo ? Go : r % $o === qo ? Rc : r % Wo === mc ? bc(r) : Ho(r)
}
function os(r) {
    let e = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "number",
        BITS: "number"
    }
      , t = Sc.reduce( (n, s) => (n[s] = "function",
    n), e);
    return Et(r, t),
    r
}
function Ac(r, e, t) {
    if (t < Fe)
        throw new Error("invalid exponent, negatives unsupported");
    if (t === Fe)
        return r.ONE;
    if (t === Oe)
        return e;
    let n = r.ONE
      , s = e;
    for (; t > Fe; )
        t & Oe && (n = r.mul(n, s)),
        s = r.sqr(s),
        t >>= Oe;
    return n
}
function mn(r, e, t=!1) {
    let n = new Array(e.length).fill(t ? r.ZERO : void 0)
      , s = e.reduce( (i, c, a) => r.is0(c) ? i : (n[a] = i,
    r.mul(i, c)), r.ONE)
      , o = r.inv(s);
    return e.reduceRight( (i, c, a) => r.is0(c) ? i : (n[a] = r.mul(i, n[a]),
    r.mul(i, c)), o),
    n
}
function Ko(r, e) {
    let t = (r.ORDER - Oe) / xt
      , n = r.pow(e, t)
      , s = r.eql(n, r.ONE)
      , o = r.eql(n, r.ZERO)
      , i = r.eql(n, r.neg(r.ONE));
    if (!s && !o && !i)
        throw new Error("invalid Legendre symbol result");
    return s ? 1 : o ? 0 : -1
}
function Gn(r, e) {
    e !== void 0 && Lo(e);
    let t = e !== void 0 ? e : r.toString(2).length
      , n = Math.ceil(t / 8);
    return {
        nBitLength: t,
        nByteLength: n
    }
}
function Ze(r, e, t=!1, n={}) {
    if (r <= Fe)
        throw new Error("invalid field: expected ORDER > 0, got " + r);
    let s, o, i = !1, c;
    if (typeof e == "object" && e != null) {
        if (n.sqrt || t)
            throw new Error("cannot specify opts in two arguments");
        let h = e;
        h.BITS && (s = h.BITS),
        h.sqrt && (o = h.sqrt),
        typeof h.isLE == "boolean" && (t = h.isLE),
        typeof h.modFromBytes == "boolean" && (i = h.modFromBytes),
        c = h.allowedLengths
    } else
        typeof e == "number" && (s = e),
        n.sqrt && (o = n.sqrt);
    let {nBitLength: a, nByteLength: d} = Gn(r, s);
    if (d > 2048)
        throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let f, y = Object.freeze({
        ORDER: r,
        isLE: t,
        BITS: a,
        BYTES: d,
        MASK: bt(a),
        ZERO: Fe,
        ONE: Oe,
        allowedLengths: c,
        create: h => Ae(h, r),
        isValid: h => {
            if (typeof h != "bigint")
                throw new Error("invalid field element: expected bigint, got " + typeof h);
            return Fe <= h && h < r
        }
        ,
        is0: h => h === Fe,
        isValidNot0: h => !y.is0(h) && y.isValid(h),
        isOdd: h => (h & Oe) === Oe,
        neg: h => Ae(-h, r),
        eql: (h, l) => h === l,
        sqr: h => Ae(h * h, r),
        add: (h, l) => Ae(h + l, r),
        sub: (h, l) => Ae(h - l, r),
        mul: (h, l) => Ae(h * l, r),
        pow: (h, l) => Ac(y, h, l),
        div: (h, l) => Ae(h * Mo(l, r), r),
        sqrN: h => h * h,
        addN: (h, l) => h + l,
        subN: (h, l) => h - l,
        mulN: (h, l) => h * l,
        inv: h => Mo(h, r),
        sqrt: o || (h => (f || (f = Ec(r)),
        f(y, h))),
        toBytes: h => t ? es(h, d) : Qr(h, d),
        fromBytes: (h, l=!0) => {
            if (c) {
                if (!c.includes(h.length) || h.length > d)
                    throw new Error("Field.fromBytes: expected " + c + " bytes, got " + h.length);
                let m = new Uint8Array(d);
                m.set(h, t ? 0 : m.length - h.length),
                h = m
            }
            if (h.length !== d)
                throw new Error("Field.fromBytes: expected " + d + " bytes, got " + h.length);
            let _ = t ? Ct(h) : jt(h);
            if (i && (_ = Ae(_, r)),
            !l && !y.isValid(_))
                throw new Error("invalid field element: outside of range 0..ORDER");
            return _
        }
        ,
        invertBatch: h => mn(y, h),
        cmov: (h, l, _) => _ ? l : h
    });
    return Object.freeze(y)
}
function Yo(r) {
    if (typeof r != "bigint")
        throw new Error("field order must be bigint");
    let e = r.toString(2).length;
    return Math.ceil(e / 8)
}
function is(r) {
    let e = Yo(r);
    return e + Math.ceil(e / 2)
}
function as(r, e, t=!1) {
    let n = r.length
      , s = Yo(e)
      , o = is(e);
    if (n < 16 || n < o || n > 1024)
        throw new Error("expected " + o + "-1024 bytes of input, got " + n);
    let i = t ? Ct(r) : jt(r)
      , c = Ae(i, e - Oe) + Oe;
    return t ? es(c, s) : Qr(c, s)
}
var Fe, Oe, xt, Fo, Vo, qo, pc, $o, mc, Wo, jo, Sc, Xt = ce( () => {
    "use strict";
    Wn();
    Fe = BigInt(0),
    Oe = BigInt(1),
    xt = BigInt(2),
    Fo = BigInt(3),
    Vo = BigInt(4),
    qo = BigInt(5),
    pc = BigInt(7),
    $o = BigInt(8),
    mc = BigInt(9),
    Wo = BigInt(16);
    jo = (r, e) => (Ae(r, e) & Oe) === Oe,
    Sc = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"]
}
);
function Rn(r, e) {
    let t = e.negate();
    return r ? t : e
}
function ht(r, e) {
    let t = mn(r.Fp, e.map(n => n.Z));
    return e.map( (n, s) => r.fromAffine(n.toAffine(t[s])))
}
function Qo(r, e) {
    if (!Number.isSafeInteger(r) || r <= 0 || r > e)
        throw new Error("invalid window size, expected [1.." + e + "], got W=" + r)
}
function cs(r, e) {
    Qo(r, e);
    let t = Math.ceil(e / r) + 1
      , n = 2 ** (r - 1)
      , s = 2 ** r
      , o = bt(r)
      , i = BigInt(r);
    return {
        windows: t,
        windowSize: n,
        mask: o,
        maxNumber: s,
        shiftBy: i
    }
}
function Xo(r, e, t) {
    let {windowSize: n, mask: s, maxNumber: o, shiftBy: i} = t
      , c = Number(r & s)
      , a = r >> i;
    c > n && (c -= o,
    a += Pt);
    let d = e * n
      , f = d + Math.abs(c) - 1
      , y = c === 0
      , h = c < 0
      , l = e % 2 !== 0;
    return {
        nextN: a,
        offset: f,
        isZero: y,
        isNeg: h,
        isNegF: l,
        offsetF: d
    }
}
function wc(r, e) {
    if (!Array.isArray(r))
        throw new Error("array expected");
    r.forEach( (t, n) => {
        if (!(t instanceof e))
            throw new Error("invalid point at index " + n)
    }
    )
}
function Ic(r, e) {
    if (!Array.isArray(r))
        throw new Error("array of scalars expected");
    r.forEach( (t, n) => {
        if (!e.isValid(t))
            throw new Error("invalid scalar at index " + n)
    }
    )
}
function ds(r) {
    return ei.get(r) || 1
}
function Zo(r) {
    if (r !== Zt)
        throw new Error("invalid wNAF")
}
function ti(r, e, t, n) {
    let s = e
      , o = r.ZERO
      , i = r.ZERO;
    for (; t > Zt || n > Zt; )
        t & Pt && (o = o.add(s)),
        n & Pt && (i = i.add(s)),
        s = s.double(),
        t >>= Pt,
        n >>= Pt;
    return {
        p1: o,
        p2: i
    }
}
function Hn(r, e, t, n) {
    wc(t, r),
    Ic(n, e);
    let s = t.length
      , o = n.length;
    if (s !== o)
        throw new Error("arrays of points and scalars must have equal length");
    let i = r.ZERO
      , c = $n(BigInt(s))
      , a = 1;
    c > 12 ? a = c - 3 : c > 4 ? a = c - 2 : c > 0 && (a = 2);
    let d = bt(a)
      , f = new Array(Number(d) + 1).fill(i)
      , y = Math.floor((e.BITS - 1) / a) * a
      , h = i;
    for (let l = y; l >= 0; l -= a) {
        f.fill(i);
        for (let m = 0; m < o; m++) {
            let b = n[m]
              , R = Number(b >> BigInt(l) & d);
            f[R] = f[R].add(t[m])
        }
        let _ = i;
        for (let m = f.length - 1, b = i; m > 0; m--)
            b = b.add(f[m]),
            _ = _.add(b);
        if (h = h.add(_),
        l !== 0)
            for (let m = 0; m < a; m++)
                h = h.double()
    }
    return h
}
function Jo(r, e, t) {
    if (e) {
        if (e.ORDER !== r)
            throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
        return os(e),
        e
    } else
        return Ze(r, {
            isLE: t
        })
}
function jn(r, e, t={}, n) {
    if (n === void 0 && (n = r === "edwards"),
    !e || typeof e != "object")
        throw new Error(`expected valid ${r} CURVE object`);
    for (let a of ["p", "n", "h"]) {
        let d = e[a];
        if (!(typeof d == "bigint" && d > Zt))
            throw new Error(`CURVE.${a} must be positive bigint`)
    }
    let s = Jo(e.p, t.Fp, n)
      , o = Jo(e.n, t.Fn, n)
      , c = ["Gx", "Gy", "a", r === "weierstrass" ? "b" : "d"];
    for (let a of c)
        if (!s.isValid(e[a]))
            throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
    return e = Object.freeze(Object.assign({}, e)),
    {
        CURVE: e,
        Fp: s,
        Fn: o
    }
}
var Zt, Pt, us, ei, Jt, fs = ce( () => {
    "use strict";
    Wn();
    Xt();
    Zt = BigInt(0),
    Pt = BigInt(1);
    us = new WeakMap,
    ei = new WeakMap;
    Jt = class {
        constructor(e, t) {
            this.BASE = e.BASE,
            this.ZERO = e.ZERO,
            this.Fn = e.Fn,
            this.bits = t
        }
        _unsafeLadder(e, t, n=this.ZERO) {
            let s = e;
            for (; t > Zt; )
                t & Pt && (n = n.add(s)),
                s = s.double(),
                t >>= Pt;
            return n
        }
        precomputeWindow(e, t) {
            let {windows: n, windowSize: s} = cs(t, this.bits)
              , o = []
              , i = e
              , c = i;
            for (let a = 0; a < n; a++) {
                c = i,
                o.push(c);
                for (let d = 1; d < s; d++)
                    c = c.add(i),
                    o.push(c);
                i = c.double()
            }
            return o
        }
        wNAF(e, t, n) {
            if (!this.Fn.isValid(n))
                throw new Error("invalid scalar");
            let s = this.ZERO
              , o = this.BASE
              , i = cs(e, this.bits);
            for (let c = 0; c < i.windows; c++) {
                let {nextN: a, offset: d, isZero: f, isNeg: y, isNegF: h, offsetF: l} = Xo(n, c, i);
                n = a,
                f ? o = o.add(Rn(h, t[l])) : s = s.add(Rn(y, t[d]))
            }
            return Zo(n),
            {
                p: s,
                f: o
            }
        }
        wNAFUnsafe(e, t, n, s=this.ZERO) {
            let o = cs(e, this.bits);
            for (let i = 0; i < o.windows && n !== Zt; i++) {
                let {nextN: c, offset: a, isZero: d, isNeg: f} = Xo(n, i, o);
                if (n = c,
                !d) {
                    let y = t[a];
                    s = s.add(f ? y.negate() : y)
                }
            }
            return Zo(n),
            s
        }
        getPrecomputes(e, t, n) {
            let s = us.get(t);
            return s || (s = this.precomputeWindow(t, e),
            e !== 1 && (typeof n == "function" && (s = n(s)),
            us.set(t, s))),
            s
        }
        cached(e, t, n) {
            let s = ds(e);
            return this.wNAF(s, this.getPrecomputes(s, e, n), t)
        }
        unsafe(e, t, n, s) {
            let o = ds(e);
            return o === 1 ? this._unsafeLadder(e, t, s) : this.wNAFUnsafe(o, this.getPrecomputes(o, e, n), t, s)
        }
        createCache(e, t) {
            Qo(t, this.bits),
            ei.set(e, t),
            us.delete(e)
        }
        hasCache(e) {
            return ds(e) !== 1
        }
    }
}
);
function Nc(r, e, t, n) {
    let s = r.sqr(t)
      , o = r.sqr(n)
      , i = r.add(r.mul(e.a, s), o)
      , c = r.add(r.ONE, r.mul(e.d, r.mul(s, o)));
    return r.eql(i, c)
}
function kc(r, e={}) {
    let t = jn("edwards", r, e, e.FpFnLE)
      , {Fp: n, Fn: s} = t
      , o = t.CURVE
      , {h: i} = o;
    Et(e, {}, {
        uvRatio: "function"
    });
    let c = ls << BigInt(s.BYTES * 8) - Ne
      , a = b => n.create(b)
      , d = e.uvRatio || ( (b, R) => {
        try {
            return {
                isValid: !0,
                value: n.sqrt(n.div(b, R))
            }
        } catch {
            return {
                isValid: !1,
                value: St
            }
        }
    }
    );
    if (!Nc(n, o, o.Gx, o.Gy))
        throw new Error("bad curve params: generator point");
    function f(b, R, T=!1) {
        let N = T ? Ne : St;
        return pn("coordinate " + b, R, N, c),
        R
    }
    function y(b) {
        if (!(b instanceof _))
            throw new Error("ExtendedPoint expected")
    }
    let h = Yt( (b, R) => {
        let {X: T, Y: N, Z: D} = b
          , J = b.is0();
        R == null && (R = J ? Oc : n.inv(D));
        let ee = a(T * R)
          , te = a(N * R)
          , ne = n.mul(D, R);
        if (J)
            return {
                x: St,
                y: Ne
            };
        if (ne !== Ne)
            throw new Error("invZ was invalid");
        return {
            x: ee,
            y: te
        }
    }
    )
      , l = Yt(b => {
        let {a: R, d: T} = o;
        if (b.is0())
            throw new Error("bad point: ZERO");
        let {X: N, Y: D, Z: J, T: ee} = b
          , te = a(N * N)
          , ne = a(D * D)
          , O = a(J * J)
          , q = a(O * O)
          , j = a(te * R)
          , $ = a(O * a(j + ne))
          , w = a(q + a(T * a(te * ne)));
        if ($ !== w)
            throw new Error("bad point: equation left != right (1)");
        let E = a(N * D)
          , S = a(J * ee);
        if (E !== S)
            throw new Error("bad point: equation left != right (2)");
        return !0
    }
    );
    class _ {
        constructor(R, T, N, D) {
            this.X = f("x", R),
            this.Y = f("y", T),
            this.Z = f("z", N, !0),
            this.T = f("t", D),
            Object.freeze(this)
        }
        static CURVE() {
            return o
        }
        static fromAffine(R) {
            if (R instanceof _)
                throw new Error("extended point not allowed");
            let {x: T, y: N} = R || {};
            return f("x", T),
            f("y", N),
            new _(T,N,Ne,a(T * N))
        }
        static fromBytes(R, T=!1) {
            let N = n.BYTES
              , {a: D, d: J} = o;
            R = ts(je(R, N, "point")),
            lt(T, "zip215");
            let ee = ts(R)
              , te = R[N - 1];
            ee[N - 1] = te & -129;
            let ne = Ct(ee)
              , O = T ? c : n.ORDER;
            pn("point.y", ne, St, O);
            let q = a(ne * ne)
              , j = a(q - Ne)
              , $ = a(J * q - D)
              , {isValid: w, value: E} = d(j, $);
            if (!w)
                throw new Error("bad point: invalid y coordinate");
            let S = (E & Ne) === Ne
              , v = (te & 128) !== 0;
            if (!T && E === St && v)
                throw new Error("bad point: x=0 and x_0=1");
            return v !== S && (E = a(-E)),
            _.fromAffine({
                x: E,
                y: ne
            })
        }
        static fromHex(R, T=!1) {
            return _.fromBytes(ye("point", R), T)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        precompute(R=8, T=!0) {
            return m.createCache(this, R),
            T || this.multiply(ls),
            this
        }
        assertValidity() {
            l(this)
        }
        equals(R) {
            y(R);
            let {X: T, Y: N, Z: D} = this
              , {X: J, Y: ee, Z: te} = R
              , ne = a(T * te)
              , O = a(J * D)
              , q = a(N * te)
              , j = a(ee * D);
            return ne === O && q === j
        }
        is0() {
            return this.equals(_.ZERO)
        }
        negate() {
            return new _(a(-this.X),this.Y,this.Z,a(-this.T))
        }
        double() {
            let {a: R} = o
              , {X: T, Y: N, Z: D} = this
              , J = a(T * T)
              , ee = a(N * N)
              , te = a(ls * a(D * D))
              , ne = a(R * J)
              , O = T + N
              , q = a(a(O * O) - J - ee)
              , j = ne + ee
              , $ = j - te
              , w = ne - ee
              , E = a(q * $)
              , S = a(j * w)
              , v = a(q * w)
              , P = a($ * j);
            return new _(E,S,P,v)
        }
        add(R) {
            y(R);
            let {a: T, d: N} = o
              , {X: D, Y: J, Z: ee, T: te} = this
              , {X: ne, Y: O, Z: q, T: j} = R
              , $ = a(D * ne)
              , w = a(J * O)
              , E = a(te * N * j)
              , S = a(ee * q)
              , v = a((D + J) * (ne + O) - $ - w)
              , P = S - E
              , V = S + E
              , z = a(w - T * $)
              , M = a(v * P)
              , G = a(V * z)
              , Y = a(v * z)
              , be = a(P * V);
            return new _(M,G,be,Y)
        }
        subtract(R) {
            return this.add(R.negate())
        }
        multiply(R) {
            if (!s.isValidNot0(R))
                throw new Error("invalid scalar: expected 1 <= sc < curve.n");
            let {p: T, f: N} = m.cached(this, R, D => ht(_, D));
            return ht(_, [T, N])[0]
        }
        multiplyUnsafe(R, T=_.ZERO) {
            if (!s.isValid(R))
                throw new Error("invalid scalar: expected 0 <= sc < curve.n");
            return R === St ? _.ZERO : this.is0() || R === Ne ? this : m.unsafe(this, R, N => ht(_, N), T)
        }
        isSmallOrder() {
            return this.multiplyUnsafe(i).is0()
        }
        isTorsionFree() {
            return m.unsafe(this, o.n).is0()
        }
        toAffine(R) {
            return h(this, R)
        }
        clearCofactor() {
            return i === Ne ? this : this.multiplyUnsafe(i)
        }
        toBytes() {
            let {x: R, y: T} = this.toAffine()
              , N = n.toBytes(T);
            return N[N.length - 1] |= R & Ne ? 128 : 0,
            N
        }
        toHex() {
            return Bt(this.toBytes())
        }
        toString() {
            return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`
        }
        get ex() {
            return this.X
        }
        get ey() {
            return this.Y
        }
        get ez() {
            return this.Z
        }
        get et() {
            return this.T
        }
        static normalizeZ(R) {
            return ht(_, R)
        }
        static msm(R, T) {
            return Hn(_, s, R, T)
        }
        _setWindowSize(R) {
            this.precompute(R)
        }
        toRawBytes() {
            return this.toBytes()
        }
    }
    _.BASE = new _(o.Gx,o.Gy,Ne,a(o.Gx * o.Gy)),
    _.ZERO = new _(St,Ne,Ne,St),
    _.Fp = n,
    _.Fn = s;
    let m = new Jt(_,s.BITS);
    return _.BASE.precompute(8),
    _
}
function Tc(r, e, t={}) {
    if (typeof e != "function")
        throw new Error('"hash" function param is required');
    Et(t, {}, {
        adjustScalarBytes: "function",
        randomBytes: "function",
        domain: "function",
        prehash: "function",
        mapToCurve: "function"
    });
    let {prehash: n} = t
      , {BASE: s, Fp: o, Fn: i} = r
      , c = t.randomBytes || gn
      , a = t.adjustScalarBytes || (O => O)
      , d = t.domain || ( (O, q, j) => {
        if (lt(j, "phflag"),
        q.length || j)
            throw new Error("Contexts/pre-hash are not supported");
        return O
    }
    );
    function f(O) {
        return i.create(Ct(O))
    }
    function y(O) {
        let q = N.secretKey;
        O = ye("private key", O, q);
        let j = ye("hashed private key", e(O), 2 * q)
          , $ = a(j.slice(0, q))
          , w = j.slice(q, 2 * q)
          , E = f($);
        return {
            head: $,
            prefix: w,
            scalar: E
        }
    }
    function h(O) {
        let {head: q, prefix: j, scalar: $} = y(O)
          , w = s.multiply($)
          , E = w.toBytes();
        return {
            head: q,
            prefix: j,
            scalar: $,
            point: w,
            pointBytes: E
        }
    }
    function l(O) {
        return h(O).pointBytes
    }
    function _(O=Uint8Array.of(), ...q) {
        let j = et(...q);
        return f(e(d(j, ye("context", O), !!n)))
    }
    function m(O, q, j={}) {
        O = ye("message", O),
        n && (O = n(O));
        let {prefix: $, scalar: w, pointBytes: E} = h(q)
          , S = _(j.context, $, O)
          , v = s.multiply(S).toBytes()
          , P = _(j.context, v, E, O)
          , V = i.create(S + P * w);
        if (!i.isValid(V))
            throw new Error("sign failed: invalid s");
        let z = et(v, i.toBytes(V));
        return je(z, N.signature, "result")
    }
    let b = {
        zip215: !0
    };
    function R(O, q, j, $=b) {
        let {context: w, zip215: E} = $
          , S = N.signature;
        O = ye("signature", O, S),
        q = ye("message", q),
        j = ye("publicKey", j, N.publicKey),
        E !== void 0 && lt(E, "zip215"),
        n && (q = n(q));
        let v = S / 2, P = O.subarray(0, v), V = Ct(O.subarray(v, S)), z, M, G;
        try {
            z = r.fromBytes(j, E),
            M = r.fromBytes(P, E),
            G = s.multiplyUnsafe(V)
        } catch {
            return !1
        }
        if (!E && z.isSmallOrder())
            return !1;
        let Y = _(w, M.toBytes(), z.toBytes(), q);
        return M.add(z.multiplyUnsafe(Y)).subtract(G).clearCofactor().is0()
    }
    let T = o.BYTES
      , N = {
        secretKey: T,
        publicKey: T,
        signature: 2 * T,
        seed: T
    };
    function D(O=c(N.seed)) {
        return je(O, N.seed, "seed")
    }
    function J(O) {
        let q = ne.randomSecretKey(O);
        return {
            secretKey: q,
            publicKey: l(q)
        }
    }
    function ee(O) {
        return qn(O) && O.length === i.BYTES
    }
    function te(O, q) {
        try {
            return !!r.fromBytes(O, q)
        } catch {
            return !1
        }
    }
    let ne = {
        getExtendedPublicKey: h,
        randomSecretKey: D,
        isValidSecretKey: ee,
        isValidPublicKey: te,
        toMontgomery(O) {
            let {y: q} = r.fromBytes(O)
              , j = N.publicKey
              , $ = j === 32;
            if (!$ && j !== 57)
                throw new Error("only defined for 25519 and 448");
            let w = $ ? o.div(Ne + q, Ne - q) : o.div(q - Ne, q + Ne);
            return o.toBytes(w)
        },
        toMontgomeryPriv(O) {
            let q = N.secretKey;
            je(O, q);
            let j = e(O.subarray(0, q));
            return a(j).subarray(0, q)
        },
        randomPrivateKey: D,
        precompute(O=8, q=r.BASE) {
            return q.precompute(O, !1)
        }
    };
    return Object.freeze({
        keygen: J,
        getPublicKey: l,
        sign: m,
        verify: R,
        utils: ne,
        Point: r,
        lengths: N
    })
}
function vc(r) {
    let e = {
        a: r.a,
        d: r.d,
        p: r.Fp.ORDER,
        n: r.n,
        h: r.h,
        Gx: r.Gx,
        Gy: r.Gy
    }
      , t = r.Fp
      , n = Ze(e.n, r.nBitLength, !0)
      , s = {
        Fp: t,
        Fn: n,
        uvRatio: r.uvRatio
    }
      , o = {
        randomBytes: r.randomBytes,
        adjustScalarBytes: r.adjustScalarBytes,
        domain: r.domain,
        prehash: r.prehash,
        mapToCurve: r.mapToCurve
    };
    return {
        CURVE: e,
        curveOpts: s,
        hash: r.hash,
        eddsaOpts: o
    }
}
function Lc(r, e) {
    let t = e.Point;
    return Object.assign({}, e, {
        ExtendedPoint: t,
        CURVE: r,
        nBitLength: t.Fn.BITS,
        nByteLength: t.Fn.BYTES
    })
}
function ni(r) {
    let {CURVE: e, curveOpts: t, hash: n, eddsaOpts: s} = vc(r)
      , o = kc(e, t)
      , i = Tc(o, n, s);
    return Lc(r, i)
}
var St, Ne, ls, Oc, ri = ce( () => {
    "use strict";
    Wn();
    fs();
    Xt();
    St = BigInt(0),
    Ne = BigInt(1),
    ls = BigInt(2),
    Oc = BigInt(8)
}
);
function Pc(r) {
    let e = BigInt(10)
      , t = BigInt(20)
      , n = BigInt(40)
      , s = BigInt(80)
      , o = hs
      , c = r * r % o * r % o
      , a = pe(c, si, o) * c % o
      , d = pe(a, Bc, o) * r % o
      , f = pe(d, Cc, o) * d % o
      , y = pe(f, e, o) * f % o
      , h = pe(y, t, o) * y % o
      , l = pe(h, n, o) * h % o
      , _ = pe(l, s, o) * l % o
      , m = pe(_, s, o) * l % o
      , b = pe(m, e, o) * f % o;
    return {
        pow_p_5_8: pe(b, si, o) * r % o,
        b2: c
    }
}
function Dc(r) {
    return r[0] &= 248,
    r[31] &= 127,
    r[31] |= 64,
    r
}
function Uc(r, e) {
    let t = hs
      , n = Ae(e * e * e, t)
      , s = Ae(n * n * e, t)
      , o = Pc(r * s).pow_p_5_8
      , i = Ae(r * n * o, t)
      , c = Ae(e * i * i, t)
      , a = i
      , d = Ae(i * oi, t)
      , f = c === r
      , y = c === Ae(-r, t)
      , h = c === Ae(-r * oi, t);
    return f && (i = a),
    (y || h) && (i = d),
    jo(i, t) && (i = Ae(-i, t)),
    {
        isValid: f || y,
        value: i
    }
}
var Bc, si, ky, Cc, xc, hs, ii, oi, zc, Mc, Dt, ai = ce( () => {
    "use strict";
    Po();
    ri();
    Xt();
    Bc = BigInt(1),
    si = BigInt(2),
    ky = BigInt(3),
    Cc = BigInt(5),
    xc = BigInt(8),
    hs = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),
    ii = {
        p: hs,
        n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
        h: xc,
        a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
        d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
        Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
        Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
    };
    oi = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
    zc = Ze(ii.p, {
        isLE: !0
    }),
    Mc = H(K({}, ii), {
        Fp: zc,
        hash: xo,
        adjustScalarBytes: Dc,
        uvRatio: Uc
    }),
    Dt = ni(Mc)
}
);
var ui = Lt( (Ly, ci) => {
    "use strict";
    var Yn = hc().Buffer;
    function Kc(r) {
        if (r.length >= 255)
            throw new TypeError("Alphabet too long");
        for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
            e[t] = 255;
        for (var n = 0; n < r.length; n++) {
            var s = r.charAt(n)
              , o = s.charCodeAt(0);
            if (e[o] !== 255)
                throw new TypeError(s + " is ambiguous");
            e[o] = n
        }
        var i = r.length
          , c = r.charAt(0)
          , a = Math.log(i) / Math.log(256)
          , d = Math.log(256) / Math.log(i);
        function f(l) {
            if ((Array.isArray(l) || l instanceof Uint8Array) && (l = Yn.from(l)),
            !Yn.isBuffer(l))
                throw new TypeError("Expected Buffer");
            if (l.length === 0)
                return "";
            for (var _ = 0, m = 0, b = 0, R = l.length; b !== R && l[b] === 0; )
                b++,
                _++;
            for (var T = (R - b) * d + 1 >>> 0, N = new Uint8Array(T); b !== R; ) {
                for (var D = l[b], J = 0, ee = T - 1; (D !== 0 || J < m) && ee !== -1; ee--,
                J++)
                    D += 256 * N[ee] >>> 0,
                    N[ee] = D % i >>> 0,
                    D = D / i >>> 0;
                if (D !== 0)
                    throw new Error("Non-zero carry");
                m = J,
                b++
            }
            for (var te = T - m; te !== T && N[te] === 0; )
                te++;
            for (var ne = c.repeat(_); te < T; ++te)
                ne += r.charAt(N[te]);
            return ne
        }
        function y(l) {
            if (typeof l != "string")
                throw new TypeError("Expected String");
            if (l.length === 0)
                return Yn.alloc(0);
            for (var _ = 0, m = 0, b = 0; l[_] === c; )
                m++,
                _++;
            for (var R = (l.length - _) * a + 1 >>> 0, T = new Uint8Array(R); _ < l.length; ) {
                var N = l.charCodeAt(_);
                if (N > 255)
                    return;
                var D = e[N];
                if (D === 255)
                    return;
                for (var J = 0, ee = R - 1; (D !== 0 || J < b) && ee !== -1; ee--,
                J++)
                    D += i * T[ee] >>> 0,
                    T[ee] = D % 256 >>> 0,
                    D = D / 256 >>> 0;
                if (D !== 0)
                    throw new Error("Non-zero carry");
                b = J,
                _++
            }
            for (var te = R - b; te !== R && T[te] === 0; )
                te++;
            var ne = Yn.allocUnsafe(m + (R - te));
            ne.fill(0, 0, m);
            for (var O = m; te !== R; )
                ne[O++] = T[te++];
            return ne
        }
        function h(l) {
            var _ = y(l);
            if (_)
                return _;
            throw new Error("Non-base" + i + " character")
        }
        return {
            encode: f,
            decodeUnsafe: y,
            decode: h
        }
    }
    ci.exports = Kc
}
);
var _s = Lt( (By, di) => {
    "use strict";
    var Fc = ui()
      , Vc = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    di.exports = Fc(Vc)
}
);
var fi = {};
Yr(fi, {
    TextDecoder: () => Jn,
    TextEncoder: () => Qn
});
function _t(r, e, t) {
    return e <= r && r <= t
}
function er(r) {
    if (r === void 0)
        return {};
    if (r === Object(r))
        return r;
    throw TypeError("Could not convert argument to dictionary")
}
function qc(r) {
    for (var e = String(r), t = e.length, n = 0, s = []; n < t; ) {
        var o = e.charCodeAt(n);
        if (o < 55296 || o > 57343)
            s.push(o);
        else if (56320 <= o && o <= 57343)
            s.push(65533);
        else if (55296 <= o && o <= 56319)
            if (n === t - 1)
                s.push(65533);
            else {
                var i = r.charCodeAt(n + 1);
                if (56320 <= i && i <= 57343) {
                    var c = o & 1023
                      , a = i & 1023;
                    s.push(65536 + (c << 10) + a),
                    n += 1
                } else
                    s.push(65533)
            }
        n += 1
    }
    return s
}
function $c(r) {
    for (var e = "", t = 0; t < r.length; ++t) {
        var n = r[t];
        n <= 65535 ? e += String.fromCharCode(n) : (n -= 65536,
        e += String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320))
    }
    return e
}
function ys(r) {
    this.tokens = [].slice.call(r)
}
function gs(r, e) {
    if (r)
        throw TypeError("Decoder error");
    return e || 65533
}
function Wc() {}
function Gc() {}
function Jn(r, e) {
    if (!(this instanceof Jn))
        return new Jn(r,e);
    if (r = r !== void 0 ? String(r).toLowerCase() : Zn,
    r !== Zn)
        throw new Error("Encoding not supported. Only utf-8 is supported");
    e = er(e),
    this._streaming = !1,
    this._BOMseen = !1,
    this._decoder = null,
    this._fatal = !!e.fatal,
    this._ignoreBOM = !!e.ignoreBOM,
    Object.defineProperty(this, "encoding", {
        value: "utf-8"
    }),
    Object.defineProperty(this, "fatal", {
        value: this._fatal
    }),
    Object.defineProperty(this, "ignoreBOM", {
        value: this._ignoreBOM
    })
}
function Qn(r, e) {
    if (!(this instanceof Qn))
        return new Qn(r,e);
    if (r = r !== void 0 ? String(r).toLowerCase() : Zn,
    r !== Zn)
        throw new Error("Encoding not supported. Only utf-8 is supported");
    e = er(e),
    this._streaming = !1,
    this._encoder = null,
    this._options = {
        fatal: !!e.fatal
    },
    Object.defineProperty(this, "encoding", {
        value: "utf-8"
    })
}
function Hc(r) {
    var e = r.fatal
      , t = 0
      , n = 0
      , s = 0
      , o = 128
      , i = 191;
    this.handler = function(c, a) {
        if (a === Xn && s !== 0)
            return s = 0,
            gs(e);
        if (a === Xn)
            return Qt;
        if (s === 0) {
            if (_t(a, 0, 127))
                return a;
            if (_t(a, 194, 223))
                s = 1,
                t = a - 192;
            else if (_t(a, 224, 239))
                a === 224 && (o = 160),
                a === 237 && (i = 159),
                s = 2,
                t = a - 224;
            else if (_t(a, 240, 244))
                a === 240 && (o = 144),
                a === 244 && (i = 143),
                s = 3,
                t = a - 240;
            else
                return gs(e);
            return t = t << 6 * s,
            null
        }
        if (!_t(a, o, i))
            return t = s = n = 0,
            o = 128,
            i = 191,
            c.prepend(a),
            gs(e);
        if (o = 128,
        i = 191,
        n += 1,
        t += a - 128 << 6 * (s - n),
        n !== s)
            return null;
        var d = t;
        return t = s = n = 0,
        d
    }
}
function jc(r) {
    var e = r.fatal;
    this.handler = function(t, n) {
        if (n === Xn)
            return Qt;
        if (_t(n, 0, 127))
            return n;
        var s, o;
        _t(n, 128, 2047) ? (s = 1,
        o = 192) : _t(n, 2048, 65535) ? (s = 2,
        o = 224) : _t(n, 65536, 1114111) && (s = 3,
        o = 240);
        for (var i = [(n >> 6 * s) + o]; s > 0; ) {
            var c = n >> 6 * (s - 1);
            i.push(128 | c & 63),
            s -= 1
        }
        return i
    }
}
var Xn, Qt, Zn, li = ce( () => {
    "use strict";
    Xn = -1;
    ys.prototype = {
        endOfStream: function() {
            return !this.tokens.length
        },
        read: function() {
            return this.tokens.length ? this.tokens.shift() : Xn
        },
        prepend: function(r) {
            if (Array.isArray(r))
                for (var e = r; e.length; )
                    this.tokens.unshift(e.pop());
            else
                this.tokens.unshift(r)
        },
        push: function(r) {
            if (Array.isArray(r))
                for (var e = r; e.length; )
                    this.tokens.push(e.shift());
            else
                this.tokens.push(r)
        }
    };
    Qt = -1;
    Wc.prototype = {
        handler: function(r, e) {}
    };
    Gc.prototype = {
        handler: function(r, e) {}
    };
    Zn = "utf-8";
    Jn.prototype = {
        decode: function(e, t) {
            var n;
            typeof e == "object" && e instanceof ArrayBuffer ? n = new Uint8Array(e) : typeof e == "object" && "buffer"in e && e.buffer instanceof ArrayBuffer ? n = new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : n = new Uint8Array(0),
            t = er(t),
            this._streaming || (this._decoder = new Hc({
                fatal: this._fatal
            }),
            this._BOMseen = !1),
            this._streaming = !!t.stream;
            for (var s = new ys(n), o = [], i; !s.endOfStream() && (i = this._decoder.handler(s, s.read()),
            i !== Qt); )
                i !== null && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
            if (!this._streaming) {
                do {
                    if (i = this._decoder.handler(s, s.read()),
                    i === Qt)
                        break;
                    i !== null && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i))
                } while (!s.endOfStream());
                this._decoder = null
            }
            return o.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (o[0] === 65279 ? (this._BOMseen = !0,
            o.shift()) : this._BOMseen = !0),
            $c(o)
        }
    };
    Qn.prototype = {
        encode: function(e, t) {
            e = e ? String(e) : "",
            t = er(t),
            this._streaming || (this._encoder = new jc(this._options)),
            this._streaming = !!t.stream;
            for (var n = [], s = new ys(qc(e)), o; !s.endOfStream() && (o = this._encoder.handler(s, s.read()),
            o !== Qt); )
                Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
            if (!this._streaming) {
                for (; o = this._encoder.handler(s, s.read()),
                o !== Qt; )
                    Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
                this._encoder = null
            }
            return new Uint8Array(n)
        }
    }
}
);
var pi = Lt(le => {
    "use strict";
    var Yc = le && le.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t),
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t]
            }
        })
    }
    : function(r, e, t, n) {
        n === void 0 && (n = t),
        r[n] = e[t]
    }
    )
      , Xc = le && le.__setModuleDefault || (Object.create ? function(r, e) {
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        })
    }
    : function(r, e) {
        r.default = e
    }
    )
      , rt = le && le.__decorate || function(r, e, t, n) {
        var s = arguments.length, o = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, t) : n, i;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            o = Reflect.decorate(r, e, t, n);
        else
            for (var c = r.length - 1; c >= 0; c--)
                (i = r[c]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, t, o) : i(e, t)) || o);
        return s > 3 && o && Object.defineProperty(e, t, o),
        o
    }
      , Zc = le && le.__importStar || function(r) {
        if (r && r.__esModule)
            return r;
        var e = {};
        if (r != null)
            for (var t in r)
                t !== "default" && Object.hasOwnProperty.call(r, t) && Yc(e, r, t);
        return Xc(e, r),
        e
    }
      , hi = le && le.__importDefault || function(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    ;
    Object.defineProperty(le, "__esModule", {
        value: !0
    });
    le.deserializeUnchecked = le.deserialize = le.serialize = le.BinaryReader = le.BinaryWriter = le.BorshError = le.baseDecode = le.baseEncode = void 0;
    var At = hi(Uo())
      , _i = hi(_s())
      , Jc = Zc((li(),
    Xr(fi)))
      , Qc = typeof TextDecoder != "function" ? Jc.TextDecoder : TextDecoder
      , eu = new Qc("utf-8",{
        fatal: !0
    });
    function tu(r) {
        return typeof r == "string" && (r = Buffer.from(r, "utf8")),
        _i.default.encode(Buffer.from(r))
    }
    le.baseEncode = tu;
    function nu(r) {
        return Buffer.from(_i.default.decode(r))
    }
    le.baseDecode = nu;
    var ps = 1024
      , ve = class extends Error {
        constructor(e) {
            super(e),
            this.fieldPath = [],
            this.originalMessage = e
        }
        addToFieldPath(e) {
            this.fieldPath.splice(0, 0, e),
            this.message = this.originalMessage + ": " + this.fieldPath.join(".")
        }
    }
    ;
    le.BorshError = ve;
    var tr = class {
        constructor() {
            this.buf = Buffer.alloc(ps),
            this.length = 0
        }
        maybeResize() {
            this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(ps)]))
        }
        writeU8(e) {
            this.maybeResize(),
            this.buf.writeUInt8(e, this.length),
            this.length += 1
        }
        writeU16(e) {
            this.maybeResize(),
            this.buf.writeUInt16LE(e, this.length),
            this.length += 2
        }
        writeU32(e) {
            this.maybeResize(),
            this.buf.writeUInt32LE(e, this.length),
            this.length += 4
        }
        writeU64(e) {
            this.maybeResize(),
            this.writeBuffer(Buffer.from(new At.default(e).toArray("le", 8)))
        }
        writeU128(e) {
            this.maybeResize(),
            this.writeBuffer(Buffer.from(new At.default(e).toArray("le", 16)))
        }
        writeU256(e) {
            this.maybeResize(),
            this.writeBuffer(Buffer.from(new At.default(e).toArray("le", 32)))
        }
        writeU512(e) {
            this.maybeResize(),
            this.writeBuffer(Buffer.from(new At.default(e).toArray("le", 64)))
        }
        writeBuffer(e) {
            this.buf = Buffer.concat([Buffer.from(this.buf.subarray(0, this.length)), e, Buffer.alloc(ps)]),
            this.length += e.length
        }
        writeString(e) {
            this.maybeResize();
            let t = Buffer.from(e, "utf8");
            this.writeU32(t.length),
            this.writeBuffer(t)
        }
        writeFixedArray(e) {
            this.writeBuffer(Buffer.from(e))
        }
        writeArray(e, t) {
            this.maybeResize(),
            this.writeU32(e.length);
            for (let n of e)
                this.maybeResize(),
                t(n)
        }
        toArray() {
            return this.buf.subarray(0, this.length)
        }
    }
    ;
    le.BinaryWriter = tr;
    function st(r, e, t) {
        let n = t.value;
        t.value = function(...s) {
            try {
                return n.apply(this, s)
            } catch (o) {
                if (o instanceof RangeError) {
                    let i = o.code;
                    if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(i) >= 0)
                        throw new ve("Reached the end of buffer when deserializing")
                }
                throw o
            }
        }
    }
    var Ve = class {
        constructor(e) {
            this.buf = e,
            this.offset = 0
        }
        readU8() {
            let e = this.buf.readUInt8(this.offset);
            return this.offset += 1,
            e
        }
        readU16() {
            let e = this.buf.readUInt16LE(this.offset);
            return this.offset += 2,
            e
        }
        readU32() {
            let e = this.buf.readUInt32LE(this.offset);
            return this.offset += 4,
            e
        }
        readU64() {
            let e = this.readBuffer(8);
            return new At.default(e,"le")
        }
        readU128() {
            let e = this.readBuffer(16);
            return new At.default(e,"le")
        }
        readU256() {
            let e = this.readBuffer(32);
            return new At.default(e,"le")
        }
        readU512() {
            let e = this.readBuffer(64);
            return new At.default(e,"le")
        }
        readBuffer(e) {
            if (this.offset + e > this.buf.length)
                throw new ve(`Expected buffer length ${e} isn't within bounds`);
            let t = this.buf.slice(this.offset, this.offset + e);
            return this.offset += e,
            t
        }
        readString() {
            let e = this.readU32()
              , t = this.readBuffer(e);
            try {
                return eu.decode(t)
            } catch (n) {
                throw new ve(`Error decoding UTF-8 string: ${n}`)
            }
        }
        readFixedArray(e) {
            return new Uint8Array(this.readBuffer(e))
        }
        readArray(e) {
            let t = this.readU32()
              , n = Array();
            for (let s = 0; s < t; ++s)
                n.push(e());
            return n
        }
    }
    ;
    rt([st], Ve.prototype, "readU8", null);
    rt([st], Ve.prototype, "readU16", null);
    rt([st], Ve.prototype, "readU32", null);
    rt([st], Ve.prototype, "readU64", null);
    rt([st], Ve.prototype, "readU128", null);
    rt([st], Ve.prototype, "readU256", null);
    rt([st], Ve.prototype, "readU512", null);
    rt([st], Ve.prototype, "readString", null);
    rt([st], Ve.prototype, "readFixedArray", null);
    rt([st], Ve.prototype, "readArray", null);
    le.BinaryReader = Ve;
    function gi(r) {
        return r.charAt(0).toUpperCase() + r.slice(1)
    }
    function Ut(r, e, t, n, s) {
        try {
            if (typeof n == "string")
                s[`write${gi(n)}`](t);
            else if (n instanceof Array)
                if (typeof n[0] == "number") {
                    if (t.length !== n[0])
                        throw new ve(`Expecting byte array of length ${n[0]}, but got ${t.length} bytes`);
                    s.writeFixedArray(t)
                } else if (n.length === 2 && typeof n[1] == "number") {
                    if (t.length !== n[1])
                        throw new ve(`Expecting byte array of length ${n[1]}, but got ${t.length} bytes`);
                    for (let o = 0; o < n[1]; o++)
                        Ut(r, null, t[o], n[0], s)
                } else
                    s.writeArray(t, o => {
                        Ut(r, e, o, n[0], s)
                    }
                    );
            else if (n.kind !== void 0)
                switch (n.kind) {
                case "option":
                    {
                        t == null ? s.writeU8(0) : (s.writeU8(1),
                        Ut(r, e, t, n.type, s));
                        break
                    }
                case "map":
                    {
                        s.writeU32(t.size),
                        t.forEach( (o, i) => {
                            Ut(r, e, i, n.key, s),
                            Ut(r, e, o, n.value, s)
                        }
                        );
                        break
                    }
                default:
                    throw new ve(`FieldType ${n} unrecognized`)
                }
            else
                yi(r, t, s)
        } catch (o) {
            throw o instanceof ve && o.addToFieldPath(e),
            o
        }
    }
    function yi(r, e, t) {
        if (typeof e.borshSerialize == "function") {
            e.borshSerialize(t);
            return
        }
        let n = r.get(e.constructor);
        if (!n)
            throw new ve(`Class ${e.constructor.name} is missing in schema`);
        if (n.kind === "struct")
            n.fields.map( ([s,o]) => {
                Ut(r, s, e[s], o, t)
            }
            );
        else if (n.kind === "enum") {
            let s = e[n.field];
            for (let o = 0; o < n.values.length; ++o) {
                let[i,c] = n.values[o];
                if (i === s) {
                    t.writeU8(o),
                    Ut(r, i, e[i], c, t);
                    break
                }
            }
        } else
            throw new ve(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)
    }
    function ru(r, e, t=tr) {
        let n = new t;
        return yi(r, e, n),
        n.toArray()
    }
    le.serialize = ru;
    function zt(r, e, t, n) {
        try {
            if (typeof t == "string")
                return n[`read${gi(t)}`]();
            if (t instanceof Array) {
                if (typeof t[0] == "number")
                    return n.readFixedArray(t[0]);
                if (typeof t[1] == "number") {
                    let s = [];
                    for (let o = 0; o < t[1]; o++)
                        s.push(zt(r, null, t[0], n));
                    return s
                } else
                    return n.readArray( () => zt(r, e, t[0], n))
            }
            if (t.kind === "option")
                return n.readU8() ? zt(r, e, t.type, n) : void 0;
            if (t.kind === "map") {
                let s = new Map
                  , o = n.readU32();
                for (let i = 0; i < o; i++) {
                    let c = zt(r, e, t.key, n)
                      , a = zt(r, e, t.value, n);
                    s.set(c, a)
                }
                return s
            }
            return ms(r, t, n)
        } catch (s) {
            throw s instanceof ve && s.addToFieldPath(e),
            s
        }
    }
    function ms(r, e, t) {
        if (typeof e.borshDeserialize == "function")
            return e.borshDeserialize(t);
        let n = r.get(e);
        if (!n)
            throw new ve(`Class ${e.name} is missing in schema`);
        if (n.kind === "struct") {
            let s = {};
            for (let[o,i] of r.get(e).fields)
                s[o] = zt(r, o, i, t);
            return new e(s)
        }
        if (n.kind === "enum") {
            let s = t.readU8();
            if (s >= n.values.length)
                throw new ve(`Enum index: ${s} is out of range`);
            let[o,i] = n.values[s]
              , c = zt(r, o, i, t);
            return new e({
                [o]: c
            })
        }
        throw new ve(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)
    }
    function su(r, e, t, n=Ve) {
        let s = new n(t)
          , o = ms(r, e, s);
        if (s.offset < t.length)
            throw new ve(`Unexpected ${t.length - s.offset} bytes after deserialized data`);
        return o
    }
    le.deserialize = su;
    function ou(r, e, t, n=Ve) {
        let s = new n(t);
        return ms(r, e, s)
    }
    le.deserializeUnchecked = ou
}
);
var Ss = Lt(p => {
    "use strict";
    Object.defineProperty(p, "__esModule", {
        value: !0
    });
    p.s16 = p.s8 = p.nu64be = p.u48be = p.u40be = p.u32be = p.u24be = p.u16be = p.nu64 = p.u48 = p.u40 = p.u32 = p.u24 = p.u16 = p.u8 = p.offset = p.greedy = p.Constant = p.UTF8 = p.CString = p.Blob = p.Boolean = p.BitField = p.BitStructure = p.VariantLayout = p.Union = p.UnionLayoutDiscriminator = p.UnionDiscriminator = p.Structure = p.Sequence = p.DoubleBE = p.Double = p.FloatBE = p.Float = p.NearInt64BE = p.NearInt64 = p.NearUInt64BE = p.NearUInt64 = p.IntBE = p.Int = p.UIntBE = p.UInt = p.OffsetLayout = p.GreedyCount = p.ExternalLayout = p.bindConstructorLayout = p.nameWithProperty = p.Layout = p.uint8ArrayToBuffer = p.checkUint8Array = void 0;
    p.constant = p.utf8 = p.cstr = p.blob = p.unionLayoutDiscriminator = p.union = p.seq = p.bits = p.struct = p.f64be = p.f64 = p.f32be = p.f32 = p.ns64be = p.s48be = p.s40be = p.s32be = p.s24be = p.s16be = p.ns64 = p.s48 = p.s40 = p.s32 = p.s24 = void 0;
    var bs = Zr();
    function nn(r) {
        if (!(r instanceof Uint8Array))
            throw new TypeError("b must be a Uint8Array")
    }
    p.checkUint8Array = nn;
    function oe(r) {
        return nn(r),
        bs.Buffer.from(r.buffer, r.byteOffset, r.length)
    }
    p.uint8ArrayToBuffer = oe;
    var ae = class {
        constructor(e, t) {
            if (!Number.isInteger(e))
                throw new TypeError("span must be an integer");
            this.span = e,
            this.property = t
        }
        makeDestinationObject() {
            return {}
        }
        getSpan(e, t) {
            if (0 > this.span)
                throw new RangeError("indeterminate span");
            return this.span
        }
        replicate(e) {
            let t = Object.create(this.constructor.prototype);
            return Object.assign(t, this),
            t.property = e,
            t
        }
        fromArray(e) {}
    }
    ;
    p.Layout = ae;
    function Es(r, e) {
        return e.property ? r + "[" + e.property + "]" : r
    }
    p.nameWithProperty = Es;
    function iu(r, e) {
        if (typeof r != "function")
            throw new TypeError("Class must be constructor");
        if (Object.prototype.hasOwnProperty.call(r, "layout_"))
            throw new Error("Class is already bound to a layout");
        if (!(e && e instanceof ae))
            throw new TypeError("layout must be a Layout");
        if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_"))
            throw new Error("layout is already bound to a constructor");
        r.layout_ = e,
        e.boundConstructor_ = r,
        e.makeDestinationObject = () => new r,
        Object.defineProperty(r.prototype, "encode", {
            value(t, n) {
                return e.encode(this, t, n)
            },
            writable: !0
        }),
        Object.defineProperty(r, "decode", {
            value(t, n) {
                return e.decode(t, n)
            },
            writable: !0
        })
    }
    p.bindConstructorLayout = iu;
    var xe = class extends ae {
        isCount() {
            throw new Error("ExternalLayout is abstract")
        }
    }
    ;
    p.ExternalLayout = xe;
    var nr = class extends xe {
        constructor(e=1, t) {
            if (!Number.isInteger(e) || 0 >= e)
                throw new TypeError("elementSpan must be a (positive) integer");
            super(-1, t),
            this.elementSpan = e
        }
        isCount() {
            return !0
        }
        decode(e, t=0) {
            nn(e);
            let n = e.length - t;
            return Math.floor(n / this.elementSpan)
        }
        encode(e, t, n) {
            return 0
        }
    }
    ;
    p.GreedyCount = nr;
    var bn = class extends xe {
        constructor(e, t=0, n) {
            if (!(e instanceof ae))
                throw new TypeError("layout must be a Layout");
            if (!Number.isInteger(t))
                throw new TypeError("offset must be integer or undefined");
            super(e.span, n || e.property),
            this.layout = e,
            this.offset = t
        }
        isCount() {
            return this.layout instanceof We || this.layout instanceof Ye
        }
        decode(e, t=0) {
            return this.layout.decode(e, t + this.offset)
        }
        encode(e, t, n=0) {
            return this.layout.encode(e, t, n + this.offset)
        }
    }
    ;
    p.OffsetLayout = bn;
    var We = class extends ae {
        constructor(e, t) {
            if (super(e, t),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(e, t=0) {
            return oe(e).readUIntLE(t, this.span)
        }
        encode(e, t, n=0) {
            return oe(t).writeUIntLE(e, n, this.span),
            this.span
        }
    }
    ;
    p.UInt = We;
    var Ye = class extends ae {
        constructor(e, t) {
            if (super(e, t),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(e, t=0) {
            return oe(e).readUIntBE(t, this.span)
        }
        encode(e, t, n=0) {
            return oe(t).writeUIntBE(e, n, this.span),
            this.span
        }
    }
    ;
    p.UIntBE = Ye;
    var gt = class extends ae {
        constructor(e, t) {
            if (super(e, t),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(e, t=0) {
            return oe(e).readIntLE(t, this.span)
        }
        encode(e, t, n=0) {
            return oe(t).writeIntLE(e, n, this.span),
            this.span
        }
    }
    ;
    p.Int = gt;
    var wt = class extends ae {
        constructor(e, t) {
            if (super(e, t),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(e, t=0) {
            return oe(e).readIntBE(t, this.span)
        }
        encode(e, t, n=0) {
            return oe(t).writeIntBE(e, n, this.span),
            this.span
        }
    }
    ;
    p.IntBE = wt;
    var Rs = Math.pow(2, 32);
    function Rr(r) {
        let e = Math.floor(r / Rs)
          , t = r - e * Rs;
        return {
            hi32: e,
            lo32: t
        }
    }
    function br(r, e) {
        return r * Rs + e
    }
    var rr = class extends ae {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            let n = oe(e)
              , s = n.readUInt32LE(t)
              , o = n.readUInt32LE(t + 4);
            return br(o, s)
        }
        encode(e, t, n=0) {
            let s = Rr(e)
              , o = oe(t);
            return o.writeUInt32LE(s.lo32, n),
            o.writeUInt32LE(s.hi32, n + 4),
            8
        }
    }
    ;
    p.NearUInt64 = rr;
    var sr = class extends ae {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            let n = oe(e)
              , s = n.readUInt32BE(t)
              , o = n.readUInt32BE(t + 4);
            return br(s, o)
        }
        encode(e, t, n=0) {
            let s = Rr(e)
              , o = oe(t);
            return o.writeUInt32BE(s.hi32, n),
            o.writeUInt32BE(s.lo32, n + 4),
            8
        }
    }
    ;
    p.NearUInt64BE = sr;
    var or = class extends ae {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            let n = oe(e)
              , s = n.readUInt32LE(t)
              , o = n.readInt32LE(t + 4);
            return br(o, s)
        }
        encode(e, t, n=0) {
            let s = Rr(e)
              , o = oe(t);
            return o.writeUInt32LE(s.lo32, n),
            o.writeInt32LE(s.hi32, n + 4),
            8
        }
    }
    ;
    p.NearInt64 = or;
    var ir = class extends ae {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            let n = oe(e)
              , s = n.readInt32BE(t)
              , o = n.readUInt32BE(t + 4);
            return br(s, o)
        }
        encode(e, t, n=0) {
            let s = Rr(e)
              , o = oe(t);
            return o.writeInt32BE(s.hi32, n),
            o.writeUInt32BE(s.lo32, n + 4),
            8
        }
    }
    ;
    p.NearInt64BE = ir;
    var ar = class extends ae {
        constructor(e) {
            super(4, e)
        }
        decode(e, t=0) {
            return oe(e).readFloatLE(t)
        }
        encode(e, t, n=0) {
            return oe(t).writeFloatLE(e, n),
            4
        }
    }
    ;
    p.Float = ar;
    var cr = class extends ae {
        constructor(e) {
            super(4, e)
        }
        decode(e, t=0) {
            return oe(e).readFloatBE(t)
        }
        encode(e, t, n=0) {
            return oe(t).writeFloatBE(e, n),
            4
        }
    }
    ;
    p.FloatBE = cr;
    var ur = class extends ae {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            return oe(e).readDoubleLE(t)
        }
        encode(e, t, n=0) {
            return oe(t).writeDoubleLE(e, n),
            8
        }
    }
    ;
    p.Double = ur;
    var dr = class extends ae {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            return oe(e).readDoubleBE(t)
        }
        encode(e, t, n=0) {
            return oe(t).writeDoubleBE(e, n),
            8
        }
    }
    ;
    p.DoubleBE = dr;
    var fr = class extends ae {
        constructor(e, t, n) {
            if (!(e instanceof ae))
                throw new TypeError("elementLayout must be a Layout");
            if (!(t instanceof xe && t.isCount() || Number.isInteger(t) && 0 <= t))
                throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
            let s = -1;
            !(t instanceof xe) && 0 < e.span && (s = t * e.span),
            super(s, n),
            this.elementLayout = e,
            this.count = t
        }
        getSpan(e, t=0) {
            if (0 <= this.span)
                return this.span;
            let n = 0
              , s = this.count;
            if (s instanceof xe && (s = s.decode(e, t)),
            0 < this.elementLayout.span)
                n = s * this.elementLayout.span;
            else {
                let o = 0;
                for (; o < s; )
                    n += this.elementLayout.getSpan(e, t + n),
                    ++o
            }
            return n
        }
        decode(e, t=0) {
            let n = []
              , s = 0
              , o = this.count;
            for (o instanceof xe && (o = o.decode(e, t)); s < o; )
                n.push(this.elementLayout.decode(e, t)),
                t += this.elementLayout.getSpan(e, t),
                s += 1;
            return n
        }
        encode(e, t, n=0) {
            let s = this.elementLayout
              , o = e.reduce( (i, c) => i + s.encode(c, t, n + i), 0);
            return this.count instanceof xe && this.count.encode(e.length, t, n),
            o
        }
    }
    ;
    p.Sequence = fr;
    var lr = class extends ae {
        constructor(e, t, n) {
            if (!(Array.isArray(e) && e.reduce( (o, i) => o && i instanceof ae, !0)))
                throw new TypeError("fields must be array of Layout instances");
            typeof t == "boolean" && n === void 0 && (n = t,
            t = void 0);
            for (let o of e)
                if (0 > o.span && o.property === void 0)
                    throw new Error("fields cannot contain unnamed variable-length layout");
            let s = -1;
            try {
                s = e.reduce( (o, i) => o + i.getSpan(), 0)
            } catch {}
            super(s, t),
            this.fields = e,
            this.decodePrefixes = !!n
        }
        getSpan(e, t=0) {
            if (0 <= this.span)
                return this.span;
            let n = 0;
            try {
                n = this.fields.reduce( (s, o) => {
                    let i = o.getSpan(e, t);
                    return t += i,
                    s + i
                }
                , 0)
            } catch {
                throw new RangeError("indeterminate span")
            }
            return n
        }
        decode(e, t=0) {
            nn(e);
            let n = this.makeDestinationObject();
            for (let s of this.fields)
                if (s.property !== void 0 && (n[s.property] = s.decode(e, t)),
                t += s.getSpan(e, t),
                this.decodePrefixes && e.length === t)
                    break;
            return n
        }
        encode(e, t, n=0) {
            let s = n
              , o = 0
              , i = 0;
            for (let c of this.fields) {
                let a = c.span;
                if (i = 0 < a ? a : 0,
                c.property !== void 0) {
                    let d = e[c.property];
                    d !== void 0 && (i = c.encode(d, t, n),
                    0 > a && (a = c.getSpan(t, n)))
                }
                o = n,
                n += a
            }
            return o + i - s
        }
        fromArray(e) {
            let t = this.makeDestinationObject();
            for (let n of this.fields)
                n.property !== void 0 && 0 < e.length && (t[n.property] = e.shift());
            return t
        }
        layoutFor(e) {
            if (typeof e != "string")
                throw new TypeError("property must be string");
            for (let t of this.fields)
                if (t.property === e)
                    return t
        }
        offsetOf(e) {
            if (typeof e != "string")
                throw new TypeError("property must be string");
            let t = 0;
            for (let n of this.fields) {
                if (n.property === e)
                    return t;
                0 > n.span ? t = -1 : 0 <= t && (t += n.span)
            }
        }
    }
    ;
    p.Structure = lr;
    var En = class {
        constructor(e) {
            this.property = e
        }
        decode(e, t) {
            throw new Error("UnionDiscriminator is abstract")
        }
        encode(e, t, n) {
            throw new Error("UnionDiscriminator is abstract")
        }
    }
    ;
    p.UnionDiscriminator = En;
    var tn = class extends En {
        constructor(e, t) {
            if (!(e instanceof xe && e.isCount()))
                throw new TypeError("layout must be an unsigned integer ExternalLayout");
            super(t || e.property || "variant"),
            this.layout = e
        }
        decode(e, t) {
            return this.layout.decode(e, t)
        }
        encode(e, t, n) {
            return this.layout.encode(e, t, n)
        }
    }
    ;
    p.UnionLayoutDiscriminator = tn;
    var Sn = class extends ae {
        constructor(e, t, n) {
            let s;
            if (e instanceof We || e instanceof Ye)
                s = new tn(new bn(e));
            else if (e instanceof xe && e.isCount())
                s = new tn(e);
            else if (e instanceof En)
                s = e;
            else
                throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
            if (t === void 0 && (t = null),
            !(t === null || t instanceof ae))
                throw new TypeError("defaultLayout must be null or a Layout");
            if (t !== null) {
                if (0 > t.span)
                    throw new Error("defaultLayout must have constant span");
                t.property === void 0 && (t = t.replicate("content"))
            }
            let o = -1;
            t && (o = t.span,
            0 <= o && (e instanceof We || e instanceof Ye) && (o += s.layout.span)),
            super(o, n),
            this.discriminator = s,
            this.usesPrefixDiscriminator = e instanceof We || e instanceof Ye,
            this.defaultLayout = t,
            this.registry = {};
            let i = this.defaultGetSourceVariant.bind(this);
            this.getSourceVariant = function(c) {
                return i(c)
            }
            ,
            this.configGetSourceVariant = function(c) {
                i = c.bind(this)
            }
        }
        getSpan(e, t=0) {
            if (0 <= this.span)
                return this.span;
            let n = this.getVariant(e, t);
            if (!n)
                throw new Error("unable to determine span for unrecognized variant");
            return n.getSpan(e, t)
        }
        defaultGetSourceVariant(e) {
            if (Object.prototype.hasOwnProperty.call(e, this.discriminator.property)) {
                if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property))
                    return;
                let t = this.registry[e[this.discriminator.property]];
                if (t && (!t.layout || t.property && Object.prototype.hasOwnProperty.call(e, t.property)))
                    return t
            } else
                for (let t in this.registry) {
                    let n = this.registry[t];
                    if (n.property && Object.prototype.hasOwnProperty.call(e, n.property))
                        return n
                }
            throw new Error("unable to infer src variant")
        }
        decode(e, t=0) {
            let n, s = this.discriminator, o = s.decode(e, t), i = this.registry[o];
            if (i === void 0) {
                let c = this.defaultLayout
                  , a = 0;
                this.usesPrefixDiscriminator && (a = s.layout.span),
                n = this.makeDestinationObject(),
                n[s.property] = o,
                n[c.property] = c.decode(e, t + a)
            } else
                n = i.decode(e, t);
            return n
        }
        encode(e, t, n=0) {
            let s = this.getSourceVariant(e);
            if (s === void 0) {
                let o = this.discriminator
                  , i = this.defaultLayout
                  , c = 0;
                return this.usesPrefixDiscriminator && (c = o.layout.span),
                o.encode(e[o.property], t, n),
                c + i.encode(e[i.property], t, n + c)
            }
            return s.encode(e, t, n)
        }
        addVariant(e, t, n) {
            let s = new hr(this,e,t,n);
            return this.registry[e] = s,
            s
        }
        getVariant(e, t=0) {
            let n;
            return e instanceof Uint8Array ? n = this.discriminator.decode(e, t) : n = e,
            this.registry[n]
        }
    }
    ;
    p.Union = Sn;
    var hr = class extends ae {
        constructor(e, t, n, s) {
            if (!(e instanceof Sn))
                throw new TypeError("union must be a Union");
            if (!Number.isInteger(t) || 0 > t)
                throw new TypeError("variant must be a (non-negative) integer");
            if (typeof n == "string" && s === void 0 && (s = n,
            n = null),
            n) {
                if (!(n instanceof ae))
                    throw new TypeError("layout must be a Layout");
                if (e.defaultLayout !== null && 0 <= n.span && n.span > e.defaultLayout.span)
                    throw new Error("variant span exceeds span of containing union");
                if (typeof s != "string")
                    throw new TypeError("variant must have a String property")
            }
            let o = e.span;
            0 > e.span && (o = n ? n.span : 0,
            0 <= o && e.usesPrefixDiscriminator && (o += e.discriminator.layout.span)),
            super(o, s),
            this.union = e,
            this.variant = t,
            this.layout = n || null
        }
        getSpan(e, t=0) {
            if (0 <= this.span)
                return this.span;
            let n = 0;
            this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span);
            let s = 0;
            return this.layout && (s = this.layout.getSpan(e, t + n)),
            n + s
        }
        decode(e, t=0) {
            let n = this.makeDestinationObject();
            if (this !== this.union.getVariant(e, t))
                throw new Error("variant mismatch");
            let s = 0;
            return this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span),
            this.layout ? n[this.property] = this.layout.decode(e, t + s) : this.property ? n[this.property] = !0 : this.union.usesPrefixDiscriminator && (n[this.union.discriminator.property] = this.variant),
            n
        }
        encode(e, t, n=0) {
            let s = 0;
            if (this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span),
            this.layout && !Object.prototype.hasOwnProperty.call(e, this.property))
                throw new TypeError("variant lacks property " + this.property);
            this.union.discriminator.encode(this.variant, t, n);
            let o = s;
            if (this.layout && (this.layout.encode(e[this.property], t, n + s),
            o += this.layout.getSpan(t, n + s),
            0 <= this.union.span && o > this.union.span))
                throw new Error("encoded variant overruns containing union");
            return o
        }
        fromArray(e) {
            if (this.layout)
                return this.layout.fromArray(e)
        }
    }
    ;
    p.VariantLayout = hr;
    function en(r) {
        return 0 > r && (r += 4294967296),
        r
    }
    var An = class extends ae {
        constructor(e, t, n) {
            if (!(e instanceof We || e instanceof Ye))
                throw new TypeError("word must be a UInt or UIntBE layout");
            if (typeof t == "string" && n === void 0 && (n = t,
            t = !1),
            4 < e.span)
                throw new RangeError("word cannot exceed 32 bits");
            super(e.span, n),
            this.word = e,
            this.msb = !!t,
            this.fields = [];
            let s = 0;
            this._packedSetValue = function(o) {
                return s = en(o),
                this
            }
            ,
            this._packedGetValue = function() {
                return s
            }
        }
        decode(e, t=0) {
            let n = this.makeDestinationObject()
              , s = this.word.decode(e, t);
            this._packedSetValue(s);
            for (let o of this.fields)
                o.property !== void 0 && (n[o.property] = o.decode(e));
            return n
        }
        encode(e, t, n=0) {
            let s = this.word.decode(t, n);
            this._packedSetValue(s);
            for (let o of this.fields)
                if (o.property !== void 0) {
                    let i = e[o.property];
                    i !== void 0 && o.encode(i)
                }
            return this.word.encode(this._packedGetValue(), t, n)
        }
        addField(e, t) {
            let n = new wn(this,e,t);
            return this.fields.push(n),
            n
        }
        addBoolean(e) {
            let t = new _r(this,e);
            return this.fields.push(t),
            t
        }
        fieldFor(e) {
            if (typeof e != "string")
                throw new TypeError("property must be string");
            for (let t of this.fields)
                if (t.property === e)
                    return t
        }
    }
    ;
    p.BitStructure = An;
    var wn = class {
        constructor(e, t, n) {
            if (!(e instanceof An))
                throw new TypeError("container must be a BitStructure");
            if (!Number.isInteger(t) || 0 >= t)
                throw new TypeError("bits must be positive integer");
            let s = 8 * e.span
              , o = e.fields.reduce( (i, c) => i + c.bits, 0);
            if (t + o > s)
                throw new Error("bits too long for span remainder (" + (s - o) + " of " + s + " remain)");
            this.container = e,
            this.bits = t,
            this.valueMask = (1 << t) - 1,
            t === 32 && (this.valueMask = 4294967295),
            this.start = o,
            this.container.msb && (this.start = s - o - t),
            this.wordMask = en(this.valueMask << this.start),
            this.property = n
        }
        decode(e, t) {
            let n = this.container._packedGetValue();
            return en(n & this.wordMask) >>> this.start
        }
        encode(e) {
            if (typeof e != "number" || !Number.isInteger(e) || e !== en(e & this.valueMask))
                throw new TypeError(Es("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
            let t = this.container._packedGetValue()
              , n = en(e << this.start);
            this.container._packedSetValue(en(t & ~this.wordMask) | n)
        }
    }
    ;
    p.BitField = wn;
    var _r = class extends wn {
        constructor(e, t) {
            super(e, 1, t)
        }
        decode(e, t) {
            return !!super.decode(e, t)
        }
        encode(e) {
            typeof e == "boolean" && (e = +e),
            super.encode(e)
        }
    }
    ;
    p.Boolean = _r;
    var gr = class extends ae {
        constructor(e, t) {
            if (!(e instanceof xe && e.isCount() || Number.isInteger(e) && 0 <= e))
                throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
            let n = -1;
            e instanceof xe || (n = e),
            super(n, t),
            this.length = e
        }
        getSpan(e, t) {
            let n = this.span;
            return 0 > n && (n = this.length.decode(e, t)),
            n
        }
        decode(e, t=0) {
            let n = this.span;
            return 0 > n && (n = this.length.decode(e, t)),
            oe(e).slice(t, t + n)
        }
        encode(e, t, n) {
            let s = this.length;
            if (this.length instanceof xe && (s = e.length),
            !(e instanceof Uint8Array && s === e.length))
                throw new TypeError(Es("Blob.encode", this) + " requires (length " + s + ") Uint8Array as src");
            if (n + s > t.length)
                throw new RangeError("encoding overruns Uint8Array");
            let o = oe(e);
            return oe(t).write(o.toString("hex"), n, s, "hex"),
            this.length instanceof xe && this.length.encode(s, t, n),
            s
        }
    }
    ;
    p.Blob = gr;
    var yr = class extends ae {
        constructor(e) {
            super(-1, e)
        }
        getSpan(e, t=0) {
            nn(e);
            let n = t;
            for (; n < e.length && e[n] !== 0; )
                n += 1;
            return 1 + n - t
        }
        decode(e, t=0) {
            let n = this.getSpan(e, t);
            return oe(e).slice(t, t + n - 1).toString("utf-8")
        }
        encode(e, t, n=0) {
            typeof e != "string" && (e = String(e));
            let s = bs.Buffer.from(e, "utf8")
              , o = s.length;
            if (n + o > t.length)
                throw new RangeError("encoding overruns Buffer");
            let i = oe(t);
            return s.copy(i, n),
            i[n + o] = 0,
            o + 1
        }
    }
    ;
    p.CString = yr;
    var pr = class extends ae {
        constructor(e, t) {
            if (typeof e == "string" && t === void 0 && (t = e,
            e = void 0),
            e === void 0)
                e = -1;
            else if (!Number.isInteger(e))
                throw new TypeError("maxSpan must be an integer");
            super(-1, t),
            this.maxSpan = e
        }
        getSpan(e, t=0) {
            return nn(e),
            e.length - t
        }
        decode(e, t=0) {
            let n = this.getSpan(e, t);
            if (0 <= this.maxSpan && this.maxSpan < n)
                throw new RangeError("text length exceeds maxSpan");
            return oe(e).slice(t, t + n).toString("utf-8")
        }
        encode(e, t, n=0) {
            typeof e != "string" && (e = String(e));
            let s = bs.Buffer.from(e, "utf8")
              , o = s.length;
            if (0 <= this.maxSpan && this.maxSpan < o)
                throw new RangeError("text length exceeds maxSpan");
            if (n + o > t.length)
                throw new RangeError("encoding overruns Buffer");
            return s.copy(oe(t), n),
            o
        }
    }
    ;
    p.UTF8 = pr;
    var mr = class extends ae {
        constructor(e, t) {
            super(0, t),
            this.value = e
        }
        decode(e, t) {
            return this.value
        }
        encode(e, t, n) {
            return 0
        }
    }
    ;
    p.Constant = mr;
    p.greedy = (r, e) => new nr(r,e);
    p.offset = (r, e, t) => new bn(r,e,t);
    p.u8 = r => new We(1,r);
    p.u16 = r => new We(2,r);
    p.u24 = r => new We(3,r);
    p.u32 = r => new We(4,r);
    p.u40 = r => new We(5,r);
    p.u48 = r => new We(6,r);
    p.nu64 = r => new rr(r);
    p.u16be = r => new Ye(2,r);
    p.u24be = r => new Ye(3,r);
    p.u32be = r => new Ye(4,r);
    p.u40be = r => new Ye(5,r);
    p.u48be = r => new Ye(6,r);
    p.nu64be = r => new sr(r);
    p.s8 = r => new gt(1,r);
    p.s16 = r => new gt(2,r);
    p.s24 = r => new gt(3,r);
    p.s32 = r => new gt(4,r);
    p.s40 = r => new gt(5,r);
    p.s48 = r => new gt(6,r);
    p.ns64 = r => new or(r);
    p.s16be = r => new wt(2,r);
    p.s24be = r => new wt(3,r);
    p.s32be = r => new wt(4,r);
    p.s40be = r => new wt(5,r);
    p.s48be = r => new wt(6,r);
    p.ns64be = r => new ir(r);
    p.f32 = r => new ar(r);
    p.f32be = r => new cr(r);
    p.f64 = r => new ur(r);
    p.f64be = r => new dr(r);
    p.struct = (r, e, t) => new lr(r,e,t);
    p.bits = (r, e, t) => new An(r,e,t);
    p.seq = (r, e, t) => new fr(r,e,t);
    p.union = (r, e, t) => new Sn(r,e,t);
    p.unionLayoutDiscriminator = (r, e) => new tn(r,e);
    p.blob = (r, e) => new gr(r,e);
    p.cstr = r => new yr(r);
    p.utf8 = (r, e) => new pr(r,e);
    p.constant = (r, e) => new mr(r,e)
}
);
function wi(r) {
    return Array.isArray(r) ? "%5B" + r.map(wi).join("%2C%20") + "%5D" : typeof r == "bigint" ? `${r}n` : encodeURIComponent(String(r != null && Object.getPrototypeOf(r) === null ? K({}, r) : r))
}
function ah([r,e]) {
    return `${r}=${wi(e)}`
}
function ch(r) {
    let e = Object.entries(r).map(ah).join("&");
    return btoa(e)
}
function uh(r, e={}) {
    {
        let t = `Solana error #${r}; Decode this error by running \`npx @solana/errors decode -- ${r}`;
        return Object.keys(e).length && (t += ` '${ch(e)}'`),
        `${t}\``
    }
}
var au, cu, uu, du, fu, lu, hu, _u, gu, yu, pu, mu, Ru, bu, Eu, Su, Au, wu, Iu, Ou, Nu, ku, Tu, vu, Lu, Bu, Cu, xu, Pu, Du, Uu, zu, Mu, Ku, Fu, Vu, qu, $u, Wu, Gu, Hu, ju, Yu, Xu, Zu, Ju, Qu, ed, td, nd, rd, sd, od, id, ad, cd, ud, dd, fd, ld, hd, _d, gd, yd, pd, md, Rd, bd, Ed, Sd, Ad, wd, Id, Od, Nd, kd, Td, vd, Ld, Bd, Cd, xd, Pd, Dd, Ud, zd, Md, Kd, Fd, Vd, qd, $d, Wd, Gd, Hd, jd, Yd, Xd, Zd, Jd, Qd, ef, tf, nf, rf, sf, of, af, cf, uf, df, ff, lf, hf, _f, gf, yf, pf, mf, Rf, bf, Ef, Sf, Af, wf, If, Of, Nf, kf, Tf, vf, Lf, Bf, Cf, xf, Pf, Df, Uf, zf, Mf, Kf, Ff, Vf, qf, $f, Wf, Gf, Hf, jf, Yf, Xf, Zf, Jf, Qf, el, tl, nl, rl, sl, ol, il, al, cl, ul, dl, fl, ll, hl, _l, gl, yl, pl, ml, Rl, bl, El, Sl, Al, wl, Il, Ol, Nl, kl, Tl, vl, Ll, Bl, Cl, xl, Pl, As, ws, mi, Ri, Is, Os, Ns, Dl, Ul, zl, Ml, ks, Kl, bi, Ei, Fl, Vl, ql, $l, Wl, Si, Ai, Gl, Hl, jl, Yl, Xl, Zl, Jl, Ql, eh, th, nh, rh, sh, oh, ih, Py, It, Ts = ce( () => {
    "use strict";
    au = 1,
    cu = 2,
    uu = 3,
    du = 4,
    fu = 5,
    lu = 6,
    hu = 7,
    _u = 8,
    gu = 9,
    yu = 10,
    pu = -32700,
    mu = -32603,
    Ru = -32602,
    bu = -32601,
    Eu = -32600,
    Su = -32016,
    Au = -32015,
    wu = -32014,
    Iu = -32013,
    Ou = -32012,
    Nu = -32011,
    ku = -32010,
    Tu = -32009,
    vu = -32008,
    Lu = -32007,
    Bu = -32006,
    Cu = -32005,
    xu = -32004,
    Pu = -32003,
    Du = -32002,
    Uu = -32001,
    zu = 28e5,
    Mu = 2800001,
    Ku = 2800002,
    Fu = 2800003,
    Vu = 2800004,
    qu = 2800005,
    $u = 2800006,
    Wu = 2800007,
    Gu = 2800008,
    Hu = 2800009,
    ju = 2800010,
    Yu = 2800011,
    Xu = 323e4,
    Zu = 32300001,
    Ju = 3230002,
    Qu = 3230003,
    ed = 3230004,
    td = 361e4,
    nd = 3610001,
    rd = 3610002,
    sd = 3610003,
    od = 3610004,
    id = 3610005,
    ad = 3610006,
    cd = 3610007,
    ud = 3611e3,
    dd = 3704e3,
    fd = 3704001,
    ld = 3704002,
    hd = 3704003,
    _d = 3704004,
    gd = 4128e3,
    yd = 4128001,
    pd = 4128002,
    md = 4615e3,
    Rd = 4615001,
    bd = 4615002,
    Ed = 4615003,
    Sd = 4615004,
    Ad = 4615005,
    wd = 4615006,
    Id = 4615007,
    Od = 4615008,
    Nd = 4615009,
    kd = 4615010,
    Td = 4615011,
    vd = 4615012,
    Ld = 4615013,
    Bd = 4615014,
    Cd = 4615015,
    xd = 4615016,
    Pd = 4615017,
    Dd = 4615018,
    Ud = 4615019,
    zd = 4615020,
    Md = 4615021,
    Kd = 4615022,
    Fd = 4615023,
    Vd = 4615024,
    qd = 4615025,
    $d = 4615026,
    Wd = 4615027,
    Gd = 4615028,
    Hd = 4615029,
    jd = 4615030,
    Yd = 4615031,
    Xd = 4615032,
    Zd = 4615033,
    Jd = 4615034,
    Qd = 4615035,
    ef = 4615036,
    tf = 4615037,
    nf = 4615038,
    rf = 4615039,
    sf = 4615040,
    of = 4615041,
    af = 4615042,
    cf = 4615043,
    uf = 4615044,
    df = 4615045,
    ff = 4615046,
    lf = 4615047,
    hf = 4615048,
    _f = 4615049,
    gf = 4615050,
    yf = 4615051,
    pf = 4615052,
    mf = 4615053,
    Rf = 4615054,
    bf = 5508e3,
    Ef = 5508001,
    Sf = 5508002,
    Af = 5508003,
    wf = 5508004,
    If = 5508005,
    Of = 5508006,
    Nf = 5508007,
    kf = 5508008,
    Tf = 5508009,
    vf = 5508010,
    Lf = 5508011,
    Bf = 5663e3,
    Cf = 5663001,
    xf = 5663002,
    Pf = 5663003,
    Df = 5663004,
    Uf = 5663005,
    zf = 5663006,
    Mf = 5663007,
    Kf = 5663008,
    Ff = 5663009,
    Vf = 5663010,
    qf = 5663011,
    $f = 5663012,
    Wf = 5663013,
    Gf = 5663014,
    Hf = 5663015,
    jf = 5663016,
    Yf = 5663017,
    Xf = 5663018,
    Zf = 5663019,
    Jf = 5663020,
    Qf = 705e4,
    el = 7050001,
    tl = 7050002,
    nl = 7050003,
    rl = 7050004,
    sl = 7050005,
    ol = 7050006,
    il = 7050007,
    al = 7050008,
    cl = 7050009,
    ul = 7050010,
    dl = 7050011,
    fl = 7050012,
    ll = 7050013,
    hl = 7050014,
    _l = 7050015,
    gl = 7050016,
    yl = 7050017,
    pl = 7050018,
    ml = 7050019,
    Rl = 7050020,
    bl = 7050021,
    El = 7050022,
    Sl = 7050023,
    Al = 7050024,
    wl = 7050025,
    Il = 7050026,
    Ol = 7050027,
    Nl = 7050028,
    kl = 7050029,
    Tl = 7050030,
    vl = 7050031,
    Ll = 7050032,
    Bl = 7050033,
    Cl = 7050034,
    xl = 7050035,
    Pl = 7050036,
    As = 8078e3,
    ws = 8078001,
    mi = 8078002,
    Ri = 8078003,
    Is = 8078004,
    Os = 8078005,
    Ns = 8078006,
    Dl = 8078007,
    Ul = 8078008,
    zl = 8078009,
    Ml = 8078010,
    ks = 8078011,
    Kl = 8078012,
    bi = 8078013,
    Ei = 8078014,
    Fl = 8078015,
    Vl = 8078016,
    ql = 8078017,
    $l = 8078018,
    Wl = 8078019,
    Si = 8078020,
    Ai = 8078021,
    Gl = 8078022,
    Hl = 81e5,
    jl = 8100001,
    Yl = 8100002,
    Xl = 8100003,
    Zl = 819e4,
    Jl = 8190001,
    Ql = 8190002,
    eh = 8190003,
    th = 8190004,
    nh = 99e5,
    rh = 9900001,
    sh = 9900002,
    oh = 9900003,
    ih = 9900004;
    Py = {
        [Xu]: "Account not found at address: $address",
        [ed]: "Not all accounts were decoded. Encoded accounts found at addresses: $addresses.",
        [Qu]: "Expected decoded account at address: $address",
        [Ju]: "Failed to decode account data at address: $address",
        [Zu]: "Accounts not found at addresses: $addresses",
        [Hu]: "Unable to find a viable program address bump seed.",
        [Ku]: "$putativeAddress is not a base58-encoded address.",
        [zu]: "Expected base58 encoded address to decode to a byte array of length 32. Actual length: $actualLength.",
        [Fu]: "The `CryptoKey` must be an `Ed25519` public key.",
        [Yu]: "$putativeOffCurveAddress is not a base58-encoded off-curve address.",
        [Gu]: "Invalid seeds; point must fall off the Ed25519 curve.",
        [Vu]: "Expected given program derived address to have the following format: [Address, ProgramDerivedAddressBump].",
        [$u]: "A maximum of $maxSeeds seeds, including the bump seed, may be supplied when creating an address. Received: $actual.",
        [Wu]: "The seed at index $index with length $actual exceeds the maximum length of $maxSeedLength bytes.",
        [qu]: "Expected program derived address bump to be in the range [0, 255], got: $bump.",
        [ju]: "Program address cannot end with PDA marker.",
        [Mu]: "Expected base58-encoded address string of length in the range [32, 44]. Actual length: $actualLength.",
        [du]: "Expected base58-encoded blockash string of length in the range [32, 44]. Actual length: $actualLength.",
        [au]: "The network has progressed past the last block for which this transaction could have been committed.",
        [As]: "Codec [$codecDescription] cannot decode empty byte arrays.",
        [Gl]: "Enum codec cannot use lexical values [$stringValues] as discriminators. Either remove all lexical values or set `useValuesAsDiscriminators` to `false`.",
        [Si]: "Sentinel [$hexSentinel] must not be present in encoded bytes [$hexEncodedBytes].",
        [Os]: "Encoder and decoder must have the same fixed size, got [$encoderFixedSize] and [$decoderFixedSize].",
        [Ns]: "Encoder and decoder must have the same max size, got [$encoderMaxSize] and [$decoderMaxSize].",
        [Is]: "Encoder and decoder must either both be fixed-size or variable-size.",
        [Ul]: "Enum discriminator out of range. Expected a number in [$formattedValidDiscriminators], got $discriminator.",
        [mi]: "Expected a fixed-size codec, got a variable-size one.",
        [bi]: "Codec [$codecDescription] expected a positive byte length, got $bytesLength.",
        [Ri]: "Expected a variable-size codec, got a fixed-size one.",
        [Wl]: "Codec [$codecDescription] expected zero-value [$hexZeroValue] to have the same size as the provided fixed-size item [$expectedSize bytes].",
        [ws]: "Codec [$codecDescription] expected $expected bytes, got $bytesLength.",
        [$l]: "Expected byte array constant [$hexConstant] to be present in data [$hexData] at offset [$offset].",
        [zl]: "Invalid discriminated union variant. Expected one of [$variants], got $value.",
        [Ml]: "Invalid enum variant. Expected one of [$stringValues] or a number in [$formattedNumericalValues], got $variant.",
        [Fl]: "Invalid literal union variant. Expected one of [$variants], got $value.",
        [Dl]: "Expected [$codecDescription] to have $expected items, got $actual.",
        [Kl]: "Invalid value $value for base $base with alphabet $alphabet.",
        [Vl]: "Literal union discriminator out of range. Expected a number between $minRange and $maxRange, got $discriminator.",
        [ks]: "Codec [$codecDescription] expected number to be in the range [$min, $max], got $value.",
        [Ei]: "Codec [$codecDescription] expected offset to be in the range [0, $bytesLength], got $offset.",
        [Ai]: "Expected sentinel [$hexSentinel] to be present in decoded bytes [$hexDecodedBytes].",
        [ql]: "Union variant out of range. Expected an index between $minRange and $maxRange, got $variant.",
        [ud]: "No random values implementation could be found.",
        [Nd]: "instruction requires an uninitialized account",
        [Fd]: "instruction tries to borrow reference for an account which is already borrowed",
        [Vd]: "instruction left account with an outstanding borrowed reference",
        [Md]: "program other than the account's owner changed the size of the account data",
        [Ad]: "account data too small for instruction",
        [Kd]: "instruction expected an executable account",
        [ff]: "An account does not have enough lamports to be rent-exempt",
        [hf]: "Program arithmetic overflowed",
        [df]: "Failed to serialize or deserialize account data: $encodedData",
        [Rf]: "Builtin programs must consume compute units",
        [Xd]: "Cross-program invocation call depth too deep",
        [nf]: "Computational budget exceeded",
        [$d]: "custom program error: #$code",
        [Pd]: "instruction contains duplicate accounts",
        [qd]: "instruction modifications of multiply-passed account differ",
        [jd]: "executable accounts must be rent exempt",
        [Gd]: "instruction changed executable accounts data",
        [Hd]: "instruction changed the balance of an executable account",
        [Dd]: "instruction changed executable bit of an account",
        [Bd]: "instruction modified data of an account it does not own",
        [Ld]: "instruction spent from the balance of an account it does not own",
        [Rd]: "generic instruction error",
        [gf]: "Provided owner is not allowed",
        [cf]: "Account is immutable",
        [uf]: "Incorrect authority provided",
        [Id]: "incorrect program id for instruction",
        [wd]: "insufficient funds for instruction",
        [Sd]: "invalid account data for instruction",
        [lf]: "Invalid account owner",
        [bd]: "invalid program argument",
        [Wd]: "program returned invalid error code",
        [Ed]: "invalid instruction data",
        [tf]: "Failed to reallocate account data",
        [ef]: "Provided seeds do not result in a valid address",
        [yf]: "Accounts data allocations exceeded the maximum allowed per transaction",
        [pf]: "Max accounts exceeded",
        [mf]: "Max instruction trace length exceeded",
        [Qd]: "Length of the seed is too long for address generation",
        [Zd]: "An account required by the instruction is missing",
        [Od]: "missing required signature for instruction",
        [vd]: "instruction illegally modified the program id of an account",
        [zd]: "insufficient account keys for instruction",
        [rf]: "Cross-program invocation with unauthorized signer or writable account",
        [sf]: "Failed to create program execution environment",
        [af]: "Program failed to compile",
        [of]: "Program failed to complete",
        [xd]: "instruction modified data of a read-only account",
        [Cd]: "instruction changed the balance of a read-only account",
        [Jd]: "Cross-program invocation reentrancy not allowed for this instruction",
        [Ud]: "instruction modified rent epoch of an account",
        [Td]: "sum of account balances before and after instruction do not match",
        [kd]: "instruction requires an initialized account",
        [md]: "",
        [Yd]: "Unsupported program id",
        [_f]: "Unsupported sysvar",
        [gd]: "The instruction does not have any accounts.",
        [yd]: "The instruction does not have any data.",
        [pd]: "Expected instruction to have progress address $expectedProgramAddress, got $actualProgramAddress.",
        [fu]: "Expected base58 encoded blockhash to decode to a byte array of length 32. Actual length: $actualLength.",
        [cu]: "The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`",
        [sh]: "Invariant violation: Found no abortable iterable cache entry for key `$cacheKey`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
        [ih]: "Invariant violation: This data publisher does not publish to the channel named `$channelName`. Supported channels include $supportedChannelNames.",
        [rh]: "Invariant violation: WebSocket message iterator state is corrupt; iterated without first resolving existing message promise. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
        [nh]: "Invariant violation: WebSocket message iterator is missing state storage. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
        [oh]: "Invariant violation: Switch statement non-exhaustive. Received unexpected value `$unexpectedValue`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
        [mu]: "JSON-RPC error: Internal JSON-RPC error ($__serverMessage)",
        [Ru]: "JSON-RPC error: Invalid method parameter(s) ($__serverMessage)",
        [Eu]: "JSON-RPC error: The JSON sent is not a valid `Request` object ($__serverMessage)",
        [bu]: "JSON-RPC error: The method does not exist / is not available ($__serverMessage)",
        [pu]: "JSON-RPC error: An error occurred on the server while parsing the JSON text ($__serverMessage)",
        [Ou]: "$__serverMessage",
        [Uu]: "$__serverMessage",
        [xu]: "$__serverMessage",
        [wu]: "$__serverMessage",
        [ku]: "$__serverMessage",
        [Tu]: "$__serverMessage",
        [Su]: "Minimum context slot has not been reached",
        [Cu]: "Node is unhealthy; behind by $numSlotsBehind slots",
        [vu]: "No snapshot",
        [Du]: "Transaction simulation failed",
        [Lu]: "$__serverMessage",
        [Nu]: "Transaction history is not available from this node",
        [Bu]: "$__serverMessage",
        [Iu]: "Transaction signature length mismatch",
        [Pu]: "Transaction signature verification failure",
        [Au]: "$__serverMessage",
        [dd]: "Key pair bytes must be of length 64, got $byteLength.",
        [fd]: "Expected private key bytes with length 32. Actual length: $actualLength.",
        [ld]: "Expected base58-encoded signature to decode to a byte array of length 64. Actual length: $actualLength.",
        [_d]: "The provided private key does not match the provided public key.",
        [hd]: "Expected base58-encoded signature string of length in the range [64, 88]. Actual length: $actualLength.",
        [lu]: "Lamports value must be in the range [0, 2e64-1]",
        [hu]: "`$value` cannot be parsed as a `BigInt`",
        [yu]: "$message",
        [_u]: "`$value` cannot be parsed as a `Number`",
        [uu]: "No nonce account could be found at address `$nonceAccountAddress`",
        [Zl]: "The notification name must end in 'Notifications' and the API must supply a subscription plan creator function for the notification '$notificationName'.",
        [Ql]: "WebSocket was closed before payload could be added to the send buffer",
        [eh]: "WebSocket connection closed",
        [th]: "WebSocket failed to connect",
        [Jl]: "Failed to obtain a subscription id from the server",
        [Xl]: "Could not find an API plan for RPC method: `$method`",
        [Hl]: "The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was `$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds `Number.MAX_SAFE_INTEGER`.",
        [Yl]: "HTTP error ($statusCode): $message",
        [jl]: "HTTP header(s) forbidden: $headers. Learn more at https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.",
        [bf]: "Multiple distinct signers were identified for address `$address`. Please ensure that you are using the same signer instance for each address.",
        [Ef]: "The provided value does not implement the `KeyPairSigner` interface",
        [Af]: "The provided value does not implement the `MessageModifyingSigner` interface",
        [wf]: "The provided value does not implement the `MessagePartialSigner` interface",
        [Sf]: "The provided value does not implement any of the `MessageSigner` interfaces",
        [Of]: "The provided value does not implement the `TransactionModifyingSigner` interface",
        [Nf]: "The provided value does not implement the `TransactionPartialSigner` interface",
        [kf]: "The provided value does not implement the `TransactionSendingSigner` interface",
        [If]: "The provided value does not implement any of the `TransactionSigner` interfaces",
        [Tf]: "More than one `TransactionSendingSigner` was identified.",
        [vf]: "No `TransactionSendingSigner` was identified. Please provide a valid `TransactionWithSingleSendingSigner` transaction.",
        [Lf]: "Wallet account signers do not support signing multiple messages/transactions in a single operation",
        [cd]: "Cannot export a non-extractable key.",
        [nd]: "No digest implementation could be found.",
        [td]: "Cryptographic operations are only allowed in secure browser contexts. Read more here: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.",
        [rd]: `This runtime does not support the generation of Ed25519 key pairs.

Install @solana/webcrypto-ed25519-polyfill and call its \`install\` function before generating keys in environments that do not support Ed25519.

For a list of runtimes that currently support Ed25519 operations, visit https://github.com/WICG/webcrypto-secure-curves/issues/20.`,
        [sd]: "No signature verification implementation could be found.",
        [od]: "No key generation implementation could be found.",
        [id]: "No signing implementation could be found.",
        [ad]: "No key export implementation could be found.",
        [gu]: "Timestamp value must be in the range [-(2n ** 63n), (2n ** 63n) - 1]. `$value` given",
        [gl]: "Transaction processing left an account with an outstanding borrowed reference",
        [el]: "Account in use",
        [tl]: "Account loaded twice",
        [nl]: "Attempt to debit an account but found no record of a prior credit.",
        [Sl]: "Transaction loads an address table account that doesn't exist",
        [il]: "This transaction has already been processed",
        [al]: "Blockhash not found",
        [cl]: "Loader call chain is too deep",
        [_l]: "Transactions are currently disabled due to cluster maintenance",
        [Tl]: "Transaction contains a duplicate instruction ($index) that is not allowed",
        [sl]: "Insufficient funds for fee",
        [vl]: "Transaction results in an account ($accountIndex) with insufficient funds for rent",
        [ol]: "This account may not be used to pay transaction fees",
        [dl]: "Transaction contains an invalid account reference",
        [wl]: "Transaction loads an address table account with invalid data",
        [Il]: "Transaction address table lookup uses an invalid index",
        [Al]: "Transaction loads an address table account with an invalid owner",
        [Bl]: "LoadedAccountsDataSizeLimit set for transaction must be greater than 0.",
        [ll]: "This program may not be used for executing instructions",
        [Ol]: "Transaction leaves an account with a lower balance than rent-exempt minimum",
        [ml]: "Transaction loads a writable account that cannot be written",
        [Ll]: "Transaction exceeded max loaded accounts data size cap",
        [ul]: "Transaction requires a fee but has no signature present",
        [rl]: "Attempt to load a program that does not exist",
        [xl]: "Execution of the program referenced by account at index $accountIndex is temporarily restricted.",
        [Cl]: "ResanitizationNeeded",
        [hl]: "Transaction failed to sanitize accounts offsets correctly",
        [fl]: "Transaction did not pass signature verification",
        [El]: "Transaction locked too many accounts",
        [Pl]: "Sum of account balances before and after transaction do not match",
        [Qf]: "The transaction failed with the error `$errorName`",
        [pl]: "Transaction version is unsupported",
        [bl]: "Transaction would exceed account data limit within the block",
        [kl]: "Transaction would exceed total account data limit",
        [Rl]: "Transaction would exceed max account limit within the block",
        [yl]: "Transaction would exceed max Block Cost Limit",
        [Nl]: "Transaction would exceed max Vote Cost Limit",
        [Hf]: "Attempted to sign a transaction with an address that is not a signer for it",
        [Vf]: "Transaction is missing an address at index: $index.",
        [jf]: "Transaction has no expected signers therefore it cannot be encoded",
        [Jf]: "Transaction size $transactionSize exceeds limit of $transactionSizeLimit bytes",
        [xf]: "Transaction does not have a blockhash lifetime",
        [Pf]: "Transaction is not a durable nonce transaction",
        [Uf]: "Contents of these address lookup tables unknown: $lookupTableAddresses",
        [zf]: "Lookup of address at index $highestRequestedIndex failed for lookup table `$lookupTableAddress`. Highest known index is $highestKnownIndex. The lookup table may have been extended since its contents were retrieved",
        [Kf]: "No fee payer set in CompiledTransaction",
        [Mf]: "Could not find program address at index $index",
        [Xf]: "Failed to estimate the compute unit consumption for this transaction message. This is likely because simulating the transaction failed. Inspect the `cause` property of this error to learn more",
        [Zf]: "Transaction failed when it was simulated in order to estimate the compute unit consumption. The compute unit estimate provided is for a transaction that failed when simulated and may not be representative of the compute units this transaction would consume if successful. Inspect the `cause` property of this error to learn more",
        [qf]: "Transaction is missing a fee payer.",
        [$f]: "Could not determine this transaction's signature. Make sure that the transaction has been signed by its fee payer.",
        [Gf]: "Transaction first instruction is not advance nonce account instruction.",
        [Wf]: "Transaction with no instructions cannot be durable nonce transaction.",
        [Bf]: "This transaction includes an address (`$programAddress`) which is both invoked and set as the fee payer. Program addresses may not pay fees",
        [Cf]: "This transaction includes an address (`$programAddress`) which is both invoked and marked writable. Program addresses may not be writable",
        [Yf]: "The transaction message expected the transaction to have $signerAddressesLength signatures, got $signaturesLength.",
        [Ff]: "Transaction is missing signatures for addresses: $addresses.",
        [Df]: "Transaction version must be in the range [0, 127]. `$actualVersion` given"
    };
    It = class extends Error {
        cause = this.cause;
        context;
        constructor(...[r,e]) {
            let t, n;
            if (e) {
                let o = e
                  , {cause: i} = o
                  , c = Qe(o, ["cause"]);
                i && (n = {
                    cause: i
                }),
                Object.keys(c).length > 0 && (t = c)
            }
            let s = uh(r, t);
            super(s, n),
            this.context = K({
                __code: r
            }, t),
            this.name = "SolanaError"
        }
    }
}
);
function dh(r, e) {
    return "fixedSize"in e ? e.fixedSize : e.getSizeFromValue(r)
}
function Ii(r) {
    return Object.freeze(H(K({}, r), {
        encode: e => {
            let t = new Uint8Array(dh(e, r));
            return r.write(e, t, 0),
            t
        }
    }))
}
function Oi(r) {
    return Object.freeze(H(K({}, r), {
        decode: (e, t=0) => r.read(e, t)[0]
    }))
}
function rn(r) {
    return "fixedSize"in r && typeof r.fixedSize == "number"
}
function Ni(r, e) {
    if (rn(r) !== rn(e))
        throw new It(Is);
    if (rn(r) && rn(e) && r.fixedSize !== e.fixedSize)
        throw new It(Os,{
            decoderFixedSize: e.fixedSize,
            encoderFixedSize: r.fixedSize
        });
    if (!rn(r) && !rn(e) && r.maxSize !== e.maxSize)
        throw new It(Ns,{
            decoderMaxSize: e.maxSize,
            encoderMaxSize: r.maxSize
        });
    return H(K(K({}, e), r), {
        decode: e.decode,
        encode: r.encode,
        read: e.read,
        write: r.write
    })
}
function ki(r, e, t=0) {
    if (e.length - t <= 0)
        throw new It(As,{
            codecDescription: r
        })
}
function Ti(r, e, t, n=0) {
    let s = t.length - n;
    if (s < e)
        throw new It(ws,{
            bytesLength: s,
            codecDescription: r,
            expected: e
        })
}
var vi = ce( () => {
    "use strict";
    Ts()
}
);
function fh(r, e, t, n) {
    if (n < e || n > t)
        throw new It(ks,{
            codecDescription: r,
            max: t,
            min: e,
            value: n
        })
}
function Li(r) {
    return r?.endian !== 1
}
function lh(r) {
    return Ii({
        fixedSize: r.size,
        write(e, t, n) {
            r.range && fh(r.name, r.range[0], r.range[1], e);
            let s = new ArrayBuffer(r.size);
            return r.set(new DataView(s), e, Li(r.config)),
            t.set(new Uint8Array(s), n),
            n + r.size
        }
    })
}
function hh(r) {
    return Oi({
        fixedSize: r.size,
        read(e, t=0) {
            ki(r.name, e, t),
            Ti(r.name, r.size, e, t);
            let n = new DataView(_h(e, t, r.size));
            return [r.get(n, Li(r.config)), t + r.size]
        }
    })
}
function _h(r, e, t) {
    let n = r.byteOffset + (e ?? 0)
      , s = t ?? r.byteLength;
    return r.buffer.slice(n, n + s)
}
var vs, gh, Bi, Ci = ce( () => {
    "use strict";
    Ts();
    vi();
    vs = (r={}) => lh({
        config: r,
        name: "u64",
        range: [0n, BigInt("0xffffffffffffffff")],
        set: (e, t, n) => e.setBigUint64(0, BigInt(t), n),
        size: 8
    }),
    gh = (r={}) => hh({
        config: r,
        get: (e, t) => e.getBigUint64(0, t),
        name: "u64",
        size: 8
    }),
    Bi = (r={}) => Ni(vs(r), gh(r))
}
);
function yh(r) {
    return In(r) && typeof r[Symbol.iterator] == "function"
}
function In(r) {
    return typeof r == "object" && r != null
}
function Er(r) {
    return In(r) && !Array.isArray(r)
}
function tt(r) {
    return typeof r == "symbol" ? r.toString() : typeof r == "string" ? JSON.stringify(r) : `${r}`
}
function ph(r) {
    let {done: e, value: t} = r.next();
    return e ? void 0 : t
}
function mh(r, e, t, n) {
    if (r === !0)
        return;
    r === !1 ? r = {} : typeof r == "string" && (r = {
        message: r
    });
    let {path: s, branch: o} = e
      , {type: i} = t
      , {refinement: c, message: a=`Expected a value of type \`${i}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${tt(n)}\``} = r;
    return H(K({
        value: n,
        type: i,
        refinement: c,
        key: s[s.length - 1],
        path: s,
        branch: o
    }, r), {
        message: a
    })
}
function *xi(r, e, t, n) {
    yh(r) || (r = [r]);
    for (let s of r) {
        let o = mh(s, e, t, n);
        o && (yield o)
    }
}
function *Bs(r, e, t={}) {
    let {path: n=[], branch: s=[r], coerce: o=!1, mask: i=!1} = t
      , c = {
        path: n,
        branch: s,
        mask: i
    };
    o && (r = e.coercer(r, c));
    let a = "valid";
    for (let d of e.validator(r, c))
        d.explanation = t.message,
        a = "not_valid",
        yield[d, void 0];
    for (let[d,f,y] of e.entries(r, c)) {
        let h = Bs(f, y, {
            path: d === void 0 ? n : [...n, d],
            branch: d === void 0 ? s : [...s, f],
            coerce: o,
            mask: i,
            message: t.message
        });
        for (let l of h)
            l[0] ? (a = l[0].refinement != null ? "not_refined" : "not_valid",
            yield[l[0], void 0]) : o && (f = l[1],
            d === void 0 ? r = f : r instanceof Map ? r.set(d, f) : r instanceof Set ? r.add(f) : In(r) && (f !== void 0 || d in r) && (r[d] = f))
    }
    if (a !== "not_valid")
        for (let d of e.refiner(r, c))
            d.explanation = t.message,
            a = "not_refined",
            yield[d, void 0];
    a === "valid" && (yield[void 0, r])
}
function Cs(r, e, t) {
    let n = On(r, e, {
        message: t
    });
    if (n[0])
        throw n[0]
}
function L(r, e, t) {
    let n = On(r, e, {
        coerce: !0,
        message: t
    });
    if (n[0])
        throw n[0];
    return n[1]
}
function Rh(r, e, t) {
    let n = On(r, e, {
        coerce: !0,
        mask: !0,
        message: t
    });
    if (n[0])
        throw n[0];
    return n[1]
}
function Pi(r, e) {
    return !On(r, e)[0]
}
function On(r, e, t={}) {
    let n = Bs(r, e, t)
      , s = ph(n);
    return s[0] ? [new Ls(s[0],function*() {
        for (let i of n)
            i[0] && (yield i[0])
    }
    ), void 0] : [void 0, s[1]]
}
function Mt(r, e) {
    return new Je({
        type: r,
        schema: null,
        validator: e
    })
}
function Di() {
    return Mt("any", () => !0)
}
function C(r) {
    return new Je({
        type: "array",
        schema: r,
        *entries(e) {
            if (r && Array.isArray(e))
                for (let[t,n] of e.entries())
                    yield[t, n, r]
        },
        coercer(e) {
            return Array.isArray(e) ? e.slice() : e
        },
        validator(e) {
            return Array.isArray(e) || `Expected an array value, but received: ${tt(e)}`
        }
    })
}
function nt() {
    return Mt("boolean", r => typeof r == "boolean")
}
function Sr(r) {
    return Mt("instance", e => e instanceof r || `Expected a \`${r.name}\` instance, but received: ${tt(e)}`)
}
function me(r) {
    let e = tt(r)
      , t = typeof r;
    return new Je({
        type: "literal",
        schema: t === "string" || t === "number" || t === "boolean" ? r : null,
        validator(n) {
            return n === r || `Expected the literal \`${e}\`, but received: ${tt(n)}`
        }
    })
}
function bh() {
    return Mt("never", () => !1)
}
function x(r) {
    return new Je(H(K({}, r), {
        validator: (e, t) => e === null || r.validator(e, t),
        refiner: (e, t) => e === null || r.refiner(e, t)
    }))
}
function g() {
    return Mt("number", r => typeof r == "number" && !isNaN(r) || `Expected a number, but received: ${tt(r)}`)
}
function F(r) {
    return new Je(H(K({}, r), {
        validator: (e, t) => e === void 0 || r.validator(e, t),
        refiner: (e, t) => e === void 0 || r.refiner(e, t)
    }))
}
function xs(r, e) {
    return new Je({
        type: "record",
        schema: null,
        *entries(t) {
            if (In(t))
                for (let n in t) {
                    let s = t[n];
                    yield[n, n, r],
                    yield[n, s, e]
                }
        },
        validator(t) {
            return Er(t) || `Expected an object, but received: ${tt(t)}`
        },
        coercer(t) {
            return Er(t) ? K({}, t) : t
        }
    })
}
function k() {
    return Mt("string", r => typeof r == "string" || `Expected a string, but received: ${tt(r)}`)
}
function Ar(r) {
    let e = bh();
    return new Je({
        type: "tuple",
        schema: null,
        *entries(t) {
            if (Array.isArray(t)) {
                let n = Math.max(r.length, t.length);
                for (let s = 0; s < n; s++)
                    yield[s, t[s], r[s] || e]
            }
        },
        validator(t) {
            return Array.isArray(t) || `Expected an array, but received: ${tt(t)}`
        },
        coercer(t) {
            return Array.isArray(t) ? t.slice() : t
        }
    })
}
function I(r) {
    let e = Object.keys(r);
    return new Je({
        type: "type",
        schema: r,
        *entries(t) {
            if (In(t))
                for (let n of e)
                    yield[n, t[n], r[n]]
        },
        validator(t) {
            return Er(t) || `Expected an object, but received: ${tt(t)}`
        },
        coercer(t) {
            return Er(t) ? K({}, t) : t
        }
    })
}
function Pe(r) {
    let e = r.map(t => t.type).join(" | ");
    return new Je({
        type: "union",
        schema: null,
        coercer(t, n) {
            for (let s of r) {
                let[o,i] = s.validate(t, {
                    coerce: !0,
                    mask: n.mask
                });
                if (!o)
                    return i
            }
            return t
        },
        validator(t, n) {
            let s = [];
            for (let o of r) {
                let[...i] = Bs(t, o, n)
                  , [c] = i;
                if (c[0])
                    for (let[a] of i)
                        a && s.push(a);
                else
                    return []
            }
            return [`Expected the value to satisfy a union of \`${e}\`, but received: ${tt(t)}`, ...s]
        }
    })
}
function Kt() {
    return Mt("unknown", () => !0)
}
function sn(r, e, t) {
    return new Je(H(K({}, r), {
        coercer: (n, s) => Pi(n, e) ? r.coercer(t(n, s), s) : r.coercer(n, s)
    }))
}
var Ls, Je, Ui = ce( () => {
    "use strict";
    Ls = class extends TypeError {
        constructor(e, t) {
            let n, d = e, {message: s, explanation: o} = d, i = Qe(d, ["message", "explanation"]), {path: c} = e, a = c.length === 0 ? s : `At path: ${c.join(".")} -- ${s}`;
            super(o ?? a),
            o != null && (this.cause = a),
            Object.assign(this, i),
            this.name = this.constructor.name,
            this.failures = () => n ?? (n = [e, ...t()])
        }
    }
    ;
    Je = class {
        constructor(e) {
            let {type: t, schema: n, validator: s, refiner: o, coercer: i=a => a, entries: c=function*() {}
            } = e;
            this.type = t,
            this.schema = n,
            this.entries = c,
            this.coercer = i,
            s ? this.validator = (a, d) => {
                let f = s(a, d);
                return xi(f, d, this, a)
            }
            : this.validator = () => [],
            o ? this.refiner = (a, d) => {
                let f = o(a, d);
                return xi(f, d, this, a)
            }
            : this.refiner = () => []
        }
        assert(e, t) {
            return Cs(e, this, t)
        }
        create(e, t) {
            return L(e, this, t)
        }
        is(e) {
            return Pi(e, this)
        }
        mask(e, t) {
            return Rh(e, this, t)
        }
        validate(e, t={}) {
            return On(e, this, t)
        }
    }
}
);
function Nn() {
    if (!wr && (wr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto),
    !wr))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return wr(Eh)
}
var wr, Eh, Ps = ce( () => {
    "use strict";
    Eh = new Uint8Array(16)
}
);
var zi, Mi = ce( () => {
    "use strict";
    zi = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
}
);
function Sh(r) {
    return typeof r == "string" && zi.test(r)
}
var Ot, kn = ce( () => {
    "use strict";
    Mi();
    Ot = Sh
}
);
function Ah(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
      , t = (Le[r[e + 0]] + Le[r[e + 1]] + Le[r[e + 2]] + Le[r[e + 3]] + "-" + Le[r[e + 4]] + Le[r[e + 5]] + "-" + Le[r[e + 6]] + Le[r[e + 7]] + "-" + Le[r[e + 8]] + Le[r[e + 9]] + "-" + Le[r[e + 10]] + Le[r[e + 11]] + Le[r[e + 12]] + Le[r[e + 13]] + Le[r[e + 14]] + Le[r[e + 15]]).toLowerCase();
    if (!Ot(t))
        throw TypeError("Stringified UUID is invalid");
    return t
}
var Le, Ir, Nt, Tn = ce( () => {
    "use strict";
    kn();
    Le = [];
    for (Ir = 0; Ir < 256; ++Ir)
        Le.push((Ir + 256).toString(16).substr(1));
    Nt = Ah
}
);
function wh(r, e, t) {
    var n = e && t || 0
      , s = e || new Array(16);
    r = r || {};
    var o = r.node || Ki
      , i = r.clockseq !== void 0 ? r.clockseq : Ds;
    if (o == null || i == null) {
        var c = r.random || (r.rng || Nn)();
        o == null && (o = Ki = [c[0] | 1, c[1], c[2], c[3], c[4], c[5]]),
        i == null && (i = Ds = (c[6] << 8 | c[7]) & 16383)
    }
    var a = r.msecs !== void 0 ? r.msecs : Date.now()
      , d = r.nsecs !== void 0 ? r.nsecs : zs + 1
      , f = a - Us + (d - zs) / 1e4;
    if (f < 0 && r.clockseq === void 0 && (i = i + 1 & 16383),
    (f < 0 || a > Us) && r.nsecs === void 0 && (d = 0),
    d >= 1e4)
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    Us = a,
    zs = d,
    Ds = i,
    a += 122192928e5;
    var y = ((a & 268435455) * 1e4 + d) % 4294967296;
    s[n++] = y >>> 24 & 255,
    s[n++] = y >>> 16 & 255,
    s[n++] = y >>> 8 & 255,
    s[n++] = y & 255;
    var h = a / 4294967296 * 1e4 & 268435455;
    s[n++] = h >>> 8 & 255,
    s[n++] = h & 255,
    s[n++] = h >>> 24 & 15 | 16,
    s[n++] = h >>> 16 & 255,
    s[n++] = i >>> 8 | 128,
    s[n++] = i & 255;
    for (var l = 0; l < 6; ++l)
        s[n + l] = o[l];
    return e || Nt(s)
}
var Ki, Ds, Us, zs, Fi, Vi = ce( () => {
    "use strict";
    Ps();
    Tn();
    Us = 0,
    zs = 0;
    Fi = wh
}
);
function Ih(r) {
    if (!Ot(r))
        throw TypeError("Invalid UUID");
    var e, t = new Uint8Array(16);
    return t[0] = (e = parseInt(r.slice(0, 8), 16)) >>> 24,
    t[1] = e >>> 16 & 255,
    t[2] = e >>> 8 & 255,
    t[3] = e & 255,
    t[4] = (e = parseInt(r.slice(9, 13), 16)) >>> 8,
    t[5] = e & 255,
    t[6] = (e = parseInt(r.slice(14, 18), 16)) >>> 8,
    t[7] = e & 255,
    t[8] = (e = parseInt(r.slice(19, 23), 16)) >>> 8,
    t[9] = e & 255,
    t[10] = (e = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255,
    t[11] = e / 4294967296 & 255,
    t[12] = e >>> 24 & 255,
    t[13] = e >>> 16 & 255,
    t[14] = e >>> 8 & 255,
    t[15] = e & 255,
    t
}
var Or, Ms = ce( () => {
    "use strict";
    kn();
    Or = Ih
}
);
function Oh(r) {
    r = unescape(encodeURIComponent(r));
    for (var e = [], t = 0; t < r.length; ++t)
        e.push(r.charCodeAt(t));
    return e
}
function Nr(r, e, t) {
    function n(s, o, i, c) {
        if (typeof s == "string" && (s = Oh(s)),
        typeof o == "string" && (o = Or(o)),
        o.length !== 16)
            throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var a = new Uint8Array(16 + s.length);
        if (a.set(o),
        a.set(s, o.length),
        a = t(a),
        a[6] = a[6] & 15 | e,
        a[8] = a[8] & 63 | 128,
        i) {
            c = c || 0;
            for (var d = 0; d < 16; ++d)
                i[c + d] = a[d];
            return i
        }
        return Nt(a)
    }
    try {
        n.name = r
    } catch {}
    return n.DNS = Nh,
    n.URL = kh,
    n
}
var Nh, kh, Ks = ce( () => {
    "use strict";
    Tn();
    Ms();
    Nh = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    kh = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
}
);
function Th(r) {
    if (typeof r == "string") {
        var e = unescape(encodeURIComponent(r));
        r = new Uint8Array(e.length);
        for (var t = 0; t < e.length; ++t)
            r[t] = e.charCodeAt(t)
    }
    return vh(Lh(Bh(r), r.length * 8))
}
function vh(r) {
    for (var e = [], t = r.length * 32, n = "0123456789abcdef", s = 0; s < t; s += 8) {
        var o = r[s >> 5] >>> s % 32 & 255
          , i = parseInt(n.charAt(o >>> 4 & 15) + n.charAt(o & 15), 16);
        e.push(i)
    }
    return e
}
function qi(r) {
    return (r + 64 >>> 9 << 4) + 14 + 1
}
function Lh(r, e) {
    r[e >> 5] |= 128 << e % 32,
    r[qi(e) - 1] = e;
    for (var t = 1732584193, n = -271733879, s = -1732584194, o = 271733878, i = 0; i < r.length; i += 16) {
        var c = t
          , a = n
          , d = s
          , f = o;
        t = De(t, n, s, o, r[i], 7, -680876936),
        o = De(o, t, n, s, r[i + 1], 12, -389564586),
        s = De(s, o, t, n, r[i + 2], 17, 606105819),
        n = De(n, s, o, t, r[i + 3], 22, -1044525330),
        t = De(t, n, s, o, r[i + 4], 7, -176418897),
        o = De(o, t, n, s, r[i + 5], 12, 1200080426),
        s = De(s, o, t, n, r[i + 6], 17, -1473231341),
        n = De(n, s, o, t, r[i + 7], 22, -45705983),
        t = De(t, n, s, o, r[i + 8], 7, 1770035416),
        o = De(o, t, n, s, r[i + 9], 12, -1958414417),
        s = De(s, o, t, n, r[i + 10], 17, -42063),
        n = De(n, s, o, t, r[i + 11], 22, -1990404162),
        t = De(t, n, s, o, r[i + 12], 7, 1804603682),
        o = De(o, t, n, s, r[i + 13], 12, -40341101),
        s = De(s, o, t, n, r[i + 14], 17, -1502002290),
        n = De(n, s, o, t, r[i + 15], 22, 1236535329),
        t = Ue(t, n, s, o, r[i + 1], 5, -165796510),
        o = Ue(o, t, n, s, r[i + 6], 9, -1069501632),
        s = Ue(s, o, t, n, r[i + 11], 14, 643717713),
        n = Ue(n, s, o, t, r[i], 20, -373897302),
        t = Ue(t, n, s, o, r[i + 5], 5, -701558691),
        o = Ue(o, t, n, s, r[i + 10], 9, 38016083),
        s = Ue(s, o, t, n, r[i + 15], 14, -660478335),
        n = Ue(n, s, o, t, r[i + 4], 20, -405537848),
        t = Ue(t, n, s, o, r[i + 9], 5, 568446438),
        o = Ue(o, t, n, s, r[i + 14], 9, -1019803690),
        s = Ue(s, o, t, n, r[i + 3], 14, -187363961),
        n = Ue(n, s, o, t, r[i + 8], 20, 1163531501),
        t = Ue(t, n, s, o, r[i + 13], 5, -1444681467),
        o = Ue(o, t, n, s, r[i + 2], 9, -51403784),
        s = Ue(s, o, t, n, r[i + 7], 14, 1735328473),
        n = Ue(n, s, o, t, r[i + 12], 20, -1926607734),
        t = ze(t, n, s, o, r[i + 5], 4, -378558),
        o = ze(o, t, n, s, r[i + 8], 11, -2022574463),
        s = ze(s, o, t, n, r[i + 11], 16, 1839030562),
        n = ze(n, s, o, t, r[i + 14], 23, -35309556),
        t = ze(t, n, s, o, r[i + 1], 4, -1530992060),
        o = ze(o, t, n, s, r[i + 4], 11, 1272893353),
        s = ze(s, o, t, n, r[i + 7], 16, -155497632),
        n = ze(n, s, o, t, r[i + 10], 23, -1094730640),
        t = ze(t, n, s, o, r[i + 13], 4, 681279174),
        o = ze(o, t, n, s, r[i], 11, -358537222),
        s = ze(s, o, t, n, r[i + 3], 16, -722521979),
        n = ze(n, s, o, t, r[i + 6], 23, 76029189),
        t = ze(t, n, s, o, r[i + 9], 4, -640364487),
        o = ze(o, t, n, s, r[i + 12], 11, -421815835),
        s = ze(s, o, t, n, r[i + 15], 16, 530742520),
        n = ze(n, s, o, t, r[i + 2], 23, -995338651),
        t = Me(t, n, s, o, r[i], 6, -198630844),
        o = Me(o, t, n, s, r[i + 7], 10, 1126891415),
        s = Me(s, o, t, n, r[i + 14], 15, -1416354905),
        n = Me(n, s, o, t, r[i + 5], 21, -57434055),
        t = Me(t, n, s, o, r[i + 12], 6, 1700485571),
        o = Me(o, t, n, s, r[i + 3], 10, -1894986606),
        s = Me(s, o, t, n, r[i + 10], 15, -1051523),
        n = Me(n, s, o, t, r[i + 1], 21, -2054922799),
        t = Me(t, n, s, o, r[i + 8], 6, 1873313359),
        o = Me(o, t, n, s, r[i + 15], 10, -30611744),
        s = Me(s, o, t, n, r[i + 6], 15, -1560198380),
        n = Me(n, s, o, t, r[i + 13], 21, 1309151649),
        t = Me(t, n, s, o, r[i + 4], 6, -145523070),
        o = Me(o, t, n, s, r[i + 11], 10, -1120210379),
        s = Me(s, o, t, n, r[i + 2], 15, 718787259),
        n = Me(n, s, o, t, r[i + 9], 21, -343485551),
        t = kt(t, c),
        n = kt(n, a),
        s = kt(s, d),
        o = kt(o, f)
    }
    return [t, n, s, o]
}
function Bh(r) {
    if (r.length === 0)
        return [];
    for (var e = r.length * 8, t = new Uint32Array(qi(e)), n = 0; n < e; n += 8)
        t[n >> 5] |= (r[n / 8] & 255) << n % 32;
    return t
}
function kt(r, e) {
    var t = (r & 65535) + (e & 65535)
      , n = (r >> 16) + (e >> 16) + (t >> 16);
    return n << 16 | t & 65535
}
function Ch(r, e) {
    return r << e | r >>> 32 - e
}
function kr(r, e, t, n, s, o) {
    return kt(Ch(kt(kt(e, r), kt(n, o)), s), t)
}
function De(r, e, t, n, s, o, i) {
    return kr(e & t | ~e & n, r, e, s, o, i)
}
function Ue(r, e, t, n, s, o, i) {
    return kr(e & n | t & ~n, r, e, s, o, i)
}
function ze(r, e, t, n, s, o, i) {
    return kr(e ^ t ^ n, r, e, s, o, i)
}
function Me(r, e, t, n, s, o, i) {
    return kr(t ^ (e | ~n), r, e, s, o, i)
}
var $i, Wi = ce( () => {
    "use strict";
    $i = Th
}
);
var xh, Gi, Hi = ce( () => {
    "use strict";
    Ks();
    Wi();
    xh = Nr("v3", 48, $i),
    Gi = xh
}
);
function Ph(r, e, t) {
    r = r || {};
    var n = r.random || (r.rng || Nn)();
    if (n[6] = n[6] & 15 | 64,
    n[8] = n[8] & 63 | 128,
    e) {
        t = t || 0;
        for (var s = 0; s < 16; ++s)
            e[t + s] = n[s];
        return e
    }
    return Nt(n)
}
var ji, Yi = ce( () => {
    "use strict";
    Ps();
    Tn();
    ji = Ph
}
);
function Dh(r, e, t, n) {
    switch (r) {
    case 0:
        return e & t ^ ~e & n;
    case 1:
        return e ^ t ^ n;
    case 2:
        return e & t ^ e & n ^ t & n;
    case 3:
        return e ^ t ^ n
    }
}
function Fs(r, e) {
    return r << e | r >>> 32 - e
}
function Uh(r) {
    var e = [1518500249, 1859775393, 2400959708, 3395469782]
      , t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof r == "string") {
        var n = unescape(encodeURIComponent(r));
        r = [];
        for (var s = 0; s < n.length; ++s)
            r.push(n.charCodeAt(s))
    } else
        Array.isArray(r) || (r = Array.prototype.slice.call(r));
    r.push(128);
    for (var o = r.length / 4 + 2, i = Math.ceil(o / 16), c = new Array(i), a = 0; a < i; ++a) {
        for (var d = new Uint32Array(16), f = 0; f < 16; ++f)
            d[f] = r[a * 64 + f * 4] << 24 | r[a * 64 + f * 4 + 1] << 16 | r[a * 64 + f * 4 + 2] << 8 | r[a * 64 + f * 4 + 3];
        c[a] = d
    }
    c[i - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32),
    c[i - 1][14] = Math.floor(c[i - 1][14]),
    c[i - 1][15] = (r.length - 1) * 8 & 4294967295;
    for (var y = 0; y < i; ++y) {
        for (var h = new Uint32Array(80), l = 0; l < 16; ++l)
            h[l] = c[y][l];
        for (var _ = 16; _ < 80; ++_)
            h[_] = Fs(h[_ - 3] ^ h[_ - 8] ^ h[_ - 14] ^ h[_ - 16], 1);
        for (var m = t[0], b = t[1], R = t[2], T = t[3], N = t[4], D = 0; D < 80; ++D) {
            var J = Math.floor(D / 20)
              , ee = Fs(m, 5) + Dh(J, b, R, T) + N + e[J] + h[D] >>> 0;
            N = T,
            T = R,
            R = Fs(b, 30) >>> 0,
            b = m,
            m = ee
        }
        t[0] = t[0] + m >>> 0,
        t[1] = t[1] + b >>> 0,
        t[2] = t[2] + R >>> 0,
        t[3] = t[3] + T >>> 0,
        t[4] = t[4] + N >>> 0
    }
    return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255]
}
var Xi, Zi = ce( () => {
    "use strict";
    Xi = Uh
}
);
var zh, Ji, Qi = ce( () => {
    "use strict";
    Ks();
    Zi();
    zh = Nr("v5", 80, Xi),
    Ji = zh
}
);
var ea, ta = ce( () => {
    "use strict";
    ea = "00000000-0000-0000-0000-000000000000"
}
);
function Mh(r) {
    if (!Ot(r))
        throw TypeError("Invalid UUID");
    return parseInt(r.substr(14, 1), 16)
}
var na, ra = ce( () => {
    "use strict";
    kn();
    na = Mh
}
);
var Vs = {};
Yr(Vs, {
    NIL: () => ea,
    parse: () => Or,
    stringify: () => Nt,
    v1: () => Fi,
    v3: () => Gi,
    v4: () => ji,
    v5: () => Ji,
    validate: () => Ot,
    version: () => na
});
var qs = ce( () => {
    "use strict";
    Vi();
    Hi();
    Yi();
    Qi();
    ta();
    ra();
    kn();
    Tn();
    Ms()
}
);
var oa = Lt( (Lp, sa) => {
    "use strict";
    var Kh = (qs(),
    Xr(Vs)).v4
      , Fh = function(r, e, t, n) {
        if (typeof r != "string")
            throw new TypeError(r + " must be a string");
        n = n || {};
        let s = typeof n.version == "number" ? n.version : 2;
        if (s !== 1 && s !== 2)
            throw new TypeError(s + " must be 1 or 2");
        let o = {
            method: r
        };
        if (s === 2 && (o.jsonrpc = "2.0"),
        e) {
            if (typeof e != "object" && !Array.isArray(e))
                throw new TypeError(e + " must be an object, array or omitted");
            o.params = e
        }
        if (typeof t > "u") {
            let i = typeof n.generator == "function" ? n.generator : function() {
                return Kh()
            }
            ;
            o.id = i(o, n)
        } else
            s === 2 && t === null ? n.notificationIdNull && (o.id = null) : o.id = t;
        return o
    };
    sa.exports = Fh
}
);
var aa = Lt( (Bp, ia) => {
    "use strict";
    var Vh = (qs(),
    Xr(Vs)).v4
      , qh = oa()
      , vn = function(r, e) {
        if (!(this instanceof vn))
            return new vn(r,e);
        e || (e = {}),
        this.options = {
            reviver: typeof e.reviver < "u" ? e.reviver : null,
            replacer: typeof e.replacer < "u" ? e.replacer : null,
            generator: typeof e.generator < "u" ? e.generator : function() {
                return Vh()
            }
            ,
            version: typeof e.version < "u" ? e.version : 2,
            notificationIdNull: typeof e.notificationIdNull == "boolean" ? e.notificationIdNull : !1
        },
        this.callServer = r
    };
    ia.exports = vn;
    vn.prototype.request = function(r, e, t, n) {
        let s = this
          , o = null
          , i = Array.isArray(r) && typeof e == "function";
        if (this.options.version === 1 && i)
            throw new TypeError("JSON-RPC 1.0 does not support batching");
        if (i || !i && r && typeof r == "object" && typeof e == "function")
            n = e,
            o = r;
        else {
            typeof t == "function" && (n = t,
            t = void 0);
            let d = typeof n == "function";
            try {
                o = qh(r, e, t, {
                    generator: this.options.generator,
                    version: this.options.version,
                    notificationIdNull: this.options.notificationIdNull
                })
            } catch (f) {
                if (d)
                    return n(f);
                throw f
            }
            if (!d)
                return o
        }
        let a;
        try {
            a = JSON.stringify(o, this.options.replacer)
        } catch (d) {
            return n(d)
        }
        return this.callServer(a, function(d, f) {
            s._parseResponse(d, f, n)
        }),
        o
    }
    ;
    vn.prototype._parseResponse = function(r, e, t) {
        if (r) {
            t(r);
            return
        }
        if (!e)
            return t();
        let n;
        try {
            n = JSON.parse(e, this.options.reviver)
        } catch (s) {
            return t(s)
        }
        if (t.length === 3)
            if (Array.isArray(n)) {
                let s = function(i) {
                    return typeof i.error < "u"
                }
                  , o = function(i) {
                    return !s(i)
                };
                return t(null, n.filter(s), n.filter(o))
            } else
                return t(null, n.error, n.result);
        t(null, n)
    }
}
);
var ua = Lt( (Cp, $s) => {
    "use strict";
    var $h = Object.prototype.hasOwnProperty
      , qe = "~";
    function Ln() {}
    Object.create && (Ln.prototype = Object.create(null),
    new Ln().__proto__ || (qe = !1));
    function Wh(r, e, t) {
        this.fn = r,
        this.context = e,
        this.once = t || !1
    }
    function ca(r, e, t, n, s) {
        if (typeof t != "function")
            throw new TypeError("The listener must be a function");
        var o = new Wh(t,n || r,s)
          , i = qe ? qe + e : e;
        return r._events[i] ? r._events[i].fn ? r._events[i] = [r._events[i], o] : r._events[i].push(o) : (r._events[i] = o,
        r._eventsCount++),
        r
    }
    function Tr(r, e) {
        --r._eventsCount === 0 ? r._events = new Ln : delete r._events[e]
    }
    function Ke() {
        this._events = new Ln,
        this._eventsCount = 0
    }
    Ke.prototype.eventNames = function() {
        var e = [], t, n;
        if (this._eventsCount === 0)
            return e;
        for (n in t = this._events)
            $h.call(t, n) && e.push(qe ? n.slice(1) : n);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
    }
    ;
    Ke.prototype.listeners = function(e) {
        var t = qe ? qe + e : e
          , n = this._events[t];
        if (!n)
            return [];
        if (n.fn)
            return [n.fn];
        for (var s = 0, o = n.length, i = new Array(o); s < o; s++)
            i[s] = n[s].fn;
        return i
    }
    ;
    Ke.prototype.listenerCount = function(e) {
        var t = qe ? qe + e : e
          , n = this._events[t];
        return n ? n.fn ? 1 : n.length : 0
    }
    ;
    Ke.prototype.emit = function(e, t, n, s, o, i) {
        var c = qe ? qe + e : e;
        if (!this._events[c])
            return !1;
        var a = this._events[c], d = arguments.length, f, y;
        if (a.fn) {
            switch (a.once && this.removeListener(e, a.fn, void 0, !0),
            d) {
            case 1:
                return a.fn.call(a.context),
                !0;
            case 2:
                return a.fn.call(a.context, t),
                !0;
            case 3:
                return a.fn.call(a.context, t, n),
                !0;
            case 4:
                return a.fn.call(a.context, t, n, s),
                !0;
            case 5:
                return a.fn.call(a.context, t, n, s, o),
                !0;
            case 6:
                return a.fn.call(a.context, t, n, s, o, i),
                !0
            }
            for (y = 1,
            f = new Array(d - 1); y < d; y++)
                f[y - 1] = arguments[y];
            a.fn.apply(a.context, f)
        } else {
            var h = a.length, l;
            for (y = 0; y < h; y++)
                switch (a[y].once && this.removeListener(e, a[y].fn, void 0, !0),
                d) {
                case 1:
                    a[y].fn.call(a[y].context);
                    break;
                case 2:
                    a[y].fn.call(a[y].context, t);
                    break;
                case 3:
                    a[y].fn.call(a[y].context, t, n);
                    break;
                case 4:
                    a[y].fn.call(a[y].context, t, n, s);
                    break;
                default:
                    if (!f)
                        for (l = 1,
                        f = new Array(d - 1); l < d; l++)
                            f[l - 1] = arguments[l];
                    a[y].fn.apply(a[y].context, f)
                }
        }
        return !0
    }
    ;
    Ke.prototype.on = function(e, t, n) {
        return ca(this, e, t, n, !1)
    }
    ;
    Ke.prototype.once = function(e, t, n) {
        return ca(this, e, t, n, !0)
    }
    ;
    Ke.prototype.removeListener = function(e, t, n, s) {
        var o = qe ? qe + e : e;
        if (!this._events[o])
            return this;
        if (!t)
            return Tr(this, o),
            this;
        var i = this._events[o];
        if (i.fn)
            i.fn === t && (!s || i.once) && (!n || i.context === n) && Tr(this, o);
        else {
            for (var c = 0, a = [], d = i.length; c < d; c++)
                (i[c].fn !== t || s && !i[c].once || n && i[c].context !== n) && a.push(i[c]);
            a.length ? this._events[o] = a.length === 1 ? a[0] : a : Tr(this, o)
        }
        return this
    }
    ;
    Ke.prototype.removeAllListeners = function(e) {
        var t;
        return e ? (t = qe ? qe + e : e,
        this._events[t] && Tr(this, t)) : (this._events = new Ln,
        this._eventsCount = 0),
        this
    }
    ;
    Ke.prototype.off = Ke.prototype.removeListener;
    Ke.prototype.addListener = Ke.prototype.on;
    Ke.prefixed = qe;
    Ke.EventEmitter = Ke;
    typeof $s < "u" && ($s.exports = Ke)
}
);
var vr, da = ce( () => {
    "use strict";
    vr = ft(ua(), 1)
}
);
function la(r, e) {
    return new Gh(r,e)
}
var fa, Gh, Hh, ha, _a = ce( () => {
    "use strict";
    fa = ft(Zr(), 1);
    da();
    Gh = class extends vr.default {
        socket;
        constructor(r, e, t) {
            super(),
            this.socket = new window.WebSocket(r,t),
            this.socket.onopen = () => this.emit("open"),
            this.socket.onmessage = n => this.emit("message", n.data),
            this.socket.onerror = n => this.emit("error", n),
            this.socket.onclose = n => {
                this.emit("close", n.code, n.reason)
            }
        }
        send(r, e, t) {
            let n = t || e;
            try {
                this.socket.send(r),
                n()
            } catch (s) {
                n(s)
            }
        }
        close(r, e) {
            this.socket.close(r, e)
        }
        addEventListener(r, e, t) {
            this.socket.addEventListener(r, e, t)
        }
    }
    ;
    Hh = class {
        encode(r) {
            return JSON.stringify(r)
        }
        decode(r) {
            return JSON.parse(r)
        }
    }
    ,
    ha = class extends vr.default {
        address;
        rpc_id;
        queue;
        options;
        autoconnect;
        ready;
        reconnect;
        reconnect_timer_id;
        reconnect_interval;
        max_reconnects;
        rest_options;
        current_reconnects;
        generate_request_id;
        socket;
        webSocketFactory;
        dataPack;
        constructor(r, e="ws://localhost:8080", d={}, c, a) {
            var f = d
              , {autoconnect: t=!0, reconnect: n=!0, reconnect_interval: s=1e3, max_reconnects: o=5} = f
              , i = Qe(f, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
            super(),
            this.webSocketFactory = r,
            this.queue = {},
            this.rpc_id = 0,
            this.address = e,
            this.autoconnect = t,
            this.ready = !1,
            this.reconnect = n,
            this.reconnect_timer_id = void 0,
            this.reconnect_interval = s,
            this.max_reconnects = o,
            this.rest_options = i,
            this.current_reconnects = 0,
            this.generate_request_id = c || ( () => typeof this.rpc_id == "number" ? ++this.rpc_id : Number(this.rpc_id) + 1),
            a ? this.dataPack = a : this.dataPack = new Hh,
            this.autoconnect && this._connect(this.address, K({
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects
            }, this.rest_options))
        }
        connect() {
            this.socket || this._connect(this.address, K({
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects
            }, this.rest_options))
        }
        call(r, e, t, n) {
            return !n && typeof t == "object" && (n = t,
            t = null),
            new Promise( (s, o) => {
                if (!this.ready)
                    return o(new Error("socket not ready"));
                let i = this.generate_request_id(r, e)
                  , c = {
                    jsonrpc: "2.0",
                    method: r,
                    params: e || void 0,
                    id: i
                };
                this.socket.send(this.dataPack.encode(c), n, a => {
                    if (a)
                        return o(a);
                    this.queue[i] = {
                        promise: [s, o]
                    },
                    t && (this.queue[i].timeout = setTimeout( () => {
                        delete this.queue[i],
                        o(new Error("reply timeout"))
                    }
                    , t))
                }
                )
            }
            )
        }
        login(r) {
            return A(this, null, function*() {
                let e = yield this.call("rpc.login", r);
                if (!e)
                    throw new Error("authentication failed");
                return e
            })
        }
        listMethods() {
            return A(this, null, function*() {
                return yield this.call("__listMethods")
            })
        }
        notify(r, e) {
            return new Promise( (t, n) => {
                if (!this.ready)
                    return n(new Error("socket not ready"));
                let s = {
                    jsonrpc: "2.0",
                    method: r,
                    params: e
                };
                this.socket.send(this.dataPack.encode(s), o => {
                    if (o)
                        return n(o);
                    t()
                }
                )
            }
            )
        }
        subscribe(r) {
            return A(this, null, function*() {
                typeof r == "string" && (r = [r]);
                let e = yield this.call("rpc.on", r);
                if (typeof r == "string" && e[r] !== "ok")
                    throw new Error("Failed subscribing to an event '" + r + "' with: " + e[r]);
                return e
            })
        }
        unsubscribe(r) {
            return A(this, null, function*() {
                typeof r == "string" && (r = [r]);
                let e = yield this.call("rpc.off", r);
                if (typeof r == "string" && e[r] !== "ok")
                    throw new Error("Failed unsubscribing from an event with: " + e);
                return e
            })
        }
        close(r, e) {
            this.socket.close(r || 1e3, e)
        }
        setAutoReconnect(r) {
            this.reconnect = r
        }
        setReconnectInterval(r) {
            this.reconnect_interval = r
        }
        setMaxReconnects(r) {
            this.max_reconnects = r
        }
        _connect(r, e) {
            clearTimeout(this.reconnect_timer_id),
            this.socket = this.webSocketFactory(r, e),
            this.socket.addEventListener("open", () => {
                this.ready = !0,
                this.emit("open"),
                this.current_reconnects = 0
            }
            ),
            this.socket.addEventListener("message", ({data: t}) => {
                t instanceof ArrayBuffer && (t = fa.Buffer.from(t).toString());
                try {
                    t = this.dataPack.decode(t)
                } catch {
                    return
                }
                if (t.notification && this.listeners(t.notification).length) {
                    if (!Object.keys(t.params).length)
                        return this.emit(t.notification);
                    let n = [t.notification];
                    if (t.params.constructor === Object)
                        n.push(t.params);
                    else
                        for (let s = 0; s < t.params.length; s++)
                            n.push(t.params[s]);
                    return Promise.resolve().then( () => {
                        this.emit.apply(this, n)
                    }
                    )
                }
                if (!this.queue[t.id])
                    return t.method ? Promise.resolve().then( () => {
                        this.emit(t.method, t?.params)
                    }
                    ) : void 0;
                "error"in t == "result"in t && this.queue[t.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')),
                this.queue[t.id].timeout && clearTimeout(this.queue[t.id].timeout),
                t.error ? this.queue[t.id].promise[1](t.error) : this.queue[t.id].promise[0](t.result),
                delete this.queue[t.id]
            }
            ),
            this.socket.addEventListener("error", t => this.emit("error", t)),
            this.socket.addEventListener("close", ({code: t, reason: n}) => {
                this.ready && setTimeout( () => this.emit("close", t, n), 0),
                this.ready = !1,
                this.socket = void 0,
                t !== 1e3 && (this.current_reconnects++,
                this.reconnect && (this.max_reconnects > this.current_reconnects || this.max_reconnects === 0) && (this.reconnect_timer_id = setTimeout( () => this._connect(r, e), this.reconnect_interval)))
            }
            )
        }
    }
}
);
function jh(r, e, t) {
    let[[n,s],[o,i]] = e
      , c = ga(i * r, t)
      , a = ga(-s * r, t)
      , d = r - c * n - a * o
      , f = -c * s - a * i
      , y = d < pt
      , h = f < pt;
    y && (d = -d),
    h && (f = -f);
    let l = bt(Math.ceil($n(t) / 2)) + an;
    if (d < pt || d >= l || f < pt || f >= l)
        throw new Error("splitScalar (endomorphism): failed, k=" + r);
    return {
        k1neg: y,
        k1: d,
        k2neg: h,
        k2: f
    }
}
function Gs(r) {
    if (!["compact", "recovered", "der"].includes(r))
        throw new Error('Signature format must be "compact", "recovered", or "der"');
    return r
}
function Ws(r, e) {
    let t = {};
    for (let n of Object.keys(e))
        t[n] = r[n] === void 0 ? e[n] : r[n];
    return lt(t.lowS, "lowS"),
    lt(t.prehash, "prehash"),
    t.format !== void 0 && Gs(t.format),
    t
}
function on(r, e) {
    let {BYTES: t} = r, n;
    if (typeof e == "bigint")
        n = e;
    else {
        let s = ye("private key", e);
        try {
            n = r.fromBytes(s)
        } catch {
            throw new Error(`invalid private key: expected ui8a of size ${t}, got ${typeof e}`)
        }
    }
    if (!r.isValidNot0(n))
        throw new Error("invalid private key: out of range [1..N-1]");
    return n
}
function Xh(r, e={}) {
    let t = jn("weierstrass", r, e)
      , {Fp: n, Fn: s} = t
      , o = t.CURVE
      , {h: i, n: c} = o;
    Et(e, {}, {
        allowInfinityPoint: "boolean",
        clearCofactor: "function",
        isTorsionFree: "function",
        fromBytes: "function",
        toBytes: "function",
        endo: "object",
        wrapPrivateKey: "boolean"
    });
    let {endo: a} = e;
    if (a && (!n.is0(o.a) || typeof a.beta != "bigint" || !Array.isArray(a.basises)))
        throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    let d = ma(n, s);
    function f() {
        if (!n.isOdd)
            throw new Error("compression is not supported: Field does not have .isOdd()")
    }
    function y($, w, E) {
        let {x: S, y: v} = w.toAffine()
          , P = n.toBytes(S);
        if (lt(E, "isCompressed"),
        E) {
            f();
            let V = !n.isOdd(v);
            return et(pa(V), P)
        } else
            return et(Uint8Array.of(4), P, n.toBytes(v))
    }
    function h($) {
        je($, void 0, "Point");
        let {publicKey: w, publicKeyUncompressed: E} = d
          , S = $.length
          , v = $[0]
          , P = $.subarray(1);
        if (S === w && (v === 2 || v === 3)) {
            let V = n.fromBytes(P);
            if (!n.isValid(V))
                throw new Error("bad point: is not on curve, wrong x");
            let z = m(V), M;
            try {
                M = n.sqrt(z)
            } catch (be) {
                let he = be instanceof Error ? ": " + be.message : "";
                throw new Error("bad point: is not on curve, sqrt error" + he)
            }
            f();
            let G = n.isOdd(M);
            return (v & 1) === 1 !== G && (M = n.neg(M)),
            {
                x: V,
                y: M
            }
        } else if (S === E && v === 4) {
            let V = n.BYTES
              , z = n.fromBytes(P.subarray(0, V))
              , M = n.fromBytes(P.subarray(V, V * 2));
            if (!b(z, M))
                throw new Error("bad point: is not on curve");
            return {
                x: z,
                y: M
            }
        } else
            throw new Error(`bad point: got length ${S}, expected compressed=${w} or uncompressed=${E}`)
    }
    let l = e.toBytes || y
      , _ = e.fromBytes || h;
    function m($) {
        let w = n.sqr($)
          , E = n.mul(w, $);
        return n.add(n.add(E, n.mul($, o.a)), o.b)
    }
    function b($, w) {
        let E = n.sqr(w)
          , S = m($);
        return n.eql(E, S)
    }
    if (!b(o.Gx, o.Gy))
        throw new Error("bad curve params: generator point");
    let R = n.mul(n.pow(o.a, Lr), Yh)
      , T = n.mul(n.sqr(o.b), BigInt(27));
    if (n.is0(n.add(R, T)))
        throw new Error("bad curve params: a or b");
    function N($, w, E=!1) {
        if (!n.isValid(w) || E && n.is0(w))
            throw new Error(`bad point coordinate ${$}`);
        return w
    }
    function D($) {
        if (!($ instanceof O))
            throw new Error("ProjectivePoint expected")
    }
    function J($) {
        if (!a || !a.basises)
            throw new Error("no endo");
        return jh($, a.basises, s.ORDER)
    }
    let ee = Yt( ($, w) => {
        let {X: E, Y: S, Z: v} = $;
        if (n.eql(v, n.ONE))
            return {
                x: E,
                y: S
            };
        let P = $.is0();
        w == null && (w = P ? n.ONE : n.inv(v));
        let V = n.mul(E, w)
          , z = n.mul(S, w)
          , M = n.mul(v, w);
        if (P)
            return {
                x: n.ZERO,
                y: n.ZERO
            };
        if (!n.eql(M, n.ONE))
            throw new Error("invZ was invalid");
        return {
            x: V,
            y: z
        }
    }
    )
      , te = Yt($ => {
        if ($.is0()) {
            if (e.allowInfinityPoint && !n.is0($.Y))
                return;
            throw new Error("bad point: ZERO")
        }
        let {x: w, y: E} = $.toAffine();
        if (!n.isValid(w) || !n.isValid(E))
            throw new Error("bad point: x or y not field elements");
        if (!b(w, E))
            throw new Error("bad point: equation left != right");
        if (!$.isTorsionFree())
            throw new Error("bad point: not in prime-order subgroup");
        return !0
    }
    );
    function ne($, w, E, S, v) {
        return E = new O(n.mul(E.X, $),E.Y,E.Z),
        w = Rn(S, w),
        E = Rn(v, E),
        w.add(E)
    }
    class O {
        constructor(w, E, S) {
            this.X = N("x", w),
            this.Y = N("y", E, !0),
            this.Z = N("z", S),
            Object.freeze(this)
        }
        static CURVE() {
            return o
        }
        static fromAffine(w) {
            let {x: E, y: S} = w || {};
            if (!w || !n.isValid(E) || !n.isValid(S))
                throw new Error("invalid affine point");
            if (w instanceof O)
                throw new Error("projective point not allowed");
            return n.is0(E) && n.is0(S) ? O.ZERO : new O(E,S,n.ONE)
        }
        static fromBytes(w) {
            let E = O.fromAffine(_(je(w, void 0, "point")));
            return E.assertValidity(),
            E
        }
        static fromHex(w) {
            return O.fromBytes(ye("pointHex", w))
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        precompute(w=8, E=!0) {
            return j.createCache(this, w),
            E || this.multiply(Lr),
            this
        }
        assertValidity() {
            te(this)
        }
        hasEvenY() {
            let {y: w} = this.toAffine();
            if (!n.isOdd)
                throw new Error("Field doesn't support isOdd");
            return !n.isOdd(w)
        }
        equals(w) {
            D(w);
            let {X: E, Y: S, Z: v} = this
              , {X: P, Y: V, Z: z} = w
              , M = n.eql(n.mul(E, z), n.mul(P, v))
              , G = n.eql(n.mul(S, z), n.mul(V, v));
            return M && G
        }
        negate() {
            return new O(this.X,n.neg(this.Y),this.Z)
        }
        double() {
            let {a: w, b: E} = o
              , S = n.mul(E, Lr)
              , {X: v, Y: P, Z: V} = this
              , z = n.ZERO
              , M = n.ZERO
              , G = n.ZERO
              , Y = n.mul(v, v)
              , be = n.mul(P, P)
              , he = n.mul(V, V)
              , se = n.mul(v, P);
            return se = n.add(se, se),
            G = n.mul(v, V),
            G = n.add(G, G),
            z = n.mul(w, G),
            M = n.mul(S, he),
            M = n.add(z, M),
            z = n.sub(be, M),
            M = n.add(be, M),
            M = n.mul(z, M),
            z = n.mul(se, z),
            G = n.mul(S, G),
            he = n.mul(w, he),
            se = n.sub(Y, he),
            se = n.mul(w, se),
            se = n.add(se, G),
            G = n.add(Y, Y),
            Y = n.add(G, Y),
            Y = n.add(Y, he),
            Y = n.mul(Y, se),
            M = n.add(M, Y),
            he = n.mul(P, V),
            he = n.add(he, he),
            Y = n.mul(he, se),
            z = n.sub(z, Y),
            G = n.mul(he, be),
            G = n.add(G, G),
            G = n.add(G, G),
            new O(z,M,G)
        }
        add(w) {
            D(w);
            let {X: E, Y: S, Z: v} = this
              , {X: P, Y: V, Z: z} = w
              , M = n.ZERO
              , G = n.ZERO
              , Y = n.ZERO
              , be = o.a
              , he = n.mul(o.b, Lr)
              , se = n.mul(E, P)
              , Ee = n.mul(S, V)
              , Ie = n.mul(v, z)
              , $e = n.add(E, S)
              , Se = n.add(P, V);
            $e = n.mul($e, Se),
            Se = n.add(se, Ee),
            $e = n.sub($e, Se),
            Se = n.add(E, v);
            let Ce = n.add(P, z);
            return Se = n.mul(Se, Ce),
            Ce = n.add(se, Ie),
            Se = n.sub(Se, Ce),
            Ce = n.add(S, v),
            M = n.add(V, z),
            Ce = n.mul(Ce, M),
            M = n.add(Ee, Ie),
            Ce = n.sub(Ce, M),
            Y = n.mul(be, Se),
            M = n.mul(he, Ie),
            Y = n.add(M, Y),
            M = n.sub(Ee, Y),
            Y = n.add(Ee, Y),
            G = n.mul(M, Y),
            Ee = n.add(se, se),
            Ee = n.add(Ee, se),
            Ie = n.mul(be, Ie),
            Se = n.mul(he, Se),
            Ee = n.add(Ee, Ie),
            Ie = n.sub(se, Ie),
            Ie = n.mul(be, Ie),
            Se = n.add(Se, Ie),
            se = n.mul(Ee, Se),
            G = n.add(G, se),
            se = n.mul(Ce, Se),
            M = n.mul($e, M),
            M = n.sub(M, se),
            se = n.mul($e, Ee),
            Y = n.mul(Ce, Y),
            Y = n.add(Y, se),
            new O(M,G,Y)
        }
        subtract(w) {
            return this.add(w.negate())
        }
        is0() {
            return this.equals(O.ZERO)
        }
        multiply(w) {
            let {endo: E} = e;
            if (!s.isValidNot0(w))
                throw new Error("invalid scalar: out of range");
            let S, v, P = V => j.cached(this, V, z => ht(O, z));
            if (E) {
                let {k1neg: V, k1: z, k2neg: M, k2: G} = J(w)
                  , {p: Y, f: be} = P(z)
                  , {p: he, f: se} = P(G);
                v = be.add(se),
                S = ne(E.beta, Y, he, V, M)
            } else {
                let {p: V, f: z} = P(w);
                S = V,
                v = z
            }
            return ht(O, [S, v])[0]
        }
        multiplyUnsafe(w) {
            let {endo: E} = e
              , S = this;
            if (!s.isValid(w))
                throw new Error("invalid scalar: out of range");
            if (w === pt || S.is0())
                return O.ZERO;
            if (w === an)
                return S;
            if (j.hasCache(this))
                return this.multiply(w);
            if (E) {
                let {k1neg: v, k1: P, k2neg: V, k2: z} = J(w)
                  , {p1: M, p2: G} = ti(O, S, P, z);
                return ne(E.beta, M, G, v, V)
            } else
                return j.unsafe(S, w)
        }
        multiplyAndAddUnsafe(w, E, S) {
            let v = this.multiplyUnsafe(E).add(w.multiplyUnsafe(S));
            return v.is0() ? void 0 : v
        }
        toAffine(w) {
            return ee(this, w)
        }
        isTorsionFree() {
            let {isTorsionFree: w} = e;
            return i === an ? !0 : w ? w(O, this) : j.unsafe(this, c).is0()
        }
        clearCofactor() {
            let {clearCofactor: w} = e;
            return i === an ? this : w ? w(O, this) : this.multiplyUnsafe(i)
        }
        isSmallOrder() {
            return this.multiplyUnsafe(i).is0()
        }
        toBytes(w=!0) {
            return lt(w, "isCompressed"),
            this.assertValidity(),
            l(O, this, w)
        }
        toHex(w=!0) {
            return Bt(this.toBytes(w))
        }
        toString() {
            return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`
        }
        get px() {
            return this.X
        }
        get py() {
            return this.X
        }
        get pz() {
            return this.Z
        }
        toRawBytes(w=!0) {
            return this.toBytes(w)
        }
        _setWindowSize(w) {
            this.precompute(w)
        }
        static normalizeZ(w) {
            return ht(O, w)
        }
        static msm(w, E) {
            return Hn(O, s, w, E)
        }
        static fromPrivateKey(w) {
            return O.BASE.multiply(on(s, w))
        }
    }
    O.BASE = new O(o.Gx,o.Gy,n.ONE),
    O.ZERO = new O(n.ZERO,n.ONE,n.ZERO),
    O.Fp = n,
    O.Fn = s;
    let q = s.BITS
      , j = new Jt(O,e.endo ? Math.ceil(q / 2) : q);
    return O.BASE.precompute(8),
    O
}
function pa(r) {
    return Uint8Array.of(r ? 2 : 3)
}
function ma(r, e) {
    return {
        secretKey: e.BYTES,
        publicKey: 1 + r.BYTES,
        publicKeyUncompressed: 1 + 2 * r.BYTES,
        publicKeyHasPrefix: !0,
        signature: 2 * e.BYTES
    }
}
function Zh(r, e={}) {
    let {Fn: t} = r
      , n = e.randomBytes || gn
      , s = Object.assign(ma(r.Fp, t), {
        seed: is(t.ORDER)
    });
    function o(l) {
        try {
            return !!on(t, l)
        } catch {
            return !1
        }
    }
    function i(l, _) {
        let {publicKey: m, publicKeyUncompressed: b} = s;
        try {
            let R = l.length;
            return _ === !0 && R !== m || _ === !1 && R !== b ? !1 : !!r.fromBytes(l)
        } catch {
            return !1
        }
    }
    function c(l=n(s.seed)) {
        return as(je(l, s.seed, "seed"), t.ORDER)
    }
    function a(l, _=!0) {
        return r.BASE.multiply(on(t, l)).toBytes(_)
    }
    function d(l) {
        let _ = c(l);
        return {
            secretKey: _,
            publicKey: a(_)
        }
    }
    function f(l) {
        if (typeof l == "bigint")
            return !1;
        if (l instanceof r)
            return !0;
        let {secretKey: _, publicKey: m, publicKeyUncompressed: b} = s;
        if (t.allowedLengths || _ === m)
            return;
        let R = ye("key", l).length;
        return R === m || R === b
    }
    function y(l, _, m=!0) {
        if (f(l) === !0)
            throw new Error("first arg must be private key");
        if (f(_) === !1)
            throw new Error("second arg must be public key");
        let b = on(t, l);
        return r.fromHex(_).multiply(b).toBytes(m)
    }
    return Object.freeze({
        getPublicKey: a,
        getSharedSecret: y,
        keygen: d,
        Point: r,
        utils: {
            isValidSecretKey: o,
            isValidPublicKey: i,
            randomSecretKey: c,
            isValidPrivateKey: o,
            randomPrivateKey: c,
            normPrivateKeyToScalar: l => on(t, l),
            precompute(l=8, _=r.BASE) {
                return _.precompute(l, !1)
            }
        },
        lengths: s
    })
}
function Jh(r, e, t={}) {
    Bo(e),
    Et(t, {}, {
        hmac: "function",
        lowS: "boolean",
        randomBytes: "function",
        bits2int: "function",
        bits2int_modN: "function"
    });
    let n = t.randomBytes || gn
      , s = t.hmac || ( (E, ...S) => zo(e, E, et(...S)))
      , {Fp: o, Fn: i} = r
      , {ORDER: c, BITS: a} = i
      , {keygen: d, getPublicKey: f, getSharedSecret: y, utils: h, lengths: l} = Zh(r, t)
      , _ = {
        prehash: !1,
        lowS: typeof t.lowS == "boolean" ? t.lowS : !1,
        format: void 0,
        extraEntropy: !1
    }
      , m = "compact";
    function b(E) {
        let S = c >> an;
        return E > S
    }
    function R(E, S) {
        if (!i.isValidNot0(S))
            throw new Error(`invalid signature ${E}: out of range 1..Point.Fn.ORDER`);
        return S
    }
    function T(E, S) {
        Gs(S);
        let v = l.signature
          , P = S === "compact" ? v : S === "recovered" ? v + 1 : void 0;
        return je(E, P, `${S} signature`)
    }
    class N {
        constructor(S, v, P) {
            this.r = R("r", S),
            this.s = R("s", v),
            P != null && (this.recovery = P),
            Object.freeze(this)
        }
        static fromBytes(S, v=m) {
            T(S, v);
            let P;
            if (v === "der") {
                let {r: G, s: Y} = yt.toSig(je(S));
                return new N(G,Y)
            }
            v === "recovered" && (P = S[0],
            v = "compact",
            S = S.subarray(1));
            let V = i.BYTES
              , z = S.subarray(0, V)
              , M = S.subarray(V, V * 2);
            return new N(i.fromBytes(z),i.fromBytes(M),P)
        }
        static fromHex(S, v) {
            return this.fromBytes(Jr(S), v)
        }
        addRecoveryBit(S) {
            return new N(this.r,this.s,S)
        }
        recoverPublicKey(S) {
            let v = o.ORDER
              , {r: P, s: V, recovery: z} = this;
            if (z == null || ![0, 1, 2, 3].includes(z))
                throw new Error("recovery id invalid");
            if (c * ya < v && z > 1)
                throw new Error("recovery id is ambiguous for h>1 curve");
            let G = z === 2 || z === 3 ? P + c : P;
            if (!o.isValid(G))
                throw new Error("recovery id 2 or 3 invalid");
            let Y = o.toBytes(G)
              , be = r.fromBytes(et(pa((z & 1) === 0), Y))
              , he = i.inv(G)
              , se = J(ye("msgHash", S))
              , Ee = i.create(-se * he)
              , Ie = i.create(V * he)
              , $e = r.BASE.multiplyUnsafe(Ee).add(be.multiplyUnsafe(Ie));
            if ($e.is0())
                throw new Error("point at infinify");
            return $e.assertValidity(),
            $e
        }
        hasHighS() {
            return b(this.s)
        }
        toBytes(S=m) {
            if (Gs(S),
            S === "der")
                return Jr(yt.hexFromSig(this));
            let v = i.toBytes(this.r)
              , P = i.toBytes(this.s);
            if (S === "recovered") {
                if (this.recovery == null)
                    throw new Error("recovery bit must be present");
                return et(Uint8Array.of(this.recovery), v, P)
            }
            return et(v, P)
        }
        toHex(S) {
            return Bt(this.toBytes(S))
        }
        assertValidity() {}
        static fromCompact(S) {
            return N.fromBytes(ye("sig", S), "compact")
        }
        static fromDER(S) {
            return N.fromBytes(ye("sig", S), "der")
        }
        normalizeS() {
            return this.hasHighS() ? new N(this.r,i.neg(this.s),this.recovery) : this
        }
        toDERRawBytes() {
            return this.toBytes("der")
        }
        toDERHex() {
            return Bt(this.toBytes("der"))
        }
        toCompactRawBytes() {
            return this.toBytes("compact")
        }
        toCompactHex() {
            return Bt(this.toBytes("compact"))
        }
    }
    let D = t.bits2int || function(S) {
        if (S.length > 8192)
            throw new Error("input is too large");
        let v = jt(S)
          , P = S.length * 8 - a;
        return P > 0 ? v >> BigInt(P) : v
    }
      , J = t.bits2int_modN || function(S) {
        return i.create(D(S))
    }
      , ee = bt(a);
    function te(E) {
        return pn("num < 2^" + a, E, pt, ee),
        i.toBytes(E)
    }
    function ne(E, S) {
        return je(E, void 0, "message"),
        S ? je(e(E), void 0, "prehashed message") : E
    }
    function O(E, S, v) {
        if (["recovered", "canonical"].some(Ee => Ee in v))
            throw new Error("sign() legacy options not supported");
        let {lowS: P, prehash: V, extraEntropy: z} = Ws(v, _);
        E = ne(E, V);
        let M = J(E)
          , G = on(i, S)
          , Y = [te(G), te(M)];
        if (z != null && z !== !1) {
            let Ee = z === !0 ? n(l.secretKey) : z;
            Y.push(ye("extraEntropy", Ee))
        }
        let be = et(...Y)
          , he = M;
        function se(Ee) {
            let Ie = D(Ee);
            if (!i.isValidNot0(Ie))
                return;
            let $e = i.inv(Ie)
              , Se = r.BASE.multiply(Ie).toAffine()
              , Ce = i.create(Se.x);
            if (Ce === pt)
                return;
            let Vn = i.create($e * i.create(he + Ce * G));
            if (Vn === pt)
                return;
            let To = (Se.x === Ce ? 0 : 2) | Number(Se.y & an)
              , vo = Vn;
            return P && b(Vn) && (vo = i.neg(Vn),
            To ^= 1),
            new N(Ce,vo,To)
        }
        return {
            seed: be,
            k2sig: se
        }
    }
    function q(E, S, v={}) {
        E = ye("message", E);
        let {seed: P, k2sig: V} = O(E, S, v);
        return Do(e.outputLen, i.BYTES, s)(P, V)
    }
    function j(E) {
        let S, v = typeof E == "string" || qn(E), P = !v && E !== null && typeof E == "object" && typeof E.r == "bigint" && typeof E.s == "bigint";
        if (!v && !P)
            throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
        if (P)
            S = new N(E.r,E.s);
        else if (v) {
            try {
                S = N.fromBytes(ye("sig", E), "der")
            } catch (V) {
                if (!(V instanceof yt.Err))
                    throw V
            }
            if (!S)
                try {
                    S = N.fromBytes(ye("sig", E), "compact")
                } catch {
                    return !1
                }
        }
        return S || !1
    }
    function $(E, S, v, P={}) {
        let {lowS: V, prehash: z, format: M} = Ws(P, _);
        if (v = ye("publicKey", v),
        S = ne(ye("message", S), z),
        "strict"in P)
            throw new Error("options.strict was renamed to lowS");
        let G = M === void 0 ? j(E) : N.fromBytes(ye("sig", E), M);
        if (G === !1)
            return !1;
        try {
            let Y = r.fromBytes(v);
            if (V && G.hasHighS())
                return !1;
            let {r: be, s: he} = G
              , se = J(S)
              , Ee = i.inv(he)
              , Ie = i.create(se * Ee)
              , $e = i.create(be * Ee)
              , Se = r.BASE.multiplyUnsafe(Ie).add(Y.multiplyUnsafe($e));
            return Se.is0() ? !1 : i.create(Se.x) === be
        } catch {
            return !1
        }
    }
    function w(E, S, v={}) {
        let {prehash: P} = Ws(v, _);
        return S = ne(S, P),
        N.fromBytes(E, "recovered").recoverPublicKey(S).toBytes()
    }
    return Object.freeze({
        keygen: d,
        getPublicKey: f,
        getSharedSecret: y,
        utils: h,
        lengths: l,
        Point: r,
        sign: q,
        verify: $,
        recoverPublicKey: w,
        Signature: N,
        hash: e
    })
}
function Qh(r) {
    let e = {
        a: r.a,
        b: r.b,
        p: r.Fp.ORDER,
        n: r.n,
        h: r.h,
        Gx: r.Gx,
        Gy: r.Gy
    }
      , t = r.Fp
      , n = r.allowedPrivateKeyLengths ? Array.from(new Set(r.allowedPrivateKeyLengths.map(i => Math.ceil(i / 2)))) : void 0
      , s = Ze(e.n, {
        BITS: r.nBitLength,
        allowedLengths: n,
        modFromBytes: r.wrapPrivateKey
    })
      , o = {
        Fp: t,
        Fn: s,
        allowInfinityPoint: r.allowInfinityPoint,
        endo: r.endo,
        isTorsionFree: r.isTorsionFree,
        clearCofactor: r.clearCofactor,
        fromBytes: r.fromBytes,
        toBytes: r.toBytes
    };
    return {
        CURVE: e,
        curveOpts: o
    }
}
function e_(r) {
    let {CURVE: e, curveOpts: t} = Qh(r)
      , n = {
        hmac: r.hmac,
        randomBytes: r.randomBytes,
        lowS: r.lowS,
        bits2int: r.bits2int,
        bits2int_modN: r.bits2int_modN
    };
    return {
        CURVE: e,
        curveOpts: t,
        hash: r.hash,
        ecdsaOpts: n
    }
}
function t_(r, e) {
    let t = e.Point;
    return Object.assign({}, e, {
        ProjectivePoint: t,
        CURVE: Object.assign({}, r, Gn(t.Fn.ORDER, t.Fn.BITS))
    })
}
function Ra(r) {
    let {CURVE: e, curveOpts: t, hash: n, ecdsaOpts: s} = e_(r)
      , o = Xh(e, t)
      , i = Jh(o, n, s);
    return t_(r, i)
}
var ga, Hs, yt, pt, an, ya, Lr, Yh, ba = ce( () => {
    "use strict";
    yc();
    lc();
    Wn();
    fs();
    Xt();
    ga = (r, e) => (r + (r >= 0 ? e : -e) / ya) / e;
    Hs = class extends Error {
        constructor(e="") {
            super(e)
        }
    }
    ,
    yt = {
        Err: Hs,
        _tlv: {
            encode: (r, e) => {
                let {Err: t} = yt;
                if (r < 0 || r > 256)
                    throw new t("tlv.encode: wrong tag");
                if (e.length & 1)
                    throw new t("tlv.encode: unpadded data");
                let n = e.length / 2
                  , s = yn(n);
                if (s.length / 2 & 128)
                    throw new t("tlv.encode: long form length too big");
                let o = n > 127 ? yn(s.length / 2 | 128) : "";
                return yn(r) + o + s + e
            }
            ,
            decode(r, e) {
                let {Err: t} = yt
                  , n = 0;
                if (r < 0 || r > 256)
                    throw new t("tlv.encode: wrong tag");
                if (e.length < 2 || e[n++] !== r)
                    throw new t("tlv.decode: wrong tlv");
                let s = e[n++]
                  , o = !!(s & 128)
                  , i = 0;
                if (!o)
                    i = s;
                else {
                    let a = s & 127;
                    if (!a)
                        throw new t("tlv.decode(long): indefinite length not supported");
                    if (a > 4)
                        throw new t("tlv.decode(long): byte length is too big");
                    let d = e.subarray(n, n + a);
                    if (d.length !== a)
                        throw new t("tlv.decode: length bytes not complete");
                    if (d[0] === 0)
                        throw new t("tlv.decode(long): zero leftmost byte");
                    for (let f of d)
                        i = i << 8 | f;
                    if (n += a,
                    i < 128)
                        throw new t("tlv.decode(long): not minimal encoding")
                }
                let c = e.subarray(n, n + i);
                if (c.length !== i)
                    throw new t("tlv.decode: wrong value length");
                return {
                    v: c,
                    l: e.subarray(n + i)
                }
            }
        },
        _int: {
            encode(r) {
                let {Err: e} = yt;
                if (r < pt)
                    throw new e("integer: negative integers are not allowed");
                let t = yn(r);
                if (Number.parseInt(t[0], 16) & 8 && (t = "00" + t),
                t.length & 1)
                    throw new e("unexpected DER parsing assertion: unpadded hex");
                return t
            },
            decode(r) {
                let {Err: e} = yt;
                if (r[0] & 128)
                    throw new e("invalid signature integer: negative");
                if (r[0] === 0 && !(r[1] & 128))
                    throw new e("invalid signature integer: unnecessary leading zero");
                return jt(r)
            }
        },
        toSig(r) {
            let {Err: e, _int: t, _tlv: n} = yt
              , s = ye("signature", r)
              , {v: o, l: i} = n.decode(48, s);
            if (i.length)
                throw new e("invalid signature: left bytes after parsing");
            let {v: c, l: a} = n.decode(2, o)
              , {v: d, l: f} = n.decode(2, a);
            if (f.length)
                throw new e("invalid signature: left bytes after parsing");
            return {
                r: t.decode(c),
                s: t.decode(d)
            }
        },
        hexFromSig(r) {
            let {_tlv: e, _int: t} = yt
              , n = e.encode(2, t.encode(r.r))
              , s = e.encode(2, t.encode(r.s))
              , o = n + s;
            return e.encode(48, o)
        }
    },
    pt = BigInt(0),
    an = BigInt(1),
    ya = BigInt(2),
    Lr = BigInt(3),
    Yh = BigInt(4)
}
);
function Ea(r, e) {
    let t = n => Ra(H(K({}, r), {
        hash: n
    }));
    return H(K({}, t(e)), {
        create: t
    })
}
var Sa = ce( () => {
    "use strict";
    ba();
}
);
function r_(r) {
    let e = Ys.p
      , t = BigInt(3)
      , n = BigInt(6)
      , s = BigInt(11)
      , o = BigInt(22)
      , i = BigInt(23)
      , c = BigInt(44)
      , a = BigInt(88)
      , d = r * r * r % e
      , f = d * d * r % e
      , y = pe(f, t, e) * f % e
      , h = pe(y, t, e) * f % e
      , l = pe(h, Aa, e) * d % e
      , _ = pe(l, s, e) * l % e
      , m = pe(_, o, e) * _ % e
      , b = pe(m, c, e) * m % e
      , R = pe(b, a, e) * b % e
      , T = pe(R, c, e) * m % e
      , N = pe(T, t, e) * f % e
      , D = pe(N, i, e) * _ % e
      , J = pe(D, n, e) * d % e
      , ee = pe(J, Aa, e);
    if (!js.eql(js.sqr(ee), r))
        throw new Error("Cannot find square root");
    return ee
}
var Ys, n_, Aa, js, Br, wa = ce( () => {
    "use strict";
    Po();
    Sa();
    Xt();
    Ys = {
        p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
        n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
        h: BigInt(1),
        a: BigInt(0),
        b: BigInt(7),
        Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
        Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
    },
    n_ = {
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        basises: [[BigInt("0x3086d221a7d46bcde86c90e49284eb15"), -BigInt("0xe4437ed6010e88286f547fa90abfe4c3")], [BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]
    },
    Aa = BigInt(2);
    js = Ze(Ys.p, {
        sqrt: r_
    }),
    Br = Ea(H(K({}, Ys), {
        Fp: js,
        lowS: !0,
        endo: n_
    }), Co)
}
);
var uy = {};
Yr(uy, {
    Account: () => so,
    AddressLookupTableAccount: () => zn,
    AddressLookupTableInstruction: () => mo,
    AddressLookupTableProgram: () => Kn,
    Authorized: () => $r,
    BLOCKHASH_CACHE_TIMEOUT_MS: () => Qa,
    BPF_LOADER_DEPRECATED_PROGRAM_ID: () => a_,
    BPF_LOADER_PROGRAM_ID: () => w_,
    BpfLoader: () => lo,
    COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: () => at,
    ComputeBudgetInstruction: () => Ro,
    ComputeBudgetProgram: () => Fn,
    Connection: () => po,
    Ed25519Program: () => Vr,
    Enum: () => ro,
    EpochSchedule: () => Mr,
    FeeCalculatorLayout: () => Xa,
    Keypair: () => Fr,
    LAMPORTS_PER_SOL: () => cy,
    LOOKUP_TABLE_INSTRUCTION_LAYOUTS: () => Rt,
    Loader: () => fo,
    Lockup: () => Wt,
    MAX_SEED_LENGTH: () => Ga,
    Message: () => dt,
    MessageAccountKeys: () => qt,
    MessageV0: () => cn,
    NONCE_ACCOUNT_LENGTH: () => co,
    NonceAccount: () => zr,
    PACKET_DATA_SIZE: () => vt,
    PUBLIC_KEY_LENGTH: () => ut,
    PublicKey: () => B,
    SIGNATURE_LENGTH_IN_BYTES: () => Pn,
    SOLANA_SCHEMA: () => Cn,
    STAKE_CONFIG_ID: () => dc,
    STAKE_INSTRUCTION_LAYOUTS: () => ke,
    SYSTEM_INSTRUCTION_LAYOUTS: () => ge,
    SYSVAR_CLOCK_PUBKEY: () => ot,
    SYSVAR_EPOCH_SCHEDULE_PUBKEY: () => p_,
    SYSVAR_INSTRUCTIONS_PUBKEY: () => m_,
    SYSVAR_RECENT_BLOCKHASHES_PUBKEY: () => xr,
    SYSVAR_RENT_PUBKEY: () => un,
    SYSVAR_REWARDS_PUBKEY: () => R_,
    SYSVAR_SLOT_HASHES_PUBKEY: () => b_,
    SYSVAR_SLOT_HISTORY_PUBKEY: () => E_,
    SYSVAR_STAKE_HISTORY_PUBKEY: () => Pr,
    Secp256k1Program: () => qr,
    SendTransactionError: () => $t,
    SolanaJSONRPCError: () => U,
    SolanaJSONRPCErrorCode: () => S_,
    StakeAuthorizationLayout: () => Qg,
    StakeInstruction: () => bo,
    StakeProgram: () => fn,
    Struct: () => xn,
    SystemInstruction: () => uo,
    SystemProgram: () => Be,
    Transaction: () => de,
    TransactionExpiredBlockheightExceededError: () => Dn,
    TransactionExpiredNonceInvalidError: () => Tt,
    TransactionExpiredTimeoutError: () => Un,
    TransactionInstruction: () => fe,
    TransactionMessage: () => oo,
    TransactionStatus: () => mt,
    VALIDATOR_INFO_KEY: () => fc,
    VERSION_PREFIX_MASK: () => Gr,
    VOTE_PROGRAM_ID: () => ny,
    ValidatorInfo: () => So,
    VersionedMessage: () => Io,
    VersionedTransaction: () => io,
    VoteAccount: () => Ao,
    VoteAuthorizationLayout: () => ey,
    VoteInit: () => Wr,
    VoteInstruction: () => Eo,
    VoteProgram: () => ln,
    clusterApiUrl: () => iy,
    sendAndConfirmRawTransaction: () => ay,
    sendAndConfirmTransaction: () => ao
});
function Oa(r) {
    try {
        return Dt.ExtendedPoint.fromHex(r),
        !0
    } catch {
        return !1
    }
}
function i_(r) {
    return r._bn !== void 0
}
function Ha(r, e) {
    let t = s => {
        if (s.span >= 0)
            return s.span;
        if (typeof s.alloc == "function")
            return s.alloc(e[s.property]);
        if ("count"in s && "elementLayout"in s) {
            let o = e[s.property];
            if (Array.isArray(o))
                return o.length * t(s.elementLayout)
        } else if ("fields"in s)
            return Ha({
                layout: s
            }, e[s.property]);
        return 0
    }
      , n = 0;
    return r.layout.fields.forEach(s => {
        n += t(s)
    }
    ),
    n
}
function Ge(r) {
    let e = 0
      , t = 0;
    for (; ; ) {
        let n = r.shift();
        if (e |= (n & 127) << t * 7,
        t += 1,
        !(n & 128))
            break
    }
    return e
}
function Xe(r, e) {
    let t = e;
    for (; ; ) {
        let n = t & 127;
        if (t >>= 7,
        t == 0) {
            r.push(n);
            break
        } else
            n |= 128,
            r.push(n)
    }
}
function ie(r, e) {
    if (!r)
        throw new Error(e || "Assertion failed")
}
function it(r) {
    if (r.length === 0)
        throw new Error(ja);
    return r.shift()
}
function He(r, ...e) {
    let[t] = e;
    if (e.length === 2 ? t + (e[1] ?? 0) > r.length : t >= r.length)
        throw new Error(ja);
    return r.splice(...e)
}
function ao(r, e, t, n) {
    return A(this, null, function*() {
        let s = n && {
            skipPreflight: n.skipPreflight,
            preflightCommitment: n.preflightCommitment || n.commitment,
            maxRetries: n.maxRetries,
            minContextSlot: n.minContextSlot
        }, o = yield r.sendTransaction(e, t, s), i;
        if (e.recentBlockhash != null && e.lastValidBlockHeight != null)
            i = (yield r.confirmTransaction({
                abortSignal: n?.abortSignal,
                signature: o,
                blockhash: e.recentBlockhash,
                lastValidBlockHeight: e.lastValidBlockHeight
            }, n && n.commitment)).value;
        else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
            let {nonceInstruction: c} = e.nonceInfo
              , a = c.keys[0].pubkey;
            i = (yield r.confirmTransaction({
                abortSignal: n?.abortSignal,
                minContextSlot: e.minNonceContextSlot,
                nonceAccountPubkey: a,
                nonceValue: e.nonceInfo.nonce,
                signature: o
            }, n && n.commitment)).value
        } else
            n?.abortSignal != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."),
            i = (yield r.confirmTransaction(o, n && n.commitment)).value;
        if (i.err)
            throw o != null ? new $t({
                action: "send",
                signature: o,
                transactionMessage: `Status: (${JSON.stringify(i)})`
            }) : new Error(`Transaction ${o} failed (${JSON.stringify(i)})`);
        return o
    })
}
function Ft(r) {
    return new Promise(e => setTimeout(e, r))
}
function re(r, e) {
    let t = r.layout.span >= 0 ? r.layout.span : Ha(r, e)
      , n = W.Buffer.alloc(t)
      , s = Object.assign({
        instruction: r.index
    }, e);
    return r.layout.encode(s, n),
    n
}
function ue(r, e) {
    let t;
    try {
        t = r.layout.decode(e)
    } catch (n) {
        throw new Error("invalid instruction; " + n)
    }
    if (t.instruction !== r.index)
        throw new Error(`invalid instruction; instruction index mismatch ${t.instruction} != ${r.index}`);
    return t
}
function dn(r) {
    let e = (0,
    qa.blob)(8, r)
      , t = e.decode.bind(e)
      , n = e.encode.bind(e)
      , s = e
      , o = Bi();
    return s.decode = (i, c) => {
        let a = t(i, c);
        return o.decode(a)
    }
    ,
    s.encode = (i, c, a) => {
        let d = o.encode(i);
        return n(d, c, a)
    }
    ,
    s
}
function I_(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
function O_() {
    if (ka)
        return Xs;
    ka = 1;
    var r = Object.prototype.toString
      , e = Object.keys || function(n) {
        var s = [];
        for (var o in n)
            s.push(o);
        return s
    }
    ;
    function t(n, s) {
        var o, i, c, a, d, f, y;
        if (n === !0)
            return "true";
        if (n === !1)
            return "false";
        switch (typeof n) {
        case "object":
            if (n === null)
                return null;
            if (n.toJSON && typeof n.toJSON == "function")
                return t(n.toJSON(), s);
            if (y = r.call(n),
            y === "[object Array]") {
                for (c = "[",
                i = n.length - 1,
                o = 0; o < i; o++)
                    c += t(n[o], !0) + ",";
                return i > -1 && (c += t(n[o], !0)),
                c + "]"
            } else if (y === "[object Object]") {
                for (a = e(n).sort(),
                i = a.length,
                c = "",
                o = 0; o < i; )
                    d = a[o],
                    f = t(n[d], !1),
                    f !== void 0 && (c && (c += ","),
                    c += JSON.stringify(d) + ":" + f),
                    o++;
                return "{" + c + "}"
            } else
                return JSON.stringify(n);
        case "function":
        case "undefined":
            return s ? null : void 0;
        case "string":
            return JSON.stringify(n);
        default:
            return isFinite(n) ? n : null
        }
    }
    return Xs = function(n) {
        var s = t(n, !1);
        if (s !== void 0)
            return "" + s
    }
    ,
    Xs
}
function Zs(r) {
    let e = 0;
    for (; r > 1; )
        r /= 2,
        e++;
    return e
}
function k_(r) {
    return r === 0 ? 1 : (r--,
    r |= r >> 1,
    r |= r >> 2,
    r |= r >> 4,
    r |= r >> 8,
    r |= r >> 16,
    r |= r >> 32,
    r + 1)
}
function v_(r, e) {
    let t;
    try {
        t = r.layout.decode(e)
    } catch (n) {
        throw new Error("invalid instruction; " + n)
    }
    if (t.typeIndex !== r.index)
        throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${r.index}`);
    return t
}
function C_(r) {
    let e = r.match(B_);
    if (e == null)
        throw TypeError(`Failed to validate endpoint URL \`${r}\``);
    let[t,n,s,o] = e
      , i = r.startsWith("https:") ? "wss:" : "ws:"
      , c = s == null ? null : parseInt(s.slice(1), 10)
      , a = c == null ? "" : `:${c + 1}`;
    return `${i}//${n}${a}${o}`
}
function x_(r) {
    if (/^https?:/.test(r) === !1)
        throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return r
}
function _e(r) {
    let e, t;
    if (typeof r == "string")
        e = r;
    else if (r) {
        let n = r
          , {commitment: s} = n
          , o = Qe(n, ["commitment"]);
        e = s,
        t = o
    }
    return {
        commitment: e,
        config: t
    }
}
function La(r) {
    return r.map(e => "memcmp"in e ? H(K({}, e), {
        memcmp: H(K({}, e.memcmp), {
            encoding: e.memcmp.encoding ?? "base58"
        })
    }) : e)
}
function ec(r) {
    return Pe([I({
        jsonrpc: me("2.0"),
        id: k(),
        result: r
    }), I({
        jsonrpc: me("2.0"),
        id: k(),
        error: I({
            code: Kt(),
            message: k(),
            data: F(Di())
        })
    })])
}
function X(r) {
    return sn(ec(r), P_, e => "error"in e ? e : H(K({}, e), {
        result: L(e.result, r)
    }))
}
function we(r) {
    return X(I({
        context: I({
            slot: g()
        }),
        value: r
    }))
}
function Hr(r) {
    return I({
        context: I({
            slot: g()
        }),
        value: r
    })
}
function Js(r, e) {
    return r === 0 ? new cn({
        header: e.header,
        staticAccountKeys: e.accountKeys.map(t => new B(t)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map(t => ({
            programIdIndex: t.programIdIndex,
            accountKeyIndexes: t.accounts,
            data: Te.default.decode(t.data)
        })),
        addressTableLookups: e.addressTableLookups
    }) : new dt(e)
}
function Y_(r, e, t, n, s, o) {
    let i = t || T_, c;
    o != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let a;
    return n && (a = (f, y) => A(this, null, function*() {
        let h = yield new Promise( (l, _) => {
            try {
                n(f, y, (m, b) => l([m, b]))
            } catch (m) {
                _(m)
            }
        }
        );
        return yield i(...h)
    })),
    new $a.default( (f, y) => A(this, null, function*() {
        let h = {
            method: "POST",
            body: f,
            agent: c,
            headers: Object.assign({
                "Content-Type": "application/json"
            }, e || {}, Yg)
        };
        try {
            let l = 5, _, m = 500;
            for (; a ? _ = yield a(r, h) : _ = yield i(r, h),
            !(_.status !== 429 || s === !0 || (l -= 1,
            l === 0)); )
                console.error(`Server responded with ${_.status} ${_.statusText}.  Retrying after ${m}ms delay...`),
                yield Ft(m),
                m *= 2;
            let b = yield _.text();
            _.ok ? y(null, b) : y(new Error(`${_.status} ${_.statusText}: ${b}`))
        } catch (l) {
            l instanceof Error && y(l)
        }
    }),{})
}
function X_(r) {
    return (e, t) => new Promise( (n, s) => {
        r.request(e, t, (o, i) => {
            if (o) {
                s(o);
                return
            }
            n(i)
        }
        )
    }
    )
}
function Z_(r) {
    return e => new Promise( (t, n) => {
        e.length === 0 && t([]);
        let s = e.map(o => r.request(o.methodName, o.args));
        r.request(s, (o, i) => {
            if (o) {
                n(o);
                return
            }
            t(i)
        }
        )
    }
    )
}
function sy({authorizedVoter: r, epoch: e}) {
    return {
        epoch: e,
        authorizedVoter: new B(r)
    }
}
function Fa({authorizedPubkey: r, epochOfLastAuthorizedSwitch: e, targetEpoch: t}) {
    return {
        authorizedPubkey: new B(r),
        epochOfLastAuthorizedSwitch: e,
        targetEpoch: t
    }
}
function oy({buf: r, idx: e, isEmpty: t}) {
    return t ? [] : [...r.slice(e + 1).map(Fa), ...r.slice(0, e).map(Fa)]
}
function iy(r, e) {
    let t = e === !1 ? "http" : "https";
    if (!r)
        return Va[t].devnet;
    let n = Va[t][r];
    if (!n)
        throw new Error(`Unknown ${t} cluster: ${r}`);
    return n
}
function ay(r, e, t, n) {
    return A(this, null, function*() {
        let s, o;
        t && Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight") || t && Object.prototype.hasOwnProperty.call(t, "nonceValue") ? (s = t,
        o = n) : o = t;
        let i = o && {
            skipPreflight: o.skipPreflight,
            preflightCommitment: o.preflightCommitment || o.commitment,
            minContextSlot: o.minContextSlot
        }
          , c = yield r.sendRawTransaction(e, i)
          , a = o && o.commitment
          , f = (yield s ? r.confirmTransaction(s, a) : r.confirmTransaction(c, a)).value;
        if (f.err)
            throw c != null ? new $t({
                action: i?.skipPreflight ? "send" : "simulate",
                signature: c,
                transactionMessage: `Status: (${JSON.stringify(f)})`
            }) : new Error(`Raw transaction ${c} failed (${JSON.stringify(f)})`);
        return c
    })
}
var W, no, Te, hn, u, qa, $a, s_, Ia, Dr, wo, o_, Z, xn, ro, Cn, Wa, Ga, ut, Na, B, so, a_, vt, Gr, Pn, Dn, Un, Tt, qt, Q, c_, Vt, u_, d_, f_, l_, Ur, ja, dt, cn, Io, mt, h_, fe, de, oo, io, __, g_, y_, Ya, ot, p_, m_, xr, un, R_, b_, E_, Pr, $t, S_, U, Xa, Za, co, zr, uo, ge, Be, A_, fo, w_, lo, Xs, ka, N_, Ta, Bn, Mr, T_, ho, va, zn, L_, B_, Re, Ja, Oo, Qa, P_, D_, U_, z_, M_, K_, F_, V_, Gt, q_, $_, W_, G_, H_, Ba, j_, J_, Q_, eg, tg, ng, rg, sg, og, _o, ig, ag, go, cg, ug, Mn, dg, fg, yo, lg, hg, _g, gg, yg, pg, mg, Rg, bg, Eg, Sg, Ag, wg, Ig, Ca, Og, Ng, kg, Tg, vg, tc, No, nc, rc, sc, oc, Lg, Bg, ic, ac, Kr, cc, jr, ko, _n, Ht, Cg, xg, Pg, Dg, Ug, zg, Mg, xa, Qs, Cr, Kg, Fg, Vg, qg, $g, Wg, Gg, Hg, jg, Yg, po, Fr, Rt, mo, Kn, Ro, at, Fn, Pa, Da, Ua, za, Vr, Xg, Zg, Ma, eo, Ka, Jg, to, qr, uc, dc, $r, Wt, bo, ke, Qg, fn, Wr, Eo, ct, ey, ln, fc, ty, So, ny, ry, Ao, Va, cy, dy = ce( () => {
    W = ft(Zr());
    ai();
    no = ft(Uo()),
    Te = ft(_s());
    _c();
    hn = ft(pi()),
    u = ft(Ss()),
    qa = ft(Ss());
    Ci();
    Ui();
    $a = ft(aa());
    _a();
    gc();
    wa();
    s_ = Dt.utils.randomPrivateKey,
    Ia = () => {
        let r = Dt.utils.randomPrivateKey()
          , e = Dr(r)
          , t = new Uint8Array(64);
        return t.set(r),
        t.set(e, 32),
        {
            publicKey: e,
            secretKey: t
        }
    }
    ,
    Dr = Dt.getPublicKey;
    wo = (r, e) => Dt.sign(r, e.slice(0, 32)),
    o_ = Dt.verify,
    Z = r => W.Buffer.isBuffer(r) ? r : r instanceof Uint8Array ? W.Buffer.from(r.buffer, r.byteOffset, r.byteLength) : W.Buffer.from(r),
    xn = class {
        constructor(e) {
            Object.assign(this, e)
        }
        encode() {
            return W.Buffer.from((0,
            hn.serialize)(Cn, this))
        }
        static decode(e) {
            return (0,
            hn.deserialize)(Cn, this, e)
        }
        static decodeUnchecked(e) {
            return (0,
            hn.deserializeUnchecked)(Cn, this, e)
        }
    }
    ,
    ro = class extends xn {
        constructor(e) {
            if (super(e),
            this.enum = "",
            Object.keys(e).length !== 1)
                throw new Error("Enum can only take single value");
            Object.keys(e).map(t => {
                this.enum = t
            }
            )
        }
    }
    ,
    Cn = new Map,
    Ga = 32,
    ut = 32;
    Na = 1,
    B = class r extends xn {
        constructor(e) {
            if (super({}),
            this._bn = void 0,
            i_(e))
                this._bn = e._bn;
            else {
                if (typeof e == "string") {
                    let t = Te.default.decode(e);
                    if (t.length != ut)
                        throw new Error("Invalid public key input");
                    this._bn = new no.default(t)
                } else
                    this._bn = new no.default(e);
                if (this._bn.byteLength() > ut)
                    throw new Error("Invalid public key input")
            }
        }
        static unique() {
            let e = new r(Na);
            return Na += 1,
            new r(e.toBuffer())
        }
        equals(e) {
            return this._bn.eq(e._bn)
        }
        toBase58() {
            return Te.default.encode(this.toBytes())
        }
        toJSON() {
            return this.toBase58()
        }
        toBytes() {
            let e = this.toBuffer();
            return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)
        }
        toBuffer() {
            let e = this._bn.toArrayLike(W.Buffer);
            if (e.length === ut)
                return e;
            let t = W.Buffer.alloc(32);
            return e.copy(t, 32 - e.length),
            t
        }
        get[Symbol.toStringTag]() {
            return `PublicKey(${this.toString()})`
        }
        toString() {
            return this.toBase58()
        }
        static createWithSeed(e, t, n) {
            return A(this, null, function*() {
                let s = W.Buffer.concat([e.toBuffer(), W.Buffer.from(t), n.toBuffer()])
                  , o = ns(s);
                return new r(o)
            })
        }
        static createProgramAddressSync(e, t) {
            let n = W.Buffer.alloc(0);
            e.forEach(function(o) {
                if (o.length > Ga)
                    throw new TypeError("Max seed length exceeded");
                n = W.Buffer.concat([n, Z(o)])
            }),
            n = W.Buffer.concat([n, t.toBuffer(), W.Buffer.from("ProgramDerivedAddress")]);
            let s = ns(n);
            if (Oa(s))
                throw new Error("Invalid seeds, address must fall off the curve");
            return new r(s)
        }
        static createProgramAddress(e, t) {
            return A(this, null, function*() {
                return this.createProgramAddressSync(e, t)
            })
        }
        static findProgramAddressSync(e, t) {
            let n = 255, s;
            for (; n != 0; ) {
                try {
                    let o = e.concat(W.Buffer.from([n]));
                    s = this.createProgramAddressSync(o, t)
                } catch (o) {
                    if (o instanceof TypeError)
                        throw o;
                    n--;
                    continue
                }
                return [s, n]
            }
            throw new Error("Unable to find a viable program address nonce")
        }
        static findProgramAddress(e, t) {
            return A(this, null, function*() {
                return this.findProgramAddressSync(e, t)
            })
        }
        static isOnCurve(e) {
            let t = new r(e);
            return Oa(t.toBytes())
        }
    }
    ;
    Wa = B;
    B.default = new Wa("11111111111111111111111111111111");
    Cn.set(B, {
        kind: "struct",
        fields: [["_bn", "u256"]]
    });
    so = class {
        constructor(e) {
            if (this._publicKey = void 0,
            this._secretKey = void 0,
            e) {
                let t = Z(e);
                if (e.length !== 64)
                    throw new Error("bad secret key size");
                this._publicKey = t.slice(32, 64),
                this._secretKey = t.slice(0, 32)
            } else
                this._secretKey = Z(s_()),
                this._publicKey = Z(Dr(this._secretKey))
        }
        get publicKey() {
            return new B(this._publicKey)
        }
        get secretKey() {
            return W.Buffer.concat([this._secretKey, this._publicKey], 64)
        }
    }
    ,
    a_ = new B("BPFLoader1111111111111111111111111111111111"),
    vt = 1232,
    Gr = 127,
    Pn = 64,
    Dn = class extends Error {
        constructor(e) {
            super(`Signature ${e} has expired: block height exceeded.`),
            this.signature = void 0,
            this.signature = e
        }
    }
    ;
    Object.defineProperty(Dn.prototype, "name", {
        value: "TransactionExpiredBlockheightExceededError"
    });
    Un = class extends Error {
        constructor(e, t) {
            super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`),
            this.signature = void 0,
            this.signature = e
        }
    }
    ;
    Object.defineProperty(Un.prototype, "name", {
        value: "TransactionExpiredTimeoutError"
    });
    Tt = class extends Error {
        constructor(e) {
            super(`Signature ${e} has expired: the nonce is no longer valid.`),
            this.signature = void 0,
            this.signature = e
        }
    }
    ;
    Object.defineProperty(Tt.prototype, "name", {
        value: "TransactionExpiredNonceInvalidError"
    });
    qt = class {
        constructor(e, t) {
            this.staticAccountKeys = void 0,
            this.accountKeysFromLookups = void 0,
            this.staticAccountKeys = e,
            this.accountKeysFromLookups = t
        }
        keySegments() {
            let e = [this.staticAccountKeys];
            return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable),
            e.push(this.accountKeysFromLookups.readonly)),
            e
        }
        get(e) {
            for (let t of this.keySegments()) {
                if (e < t.length)
                    return t[e];
                e -= t.length
            }
        }
        get length() {
            return this.keySegments().flat().length
        }
        compileInstructions(e) {
            if (this.length > 256)
                throw new Error("Account index overflow encountered during compilation");
            let n = new Map;
            this.keySegments().flat().forEach( (o, i) => {
                n.set(o.toBase58(), i)
            }
            );
            let s = o => {
                let i = n.get(o.toBase58());
                if (i === void 0)
                    throw new Error("Encountered an unknown instruction account key during compilation");
                return i
            }
            ;
            return e.map(o => ({
                programIdIndex: s(o.programId),
                accountKeyIndexes: o.keys.map(i => s(i.pubkey)),
                data: o.data
            }))
        }
    }
    ,
    Q = (r="publicKey") => u.blob(32, r),
    c_ = (r="signature") => u.blob(64, r),
    Vt = (r="string") => {
        let e = u.struct([u.u32("length"), u.u32("lengthPadding"), u.blob(u.offset(u.u32(), -8), "chars")], r)
          , t = e.decode.bind(e)
          , n = e.encode.bind(e)
          , s = e;
        return s.decode = (o, i) => t(o, i).chars.toString(),
        s.encode = (o, i, c) => {
            let a = {
                chars: W.Buffer.from(o, "utf8")
            };
            return n(a, i, c)
        }
        ,
        s.alloc = o => u.u32().span + u.u32().span + W.Buffer.from(o, "utf8").length,
        s
    }
    ,
    u_ = (r="authorized") => u.struct([Q("staker"), Q("withdrawer")], r),
    d_ = (r="lockup") => u.struct([u.ns64("unixTimestamp"), u.ns64("epoch"), Q("custodian")], r),
    f_ = (r="voteInit") => u.struct([Q("nodePubkey"), Q("authorizedVoter"), Q("authorizedWithdrawer"), u.u8("commission")], r),
    l_ = (r="voteAuthorizeWithSeedArgs") => u.struct([u.u32("voteAuthorizationType"), Q("currentAuthorityDerivedKeyOwnerPubkey"), Vt("currentAuthorityDerivedKeySeed"), Q("newAuthorized")], r);
    Ur = class r {
        constructor(e, t) {
            this.payer = void 0,
            this.keyMetaMap = void 0,
            this.payer = e,
            this.keyMetaMap = t
        }
        static compile(e, t) {
            let n = new Map
              , s = i => {
                let c = i.toBase58()
                  , a = n.get(c);
                return a === void 0 && (a = {
                    isSigner: !1,
                    isWritable: !1,
                    isInvoked: !1
                },
                n.set(c, a)),
                a
            }
              , o = s(t);
            o.isSigner = !0,
            o.isWritable = !0;
            for (let i of e) {
                s(i.programId).isInvoked = !0;
                for (let c of i.keys) {
                    let a = s(c.pubkey);
                    a.isSigner ||= c.isSigner,
                    a.isWritable ||= c.isWritable
                }
            }
            return new r(t,n)
        }
        getMessageComponents() {
            let e = [...this.keyMetaMap.entries()];
            ie(e.length <= 256, "Max static account keys length exceeded");
            let t = e.filter( ([,a]) => a.isSigner && a.isWritable)
              , n = e.filter( ([,a]) => a.isSigner && !a.isWritable)
              , s = e.filter( ([,a]) => !a.isSigner && a.isWritable)
              , o = e.filter( ([,a]) => !a.isSigner && !a.isWritable)
              , i = {
                numRequiredSignatures: t.length + n.length,
                numReadonlySignedAccounts: n.length,
                numReadonlyUnsignedAccounts: o.length
            };
            {
                ie(t.length > 0, "Expected at least one writable signer key");
                let[a] = t[0];
                ie(a === this.payer.toBase58(), "Expected first writable signer key to be the fee payer")
            }
            let c = [...t.map( ([a]) => new B(a)), ...n.map( ([a]) => new B(a)), ...s.map( ([a]) => new B(a)), ...o.map( ([a]) => new B(a))];
            return [i, c]
        }
        extractTableLookup(e) {
            let[t,n] = this.drainKeysFoundInLookupTable(e.state.addresses, i => !i.isSigner && !i.isInvoked && i.isWritable)
              , [s,o] = this.drainKeysFoundInLookupTable(e.state.addresses, i => !i.isSigner && !i.isInvoked && !i.isWritable);
            if (!(t.length === 0 && s.length === 0))
                return [{
                    accountKey: e.key,
                    writableIndexes: t,
                    readonlyIndexes: s
                }, {
                    writable: n,
                    readonly: o
                }]
        }
        drainKeysFoundInLookupTable(e, t) {
            let n = new Array
              , s = new Array;
            for (let[o,i] of this.keyMetaMap.entries())
                if (t(i)) {
                    let c = new B(o)
                      , a = e.findIndex(d => d.equals(c));
                    a >= 0 && (ie(a < 256, "Max lookup table index exceeded"),
                    n.push(a),
                    s.push(c),
                    this.keyMetaMap.delete(o))
                }
            return [n, s]
        }
    }
    ,
    ja = "Reached end of buffer unexpectedly";
    dt = class r {
        constructor(e) {
            this.header = void 0,
            this.accountKeys = void 0,
            this.recentBlockhash = void 0,
            this.instructions = void 0,
            this.indexToProgramIds = new Map,
            this.header = e.header,
            this.accountKeys = e.accountKeys.map(t => new B(t)),
            this.recentBlockhash = e.recentBlockhash,
            this.instructions = e.instructions,
            this.instructions.forEach(t => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]))
        }
        get version() {
            return "legacy"
        }
        get staticAccountKeys() {
            return this.accountKeys
        }
        get compiledInstructions() {
            return this.instructions.map(e => ({
                programIdIndex: e.programIdIndex,
                accountKeyIndexes: e.accounts,
                data: Te.default.decode(e.data)
            }))
        }
        get addressTableLookups() {
            return []
        }
        getAccountKeys() {
            return new qt(this.staticAccountKeys)
        }
        static compile(e) {
            let t = Ur.compile(e.instructions, e.payerKey)
              , [n,s] = t.getMessageComponents()
              , i = new qt(s).compileInstructions(e.instructions).map(c => ({
                programIdIndex: c.programIdIndex,
                accounts: c.accountKeyIndexes,
                data: Te.default.encode(c.data)
            }));
            return new r({
                header: n,
                accountKeys: s,
                recentBlockhash: e.recentBlockhash,
                instructions: i
            })
        }
        isAccountSigner(e) {
            return e < this.header.numRequiredSignatures
        }
        isAccountWritable(e) {
            let t = this.header.numRequiredSignatures;
            if (e >= this.header.numRequiredSignatures) {
                let n = e - t
                  , o = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
                return n < o
            } else {
                let n = t - this.header.numReadonlySignedAccounts;
                return e < n
            }
        }
        isProgramId(e) {
            return this.indexToProgramIds.has(e)
        }
        programIds() {
            return [...this.indexToProgramIds.values()]
        }
        nonProgramIds() {
            return this.accountKeys.filter( (e, t) => !this.isProgramId(t))
        }
        serialize() {
            let e = this.accountKeys.length
              , t = [];
            Xe(t, e);
            let n = this.instructions.map(y => {
                let {accounts: h, programIdIndex: l} = y
                  , _ = Array.from(Te.default.decode(y.data))
                  , m = [];
                Xe(m, h.length);
                let b = [];
                return Xe(b, _.length),
                {
                    programIdIndex: l,
                    keyIndicesCount: W.Buffer.from(m),
                    keyIndices: h,
                    dataLength: W.Buffer.from(b),
                    data: _
                }
            }
            )
              , s = [];
            Xe(s, n.length);
            let o = W.Buffer.alloc(vt);
            W.Buffer.from(s).copy(o);
            let i = s.length;
            n.forEach(y => {
                let l = u.struct([u.u8("programIdIndex"), u.blob(y.keyIndicesCount.length, "keyIndicesCount"), u.seq(u.u8("keyIndex"), y.keyIndices.length, "keyIndices"), u.blob(y.dataLength.length, "dataLength"), u.seq(u.u8("userdatum"), y.data.length, "data")]).encode(y, o, i);
                i += l
            }
            ),
            o = o.slice(0, i);
            let c = u.struct([u.blob(1, "numRequiredSignatures"), u.blob(1, "numReadonlySignedAccounts"), u.blob(1, "numReadonlyUnsignedAccounts"), u.blob(t.length, "keyCount"), u.seq(Q("key"), e, "keys"), Q("recentBlockhash")])
              , a = {
                numRequiredSignatures: W.Buffer.from([this.header.numRequiredSignatures]),
                numReadonlySignedAccounts: W.Buffer.from([this.header.numReadonlySignedAccounts]),
                numReadonlyUnsignedAccounts: W.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
                keyCount: W.Buffer.from(t),
                keys: this.accountKeys.map(y => Z(y.toBytes())),
                recentBlockhash: Te.default.decode(this.recentBlockhash)
            }
              , d = W.Buffer.alloc(2048)
              , f = c.encode(a, d);
            return o.copy(d, f),
            d.slice(0, f + o.length)
        }
        static from(e) {
            let t = [...e]
              , n = it(t);
            if (n !== (n & Gr))
                throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
            let s = it(t)
              , o = it(t)
              , i = Ge(t)
              , c = [];
            for (let h = 0; h < i; h++) {
                let l = He(t, 0, ut);
                c.push(new B(W.Buffer.from(l)))
            }
            let a = He(t, 0, ut)
              , d = Ge(t)
              , f = [];
            for (let h = 0; h < d; h++) {
                let l = it(t)
                  , _ = Ge(t)
                  , m = He(t, 0, _)
                  , b = Ge(t)
                  , R = He(t, 0, b)
                  , T = Te.default.encode(W.Buffer.from(R));
                f.push({
                    programIdIndex: l,
                    accounts: m,
                    data: T
                })
            }
            let y = {
                header: {
                    numRequiredSignatures: n,
                    numReadonlySignedAccounts: s,
                    numReadonlyUnsignedAccounts: o
                },
                recentBlockhash: Te.default.encode(W.Buffer.from(a)),
                accountKeys: c,
                instructions: f
            };
            return new r(y)
        }
    }
    ,
    cn = class r {
        constructor(e) {
            this.header = void 0,
            this.staticAccountKeys = void 0,
            this.recentBlockhash = void 0,
            this.compiledInstructions = void 0,
            this.addressTableLookups = void 0,
            this.header = e.header,
            this.staticAccountKeys = e.staticAccountKeys,
            this.recentBlockhash = e.recentBlockhash,
            this.compiledInstructions = e.compiledInstructions,
            this.addressTableLookups = e.addressTableLookups
        }
        get version() {
            return 0
        }
        get numAccountKeysFromLookups() {
            let e = 0;
            for (let t of this.addressTableLookups)
                e += t.readonlyIndexes.length + t.writableIndexes.length;
            return e
        }
        getAccountKeys(e) {
            let t;
            if (e && "accountKeysFromLookups"in e && e.accountKeysFromLookups) {
                if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length)
                    throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
                t = e.accountKeysFromLookups
            } else if (e && "addressLookupTableAccounts"in e && e.addressLookupTableAccounts)
                t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
            else if (this.addressTableLookups.length > 0)
                throw new Error("Failed to get account keys because address table lookups were not resolved");
            return new qt(this.staticAccountKeys,t)
        }
        isAccountSigner(e) {
            return e < this.header.numRequiredSignatures
        }
        isAccountWritable(e) {
            let t = this.header.numRequiredSignatures
              , n = this.staticAccountKeys.length;
            if (e >= n) {
                let s = e - n
                  , o = this.addressTableLookups.reduce( (i, c) => i + c.writableIndexes.length, 0);
                return s < o
            } else if (e >= this.header.numRequiredSignatures) {
                let s = e - t
                  , i = n - t - this.header.numReadonlyUnsignedAccounts;
                return s < i
            } else {
                let s = t - this.header.numReadonlySignedAccounts;
                return e < s
            }
        }
        resolveAddressTableLookups(e) {
            let t = {
                writable: [],
                readonly: []
            };
            for (let n of this.addressTableLookups) {
                let s = e.find(o => o.key.equals(n.accountKey));
                if (!s)
                    throw new Error(`Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`);
                for (let o of n.writableIndexes)
                    if (o < s.state.addresses.length)
                        t.writable.push(s.state.addresses[o]);
                    else
                        throw new Error(`Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`);
                for (let o of n.readonlyIndexes)
                    if (o < s.state.addresses.length)
                        t.readonly.push(s.state.addresses[o]);
                    else
                        throw new Error(`Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`)
            }
            return t
        }
        static compile(e) {
            let t = Ur.compile(e.instructions, e.payerKey)
              , n = new Array
              , s = {
                writable: new Array,
                readonly: new Array
            }
              , o = e.addressLookupTableAccounts || [];
            for (let f of o) {
                let y = t.extractTableLookup(f);
                if (y !== void 0) {
                    let[h,{writable: l, readonly: _}] = y;
                    n.push(h),
                    s.writable.push(...l),
                    s.readonly.push(..._)
                }
            }
            let[i,c] = t.getMessageComponents()
              , d = new qt(c,s).compileInstructions(e.instructions);
            return new r({
                header: i,
                staticAccountKeys: c,
                recentBlockhash: e.recentBlockhash,
                compiledInstructions: d,
                addressTableLookups: n
            })
        }
        serialize() {
            let e = Array();
            Xe(e, this.staticAccountKeys.length);
            let t = this.serializeInstructions()
              , n = Array();
            Xe(n, this.compiledInstructions.length);
            let s = this.serializeAddressTableLookups()
              , o = Array();
            Xe(o, this.addressTableLookups.length);
            let i = u.struct([u.u8("prefix"), u.struct([u.u8("numRequiredSignatures"), u.u8("numReadonlySignedAccounts"), u.u8("numReadonlyUnsignedAccounts")], "header"), u.blob(e.length, "staticAccountKeysLength"), u.seq(Q(), this.staticAccountKeys.length, "staticAccountKeys"), Q("recentBlockhash"), u.blob(n.length, "instructionsLength"), u.blob(t.length, "serializedInstructions"), u.blob(o.length, "addressTableLookupsLength"), u.blob(s.length, "serializedAddressTableLookups")])
              , c = new Uint8Array(vt)
              , d = i.encode({
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map(f => f.toBytes()),
                recentBlockhash: Te.default.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(n),
                serializedInstructions: t,
                addressTableLookupsLength: new Uint8Array(o),
                serializedAddressTableLookups: s
            }, c);
            return c.slice(0, d)
        }
        serializeInstructions() {
            let e = 0
              , t = new Uint8Array(vt);
            for (let n of this.compiledInstructions) {
                let s = Array();
                Xe(s, n.accountKeyIndexes.length);
                let o = Array();
                Xe(o, n.data.length);
                let i = u.struct([u.u8("programIdIndex"), u.blob(s.length, "encodedAccountKeyIndexesLength"), u.seq(u.u8(), n.accountKeyIndexes.length, "accountKeyIndexes"), u.blob(o.length, "encodedDataLength"), u.blob(n.data.length, "data")]);
                e += i.encode({
                    programIdIndex: n.programIdIndex,
                    encodedAccountKeyIndexesLength: new Uint8Array(s),
                    accountKeyIndexes: n.accountKeyIndexes,
                    encodedDataLength: new Uint8Array(o),
                    data: n.data
                }, t, e)
            }
            return t.slice(0, e)
        }
        serializeAddressTableLookups() {
            let e = 0
              , t = new Uint8Array(vt);
            for (let n of this.addressTableLookups) {
                let s = Array();
                Xe(s, n.writableIndexes.length);
                let o = Array();
                Xe(o, n.readonlyIndexes.length);
                let i = u.struct([Q("accountKey"), u.blob(s.length, "encodedWritableIndexesLength"), u.seq(u.u8(), n.writableIndexes.length, "writableIndexes"), u.blob(o.length, "encodedReadonlyIndexesLength"), u.seq(u.u8(), n.readonlyIndexes.length, "readonlyIndexes")]);
                e += i.encode({
                    accountKey: n.accountKey.toBytes(),
                    encodedWritableIndexesLength: new Uint8Array(s),
                    writableIndexes: n.writableIndexes,
                    encodedReadonlyIndexesLength: new Uint8Array(o),
                    readonlyIndexes: n.readonlyIndexes
                }, t, e)
            }
            return t.slice(0, e)
        }
        static deserialize(e) {
            let t = [...e]
              , n = it(t)
              , s = n & Gr;
            ie(n !== s, "Expected versioned message but received legacy message");
            let o = s;
            ie(o === 0, `Expected versioned message with version 0 but found version ${o}`);
            let i = {
                numRequiredSignatures: it(t),
                numReadonlySignedAccounts: it(t),
                numReadonlyUnsignedAccounts: it(t)
            }
              , c = []
              , a = Ge(t);
            for (let _ = 0; _ < a; _++)
                c.push(new B(He(t, 0, ut)));
            let d = Te.default.encode(He(t, 0, ut))
              , f = Ge(t)
              , y = [];
            for (let _ = 0; _ < f; _++) {
                let m = it(t)
                  , b = Ge(t)
                  , R = He(t, 0, b)
                  , T = Ge(t)
                  , N = new Uint8Array(He(t, 0, T));
                y.push({
                    programIdIndex: m,
                    accountKeyIndexes: R,
                    data: N
                })
            }
            let h = Ge(t)
              , l = [];
            for (let _ = 0; _ < h; _++) {
                let m = new B(He(t, 0, ut))
                  , b = Ge(t)
                  , R = He(t, 0, b)
                  , T = Ge(t)
                  , N = He(t, 0, T);
                l.push({
                    accountKey: m,
                    writableIndexes: R,
                    readonlyIndexes: N
                })
            }
            return new r({
                header: i,
                staticAccountKeys: c,
                recentBlockhash: d,
                compiledInstructions: y,
                addressTableLookups: l
            })
        }
    }
    ,
    Io = {
        deserializeMessageVersion(r) {
            let e = r[0]
              , t = e & Gr;
            return t === e ? "legacy" : t
        },
        deserialize: r => {
            let e = Io.deserializeMessageVersion(r);
            if (e === "legacy")
                return dt.from(r);
            if (e === 0)
                return cn.deserialize(r);
            throw new Error(`Transaction message version ${e} deserialization is not supported`)
        }
    },
    mt = function(r) {
        return r[r.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED",
        r[r.PROCESSED = 1] = "PROCESSED",
        r[r.TIMED_OUT = 2] = "TIMED_OUT",
        r[r.NONCE_INVALID = 3] = "NONCE_INVALID",
        r
    }({}),
    h_ = W.Buffer.alloc(Pn).fill(0),
    fe = class {
        constructor(e) {
            this.keys = void 0,
            this.programId = void 0,
            this.data = W.Buffer.alloc(0),
            this.programId = e.programId,
            this.keys = e.keys,
            e.data && (this.data = e.data)
        }
        toJSON() {
            return {
                keys: this.keys.map( ({pubkey: e, isSigner: t, isWritable: n}) => ({
                    pubkey: e.toJSON(),
                    isSigner: t,
                    isWritable: n
                })),
                programId: this.programId.toJSON(),
                data: [...this.data]
            }
        }
    }
    ,
    de = class r {
        get signature() {
            return this.signatures.length > 0 ? this.signatures[0].signature : null
        }
        constructor(e) {
            if (this.signatures = [],
            this.feePayer = void 0,
            this.instructions = [],
            this.recentBlockhash = void 0,
            this.lastValidBlockHeight = void 0,
            this.nonceInfo = void 0,
            this.minNonceContextSlot = void 0,
            this._message = void 0,
            this._json = void 0,
            !!e)
                if (e.feePayer && (this.feePayer = e.feePayer),
                e.signatures && (this.signatures = e.signatures),
                Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
                    let {minContextSlot: t, nonceInfo: n} = e;
                    this.minNonceContextSlot = t,
                    this.nonceInfo = n
                } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
                    let {blockhash: t, lastValidBlockHeight: n} = e;
                    this.recentBlockhash = t,
                    this.lastValidBlockHeight = n
                } else {
                    let {recentBlockhash: t, nonceInfo: n} = e;
                    n && (this.nonceInfo = n),
                    this.recentBlockhash = t
                }
        }
        toJSON() {
            return {
                recentBlockhash: this.recentBlockhash || null,
                feePayer: this.feePayer ? this.feePayer.toJSON() : null,
                nonceInfo: this.nonceInfo ? {
                    nonce: this.nonceInfo.nonce,
                    nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
                } : null,
                instructions: this.instructions.map(e => e.toJSON()),
                signers: this.signatures.map( ({publicKey: e}) => e.toJSON())
            }
        }
        add(...e) {
            if (e.length === 0)
                throw new Error("No instructions");
            return e.forEach(t => {
                "instructions"in t ? this.instructions = this.instructions.concat(t.instructions) : "data"in t && "programId"in t && "keys"in t ? this.instructions.push(t) : this.instructions.push(new fe(t))
            }
            ),
            this
        }
        compileMessage() {
            if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
                return this._message;
            let e, t;
            if (this.nonceInfo ? (e = this.nonceInfo.nonce,
            this.instructions[0] != this.nonceInfo.nonceInstruction ? t = [this.nonceInfo.nonceInstruction, ...this.instructions] : t = this.instructions) : (e = this.recentBlockhash,
            t = this.instructions),
            !e)
                throw new Error("Transaction recentBlockhash required");
            t.length < 1 && console.warn("No instructions provided");
            let n;
            if (this.feePayer)
                n = this.feePayer;
            else if (this.signatures.length > 0 && this.signatures[0].publicKey)
                n = this.signatures[0].publicKey;
            else
                throw new Error("Transaction fee payer required");
            for (let m = 0; m < t.length; m++)
                if (t[m].programId === void 0)
                    throw new Error(`Transaction instruction index ${m} has undefined program id`);
            let s = []
              , o = [];
            t.forEach(m => {
                m.keys.forEach(R => {
                    o.push(K({}, R))
                }
                );
                let b = m.programId.toString();
                s.includes(b) || s.push(b)
            }
            ),
            s.forEach(m => {
                o.push({
                    pubkey: new B(m),
                    isSigner: !1,
                    isWritable: !1
                })
            }
            );
            let i = [];
            o.forEach(m => {
                let b = m.pubkey.toString()
                  , R = i.findIndex(T => T.pubkey.toString() === b);
                R > -1 ? (i[R].isWritable = i[R].isWritable || m.isWritable,
                i[R].isSigner = i[R].isSigner || m.isSigner) : i.push(m)
            }
            ),
            i.sort(function(m, b) {
                if (m.isSigner !== b.isSigner)
                    return m.isSigner ? -1 : 1;
                if (m.isWritable !== b.isWritable)
                    return m.isWritable ? -1 : 1;
                let R = {
                    localeMatcher: "best fit",
                    usage: "sort",
                    sensitivity: "variant",
                    ignorePunctuation: !1,
                    numeric: !1,
                    caseFirst: "lower"
                };
                return m.pubkey.toBase58().localeCompare(b.pubkey.toBase58(), "en", R)
            });
            let c = i.findIndex(m => m.pubkey.equals(n));
            if (c > -1) {
                let[m] = i.splice(c, 1);
                m.isSigner = !0,
                m.isWritable = !0,
                i.unshift(m)
            } else
                i.unshift({
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !0
                });
            for (let m of this.signatures) {
                let b = i.findIndex(R => R.pubkey.equals(m.publicKey));
                if (b > -1)
                    i[b].isSigner || (i[b].isSigner = !0,
                    console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
                else
                    throw new Error(`unknown signer: ${m.publicKey.toString()}`)
            }
            let a = 0
              , d = 0
              , f = 0
              , y = []
              , h = [];
            i.forEach( ({pubkey: m, isSigner: b, isWritable: R}) => {
                b ? (y.push(m.toString()),
                a += 1,
                R || (d += 1)) : (h.push(m.toString()),
                R || (f += 1))
            }
            );
            let l = y.concat(h)
              , _ = t.map(m => {
                let {data: b, programId: R} = m;
                return {
                    programIdIndex: l.indexOf(R.toString()),
                    accounts: m.keys.map(T => l.indexOf(T.pubkey.toString())),
                    data: Te.default.encode(b)
                }
            }
            );
            return _.forEach(m => {
                ie(m.programIdIndex >= 0),
                m.accounts.forEach(b => ie(b >= 0))
            }
            ),
            new dt({
                header: {
                    numRequiredSignatures: a,
                    numReadonlySignedAccounts: d,
                    numReadonlyUnsignedAccounts: f
                },
                accountKeys: l,
                recentBlockhash: e,
                instructions: _
            })
        }
        _compile() {
            let e = this.compileMessage()
              , t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
            return this.signatures.length === t.length && this.signatures.every( (s, o) => t[o].equals(s.publicKey)) || (this.signatures = t.map(n => ({
                signature: null,
                publicKey: n
            }))),
            e
        }
        serializeMessage() {
            return this._compile().serialize()
        }
        getEstimatedFee(e) {
            return A(this, null, function*() {
                return (yield e.getFeeForMessage(this.compileMessage())).value
            })
        }
        setSigners(...e) {
            if (e.length === 0)
                throw new Error("No signers");
            let t = new Set;
            this.signatures = e.filter(n => {
                let s = n.toString();
                return t.has(s) ? !1 : (t.add(s),
                !0)
            }
            ).map(n => ({
                signature: null,
                publicKey: n
            }))
        }
        sign(...e) {
            if (e.length === 0)
                throw new Error("No signers");
            let t = new Set
              , n = [];
            for (let o of e) {
                let i = o.publicKey.toString();
                t.has(i) || (t.add(i),
                n.push(o))
            }
            this.signatures = n.map(o => ({
                signature: null,
                publicKey: o.publicKey
            }));
            let s = this._compile();
            this._partialSign(s, ...n)
        }
        partialSign(...e) {
            if (e.length === 0)
                throw new Error("No signers");
            let t = new Set
              , n = [];
            for (let o of e) {
                let i = o.publicKey.toString();
                t.has(i) || (t.add(i),
                n.push(o))
            }
            let s = this._compile();
            this._partialSign(s, ...n)
        }
        _partialSign(e, ...t) {
            let n = e.serialize();
            t.forEach(s => {
                let o = wo(n, s.secretKey);
                this._addSignature(s.publicKey, Z(o))
            }
            )
        }
        addSignature(e, t) {
            this._compile(),
            this._addSignature(e, t)
        }
        _addSignature(e, t) {
            ie(t.length === 64);
            let n = this.signatures.findIndex(s => e.equals(s.publicKey));
            if (n < 0)
                throw new Error(`unknown signer: ${e.toString()}`);
            this.signatures[n].signature = W.Buffer.from(t)
        }
        verifySignatures(e=!0) {
            return !this._getMessageSignednessErrors(this.serializeMessage(), e)
        }
        _getMessageSignednessErrors(e, t) {
            let n = {};
            for (let {signature: s, publicKey: o} of this.signatures)
                s === null ? t && (n.missing ||= []).push(o) : o_(s, e, o.toBytes()) || (n.invalid ||= []).push(o);
            return n.invalid || n.missing ? n : void 0
        }
        serialize(e) {
            let {requireAllSignatures: t, verifySignatures: n} = Object.assign({
                requireAllSignatures: !0,
                verifySignatures: !0
            }, e)
              , s = this.serializeMessage();
            if (n) {
                let o = this._getMessageSignednessErrors(s, t);
                if (o) {
                    let i = "Signature verification failed.";
                    throw o.invalid && (i += `
Invalid signature for public key${o.invalid.length === 1 ? "" : "(s)"} [\`${o.invalid.map(c => c.toBase58()).join("`, `")}\`].`),
                    o.missing && (i += `
Missing signature for public key${o.missing.length === 1 ? "" : "(s)"} [\`${o.missing.map(c => c.toBase58()).join("`, `")}\`].`),
                    new Error(i)
                }
            }
            return this._serialize(s)
        }
        _serialize(e) {
            let {signatures: t} = this
              , n = [];
            Xe(n, t.length);
            let s = n.length + t.length * 64 + e.length
              , o = W.Buffer.alloc(s);
            return ie(t.length < 256),
            W.Buffer.from(n).copy(o, 0),
            t.forEach( ({signature: i}, c) => {
                i !== null && (ie(i.length === 64, "signature has invalid length"),
                W.Buffer.from(i).copy(o, n.length + c * 64))
            }
            ),
            e.copy(o, n.length + t.length * 64),
            ie(o.length <= vt, `Transaction too large: ${o.length} > ${vt}`),
            o
        }
        get keys() {
            return ie(this.instructions.length === 1),
            this.instructions[0].keys.map(e => e.pubkey)
        }
        get programId() {
            return ie(this.instructions.length === 1),
            this.instructions[0].programId
        }
        get data() {
            return ie(this.instructions.length === 1),
            this.instructions[0].data
        }
        static from(e) {
            let t = [...e]
              , n = Ge(t)
              , s = [];
            for (let o = 0; o < n; o++) {
                let i = He(t, 0, Pn);
                s.push(Te.default.encode(W.Buffer.from(i)))
            }
            return r.populate(dt.from(t), s)
        }
        static populate(e, t=[]) {
            let n = new r;
            return n.recentBlockhash = e.recentBlockhash,
            e.header.numRequiredSignatures > 0 && (n.feePayer = e.accountKeys[0]),
            t.forEach( (s, o) => {
                let i = {
                    signature: s == Te.default.encode(h_) ? null : Te.default.decode(s),
                    publicKey: e.accountKeys[o]
                };
                n.signatures.push(i)
            }
            ),
            e.instructions.forEach(s => {
                let o = s.accounts.map(i => {
                    let c = e.accountKeys[i];
                    return {
                        pubkey: c,
                        isSigner: n.signatures.some(a => a.publicKey.toString() === c.toString()) || e.isAccountSigner(i),
                        isWritable: e.isAccountWritable(i)
                    }
                }
                );
                n.instructions.push(new fe({
                    keys: o,
                    programId: e.accountKeys[s.programIdIndex],
                    data: Te.default.decode(s.data)
                }))
            }
            ),
            n._message = e,
            n._json = n.toJSON(),
            n
        }
    }
    ,
    oo = class r {
        constructor(e) {
            this.payerKey = void 0,
            this.instructions = void 0,
            this.recentBlockhash = void 0,
            this.payerKey = e.payerKey,
            this.instructions = e.instructions,
            this.recentBlockhash = e.recentBlockhash
        }
        static decompile(e, t) {
            let {header: n, compiledInstructions: s, recentBlockhash: o} = e
              , {numRequiredSignatures: i, numReadonlySignedAccounts: c, numReadonlyUnsignedAccounts: a} = n
              , d = i - c;
            ie(d > 0, "Message header is invalid");
            let f = e.staticAccountKeys.length - i - a;
            ie(f >= 0, "Message header is invalid");
            let y = e.getAccountKeys(t)
              , h = y.get(0);
            if (h === void 0)
                throw new Error("Failed to decompile message because no account keys were found");
            let l = [];
            for (let _ of s) {
                let m = [];
                for (let R of _.accountKeyIndexes) {
                    let T = y.get(R);
                    if (T === void 0)
                        throw new Error(`Failed to find key for account key index ${R}`);
                    let N = R < i, D;
                    N ? D = R < d : R < y.staticAccountKeys.length ? D = R - i < f : D = R - y.staticAccountKeys.length < y.accountKeysFromLookups.writable.length,
                    m.push({
                        pubkey: T,
                        isSigner: R < n.numRequiredSignatures,
                        isWritable: D
                    })
                }
                let b = y.get(_.programIdIndex);
                if (b === void 0)
                    throw new Error(`Failed to find program id for program id index ${_.programIdIndex}`);
                l.push(new fe({
                    programId: b,
                    data: Z(_.data),
                    keys: m
                }))
            }
            return new r({
                payerKey: h,
                instructions: l,
                recentBlockhash: o
            })
        }
        compileToLegacyMessage() {
            return dt.compile({
                payerKey: this.payerKey,
                recentBlockhash: this.recentBlockhash,
                instructions: this.instructions
            })
        }
        compileToV0Message(e) {
            return cn.compile({
                payerKey: this.payerKey,
                recentBlockhash: this.recentBlockhash,
                instructions: this.instructions,
                addressLookupTableAccounts: e
            })
        }
    }
    ,
    io = class r {
        get version() {
            return this.message.version
        }
        constructor(e, t) {
            if (this.signatures = void 0,
            this.message = void 0,
            t !== void 0)
                ie(t.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"),
                this.signatures = t;
            else {
                let n = [];
                for (let s = 0; s < e.header.numRequiredSignatures; s++)
                    n.push(new Uint8Array(Pn));
                this.signatures = n
            }
            this.message = e
        }
        serialize() {
            let e = this.message.serialize()
              , t = Array();
            Xe(t, this.signatures.length);
            let n = u.struct([u.blob(t.length, "encodedSignaturesLength"), u.seq(c_(), this.signatures.length, "signatures"), u.blob(e.length, "serializedMessage")])
              , s = new Uint8Array(2048)
              , o = n.encode({
                encodedSignaturesLength: new Uint8Array(t),
                signatures: this.signatures,
                serializedMessage: e
            }, s);
            return s.slice(0, o)
        }
        static deserialize(e) {
            let t = [...e]
              , n = []
              , s = Ge(t);
            for (let i = 0; i < s; i++)
                n.push(new Uint8Array(He(t, 0, Pn)));
            let o = Io.deserialize(new Uint8Array(t));
            return new r(o,n)
        }
        sign(e) {
            let t = this.message.serialize()
              , n = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
            for (let s of e) {
                let o = n.findIndex(i => i.equals(s.publicKey));
                ie(o >= 0, `Cannot sign with non signer key ${s.publicKey.toBase58()}`),
                this.signatures[o] = wo(t, s.secretKey)
            }
        }
        addSignature(e, t) {
            ie(t.byteLength === 64, "Signature must be 64 bytes long");
            let s = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex(o => o.equals(e));
            ie(s >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`),
            this.signatures[s] = t
        }
    }
    ,
    __ = 160,
    g_ = 64,
    y_ = __ / g_,
    Ya = 1e3 / y_,
    ot = new B("SysvarC1ock11111111111111111111111111111111"),
    p_ = new B("SysvarEpochSchedu1e111111111111111111111111"),
    m_ = new B("Sysvar1nstructions1111111111111111111111111"),
    xr = new B("SysvarRecentB1ockHashes11111111111111111111"),
    un = new B("SysvarRent111111111111111111111111111111111"),
    R_ = new B("SysvarRewards111111111111111111111111111111"),
    b_ = new B("SysvarS1otHashes111111111111111111111111111"),
    E_ = new B("SysvarS1otHistory11111111111111111111111111"),
    Pr = new B("SysvarStakeHistory1111111111111111111111111"),
    $t = class extends Error {
        constructor({action: e, signature: t, transactionMessage: n, logs: s}) {
            let o = s ? `Logs: 
${JSON.stringify(s.slice(-10), null, 2)}. ` : "", i = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.", c;
            switch (e) {
            case "send":
                c = `Transaction ${t} resulted in an error. 
${n}. ` + o + i;
                break;
            case "simulate":
                c = `Simulation failed. 
Message: ${n}. 
` + o + i;
                break;
            default:
                c = `Unknown action '${(a => a)(e)}'`
            }
            super(c),
            this.signature = void 0,
            this.transactionMessage = void 0,
            this.transactionLogs = void 0,
            this.signature = t,
            this.transactionMessage = n,
            this.transactionLogs = s || void 0
        }
        get transactionError() {
            return {
                message: this.transactionMessage,
                logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
            }
        }
        get logs() {
            let e = this.transactionLogs;
            if (!(e != null && typeof e == "object" && "then"in e))
                return e
        }
        getLogs(e) {
            return A(this, null, function*() {
                return Array.isArray(this.transactionLogs) || (this.transactionLogs = new Promise( (t, n) => {
                    e.getTransaction(this.signature).then(s => {
                        if (s && s.meta && s.meta.logMessages) {
                            let o = s.meta.logMessages;
                            this.transactionLogs = o,
                            t(o)
                        } else
                            n(new Error("Log messages not found"))
                    }
                    ).catch(n)
                }
                )),
                yield this.transactionLogs
            })
        }
    }
    ,
    S_ = {
        JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
        JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
        JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
        JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
        JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
        JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
        JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
        JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
        JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
        JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
        JSON_RPC_SCAN_ERROR: -32012,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
        JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
        JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
        JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
    },
    U = class extends Error {
        constructor({code: e, message: t, data: n}, s) {
            super(s != null ? `${s}: ${t}` : t),
            this.code = void 0,
            this.data = void 0,
            this.code = e,
            this.data = n,
            this.name = "SolanaJSONRPCError"
        }
    }
    ;
    Xa = u.nu64("lamportsPerSignature"),
    Za = u.struct([u.u32("version"), u.u32("state"), Q("authorizedPubkey"), Q("nonce"), u.struct([Xa], "feeCalculator")]),
    co = Za.span,
    zr = class r {
        constructor(e) {
            this.authorizedPubkey = void 0,
            this.nonce = void 0,
            this.feeCalculator = void 0,
            this.authorizedPubkey = e.authorizedPubkey,
            this.nonce = e.nonce,
            this.feeCalculator = e.feeCalculator
        }
        static fromAccountData(e) {
            let t = Za.decode(Z(e), 0);
            return new r({
                authorizedPubkey: new B(t.authorizedPubkey),
                nonce: new B(t.nonce).toString(),
                feeCalculator: t.feeCalculator
            })
        }
    }
    ;
    uo = class {
        constructor() {}
        static decodeInstructionType(e) {
            this.checkProgramId(e.programId);
            let n = u.u32("instruction").decode(e.data), s;
            for (let[o,i] of Object.entries(ge))
                if (i.index == n) {
                    s = o;
                    break
                }
            if (!s)
                throw new Error("Instruction type incorrect; not a SystemInstruction");
            return s
        }
        static decodeCreateAccount(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {lamports: t, space: n, programId: s} = ue(ge.Create, e.data);
            return {
                fromPubkey: e.keys[0].pubkey,
                newAccountPubkey: e.keys[1].pubkey,
                lamports: t,
                space: n,
                programId: new B(s)
            }
        }
        static decodeTransfer(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {lamports: t} = ue(ge.Transfer, e.data);
            return {
                fromPubkey: e.keys[0].pubkey,
                toPubkey: e.keys[1].pubkey,
                lamports: t
            }
        }
        static decodeTransferWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {lamports: t, seed: n, programId: s} = ue(ge.TransferWithSeed, e.data);
            return {
                fromPubkey: e.keys[0].pubkey,
                basePubkey: e.keys[1].pubkey,
                toPubkey: e.keys[2].pubkey,
                lamports: t,
                seed: n,
                programId: new B(s)
            }
        }
        static decodeAllocate(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 1);
            let {space: t} = ue(ge.Allocate, e.data);
            return {
                accountPubkey: e.keys[0].pubkey,
                space: t
            }
        }
        static decodeAllocateWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 1);
            let {base: t, seed: n, space: s, programId: o} = ue(ge.AllocateWithSeed, e.data);
            return {
                accountPubkey: e.keys[0].pubkey,
                basePubkey: new B(t),
                seed: n,
                space: s,
                programId: new B(o)
            }
        }
        static decodeAssign(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 1);
            let {programId: t} = ue(ge.Assign, e.data);
            return {
                accountPubkey: e.keys[0].pubkey,
                programId: new B(t)
            }
        }
        static decodeAssignWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 1);
            let {base: t, seed: n, programId: s} = ue(ge.AssignWithSeed, e.data);
            return {
                accountPubkey: e.keys[0].pubkey,
                basePubkey: new B(t),
                seed: n,
                programId: new B(s)
            }
        }
        static decodeCreateWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {base: t, seed: n, lamports: s, space: o, programId: i} = ue(ge.CreateWithSeed, e.data);
            return {
                fromPubkey: e.keys[0].pubkey,
                newAccountPubkey: e.keys[1].pubkey,
                basePubkey: new B(t),
                seed: n,
                lamports: s,
                space: o,
                programId: new B(i)
            }
        }
        static decodeNonceInitialize(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {authorized: t} = ue(ge.InitializeNonceAccount, e.data);
            return {
                noncePubkey: e.keys[0].pubkey,
                authorizedPubkey: new B(t)
            }
        }
        static decodeNonceAdvance(e) {
            return this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            ue(ge.AdvanceNonceAccount, e.data),
            {
                noncePubkey: e.keys[0].pubkey,
                authorizedPubkey: e.keys[2].pubkey
            }
        }
        static decodeNonceWithdraw(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 5);
            let {lamports: t} = ue(ge.WithdrawNonceAccount, e.data);
            return {
                noncePubkey: e.keys[0].pubkey,
                toPubkey: e.keys[1].pubkey,
                authorizedPubkey: e.keys[4].pubkey,
                lamports: t
            }
        }
        static decodeNonceAuthorize(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {authorized: t} = ue(ge.AuthorizeNonceAccount, e.data);
            return {
                noncePubkey: e.keys[0].pubkey,
                authorizedPubkey: e.keys[1].pubkey,
                newAuthorizedPubkey: new B(t)
            }
        }
        static checkProgramId(e) {
            if (!e.equals(Be.programId))
                throw new Error("invalid instruction; programId is not SystemProgram")
        }
        static checkKeyLength(e, t) {
            if (e.length < t)
                throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
        }
    }
    ,
    ge = Object.freeze({
        Create: {
            index: 0,
            layout: u.struct([u.u32("instruction"), u.ns64("lamports"), u.ns64("space"), Q("programId")])
        },
        Assign: {
            index: 1,
            layout: u.struct([u.u32("instruction"), Q("programId")])
        },
        Transfer: {
            index: 2,
            layout: u.struct([u.u32("instruction"), dn("lamports")])
        },
        CreateWithSeed: {
            index: 3,
            layout: u.struct([u.u32("instruction"), Q("base"), Vt("seed"), u.ns64("lamports"), u.ns64("space"), Q("programId")])
        },
        AdvanceNonceAccount: {
            index: 4,
            layout: u.struct([u.u32("instruction")])
        },
        WithdrawNonceAccount: {
            index: 5,
            layout: u.struct([u.u32("instruction"), u.ns64("lamports")])
        },
        InitializeNonceAccount: {
            index: 6,
            layout: u.struct([u.u32("instruction"), Q("authorized")])
        },
        AuthorizeNonceAccount: {
            index: 7,
            layout: u.struct([u.u32("instruction"), Q("authorized")])
        },
        Allocate: {
            index: 8,
            layout: u.struct([u.u32("instruction"), u.ns64("space")])
        },
        AllocateWithSeed: {
            index: 9,
            layout: u.struct([u.u32("instruction"), Q("base"), Vt("seed"), u.ns64("space"), Q("programId")])
        },
        AssignWithSeed: {
            index: 10,
            layout: u.struct([u.u32("instruction"), Q("base"), Vt("seed"), Q("programId")])
        },
        TransferWithSeed: {
            index: 11,
            layout: u.struct([u.u32("instruction"), dn("lamports"), Vt("seed"), Q("programId")])
        },
        UpgradeNonceAccount: {
            index: 12,
            layout: u.struct([u.u32("instruction")])
        }
    }),
    Be = class r {
        constructor() {}
        static createAccount(e) {
            let t = ge.Create
              , n = re(t, {
                lamports: e.lamports,
                space: e.space,
                programId: Z(e.programId.toBuffer())
            });
            return new fe({
                keys: [{
                    pubkey: e.fromPubkey,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: e.newAccountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }],
                programId: this.programId,
                data: n
            })
        }
        static transfer(e) {
            let t, n;
            if ("basePubkey"in e) {
                let s = ge.TransferWithSeed;
                t = re(s, {
                    lamports: BigInt(e.lamports),
                    seed: e.seed,
                    programId: Z(e.programId.toBuffer())
                }),
                n = [{
                    pubkey: e.fromPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }, {
                    pubkey: e.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }]
            } else {
                let s = ge.Transfer;
                t = re(s, {
                    lamports: BigInt(e.lamports)
                }),
                n = [{
                    pubkey: e.fromPubkey,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: e.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }]
            }
            return new fe({
                keys: n,
                programId: this.programId,
                data: t
            })
        }
        static assign(e) {
            let t, n;
            if ("basePubkey"in e) {
                let s = ge.AssignWithSeed;
                t = re(s, {
                    base: Z(e.basePubkey.toBuffer()),
                    seed: e.seed,
                    programId: Z(e.programId.toBuffer())
                }),
                n = [{
                    pubkey: e.accountPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }]
            } else {
                let s = ge.Assign;
                t = re(s, {
                    programId: Z(e.programId.toBuffer())
                }),
                n = [{
                    pubkey: e.accountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }]
            }
            return new fe({
                keys: n,
                programId: this.programId,
                data: t
            })
        }
        static createAccountWithSeed(e) {
            let t = ge.CreateWithSeed
              , n = re(t, {
                base: Z(e.basePubkey.toBuffer()),
                seed: e.seed,
                lamports: e.lamports,
                space: e.space,
                programId: Z(e.programId.toBuffer())
            })
              , s = [{
                pubkey: e.fromPubkey,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: e.newAccountPubkey,
                isSigner: !1,
                isWritable: !0
            }];
            return e.basePubkey.equals(e.fromPubkey) || s.push({
                pubkey: e.basePubkey,
                isSigner: !0,
                isWritable: !1
            }),
            new fe({
                keys: s,
                programId: this.programId,
                data: n
            })
        }
        static createNonceAccount(e) {
            let t = new de;
            "basePubkey"in e && "seed"in e ? t.add(r.createAccountWithSeed({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.noncePubkey,
                basePubkey: e.basePubkey,
                seed: e.seed,
                lamports: e.lamports,
                space: co,
                programId: this.programId
            })) : t.add(r.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.noncePubkey,
                lamports: e.lamports,
                space: co,
                programId: this.programId
            }));
            let n = {
                noncePubkey: e.noncePubkey,
                authorizedPubkey: e.authorizedPubkey
            };
            return t.add(this.nonceInitialize(n)),
            t
        }
        static nonceInitialize(e) {
            let t = ge.InitializeNonceAccount
              , n = re(t, {
                authorized: Z(e.authorizedPubkey.toBuffer())
            })
              , s = {
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: xr,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: un,
                    isSigner: !1,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            };
            return new fe(s)
        }
        static nonceAdvance(e) {
            let t = ge.AdvanceNonceAccount
              , n = re(t)
              , s = {
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: xr,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: e.authorizedPubkey,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            };
            return new fe(s)
        }
        static nonceWithdraw(e) {
            let t = ge.WithdrawNonceAccount
              , n = re(t, {
                lamports: e.lamports
            });
            return new fe({
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: xr,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: un,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: e.authorizedPubkey,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            })
        }
        static nonceAuthorize(e) {
            let t = ge.AuthorizeNonceAccount
              , n = re(t, {
                authorized: Z(e.newAuthorizedPubkey.toBuffer())
            });
            return new fe({
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.authorizedPubkey,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            })
        }
        static allocate(e) {
            let t, n;
            if ("basePubkey"in e) {
                let s = ge.AllocateWithSeed;
                t = re(s, {
                    base: Z(e.basePubkey.toBuffer()),
                    seed: e.seed,
                    space: e.space,
                    programId: Z(e.programId.toBuffer())
                }),
                n = [{
                    pubkey: e.accountPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }]
            } else {
                let s = ge.Allocate;
                t = re(s, {
                    space: e.space
                }),
                n = [{
                    pubkey: e.accountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }]
            }
            return new fe({
                keys: n,
                programId: this.programId,
                data: t
            })
        }
    }
    ;
    Be.programId = new B("11111111111111111111111111111111");
    A_ = vt - 300,
    fo = ( () => {
        class r {
            constructor() {}
            static getMinNumSignatures(t) {
                return 2 * (Math.ceil(t / r.chunkSize) + 1 + 1)
            }
            static load(t, n, s, o, i) {
                return A(this, null, function*() {
                    {
                        let h = yield t.getMinimumBalanceForRentExemption(i.length)
                          , l = yield t.getAccountInfo(s.publicKey, "confirmed")
                          , _ = null;
                        if (l !== null) {
                            if (l.executable)
                                return console.error("Program load failed, account is already executable"),
                                !1;
                            l.data.length !== i.length && (_ = _ || new de,
                            _.add(Be.allocate({
                                accountPubkey: s.publicKey,
                                space: i.length
                            }))),
                            l.owner.equals(o) || (_ = _ || new de,
                            _.add(Be.assign({
                                accountPubkey: s.publicKey,
                                programId: o
                            }))),
                            l.lamports < h && (_ = _ || new de,
                            _.add(Be.transfer({
                                fromPubkey: n.publicKey,
                                toPubkey: s.publicKey,
                                lamports: h - l.lamports
                            })))
                        } else
                            _ = new de().add(Be.createAccount({
                                fromPubkey: n.publicKey,
                                newAccountPubkey: s.publicKey,
                                lamports: h > 0 ? h : 1,
                                space: i.length,
                                programId: o
                            }));
                        _ !== null && (yield ao(t, _, [n, s], {
                            commitment: "confirmed"
                        }))
                    }
                    let c = u.struct([u.u32("instruction"), u.u32("offset"), u.u32("bytesLength"), u.u32("bytesLengthPadding"), u.seq(u.u8("byte"), u.offset(u.u32(), -8), "bytes")])
                      , a = r.chunkSize
                      , d = 0
                      , f = i
                      , y = [];
                    for (; f.length > 0; ) {
                        let h = f.slice(0, a)
                          , l = W.Buffer.alloc(a + 16);
                        c.encode({
                            instruction: 0,
                            offset: d,
                            bytes: h,
                            bytesLength: 0,
                            bytesLengthPadding: 0
                        }, l);
                        let _ = new de().add({
                            keys: [{
                                pubkey: s.publicKey,
                                isSigner: !0,
                                isWritable: !0
                            }],
                            programId: o,
                            data: l
                        });
                        y.push(ao(t, _, [n, s], {
                            commitment: "confirmed"
                        })),
                        t._rpcEndpoint.includes("solana.com") && (yield Ft(1e3 / 4)),
                        d += a,
                        f = f.slice(a)
                    }
                    yield Promise.all(y);
                    {
                        let h = u.struct([u.u32("instruction")])
                          , l = W.Buffer.alloc(h.span);
                        h.encode({
                            instruction: 1
                        }, l);
                        let _ = new de().add({
                            keys: [{
                                pubkey: s.publicKey,
                                isSigner: !0,
                                isWritable: !0
                            }, {
                                pubkey: un,
                                isSigner: !1,
                                isWritable: !1
                            }],
                            programId: o,
                            data: l
                        })
                          , m = "processed"
                          , b = yield t.sendTransaction(_, [n, s], {
                            preflightCommitment: m
                        })
                          , {context: R, value: T} = yield t.confirmTransaction({
                            signature: b,
                            lastValidBlockHeight: _.lastValidBlockHeight,
                            blockhash: _.recentBlockhash
                        }, m);
                        if (T.err)
                            throw new Error(`Transaction ${b} failed (${JSON.stringify(T)})`);
                        for (; ; ) {
                            try {
                                if ((yield t.getSlot({
                                    commitment: m
                                })) > R.slot)
                                    break
                            } catch {}
                            yield new Promise(N => setTimeout(N, Math.round(Ya / 2)))
                        }
                    }
                    return !0
                })
            }
        }
        return r.chunkSize = A_,
        r
    }
    )(),
    w_ = new B("BPFLoader2111111111111111111111111111111111"),
    lo = class {
        static getMinNumSignatures(e) {
            return fo.getMinNumSignatures(e)
        }
        static load(e, t, n, s, o) {
            return fo.load(e, t, n, o, s)
        }
    }
    ;
    N_ = O_(),
    Ta = I_(N_),
    Bn = 32;
    Mr = class {
        constructor(e, t, n, s, o) {
            this.slotsPerEpoch = void 0,
            this.leaderScheduleSlotOffset = void 0,
            this.warmup = void 0,
            this.firstNormalEpoch = void 0,
            this.firstNormalSlot = void 0,
            this.slotsPerEpoch = e,
            this.leaderScheduleSlotOffset = t,
            this.warmup = n,
            this.firstNormalEpoch = s,
            this.firstNormalSlot = o
        }
        getEpoch(e) {
            return this.getEpochAndSlotIndex(e)[0]
        }
        getEpochAndSlotIndex(e) {
            if (e < this.firstNormalSlot) {
                let t = Zs(k_(e + Bn + 1)) - Zs(Bn) - 1
                  , n = this.getSlotsInEpoch(t)
                  , s = e - (n - Bn);
                return [t, s]
            } else {
                let t = e - this.firstNormalSlot
                  , n = Math.floor(t / this.slotsPerEpoch)
                  , s = this.firstNormalEpoch + n
                  , o = t % this.slotsPerEpoch;
                return [s, o]
            }
        }
        getFirstSlotInEpoch(e) {
            return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * Bn : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
        }
        getLastSlotInEpoch(e) {
            return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1
        }
        getSlotsInEpoch(e) {
            return e < this.firstNormalEpoch ? Math.pow(2, e + Zs(Bn)) : this.slotsPerEpoch
        }
    }
    ,
    T_ = globalThis.fetch,
    ho = class extends ha {
        constructor(e, t, n) {
            let s = o => {
                let i = la(o, K({
                    autoconnect: !0,
                    max_reconnects: 5,
                    reconnect: !0,
                    reconnect_interval: 1e3
                }, t));
                return "socket"in i ? this.underlyingSocket = i.socket : this.underlyingSocket = i,
                i
            }
            ;
            super(s, e, t, n),
            this.underlyingSocket = void 0
        }
        call(...e) {
            let t = this.underlyingSocket?.readyState;
            return t === 1 ? super.call(...e) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
        }
        notify(...e) {
            let t = this.underlyingSocket?.readyState;
            return t === 1 ? super.notify(...e) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
        }
    }
    ;
    va = 56,
    zn = class {
        constructor(e) {
            this.key = void 0,
            this.state = void 0,
            this.key = e.key,
            this.state = e.state
        }
        isActive() {
            let e = BigInt("0xffffffffffffffff");
            return this.state.deactivationSlot === e
        }
        static deserialize(e) {
            let t = v_(L_, e)
              , n = e.length - va;
            ie(n >= 0, "lookup table is invalid"),
            ie(n % 32 === 0, "lookup table is invalid");
            let s = n / 32
              , {addresses: o} = u.struct([u.seq(Q(), s, "addresses")]).decode(e.slice(va));
            return {
                deactivationSlot: t.deactivationSlot,
                lastExtendedSlot: t.lastExtendedSlot,
                lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
                authority: t.authority.length !== 0 ? new B(t.authority[0]) : void 0,
                addresses: o.map(i => new B(i))
            }
        }
    }
    ,
    L_ = {
        index: 1,
        layout: u.struct([u.u32("typeIndex"), dn("deactivationSlot"), u.nu64("lastExtendedSlot"), u.u8("lastExtendedStartIndex"), u.u8(), u.seq(Q(), u.offset(u.u8(), -1), "authority")])
    },
    B_ = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
    Re = sn(Sr(B), k(), r => new B(r)),
    Ja = Ar([k(), me("base64")]),
    Oo = sn(Sr(W.Buffer), Ja, r => W.Buffer.from(r[0], "base64")),
    Qa = 30 * 1e3;
    P_ = ec(Kt());
    D_ = I({
        foundation: g(),
        foundationTerm: g(),
        initial: g(),
        taper: g(),
        terminal: g()
    }),
    U_ = X(C(x(I({
        epoch: g(),
        effectiveSlot: g(),
        amount: g(),
        postBalance: g(),
        commission: F(x(g()))
    })))),
    z_ = C(I({
        slot: g(),
        prioritizationFee: g()
    })),
    M_ = I({
        total: g(),
        validator: g(),
        foundation: g(),
        epoch: g()
    }),
    K_ = I({
        epoch: g(),
        slotIndex: g(),
        slotsInEpoch: g(),
        absoluteSlot: g(),
        blockHeight: F(g()),
        transactionCount: F(g())
    }),
    F_ = I({
        slotsPerEpoch: g(),
        leaderScheduleSlotOffset: g(),
        warmup: nt(),
        firstNormalEpoch: g(),
        firstNormalSlot: g()
    }),
    V_ = xs(k(), C(g())),
    Gt = x(Pe([I({}), k()])),
    q_ = I({
        err: Gt
    }),
    $_ = me("receivedSignature"),
    W_ = I({
        "solana-core": k(),
        "feature-set": F(g())
    }),
    G_ = I({
        program: k(),
        programId: Re,
        parsed: Kt()
    }),
    H_ = I({
        programId: Re,
        accounts: C(Re),
        data: k()
    }),
    Ba = we(I({
        err: x(Pe([I({}), k()])),
        logs: x(C(k())),
        accounts: F(x(C(x(I({
            executable: nt(),
            owner: k(),
            lamports: g(),
            data: C(k()),
            rentEpoch: F(g())
        }))))),
        unitsConsumed: F(g()),
        returnData: F(x(I({
            programId: k(),
            data: Ar([k(), me("base64")])
        }))),
        innerInstructions: F(x(C(I({
            index: g(),
            instructions: C(Pe([G_, H_]))
        }))))
    })),
    j_ = we(I({
        byIdentity: xs(k(), C(g())),
        range: I({
            firstSlot: g(),
            lastSlot: g()
        })
    }));
    J_ = X(D_),
    Q_ = X(M_),
    eg = X(z_),
    tg = X(K_),
    ng = X(F_),
    rg = X(V_),
    sg = X(g()),
    og = we(I({
        total: g(),
        circulating: g(),
        nonCirculating: g(),
        nonCirculatingAccounts: C(Re)
    })),
    _o = I({
        amount: k(),
        uiAmount: x(g()),
        decimals: g(),
        uiAmountString: F(k())
    }),
    ig = we(C(I({
        address: Re,
        amount: k(),
        uiAmount: x(g()),
        decimals: g(),
        uiAmountString: F(k())
    }))),
    ag = we(C(I({
        pubkey: Re,
        account: I({
            executable: nt(),
            owner: Re,
            lamports: g(),
            data: Oo,
            rentEpoch: g()
        })
    }))),
    go = I({
        program: k(),
        parsed: Kt(),
        space: g()
    }),
    cg = we(C(I({
        pubkey: Re,
        account: I({
            executable: nt(),
            owner: Re,
            lamports: g(),
            data: go,
            rentEpoch: g()
        })
    }))),
    ug = we(C(I({
        lamports: g(),
        address: Re
    }))),
    Mn = I({
        executable: nt(),
        owner: Re,
        lamports: g(),
        data: Oo,
        rentEpoch: g()
    }),
    dg = I({
        pubkey: Re,
        account: Mn
    }),
    fg = sn(Pe([Sr(W.Buffer), go]), Pe([Ja, go]), r => Array.isArray(r) ? L(r, Oo) : r),
    yo = I({
        executable: nt(),
        owner: Re,
        lamports: g(),
        data: fg,
        rentEpoch: g()
    }),
    lg = I({
        pubkey: Re,
        account: yo
    }),
    hg = I({
        state: Pe([me("active"), me("inactive"), me("activating"), me("deactivating")]),
        active: g(),
        inactive: g()
    }),
    _g = X(C(I({
        signature: k(),
        slot: g(),
        err: Gt,
        memo: x(k()),
        blockTime: F(x(g()))
    }))),
    gg = X(C(I({
        signature: k(),
        slot: g(),
        err: Gt,
        memo: x(k()),
        blockTime: F(x(g()))
    }))),
    yg = I({
        subscription: g(),
        result: Hr(Mn)
    }),
    pg = I({
        pubkey: Re,
        account: Mn
    }),
    mg = I({
        subscription: g(),
        result: Hr(pg)
    }),
    Rg = I({
        parent: g(),
        slot: g(),
        root: g()
    }),
    bg = I({
        subscription: g(),
        result: Rg
    }),
    Eg = Pe([I({
        type: Pe([me("firstShredReceived"), me("completed"), me("optimisticConfirmation"), me("root")]),
        slot: g(),
        timestamp: g()
    }), I({
        type: me("createdBank"),
        parent: g(),
        slot: g(),
        timestamp: g()
    }), I({
        type: me("frozen"),
        slot: g(),
        timestamp: g(),
        stats: I({
            numTransactionEntries: g(),
            numSuccessfulTransactions: g(),
            numFailedTransactions: g(),
            maxTransactionsPerEntry: g()
        })
    }), I({
        type: me("dead"),
        slot: g(),
        timestamp: g(),
        err: k()
    })]),
    Sg = I({
        subscription: g(),
        result: Eg
    }),
    Ag = I({
        subscription: g(),
        result: Hr(Pe([q_, $_]))
    }),
    wg = I({
        subscription: g(),
        result: g()
    }),
    Ig = I({
        pubkey: k(),
        gossip: x(k()),
        tpu: x(k()),
        rpc: x(k()),
        version: x(k())
    }),
    Ca = I({
        votePubkey: k(),
        nodePubkey: k(),
        activatedStake: g(),
        epochVoteAccount: nt(),
        epochCredits: C(Ar([g(), g(), g()])),
        commission: g(),
        lastVote: g(),
        rootSlot: x(g())
    }),
    Og = X(I({
        current: C(Ca),
        delinquent: C(Ca)
    })),
    Ng = Pe([me("processed"), me("confirmed"), me("finalized")]),
    kg = I({
        slot: g(),
        confirmations: x(g()),
        err: Gt,
        confirmationStatus: F(Ng)
    }),
    Tg = we(C(x(kg))),
    vg = X(g()),
    tc = I({
        accountKey: Re,
        writableIndexes: C(g()),
        readonlyIndexes: C(g())
    }),
    No = I({
        signatures: C(k()),
        message: I({
            accountKeys: C(k()),
            header: I({
                numRequiredSignatures: g(),
                numReadonlySignedAccounts: g(),
                numReadonlyUnsignedAccounts: g()
            }),
            instructions: C(I({
                accounts: C(g()),
                data: k(),
                programIdIndex: g()
            })),
            recentBlockhash: k(),
            addressTableLookups: F(C(tc))
        })
    }),
    nc = I({
        pubkey: Re,
        signer: nt(),
        writable: nt(),
        source: F(Pe([me("transaction"), me("lookupTable")]))
    }),
    rc = I({
        accountKeys: C(nc),
        signatures: C(k())
    }),
    sc = I({
        parsed: Kt(),
        program: k(),
        programId: Re
    }),
    oc = I({
        accounts: C(Re),
        data: k(),
        programId: Re
    }),
    Lg = Pe([oc, sc]),
    Bg = Pe([I({
        parsed: Kt(),
        program: k(),
        programId: k()
    }), I({
        accounts: C(k()),
        data: k(),
        programId: k()
    })]),
    ic = sn(Lg, Bg, r => "accounts"in r ? L(r, oc) : L(r, sc)),
    ac = I({
        signatures: C(k()),
        message: I({
            accountKeys: C(nc),
            instructions: C(ic),
            recentBlockhash: k(),
            addressTableLookups: F(x(C(tc)))
        })
    }),
    Kr = I({
        accountIndex: g(),
        mint: k(),
        owner: F(k()),
        programId: F(k()),
        uiTokenAmount: _o
    }),
    cc = I({
        writable: C(Re),
        readonly: C(Re)
    }),
    jr = I({
        err: Gt,
        fee: g(),
        innerInstructions: F(x(C(I({
            index: g(),
            instructions: C(I({
                accounts: C(g()),
                data: k(),
                programIdIndex: g()
            }))
        })))),
        preBalances: C(g()),
        postBalances: C(g()),
        logMessages: F(x(C(k()))),
        preTokenBalances: F(x(C(Kr))),
        postTokenBalances: F(x(C(Kr))),
        loadedAddresses: F(cc),
        computeUnitsConsumed: F(g()),
        costUnits: F(g())
    }),
    ko = I({
        err: Gt,
        fee: g(),
        innerInstructions: F(x(C(I({
            index: g(),
            instructions: C(ic)
        })))),
        preBalances: C(g()),
        postBalances: C(g()),
        logMessages: F(x(C(k()))),
        preTokenBalances: F(x(C(Kr))),
        postTokenBalances: F(x(C(Kr))),
        loadedAddresses: F(cc),
        computeUnitsConsumed: F(g()),
        costUnits: F(g())
    }),
    _n = Pe([me(0), me("legacy")]),
    Ht = I({
        pubkey: k(),
        lamports: g(),
        postBalance: x(g()),
        rewardType: x(k()),
        commission: F(x(g()))
    }),
    Cg = X(x(I({
        blockhash: k(),
        previousBlockhash: k(),
        parentSlot: g(),
        transactions: C(I({
            transaction: No,
            meta: x(jr),
            version: F(_n)
        })),
        rewards: F(C(Ht)),
        blockTime: x(g()),
        blockHeight: x(g())
    }))),
    xg = X(x(I({
        blockhash: k(),
        previousBlockhash: k(),
        parentSlot: g(),
        rewards: F(C(Ht)),
        blockTime: x(g()),
        blockHeight: x(g())
    }))),
    Pg = X(x(I({
        blockhash: k(),
        previousBlockhash: k(),
        parentSlot: g(),
        transactions: C(I({
            transaction: rc,
            meta: x(jr),
            version: F(_n)
        })),
        rewards: F(C(Ht)),
        blockTime: x(g()),
        blockHeight: x(g())
    }))),
    Dg = X(x(I({
        blockhash: k(),
        previousBlockhash: k(),
        parentSlot: g(),
        transactions: C(I({
            transaction: ac,
            meta: x(ko),
            version: F(_n)
        })),
        rewards: F(C(Ht)),
        blockTime: x(g()),
        blockHeight: x(g())
    }))),
    Ug = X(x(I({
        blockhash: k(),
        previousBlockhash: k(),
        parentSlot: g(),
        transactions: C(I({
            transaction: rc,
            meta: x(ko),
            version: F(_n)
        })),
        rewards: F(C(Ht)),
        blockTime: x(g()),
        blockHeight: x(g())
    }))),
    zg = X(x(I({
        blockhash: k(),
        previousBlockhash: k(),
        parentSlot: g(),
        rewards: F(C(Ht)),
        blockTime: x(g()),
        blockHeight: x(g())
    }))),
    Mg = X(x(I({
        blockhash: k(),
        previousBlockhash: k(),
        parentSlot: g(),
        transactions: C(I({
            transaction: No,
            meta: x(jr)
        })),
        rewards: F(C(Ht)),
        blockTime: x(g())
    }))),
    xa = X(x(I({
        blockhash: k(),
        previousBlockhash: k(),
        parentSlot: g(),
        signatures: C(k()),
        blockTime: x(g())
    }))),
    Qs = X(x(I({
        slot: g(),
        meta: x(jr),
        blockTime: F(x(g())),
        transaction: No,
        version: F(_n)
    }))),
    Cr = X(x(I({
        slot: g(),
        transaction: ac,
        meta: x(ko),
        blockTime: F(x(g())),
        version: F(_n)
    }))),
    Kg = we(I({
        blockhash: k(),
        lastValidBlockHeight: g()
    })),
    Fg = we(nt()),
    Vg = I({
        slot: g(),
        numTransactions: g(),
        numSlots: g(),
        samplePeriodSecs: g()
    }),
    qg = X(C(Vg)),
    $g = we(x(I({
        feeCalculator: I({
            lamportsPerSignature: g()
        })
    }))),
    Wg = X(k()),
    Gg = X(k()),
    Hg = I({
        err: Gt,
        logs: C(k()),
        signature: k()
    }),
    jg = I({
        result: Hr(Hg),
        subscription: g()
    }),
    Yg = {
        "solana-client": "js/1.0.0-maintenance"
    },
    po = class {
        constructor(e, t) {
            this._commitment = void 0,
            this._confirmTransactionInitialTimeout = void 0,
            this._rpcEndpoint = void 0,
            this._rpcWsEndpoint = void 0,
            this._rpcClient = void 0,
            this._rpcRequest = void 0,
            this._rpcBatchRequest = void 0,
            this._rpcWebSocket = void 0,
            this._rpcWebSocketConnected = !1,
            this._rpcWebSocketHeartbeat = null,
            this._rpcWebSocketIdleTimeout = null,
            this._rpcWebSocketGeneration = 0,
            this._disableBlockhashCaching = !1,
            this._pollingBlockhash = !1,
            this._blockhashInfo = {
                latestBlockhash: null,
                lastFetch: 0,
                transactionSignatures: [],
                simulatedSignatures: []
            },
            this._nextClientSubscriptionId = 0,
            this._subscriptionDisposeFunctionsByClientSubscriptionId = {},
            this._subscriptionHashByClientSubscriptionId = {},
            this._subscriptionStateChangeCallbacksByHash = {},
            this._subscriptionCallbacksByServerSubscriptionId = {},
            this._subscriptionsByHash = {},
            this._subscriptionsAutoDisposedByRpc = new Set,
            this.getBlockHeight = ( () => {
                let d = {};
                return f => A(this, null, function*() {
                    let {commitment: y, config: h} = _e(f)
                      , l = this._buildArgs([], y, void 0, h)
                      , _ = Ta(l);
                    return d[_] = d[_] ?? A(this, null, function*() {
                        try {
                            let m = yield this._rpcRequest("getBlockHeight", l)
                              , b = L(m, X(g()));
                            if ("error"in b)
                                throw new U(b.error,"failed to get block height information");
                            return b.result
                        } finally {
                            delete d[_]
                        }
                    }),
                    yield d[_]
                })
            }
            )();
            let n, s, o, i, c, a;
            t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment,
            this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout,
            n = t.wsEndpoint,
            s = t.httpHeaders,
            o = t.fetch,
            i = t.fetchMiddleware,
            c = t.disableRetryOnRateLimit,
            a = t.httpAgent),
            this._rpcEndpoint = x_(e),
            this._rpcWsEndpoint = n || C_(e),
            this._rpcClient = Y_(e, s, o, i, c, a),
            this._rpcRequest = X_(this._rpcClient),
            this._rpcBatchRequest = Z_(this._rpcClient),
            this._rpcWebSocket = new ho(this._rpcWsEndpoint,{
                autoconnect: !1,
                max_reconnects: 1 / 0
            }),
            this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
            this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
            this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
            this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)),
            this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)),
            this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)),
            this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)),
            this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)),
            this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)),
            this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
        }
        get commitment() {
            return this._commitment
        }
        get rpcEndpoint() {
            return this._rpcEndpoint
        }
        getBalanceAndContext(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = this._buildArgs([e.toBase58()], n, void 0, s)
                  , i = yield this._rpcRequest("getBalance", o)
                  , c = L(i, we(g()));
                if ("error"in c)
                    throw new U(c.error,`failed to get balance for ${e.toBase58()}`);
                return c.result
            })
        }
        getBalance(e, t) {
            return A(this, null, function*() {
                return yield this.getBalanceAndContext(e, t).then(n => n.value).catch(n => {
                    throw new Error("failed to get balance of account " + e.toBase58() + ": " + n)
                }
                )
            })
        }
        getBlockTime(e) {
            return A(this, null, function*() {
                let t = yield this._rpcRequest("getBlockTime", [e])
                  , n = L(t, X(x(g())));
                if ("error"in n)
                    throw new U(n.error,`failed to get block time for slot ${e}`);
                return n.result
            })
        }
        getMinimumLedgerSlot() {
            return A(this, null, function*() {
                let e = yield this._rpcRequest("minimumLedgerSlot", [])
                  , t = L(e, X(g()));
                if ("error"in t)
                    throw new U(t.error,"failed to get minimum ledger slot");
                return t.result
            })
        }
        getFirstAvailableBlock() {
            return A(this, null, function*() {
                let e = yield this._rpcRequest("getFirstAvailableBlock", [])
                  , t = L(e, sg);
                if ("error"in t)
                    throw new U(t.error,"failed to get first available block");
                return t.result
            })
        }
        getSupply(e) {
            return A(this, null, function*() {
                let t = {};
                typeof e == "string" ? t = {
                    commitment: e
                } : e ? t = H(K({}, e), {
                    commitment: e && e.commitment || this.commitment
                }) : t = {
                    commitment: this.commitment
                };
                let n = yield this._rpcRequest("getSupply", [t])
                  , s = L(n, og);
                if ("error"in s)
                    throw new U(s.error,"failed to get supply");
                return s.result
            })
        }
        getTokenSupply(e, t) {
            return A(this, null, function*() {
                let n = this._buildArgs([e.toBase58()], t)
                  , s = yield this._rpcRequest("getTokenSupply", n)
                  , o = L(s, we(_o));
                if ("error"in o)
                    throw new U(o.error,"failed to get token supply");
                return o.result
            })
        }
        getTokenAccountBalance(e, t) {
            return A(this, null, function*() {
                let n = this._buildArgs([e.toBase58()], t)
                  , s = yield this._rpcRequest("getTokenAccountBalance", n)
                  , o = L(s, we(_o));
                if ("error"in o)
                    throw new U(o.error,"failed to get token account balance");
                return o.result
            })
        }
        getTokenAccountsByOwner(e, t, n) {
            return A(this, null, function*() {
                let {commitment: s, config: o} = _e(n)
                  , i = [e.toBase58()];
                "mint"in t ? i.push({
                    mint: t.mint.toBase58()
                }) : i.push({
                    programId: t.programId.toBase58()
                });
                let c = this._buildArgs(i, s, "base64", o)
                  , a = yield this._rpcRequest("getTokenAccountsByOwner", c)
                  , d = L(a, ag);
                if ("error"in d)
                    throw new U(d.error,`failed to get token accounts owned by account ${e.toBase58()}`);
                return d.result
            })
        }
        getParsedTokenAccountsByOwner(e, t, n) {
            return A(this, null, function*() {
                let s = [e.toBase58()];
                "mint"in t ? s.push({
                    mint: t.mint.toBase58()
                }) : s.push({
                    programId: t.programId.toBase58()
                });
                let o = this._buildArgs(s, n, "jsonParsed")
                  , i = yield this._rpcRequest("getTokenAccountsByOwner", o)
                  , c = L(i, cg);
                if ("error"in c)
                    throw new U(c.error,`failed to get token accounts owned by account ${e.toBase58()}`);
                return c.result
            })
        }
        getLargestAccounts(e) {
            return A(this, null, function*() {
                let t = H(K({}, e), {
                    commitment: e && e.commitment || this.commitment
                })
                  , n = t.filter || t.commitment ? [t] : []
                  , s = yield this._rpcRequest("getLargestAccounts", n)
                  , o = L(s, ug);
                if ("error"in o)
                    throw new U(o.error,"failed to get largest accounts");
                return o.result
            })
        }
        getTokenLargestAccounts(e, t) {
            return A(this, null, function*() {
                let n = this._buildArgs([e.toBase58()], t)
                  , s = yield this._rpcRequest("getTokenLargestAccounts", n)
                  , o = L(s, ig);
                if ("error"in o)
                    throw new U(o.error,"failed to get token largest accounts");
                return o.result
            })
        }
        getAccountInfoAndContext(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = this._buildArgs([e.toBase58()], n, "base64", s)
                  , i = yield this._rpcRequest("getAccountInfo", o)
                  , c = L(i, we(x(Mn)));
                if ("error"in c)
                    throw new U(c.error,`failed to get info about account ${e.toBase58()}`);
                return c.result
            })
        }
        getParsedAccountInfo(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = this._buildArgs([e.toBase58()], n, "jsonParsed", s)
                  , i = yield this._rpcRequest("getAccountInfo", o)
                  , c = L(i, we(x(yo)));
                if ("error"in c)
                    throw new U(c.error,`failed to get info about account ${e.toBase58()}`);
                return c.result
            })
        }
        getAccountInfo(e, t) {
            return A(this, null, function*() {
                try {
                    return (yield this.getAccountInfoAndContext(e, t)).value
                } catch (n) {
                    throw new Error("failed to get info about account " + e.toBase58() + ": " + n)
                }
            })
        }
        getMultipleParsedAccounts(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = e.map(d => d.toBase58())
                  , i = this._buildArgs([o], n, "jsonParsed", s)
                  , c = yield this._rpcRequest("getMultipleAccounts", i)
                  , a = L(c, we(C(x(yo))));
                if ("error"in a)
                    throw new U(a.error,`failed to get info for accounts ${o}`);
                return a.result
            })
        }
        getMultipleAccountsInfoAndContext(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = e.map(d => d.toBase58())
                  , i = this._buildArgs([o], n, "base64", s)
                  , c = yield this._rpcRequest("getMultipleAccounts", i)
                  , a = L(c, we(C(x(Mn))));
                if ("error"in a)
                    throw new U(a.error,`failed to get info for accounts ${o}`);
                return a.result
            })
        }
        getMultipleAccountsInfo(e, t) {
            return A(this, null, function*() {
                return (yield this.getMultipleAccountsInfoAndContext(e, t)).value
            })
        }
        getStakeActivation(e, t, n) {
            return A(this, null, function*() {
                let {commitment: s, config: o} = _e(t)
                  , i = this._buildArgs([e.toBase58()], s, void 0, H(K({}, o), {
                    epoch: n ?? o?.epoch
                }))
                  , c = yield this._rpcRequest("getStakeActivation", i)
                  , a = L(c, X(hg));
                if ("error"in a)
                    throw new U(a.error,`failed to get Stake Activation ${e.toBase58()}`);
                return a.result
            })
        }
        getProgramAccounts(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , y = s || {}
                  , {encoding: o} = y
                  , i = Qe(y, ["encoding"])
                  , c = this._buildArgs([e.toBase58()], n, o || "base64", K(K({}, i), i.filters ? {
                    filters: La(i.filters)
                } : null))
                  , a = yield this._rpcRequest("getProgramAccounts", c)
                  , d = C(dg)
                  , f = i.withContext === !0 ? L(a, we(d)) : L(a, X(d));
                if ("error"in f)
                    throw new U(f.error,`failed to get accounts owned by program ${e.toBase58()}`);
                return f.result
            })
        }
        getParsedProgramAccounts(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = this._buildArgs([e.toBase58()], n, "jsonParsed", s)
                  , i = yield this._rpcRequest("getProgramAccounts", o)
                  , c = L(i, X(C(lg)));
                if ("error"in c)
                    throw new U(c.error,`failed to get accounts owned by program ${e.toBase58()}`);
                return c.result
            })
        }
        confirmTransaction(e, t) {
            return A(this, null, function*() {
                let n;
                if (typeof e == "string")
                    n = e;
                else {
                    let o = e;
                    if (o.abortSignal?.aborted)
                        return Promise.reject(o.abortSignal.reason);
                    n = o.signature
                }
                let s;
                try {
                    s = Te.default.decode(n)
                } catch {
                    throw new Error("signature must be base58 encoded: " + n)
                }
                return ie(s.length === 64, "signature has invalid length"),
                typeof e == "string" ? yield this.confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: t || this.commitment,
                    signature: n
                }) : "lastValidBlockHeight"in e ? yield this.confirmTransactionUsingBlockHeightExceedanceStrategy({
                    commitment: t || this.commitment,
                    strategy: e
                }) : yield this.confirmTransactionUsingDurableNonceStrategy({
                    commitment: t || this.commitment,
                    strategy: e
                })
            })
        }
        getCancellationPromise(e) {
            return new Promise( (t, n) => {
                e != null && (e.aborted ? n(e.reason) : e.addEventListener("abort", () => {
                    n(e.reason)
                }
                ))
            }
            )
        }
        getTransactionConfirmationPromise({commitment: e, signature: t}) {
            let n, s, o = !1, i = new Promise( (a, d) => {
                try {
                    n = this.onSignature(t, (y, h) => {
                        n = void 0;
                        let l = {
                            context: h,
                            value: y
                        };
                        a({
                            __type: mt.PROCESSED,
                            response: l
                        })
                    }
                    , e);
                    let f = new Promise(y => {
                        n == null ? y() : s = this._onSubscriptionStateChange(n, h => {
                            h === "subscribed" && y()
                        }
                        )
                    }
                    );
                    A(this, null, function*() {
                        if (yield f,
                        o)
                            return;
                        let y = yield this.getSignatureStatus(t);
                        if (o || y == null)
                            return;
                        let {context: h, value: l} = y;
                        if (l != null)
                            if (l?.err)
                                d(l.err);
                            else {
                                switch (e) {
                                case "confirmed":
                                case "single":
                                case "singleGossip":
                                    {
                                        if (l.confirmationStatus === "processed")
                                            return;
                                        break
                                    }
                                case "finalized":
                                case "max":
                                case "root":
                                    {
                                        if (l.confirmationStatus === "processed" || l.confirmationStatus === "confirmed")
                                            return;
                                        break
                                    }
                                case "processed":
                                case "recent":
                                }
                                o = !0,
                                a({
                                    __type: mt.PROCESSED,
                                    response: {
                                        context: h,
                                        value: l
                                    }
                                })
                            }
                    })
                } catch (f) {
                    d(f)
                }
            }
            );
            return {
                abortConfirmation: () => {
                    s && (s(),
                    s = void 0),
                    n != null && (this.removeSignatureListener(n),
                    n = void 0)
                }
                ,
                confirmationPromise: i
            }
        }
        confirmTransactionUsingBlockHeightExceedanceStrategy(o) {
            return A(this, arguments, function*({commitment: e, strategy: {abortSignal: t, lastValidBlockHeight: n, signature: s}}) {
                let i = !1, c = new Promise(h => {
                    let l = () => A(this, null, function*() {
                        try {
                            return yield this.getBlockHeight(e)
                        } catch {
                            return -1
                        }
                    });
                    A(this, null, function*() {
                        let _ = yield l();
                        if (!i) {
                            for (; _ <= n; )
                                if (yield Ft(1e3),
                                i || (_ = yield l(),
                                i))
                                    return;
                            h({
                                __type: mt.BLOCKHEIGHT_EXCEEDED
                            })
                        }
                    })
                }
                ), {abortConfirmation: a, confirmationPromise: d} = this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: s
                }), f = this.getCancellationPromise(t), y;
                try {
                    let h = yield Promise.race([f, d, c]);
                    if (h.__type === mt.PROCESSED)
                        y = h.response;
                    else
                        throw new Dn(s)
                } finally {
                    i = !0,
                    a()
                }
                return y
            })
        }
        confirmTransactionUsingDurableNonceStrategy(c) {
            return A(this, arguments, function*({commitment: e, strategy: {abortSignal: t, minContextSlot: n, nonceAccountPubkey: s, nonceValue: o, signature: i}}) {
                let a = !1, d = new Promise(_ => {
                    let m = o
                      , b = null
                      , R = () => A(this, null, function*() {
                        try {
                            let {context: T, value: N} = yield this.getNonceAndContext(s, {
                                commitment: e,
                                minContextSlot: n
                            });
                            return b = T.slot,
                            N?.nonce
                        } catch {
                            return m
                        }
                    });
                    A(this, null, function*() {
                        if (m = yield R(),
                        !a)
                            for (; ; ) {
                                if (o !== m) {
                                    _({
                                        __type: mt.NONCE_INVALID,
                                        slotInWhichNonceDidAdvance: b
                                    });
                                    return
                                }
                                if (yield Ft(2e3),
                                a || (m = yield R(),
                                a))
                                    return
                            }
                    })
                }
                ), {abortConfirmation: f, confirmationPromise: y} = this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: i
                }), h = this.getCancellationPromise(t), l;
                try {
                    let _ = yield Promise.race([h, y, d]);
                    if (_.__type === mt.PROCESSED)
                        l = _.response;
                    else {
                        let m;
                        for (; ; ) {
                            let b = yield this.getSignatureStatus(i);
                            if (b == null)
                                break;
                            if (b.context.slot < (_.slotInWhichNonceDidAdvance ?? n)) {
                                yield Ft(400);
                                continue
                            }
                            m = b;
                            break
                        }
                        if (m?.value) {
                            let b = e || "finalized"
                              , {confirmationStatus: R} = m.value;
                            switch (b) {
                            case "processed":
                            case "recent":
                                if (R !== "processed" && R !== "confirmed" && R !== "finalized")
                                    throw new Tt(i);
                                break;
                            case "confirmed":
                            case "single":
                            case "singleGossip":
                                if (R !== "confirmed" && R !== "finalized")
                                    throw new Tt(i);
                                break;
                            case "finalized":
                            case "max":
                            case "root":
                                if (R !== "finalized")
                                    throw new Tt(i);
                                break;
                            default:
                            }
                            l = {
                                context: m.context,
                                value: {
                                    err: m.value.err
                                }
                            }
                        } else
                            throw new Tt(i)
                    }
                } finally {
                    a = !0,
                    f()
                }
                return l
            })
        }
        confirmTransactionUsingLegacyTimeoutStrategy(n) {
            return A(this, arguments, function*({commitment: e, signature: t}) {
                let s, o = new Promise(d => {
                    let f = this._confirmTransactionInitialTimeout || 6e4;
                    switch (e) {
                    case "processed":
                    case "recent":
                    case "single":
                    case "confirmed":
                    case "singleGossip":
                        {
                            f = this._confirmTransactionInitialTimeout || 3e4;
                            break
                        }
                    }
                    s = setTimeout( () => d({
                        __type: mt.TIMED_OUT,
                        timeoutMs: f
                    }), f)
                }
                ), {abortConfirmation: i, confirmationPromise: c} = this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: t
                }), a;
                try {
                    let d = yield Promise.race([c, o]);
                    if (d.__type === mt.PROCESSED)
                        a = d.response;
                    else
                        throw new Un(t,d.timeoutMs / 1e3)
                } finally {
                    clearTimeout(s),
                    i()
                }
                return a
            })
        }
        getClusterNodes() {
            return A(this, null, function*() {
                let e = yield this._rpcRequest("getClusterNodes", [])
                  , t = L(e, X(C(Ig)));
                if ("error"in t)
                    throw new U(t.error,"failed to get cluster nodes");
                return t.result
            })
        }
        getVoteAccounts(e) {
            return A(this, null, function*() {
                let t = this._buildArgs([], e)
                  , n = yield this._rpcRequest("getVoteAccounts", t)
                  , s = L(n, Og);
                if ("error"in s)
                    throw new U(s.error,"failed to get vote accounts");
                return s.result
            })
        }
        getSlot(e) {
            return A(this, null, function*() {
                let {commitment: t, config: n} = _e(e)
                  , s = this._buildArgs([], t, void 0, n)
                  , o = yield this._rpcRequest("getSlot", s)
                  , i = L(o, X(g()));
                if ("error"in i)
                    throw new U(i.error,"failed to get slot");
                return i.result
            })
        }
        getSlotLeader(e) {
            return A(this, null, function*() {
                let {commitment: t, config: n} = _e(e)
                  , s = this._buildArgs([], t, void 0, n)
                  , o = yield this._rpcRequest("getSlotLeader", s)
                  , i = L(o, X(k()));
                if ("error"in i)
                    throw new U(i.error,"failed to get slot leader");
                return i.result
            })
        }
        getSlotLeaders(e, t) {
            return A(this, null, function*() {
                let n = [e, t]
                  , s = yield this._rpcRequest("getSlotLeaders", n)
                  , o = L(s, X(C(Re)));
                if ("error"in o)
                    throw new U(o.error,"failed to get slot leaders");
                return o.result
            })
        }
        getSignatureStatus(e, t) {
            return A(this, null, function*() {
                let {context: n, value: s} = yield this.getSignatureStatuses([e], t);
                ie(s.length === 1);
                let o = s[0];
                return {
                    context: n,
                    value: o
                }
            })
        }
        getSignatureStatuses(e, t) {
            return A(this, null, function*() {
                let n = [e];
                t && n.push(t);
                let s = yield this._rpcRequest("getSignatureStatuses", n)
                  , o = L(s, Tg);
                if ("error"in o)
                    throw new U(o.error,"failed to get signature status");
                return o.result
            })
        }
        getTransactionCount(e) {
            return A(this, null, function*() {
                let {commitment: t, config: n} = _e(e)
                  , s = this._buildArgs([], t, void 0, n)
                  , o = yield this._rpcRequest("getTransactionCount", s)
                  , i = L(o, X(g()));
                if ("error"in i)
                    throw new U(i.error,"failed to get transaction count");
                return i.result
            })
        }
        getTotalSupply(e) {
            return A(this, null, function*() {
                return (yield this.getSupply({
                    commitment: e,
                    excludeNonCirculatingAccountsList: !0
                })).value.total
            })
        }
        getInflationGovernor(e) {
            return A(this, null, function*() {
                let t = this._buildArgs([], e)
                  , n = yield this._rpcRequest("getInflationGovernor", t)
                  , s = L(n, J_);
                if ("error"in s)
                    throw new U(s.error,"failed to get inflation");
                return s.result
            })
        }
        getInflationReward(e, t, n) {
            return A(this, null, function*() {
                let {commitment: s, config: o} = _e(n)
                  , i = this._buildArgs([e.map(d => d.toBase58())], s, void 0, H(K({}, o), {
                    epoch: t ?? o?.epoch
                }))
                  , c = yield this._rpcRequest("getInflationReward", i)
                  , a = L(c, U_);
                if ("error"in a)
                    throw new U(a.error,"failed to get inflation reward");
                return a.result
            })
        }
        getInflationRate() {
            return A(this, null, function*() {
                let e = yield this._rpcRequest("getInflationRate", [])
                  , t = L(e, Q_);
                if ("error"in t)
                    throw new U(t.error,"failed to get inflation rate");
                return t.result
            })
        }
        getEpochInfo(e) {
            return A(this, null, function*() {
                let {commitment: t, config: n} = _e(e)
                  , s = this._buildArgs([], t, void 0, n)
                  , o = yield this._rpcRequest("getEpochInfo", s)
                  , i = L(o, tg);
                if ("error"in i)
                    throw new U(i.error,"failed to get epoch info");
                return i.result
            })
        }
        getEpochSchedule() {
            return A(this, null, function*() {
                let e = yield this._rpcRequest("getEpochSchedule", [])
                  , t = L(e, ng);
                if ("error"in t)
                    throw new U(t.error,"failed to get epoch schedule");
                let n = t.result;
                return new Mr(n.slotsPerEpoch,n.leaderScheduleSlotOffset,n.warmup,n.firstNormalEpoch,n.firstNormalSlot)
            })
        }
        getLeaderSchedule() {
            return A(this, null, function*() {
                let e = yield this._rpcRequest("getLeaderSchedule", [])
                  , t = L(e, rg);
                if ("error"in t)
                    throw new U(t.error,"failed to get leader schedule");
                return t.result
            })
        }
        getMinimumBalanceForRentExemption(e, t) {
            return A(this, null, function*() {
                let n = this._buildArgs([e], t)
                  , s = yield this._rpcRequest("getMinimumBalanceForRentExemption", n)
                  , o = L(s, vg);
                return "error"in o ? (console.warn("Unable to fetch minimum balance for rent exemption"),
                0) : o.result
            })
        }
        getRecentBlockhashAndContext(e) {
            return A(this, null, function*() {
                let {context: t, value: {blockhash: n}} = yield this.getLatestBlockhashAndContext(e);
                return {
                    context: t,
                    value: {
                        blockhash: n,
                        feeCalculator: {
                            get lamportsPerSignature() {
                                throw new Error("The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message.")
                            },
                            toJSON() {
                                return {}
                            }
                        }
                    }
                }
            })
        }
        getRecentPerformanceSamples(e) {
            return A(this, null, function*() {
                let t = yield this._rpcRequest("getRecentPerformanceSamples", e ? [e] : [])
                  , n = L(t, qg);
                if ("error"in n)
                    throw new U(n.error,"failed to get recent performance samples");
                return n.result
            })
        }
        getFeeCalculatorForBlockhash(e, t) {
            return A(this, null, function*() {
                let n = this._buildArgs([e], t)
                  , s = yield this._rpcRequest("getFeeCalculatorForBlockhash", n)
                  , o = L(s, $g);
                if ("error"in o)
                    throw new U(o.error,"failed to get fee calculator");
                let {context: i, value: c} = o.result;
                return {
                    context: i,
                    value: c !== null ? c.feeCalculator : null
                }
            })
        }
        getFeeForMessage(e, t) {
            return A(this, null, function*() {
                let n = Z(e.serialize()).toString("base64")
                  , s = this._buildArgs([n], t)
                  , o = yield this._rpcRequest("getFeeForMessage", s)
                  , i = L(o, we(x(g())));
                if ("error"in i)
                    throw new U(i.error,"failed to get fee for message");
                if (i.result === null)
                    throw new Error("invalid blockhash");
                return i.result
            })
        }
        getRecentPrioritizationFees(e) {
            return A(this, null, function*() {
                let t = e?.lockedWritableAccounts?.map(i => i.toBase58())
                  , n = t?.length ? [t] : []
                  , s = yield this._rpcRequest("getRecentPrioritizationFees", n)
                  , o = L(s, eg);
                if ("error"in o)
                    throw new U(o.error,"failed to get recent prioritization fees");
                return o.result
            })
        }
        getRecentBlockhash(e) {
            return A(this, null, function*() {
                try {
                    return (yield this.getRecentBlockhashAndContext(e)).value
                } catch (t) {
                    throw new Error("failed to get recent blockhash: " + t)
                }
            })
        }
        getLatestBlockhash(e) {
            return A(this, null, function*() {
                try {
                    return (yield this.getLatestBlockhashAndContext(e)).value
                } catch (t) {
                    throw new Error("failed to get recent blockhash: " + t)
                }
            })
        }
        getLatestBlockhashAndContext(e) {
            return A(this, null, function*() {
                let {commitment: t, config: n} = _e(e)
                  , s = this._buildArgs([], t, void 0, n)
                  , o = yield this._rpcRequest("getLatestBlockhash", s)
                  , i = L(o, Kg);
                if ("error"in i)
                    throw new U(i.error,"failed to get latest blockhash");
                return i.result
            })
        }
        isBlockhashValid(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = this._buildArgs([e], n, void 0, s)
                  , i = yield this._rpcRequest("isBlockhashValid", o)
                  , c = L(i, Fg);
                if ("error"in c)
                    throw new U(c.error,"failed to determine if the blockhash `" + e + "`is valid");
                return c.result
            })
        }
        getVersion() {
            return A(this, null, function*() {
                let e = yield this._rpcRequest("getVersion", [])
                  , t = L(e, X(W_));
                if ("error"in t)
                    throw new U(t.error,"failed to get version");
                return t.result
            })
        }
        getGenesisHash() {
            return A(this, null, function*() {
                let e = yield this._rpcRequest("getGenesisHash", [])
                  , t = L(e, X(k()));
                if ("error"in t)
                    throw new U(t.error,"failed to get genesis hash");
                return t.result
            })
        }
        getBlock(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = this._buildArgsAtLeastConfirmed([e], n, void 0, s)
                  , i = yield this._rpcRequest("getBlock", o);
                try {
                    switch (s?.transactionDetails) {
                    case "accounts":
                        {
                            let c = L(i, Pg);
                            if ("error"in c)
                                throw c.error;
                            return c.result
                        }
                    case "none":
                        {
                            let c = L(i, xg);
                            if ("error"in c)
                                throw c.error;
                            return c.result
                        }
                    default:
                        {
                            let c = L(i, Cg);
                            if ("error"in c)
                                throw c.error;
                            let {result: a} = c;
                            return a ? H(K({}, a), {
                                transactions: a.transactions.map( ({transaction: d, meta: f, version: y}) => ({
                                    meta: f,
                                    transaction: H(K({}, d), {
                                        message: Js(y, d.message)
                                    }),
                                    version: y
                                }))
                            }) : null
                        }
                    }
                } catch (c) {
                    throw new U(c,"failed to get confirmed block")
                }
            })
        }
        getParsedBlock(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s)
                  , i = yield this._rpcRequest("getBlock", o);
                try {
                    switch (s?.transactionDetails) {
                    case "accounts":
                        {
                            let c = L(i, Ug);
                            if ("error"in c)
                                throw c.error;
                            return c.result
                        }
                    case "none":
                        {
                            let c = L(i, zg);
                            if ("error"in c)
                                throw c.error;
                            return c.result
                        }
                    default:
                        {
                            let c = L(i, Dg);
                            if ("error"in c)
                                throw c.error;
                            return c.result
                        }
                    }
                } catch (c) {
                    throw new U(c,"failed to get block")
                }
            })
        }
        getBlockProduction(e) {
            return A(this, null, function*() {
                let t, n;
                if (typeof e == "string")
                    n = e;
                else if (e) {
                    let c = e
                      , {commitment: a} = c
                      , d = Qe(c, ["commitment"]);
                    n = a,
                    t = d
                }
                let s = this._buildArgs([], n, "base64", t)
                  , o = yield this._rpcRequest("getBlockProduction", s)
                  , i = L(o, j_);
                if ("error"in i)
                    throw new U(i.error,"failed to get block production information");
                return i.result
            })
        }
        getTransaction(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = this._buildArgsAtLeastConfirmed([e], n, void 0, s)
                  , i = yield this._rpcRequest("getTransaction", o)
                  , c = L(i, Qs);
                if ("error"in c)
                    throw new U(c.error,"failed to get transaction");
                let a = c.result;
                return a && H(K({}, a), {
                    transaction: H(K({}, a.transaction), {
                        message: Js(a.version, a.transaction.message)
                    })
                })
            })
        }
        getParsedTransaction(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s)
                  , i = yield this._rpcRequest("getTransaction", o)
                  , c = L(i, Cr);
                if ("error"in c)
                    throw new U(c.error,"failed to get transaction");
                return c.result
            })
        }
        getParsedTransactions(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = e.map(a => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([a], n, "jsonParsed", s)
                }));
                return (yield this._rpcBatchRequest(o)).map(a => {
                    let d = L(a, Cr);
                    if ("error"in d)
                        throw new U(d.error,"failed to get transactions");
                    return d.result
                }
                )
            })
        }
        getTransactions(e, t) {
            return A(this, null, function*() {
                let {commitment: n, config: s} = _e(t)
                  , o = e.map(a => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([a], n, void 0, s)
                }));
                return (yield this._rpcBatchRequest(o)).map(a => {
                    let d = L(a, Qs);
                    if ("error"in d)
                        throw new U(d.error,"failed to get transactions");
                    let f = d.result;
                    return f && H(K({}, f), {
                        transaction: H(K({}, f.transaction), {
                            message: Js(f.version, f.transaction.message)
                        })
                    })
                }
                )
            })
        }
        getConfirmedBlock(e, t) {
            return A(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([e], t)
                  , s = yield this._rpcRequest("getBlock", n)
                  , o = L(s, Mg);
                if ("error"in o)
                    throw new U(o.error,"failed to get confirmed block");
                let i = o.result;
                if (!i)
                    throw new Error("Confirmed block " + e + " not found");
                let c = H(K({}, i), {
                    transactions: i.transactions.map( ({transaction: a, meta: d}) => {
                        let f = new dt(a.message);
                        return {
                            meta: d,
                            transaction: H(K({}, a), {
                                message: f
                            })
                        }
                    }
                    )
                });
                return H(K({}, c), {
                    transactions: c.transactions.map( ({transaction: a, meta: d}) => ({
                        meta: d,
                        transaction: de.populate(a.message, a.signatures)
                    }))
                })
            })
        }
        getBlocks(e, t, n) {
            return A(this, null, function*() {
                let s = this._buildArgsAtLeastConfirmed(t !== void 0 ? [e, t] : [e], n)
                  , o = yield this._rpcRequest("getBlocks", s)
                  , i = L(o, X(C(g())));
                if ("error"in i)
                    throw new U(i.error,"failed to get blocks");
                return i.result
            })
        }
        getBlockSignatures(e, t) {
            return A(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                    transactionDetails: "signatures",
                    rewards: !1
                })
                  , s = yield this._rpcRequest("getBlock", n)
                  , o = L(s, xa);
                if ("error"in o)
                    throw new U(o.error,"failed to get block");
                let i = o.result;
                if (!i)
                    throw new Error("Block " + e + " not found");
                return i
            })
        }
        getConfirmedBlockSignatures(e, t) {
            return A(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                    transactionDetails: "signatures",
                    rewards: !1
                })
                  , s = yield this._rpcRequest("getBlock", n)
                  , o = L(s, xa);
                if ("error"in o)
                    throw new U(o.error,"failed to get confirmed block");
                let i = o.result;
                if (!i)
                    throw new Error("Confirmed block " + e + " not found");
                return i
            })
        }
        getConfirmedTransaction(e, t) {
            return A(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([e], t)
                  , s = yield this._rpcRequest("getTransaction", n)
                  , o = L(s, Qs);
                if ("error"in o)
                    throw new U(o.error,"failed to get transaction");
                let i = o.result;
                if (!i)
                    return i;
                let c = new dt(i.transaction.message)
                  , a = i.transaction.signatures;
                return H(K({}, i), {
                    transaction: de.populate(c, a)
                })
            })
        }
        getParsedConfirmedTransaction(e, t) {
            return A(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed")
                  , s = yield this._rpcRequest("getTransaction", n)
                  , o = L(s, Cr);
                if ("error"in o)
                    throw new U(o.error,"failed to get confirmed transaction");
                return o.result
            })
        }
        getParsedConfirmedTransactions(e, t) {
            return A(this, null, function*() {
                let n = e.map(i => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([i], t, "jsonParsed")
                }));
                return (yield this._rpcBatchRequest(n)).map(i => {
                    let c = L(i, Cr);
                    if ("error"in c)
                        throw new U(c.error,"failed to get confirmed transactions");
                    return c.result
                }
                )
            })
        }
        getConfirmedSignaturesForAddress(e, t, n) {
            return A(this, null, function*() {
                let s = {}
                  , o = yield this.getFirstAvailableBlock();
                for (; !("until"in s) && (t--,
                !(t <= 0 || t < o)); )
                    try {
                        let a = yield this.getConfirmedBlockSignatures(t, "finalized");
                        a.signatures.length > 0 && (s.until = a.signatures[a.signatures.length - 1].toString())
                    } catch (a) {
                        if (a instanceof Error && a.message.includes("skipped"))
                            continue;
                        throw a
                    }
                let i = yield this.getSlot("finalized");
                for (; !("before"in s) && (n++,
                !(n > i)); )
                    try {
                        let a = yield this.getConfirmedBlockSignatures(n);
                        a.signatures.length > 0 && (s.before = a.signatures[a.signatures.length - 1].toString())
                    } catch (a) {
                        if (a instanceof Error && a.message.includes("skipped"))
                            continue;
                        throw a
                    }
                return (yield this.getConfirmedSignaturesForAddress2(e, s)).map(a => a.signature)
            })
        }
        getConfirmedSignaturesForAddress2(e, t, n) {
            return A(this, null, function*() {
                let s = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t)
                  , o = yield this._rpcRequest("getConfirmedSignaturesForAddress2", s)
                  , i = L(o, _g);
                if ("error"in i)
                    throw new U(i.error,"failed to get confirmed signatures for address");
                return i.result
            })
        }
        getSignaturesForAddress(e, t, n) {
            return A(this, null, function*() {
                let s = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t)
                  , o = yield this._rpcRequest("getSignaturesForAddress", s)
                  , i = L(o, gg);
                if ("error"in i)
                    throw new U(i.error,"failed to get signatures for address");
                return i.result
            })
        }
        getAddressLookupTable(e, t) {
            return A(this, null, function*() {
                let {context: n, value: s} = yield this.getAccountInfoAndContext(e, t)
                  , o = null;
                return s !== null && (o = new zn({
                    key: e,
                    state: zn.deserialize(s.data)
                })),
                {
                    context: n,
                    value: o
                }
            })
        }
        getNonceAndContext(e, t) {
            return A(this, null, function*() {
                let {context: n, value: s} = yield this.getAccountInfoAndContext(e, t)
                  , o = null;
                return s !== null && (o = zr.fromAccountData(s.data)),
                {
                    context: n,
                    value: o
                }
            })
        }
        getNonce(e, t) {
            return A(this, null, function*() {
                return yield this.getNonceAndContext(e, t).then(n => n.value).catch(n => {
                    throw new Error("failed to get nonce for account " + e.toBase58() + ": " + n)
                }
                )
            })
        }
        requestAirdrop(e, t) {
            return A(this, null, function*() {
                let n = yield this._rpcRequest("requestAirdrop", [e.toBase58(), t])
                  , s = L(n, Wg);
                if ("error"in s)
                    throw new U(s.error,`airdrop to ${e.toBase58()} failed`);
                return s.result
            })
        }
        _blockhashWithExpiryBlockHeight(e) {
            return A(this, null, function*() {
                if (!e) {
                    for (; this._pollingBlockhash; )
                        yield Ft(100);
                    let n = Date.now() - this._blockhashInfo.lastFetch >= Qa;
                    if (this._blockhashInfo.latestBlockhash !== null && !n)
                        return this._blockhashInfo.latestBlockhash
                }
                return yield this._pollNewBlockhash()
            })
        }
        _pollNewBlockhash() {
            return A(this, null, function*() {
                this._pollingBlockhash = !0;
                try {
                    let e = Date.now()
                      , t = this._blockhashInfo.latestBlockhash
                      , n = t ? t.blockhash : null;
                    for (let s = 0; s < 50; s++) {
                        let o = yield this.getLatestBlockhash("finalized");
                        if (n !== o.blockhash)
                            return this._blockhashInfo = {
                                latestBlockhash: o,
                                lastFetch: Date.now(),
                                transactionSignatures: [],
                                simulatedSignatures: []
                            },
                            o;
                        yield Ft(Ya / 2)
                    }
                    throw new Error(`Unable to obtain a new blockhash after ${Date.now() - e}ms`)
                } finally {
                    this._pollingBlockhash = !1
                }
            })
        }
        getStakeMinimumDelegation(e) {
            return A(this, null, function*() {
                let {commitment: t, config: n} = _e(e)
                  , s = this._buildArgs([], t, "base64", n)
                  , o = yield this._rpcRequest("getStakeMinimumDelegation", s)
                  , i = L(o, we(g()));
                if ("error"in i)
                    throw new U(i.error,"failed to get stake minimum delegation");
                return i.result
            })
        }
        simulateTransaction(e, t, n) {
            return A(this, null, function*() {
                if ("message"in e) {
                    let m = e.serialize()
                      , b = W.Buffer.from(m).toString("base64");
                    if (Array.isArray(t) || n !== void 0)
                        throw new Error("Invalid arguments");
                    let R = t || {};
                    R.encoding = "base64",
                    "commitment"in R || (R.commitment = this.commitment),
                    t && typeof t == "object" && "innerInstructions"in t && (R.innerInstructions = t.innerInstructions);
                    let T = [b, R]
                      , N = yield this._rpcRequest("simulateTransaction", T)
                      , D = L(N, Ba);
                    if ("error"in D)
                        throw new Error("failed to simulate transaction: " + D.error.message);
                    return D.result
                }
                let s;
                if (e instanceof de) {
                    let _ = e;
                    s = new de,
                    s.feePayer = _.feePayer,
                    s.instructions = e.instructions,
                    s.nonceInfo = _.nonceInfo,
                    s.signatures = _.signatures
                } else
                    s = de.populate(e),
                    s._message = s._json = void 0;
                if (t !== void 0 && !Array.isArray(t))
                    throw new Error("Invalid arguments");
                let o = t;
                if (s.nonceInfo && o)
                    s.sign(...o);
                else {
                    let _ = this._disableBlockhashCaching;
                    for (; ; ) {
                        let m = yield this._blockhashWithExpiryBlockHeight(_);
                        if (s.lastValidBlockHeight = m.lastValidBlockHeight,
                        s.recentBlockhash = m.blockhash,
                        !o)
                            break;
                        if (s.sign(...o),
                        !s.signature)
                            throw new Error("!signature");
                        let b = s.signature.toString("base64");
                        if (!this._blockhashInfo.simulatedSignatures.includes(b) && !this._blockhashInfo.transactionSignatures.includes(b)) {
                            this._blockhashInfo.simulatedSignatures.push(b);
                            break
                        } else
                            _ = !0
                    }
                }
                let i = s._compile()
                  , c = i.serialize()
                  , d = s._serialize(c).toString("base64")
                  , f = {
                    encoding: "base64",
                    commitment: this.commitment
                };
                if (n) {
                    let _ = (Array.isArray(n) ? n : i.nonProgramIds()).map(m => m.toBase58());
                    f.accounts = {
                        encoding: "base64",
                        addresses: _
                    }
                }
                o && (f.sigVerify = !0),
                t && typeof t == "object" && "innerInstructions"in t && (f.innerInstructions = t.innerInstructions);
                let y = [d, f]
                  , h = yield this._rpcRequest("simulateTransaction", y)
                  , l = L(h, Ba);
                if ("error"in l) {
                    let _;
                    if ("data"in l.error && (_ = l.error.data.logs,
                    _ && Array.isArray(_))) {
                        let m = `
    `
                          , b = m + _.join(m);
                        console.error(l.error.message, b)
                    }
                    throw new $t({
                        action: "simulate",
                        signature: "",
                        transactionMessage: l.error.message,
                        logs: _
                    })
                }
                return l.result
            })
        }
        sendTransaction(e, t, n) {
            return A(this, null, function*() {
                if ("version"in e) {
                    if (t && Array.isArray(t))
                        throw new Error("Invalid arguments");
                    let i = e.serialize();
                    return yield this.sendRawTransaction(i, t)
                }
                if (t === void 0 || !Array.isArray(t))
                    throw new Error("Invalid arguments");
                let s = t;
                if (e.nonceInfo)
                    e.sign(...s);
                else {
                    let i = this._disableBlockhashCaching;
                    for (; ; ) {
                        let c = yield this._blockhashWithExpiryBlockHeight(i);
                        if (e.lastValidBlockHeight = c.lastValidBlockHeight,
                        e.recentBlockhash = c.blockhash,
                        e.sign(...s),
                        !e.signature)
                            throw new Error("!signature");
                        let a = e.signature.toString("base64");
                        if (this._blockhashInfo.transactionSignatures.includes(a))
                            i = !0;
                        else {
                            this._blockhashInfo.transactionSignatures.push(a);
                            break
                        }
                    }
                }
                let o = e.serialize();
                return yield this.sendRawTransaction(o, n)
            })
        }
        sendRawTransaction(e, t) {
            return A(this, null, function*() {
                let n = Z(e).toString("base64");
                return yield this.sendEncodedTransaction(n, t)
            })
        }
        sendEncodedTransaction(e, t) {
            return A(this, null, function*() {
                let n = {
                    encoding: "base64"
                }
                  , s = t && t.skipPreflight
                  , o = s === !0 ? "processed" : t && t.preflightCommitment || this.commitment;
                t && t.maxRetries != null && (n.maxRetries = t.maxRetries),
                t && t.minContextSlot != null && (n.minContextSlot = t.minContextSlot),
                s && (n.skipPreflight = s),
                o && (n.preflightCommitment = o);
                let i = [e, n]
                  , c = yield this._rpcRequest("sendTransaction", i)
                  , a = L(c, Gg);
                if ("error"in a) {
                    let d;
                    throw "data"in a.error && (d = a.error.data.logs),
                    new $t({
                        action: s ? "send" : "simulate",
                        signature: "",
                        transactionMessage: a.error.message,
                        logs: d
                    })
                }
                return a.result
            })
        }
        _wsOnOpen() {
            this._rpcWebSocketConnected = !0,
            this._rpcWebSocketHeartbeat = setInterval( () => {
                A(this, null, function*() {
                    try {
                        yield this._rpcWebSocket.notify("ping")
                    } catch {}
                })
            }
            , 5e3),
            this._updateSubscriptions()
        }
        _wsOnError(e) {
            this._rpcWebSocketConnected = !1,
            console.error("ws error:", e.message)
        }
        _wsOnClose(e) {
            if (this._rpcWebSocketConnected = !1,
            this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER,
            this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout),
            this._rpcWebSocketIdleTimeout = null),
            this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat),
            this._rpcWebSocketHeartbeat = null),
            e === 1e3) {
                this._updateSubscriptions();
                return
            }
            this._subscriptionCallbacksByServerSubscriptionId = {},
            Object.entries(this._subscriptionsByHash).forEach( ([t,n]) => {
                this._setSubscription(t, H(K({}, n), {
                    state: "pending"
                }))
            }
            )
        }
        _setSubscription(e, t) {
            let n = this._subscriptionsByHash[e]?.state;
            if (this._subscriptionsByHash[e] = t,
            n !== t.state) {
                let s = this._subscriptionStateChangeCallbacksByHash[e];
                s && s.forEach(o => {
                    try {
                        o(t.state)
                    } catch {}
                }
                )
            }
        }
        _onSubscriptionStateChange(e, t) {
            let n = this._subscriptionHashByClientSubscriptionId[e];
            if (n == null)
                return () => {}
                ;
            let s = this._subscriptionStateChangeCallbacksByHash[n] ||= new Set;
            return s.add(t),
            () => {
                s.delete(t),
                s.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[n]
            }
        }
        _updateSubscriptions() {
            return A(this, null, function*() {
                if (Object.keys(this._subscriptionsByHash).length === 0) {
                    this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1,
                    this._rpcWebSocketIdleTimeout = setTimeout( () => {
                        this._rpcWebSocketIdleTimeout = null;
                        try {
                            this._rpcWebSocket.close()
                        } catch (n) {
                            n instanceof Error && console.log(`Error when closing socket connection: ${n.message}`)
                        }
                    }
                    , 500));
                    return
                }
                if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout),
                this._rpcWebSocketIdleTimeout = null,
                this._rpcWebSocketConnected = !0),
                !this._rpcWebSocketConnected) {
                    this._rpcWebSocket.connect();
                    return
                }
                let e = this._rpcWebSocketGeneration
                  , t = () => e === this._rpcWebSocketGeneration;
                yield Promise.all(Object.keys(this._subscriptionsByHash).map(n => A(this, null, function*() {
                    let s = this._subscriptionsByHash[n];
                    if (s !== void 0)
                        switch (s.state) {
                        case "pending":
                        case "unsubscribed":
                            if (s.callbacks.size === 0) {
                                delete this._subscriptionsByHash[n],
                                s.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[s.serverSubscriptionId],
                                yield this._updateSubscriptions();
                                return
                            }
                            yield A(this, null, function*() {
                                let {args: o, method: i} = s;
                                try {
                                    this._setSubscription(n, H(K({}, s), {
                                        state: "subscribing"
                                    }));
                                    let c = yield this._rpcWebSocket.call(i, o);
                                    this._setSubscription(n, H(K({}, s), {
                                        serverSubscriptionId: c,
                                        state: "subscribed"
                                    })),
                                    this._subscriptionCallbacksByServerSubscriptionId[c] = s.callbacks,
                                    yield this._updateSubscriptions()
                                } catch (c) {
                                    if (console.error(`Received ${cinstanceof Error ? "" : "JSON-RPC "}error calling \`${i}\``, {
                                        args: o,
                                        error: c
                                    }),
                                    !t())
                                        return;
                                    this._setSubscription(n, H(K({}, s), {
                                        state: "pending"
                                    })),
                                    yield this._updateSubscriptions()
                                }
                            });
                            break;
                        case "subscribed":
                            s.callbacks.size === 0 && (yield A(this, null, function*() {
                                let {serverSubscriptionId: o, unsubscribeMethod: i} = s;
                                if (this._subscriptionsAutoDisposedByRpc.has(o))
                                    this._subscriptionsAutoDisposedByRpc.delete(o);
                                else {
                                    this._setSubscription(n, H(K({}, s), {
                                        state: "unsubscribing"
                                    })),
                                    this._setSubscription(n, H(K({}, s), {
                                        state: "unsubscribing"
                                    }));
                                    try {
                                        yield this._rpcWebSocket.call(i, [o])
                                    } catch (c) {
                                        if (c instanceof Error && console.error(`${i} error:`, c.message),
                                        !t())
                                            return;
                                        this._setSubscription(n, H(K({}, s), {
                                            state: "subscribed"
                                        })),
                                        yield this._updateSubscriptions();
                                        return
                                    }
                                }
                                this._setSubscription(n, H(K({}, s), {
                                    state: "unsubscribed"
                                })),
                                yield this._updateSubscriptions()
                            }));
                            break
                        }
                })))
            })
        }
        _handleServerNotification(e, t) {
            let n = this._subscriptionCallbacksByServerSubscriptionId[e];
            n !== void 0 && n.forEach(s => {
                try {
                    s(...t)
                } catch (o) {
                    console.error(o)
                }
            }
            )
        }
        _wsOnAccountNotification(e) {
            let {result: t, subscription: n} = L(e, yg);
            this._handleServerNotification(n, [t.value, t.context])
        }
        _makeSubscription(e, t) {
            let n = this._nextClientSubscriptionId++
              , s = Ta([e.method, t])
              , o = this._subscriptionsByHash[s];
            return o === void 0 ? this._subscriptionsByHash[s] = H(K({}, e), {
                args: t,
                callbacks: new Set([e.callback]),
                state: "pending"
            }) : o.callbacks.add(e.callback),
            this._subscriptionHashByClientSubscriptionId[n] = s,
            this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = () => A(this, null, function*() {
                delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n],
                delete this._subscriptionHashByClientSubscriptionId[n];
                let i = this._subscriptionsByHash[s];
                ie(i !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${n}`),
                i.callbacks.delete(e.callback),
                yield this._updateSubscriptions()
            }),
            this._updateSubscriptions(),
            n
        }
        onAccountChange(e, t, n) {
            let {commitment: s, config: o} = _e(n)
              , i = this._buildArgs([e.toBase58()], s || this._commitment || "finalized", "base64", o);
            return this._makeSubscription({
                callback: t,
                method: "accountSubscribe",
                unsubscribeMethod: "accountUnsubscribe"
            }, i)
        }
        removeAccountChangeListener(e) {
            return A(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "account change")
            })
        }
        _wsOnProgramAccountNotification(e) {
            let {result: t, subscription: n} = L(e, mg);
            this._handleServerNotification(n, [{
                accountId: t.value.pubkey,
                accountInfo: t.value.account
            }, t.context])
        }
        onProgramAccountChange(e, t, n, s) {
            let {commitment: o, config: i} = _e(n)
              , c = this._buildArgs([e.toBase58()], o || this._commitment || "finalized", "base64", i || (s ? {
                filters: La(s)
            } : void 0));
            return this._makeSubscription({
                callback: t,
                method: "programSubscribe",
                unsubscribeMethod: "programUnsubscribe"
            }, c)
        }
        removeProgramAccountChangeListener(e) {
            return A(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "program account change")
            })
        }
        onLogs(e, t, n) {
            let s = this._buildArgs([typeof e == "object" ? {
                mentions: [e.toString()]
            } : e], n || this._commitment || "finalized");
            return this._makeSubscription({
                callback: t,
                method: "logsSubscribe",
                unsubscribeMethod: "logsUnsubscribe"
            }, s)
        }
        removeOnLogsListener(e) {
            return A(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "logs")
            })
        }
        _wsOnLogsNotification(e) {
            let {result: t, subscription: n} = L(e, jg);
            this._handleServerNotification(n, [t.value, t.context])
        }
        _wsOnSlotNotification(e) {
            let {result: t, subscription: n} = L(e, bg);
            this._handleServerNotification(n, [t])
        }
        onSlotChange(e) {
            return this._makeSubscription({
                callback: e,
                method: "slotSubscribe",
                unsubscribeMethod: "slotUnsubscribe"
            }, [])
        }
        removeSlotChangeListener(e) {
            return A(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "slot change")
            })
        }
        _wsOnSlotUpdatesNotification(e) {
            let {result: t, subscription: n} = L(e, Sg);
            this._handleServerNotification(n, [t])
        }
        onSlotUpdate(e) {
            return this._makeSubscription({
                callback: e,
                method: "slotsUpdatesSubscribe",
                unsubscribeMethod: "slotsUpdatesUnsubscribe"
            }, [])
        }
        removeSlotUpdateListener(e) {
            return A(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "slot update")
            })
        }
        _unsubscribeClientSubscription(e, t) {
            return A(this, null, function*() {
                let n = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
                n ? yield n() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`)
            })
        }
        _buildArgs(e, t, n, s) {
            let o = t || this._commitment;
            if (o || n || s) {
                let i = {};
                n && (i.encoding = n),
                o && (i.commitment = o),
                s && (i = Object.assign(i, s)),
                e.push(i)
            }
            return e
        }
        _buildArgsAtLeastConfirmed(e, t, n, s) {
            let o = t || this._commitment;
            if (o && !["confirmed", "finalized"].includes(o))
                throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
            return this._buildArgs(e, t, n, s)
        }
        _wsOnSignatureNotification(e) {
            let {result: t, subscription: n} = L(e, Ag);
            t.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(n),
            this._handleServerNotification(n, t.value === "receivedSignature" ? [{
                type: "received"
            }, t.context] : [{
                type: "status",
                result: t.value
            }, t.context])
        }
        onSignature(e, t, n) {
            let s = this._buildArgs([e], n || this._commitment || "finalized")
              , o = this._makeSubscription({
                callback: (i, c) => {
                    if (i.type === "status") {
                        t(i.result, c);
                        try {
                            this.removeSignatureListener(o)
                        } catch {}
                    }
                }
                ,
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe"
            }, s);
            return o
        }
        onSignatureWithOptions(e, t, n) {
            let a = H(K({}, n), {
                commitment: n && n.commitment || this._commitment || "finalized"
            })
              , {commitment: s} = a
              , o = Qe(a, ["commitment"])
              , i = this._buildArgs([e], s, void 0, o)
              , c = this._makeSubscription({
                callback: (d, f) => {
                    t(d, f);
                    try {
                        this.removeSignatureListener(c)
                    } catch {}
                }
                ,
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe"
            }, i);
            return c
        }
        removeSignatureListener(e) {
            return A(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "signature result")
            })
        }
        _wsOnRootNotification(e) {
            let {result: t, subscription: n} = L(e, wg);
            this._handleServerNotification(n, [t])
        }
        onRootChange(e) {
            return this._makeSubscription({
                callback: e,
                method: "rootSubscribe",
                unsubscribeMethod: "rootUnsubscribe"
            }, [])
        }
        removeRootChangeListener(e) {
            return A(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "root change")
            })
        }
    }
    ,
    Fr = class r {
        constructor(e) {
            this._keypair = void 0,
            this._keypair = e ?? Ia()
        }
        static generate() {
            return new r(Ia())
        }
        static fromSecretKey(e, t) {
            if (e.byteLength !== 64)
                throw new Error("bad secret key size");
            let n = e.slice(32, 64);
            if (!t || !t.skipValidation) {
                let s = e.slice(0, 32)
                  , o = Dr(s);
                for (let i = 0; i < 32; i++)
                    if (n[i] !== o[i])
                        throw new Error("provided secretKey is invalid")
            }
            return new r({
                publicKey: n,
                secretKey: e
            })
        }
        static fromSeed(e) {
            let t = Dr(e)
              , n = new Uint8Array(64);
            return n.set(e),
            n.set(t, 32),
            new r({
                publicKey: t,
                secretKey: n
            })
        }
        get publicKey() {
            return new B(this._keypair.publicKey)
        }
        get secretKey() {
            return new Uint8Array(this._keypair.secretKey)
        }
    }
    ,
    Rt = Object.freeze({
        CreateLookupTable: {
            index: 0,
            layout: u.struct([u.u32("instruction"), dn("recentSlot"), u.u8("bumpSeed")])
        },
        FreezeLookupTable: {
            index: 1,
            layout: u.struct([u.u32("instruction")])
        },
        ExtendLookupTable: {
            index: 2,
            layout: u.struct([u.u32("instruction"), dn(), u.seq(Q(), u.offset(u.u32(), -8), "addresses")])
        },
        DeactivateLookupTable: {
            index: 3,
            layout: u.struct([u.u32("instruction")])
        },
        CloseLookupTable: {
            index: 4,
            layout: u.struct([u.u32("instruction")])
        }
    }),
    mo = class {
        constructor() {}
        static decodeInstructionType(e) {
            this.checkProgramId(e.programId);
            let n = u.u32("instruction").decode(e.data), s;
            for (let[o,i] of Object.entries(Rt))
                if (i.index == n) {
                    s = o;
                    break
                }
            if (!s)
                throw new Error("Invalid Instruction. Should be a LookupTable Instruction");
            return s
        }
        static decodeCreateLookupTable(e) {
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 4);
            let {recentSlot: t} = ue(Rt.CreateLookupTable, e.data);
            return {
                authority: e.keys[1].pubkey,
                payer: e.keys[2].pubkey,
                recentSlot: Number(t)
            }
        }
        static decodeExtendLookupTable(e) {
            if (this.checkProgramId(e.programId),
            e.keys.length < 2)
                throw new Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);
            let {addresses: t} = ue(Rt.ExtendLookupTable, e.data);
            return {
                lookupTable: e.keys[0].pubkey,
                authority: e.keys[1].pubkey,
                payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
                addresses: t.map(n => new B(n))
            }
        }
        static decodeCloseLookupTable(e) {
            return this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 3),
            {
                lookupTable: e.keys[0].pubkey,
                authority: e.keys[1].pubkey,
                recipient: e.keys[2].pubkey
            }
        }
        static decodeFreezeLookupTable(e) {
            return this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            {
                lookupTable: e.keys[0].pubkey,
                authority: e.keys[1].pubkey
            }
        }
        static decodeDeactivateLookupTable(e) {
            return this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            {
                lookupTable: e.keys[0].pubkey,
                authority: e.keys[1].pubkey
            }
        }
        static checkProgramId(e) {
            if (!e.equals(Kn.programId))
                throw new Error("invalid instruction; programId is not AddressLookupTable Program")
        }
        static checkKeysLength(e, t) {
            if (e.length < t)
                throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
        }
    }
    ,
    Kn = class {
        constructor() {}
        static createLookupTable(e) {
            let[t,n] = B.findProgramAddressSync([e.authority.toBuffer(), vs().encode(e.recentSlot)], this.programId)
              , s = Rt.CreateLookupTable
              , o = re(s, {
                recentSlot: BigInt(e.recentSlot),
                bumpSeed: n
            })
              , i = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: e.payer,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: Be.programId,
                isSigner: !1,
                isWritable: !1
            }];
            return [new fe({
                programId: this.programId,
                keys: i,
                data: o
            }), t]
        }
        static freezeLookupTable(e) {
            let t = Rt.FreezeLookupTable
              , n = re(t)
              , s = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }];
            return new fe({
                programId: this.programId,
                keys: s,
                data: n
            })
        }
        static extendLookupTable(e) {
            let t = Rt.ExtendLookupTable
              , n = re(t, {
                addresses: e.addresses.map(o => o.toBytes())
            })
              , s = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }];
            return e.payer && s.push({
                pubkey: e.payer,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: Be.programId,
                isSigner: !1,
                isWritable: !1
            }),
            new fe({
                programId: this.programId,
                keys: s,
                data: n
            })
        }
        static deactivateLookupTable(e) {
            let t = Rt.DeactivateLookupTable
              , n = re(t)
              , s = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }];
            return new fe({
                programId: this.programId,
                keys: s,
                data: n
            })
        }
        static closeLookupTable(e) {
            let t = Rt.CloseLookupTable
              , n = re(t)
              , s = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: e.recipient,
                isSigner: !1,
                isWritable: !0
            }];
            return new fe({
                programId: this.programId,
                keys: s,
                data: n
            })
        }
    }
    ;
    Kn.programId = new B("AddressLookupTab1e1111111111111111111111111");
    Ro = class {
        constructor() {}
        static decodeInstructionType(e) {
            this.checkProgramId(e.programId);
            let n = u.u8("instruction").decode(e.data), s;
            for (let[o,i] of Object.entries(at))
                if (i.index == n) {
                    s = o;
                    break
                }
            if (!s)
                throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");
            return s
        }
        static decodeRequestUnits(e) {
            this.checkProgramId(e.programId);
            let {units: t, additionalFee: n} = ue(at.RequestUnits, e.data);
            return {
                units: t,
                additionalFee: n
            }
        }
        static decodeRequestHeapFrame(e) {
            this.checkProgramId(e.programId);
            let {bytes: t} = ue(at.RequestHeapFrame, e.data);
            return {
                bytes: t
            }
        }
        static decodeSetComputeUnitLimit(e) {
            this.checkProgramId(e.programId);
            let {units: t} = ue(at.SetComputeUnitLimit, e.data);
            return {
                units: t
            }
        }
        static decodeSetComputeUnitPrice(e) {
            this.checkProgramId(e.programId);
            let {microLamports: t} = ue(at.SetComputeUnitPrice, e.data);
            return {
                microLamports: t
            }
        }
        static checkProgramId(e) {
            if (!e.equals(Fn.programId))
                throw new Error("invalid instruction; programId is not ComputeBudgetProgram")
        }
    }
    ,
    at = Object.freeze({
        RequestUnits: {
            index: 0,
            layout: u.struct([u.u8("instruction"), u.u32("units"), u.u32("additionalFee")])
        },
        RequestHeapFrame: {
            index: 1,
            layout: u.struct([u.u8("instruction"), u.u32("bytes")])
        },
        SetComputeUnitLimit: {
            index: 2,
            layout: u.struct([u.u8("instruction"), u.u32("units")])
        },
        SetComputeUnitPrice: {
            index: 3,
            layout: u.struct([u.u8("instruction"), dn("microLamports")])
        }
    }),
    Fn = class {
        constructor() {}
        static requestUnits(e) {
            let t = at.RequestUnits
              , n = re(t, e);
            return new fe({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
        static requestHeapFrame(e) {
            let t = at.RequestHeapFrame
              , n = re(t, e);
            return new fe({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
        static setComputeUnitLimit(e) {
            let t = at.SetComputeUnitLimit
              , n = re(t, e);
            return new fe({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
        static setComputeUnitPrice(e) {
            let t = at.SetComputeUnitPrice
              , n = re(t, {
                microLamports: BigInt(e.microLamports)
            });
            return new fe({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
    }
    ;
    Fn.programId = new B("ComputeBudget111111111111111111111111111111");
    Pa = 64,
    Da = 32,
    Ua = 64,
    za = u.struct([u.u8("numSignatures"), u.u8("padding"), u.u16("signatureOffset"), u.u16("signatureInstructionIndex"), u.u16("publicKeyOffset"), u.u16("publicKeyInstructionIndex"), u.u16("messageDataOffset"), u.u16("messageDataSize"), u.u16("messageInstructionIndex")]),
    Vr = class r {
        constructor() {}
        static createInstructionWithPublicKey(e) {
            let {publicKey: t, message: n, signature: s, instructionIndex: o} = e;
            ie(t.length === Da, `Public Key must be ${Da} bytes but received ${t.length} bytes`),
            ie(s.length === Ua, `Signature must be ${Ua} bytes but received ${s.length} bytes`);
            let i = za.span
              , c = i + t.length
              , a = c + s.length
              , d = 1
              , f = W.Buffer.alloc(a + n.length)
              , y = o ?? 65535;
            return za.encode({
                numSignatures: d,
                padding: 0,
                signatureOffset: c,
                signatureInstructionIndex: y,
                publicKeyOffset: i,
                publicKeyInstructionIndex: y,
                messageDataOffset: a,
                messageDataSize: n.length,
                messageInstructionIndex: y
            }, f),
            f.fill(t, i),
            f.fill(s, c),
            f.fill(n, a),
            new fe({
                keys: [],
                programId: r.programId,
                data: f
            })
        }
        static createInstructionWithPrivateKey(e) {
            let {privateKey: t, message: n, instructionIndex: s} = e;
            ie(t.length === Pa, `Private key must be ${Pa} bytes but received ${t.length} bytes`);
            try {
                let o = Fr.fromSecretKey(t)
                  , i = o.publicKey.toBytes()
                  , c = wo(n, o.secretKey);
                return this.createInstructionWithPublicKey({
                    publicKey: i,
                    message: n,
                    signature: c,
                    instructionIndex: s
                })
            } catch (o) {
                throw new Error(`Error creating instruction; ${o}`)
            }
        }
    }
    ;
    Vr.programId = new B("Ed25519SigVerify111111111111111111111111111");
    Xg = (r, e) => {
        let t = Br.sign(r, e);
        return [t.toCompactRawBytes(), t.recovery]
    }
    ;
    Br.utils.isValidPrivateKey;
    Zg = Br.getPublicKey,
    Ma = 32,
    eo = 20,
    Ka = 64,
    Jg = 11,
    to = u.struct([u.u8("numSignatures"), u.u16("signatureOffset"), u.u8("signatureInstructionIndex"), u.u16("ethAddressOffset"), u.u8("ethAddressInstructionIndex"), u.u16("messageDataOffset"), u.u16("messageDataSize"), u.u8("messageInstructionIndex"), u.blob(20, "ethAddress"), u.blob(64, "signature"), u.u8("recoveryId")]),
    qr = class r {
        constructor() {}
        static publicKeyToEthAddress(e) {
            ie(e.length === Ka, `Public key must be ${Ka} bytes but received ${e.length} bytes`);
            try {
                return W.Buffer.from(rs(Z(e))).slice(-eo)
            } catch (t) {
                throw new Error(`Error constructing Ethereum address: ${t}`)
            }
        }
        static createInstructionWithPublicKey(e) {
            let {publicKey: t, message: n, signature: s, recoveryId: o, instructionIndex: i} = e;
            return r.createInstructionWithEthAddress({
                ethAddress: r.publicKeyToEthAddress(t),
                message: n,
                signature: s,
                recoveryId: o,
                instructionIndex: i
            })
        }
        static createInstructionWithEthAddress(e) {
            let {ethAddress: t, message: n, signature: s, recoveryId: o, instructionIndex: i=0} = e, c;
            typeof t == "string" ? t.startsWith("0x") ? c = W.Buffer.from(t.substr(2), "hex") : c = W.Buffer.from(t, "hex") : c = t,
            ie(c.length === eo, `Address must be ${eo} bytes but received ${c.length} bytes`);
            let a = 1 + Jg
              , d = a
              , f = a + c.length
              , y = f + s.length + 1
              , h = 1
              , l = W.Buffer.alloc(to.span + n.length);
            return to.encode({
                numSignatures: h,
                signatureOffset: f,
                signatureInstructionIndex: i,
                ethAddressOffset: d,
                ethAddressInstructionIndex: i,
                messageDataOffset: y,
                messageDataSize: n.length,
                messageInstructionIndex: i,
                signature: Z(s),
                ethAddress: Z(c),
                recoveryId: o
            }, l),
            l.fill(Z(n), to.span),
            new fe({
                keys: [],
                programId: r.programId,
                data: l
            })
        }
        static createInstructionWithPrivateKey(e) {
            let {privateKey: t, message: n, instructionIndex: s} = e;
            ie(t.length === Ma, `Private key must be ${Ma} bytes but received ${t.length} bytes`);
            try {
                let o = Z(t)
                  , i = Zg(o, !1).slice(1)
                  , c = W.Buffer.from(rs(Z(n)))
                  , [a,d] = Xg(c, o);
                return this.createInstructionWithPublicKey({
                    publicKey: i,
                    message: n,
                    signature: a,
                    recoveryId: d,
                    instructionIndex: s
                })
            } catch (o) {
                throw new Error(`Error creating instruction; ${o}`)
            }
        }
    }
    ;
    qr.programId = new B("KeccakSecp256k11111111111111111111111111111");
    dc = new B("StakeConfig11111111111111111111111111111111"),
    $r = class {
        constructor(e, t) {
            this.staker = void 0,
            this.withdrawer = void 0,
            this.staker = e,
            this.withdrawer = t
        }
    }
    ,
    Wt = class {
        constructor(e, t, n) {
            this.unixTimestamp = void 0,
            this.epoch = void 0,
            this.custodian = void 0,
            this.unixTimestamp = e,
            this.epoch = t,
            this.custodian = n
        }
    }
    ;
    uc = Wt;
    Wt.default = new uc(0,0,B.default);
    bo = class {
        constructor() {}
        static decodeInstructionType(e) {
            this.checkProgramId(e.programId);
            let n = u.u32("instruction").decode(e.data), s;
            for (let[o,i] of Object.entries(ke))
                if (i.index == n) {
                    s = o;
                    break
                }
            if (!s)
                throw new Error("Instruction type incorrect; not a StakeInstruction");
            return s
        }
        static decodeInitialize(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {authorized: t, lockup: n} = ue(ke.Initialize, e.data);
            return {
                stakePubkey: e.keys[0].pubkey,
                authorized: new $r(new B(t.staker),new B(t.withdrawer)),
                lockup: new Wt(n.unixTimestamp,n.epoch,new B(n.custodian))
            }
        }
        static decodeDelegate(e) {
            return this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 6),
            ue(ke.Delegate, e.data),
            {
                stakePubkey: e.keys[0].pubkey,
                votePubkey: e.keys[1].pubkey,
                authorizedPubkey: e.keys[5].pubkey
            }
        }
        static decodeAuthorize(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {newAuthorized: t, stakeAuthorizationType: n} = ue(ke.Authorize, e.data)
              , s = {
                stakePubkey: e.keys[0].pubkey,
                authorizedPubkey: e.keys[2].pubkey,
                newAuthorizedPubkey: new B(t),
                stakeAuthorizationType: {
                    index: n
                }
            };
            return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey),
            s
        }
        static decodeAuthorizeWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {newAuthorized: t, stakeAuthorizationType: n, authoritySeed: s, authorityOwner: o} = ue(ke.AuthorizeWithSeed, e.data)
              , i = {
                stakePubkey: e.keys[0].pubkey,
                authorityBase: e.keys[1].pubkey,
                authoritySeed: s,
                authorityOwner: new B(o),
                newAuthorizedPubkey: new B(t),
                stakeAuthorizationType: {
                    index: n
                }
            };
            return e.keys.length > 3 && (i.custodianPubkey = e.keys[3].pubkey),
            i
        }
        static decodeSplit(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {lamports: t} = ue(ke.Split, e.data);
            return {
                stakePubkey: e.keys[0].pubkey,
                splitStakePubkey: e.keys[1].pubkey,
                authorizedPubkey: e.keys[2].pubkey,
                lamports: t
            }
        }
        static decodeMerge(e) {
            return this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            ue(ke.Merge, e.data),
            {
                stakePubkey: e.keys[0].pubkey,
                sourceStakePubKey: e.keys[1].pubkey,
                authorizedPubkey: e.keys[4].pubkey
            }
        }
        static decodeWithdraw(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 5);
            let {lamports: t} = ue(ke.Withdraw, e.data)
              , n = {
                stakePubkey: e.keys[0].pubkey,
                toPubkey: e.keys[1].pubkey,
                authorizedPubkey: e.keys[4].pubkey,
                lamports: t
            };
            return e.keys.length > 5 && (n.custodianPubkey = e.keys[5].pubkey),
            n
        }
        static decodeDeactivate(e) {
            return this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            ue(ke.Deactivate, e.data),
            {
                stakePubkey: e.keys[0].pubkey,
                authorizedPubkey: e.keys[2].pubkey
            }
        }
        static checkProgramId(e) {
            if (!e.equals(fn.programId))
                throw new Error("invalid instruction; programId is not StakeProgram")
        }
        static checkKeyLength(e, t) {
            if (e.length < t)
                throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
        }
    }
    ,
    ke = Object.freeze({
        Initialize: {
            index: 0,
            layout: u.struct([u.u32("instruction"), u_(), d_()])
        },
        Authorize: {
            index: 1,
            layout: u.struct([u.u32("instruction"), Q("newAuthorized"), u.u32("stakeAuthorizationType")])
        },
        Delegate: {
            index: 2,
            layout: u.struct([u.u32("instruction")])
        },
        Split: {
            index: 3,
            layout: u.struct([u.u32("instruction"), u.ns64("lamports")])
        },
        Withdraw: {
            index: 4,
            layout: u.struct([u.u32("instruction"), u.ns64("lamports")])
        },
        Deactivate: {
            index: 5,
            layout: u.struct([u.u32("instruction")])
        },
        Merge: {
            index: 7,
            layout: u.struct([u.u32("instruction")])
        },
        AuthorizeWithSeed: {
            index: 8,
            layout: u.struct([u.u32("instruction"), Q("newAuthorized"), u.u32("stakeAuthorizationType"), Vt("authoritySeed"), Q("authorityOwner")])
        }
    }),
    Qg = Object.freeze({
        Staker: {
            index: 0
        },
        Withdrawer: {
            index: 1
        }
    }),
    fn = class {
        constructor() {}
        static initialize(e) {
            let {stakePubkey: t, authorized: n, lockup: s} = e
              , o = s || Wt.default
              , i = ke.Initialize
              , c = re(i, {
                authorized: {
                    staker: Z(n.staker.toBuffer()),
                    withdrawer: Z(n.withdrawer.toBuffer())
                },
                lockup: {
                    unixTimestamp: o.unixTimestamp,
                    epoch: o.epoch,
                    custodian: Z(o.custodian.toBuffer())
                }
            })
              , a = {
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: un,
                    isSigner: !1,
                    isWritable: !1
                }],
                programId: this.programId,
                data: c
            };
            return new fe(a)
        }
        static createAccountWithSeed(e) {
            let t = new de;
            t.add(Be.createAccountWithSeed({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.stakePubkey,
                basePubkey: e.basePubkey,
                seed: e.seed,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId
            }));
            let {stakePubkey: n, authorized: s, lockup: o} = e;
            return t.add(this.initialize({
                stakePubkey: n,
                authorized: s,
                lockup: o
            }))
        }
        static createAccount(e) {
            let t = new de;
            t.add(Be.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.stakePubkey,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId
            }));
            let {stakePubkey: n, authorized: s, lockup: o} = e;
            return t.add(this.initialize({
                stakePubkey: n,
                authorized: s,
                lockup: o
            }))
        }
        static delegate(e) {
            let {stakePubkey: t, authorizedPubkey: n, votePubkey: s} = e
              , o = ke.Delegate
              , i = re(o);
            return new de().add({
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: s,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: ot,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: Pr,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: dc,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: i
            })
        }
        static authorize(e) {
            let {stakePubkey: t, authorizedPubkey: n, newAuthorizedPubkey: s, stakeAuthorizationType: o, custodianPubkey: i} = e
              , c = ke.Authorize
              , a = re(c, {
                newAuthorized: Z(s.toBuffer()),
                stakeAuthorizationType: o.index
            })
              , d = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: ot,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return i && d.push({
                pubkey: i,
                isSigner: !0,
                isWritable: !1
            }),
            new de().add({
                keys: d,
                programId: this.programId,
                data: a
            })
        }
        static authorizeWithSeed(e) {
            let {stakePubkey: t, authorityBase: n, authoritySeed: s, authorityOwner: o, newAuthorizedPubkey: i, stakeAuthorizationType: c, custodianPubkey: a} = e
              , d = ke.AuthorizeWithSeed
              , f = re(d, {
                newAuthorized: Z(i.toBuffer()),
                stakeAuthorizationType: c.index,
                authoritySeed: s,
                authorityOwner: Z(o.toBuffer())
            })
              , y = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: ot,
                isSigner: !1,
                isWritable: !1
            }];
            return a && y.push({
                pubkey: a,
                isSigner: !0,
                isWritable: !1
            }),
            new de().add({
                keys: y,
                programId: this.programId,
                data: f
            })
        }
        static splitInstruction(e) {
            let {stakePubkey: t, authorizedPubkey: n, splitStakePubkey: s, lamports: o} = e
              , i = ke.Split
              , c = re(i, {
                lamports: o
            });
            return new fe({
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: s,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: c
            })
        }
        static split(e, t) {
            let n = new de;
            return n.add(Be.createAccount({
                fromPubkey: e.authorizedPubkey,
                newAccountPubkey: e.splitStakePubkey,
                lamports: t,
                space: this.space,
                programId: this.programId
            })),
            n.add(this.splitInstruction(e))
        }
        static splitWithSeed(e, t) {
            let {stakePubkey: n, authorizedPubkey: s, splitStakePubkey: o, basePubkey: i, seed: c, lamports: a} = e
              , d = new de;
            return d.add(Be.allocate({
                accountPubkey: o,
                basePubkey: i,
                seed: c,
                space: this.space,
                programId: this.programId
            })),
            t && t > 0 && d.add(Be.transfer({
                fromPubkey: e.authorizedPubkey,
                toPubkey: o,
                lamports: t
            })),
            d.add(this.splitInstruction({
                stakePubkey: n,
                authorizedPubkey: s,
                splitStakePubkey: o,
                lamports: a
            }))
        }
        static merge(e) {
            let {stakePubkey: t, sourceStakePubKey: n, authorizedPubkey: s} = e
              , o = ke.Merge
              , i = re(o);
            return new de().add({
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: ot,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: Pr,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: s,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: i
            })
        }
        static withdraw(e) {
            let {stakePubkey: t, authorizedPubkey: n, toPubkey: s, lamports: o, custodianPubkey: i} = e
              , c = ke.Withdraw
              , a = re(c, {
                lamports: o
            })
              , d = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: s,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: ot,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: Pr,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return i && d.push({
                pubkey: i,
                isSigner: !0,
                isWritable: !1
            }),
            new de().add({
                keys: d,
                programId: this.programId,
                data: a
            })
        }
        static deactivate(e) {
            let {stakePubkey: t, authorizedPubkey: n} = e
              , s = ke.Deactivate
              , o = re(s);
            return new de().add({
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: ot,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: o
            })
        }
    }
    ;
    fn.programId = new B("Stake11111111111111111111111111111111111111");
    fn.space = 200;
    Wr = class {
        constructor(e, t, n, s) {
            this.nodePubkey = void 0,
            this.authorizedVoter = void 0,
            this.authorizedWithdrawer = void 0,
            this.commission = void 0,
            this.nodePubkey = e,
            this.authorizedVoter = t,
            this.authorizedWithdrawer = n,
            this.commission = s
        }
    }
    ,
    Eo = class {
        constructor() {}
        static decodeInstructionType(e) {
            this.checkProgramId(e.programId);
            let n = u.u32("instruction").decode(e.data), s;
            for (let[o,i] of Object.entries(ct))
                if (i.index == n) {
                    s = o;
                    break
                }
            if (!s)
                throw new Error("Instruction type incorrect; not a VoteInstruction");
            return s
        }
        static decodeInitializeAccount(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 4);
            let {voteInit: t} = ue(ct.InitializeAccount, e.data);
            return {
                votePubkey: e.keys[0].pubkey,
                nodePubkey: e.keys[3].pubkey,
                voteInit: new Wr(new B(t.nodePubkey),new B(t.authorizedVoter),new B(t.authorizedWithdrawer),t.commission)
            }
        }
        static decodeAuthorize(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {newAuthorized: t, voteAuthorizationType: n} = ue(ct.Authorize, e.data);
            return {
                votePubkey: e.keys[0].pubkey,
                authorizedPubkey: e.keys[2].pubkey,
                newAuthorizedPubkey: new B(t),
                voteAuthorizationType: {
                    index: n
                }
            }
        }
        static decodeAuthorizeWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {voteAuthorizeWithSeedArgs: {currentAuthorityDerivedKeyOwnerPubkey: t, currentAuthorityDerivedKeySeed: n, newAuthorized: s, voteAuthorizationType: o}} = ue(ct.AuthorizeWithSeed, e.data);
            return {
                currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
                currentAuthorityDerivedKeyOwnerPubkey: new B(t),
                currentAuthorityDerivedKeySeed: n,
                newAuthorizedPubkey: new B(s),
                voteAuthorizationType: {
                    index: o
                },
                votePubkey: e.keys[0].pubkey
            }
        }
        static decodeWithdraw(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {lamports: t} = ue(ct.Withdraw, e.data);
            return {
                votePubkey: e.keys[0].pubkey,
                authorizedWithdrawerPubkey: e.keys[2].pubkey,
                lamports: t,
                toPubkey: e.keys[1].pubkey
            }
        }
        static checkProgramId(e) {
            if (!e.equals(ln.programId))
                throw new Error("invalid instruction; programId is not VoteProgram")
        }
        static checkKeyLength(e, t) {
            if (e.length < t)
                throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
        }
    }
    ,
    ct = Object.freeze({
        InitializeAccount: {
            index: 0,
            layout: u.struct([u.u32("instruction"), f_()])
        },
        Authorize: {
            index: 1,
            layout: u.struct([u.u32("instruction"), Q("newAuthorized"), u.u32("voteAuthorizationType")])
        },
        Withdraw: {
            index: 3,
            layout: u.struct([u.u32("instruction"), u.ns64("lamports")])
        },
        UpdateValidatorIdentity: {
            index: 4,
            layout: u.struct([u.u32("instruction")])
        },
        AuthorizeWithSeed: {
            index: 10,
            layout: u.struct([u.u32("instruction"), l_()])
        }
    }),
    ey = Object.freeze({
        Voter: {
            index: 0
        },
        Withdrawer: {
            index: 1
        }
    }),
    ln = class r {
        constructor() {}
        static initializeAccount(e) {
            let {votePubkey: t, nodePubkey: n, voteInit: s} = e
              , o = ct.InitializeAccount
              , i = re(o, {
                voteInit: {
                    nodePubkey: Z(s.nodePubkey.toBuffer()),
                    authorizedVoter: Z(s.authorizedVoter.toBuffer()),
                    authorizedWithdrawer: Z(s.authorizedWithdrawer.toBuffer()),
                    commission: s.commission
                }
            })
              , c = {
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: un,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: ot,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: i
            };
            return new fe(c)
        }
        static createAccount(e) {
            let t = new de;
            return t.add(Be.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.votePubkey,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId
            })),
            t.add(this.initializeAccount({
                votePubkey: e.votePubkey,
                nodePubkey: e.voteInit.nodePubkey,
                voteInit: e.voteInit
            }))
        }
        static authorize(e) {
            let {votePubkey: t, authorizedPubkey: n, newAuthorizedPubkey: s, voteAuthorizationType: o} = e
              , i = ct.Authorize
              , c = re(i, {
                newAuthorized: Z(s.toBuffer()),
                voteAuthorizationType: o.index
            })
              , a = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: ot,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return new de().add({
                keys: a,
                programId: this.programId,
                data: c
            })
        }
        static authorizeWithSeed(e) {
            let {currentAuthorityDerivedKeyBasePubkey: t, currentAuthorityDerivedKeyOwnerPubkey: n, currentAuthorityDerivedKeySeed: s, newAuthorizedPubkey: o, voteAuthorizationType: i, votePubkey: c} = e
              , a = ct.AuthorizeWithSeed
              , d = re(a, {
                voteAuthorizeWithSeedArgs: {
                    currentAuthorityDerivedKeyOwnerPubkey: Z(n.toBuffer()),
                    currentAuthorityDerivedKeySeed: s,
                    newAuthorized: Z(o.toBuffer()),
                    voteAuthorizationType: i.index
                }
            })
              , f = [{
                pubkey: c,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: ot,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: t,
                isSigner: !0,
                isWritable: !1
            }];
            return new de().add({
                keys: f,
                programId: this.programId,
                data: d
            })
        }
        static withdraw(e) {
            let {votePubkey: t, authorizedWithdrawerPubkey: n, lamports: s, toPubkey: o} = e
              , i = ct.Withdraw
              , c = re(i, {
                lamports: s
            })
              , a = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: o,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return new de().add({
                keys: a,
                programId: this.programId,
                data: c
            })
        }
        static safeWithdraw(e, t, n) {
            if (e.lamports > t - n)
                throw new Error("Withdraw will leave vote account with insufficient funds.");
            return r.withdraw(e)
        }
        static updateValidatorIdentity(e) {
            let {votePubkey: t, authorizedWithdrawerPubkey: n, nodePubkey: s} = e
              , o = ct.UpdateValidatorIdentity
              , i = re(o)
              , c = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: s,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return new de().add({
                keys: c,
                programId: this.programId,
                data: i
            })
        }
    }
    ;
    ln.programId = new B("Vote111111111111111111111111111111111111111");
    ln.space = 3762;
    fc = new B("Va1idator1nfo111111111111111111111111111111"),
    ty = I({
        name: k(),
        website: F(k()),
        details: F(k()),
        iconUrl: F(k()),
        keybaseUsername: F(k())
    }),
    So = class r {
        constructor(e, t) {
            this.key = void 0,
            this.info = void 0,
            this.key = e,
            this.info = t
        }
        static fromConfigData(e) {
            let t = [...e];
            if (Ge(t) !== 2)
                return null;
            let s = [];
            for (let o = 0; o < 2; o++) {
                let i = new B(He(t, 0, ut))
                  , c = it(t) === 1;
                s.push({
                    publicKey: i,
                    isSigner: c
                })
            }
            if (s[0].publicKey.equals(fc) && s[1].isSigner) {
                let o = Vt().decode(W.Buffer.from(t))
                  , i = JSON.parse(o);
                return Cs(i, ty),
                new r(s[1].publicKey,i)
            }
            return null
        }
    }
    ,
    ny = new B("Vote111111111111111111111111111111111111111"),
    ry = u.struct([Q("nodePubkey"), Q("authorizedWithdrawer"), u.u8("commission"), u.nu64(), u.seq(u.struct([u.nu64("slot"), u.u32("confirmationCount")]), u.offset(u.u32(), -8), "votes"), u.u8("rootSlotValid"), u.nu64("rootSlot"), u.nu64(), u.seq(u.struct([u.nu64("epoch"), Q("authorizedVoter")]), u.offset(u.u32(), -8), "authorizedVoters"), u.struct([u.seq(u.struct([Q("authorizedPubkey"), u.nu64("epochOfLastAuthorizedSwitch"), u.nu64("targetEpoch")]), 32, "buf"), u.nu64("idx"), u.u8("isEmpty")], "priorVoters"), u.nu64(), u.seq(u.struct([u.nu64("epoch"), u.nu64("credits"), u.nu64("prevCredits")]), u.offset(u.u32(), -8), "epochCredits"), u.struct([u.nu64("slot"), u.nu64("timestamp")], "lastTimestamp")]),
    Ao = class r {
        constructor(e) {
            this.nodePubkey = void 0,
            this.authorizedWithdrawer = void 0,
            this.commission = void 0,
            this.rootSlot = void 0,
            this.votes = void 0,
            this.authorizedVoters = void 0,
            this.priorVoters = void 0,
            this.epochCredits = void 0,
            this.lastTimestamp = void 0,
            this.nodePubkey = e.nodePubkey,
            this.authorizedWithdrawer = e.authorizedWithdrawer,
            this.commission = e.commission,
            this.rootSlot = e.rootSlot,
            this.votes = e.votes,
            this.authorizedVoters = e.authorizedVoters,
            this.priorVoters = e.priorVoters,
            this.epochCredits = e.epochCredits,
            this.lastTimestamp = e.lastTimestamp
        }
        static fromAccountData(e) {
            let n = ry.decode(Z(e), 4)
              , s = n.rootSlot;
            return n.rootSlotValid || (s = null),
            new r({
                nodePubkey: new B(n.nodePubkey),
                authorizedWithdrawer: new B(n.authorizedWithdrawer),
                commission: n.commission,
                votes: n.votes,
                rootSlot: s,
                authorizedVoters: n.authorizedVoters.map(sy),
                priorVoters: oy(n.priorVoters),
                epochCredits: n.epochCredits,
                lastTimestamp: n.lastTimestamp
            })
        }
    }
    ;
    Va = {
        http: {
            devnet: "http://api.devnet.solana.com",
            testnet: "http://api.testnet.solana.com",
            "mainnet-beta": "http://api.mainnet-beta.solana.com/"
        },
        https: {
            devnet: "https://api.devnet.solana.com",
            testnet: "https://api.testnet.solana.com",
            "mainnet-beta": "https://api.mainnet-beta.solana.com/"
        }
    };
    cy = 1e9
}
);
export {_s as a, Ss as b, xn as c, ro as d, Cn as e, Ga as f, ut as g, B as h, so as i, a_ as j, vt as k, Gr as l, Pn as m, Dn as n, Un as o, Tt as p, qt as q, dt as r, cn as s, Io as t, mt as u, fe as v, de as w, oo as x, io as y, ot as z, p_ as A, m_ as B, xr as C, un as D, R_ as E, b_ as F, E_ as G, Pr as H, $t as I, S_ as J, U as K, ao as L, Xa as M, co as N, zr as O, uo as P, ge as Q, Be as R, fo as S, w_ as T, lo as U, Mr as V, zn as W, Qa as X, po as Y, Fr as Z, Rt as _, mo as $, Kn as aa, Ro as ba, at as ca, Fn as da, Vr as ea, qr as fa, dc as ga, $r as ha, Wt as ia, bo as ja, ke as ka, Qg as la, fn as ma, Wr as na, Eo as oa, ey as pa, ln as qa, fc as ra, So as sa, ny as ta, Ao as ua, iy as va, ay as wa, cy as xa, uy as ya, dy as za};
