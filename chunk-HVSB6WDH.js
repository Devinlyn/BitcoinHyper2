import {a as En, b as vt} from "./chunk-DATZCTIA.js";
import {q as Mn, r as qr} from "./chunk-XQAGV3NV.js";
import {a as b, b as A, d as H, l as M} from "./chunk-QE6IBIJD.js";
var Bn = "0.1.1";
function zn() {
    return Bn
}
var Pe = class e extends Error {
    constructor(t, n={}) {
        let r = ( () => {
            if (n.cause instanceof e) {
                if (n.cause.details)
                    return n.cause.details;
                if (n.cause.shortMessage)
                    return n.cause.shortMessage
            }
            return n.cause && "details"in n.cause && typeof n.cause.details == "string" ? n.cause.details : n.cause?.message ? n.cause.message : n.details
        }
        )()
          , o = n.cause instanceof e && n.cause.docsPath || n.docsPath
          , i = `https://oxlib.sh${o ?? ""}`
          , a = [t || "An error occurred.", ...n.metaMessages ? ["", ...n.metaMessages] : [], ...r || o ? ["", r ? `Details: ${r}` : void 0, o ? `See: ${i}` : void 0] : []].filter(c => typeof c == "string").join(`
`);
        super(a, n.cause ? {
            cause: n.cause
        } : void 0),
        Object.defineProperty(this, "details", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "docs", {
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
        Object.defineProperty(this, "shortMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "cause", {
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
        Object.defineProperty(this, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: `ox@${zn()}`
        }),
        this.cause = n.cause,
        this.details = r,
        this.docs = i,
        this.docsPath = o,
        this.shortMessage = t
    }
    walk(t) {
        return jn(this, t)
    }
}
;
function jn(e, t) {
    return t?.(e) ? e : e && typeof e == "object" && "cause"in e && e.cause ? jn(e.cause, t) : t ? null : e
}
function Sn(e, t={}) {
    let {dir: n, size: r=32} = t;
    if (r === 0)
        return e;
    let o = e.replace("0x", "");
    if (o.length > r * 2)
        throw new Ue({
            size: Math.ceil(o.length / 2),
            targetSize: r,
            type: "Hex"
        });
    return `0x${o[n === "right" ? "padEnd" : "padStart"](r * 2, "0")}`
}
function j(e, t={}) {
    let {signed: n, size: r} = t, o = BigInt(e), s;
    r ? n ? s = (1n << BigInt(r) * 8n - 1n) - 1n : s = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (s = BigInt(Number.MAX_SAFE_INTEGER));
    let i = typeof s == "bigint" && n ? -s - 1n : 0;
    if (s && o > s || o < i) {
        let p = typeof e == "bigint" ? "n" : "";
        throw new At({
            max: s ? `${s}${p}` : void 0,
            min: `${i}${p}`,
            signed: n,
            size: r,
            value: `${e}${p}`
        })
    }
    let c = `0x${(n && o < 0 ? (1n << BigInt(r * 8)) + BigInt(o) : o).toString(16)}`;
    return r ? Yr(c, r) : c
}
function Yr(e, t) {
    return Sn(e, {
        dir: "left",
        size: t
    })
}
var At = class extends Pe {
    constructor({max: t, min: n, signed: r, size: o, value: s}) {
        super(`Number \`${s}\` is not in safe${o ? ` ${o * 8}-bit` : ""}${r ? " signed" : " unsigned"} integer range ${t ? `(\`${n}\` to \`${t}\`)` : `(above \`${n}\`)`}`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.IntegerOutOfRangeError"
        })
    }
}
;
var Ue = class extends Pe {
    constructor({size: t, targetSize: n, type: r}) {
        super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (\`${t}\`) exceeds padding size (\`${n}\`).`),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "Hex.SizeExceedsPaddingSizeError"
        })
    }
}
;
function Rn(e) {
    return {
        address: e.address,
        amount: j(e.amount),
        index: j(e.index),
        validatorIndex: j(e.validatorIndex)
    }
}
function Cn(e) {
    return b(b(b(b(b(b(b(b({}, typeof e.baseFeePerGas == "bigint" && {
        baseFeePerGas: j(e.baseFeePerGas)
    }), typeof e.blobBaseFee == "bigint" && {
        blobBaseFee: j(e.blobBaseFee)
    }), typeof e.feeRecipient == "string" && {
        feeRecipient: e.feeRecipient
    }), typeof e.gasLimit == "bigint" && {
        gasLimit: j(e.gasLimit)
    }), typeof e.number == "bigint" && {
        number: j(e.number)
    }), typeof e.prevRandao == "bigint" && {
        prevRandao: j(e.prevRandao)
    }), typeof e.time == "bigint" && {
        time: j(e.time)
    }), e.withdrawals && {
        withdrawals: e.withdrawals.map(Rn)
    })
}
function ne(e) {
    return typeof e == "string" ? {
        address: e,
        type: "json-rpc"
    } : e
}
var Pt = [{
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
  , Ne = [{
    name: "query",
    type: "function",
    stateMutability: "view",
    inputs: [{
        type: "tuple[]",
        name: "queries",
        components: [{
            type: "address",
            name: "sender"
        }, {
            type: "string[]",
            name: "urls"
        }, {
            type: "bytes",
            name: "data"
        }]
    }],
    outputs: [{
        type: "bool[]",
        name: "failures"
    }, {
        type: "bytes[]",
        name: "responses"
    }]
}, {
    name: "HttpError",
    type: "error",
    inputs: [{
        type: "uint16",
        name: "status"
    }, {
        type: "string",
        name: "message"
    }]
}]
  , On = [{
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
  , es = [...On, {
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
  , ts = [...On, {
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
var Fn = "0x82ad56cb";
var Un = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe"
  , Nn = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe";
var Tt = "2.33.2";
var It = {
    getDocsUrl: ({docsBaseUrl: e, docsPath: t="", docsSlug: n}) => t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
    version: `viem@${Tt}`
};
var u = class e extends Error {
    constructor(t, n={}) {
        let r = n.cause instanceof e ? n.cause.details : n.cause?.message ? n.cause.message : n.details
          , o = n.cause instanceof e && n.cause.docsPath || n.docsPath
          , s = It.getDocsUrl?.(A(b({}, n), {
            docsPath: o
        }))
          , i = [t || "An error occurred.", "", ...n.metaMessages ? [...n.metaMessages, ""] : [], ...s ? [`Docs: ${s}`] : [], ...r ? [`Details: ${r}`] : [], ...It.version ? [`Version: ${It.version}`] : []].join(`
`);
        super(i, n.cause ? {
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
        this.version = Tt
    }
    walk(t) {
        return Hn(this, t)
    }
}
;
function Hn(e, t) {
    return t?.(e) ? e : e && typeof e == "object" && "cause"in e && e.cause !== void 0 ? Hn(e.cause, t) : t ? null : e
}
var Z = class extends u {
    constructor({blockNumber: t, chain: n, contract: r}) {
        super(`Chain "${n.name}" does not support contract "${r.name}".`, {
            metaMessages: ["This could be due to any of the following:", ...t && r.blockCreated && r.blockCreated > t ? [`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`] : [`- The chain does not have the contract "${r.name}" configured.`]],
            name: "ChainDoesNotSupportContract"
        })
    }
}
  , kn = class extends u {
    constructor({chain: t, currentChainId: n}) {
        super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} \u2013 ${t.name}).`, {
            metaMessages: [`Current Chain ID:  ${n}`, `Expected Chain ID: ${t.id} \u2013 ${t.name}`],
            name: "ChainMismatchError"
        })
    }
}
  , Dn = class extends u {
    constructor() {
        super(["No chain was provided to the request.", "Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`), {
            name: "ChainNotFoundError"
        })
    }
}
  , Te = class extends u {
    constructor() {
        super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError"
        })
    }
}
;
var Ln = {
    1: "An `assert` condition failed.",
    17: "Arithmetic operation resulted in underflow or overflow.",
    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
    33: "Attempted to convert to an invalid type.",
    34: "Attempted to access a storage byte array that is incorrectly encoded.",
    49: "Performed `.pop()` on an empty array",
    50: "Array index is out of bounds.",
    65: "Allocated too much memory or created an array which is too large.",
    81: "Attempted to call a zero-initialized variable of internal function type."
}
  , He = {
    inputs: [{
        name: "message",
        type: "string"
    }],
    name: "Error",
    type: "error"
}
  , Gn = {
    inputs: [{
        name: "reason",
        type: "uint256"
    }],
    name: "Panic",
    type: "error"
};
function P(e, {includeName: t=!1}={}) {
    if (e.type !== "function" && e.type !== "event" && e.type !== "error")
        throw new De(e.type);
    return `${e.name}(${ke(e.inputs, {
        includeName: t
    })})`
}
function ke(e, {includeName: t=!1}={}) {
    return e ? e.map(n => Kr(n, {
        includeName: t
    })).join(t ? ", " : ",") : ""
}
function Kr(e, {includeName: t}) {
    return e.type.startsWith("tuple") ? `(${ke(e.components, {
        includeName: t
    })})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "")
}
function B(e, {strict: t=!0}={}) {
    return !e || typeof e != "string" ? !1 : t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x")
}
function x(e) {
    return B(e, {
        strict: !1
    }) ? Math.ceil((e.length - 2) / 2) : e.length
}
var Le = class extends u {
    constructor({docsPath: t}) {
        super(["A constructor was not found on the ABI.", "Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`), {
            docsPath: t,
            name: "AbiConstructorNotFoundError"
        })
    }
}
  , Ie = class extends u {
    constructor({docsPath: t}) {
        super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.", "Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`), {
            docsPath: t,
            name: "AbiConstructorParamsNotFoundError"
        })
    }
}
;
var Ge = class extends u {
    constructor({data: t, params: n, size: r}) {
        super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`), {
            metaMessages: [`Params: (${ke(n, {
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
  , re = class extends u {
    constructor() {
        super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError"
        })
    }
}
  , Ve = class extends u {
    constructor({expectedLength: t, givenLength: n, type: r}) {
        super([`ABI encoding array length mismatch for type ${r}.`, `Expected length: ${t}`, `Given length: ${n}`].join(`
`), {
            name: "AbiEncodingArrayLengthMismatchError"
        })
    }
}
  , We = class extends u {
    constructor({expectedSize: t, value: n}) {
        super(`Size of bytes "${n}" (bytes${x(n)}) does not match expected size (bytes${t}).`, {
            name: "AbiEncodingBytesSizeMismatchError"
        })
    }
}
  , qe = class extends u {
    constructor({expectedLength: t, givenLength: n}) {
        super(["ABI encoding params/values length mismatch.", `Expected length (params): ${t}`, `Given length (values): ${n}`].join(`
`), {
            name: "AbiEncodingLengthMismatchError"
        })
    }
}
  , Je = class extends u {
    constructor(t, {docsPath: n}) {
        super([`Arguments (\`args\`) were provided to "${t}", but "${t}" on the ABI does not contain any parameters (\`inputs\`).`, "Cannot encode error result without knowing what the parameter types are.", "Make sure you are using the correct ABI and that the inputs exist on it."].join(`
`), {
            docsPath: n,
            name: "AbiErrorInputsNotFoundError"
        })
    }
}
  , Me = class extends u {
    constructor(t, {docsPath: n}={}) {
        super([`Error ${t ? `"${t}" ` : ""}not found on ABI.`, "Make sure you are using the correct ABI and that the error exists on it."].join(`
`), {
            docsPath: n,
            name: "AbiErrorNotFoundError"
        })
    }
}
  , oe = class extends u {
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
var S = class extends u {
    constructor(t, {docsPath: n}={}) {
        super([`Function ${t ? `"${t}" ` : ""}not found on ABI.`, "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
            docsPath: n,
            name: "AbiFunctionNotFoundError"
        })
    }
}
  , se = class extends u {
    constructor(t, {docsPath: n}) {
        super([`Function "${t}" does not contain any \`outputs\` on ABI.`, "Cannot decode function result without knowing what the parameter types are.", "Make sure you are using the correct ABI and that the function exists on it."].join(`
`), {
            docsPath: n,
            name: "AbiFunctionOutputsNotFoundError"
        })
    }
}
  , _e = class extends u {
    constructor(t, {docsPath: n}) {
        super([`Encoded function signature "${t}" not found on ABI.`, "Make sure you are using the correct ABI and that the function exists on it.", `You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`), {
            docsPath: n,
            name: "AbiFunctionSignatureNotFoundError"
        })
    }
}
  , Ye = class extends u {
    constructor(t, n) {
        super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [`\`${t.type}\` in \`${P(t.abiItem)}\`, and`, `\`${n.type}\` in \`${P(n.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."],
            name: "AbiItemAmbiguityError"
        })
    }
}
  , Vn = class extends u {
    constructor({expectedSize: t, givenSize: n}) {
        super(`Expected bytes${t}, got bytes${n}.`, {
            name: "BytesSizeMismatchError"
        })
    }
}
;
var Xe = class extends u {
    constructor(t, {docsPath: n}) {
        super([`Type "${t}" is not a valid encoding type.`, "Please provide a valid ABI type."].join(`
`), {
            docsPath: n,
            name: "InvalidAbiEncodingType"
        })
    }
}
  , Ze = class extends u {
    constructor(t, {docsPath: n}) {
        super([`Type "${t}" is not a valid decoding type.`, "Please provide a valid ABI type."].join(`
`), {
            docsPath: n,
            name: "InvalidAbiDecodingType"
        })
    }
}
  , ie = class extends u {
    constructor(t) {
        super([`Value "${t}" is not a valid array.`].join(`
`), {
            name: "InvalidArrayError"
        })
    }
}
  , De = class extends u {
    constructor(t) {
        super([`"${t}" is not a valid definition type.`, 'Valid types: "function", "event", "error"'].join(`
`), {
            name: "InvalidDefinitionTypeError"
        })
    }
}
;
var Ee = class extends u {
    constructor({offset: t, position: n, size: r}) {
        super(`Slice ${n === "start" ? "starting" : "ending"} at offset "${t}" is out-of-bounds (size: ${r}).`, {
            name: "SliceOffsetOutOfBoundsError"
        })
    }
}
  , Be = class extends u {
    constructor({size: t, targetSize: n, type: r}) {
        super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`, {
            name: "SizeExceedsPaddingSizeError"
        })
    }
}
  , ze = class extends u {
    constructor({size: t, targetSize: n, type: r}) {
        super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} is expected to be ${n} ${r} long, but is ${t} ${r} long.`, {
            name: "InvalidBytesLengthError"
        })
    }
}
;
function R(e, t, n, {strict: r}={}) {
    return B(e, {
        strict: !1
    }) ? Qr(e, t, n, {
        strict: r
    }) : Mt(e, t, n, {
        strict: r
    })
}
function Wn(e, t) {
    if (typeof t == "number" && t > 0 && t > x(e) - 1)
        throw new Ee({
            offset: t,
            position: "start",
            size: x(e)
        })
}
function qn(e, t, n) {
    if (typeof t == "number" && typeof n == "number" && x(e) !== n - t)
        throw new Ee({
            offset: n,
            position: "end",
            size: x(e)
        })
}
function Mt(e, t, n, {strict: r}={}) {
    Wn(e, t);
    let o = e.slice(t, n);
    return r && qn(o, t, n),
    o
}
function Qr(e, t, n, {strict: r}={}) {
    Wn(e, t);
    let o = `0x${e.replace("0x", "").slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
    return r && qn(o, t, n),
    o
}
function q(e, {dir: t, size: n=32}={}) {
    return typeof e == "string" ? k(e, {
        dir: t,
        size: n
    }) : eo(e, {
        dir: t,
        size: n
    })
}
function k(e, {dir: t, size: n=32}={}) {
    if (n === null)
        return e;
    let r = e.replace("0x", "");
    if (r.length > n * 2)
        throw new Be({
            size: Math.ceil(r.length / 2),
            targetSize: n,
            type: "hex"
        });
    return `0x${r[t === "right" ? "padEnd" : "padStart"](n * 2, "0")}`
}
function eo(e, {dir: t, size: n=32}={}) {
    if (n === null)
        return e;
    if (e.length > n)
        throw new Be({
            size: e.length,
            targetSize: n,
            type: "bytes"
        });
    let r = new Uint8Array(n);
    for (let o = 0; o < n; o++) {
        let s = t === "right";
        r[s ? o : n - o - 1] = e[s ? o : e.length - o - 1]
    }
    return r
}
var ae = class extends u {
    constructor({max: t, min: n, signed: r, size: o, value: s}) {
        super(`Number "${s}" is not in safe ${o ? `${o * 8}-bit ${r ? "signed" : "unsigned"} ` : ""}integer range ${t ? `(${n} to ${t})` : `(above ${n})`}`, {
            name: "IntegerOutOfRangeError"
        })
    }
}
  , Ke = class extends u {
    constructor(t) {
        super(`Bytes value "${t}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`, {
            name: "InvalidBytesBooleanError"
        })
    }
}
;
var Qe = class extends u {
    constructor({givenSize: t, maxSize: n}) {
        super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`, {
            name: "SizeOverflowError"
        })
    }
}
;
function K(e, {dir: t="left"}={}) {
    let n = typeof e == "string" ? e.replace("0x", "") : e
      , r = 0;
    for (let o = 0; o < n.length - 1 && n[t === "left" ? o : n.length - o - 1].toString() === "0"; o++)
        r++;
    return n = t === "left" ? n.slice(r) : n.slice(0, n.length - r),
    typeof e == "string" ? (n.length === 1 && t === "right" && (n = `${n}0`),
    `0x${n.length % 2 === 1 ? `0${n}` : n}`) : n
}
function T(e, {size: t}) {
    if (x(e) > t)
        throw new Qe({
            givenSize: x(e),
            maxSize: t
        })
}
function Et(e, t={}) {
    let {signed: n} = t;
    t.size && T(e, {
        size: t.size
    });
    let r = BigInt(e);
    if (!n)
        return r;
    let o = (e.length - 2) / 2
      , s = (1n << BigInt(o) * 8n - 1n) - 1n;
    return r <= s ? r : r - BigInt(`0x${"f".padStart(o * 2, "f")}`) - 1n
}
function Jn(e, t={}) {
    return Number(Et(e, t))
}
function Us(e, t={}) {
    let n = ue(e);
    return t.size && (T(n, {
        size: t.size
    }),
    n = K(n, {
        dir: "right"
    })),
    new TextDecoder().decode(n)
}
var to = Array.from({
    length: 256
}, (e, t) => t.toString(16).padStart(2, "0"));
function _n(e, t={}) {
    return typeof e == "number" || typeof e == "bigint" ? y(e, t) : typeof e == "string" ? zt(e, t) : typeof e == "boolean" ? Bt(e, t) : z(e, t)
}
function Bt(e, t={}) {
    let n = `0x${Number(e)}`;
    return typeof t.size == "number" ? (T(n, {
        size: t.size
    }),
    q(n, {
        size: t.size
    })) : n
}
function z(e, t={}) {
    let n = "";
    for (let o = 0; o < e.length; o++)
        n += to[e[o]];
    let r = `0x${n}`;
    return typeof t.size == "number" ? (T(r, {
        size: t.size
    }),
    q(r, {
        dir: "right",
        size: t.size
    })) : r
}
function y(e, t={}) {
    let {signed: n, size: r} = t, o = BigInt(e), s;
    r ? n ? s = (1n << BigInt(r) * 8n - 1n) - 1n : s = 2n ** (BigInt(r) * 8n) - 1n : typeof e == "number" && (s = BigInt(Number.MAX_SAFE_INTEGER));
    let i = typeof s == "bigint" && n ? -s - 1n : 0;
    if (s && o > s || o < i) {
        let c = typeof e == "bigint" ? "n" : "";
        throw new ae({
            max: s ? `${s}${c}` : void 0,
            min: `${i}${c}`,
            signed: n,
            size: r,
            value: `${e}${c}`
        })
    }
    let a = `0x${(n && o < 0 ? (1n << BigInt(r * 8)) + BigInt(o) : o).toString(16)}`;
    return r ? q(a, {
        size: r
    }) : a
}
var no = new TextEncoder;
function zt(e, t={}) {
    let n = no.encode(e);
    return z(n, t)
}
var ro = new TextEncoder;
function et(e, t={}) {
    return typeof e == "number" || typeof e == "bigint" ? so(e, t) : typeof e == "boolean" ? oo(e, t) : B(e) ? ue(e, t) : jt(e, t)
}
function oo(e, t={}) {
    let n = new Uint8Array(1);
    return n[0] = Number(e),
    typeof t.size == "number" ? (T(n, {
        size: t.size
    }),
    q(n, {
        size: t.size
    })) : n
}
var D = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function Yn(e) {
    if (e >= D.zero && e <= D.nine)
        return e - D.zero;
    if (e >= D.A && e <= D.F)
        return e - (D.A - 10);
    if (e >= D.a && e <= D.f)
        return e - (D.a - 10)
}
function ue(e, t={}) {
    let n = e;
    t.size && (T(n, {
        size: t.size
    }),
    n = q(n, {
        dir: "right",
        size: t.size
    }));
    let r = n.slice(2);
    r.length % 2 && (r = `0${r}`);
    let o = r.length / 2
      , s = new Uint8Array(o);
    for (let i = 0, a = 0; i < o; i++) {
        let c = Yn(r.charCodeAt(a++))
          , p = Yn(r.charCodeAt(a++));
        if (c === void 0 || p === void 0)
            throw new u(`Invalid byte sequence ("${r[a - 2]}${r[a - 1]}" in "${r}").`);
        s[i] = c * 16 + p
    }
    return s
}
function so(e, t) {
    let n = y(e, t);
    return ue(n)
}
function jt(e, t={}) {
    let n = ro.encode(e);
    return typeof t.size == "number" ? (T(n, {
        size: t.size
    }),
    q(n, {
        dir: "right",
        size: t.size
    })) : n
}
qr();
function tt(e, t) {
    let n = t || "hex"
      , r = Mn(B(e, {
        strict: !1
    }) ? et(e) : e);
    return n === "bytes" ? r : _n(r)
}
var io = e => tt(et(e));
function Xn(e) {
    return io(e)
}
function Zn(e) {
    let t = !0
      , n = ""
      , r = 0
      , o = ""
      , s = !1;
    for (let i = 0; i < e.length; i++) {
        let a = e[i];
        if (["(", ")", ","].includes(a) && (t = !0),
        a === "(" && r++,
        a === ")" && r--,
        !!t) {
            if (r === 0) {
                if (a === " " && ["event", "function", ""].includes(o))
                    o = "";
                else if (o += a,
                a === ")") {
                    s = !0;
                    break
                }
                continue
            }
            if (a === " ") {
                e[i - 1] !== "," && n !== "," && n !== ",(" && (n = "",
                t = !1);
                continue
            }
            o += a,
            n += a
        }
    }
    if (!s)
        throw new u("Unable to normalize signature.");
    return o
}
var Kn = e => {
    let t = typeof e == "string" ? e : En(e);
    return Zn(t)
}
;
function nt(e) {
    return Xn(Kn(e))
}
var C = e => R(nt(e), 0, 4);
var I = class extends u {
    constructor({address: t}) {
        super(`Address "${t}" is invalid.`, {
            metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."],
            name: "InvalidAddressError"
        })
    }
}
;
var ce = class extends Map {
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
var ao = /^0x[a-fA-F0-9]{40}$/
  , St = new ce(8192);
function w(e, t) {
    let {strict: n=!0} = t ?? {}
      , r = `${e}.${n}`;
    if (St.has(r))
        return St.get(r);
    let o = ao.test(e) ? e.toLowerCase() === e ? !0 : n ? je(e) === e : !0 : !1;
    return St.set(r, o),
    o
}
var Rt = new ce(8192);
function je(e, t) {
    if (Rt.has(`${e}.${t}`))
        return Rt.get(`${e}.${t}`);
    let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase()
      , r = tt(jt(n), "bytes")
      , o = (t ? n.substring(`${t}0x`.length) : n).split("");
    for (let i = 0; i < 40; i += 2)
        r[i >> 1] >> 4 >= 8 && o[i] && (o[i] = o[i].toUpperCase()),
        (r[i >> 1] & 15) >= 8 && o[i + 1] && (o[i + 1] = o[i + 1].toUpperCase());
    let s = `0x${o.join("")}`;
    return Rt.set(`${e}.${t}`, s),
    s
}
function Ti(e, t) {
    if (!w(e, {
        strict: !1
    }))
        throw new I({
            address: e
        });
    return je(e, t)
}
var Se = class extends u {
    constructor({offset: t}) {
        super(`Offset \`${t}\` cannot be negative.`, {
            name: "NegativeOffsetError"
        })
    }
}
  , rt = class extends u {
    constructor({length: t, position: n}) {
        super(`Position \`${n}\` is out of bounds (\`0 < position < ${t}\`).`, {
            name: "PositionOutOfBoundsError"
        })
    }
}
  , ot = class extends u {
    constructor({count: t, limit: n}) {
        super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${t}\`).`, {
            name: "RecursiveReadLimitExceededError"
        })
    }
}
;
var uo = {
    bytes: new Uint8Array,
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map,
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
        if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new ot({
                count: this.recursiveReadCount + 1,
                limit: this.recursiveReadLimit
            })
    },
    assertPosition(e) {
        if (e < 0 || e > this.bytes.length - 1)
            throw new rt({
                length: this.bytes.length,
                position: e
            })
    },
    decrementPosition(e) {
        if (e < 0)
            throw new Se({
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
            throw new Se({
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
function Qn(e, {recursiveReadLimit: t=8192}={}) {
    let n = Object.create(uo);
    return n.bytes = e,
    n.dataView = new DataView(e.buffer,e.byteOffset,e.byteLength),
    n.positionReadCount = new Map,
    n.recursiveReadLimit = t,
    n
}
function er(e, t={}) {
    typeof t.size < "u" && T(e, {
        size: t.size
    });
    let n = z(e, t);
    return Et(n, t)
}
function tr(e, t={}) {
    let n = e;
    if (typeof t.size < "u" && (T(n, {
        size: t.size
    }),
    n = K(n)),
    n.length > 1 || n[0] > 1)
        throw new Ke(n);
    return !!n[0]
}
function O(e, t={}) {
    typeof t.size < "u" && T(e, {
        size: t.size
    });
    let n = z(e, t);
    return Jn(n, t)
}
function nr(e, t={}) {
    let n = e;
    return typeof t.size < "u" && (T(n, {
        size: t.size
    }),
    n = K(n, {
        dir: "right"
    })),
    new TextDecoder().decode(n)
}
function L(e) {
    return typeof e[0] == "string" ? Q(e) : co(e)
}
function co(e) {
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
function Q(e) {
    return `0x${e.reduce( (t, n) => t + n.replace("0x", ""), "")}`
}
var Ui = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/
  , rr = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function F(e, t) {
    if (e.length !== t.length)
        throw new qe({
            expectedLength: e.length,
            givenLength: t.length
        });
    let n = po({
        params: e,
        values: t
    })
      , r = Ot(n);
    return r.length === 0 ? "0x" : r
}
function po({params: e, values: t}) {
    let n = [];
    for (let r = 0; r < e.length; r++)
        n.push(Ct({
            param: e[r],
            value: t[r]
        }));
    return n
}
function Ct({param: e, value: t}) {
    let n = st(e.type);
    if (n) {
        let[r,o] = n;
        return mo(t, {
            length: r,
            param: A(b({}, e), {
                type: o
            })
        })
    }
    if (e.type === "tuple")
        return xo(t, {
            param: e
        });
    if (e.type === "address")
        return fo(t);
    if (e.type === "bool")
        return yo(t);
    if (e.type.startsWith("uint") || e.type.startsWith("int")) {
        let r = e.type.startsWith("int")
          , [,,o="256"] = rr.exec(e.type) ?? [];
        return bo(t, {
            signed: r,
            size: Number(o)
        })
    }
    if (e.type.startsWith("bytes"))
        return lo(t, {
            param: e
        });
    if (e.type === "string")
        return ho(t);
    throw new Xe(e.type,{
        docsPath: "/docs/contract/encodeAbiParameters"
    })
}
function Ot(e) {
    let t = 0;
    for (let s = 0; s < e.length; s++) {
        let {dynamic: i, encoded: a} = e[s];
        i ? t += 32 : t += x(a)
    }
    let n = []
      , r = []
      , o = 0;
    for (let s = 0; s < e.length; s++) {
        let {dynamic: i, encoded: a} = e[s];
        i ? (n.push(y(t + o, {
            size: 32
        })),
        r.push(a),
        o += x(a)) : n.push(a)
    }
    return L([...n, ...r])
}
function fo(e) {
    if (!w(e))
        throw new I({
            address: e
        });
    return {
        dynamic: !1,
        encoded: k(e.toLowerCase())
    }
}
function mo(e, {length: t, param: n}) {
    let r = t === null;
    if (!Array.isArray(e))
        throw new ie(e);
    if (!r && e.length !== t)
        throw new Ve({
            expectedLength: t,
            givenLength: e.length,
            type: `${n.type}[${t}]`
        });
    let o = !1
      , s = [];
    for (let i = 0; i < e.length; i++) {
        let a = Ct({
            param: n,
            value: e[i]
        });
        a.dynamic && (o = !0),
        s.push(a)
    }
    if (r || o) {
        let i = Ot(s);
        if (r) {
            let a = y(s.length, {
                size: 32
            });
            return {
                dynamic: !0,
                encoded: s.length > 0 ? L([a, i]) : a
            }
        }
        if (o)
            return {
                dynamic: !0,
                encoded: i
            }
    }
    return {
        dynamic: !1,
        encoded: L(s.map( ({encoded: i}) => i))
    }
}
function lo(e, {param: t}) {
    let[,n] = t.type.split("bytes")
      , r = x(e);
    if (!n) {
        let o = e;
        return r % 32 !== 0 && (o = k(o, {
            dir: "right",
            size: Math.ceil((e.length - 2) / 2 / 32) * 32
        })),
        {
            dynamic: !0,
            encoded: L([k(y(r, {
                size: 32
            })), o])
        }
    }
    if (r !== Number.parseInt(n))
        throw new We({
            expectedSize: Number.parseInt(n),
            value: e
        });
    return {
        dynamic: !1,
        encoded: k(e, {
            dir: "right"
        })
    }
}
function yo(e) {
    if (typeof e != "boolean")
        throw new u(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
    return {
        dynamic: !1,
        encoded: k(Bt(e))
    }
}
function bo(e, {signed: t, size: n=256}) {
    if (typeof n == "number") {
        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n
          , o = t ? -r - 1n : 0n;
        if (e > r || e < o)
            throw new ae({
                max: r.toString(),
                min: o.toString(),
                signed: t,
                size: n / 8,
                value: e.toString()
            })
    }
    return {
        dynamic: !1,
        encoded: y(e, {
            size: 32,
            signed: t
        })
    }
}
function ho(e) {
    let t = zt(e)
      , n = Math.ceil(x(t) / 32)
      , r = [];
    for (let o = 0; o < n; o++)
        r.push(k(R(t, o * 32, (o + 1) * 32), {
            dir: "right"
        }));
    return {
        dynamic: !0,
        encoded: L([k(y(x(t), {
            size: 32
        })), ...r])
    }
}
function xo(e, {param: t}) {
    let n = !1
      , r = [];
    for (let o = 0; o < t.components.length; o++) {
        let s = t.components[o]
          , i = Array.isArray(e) ? o : s.name
          , a = Ct({
            param: s,
            value: e[i]
        });
        r.push(a),
        a.dynamic && (n = !0)
    }
    return {
        dynamic: n,
        encoded: n ? Ot(r) : L(r.map( ({encoded: o}) => o))
    }
}
function st(e) {
    let t = e.match(/^(.*)\[(\d+)?\]$/);
    return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
}
function de(e, t) {
    let n = typeof t == "string" ? ue(t) : t
      , r = Qn(n);
    if (x(n) === 0 && e.length > 0)
        throw new re;
    if (x(t) && x(t) < 32)
        throw new Ge({
            data: typeof t == "string" ? t : z(t),
            params: e,
            size: x(t)
        });
    let o = 0
      , s = [];
    for (let i = 0; i < e.length; ++i) {
        let a = e[i];
        r.setPosition(o);
        let[c,p] = pe(r, a, {
            staticPosition: 0
        });
        o += p,
        s.push(c)
    }
    return s
}
function pe(e, t, {staticPosition: n}) {
    let r = st(t.type);
    if (r) {
        let[o,s] = r;
        return wo(e, A(b({}, t), {
            type: s
        }), {
            length: o,
            staticPosition: n
        })
    }
    if (t.type === "tuple")
        return Po(e, t, {
            staticPosition: n
        });
    if (t.type === "address")
        return go(e);
    if (t.type === "bool")
        return vo(e);
    if (t.type.startsWith("bytes"))
        return $o(e, t, {
            staticPosition: n
        });
    if (t.type.startsWith("uint") || t.type.startsWith("int"))
        return Ao(e, t);
    if (t.type === "string")
        return To(e, {
            staticPosition: n
        });
    throw new Ze(t.type,{
        docsPath: "/docs/contract/decodeAbiParameters"
    })
}
var or = 32
  , Ft = 32;
function go(e) {
    let t = e.readBytes(32);
    return [je(z(Mt(t, -20))), 32]
}
function wo(e, t, {length: n, staticPosition: r}) {
    if (!n) {
        let i = O(e.readBytes(Ft))
          , a = r + i
          , c = a + or;
        e.setPosition(a);
        let p = O(e.readBytes(or))
          , f = Re(t)
          , d = 0
          , l = [];
        for (let m = 0; m < p; ++m) {
            e.setPosition(c + (f ? m * 32 : d));
            let[h,g] = pe(e, t, {
                staticPosition: c
            });
            d += g,
            l.push(h)
        }
        return e.setPosition(r + 32),
        [l, 32]
    }
    if (Re(t)) {
        let i = O(e.readBytes(Ft))
          , a = r + i
          , c = [];
        for (let p = 0; p < n; ++p) {
            e.setPosition(a + p * 32);
            let[f] = pe(e, t, {
                staticPosition: a
            });
            c.push(f)
        }
        return e.setPosition(r + 32),
        [c, 32]
    }
    let o = 0
      , s = [];
    for (let i = 0; i < n; ++i) {
        let[a,c] = pe(e, t, {
            staticPosition: r + o
        });
        o += c,
        s.push(a)
    }
    return [s, o]
}
function vo(e) {
    return [tr(e.readBytes(32), {
        size: 32
    }), 32]
}
function $o(e, t, {staticPosition: n}) {
    let[r,o] = t.type.split("bytes");
    if (!o) {
        let i = O(e.readBytes(32));
        e.setPosition(n + i);
        let a = O(e.readBytes(32));
        if (a === 0)
            return e.setPosition(n + 32),
            ["0x", 32];
        let c = e.readBytes(a);
        return e.setPosition(n + 32),
        [z(c), 32]
    }
    return [z(e.readBytes(Number.parseInt(o), 32)), 32]
}
function Ao(e, t) {
    let n = t.type.startsWith("int")
      , r = Number.parseInt(t.type.split("int")[1] || "256")
      , o = e.readBytes(32);
    return [r > 48 ? er(o, {
        signed: n
    }) : O(o, {
        signed: n
    }), 32]
}
function Po(e, t, {staticPosition: n}) {
    let r = t.components.length === 0 || t.components.some( ({name: i}) => !i)
      , o = r ? [] : {}
      , s = 0;
    if (Re(t)) {
        let i = O(e.readBytes(Ft))
          , a = n + i;
        for (let c = 0; c < t.components.length; ++c) {
            let p = t.components[c];
            e.setPosition(a + s);
            let[f,d] = pe(e, p, {
                staticPosition: a
            });
            s += d,
            o[r ? c : p?.name] = f
        }
        return e.setPosition(n + 32),
        [o, 32]
    }
    for (let i = 0; i < t.components.length; ++i) {
        let a = t.components[i]
          , [c,p] = pe(e, a, {
            staticPosition: n
        });
        o[r ? i : a?.name] = c,
        s += p
    }
    return [o, s]
}
function To(e, {staticPosition: t}) {
    let n = O(e.readBytes(32))
      , r = t + n;
    e.setPosition(r);
    let o = O(e.readBytes(32));
    if (o === 0)
        return e.setPosition(t + 32),
        ["", 32];
    let s = e.readBytes(o, 32)
      , i = nr(K(s));
    return e.setPosition(t + 32),
    [i, 32]
}
function Re(e) {
    let {type: t} = e;
    if (t === "string" || t === "bytes" || t.endsWith("[]"))
        return !0;
    if (t === "tuple")
        return e.components?.some(Re);
    let n = st(e.type);
    return !!(n && Re(A(b({}, e), {
        type: n[1]
    })))
}
function it(e) {
    let {abi: t, data: n} = e
      , r = R(n, 0, 4);
    if (r === "0x")
        throw new re;
    let s = [...t || [], He, Gn].find(i => i.type === "error" && r === C(P(i)));
    if (!s)
        throw new oe(r,{
            docsPath: "/docs/contract/decodeErrorResult"
        });
    return {
        abiItem: s,
        args: "inputs"in s && s.inputs && s.inputs.length > 0 ? de(s.inputs, R(n, 4)) : void 0,
        errorName: s.name
    }
}
var U = (e, t, n) => JSON.stringify(e, (r, o) => {
    let s = typeof o == "bigint" ? o.toString() : o;
    return typeof t == "function" ? t(r, s) : s
}
, n);
function Ut({abiItem: e, args: t, includeFunctionName: n=!0, includeName: r=!1}) {
    if ("name"in e && "inputs"in e && e.inputs)
        return `${n ? e.name : ""}(${e.inputs.map( (o, s) => `${r && o.name ? `${o.name}: ` : ""}${typeof t[s] == "object" ? U(t[s]) : t[s]}`).join(", ")})`
}
var sr = nt;
function N(e) {
    let {abi: t, args: n=[], name: r} = e
      , o = B(r, {
        strict: !1
    })
      , s = t.filter(a => o ? a.type === "function" ? C(a) === r : a.type === "event" ? sr(a) === r : !1 : "name"in a && a.name === r);
    if (s.length === 0)
        return;
    if (s.length === 1)
        return s[0];
    let i;
    for (let a of s) {
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
            return d ? Nt(p, d) : !1
        }
        )) {
            if (i && "inputs"in i && i.inputs) {
                let p = ir(a.inputs, i.inputs, n);
                if (p)
                    throw new Ye({
                        abiItem: a,
                        type: p[0]
                    },{
                        abiItem: i,
                        type: p[1]
                    })
            }
            i = a
        }
    }
    return i || s[0]
}
function Nt(e, t) {
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
        return r === "tuple" && "components"in t ? Object.values(t.components).every( (o, s) => Nt(Object.values(e)[s], o)) : /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r) ? n === "number" || n === "bigint" : /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r) ? n === "string" || e instanceof Uint8Array : /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r) ? Array.isArray(e) && e.every(o => Nt(o, A(b({}, t), {
            type: r.replace(/(\[[0-9]{0,}\])$/, "")
        }))) : !1
    }
}
function ir(e, t, n) {
    for (let r in e) {
        let o = e[r]
          , s = t[r];
        if (o.type === "tuple" && s.type === "tuple" && "components"in o && "components"in s)
            return ir(o.components, s.components, n[r]);
        let i = [o.type, s.type];
        if (i.includes("address") && i.includes("bytes20") ? !0 : i.includes("address") && i.includes("string") ? w(n[r], {
            strict: !1
        }) : i.includes("address") && i.includes("bytes") ? w(n[r], {
            strict: !1
        }) : !1)
            return i
    }
}
var ar = {
    gwei: 9,
    wei: 18
}
  , ur = {
    ether: -9,
    wei: 9
}
  , Ba = {
    ether: -18,
    gwei: -9
};
function at(e, t) {
    let n = e.toString()
      , r = n.startsWith("-");
    r && (n = n.slice(1)),
    n = n.padStart(t, "0");
    let[o,s] = [n.slice(0, n.length - t), n.slice(n.length - t)];
    return s = s.replace(/(0+)$/, ""),
    `${r ? "-" : ""}${o || "0"}${s ? `.${s}` : ""}`
}
function ut(e, t="wei") {
    return at(e, ar[t])
}
function E(e, t="wei") {
    return at(e, ur[t])
}
var ct = class extends u {
    constructor({address: t}) {
        super(`State for account "${t}" is set multiple times.`, {
            name: "AccountStateConflictError"
        })
    }
}
  , pt = class extends u {
    constructor() {
        super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError"
        })
    }
}
;
function cr(e) {
    return e.reduce( (t, {slot: n, value: r}) => `${t}        ${n}: ${r}
`, "")
}
function pr(e) {
    return e.reduce( (t, o) => {
        var s = o
          , {address: n} = s
          , r = H(s, ["address"]);
        let i = `${t}    ${n}:
`;
        return r.nonce && (i += `      nonce: ${r.nonce}
`),
        r.balance && (i += `      balance: ${r.balance}
`),
        r.code && (i += `      code: ${r.code}
`),
        r.state && (i += `      state:
`,
        i += cr(r.state)),
        r.stateDiff && (i += `      stateDiff:
`,
        i += cr(r.stateDiff)),
        i
    }
    , `  State Override:
`).slice(0, -1)
}
function Ce(e) {
    let t = Object.entries(e).map( ([r,o]) => o === void 0 || o === !1 ? null : [r, o]).filter(Boolean)
      , n = t.reduce( (r, [o]) => Math.max(r, o.length), 0);
    return t.map( ([r,o]) => `  ${`${r}:`.padEnd(n + 1)}  ${o}`).join(`
`)
}
var dt = class extends u {
    constructor() {
        super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.", "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`), {
            name: "FeeConflictError"
        })
    }
}
;
var dr = class extends u {
    constructor({transaction: t}) {
        super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: ["Provided Transaction:", "{", Ce(t), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or", "- an EIP-7702 Transaction with `authorizationList`, or", "- a Legacy Transaction with `gasPrice`"],
            name: "InvalidSerializableTransactionError"
        })
    }
}
;
var fr = class extends u {
    constructor(t, {account: n, docsPath: r, chain: o, data: s, gas: i, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: p, nonce: f, to: d, value: l}) {
        let m = Ce({
            chain: o && `${o?.name} (id: ${o?.id})`,
            from: n?.address,
            to: d,
            value: typeof l < "u" && `${ut(l)} ${o?.nativeCurrency?.symbol || "ETH"}`,
            data: s,
            gas: i,
            gasPrice: typeof a < "u" && `${E(a)} gwei`,
            maxFeePerGas: typeof c < "u" && `${E(c)} gwei`,
            maxPriorityFeePerGas: typeof p < "u" && `${E(p)} gwei`,
            nonce: f
        });
        super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Request Arguments:", m].filter(Boolean),
            name: "TransactionExecutionError"
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
  , mr = class extends u {
    constructor({blockHash: t, blockNumber: n, blockTag: r, hash: o, index: s}) {
        let i = "Transaction";
        r && s !== void 0 && (i = `Transaction at block time "${r}" at index "${s}"`),
        t && s !== void 0 && (i = `Transaction at block hash "${t}" at index "${s}"`),
        n && s !== void 0 && (i = `Transaction at block number "${n}" at index "${s}"`),
        o && (i = `Transaction with hash "${o}"`),
        super(`${i} could not be found.`, {
            name: "TransactionNotFoundError"
        })
    }
}
  , lr = class extends u {
    constructor({hash: t}) {
        super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`, {
            name: "TransactionReceiptNotFoundError"
        })
    }
}
  , yr = class extends u {
    constructor({hash: t}) {
        super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`, {
            name: "WaitForTransactionReceiptTimeoutError"
        })
    }
}
;
var br = e => e
  , ee = e => e;
var ft = class extends u {
    constructor(t, {account: n, docsPath: r, chain: o, data: s, gas: i, gasPrice: a, maxFeePerGas: c, maxPriorityFeePerGas: p, nonce: f, to: d, value: l, stateOverride: m}) {
        let h = n ? ne(n) : void 0
          , g = Ce({
            from: h?.address,
            to: d,
            value: typeof l < "u" && `${ut(l)} ${o?.nativeCurrency?.symbol || "ETH"}`,
            data: s,
            gas: i,
            gasPrice: typeof a < "u" && `${E(a)} gwei`,
            maxFeePerGas: typeof c < "u" && `${E(c)} gwei`,
            maxPriorityFeePerGas: typeof p < "u" && `${E(p)} gwei`,
            nonce: f
        });
        m && (g += `
${pr(m)}`),
        super(t.shortMessage, {
            cause: t,
            docsPath: r,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], "Raw Call Arguments:", g].filter(Boolean),
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
  , hr = class extends u {
    constructor(t, {abi: n, args: r, contractAddress: o, docsPath: s, functionName: i, sender: a}) {
        let c = N({
            abi: n,
            args: r,
            name: i
        })
          , p = c ? Ut({
            abiItem: c,
            args: r,
            includeFunctionName: !1,
            includeName: !1
        }) : void 0
          , f = c ? P(c, {
            includeName: !0
        }) : void 0
          , d = Ce({
            address: o && br(o),
            function: f,
            args: p && p !== "()" && `${[...Array(i?.length ?? 0).keys()].map( () => " ").join("")}${p}`,
            sender: a
        });
        super(t.shortMessage || `An unknown error occurred while executing the contract function "${i}".`, {
            cause: t,
            docsPath: s,
            metaMessages: [...t.metaMessages ? [...t.metaMessages, " "] : [], d && "Contract Call:", d].filter(Boolean),
            name: "ContractFunctionExecutionError"
        }),
        Object.defineProperty(this, "abi", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "args", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "contractAddress", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "formattedArgs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "functionName", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "sender", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.abi = n,
        this.args = r,
        this.cause = t,
        this.contractAddress = o,
        this.functionName = i,
        this.sender = a
    }
}
  , xr = class extends u {
    constructor({abi: t, data: n, functionName: r, message: o}) {
        let s, i, a, c;
        if (n && n !== "0x")
            try {
                i = it({
                    abi: t,
                    data: n
                });
                let {abiItem: f, errorName: d, args: l} = i;
                if (d === "Error")
                    c = l[0];
                else if (d === "Panic") {
                    let[m] = l;
                    c = Ln[m]
                } else {
                    let m = f ? P(f, {
                        includeName: !0
                    }) : void 0
                      , h = f && l ? Ut({
                        abiItem: f,
                        args: l,
                        includeFunctionName: !1,
                        includeName: !1
                    }) : void 0;
                    a = [m ? `Error: ${m}` : "", h && h !== "()" ? `       ${[...Array(d?.length ?? 0).keys()].map( () => " ").join("")}${h}` : ""]
                }
            } catch (f) {
                s = f
            }
        else
            o && (c = o);
        let p;
        s instanceof oe && (p = s.signature,
        a = [`Unable to decode signature "${p}" as it was not found on the provided ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${p}.`]),
        super(c && c !== "execution reverted" || p ? [`The contract function "${r}" reverted with the following ${p ? "signature" : "reason"}:`, c || p].join(`
`) : `The contract function "${r}" reverted.`, {
            cause: s,
            metaMessages: a,
            name: "ContractFunctionRevertedError"
        }),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "raw", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "reason", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "signature", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.data = i,
        this.raw = n,
        this.reason = c,
        this.signature = p
    }
}
  , gr = class extends u {
    constructor({functionName: t}) {
        super(`The contract function "${t}" returned no data ("0x").`, {
            metaMessages: ["This could be due to any of the following:", `  - The contract does not have the function "${t}",`, "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."],
            name: "ContractFunctionZeroDataError"
        })
    }
}
  , mt = class extends u {
    constructor({factory: t}) {
        super(`Deployment for counterfactual contract call failed${t ? ` for factory "${t}".` : ""}`, {
            metaMessages: ["Please ensure:", "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).", "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."],
            name: "CounterfactualDeploymentFailedError"
        })
    }
}
  , lt = class extends u {
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
var Ht = "/docs/contract/decodeFunctionResult";
function wr(e) {
    let {abi: t, args: n, functionName: r, data: o} = e
      , s = t[0];
    if (r) {
        let a = N({
            abi: t,
            args: n,
            name: r
        });
        if (!a)
            throw new S(r,{
                docsPath: Ht
            });
        s = a
    }
    if (s.type !== "function")
        throw new S(void 0,{
            docsPath: Ht
        });
    if (!s.outputs)
        throw new se(s.name,{
            docsPath: Ht
        });
    let i = de(s.outputs, o);
    if (i && i.length > 1)
        return i;
    if (i && i.length === 1)
        return i[0]
}
var kt = "/docs/contract/encodeDeployData";
function Dt(e) {
    let {abi: t, args: n, bytecode: r} = e;
    if (!n || n.length === 0)
        return r;
    let o = t.find(i => "type"in i && i.type === "constructor");
    if (!o)
        throw new Le({
            docsPath: kt
        });
    if (!("inputs"in o))
        throw new Ie({
            docsPath: kt
        });
    if (!o.inputs || o.inputs.length === 0)
        throw new Ie({
            docsPath: kt
        });
    let s = F(o.inputs, n);
    return Q([r, s])
}
var vr = "/docs/contract/encodeFunctionData";
function $r(e) {
    let {abi: t, args: n, functionName: r} = e
      , o = t[0];
    if (r) {
        let s = N({
            abi: t,
            args: n,
            name: r
        });
        if (!s)
            throw new S(r,{
                docsPath: vr
            });
        o = s
    }
    if (o.type !== "function")
        throw new S(void 0,{
            docsPath: vr
        });
    return {
        abi: [o],
        functionName: C(P(o))
    }
}
function Ar(e) {
    let {args: t} = e
      , {abi: n, functionName: r} = e.abi.length === 1 && e.functionName?.startsWith("0x") ? e : $r(e)
      , o = n[0]
      , s = r
      , i = "inputs"in o && o.inputs ? F(o.inputs, t ?? []) : void 0;
    return Q([s, i ?? "0x"])
}
function Pr({blockNumber: e, chain: t, contract: n}) {
    let r = t?.contracts?.[n];
    if (!r)
        throw new Z({
            chain: t,
            contract: {
                name: n
            }
        });
    if (e && r.blockCreated && r.blockCreated > e)
        throw new Z({
            blockNumber: e,
            chain: t,
            contract: {
                name: n,
                blockCreated: r.blockCreated
            }
        });
    return r.address
}
var G = class extends u {
    constructor({cause: t, message: n}={}) {
        let r = n?.replace("execution reverted: ", "")?.replace("execution reverted", "");
        super(`Execution reverted ${r ? `with reason: ${r}` : "for an unknown reason"}.`, {
            cause: t,
            name: "ExecutionRevertedError"
        })
    }
}
;
Object.defineProperty(G, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 3
});
Object.defineProperty(G, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /execution reverted/
});
var J = class extends u {
    constructor({cause: t, maxFeePerGas: n}={}) {
        super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${E(n)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
            cause: t,
            name: "FeeCapTooHighError"
        })
    }
}
;
Object.defineProperty(J, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
});
var fe = class extends u {
    constructor({cause: t, maxFeePerGas: n}={}) {
        super(`The fee cap (\`maxFeePerGas\`${n ? ` = ${E(n)}` : ""} gwei) cannot be lower than the block base fee.`, {
            cause: t,
            name: "FeeCapTooLowError"
        })
    }
}
;
Object.defineProperty(fe, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
});
var me = class extends u {
    constructor({cause: t, nonce: n}={}) {
        super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is higher than the next one expected.`, {
            cause: t,
            name: "NonceTooHighError"
        })
    }
}
;
Object.defineProperty(me, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too high/
});
var le = class extends u {
    constructor({cause: t, nonce: n}={}) {
        super([`Nonce provided for the transaction ${n ? `(${n}) ` : ""}is lower than the current nonce of the account.`, "Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`), {
            cause: t,
            name: "NonceTooLowError"
        })
    }
}
;
Object.defineProperty(le, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce too low|transaction already imported|already known/
});
var ye = class extends u {
    constructor({cause: t, nonce: n}={}) {
        super(`Nonce provided for the transaction ${n ? `(${n}) ` : ""}exceeds the maximum allowed nonce.`, {
            cause: t,
            name: "NonceMaxValueError"
        })
    }
}
;
Object.defineProperty(ye, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /nonce has max value/
});
var be = class extends u {
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
Object.defineProperty(be, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /insufficient funds|exceeds transaction sender account balance/
});
var he = class extends u {
    constructor({cause: t, gas: n}={}) {
        super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
            cause: t,
            name: "IntrinsicGasTooHighError"
        })
    }
}
;
Object.defineProperty(he, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too high|gas limit reached/
});
var xe = class extends u {
    constructor({cause: t, gas: n}={}) {
        super(`The amount of gas ${n ? `(${n}) ` : ""}provided for the transaction is too low.`, {
            cause: t,
            name: "IntrinsicGasTooLowError"
        })
    }
}
;
Object.defineProperty(xe, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /intrinsic gas too low/
});
var ge = class extends u {
    constructor({cause: t}) {
        super("The transaction type is not supported for this chain.", {
            cause: t,
            name: "TransactionTypeNotSupportedError"
        })
    }
}
;
Object.defineProperty(ge, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /transaction type not valid/
});
var _ = class extends u {
    constructor({cause: t, maxPriorityFeePerGas: n, maxFeePerGas: r}={}) {
        super([`The provided tip (\`maxPriorityFeePerGas\`${n ? ` = ${E(n)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r ? ` = ${E(r)} gwei` : ""}).`].join(`
`), {
            cause: t,
            name: "TipAboveFeeCapError"
        })
    }
}
;
Object.defineProperty(_, "nodeMessage", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
});
var we = class extends u {
    constructor({cause: t}) {
        super(`An error occurred while executing: ${t?.shortMessage}`, {
            cause: t,
            name: "UnknownNodeError"
        })
    }
}
;
var Oe = class extends u {
    constructor({body: t, cause: n, details: r, headers: o, status: s, url: i}) {
        super("HTTP request failed.", {
            cause: n,
            details: r,
            metaMessages: [s && `Status: ${s}`, `URL: ${ee(i)}`, t && `Request body: ${U(t)}`].filter(Boolean),
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
        this.status = s,
        this.url = i
    }
}
;
var yt = class extends u {
    constructor({body: t, error: n, url: r}) {
        super("RPC Request failed.", {
            cause: n,
            details: n.message,
            metaMessages: [`URL: ${ee(r)}`, `Request body: ${U(t)}`],
            name: "RpcRequestError"
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.code = n.code,
        this.data = n.data
    }
}
;
var Tr = class extends u {
    constructor({body: t, url: n}) {
        super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [`URL: ${ee(n)}`, `Request body: ${U(t)}`],
            name: "TimeoutError"
        })
    }
}
;
var Io = -1
  , v = class extends u {
    constructor(t, {code: n, docsPath: r, metaMessages: o, name: s, shortMessage: i}) {
        super(i, {
            cause: t,
            docsPath: r,
            metaMessages: o || t?.metaMessages,
            name: s || "RpcError"
        }),
        Object.defineProperty(this, "code", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.name = s || t.name,
        this.code = t instanceof yt ? t.code : n ?? Io
    }
}
  , $ = class extends v {
    constructor(t, n) {
        super(t, n),
        Object.defineProperty(this, "data", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.data = n.data
    }
}
  , Lt = class e extends v {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "ParseRpcError",
            shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
        })
    }
}
;
Object.defineProperty(Lt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32700
});
var Gt = class e extends v {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object."
        })
    }
}
;
Object.defineProperty(Gt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32600
});
var Vt = class e extends v {
    constructor(t, {method: n}={}) {
        super(t, {
            code: e.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${n ? ` "${n}"` : ""} does not exist / is not available.`
        })
    }
}
;
Object.defineProperty(Vt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32601
});
var Wt = class e extends v {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "InvalidParamsRpcError",
            shortMessage: ["Invalid parameters were provided to the RPC method.", "Double check you have provided the correct parameters."].join(`
`)
        })
    }
}
;
Object.defineProperty(Wt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32602
});
var qt = class e extends v {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received."
        })
    }
}
;
Object.defineProperty(qt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32603
});
var Jt = class e extends v {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "InvalidInputRpcError",
            shortMessage: ["Missing or invalid parameters.", "Double check you have provided the correct parameters."].join(`
`)
        })
    }
}
;
Object.defineProperty(Jt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32e3
});
var _t = class e extends v {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found."
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "ResourceNotFoundRpcError"
        })
    }
}
;
Object.defineProperty(_t, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32001
});
var Yt = class e extends v {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available."
        })
    }
}
;
Object.defineProperty(Yt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32002
});
var Xt = class e extends v {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed."
        })
    }
}
;
Object.defineProperty(Xt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32003
});
var Zt = class e extends v {
    constructor(t, {method: n}={}) {
        super(t, {
            code: e.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${n ? ` "${n}"` : ""} is not supported.`
        })
    }
}
;
Object.defineProperty(Zt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32004
});
var Kt = class e extends v {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit."
        })
    }
}
;
Object.defineProperty(Kt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32005
});
var Qt = class e extends v {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported."
        })
    }
}
;
Object.defineProperty(Qt, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: -32006
});
var en = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request."
        })
    }
}
;
Object.defineProperty(en, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4001
});
var tn = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "UnauthorizedProviderError",
            shortMessage: "The requested method and/or account has not been authorized by the user."
        })
    }
}
;
Object.defineProperty(tn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4100
});
var nn = class e extends $ {
    constructor(t, {method: n}={}) {
        super(t, {
            code: e.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${n ? ` " ${n}"` : ""}.`
        })
    }
}
;
Object.defineProperty(nn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4200
});
var rn = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains."
        })
    }
}
;
Object.defineProperty(rn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4900
});
var on = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "ChainDisconnectedError",
            shortMessage: "The Provider is not connected to the requested chain."
        })
    }
}
;
Object.defineProperty(on, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4901
});
var sn = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain."
        })
    }
}
;
Object.defineProperty(sn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 4902
});
var an = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "UnsupportedNonOptionalCapabilityError",
            shortMessage: "This Wallet does not support a capability that was not marked as optional."
        })
    }
}
;
Object.defineProperty(an, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5700
});
var un = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "UnsupportedChainIdError",
            shortMessage: "This Wallet does not support the requested chain ID."
        })
    }
}
;
Object.defineProperty(un, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5710
});
var cn = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "DuplicateIdError",
            shortMessage: "There is already a bundle submitted with this ID."
        })
    }
}
;
Object.defineProperty(cn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5720
});
var pn = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "UnknownBundleIdError",
            shortMessage: "This bundle id is unknown / has not been submitted"
        })
    }
}
;
Object.defineProperty(pn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5730
});
var dn = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "BundleTooLargeError",
            shortMessage: "The call bundle is too large for the Wallet to process."
        })
    }
}
;
Object.defineProperty(dn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5740
});
var fn = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "AtomicReadyWalletRejectedUpgradeError",
            shortMessage: "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."
        })
    }
}
;
Object.defineProperty(fn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5750
});
var mn = class e extends $ {
    constructor(t) {
        super(t, {
            code: e.code,
            name: "AtomicityNotSupportedError",
            shortMessage: "The wallet does not support atomic execution but the request requires it."
        })
    }
}
;
Object.defineProperty(mn, "code", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: 5760
});
var Ir = class extends v {
    constructor(t) {
        super(t, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred."
        })
    }
}
;
function Mr(e, t) {
    let n = (e.details || "").toLowerCase()
      , r = e instanceof u ? e.walk(o => o?.code === G.code) : e;
    return r instanceof u ? new G({
        cause: e,
        message: r.details
    }) : G.nodeMessage.test(n) ? new G({
        cause: e,
        message: e.details
    }) : J.nodeMessage.test(n) ? new J({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas
    }) : fe.nodeMessage.test(n) ? new fe({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas
    }) : me.nodeMessage.test(n) ? new me({
        cause: e,
        nonce: t?.nonce
    }) : le.nodeMessage.test(n) ? new le({
        cause: e,
        nonce: t?.nonce
    }) : ye.nodeMessage.test(n) ? new ye({
        cause: e,
        nonce: t?.nonce
    }) : be.nodeMessage.test(n) ? new be({
        cause: e
    }) : he.nodeMessage.test(n) ? new he({
        cause: e,
        gas: t?.gas
    }) : xe.nodeMessage.test(n) ? new xe({
        cause: e,
        gas: t?.gas
    }) : ge.nodeMessage.test(n) ? new ge({
        cause: e
    }) : _.nodeMessage.test(n) ? new _({
        cause: e,
        maxFeePerGas: t?.maxFeePerGas,
        maxPriorityFeePerGas: t?.maxPriorityFeePerGas
    }) : new we({
        cause: e
    })
}
function Er(e, r) {
    var o = r
      , {docsPath: t} = o
      , n = H(o, ["docsPath"]);
    let s = ( () => {
        let i = Mr(e, n);
        return i instanceof we ? e : i
    }
    )();
    return new ft(s,b({
        docsPath: t
    }, n))
}
function Br(e, {format: t}) {
    if (!t)
        return {};
    let n = {};
    function r(s) {
        let i = Object.keys(s);
        for (let a of i)
            a in e && (n[a] = e[a]),
            s[a] && typeof s[a] == "object" && !Array.isArray(s[a]) && r(s[a])
    }
    let o = t(e || {});
    return r(o),
    n
}
var Mo = {
    legacy: "0x0",
    eip2930: "0x1",
    eip1559: "0x2",
    eip4844: "0x3",
    eip7702: "0x4"
};
function zr(e) {
    let t = {};
    return typeof e.authorizationList < "u" && (t.authorizationList = Eo(e.authorizationList)),
    typeof e.accessList < "u" && (t.accessList = e.accessList),
    typeof e.blobVersionedHashes < "u" && (t.blobVersionedHashes = e.blobVersionedHashes),
    typeof e.blobs < "u" && (typeof e.blobs[0] != "string" ? t.blobs = e.blobs.map(n => z(n)) : t.blobs = e.blobs),
    typeof e.data < "u" && (t.data = e.data),
    typeof e.from < "u" && (t.from = e.from),
    typeof e.gas < "u" && (t.gas = y(e.gas)),
    typeof e.gasPrice < "u" && (t.gasPrice = y(e.gasPrice)),
    typeof e.maxFeePerBlobGas < "u" && (t.maxFeePerBlobGas = y(e.maxFeePerBlobGas)),
    typeof e.maxFeePerGas < "u" && (t.maxFeePerGas = y(e.maxFeePerGas)),
    typeof e.maxPriorityFeePerGas < "u" && (t.maxPriorityFeePerGas = y(e.maxPriorityFeePerGas)),
    typeof e.nonce < "u" && (t.nonce = y(e.nonce)),
    typeof e.to < "u" && (t.to = e.to),
    typeof e.type < "u" && (t.type = Mo[e.type]),
    typeof e.value < "u" && (t.value = y(e.value)),
    t
}
function Eo(e) {
    return e.map(t => b(b({
        address: t.address,
        r: t.r ? y(BigInt(t.r)) : t.r,
        s: t.s ? y(BigInt(t.s)) : t.s,
        chainId: y(t.chainId),
        nonce: y(t.nonce)
    }, typeof t.yParity < "u" ? {
        yParity: y(t.yParity)
    } : {}), typeof t.v < "u" && typeof t.yParity > "u" ? {
        v: y(t.v)
    } : {}))
}
function jr() {
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
var ln = new Map;
function Sr({fn: e, id: t, shouldSplitBatch: n, wait: r=0, sort: o}) {
    let s = () => M(this, null, function*() {
        let d = c();
        i();
        let l = d.map( ({args: m}) => m);
        l.length !== 0 && e(l).then(m => {
            o && Array.isArray(m) && m.sort(o);
            for (let h = 0; h < d.length; h++) {
                let {resolve: g} = d[h];
                g?.([m[h], m])
            }
        }
        ).catch(m => {
            for (let h = 0; h < d.length; h++) {
                let {reject: g} = d[h];
                g?.(m)
            }
        }
        )
    })
      , i = () => ln.delete(t)
      , a = () => c().map( ({args: d}) => d)
      , c = () => ln.get(t) || []
      , p = d => ln.set(t, [...c(), d]);
    return {
        flush: i,
        schedule(d) {
            return M(this, null, function*() {
                let {promise: l, resolve: m, reject: h} = jr();
                return n?.([...a(), d]) && s(),
                c().length > 0 ? (p({
                    args: d,
                    resolve: m,
                    reject: h
                }),
                l) : (p({
                    args: d,
                    resolve: m,
                    reject: h
                }),
                setTimeout(s, r),
                l)
            })
        }
    }
}
function Rr(e) {
    if (!(!e || e.length === 0))
        return e.reduce( (t, {slot: n, value: r}) => {
            if (n.length !== 66)
                throw new ze({
                    size: n.length,
                    targetSize: 66,
                    type: "hex"
                });
            if (r.length !== 66)
                throw new ze({
                    size: r.length,
                    targetSize: 66,
                    type: "hex"
                });
            return t[n] = r,
            t
        }
        , {})
}
function Bo(e) {
    let {balance: t, nonce: n, state: r, stateDiff: o, code: s} = e
      , i = {};
    if (s !== void 0 && (i.code = s),
    t !== void 0 && (i.balance = y(t)),
    n !== void 0 && (i.nonce = y(n)),
    r !== void 0 && (i.state = Rr(r)),
    o !== void 0) {
        if (i.state)
            throw new pt;
        i.stateDiff = Rr(o)
    }
    return i
}
function Cr(e) {
    if (!e)
        return;
    let t = {};
    for (let n of e) {
        let r = n
          , {address: o} = r
          , s = H(r, ["address"]);
        if (!w(o, {
            strict: !1
        }))
            throw new I({
                address: o
            });
        if (t[o])
            throw new ct({
                address: o
            });
        t[o] = Bo(s)
    }
    return t
}
var oc = 2n ** (8n - 1n) - 1n
  , sc = 2n ** (16n - 1n) - 1n
  , ic = 2n ** (24n - 1n) - 1n
  , ac = 2n ** (32n - 1n) - 1n
  , uc = 2n ** (40n - 1n) - 1n
  , cc = 2n ** (48n - 1n) - 1n
  , pc = 2n ** (56n - 1n) - 1n
  , dc = 2n ** (64n - 1n) - 1n
  , fc = 2n ** (72n - 1n) - 1n
  , mc = 2n ** (80n - 1n) - 1n
  , lc = 2n ** (88n - 1n) - 1n
  , yc = 2n ** (96n - 1n) - 1n
  , bc = 2n ** (104n - 1n) - 1n
  , hc = 2n ** (112n - 1n) - 1n
  , xc = 2n ** (120n - 1n) - 1n
  , gc = 2n ** (128n - 1n) - 1n
  , wc = 2n ** (136n - 1n) - 1n
  , vc = 2n ** (144n - 1n) - 1n
  , $c = 2n ** (152n - 1n) - 1n
  , Ac = 2n ** (160n - 1n) - 1n
  , Pc = 2n ** (168n - 1n) - 1n
  , Tc = 2n ** (176n - 1n) - 1n
  , Ic = 2n ** (184n - 1n) - 1n
  , Mc = 2n ** (192n - 1n) - 1n
  , Ec = 2n ** (200n - 1n) - 1n
  , Bc = 2n ** (208n - 1n) - 1n
  , zc = 2n ** (216n - 1n) - 1n
  , jc = 2n ** (224n - 1n) - 1n
  , Sc = 2n ** (232n - 1n) - 1n
  , Rc = 2n ** (240n - 1n) - 1n
  , Cc = 2n ** (248n - 1n) - 1n
  , Oc = 2n ** (256n - 1n) - 1n
  , Fc = -(2n ** (8n - 1n))
  , Uc = -(2n ** (16n - 1n))
  , Nc = -(2n ** (24n - 1n))
  , Hc = -(2n ** (32n - 1n))
  , kc = -(2n ** (40n - 1n))
  , Dc = -(2n ** (48n - 1n))
  , Lc = -(2n ** (56n - 1n))
  , Gc = -(2n ** (64n - 1n))
  , Vc = -(2n ** (72n - 1n))
  , Wc = -(2n ** (80n - 1n))
  , qc = -(2n ** (88n - 1n))
  , Jc = -(2n ** (96n - 1n))
  , _c = -(2n ** (104n - 1n))
  , Yc = -(2n ** (112n - 1n))
  , Xc = -(2n ** (120n - 1n))
  , Zc = -(2n ** (128n - 1n))
  , Kc = -(2n ** (136n - 1n))
  , Qc = -(2n ** (144n - 1n))
  , ep = -(2n ** (152n - 1n))
  , tp = -(2n ** (160n - 1n))
  , np = -(2n ** (168n - 1n))
  , rp = -(2n ** (176n - 1n))
  , op = -(2n ** (184n - 1n))
  , sp = -(2n ** (192n - 1n))
  , ip = -(2n ** (200n - 1n))
  , ap = -(2n ** (208n - 1n))
  , up = -(2n ** (216n - 1n))
  , cp = -(2n ** (224n - 1n))
  , pp = -(2n ** (232n - 1n))
  , dp = -(2n ** (240n - 1n))
  , fp = -(2n ** (248n - 1n))
  , mp = -(2n ** (256n - 1n))
  , lp = 2n ** 8n - 1n
  , yp = 2n ** 16n - 1n
  , bp = 2n ** 24n - 1n
  , hp = 2n ** 32n - 1n
  , xp = 2n ** 40n - 1n
  , gp = 2n ** 48n - 1n
  , wp = 2n ** 56n - 1n
  , vp = 2n ** 64n - 1n
  , $p = 2n ** 72n - 1n
  , Ap = 2n ** 80n - 1n
  , Pp = 2n ** 88n - 1n
  , Tp = 2n ** 96n - 1n
  , Ip = 2n ** 104n - 1n
  , Mp = 2n ** 112n - 1n
  , Ep = 2n ** 120n - 1n
  , Bp = 2n ** 128n - 1n
  , zp = 2n ** 136n - 1n
  , jp = 2n ** 144n - 1n
  , Sp = 2n ** 152n - 1n
  , Rp = 2n ** 160n - 1n
  , Cp = 2n ** 168n - 1n
  , Op = 2n ** 176n - 1n
  , Fp = 2n ** 184n - 1n
  , Up = 2n ** 192n - 1n
  , Np = 2n ** 200n - 1n
  , Hp = 2n ** 208n - 1n
  , kp = 2n ** 216n - 1n
  , Dp = 2n ** 224n - 1n
  , Lp = 2n ** 232n - 1n
  , Gp = 2n ** 240n - 1n
  , Vp = 2n ** 248n - 1n
  , Or = 2n ** 256n - 1n;
function Fr(e) {
    let {account: t, gasPrice: n, maxFeePerGas: r, maxPriorityFeePerGas: o, to: s} = e
      , i = t ? ne(t) : void 0;
    if (i && !w(i.address))
        throw new I({
            address: i.address
        });
    if (s && !w(s))
        throw new I({
            address: s
        });
    if (typeof n < "u" && (typeof r < "u" || typeof o < "u"))
        throw new dt;
    if (r && r > Or)
        throw new J({
            maxFeePerGas: r
        });
    if (o && r && o > r)
        throw new _({
            maxFeePerGas: r,
            maxPriorityFeePerGas: o
        })
}
function Ur(e, t) {
    return M(this, null, function*() {
        let Pn = t
          , {account: n=e.account, authorizationList: r, batch: o=!!e.batch?.multicall, blockNumber: s, blockTag: i=e.experimental_blockTag ?? "latest", accessList: a, blobs: c, blockOverrides: p, code: f, data: d, factory: l, factoryData: m, gas: h, gasPrice: g, maxFeePerBlobGas: V, maxFeePerGas: ve, maxPriorityFeePerGas: $e, nonce: Fe, to: te, value: Dr, stateOverride: Lr} = Pn
          , Gr = H(Pn, ["account", "authorizationList", "batch", "blockNumber", "blockTag", "accessList", "blobs", "blockOverrides", "code", "data", "factory", "factoryData", "gas", "gasPrice", "maxFeePerBlobGas", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "value", "stateOverride"])
          , wn = n ? ne(n) : void 0;
        if (f && (l || m))
            throw new u("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
        if (f && te)
            throw new u("Cannot provide both `code` & `to` as parameters.");
        let vn = f && d
          , $n = l && m && te && d
          , An = vn || $n
          , Vr = vn ? So({
            code: f,
            data: d
        }) : $n ? Ro({
            data: d,
            factory: l,
            factoryData: m,
            to: te
        }) : d;
        try {
            Fr(t);
            let Ae = (typeof s == "bigint" ? y(s) : void 0) || i
              , Y = p ? Cn(p) : void 0
              , X = Cr(Lr)
              , Tn = e.chain?.formatters?.transactionRequest?.format
              , wt = (Tn || zr)(A(b({}, Br(Gr, {
                format: Tn
            })), {
                from: wn?.address,
                accessList: a,
                authorizationList: r,
                blobs: c,
                data: Vr,
                gas: h,
                gasPrice: g,
                maxFeePerBlobGas: V,
                maxFeePerGas: ve,
                maxPriorityFeePerGas: $e,
                nonce: Fe,
                to: An ? void 0 : te,
                value: Dr
            }));
            if (o && zo({
                request: wt
            }) && !X && !Y)
                try {
                    return yield jo(e, A(b({}, wt), {
                        blockNumber: s,
                        blockTag: i
                    }))
                } catch (W) {
                    if (!(W instanceof Te) && !(W instanceof Z))
                        throw W
                }
            let Wr = ( () => {
                let W = [wt, Ae];
                return X && Y ? [...W, X, Y] : X ? [...W, X] : Y ? [...W, {}, Y] : W
            }
            )()
              , In = yield e.request({
                method: "eth_call",
                params: Wr
            });
            return In === "0x" ? {
                data: void 0
            } : {
                data: In
            }
        } catch (gt) {
            let Ae = Co(gt)
              , {offchainLookup: Y, offchainLookupSignature: X} = yield import("./chunk-PMMH6MN6.js");
            if (e.ccipRead !== !1 && Ae?.slice(0, 10) === X && te)
                return {
                    data: yield Y(e, {
                        data: Ae,
                        to: te
                    })
                };
            throw An && Ae?.slice(0, 10) === "0x101bb98d" ? new mt({
                factory: l
            }) : Er(gt, A(b({}, t), {
                account: wn,
                chain: e.chain
            }))
        }
    })
}
function zo({request: e}) {
    let o = e
      , {data: t, to: n} = o
      , r = H(o, ["data", "to"]);
    return !(!t || t.startsWith(Fn) || !n || Object.values(r).filter(s => typeof s < "u").length > 0)
}
function jo(e, t) {
    return M(this, null, function*() {
        let {batchSize: n=1024, wait: r=0} = typeof e.batch?.multicall == "object" ? e.batch.multicall : {}
          , {blockNumber: o, blockTag: s=e.experimental_blockTag ?? "latest", data: i, multicallAddress: a, to: c} = t
          , p = a;
        if (!p) {
            if (!e.chain)
                throw new Te;
            p = Pr({
                blockNumber: o,
                chain: e.chain,
                contract: "multicall3"
            })
        }
        let d = (typeof o == "bigint" ? y(o) : void 0) || s
          , {schedule: l} = Sr({
            id: `${e.uid}.${d}`,
            wait: r,
            shouldSplitBatch(g) {
                return g.reduce( (ve, {data: $e}) => ve + ($e.length - 2), 0) > n * 2
            },
            fn: g => M(this, null, function*() {
                let V = g.map(Fe => ({
                    allowFailure: !0,
                    callData: Fe.data,
                    target: Fe.to
                }))
                  , ve = Ar({
                    abi: Pt,
                    args: [V],
                    functionName: "aggregate3"
                })
                  , $e = yield e.request({
                    method: "eth_call",
                    params: [{
                        data: ve,
                        to: p
                    }, d]
                });
                return wr({
                    abi: Pt,
                    args: [V],
                    functionName: "aggregate3",
                    data: $e || "0x"
                })
            })
        })
          , [{returnData: m, success: h}] = yield l({
            data: i,
            to: c
        });
        if (!h)
            throw new lt({
                data: m
            });
        return m === "0x" ? {
            data: void 0
        } : {
            data: m
        }
    })
}
function So(e) {
    let {code: t, data: n} = e;
    return Dt({
        abi: vt(["constructor(bytes, bytes)"]),
        bytecode: Un,
        args: [t, n]
    })
}
function Ro(e) {
    let {data: t, factory: n, factoryData: r, to: o} = e;
    return Dt({
        abi: vt(["constructor(address, bytes, address, bytes)"]),
        bytecode: Nn,
        args: [o, t, n, r]
    })
}
function Co(e) {
    if (!(e instanceof u))
        return;
    let t = e.walk();
    return typeof t?.data == "object" ? t.data?.data : t.data
}
var bt = class extends u {
    constructor({callbackSelector: t, cause: n, data: r, extraData: o, sender: s, urls: i}) {
        super(n.shortMessage || "An error occurred while fetching for an offchain result.", {
            cause: n,
            metaMessages: [...n.metaMessages || [], n.metaMessages?.length ? "" : [], "Offchain Gateway Call:", i && ["  Gateway URL(s):", ...i.map(a => `    ${ee(a)}`)], `  Sender: ${s}`, `  Data: ${r}`, `  Callback selector: ${t}`, `  Extra data: ${o}`].flat(),
            name: "OffchainLookupError"
        })
    }
}
  , ht = class extends u {
    constructor({result: t, url: n}) {
        super("Offchain gateway response is malformed. Response data must be a hex value.", {
            metaMessages: [`Gateway URL: ${ee(n)}`, `Response: ${U(t)}`],
            name: "OffchainLookupResponseMalformedError"
        })
    }
}
  , xt = class extends u {
    constructor({sender: t, to: n}) {
        super("Reverted sender address does not match target contract address (`to`).", {
            metaMessages: [`Contract address: ${n}`, `OffchainLookup sender address: ${t}`],
            name: "OffchainLookupSenderMismatchError"
        })
    }
}
;
function Nr(e, t) {
    if (!w(e, {
        strict: !1
    }))
        throw new I({
            address: e
        });
    if (!w(t, {
        strict: !1
    }))
        throw new I({
            address: t
        });
    return e.toLowerCase() === t.toLowerCase()
}
function Hr(e) {
    let {abi: t, data: n} = e
      , r = R(n, 0, 4)
      , o = t.find(s => s.type === "function" && r === C(P(s)));
    if (!o)
        throw new _e(r,{
            docsPath: "/docs/contract/decodeFunctionData"
        });
    return {
        functionName: o.name,
        args: "inputs"in o && o.inputs && o.inputs.length > 0 ? de(o.inputs, R(n, 4)) : void 0
    }
}
var yn = "/docs/contract/encodeErrorResult";
function bn(e) {
    let {abi: t, errorName: n, args: r} = e
      , o = t[0];
    if (n) {
        let c = N({
            abi: t,
            args: r,
            name: n
        });
        if (!c)
            throw new Me(n,{
                docsPath: yn
            });
        o = c
    }
    if (o.type !== "error")
        throw new Me(void 0,{
            docsPath: yn
        });
    let s = P(o)
      , i = C(s)
      , a = "0x";
    if (r && r.length > 0) {
        if (!o.inputs)
            throw new Je(o.name,{
                docsPath: yn
            });
        a = F(o.inputs, r)
    }
    return Q([i, a])
}
var hn = "/docs/contract/encodeFunctionResult";
function kr(e) {
    let {abi: t, functionName: n, result: r} = e
      , o = t[0];
    if (n) {
        let i = N({
            abi: t,
            name: n
        });
        if (!i)
            throw new S(n,{
                docsPath: hn
            });
        o = i
    }
    if (o.type !== "function")
        throw new S(void 0,{
            docsPath: hn
        });
    if (!o.outputs)
        throw new se(o.name,{
            docsPath: hn
        });
    let s = ( () => {
        if (o.outputs.length === 0)
            return [];
        if (o.outputs.length === 1)
            return [r];
        if (Array.isArray(r))
            return r;
        throw new ie(r)
    }
    )();
    return F(o.outputs, s)
}
var xn = "x-batch-gateway:true";
function gn(e) {
    return M(this, null, function*() {
        let {data: t, ccipRequest: n} = e
          , {args: [r]} = Hr({
            abi: Ne,
            data: t
        })
          , o = []
          , s = [];
        return yield Promise.all(r.map( (i, a) => M(this, null, function*() {
            try {
                s[a] = i.urls.includes(xn) ? yield gn({
                    data: i.data,
                    ccipRequest: n
                }) : yield n(i),
                o[a] = !1
            } catch (c) {
                o[a] = !0,
                s[a] = Oo(c)
            }
        }))),
        kr({
            abi: Ne,
            functionName: "query",
            result: [o, s]
        })
    })
}
function Oo(e) {
    return e.name === "HttpRequestError" && e.status ? bn({
        abi: Ne,
        errorName: "HttpError",
        args: [e.status, e.shortMessage]
    }) : bn({
        abi: [He],
        errorName: "Error",
        args: ["shortMessage"in e ? e.shortMessage : e.message]
    })
}
var uf = "0x556f1830"
  , Fo = {
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
function cf(s, i) {
    return M(this, arguments, function*(e, {blockNumber: t, blockTag: n, data: r, to: o}) {
        let {args: a} = it({
            data: r,
            abi: [Fo]
        })
          , [c,p,f,d,l] = a
          , {ccipRead: m} = e
          , h = m && typeof m?.request == "function" ? m.request : Uo;
        try {
            if (!Nr(o, c))
                throw new xt({
                    sender: c,
                    to: o
                });
            let g = p.includes(xn) ? yield gn({
                data: f,
                ccipRequest: h
            }) : yield h({
                data: f,
                sender: c,
                urls: p
            })
              , {data: V} = yield Ur(e, {
                blockNumber: t,
                blockTag: n,
                data: L([d, F([{
                    type: "bytes"
                }, {
                    type: "bytes"
                }], [g, l])]),
                to: o
            });
            return V
        } catch (g) {
            throw new bt({
                callbackSelector: d,
                cause: g,
                data: r,
                extraData: l,
                sender: c,
                urls: p
            })
        }
    })
}
function Uo(r) {
    return M(this, arguments, function*({data: e, sender: t, urls: n}) {
        let o = new Error("An unknown error occurred.");
        for (let s = 0; s < n.length; s++) {
            let i = n[s]
              , a = i.includes("{data}") ? "GET" : "POST"
              , c = a === "POST" ? {
                data: e,
                sender: t
            } : void 0
              , p = a === "POST" ? {
                "Content-Type": "application/json"
            } : {};
            try {
                let f = yield fetch(i.replace("{sender}", t.toLowerCase()).replace("{data}", e), {
                    body: JSON.stringify(c),
                    headers: p,
                    method: a
                }), d;
                if (f.headers.get("Content-Type")?.startsWith("application/json") ? d = (yield f.json()).data : d = yield f.text(),
                !f.ok) {
                    o = new Oe({
                        body: c,
                        details: d?.error ? U(d.error) : f.statusText,
                        headers: f.headers,
                        status: f.status,
                        url: i
                    });
                    continue
                }
                if (!B(d)) {
                    o = new ht({
                        result: d,
                        url: i
                    });
                    continue
                }
                return d
            } catch (f) {
                o = new Oe({
                    body: c,
                    details: f.message,
                    url: i
                })
            }
        }
        throw o
    })
}
export {u as a, B as b, x as c, K as d, et as e, ue as f, Et as g, Jn as h, Us as i, _n as j, z as k, y as l, zt as m, re as n, Vn as o, L as p, Q as q, I as r, ce as s, tt as t, je as u, Ti as v, w, Ui as x, rr as y, F as z, ne as A, Qn as B, kn as C, Dn as D, ar as E, Ba as F, at as G, E as H, G as I, we as J, ut as K, Ce as L, dr as M, fr as N, mr as O, lr as P, yr as Q, U as R, Oe as S, yt as T, Tr as U, Lt as V, Gt as W, Vt as X, Wt as Y, qt as Z, Jt as _, _t as $, Yt as aa, Xt as ba, Zt as ca, Kt as da, Qt as ea, en as fa, tn as ga, nn as ha, rn as ia, on as ja, sn as ka, an as la, un as ma, cn as na, pn as oa, dn as pa, fn as qa, mn as ra, Ir as sa, Mr as ta, Br as ua, zr as va, Fr as wa, Cr as xa, Pt as ya, wr as za, Ar as Aa, Pr as Ba, hr as Ca, xr as Da, gr as Ea, lt as Fa, jr as Ga, Sr as Ha, uf as Ia, Fo as Ja, cf as Ka, Uo as La, Ur as Ma};
