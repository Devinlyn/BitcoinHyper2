import {a as y, b as $} from "./chunk-QE6IBIJD.js";
function l(e, t) {
    return e.exec(t)?.groups
}
var F = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/
  , C = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/
  , w = /^\(.+?\).*?$/;
var L = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function D(e) {
    return L.test(e)
}
function N(e) {
    return l(L, e)
}
var J = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
function W(e) {
    return J.test(e)
}
function V(e) {
    return l(J, e)
}
var q = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
function G(e) {
    return q.test(e)
}
function H(e) {
    return l(q, e)
}
var Q = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
function S(e) {
    return Q.test(e)
}
function X(e) {
    return l(Q, e)
}
var Y = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
function ee(e) {
    return Y.test(e)
}
function te(e) {
    return l(Y, e)
}
var re = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
function ne(e) {
    return re.test(e)
}
function oe(e) {
    return l(re, e)
}
var de = /^receive\(\) external payable$/;
function ae(e) {
    return de.test(e)
}
var ie = new Set(["indexed"])
  , P = new Set(["calldata", "memory", "storage"]);
var se = "1.0.8";
var c = class e extends Error {
    constructor(t, r={}) {
        let o = r.cause instanceof e ? r.cause.details : r.cause?.message ? r.cause.message : r.details
          , n = r.cause instanceof e && r.cause.docsPath || r.docsPath
          , i = [t || "An error occurred.", "", ...r.metaMessages ? [...r.metaMessages, ""] : [], ...n ? [`Docs: https://abitype.dev${n}`] : [], ...o ? [`Details: ${o}`] : [], `Version: abitype@${se}`].join(`
`);
        super(i),
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
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "AbiTypeError"
        }),
        r.cause && (this.cause = r.cause),
        this.details = o,
        this.docsPath = n,
        this.metaMessages = r.metaMessages,
        this.shortMessage = t
    }
}
;
var A = class extends c {
    constructor({type: t}) {
        super("Unknown type.", {
            metaMessages: [`Type "${t}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownTypeError"
        })
    }
}
  , E = class extends c {
    constructor({type: t}) {
        super("Unknown type.", {
            metaMessages: [`Type "${t}" is not a valid ABI type.`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSolidityTypeError"
        })
    }
}
;
var M = class extends c {
    constructor({param: t}) {
        super("Invalid ABI parameter.", {
            details: t
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParameterError"
        })
    }
}
  , I = class extends c {
    constructor({param: t, name: r}) {
        super("Invalid ABI parameter.", {
            details: t,
            metaMessages: [`"${r}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "SolidityProtectedKeywordError"
        })
    }
}
  , k = class extends c {
    constructor({param: t, type: r, modifier: o}) {
        super("Invalid ABI parameter.", {
            details: t,
            metaMessages: [`Modifier "${o}" not allowed${r ? ` in "${r}" type` : ""}.`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidModifierError"
        })
    }
}
  , O = class extends c {
    constructor({param: t, type: r, modifier: o}) {
        super("Invalid ABI parameter.", {
            details: t,
            metaMessages: [`Modifier "${o}" not allowed${r ? ` in "${r}" type` : ""}.`, `Data location can only be specified for array, struct, or mapping types, but "${o}" was given.`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidFunctionModifierError"
        })
    }
}
  , R = class extends c {
    constructor({abiParameter: t}) {
        super("Invalid ABI parameter.", {
            details: JSON.stringify(t, null, 2),
            metaMessages: ["ABI parameter type is invalid."]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidAbiTypeParameterError"
        })
    }
}
;
var d = class extends c {
    constructor({signature: t, type: r}) {
        super(`Invalid ${r} signature.`, {
            details: t
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidSignatureError"
        })
    }
}
  , T = class extends c {
    constructor({signature: t}) {
        super("Unknown signature.", {
            details: t
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "UnknownSignatureError"
        })
    }
}
  , j = class extends c {
    constructor({signature: t}) {
        super("Invalid struct signature.", {
            details: t,
            metaMessages: ["No properties exist."]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidStructSignatureError"
        })
    }
}
;
var z = class extends c {
    constructor({type: t}) {
        super("Circular reference detected.", {
            metaMessages: [`Struct "${t}" is a circular reference.`]
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "CircularReferenceError"
        })
    }
}
;
var _ = class extends c {
    constructor({current: t, depth: r}) {
        super("Unbalanced parentheses.", {
            metaMessages: [`"${t.trim()}" has too many ${r > 0 ? "opening" : "closing"} parentheses.`],
            details: `Depth "${r}"`
        }),
        Object.defineProperty(this, "name", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "InvalidParenthesisError"
        })
    }
}
;
function ue(e, t, r) {
    let o = "";
    if (r)
        for (let n of Object.entries(r)) {
            if (!n)
                continue;
            let i = "";
            for (let a of n[1])
                i += `[${a.type}${a.name ? `:${a.name}` : ""}]`;
            o += `(${n[0]}{${i}})`
        }
    return t ? `${t}:${e}${o}` : e
}
var B = new Map([["address", {
    type: "address"
}], ["bool", {
    type: "bool"
}], ["bytes", {
    type: "bytes"
}], ["bytes32", {
    type: "bytes32"
}], ["int", {
    type: "int256"
}], ["int256", {
    type: "int256"
}], ["string", {
    type: "string"
}], ["uint", {
    type: "uint256"
}], ["uint8", {
    type: "uint8"
}], ["uint16", {
    type: "uint16"
}], ["uint24", {
    type: "uint24"
}], ["uint32", {
    type: "uint32"
}], ["uint64", {
    type: "uint64"
}], ["uint96", {
    type: "uint96"
}], ["uint112", {
    type: "uint112"
}], ["uint160", {
    type: "uint160"
}], ["uint192", {
    type: "uint192"
}], ["uint256", {
    type: "uint256"
}], ["address owner", {
    type: "address",
    name: "owner"
}], ["address to", {
    type: "address",
    name: "to"
}], ["bool approved", {
    type: "bool",
    name: "approved"
}], ["bytes _data", {
    type: "bytes",
    name: "_data"
}], ["bytes data", {
    type: "bytes",
    name: "data"
}], ["bytes signature", {
    type: "bytes",
    name: "signature"
}], ["bytes32 hash", {
    type: "bytes32",
    name: "hash"
}], ["bytes32 r", {
    type: "bytes32",
    name: "r"
}], ["bytes32 root", {
    type: "bytes32",
    name: "root"
}], ["bytes32 s", {
    type: "bytes32",
    name: "s"
}], ["string name", {
    type: "string",
    name: "name"
}], ["string symbol", {
    type: "string",
    name: "symbol"
}], ["string tokenURI", {
    type: "string",
    name: "tokenURI"
}], ["uint tokenId", {
    type: "uint256",
    name: "tokenId"
}], ["uint8 v", {
    type: "uint8",
    name: "v"
}], ["uint256 balance", {
    type: "uint256",
    name: "balance"
}], ["uint256 tokenId", {
    type: "uint256",
    name: "tokenId"
}], ["uint256 value", {
    type: "uint256",
    name: "value"
}], ["event:address indexed from", {
    type: "address",
    name: "from",
    indexed: !0
}], ["event:address indexed to", {
    type: "address",
    name: "to",
    indexed: !0
}], ["event:uint indexed tokenId", {
    type: "uint256",
    name: "tokenId",
    indexed: !0
}], ["event:uint256 indexed tokenId", {
    type: "uint256",
    name: "tokenId",
    indexed: !0
}]]);
function ce(e, t={}) {
    if (G(e))
        return ye(e, t);
    if (W(e))
        return be(e, t);
    if (D(e))
        return xe(e, t);
    if (ee(e))
        return ge(e, t);
    if (ne(e))
        return he(e);
    if (ae(e))
        return {
            type: "receive",
            stateMutability: "payable"
        };
    throw new T({
        signature: e
    })
}
function ye(e, t={}) {
    let r = H(e);
    if (!r)
        throw new d({
            signature: e,
            type: "function"
        });
    let o = f(r.parameters)
      , n = []
      , i = o.length;
    for (let s = 0; s < i; s++)
        n.push(b(o[s], {
            modifiers: P,
            structs: t,
            type: "function"
        }));
    let a = [];
    if (r.returns) {
        let s = f(r.returns)
          , u = s.length;
        for (let m = 0; m < u; m++)
            a.push(b(s[m], {
                modifiers: P,
                structs: t,
                type: "function"
            }))
    }
    return {
        name: r.name,
        type: "function",
        stateMutability: r.stateMutability ?? "nonpayable",
        inputs: n,
        outputs: a
    }
}
function be(e, t={}) {
    let r = V(e);
    if (!r)
        throw new d({
            signature: e,
            type: "event"
        });
    let o = f(r.parameters)
      , n = []
      , i = o.length;
    for (let a = 0; a < i; a++)
        n.push(b(o[a], {
            modifiers: ie,
            structs: t,
            type: "event"
        }));
    return {
        name: r.name,
        type: "event",
        inputs: n
    }
}
function xe(e, t={}) {
    let r = N(e);
    if (!r)
        throw new d({
            signature: e,
            type: "error"
        });
    let o = f(r.parameters)
      , n = []
      , i = o.length;
    for (let a = 0; a < i; a++)
        n.push(b(o[a], {
            structs: t,
            type: "error"
        }));
    return {
        name: r.name,
        type: "error",
        inputs: n
    }
}
function ge(e, t={}) {
    let r = te(e);
    if (!r)
        throw new d({
            signature: e,
            type: "constructor"
        });
    let o = f(r.parameters)
      , n = []
      , i = o.length;
    for (let a = 0; a < i; a++)
        n.push(b(o[a], {
            structs: t,
            type: "constructor"
        }));
    return {
        type: "constructor",
        stateMutability: r.stateMutability ?? "nonpayable",
        inputs: n
    }
}
function he(e) {
    let t = oe(e);
    if (!t)
        throw new d({
            signature: e,
            type: "fallback"
        });
    return {
        type: "fallback",
        stateMutability: t.stateMutability ?? "nonpayable"
    }
}
var ve = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/
  , $e = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/
  , we = /^u?int$/;
function b(e, t) {
    let r = ue(e, t?.type, t?.structs);
    if (B.has(r))
        return B.get(r);
    let o = w.test(e)
      , n = l(o ? $e : ve, e);
    if (!n)
        throw new M({
            param: e
        });
    if (n.name && Pe(n.name))
        throw new I({
            param: e,
            name: n.name
        });
    let i = n.name ? {
        name: n.name
    } : {}, a = n.modifier === "indexed" ? {
        indexed: !0
    } : {}, s = t?.structs ?? {}, u, m = {};
    if (o) {
        u = "tuple";
        let v = f(n.type)
          , x = []
          , K = v.length;
        for (let g = 0; g < K; g++)
            x.push(b(v[g], {
                structs: s
            }));
        m = {
            components: x
        }
    } else if (n.type in s)
        u = "tuple",
        m = {
            components: s[n.type]
        };
    else if (we.test(n.type))
        u = `${n.type}256`;
    else if (u = n.type,
    t?.type !== "struct" && !U(u))
        throw new E({
            type: u
        });
    if (n.modifier) {
        if (!t?.modifiers?.has?.(n.modifier))
            throw new k({
                param: e,
                type: t?.type,
                modifier: n.modifier
            });
        if (P.has(n.modifier) && !Ae(u, !!n.array))
            throw new O({
                param: e,
                type: t?.type,
                modifier: n.modifier
            })
    }
    let p = y(y(y({
        type: `${u}${n.array ?? ""}`
    }, i), a), m);
    return B.set(r, p),
    p
}
function f(e, t=[], r="", o=0) {
    let n = e.trim().length;
    for (let i = 0; i < n; i++) {
        let a = e[i]
          , s = e.slice(i + 1);
        switch (a) {
        case ",":
            return o === 0 ? f(s, [...t, r.trim()]) : f(s, t, `${r}${a}`, o);
        case "(":
            return f(s, t, `${r}${a}`, o + 1);
        case ")":
            return f(s, t, `${r}${a}`, o - 1);
        default:
            return f(s, t, `${r}${a}`, o)
        }
    }
    if (r === "")
        return t;
    if (o !== 0)
        throw new _({
            current: r,
            depth: o
        });
    return t.push(r.trim()),
    t
}
function U(e) {
    return e === "address" || e === "bool" || e === "function" || e === "string" || F.test(e) || C.test(e)
}
var Se = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
function Pe(e) {
    return e === "address" || e === "bool" || e === "function" || e === "string" || e === "tuple" || F.test(e) || C.test(e) || Se.test(e)
}
function Ae(e, t) {
    return t || e === "bytes" || e === "string" || e === "tuple"
}
function pe(e) {
    let t = {}
      , r = e.length;
    for (let a = 0; a < r; a++) {
        let s = e[a];
        if (!S(s))
            continue;
        let u = X(s);
        if (!u)
            throw new d({
                signature: s,
                type: "struct"
            });
        let m = u.properties.split(";")
          , p = []
          , v = m.length;
        for (let x = 0; x < v; x++) {
            let g = m[x].trim();
            if (!g)
                continue;
            let fe = b(g, {
                type: "struct"
            });
            p.push(fe)
        }
        if (!p.length)
            throw new j({
                signature: s
            });
        t[u.name] = p
    }
    let o = {}
      , n = Object.entries(t)
      , i = n.length;
    for (let a = 0; a < i; a++) {
        let[s,u] = n[a];
        o[s] = le(u, t)
    }
    return o
}
var Ee = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
function le(e, t, r=new Set) {
    let o = []
      , n = e.length;
    for (let i = 0; i < n; i++) {
        let a = e[i];
        if (w.test(a.type))
            o.push(a);
        else {
            let u = l(Ee, a.type);
            if (!u?.type)
                throw new R({
                    abiParameter: a
                });
            let {array: m, type: p} = u;
            if (p in t) {
                if (r.has(p))
                    throw new z({
                        type: p
                    });
                o.push($(y({}, a), {
                    type: `tuple${m ?? ""}`,
                    components: le(t[p] ?? [], t, new Set([...r, p]))
                }))
            } else if (U(p))
                o.push(a);
            else
                throw new A({
                    type: p
                })
        }
    }
    return o
}
function Me(e) {
    let t = pe(e)
      , r = []
      , o = e.length;
    for (let n = 0; n < o; n++) {
        let i = e[n];
        S(i) || r.push(ce(i, t))
    }
    return r
}
var me = /^tuple(?<array>(\[(\d*)\])*)$/;
function Z(e) {
    let t = e.type;
    if (me.test(e.type) && "components"in e) {
        t = "(";
        let r = e.components.length;
        for (let n = 0; n < r; n++) {
            let i = e.components[n];
            t += Z(i),
            n < r - 1 && (t += ", ")
        }
        let o = l(me, e.type);
        return t += `)${o?.array ?? ""}`,
        Z($(y({}, e), {
            type: t
        }))
    }
    return "indexed"in e && e.indexed && (t = `${t} indexed`),
    e.name ? `${t} ${e.name}` : t
}
function h(e) {
    let t = ""
      , r = e.length;
    for (let o = 0; o < r; o++) {
        let n = e[o];
        t += Z(n),
        o !== r - 1 && (t += ", ")
    }
    return t
}
function Ie(e) {
    return e.type === "function" ? `function ${e.name}(${h(e.inputs)})${e.stateMutability && e.stateMutability !== "nonpayable" ? ` ${e.stateMutability}` : ""}${e.outputs?.length ? ` returns (${h(e.outputs)})` : ""}` : e.type === "event" ? `event ${e.name}(${h(e.inputs)})` : e.type === "error" ? `error ${e.name}(${h(e.inputs)})` : e.type === "constructor" ? `constructor(${h(e.inputs)})${e.stateMutability === "payable" ? " payable" : ""}` : e.type === "fallback" ? `fallback() external${e.stateMutability === "payable" ? " payable" : ""}` : "receive() external payable"
}
export {Ie as a, Me as b};
