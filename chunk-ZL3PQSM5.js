import {a as $, b as bt} from "./chunk-QWJ3Z5DA.js";
import {f as Z} from "./chunk-QE6IBIJD.js";
var it = Z(I => {
    "use strict";
    Object.defineProperty(I, "__esModule", {
        value: !0
    });
    I.SHA512_IV = I.SHA384_IV = I.SHA224_IV = I.SHA256_IV = I.HashMD = void 0;
    I.setBigUint64 = nt;
    I.Chi = xt;
    I.Maj = dt;
    var V = $();
    function nt(t, e, n, s) {
        if (typeof t.setBigUint64 == "function")
            return t.setBigUint64(e, n, s);
        let r = BigInt(32)
          , i = BigInt(4294967295)
          , c = Number(n >> r & i)
          , a = Number(n & i)
          , b = s ? 4 : 0
          , u = s ? 0 : 4;
        t.setUint32(e + b, c, s),
        t.setUint32(e + u, a, s)
    }
    function xt(t, e, n) {
        return t & e ^ ~t & n
    }
    function dt(t, e, n) {
        return t & e ^ t & n ^ e & n
    }
    var tt = class extends V.Hash {
        constructor(e, n, s, r) {
            super(),
            this.finished = !1,
            this.length = 0,
            this.pos = 0,
            this.destroyed = !1,
            this.blockLen = e,
            this.outputLen = n,
            this.padOffset = s,
            this.isLE = r,
            this.buffer = new Uint8Array(e),
            this.view = (0,
            V.createView)(this.buffer)
        }
        update(e) {
            (0,
            V.aexists)(this),
            e = (0,
            V.toBytes)(e),
            (0,
            V.abytes)(e);
            let {view: n, buffer: s, blockLen: r} = this
              , i = e.length;
            for (let c = 0; c < i; ) {
                let a = Math.min(r - this.pos, i - c);
                if (a === r) {
                    let b = (0,
                    V.createView)(e);
                    for (; r <= i - c; c += r)
                        this.process(b, c);
                    continue
                }
                s.set(e.subarray(c, c + a), this.pos),
                this.pos += a,
                c += a,
                this.pos === r && (this.process(n, 0),
                this.pos = 0)
            }
            return this.length += e.length,
            this.roundClean(),
            this
        }
        digestInto(e) {
            (0,
            V.aexists)(this),
            (0,
            V.aoutput)(e, this),
            this.finished = !0;
            let {buffer: n, view: s, blockLen: r, isLE: i} = this
              , {pos: c} = this;
            n[c++] = 128,
            (0,
            V.clean)(this.buffer.subarray(c)),
            this.padOffset > r - c && (this.process(s, 0),
            c = 0);
            for (let f = c; f < r; f++)
                n[f] = 0;
            nt(s, r - 8, BigInt(this.length * 8), i),
            this.process(s, 0);
            let a = (0,
            V.createView)(e)
              , b = this.outputLen;
            if (b % 4)
                throw new Error("_sha2: outputLen should be aligned to 32bit");
            let u = b / 4
              , A = this.get();
            if (u > A.length)
                throw new Error("_sha2: outputLen bigger than state");
            for (let f = 0; f < u; f++)
                a.setUint32(4 * f, A[f], i)
        }
        digest() {
            let {buffer: e, outputLen: n} = this;
            this.digestInto(e);
            let s = e.slice(0, n);
            return this.destroy(),
            s
        }
        _cloneInto(e) {
            e || (e = new this.constructor),
            e.set(...this.get());
            let {blockLen: n, buffer: s, length: r, finished: i, destroyed: c, pos: a} = this;
            return e.destroyed = c,
            e.finished = i,
            e.length = r,
            e.pos = a,
            r % n && e.buffer.set(s),
            e
        }
        clone() {
            return this._cloneInto()
        }
    }
    ;
    I.HashMD = tt;
    I.SHA256_IV = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
    I.SHA224_IV = Uint32Array.from([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
    I.SHA384_IV = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]);
    I.SHA512_IV = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209])
}
);
var yt = Z(l => {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    });
    l.sha512_224 = l.sha512_256 = l.sha384 = l.sha512 = l.sha224 = l.sha256 = l.SHA512_256 = l.SHA512_224 = l.SHA384 = l.SHA512 = l.SHA224 = l.SHA256 = void 0;
    var o = it()
      , x = bt()
      , _ = $()
      , ut = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
      , D = new Uint32Array(64)
      , v = class extends o.HashMD {
        constructor(e=32) {
            super(64, e, 8, !1),
            this.A = o.SHA256_IV[0] | 0,
            this.B = o.SHA256_IV[1] | 0,
            this.C = o.SHA256_IV[2] | 0,
            this.D = o.SHA256_IV[3] | 0,
            this.E = o.SHA256_IV[4] | 0,
            this.F = o.SHA256_IV[5] | 0,
            this.G = o.SHA256_IV[6] | 0,
            this.H = o.SHA256_IV[7] | 0
        }
        get() {
            let {A: e, B: n, C: s, D: r, E: i, F: c, G: a, H: b} = this;
            return [e, n, s, r, i, c, a, b]
        }
        set(e, n, s, r, i, c, a, b) {
            this.A = e | 0,
            this.B = n | 0,
            this.C = s | 0,
            this.D = r | 0,
            this.E = i | 0,
            this.F = c | 0,
            this.G = a | 0,
            this.H = b | 0
        }
        process(e, n) {
            for (let f = 0; f < 16; f++,
            n += 4)
                D[f] = e.getUint32(n, !1);
            for (let f = 16; f < 64; f++) {
                let H = D[f - 15]
                  , d = D[f - 2]
                  , g = (0,
                _.rotr)(H, 7) ^ (0,
                _.rotr)(H, 18) ^ H >>> 3
                  , p = (0,
                _.rotr)(d, 17) ^ (0,
                _.rotr)(d, 19) ^ d >>> 10;
                D[f] = p + D[f - 7] + g + D[f - 16] | 0
            }
            let {A: s, B: r, C: i, D: c, E: a, F: b, G: u, H: A} = this;
            for (let f = 0; f < 64; f++) {
                let H = (0,
                _.rotr)(a, 6) ^ (0,
                _.rotr)(a, 11) ^ (0,
                _.rotr)(a, 25)
                  , d = A + H + (0,
                o.Chi)(a, b, u) + ut[f] + D[f] | 0
                  , p = ((0,
                _.rotr)(s, 2) ^ (0,
                _.rotr)(s, 13) ^ (0,
                _.rotr)(s, 22)) + (0,
                o.Maj)(s, r, i) | 0;
                A = u,
                u = b,
                b = a,
                a = c + d | 0,
                c = i,
                i = r,
                r = s,
                s = d + p | 0
            }
            s = s + this.A | 0,
            r = r + this.B | 0,
            i = i + this.C | 0,
            c = c + this.D | 0,
            a = a + this.E | 0,
            b = b + this.F | 0,
            u = u + this.G | 0,
            A = A + this.H | 0,
            this.set(s, r, i, c, a, b, u, A)
        }
        roundClean() {
            (0,
            _.clean)(D)
        }
        destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0),
            (0,
            _.clean)(this.buffer)
        }
    }
    ;
    l.SHA256 = v;
    var W = class extends v {
        constructor() {
            super(28),
            this.A = o.SHA224_IV[0] | 0,
            this.B = o.SHA224_IV[1] | 0,
            this.C = o.SHA224_IV[2] | 0,
            this.D = o.SHA224_IV[3] | 0,
            this.E = o.SHA224_IV[4] | 0,
            this.F = o.SHA224_IV[5] | 0,
            this.G = o.SHA224_IV[6] | 0,
            this.H = o.SHA224_IV[7] | 0
        }
    }
    ;
    l.SHA224 = W;
    var ot = x.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t)))
      , lt = ot[0]
      , Ht = ot[1]
      , F = new Uint32Array(80)
      , G = new Uint32Array(80)
      , j = class extends o.HashMD {
        constructor(e=64) {
            super(128, e, 16, !1),
            this.Ah = o.SHA512_IV[0] | 0,
            this.Al = o.SHA512_IV[1] | 0,
            this.Bh = o.SHA512_IV[2] | 0,
            this.Bl = o.SHA512_IV[3] | 0,
            this.Ch = o.SHA512_IV[4] | 0,
            this.Cl = o.SHA512_IV[5] | 0,
            this.Dh = o.SHA512_IV[6] | 0,
            this.Dl = o.SHA512_IV[7] | 0,
            this.Eh = o.SHA512_IV[8] | 0,
            this.El = o.SHA512_IV[9] | 0,
            this.Fh = o.SHA512_IV[10] | 0,
            this.Fl = o.SHA512_IV[11] | 0,
            this.Gh = o.SHA512_IV[12] | 0,
            this.Gl = o.SHA512_IV[13] | 0,
            this.Hh = o.SHA512_IV[14] | 0,
            this.Hl = o.SHA512_IV[15] | 0
        }
        get() {
            let {Ah: e, Al: n, Bh: s, Bl: r, Ch: i, Cl: c, Dh: a, Dl: b, Eh: u, El: A, Fh: f, Fl: H, Gh: d, Gl: g, Hh: p, Hl: m} = this;
            return [e, n, s, r, i, c, a, b, u, A, f, H, d, g, p, m]
        }
        set(e, n, s, r, i, c, a, b, u, A, f, H, d, g, p, m) {
            this.Ah = e | 0,
            this.Al = n | 0,
            this.Bh = s | 0,
            this.Bl = r | 0,
            this.Ch = i | 0,
            this.Cl = c | 0,
            this.Dh = a | 0,
            this.Dl = b | 0,
            this.Eh = u | 0,
            this.El = A | 0,
            this.Fh = f | 0,
            this.Fl = H | 0,
            this.Gh = d | 0,
            this.Gl = g | 0,
            this.Hh = p | 0,
            this.Hl = m | 0
        }
        process(e, n) {
            for (let y = 0; y < 16; y++,
            n += 4)
                F[y] = e.getUint32(n),
                G[y] = e.getUint32(n += 4);
            for (let y = 16; y < 80; y++) {
                let C = F[y - 15] | 0
                  , L = G[y - 15] | 0
                  , J = x.rotrSH(C, L, 1) ^ x.rotrSH(C, L, 8) ^ x.shrSH(C, L, 7)
                  , Q = x.rotrSL(C, L, 1) ^ x.rotrSL(C, L, 8) ^ x.shrSL(C, L, 7)
                  , E = F[y - 2] | 0
                  , U = G[y - 2] | 0
                  , k = x.rotrSH(E, U, 19) ^ x.rotrBH(E, U, 61) ^ x.shrSH(E, U, 6)
                  , X = x.rotrSL(E, U, 19) ^ x.rotrBL(E, U, 61) ^ x.shrSL(E, U, 6)
                  , N = x.add4L(Q, X, G[y - 7], G[y - 16])
                  , Y = x.add4H(N, J, k, F[y - 7], F[y - 16]);
                F[y] = Y | 0,
                G[y] = N | 0
            }
            let {Ah: s, Al: r, Bh: i, Bl: c, Ch: a, Cl: b, Dh: u, Dl: A, Eh: f, El: H, Fh: d, Fl: g, Gh: p, Gl: m, Hh: O, Hl: M} = this;
            for (let y = 0; y < 80; y++) {
                let C = x.rotrSH(f, H, 14) ^ x.rotrSH(f, H, 18) ^ x.rotrBH(f, H, 41)
                  , L = x.rotrSL(f, H, 14) ^ x.rotrSL(f, H, 18) ^ x.rotrBL(f, H, 41)
                  , J = f & d ^ ~f & p
                  , Q = H & g ^ ~H & m
                  , E = x.add5L(M, L, Q, Ht[y], G[y])
                  , U = x.add5H(E, O, C, J, lt[y], F[y])
                  , k = E | 0
                  , X = x.rotrSH(s, r, 28) ^ x.rotrBH(s, r, 34) ^ x.rotrBH(s, r, 39)
                  , N = x.rotrSL(s, r, 28) ^ x.rotrBL(s, r, 34) ^ x.rotrBL(s, r, 39)
                  , Y = s & i ^ s & a ^ i & a
                  , ft = r & c ^ r & b ^ c & b;
                O = p | 0,
                M = m | 0,
                p = d | 0,
                m = g | 0,
                d = f | 0,
                g = H | 0,
                {h: f, l: H} = x.add(u | 0, A | 0, U | 0, k | 0),
                u = a | 0,
                A = b | 0,
                a = i | 0,
                b = c | 0,
                i = s | 0,
                c = r | 0;
                let rt = x.add3L(k, N, ft);
                s = x.add3H(rt, U, X, Y),
                r = rt | 0
            }
            ({h: s, l: r} = x.add(this.Ah | 0, this.Al | 0, s | 0, r | 0)),
            {h: i, l: c} = x.add(this.Bh | 0, this.Bl | 0, i | 0, c | 0),
            {h: a, l: b} = x.add(this.Ch | 0, this.Cl | 0, a | 0, b | 0),
            {h: u, l: A} = x.add(this.Dh | 0, this.Dl | 0, u | 0, A | 0),
            {h: f, l: H} = x.add(this.Eh | 0, this.El | 0, f | 0, H | 0),
            {h: d, l: g} = x.add(this.Fh | 0, this.Fl | 0, d | 0, g | 0),
            {h: p, l: m} = x.add(this.Gh | 0, this.Gl | 0, p | 0, m | 0),
            {h: O, l: M} = x.add(this.Hh | 0, this.Hl | 0, O | 0, M | 0),
            this.set(s, r, i, c, a, b, u, A, f, H, d, g, p, m, O, M)
        }
        roundClean() {
            (0,
            _.clean)(F, G)
        }
        destroy() {
            (0,
            _.clean)(this.buffer),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        }
    }
    ;
    l.SHA512 = j;
    var q = class extends j {
        constructor() {
            super(48),
            this.Ah = o.SHA384_IV[0] | 0,
            this.Al = o.SHA384_IV[1] | 0,
            this.Bh = o.SHA384_IV[2] | 0,
            this.Bl = o.SHA384_IV[3] | 0,
            this.Ch = o.SHA384_IV[4] | 0,
            this.Cl = o.SHA384_IV[5] | 0,
            this.Dh = o.SHA384_IV[6] | 0,
            this.Dl = o.SHA384_IV[7] | 0,
            this.Eh = o.SHA384_IV[8] | 0,
            this.El = o.SHA384_IV[9] | 0,
            this.Fh = o.SHA384_IV[10] | 0,
            this.Fl = o.SHA384_IV[11] | 0,
            this.Gh = o.SHA384_IV[12] | 0,
            this.Gl = o.SHA384_IV[13] | 0,
            this.Hh = o.SHA384_IV[14] | 0,
            this.Hl = o.SHA384_IV[15] | 0
        }
    }
    ;
    l.SHA384 = q;
    var S = Uint32Array.from([2352822216, 424955298, 1944164710, 2312950998, 502970286, 855612546, 1738396948, 1479516111, 258812777, 2077511080, 2011393907, 79989058, 1067287976, 1780299464, 286451373, 2446758561])
      , B = Uint32Array.from([573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882])
      , K = class extends j {
        constructor() {
            super(28),
            this.Ah = S[0] | 0,
            this.Al = S[1] | 0,
            this.Bh = S[2] | 0,
            this.Bl = S[3] | 0,
            this.Ch = S[4] | 0,
            this.Cl = S[5] | 0,
            this.Dh = S[6] | 0,
            this.Dl = S[7] | 0,
            this.Eh = S[8] | 0,
            this.El = S[9] | 0,
            this.Fh = S[10] | 0,
            this.Fl = S[11] | 0,
            this.Gh = S[12] | 0,
            this.Gl = S[13] | 0,
            this.Hh = S[14] | 0,
            this.Hl = S[15] | 0
        }
    }
    ;
    l.SHA512_224 = K;
    var R = class extends j {
        constructor() {
            super(32),
            this.Ah = B[0] | 0,
            this.Al = B[1] | 0,
            this.Bh = B[2] | 0,
            this.Bl = B[3] | 0,
            this.Ch = B[4] | 0,
            this.Cl = B[5] | 0,
            this.Dh = B[6] | 0,
            this.Dl = B[7] | 0,
            this.Eh = B[8] | 0,
            this.El = B[9] | 0,
            this.Fh = B[10] | 0,
            this.Fl = B[11] | 0,
            this.Gh = B[12] | 0,
            this.Gl = B[13] | 0,
            this.Hh = B[14] | 0,
            this.Hl = B[15] | 0
        }
    }
    ;
    l.SHA512_256 = R;
    l.sha256 = (0,
    _.createHasher)( () => new v);
    l.sha224 = (0,
    _.createHasher)( () => new W);
    l.sha512 = (0,
    _.createHasher)( () => new j);
    l.sha384 = (0,
    _.createHasher)( () => new q);
    l.sha512_256 = (0,
    _.createHasher)( () => new R);
    l.sha512_224 = (0,
    _.createHasher)( () => new K)
}
);
var kt = Z(h => {
    "use strict";
    Object.defineProperty(h, "__esModule", {
        value: !0
    });
    h.notImplemented = h.bitMask = h.utf8ToBytes = h.randomBytes = h.isBytes = h.hexToBytes = h.concatBytes = h.bytesToUtf8 = h.bytesToHex = h.anumber = h.abytes = void 0;
    h.abool = At;
    h._abool2 = _t;
    h._abytes2 = pt;
    h.numberToHexUnpadded = ct;
    h.hexToNumber = st;
    h.bytesToNumberBE = gt;
    h.bytesToNumberLE = St;
    h.numberToBytesBE = at;
    h.numberToBytesLE = Bt;
    h.numberToVarBytesBE = It;
    h.ensureBytes = mt;
    h.equalBytes = Vt;
    h.copyBytes = wt;
    h.asciiToBytes = Et;
    h.inRange = ht;
    h.aInRange = Ut;
    h.bitLen = Tt;
    h.bitGet = Ct;
    h.bitSet = Lt;
    h.createHmacDrbg = Ft;
    h.validateObject = jt;
    h.isHash = Ot;
    h._validateObject = Mt;
    h.memoized = Pt;
    var w = $()
      , T = $();
    Object.defineProperty(h, "abytes", {
        enumerable: !0,
        get: function() {
            return T.abytes
        }
    });
    Object.defineProperty(h, "anumber", {
        enumerable: !0,
        get: function() {
            return T.anumber
        }
    });
    Object.defineProperty(h, "bytesToHex", {
        enumerable: !0,
        get: function() {
            return T.bytesToHex
        }
    });
    Object.defineProperty(h, "bytesToUtf8", {
        enumerable: !0,
        get: function() {
            return T.bytesToUtf8
        }
    });
    Object.defineProperty(h, "concatBytes", {
        enumerable: !0,
        get: function() {
            return T.concatBytes
        }
    });
    Object.defineProperty(h, "hexToBytes", {
        enumerable: !0,
        get: function() {
            return T.hexToBytes
        }
    });
    Object.defineProperty(h, "isBytes", {
        enumerable: !0,
        get: function() {
            return T.isBytes
        }
    });
    Object.defineProperty(h, "randomBytes", {
        enumerable: !0,
        get: function() {
            return T.randomBytes
        }
    });
    Object.defineProperty(h, "utf8ToBytes", {
        enumerable: !0,
        get: function() {
            return T.utf8ToBytes
        }
    });
    var z = BigInt(0)
      , P = BigInt(1);
    function At(t, e) {
        if (typeof e != "boolean")
            throw new Error(t + " boolean expected, got " + e)
    }
    function _t(t, e="") {
        if (typeof t != "boolean") {
            let n = e && `"${e}"`;
            throw new Error(n + "expected boolean, got type=" + typeof t)
        }
        return t
    }
    function pt(t, e, n="") {
        let s = (0,
        w.isBytes)(t)
          , r = t?.length
          , i = e !== void 0;
        if (!s || i && r !== e) {
            let c = n && `"${n}" `
              , a = i ? ` of length ${e}` : ""
              , b = s ? `length=${r}` : `type=${typeof t}`;
            throw new Error(c + "expected Uint8Array" + a + ", got " + b)
        }
        return t
    }
    function ct(t) {
        let e = t.toString(16);
        return e.length & 1 ? "0" + e : e
    }
    function st(t) {
        if (typeof t != "string")
            throw new Error("hex string expected, got " + typeof t);
        return t === "" ? z : BigInt("0x" + t)
    }
    function gt(t) {
        return st((0,
        w.bytesToHex)(t))
    }
    function St(t) {
        return (0,
        w.abytes)(t),
        st((0,
        w.bytesToHex)(Uint8Array.from(t).reverse()))
    }
    function at(t, e) {
        return (0,
        w.hexToBytes)(t.toString(16).padStart(e * 2, "0"))
    }
    function Bt(t, e) {
        return at(t, e).reverse()
    }
    function It(t) {
        return (0,
        w.hexToBytes)(ct(t))
    }
    function mt(t, e, n) {
        let s;
        if (typeof e == "string")
            try {
                s = (0,
                w.hexToBytes)(e)
            } catch (i) {
                throw new Error(t + " must be hex string or Uint8Array, cause: " + i)
            }
        else if ((0,
        w.isBytes)(e))
            s = Uint8Array.from(e);
        else
            throw new Error(t + " must be hex string or Uint8Array");
        let r = s.length;
        if (typeof n == "number" && r !== n)
            throw new Error(t + " of length " + n + " expected, got " + r);
        return s
    }
    function Vt(t, e) {
        if (t.length !== e.length)
            return !1;
        let n = 0;
        for (let s = 0; s < t.length; s++)
            n |= t[s] ^ e[s];
        return n === 0
    }
    function wt(t) {
        return Uint8Array.from(t)
    }
    function Et(t) {
        return Uint8Array.from(t, (e, n) => {
            let s = e.charCodeAt(0);
            if (e.length !== 1 || s > 127)
                throw new Error(`string contains non-ASCII character "${t[n]}" with code ${s} at position ${n}`);
            return s
        }
        )
    }
    var et = t => typeof t == "bigint" && z <= t;
    function ht(t, e, n) {
        return et(t) && et(e) && et(n) && e <= t && t < n
    }
    function Ut(t, e, n, s) {
        if (!ht(e, n, s))
            throw new Error("expected valid " + t + ": " + n + " <= n < " + s + ", got " + e)
    }
    function Tt(t) {
        let e;
        for (e = 0; t > z; t >>= P,
        e += 1)
            ;
        return e
    }
    function Ct(t, e) {
        return t >> BigInt(e) & P
    }
    function Lt(t, e, n) {
        return t | (n ? P : z) << BigInt(e)
    }
    var Dt = t => (P << BigInt(t)) - P;
    h.bitMask = Dt;
    function Ft(t, e, n) {
        if (typeof t != "number" || t < 2)
            throw new Error("hashLen must be a number");
        if (typeof e != "number" || e < 2)
            throw new Error("qByteLen must be a number");
        if (typeof n != "function")
            throw new Error("hmacFn must be a function");
        let s = d => new Uint8Array(d)
          , r = d => Uint8Array.of(d)
          , i = s(t)
          , c = s(t)
          , a = 0
          , b = () => {
            i.fill(1),
            c.fill(0),
            a = 0
        }
          , u = (...d) => n(c, i, ...d)
          , A = (d=s(0)) => {
            c = u(r(0), d),
            i = u(),
            d.length !== 0 && (c = u(r(1), d),
            i = u())
        }
          , f = () => {
            if (a++ >= 1e3)
                throw new Error("drbg: tried 1000 values");
            let d = 0
              , g = [];
            for (; d < e; ) {
                i = u();
                let p = i.slice();
                g.push(p),
                d += i.length
            }
            return (0,
            w.concatBytes)(...g)
        }
        ;
        return (d, g) => {
            b(),
            A(d);
            let p;
            for (; !(p = g(f())); )
                A();
            return b(),
            p
        }
    }
    var Gt = {
        bigint: t => typeof t == "bigint",
        function: t => typeof t == "function",
        boolean: t => typeof t == "boolean",
        string: t => typeof t == "string",
        stringOrUint8Array: t => typeof t == "string" || (0,
        w.isBytes)(t),
        isSafeInteger: t => Number.isSafeInteger(t),
        array: t => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: t => typeof t == "function" && Number.isSafeInteger(t.outputLen)
    };
    function jt(t, e, n={}) {
        let s = (r, i, c) => {
            let a = Gt[i];
            if (typeof a != "function")
                throw new Error("invalid validator function");
            let b = t[r];
            if (!(c && b === void 0) && !a(b, t))
                throw new Error("param " + String(r) + " is invalid. Expected " + i + ", got " + b)
        }
        ;
        for (let[r,i] of Object.entries(e))
            s(r, i, !1);
        for (let[r,i] of Object.entries(n))
            s(r, i, !0);
        return t
    }
    function Ot(t) {
        return typeof t == "function" && Number.isSafeInteger(t.outputLen)
    }
    function Mt(t, e, n={}) {
        if (!t || typeof t != "object")
            throw new Error("expected valid options object");
        function s(r, i, c) {
            let a = t[r];
            if (c && a === void 0)
                return;
            let b = typeof a;
            if (b !== i || a === null)
                throw new Error(`param "${r}" is invalid: expected ${i}, got ${b}`)
        }
        Object.entries(e).forEach( ([r,i]) => s(r, i, !1)),
        Object.entries(n).forEach( ([r,i]) => s(r, i, !0))
    }
    var vt = () => {
        throw new Error("not implemented")
    }
    ;
    h.notImplemented = vt;
    function Pt(t) {
        let e = new WeakMap;
        return (n, ...s) => {
            let r = e.get(n);
            if (r !== void 0)
                return r;
            let i = t(n, ...s);
            return e.set(n, i),
            i
        }
    }
}
);
export {it as a, yt as b, kt as c};
