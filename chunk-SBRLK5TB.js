import {D as ji, I as qt, N as Vn, R as Kn, a as rs, h as j, v as Fn, w as jn, ya as Vi, z as Fi, za as Hn} from "./chunk-K5YJ6EH2.js";
import "./chunk-ZU6Q67UT.js";
import "./chunk-XQAGV3NV.js";
import {a as ht, b as is} from "./chunk-QV7AMSUB.js";
import "./chunk-L4DL45FQ.js";
import "./chunk-XMCF3TCT.js";
import {a as ns, b as Zn} from "./chunk-CP7YJKJV.js";
import {a as de, b as Be, d as Zi, f as Ht, i as Ue, j as ts, l as v} from "./chunk-QE6IBIJD.js";
var Xi = Ht( ($d, qn) => {
    "use strict";
    var os = /[\p{Lu}]/u
      , as = /[\p{Ll}]/u
      , Ki = /^[\p{Lu}](?![\p{Lu}])/gu
      , Gi = /([\p{Alpha}\p{N}_]|$)/u
      , Wi = /[_.\- ]+/
      , ss = new RegExp("^" + Wi.source)
      , Hi = new RegExp(Wi.source + Gi.source,"gu")
      , qi = new RegExp("\\d+" + Gi.source,"gu")
      , cs = (n, t, e) => {
        let r = !1
          , i = !1
          , o = !1;
        for (let a = 0; a < n.length; a++) {
            let s = n[a];
            r && os.test(s) ? (n = n.slice(0, a) + "-" + n.slice(a),
            r = !1,
            o = i,
            i = !0,
            a++) : i && o && as.test(s) ? (n = n.slice(0, a - 1) + "-" + n.slice(a - 1),
            o = i,
            i = !1,
            r = !0) : (r = t(s) === s && e(s) !== s,
            o = i,
            i = e(s) === s && t(s) !== s)
        }
        return n
    }
      , us = (n, t) => (Ki.lastIndex = 0,
    n.replace(Ki, e => t(e)))
      , ls = (n, t) => (Hi.lastIndex = 0,
    qi.lastIndex = 0,
    n.replace(Hi, (e, r) => t(r)).replace(qi, e => t(e)))
      , Yi = (n, t) => {
        if (!(typeof n == "string" || Array.isArray(n)))
            throw new TypeError("Expected the input to be `string | string[]`");
        if (t = de({
            pascalCase: !1,
            preserveConsecutiveUppercase: !1
        }, t),
        Array.isArray(n) ? n = n.map(o => o.trim()).filter(o => o.length).join("-") : n = n.trim(),
        n.length === 0)
            return "";
        let e = t.locale === !1 ? o => o.toLowerCase() : o => o.toLocaleLowerCase(t.locale)
          , r = t.locale === !1 ? o => o.toUpperCase() : o => o.toLocaleUpperCase(t.locale);
        return n.length === 1 ? t.pascalCase ? r(n) : e(n) : (n !== e(n) && (n = cs(n, e, r)),
        n = n.replace(ss, ""),
        t.preserveConsecutiveUppercase ? n = us(n, e) : n = e(n),
        t.pascalCase && (n = r(n.charAt(0)) + n.slice(1)),
        ls(n, r))
    }
    ;
    qn.exports = Yi;
    qn.exports.default = Yi
}
);
var er = Ht(y => {
    "use strict";
    var N = class {
        constructor(t, e) {
            if (!Number.isInteger(t))
                throw new TypeError("span must be an integer");
            this.span = t,
            this.property = e
        }
        makeDestinationObject() {
            return {}
        }
        decode(t, e) {
            throw new Error("Layout is abstract")
        }
        encode(t, e, r) {
            throw new Error("Layout is abstract")
        }
        getSpan(t, e) {
            if (0 > this.span)
                throw new RangeError("indeterminate span");
            return this.span
        }
        replicate(t) {
            let e = Object.create(this.constructor.prototype);
            return Object.assign(e, this),
            e.property = t,
            e
        }
        fromArray(t) {}
    }
    ;
    y.Layout = N;
    function Qn(n, t) {
        return t.property ? n + "[" + t.property + "]" : n
    }
    y.nameWithProperty = Qn;
    function ds(n, t) {
        if (typeof n != "function")
            throw new TypeError("Class must be constructor");
        if (n.hasOwnProperty("layout_"))
            throw new Error("Class is already bound to a layout");
        if (!(t && t instanceof N))
            throw new TypeError("layout must be a Layout");
        if (t.hasOwnProperty("boundConstructor_"))
            throw new Error("layout is already bound to a constructor");
        n.layout_ = t,
        t.boundConstructor_ = n,
        t.makeDestinationObject = () => new n,
        Object.defineProperty(n.prototype, "encode", {
            value: function(e, r) {
                return t.encode(this, e, r)
            },
            writable: !0
        }),
        Object.defineProperty(n, "decode", {
            value: function(e, r) {
                return t.decode(e, r)
            },
            writable: !0
        })
    }
    y.bindConstructorLayout = ds;
    var Y = class extends N {
        isCount() {
            throw new Error("ExternalLayout is abstract")
        }
    }
      , Gt = class extends Y {
        constructor(t, e) {
            if (t === void 0 && (t = 1),
            !Number.isInteger(t) || 0 >= t)
                throw new TypeError("elementSpan must be a (positive) integer");
            super(-1, e),
            this.elementSpan = t
        }
        isCount() {
            return !0
        }
        decode(t, e) {
            e === void 0 && (e = 0);
            let r = t.length - e;
            return Math.floor(r / this.elementSpan)
        }
        encode(t, e, r) {
            return 0
        }
    }
      , pt = class extends Y {
        constructor(t, e, r) {
            if (!(t instanceof N))
                throw new TypeError("layout must be a Layout");
            if (e === void 0)
                e = 0;
            else if (!Number.isInteger(e))
                throw new TypeError("offset must be integer or undefined");
            super(t.span, r || t.property),
            this.layout = t,
            this.offset = e
        }
        isCount() {
            return this.layout instanceof ae || this.layout instanceof fe
        }
        decode(t, e) {
            return e === void 0 && (e = 0),
            this.layout.decode(t, e + this.offset)
        }
        encode(t, e, r) {
            return r === void 0 && (r = 0),
            this.layout.encode(t, e, r + this.offset)
        }
    }
      , ae = class extends N {
        constructor(t, e) {
            if (super(t, e),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(t, e) {
            return e === void 0 && (e = 0),
            t.readUIntLE(e, this.span)
        }
        encode(t, e, r) {
            return r === void 0 && (r = 0),
            e.writeUIntLE(t, r, this.span),
            this.span
        }
    }
      , fe = class extends N {
        constructor(t, e) {
            if (super(t, e),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(t, e) {
            return e === void 0 && (e = 0),
            t.readUIntBE(e, this.span)
        }
        encode(t, e, r) {
            return r === void 0 && (r = 0),
            e.writeUIntBE(t, r, this.span),
            this.span
        }
    }
      , be = class extends N {
        constructor(t, e) {
            if (super(t, e),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(t, e) {
            return e === void 0 && (e = 0),
            t.readIntLE(e, this.span)
        }
        encode(t, e, r) {
            return r === void 0 && (r = 0),
            e.writeIntLE(t, r, this.span),
            this.span
        }
    }
      , Te = class extends N {
        constructor(t, e) {
            if (super(t, e),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(t, e) {
            return e === void 0 && (e = 0),
            t.readIntBE(e, this.span)
        }
        encode(t, e, r) {
            return r === void 0 && (r = 0),
            e.writeIntBE(t, r, this.span),
            this.span
        }
    }
      , Gn = Math.pow(2, 32);
    function cn(n) {
        let t = Math.floor(n / Gn)
          , e = n - t * Gn;
        return {
            hi32: t,
            lo32: e
        }
    }
    function un(n, t) {
        return n * Gn + t
    }
    var Wn = class extends N {
        constructor(t) {
            super(8, t)
        }
        decode(t, e) {
            e === void 0 && (e = 0);
            let r = t.readUInt32LE(e)
              , i = t.readUInt32LE(e + 4);
            return un(i, r)
        }
        encode(t, e, r) {
            r === void 0 && (r = 0);
            let i = cn(t);
            return e.writeUInt32LE(i.lo32, r),
            e.writeUInt32LE(i.hi32, r + 4),
            8
        }
    }
      , Yn = class extends N {
        constructor(t) {
            super(8, t)
        }
        decode(t, e) {
            e === void 0 && (e = 0);
            let r = t.readUInt32BE(e)
              , i = t.readUInt32BE(e + 4);
            return un(r, i)
        }
        encode(t, e, r) {
            r === void 0 && (r = 0);
            let i = cn(t);
            return e.writeUInt32BE(i.hi32, r),
            e.writeUInt32BE(i.lo32, r + 4),
            8
        }
    }
      , Xn = class extends N {
        constructor(t) {
            super(8, t)
        }
        decode(t, e) {
            e === void 0 && (e = 0);
            let r = t.readUInt32LE(e)
              , i = t.readInt32LE(e + 4);
            return un(i, r)
        }
        encode(t, e, r) {
            r === void 0 && (r = 0);
            let i = cn(t);
            return e.writeUInt32LE(i.lo32, r),
            e.writeInt32LE(i.hi32, r + 4),
            8
        }
    }
      , Jn = class extends N {
        constructor(t) {
            super(8, t)
        }
        decode(t, e) {
            e === void 0 && (e = 0);
            let r = t.readInt32BE(e)
              , i = t.readUInt32BE(e + 4);
            return un(r, i)
        }
        encode(t, e, r) {
            r === void 0 && (r = 0);
            let i = cn(t);
            return e.writeInt32BE(i.hi32, r),
            e.writeUInt32BE(i.lo32, r + 4),
            8
        }
    }
      , Wt = class extends N {
        constructor(t) {
            super(4, t)
        }
        decode(t, e) {
            return e === void 0 && (e = 0),
            t.readFloatLE(e)
        }
        encode(t, e, r) {
            return r === void 0 && (r = 0),
            e.writeFloatLE(t, r),
            4
        }
    }
      , Yt = class extends N {
        constructor(t) {
            super(4, t)
        }
        decode(t, e) {
            return e === void 0 && (e = 0),
            t.readFloatBE(e)
        }
        encode(t, e, r) {
            return r === void 0 && (r = 0),
            e.writeFloatBE(t, r),
            4
        }
    }
      , Xt = class extends N {
        constructor(t) {
            super(8, t)
        }
        decode(t, e) {
            return e === void 0 && (e = 0),
            t.readDoubleLE(e)
        }
        encode(t, e, r) {
            return r === void 0 && (r = 0),
            e.writeDoubleLE(t, r),
            8
        }
    }
      , Jt = class extends N {
        constructor(t) {
            super(8, t)
        }
        decode(t, e) {
            return e === void 0 && (e = 0),
            t.readDoubleBE(e)
        }
        encode(t, e, r) {
            return r === void 0 && (r = 0),
            e.writeDoubleBE(t, r),
            8
        }
    }
      , Qt = class extends N {
        constructor(t, e, r) {
            if (!(t instanceof N))
                throw new TypeError("elementLayout must be a Layout");
            if (!(e instanceof Y && e.isCount() || Number.isInteger(e) && 0 <= e))
                throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
            let i = -1;
            !(e instanceof Y) && 0 < t.span && (i = e * t.span),
            super(i, r),
            this.elementLayout = t,
            this.count = e
        }
        getSpan(t, e) {
            if (0 <= this.span)
                return this.span;
            e === void 0 && (e = 0);
            let r = 0
              , i = this.count;
            if (i instanceof Y && (i = i.decode(t, e)),
            0 < this.elementLayout.span)
                r = i * this.elementLayout.span;
            else {
                let o = 0;
                for (; o < i; )
                    r += this.elementLayout.getSpan(t, e + r),
                    ++o
            }
            return r
        }
        decode(t, e) {
            e === void 0 && (e = 0);
            let r = []
              , i = 0
              , o = this.count;
            for (o instanceof Y && (o = o.decode(t, e)); i < o; )
                r.push(this.elementLayout.decode(t, e)),
                e += this.elementLayout.getSpan(t, e),
                i += 1;
            return r
        }
        encode(t, e, r) {
            r === void 0 && (r = 0);
            let i = this.elementLayout
              , o = t.reduce( (a, s) => a + i.encode(s, e, r + a), 0);
            return this.count instanceof Y && this.count.encode(t.length, e, r),
            o
        }
    }
      , en = class extends N {
        constructor(t, e, r) {
            if (!(Array.isArray(t) && t.reduce( (o, a) => o && a instanceof N, !0)))
                throw new TypeError("fields must be array of Layout instances");
            typeof e == "boolean" && r === void 0 && (r = e,
            e = void 0);
            for (let o of t)
                if (0 > o.span && o.property === void 0)
                    throw new Error("fields cannot contain unnamed variable-length layout");
            let i = -1;
            try {
                i = t.reduce( (o, a) => o + a.getSpan(), 0)
            } catch {}
            super(i, e),
            this.fields = t,
            this.decodePrefixes = !!r
        }
        getSpan(t, e) {
            if (0 <= this.span)
                return this.span;
            e === void 0 && (e = 0);
            let r = 0;
            try {
                r = this.fields.reduce( (i, o) => {
                    let a = o.getSpan(t, e);
                    return e += a,
                    i + a
                }
                , 0)
            } catch {
                throw new RangeError("indeterminate span")
            }
            return r
        }
        decode(t, e) {
            e === void 0 && (e = 0);
            let r = this.makeDestinationObject();
            for (let i of this.fields)
                if (i.property !== void 0 && (r[i.property] = i.decode(t, e)),
                e += i.getSpan(t, e),
                this.decodePrefixes && t.length === e)
                    break;
            return r
        }
        encode(t, e, r) {
            r === void 0 && (r = 0);
            let i = r
              , o = 0
              , a = 0;
            for (let s of this.fields) {
                let u = s.span;
                if (a = 0 < u ? u : 0,
                s.property !== void 0) {
                    let c = t[s.property];
                    c !== void 0 && (a = s.encode(c, e, r),
                    0 > u && (u = s.getSpan(e, r)))
                }
                o = r,
                r += u
            }
            return o + a - i
        }
        fromArray(t) {
            let e = this.makeDestinationObject();
            for (let r of this.fields)
                r.property !== void 0 && 0 < t.length && (e[r.property] = t.shift());
            return e
        }
        layoutFor(t) {
            if (typeof t != "string")
                throw new TypeError("property must be string");
            for (let e of this.fields)
                if (e.property === t)
                    return e
        }
        offsetOf(t) {
            if (typeof t != "string")
                throw new TypeError("property must be string");
            let e = 0;
            for (let r of this.fields) {
                if (r.property === t)
                    return e;
                0 > r.span ? e = -1 : 0 <= e && (e += r.span)
            }
        }
    }
      , _t = class {
        constructor(t) {
            this.property = t
        }
        decode() {
            throw new Error("UnionDiscriminator is abstract")
        }
        encode() {
            throw new Error("UnionDiscriminator is abstract")
        }
    }
      , Qe = class extends _t {
        constructor(t, e) {
            if (!(t instanceof Y && t.isCount()))
                throw new TypeError("layout must be an unsigned integer ExternalLayout");
            super(e || t.property || "variant"),
            this.layout = t
        }
        decode(t, e) {
            return this.layout.decode(t, e)
        }
        encode(t, e, r) {
            return this.layout.encode(t, e, r)
        }
    }
      , wt = class extends N {
        constructor(t, e, r) {
            let i = t instanceof ae || t instanceof fe;
            if (i)
                t = new Qe(new pt(t));
            else if (t instanceof Y && t.isCount())
                t = new Qe(t);
            else if (!(t instanceof _t))
                throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
            if (e === void 0 && (e = null),
            !(e === null || e instanceof N))
                throw new TypeError("defaultLayout must be null or a Layout");
            if (e !== null) {
                if (0 > e.span)
                    throw new Error("defaultLayout must have constant span");
                e.property === void 0 && (e = e.replicate("content"))
            }
            let o = -1;
            e && (o = e.span,
            0 <= o && i && (o += t.layout.span)),
            super(o, r),
            this.discriminator = t,
            this.usesPrefixDiscriminator = i,
            this.defaultLayout = e,
            this.registry = {};
            let a = this.defaultGetSourceVariant.bind(this);
            this.getSourceVariant = function(s) {
                return a(s)
            }
            ,
            this.configGetSourceVariant = function(s) {
                a = s.bind(this)
            }
        }
        getSpan(t, e) {
            if (0 <= this.span)
                return this.span;
            e === void 0 && (e = 0);
            let r = this.getVariant(t, e);
            if (!r)
                throw new Error("unable to determine span for unrecognized variant");
            return r.getSpan(t, e)
        }
        defaultGetSourceVariant(t) {
            if (t.hasOwnProperty(this.discriminator.property)) {
                if (this.defaultLayout && t.hasOwnProperty(this.defaultLayout.property))
                    return;
                let e = this.registry[t[this.discriminator.property]];
                if (e && (!e.layout || t.hasOwnProperty(e.property)))
                    return e
            } else
                for (let e in this.registry) {
                    let r = this.registry[e];
                    if (t.hasOwnProperty(r.property))
                        return r
                }
            throw new Error("unable to infer src variant")
        }
        decode(t, e) {
            e === void 0 && (e = 0);
            let r, i = this.discriminator, o = i.decode(t, e), a = this.registry[o];
            if (a === void 0) {
                let s = 0;
                a = this.defaultLayout,
                this.usesPrefixDiscriminator && (s = i.layout.span),
                r = this.makeDestinationObject(),
                r[i.property] = o,
                r[a.property] = this.defaultLayout.decode(t, e + s)
            } else
                r = a.decode(t, e);
            return r
        }
        encode(t, e, r) {
            r === void 0 && (r = 0);
            let i = this.getSourceVariant(t);
            if (i === void 0) {
                let o = this.discriminator
                  , a = this.defaultLayout
                  , s = 0;
                return this.usesPrefixDiscriminator && (s = o.layout.span),
                o.encode(t[o.property], e, r),
                s + a.encode(t[a.property], e, r + s)
            }
            return i.encode(t, e, r)
        }
        addVariant(t, e, r) {
            let i = new tn(this,t,e,r);
            return this.registry[t] = i,
            i
        }
        getVariant(t, e) {
            let r = t;
            return Buffer.isBuffer(t) && (e === void 0 && (e = 0),
            r = this.discriminator.decode(t, e)),
            this.registry[r]
        }
    }
      , tn = class extends N {
        constructor(t, e, r, i) {
            if (!(t instanceof wt))
                throw new TypeError("union must be a Union");
            if (!Number.isInteger(e) || 0 > e)
                throw new TypeError("variant must be a (non-negative) integer");
            if (typeof r == "string" && i === void 0 && (i = r,
            r = null),
            r) {
                if (!(r instanceof N))
                    throw new TypeError("layout must be a Layout");
                if (t.defaultLayout !== null && 0 <= r.span && r.span > t.defaultLayout.span)
                    throw new Error("variant span exceeds span of containing union");
                if (typeof i != "string")
                    throw new TypeError("variant must have a String property")
            }
            let o = t.span;
            0 > t.span && (o = r ? r.span : 0,
            0 <= o && t.usesPrefixDiscriminator && (o += t.discriminator.layout.span)),
            super(o, i),
            this.union = t,
            this.variant = e,
            this.layout = r || null
        }
        getSpan(t, e) {
            if (0 <= this.span)
                return this.span;
            e === void 0 && (e = 0);
            let r = 0;
            return this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span),
            r + this.layout.getSpan(t, e + r)
        }
        decode(t, e) {
            let r = this.makeDestinationObject();
            if (e === void 0 && (e = 0),
            this !== this.union.getVariant(t, e))
                throw new Error("variant mismatch");
            let i = 0;
            return this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span),
            this.layout ? r[this.property] = this.layout.decode(t, e + i) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant),
            r
        }
        encode(t, e, r) {
            r === void 0 && (r = 0);
            let i = 0;
            if (this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span),
            this.layout && !t.hasOwnProperty(this.property))
                throw new TypeError("variant lacks property " + this.property);
            this.union.discriminator.encode(this.variant, e, r);
            let o = i;
            if (this.layout && (this.layout.encode(t[this.property], e, r + i),
            o += this.layout.getSpan(e, r + i),
            0 <= this.union.span && o > this.union.span))
                throw new Error("encoded variant overruns containing union");
            return o
        }
        fromArray(t) {
            if (this.layout)
                return this.layout.fromArray(t)
        }
    }
    ;
    function Je(n) {
        return 0 > n && (n += 4294967296),
        n
    }
    var gt = class extends N {
        constructor(t, e, r) {
            if (!(t instanceof ae || t instanceof fe))
                throw new TypeError("word must be a UInt or UIntBE layout");
            if (typeof e == "string" && r === void 0 && (r = e,
            e = void 0),
            4 < t.span)
                throw new RangeError("word cannot exceed 32 bits");
            super(t.span, r),
            this.word = t,
            this.msb = !!e,
            this.fields = [];
            let i = 0;
            this._packedSetValue = function(o) {
                return i = Je(o),
                this
            }
            ,
            this._packedGetValue = function() {
                return i
            }
        }
        decode(t, e) {
            let r = this.makeDestinationObject();
            e === void 0 && (e = 0);
            let i = this.word.decode(t, e);
            this._packedSetValue(i);
            for (let o of this.fields)
                o.property !== void 0 && (r[o.property] = o.decode(i));
            return r
        }
        encode(t, e, r) {
            r === void 0 && (r = 0);
            let i = this.word.decode(e, r);
            this._packedSetValue(i);
            for (let o of this.fields)
                if (o.property !== void 0) {
                    let a = t[o.property];
                    a !== void 0 && o.encode(a)
                }
            return this.word.encode(this._packedGetValue(), e, r)
        }
        addField(t, e) {
            let r = new Me(this,t,e);
            return this.fields.push(r),
            r
        }
        addBoolean(t) {
            let e = new nn(this,t);
            return this.fields.push(e),
            e
        }
        fieldFor(t) {
            if (typeof t != "string")
                throw new TypeError("property must be string");
            for (let e of this.fields)
                if (e.property === t)
                    return e
        }
    }
      , Me = class {
        constructor(t, e, r) {
            if (!(t instanceof gt))
                throw new TypeError("container must be a BitStructure");
            if (!Number.isInteger(e) || 0 >= e)
                throw new TypeError("bits must be positive integer");
            let i = 8 * t.span
              , o = t.fields.reduce( (a, s) => a + s.bits, 0);
            if (e + o > i)
                throw new Error("bits too long for span remainder (" + (i - o) + " of " + i + " remain)");
            this.container = t,
            this.bits = e,
            this.valueMask = (1 << e) - 1,
            e === 32 && (this.valueMask = 4294967295),
            this.start = o,
            this.container.msb && (this.start = i - o - e),
            this.wordMask = Je(this.valueMask << this.start),
            this.property = r
        }
        decode() {
            let t = this.container._packedGetValue();
            return Je(t & this.wordMask) >>> this.start
        }
        encode(t) {
            if (!Number.isInteger(t) || t !== Je(t & this.valueMask))
                throw new TypeError(Qn("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
            let e = this.container._packedGetValue()
              , r = Je(t << this.start);
            this.container._packedSetValue(Je(e & ~this.wordMask) | r)
        }
    }
      , nn = class extends Me {
        constructor(t, e) {
            super(t, 1, e)
        }
        decode(t, e) {
            return !!Me.prototype.decode.call(this, t, e)
        }
        encode(t) {
            return typeof t == "boolean" && (t = +t),
            Me.prototype.encode.call(this, t)
        }
    }
      , rn = class extends N {
        constructor(t, e) {
            if (!(t instanceof Y && t.isCount() || Number.isInteger(t) && 0 <= t))
                throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
            let r = -1;
            t instanceof Y || (r = t),
            super(r, e),
            this.length = t
        }
        getSpan(t, e) {
            let r = this.span;
            return 0 > r && (r = this.length.decode(t, e)),
            r
        }
        decode(t, e) {
            e === void 0 && (e = 0);
            let r = this.span;
            return 0 > r && (r = this.length.decode(t, e)),
            t.slice(e, e + r)
        }
        encode(t, e, r) {
            let i = this.length;
            if (this.length instanceof Y && (i = t.length),
            !(Buffer.isBuffer(t) && i === t.length))
                throw new TypeError(Qn("Blob.encode", this) + " requires (length " + i + ") Buffer as src");
            if (r + i > e.length)
                throw new RangeError("encoding overruns Buffer");
            return e.write(t.toString("hex"), r, i, "hex"),
            this.length instanceof Y && this.length.encode(i, e, r),
            i
        }
    }
      , on = class extends N {
        constructor(t) {
            super(-1, t)
        }
        getSpan(t, e) {
            if (!Buffer.isBuffer(t))
                throw new TypeError("b must be a Buffer");
            e === void 0 && (e = 0);
            let r = e;
            for (; r < t.length && t[r] !== 0; )
                r += 1;
            return 1 + r - e
        }
        decode(t, e, r) {
            e === void 0 && (e = 0);
            let i = this.getSpan(t, e);
            return t.slice(e, e + i - 1).toString("utf-8")
        }
        encode(t, e, r) {
            r === void 0 && (r = 0),
            typeof t != "string" && (t = t.toString());
            let i = new Buffer(t,"utf8")
              , o = i.length;
            if (r + o > e.length)
                throw new RangeError("encoding overruns Buffer");
            return i.copy(e, r),
            e[r + o] = 0,
            o + 1
        }
    }
      , an = class extends N {
        constructor(t, e) {
            if (typeof t == "string" && e === void 0 && (e = t,
            t = void 0),
            t === void 0)
                t = -1;
            else if (!Number.isInteger(t))
                throw new TypeError("maxSpan must be an integer");
            super(-1, e),
            this.maxSpan = t
        }
        getSpan(t, e) {
            if (!Buffer.isBuffer(t))
                throw new TypeError("b must be a Buffer");
            return e === void 0 && (e = 0),
            t.length - e
        }
        decode(t, e, r) {
            e === void 0 && (e = 0);
            let i = this.getSpan(t, e);
            if (0 <= this.maxSpan && this.maxSpan < i)
                throw new RangeError("text length exceeds maxSpan");
            return t.slice(e, e + i).toString("utf-8")
        }
        encode(t, e, r) {
            r === void 0 && (r = 0),
            typeof t != "string" && (t = t.toString());
            let i = new Buffer(t,"utf8")
              , o = i.length;
            if (0 <= this.maxSpan && this.maxSpan < o)
                throw new RangeError("text length exceeds maxSpan");
            if (r + o > e.length)
                throw new RangeError("encoding overruns Buffer");
            return i.copy(e, r),
            o
        }
    }
      , sn = class extends N {
        constructor(t, e) {
            super(0, e),
            this.value = t
        }
        decode(t, e, r) {
            return this.value
        }
        encode(t, e, r) {
            return 0
        }
    }
    ;
    y.ExternalLayout = Y;
    y.GreedyCount = Gt;
    y.OffsetLayout = pt;
    y.UInt = ae;
    y.UIntBE = fe;
    y.Int = be;
    y.IntBE = Te;
    y.Float = Wt;
    y.FloatBE = Yt;
    y.Double = Xt;
    y.DoubleBE = Jt;
    y.Sequence = Qt;
    y.Structure = en;
    y.UnionDiscriminator = _t;
    y.UnionLayoutDiscriminator = Qe;
    y.Union = wt;
    y.VariantLayout = tn;
    y.BitStructure = gt;
    y.BitField = Me;
    y.Boolean = nn;
    y.Blob = rn;
    y.CString = on;
    y.UTF8 = an;
    y.Constant = sn;
    y.greedy = (n, t) => new Gt(n,t);
    y.offset = (n, t, e) => new pt(n,t,e);
    y.u8 = n => new ae(1,n);
    y.u16 = n => new ae(2,n);
    y.u24 = n => new ae(3,n);
    y.u32 = n => new ae(4,n);
    y.u40 = n => new ae(5,n);
    y.u48 = n => new ae(6,n);
    y.nu64 = n => new Wn(n);
    y.u16be = n => new fe(2,n);
    y.u24be = n => new fe(3,n);
    y.u32be = n => new fe(4,n);
    y.u40be = n => new fe(5,n);
    y.u48be = n => new fe(6,n);
    y.nu64be = n => new Yn(n);
    y.s8 = n => new be(1,n);
    y.s16 = n => new be(2,n);
    y.s24 = n => new be(3,n);
    y.s32 = n => new be(4,n);
    y.s40 = n => new be(5,n);
    y.s48 = n => new be(6,n);
    y.ns64 = n => new Xn(n);
    y.s16be = n => new Te(2,n);
    y.s24be = n => new Te(3,n);
    y.s32be = n => new Te(4,n);
    y.s40be = n => new Te(5,n);
    y.s48be = n => new Te(6,n);
    y.ns64be = n => new Jn(n);
    y.f32 = n => new Wt(n);
    y.f32be = n => new Yt(n);
    y.f64 = n => new Xt(n);
    y.f64be = n => new Jt(n);
    y.struct = (n, t, e) => new en(n,t,e);
    y.bits = (n, t, e) => new gt(n,t,e);
    y.seq = (n, t, e) => new Qt(n,t,e);
    y.union = (n, t, e) => new wt(n,t,e);
    y.unionLayoutDiscriminator = (n, t) => new Qe(n,t);
    y.blob = (n, t) => new rn(n,t);
    y.cstr = n => new on(n);
    y.utf8 = (n, t) => new an(n,t);
    y.const = (n, t) => new sn(n,t)
}
);
var eo = Ht(A => {
    "use strict";
    var fs = A && A.__importDefault || function(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    ;
    Object.defineProperty(A, "__esModule", {
        value: !0
    });
    A.map = A.array = A.rustEnum = A.str = A.vecU8 = A.tagged = A.vec = A.bool = A.option = A.publicKey = A.i256 = A.u256 = A.i128 = A.u128 = A.i64 = A.u64 = A.struct = A.f64 = A.f32 = A.i32 = A.u32 = A.i16 = A.u16 = A.i8 = A.u8 = void 0;
    var $ = er()
      , hs = (Hn(),
    ts(Vi))
      , ps = fs(Zn())
      , ve = er();
    Object.defineProperty(A, "u8", {
        enumerable: !0,
        get: function() {
            return ve.u8
        }
    });
    Object.defineProperty(A, "i8", {
        enumerable: !0,
        get: function() {
            return ve.s8
        }
    });
    Object.defineProperty(A, "u16", {
        enumerable: !0,
        get: function() {
            return ve.u16
        }
    });
    Object.defineProperty(A, "i16", {
        enumerable: !0,
        get: function() {
            return ve.s16
        }
    });
    Object.defineProperty(A, "u32", {
        enumerable: !0,
        get: function() {
            return ve.u32
        }
    });
    Object.defineProperty(A, "i32", {
        enumerable: !0,
        get: function() {
            return ve.s32
        }
    });
    Object.defineProperty(A, "f32", {
        enumerable: !0,
        get: function() {
            return ve.f32
        }
    });
    Object.defineProperty(A, "f64", {
        enumerable: !0,
        get: function() {
            return ve.f64
        }
    });
    Object.defineProperty(A, "struct", {
        enumerable: !0,
        get: function() {
            return ve.struct
        }
    });
    var Le = class extends $.Layout {
        constructor(t, e, r) {
            super(t, r),
            this.blob = (0,
            $.blob)(t),
            this.signed = e
        }
        decode(t, e=0) {
            let r = new ps.default(this.blob.decode(t, e),10,"le");
            return this.signed ? r.fromTwos(this.span * 8).clone() : r
        }
        encode(t, e, r=0) {
            return this.signed && (t = t.toTwos(this.span * 8)),
            this.blob.encode(t.toArrayLike(Buffer, "le", this.span), e, r)
        }
    }
    ;
    function Ji(n) {
        return new Le(8,!1,n)
    }
    A.u64 = Ji;
    function _s(n) {
        return new Le(8,!0,n)
    }
    A.i64 = _s;
    function ws(n) {
        return new Le(16,!1,n)
    }
    A.u128 = ws;
    function gs(n) {
        return new Le(16,!0,n)
    }
    A.i128 = gs;
    function ys(n) {
        return new Le(32,!1,n)
    }
    A.u256 = ys;
    function ms(n) {
        return new Le(32,!0,n)
    }
    A.i256 = ms;
    var he = class extends $.Layout {
        constructor(t, e, r, i) {
            super(t.span, i),
            this.layout = t,
            this.decoder = e,
            this.encoder = r
        }
        decode(t, e) {
            return this.decoder(this.layout.decode(t, e))
        }
        encode(t, e, r) {
            return this.layout.encode(this.encoder(t), e, r)
        }
        getSpan(t, e) {
            return this.layout.getSpan(t, e)
        }
    }
    ;
    function bs(n) {
        return new he((0,
        $.blob)(32),t => new hs.PublicKey(t),t => t.toBuffer(),n)
    }
    A.publicKey = bs;
    var tr = class extends $.Layout {
        constructor(t, e) {
            super(-1, e),
            this.layout = t,
            this.discriminator = (0,
            $.u8)()
        }
        encode(t, e, r=0) {
            return t == null ? this.discriminator.encode(0, e, r) : (this.discriminator.encode(1, e, r),
            this.layout.encode(t, e, r + 1) + 1)
        }
        decode(t, e=0) {
            let r = this.discriminator.decode(t, e);
            if (r === 0)
                return null;
            if (r === 1)
                return this.layout.decode(t, e + 1);
            throw new Error("Invalid option " + this.property)
        }
        getSpan(t, e=0) {
            let r = this.discriminator.decode(t, e);
            if (r === 0)
                return 1;
            if (r === 1)
                return this.layout.getSpan(t, e + 1) + 1;
            throw new Error("Invalid option " + this.property)
        }
    }
    ;
    function vs(n, t) {
        return new tr(n,t)
    }
    A.option = vs;
    function Es(n) {
        return new he((0,
        $.u8)(),xs,As,n)
    }
    A.bool = Es;
    function xs(n) {
        if (n === 0)
            return !1;
        if (n === 1)
            return !0;
        throw new Error("Invalid bool: " + n)
    }
    function As(n) {
        return n ? 1 : 0
    }
    function ks(n, t) {
        let e = (0,
        $.u32)("length")
          , r = (0,
        $.struct)([e, (0,
        $.seq)(n, (0,
        $.offset)(e, -e.span), "values")]);
        return new he(r, ({values: i}) => i,i => ({
            values: i
        }),t)
    }
    A.vec = ks;
    function Ss(n, t, e) {
        let r = (0,
        $.struct)([Ji("tag"), t.replicate("data")]);
        function i({tag: o, data: a}) {
            if (!o.eq(n))
                throw new Error("Invalid tag, expected: " + n.toString("hex") + ", got: " + o.toString("hex"));
            return a
        }
        return new he(r,i,o => ({
            tag: n,
            data: o
        }),e)
    }
    A.tagged = Ss;
    function Qi(n) {
        let t = (0,
        $.u32)("length")
          , e = (0,
        $.struct)([t, (0,
        $.blob)((0,
        $.offset)(t, -t.span), "data")]);
        return new he(e, ({data: r}) => r,r => ({
            data: r
        }),n)
    }
    A.vecU8 = Qi;
    function Is(n) {
        return new he(Qi(),t => t.toString("utf-8"),t => Buffer.from(t, "utf-8"),n)
    }
    A.str = Is;
    function Ts(n, t, e) {
        let r = (0,
        $.union)(e ?? (0,
        $.u8)(), t);
        return n.forEach( (i, o) => r.addVariant(o, i, i.property)),
        r
    }
    A.rustEnum = Ts;
    function Ls(n, t, e) {
        let r = (0,
        $.struct)([(0,
        $.seq)(n, t, "values")]);
        return new he(r, ({values: i}) => i,i => ({
            values: i
        }),e)
    }
    A.array = Ls;
    var nr = class extends $.Layout {
        constructor(t, e, r) {
            super(t.span + e.span, r),
            this.keyLayout = t,
            this.valueLayout = e
        }
        decode(t, e) {
            e = e || 0;
            let r = this.keyLayout.decode(t, e)
              , i = this.valueLayout.decode(t, e + this.keyLayout.getSpan(t, e));
            return [r, i]
        }
        encode(t, e, r) {
            r = r || 0;
            let i = this.keyLayout.encode(t[0], e, r)
              , o = this.valueLayout.encode(t[1], e, r + i);
            return i + o
        }
        getSpan(t, e) {
            return this.keyLayout.getSpan(t, e) + this.valueLayout.getSpan(t, e)
        }
    }
    ;
    function Rs(n, t, e) {
        let r = (0,
        $.u32)("length")
          , i = (0,
        $.struct)([r, (0,
        $.seq)(new nr(n,t), (0,
        $.offset)(r, -r.span), "values")]);
        return new he(i, ({values: o}) => new Map(o),o => ({
            values: Array.from(o.entries())
        }),e)
    }
    A.map = Rs
}
);
var xa = Ht( (Jd, Cr) => {
    "use strict";
    var ll = Object.prototype.hasOwnProperty
      , te = "~";
    function Nt() {}
    Object.create && (Nt.prototype = Object.create(null),
    new Nt().__proto__ || (te = !1));
    function dl(n, t, e) {
        this.fn = n,
        this.context = t,
        this.once = e || !1
    }
    function Ea(n, t, e, r, i) {
        if (typeof e != "function")
            throw new TypeError("The listener must be a function");
        var o = new dl(e,r || n,i)
          , a = te ? te + t : t;
        return n._events[a] ? n._events[a].fn ? n._events[a] = [n._events[a], o] : n._events[a].push(o) : (n._events[a] = o,
        n._eventsCount++),
        n
    }
    function En(n, t) {
        --n._eventsCount === 0 ? n._events = new Nt : delete n._events[t]
    }
    function X() {
        this._events = new Nt,
        this._eventsCount = 0
    }
    X.prototype.eventNames = function() {
        var t = [], e, r;
        if (this._eventsCount === 0)
            return t;
        for (r in e = this._events)
            ll.call(e, r) && t.push(te ? r.slice(1) : r);
        return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
    }
    ;
    X.prototype.listeners = function(t) {
        var e = te ? te + t : t
          , r = this._events[e];
        if (!r)
            return [];
        if (r.fn)
            return [r.fn];
        for (var i = 0, o = r.length, a = new Array(o); i < o; i++)
            a[i] = r[i].fn;
        return a
    }
    ;
    X.prototype.listenerCount = function(t) {
        var e = te ? te + t : t
          , r = this._events[e];
        return r ? r.fn ? 1 : r.length : 0
    }
    ;
    X.prototype.emit = function(t, e, r, i, o, a) {
        var s = te ? te + t : t;
        if (!this._events[s])
            return !1;
        var u = this._events[s], c = arguments.length, l, _;
        if (u.fn) {
            switch (u.once && this.removeListener(t, u.fn, void 0, !0),
            c) {
            case 1:
                return u.fn.call(u.context),
                !0;
            case 2:
                return u.fn.call(u.context, e),
                !0;
            case 3:
                return u.fn.call(u.context, e, r),
                !0;
            case 4:
                return u.fn.call(u.context, e, r, i),
                !0;
            case 5:
                return u.fn.call(u.context, e, r, i, o),
                !0;
            case 6:
                return u.fn.call(u.context, e, r, i, o, a),
                !0
            }
            for (_ = 1,
            l = new Array(c - 1); _ < c; _++)
                l[_ - 1] = arguments[_];
            u.fn.apply(u.context, l)
        } else {
            var h = u.length, d;
            for (_ = 0; _ < h; _++)
                switch (u[_].once && this.removeListener(t, u[_].fn, void 0, !0),
                c) {
                case 1:
                    u[_].fn.call(u[_].context);
                    break;
                case 2:
                    u[_].fn.call(u[_].context, e);
                    break;
                case 3:
                    u[_].fn.call(u[_].context, e, r);
                    break;
                case 4:
                    u[_].fn.call(u[_].context, e, r, i);
                    break;
                default:
                    if (!l)
                        for (d = 1,
                        l = new Array(c - 1); d < c; d++)
                            l[d - 1] = arguments[d];
                    u[_].fn.apply(u[_].context, l)
                }
        }
        return !0
    }
    ;
    X.prototype.on = function(t, e, r) {
        return Ea(this, t, e, r, !1)
    }
    ;
    X.prototype.once = function(t, e, r) {
        return Ea(this, t, e, r, !0)
    }
    ;
    X.prototype.removeListener = function(t, e, r, i) {
        var o = te ? te + t : t;
        if (!this._events[o])
            return this;
        if (!e)
            return En(this, o),
            this;
        var a = this._events[o];
        if (a.fn)
            a.fn === e && (!i || a.once) && (!r || a.context === r) && En(this, o);
        else {
            for (var s = 0, u = [], c = a.length; s < c; s++)
                (a[s].fn !== e || i && !a[s].once || r && a[s].context !== r) && u.push(a[s]);
            u.length ? this._events[o] = u.length === 1 ? u[0] : u : En(this, o)
        }
        return this
    }
    ;
    X.prototype.removeAllListeners = function(t) {
        var e;
        return t ? (e = te ? te + t : t,
        this._events[e] && En(this, e)) : (this._events = new Nt,
        this._eventsCount = 0),
        this
    }
    ;
    X.prototype.off = X.prototype.removeListener;
    X.prototype.addListener = X.prototype.on;
    X.prefixed = te;
    X.EventEmitter = X;
    typeof Cr < "u" && (Cr.exports = X)
}
);
var J = Ue(ns());
Hn();
Hn();
var Oi = Ue(Zn())
  , Md = Ue(Zn())
  , We = Ue(rs())
  , M = Ue(Xi())
  , m = Ue(eo());
is();
function ot(n) {
    let t = n.length;
    for (; --t >= 0; )
        n[t] = 0
}
var Os = 0
  , $o = 1
  , Ds = 2
  , Cs = 3
  , zs = 258
  , Sr = 29
  , Dt = 256
  , At = Dt + 1 + Sr
  , nt = 30
  , Ir = 19
  , Zo = 2 * At + 1
  , $e = 15
  , rr = 16
  , Ps = 7
  , Tr = 256
  , Fo = 16
  , jo = 17
  , Vo = 18
  , gr = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
  , _n = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
  , Ns = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
  , Ko = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  , Bs = 512
  , xe = new Array((At + 2) * 2);
ot(xe);
var vt = new Array(nt * 2);
ot(vt);
var kt = new Array(Bs);
ot(kt);
var St = new Array(zs - Cs + 1);
ot(St);
var Lr = new Array(Sr);
ot(Lr);
var wn = new Array(nt);
ot(wn);
function ir(n, t, e, r, i) {
    this.static_tree = n,
    this.extra_bits = t,
    this.extra_base = e,
    this.elems = r,
    this.max_length = i,
    this.has_stree = n && n.length
}
var Ho, qo, Go;
function or(n, t) {
    this.dyn_tree = n,
    this.max_code = 0,
    this.stat_desc = t
}
var Wo = n => n < 256 ? kt[n] : kt[256 + (n >>> 7)]
  , It = (n, t) => {
    n.pending_buf[n.pending++] = t & 255,
    n.pending_buf[n.pending++] = t >>> 8 & 255
}
  , ne = (n, t, e) => {
    n.bi_valid > rr - e ? (n.bi_buf |= t << n.bi_valid & 65535,
    It(n, n.bi_buf),
    n.bi_buf = t >> rr - n.bi_valid,
    n.bi_valid += e - rr) : (n.bi_buf |= t << n.bi_valid & 65535,
    n.bi_valid += e)
}
  , _e = (n, t, e) => {
    ne(n, e[t * 2], e[t * 2 + 1])
}
  , Yo = (n, t) => {
    let e = 0;
    do
        e |= n & 1,
        n >>>= 1,
        e <<= 1;
    while (--t > 0);
    return e >>> 1
}
  , Us = n => {
    n.bi_valid === 16 ? (It(n, n.bi_buf),
    n.bi_buf = 0,
    n.bi_valid = 0) : n.bi_valid >= 8 && (n.pending_buf[n.pending++] = n.bi_buf & 255,
    n.bi_buf >>= 8,
    n.bi_valid -= 8)
}
  , Ms = (n, t) => {
    let e = t.dyn_tree, r = t.max_code, i = t.stat_desc.static_tree, o = t.stat_desc.has_stree, a = t.stat_desc.extra_bits, s = t.stat_desc.extra_base, u = t.stat_desc.max_length, c, l, _, h, d, p, b = 0;
    for (h = 0; h <= $e; h++)
        n.bl_count[h] = 0;
    for (e[n.heap[n.heap_max] * 2 + 1] = 0,
    c = n.heap_max + 1; c < Zo; c++)
        l = n.heap[c],
        h = e[e[l * 2 + 1] * 2 + 1] + 1,
        h > u && (h = u,
        b++),
        e[l * 2 + 1] = h,
        !(l > r) && (n.bl_count[h]++,
        d = 0,
        l >= s && (d = a[l - s]),
        p = e[l * 2],
        n.opt_len += p * (h + d),
        o && (n.static_len += p * (i[l * 2 + 1] + d)));
    if (b !== 0) {
        do {
            for (h = u - 1; n.bl_count[h] === 0; )
                h--;
            n.bl_count[h]--,
            n.bl_count[h + 1] += 2,
            n.bl_count[u]--,
            b -= 2
        } while (b > 0);
        for (h = u; h !== 0; h--)
            for (l = n.bl_count[h]; l !== 0; )
                _ = n.heap[--c],
                !(_ > r) && (e[_ * 2 + 1] !== h && (n.opt_len += (h - e[_ * 2 + 1]) * e[_ * 2],
                e[_ * 2 + 1] = h),
                l--)
    }
}
  , Xo = (n, t, e) => {
    let r = new Array($e + 1), i = 0, o, a;
    for (o = 1; o <= $e; o++)
        i = i + e[o - 1] << 1,
        r[o] = i;
    for (a = 0; a <= t; a++) {
        let s = n[a * 2 + 1];
        s !== 0 && (n[a * 2] = Yo(r[s]++, s))
    }
}
  , $s = () => {
    let n, t, e, r, i, o = new Array($e + 1);
    for (e = 0,
    r = 0; r < Sr - 1; r++)
        for (Lr[r] = e,
        n = 0; n < 1 << gr[r]; n++)
            St[e++] = r;
    for (St[e - 1] = r,
    i = 0,
    r = 0; r < 16; r++)
        for (wn[r] = i,
        n = 0; n < 1 << _n[r]; n++)
            kt[i++] = r;
    for (i >>= 7; r < nt; r++)
        for (wn[r] = i << 7,
        n = 0; n < 1 << _n[r] - 7; n++)
            kt[256 + i++] = r;
    for (t = 0; t <= $e; t++)
        o[t] = 0;
    for (n = 0; n <= 143; )
        xe[n * 2 + 1] = 8,
        n++,
        o[8]++;
    for (; n <= 255; )
        xe[n * 2 + 1] = 9,
        n++,
        o[9]++;
    for (; n <= 279; )
        xe[n * 2 + 1] = 7,
        n++,
        o[7]++;
    for (; n <= 287; )
        xe[n * 2 + 1] = 8,
        n++,
        o[8]++;
    for (Xo(xe, At + 1, o),
    n = 0; n < nt; n++)
        vt[n * 2 + 1] = 5,
        vt[n * 2] = Yo(n, 5);
    Ho = new ir(xe,gr,Dt + 1,At,$e),
    qo = new ir(vt,_n,0,nt,$e),
    Go = new ir(new Array(0),Ns,0,Ir,Ps)
}
  , Jo = n => {
    let t;
    for (t = 0; t < At; t++)
        n.dyn_ltree[t * 2] = 0;
    for (t = 0; t < nt; t++)
        n.dyn_dtree[t * 2] = 0;
    for (t = 0; t < Ir; t++)
        n.bl_tree[t * 2] = 0;
    n.dyn_ltree[Tr * 2] = 1,
    n.opt_len = n.static_len = 0,
    n.sym_next = n.matches = 0
}
  , Qo = n => {
    n.bi_valid > 8 ? It(n, n.bi_buf) : n.bi_valid > 0 && (n.pending_buf[n.pending++] = n.bi_buf),
    n.bi_buf = 0,
    n.bi_valid = 0
}
  , to = (n, t, e, r) => {
    let i = t * 2
      , o = e * 2;
    return n[i] < n[o] || n[i] === n[o] && r[t] <= r[e]
}
  , ar = (n, t, e) => {
    let r = n.heap[e]
      , i = e << 1;
    for (; i <= n.heap_len && (i < n.heap_len && to(t, n.heap[i + 1], n.heap[i], n.depth) && i++,
    !to(t, r, n.heap[i], n.depth)); )
        n.heap[e] = n.heap[i],
        e = i,
        i <<= 1;
    n.heap[e] = r
}
  , no = (n, t, e) => {
    let r, i, o = 0, a, s;
    if (n.sym_next !== 0)
        do
            r = n.pending_buf[n.sym_buf + o++] & 255,
            r += (n.pending_buf[n.sym_buf + o++] & 255) << 8,
            i = n.pending_buf[n.sym_buf + o++],
            r === 0 ? _e(n, i, t) : (a = St[i],
            _e(n, a + Dt + 1, t),
            s = gr[a],
            s !== 0 && (i -= Lr[a],
            ne(n, i, s)),
            r--,
            a = Wo(r),
            _e(n, a, e),
            s = _n[a],
            s !== 0 && (r -= wn[a],
            ne(n, r, s)));
        while (o < n.sym_next);
    _e(n, Tr, t)
}
  , yr = (n, t) => {
    let e = t.dyn_tree, r = t.stat_desc.static_tree, i = t.stat_desc.has_stree, o = t.stat_desc.elems, a, s, u = -1, c;
    for (n.heap_len = 0,
    n.heap_max = Zo,
    a = 0; a < o; a++)
        e[a * 2] !== 0 ? (n.heap[++n.heap_len] = u = a,
        n.depth[a] = 0) : e[a * 2 + 1] = 0;
    for (; n.heap_len < 2; )
        c = n.heap[++n.heap_len] = u < 2 ? ++u : 0,
        e[c * 2] = 1,
        n.depth[c] = 0,
        n.opt_len--,
        i && (n.static_len -= r[c * 2 + 1]);
    for (t.max_code = u,
    a = n.heap_len >> 1; a >= 1; a--)
        ar(n, e, a);
    c = o;
    do
        a = n.heap[1],
        n.heap[1] = n.heap[n.heap_len--],
        ar(n, e, 1),
        s = n.heap[1],
        n.heap[--n.heap_max] = a,
        n.heap[--n.heap_max] = s,
        e[c * 2] = e[a * 2] + e[s * 2],
        n.depth[c] = (n.depth[a] >= n.depth[s] ? n.depth[a] : n.depth[s]) + 1,
        e[a * 2 + 1] = e[s * 2 + 1] = c,
        n.heap[1] = c++,
        ar(n, e, 1);
    while (n.heap_len >= 2);
    n.heap[--n.heap_max] = n.heap[1],
    Ms(n, t),
    Xo(e, u, n.bl_count)
}
  , ro = (n, t, e) => {
    let r, i = -1, o, a = t[0 * 2 + 1], s = 0, u = 7, c = 4;
    for (a === 0 && (u = 138,
    c = 3),
    t[(e + 1) * 2 + 1] = 65535,
    r = 0; r <= e; r++)
        o = a,
        a = t[(r + 1) * 2 + 1],
        !(++s < u && o === a) && (s < c ? n.bl_tree[o * 2] += s : o !== 0 ? (o !== i && n.bl_tree[o * 2]++,
        n.bl_tree[Fo * 2]++) : s <= 10 ? n.bl_tree[jo * 2]++ : n.bl_tree[Vo * 2]++,
        s = 0,
        i = o,
        a === 0 ? (u = 138,
        c = 3) : o === a ? (u = 6,
        c = 3) : (u = 7,
        c = 4))
}
  , io = (n, t, e) => {
    let r, i = -1, o, a = t[0 * 2 + 1], s = 0, u = 7, c = 4;
    for (a === 0 && (u = 138,
    c = 3),
    r = 0; r <= e; r++)
        if (o = a,
        a = t[(r + 1) * 2 + 1],
        !(++s < u && o === a)) {
            if (s < c)
                do
                    _e(n, o, n.bl_tree);
                while (--s !== 0);
            else
                o !== 0 ? (o !== i && (_e(n, o, n.bl_tree),
                s--),
                _e(n, Fo, n.bl_tree),
                ne(n, s - 3, 2)) : s <= 10 ? (_e(n, jo, n.bl_tree),
                ne(n, s - 3, 3)) : (_e(n, Vo, n.bl_tree),
                ne(n, s - 11, 7));
            s = 0,
            i = o,
            a === 0 ? (u = 138,
            c = 3) : o === a ? (u = 6,
            c = 3) : (u = 7,
            c = 4)
        }
}
  , Zs = n => {
    let t;
    for (ro(n, n.dyn_ltree, n.l_desc.max_code),
    ro(n, n.dyn_dtree, n.d_desc.max_code),
    yr(n, n.bl_desc),
    t = Ir - 1; t >= 3 && n.bl_tree[Ko[t] * 2 + 1] === 0; t--)
        ;
    return n.opt_len += 3 * (t + 1) + 5 + 5 + 4,
    t
}
  , Fs = (n, t, e, r) => {
    let i;
    for (ne(n, t - 257, 5),
    ne(n, e - 1, 5),
    ne(n, r - 4, 4),
    i = 0; i < r; i++)
        ne(n, n.bl_tree[Ko[i] * 2 + 1], 3);
    io(n, n.dyn_ltree, t - 1),
    io(n, n.dyn_dtree, e - 1)
}
  , js = n => {
    let t = 4093624447, e;
    for (e = 0; e <= 31; e++,
    t >>>= 1)
        if (t & 1 && n.dyn_ltree[e * 2] !== 0)
            return 0;
    if (n.dyn_ltree[9 * 2] !== 0 || n.dyn_ltree[10 * 2] !== 0 || n.dyn_ltree[13 * 2] !== 0)
        return 1;
    for (e = 32; e < Dt; e++)
        if (n.dyn_ltree[e * 2] !== 0)
            return 1;
    return 0
}
  , oo = !1
  , Vs = n => {
    oo || ($s(),
    oo = !0),
    n.l_desc = new or(n.dyn_ltree,Ho),
    n.d_desc = new or(n.dyn_dtree,qo),
    n.bl_desc = new or(n.bl_tree,Go),
    n.bi_buf = 0,
    n.bi_valid = 0,
    Jo(n)
}
  , ea = (n, t, e, r) => {
    ne(n, (Os << 1) + (r ? 1 : 0), 3),
    Qo(n),
    It(n, e),
    It(n, ~e),
    e && n.pending_buf.set(n.window.subarray(t, t + e), n.pending),
    n.pending += e
}
  , Ks = n => {
    ne(n, $o << 1, 3),
    _e(n, Tr, xe),
    Us(n)
}
  , Hs = (n, t, e, r) => {
    let i, o, a = 0;
    n.level > 0 ? (n.strm.data_type === 2 && (n.strm.data_type = js(n)),
    yr(n, n.l_desc),
    yr(n, n.d_desc),
    a = Zs(n),
    i = n.opt_len + 3 + 7 >>> 3,
    o = n.static_len + 3 + 7 >>> 3,
    o <= i && (i = o)) : i = o = e + 5,
    e + 4 <= i && t !== -1 ? ea(n, t, e, r) : n.strategy === 4 || o === i ? (ne(n, ($o << 1) + (r ? 1 : 0), 3),
    no(n, xe, vt)) : (ne(n, (Ds << 1) + (r ? 1 : 0), 3),
    Fs(n, n.l_desc.max_code + 1, n.d_desc.max_code + 1, a + 1),
    no(n, n.dyn_ltree, n.dyn_dtree)),
    Jo(n),
    r && Qo(n)
}
  , qs = (n, t, e) => (n.pending_buf[n.sym_buf + n.sym_next++] = t,
n.pending_buf[n.sym_buf + n.sym_next++] = t >> 8,
n.pending_buf[n.sym_buf + n.sym_next++] = e,
t === 0 ? n.dyn_ltree[e * 2]++ : (n.matches++,
t--,
n.dyn_ltree[(St[e] + Dt + 1) * 2]++,
n.dyn_dtree[Wo(t) * 2]++),
n.sym_next === n.sym_end)
  , Gs = Vs
  , Ws = ea
  , Ys = Hs
  , Xs = qs
  , Js = Ks
  , Qs = {
    _tr_init: Gs,
    _tr_stored_block: Ws,
    _tr_flush_block: Ys,
    _tr_tally: Xs,
    _tr_align: Js
}
  , ec = (n, t, e, r) => {
    let i = n & 65535 | 0
      , o = n >>> 16 & 65535 | 0
      , a = 0;
    for (; e !== 0; ) {
        a = e > 2e3 ? 2e3 : e,
        e -= a;
        do
            i = i + t[r++] | 0,
            o = o + i | 0;
        while (--a);
        i %= 65521,
        o %= 65521
    }
    return i | o << 16 | 0
}
  , Tt = ec
  , tc = () => {
    let n, t = [];
    for (var e = 0; e < 256; e++) {
        n = e;
        for (var r = 0; r < 8; r++)
            n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
        t[e] = n
    }
    return t
}
  , nc = new Uint32Array(tc())
  , rc = (n, t, e, r) => {
    let i = nc
      , o = r + e;
    n ^= -1;
    for (let a = r; a < o; a++)
        n = n >>> 8 ^ i[(n ^ t[a]) & 255];
    return n ^ -1
}
  , K = rc
  , je = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
}
  , at = {
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
}
  , {_tr_init: ic, _tr_stored_block: mr, _tr_flush_block: oc, _tr_tally: De, _tr_align: ac} = Qs
  , {Z_NO_FLUSH: Ce, Z_PARTIAL_FLUSH: sc, Z_FULL_FLUSH: cc, Z_FINISH: se, Z_BLOCK: ao, Z_OK: G, Z_STREAM_END: so, Z_STREAM_ERROR: we, Z_DATA_ERROR: uc, Z_BUF_ERROR: sr, Z_DEFAULT_COMPRESSION: lc, Z_FILTERED: dc, Z_HUFFMAN_ONLY: ln, Z_RLE: fc, Z_FIXED: hc, Z_DEFAULT_STRATEGY: pc, Z_UNKNOWN: _c, Z_DEFLATED: mn} = at
  , wc = 9
  , gc = 15
  , yc = 8
  , mc = 29
  , bc = 256
  , br = bc + 1 + mc
  , vc = 30
  , Ec = 19
  , xc = 2 * br + 1
  , Ac = 15
  , P = 3
  , Oe = 258
  , ge = Oe + P + 1
  , kc = 32
  , rt = 42
  , Rr = 57
  , vr = 69
  , Er = 73
  , xr = 91
  , Ar = 103
  , Ze = 113
  , mt = 666
  , ee = 1
  , st = 2
  , Ve = 3
  , ct = 4
  , Sc = 3
  , Fe = (n, t) => (n.msg = je[t],
t)
  , co = n => n * 2 - (n > 4 ? 9 : 0)
  , Re = n => {
    let t = n.length;
    for (; --t >= 0; )
        n[t] = 0
}
  , Ic = n => {
    let t, e, r, i = n.w_size;
    t = n.hash_size,
    r = t;
    do
        e = n.head[--r],
        n.head[r] = e >= i ? e - i : 0;
    while (--t);
    t = i,
    r = t;
    do
        e = n.prev[--r],
        n.prev[r] = e >= i ? e - i : 0;
    while (--t)
}
  , Tc = (n, t, e) => (t << n.hash_shift ^ e) & n.hash_mask
  , ze = Tc
  , re = n => {
    let t = n.state
      , e = t.pending;
    e > n.avail_out && (e = n.avail_out),
    e !== 0 && (n.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + e), n.next_out),
    n.next_out += e,
    t.pending_out += e,
    n.total_out += e,
    n.avail_out -= e,
    t.pending -= e,
    t.pending === 0 && (t.pending_out = 0))
}
  , ie = (n, t) => {
    oc(n, n.block_start >= 0 ? n.block_start : -1, n.strstart - n.block_start, t),
    n.block_start = n.strstart,
    re(n.strm)
}
  , B = (n, t) => {
    n.pending_buf[n.pending++] = t
}
  , yt = (n, t) => {
    n.pending_buf[n.pending++] = t >>> 8 & 255,
    n.pending_buf[n.pending++] = t & 255
}
  , kr = (n, t, e, r) => {
    let i = n.avail_in;
    return i > r && (i = r),
    i === 0 ? 0 : (n.avail_in -= i,
    t.set(n.input.subarray(n.next_in, n.next_in + i), e),
    n.state.wrap === 1 ? n.adler = Tt(n.adler, t, i, e) : n.state.wrap === 2 && (n.adler = K(n.adler, t, i, e)),
    n.next_in += i,
    n.total_in += i,
    i)
}
  , ta = (n, t) => {
    let e = n.max_chain_length, r = n.strstart, i, o, a = n.prev_length, s = n.nice_match, u = n.strstart > n.w_size - ge ? n.strstart - (n.w_size - ge) : 0, c = n.window, l = n.w_mask, _ = n.prev, h = n.strstart + Oe, d = c[r + a - 1], p = c[r + a];
    n.prev_length >= n.good_match && (e >>= 2),
    s > n.lookahead && (s = n.lookahead);
    do
        if (i = t,
        !(c[i + a] !== p || c[i + a - 1] !== d || c[i] !== c[r] || c[++i] !== c[r + 1])) {
            r += 2,
            i++;
            do
                ;
            while (c[++r] === c[++i] && c[++r] === c[++i] && c[++r] === c[++i] && c[++r] === c[++i] && c[++r] === c[++i] && c[++r] === c[++i] && c[++r] === c[++i] && c[++r] === c[++i] && r < h);
            if (o = Oe - (h - r),
            r = h - Oe,
            o > a) {
                if (n.match_start = t,
                a = o,
                o >= s)
                    break;
                d = c[r + a - 1],
                p = c[r + a]
            }
        }
    while ((t = _[t & l]) > u && --e !== 0);
    return a <= n.lookahead ? a : n.lookahead
}
  , it = n => {
    let t = n.w_size, e, r, i;
    do {
        if (r = n.window_size - n.lookahead - n.strstart,
        n.strstart >= t + (t - ge) && (n.window.set(n.window.subarray(t, t + t - r), 0),
        n.match_start -= t,
        n.strstart -= t,
        n.block_start -= t,
        n.insert > n.strstart && (n.insert = n.strstart),
        Ic(n),
        r += t),
        n.strm.avail_in === 0)
            break;
        if (e = kr(n.strm, n.window, n.strstart + n.lookahead, r),
        n.lookahead += e,
        n.lookahead + n.insert >= P)
            for (i = n.strstart - n.insert,
            n.ins_h = n.window[i],
            n.ins_h = ze(n, n.ins_h, n.window[i + 1]); n.insert && (n.ins_h = ze(n, n.ins_h, n.window[i + P - 1]),
            n.prev[i & n.w_mask] = n.head[n.ins_h],
            n.head[n.ins_h] = i,
            i++,
            n.insert--,
            !(n.lookahead + n.insert < P)); )
                ;
    } while (n.lookahead < ge && n.strm.avail_in !== 0)
}
  , na = (n, t) => {
    let e = n.pending_buf_size - 5 > n.w_size ? n.w_size : n.pending_buf_size - 5, r, i, o, a = 0, s = n.strm.avail_in;
    do {
        if (r = 65535,
        o = n.bi_valid + 42 >> 3,
        n.strm.avail_out < o || (o = n.strm.avail_out - o,
        i = n.strstart - n.block_start,
        r > i + n.strm.avail_in && (r = i + n.strm.avail_in),
        r > o && (r = o),
        r < e && (r === 0 && t !== se || t === Ce || r !== i + n.strm.avail_in)))
            break;
        a = t === se && r === i + n.strm.avail_in ? 1 : 0,
        mr(n, 0, 0, a),
        n.pending_buf[n.pending - 4] = r,
        n.pending_buf[n.pending - 3] = r >> 8,
        n.pending_buf[n.pending - 2] = ~r,
        n.pending_buf[n.pending - 1] = ~r >> 8,
        re(n.strm),
        i && (i > r && (i = r),
        n.strm.output.set(n.window.subarray(n.block_start, n.block_start + i), n.strm.next_out),
        n.strm.next_out += i,
        n.strm.avail_out -= i,
        n.strm.total_out += i,
        n.block_start += i,
        r -= i),
        r && (kr(n.strm, n.strm.output, n.strm.next_out, r),
        n.strm.next_out += r,
        n.strm.avail_out -= r,
        n.strm.total_out += r)
    } while (a === 0);
    return s -= n.strm.avail_in,
    s && (s >= n.w_size ? (n.matches = 2,
    n.window.set(n.strm.input.subarray(n.strm.next_in - n.w_size, n.strm.next_in), 0),
    n.strstart = n.w_size,
    n.insert = n.strstart) : (n.window_size - n.strstart <= s && (n.strstart -= n.w_size,
    n.window.set(n.window.subarray(n.w_size, n.w_size + n.strstart), 0),
    n.matches < 2 && n.matches++,
    n.insert > n.strstart && (n.insert = n.strstart)),
    n.window.set(n.strm.input.subarray(n.strm.next_in - s, n.strm.next_in), n.strstart),
    n.strstart += s,
    n.insert += s > n.w_size - n.insert ? n.w_size - n.insert : s),
    n.block_start = n.strstart),
    n.high_water < n.strstart && (n.high_water = n.strstart),
    a ? ct : t !== Ce && t !== se && n.strm.avail_in === 0 && n.strstart === n.block_start ? st : (o = n.window_size - n.strstart,
    n.strm.avail_in > o && n.block_start >= n.w_size && (n.block_start -= n.w_size,
    n.strstart -= n.w_size,
    n.window.set(n.window.subarray(n.w_size, n.w_size + n.strstart), 0),
    n.matches < 2 && n.matches++,
    o += n.w_size,
    n.insert > n.strstart && (n.insert = n.strstart)),
    o > n.strm.avail_in && (o = n.strm.avail_in),
    o && (kr(n.strm, n.window, n.strstart, o),
    n.strstart += o,
    n.insert += o > n.w_size - n.insert ? n.w_size - n.insert : o),
    n.high_water < n.strstart && (n.high_water = n.strstart),
    o = n.bi_valid + 42 >> 3,
    o = n.pending_buf_size - o > 65535 ? 65535 : n.pending_buf_size - o,
    e = o > n.w_size ? n.w_size : o,
    i = n.strstart - n.block_start,
    (i >= e || (i || t === se) && t !== Ce && n.strm.avail_in === 0 && i <= o) && (r = i > o ? o : i,
    a = t === se && n.strm.avail_in === 0 && r === i ? 1 : 0,
    mr(n, n.block_start, r, a),
    n.block_start += r,
    re(n.strm)),
    a ? Ve : ee)
}
  , cr = (n, t) => {
    let e, r;
    for (; ; ) {
        if (n.lookahead < ge) {
            if (it(n),
            n.lookahead < ge && t === Ce)
                return ee;
            if (n.lookahead === 0)
                break
        }
        if (e = 0,
        n.lookahead >= P && (n.ins_h = ze(n, n.ins_h, n.window[n.strstart + P - 1]),
        e = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h],
        n.head[n.ins_h] = n.strstart),
        e !== 0 && n.strstart - e <= n.w_size - ge && (n.match_length = ta(n, e)),
        n.match_length >= P)
            if (r = De(n, n.strstart - n.match_start, n.match_length - P),
            n.lookahead -= n.match_length,
            n.match_length <= n.max_lazy_match && n.lookahead >= P) {
                n.match_length--;
                do
                    n.strstart++,
                    n.ins_h = ze(n, n.ins_h, n.window[n.strstart + P - 1]),
                    e = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h],
                    n.head[n.ins_h] = n.strstart;
                while (--n.match_length !== 0);
                n.strstart++
            } else
                n.strstart += n.match_length,
                n.match_length = 0,
                n.ins_h = n.window[n.strstart],
                n.ins_h = ze(n, n.ins_h, n.window[n.strstart + 1]);
        else
            r = De(n, 0, n.window[n.strstart]),
            n.lookahead--,
            n.strstart++;
        if (r && (ie(n, !1),
        n.strm.avail_out === 0))
            return ee
    }
    return n.insert = n.strstart < P - 1 ? n.strstart : P - 1,
    t === se ? (ie(n, !0),
    n.strm.avail_out === 0 ? Ve : ct) : n.sym_next && (ie(n, !1),
    n.strm.avail_out === 0) ? ee : st
}
  , et = (n, t) => {
    let e, r, i;
    for (; ; ) {
        if (n.lookahead < ge) {
            if (it(n),
            n.lookahead < ge && t === Ce)
                return ee;
            if (n.lookahead === 0)
                break
        }
        if (e = 0,
        n.lookahead >= P && (n.ins_h = ze(n, n.ins_h, n.window[n.strstart + P - 1]),
        e = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h],
        n.head[n.ins_h] = n.strstart),
        n.prev_length = n.match_length,
        n.prev_match = n.match_start,
        n.match_length = P - 1,
        e !== 0 && n.prev_length < n.max_lazy_match && n.strstart - e <= n.w_size - ge && (n.match_length = ta(n, e),
        n.match_length <= 5 && (n.strategy === dc || n.match_length === P && n.strstart - n.match_start > 4096) && (n.match_length = P - 1)),
        n.prev_length >= P && n.match_length <= n.prev_length) {
            i = n.strstart + n.lookahead - P,
            r = De(n, n.strstart - 1 - n.prev_match, n.prev_length - P),
            n.lookahead -= n.prev_length - 1,
            n.prev_length -= 2;
            do
                ++n.strstart <= i && (n.ins_h = ze(n, n.ins_h, n.window[n.strstart + P - 1]),
                e = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h],
                n.head[n.ins_h] = n.strstart);
            while (--n.prev_length !== 0);
            if (n.match_available = 0,
            n.match_length = P - 1,
            n.strstart++,
            r && (ie(n, !1),
            n.strm.avail_out === 0))
                return ee
        } else if (n.match_available) {
            if (r = De(n, 0, n.window[n.strstart - 1]),
            r && ie(n, !1),
            n.strstart++,
            n.lookahead--,
            n.strm.avail_out === 0)
                return ee
        } else
            n.match_available = 1,
            n.strstart++,
            n.lookahead--
    }
    return n.match_available && (r = De(n, 0, n.window[n.strstart - 1]),
    n.match_available = 0),
    n.insert = n.strstart < P - 1 ? n.strstart : P - 1,
    t === se ? (ie(n, !0),
    n.strm.avail_out === 0 ? Ve : ct) : n.sym_next && (ie(n, !1),
    n.strm.avail_out === 0) ? ee : st
}
  , Lc = (n, t) => {
    let e, r, i, o, a = n.window;
    for (; ; ) {
        if (n.lookahead <= Oe) {
            if (it(n),
            n.lookahead <= Oe && t === Ce)
                return ee;
            if (n.lookahead === 0)
                break
        }
        if (n.match_length = 0,
        n.lookahead >= P && n.strstart > 0 && (i = n.strstart - 1,
        r = a[i],
        r === a[++i] && r === a[++i] && r === a[++i])) {
            o = n.strstart + Oe;
            do
                ;
            while (r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && r === a[++i] && i < o);
            n.match_length = Oe - (o - i),
            n.match_length > n.lookahead && (n.match_length = n.lookahead)
        }
        if (n.match_length >= P ? (e = De(n, 1, n.match_length - P),
        n.lookahead -= n.match_length,
        n.strstart += n.match_length,
        n.match_length = 0) : (e = De(n, 0, n.window[n.strstart]),
        n.lookahead--,
        n.strstart++),
        e && (ie(n, !1),
        n.strm.avail_out === 0))
            return ee
    }
    return n.insert = 0,
    t === se ? (ie(n, !0),
    n.strm.avail_out === 0 ? Ve : ct) : n.sym_next && (ie(n, !1),
    n.strm.avail_out === 0) ? ee : st
}
  , Rc = (n, t) => {
    let e;
    for (; ; ) {
        if (n.lookahead === 0 && (it(n),
        n.lookahead === 0)) {
            if (t === Ce)
                return ee;
            break
        }
        if (n.match_length = 0,
        e = De(n, 0, n.window[n.strstart]),
        n.lookahead--,
        n.strstart++,
        e && (ie(n, !1),
        n.strm.avail_out === 0))
            return ee
    }
    return n.insert = 0,
    t === se ? (ie(n, !0),
    n.strm.avail_out === 0 ? Ve : ct) : n.sym_next && (ie(n, !1),
    n.strm.avail_out === 0) ? ee : st
}
;
function pe(n, t, e, r, i) {
    this.good_length = n,
    this.max_lazy = t,
    this.nice_length = e,
    this.max_chain = r,
    this.func = i
}
var bt = [new pe(0,0,0,0,na), new pe(4,4,8,4,cr), new pe(4,5,16,8,cr), new pe(4,6,32,32,cr), new pe(4,4,16,16,et), new pe(8,16,32,32,et), new pe(8,16,128,128,et), new pe(8,32,128,256,et), new pe(32,128,258,1024,et), new pe(32,258,258,4096,et)]
  , Oc = n => {
    n.window_size = 2 * n.w_size,
    Re(n.head),
    n.max_lazy_match = bt[n.level].max_lazy,
    n.good_match = bt[n.level].good_length,
    n.nice_match = bt[n.level].nice_length,
    n.max_chain_length = bt[n.level].max_chain,
    n.strstart = 0,
    n.block_start = 0,
    n.lookahead = 0,
    n.insert = 0,
    n.match_length = n.prev_length = P - 1,
    n.match_available = 0,
    n.ins_h = 0
}
;
function Dc() {
    this.strm = null,
    this.status = 0,
    this.pending_buf = null,
    this.pending_buf_size = 0,
    this.pending_out = 0,
    this.pending = 0,
    this.wrap = 0,
    this.gzhead = null,
    this.gzindex = 0,
    this.method = mn,
    this.last_flush = -1,
    this.w_size = 0,
    this.w_bits = 0,
    this.w_mask = 0,
    this.window = null,
    this.window_size = 0,
    this.prev = null,
    this.head = null,
    this.ins_h = 0,
    this.hash_size = 0,
    this.hash_bits = 0,
    this.hash_mask = 0,
    this.hash_shift = 0,
    this.block_start = 0,
    this.match_length = 0,
    this.prev_match = 0,
    this.match_available = 0,
    this.strstart = 0,
    this.match_start = 0,
    this.lookahead = 0,
    this.prev_length = 0,
    this.max_chain_length = 0,
    this.max_lazy_match = 0,
    this.level = 0,
    this.strategy = 0,
    this.good_match = 0,
    this.nice_match = 0,
    this.dyn_ltree = new Uint16Array(xc * 2),
    this.dyn_dtree = new Uint16Array((2 * vc + 1) * 2),
    this.bl_tree = new Uint16Array((2 * Ec + 1) * 2),
    Re(this.dyn_ltree),
    Re(this.dyn_dtree),
    Re(this.bl_tree),
    this.l_desc = null,
    this.d_desc = null,
    this.bl_desc = null,
    this.bl_count = new Uint16Array(Ac + 1),
    this.heap = new Uint16Array(2 * br + 1),
    Re(this.heap),
    this.heap_len = 0,
    this.heap_max = 0,
    this.depth = new Uint16Array(2 * br + 1),
    Re(this.depth),
    this.sym_buf = 0,
    this.lit_bufsize = 0,
    this.sym_next = 0,
    this.sym_end = 0,
    this.opt_len = 0,
    this.static_len = 0,
    this.matches = 0,
    this.insert = 0,
    this.bi_buf = 0,
    this.bi_valid = 0
}
var Ct = n => {
    if (!n)
        return 1;
    let t = n.state;
    return !t || t.strm !== n || t.status !== rt && t.status !== Rr && t.status !== vr && t.status !== Er && t.status !== xr && t.status !== Ar && t.status !== Ze && t.status !== mt ? 1 : 0
}
  , ra = n => {
    if (Ct(n))
        return Fe(n, we);
    n.total_in = n.total_out = 0,
    n.data_type = _c;
    let t = n.state;
    return t.pending = 0,
    t.pending_out = 0,
    t.wrap < 0 && (t.wrap = -t.wrap),
    t.status = t.wrap === 2 ? Rr : t.wrap ? rt : Ze,
    n.adler = t.wrap === 2 ? 0 : 1,
    t.last_flush = -2,
    ic(t),
    G
}
  , ia = n => {
    let t = ra(n);
    return t === G && Oc(n.state),
    t
}
  , Cc = (n, t) => Ct(n) || n.state.wrap !== 2 ? we : (n.state.gzhead = t,
G)
  , oa = (n, t, e, r, i, o) => {
    if (!n)
        return we;
    let a = 1;
    if (t === lc && (t = 6),
    r < 0 ? (a = 0,
    r = -r) : r > 15 && (a = 2,
    r -= 16),
    i < 1 || i > wc || e !== mn || r < 8 || r > 15 || t < 0 || t > 9 || o < 0 || o > hc || r === 8 && a !== 1)
        return Fe(n, we);
    r === 8 && (r = 9);
    let s = new Dc;
    return n.state = s,
    s.strm = n,
    s.status = rt,
    s.wrap = a,
    s.gzhead = null,
    s.w_bits = r,
    s.w_size = 1 << s.w_bits,
    s.w_mask = s.w_size - 1,
    s.hash_bits = i + 7,
    s.hash_size = 1 << s.hash_bits,
    s.hash_mask = s.hash_size - 1,
    s.hash_shift = ~~((s.hash_bits + P - 1) / P),
    s.window = new Uint8Array(s.w_size * 2),
    s.head = new Uint16Array(s.hash_size),
    s.prev = new Uint16Array(s.w_size),
    s.lit_bufsize = 1 << i + 6,
    s.pending_buf_size = s.lit_bufsize * 4,
    s.pending_buf = new Uint8Array(s.pending_buf_size),
    s.sym_buf = s.lit_bufsize,
    s.sym_end = (s.lit_bufsize - 1) * 3,
    s.level = t,
    s.strategy = o,
    s.method = e,
    ia(n)
}
  , zc = (n, t) => oa(n, t, mn, gc, yc, pc)
  , Pc = (n, t) => {
    if (Ct(n) || t > ao || t < 0)
        return n ? Fe(n, we) : we;
    let e = n.state;
    if (!n.output || n.avail_in !== 0 && !n.input || e.status === mt && t !== se)
        return Fe(n, n.avail_out === 0 ? sr : we);
    let r = e.last_flush;
    if (e.last_flush = t,
    e.pending !== 0) {
        if (re(n),
        n.avail_out === 0)
            return e.last_flush = -1,
            G
    } else if (n.avail_in === 0 && co(t) <= co(r) && t !== se)
        return Fe(n, sr);
    if (e.status === mt && n.avail_in !== 0)
        return Fe(n, sr);
    if (e.status === rt && e.wrap === 0 && (e.status = Ze),
    e.status === rt) {
        let i = mn + (e.w_bits - 8 << 4) << 8
          , o = -1;
        if (e.strategy >= ln || e.level < 2 ? o = 0 : e.level < 6 ? o = 1 : e.level === 6 ? o = 2 : o = 3,
        i |= o << 6,
        e.strstart !== 0 && (i |= kc),
        i += 31 - i % 31,
        yt(e, i),
        e.strstart !== 0 && (yt(e, n.adler >>> 16),
        yt(e, n.adler & 65535)),
        n.adler = 1,
        e.status = Ze,
        re(n),
        e.pending !== 0)
            return e.last_flush = -1,
            G
    }
    if (e.status === Rr) {
        if (n.adler = 0,
        B(e, 31),
        B(e, 139),
        B(e, 8),
        e.gzhead)
            B(e, (e.gzhead.text ? 1 : 0) + (e.gzhead.hcrc ? 2 : 0) + (e.gzhead.extra ? 4 : 0) + (e.gzhead.name ? 8 : 0) + (e.gzhead.comment ? 16 : 0)),
            B(e, e.gzhead.time & 255),
            B(e, e.gzhead.time >> 8 & 255),
            B(e, e.gzhead.time >> 16 & 255),
            B(e, e.gzhead.time >> 24 & 255),
            B(e, e.level === 9 ? 2 : e.strategy >= ln || e.level < 2 ? 4 : 0),
            B(e, e.gzhead.os & 255),
            e.gzhead.extra && e.gzhead.extra.length && (B(e, e.gzhead.extra.length & 255),
            B(e, e.gzhead.extra.length >> 8 & 255)),
            e.gzhead.hcrc && (n.adler = K(n.adler, e.pending_buf, e.pending, 0)),
            e.gzindex = 0,
            e.status = vr;
        else if (B(e, 0),
        B(e, 0),
        B(e, 0),
        B(e, 0),
        B(e, 0),
        B(e, e.level === 9 ? 2 : e.strategy >= ln || e.level < 2 ? 4 : 0),
        B(e, Sc),
        e.status = Ze,
        re(n),
        e.pending !== 0)
            return e.last_flush = -1,
            G
    }
    if (e.status === vr) {
        if (e.gzhead.extra) {
            let i = e.pending
              , o = (e.gzhead.extra.length & 65535) - e.gzindex;
            for (; e.pending + o > e.pending_buf_size; ) {
                let s = e.pending_buf_size - e.pending;
                if (e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex, e.gzindex + s), e.pending),
                e.pending = e.pending_buf_size,
                e.gzhead.hcrc && e.pending > i && (n.adler = K(n.adler, e.pending_buf, e.pending - i, i)),
                e.gzindex += s,
                re(n),
                e.pending !== 0)
                    return e.last_flush = -1,
                    G;
                i = 0,
                o -= s
            }
            let a = new Uint8Array(e.gzhead.extra);
            e.pending_buf.set(a.subarray(e.gzindex, e.gzindex + o), e.pending),
            e.pending += o,
            e.gzhead.hcrc && e.pending > i && (n.adler = K(n.adler, e.pending_buf, e.pending - i, i)),
            e.gzindex = 0
        }
        e.status = Er
    }
    if (e.status === Er) {
        if (e.gzhead.name) {
            let i = e.pending, o;
            do {
                if (e.pending === e.pending_buf_size) {
                    if (e.gzhead.hcrc && e.pending > i && (n.adler = K(n.adler, e.pending_buf, e.pending - i, i)),
                    re(n),
                    e.pending !== 0)
                        return e.last_flush = -1,
                        G;
                    i = 0
                }
                e.gzindex < e.gzhead.name.length ? o = e.gzhead.name.charCodeAt(e.gzindex++) & 255 : o = 0,
                B(e, o)
            } while (o !== 0);
            e.gzhead.hcrc && e.pending > i && (n.adler = K(n.adler, e.pending_buf, e.pending - i, i)),
            e.gzindex = 0
        }
        e.status = xr
    }
    if (e.status === xr) {
        if (e.gzhead.comment) {
            let i = e.pending, o;
            do {
                if (e.pending === e.pending_buf_size) {
                    if (e.gzhead.hcrc && e.pending > i && (n.adler = K(n.adler, e.pending_buf, e.pending - i, i)),
                    re(n),
                    e.pending !== 0)
                        return e.last_flush = -1,
                        G;
                    i = 0
                }
                e.gzindex < e.gzhead.comment.length ? o = e.gzhead.comment.charCodeAt(e.gzindex++) & 255 : o = 0,
                B(e, o)
            } while (o !== 0);
            e.gzhead.hcrc && e.pending > i && (n.adler = K(n.adler, e.pending_buf, e.pending - i, i))
        }
        e.status = Ar
    }
    if (e.status === Ar) {
        if (e.gzhead.hcrc) {
            if (e.pending + 2 > e.pending_buf_size && (re(n),
            e.pending !== 0))
                return e.last_flush = -1,
                G;
            B(e, n.adler & 255),
            B(e, n.adler >> 8 & 255),
            n.adler = 0
        }
        if (e.status = Ze,
        re(n),
        e.pending !== 0)
            return e.last_flush = -1,
            G
    }
    if (n.avail_in !== 0 || e.lookahead !== 0 || t !== Ce && e.status !== mt) {
        let i = e.level === 0 ? na(e, t) : e.strategy === ln ? Rc(e, t) : e.strategy === fc ? Lc(e, t) : bt[e.level].func(e, t);
        if ((i === Ve || i === ct) && (e.status = mt),
        i === ee || i === Ve)
            return n.avail_out === 0 && (e.last_flush = -1),
            G;
        if (i === st && (t === sc ? ac(e) : t !== ao && (mr(e, 0, 0, !1),
        t === cc && (Re(e.head),
        e.lookahead === 0 && (e.strstart = 0,
        e.block_start = 0,
        e.insert = 0))),
        re(n),
        n.avail_out === 0))
            return e.last_flush = -1,
            G
    }
    return t !== se ? G : e.wrap <= 0 ? so : (e.wrap === 2 ? (B(e, n.adler & 255),
    B(e, n.adler >> 8 & 255),
    B(e, n.adler >> 16 & 255),
    B(e, n.adler >> 24 & 255),
    B(e, n.total_in & 255),
    B(e, n.total_in >> 8 & 255),
    B(e, n.total_in >> 16 & 255),
    B(e, n.total_in >> 24 & 255)) : (yt(e, n.adler >>> 16),
    yt(e, n.adler & 65535)),
    re(n),
    e.wrap > 0 && (e.wrap = -e.wrap),
    e.pending !== 0 ? G : so)
}
  , Nc = n => {
    if (Ct(n))
        return we;
    let t = n.state.status;
    return n.state = null,
    t === Ze ? Fe(n, uc) : G
}
  , Bc = (n, t) => {
    let e = t.length;
    if (Ct(n))
        return we;
    let r = n.state
      , i = r.wrap;
    if (i === 2 || i === 1 && r.status !== rt || r.lookahead)
        return we;
    if (i === 1 && (n.adler = Tt(n.adler, t, e, 0)),
    r.wrap = 0,
    e >= r.w_size) {
        i === 0 && (Re(r.head),
        r.strstart = 0,
        r.block_start = 0,
        r.insert = 0);
        let u = new Uint8Array(r.w_size);
        u.set(t.subarray(e - r.w_size, e), 0),
        t = u,
        e = r.w_size
    }
    let o = n.avail_in
      , a = n.next_in
      , s = n.input;
    for (n.avail_in = e,
    n.next_in = 0,
    n.input = t,
    it(r); r.lookahead >= P; ) {
        let u = r.strstart
          , c = r.lookahead - (P - 1);
        do
            r.ins_h = ze(r, r.ins_h, r.window[u + P - 1]),
            r.prev[u & r.w_mask] = r.head[r.ins_h],
            r.head[r.ins_h] = u,
            u++;
        while (--c);
        r.strstart = u,
        r.lookahead = P - 1,
        it(r)
    }
    return r.strstart += r.lookahead,
    r.block_start = r.strstart,
    r.insert = r.lookahead,
    r.lookahead = 0,
    r.match_length = r.prev_length = P - 1,
    r.match_available = 0,
    n.next_in = a,
    n.input = s,
    n.avail_in = o,
    r.wrap = i,
    G
}
  , Uc = zc
  , Mc = oa
  , $c = ia
  , Zc = ra
  , Fc = Cc
  , jc = Pc
  , Vc = Nc
  , Kc = Bc
  , Hc = "pako deflate (from Nodeca project)"
  , Et = {
    deflateInit: Uc,
    deflateInit2: Mc,
    deflateReset: $c,
    deflateResetKeep: Zc,
    deflateSetHeader: Fc,
    deflate: jc,
    deflateEnd: Vc,
    deflateSetDictionary: Kc,
    deflateInfo: Hc
}
  , qc = (n, t) => Object.prototype.hasOwnProperty.call(n, t)
  , Gc = function(n) {
    let t = Array.prototype.slice.call(arguments, 1);
    for (; t.length; ) {
        let e = t.shift();
        if (e) {
            if (typeof e != "object")
                throw new TypeError(e + "must be non-object");
            for (let r in e)
                qc(e, r) && (n[r] = e[r])
        }
    }
    return n
}
  , Wc = n => {
    let t = 0;
    for (let r = 0, i = n.length; r < i; r++)
        t += n[r].length;
    let e = new Uint8Array(t);
    for (let r = 0, i = 0, o = n.length; r < o; r++) {
        let a = n[r];
        e.set(a, i),
        i += a.length
    }
    return e
}
  , bn = {
    assign: Gc,
    flattenChunks: Wc
}
  , aa = !0;
