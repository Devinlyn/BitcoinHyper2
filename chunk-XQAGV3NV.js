import {B as j, C as M, D as P, E as R, M as J, a as d, b as g, c as p, e as B, f as L, g as F, h as k, k as I, l as b, m as w, o as $, p as _, q as v, r as X, t as E, u as N} from "./chunk-XMCF3TCT.js";
import {e as U} from "./chunk-QE6IBIJD.js";
function rt(e, t=24) {
    let n = new Uint32Array(10);
    for (let r = 24 - t; r < 24; r++) {
        for (let o = 0; o < 10; o++)
            n[o] = e[o] ^ e[o + 10] ^ e[o + 20] ^ e[o + 30] ^ e[o + 40];
        for (let o = 0; o < 10; o += 2) {
            let c = (o + 8) % 10
              , u = (o + 2) % 10
              , a = n[u]
              , h = n[u + 1]
              , m = C(a, h, 1) ^ n[c]
              , H = V(a, h, 1) ^ n[c + 1];
            for (let f = 0; f < 50; f += 10)
                e[o + f] ^= m,
                e[o + f + 1] ^= H
        }
        let i = e[2]
          , s = e[3];
        for (let o = 0; o < 24; o++) {
            let c = D[o]
              , u = C(i, s, c)
              , a = V(i, s, c)
              , h = z[o];
            i = e[h],
            s = e[h + 1],
            e[h] = u,
            e[h + 1] = a
        }
        for (let o = 0; o < 50; o += 10) {
            for (let c = 0; c < 10; c++)
                n[c] = e[o + c];
            for (let c = 0; c < 10; c++)
                e[o + c] ^= ~n[(c + 2) % 10] & n[(c + 4) % 10]
        }
        e[0] ^= et[r],
        e[1] ^= nt[r]
    }
    k(n)
}
var Q, l, Y, Z, K, tt, z, D, G, W, et, nt, C, V, O, ot, pt, st = U( () => {
    "use strict";
    J();
    E();
    Q = BigInt(0),
    l = BigInt(1),
    Y = BigInt(2),
    Z = BigInt(7),
    K = BigInt(256),
    tt = BigInt(113),
    z = [],
    D = [],
    G = [];
    for (let e = 0, t = l, n = 1, r = 0; e < 24; e++) {
        [n,r] = [r, (2 * n + 3 * r) % 5],
        z.push(2 * (5 * r + n)),
        D.push((e + 1) * (e + 2) / 2 % 64);
        let i = Q;
        for (let s = 0; s < 7; s++)
            t = (t << l ^ (t >> Z) * tt) % K,
            t & Y && (i ^= l << (l << BigInt(s)) - l);
        G.push(i)
    }
    W = N(G, !0),
    et = W[0],
    nt = W[1],
    C = (e, t, n) => n > 32 ? P(e, t, n) : j(e, t, n),
    V = (e, t, n) => n > 32 ? R(e, t, n) : M(e, t, n);
    O = class e extends v {
        constructor(t, n, r, i=!1, s=24) {
            if (super(),
            this.pos = 0,
            this.posOut = 0,
            this.finished = !1,
            this.destroyed = !1,
            this.enableXOF = !1,
            this.blockLen = t,
            this.suffix = n,
            this.outputLen = r,
            this.enableXOF = i,
            this.rounds = s,
            g(r),
            !(0 < t && t < 200))
                throw new Error("only keccak-f1600 function is supported");
            this.state = new Uint8Array(200),
            this.state32 = F(this.state)
        }
        clone() {
            return this._cloneInto()
        }
        keccak() {
            I(this.state32),
            rt(this.state32, this.rounds),
            I(this.state32),
            this.posOut = 0,
            this.pos = 0
        }
        update(t) {
            B(this),
            t = $(t),
            p(t);
            let {blockLen: n, state: r} = this
              , i = t.length;
            for (let s = 0; s < i; ) {
                let o = Math.min(n - this.pos, i - s);
                for (let c = 0; c < o; c++)
                    r[this.pos++] ^= t[s++];
                this.pos === n && this.keccak()
            }
            return this
        }
        finish() {
            if (this.finished)
                return;
            this.finished = !0;
            let {state: t, suffix: n, pos: r, blockLen: i} = this;
            t[r] ^= n,
            n & 128 && r === i - 1 && this.keccak(),
            t[i - 1] ^= 128,
            this.keccak()
        }
        writeInto(t) {
            B(this, !1),
            p(t),
            this.finish();
            let n = this.state
              , {blockLen: r} = this;
            for (let i = 0, s = t.length; i < s; ) {
                this.posOut >= r && this.keccak();
                let o = Math.min(r - this.posOut, s - i);
                t.set(n.subarray(this.posOut, this.posOut + o), i),
                this.posOut += o,
                i += o
            }
            return t
        }
        xofInto(t) {
            if (!this.enableXOF)
                throw new Error("XOF is not possible for this instance");
            return this.writeInto(t)
        }
        xof(t) {
            return g(t),
            this.xofInto(new Uint8Array(t))
        }
        digestInto(t) {
            if (L(t, this),
            this.finished)
                throw new Error("digest() was already called");
            return this.writeInto(t),
            this.destroy(),
            t
        }
        digest() {
            return this.digestInto(new Uint8Array(this.outputLen))
        }
        destroy() {
            this.destroyed = !0,
            k(this.state)
        }
        _cloneInto(t) {
            let {blockLen: n, suffix: r, outputLen: i, rounds: s, enableXOF: o} = this;
            return t || (t = new e(n,r,i,o,s)),
            t.state32.set(this.state32),
            t.pos = this.pos,
            t.posOut = this.posOut,
            t.finished = this.finished,
            t.rounds = s,
            t.suffix = r,
            t.outputLen = i,
            t.enableXOF = o,
            t.destroyed = this.destroyed,
            t
        }
    }
    ,
    ot = (e, t, n) => X( () => new O(t,e,n)),
    pt = ot(1, 136, 256 / 8)
}
);
function bt(e, t="") {
    if (typeof e != "boolean") {
        let n = t && `"${t}"`;
        throw new Error(n + "expected boolean, got type=" + typeof e)
    }
    return e
}
function wt(e, t, n="") {
    let r = d(e)
      , i = e?.length
      , s = t !== void 0;
    if (!r || s && i !== t) {
        let o = n && `"${n}" `
          , c = s ? ` of length ${t}` : ""
          , u = r ? `length=${i}` : `type=${typeof e}`;
        throw new Error(o + "expected Uint8Array" + c + ", got " + u)
    }
    return e
}
function mt(e) {
    let t = e.toString(16);
    return t.length & 1 ? "0" + t : t
}
function q(e) {
    if (typeof e != "string")
        throw new Error("hex string expected, got " + typeof e);
    return e === "" ? S : BigInt("0x" + e)
}
function Bt(e) {
    return q(b(e))
}
function kt(e) {
    return p(e),
    q(b(Uint8Array.from(e).reverse()))
}
function it(e, t) {
    return w(e.toString(16).padStart(t * 2, "0"))
}
function It(e, t) {
    return it(e, t).reverse()
}
function _t(e, t, n) {
    let r;
    if (typeof t == "string")
        try {
            r = w(t)
        } catch (s) {
            throw new Error(e + " must be hex string or Uint8Array, cause: " + s)
        }
    else if (d(t))
        r = Uint8Array.from(t);
    else
        throw new Error(e + " must be hex string or Uint8Array");
    let i = r.length;
    if (typeof n == "number" && i !== n)
        throw new Error(e + " of length " + n + " expected, got " + i);
    return r
}
function Et(e) {
    return Uint8Array.from(e)
}
function ct(e, t, n) {
    return A(e) && A(t) && A(n) && t <= e && e < n
}
function Ot(e, t, n, r) {
    if (!ct(t, n, r))
        throw new Error("expected valid " + e + ": " + n + " <= n < " + r + ", got " + t)
}
function At(e) {
    let t;
    for (t = 0; e > S; e >>= T,
    t += 1)
        ;
    return t
}
function St(e, t, n) {
    if (typeof e != "number" || e < 2)
        throw new Error("hashLen must be a number");
    if (typeof t != "number" || t < 2)
        throw new Error("qByteLen must be a number");
    if (typeof n != "function")
        throw new Error("hmacFn must be a function");
    let r = f => new Uint8Array(f)
      , i = f => Uint8Array.of(f)
      , s = r(e)
      , o = r(e)
      , c = 0
      , u = () => {
        s.fill(1),
        o.fill(0),
        c = 0
    }
      , a = (...f) => n(o, s, ...f)
      , h = (f=r(0)) => {
        o = a(i(0), f),
        s = a(),
        f.length !== 0 && (o = a(i(1), f),
        s = a())
    }
      , m = () => {
        if (c++ >= 1e3)
            throw new Error("drbg: tried 1000 values");
        let f = 0
          , x = [];
        for (; f < t; ) {
            s = a();
            let y = s.slice();
            x.push(y),
            f += s.length
        }
        return _(...x)
    }
    ;
    return (f, x) => {
        u(),
        h(f);
        let y;
        for (; !(y = x(m())); )
            h();
        return u(),
        y
    }
}
function Ht(e, t, n={}) {
    if (!e || typeof e != "object")
        throw new Error("expected valid options object");
    function r(i, s, o) {
        let c = e[i];
        if (o && c === void 0)
            return;
        let u = typeof c;
        if (u !== s || c === null)
            throw new Error(`param "${i}" is invalid: expected ${s}, got ${u}`)
    }
    Object.entries(t).forEach( ([i,s]) => r(i, s, !1)),
    Object.entries(n).forEach( ([i,s]) => r(i, s, !0))
}
function Ut(e) {
    let t = new WeakMap;
    return (n, ...r) => {
        let i = t.get(n);
        if (i !== void 0)
            return i;
        let s = e(n, ...r);
        return t.set(n, s),
        s
    }
}
var S, T, A, Tt, ft = U( () => {
    "use strict";
    E();
    E();
    S = BigInt(0),
    T = BigInt(1);
    A = e => typeof e == "bigint" && S <= e;
    Tt = e => (T << BigInt(e)) - T
}
);
export {bt as a, wt as b, mt as c, Bt as d, kt as e, it as f, It as g, _t as h, Et as i, Ot as j, At as k, Tt as l, St as m, Ht as n, Ut as o, ft as p, pt as q, st as r};
