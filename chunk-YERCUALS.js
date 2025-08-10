import {$ as ie, A as ir, B as Y, C as sr, Ca as Le, D as ar, Da as $e, E as He, Ea as qe, Fa as _e, H as _, Ha as ur, I as cr, K as Me, L as mr, M as pr, R as H, S as M, T as Q, U as ke, V as ee, W as re, X as te, Y as oe, Z as k, _ as ne, a as b, aa as se, b as K, ba as O, c as U, ca as V, da as J, e as Xe, ea as ae, f as A, fa as G, g as Z, ga as ce, h as z, ha as me, ia as pe, j as F, ja as ue, k as B, ka as fe, l as De, la as de, m as q, ma as le, n as Ye, na as xe, o as Qe, oa as he, p as X, pa as ye, qa as ge, r as er, ra as be, s as rr, sa as Ge, t as P, u as Ne, w as tr, x as or, y as nr, z as ze} from "./chunk-HVSB6WDH.js";
import {a as Ze, b as _r} from "./chunk-QV7AMSUB.js";
import {a as d, b as v, d as Je, l as g} from "./chunk-QE6IBIJD.js";
var Ee = class extends b {
    constructor({domain: r}) {
        super(`Invalid domain "${H(r)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."]
        })
    }
}
  , Ie = class extends b {
    constructor({primaryType: r, types: t}) {
        super(`Invalid primary type \`${r}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`, {
            docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
            metaMessages: ["Check that the primary type is a key in `types`."]
        })
    }
}
  , we = class extends b {
    constructor({type: r}) {
        super(`Struct type "${r}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError"
        })
    }
}
;
function fr(e) {
    let {domain: r, message: t, primaryType: o, types: n} = e
      , i = (s, a) => {
        for (let m of s) {
            let {name: h, type: p} = m
              , l = a[h]
              , u = p.match(nr);
            if (u && (typeof l == "number" || typeof l == "bigint")) {
                let[E,y,w] = u;
                De(l, {
                    signed: y === "int",
                    size: Number.parseInt(w) / 8
                })
            }
            if (p === "address" && typeof l == "string" && !tr(l))
                throw new er({
                    address: l
                });
            let f = p.match(or);
            if (f) {
                let[E,y] = f;
                if (y && U(l) !== Number.parseInt(y))
                    throw new Qe({
                        expectedSize: Number.parseInt(y),
                        givenSize: U(l)
                    })
            }
            let c = n[p];
            c && (Or(p),
            i(c, l))
        }
    }
    ;
    if (n.EIP712Domain && r) {
        if (typeof r != "object")
            throw new Ee({
                domain: r
            });
        i(n.EIP712Domain, r)
    }
    if (o !== "EIP712Domain")
        if (n[o])
            i(n[o], t);
        else
            throw new Ie({
                primaryType: o,
                types: n
            })
}
function dr({domain: e}) {
    return [typeof e?.name == "string" && {
        name: "name",
        type: "string"
    }, e?.version && {
        name: "version",
        type: "string"
    }, (typeof e?.chainId == "number" || typeof e?.chainId == "bigint") && {
        name: "chainId",
        type: "uint256"
    }, e?.verifyingContract && {
        name: "verifyingContract",
        type: "address"
    }, e?.salt && {
        name: "salt",
        type: "bytes32"
    }].filter(Boolean)
}
function Or(e) {
    if (e === "address" || e === "bool" || e === "string" || e.startsWith("bytes") || e.startsWith("uint") || e.startsWith("int"))
        throw new we({
            type: e
        })
}
function Vr(e) {
    let {domain: r={}, message: t, primaryType: o} = e
      , n = d({
        EIP712Domain: dr({
            domain: r
        })
    }, e.types);
    fr({
        domain: r,
        message: t,
        primaryType: o,
        types: n
    });
    let i = ["0x1901"];
    return r && i.push(lr({
        domain: r,
        types: n
    })),
    o !== "EIP712Domain" && i.push(Oe({
        data: t,
        primaryType: o,
        types: n
    })),
    P(X(i))
}
function lr({domain: e, types: r}) {
    return Oe({
        data: e,
        primaryType: "EIP712Domain",
        types: r
    })
}
function Oe({data: e, primaryType: r, types: t}) {
    let o = xr({
        data: e,
        primaryType: r,
        types: t
    });
    return P(o)
}
function xr({data: e, primaryType: r, types: t}) {
    let o = [{
        type: "bytes32"
    }]
      , n = [jr({
        primaryType: r,
        types: t
    })];
    for (let i of t[r]) {
        let[s,a] = yr({
            types: t,
            name: i.name,
            type: i.type,
            value: e[i.name]
        });
        o.push(s),
        n.push(a)
    }
    return ze(o, n)
}
function jr({primaryType: e, types: r}) {
    let t = F(Wr({
        primaryType: e,
        types: r
    }));
    return P(t)
}
function Wr({primaryType: e, types: r}) {
    let t = ""
      , o = hr({
        primaryType: e,
        types: r
    });
    o.delete(e);
    let n = [e, ...Array.from(o).sort()];
    for (let i of n)
        t += `${i}(${r[i].map( ({name: s, type: a}) => `${a} ${s}`).join(",")})`;
    return t
}
function hr({primaryType: e, types: r}, t=new Set) {
    let n = e.match(/^\w*/u)?.[0];
    if (t.has(n) || r[n] === void 0)
        return t;
    t.add(n);
    for (let i of r[n])
        hr({
            primaryType: i.type,
            types: r
        }, t);
    return t
}
function yr({types: e, name: r, type: t, value: o}) {
    if (e[t] !== void 0)
        return [{
            type: "bytes32"
        }, P(xr({
            data: o,
            primaryType: t,
            types: e
        }))];
    if (t === "bytes")
        return o = `0x${(o.length % 2 ? "0" : "") + o.slice(2)}`,
        [{
            type: "bytes32"
        }, P(o)];
    if (t === "string")
        return [{
            type: "bytes32"
        }, P(F(o))];
    if (t.lastIndexOf("]") === t.length - 1) {
        let n = t.slice(0, t.lastIndexOf("["))
          , i = o.map(s => yr({
            name: r,
            type: n,
            types: e,
            value: s
        }));
        return [{
            type: "bytes32"
        }, P(ze(i.map( ([s]) => s), i.map( ([,s]) => s)))]
    }
    return [{
        type: t
    }, o]
}
var gr = `Ethereum Signed Message:
`;
function br(e) {
    let r = typeof e == "string" ? q(e) : typeof e.raw == "string" ? e.raw : B(e.raw)
      , t = q(`${gr}${U(r)}`);
    return X([t, r])
}
function Kr(e, r) {
    return P(br(e), r)
}
var Jr = 3;
function Vt(e, {abi: r, address: t, args: o, docsPath: n, functionName: i, sender: s}) {
    let a = e instanceof _e ? e : e instanceof b ? e.walk(c => "data"in c) || e.walk() : {}
      , {code: m, data: h, details: p, message: l, shortMessage: u} = a
      , f = e instanceof Ye ? new qe({
        functionName: i
    }) : [Jr, k.code].includes(m) && (h || p || l || u) ? new $e({
        abi: r,
        data: typeof h == "object" ? h.data : h,
        functionName: i,
        message: a instanceof Q ? p : u ?? l
    }) : e;
    return new Le(f,{
        abi: r,
        args: o,
        contractAddress: t,
        docsPath: n,
        functionName: i,
        sender: s
    })
}
function Er(e) {
    let r = P(`0x${e.substring(4)}`).substring(26);
    return Ne(`0x${r}`)
}
function wr(t) {
    return g(this, arguments, function*({hash: e, signature: r}) {
        let o = K(e) ? e : F(e)
          , {secp256k1: n} = yield import("./chunk-ZVGVTZ5S.js");
        return `0x${( () => {
            if (typeof r == "object" && "r"in r && "s"in r) {
                let {r: p, s: l, v: u, yParity: f} = r
                  , c = Number(f ?? u)
                  , E = Ir(c);
                return new n.Signature(Z(p),Z(l)).addRecoveryBit(E)
            }
            let a = K(r) ? r : F(r);
            if (U(a) !== 65)
                throw new Error("invalid signature length");
            let m = z(`0x${a.slice(130)}`)
              , h = Ir(m);
            return n.Signature.fromCompact(a.substring(2, 130)).addRecoveryBit(h)
        }
        )().recoverPublicKey(o.substring(2)).toHex(!1)}`
    })
}
function Ir(e) {
    if (e === 0 || e === 1)
        return e;
    if (e === 27)
        return 0;
    if (e === 28)
        return 1;
    throw new Error("Invalid yParityOrV value")
}
function no(t) {
    return g(this, arguments, function*({hash: e, signature: r}) {
        return Er(yield wr({
            hash: e,
            signature: r
        }))
    })
}
function uo(e, r="hex") {
    let t = Tr(e)
      , o = Y(new Uint8Array(t.length));
    return t.encode(o),
    r === "hex" ? B(o.bytes) : o.bytes
}
function Tr(e) {
    return Array.isArray(e) ? Zr(e.map(r => Tr(r))) : Xr(e)
}
function Zr(e) {
    let r = e.reduce( (n, i) => n + i.length, 0)
      , t = vr(r);
    return {
        length: r <= 55 ? 1 + r : 1 + t + r,
        encode(n) {
            r <= 55 ? n.pushByte(192 + r) : (n.pushByte(247 + t),
            t === 1 ? n.pushUint8(r) : t === 2 ? n.pushUint16(r) : t === 3 ? n.pushUint24(r) : n.pushUint32(r));
            for (let {encode: i} of e)
                i(n)
        }
    }
}
function Xr(e) {
    let r = typeof e == "string" ? A(e) : e
      , t = vr(r.length);
    return {
        length: r.length === 1 && r[0] < 128 ? 1 : r.length <= 55 ? 1 + r.length : 1 + t + r.length,
        encode(n) {
            r.length === 1 && r[0] < 128 ? n.pushBytes(r) : r.length <= 55 ? (n.pushByte(128 + r.length),
            n.pushBytes(r)) : (n.pushByte(183 + t),
            t === 1 ? n.pushUint8(r.length) : t === 2 ? n.pushUint16(r.length) : t === 3 ? n.pushUint24(r.length) : n.pushUint32(r.length),
            n.pushBytes(r))
        }
    }
}
function vr(e) {
    if (e < 2 ** 8)
        return 1;
    if (e < 2 ** 16)
        return 2;
    if (e < 2 ** 24)
        return 3;
    if (e < 2 ** 32)
        return 4;
    throw new b("Length is too large.")
}
var Br = class extends b {
    constructor(r, {account: t, docsPath: o, chain: n, data: i, gas: s, gasPrice: a, maxFeePerGas: m, maxPriorityFeePerGas: h, nonce: p, to: l, value: u}) {
        let f = mr({
            from: t?.address,
            to: l,
            value: typeof u < "u" && `${Me(u)} ${n?.nativeCurrency?.symbol || "ETH"}`,
            data: i,
            gas: s,
            gasPrice: typeof a < "u" && `${_(a)} gwei`,
            maxFeePerGas: typeof m < "u" && `${_(m)} gwei`,
            maxPriorityFeePerGas: typeof h < "u" && `${_(h)} gwei`,
            nonce: p
        });
        super(r.shortMessage, {
            cause: r,
            docsPath: o,
            metaMessages: [...r.metaMessages ? [...r.metaMessages, " "] : [], "Estimate Gas Arguments:", f].filter(Boolean),
            name: "EstimateGasExecutionError"
        }),
        Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.cause = r
    }
}
;
var Pr = class extends b {
    constructor() {
        super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError"
        })
    }
}
  , Cr = class extends b {
    constructor() {
        super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError"
        })
    }
}
  , Sr = class extends b {
    constructor({maxPriorityFeePerGas: r}) {
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${_(r)} gwei).`, {
            name: "MaxFeePerGasTooLowError"
        })
    }
}
;
var Rr = class extends b {
    constructor({blockHash: r, blockNumber: t}) {
        let o = "Block";
        r && (o = `Block at hash "${r}"`),
        t && (o = `Block at number "${t}"`),
        super(`${o} could not be found.`, {
            name: "BlockNotFoundError"
        })
    }
}
;
var Ve = {
    "0x0": "legacy",
    "0x1": "eip2930",
    "0x2": "eip1559",
    "0x3": "eip4844",
    "0x4": "eip7702"
};
function Ur(e) {
    let r = v(d({}, e), {
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        chainId: e.chainId ? z(e.chainId) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
        maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
        nonce: e.nonce ? z(e.nonce) : void 0,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
        type: e.type ? Ve[e.type] : void 0,
        typeHex: e.type ? e.type : void 0,
        value: e.value ? BigInt(e.value) : void 0,
        v: e.v ? BigInt(e.v) : void 0
    });
    return e.authorizationList && (r.authorizationList = Yr(e.authorizationList)),
    r.yParity = ( () => {
        if (e.yParity)
            return Number(e.yParity);
        if (typeof r.v == "bigint") {
            if (r.v === 0n || r.v === 27n)
                return 0;
            if (r.v === 1n || r.v === 28n)
                return 1;
            if (r.v >= 35n)
                return r.v % 2n === 0n ? 1 : 0
        }
    }
    )(),
    r.type === "legacy" && (delete r.accessList,
    delete r.maxFeePerBlobGas,
    delete r.maxFeePerGas,
    delete r.maxPriorityFeePerGas,
    delete r.yParity),
    r.type === "eip2930" && (delete r.maxFeePerBlobGas,
    delete r.maxFeePerGas,
    delete r.maxPriorityFeePerGas),
    r.type === "eip1559" && delete r.maxFeePerBlobGas,
    r
}
function Yr(e) {
    return e.map(r => ({
        address: r.address,
        chainId: Number(r.chainId),
        nonce: Number(r.nonce),
        r: r.r,
        s: r.s,
        yParity: Number(r.yParity)
    }))
}
function So(e) {
    let r = (e.transactions ?? []).map(t => typeof t == "string" ? t : Ur(t));
    return v(d({}, e), {
        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
        hash: e.hash ? e.hash : null,
        logsBloom: e.logsBloom ? e.logsBloom : null,
        nonce: e.nonce ? e.nonce : null,
        number: e.number ? BigInt(e.number) : null,
        size: e.size ? BigInt(e.size) : void 0,
        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
        transactions: r,
        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
    })
}
function Ar(e) {
    let {kzg: r} = e
      , t = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes")
      , o = typeof e.blobs[0] == "string" ? e.blobs.map(i => A(i)) : e.blobs
      , n = [];
    for (let i of o)
        n.push(Uint8Array.from(r.blobToKzgCommitment(i)));
    return t === "bytes" ? n : n.map(i => B(i))
}
function Fr(e) {
    let {kzg: r} = e
      , t = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes")
      , o = typeof e.blobs[0] == "string" ? e.blobs.map(s => A(s)) : e.blobs
      , n = typeof e.commitments[0] == "string" ? e.commitments.map(s => A(s)) : e.commitments
      , i = [];
    for (let s = 0; s < o.length; s++) {
        let a = o[s]
          , m = n[s];
        i.push(Uint8Array.from(r.computeBlobKzgProof(a, m)))
    }
    return t === "bytes" ? i : i.map(s => B(s))
}
_r();
function Dr(e, r) {
    let t = r || "hex"
      , o = Ze(K(e, {
        strict: !1
    }) ? Xe(e) : e);
    return t === "bytes" ? o : F(o)
}
function Nr(e) {
    let {commitment: r, version: t=1} = e
      , o = e.to ?? (typeof r == "string" ? "hex" : "bytes")
      , n = Dr(r, "bytes");
    return n.set([t], 0),
    o === "bytes" ? n : B(n)
}
function jo(e) {
    let {commitments: r, version: t} = e
      , o = e.to ?? (typeof r[0] == "string" ? "hex" : "bytes")
      , n = [];
    for (let i of r)
        n.push(Nr({
            commitment: i,
            to: o,
            version: t
        }));
    return n
}
var Te = class extends b {
    constructor({maxSize: r, size: t}) {
        super("Blob size is too large.", {
            metaMessages: [`Max: ${r} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError"
        })
    }
}
  , ve = class extends b {
    constructor() {
        super("Blob data must not be empty.", {
            name: "EmptyBlobError"
        })
    }
}
;
function zr(e) {
    let r = e.to ?? (typeof e.data == "string" ? "hex" : "bytes")
      , t = typeof e.data == "string" ? A(e.data) : e.data
      , o = U(t);
    if (!o)
        throw new ve;
    if (o > 761855)
        throw new Te({
            maxSize: 761855,
            size: o
        });
    let n = []
      , i = !0
      , s = 0;
    for (; i; ) {
        let a = Y(new Uint8Array(131072))
          , m = 0;
        for (; m < 4096; ) {
            let h = t.slice(s, s + 31);
            if (a.pushByte(0),
            a.pushBytes(h),
            h.length < 31) {
                a.pushByte(128),
                i = !1;
                break
            }
            m++,
            s += 31
        }
        n.push(a)
    }
    return r === "bytes" ? n.map(a => a.bytes) : n.map(a => B(a.bytes))
}
function mn(e) {
    let {data: r, kzg: t, to: o} = e
      , n = e.blobs ?? zr({
        data: r,
        to: o
    })
      , i = e.commitments ?? Ar({
        blobs: n,
        kzg: t,
        to: o
    })
      , s = e.proofs ?? Fr({
        blobs: n,
        commitments: i,
        kzg: t,
        to: o
    })
      , a = [];
    for (let m = 0; m < n.length; m++)
        a.push({
            blob: n[m],
            commitment: i[m],
            proof: s[m]
        });
    return a
}
function fn(e) {
    if (e.type)
        return e.type;
    if (typeof e.authorizationList < "u")
        return "eip7702";
    if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u")
        return "eip4844";
    if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
        return "eip1559";
    if (typeof e.gasPrice < "u")
        return typeof e.accessList < "u" ? "eip2930" : "legacy";
    throw new pr({
        transaction: e
    })
}
function Hr(e, {args: r, eventName: t}={}) {
    return d(v(d({}, e), {
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        logIndex: e.logIndex ? Number(e.logIndex) : null,
        transactionHash: e.transactionHash ? e.transactionHash : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null
    }), t ? {
        args: r,
        eventName: t
    } : {})
}
function Be(e) {
    return g(this, null, function*() {
        return new Promise(r => setTimeout(r, e))
    })
}
var et = new Map
  , rt = new Map;
function tt(e) {
    let r = (n, i) => ({
        clear: () => i.delete(n),
        get: () => i.get(n),
        set: s => i.set(n, s)
    })
      , t = r(e, et)
      , o = r(e, rt);
    return {
        clear: () => {
            t.clear(),
            o.clear()
        }
        ,
        promise: t,
        response: o
    }
}
function gn(o, n) {
    return g(this, arguments, function*(e, {cacheKey: r, cacheTime: t=Number.POSITIVE_INFINITY}) {
        let i = tt(r)
          , s = i.response.get();
        if (s && t > 0 && new Date().getTime() - s.created.getTime() < t)
            return s.data;
        let a = i.promise.get();
        a || (a = e(),
        i.promise.set(a));
        try {
            let m = yield a;
            return i.response.set({
                created: new Date,
                data: m
            }),
            m
        } finally {
            i.promise.clear()
        }
    })
}
function wn({chain: e, currentChainId: r}) {
    if (!e)
        throw new ar;
    if (r !== e.id)
        throw new sr({
            chain: e,
            currentChainId: r
        })
}
function je(e, {delay: r=100, retryCount: t=2, shouldRetry: o= () => !0}={}) {
    return new Promise( (n, i) => {
        let s = (...m) => g(this, [...m], function*({count: a=0}={}) {
            let h = l => g(this, [l], function*({error: p}) {
                let u = typeof r == "function" ? r({
                    count: a,
                    error: p
                }) : r;
                u && (yield Be(u)),
                s({
                    count: a + 1
                })
            });
            try {
                let p = yield e();
                n(p)
            } catch (p) {
                if (a < t && (yield o({
                    count: a,
                    error: p
                })))
                    return h({
                        error: p
                    });
                i(p)
            }
        });
        s()
    }
    )
}
var ot = {
    "0x0": "reverted",
    "0x1": "success"
};
function Un(e) {
    let r = v(d({}, e), {
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        contractAddress: e.contractAddress ? e.contractAddress : null,
        cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
        effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
        logs: e.logs ? e.logs.map(t => Hr(t)) : null,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? z(e.transactionIndex) : null,
        status: e.status ? ot[e.status] : null,
        type: e.type ? Ve[e.type] || e.type : null
    });
    return e.blobGasPrice && (r.blobGasPrice = BigInt(e.blobGasPrice)),
    e.blobGasUsed && (r.blobGasUsed = BigInt(e.blobGasUsed)),
    r
}
var Pe = 256, Ce;
function Se(e=11) {
    if (!Ce || Pe + e > 256 * 2) {
        Ce = "",
        Pe = 0;
        for (let r = 0; r < 256; r++)
            Ce += (256 + Math.random() * 256 | 0).toString(16).substring(1)
    }
    return Ce.substring(Pe, Pe++ + e)
}
function nt(e) {
    let {batch: r, chain: t, ccipRead: o, key: n="base", name: i="Base Client", type: s="base"} = e
      , a = e.experimental_blockTag ?? (typeof t?.experimental_preconfirmationTime == "number" ? "pending" : void 0)
      , m = t?.blockTime ?? 12e3
      , h = Math.min(Math.max(Math.floor(m / 2), 500), 4e3)
      , p = e.pollingInterval ?? h
      , l = e.cacheTime ?? p
      , u = e.account ? ir(e.account) : void 0
      , {config: f, request: c, value: E} = e.transport({
        chain: t,
        pollingInterval: p
    })
      , y = d(d({}, f), E)
      , w = d({
        account: u,
        batch: r,
        cacheTime: l,
        ccipRead: o,
        chain: t,
        key: n,
        name: i,
        pollingInterval: p,
        request: c,
        transport: y,
        type: s,
        uid: Se()
    }, a ? {
        experimental_blockTag: a
    } : {});
    function x(I) {
        return D => {
            let C = D(I);
            for (let S in w)
                delete C[S];
            let T = d(d({}, I), C);
            return Object.assign(T, {
                extend: x(T)
            })
        }
    }
    return Object.assign(w, {
        extend: x(w)
    })
}
var Re = new rr(8192);
function Mr(e, {enabled: r=!0, id: t}) {
    if (!r || !t)
        return e();
    if (Re.get(t))
        return Re.get(t);
    let o = e().finally( () => Re.delete(t));
    return Re.set(t, o),
    o
}
function kr(e, r={}) {
    return (n, ...i) => g(this, [n, ...i], function*(t, o={}) {
        let {dedupe: s=!1, methods: a, retryDelay: m=150, retryCount: h=3, uid: p} = d(d({}, r), o)
          , {method: l} = t;
        if (a?.exclude?.includes(l))
            throw new V(new Error("method not supported"),{
                method: l
            });
        if (a?.include && !a.include.includes(l))
            throw new V(new Error("method not supported"),{
                method: l
            });
        let u = s ? q(`${p}.${H(t)}`) : void 0;
        return Mr( () => je( () => g(this, null, function*() {
            try {
                return yield e(t)
            } catch (f) {
                let c = f;
                switch (c.code) {
                case ee.code:
                    throw new ee(c);
                case re.code:
                    throw new re(c);
                case te.code:
                    throw new te(c,{
                        method: t.method
                    });
                case oe.code:
                    throw new oe(c);
                case k.code:
                    throw new k(c);
                case ne.code:
                    throw new ne(c);
                case ie.code:
                    throw new ie(c);
                case se.code:
                    throw new se(c);
                case O.code:
                    throw new O(c);
                case V.code:
                    throw new V(c,{
                        method: t.method
                    });
                case J.code:
                    throw new J(c);
                case ae.code:
                    throw new ae(c);
                case G.code:
                    throw new G(c);
                case ce.code:
                    throw new ce(c);
                case me.code:
                    throw new me(c);
                case pe.code:
                    throw new pe(c);
                case ue.code:
                    throw new ue(c);
                case fe.code:
                    throw new fe(c);
                case de.code:
                    throw new de(c);
                case le.code:
                    throw new le(c);
                case xe.code:
                    throw new xe(c);
                case he.code:
                    throw new he(c);
                case ye.code:
                    throw new ye(c);
                case ge.code:
                    throw new ge(c);
                case be.code:
                    throw new be(c);
                case 5e3:
                    throw new G(c);
                default:
                    throw f instanceof b ? f : new Ge(c)
                }
            }
        }), {
            delay: ({count: f, error: c}) => {
                if (c && c instanceof M) {
                    let E = c?.headers?.get("Retry-After");
                    if (E?.match(/\d/))
                        return Number.parseInt(E) * 1e3
                }
                return ~~(1 << f) * m
            }
            ,
            retryCount: h,
            shouldRetry: ({error: f}) => it(f)
        }), {
            enabled: s,
            id: u
        })
    })
}
function it(e) {
    return "code"in e && typeof e.code == "number" ? e.code === -1 || e.code === J.code || e.code === k.code : e instanceof M && e.status ? e.status === 403 || e.status === 408 || e.status === 413 || e.status === 429 || e.status === 500 || e.status === 502 || e.status === 503 || e.status === 504 : !0
}
function j({key: e, methods: r, name: t, request: o, retryCount: n=3, retryDelay: i=150, timeout: s, type: a}, m) {
    let h = Se();
    return {
        config: {
            key: e,
            methods: r,
            name: t,
            request: o,
            retryCount: n,
            retryDelay: i,
            timeout: s,
            type: a
        },
        request: kr(o, {
            methods: r,
            retryCount: n,
            retryDelay: i,
            uid: h
        }),
        value: m
    }
}
function st(e, r={}) {
    let {key: t="custom", methods: o, name: n="Custom Provider", retryDelay: i} = r;
    return ({retryCount: s}) => j({
        key: t,
        methods: o,
        name: n,
        request: e.request.bind(e),
        retryCount: r.retryCount ?? s,
        retryDelay: i,
        type: "custom"
    })
}
function at(e, r={}) {
    let {key: t="fallback", name: o="Fallback", rank: n=!1, shouldThrow: i=Gr, retryCount: s, retryDelay: a} = r;
    return u => {
        var f = u
          , {chain: m, pollingInterval: h=4e3, timeout: p} = f
          , l = Je(f, ["chain", "pollingInterval", "timeout"]);
        let c = e
          , E = () => {}
          , y = j({
            key: t,
            name: o,
            request(D) {
                return g(this, arguments, function*({method: x, params: I}) {
                    let C, T = (S=0) => g(this, null, function*() {
                        let L = c[S](v(d({}, l), {
                            chain: m,
                            retryCount: 0,
                            timeout: p
                        }));
                        try {
                            let R = yield L.request({
                                method: x,
                                params: I
                            });
                            return E({
                                method: x,
                                params: I,
                                response: R,
                                transport: L,
                                status: "success"
                            }),
                            R
                        } catch (R) {
                            if (E({
                                error: R,
                                method: x,
                                params: I,
                                transport: L,
                                status: "error"
                            }),
                            i(R) || S === c.length - 1 || (C ??= c.slice(S + 1).some(Fe => {
                                let {include: $, exclude: W} = Fe({
                                    chain: m
                                }).config.methods || {};
                                return $ ? $.includes(x) : W ? !W.includes(x) : !0
                            }
                            ),
                            !C))
                                throw R;
                            return T(S + 1)
                        }
                    });
                    return T()
                })
            },
            retryCount: s,
            retryDelay: a,
            type: "fallback"
        }, {
            onResponse: x => E = x,
            transports: c.map(x => x({
                chain: m,
                retryCount: 0
            }))
        });
        if (n) {
            let x = typeof n == "object" ? n : {};
            ct({
                chain: m,
                interval: x.interval ?? h,
                onTransports: I => c = I,
                ping: x.ping,
                sampleCount: x.sampleCount,
                timeout: x.timeout,
                transports: c,
                weights: x.weights
            })
        }
        return y
    }
}
function Gr(e) {
    return !!("code"in e && typeof e.code == "number" && (e.code === O.code || e.code === G.code || cr.nodeMessage.test(e.message) || e.code === 5e3))
}
function ct({chain: e, interval: r=4e3, onTransports: t, ping: o, sampleCount: n=10, timeout: i=1e3, transports: s, weights: a={}}) {
    let {stability: m=.7, latency: h=.3} = a
      , p = []
      , l = () => g(this, null, function*() {
        let u = yield Promise.all(s.map(E => g(this, null, function*() {
            let y = E({
                chain: e,
                retryCount: 0,
                timeout: i
            }), w = Date.now(), x, I;
            try {
                yield o ? o({
                    transport: y
                }) : y.request({
                    method: "net_listening"
                }),
                I = 1
            } catch {
                I = 0
            } finally {
                x = Date.now()
            }
            return {
                latency: x - w,
                success: I
            }
        })));
        p.push(u),
        p.length > n && p.shift();
        let f = Math.max(...p.map(E => Math.max(...E.map( ({latency: y}) => y))))
          , c = s.map( (E, y) => {
            let w = p.map(T => T[y].latency)
              , I = 1 - w.reduce( (T, S) => T + S, 0) / w.length / f
              , D = p.map(T => T[y].success)
              , C = D.reduce( (T, S) => T + S, 0) / D.length;
            return C === 0 ? [0, y] : [h * I + m * C, y]
        }
        ).sort( (E, y) => y[0] - E[0]);
        t(c.map( ([,E]) => s[E])),
        yield Be(r),
        l()
    });
    l()
}
var Ue = class extends b {
    constructor() {
        super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
            docsPath: "/docs/clients/intro",
            name: "UrlRequiredError"
        })
    }
}
;
function We(e, {errorInstance: r=new Error("timed out"), timeout: t, signal: o}) {
    return new Promise( (n, i) => {
        g(this, null, function*() {
            let s;
            try {
                let a = new AbortController;
                t > 0 && (s = setTimeout( () => {
                    o ? a.abort() : i(r)
                }
                , t)),
                n(yield e({
                    signal: a?.signal || null
                }))
            } catch (a) {
                a?.name === "AbortError" && i(r),
                i(a)
            } finally {
                clearTimeout(s)
            }
        })
    }
    )
}
function mt() {
    return {
        current: 0,
        take() {
            return this.current++
        },
        reset() {
            this.current = 0
        }
    }
}
var Ke = mt();
function Lr(e, r={}) {
    return {
        request(o) {
            return g(this, null, function*() {
                let {body: n, onRequest: i=r.onRequest, onResponse: s=r.onResponse, timeout: a=r.timeout ?? 1e4} = o
                  , m = d(d({}, r.fetchOptions ?? {}), o.fetchOptions ?? {})
                  , {headers: h, method: p, signal: l} = m;
                try {
                    let u = yield We(E => g(this, [E], function*({signal: c}) {
                        let y = v(d({}, m), {
                            body: Array.isArray(n) ? H(n.map(D => d({
                                jsonrpc: "2.0",
                                id: D.id ?? Ke.take()
                            }, D))) : H(d({
                                jsonrpc: "2.0",
                                id: n.id ?? Ke.take()
                            }, n)),
                            headers: d({
                                "Content-Type": "application/json"
                            }, h),
                            method: p || "POST",
                            signal: l || (a > 0 ? c : null)
                        })
                          , w = new Request(e,y)
                          , x = (yield i?.(w, y)) ?? v(d({}, y), {
                            url: e
                        });
                        return yield fetch(x.url ?? e, x)
                    }), {
                        errorInstance: new ke({
                            body: n,
                            url: e
                        }),
                        timeout: a,
                        signal: !0
                    });
                    s && (yield s(u));
                    let f;
                    if (u.headers.get("Content-Type")?.startsWith("application/json"))
                        f = yield u.json();
                    else {
                        f = yield u.text();
                        try {
                            f = JSON.parse(f || "{}")
                        } catch (c) {
                            if (u.ok)
                                throw c;
                            f = {
                                error: f
                            }
                        }
                    }
                    if (!u.ok)
                        throw new M({
                            body: n,
                            details: H(f.error) || u.statusText,
                            headers: u.headers,
                            status: u.status,
                            url: e
                        });
                    return f
                } catch (u) {
                    throw u instanceof M || u instanceof ke ? u : new M({
                        body: n,
                        cause: u,
                        url: e
                    })
                }
            })
        }
    }
}
function pt(e, r={}) {
    let {batch: t, fetchOptions: o, key: n="http", methods: i, name: s="HTTP JSON-RPC", onFetchRequest: a, onFetchResponse: m, retryDelay: h, raw: p} = r;
    return ({chain: l, retryCount: u, timeout: f}) => {
        let {batchSize: c=1e3, wait: E=0} = typeof t == "object" ? t : {}
          , y = r.retryCount ?? u
          , w = f ?? r.timeout ?? 1e4
          , x = e || l?.rpcUrls.default.http[0];
        if (!x)
            throw new Ue;
        let I = Lr(x, {
            fetchOptions: o,
            onRequest: a,
            onResponse: m,
            timeout: w
        });
        return j({
            key: n,
            methods: i,
            name: s,
            request(S) {
                return g(this, arguments, function*({method: C, params: T}) {
                    let L = {
                        method: C,
                        params: T
                    }
                      , {schedule: R} = ur({
                        id: x,
                        wait: E,
                        shouldSplitBatch(N) {
                            return N.length > c
                        },
                        fn: N => I.request({
                            body: N
                        }),
                        sort: (N, qr) => N.id - qr.id
                    })
                      , Fe = N => g(this, null, function*() {
                        return t ? R(N) : [yield I.request({
                            body: N
                        })]
                    })
                      , [{error: $, result: W}] = yield Fe(L);
                    if (p)
                        return {
                            error: $,
                            result: W
                        };
                    if ($)
                        throw new Q({
                            body: L,
                            error: $,
                            url: x
                        });
                    return W
                })
            },
            retryCount: y,
            retryDelay: h,
            timeout: w,
            type: "http"
        }, {
            fetchOptions: o,
            url: x
        })
    }
}
function vi(e) {
    return d({
        formatters: void 0,
        fees: void 0,
        serializers: void 0
    }, e)
}
var Ae = class extends b {
    constructor({value: r}) {
        super(`Number \`${r}\` is not a valid decimal number.`, {
            name: "InvalidDecimalNumberError"
        })
    }
}
;
function $r(e, r) {
    if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))
        throw new Ae({
            value: e
        });
    let[t,o="0"] = e.split(".")
      , n = t.startsWith("-");
    if (n && (t = t.slice(1)),
    o = o.replace(/(0+)$/, ""),
    r === 0)
        Math.round(+`.${o}`) === 1 && (t = `${BigInt(t) + 1n}`),
        o = "";
    else if (o.length > r) {
        let[i,s,a] = [o.slice(0, r - 1), o.slice(r - 1, r), o.slice(r)]
          , m = Math.round(+`${s}.${a}`);
        m > 9 ? o = `${BigInt(i) + BigInt(1)}0`.padStart(i.length + 1, "0") : o = `${i}${m}`,
        o.length > r && (o = o.slice(1),
        t = `${BigInt(t) + 1n}`),
        o = o.slice(0, r)
    } else
        o = o.padEnd(r, "0");
    return BigInt(`${n ? "-" : ""}${t}${o}`)
}
function ut(e, r="wei") {
    return $r(e, He[r])
}
export {no as a, uo as b, wn as c, Pr as d, Cr as e, Sr as f, Rr as g, Ur as h, So as i, Br as j, Ar as k, Fr as l, jo as m, mn as n, fn as o, Vt as p, gn as q, Un as r, Be as s, je as t, vi as u, We as v, Vr as w, Kr as x, ut as y, nt as z, st as A, at as B, pt as C};