try {
    String.fromCharCode.apply(null, new Uint8Array(1))
} catch {
    aa = !1
}
var Lt = new Uint8Array(256);
for (let n = 0; n < 256; n++)
    Lt[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
Lt[254] = Lt[254] = 1;
var Yc = n => {
    if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
        return new TextEncoder().encode(n);
    let t, e, r, i, o, a = n.length, s = 0;
    for (i = 0; i < a; i++)
        e = n.charCodeAt(i),
        (e & 64512) === 55296 && i + 1 < a && (r = n.charCodeAt(i + 1),
        (r & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (r - 56320),
        i++)),
        s += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
    for (t = new Uint8Array(s),
    o = 0,
    i = 0; o < s; i++)
        e = n.charCodeAt(i),
        (e & 64512) === 55296 && i + 1 < a && (r = n.charCodeAt(i + 1),
        (r & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (r - 56320),
        i++)),
        e < 128 ? t[o++] = e : e < 2048 ? (t[o++] = 192 | e >>> 6,
        t[o++] = 128 | e & 63) : e < 65536 ? (t[o++] = 224 | e >>> 12,
        t[o++] = 128 | e >>> 6 & 63,
        t[o++] = 128 | e & 63) : (t[o++] = 240 | e >>> 18,
        t[o++] = 128 | e >>> 12 & 63,
        t[o++] = 128 | e >>> 6 & 63,
        t[o++] = 128 | e & 63);
    return t
}
  , Xc = (n, t) => {
    if (t < 65534 && n.subarray && aa)
        return String.fromCharCode.apply(null, n.length === t ? n : n.subarray(0, t));
    let e = "";
    for (let r = 0; r < t; r++)
        e += String.fromCharCode(n[r]);
    return e
}
  , Jc = (n, t) => {
    let e = t || n.length;
    if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
        return new TextDecoder().decode(n.subarray(0, t));
    let r, i, o = new Array(e * 2);
    for (i = 0,
    r = 0; r < e; ) {
        let a = n[r++];
        if (a < 128) {
            o[i++] = a;
            continue
        }
        let s = Lt[a];
        if (s > 4) {
            o[i++] = 65533,
            r += s - 1;
            continue
        }
        for (a &= s === 2 ? 31 : s === 3 ? 15 : 7; s > 1 && r < e; )
            a = a << 6 | n[r++] & 63,
            s--;
        if (s > 1) {
            o[i++] = 65533;
            continue
        }
        a < 65536 ? o[i++] = a : (a -= 65536,
        o[i++] = 55296 | a >> 10 & 1023,
        o[i++] = 56320 | a & 1023)
    }
    return Xc(o, i)
}
  , Qc = (n, t) => {
    t = t || n.length,
    t > n.length && (t = n.length);
    let e = t - 1;
    for (; e >= 0 && (n[e] & 192) === 128; )
        e--;
    return e < 0 || e === 0 ? t : e + Lt[n[e]] > t ? e : t
}
  , Rt = {
    string2buf: Yc,
    buf2string: Jc,
    utf8border: Qc
};
function eu() {
    this.input = null,
    this.next_in = 0,
    this.avail_in = 0,
    this.total_in = 0,
    this.output = null,
    this.next_out = 0,
    this.avail_out = 0,
    this.total_out = 0,
    this.msg = "",
    this.state = null,
    this.data_type = 2,
    this.adler = 0
}
var sa = eu
  , ca = Object.prototype.toString
  , {Z_NO_FLUSH: tu, Z_SYNC_FLUSH: nu, Z_FULL_FLUSH: ru, Z_FINISH: iu, Z_OK: gn, Z_STREAM_END: ou, Z_DEFAULT_COMPRESSION: au, Z_DEFAULT_STRATEGY: su, Z_DEFLATED: cu} = at;
function zt(n) {
    this.options = bn.assign({
        level: au,
        method: cu,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: su
    }, n || {});
    let t = this.options;
    t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
    this.err = 0,
    this.msg = "",
    this.ended = !1,
    this.chunks = [],
    this.strm = new sa,
    this.strm.avail_out = 0;
    let e = Et.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
    if (e !== gn)
        throw new Error(je[e]);
    if (t.header && Et.deflateSetHeader(this.strm, t.header),
    t.dictionary) {
        let r;
        if (typeof t.dictionary == "string" ? r = Rt.string2buf(t.dictionary) : ca.call(t.dictionary) === "[object ArrayBuffer]" ? r = new Uint8Array(t.dictionary) : r = t.dictionary,
        e = Et.deflateSetDictionary(this.strm, r),
        e !== gn)
            throw new Error(je[e]);
        this._dict_set = !0
    }
}
zt.prototype.push = function(n, t) {
    let e = this.strm, r = this.options.chunkSize, i, o;
    if (this.ended)
        return !1;
    for (t === ~~t ? o = t : o = t === !0 ? iu : tu,
    typeof n == "string" ? e.input = Rt.string2buf(n) : ca.call(n) === "[object ArrayBuffer]" ? e.input = new Uint8Array(n) : e.input = n,
    e.next_in = 0,
    e.avail_in = e.input.length; ; ) {
        if (e.avail_out === 0 && (e.output = new Uint8Array(r),
        e.next_out = 0,
        e.avail_out = r),
        (o === nu || o === ru) && e.avail_out <= 6) {
            this.onData(e.output.subarray(0, e.next_out)),
            e.avail_out = 0;
            continue
        }
        if (i = Et.deflate(e, o),
        i === ou)
            return e.next_out > 0 && this.onData(e.output.subarray(0, e.next_out)),
            i = Et.deflateEnd(this.strm),
            this.onEnd(i),
            this.ended = !0,
            i === gn;
        if (e.avail_out === 0) {
            this.onData(e.output);
            continue
        }
        if (o > 0 && e.next_out > 0) {
            this.onData(e.output.subarray(0, e.next_out)),
            e.avail_out = 0;
            continue
        }
        if (e.avail_in === 0)
            break
    }
    return !0
}
;
zt.prototype.onData = function(n) {
    this.chunks.push(n)
}
;
zt.prototype.onEnd = function(n) {
    n === gn && (this.result = bn.flattenChunks(this.chunks)),
    this.chunks = [],
    this.err = n,
    this.msg = this.strm.msg
}
;
function Or(n, t) {
    let e = new zt(t);
    if (e.push(n, !0),
    e.err)
        throw e.msg || je[e.err];
    return e.result
}
function uu(n, t) {
    return t = t || {},
    t.raw = !0,
    Or(n, t)
}
function lu(n, t) {
    return t = t || {},
    t.gzip = !0,
    Or(n, t)
}
var du = zt
  , fu = Or
  , hu = uu
  , pu = lu
  , _u = at
  , wu = {
    Deflate: du,
    deflate: fu,
    deflateRaw: hu,
    gzip: pu,
    constants: _u
}
  , dn = 16209
  , gu = 16191
  , yu = function(t, e) {
    let r, i, o, a, s, u, c, l, _, h, d, p, b, E, S, O, L, g, R, F, x, z, C, T, I = t.state;
    r = t.next_in,
    C = t.input,
    i = r + (t.avail_in - 5),
    o = t.next_out,
    T = t.output,
    a = o - (e - t.avail_out),
    s = o + (t.avail_out - 257),
    u = I.dmax,
    c = I.wsize,
    l = I.whave,
    _ = I.wnext,
    h = I.window,
    d = I.hold,
    p = I.bits,
    b = I.lencode,
    E = I.distcode,
    S = (1 << I.lenbits) - 1,
    O = (1 << I.distbits) - 1;
    e: do {
        p < 15 && (d += C[r++] << p,
        p += 8,
        d += C[r++] << p,
        p += 8),
        L = b[d & S];
        t: for (; ; ) {
            if (g = L >>> 24,
            d >>>= g,
            p -= g,
            g = L >>> 16 & 255,
            g === 0)
                T[o++] = L & 65535;
            else if (g & 16) {
                R = L & 65535,
                g &= 15,
                g && (p < g && (d += C[r++] << p,
                p += 8),
                R += d & (1 << g) - 1,
                d >>>= g,
                p -= g),
                p < 15 && (d += C[r++] << p,
                p += 8,
                d += C[r++] << p,
                p += 8),
                L = E[d & O];
                n: for (; ; ) {
                    if (g = L >>> 24,
                    d >>>= g,
                    p -= g,
                    g = L >>> 16 & 255,
                    g & 16) {
                        if (F = L & 65535,
                        g &= 15,
                        p < g && (d += C[r++] << p,
                        p += 8,
                        p < g && (d += C[r++] << p,
                        p += 8)),
                        F += d & (1 << g) - 1,
                        F > u) {
                            t.msg = "invalid distance too far back",
                            I.mode = dn;
                            break e
                        }
                        if (d >>>= g,
                        p -= g,
                        g = o - a,
                        F > g) {
                            if (g = F - g,
                            g > l && I.sane) {
                                t.msg = "invalid distance too far back",
                                I.mode = dn;
                                break e
                            }
                            if (x = 0,
                            z = h,
                            _ === 0) {
                                if (x += c - g,
                                g < R) {
                                    R -= g;
                                    do
                                        T[o++] = h[x++];
                                    while (--g);
                                    x = o - F,
                                    z = T
                                }
                            } else if (_ < g) {
                                if (x += c + _ - g,
                                g -= _,
                                g < R) {
                                    R -= g;
                                    do
                                        T[o++] = h[x++];
                                    while (--g);
                                    if (x = 0,
                                    _ < R) {
                                        g = _,
                                        R -= g;
                                        do
                                            T[o++] = h[x++];
                                        while (--g);
                                        x = o - F,
                                        z = T
                                    }
                                }
                            } else if (x += _ - g,
                            g < R) {
                                R -= g;
                                do
                                    T[o++] = h[x++];
                                while (--g);
                                x = o - F,
                                z = T
                            }
                            for (; R > 2; )
                                T[o++] = z[x++],
                                T[o++] = z[x++],
                                T[o++] = z[x++],
                                R -= 3;
                            R && (T[o++] = z[x++],
                            R > 1 && (T[o++] = z[x++]))
                        } else {
                            x = o - F;
                            do
                                T[o++] = T[x++],
                                T[o++] = T[x++],
                                T[o++] = T[x++],
                                R -= 3;
                            while (R > 2);
                            R && (T[o++] = T[x++],
                            R > 1 && (T[o++] = T[x++]))
                        }
                    } else if (g & 64) {
                        t.msg = "invalid distance code",
                        I.mode = dn;
                        break e
                    } else {
                        L = E[(L & 65535) + (d & (1 << g) - 1)];
                        continue n
                    }
                    break
                }
            } else if (g & 64)
                if (g & 32) {
                    I.mode = gu;
                    break e
                } else {
                    t.msg = "invalid literal/length code",
                    I.mode = dn;
                    break e
                }
            else {
                L = b[(L & 65535) + (d & (1 << g) - 1)];
                continue t
            }
            break
        }
    } while (r < i && o < s);
    R = p >> 3,
    r -= R,
    p -= R << 3,
    d &= (1 << p) - 1,
    t.next_in = r,
    t.next_out = o,
    t.avail_in = r < i ? 5 + (i - r) : 5 - (r - i),
    t.avail_out = o < s ? 257 + (s - o) : 257 - (o - s),
    I.hold = d,
    I.bits = p
}
  , tt = 15
  , uo = 852
  , lo = 592
  , fo = 0
  , ur = 1
  , ho = 2
  , mu = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0])
  , bu = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78])
  , vu = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0])
  , Eu = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64])
  , xu = (n, t, e, r, i, o, a, s) => {
    let u = s.bits, c = 0, l = 0, _ = 0, h = 0, d = 0, p = 0, b = 0, E = 0, S = 0, O = 0, L, g, R, F, x, z = null, C, T = new Uint16Array(tt + 1), I = new Uint16Array(tt + 1), me = null, Xe, f, w;
    for (c = 0; c <= tt; c++)
        T[c] = 0;
    for (l = 0; l < r; l++)
        T[t[e + l]]++;
    for (d = u,
    h = tt; h >= 1 && T[h] === 0; h--)
        ;
    if (d > h && (d = h),
    h === 0)
        return i[o++] = 1 << 24 | 64 << 16 | 0,
        i[o++] = 1 << 24 | 64 << 16 | 0,
        s.bits = 1,
        0;
    for (_ = 1; _ < h && T[_] === 0; _++)
        ;
    for (d < _ && (d = _),
    E = 1,
    c = 1; c <= tt; c++)
        if (E <<= 1,
        E -= T[c],
        E < 0)
            return -1;
    if (E > 0 && (n === fo || h !== 1))
        return -1;
    for (I[1] = 0,
    c = 1; c < tt; c++)
        I[c + 1] = I[c] + T[c];
    for (l = 0; l < r; l++)
        t[e + l] !== 0 && (a[I[t[e + l]]++] = l);
    if (n === fo ? (z = me = a,
    C = 20) : n === ur ? (z = mu,
    me = bu,
    C = 257) : (z = vu,
    me = Eu,
    C = 0),
    O = 0,
    l = 0,
    c = _,
    x = o,
    p = d,
    b = 0,
    R = -1,
    S = 1 << d,
    F = S - 1,
    n === ur && S > uo || n === ho && S > lo)
        return 1;
    for (; ; ) {
        Xe = c - b,
        a[l] + 1 < C ? (f = 0,
        w = a[l]) : a[l] >= C ? (f = me[a[l] - C],
        w = z[a[l] - C]) : (f = 96,
        w = 0),
        L = 1 << c - b,
        g = 1 << p,
        _ = g;
        do
            g -= L,
            i[x + (O >> b) + g] = Xe << 24 | f << 16 | w | 0;
        while (g !== 0);
        for (L = 1 << c - 1; O & L; )
            L >>= 1;
        if (L !== 0 ? (O &= L - 1,
        O += L) : O = 0,
        l++,
        --T[c] === 0) {
            if (c === h)
                break;
            c = t[e + a[l]]
        }
        if (c > d && (O & F) !== R) {
            for (b === 0 && (b = d),
            x += _,
            p = c - b,
            E = 1 << p; p + b < h && (E -= T[p + b],
            !(E <= 0)); )
                p++,
                E <<= 1;
            if (S += 1 << p,
            n === ur && S > uo || n === ho && S > lo)
                return 1;
            R = O & F,
            i[R] = d << 24 | p << 16 | x - o | 0
        }
    }
    return O !== 0 && (i[x + O] = c - b << 24 | 64 << 16 | 0),
    s.bits = d,
    0
}
  , xt = xu
  , Au = 0
  , ua = 1
  , la = 2
  , {Z_FINISH: po, Z_BLOCK: ku, Z_TREES: fn, Z_OK: Ke, Z_STREAM_END: Su, Z_NEED_DICT: Iu, Z_STREAM_ERROR: ce, Z_DATA_ERROR: da, Z_MEM_ERROR: fa, Z_BUF_ERROR: Tu, Z_DEFLATED: _o} = at
  , vn = 16180
  , wo = 16181
  , go = 16182
  , yo = 16183
  , mo = 16184
  , bo = 16185
  , vo = 16186
  , Eo = 16187
  , xo = 16188
  , Ao = 16189
  , yn = 16190
  , Ee = 16191
  , lr = 16192
  , ko = 16193
  , dr = 16194
  , So = 16195
  , Io = 16196
  , To = 16197
  , Lo = 16198
  , hn = 16199
  , pn = 16200
  , Ro = 16201
  , Oo = 16202
  , Do = 16203
  , Co = 16204
  , zo = 16205
  , fr = 16206
  , Po = 16207
  , No = 16208
  , Z = 16209
  , ha = 16210
  , pa = 16211
  , Lu = 852
  , Ru = 592
  , Ou = 15
  , Du = Ou
  , Bo = n => (n >>> 24 & 255) + (n >>> 8 & 65280) + ((n & 65280) << 8) + ((n & 255) << 24);
