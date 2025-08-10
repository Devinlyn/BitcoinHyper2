import {e as l} from "./chunk-QE6IBIJD.js";
var f, x = l( () => {
    "use strict";
    f = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0
}
);
function m(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array"
}
function d(t) {
    if (!Number.isSafeInteger(t) || t < 0)
        throw new Error("positive integer expected, got " + t)
}
function p(t, ...e) {
    if (!m(t))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length)
}
function V(t) {
    if (typeof t != "function" || typeof t.create != "function")
        throw new Error("Hash should be wrapped by utils.createHasher");
    d(t.outputLen),
    d(t.blockLen)
}
function j(t, e=!0) {
    if (t.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && t.finished)
        throw new Error("Hash#digest() has already been called")
}
function N(t, e) {
    p(t);
    let n = e.outputLen;
    if (t.length < n)
        throw new Error("digestInto() expects output buffer of length at least " + n)
}
function D(t) {
    return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength / 4))
}
function F(...t) {
    for (let e = 0; e < t.length; e++)
        t[e].fill(0)
}
function R(t) {
    return new DataView(t.buffer,t.byteOffset,t.byteLength)
}
function C(t, e) {
    return t << 32 - e | t >>> e
}
function L(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255
}
function B(t) {
    for (let e = 0; e < t.length; e++)
        t[e] = L(t[e]);
    return t
}
function W(t) {
    if (p(t),
    w)
        return t.toHex();
    let e = "";
    for (let n = 0; n < t.length; n++)
        e += H[t[n]];
    return e
}
function y(t) {
    if (t >= c._0 && t <= c._9)
        return t - c._0;
    if (t >= c.A && t <= c.F)
        return t - (c.A - 10);
    if (t >= c.a && t <= c.f)
        return t - (c.a - 10)
}
function X(t) {
    if (typeof t != "string")
        throw new Error("hex string expected, got " + typeof t);
    if (w)
        return Uint8Array.fromHex(t);
    let e = t.length
      , n = e / 2;
    if (e % 2)
        throw new Error("hex string expected, got unpadded hex of length " + e);
    let r = new Uint8Array(n);
    for (let o = 0, i = 0; o < n; o++,
    i += 2) {
        let u = y(t.charCodeAt(i))
          , s = y(t.charCodeAt(i + 1));
        if (u === void 0 || s === void 0) {
            let b = t[i] + t[i + 1];
            throw new Error('hex string expected, got non-hex character "' + b + '" at index ' + i)
        }
        r[o] = u * 16 + s
    }
    return r
}
function U(t) {
    if (typeof t != "string")
        throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t))
}
function E(t) {
    return typeof t == "string" && (t = U(t)),
    p(t),
    t
}
function v(...t) {
    let e = 0;
    for (let r = 0; r < t.length; r++) {
        let o = t[r];
        p(o),
        e += o.length
    }
    let n = new Uint8Array(e);
    for (let r = 0, o = 0; r < t.length; r++) {
        let i = t[r];
        n.set(i, o),
        o += i.length
    }
    return n
}
function K(t) {
    let e = r => t().update(E(r)).digest()
      , n = t();
    return e.outputLen = n.outputLen,
    e.blockLen = n.blockLen,
    e.create = () => t(),
    e
}
function q(t=32) {
    if (f && typeof f.getRandomValues == "function")
        return f.getRandomValues(new Uint8Array(t));
    if (f && typeof f.randomBytes == "function")
        return Uint8Array.from(f.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined")
}
var A, M, w, H, c, g, S = l( () => {
    "use strict";
    x();
    A = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    M = A ? t => t : B,
    w = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function",
    H = Array.from({
        length: 256
    }, (t, e) => e.toString(16).padStart(2, "0"));
    c = {
        _0: 48,
        _9: 57,
        A: 65,
        F: 70,
        a: 97,
        f: 102
    };
    g = class {
    }
}
);
function T(t, e=!1) {
    return e ? {
        h: Number(t & a),
        l: Number(t >> h & a)
    } : {
        h: Number(t >> h & a) | 0,
        l: Number(t & a) | 0
    }
}
function J(t, e=!1) {
    let n = t.length
      , r = new Uint32Array(n)
      , o = new Uint32Array(n);
    for (let i = 0; i < n; i++) {
        let {h: u, l: s} = T(t[i], e);
        [r[i],o[i]] = [u, s]
    }
    return [r, o]
}
function it(t, e, n, r) {
    let o = (e >>> 0) + (r >>> 0);
    return {
        h: t + n + (o / 2 ** 32 | 0) | 0,
        l: o | 0
    }
}
var a, h, P, Q, Y, Z, $, tt, et, nt, rt, ot, ct, ft, ut, st, pt, at, O = l( () => {
    "use strict";
    a = BigInt(4294967295),
    h = BigInt(32);
    P = (t, e, n) => t >>> n,
    Q = (t, e, n) => t << 32 - n | e >>> n,
    Y = (t, e, n) => t >>> n | e << 32 - n,
    Z = (t, e, n) => t << 32 - n | e >>> n,
    $ = (t, e, n) => t << 64 - n | e >>> n - 32,
    tt = (t, e, n) => t >>> n - 32 | e << 64 - n,
    et = (t, e, n) => t << n | e >>> 32 - n,
    nt = (t, e, n) => e << n | t >>> 32 - n,
    rt = (t, e, n) => e << n - 32 | t >>> 64 - n,
    ot = (t, e, n) => t << n - 32 | e >>> 64 - n;
    ct = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
    ft = (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0,
    ut = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0),
    st = (t, e, n, r, o) => e + n + r + o + (t / 2 ** 32 | 0) | 0,
    pt = (t, e, n, r, o) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (o >>> 0),
    at = (t, e, n, r, o, i) => e + n + r + o + i + (t / 2 ** 32 | 0) | 0
}
);
export {m as a, d as b, p as c, V as d, j as e, N as f, D as g, F as h, R as i, C as j, M as k, W as l, X as m, U as n, E as o, v as p, g as q, K as r, q as s, S as t, J as u, P as v, Q as w, Y as x, Z as y, $ as z, tt as A, et as B, nt as C, rt as D, ot as E, it as F, ct as G, ft as H, ut as I, st as J, pt as K, at as L, O as M};
