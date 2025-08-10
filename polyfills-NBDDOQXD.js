var Wt = (n, t) => () => (t || n((t = {
    exports: {}
}).exports, t),
t.exports);
var en = Wt(Qt => {
    "use strict";
    Qt.byteLength = Jn;
    Qt.toByteArray = tr;
    Qt.fromByteArray = rr;
    var dt = []
      , st = []
      , Kn = typeof Uint8Array < "u" ? Uint8Array : Array
      , me = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (Ct = 0,
    Qe = me.length; Ct < Qe; ++Ct)
        dt[Ct] = me[Ct],
        st[me.charCodeAt(Ct)] = Ct;
    var Ct, Qe;
    st[45] = 62;
    st[95] = 63;
    function tn(n) {
        var t = n.length;
        if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var e = n.indexOf("=");
        e === -1 && (e = t);
        var r = e === t ? 0 : 4 - e % 4;
        return [e, r]
    }
    function Jn(n) {
        var t = tn(n)
          , e = t[0]
          , r = t[1];
        return (e + r) * 3 / 4 - r
    }
    function Qn(n, t, e) {
        return (t + e) * 3 / 4 - e
    }
    function tr(n) {
        var t, e = tn(n), r = e[0], i = e[1], o = new Kn(Qn(n, r, i)), s = 0, f = i > 0 ? r - 4 : r, h;
        for (h = 0; h < f; h += 4)
            t = st[n.charCodeAt(h)] << 18 | st[n.charCodeAt(h + 1)] << 12 | st[n.charCodeAt(h + 2)] << 6 | st[n.charCodeAt(h + 3)],
            o[s++] = t >> 16 & 255,
            o[s++] = t >> 8 & 255,
            o[s++] = t & 255;
        return i === 2 && (t = st[n.charCodeAt(h)] << 2 | st[n.charCodeAt(h + 1)] >> 4,
        o[s++] = t & 255),
        i === 1 && (t = st[n.charCodeAt(h)] << 10 | st[n.charCodeAt(h + 1)] << 4 | st[n.charCodeAt(h + 2)] >> 2,
        o[s++] = t >> 8 & 255,
        o[s++] = t & 255),
        o
    }
    function er(n) {
        return dt[n >> 18 & 63] + dt[n >> 12 & 63] + dt[n >> 6 & 63] + dt[n & 63]
    }
    function nr(n, t, e) {
        for (var r, i = [], o = t; o < e; o += 3)
            r = (n[o] << 16 & 16711680) + (n[o + 1] << 8 & 65280) + (n[o + 2] & 255),
            i.push(er(r));
        return i.join("")
    }
    function rr(n) {
        for (var t, e = n.length, r = e % 3, i = [], o = 16383, s = 0, f = e - r; s < f; s += o)
            i.push(nr(n, s, s + o > f ? f : s + o));
        return r === 1 ? (t = n[e - 1],
        i.push(dt[t >> 2] + dt[t << 4 & 63] + "==")) : r === 2 && (t = (n[e - 2] << 8) + n[e - 1],
        i.push(dt[t >> 10] + dt[t >> 4 & 63] + dt[t << 2 & 63] + "=")),
        i.join("")
    }
}
);
var nn = Wt(Te => {
    "use strict";
    Te.read = function(n, t, e, r, i) {
        var o, s, f = i * 8 - r - 1, h = (1 << f) - 1, m = h >> 1, d = -7, p = e ? i - 1 : 0, A = e ? -1 : 1, F = n[t + p];
        for (p += A,
        o = F & (1 << -d) - 1,
        F >>= -d,
        d += f; d > 0; o = o * 256 + n[t + p],
        p += A,
        d -= 8)
            ;
        for (s = o & (1 << -d) - 1,
        o >>= -d,
        d += r; d > 0; s = s * 256 + n[t + p],
        p += A,
        d -= 8)
            ;
        if (o === 0)
            o = 1 - m;
        else {
            if (o === h)
                return s ? NaN : (F ? -1 : 1) * (1 / 0);
            s = s + Math.pow(2, r),
            o = o - m
        }
        return (F ? -1 : 1) * s * Math.pow(2, o - r)
    }
    ;
    Te.write = function(n, t, e, r, i, o) {
        var s, f, h, m = o * 8 - i - 1, d = (1 << m) - 1, p = d >> 1, A = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, F = r ? 0 : o - 1, j = r ? 1 : -1, Q = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
        isNaN(t) || t === 1 / 0 ? (f = isNaN(t) ? 1 : 0,
        s = d) : (s = Math.floor(Math.log(t) / Math.LN2),
        t * (h = Math.pow(2, -s)) < 1 && (s--,
        h *= 2),
        s + p >= 1 ? t += A / h : t += A * Math.pow(2, 1 - p),
        t * h >= 2 && (s++,
        h /= 2),
        s + p >= d ? (f = 0,
        s = d) : s + p >= 1 ? (f = (t * h - 1) * Math.pow(2, i),
        s = s + p) : (f = t * Math.pow(2, p - 1) * Math.pow(2, i),
        s = 0)); i >= 8; n[e + F] = f & 255,
        F += j,
        f /= 256,
        i -= 8)
            ;
        for (s = s << i | f,
        m += i; m > 0; n[e + F] = s & 255,
        F += j,
        s /= 256,
        m -= 8)
            ;
        n[e + F - j] |= Q * 128
    }
}
);
var Ae = Wt($t => {
    "use strict";
    var _e = en()
      , Lt = nn()
      , rn = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    $t.Buffer = l;
    $t.SlowBuffer = ar;
    $t.INSPECT_MAX_BYTES = 50;
    var te = 2147483647;
    $t.kMaxLength = te;
    l.TYPED_ARRAY_SUPPORT = ir();
    !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function ir() {
        try {
            let n = new Uint8Array(1)
              , t = {
                foo: function() {
                    return 42
                }
            };
            return Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(n, t),
            n.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(l.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (l.isBuffer(this))
                return this.buffer
        }
    });
    Object.defineProperty(l.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (l.isBuffer(this))
                return this.byteOffset
        }
    });
    function xt(n) {
        if (n > te)
            throw new RangeError('The value "' + n + '" is invalid for option "size"');
        let t = new Uint8Array(n);
        return Object.setPrototypeOf(t, l.prototype),
        t
    }
    function l(n, t, e) {
        if (typeof n == "number") {
            if (typeof t == "string")
                throw new TypeError('The "string" argument must be of type string. Received type number');
            return Ie(n)
        }
        return un(n, t, e)
    }
    l.poolSize = 8192;
    function un(n, t, e) {
        if (typeof n == "string")
            return sr(n, t);
        if (ArrayBuffer.isView(n))
            return cr(n);
        if (n == null)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n);
        if (pt(n, ArrayBuffer) || n && pt(n.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (pt(n, SharedArrayBuffer) || n && pt(n.buffer, SharedArrayBuffer)))
            return ke(n, t, e);
        if (typeof n == "number")
            throw new TypeError('The "value" argument must not be of type number. Received type number');
        let r = n.valueOf && n.valueOf();
        if (r != null && r !== n)
            return l.from(r, t, e);
        let i = ur(n);
        if (i)
            return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof n[Symbol.toPrimitive] == "function")
            return l.from(n[Symbol.toPrimitive]("string"), t, e);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof n)
    }
    l.from = function(n, t, e) {
        return un(n, t, e)
    }
    ;
    Object.setPrototypeOf(l.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(l, Uint8Array);
    function an(n) {
        if (typeof n != "number")
            throw new TypeError('"size" argument must be of type number');
        if (n < 0)
            throw new RangeError('The value "' + n + '" is invalid for option "size"')
    }
    function or(n, t, e) {
        return an(n),
        n <= 0 ? xt(n) : t !== void 0 ? typeof e == "string" ? xt(n).fill(t, e) : xt(n).fill(t) : xt(n)
    }
    l.alloc = function(n, t, e) {
        return or(n, t, e)
    }
    ;
    function Ie(n) {
        return an(n),
        xt(n < 0 ? 0 : Be(n) | 0)
    }
    l.allocUnsafe = function(n) {
        return Ie(n)
    }
    ;
    l.allocUnsafeSlow = function(n) {
        return Ie(n)
    }
    ;
    function sr(n, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"),
        !l.isEncoding(t))
            throw new TypeError("Unknown encoding: " + t);
        let e = ln(n, t) | 0
          , r = xt(e)
          , i = r.write(n, t);
        return i !== e && (r = r.slice(0, i)),
        r
    }
    function we(n) {
        let t = n.length < 0 ? 0 : Be(n.length) | 0
          , e = xt(t);
        for (let r = 0; r < t; r += 1)
            e[r] = n[r] & 255;
        return e
    }
    function cr(n) {
        if (pt(n, Uint8Array)) {
            let t = new Uint8Array(n);
            return ke(t.buffer, t.byteOffset, t.byteLength)
        }
        return we(n)
    }
    function ke(n, t, e) {
        if (t < 0 || n.byteLength < t)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (n.byteLength < t + (e || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        let r;
        return t === void 0 && e === void 0 ? r = new Uint8Array(n) : e === void 0 ? r = new Uint8Array(n,t) : r = new Uint8Array(n,t,e),
        Object.setPrototypeOf(r, l.prototype),
        r
    }
    function ur(n) {
        if (l.isBuffer(n)) {
            let t = Be(n.length) | 0
              , e = xt(t);
            return e.length === 0 || n.copy(e, 0, 0, t),
            e
        }
        if (n.length !== void 0)
            return typeof n.length != "number" || Re(n.length) ? xt(0) : we(n);
        if (n.type === "Buffer" && Array.isArray(n.data))
            return we(n.data)
    }
    function Be(n) {
        if (n >= te)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + te.toString(16) + " bytes");
        return n | 0
    }
    function ar(n) {
        return +n != n && (n = 0),
        l.alloc(+n)
    }
    l.isBuffer = function(t) {
        return t != null && t._isBuffer === !0 && t !== l.prototype
    }
    ;
    l.compare = function(t, e) {
        if (pt(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
        pt(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
        !l.isBuffer(t) || !l.isBuffer(e))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === e)
            return 0;
        let r = t.length
          , i = e.length;
        for (let o = 0, s = Math.min(r, i); o < s; ++o)
            if (t[o] !== e[o]) {
                r = t[o],
                i = e[o];
                break
            }
        return r < i ? -1 : i < r ? 1 : 0
    }
    ;
    l.isEncoding = function(t) {
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
    l.concat = function(t, e) {
        if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (t.length === 0)
            return l.alloc(0);
        let r;
        if (e === void 0)
            for (e = 0,
            r = 0; r < t.length; ++r)
                e += t[r].length;
        let i = l.allocUnsafe(e)
          , o = 0;
        for (r = 0; r < t.length; ++r) {
            let s = t[r];
            if (pt(s, Uint8Array))
                o + s.length > i.length ? (l.isBuffer(s) || (s = l.from(s)),
                s.copy(i, o)) : Uint8Array.prototype.set.call(i, s, o);
            else if (l.isBuffer(s))
                s.copy(i, o);
            else
                throw new TypeError('"list" argument must be an Array of Buffers');
            o += s.length
        }
        return i
    }
    ;
    function ln(n, t) {
        if (l.isBuffer(n))
            return n.length;
        if (ArrayBuffer.isView(n) || pt(n, ArrayBuffer))
            return n.byteLength;
        if (typeof n != "string")
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof n);
        let e = n.length
          , r = arguments.length > 2 && arguments[2] === !0;
        if (!r && e === 0)
            return 0;
        let i = !1;
        for (; ; )
            switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return e;
            case "utf8":
            case "utf-8":
                return xe(n).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return e * 2;
            case "hex":
                return e >>> 1;
            case "base64":
                return Tn(n).length;
            default:
                if (i)
                    return r ? -1 : xe(n).length;
                t = ("" + t).toLowerCase(),
                i = !0
            }
    }
    l.byteLength = ln;
    function lr(n, t, e) {
        let r = !1;
        if ((t === void 0 || t < 0) && (t = 0),
        t > this.length || ((e === void 0 || e > this.length) && (e = this.length),
        e <= 0) || (e >>>= 0,
        t >>>= 0,
        e <= t))
            return "";
        for (n || (n = "utf8"); ; )
            switch (n) {
            case "hex":
                return _r(this, t, e);
            case "utf8":
            case "utf-8":
                return hn(this, t, e);
            case "ascii":
                return mr(this, t, e);
            case "latin1":
            case "binary":
                return Tr(this, t, e);
            case "base64":
                return gr(this, t, e);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return wr(this, t, e);
            default:
                if (r)
                    throw new TypeError("Unknown encoding: " + n);
                n = (n + "").toLowerCase(),
                r = !0
            }
    }
    l.prototype._isBuffer = !0;
    function St(n, t, e) {
        let r = n[t];
        n[t] = n[e],
        n[e] = r
    }
    l.prototype.swap16 = function() {
        let t = this.length;
        if (t % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let e = 0; e < t; e += 2)
            St(this, e, e + 1);
        return this
    }
    ;
    l.prototype.swap32 = function() {
        let t = this.length;
        if (t % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let e = 0; e < t; e += 4)
            St(this, e, e + 3),
            St(this, e + 1, e + 2);
        return this
    }
    ;
    l.prototype.swap64 = function() {
        let t = this.length;
        if (t % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let e = 0; e < t; e += 8)
            St(this, e, e + 7),
            St(this, e + 1, e + 6),
            St(this, e + 2, e + 5),
            St(this, e + 3, e + 4);
        return this
    }
    ;
    l.prototype.toString = function() {
        let t = this.length;
        return t === 0 ? "" : arguments.length === 0 ? hn(this, 0, t) : lr.apply(this, arguments)
    }
    ;
    l.prototype.toLocaleString = l.prototype.toString;
    l.prototype.equals = function(t) {
        if (!l.isBuffer(t))
            throw new TypeError("Argument must be a Buffer");
        return this === t ? !0 : l.compare(this, t) === 0
    }
    ;
    l.prototype.inspect = function() {
        let t = ""
          , e = $t.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(),
        this.length > e && (t += " ... "),
        "<Buffer " + t + ">"
    }
    ;
    rn && (l.prototype[rn] = l.prototype.inspect);
    l.prototype.compare = function(t, e, r, i, o) {
        if (pt(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
        !l.isBuffer(t))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (e === void 0 && (e = 0),
        r === void 0 && (r = t ? t.length : 0),
        i === void 0 && (i = 0),
        o === void 0 && (o = this.length),
        e < 0 || r > t.length || i < 0 || o > this.length)
            throw new RangeError("out of range index");
        if (i >= o && e >= r)
            return 0;
        if (i >= o)
            return -1;
        if (e >= r)
            return 1;
        if (e >>>= 0,
        r >>>= 0,
        i >>>= 0,
        o >>>= 0,
        this === t)
            return 0;
        let s = o - i
          , f = r - e
          , h = Math.min(s, f)
          , m = this.slice(i, o)
          , d = t.slice(e, r);
        for (let p = 0; p < h; ++p)
            if (m[p] !== d[p]) {
                s = m[p],
                f = d[p];
                break
            }
        return s < f ? -1 : f < s ? 1 : 0
    }
    ;
    function fn(n, t, e, r, i) {
        if (n.length === 0)
            return -1;
        if (typeof e == "string" ? (r = e,
        e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648),
        e = +e,
        Re(e) && (e = i ? 0 : n.length - 1),
        e < 0 && (e = n.length + e),
        e >= n.length) {
            if (i)
                return -1;
            e = n.length - 1
        } else if (e < 0)
            if (i)
                e = 0;
            else
                return -1;
        if (typeof t == "string" && (t = l.from(t, r)),
        l.isBuffer(t))
            return t.length === 0 ? -1 : on(n, t, e, r, i);
        if (typeof t == "number")
            return t = t & 255,
            typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(n, t, e) : Uint8Array.prototype.lastIndexOf.call(n, t, e) : on(n, [t], e, r, i);
        throw new TypeError("val must be string, number or Buffer")
    }
    function on(n, t, e, r, i) {
        let o = 1
          , s = n.length
          , f = t.length;
        if (r !== void 0 && (r = String(r).toLowerCase(),
        r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
            if (n.length < 2 || t.length < 2)
                return -1;
            o = 2,
            s /= 2,
            f /= 2,
            e /= 2
        }
        function h(d, p) {
            return o === 1 ? d[p] : d.readUInt16BE(p * o)
        }
        let m;
        if (i) {
            let d = -1;
            for (m = e; m < s; m++)
                if (h(n, m) === h(t, d === -1 ? 0 : m - d)) {
                    if (d === -1 && (d = m),
                    m - d + 1 === f)
                        return d * o
                } else
                    d !== -1 && (m -= m - d),
                    d = -1
        } else
            for (e + f > s && (e = s - f),
            m = e; m >= 0; m--) {
                let d = !0;
                for (let p = 0; p < f; p++)
                    if (h(n, m + p) !== h(t, p)) {
                        d = !1;
                        break
                    }
                if (d)
                    return m
            }
        return -1
    }
    l.prototype.includes = function(t, e, r) {
        return this.indexOf(t, e, r) !== -1
    }
    ;
    l.prototype.indexOf = function(t, e, r) {
        return fn(this, t, e, r, !0)
    }
    ;
    l.prototype.lastIndexOf = function(t, e, r) {
        return fn(this, t, e, r, !1)
    }
    ;
    function fr(n, t, e, r) {
        e = Number(e) || 0;
        let i = n.length - e;
        r ? (r = Number(r),
        r > i && (r = i)) : r = i;
        let o = t.length;
        r > o / 2 && (r = o / 2);
        let s;
        for (s = 0; s < r; ++s) {
            let f = parseInt(t.substr(s * 2, 2), 16);
            if (Re(f))
                return s;
            n[e + s] = f
        }
        return s
    }
    function hr(n, t, e, r) {
        return ee(xe(t, n.length - e), n, e, r)
    }
    function dr(n, t, e, r) {
        return ee(Br(t), n, e, r)
    }
    function pr(n, t, e, r) {
        return ee(Tn(t), n, e, r)
    }
    function yr(n, t, e, r) {
        return ee(br(t, n.length - e), n, e, r)
    }
    l.prototype.write = function(t, e, r, i) {
        if (e === void 0)
            i = "utf8",
            r = this.length,
            e = 0;
        else if (r === void 0 && typeof e == "string")
            i = e,
            r = this.length,
            e = 0;
        else if (isFinite(e))
            e = e >>> 0,
            isFinite(r) ? (r = r >>> 0,
            i === void 0 && (i = "utf8")) : (i = r,
            r = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let o = this.length - e;
        if ((r === void 0 || r > o) && (r = o),
        t.length > 0 && (r < 0 || e < 0) || e > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        let s = !1;
        for (; ; )
            switch (i) {
            case "hex":
                return fr(this, t, e, r);
            case "utf8":
            case "utf-8":
                return hr(this, t, e, r);
            case "ascii":
            case "latin1":
            case "binary":
                return dr(this, t, e, r);
            case "base64":
                return pr(this, t, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return yr(this, t, e, r);
            default:
                if (s)
                    throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(),
                s = !0
            }
    }
    ;
    l.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    function gr(n, t, e) {
        return t === 0 && e === n.length ? _e.fromByteArray(n) : _e.fromByteArray(n.slice(t, e))
    }
    function hn(n, t, e) {
        e = Math.min(n.length, e);
        let r = []
          , i = t;
        for (; i < e; ) {
            let o = n[i]
              , s = null
              , f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
            if (i + f <= e) {
                let h, m, d, p;
                switch (f) {
                case 1:
                    o < 128 && (s = o);
                    break;
                case 2:
                    h = n[i + 1],
                    (h & 192) === 128 && (p = (o & 31) << 6 | h & 63,
                    p > 127 && (s = p));
                    break;
                case 3:
                    h = n[i + 1],
                    m = n[i + 2],
                    (h & 192) === 128 && (m & 192) === 128 && (p = (o & 15) << 12 | (h & 63) << 6 | m & 63,
                    p > 2047 && (p < 55296 || p > 57343) && (s = p));
                    break;
                case 4:
                    h = n[i + 1],
                    m = n[i + 2],
                    d = n[i + 3],
                    (h & 192) === 128 && (m & 192) === 128 && (d & 192) === 128 && (p = (o & 15) << 18 | (h & 63) << 12 | (m & 63) << 6 | d & 63,
                    p > 65535 && p < 1114112 && (s = p))
                }
            }
            s === null ? (s = 65533,
            f = 1) : s > 65535 && (s -= 65536,
            r.push(s >>> 10 & 1023 | 55296),
            s = 56320 | s & 1023),
            r.push(s),
            i += f
        }
        return Er(r)
    }
    var sn = 4096;
    function Er(n) {
        let t = n.length;
        if (t <= sn)
            return String.fromCharCode.apply(String, n);
        let e = ""
          , r = 0;
        for (; r < t; )
            e += String.fromCharCode.apply(String, n.slice(r, r += sn));
        return e
    }
    function mr(n, t, e) {
        let r = "";
        e = Math.min(n.length, e);
        for (let i = t; i < e; ++i)
            r += String.fromCharCode(n[i] & 127);
        return r
    }
    function Tr(n, t, e) {
        let r = "";
        e = Math.min(n.length, e);
        for (let i = t; i < e; ++i)
            r += String.fromCharCode(n[i]);
        return r
    }
    function _r(n, t, e) {
        let r = n.length;
        (!t || t < 0) && (t = 0),
        (!e || e < 0 || e > r) && (e = r);
        let i = "";
        for (let o = t; o < e; ++o)
            i += Rr[n[o]];
        return i
    }
    function wr(n, t, e) {
        let r = n.slice(t, e)
          , i = "";
        for (let o = 0; o < r.length - 1; o += 2)
            i += String.fromCharCode(r[o] + r[o + 1] * 256);
        return i
    }
    l.prototype.slice = function(t, e) {
        let r = this.length;
        t = ~~t,
        e = e === void 0 ? r : ~~e,
        t < 0 ? (t += r,
        t < 0 && (t = 0)) : t > r && (t = r),
        e < 0 ? (e += r,
        e < 0 && (e = 0)) : e > r && (e = r),
        e < t && (e = t);
        let i = this.subarray(t, e);
        return Object.setPrototypeOf(i, l.prototype),
        i
    }
    ;
    function tt(n, t, e) {
        if (n % 1 !== 0 || n < 0)
            throw new RangeError("offset is not uint");
        if (n + t > e)
            throw new RangeError("Trying to access beyond buffer length")
    }
    l.prototype.readUintLE = l.prototype.readUIntLE = function(t, e, r) {
        t = t >>> 0,
        e = e >>> 0,
        r || tt(t, e, this.length);
        let i = this[t]
          , o = 1
          , s = 0;
        for (; ++s < e && (o *= 256); )
            i += this[t + s] * o;
        return i
    }
    ;
    l.prototype.readUintBE = l.prototype.readUIntBE = function(t, e, r) {
        t = t >>> 0,
        e = e >>> 0,
        r || tt(t, e, this.length);
        let i = this[t + --e]
          , o = 1;
        for (; e > 0 && (o *= 256); )
            i += this[t + --e] * o;
        return i
    }
    ;
    l.prototype.readUint8 = l.prototype.readUInt8 = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 1, this.length),
        this[t]
    }
    ;
    l.prototype.readUint16LE = l.prototype.readUInt16LE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 2, this.length),
        this[t] | this[t + 1] << 8
    }
    ;
    l.prototype.readUint16BE = l.prototype.readUInt16BE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 2, this.length),
        this[t] << 8 | this[t + 1]
    }
    ;
    l.prototype.readUint32LE = l.prototype.readUInt32LE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216
    }
    ;
    l.prototype.readUint32BE = l.prototype.readUInt32BE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    }
    ;
    l.prototype.readBigUInt64LE = At(function(t) {
        t = t >>> 0,
        Mt(t, "offset");
        let e = this[t]
          , r = this[t + 7];
        (e === void 0 || r === void 0) && Vt(t, this.length - 8);
        let i = e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24
          , o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + r * 2 ** 24;
        return BigInt(i) + (BigInt(o) << BigInt(32))
    });
    l.prototype.readBigUInt64BE = At(function(t) {
        t = t >>> 0,
        Mt(t, "offset");
        let e = this[t]
          , r = this[t + 7];
        (e === void 0 || r === void 0) && Vt(t, this.length - 8);
        let i = e * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t]
          , o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + r;
        return (BigInt(i) << BigInt(32)) + BigInt(o)
    });
    l.prototype.readIntLE = function(t, e, r) {
        t = t >>> 0,
        e = e >>> 0,
        r || tt(t, e, this.length);
        let i = this[t]
          , o = 1
          , s = 0;
        for (; ++s < e && (o *= 256); )
            i += this[t + s] * o;
        return o *= 128,
        i >= o && (i -= Math.pow(2, 8 * e)),
        i
    }
    ;
    l.prototype.readIntBE = function(t, e, r) {
        t = t >>> 0,
        e = e >>> 0,
        r || tt(t, e, this.length);
        let i = e
          , o = 1
          , s = this[t + --i];
        for (; i > 0 && (o *= 256); )
            s += this[t + --i] * o;
        return o *= 128,
        s >= o && (s -= Math.pow(2, 8 * e)),
        s
    }
    ;
    l.prototype.readInt8 = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 1, this.length),
        this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    }
    ;
    l.prototype.readInt16LE = function(t, e) {
        t = t >>> 0,
        e || tt(t, 2, this.length);
        let r = this[t] | this[t + 1] << 8;
        return r & 32768 ? r | 4294901760 : r
    }
    ;
    l.prototype.readInt16BE = function(t, e) {
        t = t >>> 0,
        e || tt(t, 2, this.length);
        let r = this[t + 1] | this[t] << 8;
        return r & 32768 ? r | 4294901760 : r
    }
    ;
    l.prototype.readInt32LE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    }
    ;
    l.prototype.readInt32BE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    }
    ;
    l.prototype.readBigInt64LE = At(function(t) {
        t = t >>> 0,
        Mt(t, "offset");
        let e = this[t]
          , r = this[t + 7];
        (e === void 0 || r === void 0) && Vt(t, this.length - 8);
        let i = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (r << 24);
        return (BigInt(i) << BigInt(32)) + BigInt(e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24)
    });
    l.prototype.readBigInt64BE = At(function(t) {
        t = t >>> 0,
        Mt(t, "offset");
        let e = this[t]
          , r = this[t + 7];
        (e === void 0 || r === void 0) && Vt(t, this.length - 8);
        let i = (e << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
        return (BigInt(i) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + r)
    });
    l.prototype.readFloatLE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        Lt.read(this, t, !0, 23, 4)
    }
    ;
    l.prototype.readFloatBE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        Lt.read(this, t, !1, 23, 4)
    }
    ;
    l.prototype.readDoubleLE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 8, this.length),
        Lt.read(this, t, !0, 52, 8)
    }
    ;
    l.prototype.readDoubleBE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 8, this.length),
        Lt.read(this, t, !1, 52, 8)
    }
    ;
    function rt(n, t, e, r, i, o) {
        if (!l.isBuffer(n))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
            throw new RangeError('"value" argument is out of bounds');
        if (e + r > n.length)
            throw new RangeError("Index out of range")
    }
    l.prototype.writeUintLE = l.prototype.writeUIntLE = function(t, e, r, i) {
        if (t = +t,
        e = e >>> 0,
        r = r >>> 0,
        !i) {
            let f = Math.pow(2, 8 * r) - 1;
            rt(this, t, e, r, f, 0)
        }
        let o = 1
          , s = 0;
        for (this[e] = t & 255; ++s < r && (o *= 256); )
            this[e + s] = t / o & 255;
        return e + r
    }
    ;
    l.prototype.writeUintBE = l.prototype.writeUIntBE = function(t, e, r, i) {
        if (t = +t,
        e = e >>> 0,
        r = r >>> 0,
        !i) {
            let f = Math.pow(2, 8 * r) - 1;
            rt(this, t, e, r, f, 0)
        }
        let o = r - 1
          , s = 1;
        for (this[e + o] = t & 255; --o >= 0 && (s *= 256); )
            this[e + o] = t / s & 255;
        return e + r
    }
    ;
    l.prototype.writeUint8 = l.prototype.writeUInt8 = function(t, e, r) {
        return t = +t,
        e = e >>> 0,
        r || rt(this, t, e, 1, 255, 0),
        this[e] = t & 255,
        e + 1
    }
    ;
    l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(t, e, r) {
        return t = +t,
        e = e >>> 0,
        r || rt(this, t, e, 2, 65535, 0),
        this[e] = t & 255,
        this[e + 1] = t >>> 8,
        e + 2
    }
    ;
    l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(t, e, r) {
        return t = +t,
        e = e >>> 0,
        r || rt(this, t, e, 2, 65535, 0),
        this[e] = t >>> 8,
        this[e + 1] = t & 255,
        e + 2
    }
    ;
    l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(t, e, r) {
        return t = +t,
        e = e >>> 0,
        r || rt(this, t, e, 4, 4294967295, 0),
        this[e + 3] = t >>> 24,
        this[e + 2] = t >>> 16,
        this[e + 1] = t >>> 8,
        this[e] = t & 255,
        e + 4
    }
    ;
    l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(t, e, r) {
        return t = +t,
        e = e >>> 0,
        r || rt(this, t, e, 4, 4294967295, 0),
        this[e] = t >>> 24,
        this[e + 1] = t >>> 16,
        this[e + 2] = t >>> 8,
        this[e + 3] = t & 255,
        e + 4
    }
    ;
    function dn(n, t, e, r, i) {
        mn(t, r, i, n, e, 7);
        let o = Number(t & BigInt(4294967295));
        n[e++] = o,
        o = o >> 8,
        n[e++] = o,
        o = o >> 8,
        n[e++] = o,
        o = o >> 8,
        n[e++] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return n[e++] = s,
        s = s >> 8,
        n[e++] = s,
        s = s >> 8,
        n[e++] = s,
        s = s >> 8,
        n[e++] = s,
        e
    }
    function pn(n, t, e, r, i) {
        mn(t, r, i, n, e, 7);
        let o = Number(t & BigInt(4294967295));
        n[e + 7] = o,
        o = o >> 8,
        n[e + 6] = o,
        o = o >> 8,
        n[e + 5] = o,
        o = o >> 8,
        n[e + 4] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return n[e + 3] = s,
        s = s >> 8,
        n[e + 2] = s,
        s = s >> 8,
        n[e + 1] = s,
        s = s >> 8,
        n[e] = s,
        e + 8
    }
    l.prototype.writeBigUInt64LE = At(function(t, e=0) {
        return dn(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    l.prototype.writeBigUInt64BE = At(function(t, e=0) {
        return pn(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    l.prototype.writeIntLE = function(t, e, r, i) {
        if (t = +t,
        e = e >>> 0,
        !i) {
            let h = Math.pow(2, 8 * r - 1);
            rt(this, t, e, r, h - 1, -h)
        }
        let o = 0
          , s = 1
          , f = 0;
        for (this[e] = t & 255; ++o < r && (s *= 256); )
            t < 0 && f === 0 && this[e + o - 1] !== 0 && (f = 1),
            this[e + o] = (t / s >> 0) - f & 255;
        return e + r
    }
    ;
    l.prototype.writeIntBE = function(t, e, r, i) {
        if (t = +t,
        e = e >>> 0,
        !i) {
            let h = Math.pow(2, 8 * r - 1);
            rt(this, t, e, r, h - 1, -h)
        }
        let o = r - 1
          , s = 1
          , f = 0;
        for (this[e + o] = t & 255; --o >= 0 && (s *= 256); )
            t < 0 && f === 0 && this[e + o + 1] !== 0 && (f = 1),
            this[e + o] = (t / s >> 0) - f & 255;
        return e + r
    }
    ;
    l.prototype.writeInt8 = function(t, e, r) {
        return t = +t,
        e = e >>> 0,
        r || rt(this, t, e, 1, 127, -128),
        t < 0 && (t = 255 + t + 1),
        this[e] = t & 255,
        e + 1
    }
    ;
    l.prototype.writeInt16LE = function(t, e, r) {
        return t = +t,
        e = e >>> 0,
        r || rt(this, t, e, 2, 32767, -32768),
        this[e] = t & 255,
        this[e + 1] = t >>> 8,
        e + 2
    }
    ;
    l.prototype.writeInt16BE = function(t, e, r) {
        return t = +t,
        e = e >>> 0,
        r || rt(this, t, e, 2, 32767, -32768),
        this[e] = t >>> 8,
        this[e + 1] = t & 255,
        e + 2
    }
    ;
    l.prototype.writeInt32LE = function(t, e, r) {
        return t = +t,
        e = e >>> 0,
        r || rt(this, t, e, 4, 2147483647, -2147483648),
        this[e] = t & 255,
        this[e + 1] = t >>> 8,
        this[e + 2] = t >>> 16,
        this[e + 3] = t >>> 24,
        e + 4
    }
    ;
    l.prototype.writeInt32BE = function(t, e, r) {
        return t = +t,
        e = e >>> 0,
        r || rt(this, t, e, 4, 2147483647, -2147483648),
        t < 0 && (t = 4294967295 + t + 1),
        this[e] = t >>> 24,
        this[e + 1] = t >>> 16,
        this[e + 2] = t >>> 8,
        this[e + 3] = t & 255,
        e + 4
    }
    ;
    l.prototype.writeBigInt64LE = At(function(t, e=0) {
        return dn(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    l.prototype.writeBigInt64BE = At(function(t, e=0) {
        return pn(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    function yn(n, t, e, r, i, o) {
        if (e + r > n.length)
            throw new RangeError("Index out of range");
        if (e < 0)
            throw new RangeError("Index out of range")
    }
    function gn(n, t, e, r, i) {
        return t = +t,
        e = e >>> 0,
        i || yn(n, t, e, 4, 34028234663852886e22, -34028234663852886e22),
        Lt.write(n, t, e, r, 23, 4),
        e + 4
    }
    l.prototype.writeFloatLE = function(t, e, r) {
        return gn(this, t, e, !0, r)
    }
    ;
    l.prototype.writeFloatBE = function(t, e, r) {
        return gn(this, t, e, !1, r)
    }
    ;
    function En(n, t, e, r, i) {
        return t = +t,
        e = e >>> 0,
        i || yn(n, t, e, 8, 17976931348623157e292, -17976931348623157e292),
        Lt.write(n, t, e, r, 52, 8),
        e + 8
    }
    l.prototype.writeDoubleLE = function(t, e, r) {
        return En(this, t, e, !0, r)
    }
    ;
    l.prototype.writeDoubleBE = function(t, e, r) {
        return En(this, t, e, !1, r)
    }
    ;
    l.prototype.copy = function(t, e, r, i) {
        if (!l.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
        if (r || (r = 0),
        !i && i !== 0 && (i = this.length),
        e >= t.length && (e = t.length),
        e || (e = 0),
        i > 0 && i < r && (i = r),
        i === r || t.length === 0 || this.length === 0)
            return 0;
        if (e < 0)
            throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length)
            throw new RangeError("Index out of range");
        if (i < 0)
            throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length),
        t.length - e < i - r && (i = t.length - e + r);
        let o = i - r;
        return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, r, i) : Uint8Array.prototype.set.call(t, this.subarray(r, i), e),
        o
    }
    ;
    l.prototype.fill = function(t, e, r, i) {
        if (typeof t == "string") {
            if (typeof e == "string" ? (i = e,
            e = 0,
            r = this.length) : typeof r == "string" && (i = r,
            r = this.length),
            i !== void 0 && typeof i != "string")
                throw new TypeError("encoding must be a string");
            if (typeof i == "string" && !l.isEncoding(i))
                throw new TypeError("Unknown encoding: " + i);
            if (t.length === 1) {
                let s = t.charCodeAt(0);
                (i === "utf8" && s < 128 || i === "latin1") && (t = s)
            }
        } else
            typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
        if (e < 0 || this.length < e || this.length < r)
            throw new RangeError("Out of range index");
        if (r <= e)
            return this;
        e = e >>> 0,
        r = r === void 0 ? this.length : r >>> 0,
        t || (t = 0);
        let o;
        if (typeof t == "number")
            for (o = e; o < r; ++o)
                this[o] = t;
        else {
            let s = l.isBuffer(t) ? t : l.from(t, i)
              , f = s.length;
            if (f === 0)
                throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (o = 0; o < r - e; ++o)
                this[o + e] = s[o % f]
        }
        return this
    }
    ;
    var Ut = {};
    function be(n, t, e) {
        Ut[n] = class extends e {
            constructor() {
                super(),
                Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }),
                this.name = `${this.name} [${n}]`,
                this.stack,
                delete this.name
            }
            get code() {
                return n
            }
            set code(i) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${n}]: ${this.message}`
            }
        }
    }
    be("ERR_BUFFER_OUT_OF_BOUNDS", function(n) {
        return n ? `${n} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError);
    be("ERR_INVALID_ARG_TYPE", function(n, t) {
        return `The "${n}" argument must be of type number. Received type ${typeof t}`
    }, TypeError);
    be("ERR_OUT_OF_RANGE", function(n, t, e) {
        let r = `The value of "${n}" is out of range.`
          , i = e;
        return Number.isInteger(e) && Math.abs(e) > 2 ** 32 ? i = cn(String(e)) : typeof e == "bigint" && (i = String(e),
        (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) && (i = cn(i)),
        i += "n"),
        r += ` It must be ${t}. Received ${i}`,
        r
    }, RangeError);
    function cn(n) {
        let t = ""
          , e = n.length
          , r = n[0] === "-" ? 1 : 0;
        for (; e >= r + 4; e -= 3)
            t = `_${n.slice(e - 3, e)}${t}`;
        return `${n.slice(0, e)}${t}`
    }
    function kr(n, t, e) {
        Mt(t, "offset"),
        (n[t] === void 0 || n[t + e] === void 0) && Vt(t, n.length - (e + 1))
    }
    function mn(n, t, e, r, i, o) {
        if (n > e || n < t) {
            let s = typeof t == "bigint" ? "n" : "", f;
            throw o > 3 ? t === 0 || t === BigInt(0) ? f = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}` : f = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}` : f = `>= ${t}${s} and <= ${e}${s}`,
            new Ut.ERR_OUT_OF_RANGE("value",f,n)
        }
        kr(r, i, o)
    }
    function Mt(n, t) {
        if (typeof n != "number")
            throw new Ut.ERR_INVALID_ARG_TYPE(t,"number",n)
    }
    function Vt(n, t, e) {
        throw Math.floor(n) !== n ? (Mt(n, e),
        new Ut.ERR_OUT_OF_RANGE(e || "offset","an integer",n)) : t < 0 ? new Ut.ERR_BUFFER_OUT_OF_BOUNDS : new Ut.ERR_OUT_OF_RANGE(e || "offset",`>= ${e ? 1 : 0} and <= ${t}`,n)
    }
    var xr = /[^+/0-9A-Za-z-_]/g;
    function Ir(n) {
        if (n = n.split("=")[0],
        n = n.trim().replace(xr, ""),
        n.length < 2)
            return "";
        for (; n.length % 4 !== 0; )
            n = n + "=";
        return n
    }
    function xe(n, t) {
        t = t || 1 / 0;
        let e, r = n.length, i = null, o = [];
        for (let s = 0; s < r; ++s) {
            if (e = n.charCodeAt(s),
            e > 55295 && e < 57344) {
                if (!i) {
                    if (e > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    } else if (s + 1 === r) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    i = e;
                    continue
                }
                if (e < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189),
                    i = e;
                    continue
                }
                e = (i - 55296 << 10 | e - 56320) + 65536
            } else
                i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (i = null,
            e < 128) {
                if ((t -= 1) < 0)
                    break;
                o.push(e)
            } else if (e < 2048) {
                if ((t -= 2) < 0)
                    break;
                o.push(e >> 6 | 192, e & 63 | 128)
            } else if (e < 65536) {
                if ((t -= 3) < 0)
                    break;
                o.push(e >> 12 | 224, e >> 6 & 63 | 128, e & 63 | 128)
            } else if (e < 1114112) {
                if ((t -= 4) < 0)
                    break;
                o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, e & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return o
    }
    function Br(n) {
        let t = [];
        for (let e = 0; e < n.length; ++e)
            t.push(n.charCodeAt(e) & 255);
        return t
    }
    function br(n, t) {
        let e, r, i, o = [];
        for (let s = 0; s < n.length && !((t -= 2) < 0); ++s)
            e = n.charCodeAt(s),
            r = e >> 8,
            i = e % 256,
            o.push(i),
            o.push(r);
        return o
    }
    function Tn(n) {
        return _e.toByteArray(Ir(n))
    }
    function ee(n, t, e, r) {
        let i;
        for (i = 0; i < r && !(i + e >= t.length || i >= n.length); ++i)
            t[i + e] = n[i];
        return i
    }
    function pt(n, t) {
        return n instanceof t || n != null && n.constructor != null && n.constructor.name != null && n.constructor.name === t.name
    }
    function Re(n) {
        return n !== n
    }
    var Rr = function() {
        let n = "0123456789abcdef"
          , t = new Array(256);
        for (let e = 0; e < 16; ++e) {
            let r = e * 16;
            for (let i = 0; i < 16; ++i)
                t[r + i] = n[e] + n[i]
        }
        return t
    }();
    function At(n) {
        return typeof BigInt > "u" ? Ar : n
    }
    function Ar() {
        throw new Error("BigInt not supported")
    }
}
);
var In = Wt( (Mr, xn) => {
    "use strict";
    var K = xn.exports = {}, yt, gt;
    function Ce() {
        throw new Error("setTimeout has not been defined")
    }
    function Se() {
        throw new Error("clearTimeout has not been defined")
    }
    (function() {
        try {
            typeof setTimeout == "function" ? yt = setTimeout : yt = Ce
        } catch {
            yt = Ce
        }
        try {
            typeof clearTimeout == "function" ? gt = clearTimeout : gt = Se
        } catch {
            gt = Se
        }
    }
    )();
    function _n(n) {
        if (yt === setTimeout)
            return setTimeout(n, 0);
        if ((yt === Ce || !yt) && setTimeout)
            return yt = setTimeout,
            setTimeout(n, 0);
        try {
            return yt(n, 0)
        } catch {
            try {
                return yt.call(null, n, 0)
            } catch {
                return yt.call(this, n, 0)
            }
        }
    }
    function Cr(n) {
        if (gt === clearTimeout)
            return clearTimeout(n);
        if ((gt === Se || !gt) && clearTimeout)
            return gt = clearTimeout,
            clearTimeout(n);
        try {
            return gt(n)
        } catch {
            try {
                return gt.call(null, n)
            } catch {
                return gt.call(this, n)
            }
        }
    }
    var It = [], jt = !1, Pt, ne = -1;
    function Sr() {
        !jt || !Pt || (jt = !1,
        Pt.length ? It = Pt.concat(It) : ne = -1,
        It.length && wn())
    }
    function wn() {
        if (!jt) {
            var n = _n(Sr);
            jt = !0;
            for (var t = It.length; t; ) {
                for (Pt = It,
                It = []; ++ne < t; )
                    Pt && Pt[ne].run();
                ne = -1,
                t = It.length
            }
            Pt = null,
            jt = !1,
            Cr(n)
        }
    }
    K.nextTick = function(n) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var e = 1; e < arguments.length; e++)
                t[e - 1] = arguments[e];
        It.push(new kn(n,t)),
        It.length === 1 && !jt && _n(wn)
    }
    ;
    function kn(n, t) {
        this.fun = n,
        this.array = t
    }
    kn.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ;
    K.title = "browser";
    K.browser = !0;
    K.env = {};
    K.argv = [];
    K.version = "";
    K.versions = {};
    function Bt() {}
    K.on = Bt;
    K.addListener = Bt;
    K.once = Bt;
    K.off = Bt;
    K.removeListener = Bt;
    K.removeAllListeners = Bt;
    K.emit = Bt;
    K.prependListener = Bt;
    K.prependOnceListener = Bt;
    K.listeners = function(n) {
        return []
    }
    ;
    K.binding = function(n) {
        throw new Error("process.binding is not supported")
    }
    ;
    K.cwd = function() {
        return "/"
    }
    ;
    K.chdir = function(n) {
        throw new Error("process.chdir is not supported")
    }
    ;
    K.umask = function() {
        return 0
    }
}
);
var ht = globalThis;
function it(n) {
    return (ht.__Zone_symbol_prefix || "__zone_symbol__") + n
}
function Rn() {
    let n = ht.performance;
    function t(v) {
        n && n.mark && n.mark(v)
    }
    function e(v, _) {
        n && n.measure && n.measure(v, _)
    }
    t("Zone");
    let r = ( () => {
        class v {
            static{this.__symbol__ = it
            }static assertZonePatched() {
                if (ht.Promise !== N.ZoneAwarePromise)
                    throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
            }
            static get root() {
                let c = v.current;
                for (; c.parent; )
                    c = c.parent;
                return c
            }
            static get current() {
                return b.zone
            }
            static get currentTask() {
                return P
            }
            static __load_patch(c, u, x=!1) {
                if (N.hasOwnProperty(c)) {
                    let R = ht[it("forceDuplicateZoneCheck")] === !0;
                    if (!x && R)
                        throw Error("Already loaded patch: " + c)
                } else if (!ht["__Zone_disable_" + c]) {
                    let R = "Zone:" + c;
                    t(R),
                    N[c] = u(ht, v, C),
                    e(R, R)
                }
            }
            get parent() {
                return this._parent
            }
            get name() {
                return this._name
            }
            constructor(c, u) {
                this._parent = c,
                this._name = u ? u.name || "unnamed" : "<root>",
                this._properties = u && u.properties || {},
                this._zoneDelegate = new o(this,this._parent && this._parent._zoneDelegate,u)
            }
            get(c) {
                let u = this.getZoneWith(c);
                if (u)
                    return u._properties[c]
            }
            getZoneWith(c) {
                let u = this;
                for (; u; ) {
                    if (u._properties.hasOwnProperty(c))
                        return u;
                    u = u._parent
                }
                return null
            }
            fork(c) {
                if (!c)
                    throw new Error("ZoneSpec required!");
                return this._zoneDelegate.fork(this, c)
            }
            wrap(c, u) {
                if (typeof c != "function")
                    throw new Error("Expecting function got: " + c);
                let x = this._zoneDelegate.intercept(this, c, u)
                  , R = this;
                return function() {
                    return R.runGuarded(x, this, arguments, u)
                }
            }
            run(c, u, x, R) {
                b = {
                    parent: b,
                    zone: this
                };
                try {
                    return this._zoneDelegate.invoke(this, c, u, x, R)
                } finally {
                    b = b.parent
                }
            }
            runGuarded(c, u=null, x, R) {
                b = {
                    parent: b,
                    zone: this
                };
                try {
                    try {
                        return this._zoneDelegate.invoke(this, c, u, x, R)
                    } catch (W) {
                        if (this._zoneDelegate.handleError(this, W))
                            throw W
                    }
                } finally {
                    b = b.parent
                }
            }
            runTask(c, u, x) {
                if (c.zone != this)
                    throw new Error("A task can only be run in the zone of creation! (Creation: " + (c.zone || et).name + "; Execution: " + this.name + ")");
                let R = c
                  , {type: W, data: {isPeriodic: L=!1, isRefreshable: bt=!1}={}} = c;
                if (c.state === X && (W === V || W === w))
                    return;
                let Et = c.state != M;
                Et && R._transitionTo(M, T);
                let mt = P;
                P = R,
                b = {
                    parent: b,
                    zone: this
                };
                try {
                    W == w && c.data && !L && !bt && (c.cancelFn = void 0);
                    try {
                        return this._zoneDelegate.invokeTask(this, R, u, x)
                    } catch (ct) {
                        if (this._zoneDelegate.handleError(this, ct))
                            throw ct
                    }
                } finally {
                    let ct = c.state;
                    if (ct !== X && ct !== Y)
                        if (W == V || L || bt && ct === I)
                            Et && R._transitionTo(T, M, I);
                        else {
                            let E = R._zoneDelegates;
                            this._updateTaskCount(R, -1),
                            Et && R._transitionTo(X, M, X),
                            bt && (R._zoneDelegates = E)
                        }
                    b = b.parent,
                    P = mt
                }
            }
            scheduleTask(c) {
                if (c.zone && c.zone !== this) {
                    let x = this;
                    for (; x; ) {
                        if (x === c.zone)
                            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${c.zone.name}`);
                        x = x.parent
                    }
                }
                c._transitionTo(I, X);
                let u = [];
                c._zoneDelegates = u,
                c._zone = this;
                try {
                    c = this._zoneDelegate.scheduleTask(this, c)
                } catch (x) {
                    throw c._transitionTo(Y, I, X),
                    this._zoneDelegate.handleError(this, x),
                    x
                }
                return c._zoneDelegates === u && this._updateTaskCount(c, 1),
                c.state == I && c._transitionTo(T, I),
                c
            }
            scheduleMicroTask(c, u, x, R) {
                return this.scheduleTask(new s(H,c,u,x,R,void 0))
            }
            scheduleMacroTask(c, u, x, R, W) {
                return this.scheduleTask(new s(w,c,u,x,R,W))
            }
            scheduleEventTask(c, u, x, R, W) {
                return this.scheduleTask(new s(V,c,u,x,R,W))
            }
            cancelTask(c) {
                if (c.zone != this)
                    throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (c.zone || et).name + "; Execution: " + this.name + ")");
                if (!(c.state !== T && c.state !== M)) {
                    c._transitionTo(Z, T, M);
                    try {
                        this._zoneDelegate.cancelTask(this, c)
                    } catch (u) {
                        throw c._transitionTo(Y, Z),
                        this._zoneDelegate.handleError(this, u),
                        u
                    }
                    return this._updateTaskCount(c, -1),
                    c._transitionTo(X, Z),
                    c.runCount = -1,
                    c
                }
            }
            _updateTaskCount(c, u) {
                let x = c._zoneDelegates;
                u == -1 && (c._zoneDelegates = null);
                for (let R = 0; R < x.length; R++)
                    x[R]._updateTaskCount(c.type, u)
            }
        }
        return v
    }
    )()
      , i = {
        name: "",
        onHasTask: (v, _, c, u) => v.hasTask(c, u),
        onScheduleTask: (v, _, c, u) => v.scheduleTask(c, u),
        onInvokeTask: (v, _, c, u, x, R) => v.invokeTask(c, u, x, R),
        onCancelTask: (v, _, c, u) => v.cancelTask(c, u)
    };
    class o {
        get zone() {
            return this._zone
        }
        constructor(_, c, u) {
            this._taskCounts = {
                microTask: 0,
                macroTask: 0,
                eventTask: 0
            },
            this._zone = _,
            this._parentDelegate = c,
            this._forkZS = u && (u && u.onFork ? u : c._forkZS),
            this._forkDlgt = u && (u.onFork ? c : c._forkDlgt),
            this._forkCurrZone = u && (u.onFork ? this._zone : c._forkCurrZone),
            this._interceptZS = u && (u.onIntercept ? u : c._interceptZS),
            this._interceptDlgt = u && (u.onIntercept ? c : c._interceptDlgt),
            this._interceptCurrZone = u && (u.onIntercept ? this._zone : c._interceptCurrZone),
            this._invokeZS = u && (u.onInvoke ? u : c._invokeZS),
            this._invokeDlgt = u && (u.onInvoke ? c : c._invokeDlgt),
            this._invokeCurrZone = u && (u.onInvoke ? this._zone : c._invokeCurrZone),
            this._handleErrorZS = u && (u.onHandleError ? u : c._handleErrorZS),
            this._handleErrorDlgt = u && (u.onHandleError ? c : c._handleErrorDlgt),
            this._handleErrorCurrZone = u && (u.onHandleError ? this._zone : c._handleErrorCurrZone),
            this._scheduleTaskZS = u && (u.onScheduleTask ? u : c._scheduleTaskZS),
            this._scheduleTaskDlgt = u && (u.onScheduleTask ? c : c._scheduleTaskDlgt),
            this._scheduleTaskCurrZone = u && (u.onScheduleTask ? this._zone : c._scheduleTaskCurrZone),
            this._invokeTaskZS = u && (u.onInvokeTask ? u : c._invokeTaskZS),
            this._invokeTaskDlgt = u && (u.onInvokeTask ? c : c._invokeTaskDlgt),
            this._invokeTaskCurrZone = u && (u.onInvokeTask ? this._zone : c._invokeTaskCurrZone),
            this._cancelTaskZS = u && (u.onCancelTask ? u : c._cancelTaskZS),
            this._cancelTaskDlgt = u && (u.onCancelTask ? c : c._cancelTaskDlgt),
            this._cancelTaskCurrZone = u && (u.onCancelTask ? this._zone : c._cancelTaskCurrZone),
            this._hasTaskZS = null,
            this._hasTaskDlgt = null,
            this._hasTaskDlgtOwner = null,
            this._hasTaskCurrZone = null;
            let x = u && u.onHasTask
              , R = c && c._hasTaskZS;
            (x || R) && (this._hasTaskZS = x ? u : i,
            this._hasTaskDlgt = c,
            this._hasTaskDlgtOwner = this,
            this._hasTaskCurrZone = this._zone,
            u.onScheduleTask || (this._scheduleTaskZS = i,
            this._scheduleTaskDlgt = c,
            this._scheduleTaskCurrZone = this._zone),
            u.onInvokeTask || (this._invokeTaskZS = i,
            this._invokeTaskDlgt = c,
            this._invokeTaskCurrZone = this._zone),
            u.onCancelTask || (this._cancelTaskZS = i,
            this._cancelTaskDlgt = c,
            this._cancelTaskCurrZone = this._zone))
        }
        fork(_, c) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, _, c) : new r(_,c)
        }
        intercept(_, c, u) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, _, c, u) : c
        }
        invoke(_, c, u, x, R) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, _, c, u, x, R) : c.apply(u, x)
        }
        handleError(_, c) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, _, c) : !0
        }
        scheduleTask(_, c) {
            let u = c;
            if (this._scheduleTaskZS)
                this._hasTaskZS && u._zoneDelegates.push(this._hasTaskDlgtOwner),
                u = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, _, c),
                u || (u = c);
            else if (c.scheduleFn)
                c.scheduleFn(c);
            else if (c.type == H)
                j(c);
            else
                throw new Error("Task is missing scheduleFn.");
            return u
        }
        invokeTask(_, c, u, x) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, _, c, u, x) : c.callback.apply(u, x)
        }
        cancelTask(_, c) {
            let u;
            if (this._cancelTaskZS)
                u = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, _, c);
            else {
                if (!c.cancelFn)
                    throw Error("Task is not cancelable");
                u = c.cancelFn(c)
            }
            return u
        }
        hasTask(_, c) {
            try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, _, c)
            } catch (u) {
                this.handleError(_, u)
            }
        }
        _updateTaskCount(_, c) {
            let u = this._taskCounts
              , x = u[_]
              , R = u[_] = x + c;
            if (R < 0)
                throw new Error("More tasks executed then were scheduled.");
            if (x == 0 || R == 0) {
                let W = {
                    microTask: u.microTask > 0,
                    macroTask: u.macroTask > 0,
                    eventTask: u.eventTask > 0,
                    change: _
                };
                this.hasTask(this._zone, W)
            }
        }
    }
    class s {
        constructor(_, c, u, x, R, W) {
            if (this._zone = null,
            this.runCount = 0,
            this._zoneDelegates = null,
            this._state = "notScheduled",
            this.type = _,
            this.source = c,
            this.data = x,
            this.scheduleFn = R,
            this.cancelFn = W,
            !u)
                throw new Error("callback is not defined");
            this.callback = u;
            let L = this;
            _ === V && x && x.useG ? this.invoke = s.invokeTask : this.invoke = function() {
                return s.invokeTask.call(ht, L, this, arguments)
            }
        }
        static invokeTask(_, c, u) {
            _ || (_ = this),
            nt++;
            try {
                return _.runCount++,
                _.zone.runTask(_, c, u)
            } finally {
                nt == 1 && Q(),
                nt--
            }
        }
        get zone() {
            return this._zone
        }
        get state() {
            return this._state
        }
        cancelScheduleRequest() {
            this._transitionTo(X, I)
        }
        _transitionTo(_, c, u) {
            if (this._state === c || this._state === u)
                this._state = _,
                _ == X && (this._zoneDelegates = null);
            else
                throw new Error(`${this.type} '${this.source}': can not transition to '${_}', expecting state '${c}'${u ? " or '" + u + "'" : ""}, was '${this._state}'.`)
        }
        toString() {
            return this.data && typeof this.data.handleId < "u" ? this.data.handleId.toString() : Object.prototype.toString.call(this)
        }
        toJSON() {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            }
        }
    }
    let f = it("setTimeout"), h = it("Promise"), m = it("then"), d = [], p = !1, A;
    function F(v) {
        if (A || ht[h] && (A = ht[h].resolve(0)),
        A) {
            let _ = A[m];
            _ || (_ = A.then),
            _.call(A, v)
        } else
            ht[f](v, 0)
    }
    function j(v) {
        nt === 0 && d.length === 0 && F(Q),
        v && d.push(v)
    }
    function Q() {
        if (!p) {
            for (p = !0; d.length; ) {
                let v = d;
                d = [];
                for (let _ = 0; _ < v.length; _++) {
                    let c = v[_];
                    try {
                        c.zone.runTask(c, null, null)
                    } catch (u) {
                        C.onUnhandledError(u)
                    }
                }
            }
            C.microtaskDrainDone(),
            p = !1
        }
    }
    let et = {
        name: "NO ZONE"
    }
      , X = "notScheduled"
      , I = "scheduling"
      , T = "scheduled"
      , M = "running"
      , Z = "canceling"
      , Y = "unknown"
      , H = "microTask"
      , w = "macroTask"
      , V = "eventTask"
      , N = {}
      , C = {
        symbol: it,
        currentZoneFrame: () => b,
        onUnhandledError: q,
        microtaskDrainDone: q,
        scheduleMicroTask: j,
        showUncaughtError: () => !r[it("ignoreConsoleErrorUncaughtError")],
        patchEventTarget: () => [],
        patchOnProperties: q,
        patchMethod: () => q,
        bindArguments: () => [],
        patchThen: () => q,
        patchMacroTask: () => q,
        patchEventPrototype: () => q,
        isIEOrEdge: () => !1,
        getGlobalObjects: () => {}
        ,
        ObjectDefineProperty: () => q,
        ObjectGetOwnPropertyDescriptor: () => {}
        ,
        ObjectCreate: () => {}
        ,
        ArraySlice: () => [],
        patchClass: () => q,
        wrapWithCurrentZone: () => q,
        filterProperties: () => [],
        attachOriginToPatched: () => q,
        _redefineProperty: () => q,
        patchCallbacks: () => q,
        nativeScheduleMicroTask: F
    }
      , b = {
        parent: null,
        zone: new r(null,null)
    }
      , P = null
      , nt = 0;
    function q() {}
    return e("Zone", "Zone"),
    r
}
function An() {
    let n = globalThis
      , t = n[it("forceDuplicateZoneCheck")] === !0;
    if (n.Zone && (t || typeof n.Zone.__symbol__ != "function"))
        throw new Error("Zone already loaded.");
    return n.Zone ??= Rn(),
    n.Zone
}
var zt = Object.getOwnPropertyDescriptor
  , le = Object.defineProperty
  , fe = Object.getPrototypeOf
  , Cn = Object.create
  , Sn = Array.prototype.slice
  , he = "addEventListener"
  , de = "removeEventListener"
  , se = it(he)
  , ce = it(de)
  , Tt = "true"
  , _t = "false"
  , Gt = it("");
function pe(n, t) {
    return Zone.current.wrap(n, t)
}
function ye(n, t, e, r, i) {
    return Zone.current.scheduleMacroTask(n, t, e, r, i)
}
var $ = it
  , Kt = typeof window < "u"
  , Ot = Kt ? window : void 0
  , J = Kt && Ot || globalThis
  , Pn = "removeAttribute";
function ge(n, t) {
    for (let e = n.length - 1; e >= 0; e--)
        typeof n[e] == "function" && (n[e] = pe(n[e], t + "_" + e));
    return n
}
function Nn(n, t) {
    let e = n.constructor.name;
    for (let r = 0; r < t.length; r++) {
        let i = t[r]
          , o = n[i];
        if (o) {
            let s = zt(n, i);
            if (!Ze(s))
                continue;
            n[i] = (f => {
                let h = function() {
                    return f.apply(this, ge(arguments, e + "." + i))
                };
                return kt(h, f),
                h
            }
            )(o)
        }
    }
}
function Ze(n) {
    return n ? n.writable === !1 ? !1 : !(typeof n.get == "function" && typeof n.set > "u") : !0
}
var He = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope
  , Jt = !("nw"in J) && typeof J.process < "u" && J.process.toString() === "[object process]"
  , Ee = !Jt && !He && !!(Kt && Ot.HTMLElement)
  , ze = typeof J.process < "u" && J.process.toString() === "[object process]" && !He && !!(Kt && Ot.HTMLElement)
  , Yt = {}
  , vn = $("enable_beforeunload")
  , Oe = function(n) {
    if (n = n || J.event,
    !n)
        return;
    let t = Yt[n.type];
    t || (t = Yt[n.type] = $("ON_PROPERTY" + n.type));
    let e = this || n.target || J, r = e[t], i;
    if (Ee && e === Ot && n.type === "error") {
        let o = n;
        i = r && r.call(this, o.message, o.filename, o.lineno, o.colno, o.error),
        i === !0 && n.preventDefault()
    } else
        i = r && r.apply(this, arguments),
        n.type === "beforeunload" && J[vn] && typeof i == "string" ? n.returnValue = i : i != null && !i && n.preventDefault();
    return i
};
function Ue(n, t, e) {
    let r = zt(n, t);
    if (!r && e && zt(e, t) && (r = {
        enumerable: !0,
        configurable: !0
    }),
    !r || !r.configurable)
        return;
    let i = $("on" + t + "patched");
    if (n.hasOwnProperty(i) && n[i])
        return;
    delete r.writable,
    delete r.value;
    let o = r.get
      , s = r.set
      , f = t.slice(2)
      , h = Yt[f];
    h || (h = Yt[f] = $("ON_PROPERTY" + f)),
    r.set = function(m) {
        let d = this;
        if (!d && n === J && (d = J),
        !d)
            return;
        typeof d[h] == "function" && d.removeEventListener(f, Oe),
        s && s.call(d, null),
        d[h] = m,
        typeof m == "function" && d.addEventListener(f, Oe, !1)
    }
    ,
    r.get = function() {
        let m = this;
        if (!m && n === J && (m = J),
        !m)
            return null;
        let d = m[h];
        if (d)
            return d;
        if (o) {
            let p = o.call(this);
            if (p)
                return r.set.call(this, p),
                typeof m[Pn] == "function" && m.removeAttribute(t),
                p
        }
        return null
    }
    ,
    le(n, t, r),
    n[i] = !0
}
function Ge(n, t, e) {
    if (t)
        for (let r = 0; r < t.length; r++)
            Ue(n, "on" + t[r], e);
    else {
        let r = [];
        for (let i in n)
            i.slice(0, 2) == "on" && r.push(i);
        for (let i = 0; i < r.length; i++)
            Ue(n, r[i], e)
    }
}
var at = $("originalInstance");
function Ht(n) {
    let t = J[n];
    if (!t)
        return;
    J[$(n)] = t,
    J[n] = function() {
        let i = ge(arguments, n);
        switch (i.length) {
        case 0:
            this[at] = new t;
            break;
        case 1:
            this[at] = new t(i[0]);
            break;
        case 2:
            this[at] = new t(i[0],i[1]);
            break;
        case 3:
            this[at] = new t(i[0],i[1],i[2]);
            break;
        case 4:
            this[at] = new t(i[0],i[1],i[2],i[3]);
            break;
        default:
            throw new Error("Arg list too long.")
        }
    }
    ,
    kt(J[n], t);
    let e = new t(function() {}
    ), r;
    for (r in e)
        n === "XMLHttpRequest" && r === "responseBlob" || function(i) {
            typeof e[i] == "function" ? J[n].prototype[i] = function() {
                return this[at][i].apply(this[at], arguments)
            }
            : le(J[n].prototype, i, {
                set: function(o) {
                    typeof o == "function" ? (this[at][i] = pe(o, n + "." + i),
                    kt(this[at][i], o)) : this[at][i] = o
                },
                get: function() {
                    return this[at][i]
                }
            })
        }(r);
    for (r in t)
        r !== "prototype" && t.hasOwnProperty(r) && (J[n][r] = t[r])
}
function wt(n, t, e) {
    let r = n;
    for (; r && !r.hasOwnProperty(t); )
        r = fe(r);
    !r && n[t] && (r = n);
    let i = $(t)
      , o = null;
    if (r && (!(o = r[i]) || !r.hasOwnProperty(i))) {
        o = r[i] = r[t];
        let s = r && zt(r, t);
        if (Ze(s)) {
            let f = e(o, i, t);
            r[t] = function() {
                return f(this, arguments)
            }
            ,
            kt(r[t], o)
        }
    }
    return o
}
function Dn(n, t, e) {
    let r = null;
    function i(o) {
        let s = o.data;
        return s.args[s.cbIdx] = function() {
            o.invoke.apply(this, arguments)
        }
        ,
        r.apply(s.target, s.args),
        o
    }
    r = wt(n, t, o => function(s, f) {
        let h = e(s, f);
        return h.cbIdx >= 0 && typeof f[h.cbIdx] == "function" ? ye(h.name, f[h.cbIdx], h, i) : o.apply(s, f)
    }
    )
}
function kt(n, t) {
    n[$("OriginalDelegate")] = t
}
var Le = !1
  , ue = !1;
function Fn() {
    try {
        let n = Ot.navigator.userAgent;
        if (n.indexOf("MSIE ") !== -1 || n.indexOf("Trident/") !== -1)
            return !0
    } catch {}
    return !1
}
function On() {
    if (Le)
        return ue;
    Le = !0;
    try {
        let n = Ot.navigator.userAgent;
        (n.indexOf("MSIE ") !== -1 || n.indexOf("Trident/") !== -1 || n.indexOf("Edge/") !== -1) && (ue = !0)
    } catch {}
    return ue
}
function Me(n) {
    return typeof n == "function"
}
function $e(n) {
    return typeof n == "number"
}
var Ft = !1;
if (typeof window < "u")
    try {
        let n = Object.defineProperty({}, "passive", {
            get: function() {
                Ft = !0
            }
        });
        window.addEventListener("test", n, n),
        window.removeEventListener("test", n, n)
    } catch {
        Ft = !1
    }
var Un = {
    useG: !0
}
  , ot = {}
  , Ve = {}
  , qe = new RegExp("^" + Gt + "(\\w+)(true|false)$")
  , We = $("propagationStopped");
function Xe(n, t) {
    let e = (t ? t(n) : n) + _t
      , r = (t ? t(n) : n) + Tt
      , i = Gt + e
      , o = Gt + r;
    ot[n] = {},
    ot[n][_t] = i,
    ot[n][Tt] = o
}
function Ln(n, t, e, r) {
    let i = r && r.add || he
      , o = r && r.rm || de
      , s = r && r.listeners || "eventListeners"
      , f = r && r.rmAll || "removeAllListeners"
      , h = $(i)
      , m = "." + i + ":"
      , d = "prependListener"
      , p = "." + d + ":"
      , A = function(I, T, M) {
        if (I.isRemoved)
            return;
        let Z = I.callback;
        typeof Z == "object" && Z.handleEvent && (I.callback = w => Z.handleEvent(w),
        I.originalDelegate = Z);
        let Y;
        try {
            I.invoke(I, T, [M])
        } catch (w) {
            Y = w
        }
        let H = I.options;
        if (H && typeof H == "object" && H.once) {
            let w = I.originalDelegate ? I.originalDelegate : I.callback;
            T[o].call(T, M.type, w, H)
        }
        return Y
    };
    function F(I, T, M) {
        if (T = T || n.event,
        !T)
            return;
        let Z = I || T.target || n
          , Y = Z[ot[T.type][M ? Tt : _t]];
        if (Y) {
            let H = [];
            if (Y.length === 1) {
                let w = A(Y[0], Z, T);
                w && H.push(w)
            } else {
                let w = Y.slice();
                for (let V = 0; V < w.length && !(T && T[We] === !0); V++) {
                    let N = A(w[V], Z, T);
                    N && H.push(N)
                }
            }
            if (H.length === 1)
                throw H[0];
            for (let w = 0; w < H.length; w++) {
                let V = H[w];
                t.nativeScheduleMicroTask( () => {
                    throw V
                }
                )
            }
        }
    }
    let j = function(I) {
        return F(this, I, !1)
    }
      , Q = function(I) {
        return F(this, I, !0)
    };
    function et(I, T) {
        if (!I)
            return !1;
        let M = !0;
        T && T.useG !== void 0 && (M = T.useG);
        let Z = T && T.vh
          , Y = !0;
        T && T.chkDup !== void 0 && (Y = T.chkDup);
        let H = !1;
        T && T.rt !== void 0 && (H = T.rt);
        let w = I;
        for (; w && !w.hasOwnProperty(i); )
            w = fe(w);
        if (!w && I[i] && (w = I),
        !w || w[h])
            return !1;
        let V = T && T.eventNameToString, N = {}, C = w[h] = w[i], b = w[$(o)] = w[o], P = w[$(s)] = w[s], nt = w[$(f)] = w[f], q;
        T && T.prepend && (q = w[$(T.prepend)] = w[T.prepend]);
        function v(a, g) {
            return !Ft && typeof a == "object" && a ? !!a.capture : !Ft || !g ? a : typeof a == "boolean" ? {
                capture: a,
                passive: !0
            } : a ? typeof a == "object" && a.passive !== !1 ? {
                ...a,
                passive: !0
            } : a : {
                passive: !0
            }
        }
        let _ = function(a) {
            if (!N.isExisting)
                return C.call(N.target, N.eventName, N.capture ? Q : j, N.options)
        }
          , c = function(a) {
            if (!a.isRemoved) {
                let g = ot[a.eventName], B;
                g && (B = g[a.capture ? Tt : _t]);
                let S = B && a.target[B];
                if (S) {
                    for (let k = 0; k < S.length; k++)
                        if (S[k] === a) {
                            S.splice(k, 1),
                            a.isRemoved = !0,
                            a.removeAbortListener && (a.removeAbortListener(),
                            a.removeAbortListener = null),
                            S.length === 0 && (a.allRemoved = !0,
                            a.target[B] = null);
                            break
                        }
                }
            }
            if (a.allRemoved)
                return b.call(a.target, a.eventName, a.capture ? Q : j, a.options)
        }
          , u = function(a) {
            return C.call(N.target, N.eventName, a.invoke, N.options)
        }
          , x = function(a) {
            return q.call(N.target, N.eventName, a.invoke, N.options)
        }
          , R = function(a) {
            return b.call(a.target, a.eventName, a.invoke, a.options)
        }
          , W = M ? _ : u
          , L = M ? c : R
          , bt = function(a, g) {
            let B = typeof g;
            return B === "function" && a.callback === g || B === "object" && a.originalDelegate === g
        }
          , Et = T && T.diff ? T.diff : bt
          , mt = Zone[$("UNPATCHED_EVENTS")]
          , ct = n[$("PASSIVE_EVENTS")];
        function E(a) {
            if (typeof a == "object" && a !== null) {
                let g = {
                    ...a
                };
                return a.signal && (g.signal = a.signal),
                g
            }
            return a
        }
        let y = function(a, g, B, S, k=!1, D=!1) {
            return function() {
                let O = this || n
                  , U = arguments[0];
                T && T.transferEventName && (U = T.transferEventName(U));
                let z = arguments[1];
                if (!z)
                    return a.apply(this, arguments);
                if (Jt && U === "uncaughtException")
                    return a.apply(this, arguments);
                let G = !1;
                if (typeof z != "function") {
                    if (!z.handleEvent)
                        return a.apply(this, arguments);
                    G = !0
                }
                if (Z && !Z(a, z, O, arguments))
                    return;
                let Rt = Ft && !!ct && ct.indexOf(U) !== -1
                  , lt = E(v(arguments[2], Rt))
                  , Nt = lt?.signal;
                if (Nt?.aborted)
                    return;
                if (mt) {
                    for (let ft = 0; ft < mt.length; ft++)
                        if (U === mt[ft])
                            return Rt ? a.call(O, U, z, lt) : a.apply(this, arguments)
                }
                let ie = lt ? typeof lt == "boolean" ? !0 : lt.capture : !1
                  , Pe = lt && typeof lt == "object" ? lt.once : !1
                  , bn = Zone.current
                  , oe = ot[U];
                oe || (Xe(U, V),
                oe = ot[U]);
                let Ne = oe[ie ? Tt : _t]
                  , vt = O[Ne]
                  , ve = !1;
                if (vt) {
                    if (ve = !0,
                    Y) {
                        for (let ft = 0; ft < vt.length; ft++)
                            if (Et(vt[ft], z))
                                return
                    }
                } else
                    vt = O[Ne] = [];
                let qt, De = O.constructor.name, Fe = Ve[De];
                Fe && (qt = Fe[U]),
                qt || (qt = De + g + (V ? V(U) : U)),
                N.options = lt,
                Pe && (N.options.once = !1),
                N.target = O,
                N.capture = ie,
                N.eventName = U,
                N.isExisting = ve;
                let Zt = M ? Un : void 0;
                Zt && (Zt.taskData = N),
                Nt && (N.options.signal = void 0);
                let ut = bn.scheduleEventTask(qt, z, Zt, B, S);
                if (Nt) {
                    N.options.signal = Nt;
                    let ft = () => ut.zone.cancelTask(ut);
                    a.call(Nt, "abort", ft, {
                        once: !0
                    }),
                    ut.removeAbortListener = () => Nt.removeEventListener("abort", ft)
                }
                if (N.target = null,
                Zt && (Zt.taskData = null),
                Pe && (N.options.once = !0),
                !Ft && typeof ut.options == "boolean" || (ut.options = lt),
                ut.target = O,
                ut.capture = ie,
                ut.eventName = U,
                G && (ut.originalDelegate = z),
                D ? vt.unshift(ut) : vt.push(ut),
                k)
                    return O
            }
        };
        return w[i] = y(C, m, W, L, H),
        q && (w[d] = y(q, p, x, L, H, !0)),
        w[o] = function() {
            let a = this || n
              , g = arguments[0];
            T && T.transferEventName && (g = T.transferEventName(g));
            let B = arguments[2]
              , S = B ? typeof B == "boolean" ? !0 : B.capture : !1
              , k = arguments[1];
            if (!k)
                return b.apply(this, arguments);
            if (Z && !Z(b, k, a, arguments))
                return;
            let D = ot[g], O;
            D && (O = D[S ? Tt : _t]);
            let U = O && a[O];
            if (U)
                for (let z = 0; z < U.length; z++) {
                    let G = U[z];
                    if (Et(G, k)) {
                        if (U.splice(z, 1),
                        G.isRemoved = !0,
                        U.length === 0 && (G.allRemoved = !0,
                        a[O] = null,
                        !S && typeof g == "string")) {
                            let Rt = Gt + "ON_PROPERTY" + g;
                            a[Rt] = null
                        }
                        return G.zone.cancelTask(G),
                        H ? a : void 0
                    }
                }
            return b.apply(this, arguments)
        }
        ,
        w[s] = function() {
            let a = this || n
              , g = arguments[0];
            T && T.transferEventName && (g = T.transferEventName(g));
            let B = []
              , S = Ye(a, V ? V(g) : g);
            for (let k = 0; k < S.length; k++) {
                let D = S[k]
                  , O = D.originalDelegate ? D.originalDelegate : D.callback;
                B.push(O)
            }
            return B
        }
        ,
        w[f] = function() {
            let a = this || n
              , g = arguments[0];
            if (g) {
                T && T.transferEventName && (g = T.transferEventName(g));
                let B = ot[g];
                if (B) {
                    let S = B[_t]
                      , k = B[Tt]
                      , D = a[S]
                      , O = a[k];
                    if (D) {
                        let U = D.slice();
                        for (let z = 0; z < U.length; z++) {
                            let G = U[z]
                              , Rt = G.originalDelegate ? G.originalDelegate : G.callback;
                            this[o].call(this, g, Rt, G.options)
                        }
                    }
                    if (O) {
                        let U = O.slice();
                        for (let z = 0; z < U.length; z++) {
                            let G = U[z]
                              , Rt = G.originalDelegate ? G.originalDelegate : G.callback;
                            this[o].call(this, g, Rt, G.options)
                        }
                    }
                }
            } else {
                let B = Object.keys(a);
                for (let S = 0; S < B.length; S++) {
                    let k = B[S]
                      , D = qe.exec(k)
                      , O = D && D[1];
                    O && O !== "removeListener" && this[f].call(this, O)
                }
                this[f].call(this, "removeListener")
            }
            if (H)
                return this
        }
        ,
        kt(w[i], C),
        kt(w[o], b),
        nt && kt(w[f], nt),
        P && kt(w[s], P),
        !0
    }
    let X = [];
    for (let I = 0; I < e.length; I++)
        X[I] = et(e[I], r);
    return X
}
function Ye(n, t) {
    if (!t) {
        let o = [];
        for (let s in n) {
            let f = qe.exec(s)
              , h = f && f[1];
            if (h && (!t || h === t)) {
                let m = n[s];
                if (m)
                    for (let d = 0; d < m.length; d++)
                        o.push(m[d])
            }
        }
        return o
    }
    let e = ot[t];
    e || (Xe(t),
    e = ot[t]);
    let r = n[e[_t]]
      , i = n[e[Tt]];
    return r ? i ? r.concat(i) : r.slice() : i ? i.slice() : []
}
function Mn(n, t) {
    let e = n.Event;
    e && e.prototype && t.patchMethod(e.prototype, "stopImmediatePropagation", r => function(i, o) {
        i[We] = !0,
        r && r.apply(i, o)
    }
    )
}
function $n(n, t) {
    t.patchMethod(n, "queueMicrotask", e => function(r, i) {
        Zone.current.scheduleMicroTask("queueMicrotask", i[0])
    }
    )
}
var Xt = $("zoneTask");
function Dt(n, t, e, r) {
    let i = null
      , o = null;
    t += r,
    e += r;
    let s = {};
    function f(m) {
        let d = m.data;
        d.args[0] = function() {
            return m.invoke.apply(this, arguments)
        }
        ;
        let p = i.apply(n, d.args);
        return $e(p) ? d.handleId = p : (d.handle = p,
        d.isRefreshable = Me(p.refresh)),
        m
    }
    function h(m) {
        let {handle: d, handleId: p} = m.data;
        return o.call(n, d ?? p)
    }
    i = wt(n, t, m => function(d, p) {
        if (Me(p[0])) {
            let A = {
                isRefreshable: !1,
                isPeriodic: r === "Interval",
                delay: r === "Timeout" || r === "Interval" ? p[1] || 0 : void 0,
                args: p
            }
              , F = p[0];
            p[0] = function() {
                try {
                    return F.apply(this, arguments)
                } finally {
                    let {handle: M, handleId: Z, isPeriodic: Y, isRefreshable: H} = A;
                    !Y && !H && (Z ? delete s[Z] : M && (M[Xt] = null))
                }
            }
            ;
            let j = ye(t, p[0], A, f, h);
            if (!j)
                return j;
            let {handleId: Q, handle: et, isRefreshable: X, isPeriodic: I} = j.data;
            if (Q)
                s[Q] = j;
            else if (et && (et[Xt] = j,
            X && !I)) {
                let T = et.refresh;
                et.refresh = function() {
                    let {zone: M, state: Z} = j;
                    return Z === "notScheduled" ? (j._state = "scheduled",
                    M._updateTaskCount(j, 1)) : Z === "running" && (j._state = "scheduling"),
                    T.call(this)
                }
            }
            return et ?? Q ?? j
        } else
            return m.apply(n, p)
    }
    ),
    o = wt(n, e, m => function(d, p) {
        let A = p[0], F;
        $e(A) ? (F = s[A],
        delete s[A]) : (F = A?.[Xt],
        F ? A[Xt] = null : F = A),
        F?.type ? F.cancelFn && F.zone.cancelTask(F) : m.apply(n, p)
    }
    )
}
function jn(n, t) {
    let {isBrowser: e, isMix: r} = t.getGlobalObjects();
    if (!e && !r || !n.customElements || !("customElements"in n))
        return;
    let i = ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "formAssociatedCallback", "formDisabledCallback", "formResetCallback", "formStateRestoreCallback"];
    t.patchCallbacks(t, n.customElements, "customElements", "define", i)
}
function Zn(n, t) {
    if (Zone[t.symbol("patchEventTarget")])
        return;
    let {eventNames: e, zoneSymbolEventNames: r, TRUE_STR: i, FALSE_STR: o, ZONE_SYMBOL_PREFIX: s} = t.getGlobalObjects();
    for (let h = 0; h < e.length; h++) {
        let m = e[h]
          , d = m + o
          , p = m + i
          , A = s + d
          , F = s + p;
        r[m] = {},
        r[m][o] = A,
        r[m][i] = F
    }
    let f = n.EventTarget;
    if (!(!f || !f.prototype))
        return t.patchEventTarget(n, t, [f && f.prototype]),
        !0
}
function Hn(n, t) {
    t.patchEventPrototype(n, t)
}
function Ke(n, t, e) {
    if (!e || e.length === 0)
        return t;
    let r = e.filter(o => o.target === n);
    if (!r || r.length === 0)
        return t;
    let i = r[0].ignoreProperties;
    return t.filter(o => i.indexOf(o) === -1)
}
function je(n, t, e, r) {
    if (!n)
        return;
    let i = Ke(n, t, e);
    Ge(n, i, r)
}
function ae(n) {
    return Object.getOwnPropertyNames(n).filter(t => t.startsWith("on") && t.length > 2).map(t => t.substring(2))
}
function zn(n, t) {
    if (Jt && !ze || Zone[n.symbol("patchEvents")])
        return;
    let e = t.__Zone_ignore_on_properties
      , r = [];
    if (Ee) {
        let i = window;
        r = r.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
        let o = Fn() ? [{
            target: i,
            ignoreProperties: ["error"]
        }] : [];
        je(i, ae(i), e && e.concat(o), fe(i))
    }
    r = r.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
    for (let i = 0; i < r.length; i++) {
        let o = t[r[i]];
        o && o.prototype && je(o.prototype, ae(o.prototype), e)
    }
}
function Gn(n) {
    n.__load_patch("legacy", t => {
        let e = t[n.__symbol__("legacyPatch")];
        e && e()
    }
    ),
    n.__load_patch("timers", t => {
        let e = "set"
          , r = "clear";
        Dt(t, e, r, "Timeout"),
        Dt(t, e, r, "Interval"),
        Dt(t, e, r, "Immediate")
    }
    ),
    n.__load_patch("requestAnimationFrame", t => {
        Dt(t, "request", "cancel", "AnimationFrame"),
        Dt(t, "mozRequest", "mozCancel", "AnimationFrame"),
        Dt(t, "webkitRequest", "webkitCancel", "AnimationFrame")
    }
    ),
    n.__load_patch("blocking", (t, e) => {
        let r = ["alert", "prompt", "confirm"];
        for (let i = 0; i < r.length; i++) {
            let o = r[i];
            wt(t, o, (s, f, h) => function(m, d) {
                return e.current.run(s, t, d, h)
            }
            )
        }
    }
    ),
    n.__load_patch("EventTarget", (t, e, r) => {
        Hn(t, r),
        Zn(t, r);
        let i = t.XMLHttpRequestEventTarget;
        i && i.prototype && r.patchEventTarget(t, r, [i.prototype])
    }
    ),
    n.__load_patch("MutationObserver", (t, e, r) => {
        Ht("MutationObserver"),
        Ht("WebKitMutationObserver")
    }
    ),
    n.__load_patch("IntersectionObserver", (t, e, r) => {
        Ht("IntersectionObserver")
    }
    ),
    n.__load_patch("FileReader", (t, e, r) => {
        Ht("FileReader")
    }
    ),
    n.__load_patch("on_property", (t, e, r) => {
        zn(r, t)
    }
    ),
    n.__load_patch("customElements", (t, e, r) => {
        jn(t, r)
    }
    ),
    n.__load_patch("XHR", (t, e) => {
        m(t);
        let r = $("xhrTask")
          , i = $("xhrSync")
          , o = $("xhrListener")
          , s = $("xhrScheduled")
          , f = $("xhrURL")
          , h = $("xhrErrorBeforeScheduled");
        function m(d) {
            let p = d.XMLHttpRequest;
            if (!p)
                return;
            let A = p.prototype;
            function F(C) {
                return C[r]
            }
            let j = A[se]
              , Q = A[ce];
            if (!j) {
                let C = d.XMLHttpRequestEventTarget;
                if (C) {
                    let b = C.prototype;
                    j = b[se],
                    Q = b[ce]
                }
            }
            let et = "readystatechange"
              , X = "scheduled";
            function I(C) {
                let b = C.data
                  , P = b.target;
                P[s] = !1,
                P[h] = !1;
                let nt = P[o];
                j || (j = P[se],
                Q = P[ce]),
                nt && Q.call(P, et, nt);
                let q = P[o] = () => {
                    if (P.readyState === P.DONE)
                        if (!b.aborted && P[s] && C.state === X) {
                            let _ = P[e.__symbol__("loadfalse")];
                            if (P.status !== 0 && _ && _.length > 0) {
                                let c = C.invoke;
                                C.invoke = function() {
                                    let u = P[e.__symbol__("loadfalse")];
                                    for (let x = 0; x < u.length; x++)
                                        u[x] === C && u.splice(x, 1);
                                    !b.aborted && C.state === X && c.call(C)
                                }
                                ,
                                _.push(C)
                            } else
                                C.invoke()
                        } else
                            !b.aborted && P[s] === !1 && (P[h] = !0)
                }
                ;
                return j.call(P, et, q),
                P[r] || (P[r] = C),
                V.apply(P, b.args),
                P[s] = !0,
                C
            }
            function T() {}
            function M(C) {
                let b = C.data;
                return b.aborted = !0,
                N.apply(b.target, b.args)
            }
            let Z = wt(A, "open", () => function(C, b) {
                return C[i] = b[2] == !1,
                C[f] = b[1],
                Z.apply(C, b)
            }
            )
              , Y = "XMLHttpRequest.send"
              , H = $("fetchTaskAborting")
              , w = $("fetchTaskScheduling")
              , V = wt(A, "send", () => function(C, b) {
                if (e.current[w] === !0 || C[i])
                    return V.apply(C, b);
                {
                    let P = {
                        target: C,
                        url: C[f],
                        isPeriodic: !1,
                        args: b,
                        aborted: !1
                    }
                      , nt = ye(Y, T, P, I, M);
                    C && C[h] === !0 && !P.aborted && nt.state === X && nt.invoke()
                }
            }
            )
              , N = wt(A, "abort", () => function(C, b) {
                let P = F(C);
                if (P && typeof P.type == "string") {
                    if (P.cancelFn == null || P.data && P.data.aborted)
                        return;
                    P.zone.cancelTask(P)
                } else if (e.current[H] === !0)
                    return N.apply(C, b)
            }
            )
        }
    }
    ),
    n.__load_patch("geolocation", t => {
        t.navigator && t.navigator.geolocation && Nn(t.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
    }
    ),
    n.__load_patch("PromiseRejectionEvent", (t, e) => {
        function r(i) {
            return function(o) {
                Ye(t, i).forEach(f => {
                    let h = t.PromiseRejectionEvent;
                    if (h) {
                        let m = new h(i,{
                            promise: o.promise,
                            reason: o.rejection
                        });
                        f.invoke(m)
                    }
                }
                )
            }
        }
        t.PromiseRejectionEvent && (e[$("unhandledPromiseRejectionHandler")] = r("unhandledrejection"),
        e[$("rejectionHandledHandler")] = r("rejectionhandled"))
    }
    ),
    n.__load_patch("queueMicrotask", (t, e, r) => {
        $n(t, r)
    }
    )
}
function Vn(n) {
    n.__load_patch("ZoneAwarePromise", (t, e, r) => {
        let i = Object.getOwnPropertyDescriptor
          , o = Object.defineProperty;
        function s(E) {
            if (E && E.toString === Object.prototype.toString) {
                let y = E.constructor && E.constructor.name;
                return (y || "") + ": " + JSON.stringify(E)
            }
            return E ? E.toString() : Object.prototype.toString.call(E)
        }
        let f = r.symbol
          , h = []
          , m = t[f("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== !1
          , d = f("Promise")
          , p = f("then")
          , A = "__creationTrace__";
        r.onUnhandledError = E => {
            if (r.showUncaughtError()) {
                let y = E && E.rejection;
                y ? console.error("Unhandled Promise rejection:", y instanceof Error ? y.message : y, "; Zone:", E.zone.name, "; Task:", E.task && E.task.source, "; Value:", y, y instanceof Error ? y.stack : void 0) : console.error(E)
            }
        }
        ,
        r.microtaskDrainDone = () => {
            for (; h.length; ) {
                let E = h.shift();
                try {
                    E.zone.runGuarded( () => {
                        throw E.throwOriginal ? E.rejection : E
                    }
                    )
                } catch (y) {
                    j(y)
                }
            }
        }
        ;
        let F = f("unhandledPromiseRejectionHandler");
        function j(E) {
            r.onUnhandledError(E);
            try {
                let y = e[F];
                typeof y == "function" && y.call(this, E)
            } catch {}
        }
        function Q(E) {
            return E && E.then
        }
        function et(E) {
            return E
        }
        function X(E) {
            return L.reject(E)
        }
        let I = f("state")
          , T = f("value")
          , M = f("finally")
          , Z = f("parentPromiseValue")
          , Y = f("parentPromiseState")
          , H = "Promise.then"
          , w = null
          , V = !0
          , N = !1
          , C = 0;
        function b(E, y) {
            return a => {
                try {
                    v(E, y, a)
                } catch (g) {
                    v(E, !1, g)
                }
            }
        }
        let P = function() {
            let E = !1;
            return function(a) {
                return function() {
                    E || (E = !0,
                    a.apply(null, arguments))
                }
            }
        }
          , nt = "Promise resolved with itself"
          , q = f("currentTaskTrace");
        function v(E, y, a) {
            let g = P();
            if (E === a)
                throw new TypeError(nt);
            if (E[I] === w) {
                let B = null;
                try {
                    (typeof a == "object" || typeof a == "function") && (B = a && a.then)
                } catch (S) {
                    return g( () => {
                        v(E, !1, S)
                    }
                    )(),
                    E
                }
                if (y !== N && a instanceof L && a.hasOwnProperty(I) && a.hasOwnProperty(T) && a[I] !== w)
                    c(a),
                    v(E, a[I], a[T]);
                else if (y !== N && typeof B == "function")
                    try {
                        B.call(a, g(b(E, y)), g(b(E, !1)))
                    } catch (S) {
                        g( () => {
                            v(E, !1, S)
                        }
                        )()
                    }
                else {
                    E[I] = y;
                    let S = E[T];
                    if (E[T] = a,
                    E[M] === M && y === V && (E[I] = E[Y],
                    E[T] = E[Z]),
                    y === N && a instanceof Error) {
                        let k = e.currentTask && e.currentTask.data && e.currentTask.data[A];
                        k && o(a, q, {
                            configurable: !0,
                            enumerable: !1,
                            writable: !0,
                            value: k
                        })
                    }
                    for (let k = 0; k < S.length; )
                        u(E, S[k++], S[k++], S[k++], S[k++]);
                    if (S.length == 0 && y == N) {
                        E[I] = C;
                        let k = a;
                        try {
                            throw new Error("Uncaught (in promise): " + s(a) + (a && a.stack ? `
` + a.stack : ""))
                        } catch (D) {
                            k = D
                        }
                        m && (k.throwOriginal = !0),
                        k.rejection = a,
                        k.promise = E,
                        k.zone = e.current,
                        k.task = e.currentTask,
                        h.push(k),
                        r.scheduleMicroTask()
                    }
                }
            }
            return E
        }
        let _ = f("rejectionHandledHandler");
        function c(E) {
            if (E[I] === C) {
                try {
                    let y = e[_];
                    y && typeof y == "function" && y.call(this, {
                        rejection: E[T],
                        promise: E
                    })
                } catch {}
                E[I] = N;
                for (let y = 0; y < h.length; y++)
                    E === h[y].promise && h.splice(y, 1)
            }
        }
        function u(E, y, a, g, B) {
            c(E);
            let S = E[I]
              , k = S ? typeof g == "function" ? g : et : typeof B == "function" ? B : X;
            y.scheduleMicroTask(H, () => {
                try {
                    let D = E[T]
                      , O = !!a && M === a[M];
                    O && (a[Z] = D,
                    a[Y] = S);
                    let U = y.run(k, void 0, O && k !== X && k !== et ? [] : [D]);
                    v(a, !0, U)
                } catch (D) {
                    v(a, !1, D)
                }
            }
            , a)
        }
        let x = "function ZoneAwarePromise() { [native code] }"
          , R = function() {}
          , W = t.AggregateError;
        class L {
            static toString() {
                return x
            }
            static resolve(y) {
                return y instanceof L ? y : v(new this(null), V, y)
            }
            static reject(y) {
                return v(new this(null), N, y)
            }
            static withResolvers() {
                let y = {};
                return y.promise = new L( (a, g) => {
                    y.resolve = a,
                    y.reject = g
                }
                ),
                y
            }
            static any(y) {
                if (!y || typeof y[Symbol.iterator] != "function")
                    return Promise.reject(new W([],"All promises were rejected"));
                let a = []
                  , g = 0;
                try {
                    for (let k of y)
                        g++,
                        a.push(L.resolve(k))
                } catch {
                    return Promise.reject(new W([],"All promises were rejected"))
                }
                if (g === 0)
                    return Promise.reject(new W([],"All promises were rejected"));
                let B = !1
                  , S = [];
                return new L( (k, D) => {
                    for (let O = 0; O < a.length; O++)
                        a[O].then(U => {
                            B || (B = !0,
                            k(U))
                        }
                        , U => {
                            S.push(U),
                            g--,
                            g === 0 && (B = !0,
                            D(new W(S,"All promises were rejected")))
                        }
                        )
                }
                )
            }
            static race(y) {
                let a, g, B = new this( (D, O) => {
                    a = D,
                    g = O
                }
                );
                function S(D) {
                    a(D)
                }
                function k(D) {
                    g(D)
                }
                for (let D of y)
                    Q(D) || (D = this.resolve(D)),
                    D.then(S, k);
                return B
            }
            static all(y) {
                return L.allWithCallback(y)
            }
            static allSettled(y) {
                return (this && this.prototype instanceof L ? this : L).allWithCallback(y, {
                    thenCallback: g => ({
                        status: "fulfilled",
                        value: g
                    }),
                    errorCallback: g => ({
                        status: "rejected",
                        reason: g
                    })
                })
            }
            static allWithCallback(y, a) {
                let g, B, S = new this( (U, z) => {
                    g = U,
                    B = z
                }
                ), k = 2, D = 0, O = [];
                for (let U of y) {
                    Q(U) || (U = this.resolve(U));
                    let z = D;
                    try {
                        U.then(G => {
                            O[z] = a ? a.thenCallback(G) : G,
                            k--,
                            k === 0 && g(O)
                        }
                        , G => {
                            a ? (O[z] = a.errorCallback(G),
                            k--,
                            k === 0 && g(O)) : B(G)
                        }
                        )
                    } catch (G) {
                        B(G)
                    }
                    k++,
                    D++
                }
                return k -= 2,
                k === 0 && g(O),
                S
            }
            constructor(y) {
                let a = this;
                if (!(a instanceof L))
                    throw new Error("Must be an instanceof Promise.");
                a[I] = w,
                a[T] = [];
                try {
                    let g = P();
                    y && y(g(b(a, V)), g(b(a, N)))
                } catch (g) {
                    v(a, !1, g)
                }
            }
            get[Symbol.toStringTag]() {
                return "Promise"
            }
            get[Symbol.species]() {
                return L
            }
            then(y, a) {
                let g = this.constructor?.[Symbol.species];
                (!g || typeof g != "function") && (g = this.constructor || L);
                let B = new g(R)
                  , S = e.current;
                return this[I] == w ? this[T].push(S, B, y, a) : u(this, S, B, y, a),
                B
            }
            catch(y) {
                return this.then(null, y)
            }
            finally(y) {
                let a = this.constructor?.[Symbol.species];
                (!a || typeof a != "function") && (a = L);
                let g = new a(R);
                g[M] = M;
                let B = e.current;
                return this[I] == w ? this[T].push(B, g, y, y) : u(this, B, g, y, y),
                g
            }
        }
        L.resolve = L.resolve,
        L.reject = L.reject,
        L.race = L.race,
        L.all = L.all;
        let bt = t[d] = t.Promise;
        t.Promise = L;
        let Et = f("thenPatched");
        function mt(E) {
            let y = E.prototype
              , a = i(y, "then");
            if (a && (a.writable === !1 || !a.configurable))
                return;
            let g = y.then;
            y[p] = g,
            E.prototype.then = function(B, S) {
                return new L( (D, O) => {
                    g.call(this, D, O)
                }
                ).then(B, S)
            }
            ,
            E[Et] = !0
        }
        r.patchThen = mt;
        function ct(E) {
            return function(y, a) {
                let g = E.apply(y, a);
                if (g instanceof L)
                    return g;
                let B = g.constructor;
                return B[Et] || mt(B),
                g
            }
        }
        return bt && (mt(bt),
        wt(t, "fetch", E => ct(E))),
        Promise[e.__symbol__("uncaughtPromiseErrors")] = h,
        L
    }
    )
}
function qn(n) {
    n.__load_patch("toString", t => {
        let e = Function.prototype.toString
          , r = $("OriginalDelegate")
          , i = $("Promise")
          , o = $("Error")
          , s = function() {
            if (typeof this == "function") {
                let d = this[r];
                if (d)
                    return typeof d == "function" ? e.call(d) : Object.prototype.toString.call(d);
                if (this === Promise) {
                    let p = t[i];
                    if (p)
                        return e.call(p)
                }
                if (this === Error) {
                    let p = t[o];
                    if (p)
                        return e.call(p)
                }
            }
            return e.call(this)
        };
        s[r] = e,
        Function.prototype.toString = s;
        let f = Object.prototype.toString
          , h = "[object Promise]";
        Object.prototype.toString = function() {
            return typeof Promise == "function" && this instanceof Promise ? h : f.call(this)
        }
    }
    )
}
function Wn(n, t, e, r, i) {
    let o = Zone.__symbol__(r);
    if (t[o])
        return;
    let s = t[o] = t[r];
    t[r] = function(f, h, m) {
        return h && h.prototype && i.forEach(function(d) {
            let p = `${e}.${r}::` + d
              , A = h.prototype;
            try {
                if (A.hasOwnProperty(d)) {
                    let F = n.ObjectGetOwnPropertyDescriptor(A, d);
                    F && F.value ? (F.value = n.wrapWithCurrentZone(F.value, p),
                    n._redefineProperty(h.prototype, d, F)) : A[d] && (A[d] = n.wrapWithCurrentZone(A[d], p))
                } else
                    A[d] && (A[d] = n.wrapWithCurrentZone(A[d], p))
            } catch {}
        }),
        s.call(t, f, h, m)
    }
    ,
    n.attachOriginToPatched(t[r], s)
}
function Xn(n) {
    n.__load_patch("util", (t, e, r) => {
        let i = ae(t);
        r.patchOnProperties = Ge,
        r.patchMethod = wt,
        r.bindArguments = ge,
        r.patchMacroTask = Dn;
        let o = e.__symbol__("BLACK_LISTED_EVENTS")
          , s = e.__symbol__("UNPATCHED_EVENTS");
        t[s] && (t[o] = t[s]),
        t[o] && (e[o] = e[s] = t[o]),
        r.patchEventPrototype = Mn,
        r.patchEventTarget = Ln,
        r.isIEOrEdge = On,
        r.ObjectDefineProperty = le,
        r.ObjectGetOwnPropertyDescriptor = zt,
        r.ObjectCreate = Cn,
        r.ArraySlice = Sn,
        r.patchClass = Ht,
        r.wrapWithCurrentZone = pe,
        r.filterProperties = Ke,
        r.attachOriginToPatched = kt,
        r._redefineProperty = Object.defineProperty,
        r.patchCallbacks = Wn,
        r.getGlobalObjects = () => ({
            globalSources: Ve,
            zoneSymbolEventNames: ot,
            eventNames: i,
            isBrowser: Ee,
            isMix: ze,
            isNode: Jt,
            TRUE_STR: Tt,
            FALSE_STR: _t,
            ZONE_SYMBOL_PREFIX: Gt,
            ADD_EVENT_LISTENER_STR: he,
            REMOVE_EVENT_LISTENER_STR: de
        })
    }
    )
}
function Yn(n) {
    Vn(n),
    qn(n),
    Xn(n)
}
var Je = An();
Yn(Je);
Gn(Je);
window.global = window;
global.Buffer = global.Buffer || Ae().Buffer;
window.Buffer = window.Buffer || Ae().Buffer;
global.process = In();
var Pr = ":";
function Nr(n, t) {
    for (let e = 1, r = 1; e < n.length; e++,
    r++)
        if (t[r] === "\\")
            r++;
        else if (n[e] === Pr)
            return e;
    throw new Error(`Unterminated $localize metadata block in "${t}".`)
}
var re = function(n, ...t) {
    if (re.translate) {
        let r = re.translate(n, t);
        n = r[0],
        t = r[1]
    }
    let e = Bn(n[0], n.raw[0]);
    for (let r = 1; r < n.length; r++)
        e += t[r - 1] + Bn(n[r], n.raw[r]);
    return e
}
  , vr = ":";
function Bn(n, t) {
    return t.charAt(0) === vr ? n.substring(Nr(n, t) + 1) : n
}
globalThis.$localize = re;