function Cu() {
    this.strm = null,
    this.mode = 0,
    this.last = !1,
    this.wrap = 0,
    this.havedict = !1,
    this.flags = 0,
    this.dmax = 0,
    this.check = 0,
    this.total = 0,
    this.head = null,
    this.wbits = 0,
    this.wsize = 0,
    this.whave = 0,
    this.wnext = 0,
    this.window = null,
    this.hold = 0,
    this.bits = 0,
    this.length = 0,
    this.offset = 0,
    this.extra = 0,
    this.lencode = null,
    this.distcode = null,
    this.lenbits = 0,
    this.distbits = 0,
    this.ncode = 0,
    this.nlen = 0,
    this.ndist = 0,
    this.have = 0,
    this.next = null,
    this.lens = new Uint16Array(320),
    this.work = new Uint16Array(288),
    this.lendyn = null,
    this.distdyn = null,
    this.sane = 0,
    this.back = 0,
    this.was = 0
}
var He = n => {
    if (!n)
        return 1;
    let t = n.state;
    return !t || t.strm !== n || t.mode < vn || t.mode > pa ? 1 : 0
}
, _a = n => {
    if (He(n))
        return ce;
    let t = n.state;
    return n.total_in = n.total_out = t.total = 0,
    n.msg = "",
    t.wrap && (n.adler = t.wrap & 1),
    t.mode = vn,
    t.last = 0,
    t.havedict = 0,
    t.flags = -1,
    t.dmax = 32768,
    t.head = null,
    t.hold = 0,
    t.bits = 0,
    t.lencode = t.lendyn = new Int32Array(Lu),
    t.distcode = t.distdyn = new Int32Array(Ru),
    t.sane = 1,
    t.back = -1,
    Ke
}
, wa = n => {
    if (He(n))
        return ce;
    let t = n.state;
    return t.wsize = 0,
    t.whave = 0,
    t.wnext = 0,
    _a(n)
}
, ga = (n, t) => {
    let e;
    if (He(n))
        return ce;
    let r = n.state;
    return t < 0 ? (e = 0,
    t = -t) : (e = (t >> 4) + 5,
    t < 48 && (t &= 15)),
    t && (t < 8 || t > 15) ? ce : (r.window !== null && r.wbits !== t && (r.window = null),
    r.wrap = e,
    r.wbits = t,
    wa(n))
}
, ya = (n, t) => {
    if (!n)
        return ce;
    let e = new Cu;
    n.state = e,
    e.strm = n,
    e.window = null,
    e.mode = vn;
    let r = ga(n, t);
    return r !== Ke && (n.state = null),
    r
}
, zu = n => ya(n, Du), Uo = !0, hr, pr, Pu = n => {
    if (Uo) {
        hr = new Int32Array(512),
        pr = new Int32Array(32);
        let t = 0;
        for (; t < 144; )
            n.lens[t++] = 8;
        for (; t < 256; )
            n.lens[t++] = 9;
        for (; t < 280; )
            n.lens[t++] = 7;
        for (; t < 288; )
            n.lens[t++] = 8;
        for (xt(ua, n.lens, 0, 288, hr, 0, n.work, {
            bits: 9
        }),
        t = 0; t < 32; )
            n.lens[t++] = 5;
        xt(la, n.lens, 0, 32, pr, 0, n.work, {
            bits: 5
        }),
        Uo = !1
    }
    n.lencode = hr,
    n.lenbits = 9,
    n.distcode = pr,
    n.distbits = 5
}
, ma = (n, t, e, r) => {
    let i, o = n.state;
    return o.window === null && (o.wsize = 1 << o.wbits,
    o.wnext = 0,
    o.whave = 0,
    o.window = new Uint8Array(o.wsize)),
    r >= o.wsize ? (o.window.set(t.subarray(e - o.wsize, e), 0),
    o.wnext = 0,
    o.whave = o.wsize) : (i = o.wsize - o.wnext,
    i > r && (i = r),
    o.window.set(t.subarray(e - r, e - r + i), o.wnext),
    r -= i,
    r ? (o.window.set(t.subarray(e - r, e), 0),
    o.wnext = r,
    o.whave = o.wsize) : (o.wnext += i,
    o.wnext === o.wsize && (o.wnext = 0),
    o.whave < o.wsize && (o.whave += i))),
    0
}
, Nu = (n, t) => {
    let e, r, i, o, a, s, u, c, l, _, h, d, p, b, E = 0, S, O, L, g, R, F, x, z, C = new Uint8Array(4), T, I, me = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    if (He(n) || !n.output || !n.input && n.avail_in !== 0)
        return ce;
    e = n.state,
    e.mode === Ee && (e.mode = lr),
    a = n.next_out,
    i = n.output,
    u = n.avail_out,
    o = n.next_in,
    r = n.input,
    s = n.avail_in,
    c = e.hold,
    l = e.bits,
    _ = s,
    h = u,
    z = Ke;
    e: for (; ; )
        switch (e.mode) {
        case vn:
            if (e.wrap === 0) {
                e.mode = lr;
                break
            }
            for (; l < 16; ) {
                if (s === 0)
                    break e;
                s--,
                c += r[o++] << l,
                l += 8
            }
            if (e.wrap & 2 && c === 35615) {
                e.wbits === 0 && (e.wbits = 15),
                e.check = 0,
                C[0] = c & 255,
                C[1] = c >>> 8 & 255,
                e.check = K(e.check, C, 2, 0),
                c = 0,
                l = 0,
                e.mode = wo;
                break
            }
            if (e.head && (e.head.done = !1),
            !(e.wrap & 1) || (((c & 255) << 8) + (c >> 8)) % 31) {
                n.msg = "incorrect header check",
                e.mode = Z;
                break
            }
            if ((c & 15) !== _o) {
                n.msg = "unknown compression method",
                e.mode = Z;
                break
            }
            if (c >>>= 4,
            l -= 4,
            x = (c & 15) + 8,
            e.wbits === 0 && (e.wbits = x),
            x > 15 || x > e.wbits) {
                n.msg = "invalid window size",
                e.mode = Z;
                break
            }
            e.dmax = 1 << e.wbits,
            e.flags = 0,
            n.adler = e.check = 1,
            e.mode = c & 512 ? Ao : Ee,
            c = 0,
            l = 0;
            break;
        case wo:
            for (; l < 16; ) {
                if (s === 0)
                    break e;
                s--,
                c += r[o++] << l,
                l += 8
            }
            if (e.flags = c,
            (e.flags & 255) !== _o) {
                n.msg = "unknown compression method",
                e.mode = Z;
                break
            }
            if (e.flags & 57344) {
                n.msg = "unknown header flags set",
                e.mode = Z;
                break
            }
            e.head && (e.head.text = c >> 8 & 1),
            e.flags & 512 && e.wrap & 4 && (C[0] = c & 255,
            C[1] = c >>> 8 & 255,
            e.check = K(e.check, C, 2, 0)),
            c = 0,
            l = 0,
            e.mode = go;
        case go:
            for (; l < 32; ) {
                if (s === 0)
                    break e;
                s--,
                c += r[o++] << l,
                l += 8
            }
            e.head && (e.head.time = c),
            e.flags & 512 && e.wrap & 4 && (C[0] = c & 255,
            C[1] = c >>> 8 & 255,
            C[2] = c >>> 16 & 255,
            C[3] = c >>> 24 & 255,
            e.check = K(e.check, C, 4, 0)),
            c = 0,
            l = 0,
            e.mode = yo;
        case yo:
            for (; l < 16; ) {
                if (s === 0)
                    break e;
                s--,
                c += r[o++] << l,
                l += 8
            }
            e.head && (e.head.xflags = c & 255,
            e.head.os = c >> 8),
            e.flags & 512 && e.wrap & 4 && (C[0] = c & 255,
            C[1] = c >>> 8 & 255,
            e.check = K(e.check, C, 2, 0)),
            c = 0,
            l = 0,
            e.mode = mo;
        case mo:
            if (e.flags & 1024) {
                for (; l < 16; ) {
                    if (s === 0)
                        break e;
                    s--,
                    c += r[o++] << l,
                    l += 8
                }
                e.length = c,
                e.head && (e.head.extra_len = c),
                e.flags & 512 && e.wrap & 4 && (C[0] = c & 255,
                C[1] = c >>> 8 & 255,
                e.check = K(e.check, C, 2, 0)),
                c = 0,
                l = 0
            } else
                e.head && (e.head.extra = null);
            e.mode = bo;
        case bo:
            if (e.flags & 1024 && (d = e.length,
            d > s && (d = s),
            d && (e.head && (x = e.head.extra_len - e.length,
            e.head.extra || (e.head.extra = new Uint8Array(e.head.extra_len)),
            e.head.extra.set(r.subarray(o, o + d), x)),
            e.flags & 512 && e.wrap & 4 && (e.check = K(e.check, r, d, o)),
            s -= d,
            o += d,
            e.length -= d),
            e.length))
                break e;
            e.length = 0,
            e.mode = vo;
        case vo:
            if (e.flags & 2048) {
                if (s === 0)
                    break e;
                d = 0;
                do
                    x = r[o + d++],
                    e.head && x && e.length < 65536 && (e.head.name += String.fromCharCode(x));
                while (x && d < s);
                if (e.flags & 512 && e.wrap & 4 && (e.check = K(e.check, r, d, o)),
                s -= d,
                o += d,
                x)
                    break e
            } else
                e.head && (e.head.name = null);
            e.length = 0,
            e.mode = Eo;
        case Eo:
            if (e.flags & 4096) {
                if (s === 0)
                    break e;
                d = 0;
                do
                    x = r[o + d++],
                    e.head && x && e.length < 65536 && (e.head.comment += String.fromCharCode(x));
                while (x && d < s);
                if (e.flags & 512 && e.wrap & 4 && (e.check = K(e.check, r, d, o)),
                s -= d,
                o += d,
                x)
                    break e
            } else
                e.head && (e.head.comment = null);
            e.mode = xo;
        case xo:
            if (e.flags & 512) {
                for (; l < 16; ) {
                    if (s === 0)
                        break e;
                    s--,
                    c += r[o++] << l,
                    l += 8
                }
                if (e.wrap & 4 && c !== (e.check & 65535)) {
                    n.msg = "header crc mismatch",
                    e.mode = Z;
                    break
                }
                c = 0,
                l = 0
            }
            e.head && (e.head.hcrc = e.flags >> 9 & 1,
            e.head.done = !0),
            n.adler = e.check = 0,
            e.mode = Ee;
            break;
        case Ao:
            for (; l < 32; ) {
                if (s === 0)
                    break e;
                s--,
                c += r[o++] << l,
                l += 8
            }
            n.adler = e.check = Bo(c),
            c = 0,
            l = 0,
            e.mode = yn;
        case yn:
            if (e.havedict === 0)
                return n.next_out = a,
                n.avail_out = u,
                n.next_in = o,
                n.avail_in = s,
                e.hold = c,
                e.bits = l,
                Iu;
            n.adler = e.check = 1,
            e.mode = Ee;
        case Ee:
            if (t === ku || t === fn)
                break e;
        case lr:
            if (e.last) {
                c >>>= l & 7,
                l -= l & 7,
                e.mode = fr;
                break
            }
            for (; l < 3; ) {
                if (s === 0)
                    break e;
                s--,
                c += r[o++] << l,
                l += 8
            }
            switch (e.last = c & 1,
            c >>>= 1,
            l -= 1,
            c & 3) {
            case 0:
                e.mode = ko;
                break;
            case 1:
                if (Pu(e),
                e.mode = hn,
                t === fn) {
                    c >>>= 2,
                    l -= 2;
                    break e
                }
                break;
            case 2:
                e.mode = Io;
                break;
            case 3:
                n.msg = "invalid block type",
                e.mode = Z
            }
            c >>>= 2,
            l -= 2;
            break;
        case ko:
            for (c >>>= l & 7,
            l -= l & 7; l < 32; ) {
                if (s === 0)
                    break e;
                s--,
                c += r[o++] << l,
                l += 8
            }
            if ((c & 65535) !== (c >>> 16 ^ 65535)) {
                n.msg = "invalid stored block lengths",
                e.mode = Z;
                break
            }
            if (e.length = c & 65535,
            c = 0,
            l = 0,
            e.mode = dr,
            t === fn)
                break e;
        case dr:
            e.mode = So;
        case So:
            if (d = e.length,
            d) {
                if (d > s && (d = s),
                d > u && (d = u),
                d === 0)
                    break e;
                i.set(r.subarray(o, o + d), a),
                s -= d,
                o += d,
                u -= d,
                a += d,
                e.length -= d;
                break
            }
            e.mode = Ee;
            break;
        case Io:
            for (; l < 14; ) {
                if (s === 0)
                    break e;
                s--,
                c += r[o++] << l,
                l += 8
            }
            if (e.nlen = (c & 31) + 257,
            c >>>= 5,
            l -= 5,
            e.ndist = (c & 31) + 1,
            c >>>= 5,
            l -= 5,
            e.ncode = (c & 15) + 4,
            c >>>= 4,
            l -= 4,
            e.nlen > 286 || e.ndist > 30) {
                n.msg = "too many length or distance symbols",
                e.mode = Z;
                break
            }
            e.have = 0,
            e.mode = To;
        case To:
            for (; e.have < e.ncode; ) {
                for (; l < 3; ) {
                    if (s === 0)
                        break e;
                    s--,
                    c += r[o++] << l,
                    l += 8
                }
                e.lens[me[e.have++]] = c & 7,
                c >>>= 3,
                l -= 3
            }
            for (; e.have < 19; )
                e.lens[me[e.have++]] = 0;
            if (e.lencode = e.lendyn,
            e.lenbits = 7,
            T = {
                bits: e.lenbits
            },
            z = xt(Au, e.lens, 0, 19, e.lencode, 0, e.work, T),
            e.lenbits = T.bits,
            z) {
                n.msg = "invalid code lengths set",
                e.mode = Z;
                break
            }
            e.have = 0,
            e.mode = Lo;
        case Lo:
            for (; e.have < e.nlen + e.ndist; ) {
                for (; E = e.lencode[c & (1 << e.lenbits) - 1],
                S = E >>> 24,
                O = E >>> 16 & 255,
                L = E & 65535,
                !(S <= l); ) {
                    if (s === 0)
                        break e;
                    s--,
                    c += r[o++] << l,
                    l += 8
                }
                if (L < 16)
                    c >>>= S,
                    l -= S,
                    e.lens[e.have++] = L;
                else {
                    if (L === 16) {
                        for (I = S + 2; l < I; ) {
                            if (s === 0)
                                break e;
                            s--,
                            c += r[o++] << l,
                            l += 8
                        }
                        if (c >>>= S,
                        l -= S,
                        e.have === 0) {
                            n.msg = "invalid bit length repeat",
                            e.mode = Z;
                            break
                        }
                        x = e.lens[e.have - 1],
                        d = 3 + (c & 3),
                        c >>>= 2,
                        l -= 2
                    } else if (L === 17) {
                        for (I = S + 3; l < I; ) {
                            if (s === 0)
                                break e;
                            s--,
                            c += r[o++] << l,
                            l += 8
                        }
                        c >>>= S,
                        l -= S,
                        x = 0,
                        d = 3 + (c & 7),
                        c >>>= 3,
                        l -= 3
                    } else {
                        for (I = S + 7; l < I; ) {
                            if (s === 0)
                                break e;
                            s--,
                            c += r[o++] << l,
                            l += 8
                        }
                        c >>>= S,
                        l -= S,
                        x = 0,
                        d = 11 + (c & 127),
                        c >>>= 7,
                        l -= 7
                    }
                    if (e.have + d > e.nlen + e.ndist) {
                        n.msg = "invalid bit length repeat",
                        e.mode = Z;
                        break
                    }
                    for (; d--; )
                        e.lens[e.have++] = x
                }
            }
            if (e.mode === Z)
                break;
            if (e.lens[256] === 0) {
                n.msg = "invalid code -- missing end-of-block",
                e.mode = Z;
                break
            }
            if (e.lenbits = 9,
            T = {
                bits: e.lenbits
            },
            z = xt(ua, e.lens, 0, e.nlen, e.lencode, 0, e.work, T),
            e.lenbits = T.bits,
            z) {
                n.msg = "invalid literal/lengths set",
                e.mode = Z;
                break
            }
            if (e.distbits = 6,
            e.distcode = e.distdyn,
            T = {
                bits: e.distbits
            },
            z = xt(la, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, T),
            e.distbits = T.bits,
            z) {
                n.msg = "invalid distances set",
                e.mode = Z;
                break
            }
            if (e.mode = hn,
            t === fn)
                break e;
        case hn:
            e.mode = pn;
        case pn:
            if (s >= 6 && u >= 258) {
                n.next_out = a,
                n.avail_out = u,
                n.next_in = o,
                n.avail_in = s,
                e.hold = c,
                e.bits = l,
                yu(n, h),
                a = n.next_out,
                i = n.output,
                u = n.avail_out,
                o = n.next_in,
                r = n.input,
                s = n.avail_in,
                c = e.hold,
                l = e.bits,
                e.mode === Ee && (e.back = -1);
                break
            }
            for (e.back = 0; E = e.lencode[c & (1 << e.lenbits) - 1],
            S = E >>> 24,
            O = E >>> 16 & 255,
            L = E & 65535,
            !(S <= l); ) {
                if (s === 0)
                    break e;
                s--,
                c += r[o++] << l,
                l += 8
            }
            if (O && !(O & 240)) {
                for (g = S,
                R = O,
                F = L; E = e.lencode[F + ((c & (1 << g + R) - 1) >> g)],
                S = E >>> 24,
                O = E >>> 16 & 255,
                L = E & 65535,
                !(g + S <= l); ) {
                    if (s === 0)
                        break e;
                    s--,
                    c += r[o++] << l,
                    l += 8
                }
                c >>>= g,
                l -= g,
                e.back += g
            }
            if (c >>>= S,
            l -= S,
            e.back += S,
            e.length = L,
            O === 0) {
                e.mode = zo;
                break
            }
            if (O & 32) {
                e.back = -1,
                e.mode = Ee;
                break
            }
            if (O & 64) {
                n.msg = "invalid literal/length code",
                e.mode = Z;
                break
            }
            e.extra = O & 15,
            e.mode = Ro;
        case Ro:
            if (e.extra) {
                for (I = e.extra; l < I; ) {
                    if (s === 0)
                        break e;
                    s--,
                    c += r[o++] << l,
                    l += 8
                }
                e.length += c & (1 << e.extra) - 1,
                c >>>= e.extra,
                l -= e.extra,
                e.back += e.extra
            }
            e.was = e.length,
            e.mode = Oo;
        case Oo:
            for (; E = e.distcode[c & (1 << e.distbits) - 1],
            S = E >>> 24,
            O = E >>> 16 & 255,
            L = E & 65535,
            !(S <= l); ) {
                if (s === 0)
                    break e;
                s--,
                c += r[o++] << l,
                l += 8
            }
            if (!(O & 240)) {
                for (g = S,
                R = O,
                F = L; E = e.distcode[F + ((c & (1 << g + R) - 1) >> g)],
                S = E >>> 24,
                O = E >>> 16 & 255,
                L = E & 65535,
                !(g + S <= l); ) {
                    if (s === 0)
                        break e;
                    s--,
                    c += r[o++] << l,
                    l += 8
                }
                c >>>= g,
                l -= g,
                e.back += g
            }
            if (c >>>= S,
            l -= S,
            e.back += S,
            O & 64) {
                n.msg = "invalid distance code",
                e.mode = Z;
                break
            }
            e.offset = L,
            e.extra = O & 15,
            e.mode = Do;
        case Do:
            if (e.extra) {
                for (I = e.extra; l < I; ) {
                    if (s === 0)
                        break e;
                    s--,
                    c += r[o++] << l,
                    l += 8
                }
                e.offset += c & (1 << e.extra) - 1,
                c >>>= e.extra,
                l -= e.extra,
                e.back += e.extra
            }
            if (e.offset > e.dmax) {
                n.msg = "invalid distance too far back",
                e.mode = Z;
                break
            }
            e.mode = Co;
        case Co:
            if (u === 0)
                break e;
            if (d = h - u,
            e.offset > d) {
                if (d = e.offset - d,
                d > e.whave && e.sane) {
                    n.msg = "invalid distance too far back",
                    e.mode = Z;
                    break
                }
                d > e.wnext ? (d -= e.wnext,
                p = e.wsize - d) : p = e.wnext - d,
                d > e.length && (d = e.length),
                b = e.window
            } else
                b = i,
                p = a - e.offset,
                d = e.length;
            d > u && (d = u),
            u -= d,
            e.length -= d;
            do
                i[a++] = b[p++];
            while (--d);
            e.length === 0 && (e.mode = pn);
            break;
        case zo:
            if (u === 0)
                break e;
            i[a++] = e.length,
            u--,
            e.mode = pn;
            break;
        case fr:
            if (e.wrap) {
                for (; l < 32; ) {
                    if (s === 0)
                        break e;
                    s--,
                    c |= r[o++] << l,
                    l += 8
                }
                if (h -= u,
                n.total_out += h,
                e.total += h,
                e.wrap & 4 && h && (n.adler = e.check = e.flags ? K(e.check, i, h, a - h) : Tt(e.check, i, h, a - h)),
                h = u,
                e.wrap & 4 && (e.flags ? c : Bo(c)) !== e.check) {
                    n.msg = "incorrect data check",
                    e.mode = Z;
                    break
                }
                c = 0,
                l = 0
            }
            e.mode = Po;
        case Po:
            if (e.wrap && e.flags) {
                for (; l < 32; ) {
                    if (s === 0)
                        break e;
                    s--,
                    c += r[o++] << l,
                    l += 8
                }
                if (e.wrap & 4 && c !== (e.total & 4294967295)) {
                    n.msg = "incorrect length check",
                    e.mode = Z;
                    break
                }
                c = 0,
                l = 0
            }
            e.mode = No;
        case No:
            z = Su;
            break e;
        case Z:
            z = da;
            break e;
        case ha:
            return fa;
        case pa:
        default:
            return ce
        }
    return n.next_out = a,
    n.avail_out = u,
    n.next_in = o,
    n.avail_in = s,
    e.hold = c,
    e.bits = l,
    (e.wsize || h !== n.avail_out && e.mode < Z && (e.mode < fr || t !== po)) && ma(n, n.output, n.next_out, h - n.avail_out),
    _ -= n.avail_in,
    h -= n.avail_out,
    n.total_in += _,
    n.total_out += h,
    e.total += h,
    e.wrap & 4 && h && (n.adler = e.check = e.flags ? K(e.check, i, h, n.next_out - h) : Tt(e.check, i, h, n.next_out - h)),
    n.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === Ee ? 128 : 0) + (e.mode === hn || e.mode === dr ? 256 : 0),
    (_ === 0 && h === 0 || t === po) && z === Ke && (z = Tu),
    z
}
, Bu = n => {
    if (He(n))
        return ce;
    let t = n.state;
    return t.window && (t.window = null),
    n.state = null,
    Ke
}
, Uu = (n, t) => {
    if (He(n))
        return ce;
    let e = n.state;
    return e.wrap & 2 ? (e.head = t,
    t.done = !1,
    Ke) : ce
}
, Mu = (n, t) => {
    let e = t.length, r, i, o;
    return He(n) || (r = n.state,
    r.wrap !== 0 && r.mode !== yn) ? ce : r.mode === yn && (i = 1,
    i = Tt(i, t, e, 0),
    i !== r.check) ? da : (o = ma(n, t, e, e),
    o ? (r.mode = ha,
    fa) : (r.havedict = 1,
    Ke))
}
, $u = wa, Zu = ga, Fu = _a, ju = zu, Vu = ya, Ku = Nu, Hu = Bu, qu = Uu, Gu = Mu, Wu = "pako inflate (from Nodeca project)", Ae = {
    inflateReset: $u,
    inflateReset2: Zu,
    inflateResetKeep: Fu,
    inflateInit: ju,
    inflateInit2: Vu,
    inflate: Ku,
    inflateEnd: Hu,
    inflateGetHeader: qu,
    inflateSetDictionary: Gu,
    inflateInfo: Wu
};
function Yu() {
    this.text = 0,
    this.time = 0,
    this.xflags = 0,
    this.os = 0,
    this.extra = null,
    this.extra_len = 0,
    this.name = "",
    this.comment = "",
    this.hcrc = 0,
    this.done = !1
}
var Xu = Yu
  , ba = Object.prototype.toString
  , {Z_NO_FLUSH: Ju, Z_FINISH: Qu, Z_OK: Ot, Z_STREAM_END: _r, Z_NEED_DICT: wr, Z_STREAM_ERROR: el, Z_DATA_ERROR: Mo, Z_MEM_ERROR: tl} = at;
