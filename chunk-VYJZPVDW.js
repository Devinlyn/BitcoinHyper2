import {a as dt, b as Dt, d as ft, e as Ht, f as Nt, i as mt, j as lt, k as _t, m as Gt, n as Vt, o as Wt} from "./chunk-5VG4SAOU.js";
import {a as Lt, b as pt} from "./chunk-DATZCTIA.js";
import {a as g, b as v, d as T, l as B} from "./chunk-QE6IBIJD.js";
function V(e) {
    return typeof e == "string" ? {
        address: e,
        type: "json-rpc"
    } : e
}
var yt = [{
    inputs: [{
        components: [{
            name: "target",
            type: "address"
        }, {
            name: "allowFailure",
            type: "bool"
        }, {
            name: "callData",
            type: "bytes"
        }],
        name: "calls",
        type: "tuple[]"
    }],
    name: "aggregate3",
    outputs: [{
        components: [{
            name: "success",
            type: "bool"
        }, {
            name: "returnData",
            type: "bytes"
        }],
        name: "returnData",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}]
  , Xt = [{
    inputs: [],
    name: "ResolverNotFound",
    type: "error"
}, {
    inputs: [],
    name: "ResolverWildcardNotSupported",
    type: "error"
}, {
    inputs: [],
    name: "ResolverNotContract",
    type: "error"
}, {
    inputs: [{
        name: "returnData",
        type: "bytes"
    }],
    name: "ResolverError",
    type: "error"
}, {
    inputs: [{
        components: [{
            name: "status",
            type: "uint16"
        }, {
            name: "message",
            type: "string"
        }],
        name: "errors",
        type: "tuple[]"
    }],
    name: "HttpError",
    type: "error"
}]
  , Zr = [...Xt, {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [{
        name: "name",
        type: "bytes"
    }, {
        name: "data",
        type: "bytes"
    }],
    outputs: [{
        name: "",
        type: "bytes"
    }, {
        name: "address",
        type: "address"
    }]
}, {
    name: "resolve",
    type: "function",
    stateMutability: "view",
    inputs: [{
        name: "name",
        type: "bytes"
    }, {
        name: "data",
        type: "bytes"
    }, {
        name: "gateways",
        type: "string[]"
    }],
    outputs: [{
        name: "",
        type: "bytes"
    }, {
        name: "address",
        type: "address"
    }]
}]
  , Kr = [...Xt, {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [{
        type: "bytes",
        name: "reverseName"
    }],
    outputs: [{
        type: "string",
        name: "resolvedName"
    }, {
        type: "address",
        name: "resolvedAddress"
    }, {
        type: "address",
        name: "reverseResolver"
    }, {
        type: "address",
        name: "resolver"
    }]
}, {
    name: "reverse",
    type: "function",
    stateMutability: "view",
    inputs: [{
        type: "bytes",
        name: "reverseName"
    }, {
        type: "string[]",
        name: "gateways"
    }],
    outputs: [{
        type: "string",
        name: "resolvedName"
    }, {
        type: "address",
        name: "resolvedAddress"
    }, {
        type: "address",
        name: "reverseResolver"
    }, {
        type: "address",
        name: "resolver"
    }]
}];
var Yt = "0x82ad56cb";
var qt = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe"
  , Jt = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe";
var ht = "2.23.2";
var bt = {
    getDocsUrl: ({docsBaseUrl: e, docsPath: t="", docsSlug: n}) => t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
    version: `viem@${ht}`
};
var u = class e extends Error {
    constructor(t, n={}) {
        let r = n.cause instanceof e ? n.cause.details : n.cause?.message ? n.cause.message : n.details
          , o = n.cause instanceof e && n.cause.docsPath || n.docsPath
          , i = bt.getDocsUrl?.(v(g({}, n), {
            docsPath: o
        }))
          , s = [t || "An error occurred.", "", ...n.metaMessages ? [...n.metaMessages, ""] : [], ...i ? [`Docs: ${i}`] : [], ...r ? [`Details: ${r}`] : [], ...bt.version ? [`Version: ${bt.version}`] : []].join(`
`);
        super(s, n.cause ? {
            cause: n.cause
        } : void 0),
        Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "docsPath", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "metaMessages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "BaseError"
        }),
        this.details = r,
        this.docsPath = o,
        this.metaMessages = n.metaMessages,
        this.name = n.name ?? this.name,
        this.shortMessage = t,
        this.version = ht
    }
    walk(t) {
        return Zt(this, t)
    }
}
;
function Zt(e, t) {
    return t?.(e) ? e : e && typeof e == "object" && "cause"in e && e.cause !== void 0 ? Zt(e.cause, t) : t ? null : e
}
var H = class extends u {
    constructor({blockNumber: t, chain: n, contract: r}) {
        super(`Chain "${n.name}" does not support contract "${r.name}".`, {
            metaMessages: ["This could be due to any of the following:", ...t && r.blockCreated && r.blockCreated > t ? [`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`] : [`- The chain does not have the contract "${r.name}" configured.`]],
            name: "ChainDoesNotSupportContract"
        })
    }
}
;
var pe = class extends u {
    constructor() {
        super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError"
        })
    }
}
;
var Kt = {
    inputs: [{
        name: "message",
        type: "string"
    }],
    name: "Error",
    type: "error"
}
  , Qt = {
    inputs: [{
        name: "reason",
        type: "uint256"
    }],
    name: "Panic",
    type: "error"
};
function N(e, {includeName: t=!1}={}) {
    if (e.type !== "function" && e.type !== "event" && e.type !== "error")
        throw new Me(e.type);
    return `${e.name}(${Pe(e.inputs, {
        includeName: t
    })})`
}
function Pe(e, {includeName: t=!1}={}) {
    return e ? e.map(n => rr(n, {
        includeName: t
    })).join(t ? ", " : ",") : ""
}
function rr(e, {includeName: t}) {
    return e.type.startsWith("tuple") ? `(${Pe(e.components, {
        includeName: t
    })})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "")
}
function A(e, {strict: t=!0}={}) {
    return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x")
}
function h(e) {
    return A(e, {
        strict: !1
    }) ? Math.ceil((e.length - 2) / 2) : e.length
}
var Be = class extends u {
    constructor({docsPath: t}) {
        super(["A constructor was not found on the ABI.", "Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`), {
            docsPath: t,
            name: "AbiConstructorNotFoundError"
        })
    }
}
  , de = class extends u {
    constructor({docsPath: t}) {
        super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.", "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`), {
            docsPath: t,
            name: "AbiConstructorParamsNotFoundError"
        })
    }
}
;
var Ee = class extends u {
    constructor({data: t, params: n, size: r}) {
        super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`), {
            metaMessages: [`Params: (${Pe(n, {
                includeName: !0
            })})`, `Data:   ${t} (${r} bytes)`],
            name: "AbiDecodingDataSizeTooSmallError"
        }),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "size", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.data = t,
        this.params = n,
        this.size = r
    }
}
  , W = class extends u {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError"
        })
    }
}
  , Te = class extends u {
    constructor({expectedLength: t, givenLength: n, type: r}) {
        super([`ABI encoding array length mismatch for type ${r}.`, `Expected length: ${t}`, `Given length: ${n}`].join(`
`), {
            name: "AbiEncodingArrayLengthMismatchError"
        })
    }
}
  , Se = class extends u {
    constructor({expectedSize: t, value: n}) {
        super(`Size of bytes "${n}" (bytes${h(n)}) does not match expected size (bytes${t}).`, {
            name: "AbiEncodingBytesSizeMismatchError"
        })
    }
}
  , ke = class extends u {
    constructor({expectedLength: t, givenLength: n}) {
        super(["ABI encoding params/values length mismatch.", `Expected length (params): ${t}`, `Given length (values): ${n}`].join(`
`), {
            name: "AbiEncodingLengthMismatchError"
        })
    }
}
;
var ze = class extends u {
    constructor(t, {docsPath: n}) {
        super([`Encoded error signature "${t}" not found on ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`), {
            docsPath: n,
            name: "AbiErrorSignatureNotFoundError"
        }),
        Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.signature = t
    }
}
;
var R = class extends u {
    constructor(t, {docsPath: n}={}) {
        super([`Function ${t ? `"${t}" ` : ""}not found on ABI.`, "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
            docsPath: n,
            name: "AbiFunctionNotFoundError"
        })
    }
}
  , Ce = class extends u {
    constructor(t, {docsPath: n}) {
        super([`Function "${t}" does not contain any \`outputs\` on ABI.`, "Cannot decode function result without knowing what the parameter types are.", "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
            docsPath: n,
            name: "AbiFunctionOutputsNotFoundError"
        })
    }
}
;
var Oe = class extends u {
    constructor(t, n) {
        super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [`\`${t.type}\` in \`${N(t.abiItem)}\`, and`, `\`${n.type}\` in \`${N(n.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."],
            name: "AbiItemAmbiguityError"
        })
    }
}
;
var je = class extends u {
    constructor(t, {docsPath: n}) {
        super([`Type "${t}" is not a valid encoding type.`, "Please provide a valid ABI type."].join(`
`), {
            docsPath: n,
            name: "InvalidAbiEncodingType"
        })
    }
}
  , Re = class extends u {
    constructor(t, {docsPath: n}) {
        super([`Type "${t}" is not a valid decoding type.`, "Please provide a valid ABI type."].join(`
`), {
            docsPath: n,
            name: "InvalidAbiDecodingType"
        })
    }
}
  , Ue = class extends u {
    constructor(t) {
        super([`Value "${t}" is not a valid array.`].join(`
`), {
            name: "InvalidArrayError"
        })
    }
}
  , Me = class extends u {
    constructor(t) {
        super([`"${t}" is not a valid definition type.`, 'Valid types: "function", "event", "error"'].join(`
`), {
            name: "InvalidDefinitionTypeError"
        })
    }
}
;
var fe = class extends u {
    constructor({offset: t, position: n, size: r}) {
        super(`Slice ${n === "start" ? "starting" : "ending"} at offset "${t}" is out-of-bounds (size: ${r}).`, {
            name: "SliceOffsetOutOfBoundsError"
        })
    }
}
  , me = class extends u {
    constructor({size: t, targetSize: n, type: r}) {
        super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`, {
            name: "SizeExceedsPaddingSizeError"
        })
    }
}
  , le = class extends u {
    constructor({size: t, targetSize: n, type: r}) {
        super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${t} ${r} long.`, {
            name: "InvalidBytesLengthError"
        })
    }
}
;
function _(e, t, n, {strict: r}={}) {
    return A(e, {
        strict: !1
    }) ? or(e, t, n, {
        strict: r
    }) : xt(e, t, n, {
        strict: r
    })
}
function en(e, t) {
    if (typeof t == "number" && t > 0 && t > h(e) - 1)
        throw new fe({
            offset: t,
            position: "start",
            size: h(e)
        })
}
function tn(e, t, n) {
    if (typeof t == "number" && typeof n == "number" && h(e) !== n - t)
        throw new fe({
            offset: n,
            position: "end",
            size: h(e)
        })
}
function xt(e, t, n, {strict: r}={}) {
    en(e, t);
    let o = e.slice(t, n);
    return r && tn(o, t, n),
    o
}
function or(e, t, n, {strict: r}={}) {
    en(e, t);
    let o = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
    return r && tn(o, t, n),
    o
}
function U(e, {dir: t, size: n=32}={}) {
    return typeof e == "string" ? S(e, {
        dir: t,
        size: n
    }) : sr(e, {
        dir: t,
        size: n
    })
}
function S(e, {dir: t, size: n=32}={}) {
    if (n === null)
        return e;
    let r = e.replace("0x", "");
    if (r.length > n * 2)
        throw new me({
            size: Math.ceil(r.length / 2),
            targetSize: n,
            type: "hex"
        });
    return `0x${r[t === "right" ? "padEnd" : "padStart"](n * 2, "0")}`
}
function sr(e, {dir: t, size: n=32}={}) {
    if (n === null)
        return e;
    if (e.length > n)
        throw new me({
            size: e.length,
            targetSize: n,
            type: "bytes"
        });
    let r = new Uint8Array(n);
    for (let o = 0; o < n; o++) {
        let i = t === "right";
        r[i ? o : n - o - 1] = e[i ? o : e.length - o - 1]
    }
    return r
}
var X = class extends u {
    constructor({max: t, min: n, signed: r, size: o, value: i}) {
        super(`Number "${i}" is not in safe ${o ? `${o * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`, {
            name: "IntegerOutOfRangeError"
        })
    }
}
  , Fe = class extends u {
    constructor(t) {
        super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
            name: "InvalidBytesBooleanError"
        })
    }
}
;
var Le = class extends u {
    constructor({givenSize: t, maxSize: n}) {
        super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`, {
            name: "SizeOverflowError"
        })
    }
}
;
function ye(e, {dir: t="left"}={}) {
    let n = typeof e == "string" ? e.replace("0x", "") : e
      , r = 0;
    for (let o = 0; o < n.length - 1 && n[t === "left" ? o : n.length - o - 1].toString() === "0"; o++)
        r++;
    return n = t === "left" ? n.slice(r) : n.slice(0, n.length - r),
    typeof e == "string" ? (n.length === 1 && t === "right" && (n = `${n}0`),
    `0x${n.length % 2 === 1 ? `0${n}` : n}`) : n
}
function $(e, {size: t}) {
    if (h(e) > t)
        throw new Le({
            givenSize: h(e),
            maxSize: t
        })
}
function gt(e, t={}) {
    let {signed: n} = t;
    t.size && $(e, {
        size: t.size
    });
    let r = BigInt(e);
    if (!n)
        return r;
    let o = (e.length - 2) / 2
      , i = (1n << BigInt(o) * 8n - 1n) - 1n;
    return r <= i ? r : r - BigInt(`0x${"f".padStart(o * 2, "f")}`) - 1n
}
function nn(e, t={}) {
    return Number(gt(e, t))
}
var ir = Array.from({
    length: 256
}, (e, t) => t.toString(16).padStart(2, "0"));
function rn(e, t={}) {
    return typeof e == "number" || typeof e == "bigint" ? l(e, t) : typeof e == "string" ? vt(e, t) : typeof e == "boolean" ? wt(e, t) : I(e, t)
}
function wt(e, t={}) {
    let n = `0x${Number(e)}`;
    return typeof t.size == "number" ? ($(n, {
        size: t.size
    }),
    U(n, {
        size: t.size
    })) : n
}
function I(e, t={}) {
    let n = "";
    for (let o = 0; o < e.length; o++)
        n += ir[e[o]];
    let r = `0x${n}`;
    return typeof t.size == "number" ? ($(r, {
        size: t.size
    }),
    U(r, {
        dir: "right",
        size: t.size
    })) : r
}
function l(e, t={}) {
    let {signed: n, size: r} = t, o = BigInt(e), i;
    r ? n ? i = (1n << BigInt(r) * 8n - 1n) - 1n : i = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (i = BigInt(Number.MAX_SAFE_INTEGER));
    let s = typeof i == "bigint" && n ? -i - 1n : 0;
    if (i && o > i || o < s) {
        let c = typeof e == "bigint" ? "n" : "";
        throw new X({
            max: i ? `${i}${c}` : void 0,
            min: `${s}${c}`,
            signed: n,
            size: r,
            value: `${e}${c}`
        })
    }
    let a = `0x${(n && o < 0 ? (1n << BigInt(r * 8)) + BigInt(o) : o).toString(16)}`;
    return r ? U(a, {
        size: r
    }) : a
}
var ar = new TextEncoder;
function vt(e, t={}) {
    let n = ar.encode(e);
    return I(n, t)
}
var ur = new TextEncoder;
function De(e, t={}) {
    return typeof e == "number" || typeof e == "bigint" ? pr(e, t) : typeof e == "boolean" ? cr(e, t) : A(e) ? He(e, t) : $t(e, t)
}
function cr(e, t={}) {
    let n = new Uint8Array(1);
    return n[0] = Number(e),
    typeof t.size == "number" ? ($(n, {
        size: t.size
    }),
    U(n, {
        size: t.size
    })) : n
}
var k = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function on(e) {
    if (e >= k.zero && e <= k.nine)
        return e - k.zero;
    if (e >= k.A && e <= k.F)
        return e - (k.A - 10);
    if (e >= k.a && e <= k.f)
        return e - (k.a - 10)
}
function He(e, t={}) {
    let n = e;
    t.size && ($(n, {
        size: t.size
    }),
    n = U(n, {
        dir: "right",
        size: t.size
    }));
    let r = n.slice(2);
    r.length % 2 && (r = `0${r}`);
    let o = r.length / 2
      , i = new Uint8Array(o);
    for (let s = 0, a = 0; s < o; s++) {
        let c = on(r.charCodeAt(a++))
          , p = on(r.charCodeAt(a++));
        if (c === void 0 || p === void 0)
            throw new u(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`);
        i[s] = c * 16 + p
    }
    return i
}
function pr(e, t) {
    let n = l(e, t);
    return He(n)
}
function $t(e, t={}) {
    let n = ur.encode(e);
    return typeof t.size == "number" ? ($(n, {
        size: t.size
    }),
    U(n, {
        dir: "right",
        size: t.size
    })) : n
}
var Ne = BigInt(4294967295)
  , sn = BigInt(32);
