import {f as w, l as g} from "./chunk-QE6IBIJD.js";
var S = w(p => {
    "use strict";
    Object.defineProperty(p, "__esModule", {
        value: !0
    });
    p.crypto = void 0;
    p.crypto = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0
}
);
var bt = w(n => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    n.wrapXOFConstructorWithOpts = n.wrapConstructorWithOpts = n.wrapConstructor = n.Hash = n.nextTick = n.swap32IfBE = n.byteSwapIfBE = n.swap8IfBE = n.isLE = void 0;
    n.isBytes = E;
    n.anumber = L;
    n.abytes = a;
    n.ahash = tt;
    n.aexists = et;
    n.aoutput = rt;
    n.u8 = nt;
    n.u32 = ot;
    n.clean = it;
    n.createView = ct;
    n.rotr = ut;
    n.rotl = st;
    n.byteSwap = B;
    n.byteSwap32 = U;
    n.bytesToHex = at;
    n.hexToBytes = dt;
    n.asyncLoop = pt;
    n.utf8ToBytes = H;
    n.bytesToUtf8 = yt;
    n.toBytes = y;
    n.kdfInputToBytes = ht;
    n.concatBytes = wt;
    n.checkOpts = gt;
    n.createHasher = T;
    n.createOptHasher = _;
    n.createXOFer = k;
    n.randomBytes = Lt;
    var f = S();
    function E(t) {
        return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array"
    }
    function L(t) {
        if (!Number.isSafeInteger(t) || t < 0)
            throw new Error("positive integer expected, got " + t)
    }
    function a(t, ...e) {
        if (!E(t))
            throw new Error("Uint8Array expected");
        if (e.length > 0 && !e.includes(t.length))
            throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length)
    }
    function tt(t) {
        if (typeof t != "function" || typeof t.create != "function")
            throw new Error("Hash should be wrapped by utils.createHasher");
        L(t.outputLen),
        L(t.blockLen)
    }
    function et(t, e=!0) {
        if (t.destroyed)
            throw new Error("Hash instance has been destroyed");
        if (e && t.finished)
            throw new Error("Hash#digest() has already been called")
    }
    function rt(t, e) {
        a(t);
        let r = e.outputLen;
        if (t.length < r)
            throw new Error("digestInto() expects output buffer of length at least " + r)
    }
    function nt(t) {
        return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
    }
    function ot(t) {
        return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength / 4))
    }
    function it(...t) {
        for (let e = 0; e < t.length; e++)
            t[e].fill(0)
    }
    function ct(t) {
        return new DataView(t.buffer,t.byteOffset,t.byteLength)
    }
    function ut(t, e) {
        return t << 32 - e | t >>> e
    }
    function st(t, e) {
        return t << e | t >>> 32 - e >>> 0
    }
    n.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
    function B(t) {
        return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255
    }
    n.swap8IfBE = n.isLE ? t => t : t => B(t);
    n.byteSwapIfBE = n.swap8IfBE;
    function U(t) {
        for (let e = 0; e < t.length; e++)
            t[e] = B(t[e]);
        return t
    }
    n.swap32IfBE = n.isLE ? t => t : U;
    var O = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function"
      , ft = Array.from({
        length: 256
    }, (t, e) => e.toString(16).padStart(2, "0"));
    function at(t) {
        if (a(t),
        O)
            return t.toHex();
        let e = "";
        for (let r = 0; r < t.length; r++)
            e += ft[t[r]];
        return e
    }
    var s = {
        _0: 48,
        _9: 57,
        A: 65,
        F: 70,
        a: 97,
        f: 102
    };
    function A(t) {
        if (t >= s._0 && t <= s._9)
            return t - s._0;
        if (t >= s.A && t <= s.F)
            return t - (s.A - 10);
        if (t >= s.a && t <= s.f)
            return t - (s.a - 10)
    }
    function dt(t) {
        if (typeof t != "string")
            throw new Error("hex string expected, got " + typeof t);
        if (O)
            return Uint8Array.fromHex(t);
        let e = t.length
          , r = e / 2;
        if (e % 2)
            throw new Error("hex string expected, got unpadded hex of length " + e);
        let i = new Uint8Array(r);
        for (let c = 0, u = 0; c < r; c++,
        u += 2) {
            let d = A(t.charCodeAt(u))
              , l = A(t.charCodeAt(u + 1));
            if (d === void 0 || l === void 0) {
                let $ = t[u] + t[u + 1];
                throw new Error('hex string expected, got non-hex character "' + $ + '" at index ' + u)
            }
            i[c] = d * 16 + l
        }
        return i
    }
    var lt = () => g(n, null, function*() {});
    n.nextTick = lt;
    function pt(t, e, r) {
        return g(this, null, function*() {
            let i = Date.now();
            for (let c = 0; c < t; c++) {
                r(c);
                let u = Date.now() - i;
                u >= 0 && u < e || (yield(0,
                n.nextTick)(),
                i += u)
            }
        })
    }
    function H(t) {
        if (typeof t != "string")
            throw new Error("string expected");
        return new Uint8Array(new TextEncoder().encode(t))
    }
    function yt(t) {
        return new TextDecoder().decode(t)
    }
    function y(t) {
        return typeof t == "string" && (t = H(t)),
        a(t),
        t
    }
    function ht(t) {
        return typeof t == "string" && (t = H(t)),
        a(t),
        t
    }
    function wt(...t) {
        let e = 0;
        for (let i = 0; i < t.length; i++) {
            let c = t[i];
            a(c),
            e += c.length
        }
        let r = new Uint8Array(e);
        for (let i = 0, c = 0; i < t.length; i++) {
            let u = t[i];
            r.set(u, c),
            c += u.length
        }
        return r
    }
    function gt(t, e) {
        if (e !== void 0 && {}.toString.call(e) !== "[object Object]")
            throw new Error("options should be object or undefined");
        return Object.assign(t, e)
    }
    var b = class {
    }
    ;
    n.Hash = b;
    function T(t) {
        let e = i => t().update(y(i)).digest()
          , r = t();
        return e.outputLen = r.outputLen,
        e.blockLen = r.blockLen,
        e.create = () => t(),
        e
    }
    function _(t) {
        let e = (i, c) => t(c).update(y(i)).digest()
          , r = t({});
        return e.outputLen = r.outputLen,
        e.blockLen = r.blockLen,
        e.create = i => t(i),
        e
    }
    function k(t) {
        let e = (i, c) => t(c).update(y(i)).digest()
          , r = t({});
        return e.outputLen = r.outputLen,
        e.blockLen = r.blockLen,
        e.create = i => t(i),
        e
    }
    n.wrapConstructor = T;
    n.wrapConstructorWithOpts = _;
    n.wrapXOFConstructorWithOpts = k;
    function Lt(t=32) {
        if (f.crypto && typeof f.crypto.getRandomValues == "function")
            return f.crypto.getRandomValues(new Uint8Array(t));
        if (f.crypto && typeof f.crypto.randomBytes == "function")
            return Uint8Array.from(f.crypto.randomBytes(t));
        throw new Error("crypto.getRandomValues must be defined")
    }
}
);
var Ht = w(o => {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    o.toBig = o.shrSL = o.shrSH = o.rotrSL = o.rotrSH = o.rotrBL = o.rotrBH = o.rotr32L = o.rotr32H = o.rotlSL = o.rotlSH = o.rotlBL = o.rotlBH = o.add5L = o.add5H = o.add4L = o.add4H = o.add3L = o.add3H = void 0;
    o.add = K;
    o.fromBig = m;
    o.split = I;
    var h = BigInt(2 ** 32 - 1)
      , x = BigInt(32);
    function m(t, e=!1) {
        return e ? {
            h: Number(t & h),
            l: Number(t >> x & h)
        } : {
            h: Number(t >> x & h) | 0,
            l: Number(t & h) | 0
        }
    }
    function I(t, e=!1) {
        let r = t.length
          , i = new Uint32Array(r)
          , c = new Uint32Array(r);
        for (let u = 0; u < r; u++) {
            let {h: d, l} = m(t[u], e);
            [i[u],c[u]] = [d, l]
        }
        return [i, c]
    }
    var j = (t, e) => BigInt(t >>> 0) << x | BigInt(e >>> 0);
    o.toBig = j;
    var v = (t, e, r) => t >>> r;
    o.shrSH = v;
    var V = (t, e, r) => t << 32 - r | e >>> r;
    o.shrSL = V;
    var F = (t, e, r) => t >>> r | e << 32 - r;
    o.rotrSH = F;
    var C = (t, e, r) => t << 32 - r | e >>> r;
    o.rotrSL = C;
    var M = (t, e, r) => t << 64 - r | e >>> r - 32;
    o.rotrBH = M;
    var N = (t, e, r) => t >>> r - 32 | e << 64 - r;
    o.rotrBL = N;
    var D = (t, e) => e;
    o.rotr32H = D;
    var W = (t, e) => t;
    o.rotr32L = W;
    var X = (t, e, r) => t << r | e >>> 32 - r;
    o.rotlSH = X;
    var P = (t, e, r) => e << r | t >>> 32 - r;
    o.rotlSL = P;
    var R = (t, e, r) => e << r - 32 | t >>> 64 - r;
    o.rotlBH = R;
    var q = (t, e, r) => t << r - 32 | e >>> 64 - r;
    o.rotlBL = q;
    function K(t, e, r, i) {
        let c = (e >>> 0) + (i >>> 0);
        return {
            h: t + r + (c / 2 ** 32 | 0) | 0,
            l: c | 0
        }
    }
    var z = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0);
    o.add3L = z;
    var G = (t, e, r, i) => e + r + i + (t / 2 ** 32 | 0) | 0;
    o.add3H = G;
    var J = (t, e, r, i) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (i >>> 0);
    o.add4L = J;
    var Q = (t, e, r, i, c) => e + r + i + c + (t / 2 ** 32 | 0) | 0;
    o.add4H = Q;
    var Y = (t, e, r, i, c) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (i >>> 0) + (c >>> 0);
    o.add5L = Y;
    var Z = (t, e, r, i, c, u) => e + r + i + c + u + (t / 2 ** 32 | 0) | 0;
    o.add5H = Z;
    var Bt = {
        fromBig: m,
        split: I,
        toBig: j,
        shrSH: v,
        shrSL: V,
        rotrSH: F,
        rotrSL: C,
        rotrBH: M,
        rotrBL: N,
        rotr32H: D,
        rotr32L: W,
        rotlSH: X,
        rotlSL: P,
        rotlBH: R,
        rotlBL: q,
        add: K,
        add3L: z,
        add3H: G,
        add4L: J,
        add4H: Q,
        add5H: Z,
        add5L: Y
    };
    o.default = Bt
}
);
export {bt as a, Ht as b};