function Pt(n) {
    this.options = bn.assign({
        chunkSize: 1024 * 64,
        windowBits: 15,
        to: ""
    }, n || {});
    let t = this.options;
    t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits,
    t.windowBits === 0 && (t.windowBits = -15)),
    t.windowBits >= 0 && t.windowBits < 16 && !(n && n.windowBits) && (t.windowBits += 32),
    t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15 || (t.windowBits |= 15)),
    this.err = 0,
    this.msg = "",
    this.ended = !1,
    this.chunks = [],
    this.strm = new sa,
    this.strm.avail_out = 0;
    let e = Ae.inflateInit2(this.strm, t.windowBits);
    if (e !== Ot)
        throw new Error(je[e]);
    if (this.header = new Xu,
    Ae.inflateGetHeader(this.strm, this.header),
    t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = Rt.string2buf(t.dictionary) : ba.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)),
    t.raw && (e = Ae.inflateSetDictionary(this.strm, t.dictionary),
    e !== Ot)))
        throw new Error(je[e])
}
Pt.prototype.push = function(n, t) {
    let e = this.strm, r = this.options.chunkSize, i = this.options.dictionary, o, a, s;
    if (this.ended)
        return !1;
    for (t === ~~t ? a = t : a = t === !0 ? Qu : Ju,
    ba.call(n) === "[object ArrayBuffer]" ? e.input = new Uint8Array(n) : e.input = n,
    e.next_in = 0,
    e.avail_in = e.input.length; ; ) {
        for (e.avail_out === 0 && (e.output = new Uint8Array(r),
        e.next_out = 0,
        e.avail_out = r),
        o = Ae.inflate(e, a),
        o === wr && i && (o = Ae.inflateSetDictionary(e, i),
        o === Ot ? o = Ae.inflate(e, a) : o === Mo && (o = wr)); e.avail_in > 0 && o === _r && e.state.wrap > 0 && n[e.next_in] !== 0; )
            Ae.inflateReset(e),
            o = Ae.inflate(e, a);
        switch (o) {
        case el:
        case Mo:
        case wr:
        case tl:
            return this.onEnd(o),
            this.ended = !0,
            !1
        }
        if (s = e.avail_out,
        e.next_out && (e.avail_out === 0 || o === _r))
            if (this.options.to === "string") {
                let u = Rt.utf8border(e.output, e.next_out)
                  , c = e.next_out - u
                  , l = Rt.buf2string(e.output, u);
                e.next_out = c,
                e.avail_out = r - c,
                c && e.output.set(e.output.subarray(u, u + c), 0),
                this.onData(l)
            } else
                this.onData(e.output.length === e.next_out ? e.output : e.output.subarray(0, e.next_out));
        if (!(o === Ot && s === 0)) {
            if (o === _r)
                return o = Ae.inflateEnd(this.strm),
                this.onEnd(o),
                this.ended = !0,
                !0;
            if (e.avail_in === 0)
                break
        }
    }
    return !0
}
;
Pt.prototype.onData = function(n) {
    this.chunks.push(n)
}
;
Pt.prototype.onEnd = function(n) {
    n === Ot && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = bn.flattenChunks(this.chunks)),
    this.chunks = [],
    this.err = n,
    this.msg = this.strm.msg
}
;
function Dr(n, t) {
    let e = new Pt(t);
    if (e.push(n),
    e.err)
        throw e.msg || je[e.err];
    return e.result
}
function nl(n, t) {
    return t = t || {},
    t.raw = !0,
    Dr(n, t)
}
var rl = Pt
  , il = Dr
  , ol = nl
  , al = Dr
  , sl = at
  , cl = {
    Inflate: rl,
    inflate: il,
    inflateRaw: ol,
    ungzip: al,
    constants: sl
}
  , {Deflate: Vd, deflate: Kd, deflateRaw: Hd, gzip: qd} = wu
  , {Inflate: Gd, inflate: ul, inflateRaw: Wd, ungzip: Yd} = cl;