function dr(e, t=!1) {
    return t ? {
        h: Number(e & Ne),
        l: Number(e >> sn & Ne)
    } : {
        h: Number(e >> sn & Ne) | 0,
        l: Number(e & Ne) | 0
    }
}
function an(e, t=!1) {
    let n = new Uint32Array(e.length)
      , r = new Uint32Array(e.length);
    for (let o = 0; o < e.length; o++) {
        let {h: i, l: s} = dr(e[o], t);
        [n[o],r[o]] = [i, s]
    }
    return [n, r]
}
var un = (e, t, n) => e << n | t >>> 32 - n
  , cn = (e, t, n) => t << n | e >>> 32 - n
  , pn = (e, t, n) => t << n - 32 | e >>> 64 - n
  , dn = (e, t, n) => e << n - 32 | t >>> 64 - n;
var ln = []
  , yn = []
  , hn = []
  , fr = BigInt(0)
  , he = BigInt(1)
  , mr = BigInt(2)
  , lr = BigInt(7)
  , yr = BigInt(256)
  , hr = BigInt(113);
for (let e = 0, t = he, n = 1, r = 0; e < 24; e++) {
    [n,r] = [r, (2 * n + 3 * r) % 5],
    ln.push(2 * (5 * r + n)),
    yn.push((e + 1) * (e + 2) / 2 % 64);
    let o = fr;
    for (let i = 0; i < 7; i++)
        t = (t << he ^ (t >> lr) * hr) % yr,
        t & mr && (o ^= he << (he << BigInt(i)) - he);
    hn.push(o)
}
var [br,xr] = an(hn, !0)
  , fn = (e, t, n) => n > 32 ? pn(e, t, n) : un(e, t, n)
  , mn = (e, t, n) => n > 32 ? dn(e, t, n) : cn(e, t, n);
