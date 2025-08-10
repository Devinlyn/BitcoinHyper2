import {f as Dt} from "./chunk-QE6IBIJD.js";
var Ar = Dt(Xt => {
    "use strict";
    Xt.byteLength = re;
    Xt.toByteArray = ee;
    Xt.fromByteArray = he;
    var Bt = []
      , Mt = []
      , te = typeof Uint8Array < "u" ? Uint8Array : Array
      , Ir = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (Lt = 0,
    mi = Ir.length; Lt < mi; ++Lt)
        Bt[Lt] = Ir[Lt],
        Mt[Ir.charCodeAt(Lt)] = Lt;
    var Lt, mi;
    Mt[45] = 62;
    Mt[95] = 63;
    function yi(i) {
        var t = i.length;
        if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var r = i.indexOf("=");
        r === -1 && (r = t);
        var n = r === t ? 0 : 4 - r % 4;
        return [r, n]
    }
    function re(i) {
        var t = yi(i)
          , r = t[0]
          , n = t[1];
        return (r + n) * 3 / 4 - n
    }
    function ie(i, t, r) {
        return (t + r) * 3 / 4 - r
    }
    function ee(i) {
        var t, r = yi(i), n = r[0], o = r[1], s = new te(ie(i, n, o)), a = 0, M = o > 0 ? n - 4 : n, B;
        for (B = 0; B < M; B += 4)
            t = Mt[i.charCodeAt(B)] << 18 | Mt[i.charCodeAt(B + 1)] << 12 | Mt[i.charCodeAt(B + 2)] << 6 | Mt[i.charCodeAt(B + 3)],
            s[a++] = t >> 16 & 255,
            s[a++] = t >> 8 & 255,
            s[a++] = t & 255;
        return o === 2 && (t = Mt[i.charCodeAt(B)] << 2 | Mt[i.charCodeAt(B + 1)] >> 4,
        s[a++] = t & 255),
        o === 1 && (t = Mt[i.charCodeAt(B)] << 10 | Mt[i.charCodeAt(B + 1)] << 4 | Mt[i.charCodeAt(B + 2)] >> 2,
        s[a++] = t >> 8 & 255,
        s[a++] = t & 255),
        s
    }
    function ne(i) {
        return Bt[i >> 18 & 63] + Bt[i >> 12 & 63] + Bt[i >> 6 & 63] + Bt[i & 63]
    }
    function oe(i, t, r) {
        for (var n, o = [], s = t; s < r; s += 3)
            n = (i[s] << 16 & 16711680) + (i[s + 1] << 8 & 65280) + (i[s + 2] & 255),
            o.push(ne(n));
        return o.join("")
    }
    function he(i) {
        for (var t, r = i.length, n = r % 3, o = [], s = 16383, a = 0, M = r - n; a < M; a += s)
            o.push(oe(i, a, a + s > M ? M : a + s));
        return n === 1 ? (t = i[r - 1],
        o.push(Bt[t >> 2] + Bt[t << 4 & 63] + "==")) : n === 2 && (t = (i[r - 2] << 8) + i[r - 1],
        o.push(Bt[t >> 10] + Bt[t >> 4 & 63] + Bt[t << 2 & 63] + "=")),
        o.join("")
    }
}
);
var _r = Dt(Fr => {
    "use strict";
    Fr.read = function(i, t, r, n, o) {
        var s, a, M = o * 8 - n - 1, B = (1 << M) - 1, I = B >> 1, E = -7, v = r ? o - 1 : 0, Ut = r ? -1 : 1, gt = i[t + v];
        for (v += Ut,
        s = gt & (1 << -E) - 1,
        gt >>= -E,
        E += M; E > 0; s = s * 256 + i[t + v],
        v += Ut,
        E -= 8)
            ;
        for (a = s & (1 << -E) - 1,
        s >>= -E,
        E += n; E > 0; a = a * 256 + i[t + v],
        v += Ut,
        E -= 8)
            ;
        if (s === 0)
            s = 1 - I;
        else {
            if (s === B)
                return a ? NaN : (gt ? -1 : 1) * (1 / 0);
            a = a + Math.pow(2, n),
            s = s - I
        }
        return (gt ? -1 : 1) * a * Math.pow(2, s - n)
    }
    ;
    Fr.write = function(i, t, r, n, o, s) {
        var a, M, B, I = s * 8 - o - 1, E = (1 << I) - 1, v = E >> 1, Ut = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, gt = n ? 0 : s - 1, Wt = n ? 1 : -1, ir = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
        isNaN(t) || t === 1 / 0 ? (M = isNaN(t) ? 1 : 0,
        a = E) : (a = Math.floor(Math.log(t) / Math.LN2),
        t * (B = Math.pow(2, -a)) < 1 && (a--,
        B *= 2),
        a + v >= 1 ? t += Ut / B : t += Ut * Math.pow(2, 1 - v),
        t * B >= 2 && (a++,
        B /= 2),
        a + v >= E ? (M = 0,
        a = E) : a + v >= 1 ? (M = (t * B - 1) * Math.pow(2, o),
        a = a + v) : (M = t * Math.pow(2, v - 1) * Math.pow(2, o),
        a = 0)); o >= 8; i[r + gt] = M & 255,
        gt += Wt,
        M /= 256,
        o -= 8)
            ;
        for (a = a << o | M,
        I += o; I > 0; i[r + gt] = a & 255,
        gt += Wt,
        a /= 256,
        I -= 8)
            ;
        i[r + gt - Wt] |= ir * 128
    }
}
);
var Li = Dt(Ot => {
    "use strict";
    var Ur = Ar()
      , Pt = _r()
      , wi = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Ot.Buffer = g;
    Ot.SlowBuffer = pe;
    Ot.INSPECT_MAX_BYTES = 50;
    var Jt = 2147483647;
    Ot.kMaxLength = Jt;
    g.TYPED_ARRAY_SUPPORT = fe();
    !g.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function fe() {
        try {
            let i = new Uint8Array(1)
              , t = {
                foo: function() {
                    return 42
                }
            };
            return Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(i, t),
            i.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(g.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (g.isBuffer(this))
                return this.buffer
        }
    });
    Object.defineProperty(g.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (g.isBuffer(this))
                return this.byteOffset
        }
    });
    function Ft(i) {
        if (i > Jt)
            throw new RangeError('The value "' + i + '" is invalid for option "size"');
        let t = new Uint8Array(i);
        return Object.setPrototypeOf(t, g.prototype),
        t
    }
    function g(i, t, r) {
        if (typeof i == "number") {
            if (typeof t == "string")
                throw new TypeError('The "string" argument must be of type string. Received type number');
            return Sr(i)
        }
        return vi(i, t, r)
    }
    g.poolSize = 8192;
    function vi(i, t, r) {
        if (typeof i == "string")
            return se(i, t);
        if (ArrayBuffer.isView(i))
            return le(i);
        if (i == null)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
        if (Et(i, ArrayBuffer) || i && Et(i.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Et(i, SharedArrayBuffer) || i && Et(i.buffer, SharedArrayBuffer)))
            return Rr(i, t, r);
        if (typeof i == "number")
            throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = i.valueOf && i.valueOf();
        if (n != null && n !== i)
            return g.from(n, t, r);
        let o = ae(i);
        if (o)
            return o;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof i[Symbol.toPrimitive] == "function")
            return g.from(i[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i)
    }
    g.from = function(i, t, r) {
        return vi(i, t, r)
    }
    ;
    Object.setPrototypeOf(g.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(g, Uint8Array);
    function Bi(i) {
        if (typeof i != "number")
            throw new TypeError('"size" argument must be of type number');
        if (i < 0)
            throw new RangeError('The value "' + i + '" is invalid for option "size"')
    }
    function ue(i, t, r) {
        return Bi(i),
        i <= 0 ? Ft(i) : t !== void 0 ? typeof r == "string" ? Ft(i).fill(t, r) : Ft(i).fill(t) : Ft(i)
    }
    g.alloc = function(i, t, r) {
        return ue(i, t, r)
    }
    ;
    function Sr(i) {
        return Bi(i),
        Ft(i < 0 ? 0 : Lr(i) | 0)
    }
    g.allocUnsafe = function(i) {
        return Sr(i)
    }
    ;
    g.allocUnsafeSlow = function(i) {
        return Sr(i)
    }
    ;
    function se(i, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"),
        !g.isEncoding(t))
            throw new TypeError("Unknown encoding: " + t);
        let r = Ei(i, t) | 0
          , n = Ft(r)
          , o = n.write(i, t);
        return o !== r && (n = n.slice(0, o)),
        n
    }
    function br(i) {
        let t = i.length < 0 ? 0 : Lr(i.length) | 0
          , r = Ft(t);
        for (let n = 0; n < t; n += 1)
            r[n] = i[n] & 255;
        return r
    }
    function le(i) {
        if (Et(i, Uint8Array)) {
            let t = new Uint8Array(i);
            return Rr(t.buffer, t.byteOffset, t.byteLength)
        }
        return br(i)
    }
    function Rr(i, t, r) {
        if (t < 0 || i.byteLength < t)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (i.byteLength < t + (r || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && r === void 0 ? n = new Uint8Array(i) : r === void 0 ? n = new Uint8Array(i,t) : n = new Uint8Array(i,t,r),
        Object.setPrototypeOf(n, g.prototype),
        n
    }
    function ae(i) {
        if (g.isBuffer(i)) {
            let t = Lr(i.length) | 0
              , r = Ft(t);
            return r.length === 0 || i.copy(r, 0, 0, t),
            r
        }
        if (i.length !== void 0)
            return typeof i.length != "number" || Cr(i.length) ? Ft(0) : br(i);
        if (i.type === "Buffer" && Array.isArray(i.data))
            return br(i.data)
    }
    function Lr(i) {
        if (i >= Jt)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Jt.toString(16) + " bytes");
        return i | 0
    }
    function pe(i) {
        return +i != i && (i = 0),
        g.alloc(+i)
    }
    g.isBuffer = function(t) {
        return t != null && t._isBuffer === !0 && t !== g.prototype
    }
    ;
    g.compare = function(t, r) {
        if (Et(t, Uint8Array) && (t = g.from(t, t.offset, t.byteLength)),
        Et(r, Uint8Array) && (r = g.from(r, r.offset, r.byteLength)),
        !g.isBuffer(t) || !g.isBuffer(r))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === r)
            return 0;
        let n = t.length
          , o = r.length;
        for (let s = 0, a = Math.min(n, o); s < a; ++s)
            if (t[s] !== r[s]) {
                n = t[s],
                o = r[s];
                break
            }
        return n < o ? -1 : o < n ? 1 : 0
    }
    ;
    g.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ;
    g.concat = function(t, r) {
        if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (t.length === 0)
            return g.alloc(0);
        let n;
        if (r === void 0)
            for (r = 0,
            n = 0; n < t.length; ++n)
                r += t[n].length;
        let o = g.allocUnsafe(r)
          , s = 0;
        for (n = 0; n < t.length; ++n) {
            let a = t[n];
            if (Et(a, Uint8Array))
                s + a.length > o.length ? (g.isBuffer(a) || (a = g.from(a)),
                a.copy(o, s)) : Uint8Array.prototype.set.call(o, a, s);
            else if (g.isBuffer(a))
                a.copy(o, s);
            else
                throw new TypeError('"list" argument must be an Array of Buffers');
            s += a.length
        }
        return o
    }
    ;
    function Ei(i, t) {
        if (g.isBuffer(i))
            return i.length;
        if (ArrayBuffer.isView(i) || Et(i, ArrayBuffer))
            return i.byteLength;
        if (typeof i != "string")
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i);
        let r = i.length
          , n = arguments.length > 2 && arguments[2] === !0;
        if (!n && r === 0)
            return 0;
        let o = !1;
        for (; ; )
            switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
                return Tr(i).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return r * 2;
            case "hex":
                return r >>> 1;
            case "base64":
                return Si(i).length;
            default:
                if (o)
                    return n ? -1 : Tr(i).length;
                t = ("" + t).toLowerCase(),
                o = !0
            }
    }
    g.byteLength = Ei;
    function ce(i, t, r) {
        let n = !1;
        if ((t === void 0 || t < 0) && (t = 0),
        t > this.length || ((r === void 0 || r > this.length) && (r = this.length),
        r <= 0) || (r >>>= 0,
        t >>>= 0,
        r <= t))
            return "";
        for (i || (i = "utf8"); ; )
            switch (i) {
            case "hex":
                return Ee(this, t, r);
            case "utf8":
            case "utf-8":
                return Ai(this, t, r);
            case "ascii":
                return ve(this, t, r);
            case "latin1":
            case "binary":
                return Be(this, t, r);
            case "base64":
                return xe(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Ie(this, t, r);
            default:
                if (n)
                    throw new TypeError("Unknown encoding: " + i);
                i = (i + "").toLowerCase(),
                n = !0
            }
    }
    g.prototype._isBuffer = !0;
    function kt(i, t, r) {
        let n = i[t];
        i[t] = i[r],
        i[r] = n
    }
    g.prototype.swap16 = function() {
        let t = this.length;
        if (t % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let r = 0; r < t; r += 2)
            kt(this, r, r + 1);
        return this
    }
    ;
    g.prototype.swap32 = function() {
        let t = this.length;
        if (t % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let r = 0; r < t; r += 4)
            kt(this, r, r + 3),
            kt(this, r + 1, r + 2);
        return this
    }
    ;
    g.prototype.swap64 = function() {
        let t = this.length;
        if (t % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let r = 0; r < t; r += 8)
            kt(this, r, r + 7),
            kt(this, r + 1, r + 6),
            kt(this, r + 2, r + 5),
            kt(this, r + 3, r + 4);
        return this
    }
    ;
    g.prototype.toString = function() {
        let t = this.length;
        return t === 0 ? "" : arguments.length === 0 ? Ai(this, 0, t) : ce.apply(this, arguments)
    }
    ;
    g.prototype.toLocaleString = g.prototype.toString;
    g.prototype.equals = function(t) {
        if (!g.isBuffer(t))
            throw new TypeError("Argument must be a Buffer");
        return this === t ? !0 : g.compare(this, t) === 0
    }
    ;
    g.prototype.inspect = function() {
        let t = ""
          , r = Ot.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(),
        this.length > r && (t += " ... "),
        "<Buffer " + t + ">"
    }
    ;
    wi && (g.prototype[wi] = g.prototype.inspect);
    g.prototype.compare = function(t, r, n, o, s) {
        if (Et(t, Uint8Array) && (t = g.from(t, t.offset, t.byteLength)),
        !g.isBuffer(t))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (r === void 0 && (r = 0),
        n === void 0 && (n = t ? t.length : 0),
        o === void 0 && (o = 0),
        s === void 0 && (s = this.length),
        r < 0 || n > t.length || o < 0 || s > this.length)
            throw new RangeError("out of range index");
        if (o >= s && r >= n)
            return 0;
        if (o >= s)
            return -1;
        if (r >= n)
            return 1;
        if (r >>>= 0,
        n >>>= 0,
        o >>>= 0,
        s >>>= 0,
        this === t)
            return 0;
        let a = s - o
          , M = n - r
          , B = Math.min(a, M)
          , I = this.slice(o, s)
          , E = t.slice(r, n);
        for (let v = 0; v < B; ++v)
            if (I[v] !== E[v]) {
                a = I[v],
                M = E[v];
                break
            }
        return a < M ? -1 : M < a ? 1 : 0
    }
    ;
    function Ii(i, t, r, n, o) {
        if (i.length === 0)
            return -1;
        if (typeof r == "string" ? (n = r,
        r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
        r = +r,
        Cr(r) && (r = o ? 0 : i.length - 1),
        r < 0 && (r = i.length + r),
        r >= i.length) {
            if (o)
                return -1;
            r = i.length - 1
        } else if (r < 0)
            if (o)
                r = 0;
            else
                return -1;
        if (typeof t == "string" && (t = g.from(t, n)),
        g.isBuffer(t))
            return t.length === 0 ? -1 : gi(i, t, r, n, o);
        if (typeof t == "number")
            return t = t & 255,
            typeof Uint8Array.prototype.indexOf == "function" ? o ? Uint8Array.prototype.indexOf.call(i, t, r) : Uint8Array.prototype.lastIndexOf.call(i, t, r) : gi(i, [t], r, n, o);
        throw new TypeError("val must be string, number or Buffer")
    }
    function gi(i, t, r, n, o) {
        let s = 1
          , a = i.length
          , M = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(),
        n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
            if (i.length < 2 || t.length < 2)
                return -1;
            s = 2,
            a /= 2,
            M /= 2,
            r /= 2
        }
        function B(E, v) {
            return s === 1 ? E[v] : E.readUInt16BE(v * s)
        }
        let I;
        if (o) {
            let E = -1;
            for (I = r; I < a; I++)
                if (B(i, I) === B(t, E === -1 ? 0 : I - E)) {
                    if (E === -1 && (E = I),
                    I - E + 1 === M)
                        return E * s
                } else
                    E !== -1 && (I -= I - E),
                    E = -1
        } else
            for (r + M > a && (r = a - M),
            I = r; I >= 0; I--) {
                let E = !0;
                for (let v = 0; v < M; v++)
                    if (B(i, I + v) !== B(t, v)) {
                        E = !1;
                        break
                    }
                if (E)
                    return I
            }
        return -1
    }
    g.prototype.includes = function(t, r, n) {
        return this.indexOf(t, r, n) !== -1
    }
    ;
    g.prototype.indexOf = function(t, r, n) {
        return Ii(this, t, r, n, !0)
    }
    ;
    g.prototype.lastIndexOf = function(t, r, n) {
        return Ii(this, t, r, n, !1)
    }
    ;
    function de(i, t, r, n) {
        r = Number(r) || 0;
        let o = i.length - r;
        n ? (n = Number(n),
        n > o && (n = o)) : n = o;
        let s = t.length;
        n > s / 2 && (n = s / 2);
        let a;
        for (a = 0; a < n; ++a) {
            let M = parseInt(t.substr(a * 2, 2), 16);
            if (Cr(M))
                return a;
            i[r + a] = M
        }
        return a
    }
    function me(i, t, r, n) {
        return Qt(Tr(t, i.length - r), i, r, n)
    }
    function ye(i, t, r, n) {
        return Qt(Ue(t), i, r, n)
    }
    function we(i, t, r, n) {
        return Qt(Si(t), i, r, n)
    }
    function ge(i, t, r, n) {
        return Qt(be(t, i.length - r), i, r, n)
    }
    g.prototype.write = function(t, r, n, o) {
        if (r === void 0)
            o = "utf8",
            n = this.length,
            r = 0;
        else if (n === void 0 && typeof r == "string")
            o = r,
            n = this.length,
            r = 0;
        else if (isFinite(r))
            r = r >>> 0,
            isFinite(n) ? (n = n >>> 0,
            o === void 0 && (o = "utf8")) : (o = n,
            n = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let s = this.length - r;
        if ((n === void 0 || n > s) && (n = s),
        t.length > 0 && (n < 0 || r < 0) || r > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        o || (o = "utf8");
        let a = !1;
        for (; ; )
            switch (o) {
            case "hex":
                return de(this, t, r, n);
            case "utf8":
            case "utf-8":
                return me(this, t, r, n);
            case "ascii":
            case "latin1":
            case "binary":
                return ye(this, t, r, n);
            case "base64":
                return we(this, t, r, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return ge(this, t, r, n);
            default:
                if (a)
                    throw new TypeError("Unknown encoding: " + o);
                o = ("" + o).toLowerCase(),
                a = !0
            }
    }
    ;
    g.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    function xe(i, t, r) {
        return t === 0 && r === i.length ? Ur.fromByteArray(i) : Ur.fromByteArray(i.slice(t, r))
    }
    function Ai(i, t, r) {
        r = Math.min(i.length, r);
        let n = []
          , o = t;
        for (; o < r; ) {
            let s = i[o]
              , a = null
              , M = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
            if (o + M <= r) {
                let B, I, E, v;
                switch (M) {
                case 1:
                    s < 128 && (a = s);
                    break;
                case 2:
                    B = i[o + 1],
                    (B & 192) === 128 && (v = (s & 31) << 6 | B & 63,
                    v > 127 && (a = v));
                    break;
                case 3:
                    B = i[o + 1],
                    I = i[o + 2],
                    (B & 192) === 128 && (I & 192) === 128 && (v = (s & 15) << 12 | (B & 63) << 6 | I & 63,
                    v > 2047 && (v < 55296 || v > 57343) && (a = v));
                    break;
                case 4:
                    B = i[o + 1],
                    I = i[o + 2],
                    E = i[o + 3],
                    (B & 192) === 128 && (I & 192) === 128 && (E & 192) === 128 && (v = (s & 15) << 18 | (B & 63) << 12 | (I & 63) << 6 | E & 63,
                    v > 65535 && v < 1114112 && (a = v))
                }
            }
            a === null ? (a = 65533,
            M = 1) : a > 65535 && (a -= 65536,
            n.push(a >>> 10 & 1023 | 55296),
            a = 56320 | a & 1023),
            n.push(a),
            o += M
        }
        return Me(n)
    }
    var xi = 4096;
    function Me(i) {
        let t = i.length;
        if (t <= xi)
            return String.fromCharCode.apply(String, i);
        let r = ""
          , n = 0;
        for (; n < t; )
            r += String.fromCharCode.apply(String, i.slice(n, n += xi));
        return r
    }
    function ve(i, t, r) {
        let n = "";
        r = Math.min(i.length, r);
        for (let o = t; o < r; ++o)
            n += String.fromCharCode(i[o] & 127);
        return n
    }
    function Be(i, t, r) {
        let n = "";
        r = Math.min(i.length, r);
        for (let o = t; o < r; ++o)
            n += String.fromCharCode(i[o]);
        return n
    }
    function Ee(i, t, r) {
        let n = i.length;
        (!t || t < 0) && (t = 0),
        (!r || r < 0 || r > n) && (r = n);
        let o = "";
        for (let s = t; s < r; ++s)
            o += Re[i[s]];
        return o
    }
    function Ie(i, t, r) {
        let n = i.slice(t, r)
          , o = "";
        for (let s = 0; s < n.length - 1; s += 2)
            o += String.fromCharCode(n[s] + n[s + 1] * 256);
        return o
    }
    g.prototype.slice = function(t, r) {
        let n = this.length;
        t = ~~t,
        r = r === void 0 ? n : ~~r,
        t < 0 ? (t += n,
        t < 0 && (t = 0)) : t > n && (t = n),
        r < 0 ? (r += n,
        r < 0 && (r = 0)) : r > n && (r = n),
        r < t && (r = t);
        let o = this.subarray(t, r);
        return Object.setPrototypeOf(o, g.prototype),
        o
    }
    ;
    function dt(i, t, r) {
        if (i % 1 !== 0 || i < 0)
            throw new RangeError("offset is not uint");
        if (i + t > r)
            throw new RangeError("Trying to access beyond buffer length")
    }
    g.prototype.readUintLE = g.prototype.readUIntLE = function(t, r, n) {
        t = t >>> 0,
        r = r >>> 0,
        n || dt(t, r, this.length);
        let o = this[t]
          , s = 1
          , a = 0;
        for (; ++a < r && (s *= 256); )
            o += this[t + a] * s;
        return o
    }
    ;
    g.prototype.readUintBE = g.prototype.readUIntBE = function(t, r, n) {
        t = t >>> 0,
        r = r >>> 0,
        n || dt(t, r, this.length);
        let o = this[t + --r]
          , s = 1;
        for (; r > 0 && (s *= 256); )
            o += this[t + --r] * s;
        return o
    }
    ;
    g.prototype.readUint8 = g.prototype.readUInt8 = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 1, this.length),
        this[t]
    }
    ;
    g.prototype.readUint16LE = g.prototype.readUInt16LE = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 2, this.length),
        this[t] | this[t + 1] << 8
    }
    ;
    g.prototype.readUint16BE = g.prototype.readUInt16BE = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 2, this.length),
        this[t] << 8 | this[t + 1]
    }
    ;
    g.prototype.readUint32LE = g.prototype.readUInt32LE = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 4, this.length),
        (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216
    }
    ;
    g.prototype.readUint32BE = g.prototype.readUInt32BE = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 4, this.length),
        this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    }
    ;
    g.prototype.readBigUInt64LE = Rt(function(t) {
        t = t >>> 0,
        qt(t, "offset");
        let r = this[t]
          , n = this[t + 7];
        (r === void 0 || n === void 0) && Ht(t, this.length - 8);
        let o = r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24
          , s = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
        return BigInt(o) + (BigInt(s) << BigInt(32))
    });
    g.prototype.readBigUInt64BE = Rt(function(t) {
        t = t >>> 0,
        qt(t, "offset");
        let r = this[t]
          , n = this[t + 7];
        (r === void 0 || n === void 0) && Ht(t, this.length - 8);
        let o = r * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t]
          , s = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
        return (BigInt(o) << BigInt(32)) + BigInt(s)
    });
    g.prototype.readIntLE = function(t, r, n) {
        t = t >>> 0,
        r = r >>> 0,
        n || dt(t, r, this.length);
        let o = this[t]
          , s = 1
          , a = 0;
        for (; ++a < r && (s *= 256); )
            o += this[t + a] * s;
        return s *= 128,
        o >= s && (o -= Math.pow(2, 8 * r)),
        o
    }
    ;
    g.prototype.readIntBE = function(t, r, n) {
        t = t >>> 0,
        r = r >>> 0,
        n || dt(t, r, this.length);
        let o = r
          , s = 1
          , a = this[t + --o];
        for (; o > 0 && (s *= 256); )
            a += this[t + --o] * s;
        return s *= 128,
        a >= s && (a -= Math.pow(2, 8 * r)),
        a
    }
    ;
    g.prototype.readInt8 = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 1, this.length),
        this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    }
    ;
    g.prototype.readInt16LE = function(t, r) {
        t = t >>> 0,
        r || dt(t, 2, this.length);
        let n = this[t] | this[t + 1] << 8;
        return n & 32768 ? n | 4294901760 : n
    }
    ;
    g.prototype.readInt16BE = function(t, r) {
        t = t >>> 0,
        r || dt(t, 2, this.length);
        let n = this[t + 1] | this[t] << 8;
        return n & 32768 ? n | 4294901760 : n
    }
    ;
    g.prototype.readInt32LE = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 4, this.length),
        this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    }
    ;
    g.prototype.readInt32BE = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 4, this.length),
        this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    }
    ;
    g.prototype.readBigInt64LE = Rt(function(t) {
        t = t >>> 0,
        qt(t, "offset");
        let r = this[t]
          , n = this[t + 7];
        (r === void 0 || n === void 0) && Ht(t, this.length - 8);
        let o = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
        return (BigInt(o) << BigInt(32)) + BigInt(r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24)
    });
    g.prototype.readBigInt64BE = Rt(function(t) {
        t = t >>> 0,
        qt(t, "offset");
        let r = this[t]
          , n = this[t + 7];
        (r === void 0 || n === void 0) && Ht(t, this.length - 8);
        let o = (r << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
        return (BigInt(o) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n)
    });
    g.prototype.readFloatLE = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 4, this.length),
        Pt.read(this, t, !0, 23, 4)
    }
    ;
    g.prototype.readFloatBE = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 4, this.length),
        Pt.read(this, t, !1, 23, 4)
    }
    ;
    g.prototype.readDoubleLE = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 8, this.length),
        Pt.read(this, t, !0, 52, 8)
    }
    ;
    g.prototype.readDoubleBE = function(t, r) {
        return t = t >>> 0,
        r || dt(t, 8, this.length),
        Pt.read(this, t, !1, 52, 8)
    }
    ;
    function yt(i, t, r, n, o, s) {
        if (!g.isBuffer(i))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < s)
            throw new RangeError('"value" argument is out of bounds');
        if (r + n > i.length)
            throw new RangeError("Index out of range")
    }
    g.prototype.writeUintLE = g.prototype.writeUIntLE = function(t, r, n, o) {
        if (t = +t,
        r = r >>> 0,
        n = n >>> 0,
        !o) {
            let M = Math.pow(2, 8 * n) - 1;
            yt(this, t, r, n, M, 0)
        }
        let s = 1
          , a = 0;
        for (this[r] = t & 255; ++a < n && (s *= 256); )
            this[r + a] = t / s & 255;
        return r + n
    }
    ;
    g.prototype.writeUintBE = g.prototype.writeUIntBE = function(t, r, n, o) {
        if (t = +t,
        r = r >>> 0,
        n = n >>> 0,
        !o) {
            let M = Math.pow(2, 8 * n) - 1;
            yt(this, t, r, n, M, 0)
        }
        let s = n - 1
          , a = 1;
        for (this[r + s] = t & 255; --s >= 0 && (a *= 256); )
            this[r + s] = t / a & 255;
        return r + n
    }
    ;
    g.prototype.writeUint8 = g.prototype.writeUInt8 = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || yt(this, t, r, 1, 255, 0),
        this[r] = t & 255,
        r + 1
    }
    ;
    g.prototype.writeUint16LE = g.prototype.writeUInt16LE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || yt(this, t, r, 2, 65535, 0),
        this[r] = t & 255,
        this[r + 1] = t >>> 8,
        r + 2
    }
    ;
    g.prototype.writeUint16BE = g.prototype.writeUInt16BE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || yt(this, t, r, 2, 65535, 0),
        this[r] = t >>> 8,
        this[r + 1] = t & 255,
        r + 2
    }
    ;
    g.prototype.writeUint32LE = g.prototype.writeUInt32LE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || yt(this, t, r, 4, 4294967295, 0),
        this[r + 3] = t >>> 24,
        this[r + 2] = t >>> 16,
        this[r + 1] = t >>> 8,
        this[r] = t & 255,
        r + 4
    }
    ;
    g.prototype.writeUint32BE = g.prototype.writeUInt32BE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || yt(this, t, r, 4, 4294967295, 0),
        this[r] = t >>> 24,
        this[r + 1] = t >>> 16,
        this[r + 2] = t >>> 8,
        this[r + 3] = t & 255,
        r + 4
    }
    ;
    function Fi(i, t, r, n, o) {
        Ti(t, n, o, i, r, 7);
        let s = Number(t & BigInt(4294967295));
        i[r++] = s,
        s = s >> 8,
        i[r++] = s,
        s = s >> 8,
        i[r++] = s,
        s = s >> 8,
        i[r++] = s;
        let a = Number(t >> BigInt(32) & BigInt(4294967295));
        return i[r++] = a,
        a = a >> 8,
        i[r++] = a,
        a = a >> 8,
        i[r++] = a,
        a = a >> 8,
        i[r++] = a,
        r
    }
    function _i(i, t, r, n, o) {
        Ti(t, n, o, i, r, 7);
        let s = Number(t & BigInt(4294967295));
        i[r + 7] = s,
        s = s >> 8,
        i[r + 6] = s,
        s = s >> 8,
        i[r + 5] = s,
        s = s >> 8,
        i[r + 4] = s;
        let a = Number(t >> BigInt(32) & BigInt(4294967295));
        return i[r + 3] = a,
        a = a >> 8,
        i[r + 2] = a,
        a = a >> 8,
        i[r + 1] = a,
        a = a >> 8,
        i[r] = a,
        r + 8
    }
    g.prototype.writeBigUInt64LE = Rt(function(t, r=0) {
        return Fi(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    g.prototype.writeBigUInt64BE = Rt(function(t, r=0) {
        return _i(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    g.prototype.writeIntLE = function(t, r, n, o) {
        if (t = +t,
        r = r >>> 0,
        !o) {
            let B = Math.pow(2, 8 * n - 1);
            yt(this, t, r, n, B - 1, -B)
        }
        let s = 0
          , a = 1
          , M = 0;
        for (this[r] = t & 255; ++s < n && (a *= 256); )
            t < 0 && M === 0 && this[r + s - 1] !== 0 && (M = 1),
            this[r + s] = (t / a >> 0) - M & 255;
        return r + n
    }
    ;
    g.prototype.writeIntBE = function(t, r, n, o) {
        if (t = +t,
        r = r >>> 0,
        !o) {
            let B = Math.pow(2, 8 * n - 1);
            yt(this, t, r, n, B - 1, -B)
        }
        let s = n - 1
          , a = 1
          , M = 0;
        for (this[r + s] = t & 255; --s >= 0 && (a *= 256); )
            t < 0 && M === 0 && this[r + s + 1] !== 0 && (M = 1),
            this[r + s] = (t / a >> 0) - M & 255;
        return r + n
    }
    ;
    g.prototype.writeInt8 = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || yt(this, t, r, 1, 127, -128),
        t < 0 && (t = 255 + t + 1),
        this[r] = t & 255,
        r + 1
    }
    ;
    g.prototype.writeInt16LE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || yt(this, t, r, 2, 32767, -32768),
        this[r] = t & 255,
        this[r + 1] = t >>> 8,
        r + 2
    }
    ;
    g.prototype.writeInt16BE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || yt(this, t, r, 2, 32767, -32768),
        this[r] = t >>> 8,
        this[r + 1] = t & 255,
        r + 2
    }
    ;
    g.prototype.writeInt32LE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || yt(this, t, r, 4, 2147483647, -2147483648),
        this[r] = t & 255,
        this[r + 1] = t >>> 8,
        this[r + 2] = t >>> 16,
        this[r + 3] = t >>> 24,
        r + 4
    }
    ;
    g.prototype.writeInt32BE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || yt(this, t, r, 4, 2147483647, -2147483648),
        t < 0 && (t = 4294967295 + t + 1),
        this[r] = t >>> 24,
        this[r + 1] = t >>> 16,
        this[r + 2] = t >>> 8,
        this[r + 3] = t & 255,
        r + 4
    }
    ;
    g.prototype.writeBigInt64LE = Rt(function(t, r=0) {
        return Fi(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    g.prototype.writeBigInt64BE = Rt(function(t, r=0) {
        return _i(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    function Ui(i, t, r, n, o, s) {
        if (r + n > i.length)
            throw new RangeError("Index out of range");
        if (r < 0)
            throw new RangeError("Index out of range")
    }
    function bi(i, t, r, n, o) {
        return t = +t,
        r = r >>> 0,
        o || Ui(i, t, r, 4, 34028234663852886e22, -34028234663852886e22),
        Pt.write(i, t, r, n, 23, 4),
        r + 4
    }
    g.prototype.writeFloatLE = function(t, r, n) {
        return bi(this, t, r, !0, n)
    }
    ;
    g.prototype.writeFloatBE = function(t, r, n) {
        return bi(this, t, r, !1, n)
    }
    ;
    function Ri(i, t, r, n, o) {
        return t = +t,
        r = r >>> 0,
        o || Ui(i, t, r, 8, 17976931348623157e292, -17976931348623157e292),
        Pt.write(i, t, r, n, 52, 8),
        r + 8
    }
    g.prototype.writeDoubleLE = function(t, r, n) {
        return Ri(this, t, r, !0, n)
    }
    ;
    g.prototype.writeDoubleBE = function(t, r, n) {
        return Ri(this, t, r, !1, n)
    }
    ;
    g.prototype.copy = function(t, r, n, o) {
        if (!g.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
        if (n || (n = 0),
        !o && o !== 0 && (o = this.length),
        r >= t.length && (r = t.length),
        r || (r = 0),
        o > 0 && o < n && (o = n),
        o === n || t.length === 0 || this.length === 0)
            return 0;
        if (r < 0)
            throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length)
            throw new RangeError("Index out of range");
        if (o < 0)
            throw new RangeError("sourceEnd out of bounds");
        o > this.length && (o = this.length),
        t.length - r < o - n && (o = t.length - r + n);
        let s = o - n;
        return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, n, o) : Uint8Array.prototype.set.call(t, this.subarray(n, o), r),
        s
    }
    ;
    g.prototype.fill = function(t, r, n, o) {
        if (typeof t == "string") {
            if (typeof r == "string" ? (o = r,
            r = 0,
            n = this.length) : typeof n == "string" && (o = n,
            n = this.length),
            o !== void 0 && typeof o != "string")
                throw new TypeError("encoding must be a string");
            if (typeof o == "string" && !g.isEncoding(o))
                throw new TypeError("Unknown encoding: " + o);
            if (t.length === 1) {
                let a = t.charCodeAt(0);
                (o === "utf8" && a < 128 || o === "latin1") && (t = a)
            }
        } else
            typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
        if (r < 0 || this.length < r || this.length < n)
            throw new RangeError("Out of range index");
        if (n <= r)
            return this;
        r = r >>> 0,
        n = n === void 0 ? this.length : n >>> 0,
        t || (t = 0);
        let s;
        if (typeof t == "number")
            for (s = r; s < n; ++s)
                this[s] = t;
        else {
            let a = g.isBuffer(t) ? t : g.from(t, o)
              , M = a.length;
            if (M === 0)
                throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (s = 0; s < n - r; ++s)
                this[s + r] = a[s % M]
        }
        return this
    }
    ;
    var $t = {};
    function kr(i, t, r) {
        $t[i] = class extends r {
            constructor() {
                super(),
                Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }),
                this.name = `${this.name} [${i}]`,
                this.stack,
                delete this.name
            }
            get code() {
                return i
            }
            set code(o) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: o,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${i}]: ${this.message}`
            }
        }
    }
    kr("ERR_BUFFER_OUT_OF_BOUNDS", function(i) {
        return i ? `${i} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError);
    kr("ERR_INVALID_ARG_TYPE", function(i, t) {
        return `The "${i}" argument must be of type number. Received type ${typeof t}`
    }, TypeError);
    kr("ERR_OUT_OF_RANGE", function(i, t, r) {
        let n = `The value of "${i}" is out of range.`
          , o = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? o = Mi(String(r)) : typeof r == "bigint" && (o = String(r),
        (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (o = Mi(o)),
        o += "n"),
        n += ` It must be ${t}. Received ${o}`,
        n
    }, RangeError);
    function Mi(i) {
        let t = ""
          , r = i.length
          , n = i[0] === "-" ? 1 : 0;
        for (; r >= n + 4; r -= 3)
            t = `_${i.slice(r - 3, r)}${t}`;
        return `${i.slice(0, r)}${t}`
    }
    function Ae(i, t, r) {
        qt(t, "offset"),
        (i[t] === void 0 || i[t + r] === void 0) && Ht(t, i.length - (r + 1))
    }
    function Ti(i, t, r, n, o, s) {
        if (i > r || i < t) {
            let a = typeof t == "bigint" ? "n" : "", M;
            throw s > 3 ? t === 0 || t === BigInt(0) ? M = `>= 0${a} and < 2${a} ** ${(s + 1) * 8}${a}` : M = `>= -(2${a} ** ${(s + 1) * 8 - 1}${a}) and < 2 ** ${(s + 1) * 8 - 1}${a}` : M = `>= ${t}${a} and <= ${r}${a}`,
            new $t.ERR_OUT_OF_RANGE("value",M,i)
        }
        Ae(n, o, s)
    }
    function qt(i, t) {
        if (typeof i != "number")
            throw new $t.ERR_INVALID_ARG_TYPE(t,"number",i)
    }
    function Ht(i, t, r) {
        throw Math.floor(i) !== i ? (qt(i, r),
        new $t.ERR_OUT_OF_RANGE(r || "offset","an integer",i)) : t < 0 ? new $t.ERR_BUFFER_OUT_OF_BOUNDS : new $t.ERR_OUT_OF_RANGE(r || "offset",`>= ${r ? 1 : 0} and <= ${t}`,i)
    }
    var Fe = /[^+/0-9A-Za-z-_]/g;
    function _e(i) {
        if (i = i.split("=")[0],
        i = i.trim().replace(Fe, ""),
        i.length < 2)
            return "";
        for (; i.length % 4 !== 0; )
            i = i + "=";
        return i
    }
    function Tr(i, t) {
        t = t || 1 / 0;
        let r, n = i.length, o = null, s = [];
        for (let a = 0; a < n; ++a) {
            if (r = i.charCodeAt(a),
            r > 55295 && r < 57344) {
                if (!o) {
                    if (r > 56319) {
                        (t -= 3) > -1 && s.push(239, 191, 189);
                        continue
                    } else if (a + 1 === n) {
                        (t -= 3) > -1 && s.push(239, 191, 189);
                        continue
                    }
                    o = r;
                    continue
                }
                if (r < 56320) {
                    (t -= 3) > -1 && s.push(239, 191, 189),
                    o = r;
                    continue
                }
                r = (o - 55296 << 10 | r - 56320) + 65536
            } else
                o && (t -= 3) > -1 && s.push(239, 191, 189);
            if (o = null,
            r < 128) {
                if ((t -= 1) < 0)
                    break;
                s.push(r)
            } else if (r < 2048) {
                if ((t -= 2) < 0)
                    break;
                s.push(r >> 6 | 192, r & 63 | 128)
            } else if (r < 65536) {
                if ((t -= 3) < 0)
                    break;
                s.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128)
            } else if (r < 1114112) {
                if ((t -= 4) < 0)
                    break;
                s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return s
    }
    function Ue(i) {
        let t = [];
        for (let r = 0; r < i.length; ++r)
            t.push(i.charCodeAt(r) & 255);
        return t
    }
    function be(i, t) {
        let r, n, o, s = [];
        for (let a = 0; a < i.length && !((t -= 2) < 0); ++a)
            r = i.charCodeAt(a),
            n = r >> 8,
            o = r % 256,
            s.push(o),
            s.push(n);
        return s
    }
    function Si(i) {
        return Ur.toByteArray(_e(i))
    }
    function Qt(i, t, r, n) {
        let o;
        for (o = 0; o < n && !(o + r >= t.length || o >= i.length); ++o)
            t[o + r] = i[o];
        return o
    }
    function Et(i, t) {
        return i instanceof t || i != null && i.constructor != null && i.constructor.name != null && i.constructor.name === t.name
    }
    function Cr(i) {
        return i !== i
    }
    var Re = function() {
        let i = "0123456789abcdef"
          , t = new Array(256);
        for (let r = 0; r < 16; ++r) {
            let n = r * 16;
            for (let o = 0; o < 16; ++o)
                t[n + o] = i[r] + i[o]
        }
        return t
    }();
    function Rt(i) {
        return typeof BigInt > "u" ? Te : i
    }
    function Te() {
        throw new Error("BigInt not supported")
    }
}
);
var Xi = Dt(Yt => {
    "use strict";
    var Nr = Ar()
      , Gt = _r()
      , ki = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Yt.Buffer = x;
    Yt.SlowBuffer = De;
    Yt.INSPECT_MAX_BYTES = 50;
    var jt = 2147483647;
    Yt.kMaxLength = jt;
    x.TYPED_ARRAY_SUPPORT = Se();
    !x.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Se() {
        try {
            let i = new Uint8Array(1)
              , t = {
                foo: function() {
                    return 42
                }
            };
            return Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(i, t),
            i.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(x.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (x.isBuffer(this))
                return this.buffer
        }
    });
    Object.defineProperty(x.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (x.isBuffer(this))
                return this.byteOffset
        }
    });
    function _t(i) {
        if (i > jt)
            throw new RangeError('The value "' + i + '" is invalid for option "size"');
        let t = new Uint8Array(i);
        return Object.setPrototypeOf(t, x.prototype),
        t
    }
    function x(i, t, r) {
        if (typeof i == "number") {
            if (typeof t == "string")
                throw new TypeError('The "string" argument must be of type string. Received type number');
            return qr(i)
        }
        return $i(i, t, r)
    }
    x.poolSize = 8192;
    function $i(i, t, r) {
        if (typeof i == "string")
            return ke(i, t);
        if (ArrayBuffer.isView(i))
            return Ce(i);
        if (i == null)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
        if (It(i, ArrayBuffer) || i && It(i.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (It(i, SharedArrayBuffer) || i && It(i.buffer, SharedArrayBuffer)))
            return $r(i, t, r);
        if (typeof i == "number")
            throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = i.valueOf && i.valueOf();
        if (n != null && n !== i)
            return x.from(n, t, r);
        let o = Ne(i);
        if (o)
            return o;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof i[Symbol.toPrimitive] == "function")
            return x.from(i[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i)
    }
    x.from = function(i, t, r) {
        return $i(i, t, r)
    }
    ;
    Object.setPrototypeOf(x.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(x, Uint8Array);
    function Pi(i) {
        if (typeof i != "number")
            throw new TypeError('"size" argument must be of type number');
        if (i < 0)
            throw new RangeError('The value "' + i + '" is invalid for option "size"')
    }
    function Le(i, t, r) {
        return Pi(i),
        i <= 0 ? _t(i) : t !== void 0 ? typeof r == "string" ? _t(i).fill(t, r) : _t(i).fill(t) : _t(i)
    }
    x.alloc = function(i, t, r) {
        return Le(i, t, r)
    }
    ;
    function qr(i) {
        return Pi(i),
        _t(i < 0 ? 0 : Or(i) | 0)
    }
    x.allocUnsafe = function(i) {
        return qr(i)
    }
    ;
    x.allocUnsafeSlow = function(i) {
        return qr(i)
    }
    ;
    function ke(i, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"),
        !x.isEncoding(t))
            throw new TypeError("Unknown encoding: " + t);
        let r = qi(i, t) | 0
          , n = _t(r)
          , o = n.write(i, t);
        return o !== r && (n = n.slice(0, o)),
        n
    }
    function Dr(i) {
        let t = i.length < 0 ? 0 : Or(i.length) | 0
          , r = _t(t);
        for (let n = 0; n < t; n += 1)
            r[n] = i[n] & 255;
        return r
    }
    function Ce(i) {
        if (It(i, Uint8Array)) {
            let t = new Uint8Array(i);
            return $r(t.buffer, t.byteOffset, t.byteLength)
        }
        return Dr(i)
    }
    function $r(i, t, r) {
        if (t < 0 || i.byteLength < t)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (i.byteLength < t + (r || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && r === void 0 ? n = new Uint8Array(i) : r === void 0 ? n = new Uint8Array(i,t) : n = new Uint8Array(i,t,r),
        Object.setPrototypeOf(n, x.prototype),
        n
    }
    function Ne(i) {
        if (x.isBuffer(i)) {
            let t = Or(i.length) | 0
              , r = _t(t);
            return r.length === 0 || i.copy(r, 0, 0, t),
            r
        }
        if (i.length !== void 0)
            return typeof i.length != "number" || Gr(i.length) ? _t(0) : Dr(i);
        if (i.type === "Buffer" && Array.isArray(i.data))
            return Dr(i.data)
    }
    function Or(i) {
        if (i >= jt)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + jt.toString(16) + " bytes");
        return i | 0
    }
    function De(i) {
        return +i != i && (i = 0),
        x.alloc(+i)
    }
    x.isBuffer = function(t) {
        return t != null && t._isBuffer === !0 && t !== x.prototype
    }
    ;
    x.compare = function(t, r) {
        if (It(t, Uint8Array) && (t = x.from(t, t.offset, t.byteLength)),
        It(r, Uint8Array) && (r = x.from(r, r.offset, r.byteLength)),
        !x.isBuffer(t) || !x.isBuffer(r))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === r)
            return 0;
        let n = t.length
          , o = r.length;
        for (let s = 0, a = Math.min(n, o); s < a; ++s)
            if (t[s] !== r[s]) {
                n = t[s],
                o = r[s];
                break
            }
        return n < o ? -1 : o < n ? 1 : 0
    }
    ;
    x.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ;
    x.concat = function(t, r) {
        if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (t.length === 0)
            return x.alloc(0);
        let n;
        if (r === void 0)
            for (r = 0,
            n = 0; n < t.length; ++n)
                r += t[n].length;
        let o = x.allocUnsafe(r)
          , s = 0;
        for (n = 0; n < t.length; ++n) {
            let a = t[n];
            if (It(a, Uint8Array))
                s + a.length > o.length ? (x.isBuffer(a) || (a = x.from(a)),
                a.copy(o, s)) : Uint8Array.prototype.set.call(o, a, s);
            else if (x.isBuffer(a))
                a.copy(o, s);
            else
                throw new TypeError('"list" argument must be an Array of Buffers');
            s += a.length
        }
        return o
    }
    ;
    function qi(i, t) {
        if (x.isBuffer(i))
            return i.length;
        if (ArrayBuffer.isView(i) || It(i, ArrayBuffer))
            return i.byteLength;
        if (typeof i != "string")
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i);
        let r = i.length
          , n = arguments.length > 2 && arguments[2] === !0;
        if (!n && r === 0)
            return 0;
        let o = !1;
        for (; ; )
            switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
                return Pr(i).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return r * 2;
            case "hex":
                return r >>> 1;
            case "base64":
                return Vi(i).length;
            default:
                if (o)
                    return n ? -1 : Pr(i).length;
                t = ("" + t).toLowerCase(),
                o = !0
            }
    }
    x.byteLength = qi;
    function $e(i, t, r) {
        let n = !1;
        if ((t === void 0 || t < 0) && (t = 0),
        t > this.length || ((r === void 0 || r > this.length) && (r = this.length),
        r <= 0) || (r >>>= 0,
        t >>>= 0,
        r <= t))
            return "";
        for (i || (i = "utf8"); ; )
            switch (i) {
            case "hex":
                return Ke(this, t, r);
            case "utf8":
            case "utf-8":
                return Zi(this, t, r);
            case "ascii":
                return We(this, t, r);
            case "latin1":
            case "binary":
                return He(this, t, r);
            case "base64":
                return ze(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Ve(this, t, r);
            default:
                if (n)
                    throw new TypeError("Unknown encoding: " + i);
                i = (i + "").toLowerCase(),
                n = !0
            }
    }
    x.prototype._isBuffer = !0;
    function Ct(i, t, r) {
        let n = i[t];
        i[t] = i[r],
        i[r] = n
    }
    x.prototype.swap16 = function() {
        let t = this.length;
        if (t % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let r = 0; r < t; r += 2)
            Ct(this, r, r + 1);
        return this
    }
    ;
    x.prototype.swap32 = function() {
        let t = this.length;
        if (t % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let r = 0; r < t; r += 4)
            Ct(this, r, r + 3),
            Ct(this, r + 1, r + 2);
        return this
    }
    ;
    x.prototype.swap64 = function() {
        let t = this.length;
        if (t % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let r = 0; r < t; r += 8)
            Ct(this, r, r + 7),
            Ct(this, r + 1, r + 6),
            Ct(this, r + 2, r + 5),
            Ct(this, r + 3, r + 4);
        return this
    }
    ;
    x.prototype.toString = function() {
        let t = this.length;
        return t === 0 ? "" : arguments.length === 0 ? Zi(this, 0, t) : $e.apply(this, arguments)
    }
    ;
    x.prototype.toLocaleString = x.prototype.toString;
    x.prototype.equals = function(t) {
        if (!x.isBuffer(t))
            throw new TypeError("Argument must be a Buffer");
        return this === t ? !0 : x.compare(this, t) === 0
    }
    ;
    x.prototype.inspect = function() {
        let t = ""
          , r = Yt.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(),
        this.length > r && (t += " ... "),
        "<Buffer " + t + ">"
    }
    ;
    ki && (x.prototype[ki] = x.prototype.inspect);
    x.prototype.compare = function(t, r, n, o, s) {
        if (It(t, Uint8Array) && (t = x.from(t, t.offset, t.byteLength)),
        !x.isBuffer(t))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (r === void 0 && (r = 0),
        n === void 0 && (n = t ? t.length : 0),
        o === void 0 && (o = 0),
        s === void 0 && (s = this.length),
        r < 0 || n > t.length || o < 0 || s > this.length)
            throw new RangeError("out of range index");
        if (o >= s && r >= n)
            return 0;
        if (o >= s)
            return -1;
        if (r >= n)
            return 1;
        if (r >>>= 0,
        n >>>= 0,
        o >>>= 0,
        s >>>= 0,
        this === t)
            return 0;
        let a = s - o
          , M = n - r
          , B = Math.min(a, M)
          , I = this.slice(o, s)
          , E = t.slice(r, n);
        for (let v = 0; v < B; ++v)
            if (I[v] !== E[v]) {
                a = I[v],
                M = E[v];
                break
            }
        return a < M ? -1 : M < a ? 1 : 0
    }
    ;
    function Oi(i, t, r, n, o) {
        if (i.length === 0)
            return -1;
        if (typeof r == "string" ? (n = r,
        r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
        r = +r,
        Gr(r) && (r = o ? 0 : i.length - 1),
        r < 0 && (r = i.length + r),
        r >= i.length) {
            if (o)
                return -1;
            r = i.length - 1
        } else if (r < 0)
            if (o)
                r = 0;
            else
                return -1;
        if (typeof t == "string" && (t = x.from(t, n)),
        x.isBuffer(t))
            return t.length === 0 ? -1 : Ci(i, t, r, n, o);
        if (typeof t == "number")
            return t = t & 255,
            typeof Uint8Array.prototype.indexOf == "function" ? o ? Uint8Array.prototype.indexOf.call(i, t, r) : Uint8Array.prototype.lastIndexOf.call(i, t, r) : Ci(i, [t], r, n, o);
        throw new TypeError("val must be string, number or Buffer")
    }
    function Ci(i, t, r, n, o) {
        let s = 1
          , a = i.length
          , M = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(),
        n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
            if (i.length < 2 || t.length < 2)
                return -1;
            s = 2,
            a /= 2,
            M /= 2,
            r /= 2
        }
        function B(E, v) {
            return s === 1 ? E[v] : E.readUInt16BE(v * s)
        }
        let I;
        if (o) {
            let E = -1;
            for (I = r; I < a; I++)
                if (B(i, I) === B(t, E === -1 ? 0 : I - E)) {
                    if (E === -1 && (E = I),
                    I - E + 1 === M)
                        return E * s
                } else
                    E !== -1 && (I -= I - E),
                    E = -1
        } else
            for (r + M > a && (r = a - M),
            I = r; I >= 0; I--) {
                let E = !0;
                for (let v = 0; v < M; v++)
                    if (B(i, I + v) !== B(t, v)) {
                        E = !1;
                        break
                    }
                if (E)
                    return I
            }
        return -1
    }
    x.prototype.includes = function(t, r, n) {
        return this.indexOf(t, r, n) !== -1
    }
    ;
    x.prototype.indexOf = function(t, r, n) {
        return Oi(this, t, r, n, !0)
    }
    ;
    x.prototype.lastIndexOf = function(t, r, n) {
        return Oi(this, t, r, n, !1)
    }
    ;
    function Pe(i, t, r, n) {
        r = Number(r) || 0;
        let o = i.length - r;
        n ? (n = Number(n),
        n > o && (n = o)) : n = o;
        let s = t.length;
        n > s / 2 && (n = s / 2);
        let a;
        for (a = 0; a < n; ++a) {
            let M = parseInt(t.substr(a * 2, 2), 16);
            if (Gr(M))
                return a;
            i[r + a] = M
        }
        return a
    }
    function qe(i, t, r, n) {
        return tr(Pr(t, i.length - r), i, r, n)
    }
    function Oe(i, t, r, n) {
        return tr(je(t), i, r, n)
    }
    function Ze(i, t, r, n) {
        return tr(Vi(t), i, r, n)
    }
    function Ge(i, t, r, n) {
        return tr(tn(t, i.length - r), i, r, n)
    }
    x.prototype.write = function(t, r, n, o) {
        if (r === void 0)
            o = "utf8",
            n = this.length,
            r = 0;
        else if (n === void 0 && typeof r == "string")
            o = r,
            n = this.length,
            r = 0;
        else if (isFinite(r))
            r = r >>> 0,
            isFinite(n) ? (n = n >>> 0,
            o === void 0 && (o = "utf8")) : (o = n,
            n = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let s = this.length - r;
        if ((n === void 0 || n > s) && (n = s),
        t.length > 0 && (n < 0 || r < 0) || r > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        o || (o = "utf8");
        let a = !1;
        for (; ; )
            switch (o) {
            case "hex":
                return Pe(this, t, r, n);
            case "utf8":
            case "utf-8":
                return qe(this, t, r, n);
            case "ascii":
            case "latin1":
            case "binary":
                return Oe(this, t, r, n);
            case "base64":
                return Ze(this, t, r, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Ge(this, t, r, n);
            default:
                if (a)
                    throw new TypeError("Unknown encoding: " + o);
                o = ("" + o).toLowerCase(),
                a = !0
            }
    }
    ;
    x.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    function ze(i, t, r) {
        return t === 0 && r === i.length ? Nr.fromByteArray(i) : Nr.fromByteArray(i.slice(t, r))
    }
    function Zi(i, t, r) {
        r = Math.min(i.length, r);
        let n = []
          , o = t;
        for (; o < r; ) {
            let s = i[o]
              , a = null
              , M = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
            if (o + M <= r) {
                let B, I, E, v;
                switch (M) {
                case 1:
                    s < 128 && (a = s);
                    break;
                case 2:
                    B = i[o + 1],
                    (B & 192) === 128 && (v = (s & 31) << 6 | B & 63,
                    v > 127 && (a = v));
                    break;
                case 3:
                    B = i[o + 1],
                    I = i[o + 2],
                    (B & 192) === 128 && (I & 192) === 128 && (v = (s & 15) << 12 | (B & 63) << 6 | I & 63,
                    v > 2047 && (v < 55296 || v > 57343) && (a = v));
                    break;
                case 4:
                    B = i[o + 1],
                    I = i[o + 2],
                    E = i[o + 3],
                    (B & 192) === 128 && (I & 192) === 128 && (E & 192) === 128 && (v = (s & 15) << 18 | (B & 63) << 12 | (I & 63) << 6 | E & 63,
                    v > 65535 && v < 1114112 && (a = v))
                }
            }
            a === null ? (a = 65533,
            M = 1) : a > 65535 && (a -= 65536,
            n.push(a >>> 10 & 1023 | 55296),
            a = 56320 | a & 1023),
            n.push(a),
            o += M
        }
        return Ye(n)
    }
    var Ni = 4096;
    function Ye(i) {
        let t = i.length;
        if (t <= Ni)
            return String.fromCharCode.apply(String, i);
        let r = ""
          , n = 0;
        for (; n < t; )
            r += String.fromCharCode.apply(String, i.slice(n, n += Ni));
        return r
    }
    function We(i, t, r) {
        let n = "";
        r = Math.min(i.length, r);
        for (let o = t; o < r; ++o)
            n += String.fromCharCode(i[o] & 127);
        return n
    }
    function He(i, t, r) {
        let n = "";
        r = Math.min(i.length, r);
        for (let o = t; o < r; ++o)
            n += String.fromCharCode(i[o]);
        return n
    }
    function Ke(i, t, r) {
        let n = i.length;
        (!t || t < 0) && (t = 0),
        (!r || r < 0 || r > n) && (r = n);
        let o = "";
        for (let s = t; s < r; ++s)
            o += rn[i[s]];
        return o
    }
    function Ve(i, t, r) {
        let n = i.slice(t, r)
          , o = "";
        for (let s = 0; s < n.length - 1; s += 2)
            o += String.fromCharCode(n[s] + n[s + 1] * 256);
        return o
    }
    x.prototype.slice = function(t, r) {
        let n = this.length;
        t = ~~t,
        r = r === void 0 ? n : ~~r,
        t < 0 ? (t += n,
        t < 0 && (t = 0)) : t > n && (t = n),
        r < 0 ? (r += n,
        r < 0 && (r = 0)) : r > n && (r = n),
        r < t && (r = t);
        let o = this.subarray(t, r);
        return Object.setPrototypeOf(o, x.prototype),
        o
    }
    ;
    function mt(i, t, r) {
        if (i % 1 !== 0 || i < 0)
            throw new RangeError("offset is not uint");
        if (i + t > r)
            throw new RangeError("Trying to access beyond buffer length")
    }
    x.prototype.readUintLE = x.prototype.readUIntLE = function(t, r, n) {
        t = t >>> 0,
        r = r >>> 0,
        n || mt(t, r, this.length);
        let o = this[t]
          , s = 1
          , a = 0;
        for (; ++a < r && (s *= 256); )
            o += this[t + a] * s;
        return o
    }
    ;
    x.prototype.readUintBE = x.prototype.readUIntBE = function(t, r, n) {
        t = t >>> 0,
        r = r >>> 0,
        n || mt(t, r, this.length);
        let o = this[t + --r]
          , s = 1;
        for (; r > 0 && (s *= 256); )
            o += this[t + --r] * s;
        return o
    }
    ;
    x.prototype.readUint8 = x.prototype.readUInt8 = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 1, this.length),
        this[t]
    }
    ;
    x.prototype.readUint16LE = x.prototype.readUInt16LE = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 2, this.length),
        this[t] | this[t + 1] << 8
    }
    ;
    x.prototype.readUint16BE = x.prototype.readUInt16BE = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 2, this.length),
        this[t] << 8 | this[t + 1]
    }
    ;
    x.prototype.readUint32LE = x.prototype.readUInt32LE = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 4, this.length),
        (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216
    }
    ;
    x.prototype.readUint32BE = x.prototype.readUInt32BE = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 4, this.length),
        this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    }
    ;
    x.prototype.readBigUInt64LE = Tt(function(t) {
        t = t >>> 0,
        zt(t, "offset");
        let r = this[t]
          , n = this[t + 7];
        (r === void 0 || n === void 0) && Kt(t, this.length - 8);
        let o = r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24
          , s = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
        return BigInt(o) + (BigInt(s) << BigInt(32))
    });
    x.prototype.readBigUInt64BE = Tt(function(t) {
        t = t >>> 0,
        zt(t, "offset");
        let r = this[t]
          , n = this[t + 7];
        (r === void 0 || n === void 0) && Kt(t, this.length - 8);
        let o = r * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t]
          , s = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
        return (BigInt(o) << BigInt(32)) + BigInt(s)
    });
    x.prototype.readIntLE = function(t, r, n) {
        t = t >>> 0,
        r = r >>> 0,
        n || mt(t, r, this.length);
        let o = this[t]
          , s = 1
          , a = 0;
        for (; ++a < r && (s *= 256); )
            o += this[t + a] * s;
        return s *= 128,
        o >= s && (o -= Math.pow(2, 8 * r)),
        o
    }
    ;
    x.prototype.readIntBE = function(t, r, n) {
        t = t >>> 0,
        r = r >>> 0,
        n || mt(t, r, this.length);
        let o = r
          , s = 1
          , a = this[t + --o];
        for (; o > 0 && (s *= 256); )
            a += this[t + --o] * s;
        return s *= 128,
        a >= s && (a -= Math.pow(2, 8 * r)),
        a
    }
    ;
    x.prototype.readInt8 = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 1, this.length),
        this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    }
    ;
    x.prototype.readInt16LE = function(t, r) {
        t = t >>> 0,
        r || mt(t, 2, this.length);
        let n = this[t] | this[t + 1] << 8;
        return n & 32768 ? n | 4294901760 : n
    }
    ;
    x.prototype.readInt16BE = function(t, r) {
        t = t >>> 0,
        r || mt(t, 2, this.length);
        let n = this[t + 1] | this[t] << 8;
        return n & 32768 ? n | 4294901760 : n
    }
    ;
    x.prototype.readInt32LE = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 4, this.length),
        this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    }
    ;
    x.prototype.readInt32BE = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 4, this.length),
        this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    }
    ;
    x.prototype.readBigInt64LE = Tt(function(t) {
        t = t >>> 0,
        zt(t, "offset");
        let r = this[t]
          , n = this[t + 7];
        (r === void 0 || n === void 0) && Kt(t, this.length - 8);
        let o = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
        return (BigInt(o) << BigInt(32)) + BigInt(r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24)
    });
    x.prototype.readBigInt64BE = Tt(function(t) {
        t = t >>> 0,
        zt(t, "offset");
        let r = this[t]
          , n = this[t + 7];
        (r === void 0 || n === void 0) && Kt(t, this.length - 8);
        let o = (r << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
        return (BigInt(o) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n)
    });
    x.prototype.readFloatLE = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 4, this.length),
        Gt.read(this, t, !0, 23, 4)
    }
    ;
    x.prototype.readFloatBE = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 4, this.length),
        Gt.read(this, t, !1, 23, 4)
    }
    ;
    x.prototype.readDoubleLE = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 8, this.length),
        Gt.read(this, t, !0, 52, 8)
    }
    ;
    x.prototype.readDoubleBE = function(t, r) {
        return t = t >>> 0,
        r || mt(t, 8, this.length),
        Gt.read(this, t, !1, 52, 8)
    }
    ;
    function wt(i, t, r, n, o, s) {
        if (!x.isBuffer(i))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < s)
            throw new RangeError('"value" argument is out of bounds');
        if (r + n > i.length)
            throw new RangeError("Index out of range")
    }
    x.prototype.writeUintLE = x.prototype.writeUIntLE = function(t, r, n, o) {
        if (t = +t,
        r = r >>> 0,
        n = n >>> 0,
        !o) {
            let M = Math.pow(2, 8 * n) - 1;
            wt(this, t, r, n, M, 0)
        }
        let s = 1
          , a = 0;
        for (this[r] = t & 255; ++a < n && (s *= 256); )
            this[r + a] = t / s & 255;
        return r + n
    }
    ;
    x.prototype.writeUintBE = x.prototype.writeUIntBE = function(t, r, n, o) {
        if (t = +t,
        r = r >>> 0,
        n = n >>> 0,
        !o) {
            let M = Math.pow(2, 8 * n) - 1;
            wt(this, t, r, n, M, 0)
        }
        let s = n - 1
          , a = 1;
        for (this[r + s] = t & 255; --s >= 0 && (a *= 256); )
            this[r + s] = t / a & 255;
        return r + n
    }
    ;
    x.prototype.writeUint8 = x.prototype.writeUInt8 = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || wt(this, t, r, 1, 255, 0),
        this[r] = t & 255,
        r + 1
    }
    ;
    x.prototype.writeUint16LE = x.prototype.writeUInt16LE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || wt(this, t, r, 2, 65535, 0),
        this[r] = t & 255,
        this[r + 1] = t >>> 8,
        r + 2
    }
    ;
    x.prototype.writeUint16BE = x.prototype.writeUInt16BE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || wt(this, t, r, 2, 65535, 0),
        this[r] = t >>> 8,
        this[r + 1] = t & 255,
        r + 2
    }
    ;
    x.prototype.writeUint32LE = x.prototype.writeUInt32LE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || wt(this, t, r, 4, 4294967295, 0),
        this[r + 3] = t >>> 24,
        this[r + 2] = t >>> 16,
        this[r + 1] = t >>> 8,
        this[r] = t & 255,
        r + 4
    }
    ;
    x.prototype.writeUint32BE = x.prototype.writeUInt32BE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || wt(this, t, r, 4, 4294967295, 0),
        this[r] = t >>> 24,
        this[r + 1] = t >>> 16,
        this[r + 2] = t >>> 8,
        this[r + 3] = t & 255,
        r + 4
    }
    ;
    function Gi(i, t, r, n, o) {
        Ki(t, n, o, i, r, 7);
        let s = Number(t & BigInt(4294967295));
        i[r++] = s,
        s = s >> 8,
        i[r++] = s,
        s = s >> 8,
        i[r++] = s,
        s = s >> 8,
        i[r++] = s;
        let a = Number(t >> BigInt(32) & BigInt(4294967295));
        return i[r++] = a,
        a = a >> 8,
        i[r++] = a,
        a = a >> 8,
        i[r++] = a,
        a = a >> 8,
        i[r++] = a,
        r
    }
    function zi(i, t, r, n, o) {
        Ki(t, n, o, i, r, 7);
        let s = Number(t & BigInt(4294967295));
        i[r + 7] = s,
        s = s >> 8,
        i[r + 6] = s,
        s = s >> 8,
        i[r + 5] = s,
        s = s >> 8,
        i[r + 4] = s;
        let a = Number(t >> BigInt(32) & BigInt(4294967295));
        return i[r + 3] = a,
        a = a >> 8,
        i[r + 2] = a,
        a = a >> 8,
        i[r + 1] = a,
        a = a >> 8,
        i[r] = a,
        r + 8
    }
    x.prototype.writeBigUInt64LE = Tt(function(t, r=0) {
        return Gi(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    x.prototype.writeBigUInt64BE = Tt(function(t, r=0) {
        return zi(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    x.prototype.writeIntLE = function(t, r, n, o) {
        if (t = +t,
        r = r >>> 0,
        !o) {
            let B = Math.pow(2, 8 * n - 1);
            wt(this, t, r, n, B - 1, -B)
        }
        let s = 0
          , a = 1
          , M = 0;
        for (this[r] = t & 255; ++s < n && (a *= 256); )
            t < 0 && M === 0 && this[r + s - 1] !== 0 && (M = 1),
            this[r + s] = (t / a >> 0) - M & 255;
        return r + n
    }
    ;
    x.prototype.writeIntBE = function(t, r, n, o) {
        if (t = +t,
        r = r >>> 0,
        !o) {
            let B = Math.pow(2, 8 * n - 1);
            wt(this, t, r, n, B - 1, -B)
        }
        let s = n - 1
          , a = 1
          , M = 0;
        for (this[r + s] = t & 255; --s >= 0 && (a *= 256); )
            t < 0 && M === 0 && this[r + s + 1] !== 0 && (M = 1),
            this[r + s] = (t / a >> 0) - M & 255;
        return r + n
    }
    ;
    x.prototype.writeInt8 = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || wt(this, t, r, 1, 127, -128),
        t < 0 && (t = 255 + t + 1),
        this[r] = t & 255,
        r + 1
    }
    ;
    x.prototype.writeInt16LE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || wt(this, t, r, 2, 32767, -32768),
        this[r] = t & 255,
        this[r + 1] = t >>> 8,
        r + 2
    }
    ;
    x.prototype.writeInt16BE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || wt(this, t, r, 2, 32767, -32768),
        this[r] = t >>> 8,
        this[r + 1] = t & 255,
        r + 2
    }
    ;
    x.prototype.writeInt32LE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || wt(this, t, r, 4, 2147483647, -2147483648),
        this[r] = t & 255,
        this[r + 1] = t >>> 8,
        this[r + 2] = t >>> 16,
        this[r + 3] = t >>> 24,
        r + 4
    }
    ;
    x.prototype.writeInt32BE = function(t, r, n) {
        return t = +t,
        r = r >>> 0,
        n || wt(this, t, r, 4, 2147483647, -2147483648),
        t < 0 && (t = 4294967295 + t + 1),
        this[r] = t >>> 24,
        this[r + 1] = t >>> 16,
        this[r + 2] = t >>> 8,
        this[r + 3] = t & 255,
        r + 4
    }
    ;
    x.prototype.writeBigInt64LE = Tt(function(t, r=0) {
        return Gi(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    x.prototype.writeBigInt64BE = Tt(function(t, r=0) {
        return zi(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    function Yi(i, t, r, n, o, s) {
        if (r + n > i.length)
            throw new RangeError("Index out of range");
        if (r < 0)
            throw new RangeError("Index out of range")
    }
    function Wi(i, t, r, n, o) {
        return t = +t,
        r = r >>> 0,
        o || Yi(i, t, r, 4, 34028234663852886e22, -34028234663852886e22),
        Gt.write(i, t, r, n, 23, 4),
        r + 4
    }
    x.prototype.writeFloatLE = function(t, r, n) {
        return Wi(this, t, r, !0, n)
    }
    ;
    x.prototype.writeFloatBE = function(t, r, n) {
        return Wi(this, t, r, !1, n)
    }
    ;
    function Hi(i, t, r, n, o) {
        return t = +t,
        r = r >>> 0,
        o || Yi(i, t, r, 8, 17976931348623157e292, -17976931348623157e292),
        Gt.write(i, t, r, n, 52, 8),
        r + 8
    }
    x.prototype.writeDoubleLE = function(t, r, n) {
        return Hi(this, t, r, !0, n)
    }
    ;
    x.prototype.writeDoubleBE = function(t, r, n) {
        return Hi(this, t, r, !1, n)
    }
    ;
    x.prototype.copy = function(t, r, n, o) {
        if (!x.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
        if (n || (n = 0),
        !o && o !== 0 && (o = this.length),
        r >= t.length && (r = t.length),
        r || (r = 0),
        o > 0 && o < n && (o = n),
        o === n || t.length === 0 || this.length === 0)
            return 0;
        if (r < 0)
            throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length)
            throw new RangeError("Index out of range");
        if (o < 0)
            throw new RangeError("sourceEnd out of bounds");
        o > this.length && (o = this.length),
        t.length - r < o - n && (o = t.length - r + n);
        let s = o - n;
        return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, n, o) : Uint8Array.prototype.set.call(t, this.subarray(n, o), r),
        s
    }
    ;
    x.prototype.fill = function(t, r, n, o) {
        if (typeof t == "string") {
            if (typeof r == "string" ? (o = r,
            r = 0,
            n = this.length) : typeof n == "string" && (o = n,
            n = this.length),
            o !== void 0 && typeof o != "string")
                throw new TypeError("encoding must be a string");
            if (typeof o == "string" && !x.isEncoding(o))
                throw new TypeError("Unknown encoding: " + o);
            if (t.length === 1) {
                let a = t.charCodeAt(0);
                (o === "utf8" && a < 128 || o === "latin1") && (t = a)
            }
        } else
            typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
        if (r < 0 || this.length < r || this.length < n)
            throw new RangeError("Out of range index");
        if (n <= r)
            return this;
        r = r >>> 0,
        n = n === void 0 ? this.length : n >>> 0,
        t || (t = 0);
        let s;
        if (typeof t == "number")
            for (s = r; s < n; ++s)
                this[s] = t;
        else {
            let a = x.isBuffer(t) ? t : x.from(t, o)
              , M = a.length;
            if (M === 0)
                throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (s = 0; s < n - r; ++s)
                this[s + r] = a[s % M]
        }
        return this
    }
    ;
    var Zt = {};
    function Zr(i, t, r) {
        Zt[i] = class extends r {
            constructor() {
                super(),
                Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }),
                this.name = `${this.name} [${i}]`,
                this.stack,
                delete this.name
            }
            get code() {
                return i
            }
            set code(o) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: o,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${i}]: ${this.message}`
            }
        }
    }
    Zr("ERR_BUFFER_OUT_OF_BOUNDS", function(i) {
        return i ? `${i} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError);
    Zr("ERR_INVALID_ARG_TYPE", function(i, t) {
        return `The "${i}" argument must be of type number. Received type ${typeof t}`
    }, TypeError);
    Zr("ERR_OUT_OF_RANGE", function(i, t, r) {
        let n = `The value of "${i}" is out of range.`
          , o = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? o = Di(String(r)) : typeof r == "bigint" && (o = String(r),
        (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (o = Di(o)),
        o += "n"),
        n += ` It must be ${t}. Received ${o}`,
        n
    }, RangeError);
    function Di(i) {
        let t = ""
          , r = i.length
          , n = i[0] === "-" ? 1 : 0;
        for (; r >= n + 4; r -= 3)
            t = `_${i.slice(r - 3, r)}${t}`;
        return `${i.slice(0, r)}${t}`
    }
    function Xe(i, t, r) {
        zt(t, "offset"),
        (i[t] === void 0 || i[t + r] === void 0) && Kt(t, i.length - (r + 1))
    }
    function Ki(i, t, r, n, o, s) {
        if (i > r || i < t) {
            let a = typeof t == "bigint" ? "n" : "", M;
            throw s > 3 ? t === 0 || t === BigInt(0) ? M = `>= 0${a} and < 2${a} ** ${(s + 1) * 8}${a}` : M = `>= -(2${a} ** ${(s + 1) * 8 - 1}${a}) and < 2 ** ${(s + 1) * 8 - 1}${a}` : M = `>= ${t}${a} and <= ${r}${a}`,
            new Zt.ERR_OUT_OF_RANGE("value",M,i)
        }
        Xe(n, o, s)
    }
    function zt(i, t) {
        if (typeof i != "number")
            throw new Zt.ERR_INVALID_ARG_TYPE(t,"number",i)
    }
    function Kt(i, t, r) {
        throw Math.floor(i) !== i ? (zt(i, r),
        new Zt.ERR_OUT_OF_RANGE(r || "offset","an integer",i)) : t < 0 ? new Zt.ERR_BUFFER_OUT_OF_BOUNDS : new Zt.ERR_OUT_OF_RANGE(r || "offset",`>= ${r ? 1 : 0} and <= ${t}`,i)
    }
    var Je = /[^+/0-9A-Za-z-_]/g;
    function Qe(i) {
        if (i = i.split("=")[0],
        i = i.trim().replace(Je, ""),
        i.length < 2)
            return "";
        for (; i.length % 4 !== 0; )
            i = i + "=";
        return i
    }
    function Pr(i, t) {
        t = t || 1 / 0;
        let r, n = i.length, o = null, s = [];
        for (let a = 0; a < n; ++a) {
            if (r = i.charCodeAt(a),
            r > 55295 && r < 57344) {
                if (!o) {
                    if (r > 56319) {
                        (t -= 3) > -1 && s.push(239, 191, 189);
                        continue
                    } else if (a + 1 === n) {
                        (t -= 3) > -1 && s.push(239, 191, 189);
                        continue
                    }
                    o = r;
                    continue
                }
                if (r < 56320) {
                    (t -= 3) > -1 && s.push(239, 191, 189),
                    o = r;
                    continue
                }
                r = (o - 55296 << 10 | r - 56320) + 65536
            } else
                o && (t -= 3) > -1 && s.push(239, 191, 189);
            if (o = null,
            r < 128) {
                if ((t -= 1) < 0)
                    break;
                s.push(r)
            } else if (r < 2048) {
                if ((t -= 2) < 0)
                    break;
                s.push(r >> 6 | 192, r & 63 | 128)
            } else if (r < 65536) {
                if ((t -= 3) < 0)
                    break;
                s.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128)
            } else if (r < 1114112) {
                if ((t -= 4) < 0)
                    break;
                s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return s
    }
    function je(i) {
        let t = [];
        for (let r = 0; r < i.length; ++r)
            t.push(i.charCodeAt(r) & 255);
        return t
    }
    function tn(i, t) {
        let r, n, o, s = [];
        for (let a = 0; a < i.length && !((t -= 2) < 0); ++a)
            r = i.charCodeAt(a),
            n = r >> 8,
            o = r % 256,
            s.push(o),
            s.push(n);
        return s
    }
    function Vi(i) {
        return Nr.toByteArray(Qe(i))
    }
    function tr(i, t, r, n) {
        let o;
        for (o = 0; o < n && !(o + r >= t.length || o >= i.length); ++o)
            t[o + r] = i[o];
        return o
    }
    function It(i, t) {
        return i instanceof t || i != null && i.constructor != null && i.constructor.name != null && i.constructor.name === t.name
    }
    function Gr(i) {
        return i !== i
    }
    var rn = function() {
        let i = "0123456789abcdef"
          , t = new Array(256);
        for (let r = 0; r < 16; ++r) {
            let n = r * 16;
            for (let o = 0; o < 16; ++o)
                t[n + o] = i[r] + i[o]
        }
        return t
    }();
    function Tt(i) {
        return typeof BigInt > "u" ? en : i
    }
    function en() {
        throw new Error("BigInt not supported")
    }
}
);
var nn = Dt( (Ji, zr) => {
    "use strict";
    (function(i, t) {
        "use strict";
        function r(m, e) {
            if (!m)
                throw new Error(e || "Assertion failed")
        }
        function n(m, e) {
            m.super_ = e;
            var f = function() {};
            f.prototype = e.prototype,
            m.prototype = new f,
            m.prototype.constructor = m
        }
        function o(m, e, f) {
            if (o.isBN(m))
                return m;
            this.negative = 0,
            this.words = null,
            this.length = 0,
            this.red = null,
            m !== null && ((e === "le" || e === "be") && (f = e,
            e = 10),
            this._init(m || 0, e || 10, f || "be"))
        }
        typeof i == "object" ? i.exports = o : t.BN = o,
        o.BN = o,
        o.wordSize = 26;
        var s;
        try {
            typeof window < "u" && typeof window.Buffer < "u" ? s = window.Buffer : s = Xi().Buffer
        } catch {}
        o.isBN = function(e) {
            return e instanceof o ? !0 : e !== null && typeof e == "object" && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
        }
        ,
        o.max = function(e, f) {
            return e.cmp(f) > 0 ? e : f
        }
        ,
        o.min = function(e, f) {
            return e.cmp(f) < 0 ? e : f
        }
        ,
        o.prototype._init = function(e, f, u) {
            if (typeof e == "number")
                return this._initNumber(e, f, u);
            if (typeof e == "object")
                return this._initArray(e, f, u);
            f === "hex" && (f = 16),
            r(f === (f | 0) && f >= 2 && f <= 36),
            e = e.toString().replace(/\s+/g, "");
            var l = 0;
            e[0] === "-" && (l++,
            this.negative = 1),
            l < e.length && (f === 16 ? this._parseHex(e, l, u) : (this._parseBase(e, f, l),
            u === "le" && this._initArray(this.toArray(), f, u)))
        }
        ,
        o.prototype._initNumber = function(e, f, u) {
            e < 0 && (this.negative = 1,
            e = -e),
            e < 67108864 ? (this.words = [e & 67108863],
            this.length = 1) : e < 4503599627370496 ? (this.words = [e & 67108863, e / 67108864 & 67108863],
            this.length = 2) : (r(e < 9007199254740992),
            this.words = [e & 67108863, e / 67108864 & 67108863, 1],
            this.length = 3),
            u === "le" && this._initArray(this.toArray(), f, u)
        }
        ,
        o.prototype._initArray = function(e, f, u) {
            if (r(typeof e.length == "number"),
            e.length <= 0)
                return this.words = [0],
                this.length = 1,
                this;
            this.length = Math.ceil(e.length / 3),
            this.words = new Array(this.length);
            for (var l = 0; l < this.length; l++)
                this.words[l] = 0;
            var c, y, w = 0;
            if (u === "be")
                for (l = e.length - 1,
                c = 0; l >= 0; l -= 3)
                    y = e[l] | e[l - 1] << 8 | e[l - 2] << 16,
                    this.words[c] |= y << w & 67108863,
                    this.words[c + 1] = y >>> 26 - w & 67108863,
                    w += 24,
                    w >= 26 && (w -= 26,
                    c++);
            else if (u === "le")
                for (l = 0,
                c = 0; l < e.length; l += 3)
                    y = e[l] | e[l + 1] << 8 | e[l + 2] << 16,
                    this.words[c] |= y << w & 67108863,
                    this.words[c + 1] = y >>> 26 - w & 67108863,
                    w += 24,
                    w >= 26 && (w -= 26,
                    c++);
            return this._strip()
        }
        ;
        function a(m, e) {
            var f = m.charCodeAt(e);
            if (f >= 48 && f <= 57)
                return f - 48;
            if (f >= 65 && f <= 70)
                return f - 55;
            if (f >= 97 && f <= 102)
                return f - 87;
            r(!1, "Invalid character in " + m)
        }
        function M(m, e, f) {
            var u = a(m, f);
            return f - 1 >= e && (u |= a(m, f - 1) << 4),
            u
        }
        o.prototype._parseHex = function(e, f, u) {
            this.length = Math.ceil((e.length - f) / 6),
            this.words = new Array(this.length);
            for (var l = 0; l < this.length; l++)
                this.words[l] = 0;
            var c = 0, y = 0, w;
            if (u === "be")
                for (l = e.length - 1; l >= f; l -= 2)
                    w = M(e, f, l) << c,
                    this.words[y] |= w & 67108863,
                    c >= 18 ? (c -= 18,
                    y += 1,
                    this.words[y] |= w >>> 26) : c += 8;
            else {
                var p = e.length - f;
                for (l = p % 2 === 0 ? f + 1 : f; l < e.length; l += 2)
                    w = M(e, f, l) << c,
                    this.words[y] |= w & 67108863,
                    c >= 18 ? (c -= 18,
                    y += 1,
                    this.words[y] |= w >>> 26) : c += 8
            }
            this._strip()
        }
        ;
        function B(m, e, f, u) {
            for (var l = 0, c = 0, y = Math.min(m.length, f), w = e; w < y; w++) {
                var p = m.charCodeAt(w) - 48;
                l *= u,
                p >= 49 ? c = p - 49 + 10 : p >= 17 ? c = p - 17 + 10 : c = p,
                r(p >= 0 && c < u, "Invalid character"),
                l += c
            }
            return l
        }
        o.prototype._parseBase = function(e, f, u) {
            this.words = [0],
            this.length = 1;
            for (var l = 0, c = 1; c <= 67108863; c *= f)
                l++;
            l--,
            c = c / f | 0;
            for (var y = e.length - u, w = y % l, p = Math.min(y, y - w) + u, h = 0, d = u; d < p; d += l)
                h = B(e, d, d + l, f),
                this.imuln(c),
                this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
            if (w !== 0) {
                var A = 1;
                for (h = B(e, d, e.length, f),
                d = 0; d < w; d++)
                    A *= f;
                this.imuln(A),
                this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h)
            }
            this._strip()
        }
        ,
        o.prototype.copy = function(e) {
            e.words = new Array(this.length);
            for (var f = 0; f < this.length; f++)
                e.words[f] = this.words[f];
            e.length = this.length,
            e.negative = this.negative,
            e.red = this.red
        }
        ;
        function I(m, e) {
            m.words = e.words,
            m.length = e.length,
            m.negative = e.negative,
            m.red = e.red
        }
        if (o.prototype._move = function(e) {
            I(e, this)
        }
        ,
        o.prototype.clone = function() {
            var e = new o(null);
            return this.copy(e),
            e
        }
        ,
        o.prototype._expand = function(e) {
            for (; this.length < e; )
                this.words[this.length++] = 0;
            return this
        }
        ,
        o.prototype._strip = function() {
            for (; this.length > 1 && this.words[this.length - 1] === 0; )
                this.length--;
            return this._normSign()
        }
        ,
        o.prototype._normSign = function() {
            return this.length === 1 && this.words[0] === 0 && (this.negative = 0),
            this
        }
        ,
        typeof Symbol < "u" && typeof Symbol.for == "function")
            try {
                o.prototype[Symbol.for("nodejs.util.inspect.custom")] = E
            } catch {
                o.prototype.inspect = E
            }
        else
            o.prototype.inspect = E;
        function E() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        }
        var v = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
          , Ut = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
          , gt = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
        o.prototype.toString = function(e, f) {
            e = e || 10,
            f = f | 0 || 1;
            var u;
            if (e === 16 || e === "hex") {
                u = "";
                for (var l = 0, c = 0, y = 0; y < this.length; y++) {
                    var w = this.words[y]
                      , p = ((w << l | c) & 16777215).toString(16);
                    c = w >>> 24 - l & 16777215,
                    l += 2,
                    l >= 26 && (l -= 26,
                    y--),
                    c !== 0 || y !== this.length - 1 ? u = v[6 - p.length] + p + u : u = p + u
                }
                for (c !== 0 && (u = c.toString(16) + u); u.length % f !== 0; )
                    u = "0" + u;
                return this.negative !== 0 && (u = "-" + u),
                u
            }
            if (e === (e | 0) && e >= 2 && e <= 36) {
                var h = Ut[e]
                  , d = gt[e];
                u = "";
                var A = this.clone();
                for (A.negative = 0; !A.isZero(); ) {
                    var F = A.modrn(d).toString(e);
                    A = A.idivn(d),
                    A.isZero() ? u = F + u : u = v[h - F.length] + F + u
                }
                for (this.isZero() && (u = "0" + u); u.length % f !== 0; )
                    u = "0" + u;
                return this.negative !== 0 && (u = "-" + u),
                u
            }
            r(!1, "Base should be between 2 and 36")
        }
        ,
        o.prototype.toNumber = function() {
            var e = this.words[0];
            return this.length === 2 ? e += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? e += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"),
            this.negative !== 0 ? -e : e
        }
        ,
        o.prototype.toJSON = function() {
            return this.toString(16, 2)
        }
        ,
        s && (o.prototype.toBuffer = function(e, f) {
            return this.toArrayLike(s, e, f)
        }
        ),
        o.prototype.toArray = function(e, f) {
            return this.toArrayLike(Array, e, f)
        }
        ;
        var Wt = function(e, f) {
            return e.allocUnsafe ? e.allocUnsafe(f) : new e(f)
        };
        o.prototype.toArrayLike = function(e, f, u) {
            this._strip();
            var l = this.byteLength()
              , c = u || Math.max(1, l);
            r(l <= c, "byte array longer than desired length"),
            r(c > 0, "Requested array length <= 0");
            var y = Wt(e, c)
              , w = f === "le" ? "LE" : "BE";
            return this["_toArrayLike" + w](y, l),
            y
        }
        ,
        o.prototype._toArrayLikeLE = function(e, f) {
            for (var u = 0, l = 0, c = 0, y = 0; c < this.length; c++) {
                var w = this.words[c] << y | l;
                e[u++] = w & 255,
                u < e.length && (e[u++] = w >> 8 & 255),
                u < e.length && (e[u++] = w >> 16 & 255),
                y === 6 ? (u < e.length && (e[u++] = w >> 24 & 255),
                l = 0,
                y = 0) : (l = w >>> 24,
                y += 2)
            }
            if (u < e.length)
                for (e[u++] = l; u < e.length; )
                    e[u++] = 0
        }
        ,
        o.prototype._toArrayLikeBE = function(e, f) {
            for (var u = e.length - 1, l = 0, c = 0, y = 0; c < this.length; c++) {
                var w = this.words[c] << y | l;
                e[u--] = w & 255,
                u >= 0 && (e[u--] = w >> 8 & 255),
                u >= 0 && (e[u--] = w >> 16 & 255),
                y === 6 ? (u >= 0 && (e[u--] = w >> 24 & 255),
                l = 0,
                y = 0) : (l = w >>> 24,
                y += 2)
            }
            if (u >= 0)
                for (e[u--] = l; u >= 0; )
                    e[u--] = 0
        }
        ,
        Math.clz32 ? o.prototype._countBits = function(e) {
            return 32 - Math.clz32(e)
        }
        : o.prototype._countBits = function(e) {
            var f = e
              , u = 0;
            return f >= 4096 && (u += 13,
            f >>>= 13),
            f >= 64 && (u += 7,
            f >>>= 7),
            f >= 8 && (u += 4,
            f >>>= 4),
            f >= 2 && (u += 2,
            f >>>= 2),
            u + f
        }
        ,
        o.prototype._zeroBits = function(e) {
            if (e === 0)
                return 26;
            var f = e
              , u = 0;
            return f & 8191 || (u += 13,
            f >>>= 13),
            f & 127 || (u += 7,
            f >>>= 7),
            f & 15 || (u += 4,
            f >>>= 4),
            f & 3 || (u += 2,
            f >>>= 2),
            f & 1 || u++,
            u
        }
        ,
        o.prototype.bitLength = function() {
            var e = this.words[this.length - 1]
              , f = this._countBits(e);
            return (this.length - 1) * 26 + f
        }
        ;
        function ir(m) {
            for (var e = new Array(m.bitLength()), f = 0; f < e.length; f++) {
                var u = f / 26 | 0
                  , l = f % 26;
                e[f] = m.words[u] >>> l & 1
            }
            return e
        }
        o.prototype.zeroBits = function() {
            if (this.isZero())
                return 0;
            for (var e = 0, f = 0; f < this.length; f++) {
                var u = this._zeroBits(this.words[f]);
                if (e += u,
                u !== 26)
                    break
            }
            return e
        }
        ,
        o.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
        }
        ,
        o.prototype.toTwos = function(e) {
            return this.negative !== 0 ? this.abs().inotn(e).iaddn(1) : this.clone()
        }
        ,
        o.prototype.fromTwos = function(e) {
            return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
        }
        ,
        o.prototype.isNeg = function() {
            return this.negative !== 0
        }
        ,
        o.prototype.neg = function() {
            return this.clone().ineg()
        }
        ,
        o.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1),
            this
        }
        ,
        o.prototype.iuor = function(e) {
            for (; this.length < e.length; )
                this.words[this.length++] = 0;
            for (var f = 0; f < e.length; f++)
                this.words[f] = this.words[f] | e.words[f];
            return this._strip()
        }
        ,
        o.prototype.ior = function(e) {
            return r((this.negative | e.negative) === 0),
            this.iuor(e)
        }
        ,
        o.prototype.or = function(e) {
            return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
        }
        ,
        o.prototype.uor = function(e) {
            return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
        }
        ,
        o.prototype.iuand = function(e) {
            var f;
            this.length > e.length ? f = e : f = this;
            for (var u = 0; u < f.length; u++)
                this.words[u] = this.words[u] & e.words[u];
            return this.length = f.length,
            this._strip()
        }
        ,
        o.prototype.iand = function(e) {
            return r((this.negative | e.negative) === 0),
            this.iuand(e)
        }
        ,
        o.prototype.and = function(e) {
            return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
        }
        ,
        o.prototype.uand = function(e) {
            return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
        }
        ,
        o.prototype.iuxor = function(e) {
            var f, u;
            this.length > e.length ? (f = this,
            u = e) : (f = e,
            u = this);
            for (var l = 0; l < u.length; l++)
                this.words[l] = f.words[l] ^ u.words[l];
            if (this !== f)
                for (; l < f.length; l++)
                    this.words[l] = f.words[l];
            return this.length = f.length,
            this._strip()
        }
        ,
        o.prototype.ixor = function(e) {
            return r((this.negative | e.negative) === 0),
            this.iuxor(e)
        }
        ,
        o.prototype.xor = function(e) {
            return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
        }
        ,
        o.prototype.uxor = function(e) {
            return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
        }
        ,
        o.prototype.inotn = function(e) {
            r(typeof e == "number" && e >= 0);
            var f = Math.ceil(e / 26) | 0
              , u = e % 26;
            this._expand(f),
            u > 0 && f--;
            for (var l = 0; l < f; l++)
                this.words[l] = ~this.words[l] & 67108863;
            return u > 0 && (this.words[l] = ~this.words[l] & 67108863 >> 26 - u),
            this._strip()
        }
        ,
        o.prototype.notn = function(e) {
            return this.clone().inotn(e)
        }
        ,
        o.prototype.setn = function(e, f) {
            r(typeof e == "number" && e >= 0);
            var u = e / 26 | 0
              , l = e % 26;
            return this._expand(u + 1),
            f ? this.words[u] = this.words[u] | 1 << l : this.words[u] = this.words[u] & ~(1 << l),
            this._strip()
        }
        ,
        o.prototype.iadd = function(e) {
            var f;
            if (this.negative !== 0 && e.negative === 0)
                return this.negative = 0,
                f = this.isub(e),
                this.negative ^= 1,
                this._normSign();
            if (this.negative === 0 && e.negative !== 0)
                return e.negative = 0,
                f = this.isub(e),
                e.negative = 1,
                f._normSign();
            var u, l;
            this.length > e.length ? (u = this,
            l = e) : (u = e,
            l = this);
            for (var c = 0, y = 0; y < l.length; y++)
                f = (u.words[y] | 0) + (l.words[y] | 0) + c,
                this.words[y] = f & 67108863,
                c = f >>> 26;
            for (; c !== 0 && y < u.length; y++)
                f = (u.words[y] | 0) + c,
                this.words[y] = f & 67108863,
                c = f >>> 26;
            if (this.length = u.length,
            c !== 0)
                this.words[this.length] = c,
                this.length++;
            else if (u !== this)
                for (; y < u.length; y++)
                    this.words[y] = u.words[y];
            return this
        }
        ,
        o.prototype.add = function(e) {
            var f;
            return e.negative !== 0 && this.negative === 0 ? (e.negative = 0,
            f = this.sub(e),
            e.negative ^= 1,
            f) : e.negative === 0 && this.negative !== 0 ? (this.negative = 0,
            f = e.sub(this),
            this.negative = 1,
            f) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
        }
        ,
        o.prototype.isub = function(e) {
            if (e.negative !== 0) {
                e.negative = 0;
                var f = this.iadd(e);
                return e.negative = 1,
                f._normSign()
            } else if (this.negative !== 0)
                return this.negative = 0,
                this.iadd(e),
                this.negative = 1,
                this._normSign();
            var u = this.cmp(e);
            if (u === 0)
                return this.negative = 0,
                this.length = 1,
                this.words[0] = 0,
                this;
            var l, c;
            u > 0 ? (l = this,
            c = e) : (l = e,
            c = this);
            for (var y = 0, w = 0; w < c.length; w++)
                f = (l.words[w] | 0) - (c.words[w] | 0) + y,
                y = f >> 26,
                this.words[w] = f & 67108863;
            for (; y !== 0 && w < l.length; w++)
                f = (l.words[w] | 0) + y,
                y = f >> 26,
                this.words[w] = f & 67108863;
            if (y === 0 && w < l.length && l !== this)
                for (; w < l.length; w++)
                    this.words[w] = l.words[w];
            return this.length = Math.max(this.length, w),
            l !== this && (this.negative = 1),
            this._strip()
        }
        ,
        o.prototype.sub = function(e) {
            return this.clone().isub(e)
        }
        ;
        function Wr(m, e, f) {
            f.negative = e.negative ^ m.negative;
            var u = m.length + e.length | 0;
            f.length = u,
            u = u - 1 | 0;
            var l = m.words[0] | 0
              , c = e.words[0] | 0
              , y = l * c
              , w = y & 67108863
              , p = y / 67108864 | 0;
            f.words[0] = w;
            for (var h = 1; h < u; h++) {
                for (var d = p >>> 26, A = p & 67108863, F = Math.min(h, e.length - 1), _ = Math.max(0, h - m.length + 1); _ <= F; _++) {
                    var U = h - _ | 0;
                    l = m.words[U] | 0,
                    c = e.words[_] | 0,
                    y = l * c + A,
                    d += y / 67108864 | 0,
                    A = y & 67108863
                }
                f.words[h] = A | 0,
                p = d | 0
            }
            return p !== 0 ? f.words[h] = p | 0 : f.length--,
            f._strip()
        }
        var Hr = function(e, f, u) {
            var l = e.words, c = f.words, y = u.words, w = 0, p, h, d, A = l[0] | 0, F = A & 8191, _ = A >>> 13, U = l[1] | 0, b = U & 8191, R = U >>> 13, bt = l[2] | 0, T = bt & 8191, S = bt >>> 13, Qr = l[3] | 0, k = Qr & 8191, C = Qr >>> 13, jr = l[4] | 0, N = jr & 8191, D = jr >>> 13, ti = l[5] | 0, $ = ti & 8191, P = ti >>> 13, ri = l[6] | 0, q = ri & 8191, O = ri >>> 13, ii = l[7] | 0, Z = ii & 8191, G = ii >>> 13, ei = l[8] | 0, z = ei & 8191, Y = ei >>> 13, ni = l[9] | 0, W = ni & 8191, H = ni >>> 13, oi = c[0] | 0, K = oi & 8191, V = oi >>> 13, hi = c[1] | 0, X = hi & 8191, J = hi >>> 13, fi = c[2] | 0, Q = fi & 8191, j = fi >>> 13, ui = c[3] | 0, tt = ui & 8191, rt = ui >>> 13, si = c[4] | 0, it = si & 8191, et = si >>> 13, li = c[5] | 0, nt = li & 8191, ot = li >>> 13, ai = c[6] | 0, ht = ai & 8191, ft = ai >>> 13, pi = c[7] | 0, ut = pi & 8191, st = pi >>> 13, ci = c[8] | 0, lt = ci & 8191, at = ci >>> 13, di = c[9] | 0, pt = di & 8191, ct = di >>> 13;
            u.negative = e.negative ^ f.negative,
            u.length = 19,
            p = Math.imul(F, K),
            h = Math.imul(F, V),
            h = h + Math.imul(_, K) | 0,
            d = Math.imul(_, V);
            var or = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (or >>> 26) | 0,
            or &= 67108863,
            p = Math.imul(b, K),
            h = Math.imul(b, V),
            h = h + Math.imul(R, K) | 0,
            d = Math.imul(R, V),
            p = p + Math.imul(F, X) | 0,
            h = h + Math.imul(F, J) | 0,
            h = h + Math.imul(_, X) | 0,
            d = d + Math.imul(_, J) | 0;
            var hr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (hr >>> 26) | 0,
            hr &= 67108863,
            p = Math.imul(T, K),
            h = Math.imul(T, V),
            h = h + Math.imul(S, K) | 0,
            d = Math.imul(S, V),
            p = p + Math.imul(b, X) | 0,
            h = h + Math.imul(b, J) | 0,
            h = h + Math.imul(R, X) | 0,
            d = d + Math.imul(R, J) | 0,
            p = p + Math.imul(F, Q) | 0,
            h = h + Math.imul(F, j) | 0,
            h = h + Math.imul(_, Q) | 0,
            d = d + Math.imul(_, j) | 0;
            var fr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (fr >>> 26) | 0,
            fr &= 67108863,
            p = Math.imul(k, K),
            h = Math.imul(k, V),
            h = h + Math.imul(C, K) | 0,
            d = Math.imul(C, V),
            p = p + Math.imul(T, X) | 0,
            h = h + Math.imul(T, J) | 0,
            h = h + Math.imul(S, X) | 0,
            d = d + Math.imul(S, J) | 0,
            p = p + Math.imul(b, Q) | 0,
            h = h + Math.imul(b, j) | 0,
            h = h + Math.imul(R, Q) | 0,
            d = d + Math.imul(R, j) | 0,
            p = p + Math.imul(F, tt) | 0,
            h = h + Math.imul(F, rt) | 0,
            h = h + Math.imul(_, tt) | 0,
            d = d + Math.imul(_, rt) | 0;
            var ur = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (ur >>> 26) | 0,
            ur &= 67108863,
            p = Math.imul(N, K),
            h = Math.imul(N, V),
            h = h + Math.imul(D, K) | 0,
            d = Math.imul(D, V),
            p = p + Math.imul(k, X) | 0,
            h = h + Math.imul(k, J) | 0,
            h = h + Math.imul(C, X) | 0,
            d = d + Math.imul(C, J) | 0,
            p = p + Math.imul(T, Q) | 0,
            h = h + Math.imul(T, j) | 0,
            h = h + Math.imul(S, Q) | 0,
            d = d + Math.imul(S, j) | 0,
            p = p + Math.imul(b, tt) | 0,
            h = h + Math.imul(b, rt) | 0,
            h = h + Math.imul(R, tt) | 0,
            d = d + Math.imul(R, rt) | 0,
            p = p + Math.imul(F, it) | 0,
            h = h + Math.imul(F, et) | 0,
            h = h + Math.imul(_, it) | 0,
            d = d + Math.imul(_, et) | 0;
            var sr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (sr >>> 26) | 0,
            sr &= 67108863,
            p = Math.imul($, K),
            h = Math.imul($, V),
            h = h + Math.imul(P, K) | 0,
            d = Math.imul(P, V),
            p = p + Math.imul(N, X) | 0,
            h = h + Math.imul(N, J) | 0,
            h = h + Math.imul(D, X) | 0,
            d = d + Math.imul(D, J) | 0,
            p = p + Math.imul(k, Q) | 0,
            h = h + Math.imul(k, j) | 0,
            h = h + Math.imul(C, Q) | 0,
            d = d + Math.imul(C, j) | 0,
            p = p + Math.imul(T, tt) | 0,
            h = h + Math.imul(T, rt) | 0,
            h = h + Math.imul(S, tt) | 0,
            d = d + Math.imul(S, rt) | 0,
            p = p + Math.imul(b, it) | 0,
            h = h + Math.imul(b, et) | 0,
            h = h + Math.imul(R, it) | 0,
            d = d + Math.imul(R, et) | 0,
            p = p + Math.imul(F, nt) | 0,
            h = h + Math.imul(F, ot) | 0,
            h = h + Math.imul(_, nt) | 0,
            d = d + Math.imul(_, ot) | 0;
            var lr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (lr >>> 26) | 0,
            lr &= 67108863,
            p = Math.imul(q, K),
            h = Math.imul(q, V),
            h = h + Math.imul(O, K) | 0,
            d = Math.imul(O, V),
            p = p + Math.imul($, X) | 0,
            h = h + Math.imul($, J) | 0,
            h = h + Math.imul(P, X) | 0,
            d = d + Math.imul(P, J) | 0,
            p = p + Math.imul(N, Q) | 0,
            h = h + Math.imul(N, j) | 0,
            h = h + Math.imul(D, Q) | 0,
            d = d + Math.imul(D, j) | 0,
            p = p + Math.imul(k, tt) | 0,
            h = h + Math.imul(k, rt) | 0,
            h = h + Math.imul(C, tt) | 0,
            d = d + Math.imul(C, rt) | 0,
            p = p + Math.imul(T, it) | 0,
            h = h + Math.imul(T, et) | 0,
            h = h + Math.imul(S, it) | 0,
            d = d + Math.imul(S, et) | 0,
            p = p + Math.imul(b, nt) | 0,
            h = h + Math.imul(b, ot) | 0,
            h = h + Math.imul(R, nt) | 0,
            d = d + Math.imul(R, ot) | 0,
            p = p + Math.imul(F, ht) | 0,
            h = h + Math.imul(F, ft) | 0,
            h = h + Math.imul(_, ht) | 0,
            d = d + Math.imul(_, ft) | 0;
            var ar = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (ar >>> 26) | 0,
            ar &= 67108863,
            p = Math.imul(Z, K),
            h = Math.imul(Z, V),
            h = h + Math.imul(G, K) | 0,
            d = Math.imul(G, V),
            p = p + Math.imul(q, X) | 0,
            h = h + Math.imul(q, J) | 0,
            h = h + Math.imul(O, X) | 0,
            d = d + Math.imul(O, J) | 0,
            p = p + Math.imul($, Q) | 0,
            h = h + Math.imul($, j) | 0,
            h = h + Math.imul(P, Q) | 0,
            d = d + Math.imul(P, j) | 0,
            p = p + Math.imul(N, tt) | 0,
            h = h + Math.imul(N, rt) | 0,
            h = h + Math.imul(D, tt) | 0,
            d = d + Math.imul(D, rt) | 0,
            p = p + Math.imul(k, it) | 0,
            h = h + Math.imul(k, et) | 0,
            h = h + Math.imul(C, it) | 0,
            d = d + Math.imul(C, et) | 0,
            p = p + Math.imul(T, nt) | 0,
            h = h + Math.imul(T, ot) | 0,
            h = h + Math.imul(S, nt) | 0,
            d = d + Math.imul(S, ot) | 0,
            p = p + Math.imul(b, ht) | 0,
            h = h + Math.imul(b, ft) | 0,
            h = h + Math.imul(R, ht) | 0,
            d = d + Math.imul(R, ft) | 0,
            p = p + Math.imul(F, ut) | 0,
            h = h + Math.imul(F, st) | 0,
            h = h + Math.imul(_, ut) | 0,
            d = d + Math.imul(_, st) | 0;
            var pr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (pr >>> 26) | 0,
            pr &= 67108863,
            p = Math.imul(z, K),
            h = Math.imul(z, V),
            h = h + Math.imul(Y, K) | 0,
            d = Math.imul(Y, V),
            p = p + Math.imul(Z, X) | 0,
            h = h + Math.imul(Z, J) | 0,
            h = h + Math.imul(G, X) | 0,
            d = d + Math.imul(G, J) | 0,
            p = p + Math.imul(q, Q) | 0,
            h = h + Math.imul(q, j) | 0,
            h = h + Math.imul(O, Q) | 0,
            d = d + Math.imul(O, j) | 0,
            p = p + Math.imul($, tt) | 0,
            h = h + Math.imul($, rt) | 0,
            h = h + Math.imul(P, tt) | 0,
            d = d + Math.imul(P, rt) | 0,
            p = p + Math.imul(N, it) | 0,
            h = h + Math.imul(N, et) | 0,
            h = h + Math.imul(D, it) | 0,
            d = d + Math.imul(D, et) | 0,
            p = p + Math.imul(k, nt) | 0,
            h = h + Math.imul(k, ot) | 0,
            h = h + Math.imul(C, nt) | 0,
            d = d + Math.imul(C, ot) | 0,
            p = p + Math.imul(T, ht) | 0,
            h = h + Math.imul(T, ft) | 0,
            h = h + Math.imul(S, ht) | 0,
            d = d + Math.imul(S, ft) | 0,
            p = p + Math.imul(b, ut) | 0,
            h = h + Math.imul(b, st) | 0,
            h = h + Math.imul(R, ut) | 0,
            d = d + Math.imul(R, st) | 0,
            p = p + Math.imul(F, lt) | 0,
            h = h + Math.imul(F, at) | 0,
            h = h + Math.imul(_, lt) | 0,
            d = d + Math.imul(_, at) | 0;
            var cr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (cr >>> 26) | 0,
            cr &= 67108863,
            p = Math.imul(W, K),
            h = Math.imul(W, V),
            h = h + Math.imul(H, K) | 0,
            d = Math.imul(H, V),
            p = p + Math.imul(z, X) | 0,
            h = h + Math.imul(z, J) | 0,
            h = h + Math.imul(Y, X) | 0,
            d = d + Math.imul(Y, J) | 0,
            p = p + Math.imul(Z, Q) | 0,
            h = h + Math.imul(Z, j) | 0,
            h = h + Math.imul(G, Q) | 0,
            d = d + Math.imul(G, j) | 0,
            p = p + Math.imul(q, tt) | 0,
            h = h + Math.imul(q, rt) | 0,
            h = h + Math.imul(O, tt) | 0,
            d = d + Math.imul(O, rt) | 0,
            p = p + Math.imul($, it) | 0,
            h = h + Math.imul($, et) | 0,
            h = h + Math.imul(P, it) | 0,
            d = d + Math.imul(P, et) | 0,
            p = p + Math.imul(N, nt) | 0,
            h = h + Math.imul(N, ot) | 0,
            h = h + Math.imul(D, nt) | 0,
            d = d + Math.imul(D, ot) | 0,
            p = p + Math.imul(k, ht) | 0,
            h = h + Math.imul(k, ft) | 0,
            h = h + Math.imul(C, ht) | 0,
            d = d + Math.imul(C, ft) | 0,
            p = p + Math.imul(T, ut) | 0,
            h = h + Math.imul(T, st) | 0,
            h = h + Math.imul(S, ut) | 0,
            d = d + Math.imul(S, st) | 0,
            p = p + Math.imul(b, lt) | 0,
            h = h + Math.imul(b, at) | 0,
            h = h + Math.imul(R, lt) | 0,
            d = d + Math.imul(R, at) | 0,
            p = p + Math.imul(F, pt) | 0,
            h = h + Math.imul(F, ct) | 0,
            h = h + Math.imul(_, pt) | 0,
            d = d + Math.imul(_, ct) | 0;
            var dr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (dr >>> 26) | 0,
            dr &= 67108863,
            p = Math.imul(W, X),
            h = Math.imul(W, J),
            h = h + Math.imul(H, X) | 0,
            d = Math.imul(H, J),
            p = p + Math.imul(z, Q) | 0,
            h = h + Math.imul(z, j) | 0,
            h = h + Math.imul(Y, Q) | 0,
            d = d + Math.imul(Y, j) | 0,
            p = p + Math.imul(Z, tt) | 0,
            h = h + Math.imul(Z, rt) | 0,
            h = h + Math.imul(G, tt) | 0,
            d = d + Math.imul(G, rt) | 0,
            p = p + Math.imul(q, it) | 0,
            h = h + Math.imul(q, et) | 0,
            h = h + Math.imul(O, it) | 0,
            d = d + Math.imul(O, et) | 0,
            p = p + Math.imul($, nt) | 0,
            h = h + Math.imul($, ot) | 0,
            h = h + Math.imul(P, nt) | 0,
            d = d + Math.imul(P, ot) | 0,
            p = p + Math.imul(N, ht) | 0,
            h = h + Math.imul(N, ft) | 0,
            h = h + Math.imul(D, ht) | 0,
            d = d + Math.imul(D, ft) | 0,
            p = p + Math.imul(k, ut) | 0,
            h = h + Math.imul(k, st) | 0,
            h = h + Math.imul(C, ut) | 0,
            d = d + Math.imul(C, st) | 0,
            p = p + Math.imul(T, lt) | 0,
            h = h + Math.imul(T, at) | 0,
            h = h + Math.imul(S, lt) | 0,
            d = d + Math.imul(S, at) | 0,
            p = p + Math.imul(b, pt) | 0,
            h = h + Math.imul(b, ct) | 0,
            h = h + Math.imul(R, pt) | 0,
            d = d + Math.imul(R, ct) | 0;
            var mr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (mr >>> 26) | 0,
            mr &= 67108863,
            p = Math.imul(W, Q),
            h = Math.imul(W, j),
            h = h + Math.imul(H, Q) | 0,
            d = Math.imul(H, j),
            p = p + Math.imul(z, tt) | 0,
            h = h + Math.imul(z, rt) | 0,
            h = h + Math.imul(Y, tt) | 0,
            d = d + Math.imul(Y, rt) | 0,
            p = p + Math.imul(Z, it) | 0,
            h = h + Math.imul(Z, et) | 0,
            h = h + Math.imul(G, it) | 0,
            d = d + Math.imul(G, et) | 0,
            p = p + Math.imul(q, nt) | 0,
            h = h + Math.imul(q, ot) | 0,
            h = h + Math.imul(O, nt) | 0,
            d = d + Math.imul(O, ot) | 0,
            p = p + Math.imul($, ht) | 0,
            h = h + Math.imul($, ft) | 0,
            h = h + Math.imul(P, ht) | 0,
            d = d + Math.imul(P, ft) | 0,
            p = p + Math.imul(N, ut) | 0,
            h = h + Math.imul(N, st) | 0,
            h = h + Math.imul(D, ut) | 0,
            d = d + Math.imul(D, st) | 0,
            p = p + Math.imul(k, lt) | 0,
            h = h + Math.imul(k, at) | 0,
            h = h + Math.imul(C, lt) | 0,
            d = d + Math.imul(C, at) | 0,
            p = p + Math.imul(T, pt) | 0,
            h = h + Math.imul(T, ct) | 0,
            h = h + Math.imul(S, pt) | 0,
            d = d + Math.imul(S, ct) | 0;
            var yr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (yr >>> 26) | 0,
            yr &= 67108863,
            p = Math.imul(W, tt),
            h = Math.imul(W, rt),
            h = h + Math.imul(H, tt) | 0,
            d = Math.imul(H, rt),
            p = p + Math.imul(z, it) | 0,
            h = h + Math.imul(z, et) | 0,
            h = h + Math.imul(Y, it) | 0,
            d = d + Math.imul(Y, et) | 0,
            p = p + Math.imul(Z, nt) | 0,
            h = h + Math.imul(Z, ot) | 0,
            h = h + Math.imul(G, nt) | 0,
            d = d + Math.imul(G, ot) | 0,
            p = p + Math.imul(q, ht) | 0,
            h = h + Math.imul(q, ft) | 0,
            h = h + Math.imul(O, ht) | 0,
            d = d + Math.imul(O, ft) | 0,
            p = p + Math.imul($, ut) | 0,
            h = h + Math.imul($, st) | 0,
            h = h + Math.imul(P, ut) | 0,
            d = d + Math.imul(P, st) | 0,
            p = p + Math.imul(N, lt) | 0,
            h = h + Math.imul(N, at) | 0,
            h = h + Math.imul(D, lt) | 0,
            d = d + Math.imul(D, at) | 0,
            p = p + Math.imul(k, pt) | 0,
            h = h + Math.imul(k, ct) | 0,
            h = h + Math.imul(C, pt) | 0,
            d = d + Math.imul(C, ct) | 0;
            var wr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (wr >>> 26) | 0,
            wr &= 67108863,
            p = Math.imul(W, it),
            h = Math.imul(W, et),
            h = h + Math.imul(H, it) | 0,
            d = Math.imul(H, et),
            p = p + Math.imul(z, nt) | 0,
            h = h + Math.imul(z, ot) | 0,
            h = h + Math.imul(Y, nt) | 0,
            d = d + Math.imul(Y, ot) | 0,
            p = p + Math.imul(Z, ht) | 0,
            h = h + Math.imul(Z, ft) | 0,
            h = h + Math.imul(G, ht) | 0,
            d = d + Math.imul(G, ft) | 0,
            p = p + Math.imul(q, ut) | 0,
            h = h + Math.imul(q, st) | 0,
            h = h + Math.imul(O, ut) | 0,
            d = d + Math.imul(O, st) | 0,
            p = p + Math.imul($, lt) | 0,
            h = h + Math.imul($, at) | 0,
            h = h + Math.imul(P, lt) | 0,
            d = d + Math.imul(P, at) | 0,
            p = p + Math.imul(N, pt) | 0,
            h = h + Math.imul(N, ct) | 0,
            h = h + Math.imul(D, pt) | 0,
            d = d + Math.imul(D, ct) | 0;
            var gr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (gr >>> 26) | 0,
            gr &= 67108863,
            p = Math.imul(W, nt),
            h = Math.imul(W, ot),
            h = h + Math.imul(H, nt) | 0,
            d = Math.imul(H, ot),
            p = p + Math.imul(z, ht) | 0,
            h = h + Math.imul(z, ft) | 0,
            h = h + Math.imul(Y, ht) | 0,
            d = d + Math.imul(Y, ft) | 0,
            p = p + Math.imul(Z, ut) | 0,
            h = h + Math.imul(Z, st) | 0,
            h = h + Math.imul(G, ut) | 0,
            d = d + Math.imul(G, st) | 0,
            p = p + Math.imul(q, lt) | 0,
            h = h + Math.imul(q, at) | 0,
            h = h + Math.imul(O, lt) | 0,
            d = d + Math.imul(O, at) | 0,
            p = p + Math.imul($, pt) | 0,
            h = h + Math.imul($, ct) | 0,
            h = h + Math.imul(P, pt) | 0,
            d = d + Math.imul(P, ct) | 0;
            var xr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (xr >>> 26) | 0,
            xr &= 67108863,
            p = Math.imul(W, ht),
            h = Math.imul(W, ft),
            h = h + Math.imul(H, ht) | 0,
            d = Math.imul(H, ft),
            p = p + Math.imul(z, ut) | 0,
            h = h + Math.imul(z, st) | 0,
            h = h + Math.imul(Y, ut) | 0,
            d = d + Math.imul(Y, st) | 0,
            p = p + Math.imul(Z, lt) | 0,
            h = h + Math.imul(Z, at) | 0,
            h = h + Math.imul(G, lt) | 0,
            d = d + Math.imul(G, at) | 0,
            p = p + Math.imul(q, pt) | 0,
            h = h + Math.imul(q, ct) | 0,
            h = h + Math.imul(O, pt) | 0,
            d = d + Math.imul(O, ct) | 0;
            var Mr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (Mr >>> 26) | 0,
            Mr &= 67108863,
            p = Math.imul(W, ut),
            h = Math.imul(W, st),
            h = h + Math.imul(H, ut) | 0,
            d = Math.imul(H, st),
            p = p + Math.imul(z, lt) | 0,
            h = h + Math.imul(z, at) | 0,
            h = h + Math.imul(Y, lt) | 0,
            d = d + Math.imul(Y, at) | 0,
            p = p + Math.imul(Z, pt) | 0,
            h = h + Math.imul(Z, ct) | 0,
            h = h + Math.imul(G, pt) | 0,
            d = d + Math.imul(G, ct) | 0;
            var vr = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (vr >>> 26) | 0,
            vr &= 67108863,
            p = Math.imul(W, lt),
            h = Math.imul(W, at),
            h = h + Math.imul(H, lt) | 0,
            d = Math.imul(H, at),
            p = p + Math.imul(z, pt) | 0,
            h = h + Math.imul(z, ct) | 0,
            h = h + Math.imul(Y, pt) | 0,
            d = d + Math.imul(Y, ct) | 0;
            var Br = (w + p | 0) + ((h & 8191) << 13) | 0;
            w = (d + (h >>> 13) | 0) + (Br >>> 26) | 0,
            Br &= 67108863,
            p = Math.imul(W, pt),
            h = Math.imul(W, ct),
            h = h + Math.imul(H, pt) | 0,
            d = Math.imul(H, ct);
            var Er = (w + p | 0) + ((h & 8191) << 13) | 0;
            return w = (d + (h >>> 13) | 0) + (Er >>> 26) | 0,
            Er &= 67108863,
            y[0] = or,
            y[1] = hr,
            y[2] = fr,
            y[3] = ur,
            y[4] = sr,
            y[5] = lr,
            y[6] = ar,
            y[7] = pr,
            y[8] = cr,
            y[9] = dr,
            y[10] = mr,
            y[11] = yr,
            y[12] = wr,
            y[13] = gr,
            y[14] = xr,
            y[15] = Mr,
            y[16] = vr,
            y[17] = Br,
            y[18] = Er,
            w !== 0 && (y[19] = w,
            u.length++),
            u
        };
        Math.imul || (Hr = Wr);
        function Kr(m, e, f) {
            f.negative = e.negative ^ m.negative,
            f.length = m.length + e.length;
            for (var u = 0, l = 0, c = 0; c < f.length - 1; c++) {
                var y = l;
                l = 0;
                for (var w = u & 67108863, p = Math.min(c, e.length - 1), h = Math.max(0, c - m.length + 1); h <= p; h++) {
                    var d = c - h
                      , A = m.words[d] | 0
                      , F = e.words[h] | 0
                      , _ = A * F
                      , U = _ & 67108863;
                    y = y + (_ / 67108864 | 0) | 0,
                    U = U + w | 0,
                    w = U & 67108863,
                    y = y + (U >>> 26) | 0,
                    l += y >>> 26,
                    y &= 67108863
                }
                f.words[c] = w,
                u = y,
                y = l
            }
            return u !== 0 ? f.words[c] = u : f.length--,
            f._strip()
        }
        function Vr(m, e, f) {
            return Kr(m, e, f)
        }
        o.prototype.mulTo = function(e, f) {
            var u, l = this.length + e.length;
            return this.length === 10 && e.length === 10 ? u = Hr(this, e, f) : l < 63 ? u = Wr(this, e, f) : l < 1024 ? u = Kr(this, e, f) : u = Vr(this, e, f),
            u
        }
        ;
        function vt(m, e) {
            this.x = m,
            this.y = e
        }
        vt.prototype.makeRBT = function(e) {
            for (var f = new Array(e), u = o.prototype._countBits(e) - 1, l = 0; l < e; l++)
                f[l] = this.revBin(l, u, e);
            return f
        }
        ,
        vt.prototype.revBin = function(e, f, u) {
            if (e === 0 || e === u - 1)
                return e;
            for (var l = 0, c = 0; c < f; c++)
                l |= (e & 1) << f - c - 1,
                e >>= 1;
            return l
        }
        ,
        vt.prototype.permute = function(e, f, u, l, c, y) {
            for (var w = 0; w < y; w++)
                l[w] = f[e[w]],
                c[w] = u[e[w]]
        }
        ,
        vt.prototype.transform = function(e, f, u, l, c, y) {
            this.permute(y, e, f, u, l, c);
            for (var w = 1; w < c; w <<= 1)
                for (var p = w << 1, h = Math.cos(2 * Math.PI / p), d = Math.sin(2 * Math.PI / p), A = 0; A < c; A += p)
                    for (var F = h, _ = d, U = 0; U < w; U++) {
                        var b = u[A + U]
                          , R = l[A + U]
                          , bt = u[A + U + w]
                          , T = l[A + U + w]
                          , S = F * bt - _ * T;
                        T = F * T + _ * bt,
                        bt = S,
                        u[A + U] = b + bt,
                        l[A + U] = R + T,
                        u[A + U + w] = b - bt,
                        l[A + U + w] = R - T,
                        U !== p && (S = h * F - d * _,
                        _ = h * _ + d * F,
                        F = S)
                    }
        }
        ,
        vt.prototype.guessLen13b = function(e, f) {
            var u = Math.max(f, e) | 1
              , l = u & 1
              , c = 0;
            for (u = u / 2 | 0; u; u = u >>> 1)
                c++;
            return 1 << c + 1 + l
        }
        ,
        vt.prototype.conjugate = function(e, f, u) {
            if (!(u <= 1))
                for (var l = 0; l < u / 2; l++) {
                    var c = e[l];
                    e[l] = e[u - l - 1],
                    e[u - l - 1] = c,
                    c = f[l],
                    f[l] = -f[u - l - 1],
                    f[u - l - 1] = -c
                }
        }
        ,
        vt.prototype.normalize13b = function(e, f) {
            for (var u = 0, l = 0; l < f / 2; l++) {
                var c = Math.round(e[2 * l + 1] / f) * 8192 + Math.round(e[2 * l] / f) + u;
                e[l] = c & 67108863,
                c < 67108864 ? u = 0 : u = c / 67108864 | 0
            }
            return e
        }
        ,
        vt.prototype.convert13b = function(e, f, u, l) {
            for (var c = 0, y = 0; y < f; y++)
                c = c + (e[y] | 0),
                u[2 * y] = c & 8191,
                c = c >>> 13,
                u[2 * y + 1] = c & 8191,
                c = c >>> 13;
            for (y = 2 * f; y < l; ++y)
                u[y] = 0;
            r(c === 0),
            r((c & -8192) === 0)
        }
        ,
        vt.prototype.stub = function(e) {
            for (var f = new Array(e), u = 0; u < e; u++)
                f[u] = 0;
            return f
        }
        ,
        vt.prototype.mulp = function(e, f, u) {
            var l = 2 * this.guessLen13b(e.length, f.length)
              , c = this.makeRBT(l)
              , y = this.stub(l)
              , w = new Array(l)
              , p = new Array(l)
              , h = new Array(l)
              , d = new Array(l)
              , A = new Array(l)
              , F = new Array(l)
              , _ = u.words;
            _.length = l,
            this.convert13b(e.words, e.length, w, l),
            this.convert13b(f.words, f.length, d, l),
            this.transform(w, y, p, h, l, c),
            this.transform(d, y, A, F, l, c);
            for (var U = 0; U < l; U++) {
                var b = p[U] * A[U] - h[U] * F[U];
                h[U] = p[U] * F[U] + h[U] * A[U],
                p[U] = b
            }
            return this.conjugate(p, h, l),
            this.transform(p, h, _, y, l, c),
            this.conjugate(_, y, l),
            this.normalize13b(_, l),
            u.negative = e.negative ^ f.negative,
            u.length = e.length + f.length,
            u._strip()
        }
        ,
        o.prototype.mul = function(e) {
            var f = new o(null);
            return f.words = new Array(this.length + e.length),
            this.mulTo(e, f)
        }
        ,
        o.prototype.mulf = function(e) {
            var f = new o(null);
            return f.words = new Array(this.length + e.length),
            Vr(this, e, f)
        }
        ,
        o.prototype.imul = function(e) {
            return this.clone().mulTo(e, this)
        }
        ,
        o.prototype.imuln = function(e) {
            var f = e < 0;
            f && (e = -e),
            r(typeof e == "number"),
            r(e < 67108864);
            for (var u = 0, l = 0; l < this.length; l++) {
                var c = (this.words[l] | 0) * e
                  , y = (c & 67108863) + (u & 67108863);
                u >>= 26,
                u += c / 67108864 | 0,
                u += y >>> 26,
                this.words[l] = y & 67108863
            }
            return u !== 0 && (this.words[l] = u,
            this.length++),
            this.length = e === 0 ? 1 : this.length,
            f ? this.ineg() : this
        }
        ,
        o.prototype.muln = function(e) {
            return this.clone().imuln(e)
        }
        ,
        o.prototype.sqr = function() {
            return this.mul(this)
        }
        ,
        o.prototype.isqr = function() {
            return this.imul(this.clone())
        }
        ,
        o.prototype.pow = function(e) {
            var f = ir(e);
            if (f.length === 0)
                return new o(1);
            for (var u = this, l = 0; l < f.length && f[l] === 0; l++,
            u = u.sqr())
                ;
            if (++l < f.length)
                for (var c = u.sqr(); l < f.length; l++,
                c = c.sqr())
                    f[l] !== 0 && (u = u.mul(c));
            return u
        }
        ,
        o.prototype.iushln = function(e) {
            r(typeof e == "number" && e >= 0);
            var f = e % 26, u = (e - f) / 26, l = 67108863 >>> 26 - f << 26 - f, c;
            if (f !== 0) {
                var y = 0;
                for (c = 0; c < this.length; c++) {
                    var w = this.words[c] & l
                      , p = (this.words[c] | 0) - w << f;
                    this.words[c] = p | y,
                    y = w >>> 26 - f
                }
                y && (this.words[c] = y,
                this.length++)
            }
            if (u !== 0) {
                for (c = this.length - 1; c >= 0; c--)
                    this.words[c + u] = this.words[c];
                for (c = 0; c < u; c++)
                    this.words[c] = 0;
                this.length += u
            }
            return this._strip()
        }
        ,
        o.prototype.ishln = function(e) {
            return r(this.negative === 0),
            this.iushln(e)
        }
        ,
        o.prototype.iushrn = function(e, f, u) {
            r(typeof e == "number" && e >= 0);
            var l;
            f ? l = (f - f % 26) / 26 : l = 0;
            var c = e % 26
              , y = Math.min((e - c) / 26, this.length)
              , w = 67108863 ^ 67108863 >>> c << c
              , p = u;
            if (l -= y,
            l = Math.max(0, l),
            p) {
                for (var h = 0; h < y; h++)
                    p.words[h] = this.words[h];
                p.length = y
            }
            if (y !== 0)
                if (this.length > y)
                    for (this.length -= y,
                    h = 0; h < this.length; h++)
                        this.words[h] = this.words[h + y];
                else
                    this.words[0] = 0,
                    this.length = 1;
            var d = 0;
            for (h = this.length - 1; h >= 0 && (d !== 0 || h >= l); h--) {
                var A = this.words[h] | 0;
                this.words[h] = d << 26 - c | A >>> c,
                d = A & w
            }
            return p && d !== 0 && (p.words[p.length++] = d),
            this.length === 0 && (this.words[0] = 0,
            this.length = 1),
            this._strip()
        }
        ,
        o.prototype.ishrn = function(e, f, u) {
            return r(this.negative === 0),
            this.iushrn(e, f, u)
        }
        ,
        o.prototype.shln = function(e) {
            return this.clone().ishln(e)
        }
        ,
        o.prototype.ushln = function(e) {
            return this.clone().iushln(e)
        }
        ,
        o.prototype.shrn = function(e) {
            return this.clone().ishrn(e)
        }
        ,
        o.prototype.ushrn = function(e) {
            return this.clone().iushrn(e)
        }
        ,
        o.prototype.testn = function(e) {
            r(typeof e == "number" && e >= 0);
            var f = e % 26
              , u = (e - f) / 26
              , l = 1 << f;
            if (this.length <= u)
                return !1;
            var c = this.words[u];
            return !!(c & l)
        }
        ,
        o.prototype.imaskn = function(e) {
            r(typeof e == "number" && e >= 0);
            var f = e % 26
              , u = (e - f) / 26;
            if (r(this.negative === 0, "imaskn works only with positive numbers"),
            this.length <= u)
                return this;
            if (f !== 0 && u++,
            this.length = Math.min(u, this.length),
            f !== 0) {
                var l = 67108863 ^ 67108863 >>> f << f;
                this.words[this.length - 1] &= l
            }
            return this._strip()
        }
        ,
        o.prototype.maskn = function(e) {
            return this.clone().imaskn(e)
        }
        ,
        o.prototype.iaddn = function(e) {
            return r(typeof e == "number"),
            r(e < 67108864),
            e < 0 ? this.isubn(-e) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= e ? (this.words[0] = e - (this.words[0] | 0),
            this.negative = 0,
            this) : (this.negative = 0,
            this.isubn(e),
            this.negative = 1,
            this) : this._iaddn(e)
        }
        ,
        o.prototype._iaddn = function(e) {
            this.words[0] += e;
            for (var f = 0; f < this.length && this.words[f] >= 67108864; f++)
                this.words[f] -= 67108864,
                f === this.length - 1 ? this.words[f + 1] = 1 : this.words[f + 1]++;
            return this.length = Math.max(this.length, f + 1),
            this
        }
        ,
        o.prototype.isubn = function(e) {
            if (r(typeof e == "number"),
            r(e < 67108864),
            e < 0)
                return this.iaddn(-e);
            if (this.negative !== 0)
                return this.negative = 0,
                this.iaddn(e),
                this.negative = 1,
                this;
            if (this.words[0] -= e,
            this.length === 1 && this.words[0] < 0)
                this.words[0] = -this.words[0],
                this.negative = 1;
            else
                for (var f = 0; f < this.length && this.words[f] < 0; f++)
                    this.words[f] += 67108864,
                    this.words[f + 1] -= 1;
            return this._strip()
        }
        ,
        o.prototype.addn = function(e) {
            return this.clone().iaddn(e)
        }
        ,
        o.prototype.subn = function(e) {
            return this.clone().isubn(e)
        }
        ,
        o.prototype.iabs = function() {
            return this.negative = 0,
            this
        }
        ,
        o.prototype.abs = function() {
            return this.clone().iabs()
        }
        ,
        o.prototype._ishlnsubmul = function(e, f, u) {
            var l = e.length + u, c;
            this._expand(l);
            var y, w = 0;
            for (c = 0; c < e.length; c++) {
                y = (this.words[c + u] | 0) + w;
                var p = (e.words[c] | 0) * f;
                y -= p & 67108863,
                w = (y >> 26) - (p / 67108864 | 0),
                this.words[c + u] = y & 67108863
            }
            for (; c < this.length - u; c++)
                y = (this.words[c + u] | 0) + w,
                w = y >> 26,
                this.words[c + u] = y & 67108863;
            if (w === 0)
                return this._strip();
            for (r(w === -1),
            w = 0,
            c = 0; c < this.length; c++)
                y = -(this.words[c] | 0) + w,
                w = y >> 26,
                this.words[c] = y & 67108863;
            return this.negative = 1,
            this._strip()
        }
        ,
        o.prototype._wordDiv = function(e, f) {
            var u = this.length - e.length
              , l = this.clone()
              , c = e
              , y = c.words[c.length - 1] | 0
              , w = this._countBits(y);
            u = 26 - w,
            u !== 0 && (c = c.ushln(u),
            l.iushln(u),
            y = c.words[c.length - 1] | 0);
            var p = l.length - c.length, h;
            if (f !== "mod") {
                h = new o(null),
                h.length = p + 1,
                h.words = new Array(h.length);
                for (var d = 0; d < h.length; d++)
                    h.words[d] = 0
            }
            var A = l.clone()._ishlnsubmul(c, 1, p);
            A.negative === 0 && (l = A,
            h && (h.words[p] = 1));
            for (var F = p - 1; F >= 0; F--) {
                var _ = (l.words[c.length + F] | 0) * 67108864 + (l.words[c.length + F - 1] | 0);
                for (_ = Math.min(_ / y | 0, 67108863),
                l._ishlnsubmul(c, _, F); l.negative !== 0; )
                    _--,
                    l.negative = 0,
                    l._ishlnsubmul(c, 1, F),
                    l.isZero() || (l.negative ^= 1);
                h && (h.words[F] = _)
            }
            return h && h._strip(),
            l._strip(),
            f !== "div" && u !== 0 && l.iushrn(u),
            {
                div: h || null,
                mod: l
            }
        }
        ,
        o.prototype.divmod = function(e, f, u) {
            if (r(!e.isZero()),
            this.isZero())
                return {
                    div: new o(0),
                    mod: new o(0)
                };
            var l, c, y;
            return this.negative !== 0 && e.negative === 0 ? (y = this.neg().divmod(e, f),
            f !== "mod" && (l = y.div.neg()),
            f !== "div" && (c = y.mod.neg(),
            u && c.negative !== 0 && c.iadd(e)),
            {
                div: l,
                mod: c
            }) : this.negative === 0 && e.negative !== 0 ? (y = this.divmod(e.neg(), f),
            f !== "mod" && (l = y.div.neg()),
            {
                div: l,
                mod: y.mod
            }) : this.negative & e.negative ? (y = this.neg().divmod(e.neg(), f),
            f !== "div" && (c = y.mod.neg(),
            u && c.negative !== 0 && c.isub(e)),
            {
                div: y.div,
                mod: c
            }) : e.length > this.length || this.cmp(e) < 0 ? {
                div: new o(0),
                mod: this
            } : e.length === 1 ? f === "div" ? {
                div: this.divn(e.words[0]),
                mod: null
            } : f === "mod" ? {
                div: null,
                mod: new o(this.modrn(e.words[0]))
            } : {
                div: this.divn(e.words[0]),
                mod: new o(this.modrn(e.words[0]))
            } : this._wordDiv(e, f)
        }
        ,
        o.prototype.div = function(e) {
            return this.divmod(e, "div", !1).div
        }
        ,
        o.prototype.mod = function(e) {
            return this.divmod(e, "mod", !1).mod
        }
        ,
        o.prototype.umod = function(e) {
            return this.divmod(e, "mod", !0).mod
        }
        ,
        o.prototype.divRound = function(e) {
            var f = this.divmod(e);
            if (f.mod.isZero())
                return f.div;
            var u = f.div.negative !== 0 ? f.mod.isub(e) : f.mod
              , l = e.ushrn(1)
              , c = e.andln(1)
              , y = u.cmp(l);
            return y < 0 || c === 1 && y === 0 ? f.div : f.div.negative !== 0 ? f.div.isubn(1) : f.div.iaddn(1)
        }
        ,
        o.prototype.modrn = function(e) {
            var f = e < 0;
            f && (e = -e),
            r(e <= 67108863);
            for (var u = (1 << 26) % e, l = 0, c = this.length - 1; c >= 0; c--)
                l = (u * l + (this.words[c] | 0)) % e;
            return f ? -l : l
        }
        ,
        o.prototype.modn = function(e) {
            return this.modrn(e)
        }
        ,
        o.prototype.idivn = function(e) {
            var f = e < 0;
            f && (e = -e),
            r(e <= 67108863);
            for (var u = 0, l = this.length - 1; l >= 0; l--) {
                var c = (this.words[l] | 0) + u * 67108864;
                this.words[l] = c / e | 0,
                u = c % e
            }
            return this._strip(),
            f ? this.ineg() : this
        }
        ,
        o.prototype.divn = function(e) {
            return this.clone().idivn(e)
        }
        ,
        o.prototype.egcd = function(e) {
            r(e.negative === 0),
            r(!e.isZero());
            var f = this
              , u = e.clone();
            f.negative !== 0 ? f = f.umod(e) : f = f.clone();
            for (var l = new o(1), c = new o(0), y = new o(0), w = new o(1), p = 0; f.isEven() && u.isEven(); )
                f.iushrn(1),
                u.iushrn(1),
                ++p;
            for (var h = u.clone(), d = f.clone(); !f.isZero(); ) {
                for (var A = 0, F = 1; !(f.words[0] & F) && A < 26; ++A,
                F <<= 1)
                    ;
                if (A > 0)
                    for (f.iushrn(A); A-- > 0; )
                        (l.isOdd() || c.isOdd()) && (l.iadd(h),
                        c.isub(d)),
                        l.iushrn(1),
                        c.iushrn(1);
                for (var _ = 0, U = 1; !(u.words[0] & U) && _ < 26; ++_,
                U <<= 1)
                    ;
                if (_ > 0)
                    for (u.iushrn(_); _-- > 0; )
                        (y.isOdd() || w.isOdd()) && (y.iadd(h),
                        w.isub(d)),
                        y.iushrn(1),
                        w.iushrn(1);
                f.cmp(u) >= 0 ? (f.isub(u),
                l.isub(y),
                c.isub(w)) : (u.isub(f),
                y.isub(l),
                w.isub(c))
            }
            return {
                a: y,
                b: w,
                gcd: u.iushln(p)
            }
        }
        ,
        o.prototype._invmp = function(e) {
            r(e.negative === 0),
            r(!e.isZero());
            var f = this
              , u = e.clone();
            f.negative !== 0 ? f = f.umod(e) : f = f.clone();
            for (var l = new o(1), c = new o(0), y = u.clone(); f.cmpn(1) > 0 && u.cmpn(1) > 0; ) {
                for (var w = 0, p = 1; !(f.words[0] & p) && w < 26; ++w,
                p <<= 1)
                    ;
                if (w > 0)
                    for (f.iushrn(w); w-- > 0; )
                        l.isOdd() && l.iadd(y),
                        l.iushrn(1);
                for (var h = 0, d = 1; !(u.words[0] & d) && h < 26; ++h,
                d <<= 1)
                    ;
                if (h > 0)
                    for (u.iushrn(h); h-- > 0; )
                        c.isOdd() && c.iadd(y),
                        c.iushrn(1);
                f.cmp(u) >= 0 ? (f.isub(u),
                l.isub(c)) : (u.isub(f),
                c.isub(l))
            }
            var A;
            return f.cmpn(1) === 0 ? A = l : A = c,
            A.cmpn(0) < 0 && A.iadd(e),
            A
        }
        ,
        o.prototype.gcd = function(e) {
            if (this.isZero())
                return e.abs();
            if (e.isZero())
                return this.abs();
            var f = this.clone()
              , u = e.clone();
            f.negative = 0,
            u.negative = 0;
            for (var l = 0; f.isEven() && u.isEven(); l++)
                f.iushrn(1),
                u.iushrn(1);
            do {
                for (; f.isEven(); )
                    f.iushrn(1);
                for (; u.isEven(); )
                    u.iushrn(1);
                var c = f.cmp(u);
                if (c < 0) {
                    var y = f;
                    f = u,
                    u = y
                } else if (c === 0 || u.cmpn(1) === 0)
                    break;
                f.isub(u)
            } while (!0);
            return u.iushln(l)
        }
        ,
        o.prototype.invm = function(e) {
            return this.egcd(e).a.umod(e)
        }
        ,
        o.prototype.isEven = function() {
            return (this.words[0] & 1) === 0
        }
        ,
        o.prototype.isOdd = function() {
            return (this.words[0] & 1) === 1
        }
        ,
        o.prototype.andln = function(e) {
            return this.words[0] & e
        }
        ,
        o.prototype.bincn = function(e) {
            r(typeof e == "number");
            var f = e % 26
              , u = (e - f) / 26
              , l = 1 << f;
            if (this.length <= u)
                return this._expand(u + 1),
                this.words[u] |= l,
                this;
            for (var c = l, y = u; c !== 0 && y < this.length; y++) {
                var w = this.words[y] | 0;
                w += c,
                c = w >>> 26,
                w &= 67108863,
                this.words[y] = w
            }
            return c !== 0 && (this.words[y] = c,
            this.length++),
            this
        }
        ,
        o.prototype.isZero = function() {
            return this.length === 1 && this.words[0] === 0
        }
        ,
        o.prototype.cmpn = function(e) {
            var f = e < 0;
            if (this.negative !== 0 && !f)
                return -1;
            if (this.negative === 0 && f)
                return 1;
            this._strip();
            var u;
            if (this.length > 1)
                u = 1;
            else {
                f && (e = -e),
                r(e <= 67108863, "Number is too big");
                var l = this.words[0] | 0;
                u = l === e ? 0 : l < e ? -1 : 1
            }
            return this.negative !== 0 ? -u | 0 : u
        }
        ,
        o.prototype.cmp = function(e) {
            if (this.negative !== 0 && e.negative === 0)
                return -1;
            if (this.negative === 0 && e.negative !== 0)
                return 1;
            var f = this.ucmp(e);
            return this.negative !== 0 ? -f | 0 : f
        }
        ,
        o.prototype.ucmp = function(e) {
            if (this.length > e.length)
                return 1;
            if (this.length < e.length)
                return -1;
            for (var f = 0, u = this.length - 1; u >= 0; u--) {
                var l = this.words[u] | 0
                  , c = e.words[u] | 0;
                if (l !== c) {
                    l < c ? f = -1 : l > c && (f = 1);
                    break
                }
            }
            return f
        }
        ,
        o.prototype.gtn = function(e) {
            return this.cmpn(e) === 1
        }
        ,
        o.prototype.gt = function(e) {
            return this.cmp(e) === 1
        }
        ,
        o.prototype.gten = function(e) {
            return this.cmpn(e) >= 0
        }
        ,
        o.prototype.gte = function(e) {
            return this.cmp(e) >= 0
        }
        ,
        o.prototype.ltn = function(e) {
            return this.cmpn(e) === -1
        }
        ,
        o.prototype.lt = function(e) {
            return this.cmp(e) === -1
        }
        ,
        o.prototype.lten = function(e) {
            return this.cmpn(e) <= 0
        }
        ,
        o.prototype.lte = function(e) {
            return this.cmp(e) <= 0
        }
        ,
        o.prototype.eqn = function(e) {
            return this.cmpn(e) === 0
        }
        ,
        o.prototype.eq = function(e) {
            return this.cmp(e) === 0
        }
        ,
        o.red = function(e) {
            return new L(e)
        }
        ,
        o.prototype.toRed = function(e) {
            return r(!this.red, "Already a number in reduction context"),
            r(this.negative === 0, "red works only with positives"),
            e.convertTo(this)._forceRed(e)
        }
        ,
        o.prototype.fromRed = function() {
            return r(this.red, "fromRed works only with numbers in reduction context"),
            this.red.convertFrom(this)
        }
        ,
        o.prototype._forceRed = function(e) {
            return this.red = e,
            this
        }
        ,
        o.prototype.forceRed = function(e) {
            return r(!this.red, "Already a number in reduction context"),
            this._forceRed(e)
        }
        ,
        o.prototype.redAdd = function(e) {
            return r(this.red, "redAdd works only with red numbers"),
            this.red.add(this, e)
        }
        ,
        o.prototype.redIAdd = function(e) {
            return r(this.red, "redIAdd works only with red numbers"),
            this.red.iadd(this, e)
        }
        ,
        o.prototype.redSub = function(e) {
            return r(this.red, "redSub works only with red numbers"),
            this.red.sub(this, e)
        }
        ,
        o.prototype.redISub = function(e) {
            return r(this.red, "redISub works only with red numbers"),
            this.red.isub(this, e)
        }
        ,
        o.prototype.redShl = function(e) {
            return r(this.red, "redShl works only with red numbers"),
            this.red.shl(this, e)
        }
        ,
        o.prototype.redMul = function(e) {
            return r(this.red, "redMul works only with red numbers"),
            this.red._verify2(this, e),
            this.red.mul(this, e)
        }
        ,
        o.prototype.redIMul = function(e) {
            return r(this.red, "redMul works only with red numbers"),
            this.red._verify2(this, e),
            this.red.imul(this, e)
        }
        ,
        o.prototype.redSqr = function() {
            return r(this.red, "redSqr works only with red numbers"),
            this.red._verify1(this),
            this.red.sqr(this)
        }
        ,
        o.prototype.redISqr = function() {
            return r(this.red, "redISqr works only with red numbers"),
            this.red._verify1(this),
            this.red.isqr(this)
        }
        ,
        o.prototype.redSqrt = function() {
            return r(this.red, "redSqrt works only with red numbers"),
            this.red._verify1(this),
            this.red.sqrt(this)
        }
        ,
        o.prototype.redInvm = function() {
            return r(this.red, "redInvm works only with red numbers"),
            this.red._verify1(this),
            this.red.invm(this)
        }
        ,
        o.prototype.redNeg = function() {
            return r(this.red, "redNeg works only with red numbers"),
            this.red._verify1(this),
            this.red.neg(this)
        }
        ,
        o.prototype.redPow = function(e) {
            return r(this.red && !e.red, "redPow(normalNum)"),
            this.red._verify1(this),
            this.red.pow(this, e)
        }
        ;
        var er = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };
        function xt(m, e) {
            this.name = m,
            this.p = new o(e,16),
            this.n = this.p.bitLength(),
            this.k = new o(1).iushln(this.n).isub(this.p),
            this.tmp = this._tmp()
        }
        xt.prototype._tmp = function() {
            var e = new o(null);
            return e.words = new Array(Math.ceil(this.n / 13)),
            e
        }
        ,
        xt.prototype.ireduce = function(e) {
            var f = e, u;
            do
                this.split(f, this.tmp),
                f = this.imulK(f),
                f = f.iadd(this.tmp),
                u = f.bitLength();
            while (u > this.n);
            var l = u < this.n ? -1 : f.ucmp(this.p);
            return l === 0 ? (f.words[0] = 0,
            f.length = 1) : l > 0 ? f.isub(this.p) : f.strip !== void 0 ? f.strip() : f._strip(),
            f
        }
        ,
        xt.prototype.split = function(e, f) {
            e.iushrn(this.n, 0, f)
        }
        ,
        xt.prototype.imulK = function(e) {
            return e.imul(this.k)
        }
        ;
        function Vt() {
            xt.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }
        n(Vt, xt),
        Vt.prototype.split = function(e, f) {
            for (var u = 4194303, l = Math.min(e.length, 9), c = 0; c < l; c++)
                f.words[c] = e.words[c];
            if (f.length = l,
            e.length <= 9) {
                e.words[0] = 0,
                e.length = 1;
                return
            }
            var y = e.words[9];
            for (f.words[f.length++] = y & u,
            c = 10; c < e.length; c++) {
                var w = e.words[c] | 0;
                e.words[c - 10] = (w & u) << 4 | y >>> 22,
                y = w
            }
            y >>>= 22,
            e.words[c - 10] = y,
            y === 0 && e.length > 10 ? e.length -= 10 : e.length -= 9
        }
        ,
        Vt.prototype.imulK = function(e) {
            e.words[e.length] = 0,
            e.words[e.length + 1] = 0,
            e.length += 2;
            for (var f = 0, u = 0; u < e.length; u++) {
                var l = e.words[u] | 0;
                f += l * 977,
                e.words[u] = f & 67108863,
                f = l * 64 + (f / 67108864 | 0)
            }
            return e.words[e.length - 1] === 0 && (e.length--,
            e.words[e.length - 1] === 0 && e.length--),
            e
        }
        ;
        function Xr() {
            xt.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }
        n(Xr, xt);
        function Jr() {
            xt.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }
        n(Jr, xt);
        function nr() {
            xt.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }
        n(nr, xt),
        nr.prototype.imulK = function(e) {
            for (var f = 0, u = 0; u < e.length; u++) {
                var l = (e.words[u] | 0) * 19 + f
                  , c = l & 67108863;
                l >>>= 26,
                e.words[u] = c,
                f = l
            }
            return f !== 0 && (e.words[e.length++] = f),
            e
        }
        ,
        o._prime = function(e) {
            if (er[e])
                return er[e];
            var f;
            if (e === "k256")
                f = new Vt;
            else if (e === "p224")
                f = new Xr;
            else if (e === "p192")
                f = new Jr;
            else if (e === "p25519")
                f = new nr;
            else
                throw new Error("Unknown prime " + e);
            return er[e] = f,
            f
        }
        ;
        function L(m) {
            if (typeof m == "string") {
                var e = o._prime(m);
                this.m = e.p,
                this.prime = e
            } else
                r(m.gtn(1), "modulus must be greater than 1"),
                this.m = m,
                this.prime = null
        }
        L.prototype._verify1 = function(e) {
            r(e.negative === 0, "red works only with positives"),
            r(e.red, "red works only with red numbers")
        }
        ,
        L.prototype._verify2 = function(e, f) {
            r((e.negative | f.negative) === 0, "red works only with positives"),
            r(e.red && e.red === f.red, "red works only with red numbers")
        }
        ,
        L.prototype.imod = function(e) {
            return this.prime ? this.prime.ireduce(e)._forceRed(this) : (I(e, e.umod(this.m)._forceRed(this)),
            e)
        }
        ,
        L.prototype.neg = function(e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
        }
        ,
        L.prototype.add = function(e, f) {
            this._verify2(e, f);
            var u = e.add(f);
            return u.cmp(this.m) >= 0 && u.isub(this.m),
            u._forceRed(this)
        }
        ,
        L.prototype.iadd = function(e, f) {
            this._verify2(e, f);
            var u = e.iadd(f);
            return u.cmp(this.m) >= 0 && u.isub(this.m),
            u
        }
        ,
        L.prototype.sub = function(e, f) {
            this._verify2(e, f);
            var u = e.sub(f);
            return u.cmpn(0) < 0 && u.iadd(this.m),
            u._forceRed(this)
        }
        ,
        L.prototype.isub = function(e, f) {
            this._verify2(e, f);
            var u = e.isub(f);
            return u.cmpn(0) < 0 && u.iadd(this.m),
            u
        }
        ,
        L.prototype.shl = function(e, f) {
            return this._verify1(e),
            this.imod(e.ushln(f))
        }
        ,
        L.prototype.imul = function(e, f) {
            return this._verify2(e, f),
            this.imod(e.imul(f))
        }
        ,
        L.prototype.mul = function(e, f) {
            return this._verify2(e, f),
            this.imod(e.mul(f))
        }
        ,
        L.prototype.isqr = function(e) {
            return this.imul(e, e.clone())
        }
        ,
        L.prototype.sqr = function(e) {
            return this.mul(e, e)
        }
        ,
        L.prototype.sqrt = function(e) {
            if (e.isZero())
                return e.clone();
            var f = this.m.andln(3);
            if (r(f % 2 === 1),
            f === 3) {
                var u = this.m.add(new o(1)).iushrn(2);
                return this.pow(e, u)
            }
            for (var l = this.m.subn(1), c = 0; !l.isZero() && l.andln(1) === 0; )
                c++,
                l.iushrn(1);
            r(!l.isZero());
            var y = new o(1).toRed(this)
              , w = y.redNeg()
              , p = this.m.subn(1).iushrn(1)
              , h = this.m.bitLength();
            for (h = new o(2 * h * h).toRed(this); this.pow(h, p).cmp(w) !== 0; )
                h.redIAdd(w);
            for (var d = this.pow(h, l), A = this.pow(e, l.addn(1).iushrn(1)), F = this.pow(e, l), _ = c; F.cmp(y) !== 0; ) {
                for (var U = F, b = 0; U.cmp(y) !== 0; b++)
                    U = U.redSqr();
                r(b < _);
                var R = this.pow(d, new o(1).iushln(_ - b - 1));
                A = A.redMul(R),
                d = R.redSqr(),
                F = F.redMul(d),
                _ = b
            }
            return A
        }
        ,
        L.prototype.invm = function(e) {
            var f = e._invmp(this.m);
            return f.negative !== 0 ? (f.negative = 0,
            this.imod(f).redNeg()) : this.imod(f)
        }
        ,
        L.prototype.pow = function(e, f) {
            if (f.isZero())
                return new o(1).toRed(this);
            if (f.cmpn(1) === 0)
                return e.clone();
            var u = 4
              , l = new Array(1 << u);
            l[0] = new o(1).toRed(this),
            l[1] = e;
            for (var c = 2; c < l.length; c++)
                l[c] = this.mul(l[c - 1], e);
            var y = l[0]
              , w = 0
              , p = 0
              , h = f.bitLength() % 26;
            for (h === 0 && (h = 26),
            c = f.length - 1; c >= 0; c--) {
                for (var d = f.words[c], A = h - 1; A >= 0; A--) {
                    var F = d >> A & 1;
                    if (y !== l[0] && (y = this.sqr(y)),
                    F === 0 && w === 0) {
                        p = 0;
                        continue
                    }
                    w <<= 1,
                    w |= F,
                    p++,
                    !(p !== u && (c !== 0 || A !== 0)) && (y = this.mul(y, l[w]),
                    p = 0,
                    w = 0)
                }
                h = 26
            }
            return y
        }
        ,
        L.prototype.convertTo = function(e) {
            var f = e.umod(this.m);
            return f === e ? f.clone() : f
        }
        ,
        L.prototype.convertFrom = function(e) {
            var f = e.clone();
            return f.red = null,
            f
        }
        ,
        o.mont = function(e) {
            return new St(e)
        }
        ;
        function St(m) {
            L.call(this, m),
            this.shift = this.m.bitLength(),
            this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26),
            this.r = new o(1).iushln(this.shift),
            this.r2 = this.imod(this.r.sqr()),
            this.rinv = this.r._invmp(this.m),
            this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
            this.minv = this.minv.umod(this.r),
            this.minv = this.r.sub(this.minv)
        }
        n(St, L),
        St.prototype.convertTo = function(e) {
            return this.imod(e.ushln(this.shift))
        }
        ,
        St.prototype.convertFrom = function(e) {
            var f = this.imod(e.mul(this.rinv));
            return f.red = null,
            f
        }
        ,
        St.prototype.imul = function(e, f) {
            if (e.isZero() || f.isZero())
                return e.words[0] = 0,
                e.length = 1,
                e;
            var u = e.imul(f)
              , l = u.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
              , c = u.isub(l).iushrn(this.shift)
              , y = c;
            return c.cmp(this.m) >= 0 ? y = c.isub(this.m) : c.cmpn(0) < 0 && (y = c.iadd(this.m)),
            y._forceRed(this)
        }
        ,
        St.prototype.mul = function(e, f) {
            if (e.isZero() || f.isZero())
                return new o(0)._forceRed(this);
            var u = e.mul(f)
              , l = u.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
              , c = u.isub(l).iushrn(this.shift)
              , y = c;
            return c.cmp(this.m) >= 0 ? y = c.isub(this.m) : c.cmpn(0) < 0 && (y = c.iadd(this.m)),
            y._forceRed(this)
        }
        ,
        St.prototype.invm = function(e) {
            var f = this.imod(e._invmp(this.m).mul(this.r2));
            return f._forceRed(this)
        }
    }
    )(typeof zr > "u" || zr, Ji)
}
);
var on = Dt( (Yr, ji) => {
    "use strict";
    var rr = Li()
      , At = rr.Buffer;
    function Qi(i, t) {
        for (var r in i)
            t[r] = i[r]
    }
    At.from && At.alloc && At.allocUnsafe && At.allocUnsafeSlow ? ji.exports = rr : (Qi(rr, Yr),
    Yr.Buffer = Nt);
    function Nt(i, t, r) {
        return At(i, t, r)
    }
    Nt.prototype = Object.create(At.prototype);
    Qi(At, Nt);
    Nt.from = function(i, t, r) {
        if (typeof i == "number")
            throw new TypeError("Argument must not be a number");
        return At(i, t, r)
    }
    ;
    Nt.alloc = function(i, t, r) {
        if (typeof i != "number")
            throw new TypeError("Argument must be a number");
        var n = At(i);
        return t !== void 0 ? typeof r == "string" ? n.fill(t, r) : n.fill(t) : n.fill(0),
        n
    }
    ;
    Nt.allocUnsafe = function(i) {
        if (typeof i != "number")
            throw new TypeError("Argument must be a number");
        return At(i)
    }
    ;
    Nt.allocUnsafeSlow = function(i) {
        if (typeof i != "number")
            throw new TypeError("Argument must be a number");
        return rr.SlowBuffer(i)
    }
}
);
export {Li as a, nn as b, on as c};