var va = ul;
var za = Ue(xa());
function fl(n, t) {
    return Array.apply(0, new Array(Math.ceil(n.length / t))).map( (e, r) => n.slice(r * t, (r + 1) * t))
}
var Bt = n => "version"in n;
function hl(n) {
    return n.reduce( (t, e) => t + e.toString(16).padStart(2, "0"), "0x")
}
function pl(n) {
    n.indexOf("0x") === 0 && (n = n.substr(2)),
    n.length % 2 === 1 && (n = "0" + n);
    let t = n.match(/.{2}/g);
    return t === null ? J.Buffer.from([]) : J.Buffer.from(t.map(e => parseInt(e, 16)))
}
var _l = Object.freeze({
    __proto__: null,
    encode: hl,
    decode: pl
});
function Pa(n) {
    return new TextDecoder("utf-8").decode(n)
}
function Na(n) {
    return new TextEncoder().encode(n)
}
var wl = Object.freeze({
    __proto__: null,
    decode: Pa,
    encode: Na
});
function Br(n) {
    return We.default.encode(n)
}
function gl(n) {
    return We.default.decode(n)
}
var yl = Object.freeze({
    __proto__: null,
    encode: Br,
    decode: gl
});
function Ur(n) {
    return n.toString("base64")
}
function Di(n) {
    return J.Buffer.from(n, "base64")
}
var ml = Object.freeze({
    __proto__: null,
    encode: Ur,
    decode: Di
})
  , bl = Object.freeze({
    __proto__: null,
    hex: _l,
    utf8: wl,
    bs58: yl,
    base64: ml
});
function vl(n) {
    let t = new Map;
    return n.errors && n.errors.forEach(e => {
        var r;
        let i = (r = e.msg) !== null && r !== void 0 ? r : e.name;
        t.set(e.code, i)
    }
    ),
    t
}
function El(n, ...t) {
    if (n.args.length != t.length)
        throw new Error("Invalid argument length");
    let e = {}
      , r = 0;
    return n.args.forEach(i => {
        e[i.name] = t[r],
        r += 1
    }
    ),
    e
}
function Ba(n, t={}) {
    n.forEach(e => {
        if ("accounts"in e)
            Ba(e.accounts, t[e.name]);
        else if (t[e.name] === void 0)
            throw new Error(`Invalid arguments: ${e.name} not provided.`)
    }
    )
}
function oe(n) {
    return n instanceof j ? n : new j(n)
}
var Mr = class extends TypeError {
    constructor(t, e) {
        let r, u = t, {message: i} = u, o = Zi(u, ["message"]), {path: a} = t, s = a.length === 0 ? i : "At path: " + a.join(".") + " -- " + i;
        super(s),
        this.value = void 0,
        this.key = void 0,
        this.type = void 0,
        this.refinement = void 0,
        this.path = void 0,
        this.branch = void 0,
        this.failures = void 0,
        Object.assign(this, o),
        this.name = this.constructor.name,
        this.failures = () => {
            var c;
            return (c = r) != null ? c : r = [t, ...e()]
        }
    }
}
;
function xl(n) {
    return ut(n) && typeof n[Symbol.iterator] == "function"
}
function ut(n) {
    return typeof n == "object" && n != null
}
function Ne(n) {
    return typeof n == "string" ? JSON.stringify(n) : "" + n
}
function Al(n) {
    let {done: t, value: e} = n.next();
    return t ? void 0 : e
}
function kl(n, t, e, r) {
    if (n === !0)
        return;
    n === !1 ? n = {} : typeof n == "string" && (n = {
        message: n
    });
    let {path: i, branch: o} = t
      , {type: a} = e
      , {refinement: s, message: u="Expected a value of type `" + a + "`" + (s ? " with refinement `" + s + "`" : "") + ", but received: `" + Ne(r) + "`"} = n;
    return Be(de({
        value: r,
        type: a,
        refinement: s,
        key: i[i.length - 1],
        path: i,
        branch: o
    }, n), {
        message: u
    })
}
function *Aa(n, t, e, r) {
    xl(n) || (n = [n]);
    for (let i of n) {
        let o = kl(i, t, e, r);
        o && (yield o)
    }
}
function *Ci(n, t, e) {
    e === void 0 && (e = {});
    let {path: r=[], branch: i=[n], coerce: o=!1, mask: a=!1} = e
      , s = {
        path: r,
        branch: i
    };
    if (o && (n = t.coercer(n, s),
    a && t.type !== "type" && ut(t.schema) && ut(n) && !Array.isArray(n)))
        for (let c in n)
            t.schema[c] === void 0 && delete n[c];
    let u = !0;
    for (let c of t.validator(n, s))
        u = !1,
        yield[c, void 0];
    for (let[c,l,_] of t.entries(n, s)) {
        let h = Ci(l, _, {
            path: c === void 0 ? r : [...r, c],
            branch: c === void 0 ? i : [...i, l],
            coerce: o,
            mask: a
        });
        for (let d of h)
            d[0] ? (u = !1,
            yield[d[0], void 0]) : o && (l = d[1],
            c === void 0 ? n = l : n instanceof Map ? n.set(c, l) : n instanceof Set ? n.add(l) : ut(n) && (n[c] = l))
    }
    if (u)
        for (let c of t.refiner(n, s))
            u = !1,
            yield[c, void 0];
    u && (yield[void 0, n])
}
var ye = class {
    constructor(t) {
        this.TYPE = void 0,
        this.type = void 0,
        this.schema = void 0,
        this.coercer = void 0,
        this.validator = void 0,
        this.refiner = void 0,
        this.entries = void 0;
        let {type: e, schema: r, validator: i, refiner: o, coercer: a=u => u, entries: s=function*() {}
        } = t;
        this.type = e,
        this.schema = r,
        this.entries = s,
        this.coercer = a,
        i ? this.validator = (u, c) => {
            let l = i(u, c);
            return Aa(l, c, this, u)
        }
        : this.validator = () => [],
        o ? this.refiner = (u, c) => {
            let l = o(u, c);
            return Aa(l, c, this, u)
        }
        : this.refiner = () => []
    }
    assert(t) {
        return Sl(t, this)
    }
    create(t) {
        return zi(t, this)
    }
    is(t) {
        return Ua(t, this)
    }
    mask(t) {
        return Il(t, this)
    }
    validate(t, e) {
        return e === void 0 && (e = {}),
        Ft(t, this, e)
    }
}
;
function Sl(n, t) {
    let e = Ft(n, t);
    if (e[0])
        throw e[0]
}
function zi(n, t) {
    let e = Ft(n, t, {
        coerce: !0
    });
    if (e[0])
        throw e[0];
    return e[1]
}
function Il(n, t) {
    let e = Ft(n, t, {
        coerce: !0,
        mask: !0
    });
    if (e[0])
        throw e[0];
    return e[1]
}
function Ua(n, t) {
    return !Ft(n, t)[0]
}
function Ft(n, t, e) {
    e === void 0 && (e = {});
    let r = Ci(n, t, e)
      , i = Al(r);
    return i[0] ? [new Mr(i[0],function*() {
        for (let a of r)
            a[0] && (yield a[0])
    }
    ), void 0] : [void 0, i[1]]
}
function jt(n, t) {
    return new ye({
        type: n,
        schema: null,
        validator: t
    })
}
function Tl() {
    return jt("any", () => !0)
}
function zr(n) {
    return new ye({
        type: "array",
        schema: n,
        *entries(t) {
            if (n && Array.isArray(t))
                for (let[e,r] of t.entries())
                    yield[e, r, n]
        },
        coercer(t) {
            return Array.isArray(t) ? t.slice() : t
        },
        validator(t) {
            return Array.isArray(t) || "Expected an array value, but received: " + Ne(t)
        }
    })
}
function Ll() {
    return jt("boolean", n => typeof n == "boolean")
}
function ka(n) {
    let t = Ne(n)
      , e = typeof n;
    return new ye({
        type: "literal",
        schema: e === "string" || e === "number" || e === "boolean" ? n : null,
        validator(r) {
            return r === n || "Expected the literal `" + t + "`, but received: " + Ne(r)
        }
    })
}
function xn(n) {
    return new ye(Be(de({}, n), {
        validator: (t, e) => t === null || n.validator(t, e),
        refiner: (t, e) => t === null || n.refiner(t, e)
    }))
}
function kn() {
    return jt("number", n => typeof n == "number" && !isNaN(n) || "Expected a number, but received: " + Ne(n))
}
function Sn(n) {
    return new ye(Be(de({}, n), {
        validator: (t, e) => t === void 0 || n.validator(t, e),
        refiner: (t, e) => t === void 0 || n.refiner(t, e)
    }))
}
function qe() {
    return jt("string", n => typeof n == "string" || "Expected a string, but received: " + Ne(n))
}
function Pe(n) {
    let t = Object.keys(n);
    return new ye({
        type: "type",
        schema: n,
        *entries(e) {
            if (ut(e))
                for (let r of t)
                    yield[r, e[r], n[r]]
        },
        validator(e) {
            return ut(e) || "Expected an object, but received: " + Ne(e)
        }
    })
}
function Ma(n) {
    let t = n.map(e => e.type).join(" | ");
    return new ye({
        type: "union",
        schema: null,
        coercer(e, r) {
            return (n.find(o => {
                let[a] = o.validate(e, {
                    coerce: !0
                });
                return !a
            }
            ) || Pi()).coercer(e, r)
        },
        validator(e, r) {
            let i = [];
            for (let o of n) {
                let[...a] = Ci(e, o, r)
                  , [s] = a;
                if (s[0])
                    for (let[u] of a)
                        u && i.push(u);
                else
                    return []
            }
            return ["Expected the value to satisfy a union of `" + t + "`, but received: " + Ne(e), ...i]
        }
    })
}
function Pi() {
    return jt("unknown", () => !0)
}
function Rl(n, t, e) {
    return new ye(Be(de({}, n), {
        coercer: (r, i) => Ua(r, t) ? n.coercer(e(r, i), i) : n.coercer(r, i)
    }))
}
function Ol(n, t, e, r) {
    return v(this, null, function*() {
        n = oe(n),
        r || (r = In());
        let i = new jn;
        if (i.add(new Fn({
            programId: n,
            keys: t ?? [],
            data: e
        })),
        r.sendAndConfirm === void 0)
            throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
        return yield r.sendAndConfirm(i, [])
    })
}
var Sa = 99;
function Dl(n, t, e) {
    return v(this, null, function*() {
        return (yield Ni(n, t, e)).map(i => i ? {
            publicKey: i.publicKey,
            account: i.account
        } : null)
    })
}
function Ni(n, t, e) {
    return v(this, null, function*() {
        if (t.length <= Sa)
            return yield Ia(n, t, e);
        {
            let r = fl(t, Sa);
            return (yield Promise.all(r.map(o => Ia(n, o, e)))).flat()
        }
    })
}
function Ia(n, t, e) {
    return v(this, null, function*() {
        let r = e ?? n.commitment
          , {value: i, context: o} = yield n.getMultipleAccountsInfoAndContext(t, r);
        return i.map( (s, u) => s === null ? null : {
            publicKey: t[u],
            account: s,
            context: o
        })
    })
}
function $a(n, t, e, r, i) {
    return v(this, null, function*() {
        var o;
        e && e.length > 0 && t.sign(...e);
        let a = t._compile()
          , s = a.serialize()
          , c = t._serialize(s).toString("base64")
          , l = {
            encoding: "base64",
            commitment: r ?? n.commitment
        };
        if (i) {
            let p = (Array.isArray(i) ? i : a.nonProgramIds()).map(b => b.toBase58());
            l.accounts = {
                encoding: "base64",
                addresses: p
            }
        }
        e && (l.sigVerify = !0);
        let _ = [c, l]
          , h = yield n._rpcRequest("simulateTransaction", _)
          , d = zi(h, Nl);
        if ("error"in d) {
            let p;
            if ("data"in d.error && (p = (o = d.error.data) === null || o === void 0 ? void 0 : o.logs,
            p && Array.isArray(p))) {
                let b = `
    `
                  , E = b + p.join(b);
                console.error(d.error.message, E)
            }
            throw new qt("failed to simulate transaction: " + d.error.message,p)
        }
        return d.result
    })
}
function Cl(n) {
    return Rl(Za(n), zl, t => "error"in t ? t : Be(de({}, t), {
        result: zi(t.result, n)
    }))
}
var zl = Za(Pi());
function Za(n) {
    return Ma([Pe({
        jsonrpc: ka("2.0"),
        id: qe(),
        result: n
    }), Pe({
        jsonrpc: ka("2.0"),
        id: qe(),
        error: Pe({
            code: Pi(),
            message: qe(),
            data: Sn(Tl())
        })
    })])
}
function Pl(n) {
    return Cl(Pe({
        context: Pe({
            slot: kn()
        }),
        value: n
    }))
}
var Nl = Pl(Pe({
    err: xn(Ma([Pe({}), qe()])),
    logs: xn(zr(qe())),
    accounts: Sn(xn(zr(xn(Pe({
        executable: Ll(),
        owner: qe(),
        lamports: kn(),
        data: zr(qe()),
        rentEpoch: Sn(kn())
    }))))),
    unitsConsumed: Sn(kn())
}))
  , Bl = Object.freeze({
    __proto__: null,
    invoke: Ol,
    getMultipleAccounts: Dl,
    getMultipleAccountsAndContext: Ni,
    simulateTransaction: $a
})
  , $r = class {
    constructor(t, e, r) {
        this.connection = t,
        this.wallet = e,
        this.opts = r,
        this.publicKey = e?.publicKey
    }
    static defaultOptions() {
        return {
            preflightCommitment: "processed",
            commitment: "processed"
        }
    }
    static local(t, e) {
        throw new Error("Provider local is not available on browser.")
    }
    static env() {
        throw new Error("Provider env is not available on browser.")
    }
    sendAndConfirm(t, e, r) {
        return v(this, null, function*() {
            var i, o, a, s;
            if (r === void 0 && (r = this.opts),
            Bt(t))
                e && t.sign(e);
            else if (t.feePayer = (i = t.feePayer) !== null && i !== void 0 ? i : this.wallet.publicKey,
            t.recentBlockhash = (yield this.connection.getLatestBlockhash(r.preflightCommitment)).blockhash,
            e)
                for (let c of e)
                    t.partialSign(c);
            t = yield this.wallet.signTransaction(t);
            let u = t.serialize();
            try {
                return yield Ta(this.connection, u, r)
            } catch (c) {
                if (c instanceof Mt) {
                    let l = Br(Bt(t) ? ((o = t.signatures) === null || o === void 0 ? void 0 : o[0]) || new Uint8Array : (a = t.signature) !== null && a !== void 0 ? a : new Uint8Array)
                      , _ = yield this.connection.getTransaction(l, {
                        commitment: "confirmed"
                    });
                    if (_) {
                        let h = (s = _.meta) === null || s === void 0 ? void 0 : s.logMessages;
                        throw h ? new qt(c.message,h) : c
                    } else
                        throw c
                } else
                    throw c
            }
        })
    }
    sendAll(t, e) {
        return v(this, null, function*() {
            var r, i, o;
            e === void 0 && (e = this.opts);
            let a = (yield this.connection.getLatestBlockhash(e.preflightCommitment)).blockhash
              , s = t.map(l => {
                var _, h;
                if (Bt(l.tx)) {
                    let d = l.tx;
                    return l.signers && d.sign(l.signers),
                    d
                } else {
                    let d = l.tx
                      , p = (_ = l.signers) !== null && _ !== void 0 ? _ : [];
                    return d.feePayer = (h = d.feePayer) !== null && h !== void 0 ? h : this.wallet.publicKey,
                    d.recentBlockhash = a,
                    p.forEach(b => {
                        d.partialSign(b)
                    }
                    ),
                    d
                }
            }
            )
              , u = yield this.wallet.signAllTransactions(s)
              , c = [];
            for (let l = 0; l < s.length; l += 1) {
                let _ = u[l]
                  , h = _.serialize();
                try {
                    c.push(yield Ta(this.connection, h, e))
                } catch (d) {
                    if (d instanceof Mt) {
                        let p = Br(Bt(_) ? ((r = _.signatures) === null || r === void 0 ? void 0 : r[0]) || new Uint8Array : (i = _.signature) !== null && i !== void 0 ? i : new Uint8Array)
                          , b = yield this.connection.getTransaction(p, {
                            commitment: "confirmed"
                        });
                        if (b) {
                            let E = (o = b.meta) === null || o === void 0 ? void 0 : o.logMessages;
                            throw E ? new qt(d.message,E) : d
                        } else
                            throw d
                    } else
                        throw d
                }
            }
            return c
        })
    }
    simulate(t, e, r, i) {
        return v(this, null, function*() {
            let o = (yield this.connection.getLatestBlockhash(r ?? this.connection.commitment)).blockhash, a;
            if (Bt(t) ? (e && (t.sign(e),
            t = yield this.wallet.signTransaction(t)),
            a = yield this.connection.simulateTransaction(t, {
                commitment: r
            })) : (t.feePayer = t.feePayer || this.wallet.publicKey,
            t.recentBlockhash = o,
            e && (t = yield this.wallet.signTransaction(t)),
            a = yield $a(this.connection, t, e, r, i)),
            a.value.err)
                throw new Zr(a.value);
            return a.value
        })
    }
}
  , Zr = class extends Error {
    constructor(t, e) {
        super(e),
        this.simulationResponse = t
    }
}
;
function Ta(n, t, e) {
    return v(this, null, function*() {
        let r = e && {
            skipPreflight: e.skipPreflight,
            preflightCommitment: e.preflightCommitment || e.commitment
        }
          , i = yield n.sendRawTransaction(t, r)
          , o = (yield n.confirmTransaction(i, e && e.commitment)).value;
        if (o.err)
            throw new Mt(`Raw transaction ${i} failed (${JSON.stringify(o)})`);
        return i
    })
}
var Mt = class extends Error {
    constructor(t) {
        super(t)
    }
}
;
function nf(n) {
    Fr = n
}
function In() {
    return Fr === null ? $r.local() : Fr
}
var Fr = null
  , Ul = new Set(["anchor-deprecated-state", "debug-logs"])
  , Fa = new Map;
function Ml(n) {
    if (!Ul.has(n))
        throw new Error("Invalid feature");
    Fa.set(n, !0)
}
function Bi(n) {
    return Fa.get(n) !== void 0
}
var $l = Object.freeze({
    __proto__: null,
    set: Ml,
    isSet: Bi
})
  , lt = class extends Error {
    constructor(t) {
        super(t),
        this.name = "IdlError"
    }
}
  , $t = class n {
    constructor(t) {
        this.stack = t
    }
    static parse(t) {
        var e;
        let r = /^Program (\w*) invoke/
          , i = /^Program \w* success/
          , o = [];
        for (let a = 0; a < t.length; a++) {
            if (i.exec(t[a])) {
                o.pop();
                continue
            }
            let s = (e = r.exec(t[a])) === null || e === void 0 ? void 0 : e[1];
            s && o.push(new j(s))
        }
        return new n(o)
    }
}
  , jr = class n extends Error {
    constructor(t, e, r, i, o, a) {
        super(r.join(`
`).replace("Program log: ", "")),
        this.errorLogs = r,
        this.logs = i,
        this.error = {
            errorCode: t,
            errorMessage: e,
            comparedValues: a,
            origin: o
        },
        this._programErrorStack = $t.parse(i)
    }
    static parse(t) {
        if (!t)
            return null;
        let e = t.findIndex(h => h.startsWith("Program log: AnchorError"));
        if (e === -1)
            return null;
        let r = t[e], i = [r], o;
        if (e + 1 < t.length) {
            if (t[e + 1] === "Program log: Left:") {
                let h = /^Program log: (.*)$/
                  , d = h.exec(t[e + 2])[1]
                  , p = h.exec(t[e + 4])[1];
                o = [new j(d), new j(p)],
                i.push(...t.slice(e + 1, e + 5))
            } else if (t[e + 1].startsWith("Program log: Left:")) {
                let h = /^Program log: (Left|Right): (.*)$/
                  , d = h.exec(t[e + 1])[2]
                  , p = h.exec(t[e + 2])[2];
                i.push(...t.slice(e + 1, e + 3)),
                o = [d, p]
            }
        }
        let s = /^Program log: AnchorError occurred\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(r)
          , c = /^Program log: AnchorError thrown in (.*):(\d*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(r)
          , _ = /^Program log: AnchorError caused by account: (.*)\. Error Code: (.*)\. Error Number: (\d*)\. Error Message: (.*)\./.exec(r);
        if (s) {
            let[h,d,p] = s.slice(1, 4)
              , b = {
                code: h,
                number: parseInt(d)
            };
            return new n(b,p,i,t,void 0,o)
        } else if (c) {
            let[h,d,p,b,E] = c.slice(1, 6)
              , S = {
                code: p,
                number: parseInt(b)
            }
              , O = {
                file: h,
                line: parseInt(d)
            };
            return new n(S,E,i,t,O,o)
        } else if (_) {
            let[h,d,p,b] = _.slice(1, 5)
              , E = h
              , S = {
                code: d,
                number: parseInt(p)
            };
            return new n(S,b,i,t,E,o)
        } else
            return null
    }
    get program() {
        return this._programErrorStack.stack[this._programErrorStack.stack.length - 1]
    }
    get programErrorStack() {
        return this._programErrorStack.stack
    }
    toString() {
        return this.message
    }
}
  , Vr = class n extends Error {
    constructor(t, e, r) {
        super(),
        this.code = t,
        this.msg = e,
        this.logs = r,
        r && (this._programErrorStack = $t.parse(r))
    }
    static parse(t, e) {
        let r = t.toString(), i;
        if (r.includes("custom program error:")) {
            let s = r.split("custom program error: ");
            if (s.length !== 2)
                return null;
            i = s[1]
        } else {
            let s = r.match(/"Custom":([0-9]+)}/g);
            if (!s || s.length > 1)
                return null;
            i = s[0].match(/([0-9]+)/g)[0]
        }
        let o;
        try {
            o = parseInt(i)
        } catch {
            return null
        }
        let a = e.get(o);
        return a !== void 0 ? new n(o,a,t.logs) : (a = Zl.get(o),
        a !== void 0 ? new n(o,a,t.logs) : null)
    }
    get program() {
        var t;
        return (t = this._programErrorStack) === null || t === void 0 ? void 0 : t.stack[this._programErrorStack.stack.length - 1]
    }
    get programErrorStack() {
        var t;
        return (t = this._programErrorStack) === null || t === void 0 ? void 0 : t.stack
    }
    toString() {
        return this.msg
    }
}
;
function ja(n, t) {
    Bi("debug-logs") && console.log("Translating error:", n);
    let e = jr.parse(n.logs);
    if (e)
        return e;
    let r = Vr.parse(n, t);
    if (r)
        return r;
    if (n.logs) {
        let i = {
            get: function(o, a) {
                return a === "programErrorStack" ? o.programErrorStack.stack : a === "program" ? o.programErrorStack.stack[n.programErrorStack.stack.length - 1] : Reflect.get(...arguments)
            }
        };
        return n.programErrorStack = $t.parse(n.logs),
        new Proxy(n,i)
    }
    return n
}
var k = {
    InstructionMissing: 100,
    InstructionFallbackNotFound: 101,
    InstructionDidNotDeserialize: 102,
    InstructionDidNotSerialize: 103,
    IdlInstructionStub: 1e3,
    IdlInstructionInvalidProgram: 1001,
    ConstraintMut: 2e3,
    ConstraintHasOne: 2001,
    ConstraintSigner: 2002,
    ConstraintRaw: 2003,
    ConstraintOwner: 2004,
    ConstraintRentExempt: 2005,
    ConstraintSeeds: 2006,
    ConstraintExecutable: 2007,
    ConstraintState: 2008,
    ConstraintAssociated: 2009,
    ConstraintAssociatedInit: 2010,
    ConstraintClose: 2011,
    ConstraintAddress: 2012,
    ConstraintZero: 2013,
    ConstraintTokenMint: 2014,
    ConstraintTokenOwner: 2015,
    ConstraintMintMintAuthority: 2016,
    ConstraintMintFreezeAuthority: 2017,
    ConstraintMintDecimals: 2018,
    ConstraintSpace: 2019,
    ConstraintAccountIsNone: 2020,
    RequireViolated: 2500,
    RequireEqViolated: 2501,
    RequireKeysEqViolated: 2502,
    RequireNeqViolated: 2503,
    RequireKeysNeqViolated: 2504,
    RequireGtViolated: 2505,
    RequireGteViolated: 2506,
    AccountDiscriminatorAlreadySet: 3e3,
    AccountDiscriminatorNotFound: 3001,
    AccountDiscriminatorMismatch: 3002,
    AccountDidNotDeserialize: 3003,
    AccountDidNotSerialize: 3004,
    AccountNotEnoughKeys: 3005,
    AccountNotMutable: 3006,
    AccountOwnedByWrongProgram: 3007,
    InvalidProgramId: 3008,
    InvalidProgramExecutable: 3009,
    AccountNotSigner: 3010,
    AccountNotSystemOwned: 3011,
    AccountNotInitialized: 3012,
    AccountNotProgramData: 3013,
    AccountNotAssociatedTokenAccount: 3014,
    AccountSysvarMismatch: 3015,
    AccountReallocExceedsLimit: 3016,
    AccountDuplicateReallocs: 3017,
    DeclaredProgramIdMismatch: 4100,
    Deprecated: 5e3
}
  , Zl = new Map([[k.InstructionMissing, "8 byte instruction identifier not provided"], [k.InstructionFallbackNotFound, "Fallback functions are not supported"], [k.InstructionDidNotDeserialize, "The program could not deserialize the given instruction"], [k.InstructionDidNotSerialize, "The program could not serialize the given instruction"], [k.IdlInstructionStub, "The program was compiled without idl instructions"], [k.IdlInstructionInvalidProgram, "The transaction was given an invalid program for the IDL instruction"], [k.ConstraintMut, "A mut constraint was violated"], [k.ConstraintHasOne, "A has one constraint was violated"], [k.ConstraintSigner, "A signer constraint was violated"], [k.ConstraintRaw, "A raw constraint was violated"], [k.ConstraintOwner, "An owner constraint was violated"], [k.ConstraintRentExempt, "A rent exemption constraint was violated"], [k.ConstraintSeeds, "A seeds constraint was violated"], [k.ConstraintExecutable, "An executable constraint was violated"], [k.ConstraintState, "Deprecated Error, feel free to replace with something else"], [k.ConstraintAssociated, "An associated constraint was violated"], [k.ConstraintAssociatedInit, "An associated init constraint was violated"], [k.ConstraintClose, "A close constraint was violated"], [k.ConstraintAddress, "An address constraint was violated"], [k.ConstraintZero, "Expected zero account discriminant"], [k.ConstraintTokenMint, "A token mint constraint was violated"], [k.ConstraintTokenOwner, "A token owner constraint was violated"], [k.ConstraintMintMintAuthority, "A mint mint authority constraint was violated"], [k.ConstraintMintFreezeAuthority, "A mint freeze authority constraint was violated"], [k.ConstraintMintDecimals, "A mint decimals constraint was violated"], [k.ConstraintSpace, "A space constraint was violated"], [k.ConstraintAccountIsNone, "A required account for the constraint is None"], [k.RequireViolated, "A require expression was violated"], [k.RequireEqViolated, "A require_eq expression was violated"], [k.RequireKeysEqViolated, "A require_keys_eq expression was violated"], [k.RequireNeqViolated, "A require_neq expression was violated"], [k.RequireKeysNeqViolated, "A require_keys_neq expression was violated"], [k.RequireGtViolated, "A require_gt expression was violated"], [k.RequireGteViolated, "A require_gte expression was violated"], [k.AccountDiscriminatorAlreadySet, "The account discriminator was already set on this account"], [k.AccountDiscriminatorNotFound, "No 8 byte discriminator was found on the account"], [k.AccountDiscriminatorMismatch, "8 byte discriminator did not match what was expected"], [k.AccountDidNotDeserialize, "Failed to deserialize the account"], [k.AccountDidNotSerialize, "Failed to serialize the account"], [k.AccountNotEnoughKeys, "Not enough account keys given to the instruction"], [k.AccountNotMutable, "The given account is not mutable"], [k.AccountOwnedByWrongProgram, "The given account is owned by a different program than expected"], [k.InvalidProgramId, "Program ID was not as expected"], [k.InvalidProgramExecutable, "Program account is not executable"], [k.AccountNotSigner, "The given account did not sign"], [k.AccountNotSystemOwned, "The given account is not owned by the system program"], [k.AccountNotInitialized, "The program expected this account to be already initialized"], [k.AccountNotProgramData, "The given account is not a program data account"], [k.AccountNotAssociatedTokenAccount, "The given account is not the associated token account"], [k.AccountSysvarMismatch, "The given public key does not match the required sysvar"], [k.AccountReallocExceedsLimit, "The account reallocation exceeds the MAX_PERMITTED_DATA_INCREASE limit"], [k.AccountDuplicateReallocs, "The account was duplicated for more than one reallocation"], [k.DeclaredProgramIdMismatch, "The declared program id does not match the actual program id"], [k.Deprecated, "The API being used is deprecated and should no longer be used"]])
  , Kr = function() {
    return Kr = Object.assign || function(t) {
        for (var e, r = 1, i = arguments.length; r < i; r++) {
            e = arguments[r];
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        }
        return t
    }
    ,
    Kr.apply(this, arguments)
}
  , Hr = function() {
    return Hr = Object.assign || function(t) {
        for (var e, r = 1, i = arguments.length; r < i; r++) {
            e = arguments[r];
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
        }
        return t
    }
    ,
    Hr.apply(this, arguments)
};
function Fl(n) {
    return n.toLowerCase()
}
var jl = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g]
  , Vl = /[^A-Z0-9]+/gi;