function gr(e, t=24) {
    let n = new Uint32Array(10);
    for (let r = 24 - t; r < 24; r++) {
        for (let s = 0; s < 10; s++)
            n[s] = e[s] ^ e[s + 10] ^ e[s + 20] ^ e[s + 30] ^ e[s + 40];
        for (let s = 0; s < 10; s += 2) {
            let a = (s + 8) % 10
              , c = (s + 2) % 10
              , p = n[c]
              , f = n[c + 1]
              , d = fn(p, f, 1) ^ n[a]
              , b = mn(p, f, 1) ^ n[a + 1];
            for (let m = 0; m < 50; m += 10)
                e[s + m] ^= d,
                e[s + m + 1] ^= b
        }
        let o = e[2]
          , i = e[3];
        for (let s = 0; s < 24; s++) {
            let a = yn[s]
              , c = fn(o, i, a)
              , p = mn(o, i, a)
              , f = ln[s];
            o = e[f],
            i = e[f + 1],
            e[f] = c,
            e[f + 1] = p
        }
        for (let s = 0; s < 50; s += 10) {
            for (let a = 0; a < 10; a++)
                n[a] = e[s + a];
            for (let a = 0; a < 10; a++)
                e[s + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10]
        }
        e[0] ^= br[r],
        e[1] ^= xr[r]
    }
    n.fill(0)
}
var _e = class e extends Gt {
    constructor(t, n, r, o=!1, i=24) {
        if (super(),
        this.blockLen = t,
        this.suffix = n,
        this.outputLen = r,
        this.enableXOF = o,
        this.rounds = i,
        this.pos = 0,
        this.posOut = 0,
        this.finished = !1,
        this.destroyed = !1,
        dt(r),
        0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200),
        this.state32 = Nt(this.state)
    }
    keccak() {
        mt || lt(this.state32),
        gr(this.state32, this.rounds),
        mt || lt(this.state32),
        this.posOut = 0,
        this.pos = 0
    }
    update(t) {
        ft(this);
        let {blockLen: n, state: r} = this;
        t = _t(t);
        let o = t.length;
        for (let i = 0; i < o; ) {
            let s = Math.min(n - this.pos, o - i);
            for (let a = 0; a < s; a++)
                r[this.pos++] ^= t[i++];
            this.pos === n && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished)
            return;
        this.finished = !0;
        let {state: t, suffix: n, pos: r, blockLen: o} = this;
        t[r] ^= n,
        n & 128 && r === o - 1 && this.keccak(),
        t[o - 1] ^= 128,
        this.keccak()
    }
    writeInto(t) {
        ft(this, !1),
        Dt(t),
        this.finish();
        let n = this.state
          , {blockLen: r} = this;
        for (let o = 0, i = t.length; o < i; ) {
            this.posOut >= r && this.keccak();
            let s = Math.min(r - this.posOut, i - o);
            t.set(n.subarray(this.posOut, this.posOut + s), o),
            this.posOut += s,
            o += s
        }
        return t
    }
    xofInto(t) {
        if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
        return this.writeInto(t)
    }
    xof(t) {
        return dt(t),
        this.xofInto(new Uint8Array(t))
    }
    digestInto(t) {
        if (Ht(t, this),
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
        this.state.fill(0)
    }
    _cloneInto(t) {
        let {blockLen: n, suffix: r, outputLen: o, rounds: i, enableXOF: s} = this;
        return t || (t = new e(n,r,o,s,i)),
        t.state32.set(this.state32),
        t.pos = this.pos,
        t.posOut = this.posOut,
        t.finished = this.finished,
        t.rounds = i,
        t.suffix = r,
        t.outputLen = o,
        t.enableXOF = s,
        t.destroyed = this.destroyed,
        t
    }
}
  , F = (e, t, n) => Vt( () => new _e(t,e,n))
  , Yo = F(6, 144, 224 / 8)
  , qo = F(6, 136, 256 / 8)
  , Jo = F(6, 104, 384 / 8)
  , Zo = F(6, 72, 512 / 8)
  , Ko = F(1, 144, 224 / 8)
  , bn = F(1, 136, 256 / 8)
  , Qo = F(1, 104, 384 / 8)
  , es = F(1, 72, 512 / 8)
  , xn = (e, t, n) => Wt( (r={}) => new _e(t,e,r.dkLen === void 0 ? n : r.dkLen,!0))
  , ts = xn(31, 168, 128 / 8)
  , ns = xn(31, 136, 256 / 8);
function Ge(e, t) {
    let n = t || "hex"
      , r = bn(A(e, {
        strict: !1
    }) ? De(e) : e);
    return n === "bytes" ? r : rn(r)
}
var wr = e => Ge(De(e));
function gn(e) {
    return wr(e)
}
function wn(e) {
    let t = !0
      , n = ""
      , r = 0
      , o = ""
      , i = !1;
    for (let s = 0; s < e.length; s++) {
        let a = e[s];
        if (["(", ")", ","].includes(a) && (t = !0),
        a === "(" && r++,
        a === ")" && r--,
        !!t) {
            if (r === 0) {
                if (a === " " && ["event", "function", ""].includes(o))
                    o = "";
                else if (o += a,
                a === ")") {
                    i = !0;
                    break
                }
                continue
            }
            if (a === " ") {
                e[s - 1] !== "," && n !== "," && n !== ",(" && (n = "",
                t = !1);
                continue
            }
            o += a,
            n += a
        }
    }
    if (!i)
        throw new u("Unable to normalize signature.");
    return o
}
var vn = e => {
    let t = typeof e == "string" ? e : Lt(e);
    return wn(t)
}
;
function Ve(e) {
    return gn(vn(e))
}
var Y = e => _(Ve(e), 0, 4);
var P = class extends u {
    constructor({address: t}) {
        super(`Address "${t}" is invalid.`, {
            metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."],
            name: "InvalidAddressError"
        })
    }
}
;
var q = class extends Map {
    constructor(t) {
        super(),
        Object.defineProperty(this, "maxSize", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.maxSize = t
    }
    get(t) {
        let n = super.get(t);
        return super.has(t) && n !== void 0 && (this.delete(t),
        super.set(t, n)),
        n
    }
    set(t, n) {
        if (super.set(t, n),
        this.maxSize && this.size > this.maxSize) {
            let r = this.keys().next().value;
            r && this.delete(r)
        }
        return this
    }
}
;
var vr = /^0x[a-fA-F0-9]{40}$/
  , At = new q(8192);
function w(e, t) {
    let {strict: n=!0} = t ?? {}
      , r = `${e}.${n}`;
    if (At.has(r))
        return At.get(r);
    let o = vr.test(e) ? e.toLowerCase() === e ? !0 : n ? We(e) === e : !0 : !1;
    return At.set(r, o),
    o
}
var It = new q(8192);
function We(e, t) {
    if (It.has(`${e}.${t}`))
        return It.get(`${e}.${t}`);
    let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase()
      , r = Ge($t(n), "bytes")
      , o = (t ? n.substring(`${t}0x`.length) : n).split("");
    for (let s = 0; s < 40; s += 2)
        r[s >> 1] >> 4 >= 8 && o[s] && (o[s] = o[s].toUpperCase()),
        (r[s >> 1] & 15) >= 8 && o[s + 1] && (o[s + 1] = o[s + 1].toUpperCase());
    let i = `0x${o.join("")}`;
    return It.set(`${e}.${t}`, i),
    i
}
var be = class extends u {
    constructor({offset: t}) {
        super(`Offset \`${t}\` cannot be negative.`, {
            name: "NegativeOffsetError"
        })
    }
}
  , Xe = class extends u {
    constructor({length: t, position: n}) {
        super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`, {
            name: "PositionOutOfBoundsError"
        })
    }
}
  , Ye = class extends u {
    constructor({count: t, limit: n}) {
        super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`, {
            name: "RecursiveReadLimitExceededError"
        })
    }
}
;
var $r = {
    bytes: new Uint8Array,
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map,
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new Ye({
                count: this.recursiveReadCount + 1,
                limit: this.recursiveReadLimit
            })
    },
    assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1)
            throw new Xe({
                length: this.bytes.length,
                position: e
            })
    },
    decrementPosition(e) {
        if (e < 0)
            throw new be({
                offset: e
            });
        let t = this.position - e;
        this.assertPosition(t),
        this.position = t
    },
    getReadCount(e) {
        return this.positionReadCount.get(e || this.position) || 0
    },
    incrementPosition(e) {
        if (e < 0)
            throw new be({
                offset: e
            });
        let t = this.position + e;
        this.assertPosition(t),
        this.position = t
    },
    inspectByte(e) {
        let t = e ?? this.position;
        return this.assertPosition(t),
        this.bytes[t]
    },
    inspectBytes(e, t) {
        let n = t ?? this.position;
        return this.assertPosition(n + e - 1),
        this.bytes.subarray(n, n + e)
    },
    inspectUint8(e) {
        let t = e ?? this.position;
        return this.assertPosition(t),
        this.bytes[t]
    },
    inspectUint16(e) {
        let t = e ?? this.position;
        return this.assertPosition(t + 1),
        this.dataView.getUint16(t)
    },
    inspectUint24(e) {
        let t = e ?? this.position;
        return this.assertPosition(t + 2),
        (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
    },
    inspectUint32(e) {
        let t = e ?? this.position;
        return this.assertPosition(t + 3),
        this.dataView.getUint32(t)
    },
    pushByte(e) {
        this.assertPosition(this.position),
        this.bytes[this.position] = e,
        this.position++
    },
    pushBytes(e) {
        this.assertPosition(this.position + e.length - 1),
        this.bytes.set(e, this.position),
        this.position += e.length
    },
    pushUint8(e) {
        this.assertPosition(this.position),
        this.bytes[this.position] = e,
        this.position++
    },
    pushUint16(e) {
        this.assertPosition(this.position + 1),
        this.dataView.setUint16(this.position, e),
        this.position += 2
    },
    pushUint24(e) {
        this.assertPosition(this.position + 2),
        this.dataView.setUint16(this.position, e >> 8),
        this.dataView.setUint8(this.position + 2, e & 255),
        this.position += 3
    },
    pushUint32(e) {
        this.assertPosition(this.position + 3),
        this.dataView.setUint32(this.position, e),
        this.position += 4
    },
    readByte() {
        this.assertReadLimit(),
        this._touch();
        let e = this.inspectByte();
        return this.position++,
        e
    },
    readBytes(e, t) {
        this.assertReadLimit(),
        this._touch();
        let n = this.inspectBytes(e);
        return this.position += t ?? e,
        n
    },
    readUint8() {
        this.assertReadLimit(),
        this._touch();
        let e = this.inspectUint8();
        return this.position += 1,
        e
    },
    readUint16() {
        this.assertReadLimit(),
        this._touch();
        let e = this.inspectUint16();
        return this.position += 2,
        e
    },
    readUint24() {
        this.assertReadLimit(),
        this._touch();
        let e = this.inspectUint24();
        return this.position += 3,
        e
    },
    readUint32() {
        this.assertReadLimit(),
        this._touch();
        let e = this.inspectUint32();
        return this.position += 4,
        e
    },
    get remaining() {
        return this.bytes.length - this.position
    },
    setPosition(e) {
        let t = this.position;
        return this.assertPosition(e),
        this.position = e,
        () => this.position = t
    },
    _touch() {
        if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
            return;
        let e = this.getReadCount();
        this.positionReadCount.set(this.position, e + 1),
        e > 0 && this.recursiveReadCount++
    }
};
function $n(e, {recursiveReadLimit: t=8192}={}) {
    let n = Object.create($r);
    return n.bytes = e,
    n.dataView = new DataView(e.buffer,e.byteOffset,e.byteLength),
    n.positionReadCount = new Map,
    n.recursiveReadLimit = t,
    n
}
function An(e, t={}) {
    typeof t.size < "u" && $(e, {
        size: t.size
    });
    let n = I(e, t);
    return gt(n, t)
}
function In(e, t={}) {
    let n = e;
    if (typeof t.size < "u" && ($(n, {
        size: t.size
    }),
    n = ye(n)),
    n.length > 1 || n[0] > 1)
        throw new Fe(n);
    return !!n[0]
}
function E(e, t={}) {
    typeof t.size < "u" && $(e, {
        size: t.size
    });
    let n = I(e, t);
    return nn(n, t)
}
function Pn(e, t={}) {
    let n = e;
    return typeof t.size < "u" && ($(n, {
        size: t.size
    }),
    n = ye(n, {
        dir: "right"
    })),
    new TextDecoder().decode(n)
}
function z(e) {
    return typeof e[0] == "string" ? xe(e) : Ar(e)
}
function Ar(e) {
    let t = 0;
    for (let o of e)
        t += o.length;
    let n = new Uint8Array(t)
      , r = 0;
    for (let o of e)
        n.set(o, r),
        r += o.length;
    return n
}
function xe(e) {
    return `0x${e.reduce( (t, n) => t + n.replace("0x", ""), "")}`
}
var Mn = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function J(e, t) {
    if (e.length !== t.length)
        throw new ke({
            expectedLength: e.length,
            givenLength: t.length
        });
    let n = Ir({
        params: e,
        values: t
    })
      , r = Mt(n);
    return r.length === 0 ? "0x" : r
}
function Ir({params: e, values: t}) {
    let n = [];
    for (let r = 0; r < e.length; r++)
        n.push(Pt({
            param: e[r],
            value: t[r]
        }));
    return n
}
function Pt({param: e, value: t}) {
    let n = qe(e.type);
    if (n) {
        let[r,o] = n;
        return Mr(t, {
            length: r,
            param: v(g({}, e), {
                type: o
            })
        })
    }
    if (e.type === "tuple")
        return kr(t, {
            param: e
        });
    if (e.type === "address")
        return Pr(t);
    if (e.type === "bool")
        return Er(t);
    if (e.type.startsWith("uint") || e.type.startsWith("int")) {
        let r = e.type.startsWith("int")
          , [,,o="256"] = Mn.exec(e.type) ?? [];
        return Tr(t, {
            signed: r,
            size: Number(o)
        })
    }
    if (e.type.startsWith("bytes"))
        return Br(t, {
            param: e
        });
    if (e.type === "string")
        return Sr(t);
    throw new je(e.type,{
        docsPath: "/docs/contract/encodeAbiParameters"
    })
}
function Mt(e) {
    let t = 0;
    for (let i = 0; i < e.length; i++) {
        let {dynamic: s, encoded: a} = e[i];
        s ? t += 32 : t += h(a)
    }
    let n = []
      , r = []
      , o = 0;
    for (let i = 0; i < e.length; i++) {
        let {dynamic: s, encoded: a} = e[i];
        s ? (n.push(l(t + o, {
            size: 32
        })),
        r.push(a),
        o += h(a)) : n.push(a)
    }
    return z([...n, ...r])
}
function Pr(e) {
    if (!w(e))
        throw new P({
            address: e
        });
    return {
        dynamic: !1,
        encoded: S(e.toLowerCase())
    }
}
function Mr(e, {length: t, param: n}) {
    let r = t === null;
    if (!Array.isArray(e))
        throw new Ue(e);
    if (!r && e.length !== t)
        throw new Te({
            expectedLength: t,
            givenLength: e.length,
            type: `${n.type}[${t}]`
        });
    let o = !1
      , i = [];
    for (let s = 0; s < e.length; s++) {
        let a = Pt({
            param: n,
            value: e[s]
        });
        a.dynamic && (o = !0),
        i.push(a)
    }
    if (r || o) {
        let s = Mt(i);
        if (r) {
            let a = l(i.length, {
                size: 32
            });
            return {
                dynamic: !0,
                encoded: i.length > 0 ? z([a, s]) : a
            }
        }
        if (o)
            return {
                dynamic: !0,
                encoded: s
            }
    }
    return {
        dynamic: !1,
        encoded: z(i.map( ({encoded: s}) => s))
    }
}
function Br(e, {param: t}) {
    let[,n] = t.type.split("bytes")
      , r = h(e);
    if (!n) {
        let o = e;
        return r % 32 !== 0 && (o = S(o, {
            dir: "right",
            size: Math.ceil((e.length - 2) / 2 / 32) * 32
        })),
        {
            dynamic: !0,
            encoded: z([S(l(r, {
                size: 32
            })), o])
        }
    }
    if (r !== Number.parseInt(n))
        throw new Se({
            expectedSize: Number.parseInt(n),
            value: e
        });
    return {
        dynamic: !1,
        encoded: S(e, {
            dir: "right"
        })
    }
}
function Er(e) {
    if (typeof e != "boolean")
        throw new u(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: !1,
        encoded: S(wt(e))
    }
}
function Tr(e, {signed: t, size: n=256}) {
    if (typeof n == "number") {
        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n
          , o = t ? -r - 1n : 0n;
        if (e > r || e < o)
            throw new X({
                max: r.toString(),
                min: o.toString(),
                signed: t,
                size: n / 8,
                value: e.toString()
            })
    }
    return {
        dynamic: !1,
        encoded: l(e, {
            size: 32,
            signed: t
        })
    }
}
function Sr(e) {
    let t = vt(e)
      , n = Math.ceil(h(t) / 32)
      , r = [];
    for (let o = 0; o < n; o++)
        r.push(S(_(t, o * 32, (o + 1) * 32), {
            dir: "right"
        }));
    return {
        dynamic: !0,
        encoded: z([S(l(h(t), {
            size: 32
        })), ...r])
    }
}
function kr(e, {param: t}) {
    let n = !1
      , r = [];
    for (let o = 0; o < t.components.length; o++) {
        let i = t.components[o]
          , s = Array.isArray(e) ? o : i.name
          , a = Pt({
            param: i,
            value: e[s]
        });
        r.push(a),
        a.dynamic && (n = !0)
    }
    return {
        dynamic: n,
        encoded: n ? Mt(r) : z(r.map( ({encoded: o}) => o))
    }
}
function qe(e) {
    let t = e.match(/^(.*)\[(\d+)?\]$/);
    return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
}
function Je(e, t) {
    let n = typeof t == "string" ? He(t) : t
      , r = $n(n);
    if (h(n) === 0 && e.length > 0)
        throw new W;
    if (h(t) && h(t) < 32)
        throw new Ee({
            data: typeof t == "string" ? t : I(t),
            params: e,
            size: h(t)
        });
    let o = 0
      , i = [];
    for (let s = 0; s < e.length; ++s) {
        let a = e[s];
        r.setPosition(o);
        let[c,p] = Z(r, a, {
            staticPosition: 0
        });
        o += p,
        i.push(c)
    }
    return i
}
function Z(e, t, {staticPosition: n}) {
    let r = qe(t.type);
    if (r) {
        let[o,i] = r;
        return Cr(e, v(g({}, t), {
            type: i
        }), {
            length: o,
            staticPosition: n
        })
    }
    if (t.type === "tuple")
        return Ur(e, t, {
            staticPosition: n
        });
    if (t.type === "address")
        return zr(e);
    if (t.type === "bool")
        return Or(e);
    if (t.type.startsWith("bytes"))
        return jr(e, t, {
            staticPosition: n
        });
    if (t.type.startsWith("uint") || t.type.startsWith("int"))
        return Rr(e, t);
    if (t.type === "string")
        return Fr(e, {
            staticPosition: n
        });
    throw new Re(t.type,{
        docsPath: "/docs/contract/decodeAbiParameters"
    })
}
var Bn = 32
  , Bt = 32;