function Kl(n, t) {
    t === void 0 && (t = {});
    for (var e = t.splitRegexp, r = e === void 0 ? jl : e, i = t.stripRegexp, o = i === void 0 ? Vl : i, a = t.transform, s = a === void 0 ? Fl : a, u = t.delimiter, c = u === void 0 ? " " : u, l = La(La(n, r, "$1\0$2"), o, "\0"), _ = 0, h = l.length; l.charAt(_) === "\0"; )
        _++;
    for (; l.charAt(h - 1) === "\0"; )
        h--;
    return l.slice(_, h).split("\0").map(s).join(c)
}
function La(n, t, e) {
    return t instanceof RegExp ? n.replace(t, e) : t.reduce(function(r, i) {
        return r.replace(i, e)
    }, n)
}
function Hl(n, t) {
    return t === void 0 && (t = {}),
    Kl(n, Hr({
        delimiter: "."
    }, t))
}
function ql(n, t) {
    return t === void 0 && (t = {}),
    Hl(n, Kr({
        delimiter: "_"
    }, t))
}
var Ye = class n {
    static fieldLayout(t, e) {
        let r = t.name !== void 0 ? (0,
        M.default)(t.name) : void 0;
        switch (t.type) {
        case "bool":
            return m.bool(r);
        case "u8":
            return m.u8(r);
        case "i8":
            return m.i8(r);
        case "u16":
            return m.u16(r);
        case "i16":
            return m.i16(r);
        case "u32":
            return m.u32(r);
        case "i32":
            return m.i32(r);
        case "f32":
            return m.f32(r);
        case "u64":
            return m.u64(r);
        case "i64":
            return m.i64(r);
        case "f64":
            return m.f64(r);
        case "u128":
            return m.u128(r);
        case "i128":
            return m.i128(r);
        case "u256":
            return m.u256(r);
        case "i256":
            return m.i256(r);
        case "bytes":
            return m.vecU8(r);
        case "string":
            return m.str(r);
        case "publicKey":
            return m.publicKey(r);
        default:
            {
                if ("vec"in t.type)
                    return m.vec(n.fieldLayout({
                        name: void 0,
                        type: t.type.vec
                    }, e), r);
                if ("option"in t.type)
                    return m.option(n.fieldLayout({
                        name: void 0,
                        type: t.type.option
                    }, e), r);
                if ("defined"in t.type) {
                    if (!e)
                        throw new lt("User defined types not provided");
                    let i = t.type.defined
                      , o = e.filter(a => a.name === i);
                    if (o.length !== 1)
                        throw new lt(`Type not found: ${JSON.stringify(t)}`);
                    return n.typeDefLayout(o[0], e, r)
                } else if ("array"in t.type) {
                    let i = t.type.array[0]
                      , o = t.type.array[1]
                      , a = n.fieldLayout({
                        name: void 0,
                        type: i
                    }, e);
                    return m.array(a, o, r)
                } else
                    throw new Error(`Not yet implemented: ${t}`)
            }
        }
    }
    static typeDefLayout(t, e=[], r) {
        switch (t.type.kind) {
        case "struct":
            {
                let i = t.type.fields.map(o => n.fieldLayout(o, e));
                return m.struct(i, r)
            }
        case "enum":
            {
                let i = t.type.variants.map(o => {
                    let a = (0,
                    M.default)(o.name);
                    if (!o.fields)
                        return m.struct([], a);
                    let s = o.fields.map( (u, c) => u?.name ? n.fieldLayout(u, e) : n.fieldLayout({
                        type: u,
                        name: c.toString()
                    }, e));
                    return m.struct(s, a)
                }
                );
                return r !== void 0 ? m.rustEnum(i).replicate(r) : m.rustEnum(i, r)
            }
        case "alias":
            return n.fieldLayout({
                type: t.type.value,
                name: t.name
            }, e)
        }
    }
}
  , Ra = "global"
  , qr = class n {
    constructor(t) {
        this.idl = t,
        this.ixLayout = n.parseIxLayout(t);
        let e = new Map;
        t.instructions.forEach(r => {
            let i = Oa(Ra, r.name);
            e.set(We.default.encode(i), {
                layout: this.ixLayout.get(r.name),
                name: r.name
            })
        }
        ),
        this.sighashLayouts = e
    }
    encode(t, e) {
        return this._encode(Ra, t, e)
    }
    _encode(t, e, r) {
        let i = J.Buffer.alloc(1e3)
          , o = (0,
        M.default)(e)
          , a = this.ixLayout.get(o);
        if (!a)
            throw new Error(`Unknown method: ${o}`);
        let s = a.encode(r, i)
          , u = i.slice(0, s);
        return J.Buffer.concat([Oa(t, e), u])
    }
    static parseIxLayout(t) {
        let e = t.instructions.map(r => {
            let i = r.args.map(a => {
                var s, u;
                return Ye.fieldLayout(a, Array.from([...(s = t.accounts) !== null && s !== void 0 ? s : [], ...(u = t.types) !== null && u !== void 0 ? u : []]))
            }
            )
              , o = (0,
            M.default)(r.name);
            return [o, m.struct(i, o)]
        }
        );
        return new Map(e)
    }
    decode(t, e="hex") {
        typeof t == "string" && (t = e === "hex" ? J.Buffer.from(t, "hex") : We.default.decode(t));
        let r = We.default.encode(t.slice(0, 8))
          , i = t.slice(8)
          , o = this.sighashLayouts.get(r);
        return o ? {
            data: o.layout.decode(i),
            name: o.name
        } : null
    }
    format(t, e) {
        return Gr.format(t, e, this.idl)
    }
}
  , Gr = class n {
    static format(t, e, r) {
        let i = r.instructions.filter(u => t.name === u.name)[0];
        if (i === void 0)
            return console.error("Invalid instruction given"),
            null;
        let o = i.args.map(u => ({
            name: u.name,
            type: n.formatIdlType(u.type),
            data: n.formatIdlData(u, t.data[u.name], r.types)
        }))
          , a = n.flattenIdlAccounts(i.accounts)
          , s = e.map( (u, c) => c < a.length ? de({
            name: a[c].name
        }, u) : de({
            name: void 0
        }, u));
        return {
            args: o,
            accounts: s
        }
    }
    static formatIdlType(t) {
        if (typeof t == "string")
            return t;
        if ("vec"in t)
            return `Vec<${this.formatIdlType(t.vec)}>`;
        if ("option"in t)
            return `Option<${this.formatIdlType(t.option)}>`;
        if ("defined"in t)
            return t.defined;
        if ("array"in t)
            return `Array<${t.array[0]}; ${t.array[1]}>`;
        throw new Error(`Unknown IDL type: ${t}`)
    }
    static formatIdlData(t, e, r) {
        if (typeof t.type == "string")
            return e.toString();
        if (t.type.hasOwnProperty("vec"))
            return "[" + e.map(i => this.formatIdlData({
                name: "",
                type: t.type.vec
            }, i)).join(", ") + "]";
        if (t.type.hasOwnProperty("option"))
            return e === null ? "null" : this.formatIdlData({
                name: "",
                type: t.type.option
            }, e, r);
        if (t.type.hasOwnProperty("defined")) {
            if (r === void 0)
                throw new Error("User defined types not provided");
            let i = r.filter(o => o.name === t.type.defined);
            if (i.length !== 1)
                throw new Error(`Type not found: ${t.type.defined}`);
            return n.formatIdlDataDefined(i[0], e, r)
        }
        return "unknown"
    }
    static formatIdlDataDefined(t, e, r) {
        switch (t.type.kind) {
        case "struct":
            {
                let i = t.type;
                return "{ " + Object.keys(e).map(a => {
                    let s = i.fields.find(u => u.name === a);
                    if (!s)
                        throw new Error("Unable to find type");
                    return a + ": " + n.formatIdlData(s, e[a], r)
                }
                ).join(", ") + " }"
            }
        case "enum":
            {
                if (t.type.variants.length === 0)
                    return "{}";
                if (t.type.variants[0].name) {
                    let i = t.type.variants
                      , o = Object.keys(e)[0]
                      , a = e[o]
                      , s = Object.keys(a).map(c => {
                        var l;
                        let _ = a[c]
                          , h = (l = i[o]) === null || l === void 0 ? void 0 : l.find(d => d.name === c);
                        if (!h)
                            throw new Error("Unable to find variant");
                        return c + ": " + n.formatIdlData(h, _, r)
                    }
                    ).join(", ")
                      , u = (0,
                    M.default)(o, {
                        pascalCase: !0
                    });
                    return s.length === 0 ? u : `${u} { ${s} }`
                } else
                    return "Tuple formatting not yet implemented"
            }
        case "alias":
            return n.formatIdlType(t.type.value)
        }
    }
    static flattenIdlAccounts(t, e) {
        return t.map(r => {
            let i = Gl(r.name);
            if (r.hasOwnProperty("accounts")) {
                let o = e ? `${e} > ${i}` : i;
                return n.flattenIdlAccounts(r.accounts, o)
            } else
                return Be(de({}, r), {
                    name: e ? `${e} > ${i}` : i
                })
        }
        ).flat()
    }
}
;
function Gl(n) {
    let t = n.replace(/([A-Z])/g, " $1");
    return t.charAt(0).toUpperCase() + t.slice(1)
}
function Oa(n, t) {
    let e = ql(t)
      , r = `${n}:${e}`;
    return J.Buffer.from(ht(r).slice(0, 8))
}
function Ui(n, t) {
    switch (t.type.kind) {
    case "struct":
        return t.type.fields.map(e => Ge(n, e.type)).reduce( (e, r) => e + r, 0);
    case "enum":
        {
            let e = t.type.variants.map(r => r.fields ? r.fields.map(i => typeof i == "object" && "name"in i ? Ge(n, i.type) : Ge(n, i)).reduce( (i, o) => i + o, 0) : 0);
            return Math.max(...e) + 1
        }
    case "alias":
        return Ge(n, t.type.value)
    }
}
function Ge(n, t) {
    var e, r;
    switch (t) {
    case "bool":
        return 1;
    case "u8":
        return 1;
    case "i8":
        return 1;
    case "i16":
        return 2;
    case "u16":
        return 2;
    case "u32":
        return 4;
    case "i32":
        return 4;
    case "f32":
        return 4;
    case "u64":
        return 8;
    case "i64":
        return 8;
    case "f64":
        return 8;
    case "u128":
        return 16;
    case "i128":
        return 16;
    case "u256":
        return 32;
    case "i256":
        return 32;
    case "bytes":
        return 1;
    case "string":
        return 1;
    case "publicKey":
        return 32;
    default:
        if ("vec"in t)
            return 1;
        if ("option"in t)
            return 1 + Ge(n, t.option);
        if ("coption"in t)
            return 4 + Ge(n, t.coption);
        if ("defined"in t) {
            let i = (r = (e = n.types) === null || e === void 0 ? void 0 : e.filter(a => a.name === t.defined)) !== null && r !== void 0 ? r : [];
            if (i.length !== 1)
                throw new lt(`Type not found: ${JSON.stringify(t)}`);
            let o = i[0];
            return Ui(n, o)
        }
        if ("array"in t) {
            let i = t.array[0]
              , o = t.array[1];
            return Ge(n, i) * o
        }
        throw new Error(`Invalid type ${JSON.stringify(t)}`)
    }
}
var Wr = 8;
function Va(n) {
    return Buffer.from(ht(n).slice(0, Wr))
}
var Yr = class n {
    constructor(t) {
        if (t.accounts === void 0) {
            this.accountLayouts = new Map;
            return
        }
        let e = t.accounts.map(r => [r.name, Ye.typeDefLayout(r, t.types)]);
        this.accountLayouts = new Map(e),
        this.idl = t
    }
    encode(t, e) {
        return v(this, null, function*() {
            let r = J.Buffer.alloc(1e3)
              , i = this.accountLayouts.get(t);
            if (!i)
                throw new Error(`Unknown account: ${t}`);
            let o = i.encode(e, r)
              , a = r.slice(0, o)
              , s = n.accountDiscriminator(t);
            return J.Buffer.concat([s, a])
        })
    }
    decode(t, e) {
        if (n.accountDiscriminator(t).compare(e.slice(0, 8)))
            throw new Error("Invalid account discriminator");
        return this.decodeUnchecked(t, e)
    }
    decodeAny(t) {
        let e = t.slice(0, 8)
          , r = Array.from(this.accountLayouts.keys()).find(i => n.accountDiscriminator(i).equals(e));
        if (!r)
            throw new Error("Account descriminator not found");
        return this.decodeUnchecked(r, t)
    }
    decodeUnchecked(t, e) {
        let r = e.subarray(Wr)
          , i = this.accountLayouts.get(t);
        if (!i)
            throw new Error(`Unknown account: ${t}`);
        return i.decode(r)
    }
    memcmp(t, e) {
        let r = n.accountDiscriminator(t);
        return {
            offset: 0,
            bytes: We.default.encode(e ? J.Buffer.concat([r, e]) : r)
        }
    }
    size(t) {
        var e;
        return Wr + ((e = Ui(this.idl, t)) !== null && e !== void 0 ? e : 0)
    }
    static accountDiscriminator(t) {
        let e = `account:${(0,
        M.default)(t, {
            pascalCase: !0,
            preserveConsecutiveUppercase: !0
        })}`;
        return Va(e)
    }
}
  , Xr = class {
    constructor(t) {
        if (t.events === void 0) {
            this.layouts = new Map;
            return
        }
        let e = t.events.map(r => {
            let i = {
                name: r.name,
                type: {
                    kind: "struct",
                    fields: r.fields.map(o => ({
                        name: o.name,
                        type: o.type
                    }))
                }
            };
            return [r.name, Ye.typeDefLayout(i, t.types)]
        }
        );
        this.layouts = new Map(e),
        this.discriminators = new Map(t.events === void 0 ? [] : t.events.map(r => [Ur(Wl(r.name)), r.name]))
    }
    decode(t) {
        let e;
        try {
            e = Di(t)
        } catch {
            return null
        }
        let r = Ur(e.slice(0, 8))
          , i = this.discriminators.get(r);
        if (i === void 0)
            return null;
        let o = this.layouts.get(i);
        if (!o)
            throw new Error(`Unknown event: ${i}`);
        return {
            data: o.decode(e.slice(8)),
            name: i
        }
    }
}
;
function Wl(n) {
    return Va(`event:${n}`)
}
var Jr = class {
    constructor(t) {
        if (t.types === void 0) {
            this.typeLayouts = new Map;
            return
        }
        let e = t.types.map(r => [r.name, Ye.typeDefLayout(r, t.types)]);
        this.typeLayouts = new Map(e),
        this.idl = t
    }
    encode(t, e) {
        let r = J.Buffer.alloc(1e3)
          , i = this.typeLayouts.get(t);
        if (!i)
            throw new Error(`Unknown type: ${t}`);
        let o = i.encode(e, r);
        return r.slice(0, o)
    }
    decode(t, e) {
        let r = this.typeLayouts.get(t);
        if (!r)
            throw new Error(`Unknown type: ${t}`);
        return r.decode(e)
    }
}
  , Tn = class {
    constructor(t) {
        this.instruction = new qr(t),
        this.accounts = new Yr(t),
        this.events = new Xr(t),
        this.types = new Jr(t)
    }
}
  , Yl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xl(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var Q = class {
    constructor(t, e) {
        if (!Number.isInteger(t))
            throw new TypeError("span must be an integer");
        this.span = t,
        this.property = e
    }
    makeDestinationObject() {
        return {}
    }
    decode(t, e) {
        throw new Error("Layout is abstract")
    }
    encode(t, e, r) {
        throw new Error("Layout is abstract")
    }
    getSpan(t, e) {
        if (0 > this.span)
            throw new RangeError("indeterminate span");
        return this.span
    }
    replicate(t) {
        let e = Object.create(this.constructor.prototype);
        return Object.assign(e, this),
        e.property = t,
        e
    }
    fromArray(t) {}
}
  , Bn = Q;
function Jl(n, t) {
    return t.property ? n + "[" + t.property + "]" : n
}
var Se = class extends Q {
    isCount() {
        throw new Error("ExternalLayout is abstract")
    }
}
  , Ln = class extends Se {
    constructor(t, e, r) {
        if (!(t instanceof Q))
            throw new TypeError("layout must be a Layout");
        if (e === void 0)
            e = 0;
        else if (!Number.isInteger(e))
            throw new TypeError("offset must be integer or undefined");
        super(t.span, r || t.property),
        this.layout = t,
        this.offset = e
    }
    isCount() {
        return this.layout instanceof dt || this.layout instanceof Rn
    }
    decode(t, e) {
        return e === void 0 && (e = 0),
        this.layout.decode(t, e + this.offset)
    }
    encode(t, e, r) {
        return r === void 0 && (r = 0),
        this.layout.encode(t, e, r + this.offset)
    }
}
  , dt = class extends Q {
    constructor(t, e) {
        if (super(t, e),
        6 < this.span)
            throw new RangeError("span must not exceed 6 bytes")
    }
    decode(t, e) {
        return e === void 0 && (e = 0),
        t.readUIntLE(e, this.span)
    }
    encode(t, e, r) {
        return r === void 0 && (r = 0),
        e.writeUIntLE(t, r, this.span),
        this.span
    }
}
  , Rn = class extends Q {
    constructor(t, e) {
        if (super(t, e),
        6 < this.span)
            throw new RangeError("span must not exceed 6 bytes")
    }
    decode(t, e) {
        return e === void 0 && (e = 0),
        t.readUIntBE(e, this.span)
    }
    encode(t, e, r) {
        return r === void 0 && (r = 0),
        e.writeUIntBE(t, r, this.span),
        this.span
    }
}
  , Qr = Math.pow(2, 32);
function Ka(n) {
    let t = Math.floor(n / Qr)
      , e = n - t * Qr;
    return {
        hi32: t,
        lo32: e
    }
}
function Ha(n, t) {
    return n * Qr + t
}
var ei = class extends Q {
    constructor(t) {
        super(8, t)
    }
    decode(t, e) {
        e === void 0 && (e = 0);
        let r = t.readUInt32LE(e)
          , i = t.readUInt32LE(e + 4);
        return Ha(i, r)
    }
    encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = Ka(t);
        return e.writeUInt32LE(i.lo32, r),
        e.writeUInt32LE(i.hi32, r + 4),
        8
    }
}
  , ti = class extends Q {
    constructor(t) {
        super(8, t)
    }
    decode(t, e) {
        e === void 0 && (e = 0);
        let r = t.readUInt32LE(e)
          , i = t.readInt32LE(e + 4);
        return Ha(i, r)
    }
    encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = Ka(t);
        return e.writeUInt32LE(i.lo32, r),
        e.writeInt32LE(i.hi32, r + 4),
        8
    }
}
  , ni = class extends Q {
    constructor(t, e, r) {
        if (!(Array.isArray(t) && t.reduce( (o, a) => o && a instanceof Q, !0)))
            throw new TypeError("fields must be array of Layout instances");
        typeof e == "boolean" && r === void 0 && (r = e,
        e = void 0);
        for (let o of t)
            if (0 > o.span && o.property === void 0)
                throw new Error("fields cannot contain unnamed variable-length layout");
        let i = -1;
        try {
            i = t.reduce( (o, a) => o + a.getSpan(), 0)
        } catch {}
        super(i, e),
        this.fields = t,
        this.decodePrefixes = !!r
    }
    getSpan(t, e) {
        if (0 <= this.span)
            return this.span;
        e === void 0 && (e = 0);
        let r = 0;
        try {
            r = this.fields.reduce( (i, o) => {
                let a = o.getSpan(t, e);
                return e += a,
                i + a
            }
            , 0)
        } catch {
            throw new RangeError("indeterminate span")
        }
        return r
    }
    decode(t, e) {
        e === void 0 && (e = 0);
        let r = this.makeDestinationObject();
        for (let i of this.fields)
            if (i.property !== void 0 && (r[i.property] = i.decode(t, e)),
            e += i.getSpan(t, e),
            this.decodePrefixes && t.length === e)
                break;
        return r
    }
    encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = r
          , o = 0
          , a = 0;
        for (let s of this.fields) {
            let u = s.span;
            if (a = 0 < u ? u : 0,
            s.property !== void 0) {
                let c = t[s.property];
                c !== void 0 && (a = s.encode(c, e, r),
                0 > u && (u = s.getSpan(e, r)))
            }
            o = r,
            r += u
        }
        return o + a - i
    }
    fromArray(t) {
        let e = this.makeDestinationObject();
        for (let r of this.fields)
            r.property !== void 0 && 0 < t.length && (e[r.property] = t.shift());
        return e
    }
    layoutFor(t) {
        if (typeof t != "string")
            throw new TypeError("property must be string");
        for (let e of this.fields)
            if (e.property === t)
                return e
    }
    offsetOf(t) {
        if (typeof t != "string")
            throw new TypeError("property must be string");
        let e = 0;
        for (let r of this.fields) {
            if (r.property === t)
                return e;
            0 > r.span ? e = -1 : 0 <= e && (e += r.span)
        }
    }
}
  , On = class {
    constructor(t) {
        this.property = t
    }
    decode() {
        throw new Error("UnionDiscriminator is abstract")
    }
    encode() {
        throw new Error("UnionDiscriminator is abstract")
    }
}
  , Dn = class extends On {
    constructor(t, e) {
        if (!(t instanceof Se && t.isCount()))
            throw new TypeError("layout must be an unsigned integer ExternalLayout");
        super(e || t.property || "variant"),
        this.layout = t
    }
    decode(t, e) {
        return this.layout.decode(t, e)
    }
    encode(t, e, r) {
        return this.layout.encode(t, e, r)
    }
}
  , Cn = class extends Q {
    constructor(t, e, r) {
        let i = t instanceof dt || t instanceof Rn;
        if (i)
            t = new Dn(new Ln(t));
        else if (t instanceof Se && t.isCount())
            t = new Dn(t);
        else if (!(t instanceof On))
            throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
        if (e === void 0 && (e = null),
        !(e === null || e instanceof Q))
            throw new TypeError("defaultLayout must be null or a Layout");
        if (e !== null) {
            if (0 > e.span)
                throw new Error("defaultLayout must have constant span");
            e.property === void 0 && (e = e.replicate("content"))
        }
        let o = -1;
        e && (o = e.span,
        0 <= o && i && (o += t.layout.span)),
        super(o, r),
        this.discriminator = t,
        this.usesPrefixDiscriminator = i,
        this.defaultLayout = e,
        this.registry = {};
        let a = this.defaultGetSourceVariant.bind(this);
        this.getSourceVariant = function(s) {
            return a(s)
        }
        ,
        this.configGetSourceVariant = function(s) {
            a = s.bind(this)
        }
    }
    getSpan(t, e) {
        if (0 <= this.span)
            return this.span;
        e === void 0 && (e = 0);
        let r = this.getVariant(t, e);
        if (!r)
            throw new Error("unable to determine span for unrecognized variant");
        return r.getSpan(t, e)
    }
    defaultGetSourceVariant(t) {
        if (t.hasOwnProperty(this.discriminator.property)) {
            if (this.defaultLayout && t.hasOwnProperty(this.defaultLayout.property))
                return;
            let e = this.registry[t[this.discriminator.property]];
            if (e && (!e.layout || t.hasOwnProperty(e.property)))
                return e
        } else
            for (let e in this.registry) {
                let r = this.registry[e];
                if (t.hasOwnProperty(r.property))
                    return r
            }
        throw new Error("unable to infer src variant")
    }
    decode(t, e) {
        e === void 0 && (e = 0);
        let r, i = this.discriminator, o = i.decode(t, e), a = this.registry[o];
        if (a === void 0) {
            let s = 0;
            a = this.defaultLayout,
            this.usesPrefixDiscriminator && (s = i.layout.span),
            r = this.makeDestinationObject(),
            r[i.property] = o,
            r[a.property] = this.defaultLayout.decode(t, e + s)
        } else
            r = a.decode(t, e);
        return r
    }
    encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = this.getSourceVariant(t);
        if (i === void 0) {
            let o = this.discriminator
              , a = this.defaultLayout
              , s = 0;
            return this.usesPrefixDiscriminator && (s = o.layout.span),
            o.encode(t[o.property], e, r),
            s + a.encode(t[a.property], e, r + s)
        }
        return i.encode(t, e, r)
    }
    addVariant(t, e, r) {
        let i = new ri(this,t,e,r);
        return this.registry[t] = i,
        i
    }
    getVariant(t, e) {
        let r = t;
        return Buffer.isBuffer(t) && (e === void 0 && (e = 0),
        r = this.discriminator.decode(t, e)),
        this.registry[r]
    }
}
  , ri = class extends Q {
    constructor(t, e, r, i) {
        if (!(t instanceof Cn))
            throw new TypeError("union must be a Union");
        if (!Number.isInteger(e) || 0 > e)
            throw new TypeError("variant must be a (non-negative) integer");
        if (typeof r == "string" && i === void 0 && (i = r,
        r = null),
        r) {
            if (!(r instanceof Q))
                throw new TypeError("layout must be a Layout");
            if (t.defaultLayout !== null && 0 <= r.span && r.span > t.defaultLayout.span)
                throw new Error("variant span exceeds span of containing union");
            if (typeof i != "string")
                throw new TypeError("variant must have a String property")
        }
        let o = t.span;
        0 > t.span && (o = r ? r.span : 0,
        0 <= o && t.usesPrefixDiscriminator && (o += t.discriminator.layout.span)),
        super(o, i),
        this.union = t,
        this.variant = e,
        this.layout = r || null
    }
    getSpan(t, e) {
        if (0 <= this.span)
            return this.span;
        e === void 0 && (e = 0);
        let r = 0;
        return this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span),
        r + this.layout.getSpan(t, e + r)
    }
    decode(t, e) {
        let r = this.makeDestinationObject();
        if (e === void 0 && (e = 0),
        this !== this.union.getVariant(t, e))
            throw new Error("variant mismatch");
        let i = 0;
        return this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span),
        this.layout ? r[this.property] = this.layout.decode(t, e + i) : this.property ? r[this.property] = !0 : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant),
        r
    }
    encode(t, e, r) {
        r === void 0 && (r = 0);
        let i = 0;
        if (this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span),
        this.layout && !t.hasOwnProperty(this.property))
            throw new TypeError("variant lacks property " + this.property);
        this.union.discriminator.encode(this.variant, e, r);
        let o = i;
        if (this.layout && (this.layout.encode(t[this.property], e, r + i),
        o += this.layout.getSpan(e, r + i),
        0 <= this.union.span && o > this.union.span))
            throw new Error("encoded variant overruns containing union");
        return o
    }
    fromArray(t) {
        if (this.layout)
            return this.layout.fromArray(t)
    }
}
  , ii = class extends Q {
    constructor(t, e) {
        if (!(t instanceof Se && t.isCount() || Number.isInteger(t) && 0 <= t))
            throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
        let r = -1;
        t instanceof Se || (r = t),
        super(r, e),
        this.length = t
    }
    getSpan(t, e) {
        let r = this.span;
        return 0 > r && (r = this.length.decode(t, e)),
        r
    }
    decode(t, e) {
        e === void 0 && (e = 0);
        let r = this.span;
        return 0 > r && (r = this.length.decode(t, e)),
        t.slice(e, e + r)
    }
    encode(t, e, r) {
        let i = this.length;
        if (this.length instanceof Se && (i = t.length),
        !(Buffer.isBuffer(t) && i === t.length))
            throw new TypeError(Jl("Blob.encode", this) + " requires (length " + i + ") Buffer as src");
        if (r + i > e.length)
            throw new RangeError("encoding overruns Buffer");
        return e.write(t.toString("hex"), r, i, "hex"),
        this.length instanceof Se && this.length.encode(i, e, r),
        i
    }
}
  , Ql = (n, t, e) => new Ln(n,t,e)
  , ed = n => new dt(1,n)
  , ke = n => new dt(4,n)
  , td = n => new ei(n)
  , Ie = n => new ti(n)
  , V = (n, t, e) => new ni(n,t,e)
  , qa = (n, t, e) => new Cn(n,t,e)
  , Vt = (n, t) => new ii(n,t)
  , oi = class {
    constructor(t) {}
    encode(t, e) {
        switch ((0,
        M.default)(t)) {
        case "createAccount":
            return nd(e);
        case "assign":
            return rd(e);
        case "transfer":
            return id(e);
        case "createAccountWithSeed":
            return od(e);
        case "advanceNonceAccount":
            return sd(e);
        case "withdrawNonceAccount":
            return cd(e);
        case "initializeNonceAccount":
            return ad(e);
        case "authorizeNonceAccount":
            return ud(e);
        case "allocate":
            return ld(e);
        case "allocateWithSeed":
            return dd(e);
        case "assignWithSeed":
            return fd(e);
        case "transferWithSeed":
            return hd(e);
        default:
            throw new Error(`Invalid instruction: ${t}`)
        }
    }
    encodeState(t, e) {
        throw new Error("System does not have state")
    }
}
  , ai = class extends Bn {
    constructor(t) {
        super(-1, t),
        this.property = t,
        this.layout = V([ke("length"), ke("lengthPadding"), Vt(Ql(ke(), -8), "chars")], this.property)
    }
    encode(t, e, r=0) {
        if (t == null)
            return this.layout.span;
        let i = {
            chars: Buffer.from(t, "utf8")
        };
        return this.layout.encode(i, e, r)
    }
    decode(t, e=0) {
        return this.layout.decode(t, e).chars.toString()
    }
    getSpan(t, e=0) {
        return ke().span + ke().span + new Oi.default(new Uint8Array(t).slice(e, e + 4),10,"le").toNumber()
    }
}
;
function Un(n) {
    return new ai(n)
}
function ue(n) {
    return Vt(32, n)
}
function nd({lamports: n, space: t, owner: e}) {
    return le({
        createAccount: {
            lamports: n,
            space: t,
            owner: e.toBuffer()
        }
    })
}
function rd({owner: n}) {
    return le({
        assign: {
            owner: n.toBuffer()
        }
    })
}
function id({lamports: n}) {
    return le({
        transfer: {
            lamports: n
        }
    })
}
function od({base: n, seed: t, lamports: e, space: r, owner: i}) {
    return le({
        createAccountWithSeed: {
            base: n.toBuffer(),
            seed: t,
            lamports: e,
            space: r,
            owner: i.toBuffer()
        }
    }, H.getVariant(3).span + t.length)
}
function ad({authorized: n}) {
    return le({
        initializeNonceAccount: {
            authorized: n.toBuffer()
        }
    })
}
function sd({authorized: n}) {
    return le({
        advanceNonceAccount: {
            authorized: n.toBuffer()
        }
    })
}
function cd({lamports: n}) {
    return le({
        withdrawNonceAccount: {
            lamports: n
        }
    })
}
function ud({authorized: n}) {
    return le({
        authorizeNonceAccount: {
            authorized: n.toBuffer()
        }
    })
}
function ld({space: n}) {
    return le({
        allocate: {
            space: n
        }
    })
}
function dd({base: n, seed: t, space: e, owner: r}) {
    return le({
        allocateWithSeed: {
            base: n.toBuffer(),
            seed: t,
            space: e,
            owner: r.toBuffer()
        }
    }, H.getVariant(9).span + t.length)
}
function fd({base: n, seed: t, owner: e}) {
    return le({
        assignWithSeed: {
            base: n.toBuffer(),
            seed: t,
            owner: e.toBuffer()
        }
    }, H.getVariant(10).span + t.length)
}
function hd({lamports: n, seed: t, owner: e}) {
    return le({
        transferWithSeed: {
            lamports: n,
            seed: t,
            owner: e.toBuffer()
        }
    }, H.getVariant(11).span + t.length)
}
var H = qa(ke("instruction"));
H.addVariant(0, V([Ie("lamports"), Ie("space"), ue("owner")]), "createAccount");
H.addVariant(1, V([ue("owner")]), "assign");
H.addVariant(2, V([Ie("lamports")]), "transfer");
H.addVariant(3, V([ue("base"), Un("seed"), Ie("lamports"), Ie("space"), ue("owner")]), "createAccountWithSeed");
H.addVariant(4, V([ue("authorized")]), "advanceNonceAccount");
H.addVariant(5, V([Ie("lamports")]), "withdrawNonceAccount");
H.addVariant(6, V([ue("authorized")]), "initializeNonceAccount");
H.addVariant(7, V([ue("authorized")]), "authorizeNonceAccount");
H.addVariant(8, V([Ie("space")]), "allocate");
H.addVariant(9, V([ue("base"), Un("seed"), Ie("space"), ue("owner")]), "allocateWithSeed");
H.addVariant(10, V([ue("base"), Un("seed"), ue("owner")]), "assignWithSeed");
H.addVariant(11, V([Ie("lamports"), Un("seed"), ue("owner")]), "transferWithSeed");
function le(n, t) {
    let e = Buffer.alloc(t ?? pd)
      , r = H.encode(n, e);
    return t === void 0 ? e.slice(0, r) : e
}
var pd = Math.max(...Object.values(H.registry).map(n => n.span))
  , si = class {
    constructor(t) {
        this.idl = t
    }
    encode(t, e) {
        return v(this, null, function*() {
            switch (t) {
            case "nonce":
                {
                    let r = Buffer.alloc(Vn)
                      , i = Ga.encode(e, r);
                    return r.slice(0, i)
                }
            default:
                throw new Error(`Invalid account name: ${t}`)
            }
        })
    }
    decode(t, e) {
        return this.decodeUnchecked(t, e)
    }
    decodeUnchecked(t, e) {
        switch (t) {
        case "nonce":
            return _d(e);
        default:
            throw new Error(`Invalid account name: ${t}`)
        }
    }
    memcmp(t, e) {
        switch (t) {
        case "nonce":
            return {
                dataSize: Vn
            };
        default:
            throw new Error(`Invalid account name: ${t}`)
        }
    }
    size(t) {
        var e;
        return (e = Ui(this.idl, t)) !== null && e !== void 0 ? e : 0
    }
}
;
function _d(n) {
    return Ga.decode(n)
}
var ci = class extends Bn {
    constructor(t, e, r, i) {
        super(t.span, i),
        this.layout = t,
        this.decoder = e,
        this.encoder = r
    }
    decode(t, e) {
        return this.decoder(this.layout.decode(t, e))
    }
    encode(t, e, r) {
        return this.layout.encode(this.encoder(t), e, r)
    }
    getSpan(t, e) {
        return this.layout.getSpan(t, e)
    }
}
;
function Da(n) {
    return new ci(Vt(32),t => new j(t),t => t.toBuffer(),n)
}
var Ga = V([ke("version"), ke("state"), Da("authorizedPubkey"), Da("nonce"), V([td("lamportsPerSignature")], "feeCalculator")])
  , ui = class {
    constructor(t) {}
    decode(t) {
        throw new Error("System program does not have events")
    }
}
  , li = class {
    constructor(t) {}
    encode(t, e) {
        throw new Error("System does not have user-defined types")
    }
    decode(t, e) {
        throw new Error("System does not have user-defined types")
    }
}
  , di = class {
    constructor(t) {
        this.instruction = new oi(t),
        this.accounts = new si(t),
        this.events = new ui(t),
        this.types = new li(t)
    }
}
;
function wd(n) {
    return new TextDecoder().decode(ht(n))
}
var gd = Object.freeze({
    __proto__: null,
    hash: wd
});
function yd(n, t, e) {
    let r = J.Buffer.concat([n.toBuffer(), J.Buffer.from(t), e.toBuffer()]);
    return new j(ht(r))
}
function Wa(n, ...t) {
    let e = [J.Buffer.from([97, 110, 99, 104, 111, 114])];
    t.forEach(i => {
        e.push(i instanceof J.Buffer ? i : oe(i).toBuffer())
    }
    );
    let[r] = j.findProgramAddressSync(e, oe(n));
    return r
}
var md = Object.freeze({
    __proto__: null,
    createWithSeedSync: yd,
    associated: Wa
})
  , Mi = new j("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
  , $i = new j("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
function bd({mint: n, owner: t}) {
    return j.findProgramAddressSync([t.toBuffer(), Mi.toBuffer(), n.toBuffer()], $i)[0]
}
var vd = Object.freeze({
    __proto__: null,
    TOKEN_PROGRAM_ID: Mi,
    ASSOCIATED_PROGRAM_ID: $i,
    associatedAddress: bd
})
  , fi = {
    exports: {}
};
(function(n, t) {
    var e = typeof self < "u" ? self : Yl
      , r = function() {
        function o() {
            this.fetch = !1,
            this.DOMException = e.DOMException
        }
        return o.prototype = e,
        new o
    }();
    (function(o) {
        (function(a) {
            var s = {
                searchParams: "URLSearchParams"in o,
                iterable: "Symbol"in o && "iterator"in Symbol,
                blob: "FileReader"in o && "Blob"in o && function() {
                    try {
                        return new Blob,
                        !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData"in o,
                arrayBuffer: "ArrayBuffer"in o
            };
            function u(f) {
                return f && DataView.prototype.isPrototypeOf(f)
            }
            if (s.arrayBuffer)
                var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , l = ArrayBuffer.isView || function(f) {
                    return f && c.indexOf(Object.prototype.toString.call(f)) > -1
                }
                ;
            function _(f) {
                if (typeof f != "string" && (f = String(f)),
                /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(f))
                    throw new TypeError("Invalid character in header field name");
                return f.toLowerCase()
            }
            function h(f) {
                return typeof f != "string" && (f = String(f)),
                f
            }
            function d(f) {
                var w = {
                    next: function() {
                        var D = f.shift();
                        return {
                            done: D === void 0,
                            value: D
                        }
                    }
                };
                return s.iterable && (w[Symbol.iterator] = function() {
                    return w
                }
                ),
                w
            }
            function p(f) {
                this.map = {},
                f instanceof p ? f.forEach(function(w, D) {
                    this.append(D, w)
                }, this) : Array.isArray(f) ? f.forEach(function(w) {
                    this.append(w[0], w[1])
                }, this) : f && Object.getOwnPropertyNames(f).forEach(function(w) {
                    this.append(w, f[w])
                }, this)
            }
            p.prototype.append = function(f, w) {
                f = _(f),
                w = h(w);
                var D = this.map[f];
                this.map[f] = D ? D + ", " + w : w
            }
            ,
            p.prototype.delete = function(f) {
                delete this.map[_(f)]
            }
            ,
            p.prototype.get = function(f) {
                return f = _(f),
                this.has(f) ? this.map[f] : null
            }
            ,
            p.prototype.has = function(f) {
                return this.map.hasOwnProperty(_(f))
            }
            ,
            p.prototype.set = function(f, w) {
                this.map[_(f)] = h(w)
            }
            ,
            p.prototype.forEach = function(f, w) {
                for (var D in this.map)
                    this.map.hasOwnProperty(D) && f.call(w, this.map[D], D, this)
            }
            ,
            p.prototype.keys = function() {
                var f = [];
                return this.forEach(function(w, D) {
                    f.push(D)
                }),
                d(f)
            }
            ,
            p.prototype.values = function() {
                var f = [];
                return this.forEach(function(w) {
                    f.push(w)
                }),
                d(f)
            }
            ,
            p.prototype.entries = function() {
                var f = [];
                return this.forEach(function(w, D) {
                    f.push([D, w])
                }),
                d(f)
            }
            ,
            s.iterable && (p.prototype[Symbol.iterator] = p.prototype.entries);
            function b(f) {
                if (f.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                f.bodyUsed = !0
            }
            function E(f) {
                return new Promise(function(w, D) {
                    f.onload = function() {
                        w(f.result)
                    }
                    ,
                    f.onerror = function() {
                        D(f.error)
                    }
                }
                )
            }
            function S(f) {
                var w = new FileReader
                  , D = E(w);
                return w.readAsArrayBuffer(f),
                D
            }
            function O(f) {
                var w = new FileReader
                  , D = E(w);
                return w.readAsText(f),
                D
            }
            function L(f) {
                for (var w = new Uint8Array(f), D = new Array(w.length), W = 0; W < w.length; W++)
                    D[W] = String.fromCharCode(w[W]);
                return D.join("")
            }
            function g(f) {
                if (f.slice)
                    return f.slice(0);
                var w = new Uint8Array(f.byteLength);
                return w.set(new Uint8Array(f)),
                w.buffer
            }
            function R() {
                return this.bodyUsed = !1,
                this._initBody = function(f) {
                    this._bodyInit = f,
                    f ? typeof f == "string" ? this._bodyText = f : s.blob && Blob.prototype.isPrototypeOf(f) ? this._bodyBlob = f : s.formData && FormData.prototype.isPrototypeOf(f) ? this._bodyFormData = f : s.searchParams && URLSearchParams.prototype.isPrototypeOf(f) ? this._bodyText = f.toString() : s.arrayBuffer && s.blob && u(f) ? (this._bodyArrayBuffer = g(f.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : s.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(f) || l(f)) ? this._bodyArrayBuffer = g(f) : this._bodyText = f = Object.prototype.toString.call(f) : this._bodyText = "",
                    this.headers.get("content-type") || (typeof f == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : s.searchParams && URLSearchParams.prototype.isPrototypeOf(f) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                s.blob && (this.blob = function() {
                    var f = b(this);
                    if (f)
                        return f;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ,
                this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? b(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(S)
                }
                ),
                this.text = function() {
                    var f = b(this);
                    if (f)
                        return f;
                    if (this._bodyBlob)
                        return O(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(L(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                s.formData && (this.formData = function() {
                    return this.text().then(C)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            var F = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function x(f) {
                var w = f.toUpperCase();
                return F.indexOf(w) > -1 ? w : f
            }
            function z(f, w) {
                w = w || {};
                var D = w.body;
                if (f instanceof z) {
                    if (f.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = f.url,
                    this.credentials = f.credentials,
                    w.headers || (this.headers = new p(f.headers)),
                    this.method = f.method,
                    this.mode = f.mode,
                    this.signal = f.signal,
                    !D && f._bodyInit != null && (D = f._bodyInit,
                    f.bodyUsed = !0)
                } else
                    this.url = String(f);
                if (this.credentials = w.credentials || this.credentials || "same-origin",
                (w.headers || !this.headers) && (this.headers = new p(w.headers)),
                this.method = x(w.method || this.method || "GET"),
                this.mode = w.mode || this.mode || null,
                this.signal = w.signal || this.signal,
                this.referrer = null,
                (this.method === "GET" || this.method === "HEAD") && D)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(D)
            }
            z.prototype.clone = function() {
                return new z(this,{
                    body: this._bodyInit
                })
            }
            ;
            function C(f) {
                var w = new FormData;
                return f.trim().split("&").forEach(function(D) {
                    if (D) {
                        var W = D.split("=")
                          , q = W.shift().replace(/\+/g, " ")
                          , U = W.join("=").replace(/\+/g, " ");
                        w.append(decodeURIComponent(q), decodeURIComponent(U))
                    }
                }),
                w
            }
            function T(f) {
                var w = new p
                  , D = f.replace(/\r?\n[\t ]+/g, " ");
                return D.split(/\r?\n/).forEach(function(W) {
                    var q = W.split(":")
                      , U = q.shift().trim();
                    if (U) {
                        var Kt = q.join(":").trim();
                        w.append(U, Kt)
                    }
                }),
                w
            }
            R.call(z.prototype);
            function I(f, w) {
                w || (w = {}),
                this.type = "default",
                this.status = w.status === void 0 ? 200 : w.status,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = "statusText"in w ? w.statusText : "OK",
                this.headers = new p(w.headers),
                this.url = w.url || "",
                this._initBody(f)
            }
            R.call(I.prototype),
            I.prototype.clone = function() {
                return new I(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new p(this.headers),
                    url: this.url
                })
            }
            ,
            I.error = function() {
                var f = new I(null,{
                    status: 0,
                    statusText: ""
                });
                return f.type = "error",
                f
            }
            ;
            var me = [301, 302, 303, 307, 308];
            I.redirect = function(f, w) {
                if (me.indexOf(w) === -1)
                    throw new RangeError("Invalid status code");
                return new I(null,{
                    status: w,
                    headers: {
                        location: f
                    }
                })
            }
            ,
            a.DOMException = o.DOMException;
            try {
                new a.DOMException
            } catch {
                a.DOMException = function(w, D) {
                    this.message = w,
                    this.name = D;
                    var W = Error(w);
                    this.stack = W.stack
                }
                ,
                a.DOMException.prototype = Object.create(Error.prototype),
                a.DOMException.prototype.constructor = a.DOMException
            }
            function Xe(f, w) {
                return new Promise(function(D, W) {
                    var q = new z(f,w);
                    if (q.signal && q.signal.aborted)
                        return W(new a.DOMException("Aborted","AbortError"));
                    var U = new XMLHttpRequest;
                    function Kt() {
                        U.abort()
                    }
                    U.onload = function() {
                        var ft = {
                            status: U.status,
                            statusText: U.statusText,
                            headers: T(U.getAllResponseHeaders() || "")
                        };
                        ft.url = "responseURL"in U ? U.responseURL : ft.headers.get("X-Request-URL");
                        var $n = "response"in U ? U.response : U.responseText;
                        D(new I($n,ft))
                    }
                    ,
                    U.onerror = function() {
                        W(new TypeError("Network request failed"))
                    }
                    ,
                    U.ontimeout = function() {
                        W(new TypeError("Network request failed"))
                    }
                    ,
                    U.onabort = function() {
                        W(new a.DOMException("Aborted","AbortError"))
                    }
                    ,
                    U.open(q.method, q.url, !0),
                    q.credentials === "include" ? U.withCredentials = !0 : q.credentials === "omit" && (U.withCredentials = !1),
                    "responseType"in U && s.blob && (U.responseType = "blob"),
                    q.headers.forEach(function(ft, $n) {
                        U.setRequestHeader($n, ft)
                    }),
                    q.signal && (q.signal.addEventListener("abort", Kt),
                    U.onreadystatechange = function() {
                        U.readyState === 4 && q.signal.removeEventListener("abort", Kt)
                    }
                    ),
                    U.send(typeof q._bodyInit > "u" ? null : q._bodyInit)
                }
                )
            }
            return Xe.polyfill = !0,
            o.fetch || (o.fetch = Xe,
            o.Headers = p,
            o.Request = z,
            o.Response = I),
            a.Headers = p,
            a.Request = z,
            a.Response = I,
            a.fetch = Xe,
            Object.defineProperty(a, "__esModule", {
                value: !0
            }),
            a
        }
        )({})
    }
    )(r),
    r.fetch.ponyfill = !0,
    delete r.fetch.polyfill;
    var i = r;
    t = i.fetch,
    t.default = i.fetch,
    t.fetch = i.fetch,
    t.Headers = i.Headers,
    t.Request = i.Request,
    t.Response = i.Response,
    n.exports = t
}
)(fi, fi.exports);
var Ed = Xl(fi.exports);
function xd(n, t, e=5) {
    return v(this, null, function*() {
        let r = `https://api.apr.dev/api/v0/program/${t.toString()}/latest?limit=${e}`
          , [i,o] = yield Promise.all([Ya(n, t), Ed(r)])
          , a = (yield o.json()).filter(u => !u.aborted && u.state === "Built" && u.verified === "Verified");
        if (a.length === 0)
            return null;
        let s = a[0];
        return i.slot.toNumber() !== s.verified_slot ? null : s
    })
}
function Ya(n, t) {
    return v(this, null, function*() {
        let e = yield n.getAccountInfo(t);
        if (e === null)
            throw new Error("program account not found");
        let {program: r} = hi(e.data)
          , i = yield n.getAccountInfo(r.programdataAddress);
        if (i === null)
            throw new Error("program data account not found");
        let {programData: o} = hi(i.data);
        return o
    })
}
var Ad = m.rustEnum([m.struct([], "uninitialized"), m.struct([m.option(m.publicKey(), "authorityAddress")], "buffer"), m.struct([m.publicKey("programdataAddress")], "program"), m.struct([m.u64("slot"), m.option(m.publicKey(), "upgradeAuthorityAddress")], "programData")], void 0, m.u32());
function hi(n) {
    return Ad.decode(n)
}
var kd = Object.freeze({
    __proto__: null,
    verifiedBuild: xd,
    fetchData: Ya,
    decodeUpgradeableLoaderState: hi
})
  , rf = Object.freeze({
    __proto__: null,
    sha256: gd,
    rpc: Bl,
    publicKey: md,
    bytes: bl,
    token: vd,
    features: $l,
    registry: kd
});
function Sd(n) {
    return "accounts"in n
}
function Id(n) {
    return v(this, null, function*() {
        let t = (yield j.findProgramAddress([], n))[0];
        return yield j.createWithSeed(t, Td(), n)
    })
}
function Td() {
    return "anchor:idl"
}
var Ld = m.struct([m.publicKey("authority"), m.vecU8("data")]);
function Rd(n) {
    return Ld.decode(n)
}
function Mn(n, t) {
    var e, r;
    let i = {}
      , o = n.args ? n.args.length : 0;
    if (t.length > o) {
        if (t.length !== o + 1)
            throw new Error(`provided too many arguments ${t} to instruction ${n?.name} expecting: ${(r = (e = n.args) === null || e === void 0 ? void 0 : e.map(a => a.name)) !== null && r !== void 0 ? r : []}`);
        i = t.pop()
    }
    return [t, i]
}
var pi = class n {
    static build(t, e, r) {
        if (t.name === "_inner")
            throw new lt("the _inner name is reserved");
        let i = (...o) => {
            let[a,s] = Mn(t, [...o]);
            Ba(t.accounts, s.accounts),
            Od(t, ...o);
            let u = i.accounts(s.accounts);
            return s.remainingAccounts !== void 0 && u.push(...s.remainingAccounts),
            Bi("debug-logs") && console.log("Outgoing account metas:", u),
            new Fn({
                keys: u,
                programId: r,
                data: e(t.name, El(t, ...a))
            })
        }
        ;
        return i.accounts = o => n.accountsArray(o, t.accounts, r, t.name),
        i
    }
    static accountsArray(t, e, r, i) {
        return t ? e.map(o => {
            if (("accounts"in o ? o.accounts : void 0) !== void 0) {
                let s = t[o.name];
                return n.accountsArray(s, o.accounts, r, i).flat()
            } else {
                let s = o, u;
                try {
                    u = oe(t[o.name])
                } catch {
                    throw new Error(`Wrong input type for account "${o.name}" in the instruction accounts object${i !== void 0 ? ' for instruction "' + i + '"' : ""}. Expected PublicKey or string.`)
                }
                let c = s.isOptional && u.equals(r)
                  , l = s.isMut && !c
                  , _ = s.isSigner && !c;
                return {
                    pubkey: u,
                    isWritable: l,
                    isSigner: _
                }
            }
        }
        ).flat() : []
    }
}
;
function Od(n, ...t) {}
var _i = class {
    static build(t, e) {
        return (...i) => {
            var o, a, s;
            let[,u] = Mn(t, [...i])
              , c = new jn;
            if (u.preInstructions && u.instructions)
                throw new Error("instructions is deprecated, use preInstructions");
            return (o = u.preInstructions) === null || o === void 0 || o.forEach(l => c.add(l)),
            (a = u.instructions) === null || a === void 0 || a.forEach(l => c.add(l)),
            c.add(e(...i)),
            (s = u.postInstructions) === null || s === void 0 || s.forEach(l => c.add(l)),
            c
        }
    }
}
  , wi = class {
    static build(t, e, r, i) {
        return (...a) => v(this, null, function*() {
            var s;
            let u = e(...a)
              , [,c] = Mn(t, [...a]);
            if (i.sendAndConfirm === void 0)
                throw new Error("This function requires 'Provider.sendAndConfirm' to be implemented.");
            try {
                return yield i.sendAndConfirm(u, (s = c.signers) !== null && s !== void 0 ? s : [], c.options)
            } catch (l) {
                throw ja(l, r)
            }
        })
    }
}
  , gi = class {
    static build(t, e, r, i) {
        var o;
        let a = {};
        return (o = t.accounts) === null || o === void 0 || o.forEach(s => {
            let u = (0,
            M.default)(s.name);
            a[u] = new yi(t,s,r,i,e)
        }
        ),
        a
    }
}
  , yi = class {
    get size() {
        return this._size
    }
    get programId() {
        return this._programId
    }
    get provider() {
        return this._provider
    }
    get coder() {
        return this._coder
    }
    get idlAccount() {
        return this._idlAccount
    }
    constructor(t, e, r, i, o) {
        this._idlAccount = e,
        this._programId = r,
        this._provider = i ?? In(),
        this._coder = o ?? new Tn(t),
        this._size = this._coder.accounts.size(e)
    }
    fetchNullable(t, e) {
        return v(this, null, function*() {
            let {data: r} = yield this.fetchNullableAndContext(t, e);
            return r
        })
    }
    fetchNullableAndContext(t, e) {
        return v(this, null, function*() {
            let r = yield this.getAccountInfoAndContext(t, e)
              , {value: i, context: o} = r;
            return {
                data: i && i.data.length !== 0 ? this._coder.accounts.decode(this._idlAccount.name, i.data) : null,
                context: o
            }
        })
    }
    fetch(t, e) {
        return v(this, null, function*() {
            let {data: r} = yield this.fetchNullableAndContext(t, e);
            if (r === null)
                throw new Error(`Account does not exist or has no data ${t.toString()}`);
            return r
        })
    }
    fetchAndContext(t, e) {
        return v(this, null, function*() {
            let {data: r, context: i} = yield this.fetchNullableAndContext(t, e);
            if (r === null)
                throw new Error(`Account does not exist ${t.toString()}`);
            return {
                data: r,
                context: i
            }
        })
    }
    fetchMultiple(t, e) {
        return v(this, null, function*() {
            return (yield this.fetchMultipleAndContext(t, e)).map(i => i ? i.data : null)
        })
    }
    fetchMultipleAndContext(t, e) {
        return v(this, null, function*() {
            return (yield Ni(this._provider.connection, t.map(i => oe(i)), e)).map(i => {
                if (i == null)
                    return null;
                let {account: o, context: a} = i;
                return {
                    data: this._coder.accounts.decode(this._idlAccount.name, o.data),
                    context: a
                }
            }
            )
        })
    }
    all(t) {
        return v(this, null, function*() {
            let e = this.coder.accounts.memcmp(this._idlAccount.name, t instanceof Buffer ? t : void 0)
              , r = [];
            return e?.offset != null && e?.bytes != null && r.push({
                memcmp: {
                    offset: e.offset,
                    bytes: e.bytes
                }
            }),
            e?.dataSize != null && r.push({
                dataSize: e.dataSize
            }),
            (yield this._provider.connection.getProgramAccounts(this._programId, {
                commitment: this._provider.connection.commitment,
                filters: [...r, ...Array.isArray(t) ? t : []]
            })).map( ({pubkey: o, account: a}) => ({
                publicKey: o,
                account: this._coder.accounts.decode(this._idlAccount.name, a.data)
            }))
        })
    }
    subscribe(t, e) {
        let r = Ut.get(t.toString());
        if (r)
            return r.ee;
        let i = new za.default;
        t = oe(t);
        let o = this._provider.connection.onAccountChange(t, a => {
            let s = this._coder.accounts.decode(this._idlAccount.name, a.data);
            i.emit("change", s)
        }
        , e);
        return Ut.set(t.toString(), {
            ee: i,
            listener: o
        }),
        i
    }
    unsubscribe(t) {
        return v(this, null, function*() {
            let e = Ut.get(t.toString());
            if (!e) {
                console.warn("Address is not subscribed");
                return
            }
            Ut && (yield this._provider.connection.removeAccountChangeListener(e.listener).then( () => {
                Ut.delete(t.toString())
            }
            ).catch(console.error))
        })
    }
    createInstruction(t, e) {
        return v(this, null, function*() {
            let r = this.size;
            if (this._provider.publicKey === void 0)
                throw new Error("This function requires the Provider interface implementor to have a 'publicKey' field.");
            return Kn.createAccount({
                fromPubkey: this._provider.publicKey,
                newAccountPubkey: t.publicKey,
                space: e ?? r,
                lamports: yield this._provider.connection.getMinimumBalanceForRentExemption(e ?? r),
                programId: this._programId
            })
        })
    }
    associated(...t) {
        return v(this, null, function*() {
            let e = yield this.associatedAddress(...t);
            return yield this.fetch(e)
        })
    }
    associatedAddress(...t) {
        return v(this, null, function*() {
            return yield Wa(this._programId, ...t)
        })
    }
    getAccountInfo(t, e) {
        return v(this, null, function*() {
            return yield this._provider.connection.getAccountInfo(oe(t), e)
        })
    }
    getAccountInfoAndContext(t, e) {
        return v(this, null, function*() {
            return yield this._provider.connection.getAccountInfoAndContext(oe(t), e)
        })
    }
}
  , Ut = new Map
  , mi = "Program log: "
  , Xa = "Program data: "
  , Dd = mi.length
  , Cd = Xa.length
  , bi = class {
    constructor(t, e, r) {
        this._programId = t,
        this._provider = e,
        this._eventParser = new zn(t,r),
        this._eventCallbacks = new Map,
        this._eventListeners = new Map,
        this._listenerIdCount = 0
    }
    addEventListener(t, e) {
        var r;
        let i = this._listenerIdCount;
        return this._listenerIdCount += 1,
        this._eventListeners.has(t) || this._eventListeners.set(t, []),
        this._eventListeners.set(t, ((r = this._eventListeners.get(t)) !== null && r !== void 0 ? r : []).concat(i)),
        this._eventCallbacks.set(i, [t, e]),
        this._onLogsSubscriptionId !== void 0 || (this._onLogsSubscriptionId = this._provider.connection.onLogs(this._programId, (o, a) => {
            if (!o.err)
                for (let s of this._eventParser.parseLogs(o.logs)) {
                    let u = this._eventListeners.get(s.name);
                    u && u.forEach(c => {
                        let l = this._eventCallbacks.get(c);
                        if (l) {
                            let[,_] = l;
                            _(s.data, a.slot, o.signature)
                        }
                    }
                    )
                }
        }
        )),
        i
    }
    removeEventListener(t) {
        return v(this, null, function*() {
            let e = this._eventCallbacks.get(t);
            if (!e)
                throw new Error(`Event listener ${t} doesn't exist!`);
            let[r] = e
              , i = this._eventListeners.get(r);
            if (!i)
                throw new Error(`Event listeners don't exist for ${r}!`);
            if (this._eventCallbacks.delete(t),
            i = i.filter(o => o !== t),
            this._eventListeners.set(r, i),
            i.length === 0 && this._eventListeners.delete(r),
            this._eventCallbacks.size === 0) {
                if (this._eventListeners.size !== 0)
                    throw new Error(`Expected event listeners size to be 0 but got ${this._eventListeners.size}`);
                this._onLogsSubscriptionId !== void 0 && (yield this._provider.connection.removeOnLogsListener(this._onLogsSubscriptionId),
                this._onLogsSubscriptionId = void 0)
            }
        })
    }
}
  , zn = class {
    constructor(t, e) {
        this.coder = e,
        this.programId = t
    }
    *parseLogs(t, e=!1) {
        let r = new Ei(t)
          , i = new vi
          , o = r.next();
        for (; o !== null; ) {
            let[a,s,u] = this.handleLog(i, o, e);
            a && (yield a),
            s && i.push(s),
            u && i.pop(),
            o = r.next()
        }
    }
    handleLog(t, e, r) {
        return t.stack.length > 0 && t.program() === this.programId.toString() ? this.handleProgramLog(e, r) : [null, ...this.handleSystemLog(e)]
    }
    handleProgramLog(t, e) {
        if (t.startsWith(mi) || t.startsWith(Xa)) {
            let r = t.startsWith(mi) ? t.slice(Dd) : t.slice(Cd)
              , i = this.coder.events.decode(r);
            if (e && i === null)
                throw new Error(`Unable to decode event ${r}`);
            return [i, null, !1]
        } else
            return [null, ...this.handleSystemLog(t)]
    }
    handleSystemLog(t) {
        let e = t.split(":")[0];
        return e.match(/^Program (.*) success/g) !== null ? [null, !0] : e.startsWith(`Program ${this.programId.toString()} invoke`) ? [this.programId.toString(), !1] : e.includes("invoke") ? ["cpi", !1] : [null, !1]
    }
}
  , vi = class {
    constructor() {
        this.stack = []
    }
    program() {
        if (!this.stack.length)
            throw new Error("Expected the stack to have elements");
        return this.stack[this.stack.length - 1]
    }
    push(t) {
        this.stack.push(t)
    }
    pop() {
        if (!this.stack.length)
            throw new Error("Expected the stack to have elements");
        this.stack.pop()
    }
}
  , Ei = class {
    constructor(t) {
        this.logs = t
    }
    next() {
        if (this.logs.length === 0)
            return null;
        let t = this.logs[0];
        return this.logs = this.logs.slice(1),
        t
    }
}
  , xi = class {
    static build(t, e, r, i, o, a, s) {
        return (...c) => v(this, null, function*() {
            var l;
            let _ = e(...c), [,h] = Mn(t, [...c]), d;
            if (i.simulate === void 0)
                throw new Error("This function requires 'Provider.simulate' to be implemented.");
            try {
                d = yield i.simulate(_, h.signers, (l = h.options) === null || l === void 0 ? void 0 : l.commitment)
            } catch (E) {
                throw ja(E, r)
            }
            if (d === void 0)
                throw new Error("Unable to simulate transaction");
            let p = d.logs;
            if (!p)
                throw new Error("Simulated logs not found");
            let b = [];
            if (s.events) {
                let E = new zn(a,o);
                for (let S of E.parseLogs(p))
                    b.push(S)
            }
            return {
                events: b,
                raw: p
            }
        })
    }
}
;
function Pr(n) {
    return new Pn(Vt(8),t => ki.fromBuffer(t),t => t.toBuffer(),n)
}
function An(n) {
    return new Pn(Vt(32),t => new j(t),t => t.toBuffer(),n)
}
function Nr(n, t) {
    return new Ai(n,t)
}
var Pn = class extends Bn {
    constructor(t, e, r, i) {
        super(t.span, i),
        this.layout = t,
        this.decoder = e,
        this.encoder = r
    }
    decode(t, e) {
        return this.decoder(this.layout.decode(t, e))
    }
    encode(t, e, r) {
        return this.layout.encode(this.encoder(t), e, r)
    }
    getSpan(t, e) {
        return this.layout.getSpan(t, e)
    }
}
  , Ai = class extends Bn {
    constructor(t, e) {
        super(-1, e),
        this.layout = t,
        this.discriminator = ke()
    }
    encode(t, e, r=0) {
        return t == null ? this.layout.span + this.discriminator.encode(0, e, r) : (this.discriminator.encode(1, e, r),
        this.layout.encode(t, e, r + 4) + 4)
    }
    decode(t, e=0) {
        let r = this.discriminator.decode(t, e);
        if (r === 0)
            return null;
        if (r === 1)
            return this.layout.decode(t, e + 4);
        throw new Error("Invalid coption " + this.layout.property)
    }
    getSpan(t, e=0) {
        return this.layout.getSpan(t, e + 4) + 4
    }
}
  , ki = class n extends Oi.default {
    toBuffer() {
        let t = super.toArray().reverse()
          , e = Buffer.from(t);
        if (e.length === 8)
            return e;
        if (e.length >= 8)
            throw new Error("u64 too large");
        let r = Buffer.alloc(8);
        return e.copy(r),
        r
    }
    static fromBuffer(t) {
        if (t.length !== 8)
            throw new Error(`Invalid buffer length: ${t.length}`);
        return new n([...t].reverse().map(e => `00${e.toString(16)}`.slice(-2)).join(""),16)
    }
}
  , zd = V([An("mint"), An("owner"), Pr("amount"), Nr(An(), "delegate"), (n => {
    let t = qa(ed("discriminator"), null, n);
    return t.addVariant(0, V([]), "uninitialized"),
    t.addVariant(1, V([]), "initialized"),
    t.addVariant(2, V([]), "frozen"),
    t
}
)("state"), Nr(Pr(), "isNative"), Pr("delegatedAmount"), Nr(An(), "closeAuthority")]);
function Pd(n) {
    return zd.decode(n)
}
var Nn = class n {
    constructor(t, e, r, i, o, a, s, u) {
        this._accounts = e,
        this._provider = r,
        this._programId = i,
        this._idlIx = o,
        this._idlTypes = s,
        this._customResolver = u,
        this._args = t,
        this._accountStore = new Si(r,a,this._programId)
    }
    args(t) {
        this._args = t
    }
    resolve() {
        return v(this, null, function*() {
            for (yield this.resolveConst(this._idlIx.accounts),
            this._resolveEventCpi(this._idlIx.accounts); (yield this.resolvePdas(this._idlIx.accounts)) + (yield this.resolveRelations(this._idlIx.accounts)) + (yield this.resolveCustom()) > 0; )
                ;
        })
    }
    resolveCustom() {
        return v(this, null, function*() {
            if (this._customResolver) {
                let {accounts: t, resolved: e} = yield this._customResolver({
                    args: this._args,
                    accounts: this._accounts,
                    provider: this._provider,
                    programId: this._programId,
                    idlIx: this._idlIx
                });
                return this._accounts = t,
                e
            }
            return 0
        })
    }
    resolveOptionalsHelper(t, e) {
        let r = {};
        for (let i of e) {
            let o = i.name
              , a = t[o];
            a !== void 0 && (Ja(a) ? Sd(i) ? r[o] = this.resolveOptionalsHelper(a, i.accounts) : r[o] = Qa(a, !0) : a !== null ? r[o] = oe(a) : i.isOptional && (r[o] = this._programId))
        }
        return r
    }
    resolveOptionals(t) {
        Object.assign(this._accounts, this.resolveOptionalsHelper(t, this._idlIx.accounts))
    }
    get(t) {
        let e = t.reduce( (r, i) => r && r[i], this._accounts);
        if (e && e.toBase58)
            return e
    }
    set(t, e) {
        let r = this._accounts;
        t.forEach( (i, o) => {
            o == t.length - 1 && (r[i] = e),
            r[i] = r[i] || {},
            r = r[i]
        }
        )
    }
    resolveConst(r) {
        return v(this, arguments, function*(t, e=[]) {
            for (let i = 0; i < t.length; i += 1) {
                let o = t[i]
                  , a = o.accounts;
                a && (yield this.resolveConst(a, [...e, (0,
                M.default)(o.name)]));
                let s = o
                  , u = (0,
                M.default)(o.name);
                if (s.isSigner && !this.get([...e, u])) {
                    if (this._provider.wallet === void 0)
                        throw new Error("This function requires the Provider interface implementor to have a 'wallet' field.");
                    this.set([...e, u], this._provider.wallet.publicKey)
                }
                Reflect.has(n.CONST_ACCOUNTS, u) && !this.get([...e, u]) && this.set([...e, u], n.CONST_ACCOUNTS[u])
            }
        })
    }
    _resolveEventCpi(t, e=[]) {
        for (let r in t) {
            let i = t[r]
              , o = i.accounts;
            o && this._resolveEventCpi(o, [...e, (0,
            M.default)(i.name)]);
            let a = +r + 1;
            if (a === t.length)
                return;
            let s = (0,
            M.default)(t[r].name)
              , u = (0,
            M.default)(t[a].name);
            if (s === "eventAuthority" && u === "program") {
                let c = [...e, s]
                  , l = [...e, u];
                this.get(c) || this.set(c, j.findProgramAddressSync([Buffer.from("__event_authority")], this._programId)[0]),
                this.get(l) || this.set(l, this._programId);
                return
            }
        }
    }
    resolvePdas(r) {
        return v(this, arguments, function*(t, e=[]) {
            let i = 0;
            for (let o = 0; o < t.length; o += 1) {
                let a = t[o]
                  , s = a.accounts;
                s && (i += yield this.resolvePdas(s, [...e, (0,
                M.default)(a.name)]));
                let u = a
                  , c = (0,
                M.default)(a.name);
                u.pda && u.pda.seeds.length > 0 && !this.get([...e, c]) && (yield this.autoPopulatePda(u, e)) && (i += 1)
            }
            return i
        })
    }
    resolveRelations(r) {
        return v(this, arguments, function*(t, e=[]) {
            let i = 0;
            for (let o = 0; o < t.length; o += 1) {
                let a = t[o]
                  , s = a.accounts;
                s && (i += yield this.resolveRelations(s, [...e, (0,
                M.default)(a.name)]));
                let u = a.relations || []
                  , c = (0,
                M.default)(a.name)
                  , l = [...e, c]
                  , _ = this.get(l);
                if (_) {
                    let h = u.filter(d => !this.get([...e, (0,
                    M.default)(d)]));
                    if (i += h.length,
                    h.length > 0) {
                        let d = yield this._accountStore.fetchAccount({
                            publicKey: _
                        });
                        yield Promise.all(h.map(p => v(this, null, function*() {
                            let b = (0,
                            M.default)(p);
                            return this.set([...e, b], d[b]),
                            d[b]
                        })))
                    }
                }
            }
            return i
        })
    }
    autoPopulatePda(r) {
        return v(this, arguments, function*(t, e=[]) {
            if (!t.pda || !t.pda.seeds)
                throw new Error("Must have seeds");
            let i = yield Promise.all(t.pda.seeds.map(s => this.toBuffer(s, e)));
            if (i.some(s => typeof s > "u"))
                return;
            let o = yield this.parseProgramId(t, e);
            if (!o)
                return;
            let[a] = yield j.findProgramAddress(i, o);
            this.set([...e, (0,
            M.default)(t.name)], a)
        })
    }
    parseProgramId(r) {
        return v(this, arguments, function*(t, e=[]) {
            var i;
            if (!(!((i = t.pda) === null || i === void 0) && i.programId))
                return this._programId;
            switch (t.pda.programId.kind) {
            case "const":
                return new j(this.toBufferConst(t.pda.programId.value));
            case "arg":
                return this.argValue(t.pda.programId);
            case "account":
                return yield this.accountValue(t.pda.programId, e);
            default:
                throw new Error(`Unexpected program seed kind: ${t.pda.programId.kind}`)
            }
        })
    }
    toBuffer(r) {
        return v(this, arguments, function*(t, e=[]) {
            switch (t.kind) {
            case "const":
                return this.toBufferConst(t);
            case "arg":
                return yield this.toBufferArg(t);
            case "account":
                return yield this.toBufferAccount(t, e);
            default:
                throw new Error(`Unexpected seed kind: ${t.kind}`)
            }
        })
    }
    getType(t, e=[]) {
        if (e.length > 0 && t.defined) {
            let r = this._idlTypes.find(a => a.name === t.defined);
            if (!r)
                throw new Error(`Cannot find type ${t.defined}`);
            let o = r.type.fields.find(a => a.name === e[0]);
            return this.getType(o.type, e.slice(1))
        }
        return t
    }
    toBufferConst(t) {
        return this.toBufferValue(this.getType(t.type, (t.path || "").split(".").slice(1)), t.value)
    }
    toBufferArg(t) {
        return v(this, null, function*() {
            let e = this.argValue(t);
            if (!(typeof e > "u"))
                return this.toBufferValue(this.getType(t.type, (t.path || "").split(".").slice(1)), e)
        })
    }
    argValue(t) {
        let e = t.path.split(".")
          , r = (0,
        M.default)(e[0])
          , i = this._idlIx.args.findIndex(o => o.name === r);
        if (i === -1)
            throw new Error(`Unable to find argument for seed: ${r}`);
        return e.slice(1).reduce( (o, a) => (o || {})[a], this._args[i])
    }
    toBufferAccount(r) {
        return v(this, arguments, function*(t, e=[]) {
            let i = yield this.accountValue(t, e);
            if (i)
                return this.toBufferValue(t.type, i)
        })
    }
    accountValue(r) {
        return v(this, arguments, function*(t, e=[]) {
            let i = t.path.split(".")
              , o = i[0]
              , a = this.get([...e, (0,
            M.default)(o)]);
            if (a === null)
                throw new Error("fieldPubkey is null");
            if (i.length === 1)
                return a;
            let s = yield this._accountStore.fetchAccount({
                publicKey: a,
                name: t.account
            });
            return this.parseAccountValue(s, i.slice(1))
        })
    }
    parseAccountValue(t, e) {
        let r;
        for (; e.length > 0; )
            r = t[(0,
            M.default)(e[0])],
            e = e.slice(1);
        return r
    }
    toBufferValue(t, e) {
        switch (t) {
        case "u8":
            return Buffer.from([e]);
        case "u16":
            let r = Buffer.alloc(2);
            return r.writeUInt16LE(e),
            r;
        case "u32":
            let i = Buffer.alloc(4);
            return i.writeUInt32LE(e),
            i;
        case "u64":
            let o = Buffer.alloc(8);
            return o.writeBigUInt64LE(BigInt(e)),
            o;
        case "string":
            return Buffer.from(Na(e));
        case "publicKey":
            return e.toBuffer();
        default:
            if (t.array)
                return Buffer.from(e);
            throw new Error(`Unexpected seed type: ${t}`)
        }
    }
}
;
Nn.CONST_ACCOUNTS = {
    associatedTokenProgram: $i,
    rent: ji,
    systemProgram: Kn.programId,
    tokenProgram: Mi,
    clock: Fi
};
var Si = class {
    constructor(t, e, r) {
        this._provider = t,
        this._programId = r,
        this._cache = new Map,
        this._idls = {},
        this._idls[r.toBase58()] = e
    }
    ensureIdl(t) {
        return v(this, null, function*() {
            if (!this._idls[t.toBase58()]) {
                let e = yield Zt.fetchIdl(t, this._provider);
                if (e) {
                    let r = new Zt(e,t,this._provider);
                    this._idls[t.toBase58()] = r.account
                }
            }
            return this._idls[t.toBase58()]
        })
    }
    fetchAccount(i) {
        return v(this, arguments, function*({publicKey: t, name: e, programId: r=this._programId}) {
            let o = t.toString();
            if (!this._cache.has(o))
                if (e === "TokenAccount") {
                    let a = yield this._provider.connection.getAccountInfo(t);
                    if (a === null)
                        throw new Error(`invalid account info for ${o}`);
                    let s = Pd(a.data);
                    this._cache.set(o, s)
                } else if (e) {
                    let a = yield this.ensureIdl(r);
                    if (a) {
                        let s = a[(0,
                        M.default)(e)];
                        if (s) {
                            let u = yield s.fetch(t);
                            this._cache.set(o, u)
                        }
                    }
                } else {
                    let a = yield this._provider.connection.getAccountInfo(t);
                    if (a === null)
                        throw new Error(`invalid account info for ${o}`);
                    let s = a.data
                      , u = yield this.ensureIdl(a.owner);
                    if (u) {
                        let c = Object.values(u)[0];
                        if (!c)
                            throw new Error("No accounts for this program");
                        let l = c.coder.accounts.decodeAny(s);
                        this._cache.set(o, l)
                    }
                }
            return this._cache.get(o)
        })
    }
}
  , Ii = class {
    static build(t, e, r, i, o, a, s, u, c, l, _) {
        return (...h) => new Ti(h,i,o,a,s,u,t,e,r,c,l,_)
    }
}
;
function Ja(n) {
    return typeof n == "object" && n !== null && !("_bn"in n)
}
function Qa(n, t) {
    let e = {};
    for (let r in n) {
        let i = n[r];
        if (i === null) {
            if (t)
                throw new Error("Failed to resolve optionals due to IDL type mismatch with input accounts!");
            continue
        }
        e[r] = Ja(i) ? Qa(i, !0) : oe(i)
    }
    return e
}
var Ti = class {
    constructor(t, e, r, i, o, a, s, u, c, l, _, h) {
        this._ixFn = e,
        this._txFn = r,
        this._rpcFn = i,
        this._simulateFn = o,
        this._viewFn = a,
        this._programId = u,
        this._accounts = {},
        this._remainingAccounts = [],
        this._signers = [],
        this._preInstructions = [],
        this._postInstructions = [],
        this._autoResolveAccounts = !0,
        this._args = t,
        this._accountsResolver = new Nn(t,this._accounts,s,u,c,l,_,h)
    }
    args(t) {
        this._args = t,
        this._accountsResolver.args(t)
    }
    pubkeys() {
        return v(this, null, function*() {
            return this._autoResolveAccounts && (yield this._accountsResolver.resolve()),
            this._accounts
        })
    }
    accounts(t) {
        return this._autoResolveAccounts = !0,
        this._accountsResolver.resolveOptionals(t),
        this
    }
    accountsStrict(t) {
        return this._autoResolveAccounts = !1,
        this._accountsResolver.resolveOptionals(t),
        this
    }
    signers(t) {
        return this._signers = this._signers.concat(t),
        this
    }
    remainingAccounts(t) {
        return this._remainingAccounts = this._remainingAccounts.concat(t),
        this
    }
    preInstructions(t) {
        return this._preInstructions = this._preInstructions.concat(t),
        this
    }
    postInstructions(t) {
        return this._postInstructions = this._postInstructions.concat(t),
        this
    }
    rpc(t) {
        return v(this, null, function*() {
            return this._autoResolveAccounts && (yield this._accountsResolver.resolve()),
            this._rpcFn(...this._args, {
                accounts: this._accounts,
                signers: this._signers,
                remainingAccounts: this._remainingAccounts,
                preInstructions: this._preInstructions,
                postInstructions: this._postInstructions,
                options: t
            })
        })
    }
    rpcAndKeys(t) {
        return v(this, null, function*() {
            return {
                pubkeys: yield this.pubkeys(),
                signature: yield this.rpc(t)
            }
        })
    }
    view(t) {
        return v(this, null, function*() {
            if (this._autoResolveAccounts && (yield this._accountsResolver.resolve()),
            !this._viewFn)
                throw new Error("Method does not support views");
            return this._viewFn(...this._args, {
                accounts: this._accounts,
                signers: this._signers,
                remainingAccounts: this._remainingAccounts,
                preInstructions: this._preInstructions,
                postInstructions: this._postInstructions,
                options: t
            })
        })
    }
    simulate(t) {
        return v(this, null, function*() {
            return this._autoResolveAccounts && (yield this._accountsResolver.resolve()),
            this._simulateFn(...this._args, {
                accounts: this._accounts,
                signers: this._signers,
                remainingAccounts: this._remainingAccounts,
                preInstructions: this._preInstructions,
                postInstructions: this._postInstructions,
                options: t
            })
        })
    }
    instruction() {
        return v(this, null, function*() {
            return this._autoResolveAccounts && (yield this._accountsResolver.resolve()),
            this._ixFn(...this._args, {
                accounts: this._accounts,
                signers: this._signers,
                remainingAccounts: this._remainingAccounts,
                preInstructions: this._preInstructions,
                postInstructions: this._postInstructions
            })
        })
    }
    prepare() {
        return v(this, null, function*() {
            return {
                instruction: yield this.instruction(),
                pubkeys: yield this.pubkeys(),
                signers: yield this._signers
            }
        })
    }
    transaction() {
        return v(this, null, function*() {
            return this._autoResolveAccounts && (yield this._accountsResolver.resolve()),
            this._txFn(...this._args, {
                accounts: this._accounts,
                signers: this._signers,
                remainingAccounts: this._remainingAccounts,
                preInstructions: this._preInstructions,
                postInstructions: this._postInstructions
            })
        })
    }
}
  , Li = class {
    static build(t, e, r, i) {
        let o = e.accounts.find(u => u.isMut)
          , a = !!e.returns;
        return o || !a ? void 0 : (...u) => v(this, null, function*() {
            var c, l;
            let _ = yield r(...u)
              , h = `Program return: ${t} `
              , d = _.raw.find(S => S.startsWith(h));
            if (!d)
                throw new Error("View expected return log");
            let p = Di(d.slice(h.length))
              , b = e.returns;
            if (!b)
                throw new Error("View expected return type");
            return Ye.fieldLayout({
                type: b
            }, Array.from([...(c = i.accounts) !== null && c !== void 0 ? c : [], ...(l = i.types) !== null && l !== void 0 ? l : []])).decode(p)
        })
    }
}
  , Ri = class {
    static build(t, e, r, i, o) {
        let a = {}
          , s = {}
          , u = {}
          , c = {}
          , l = {}
          , _ = {}
          , h = vl(t)
          , d = t.accounts ? gi.build(t, e, r, i) : {};
        return t.instructions.forEach(p => {
            let b = pi.build(p, (F, x) => e.instruction.encode(F, x), r)
              , E = _i.build(p, b)
              , S = wi.build(p, E, h, i)
              , O = xi.build(p, E, h, i, e, r, t)
              , L = Li.build(r, p, O, t)
              , g = Ii.build(i, r, p, b, E, S, O, L, d, t.types || [], o && o(p))
              , R = (0,
            M.default)(p.name);
            s[R] = b,
            u[R] = E,
            a[R] = S,
            c[R] = O,
            l[R] = g,
            L && (_[R] = L)
        }
        ),
        [a, s, u, d, c, l, _]
    }
}
  , Zt = class n {
    get programId() {
        return this._programId
    }
    get idl() {
        return this._idl
    }
    get coder() {
        return this._coder
    }
    get provider() {
        return this._provider
    }
    constructor(t, e, r, i, o) {
        e = oe(e),
        r || (r = In()),
        this._idl = t,
        this._provider = r,
        this._programId = e,
        this._coder = i ?? new Tn(t),
        this._events = new bi(this._programId,r,this._coder);
        let[a,s,u,c,l,_,h] = Ri.build(t, this._coder, e, r, o ?? ( () => {}
        ));
        this.rpc = a,
        this.instruction = s,
        this.transaction = u,
        this.account = c,
        this.simulate = l,
        this.methods = _,
        this.views = h
    }
    static at(t, e) {
        return v(this, null, function*() {
            let r = oe(t)
              , i = yield n.fetchIdl(r, e);
            if (!i)
                throw new Error(`IDL not found for program: ${t.toString()}`);
            return new n(i,r,e)
        })
    }
    static fetchIdl(t, e) {
        return v(this, null, function*() {
            e = e ?? In();
            let r = oe(t)
              , i = yield Id(r)
              , o = yield e.connection.getAccountInfo(i);
            if (!o)
                return null;
            let a = Rd(o.data.slice(8))
              , s = va(a.data);
            return JSON.parse(Pa(s))
        })
    }
    addEventListener(t, e) {
        return this._events.addEventListener(t, e)
    }
    removeEventListener(t) {
        return v(this, null, function*() {
            return yield this._events.removeEventListener(t)
        })
    }
}
  , Nd = new j("11111111111111111111111111111111");
function Bd(n) {
    return new Zt(es,Nd,n,Ud())
}
function Ud() {
    return new di(es)
}
var es = {
    version: "0.1.0",
    name: "system_program",
    instructions: [{
        name: "createAccount",
        accounts: [{
            name: "from",
            isMut: !0,
            isSigner: !0
        }, {
            name: "to",
            isMut: !0,
            isSigner: !0
        }],
        args: [{
            name: "lamports",
            type: "u64"
        }, {
            name: "space",
            type: "u64"
        }, {
            name: "owner",
            type: "publicKey"
        }]
    }, {
        name: "assign",
        accounts: [{
            name: "pubkey",
            isMut: !0,
            isSigner: !0
        }],
        args: [{
            name: "owner",
            type: "publicKey"
        }]
    }, {
        name: "transfer",
        accounts: [{
            name: "from",
            isMut: !0,
            isSigner: !0
        }, {
            name: "to",
            isMut: !0,
            isSigner: !1
        }],
        args: [{
            name: "lamports",
            type: "u64"
        }]
    }, {
        name: "createAccountWithSeed",
        accounts: [{
            name: "from",
            isMut: !0,
            isSigner: !0
        }, {
            name: "to",
            isMut: !0,
            isSigner: !1
        }, {
            name: "base",
            isMut: !1,
            isSigner: !0
        }],
        args: [{
            name: "base",
            type: "publicKey"
        }, {
            name: "seed",
            type: "string"
        }, {
            name: "lamports",
            type: "u64"
        }, {
            name: "space",
            type: "u64"
        }, {
            name: "owner",
            type: "publicKey"
        }]
    }, {
        name: "advanceNonceAccount",
        accounts: [{
            name: "nonce",
            isMut: !0,
            isSigner: !1
        }, {
            name: "recentBlockhashes",
            isMut: !1,
            isSigner: !1
        }, {
            name: "authorized",
            isMut: !1,
            isSigner: !0
        }],
        args: [{
            name: "authorized",
            type: "publicKey"
        }]
    }, {
        name: "withdrawNonceAccount",
        accounts: [{
            name: "nonce",
            isMut: !0,
            isSigner: !1
        }, {
            name: "to",
            isMut: !0,
            isSigner: !1
        }, {
            name: "recentBlockhashes",
            isMut: !1,
            isSigner: !1
        }, {
            name: "rent",
            isMut: !1,
            isSigner: !1
        }, {
            name: "authorized",
            isMut: !1,
            isSigner: !0
        }],
        args: [{
            name: "lamports",
            type: "u64"
        }]
    }, {
        name: "initializeNonceAccount",
        accounts: [{
            name: "nonce",
            isMut: !0,
            isSigner: !0
        }, {
            name: "recentBlockhashes",
            isMut: !1,
            isSigner: !1
        }, {
            name: "rent",
            isMut: !1,
            isSigner: !1
        }],
        args: [{
            name: "authorized",
            type: "publicKey"
        }]
    }, {
        name: "authorizeNonceAccount",
        accounts: [{
            name: "nonce",
            isMut: !0,
            isSigner: !1
        }, {
            name: "authorized",
            isMut: !1,
            isSigner: !0
        }],
        args: [{
            name: "authorized",
            type: "publicKey"
        }]
    }, {
        name: "allocate",
        accounts: [{
            name: "pubkey",
            isMut: !0,
            isSigner: !0
        }],
        args: [{
            name: "space",
            type: "u64"
        }]
    }, {
        name: "allocateWithSeed",
        accounts: [{
            name: "account",
            isMut: !0,
            isSigner: !1
        }, {
            name: "base",
            isMut: !1,
            isSigner: !0
        }],
        args: [{
            name: "base",
            type: "publicKey"
        }, {
            name: "seed",
            type: "string"
        }, {
            name: "space",
            type: "u64"
        }, {
            name: "owner",
            type: "publicKey"
        }]
    }, {
        name: "assignWithSeed",
        accounts: [{
            name: "account",
            isMut: !0,
            isSigner: !1
        }, {
            name: "base",
            isMut: !1,
            isSigner: !0
        }],
        args: [{
            name: "base",
            type: "publicKey"
        }, {
            name: "seed",
            type: "string"
        }, {
            name: "owner",
            type: "publicKey"
        }]
    }, {
        name: "transferWithSeed",
        accounts: [{
            name: "from",
            isMut: !0,
            isSigner: !1
        }, {
            name: "base",
            isMut: !1,
            isSigner: !0
        }, {
            name: "to",
            isMut: !0,
            isSigner: !1
        }],
        args: [{
            name: "lamports",
            type: "u64"
        }, {
            name: "seed",
            type: "string"
        }, {
            name: "owner",
            type: "publicKey"
        }]
    }],
    accounts: [{
        name: "nonce",
        type: {
            kind: "struct",
            fields: [{
                name: "version",
                type: "u32"
            }, {
                name: "state",
                type: "u32"
            }, {
                name: "authorizedPubkey",
                type: "publicKey"
            }, {
                name: "nonce",
                type: "publicKey"
            }, {
                name: "feeCalculator",
                type: {
                    defined: "FeeCalculator"
                }
            }]
        }
    }],
    types: [{
        name: "FeeCalculator",
        type: {
            kind: "struct",
            fields: [{
                name: "lamportsPerSignature",
                type: "u64"
            }]
        }
    }]
}
  , Ca = class {
    static system(t) {
        return Bd(t)
    }
}
;
var export_BN = Md.default;
export {yi as AccountClient, jr as AnchorError, $r as AnchorProvider, export_BN as BN, Yr as BorshAccountsCoder, Tn as BorshCoder, Xr as BorshEventCoder, qr as BorshInstructionCoder, Wr as DISCRIMINATOR_SIZE, bi as EventManager, zn as EventParser, lt as IdlError, k as LangErrorCode, Zl as LangErrorMessage, Ii as MethodsBuilderFactory, Ca as Native, Zt as Program, Vr as ProgramError, $t as ProgramErrorStack, di as SystemCoder, Wl as eventDiscriminator, In as getProvider, vl as parseIdlErrors, nf as setProvider, Mn as splitArgsAndCtx, El as toInstruction, oe as translateAddress, ja as translateError, rf as utils, Ba as validateAccounts, Vi as web3};