function zr(e) {
    let t = e.readBytes(32);
    return [We(I(xt(t, -20))), 32]
}
function Cr(e, t, {length: n, staticPosition: r}) {
    if (!n) {
        let s = E(e.readBytes(Bt))
          , a = r + s
          , c = a + Bn;
        e.setPosition(a);
        let p = E(e.readBytes(Bn))
          , f = ge(t)
          , d = 0
          , b = [];
        for (let m = 0; m < p; ++m) {
            e.setPosition(c + (f ? m * 32 : d));
            let[y,x] = Z(e, t, {
                staticPosition: c
            });
            d += x,
            b.push(y)
        }
        return e.setPosition(r + 32),
        [b, 32]
    }
    if (ge(t)) {
        let s = E(e.readBytes(Bt))
          , a = r + s
          , c = [];
        for (let p = 0; p < n; ++p) {
            e.setPosition(a + p * 32);
            let[f] = Z(e, t, {
                staticPosition: a
            });
            c.push(f)
        }
        return e.setPosition(r + 32),
        [c, 32]
    }
    let o = 0
      , i = [];
    for (let s = 0; s < n; ++s) {
        let[a,c] = Z(e, t, {
            staticPosition: r + o
        });
        o += c,
        i.push(a)
    }
    return [i, o]
}
function Or(e) {
    return [In(e.readBytes(32), {
        size: 32
    }), 32]
}
function jr(e, t, {staticPosition: n}) {
    let[r,o] = t.type.split("bytes");
    if (!o) {
        let s = E(e.readBytes(32));
        e.setPosition(n + s);
        let a = E(e.readBytes(32));
        if (a === 0)
            return e.setPosition(n + 32),
            ["0x", 32];
        let c = e.readBytes(a);
        return e.setPosition(n + 32),
        [I(c), 32]
    }
    return [I(e.readBytes(Number.parseInt(o), 32)), 32]
}
function Rr(e, t) {
    let n = t.type.startsWith("int")
      , r = Number.parseInt(t.type.split("int")[1] || "256")
      , o = e.readBytes(32);
    return [r > 48 ? An(o, {
        signed: n
    }) : E(o, {
        signed: n
    }), 32]
}
function Ur(e, t, {staticPosition: n}) {
    let r = t.components.length === 0 || t.components.some( ({name: s}) => !s)
      , o = r ? [] : {}
      , i = 0;
    if (ge(t)) {
        let s = E(e.readBytes(Bt))
          , a = n + s;
        for (let c = 0; c < t.components.length; ++c) {
            let p = t.components[c];
            e.setPosition(a + i);
            let[f,d] = Z(e, p, {
                staticPosition: a
            });
            i += d,
            o[r ? c : p?.name] = f
        }
        return e.setPosition(n + 32),
        [o, 32]
    }
    for (let s = 0; s < t.components.length; ++s) {
        let a = t.components[s]
          , [c,p] = Z(e, a, {
            staticPosition: n
        });
        o[r ? s : a?.name] = c,
        i += p
    }
    return [o, i]
}
function Fr(e, {staticPosition: t}) {
    let n = E(e.readBytes(32))
      , r = t + n;
    e.setPosition(r);
    let o = E(e.readBytes(32));
    if (o === 0)
        return e.setPosition(t + 32),
        ["", 32];
    let i = e.readBytes(o, 32)
      , s = Pn(ye(i));
    return e.setPosition(t + 32),
    [s, 32]
}
function ge(e) {
    let {type: t} = e;
    if (t === "string" || t === "bytes" || t.endsWith("[]"))
        return !0;
    if (t === "tuple")
        return e.components?.some(ge);
    let n = qe(e.type);
    return !!(n && ge(v(g({}, e), {
        type: n[1]
    })))
}
function En(e) {
    let {abi: t, data: n} = e
      , r = _(n, 0, 4);
    if (r === "0x")
        throw new W;
    let i = [...t || [], Kt, Qt].find(s => s.type === "error" && r === Y(N(s)));
    if (!i)
        throw new ze(r,{
            docsPath: "/docs/contract/decodeErrorResult"
        });
    return {
        abiItem: i,
        args: "inputs"in i && i.inputs && i.inputs.length > 0 ? Je(i.inputs, _(n, 4)) : void 0,
        errorName: i.name
    }
}
var K = (e, t, n) => JSON.stringify(e, (r, o) => {
    let i = typeof o == "bigint" ? o.toString() : o;
    return typeof t == "function" ? t(r, i) : i
}
, n);
var Tn = Ve;
function Ze(e) {
    let {abi: t, args: n=[], name: r} = e
      , o = A(r, {
        strict: !1
    })
      , i = t.filter(a => o ? a.type === "function" ? Y(a) === r : a.type === "event" ? Tn(a) === r : !1 : "name"in a && a.name === r);
    if (i.length === 0)
        return;
    if (i.length === 1)
        return i[0];
    let s;
    for (let a of i) {
        if (!("inputs"in a))
            continue;
        if (!n || n.length === 0) {
            if (!a.inputs || a.inputs.length === 0)
                return a;
            continue
        }
        if (!a.inputs || a.inputs.length === 0 || a.inputs.length !== n.length)
            continue;
        if (n.every( (p, f) => {
            let d = "inputs"in a && a.inputs[f];
            return d ? Et(p, d) : !1
        }
        )) {
            if (s && "inputs"in s && s.inputs) {
                let p = Sn(a.inputs, s.inputs, n);
                if (p)
                    throw new Oe({
                        abiItem: a,
                        type: p[0]
                    },{
                        abiItem: s,
                        type: p[1]
                    })
            }
            s = a
        }
    }
    return s || i[0]
}
function Et(e, t) {
    let n = typeof e
      , r = t.type;
    switch (r) {
    case "address":
        return w(e, {
            strict: !1
        });
    case "bool":
        return n === "boolean";
    case "function":
        return n === "string";
    case "string":
        return n === "string";
    default:
        return r === "tuple" && "components"in t ? Object.values(t.components).every( (o, i) => Et(Object.values(e)[i], o)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(e) && e.every(o => Et(o, v(g({}, t), {
            type: r.replace(/(\[[0-9]{0,}\])$/, "")
        }))) : !1
    }
}
function Sn(e, t, n) {
    for (let r in e) {
        let o = e[r]
          , i = t[r];
        if (o.type === "tuple" && i.type === "tuple" && "components"in o && "components"in i)
            return Sn(o.components, i.components, n[r]);
        let s = [o.type, i.type];
        if (s.includes("address") && s.includes("bytes20") ? !0 : s.includes("address") && s.includes("string") ? w(n[r], {
            strict: !1
        }) : s.includes("address") && s.includes("bytes") ? w(n[r], {
            strict: !1
        }) : !1)
            return s
    }
}
var kn = {
    gwei: 9,
    wei: 18
}
  , zn = {
    ether: -9,
    wei: 9
};
function Ke(e, t) {
    let n = e.toString()
      , r = n.startsWith("-");
    r && (n = n.slice(1)),
    n = n.padStart(t, "0");
    let[o,i] = [n.slice(0, n.length - t), n.slice(n.length - t)];
    return i = i.replace(/(0+)$/, ""),
    `${r ? "-" : ""}${o || "0"}${i ? `.${i}` : ""}`
}
function Cn(e, t="wei") {
    return Ke(e, kn[t])
}
function C(e, t="wei") {
    return Ke(e, zn[t])
}
var Qe = class extends u {
    constructor({address: t}) {
        super(`State for account "${t}" is set multiple times.`, {
            name: "AccountStateConflictError"
        })
    }
}
  , et = class extends u {
    constructor() {
        super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError"
        })
    }
}
;
function On(e) {
    return e.reduce( (t, {slot: n, value: r}) => `${t}        ${n}: ${r}
`, "")
}
function jn(e) {
    return e.reduce( (t, o) => {
        var i = o
          , {address: n} = i
          , r = T(i, ["address"]);
        let s = `${t}    ${n}:
`;
        return r.nonce && (s += `      nonce: ${r.nonce}
`),
        r.balance && (s += `      balance: ${r.balance}
`),
        r.code && (s += `      code: ${r.code}
`),
        r.state && (s += `      state:
`,
        s += On(r.state)),
        r.stateDiff && (s += `      stateDiff:
`,
        s += On(r.stateDiff)),
        s
    }
    , `  State Override:
`).slice(0, -1)
}
function Rn(e) {
    let t = Object.entries(e).map( ([r,o]) => o === void 0 || o === !1 ? null : [r, o]).filter(Boolean)
      , n = t.reduce( (r, [o]) => Math.max(r, o.length), 0);
    return t.map( ([r,o]) => `  ${`${r}:`.padEnd(n + 1)}  ${o}`).join(`
`)
}
var tt = class extends u {
    constructor() {
        super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.", "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`), {
            name: "FeeConflictError"
        })
    }
}
;
var we = e => e;
var nt = class extends u {
    constructor(t, {account: n, docsPath: r, chain: o, data: i, gas: s, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: p, nonce: f, to: d, value: b, stateOverride: m}) {
        let y = n ? V(n) : void 0
          , x = Rn({
            from: y?.address,
            to: d,
            value: typeof b < "u" && `${Cn(b)} ${o?.nativeCurrency?.symbol || "ETH"}`,
            data: i,
            gas: s,
            gasPrice: typeof a < "u" && `${C(a)} gwei`,
            maxFeePerGas: typeof c < "u" && `${C(c)} gwei`,
            maxPriorityFeePerGas: typeof p < "u" && `${C(p)} gwei`,
            nonce: f
        });
        m && (x += `
${jn(m)}`),
        super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Raw Call Arguments:", x].filter(Boolean),
            name: "CallExecutionError"
        }),
        Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.cause = t
    }
}
;
var rt = class extends u {
    constructor({factory: t}) {
        super(`Deployment for counterfactual contract call failed${t ? ` for factory "${t}".` : ""}`, {
            metaMessages: ["Please ensure:", "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).", "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."],
            name: "CounterfactualDeploymentFailedError"
        })
    }
}
  , ot = class extends u {
    constructor({data: t, message: n}) {
        super(n || "", {
            name: "RawContractError"
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 3
        }),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.data = t
    }
}
;
var Tt = "/docs/contract/decodeFunctionResult";
function Un(e) {
    let {abi: t, args: n, functionName: r, data: o} = e
      , i = t[0];
    if (r) {
        let a = Ze({
            abi: t,
            args: n,
            name: r
        });
        if (!a)
            throw new R(r,{
                docsPath: Tt
            });
        i = a
    }
    if (i.type !== "function")
        throw new R(void 0,{
            docsPath: Tt
        });
    if (!i.outputs)
        throw new Ce(i.name,{
            docsPath: Tt
        });
    let s = Je(i.outputs, o);
    if (s && s.length > 1)
        return s;
    if (s && s.length === 1)
        return s[0]
}
var St = "/docs/contract/encodeDeployData";
function kt(e) {
    let {abi: t, args: n, bytecode: r} = e;
    if (!n || n.length === 0)
        return r;
    let o = t.find(s => "type"in s && s.type === "constructor");
    if (!o)
        throw new Be({
            docsPath: St
        });
    if (!("inputs"in o))
        throw new de({
            docsPath: St
        });
    if (!o.inputs || o.inputs.length === 0)
        throw new de({
            docsPath: St
        });
    let i = J(o.inputs, n);
    return xe([r, i])
}
var Fn = "/docs/contract/encodeFunctionData";
function Ln(e) {
    let {abi: t, args: n, functionName: r} = e
      , o = t[0];
    if (r) {
        let i = Ze({
            abi: t,
            args: n,
            name: r
        });
        if (!i)
            throw new R(r,{
                docsPath: Fn
            });
        o = i
    }
    if (o.type !== "function")
        throw new R(void 0,{
            docsPath: Fn
        });
    return {
        abi: [o],
        functionName: Y(N(o))
    }
}
function Dn(e) {
    let {args: t} = e
      , {abi: n, functionName: r} = e.abi.length === 1 && e.functionName?.startsWith("0x") ? e : Ln(e)
      , o = n[0]
      , i = r
      , s = "inputs"in o && o.inputs ? J(o.inputs, t ?? []) : void 0;
    return xe([i, s ?? "0x"])
}
function Hn({blockNumber: e, chain: t, contract: n}) {
    let r = t?.contracts?.[n];
    if (!r)
        throw new H({
            chain: t,
            contract: {
                name: n
            }
        });
    if (e && r.blockCreated && r.blockCreated > e)
        throw new H({
            blockNumber: e,
            chain: t,
            contract: {
                name: n,
                blockCreated: r.blockCreated
            }
        });
    return r.address
}
var O = class extends u {
    constructor({cause: t, message: n}={}) {
        let r = n?.replace("execution reverted: ", "")?.replace("execution reverted", "");
        super(`Execution reverted ${r ? `with reason: ${r}` : "for an unknown reason"}.`, {
            cause: t,
            name: "ExecutionRevertedError"
        })
    }
}
;
Object.defineProperty(O, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 3
});
Object.defineProperty(O, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /execution reverted/
});
var L = class extends u {
    constructor({cause: t, maxFeePerGas: n}={}) {
        super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${C(n)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause: t,
            name: "FeeCapTooHighError"
        })
    }
}
;
Object.defineProperty(L, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
var Q = class extends u {
    constructor({cause: t, maxFeePerGas: n}={}) {
        super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${C(n)}` : ""} gwei) cannot be lower than the block base fee.`, {
            cause: t,
            name: "FeeCapTooLowError"
        })
    }
}
;
Object.defineProperty(Q, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
var ee = class extends u {
    constructor({cause: t, nonce: n}={}) {
        super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is higher than the next one expected.`, {
            cause: t,
            name: "NonceTooHighError"
        })
    }
}
;
Object.defineProperty(ee, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too high/
});
var te = class extends u {
    constructor({cause: t, nonce: n}={}) {
        super([`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is lower than the current nonce of the account.`, "Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`), {
            cause: t,
            name: "NonceTooLowError"
        })
    }
}
;
Object.defineProperty(te, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too low|transaction already imported|already known/
});
var ne = class extends u {
    constructor({cause: t, nonce: n}={}) {
        super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}exceeds the maximum allowed nonce.`, {
            cause: t,
            name: "NonceMaxValueError"
        })
    }
}
;
Object.defineProperty(ne, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce has max value/
});
var re = class extends u {
    constructor({cause: t}={}) {
        super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`), {
            cause: t,
            metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."],
            name: "InsufficientFundsError"
        })
    }
}
;
Object.defineProperty(re, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /insufficient funds|exceeds transaction sender account balance/
});
var oe = class extends u {
    constructor({cause: t, gas: n}={}) {
        super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
            cause: t,
            name: "IntrinsicGasTooHighError"
        })
    }
}
;
Object.defineProperty(oe, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too high|gas limit reached/
});
var se = class extends u {
    constructor({cause: t, gas: n}={}) {
        super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction is too low.`, {
            cause: t,
            name: "IntrinsicGasTooLowError"
        })
    }
}
;
Object.defineProperty(se, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too low/
});
var ie = class extends u {
    constructor({cause: t}) {
        super("The transaction type is not supported for this chain.", {
            cause: t,
            name: "TransactionTypeNotSupportedError"
        })
    }
}
;
Object.defineProperty(ie, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /transaction type not valid/
});
var D = class extends u {
    constructor({cause: t, maxPriorityFeePerGas: n, maxFeePerGas: r}={}) {
        super([`The provided tip (\`maxPriorityFeePerGas\`${n ? ` = ${C(n)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${C(r)} gwei` : ""}).`].join(`
`), {
            cause: t,
            name: "TipAboveFeeCapError"
        })
    }
}
;
Object.defineProperty(D, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
var ae = class extends u {
    constructor({cause: t}) {
        super(`An error occurred while executing: ${t?.shortMessage}`, {
            cause: t,
            name: "UnknownNodeError"
        })
    }
}
;
var ve = class extends u {
    constructor({body: t, cause: n, details: r, headers: o, status: i, url: s}) {
        super("HTTP request failed.", {
            cause: n,
            details: r,
            metaMessages: [i && `Status: ${i}`, `URL: ${we(s)}`, t && `Request body: ${K(t)}`].filter(Boolean),
            name: "HttpRequestError"
        }),
        Object.defineProperty(this, "body", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "headers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "status", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "url", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.body = t,
        this.headers = o,
        this.status = i,
        this.url = s
    }
}
;
function Nn(e, t) {
    let n = (e.details || "").toLowerCase()
      , r = e instanceof u ? e.walk(o => o?.code === O.code) : e;
    return r instanceof u ? new O({
        cause: e,
        message: r.details
    }) : O.nodeMessage.test(n) ? new O({
        cause: e,
        message: e.details
    }) : L.nodeMessage.test(n) ? new L({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas
    }) : Q.nodeMessage.test(n) ? new Q({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas
    }) : ee.nodeMessage.test(n) ? new ee({
        cause: e,
        nonce: t?.nonce
    }) : te.nodeMessage.test(n) ? new te({
        cause: e,
        nonce: t?.nonce
    }) : ne.nodeMessage.test(n) ? new ne({
        cause: e,
        nonce: t?.nonce
    }) : re.nodeMessage.test(n) ? new re({
        cause: e
    }) : oe.nodeMessage.test(n) ? new oe({
        cause: e,
        gas: t?.gas
    }) : se.nodeMessage.test(n) ? new se({
        cause: e,
        gas: t?.gas
    }) : ie.nodeMessage.test(n) ? new ie({
        cause: e
    }) : D.nodeMessage.test(n) ? new D({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas,
        maxPriorityFeePerGas: t?.maxPriorityFeePerGas
    }) : new ae({
        cause: e
    })
}
function _n(e, r) {
    var o = r
      , {docsPath: t} = o
      , n = T(o, ["docsPath"]);
    let i = ( () => {
        let s = Nn(e, n);
        return s instanceof ae ? e : s
    }
    )();
    return new nt(i,g({
        docsPath: t
    }, n))
}
function Gn(e, {format: t}) {
    if (!t)
        return {};
    let n = {};
    function r(i) {
        let s = Object.keys(i);
        for (let a of s)
            a in e && (n[a] = e[a]),
            i[a] && typeof i[a] == "object" && !Array.isArray(i[a]) && r(i[a])
    }
    let o = t(e || {});
    return r(o),
    n
}
var Lr = {
    legacy: "0x0",
    eip2930: "0x1",
    eip1559: "0x2",
    eip4844: "0x3",
    eip7702: "0x4"
};
function Vn(e) {
    let t = {};
    return typeof e.authorizationList < "u" && (t.authorizationList = Dr(e.authorizationList)),
    typeof e.accessList < "u" && (t.accessList = e.accessList),
    typeof e.blobVersionedHashes < "u" && (t.blobVersionedHashes = e.blobVersionedHashes),
    typeof e.blobs < "u" && (typeof e.blobs[0] != "string" ? t.blobs = e.blobs.map(n => I(n)) : t.blobs = e.blobs),
    typeof e.data < "u" && (t.data = e.data),
    typeof e.from < "u" && (t.from = e.from),
    typeof e.gas < "u" && (t.gas = l(e.gas)),
    typeof e.gasPrice < "u" && (t.gasPrice = l(e.gasPrice)),
    typeof e.maxFeePerBlobGas < "u" && (t.maxFeePerBlobGas = l(e.maxFeePerBlobGas)),
    typeof e.maxFeePerGas < "u" && (t.maxFeePerGas = l(e.maxFeePerGas)),
    typeof e.maxPriorityFeePerGas < "u" && (t.maxPriorityFeePerGas = l(e.maxPriorityFeePerGas)),
    typeof e.nonce < "u" && (t.nonce = l(e.nonce)),
    typeof e.to < "u" && (t.to = e.to),
    typeof e.type < "u" && (t.type = Lr[e.type]),
    typeof e.value < "u" && (t.value = l(e.value)),
    t
}
function Dr(e) {
    return e.map(t => g(g({
        address: t.contractAddress,
        r: t.r,
        s: t.s,
        chainId: l(t.chainId),
        nonce: l(t.nonce)
    }, typeof t.yParity < "u" ? {
        yParity: l(t.yParity)
    } : {}), typeof t.v < "u" && typeof t.yParity > "u" ? {
        v: l(t.v)
    } : {}))
}
function Wn() {
    let e = () => {}
      , t = () => {}
    ;
    return {
        promise: new Promise( (r, o) => {
            e = r,
            t = o
        }
        ),
        resolve: e,
        reject: t
    }
}
var zt = new Map;
function Xn({fn: e, id: t, shouldSplitBatch: n, wait: r=0, sort: o}) {
    let i = () => B(this, null, function*() {
        let d = c();
        s();
        let b = d.map( ({args: m}) => m);
        b.length !== 0 && e(b).then(m => {
            o && Array.isArray(m) && m.sort(o);
            for (let y = 0; y < d.length; y++) {
                let {resolve: x} = d[y];
                x?.([m[y], m])
            }
        }
        ).catch(m => {
            for (let y = 0; y < d.length; y++) {
                let {reject: x} = d[y];
                x?.(m)
            }
        }
        )
    })
      , s = () => zt.delete(t)
      , a = () => c().map( ({args: d}) => d)
      , c = () => zt.get(t) || []
      , p = d => zt.set(t, [...c(), d]);
    return {
        flush: s,
        schedule(d) {
            return B(this, null, function*() {
                let {promise: b, resolve: m, reject: y} = Wn();
                return n?.([...a(), d]) && i(),
                c().length > 0 ? (p({
                    args: d,
                    resolve: m,
                    reject: y
                }),
                b) : (p({
                    args: d,
                    resolve: m,
                    reject: y
                }),
                setTimeout(i, r),
                b)
            })
        }
    }
}
function Yn(e) {
    if (!(!e || e.length === 0))
        return e.reduce( (t, {slot: n, value: r}) => {
            if (n.length !== 66)
                throw new le({
                    size: n.length,
                    targetSize: 66,
                    type: "hex"
                });
            if (r.length !== 66)
                throw new le({
                    size: r.length,
                    targetSize: 66,
                    type: "hex"
                });
            return t[n] = r,
            t
        }
        , {})
}
function Hr(e) {
    let {balance: t, nonce: n, state: r, stateDiff: o, code: i} = e
      , s = {};
    if (i !== void 0 && (s.code = i),
    t !== void 0 && (s.balance = l(t)),
    n !== void 0 && (s.nonce = l(n)),
    r !== void 0 && (s.state = Yn(r)),
    o !== void 0) {
        if (s.state)
            throw new et;
        s.stateDiff = Yn(o)
    }
    return s
}
function qn(e) {
    if (!e)
        return;
    let t = {};
    for (let n of e) {
        let r = n
          , {address: o} = r
          , i = T(r, ["address"]);
        if (!w(o, {
            strict: !1
        }))
            throw new P({
                address: o
            });
        if (t[o])
            throw new Qe({
                address: o
            });
        t[o] = Hr(i)
    }
    return t
}
var Ya = 2n ** (8n - 1n) - 1n
  , qa = 2n ** (16n - 1n) - 1n
  , Ja = 2n ** (24n - 1n) - 1n
  , Za = 2n ** (32n - 1n) - 1n
  , Ka = 2n ** (40n - 1n) - 1n
  , Qa = 2n ** (48n - 1n) - 1n
  , eu = 2n ** (56n - 1n) - 1n
  , tu = 2n ** (64n - 1n) - 1n
  , nu = 2n ** (72n - 1n) - 1n
  , ru = 2n ** (80n - 1n) - 1n
  , ou = 2n ** (88n - 1n) - 1n
  , su = 2n ** (96n - 1n) - 1n
  , iu = 2n ** (104n - 1n) - 1n
  , au = 2n ** (112n - 1n) - 1n
  , uu = 2n ** (120n - 1n) - 1n
  , cu = 2n ** (128n - 1n) - 1n
  , pu = 2n ** (136n - 1n) - 1n
  , du = 2n ** (144n - 1n) - 1n
  , fu = 2n ** (152n - 1n) - 1n
  , mu = 2n ** (160n - 1n) - 1n
  , lu = 2n ** (168n - 1n) - 1n
  , yu = 2n ** (176n - 1n) - 1n
  , hu = 2n ** (184n - 1n) - 1n
  , bu = 2n ** (192n - 1n) - 1n
  , xu = 2n ** (200n - 1n) - 1n
  , gu = 2n ** (208n - 1n) - 1n
  , wu = 2n ** (216n - 1n) - 1n
  , vu = 2n ** (224n - 1n) - 1n
  , $u = 2n ** (232n - 1n) - 1n
  , Au = 2n ** (240n - 1n) - 1n
  , Iu = 2n ** (248n - 1n) - 1n
  , Pu = 2n ** (256n - 1n) - 1n
  , Mu = -(2n ** (8n - 1n))
  , Bu = -(2n ** (16n - 1n))
  , Eu = -(2n ** (24n - 1n))
  , Tu = -(2n ** (32n - 1n))
  , Su = -(2n ** (40n - 1n))
  , ku = -(2n ** (48n - 1n))
  , zu = -(2n ** (56n - 1n))
  , Cu = -(2n ** (64n - 1n))
  , Ou = -(2n ** (72n - 1n))
  , ju = -(2n ** (80n - 1n))
  , Ru = -(2n ** (88n - 1n))
  , Uu = -(2n ** (96n - 1n))
  , Fu = -(2n ** (104n - 1n))
  , Lu = -(2n ** (112n - 1n))
  , Du = -(2n ** (120n - 1n))
  , Hu = -(2n ** (128n - 1n))
  , Nu = -(2n ** (136n - 1n))
  , _u = -(2n ** (144n - 1n))
  , Gu = -(2n ** (152n - 1n))
  , Vu = -(2n ** (160n - 1n))
  , Wu = -(2n ** (168n - 1n))
  , Xu = -(2n ** (176n - 1n))
  , Yu = -(2n ** (184n - 1n))
  , qu = -(2n ** (192n - 1n))
  , Ju = -(2n ** (200n - 1n))
  , Zu = -(2n ** (208n - 1n))
  , Ku = -(2n ** (216n - 1n))
  , Qu = -(2n ** (224n - 1n))
  , ec = -(2n ** (232n - 1n))
  , tc = -(2n ** (240n - 1n))
  , nc = -(2n ** (248n - 1n))
  , rc = -(2n ** (256n - 1n))
  , oc = 2n ** 8n - 1n
  , sc = 2n ** 16n - 1n
  , ic = 2n ** 24n - 1n
  , ac = 2n ** 32n - 1n
  , uc = 2n ** 40n - 1n
  , cc = 2n ** 48n - 1n
  , pc = 2n ** 56n - 1n
  , dc = 2n ** 64n - 1n
  , fc = 2n ** 72n - 1n
  , mc = 2n ** 80n - 1n
  , lc = 2n ** 88n - 1n
  , yc = 2n ** 96n - 1n
  , hc = 2n ** 104n - 1n
  , bc = 2n ** 112n - 1n
  , xc = 2n ** 120n - 1n
  , gc = 2n ** 128n - 1n
  , wc = 2n ** 136n - 1n
  , vc = 2n ** 144n - 1n
  , $c = 2n ** 152n - 1n
  , Ac = 2n ** 160n - 1n
  , Ic = 2n ** 168n - 1n
  , Pc = 2n ** 176n - 1n
  , Mc = 2n ** 184n - 1n
  , Bc = 2n ** 192n - 1n
  , Ec = 2n ** 200n - 1n
  , Tc = 2n ** 208n - 1n
  , Sc = 2n ** 216n - 1n
  , kc = 2n ** 224n - 1n
  , zc = 2n ** 232n - 1n
  , Cc = 2n ** 240n - 1n
  , Oc = 2n ** 248n - 1n
  , Jn = 2n ** 256n - 1n;
function Zn(e) {
    let {account: t, gasPrice: n, maxFeePerGas: r, maxPriorityFeePerGas: o, to: i} = e
      , s = t ? V(t) : void 0;
    if (s && !w(s.address))
        throw new P({
            address: s.address
        });
    if (i && !w(i))
        throw new P({
            address: i
        });
    if (typeof n < "u" && (typeof r < "u" || typeof o < "u"))
        throw new tt;
    if (r && r > Jn)
        throw new L({
            maxFeePerGas: r
        });
    if (o && r && o > r)
        throw new D({
            maxFeePerGas: r,
            maxPriorityFeePerGas: o
        })
}
function Kn(e, t) {
    return B(this, null, function*() {
        let Ut = t
          , {account: n=e.account, batch: r=!!e.batch?.multicall, blockNumber: o, blockTag: i="latest", accessList: s, blobs: a, code: c, data: p, factory: f, factoryData: d, gas: b, gasPrice: m, maxFeePerBlobGas: y, maxFeePerGas: x, maxPriorityFeePerGas: j, nonce: ue, to: M, value: $e, stateOverride: er} = Ut
          , tr = T(Ut, ["account", "batch", "blockNumber", "blockTag", "accessList", "blobs", "code", "data", "factory", "factoryData", "gas", "gasPrice", "maxFeePerBlobGas", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "value", "stateOverride"])
          , Ct = n ? V(n) : void 0;
        if (c && (f || d))
            throw new u("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
        if (c && M)
            throw new u("Cannot provide both `code` & `to` as parameters.");
        let Ot = c && p
          , jt = f && d && M && p
          , Rt = Ot || jt
          , nr = Ot ? Gr({
            code: c,
            data: p
        }) : jt ? Vr({
            data: p,
            factory: f,
            factoryData: d,
            to: M
        }) : p;
        try {
            Zn(t);
            let G = (o ? l(o) : void 0) || i
              , ce = qn(er)
              , Ae = e.chain?.formatters?.transactionRequest?.format
              , Ie = (Ae || Vn)(v(g({}, Gn(tr, {
                format: Ae
            })), {
                from: Ct?.address,
                accessList: s,
                blobs: a,
                data: nr,
                gas: b,
                gasPrice: m,
                maxFeePerBlobGas: y,
                maxFeePerGas: x,
                maxPriorityFeePerGas: j,
                nonce: ue,
                to: Rt ? void 0 : M,
                value: $e
            }));
            if (r && Nr({
                request: Ie
            }) && !ce)
                try {
                    return yield _r(e, v(g({}, Ie), {
                        blockNumber: o,
                        blockTag: i
                    }))
                } catch (ct) {
                    if (!(ct instanceof pe) && !(ct instanceof H))
                        throw ct
                }
            let Ft = yield e.request({
                method: "eth_call",
                params: ce ? [Ie, G, ce] : [Ie, G]
            });
            return Ft === "0x" ? {
                data: void 0
            } : {
                data: Ft
            }
        } catch (ut) {
            let G = Wr(ut)
              , {offchainLookup: ce, offchainLookupSignature: Ae} = yield import("./chunk-XDBUDMZ4.js");
            if (e.ccipRead !== !1 && G?.slice(0, 10) === Ae && M)
                return {
                    data: yield ce(e, {
                        data: G,
                        to: M
                    })
                };
            throw Rt && G?.slice(0, 10) === "0x101bb98d" ? new rt({
                factory: f
            }) : _n(ut, v(g({}, t), {
                account: Ct,
                chain: e.chain
            }))
        }
    })
}
function Nr({request: e}) {
    let o = e
      , {data: t, to: n} = o
      , r = T(o, ["data", "to"]);
    return !(!t || t.startsWith(Yt) || !n || Object.values(r).filter(i => typeof i < "u").length > 0)
}
function _r(e, t) {
    return B(this, null, function*() {
        let {batchSize: n=1024, wait: r=0} = typeof e.batch?.multicall == "object" ? e.batch.multicall : {}
          , {blockNumber: o, blockTag: i="latest", data: s, multicallAddress: a, to: c} = t
          , p = a;
        if (!p) {
            if (!e.chain)
                throw new pe;
            p = Hn({
                blockNumber: o,
                chain: e.chain,
                contract: "multicall3"
            })
        }
        let d = (o ? l(o) : void 0) || i
          , {schedule: b} = Xn({
            id: `${e.uid}.${d}`,
            wait: r,
            shouldSplitBatch(x) {
                return x.reduce( (ue, {data: M}) => ue + (M.length - 2), 0) > n * 2
            },
            fn: x => B(this, null, function*() {
                let j = x.map($e => ({
                    allowFailure: !0,
                    callData: $e.data,
                    target: $e.to
                }))
                  , ue = Dn({
                    abi: yt,
                    args: [j],
                    functionName: "aggregate3"
                })
                  , M = yield e.request({
                    method: "eth_call",
                    params: [{
                        data: ue,
                        to: p
                    }, d]
                });
                return Un({
                    abi: yt,
                    args: [j],
                    functionName: "aggregate3",
                    data: M || "0x"
                })
            })
        })
          , [{returnData: m, success: y}] = yield b({
            data: s,
            to: c
        });
        if (!y)
            throw new ot({
                data: m
            });
        return m === "0x" ? {
            data: void 0
        } : {
            data: m
        }
    })
}
function Gr(e) {
    let {code: t, data: n} = e;
    return kt({
        abi: pt(["constructor(bytes, bytes)"]),
        bytecode: qt,
        args: [t, n]
    })
}
function Vr(e) {
    let {data: t, factory: n, factoryData: r, to: o} = e;
    return kt({
        abi: pt(["constructor(address, bytes, address, bytes)"]),
        bytecode: Jt,
        args: [o, t, n, r]
    })
}
function Wr(e) {
    if (!(e instanceof u))
        return;
    let t = e.walk();
    return typeof t?.data == "object" ? t.data?.data : t.data
}
var st = class extends u {
    constructor({callbackSelector: t, cause: n, data: r, extraData: o, sender: i, urls: s}) {
        super(n.shortMessage || "An error occurred while fetching for an offchain result.", {
            cause: n,
            metaMessages: [...n.metaMessages || [], n.metaMessages?.length ? "" : [], "Offchain Gateway Call:", s && ["  Gateway URL(s):", ...s.map(a => `    ${we(a)}`)], `  Sender: ${i}`, `  Data: ${r}`, `  Callback selector: ${t}`, `  Extra data: ${o}`].flat(),
            name: "OffchainLookupError"
        })
    }
}
  , it = class extends u {
    constructor({result: t, url: n}) {
        super("Offchain gateway response is malformed. Response data must be a hex value.", {
            metaMessages: [`Gateway URL: ${we(n)}`, `Response: ${K(t)}`],
            name: "OffchainLookupResponseMalformedError"
        })
    }
}
  , at = class extends u {
    constructor({sender: t, to: n}) {
        super("Reverted sender address does not match target contract address (`to`).", {
            metaMessages: [`Contract address: ${n}`, `OffchainLookup sender address: ${t}`],
            name: "OffchainLookupSenderMismatchError"
        })
    }
}
;
function Qn(e, t) {
    if (!w(e, {
        strict: !1
    }))
        throw new P({
            address: e
        });
    if (!w(t, {
        strict: !1
    }))
        throw new P({
            address: t
        });
    return e.toLowerCase() === t.toLowerCase()
}
var M0 = "0x556f1830"
  , Xr = {
    name: "OffchainLookup",
    type: "error",
    inputs: [{
        name: "sender",
        type: "address"
    }, {
        name: "urls",
        type: "string[]"
    }, {
        name: "callData",
        type: "bytes"
    }, {
        name: "callbackFunction",
        type: "bytes4"
    }, {
        name: "extraData",
        type: "bytes"
    }]
};
function B0(i, s) {
    return B(this, arguments, function*(e, {blockNumber: t, blockTag: n, data: r, to: o}) {
        let {args: a} = En({
            data: r,
            abi: [Xr]
        })
          , [c,p,f,d,b] = a
          , {ccipRead: m} = e
          , y = m && typeof m?.request == "function" ? m.request : Yr;
        try {
            if (!Qn(o, c))
                throw new at({
                    sender: c,
                    to: o
                });
            let x = yield y({
                data: f,
                sender: c,
                urls: p
            })
              , {data: j} = yield Kn(e, {
                blockNumber: t,
                blockTag: n,
                data: z([d, J([{
                    type: "bytes"
                }, {
                    type: "bytes"
                }], [x, b])]),
                to: o
            });
            return j
        } catch (x) {
            throw new st({
                callbackSelector: d,
                cause: x,
                data: r,
                extraData: b,
                sender: c,
                urls: p
            })
        }
    })
}
function Yr(r) {
    return B(this, arguments, function*({data: e, sender: t, urls: n}) {
        let o = new Error("An unknown error occurred.");
        for (let i = 0; i < n.length; i++) {
            let s = n[i]
              , a = s.includes("{data}") ? "GET" : "POST"
              , c = a === "POST" ? {
                data: e,
                sender: t
            } : void 0
              , p = a === "POST" ? {
                "Content-Type": "application/json"
            } : {};
            try {
                let f = yield fetch(s.replace("{sender}", t).replace("{data}", e), {
                    body: JSON.stringify(c),
                    headers: p,
                    method: a
                }), d;
                if (f.headers.get("Content-Type")?.startsWith("application/json") ? d = (yield f.json()).data : d = yield f.text(),
                !f.ok) {
                    o = new ve({
                        body: c,
                        details: d?.error ? K(d.error) : f.statusText,
                        headers: f.headers,
                        status: f.status,
                        url: s
                    });
                    continue
                }
                if (!A(d)) {
                    o = new it({
                        result: d,
                        url: s
                    });
                    continue
                }
                return d
            } catch (f) {
                o = new ve({
                    body: c,
                    details: f.message,
                    url: s
                })
            }
        }
        throw o
    })
}
export {A as a, gt as b, nn as c, rn as d, Ge as e, We as f, M0 as g, Xr as h, B0 as i, Yr as j};
