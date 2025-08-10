import {a as U0} from "./chunk-RJEPFQGU.js";
import {a as xe, b as it, c as Uc, d as Hc, f as Fc, g as K0, i as us, l as we, m as zc} from "./chunk-QE6IBIJD.js";
var Vc = Fc( (rn, qc) => {
    "use strict";
    var wi = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof global < "u" && global
      , Ei = function() {
        function e() {
            this.fetch = !1,
            this.DOMException = wi.DOMException
        }
        return e.prototype = wi,
        new e
    }();
    (function(e) {
        var t = function(n) {
            var r = typeof e < "u" && e || typeof self < "u" && self || typeof global < "u" && global || {}
              , i = {
                searchParams: "URLSearchParams"in r,
                iterable: "Symbol"in r && "iterator"in Symbol,
                blob: "FileReader"in r && "Blob"in r && function() {
                    try {
                        return new Blob,
                        !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData"in r,
                arrayBuffer: "ArrayBuffer"in r
            };
            function o(P) {
                return P && DataView.prototype.isPrototypeOf(P)
            }
            if (i.arrayBuffer)
                var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , a = ArrayBuffer.isView || function(P) {
                    return P && s.indexOf(Object.prototype.toString.call(P)) > -1
                }
                ;
            function c(P) {
                if (typeof P != "string" && (P = String(P)),
                /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(P) || P === "")
                    throw new TypeError('Invalid character in header field name: "' + P + '"');
                return P.toLowerCase()
            }
            function l(P) {
                return typeof P != "string" && (P = String(P)),
                P
            }
            function u(P) {
                var L = {
                    next: function() {
                        var M = P.shift();
                        return {
                            done: M === void 0,
                            value: M
                        }
                    }
                };
                return i.iterable && (L[Symbol.iterator] = function() {
                    return L
                }
                ),
                L
            }
            function d(P) {
                this.map = {},
                P instanceof d ? P.forEach(function(L, M) {
                    this.append(M, L)
                }, this) : Array.isArray(P) ? P.forEach(function(L) {
                    if (L.length != 2)
                        throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + L.length);
                    this.append(L[0], L[1])
                }, this) : P && Object.getOwnPropertyNames(P).forEach(function(L) {
                    this.append(L, P[L])
                }, this)
            }
            d.prototype.append = function(P, L) {
                P = c(P),
                L = l(L);
                var M = this.map[P];
                this.map[P] = M ? M + ", " + L : L
            }
            ,
            d.prototype.delete = function(P) {
                delete this.map[c(P)]
            }
            ,
            d.prototype.get = function(P) {
                return P = c(P),
                this.has(P) ? this.map[P] : null
            }
            ,
            d.prototype.has = function(P) {
                return this.map.hasOwnProperty(c(P))
            }
            ,
            d.prototype.set = function(P, L) {
                this.map[c(P)] = l(L)
            }
            ,
            d.prototype.forEach = function(P, L) {
                for (var M in this.map)
                    this.map.hasOwnProperty(M) && P.call(L, this.map[M], M, this)
            }
            ,
            d.prototype.keys = function() {
                var P = [];
                return this.forEach(function(L, M) {
                    P.push(M)
                }),
                u(P)
            }
            ,
            d.prototype.values = function() {
                var P = [];
                return this.forEach(function(L) {
                    P.push(L)
                }),
                u(P)
            }
            ,
            d.prototype.entries = function() {
                var P = [];
                return this.forEach(function(L, M) {
                    P.push([M, L])
                }),
                u(P)
            }
            ,
            i.iterable && (d.prototype[Symbol.iterator] = d.prototype.entries);
            function h(P) {
                if (!P._noBody) {
                    if (P.bodyUsed)
                        return Promise.reject(new TypeError("Already read"));
                    P.bodyUsed = !0
                }
            }
            function f(P) {
                return new Promise(function(L, M) {
                    P.onload = function() {
                        L(P.result)
                    }
                    ,
                    P.onerror = function() {
                        M(P.error)
                    }
                }
                )
            }
            function g(P) {
                var L = new FileReader
                  , M = f(L);
                return L.readAsArrayBuffer(P),
                M
            }
            function m(P) {
                var L = new FileReader
                  , M = f(L)
                  , T = /charset=([A-Za-z0-9_-]+)/.exec(P.type)
                  , D = T ? T[1] : "utf-8";
                return L.readAsText(P, D),
                M
            }
            function v(P) {
                for (var L = new Uint8Array(P), M = new Array(L.length), T = 0; T < L.length; T++)
                    M[T] = String.fromCharCode(L[T]);
                return M.join("")
            }
            function p(P) {
                if (P.slice)
                    return P.slice(0);
                var L = new Uint8Array(P.byteLength);
                return L.set(new Uint8Array(P)),
                L.buffer
            }
            function S() {
                return this.bodyUsed = !1,
                this._initBody = function(P) {
                    this.bodyUsed = this.bodyUsed,
                    this._bodyInit = P,
                    P ? typeof P == "string" ? this._bodyText = P : i.blob && Blob.prototype.isPrototypeOf(P) ? this._bodyBlob = P : i.formData && FormData.prototype.isPrototypeOf(P) ? this._bodyFormData = P : i.searchParams && URLSearchParams.prototype.isPrototypeOf(P) ? this._bodyText = P.toString() : i.arrayBuffer && i.blob && o(P) ? (this._bodyArrayBuffer = p(P.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : i.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(P) || a(P)) ? this._bodyArrayBuffer = p(P) : this._bodyText = P = Object.prototype.toString.call(P) : (this._noBody = !0,
                    this._bodyText = ""),
                    this.headers.get("content-type") || (typeof P == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i.searchParams && URLSearchParams.prototype.isPrototypeOf(P) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                i.blob && (this.blob = function() {
                    var P = h(this);
                    if (P)
                        return P;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ),
                this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        var P = h(this);
                        return P || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                    } else {
                        if (i.blob)
                            return this.blob().then(g);
                        throw new Error("could not read as ArrayBuffer")
                    }
                }
                ,
                this.text = function() {
                    var P = h(this);
                    if (P)
                        return P;
                    if (this._bodyBlob)
                        return m(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(v(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                i.formData && (this.formData = function() {
                    return this.text().then(F)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            var E = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
            function N(P) {
                var L = P.toUpperCase();
                return E.indexOf(L) > -1 ? L : P
            }
            function I(P, L) {
                if (!(this instanceof I))
                    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                L = L || {};
                var M = L.body;
                if (P instanceof I) {
                    if (P.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = P.url,
                    this.credentials = P.credentials,
                    L.headers || (this.headers = new d(P.headers)),
                    this.method = P.method,
                    this.mode = P.mode,
                    this.signal = P.signal,
                    !M && P._bodyInit != null && (M = P._bodyInit,
                    P.bodyUsed = !0)
                } else
                    this.url = String(P);
                if (this.credentials = L.credentials || this.credentials || "same-origin",
                (L.headers || !this.headers) && (this.headers = new d(L.headers)),
                this.method = N(L.method || this.method || "GET"),
                this.mode = L.mode || this.mode || null,
                this.signal = L.signal || this.signal || function() {
                    if ("AbortController"in r) {
                        var j = new AbortController;
                        return j.signal
                    }
                }(),
                this.referrer = null,
                (this.method === "GET" || this.method === "HEAD") && M)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                if (this._initBody(M),
                (this.method === "GET" || this.method === "HEAD") && (L.cache === "no-store" || L.cache === "no-cache")) {
                    var T = /([?&])_=[^&]*/;
                    if (T.test(this.url))
                        this.url = this.url.replace(T, "$1_=" + new Date().getTime());
                    else {
                        var D = /\?/;
                        this.url += (D.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                    }
                }
            }
            I.prototype.clone = function() {
                return new I(this,{
                    body: this._bodyInit
                })
            }
            ;
            function F(P) {
                var L = new FormData;
                return P.trim().split("&").forEach(function(M) {
                    if (M) {
                        var T = M.split("=")
                          , D = T.shift().replace(/\+/g, " ")
                          , j = T.join("=").replace(/\+/g, " ");
                        L.append(decodeURIComponent(D), decodeURIComponent(j))
                    }
                }),
                L
            }
            function q(P) {
                var L = new d
                  , M = P.replace(/\r?\n[\t ]+/g, " ");
                return M.split("\r").map(function(T) {
                    return T.indexOf(`
`) === 0 ? T.substr(1, T.length) : T
                }).forEach(function(T) {
                    var D = T.split(":")
                      , j = D.shift().trim();
                    if (j) {
                        var b = D.join(":").trim();
                        try {
                            L.append(j, b)
                        } catch (_) {
                            console.warn("Response " + _.message)
                        }
                    }
                }),
                L
            }
            S.call(I.prototype);
            function z(P, L) {
                if (!(this instanceof z))
                    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                if (L || (L = {}),
                this.type = "default",
                this.status = L.status === void 0 ? 200 : L.status,
                this.status < 200 || this.status > 599)
                    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = L.statusText === void 0 ? "" : "" + L.statusText,
                this.headers = new d(L.headers),
                this.url = L.url || "",
                this._initBody(P)
            }
            S.call(z.prototype),
            z.prototype.clone = function() {
                return new z(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new d(this.headers),
                    url: this.url
                })
            }
            ,
            z.error = function() {
                var P = new z(null,{
                    status: 200,
                    statusText: ""
                });
                return P.ok = !1,
                P.status = 0,
                P.type = "error",
                P
            }
            ;
            var G = [301, 302, 303, 307, 308];
            z.redirect = function(P, L) {
                if (G.indexOf(L) === -1)
                    throw new RangeError("Invalid status code");
                return new z(null,{
                    status: L,
                    headers: {
                        location: P
                    }
                })
            }
            ,
            n.DOMException = r.DOMException;
            try {
                new n.DOMException
            } catch {
                n.DOMException = function(L, M) {
                    this.message = L,
                    this.name = M;
                    var T = Error(L);
                    this.stack = T.stack
                }
                ,
                n.DOMException.prototype = Object.create(Error.prototype),
                n.DOMException.prototype.constructor = n.DOMException
            }
            function U(P, L) {
                return new Promise(function(M, T) {
                    var D = new I(P,L);
                    if (D.signal && D.signal.aborted)
                        return T(new n.DOMException("Aborted","AbortError"));
                    var j = new XMLHttpRequest;
                    function b() {
                        j.abort()
                    }
                    j.onload = function() {
                        var A = {
                            statusText: j.statusText,
                            headers: q(j.getAllResponseHeaders() || "")
                        };
                        D.url.indexOf("file://") === 0 && (j.status < 200 || j.status > 599) ? A.status = 200 : A.status = j.status,
                        A.url = "responseURL"in j ? j.responseURL : A.headers.get("X-Request-URL");
                        var R = "response"in j ? j.response : j.responseText;
                        setTimeout(function() {
                            M(new z(R,A))
                        }, 0)
                    }
                    ,
                    j.onerror = function() {
                        setTimeout(function() {
                            T(new TypeError("Network request failed"))
                        }, 0)
                    }
                    ,
                    j.ontimeout = function() {
                        setTimeout(function() {
                            T(new TypeError("Network request timed out"))
                        }, 0)
                    }
                    ,
                    j.onabort = function() {
                        setTimeout(function() {
                            T(new n.DOMException("Aborted","AbortError"))
                        }, 0)
                    }
                    ;
                    function _(A) {
                        try {
                            return A === "" && r.location.href ? r.location.href : A
                        } catch {
                            return A
                        }
                    }
                    if (j.open(D.method, _(D.url), !0),
                    D.credentials === "include" ? j.withCredentials = !0 : D.credentials === "omit" && (j.withCredentials = !1),
                    "responseType"in j && (i.blob ? j.responseType = "blob" : i.arrayBuffer && (j.responseType = "arraybuffer")),
                    L && typeof L.headers == "object" && !(L.headers instanceof d || r.Headers && L.headers instanceof r.Headers)) {
                        var C = [];
                        Object.getOwnPropertyNames(L.headers).forEach(function(A) {
                            C.push(c(A)),
                            j.setRequestHeader(A, l(L.headers[A]))
                        }),
                        D.headers.forEach(function(A, R) {
                            C.indexOf(R) === -1 && j.setRequestHeader(R, A)
                        })
                    } else
                        D.headers.forEach(function(A, R) {
                            j.setRequestHeader(R, A)
                        });
                    D.signal && (D.signal.addEventListener("abort", b),
                    j.onreadystatechange = function() {
                        j.readyState === 4 && D.signal.removeEventListener("abort", b)
                    }
                    ),
                    j.send(typeof D._bodyInit > "u" ? null : D._bodyInit)
                }
                )
            }
            return U.polyfill = !0,
            r.fetch || (r.fetch = U,
            r.Headers = d,
            r.Request = I,
            r.Response = z),
            n.Headers = d,
            n.Request = I,
            n.Response = z,
            n.fetch = U,
            n
        }({})
    }
    )(Ei);
    Ei.fetch.ponyfill = !0;
    delete Ei.fetch.polyfill;
    var Wn = wi.fetch ? wi : Ei;
    rn = Wn.fetch;
    rn.default = Wn.fetch;
    rn.fetch = Wn.fetch;
    rn.Headers = Wn.Headers;
    rn.Request = Wn.Request;
    rn.Response = Wn.Response;
    qc.exports = rn
}
);
var Yc = Fc( (Wc, Gc) => {
    "use strict";
    (function(e) {
        var t = Object.hasOwnProperty
          , n = Array.isArray ? Array.isArray : function(_) {
            return Object.prototype.toString.call(_) === "[object Array]"
        }
          , r = 10
          , i = typeof process == "object" && typeof process.nextTick == "function"
          , o = typeof Symbol == "function"
          , s = typeof Reflect == "object"
          , a = typeof setImmediate == "function"
          , c = a ? setImmediate : setTimeout
          , l = o ? s && typeof Reflect.ownKeys == "function" ? Reflect.ownKeys : function(b) {
            var _ = Object.getOwnPropertyNames(b);
            return _.push.apply(_, Object.getOwnPropertySymbols(b)),
            _
        }
        : Object.keys;
        function u() {
            this._events = {},
            this._conf && d.call(this, this._conf)
        }
        function d(b) {
            b && (this._conf = b,
            b.delimiter && (this.delimiter = b.delimiter),
            b.maxListeners !== e && (this._maxListeners = b.maxListeners),
            b.wildcard && (this.wildcard = b.wildcard),
            b.newListener && (this._newListener = b.newListener),
            b.removeListener && (this._removeListener = b.removeListener),
            b.verboseMemoryLeak && (this.verboseMemoryLeak = b.verboseMemoryLeak),
            b.ignoreErrors && (this.ignoreErrors = b.ignoreErrors),
            this.wildcard && (this.listenerTree = {}))
        }
        function h(b, _) {
            var C = "(node) warning: possible EventEmitter memory leak detected. " + b + " listeners added. Use emitter.setMaxListeners() to increase limit.";
            if (this.verboseMemoryLeak && (C += " Event name: " + _ + "."),
            typeof process < "u" && process.emitWarning) {
                var A = new Error(C);
                A.name = "MaxListenersExceededWarning",
                A.emitter = this,
                A.count = b,
                process.emitWarning(A)
            } else
                console.error(C),
                console.trace && console.trace()
        }
        var f = function(b, _, C) {
            var A = arguments.length;
            switch (A) {
            case 0:
                return [];
            case 1:
                return [b];
            case 2:
                return [b, _];
            case 3:
                return [b, _, C];
            default:
                for (var R = new Array(A); A--; )
                    R[A] = arguments[A];
                return R
            }
        };
        function g(b, _) {
            for (var C = {}, A, R = b.length, w = _ ? _.length : 0, y = 0; y < R; y++)
                A = b[y],
                C[A] = y < w ? _[y] : e;
            return C
        }
        function m(b, _, C) {
            this._emitter = b,
            this._target = _,
            this._listeners = {},
            this._listenersCount = 0;
            var A, R;
            if ((C.on || C.off) && (A = C.on,
            R = C.off),
            _.addEventListener ? (A = _.addEventListener,
            R = _.removeEventListener) : _.addListener ? (A = _.addListener,
            R = _.removeListener) : _.on && (A = _.on,
            R = _.off),
            !A && !R)
                throw Error("target does not implement any known event API");
            if (typeof A != "function")
                throw TypeError("on method must be a function");
            if (typeof R != "function")
                throw TypeError("off method must be a function");
            this._on = A,
            this._off = R;
            var w = b._observers;
            w ? w.push(this) : b._observers = [this]
        }
        Object.assign(m.prototype, {
            subscribe: function(b, _, C) {
                var A = this
                  , R = this._target
                  , w = this._emitter
                  , y = this._listeners
                  , x = function() {
                    var k = f.apply(null, arguments)
                      , O = {
                        data: k,
                        name: _,
                        original: b
                    };
                    if (C) {
                        var $ = C.call(R, O);
                        $ !== !1 && w.emit.apply(w, [O.name].concat(k));
                        return
                    }
                    w.emit.apply(w, [_].concat(k))
                };
                if (y[b])
                    throw Error("Event '" + b + "' is already listening");
                this._listenersCount++,
                w._newListener && w._removeListener && !A._onNewListener ? (this._onNewListener = function(k) {
                    k === _ && y[b] === null && (y[b] = x,
                    A._on.call(R, b, x))
                }
                ,
                w.on("newListener", this._onNewListener),
                this._onRemoveListener = function(k) {
                    k === _ && !w.hasListeners(k) && y[b] && (y[b] = null,
                    A._off.call(R, b, x))
                }
                ,
                y[b] = null,
                w.on("removeListener", this._onRemoveListener)) : (y[b] = x,
                A._on.call(R, b, x))
            },
            unsubscribe: function(b) {
                var _ = this, C = this._listeners, A = this._emitter, R, w, y = this._off, x = this._target, k;
                if (b && typeof b != "string")
                    throw TypeError("event must be a string");
                function O() {
                    _._onNewListener && (A.off("newListener", _._onNewListener),
                    A.off("removeListener", _._onRemoveListener),
                    _._onNewListener = null,
                    _._onRemoveListener = null);
                    var $ = F.call(A, _);
                    A._observers.splice($, 1)
                }
                if (b) {
                    if (R = C[b],
                    !R)
                        return;
                    y.call(x, b, R),
                    delete C[b],
                    --this._listenersCount || O()
                } else {
                    for (w = l(C),
                    k = w.length; k-- > 0; )
                        b = w[k],
                        y.call(x, b, C[b]);
                    this._listeners = {},
                    this._listenersCount = 0,
                    O()
                }
            }
        });
        function v(b, _, C, A) {
            var R = Object.assign({}, _);
            if (!b)
                return R;
            if (typeof b != "object")
                throw TypeError("options must be an object");
            var w = Object.keys(b), y = w.length, x, k, O;
            function $(H) {
                throw Error('Invalid "' + x + '" option value' + (H ? ". Reason: " + H : ""))
            }
            for (var K = 0; K < y; K++) {
                if (x = w[K],
                !A && !t.call(_, x))
                    throw Error('Unknown "' + x + '" option');
                k = b[x],
                k !== e && (O = C[x],
                R[x] = O ? O(k, $) : k)
            }
            return R
        }
        function p(b, _) {
            return (typeof b != "function" || !b.hasOwnProperty("prototype")) && _("value must be a constructor"),
            b
        }
        function S(b) {
            var _ = "value must be type of " + b.join("|")
              , C = b.length
              , A = b[0]
              , R = b[1];
            return C === 1 ? function(w, y) {
                if (typeof w === A)
                    return w;
                y(_)
            }
            : C === 2 ? function(w, y) {
                var x = typeof w;
                if (x === A || x === R)
                    return w;
                y(_)
            }
            : function(w, y) {
                for (var x = typeof w, k = C; k-- > 0; )
                    if (x === b[k])
                        return w;
                y(_)
            }
        }
        var E = S(["function"])
          , N = S(["object", "function"]);
        function I(b, _, C) {
            var A, R, w = 0, y, x = new b(function(k, O, $) {
                C = v(C, {
                    timeout: 0,
                    overload: !1
                }, {
                    timeout: function(X, ee) {
                        return X *= 1,
                        (typeof X != "number" || X < 0 || !Number.isFinite(X)) && ee("timeout must be a positive number"),
                        X
                    }
                }),
                A = !C.overload && typeof b.prototype.cancel == "function" && typeof $ == "function";
                function K() {
                    R && (R = null),
                    w && (clearTimeout(w),
                    w = 0)
                }
                var H = function(X) {
                    K(),
                    k(X)
                }
                  , V = function(X) {
                    K(),
                    O(X)
                };
                A ? _(H, V, $) : (R = [function(X) {
                    V(X || Error("canceled"))
                }
                ],
                _(H, V, function(X) {
                    if (y)
                        throw Error("Unable to subscribe on cancel event asynchronously");
                    if (typeof X != "function")
                        throw TypeError("onCancel callback must be a function");
                    R.push(X)
                }),
                y = !0),
                C.timeout > 0 && (w = setTimeout(function() {
                    var X = Error("timeout");
                    X.code = "ETIMEDOUT",
                    w = 0,
                    x.cancel(X),
                    O(X)
                }, C.timeout))
            }
            );
            return A || (x.cancel = function(k) {
                if (R) {
                    for (var O = R.length, $ = 1; $ < O; $++)
                        R[$](k);
                    R[0](k),
                    R = null
                }
            }
            ),
            x
        }
        function F(b) {
            var _ = this._observers;
            if (!_)
                return -1;
            for (var C = _.length, A = 0; A < C; A++)
                if (_[A]._target === b)
                    return A;
            return -1
        }
        function q(b, _, C, A, R) {
            if (!C)
                return null;
            if (A === 0) {
                var w = typeof _;
                if (w === "string") {
                    var y, x, k = 0, O = 0, $ = this.delimiter, K = $.length;
                    if ((x = _.indexOf($)) !== -1) {
                        y = new Array(5);
                        do
                            y[k++] = _.slice(O, x),
                            O = x + K;
                        while ((x = _.indexOf($, O)) !== -1);
                        y[k++] = _.slice(O),
                        _ = y,
                        R = k
                    } else
                        _ = [_],
                        R = 1
                } else
                    w === "object" ? R = _.length : (_ = [_],
                    R = 1)
            }
            var H = null, V, X, ee, re, se, ce = _[A], ie = _[A + 1], ne, ae;
            if (A === R)
                C._listeners && (typeof C._listeners == "function" ? (b && b.push(C._listeners),
                H = [C]) : (b && b.push.apply(b, C._listeners),
                H = [C]));
            else if (ce === "*") {
                for (ne = l(C),
                x = ne.length; x-- > 0; )
                    V = ne[x],
                    V !== "_listeners" && (ae = q(b, _, C[V], A + 1, R),
                    ae && (H ? H.push.apply(H, ae) : H = ae));
                return H
            } else if (ce === "**") {
                for (se = A + 1 === R || A + 2 === R && ie === "*",
                se && C._listeners && (H = q(b, _, C, R, R)),
                ne = l(C),
                x = ne.length; x-- > 0; )
                    V = ne[x],
                    V !== "_listeners" && (V === "*" || V === "**" ? (C[V]._listeners && !se && (ae = q(b, _, C[V], R, R),
                    ae && (H ? H.push.apply(H, ae) : H = ae)),
                    ae = q(b, _, C[V], A, R)) : V === ie ? ae = q(b, _, C[V], A + 2, R) : ae = q(b, _, C[V], A, R),
                    ae && (H ? H.push.apply(H, ae) : H = ae));
                return H
            } else
                C[ce] && (H = q(b, _, C[ce], A + 1, R));
            if (X = C["*"],
            X && q(b, _, X, A + 1, R),
            ee = C["**"],
            ee)
                if (A < R)
                    for (ee._listeners && q(b, _, ee, R, R),
                    ne = l(ee),
                    x = ne.length; x-- > 0; )
                        V = ne[x],
                        V !== "_listeners" && (V === ie ? q(b, _, ee[V], A + 2, R) : V === ce ? q(b, _, ee[V], A + 1, R) : (re = {},
                        re[V] = ee[V],
                        q(b, _, {
                            "**": re
                        }, A + 1, R)));
                else
                    ee._listeners ? q(b, _, ee, R, R) : ee["*"] && ee["*"]._listeners && q(b, _, ee["*"], R, R);
            return H
        }
        function z(b, _, C) {
            var A = 0, R = 0, w, y = this.delimiter, x = y.length, k;
            if (typeof b == "string")
                if ((w = b.indexOf(y)) !== -1) {
                    k = new Array(5);
                    do
                        k[A++] = b.slice(R, w),
                        R = w + x;
                    while ((w = b.indexOf(y, R)) !== -1);
                    k[A++] = b.slice(R)
                } else
                    k = [b],
                    A = 1;
            else
                k = b,
                A = b.length;
            if (A > 1) {
                for (w = 0; w + 1 < A; w++)
                    if (k[w] === "**" && k[w + 1] === "**")
                        return
            }
            var O = this.listenerTree, $;
            for (w = 0; w < A; w++)
                if ($ = k[w],
                O = O[$] || (O[$] = {}),
                w === A - 1)
                    return O._listeners ? (typeof O._listeners == "function" && (O._listeners = [O._listeners]),
                    C ? O._listeners.unshift(_) : O._listeners.push(_),
                    !O._listeners.warned && this._maxListeners > 0 && O._listeners.length > this._maxListeners && (O._listeners.warned = !0,
                    h.call(this, O._listeners.length, $))) : O._listeners = _,
                    !0;
            return !0
        }
        function G(b, _, C, A) {
            for (var R = l(b), w = R.length, y, x, k, O = b._listeners, $; w-- > 0; )
                x = R[w],
                y = b[x],
                x === "_listeners" ? k = C : k = C ? C.concat(x) : [x],
                $ = A || typeof x == "symbol",
                O && _.push($ ? k : k.join(this.delimiter)),
                typeof y == "object" && G.call(this, y, _, k, $);
            return _
        }
        function U(b) {
            for (var _ = l(b), C = _.length, A, R, w; C-- > 0; )
                R = _[C],
                A = b[R],
                A && (w = !0,
                R !== "_listeners" && !U(A) && delete b[R]);
            return w
        }
        function P(b, _, C) {
            this.emitter = b,
            this.event = _,
            this.listener = C
        }
        P.prototype.off = function() {
            return this.emitter.off(this.event, this.listener),
            this
        }
        ;
        function L(b, _, C) {
            if (C === !0)
                R = !0;
            else if (C === !1)
                A = !0;
            else {
                if (!C || typeof C != "object")
                    throw TypeError("options should be an object or true");
                var A = C.async
                  , R = C.promisify
                  , w = C.nextTick
                  , y = C.objectify
            }
            if (A || w || R) {
                var x = _
                  , k = _._origin || _;
                if (w && !i)
                    throw Error("process.nextTick is not supported");
                R === e && (R = _.constructor.name === "AsyncFunction"),
                _ = function() {
                    var O = arguments
                      , $ = this
                      , K = this.event;
                    return R ? w ? Promise.resolve() : new Promise(function(H) {
                        c(H)
                    }
                    ).then(function() {
                        return $.event = K,
                        x.apply($, O)
                    }) : (w ? process.nextTick : c)(function() {
                        $.event = K,
                        x.apply($, O)
                    })
                }
                ,
                _._async = !0,
                _._origin = k
            }
            return [_, y ? new P(this,b,_) : this]
        }
        function M(b) {
            this._events = {},
            this._newListener = !1,
            this._removeListener = !1,
            this.verboseMemoryLeak = !1,
            d.call(this, b)
        }
        M.EventEmitter2 = M,
        M.prototype.listenTo = function(b, _, C) {
            if (typeof b != "object")
                throw TypeError("target musts be an object");
            var A = this;
            C = v(C, {
                on: e,
                off: e,
                reducers: e
            }, {
                on: E,
                off: E,
                reducers: N
            });
            function R(w) {
                if (typeof w != "object")
                    throw TypeError("events must be an object");
                var y = C.reducers, x = F.call(A, b), k;
                x === -1 ? k = new m(A,b,C) : k = A._observers[x];
                for (var O = l(w), $ = O.length, K, H = typeof y == "function", V = 0; V < $; V++)
                    K = O[V],
                    k.subscribe(K, w[K] || K, H ? y : y && y[K])
            }
            return n(_) ? R(g(_)) : R(typeof _ == "string" ? g(_.split(/\s+/)) : _),
            this
        }
        ,
        M.prototype.stopListeningTo = function(b, _) {
            var C = this._observers;
            if (!C)
                return !1;
            var A = C.length, R, w = !1;
            if (b && typeof b != "object")
                throw TypeError("target should be an object");
            for (; A-- > 0; )
                R = C[A],
                (!b || R._target === b) && (R.unsubscribe(_),
                w = !0);
            return w
        }
        ,
        M.prototype.delimiter = ".",
        M.prototype.setMaxListeners = function(b) {
            b !== e && (this._maxListeners = b,
            this._conf || (this._conf = {}),
            this._conf.maxListeners = b)
        }
        ,
        M.prototype.getMaxListeners = function() {
            return this._maxListeners
        }
        ,
        M.prototype.event = "",
        M.prototype.once = function(b, _, C) {
            return this._once(b, _, !1, C)
        }
        ,
        M.prototype.prependOnceListener = function(b, _, C) {
            return this._once(b, _, !0, C)
        }
        ,
        M.prototype._once = function(b, _, C, A) {
            return this._many(b, 1, _, C, A)
        }
        ,
        M.prototype.many = function(b, _, C, A) {
            return this._many(b, _, C, !1, A)
        }
        ,
        M.prototype.prependMany = function(b, _, C, A) {
            return this._many(b, _, C, !0, A)
        }
        ,
        M.prototype._many = function(b, _, C, A, R) {
            var w = this;
            if (typeof C != "function")
                throw new Error("many only accepts instances of Function");
            function y() {
                return --_ === 0 && w.off(b, y),
                C.apply(this, arguments)
            }
            return y._origin = C,
            this._on(b, y, A, R)
        }
        ,
        M.prototype.emit = function() {
            if (!this._events && !this._all)
                return !1;
            this._events || u.call(this);
            var b = arguments[0], _, C = this.wildcard, A, R, w, y, x;
            if (b === "newListener" && !this._newListener && !this._events.newListener)
                return !1;
            if (C && (_ = b,
            b !== "newListener" && b !== "removeListener" && typeof b == "object")) {
                if (R = b.length,
                o) {
                    for (w = 0; w < R; w++)
                        if (typeof b[w] == "symbol") {
                            x = !0;
                            break
                        }
                }
                x || (b = b.join(this.delimiter))
            }
            var k = arguments.length, O;
            if (this._all && this._all.length)
                for (O = this._all.slice(),
                w = 0,
                R = O.length; w < R; w++)
                    switch (this.event = b,
                    k) {
                    case 1:
                        O[w].call(this, b);
                        break;
                    case 2:
                        O[w].call(this, b, arguments[1]);
                        break;
                    case 3:
                        O[w].call(this, b, arguments[1], arguments[2]);
                        break;
                    default:
                        O[w].apply(this, arguments)
                    }
            if (C)
                O = [],
                q.call(this, O, _, this.listenerTree, 0, R);
            else if (O = this._events[b],
            typeof O == "function") {
                switch (this.event = b,
                k) {
                case 1:
                    O.call(this);
                    break;
                case 2:
                    O.call(this, arguments[1]);
                    break;
                case 3:
                    O.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    for (A = new Array(k - 1),
                    y = 1; y < k; y++)
                        A[y - 1] = arguments[y];
                    O.apply(this, A)
                }
                return !0
            } else
                O && (O = O.slice());
            if (O && O.length) {
                if (k > 3)
                    for (A = new Array(k - 1),
                    y = 1; y < k; y++)
                        A[y - 1] = arguments[y];
                for (w = 0,
                R = O.length; w < R; w++)
                    switch (this.event = b,
                    k) {
                    case 1:
                        O[w].call(this);
                        break;
                    case 2:
                        O[w].call(this, arguments[1]);
                        break;
                    case 3:
                        O[w].call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        O[w].apply(this, A)
                    }
                return !0
            } else if (!this.ignoreErrors && !this._all && b === "error")
                throw arguments[1]instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
            return !!this._all
        }
        ,
        M.prototype.emitAsync = function() {
            if (!this._events && !this._all)
                return !1;
            this._events || u.call(this);
            var b = arguments[0], _ = this.wildcard, C, A, R, w, y, x;
            if (b === "newListener" && !this._newListener && !this._events.newListener)
                return Promise.resolve([!1]);
            if (_ && (C = b,
            b !== "newListener" && b !== "removeListener" && typeof b == "object")) {
                if (w = b.length,
                o) {
                    for (y = 0; y < w; y++)
                        if (typeof b[y] == "symbol") {
                            A = !0;
                            break
                        }
                }
                A || (b = b.join(this.delimiter))
            }
            var k = [], O = arguments.length, $;
            if (this._all)
                for (y = 0,
                w = this._all.length; y < w; y++)
                    switch (this.event = b,
                    O) {
                    case 1:
                        k.push(this._all[y].call(this, b));
                        break;
                    case 2:
                        k.push(this._all[y].call(this, b, arguments[1]));
                        break;
                    case 3:
                        k.push(this._all[y].call(this, b, arguments[1], arguments[2]));
                        break;
                    default:
                        k.push(this._all[y].apply(this, arguments))
                    }
            if (_ ? ($ = [],
            q.call(this, $, C, this.listenerTree, 0)) : $ = this._events[b],
            typeof $ == "function")
                switch (this.event = b,
                O) {
                case 1:
                    k.push($.call(this));
                    break;
                case 2:
                    k.push($.call(this, arguments[1]));
                    break;
                case 3:
                    k.push($.call(this, arguments[1], arguments[2]));
                    break;
                default:
                    for (R = new Array(O - 1),
                    x = 1; x < O; x++)
                        R[x - 1] = arguments[x];
                    k.push($.apply(this, R))
                }
            else if ($ && $.length) {
                if ($ = $.slice(),
                O > 3)
                    for (R = new Array(O - 1),
                    x = 1; x < O; x++)
                        R[x - 1] = arguments[x];
                for (y = 0,
                w = $.length; y < w; y++)
                    switch (this.event = b,
                    O) {
                    case 1:
                        k.push($[y].call(this));
                        break;
                    case 2:
                        k.push($[y].call(this, arguments[1]));
                        break;
                    case 3:
                        k.push($[y].call(this, arguments[1], arguments[2]));
                        break;
                    default:
                        k.push($[y].apply(this, R))
                    }
            } else if (!this.ignoreErrors && !this._all && b === "error")
                return arguments[1]instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
            return Promise.all(k)
        }
        ,
        M.prototype.on = function(b, _, C) {
            return this._on(b, _, !1, C)
        }
        ,
        M.prototype.prependListener = function(b, _, C) {
            return this._on(b, _, !0, C)
        }
        ,
        M.prototype.onAny = function(b) {
            return this._onAny(b, !1)
        }
        ,
        M.prototype.prependAny = function(b) {
            return this._onAny(b, !0)
        }
        ,
        M.prototype.addListener = M.prototype.on,
        M.prototype._onAny = function(b, _) {
            if (typeof b != "function")
                throw new Error("onAny only accepts instances of Function");
            return this._all || (this._all = []),
            _ ? this._all.unshift(b) : this._all.push(b),
            this
        }
        ,
        M.prototype._on = function(b, _, C, A) {
            if (typeof b == "function")
                return this._onAny(b, _),
                this;
            if (typeof _ != "function")
                throw new Error("on only accepts instances of Function");
            this._events || u.call(this);
            var R = this, w;
            return A !== e && (w = L.call(this, b, _, A),
            _ = w[0],
            R = w[1]),
            this._newListener && this.emit("newListener", b, _),
            this.wildcard ? (z.call(this, b, _, C),
            R) : (this._events[b] ? (typeof this._events[b] == "function" && (this._events[b] = [this._events[b]]),
            C ? this._events[b].unshift(_) : this._events[b].push(_),
            !this._events[b].warned && this._maxListeners > 0 && this._events[b].length > this._maxListeners && (this._events[b].warned = !0,
            h.call(this, this._events[b].length, b))) : this._events[b] = _,
            R)
        }
        ,
        M.prototype.off = function(b, _) {
            if (typeof _ != "function")
                throw new Error("removeListener only takes instances of Function");
            var C, A = [];
            if (this.wildcard) {
                var R = typeof b == "string" ? b.split(this.delimiter) : b.slice();
                if (A = q.call(this, null, R, this.listenerTree, 0),
                !A)
                    return this
            } else {
                if (!this._events[b])
                    return this;
                C = this._events[b],
                A.push({
                    _listeners: C
                })
            }
            for (var w = 0; w < A.length; w++) {
                var y = A[w];
                if (C = y._listeners,
                n(C)) {
                    for (var x = -1, k = 0, O = C.length; k < O; k++)
                        if (C[k] === _ || C[k].listener && C[k].listener === _ || C[k]._origin && C[k]._origin === _) {
                            x = k;
                            break
                        }
                    if (x < 0)
                        continue;
                    return this.wildcard ? y._listeners.splice(x, 1) : this._events[b].splice(x, 1),
                    C.length === 0 && (this.wildcard ? delete y._listeners : delete this._events[b]),
                    this._removeListener && this.emit("removeListener", b, _),
                    this
                } else
                    (C === _ || C.listener && C.listener === _ || C._origin && C._origin === _) && (this.wildcard ? delete y._listeners : delete this._events[b],
                    this._removeListener && this.emit("removeListener", b, _))
            }
            return this.listenerTree && U(this.listenerTree),
            this
        }
        ,
        M.prototype.offAny = function(b) {
            var _ = 0, C = 0, A;
            if (b && this._all && this._all.length > 0) {
                for (A = this._all,
                _ = 0,
                C = A.length; _ < C; _++)
                    if (b === A[_])
                        return A.splice(_, 1),
                        this._removeListener && this.emit("removeListenerAny", b),
                        this
            } else {
                if (A = this._all,
                this._removeListener)
                    for (_ = 0,
                    C = A.length; _ < C; _++)
                        this.emit("removeListenerAny", A[_]);
                this._all = []
            }
            return this
        }
        ,
        M.prototype.removeListener = M.prototype.off,
        M.prototype.removeAllListeners = function(b) {
            if (b === e)
                return !this._events || u.call(this),
                this;
            if (this.wildcard) {
                var _ = q.call(this, null, b, this.listenerTree, 0), C, A;
                if (!_)
                    return this;
                for (A = 0; A < _.length; A++)
                    C = _[A],
                    C._listeners = null;
                this.listenerTree && U(this.listenerTree)
            } else
                this._events && (this._events[b] = null);
            return this
        }
        ,
        M.prototype.listeners = function(b) {
            var _ = this._events, C, A, R, w, y;
            if (b === e) {
                if (this.wildcard)
                    throw Error("event name required for wildcard emitter");
                if (!_)
                    return [];
                for (C = l(_),
                w = C.length,
                R = []; w-- > 0; )
                    A = _[C[w]],
                    typeof A == "function" ? R.push(A) : R.push.apply(R, A);
                return R
            } else {
                if (this.wildcard) {
                    if (y = this.listenerTree,
                    !y)
                        return [];
                    var x = []
                      , k = typeof b == "string" ? b.split(this.delimiter) : b.slice();
                    return q.call(this, x, k, y, 0),
                    x
                }
                return _ ? (A = _[b],
                A ? typeof A == "function" ? [A] : A : []) : []
            }
        }
        ,
        M.prototype.eventNames = function(b) {
            var _ = this._events;
            return this.wildcard ? G.call(this, this.listenerTree, [], null, b) : _ ? l(_) : []
        }
        ,
        M.prototype.listenerCount = function(b) {
            return this.listeners(b).length
        }
        ,
        M.prototype.hasListeners = function(b) {
            if (this.wildcard) {
                var _ = []
                  , C = typeof b == "string" ? b.split(this.delimiter) : b.slice();
                return q.call(this, _, C, this.listenerTree, 0),
                _.length > 0
            }
            var A = this._events
              , R = this._all;
            return !!(R && R.length || A && (b === e ? l(A).length : A[b]))
        }
        ,
        M.prototype.listenersAny = function() {
            return this._all ? this._all : []
        }
        ,
        M.prototype.waitFor = function(b, _) {
            var C = this
              , A = typeof _;
            return A === "number" ? _ = {
                timeout: _
            } : A === "function" && (_ = {
                filter: _
            }),
            _ = v(_, {
                timeout: 0,
                filter: e,
                handleError: !1,
                Promise,
                overload: !1
            }, {
                filter: E,
                Promise: p
            }),
            I(_.Promise, function(R, w, y) {
                function x() {
                    var k = _.filter;
                    if (!(k && !k.apply(C, arguments)))
                        if (C.off(b, x),
                        _.handleError) {
                            var O = arguments[0];
                            O ? w(O) : R(f.apply(null, arguments).slice(1))
                        } else
                            R(f.apply(null, arguments))
                }
                y(function() {
                    C.off(b, x)
                }),
                C._on(b, x, !1)
            }, {
                timeout: _.timeout,
                overload: _.overload
            })
        }
        ;
        function T(b, _, C) {
            C = v(C, {
                Promise,
                timeout: 0,
                overload: !1
            }, {
                Promise: p
            });
            var A = C.Promise;
            return I(A, function(R, w, y) {
                var x;
                if (typeof b.addEventListener == "function") {
                    x = function() {
                        R(f.apply(null, arguments))
                    }
                    ,
                    y(function() {
                        b.removeEventListener(_, x)
                    }),
                    b.addEventListener(_, x, {
                        once: !0
                    });
                    return
                }
                var k = function() {
                    O && b.removeListener("error", O),
                    R(f.apply(null, arguments))
                }, O;
                _ !== "error" && (O = function($) {
                    b.removeListener(_, k),
                    w($)
                }
                ,
                b.once("error", O)),
                y(function() {
                    O && b.removeListener("error", O),
                    b.removeListener(_, k)
                }),
                b.once(_, k)
            }, {
                timeout: C.timeout,
                overload: C.overload
            })
        }
        var D = M.prototype;
        if (Object.defineProperties(M, {
            defaultMaxListeners: {
                get: function() {
                    return D._maxListeners
                },
                set: function(b) {
                    if (typeof b != "number" || b < 0 || Number.isNaN(b))
                        throw TypeError("n must be a non-negative number");
                    D._maxListeners = b
                },
                enumerable: !0
            },
            once: {
                value: T,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperties(D, {
            _maxListeners: {
                value: r,
                writable: !0,
                configurable: !0
            },
            _observers: {
                value: null,
                writable: !0,
                configurable: !0
            }
        }),
        typeof define == "function" && define.amd)
            define(function() {
                return M
            });
        else if (typeof Wc == "object")
            Gc.exports = M;
        else {
            var j = new Function("","return this")();
            j.EventEmitter2 = M
        }
    }
    )()
}
);
var nc = us(Vc())
  , We = us(U0())
  , _r = us(Yc());
var _i, H0 = new Uint8Array(16);
function ds() {
    if (!_i && (_i = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto),
    !_i))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return _i(H0)
}
var Zc = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function F0(e) {
    return typeof e == "string" && Zc.test(e)
}
var Gn = F0;
var $e = [];
for (Ci = 0; Ci < 256; ++Ci)
    $e.push((Ci + 256).toString(16).substr(1));
var Ci;
function z0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
      , n = ($e[e[t + 0]] + $e[e[t + 1]] + $e[e[t + 2]] + $e[e[t + 3]] + "-" + $e[e[t + 4]] + $e[e[t + 5]] + "-" + $e[e[t + 6]] + $e[e[t + 7]] + "-" + $e[e[t + 8]] + $e[e[t + 9]] + "-" + $e[e[t + 10]] + $e[e[t + 11]] + $e[e[t + 12]] + $e[e[t + 13]] + $e[e[t + 14]] + $e[e[t + 15]]).toLowerCase();
    if (!Gn(n))
        throw TypeError("Stringified UUID is invalid");
    return n
}
var Jc = z0;
function q0(e, t, n) {
    e = e || {};
    var r = e.random || (e.rng || ds)();
    if (r[6] = r[6] & 15 | 64,
    r[8] = r[8] & 63 | 128,
    t) {
        n = n || 0;
        for (var i = 0; i < 16; ++i)
            t[n + i] = r[i];
        return t
    }
    return Jc(r)
}
var xr = q0;
var _t = Object.create(null);
_t.open = "0";
_t.close = "1";
_t.ping = "2";
_t.pong = "3";
_t.message = "4";
_t.upgrade = "5";
_t.noop = "6";
var Ar = Object.create(null);
Object.keys(_t).forEach(e => {
    Ar[_t[e]] = e
}
);
var Mr = {
    type: "error",
    data: "parser error"
};
var el = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , tl = typeof ArrayBuffer == "function"
  , nl = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer
  , Tr = ({type: e, data: t}, n, r) => el && t instanceof Blob ? n ? r(t) : Xc(t, r) : tl && (t instanceof ArrayBuffer || nl(t)) ? n ? r(t) : Xc(new Blob([t]), r) : r(_t[e] + (t || ""))
  , Xc = (e, t) => {
    let n = new FileReader;
    return n.onload = function() {
        let r = n.result.split(",")[1];
        t("b" + (r || ""))
    }
    ,
    n.readAsDataURL(e)
}
;
function Qc(e) {
    return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer,e.byteOffset,e.byteLength)
}
var hs;
function rl(e, t) {
    if (el && e.data instanceof Blob)
        return e.data.arrayBuffer().then(Qc).then(t);
    if (tl && (e.data instanceof ArrayBuffer || nl(e.data)))
        return t(Qc(e.data));
    Tr(e, !1, n => {
        hs || (hs = new TextEncoder),
        t(hs.encode(n))
    }
    )
}
var il = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Rr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < il.length; e++)
    Rr[il.charCodeAt(e)] = e;
var ol = e => {
    let t = e.length * .75, n = e.length, r, i = 0, o, s, a, c;
    e[e.length - 1] === "=" && (t--,
    e[e.length - 2] === "=" && t--);
    let l = new ArrayBuffer(t)
      , u = new Uint8Array(l);
    for (r = 0; r < n; r += 4)
        o = Rr[e.charCodeAt(r)],
        s = Rr[e.charCodeAt(r + 1)],
        a = Rr[e.charCodeAt(r + 2)],
        c = Rr[e.charCodeAt(r + 3)],
        u[i++] = o << 2 | s >> 4,
        u[i++] = (s & 15) << 4 | a >> 2,
        u[i++] = (a & 3) << 6 | c & 63;
    return l
}
;
var V0 = typeof ArrayBuffer == "function"
  , Or = (e, t) => {
    if (typeof e != "string")
        return {
            type: "message",
            data: sl(e, t)
        };
    let n = e.charAt(0);
    return n === "b" ? {
        type: "message",
        data: W0(e.substring(1), t)
    } : Ar[n] ? e.length > 1 ? {
        type: Ar[n],
        data: e.substring(1)
    } : {
        type: Ar[n]
    } : Mr
}
  , W0 = (e, t) => {
    if (V0) {
        let n = ol(e);
        return sl(n, t)
    } else
        return {
            base64: !0,
            data: e
        }
}
  , sl = (e, t) => {
    switch (t) {
    case "blob":
        return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
        return e instanceof ArrayBuffer ? e : e.buffer
    }
}
;
var al = ""
  , cl = (e, t) => {
    let n = e.length
      , r = new Array(n)
      , i = 0;
    e.forEach( (o, s) => {
        Tr(o, !1, a => {
            r[s] = a,
            ++i === n && t(r.join(al))
        }
        )
    }
    )
}
  , ll = (e, t) => {
    let n = e.split(al)
      , r = [];
    for (let i = 0; i < n.length; i++) {
        let o = Or(n[i], t);
        if (r.push(o),
        o.type === "error")
            break
    }
    return r
}
;
function ul() {
    return new TransformStream({
        transform(e, t) {
            rl(e, n => {
                let r = n.length, i;
                if (r < 126)
                    i = new Uint8Array(1),
                    new DataView(i.buffer).setUint8(0, r);
                else if (r < 65536) {
                    i = new Uint8Array(3);
                    let o = new DataView(i.buffer);
                    o.setUint8(0, 126),
                    o.setUint16(1, r)
                } else {
                    i = new Uint8Array(9);
                    let o = new DataView(i.buffer);
                    o.setUint8(0, 127),
                    o.setBigUint64(1, BigInt(r))
                }
                e.data && typeof e.data != "string" && (i[0] |= 128),
                t.enqueue(i),
                t.enqueue(n)
            }
            )
        }
    })
}
var fs;
function Si(e) {
    return e.reduce( (t, n) => t + n.length, 0)
}
function ki(e, t) {
    if (e[0].length === t)
        return e.shift();
    let n = new Uint8Array(t)
      , r = 0;
    for (let i = 0; i < t; i++)
        n[i] = e[0][r++],
        r === e[0].length && (e.shift(),
        r = 0);
    return e.length && r < e[0].length && (e[0] = e[0].slice(r)),
    n
}
function dl(e, t) {
    fs || (fs = new TextDecoder);
    let n = []
      , r = 0
      , i = -1
      , o = !1;
    return new TransformStream({
        transform(s, a) {
            for (n.push(s); ; ) {
                if (r === 0) {
                    if (Si(n) < 1)
                        break;
                    let c = ki(n, 1);
                    o = (c[0] & 128) === 128,
                    i = c[0] & 127,
                    i < 126 ? r = 3 : i === 126 ? r = 1 : r = 2
                } else if (r === 1) {
                    if (Si(n) < 2)
                        break;
                    let c = ki(n, 2);
                    i = new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),
                    r = 3
                } else if (r === 2) {
                    if (Si(n) < 8)
                        break;
                    let c = ki(n, 8)
                      , l = new DataView(c.buffer,c.byteOffset,c.length)
                      , u = l.getUint32(0);
                    if (u > Math.pow(2, 21) - 1) {
                        a.enqueue(Mr);
                        break
                    }
                    i = u * Math.pow(2, 32) + l.getUint32(4),
                    r = 3
                } else {
                    if (Si(n) < i)
                        break;
                    let c = ki(n, i);
                    a.enqueue(Or(o ? c : fs.decode(c), t)),
                    r = 0
                }
                if (i === 0 || i > e) {
                    a.enqueue(Mr);
                    break
                }
            }
        }
    })
}
var ps = 4;
function Ae(e) {
    if (e)
        return G0(e)
}
function G0(e) {
    for (var t in Ae.prototype)
        e[t] = Ae.prototype[t];
    return e
}
Ae.prototype.on = Ae.prototype.addEventListener = function(e, t) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
}
;
Ae.prototype.once = function(e, t) {
    function n() {
        this.off(e, n),
        t.apply(this, arguments)
    }
    return n.fn = t,
    this.on(e, n),
    this
}
;
Ae.prototype.off = Ae.prototype.removeListener = Ae.prototype.removeAllListeners = Ae.prototype.removeEventListener = function(e, t) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var n = this._callbacks["$" + e];
    if (!n)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + e],
        this;
    for (var r, i = 0; i < n.length; i++)
        if (r = n[i],
        r === t || r.fn === t) {
            n.splice(i, 1);
            break
        }
    return n.length === 0 && delete this._callbacks["$" + e],
    this
}
;
Ae.prototype.emit = function(e) {
    this._callbacks = this._callbacks || {};
    for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
    if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r)
            n[r].apply(this, t)
    }
    return this
}
;
Ae.prototype.emitReserved = Ae.prototype.emit;
Ae.prototype.listeners = function(e) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + e] || []
}
;
Ae.prototype.hasListeners = function(e) {
    return !!this.listeners(e).length
}
;
var Ut = typeof Promise == "function" && typeof Promise.resolve == "function" ? t => Promise.resolve().then(t) : (t, n) => n(t, 0)
  , Ge = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , hl = "arraybuffer";
function xi(e, ...t) {
    return t.reduce( (n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]),
    n), {})
}
var Y0 = Ge.setTimeout
  , Z0 = Ge.clearTimeout;
function Ht(e, t) {
    t.useNativeTimers ? (e.setTimeoutFn = Y0.bind(Ge),
    e.clearTimeoutFn = Z0.bind(Ge)) : (e.setTimeoutFn = Ge.setTimeout.bind(Ge),
    e.clearTimeoutFn = Ge.clearTimeout.bind(Ge))
}
var J0 = 1.33;
function fl(e) {
    return typeof e == "string" ? X0(e) : Math.ceil((e.byteLength || e.size) * J0)
}
function X0(e) {
    let t = 0
      , n = 0;
    for (let r = 0, i = e.length; r < i; r++)
        t = e.charCodeAt(r),
        t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++,
        n += 4);
    return n
}
function Ai() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function pl(e) {
    let t = "";
    for (let n in e)
        e.hasOwnProperty(n) && (t.length && (t += "&"),
        t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
}
function ml(e) {
    let t = {}
      , n = e.split("&");
    for (let r = 0, i = n.length; r < i; r++) {
        let o = n[r].split("=");
        t[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
    }
    return t
}
var Mi = class extends Error {
    constructor(t, n, r) {
        super(t),
        this.description = n,
        this.context = r,
        this.type = "TransportError"
    }
}
  , Ft = class extends Ae {
    constructor(t) {
        super(),
        this.writable = !1,
        Ht(this, t),
        this.opts = t,
        this.query = t.query,
        this.socket = t.socket,
        this.supportsBinary = !t.forceBase64
    }
    onError(t, n, r) {
        return super.emitReserved("error", new Mi(t,n,r)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(t) {
        this.readyState === "open" && this.write(t)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(t) {
        let n = Or(t, this.socket.binaryType);
        this.onPacket(n)
    }
    onPacket(t) {
        super.emitReserved("packet", t)
    }
    onClose(t) {
        this.readyState = "closed",
        super.emitReserved("close", t)
    }
    pause(t) {}
    createUri(t, n={}) {
        return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n)
    }
    _hostname() {
        let t = this.opts.hostname;
        return t.indexOf(":") === -1 ? t : "[" + t + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(t) {
        let n = pl(t);
        return n.length ? "?" + n : ""
    }
}
;
var Lr = class extends Ft {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(t) {
        this.readyState = "pausing";
        let n = () => {
            this.readyState = "paused",
            t()
        }
        ;
        if (this._polling || !this.writable) {
            let r = 0;
            this._polling && (r++,
            this.once("pollComplete", function() {
                --r || n()
            })),
            this.writable || (r++,
            this.once("drain", function() {
                --r || n()
            }))
        } else
            n()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(t) {
        let n = r => {
            if (this.readyState === "opening" && r.type === "open" && this.onOpen(),
            r.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(r)
        }
        ;
        ll(t, this.socket.binaryType).forEach(n),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        let t = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? t() : this.once("open", t)
    }
    write(t) {
        this.writable = !1,
        cl(t, n => {
            this.doWrite(n, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        let t = this.opts.secure ? "https" : "http"
          , n = this.query || {};
        return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Ai()),
        !this.supportsBinary && !n.sid && (n.b64 = 1),
        this.createUri(t, n)
    }
}
;
var gl = !1;
try {
    gl = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
var yl = gl;
function Q0() {}
var ms = class extends Lr {
    constructor(t) {
        if (super(t),
        typeof location < "u") {
            let n = location.protocol === "https:"
              , r = location.port;
            r || (r = n ? "443" : "80"),
            this.xd = typeof location < "u" && t.hostname !== location.hostname || r !== t.port
        }
    }
    doWrite(t, n) {
        let r = this.request({
            method: "POST",
            data: t
        });
        r.on("success", n),
        r.on("error", (i, o) => {
            this.onError("xhr post error", i, o)
        }
        )
    }
    doPoll() {
        let t = this.request();
        t.on("data", this.onData.bind(this)),
        t.on("error", (n, r) => {
            this.onError("xhr poll error", n, r)
        }
        ),
        this.pollXhr = t
    }
}
  , Ti = ( () => {
    class e extends Ae {
        constructor(n, r, i) {
            super(),
            this.createRequest = n,
            Ht(this, i),
            this._opts = i,
            this._method = i.method || "GET",
            this._uri = r,
            this._data = i.data !== void 0 ? i.data : null,
            this._create()
        }
        _create() {
            var n;
            let r = xi(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
            r.xdomain = !!this._opts.xd;
            let i = this._xhr = this.createRequest(r);
            try {
                i.open(this._method, this._uri, !0);
                try {
                    if (this._opts.extraHeaders) {
                        i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                        for (let o in this._opts.extraHeaders)
                            this._opts.extraHeaders.hasOwnProperty(o) && i.setRequestHeader(o, this._opts.extraHeaders[o])
                    }
                } catch {}
                if (this._method === "POST")
                    try {
                        i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } catch {}
                try {
                    i.setRequestHeader("Accept", "*/*")
                } catch {}
                (n = this._opts.cookieJar) === null || n === void 0 || n.addCookies(i),
                "withCredentials"in i && (i.withCredentials = this._opts.withCredentials),
                this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
                i.onreadystatechange = () => {
                    var o;
                    i.readyState === 3 && ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(i.getResponseHeader("set-cookie"))),
                    i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                        this._onError(typeof i.status == "number" ? i.status : 0)
                    }
                    , 0))
                }
                ,
                i.send(this._data)
            } catch (o) {
                this.setTimeoutFn( () => {
                    this._onError(o)
                }
                , 0);
                return
            }
            typeof document < "u" && (this._index = e.requestsCount++,
            e.requests[this._index] = this)
        }
        _onError(n) {
            this.emitReserved("error", n, this._xhr),
            this._cleanup(!0)
        }
        _cleanup(n) {
            if (!(typeof this._xhr > "u" || this._xhr === null)) {
                if (this._xhr.onreadystatechange = Q0,
                n)
                    try {
                        this._xhr.abort()
                    } catch {}
                typeof document < "u" && delete e.requests[this._index],
                this._xhr = null
            }
        }
        _onLoad() {
            let n = this._xhr.responseText;
            n !== null && (this.emitReserved("data", n),
            this.emitReserved("success"),
            this._cleanup())
        }
        abort() {
            this._cleanup()
        }
    }
    return e.requestsCount = 0,
    e.requests = {},
    e
}
)();
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", vl);
    else if (typeof addEventListener == "function") {
        let e = "onpagehide"in Ge ? "pagehide" : "unload";
        addEventListener(e, vl, !1)
    }
}
function vl() {
    for (let e in Ti.requests)
        Ti.requests.hasOwnProperty(e) && Ti.requests[e].abort()
}
var ep = function() {
    let e = bl({
        xdomain: !1
    });
    return e && e.responseType !== null
}()
  , on = class extends ms {
    constructor(t) {
        super(t);
        let n = t && t.forceBase64;
        this.supportsBinary = ep && !n
    }
    request(t={}) {
        return Object.assign(t, {
            xd: this.xd
        }, this.opts),
        new Ti(bl,this.uri(),t)
    }
}
;
function bl(e) {
    let t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || yl))
            return new XMLHttpRequest
    } catch {}
    if (!t)
        try {
            return new Ge[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
var wl = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative"
  , ys = class extends Ft {
    get name() {
        return "websocket"
    }
    doOpen() {
        let t = this.uri()
          , n = this.opts.protocols
          , r = wl ? {} : xi(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(t, n, r)
        } catch (i) {
            return this.emitReserved("error", i)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = t => this.onClose({
            description: "websocket connection closed",
            context: t
        }),
        this.ws.onmessage = t => this.onData(t.data),
        this.ws.onerror = t => this.onError("websocket error", t)
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            let r = t[n]
              , i = n === t.length - 1;
            Tr(r, this.supportsBinary, o => {
                try {
                    this.doWrite(r, o)
                } catch {}
                i && Ut( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        let t = this.opts.secure ? "wss" : "ws"
          , n = this.query || {};
        return this.opts.timestampRequests && (n[this.opts.timestampParam] = Ai()),
        this.supportsBinary || (n.b64 = 1),
        this.createUri(t, n)
    }
}
  , gs = Ge.WebSocket || Ge.MozWebSocket
  , sn = class extends ys {
    createSocket(t, n, r) {
        return wl ? new gs(t,n,r) : n ? new gs(t,n) : new gs(t)
    }
    doWrite(t, n) {
        this.ws.send(n)
    }
}
;
var Yn = class extends Ft {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (t) {
            return this.emitReserved("error", t)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(t => {
            this.onError("webtransport error", t)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(t => {
                let n = dl(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , r = t.readable.pipeThrough(n).getReader()
                  , i = ul();
                i.readable.pipeTo(t.writable),
                this._writer = i.writable.getWriter();
                let o = () => {
                    r.read().then( ({done: a, value: c}) => {
                        a || (this.onPacket(c),
                        o())
                    }
                    ).catch(a => {}
                    )
                }
                ;
                o();
                let s = {
                    type: "open"
                };
                this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(s).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            let r = t[n]
              , i = n === t.length - 1;
            this._writer.write(r).then( () => {
                i && Ut( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var t;
        (t = this._transport) === null || t === void 0 || t.close()
    }
}
;
var vs = {
    websocket: sn,
    webtransport: Yn,
    polling: on
};
var tp = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , np = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function Zn(e) {
    if (e.length > 8e3)
        throw "URI too long";
    let t = e
      , n = e.indexOf("[")
      , r = e.indexOf("]");
    n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
    let i = tp.exec(e || "")
      , o = {}
      , s = 14;
    for (; s--; )
        o[np[s]] = i[s] || "";
    return n != -1 && r != -1 && (o.source = t,
    o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ":"),
    o.authority = o.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    o.ipv6uri = !0),
    o.pathNames = rp(o, o.path),
    o.queryKey = ip(o, o.query),
    o
}
function rp(e, t) {
    let n = /\/{2,9}/g
      , r = t.replace(n, "/").split("/");
    return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
}
function ip(e, t) {
    let n = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, o) {
        i && (n[i] = o)
    }),
    n
}
var bs = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , Ri = [];
bs && addEventListener("offline", () => {
    Ri.forEach(e => e())
}
, !1);
var Oi = ( () => {
    class e extends Ae {
        constructor(n, r) {
            if (super(),
            this.binaryType = hl,
            this.writeBuffer = [],
            this._prevBufferLen = 0,
            this._pingInterval = -1,
            this._pingTimeout = -1,
            this._maxPayload = -1,
            this._pingTimeoutTime = 1 / 0,
            n && typeof n == "object" && (r = n,
            n = null),
            n) {
                let i = Zn(n);
                r.hostname = i.host,
                r.secure = i.protocol === "https" || i.protocol === "wss",
                r.port = i.port,
                i.query && (r.query = i.query)
            } else
                r.host && (r.hostname = Zn(r.host).host);
            Ht(this, r),
            this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:",
            r.hostname && !r.port && (r.port = this.secure ? "443" : "80"),
            this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"),
            this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
            this.transports = [],
            this._transportsByName = {},
            r.transports.forEach(i => {
                let o = i.prototype.name;
                this.transports.push(o),
                this._transportsByName[o] = i
            }
            ),
            this.opts = Object.assign({
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: {
                    threshold: 1024
                },
                transportOptions: {},
                closeOnBeforeunload: !1
            }, r),
            this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
            typeof this.opts.query == "string" && (this.opts.query = ml(this.opts.query)),
            bs && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
                this.transport && (this.transport.removeAllListeners(),
                this.transport.close())
            }
            ,
            addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
            this.hostname !== "localhost" && (this._offlineEventListener = () => {
                this._onClose("transport close", {
                    description: "network connection lost"
                })
            }
            ,
            Ri.push(this._offlineEventListener))),
            this.opts.withCredentials && (this._cookieJar = void 0),
            this._open()
        }
        createTransport(n) {
            let r = Object.assign({}, this.opts.query);
            r.EIO = ps,
            r.transport = n,
            this.id && (r.sid = this.id);
            let i = Object.assign({}, this.opts, {
                query: r,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port
            }, this.opts.transportOptions[n]);
            return new this._transportsByName[n](i)
        }
        _open() {
            if (this.transports.length === 0) {
                this.setTimeoutFn( () => {
                    this.emitReserved("error", "No transports available")
                }
                , 0);
                return
            }
            let n = this.opts.rememberUpgrade && e.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
            this.readyState = "opening";
            let r = this.createTransport(n);
            r.open(),
            this.setTransport(r)
        }
        setTransport(n) {
            this.transport && this.transport.removeAllListeners(),
            this.transport = n,
            n.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", r => this._onClose("transport close", r))
        }
        onOpen() {
            this.readyState = "open",
            e.priorWebsocketSuccess = this.transport.name === "websocket",
            this.emitReserved("open"),
            this.flush()
        }
        _onPacket(n) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
                switch (this.emitReserved("packet", n),
                this.emitReserved("heartbeat"),
                n.type) {
                case "open":
                    this.onHandshake(JSON.parse(n.data));
                    break;
                case "ping":
                    this._sendPacket("pong"),
                    this.emitReserved("ping"),
                    this.emitReserved("pong"),
                    this._resetPingTimeout();
                    break;
                case "error":
                    let r = new Error("server error");
                    r.code = n.data,
                    this._onError(r);
                    break;
                case "message":
                    this.emitReserved("data", n.data),
                    this.emitReserved("message", n.data);
                    break
                }
        }
        onHandshake(n) {
            this.emitReserved("handshake", n),
            this.id = n.sid,
            this.transport.query.sid = n.sid,
            this._pingInterval = n.pingInterval,
            this._pingTimeout = n.pingTimeout,
            this._maxPayload = n.maxPayload,
            this.onOpen(),
            this.readyState !== "closed" && this._resetPingTimeout()
        }
        _resetPingTimeout() {
            this.clearTimeoutFn(this._pingTimeoutTimer);
            let n = this._pingInterval + this._pingTimeout;
            this._pingTimeoutTime = Date.now() + n,
            this._pingTimeoutTimer = this.setTimeoutFn( () => {
                this._onClose("ping timeout")
            }
            , n),
            this.opts.autoUnref && this._pingTimeoutTimer.unref()
        }
        _onDrain() {
            this.writeBuffer.splice(0, this._prevBufferLen),
            this._prevBufferLen = 0,
            this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
        }
        flush() {
            if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                let n = this._getWritablePackets();
                this.transport.send(n),
                this._prevBufferLen = n.length,
                this.emitReserved("flush")
            }
        }
        _getWritablePackets() {
            if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
                return this.writeBuffer;
            let r = 1;
            for (let i = 0; i < this.writeBuffer.length; i++) {
                let o = this.writeBuffer[i].data;
                if (o && (r += fl(o)),
                i > 0 && r > this._maxPayload)
                    return this.writeBuffer.slice(0, i);
                r += 2
            }
            return this.writeBuffer
        }
        _hasPingExpired() {
            if (!this._pingTimeoutTime)
                return !0;
            let n = Date.now() > this._pingTimeoutTime;
            return n && (this._pingTimeoutTime = 0,
            Ut( () => {
                this._onClose("ping timeout")
            }
            , this.setTimeoutFn)),
            n
        }
        write(n, r, i) {
            return this._sendPacket("message", n, r, i),
            this
        }
        send(n, r, i) {
            return this._sendPacket("message", n, r, i),
            this
        }
        _sendPacket(n, r, i, o) {
            if (typeof r == "function" && (o = r,
            r = void 0),
            typeof i == "function" && (o = i,
            i = null),
            this.readyState === "closing" || this.readyState === "closed")
                return;
            i = i || {},
            i.compress = i.compress !== !1;
            let s = {
                type: n,
                data: r,
                options: i
            };
            this.emitReserved("packetCreate", s),
            this.writeBuffer.push(s),
            o && this.once("flush", o),
            this.flush()
        }
        close() {
            let n = () => {
                this._onClose("forced close"),
                this.transport.close()
            }
              , r = () => {
                this.off("upgrade", r),
                this.off("upgradeError", r),
                n()
            }
              , i = () => {
                this.once("upgrade", r),
                this.once("upgradeError", r)
            }
            ;
            return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
            this.writeBuffer.length ? this.once("drain", () => {
                this.upgrading ? i() : n()
            }
            ) : this.upgrading ? i() : n()),
            this
        }
        _onError(n) {
            if (e.priorWebsocketSuccess = !1,
            this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
                return this.transports.shift(),
                this._open();
            this.emitReserved("error", n),
            this._onClose("transport error", n)
        }
        _onClose(n, r) {
            if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
                if (this.clearTimeoutFn(this._pingTimeoutTimer),
                this.transport.removeAllListeners("close"),
                this.transport.close(),
                this.transport.removeAllListeners(),
                bs && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
                this._offlineEventListener)) {
                    let i = Ri.indexOf(this._offlineEventListener);
                    i !== -1 && Ri.splice(i, 1)
                }
                this.readyState = "closed",
                this.id = null,
                this.emitReserved("close", n, r),
                this.writeBuffer = [],
                this._prevBufferLen = 0
            }
        }
    }
    return e.protocol = ps,
    e
}
)()
  , Li = class extends Oi {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let t = 0; t < this._upgrades.length; t++)
                this._probe(this._upgrades[t])
    }
    _probe(t) {
        let n = this.createTransport(t)
          , r = !1;
        Oi.priorWebsocketSuccess = !1;
        let i = () => {
            r || (n.send([{
                type: "ping",
                data: "probe"
            }]),
            n.once("packet", d => {
                if (!r)
                    if (d.type === "pong" && d.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", n),
                        !n)
                            return;
                        Oi.priorWebsocketSuccess = n.name === "websocket",
                        this.transport.pause( () => {
                            r || this.readyState !== "closed" && (u(),
                            this.setTransport(n),
                            n.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", n),
                            n = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        let h = new Error("probe error");
                        h.transport = n.name,
                        this.emitReserved("upgradeError", h)
                    }
            }
            ))
        }
        ;
        function o() {
            r || (r = !0,
            u(),
            n.close(),
            n = null)
        }
        let s = d => {
            let h = new Error("probe error: " + d);
            h.transport = n.name,
            o(),
            this.emitReserved("upgradeError", h)
        }
        ;
        function a() {
            s("transport closed")
        }
        function c() {
            s("socket closed")
        }
        function l(d) {
            n && d.name !== n.name && o()
        }
        let u = () => {
            n.removeListener("open", i),
            n.removeListener("error", s),
            n.removeListener("close", a),
            this.off("close", c),
            this.off("upgrading", l)
        }
        ;
        n.once("open", i),
        n.once("error", s),
        n.once("close", a),
        this.once("close", c),
        this.once("upgrading", l),
        this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn( () => {
            r || n.open()
        }
        , 200) : n.open()
    }
    onHandshake(t) {
        this._upgrades = this._filterUpgrades(t.upgrades),
        super.onHandshake(t)
    }
    _filterUpgrades(t) {
        let n = [];
        for (let r = 0; r < t.length; r++)
            ~this.transports.indexOf(t[r]) && n.push(t[r]);
        return n
    }
}
  , Jn = class extends Li {
    constructor(t, n={}) {
        let r = typeof t == "object" ? t : n;
        (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map(i => vs[i]).filter(i => !!i)),
        super(t, r)
    }
}
;
var wy = Jn.protocol;
function El(e, t="", n) {
    let r = e;
    n = n || typeof location < "u" && location,
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e),
    /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e),
    r = Zn(e)),
    r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    r.path = r.path || "/";
    let o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return r.id = r.protocol + "://" + o + ":" + r.port + t,
    r.href = r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port),
    r
}
var ks = {};
K0(ks, {
    Decoder: () => Cs,
    Encoder: () => _s,
    PacketType: () => ve,
    protocol: () => xl
});
var sp = typeof ArrayBuffer == "function"
  , ap = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
  , _l = Object.prototype.toString
  , cp = typeof Blob == "function" || typeof Blob < "u" && _l.call(Blob) === "[object BlobConstructor]"
  , lp = typeof File == "function" || typeof File < "u" && _l.call(File) === "[object FileConstructor]";
function Ir(e) {
    return sp && (e instanceof ArrayBuffer || ap(e)) || cp && e instanceof Blob || lp && e instanceof File
}
function Pr(e, t) {
    if (!e || typeof e != "object")
        return !1;
    if (Array.isArray(e)) {
        for (let n = 0, r = e.length; n < r; n++)
            if (Pr(e[n]))
                return !0;
        return !1
    }
    if (Ir(e))
        return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
        return Pr(e.toJSON(), !0);
    for (let n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && Pr(e[n]))
            return !0;
    return !1
}
function Cl(e) {
    let t = []
      , n = e.data
      , r = e;
    return r.data = ws(n, t),
    r.attachments = t.length,
    {
        packet: r,
        buffers: t
    }
}
function ws(e, t) {
    if (!e)
        return e;
    if (Ir(e)) {
        let n = {
            _placeholder: !0,
            num: t.length
        };
        return t.push(e),
        n
    } else if (Array.isArray(e)) {
        let n = new Array(e.length);
        for (let r = 0; r < e.length; r++)
            n[r] = ws(e[r], t);
        return n
    } else if (typeof e == "object" && !(e instanceof Date)) {
        let n = {};
        for (let r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = ws(e[r], t));
        return n
    }
    return e
}
function Sl(e, t) {
    return e.data = Es(e.data, t),
    delete e.attachments,
    e
}
function Es(e, t) {
    if (!e)
        return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
            return t[e.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(e))
        for (let n = 0; n < e.length; n++)
            e[n] = Es(e[n], t);
    else if (typeof e == "object")
        for (let n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Es(e[n], t));
    return e
}
var up = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"]
  , xl = 5
  , ve = function(e) {
    return e[e.CONNECT = 0] = "CONNECT",
    e[e.DISCONNECT = 1] = "DISCONNECT",
    e[e.EVENT = 2] = "EVENT",
    e[e.ACK = 3] = "ACK",
    e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    e[e.BINARY_EVENT = 5] = "BINARY_EVENT",
    e[e.BINARY_ACK = 6] = "BINARY_ACK",
    e
}(ve || {})
  , _s = class {
    constructor(t) {
        this.replacer = t
    }
    encode(t) {
        return (t.type === ve.EVENT || t.type === ve.ACK) && Pr(t) ? this.encodeAsBinary({
            type: t.type === ve.EVENT ? ve.BINARY_EVENT : ve.BINARY_ACK,
            nsp: t.nsp,
            data: t.data,
            id: t.id
        }) : [this.encodeAsString(t)]
    }
    encodeAsString(t) {
        let n = "" + t.type;
        return (t.type === ve.BINARY_EVENT || t.type === ve.BINARY_ACK) && (n += t.attachments + "-"),
        t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
        t.id != null && (n += t.id),
        t.data != null && (n += JSON.stringify(t.data, this.replacer)),
        n
    }
    encodeAsBinary(t) {
        let n = Cl(t)
          , r = this.encodeAsString(n.packet)
          , i = n.buffers;
        return i.unshift(r),
        i
    }
}
;
function kl(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
var Cs = class e extends Ae {
    constructor(t) {
        super(),
        this.reviver = t
    }
    add(t) {
        let n;
        if (typeof t == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            n = this.decodeString(t);
            let r = n.type === ve.BINARY_EVENT;
            r || n.type === ve.BINARY_ACK ? (n.type = r ? ve.EVENT : ve.ACK,
            this.reconstructor = new Ss(n),
            n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n)
        } else if (Ir(t) || t.base64)
            if (this.reconstructor)
                n = this.reconstructor.takeBinaryData(t),
                n && (this.reconstructor = null,
                super.emitReserved("decoded", n));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + t)
    }
    decodeString(t) {
        let n = 0
          , r = {
            type: Number(t.charAt(0))
        };
        if (ve[r.type] === void 0)
            throw new Error("unknown packet type " + r.type);
        if (r.type === ve.BINARY_EVENT || r.type === ve.BINARY_ACK) {
            let o = n + 1;
            for (; t.charAt(++n) !== "-" && n != t.length; )
                ;
            let s = t.substring(o, n);
            if (s != Number(s) || t.charAt(n) !== "-")
                throw new Error("Illegal attachments");
            r.attachments = Number(s)
        }
        if (t.charAt(n + 1) === "/") {
            let o = n + 1;
            for (; ++n && !(t.charAt(n) === "," || n === t.length); )
                ;
            r.nsp = t.substring(o, n)
        } else
            r.nsp = "/";
        let i = t.charAt(n + 1);
        if (i !== "" && Number(i) == i) {
            let o = n + 1;
            for (; ++n; ) {
                let s = t.charAt(n);
                if (s == null || Number(s) != s) {
                    --n;
                    break
                }
                if (n === t.length)
                    break
            }
            r.id = Number(t.substring(o, n + 1))
        }
        if (t.charAt(++n)) {
            let o = this.tryParse(t.substr(n));
            if (e.isPayloadValid(r.type, o))
                r.data = o;
            else
                throw new Error("invalid payload")
        }
        return r
    }
    tryParse(t) {
        try {
            return JSON.parse(t, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(t, n) {
        switch (t) {
        case ve.CONNECT:
            return kl(n);
        case ve.DISCONNECT:
            return n === void 0;
        case ve.CONNECT_ERROR:
            return typeof n == "string" || kl(n);
        case ve.EVENT:
        case ve.BINARY_EVENT:
            return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && up.indexOf(n[0]) === -1);
        case ve.ACK:
        case ve.BINARY_ACK:
            return Array.isArray(n)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
  , Ss = class {
    constructor(t) {
        this.packet = t,
        this.buffers = [],
        this.reconPack = t
    }
    takeBinaryData(t) {
        if (this.buffers.push(t),
        this.buffers.length === this.reconPack.attachments) {
            let n = Sl(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            n
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
;
function ot(e, t, n) {
    return e.on(t, n),
    function() {
        e.off(t, n)
    }
}
var dp = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
})
  , Xn = class extends Ae {
    constructor(t, n, r) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = t,
        this.nsp = n,
        r && r.auth && (this.auth = r.auth),
        this._opts = Object.assign({}, r),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        let t = this.io;
        this.subs = [ot(t, "open", this.onopen.bind(this)), ot(t, "packet", this.onpacket.bind(this)), ot(t, "error", this.onerror.bind(this)), ot(t, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...t) {
        return t.unshift("message"),
        this.emit.apply(this, t),
        this
    }
    emit(t, ...n) {
        var r, i, o;
        if (dp.hasOwnProperty(t))
            throw new Error('"' + t.toString() + '" is a reserved event name');
        if (n.unshift(t),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(n),
            this;
        let s = {
            type: ve.EVENT,
            data: n
        };
        if (s.options = {},
        s.options.compress = this.flags.compress !== !1,
        typeof n[n.length - 1] == "function") {
            let u = this.ids++
              , d = n.pop();
            this._registerAckCallback(u, d),
            s.id = u
        }
        let a = (i = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || i === void 0 ? void 0 : i.writable
          , c = this.connected && !(!((o = this.io.engine) === null || o === void 0) && o._hasPingExpired());
        return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(s),
        this.packet(s)) : this.sendBuffer.push(s)),
        this.flags = {},
        this
    }
    _registerAckCallback(t, n) {
        var r;
        let i = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
        if (i === void 0) {
            this.acks[t] = n;
            return
        }
        let o = this.io.setTimeoutFn( () => {
            delete this.acks[t];
            for (let a = 0; a < this.sendBuffer.length; a++)
                this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
            n.call(this, new Error("operation has timed out"))
        }
        , i)
          , s = (...a) => {
            this.io.clearTimeoutFn(o),
            n.apply(this, a)
        }
        ;
        s.withError = !0,
        this.acks[t] = s
    }
    emitWithAck(t, ...n) {
        return new Promise( (r, i) => {
            let o = (s, a) => s ? i(s) : r(a);
            o.withError = !0,
            n.push(o),
            this.emit(t, ...n)
        }
        )
    }
    _addToQueue(t) {
        let n;
        typeof t[t.length - 1] == "function" && (n = t.pop());
        let r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        t.push( (i, ...o) => r !== this._queue[0] ? void 0 : (i !== null ? r.tryCount > this._opts.retries && (this._queue.shift(),
        n && n(i)) : (this._queue.shift(),
        n && n(null, ...o)),
        r.pending = !1,
        this._drainQueue())),
        this._queue.push(r),
        this._drainQueue()
    }
    _drainQueue(t=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        let n = this._queue[0];
        n.pending && !t || (n.pending = !0,
        n.tryCount++,
        this.flags = n.flags,
        this.emit.apply(this, n.args))
    }
    packet(t) {
        t.nsp = this.nsp,
        this.io._packet(t)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(t => {
            this._sendConnectPacket(t)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(t) {
        this.packet({
            type: ve.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, t) : t
        })
    }
    onerror(t) {
        this.connected || this.emitReserved("connect_error", t)
    }
    onclose(t, n) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", t, n),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(t => {
            if (!this.sendBuffer.some(r => String(r.id) === t)) {
                let r = this.acks[t];
                delete this.acks[t],
                r.withError && r.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(t) {
        if (t.nsp === this.nsp)
            switch (t.type) {
            case ve.CONNECT:
                t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case ve.EVENT:
            case ve.BINARY_EVENT:
                this.onevent(t);
                break;
            case ve.ACK:
            case ve.BINARY_ACK:
                this.onack(t);
                break;
            case ve.DISCONNECT:
                this.ondisconnect();
                break;
            case ve.CONNECT_ERROR:
                this.destroy();
                let r = new Error(t.data.message);
                r.data = t.data.data,
                this.emitReserved("connect_error", r);
                break
            }
    }
    onevent(t) {
        let n = t.data || [];
        t.id != null && n.push(this.ack(t.id)),
        this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n))
    }
    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            let n = this._anyListeners.slice();
            for (let r of n)
                r.apply(this, t)
        }
        super.emit.apply(this, t),
        this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1])
    }
    ack(t) {
        let n = this
          , r = !1;
        return function(...i) {
            r || (r = !0,
            n.packet({
                type: ve.ACK,
                id: t,
                data: i
            }))
        }
    }
    onack(t) {
        let n = this.acks[t.id];
        typeof n == "function" && (delete this.acks[t.id],
        n.withError && t.data.unshift(null),
        n.apply(this, t.data))
    }
    onconnect(t, n) {
        this.id = t,
        this.recovered = n && this._pid === n,
        this._pid = n,
        this.connected = !0,
        this.emitBuffered(),
        this.emitReserved("connect"),
        this._drainQueue(!0)
    }
    emitBuffered() {
        this.receiveBuffer.forEach(t => this.emitEvent(t)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(t => {
            this.notifyOutgoingListeners(t),
            this.packet(t)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(t => t()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: ve.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(t) {
        return this.flags.compress = t,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(t) {
        return this.flags.timeout = t,
        this
    }
    onAny(t) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(t),
        this
    }
    prependAny(t) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(t),
        this
    }
    offAny(t) {
        if (!this._anyListeners)
            return this;
        if (t) {
            let n = this._anyListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r])
                    return n.splice(r, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(t),
        this
    }
    prependAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(t),
        this
    }
    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners)
            return this;
        if (t) {
            let n = this._anyOutgoingListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r])
                    return n.splice(r, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            let n = this._anyOutgoingListeners.slice();
            for (let r of n)
                r.apply(this, t.data)
        }
    }
}
;
function Rn(e) {
    e = e || {},
    this.ms = e.min || 100,
    this.max = e.max || 1e4,
    this.factor = e.factor || 2,
    this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0,
    this.attempts = 0
}
Rn.prototype.duration = function() {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random()
          , n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n
    }
    return Math.min(e, this.max) | 0
}
;
Rn.prototype.reset = function() {
    this.attempts = 0
}
;
Rn.prototype.setMin = function(e) {
    this.ms = e
}
;
Rn.prototype.setMax = function(e) {
    this.max = e
}
;
Rn.prototype.setJitter = function(e) {
    this.jitter = e
}
;
var Qn = class extends Ae {
    constructor(t, n) {
        var r;
        super(),
        this.nsps = {},
        this.subs = [],
        t && typeof t == "object" && (n = t,
        t = void 0),
        n = n || {},
        n.path = n.path || "/socket.io",
        this.opts = n,
        Ht(this, n),
        this.reconnection(n.reconnection !== !1),
        this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(n.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
        this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : .5),
        this.backoff = new Rn({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(n.timeout == null ? 2e4 : n.timeout),
        this._readyState = "closed",
        this.uri = t;
        let i = n.parser || ks;
        this.encoder = new i.Encoder,
        this.decoder = new i.Decoder,
        this._autoConnect = n.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(t) {
        return arguments.length ? (this._reconnection = !!t,
        t || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(t) {
        return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t,
        this)
    }
    reconnectionDelay(t) {
        var n;
        return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t,
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this)
    }
    randomizationFactor(t) {
        var n;
        return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t,
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this)
    }
    reconnectionDelayMax(t) {
        var n;
        return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t,
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this)
    }
    timeout(t) {
        return arguments.length ? (this._timeout = t,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(t) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new Jn(this.uri,this.opts);
        let n = this.engine
          , r = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        let i = ot(n, "open", function() {
            r.onopen(),
            t && t()
        })
          , o = a => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", a),
            t ? t(a) : this.maybeReconnectOnOpen()
        }
          , s = ot(n, "error", o);
        if (this._timeout !== !1) {
            let a = this._timeout
              , c = this.setTimeoutFn( () => {
                i(),
                o(new Error("timeout")),
                n.close()
            }
            , a);
            this.opts.autoUnref && c.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(c)
            }
            )
        }
        return this.subs.push(i),
        this.subs.push(s),
        this
    }
    connect(t) {
        return this.open(t)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        let t = this.engine;
        this.subs.push(ot(t, "ping", this.onping.bind(this)), ot(t, "data", this.ondata.bind(this)), ot(t, "error", this.onerror.bind(this)), ot(t, "close", this.onclose.bind(this)), ot(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(t) {
        try {
            this.decoder.add(t)
        } catch (n) {
            this.onclose("parse error", n)
        }
    }
    ondecoded(t) {
        Ut( () => {
            this.emitReserved("packet", t)
        }
        , this.setTimeoutFn)
    }
    onerror(t) {
        this.emitReserved("error", t)
    }
    socket(t, n) {
        let r = this.nsps[t];
        return r ? this._autoConnect && !r.active && r.connect() : (r = new Xn(this,t,n),
        this.nsps[t] = r),
        r
    }
    _destroy(t) {
        let n = Object.keys(this.nsps);
        for (let r of n)
            if (this.nsps[r].active)
                return;
        this._close()
    }
    _packet(t) {
        let n = this.encoder.encode(t);
        for (let r = 0; r < n.length; r++)
            this.engine.write(n[r], t.options)
    }
    cleanup() {
        this.subs.forEach(t => t()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(t, n) {
        var r;
        this.cleanup(),
        (r = this.engine) === null || r === void 0 || r.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", t, n),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        let t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            let n = this.backoff.duration();
            this._reconnecting = !0;
            let r = this.setTimeoutFn( () => {
                t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                !t.skipReconnect && t.open(i => {
                    i ? (t._reconnecting = !1,
                    t.reconnect(),
                    this.emitReserved("reconnect_error", i)) : t.onreconnect()
                }
                ))
            }
            , n);
            this.opts.autoUnref && r.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(r)
            }
            )
        }
    }
    onreconnect() {
        let t = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", t)
    }
}
;
var Nr = {};
function Br(e, t) {
    typeof e == "object" && (t = e,
    e = void 0),
    t = t || {};
    let n = El(e, t.path || "/socket.io"), r = n.source, i = n.id, o = n.path, s = Nr[i] && o in Nr[i].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s, c;
    return a ? c = new Qn(r,t) : (Nr[i] || (Nr[i] = new Qn(r,t)),
    c = Nr[i]),
    n.query && !t.query && (t.query = n.queryKey),
    c.socket(n.path, t)
}
Object.assign(Br, {
    Manager: Qn,
    Socket: Xn,
    io: Br,
    connect: Br
});
var hp = Uc({});
function J(e, t, n, r) {
    return new (n || (n = Promise))(function(i, o) {
        function s(l) {
            try {
                c(r.next(l))
            } catch (u) {
                o(u)
            }
        }
        function a(l) {
            try {
                c(r.throw(l))
            } catch (u) {
                o(u)
            }
        }
        function c(l) {
            var u;
            l.done ? i(l.value) : (u = l.value,
            u instanceof n ? u : new n(function(d) {
                d(u)
            }
            )).then(s, a)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
}
var Xe = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {}
  , Ot = []
  , vt = []
  , fp = typeof Uint8Array < "u" ? Uint8Array : Array
  , rc = !1;
function zd() {
    rc = !0;
    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0; t < 64; ++t)
        Ot[t] = e[t],
        vt[e.charCodeAt(t)] = t;
    vt[45] = 62,
    vt[95] = 63
}
function pp(e, t, n) {
    for (var r, i, o = [], s = t; s < n; s += 3)
        r = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2],
        o.push(Ot[(i = r) >> 18 & 63] + Ot[i >> 12 & 63] + Ot[i >> 6 & 63] + Ot[63 & i]);
    return o.join("")
}
function Al(e) {
    var t;
    rc || zd();
    for (var n = e.length, r = n % 3, i = "", o = [], s = 16383, a = 0, c = n - r; a < c; a += s)
        o.push(pp(e, a, a + s > c ? c : a + s));
    return r === 1 ? (t = e[n - 1],
    i += Ot[t >> 2],
    i += Ot[t << 4 & 63],
    i += "==") : r === 2 && (t = (e[n - 2] << 8) + e[n - 1],
    i += Ot[t >> 10],
    i += Ot[t >> 4 & 63],
    i += Ot[t << 2 & 63],
    i += "="),
    o.push(i),
    o.join("")
}
function Pi(e, t, n, r, i) {
    var o, s, a = 8 * i - r - 1, c = (1 << a) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, h = n ? -1 : 1, f = e[t + d];
    for (d += h,
    o = f & (1 << -u) - 1,
    f >>= -u,
    u += a; u > 0; o = 256 * o + e[t + d],
    d += h,
    u -= 8)
        ;
    for (s = o & (1 << -u) - 1,
    o >>= -u,
    u += r; u > 0; s = 256 * s + e[t + d],
    d += h,
    u -= 8)
        ;
    if (o === 0)
        o = 1 - l;
    else {
        if (o === c)
            return s ? NaN : 1 / 0 * (f ? -1 : 1);
        s += Math.pow(2, r),
        o -= l
    }
    return (f ? -1 : 1) * s * Math.pow(2, o - r)
}
function qd(e, t, n, r, i, o) {
    var s, a, c, l = 8 * o - i - 1, u = (1 << l) - 1, d = u >> 1, h = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : o - 1, g = r ? 1 : -1, m = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t),
    isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
    s = u) : (s = Math.floor(Math.log(t) / Math.LN2),
    t * (c = Math.pow(2, -s)) < 1 && (s--,
    c *= 2),
    (t += s + d >= 1 ? h / c : h * Math.pow(2, 1 - d)) * c >= 2 && (s++,
    c /= 2),
    s + d >= u ? (a = 0,
    s = u) : s + d >= 1 ? (a = (t * c - 1) * Math.pow(2, i),
    s += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i),
    s = 0)); i >= 8; e[n + f] = 255 & a,
    f += g,
    a /= 256,
    i -= 8)
        ;
    for (s = s << i | a,
    l += i; l > 0; e[n + f] = 255 & s,
    f += g,
    s /= 256,
    l -= 8)
        ;
    e[n + f - g] |= 128 * m
}
var mp = {}.toString
  , Vd = Array.isArray || function(e) {
    return mp.call(e) == "[object Array]"
}
;
Z.TYPED_ARRAY_SUPPORT = Xe.TYPED_ARRAY_SUPPORT === void 0 || Xe.TYPED_ARRAY_SUPPORT;
var gp = vo();
function vo() {
    return Z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
}
function Zt(e, t) {
    if (vo() < t)
        throw new RangeError("Invalid typed array length");
    return Z.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Z.prototype : (e === null && (e = new Z(t)),
    e.length = t),
    e
}
function Z(e, t, n) {
    if (!(Z.TYPED_ARRAY_SUPPORT || this instanceof Z))
        return new Z(e,t,n);
    if (typeof e == "number") {
        if (typeof t == "string")
            throw new Error("If encoding is specified then the first argument must be a string");
        return da(this, e)
    }
    return Wd(this, e, t, n)
}
function Wd(e, t, n, r) {
    if (typeof t == "number")
        throw new TypeError('"value" argument must not be a number');
    return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer ? function(i, o, s, a) {
        if (o.byteLength,
        s < 0 || o.byteLength < s)
            throw new RangeError("'offset' is out of bounds");
        if (o.byteLength < s + (a || 0))
            throw new RangeError("'length' is out of bounds");
        return o = s === void 0 && a === void 0 ? new Uint8Array(o) : a === void 0 ? new Uint8Array(o,s) : new Uint8Array(o,s,a),
        Z.TYPED_ARRAY_SUPPORT ? (i = o).__proto__ = Z.prototype : i = xs(i, o),
        i
    }(e, t, n, r) : typeof t == "string" ? function(i, o, s) {
        if (typeof s == "string" && s !== "" || (s = "utf8"),
        !Z.isEncoding(s))
            throw new TypeError('"encoding" must be a valid string encoding');
        var a = 0 | Yd(o, s);
        i = Zt(i, a);
        var c = i.write(o, s);
        return c !== a && (i = i.slice(0, c)),
        i
    }(e, t, n) : function(i, o) {
        if (Lt(o)) {
            var s = 0 | ic(o.length);
            return (i = Zt(i, s)).length === 0 || o.copy(i, 0, 0, s),
            i
        }
        if (o) {
            if (typeof ArrayBuffer < "u" && o.buffer instanceof ArrayBuffer || "length"in o)
                return typeof o.length != "number" || (a = o.length) != a ? Zt(i, 0) : xs(i, o);
            if (o.type === "Buffer" && Vd(o.data))
                return xs(i, o.data)
        }
        var a;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
    }(e, t)
}
function Gd(e) {
    if (typeof e != "number")
        throw new TypeError('"size" argument must be a number');
    if (e < 0)
        throw new RangeError('"size" argument must not be negative')
}
function da(e, t) {
    if (Gd(t),
    e = Zt(e, t < 0 ? 0 : 0 | ic(t)),
    !Z.TYPED_ARRAY_SUPPORT)
        for (var n = 0; n < t; ++n)
            e[n] = 0;
    return e
}
function xs(e, t) {
    var n = t.length < 0 ? 0 : 0 | ic(t.length);
    e = Zt(e, n);
    for (var r = 0; r < n; r += 1)
        e[r] = 255 & t[r];
    return e
}
function ic(e) {
    if (e >= vo())
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + vo().toString(16) + " bytes");
    return 0 | e
}
function Lt(e) {
    return !(e == null || !e._isBuffer)
}
function Yd(e, t) {
    if (Lt(e))
        return e.length;
    if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
        return e.byteLength;
    typeof e != "string" && (e = "" + e);
    var n = e.length;
    if (n === 0)
        return 0;
    for (var r = !1; ; )
        switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
            return n;
        case "utf8":
        case "utf-8":
        case void 0:
            return bo(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return 2 * n;
        case "hex":
            return n >>> 1;
        case "base64":
            return Qd(e).length;
        default:
            if (r)
                return bo(e).length;
            t = ("" + t).toLowerCase(),
            r = !0
        }
}
function yp(e, t, n) {
    var r = !1;
    if ((t === void 0 || t < 0) && (t = 0),
    t > this.length || ((n === void 0 || n > this.length) && (n = this.length),
    n <= 0) || (n >>>= 0) <= (t >>>= 0))
        return "";
    for (e || (e = "utf8"); ; )
        switch (e) {
        case "hex":
            return xp(this, t, n);
        case "utf8":
        case "utf-8":
            return Jd(this, t, n);
        case "ascii":
            return Sp(this, t, n);
        case "latin1":
        case "binary":
            return kp(this, t, n);
        case "base64":
            return Cp(this, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return Ap(this, t, n);
        default:
            if (r)
                throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(),
            r = !0
        }
}
function On(e, t, n) {
    var r = e[t];
    e[t] = e[n],
    e[n] = r
}
function Ml(e, t, n, r, i) {
    if (e.length === 0)
        return -1;
    if (typeof n == "string" ? (r = n,
    n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
    n = +n,
    isNaN(n) && (n = i ? 0 : e.length - 1),
    n < 0 && (n = e.length + n),
    n >= e.length) {
        if (i)
            return -1;
        n = e.length - 1
    } else if (n < 0) {
        if (!i)
            return -1;
        n = 0
    }
    if (typeof t == "string" && (t = Z.from(t, r)),
    Lt(t))
        return t.length === 0 ? -1 : Tl(e, t, n, r, i);
    if (typeof t == "number")
        return t &= 255,
        Z.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : Tl(e, [t], n, r, i);
    throw new TypeError("val must be string, number or Buffer")
}
function Tl(e, t, n, r, i) {
    var o, s = 1, a = e.length, c = t.length;
    if (r !== void 0 && ((r = String(r).toLowerCase()) === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
        if (e.length < 2 || t.length < 2)
            return -1;
        s = 2,
        a /= 2,
        c /= 2,
        n /= 2
    }
    function l(f, g) {
        return s === 1 ? f[g] : f.readUInt16BE(g * s)
    }
    if (i) {
        var u = -1;
        for (o = n; o < a; o++)
            if (l(e, o) === l(t, u === -1 ? 0 : o - u)) {
                if (u === -1 && (u = o),
                o - u + 1 === c)
                    return u * s
            } else
                u !== -1 && (o -= o - u),
                u = -1
    } else
        for (n + c > a && (n = a - c),
        o = n; o >= 0; o--) {
            for (var d = !0, h = 0; h < c; h++)
                if (l(e, o + h) !== l(t, h)) {
                    d = !1;
                    break
                }
            if (d)
                return o
        }
    return -1
}
function vp(e, t, n, r) {
    n = Number(n) || 0;
    var i = e.length - n;
    r ? (r = Number(r)) > i && (r = i) : r = i;
    var o = t.length;
    if (o % 2 != 0)
        throw new TypeError("Invalid hex string");
    r > o / 2 && (r = o / 2);
    for (var s = 0; s < r; ++s) {
        var a = parseInt(t.substr(2 * s, 2), 16);
        if (isNaN(a))
            return s;
        e[n + s] = a
    }
    return s
}
function bp(e, t, n, r) {
    return Xo(bo(t, e.length - n), e, n, r)
}
function Zd(e, t, n, r) {
    return Xo(function(i) {
        for (var o = [], s = 0; s < i.length; ++s)
            o.push(255 & i.charCodeAt(s));
        return o
    }(t), e, n, r)
}
function wp(e, t, n, r) {
    return Zd(e, t, n, r)
}
function Ep(e, t, n, r) {
    return Xo(Qd(t), e, n, r)
}
function _p(e, t, n, r) {
    return Xo(function(i, o) {
        for (var s, a, c, l = [], u = 0; u < i.length && !((o -= 2) < 0); ++u)
            a = (s = i.charCodeAt(u)) >> 8,
            c = s % 256,
            l.push(c),
            l.push(a);
        return l
    }(t, e.length - n), e, n, r)
}
function Cp(e, t, n) {
    return t === 0 && n === e.length ? Al(e) : Al(e.slice(t, n))
}
function Jd(e, t, n) {
    n = Math.min(e.length, n);
    for (var r = [], i = t; i < n; ) {
        var o, s, a, c, l = e[i], u = null, d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
        if (i + d <= n)
            switch (d) {
            case 1:
                l < 128 && (u = l);
                break;
            case 2:
                (192 & (o = e[i + 1])) == 128 && (c = (31 & l) << 6 | 63 & o) > 127 && (u = c);
                break;
            case 3:
                o = e[i + 1],
                s = e[i + 2],
                (192 & o) == 128 && (192 & s) == 128 && (c = (15 & l) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (u = c);
                break;
            case 4:
                o = e[i + 1],
                s = e[i + 2],
                a = e[i + 3],
                (192 & o) == 128 && (192 & s) == 128 && (192 & a) == 128 && (c = (15 & l) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (u = c)
            }
        u === null ? (u = 65533,
        d = 1) : u > 65535 && (u -= 65536,
        r.push(u >>> 10 & 1023 | 55296),
        u = 56320 | 1023 & u),
        r.push(u),
        i += d
    }
    return function(h) {
        var f = h.length;
        if (f <= Rl)
            return String.fromCharCode.apply(String, h);
        for (var g = "", m = 0; m < f; )
            g += String.fromCharCode.apply(String, h.slice(m, m += Rl));
        return g
    }(r)
}
Z.poolSize = 8192,
Z._augment = function(e) {
    return e.__proto__ = Z.prototype,
    e
}
,
Z.from = function(e, t, n) {
    return Wd(null, e, t, n)
}
,
Z.TYPED_ARRAY_SUPPORT && (Z.prototype.__proto__ = Uint8Array.prototype,
Z.__proto__ = Uint8Array,
typeof Symbol < "u" && Symbol.species && Z[Symbol.species]),
Z.alloc = function(e, t, n) {
    return function(r, i, o, s) {
        return Gd(i),
        i <= 0 ? Zt(r, i) : o !== void 0 ? typeof s == "string" ? Zt(r, i).fill(o, s) : Zt(r, i).fill(o) : Zt(r, i)
    }(null, e, t, n)
}
,
Z.allocUnsafe = function(e) {
    return da(null, e)
}
,
Z.allocUnsafeSlow = function(e) {
    return da(null, e)
}
,
Z.isBuffer = eh,
Z.compare = function(e, t) {
    if (!Lt(e) || !Lt(t))
        throw new TypeError("Arguments must be Buffers");
    if (e === t)
        return 0;
    for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
        if (e[i] !== t[i]) {
            n = e[i],
            r = t[i];
            break
        }
    return n < r ? -1 : r < n ? 1 : 0
}
,
Z.isEncoding = function(e) {
    switch (String(e).toLowerCase()) {
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
,
Z.concat = function(e, t) {
    if (!Vd(e))
        throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0)
        return Z.alloc(0);
    var n;
    if (t === void 0)
        for (t = 0,
        n = 0; n < e.length; ++n)
            t += e[n].length;
    var r = Z.allocUnsafe(t)
      , i = 0;
    for (n = 0; n < e.length; ++n) {
        var o = e[n];
        if (!Lt(o))
            throw new TypeError('"list" argument must be an Array of Buffers');
        o.copy(r, i),
        i += o.length
    }
    return r
}
,
Z.byteLength = Yd,
Z.prototype._isBuffer = !0,
Z.prototype.swap16 = function() {
    var e = this.length;
    if (e % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var t = 0; t < e; t += 2)
        On(this, t, t + 1);
    return this
}
,
Z.prototype.swap32 = function() {
    var e = this.length;
    if (e % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var t = 0; t < e; t += 4)
        On(this, t, t + 3),
        On(this, t + 1, t + 2);
    return this
}
,
Z.prototype.swap64 = function() {
    var e = this.length;
    if (e % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var t = 0; t < e; t += 8)
        On(this, t, t + 7),
        On(this, t + 1, t + 6),
        On(this, t + 2, t + 5),
        On(this, t + 3, t + 4);
    return this
}
,
Z.prototype.toString = function() {
    var e = 0 | this.length;
    return e === 0 ? "" : arguments.length === 0 ? Jd(this, 0, e) : yp.apply(this, arguments)
}
,
Z.prototype.equals = function(e) {
    if (!Lt(e))
        throw new TypeError("Argument must be a Buffer");
    return this === e || Z.compare(this, e) === 0
}
,
Z.prototype.inspect = function() {
    var e = "";
    return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "),
    this.length > 50 && (e += " ... ")),
    "<Buffer " + e + ">"
}
,
Z.prototype.compare = function(e, t, n, r, i) {
    if (!Lt(e))
        throw new TypeError("Argument must be a Buffer");
    if (t === void 0 && (t = 0),
    n === void 0 && (n = e ? e.length : 0),
    r === void 0 && (r = 0),
    i === void 0 && (i = this.length),
    t < 0 || n > e.length || r < 0 || i > this.length)
        throw new RangeError("out of range index");
    if (r >= i && t >= n)
        return 0;
    if (r >= i)
        return -1;
    if (t >= n)
        return 1;
    if (this === e)
        return 0;
    for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(o, s), c = this.slice(r, i), l = e.slice(t, n), u = 0; u < a; ++u)
        if (c[u] !== l[u]) {
            o = c[u],
            s = l[u];
            break
        }
    return o < s ? -1 : s < o ? 1 : 0
}
,
Z.prototype.includes = function(e, t, n) {
    return this.indexOf(e, t, n) !== -1
}
,
Z.prototype.indexOf = function(e, t, n) {
    return Ml(this, e, t, n, !0)
}
,
Z.prototype.lastIndexOf = function(e, t, n) {
    return Ml(this, e, t, n, !1)
}
,
Z.prototype.write = function(e, t, n, r) {
    if (t === void 0)
        r = "utf8",
        n = this.length,
        t = 0;
    else if (n === void 0 && typeof t == "string")
        r = t,
        n = this.length,
        t = 0;
    else {
        if (!isFinite(t))
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t |= 0,
        isFinite(n) ? (n |= 0,
        r === void 0 && (r = "utf8")) : (r = n,
        n = void 0)
    }
    var i = this.length - t;
    if ((n === void 0 || n > i) && (n = i),
    e.length > 0 && (n < 0 || t < 0) || t > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
    r || (r = "utf8");
    for (var o = !1; ; )
        switch (r) {
        case "hex":
            return vp(this, e, t, n);
        case "utf8":
        case "utf-8":
            return bp(this, e, t, n);
        case "ascii":
            return Zd(this, e, t, n);
        case "latin1":
        case "binary":
            return wp(this, e, t, n);
        case "base64":
            return Ep(this, e, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return _p(this, e, t, n);
        default:
            if (o)
                throw new TypeError("Unknown encoding: " + r);
            r = ("" + r).toLowerCase(),
            o = !0
        }
}
,
Z.prototype.toJSON = function() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    }
}
;
var Rl = 4096;
function Sp(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);
    for (var i = t; i < n; ++i)
        r += String.fromCharCode(127 & e[i]);
    return r
}
function kp(e, t, n) {
    var r = "";
    n = Math.min(e.length, n);
    for (var i = t; i < n; ++i)
        r += String.fromCharCode(e[i]);
    return r
}
function xp(e, t, n) {
    var r = e.length;
    (!t || t < 0) && (t = 0),
    (!n || n < 0 || n > r) && (n = r);
    for (var i = "", o = t; o < n; ++o)
        i += Tp(e[o]);
    return i
}
function Ap(e, t, n) {
    for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
        i += String.fromCharCode(r[o] + 256 * r[o + 1]);
    return i
}
function Ie(e, t, n) {
    if (e % 1 != 0 || e < 0)
        throw new RangeError("offset is not uint");
    if (e + t > n)
        throw new RangeError("Trying to access beyond buffer length")
}
function Qe(e, t, n, r, i, o) {
    if (!Lt(e))
        throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
        throw new RangeError('"value" argument is out of bounds');
    if (n + r > e.length)
        throw new RangeError("Index out of range")
}
function Ii(e, t, n, r) {
    t < 0 && (t = 65535 + t + 1);
    for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
        e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
}
function Ni(e, t, n, r) {
    t < 0 && (t = 4294967295 + t + 1);
    for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
        e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
}
function Xd(e, t, n, r, i, o) {
    if (n + r > e.length)
        throw new RangeError("Index out of range");
    if (n < 0)
        throw new RangeError("Index out of range")
}
function Ol(e, t, n, r, i) {
    return i || Xd(e, 0, n, 4),
    qd(e, t, n, r, 23, 4),
    n + 4
}
function Ll(e, t, n, r, i) {
    return i || Xd(e, 0, n, 8),
    qd(e, t, n, r, 52, 8),
    n + 8
}
Z.prototype.slice = function(e, t) {
    var n, r = this.length;
    if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
    (t = t === void 0 ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
    t < e && (t = e),
    Z.TYPED_ARRAY_SUPPORT)
        (n = this.subarray(e, t)).__proto__ = Z.prototype;
    else {
        var i = t - e;
        n = new Z(i,void 0);
        for (var o = 0; o < i; ++o)
            n[o] = this[o + e]
    }
    return n
}
,
Z.prototype.readUIntLE = function(e, t, n) {
    e |= 0,
    t |= 0,
    n || Ie(e, t, this.length);
    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
        r += this[e + o] * i;
    return r
}
,
Z.prototype.readUIntBE = function(e, t, n) {
    e |= 0,
    t |= 0,
    n || Ie(e, t, this.length);
    for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
        r += this[e + --t] * i;
    return r
}
,
Z.prototype.readUInt8 = function(e, t) {
    return t || Ie(e, 1, this.length),
    this[e]
}
,
Z.prototype.readUInt16LE = function(e, t) {
    return t || Ie(e, 2, this.length),
    this[e] | this[e + 1] << 8
}
,
Z.prototype.readUInt16BE = function(e, t) {
    return t || Ie(e, 2, this.length),
    this[e] << 8 | this[e + 1]
}
,
Z.prototype.readUInt32LE = function(e, t) {
    return t || Ie(e, 4, this.length),
    (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
}
,
Z.prototype.readUInt32BE = function(e, t) {
    return t || Ie(e, 4, this.length),
    16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
}
,
Z.prototype.readIntLE = function(e, t, n) {
    e |= 0,
    t |= 0,
    n || Ie(e, t, this.length);
    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
        r += this[e + o] * i;
    return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)),
    r
}
,
Z.prototype.readIntBE = function(e, t, n) {
    e |= 0,
    t |= 0,
    n || Ie(e, t, this.length);
    for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
        o += this[e + --r] * i;
    return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)),
    o
}
,
Z.prototype.readInt8 = function(e, t) {
    return t || Ie(e, 1, this.length),
    128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
}
,
Z.prototype.readInt16LE = function(e, t) {
    t || Ie(e, 2, this.length);
    var n = this[e] | this[e + 1] << 8;
    return 32768 & n ? 4294901760 | n : n
}
,
Z.prototype.readInt16BE = function(e, t) {
    t || Ie(e, 2, this.length);
    var n = this[e + 1] | this[e] << 8;
    return 32768 & n ? 4294901760 | n : n
}
,
Z.prototype.readInt32LE = function(e, t) {
    return t || Ie(e, 4, this.length),
    this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
}
,
Z.prototype.readInt32BE = function(e, t) {
    return t || Ie(e, 4, this.length),
    this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
}
,
Z.prototype.readFloatLE = function(e, t) {
    return t || Ie(e, 4, this.length),
    Pi(this, e, !0, 23, 4)
}
,
Z.prototype.readFloatBE = function(e, t) {
    return t || Ie(e, 4, this.length),
    Pi(this, e, !1, 23, 4)
}
,
Z.prototype.readDoubleLE = function(e, t) {
    return t || Ie(e, 8, this.length),
    Pi(this, e, !0, 52, 8)
}
,
Z.prototype.readDoubleBE = function(e, t) {
    return t || Ie(e, 8, this.length),
    Pi(this, e, !1, 52, 8)
}
,
Z.prototype.writeUIntLE = function(e, t, n, r) {
    e = +e,
    t |= 0,
    n |= 0,
    r || Qe(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
    var i = 1
      , o = 0;
    for (this[t] = 255 & e; ++o < n && (i *= 256); )
        this[t + o] = e / i & 255;
    return t + n
}
,
Z.prototype.writeUIntBE = function(e, t, n, r) {
    e = +e,
    t |= 0,
    n |= 0,
    r || Qe(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
    var i = n - 1
      , o = 1;
    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
        this[t + i] = e / o & 255;
    return t + n
}
,
Z.prototype.writeUInt8 = function(e, t, n) {
    return e = +e,
    t |= 0,
    n || Qe(this, e, t, 1, 255, 0),
    Z.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
    this[t] = 255 & e,
    t + 1
}
,
Z.prototype.writeUInt16LE = function(e, t, n) {
    return e = +e,
    t |= 0,
    n || Qe(this, e, t, 2, 65535, 0),
    Z.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
    this[t + 1] = e >>> 8) : Ii(this, e, t, !0),
    t + 2
}
,
Z.prototype.writeUInt16BE = function(e, t, n) {
    return e = +e,
    t |= 0,
    n || Qe(this, e, t, 2, 65535, 0),
    Z.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
    this[t + 1] = 255 & e) : Ii(this, e, t, !1),
    t + 2
}
,
Z.prototype.writeUInt32LE = function(e, t, n) {
    return e = +e,
    t |= 0,
    n || Qe(this, e, t, 4, 4294967295, 0),
    Z.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
    this[t + 2] = e >>> 16,
    this[t + 1] = e >>> 8,
    this[t] = 255 & e) : Ni(this, e, t, !0),
    t + 4
}
,
Z.prototype.writeUInt32BE = function(e, t, n) {
    return e = +e,
    t |= 0,
    n || Qe(this, e, t, 4, 4294967295, 0),
    Z.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
    this[t + 1] = e >>> 16,
    this[t + 2] = e >>> 8,
    this[t + 3] = 255 & e) : Ni(this, e, t, !1),
    t + 4
}
,
Z.prototype.writeIntLE = function(e, t, n, r) {
    if (e = +e,
    t |= 0,
    !r) {
        var i = Math.pow(2, 8 * n - 1);
        Qe(this, e, t, n, i - 1, -i)
    }
    var o = 0
      , s = 1
      , a = 0;
    for (this[t] = 255 & e; ++o < n && (s *= 256); )
        e < 0 && a === 0 && this[t + o - 1] !== 0 && (a = 1),
        this[t + o] = (e / s >> 0) - a & 255;
    return t + n
}
,
Z.prototype.writeIntBE = function(e, t, n, r) {
    if (e = +e,
    t |= 0,
    !r) {
        var i = Math.pow(2, 8 * n - 1);
        Qe(this, e, t, n, i - 1, -i)
    }
    var o = n - 1
      , s = 1
      , a = 0;
    for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
        e < 0 && a === 0 && this[t + o + 1] !== 0 && (a = 1),
        this[t + o] = (e / s >> 0) - a & 255;
    return t + n
}
,
Z.prototype.writeInt8 = function(e, t, n) {
    return e = +e,
    t |= 0,
    n || Qe(this, e, t, 1, 127, -128),
    Z.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
    e < 0 && (e = 255 + e + 1),
    this[t] = 255 & e,
    t + 1
}
,
Z.prototype.writeInt16LE = function(e, t, n) {
    return e = +e,
    t |= 0,
    n || Qe(this, e, t, 2, 32767, -32768),
    Z.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
    this[t + 1] = e >>> 8) : Ii(this, e, t, !0),
    t + 2
}
,
Z.prototype.writeInt16BE = function(e, t, n) {
    return e = +e,
    t |= 0,
    n || Qe(this, e, t, 2, 32767, -32768),
    Z.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
    this[t + 1] = 255 & e) : Ii(this, e, t, !1),
    t + 2
}
,
Z.prototype.writeInt32LE = function(e, t, n) {
    return e = +e,
    t |= 0,
    n || Qe(this, e, t, 4, 2147483647, -2147483648),
    Z.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
    this[t + 1] = e >>> 8,
    this[t + 2] = e >>> 16,
    this[t + 3] = e >>> 24) : Ni(this, e, t, !0),
    t + 4
}
,
Z.prototype.writeInt32BE = function(e, t, n) {
    return e = +e,
    t |= 0,
    n || Qe(this, e, t, 4, 2147483647, -2147483648),
    e < 0 && (e = 4294967295 + e + 1),
    Z.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
    this[t + 1] = e >>> 16,
    this[t + 2] = e >>> 8,
    this[t + 3] = 255 & e) : Ni(this, e, t, !1),
    t + 4
}
,
Z.prototype.writeFloatLE = function(e, t, n) {
    return Ol(this, e, t, !0, n)
}
,
Z.prototype.writeFloatBE = function(e, t, n) {
    return Ol(this, e, t, !1, n)
}
,
Z.prototype.writeDoubleLE = function(e, t, n) {
    return Ll(this, e, t, !0, n)
}
,
Z.prototype.writeDoubleBE = function(e, t, n) {
    return Ll(this, e, t, !1, n)
}
,
Z.prototype.copy = function(e, t, n, r) {
    if (n || (n = 0),
    r || r === 0 || (r = this.length),
    t >= e.length && (t = e.length),
    t || (t = 0),
    r > 0 && r < n && (r = n),
    r === n || e.length === 0 || this.length === 0)
        return 0;
    if (t < 0)
        throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length)
        throw new RangeError("sourceStart out of bounds");
    if (r < 0)
        throw new RangeError("sourceEnd out of bounds");
    r > this.length && (r = this.length),
    e.length - t < r - n && (r = e.length - t + n);
    var i, o = r - n;
    if (this === e && n < t && t < r)
        for (i = o - 1; i >= 0; --i)
            e[i + t] = this[i + n];
    else if (o < 1e3 || !Z.TYPED_ARRAY_SUPPORT)
        for (i = 0; i < o; ++i)
            e[i + t] = this[i + n];
    else
        Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
    return o
}
,
Z.prototype.fill = function(e, t, n, r) {
    if (typeof e == "string") {
        if (typeof t == "string" ? (r = t,
        t = 0,
        n = this.length) : typeof n == "string" && (r = n,
        n = this.length),
        e.length === 1) {
            var i = e.charCodeAt(0);
            i < 256 && (e = i)
        }
        if (r !== void 0 && typeof r != "string")
            throw new TypeError("encoding must be a string");
        if (typeof r == "string" && !Z.isEncoding(r))
            throw new TypeError("Unknown encoding: " + r)
    } else
        typeof e == "number" && (e &= 255);
    if (t < 0 || this.length < t || this.length < n)
        throw new RangeError("Out of range index");
    if (n <= t)
        return this;
    var o;
    if (t >>>= 0,
    n = n === void 0 ? this.length : n >>> 0,
    e || (e = 0),
    typeof e == "number")
        for (o = t; o < n; ++o)
            this[o] = e;
    else {
        var s = Lt(e) ? e : bo(new Z(e,r).toString())
          , a = s.length;
        for (o = 0; o < n - t; ++o)
            this[o + t] = s[o % a]
    }
    return this
}
;
var Mp = /[^+\/0-9A-Za-z-_]/g;
function Tp(e) {
    return e < 16 ? "0" + e.toString(16) : e.toString(16)
}
function bo(e, t) {
    var n;
    t = t || 1 / 0;
    for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
        if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
            if (!i) {
                if (n > 56319) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue
                }
                if (s + 1 === r) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue
                }
                i = n;
                continue
            }
            if (n < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189),
                i = n;
                continue
            }
            n = 65536 + (i - 55296 << 10 | n - 56320)
        } else
            i && (t -= 3) > -1 && o.push(239, 191, 189);
        if (i = null,
        n < 128) {
            if ((t -= 1) < 0)
                break;
            o.push(n)
        } else if (n < 2048) {
            if ((t -= 2) < 0)
                break;
            o.push(n >> 6 | 192, 63 & n | 128)
        } else if (n < 65536) {
            if ((t -= 3) < 0)
                break;
            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
        } else {
            if (!(n < 1114112))
                throw new Error("Invalid code point");
            if ((t -= 4) < 0)
                break;
            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
        }
    }
    return o
}
function Qd(e) {
    return function(t) {
        var n, r, i, o, s, a;
        rc || zd();
        var c = t.length;
        if (c % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        s = t[c - 2] === "=" ? 2 : t[c - 1] === "=" ? 1 : 0,
        a = new fp(3 * c / 4 - s),
        i = s > 0 ? c - 4 : c;
        var l = 0;
        for (n = 0,
        r = 0; n < i; n += 4,
        r += 3)
            o = vt[t.charCodeAt(n)] << 18 | vt[t.charCodeAt(n + 1)] << 12 | vt[t.charCodeAt(n + 2)] << 6 | vt[t.charCodeAt(n + 3)],
            a[l++] = o >> 16 & 255,
            a[l++] = o >> 8 & 255,
            a[l++] = 255 & o;
        return s === 2 ? (o = vt[t.charCodeAt(n)] << 2 | vt[t.charCodeAt(n + 1)] >> 4,
        a[l++] = 255 & o) : s === 1 && (o = vt[t.charCodeAt(n)] << 10 | vt[t.charCodeAt(n + 1)] << 4 | vt[t.charCodeAt(n + 2)] >> 2,
        a[l++] = o >> 8 & 255,
        a[l++] = 255 & o),
        a
    }(function(t) {
        if ((t = function(n) {
            return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
        }(t).replace(Mp, "")).length < 2)
            return "";
        for (; t.length % 4 != 0; )
            t += "=";
        return t
    }(e))
}
function Xo(e, t, n, r) {
    for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
        t[i + n] = e[i];
    return i
}
function eh(e) {
    return e != null && (!!e._isBuffer || Pl(e) || function(t) {
        return typeof t.readFloatLE == "function" && typeof t.slice == "function" && Pl(t.slice(0, 0))
    }(e))
}
function Pl(e) {
    return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}
var Rp = Object.freeze({
    __proto__: null,
    Buffer: Z,
    INSPECT_MAX_BYTES: 50,
    SlowBuffer: function(e) {
        return +e != e && (e = 0),
        Z.alloc(+e)
    },
    isBuffer: eh,
    kMaxLength: gp
})
  , Et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qo(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function yi(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var ir = {}
  , ht = {}
  , ze = {};
function wo(e) {
    if (!Number.isSafeInteger(e) || e < 0)
        throw new Error(`positive integer expected, not ${e}`)
}
function th(e) {
    if (typeof e != "boolean")
        throw new Error(`boolean expected, not ${e}`)
}
function nh(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array"
}
function oc(e, ...t) {
    if (!nh(e))
        throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length))
        throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
}
function rh(e) {
    if (typeof e != "function" || typeof e.create != "function")
        throw new Error("hash must be wrapped by utils.wrapConstructor");
    wo(e.outputLen),
    wo(e.blockLen)
}
function ih(e, t=!0) {
    if (e.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (t && e.finished)
        throw new Error("Hash#digest() has already been called")
}
function oh(e, t) {
    oc(e);
    let n = t.outputLen;
    if (e.length < n)
        throw new Error(`digestInto() expects output buffer of length at least ${n}`)
}
Object.defineProperty(ze, "__esModule", {
    value: !0
}),
ze.isBytes = nh,
ze.number = wo,
ze.bool = th,
ze.bytes = oc,
ze.hash = rh,
ze.exists = ih,
ze.output = oh;
var Op = {
    number: wo,
    bool: th,
    bytes: oc,
    hash: rh,
    exists: ih,
    output: oh
};
ze.default = Op,
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.wrapCipher = e.Hash = e.nextTick = e.isLE = e.createView = e.u32 = e.u16 = e.u8 = void 0,
    e.bytesToHex = r,
    e.hexToBytes = s,
    e.hexToNumber = a,
    e.bytesToNumberBE = function(d) {
        return a(r(d))
    }
    ,
    e.numberToBytesBE = function(d, h) {
        return s(d.toString(16).padStart(2 * h, "0"))
    }
    ,
    e.asyncLoop = function(d, h, f) {
        return we(this, null, function*() {
            let g = Date.now();
            for (let m = 0; m < d; m++) {
                f(m);
                let v = Date.now() - g;
                v >= 0 && v < h || (yield(0,
                e.nextTick)(),
                g += v)
            }
        })
    }
    ,
    e.utf8ToBytes = c,
    e.bytesToUtf8 = function(d) {
        return new TextDecoder().decode(d)
    }
    ,
    e.toBytes = function(d) {
        if (typeof d == "string")
            d = c(d);
        else {
            if (!(0,
            t.isBytes)(d))
                throw new Error("Uint8Array expected, got " + typeof d);
            d = u(d)
        }
        return d
    }
    ,
    e.concatBytes = function(...d) {
        let h = 0;
        for (let g = 0; g < d.length; g++) {
            let m = d[g];
            (0,
            t.bytes)(m),
            h += m.length
        }
        let f = new Uint8Array(h);
        for (let g = 0, m = 0; g < d.length; g++) {
            let v = d[g];
            f.set(v, m),
            m += v.length
        }
        return f
    }
    ,
    e.checkOpts = function(d, h) {
        if (h == null || typeof h != "object")
            throw new Error("options must be defined");
        return Object.assign(d, h)
    }
    ,
    e.equalBytes = function(d, h) {
        if (d.length !== h.length)
            return !1;
        let f = 0;
        for (let g = 0; g < d.length; g++)
            f |= d[g] ^ h[g];
        return f === 0
    }
    ,
    e.setBigUint64 = l,
    e.u64Lengths = function(d, h) {
        let f = new Uint8Array(16)
          , g = (0,
        e.createView)(f);
        return l(g, 0, BigInt(h ? h.length : 0), !0),
        l(g, 8, BigInt(d.length), !0),
        f
    }
    ,
    e.isAligned32 = function(d) {
        return d.byteOffset % 4 == 0
    }
    ,
    e.copyBytes = u,
    e.clean = function(...d) {
        for (let h = 0; h < d.length; h++)
            d[h].fill(0)
    }
    ;
    let t = ze;
    if (e.u8 = d => new Uint8Array(d.buffer,d.byteOffset,d.byteLength),
    e.u16 = d => new Uint16Array(d.buffer,d.byteOffset,Math.floor(d.byteLength / 2)),
    e.u32 = d => new Uint32Array(d.buffer,d.byteOffset,Math.floor(d.byteLength / 4)),
    e.createView = d => new DataView(d.buffer,d.byteOffset,d.byteLength),
    e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68,
    !e.isLE)
        throw new Error("Non little-endian hardware is not supported");
    let n = Array.from({
        length: 256
    }, (d, h) => h.toString(16).padStart(2, "0"));
    function r(d) {
        (0,
        t.bytes)(d);
        let h = "";
        for (let f = 0; f < d.length; f++)
            h += n[d[f]];
        return h
    }
    let i = {
        _0: 48,
        _9: 57,
        _A: 65,
        _F: 70,
        _a: 97,
        _f: 102
    };
    function o(d) {
        return d >= i._0 && d <= i._9 ? d - i._0 : d >= i._A && d <= i._F ? d - (i._A - 10) : d >= i._a && d <= i._f ? d - (i._a - 10) : void 0
    }
    function s(d) {
        if (typeof d != "string")
            throw new Error("hex string expected, got " + typeof d);
        let h = d.length
          , f = h / 2;
        if (h % 2)
            throw new Error("padded hex string expected, got unpadded hex of length " + h);
        let g = new Uint8Array(f);
        for (let m = 0, v = 0; m < f; m++,
        v += 2) {
            let p = o(d.charCodeAt(v))
              , S = o(d.charCodeAt(v + 1));
            if (p === void 0 || S === void 0) {
                let E = d[v] + d[v + 1];
                throw new Error('hex string expected, got non-hex character "' + E + '" at index ' + v)
            }
            g[m] = 16 * p + S
        }
        return g
    }
    function a(d) {
        if (typeof d != "string")
            throw new Error("hex string expected, got " + typeof d);
        return BigInt(d === "" ? "0" : `0x${d}`)
    }
    function c(d) {
        if (typeof d != "string")
            throw new Error("string expected, got " + typeof d);
        return new Uint8Array(new TextEncoder().encode(d))
    }
    e.nextTick = () => we(this, null, function*() {}),
    e.Hash = class {
    }
    ;
    function l(d, h, f, g) {
        if (typeof d.setBigUint64 == "function")
            return d.setBigUint64(h, f, g);
        let m = BigInt(32)
          , v = BigInt(4294967295)
          , p = Number(f >> m & v)
          , S = Number(f & v)
          , E = g ? 4 : 0
          , N = g ? 0 : 4;
        d.setUint32(h + E, p, g),
        d.setUint32(h + N, S, g)
    }
    function u(d) {
        return Uint8Array.from(d)
    }
    e.wrapCipher = (d, h) => (Object.assign(h, d),
    h)
}(ht);
var ni = {}
  , Ne = {};
Object.defineProperty(Ne, "__esModule", {
    value: !0
}),
Ne.AEAD_TAG_LENGTH = Ne.XCHACHA20_NONCE_LENGTH = Ne.CURVE25519_PUBLIC_KEY_SIZE = Ne.ETH_PUBLIC_KEY_SIZE = Ne.UNCOMPRESSED_PUBLIC_KEY_SIZE = Ne.COMPRESSED_PUBLIC_KEY_SIZE = Ne.SECRET_KEY_LENGTH = void 0,
Ne.SECRET_KEY_LENGTH = 32,
Ne.COMPRESSED_PUBLIC_KEY_SIZE = 33,
Ne.UNCOMPRESSED_PUBLIC_KEY_SIZE = 65,
Ne.ETH_PUBLIC_KEY_SIZE = 64,
Ne.CURVE25519_PUBLIC_KEY_SIZE = 32,
Ne.XCHACHA20_NONCE_LENGTH = 24,
Ne.AEAD_TAG_LENGTH = 16,
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.ephemeralKeySize = e.symmetricNonceLength = e.symmetricAlgorithm = e.isHkdfKeyCompressed = e.isEphemeralKeyCompressed = e.ellipticCurve = e.ECIES_CONFIG = void 0;
    var t = Ne
      , n = function() {
        this.ellipticCurve = "secp256k1",
        this.isEphemeralKeyCompressed = !1,
        this.isHkdfKeyCompressed = !1,
        this.symmetricAlgorithm = "aes-256-gcm",
        this.symmetricNonceLength = 16
    };
    e.ECIES_CONFIG = new n,
    e.ellipticCurve = function() {
        return e.ECIES_CONFIG.ellipticCurve
    }
    ,
    e.isEphemeralKeyCompressed = function() {
        return e.ECIES_CONFIG.isEphemeralKeyCompressed
    }
    ,
    e.isHkdfKeyCompressed = function() {
        return e.ECIES_CONFIG.isHkdfKeyCompressed
    }
    ,
    e.symmetricAlgorithm = function() {
        return e.ECIES_CONFIG.symmetricAlgorithm
    }
    ,
    e.symmetricNonceLength = function() {
        return e.ECIES_CONFIG.symmetricNonceLength
    }
    ,
    e.ephemeralKeySize = function() {
        var r = {
            secp256k1: e.ECIES_CONFIG.isEphemeralKeyCompressed ? t.COMPRESSED_PUBLIC_KEY_SIZE : t.UNCOMPRESSED_PUBLIC_KEY_SIZE,
            x25519: t.CURVE25519_PUBLIC_KEY_SIZE,
            ed25519: t.CURVE25519_PUBLIC_KEY_SIZE
        };
        if (e.ECIES_CONFIG.ellipticCurve in r)
            return r[e.ECIES_CONFIG.ellipticCurve];
        throw new Error("Not implemented")
    }
}(ni);
var As = {}
  , Eo = {}
  , es = {}
  , sh = {}
  , sc = {}
  , Bi = {};
Object.defineProperty(Bi, "__esModule", {
    value: !0
}),
Bi.crypto = void 0,
Bi.crypto = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0,
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.gcm = e.ctr = e.cbc = e.utils = void 0,
    e.randomBytes = i,
    e.getWebcryptoSubtle = o,
    e.managedNonce = function(l) {
        return (0,
        n.number)(l.nonceLength),
        (u, ...d) => ({
            encrypt(h, ...f) {
                let {nonceLength: g} = l
                  , m = i(g)
                  , v = l(u, m, ...d).encrypt(h, ...f)
                  , p = (0,
                r.concatBytes)(m, v);
                return v.fill(0),
                p
            },
            decrypt(h, ...f) {
                let {nonceLength: g} = l
                  , m = h.subarray(0, g)
                  , v = h.subarray(g);
                return l(u, m, ...d).decrypt(v, ...f)
            }
        })
    }
    ;
    let t = Bi
      , n = ze
      , r = ht;
    function i(l=32) {
        if (t.crypto && typeof t.crypto.getRandomValues == "function")
            return t.crypto.getRandomValues(new Uint8Array(l));
        if (t.crypto && typeof t.crypto.randomBytes == "function")
            return t.crypto.randomBytes(l);
        throw new Error("crypto.getRandomValues must be defined")
    }
    function o() {
        if (t.crypto && typeof t.crypto.subtle == "object" && t.crypto.subtle != null)
            return t.crypto.subtle;
        throw new Error("crypto.subtle must be defined")
    }
    e.utils = {
        encrypt(l, u, d, h) {
            return we(this, null, function*() {
                let f = o()
                  , g = yield f.importKey("raw", l, u, !0, ["encrypt"])
                  , m = yield f.encrypt(d, g, h);
                return new Uint8Array(m)
            })
        },
        decrypt(l, u, d, h) {
            return we(this, null, function*() {
                let f = o()
                  , g = yield f.importKey("raw", l, u, !0, ["decrypt"])
                  , m = yield f.decrypt(d, g, h);
                return new Uint8Array(m)
            })
        }
    };
    let s = {
        CBC: "AES-CBC",
        CTR: "AES-CTR",
        GCM: "AES-GCM"
    };
    function a(l) {
        return (u, d, h) => {
            (0,
            n.bytes)(u),
            (0,
            n.bytes)(d);
            let f = {
                name: l,
                length: 8 * u.length
            }
              , g = function(m, v, p) {
                if (m === s.CBC)
                    return {
                        name: s.CBC,
                        iv: v
                    };
                if (m === s.CTR)
                    return {
                        name: s.CTR,
                        counter: v,
                        length: 64
                    };
                if (m === s.GCM)
                    return p ? {
                        name: s.GCM,
                        iv: v,
                        additionalData: p
                    } : {
                        name: s.GCM,
                        iv: v
                    };
                throw new Error("unknown aes block mode")
            }(l, d, h);
            return {
                encrypt: m => ((0,
                n.bytes)(m),
                e.utils.encrypt(u, f, g, m)),
                decrypt: m => ((0,
                n.bytes)(m),
                e.utils.decrypt(u, f, g, m))
            }
        }
    }
    e.cbc = a(s.CBC),
    e.ctr = a(s.CTR),
    e.gcm = a(s.GCM)
}(sc);
var ah = {}
  , Be = {}
  , Jt = {}
  , lt = {};
function _o(e) {
    if (!Number.isSafeInteger(e) || e < 0)
        throw new Error(`positive integer expected, not ${e}`)
}
function ch(e) {
    if (typeof e != "boolean")
        throw new Error(`boolean expected, not ${e}`)
}
function lh(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array"
}
function ac(e, ...t) {
    if (!lh(e))
        throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length))
        throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
}
function uh(e) {
    if (typeof e != "function" || typeof e.create != "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
    _o(e.outputLen),
    _o(e.blockLen)
}
function dh(e, t=!0) {
    if (e.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (t && e.finished)
        throw new Error("Hash#digest() has already been called")
}
function hh(e, t) {
    ac(e);
    let n = t.outputLen;
    if (e.length < n)
        throw new Error(`digestInto() expects output buffer of length at least ${n}`)
}
Object.defineProperty(lt, "__esModule", {
    value: !0
}),
lt.isBytes = lh,
lt.number = _o,
lt.bool = ch,
lt.bytes = ac,
lt.hash = uh,
lt.exists = dh,
lt.output = hh;
var Lp = {
    number: _o,
    bool: ch,
    bytes: ac,
    hash: uh,
    exists: dh,
    output: hh
};
lt.default = Lp;
var nn = {}
  , Di = {};
Object.defineProperty(Di, "__esModule", {
    value: !0
}),
Di.crypto = void 0,
Di.crypto = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0,
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.Hash = e.nextTick = e.byteSwapIfBE = e.byteSwap = e.isLE = e.rotl = e.rotr = e.createView = e.u32 = e.u8 = void 0,
    e.isBytes = function(l) {
        return l instanceof Uint8Array || l != null && typeof l == "object" && l.constructor.name === "Uint8Array"
    }
    ,
    e.byteSwap32 = function(l) {
        for (let u = 0; u < l.length; u++)
            l[u] = (0,
            e.byteSwap)(l[u])
    }
    ,
    e.bytesToHex = function(l) {
        (0,
        n.bytes)(l);
        let u = "";
        for (let d = 0; d < l.length; d++)
            u += r[l[d]];
        return u
    }
    ,
    e.hexToBytes = function(l) {
        if (typeof l != "string")
            throw new Error("hex string expected, got " + typeof l);
        let u = l.length
          , d = u / 2;
        if (u % 2)
            throw new Error("padded hex string expected, got unpadded hex of length " + u);
        let h = new Uint8Array(d);
        for (let f = 0, g = 0; f < d; f++,
        g += 2) {
            let m = o(l.charCodeAt(g))
              , v = o(l.charCodeAt(g + 1));
            if (m === void 0 || v === void 0) {
                let p = l[g] + l[g + 1];
                throw new Error('hex string expected, got non-hex character "' + p + '" at index ' + g)
            }
            h[f] = 16 * m + v
        }
        return h
    }
    ,
    e.asyncLoop = function(l, u, d) {
        return we(this, null, function*() {
            let h = Date.now();
            for (let f = 0; f < l; f++) {
                d(f);
                let g = Date.now() - h;
                g >= 0 && g < u || (yield(0,
                e.nextTick)(),
                h += g)
            }
        })
    }
    ,
    e.utf8ToBytes = s,
    e.toBytes = a,
    e.concatBytes = function(...l) {
        let u = 0;
        for (let h = 0; h < l.length; h++) {
            let f = l[h];
            (0,
            n.bytes)(f),
            u += f.length
        }
        let d = new Uint8Array(u);
        for (let h = 0, f = 0; h < l.length; h++) {
            let g = l[h];
            d.set(g, f),
            f += g.length
        }
        return d
    }
    ,
    e.checkOpts = function(l, u) {
        if (u !== void 0 && c.call(u) !== "[object Object]")
            throw new Error("Options should be object or undefined");
        return Object.assign(l, u)
    }
    ,
    e.wrapConstructor = function(l) {
        let u = h => l().update(a(h)).digest()
          , d = l();
        return u.outputLen = d.outputLen,
        u.blockLen = d.blockLen,
        u.create = () => l(),
        u
    }
    ,
    e.wrapConstructorWithOpts = function(l) {
        let u = (h, f) => l(f).update(a(h)).digest()
          , d = l({});
        return u.outputLen = d.outputLen,
        u.blockLen = d.blockLen,
        u.create = h => l(h),
        u
    }
    ,
    e.wrapXOFConstructorWithOpts = function(l) {
        let u = (h, f) => l(f).update(a(h)).digest()
          , d = l({});
        return u.outputLen = d.outputLen,
        u.blockLen = d.blockLen,
        u.create = h => l(h),
        u
    }
    ,
    e.randomBytes = function(l=32) {
        if (t.crypto && typeof t.crypto.getRandomValues == "function")
            return t.crypto.getRandomValues(new Uint8Array(l));
        if (t.crypto && typeof t.crypto.randomBytes == "function")
            return t.crypto.randomBytes(l);
        throw new Error("crypto.getRandomValues must be defined")
    }
    ;
    let t = Di
      , n = lt;
    e.u8 = l => new Uint8Array(l.buffer,l.byteOffset,l.byteLength),
    e.u32 = l => new Uint32Array(l.buffer,l.byteOffset,Math.floor(l.byteLength / 4)),
    e.createView = l => new DataView(l.buffer,l.byteOffset,l.byteLength),
    e.rotr = (l, u) => l << 32 - u | l >>> u,
    e.rotl = (l, u) => l << u | l >>> 32 - u >>> 0,
    e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68,
    e.byteSwap = l => l << 24 & 4278190080 | l << 8 & 16711680 | l >>> 8 & 65280 | l >>> 24 & 255,
    e.byteSwapIfBE = e.isLE ? l => l : l => (0,
    e.byteSwap)(l);
    let r = Array.from({
        length: 256
    }, (l, u) => u.toString(16).padStart(2, "0"))
      , i = {
        _0: 48,
        _9: 57,
        _A: 65,
        _F: 70,
        _a: 97,
        _f: 102
    };
    function o(l) {
        return l >= i._0 && l <= i._9 ? l - i._0 : l >= i._A && l <= i._F ? l - (i._A - 10) : l >= i._a && l <= i._f ? l - (i._a - 10) : void 0
    }
    function s(l) {
        if (typeof l != "string")
            throw new Error("utf8ToBytes expected string, got " + typeof l);
        return new Uint8Array(new TextEncoder().encode(l))
    }
    function a(l) {
        return typeof l == "string" && (l = s(l)),
        (0,
        n.bytes)(l),
        l
    }
    e.nextTick = () => we(this, null, function*() {}),
    e.Hash = class {
        clone() {
            return this._cloneInto()
        }
    }
    ;
    let c = {}.toString
}(nn),
Object.defineProperty(Jt, "__esModule", {
    value: !0
}),
Jt.HashMD = Jt.Maj = Jt.Chi = void 0;
var Ms = lt
  , Dr = nn;
Jt.Chi = (e, t, n) => e & t ^ ~e & n;
Jt.Maj = (e, t, n) => e & t ^ e & n ^ t & n;
Jt.HashMD = class extends Dr.Hash {
    constructor(e, t, n, r) {
        super(),
        this.blockLen = e,
        this.outputLen = t,
        this.padOffset = n,
        this.isLE = r,
        this.finished = !1,
        this.length = 0,
        this.pos = 0,
        this.destroyed = !1,
        this.buffer = new Uint8Array(e),
        this.view = (0,
        Dr.createView)(this.buffer)
    }
    update(e) {
        (0,
        Ms.exists)(this);
        let {view: t, buffer: n, blockLen: r} = this
          , i = (e = (0,
        Dr.toBytes)(e)).length;
        for (let o = 0; o < i; ) {
            let s = Math.min(r - this.pos, i - o);
            if (s !== r)
                n.set(e.subarray(o, o + s), this.pos),
                this.pos += s,
                o += s,
                this.pos === r && (this.process(t, 0),
                this.pos = 0);
            else {
                let a = (0,
                Dr.createView)(e);
                for (; r <= i - o; o += r)
                    this.process(a, o)
            }
        }
        return this.length += e.length,
        this.roundClean(),
        this
    }
    digestInto(e) {
        (0,
        Ms.exists)(this),
        (0,
        Ms.output)(e, this),
        this.finished = !0;
        let {buffer: t, view: n, blockLen: r, isLE: i} = this
          , {pos: o} = this;
        t[o++] = 128,
        this.buffer.subarray(o).fill(0),
        this.padOffset > r - o && (this.process(n, 0),
        o = 0);
        for (let u = o; u < r; u++)
            t[u] = 0;
        (function(u, d, h, f) {
            if (typeof u.setBigUint64 == "function")
                return u.setBigUint64(d, h, f);
            let g = BigInt(32)
              , m = BigInt(4294967295)
              , v = Number(h >> g & m)
              , p = Number(h & m)
              , S = f ? 4 : 0
              , E = f ? 0 : 4;
            u.setUint32(d + S, v, f),
            u.setUint32(d + E, p, f)
        }
        )(n, r - 8, BigInt(8 * this.length), i),
        this.process(n, 0);
        let s = (0,
        Dr.createView)(e)
          , a = this.outputLen;
        if (a % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
        let c = a / 4
          , l = this.get();
        if (c > l.length)
            throw new Error("_sha2: outputLen bigger than state");
        for (let u = 0; u < c; u++)
            s.setUint32(4 * u, l[u], i)
    }
    digest() {
        let {buffer: e, outputLen: t} = this;
        this.digestInto(e);
        let n = e.slice(0, t);
        return this.destroy(),
        n
    }
    _cloneInto(e) {
        e || (e = new this.constructor),
        e.set(...this.get());
        let {blockLen: t, buffer: n, length: r, finished: i, destroyed: o, pos: s} = this;
        return e.length = r,
        e.pos = s,
        e.finished = i,
        e.destroyed = o,
        r % t && e.buffer.set(n),
        e
    }
}
;
var he = {};
Object.defineProperty(he, "__esModule", {
    value: !0
}),
he.add5L = he.add5H = he.add4H = he.add4L = he.add3H = he.add3L = he.rotlBL = he.rotlBH = he.rotlSL = he.rotlSH = he.rotr32L = he.rotr32H = he.rotrBL = he.rotrBH = he.rotrSL = he.rotrSH = he.shrSL = he.shrSH = he.toBig = void 0,
he.fromBig = cc,
he.split = fh,
he.add = Ah;
var $i = BigInt(2 ** 32 - 1)
  , ha = BigInt(32);
function cc(e, t=!1) {
    return t ? {
        h: Number(e & $i),
        l: Number(e >> ha & $i)
    } : {
        h: 0 | Number(e >> ha & $i),
        l: 0 | Number(e & $i)
    }
}
function fh(e, t=!1) {
    let n = new Uint32Array(e.length)
      , r = new Uint32Array(e.length);
    for (let i = 0; i < e.length; i++) {
        let {h: o, l: s} = cc(e[i], t);
        [n[i],r[i]] = [o, s]
    }
    return [n, r]
}
var ph = (e, t) => BigInt(e >>> 0) << ha | BigInt(t >>> 0);
he.toBig = ph;
var mh = (e, t, n) => e >>> n;
he.shrSH = mh;
var gh = (e, t, n) => e << 32 - n | t >>> n;
he.shrSL = gh;
var yh = (e, t, n) => e >>> n | t << 32 - n;
he.rotrSH = yh;
var vh = (e, t, n) => e << 32 - n | t >>> n;
he.rotrSL = vh;
var bh = (e, t, n) => e << 64 - n | t >>> n - 32;
he.rotrBH = bh;
var wh = (e, t, n) => e >>> n - 32 | t << 64 - n;
he.rotrBL = wh;
var Eh = (e, t) => t;
he.rotr32H = Eh;
var _h = (e, t) => e;
he.rotr32L = _h;
var Ch = (e, t, n) => e << n | t >>> 32 - n;
he.rotlSH = Ch;
var Sh = (e, t, n) => t << n | e >>> 32 - n;
he.rotlSL = Sh;
var kh = (e, t, n) => t << n - 32 | e >>> 64 - n;
he.rotlBH = kh;
var xh = (e, t, n) => e << n - 32 | t >>> 64 - n;
function Ah(e, t, n, r) {
    let i = (t >>> 0) + (r >>> 0);
    return {
        h: e + n + (i / 2 ** 32 | 0) | 0,
        l: 0 | i
    }
}
he.rotlBL = xh;
var Mh = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
he.add3L = Mh;
var Th = (e, t, n, r) => t + n + r + (e / 2 ** 32 | 0) | 0;
he.add3H = Th;
var Rh = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0);
he.add4L = Rh;
var Oh = (e, t, n, r, i) => t + n + r + i + (e / 2 ** 32 | 0) | 0;
he.add4H = Oh;
var Lh = (e, t, n, r, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0);
he.add5L = Lh;
var Ph = (e, t, n, r, i, o) => t + n + r + i + o + (e / 2 ** 32 | 0) | 0;
he.add5H = Ph;
var Pp = {
    fromBig: cc,
    split: fh,
    toBig: ph,
    shrSH: mh,
    shrSL: gh,
    rotrSH: yh,
    rotrSL: vh,
    rotrBH: bh,
    rotrBL: wh,
    rotr32H: Eh,
    rotr32L: _h,
    rotlSH: Ch,
    rotlSL: Sh,
    rotlBH: kh,
    rotlBL: xh,
    add: Ah,
    add3L: Mh,
    add3H: Th,
    add4L: Rh,
    add4H: Oh,
    add5H: Ph,
    add5L: Lh
};
he.default = Pp,
Object.defineProperty(Be, "__esModule", {
    value: !0
}),
Be.sha384 = Be.sha512_256 = Be.sha512_224 = Be.sha512 = Be.SHA384 = Be.SHA512_256 = Be.SHA512_224 = Be.SHA512 = void 0;
var Ip = Jt
  , fe = he
  , ji = nn
  , [Np,Bp] = fe.default.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(e => BigInt(e)))
  , an = new Uint32Array(80)
  , cn = new Uint32Array(80)
  , Kn = class extends Ip.HashMD {
    constructor() {
        super(128, 64, 16, !1),
        this.Ah = 1779033703,
        this.Al = -205731576,
        this.Bh = -1150833019,
        this.Bl = -2067093701,
        this.Ch = 1013904242,
        this.Cl = -23791573,
        this.Dh = -1521486534,
        this.Dl = 1595750129,
        this.Eh = 1359893119,
        this.El = -1377402159,
        this.Fh = -1694144372,
        this.Fl = 725511199,
        this.Gh = 528734635,
        this.Gl = -79577749,
        this.Hh = 1541459225,
        this.Hl = 327033209
    }
    get() {
        let {Ah: t, Al: n, Bh: r, Bl: i, Ch: o, Cl: s, Dh: a, Dl: c, Eh: l, El: u, Fh: d, Fl: h, Gh: f, Gl: g, Hh: m, Hl: v} = this;
        return [t, n, r, i, o, s, a, c, l, u, d, h, f, g, m, v]
    }
    set(t, n, r, i, o, s, a, c, l, u, d, h, f, g, m, v) {
        this.Ah = 0 | t,
        this.Al = 0 | n,
        this.Bh = 0 | r,
        this.Bl = 0 | i,
        this.Ch = 0 | o,
        this.Cl = 0 | s,
        this.Dh = 0 | a,
        this.Dl = 0 | c,
        this.Eh = 0 | l,
        this.El = 0 | u,
        this.Fh = 0 | d,
        this.Fl = 0 | h,
        this.Gh = 0 | f,
        this.Gl = 0 | g,
        this.Hh = 0 | m,
        this.Hl = 0 | v
    }
    process(t, n) {
        for (let E = 0; E < 16; E++,
        n += 4)
            an[E] = t.getUint32(n),
            cn[E] = t.getUint32(n += 4);
        for (let E = 16; E < 80; E++) {
            let N = 0 | an[E - 15]
              , I = 0 | cn[E - 15]
              , F = fe.default.rotrSH(N, I, 1) ^ fe.default.rotrSH(N, I, 8) ^ fe.default.shrSH(N, I, 7)
              , q = fe.default.rotrSL(N, I, 1) ^ fe.default.rotrSL(N, I, 8) ^ fe.default.shrSL(N, I, 7)
              , z = 0 | an[E - 2]
              , G = 0 | cn[E - 2]
              , U = fe.default.rotrSH(z, G, 19) ^ fe.default.rotrBH(z, G, 61) ^ fe.default.shrSH(z, G, 6)
              , P = fe.default.rotrSL(z, G, 19) ^ fe.default.rotrBL(z, G, 61) ^ fe.default.shrSL(z, G, 6)
              , L = fe.default.add4L(q, P, cn[E - 7], cn[E - 16])
              , M = fe.default.add4H(L, F, U, an[E - 7], an[E - 16]);
            an[E] = 0 | M,
            cn[E] = 0 | L
        }
        let {Ah: r, Al: i, Bh: o, Bl: s, Ch: a, Cl: c, Dh: l, Dl: u, Eh: d, El: h, Fh: f, Fl: g, Gh: m, Gl: v, Hh: p, Hl: S} = this;
        for (let E = 0; E < 80; E++) {
            let N = fe.default.rotrSH(d, h, 14) ^ fe.default.rotrSH(d, h, 18) ^ fe.default.rotrBH(d, h, 41)
              , I = fe.default.rotrSL(d, h, 14) ^ fe.default.rotrSL(d, h, 18) ^ fe.default.rotrBL(d, h, 41)
              , F = d & f ^ ~d & m
              , q = h & g ^ ~h & v
              , z = fe.default.add5L(S, I, q, Bp[E], cn[E])
              , G = fe.default.add5H(z, p, N, F, Np[E], an[E])
              , U = 0 | z
              , P = fe.default.rotrSH(r, i, 28) ^ fe.default.rotrBH(r, i, 34) ^ fe.default.rotrBH(r, i, 39)
              , L = fe.default.rotrSL(r, i, 28) ^ fe.default.rotrBL(r, i, 34) ^ fe.default.rotrBL(r, i, 39)
              , M = r & o ^ r & a ^ o & a
              , T = i & s ^ i & c ^ s & c;
            p = 0 | m,
            S = 0 | v,
            m = 0 | f,
            v = 0 | g,
            f = 0 | d,
            g = 0 | h,
            {h: d, l: h} = fe.default.add(0 | l, 0 | u, 0 | G, 0 | U),
            l = 0 | a,
            u = 0 | c,
            a = 0 | o,
            c = 0 | s,
            o = 0 | r,
            s = 0 | i;
            let D = fe.default.add3L(U, L, T);
            r = fe.default.add3H(D, G, P, M),
            i = 0 | D
        }
        ({h: r, l: i} = fe.default.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | i)),
        {h: o, l: s} = fe.default.add(0 | this.Bh, 0 | this.Bl, 0 | o, 0 | s),
        {h: a, l: c} = fe.default.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | c),
        {h: l, l: u} = fe.default.add(0 | this.Dh, 0 | this.Dl, 0 | l, 0 | u),
        {h: d, l: h} = fe.default.add(0 | this.Eh, 0 | this.El, 0 | d, 0 | h),
        {h: f, l: g} = fe.default.add(0 | this.Fh, 0 | this.Fl, 0 | f, 0 | g),
        {h: m, l: v} = fe.default.add(0 | this.Gh, 0 | this.Gl, 0 | m, 0 | v),
        {h: p, l: S} = fe.default.add(0 | this.Hh, 0 | this.Hl, 0 | p, 0 | S),
        this.set(r, i, o, s, a, c, l, u, d, h, f, g, m, v, p, S)
    }
    roundClean() {
        an.fill(0),
        cn.fill(0)
    }
    destroy() {
        this.buffer.fill(0),
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    }
}
;
Be.SHA512 = Kn;
var Co = class extends Kn {
    constructor() {
        super(),
        this.Ah = -1942145080,
        this.Al = 424955298,
        this.Bh = 1944164710,
        this.Bl = -1982016298,
        this.Ch = 502970286,
        this.Cl = 855612546,
        this.Dh = 1738396948,
        this.Dl = 1479516111,
        this.Eh = 258812777,
        this.El = 2077511080,
        this.Fh = 2011393907,
        this.Fl = 79989058,
        this.Gh = 1067287976,
        this.Gl = 1780299464,
        this.Hh = 286451373,
        this.Hl = -1848208735,
        this.outputLen = 28
    }
}
;
Be.SHA512_224 = Co;
var So = class extends Kn {
    constructor() {
        super(),
        this.Ah = 573645204,
        this.Al = -64227540,
        this.Bh = -1621794909,
        this.Bl = -934517566,
        this.Ch = 596883563,
        this.Cl = 1867755857,
        this.Dh = -1774684391,
        this.Dl = 1497426621,
        this.Eh = -1775747358,
        this.El = -1467023389,
        this.Fh = -1101128155,
        this.Fl = 1401305490,
        this.Gh = 721525244,
        this.Gl = 746961066,
        this.Hh = 246885852,
        this.Hl = -2117784414,
        this.outputLen = 32
    }
}
;
Be.SHA512_256 = So;
var ko = class extends Kn {
    constructor() {
        super(),
        this.Ah = -876896931,
        this.Al = -1056596264,
        this.Bh = 1654270250,
        this.Bl = 914150663,
        this.Ch = -1856437926,
        this.Cl = 812702999,
        this.Dh = 355462360,
        this.Dl = -150054599,
        this.Eh = 1731405415,
        this.El = -4191439,
        this.Fh = -1900787065,
        this.Fl = 1750603025,
        this.Gh = -619958771,
        this.Gl = 1694076839,
        this.Hh = 1203062813,
        this.Hl = -1090891868,
        this.outputLen = 48
    }
}
;
Be.SHA384 = ko,
Be.sha512 = (0,
ji.wrapConstructor)( () => new Kn),
Be.sha512_224 = (0,
ji.wrapConstructor)( () => new Co),
Be.sha512_256 = (0,
ji.wrapConstructor)( () => new So),
Be.sha384 = (0,
ji.wrapConstructor)( () => new ko);
var fa = {}
  , sr = {}
  , ke = {}
  , pe = {};
Object.defineProperty(pe, "__esModule", {
    value: !0
}),
pe.notImplemented = pe.bitMask = void 0,
pe.isBytes = xo,
pe.abytes = Ao,
pe.abool = function(e, t) {
    if (typeof t != "boolean")
        throw new Error(`${e} must be valid boolean, got "${t}".`)
}
,
pe.bytesToHex = Ts,
pe.numberToHexUnpadded = Il,
pe.hexToNumber = Rs,
pe.hexToBytes = to,
pe.bytesToNumberBE = function(e) {
    return Rs(Ts(e))
}
,
pe.bytesToNumberLE = function(e) {
    return Ao(e),
    Rs(Ts(Uint8Array.from(e).reverse()))
}
,
pe.numberToBytesBE = Bl,
pe.numberToBytesLE = function(e, t) {
    return Bl(e, t).reverse()
}
,
pe.numberToVarBytesBE = function(e) {
    return to(Il(e))
}
,
pe.ensureBytes = function(e, t, n) {
    let r;
    if (typeof t == "string")
        try {
            r = to(t)
        } catch (o) {
            throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${o}`)
        }
    else {
        if (!xo(t))
            throw new Error(`${e} must be hex string or Uint8Array`);
        r = Uint8Array.from(t)
    }
    let i = r.length;
    if (typeof n == "number" && i !== n)
        throw new Error(`${e} expected ${n} bytes, got ${i}`);
    return r
}
,
pe.concatBytes = Dl,
pe.equalBytes = function(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = 0;
    for (let r = 0; r < e.length; r++)
        n |= e[r] ^ t[r];
    return n === 0
}
,
pe.utf8ToBytes = function(e) {
    if (typeof e != "string")
        throw new Error("utf8ToBytes expected string, got " + typeof e);
    return new Uint8Array(new TextEncoder().encode(e))
}
,
pe.inRange = $l,
pe.aInRange = function(e, t, n, r) {
    if (!$l(t, n, r))
        throw new Error(`expected valid ${e}: ${n} <= n < ${r}, got ${typeof t} ${t}`)
}
,
pe.bitLen = function(e) {
    let t;
    for (t = 0; e > pa; e >>= eo,
    t += 1)
        ;
    return t
}
,
pe.bitGet = function(e, t) {
    return e >> BigInt(t) & eo
}
,
pe.bitSet = function(e, t, n) {
    return e | (n ? eo : pa) << BigInt(t)
}
,
pe.createHmacDrbg = function(e, t, n) {
    if (typeof e != "number" || e < 2)
        throw new Error("hashLen must be a number");
    if (typeof t != "number" || t < 2)
        throw new Error("qByteLen must be a number");
    if (typeof n != "function")
        throw new Error("hmacFn must be a function");
    let r = Ls(e)
      , i = Ls(e)
      , o = 0
      , s = () => {
        r.fill(1),
        i.fill(0),
        o = 0
    }
      , a = (...u) => n(i, r, ...u)
      , c = (u=Ls()) => {
        i = a(jl([0]), u),
        r = a(),
        u.length !== 0 && (i = a(jl([1]), u),
        r = a())
    }
      , l = () => {
        if (o++ >= 1e3)
            throw new Error("drbg: tried 1000 values");
        let u = 0
          , d = [];
        for (; u < t; ) {
            r = a();
            let h = r.slice();
            d.push(h),
            u += r.length
        }
        return Dl(...d)
    }
    ;
    return (u, d) => {
        let h;
        for (s(),
        c(u); !(h = d(l())); )
            c();
        return s(),
        h
    }
}
,
pe.validateObject = function(e, t, n={}) {
    let r = (i, o, s) => {
        let a = jp[o];
        if (typeof a != "function")
            throw new Error(`Invalid validator "${o}", expected function`);
        let c = e[i];
        if (!(s && c === void 0 || a(c, e)))
            throw new Error(`Invalid param ${String(i)}=${c} (${typeof c}), expected ${o}`)
    }
    ;
    for (let[i,o] of Object.entries(t))
        r(i, o, !1);
    for (let[i,o] of Object.entries(n))
        r(i, o, !0);
    return e
}
,
pe.memoized = function(e) {
    let t = new WeakMap;
    return (n, ...r) => {
        let i = t.get(n);
        if (i !== void 0)
            return i;
        let o = e(n, ...r);
        return t.set(n, o),
        o
    }
}
;
var pa = BigInt(0)
  , eo = BigInt(1)
  , Dp = BigInt(2);
function xo(e) {
    return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array"
}
function Ao(e) {
    if (!xo(e))
        throw new Error("Uint8Array expected")
}
var $p = Array.from({
    length: 256
}, (e, t) => t.toString(16).padStart(2, "0"));
function Ts(e) {
    Ao(e);
    let t = "";
    for (let n = 0; n < e.length; n++)
        t += $p[e[n]];
    return t
}
function Il(e) {
    let t = e.toString(16);
    return 1 & t.length ? `0${t}` : t
}
function Rs(e) {
    if (typeof e != "string")
        throw new Error("hex string expected, got " + typeof e);
    return BigInt(e === "" ? "0" : `0x${e}`)
}
var zt = {
    _0: 48,
    _9: 57,
    _A: 65,
    _F: 70,
    _a: 97,
    _f: 102
};
function Nl(e) {
    return e >= zt._0 && e <= zt._9 ? e - zt._0 : e >= zt._A && e <= zt._F ? e - (zt._A - 10) : e >= zt._a && e <= zt._f ? e - (zt._a - 10) : void 0
}
function to(e) {
    if (typeof e != "string")
        throw new Error("hex string expected, got " + typeof e);
    let t = e.length
      , n = t / 2;
    if (t % 2)
        throw new Error("padded hex string expected, got unpadded hex of length " + t);
    let r = new Uint8Array(n);
    for (let i = 0, o = 0; i < n; i++,
    o += 2) {
        let s = Nl(e.charCodeAt(o))
          , a = Nl(e.charCodeAt(o + 1));
        if (s === void 0 || a === void 0) {
            let c = e[o] + e[o + 1];
            throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + o)
        }
        r[i] = 16 * s + a
    }
    return r
}
function Bl(e, t) {
    return to(e.toString(16).padStart(2 * t, "0"))
}
function Dl(...e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        Ao(i),
        t += i.length
    }
    let n = new Uint8Array(t);
    for (let r = 0, i = 0; r < e.length; r++) {
        let o = e[r];
        n.set(o, i),
        i += o.length
    }
    return n
}
var Os = e => typeof e == "bigint" && pa <= e;
function $l(e, t, n) {
    return Os(e) && Os(t) && Os(n) && t <= e && e < n
}
pe.bitMask = e => (Dp << BigInt(e - 1)) - eo;
var Ls = e => new Uint8Array(e)
  , jl = e => Uint8Array.from(e)
  , jp = {
    bigint: e => typeof e == "bigint",
    function: e => typeof e == "function",
    boolean: e => typeof e == "boolean",
    string: e => typeof e == "string",
    stringOrUint8Array: e => typeof e == "string" || xo(e),
    isSafeInteger: e => Number.isSafeInteger(e),
    array: e => Array.isArray(e),
    field: (e, t) => t.Fp.isValid(e),
    hash: e => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};
pe.notImplemented = () => {
    throw new Error("not implemented")
}
,
Object.defineProperty(ke, "__esModule", {
    value: !0
}),
ke.isNegativeLE = void 0,
ke.mod = ct,
ke.pow = Ih,
ke.pow2 = function(e, t, n) {
    let r = e;
    for (; t-- > De; )
        r *= r,
        r %= n;
    return r
}
,
ke.invert = Ki,
ke.tonelliShanks = Nh,
ke.FpSqrt = Hl,
ke.validateField = function(e) {
    let t = Up.reduce( (n, r) => (n[r] = "function",
    n), {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    });
    return (0,
    st.validateObject)(e, t)
}
,
ke.FpPow = Fl,
ke.FpInvertBatch = zl,
ke.FpDiv = function(e, t, n) {
    return e.mul(t, typeof n == "bigint" ? Ki(n, e.ORDER) : e.inv(n))
}
,
ke.FpLegendre = ql,
ke.FpIsSquare = function(e) {
    let t = ql(e.ORDER);
    return n => {
        let r = t(e, n);
        return e.eql(r, e.ZERO) || e.eql(r, e.ONE)
    }
}
,
ke.nLength = Ps,
ke.Field = function(e, t, n=!1, r={}) {
    if (e <= De)
        throw new Error(`Expected Field ORDER > 0, got ${e}`);
    let {nBitLength: i, nByteLength: o} = Ps(e, t);
    if (o > 2048)
        throw new Error("Field lengths over 2048 bytes are not supported");
    let s = Hl(e)
      , a = Object.freeze({
        ORDER: e,
        BITS: i,
        BYTES: o,
        MASK: (0,
        st.bitMask)(i),
        ZERO: De,
        ONE: Me,
        create: c => ct(c, e),
        isValid: c => {
            if (typeof c != "bigint")
                throw new Error("Invalid field element: expected bigint, got " + typeof c);
            return De <= c && c < e
        }
        ,
        is0: c => c === De,
        isOdd: c => (c & Me) === Me,
        neg: c => ct(-c, e),
        eql: (c, l) => c === l,
        sqr: c => ct(c * c, e),
        add: (c, l) => ct(c + l, e),
        sub: (c, l) => ct(c - l, e),
        mul: (c, l) => ct(c * l, e),
        pow: (c, l) => Fl(a, c, l),
        div: (c, l) => ct(c * Ki(l, e), e),
        sqrN: c => c * c,
        addN: (c, l) => c + l,
        subN: (c, l) => c - l,
        mulN: (c, l) => c * l,
        inv: c => Ki(c, e),
        sqrt: r.sqrt || (c => s(a, c)),
        invertBatch: c => zl(a, c),
        cmov: (c, l, u) => u ? l : c,
        toBytes: c => n ? (0,
        st.numberToBytesLE)(c, o) : (0,
        st.numberToBytesBE)(c, o),
        fromBytes: c => {
            if (c.length !== o)
                throw new Error(`Fp.fromBytes: expected ${o}, got ${c.length}`);
            return n ? (0,
            st.bytesToNumberLE)(c) : (0,
            st.bytesToNumberBE)(c)
        }
    });
    return Object.freeze(a)
}
,
ke.FpSqrtOdd = function(e, t) {
    if (!e.isOdd)
        throw new Error("Field doesn't have isOdd");
    let n = e.sqrt(t);
    return e.isOdd(n) ? n : e.neg(n)
}
,
ke.FpSqrtEven = function(e, t) {
    if (!e.isOdd)
        throw new Error("Field doesn't have isOdd");
    let n = e.sqrt(t);
    return e.isOdd(n) ? e.neg(n) : n
}
,
ke.hashToPrivateScalar = function(e, t, n=!1) {
    e = (0,
    st.ensureBytes)("privateHash", e);
    let r = e.length
      , i = Ps(t).nByteLength + 8;
    if (i < 24 || r < i || r > 1024)
        throw new Error(`hashToPrivateScalar: expected ${i}-1024 bytes of input, got ${r}`);
    let o = n ? (0,
    st.bytesToNumberLE)(e) : (0,
    st.bytesToNumberBE)(e);
    return ct(o, t - Me) + Me
}
,
ke.getFieldBytesLength = ga,
ke.getMinHashLength = Vl,
ke.mapHashToField = function(e, t, n=!1) {
    let r = e.length
      , i = ga(t)
      , o = Vl(t);
    if (r < 16 || r < o || r > 1024)
        throw new Error(`expected ${o}-1024 bytes of input, got ${r}`);
    let s = ct(n ? (0,
    st.bytesToNumberBE)(e) : (0,
    st.bytesToNumberLE)(e), t - Me) + Me;
    return n ? (0,
    st.numberToBytesLE)(s, i) : (0,
    st.numberToBytesBE)(s, i)
}
;
var st = pe
  , De = BigInt(0)
  , Me = BigInt(1)
  , En = BigInt(2)
  , Kp = BigInt(3)
  , ma = BigInt(4)
  , Kl = BigInt(5)
  , Ul = BigInt(8);
function ct(e, t) {
    let n = e % t;
    return n >= De ? n : t + n
}
function Ih(e, t, n) {
    if (n <= De || t < De)
        throw new Error("Expected power/modulo > 0");
    if (n === Me)
        return De;
    let r = Me;
    for (; t > De; )
        t & Me && (r = r * e % n),
        e = e * e % n,
        t >>= Me;
    return r
}
function Ki(e, t) {
    if (e === De || t <= De)
        throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
    let n = ct(e, t)
      , r = t
      , i = De
      , o = Me;
    for (; n !== De; ) {
        let s = r % n
          , a = i - o * (r / n);
        r = n,
        n = s,
        i = o,
        o = a
    }
    if (r !== Me)
        throw new Error("invert: does not exist");
    return ct(i, t)
}
function Nh(e) {
    let t = (e - Me) / En, n, r, i;
    for (n = e - Me,
    r = 0; n % En === De; n /= En,
    r++)
        ;
    for (i = En; i < e && Ih(i, t, e) !== e - Me; i++)
        ;
    if (r === 1) {
        let s = (e + Me) / ma;
        return function(a, c) {
            let l = a.pow(c, s);
            if (!a.eql(a.sqr(l), c))
                throw new Error("Cannot find square root");
            return l
        }
    }
    let o = (n + Me) / En;
    return function(s, a) {
        if (s.pow(a, t) === s.neg(s.ONE))
            throw new Error("Cannot find square root");
        let c = r
          , l = s.pow(s.mul(s.ONE, i), n)
          , u = s.pow(a, o)
          , d = s.pow(a, n);
        for (; !s.eql(d, s.ONE); ) {
            if (s.eql(d, s.ZERO))
                return s.ZERO;
            let h = 1;
            for (let g = s.sqr(d); h < c && !s.eql(g, s.ONE); h++)
                g = s.sqr(g);
            let f = s.pow(l, Me << BigInt(c - h - 1));
            l = s.sqr(f),
            u = s.mul(u, f),
            d = s.mul(d, l),
            c = h
        }
        return u
    }
}
function Hl(e) {
    if (e % ma === Kp) {
        let t = (e + Me) / ma;
        return function(n, r) {
            let i = n.pow(r, t);
            if (!n.eql(n.sqr(i), r))
                throw new Error("Cannot find square root");
            return i
        }
    }
    if (e % Ul === Kl) {
        let t = (e - Kl) / Ul;
        return function(n, r) {
            let i = n.mul(r, En)
              , o = n.pow(i, t)
              , s = n.mul(r, o)
              , a = n.mul(n.mul(s, En), o)
              , c = n.mul(s, n.sub(a, n.ONE));
            if (!n.eql(n.sqr(c), r))
                throw new Error("Cannot find square root");
            return c
        }
    }
    return Nh(e)
}
BigInt(9),
BigInt(16);
ke.isNegativeLE = (e, t) => (ct(e, t) & Me) === Me;
var Up = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function Fl(e, t, n) {
    if (n < De)
        throw new Error("Expected power > 0");
    if (n === De)
        return e.ONE;
    if (n === Me)
        return t;
    let r = e.ONE
      , i = t;
    for (; n > De; )
        n & Me && (r = e.mul(r, i)),
        i = e.sqr(i),
        n >>= Me;
    return r
}
function zl(e, t) {
    let n = new Array(t.length)
      , r = t.reduce( (o, s, a) => e.is0(s) ? o : (n[a] = o,
    e.mul(o, s)), e.ONE)
      , i = e.inv(r);
    return t.reduceRight( (o, s, a) => e.is0(s) ? o : (n[a] = e.mul(o, n[a]),
    e.mul(o, s)), i),
    n
}
function ql(e) {
    let t = (e - Me) / En;
    return (n, r) => n.pow(r, t)
}
function Ps(e, t) {
    let n = t !== void 0 ? t : e.toString(2).length;
    return {
        nBitLength: n,
        nByteLength: Math.ceil(n / 8)
    }
}
function ga(e) {
    if (typeof e != "bigint")
        throw new Error("field order must be bigint");
    let t = e.toString(2).length;
    return Math.ceil(t / 8)
}
function Vl(e) {
    let t = ga(e);
    return t + Math.ceil(t / 2)
}
Object.defineProperty(sr, "__esModule", {
    value: !0
}),
sr.wNAF = function(e, t) {
    let n = (o, s) => {
        let a = s.negate();
        return o ? a : s
    }
      , r = o => {
        if (!Number.isSafeInteger(o) || o <= 0 || o > t)
            throw new Error(`Wrong window size=${o}, should be [1..${t}]`)
    }
      , i = o => (r(o),
    {
        windows: Math.ceil(t / o) + 1,
        windowSize: 2 ** (o - 1)
    });
    return {
        constTimeNegate: n,
        unsafeLadder(o, s) {
            let a = e.ZERO
              , c = o;
            for (; s > Hp; )
                s & Is && (a = a.add(c)),
                c = c.double(),
                s >>= Is;
            return a
        },
        precomputeWindow(o, s) {
            let {windows: a, windowSize: c} = i(s)
              , l = []
              , u = o
              , d = u;
            for (let h = 0; h < a; h++) {
                d = u,
                l.push(d);
                for (let f = 1; f < c; f++)
                    d = d.add(u),
                    l.push(d);
                u = d.double()
            }
            return l
        },
        wNAF(o, s, a) {
            let {windows: c, windowSize: l} = i(o)
              , u = e.ZERO
              , d = e.BASE
              , h = BigInt(2 ** o - 1)
              , f = 2 ** o
              , g = BigInt(o);
            for (let m = 0; m < c; m++) {
                let v = m * l
                  , p = Number(a & h);
                a >>= g,
                p > l && (p -= f,
                a += Is);
                let S = v
                  , E = v + Math.abs(p) - 1
                  , N = m % 2 != 0
                  , I = p < 0;
                p === 0 ? d = d.add(n(N, s[S])) : u = u.add(n(I, s[E]))
            }
            return {
                p: u,
                f: d
            }
        },
        wNAFCached(o, s, a) {
            let c = Yl.get(o) || 1
              , l = Ns.get(o);
            return l || (l = this.precomputeWindow(o, c),
            c !== 1 && Ns.set(o, a(l))),
            this.wNAF(c, l, s)
        },
        setWindowSize(o, s) {
            r(s),
            Yl.set(o, s),
            Ns.delete(o)
        }
    }
}
,
sr.pippenger = function(e, t, n, r) {
    if (!Array.isArray(n) || !Array.isArray(r) || r.length !== n.length)
        throw new Error("arrays of points and scalars must have equal length");
    r.forEach( (u, d) => {
        if (!t.isValid(u))
            throw new Error(`wrong scalar at index ${d}`)
    }
    ),
    n.forEach( (u, d) => {
        if (!(u instanceof e))
            throw new Error(`wrong point at index ${d}`)
    }
    );
    let i = (0,
    Gl.bitLen)(BigInt(n.length))
      , o = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1
      , s = (1 << o) - 1
      , a = new Array(s + 1).fill(e.ZERO)
      , c = Math.floor((t.BITS - 1) / o) * o
      , l = e.ZERO;
    for (let u = c; u >= 0; u -= o) {
        a.fill(e.ZERO);
        for (let h = 0; h < r.length; h++) {
            let f = r[h]
              , g = Number(f >> BigInt(u) & BigInt(s));
            a[g] = a[g].add(n[h])
        }
        let d = e.ZERO;
        for (let h = a.length - 1, f = e.ZERO; h > 0; h--)
            f = f.add(a[h]),
            d = d.add(f);
        if (l = l.add(d),
        u !== 0)
            for (let h = 0; h < o; h++)
                l = l.double()
    }
    return l
}
,
sr.validateBasic = function(e) {
    return (0,
    Wl.validateField)(e.Fp),
    (0,
    Gl.validateObject)(e, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }),
    Object.freeze(it(xe(xe({}, (0,
    Wl.nLength)(e.n, e.nBitLength)), e), {
        p: e.Fp.ORDER
    }))
}
;
var Wl = ke
  , Gl = pe
  , Hp = BigInt(0)
  , Is = BigInt(1)
  , Ns = new WeakMap
  , Yl = new WeakMap;
Object.defineProperty(fa, "__esModule", {
    value: !0
}),
fa.twistedEdwards = function(e) {
    let t = function(M) {
        let T = (0,
        Bs.validateBasic)(M);
        return et.validateObject(M, {
            hash: "function",
            a: "bigint",
            d: "bigint",
            randomBytes: "function"
        }, {
            adjustScalarBytes: "function",
            domain: "function",
            uvRatio: "function",
            mapToCurve: "function"
        }),
        Object.freeze(xe({}, T))
    }(e)
      , {Fp: n, n: r, prehash: i, hash: o, randomBytes: s, nByteLength: a, h: c} = t
      , l = Ui << BigInt(8 * a) - tt
      , u = n.create
      , d = (0,
    Zl.Field)(t.n, t.nBitLength)
      , h = t.uvRatio || ( (M, T) => {
        try {
            return {
                isValid: !0,
                value: n.sqrt(M * n.inv(T))
            }
        } catch {
            return {
                isValid: !1,
                value: Ct
            }
        }
    }
    )
      , f = t.adjustScalarBytes || (M => M)
      , g = t.domain || ( (M, T, D) => {
        if ((0,
        at.abool)("phflag", D),
        T.length || D)
            throw new Error("Contexts/pre-hash are not supported");
        return M
    }
    );
    function m(M, T) {
        et.aInRange("coordinate " + M, T, Ct, l)
    }
    function v(M) {
        if (!(M instanceof E))
            throw new Error("ExtendedPoint expected")
    }
    let p = (0,
    at.memoized)( (M, T) => {
        let {ex: D, ey: j, ez: b} = M
          , _ = M.is0();
        T == null && (T = _ ? Fp : n.inv(b));
        let C = u(D * T)
          , A = u(j * T)
          , R = u(b * T);
        if (_)
            return {
                x: Ct,
                y: tt
            };
        if (R !== tt)
            throw new Error("invZ was invalid");
        return {
            x: C,
            y: A
        }
    }
    )
      , S = (0,
    at.memoized)(M => {
        let {a: T, d: D} = t;
        if (M.is0())
            throw new Error("bad point: ZERO");
        let {ex: j, ey: b, ez: _, et: C} = M
          , A = u(j * j)
          , R = u(b * b)
          , w = u(_ * _)
          , y = u(w * w)
          , x = u(A * T);
        if (u(w * u(x + R)) !== u(y + u(D * u(A * R))))
            throw new Error("bad point: equation left != right (1)");
        if (u(j * b) !== u(_ * C))
            throw new Error("bad point: equation left != right (2)");
        return !0
    }
    );
    class E {
        constructor(T, D, j, b) {
            this.ex = T,
            this.ey = D,
            this.ez = j,
            this.et = b,
            m("x", T),
            m("y", D),
            m("z", j),
            m("t", b),
            Object.freeze(this)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static fromAffine(T) {
            if (T instanceof E)
                throw new Error("extended point not allowed");
            let {x: D, y: j} = T || {};
            return m("x", D),
            m("y", j),
            new E(D,j,tt,u(D * j))
        }
        static normalizeZ(T) {
            let D = n.invertBatch(T.map(j => j.ez));
            return T.map( (j, b) => j.toAffine(D[b])).map(E.fromAffine)
        }
        static msm(T, D) {
            return (0,
            Bs.pippenger)(E, d, T, D)
        }
        _setWindowSize(T) {
            F.setWindowSize(this, T)
        }
        assertValidity() {
            S(this)
        }
        equals(T) {
            v(T);
            let {ex: D, ey: j, ez: b} = this
              , {ex: _, ey: C, ez: A} = T
              , R = u(D * A)
              , w = u(_ * b)
              , y = u(j * A)
              , x = u(C * b);
            return R === w && y === x
        }
        is0() {
            return this.equals(E.ZERO)
        }
        negate() {
            return new E(u(-this.ex),this.ey,this.ez,u(-this.et))
        }
        double() {
            let {a: T} = t
              , {ex: D, ey: j, ez: b} = this
              , _ = u(D * D)
              , C = u(j * j)
              , A = u(Ui * u(b * b))
              , R = u(T * _)
              , w = D + j
              , y = u(u(w * w) - _ - C)
              , x = R + C
              , k = x - A
              , O = R - C
              , $ = u(y * k)
              , K = u(x * O)
              , H = u(y * O)
              , V = u(k * x);
            return new E($,K,V,H)
        }
        add(T) {
            v(T);
            let {a: D, d: j} = t
              , {ex: b, ey: _, ez: C, et: A} = this
              , {ex: R, ey: w, ez: y, et: x} = T;
            if (D === BigInt(-1)) {
                let ne = u((_ - b) * (w + R))
                  , ae = u((_ + b) * (w - R))
                  , ue = u(ae - ne);
                if (ue === Ct)
                    return this.double();
                let ye = u(C * Ui * x)
                  , me = u(A * Ui * y)
                  , de = me + ye
                  , ge = ae + ne
                  , be = me - ye
                  , Pe = u(de * ue)
                  , ft = u(ge * be)
                  , as = u(de * be)
                  , cs = u(ue * ge);
                return new E(Pe,ft,cs,as)
            }
            let k = u(b * R)
              , O = u(_ * w)
              , $ = u(A * j * x)
              , K = u(C * y)
              , H = u((b + _) * (R + w) - k - O)
              , V = K - $
              , X = K + $
              , ee = u(O - D * k)
              , re = u(H * V)
              , se = u(X * ee)
              , ce = u(H * ee)
              , ie = u(V * X);
            return new E(re,se,ie,ce)
        }
        subtract(T) {
            return this.add(T.negate())
        }
        wNAF(T) {
            return F.wNAFCached(this, T, E.normalizeZ)
        }
        multiply(T) {
            let D = T;
            et.aInRange("scalar", D, tt, r);
            let {p: j, f: b} = this.wNAF(D);
            return E.normalizeZ([j, b])[0]
        }
        multiplyUnsafe(T) {
            let D = T;
            return et.aInRange("scalar", D, Ct, r),
            D === Ct ? I : this.equals(I) || D === tt ? this : this.equals(N) ? this.wNAF(D).p : F.unsafeLadder(this, D)
        }
        isSmallOrder() {
            return this.multiplyUnsafe(c).is0()
        }
        isTorsionFree() {
            return F.unsafeLadder(this, r).is0()
        }
        toAffine(T) {
            return p(this, T)
        }
        clearCofactor() {
            let {h: T} = t;
            return T === tt ? this : this.multiplyUnsafe(T)
        }
        static fromHex(T, D=!1) {
            let {d: j, a: b} = t
              , _ = n.BYTES;
            T = (0,
            at.ensureBytes)("pointHex", T, _),
            (0,
            at.abool)("zip215", D);
            let C = T.slice()
              , A = T[_ - 1];
            C[_ - 1] = -129 & A;
            let R = et.bytesToNumberLE(C)
              , w = D ? l : n.ORDER;
            et.aInRange("pointHex.y", R, Ct, w);
            let y = u(R * R)
              , x = u(y - tt)
              , k = u(j * y - b)
              , {isValid: O, value: $} = h(x, k);
            if (!O)
                throw new Error("Point.fromHex: invalid y coordinate");
            let K = ($ & tt) === tt
              , H = (128 & A) != 0;
            if (!D && $ === Ct && H)
                throw new Error("Point.fromHex: x=0 and x_0=1");
            return H !== K && ($ = u(-$)),
            E.fromAffine({
                x: $,
                y: R
            })
        }
        static fromPrivateKey(T) {
            return G(T).point
        }
        toRawBytes() {
            let {x: T, y: D} = this.toAffine()
              , j = et.numberToBytesLE(D, n.BYTES);
            return j[j.length - 1] |= T & tt ? 128 : 0,
            j
        }
        toHex() {
            return et.bytesToHex(this.toRawBytes())
        }
    }
    E.BASE = new E(t.Gx,t.Gy,tt,u(t.Gx * t.Gy)),
    E.ZERO = new E(Ct,tt,tt,Ct);
    let {BASE: N, ZERO: I} = E
      , F = (0,
    Bs.wNAF)(E, 8 * a);
    function q(M) {
        return (0,
        Zl.mod)(M, r)
    }
    function z(M) {
        return q(et.bytesToNumberLE(M))
    }
    function G(M) {
        let T = a;
        M = (0,
        at.ensureBytes)("private key", M, T);
        let D = (0,
        at.ensureBytes)("hashed private key", o(M), 2 * T)
          , j = f(D.slice(0, T))
          , b = D.slice(T, 2 * T)
          , _ = z(j)
          , C = N.multiply(_)
          , A = C.toRawBytes();
        return {
            head: j,
            prefix: b,
            scalar: _,
            point: C,
            pointBytes: A
        }
    }
    function U(M=new Uint8Array, ...T) {
        let D = et.concatBytes(...T);
        return z(o(g(D, (0,
        at.ensureBytes)("context", M), !!i)))
    }
    let P = zp;
    return N._setWindowSize(8),
    {
        CURVE: t,
        getPublicKey: function(M) {
            return G(M).pointBytes
        },
        sign: function(M, T, D={}) {
            M = (0,
            at.ensureBytes)("message", M),
            i && (M = i(M));
            let {prefix: j, scalar: b, pointBytes: _} = G(T)
              , C = U(D.context, j, M)
              , A = N.multiply(C).toRawBytes()
              , R = q(C + U(D.context, A, _, M) * b);
            et.aInRange("signature.s", R, Ct, r);
            let w = et.concatBytes(A, et.numberToBytesLE(R, n.BYTES));
            return (0,
            at.ensureBytes)("result", w, 2 * a)
        },
        verify: function(M, T, D, j=P) {
            let {context: b, zip215: _} = j
              , C = n.BYTES;
            M = (0,
            at.ensureBytes)("signature", M, 2 * C),
            T = (0,
            at.ensureBytes)("message", T),
            _ !== void 0 && (0,
            at.abool)("zip215", _),
            i && (T = i(T));
            let A = et.bytesToNumberLE(M.slice(C, 2 * C)), R, w, y;
            try {
                R = E.fromHex(D, _),
                w = E.fromHex(M.slice(0, C), _),
                y = N.multiplyUnsafe(A)
            } catch {
                return !1
            }
            if (!_ && R.isSmallOrder())
                return !1;
            let x = U(b, w.toRawBytes(), R.toRawBytes(), T);
            return w.add(R.multiplyUnsafe(x)).subtract(y).clearCofactor().equals(E.ZERO)
        },
        ExtendedPoint: E,
        utils: {
            getExtendedPublicKey: G,
            randomPrivateKey: () => s(n.BYTES),
            precompute: (M=8, T=E.BASE) => (T._setWindowSize(M),
            T.multiply(BigInt(3)),
            T)
        }
    }
}
;
var Bs = sr
  , Zl = ke
  , et = pe
  , at = pe
  , Ct = BigInt(0)
  , tt = BigInt(1)
  , Ui = BigInt(2)
  , Fp = BigInt(8)
  , zp = {
    zip215: !0
}
  , gn = {};
Object.defineProperty(gn, "__esModule", {
    value: !0
}),
gn.expand_message_xmd = Bh,
gn.expand_message_xof = Dh,
gn.hash_to_field = Ds,
gn.isogenyMap = function(e, t) {
    let n = t.map(r => Array.from(r).reverse());
    return (r, i) => {
        let[o,s,a,c] = n.map(l => l.reduce( (u, d) => e.add(e.mul(u, r), d)));
        return r = e.div(o, s),
        i = e.mul(i, e.div(a, c)),
        {
            x: r,
            y: i
        }
    }
}
,
gn.createHasher = function(e, t, n) {
    if (typeof t != "function")
        throw new Error("mapToCurve() must be defined");
    return {
        hashToCurve(r, i) {
            let o = Ds(r, 2, xe(it(xe({}, n), {
                DST: n.DST
            }), i))
              , s = e.fromAffine(t(o[0]))
              , a = e.fromAffine(t(o[1]))
              , c = s.add(a).clearCofactor();
            return c.assertValidity(),
            c
        },
        encodeToCurve(r, i) {
            let o = Ds(r, 1, xe(it(xe({}, n), {
                DST: n.encodeDST
            }), i))
              , s = e.fromAffine(t(o[0])).clearCofactor();
            return s.assertValidity(),
            s
        },
        mapToCurve(r) {
            if (!Array.isArray(r))
                throw new Error("mapToCurve: expected array of bigints");
            for (let o of r)
                if (typeof o != "bigint")
                    throw new Error(`mapToCurve: expected array of bigints, got ${o} in array`);
            let i = e.fromAffine(t(r)).clearCofactor();
            return i.assertValidity(),
            i
        }
    }
}
;
var qp = ke
  , Fe = pe
  , Vp = Fe.bytesToNumberBE;
function yn(e, t) {
    if (ri(e),
    ri(t),
    e < 0 || e >= 1 << 8 * t)
        throw new Error(`bad I2OSP call: value=${e} length=${t}`);
    let n = Array.from({
        length: t
    }).fill(0);
    for (let r = t - 1; r >= 0; r--)
        n[r] = 255 & e,
        e >>>= 8;
    return new Uint8Array(n)
}
function Wp(e, t) {
    let n = new Uint8Array(e.length);
    for (let r = 0; r < e.length; r++)
        n[r] = e[r] ^ t[r];
    return n
}
function ri(e) {
    if (!Number.isSafeInteger(e))
        throw new Error("number expected")
}
function Bh(e, t, n, r) {
    (0,
    Fe.abytes)(e),
    (0,
    Fe.abytes)(t),
    ri(n),
    t.length > 255 && (t = r((0,
    Fe.concatBytes)((0,
    Fe.utf8ToBytes)("H2C-OVERSIZE-DST-"), t)));
    let {outputLen: i, blockLen: o} = r
      , s = Math.ceil(n / i);
    if (n > 65535 || s > 255)
        throw new Error("expand_message_xmd: invalid lenInBytes");
    let a = (0,
    Fe.concatBytes)(t, yn(t.length, 1))
      , c = yn(0, o)
      , l = yn(n, 2)
      , u = new Array(s)
      , d = r((0,
    Fe.concatBytes)(c, e, l, yn(0, 1), a));
    u[0] = r((0,
    Fe.concatBytes)(d, yn(1, 1), a));
    for (let h = 1; h <= s; h++) {
        let f = [Wp(d, u[h - 1]), yn(h + 1, 1), a];
        u[h] = r((0,
        Fe.concatBytes)(...f))
    }
    return (0,
    Fe.concatBytes)(...u).slice(0, n)
}
function Dh(e, t, n, r, i) {
    if ((0,
    Fe.abytes)(e),
    (0,
    Fe.abytes)(t),
    ri(n),
    t.length > 255) {
        let o = Math.ceil(2 * r / 8);
        t = i.create({
            dkLen: o
        }).update((0,
        Fe.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(t).digest()
    }
    if (n > 65535 || t.length > 255)
        throw new Error("expand_message_xof: invalid lenInBytes");
    return i.create({
        dkLen: n
    }).update(e).update(yn(n, 2)).update(t).update(yn(t.length, 1)).digest()
}
function Ds(e, t, n) {
    (0,
    Fe.validateObject)(n, {
        DST: "stringOrUint8Array",
        p: "bigint",
        m: "isSafeInteger",
        k: "isSafeInteger",
        hash: "hash"
    });
    let {p: r, k: i, m: o, hash: s, expand: a, DST: c} = n;
    (0,
    Fe.abytes)(e),
    ri(t);
    let l = typeof c == "string" ? (0,
    Fe.utf8ToBytes)(c) : c, u = r.toString(2).length, d = Math.ceil((u + i) / 8), h = t * o * d, f;
    if (a === "xmd")
        f = Bh(e, l, h, s);
    else if (a === "xof")
        f = Dh(e, l, h, i, s);
    else {
        if (a !== "_internal_pass")
            throw new Error('expand must be "xmd" or "xof"');
        f = e
    }
    let g = new Array(t);
    for (let m = 0; m < t; m++) {
        let v = new Array(o);
        for (let p = 0; p < o; p++) {
            let S = d * (p + m * o)
              , E = f.subarray(S, S + d);
            v[p] = (0,
            qp.mod)(Vp(E), r)
        }
        g[m] = v
    }
    return g
}
var ya = {};
Object.defineProperty(ya, "__esModule", {
    value: !0
}),
ya.montgomery = function(e) {
    let t = function(m) {
        return (0,
        ln.validateObject)(m, {
            a: "bigint"
        }, {
            montgomeryBits: "isSafeInteger",
            nByteLength: "isSafeInteger",
            adjustScalarBytes: "function",
            domain: "function",
            powPminus2: "function",
            Gu: "bigint"
        }),
        Object.freeze(xe({}, m))
    }(e)
      , {P: n} = t
      , r = m => (0,
    Jl.mod)(m, n)
      , i = t.montgomeryBits
      , o = Math.ceil(i / 8)
      , s = t.nByteLength
      , a = t.adjustScalarBytes || (m => m)
      , c = t.powPminus2 || (m => (0,
    Jl.pow)(m, n - BigInt(2), n));
    function l(m, v, p) {
        let S = r(m * (v - p));
        return [v = r(v - S), p = r(p + S)]
    }
    let u = (t.a - BigInt(2)) / BigInt(4);
    function d(m) {
        return (0,
        ln.numberToBytesLE)(r(m), o)
    }
    function h(m, v) {
        let p = function(N) {
            let I = (0,
            ln.ensureBytes)("u coordinate", N, o);
            return s === 32 && (I[31] &= 127),
            (0,
            ln.bytesToNumberLE)(I)
        }(v)
          , S = function(N) {
            let I = (0,
            ln.ensureBytes)("scalar", N)
              , F = I.length;
            if (F !== o && F !== s)
                throw new Error(`Expected ${o} or ${s} bytes, got ${F}`);
            return (0,
            ln.bytesToNumberLE)(a(I))
        }(m)
          , E = function(N, I) {
            (0,
            ln.aInRange)("u", N, er, n),
            (0,
            ln.aInRange)("scalar", I, er, n);
            let F = I, q = N, z, G = $s, U = er, P = N, L = $s, M = er;
            for (let D = BigInt(i - 1); D >= er; D--) {
                let j = F >> D & $s;
                M ^= j,
                z = l(M, G, P),
                G = z[0],
                P = z[1],
                z = l(M, U, L),
                U = z[0],
                L = z[1],
                M = j;
                let b = G + U
                  , _ = r(b * b)
                  , C = G - U
                  , A = r(C * C)
                  , R = _ - A
                  , w = P + L
                  , y = r((P - L) * b)
                  , x = r(w * C)
                  , k = y + x
                  , O = y - x;
                P = r(k * k),
                L = r(q * r(O * O)),
                G = r(_ * A),
                U = r(R * (_ + r(u * R)))
            }
            z = l(M, G, P),
            G = z[0],
            P = z[1],
            z = l(M, U, L),
            U = z[0],
            L = z[1];
            let T = c(U);
            return r(G * T)
        }(p, S);
        if (E === er)
            throw new Error("Invalid private or public key received");
        return d(E)
    }
    let f = d(t.Gu);
    function g(m) {
        return h(m, f)
    }
    return {
        scalarMult: h,
        scalarMultBase: g,
        getSharedSecret: (m, v) => h(m, v),
        getPublicKey: m => g(m),
        utils: {
            randomPrivateKey: () => t.randomBytes(t.nByteLength)
        },
        GuBytes: f
    }
}
;
var Jl = ke
  , ln = pe
  , er = BigInt(0)
  , $s = BigInt(1);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.hash_to_ristretto255 = e.hashToRistretto255 = e.RistrettoPoint = e.encodeToCurve = e.hashToCurve = e.edwardsToMontgomery = e.x25519 = e.ed25519ph = e.ed25519ctx = e.ed25519 = e.ED25519_TORSION_SUBGROUP = void 0,
    e.edwardsToMontgomeryPub = F,
    e.edwardsToMontgomeryPriv = function(x) {
        let k = N.hash(x.subarray(0, 32));
        return N.adjustScalarBytes(k).subarray(0, 32)
    }
    ;
    let t = Be
      , n = nn
      , r = fa
      , i = gn
      , o = ke
      , s = ya
      , a = pe
      , c = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949")
      , l = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752")
      , u = BigInt(0)
      , d = BigInt(1)
      , h = BigInt(2)
      , f = BigInt(3)
      , g = BigInt(5)
      , m = BigInt(8);
    function v(x) {
        let k = BigInt(10)
          , O = BigInt(20)
          , $ = BigInt(40)
          , K = BigInt(80)
          , H = c
          , V = x * x % H * x % H
          , X = (0,
        o.pow2)(V, h, H) * V % H
          , ee = (0,
        o.pow2)(X, d, H) * x % H
          , re = (0,
        o.pow2)(ee, g, H) * ee % H
          , se = (0,
        o.pow2)(re, k, H) * re % H
          , ce = (0,
        o.pow2)(se, O, H) * se % H
          , ie = (0,
        o.pow2)(ce, $, H) * ce % H
          , ne = (0,
        o.pow2)(ie, K, H) * ie % H
          , ae = (0,
        o.pow2)(ne, K, H) * ie % H
          , ue = (0,
        o.pow2)(ae, k, H) * re % H;
        return {
            pow_p_5_8: (0,
            o.pow2)(ue, h, H) * x % H,
            b2: V
        }
    }
    function p(x) {
        return x[0] &= 248,
        x[31] &= 127,
        x[31] |= 64,
        x
    }
    function S(x, k) {
        let O = c
          , $ = (0,
        o.mod)(k * k * k, O)
          , K = v(x * (0,
        o.mod)($ * $ * k, O)).pow_p_5_8
          , H = (0,
        o.mod)(x * $ * K, O)
          , V = (0,
        o.mod)(k * H * H, O)
          , X = H
          , ee = (0,
        o.mod)(H * l, O)
          , re = V === x
          , se = V === (0,
        o.mod)(-x, O)
          , ce = V === (0,
        o.mod)(-x * l, O);
        return re && (H = X),
        (se || ce) && (H = ee),
        (0,
        o.isNegativeLE)(H, O) && (H = (0,
        o.mod)(-H, O)),
        {
            isValid: re || se,
            value: H
        }
    }
    e.ED25519_TORSION_SUBGROUP = ["0100000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a", "0000000000000000000000000000000000000000000000000000000000000080", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05", "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85", "0000000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"];
    let E = (0,
    o.Field)(c, void 0, !0)
      , N = {
        a: BigInt(-1),
        d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
        Fp: E,
        n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
        h: m,
        Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
        Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
        hash: t.sha512,
        randomBytes: n.randomBytes,
        adjustScalarBytes: p,
        uvRatio: S
    };
    function I(x, k, O) {
        if (k.length > 255)
            throw new Error("Context is too big");
        return (0,
        n.concatBytes)((0,
        n.utf8ToBytes)("SigEd25519 no Ed25519 collisions"), new Uint8Array([O ? 1 : 0, k.length]), k, x)
    }
    function F(x) {
        let {y: k} = e.ed25519.ExtendedPoint.fromHex(x)
          , O = BigInt(1);
        return E.toBytes(E.create((O + k) * E.inv(O - k)))
    }
    e.ed25519 = (0,
    r.twistedEdwards)(N),
    e.ed25519ctx = (0,
    r.twistedEdwards)(it(xe({}, N), {
        domain: I
    })),
    e.ed25519ph = (0,
    r.twistedEdwards)(Object.assign({}, N, {
        domain: I,
        prehash: t.sha512
    })),
    e.x25519 = (0,
    s.montgomery)({
        P: c,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: x => {
            let k = c
              , {pow_p_5_8: O, b2: $} = v(x);
            return (0,
            o.mod)((0,
            o.pow2)(O, f, k) * $, k)
        }
        ,
        adjustScalarBytes: p,
        randomBytes: n.randomBytes
    }),
    e.edwardsToMontgomery = F;
    let q = (E.ORDER + f) / m
      , z = E.pow(h, q)
      , G = E.sqrt(E.neg(E.ONE))
      , U = (0,
    o.FpSqrtEven)(E, E.neg(BigInt(486664)));
    function P(x) {
        let {xMn: k, xMd: O, yMn: $, yMd: K} = function(ie) {
            let ne = (E.ORDER - g) / m
              , ae = BigInt(486662)
              , ue = E.sqr(ie);
            ue = E.mul(ue, h);
            let ye = E.add(ue, E.ONE)
              , me = E.neg(ae)
              , de = E.sqr(ye)
              , ge = E.mul(de, ye)
              , be = E.mul(ue, ae);
            be = E.mul(be, me),
            be = E.add(be, de),
            be = E.mul(be, me);
            let Pe = E.sqr(ge);
            de = E.sqr(Pe),
            Pe = E.mul(Pe, ge),
            Pe = E.mul(Pe, be),
            de = E.mul(de, Pe);
            let ft = E.pow(de, ne);
            ft = E.mul(ft, Pe);
            let as = E.mul(ft, G);
            de = E.sqr(ft),
            de = E.mul(de, ge);
            let cs = E.eql(de, be)
              , Kc = E.cmov(as, ft, cs)
              , P0 = E.mul(me, ue)
              , Sr = E.mul(ft, ie);
            Sr = E.mul(Sr, z);
            let I0 = E.mul(Sr, G)
              , N0 = E.mul(be, ue);
            de = E.sqr(Sr),
            de = E.mul(de, ge);
            let B0 = E.eql(de, N0)
              , D0 = E.cmov(I0, Sr, B0);
            de = E.sqr(Kc),
            de = E.mul(de, ge);
            let ls = E.eql(de, be)
              , $0 = E.cmov(P0, me, ls)
              , kr = E.cmov(D0, Kc, ls)
              , j0 = E.isOdd(kr);
            return kr = E.cmov(kr, E.neg(kr), ls !== j0),
            {
                xMn: $0,
                xMd: ye,
                yMn: kr,
                yMd: d
            }
        }(x)
          , H = E.mul(k, K);
        H = E.mul(H, U);
        let V = E.mul(O, $)
          , X = E.sub(k, O)
          , ee = E.add(k, O)
          , re = E.mul(V, ee)
          , se = E.eql(re, E.ZERO);
        H = E.cmov(H, E.ZERO, se),
        V = E.cmov(V, E.ONE, se),
        X = E.cmov(X, E.ONE, se),
        ee = E.cmov(ee, E.ONE, se);
        let ce = E.invertBatch([V, ee]);
        return {
            x: E.mul(H, ce[0]),
            y: E.mul(X, ce[1])
        }
    }
    let L = (0,
    i.createHasher)(e.ed25519.ExtendedPoint, x => P(x[0]), {
        DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
        encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
        p: E.ORDER,
        m: 1,
        k: 128,
        expand: "xmd",
        hash: t.sha512
    });
    function M(x) {
        if (!(x instanceof y))
            throw new Error("RistrettoPoint expected")
    }
    e.hashToCurve = L.hashToCurve,
    e.encodeToCurve = L.encodeToCurve;
    let T = l
      , D = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235")
      , j = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578")
      , b = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838")
      , _ = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952")
      , C = x => S(d, x)
      , A = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
      , R = x => e.ed25519.CURVE.Fp.create((0,
    a.bytesToNumberLE)(x) & A);
    function w(x) {
        let {d: k} = e.ed25519.CURVE
          , O = e.ed25519.CURVE.Fp.ORDER
          , $ = e.ed25519.CURVE.Fp.create
          , K = $(T * x * x)
          , H = $((K + d) * b)
          , V = BigInt(-1)
          , X = $((V - k * K) * $(K + k))
          , {isValid: ee, value: re} = S(H, X)
          , se = $(re * x);
        (0,
        o.isNegativeLE)(se, O) || (se = $(-se)),
        ee || (re = se),
        ee || (V = K);
        let ce = $(V * (K - d) * _ - X)
          , ie = re * re
          , ne = $((re + re) * X)
          , ae = $(ce * D)
          , ue = $(d - ie)
          , ye = $(d + ie);
        return new e.ed25519.ExtendedPoint($(ne * ye),$(ue * ae),$(ae * ye),$(ne * ue))
    }
    class y {
        constructor(k) {
            this.ep = k
        }
        static fromAffine(k) {
            return new y(e.ed25519.ExtendedPoint.fromAffine(k))
        }
        static hashToCurve(k) {
            k = (0,
            a.ensureBytes)("ristrettoHash", k, 64);
            let O = w(R(k.slice(0, 32)))
              , $ = w(R(k.slice(32, 64)));
            return new y(O.add($))
        }
        static fromHex(k) {
            k = (0,
            a.ensureBytes)("ristrettoHex", k, 32);
            let {a: O, d: $} = e.ed25519.CURVE
              , K = e.ed25519.CURVE.Fp.ORDER
              , H = e.ed25519.CURVE.Fp.create
              , V = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint"
              , X = R(k);
            if (!(0,
            a.equalBytes)((0,
            a.numberToBytesLE)(X, 32), k) || (0,
            o.isNegativeLE)(X, K))
                throw new Error(V);
            let ee = H(X * X)
              , re = H(d + O * ee)
              , se = H(d - O * ee)
              , ce = H(re * re)
              , ie = H(se * se)
              , ne = H(O * $ * ce - ie)
              , {isValid: ae, value: ue} = C(H(ne * ie))
              , ye = H(ue * se)
              , me = H(ue * ye * ne)
              , de = H((X + X) * ye);
            (0,
            o.isNegativeLE)(de, K) && (de = H(-de));
            let ge = H(re * me)
              , be = H(de * ge);
            if (!ae || (0,
            o.isNegativeLE)(be, K) || ge === u)
                throw new Error(V);
            return new y(new e.ed25519.ExtendedPoint(de,ge,d,be))
        }
        toRawBytes() {
            let {ex: k, ey: O, ez: $, et: K} = this.ep, H = e.ed25519.CURVE.Fp.ORDER, V = e.ed25519.CURVE.Fp.create, X = V(V($ + O) * V($ - O)), ee = V(k * O), re = V(ee * ee), {value: se} = C(V(X * re)), ce = V(se * X), ie = V(se * ee), ne = V(ce * ie * K), ae;
            if ((0,
            o.isNegativeLE)(K * ne, H)) {
                let ye = V(O * T)
                  , me = V(k * T);
                k = ye,
                O = me,
                ae = V(ce * j)
            } else
                ae = ie;
            (0,
            o.isNegativeLE)(k * ne, H) && (O = V(-O));
            let ue = V(($ - O) * ae);
            return (0,
            o.isNegativeLE)(ue, H) && (ue = V(-ue)),
            (0,
            a.numberToBytesLE)(ue, 32)
        }
        toHex() {
            return (0,
            a.bytesToHex)(this.toRawBytes())
        }
        toString() {
            return this.toHex()
        }
        equals(k) {
            M(k);
            let {ex: O, ey: $} = this.ep
              , {ex: K, ey: H} = k.ep
              , V = e.ed25519.CURVE.Fp.create
              , X = V(O * H) === V($ * K)
              , ee = V($ * H) === V(O * K);
            return X || ee
        }
        add(k) {
            return M(k),
            new y(this.ep.add(k.ep))
        }
        subtract(k) {
            return M(k),
            new y(this.ep.subtract(k.ep))
        }
        multiply(k) {
            return new y(this.ep.multiply(k))
        }
        multiplyUnsafe(k) {
            return new y(this.ep.multiplyUnsafe(k))
        }
        double() {
            return new y(this.ep.double())
        }
        negate() {
            return new y(this.ep.negate())
        }
    }
    e.RistrettoPoint = (y.BASE || (y.BASE = new y(e.ed25519.ExtendedPoint.BASE)),
    y.ZERO || (y.ZERO = new y(e.ed25519.ExtendedPoint.ZERO)),
    y),
    e.hashToRistretto255 = (x, k) => {
        let O = k.DST
          , $ = typeof O == "string" ? (0,
        n.utf8ToBytes)(O) : O
          , K = (0,
        i.expand_message_xmd)(x, $, 64, t.sha512);
        return y.hashToCurve(K)
    }
    ,
    e.hash_to_ristretto255 = e.hashToRistretto255
}
)(ah);
var $h = {}
  , Xt = {};
Object.defineProperty(Xt, "__esModule", {
    value: !0
}),
Xt.sha224 = Xt.sha256 = Xt.SHA256 = void 0;
var js = Jt
  , gt = nn
  , Gp = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
  , un = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
  , dn = new Uint32Array(64)
  , ii = class extends js.HashMD {
    constructor() {
        super(64, 32, 8, !1),
        this.A = 0 | un[0],
        this.B = 0 | un[1],
        this.C = 0 | un[2],
        this.D = 0 | un[3],
        this.E = 0 | un[4],
        this.F = 0 | un[5],
        this.G = 0 | un[6],
        this.H = 0 | un[7]
    }
    get() {
        let {A: t, B: n, C: r, D: i, E: o, F: s, G: a, H: c} = this;
        return [t, n, r, i, o, s, a, c]
    }
    set(t, n, r, i, o, s, a, c) {
        this.A = 0 | t,
        this.B = 0 | n,
        this.C = 0 | r,
        this.D = 0 | i,
        this.E = 0 | o,
        this.F = 0 | s,
        this.G = 0 | a,
        this.H = 0 | c
    }
    process(t, n) {
        for (let d = 0; d < 16; d++,
        n += 4)
            dn[d] = t.getUint32(n, !1);
        for (let d = 16; d < 64; d++) {
            let h = dn[d - 15]
              , f = dn[d - 2]
              , g = (0,
            gt.rotr)(h, 7) ^ (0,
            gt.rotr)(h, 18) ^ h >>> 3
              , m = (0,
            gt.rotr)(f, 17) ^ (0,
            gt.rotr)(f, 19) ^ f >>> 10;
            dn[d] = m + dn[d - 7] + g + dn[d - 16] | 0
        }
        let {A: r, B: i, C: o, D: s, E: a, F: c, G: l, H: u} = this;
        for (let d = 0; d < 64; d++) {
            let h = u + ((0,
            gt.rotr)(a, 6) ^ (0,
            gt.rotr)(a, 11) ^ (0,
            gt.rotr)(a, 25)) + (0,
            js.Chi)(a, c, l) + Gp[d] + dn[d] | 0
              , f = ((0,
            gt.rotr)(r, 2) ^ (0,
            gt.rotr)(r, 13) ^ (0,
            gt.rotr)(r, 22)) + (0,
            js.Maj)(r, i, o) | 0;
            u = l,
            l = c,
            c = a,
            a = s + h | 0,
            s = o,
            o = i,
            i = r,
            r = h + f | 0
        }
        r = r + this.A | 0,
        i = i + this.B | 0,
        o = o + this.C | 0,
        s = s + this.D | 0,
        a = a + this.E | 0,
        c = c + this.F | 0,
        l = l + this.G | 0,
        u = u + this.H | 0,
        this.set(r, i, o, s, a, c, l, u)
    }
    roundClean() {
        dn.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0),
        this.buffer.fill(0)
    }
}
;
Xt.SHA256 = ii;
var va = class extends ii {
    constructor() {
        super(),
        this.A = -1056596264,
        this.B = 914150663,
        this.C = 812702999,
        this.D = -150054599,
        this.E = -4191439,
        this.F = 1750603025,
        this.G = 1694076839,
        this.H = -1090891868,
        this.outputLen = 28
    }
}
;
Xt.sha256 = (0,
gt.wrapConstructor)( () => new ii),
Xt.sha224 = (0,
gt.wrapConstructor)( () => new va);
var no = {}
  , lc = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.hmac = e.HMAC = void 0;
    let t = lt
      , n = nn;
    class r extends n.Hash {
        constructor(o, s) {
            super(),
            this.finished = !1,
            this.destroyed = !1,
            (0,
            t.hash)(o);
            let a = (0,
            n.toBytes)(s);
            if (this.iHash = o.create(),
            typeof this.iHash.update != "function")
                throw new Error("Expected instance of class which extends utils.Hash");
            this.blockLen = this.iHash.blockLen,
            this.outputLen = this.iHash.outputLen;
            let c = this.blockLen
              , l = new Uint8Array(c);
            l.set(a.length > c ? o.create().update(a).digest() : a);
            for (let u = 0; u < l.length; u++)
                l[u] ^= 54;
            this.iHash.update(l),
            this.oHash = o.create();
            for (let u = 0; u < l.length; u++)
                l[u] ^= 106;
            this.oHash.update(l),
            l.fill(0)
        }
        update(o) {
            return (0,
            t.exists)(this),
            this.iHash.update(o),
            this
        }
        digestInto(o) {
            (0,
            t.exists)(this),
            (0,
            t.bytes)(o, this.outputLen),
            this.finished = !0,
            this.iHash.digestInto(o),
            this.oHash.update(o),
            this.oHash.digestInto(o),
            this.destroy()
        }
        digest() {
            let o = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(o),
            o
        }
        _cloneInto(o) {
            o || (o = Object.create(Object.getPrototypeOf(this), {}));
            let {oHash: s, iHash: a, finished: c, destroyed: l, blockLen: u, outputLen: d} = this;
            return o.finished = c,
            o.destroyed = l,
            o.blockLen = u,
            o.outputLen = d,
            o.oHash = s._cloneInto(o.oHash),
            o.iHash = a._cloneInto(o.iHash),
            o
        }
        destroy() {
            this.destroyed = !0,
            this.oHash.destroy(),
            this.iHash.destroy()
        }
    }
    e.HMAC = r,
    e.hmac = (i, o, s) => new r(i,o).update(s).digest(),
    e.hmac.create = (i, o) => new r(i,o)
}
)(lc);
var uc = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.DER = void 0,
    e.weierstrassPoints = f,
    e.weierstrass = function(m) {
        let v = function(x) {
            let k = (0,
            t.validateBasic)(x);
            return r.validateObject(k, {
                hash: "hash",
                hmac: "function",
                randomBytes: "function"
            }, {
                bits2int: "function",
                bits2int_modN: "function",
                lowS: "boolean"
            }),
            Object.freeze(xe({
                lowS: !0
            }, k))
        }(m)
          , {Fp: p, n: S} = v
          , E = p.BYTES + 1
          , N = 2 * p.BYTES + 1;
        function I(x) {
            return n.mod(x, S)
        }
        function F(x) {
            return n.invert(x, S)
        }
        let {ProjectivePoint: q, normPrivateKeyToScalar: z, weierstrassEquation: G, isWithinCurveOrder: U} = f(it(xe({}, v), {
            toBytes(x, k, O) {
                let $ = k.toAffine()
                  , K = p.toBytes($.x)
                  , H = r.concatBytes;
                return (0,
                i.abool)("isCompressed", O),
                O ? H(Uint8Array.from([k.hasEvenY() ? 2 : 3]), K) : H(Uint8Array.from([4]), K, p.toBytes($.y))
            },
            fromBytes(x) {
                let k = x.length
                  , O = x[0]
                  , $ = x.subarray(1);
                if (k !== E || O !== 2 && O !== 3) {
                    if (k === N && O === 4)
                        return {
                            x: p.fromBytes($.subarray(0, p.BYTES)),
                            y: p.fromBytes($.subarray(p.BYTES, 2 * p.BYTES))
                        };
                    throw new Error(`Point of length ${k} was invalid. Expected ${E} compressed bytes or ${N} uncompressed bytes`)
                }
                {
                    let K = r.bytesToNumberBE($);
                    if (!r.inRange(K, l, p.ORDER))
                        throw new Error("Point is not on curve");
                    let H = G(K), V;
                    try {
                        V = p.sqrt(H)
                    } catch (X) {
                        let ee = X instanceof Error ? ": " + X.message : "";
                        throw new Error("Point is not on curve" + ee)
                    }
                    return (1 & O) == 1 != ((V & l) === l) && (V = p.neg(V)),
                    {
                        x: K,
                        y: V
                    }
                }
            }
        }))
          , P = x => r.bytesToHex(r.numberToBytesBE(x, v.nByteLength));
        function L(x) {
            return x > S >> l
        }
        let M = (x, k, O) => r.bytesToNumberBE(x.slice(k, O));
        class T {
            constructor(k, O, $) {
                this.r = k,
                this.s = O,
                this.recovery = $,
                this.assertValidity()
            }
            static fromCompact(k) {
                let O = v.nByteLength;
                return k = (0,
                i.ensureBytes)("compactSignature", k, 2 * O),
                new T(M(k, 0, O),M(k, O, 2 * O))
            }
            static fromDER(k) {
                let {r: O, s: $} = e.DER.toSig((0,
                i.ensureBytes)("DER", k));
                return new T(O,$)
            }
            assertValidity() {
                r.aInRange("r", this.r, l, S),
                r.aInRange("s", this.s, l, S)
            }
            addRecoveryBit(k) {
                return new T(this.r,this.s,k)
            }
            recoverPublicKey(k) {
                let {r: O, s: $, recovery: K} = this
                  , H = _((0,
                i.ensureBytes)("msgHash", k));
                if (K == null || ![0, 1, 2, 3].includes(K))
                    throw new Error("recovery id invalid");
                let V = K === 2 || K === 3 ? O + v.n : O;
                if (V >= p.ORDER)
                    throw new Error("recovery id 2 or 3 invalid");
                let X = 1 & K ? "03" : "02"
                  , ee = q.fromHex(X + P(V))
                  , re = F(V)
                  , se = I(-H * re)
                  , ce = I($ * re)
                  , ie = q.BASE.multiplyAndAddUnsafe(ee, se, ce);
                if (!ie)
                    throw new Error("point at infinify");
                return ie.assertValidity(),
                ie
            }
            hasHighS() {
                return L(this.s)
            }
            normalizeS() {
                return this.hasHighS() ? new T(this.r,I(-this.s),this.recovery) : this
            }
            toDERRawBytes() {
                return r.hexToBytes(this.toDERHex())
            }
            toDERHex() {
                return e.DER.hexFromSig({
                    r: this.r,
                    s: this.s
                })
            }
            toCompactRawBytes() {
                return r.hexToBytes(this.toCompactHex())
            }
            toCompactHex() {
                return P(this.r) + P(this.s)
            }
        }
        let D = {
            isValidPrivateKey(x) {
                try {
                    return z(x),
                    !0
                } catch {
                    return !1
                }
            },
            normPrivateKeyToScalar: z,
            randomPrivateKey: () => {
                let x = n.getMinHashLength(v.n);
                return n.mapHashToField(v.randomBytes(x), v.n)
            }
            ,
            precompute: (x=8, k=q.BASE) => (k._setWindowSize(x),
            k.multiply(BigInt(3)),
            k)
        };
        function j(x) {
            let k = r.isBytes(x)
              , O = typeof x == "string"
              , $ = (k || O) && x.length;
            return k ? $ === E || $ === N : O ? $ === 2 * E || $ === 2 * N : x instanceof q
        }
        let b = v.bits2int || function(x) {
            let k = r.bytesToNumberBE(x)
              , O = 8 * x.length - v.nBitLength;
            return O > 0 ? k >> BigInt(O) : k
        }
          , _ = v.bits2int_modN || function(x) {
            return I(b(x))
        }
          , C = r.bitMask(v.nBitLength);
        function A(x) {
            return r.aInRange(`num < 2^${v.nBitLength}`, x, c, C),
            r.numberToBytesBE(x, v.nByteLength)
        }
        function R(x, k, O=w) {
            if (["recovered", "canonical"].some(ne => ne in O))
                throw new Error("sign() legacy options not supported");
            let {hash: $, randomBytes: K} = v
              , {lowS: H, prehash: V, extraEntropy: X} = O;
            H == null && (H = !0),
            x = (0,
            i.ensureBytes)("msgHash", x),
            o(O),
            V && (x = (0,
            i.ensureBytes)("prehashed msgHash", $(x)));
            let ee = _(x)
              , re = z(k)
              , se = [A(re), A(ee)];
            if (X != null && X !== !1) {
                let ne = X === !0 ? K(p.BYTES) : X;
                se.push((0,
                i.ensureBytes)("extraEntropy", ne))
            }
            let ce = r.concatBytes(...se)
              , ie = ee;
            return {
                seed: ce,
                k2sig: function(ne) {
                    let ae = b(ne);
                    if (!U(ae))
                        return;
                    let ue = F(ae)
                      , ye = q.BASE.multiply(ae).toAffine()
                      , me = I(ye.x);
                    if (me === c)
                        return;
                    let de = I(ue * I(ie + me * re));
                    if (de === c)
                        return;
                    let ge = (ye.x === me ? 0 : 2) | Number(ye.y & l)
                      , be = de;
                    return H && L(de) && (be = function(Pe) {
                        return L(Pe) ? I(-Pe) : Pe
                    }(de),
                    ge ^= 1),
                    new T(me,be,ge)
                }
            }
        }
        let w = {
            lowS: v.lowS,
            prehash: !1
        }
          , y = {
            lowS: v.lowS,
            prehash: !1
        };
        return q.BASE._setWindowSize(8),
        {
            CURVE: v,
            getPublicKey: function(x, k=!0) {
                return q.fromPrivateKey(x).toRawBytes(k)
            },
            getSharedSecret: function(x, k, O=!0) {
                if (j(x))
                    throw new Error("first arg must be private key");
                if (!j(k))
                    throw new Error("second arg must be public key");
                return q.fromHex(k).multiply(z(x)).toRawBytes(O)
            },
            sign: function(x, k, O=w) {
                let {seed: $, k2sig: K} = R(x, k, O)
                  , H = v;
                return r.createHmacDrbg(H.hash.outputLen, H.nByteLength, H.hmac)($, K)
            },
            verify: function(x, k, O, $=y) {
                let K = x;
                if (k = (0,
                i.ensureBytes)("msgHash", k),
                O = (0,
                i.ensureBytes)("publicKey", O),
                "strict"in $)
                    throw new Error("options.strict was renamed to lowS");
                o($);
                let {lowS: H, prehash: V} = $, X, ee;
                try {
                    if (typeof K == "string" || r.isBytes(K))
                        try {
                            X = T.fromDER(K)
                        } catch (me) {
                            if (!(me instanceof e.DER.Err))
                                throw me;
                            X = T.fromCompact(K)
                        }
                    else {
                        if (typeof K != "object" || typeof K.r != "bigint" || typeof K.s != "bigint")
                            throw new Error("PARSE");
                        {
                            let {r: me, s: de} = K;
                            X = new T(me,de)
                        }
                    }
                    ee = q.fromHex(O)
                } catch (me) {
                    if (me.message === "PARSE")
                        throw new Error("signature must be Signature instance, Uint8Array or hex string");
                    return !1
                }
                if (H && X.hasHighS())
                    return !1;
                V && (k = v.hash(k));
                let {r: re, s: se} = X
                  , ce = _(k)
                  , ie = F(se)
                  , ne = I(ce * ie)
                  , ae = I(re * ie)
                  , ue = q.BASE.multiplyAndAddUnsafe(ee, ne, ae)?.toAffine();
                return ue ? I(ue.x) === re : !1
            },
            ProjectivePoint: q,
            Signature: T,
            utils: D
        }
    }
    ,
    e.SWUFpSqrtRatio = g,
    e.mapToCurveSimpleSWU = function(m, v) {
        if (n.validateField(m),
        !m.isValid(v.A) || !m.isValid(v.B) || !m.isValid(v.Z))
            throw new Error("mapToCurveSimpleSWU: invalid opts");
        let p = g(m, v.Z);
        if (!m.isOdd)
            throw new Error("Fp.isOdd is not implemented!");
        return S => {
            let E, N, I, F, q, z, G, U;
            E = m.sqr(S),
            E = m.mul(E, v.Z),
            N = m.sqr(E),
            N = m.add(N, E),
            I = m.add(N, m.ONE),
            I = m.mul(I, v.B),
            F = m.cmov(v.Z, m.neg(N), !m.eql(N, m.ZERO)),
            F = m.mul(F, v.A),
            N = m.sqr(I),
            z = m.sqr(F),
            q = m.mul(z, v.A),
            N = m.add(N, q),
            N = m.mul(N, I),
            z = m.mul(z, F),
            q = m.mul(z, v.B),
            N = m.add(N, q),
            G = m.mul(E, I);
            let {isValid: P, value: L} = p(N, z);
            U = m.mul(E, S),
            U = m.mul(U, L),
            G = m.cmov(G, I, P),
            U = m.cmov(U, L, P);
            let M = m.isOdd(S) === m.isOdd(U);
            return U = m.cmov(m.neg(U), U, M),
            G = m.div(G, F),
            {
                x: G,
                y: U
            }
        }
    }
    ;
    let t = sr
      , n = ke
      , r = pe
      , i = pe;
    function o(m) {
        m.lowS !== void 0 && (0,
        i.abool)("lowS", m.lowS),
        m.prehash !== void 0 && (0,
        i.abool)("prehash", m.prehash)
    }
    let {bytesToNumberBE: s, hexToBytes: a} = r;
    e.DER = {
        Err: class extends Error {
            constructor(m="") {
                super(m)
            }
        }
        ,
        _tlv: {
            encode: (m, v) => {
                let {Err: p} = e.DER;
                if (m < 0 || m > 256)
                    throw new p("tlv.encode: wrong tag");
                if (1 & v.length)
                    throw new p("tlv.encode: unpadded data");
                let S = v.length / 2
                  , E = r.numberToHexUnpadded(S);
                if (E.length / 2 & 128)
                    throw new p("tlv.encode: long form length too big");
                let N = S > 127 ? r.numberToHexUnpadded(E.length / 2 | 128) : "";
                return `${r.numberToHexUnpadded(m)}${N}${E}${v}`
            }
            ,
            decode(m, v) {
                let {Err: p} = e.DER
                  , S = 0;
                if (m < 0 || m > 256)
                    throw new p("tlv.encode: wrong tag");
                if (v.length < 2 || v[S++] !== m)
                    throw new p("tlv.decode: wrong tlv");
                let E = v[S++]
                  , N = 0;
                if (128 & E) {
                    let F = 127 & E;
                    if (!F)
                        throw new p("tlv.decode(long): indefinite length not supported");
                    if (F > 4)
                        throw new p("tlv.decode(long): byte length is too big");
                    let q = v.subarray(S, S + F);
                    if (q.length !== F)
                        throw new p("tlv.decode: length bytes not complete");
                    if (q[0] === 0)
                        throw new p("tlv.decode(long): zero leftmost byte");
                    for (let z of q)
                        N = N << 8 | z;
                    if (S += F,
                    N < 128)
                        throw new p("tlv.decode(long): not minimal encoding")
                } else
                    N = E;
                let I = v.subarray(S, S + N);
                if (I.length !== N)
                    throw new p("tlv.decode: wrong value length");
                return {
                    v: I,
                    l: v.subarray(S + N)
                }
            }
        },
        _int: {
            encode(m) {
                let {Err: v} = e.DER;
                if (m < c)
                    throw new v("integer: negative integers are not allowed");
                let p = r.numberToHexUnpadded(m);
                if (8 & Number.parseInt(p[0], 16) && (p = "00" + p),
                1 & p.length)
                    throw new v("unexpected assertion");
                return p
            },
            decode(m) {
                let {Err: v} = e.DER;
                if (128 & m[0])
                    throw new v("Invalid signature integer: negative");
                if (m[0] === 0 && !(128 & m[1]))
                    throw new v("Invalid signature integer: unnecessary leading zero");
                return s(m)
            }
        },
        toSig(m) {
            let {Err: v, _int: p, _tlv: S} = e.DER
              , E = typeof m == "string" ? a(m) : m;
            r.abytes(E);
            let {v: N, l: I} = S.decode(48, E);
            if (I.length)
                throw new v("Invalid signature: left bytes after parsing");
            let {v: F, l: q} = S.decode(2, N)
              , {v: z, l: G} = S.decode(2, q);
            if (G.length)
                throw new v("Invalid signature: left bytes after parsing");
            return {
                r: p.decode(F),
                s: p.decode(z)
            }
        },
        hexFromSig(m) {
            let {_tlv: v, _int: p} = e.DER
              , S = `${v.encode(2, p.encode(m.r))}${v.encode(2, p.encode(m.s))}`;
            return v.encode(48, S)
        }
    };
    let c = BigInt(0)
      , l = BigInt(1)
      , u = BigInt(2)
      , d = BigInt(3)
      , h = BigInt(4);
    function f(m) {
        let v = function(M) {
            let T = (0,
            t.validateBasic)(M);
            r.validateObject(T, {
                a: "field",
                b: "field"
            }, {
                allowedPrivateKeyLengths: "array",
                wrapPrivateKey: "boolean",
                isTorsionFree: "function",
                clearCofactor: "function",
                allowInfinityPoint: "boolean",
                fromBytes: "function",
                toBytes: "function"
            });
            let {endo: D, Fp: j, a: b} = T;
            if (D) {
                if (!j.eql(b, j.ZERO))
                    throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                if (typeof D != "object" || typeof D.beta != "bigint" || typeof D.splitScalar != "function")
                    throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")
            }
            return Object.freeze(xe({}, T))
        }(m)
          , {Fp: p} = v
          , S = n.Field(v.n, v.nBitLength)
          , E = v.toBytes || ( (M, T, D) => {
            let j = T.toAffine();
            return r.concatBytes(Uint8Array.from([4]), p.toBytes(j.x), p.toBytes(j.y))
        }
        )
          , N = v.fromBytes || (M => {
            let T = M.subarray(1);
            return {
                x: p.fromBytes(T.subarray(0, p.BYTES)),
                y: p.fromBytes(T.subarray(p.BYTES, 2 * p.BYTES))
            }
        }
        );
        function I(M) {
            let {a: T, b: D} = v
              , j = p.sqr(M)
              , b = p.mul(j, M);
            return p.add(p.add(b, p.mul(M, T)), D)
        }
        if (!p.eql(p.sqr(v.Gy), I(v.Gx)))
            throw new Error("bad generator point: equation left != right");
        function F(M) {
            let {allowedPrivateKeyLengths: T, nByteLength: D, wrapPrivateKey: j, n: b} = v;
            if (T && typeof M != "bigint") {
                if (r.isBytes(M) && (M = r.bytesToHex(M)),
                typeof M != "string" || !T.includes(M.length))
                    throw new Error("Invalid key");
                M = M.padStart(2 * D, "0")
            }
            let _;
            try {
                _ = typeof M == "bigint" ? M : r.bytesToNumberBE((0,
                i.ensureBytes)("private key", M, D))
            } catch {
                throw new Error(`private key must be ${D} bytes, hex or bigint, not ${typeof M}`)
            }
            return j && (_ = n.mod(_, b)),
            r.aInRange("private key", _, l, b),
            _
        }
        function q(M) {
            if (!(M instanceof U))
                throw new Error("ProjectivePoint expected")
        }
        let z = (0,
        i.memoized)( (M, T) => {
            let {px: D, py: j, pz: b} = M;
            if (p.eql(b, p.ONE))
                return {
                    x: D,
                    y: j
                };
            let _ = M.is0();
            T == null && (T = _ ? p.ONE : p.inv(b));
            let C = p.mul(D, T)
              , A = p.mul(j, T)
              , R = p.mul(b, T);
            if (_)
                return {
                    x: p.ZERO,
                    y: p.ZERO
                };
            if (!p.eql(R, p.ONE))
                throw new Error("invZ was invalid");
            return {
                x: C,
                y: A
            }
        }
        )
          , G = (0,
        i.memoized)(M => {
            if (M.is0()) {
                if (v.allowInfinityPoint && !p.is0(M.py))
                    return;
                throw new Error("bad point: ZERO")
            }
            let {x: T, y: D} = M.toAffine();
            if (!p.isValid(T) || !p.isValid(D))
                throw new Error("bad point: x or y not FE");
            let j = p.sqr(D)
              , b = I(T);
            if (!p.eql(j, b))
                throw new Error("bad point: equation left != right");
            if (!M.isTorsionFree())
                throw new Error("bad point: not in prime-order subgroup");
            return !0
        }
        );
        class U {
            constructor(T, D, j) {
                if (this.px = T,
                this.py = D,
                this.pz = j,
                T == null || !p.isValid(T))
                    throw new Error("x required");
                if (D == null || !p.isValid(D))
                    throw new Error("y required");
                if (j == null || !p.isValid(j))
                    throw new Error("z required");
                Object.freeze(this)
            }
            static fromAffine(T) {
                let {x: D, y: j} = T || {};
                if (!T || !p.isValid(D) || !p.isValid(j))
                    throw new Error("invalid affine point");
                if (T instanceof U)
                    throw new Error("projective point not allowed");
                let b = _ => p.eql(_, p.ZERO);
                return b(D) && b(j) ? U.ZERO : new U(D,j,p.ONE)
            }
            get x() {
                return this.toAffine().x
            }
            get y() {
                return this.toAffine().y
            }
            static normalizeZ(T) {
                let D = p.invertBatch(T.map(j => j.pz));
                return T.map( (j, b) => j.toAffine(D[b])).map(U.fromAffine)
            }
            static fromHex(T) {
                let D = U.fromAffine(N((0,
                i.ensureBytes)("pointHex", T)));
                return D.assertValidity(),
                D
            }
            static fromPrivateKey(T) {
                return U.BASE.multiply(F(T))
            }
            static msm(T, D) {
                return (0,
                t.pippenger)(U, S, T, D)
            }
            _setWindowSize(T) {
                L.setWindowSize(this, T)
            }
            assertValidity() {
                G(this)
            }
            hasEvenY() {
                let {y: T} = this.toAffine();
                if (p.isOdd)
                    return !p.isOdd(T);
                throw new Error("Field doesn't support isOdd")
            }
            equals(T) {
                q(T);
                let {px: D, py: j, pz: b} = this
                  , {px: _, py: C, pz: A} = T
                  , R = p.eql(p.mul(D, A), p.mul(_, b))
                  , w = p.eql(p.mul(j, A), p.mul(C, b));
                return R && w
            }
            negate() {
                return new U(this.px,p.neg(this.py),this.pz)
            }
            double() {
                let {a: T, b: D} = v
                  , j = p.mul(D, d)
                  , {px: b, py: _, pz: C} = this
                  , A = p.ZERO
                  , R = p.ZERO
                  , w = p.ZERO
                  , y = p.mul(b, b)
                  , x = p.mul(_, _)
                  , k = p.mul(C, C)
                  , O = p.mul(b, _);
                return O = p.add(O, O),
                w = p.mul(b, C),
                w = p.add(w, w),
                A = p.mul(T, w),
                R = p.mul(j, k),
                R = p.add(A, R),
                A = p.sub(x, R),
                R = p.add(x, R),
                R = p.mul(A, R),
                A = p.mul(O, A),
                w = p.mul(j, w),
                k = p.mul(T, k),
                O = p.sub(y, k),
                O = p.mul(T, O),
                O = p.add(O, w),
                w = p.add(y, y),
                y = p.add(w, y),
                y = p.add(y, k),
                y = p.mul(y, O),
                R = p.add(R, y),
                k = p.mul(_, C),
                k = p.add(k, k),
                y = p.mul(k, O),
                A = p.sub(A, y),
                w = p.mul(k, x),
                w = p.add(w, w),
                w = p.add(w, w),
                new U(A,R,w)
            }
            add(T) {
                q(T);
                let {px: D, py: j, pz: b} = this
                  , {px: _, py: C, pz: A} = T
                  , R = p.ZERO
                  , w = p.ZERO
                  , y = p.ZERO
                  , x = v.a
                  , k = p.mul(v.b, d)
                  , O = p.mul(D, _)
                  , $ = p.mul(j, C)
                  , K = p.mul(b, A)
                  , H = p.add(D, j)
                  , V = p.add(_, C);
                H = p.mul(H, V),
                V = p.add(O, $),
                H = p.sub(H, V),
                V = p.add(D, b);
                let X = p.add(_, A);
                return V = p.mul(V, X),
                X = p.add(O, K),
                V = p.sub(V, X),
                X = p.add(j, b),
                R = p.add(C, A),
                X = p.mul(X, R),
                R = p.add($, K),
                X = p.sub(X, R),
                y = p.mul(x, V),
                R = p.mul(k, K),
                y = p.add(R, y),
                R = p.sub($, y),
                y = p.add($, y),
                w = p.mul(R, y),
                $ = p.add(O, O),
                $ = p.add($, O),
                K = p.mul(x, K),
                V = p.mul(k, V),
                $ = p.add($, K),
                K = p.sub(O, K),
                K = p.mul(x, K),
                V = p.add(V, K),
                O = p.mul($, V),
                w = p.add(w, O),
                O = p.mul(X, V),
                R = p.mul(H, R),
                R = p.sub(R, O),
                O = p.mul(H, $),
                y = p.mul(X, y),
                y = p.add(y, O),
                new U(R,w,y)
            }
            subtract(T) {
                return this.add(T.negate())
            }
            is0() {
                return this.equals(U.ZERO)
            }
            wNAF(T) {
                return L.wNAFCached(this, T, U.normalizeZ)
            }
            multiplyUnsafe(T) {
                r.aInRange("scalar", T, c, v.n);
                let D = U.ZERO;
                if (T === c)
                    return D;
                if (T === l)
                    return this;
                let {endo: j} = v;
                if (!j)
                    return L.unsafeLadder(this, T);
                let {k1neg: b, k1: _, k2neg: C, k2: A} = j.splitScalar(T)
                  , R = D
                  , w = D
                  , y = this;
                for (; _ > c || A > c; )
                    _ & l && (R = R.add(y)),
                    A & l && (w = w.add(y)),
                    y = y.double(),
                    _ >>= l,
                    A >>= l;
                return b && (R = R.negate()),
                C && (w = w.negate()),
                w = new U(p.mul(w.px, j.beta),w.py,w.pz),
                R.add(w)
            }
            multiply(T) {
                let {endo: D, n: j} = v, b, _;
                if (r.aInRange("scalar", T, l, j),
                D) {
                    let {k1neg: C, k1: A, k2neg: R, k2: w} = D.splitScalar(T)
                      , {p: y, f: x} = this.wNAF(A)
                      , {p: k, f: O} = this.wNAF(w);
                    y = L.constTimeNegate(C, y),
                    k = L.constTimeNegate(R, k),
                    k = new U(p.mul(k.px, D.beta),k.py,k.pz),
                    b = y.add(k),
                    _ = x.add(O)
                } else {
                    let {p: C, f: A} = this.wNAF(T);
                    b = C,
                    _ = A
                }
                return U.normalizeZ([b, _])[0]
            }
            multiplyAndAddUnsafe(T, D, j) {
                let b = U.BASE
                  , _ = (A, R) => R !== c && R !== l && A.equals(b) ? A.multiply(R) : A.multiplyUnsafe(R)
                  , C = _(this, D).add(_(T, j));
                return C.is0() ? void 0 : C
            }
            toAffine(T) {
                return z(this, T)
            }
            isTorsionFree() {
                let {h: T, isTorsionFree: D} = v;
                if (T === l)
                    return !0;
                if (D)
                    return D(U, this);
                throw new Error("isTorsionFree() has not been declared for the elliptic curve")
            }
            clearCofactor() {
                let {h: T, clearCofactor: D} = v;
                return T === l ? this : D ? D(U, this) : this.multiplyUnsafe(v.h)
            }
            toRawBytes(T=!0) {
                return (0,
                i.abool)("isCompressed", T),
                this.assertValidity(),
                E(U, this, T)
            }
            toHex(T=!0) {
                return (0,
                i.abool)("isCompressed", T),
                r.bytesToHex(this.toRawBytes(T))
            }
        }
        U.BASE = new U(v.Gx,v.Gy,p.ONE),
        U.ZERO = new U(p.ZERO,p.ONE,p.ZERO);
        let P = v.nBitLength
          , L = (0,
        t.wNAF)(U, v.endo ? Math.ceil(P / 2) : P);
        return {
            CURVE: v,
            ProjectivePoint: U,
            normPrivateKeyToScalar: F,
            weierstrassEquation: I,
            isWithinCurveOrder: function(M) {
                return r.inRange(M, l, v.n)
            }
        }
    }
    function g(m, v) {
        let p = m.ORDER
          , S = c;
        for (let M = p - l; M % u === c; M /= u)
            S += l;
        let E = S
          , N = u << E - l - l
          , I = N * u
          , F = (p - l) / I
          , q = (F - l) / u
          , z = I - l
          , G = N
          , U = m.pow(v, F)
          , P = m.pow(v, (F + l) / u)
          , L = (M, T) => {
            let D = U
              , j = m.pow(T, z)
              , b = m.sqr(j);
            b = m.mul(b, T);
            let _ = m.mul(M, b);
            _ = m.pow(_, q),
            _ = m.mul(_, j),
            j = m.mul(_, T),
            b = m.mul(_, M);
            let C = m.mul(b, j);
            _ = m.pow(C, G);
            let A = m.eql(_, m.ONE);
            j = m.mul(b, P),
            _ = m.mul(C, D),
            b = m.cmov(j, b, A),
            C = m.cmov(_, C, A);
            for (let R = E; R > l; R--) {
                let w = R - u;
                w = u << w - l;
                let y = m.pow(C, w)
                  , x = m.eql(y, m.ONE);
                j = m.mul(b, D),
                D = m.mul(D, D),
                y = m.mul(C, D),
                b = m.cmov(j, b, x),
                C = m.cmov(y, C, x)
            }
            return {
                isValid: A,
                value: b
            }
        }
        ;
        if (m.ORDER % h === d) {
            let M = (m.ORDER - d) / h
              , T = m.sqrt(m.neg(v));
            L = (D, j) => {
                let b = m.sqr(j)
                  , _ = m.mul(D, j);
                b = m.mul(b, _);
                let C = m.pow(b, M);
                C = m.mul(C, _);
                let A = m.mul(C, T)
                  , R = m.mul(m.sqr(C), j)
                  , w = m.eql(R, D);
                return {
                    isValid: w,
                    value: m.cmov(A, C, w)
                }
            }
        }
        return L
    }
}
)(uc),
Object.defineProperty(no, "__esModule", {
    value: !0
}),
no.getHash = Ql,
no.createCurve = function(e, t) {
    let n = r => (0,
    Zp.weierstrass)(xe(xe({}, e), Ql(r)));
    return Object.freeze(it(xe({}, n(t)), {
        create: n
    }))
}
;
var Yp = lc
  , Xl = nn
  , Zp = uc;
function Ql(e) {
    return {
        hash: e,
        hmac: (t, ...n) => (0,
        Yp.hmac)(e, t, (0,
        Xl.concatBytes)(...n)),
        randomBytes: Xl.randomBytes
    }
}
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.encodeToCurve = e.hashToCurve = e.schnorr = e.secp256k1 = void 0;
    let t = Xt
      , n = nn
      , r = no
      , i = gn
      , o = ke
      , s = pe
      , a = uc
      , c = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")
      , l = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141")
      , u = BigInt(1)
      , d = BigInt(2)
      , h = (_, C) => (_ + C / d) / C;
    function f(_) {
        let C = c
          , A = BigInt(3)
          , R = BigInt(6)
          , w = BigInt(11)
          , y = BigInt(22)
          , x = BigInt(23)
          , k = BigInt(44)
          , O = BigInt(88)
          , $ = _ * _ * _ % C
          , K = $ * $ * _ % C
          , H = (0,
        o.pow2)(K, A, C) * K % C
          , V = (0,
        o.pow2)(H, A, C) * K % C
          , X = (0,
        o.pow2)(V, d, C) * $ % C
          , ee = (0,
        o.pow2)(X, w, C) * X % C
          , re = (0,
        o.pow2)(ee, y, C) * ee % C
          , se = (0,
        o.pow2)(re, k, C) * re % C
          , ce = (0,
        o.pow2)(se, O, C) * se % C
          , ie = (0,
        o.pow2)(ce, k, C) * re % C
          , ne = (0,
        o.pow2)(ie, A, C) * K % C
          , ae = (0,
        o.pow2)(ne, x, C) * ee % C
          , ue = (0,
        o.pow2)(ae, R, C) * $ % C
          , ye = (0,
        o.pow2)(ue, d, C);
        if (!g.eql(g.sqr(ye), _))
            throw new Error("Cannot find square root");
        return ye
    }
    let g = (0,
    o.Field)(c, void 0, void 0, {
        sqrt: f
    });
    e.secp256k1 = (0,
    r.createCurve)({
        a: BigInt(0),
        b: BigInt(7),
        Fp: g,
        n: l,
        Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
        Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
        h: BigInt(1),
        lowS: !0,
        endo: {
            beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
            splitScalar: _ => {
                let C = l
                  , A = BigInt("0x3086d221a7d46bcde86c90e49284eb15")
                  , R = -u * BigInt("0xe4437ed6010e88286f547fa90abfe4c3")
                  , w = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8")
                  , y = A
                  , x = BigInt("0x100000000000000000000000000000000")
                  , k = h(y * _, C)
                  , O = h(-R * _, C)
                  , $ = (0,
                o.mod)(_ - k * A - O * w, C)
                  , K = (0,
                o.mod)(-k * R - O * y, C)
                  , H = $ > x
                  , V = K > x;
                if (H && ($ = C - $),
                V && (K = C - K),
                $ > x || K > x)
                    throw new Error("splitScalar: Endomorphism failed, k=" + _);
                return {
                    k1neg: H,
                    k1: $,
                    k2neg: V,
                    k2: K
                }
            }
        }
    }, t.sha256);
    let m = BigInt(0)
      , v = {};
    function p(_, ...C) {
        let A = v[_];
        if (A === void 0) {
            let R = (0,
            t.sha256)(Uint8Array.from(_, w => w.charCodeAt(0)));
            A = (0,
            s.concatBytes)(R, R),
            v[_] = A
        }
        return (0,
        t.sha256)((0,
        s.concatBytes)(A, ...C))
    }
    let S = _ => _.toRawBytes(!0).slice(1)
      , E = _ => (0,
    s.numberToBytesBE)(_, 32)
      , N = _ => (0,
    o.mod)(_, c)
      , I = _ => (0,
    o.mod)(_, l)
      , F = e.secp256k1.ProjectivePoint
      , q = (_, C, A) => F.BASE.multiplyAndAddUnsafe(_, C, A);
    function z(_) {
        let C = e.secp256k1.utils.normPrivateKeyToScalar(_)
          , A = F.fromPrivateKey(C);
        return {
            scalar: A.hasEvenY() ? C : I(-C),
            bytes: S(A)
        }
    }
    function G(_) {
        (0,
        s.aInRange)("x", _, u, c);
        let C = N(_ * _)
          , A = f(N(C * _ + BigInt(7)));
        A % d !== m && (A = N(-A));
        let R = new F(_,A,u);
        return R.assertValidity(),
        R
    }
    let U = s.bytesToNumberBE;
    function P(..._) {
        return I(U(p("BIP0340/challenge", ..._)))
    }
    function L(_) {
        return z(_).bytes
    }
    function M(_, C, A=(0,
    n.randomBytes)(32)) {
        let R = (0,
        s.ensureBytes)("message", _)
          , {bytes: w, scalar: y} = z(C)
          , x = (0,
        s.ensureBytes)("auxRand", A, 32)
          , k = E(y ^ U(p("BIP0340/aux", x)))
          , O = p("BIP0340/nonce", k, w, R)
          , $ = I(U(O));
        if ($ === m)
            throw new Error("sign failed: k is zero");
        let {bytes: K, scalar: H} = z($)
          , V = P(K, w, R)
          , X = new Uint8Array(64);
        if (X.set(K, 0),
        X.set(E(I(H + V * y)), 32),
        !T(X, R, w))
            throw new Error("sign: Invalid signature produced");
        return X
    }
    function T(_, C, A) {
        let R = (0,
        s.ensureBytes)("signature", _, 64)
          , w = (0,
        s.ensureBytes)("message", C)
          , y = (0,
        s.ensureBytes)("publicKey", A, 32);
        try {
            let x = G(U(y))
              , k = U(R.subarray(0, 32));
            if (!(0,
            s.inRange)(k, u, c))
                return !1;
            let O = U(R.subarray(32, 64));
            if (!(0,
            s.inRange)(O, u, l))
                return !1;
            let $ = P(E(k), S(x), w)
              , K = q(x, O, I(-$));
            return !(!K || !K.hasEvenY() || K.toAffine().x !== k)
        } catch {
            return !1
        }
    }
    e.schnorr = {
        getPublicKey: L,
        sign: M,
        verify: T,
        utils: {
            randomPrivateKey: e.secp256k1.utils.randomPrivateKey,
            lift_x: G,
            pointToBytes: S,
            numberToBytesBE: s.numberToBytesBE,
            bytesToNumberBE: s.bytesToNumberBE,
            taggedHash: p,
            mod: o.mod
        }
    };
    let D = (0,
    i.isogenyMap)(g, [["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7", "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581", "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262", "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"], ["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b", "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14", "0x0000000000000000000000000000000000000000000000000000000000000001"], ["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c", "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3", "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931", "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"], ["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b", "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573", "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f", "0x0000000000000000000000000000000000000000000000000000000000000001"]].map(_ => _.map(C => BigInt(C))))
      , j = (0,
    a.mapToCurveSimpleSWU)(g, {
        A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
        B: BigInt("1771"),
        Z: g.create(BigInt("-11"))
    })
      , b = (0,
    i.createHasher)(e.secp256k1.ProjectivePoint, _ => {
        let {x: C, y: A} = j(g.create(_[0]));
        return D(C, A)
    }
    , {
        DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
        encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
        p: g.ORDER,
        m: 1,
        k: 128,
        expand: "xmd",
        hash: t.sha256
    });
    e.hashToCurve = b.hashToCurve,
    e.encodeToCurve = b.encodeToCurve
}
)($h);
var ba = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.decodeHex = e.remove0x = void 0;
    var t = ht;
    e.remove0x = function(n) {
        return n.startsWith("0x") || n.startsWith("0X") ? n.slice(2) : n
    }
    ,
    e.decodeHex = function(n) {
        return (0,
        t.hexToBytes)((0,
        e.remove0x)(n))
    }
}
)(ba),
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.hexToPublicKey = e.convertPublicKeyFormat = e.getSharedPoint = e.getPublicKey = e.isValidPrivateKey = e.getValidSecret = void 0;
    var t = sc
      , n = ah
      , r = $h
      , i = ni
      , o = Ne
      , s = ba;
    e.getValidSecret = function() {
        var u;
        do
            u = (0,
            t.randomBytes)(o.SECRET_KEY_LENGTH);
        while (!(0,
        e.isValidPrivateKey)(u));
        return u
    }
    ,
    e.isValidPrivateKey = function(u) {
        return a((0,
        i.ellipticCurve)(), function(d) {
            return d.utils.isValidPrivateKey(u)
        }, function() {
            return !0
        }, function() {
            return !0
        })
    }
    ,
    e.getPublicKey = function(u) {
        return a((0,
        i.ellipticCurve)(), function(d) {
            return d.getPublicKey(u)
        }, function(d) {
            return d.getPublicKey(u)
        }, function(d) {
            return d.getPublicKey(u)
        })
    }
    ,
    e.getSharedPoint = function(u, d, h) {
        return a((0,
        i.ellipticCurve)(), function(f) {
            return f.getSharedSecret(u, d, h)
        }, function(f) {
            return f.getSharedSecret(u, d)
        }, function(f) {
            return l(f, u, d)
        })
    }
    ,
    e.convertPublicKeyFormat = function(u, d) {
        return a((0,
        i.ellipticCurve)(), function(h) {
            return h.getSharedSecret(BigInt(1), u, d)
        }, function() {
            return u
        }, function() {
            return u
        })
    }
    ;
    function a(u, d, h, f) {
        if (u === "secp256k1")
            return d(r.secp256k1);
        if (u === "x25519")
            return h(n.x25519);
        if (u === "ed25519")
            return f(n.ed25519);
        throw new Error("Not implemented")
    }
    e.hexToPublicKey = function(u) {
        var d = (0,
        s.decodeHex)(u);
        return a((0,
        i.ellipticCurve)(), function() {
            return c(d)
        }, function() {
            return d
        }, function() {
            return d
        })
    }
    ;
    var c = function(u) {
        if (u.length === o.ETH_PUBLIC_KEY_SIZE) {
            var d = new Uint8Array(1 + u.length);
            return d.set([4]),
            d.set(u, 1),
            d
        }
        return u
    }
      , l = function(u, d, h) {
        var f = u.utils.getExtendedPublicKey(d).scalar;
        return u.ExtendedPoint.fromHex(h).multiply(f).toRawBytes()
    }
}(sh);
var jh = {}
  , ar = {};
Object.defineProperty(ar, "__esModule", {
    value: !0
}),
ar.hkdf = void 0,
ar.extract = Uh,
ar.expand = Hh;
var wa = lt
  , eu = nn
  , Kh = lc;
function Uh(e, t, n) {
    return (0,
    wa.hash)(e),
    n === void 0 && (n = new Uint8Array(e.outputLen)),
    (0,
    Kh.hmac)(e, (0,
    eu.toBytes)(n), (0,
    eu.toBytes)(t))
}
var Ks = new Uint8Array([0])
  , tu = new Uint8Array;
function Hh(e, t, n, r=32) {
    if ((0,
    wa.hash)(e),
    (0,
    wa.number)(r),
    r > 255 * e.outputLen)
        throw new Error("Length should be <= 255*HashLen");
    let i = Math.ceil(r / e.outputLen);
    n === void 0 && (n = tu);
    let o = new Uint8Array(i * e.outputLen)
      , s = Kh.hmac.create(e, t)
      , a = s._cloneInto()
      , c = new Uint8Array(s.outputLen);
    for (let l = 0; l < i; l++)
        Ks[0] = l + 1,
        a.update(l === 0 ? tu : c).update(n).update(Ks).digestInto(c),
        o.set(c, e.outputLen * l),
        s._cloneInto(a);
    return s.destroy(),
    a.destroy(),
    c.fill(0),
    Ks.fill(0),
    o.slice(0, r)
}
ar.hkdf = (e, t, n, r, i) => Hh(e, Uh(e, t, n), r, i),
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getSharedKey = e.deriveKey = void 0;
    var t = ht
      , n = ar
      , r = Xt;
    e.deriveKey = function(i, o, s) {
        return (0,
        n.hkdf)(r.sha256, i, o, s, 32)
    }
    ,
    e.getSharedKey = function() {
        for (var i = [], o = 0; o < arguments.length; o++)
            i[o] = arguments[o];
        return (0,
        e.deriveKey)(t.concatBytes.apply(void 0, i))
    }
}(jh);
var nu = {}
  , fr = {}
  , Re = {}
  , Nn = {};
Object.defineProperty(Nn, "__esModule", {
    value: !0
}),
Nn.polyval = Nn.ghash = void 0,
Nn._toGHASHKey = Fh;
var Bn = ze
  , Ze = ht
  , Vt = 16
  , dc = new Uint8Array(16)
  , Pt = (0,
Ze.u32)(dc)
  , bt = e => (e >>> 0 & 255) << 24 | (e >>> 8 & 255) << 16 | (e >>> 16 & 255) << 8 | e >>> 24 & 255 | 0;
function Fh(e) {
    e.reverse();
    let t = 1 & e[15]
      , n = 0;
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        e[r] = i >>> 1 | n,
        n = (1 & i) << 7
    }
    return e[0] ^= 225 & -t,
    e
}
var Mo = class {
    constructor(t, n) {
        this.blockLen = Vt,
        this.outputLen = Vt,
        this.s0 = 0,
        this.s1 = 0,
        this.s2 = 0,
        this.s3 = 0,
        this.finished = !1,
        t = (0,
        Ze.toBytes)(t),
        (0,
        Bn.bytes)(t, 16);
        let r = (0,
        Ze.createView)(t)
          , i = r.getUint32(0, !1)
          , o = r.getUint32(4, !1)
          , s = r.getUint32(8, !1)
          , a = r.getUint32(12, !1)
          , c = [];
        for (let p = 0; p < 128; p++)
            c.push({
                s0: bt(i),
                s1: bt(o),
                s2: bt(s),
                s3: bt(a)
            }),
            {s0: i, s1: o, s2: s, s3: a} = {
                s3: (d = s) << 31 | (h = a) >>> 1,
                s2: (u = o) << 31 | d >>> 1,
                s1: (l = i) << 31 | u >>> 1,
                s0: l >>> 1 ^ 225 << 24 & -(1 & h)
            };
        var l, u, d, h;
        let f = (p => p > 65536 ? 8 : p > 1024 ? 4 : 2)(n || 1024);
        if (![1, 2, 4, 8].includes(f))
            throw new Error(`ghash: wrong window size=${f}, should be 2, 4 or 8`);
        this.W = f;
        let g = 128 / f
          , m = this.windowSize = 2 ** f
          , v = [];
        for (let p = 0; p < g; p++)
            for (let S = 0; S < m; S++) {
                let E = 0
                  , N = 0
                  , I = 0
                  , F = 0;
                for (let q = 0; q < f; q++) {
                    if (!(S >>> f - q - 1 & 1))
                        continue;
                    let {s0: z, s1: G, s2: U, s3: P} = c[f * p + q];
                    E ^= z,
                    N ^= G,
                    I ^= U,
                    F ^= P
                }
                v.push({
                    s0: E,
                    s1: N,
                    s2: I,
                    s3: F
                })
            }
        this.t = v
    }
    _updateBlock(t, n, r, i) {
        t ^= this.s0,
        n ^= this.s1,
        r ^= this.s2,
        i ^= this.s3;
        let {W: o, t: s, windowSize: a} = this
          , c = 0
          , l = 0
          , u = 0
          , d = 0
          , h = (1 << o) - 1
          , f = 0;
        for (let g of [t, n, r, i])
            for (let m = 0; m < 4; m++) {
                let v = g >>> 8 * m & 255;
                for (let p = 8 / o - 1; p >= 0; p--) {
                    let S = v >>> o * p & h
                      , {s0: E, s1: N, s2: I, s3: F} = s[f * a + S];
                    c ^= E,
                    l ^= N,
                    u ^= I,
                    d ^= F,
                    f += 1
                }
            }
        this.s0 = c,
        this.s1 = l,
        this.s2 = u,
        this.s3 = d
    }
    update(t) {
        t = (0,
        Ze.toBytes)(t),
        (0,
        Bn.exists)(this);
        let n = (0,
        Ze.u32)(t)
          , r = Math.floor(t.length / Vt)
          , i = t.length % Vt;
        for (let o = 0; o < r; o++)
            this._updateBlock(n[4 * o + 0], n[4 * o + 1], n[4 * o + 2], n[4 * o + 3]);
        return i && (dc.set(t.subarray(r * Vt)),
        this._updateBlock(Pt[0], Pt[1], Pt[2], Pt[3]),
        (0,
        Ze.clean)(Pt)),
        this
    }
    destroy() {
        let {t} = this;
        for (let n of t)
            n.s0 = 0,
            n.s1 = 0,
            n.s2 = 0,
            n.s3 = 0
    }
    digestInto(t) {
        (0,
        Bn.exists)(this),
        (0,
        Bn.output)(t, this),
        this.finished = !0;
        let {s0: n, s1: r, s2: i, s3: o} = this
          , s = (0,
        Ze.u32)(t);
        return s[0] = n,
        s[1] = r,
        s[2] = i,
        s[3] = o,
        t
    }
    digest() {
        let t = new Uint8Array(Vt);
        return this.digestInto(t),
        this.destroy(),
        t
    }
}
  , Ea = class extends Mo {
    constructor(t, n) {
        t = (0,
        Ze.toBytes)(t);
        let r = Fh((0,
        Ze.copyBytes)(t));
        super(r, n),
        (0,
        Ze.clean)(r)
    }
    update(t) {
        t = (0,
        Ze.toBytes)(t),
        (0,
        Bn.exists)(this);
        let n = (0,
        Ze.u32)(t)
          , r = t.length % Vt
          , i = Math.floor(t.length / Vt);
        for (let o = 0; o < i; o++)
            this._updateBlock(bt(n[4 * o + 3]), bt(n[4 * o + 2]), bt(n[4 * o + 1]), bt(n[4 * o + 0]));
        return r && (dc.set(t.subarray(i * Vt)),
        this._updateBlock(bt(Pt[3]), bt(Pt[2]), bt(Pt[1]), bt(Pt[0])),
        (0,
        Ze.clean)(Pt)),
        this
    }
    digestInto(t) {
        (0,
        Bn.exists)(this),
        (0,
        Bn.output)(t, this),
        this.finished = !0;
        let {s0: n, s1: r, s2: i, s3: o} = this
          , s = (0,
        Ze.u32)(t);
        return s[0] = n,
        s[1] = r,
        s[2] = i,
        s[3] = o,
        t.reverse()
    }
}
;
function ru(e) {
    let t = (r, i) => e(i, r.length).update((0,
    Ze.toBytes)(r)).digest()
      , n = e(new Uint8Array(16), 0);
    return t.outputLen = n.outputLen,
    t.blockLen = n.blockLen,
    t.create = (r, i) => e(r, i),
    t
}
Nn.ghash = ru( (e, t) => new Mo(e,t)),
Nn.polyval = ru( (e, t) => new Ea(e,t)),
Object.defineProperty(Re, "__esModule", {
    value: !0
}),
Re.unsafe = Re.aeskwp = Re.aeskw = Re.siv = Re.gcm = Re.cfb = Re.cbc = Re.ecb = Re.ctr = void 0,
Re.expandKeyLE = xt,
Re.expandKeyDecLE = oi;
var Ee = ze
  , _a = Nn
  , Q = ht
  , rt = 16
  , Hi = new Uint8Array(rt)
  , Jp = 283;
function hc(e) {
    return e << 1 ^ Jp & -(e >> 7)
}
function cr(e, t) {
    let n = 0;
    for (; t > 0; t >>= 1)
        n ^= e & -(1 & t),
        e = hc(e);
    return n
}
var Ca = ( () => {
    let e = new Uint8Array(256);
    for (let n = 0, r = 1; n < 256; n++,
    r ^= hc(r))
        e[n] = r;
    let t = new Uint8Array(256);
    t[0] = 99;
    for (let n = 0; n < 255; n++) {
        let r = e[255 - n];
        r |= r << 8,
        t[e[n]] = 255 & (r ^ r >> 4 ^ r >> 5 ^ r >> 6 ^ r >> 7 ^ 99)
    }
    return (0,
    Q.clean)(e),
    t
}
)()
  , Xp = Ca.map( (e, t) => Ca.indexOf(t))
  , Qp = e => e << 24 | e >>> 8
  , Us = e => e << 8 | e >>> 24
  , To = e => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
function zh(e, t) {
    if (e.length !== 256)
        throw new Error("Wrong sbox length");
    let n = new Uint32Array(256).map( (l, u) => t(e[u]))
      , r = n.map(Us)
      , i = r.map(Us)
      , o = i.map(Us)
      , s = new Uint32Array(65536)
      , a = new Uint32Array(65536)
      , c = new Uint16Array(65536);
    for (let l = 0; l < 256; l++)
        for (let u = 0; u < 256; u++) {
            let d = 256 * l + u;
            s[d] = n[l] ^ r[u],
            a[d] = i[l] ^ o[u],
            c[d] = e[l] << 8 | e[u]
        }
    return {
        sbox: e,
        sbox2: c,
        T0: n,
        T1: r,
        T2: i,
        T3: o,
        T01: s,
        T23: a
    }
}
var fc = zh(Ca, e => cr(e, 3) << 24 | e << 16 | e << 8 | cr(e, 2))
  , qh = zh(Xp, e => cr(e, 11) << 24 | cr(e, 13) << 16 | cr(e, 9) << 8 | cr(e, 14))
  , e1 = ( () => {
    let e = new Uint8Array(16);
    for (let t = 0, n = 1; t < 16; t++,
    n = hc(n))
        e[t] = n;
    return e
}
)();
function xt(e) {
    (0,
    Ee.bytes)(e);
    let t = e.length;
    if (![16, 24, 32].includes(t))
        throw new Error(`aes: wrong key size: should be 16, 24 or 32, got: ${t}`);
    let {sbox2: n} = fc
      , r = [];
    (0,
    Q.isAligned32)(e) || r.push(e = (0,
    Q.copyBytes)(e));
    let i = (0,
    Q.u32)(e)
      , o = i.length
      , s = c => Nt(n, c, c, c, c)
      , a = new Uint32Array(t + 28);
    a.set(i);
    for (let c = o; c < a.length; c++) {
        let l = a[c - 1];
        c % o == 0 ? l = s(Qp(l)) ^ e1[c / o - 1] : o > 6 && c % o == 4 && (l = s(l)),
        a[c] = a[c - o] ^ l
    }
    return (0,
    Q.clean)(...r),
    a
}
function oi(e) {
    let t = xt(e)
      , n = t.slice()
      , r = t.length
      , {sbox2: i} = fc
      , {T0: o, T1: s, T2: a, T3: c} = qh;
    for (let l = 0; l < r; l += 4)
        for (let u = 0; u < 4; u++)
            n[l + u] = t[r - l - 4 + u];
    (0,
    Q.clean)(t);
    for (let l = 4; l < r - 4; l++) {
        let u = n[l]
          , d = Nt(i, u, u, u, u);
        n[l] = o[255 & d] ^ s[d >>> 8 & 255] ^ a[d >>> 16 & 255] ^ c[d >>> 24]
    }
    return n
}
function Cn(e, t, n, r, i, o) {
    return e[n << 8 & 65280 | r >>> 8 & 255] ^ t[i >>> 8 & 65280 | o >>> 24 & 255]
}
function Nt(e, t, n, r, i) {
    return e[255 & t | 65280 & n] | e[r >>> 16 & 255 | i >>> 16 & 65280] << 16
}
function Je(e, t, n, r, i) {
    let {sbox2: o, T01: s, T23: a} = fc
      , c = 0;
    t ^= e[c++],
    n ^= e[c++],
    r ^= e[c++],
    i ^= e[c++];
    let l = e.length / 4 - 2;
    for (let u = 0; u < l; u++) {
        let d = e[c++] ^ Cn(s, a, t, n, r, i)
          , h = e[c++] ^ Cn(s, a, n, r, i, t)
          , f = e[c++] ^ Cn(s, a, r, i, t, n)
          , g = e[c++] ^ Cn(s, a, i, t, n, r);
        t = d,
        n = h,
        r = f,
        i = g
    }
    return {
        s0: e[c++] ^ Nt(o, t, n, r, i),
        s1: e[c++] ^ Nt(o, n, r, i, t),
        s2: e[c++] ^ Nt(o, r, i, t, n),
        s3: e[c++] ^ Nt(o, i, t, n, r)
    }
}
function si(e, t, n, r, i) {
    let {sbox2: o, T01: s, T23: a} = qh
      , c = 0;
    t ^= e[c++],
    n ^= e[c++],
    r ^= e[c++],
    i ^= e[c++];
    let l = e.length / 4 - 2;
    for (let u = 0; u < l; u++) {
        let d = e[c++] ^ Cn(s, a, t, i, r, n)
          , h = e[c++] ^ Cn(s, a, n, t, i, r)
          , f = e[c++] ^ Cn(s, a, r, n, t, i)
          , g = e[c++] ^ Cn(s, a, i, r, n, t);
        t = d,
        n = h,
        r = f,
        i = g
    }
    return {
        s0: e[c++] ^ Nt(o, t, i, r, n),
        s1: e[c++] ^ Nt(o, n, t, i, r),
        s2: e[c++] ^ Nt(o, r, n, t, i),
        s3: e[c++] ^ Nt(o, i, r, n, t)
    }
}
function pr(e, t) {
    if (t === void 0)
        return new Uint8Array(e);
    if ((0,
    Ee.bytes)(t),
    t.length < e)
        throw new Error(`aes: wrong destination length, expected at least ${e}, got: ${t.length}`);
    if (!(0,
    Q.isAligned32)(t))
        throw new Error("unaligned dst");
    return t
}
function Vh(e, t, n, r) {
    (0,
    Ee.bytes)(t, rt),
    (0,
    Ee.bytes)(n);
    let i = n.length;
    r = pr(i, r);
    let o = t
      , s = (0,
    Q.u32)(o)
      , {s0: a, s1: c, s2: l, s3: u} = Je(e, s[0], s[1], s[2], s[3])
      , d = (0,
    Q.u32)(n)
      , h = (0,
    Q.u32)(r);
    for (let g = 0; g + 4 <= d.length; g += 4) {
        h[g + 0] = d[g + 0] ^ a,
        h[g + 1] = d[g + 1] ^ c,
        h[g + 2] = d[g + 2] ^ l,
        h[g + 3] = d[g + 3] ^ u;
        let m = 1;
        for (let v = o.length - 1; v >= 0; v--)
            m = m + (255 & o[v]) | 0,
            o[v] = 255 & m,
            m >>>= 8;
        ({s0: a, s1: c, s2: l, s3: u} = Je(e, s[0], s[1], s[2], s[3]))
    }
    let f = rt * Math.floor(d.length / 4);
    if (f < i) {
        let g = new Uint32Array([a, c, l, u])
          , m = (0,
        Q.u8)(g);
        for (let v = f, p = 0; v < i; v++,
        p++)
            r[v] = n[v] ^ m[p];
        (0,
        Q.clean)(g)
    }
    return r
}
function lr(e, t, n, r, i) {
    (0,
    Ee.bytes)(n, rt),
    (0,
    Ee.bytes)(r),
    i = pr(r.length, i);
    let o = n
      , s = (0,
    Q.u32)(o)
      , a = (0,
    Q.createView)(o)
      , c = (0,
    Q.u32)(r)
      , l = (0,
    Q.u32)(i)
      , u = t ? 0 : 12
      , d = r.length
      , h = a.getUint32(u, t)
      , {s0: f, s1: g, s2: m, s3: v} = Je(e, s[0], s[1], s[2], s[3]);
    for (let S = 0; S + 4 <= c.length; S += 4)
        l[S + 0] = c[S + 0] ^ f,
        l[S + 1] = c[S + 1] ^ g,
        l[S + 2] = c[S + 2] ^ m,
        l[S + 3] = c[S + 3] ^ v,
        h = h + 1 >>> 0,
        a.setUint32(u, h, t),
        {s0: f, s1: g, s2: m, s3: v} = Je(e, s[0], s[1], s[2], s[3]);
    let p = rt * Math.floor(c.length / 4);
    if (p < d) {
        let S = new Uint32Array([f, g, m, v])
          , E = (0,
        Q.u8)(S);
        for (let N = p, I = 0; N < d; N++,
        I++)
            i[N] = r[N] ^ E[I];
        (0,
        Q.clean)(S)
    }
    return i
}
function iu(e) {
    if ((0,
    Ee.bytes)(e),
    e.length % rt != 0)
        throw new Error("aes/(cbc-ecb).decrypt ciphertext should consist of blocks with size 16")
}
function ou(e, t, n) {
    (0,
    Ee.bytes)(e);
    let r = e.length
      , i = r % rt;
    if (!t && i !== 0)
        throw new Error("aec/(cbc-ecb): unpadded plaintext with disabled padding");
    (0,
    Q.isAligned32)(e) || (e = (0,
    Q.copyBytes)(e));
    let o = (0,
    Q.u32)(e);
    if (t) {
        let a = rt - i;
        a || (a = rt),
        r += a
    }
    let s = pr(r, n);
    return {
        b: o,
        o: (0,
        Q.u32)(s),
        out: s
    }
}
function su(e, t) {
    if (!t)
        return e;
    let n = e.length;
    if (!n)
        throw new Error("aes/pcks5: empty ciphertext not allowed");
    let r = e[n - 1];
    if (r <= 0 || r > 16)
        throw new Error("aes/pcks5: wrong padding");
    let i = e.subarray(0, -r);
    for (let o = 0; o < r; o++)
        if (e[n - o - 1] !== r)
            throw new Error("aes/pcks5: wrong padding");
    return i
}
function au(e) {
    let t = new Uint8Array(16)
      , n = (0,
    Q.u32)(t);
    t.set(e);
    let r = rt - e.length;
    for (let i = rt - r; i < rt; i++)
        t[i] = r;
    return n
}
function Wh(e, t, n, r, i) {
    let o = i == null ? 0 : i.length
      , s = e.create(n, r.length + o);
    i && s.update(i),
    s.update(r);
    let a = new Uint8Array(16)
      , c = (0,
    Q.createView)(a);
    i && (0,
    Q.setBigUint64)(c, 0, BigInt(8 * o), t),
    (0,
    Q.setBigUint64)(c, 8, BigInt(8 * r.length), t),
    s.update(a);
    let l = s.digest();
    return (0,
    Q.clean)(a),
    l
}
Re.ctr = (0,
Q.wrapCipher)({
    blockSize: 16,
    nonceLength: 16
}, function(e, t) {
    function n(r, i) {
        if ((0,
        Ee.bytes)(r),
        i !== void 0 && ((0,
        Ee.bytes)(i),
        !(0,
        Q.isAligned32)(i)))
            throw new Error("unaligned destination");
        let o = xt(e)
          , s = (0,
        Q.copyBytes)(t)
          , a = [o, s];
        (0,
        Q.isAligned32)(r) || a.push(r = (0,
        Q.copyBytes)(r));
        let c = Vh(o, s, r, i);
        return (0,
        Q.clean)(...a),
        c
    }
    return (0,
    Ee.bytes)(e),
    (0,
    Ee.bytes)(t, rt),
    {
        encrypt: (r, i) => n(r, i),
        decrypt: (r, i) => n(r, i)
    }
}),
Re.ecb = (0,
Q.wrapCipher)({
    blockSize: 16
}, function(e, t={}) {
    (0,
    Ee.bytes)(e);
    let n = !t.disablePadding;
    return {
        encrypt(r, i) {
            let {b: o, o: s, out: a} = ou(r, n, i)
              , c = xt(e)
              , l = 0;
            for (; l + 4 <= o.length; ) {
                let {s0: u, s1: d, s2: h, s3: f} = Je(c, o[l + 0], o[l + 1], o[l + 2], o[l + 3]);
                s[l++] = u,
                s[l++] = d,
                s[l++] = h,
                s[l++] = f
            }
            if (n) {
                let u = au(r.subarray(4 * l))
                  , {s0: d, s1: h, s2: f, s3: g} = Je(c, u[0], u[1], u[2], u[3]);
                s[l++] = d,
                s[l++] = h,
                s[l++] = f,
                s[l++] = g
            }
            return (0,
            Q.clean)(c),
            a
        },
        decrypt(r, i) {
            iu(r);
            let o = oi(e)
              , s = pr(r.length, i)
              , a = [o];
            (0,
            Q.isAligned32)(r) || a.push(r = (0,
            Q.copyBytes)(r));
            let c = (0,
            Q.u32)(r)
              , l = (0,
            Q.u32)(s);
            for (let u = 0; u + 4 <= c.length; ) {
                let {s0: d, s1: h, s2: f, s3: g} = si(o, c[u + 0], c[u + 1], c[u + 2], c[u + 3]);
                l[u++] = d,
                l[u++] = h,
                l[u++] = f,
                l[u++] = g
            }
            return (0,
            Q.clean)(...a),
            su(s, n)
        }
    }
}),
Re.cbc = (0,
Q.wrapCipher)({
    blockSize: 16,
    nonceLength: 16
}, function(e, t, n={}) {
    (0,
    Ee.bytes)(e),
    (0,
    Ee.bytes)(t, 16);
    let r = !n.disablePadding;
    return {
        encrypt(i, o) {
            let s = xt(e)
              , {b: a, o: c, out: l} = ou(i, r, o)
              , u = t
              , d = [s];
            (0,
            Q.isAligned32)(u) || d.push(u = (0,
            Q.copyBytes)(u));
            let h = (0,
            Q.u32)(u)
              , f = h[0]
              , g = h[1]
              , m = h[2]
              , v = h[3]
              , p = 0;
            for (; p + 4 <= a.length; )
                f ^= a[p + 0],
                g ^= a[p + 1],
                m ^= a[p + 2],
                v ^= a[p + 3],
                {s0: f, s1: g, s2: m, s3: v} = Je(s, f, g, m, v),
                c[p++] = f,
                c[p++] = g,
                c[p++] = m,
                c[p++] = v;
            if (r) {
                let S = au(i.subarray(4 * p));
                f ^= S[0],
                g ^= S[1],
                m ^= S[2],
                v ^= S[3],
                {s0: f, s1: g, s2: m, s3: v} = Je(s, f, g, m, v),
                c[p++] = f,
                c[p++] = g,
                c[p++] = m,
                c[p++] = v
            }
            return (0,
            Q.clean)(...d),
            l
        },
        decrypt(i, o) {
            iu(i);
            let s = oi(e)
              , a = t
              , c = [s];
            (0,
            Q.isAligned32)(a) || c.push(a = (0,
            Q.copyBytes)(a));
            let l = (0,
            Q.u32)(a)
              , u = pr(i.length, o);
            (0,
            Q.isAligned32)(i) || c.push(i = (0,
            Q.copyBytes)(i));
            let d = (0,
            Q.u32)(i)
              , h = (0,
            Q.u32)(u)
              , f = l[0]
              , g = l[1]
              , m = l[2]
              , v = l[3];
            for (let p = 0; p + 4 <= d.length; ) {
                let S = f
                  , E = g
                  , N = m
                  , I = v;
                f = d[p + 0],
                g = d[p + 1],
                m = d[p + 2],
                v = d[p + 3];
                let {s0: F, s1: q, s2: z, s3: G} = si(s, f, g, m, v);
                h[p++] = F ^ S,
                h[p++] = q ^ E,
                h[p++] = z ^ N,
                h[p++] = G ^ I
            }
            return (0,
            Q.clean)(...c),
            su(u, r)
        }
    }
}),
Re.cfb = (0,
Q.wrapCipher)({
    blockSize: 16,
    nonceLength: 16
}, function(e, t) {
    function n(r, i, o) {
        (0,
        Ee.bytes)(r);
        let s = r.length;
        o = pr(s, o);
        let a = xt(e)
          , c = t
          , l = [a];
        (0,
        Q.isAligned32)(c) || l.push(c = (0,
        Q.copyBytes)(c)),
        (0,
        Q.isAligned32)(r) || l.push(r = (0,
        Q.copyBytes)(r));
        let u = (0,
        Q.u32)(r)
          , d = (0,
        Q.u32)(o)
          , h = i ? d : u
          , f = (0,
        Q.u32)(c)
          , g = f[0]
          , m = f[1]
          , v = f[2]
          , p = f[3];
        for (let E = 0; E + 4 <= u.length; ) {
            let {s0: N, s1: I, s2: F, s3: q} = Je(a, g, m, v, p);
            d[E + 0] = u[E + 0] ^ N,
            d[E + 1] = u[E + 1] ^ I,
            d[E + 2] = u[E + 2] ^ F,
            d[E + 3] = u[E + 3] ^ q,
            g = h[E++],
            m = h[E++],
            v = h[E++],
            p = h[E++]
        }
        let S = rt * Math.floor(u.length / 4);
        if (S < s) {
            ({s0: g, s1: m, s2: v, s3: p} = Je(a, g, m, v, p));
            let E = (0,
            Q.u8)(new Uint32Array([g, m, v, p]));
            for (let N = S, I = 0; N < s; N++,
            I++)
                o[N] = r[N] ^ E[I];
            (0,
            Q.clean)(E)
        }
        return (0,
        Q.clean)(...l),
        o
    }
    return (0,
    Ee.bytes)(e),
    (0,
    Ee.bytes)(t, 16),
    {
        encrypt: (r, i) => n(r, !0, i),
        decrypt: (r, i) => n(r, !1, i)
    }
}),
Re.gcm = (0,
Q.wrapCipher)({
    blockSize: 16,
    nonceLength: 12,
    tagLength: 16
}, function(e, t, n) {
    if ((0,
    Ee.bytes)(e),
    (0,
    Ee.bytes)(t),
    n !== void 0 && (0,
    Ee.bytes)(n),
    t.length < 8)
        throw new Error("aes/gcm: invalid nonce length");
    let r = 16;
    function i(s, a, c) {
        let l = Wh(_a.ghash, !1, s, c, n);
        for (let u = 0; u < a.length; u++)
            l[u] ^= a[u];
        return l
    }
    function o() {
        let s = xt(e)
          , a = Hi.slice()
          , c = Hi.slice();
        if (lr(s, !1, c, c, a),
        t.length === 12)
            c.set(t);
        else {
            let l = Hi.slice()
              , u = (0,
            Q.createView)(l);
            (0,
            Q.setBigUint64)(u, 8, BigInt(8 * t.length), !1);
            let d = _a.ghash.create(a).update(t).update(l);
            d.digestInto(c),
            d.destroy()
        }
        return {
            xk: s,
            authKey: a,
            counter: c,
            tagMask: lr(s, !1, c, Hi)
        }
    }
    return {
        encrypt(s) {
            (0,
            Ee.bytes)(s);
            let {xk: a, authKey: c, counter: l, tagMask: u} = o()
              , d = new Uint8Array(s.length + r)
              , h = [a, c, l, u];
            (0,
            Q.isAligned32)(s) || h.push(s = (0,
            Q.copyBytes)(s)),
            lr(a, !1, l, s, d);
            let f = i(c, u, d.subarray(0, d.length - r));
            return h.push(f),
            d.set(f, s.length),
            (0,
            Q.clean)(...h),
            d
        },
        decrypt(s) {
            if ((0,
            Ee.bytes)(s),
            s.length < r)
                throw new Error("aes/gcm: ciphertext less than tagLen (16)");
            let {xk: a, authKey: c, counter: l, tagMask: u} = o()
              , d = [a, c, u, l];
            (0,
            Q.isAligned32)(s) || d.push(s = (0,
            Q.copyBytes)(s));
            let h = s.subarray(0, -16)
              , f = s.subarray(-16)
              , g = i(c, u, h);
            if (d.push(g),
            !(0,
            Q.equalBytes)(g, f))
                throw new Error("aes/gcm: invalid ghash tag");
            let m = lr(a, !1, l, h);
            return (0,
            Q.clean)(...d),
            m
        }
    }
});
var Fi = (e, t, n) => r => {
    if (!Number.isSafeInteger(r) || t > r || r > n)
        throw new Error(`${e}: invalid value=${r}, must be [${t}..${n}]`)
}
;
function Gh(e) {
    return e != null && typeof e == "object" && (e instanceof Uint32Array || e.constructor.name === "Uint32Array")
}
function Yh(e, t) {
    if ((0,
    Ee.bytes)(t, 16),
    !Gh(e))
        throw new Error("_encryptBlock accepts result of expandKeyLE");
    let n = (0,
    Q.u32)(t)
      , {s0: r, s1: i, s2: o, s3: s} = Je(e, n[0], n[1], n[2], n[3]);
    return n[0] = r,
    n[1] = i,
    n[2] = o,
    n[3] = s,
    t
}
function Zh(e, t) {
    if ((0,
    Ee.bytes)(t, 16),
    !Gh(e))
        throw new Error("_decryptBlock accepts result of expandKeyLE");
    let n = (0,
    Q.u32)(t)
      , {s0: r, s1: i, s2: o, s3: s} = si(e, n[0], n[1], n[2], n[3]);
    return n[0] = r,
    n[1] = i,
    n[2] = o,
    n[3] = s,
    t
}
Re.siv = (0,
Q.wrapCipher)({
    blockSize: 16,
    nonceLength: 12,
    tagLength: 16
}, function(e, t, n) {
    let r = Fi("AAD", 0, 68719476736)
      , i = Fi("plaintext", 0, 2 ** 36)
      , o = Fi("nonce", 12, 12)
      , s = Fi("ciphertext", 16, 2 ** 36 + 16);
    function a() {
        let u = xt(e)
          , d = new Uint8Array(e.length)
          , h = new Uint8Array(16)
          , f = [u, d]
          , g = t;
        (0,
        Q.isAligned32)(g) || f.push(g = (0,
        Q.copyBytes)(g));
        let m = (0,
        Q.u32)(g)
          , v = 0
          , p = m[0]
          , S = m[1]
          , E = m[2]
          , N = 0;
        for (let F of [h, d].map(Q.u32)) {
            let q = (0,
            Q.u32)(F);
            for (let z = 0; z < q.length; z += 2) {
                let {s0: G, s1: U} = Je(u, v, p, S, E);
                q[z + 0] = G,
                q[z + 1] = U,
                v = ++N
            }
        }
        let I = {
            authKey: h,
            encKey: xt(d)
        };
        return (0,
        Q.clean)(...f),
        I
    }
    function c(u, d, h) {
        let f = Wh(_a.polyval, !0, d, h, n);
        for (let E = 0; E < 12; E++)
            f[E] ^= t[E];
        f[15] &= 127;
        let g = (0,
        Q.u32)(f)
          , m = g[0]
          , v = g[1]
          , p = g[2]
          , S = g[3];
        return {s0: m, s1: v, s2: p, s3: S} = Je(u, m, v, p, S),
        g[0] = m,
        g[1] = v,
        g[2] = p,
        g[3] = S,
        f
    }
    function l(u, d, h) {
        let f = (0,
        Q.copyBytes)(d);
        f[15] |= 128;
        let g = lr(u, !0, f, h);
        return (0,
        Q.clean)(f),
        g
    }
    return (0,
    Ee.bytes)(e, 16, 24, 32),
    (0,
    Ee.bytes)(t),
    o(t.length),
    n !== void 0 && ((0,
    Ee.bytes)(n),
    r(n.length)),
    {
        encrypt(u) {
            (0,
            Ee.bytes)(u),
            i(u.length);
            let {encKey: d, authKey: h} = a()
              , f = c(d, h, u)
              , g = [d, h, f];
            (0,
            Q.isAligned32)(u) || g.push(u = (0,
            Q.copyBytes)(u));
            let m = new Uint8Array(u.length + 16);
            return m.set(f, u.length),
            m.set(l(d, f, u)),
            (0,
            Q.clean)(...g),
            m
        },
        decrypt(u) {
            (0,
            Ee.bytes)(u),
            s(u.length);
            let d = u.subarray(-16)
              , {encKey: h, authKey: f} = a()
              , g = [h, f];
            (0,
            Q.isAligned32)(u) || g.push(u = (0,
            Q.copyBytes)(u));
            let m = l(h, d, u.subarray(0, -16))
              , v = c(h, f, m);
            if (g.push(v),
            !(0,
            Q.equalBytes)(d, v))
                throw (0,
                Q.clean)(...g),
                new Error("invalid polyval tag");
            return (0,
            Q.clean)(...g),
            m
        }
    }
});
var Ro = {
    encrypt(e, t) {
        if (t.length >= 2 ** 32)
            throw new Error("plaintext should be less than 4gb");
        let n = xt(e);
        if (t.length === 16)
            Yh(n, t);
        else {
            let r = (0,
            Q.u32)(t)
              , i = r[0]
              , o = r[1];
            for (let s = 0, a = 1; s < 6; s++)
                for (let c = 2; c < r.length; c += 2,
                a++) {
                    let {s0: l, s1: u, s2: d, s3: h} = Je(n, i, o, r[c], r[c + 1]);
                    i = l,
                    o = u ^ To(a),
                    r[c] = d,
                    r[c + 1] = h
                }
            r[0] = i,
            r[1] = o
        }
        n.fill(0)
    },
    decrypt(e, t) {
        if (t.length - 8 >= 2 ** 32)
            throw new Error("ciphertext should be less than 4gb");
        let n = oi(e)
          , r = t.length / 8 - 1;
        if (r === 1)
            Zh(n, t);
        else {
            let i = (0,
            Q.u32)(t)
              , o = i[0]
              , s = i[1];
            for (let a = 0, c = 6 * r; a < 6; a++)
                for (let l = 2 * r; l >= 1; l -= 2,
                c--) {
                    s ^= To(c);
                    let {s0: u, s1: d, s2: h, s3: f} = si(n, o, s, i[l], i[l + 1]);
                    o = u,
                    s = d,
                    i[l] = h,
                    i[l + 1] = f
                }
            i[0] = o,
            i[1] = s
        }
        n.fill(0)
    }
}
  , cu = new Uint8Array(8).fill(166);
Re.aeskw = (0,
Q.wrapCipher)({
    blockSize: 8
}, e => ({
    encrypt(t) {
        if ((0,
        Ee.bytes)(t),
        !t.length || t.length % 8 != 0)
            throw new Error("invalid plaintext length");
        if (t.length === 8)
            throw new Error("8-byte keys not allowed in AESKW, use AESKWP instead");
        let n = (0,
        Q.concatBytes)(cu, t);
        return Ro.encrypt(e, n),
        n
    },
    decrypt(t) {
        if ((0,
        Ee.bytes)(t),
        t.length % 8 != 0 || t.length < 24)
            throw new Error("invalid ciphertext length");
        let n = (0,
        Q.copyBytes)(t);
        if (Ro.decrypt(e, n),
        !(0,
        Q.equalBytes)(n.subarray(0, 8), cu))
            throw new Error("integrity check failed");
        return n.subarray(0, 8).fill(0),
        n.subarray(8)
    }
}));
var lu = 2790873510;
Re.aeskwp = (0,
Q.wrapCipher)({
    blockSize: 8
}, e => ({
    encrypt(t) {
        if ((0,
        Ee.bytes)(t),
        !t.length)
            throw new Error("invalid plaintext length");
        let n = 8 * Math.ceil(t.length / 8)
          , r = new Uint8Array(8 + n);
        r.set(t, 8);
        let i = (0,
        Q.u32)(r);
        return i[0] = lu,
        i[1] = To(t.length),
        Ro.encrypt(e, r),
        r
    },
    decrypt(t) {
        if ((0,
        Ee.bytes)(t),
        t.length < 16)
            throw new Error("invalid ciphertext length");
        let n = (0,
        Q.copyBytes)(t)
          , r = (0,
        Q.u32)(n);
        Ro.decrypt(e, n);
        let i = To(r[1]) >>> 0
          , o = 8 * Math.ceil(i / 8);
        if (r[0] !== lu || n.length - 8 !== o)
            throw new Error("integrity check failed");
        for (let s = i; s < o; s++)
            if (n[8 + s] !== 0)
                throw new Error("integrity check failed");
        return n.subarray(0, 8).fill(0),
        n.subarray(8, 8 + i)
    }
})),
Re.unsafe = {
    expandKeyLE: xt,
    expandKeyDecLE: oi,
    encrypt: Je,
    decrypt: si,
    encryptBlock: Yh,
    decryptBlock: Zh,
    ctrCounter: Vh,
    ctr32: lr
},
Object.defineProperty(fr, "__esModule", {
    value: !0
}),
fr.aes256cbc = fr.aes256gcm = void 0;
var Jh = Re;
fr.aes256gcm = function(e, t, n) {
    return (0,
    Jh.gcm)(e, t, n)
}
;
fr.aes256cbc = function(e, t, n) {
    return (0,
    Jh.cbc)(e, t)
}
;
var Oo = {}
  , Xh = {}
  , ur = {};
Object.defineProperty(ur, "__esModule", {
    value: !0
}),
ur.sigma = void 0,
ur.rotl = function(e, t) {
    return e << t | e >>> 32 - t
}
,
ur.createCipher = function(e, t) {
    let {allowShortKeys: n, extendNonceFn: r, counterLength: i, counterRight: o, rounds: s} = (0,
    yt.checkOpts)({
        allowShortKeys: !1,
        counterLength: 8,
        counterRight: !1,
        rounds: 20
    }, t);
    if (typeof e != "function")
        throw new Error("core must be a function");
    return (0,
    qt.number)(i),
    (0,
    qt.number)(s),
    (0,
    qt.bool)(o),
    (0,
    qt.bool)(n),
    (a, c, l, u, d=0) => {
        (0,
        qt.bytes)(a),
        (0,
        qt.bytes)(c),
        (0,
        qt.bytes)(l);
        let h = l.length;
        if (u === void 0 && (u = new Uint8Array(h)),
        (0,
        qt.bytes)(u),
        (0,
        qt.number)(d),
        d < 0 || d >= uu)
            throw new Error("arx: counter overflow");
        if (u.length < h)
            throw new Error(`arx: output (${u.length}) is shorter than data (${h})`);
        let f = [], g, m, v = a.length;
        if (v === 32)
            f.push(g = (0,
            yt.copyBytes)(a)),
            m = ef;
        else {
            if (v !== 16 || !n)
                throw new Error(`arx: invalid 32-byte key, got length=${v}`);
            g = new Uint8Array(32),
            g.set(a),
            g.set(a, 16),
            m = r1,
            f.push(g)
        }
        Hs(c) || f.push(c = (0,
        yt.copyBytes)(c));
        let p = (0,
        yt.u32)(g);
        if (r) {
            if (c.length !== 24)
                throw new Error("arx: extended nonce must be 24 bytes");
            r(m, p, (0,
            yt.u32)(c.subarray(0, 16)), p),
            c = c.subarray(16)
        }
        let S = 16 - i;
        if (S !== c.length)
            throw new Error(`arx: nonce must be ${S} or 16 bytes`);
        if (S !== 12) {
            let N = new Uint8Array(12);
            N.set(c, o ? 0 : 12 - c.length),
            c = N,
            f.push(c)
        }
        let E = (0,
        yt.u32)(c);
        return function(N, I, F, q, z, G, U, P) {
            let L = z.length
              , M = new Uint8Array(zi)
              , T = (0,
            yt.u32)(M)
              , D = Hs(z) && Hs(G)
              , j = D ? (0,
            yt.u32)(z) : du
              , b = D ? (0,
            yt.u32)(G) : du;
            for (let _ = 0; _ < L; U++) {
                if (N(I, F, q, T, U, P),
                U >= uu)
                    throw new Error("arx: counter overflow");
                let C = Math.min(zi, L - _);
                if (D && C === zi) {
                    let A = _ / 4;
                    if (_ % 4 != 0)
                        throw new Error("arx: invalid block position");
                    for (let R, w = 0; w < i1; w++)
                        R = A + w,
                        b[R] = j[R] ^ T[w];
                    _ += zi
                } else {
                    for (let A, R = 0; R < C; R++)
                        A = _ + R,
                        G[A] = z[A] ^ M[R];
                    _ += C
                }
            }
        }(e, m, p, E, l, u, d, s),
        (0,
        yt.clean)(...f),
        u
    }
}
;
var qt = ze
  , yt = ht
  , Qh = e => Uint8Array.from(e.split("").map(t => t.charCodeAt(0)))
  , t1 = Qh("expand 16-byte k")
  , n1 = Qh("expand 32-byte k")
  , r1 = (0,
yt.u32)(t1)
  , ef = (0,
yt.u32)(n1);
function Hs(e) {
    return e.byteOffset % 4 == 0
}
ur.sigma = ef.slice();
var zi = 64
  , i1 = 16
  , uu = 2 ** 32 - 1
  , du = new Uint32Array
  , Vr = {};
Object.defineProperty(Vr, "__esModule", {
    value: !0
}),
Vr.poly1305 = void 0,
Vr.wrapConstructorWithKey = tf;
var qi = ze
  , Hr = ht
  , je = (e, t) => 255 & e[t++] | (255 & e[t++]) << 8
  , Sa = class {
    constructor(t) {
        this.blockLen = 16,
        this.outputLen = 16,
        this.buffer = new Uint8Array(16),
        this.r = new Uint16Array(10),
        this.h = new Uint16Array(10),
        this.pad = new Uint16Array(8),
        this.pos = 0,
        this.finished = !1,
        t = (0,
        Hr.toBytes)(t),
        (0,
        qi.bytes)(t, 32);
        let n = je(t, 0)
          , r = je(t, 2)
          , i = je(t, 4)
          , o = je(t, 6)
          , s = je(t, 8)
          , a = je(t, 10)
          , c = je(t, 12)
          , l = je(t, 14);
        this.r[0] = 8191 & n,
        this.r[1] = 8191 & (n >>> 13 | r << 3),
        this.r[2] = 7939 & (r >>> 10 | i << 6),
        this.r[3] = 8191 & (i >>> 7 | o << 9),
        this.r[4] = 255 & (o >>> 4 | s << 12),
        this.r[5] = s >>> 1 & 8190,
        this.r[6] = 8191 & (s >>> 14 | a << 2),
        this.r[7] = 8065 & (a >>> 11 | c << 5),
        this.r[8] = 8191 & (c >>> 8 | l << 8),
        this.r[9] = l >>> 5 & 127;
        for (let u = 0; u < 8; u++)
            this.pad[u] = je(t, 16 + 2 * u)
    }
    process(t, n, r=!1) {
        let i = r ? 0 : 2048
          , {h: o, r: s} = this
          , a = s[0]
          , c = s[1]
          , l = s[2]
          , u = s[3]
          , d = s[4]
          , h = s[5]
          , f = s[6]
          , g = s[7]
          , m = s[8]
          , v = s[9]
          , p = je(t, n + 0)
          , S = je(t, n + 2)
          , E = je(t, n + 4)
          , N = je(t, n + 6)
          , I = je(t, n + 8)
          , F = je(t, n + 10)
          , q = je(t, n + 12)
          , z = je(t, n + 14)
          , G = o[0] + (8191 & p)
          , U = o[1] + (8191 & (p >>> 13 | S << 3))
          , P = o[2] + (8191 & (S >>> 10 | E << 6))
          , L = o[3] + (8191 & (E >>> 7 | N << 9))
          , M = o[4] + (8191 & (N >>> 4 | I << 12))
          , T = o[5] + (I >>> 1 & 8191)
          , D = o[6] + (8191 & (I >>> 14 | F << 2))
          , j = o[7] + (8191 & (F >>> 11 | q << 5))
          , b = o[8] + (8191 & (q >>> 8 | z << 8))
          , _ = o[9] + (z >>> 5 | i)
          , C = 0
          , A = C + G * a + U * (5 * v) + P * (5 * m) + L * (5 * g) + M * (5 * f);
        C = A >>> 13,
        A &= 8191,
        A += T * (5 * h) + D * (5 * d) + j * (5 * u) + b * (5 * l) + _ * (5 * c),
        C += A >>> 13,
        A &= 8191;
        let R = C + G * c + U * a + P * (5 * v) + L * (5 * m) + M * (5 * g);
        C = R >>> 13,
        R &= 8191,
        R += T * (5 * f) + D * (5 * h) + j * (5 * d) + b * (5 * u) + _ * (5 * l),
        C += R >>> 13,
        R &= 8191;
        let w = C + G * l + U * c + P * a + L * (5 * v) + M * (5 * m);
        C = w >>> 13,
        w &= 8191,
        w += T * (5 * g) + D * (5 * f) + j * (5 * h) + b * (5 * d) + _ * (5 * u),
        C += w >>> 13,
        w &= 8191;
        let y = C + G * u + U * l + P * c + L * a + M * (5 * v);
        C = y >>> 13,
        y &= 8191,
        y += T * (5 * m) + D * (5 * g) + j * (5 * f) + b * (5 * h) + _ * (5 * d),
        C += y >>> 13,
        y &= 8191;
        let x = C + G * d + U * u + P * l + L * c + M * a;
        C = x >>> 13,
        x &= 8191,
        x += T * (5 * v) + D * (5 * m) + j * (5 * g) + b * (5 * f) + _ * (5 * h),
        C += x >>> 13,
        x &= 8191;
        let k = C + G * h + U * d + P * u + L * l + M * c;
        C = k >>> 13,
        k &= 8191,
        k += T * a + D * (5 * v) + j * (5 * m) + b * (5 * g) + _ * (5 * f),
        C += k >>> 13,
        k &= 8191;
        let O = C + G * f + U * h + P * d + L * u + M * l;
        C = O >>> 13,
        O &= 8191,
        O += T * c + D * a + j * (5 * v) + b * (5 * m) + _ * (5 * g),
        C += O >>> 13,
        O &= 8191;
        let $ = C + G * g + U * f + P * h + L * d + M * u;
        C = $ >>> 13,
        $ &= 8191,
        $ += T * l + D * c + j * a + b * (5 * v) + _ * (5 * m),
        C += $ >>> 13,
        $ &= 8191;
        let K = C + G * m + U * g + P * f + L * h + M * d;
        C = K >>> 13,
        K &= 8191,
        K += T * u + D * l + j * c + b * a + _ * (5 * v),
        C += K >>> 13,
        K &= 8191;
        let H = C + G * v + U * m + P * g + L * f + M * h;
        C = H >>> 13,
        H &= 8191,
        H += T * d + D * u + j * l + b * c + _ * a,
        C += H >>> 13,
        H &= 8191,
        C = (C << 2) + C | 0,
        C = C + A | 0,
        A = 8191 & C,
        C >>>= 13,
        R += C,
        o[0] = A,
        o[1] = R,
        o[2] = w,
        o[3] = y,
        o[4] = x,
        o[5] = k,
        o[6] = O,
        o[7] = $,
        o[8] = K,
        o[9] = H
    }
    finalize() {
        let {h: t, pad: n} = this
          , r = new Uint16Array(10)
          , i = t[1] >>> 13;
        t[1] &= 8191;
        for (let a = 2; a < 10; a++)
            t[a] += i,
            i = t[a] >>> 13,
            t[a] &= 8191;
        t[0] += 5 * i,
        i = t[0] >>> 13,
        t[0] &= 8191,
        t[1] += i,
        i = t[1] >>> 13,
        t[1] &= 8191,
        t[2] += i,
        r[0] = t[0] + 5,
        i = r[0] >>> 13,
        r[0] &= 8191;
        for (let a = 1; a < 10; a++)
            r[a] = t[a] + i,
            i = r[a] >>> 13,
            r[a] &= 8191;
        r[9] -= 8192;
        let o = (1 ^ i) - 1;
        for (let a = 0; a < 10; a++)
            r[a] &= o;
        o = ~o;
        for (let a = 0; a < 10; a++)
            t[a] = t[a] & o | r[a];
        t[0] = 65535 & (t[0] | t[1] << 13),
        t[1] = 65535 & (t[1] >>> 3 | t[2] << 10),
        t[2] = 65535 & (t[2] >>> 6 | t[3] << 7),
        t[3] = 65535 & (t[3] >>> 9 | t[4] << 4),
        t[4] = 65535 & (t[4] >>> 12 | t[5] << 1 | t[6] << 14),
        t[5] = 65535 & (t[6] >>> 2 | t[7] << 11),
        t[6] = 65535 & (t[7] >>> 5 | t[8] << 8),
        t[7] = 65535 & (t[8] >>> 8 | t[9] << 5);
        let s = t[0] + n[0];
        t[0] = 65535 & s;
        for (let a = 1; a < 8; a++)
            s = (t[a] + n[a] | 0) + (s >>> 16) | 0,
            t[a] = 65535 & s;
        (0,
        Hr.clean)(r)
    }
    update(t) {
        (0,
        qi.exists)(this);
        let {buffer: n, blockLen: r} = this
          , i = (t = (0,
        Hr.toBytes)(t)).length;
        for (let o = 0; o < i; ) {
            let s = Math.min(r - this.pos, i - o);
            if (s !== r)
                n.set(t.subarray(o, o + s), this.pos),
                this.pos += s,
                o += s,
                this.pos === r && (this.process(n, 0, !1),
                this.pos = 0);
            else
                for (; r <= i - o; o += r)
                    this.process(t, o)
        }
        return this
    }
    destroy() {
        (0,
        Hr.clean)(this.h, this.r, this.buffer, this.pad)
    }
    digestInto(t) {
        (0,
        qi.exists)(this),
        (0,
        qi.output)(t, this),
        this.finished = !0;
        let {buffer: n, h: r} = this
          , {pos: i} = this;
        if (i) {
            for (n[i++] = 1; i < 16; i++)
                n[i] = 0;
            this.process(n, 0, !0)
        }
        this.finalize();
        let o = 0;
        for (let s = 0; s < 8; s++)
            t[o++] = r[s] >>> 0,
            t[o++] = r[s] >>> 8;
        return t
    }
    digest() {
        let {buffer: t, outputLen: n} = this;
        this.digestInto(t);
        let r = t.slice(0, n);
        return this.destroy(),
        r
    }
}
;
function tf(e) {
    let t = (r, i) => e(i).update((0,
    Hr.toBytes)(r)).digest()
      , n = e(new Uint8Array(32));
    return t.outputLen = n.outputLen,
    t.blockLen = n.blockLen,
    t.create = r => e(r),
    t
}
Vr.poly1305 = tf(e => new Sa(e)),
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.xchacha20poly1305 = e.chacha20poly1305 = e._poly1305_aead = e.chacha12 = e.chacha8 = e.xchacha20 = e.chacha20 = e.chacha20orig = void 0,
    e.hchacha = s;
    let t = ur
      , n = ze
      , r = Vr
      , i = ht;
    function o(d, h, f, g, m, v=20) {
        let p = d[0]
          , S = d[1]
          , E = d[2]
          , N = d[3]
          , I = h[0]
          , F = h[1]
          , q = h[2]
          , z = h[3]
          , G = h[4]
          , U = h[5]
          , P = h[6]
          , L = h[7]
          , M = m
          , T = f[0]
          , D = f[1]
          , j = f[2]
          , b = p
          , _ = S
          , C = E
          , A = N
          , R = I
          , w = F
          , y = q
          , x = z
          , k = G
          , O = U
          , $ = P
          , K = L
          , H = M
          , V = T
          , X = D
          , ee = j;
        for (let se = 0; se < v; se += 2)
            b = b + R | 0,
            H = (0,
            t.rotl)(H ^ b, 16),
            k = k + H | 0,
            R = (0,
            t.rotl)(R ^ k, 12),
            b = b + R | 0,
            H = (0,
            t.rotl)(H ^ b, 8),
            k = k + H | 0,
            R = (0,
            t.rotl)(R ^ k, 7),
            _ = _ + w | 0,
            V = (0,
            t.rotl)(V ^ _, 16),
            O = O + V | 0,
            w = (0,
            t.rotl)(w ^ O, 12),
            _ = _ + w | 0,
            V = (0,
            t.rotl)(V ^ _, 8),
            O = O + V | 0,
            w = (0,
            t.rotl)(w ^ O, 7),
            C = C + y | 0,
            X = (0,
            t.rotl)(X ^ C, 16),
            $ = $ + X | 0,
            y = (0,
            t.rotl)(y ^ $, 12),
            C = C + y | 0,
            X = (0,
            t.rotl)(X ^ C, 8),
            $ = $ + X | 0,
            y = (0,
            t.rotl)(y ^ $, 7),
            A = A + x | 0,
            ee = (0,
            t.rotl)(ee ^ A, 16),
            K = K + ee | 0,
            x = (0,
            t.rotl)(x ^ K, 12),
            A = A + x | 0,
            ee = (0,
            t.rotl)(ee ^ A, 8),
            K = K + ee | 0,
            x = (0,
            t.rotl)(x ^ K, 7),
            b = b + w | 0,
            ee = (0,
            t.rotl)(ee ^ b, 16),
            $ = $ + ee | 0,
            w = (0,
            t.rotl)(w ^ $, 12),
            b = b + w | 0,
            ee = (0,
            t.rotl)(ee ^ b, 8),
            $ = $ + ee | 0,
            w = (0,
            t.rotl)(w ^ $, 7),
            _ = _ + y | 0,
            H = (0,
            t.rotl)(H ^ _, 16),
            K = K + H | 0,
            y = (0,
            t.rotl)(y ^ K, 12),
            _ = _ + y | 0,
            H = (0,
            t.rotl)(H ^ _, 8),
            K = K + H | 0,
            y = (0,
            t.rotl)(y ^ K, 7),
            C = C + x | 0,
            V = (0,
            t.rotl)(V ^ C, 16),
            k = k + V | 0,
            x = (0,
            t.rotl)(x ^ k, 12),
            C = C + x | 0,
            V = (0,
            t.rotl)(V ^ C, 8),
            k = k + V | 0,
            x = (0,
            t.rotl)(x ^ k, 7),
            A = A + R | 0,
            X = (0,
            t.rotl)(X ^ A, 16),
            O = O + X | 0,
            R = (0,
            t.rotl)(R ^ O, 12),
            A = A + R | 0,
            X = (0,
            t.rotl)(X ^ A, 8),
            O = O + X | 0,
            R = (0,
            t.rotl)(R ^ O, 7);
        let re = 0;
        g[re++] = p + b | 0,
        g[re++] = S + _ | 0,
        g[re++] = E + C | 0,
        g[re++] = N + A | 0,
        g[re++] = I + R | 0,
        g[re++] = F + w | 0,
        g[re++] = q + y | 0,
        g[re++] = z + x | 0,
        g[re++] = G + k | 0,
        g[re++] = U + O | 0,
        g[re++] = P + $ | 0,
        g[re++] = L + K | 0,
        g[re++] = M + H | 0,
        g[re++] = T + V | 0,
        g[re++] = D + X | 0,
        g[re++] = j + ee | 0
    }
    function s(d, h, f, g) {
        let m = d[0]
          , v = d[1]
          , p = d[2]
          , S = d[3]
          , E = h[0]
          , N = h[1]
          , I = h[2]
          , F = h[3]
          , q = h[4]
          , z = h[5]
          , G = h[6]
          , U = h[7]
          , P = f[0]
          , L = f[1]
          , M = f[2]
          , T = f[3];
        for (let j = 0; j < 20; j += 2)
            m = m + E | 0,
            P = (0,
            t.rotl)(P ^ m, 16),
            q = q + P | 0,
            E = (0,
            t.rotl)(E ^ q, 12),
            m = m + E | 0,
            P = (0,
            t.rotl)(P ^ m, 8),
            q = q + P | 0,
            E = (0,
            t.rotl)(E ^ q, 7),
            v = v + N | 0,
            L = (0,
            t.rotl)(L ^ v, 16),
            z = z + L | 0,
            N = (0,
            t.rotl)(N ^ z, 12),
            v = v + N | 0,
            L = (0,
            t.rotl)(L ^ v, 8),
            z = z + L | 0,
            N = (0,
            t.rotl)(N ^ z, 7),
            p = p + I | 0,
            M = (0,
            t.rotl)(M ^ p, 16),
            G = G + M | 0,
            I = (0,
            t.rotl)(I ^ G, 12),
            p = p + I | 0,
            M = (0,
            t.rotl)(M ^ p, 8),
            G = G + M | 0,
            I = (0,
            t.rotl)(I ^ G, 7),
            S = S + F | 0,
            T = (0,
            t.rotl)(T ^ S, 16),
            U = U + T | 0,
            F = (0,
            t.rotl)(F ^ U, 12),
            S = S + F | 0,
            T = (0,
            t.rotl)(T ^ S, 8),
            U = U + T | 0,
            F = (0,
            t.rotl)(F ^ U, 7),
            m = m + N | 0,
            T = (0,
            t.rotl)(T ^ m, 16),
            G = G + T | 0,
            N = (0,
            t.rotl)(N ^ G, 12),
            m = m + N | 0,
            T = (0,
            t.rotl)(T ^ m, 8),
            G = G + T | 0,
            N = (0,
            t.rotl)(N ^ G, 7),
            v = v + I | 0,
            P = (0,
            t.rotl)(P ^ v, 16),
            U = U + P | 0,
            I = (0,
            t.rotl)(I ^ U, 12),
            v = v + I | 0,
            P = (0,
            t.rotl)(P ^ v, 8),
            U = U + P | 0,
            I = (0,
            t.rotl)(I ^ U, 7),
            p = p + F | 0,
            L = (0,
            t.rotl)(L ^ p, 16),
            q = q + L | 0,
            F = (0,
            t.rotl)(F ^ q, 12),
            p = p + F | 0,
            L = (0,
            t.rotl)(L ^ p, 8),
            q = q + L | 0,
            F = (0,
            t.rotl)(F ^ q, 7),
            S = S + E | 0,
            M = (0,
            t.rotl)(M ^ S, 16),
            z = z + M | 0,
            E = (0,
            t.rotl)(E ^ z, 12),
            S = S + E | 0,
            M = (0,
            t.rotl)(M ^ S, 8),
            z = z + M | 0,
            E = (0,
            t.rotl)(E ^ z, 7);
        let D = 0;
        g[D++] = m,
        g[D++] = v,
        g[D++] = p,
        g[D++] = S,
        g[D++] = P,
        g[D++] = L,
        g[D++] = M,
        g[D++] = T
    }
    e.chacha20orig = (0,
    t.createCipher)(o, {
        counterRight: !1,
        counterLength: 8,
        allowShortKeys: !0
    }),
    e.chacha20 = (0,
    t.createCipher)(o, {
        counterRight: !1,
        counterLength: 4,
        allowShortKeys: !1
    }),
    e.xchacha20 = (0,
    t.createCipher)(o, {
        counterRight: !1,
        counterLength: 8,
        extendNonceFn: s,
        allowShortKeys: !1
    }),
    e.chacha8 = (0,
    t.createCipher)(o, {
        counterRight: !1,
        counterLength: 4,
        rounds: 8
    }),
    e.chacha12 = (0,
    t.createCipher)(o, {
        counterRight: !1,
        counterLength: 4,
        rounds: 12
    });
    let a = new Uint8Array(16)
      , c = (d, h) => {
        d.update(h);
        let f = h.length % 16;
        f && d.update(a.subarray(f))
    }
      , l = new Uint8Array(32);
    function u(d, h, f, g, m) {
        let v = d(h, f, l)
          , p = r.poly1305.create(v);
        m && c(p, m),
        c(p, g);
        let S = new Uint8Array(16)
          , E = (0,
        i.createView)(S);
        (0,
        i.setBigUint64)(E, 0, BigInt(m ? m.length : 0), !0),
        (0,
        i.setBigUint64)(E, 8, BigInt(g.length), !0),
        p.update(S);
        let N = p.digest();
        return (0,
        i.clean)(v, S),
        N
    }
    e._poly1305_aead = d => (h, f, g) => ((0,
    n.bytes)(h, 32),
    (0,
    n.bytes)(f),
    {
        encrypt(v, p) {
            let S = v.length
              , E = S + 16;
            p ? (0,
            n.bytes)(p, E) : p = new Uint8Array(E),
            d(h, f, v, p, 1);
            let N = u(d, h, f, p.subarray(0, -16), g);
            return p.set(N, S),
            (0,
            i.clean)(N),
            p
        },
        decrypt(v, p) {
            let S = v.length
              , E = S - 16;
            if (S < 16)
                throw new Error("encrypted data must be at least 16 bytes");
            p ? (0,
            n.bytes)(p, E) : p = new Uint8Array(E);
            let N = v.subarray(0, -16)
              , I = v.subarray(-16)
              , F = u(d, h, f, N, g);
            if (!(0,
            i.equalBytes)(I, F))
                throw new Error("invalid tag");
            return d(h, f, N, p, 1),
            (0,
            i.clean)(F),
            p
        }
    }),
    e.chacha20poly1305 = (0,
    i.wrapCipher)({
        blockSize: 64,
        nonceLength: 12,
        tagLength: 16
    }, (0,
    e._poly1305_aead)(e.chacha20)),
    e.xchacha20poly1305 = (0,
    i.wrapCipher)({
        blockSize: 64,
        nonceLength: 24,
        tagLength: 16
    }, (0,
    e._poly1305_aead)(e.xchacha20))
}(Xh),
Object.defineProperty(Oo, "__esModule", {
    value: !0
}),
Oo.xchacha20 = void 0;
var tr, hu, $r, o1 = Xh;
Oo.xchacha20 = function(e, t, n) {
    return (0,
    o1.xchacha20poly1305)(e, t, n)
}
,
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.aesDecrypt = e.aesEncrypt = e.symDecrypt = e.symEncrypt = void 0;
    var t = ht
      , n = sc
      , r = fr
      , i = Oo
      , o = ni
      , s = Ne;
    e.symEncrypt = function(u, d, h) {
        return a(c, u, d, h)
    }
    ;
    function a(u, d, h, f) {
        var g = (0,
        o.symmetricAlgorithm)();
        if (g === "aes-256-gcm")
            return u(r.aes256gcm, d, h, (0,
            o.symmetricNonceLength)(), s.AEAD_TAG_LENGTH, f);
        if (g === "xchacha20")
            return u(i.xchacha20, d, h, s.XCHACHA20_NONCE_LENGTH, s.AEAD_TAG_LENGTH, f);
        if (g === "aes-256-cbc")
            return u(r.aes256cbc, d, h, 16, 0);
        throw new Error("Not implemented")
    }
    function c(u, d, h, f, g, m) {
        var v = (0,
        n.randomBytes)(f)
          , p = u(d, v, m).encrypt(h);
        if (g === 0)
            return (0,
            t.concatBytes)(v, p);
        var S = p.length - g
          , E = p.subarray(0, S)
          , N = p.subarray(S);
        return (0,
        t.concatBytes)(v, N, E)
    }
    function l(u, d, h, f, g, m) {
        var v = h.subarray(0, f)
          , p = u(d, Uint8Array.from(v), m)
          , S = h.subarray(f);
        if (g === 0)
            return p.decrypt(S);
        var E = S.subarray(0, g)
          , N = S.subarray(g);
        return p.decrypt((0,
        t.concatBytes)(N, E))
    }
    e.symDecrypt = function(u, d, h) {
        return a(l, u, d, h)
    }
    ,
    e.aesEncrypt = e.symEncrypt,
    e.aesDecrypt = e.symDecrypt
}(nu),
tr = es,
hu = Et && Et.__createBinding || (Object.create ? function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    i && !("get"in i ? !t.__esModule : i.writable || i.configurable) || (i = {
        enumerable: !0,
        get: function() {
            return t[n]
        }
    }),
    Object.defineProperty(e, r, i)
}
: function(e, t, n, r) {
    r === void 0 && (r = n),
    e[r] = t[n]
}
),
$r = Et && Et.__exportStar || function(e, t) {
    for (var n in e)
        n === "default" || Object.prototype.hasOwnProperty.call(t, n) || hu(t, e, n)
}
,
Object.defineProperty(tr, "__esModule", {
    value: !0
}),
$r(sh, tr),
$r(jh, tr),
$r(ba, tr),
$r(nu, tr);
var ai = {};
Object.defineProperty(ai, "__esModule", {
    value: !0
}),
ai.PublicKey = void 0;
var fu = ht
  , Vi = es
  , s1 = function() {
    function e(t) {
        this.data = (0,
        Vi.convertPublicKeyFormat)(t, !0)
    }
    return e.fromHex = function(t) {
        return new e((0,
        Vi.hexToPublicKey)(t))
    }
    ,
    Object.defineProperty(e.prototype, "uncompressed", {
        get: function() {
            return Z.from((0,
            Vi.convertPublicKeyFormat)(this.data, !1))
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "compressed", {
        get: function() {
            return Z.from(this.data)
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.toHex = function(t) {
        return t === void 0 && (t = !0),
        (0,
        fu.bytesToHex)(t ? this.data : this.uncompressed)
    }
    ,
    e.prototype.decapsulate = function(t, n) {
        n === void 0 && (n = !1);
        var r = n ? this.data : this.uncompressed
          , i = t.multiply(this, n);
        return (0,
        Vi.getSharedKey)(r, i)
    }
    ,
    e.prototype.equals = function(t) {
        return (0,
        fu.equalBytes)(this.data, t.data)
    }
    ,
    e
}();
ai.PublicKey = s1,
Object.defineProperty(Eo, "__esModule", {
    value: !0
}),
Eo.PrivateKey = void 0;
var pu = ht
  , nr = es
  , a1 = ai
  , c1 = function() {
    function e(t) {
        if (t === void 0)
            this.data = (0,
            nr.getValidSecret)();
        else {
            if (!(0,
            nr.isValidPrivateKey)(t))
                throw new Error("Invalid private key");
            this.data = t
        }
        this.publicKey = new a1.PublicKey((0,
        nr.getPublicKey)(this.data))
    }
    return e.fromHex = function(t) {
        return new e((0,
        nr.decodeHex)(t))
    }
    ,
    Object.defineProperty(e.prototype, "secret", {
        get: function() {
            return Z.from(this.data)
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.toHex = function() {
        return (0,
        pu.bytesToHex)(this.data)
    }
    ,
    e.prototype.encapsulate = function(t, n) {
        n === void 0 && (n = !1);
        var r = n ? this.publicKey.compressed : this.publicKey.uncompressed
          , i = this.multiply(t, n);
        return (0,
        nr.getSharedKey)(r, i)
    }
    ,
    e.prototype.multiply = function(t, n) {
        return n === void 0 && (n = !1),
        (0,
        nr.getSharedPoint)(this.data, t.compressed, n)
    }
    ,
    e.prototype.equals = function(t) {
        return (0,
        pu.equalBytes)(this.data, t.data)
    }
    ,
    e
}();
Eo.PrivateKey = c1,
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.PublicKey = e.PrivateKey = void 0;
    var t = Eo;
    Object.defineProperty(e, "PrivateKey", {
        enumerable: !0,
        get: function() {
            return t.PrivateKey
        }
    });
    var n = ai;
    Object.defineProperty(e, "PublicKey", {
        enumerable: !0,
        get: function() {
            return n.PublicKey
        }
    })
}(As),
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.utils = e.PublicKey = e.PrivateKey = e.ECIES_CONFIG = void 0,
    e.encrypt = function(a, c) {
        var l = new r.PrivateKey
          , u = a instanceof Uint8Array ? new r.PublicKey(a) : r.PublicKey.fromHex(a)
          , d = l.encapsulate(u, (0,
        n.isHkdfKeyCompressed)())
          , h = (0,
        n.isEphemeralKeyCompressed)() ? l.publicKey.compressed : l.publicKey.uncompressed
          , f = (0,
        i.symEncrypt)(d, c);
        return Z.from((0,
        t.concatBytes)(h, f))
    }
    ,
    e.decrypt = function(a, c) {
        var l = a instanceof Uint8Array ? new r.PrivateKey(a) : r.PrivateKey.fromHex(a)
          , u = (0,
        n.ephemeralKeySize)()
          , d = new r.PublicKey(c.subarray(0, u))
          , h = c.subarray(u)
          , f = d.decapsulate(l, (0,
        n.isHkdfKeyCompressed)());
        return Z.from((0,
        i.symDecrypt)(f, h))
    }
    ;
    var t = ht
      , n = ni
      , r = As
      , i = es
      , o = ni;
    Object.defineProperty(e, "ECIES_CONFIG", {
        enumerable: !0,
        get: function() {
            return o.ECIES_CONFIG
        }
    });
    var s = As;
    Object.defineProperty(e, "PrivateKey", {
        enumerable: !0,
        get: function() {
            return s.PrivateKey
        }
    }),
    Object.defineProperty(e, "PublicKey", {
        enumerable: !0,
        get: function() {
            return s.PublicKey
        }
    }),
    e.utils = {
        aesEncrypt: i.aesEncrypt,
        aesDecrypt: i.aesDecrypt,
        symEncrypt: i.symEncrypt,
        symDecrypt: i.symDecrypt,
        decodeHex: i.decodeHex,
        getValidSecret: i.getValidSecret,
        remove0x: i.remove0x
    }
}(ir);
var nf = (0,
We.default)("KeyExchange:Layer")
  , rf = (0,
We.default)("SocketService:Layer")
  , of = (0,
We.default)("Ecies:Layer")
  , sf = (0,
We.default)("RemoteCommunication:Layer");
nf.color = "##95c44e",
rf.color = "#f638d7",
of.color = "#465b9c",
sf.color = "#47a2be";
var W = {
    KeyExchange: nf,
    SocketService: rf,
    Ecies: of,
    RemoteCommunication: sf
}, jr, Wi = [], Fs = [], tn = (e, t) => J(void 0, void 0, void 0, function*() {
    jr = t,
    Fs.push(e),
    function(n) {
        return J(this, void 0, void 0, function*() {
            if (!jr || !n)
                return;
            (function() {
                let s = Fs;
                Fs = Wi,
                Wi = s
            }
            )();
            let r = jr.endsWith("/") ? `${jr}evt` : `${jr}/evt`
              , i = Object.assign({}, n);
            if (delete i.params,
            n.params)
                for (let[s,a] of Object.entries(n.params))
                    i[s] = a;
            let o = JSON.stringify(i);
            W.RemoteCommunication(`[sendBufferedEvents] Sending ${Wi.length} analytics events to ${r}`);
            try {
                let s = yield(0,
                nc.default)(r, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: o
                })
                  , a = yield s.text();
                W.RemoteCommunication(`[sendBufferedEvents] Response: ${a}`),
                Wi.length = 0
            } catch {}
        })
    }(e).catch( () => {}
    )
}), Wr = class {
    constructor(t) {
        this.enabled = !0,
        t?.debug && We.default.enable("Ecies:Layer"),
        this.ecies = t?.privateKey ? ir.PrivateKey.fromHex(t.privateKey) : new ir.PrivateKey,
        W.Ecies("[ECIES constructor()] initialized secret: ", this.ecies.toHex()),
        W.Ecies("[ECIES constructor()] initialized public: ", this.ecies.publicKey.toHex()),
        W.Ecies("[ECIES constructor()] init with", this)
    }
    generateECIES() {
        this.ecies = new ir.PrivateKey
    }
    getPublicKey() {
        return this.ecies.publicKey.toHex()
    }
    encrypt(t, n) {
        let r = t;
        if (this.enabled)
            try {
                W.Ecies("[ECIES: encrypt()] using otherPublicKey", n);
                let i = Z.from(t)
                  , o = ir.encrypt(n, i);
                r = Z.from(o).toString("base64")
            } catch (i) {
                throw W.Ecies("[ECIES: encrypt()] error encrypt:", i),
                W.Ecies("[ECIES: encrypt()] private: ", this.ecies.toHex()),
                W.Ecies("[ECIES: encrypt()] data: ", t),
                W.Ecies("[ECIES: encrypt()] otherkey: ", n),
                i
            }
        return r
    }
    decrypt(t) {
        let n = t;
        if (this.enabled)
            try {
                W.Ecies("[ECIES: decrypt()] using privateKey", this.ecies.toHex());
                let r = Z.from(t.toString(), "base64");
                n = ir.decrypt(this.ecies.toHex(), r).toString()
            } catch (r) {
                throw W.Ecies("[ECIES: decrypt()] error decrypt", r),
                W.Ecies("[ECIES: decrypt()] private: ", this.ecies.toHex()),
                W.Ecies("[ECIES: decrypt()] encryptedData: ", t),
                r
            }
        return n
    }
    getKeyInfo() {
        return {
            private: this.ecies.toHex(),
            public: this.ecies.publicKey.toHex()
        }
    }
    toString() {
        W.Ecies("[ECIES: toString()]", this.getKeyInfo())
    }
}
, An = {
    name: "@metamask/sdk-communication-layer",
    version: "0.32.0",
    description: "",
    homepage: "https://github.com/MetaMask/metamask-sdk#readme",
    bugs: {
        url: "https://github.com/MetaMask/metamask-sdk/issues"
    },
    repository: {
        type: "git",
        url: "https://github.com/MetaMask/metamask-sdk.git",
        directory: "packages/sdk-communication-layer"
    },
    main: "dist/node/cjs/metamask-sdk-communication-layer.js",
    unpkg: "dist/browser/umd/metamask-sdk-communication-layer.js",
    module: "dist/node/es/metamask-sdk-communication-layer.js",
    browser: "dist/browser/es/metamask-sdk-communication-layer.js",
    "react-native": "dist/react-native/es/metamask-sdk-communication-layer.js",
    types: "dist/types/src/index.d.ts",
    files: ["/dist"],
    scripts: {
        "build:types": "tsc --project tsconfig.build.json --emitDeclarationOnly --outDir dist/types",
        "build:clean": "yarn clean && yarn build",
        build: "yarn build:types && rollup -c --bundleConfigAsCjs",
        "build:dev": "yarn build:types && NODE_ENV=dev rollup -c --bundleConfigAsCjs",
        dev: 'concurrently "tsc --watch" "rollup -c --bundleConfigAsCjs -w"',
        "build:post-tsc": "echo 'N/A'",
        "build:pre-tsc": "echo 'N/A'",
        size: "size-limit",
        clean: "rimraf ./dist",
        lint: "yarn lint:eslint && yarn lint:misc --check",
        "lint:changelog": "../../scripts/validate-changelog.sh @metamask/sdk-communication-layer",
        "lint:eslint": "eslint . --cache --ext js,ts",
        "lint:fix": "yarn lint:eslint --fix && yarn lint:misc --write",
        "lint:misc": "prettier '**/*.json' '**/*.md' '!CHANGELOG.md' --ignore-path ../../.gitignore",
        "publish:preview": "yarn npm publish --tag preview",
        prepack: "../../scripts/prepack.sh",
        reset: "yarn clean && rimraf ./node_modules/",
        test: 'jest --testPathIgnorePatterns "/e2e/"',
        "test:e2e": 'jest --testPathPattern "/e2e/"',
        "test:coverage": "jest --coverage",
        "test:ci": 'jest --coverage --passWithNoTests --setupFilesAfterEnv ./jest-preload.js --testPathIgnorePatterns "/e2e/"',
        "test:dev": "jest",
        watch: "rollup -c --bundleConfigAsCjs -w"
    },
    dependencies: {
        bufferutil: "^4.0.8",
        "date-fns": "^2.29.3",
        debug: "^4.3.4",
        "utf-8-validate": "^5.0.2",
        uuid: "^8.3.2"
    },
    devDependencies: {
        "@jest/globals": "^29.3.1",
        "@lavamoat/allow-scripts": "^2.3.1",
        "@metamask/auto-changelog": "3.1.0",
        "@metamask/eslint-config": "^6.0.0",
        "@metamask/eslint-config-nodejs": "^6.0.0",
        "@metamask/eslint-config-typescript": "^6.0.0",
        "@rollup/plugin-commonjs": "^25.0.0",
        "@rollup/plugin-json": "^6.0.0",
        "@rollup/plugin-node-resolve": "^15.0.2",
        "@rollup/plugin-replace": "^6.0.1",
        "@rollup/plugin-terser": "^0.4.4",
        "@size-limit/preset-big-lib": "^11.0.2",
        "@types/jest": "^29.2.4",
        "@types/node": "^20.1.3",
        "@types/uuid": "^9.0.0",
        "@typescript-eslint/eslint-plugin": "^4.26.0",
        "@typescript-eslint/parser": "^4.26.0",
        concurrently: "^9.1.2",
        "cross-fetch": "^4.0.0",
        eciesjs: "^0.4.11",
        eslint: "^7.30.0",
        "eslint-config-prettier": "^8.3.0",
        "eslint-plugin-import": "^2.23.4",
        "eslint-plugin-jest": "^24.4.0",
        "eslint-plugin-jsdoc": "^36.1.0",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-prettier": "^3.4.0",
        eventemitter2: "^6.4.9",
        jest: "^29.3.1",
        prettier: "^2.3.0",
        rimraf: "^3.0.2",
        rollup: "^4.26.0",
        "rollup-plugin-jscc": "^2.0.0",
        "rollup-plugin-natives": "^0.7.5",
        "rollup-plugin-node-builtins": "^2.1.2",
        "rollup-plugin-node-globals": "^1.4.0",
        "rollup-plugin-peer-deps-external": "^2.2.4",
        "rollup-plugin-polyfill-node": "^0.13.0",
        "rollup-plugin-sizes": "^1.0.6",
        "rollup-plugin-typescript2": "^0.31.2",
        "rollup-plugin-visualizer": "^5.12.0",
        "size-limit": "^11.1.6",
        "socket.io-client": "^4.5.1",
        "stream-browserify": "^3.0.0",
        "ts-jest": "^29.0.3",
        "ts-node": "^10.9.1",
        typescript: "^5.6.3"
    },
    peerDependencies: {
        "cross-fetch": "^4.0.0",
        eciesjs: "*",
        eventemitter2: "^6.4.9",
        "readable-stream": "^3.6.2",
        "socket.io-client": "^4.5.1"
    },
    publishConfig: {
        access: "public",
        registry: "https://registry.npmjs.org/"
    },
    lavamoat: {
        allowScripts: {
            "@lavamoat/preinstall-always-fail": !1,
            canvas: !0,
            "eciesjs>secp256k1": !1,
            "socket.io-client>engine.io-client>ws>bufferutil": !1,
            "socket.io-client>engine.io-client>ws>utf-8-validate": !1,
            bufferutil: !1,
            "utf-8-validate": !1
        }
    }
}, vr = "https://metamask-sdk.api.cx.metamask.io/", l1 = ["websocket"], br = 6048e5, u1 = 3e3, d1 = {
    METAMASK_GETPROVIDERSTATE: "metamask_getProviderState",
    ETH_REQUESTACCOUNTS: "eth_requestAccounts"
};
function af(e) {
    let {context: t} = e;
    W.RemoteCommunication(`[RemoteCommunication: clean()] context=${t}`),
    e.channelConfig = void 0,
    e.ready = !1,
    e.originatorConnectStarted = !1
}
var Ue, te, Lo, Se, Te, Le, rr;
(rr = Ue || (Ue = {})).DISCONNECTED = "disconnected",
rr.WAITING = "waiting",
rr.TIMEOUT = "timeout",
rr.LINKED = "linked",
rr.PAUSED = "paused",
rr.TERMINATED = "terminated",
function(e) {
    e.KEY_INFO = "key_info",
    e.SERVICE_STATUS = "service_status",
    e.PROVIDER_UPDATE = "provider_update",
    e.RPC_UPDATE = "rpc_update",
    e.KEYS_EXCHANGED = "keys_exchanged",
    e.JOIN_CHANNEL = "join_channel",
    e.PUBLIC_KEY = "public_key",
    e.CHANNEL_CREATED = "channel_created",
    e.CLIENTS_CONNECTED = "clients_connected",
    e.CLIENTS_DISCONNECTED = "clients_disconnected",
    e.CLIENTS_WAITING = "clients_waiting",
    e.CLIENTS_READY = "clients_ready",
    e.REJECTED = "rejected",
    e.WALLET_INIT = "wallet_init",
    e.CHANNEL_PERSISTENCE = "channel_persistence",
    e.CONFIG = "config",
    e.MESSAGE_ACK = "ack",
    e.SOCKET_DISCONNECTED = "socket_disconnected",
    e.SOCKET_RECONNECT = "socket_reconnect",
    e.OTP = "otp",
    e.SDK_RPC_CALL = "sdk_rpc_call",
    e.AUTHORIZED = "authorized",
    e.CONNECTION_STATUS = "connection_status",
    e.MESSAGE = "message",
    e.TERMINATE = "terminate"
}(te || (te = {})),
(Lo || (Lo = {})).KEY_EXCHANGE = "key_exchange",
function(e) {
    e.KEY_HANDSHAKE_START = "key_handshake_start",
    e.KEY_HANDSHAKE_CHECK = "key_handshake_check",
    e.KEY_HANDSHAKE_SYN = "key_handshake_SYN",
    e.KEY_HANDSHAKE_SYNACK = "key_handshake_SYNACK",
    e.KEY_HANDSHAKE_ACK = "key_handshake_ACK",
    e.KEY_HANDSHAKE_WALLET = "key_handshake_wallet",
    e.KEY_HANDSHAKE_NONE = "none"
}(Se || (Se = {}));
var ka = class extends _r.EventEmitter2 {
    constructor({communicationLayer: t, otherPublicKey: n, context: r, ecies: i, logging: o}) {
        super(),
        this.keysExchanged = !1,
        this.step = Se.KEY_HANDSHAKE_NONE,
        this.debug = !1,
        this.context = r,
        this.communicationLayer = t,
        i?.privateKey && n && (W.KeyExchange(`[KeyExchange: constructor()] otherPubKey=${n} set keysExchanged to true!`, i),
        this.keysExchanged = !0),
        this.myECIES = new Wr(Object.assign(Object.assign({}, i), {
            debug: o?.eciesLayer
        })),
        this.communicationLayer.state.eciesInstance = this.myECIES,
        this.myPublicKey = this.myECIES.getPublicKey(),
        this.debug = o?.keyExchangeLayer === !0,
        n && this.setOtherPublicKey(n),
        this.communicationLayer.on(Lo.KEY_EXCHANGE, this.onKeyExchangeMessage.bind(this))
    }
    onKeyExchangeMessage(t) {
        let {relayPersistence: n} = this.communicationLayer.remote.state;
        if (W.KeyExchange(`[KeyExchange: onKeyExchangeMessage()] context=${this.context} keysExchanged=${this.keysExchanged} relayPersistence=${n}`, t),
        n)
            return void W.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Ignoring key exchange message because relay persistence is activated");
        let {message: r} = t;
        this.keysExchanged && W.KeyExchange(`[KeyExchange: onKeyExchangeMessage()] context=${this.context} received handshake while already exchanged. step=${this.step} otherPubKey=${this.otherPublicKey}`),
        this.emit(te.KEY_INFO, r.type),
        r.type === Se.KEY_HANDSHAKE_SYN ? (this.checkStep([Se.KEY_HANDSHAKE_NONE, Se.KEY_HANDSHAKE_ACK]),
        W.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_SYN", r),
        r.pubkey && this.setOtherPublicKey(r.pubkey),
        this.communicationLayer.sendMessage({
            type: Se.KEY_HANDSHAKE_SYNACK,
            pubkey: this.myPublicKey
        }).catch(i => {
            W.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Error sending KEY_HANDSHAKE_SYNACK", i)
        }
        ),
        this.setStep(Se.KEY_HANDSHAKE_ACK)) : r.type === Se.KEY_HANDSHAKE_SYNACK ? (this.checkStep([Se.KEY_HANDSHAKE_SYNACK, Se.KEY_HANDSHAKE_ACK, Se.KEY_HANDSHAKE_NONE]),
        W.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_SYNACK"),
        r.pubkey && this.setOtherPublicKey(r.pubkey),
        this.communicationLayer.sendMessage({
            type: Se.KEY_HANDSHAKE_ACK
        }).catch(i => {
            W.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Error sending KEY_HANDSHAKE_ACK", i)
        }
        ),
        this.keysExchanged = !0,
        this.setStep(Se.KEY_HANDSHAKE_ACK),
        this.emit(te.KEYS_EXCHANGED)) : r.type === Se.KEY_HANDSHAKE_ACK && (W.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_ACK set keysExchanged to true!"),
        this.checkStep([Se.KEY_HANDSHAKE_ACK, Se.KEY_HANDSHAKE_NONE]),
        this.keysExchanged = !0,
        this.setStep(Se.KEY_HANDSHAKE_ACK),
        this.emit(te.KEYS_EXCHANGED))
    }
    resetKeys(t) {
        this.clean(),
        this.myECIES = new Wr(t)
    }
    clean() {
        W.KeyExchange(`[KeyExchange: clean()] context=${this.context} reset handshake state`),
        this.setStep(Se.KEY_HANDSHAKE_NONE),
        this.emit(te.KEY_INFO, this.step),
        this.keysExchanged = !1
    }
    start({isOriginator: t, force: n}) {
        let {relayPersistence: r, protocolVersion: i} = this.communicationLayer.remote.state
          , o = i >= 2;
        r ? W.KeyExchange("[KeyExchange: start()] Ignoring key exchange message because relay persistence is activated") : (W.KeyExchange(`[KeyExchange: start()] context=${this.context} protocolVersion=${i} isOriginator=${t} step=${this.step} force=${n} relayPersistence=${r} keysExchanged=${this.keysExchanged}`),
        t ? !(this.keysExchanged || this.step !== Se.KEY_HANDSHAKE_NONE && this.step !== Se.KEY_HANDSHAKE_SYNACK) || n ? (W.KeyExchange(`[KeyExchange: start()] context=${this.context} -- start key exchange (force=${n}) -- step=${this.step}`, this.step),
        this.clean(),
        this.setStep(Se.KEY_HANDSHAKE_SYNACK),
        this.communicationLayer.sendMessage({
            type: Se.KEY_HANDSHAKE_SYN,
            pubkey: this.myPublicKey,
            v: 2
        }).catch(s => {
            W.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_SYN", s)
        }
        )) : W.KeyExchange(`[KeyExchange: start()] context=${this.context} -- key exchange already ${this.keysExchanged ? "done" : "in progress"} -- aborted.`, this.step) : this.keysExchanged && n !== !0 ? W.KeyExchange("[KeyExchange: start()] don't send KEY_HANDSHAKE_START -- exchange already done.") : o ? this.communicationLayer.sendMessage({
            type: Se.KEY_HANDSHAKE_SYNACK,
            pubkey: this.myPublicKey,
            v: 2
        }).catch(s => {
            W.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_SYNACK", s)
        }
        ) : (this.communicationLayer.sendMessage({
            type: Se.KEY_HANDSHAKE_START
        }).catch(s => {
            W.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_START", s)
        }
        ),
        this.clean()))
    }
    setStep(t) {
        this.step = t,
        this.emit(te.KEY_INFO, t)
    }
    checkStep(t) {
        t.length > 0 && t.indexOf(this.step.toString())
    }
    setRelayPersistence({localKey: t, otherKey: n}) {
        this.otherPublicKey = n,
        this.myECIES = new Wr({
            privateKey: t,
            debug: this.debug
        }),
        this.keysExchanged = !0
    }
    setKeysExchanged(t) {
        this.keysExchanged = t
    }
    areKeysExchanged() {
        return this.keysExchanged
    }
    getMyPublicKey() {
        return this.myPublicKey
    }
    getOtherPublicKey() {
        return this.otherPublicKey
    }
    setOtherPublicKey(t) {
        W.KeyExchange("[KeyExchange: setOtherPubKey()]", t),
        this.otherPublicKey = t
    }
    encryptMessage(t) {
        if (!this.otherPublicKey)
            throw new Error("encryptMessage: Keys not exchanged - missing otherPubKey");
        return this.myECIES.encrypt(t, this.otherPublicKey)
    }
    decryptMessage(t) {
        if (!this.otherPublicKey)
            throw new Error("decryptMessage: Keys not exchanged - missing otherPubKey");
        return this.myECIES.decrypt(t)
    }
    getKeyInfo() {
        return {
            ecies: Object.assign(Object.assign({}, this.myECIES.getKeyInfo()), {
                otherPubKey: this.otherPublicKey
            }),
            step: this.step,
            keysExchanged: this.areKeysExchanged()
        }
    }
    toString() {
        let t = {
            keyInfo: this.getKeyInfo(),
            keysExchanged: this.keysExchanged,
            step: this.step
        };
        return JSON.stringify(t)
    }
}
;
(function(e) {
    e.TERMINATE = "terminate",
    e.ANSWER = "answer",
    e.OFFER = "offer",
    e.CANDIDATE = "candidate",
    e.JSONRPC = "jsonrpc",
    e.WALLET_INFO = "wallet_info",
    e.WALLET_INIT = "wallet_init",
    e.ORIGINATOR_INFO = "originator_info",
    e.PAUSE = "pause",
    e.OTP = "otp",
    e.AUTHORIZED = "authorized",
    e.PING = "ping",
    e.READY = "ready"
}
)(Te || (Te = {})),
function(e) {
    e.REQUEST = "sdk_connect_request_started",
    e.REQUEST_MOBILE = "sdk_connect_request_started_mobile",
    e.RECONNECT = "sdk_reconnect_request_started",
    e.CONNECTED = "sdk_connection_established",
    e.CONNECTED_MOBILE = "sdk_connection_established_mobile",
    e.AUTHORIZED = "sdk_connection_authorized",
    e.REJECTED = "sdk_connection_rejected",
    e.TERMINATED = "sdk_connection_terminated",
    e.DISCONNECTED = "sdk_disconnected",
    e.SDK_USE_EXTENSION = "sdk_use_extension",
    e.SDK_RPC_REQUEST = "sdk_rpc_request",
    e.SDK_RPC_REQUEST_RECEIVED = "sdk_rpc_request_received",
    e.SDK_RPC_REQUEST_DONE = "sdk_rpc_request_done",
    e.SDK_EXTENSION_UTILIZED = "sdk_extension_utilized",
    e.SDK_USE_INAPP_BROWSER = "sdk_use_inapp_browser"
}(Le || (Le = {}));
var ro = (e, t, n) => J(void 0, void 0, void 0, function*() {
    var r, i, o, s, a, c;
    let {remote: l, state: u} = e
      , {channelId: d, isOriginator: h} = u;
    if (t === "error_terminated")
        return W.SocketService(`handleJoinChannelResults: Channel ${d} terminated`),
        void e.emit(te.TERMINATE);
    if (!n)
        return void W.SocketService(`handleJoinChannelResults: No result for channel ${d}`);
    let {persistence: f, walletKey: g, rejected: m} = n;
    if (W.SocketService(`handleJoinChannelResults: Channel ${d} persistence=${f} walletKey=${g} rejected=${m}`),
    m)
        return W.SocketService(`handleJoinChannelResults: Channel ${d} rejected`),
        yield e.remote.disconnect({
            terminate: !0
        }),
        e.remote.emit(te.REJECTED, {
            channelId: d
        }),
        void e.remote.emitServiceStatusEvent();
    if (g && !(!((r = l.state.channelConfig) === null || r === void 0) && r.otherKey)) {
        e.getKeyExchange().setOtherPublicKey(g),
        (i = e.state.keyExchange) === null || i === void 0 || i.setKeysExchanged(!0),
        l.state.ready = !0,
        l.state.authorized = !0,
        l.emit(te.AUTHORIZED);
        let {communicationLayer: v, storageManager: p} = l.state
          , S = Object.assign(Object.assign({}, l.state.channelConfig), {
            channelId: (o = l.state.channelId) !== null && o !== void 0 ? o : "",
            validUntil: Date.now() + br,
            localKey: v?.getKeyInfo().ecies.private,
            otherKey: g
        });
        e.sendMessage({
            type: Se.KEY_HANDSHAKE_ACK
        }).catch(E => {}
        ),
        (s = e.state.socket) === null || s === void 0 || s.emit(Te.PING, {
            id: d,
            clientType: h ? "dapp" : "wallet",
            context: "on_channel_reconnect",
            message: ""
        }),
        yield p?.persistChannelConfig(S),
        l.emitServiceStatusEvent(),
        l.setConnectionStatus(Ue.LINKED)
    }
    f && (e.emit(te.CHANNEL_PERSISTENCE),
    (a = e.state.keyExchange) === null || a === void 0 || a.setKeysExchanged(!0),
    l.state.ready = !0,
    l.state.authorized = !0,
    l.emit(te.AUTHORIZED),
    tn(Object.assign(Object.assign({
        id: d ?? "",
        event: h ? Le.CONNECTED : Le.CONNECTED_MOBILE
    }, e.remote.state.originatorInfo), {
        sdkVersion: e.remote.state.sdkVersion,
        commLayer: e.state.communicationLayerPreference,
        commLayerVersion: An.version,
        walletVersion: (c = e.remote.state.walletInfo) === null || c === void 0 ? void 0 : c.version
    }), u.communicationServerUrl).catch(v => {}
    ))
})
  , mr = e => new Promise(t => {
    setTimeout(t, e)
}
)
  , mu = (e, t, ...n) => J(void 0, [e, t, ...n], void 0, function*(r, i, o=200) {
    let s, a = Date.now(), c = !1;
    for (; !c; ) {
        if (c = Date.now() - a > 3e5,
        s = i[r],
        s.elapsedTime !== void 0)
            return s;
        yield mr(o)
    }
    throw new Error(`RPC ${r} timed out`)
})
  , xa = e => J(void 0, void 0, void 0, function*() {
    let {state: t} = e
      , {socket: n, channelId: r, context: i, isOriginator: o, isReconnecting: s} = t;
    if (s)
        return W.SocketService("[SocketService: reconnectSocket()] Reconnection already in progress, skipping", e),
        !1;
    if (!n)
        return W.SocketService("[SocketService: reconnectSocket()] socket is not defined", e),
        !1;
    if (!r)
        return !1;
    let {connected: a} = n;
    t.isReconnecting = !0,
    t.reconnectionAttempts = 0,
    W.SocketService(`[SocketService: reconnectSocket()] connected=${a} trying to reconnect after socketio disconnection`, e);
    try {
        for (; 3 > t.reconnectionAttempts; ) {
            if (W.SocketService(`[SocketService: reconnectSocket()] Attempt ${t.reconnectionAttempts + 1} of 3`, e),
            yield mr(200),
            n.connected)
                return W.SocketService("Socket already connected --- ping to retrieve messages"),
                n.emit(Te.PING, {
                    id: r,
                    clientType: o ? "dapp" : "wallet",
                    context: "on_channel_config",
                    message: ""
                }),
                !0;
            t.resumed = !0,
            n.connect(),
            e.emit(te.SOCKET_RECONNECT);
            try {
                if (yield new Promise( (c, l) => {
                    n.emit(te.JOIN_CHANNEL, {
                        channelId: r,
                        context: `${i}connect_again`,
                        clientType: o ? "dapp" : "wallet"
                    }, (u, d) => J(void 0, void 0, void 0, function*() {
                        try {
                            yield ro(e, u, d),
                            c()
                        } catch (h) {
                            l(h)
                        }
                    }))
                }
                ),
                yield mr(100),
                n.connected)
                    return W.SocketService(`Reconnection successful on attempt ${t.reconnectionAttempts + 1}`),
                    !0
            } catch (c) {
                W.SocketService(`Error during reconnection attempt ${t.reconnectionAttempts + 1}:`, c)
            }
            t.reconnectionAttempts += 1,
            3 > t.reconnectionAttempts && (yield mr(200))
        }
        return W.SocketService("Failed to reconnect after 3 attempts"),
        !1
    } finally {
        t.isReconnecting = !1,
        t.reconnectionAttempts = 0
    }
});
function cf(e, t) {
    return J(this, void 0, void 0, function*() {
        var n;
        let r = (n = e.state.keyExchange) === null || n === void 0 ? void 0 : n.encryptMessage(JSON.stringify(t))
          , i = {
            id: e.state.channelId,
            context: e.state.context,
            clientType: e.state.isOriginator ? "dapp" : "wallet",
            message: r,
            plaintext: e.state.hasPlaintext ? JSON.stringify(t) : void 0
        };
        return W.SocketService(`[SocketService: encryptAndSendMessage()] context=${e.state.context}`, i),
        t.type === Te.TERMINATE && (e.state.manualDisconnect = !0),
        new Promise( (o, s) => {
            var a;
            (a = e.state.socket) === null || a === void 0 || a.emit(te.MESSAGE, i, (c, l) => {
                var u;
                c && (W.SocketService(`[SocketService: encryptAndSendMessage()] error=${c}`),
                s(c)),
                W.SocketService("[encryptAndSendMessage] response", l),
                o((u = l?.success) !== null && u !== void 0 && u)
            }
            )
        }
        )
    })
}
var dr;
(function(e) {
    e.RPC_CHECK = "rpcCheck",
    e.SKIPPED_RPC = "skippedRpc"
}
)(dr || (dr = {}));
var lf = ["eth_sendTransaction", "eth_signTypedData", "eth_signTransaction", "personal_sign", "wallet_requestPermissions", "wallet_switchEthereumChain", "eth_signTypedData_v3", "eth_signTypedData_v4", "metamask_connectSign", "metamask_connectWith", "metamask_batch"].map(e => e.toLowerCase())
  , h1 = [{
    event: te.CLIENTS_CONNECTED,
    handler: function(e, t) {
        return n => J(this, void 0, void 0, function*() {
            var r, i, o, s, a, c, l, u, d, h, f;
            let g = (i = (r = e.remote.state.channelConfig) === null || r === void 0 ? void 0 : r.relayPersistence) !== null && i !== void 0 && i;
            if (W.SocketService(`[SocketService: handleClientsConnected()] context=${e.state.context} on 'clients_connected-${t}' relayPersistence=${g} resumed=${e.state.resumed}  clientsPaused=${e.state.clientsPaused} keysExchanged=${(o = e.state.keyExchange) === null || o === void 0 ? void 0 : o.areKeysExchanged()} isOriginator=${e.state.isOriginator}`),
            e.emit(te.CLIENTS_CONNECTED, {
                isOriginator: e.state.isOriginator,
                keysExchanged: (s = e.state.keyExchange) === null || s === void 0 ? void 0 : s.areKeysExchanged(),
                context: e.state.context
            }),
            e.state.resumed)
                e.state.isOriginator || (W.SocketService(`[SocketService: handleClientsConnected()] context=${e.state.context} 'clients_connected' / keysExchanged=${(a = e.state.keyExchange) === null || a === void 0 ? void 0 : a.areKeysExchanged()} -- backward compatibility`),
                (c = e.state.keyExchange) === null || c === void 0 || c.start({
                    isOriginator: (l = e.state.isOriginator) !== null && l !== void 0 && l
                })),
                e.state.resumed = !1;
            else if (e.state.clientsPaused)
                W.SocketService("[SocketService: handleClientsConnected()] 'clients_connected' skip sending originatorInfo on pause");
            else if (!e.state.isOriginator) {
                let m = !g;
                W.SocketService(`[SocketService: handleClientsConnected()] context=${e.state.context} on 'clients_connected' / keysExchanged=${(u = e.state.keyExchange) === null || u === void 0 ? void 0 : u.areKeysExchanged()} -- force=${m} -- backward compatibility`),
                W.SocketService(`[SocketService: handleClientsConnected()] context=${e.state.context} on 'clients_connected' / keysExchanged=${(d = e.state.keyExchange) === null || d === void 0 ? void 0 : d.areKeysExchanged()} -- force=${m} -- backward compatibility`),
                (h = e.state.keyExchange) === null || h === void 0 || h.start({
                    isOriginator: (f = e.state.isOriginator) !== null && f !== void 0 && f,
                    force: m
                })
            }
            e.state.clientsConnected = !0,
            e.state.clientsPaused = !1
        })
    }
}, {
    event: te.CHANNEL_CREATED,
    handler: function(e, t) {
        return n => {
            W.SocketService(`[SocketService: handleChannelCreated()] context=${e.state.context} on 'channel_created-${t}'`, n),
            e.emit(te.CHANNEL_CREATED, n)
        }
    }
}, {
    event: te.CLIENTS_DISCONNECTED,
    handler: function(e, t) {
        return () => {
            var n;
            e.state.clientsConnected = !1,
            W.SocketService(`[SocketService: handlesClientsDisconnected()] context=${e.state.context} on 'clients_disconnected-${t}'`),
            e.remote.state.relayPersistence ? W.SocketService(`[SocketService: handlesClientsDisconnected()] context=${e.state.context} on 'clients_disconnected-${t}' - relayPersistence enabled, skipping key exchange cleanup.`) : (e.state.isOriginator && !e.state.clientsPaused && ((n = e.state.keyExchange) === null || n === void 0 || n.clean()),
            e.emit(te.CLIENTS_DISCONNECTED, t))
        }
    }
}, {
    event: te.CONFIG,
    handler: function(e, t) {
        return n => J(this, void 0, void 0, function*() {
            var r, i, o;
            W.SocketService(`[SocketService: handleChannelConfig()] update relayPersistence on 'config-${t}'`, n);
            let {persistence: s, walletKey: a} = n;
            e.state.isOriginator && e.remote.state.channelConfig ? (n.walletKey && !e.remote.state.channelConfig.otherKey && (W.SocketService(`Setting wallet key ${a}`),
            e.remote.state.channelConfig.otherKey = a,
            e.getKeyExchange().setOtherPublicKey(n.walletKey),
            (r = e.state.keyExchange) === null || r === void 0 || r.setKeysExchanged(!0),
            yield e.remote.sendMessage({
                type: Se.KEY_HANDSHAKE_ACK
            }),
            yield e.remote.sendMessage({
                type: Te.PING
            }),
            yield(i = e.remote.state.storageManager) === null || i === void 0 ? void 0 : i.persistChannelConfig(e.remote.state.channelConfig)),
            s !== !0 || e.remote.state.channelConfig.relayPersistence || (W.SocketService(`Setting relay persistence ${s}`),
            e.remote.state.channelConfig.relayPersistence = s,
            e.remote.state.relayPersistence = !0,
            e.remote.emit(te.CHANNEL_PERSISTENCE),
            e.remote.state.authorized = !0,
            e.remote.state.ready = !0,
            e.remote.emit(te.AUTHORIZED),
            yield(o = e.remote.state.storageManager) === null || o === void 0 ? void 0 : o.persistChannelConfig(e.remote.state.channelConfig))) : e.state.isOriginator || n.persistence && (e.remote.state.relayPersistence = !0,
            e.remote.emit(te.CHANNEL_PERSISTENCE))
        })
    }
}, {
    event: te.MESSAGE,
    handler: function(e, t) {
        return n => {
            var r, i, o, s, a, c, l, u, d, h, f, g, m, v, p, S, E, N;
            let {ackId: I, message: F, error: q} = n
              , z = (r = e.remote.state.relayPersistence) !== null && r !== void 0 && r;
            if (W.SocketService(`[SocketService handleMessage()]  relayPersistence=${z}  context=${e.state.context} on 'message' ${t} keysExchanged=${(i = e.state.keyExchange) === null || i === void 0 ? void 0 : i.areKeysExchanged()}`, n),
            q)
                throw W.SocketService(`
      [SocketService handleMessage()] context=${e.state.context}::on 'message' error=${q}`),
                new Error(q);
            let G = typeof F == "string";
            if (!G && F?.type === Se.KEY_HANDSHAKE_START)
                return z ? void 0 : (W.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' received HANDSHAKE_START isOriginator=${e.state.isOriginator}`, F),
                void ((o = e.state.keyExchange) === null || o === void 0 || o.start({
                    isOriginator: (s = e.state.isOriginator) !== null && s !== void 0 && s,
                    force: !0
                })));
            if (!G && (!((a = F?.type) === null || a === void 0) && a.startsWith("key_handshake")))
                return z ? void 0 : (W.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' emit KEY_EXCHANGE`, F),
                void e.emit(Lo.KEY_EXCHANGE, {
                    message: F,
                    context: e.state.context
                }));
            if (G && !(!((c = e.state.keyExchange) === null || c === void 0) && c.areKeysExchanged())) {
                let L = !1;
                try {
                    W.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' trying to decrypt message`),
                    (l = e.state.keyExchange) === null || l === void 0 || l.decryptMessage(F),
                    L = !0
                } catch (M) {
                    W.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' error`, M)
                }
                if (!L)
                    return e.state.isOriginator ? (d = e.state.keyExchange) === null || d === void 0 || d.start({
                        isOriginator: (h = e.state.isOriginator) !== null && h !== void 0 && h
                    }) : e.sendMessage({
                        type: Se.KEY_HANDSHAKE_START
                    }).catch(M => {}
                    ),
                    void W.SocketService(`Message ignored because invalid key exchange status. step=${(f = e.state.keyExchange) === null || f === void 0 ? void 0 : f.getKeyInfo().step}`, (g = e.state.keyExchange) === null || g === void 0 ? void 0 : g.getKeyInfo(), F);
                W.SocketService("Invalid key exchange status detected --- updating it."),
                (u = e.state.keyExchange) === null || u === void 0 || u.setKeysExchanged(!0)
            } else if (!G && F?.type)
                return void e.emit(te.MESSAGE, F);
            if (!G)
                return void e.emit(te.MESSAGE, F);
            let U = (m = e.state.keyExchange) === null || m === void 0 ? void 0 : m.decryptMessage(F)
              , P = JSON.parse(U ?? "{}");
            if (I && I?.length > 0 && (W.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' ackid=${I} channelId=${t}`),
            (v = e.state.socket) === null || v === void 0 || v.emit(te.MESSAGE_ACK, {
                ackId: I,
                channelId: t,
                clientType: e.state.isOriginator ? "dapp" : "wallet"
            })),
            e.state.clientsPaused = P?.type === Te.PAUSE,
            e.state.isOriginator && P.data) {
                let L = P.data
                  , M = e.state.rpcMethodTracker[L.id];
                if (M) {
                    let T = Date.now() - M.timestamp;
                    W.SocketService(`[SocketService handleMessage()] context=${e.state.context}::on 'message' received answer for id=${L.id} method=${M.method} responseTime=${T}`, P),
                    e.remote.state.analytics && lf.includes(M.method.toLowerCase()) && tn(Object.assign(Object.assign({
                        id: (p = e.remote.state.channelId) !== null && p !== void 0 ? p : "",
                        event: Le.SDK_RPC_REQUEST_DONE,
                        sdkVersion: e.remote.state.sdkVersion,
                        commLayerVersion: An.version
                    }, e.remote.state.originatorInfo), {
                        walletVersion: (S = e.remote.state.walletInfo) === null || S === void 0 ? void 0 : S.version,
                        params: {
                            method: M.method,
                            from: "mobile"
                        }
                    }), e.remote.state.communicationServerUrl).catch(j => {}
                    );
                    let D = Object.assign(Object.assign({}, M), {
                        result: L.result,
                        error: L.error ? {
                            code: (E = L.error) === null || E === void 0 ? void 0 : E.code,
                            message: (N = L.error) === null || N === void 0 ? void 0 : N.message
                        } : void 0,
                        elapsedTime: T
                    });
                    e.state.rpcMethodTracker[L.id] = D,
                    e.emit(te.RPC_UPDATE, D)
                }
            }
            e.emit(te.MESSAGE, {
                message: P
            })
        }
    }
}, {
    event: te.REJECTED,
    handler: function(e, t) {
        return n => J(this, void 0, void 0, function*() {
            var r;
            e.state.isOriginator && !e.remote.state.ready ? (W.SocketService(`[SocketService: handleChannelRejected()] context=${e.state.context} channelId=${t} isOriginator=${e.state.isOriginator} ready=${e.remote.state.ready}`, e.remote.state.originatorInfo),
            tn(Object.assign(Object.assign({
                id: t,
                event: Le.REJECTED
            }, e.remote.state.originatorInfo), {
                sdkVersion: e.remote.state.sdkVersion,
                commLayer: e.state.communicationLayerPreference,
                commLayerVersion: An.version,
                walletVersion: (r = e.remote.state.walletInfo) === null || r === void 0 ? void 0 : r.version
            }), e.remote.state.communicationServerUrl).catch(i => {}
            ),
            yield e.remote.disconnect({
                terminate: !0
            }),
            e.remote.emit(te.REJECTED, {
                channelId: t
            }),
            e.remote.setConnectionStatus(Ue.DISCONNECTED)) : W.SocketService(`[SocketService: handleChannelRejected()] SKIP -- channelId=${t} isOriginator=${e.state.isOriginator} ready=${e.remote.state.ready}`)
        })
    }
}, {
    event: "clients_waiting_to_join",
    handler: function(e, t) {
        return n => {
            W.SocketService(`[SocketService: handleClientsWaitingToJoin()] context=${e.state.context} on 'clients_waiting_to_join-${t}'`, n),
            e.emit(te.CLIENTS_WAITING, n)
        }
    }
}]
  , f1 = [{
    event: te.KEY_INFO,
    handler: function(e) {
        return t => {
            W.SocketService("[SocketService: handleKeyInfo()] on 'KEY_INFO'", t),
            e.emit(te.KEY_INFO, t)
        }
    }
}, {
    event: te.KEYS_EXCHANGED,
    handler: function(e) {
        return () => {
            var t, n, r;
            W.SocketService(`[SocketService: handleKeysExchanged()] on 'keys_exchanged' keyschanged=${(t = e.state.keyExchange) === null || t === void 0 ? void 0 : t.areKeysExchanged()}`);
            let {channelConfig: i} = e.remote.state;
            if (i) {
                let s = e.getKeyExchange().getKeyInfo().ecies;
                i.localKey = s.private,
                i.otherKey = s.otherPubKey,
                e.remote.state.channelConfig = i,
                (n = e.remote.state.storageManager) === null || n === void 0 || n.persistChannelConfig(i).catch(a => {}
                )
            }
            e.emit(te.KEYS_EXCHANGED, {
                keysExchanged: (r = e.state.keyExchange) === null || r === void 0 ? void 0 : r.areKeysExchanged(),
                isOriginator: e.state.isOriginator
            });
            let o = {
                keyInfo: e.getKeyInfo()
            };
            e.emit(te.SERVICE_STATUS, o)
        }
    }
}];
function gu(e, t) {
    W.SocketService(`[SocketService: setupChannelListener()] context=${e.state.context} setting socket listeners for channel ${t}...`);
    let {socket: n} = e.state
      , {keyExchange: r} = e.state;
    n && e.state.isOriginator && (e.state.debug && (n?.io.on("error", i => {
        W.SocketService(`[SocketService: setupChannelListener()] context=${e.state.context} socket event=error`, i)
    }
    ),
    n?.io.on("reconnect", i => {
        W.SocketService(`[SocketService: setupChannelListener()] context=${e.state.context} socket event=reconnect`, i),
        xa(e).catch(o => {}
        )
    }
    ),
    n?.io.on("reconnect_error", i => {
        W.SocketService(`[SocketService: setupChannelListener()] context=${e.state.context} socket event=reconnect_error`, i)
    }
    ),
    n?.io.on("reconnect_failed", () => {
        W.SocketService(`[SocketService: setupChannelListener()] context=${e.state.context} socket event=reconnect_failed`)
    }
    )),
    n?.on("disconnect", i => (W.SocketService(`[SocketService: setupChannelListener()] on 'disconnect' -- MetaMaskSDK socket disconnected '${i}' begin recovery...`),
    function(o) {
        return s => {
            W.SocketService(`[SocketService: handleDisconnect()] on 'disconnect' manualDisconnect=${o.state.manualDisconnect}`, s),
            o.state.manualDisconnect || (o.emit(te.SOCKET_DISCONNECTED),
            xa(o).catch(a => {}
            ))
        }
    }(e)(i)))),
    h1.forEach( ({event: i, handler: o}) => {
        n?.on(`${i}-${t}`, o(e, t))
    }
    ),
    f1.forEach( ({event: i, handler: o}) => {
        r?.on(i, o(e))
    }
    ),
    e.state.setupChannelListeners = !0
}
var Aa = class extends _r.EventEmitter2 {
    constructor(t) {
        super(),
        this.state = {
            clientsConnected: !1,
            clientsPaused: !1,
            manualDisconnect: !1,
            lastRpcId: void 0,
            rpcMethodTracker: {},
            hasPlaintext: !1,
            communicationServerUrl: "",
            focusListenerAdded: !1,
            removeFocusListener: void 0,
            isReconnecting: !1,
            reconnectionAttempts: 0
        },
        this.options = t;
        let {reconnect: n, communicationLayerPreference: r, communicationServerUrl: i, context: o, remote: s, logging: a} = t;
        this.state.resumed = n,
        this.state.context = o,
        this.state.isOriginator = s.state.isOriginator,
        this.state.communicationLayerPreference = r,
        this.state.debug = a?.serviceLayer === !0,
        this.remote = s,
        a?.serviceLayer === !0 && We.default.enable("SocketService:Layer"),
        this.state.communicationServerUrl = i,
        this.state.hasPlaintext = this.state.communicationServerUrl !== vr && a?.plaintext === !0,
        W.SocketService(`[SocketService: constructor()] Socket IO url: ${this.state.communicationServerUrl}`),
        this.initSocket()
    }
    initSocket() {
        var t;
        let {otherPublicKey: n, ecies: r, logging: i} = this.options
          , o = {
            autoConnect: !1,
            transports: l1,
            withCredentials: !0
        }
          , s = this.state.communicationServerUrl;
        W.SocketService(`[SocketService: initSocket()] Socket IO url: ${s}`),
        this.state.socket = Br(s, o),
        function(c) {
            if (typeof window < "u" && typeof document < "u" && (W.SocketService(`[SocketService: setupSocketFocusListener()] hasFocus=${document.hasFocus()}`, c),
            !c.state.focusListenerAdded)) {
                let l = () => {
                    W.SocketService("Document has focus --- reconnecting socket"),
                    xa(c).catch(u => {}
                    )
                }
                ;
                window.addEventListener("focus", l),
                c.state.focusListenerAdded = !0,
                c.state.removeFocusListener = () => {
                    window.removeEventListener("focus", l),
                    c.state.focusListenerAdded = !1
                }
            }
        }(this);
        let a = {
            communicationLayer: this,
            otherPublicKey: n,
            sendPublicKey: !1,
            context: (t = this.state.context) !== null && t !== void 0 ? t : "",
            ecies: r,
            logging: i
        };
        this.state.keyExchange = new ka(a)
    }
    resetKeys() {
        return W.SocketService("[SocketService: resetKeys()] Resetting keys."),
        void ((t = this.state.keyExchange) === null || t === void 0 || t.resetKeys());
        var t
    }
    createChannel() {
        return J(this, void 0, void 0, function*() {
            return function(t) {
                return J(this, void 0, void 0, function*() {
                    var n, r, i;
                    if (W.SocketService(`[SocketService: createChannel()] context=${t.state.context}`),
                    t.state.socket || t.initSocket(),
                    (n = t.state.socket) === null || n === void 0 ? void 0 : n.connected)
                        throw new Error("socket already connected");
                    (r = t.state.socket) === null || r === void 0 || r.connect(),
                    t.state.manualDisconnect = !1,
                    t.state.isOriginator = !0;
                    let o = xr();
                    t.state.channelId = o,
                    gu(t, o),
                    yield new Promise( (a, c) => {
                        var l;
                        (l = t.state.socket) === null || l === void 0 || l.emit(te.JOIN_CHANNEL, {
                            channelId: o,
                            context: `${t.state.context}createChannel`,
                            clientType: "dapp"
                        }, (u, d) => J(this, void 0, void 0, function*() {
                            try {
                                yield ro(t, u, d),
                                a()
                            } catch (h) {
                                c(h)
                            }
                        }))
                    }
                    );
                    let s = (i = t.state.keyExchange) === null || i === void 0 ? void 0 : i.getKeyInfo();
                    return {
                        channelId: o,
                        pubKey: s?.ecies.public || "",
                        privKey: s?.ecies.private || ""
                    }
                })
            }(this)
        })
    }
    connectToChannel({channelId: t, withKeyExchange: n=!1, authorized: r}) {
        return function(i) {
            return J(this, arguments, void 0, function*({options: o, instance: s}) {
                let {channelId: a, authorized: c, withKeyExchange: l} = o
                  , {state: u, remote: d} = s
                  , {isOriginator: h=!1, socket: f, keyExchange: g} = u
                  , {channelConfig: m} = d.state;
                if (f?.connected)
                    throw new Error("socket already connected");
                if (h && m?.relayPersistence) {
                    let {localKey: v, otherKey: p} = m;
                    v && p && g?.setRelayPersistence({
                        localKey: v,
                        otherKey: p
                    })
                }
                return Object.assign(u, {
                    manualDisconnect: !1,
                    withKeyExchange: l,
                    isOriginator: h,
                    channelId: a
                }),
                f?.connect(),
                gu(s, a),
                !h && c && (g?.setKeysExchanged(!0),
                Object.assign(d.state, {
                    ready: !0,
                    authorized: !0
                })),
                new Promise(v => {
                    var p;
                    let S = (p = g?.getKeyInfo()) === null || p === void 0 ? void 0 : p.ecies.public;
                    f?.emit(te.JOIN_CHANNEL, {
                        channelId: a,
                        context: `${u.context}_connectToChannel`,
                        clientType: h ? "dapp" : "wallet",
                        publicKey: c && !h ? S : void 0
                    }, (E, N) => J(this, void 0, void 0, function*() {
                        yield ro(s, E, N),
                        v()
                    }))
                }
                )
            })
        }({
            options: {
                channelId: t,
                withKeyExchange: n,
                authorized: r
            },
            instance: this
        })
    }
    getKeyInfo() {
        return this.state.keyExchange.getKeyInfo()
    }
    keyCheck() {
        var t, n;
        (n = (t = this).state.socket) === null || n === void 0 || n.emit(te.MESSAGE, {
            id: t.state.channelId,
            context: t.state.context,
            message: {
                type: Se.KEY_HANDSHAKE_CHECK,
                pubkey: t.getKeyInfo().ecies.otherPubKey
            }
        })
    }
    getKeyExchange() {
        return this.state.keyExchange
    }
    sendMessage(t) {
        return J(this, void 0, void 0, function*() {
            return function(n, r) {
                return J(this, void 0, void 0, function*() {
                    var i, o, s;
                    if (!n.state.channelId)
                        throw W.SocketService("handleSendMessage: no channelId - Create a channel first"),
                        new Error("Create a channel first");
                    if (W.SocketService(`[SocketService: handleSendMessage()] context=${n.state.context} areKeysExchanged=${(i = n.state.keyExchange) === null || i === void 0 ? void 0 : i.areKeysExchanged()}`, r),
                    (o = r?.type) === null || o === void 0 ? void 0 : o.startsWith("key_handshake"))
                        return function(c, l) {
                            var u;
                            W.SocketService(`[SocketService: handleKeyHandshake()] context=${c.state.context}`, l),
                            (u = c.state.socket) === null || u === void 0 || u.emit(te.MESSAGE, {
                                id: c.state.channelId,
                                context: c.state.context,
                                clientType: c.state.isOriginator ? "dapp" : "wallet",
                                message: l
                            })
                        }(n, r),
                        !0;
                    (function(c, l) {
                        var u;
                        if (!(!((u = c.state.keyExchange) === null || u === void 0) && u.areKeysExchanged()) && !c.remote.state.relayPersistence)
                            throw W.SocketService(`[SocketService: validateKeyExchange()] context=${c.state.context} ERROR keys not exchanged`, l),
                            new Error("Keys not exchanged BBB")
                    }
                    )(n, r),
                    function(c, l) {
                        var u;
                        let d = (u = l?.method) !== null && u !== void 0 ? u : ""
                          , h = l?.id;
                        c.state.isOriginator && h && (c.state.rpcMethodTracker[h] = {
                            id: h,
                            timestamp: Date.now(),
                            method: d
                        },
                        c.emit(te.RPC_UPDATE, c.state.rpcMethodTracker[h]))
                    }(n, r);
                    let a = yield cf(n, r);
                    return n.remote.state.analytics && n.remote.state.isOriginator && r.method && lf.includes(r.method.toLowerCase()) && tn({
                        id: (s = n.remote.state.channelId) !== null && s !== void 0 ? s : "",
                        event: Le.SDK_RPC_REQUEST,
                        params: {
                            method: r.method,
                            from: "mobile"
                        }
                    }, n.remote.state.communicationServerUrl).catch(c => {}
                    ),
                    function(c, l) {
                        return J(this, void 0, void 0, function*() {
                            var u;
                            let d = l?.id
                              , h = (u = l?.method) !== null && u !== void 0 ? u : "";
                            if (c.state.isOriginator && d)
                                try {
                                    let f = mu(d, c.state.rpcMethodTracker, 200).then(v => ({
                                        type: dr.RPC_CHECK,
                                        result: v
                                    }))
                                      , g = J(this, void 0, void 0, function*() {
                                        let v = yield(S => J(void 0, [S], void 0, function*({rpcId: E, instance: N}) {
                                            for (; N.state.lastRpcId === E || N.state.lastRpcId === void 0; )
                                                yield mr(200);
                                            return N.state.lastRpcId
                                        }))({
                                            instance: c,
                                            rpcId: d
                                        })
                                          , p = yield mu(v, c.state.rpcMethodTracker, 200);
                                        return {
                                            type: dr.SKIPPED_RPC,
                                            result: p
                                        }
                                    })
                                      , m = yield Promise.race([f, g]);
                                    if (m.type === dr.RPC_CHECK) {
                                        let v = m.result;
                                        W.SocketService(`[SocketService:handleRpcReplies()] id=${l.id} ${h} ( ${v.elapsedTime} ms)`, v.result)
                                    } else {
                                        if (m.type !== dr.SKIPPED_RPC)
                                            throw new Error(`Error handling RPC replies for ${d}`);
                                        {
                                            let v = Object.assign(Object.assign({}, c.state.rpcMethodTracker[d]), {
                                                error: new Error("SDK_CONNECTION_ISSUE")
                                            });
                                            c.emit(te.RPC_UPDATE, v);
                                            let p = {
                                                data: Object.assign(Object.assign({}, v), {
                                                    jsonrpc: "2.0"
                                                }),
                                                name: "metamask-provider"
                                            };
                                            c.emit(te.MESSAGE, {
                                                message: p
                                            })
                                        }
                                    }
                                } catch (f) {
                                    throw f
                                }
                        })
                    }(n, r).catch(c => {}
                    ),
                    a
                })
            }(this, t)
        })
    }
    ping() {
        return function(t) {
            return J(this, void 0, void 0, function*() {
                var n, r;
                W.SocketService(`[SocketService: ping()] context=${t.state.context} originator=${t.state.isOriginator} keysExchanged=${(n = t.state.keyExchange) === null || n === void 0 ? void 0 : n.areKeysExchanged()}`),
                (r = t.state.socket) === null || r === void 0 || r.emit(Te.PING, {
                    id: t.state.channelId,
                    context: "ping",
                    clientType: t.remote.state.isOriginator ? "dapp" : "wallet",
                    message: ""
                })
            })
        }(this)
    }
    pause() {
        return function(t) {
            return J(this, void 0, void 0, function*() {
                var n, r;
                W.SocketService(`[SocketService: pause()] context=${t.state.context}`),
                t.state.manualDisconnect = !0,
                !((n = t.state.keyExchange) === null || n === void 0) && n.areKeysExchanged() && (yield t.sendMessage({
                    type: Te.PAUSE
                })),
                (r = t.state.socket) === null || r === void 0 || r.disconnect()
            })
        }(this)
    }
    isConnected() {
        var t;
        return (t = this.state.socket) === null || t === void 0 ? void 0 : t.connected
    }
    resume() {
        return function(t) {
            return J(this, void 0, void 0, function*() {
                let {state: n, remote: r} = t
                  , {socket: i, channelId: o, context: s, keyExchange: a, isOriginator: c} = n
                  , {isOriginator: l} = r.state;
                if (W.SocketService(`[SocketService: resume()] channelId=${o} context=${s} connected=${i?.connected} manualDisconnect=${n.manualDisconnect} resumed=${n.resumed} keysExchanged=${a?.areKeysExchanged()}`),
                !o)
                    throw W.SocketService("[SocketService: resume()] channelId is not defined"),
                    new Error("ChannelId is not defined");
                i?.connected ? (W.SocketService("[SocketService: resume()] already connected."),
                i.emit(Te.PING, {
                    id: o,
                    clientType: l ? "dapp" : "wallet",
                    context: "on_channel_config",
                    message: ""
                }),
                r.hasRelayPersistence() || a?.areKeysExchanged() || (c ? yield t.sendMessage({
                    type: Te.READY
                }) : a?.start({
                    isOriginator: !1
                }))) : (i?.connect(),
                W.SocketService(`[SocketService: resume()] after connecting socket --> connected=${i?.connected}`),
                i?.emit(te.JOIN_CHANNEL, {
                    channelId: o,
                    context: `${s}_resume`,
                    clientType: l ? "dapp" : "wallet"
                }, (u, d) => J(this, void 0, void 0, function*() {
                    try {
                        yield ro(t, u, d)
                    } catch {}
                }))),
                n.manualDisconnect = !1,
                n.resumed = !0
            })
        }(this)
    }
    getRPCMethodTracker() {
        return this.state.rpcMethodTracker
    }
    disconnect(t) {
        return function(n, r) {
            var i, o, s, a, c;
            W.SocketService(`[SocketService: disconnect()] context=${n.state.context}`, r),
            r?.terminate && ((o = (i = n.state).removeFocusListener) === null || o === void 0 || o.call(i),
            n.state.channelId = r.channelId,
            (s = n.state.socket) === null || s === void 0 || s.removeAllListeners(),
            (a = n.state.keyExchange) === null || a === void 0 || a.clean(),
            n.remote.state.ready = !1,
            n.state.socket = void 0,
            n.state.rpcMethodTracker = {}),
            n.state.manualDisconnect = !0,
            (c = n.state.socket) === null || c === void 0 || c.disconnect()
        }(this, t)
    }
}
, Un, qe, yu;
function p1(e) {
    return () => J(this, void 0, void 0, function*() {
        var t, n, r;
        let {state: i} = e;
        if (i.authorized)
            return;
        yield J(this, void 0, void 0, function*() {
            for (; !i.walletInfo; )
                yield mr(500)
        });
        let o = "7.3".localeCompare(((t = i.walletInfo) === null || t === void 0 ? void 0 : t.version) || "");
        if (W.RemoteCommunication(`[RemoteCommunication: handleAuthorizedEvent()] HACK 'authorized' version=${(n = i.walletInfo) === null || n === void 0 ? void 0 : n.version} compareValue=${o}`),
        o !== 1)
            return;
        let s = i.platformType === qe.MobileWeb || i.platformType === qe.ReactNative || i.platformType === qe.MetaMaskMobileWebview;
        W.RemoteCommunication(`[RemoteCommunication: handleAuthorizedEvent()] HACK 'authorized' platform=${i.platformType} secure=${s} channel=${i.channelId} walletVersion=${(r = i.walletInfo) === null || r === void 0 ? void 0 : r.version}`),
        s && (i.authorized = !0,
        e.emit(te.AUTHORIZED))
    })
}
function m1(e) {
    return t => {
        let {state: n} = e;
        W.RemoteCommunication(`[RemoteCommunication: handleChannelCreatedEvent()] context=${n.context} on 'channel_created' channelId=${t}`),
        e.emit(te.CHANNEL_CREATED, t)
    }
}
function g1(e, t) {
    return () => {
        var n, r, i, o;
        let {state: s} = e;
        W.RemoteCommunication(`[RemoteCommunication: handleClientsConnectedEvent()] on 'clients_connected' channel=${s.channelId} keysExchanged=${(r = (n = s.communicationLayer) === null || n === void 0 ? void 0 : n.getKeyInfo()) === null || r === void 0 ? void 0 : r.keysExchanged}`),
        s.analytics && tn(Object.assign(Object.assign({
            id: (i = s.channelId) !== null && i !== void 0 ? i : "",
            event: s.reconnection ? Le.RECONNECT : s.isOriginator ? Le.REQUEST : Le.REQUEST_MOBILE
        }, s.originatorInfo), {
            commLayer: t,
            sdkVersion: s.sdkVersion,
            walletVersion: (o = s.walletInfo) === null || o === void 0 ? void 0 : o.version,
            commLayerVersion: An.version
        }), s.communicationServerUrl).catch(a => {}
        ),
        s.clientsConnected = !0,
        s.originatorInfoSent = !1,
        e.emit(te.CLIENTS_CONNECTED)
    }
}
function y1(e) {
    return t => {
        let {state: n} = e;
        W.RemoteCommunication(`[RemoteCommunication: handleClientsDisconnectedEvent()] context=${n.context} on 'clients_disconnected' channelId=${t}`),
        n.relayPersistence || (n.clientsConnected = !1,
        n.ready = !1,
        n.authorized = !1),
        e.emit(te.CLIENTS_DISCONNECTED, n.channelId),
        e.setConnectionStatus(Ue.DISCONNECTED)
    }
}
function v1(e) {
    return t => {
        var n;
        let {state: r} = e;
        if (W.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] context=${r.context} on 'clients_waiting' numberUsers=${t} ready=${r.ready} autoStarted=${r.originatorConnectStarted}`),
        e.setConnectionStatus(Ue.WAITING),
        e.emit(te.CLIENTS_WAITING, t),
        r.originatorConnectStarted) {
            W.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] on 'clients_waiting' watch autoStarted=${r.originatorConnectStarted} timeout`, r.autoConnectOptions);
            let i = ((n = r.autoConnectOptions) === null || n === void 0 ? void 0 : n.timeout) || 3e3
              , o = setTimeout( () => {
                W.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] setTimeout(${i}) terminate channelConfig`, r.autoConnectOptions),
                r.originatorConnectStarted = !1,
                r.ready || e.setConnectionStatus(Ue.TIMEOUT),
                clearTimeout(o)
            }
            , i)
        }
    }
}
function b1(e, t) {
    return n => {
        var r, i, o, s, a, c, l, u;
        let {state: d} = e;
        if (W.RemoteCommunication(`[RemoteCommunication: handleKeysExchangedEvent()] context=${d.context} on commLayer.'keys_exchanged' channel=${d.channelId}`, n),
        (i = (r = d.communicationLayer) === null || r === void 0 ? void 0 : r.getKeyInfo()) === null || i === void 0 ? void 0 : i.keysExchanged) {
            let h = Object.assign(Object.assign({}, d.channelConfig), {
                channelId: (o = d.channelId) !== null && o !== void 0 ? o : "",
                validUntil: ((s = d.channelConfig) === null || s === void 0 ? void 0 : s.validUntil) || br,
                localKey: d.communicationLayer.getKeyInfo().ecies.private,
                otherKey: d.communicationLayer.getKeyInfo().ecies.otherPubKey
            });
            (a = d.storageManager) === null || a === void 0 || a.persistChannelConfig(h).catch(f => {}
            ),
            e.setConnectionStatus(Ue.LINKED)
        }
        (function(h, f) {
            var g, m, v, p, S, E, N, I;
            let {state: F} = h;
            W.RemoteCommunication(`[RemoteCommunication: setLastActiveDate()] channel=${F.channelId}`, f);
            let q = Object.assign(Object.assign({}, F.channelConfig), {
                channelId: (g = F.channelId) !== null && g !== void 0 ? g : "",
                validUntil: (v = (m = F.channelConfig) === null || m === void 0 ? void 0 : m.validUntil) !== null && v !== void 0 ? v : 0,
                relayPersistence: F.relayPersistence,
                localKey: (S = (p = F.communicationLayer) === null || p === void 0 ? void 0 : p.state.keyExchange) === null || S === void 0 ? void 0 : S.getKeyInfo().ecies.private,
                otherKey: (N = (E = F.communicationLayer) === null || E === void 0 ? void 0 : E.state.keyExchange) === null || N === void 0 ? void 0 : N.getKeyInfo().ecies.otherPubKey,
                lastActive: f.getTime()
            });
            (I = F.storageManager) === null || I === void 0 || I.persistChannelConfig(q)
        }
        )(e, new Date),
        d.analytics && d.channelId && tn(Object.assign(Object.assign({
            id: d.channelId,
            event: n.isOriginator ? Le.CONNECTED : Le.CONNECTED_MOBILE
        }, d.originatorInfo), {
            sdkVersion: d.sdkVersion,
            commLayer: t,
            commLayerVersion: An.version,
            walletVersion: (c = d.walletInfo) === null || c === void 0 ? void 0 : c.version
        }), d.communicationServerUrl).catch(h => {}
        ),
        d.isOriginator = n.isOriginator,
        n.isOriginator || ((l = d.communicationLayer) === null || l === void 0 || l.sendMessage({
            type: Te.READY
        }),
        d.ready = !0,
        d.paused = !1),
        n.isOriginator && !d.originatorInfoSent && ((u = d.communicationLayer) === null || u === void 0 || u.sendMessage({
            type: Te.ORIGINATOR_INFO,
            originatorInfo: d.originatorInfo,
            originator: d.originatorInfo
        }),
        d.originatorInfoSent = !0)
    }
}
function w1(e) {
    return t => {
        let n = t;
        t.message && (n = n.message),
        function(r, i) {
            let {state: o} = i;
            if (W.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] context=${o.context} on 'message' typeof=${typeof r}`, r),
            i.state.ready = !0,
            o.isOriginator || r.type !== Te.ORIGINATOR_INFO)
                if (o.isOriginator && r.type === Te.WALLET_INFO)
                    (function(s, a) {
                        let {state: c} = s;
                        c.walletInfo = a.walletInfo,
                        c.paused = !1
                    }
                    )(i, r);
                else {
                    if (o.isOriginator && r.type === Te.WALLET_INIT)
                        (function(s, a) {
                            return J(this, void 0, void 0, function*() {
                                var c, l, u;
                                let {state: d} = s;
                                if (d.isOriginator) {
                                    let h = a.data || {};
                                    if (typeof h == "object" && "accounts"in h && "chainId"in h && "walletKey"in h)
                                        try {
                                            let {channelConfig: f} = s.state;
                                            if (W.RemoteCommunication("WALLET_INIT: channelConfig", JSON.stringify(f, null, 2)),
                                            f) {
                                                let g = h.accounts, m = h.chainId, v = h.walletKey, p, S = !1;
                                                "deeplinkProtocol"in h && (S = !!h.deeplinkProtocol,
                                                s.state.deeplinkProtocolAvailable = S),
                                                "walletVersion"in h && (p = h.walletVersion),
                                                yield(c = s.state.storageManager) === null || c === void 0 ? void 0 : c.persistChannelConfig(Object.assign(Object.assign({}, f), {
                                                    otherKey: v,
                                                    walletVersion: p,
                                                    deeplinkProtocolAvailable: S,
                                                    relayPersistence: !0
                                                })),
                                                yield(l = s.state.storageManager) === null || l === void 0 ? void 0 : l.persistAccounts(g),
                                                yield(u = s.state.storageManager) === null || u === void 0 ? void 0 : u.persistChainId(m)
                                            }
                                            s.emit(te.WALLET_INIT, {
                                                accounts: h.accounts,
                                                chainId: h.chainId
                                            })
                                        } catch {}
                                }
                            })
                        }
                        )(i, r).catch(s => {
                            W.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] error=${s}`)
                        }
                        );
                    else if (r.type === Te.TERMINATE)
                        (function(s) {
                            return J(this, void 0, void 0, function*() {
                                let {state: a} = s;
                                a.isOriginator && (yield uf({
                                    options: {
                                        terminate: !0,
                                        sendMessage: !1
                                    },
                                    instance: s
                                }),
                                s.emit(te.TERMINATE))
                            })
                        }
                        )(i).catch(s => {
                            W.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] error=${s}`)
                        }
                        );
                    else if (r.type === Te.PAUSE)
                        (function(s) {
                            let {state: a} = s;
                            a.paused = !0,
                            s.setConnectionStatus(Ue.PAUSED)
                        }
                        )(i);
                    else if (r.type === Te.READY && o.isOriginator)
                        (function(s) {
                            let {state: a} = s;
                            s.setConnectionStatus(Ue.LINKED);
                            let c = a.paused;
                            a.paused = !1,
                            s.emit(te.CLIENTS_READY, {
                                isOriginator: a.isOriginator,
                                walletInfo: a.walletInfo
                            }),
                            c && (a.authorized = !0,
                            s.emit(te.AUTHORIZED))
                        }
                        )(i);
                    else {
                        if (r.type === Te.OTP && o.isOriginator)
                            return void function(s, a) {
                                var c;
                                let {state: l} = s;
                                s.emit(te.OTP, a.otpAnswer),
                                "6.6".localeCompare(((c = l.walletInfo) === null || c === void 0 ? void 0 : c.version) || "") === 1 && s.emit(te.SDK_RPC_CALL, {
                                    method: d1.ETH_REQUESTACCOUNTS,
                                    params: []
                                })
                            }(i, r);
                        r.type === Te.AUTHORIZED && o.isOriginator && function(s) {
                            let {state: a} = s;
                            a.authorized = !0,
                            s.emit(te.AUTHORIZED)
                        }(i)
                    }
                    i.emit(te.MESSAGE, r)
                }
            else
                (function(s, a) {
                    var c;
                    let {state: l} = s;
                    (c = l.communicationLayer) === null || c === void 0 || c.sendMessage({
                        type: Te.WALLET_INFO,
                        walletInfo: l.walletInfo
                    }),
                    l.originatorInfo = a.originatorInfo || a.originator,
                    s.emit(te.CLIENTS_READY, {
                        isOriginator: l.isOriginator,
                        originatorInfo: l.originatorInfo
                    }),
                    l.paused = !1
                }
                )(i, r)
        }(n, e)
    }
}
function E1(e) {
    return () => {
        let {state: t} = e;
        W.RemoteCommunication("[RemoteCommunication: handleSocketReconnectEvent()] on 'socket_reconnect' -- reset key exchange status / set ready to false"),
        t.ready = !1,
        t.authorized = !1,
        af(t),
        e.emitServiceStatusEvent({
            context: "socket_reconnect"
        })
    }
}
function _1(e) {
    return () => {
        let {state: t} = e;
        W.RemoteCommunication("[RemoteCommunication: handleSocketDisconnectedEvent()] on 'socket_Disconnected' set ready to false"),
        t.ready = !1
    }
}
function C1(e) {
    return () => J(this, void 0, void 0, function*() {
        var t, n, r, i, o, s, a;
        let {state: c} = e;
        W.RemoteCommunication(`[RemoteCommunication: handleFullPersistenceEvent()] context=${c.context}`),
        e.state.ready = !0,
        e.state.clientsConnected = !0,
        e.state.authorized = !0,
        e.state.relayPersistence = !0,
        (t = e.state.communicationLayer) === null || t === void 0 || t.getKeyExchange().setKeysExchanged(!0),
        e.emit(te.KEYS_EXCHANGED, {
            keysExchanged: !0,
            isOriginator: !0
        }),
        e.emit(te.AUTHORIZED),
        e.emit(te.CLIENTS_READY),
        e.emit(te.CHANNEL_PERSISTENCE);
        try {
            c.channelConfig = Object.assign(Object.assign({}, c.channelConfig), {
                localKey: (n = c.communicationLayer) === null || n === void 0 ? void 0 : n.getKeyExchange().getKeyInfo().ecies.private,
                otherKey: (r = c.communicationLayer) === null || r === void 0 ? void 0 : r.getKeyExchange().getOtherPublicKey(),
                channelId: (i = c.channelId) !== null && i !== void 0 ? i : "",
                validUntil: (s = (o = c.channelConfig) === null || o === void 0 ? void 0 : o.validUntil) !== null && s !== void 0 ? s : br,
                relayPersistence: !0
            }),
            yield(a = c.storageManager) === null || a === void 0 ? void 0 : a.persistChannelConfig(c.channelConfig)
        } catch {}
    })
}
function vu({communicationLayerPreference: e, otherPublicKey: t, reconnect: n, ecies: r, communicationServerUrl: i=vr, instance: o}) {
    var s, a, c, l, u, d, h, f, g, m, v;
    let {state: p} = o;
    if (W.RemoteCommunication("[initCommunicationLayer()] ", JSON.stringify(p, null, 2)),
    e !== Un.SOCKET)
        throw new Error("Invalid communication protocol");
    p.communicationLayer = new Aa({
        communicationLayerPreference: e,
        otherPublicKey: t,
        reconnect: n,
        transports: p.transports,
        communicationServerUrl: i,
        context: p.context,
        ecies: r,
        logging: p.logging,
        remote: o
    });
    let S = typeof document < "u" && document.URL || ""
      , E = typeof document < "u" && document.title || "";
    !((s = p.dappMetadata) === null || s === void 0) && s.url && (S = p.dappMetadata.url),
    !((a = p.dappMetadata) === null || a === void 0) && a.name && (E = p.dappMetadata.name);
    let N = (d = (l = (c = p.dappMetadata) === null || c === void 0 ? void 0 : c.name) !== null && l !== void 0 ? l : (u = p.dappMetadata) === null || u === void 0 ? void 0 : u.url) !== null && d !== void 0 ? d : "N/A"
      , I = typeof window < "u" && window.location !== void 0 && (h = window.location.hostname) !== null && h !== void 0 ? h : N
      , F = {
        url: S,
        title: E,
        source: (f = p.dappMetadata) === null || f === void 0 ? void 0 : f.source,
        dappId: I,
        icon: ((g = p.dappMetadata) === null || g === void 0 ? void 0 : g.iconUrl) || ((m = p.dappMetadata) === null || m === void 0 ? void 0 : m.base64Icon),
        platform: p.platformType,
        apiVersion: An.version,
        connector: (v = p.dappMetadata) === null || v === void 0 ? void 0 : v.connector
    };
    p.originatorInfo = F;
    let q = {
        [te.AUTHORIZED]: p1(o),
        [te.MESSAGE]: w1(o),
        [te.CHANNEL_PERSISTENCE]: C1(o),
        [te.CLIENTS_CONNECTED]: g1(o, e),
        [te.KEYS_EXCHANGED]: b1(o, e),
        [te.SOCKET_DISCONNECTED]: _1(o),
        [te.SOCKET_RECONNECT]: E1(o),
        [te.CLIENTS_DISCONNECTED]: y1(o),
        [te.KEY_INFO]: () => {}
        ,
        [te.CHANNEL_CREATED]: m1(o),
        [te.CLIENTS_WAITING]: v1(o),
        [te.RPC_UPDATE]: z => {
            o.emit(te.RPC_UPDATE, z)
        }
    };
    for (let[z,G] of Object.entries(q))
        try {
            p.communicationLayer.on(z, G)
        } catch {}
}
function uf(e) {
    return J(this, arguments, void 0, function*({options: t, instance: n}) {
        let {state: r} = n;
        return W.RemoteCommunication(`[RemoteCommunication: disconnect()] channel=${r.channelId}`, t),
        new Promise( (i, o) => {
            var s, a, c, l, u, d;
            t?.terminate ? (n.state.ready && tn({
                id: (s = n.state.channelId) !== null && s !== void 0 ? s : "",
                event: Le.TERMINATED
            }, n.state.communicationServerUrl).catch(h => {}
            ),
            r.ready = !1,
            r.paused = !1,
            (a = r.storageManager) === null || a === void 0 || a.terminate((c = r.channelId) !== null && c !== void 0 ? c : ""),
            n.state.terminated = !0,
            t.sendMessage ? !((l = r.communicationLayer) === null || l === void 0) && l.getKeyInfo().keysExchanged && n.state.communicationLayer && cf(n.state.communicationLayer, {
                type: Te.TERMINATE
            }).then( () => {
                i(!0)
            }
            ).catch(h => {
                o(h)
            }
            ) : i(!0),
            r.authorized = !1,
            r.relayPersistence = !1,
            r.channelId = xr(),
            t.channelId = r.channelId,
            r.channelConfig = void 0,
            r.originatorConnectStarted = !1,
            (u = r.communicationLayer) === null || u === void 0 || u.disconnect(t),
            n.setConnectionStatus(Ue.TERMINATED)) : ((d = r.communicationLayer) === null || d === void 0 || d.disconnect(t),
            n.setConnectionStatus(Ue.DISCONNECTED),
            i(!0))
        }
        )
    })
}
(Un || (Un = {})).SOCKET = "socket",
function(e) {
    e.NonBrowser = "nodejs",
    e.MetaMaskMobileWebview = "in-app-browser",
    e.DesktopWeb = "web-desktop",
    e.MobileWeb = "web-mobile",
    e.ReactNative = "react-native"
}(qe || (qe = {}));
var Ma = class extends _r.EventEmitter2 {
    constructor(t) {
        super(),
        this.state = {
            ready: !1,
            authorized: !1,
            isOriginator: !1,
            terminated: !1,
            protocolVersion: 1,
            paused: !1,
            deeplinkProtocolAvailable: !1,
            platformType: "metamask-mobile",
            analytics: !1,
            reconnection: !1,
            originatorInfoSent: !1,
            communicationServerUrl: vr,
            context: "",
            persist: !1,
            clientsConnected: !1,
            sessionDuration: br,
            originatorConnectStarted: !1,
            debug: !1,
            _connectionStatus: Ue.DISCONNECTED
        },
        this._options = t;
        let {platformType: n, communicationLayerPreference: r, otherPublicKey: i, reconnect: o, walletInfo: s, dappMetadata: a, protocolVersion: c, transports: l, context: u, relayPersistence: d, ecies: h, analytics: f=!1, storage: g, sdkVersion: m, communicationServerUrl: v=vr, logging: p, autoConnect: S={
            timeout: u1
        }} = t;
        this.state.otherPublicKey = i,
        this.state.dappMetadata = a,
        this.state.walletInfo = s,
        this.state.transports = l,
        this.state.platformType = n,
        this.state.analytics = f,
        this.state.protocolVersion = c ?? 1,
        this.state.isOriginator = !i,
        this.state.relayPersistence = d,
        this.state.communicationServerUrl = v,
        this.state.context = u,
        this.state.terminated = !1,
        this.state.sdkVersion = m,
        this.setMaxListeners(50),
        this.setConnectionStatus(Ue.DISCONNECTED),
        g?.duration && (this.state.sessionDuration = br),
        this.state.storageOptions = g,
        this.state.autoConnectOptions = S,
        this.state.debug = p?.remoteLayer === !0,
        p?.remoteLayer === !0 && We.default.enable("RemoteCommunication:Layer"),
        p?.serviceLayer === !0 && We.default.enable("SocketService:Layer"),
        p?.eciesLayer === !0 && We.default.enable("ECIES:Layer"),
        p?.keyExchangeLayer === !0 && We.default.enable("KeyExchange:Layer"),
        this.state.logging = p,
        g?.storageManager && (this.state.storageManager = g.storageManager),
        W.RemoteCommunication(`[RemoteCommunication: constructor()] protocolVersion=${c} relayPersistence=${d} isOriginator=${this.state.isOriginator} communicationLayerPreference=${r} otherPublicKey=${i} reconnect=${o}`),
        this.state.isOriginator || vu({
            communicationLayerPreference: r,
            otherPublicKey: i,
            reconnect: o,
            ecies: h,
            communicationServerUrl: v,
            instance: this
        }),
        this.emitServiceStatusEvent({
            context: "constructor"
        })
    }
    initFromDappStorage() {
        return J(this, void 0, void 0, function*() {
            var t;
            if (this.state.storageManager) {
                let n = yield this.state.storageManager.getPersistedChannelConfig({});
                n && (this.state.channelConfig = n,
                this.state.channelId = n.channelId,
                this.state.deeplinkProtocolAvailable = (t = n.deeplinkProtocolAvailable) !== null && t !== void 0 && t,
                n.relayPersistence && (this.state.authorized = !0,
                this.state.ready = !0,
                this.setConnectionStatus(Ue.LINKED),
                yield this.connectToChannel({
                    channelId: n.channelId
                })))
            }
            vu({
                communicationLayerPreference: Un.SOCKET,
                otherPublicKey: this.state.otherPublicKey,
                reconnect: this._options.reconnect,
                ecies: this._options.ecies,
                communicationServerUrl: this.state.communicationServerUrl,
                instance: this
            })
        })
    }
    originatorSessionConnect() {
        return J(this, void 0, void 0, function*() {
            return yield function(t) {
                return J(this, void 0, void 0, function*() {
                    var n;
                    let {state: r} = t;
                    if (!r.storageManager)
                        return void W.RemoteCommunication("[RemoteCommunication: originatorSessionConnect()] no storage manager defined - skip");
                    let i = yield r.storageManager.getPersistedChannelConfig({});
                    if (W.RemoteCommunication(`[RemoteCommunication: originatorSessionConnect()] autoStarted=${r.originatorConnectStarted} channelConfig`, i),
                    (n = r.communicationLayer) === null || n === void 0 ? void 0 : n.isConnected())
                        return W.RemoteCommunication("[RemoteCommunication: originatorSessionConnect()] socket already connected - skip"),
                        i;
                    if (i) {
                        if (i.validUntil > Date.now())
                            return r.channelConfig = i,
                            r.originatorConnectStarted = !0,
                            r.channelId = i?.channelId,
                            r.reconnection = !0,
                            i;
                        W.RemoteCommunication("[RemoteCommunication: autoConnect()] Session has expired")
                    }
                    r.originatorConnectStarted = !1
                })
            }(this)
        })
    }
    generateChannelIdConnect() {
        return J(this, void 0, void 0, function*() {
            return function(t) {
                return J(this, void 0, void 0, function*() {
                    var n, r, i, o, s, a;
                    if (!t.communicationLayer)
                        throw new Error("communication layer not initialized");
                    if (t.ready)
                        throw new Error("Channel already connected");
                    if (t.channelId && (!((n = t.communicationLayer) === null || n === void 0) && n.isConnected()))
                        return t.channelConfig = Object.assign(Object.assign({}, t.channelConfig), {
                            channelId: t.channelId,
                            validUntil: Date.now() + t.sessionDuration
                        }),
                        (r = t.storageManager) === null || r === void 0 || r.persistChannelConfig(t.channelConfig),
                        {
                            channelId: t.channelId,
                            privKey: (o = (i = t.communicationLayer) === null || i === void 0 ? void 0 : i.getKeyInfo()) === null || o === void 0 ? void 0 : o.ecies.private,
                            pubKey: (a = (s = t.communicationLayer) === null || s === void 0 ? void 0 : s.getKeyInfo()) === null || a === void 0 ? void 0 : a.ecies.public
                        };
                    W.RemoteCommunication("[RemoteCommunication: generateChannelId()]");
                    let c = yield t.communicationLayer.createChannel();
                    W.RemoteCommunication("[RemoteCommunication: generateChannelId()] channel created", c);
                    let l = Object.assign(Object.assign({}, t.channelConfig), {
                        channelId: c.channelId,
                        localKey: c.privKey,
                        validUntil: Date.now() + t.sessionDuration
                    });
                    return t.channelId = c.channelId,
                    t.channelConfig = l,
                    {
                        channelId: t.channelId,
                        pubKey: c.pubKey,
                        privKey: c.privKey
                    }
                })
            }(this.state)
        })
    }
    clean() {
        return af(this.state)
    }
    connectToChannel({channelId: t, withKeyExchange: n, authorized: r}) {
        return function(i) {
            return J(this, arguments, void 0, function*({channelId: o, withKeyExchange: s, authorized: a, state: c}) {
                var l, u, d;
                if (!Gn(o))
                    throw W.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${c.context} invalid channel channelId=${o}`),
                    new Error(`Invalid channel ${o}`);
                if (W.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${c.context} channelId=${o} withKeyExchange=${s}`),
                (l = c.communicationLayer) === null || l === void 0 ? void 0 : l.isConnected())
                    return void W.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${c.context} already connected - interrupt connection.`);
                c.channelId = o,
                yield(u = c.communicationLayer) === null || u === void 0 ? void 0 : u.connectToChannel({
                    channelId: o,
                    authorized: a,
                    withKeyExchange: s
                });
                let h = Object.assign(Object.assign({}, c.channelConfig), {
                    channelId: o,
                    validUntil: Date.now() + c.sessionDuration
                });
                c.channelConfig = h,
                (d = c.storageManager) === null || d === void 0 || d.persistChannelConfig(h)
            })
        }({
            channelId: t,
            authorized: r,
            withKeyExchange: n,
            state: this.state
        })
    }
    sendMessage(t) {
        return function(n, r) {
            return J(this, void 0, void 0, function*() {
                var i, o;
                let {state: s} = n;
                W.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${s.context} paused=${s.paused} ready=${s.ready} relayPersistence=${s.relayPersistence} authorized=${s.authorized} socket=${(i = s.communicationLayer) === null || i === void 0 ? void 0 : i.isConnected()} clientsConnected=${s.clientsConnected} status=${s._connectionStatus}`, r),
                s.relayPersistence || s.ready && (!((o = s.communicationLayer) === null || o === void 0) && o.isConnected()) && s.clientsConnected || (W.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${s.context}  SKIP message waiting for MM mobile readiness.`),
                yield new Promise(a => {
                    n.once(te.CLIENTS_READY, a)
                }
                ),
                W.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${s.context}  AFTER SKIP / READY -- sending pending message`));
                try {
                    return yield function(c, l) {
                        return J(this, void 0, void 0, function*() {
                            return new Promise(u => {
                                var d;
                                let {state: h} = c;
                                W.RemoteCommunication(`[RemoteCommunication: handleAuthorization()] context=${h.context} ready=${h.ready} authorized=${h.authorized} method=${l.method}`),
                                !h.isOriginator || h.authorized || h.relayPersistence ? (d = h.communicationLayer) === null || d === void 0 || d.sendMessage(l).then(f => {
                                    u(f)
                                }
                                ).catch(f => {
                                    u(!1)
                                }
                                ) : c.once(te.AUTHORIZED, () => {
                                    var f;
                                    W.RemoteCommunication(`[RemoteCommunication: handleAuthorization()] context=${h.context}  AFTER SKIP / AUTHORIZED -- sending pending message`),
                                    (f = h.communicationLayer) === null || f === void 0 || f.sendMessage(l).then(g => {
                                        u(g)
                                    }
                                    ).catch(g => {
                                        u(!1)
                                    }
                                    )
                                }
                                )
                            }
                            )
                        })
                    }(n, r)
                } catch (a) {
                    throw a
                }
            })
        }(this, t)
    }
    testStorage() {
        return J(this, void 0, void 0, function*() {
            return function(t) {
                return J(this, void 0, void 0, function*() {
                    var n;
                    let r = yield(n = t.storageManager) === null || n === void 0 ? void 0 : n.getPersistedChannelConfig();
                    W.RemoteCommunication("[RemoteCommunication: testStorage()] res", r)
                })
            }(this.state)
        })
    }
    hasDeeplinkProtocol() {
        return this.state.deeplinkProtocolAvailable
    }
    getChannelConfig() {
        return this.state.channelConfig
    }
    isReady() {
        return this.state.ready
    }
    isConnected() {
        var t;
        return (t = this.state.communicationLayer) === null || t === void 0 ? void 0 : t.isConnected()
    }
    isAuthorized() {
        return this.state.authorized
    }
    isPaused() {
        return this.state.paused
    }
    getCommunicationLayer() {
        return this.state.communicationLayer
    }
    ping() {
        return J(this, void 0, void 0, function*() {
            var t;
            W.RemoteCommunication(`[RemoteCommunication: ping()] channel=${this.state.channelId}`),
            yield(t = this.state.communicationLayer) === null || t === void 0 ? void 0 : t.ping()
        })
    }
    testLogger() {
        W.RemoteCommunication(`testLogger() channel=${this.state.channelId}`),
        W.SocketService(`testLogger() channel=${this.state.channelId}`),
        W.Ecies(`testLogger() channel=${this.state.channelId}`),
        W.KeyExchange(`testLogger() channel=${this.state.channelId}`)
    }
    keyCheck() {
        var t;
        W.RemoteCommunication(`[RemoteCommunication: keyCheck()] channel=${this.state.channelId}`),
        (t = this.state.communicationLayer) === null || t === void 0 || t.keyCheck()
    }
    setConnectionStatus(t) {
        this.state._connectionStatus !== t && (this.state._connectionStatus = t,
        this.emit(te.CONNECTION_STATUS, t),
        this.emitServiceStatusEvent({
            context: "setConnectionStatus"
        }))
    }
    emitServiceStatusEvent(t={}) {
        this.emit(te.SERVICE_STATUS, this.getServiceStatus())
    }
    getConnectionStatus() {
        return this.state._connectionStatus
    }
    getServiceStatus() {
        return {
            originatorInfo: this.state.originatorInfo,
            keyInfo: this.getKeyInfo(),
            connectionStatus: this.state._connectionStatus,
            channelConfig: this.state.channelConfig,
            channelId: this.state.channelId
        }
    }
    getKeyInfo() {
        var t;
        return (t = this.state.communicationLayer) === null || t === void 0 ? void 0 : t.getKeyInfo()
    }
    resetKeys() {
        var t;
        (t = this.state.communicationLayer) === null || t === void 0 || t.resetKeys()
    }
    setOtherPublicKey(t) {
        var n;
        let r = (n = this.state.communicationLayer) === null || n === void 0 ? void 0 : n.getKeyExchange();
        if (!r)
            throw new Error("KeyExchange is not initialized.");
        r.getOtherPublicKey() !== t && r.setOtherPublicKey(t)
    }
    pause() {
        return J(this, void 0, void 0, function*() {
            var t;
            W.RemoteCommunication(`[RemoteCommunication: pause()] channel=${this.state.channelId}`),
            yield(t = this.state.communicationLayer) === null || t === void 0 ? void 0 : t.pause(),
            this.setConnectionStatus(Ue.PAUSED)
        })
    }
    getVersion() {
        return An.version
    }
    hasRelayPersistence() {
        var t;
        return (t = this.state.relayPersistence) !== null && t !== void 0 && t
    }
    resume() {
        return J(this, void 0, void 0, function*() {
            return function(t) {
                return J(this, void 0, void 0, function*() {
                    var n;
                    let {state: r} = t;
                    W.RemoteCommunication(`[RemoteCommunication: resume()] channel=${r.channelId}`),
                    yield(n = r.communicationLayer) === null || n === void 0 ? void 0 : n.resume(),
                    t.setConnectionStatus(Ue.LINKED)
                })
            }(this)
        })
    }
    encrypt(t) {
        var n, r, i;
        let o = (n = this.state.communicationLayer) === null || n === void 0 ? void 0 : n.getKeyExchange()
          , s = o?.getOtherPublicKey();
        if (!s)
            throw new Error("KeyExchange not completed");
        return (i = (r = this.state.communicationLayer) === null || r === void 0 ? void 0 : r.state.eciesInstance) === null || i === void 0 ? void 0 : i.encrypt(t, s)
    }
    decrypt(t) {
        var n, r, i;
        if (!(!((n = this.state.communicationLayer) === null || n === void 0) && n.state.eciesInstance))
            throw new Error("ECIES instance is not initialized");
        return (i = (r = this.state.communicationLayer) === null || r === void 0 ? void 0 : r.state.eciesInstance) === null || i === void 0 ? void 0 : i.decrypt(t)
    }
    getChannelId() {
        return this.state.channelId
    }
    getRPCMethodTracker() {
        var t;
        return (t = this.state.communicationLayer) === null || t === void 0 ? void 0 : t.getRPCMethodTracker()
    }
    reject({channelId: t}) {
        return function(n) {
            return J(this, arguments, void 0, function*({channelId: r, state: i}) {
                var o, s, a;
                if (!Gn(r))
                    throw W.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${i.context} invalid channel channelId=${r}`),
                    new Error(`Invalid channel ${r}`);
                if (i.isOriginator)
                    return void W.RemoteCommunication(`[RemoteCommunication: reject()] context=${i.context} isOriginator=${i.isOriginator} channelId=${r}`);
                let {socket: c} = (s = (o = i.communicationLayer) === null || o === void 0 ? void 0 : o.state) !== null && s !== void 0 ? s : {};
                c?.connected || (W.RemoteCommunication(`[RemoteCommunication: reject()] context=${i.context} socket already connected`),
                c?.connect()),
                tn(Object.assign(Object.assign({
                    id: r,
                    event: Le.REJECTED
                }, i.originatorInfo), {
                    sdkVersion: i.sdkVersion,
                    commLayerVersion: An.version,
                    walletVersion: (a = i.walletInfo) === null || a === void 0 ? void 0 : a.version
                }), i.communicationServerUrl).catch(l => {}
                ),
                yield new Promise( (l, u) => {
                    c?.emit(te.REJECTED, {
                        channelId: r
                    }, (d, h) => {
                        W.RemoteCommunication(`[RemoteCommunication: reject()] context=${i.context} socket=${c?.id}`, {
                            error: d,
                            response: h
                        }),
                        d ? u(d) : l(h)
                    }
                    )
                }
                )
            })
        }({
            channelId: t,
            state: this.state
        })
    }
    disconnect(t) {
        return J(this, void 0, void 0, function*() {
            return uf({
                options: t,
                instance: this
            })
        })
    }
}
;
(function(e) {
    e.RENEW = "renew",
    e.LINK = "link"
}
)(yu || (yu = {}));
var S1 = "ERC721"
  , k1 = "ERC1155"
  , Oe = {
    errors: {
        disconnected: () => "MetaMask: Disconnected from chain. Attempting to connect.",
        permanentlyDisconnected: () => "MetaMask: Disconnected from MetaMask background. Page reload required.",
        sendSiteMetadata: () => "MetaMask: Failed to send site metadata. This is an internal error, please report this bug.",
        unsupportedSync: e => `MetaMask: The MetaMask Ethereum provider does not support synchronous methods like ${e} without a callback parameter.`,
        invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.",
        invalidNetworkParams: () => "MetaMask: Received invalid network parameters. Please report this bug.",
        invalidRequestArgs: () => "Expected a single, non-array, object argument.",
        invalidRequestMethod: () => "'args.method' must be a non-empty string.",
        invalidRequestParams: () => "'args.params' must be an object or array if provided.",
        invalidLoggerObject: () => "'args.logger' must be an object if provided.",
        invalidLoggerMethod: e => `'args.logger' must include required method '${e}'.`
    },
    info: {
        connected: e => `MetaMask: Connected to chain with ID "${e}".`
    },
    warnings: {
        chainIdDeprecation: `MetaMask: 'ethereum.chainId' is deprecated and may be removed in the future. Please use the 'eth_chainId' RPC method instead.
For more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23`,
        networkVersionDeprecation: `MetaMask: 'ethereum.networkVersion' is deprecated and may be removed in the future. Please use the 'net_version' RPC method instead.
For more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23`,
        selectedAddressDeprecation: `MetaMask: 'ethereum.selectedAddress' is deprecated and may be removed in the future. Please use the 'eth_accounts' RPC method instead.
For more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23`,
        enableDeprecation: `MetaMask: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1102`,
        sendDeprecation: `MetaMask: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
        events: {
            close: `MetaMask: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect`,
            data: `MetaMask: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#message`,
            networkChanged: `MetaMask: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged`,
            notification: `MetaMask: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.
For more information, see: https://eips.ethereum.org/EIPS/eip-1193#message`
        },
        rpc: {
            ethDecryptDeprecation: `MetaMask: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.
For more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686`,
            ethGetEncryptionPublicKeyDeprecation: `MetaMask: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.
For more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686`,
            walletWatchAssetNFTExperimental: `MetaMask: The RPC method 'wallet_watchAsset' is experimental for ERC721/ERC1155 assets and may change in the future.
For more information, see: https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-1.md and https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle`
        },
        experimentalMethods: "MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning."
    }
};
function x1(e) {
    let t = {
        ethDecryptDeprecation: !1,
        ethGetEncryptionPublicKeyDeprecation: !1,
        walletWatchAssetNFTExperimental: !1
    };
    return (n, r, i) => {
        t.ethDecryptDeprecation || n.method !== "eth_decrypt" ? t.ethGetEncryptionPublicKeyDeprecation || n.method !== "eth_getEncryptionPublicKey" ? !t.walletWatchAssetNFTExperimental && n.method === "wallet_watchAsset" && [S1, k1].includes(n.params?.type || "") && (e.warn(Oe.warnings.rpc.walletWatchAssetNFTExperimental),
        t.walletWatchAssetNFTExperimental = !0) : (e.warn(Oe.warnings.rpc.ethGetEncryptionPublicKeyDeprecation),
        t.ethGetEncryptionPublicKeyDeprecation = !0) : (e.warn(Oe.warnings.rpc.ethDecryptDeprecation),
        t.ethDecryptDeprecation = !0),
        i()
    }
}
var df = 4294967295
  , bu = Math.floor(Math.random() * df);
function A1() {
    return (e, t, n, r) => {
        let i = e.id
          , o = bu = (bu + 1) % df;
        e.id = o,
        t.id = o,
        n(s => {
            e.id = i,
            t.id = i,
            s()
        }
        )
    }
}
var pc = (e, t, n) => {
    if (!t.has(e))
        throw TypeError("Cannot " + n)
}
  , _n = (e, t, n) => (pc(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , kt = (e, t, n) => {
    if (t.has(e))
        throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n)
}
  , Gi = (e, t, n, r) => (pc(e, t, "write to private field"),
t.set(e, n),
n)
  , Ye = (e, t, n) => (pc(e, t, "access private method"),
n)
  , vn = {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
}
  , wu = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    }
};
function Eu(e) {
    return !!e && typeof e == "object" && !Array.isArray(e)
}
var Po = (e, t) => Object.hasOwnProperty.call(e, t)
  , Ta = class extends TypeError {
    constructor(t, n) {
        let r, l = t, {message: i, explanation: o} = l, s = Hc(l, ["message", "explanation"]), {path: a} = t, c = a.length === 0 ? i : `At path: ${a.join(".")} -- ${i}`;
        super(o ?? c),
        o != null && (this.cause = c),
        Object.assign(this, s),
        this.name = this.constructor.name,
        this.failures = () => r ?? (r = [t, ...n()])
    }
}
;
function en(e) {
    return typeof e == "object" && e != null
}
function Kt(e) {
    return typeof e == "symbol" ? e.toString() : typeof e == "string" ? JSON.stringify(e) : `${e}`
}
function M1(e, t, n, r) {
    if (e === !0)
        return;
    e === !1 ? e = {} : typeof e == "string" && (e = {
        message: e
    });
    let {path: i, branch: o} = t
      , {type: s} = n
      , {refinement: a, message: c=`Expected a value of type \`${s}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${Kt(r)}\``} = e;
    return it(xe({
        value: r,
        type: s,
        refinement: a,
        key: i[i.length - 1],
        path: i,
        branch: o
    }, e), {
        message: c
    })
}
function *_u(e, t, n, r) {
    (function(i) {
        return en(i) && typeof i[Symbol.iterator] == "function"
    }
    )(e) || (e = [e]);
    for (let i of e) {
        let o = M1(i, t, n, r);
        o && (yield o)
    }
}
function *mc(e, t, n={}) {
    let {path: r=[], branch: i=[e], coerce: o=!1, mask: s=!1} = n
      , a = {
        path: r,
        branch: i
    };
    if (o && (e = t.coercer(e, a),
    s && t.type !== "type" && en(t.schema) && en(e) && !Array.isArray(e)))
        for (let l in e)
            t.schema[l] === void 0 && delete e[l];
    let c = "valid";
    for (let l of t.validator(e, a))
        l.explanation = n.message,
        c = "not_valid",
        yield[l, void 0];
    for (let[l,u,d] of t.entries(e, a)) {
        let h = mc(u, d, {
            path: l === void 0 ? r : [...r, l],
            branch: l === void 0 ? i : [...i, u],
            coerce: o,
            mask: s,
            message: n.message
        });
        for (let f of h)
            f[0] ? (c = f[0].refinement != null ? "not_refined" : "not_valid",
            yield[f[0], void 0]) : o && (u = f[1],
            l === void 0 ? e = u : e instanceof Map ? e.set(l, u) : e instanceof Set ? e.add(u) : en(e) && (u !== void 0 || l in e) && (e[l] = u))
    }
    if (c !== "not_valid")
        for (let l of t.refiner(e, a))
            l.explanation = n.message,
            c = "not_refined",
            yield[l, void 0];
    c === "valid" && (yield[void 0, e])
}
var dt = class {
    constructor(t) {
        let {type: n, schema: r, validator: i, refiner: o, coercer: s=c => c, entries: a=function*() {}
        } = t;
        this.type = n,
        this.schema = r,
        this.entries = a,
        this.coercer = s,
        this.validator = i ? (c, l) => _u(i(c, l), l, this, c) : () => [],
        this.refiner = o ? (c, l) => _u(o(c, l), l, this, c) : () => []
    }
    assert(t, n) {
        return hf(t, this, n)
    }
    create(t, n) {
        return ff(t, this, n)
    }
    is(t) {
        return Cr(t, this)
    }
    mask(t, n) {
        return function(r, i, o) {
            let s = ci(r, i, {
                coerce: !0,
                mask: !0,
                message: o
            });
            if (s[0])
                throw s[0];
            return s[1]
        }(t, this, n)
    }
    validate(t, n={}) {
        return ci(t, this, n)
    }
}
;
function hf(e, t, n) {
    let r = ci(e, t, {
        message: n
    });
    if (r[0])
        throw r[0]
}
function ff(e, t, n) {
    let r = ci(e, t, {
        coerce: !0,
        message: n
    });
    if (r[0])
        throw r[0];
    return r[1]
}
function Cr(e, t) {
    return !ci(e, t)[0]
}
function ci(e, t, n={}) {
    let r = mc(e, t, n)
      , i = function(o) {
        let {done: s, value: a} = o.next();
        return s ? void 0 : a
    }(r);
    return i[0] ? [new Ta(i[0],function*() {
        for (let s of r)
            s[0] && (yield s[0])
    }
    ), void 0] : [void 0, i[1]]
}
function Mn(e, t) {
    return new dt({
        type: e,
        schema: null,
        validator: t
    })
}
function Cu(e) {
    let t;
    return new dt({
        type: "lazy",
        schema: null,
        *entries(n, r) {
            t ?? (t = e()),
            yield*zc(t.entries(n, r))
        },
        validator: (n, r) => (t ?? (t = e()),
        t.validator(n, r)),
        coercer: (n, r) => (t ?? (t = e()),
        t.coercer(n, r)),
        refiner: (n, r) => (t ?? (t = e()),
        t.refiner(n, r))
    })
}
function pf(e) {
    return new dt({
        type: "array",
        schema: e,
        *entries(t) {
            if (e && Array.isArray(t))
                for (let[n,r] of t.entries())
                    yield[n, r, e]
        },
        coercer: t => Array.isArray(t) ? t.slice() : t,
        validator: t => Array.isArray(t) || `Expected an array value, but received: ${Kt(t)}`
    })
}
function mf(e) {
    let t = Kt(e)
      , n = typeof e;
    return new dt({
        type: "literal",
        schema: n === "string" || n === "number" || n === "boolean" ? e : null,
        validator: r => r === e || `Expected the literal \`${t}\`, but received: ${Kt(r)}`
    })
}
function gf() {
    return Mn("number", e => typeof e == "number" && !isNaN(e) || `Expected a number, but received: ${Kt(e)}`)
}
function yf(e) {
    let t = e ? Object.keys(e) : []
      , n = Mn("never", () => !1);
    return new dt({
        type: "object",
        schema: e || null,
        *entries(r) {
            if (e && en(r)) {
                let i = new Set(Object.keys(r));
                for (let o of t)
                    i.delete(o),
                    yield[o, r[o], e[o]];
                for (let o of i)
                    yield[o, r[o], n]
            }
        },
        validator: r => en(r) || `Expected an object, but received: ${Kt(r)}`,
        coercer: r => en(r) ? xe({}, r) : r
    })
}
function Su(e) {
    return new dt(it(xe({}, e), {
        validator: (t, n) => t === void 0 || e.validator(t, n),
        refiner: (t, n) => t === void 0 || e.refiner(t, n)
    }))
}
function vf(e, t) {
    return new dt({
        type: "record",
        schema: null,
        *entries(n) {
            if (en(n))
                for (let r in n) {
                    let i = n[r];
                    yield[r, r, e],
                    yield[r, i, t]
                }
        },
        validator: n => en(n) || `Expected an object, but received: ${Kt(n)}`
    })
}
function Tn() {
    return Mn("string", e => typeof e == "string" || `Expected a string, but received: ${Kt(e)}`)
}
function ts(e) {
    let t = e.map(n => n.type).join(" | ");
    return new dt({
        type: "union",
        schema: null,
        coercer(n) {
            for (let r of e) {
                let[i,o] = r.validate(n, {
                    coerce: !0
                });
                if (!i)
                    return o
            }
            return n
        },
        validator(n, r) {
            let i = [];
            for (let o of e) {
                let[...s] = mc(n, o, r)
                  , [a] = s;
                if (!a[0])
                    return [];
                for (let[c] of s)
                    c && i.push(c)
            }
            return [`Expected the value to satisfy a union of \`${t}\`, but received: ${Kt(n)}`, ...i]
        }
    })
}
function T1(e) {
    return function(t) {
        return function(n) {
            return typeof n == "object" && n !== null && "message"in n
        }(t) && typeof t.message == "string" ? t.message : t == null ? "" : String(t)
    }(e).replace(/\.$/u, "")
}
function R1(e, t) {
    return n = e,
    typeof n?.prototype?.constructor?.name == "string" ? new e({
        message: t
    }) : e({
        message: t
    });
    var n
}
var O1 = class extends Error {
    constructor(e) {
        super(e.message),
        this.code = "ERR_ASSERTION"
    }
}
;
function bf() {
    throw new Error("setTimeout has not been defined")
}
function wf() {
    throw new Error("clearTimeout has not been defined")
}
var hn = bf
  , fn = wf;
function Ef(e) {
    if (hn === setTimeout)
        return setTimeout(e, 0);
    if ((hn === bf || !hn) && setTimeout)
        return hn = setTimeout,
        setTimeout(e, 0);
    try {
        return hn(e, 0)
    } catch {
        try {
            return hn.call(null, e, 0)
        } catch {
            return hn.call(this, e, 0)
        }
    }
}
typeof Xe.setTimeout == "function" && (hn = setTimeout),
typeof Xe.clearTimeout == "function" && (fn = clearTimeout);
var Dn, Qt = [], gr = !1, io = -1;
function L1() {
    gr && Dn && (gr = !1,
    Dn.length ? Qt = Dn.concat(Qt) : io = -1,
    Qt.length && _f())
}
function _f() {
    if (!gr) {
        var e = Ef(L1);
        gr = !0;
        for (var t = Qt.length; t; ) {
            for (Dn = Qt,
            Qt = []; ++io < t; )
                Dn && Dn[io].run();
            io = -1,
            t = Qt.length
        }
        Dn = null,
        gr = !1,
        function(n) {
            if (fn === clearTimeout)
                return clearTimeout(n);
            if ((fn === wf || !fn) && clearTimeout)
                return fn = clearTimeout,
                clearTimeout(n);
            try {
                return fn(n)
            } catch {
                try {
                    return fn.call(null, n)
                } catch {
                    return fn.call(this, n)
                }
            }
        }(e)
    }
}
function Cf(e, t) {
    this.fun = e,
    this.array = t
}
Cf.prototype.run = function() {
    this.fun.apply(null, this.array)
}
;
function Fn() {}
var P1 = Fn
  , I1 = Fn
  , N1 = Fn
  , B1 = Fn
  , D1 = Fn
  , $1 = Fn
  , j1 = Fn
  , or = Xe.performance || {}
  , K1 = or.now || or.mozNow || or.msNow || or.oNow || or.webkitNow || function() {
    return new Date().getTime()
}
  , U1 = new Date
  , _e = {
    nextTick: function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        Qt.push(new Cf(e,t)),
        Qt.length !== 1 || gr || Ef(_f)
    },
    title: "browser",
    browser: !0,
    env: {},
    argv: [],
    version: "",
    versions: {},
    on: P1,
    addListener: I1,
    once: N1,
    off: B1,
    removeListener: D1,
    removeAllListeners: $1,
    emit: j1,
    binding: function(e) {
        throw new Error("process.binding is not supported")
    },
    cwd: function() {
        return "/"
    },
    chdir: function(e) {
        throw new Error("process.chdir is not supported")
    },
    umask: function() {
        return 0
    },
    hrtime: function(e) {
        var t = .001 * K1.call(or)
          , n = Math.floor(t)
          , r = Math.floor(t % 1 * 1e9);
        return e && (n -= e[0],
        (r -= e[1]) < 0 && (n--,
        r += 1e9)),
        [n, r]
    },
    platform: "browser",
    release: {},
    config: {},
    uptime: function() {
        return (new Date - U1) / 1e3
    }
}
  , li = e => yf(e);
function ku({path: e, branch: t}) {
    let n = e[e.length - 1];
    return Po(t[t.length - 2], n)
}
function Io(e) {
    return new dt(it(xe({}, e), {
        type: `optional ${e.type}`,
        validator: (t, n) => !ku(n) || e.validator(t, n),
        refiner: (t, n) => !ku(n) || e.refiner(t, n)
    }))
}
var Yi, xu, Au, No = ts([mf(null), Mn("boolean", e => typeof e == "boolean"), Mn("finite number", e => Cr(e, gf()) && Number.isFinite(e)), Tn(), pf(Cu( () => No)), vf(Tn(), Cu( () => No))]), ui = (Yi = No,
xu = Mn("any", () => !0),
Au = e => (function(t, n, r="Assertion failed", i=O1) {
    try {
        hf(t, n)
    } catch (o) {
        throw R1(i, `${r}: ${T1(o)}.`)
    }
}(e, No),
JSON.parse(JSON.stringify(e, (t, n) => {
    if (t !== "__proto__" && t !== "constructor")
        return n
}
))),
new dt(it(xe({}, Yi), {
    coercer: (e, t) => Cr(e, xu) ? Yi.coercer(Au(e, t), t) : Yi.coercer(e, t)
})));
function Ra(e) {
    try {
        return function(t) {
            ff(t, ui)
        }(e),
        !0
    } catch {
        return !1
    }
}
var Gr = mf("2.0")
  , oo = function(e) {
    return new dt(it(xe({}, e), {
        validator: (t, n) => t === null || e.validator(t, n),
        refiner: (t, n) => t === null || e.refiner(t, n)
    }))
}(ts([gf(), Tn()]))
  , Oa = li({
    code: Mn("integer", e => typeof e == "number" && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${Kt(e)}`),
    message: Tn(),
    data: Io(ui),
    stack: Io(Tn())
})
  , Sf = ts([vf(Tn(), ui), pf(ui)])
  , H1 = li({
    id: oo,
    jsonrpc: Gr,
    method: Tn(),
    params: Io(Sf)
})
  , F1 = li({
    jsonrpc: Gr,
    method: Tn(),
    params: Io(Sf)
});
function Mu(e) {
    return Cr(e, H1)
}
function Tu(e) {
    return Cr(e, Oa)
}
yf({
    id: oo,
    jsonrpc: Gr,
    result: Su(Mn("unknown", () => !0)),
    error: Su(Oa)
}),
ts([li({
    id: oo,
    jsonrpc: Gr,
    result: ui
}), li({
    id: oo,
    jsonrpc: Gr,
    error: Oa
})]);
var Ru = vn.internal
  , z1 = "Unspecified error message. This is a bug, please report it."
  , q1 = {
    code: Ru,
    message: kf(Ru)
}
  , V1 = "Unspecified server error.";
function kf(e, t=z1) {
    if (function(n) {
        return Number.isInteger(n)
    }(e)) {
        let n = e.toString();
        if (Po(wu, n))
            return wu[n].message;
        if (function(r) {
            return r >= -32099 && r <= -32e3
        }(e))
            return V1
    }
    return t
}
function Ou(e, {fallbackError: t=q1, shouldIncludeStack: n=!0}={}) {
    if (!Tu(t))
        throw new Error("Must provide fallback error with integer number code and string message.");
    let r = function(i, o) {
        if (i && typeof i == "object" && "serialize"in i && typeof i.serialize == "function")
            return i.serialize();
        if (Tu(i))
            return i;
        let s = xf(i);
        return it(xe({}, o), {
            data: {
                cause: s
            }
        })
    }(e, t);
    return n || delete r.stack,
    r
}
function xf(e) {
    return Array.isArray(e) ? e.map(t => Ra(t) ? t : Eu(t) ? Lu(t) : null) : Eu(e) ? Lu(e) : Ra(e) ? e : null
}
function Lu(e) {
    return Object.getOwnPropertyNames(e).reduce( (t, n) => {
        let r = e[n];
        return Ra(r) && (t[n] = r),
        t
    }
    , {})
}
var Af = Fr;
Fr.default = Fr,
Fr.stable = Pu,
Fr.stableStringify = Pu;
var Bo = "[...]"
  , Mf = "[Circular]"
  , Hn = []
  , $n = [];
function Tf() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    }
}
function Fr(e, t, n, r) {
    var i;
    r === void 0 && (r = Tf()),
    La(e, "", 0, [], void 0, 0, r);
    try {
        i = $n.length === 0 ? JSON.stringify(e, t, n) : JSON.stringify(e, Rf(t), n)
    } catch {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
    } finally {
        for (; Hn.length !== 0; ) {
            var o = Hn.pop();
            o.length === 4 ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2]
        }
    }
    return i
}
function yr(e, t, n, r) {
    var i = Object.getOwnPropertyDescriptor(r, n);
    i.get !== void 0 ? i.configurable ? (Object.defineProperty(r, n, {
        value: e
    }),
    Hn.push([r, n, t, i])) : $n.push([t, n, e]) : (r[n] = e,
    Hn.push([r, n, t]))
}
function La(e, t, n, r, i, o, s) {
    var a;
    if (o += 1,
    typeof e == "object" && e !== null) {
        for (a = 0; a < r.length; a++)
            if (r[a] === e)
                return void yr(Mf, e, t, i);
        if (s.depthLimit !== void 0 && o > s.depthLimit || s.edgesLimit !== void 0 && n + 1 > s.edgesLimit)
            return void yr(Bo, e, t, i);
        if (r.push(e),
        Array.isArray(e))
            for (a = 0; a < e.length; a++)
                La(e[a], a, a, r, e, o, s);
        else {
            var c = Object.keys(e);
            for (a = 0; a < c.length; a++) {
                var l = c[a];
                La(e[l], l, a, r, e, o, s)
            }
        }
        r.pop()
    }
}
function W1(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
}
function Pu(e, t, n, r) {
    r === void 0 && (r = Tf());
    var i, o = Pa(e, "", 0, [], void 0, 0, r) || e;
    try {
        i = $n.length === 0 ? JSON.stringify(o, t, n) : JSON.stringify(o, Rf(t), n)
    } catch {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
    } finally {
        for (; Hn.length !== 0; ) {
            var s = Hn.pop();
            s.length === 4 ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2]
        }
    }
    return i
}
function Pa(e, t, n, r, i, o, s) {
    var a;
    if (o += 1,
    typeof e == "object" && e !== null) {
        for (a = 0; a < r.length; a++)
            if (r[a] === e)
                return void yr(Mf, e, t, i);
        try {
            if (typeof e.toJSON == "function")
                return
        } catch {
            return
        }
        if (s.depthLimit !== void 0 && o > s.depthLimit || s.edgesLimit !== void 0 && n + 1 > s.edgesLimit)
            return void yr(Bo, e, t, i);
        if (r.push(e),
        Array.isArray(e))
            for (a = 0; a < e.length; a++)
                Pa(e[a], a, a, r, e, o, s);
        else {
            var c = {}
              , l = Object.keys(e).sort(W1);
            for (a = 0; a < l.length; a++) {
                var u = l[a];
                Pa(e[u], u, a, r, e, o, s),
                c[u] = e[u]
            }
            if (i === void 0)
                return c;
            Hn.push([i, t, e]),
            i[t] = c
        }
        r.pop()
    }
}
function Rf(e) {
    return e = e !== void 0 ? e : function(t, n) {
        return n
    }
    ,
    function(t, n) {
        if ($n.length > 0)
            for (var r = 0; r < $n.length; r++) {
                var i = $n[r];
                if (i[1] === t && i[0] === n) {
                    n = i[2],
                    $n.splice(r, 1);
                    break
                }
            }
        return e.call(this, t, n)
    }
}
var G1 = Qo(Af)
  , Wt = class extends Error {
    constructor(e, t, n) {
        if (!Number.isInteger(e))
            throw new Error('"code" must be an integer.');
        if (!t || typeof t != "string")
            throw new Error('"message" must be a non-empty string.');
        super(t),
        this.code = e,
        n !== void 0 && (this.data = n)
    }
    serialize() {
        let e = {
            code: this.code,
            message: this.message
        };
        return this.data !== void 0 && (e.data = this.data,
        function(t) {
            if (typeof t != "object" || t === null)
                return !1;
            try {
                let n = t;
                for (; Object.getPrototypeOf(n) !== null; )
                    n = Object.getPrototypeOf(n);
                return Object.getPrototypeOf(t) === n
            } catch {
                return !1
            }
        }(this.data) && (e.data.cause = xf(this.data.cause))),
        this.stack && (e.stack = this.stack),
        e
    }
    toString() {
        return G1(this.serialize(), Y1, 2)
    }
}
;
function Y1(e, t) {
    if (t !== "[Circular]")
        return t
}
var Yr = e => Z1(vn.invalidRequest, e);
function Z1(e, t) {
    let[n,r] = function(i) {
        if (i) {
            if (typeof i == "string")
                return [i];
            if (typeof i == "object" && !Array.isArray(i)) {
                let {message: o, data: s} = i;
                if (o && typeof o != "string")
                    throw new Error("Must specify string message.");
                return [o ?? void 0, s]
            }
        }
        return []
    }(t);
    return new Wt(e,n ?? kf(e),r)
}
var Of = {};
function pn() {}
function Ce() {
    Ce.init.call(this)
}
function Lf(e) {
    return e._maxListeners === void 0 ? Ce.defaultMaxListeners : e._maxListeners
}
function Iu(e, t, n, r) {
    var i, o, s;
    if (typeof n != "function")
        throw new TypeError('"listener" argument must be a function');
    if ((o = e._events) ? (o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n),
    o = e._events),
    s = o[t]) : (o = e._events = new pn,
    e._eventsCount = 0),
    s) {
        if (typeof s == "function" ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n),
        !s.warned && (i = Lf(e)) && i > 0 && s.length > i) {
            s.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning",
            a.emitter = e,
            a.type = t,
            a.count = s.length,
            function(c) {
                typeof console.warn == "function" ? console.warn(c) : console.log(c)
            }(a)
        }
    } else
        s = o[t] = n,
        ++e._eventsCount;
    return e
}
function Nu(e, t, n) {
    var r = !1;
    function i() {
        e.removeListener(t, i),
        r || (r = !0,
        n.apply(e, arguments))
    }
    return i.listener = n,
    i
}
function Bu(e) {
    var t = this._events;
    if (t) {
        var n = t[e];
        if (typeof n == "function")
            return 1;
        if (n)
            return n.length
    }
    return 0
}
function Kr(e, t) {
    for (var n = new Array(t); t--; )
        n[t] = e[t];
    return n
}
pn.prototype = Object.create(null),
Ce.EventEmitter = Ce,
Ce.usingDomains = !1,
Ce.prototype.domain = void 0,
Ce.prototype._events = void 0,
Ce.prototype._maxListeners = void 0,
Ce.defaultMaxListeners = 10,
Ce.init = function() {
    this.domain = null,
    Ce.usingDomains && (void 0).active,
    this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new pn,
    this._eventsCount = 0),
    this._maxListeners = this._maxListeners || void 0
}
,
Ce.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number');
    return this._maxListeners = e,
    this
}
,
Ce.prototype.getMaxListeners = function() {
    return Lf(this)
}
,
Ce.prototype.emit = function(e) {
    var t, n, r, i, o, s, a, c = e === "error";
    if (s = this._events)
        c = c && s.error == null;
    else if (!c)
        return !1;
    if (a = this.domain,
    c) {
        if (t = arguments[1],
        !a) {
            if (t instanceof Error)
                throw t;
            var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
            throw l.context = t,
            l
        }
        return t || (t = new Error('Uncaught, unspecified "error" event')),
        t.domainEmitter = this,
        t.domain = a,
        t.domainThrown = !1,
        a.emit("error", t),
        !1
    }
    if (!(n = s[e]))
        return !1;
    var u = typeof n == "function";
    switch (r = arguments.length) {
    case 1:
        (function(d, h, f) {
            if (h)
                d.call(f);
            else
                for (var g = d.length, m = Kr(d, g), v = 0; v < g; ++v)
                    m[v].call(f)
        }
        )(n, u, this);
        break;
    case 2:
        (function(d, h, f, g) {
            if (h)
                d.call(f, g);
            else
                for (var m = d.length, v = Kr(d, m), p = 0; p < m; ++p)
                    v[p].call(f, g)
        }
        )(n, u, this, arguments[1]);
        break;
    case 3:
        (function(d, h, f, g, m) {
            if (h)
                d.call(f, g, m);
            else
                for (var v = d.length, p = Kr(d, v), S = 0; S < v; ++S)
                    p[S].call(f, g, m)
        }
        )(n, u, this, arguments[1], arguments[2]);
        break;
    case 4:
        (function(d, h, f, g, m, v) {
            if (h)
                d.call(f, g, m, v);
            else
                for (var p = d.length, S = Kr(d, p), E = 0; E < p; ++E)
                    S[E].call(f, g, m, v)
        }
        )(n, u, this, arguments[1], arguments[2], arguments[3]);
        break;
    default:
        for (i = new Array(r - 1),
        o = 1; o < r; o++)
            i[o - 1] = arguments[o];
        (function(d, h, f, g) {
            if (h)
                d.apply(f, g);
            else
                for (var m = d.length, v = Kr(d, m), p = 0; p < m; ++p)
                    v[p].apply(f, g)
        }
        )(n, u, this, i)
    }
    return !0
}
,
Ce.prototype.addListener = function(e, t) {
    return Iu(this, e, t, !1)
}
,
Ce.prototype.on = Ce.prototype.addListener,
Ce.prototype.prependListener = function(e, t) {
    return Iu(this, e, t, !0)
}
,
Ce.prototype.once = function(e, t) {
    if (typeof t != "function")
        throw new TypeError('"listener" argument must be a function');
    return this.on(e, Nu(this, e, t)),
    this
}
,
Ce.prototype.prependOnceListener = function(e, t) {
    if (typeof t != "function")
        throw new TypeError('"listener" argument must be a function');
    return this.prependListener(e, Nu(this, e, t)),
    this
}
,
Ce.prototype.removeListener = function(e, t) {
    var n, r, i, o, s;
    if (typeof t != "function")
        throw new TypeError('"listener" argument must be a function');
    if (!(r = this._events))
        return this;
    if (!(n = r[e]))
        return this;
    if (n === t || n.listener && n.listener === t)
        --this._eventsCount == 0 ? this._events = new pn : (delete r[e],
        r.removeListener && this.emit("removeListener", e, n.listener || t));
    else if (typeof n != "function") {
        for (i = -1,
        o = n.length; o-- > 0; )
            if (n[o] === t || n[o].listener && n[o].listener === t) {
                s = n[o].listener,
                i = o;
                break
            }
        if (i < 0)
            return this;
        if (n.length === 1) {
            if (n[0] = void 0,
            --this._eventsCount == 0)
                return this._events = new pn,
                this;
            delete r[e]
        } else
            (function(a, c) {
                for (var l = c, u = l + 1, d = a.length; u < d; l += 1,
                u += 1)
                    a[l] = a[u];
                a.pop()
            }
            )(n, i);
        r.removeListener && this.emit("removeListener", e, s || t)
    }
    return this
}
,
Ce.prototype.off = function(e, t) {
    return this.removeListener(e, t)
}
,
Ce.prototype.removeAllListeners = function(e) {
    var t, n;
    if (!(n = this._events))
        return this;
    if (!n.removeListener)
        return arguments.length === 0 ? (this._events = new pn,
        this._eventsCount = 0) : n[e] && (--this._eventsCount == 0 ? this._events = new pn : delete n[e]),
        this;
    if (arguments.length === 0) {
        for (var r, i = Object.keys(n), o = 0; o < i.length; ++o)
            (r = i[o]) !== "removeListener" && this.removeAllListeners(r);
        return this.removeAllListeners("removeListener"),
        this._events = new pn,
        this._eventsCount = 0,
        this
    }
    if (typeof (t = n[e]) == "function")
        this.removeListener(e, t);
    else if (t)
        do
            this.removeListener(e, t[t.length - 1]);
        while (t[0]);
    return this
}
,
Ce.prototype.listeners = function(e) {
    var t, n, r = this._events;
    return n = r && (t = r[e]) ? typeof t == "function" ? [t.listener || t] : function(i) {
        for (var o = new Array(i.length), s = 0; s < o.length; ++s)
            o[s] = i[s].listener || i[s];
        return o
    }(t) : [],
    n
}
,
Ce.listenerCount = function(e, t) {
    return typeof e.listenerCount == "function" ? e.listenerCount(t) : Bu.call(e, t)
}
,
Ce.prototype.listenerCount = Bu,
Ce.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
}
;
var gc = yi(Object.freeze({
    __proto__: null,
    EventEmitter: Ce,
    default: Ce
}));
Object.defineProperty(Of, "__esModule", {
    value: !0
});
var J1 = gc;
function Du(e, t, n) {
    try {
        Reflect.apply(e, t, n)
    } catch (r) {
        setTimeout( () => {
            throw r
        }
        )
    }
}
var X1 = class extends J1.EventEmitter {
    emit(e, ...t) {
        let n = e === "error"
          , r = this._events;
        if (r !== void 0)
            n = n && r.error === void 0;
        else if (!n)
            return !1;
        if (n) {
            let o;
            if (t.length > 0 && ([o] = t),
            o instanceof Error)
                throw o;
            let s = new Error("Unhandled error." + (o ? ` (${o.message})` : ""));
            throw s.context = o,
            s
        }
        let i = r[e];
        if (i === void 0)
            return !1;
        if (typeof i == "function")
            Du(i, this, t);
        else {
            let o = i.length
              , s = function(a) {
                let c = a.length
                  , l = new Array(c);
                for (let u = 0; u < c; u += 1)
                    l[u] = a[u];
                return l
            }(i);
            for (let a = 0; a < o; a += 1)
                Du(s[a], this, t)
        }
        return !0
    }
}
, Do, bn, hr, zr, so, ao, Ia, co, Na, zs, $u, lo, Ba, qs, ju, Zr, $o, Vs, Ku, Pf = Of.default = X1, St = class uo extends Pf {
    constructor({notificationHandler: t}={}) {
        super(),
        kt(this, zr),
        kt(this, ao),
        kt(this, co),
        kt(this, Do, !1),
        kt(this, bn, void 0),
        kt(this, hr, void 0),
        Gi(this, bn, []),
        Gi(this, hr, t)
    }
    destroy() {
        _n(this, bn).forEach(t => {
            "destroy"in t && typeof t.destroy == "function" && t.destroy()
        }
        ),
        Gi(this, bn, []),
        Gi(this, Do, !0)
    }
    push(t) {
        Ye(this, zr, so).call(this),
        _n(this, bn).push(t)
    }
    handle(t, n) {
        if (Ye(this, zr, so).call(this),
        n && typeof n != "function")
            throw new Error('"callback" must be a function if provided.');
        return Array.isArray(t) ? n ? Ye(this, ao, Ia).call(this, t, n) : Ye(this, ao, Ia).call(this, t) : n ? Ye(this, co, Na).call(this, t, n) : this._promiseHandle(t)
    }
    asMiddleware() {
        return Ye(this, zr, so).call(this),
        (t, n, r, i) => we(this, null, function*() {
            var o, s;
            try {
                let[a,c,l] = yield Ye(o = uo, lo, Ba).call(o, t, n, _n(this, bn));
                return c ? (yield Ye(s = uo, Zr, $o).call(s, l),
                i(a)) : r(u => we(this, null, function*() {
                    var d;
                    try {
                        yield Ye(d = uo, Zr, $o).call(d, l)
                    } catch (h) {
                        return u(h)
                    }
                    return u()
                }))
            } catch (a) {
                return i(a)
            }
        })
    }
    _promiseHandle(t) {
        return we(this, null, function*() {
            return new Promise( (n, r) => {
                Ye(this, co, Na).call(this, t, (i, o) => {
                    i && o === void 0 ? r(i) : n(o)
                }
                ).catch(r)
            }
            )
        })
    }
}
;
Do = new WeakMap,
bn = new WeakMap,
hr = new WeakMap,
zr = new WeakSet,
so = function() {
    if (_n(this, Do))
        throw new Error("This engine is destroyed and can no longer be used.")
}
,
ao = new WeakSet,
Ia = function(e, t) {
    return we(this, null, function*() {
        try {
            if (e.length === 0) {
                let r = [{
                    id: null,
                    jsonrpc: "2.0",
                    error: new Wt(vn.invalidRequest,"Request batch must contain plain objects. Received an empty array")
                }];
                return t ? t(null, r) : r
            }
            let n = (yield Promise.all(e.map(this._promiseHandle.bind(this)))).filter(r => r !== void 0);
            return t ? t(null, n) : n
        } catch (n) {
            if (t)
                return t(n);
            throw n
        }
    })
}
,
co = new WeakSet,
Na = function(e, t) {
    return we(this, null, function*() {
        var n;
        if (!e || Array.isArray(e) || typeof e != "object") {
            let s = new Wt(vn.invalidRequest,"Requests must be plain objects. Received: " + typeof e,{
                request: e
            });
            return t(s, {
                id: null,
                jsonrpc: "2.0",
                error: s
            })
        }
        if (typeof e.method != "string") {
            let s = new Wt(vn.invalidRequest,"Must specify a string method. Received: " + typeof e.method,{
                request: e
            });
            return _n(this, hr) && !Mu(e) ? t(null) : t(s, {
                id: e.id ?? null,
                jsonrpc: "2.0",
                error: s
            })
        }
        if (_n(this, hr) && Cr(e, F1) && !Mu(e)) {
            try {
                yield _n(this, hr).call(this, e)
            } catch (s) {
                return t(s)
            }
            return t(null)
        }
        let r = null
          , i = xe({}, e)
          , o = {
            id: i.id,
            jsonrpc: i.jsonrpc
        };
        try {
            yield Ye(n = St, zs, $u).call(n, i, o, _n(this, bn))
        } catch (s) {
            r = s
        }
        return r && (delete o.result,
        o.error || (o.error = Ou(r))),
        t(r, o)
    })
}
,
zs = new WeakSet,
$u = function(e, t, n) {
    return we(this, null, function*() {
        var r, i, o;
        let[s,a,c] = yield Ye(r = St, lo, Ba).call(r, e, t, n);
        if (Ye(i = St, Vs, Ku).call(i, e, t, a),
        yield Ye(o = St, Zr, $o).call(o, c),
        s)
            throw s
    })
}
,
lo = new WeakSet,
Ba = function(e, t, n) {
    return we(this, null, function*() {
        var r;
        let i = []
          , o = null
          , s = !1;
        for (let a of n)
            if ([o,s] = yield Ye(r = St, qs, ju).call(r, e, t, a, i),
            s)
                break;
        return [o, s, i.reverse()]
    })
}
,
qs = new WeakSet,
ju = function(e, t, n, r) {
    return we(this, null, function*() {
        return new Promise(i => {
            let o = a => {
                let c = a || t.error;
                c && (t.error = Ou(c)),
                i([c, !0])
            }
              , s = a => {
                t.error ? o(t.error) : (a && (typeof a != "function" && o(new Wt(vn.internal,`JsonRpcEngine: "next" return handlers must be functions. Received "${typeof a}" for request:
${Ws(e)}`,{
                    request: e
                })),
                r.push(a)),
                i([null, !1]))
            }
            ;
            try {
                n(e, t, s, o)
            } catch (a) {
                o(a)
            }
        }
        )
    })
}
,
Zr = new WeakSet,
$o = function(e) {
    return we(this, null, function*() {
        for (let t of e)
            yield new Promise( (n, r) => {
                t(i => i ? r(i) : n())
            }
            )
    })
}
,
Vs = new WeakSet,
Ku = function(e, t, n) {
    if (!Po(t, "result") && !Po(t, "error"))
        throw new Wt(vn.internal,`JsonRpcEngine: Response has no error or result for request:
${Ws(e)}`,{
            request: e
        });
    if (!n)
        throw new Wt(vn.internal,`JsonRpcEngine: Nothing ended request:
${Ws(e)}`,{
            request: e
        })
}
,
kt(St, zs),
kt(St, lo),
kt(St, qs),
kt(St, Zr),
kt(St, Vs);
var Q1 = St;
function Ws(e) {
    return JSON.stringify(e, null, 2)
}
var If = Object.freeze(["eth_subscription"])
  , em = (e=console) => [A1(), tm(e), x1(e)];
function tm(e) {
    return (t, n, r) => {
        typeof t.method == "string" && t.method || (n.error = Yr({
            message: "The request 'method' must be a non-empty string.",
            data: t
        })),
        r(i => {
            let {error: o} = n;
            return o && e.error(`MetaMask - RPC Error: ${o.message}`, o),
            i()
        }
        )
    }
}
var ho = (e, t, n=!0) => (r, i) => {
    r || i.error ? t(r || i.error) : !n || Array.isArray(i) ? e(i) : e(i.result)
}
  , Nf = e => !!e && typeof e == "string" && e.startsWith("0x")
  , Bf = () => {}
;
function Uu(e, t) {
    return we(this, null, function*() {
        try {
            let n = yield function() {
                return we(this, null, function*() {
                    return {
                        name: nm(window),
                        icon: yield rm(window)
                    }
                })
            }();
            e.handle({
                jsonrpc: "2.0",
                id: 1,
                method: "metamask_sendDomainMetadata",
                params: n
            }, Bf)
        } catch (n) {
            t.error({
                message: Oe.errors.sendSiteMetadata(),
                originalError: n
            })
        }
    })
}
function nm(e) {
    let {document: t} = e
      , n = t.querySelector('head > meta[property="og:site_name"]');
    if (n)
        return n.content;
    let r = t.querySelector('head > meta[name="title"]');
    return r ? r.content : t.title && t.title.length > 0 ? t.title : window.location.hostname
}
function rm(e) {
    return we(this, null, function*() {
        let {document: t} = e
          , n = t.querySelectorAll('head > link[rel~="icon"]');
        for (let r of Array.from(n))
            if (r && (yield im(r.href)))
                return r.href;
        return null
    })
}
function im(e) {
    return we(this, null, function*() {
        return new Promise( (t, n) => {
            try {
                let r = document.createElement("img");
                r.onload = () => t(!0),
                r.onerror = () => t(!1),
                r.src = e
            } catch (r) {
                n(r)
            }
        }
        )
    })
}
var Df = (e, t, n) => {
    if (!t.has(e))
        throw TypeError("Cannot " + n)
}
  , It = (e, t, n) => (Df(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , Da = (e, t, n) => {
    if (t.has(e))
        throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n)
}
  , Gt = (e, t, n, r) => (Df(e, t, "write to private field"),
t.set(e, n),
n);
function Hu(e, t, n) {
    try {
        Reflect.apply(e, t, n)
    } catch (r) {
        setTimeout( () => {
            throw r
        }
        )
    }
}
var $a = class extends Ce {
    emit(t, ...n) {
        let r = t === "error"
          , i = this._events;
        if (i !== void 0)
            r = r && i.error === void 0;
        else if (!r)
            return !1;
        if (r) {
            let s;
            if (n.length > 0 && ([s] = n),
            s instanceof Error)
                throw s;
            let a = new Error("Unhandled error." + (s ? ` (${s.message})` : ""));
            throw a.context = s,
            a
        }
        let o = i[t];
        if (o === void 0)
            return !1;
        if (typeof o == "function")
            Hu(o, this, n);
        else {
            let s = o.length
              , a = function(c) {
                let l = c.length
                  , u = new Array(l);
                for (let d = 0; d < l; d += 1)
                    u[d] = c[d];
                return u
            }(o);
            for (let c = 0; c < s; c += 1)
                Hu(a[c], this, n)
        }
        return !0
    }
}
, mn, Pn, om = function e(t, n) {
    if (t === n)
        return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
        if (t.constructor !== n.constructor)
            return !1;
        var r, i, o;
        if (Array.isArray(t)) {
            if ((r = t.length) != n.length)
                return !1;
            for (i = r; i-- != 0; )
                if (!e(t[i], n[i]))
                    return !1;
            return !0
        }
        if (t.constructor === RegExp)
            return t.source === n.source && t.flags === n.flags;
        if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === n.valueOf();
        if (t.toString !== Object.prototype.toString)
            return t.toString() === n.toString();
        if ((r = (o = Object.keys(t)).length) !== Object.keys(n).length)
            return !1;
        for (i = r; i-- != 0; )
            if (!Object.prototype.hasOwnProperty.call(n, o[i]))
                return !1;
        for (i = r; i-- != 0; ) {
            var s = o[i];
            if (!e(t[s], n[s]))
                return !1
        }
        return !0
    }
    return t != t && n != n
}, sm = Qo(om), $f = class jf extends $a {
    constructor({logger: t=console, maxEventListeners: n=100, rpcMiddleware: r=[]}={}) {
        super(),
        Da(this, mn, void 0),
        Da(this, Pn, void 0),
        this._log = t,
        this.setMaxListeners(n),
        this._state = xe({}, jf._defaultState),
        Gt(this, Pn, null),
        Gt(this, mn, null),
        this._handleAccountsChanged = this._handleAccountsChanged.bind(this),
        this._handleConnect = this._handleConnect.bind(this),
        this._handleChainChanged = this._handleChainChanged.bind(this),
        this._handleDisconnect = this._handleDisconnect.bind(this),
        this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this),
        this._rpcRequest = this._rpcRequest.bind(this),
        this.request = this.request.bind(this);
        let i = new Q1;
        r.forEach(o => i.push(o)),
        this._rpcEngine = i
    }
    get chainId() {
        return It(this, mn)
    }
    get selectedAddress() {
        return It(this, Pn)
    }
    isConnected() {
        return this._state.isConnected
    }
    request(t) {
        return we(this, null, function*() {
            if (!t || typeof t != "object" || Array.isArray(t))
                throw Yr({
                    message: Oe.errors.invalidRequestArgs(),
                    data: t
                });
            let {method: n, params: r} = t;
            if (typeof n != "string" || n.length === 0)
                throw Yr({
                    message: Oe.errors.invalidRequestMethod(),
                    data: t
                });
            if (r !== void 0 && !Array.isArray(r) && (typeof r != "object" || r === null))
                throw Yr({
                    message: Oe.errors.invalidRequestParams(),
                    data: t
                });
            let i = r == null ? {
                method: n
            } : {
                method: n,
                params: r
            };
            return new Promise( (o, s) => {
                this._rpcRequest(i, ho(o, s))
            }
            )
        })
    }
    _initializeState(t) {
        if (this._state.initialized)
            throw new Error("Provider already initialized.");
        if (t) {
            let {accounts: n, chainId: r, isUnlocked: i, networkVersion: o} = t;
            this._handleConnect(r),
            this._handleChainChanged({
                chainId: r,
                networkVersion: o
            }),
            this._handleUnlockStateChanged({
                accounts: n,
                isUnlocked: i
            }),
            this._handleAccountsChanged(n)
        }
        this._state.initialized = !0,
        this.emit("_initialized")
    }
    _rpcRequest(t, n) {
        let r = n;
        return Array.isArray(t) || (t.jsonrpc || (t.jsonrpc = "2.0"),
        t.method !== "eth_accounts" && t.method !== "eth_requestAccounts" || (r = (i, o) => {
            this._handleAccountsChanged(o.result ?? [], t.method === "eth_accounts"),
            n(i, o)
        }
        )),
        this._rpcEngine.handle(t, r)
    }
    _handleConnect(t) {
        this._state.isConnected || (this._state.isConnected = !0,
        this.emit("connect", {
            chainId: t
        }),
        this._log.debug(Oe.info.connected(t)))
    }
    _handleDisconnect(t, n) {
        if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !t) {
            let r;
            this._state.isConnected = !1,
            t ? (r = new Wt(1013,n ?? Oe.errors.disconnected()),
            this._log.debug(r)) : (r = new Wt(1011,n ?? Oe.errors.permanentlyDisconnected()),
            this._log.error(r),
            Gt(this, mn, null),
            this._state.accounts = null,
            Gt(this, Pn, null),
            this._state.isUnlocked = !1,
            this._state.isPermanentlyDisconnected = !0),
            this.emit("disconnect", r)
        }
    }
    _handleChainChanged({chainId: t}={}) {
        Nf(t) ? (this._handleConnect(t),
        t !== It(this, mn) && (Gt(this, mn, t),
        this._state.initialized && this.emit("chainChanged", It(this, mn)))) : this._log.error(Oe.errors.invalidNetworkParams(), {
            chainId: t
        })
    }
    _handleAccountsChanged(t, n=!1) {
        let r = t;
        Array.isArray(t) || (this._log.error("MetaMask: Received invalid accounts parameter. Please report this bug.", t),
        r = []);
        for (let i of t)
            if (typeof i != "string") {
                this._log.error("MetaMask: Received non-string account. Please report this bug.", t),
                r = [];
                break
            }
        if (!sm(this._state.accounts, r) && (n && this._state.accounts !== null && this._log.error("MetaMask: 'eth_accounts' unexpectedly updated accounts. Please report this bug.", r),
        this._state.accounts = r,
        It(this, Pn) !== r[0] && Gt(this, Pn, r[0] || null),
        this._state.initialized)) {
            let i = [...r];
            this.emit("accountsChanged", i)
        }
    }
    _handleUnlockStateChanged({accounts: t, isUnlocked: n}={}) {
        typeof n == "boolean" ? n !== this._state.isUnlocked && (this._state.isUnlocked = n,
        this._handleAccountsChanged(t ?? [])) : this._log.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.")
    }
}
;
mn = new WeakMap,
Pn = new WeakMap,
$f._defaultState = {
    accounts: null,
    isConnected: !1,
    isUnlocked: !1,
    initialized: !1,
    isPermanentlyDisconnected: !1
};
var Fu, zu, am = $f, ja = {
    exports: {}
};
function Kf() {
    return zu ? Fu : (zu = 1,
    Fu = gc.EventEmitter)
}
var yc, vc = yi(Rp);
yc = typeof Object.create == "function" ? function(e, t) {
    e.super_ = t,
    e.prototype = Object.create(t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })
}
: function(e, t) {
    e.super_ = t;
    var n = function() {};
    n.prototype = t.prototype,
    e.prototype = new n,
    e.prototype.constructor = e
}
;
var Uf = Object.getOwnPropertyDescriptors || function(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++)
        n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
    return n
}
  , cm = /%[sdj%]/g;
function ns(e) {
    if (!di(e)) {
        for (var t = [], n = 0; n < arguments.length; n++)
            t.push($t(arguments[n]));
        return t.join(" ")
    }
    n = 1;
    for (var r = arguments, i = r.length, o = String(e).replace(cm, function(a) {
        if (a === "%%")
            return "%";
        if (n >= i)
            return a;
        switch (a) {
        case "%s":
            return String(r[n++]);
        case "%d":
            return Number(r[n++]);
        case "%j":
            try {
                return JSON.stringify(r[n++])
            } catch {
                return "[Circular]"
            }
        default:
            return a
        }
    }), s = r[n]; n < i; s = r[++n])
        vi(s) || !zn(s) ? o += " " + s : o += " " + $t(s);
    return o
}
function bc(e, t) {
    if (Bt(Xe.process))
        return function() {
            return bc(e, t).apply(this, arguments)
        }
        ;
    if (_e.noDeprecation === !0)
        return e;
    var n = !1;
    return function() {
        if (!n) {
            if (_e.throwDeprecation)
                throw new Error(t);
            _e.traceDeprecation ? console.trace(t) : console.error(t),
            n = !0
        }
        return e.apply(this, arguments)
    }
}
var Gs, Zi = {};
function Hf(e) {
    return Bt(Gs) && (Gs = _e.env.NODE_DEBUG || ""),
    e = e.toUpperCase(),
    !Zi[e] && (new RegExp("\\b" + e + "\\b","i").test(Gs) ? Zi[e] = function() {
        var t = ns.apply(null, arguments);
        console.error("%s %d: %s", e, 0, t)
    }
    : Zi[e] = function() {}
    ),
    Zi[e]
}
function $t(e, t) {
    var n = {
        seen: [],
        stylize: um
    };
    return arguments.length >= 3 && (n.depth = arguments[2]),
    arguments.length >= 4 && (n.colors = arguments[3]),
    rs(t) ? n.showHidden = t : t && Cc(n, t),
    Bt(n.showHidden) && (n.showHidden = !1),
    Bt(n.depth) && (n.depth = 2),
    Bt(n.colors) && (n.colors = !1),
    Bt(n.customInspect) && (n.customInspect = !0),
    n.colors && (n.stylize = lm),
    jo(n, e, n.depth)
}
function lm(e, t) {
    var n = $t.styles[t];
    return n ? "\x1B[" + $t.colors[n][0] + "m" + e + "\x1B[" + $t.colors[n][1] + "m" : e
}
function um(e, t) {
    return e
}
function jo(e, t, n) {
    if (e.customInspect && t && Qr(t.inspect) && t.inspect !== $t && (!t.constructor || t.constructor.prototype !== t)) {
        var r = t.inspect(n, e);
        return di(r) || (r = jo(e, r, n)),
        r
    }
    var i = function(h, f) {
        if (Bt(f))
            return h.stylize("undefined", "undefined");
        if (di(f)) {
            var g = "'" + JSON.stringify(f).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return h.stylize(g, "string")
        }
        if (Ec(f))
            return h.stylize("" + f, "number");
        if (rs(f))
            return h.stylize("" + f, "boolean");
        if (vi(f))
            return h.stylize("null", "null")
    }(e, t);
    if (i)
        return i;
    var o = Object.keys(t)
      , s = function(h) {
        var f = {};
        return h.forEach(function(g, m) {
            f[g] = !0
        }),
        f
    }(o);
    if (e.showHidden && (o = Object.getOwnPropertyNames(t)),
    Xr(t) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))
        return Ys(t);
    if (o.length === 0) {
        if (Qr(t)) {
            var a = t.name ? ": " + t.name : "";
            return e.stylize("[Function" + a + "]", "special")
        }
        if (Jr(t))
            return e.stylize(RegExp.prototype.toString.call(t), "regexp");
        if (Ko(t))
            return e.stylize(Date.prototype.toString.call(t), "date");
        if (Xr(t))
            return Ys(t)
    }
    var c, l = "", u = !1, d = ["{", "}"];
    return wc(t) && (u = !0,
    d = ["[", "]"]),
    Qr(t) && (l = " [Function" + (t.name ? ": " + t.name : "") + "]"),
    Jr(t) && (l = " " + RegExp.prototype.toString.call(t)),
    Ko(t) && (l = " " + Date.prototype.toUTCString.call(t)),
    Xr(t) && (l = " " + Ys(t)),
    o.length !== 0 || u && t.length != 0 ? n < 0 ? Jr(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(t),
    c = u ? function(h, f, g, m, v) {
        for (var p = [], S = 0, E = f.length; S < E; ++S)
            Gf(f, String(S)) ? p.push(Zs(h, f, g, m, String(S), !0)) : p.push("");
        return v.forEach(function(N) {
            N.match(/^\d+$/) || p.push(Zs(h, f, g, m, N, !0))
        }),
        p
    }(e, t, n, s, o) : o.map(function(h) {
        return Zs(e, t, n, s, h, u)
    }),
    e.seen.pop(),
    function(h, f, g) {
        var m = h.reduce(function(v, p) {
            return p.indexOf(`
`),
            v + p.replace(/\u001b\[\d\d?m/g, "").length + 1
        }, 0);
        return m > 60 ? g[0] + (f === "" ? "" : f + `
 `) + " " + h.join(`,
  `) + " " + g[1] : g[0] + f + " " + h.join(", ") + " " + g[1]
    }(c, l, d)) : d[0] + l + d[1]
}
function Ys(e) {
    return "[" + Error.prototype.toString.call(e) + "]"
}
function Zs(e, t, n, r, i, o) {
    var s, a, c;
    if ((c = Object.getOwnPropertyDescriptor(t, i) || {
        value: t[i]
    }).get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")),
    Gf(r, i) || (s = "[" + i + "]"),
    a || (e.seen.indexOf(c.value) < 0 ? (a = vi(n) ? jo(e, c.value, null) : jo(e, c.value, n - 1)).indexOf(`
`) > -1 && (a = o ? a.split(`
`).map(function(l) {
        return "  " + l
    }).join(`
`).substr(2) : `
` + a.split(`
`).map(function(l) {
        return "   " + l
    }).join(`
`)) : a = e.stylize("[Circular]", "special")),
    Bt(s)) {
        if (o && i.match(/^\d+$/))
            return a;
        (s = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2),
        s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
        s = e.stylize(s, "string"))
    }
    return s + ": " + a
}
function wc(e) {
    return Array.isArray(e)
}
function rs(e) {
    return typeof e == "boolean"
}
function vi(e) {
    return e === null
}
function Ff(e) {
    return e == null
}
function Ec(e) {
    return typeof e == "number"
}
function di(e) {
    return typeof e == "string"
}
function zf(e) {
    return typeof e == "symbol"
}
function Bt(e) {
    return e === void 0
}
function Jr(e) {
    return zn(e) && _c(e) === "[object RegExp]"
}
function zn(e) {
    return typeof e == "object" && e !== null
}
function Ko(e) {
    return zn(e) && _c(e) === "[object Date]"
}
function Xr(e) {
    return zn(e) && (_c(e) === "[object Error]" || e instanceof Error)
}
function Qr(e) {
    return typeof e == "function"
}
function qf(e) {
    return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === void 0
}
function Vf(e) {
    return Z.isBuffer(e)
}
function _c(e) {
    return Object.prototype.toString.call(e)
}
function Js(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10)
}
$t.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
},
$t.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
};
var dm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function Wf() {
    console.log("%s - %s", function() {
        var e = new Date
          , t = [Js(e.getHours()), Js(e.getMinutes()), Js(e.getSeconds())].join(":");
        return [e.getDate(), dm[e.getMonth()], t].join(" ")
    }(), ns.apply(null, arguments))
}
function Cc(e, t) {
    if (!t || !zn(t))
        return e;
    for (var n = Object.keys(t), r = n.length; r--; )
        e[n[r]] = t[n[r]];
    return e
}
function Gf(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
var In = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
function Sc(e) {
    if (typeof e != "function")
        throw new TypeError('The "original" argument must be of type Function');
    if (In && e[In]) {
        var t;
        if (typeof (t = e[In]) != "function")
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, In, {
            value: t,
            enumerable: !1,
            writable: !1,
            configurable: !0
        }),
        t
    }
    function t() {
        for (var n, r, i = new Promise(function(a, c) {
            n = a,
            r = c
        }
        ), o = [], s = 0; s < arguments.length; s++)
            o.push(arguments[s]);
        o.push(function(a, c) {
            a ? r(a) : n(c)
        });
        try {
            e.apply(this, o)
        } catch (a) {
            r(a)
        }
        return i
    }
    return Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
    In && Object.defineProperty(t, In, {
        value: t,
        enumerable: !1,
        writable: !1,
        configurable: !0
    }),
    Object.defineProperties(t, Uf(e))
}
function hm(e, t) {
    if (!e) {
        var n = new Error("Promise was rejected with a falsy value");
        n.reason = e,
        e = n
    }
    return t(e)
}
function Yf(e) {
    if (typeof e != "function")
        throw new TypeError('The "original" argument must be of type Function');
    function t() {
        for (var n = [], r = 0; r < arguments.length; r++)
            n.push(arguments[r]);
        var i = n.pop();
        if (typeof i != "function")
            throw new TypeError("The last argument must be of type Function");
        var o = this
          , s = function() {
            return i.apply(o, arguments)
        };
        e.apply(this, n).then(function(a) {
            _e.nextTick(s.bind(null, null, a))
        }, function(a) {
            _e.nextTick(hm.bind(null, a, s))
        })
    }
    return Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
    Object.defineProperties(t, Uf(e)),
    t
}
Sc.custom = In;
var Xs, qu, Qs, Vu, fm = {
    inherits: yc,
    _extend: Cc,
    log: Wf,
    isBuffer: Vf,
    isPrimitive: qf,
    isFunction: Qr,
    isError: Xr,
    isDate: Ko,
    isObject: zn,
    isRegExp: Jr,
    isUndefined: Bt,
    isSymbol: zf,
    isString: di,
    isNumber: Ec,
    isNullOrUndefined: Ff,
    isNull: vi,
    isBoolean: rs,
    isArray: wc,
    inspect: $t,
    deprecate: bc,
    format: ns,
    debuglog: Hf,
    promisify: Sc,
    callbackify: Yf
}, Zf = yi(Object.freeze({
    __proto__: null,
    _extend: Cc,
    callbackify: Yf,
    debuglog: Hf,
    default: fm,
    deprecate: bc,
    format: ns,
    inherits: yc,
    inspect: $t,
    isArray: wc,
    isBoolean: rs,
    isBuffer: Vf,
    isDate: Ko,
    isError: Xr,
    isFunction: Qr,
    isNull: vi,
    isNullOrUndefined: Ff,
    isNumber: Ec,
    isObject: zn,
    isPrimitive: qf,
    isRegExp: Jr,
    isString: di,
    isSymbol: zf,
    isUndefined: Bt,
    log: Wf,
    promisify: Sc
}));
function pm() {
    if (qu)
        return Xs;
    function e(c, l) {
        var u = Object.keys(c);
        if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(c);
            l && (d = d.filter(function(h) {
                return Object.getOwnPropertyDescriptor(c, h).enumerable
            })),
            u.push.apply(u, d)
        }
        return u
    }
    function t(c) {
        for (var l = 1; l < arguments.length; l++) {
            var u = arguments[l] != null ? arguments[l] : {};
            l % 2 ? e(Object(u), !0).forEach(function(d) {
                n(c, d, u[d])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(u)) : e(Object(u)).forEach(function(d) {
                Object.defineProperty(c, d, Object.getOwnPropertyDescriptor(u, d))
            })
        }
        return c
    }
    function n(c, l, u) {
        return (l = i(l))in c ? Object.defineProperty(c, l, {
            value: u,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : c[l] = u,
        c
    }
    function r(c, l, u) {
        return l && function(d, h) {
            for (var f = 0; f < h.length; f++) {
                var g = h[f];
                g.enumerable = g.enumerable || !1,
                g.configurable = !0,
                "value"in g && (g.writable = !0),
                Object.defineProperty(d, i(g.key), g)
            }
        }(c.prototype, l),
        Object.defineProperty(c, "prototype", {
            writable: !1
        }),
        c
    }
    function i(c) {
        var l = function(u, d) {
            if (typeof u != "object" || u === null)
                return u;
            var h = u[Symbol.toPrimitive];
            if (h !== void 0) {
                var f = h.call(u, d || "default");
                if (typeof f != "object")
                    return f;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return (d === "string" ? String : Number)(u)
        }(c, "string");
        return typeof l == "symbol" ? l : String(l)
    }
    qu = 1;
    var o = vc.Buffer
      , s = Zf.inspect
      , a = s && s.custom || "inspect";
    return Xs = function() {
        function c() {
            (function(l, u) {
                if (!(l instanceof u))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this, c),
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        return r(c, [{
            key: "push",
            value: function(l) {
                var u = {
                    data: l,
                    next: null
                };
                this.length > 0 ? this.tail.next = u : this.head = u,
                this.tail = u,
                ++this.length
            }
        }, {
            key: "unshift",
            value: function(l) {
                var u = {
                    data: l,
                    next: this.head
                };
                this.length === 0 && (this.tail = u),
                this.head = u,
                ++this.length
            }
        }, {
            key: "shift",
            value: function() {
                if (this.length !== 0) {
                    var l = this.head.data;
                    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next,
                    --this.length,
                    l
                }
            }
        }, {
            key: "clear",
            value: function() {
                this.head = this.tail = null,
                this.length = 0
            }
        }, {
            key: "join",
            value: function(l) {
                if (this.length === 0)
                    return "";
                for (var u = this.head, d = "" + u.data; u = u.next; )
                    d += l + u.data;
                return d
            }
        }, {
            key: "concat",
            value: function(l) {
                if (this.length === 0)
                    return o.alloc(0);
                for (var u, d, h, f = o.allocUnsafe(l >>> 0), g = this.head, m = 0; g; )
                    u = g.data,
                    d = f,
                    h = m,
                    o.prototype.copy.call(u, d, h),
                    m += g.data.length,
                    g = g.next;
                return f
            }
        }, {
            key: "consume",
            value: function(l, u) {
                var d;
                return l < this.head.data.length ? (d = this.head.data.slice(0, l),
                this.head.data = this.head.data.slice(l)) : d = l === this.head.data.length ? this.shift() : u ? this._getString(l) : this._getBuffer(l),
                d
            }
        }, {
            key: "first",
            value: function() {
                return this.head.data
            }
        }, {
            key: "_getString",
            value: function(l) {
                var u = this.head
                  , d = 1
                  , h = u.data;
                for (l -= h.length; u = u.next; ) {
                    var f = u.data
                      , g = l > f.length ? f.length : l;
                    if (g === f.length ? h += f : h += f.slice(0, l),
                    (l -= g) === 0) {
                        g === f.length ? (++d,
                        u.next ? this.head = u.next : this.head = this.tail = null) : (this.head = u,
                        u.data = f.slice(g));
                        break
                    }
                    ++d
                }
                return this.length -= d,
                h
            }
        }, {
            key: "_getBuffer",
            value: function(l) {
                var u = o.allocUnsafe(l)
                  , d = this.head
                  , h = 1;
                for (d.data.copy(u),
                l -= d.data.length; d = d.next; ) {
                    var f = d.data
                      , g = l > f.length ? f.length : l;
                    if (f.copy(u, u.length - l, 0, g),
                    (l -= g) === 0) {
                        g === f.length ? (++h,
                        d.next ? this.head = d.next : this.head = this.tail = null) : (this.head = d,
                        d.data = f.slice(g));
                        break
                    }
                    ++h
                }
                return this.length -= h,
                u
            }
        }, {
            key: a,
            value: function(l, u) {
                return s(this, t(t({}, u), {}, {
                    depth: 0,
                    customInspect: !1
                }))
            }
        }]),
        c
    }(),
    Xs
}
function Jf() {
    if (Vu)
        return Qs;
    function e(r, i) {
        n(r, i),
        t(r)
    }
    function t(r) {
        r._writableState && !r._writableState.emitClose || r._readableState && !r._readableState.emitClose || r.emit("close")
    }
    function n(r, i) {
        r.emit("error", i)
    }
    return Vu = 1,
    Qs = {
        destroy: function(r, i) {
            var o = this
              , s = this._readableState && this._readableState.destroyed
              , a = this._writableState && this._writableState.destroyed;
            return s || a ? (i ? i(r) : r && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
            _e.nextTick(n, this, r)) : _e.nextTick(n, this, r)),
            this) : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(r || null, function(c) {
                !i && c ? o._writableState ? o._writableState.errorEmitted ? _e.nextTick(t, o) : (o._writableState.errorEmitted = !0,
                _e.nextTick(e, o, c)) : _e.nextTick(e, o, c) : i ? (_e.nextTick(t, o),
                i(c)) : _e.nextTick(t, o)
            }),
            this)
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1,
            this._readableState.reading = !1,
            this._readableState.ended = !1,
            this._readableState.endEmitted = !1),
            this._writableState && (this._writableState.destroyed = !1,
            this._writableState.ended = !1,
            this._writableState.ending = !1,
            this._writableState.finalCalled = !1,
            this._writableState.prefinished = !1,
            this._writableState.finished = !1,
            this._writableState.errorEmitted = !1)
        },
        errorOrDestroy: function(r, i) {
            var o = r._readableState
              , s = r._writableState;
            o && o.autoDestroy || s && s.autoDestroy ? r.destroy(i) : r.emit("error", i)
        }
    },
    Qs
}
var qn = {}, Wu, Gu, Xf = {};
function pt(e, t, n) {
    n || (n = Error);
    var r = function(i) {
        var o, s;
        function a(c, l, u) {
            return i.call(this, function(d, h, f) {
                return typeof t == "string" ? t : t(d, h, f)
            }(c, l, u)) || this
        }
        return s = i,
        (o = a).prototype = Object.create(s.prototype),
        o.prototype.constructor = o,
        o.__proto__ = s,
        a
    }(n);
    r.prototype.name = n.name,
    r.prototype.code = e,
    Xf[e] = r
}
function Yu(e, t) {
    if (Array.isArray(e)) {
        var n = e.length;
        return e = e.map(function(r) {
            return String(r)
        }),
        n > 2 ? "one of ".concat(t, " ").concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1] : n === 2 ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
    }
    return "of ".concat(t, " ").concat(String(e))
}
function Qf() {
    if (Gu)
        return Wu;
    Gu = 1;
    var e = qn.codes.ERR_INVALID_OPT_VALUE;
    return Wu = {
        getHighWaterMark: function(t, n, r, i) {
            var o = function(s, a, c) {
                return s.highWaterMark != null ? s.highWaterMark : a ? s[c] : null
            }(n, i, r);
            if (o != null) {
                if (!isFinite(o) || Math.floor(o) !== o || o < 0)
                    throw new e(i ? r : "highWaterMark",o);
                return Math.floor(o)
            }
            return t.objectMode ? 16 : 16384
        }
    }
}
pt("ERR_INVALID_OPT_VALUE", function(e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"'
}, TypeError),
pt("ERR_INVALID_ARG_TYPE", function(e, t, n) {
    var r, i, o;
    if (typeof t == "string" && (i = "not ",
    t.substr(0, i.length) === i) ? (r = "must not be",
    t = t.replace(/^not /, "")) : r = "must be",
    function(a, c, l) {
        return (l === void 0 || l > a.length) && (l = a.length),
        a.substring(l - c.length, l) === c
    }(e, " argument"))
        o = "The ".concat(e, " ").concat(r, " ").concat(Yu(t, "type"));
    else {
        var s = function(a, c, l) {
            return typeof l != "number" && (l = 0),
            !(l + c.length > a.length) && a.indexOf(c, l) !== -1
        }(e, ".") ? "property" : "argument";
        o = 'The "'.concat(e, '" ').concat(s, " ").concat(r, " ").concat(Yu(t, "type"))
    }
    return o += ". Received type ".concat(typeof n)
}, TypeError),
pt("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
pt("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
    return "The " + e + " method is not implemented"
}),
pt("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
pt("ERR_STREAM_DESTROYED", function(e) {
    return "Cannot call " + e + " after a stream was destroyed"
}),
pt("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
pt("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
pt("ERR_STREAM_WRITE_AFTER_END", "write after end"),
pt("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
pt("ERR_UNKNOWN_ENCODING", function(e) {
    return "Unknown encoding: " + e
}, TypeError),
pt("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
qn.codes = Xf;
var ea, Zu, ta, Ju, na, Xu, mm = typeof Object.create == "function" ? function(e, t) {
    e.super_ = t,
    e.prototype = Object.create(t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })
}
: function(e, t) {
    e.super_ = t;
    var n = function() {};
    n.prototype = t.prototype,
    e.prototype = new n,
    e.prototype.constructor = e
}
, bi = yi(Object.freeze({
    __proto__: null,
    default: mm
}));
function gm() {
    if (Zu)
        return ea;
    function e(t) {
        try {
            if (!Et.localStorage)
                return !1
        } catch {
            return !1
        }
        var n = Et.localStorage[t];
        return n != null && String(n).toLowerCase() === "true"
    }
    return Zu = 1,
    ea = function(t, n) {
        if (e("noDeprecation"))
            return t;
        var r = !1;
        return function() {
            if (!r) {
                if (e("throwDeprecation"))
                    throw new Error(n);
                e("traceDeprecation") ? console.trace(n) : console.warn(n),
                r = !0
            }
            return t.apply(this, arguments)
        }
    }
    ,
    ea
}
function e0() {
    if (Ju)
        return ta;
    function e(L) {
        var M = this;
        this.next = null,
        this.entry = null,
        this.finish = function() {
            (function(T, D, j) {
                var b = T.entry;
                for (T.entry = null; b; ) {
                    var _ = b.callback;
                    D.pendingcb--,
                    _(j),
                    b = b.next
                }
                D.corkedRequestsFree.next = T
            }
            )(M, L)
        }
    }
    var t;
    Ju = 1,
    ta = I,
    I.WritableState = N;
    var n = {
        deprecate: gm()
    }, r = Kf(), i = vc.Buffer, o = (Et !== void 0 ? Et : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {}
    , s, a = Jf(), c = Qf().getHighWaterMark, l = qn.codes, u = l.ERR_INVALID_ARG_TYPE, d = l.ERR_METHOD_NOT_IMPLEMENTED, h = l.ERR_MULTIPLE_CALLBACK, f = l.ERR_STREAM_CANNOT_PIPE, g = l.ERR_STREAM_DESTROYED, m = l.ERR_STREAM_NULL_VALUES, v = l.ERR_STREAM_WRITE_AFTER_END, p = l.ERR_UNKNOWN_ENCODING, S = a.errorOrDestroy;
    function E() {}
    function N(L, M, T) {
        t = t || wr(),
        L = L || {},
        typeof T != "boolean" && (T = M instanceof t),
        this.objectMode = !!L.objectMode,
        T && (this.objectMode = this.objectMode || !!L.writableObjectMode),
        this.highWaterMark = c(this, L, "writableHighWaterMark", T),
        this.finalCalled = !1,
        this.needDrain = !1,
        this.ending = !1,
        this.ended = !1,
        this.finished = !1,
        this.destroyed = !1;
        var D = L.decodeStrings === !1;
        this.decodeStrings = !D,
        this.defaultEncoding = L.defaultEncoding || "utf8",
        this.length = 0,
        this.writing = !1,
        this.corked = 0,
        this.sync = !0,
        this.bufferProcessing = !1,
        this.onwrite = function(j) {
            (function(b, _) {
                var C = b._writableState
                  , A = C.sync
                  , R = C.writecb;
                if (typeof R != "function")
                    throw new h;
                if (function(y) {
                    y.writing = !1,
                    y.writecb = null,
                    y.length -= y.writelen,
                    y.writelen = 0
                }(C),
                _)
                    (function(y, x, k, O, $) {
                        --x.pendingcb,
                        k ? (_e.nextTick($, O),
                        _e.nextTick(P, y, x),
                        y._writableState.errorEmitted = !0,
                        S(y, O)) : ($(O),
                        y._writableState.errorEmitted = !0,
                        S(y, O),
                        P(y, x))
                    }
                    )(b, C, A, _, R);
                else {
                    var w = G(C) || b.destroyed;
                    w || C.corked || C.bufferProcessing || !C.bufferedRequest || z(b, C),
                    A ? _e.nextTick(q, b, C, w, R) : q(b, C, w, R)
                }
            }
            )(M, j)
        }
        ,
        this.writecb = null,
        this.writelen = 0,
        this.bufferedRequest = null,
        this.lastBufferedRequest = null,
        this.pendingcb = 0,
        this.prefinished = !1,
        this.errorEmitted = !1,
        this.emitClose = L.emitClose !== !1,
        this.autoDestroy = !!L.autoDestroy,
        this.bufferedRequestCount = 0,
        this.corkedRequestsFree = new e(this)
    }
    function I(L) {
        var M = this instanceof (t = t || wr());
        if (!M && !s.call(I, this))
            return new I(L);
        this._writableState = new N(L,this,M),
        this.writable = !0,
        L && (typeof L.write == "function" && (this._write = L.write),
        typeof L.writev == "function" && (this._writev = L.writev),
        typeof L.destroy == "function" && (this._destroy = L.destroy),
        typeof L.final == "function" && (this._final = L.final)),
        r.call(this)
    }
    function F(L, M, T, D, j, b, _) {
        M.writelen = D,
        M.writecb = _,
        M.writing = !0,
        M.sync = !0,
        M.destroyed ? M.onwrite(new g("write")) : T ? L._writev(j, M.onwrite) : L._write(j, b, M.onwrite),
        M.sync = !1
    }
    function q(L, M, T, D) {
        T || function(j, b) {
            b.length === 0 && b.needDrain && (b.needDrain = !1,
            j.emit("drain"))
        }(L, M),
        M.pendingcb--,
        D(),
        P(L, M)
    }
    function z(L, M) {
        M.bufferProcessing = !0;
        var T = M.bufferedRequest;
        if (L._writev && T && T.next) {
            var D = M.bufferedRequestCount
              , j = new Array(D)
              , b = M.corkedRequestsFree;
            b.entry = T;
            for (var _ = 0, C = !0; T; )
                j[_] = T,
                T.isBuf || (C = !1),
                T = T.next,
                _ += 1;
            j.allBuffers = C,
            F(L, M, !0, M.length, j, "", b.finish),
            M.pendingcb++,
            M.lastBufferedRequest = null,
            b.next ? (M.corkedRequestsFree = b.next,
            b.next = null) : M.corkedRequestsFree = new e(M),
            M.bufferedRequestCount = 0
        } else {
            for (; T; ) {
                var A = T.chunk
                  , R = T.encoding
                  , w = T.callback;
                if (F(L, M, !1, M.objectMode ? 1 : A.length, A, R, w),
                T = T.next,
                M.bufferedRequestCount--,
                M.writing)
                    break
            }
            T === null && (M.lastBufferedRequest = null)
        }
        M.bufferedRequest = T,
        M.bufferProcessing = !1
    }
    function G(L) {
        return L.ending && L.length === 0 && L.bufferedRequest === null && !L.finished && !L.writing
    }
    function U(L, M) {
        L._final(function(T) {
            M.pendingcb--,
            T && S(L, T),
            M.prefinished = !0,
            L.emit("prefinish"),
            P(L, M)
        })
    }
    function P(L, M) {
        var T = G(M);
        if (T && (function(j, b) {
            b.prefinished || b.finalCalled || (typeof j._final != "function" || b.destroyed ? (b.prefinished = !0,
            j.emit("prefinish")) : (b.pendingcb++,
            b.finalCalled = !0,
            _e.nextTick(U, j, b)))
        }(L, M),
        M.pendingcb === 0 && (M.finished = !0,
        L.emit("finish"),
        M.autoDestroy))) {
            var D = L._readableState;
            (!D || D.autoDestroy && D.endEmitted) && L.destroy()
        }
        return T
    }
    return bi(I, r),
    N.prototype.getBuffer = function() {
        for (var L = this.bufferedRequest, M = []; L; )
            M.push(L),
            L = L.next;
        return M
    }
    ,
    function() {
        try {
            Object.defineProperty(N.prototype, "buffer", {
                get: n.deprecate(function() {
                    return this.getBuffer()
                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
            })
        } catch {}
    }(),
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (s = Function.prototype[Symbol.hasInstance],
    Object.defineProperty(I, Symbol.hasInstance, {
        value: function(L) {
            return !!s.call(this, L) || this === I && L && L._writableState instanceof N
        }
    })) : s = function(L) {
        return L instanceof this
    }
    ,
    I.prototype.pipe = function() {
        S(this, new f)
    }
    ,
    I.prototype.write = function(L, M, T) {
        var D, j = this._writableState, b = !1, _ = !j.objectMode && (D = L,
        i.isBuffer(D) || D instanceof o);
        return _ && !i.isBuffer(L) && (L = function(C) {
            return i.from(C)
        }(L)),
        typeof M == "function" && (T = M,
        M = null),
        _ ? M = "buffer" : M || (M = j.defaultEncoding),
        typeof T != "function" && (T = E),
        j.ending ? function(C, A) {
            var R = new v;
            S(C, R),
            _e.nextTick(A, R)
        }(this, T) : (_ || function(C, A, R, w) {
            var y;
            return R === null ? y = new m : typeof R == "string" || A.objectMode || (y = new u("chunk",["string", "Buffer"],R)),
            !y || (S(C, y),
            _e.nextTick(w, y),
            !1)
        }(this, j, L, T)) && (j.pendingcb++,
        b = function(C, A, R, w, y, x) {
            if (!R) {
                var k = function(H, V, X) {
                    return H.objectMode || H.decodeStrings === !1 || typeof V != "string" || (V = i.from(V, X)),
                    V
                }(A, w, y);
                w !== k && (R = !0,
                y = "buffer",
                w = k)
            }
            var O = A.objectMode ? 1 : w.length;
            A.length += O;
            var $ = A.length < A.highWaterMark;
            if ($ || (A.needDrain = !0),
            A.writing || A.corked) {
                var K = A.lastBufferedRequest;
                A.lastBufferedRequest = {
                    chunk: w,
                    encoding: y,
                    isBuf: R,
                    callback: x,
                    next: null
                },
                K ? K.next = A.lastBufferedRequest : A.bufferedRequest = A.lastBufferedRequest,
                A.bufferedRequestCount += 1
            } else
                F(C, A, !1, O, w, y, x);
            return $
        }(this, j, _, L, M, T)),
        b
    }
    ,
    I.prototype.cork = function() {
        this._writableState.corked++
    }
    ,
    I.prototype.uncork = function() {
        var L = this._writableState;
        L.corked && (L.corked--,
        L.writing || L.corked || L.bufferProcessing || !L.bufferedRequest || z(this, L))
    }
    ,
    I.prototype.setDefaultEncoding = function(L) {
        if (typeof L == "string" && (L = L.toLowerCase()),
        !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((L + "").toLowerCase()) > -1))
            throw new p(L);
        return this._writableState.defaultEncoding = L,
        this
    }
    ,
    Object.defineProperty(I.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    }),
    Object.defineProperty(I.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }),
    I.prototype._write = function(L, M, T) {
        T(new d("_write()"))
    }
    ,
    I.prototype._writev = null,
    I.prototype.end = function(L, M, T) {
        var D = this._writableState;
        return typeof L == "function" ? (T = L,
        L = null,
        M = null) : typeof M == "function" && (T = M,
        M = null),
        L != null && this.write(L, M),
        D.corked && (D.corked = 1,
        this.uncork()),
        D.ending || function(j, b, _) {
            b.ending = !0,
            P(j, b),
            _ && (b.finished ? _e.nextTick(_) : j.once("finish", _)),
            b.ended = !0,
            j.writable = !1
        }(this, D, T),
        this
    }
    ,
    Object.defineProperty(I.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    }),
    Object.defineProperty(I.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._writableState !== void 0 && this._writableState.destroyed
        },
        set: function(L) {
            this._writableState && (this._writableState.destroyed = L)
        }
    }),
    I.prototype.destroy = a.destroy,
    I.prototype._undestroy = a.undestroy,
    I.prototype._destroy = function(L, M) {
        M(L)
    }
    ,
    ta
}
function wr() {
    if (Xu)
        return na;
    Xu = 1;
    var e = Object.keys || function(l) {
        var u = [];
        for (var d in l)
            u.push(d);
        return u
    }
    ;
    na = s;
    var t = t0()
      , n = e0();
    bi(s, t);
    for (var r = e(n.prototype), i = 0; i < r.length; i++) {
        var o = r[i];
        s.prototype[o] || (s.prototype[o] = n.prototype[o])
    }
    function s(l) {
        if (!(this instanceof s))
            return new s(l);
        t.call(this, l),
        n.call(this, l),
        this.allowHalfOpen = !0,
        l && (l.readable === !1 && (this.readable = !1),
        l.writable === !1 && (this.writable = !1),
        l.allowHalfOpen === !1 && (this.allowHalfOpen = !1,
        this.once("end", a)))
    }
    function a() {
        this._writableState.ended || _e.nextTick(c, this)
    }
    function c(l) {
        l.end()
    }
    return Object.defineProperty(s.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }),
    Object.defineProperty(s.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    }),
    Object.defineProperty(s.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    }),
    Object.defineProperty(s.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._readableState !== void 0 && this._writableState !== void 0 && this._readableState.destroyed && this._writableState.destroyed
        },
        set: function(l) {
            this._readableState !== void 0 && this._writableState !== void 0 && (this._readableState.destroyed = l,
            this._writableState.destroyed = l)
        }
    }),
    na
}
var ym = Z.isEncoding || function(e) {
    switch (e && e.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
        return !0;
    default:
        return !1
    }
}
;
function fo(e) {
    switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""),
    function(t) {
        if (t && !ym(t))
            throw new Error("Unknown encoding: " + t)
    }(e),
    this.encoding) {
    case "utf8":
        this.surrogateSize = 3;
        break;
    case "ucs2":
    case "utf16le":
        this.surrogateSize = 2,
        this.detectIncompleteChar = bm;
        break;
    case "base64":
        this.surrogateSize = 3,
        this.detectIncompleteChar = wm;
        break;
    default:
        return void (this.write = vm)
    }
    this.charBuffer = new Z(6),
    this.charReceived = 0,
    this.charLength = 0
}
function vm(e) {
    return e.toString(this.encoding)
}
function bm(e) {
    this.charReceived = e.length % 2,
    this.charLength = this.charReceived ? 2 : 0
}
function wm(e) {
    this.charReceived = e.length % 3,
    this.charLength = this.charReceived ? 3 : 0
}
fo.prototype.write = function(e) {
    for (var t = ""; this.charLength; ) {
        var n = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
        if (e.copy(this.charBuffer, this.charReceived, 0, n),
        this.charReceived += n,
        this.charReceived < this.charLength)
            return "";
        if (e = e.slice(n, e.length),
        !((i = (t = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296 && i <= 56319)) {
            if (this.charReceived = this.charLength = 0,
            e.length === 0)
                return t;
            break
        }
        this.charLength += this.surrogateSize,
        t = ""
    }
    this.detectIncompleteChar(e);
    var r = e.length;
    this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, r),
    r -= this.charReceived);
    var i;
    if (r = (t += e.toString(this.encoding, 0, r)).length - 1,
    (i = t.charCodeAt(r)) >= 55296 && i <= 56319) {
        var o = this.surrogateSize;
        return this.charLength += o,
        this.charReceived += o,
        this.charBuffer.copy(this.charBuffer, o, 0, o),
        e.copy(this.charBuffer, 0, 0, o),
        t.substring(0, r)
    }
    return t
}
,
fo.prototype.detectIncompleteChar = function(e) {
    for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
        var n = e[e.length - t];
        if (t == 1 && n >> 5 == 6) {
            this.charLength = 2;
            break
        }
        if (t <= 2 && n >> 4 == 14) {
            this.charLength = 3;
            break
        }
        if (t <= 3 && n >> 3 == 30) {
            this.charLength = 4;
            break
        }
    }
    this.charReceived = t
}
,
fo.prototype.end = function(e) {
    var t = "";
    if (e && e.length && (t = this.write(e)),
    this.charReceived) {
        var n = this.charReceived
          , r = this.charBuffer
          , i = this.encoding;
        t += r.slice(0, n).toString(i)
    }
    return t
}
;
var Qu = yi(Object.freeze({
    __proto__: null,
    StringDecoder: fo
}))
  , ed = qn.codes.ERR_STREAM_PREMATURE_CLOSE;
function Em() {}
var ra, td, nd, rd, ia, id, kc = function e(t, n, r) {
    if (typeof n == "function")
        return e(t, null, n);
    n || (n = {}),
    r = function(g) {
        var m = !1;
        return function() {
            if (!m) {
                m = !0;
                for (var v = arguments.length, p = new Array(v), S = 0; S < v; S++)
                    p[S] = arguments[S];
                g.apply(this, p)
            }
        }
    }(r || Em);
    var i = n.readable || n.readable !== !1 && t.readable
      , o = n.writable || n.writable !== !1 && t.writable
      , s = function() {
        t.writable || c()
    }
      , a = t._writableState && t._writableState.finished
      , c = function() {
        o = !1,
        a = !0,
        i || r.call(t)
    }
      , l = t._readableState && t._readableState.endEmitted
      , u = function() {
        i = !1,
        l = !0,
        o || r.call(t)
    }
      , d = function(g) {
        r.call(t, g)
    }
      , h = function() {
        var g;
        return i && !l ? (t._readableState && t._readableState.ended || (g = new ed),
        r.call(t, g)) : o && !a ? (t._writableState && t._writableState.ended || (g = new ed),
        r.call(t, g)) : void 0
    }
      , f = function() {
        t.req.on("finish", c)
    };
    return function(g) {
        return g.setHeader && typeof g.abort == "function"
    }(t) ? (t.on("complete", c),
    t.on("abort", h),
    t.req ? f() : t.on("request", f)) : o && !t._writableState && (t.on("end", s),
    t.on("close", s)),
    t.on("end", u),
    t.on("finish", c),
    n.error !== !1 && t.on("error", d),
    t.on("close", h),
    function() {
        t.removeListener("complete", c),
        t.removeListener("abort", h),
        t.removeListener("request", f),
        t.req && t.req.removeListener("finish", c),
        t.removeListener("end", s),
        t.removeListener("close", s),
        t.removeListener("finish", c),
        t.removeListener("end", u),
        t.removeListener("error", d),
        t.removeListener("close", h)
    }
};
function _m() {
    if (td)
        return ra;
    var e;
    function t(m, v, p) {
        return (v = function(S) {
            var E = function(N, I) {
                if (typeof N != "object" || N === null)
                    return N;
                var F = N[Symbol.toPrimitive];
                if (F !== void 0) {
                    var q = F.call(N, I || "default");
                    if (typeof q != "object")
                        return q;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return (I === "string" ? String : Number)(N)
            }(S, "string");
            return typeof E == "symbol" ? E : String(E)
        }(v))in m ? Object.defineProperty(m, v, {
            value: p,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : m[v] = p,
        m
    }
    td = 1;
    var n = kc
      , r = Symbol("lastResolve")
      , i = Symbol("lastReject")
      , o = Symbol("error")
      , s = Symbol("ended")
      , a = Symbol("lastPromise")
      , c = Symbol("handlePromise")
      , l = Symbol("stream");
    function u(m, v) {
        return {
            value: m,
            done: v
        }
    }
    function d(m) {
        var v = m[r];
        if (v !== null) {
            var p = m[l].read();
            p !== null && (m[a] = null,
            m[r] = null,
            m[i] = null,
            v(u(p, !1)))
        }
    }
    function h(m) {
        _e.nextTick(d, m)
    }
    var f = Object.getPrototypeOf(function() {})
      , g = Object.setPrototypeOf((t(e = {
        get stream() {
            return this[l]
        },
        next: function() {
            var m = this
              , v = this[o];
            if (v !== null)
                return Promise.reject(v);
            if (this[s])
                return Promise.resolve(u(void 0, !0));
            if (this[l].destroyed)
                return new Promise(function(N, I) {
                    _e.nextTick(function() {
                        m[o] ? I(m[o]) : N(u(void 0, !0))
                    })
                }
                );
            var p, S = this[a];
            if (S)
                p = new Promise(function(N, I) {
                    return function(F, q) {
                        N.then(function() {
                            I[s] ? F(u(void 0, !0)) : I[c](F, q)
                        }, q)
                    }
                }(S, this));
            else {
                var E = this[l].read();
                if (E !== null)
                    return Promise.resolve(u(E, !1));
                p = new Promise(this[c])
            }
            return this[a] = p,
            p
        }
    }, Symbol.asyncIterator, function() {
        return this
    }),
    t(e, "return", function() {
        var m = this;
        return new Promise(function(v, p) {
            m[l].destroy(null, function(S) {
                S ? p(S) : v(u(void 0, !0))
            })
        }
        )
    }),
    e), f);
    return ra = function(m) {
        var v, p = Object.create(g, (t(v = {}, l, {
            value: m,
            writable: !0
        }),
        t(v, r, {
            value: null,
            writable: !0
        }),
        t(v, i, {
            value: null,
            writable: !0
        }),
        t(v, o, {
            value: null,
            writable: !0
        }),
        t(v, s, {
            value: m._readableState.endEmitted,
            writable: !0
        }),
        t(v, c, {
            value: function(S, E) {
                var N = p[l].read();
                N ? (p[a] = null,
                p[r] = null,
                p[i] = null,
                S(u(N, !1))) : (p[r] = S,
                p[i] = E)
            },
            writable: !0
        }),
        v));
        return p[a] = null,
        n(m, function(S) {
            if (S && S.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                var E = p[i];
                return E !== null && (p[a] = null,
                p[r] = null,
                p[i] = null,
                E(S)),
                void (p[o] = S)
            }
            var N = p[r];
            N !== null && (p[a] = null,
            p[r] = null,
            p[i] = null,
            N(u(void 0, !0))),
            p[s] = !0
        }),
        m.on("readable", h.bind(null, p)),
        p
    }
    ,
    ra
}
function t0() {
    if (id)
        return ia;
    var e;
    id = 1,
    ia = I,
    I.ReadableState = N,
    gc.EventEmitter;
    var t = function(w, y) {
        return w.listeners(y).length
    }, n = Kf(), r = vc.Buffer, i = (Et !== void 0 ? Et : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {}
    , o, s = Zf;
    o = s && s.debuglog ? s.debuglog("stream") : function() {}
    ;
    var a, c, l, u = pm(), d = Jf(), h = Qf().getHighWaterMark, f = qn.codes, g = f.ERR_INVALID_ARG_TYPE, m = f.ERR_STREAM_PUSH_AFTER_EOF, v = f.ERR_METHOD_NOT_IMPLEMENTED, p = f.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    bi(I, n);
    var S = d.errorOrDestroy
      , E = ["error", "close", "destroy", "pause", "resume"];
    function N(w, y, x) {
        e = e || wr(),
        w = w || {},
        typeof x != "boolean" && (x = y instanceof e),
        this.objectMode = !!w.objectMode,
        x && (this.objectMode = this.objectMode || !!w.readableObjectMode),
        this.highWaterMark = h(this, w, "readableHighWaterMark", x),
        this.buffer = new u,
        this.length = 0,
        this.pipes = null,
        this.pipesCount = 0,
        this.flowing = null,
        this.ended = !1,
        this.endEmitted = !1,
        this.reading = !1,
        this.sync = !0,
        this.needReadable = !1,
        this.emittedReadable = !1,
        this.readableListening = !1,
        this.resumeScheduled = !1,
        this.paused = !0,
        this.emitClose = w.emitClose !== !1,
        this.autoDestroy = !!w.autoDestroy,
        this.destroyed = !1,
        this.defaultEncoding = w.defaultEncoding || "utf8",
        this.awaitDrain = 0,
        this.readingMore = !1,
        this.decoder = null,
        this.encoding = null,
        w.encoding && (a || (a = Qu.StringDecoder),
        this.decoder = new a(w.encoding),
        this.encoding = w.encoding)
    }
    function I(w) {
        if (e = e || wr(),
        !(this instanceof I))
            return new I(w);
        var y = this instanceof e;
        this._readableState = new N(w,this,y),
        this.readable = !0,
        w && (typeof w.read == "function" && (this._read = w.read),
        typeof w.destroy == "function" && (this._destroy = w.destroy)),
        n.call(this)
    }
    function F(w, y, x, k, O) {
        o("readableAddChunk", y);
        var $, K = w._readableState;
        if (y === null)
            K.reading = !1,
            function(H, V) {
                if (o("onEofChunk"),
                !V.ended) {
                    if (V.decoder) {
                        var X = V.decoder.end();
                        X && X.length && (V.buffer.push(X),
                        V.length += V.objectMode ? 1 : X.length)
                    }
                    V.ended = !0,
                    V.sync ? U(H) : (V.needReadable = !1,
                    V.emittedReadable || (V.emittedReadable = !0,
                    P(H)))
                }
            }(w, K);
        else if (O || ($ = function(H, V) {
            var X;
            ee = V,
            r.isBuffer(ee) || ee instanceof i || typeof V == "string" || V === void 0 || H.objectMode || (X = new g("chunk",["string", "Buffer", "Uint8Array"],V));
            var ee;
            return X
        }(K, y)),
        $)
            S(w, $);
        else if (K.objectMode || y && y.length > 0)
            if (typeof y == "string" || K.objectMode || Object.getPrototypeOf(y) === r.prototype || (y = function(H) {
                return r.from(H)
            }(y)),
            k)
                K.endEmitted ? S(w, new p) : q(w, K, y, !0);
            else if (K.ended)
                S(w, new m);
            else {
                if (K.destroyed)
                    return !1;
                K.reading = !1,
                K.decoder && !x ? (y = K.decoder.write(y),
                K.objectMode || y.length !== 0 ? q(w, K, y, !1) : L(w, K)) : q(w, K, y, !1)
            }
        else
            k || (K.reading = !1,
            L(w, K));
        return !K.ended && (K.length < K.highWaterMark || K.length === 0)
    }
    function q(w, y, x, k) {
        y.flowing && y.length === 0 && !y.sync ? (y.awaitDrain = 0,
        w.emit("data", x)) : (y.length += y.objectMode ? 1 : x.length,
        k ? y.buffer.unshift(x) : y.buffer.push(x),
        y.needReadable && U(w)),
        L(w, y)
    }
    Object.defineProperty(I.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return this._readableState !== void 0 && this._readableState.destroyed
        },
        set: function(w) {
            this._readableState && (this._readableState.destroyed = w)
        }
    }),
    I.prototype.destroy = d.destroy,
    I.prototype._undestroy = d.undestroy,
    I.prototype._destroy = function(w, y) {
        y(w)
    }
    ,
    I.prototype.push = function(w, y) {
        var x, k = this._readableState;
        return k.objectMode ? x = !0 : typeof w == "string" && ((y = y || k.defaultEncoding) !== k.encoding && (w = r.from(w, y),
        y = ""),
        x = !0),
        F(this, w, y, !1, x)
    }
    ,
    I.prototype.unshift = function(w) {
        return F(this, w, null, !0, !1)
    }
    ,
    I.prototype.isPaused = function() {
        return this._readableState.flowing === !1
    }
    ,
    I.prototype.setEncoding = function(w) {
        a || (a = Qu.StringDecoder);
        var y = new a(w);
        this._readableState.decoder = y,
        this._readableState.encoding = this._readableState.decoder.encoding;
        for (var x = this._readableState.buffer.head, k = ""; x !== null; )
            k += y.write(x.data),
            x = x.next;
        return this._readableState.buffer.clear(),
        k !== "" && this._readableState.buffer.push(k),
        this._readableState.length = k.length,
        this
    }
    ;
    var z = 1073741824;
    function G(w, y) {
        return w <= 0 || y.length === 0 && y.ended ? 0 : y.objectMode ? 1 : w != w ? y.flowing && y.length ? y.buffer.head.data.length : y.length : (w > y.highWaterMark && (y.highWaterMark = function(x) {
            return x >= z ? x = z : (x--,
            x |= x >>> 1,
            x |= x >>> 2,
            x |= x >>> 4,
            x |= x >>> 8,
            x |= x >>> 16,
            x++),
            x
        }(w)),
        w <= y.length ? w : y.ended ? y.length : (y.needReadable = !0,
        0))
    }
    function U(w) {
        var y = w._readableState;
        o("emitReadable", y.needReadable, y.emittedReadable),
        y.needReadable = !1,
        y.emittedReadable || (o("emitReadable", y.flowing),
        y.emittedReadable = !0,
        _e.nextTick(P, w))
    }
    function P(w) {
        var y = w._readableState;
        o("emitReadable_", y.destroyed, y.length, y.ended),
        y.destroyed || !y.length && !y.ended || (w.emit("readable"),
        y.emittedReadable = !1),
        y.needReadable = !y.flowing && !y.ended && y.length <= y.highWaterMark,
        b(w)
    }
    function L(w, y) {
        y.readingMore || (y.readingMore = !0,
        _e.nextTick(M, w, y))
    }
    function M(w, y) {
        for (; !y.reading && !y.ended && (y.length < y.highWaterMark || y.flowing && y.length === 0); ) {
            var x = y.length;
            if (o("maybeReadMore read 0"),
            w.read(0),
            x === y.length)
                break
        }
        y.readingMore = !1
    }
    function T(w) {
        var y = w._readableState;
        y.readableListening = w.listenerCount("readable") > 0,
        y.resumeScheduled && !y.paused ? y.flowing = !0 : w.listenerCount("data") > 0 && w.resume()
    }
    function D(w) {
        o("readable nexttick read 0"),
        w.read(0)
    }
    function j(w, y) {
        o("resume", y.reading),
        y.reading || w.read(0),
        y.resumeScheduled = !1,
        w.emit("resume"),
        b(w),
        y.flowing && !y.reading && w.read(0)
    }
    function b(w) {
        var y = w._readableState;
        for (o("flow", y.flowing); y.flowing && w.read() !== null; )
            ;
    }
    function _(w, y) {
        return y.length === 0 ? null : (y.objectMode ? x = y.buffer.shift() : !w || w >= y.length ? (x = y.decoder ? y.buffer.join("") : y.buffer.length === 1 ? y.buffer.first() : y.buffer.concat(y.length),
        y.buffer.clear()) : x = y.buffer.consume(w, y.decoder),
        x);
        var x
    }
    function C(w) {
        var y = w._readableState;
        o("endReadable", y.endEmitted),
        y.endEmitted || (y.ended = !0,
        _e.nextTick(A, y, w))
    }
    function A(w, y) {
        if (o("endReadableNT", w.endEmitted, w.length),
        !w.endEmitted && w.length === 0 && (w.endEmitted = !0,
        y.readable = !1,
        y.emit("end"),
        w.autoDestroy)) {
            var x = y._writableState;
            (!x || x.autoDestroy && x.finished) && y.destroy()
        }
    }
    function R(w, y) {
        for (var x = 0, k = w.length; x < k; x++)
            if (w[x] === y)
                return x;
        return -1
    }
    return I.prototype.read = function(w) {
        o("read", w),
        w = parseInt(w, 10);
        var y = this._readableState
          , x = w;
        if (w !== 0 && (y.emittedReadable = !1),
        w === 0 && y.needReadable && ((y.highWaterMark !== 0 ? y.length >= y.highWaterMark : y.length > 0) || y.ended))
            return o("read: emitReadable", y.length, y.ended),
            y.length === 0 && y.ended ? C(this) : U(this),
            null;
        if ((w = G(w, y)) === 0 && y.ended)
            return y.length === 0 && C(this),
            null;
        var k, O = y.needReadable;
        return o("need readable", O),
        (y.length === 0 || y.length - w < y.highWaterMark) && o("length less than watermark", O = !0),
        y.ended || y.reading ? o("reading or ended", O = !1) : O && (o("do read"),
        y.reading = !0,
        y.sync = !0,
        y.length === 0 && (y.needReadable = !0),
        this._read(y.highWaterMark),
        y.sync = !1,
        y.reading || (w = G(x, y))),
        (k = w > 0 ? _(w, y) : null) === null ? (y.needReadable = y.length <= y.highWaterMark,
        w = 0) : (y.length -= w,
        y.awaitDrain = 0),
        y.length === 0 && (y.ended || (y.needReadable = !0),
        x !== w && y.ended && C(this)),
        k !== null && this.emit("data", k),
        k
    }
    ,
    I.prototype._read = function(w) {
        S(this, new v("_read()"))
    }
    ,
    I.prototype.pipe = function(w, y) {
        var x = this
          , k = this._readableState;
        switch (k.pipesCount) {
        case 0:
            k.pipes = w;
            break;
        case 1:
            k.pipes = [k.pipes, w];
            break;
        default:
            k.pipes.push(w)
        }
        k.pipesCount += 1,
        o("pipe count=%d opts=%j", k.pipesCount, y);
        var O = (!y || y.end !== !1) && w !== _e.stdout && w !== _e.stderr ? K : ce;
        function $(ie, ne) {
            o("onunpipe"),
            ie === x && ne && ne.hasUnpiped === !1 && (ne.hasUnpiped = !0,
            o("cleanup"),
            w.removeListener("close", re),
            w.removeListener("finish", se),
            w.removeListener("drain", H),
            w.removeListener("error", ee),
            w.removeListener("unpipe", $),
            x.removeListener("end", K),
            x.removeListener("end", ce),
            x.removeListener("data", X),
            V = !0,
            !k.awaitDrain || w._writableState && !w._writableState.needDrain || H())
        }
        function K() {
            o("onend"),
            w.end()
        }
        k.endEmitted ? _e.nextTick(O) : x.once("end", O),
        w.on("unpipe", $);
        var H = function(ie) {
            return function() {
                var ne = ie._readableState;
                o("pipeOnDrain", ne.awaitDrain),
                ne.awaitDrain && ne.awaitDrain--,
                ne.awaitDrain === 0 && t(ie, "data") && (ne.flowing = !0,
                b(ie))
            }
        }(x);
        w.on("drain", H);
        var V = !1;
        function X(ie) {
            o("ondata");
            var ne = w.write(ie);
            o("dest.write", ne),
            ne === !1 && ((k.pipesCount === 1 && k.pipes === w || k.pipesCount > 1 && R(k.pipes, w) !== -1) && !V && (o("false write response, pause", k.awaitDrain),
            k.awaitDrain++),
            x.pause())
        }
        function ee(ie) {
            o("onerror", ie),
            ce(),
            w.removeListener("error", ee),
            t(w, "error") === 0 && S(w, ie)
        }
        function re() {
            w.removeListener("finish", se),
            ce()
        }
        function se() {
            o("onfinish"),
            w.removeListener("close", re),
            ce()
        }
        function ce() {
            o("unpipe"),
            x.unpipe(w)
        }
        return x.on("data", X),
        function(ie, ne, ae) {
            if (typeof ie.prependListener == "function")
                return ie.prependListener(ne, ae);
            ie._events && ie._events[ne] ? Array.isArray(ie._events[ne]) ? ie._events[ne].unshift(ae) : ie._events[ne] = [ae, ie._events[ne]] : ie.on(ne, ae)
        }(w, "error", ee),
        w.once("close", re),
        w.once("finish", se),
        w.emit("pipe", x),
        k.flowing || (o("pipe resume"),
        x.resume()),
        w
    }
    ,
    I.prototype.unpipe = function(w) {
        var y = this._readableState
          , x = {
            hasUnpiped: !1
        };
        if (y.pipesCount === 0)
            return this;
        if (y.pipesCount === 1)
            return w && w !== y.pipes || (w || (w = y.pipes),
            y.pipes = null,
            y.pipesCount = 0,
            y.flowing = !1,
            w && w.emit("unpipe", this, x)),
            this;
        if (!w) {
            var k = y.pipes
              , O = y.pipesCount;
            y.pipes = null,
            y.pipesCount = 0,
            y.flowing = !1;
            for (var $ = 0; $ < O; $++)
                k[$].emit("unpipe", this, {
                    hasUnpiped: !1
                });
            return this
        }
        var K = R(y.pipes, w);
        return K === -1 || (y.pipes.splice(K, 1),
        y.pipesCount -= 1,
        y.pipesCount === 1 && (y.pipes = y.pipes[0]),
        w.emit("unpipe", this, x)),
        this
    }
    ,
    I.prototype.on = function(w, y) {
        var x = n.prototype.on.call(this, w, y)
          , k = this._readableState;
        return w === "data" ? (k.readableListening = this.listenerCount("readable") > 0,
        k.flowing !== !1 && this.resume()) : w === "readable" && (k.endEmitted || k.readableListening || (k.readableListening = k.needReadable = !0,
        k.flowing = !1,
        k.emittedReadable = !1,
        o("on readable", k.length, k.reading),
        k.length ? U(this) : k.reading || _e.nextTick(D, this))),
        x
    }
    ,
    I.prototype.addListener = I.prototype.on,
    I.prototype.removeListener = function(w, y) {
        var x = n.prototype.removeListener.call(this, w, y);
        return w === "readable" && _e.nextTick(T, this),
        x
    }
    ,
    I.prototype.removeAllListeners = function(w) {
        var y = n.prototype.removeAllListeners.apply(this, arguments);
        return w !== "readable" && w !== void 0 || _e.nextTick(T, this),
        y
    }
    ,
    I.prototype.resume = function() {
        var w = this._readableState;
        return w.flowing || (o("resume"),
        w.flowing = !w.readableListening,
        function(y, x) {
            x.resumeScheduled || (x.resumeScheduled = !0,
            _e.nextTick(j, y, x))
        }(this, w)),
        w.paused = !1,
        this
    }
    ,
    I.prototype.pause = function() {
        return o("call pause flowing=%j", this._readableState.flowing),
        this._readableState.flowing !== !1 && (o("pause"),
        this._readableState.flowing = !1,
        this.emit("pause")),
        this._readableState.paused = !0,
        this
    }
    ,
    I.prototype.wrap = function(w) {
        var y = this
          , x = this._readableState
          , k = !1;
        for (var O in w.on("end", function() {
            if (o("wrapped end"),
            x.decoder && !x.ended) {
                var K = x.decoder.end();
                K && K.length && y.push(K)
            }
            y.push(null)
        }),
        w.on("data", function(K) {
            o("wrapped data"),
            x.decoder && (K = x.decoder.write(K)),
            x.objectMode && K == null || (x.objectMode || K && K.length) && (y.push(K) || (k = !0,
            w.pause()))
        }),
        w)
            this[O] === void 0 && typeof w[O] == "function" && (this[O] = function(K) {
                return function() {
                    return w[K].apply(w, arguments)
                }
            }(O));
        for (var $ = 0; $ < E.length; $++)
            w.on(E[$], this.emit.bind(this, E[$]));
        return this._read = function(K) {
            o("wrapped _read", K),
            k && (k = !1,
            w.resume())
        }
        ,
        this
    }
    ,
    typeof Symbol == "function" && (I.prototype[Symbol.asyncIterator] = function() {
        return c === void 0 && (c = _m()),
        c(this)
    }
    ),
    Object.defineProperty(I.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark
        }
    }),
    Object.defineProperty(I.prototype, "readableBuffer", {
        enumerable: !1,
        get: function() {
            return this._readableState && this._readableState.buffer
        }
    }),
    Object.defineProperty(I.prototype, "readableFlowing", {
        enumerable: !1,
        get: function() {
            return this._readableState.flowing
        },
        set: function(w) {
            this._readableState && (this._readableState.flowing = w)
        }
    }),
    I._fromList = _,
    Object.defineProperty(I.prototype, "readableLength", {
        enumerable: !1,
        get: function() {
            return this._readableState.length
        }
    }),
    typeof Symbol == "function" && (I.from = function(w, y) {
        return l === void 0 && (l = rd ? nd : (rd = 1,
        nd = function() {
            throw new Error("Readable.from is not available in the browser")
        }
        )),
        l(I, w, y)
    }
    ),
    ia
}
var n0 = Yt
  , is = qn.codes
  , Cm = is.ERR_METHOD_NOT_IMPLEMENTED
  , Sm = is.ERR_MULTIPLE_CALLBACK
  , km = is.ERR_TRANSFORM_ALREADY_TRANSFORMING
  , xm = is.ERR_TRANSFORM_WITH_LENGTH_0
  , po = wr();
function Am(e, t) {
    var n = this._transformState;
    n.transforming = !1;
    var r = n.writecb;
    if (r === null)
        return this.emit("error", new Sm);
    n.writechunk = null,
    n.writecb = null,
    t != null && this.push(t),
    r(e);
    var i = this._readableState;
    i.reading = !1,
    (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
}
function Yt(e) {
    if (!(this instanceof Yt))
        return new Yt(e);
    po.call(this, e),
    this._transformState = {
        afterTransform: Am.bind(this),
        needTransform: !1,
        transforming: !1,
        writecb: null,
        writechunk: null,
        writeencoding: null
    },
    this._readableState.needReadable = !0,
    this._readableState.sync = !1,
    e && (typeof e.transform == "function" && (this._transform = e.transform),
    typeof e.flush == "function" && (this._flush = e.flush)),
    this.on("prefinish", Mm)
}
function Mm() {
    var e = this;
    typeof this._flush != "function" || this._readableState.destroyed ? od(this, null, null) : this._flush(function(t, n) {
        od(e, t, n)
    })
}
function od(e, t, n) {
    if (t)
        return e.emit("error", t);
    if (n != null && e.push(n),
    e._writableState.length)
        throw new xm;
    if (e._transformState.transforming)
        throw new km;
    return e.push(null)
}
bi(Yt, po),
Yt.prototype.push = function(e, t) {
    return this._transformState.needTransform = !1,
    po.prototype.push.call(this, e, t)
}
,
Yt.prototype._transform = function(e, t, n) {
    n(new Cm("_transform()"))
}
,
Yt.prototype._write = function(e, t, n) {
    var r = this._transformState;
    if (r.writecb = n,
    r.writechunk = e,
    r.writeencoding = t,
    !r.transforming) {
        var i = this._readableState;
        (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }
}
,
Yt.prototype._read = function(e) {
    var t = this._transformState;
    t.writechunk === null || t.transforming ? t.needTransform = !0 : (t.transforming = !0,
    this._transform(t.writechunk, t.writeencoding, t.afterTransform))
}
,
Yt.prototype._destroy = function(e, t) {
    po.prototype._destroy.call(this, e, function(n) {
        t(n)
    })
}
;
var oa, Tm = hi, r0 = n0;
function hi(e) {
    if (!(this instanceof hi))
        return new hi(e);
    r0.call(this, e)
}
bi(hi, r0),
hi.prototype._transform = function(e, t, n) {
    n(null, e)
}
;
var i0 = qn.codes
  , Rm = i0.ERR_MISSING_ARGS
  , Om = i0.ERR_STREAM_DESTROYED;
function sd(e) {
    if (e)
        throw e
}
function ad(e) {
    e()
}
function Lm(e, t) {
    return e.pipe(t)
}
var Pm = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    var r, i = function(s) {
        return s.length ? typeof s[s.length - 1] != "function" ? sd : s.pop() : sd
    }(t);
    if (Array.isArray(t[0]) && (t = t[0]),
    t.length < 2)
        throw new Rm("streams");
    var o = t.map(function(s, a) {
        var c = a < t.length - 1;
        return function(l, u, d, h) {
            h = function(m) {
                var v = !1;
                return function() {
                    v || (v = !0,
                    m.apply(void 0, arguments))
                }
            }(h);
            var f = !1;
            l.on("close", function() {
                f = !0
            }),
            oa === void 0 && (oa = kc),
            oa(l, {
                readable: u,
                writable: d
            }, function(m) {
                if (m)
                    return h(m);
                f = !0,
                h()
            });
            var g = !1;
            return function(m) {
                if (!f && !g)
                    return g = !0,
                    function(v) {
                        return v.setHeader && typeof v.abort == "function"
                    }(l) ? l.abort() : typeof l.destroy == "function" ? l.destroy() : void h(m || new Om("pipe"))
            }
        }(s, c, a > 0, function(l) {
            r || (r = l),
            l && o.forEach(ad),
            c || (o.forEach(ad),
            i(r))
        })
    });
    return t.reduce(Lm)
};
(function(e, t) {
    (t = ja.exports = t0()).Stream = t,
    t.Readable = t,
    t.Writable = e0(),
    t.Duplex = wr(),
    t.Transform = n0,
    t.PassThrough = Tm,
    t.finished = kc,
    t.pipeline = Pm
}
)(0, ja.exports);
var Er = ja.exports;
function Im(e={}) {
    let t = {}
      , n = new Er.Duplex({
        objectMode: !0,
        read: () => {}
        ,
        write: function(o, s, a) {
            let c = null;
            try {
                o.id ? function(l) {
                    let {id: u} = l;
                    if (u === null)
                        return;
                    let d = t[u];
                    if (!d)
                        return void console.warn(`StreamMiddleware - Unknown response id "${u}"`);
                    delete t[u],
                    Object.assign(d.res, l),
                    setTimeout(d.end)
                }(o) : function(l) {
                    e?.retryOnMessage && l.method === e.retryOnMessage && Object.values(t).forEach( ({req: u, retryCount: d=0}) => {
                        if (!u.id)
                            return;
                        if (d >= 3)
                            throw new Error(`StreamMiddleware - Retry limit exceeded for request id "${u.id}"`);
                        let h = t[u.id];
                        h && (h.retryCount = d + 1),
                        i(u)
                    }
                    ),
                    r.emit("notification", l)
                }(o)
            } catch (l) {
                c = l
            }
            a(c)
        }
    })
      , r = new Pf;
    return {
        events: r,
        middleware: (o, s, a, c) => {
            t[o.id] = {
                req: o,
                res: s,
                next: a,
                end: c
            },
            i(o)
        }
        ,
        stream: n
    };
    function i(o) {
        n.push(o)
    }
}
var Uo = {}
  , Ka = {
    exports: {}
}
  , Nm = function e(t, n) {
    if (t && n)
        return e(t)(n);
    if (typeof t != "function")
        throw new TypeError("need wrapper function");
    return Object.keys(t).forEach(function(i) {
        r[i] = t[i]
    }),
    r;
    function r() {
        for (var i = new Array(arguments.length), o = 0; o < i.length; o++)
            i[o] = arguments[o];
        var s = t.apply(this, i)
          , a = i[i.length - 1];
        return typeof s == "function" && s !== a && Object.keys(a).forEach(function(c) {
            s[c] = a[c]
        }),
        s
    }
}
  , cd = Nm;
function Ji(e) {
    var t = function() {
        return t.called ? t.value : (t.called = !0,
        t.value = e.apply(this, arguments))
    };
    return t.called = !1,
    t
}
function ld(e) {
    var t = function() {
        if (t.called)
            throw new Error(t.onceError);
        return t.called = !0,
        t.value = e.apply(this, arguments)
    }
      , n = e.name || "Function wrapped with `once`";
    return t.onceError = n + " shouldn't be called more than once",
    t.called = !1,
    t
}
Ka.exports = cd(Ji),
Ka.exports.strict = cd(ld),
Ji.proto = Ji(function() {
    Object.defineProperty(Function.prototype, "once", {
        value: function() {
            return Ji(this)
        },
        configurable: !0
    }),
    Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
            return ld(this)
        },
        configurable: !0
    })
});
var Bm = Ka.exports
  , Ho = {};
Object.defineProperty(Ho, "__esModule", {
    value: !0
}),
Ho.Substream = void 0;
var Dm = Er
  , Ua = class extends Dm.Duplex {
    constructor({parent: t, name: n}) {
        super({
            objectMode: !0
        }),
        this._parent = t,
        this._name = n
    }
    _read() {}
    _write(t, n, r) {
        this._parent.push({
            name: this._name,
            data: t
        }),
        r()
    }
}
;
Ho.Substream = Ua;
var $m = Et && Et.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
;
Object.defineProperty(Uo, "__esModule", {
    value: !0
}),
Uo.ObjectMultiplex = void 0;
var sa = Er
  , jm = $m(Bm)
  , Km = Ho
  , ud = Symbol("IGNORE_SUBSTREAM")
  , Um = class extends sa.Duplex {
    constructor(e={}) {
        super(Object.assign(Object.assign({}, e), {
            objectMode: !0
        })),
        this._substreams = {}
    }
    createStream(e) {
        if (this.destroyed)
            throw new Error(`ObjectMultiplex - parent stream for name "${e}" already destroyed`);
        if (this._readableState.ended || this._writableState.ended)
            throw new Error(`ObjectMultiplex - parent stream for name "${e}" already ended`);
        if (!e)
            throw new Error("ObjectMultiplex - name must not be empty");
        if (this._substreams[e])
            throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
        let t = new Km.Substream({
            parent: this,
            name: e
        });
        return this._substreams[e] = t,
        function(n, r) {
            let i = (0,
            jm.default)(r);
            (0,
            sa.finished)(n, {
                readable: !1
            }, i),
            (0,
            sa.finished)(n, {
                writable: !1
            }, i)
        }(this, n => t.destroy(n || void 0)),
        t
    }
    ignoreStream(e) {
        if (!e)
            throw new Error("ObjectMultiplex - name must not be empty");
        if (this._substreams[e])
            throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
        this._substreams[e] = ud
    }
    _read() {}
    _write(e, t, n) {
        let {name: r, data: i} = e;
        if (!r)
            return console.warn(`ObjectMultiplex - malformed chunk without name "${e}"`),
            n();
        let o = this._substreams[r];
        return o ? (o !== ud && o.push(i),
        n()) : (console.warn(`ObjectMultiplex - orphaned data for stream "${r}"`),
        n())
    }
}
;
Uo.ObjectMultiplex = Um;
var Hm = Qo(Uo.ObjectMultiplex)
  , Tt = e => e !== null && typeof e == "object" && typeof e.pipe == "function";
Tt.writable = e => Tt(e) && e.writable !== !1 && typeof e._write == "function" && typeof e._writableState == "object",
Tt.readable = e => Tt(e) && e.readable !== !1 && typeof e._read == "function" && typeof e._readableState == "object",
Tt.duplex = e => Tt.writable(e) && Tt.readable(e),
Tt.transform = e => Tt.duplex(e) && typeof e._transform == "function";
var Rt, Fm = Tt, zm = class extends am {
    constructor(e, {jsonRpcStreamName: t, logger: n=console, maxEventListeners: r=100, rpcMiddleware: i=[]}) {
        if (super({
            logger: n,
            maxEventListeners: r,
            rpcMiddleware: i
        }),
        !Fm.duplex(e))
            throw new Error(Oe.errors.invalidDuplexStream());
        this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
        let o = new Hm;
        Er.pipeline(e, o, e, this._handleStreamDisconnect.bind(this, "MetaMask")),
        this._jsonRpcConnection = Im({
            retryOnMessage: "METAMASK_EXTENSION_CONNECT_CAN_RETRY"
        }),
        Er.pipeline(this._jsonRpcConnection.stream, o.createStream(t), this._jsonRpcConnection.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")),
        this._rpcEngine.push(this._jsonRpcConnection.middleware),
        this._jsonRpcConnection.events.on("notification", s => {
            let {method: a, params: c} = s;
            a === "metamask_accountsChanged" ? this._handleAccountsChanged(c) : a === "metamask_unlockStateChanged" ? this._handleUnlockStateChanged(c) : a === "metamask_chainChanged" ? this._handleChainChanged(c) : If.includes(a) ? this.emit("message", {
                type: a,
                data: c
            }) : a === "METAMASK_STREAM_FAILURE" && e.destroy(new Error(Oe.errors.permanentlyDisconnected()))
        }
        )
    }
    _initializeStateAsync() {
        return we(this, null, function*() {
            let e;
            try {
                e = yield this.request({
                    method: "metamask_getProviderState"
                })
            } catch (t) {
                this._log.error("MetaMask: Failed to get initial state. Please report this bug.", t)
            }
            this._initializeState(e)
        })
    }
    _handleStreamDisconnect(e, t) {
        let n = `MetaMask: Lost connection to "${e}".`;
        t?.stack && (n += `
${t.stack}`),
        this._log.warn(n),
        this.listenerCount("error") > 0 && this.emit("error", n),
        this._handleDisconnect(!1, t ? t.message : void 0)
    }
    _handleChainChanged({chainId: e, networkVersion: t}={}) {
        Nf(e) && (n => !!n && typeof n == "string")(t) ? t === "loading" ? this._handleDisconnect(!0) : super._handleChainChanged({
            chainId: e
        }) : this._log.error(Oe.errors.invalidNetworkParams(), {
            chainId: e,
            networkVersion: t
        })
    }
}
, qm = class extends zm {
    constructor(e, {jsonRpcStreamName: t="metamask-provider", logger: n=console, maxEventListeners: r=100, shouldSendMetadata: i}={}) {
        if (super(e, {
            jsonRpcStreamName: t,
            logger: n,
            maxEventListeners: r,
            rpcMiddleware: em(n)
        }),
        this._sentWarnings = {
            chainId: !1,
            networkVersion: !1,
            selectedAddress: !1,
            enable: !1,
            experimentalMethods: !1,
            send: !1,
            events: {
                close: !1,
                data: !1,
                networkChanged: !1,
                notification: !1
            }
        },
        Da(this, Rt, void 0),
        this._initializeStateAsync(),
        Gt(this, Rt, null),
        this.isMetaMask = !0,
        this._sendSync = this._sendSync.bind(this),
        this.enable = this.enable.bind(this),
        this.send = this.send.bind(this),
        this.sendAsync = this.sendAsync.bind(this),
        this._warnOfDeprecation = this._warnOfDeprecation.bind(this),
        this._metamask = this._getExperimentalApi(),
        this._jsonRpcConnection.events.on("notification", o => {
            let {method: s} = o;
            If.includes(s) && (this.emit("data", o),
            this.emit("notification", o.params.result))
        }
        ),
        i)
            if (document.readyState === "complete")
                Uu(this._rpcEngine, this._log);
            else {
                let o = () => {
                    Uu(this._rpcEngine, this._log),
                    window.removeEventListener("DOMContentLoaded", o)
                }
                ;
                window.addEventListener("DOMContentLoaded", o)
            }
    }
    get chainId() {
        return this._sentWarnings.chainId || (this._log.warn(Oe.warnings.chainIdDeprecation),
        this._sentWarnings.chainId = !0),
        super.chainId
    }
    get networkVersion() {
        return this._sentWarnings.networkVersion || (this._log.warn(Oe.warnings.networkVersionDeprecation),
        this._sentWarnings.networkVersion = !0),
        It(this, Rt)
    }
    get selectedAddress() {
        return this._sentWarnings.selectedAddress || (this._log.warn(Oe.warnings.selectedAddressDeprecation),
        this._sentWarnings.selectedAddress = !0),
        super.selectedAddress
    }
    sendAsync(e, t) {
        this._rpcRequest(e, t)
    }
    addListener(e, t) {
        return this._warnOfDeprecation(e),
        super.addListener(e, t)
    }
    on(e, t) {
        return this._warnOfDeprecation(e),
        super.on(e, t)
    }
    once(e, t) {
        return this._warnOfDeprecation(e),
        super.once(e, t)
    }
    prependListener(e, t) {
        return this._warnOfDeprecation(e),
        super.prependListener(e, t)
    }
    prependOnceListener(e, t) {
        return this._warnOfDeprecation(e),
        super.prependOnceListener(e, t)
    }
    _handleDisconnect(e, t) {
        super._handleDisconnect(e, t),
        It(this, Rt) && !e && Gt(this, Rt, null)
    }
    _warnOfDeprecation(e) {
        this._sentWarnings?.events[e] === !1 && (this._log.warn(Oe.warnings.events[e]),
        this._sentWarnings.events[e] = !0)
    }
    enable() {
        return we(this, null, function*() {
            return this._sentWarnings.enable || (this._log.warn(Oe.warnings.enableDeprecation),
            this._sentWarnings.enable = !0),
            new Promise( (e, t) => {
                try {
                    this._rpcRequest({
                        method: "eth_requestAccounts",
                        params: []
                    }, ho(e, t))
                } catch (n) {
                    t(n)
                }
            }
            )
        })
    }
    send(e, t) {
        return this._sentWarnings.send || (this._log.warn(Oe.warnings.sendDeprecation),
        this._sentWarnings.send = !0),
        typeof e != "string" || t && !Array.isArray(t) ? e && typeof e == "object" && typeof t == "function" ? this._rpcRequest(e, t) : this._sendSync(e) : new Promise( (n, r) => {
            try {
                this._rpcRequest({
                    method: e,
                    params: t
                }, ho(n, r, !1))
            } catch (i) {
                r(i)
            }
        }
        )
    }
    _sendSync(e) {
        let t;
        switch (e.method) {
        case "eth_accounts":
            t = this.selectedAddress ? [this.selectedAddress] : [];
            break;
        case "eth_coinbase":
            t = this.selectedAddress ?? null;
            break;
        case "eth_uninstallFilter":
            this._rpcRequest(e, Bf),
            t = !0;
            break;
        case "net_version":
            t = It(this, Rt) ?? null;
            break;
        default:
            throw new Error(Oe.errors.unsupportedSync(e.method))
        }
        return {
            id: e.id,
            jsonrpc: e.jsonrpc,
            result: t
        }
    }
    _getExperimentalApi() {
        return new Proxy({
            isUnlocked: () => we(this, null, function*() {
                return this._state.initialized || (yield new Promise(e => {
                    this.on("_initialized", () => e())
                }
                )),
                this._state.isUnlocked
            }),
            requestBatch: e => we(this, null, function*() {
                if (!Array.isArray(e))
                    throw Yr({
                        message: "Batch requests must be made with an array of request objects.",
                        data: e
                    });
                return new Promise( (t, n) => {
                    this._rpcRequest(e, ho(t, n))
                }
                )
            })
        },{
            get: (e, t, ...n) => (this._sentWarnings.experimentalMethods || (this._log.warn(Oe.warnings.experimentalMethods),
            this._sentWarnings.experimentalMethods = !0),
            Reflect.get(e, t, ...n))
        })
    }
    _handleChainChanged({chainId: e, networkVersion: t}={}) {
        super._handleChainChanged({
            chainId: e,
            networkVersion: t
        }),
        this._state.isConnected && t !== It(this, Rt) && (Gt(this, Rt, t),
        this._state.initialized && this.emit("networkChanged", It(this, Rt)))
    }
}
;
Rt = new WeakMap;
var Y = (0,
We.default)("MM_SDK");
Y.color = "#FFAC1C";
var o0 = {}
  , kn = {};
Object.defineProperty(kn, "__esModule", {
    value: !0
}),
kn.EthereumProviderError = kn.EthereumRpcError = void 0;
var Vm = Af
  , Fo = class extends Error {
    constructor(t, n, r) {
        if (!Number.isInteger(t))
            throw new Error('"code" must be an integer.');
        if (!n || typeof n != "string")
            throw new Error('"message" must be a nonempty string.');
        super(n),
        this.code = t,
        r !== void 0 && (this.data = r)
    }
    serialize() {
        let t = {
            code: this.code,
            message: this.message
        };
        return this.data !== void 0 && (t.data = this.data),
        this.stack && (t.stack = this.stack),
        t
    }
    toString() {
        return Vm.default(this.serialize(), Wm, 2)
    }
}
;
kn.EthereumRpcError = Fo;
function Wm(e, t) {
    if (t !== "[Circular]")
        return t
}
kn.EthereumProviderError = class extends Fo {
    constructor(e, t, n) {
        if (!function(r) {
            return Number.isInteger(r) && r >= 1e3 && r <= 4999
        }(e))
            throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(e, t, n)
    }
}
;
var xc = {}
  , wn = {};
Object.defineProperty(wn, "__esModule", {
    value: !0
}),
wn.errorValues = wn.errorCodes = void 0,
wn.errorCodes = {
    rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
    }
},
wn.errorValues = {
    "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
    },
    "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
    },
    "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
    },
    "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
    },
    "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
    },
    "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
    },
    "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
    },
    "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
    },
    "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
    },
    4001: {
        standard: "EIP-1193",
        message: "User rejected the request."
    },
    4100: {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
    },
    4900: {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
    },
    4901: {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
    }
},
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.serializeError = e.isValidCode = e.getMessageFromCode = e.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    let t = wn
      , n = kn
      , r = t.errorCodes.rpc.internal
      , i = "Unspecified error message. This is a bug, please report it."
      , o = {
        code: r,
        message: s(r)
    };
    function s(d, h=i) {
        if (Number.isInteger(d)) {
            let f = d.toString();
            if (u(t.errorValues, f))
                return t.errorValues[f].message;
            if (c(d))
                return e.JSON_RPC_SERVER_ERROR_MESSAGE
        }
        return h
    }
    function a(d) {
        if (!Number.isInteger(d))
            return !1;
        let h = d.toString();
        return !!t.errorValues[h] || !!c(d)
    }
    function c(d) {
        return d >= -32099 && d <= -32e3
    }
    function l(d) {
        return d && typeof d == "object" && !Array.isArray(d) ? Object.assign({}, d) : d
    }
    function u(d, h) {
        return Object.prototype.hasOwnProperty.call(d, h)
    }
    e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.",
    e.getMessageFromCode = s,
    e.isValidCode = a,
    e.serializeError = function(d, {fallbackError: h=o, shouldIncludeStack: f=!1}={}) {
        var g, m;
        if (!h || !Number.isInteger(h.code) || typeof h.message != "string")
            throw new Error("Must provide fallback error with integer number code and string message.");
        if (d instanceof n.EthereumRpcError)
            return d.serialize();
        let v = {};
        if (d && typeof d == "object" && !Array.isArray(d) && u(d, "code") && a(d.code)) {
            let S = d;
            v.code = S.code,
            S.message && typeof S.message == "string" ? (v.message = S.message,
            u(S, "data") && (v.data = S.data)) : (v.message = s(v.code),
            v.data = {
                originalError: l(d)
            })
        } else {
            v.code = h.code;
            let S = (g = d) === null || g === void 0 ? void 0 : g.message;
            v.message = S && typeof S == "string" ? S : h.message,
            v.data = {
                originalError: l(d)
            }
        }
        let p = (m = d) === null || m === void 0 ? void 0 : m.stack;
        return f && d && p && typeof p == "string" && (v.stack = p),
        v
    }
}(xc);
var zo = {};
Object.defineProperty(zo, "__esModule", {
    value: !0
}),
zo.ethErrors = void 0;
var Ac = kn
  , s0 = xc
  , He = wn;
function mt(e, t) {
    let[n,r] = a0(t);
    return new Ac.EthereumRpcError(e,n || s0.getMessageFromCode(e),r)
}
function Ur(e, t) {
    let[n,r] = a0(t);
    return new Ac.EthereumProviderError(e,n || s0.getMessageFromCode(e),r)
}
function a0(e) {
    if (e) {
        if (typeof e == "string")
            return [e];
        if (typeof e == "object" && !Array.isArray(e)) {
            let {message: t, data: n} = e;
            if (t && typeof t != "string")
                throw new Error("Must specify string message.");
            return [t || void 0, n]
        }
    }
    return []
}
zo.ethErrors = {
    rpc: {
        parse: e => mt(He.errorCodes.rpc.parse, e),
        invalidRequest: e => mt(He.errorCodes.rpc.invalidRequest, e),
        invalidParams: e => mt(He.errorCodes.rpc.invalidParams, e),
        methodNotFound: e => mt(He.errorCodes.rpc.methodNotFound, e),
        internal: e => mt(He.errorCodes.rpc.internal, e),
        server: e => {
            if (!e || typeof e != "object" || Array.isArray(e))
                throw new Error("Ethereum RPC Server errors must provide single object argument.");
            let {code: t} = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
                throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return mt(t, e)
        }
        ,
        invalidInput: e => mt(He.errorCodes.rpc.invalidInput, e),
        resourceNotFound: e => mt(He.errorCodes.rpc.resourceNotFound, e),
        resourceUnavailable: e => mt(He.errorCodes.rpc.resourceUnavailable, e),
        transactionRejected: e => mt(He.errorCodes.rpc.transactionRejected, e),
        methodNotSupported: e => mt(He.errorCodes.rpc.methodNotSupported, e),
        limitExceeded: e => mt(He.errorCodes.rpc.limitExceeded, e)
    },
    provider: {
        userRejectedRequest: e => Ur(He.errorCodes.provider.userRejectedRequest, e),
        unauthorized: e => Ur(He.errorCodes.provider.unauthorized, e),
        unsupportedMethod: e => Ur(He.errorCodes.provider.unsupportedMethod, e),
        disconnected: e => Ur(He.errorCodes.provider.disconnected, e),
        chainDisconnected: e => Ur(He.errorCodes.provider.chainDisconnected, e),
        custom: e => {
            if (!e || typeof e != "object" || Array.isArray(e))
                throw new Error("Ethereum Provider custom errors must provide single object argument.");
            let {code: t, message: n, data: r} = e;
            if (!n || typeof n != "string")
                throw new Error('"message" must be a nonempty string');
            return new Ac.EthereumProviderError(t,n,r)
        }
    }
},
function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.getMessageFromCode = e.serializeError = e.EthereumProviderError = e.EthereumRpcError = e.ethErrors = e.errorCodes = void 0;
    let t = kn;
    Object.defineProperty(e, "EthereumRpcError", {
        enumerable: !0,
        get: function() {
            return t.EthereumRpcError
        }
    }),
    Object.defineProperty(e, "EthereumProviderError", {
        enumerable: !0,
        get: function() {
            return t.EthereumProviderError
        }
    });
    let n = xc;
    Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function() {
            return n.serializeError
        }
    }),
    Object.defineProperty(e, "getMessageFromCode", {
        enumerable: !0,
        get: function() {
            return n.getMessageFromCode
        }
    });
    let r = zo;
    Object.defineProperty(e, "ethErrors", {
        enumerable: !0,
        get: function() {
            return r.ethErrors
        }
    });
    let i = wn;
    Object.defineProperty(e, "errorCodes", {
        enumerable: !0,
        get: function() {
            return i.errorCodes
        }
    })
}(o0);
var c0 = {
    exports: {}
};
c0.exports = function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    return n.m = e,
    n.c = t,
    n.d = function(r, i, o) {
        n.o(r, i) || Object.defineProperty(r, i, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(r) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(r, i) {
        if (1 & i && (r = n(r)),
        8 & i || 4 & i && typeof r == "object" && r && r.__esModule)
            return r;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: r
        }),
        2 & i && typeof r != "string")
            for (var s in r)
                n.d(o, s, function(a) {
                    return r[a]
                }
                .bind(null, s));
        return o
    }
    ,
    n.n = function(r) {
        var i = r && r.__esModule ? function() {
            return r.default
        }
        : function() {
            return r
        }
        ;
        return n.d(i, "a", i),
        i
    }
    ,
    n.o = function(r, i) {
        return Object.prototype.hasOwnProperty.call(r, i)
    }
    ,
    n.p = "",
    n(n.s = 90)
}({
    17: function(e, t, n) {
        t.__esModule = !0,
        t.default = void 0;
        var r = n(18)
          , i = function() {
            function o() {}
            return o.getFirstMatch = function(s, a) {
                var c = a.match(s);
                return c && c.length > 0 && c[1] || ""
            }
            ,
            o.getSecondMatch = function(s, a) {
                var c = a.match(s);
                return c && c.length > 1 && c[2] || ""
            }
            ,
            o.matchAndReturnConst = function(s, a, c) {
                if (s.test(a))
                    return c
            }
            ,
            o.getWindowsVersionName = function(s) {
                switch (s) {
                case "NT":
                    return "NT";
                case "XP":
                case "NT 5.1":
                    return "XP";
                case "NT 5.0":
                    return "2000";
                case "NT 5.2":
                    return "2003";
                case "NT 6.0":
                    return "Vista";
                case "NT 6.1":
                    return "7";
                case "NT 6.2":
                    return "8";
                case "NT 6.3":
                    return "8.1";
                case "NT 10.0":
                    return "10";
                default:
                    return
                }
            }
            ,
            o.getMacOSVersionName = function(s) {
                var a = s.split(".").splice(0, 2).map(function(c) {
                    return parseInt(c, 10) || 0
                });
                if (a.push(0),
                a[0] === 10)
                    switch (a[1]) {
                    case 5:
                        return "Leopard";
                    case 6:
                        return "Snow Leopard";
                    case 7:
                        return "Lion";
                    case 8:
                        return "Mountain Lion";
                    case 9:
                        return "Mavericks";
                    case 10:
                        return "Yosemite";
                    case 11:
                        return "El Capitan";
                    case 12:
                        return "Sierra";
                    case 13:
                        return "High Sierra";
                    case 14:
                        return "Mojave";
                    case 15:
                        return "Catalina";
                    default:
                        return
                    }
            }
            ,
            o.getAndroidVersionName = function(s) {
                var a = s.split(".").splice(0, 2).map(function(c) {
                    return parseInt(c, 10) || 0
                });
                if (a.push(0),
                !(a[0] === 1 && a[1] < 5))
                    return a[0] === 1 && a[1] < 6 ? "Cupcake" : a[0] === 1 && a[1] >= 6 ? "Donut" : a[0] === 2 && a[1] < 2 ? "Eclair" : a[0] === 2 && a[1] === 2 ? "Froyo" : a[0] === 2 && a[1] > 2 ? "Gingerbread" : a[0] === 3 ? "Honeycomb" : a[0] === 4 && a[1] < 1 ? "Ice Cream Sandwich" : a[0] === 4 && a[1] < 4 ? "Jelly Bean" : a[0] === 4 && a[1] >= 4 ? "KitKat" : a[0] === 5 ? "Lollipop" : a[0] === 6 ? "Marshmallow" : a[0] === 7 ? "Nougat" : a[0] === 8 ? "Oreo" : a[0] === 9 ? "Pie" : void 0
            }
            ,
            o.getVersionPrecision = function(s) {
                return s.split(".").length
            }
            ,
            o.compareVersions = function(s, a, c) {
                c === void 0 && (c = !1);
                var l = o.getVersionPrecision(s)
                  , u = o.getVersionPrecision(a)
                  , d = Math.max(l, u)
                  , h = 0
                  , f = o.map([s, a], function(g) {
                    var m = d - o.getVersionPrecision(g)
                      , v = g + new Array(m + 1).join(".0");
                    return o.map(v.split("."), function(p) {
                        return new Array(20 - p.length).join("0") + p
                    }).reverse()
                });
                for (c && (h = d - Math.min(l, u)),
                d -= 1; d >= h; ) {
                    if (f[0][d] > f[1][d])
                        return 1;
                    if (f[0][d] === f[1][d]) {
                        if (d === h)
                            return 0;
                        d -= 1
                    } else if (f[0][d] < f[1][d])
                        return -1
                }
            }
            ,
            o.map = function(s, a) {
                var c, l = [];
                if (Array.prototype.map)
                    return Array.prototype.map.call(s, a);
                for (c = 0; c < s.length; c += 1)
                    l.push(a(s[c]));
                return l
            }
            ,
            o.find = function(s, a) {
                var c, l;
                if (Array.prototype.find)
                    return Array.prototype.find.call(s, a);
                for (c = 0,
                l = s.length; c < l; c += 1) {
                    var u = s[c];
                    if (a(u, c))
                        return u
                }
            }
            ,
            o.assign = function(s) {
                for (var a, c, l = s, u = arguments.length, d = new Array(u > 1 ? u - 1 : 0), h = 1; h < u; h++)
                    d[h - 1] = arguments[h];
                if (Object.assign)
                    return Object.assign.apply(Object, [s].concat(d));
                var f = function() {
                    var g = d[a];
                    typeof g == "object" && g !== null && Object.keys(g).forEach(function(m) {
                        l[m] = g[m]
                    })
                };
                for (a = 0,
                c = d.length; a < c; a += 1)
                    f();
                return s
            }
            ,
            o.getBrowserAlias = function(s) {
                return r.BROWSER_ALIASES_MAP[s]
            }
            ,
            o.getBrowserTypeByAlias = function(s) {
                return r.BROWSER_MAP[s] || ""
            }
            ,
            o
        }();
        t.default = i,
        e.exports = t.default
    },
    18: function(e, t, n) {
        t.__esModule = !0,
        t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0,
        t.BROWSER_ALIASES_MAP = {
            "Amazon Silk": "amazon_silk",
            "Android Browser": "android",
            Bada: "bada",
            BlackBerry: "blackberry",
            Chrome: "chrome",
            Chromium: "chromium",
            Electron: "electron",
            Epiphany: "epiphany",
            Firefox: "firefox",
            Focus: "focus",
            Generic: "generic",
            "Google Search": "google_search",
            Googlebot: "googlebot",
            "Internet Explorer": "ie",
            "K-Meleon": "k_meleon",
            Maxthon: "maxthon",
            "Microsoft Edge": "edge",
            "MZ Browser": "mz",
            "NAVER Whale Browser": "naver",
            Opera: "opera",
            "Opera Coast": "opera_coast",
            PhantomJS: "phantomjs",
            Puffin: "puffin",
            QupZilla: "qupzilla",
            QQ: "qq",
            QQLite: "qqlite",
            Safari: "safari",
            Sailfish: "sailfish",
            "Samsung Internet for Android": "samsung_internet",
            SeaMonkey: "seamonkey",
            Sleipnir: "sleipnir",
            Swing: "swing",
            Tizen: "tizen",
            "UC Browser": "uc",
            Vivaldi: "vivaldi",
            "WebOS Browser": "webos",
            WeChat: "wechat",
            "Yandex Browser": "yandex",
            Roku: "roku"
        },
        t.BROWSER_MAP = {
            amazon_silk: "Amazon Silk",
            android: "Android Browser",
            bada: "Bada",
            blackberry: "BlackBerry",
            chrome: "Chrome",
            chromium: "Chromium",
            electron: "Electron",
            epiphany: "Epiphany",
            firefox: "Firefox",
            focus: "Focus",
            generic: "Generic",
            googlebot: "Googlebot",
            google_search: "Google Search",
            ie: "Internet Explorer",
            k_meleon: "K-Meleon",
            maxthon: "Maxthon",
            edge: "Microsoft Edge",
            mz: "MZ Browser",
            naver: "NAVER Whale Browser",
            opera: "Opera",
            opera_coast: "Opera Coast",
            phantomjs: "PhantomJS",
            puffin: "Puffin",
            qupzilla: "QupZilla",
            qq: "QQ Browser",
            qqlite: "QQ Browser Lite",
            safari: "Safari",
            sailfish: "Sailfish",
            samsung_internet: "Samsung Internet for Android",
            seamonkey: "SeaMonkey",
            sleipnir: "Sleipnir",
            swing: "Swing",
            tizen: "Tizen",
            uc: "UC Browser",
            vivaldi: "Vivaldi",
            webos: "WebOS Browser",
            wechat: "WeChat",
            yandex: "Yandex Browser"
        },
        t.PLATFORMS_MAP = {
            tablet: "tablet",
            mobile: "mobile",
            desktop: "desktop",
            tv: "tv"
        },
        t.OS_MAP = {
            WindowsPhone: "Windows Phone",
            Windows: "Windows",
            MacOS: "macOS",
            iOS: "iOS",
            Android: "Android",
            WebOS: "WebOS",
            BlackBerry: "BlackBerry",
            Bada: "Bada",
            Tizen: "Tizen",
            Linux: "Linux",
            ChromeOS: "Chrome OS",
            PlayStation4: "PlayStation 4",
            Roku: "Roku"
        },
        t.ENGINE_MAP = {
            EdgeHTML: "EdgeHTML",
            Blink: "Blink",
            Trident: "Trident",
            Presto: "Presto",
            Gecko: "Gecko",
            WebKit: "WebKit"
        }
    },
    90: function(e, t, n) {
        t.__esModule = !0,
        t.default = void 0;
        var r, i = (r = n(91)) && r.__esModule ? r : {
            default: r
        }, o = n(18);
        function s(c, l) {
            for (var u = 0; u < l.length; u++) {
                var d = l[u];
                d.enumerable = d.enumerable || !1,
                d.configurable = !0,
                "value"in d && (d.writable = !0),
                Object.defineProperty(c, d.key, d)
            }
        }
        var a = function() {
            function c() {}
            var l, u, d;
            return c.getParser = function(h, f) {
                if (f === void 0 && (f = !1),
                typeof h != "string")
                    throw new Error("UserAgent should be a string");
                return new i.default(h,f)
            }
            ,
            c.parse = function(h) {
                return new i.default(h).getResult()
            }
            ,
            l = c,
            d = [{
                key: "BROWSER_MAP",
                get: function() {
                    return o.BROWSER_MAP
                }
            }, {
                key: "ENGINE_MAP",
                get: function() {
                    return o.ENGINE_MAP
                }
            }, {
                key: "OS_MAP",
                get: function() {
                    return o.OS_MAP
                }
            }, {
                key: "PLATFORMS_MAP",
                get: function() {
                    return o.PLATFORMS_MAP
                }
            }],
            (u = null) && s(l.prototype, u),
            d && s(l, d),
            c
        }();
        t.default = a,
        e.exports = t.default
    },
    91: function(e, t, n) {
        t.__esModule = !0,
        t.default = void 0;
        var r = c(n(92))
          , i = c(n(93))
          , o = c(n(94))
          , s = c(n(95))
          , a = c(n(17));
        function c(u) {
            return u && u.__esModule ? u : {
                default: u
            }
        }
        var l = function() {
            function u(h, f) {
                if (f === void 0 && (f = !1),
                h == null || h === "")
                    throw new Error("UserAgent parameter can't be empty");
                this._ua = h,
                this.parsedResult = {},
                f !== !0 && this.parse()
            }
            var d = u.prototype;
            return d.getUA = function() {
                return this._ua
            }
            ,
            d.test = function(h) {
                return h.test(this._ua)
            }
            ,
            d.parseBrowser = function() {
                var h = this;
                this.parsedResult.browser = {};
                var f = a.default.find(r.default, function(g) {
                    if (typeof g.test == "function")
                        return g.test(h);
                    if (g.test instanceof Array)
                        return g.test.some(function(m) {
                            return h.test(m)
                        });
                    throw new Error("Browser's test function is not valid")
                });
                return f && (this.parsedResult.browser = f.describe(this.getUA())),
                this.parsedResult.browser
            }
            ,
            d.getBrowser = function() {
                return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
            }
            ,
            d.getBrowserName = function(h) {
                return h ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
            }
            ,
            d.getBrowserVersion = function() {
                return this.getBrowser().version
            }
            ,
            d.getOS = function() {
                return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
            }
            ,
            d.parseOS = function() {
                var h = this;
                this.parsedResult.os = {};
                var f = a.default.find(i.default, function(g) {
                    if (typeof g.test == "function")
                        return g.test(h);
                    if (g.test instanceof Array)
                        return g.test.some(function(m) {
                            return h.test(m)
                        });
                    throw new Error("Browser's test function is not valid")
                });
                return f && (this.parsedResult.os = f.describe(this.getUA())),
                this.parsedResult.os
            }
            ,
            d.getOSName = function(h) {
                var f = this.getOS().name;
                return h ? String(f).toLowerCase() || "" : f || ""
            }
            ,
            d.getOSVersion = function() {
                return this.getOS().version
            }
            ,
            d.getPlatform = function() {
                return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
            }
            ,
            d.getPlatformType = function(h) {
                h === void 0 && (h = !1);
                var f = this.getPlatform().type;
                return h ? String(f).toLowerCase() || "" : f || ""
            }
            ,
            d.parsePlatform = function() {
                var h = this;
                this.parsedResult.platform = {};
                var f = a.default.find(o.default, function(g) {
                    if (typeof g.test == "function")
                        return g.test(h);
                    if (g.test instanceof Array)
                        return g.test.some(function(m) {
                            return h.test(m)
                        });
                    throw new Error("Browser's test function is not valid")
                });
                return f && (this.parsedResult.platform = f.describe(this.getUA())),
                this.parsedResult.platform
            }
            ,
            d.getEngine = function() {
                return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
            }
            ,
            d.getEngineName = function(h) {
                return h ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
            }
            ,
            d.parseEngine = function() {
                var h = this;
                this.parsedResult.engine = {};
                var f = a.default.find(s.default, function(g) {
                    if (typeof g.test == "function")
                        return g.test(h);
                    if (g.test instanceof Array)
                        return g.test.some(function(m) {
                            return h.test(m)
                        });
                    throw new Error("Browser's test function is not valid")
                });
                return f && (this.parsedResult.engine = f.describe(this.getUA())),
                this.parsedResult.engine
            }
            ,
            d.parse = function() {
                return this.parseBrowser(),
                this.parseOS(),
                this.parsePlatform(),
                this.parseEngine(),
                this
            }
            ,
            d.getResult = function() {
                return a.default.assign({}, this.parsedResult)
            }
            ,
            d.satisfies = function(h) {
                var f = this
                  , g = {}
                  , m = 0
                  , v = {}
                  , p = 0;
                if (Object.keys(h).forEach(function(G) {
                    var U = h[G];
                    typeof U == "string" ? (v[G] = U,
                    p += 1) : typeof U == "object" && (g[G] = U,
                    m += 1)
                }),
                m > 0) {
                    var S = Object.keys(g)
                      , E = a.default.find(S, function(G) {
                        return f.isOS(G)
                    });
                    if (E) {
                        var N = this.satisfies(g[E]);
                        if (N !== void 0)
                            return N
                    }
                    var I = a.default.find(S, function(G) {
                        return f.isPlatform(G)
                    });
                    if (I) {
                        var F = this.satisfies(g[I]);
                        if (F !== void 0)
                            return F
                    }
                }
                if (p > 0) {
                    var q = Object.keys(v)
                      , z = a.default.find(q, function(G) {
                        return f.isBrowser(G, !0)
                    });
                    if (z !== void 0)
                        return this.compareVersion(v[z])
                }
            }
            ,
            d.isBrowser = function(h, f) {
                f === void 0 && (f = !1);
                var g = this.getBrowserName().toLowerCase()
                  , m = h.toLowerCase()
                  , v = a.default.getBrowserTypeByAlias(m);
                return f && v && (m = v.toLowerCase()),
                m === g
            }
            ,
            d.compareVersion = function(h) {
                var f = [0]
                  , g = h
                  , m = !1
                  , v = this.getBrowserVersion();
                if (typeof v == "string")
                    return h[0] === ">" || h[0] === "<" ? (g = h.substr(1),
                    h[1] === "=" ? (m = !0,
                    g = h.substr(2)) : f = [],
                    h[0] === ">" ? f.push(1) : f.push(-1)) : h[0] === "=" ? g = h.substr(1) : h[0] === "~" && (m = !0,
                    g = h.substr(1)),
                    f.indexOf(a.default.compareVersions(v, g, m)) > -1
            }
            ,
            d.isOS = function(h) {
                return this.getOSName(!0) === String(h).toLowerCase()
            }
            ,
            d.isPlatform = function(h) {
                return this.getPlatformType(!0) === String(h).toLowerCase()
            }
            ,
            d.isEngine = function(h) {
                return this.getEngineName(!0) === String(h).toLowerCase()
            }
            ,
            d.is = function(h, f) {
                return f === void 0 && (f = !1),
                this.isBrowser(h, f) || this.isOS(h) || this.isPlatform(h)
            }
            ,
            d.some = function(h) {
                var f = this;
                return h === void 0 && (h = []),
                h.some(function(g) {
                    return f.is(g)
                })
            }
            ,
            u
        }();
        t.default = l,
        e.exports = t.default
    },
    92: function(e, t, n) {
        t.__esModule = !0,
        t.default = void 0;
        var r, i = (r = n(17)) && r.__esModule ? r : {
            default: r
        }, o = /version\/(\d+(\.?_?\d+)+)/i, s = [{
            test: [/googlebot/i],
            describe: function(a) {
                var c = {
                    name: "Googlebot"
                }
                  , l = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/opera/i],
            describe: function(a) {
                var c = {
                    name: "Opera"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/opr\/|opios/i],
            describe: function(a) {
                var c = {
                    name: "Opera"
                }
                  , l = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/SamsungBrowser/i],
            describe: function(a) {
                var c = {
                    name: "Samsung Internet for Android"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/Whale/i],
            describe: function(a) {
                var c = {
                    name: "NAVER Whale Browser"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/MZBrowser/i],
            describe: function(a) {
                var c = {
                    name: "MZ Browser"
                }
                  , l = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/focus/i],
            describe: function(a) {
                var c = {
                    name: "Focus"
                }
                  , l = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/swing/i],
            describe: function(a) {
                var c = {
                    name: "Swing"
                }
                  , l = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/coast/i],
            describe: function(a) {
                var c = {
                    name: "Opera Coast"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/opt\/\d+(?:.?_?\d+)+/i],
            describe: function(a) {
                var c = {
                    name: "Opera Touch"
                }
                  , l = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/yabrowser/i],
            describe: function(a) {
                var c = {
                    name: "Yandex Browser"
                }
                  , l = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/ucbrowser/i],
            describe: function(a) {
                var c = {
                    name: "UC Browser"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/Maxthon|mxios/i],
            describe: function(a) {
                var c = {
                    name: "Maxthon"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/epiphany/i],
            describe: function(a) {
                var c = {
                    name: "Epiphany"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/puffin/i],
            describe: function(a) {
                var c = {
                    name: "Puffin"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/sleipnir/i],
            describe: function(a) {
                var c = {
                    name: "Sleipnir"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/k-meleon/i],
            describe: function(a) {
                var c = {
                    name: "K-Meleon"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/micromessenger/i],
            describe: function(a) {
                var c = {
                    name: "WeChat"
                }
                  , l = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/qqbrowser/i],
            describe: function(a) {
                var c = {
                    name: /qqbrowserlite/i.test(a) ? "QQ Browser Lite" : "QQ Browser"
                }
                  , l = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/msie|trident/i],
            describe: function(a) {
                var c = {
                    name: "Internet Explorer"
                }
                  , l = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/\sedg\//i],
            describe: function(a) {
                var c = {
                    name: "Microsoft Edge"
                }
                  , l = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/edg([ea]|ios)/i],
            describe: function(a) {
                var c = {
                    name: "Microsoft Edge"
                }
                  , l = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/vivaldi/i],
            describe: function(a) {
                var c = {
                    name: "Vivaldi"
                }
                  , l = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/seamonkey/i],
            describe: function(a) {
                var c = {
                    name: "SeaMonkey"
                }
                  , l = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/sailfish/i],
            describe: function(a) {
                var c = {
                    name: "Sailfish"
                }
                  , l = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/silk/i],
            describe: function(a) {
                var c = {
                    name: "Amazon Silk"
                }
                  , l = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/phantom/i],
            describe: function(a) {
                var c = {
                    name: "PhantomJS"
                }
                  , l = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/slimerjs/i],
            describe: function(a) {
                var c = {
                    name: "SlimerJS"
                }
                  , l = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe: function(a) {
                var c = {
                    name: "BlackBerry"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/(web|hpw)[o0]s/i],
            describe: function(a) {
                var c = {
                    name: "WebOS Browser"
                }
                  , l = i.default.getFirstMatch(o, a) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/bada/i],
            describe: function(a) {
                var c = {
                    name: "Bada"
                }
                  , l = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/tizen/i],
            describe: function(a) {
                var c = {
                    name: "Tizen"
                }
                  , l = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/qupzilla/i],
            describe: function(a) {
                var c = {
                    name: "QupZilla"
                }
                  , l = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/firefox|iceweasel|fxios/i],
            describe: function(a) {
                var c = {
                    name: "Firefox"
                }
                  , l = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/electron/i],
            describe: function(a) {
                var c = {
                    name: "Electron"
                }
                  , l = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/MiuiBrowser/i],
            describe: function(a) {
                var c = {
                    name: "Miui"
                }
                  , l = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/chromium/i],
            describe: function(a) {
                var c = {
                    name: "Chromium"
                }
                  , l = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, a) || i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/chrome|crios|crmo/i],
            describe: function(a) {
                var c = {
                    name: "Chrome"
                }
                  , l = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/GSA/i],
            describe: function(a) {
                var c = {
                    name: "Google Search"
                }
                  , l = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: function(a) {
                var c = !a.test(/like android/i)
                  , l = a.test(/android/i);
                return c && l
            },
            describe: function(a) {
                var c = {
                    name: "Android Browser"
                }
                  , l = i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/playstation 4/i],
            describe: function(a) {
                var c = {
                    name: "PlayStation 4"
                }
                  , l = i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/safari|applewebkit/i],
            describe: function(a) {
                var c = {
                    name: "Safari"
                }
                  , l = i.default.getFirstMatch(o, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/.*/i],
            describe: function(a) {
                var c = a.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                return {
                    name: i.default.getFirstMatch(c, a),
                    version: i.default.getSecondMatch(c, a)
                }
            }
        }];
        t.default = s,
        e.exports = t.default
    },
    93: function(e, t, n) {
        t.__esModule = !0,
        t.default = void 0;
        var r, i = (r = n(17)) && r.__esModule ? r : {
            default: r
        }, o = n(18), s = [{
            test: [/Roku\/DVP/],
            describe: function(a) {
                var c = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, a);
                return {
                    name: o.OS_MAP.Roku,
                    version: c
                }
            }
        }, {
            test: [/windows phone/i],
            describe: function(a) {
                var c = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, a);
                return {
                    name: o.OS_MAP.WindowsPhone,
                    version: c
                }
            }
        }, {
            test: [/windows /i],
            describe: function(a) {
                var c = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, a)
                  , l = i.default.getWindowsVersionName(c);
                return {
                    name: o.OS_MAP.Windows,
                    version: c,
                    versionName: l
                }
            }
        }, {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: function(a) {
                var c = {
                    name: o.OS_MAP.iOS
                }
                  , l = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/macintosh/i],
            describe: function(a) {
                var c = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, a).replace(/[_\s]/g, ".")
                  , l = i.default.getMacOSVersionName(c)
                  , u = {
                    name: o.OS_MAP.MacOS,
                    version: c
                };
                return l && (u.versionName = l),
                u
            }
        }, {
            test: [/(ipod|iphone|ipad)/i],
            describe: function(a) {
                var c = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, a).replace(/[_\s]/g, ".");
                return {
                    name: o.OS_MAP.iOS,
                    version: c
                }
            }
        }, {
            test: function(a) {
                var c = !a.test(/like android/i)
                  , l = a.test(/android/i);
                return c && l
            },
            describe: function(a) {
                var c = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, a)
                  , l = i.default.getAndroidVersionName(c)
                  , u = {
                    name: o.OS_MAP.Android,
                    version: c
                };
                return l && (u.versionName = l),
                u
            }
        }, {
            test: [/(web|hpw)[o0]s/i],
            describe: function(a) {
                var c = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, a)
                  , l = {
                    name: o.OS_MAP.WebOS
                };
                return c && c.length && (l.version = c),
                l
            }
        }, {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe: function(a) {
                var c = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, a) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, a) || i.default.getFirstMatch(/\bbb(\d+)/i, a);
                return {
                    name: o.OS_MAP.BlackBerry,
                    version: c
                }
            }
        }, {
            test: [/bada/i],
            describe: function(a) {
                var c = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, a);
                return {
                    name: o.OS_MAP.Bada,
                    version: c
                }
            }
        }, {
            test: [/tizen/i],
            describe: function(a) {
                var c = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, a);
                return {
                    name: o.OS_MAP.Tizen,
                    version: c
                }
            }
        }, {
            test: [/linux/i],
            describe: function() {
                return {
                    name: o.OS_MAP.Linux
                }
            }
        }, {
            test: [/CrOS/],
            describe: function() {
                return {
                    name: o.OS_MAP.ChromeOS
                }
            }
        }, {
            test: [/PlayStation 4/],
            describe: function(a) {
                var c = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, a);
                return {
                    name: o.OS_MAP.PlayStation4,
                    version: c
                }
            }
        }];
        t.default = s,
        e.exports = t.default
    },
    94: function(e, t, n) {
        t.__esModule = !0,
        t.default = void 0;
        var r, i = (r = n(17)) && r.__esModule ? r : {
            default: r
        }, o = n(18), s = [{
            test: [/googlebot/i],
            describe: function() {
                return {
                    type: "bot",
                    vendor: "Google"
                }
            }
        }, {
            test: [/huawei/i],
            describe: function(a) {
                var c = i.default.getFirstMatch(/(can-l01)/i, a) && "Nova"
                  , l = {
                    type: o.PLATFORMS_MAP.mobile,
                    vendor: "Huawei"
                };
                return c && (l.model = c),
                l
            }
        }, {
            test: [/nexus\s*(?:7|8|9|10).*/i],
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.tablet,
                    vendor: "Nexus"
                }
            }
        }, {
            test: [/ipad/i],
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.tablet,
                    vendor: "Apple",
                    model: "iPad"
                }
            }
        }, {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.tablet,
                    vendor: "Apple",
                    model: "iPad"
                }
            }
        }, {
            test: [/kftt build/i],
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.tablet,
                    vendor: "Amazon",
                    model: "Kindle Fire HD 7"
                }
            }
        }, {
            test: [/silk/i],
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.tablet,
                    vendor: "Amazon"
                }
            }
        }, {
            test: [/tablet(?! pc)/i],
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.tablet
                }
            }
        }, {
            test: function(a) {
                var c = a.test(/ipod|iphone/i)
                  , l = a.test(/like (ipod|iphone)/i);
                return c && !l
            },
            describe: function(a) {
                var c = i.default.getFirstMatch(/(ipod|iphone)/i, a);
                return {
                    type: o.PLATFORMS_MAP.mobile,
                    vendor: "Apple",
                    model: c
                }
            }
        }, {
            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.mobile,
                    vendor: "Nexus"
                }
            }
        }, {
            test: [/[^-]mobi/i],
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.mobile
                }
            }
        }, {
            test: function(a) {
                return a.getBrowserName(!0) === "blackberry"
            },
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.mobile,
                    vendor: "BlackBerry"
                }
            }
        }, {
            test: function(a) {
                return a.getBrowserName(!0) === "bada"
            },
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.mobile
                }
            }
        }, {
            test: function(a) {
                return a.getBrowserName() === "windows phone"
            },
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.mobile,
                    vendor: "Microsoft"
                }
            }
        }, {
            test: function(a) {
                var c = Number(String(a.getOSVersion()).split(".")[0]);
                return a.getOSName(!0) === "android" && c >= 3
            },
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.tablet
                }
            }
        }, {
            test: function(a) {
                return a.getOSName(!0) === "android"
            },
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.mobile
                }
            }
        }, {
            test: function(a) {
                return a.getOSName(!0) === "macos"
            },
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.desktop,
                    vendor: "Apple"
                }
            }
        }, {
            test: function(a) {
                return a.getOSName(!0) === "windows"
            },
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.desktop
                }
            }
        }, {
            test: function(a) {
                return a.getOSName(!0) === "linux"
            },
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.desktop
                }
            }
        }, {
            test: function(a) {
                return a.getOSName(!0) === "playstation 4"
            },
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.tv
                }
            }
        }, {
            test: function(a) {
                return a.getOSName(!0) === "roku"
            },
            describe: function() {
                return {
                    type: o.PLATFORMS_MAP.tv
                }
            }
        }];
        t.default = s,
        e.exports = t.default
    },
    95: function(e, t, n) {
        t.__esModule = !0,
        t.default = void 0;
        var r, i = (r = n(17)) && r.__esModule ? r : {
            default: r
        }, o = n(18), s = [{
            test: function(a) {
                return a.getBrowserName(!0) === "microsoft edge"
            },
            describe: function(a) {
                if (/\sedg\//i.test(a))
                    return {
                        name: o.ENGINE_MAP.Blink
                    };
                var c = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, a);
                return {
                    name: o.ENGINE_MAP.EdgeHTML,
                    version: c
                }
            }
        }, {
            test: [/trident/i],
            describe: function(a) {
                var c = {
                    name: o.ENGINE_MAP.Trident
                }
                  , l = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: function(a) {
                return a.test(/presto/i)
            },
            describe: function(a) {
                var c = {
                    name: o.ENGINE_MAP.Presto
                }
                  , l = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: function(a) {
                var c = a.test(/gecko/i)
                  , l = a.test(/like gecko/i);
                return c && !l
            },
            describe: function(a) {
                var c = {
                    name: o.ENGINE_MAP.Gecko
                }
                  , l = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }, {
            test: [/(apple)?webkit\/537\.36/i],
            describe: function() {
                return {
                    name: o.ENGINE_MAP.Blink
                }
            }
        }, {
            test: [/(apple)?webkit/i],
            describe: function(a) {
                var c = {
                    name: o.ENGINE_MAP.WebKit
                }
                  , l = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, a);
                return l && (c.version = l),
                c
            }
        }];
        t.default = s,
        e.exports = t.default
    }
});
var l0 = Qo(c0.exports), nt = {
    Initialized: "initialized",
    DisplayURI: "display_uri",
    ProviderUpdate: "provider_update",
    ConnectWithResponse: "connectWithResponse",
    ConnectionStatus: "connection_status",
    ServiceStatus: "service_status"
}, At = class e {
    constructor({shouldSetOnWindow: t, connectionStream: n, shouldSendMetadata: r=!1, shouldShimWeb3: i, sdkInstance: o}) {
        let s = new Ha({
            connectionStream: n,
            shouldSendMetadata: r,
            shouldSetOnWindow: t,
            shouldShimWeb3: i,
            autoRequestAccounts: !1
        })
          , a = new Proxy(s,{
            deleteProperty: () => !0
        });
        if (this.provider = a,
        this.sdkInstance = o,
        t && typeof window < "u")
            try {
                c = s,
                window.ethereum = c,
                window.dispatchEvent(new Event("ethereum#initialized"))
            } catch (l) {
                Y("[Ethereum] Unable to set global provider - window.ethereum may be read-only", l)
            }
        var c;
        if (i && typeof window < "u")
            try {
                (function(l, u=console) {
                    let d = !1
                      , h = !1;
                    if (!window.web3) {
                        let f = "__isMetaMaskShim__"
                          , g = {
                            currentProvider: l
                        };
                        Object.defineProperty(g, f, {
                            value: !0,
                            enumerable: !0,
                            configurable: !1,
                            writable: !1
                        }),
                        g = new Proxy(g,{
                            get: (m, v, ...p) => (v !== "currentProvider" || d ? v === "currentProvider" || v === f || h || (h = !0,
                            u.error("MetaMask no longer injects web3. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"),
                            l.request({
                                method: "metamask_logWeb3ShimUsage"
                            }).catch(S => {
                                u.debug("MetaMask: Failed to log web3 shim usage.", S)
                            }
                            )) : (d = !0,
                            u.warn("You are accessing the MetaMask window.web3.currentProvider shim. This property is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3")),
                            Reflect.get(m, v, ...p)),
                            set: (...m) => (u.warn("You are accessing the MetaMask window.web3 shim. This object is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"),
                            Reflect.set(...m))
                        }),
                        Object.defineProperty(window, "web3", {
                            value: g,
                            enumerable: !1,
                            configurable: !0,
                            writable: !0
                        })
                    }
                }
                )(this.provider)
            } catch (l) {
                Y("[Ethereum] Unable to shim web3 - window.web3 may be read-only", l)
            }
        this.provider.on("display_uri", l => {
            this.sdkInstance.emit(nt.DisplayURI, l)
        }
        ),
        this.provider.on("_initialized", () => {
            let l = {
                chainId: this.provider.getChainId(),
                isConnected: this.provider.isConnected(),
                isMetaMask: this.provider.isMetaMask,
                selectedAddress: this.provider.getSelectedAddress(),
                networkVersion: this.provider.getNetworkVersion()
            };
            this.sdkInstance.emit(nt.Initialized, l),
            Y("[Ethereum: constructor()] provider initialized", l)
        }
        )
    }
    static init(t) {
        var n;
        return Y("[Ethereum: init()] Initializing Ethereum service"),
        this.instance = new e(t),
        (n = this.instance) === null || n === void 0 ? void 0 : n.provider
    }
    static destroy() {}
    static getInstance() {
        var t;
        if (!(!((t = this.instance) === null || t === void 0) && t.provider))
            throw new Error("Ethereum instance not intiialized - call Ethereum.factory first.");
        return this.instance
    }
    static getProvider() {
        var t;
        if (!(!((t = this.instance) === null || t === void 0) && t.provider))
            throw new Error("Ethereum instance not intiialized - call Ethereum.factory first.");
        return this.instance.provider
    }
}
, qo = class e {
    constructor({useDeepLink: t, preferredOpenLink: n, debug: r=!1}) {
        this.state = {
            platformType: void 0,
            useDeeplink: !1,
            preferredOpenLink: void 0,
            debug: !1
        },
        this.state.platformType = this.getPlatformType(),
        this.state.useDeeplink = t,
        this.state.preferredOpenLink = n,
        this.state.debug = r
    }
    openDeeplink(t, n, r) {
        return function(i, o, s, a) {
            let {state: c} = i;
            Y(`[PlatfformManager: openDeeplink()] universalLink --> ${o}`),
            Y(`[PlatfformManager: openDeeplink()] deepLink --> ${s}`);
            try {
                if (c.preferredOpenLink)
                    return void c.preferredOpenLink(c.useDeeplink ? s : o, a);
                if (Y(`[PlatfformManager: openDeeplink()] open link now useDeepLink=${c.useDeeplink} link=${c.useDeeplink ? s : o}`),
                c.useDeeplink)
                    typeof window < "u" && (window.location.href = s);
                else if (typeof document < "u") {
                    let l = document.createElement("a");
                    l.href = o,
                    l.target = "_self",
                    l.rel = "noreferrer noopener",
                    l.click()
                }
            } catch (l) {
                console.log("[PlatfformManager: openDeeplink()] can't open link", l)
            }
        }(this, t, n, r)
    }
    isReactNative() {
        var t;
        return this.isNotBrowser() && typeof window < "u" && window?.navigator && ((t = window.navigator) === null || t === void 0 ? void 0 : t.product) === "ReactNative"
    }
    isMetaMaskInstalled() {
        return function() {
            let t = At.getProvider() || window?.ethereum;
            return Y(`[PlatfformManager: isMetaMaskInstalled()] isMetaMask=${t?.isMetaMask} isConnected=${t?.isConnected()}`),
            t?.isMetaMask && t?.isConnected()
        }()
    }
    isDesktopWeb() {
        return this.isBrowser() && !this.isMobileWeb()
    }
    isMobile() {
        var t, n;
        let r = l0.parse(window.navigator.userAgent);
        return ((t = r?.platform) === null || t === void 0 ? void 0 : t.type) === "mobile" || ((n = r?.platform) === null || n === void 0 ? void 0 : n.type) === "tablet"
    }
    isSecure() {
        return this.isReactNative() || this.isMobileWeb()
    }
    isMetaMaskMobileWebView() {
        return typeof window < "u" && !!window.ReactNativeWebView && !!navigator.userAgent.endsWith("MetaMaskMobile")
    }
    isMobileWeb() {
        return this.state.platformType === qe.MobileWeb
    }
    static isNotBrowser() {
        var t;
        return typeof window > "u" || !window?.navigator || Xe !== void 0 && ((t = Xe?.navigator) === null || t === void 0 ? void 0 : t.product) === "ReactNative" || navigator?.product === "ReactNative"
    }
    isNotBrowser() {
        return e.isNotBrowser()
    }
    static isBrowser() {
        return !this.isNotBrowser()
    }
    isBrowser() {
        return e.isBrowser()
    }
    isNodeJS() {
        return this.isNotBrowser() && !this.isReactNative()
    }
    isUseDeepLink() {
        return this.state.useDeeplink
    }
    getPlatformType() {
        return function(t) {
            let {state: n} = t;
            return n.platformType ? n.platformType : t.isReactNative() ? qe.ReactNative : t.isNotBrowser() ? qe.NonBrowser : t.isMetaMaskMobileWebView() ? qe.MetaMaskMobileWebview : t.isMobile() ? qe.MobileWeb : qe.DesktopWeb
        }(this)
    }
}
, u0 = e => J(void 0, void 0, void 0, function*() {
    if (qo.isBrowser()) {
        let {StorageManagerWeb: n} = yield Promise.resolve().then(function() {
            return y2
        });
        return new n(e)
    }
    let t = {
        persistChannelConfig: () => J(void 0, void 0, void 0, function*() {}),
        getPersistedChannelConfig: () => J(void 0, void 0, void 0, function*() {}),
        persistAccounts: () => J(void 0, void 0, void 0, function*() {}),
        getCachedAccounts: () => J(void 0, void 0, void 0, function*() {
            return []
        }),
        persistChainId: () => J(void 0, void 0, void 0, function*() {}),
        getCachedChainId: () => J(void 0, void 0, void 0, function*() {}),
        terminate: () => J(void 0, void 0, void 0, function*() {})
    };
    return Promise.resolve(t)
}), Ha = class extends qm {
    constructor({connectionStream: t, shouldSendMetadata: n, autoRequestAccounts: r=!1}) {
        super(t, {
            logger: console,
            maxEventListeners: 100,
            shouldSendMetadata: n
        }),
        this.state = {
            accounts: null,
            autoRequestAccounts: !1,
            providerStateRequested: !1,
            chainId: "",
            networkVersion: ""
        },
        Y(`[SDKProvider: constructor()] autoRequestAccounts=${r}`),
        this.state.autoRequestAccounts = r
    }
    forceInitializeState() {
        return J(this, void 0, void 0, function*() {
            return Y(`[SDKProvider: forceInitializeState()] autoRequestAccounts=${this.state.autoRequestAccounts}`),
            this._initializeStateAsync()
        })
    }
    _setConnected() {
        Y("[SDKProvider: _setConnected()] Setting connected state"),
        this._state.isConnected = !0
    }
    getState() {
        return this._state
    }
    getSDKProviderState() {
        return this.state
    }
    getSelectedAddress() {
        var t;
        let {accounts: n} = this._state;
        return n && n.length !== 0 ? ((t = n[0]) === null || t === void 0 ? void 0 : t.toLowerCase()) || "" : (Y("[SDKProvider: getSelectedAddress] No accounts found"),
        null)
    }
    getChainId() {
        return this.state.chainId
    }
    getNetworkVersion() {
        return this.state.networkVersion
    }
    setSDKProviderState(t) {
        this.state = Object.assign(Object.assign({}, this.state), t)
    }
    handleAccountsChanged(t, n) {
        return this._handleAccountsChanged(t, n)
    }
    handleDisconnect({terminate: t=!1}) {
        (function({terminate: n=!1, instance: r}) {
            let {state: i} = r;
            Y(`[SDKProvider: handleDisconnect()] cleaning up provider state terminate=${n}`, r),
            n && (r._state.accounts = null,
            r._state.isUnlocked = !1,
            r._state.isPermanentlyDisconnected = !0,
            r._state.initialized = !1),
            r._handleAccountsChanged([]),
            r._state.isConnected = !1,
            r.emit("disconnect", o0.ethErrors.provider.disconnected()),
            i.providerStateRequested = !1
        }
        )({
            terminate: t,
            instance: this
        })
    }
    _initializeStateAsync() {
        return J(this, void 0, void 0, function*() {
            return function(t) {
                var n, r;
                return J(this, void 0, void 0, function*() {
                    t.state === void 0 && (t.state = {
                        accounts: null,
                        autoRequestAccounts: !1,
                        providerStateRequested: !1,
                        chainId: ""
                    });
                    let {state: i} = t, o;
                    if (i.providerStateRequested)
                        Y("[SDKProvider: initializeStateAsync()] initialization already in progress");
                    else {
                        let s;
                        i.providerStateRequested = !0;
                        let a = null
                          , c = !1
                          , l = !1
                          , u = yield u0({
                            enabled: !0
                        });
                        if (u) {
                            let d = yield u.getPersistedChannelConfig({});
                            c = (n = d?.relayPersistence) !== null && n !== void 0 && n,
                            s = yield u.getCachedChainId();
                            let h = yield u.getCachedAccounts();
                            h.length > 0 && (a = h[0])
                        }
                        if (Y(`[SDKProvider: initializeStateAsync()] relayPersistence=${c}`, {
                            relayPersistence: c,
                            cachedChainId: s,
                            cachedSelectedAddress: a
                        }),
                        c)
                            if (s && a)
                                o = {
                                    accounts: [a],
                                    chainId: s,
                                    isUnlocked: !1
                                },
                                l = !0;
                            else
                                try {
                                    o = yield t.request({
                                        method: "metamask_getProviderState"
                                    })
                                } catch (d) {
                                    return t._log.error("MetaMask: Failed to get initial state. Please report this bug.", d),
                                    void (i.providerStateRequested = !1)
                                }
                        if (((r = o?.accounts) === null || r === void 0 ? void 0 : r.length) === 0)
                            if (t.getSelectedAddress())
                                o.accounts = [t.getSelectedAddress()];
                            else {
                                Y("[SDKProvider: initializeStateAsync()] Fetch accounts remotely.");
                                let d = yield t.request({
                                    method: "eth_requestAccounts",
                                    params: []
                                });
                                o.accounts = d
                            }
                        t._initializeState(o),
                        i.providerStateRequested = !1,
                        l && (t._state.isConnected = !0,
                        t.emit("connect", {
                            chainId: o?.chainId
                        }))
                    }
                })
            }(this)
        })
    }
    _initializeState(t) {
        return Y("[SDKProvider: _initializeState()]", t),
        function(n, r, i) {
            return Y("[SDKProvider: initializeState()] set state._initialized to false"),
            n._state.initialized = !1,
            r(i)
        }(this, super._initializeState.bind(this), t)
    }
    _handleChainChanged({chainId: t, networkVersion: n}={}) {
        this.state.chainId = t,
        this.state.networkVersion = n,
        function({instance: r, chainId: i, networkVersion: o, superHandleChainChanged: s}) {
            Y(`[SDKProvider: handleChainChanged()] chainId=${i} networkVersion=${o}`);
            let a = o;
            o || (Y("[SDKProvider: handleChainChanged()] forced network version to prevent provider error"),
            a = "1"),
            r._state.isConnected = !0,
            r.emit("connect", {
                chainId: i
            }),
            s({
                chainId: i,
                networkVersion: a
            })
        }({
            instance: this,
            chainId: t,
            networkVersion: n,
            superHandleChainChanged: super._handleChainChanged.bind(this)
        })
    }
}
, fi, Vn = {
    name: "@metamask/sdk",
    version: "0.32.0",
    description: "",
    homepage: "https://github.com/MetaMask/metamask-sdk#readme",
    bugs: {
        url: "https://github.com/MetaMask/metamask-sdk/issues"
    },
    repository: {
        type: "git",
        url: "https://github.com/MetaMask/metamask-sdk",
        directory: "packages/sdk"
    },
    main: "dist/node/cjs/metamask-sdk.js",
    module: "dist/browser/es/metamask-sdk.js",
    browser: "dist/browser/es/metamask-sdk.js",
    unpkg: "dist/browser/umd/metamask-sdk.js",
    "react-native": "dist/react-native/es/metamask-sdk.js",
    types: "dist/types/src/index.d.ts",
    sideEffects: !1,
    files: ["/dist"],
    scripts: {
        "build:types": "tsc --project tsconfig.build.json --emitDeclarationOnly --outDir dist/types",
        build: "yarn build:types && rollup -c --bundleConfigAsCjs",
        "build:clean": "yarn clean && yarn build",
        "build:post-tsc": "echo 'N/A'",
        "build:pre-tsc": "echo 'N/A'",
        typecheck: "tsc --noEmit",
        clean: "rimraf ./dist",
        size: "node bundle-size && size-limit",
        lint: "yarn lint:eslint && yarn lint:misc --check",
        "lint:changelog": "../../scripts/validate-changelog.sh @metamask/sdk",
        "lint:eslint": "eslint . --cache --ext js,ts",
        "lint:fix": "yarn lint:eslint --fix && yarn lint:misc --write",
        "lint:misc": "prettier '**/*.json' '**/*.md' '!CHANGELOG.md' --ignore-path ../../.gitignore",
        prepack: "../../scripts/prepack.sh",
        "publish:preview": "yarn npm publish --tag preview",
        reset: "yarn clean && rimraf ./node_modules/",
        test: 'jest --testPathIgnorePatterns "/e2e/"',
        "test:coverage": 'jest --coverage --testPathIgnorePatterns "/e2e/"',
        "test:e2e": 'jest --testPathPattern "/e2e/"',
        "test:ci": 'jest --coverage --passWithNoTests --setupFilesAfterEnv ./jest-preload.js --testPathIgnorePatterns "/e2e/"',
        "test:dev": 'jest -c ./jest.config.ts --detectOpenHandles  --testPathIgnorePatterns "/e2e/"',
        watch: "rollup -c -w",
        dev: 'concurrently "tsc --watch" "rollup -c -w --bundleConfigAsCjs"',
        "build:dev": "yarn build:types && NODE_ENV=dev rollup -c --bundleConfigAsCjs"
    },
    dependencies: {
        "@babel/runtime": "^7.26.0",
        "@metamask/onboarding": "^1.0.1",
        "@metamask/providers": "16.1.0",
        "@metamask/sdk-communication-layer": "workspace:*",
        "@metamask/sdk-install-modal-web": "workspace:*",
        "@paulmillr/qr": "^0.2.1",
        bowser: "^2.9.0",
        "cross-fetch": "^4.0.0",
        debug: "^4.3.4",
        eciesjs: "^0.4.11",
        "eth-rpc-errors": "^4.0.3",
        eventemitter2: "^6.4.9",
        "obj-multiplex": "^1.0.0",
        pump: "^3.0.0",
        "readable-stream": "^3.6.2",
        "socket.io-client": "^4.5.1",
        tslib: "^2.6.0",
        util: "^0.12.4",
        uuid: "^8.3.2"
    },
    devDependencies: {
        "@jest/globals": "^29.3.1",
        "@lavamoat/allow-scripts": "^2.3.1",
        "@metamask/auto-changelog": "3.1.0",
        "@metamask/eslint-config": "^6.0.0",
        "@metamask/eslint-config-nodejs": "^6.0.0",
        "@metamask/eslint-config-typescript": "^6.0.0",
        "@react-native-async-storage/async-storage": "^1.19.6",
        "@rollup/plugin-alias": "^5.1.1",
        "@rollup/plugin-commonjs": "^25.0.7",
        "@rollup/plugin-json": "^6.0.0",
        "@rollup/plugin-node-resolve": "^15.0.2",
        "@rollup/plugin-replace": "^6.0.1",
        "@rollup/plugin-terser": "^0.4.1",
        "@size-limit/preset-big-lib": "^11.0.2",
        "@types/dom-screen-wake-lock": "^1.0.2",
        "@types/node": "^20.1.3",
        "@types/pump": "^1.1.1",
        "@types/qrcode-terminal": "^0.12.0",
        "@types/uuid": "^10.0.0",
        "@typescript-eslint/eslint-plugin": "^4.26.0",
        "@typescript-eslint/parser": "^4.26.0",
        "browserify-zlib": "^0.2.0",
        buffer: "^6.0.3",
        concurrently: "^9.1.2",
        "crypto-browserify": "^3.12.0",
        eslint: "^7.30.0",
        "eslint-config-prettier": "^8.3.0",
        "eslint-plugin-import": "^2.23.4",
        "eslint-plugin-jest": "^24.4.0",
        "eslint-plugin-jsdoc": "^36.1.0",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-prettier": "^3.4.0",
        "https-browserify": "^1.0.0",
        jest: "^29.3.1",
        "jest-environment-jsdom": "^29.3.1",
        prettier: "^2.3.0",
        process: "^0.11.10",
        rimraf: "^4.4.0",
        rollup: "^4.26.0",
        "rollup-plugin-analyzer": "^4.0.0",
        "rollup-plugin-jscc": "^2.0.0",
        "rollup-plugin-natives": "^0.7.5",
        "rollup-plugin-node-builtins": "^2.1.2",
        "rollup-plugin-polyfill-node": "^0.13.0",
        "rollup-plugin-sizes": "^1.0.6",
        "rollup-plugin-typescript2": "^0.31.2",
        "rollup-plugin-visualizer": "^5.12.0",
        "size-limit": "^11.0.2",
        "stream-browserify": "^3.0.0",
        "stream-http": "^3.2.0",
        "ts-jest": "^29.0.3",
        "ts-node": "^10.9.1",
        typescript: "^4.3.2",
        url: "^0.11.0",
        webpack: "^5.0.0"
    },
    publishConfig: {
        access: "public",
        registry: "https://registry.npmjs.org/"
    },
    lavamoat: {
        allowScripts: {
            "eciesjs>secp256k1": !1,
            "socket.io-client>engine.io-client>ws>bufferutil": !1,
            "socket.io-client>engine.io-client>ws>utf-8-validate": !1,
            "@metamask/sdk-communication-layer>bufferutil": !1,
            "@metamask/sdk-communication-layer>eciesjs>secp256k1": !1,
            "@metamask/sdk-communication-layer>utf-8-validate": !1
        }
    }
};
(function(e) {
    e.INPAGE = "metamask-inpage",
    e.CONTENT_SCRIPT = "metamask-contentscript",
    e.PROVIDER = "metamask-provider"
}
)(fi || (fi = {}));
var dd = "direct", pi = "https://metamask.app.link/connect", mi = "metamask://connect", hd = {
    NAME: "MetaMask",
    RDNS: ["io.metamask", "io.metamask.flask"]
}, Gm = /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u, le = {
    METAMASK_GETPROVIDERSTATE: "metamask_getProviderState",
    METAMASK_CONNECTSIGN: "metamask_connectSign",
    METAMASK_CONNECTWITH: "metamask_connectWith",
    METAMASK_OPEN: "metamask_open",
    METAMASK_BATCH: "metamask_batch",
    PERSONAL_SIGN: "personal_sign",
    WALLET_REQUESTPERMISSIONS: "wallet_requestPermissions",
    WALLET_REVOKEPERMISSIONS: "wallet_revokePermissions",
    WALLET_GETPERMISSIONS: "wallet_getPermissions",
    WALLET_WATCHASSET: "wallet_watchAsset",
    WALLET_ADDETHEREUMCHAIN: "wallet_addEthereumChain",
    WALLET_SWITCHETHETHEREUMCHAIN: "wallet_switchEthereumChain",
    ETH_REQUESTACCOUNTS: "eth_requestAccounts",
    ETH_ACCOUNTS: "eth_accounts",
    ETH_CHAINID: "eth_chainId",
    ETH_SENDTRANSACTION: "eth_sendTransaction",
    ETH_SIGNTYPEDDATA: "eth_signTypedData",
    ETH_SIGNTYPEDDATA_V3: "eth_signTypedData_v3",
    ETH_SIGNTYPEDDATA_V4: "eth_signTypedData_v4",
    ETH_SIGNTRANSACTION: "eth_signTransaction",
    ETH_SIGN: "eth_sign",
    PERSONAL_EC_RECOVER: "personal_ecRecover"
}, Vo = {
    [le.ETH_REQUESTACCOUNTS]: !0,
    [le.ETH_SENDTRANSACTION]: !0,
    [le.ETH_SIGNTRANSACTION]: !0,
    [le.ETH_SIGN]: !0,
    [le.PERSONAL_SIGN]: !0,
    [le.ETH_ACCOUNTS]: !1,
    [le.ETH_CHAINID]: !1,
    [le.PERSONAL_SIGN]: !0,
    [le.ETH_SIGNTYPEDDATA]: !0,
    [le.ETH_SIGNTYPEDDATA_V3]: !0,
    [le.ETH_SIGNTYPEDDATA_V4]: !0,
    [le.WALLET_REQUESTPERMISSIONS]: !0,
    [le.WALLET_GETPERMISSIONS]: !0,
    [le.WALLET_WATCHASSET]: !0,
    [le.WALLET_ADDETHEREUMCHAIN]: !0,
    [le.WALLET_SWITCHETHETHEREUMCHAIN]: !0,
    [le.METAMASK_CONNECTSIGN]: !0,
    [le.METAMASK_CONNECTWITH]: !0,
    [le.PERSONAL_EC_RECOVER]: !0,
    [le.METAMASK_BATCH]: !0,
    [le.METAMASK_OPEN]: !0
}, Ym = Object.keys(Vo).map(e => e.toLowerCase()), d0 = ["eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sign"].map(e => e.toLowerCase()), aa = ".sdk-comm", Wo = "providerType", Fa = ".MMSDK_cached_address", za = ".MMSDK_cached_chainId", Mt = {
    CHAIN_CHANGED: "chainChanged",
    ACCOUNTS_CHANGED: "accountsChanged",
    DISCONNECT: "disconnect",
    CONNECT: "connect",
    CONNECTED: "connected"
}, Zm = 1e6, jt;
(function(e) {
    e.TERMINATE = "terminate",
    e.EXTENSION = "extension",
    e.INITIALIZED = "initialized"
}
)(jt || (jt = {}));
var Jm = typeof window < "u" && window.localStorage;
function Xm({instance: e, msg: t}) {
    return J(this, void 0, void 0, function*() {
        if (e._initialized || (Y("[MetaMaskSDK: connectAndSign()] provider not ready -- wait for init()"),
        yield e.init()),
        Y(`[MetaMaskSDK: connectAndSign()] activeProvider=${e.activeProvider}`),
        !e.activeProvider)
            throw new Error("SDK state invalid -- undefined provider");
        let n = /^0x([0-9A-Fa-f]{2})*$/u.test(t) ? t : function(r) {
            let i;
            if (Z !== void 0)
                i = Z.from(r, "utf8").toString("hex");
            else if (typeof TextEncoder < "u") {
                let o = new TextEncoder().encode(r);
                i = Array.from(o).map(s => s.toString(16).padStart(2, "0")).join("")
            } else {
                if (typeof Xe != "object" || !("Buffer"in Xe))
                    throw new Error("Unable to convert string to hex: No available method.");
                i = Xe.Buffer.from(r, "utf8").toString("hex")
            }
            return `0x${i}`
        }(t);
        return e.activeProvider.request({
            method: le.METAMASK_CONNECTWITH,
            params: [{
                method: le.PERSONAL_SIGN,
                params: [n]
            }]
        })
    })
}
function fd(e) {
    var t, n;
    return J(this, void 0, void 0, function*() {
        Y("[MetaMaskSDK: connectWithExtensionProvider()] ", e),
        e.sdkProvider = e.activeProvider,
        e.activeProvider = window.extension,
        window.ethereum = window.extension;
        try {
            let r = yield(t = window.extension) === null || t === void 0 ? void 0 : t.request({
                method: "eth_requestAccounts"
            });
            Y(`[MetaMaskSDK: connectWithExtensionProvider()] accounts=${r}`)
        } catch (r) {
            return void console.warn("[MetaMaskSDK: connectWithExtensionProvider()] can't request accounts error", r)
        }
        localStorage.setItem(Wo, "extension"),
        e.extensionActive = !0,
        e.emit(nt.ProviderUpdate, jt.EXTENSION),
        e.options.enableAnalytics && ((n = e.analytics) === null || n === void 0 || n.send({
            event: Le.SDK_USE_EXTENSION
        }))
    })
}
function Go(e) {
    let t;
    if (Z !== void 0)
        t = Z.from(e, "utf8").toString("base64");
    else if (typeof btoa == "function")
        t = btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/gu, (n, r) => String.fromCharCode(parseInt(r, 16))));
    else {
        if (typeof Xe != "object" || !("Buffer"in Xe))
            throw new Error("Unable to base64 encode: No available method.");
        t = Xe.Buffer.from(e, "utf8").toString("base64")
    }
    return t
}
function Qm(e, t, n, r) {
    var i, o, s, a, c, l, u, d, h, f, g, m, v, p, S, E, N, I, F, q;
    return J(this, void 0, void 0, function*() {
        let z = (i = e.state.remote) === null || i === void 0 ? void 0 : i.isReady()
          , G = (o = e.state.remote) === null || o === void 0 ? void 0 : o.isConnected()
          , U = (s = e.state.remote) === null || s === void 0 ? void 0 : s.isPaused()
          , P = At.getProvider()
          , L = (a = e.state.remote) === null || a === void 0 ? void 0 : a.getChannelId()
          , M = (c = e.state.remote) === null || c === void 0 ? void 0 : c.isAuthorized()
          , {deeplinkProtocol: T} = e.state
          , {method: D, data: j, triggeredInstaller: b} = (R => {
            var w, y, x, k;
            let O;
            Z.isBuffer(R) ? (O = R.toJSON(),
            O._isBuffer = !0) : O = R;
            let $ = (w = O?.data) === null || w === void 0 ? void 0 : w.method
              , K = !1;
            return typeof ((y = O?.data) === null || y === void 0 ? void 0 : y.params) == "object" && ((k = (x = O?.data) === null || x === void 0 ? void 0 : x.params) === null || k === void 0 ? void 0 : k.__triggeredInstaller) === !0 && (K = !0,
            O.data.params = O.data.params.wrappedParams),
            {
                method: $,
                data: O,
                triggeredInstaller: K
            }
        }
        )(t);
        if (Y(`[RCPMS: write()] method='${D}' isRemoteReady=${z} channelId=${L} isSocketConnected=${G} isRemotePaused=${U} providerConnected=${P.isConnected()}`, t),
        !L)
            return D !== le.METAMASK_GETPROVIDERSTATE && Y(`[RCPMS: write()] ${D} --> channelId is undefined`),
            r(new Error("disconnected"));
        Y(`[RCPMS: write()] remote.isPaused()=${(l = e.state.remote) === null || l === void 0 ? void 0 : l.isPaused()} authorized=${M} ready=${z} socketConnected=${G}`, t);
        let _ = (u = e.state.platformManager) === null || u === void 0 ? void 0 : u.isSecure()
          , C = (h = (d = e.state.platformManager) === null || d === void 0 ? void 0 : d.isMobileWeb()) !== null && h !== void 0 && h
          , A = (g = (f = e.state.remote) === null || f === void 0 ? void 0 : f.hasDeeplinkProtocol()) !== null && g !== void 0 && g && C && M;
        try {
            if (!b) {
                let y = JSON.stringify(j?.data);
                if (y.length > Zm)
                    return r(new Error(`Message size ${y.length} exceeds maximum allowed size of 1000000 bytes`));
                (m = e.state.remote) === null || m === void 0 || m.sendMessage(j?.data).then( () => {
                    Y(`[RCPMS: _write()] ${D} sent successfully`)
                }
                ).catch(x => {
                    Y("[RCPMS: _write()] error sending message", x)
                }
                )
            }
            if (!_)
                return Y(`[RCPMS: _write()] unsecure platform for method ${D} -- return callback`),
                r();
            if (b)
                return Y("[RCPMS: _write()] prevent deeplink -- installation completed separately."),
                r();
            let R = (S = (p = (v = e.state.remote) === null || v === void 0 ? void 0 : v.getKeyInfo()) === null || p === void 0 ? void 0 : p.ecies.public) !== null && S !== void 0 ? S : ""
              , w = encodeURI(`channelId=${L}&pubkey=${R}&comm=socket&t=d&v=2`);
            if (A) {
                let y = JSON.stringify(j?.data)
                  , x = (E = e.state.remote) === null || E === void 0 ? void 0 : E.encrypt(y);
                if (!x)
                    return Y("[RCPMS: _write()] error encrypting message"),
                    r(new Error("RemoteCommunicationPostMessageStream - disconnected"));
                w += `&scheme=${T}&rpc=${Go(x)}`
            }
            if (!(!((N = e.state.platformManager) === null || N === void 0) && N.isMetaMaskInstalled()))
                return Y("[RCPMS: _write()] prevent deeplink until installation is completed."),
                r();
            Vo[D] ? (Y(`[RCPMS: _write()] redirect link for '${D}' socketConnected=${G} connect?${w}`),
            (I = e.state.platformManager) === null || I === void 0 || I.openDeeplink(`${pi}?${w}`, `${mi}?${w}`, "_self")) : !((F = e.state.remote) === null || F === void 0) && F.isPaused() ? (Y(`[RCPMS: _write()] MM is PAUSED! deeplink with connect! targetMethod=${D}`),
            (q = e.state.platformManager) === null || q === void 0 || q.openDeeplink(`${pi}?redirect=true&${w}`, `${mi}?redirect=true&${w}`, "_self")) : Y(`[RCPMS: _write()] method ${D} doesn't need redirect.`)
        } catch (R) {
            return Y("[RCPMS: _write()] error sending message", R),
            r(new Error("RemoteCommunicationPostMessageStream - disconnected"))
        }
        return r()
    })
}
var qa = class extends Er.Duplex {
    constructor({name: t, remote: n, deeplinkProtocol: r, platformManager: i}) {
        super({
            objectMode: !0
        }),
        this.state = {
            _name: null,
            remote: null,
            deeplinkProtocol: !1,
            platformManager: null
        },
        this.state._name = t,
        this.state.remote = n,
        this.state.deeplinkProtocol = r,
        this.state.platformManager = i,
        this._onMessage = this._onMessage.bind(this),
        this.state.remote.on(te.MESSAGE, this._onMessage)
    }
    _write(t, n, r) {
        return J(this, void 0, void 0, function*() {
            return Qm(this, t, 0, r)
        })
    }
    _read() {}
    _onMessage(t) {
        return function(n, r) {
            try {
                if (Y("[RCPMS: onMessage()] message", r),
                !r || typeof r != "object" || typeof r?.data != "object")
                    return;
                if (!r?.name)
                    return void Y("[RCPMS: onMessage()] ignore message without name", r);
                if (r?.name !== fi.PROVIDER)
                    return void Y(`[RCPMS: onMessage()] ignore message with wrong name message=${r}`);
                if (Z.isBuffer(r)) {
                    let i = Z.from(r);
                    n.push(i)
                } else
                    n.push(r)
            } catch (i) {
                Y(`[RCPMS: onMessage()] ignore message error err=${i}`)
            }
        }(this, t)
    }
    start() {}
}
  , pd = 1
  , h0 = e => new Promise(t => {
    setTimeout( () => {
        t(!0)
    }
    , e)
}
)
  , e2 = ({checkInstallationOnAllCalls: e=!1, communicationLayerPreference: t, injectProvider: n, shouldShimWeb3: r, platformManager: i, installer: o, sdk: s, remoteConnection: a, debug: c}) => J(void 0, void 0, void 0, function*() {
    var l, u;
    let d = ( ({name: U, remoteConnection: P}) => {
        if (!P || !P?.getConnector())
            throw new Error("Missing remote connection parameter");
        return new qa({
            name: U,
            remote: P?.getConnector(),
            deeplinkProtocol: P?.state.deeplinkProtocol,
            platformManager: P?.getPlatformManager()
        })
    }
    )({
        name: fi.INPAGE,
        target: fi.CONTENT_SCRIPT,
        platformManager: i,
        communicationLayerPreference: t,
        remoteConnection: a
    })
      , h = i.getPlatformType()
      , f = s.options.dappMetadata
      , g = `Sdk/Javascript SdkVersion/${Vn.version} Platform/${h} dApp/${(l = f.url) !== null && l !== void 0 ? l : f.name} dAppTitle/${f.name}`
      , m = null
      , v = null
      , p = (u = s.options.storage) === null || u === void 0 ? void 0 : u.storageManager;
    if (p) {
        try {
            let U = yield p.getCachedAccounts();
            U.length > 0 && (m = U[0])
        } catch (U) {
            console.error(`[initializeMobileProvider] failed to get cached addresses: ${U}`)
        }
        try {
            let U = yield p.getCachedChainId();
            U && (v = U)
        } catch (U) {
            console.error(`[initializeMobileProvider] failed to parse cached chainId: ${U}`)
        }
    }
    Y(`[initializeMobileProvider] cachedAccountAddress: ${m}, cachedChainId: ${v}`);
    let S = !(!n || h === qe.NonBrowser || h === qe.ReactNative)
      , E = At.init({
        shouldSetOnWindow: S,
        connectionStream: d,
        shouldShimWeb3: r,
        sdkInstance: s
    })
      , N = !1
      , I = U => {
        N = U
    }
      , F = () => N
      , q = (U, P, L, M) => J(void 0, void 0, void 0, function*() {
        var T, D, j, b, _, C, A, R, w;
        let y = At.getProvider();
        if (N) {
            y.emit("display_uri", a?.state.qrcodeLink || ""),
            a?.showActiveModal();
            let ee = F();
            for (; ee; ) {
                let re = F()
                  , se = a?.isAuthorized();
                ee = re && !se,
                Y(`[initializeMobileProvider: sendRequest()] waiting for initialization to complete - initializing: ${re} authorized: ${se}`),
                yield h0(1e3)
            }
            return Y("[initializeMobileProvider: sendRequest()] initial method completed -- prevent installation and call provider"),
            L(...P)
        }
        let x = i.isMetaMaskInstalled()
          , k = a?.isConnected()
          , O = null
          , $ = null
          , K = null;
        if (O = (T = y.getSelectedAddress()) !== null && T !== void 0 ? T : m,
        K = y.getChainId() || v,
        O && p && O !== m && p.persistAccounts([O]).catch(ee => {
            console.error(`[initializeMobileProvider] failed to persist account: ${ee}`)
        }
        ),
        K && (v = K,
        p && p.persistChainId(K).catch(ee => {
            console.error(`[initializeMobileProvider] failed to persist chainId: ${ee}`)
        }
        )),
        Y("[initializeMobileProvider: sendRequest()]", {
            selectedAddress: O,
            chainId: K
        }),
        M && Y(`[initializeMobileProvider: sendRequest()] method=${U} ongoing=${N} selectedAddress=${O} isInstalled=${x} checkInstallationOnAllCalls=${e} socketConnected=${k}`),
        O && U.toLowerCase() === le.ETH_ACCOUNTS.toLowerCase())
            return [O];
        if (K && U.toLowerCase() === le.ETH_CHAINID.toLowerCase())
            return K;
        let H = [le.ETH_REQUESTACCOUNTS, le.WALLET_REQUESTPERMISSIONS, le.METAMASK_CONNECTSIGN, le.METAMASK_CONNECTWITH]
          , V = !Vo[U]
          , X = (D = s.options.readonlyRPCMap) === null || D === void 0 ? void 0 : D[K];
        if (X && V)
            try {
                let ee = (j = P?.[0]) === null || j === void 0 ? void 0 : j.params
                  , re = yield( ({rpcEndpoint: se, method: ce, sdkInfo: ie, params: ne}) => J(void 0, void 0, void 0, function*() {
                    let ae = JSON.stringify({
                        jsonrpc: "2.0",
                        method: ce,
                        params: ne,
                        id: (pd += 1,
                        pd)
                    }), ue = {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }, ye;
                    se.includes("infura") && (ue["Metamask-Sdk-Info"] = ie);
                    try {
                        ye = yield(0,
                        nc.default)(se, {
                            method: "POST",
                            headers: ue,
                            body: ae
                        })
                    } catch (me) {
                        throw me instanceof Error ? new Error(`Failed to fetch from RPC: ${me.message}`) : new Error(`Failed to fetch from RPC: ${me}`)
                    }
                    if (!ye.ok)
                        throw new Error(`Server responded with a status of ${ye.status}`);
                    return (yield ye.json()).result
                }))({
                    rpcEndpoint: X,
                    sdkInfo: g,
                    method: U,
                    params: ee || []
                });
                return M && Y(`initializeProvider::ReadOnlyRPCResponse ${re}`),
                re
            } catch (ee) {
                console.warn(`[initializeMobileProvider: sendRequest()] method=${U} readOnlyRPCRequest failed:`, ee)
            }
        if ((!x || x && !k) && U !== le.METAMASK_GETPROVIDERSTATE) {
            let ee = ((b = P?.[0]) === null || b === void 0 ? void 0 : b.params) || [];
            if (H.indexOf(U) !== -1 || e) {
                I(!0);
                let re = U === le.METAMASK_CONNECTWITH
                  , se = `${Date.now()}`;
                try {
                    yield o.start({
                        wait: !1,
                        connectWith: re ? {
                            method: U,
                            id: se,
                            params: ee
                        } : void 0
                    }),
                    yield new Promise( (ce, ie) => {
                        a?.isAuthorized() && (Y("[initializeMobileProvider: sendRequest()] already authorized"),
                        ce(!0)),
                        a?.getConnector().once(te.AUTHORIZED, () => {
                            ce(!0)
                        }
                        ),
                        s.once(te.PROVIDER_UPDATE, ne => {
                            Y(`[initializeMobileProvider: sendRequest()] PROVIDER_UPDATE --- remote provider request interupted type=${ne}`),
                            ne === jt.EXTENSION ? ie(te.PROVIDER_UPDATE) : ie(new Error("Connection Terminated"))
                        }
                        )
                    }
                    )
                } catch (ce) {
                    if (jt.EXTENSION === ce) {
                        if (Y(`[initializeMobileProvider: sendRequest()] extension provider detect: re-create ${U} on the active provider`),
                        U.toLowerCase() === le.METAMASK_CONNECTSIGN.toLowerCase()) {
                            let ie = yield(_ = s.getProvider()) === null || _ === void 0 ? void 0 : _.request({
                                method: le.ETH_REQUESTACCOUNTS,
                                params: []
                            });
                            if (!ie.length)
                                throw new Error("SDK state invalid -- undefined accounts");
                            let ne = yield(C = s.getProvider()) === null || C === void 0 ? void 0 : C.request({
                                method: le.PERSONAL_SIGN,
                                params: [ee[0], ie[0]]
                            });
                            return s.emit(nt.ConnectWithResponse, ne),
                            ne
                        }
                        if (U.toLowerCase() === le.METAMASK_CONNECTWITH.toLowerCase()) {
                            let[ie] = ee
                              , ne = yield( ({method: ae, sdk: ue, params: ye}) => J(void 0, void 0, void 0, function*() {
                                var me, de, ge, be;
                                if (!ue.isExtensionActive())
                                    throw new Error("SDK state invalid -- extension is not active");
                                Y("[MetaMaskProvider: extensionConnectWithOverwrite()] Overwriting request method", ae, ye);
                                let Pe = yield(me = ue.getProvider()) === null || me === void 0 ? void 0 : me.request({
                                    method: le.ETH_REQUESTACCOUNTS,
                                    params: []
                                });
                                if (!Pe.length)
                                    throw new Error("SDK state invalid -- undefined accounts");
                                if (ae?.toLowerCase() === le.PERSONAL_SIGN.toLowerCase()) {
                                    let ft = {
                                        method: ae,
                                        params: [ye[0], Pe[0]]
                                    };
                                    return yield(de = ue.getProvider()) === null || de === void 0 ? void 0 : de.request(ft)
                                }
                                if (ae?.toLowerCase() === le.ETH_SENDTRANSACTION.toLowerCase()) {
                                    let ft = {
                                        method: ae,
                                        params: [Object.assign(Object.assign({}, ye[0]), {
                                            from: Pe[0]
                                        })]
                                    };
                                    return yield(ge = ue.getProvider()) === null || ge === void 0 ? void 0 : ge.request(ft)
                                }
                                return d0.includes(ae.toLowerCase()) ? (console.warn(`MetaMaskSDK connectWith method=${ae} -- not handled by the extension -- call separately`),
                                Pe) : yield(be = ue.getProvider()) === null || be === void 0 ? void 0 : be.request({
                                    method: ae,
                                    params: ye
                                })
                            }))({
                                method: ie.method,
                                sdk: s,
                                params: ie.params
                            });
                            return s.emit(nt.ConnectWithResponse, ne),
                            ne
                        }
                        return Y(`[initializeMobileProvider: sendRequest()] sending '${U}' on active provider`, ee),
                        yield(A = s.getProvider()) === null || A === void 0 ? void 0 : A.request({
                            method: U,
                            params: ee
                        })
                    }
                    throw ce === te.REJECTED ? (a?.closeModal(),
                    (R = s.getProvider()) === null || R === void 0 || R.handleDisconnect({
                        terminate: !1
                    }),
                    Object.assign(new Error("User rejected connection"), {
                        code: 4001
                    })) : (Y(`[initializeMobileProvider: sendRequest()] failed to start installer: ${ce}`),
                    ce)
                } finally {
                    I(!1)
                }
                if (U === le.ETH_REQUESTACCOUNTS)
                    return $ = yield new Promise(ce => {
                        let ie = setInterval( () => {
                            let {accounts: ne} = y.getState();
                            ne && (clearInterval(ie),
                            ce(ne))
                        }
                        , 100)
                    }
                    ),
                    Y(`[initializeMobileProvider: sendRequest()] selectedAddress: ${O} --- SKIP rpc call`),
                    $;
                if (U === le.METAMASK_CONNECTWITH)
                    try {
                        let ce = 0, ie = 5, ne = ({resolve: me, reject: de}) => {
                            ce += 1;
                            let ge = a?.getConnector().getRPCMethodTracker()
                              , be = ge?.[se];
                            return Y(`TRACKER: update method ${se}`, be),
                            be?.result ? (Y("[initializeMobileProvider: sendRequest()] found result", be.result),
                            s.emit(nt.ConnectWithResponse, be.result),
                            void me(be.result)) : be?.error ? (Y("[initializeMobileProvider: sendRequest()] found error", be.error),
                            void de(be.error)) : ce >= ie ? (Y("[initializeMobileProvider: sendRequest()] max message count reached without result"),
                            void de(new Error("Max message count reached without result"))) : void Y("[initializeMobileProvider: sendRequest()] not found yet, need to wait for next update")
                        }
                        , ae, ue, ye = yield new Promise( (me, de) => {
                            let ge = a?.getConnector().getRPCMethodTracker();
                            Y(`TRACKER: method ${se}`, ge),
                            ge?.[se].result ? (Y("[initializeMobileProvider: sendRequest()] found result", ge?.[se].result),
                            me(ge?.[se].result)) : ge?.[se].error && (Y("[initializeMobileProvider: sendRequest()] found error", ge?.[se].error),
                            de(ge?.[se].error)),
                            ue = () => ne({
                                resolve: me,
                                reject: de
                            }),
                            ae = a?.getConnector().on(te.RPC_UPDATE, ue)
                        }
                        );
                        return ue && ae?.off(te.RPC_UPDATE, ue),
                        Y("TRACKER: result", ye),
                        ye
                    } catch (ce) {
                        throw Y("[initializeMobileProvider: sendRequest()] error:", ce),
                        ce
                    }
                return P[0] && typeof P[0] == "object" && (P[0].params = {
                    __triggeredInstaller: !0,
                    wrappedParams: P[0].params
                }),
                L(...P)
            }
            if (i.isSecure() && Vo[U])
                return L(...P);
            if (s.isExtensionActive())
                return Y(`[initializeMobileProvider: sendRequest()] EXTENSION active - redirect request '${U}' to it`, P, ee),
                yield(w = s.getProvider()) === null || w === void 0 ? void 0 : w.request({
                    method: U,
                    params: ee
                });
            throw Y(`[initializeMobileProvider: sendRequest()] method=${U} --- skip --- not connected/installed`),
            new Error("MetaMask is not connected/installed, please call eth_requestAccounts to connect first.")
        }
        try {
            let ee = yield L(...P);
            if (Y(`[initializeMobileProvider: sendRequest()] method=${U} rpcResponse`, ee),
            U === le.WALLET_REQUESTPERMISSIONS) {
                let re = ee.reduce( (se, ce) => {
                    var ie;
                    if (ce.parentCapability === "eth_accounts") {
                        let ne = (ie = ce.caveats.find(ae => ae.type === "restrictReturnedAccounts")) === null || ie === void 0 ? void 0 : ie.value;
                        ne && se.push(...ne)
                    }
                    return se
                }
                , []);
                Y("[initializeMobileProvider: sendRequest()] accountsToPersist:", re),
                re.length > 0 && (y.handleAccountsChanged(re, !1),
                p?.persistAccounts(re))
            }
            return ee
        } catch (ee) {
            throw console.error("[initializeMobileProvider: sendRequest()] error:", ee),
            ee
        }
    })
      , {request: z} = E;
    E.request = (...U) => J(void 0, void 0, void 0, function*() {
        return q(U?.[0].method, U, z, c)
    });
    let {send: G} = E;
    return E.send = (...U) => J(void 0, void 0, void 0, function*() {
        return q(U?.[0], U, G, c)
    }),
    Y("[initializeMobileProvider: sendRequest()] metamaskStream.start()"),
    d.start(),
    E
});
function t2(e) {
    var t, n, r, i;
    return J(this, void 0, void 0, function*() {
        let {options: o} = e
          , s = {
            communicationLayerPreference: (t = o.communicationLayerPreference) !== null && t !== void 0 ? t : Un.SOCKET,
            platformManager: e.platformManager,
            sdk: e,
            checkInstallationOnAllCalls: o.checkInstallationOnAllCalls,
            injectProvider: (n = o.injectProvider) === null || n === void 0 || n,
            shouldShimWeb3: (r = o.shouldShimWeb3) === null || r === void 0 || r,
            extensionOnly: (i = o.extensionOnly) === null || i === void 0 || i,
            installer: e.installer,
            remoteConnection: e.remoteConnection,
            debug: e.debug
        }
          , a = yield e2(s);
        e.activeProvider = a,
        function(c) {
            var l, u, d, h;
            (u = (l = c.remoteConnection) === null || l === void 0 ? void 0 : l.getConnector()) === null || u === void 0 || u.on(nt.ConnectionStatus, f => {
                c.emit(nt.ConnectionStatus, f)
            }
            ),
            (h = (d = c.remoteConnection) === null || d === void 0 ? void 0 : d.getConnector()) === null || h === void 0 || h.on(nt.ServiceStatus, f => {
                c.emit(nt.ServiceStatus, f)
            }
            )
        }(e)
    })
}
var n2 = "sdk"
  , Va = class {
    constructor({serverUrl: t, enabled: n, originatorInfo: r}) {
        this.serverURL = vr,
        this.serverURL = t,
        this.originatorInfo = r,
        this.enabled = n == null || n
    }
    send({event: t, params: n}) {
        if (!this.enabled)
            return;
        let r = Object.assign(Object.assign({
            id: n2,
            event: t,
            sdkVersion: Vn.version
        }, this.originatorInfo), {
            params: n
        });
        Y(`[Analytics: send()] event: ${t}`, r),
        tn(r, this.serverURL).catch(i => {
            Y(`[Analytics: send()] error: ${i}`)
        }
        )
    }
}
  , r2 = () => {
    if (typeof document > "u")
        return;
    let e, t = document.getElementsByTagName("link");
    for (let n = 0; n < t.length; n++)
        t[n].getAttribute("rel") !== "icon" && t[n].getAttribute("rel") !== "shortcut icon" || (e = t[n].getAttribute("href"));
    return e
}
  , i2 = 163400;
function md(e) {
    var t, n, r;
    let {dappMetadata: i} = e
      , o = function({url: u, name: d}) {
        var h;
        let f = u + d
          , g = Go(f);
        if (!localStorage)
            return "";
        let m = (h = localStorage.getItem(g)) !== null && h !== void 0 ? h : "";
        if (!m) {
            m = xr();
            try {
                localStorage.setItem(g, m)
            } catch {
                return ""
            }
        }
        return m
    }({
        url: (t = i?.url) !== null && t !== void 0 ? t : "no_url",
        name: (n = i?.name) !== null && n !== void 0 ? n : "no_name"
    })
      , s = (r = e.platformManager) === null || r === void 0 ? void 0 : r.getPlatformType()
      , a = s === qe.DesktopWeb
      , c = s === qe.MetaMaskMobileWebview
      , l = "N/A";
    return a ? l = "extension" : c && (l = "mobile"),
    {
        id: o,
        from: l
    }
}
var Wa = ({provider: e, sdkInstance: t}) => {
    if ("state"in e)
        throw new Error("INVALID EXTENSION PROVIDER");
    return new Proxy(e,{
        get: (n, r) => r === "request" ? function(i) {
            var o, s;
            return J(this, void 0, void 0, function*() {
                Y("[wrapExtensionProvider()] Overwriting request method", i);
                let {method: a, params: c} = i
                  , l = Ym.includes(a.toLowerCase())
                  , {id: u, from: d} = md(t);
                if (l && ((o = t.analytics) === null || o === void 0 || o.send({
                    event: Le.SDK_RPC_REQUEST,
                    params: {
                        method: a,
                        from: d,
                        id: u
                    }
                })),
                a === le.METAMASK_BATCH && Array.isArray(c))
                    return ( ({target: f, args: g, trackEvent: m, sdkInstance: v}) => J(void 0, void 0, void 0, function*() {
                        var p, S;
                        if (g.method !== "metamask_batch")
                            throw new Error("Invalid usage");
                        let E = []
                          , N = (p = g?.params) !== null && p !== void 0 ? p : [];
                        for (let q of N) {
                            let z = yield f?.request({
                                method: q.method,
                                params: q.params
                            });
                            E.push(z)
                        }
                        let {id: I, from: F} = md(v);
                        return m && ((S = v.analytics) === null || S === void 0 || S.send({
                            event: Le.SDK_RPC_REQUEST_DONE,
                            params: {
                                method: g.method,
                                from: F,
                                id: I
                            }
                        })),
                        E
                    }))({
                        target: n,
                        args: i,
                        trackEvent: l,
                        sdkInstance: t
                    });
                if (a.toLowerCase() === le.METAMASK_CONNECTSIGN.toLowerCase() && Array.isArray(c))
                    return ( ({target: f, params: g}) => J(void 0, void 0, void 0, function*() {
                        let m = yield f.request({
                            method: le.ETH_REQUESTACCOUNTS,
                            params: []
                        });
                        if (!m.length)
                            throw new Error("SDK state invalid -- undefined accounts");
                        return yield f.request({
                            method: le.PERSONAL_SIGN,
                            params: [g[0], m[0]]
                        })
                    }))({
                        target: n,
                        params: c
                    });
                if (a.toLowerCase() === le.METAMASK_CONNECTWITH.toLowerCase() && Array.isArray(c))
                    return ( ({target: f, params: g}) => J(void 0, void 0, void 0, function*() {
                        let[m] = g
                          , v = m.method
                          , p = m.params
                          , S = yield f.request({
                            method: le.ETH_REQUESTACCOUNTS,
                            params: []
                        });
                        if (!S.length)
                            throw new Error("SDK state invalid -- undefined accounts");
                        return v?.toLowerCase() === le.PERSONAL_SIGN.toLowerCase() ? yield f.request({
                            method: v,
                            params: [p[0], S[0]]
                        }) : v?.toLowerCase() === le.ETH_SENDTRANSACTION.toLowerCase() ? yield f.request({
                            method: v,
                            params: [Object.assign(Object.assign({}, p[0]), {
                                from: S[0]
                            })]
                        }) : d0.includes(v.toLowerCase()) ? (console.warn(`MetaMaskSDK connectWith method=${v} -- not handled by the extension -- call separately`),
                        S) : yield f.request({
                            method: v,
                            params: p
                        })
                    }))({
                        target: n,
                        params: c
                    });
                let h;
                try {
                    return h = yield n.request(i),
                    h
                } finally {
                    l && ((s = t.analytics) === null || s === void 0 || s.send({
                        event: Le.SDK_RPC_REQUEST_DONE,
                        params: {
                            method: a,
                            from: d,
                            id: u
                        }
                    }))
                }
            })
        }
        : r === "getChainId" ? function() {
            return e.chainId
        }
        : r === "getNetworkVersion" ? function() {
            return e.networkVersion
        }
        : r === "getSelectedAddress" ? function() {
            return e.selectedAddress
        }
        : r === "isConnected" ? function() {
            return e._state.isConnected
        }
        : n[r]
    })
}
, Yo;
function o2({mustBeMetaMask: e, sdkInstance: t}) {
    return J(this, void 0, void 0, function*() {
        if (typeof window > "u")
            throw new Error("window not available");
        try {
            let n = yield new Promise( (r, i) => {
                let o = setTimeout( () => {
                    i(new Error("eip6963RequestProvider timed out"))
                }
                , 500);
                window.addEventListener(Yo.Announce, s => {
                    let a = s
                      , {detail: {info: c, provider: l}={}} = a
                      , {name: u, rdns: d, uuid: h} = c ?? {};
                    Gm.test(h) && u.startsWith(hd.NAME) && hd.RDNS.includes(d) && (clearTimeout(o),
                    r(l))
                }
                ),
                window.dispatchEvent(new Event(Yo.Request))
            }
            );
            return Wa({
                provider: n,
                sdkInstance: t
            })
        } catch {
            if (!e && window.ethereum)
                return Wa({
                    provider: window.ethereum,
                    sdkInstance: t
                });
            throw new Error("Provider not found")
        }
    })
}
(function(e) {
    e.Announce = "eip6963:announceProvider",
    e.Request = "eip6963:requestProvider"
}
)(Yo || (Yo = {}));
var s2 = e => J(void 0, void 0, void 0, function*() {
    let {options: t} = e
      , {infuraAPIKey: n} = t;
    if (!n)
        return;
    let r = {
        "0x1": `https://mainnet.infura.io/v3/${n}`,
        "0x5": `https://goerli.infura.io/v3/${n}`,
        "0xaa36a7": `https://sepolia.infura.io/v3/${n}`,
        "0xe708": `https://linea-mainnet.infura.io/v3/${n}`,
        "0xe704": `https://linea-goerli.infura.io/v3/${n}`,
        "0x89": `https://polygon-mainnet.infura.io/v3/${n}`,
        "0x13881": `https://polygon-mumbai.infura.io/v3/${n}`,
        "0x45": `https://optimism-mainnet.infura.io/v3/${n}`,
        "0x1a4": `https://optimism-goerli.infura.io/v3/${n}`,
        "0xa4b1": `https://arbitrum-mainnet.infura.io/v3/${n}`,
        "0x66eed": `https://arbitrum-goerli.infura.io/v3/${n}`,
        "0x2a15c308d": `https://palm-mainnet.infura.io/v3/${n}`,
        "0x2a15c3083": `https://palm-testnet.infura.io/v3/${n}`,
        "0xa86a": `https://avalanche-mainnet.infura.io/v3/${n}`,
        "0xa869": `https://avalanche-fuji.infura.io/v3/${n}`,
        "0x4e454152": `https://aurora-mainnet.infura.io/v3/${n}`,
        "0x4e454153": `https://aurora-testnet.infura.io/v3/${n}`,
        "0x534e5f4d41494e": `https://starknet-mainnet.infura.io/v3/${n}`,
        "0x534e5f474f45524c49": `https://starknet-goerli.infura.io/v3/${n}`,
        "0x534e5f474f45524c4932": `https://starknet-goerli2.infura.io/v3/${n}`,
        "0xa4ec": `https://celo-mainnet.infura.io/v3/${n}`,
        "0xaef3": `https://celo-alfajores.infura.io/v3/${n}`
    };
    e.options.readonlyRPCMap ? e.options.readonlyRPCMap = Object.assign(Object.assign({}, e.options.readonlyRPCMap), r) : e.options.readonlyRPCMap = r
})
  , a2 = e => J(void 0, void 0, void 0, function*() {
    let {options: t} = e
      , {readonlyRPCMap: n} = t;
    if (n)
        try {
            Y("[MetaMaskSDK: setupReadOnlyRPCProviders()] Setting up Readonly RPC Providers", n),
            e.setReadOnlyRPCCalls(!0)
        } catch {
            throw new Error("Invalid Infura Settings")
        }
});
function c2(e, t, n, r) {
    return new (n || (n = Promise))(function(i, o) {
        function s(l) {
            try {
                c(r.next(l))
            } catch (u) {
                o(u)
            }
        }
        function a(l) {
            try {
                c(r.throw(l))
            } catch (u) {
                o(u)
            }
        }
        function c(l) {
            var u;
            l.done ? i(l.value) : (u = l.value,
            u instanceof n ? u : new n(function(d) {
                d(u)
            }
            )).then(s, a)
        }
        c((r = r.apply(e, [])).next())
    }
    )
}
function l2(e, t) {
    var n, r, i, o, s = {
        label: 0,
        sent: function() {
            if (1 & i[0])
                throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }
    ),
    o;
    function a(c) {
        return function(l) {
            return function(u) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; s; )
                    try {
                        if (n = 1,
                        r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r),
                        0) : r.next) && !(i = i.call(r, u[1])).done)
                            return i;
                        switch (r = 0,
                        i && (u = [2 & u[0], i.value]),
                        u[0]) {
                        case 0:
                        case 1:
                            i = u;
                            break;
                        case 4:
                            return s.label++,
                            {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            s.label++,
                            r = u[1],
                            u = [0];
                            continue;
                        case 7:
                            u = s.ops.pop(),
                            s.trys.pop();
                            continue;
                        default:
                            if (i = s.trys,
                            !((i = i.length > 0 && i[i.length - 1]) || u[0] !== 6 && u[0] !== 2)) {
                                s = 0;
                                continue
                            }
                            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                                s.label = u[1];
                                break
                            }
                            if (u[0] === 6 && s.label < i[1]) {
                                s.label = i[1],
                                i = u;
                                break
                            }
                            if (i && s.label < i[2]) {
                                s.label = i[2],
                                s.ops.push(u);
                                break
                            }
                            i[2] && s.ops.pop(),
                            s.trys.pop();
                            continue
                        }
                        u = t.call(e, s)
                    } catch (d) {
                        u = [6, d],
                        r = 0
                    } finally {
                        n = i = 0
                    }
                if (5 & u[0])
                    throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }([c, l])
        }
    }
}
var gd = "INSTALLED"
  , yd = "NOT_INSTALLED"
  , vd = "REGISTERED"
  , bd = "REGISTERING"
  , wd = "RELOADING"
  , Ed = {
    CHROME: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
    FIREFOX: "https://addons.mozilla.org/firefox/addon/ether-metamask/",
    DEFAULT: "https://metamask.io"
}
  , Xi = "REGISTRATION_IN_PROGRESS"
  , _d = "FORWARDER_ID"
  , u2 = function() {
    function e(t) {
        var n = t === void 0 ? {} : t
          , r = n.forwarderOrigin
          , i = r === void 0 ? "https://fwd.metamask.io" : r
          , o = n.forwarderMode
          , s = o === void 0 ? e.FORWARDER_MODE.INJECT : o;
        this.forwarderOrigin = i,
        this.forwarderMode = s,
        this.state = e.isMetaMaskInstalled() ? gd : yd;
        var a = e._detectBrowser();
        this.downloadUrl = a ? Ed[a] : Ed.DEFAULT,
        this._onMessage = this._onMessage.bind(this),
        this._onMessageFromForwarder = this._onMessageFromForwarder.bind(this),
        this._openForwarder = this._openForwarder.bind(this),
        this._openDownloadPage = this._openDownloadPage.bind(this),
        this.startOnboarding = this.startOnboarding.bind(this),
        this.stopOnboarding = this.stopOnboarding.bind(this),
        window.addEventListener("message", this._onMessage),
        s === e.FORWARDER_MODE.INJECT && sessionStorage.getItem(Xi) === "true" && e._injectForwarder(this.forwarderOrigin)
    }
    return e.prototype._onMessage = function(t) {
        if (t.origin === this.forwarderOrigin)
            return t.data.type === "metamask:reload" ? this._onMessageFromForwarder(t) : void console.debug("Unknown message from '" + t.origin + "' with data " + JSON.stringify(t.data))
    }
    ,
    e.prototype._onMessageUnknownStateError = function(t) {
        throw new Error("Unknown state: '" + t + "'")
    }
    ,
    e.prototype._onMessageFromForwarder = function(t) {
        return c2(this, 0, void 0, function() {
            return l2(this, function(n) {
                switch (n.label) {
                case 0:
                    switch (this.state) {
                    case wd:
                        return [3, 1];
                    case yd:
                        return [3, 2];
                    case gd:
                        return [3, 3];
                    case bd:
                        return [3, 5];
                    case vd:
                        return [3, 6]
                    }
                    return [3, 7];
                case 1:
                    return console.debug("Ignoring message while reloading"),
                    [3, 8];
                case 2:
                    return console.debug("Reloading now to register with MetaMask"),
                    this.state = wd,
                    location.reload(),
                    [3, 8];
                case 3:
                    return console.debug("Registering with MetaMask"),
                    this.state = bd,
                    [4, e._register()];
                case 4:
                    return n.sent(),
                    this.state = vd,
                    t.source.postMessage({
                        type: "metamask:registrationCompleted"
                    }, t.origin),
                    this.stopOnboarding(),
                    [3, 8];
                case 5:
                    return console.debug("Already registering - ignoring reload message"),
                    [3, 8];
                case 6:
                    return console.debug("Already registered - ignoring reload message"),
                    [3, 8];
                case 7:
                    this._onMessageUnknownStateError(this.state),
                    n.label = 8;
                case 8:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.startOnboarding = function() {
        sessionStorage.setItem(Xi, "true"),
        this._openDownloadPage(),
        this._openForwarder()
    }
    ,
    e.prototype.stopOnboarding = function() {
        sessionStorage.getItem(Xi) === "true" && (this.forwarderMode === e.FORWARDER_MODE.INJECT && (console.debug("Removing forwarder"),
        e._removeForwarder()),
        sessionStorage.setItem(Xi, "false"))
    }
    ,
    e.prototype._openForwarder = function() {
        this.forwarderMode === e.FORWARDER_MODE.OPEN_TAB ? window.open(this.forwarderOrigin, "_blank") : e._injectForwarder(this.forwarderOrigin)
    }
    ,
    e.prototype._openDownloadPage = function() {
        window.open(this.downloadUrl, "_blank")
    }
    ,
    e.isMetaMaskInstalled = function() {
        return !!(window.ethereum && window.ethereum.isMetaMask)
    }
    ,
    e._register = function() {
        return window.ethereum.request({
            method: "wallet_registerOnboarding"
        })
    }
    ,
    e._injectForwarder = function(t) {
        var n = document.body
          , r = document.createElement("iframe");
        r.setAttribute("height", "0"),
        r.setAttribute("width", "0"),
        r.setAttribute("style", "display: none;"),
        r.setAttribute("src", t),
        r.setAttribute("id", _d),
        n.insertBefore(r, n.children[0])
    }
    ,
    e._removeForwarder = function() {
        var t;
        (t = document.getElementById(_d)) === null || t === void 0 || t.remove()
    }
    ,
    e._detectBrowser = function() {
        var t = l0.parse(window.navigator.userAgent);
        return t.browser.name === "Firefox" ? "FIREFOX" : ["Chrome", "Chromium"].includes(t.browser.name || "") ? "CHROME" : null
    }
    ,
    e.FORWARDER_MODE = {
        INJECT: "INJECT",
        OPEN_TAB: "OPEN_TAB"
    },
    e
}();
function d2(e, {wait: t=!1}) {
    return J(this, void 0, void 0, function*() {
        return Y(`[MetamaskInstaller: startInstaller()] wait=${t}`),
        t && (yield h0(1e3)),
        yield e.checkInstallation()
    })
}
var Ga = class {
    constructor({remote: t, preferDesktop: n, platformManager: r, debug: i=!1}) {
        this.state = {
            isInstalling: !1,
            hasInstalled: !1,
            resendRequest: null,
            preferDesktop: !1,
            platformManager: null,
            remote: null,
            debug: !1,
            connectWith: void 0
        },
        this.state.remote = t,
        this.state.preferDesktop = n,
        this.state.platformManager = r,
        this.state.debug = i
    }
    startDesktopOnboarding() {
        return function() {
            return J(this, void 0, void 0, function*() {
                Y("[MetamaskInstaller: startDesktopOnboarding() starting desktop onboarding"),
                window.ethereum && (window.ethereum = void 0),
                new u2().startOnboarding()
            })
        }()
    }
    redirectToProperInstall() {
        return J(this, void 0, void 0, function*() {
            return function(t) {
                var n, r;
                return J(this, void 0, void 0, function*() {
                    let {state: i} = t
                      , o = (n = i.platformManager) === null || n === void 0 ? void 0 : n.getPlatformType();
                    if (Y(`[MetamaskInstaller: redirectToProperInstall()] platform=${o}`),
                    o === qe.MetaMaskMobileWebview)
                        return !1;
                    i.isInstalling = !0;
                    try {
                        yield(r = i.remote) === null || r === void 0 ? void 0 : r.startConnection({
                            connectWith: i.connectWith
                        }),
                        i.isInstalling = !1,
                        i.hasInstalled = !0
                    } catch (s) {
                        throw i.isInstalling = !1,
                        s
                    }
                    return !0
                })
            }(this)
        })
    }
    checkInstallation() {
        return J(this, void 0, void 0, function*() {
            return function(t) {
                var n;
                return J(this, void 0, void 0, function*() {
                    let {state: r} = t
                      , i = (n = r.platformManager) === null || n === void 0 ? void 0 : n.isMetaMaskInstalled();
                    return Y(`[MetamaskInstaller: checkInstallation()] isInstalled=${i}`),
                    !!i || (yield t.redirectToProperInstall())
                })
            }(this)
        })
    }
    start({wait: t=!1, connectWith: n}) {
        return J(this, void 0, void 0, function*() {
            this.state.connectWith = n,
            Y(`[MetaMaskInstaller: start()] wait=${t}`, n),
            yield d2(this, {
                wait: t
            })
        })
    }
}
  , Zo = class {
    constructor({debug: t, sdkVersion: n}) {
        this.containers = {
            install: void 0,
            pending: void 0,
            select: void 0
        },
        this.defined = {
            install: !1,
            pending: !1,
            select: !1
        },
        this.debug = t != null && t,
        this.sdkVersion = n
    }
    loadComponent(t) {
        return J(this, void 0, void 0, function*() {
            if (!this.defined[t]) {
                this.defined[t] = !0;
                try {
                    let n = yield Promise.resolve().then(function() {
                        return z2
                    });
                    console.log("loader", n),
                    n.defineCustomElements()
                } catch (n) {
                    console.error(`Failed to load ${t} modal:`, n)
                }
            }
        })
    }
    renderInstallModal(t) {
        var n;
        return J(this, void 0, void 0, function*() {
            this.debug && console.debug("ModalLoader: renderInstallModal", t),
            this.containers.install = t.parentElement,
            yield this.loadComponent("install");
            let r = document.createElement("mm-install-modal");
            r.link = t.link,
            r.preferDesktop = t.preferDesktop,
            r.sdkVersion = (n = t.sdkVersion) !== null && n !== void 0 ? n : this.sdkVersion,
            r.addEventListener("close", ({detail: {shouldTerminate: i}}) => t.onClose(i)),
            r.addEventListener("startDesktopOnboarding", t.metaMaskInstaller.startDesktopOnboarding),
            r.addEventListener("trackAnalytics", i => {
                var o;
                return (o = t.onAnalyticsEvent) === null || o === void 0 ? void 0 : o.call(t, i.detail)
            }
            ),
            t.parentElement.appendChild(r)
        })
    }
    renderSelectModal(t) {
        var n;
        return J(this, void 0, void 0, function*() {
            this.containers.select = t.parentElement,
            yield this.loadComponent("select");
            let r = document.createElement("mm-select-modal");
            r.link = t.link,
            r.sdkVersion = (n = t.sdkVersion) !== null && n !== void 0 ? n : this.sdkVersion,
            r.preferDesktop = t.preferDesktop,
            r.addEventListener("close", ({detail: {shouldTerminate: i}}) => t.onClose(i)),
            r.addEventListener("connectWithExtension", t.connectWithExtension),
            t.parentElement.appendChild(r),
            setTimeout( () => this.updateQRCode(t.link), 100)
        })
    }
    renderPendingModal(t) {
        var n;
        return J(this, void 0, void 0, function*() {
            this.containers.pending = t.parentElement,
            yield this.loadComponent("pending");
            let r = document.createElement("mm-pending-modal");
            r.sdkVersion = (n = t.sdkVersion) !== null && n !== void 0 ? n : this.sdkVersion,
            r.displayOTP = t.displayOTP,
            r.addEventListener("close", t.onClose),
            r.addEventListener("updateOTPValue", ({detail: {otpValue: i}}) => t.updateOTPValue(i)),
            t.onDisconnect && r.addEventListener("disconnect", t.onDisconnect),
            t.parentElement.appendChild(r)
        })
    }
    updateOTPValue(t) {
        let n = () => {
            var r;
            let i = (r = this.containers.pending) === null || r === void 0 ? void 0 : r.querySelector("mm-pending-modal");
            return !!i && (i.otpCode = t,
            !0)
        }
        ;
        setTimeout( () => {
            n()
        }
        , 800)
    }
    updateQRCode(t) {
        var n, r;
        let i = (n = this.containers.install) === null || n === void 0 ? void 0 : n.querySelector("mm-install-modal");
        if (i)
            i.link = t;
        else {
            let o = (r = this.containers.select) === null || r === void 0 ? void 0 : r.querySelector("mm-select-modal");
            o && (o.link = t)
        }
    }
    unmount() {
        Object.entries(this.containers).forEach( ([t,n]) => {
            var r;
            (r = n?.parentNode) === null || r === void 0 || r.removeChild(n),
            this.containers[t] = void 0
        }
        )
    }
}
  , h2 = ({link: e, debug: t, installer: n, terminate: r, connectWithExtension: i, preferDesktop: o, onAnalyticsEvent: s}) => {
    let a = null
      , c = null;
    Y("[UI: InstallModal-web: sdkWebInstallModal()] ################## Installing Modal #################"),
    Y(`[UI: InstallModal-web: sdkWebInstallModal()] link=${e}`),
    Y(`[UI: InstallModal-web: sdkWebInstallModal()] npx uri-scheme open "${e}" --ios`),
    Y(`[UI: InstallModal-web: sdkWebInstallModal()] npx uri-scheme open "${e}" --android`),
    Y(`[UI: InstallModal-web: sdkWebInstallModal()] adb shell am start -a android.intent.action.VIEW -d "${e}"`);
    let l = u => {
        var d;
        Y("[UI: InstallModal-web: sdkWebInstallModal()] installModal-web unmounting install modal -- shouldTerminate:", u, c),
        c?.parentNode && ((d = c.parentNode) === null || d === void 0 || d.removeChild(c)),
        c = null,
        a = null,
        u === !0 && r?.()
    }
    ;
    return {
        mount: u => {
            if (Y("[UI: InstallModal-web: sdkWebInstallModal()] installModal-web mounting install modal", c),
            c)
                return c.style.display = "block",
                void (a == null || a.updateQRCode(u));
            a = new Zo({
                debug: t,
                sdkVersion: Vn.version
            }),
            c = document.createElement("div"),
            document.body.appendChild(c),
            window.extension ? a.renderSelectModal({
                parentElement: c,
                connectWithExtension: () => {
                    l(),
                    i?.()
                }
                ,
                onClose: l,
                link: e,
                preferDesktop: o != null && o
            }).catch(d => {
                console.error(d)
            }
            ) : a.renderInstallModal({
                parentElement: c,
                preferDesktop: o != null && o,
                link: e,
                metaMaskInstaller: n,
                onClose: l,
                onAnalyticsEvent: s
            }).catch(d => {
                console.error("[UI: InstallModal-web: sdkWebInstallModal()]", d)
            }
            )
        }
        ,
        unmount: l
    }
}
  , f2 = ({onDisconnect: e, debug: t}) => {
    let n = null
      , r = null
      , i = () => {
        Y("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web unmount", n),
        n?.parentNode && n.parentNode.removeChild(n),
        n = null,
        r = null
    }
      , o = a => {
        Y("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web updateOTPValue", a),
        r && r.updateOTPValue(a)
    }
      , s = ({displayOTP: a}={
        displayOTP: !0
    }) => {
        Y("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web mount", n),
        n ? n.style.display = "block" : (r = new Zo({
            debug: t,
            sdkVersion: Vn.version
        }),
        n = document.createElement("div"),
        document.body.appendChild(n),
        r.renderPendingModal({
            parentElement: n,
            onClose: i,
            onDisconnect: e,
            updateOTPValue: o,
            displayOTP: a
        }).catch(c => {
            console.error("[UI: pendingModal-web: sdkWebPendingModal()]", c)
        }
        ))
    }
    ;
    return s(),
    {
        mount: s,
        unmount: i,
        updateOTPValue: o
    }
}
;
function f0(e, t) {
    var n, r, i, o;
    e.connector || (Y("[RemoteConnection: initializeConnector()] initialize connector"),
    e.connector = new Ma({
        platformType: t.platformManager.getPlatformType(),
        communicationLayerPreference: t.communicationLayerPreference,
        transports: t.transports,
        dappMetadata: Object.assign(Object.assign({}, t.dappMetadata), {
            source: t._source
        }),
        analytics: t.enableAnalytics,
        communicationServerUrl: t.communicationServerUrl,
        sdkVersion: Vn.version,
        context: "dapp",
        ecies: t.ecies,
        storage: t.storage,
        logging: t.logging
    }),
    t.timer && (Y("[RemoteConnection: initializeConnector()] reset background timer", t.timer),
    (r = (n = t.timer) === null || n === void 0 ? void 0 : n.stopBackgroundTimer) === null || r === void 0 || r.call(n),
    (o = (i = t.timer) === null || i === void 0 ? void 0 : i.runBackgroundTimer) === null || o === void 0 || o.call(i, () => !1, 1e4)))
}
function Ya(e) {
    e.listeners.forEach( ({event: t, handler: n}) => {
        var r;
        (r = e.connector) === null || r === void 0 || r.off(t, n)
    }
    ),
    e.listeners = []
}
function p2(e, t, n) {
    return J(this, void 0, void 0, function*() {
        return new Promise( (r, i) => {
            if (!e.connector)
                return void i(new Error("No connector available"));
            Y("[RemoteConnection: connectWithModalInstaller()]", {
                state: e,
                options: t,
                linkParams: n
            });
            let o = `${e.useDeeplink ? mi : pi}?${n}`;
            (function(s, a, c) {
                var l, u, d, h;
                s.installModal = (u = (l = a.modals).install) === null || u === void 0 ? void 0 : u.call(l, {
                    link: c,
                    preferDesktop: s.preferDesktop,
                    installer: a.getMetaMaskInstaller(),
                    terminate: () => {
                        Y("[RemoteConnection: showInstallModal() => terminate()] terminate connection"),
                        a.sdk.terminate().catch(f => {
                            console.warn("[MMSDK] failed to terminate connection", f)
                        }
                        )
                    }
                    ,
                    debug: s.developerMode,
                    connectWithExtension: () => {
                        var f;
                        return (f = a.connectWithExtensionProvider) === null || f === void 0 || f.call(a),
                        !1
                    }
                    ,
                    onAnalyticsEvent: ({event: f, params: g}) => {
                        var m, v, p;
                        let S = Object.assign(Object.assign({}, g), {
                            sdkVersion: a.sdk.getVersion(),
                            dappId: (m = a.dappMetadata) === null || m === void 0 ? void 0 : m.name,
                            source: a._source,
                            url: (v = a.dappMetadata) === null || v === void 0 ? void 0 : v.url
                        });
                        (p = s.analytics) === null || p === void 0 || p.send({
                            event: f,
                            params: S
                        })
                    }
                }),
                (h = (d = s.installModal) === null || d === void 0 ? void 0 : d.mount) === null || h === void 0 || h.call(d, c)
            }
            )(e, t, o),
            t.sdk.once(te.PROVIDER_UPDATE, s => J(this, void 0, void 0, function*() {
                Y("[RemoteConnection: connectWithModalInstaller()] once provider_update -- resolving startConnection promise"),
                s !== jt.TERMINATE ? i(s) : i({
                    code: 4001,
                    message: "User rejected the request."
                })
            })),
            e.connector.once(te.AUTHORIZED, () => {
                r()
            }
            ),
            e.connector.once(te.REJECTED, () => {
                i(te.REJECTED)
            }
            ),
            e.connector.once(te.CLIENTS_READY, () => J(this, void 0, void 0, function*() {
                Y("[RemoteConnection: connectWithModalInstaller()] once clients_ready -- resolving startConnection promise"),
                r()
            }))
        }
        )
    })
}
function p0(e, t) {
    function n(r, i) {
        var o;
        (o = e.connector) === null || o === void 0 || o.on(r, i),
        e.listeners.push({
            event: r,
            handler: i
        })
    }
    e.connector && (Ya(e),
    n(te.WALLET_INIT, ({accounts: r, chainId: i}) => J(this, void 0, void 0, function*() {
        Y(`[RemoteConnection: setupListeners() => EventType.WALLET_INIT] 'wallet_init' accounts=${r} chainId=${i}`);
        let o = At.getProvider();
        o._setConnected();
        let s = {
            accounts: r,
            chainId: i,
            isUnlocked: !1
        };
        o._initializeState(s),
        o.emit("chainChanged", i),
        o.emit("accountsChanged", r)
    })),
    n(te.AUTHORIZED, () => J(this, void 0, void 0, function*() {
        var r, i, o, s;
        try {
            Y("[RemoteConnection: setupListeners() => EventType.AUTHORIZED] 'authorized' closing modals", e.pendingModal, e.installModal);
            let a = At.getProvider();
            a._setConnected(),
            (i = (r = e.pendingModal) === null || r === void 0 ? void 0 : r.unmount) === null || i === void 0 || i.call(r),
            (s = (o = e.installModal) === null || o === void 0 ? void 0 : o.unmount) === null || s === void 0 || s.call(o, !1),
            e.otpAnswer = void 0,
            e.authorized = !0,
            Y("[RemoteConnection: setupListeners() => EventType.AUTHORIZED] 'authorized' provider.state", a.getState()),
            yield a.forceInitializeState()
        } catch {}
    })),
    n(te.TERMINATE, () => {
        var r, i, o, s, a;
        (i = (r = e.pendingModal) === null || r === void 0 ? void 0 : r.unmount) === null || i === void 0 || i.call(r),
        (s = (o = e.installModal) === null || o === void 0 ? void 0 : o.unmount) === null || s === void 0 || s.call(o, !0),
        e.pendingModal = void 0,
        e.installModal = void 0,
        e.otpAnswer = void 0,
        (a = e.connector) === null || a === void 0 || a.disconnect({
            terminate: !0
        }),
        e.authorized = !1,
        At.getProvider().handleDisconnect({
            terminate: !0
        }),
        Ya(e),
        Y("[RemoteConnection: setupListeners()] All listeners cleaned up")
    }
    ))
}
function m2(e, t, {initialCheck: n, connectWith: r}={}) {
    var i, o, s, a, c, l, u, d, h, f, g, m, v, p, S, E, N, I, F;
    return J(this, void 0, void 0, function*() {
        try {
            if (f0(e, t),
            !e.connector)
                throw new Error("no connector defined");
            p0(e);
            let q = At.getProvider();
            e.authorized = !1,
            q.emit("connecting");
            let z = yield(i = e.connector) === null || i === void 0 ? void 0 : i.originatorSessionConnect();
            Y(`[RemoteConnection: startConnection()] after originatorSessionConnect initialCheck=${n}`, z);
            let G = (o = z?.channelId) !== null && o !== void 0 ? o : ""
              , U = (a = (s = e.connector.getKeyInfo()) === null || s === void 0 ? void 0 : s.ecies.public) !== null && a !== void 0 ? a : ""
              , P = (l = (c = e.connector.getKeyInfo()) === null || c === void 0 ? void 0 : c.ecies.private) !== null && l !== void 0 ? l : "";
            if (n && !z)
                return Promise.resolve();
            if (!z && !n) {
                let k = yield e.connector.generateChannelIdConnect();
                G = (u = k.channelId) !== null && u !== void 0 ? u : "",
                U = (d = k.pubKey) !== null && d !== void 0 ? d : "",
                P = (h = k.privKey) !== null && h !== void 0 ? h : "";
                let O = Date.now();
                (f = e.connector.state.storageManager) === null || f === void 0 || f.persistChannelConfig({
                    channelId: G,
                    localKey: P,
                    lastActive: O,
                    validUntil: O + br
                })
            }
            if (n && z?.channelId)
                return !((g = e.connector) === null || g === void 0) && g.isConnected() || (Y(`[RemoteConnection: startConnection()] reconnecting to channel initialCheck=${n}`, z),
                yield(m = e.connector) === null || m === void 0 ? void 0 : m.connectToChannel({
                    channelId: G
                })),
                Promise.resolve();
            z && !(!((v = e.connector) === null || v === void 0) && v.isConnected()) && (Y("[RemoteConnection: startConnection()] reconnecting to channel", z),
            yield(p = e.connector) === null || p === void 0 ? void 0 : p.connectToChannel({
                channelId: G
            }));
            let L = !((S = e.platformManager) === null || S === void 0) && S.isSecure() ? "" : "&t=q"
              , M = Vn.version
              , {iconUrl: T, name: D, url: j, scheme: b} = t.dappMetadata || {}
              , _ = (E = e.platformManager) === null || E === void 0 ? void 0 : E.getPlatformType()
              , C = "N/A";
            typeof window < "u" && window.location && window.location.hostname ? C = window.location.hostname : D !== void 0 ? C = D : j !== void 0 && (C = j);
            let A = {
                url: j ?? "",
                title: D ?? "",
                icon: T,
                scheme: b ?? "",
                apiVersion: M,
                dappId: C || j || "N/A",
                platform: _ ?? "",
                source: (N = t._source) !== null && N !== void 0 ? N : ""
            }
              , R = Go(JSON.stringify(A))
              , w = `channelId=${G}&v=2&comm=${(I = e.communicationLayerPreference) !== null && I !== void 0 ? I : ""}&pubkey=${U}${L}&originatorInfo=${R}`;
            if (r) {
                w += `&rpc=${Go(JSON.stringify(r))}`;
                let k = e.connector.getRPCMethodTracker();
                k && (k[`${r.id}`] = Object.assign(Object.assign({}, r), {
                    id: `${r.id}`,
                    timestamp: Date.now()
                }))
            }
            let y = encodeURI(w)
              , x = `${e.useDeeplink ? mi : pi}?${w}`;
            return e.qrcodeLink = x,
            e.developerMode && Y(`[RemoteConnection: startConnection()] qrcodeLink=${y}`),
            q.emit("display_uri", x),
            !((F = e.platformManager) === null || F === void 0) && F.isSecure() ? (yield function(k, O) {
                var $, K;
                return J(this, void 0, void 0, function*() {
                    let H = `${pi}?${O}`
                      , V = `${mi}?${O}`;
                    (K = ($ = k.platformManager) === null || $ === void 0 ? void 0 : $.openDeeplink) === null || K === void 0 || K.call($, H, V, "_self")
                })
            }(e, y),
            new Promise( (k, O) => {
                var $, K, H;
                !(($ = e.connector) === null || $ === void 0) && $.isAuthorized() ? k() : ((K = e.connector) === null || K === void 0 || K.once(te.AUTHORIZED, () => {
                    k()
                }
                ),
                (H = e.connector) === null || H === void 0 || H.once(te.REJECTED, () => {
                    O(te.REJECTED)
                }
                ))
            }
            )) : p2(e, t, y)
        } catch (q) {
            throw console.error("[startConnection] error", q),
            q
        }
    })
}
var Za = class {
    constructor(t) {
        var n, r, i;
        this.state = {
            connector: void 0,
            qrcodeLink: void 0,
            analytics: void 0,
            developerMode: !1,
            authorized: !1,
            reconnection: !1,
            preferDesktop: !1,
            deeplinkProtocol: !1,
            listeners: [],
            communicationLayerPreference: void 0,
            platformManager: void 0,
            pendingModal: void 0,
            installModal: void 0,
            otpAnswer: void 0
        },
        this.options = t;
        let o = ((n = t.logging) === null || n === void 0 ? void 0 : n.developerMode) === !0 || ((r = t.logging) === null || r === void 0 ? void 0 : r.sdk) === !0;
        this.state.developerMode = o,
        this.state.analytics = t.analytics,
        this.state.preferDesktop = (i = t.preferDesktop) !== null && i !== void 0 && i,
        this.state.useDeeplink = t.sdk.options.useDeeplink,
        this.state.communicationLayerPreference = t.communicationLayerPreference,
        this.state.platformManager = t.platformManager,
        t.modals.install || (t.modals.install = h2),
        t.modals.otp || (t.modals.otp = f2)
    }
    startConnection(t) {
        return J(this, void 0, void 0, function*() {
            return m2(this.state, this.options, t)
        })
    }
    initRemoteCommunication({sdkInstance: t}) {
        var n, r, i;
        return J(this, void 0, void 0, function*() {
            let o = yield(r = (n = t.options.storage) === null || n === void 0 ? void 0 : n.storageManager) === null || r === void 0 ? void 0 : r.getPersistedChannelConfig();
            if (!this.options.ecies) {
                let s = {
                    privateKey: o?.localKey
                };
                this.options.ecies = s
            }
            f0(this.state, this.options),
            yield(i = this.getConnector()) === null || i === void 0 ? void 0 : i.initFromDappStorage(),
            p0(this.state, this.options)
        })
    }
    showActiveModal() {
        return function(t) {
            var n, r, i, o;
            t.authorized ? Y("[RemoteConnection: showActiveModal()] already authorized") : t.pendingModal ? (r = (n = t.pendingModal).mount) === null || r === void 0 || r.call(n) : t.installModal && ((o = (i = t.installModal).mount) === null || o === void 0 || o.call(i, t.qrcodeLink || ""))
        }(this.state)
    }
    closeModal() {
        var t, n, r, i;
        (n = (t = this.state.pendingModal) === null || t === void 0 ? void 0 : t.unmount) === null || n === void 0 || n.call(t),
        (i = (r = this.state.installModal) === null || r === void 0 ? void 0 : r.unmount) === null || i === void 0 || i.call(r, !1)
    }
    getUniversalLink() {
        if (!this.state.qrcodeLink)
            throw new Error("connection not started. run startConnection() first.");
        return this.state.qrcodeLink
    }
    getChannelConfig() {
        var t;
        return (t = this.state.connector) === null || t === void 0 ? void 0 : t.getChannelConfig()
    }
    getKeyInfo() {
        var t;
        return (t = this.state.connector) === null || t === void 0 ? void 0 : t.getKeyInfo()
    }
    getConnector() {
        if (!this.state.connector)
            throw new Error("invalid remote connector");
        return this.state.connector
    }
    getPlatformManager() {
        if (!this.state.platformManager)
            throw new Error("PlatformManager not available");
        return this.state.platformManager
    }
    isConnected() {
        var t;
        return ((t = this.state.connector) === null || t === void 0 ? void 0 : t.isReady()) || !1
    }
    isAuthorized() {
        var t;
        return ((t = this.state.connector) === null || t === void 0 ? void 0 : t.isAuthorized()) || !1
    }
    isPaused() {
        var t;
        return (t = this.state.connector) === null || t === void 0 ? void 0 : t.isPaused()
    }
    disconnect(t) {
        var n, r, i;
        Y("[RemoteConnection: disconnect()]", t),
        t?.terminate && (At.getProvider().handleDisconnect({
            terminate: !0
        }),
        (r = (n = this.state.pendingModal) === null || n === void 0 ? void 0 : n.unmount) === null || r === void 0 || r.call(n),
        this.state.otpAnswer = void 0),
        (i = this.state.connector) === null || i === void 0 || i.disconnect(t),
        function(o) {
            Y("[RemoteConnection: cleanupConnector()] cleaning up connector"),
            o.connector && (Ya(o),
            o.connector.disconnect({
                terminate: !0
            }).catch(s => {
                Y("[RemoteConnection: cleanupConnector()] error disconnecting connector", s)
            }
            ))
        }(this.state)
    }
}
;
function g2(e) {
    var t, n, r, i, o, s, a, c, l, u, d;
    return J(this, void 0, void 0, function*() {
        let {options: h} = e;
        if (h.logging = (t = h.logging) !== null && t !== void 0 ? t : {},
        h.communicationLayerPreference = (n = h.communicationLayerPreference) !== null && n !== void 0 ? n : Un.SOCKET,
        h.enableDebug !== void 0 && (We.default.enable("MM_SDK"),
        console.warn("enableDebug is removed. Please use enableAnalytics instead.")),
        h.enableAnalytics = (r = h.enableAnalytics) === null || r === void 0 || r,
        h.injectProvider = (i = h.injectProvider) === null || i === void 0 || i,
        h.shouldShimWeb3 = (o = h.shouldShimWeb3) === null || o === void 0 || o,
        h.extensionOnly = (s = h.extensionOnly) === null || s === void 0 || s,
        h.useDeeplink = (a = h.useDeeplink) === null || a === void 0 || a,
        h.storage = (c = h.storage) !== null && c !== void 0 ? c : {
            enabled: !0
        },
        h.headless) {
            (0,
            We.default)("[MetaMaskSDK: performSDKInitialization()] headless mode enabled");
            let S = () => {}
              , E = {
                install: () => ({
                    mount: S,
                    unmount: S
                })
            }
              , N = {
                installer: S
            };
            h.modals = E,
            h.ui = N
        }
        let f = ((l = h.logging) === null || l === void 0 ? void 0 : l.developerMode) === !0;
        e.debug = ((u = h.logging) === null || u === void 0 ? void 0 : u.sdk) || f,
        Y("[MetaMaskSDK: performSDKInitialization()] options", e.options);
        let g = Object.assign({}, h.logging);
        f && (g.sdk = !0,
        g.eciesLayer = !0,
        g.keyExchangeLayer = !0,
        g.remoteLayer = !0,
        g.serviceLayer = !0,
        g.plaintext = !0),
        yield function(S) {
            var E;
            return J(this, void 0, void 0, function*() {
                let {options: N} = S;
                S.platformManager = new qo({
                    useDeepLink: (E = N.useDeeplink) !== null && E !== void 0 && E,
                    preferredOpenLink: N.openDeeplink,
                    debug: S.debug
                })
            })
        }(e),
        yield function(S) {
            var E, N, I, F, q, z, G, U, P;
            return J(this, void 0, void 0, function*() {
                let {options: L} = S
                  , M = (E = S.platformManager) === null || E === void 0 ? void 0 : E.getPlatformType();
                S.analytics = new Va({
                    serverUrl: (N = L.communicationServerUrl) !== null && N !== void 0 ? N : vr,
                    enabled: L.enableAnalytics,
                    originatorInfo: {
                        url: (I = L.dappMetadata.url) !== null && I !== void 0 ? I : "",
                        title: (F = L.dappMetadata.name) !== null && F !== void 0 ? F : "",
                        dappId: typeof window > "u" || window.location === void 0 ? (U = (z = (q = L.dappMetadata) === null || q === void 0 ? void 0 : q.name) !== null && z !== void 0 ? z : (G = L.dappMetadata) === null || G === void 0 ? void 0 : G.url) !== null && U !== void 0 ? U : "N/A" : window.location.hostname,
                        platform: M ?? "",
                        source: (P = L._source) !== null && P !== void 0 ? P : ""
                    }
                })
            })
        }(e),
        yield function(S) {
            var E;
            return J(this, void 0, void 0, function*() {
                let {options: N} = S;
                ((E = N.storage) === null || E === void 0 ? void 0 : E.enabled) !== !0 || N.storage.storageManager || (N.storage.storageManager = yield u0(N.storage))
            })
        }(e),
        yield function(S) {
            return J(this, void 0, void 0, function*() {
                let {options: E} = S
                  , N = /^(http|https):\/\/[^\s]*$/;
                if (E.dappMetadata) {
                    E.dappMetadata.iconUrl && !N.test(E.dappMetadata.iconUrl) && (console.warn("Invalid dappMetadata.iconUrl: URL must start with http:// or https://"),
                    E.dappMetadata.iconUrl = void 0),
                    E.dappMetadata.base64Icon && E.dappMetadata.base64Icon.length > i2 && (console.warn("Invalid dappMetadata.base64Icon: Base64-encoded icon string length must be less than 163400 characters"),
                    E.dappMetadata.base64Icon = void 0),
                    E.dappMetadata.url && !N.test(E.dappMetadata.url) && console.warn("Invalid dappMetadata.url: URL must start with http:// or https://");
                    let I = r2();
                    if (I && !E.dappMetadata.iconUrl && !E.dappMetadata.base64Icon) {
                        let F = `${window.location.protocol}//${window.location.host}${I}`;
                        E.dappMetadata.iconUrl = F
                    }
                }
                S.dappMetadata = E.dappMetadata
            })
        }(e),
        yield s2(e),
        yield a2(e);
        let {metamaskBrowserExtension: m, preferExtension: v, shouldReturn: p} = yield function(S) {
            var E, N, I, F;
            return J(this, void 0, void 0, function*() {
                let {options: q} = S, z, G = !1, U = !1;
                if (typeof window < "u" && window.ethereum && !(!((E = S.platformManager) === null || E === void 0) && E.isMetaMaskMobileWebView())) {
                    G = localStorage.getItem(Wo) === "extension";
                    try {
                        z = yield o2({
                            mustBeMetaMask: !0,
                            sdkInstance: S
                        }),
                        window.extension = z,
                        z.on(Mt.CHAIN_CHANGED, P => {
                            Y(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE chainChanged chainId=${P}`),
                            S.sdkProvider && S.getMobileProvider().emit(Mt.CHAIN_CHANGED, P)
                        }
                        ),
                        z.on(Mt.ACCOUNTS_CHANGED, P => J(this, void 0, void 0, function*() {
                            var L;
                            Y(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE accountsChanged accounts=${P}`);
                            let M = !!S.sdkProvider
                              , T = !!S.extensionActive;
                            if (M && S.getMobileProvider().emit(Mt.ACCOUNTS_CHANGED, P),
                            T && P?.length === 0 && (yield(L = S.getProvider()) === null || L === void 0 ? void 0 : L.request({
                                method: le.WALLET_GETPERMISSIONS,
                                params: []
                            })).length === 0)
                                try {
                                    yield S.terminate()
                                } catch (D) {
                                    Y("[MetaMaskSDK: setupExtensionPreferences()] error terminating on permissions revoked", D)
                                }
                        })),
                        z.on(Mt.DISCONNECT, P => {
                            Y(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE disconnect error=${P}`),
                            S.sdkProvider && S.getMobileProvider().emit(Mt.DISCONNECT, P)
                        }
                        ),
                        z.on(Mt.CONNECT, P => {
                            Y(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE connect args=${P}`),
                            S.sdkProvider && S.getMobileProvider().emit(Mt.CONNECT, P)
                        }
                        ),
                        z.on(Mt.CONNECTED, P => {
                            Y("[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE connected", P),
                            S.sdkProvider && S.getMobileProvider().emit(Mt.CONNECTED, P)
                        }
                        )
                    } catch {
                        window.extension = void 0
                    }
                } else
                    !((N = S.platformManager) === null || N === void 0) && N.isMetaMaskMobileWebView() && ((I = S.analytics) === null || I === void 0 || I.send({
                        event: Le.SDK_USE_INAPP_BROWSER
                    }),
                    S.activeProvider = Wa({
                        provider: window.ethereum,
                        sdkInstance: S
                    }),
                    S._initialized = !0,
                    U = !0);
                return z && q.extensionOnly && (Y("[MetaMaskSDK: setupExtensionPreferences()] EXTENSION ONLY --- prevent sdk initialization"),
                (F = S.analytics) === null || F === void 0 || F.send({
                    event: Le.SDK_USE_EXTENSION
                }),
                S.activeProvider = z,
                S.extensionActive = !0,
                S.extension = z,
                S._initialized = !0,
                U = !0),
                {
                    preferExtension: G,
                    shouldReturn: U,
                    metamaskBrowserExtension: z
                }
            })
        }(e);
        if (p)
            Y("[MetaMaskSDK: performSDKInitialization()] shouldReturn=true --- prevent sdk initialization");
        else {
            yield function(S, E) {
                var N, I, F, q, z;
                return J(this, void 0, void 0, function*() {
                    let {options: G} = S
                      , U = Object.assign({}, G.logging);
                    S.remoteConnection = new Za({
                        preferDesktop: (N = G.preferDesktop) !== null && N !== void 0 && N,
                        communicationLayerPreference: (I = G.communicationLayerPreference) !== null && I !== void 0 ? I : Un.SOCKET,
                        analytics: S.analytics,
                        dappMetadata: G.dappMetadata,
                        _source: G._source,
                        enableAnalytics: (F = G.enableAnalytics) === null || F === void 0 || F,
                        timer: G.timer,
                        sdk: S,
                        platformManager: S.platformManager,
                        transports: G.transports,
                        communicationServerUrl: G.communicationServerUrl,
                        storage: (q = G.storage) !== null && q !== void 0 ? q : {
                            enabled: !0
                        },
                        getMetaMaskInstaller: () => {
                            if (!S.installer)
                                throw new Error("Invalid SDK status -- installer not initialized");
                            return S.installer
                        }
                        ,
                        logging: U,
                        connectWithExtensionProvider: E === void 0 ? void 0 : () => fd(S),
                        modals: Object.assign(Object.assign({}, G.modals), {
                            onPendingModalDisconnect: S.terminate.bind(S)
                        })
                    }),
                    yield S.remoteConnection.initRemoteCommunication({
                        sdkInstance: S
                    }),
                    S.installer = new Ga({
                        remote: S.remoteConnection,
                        preferDesktop: (z = G.preferDesktop) !== null && z !== void 0 && z,
                        platformManager: S.platformManager,
                        debug: S.debug
                    })
                })
            }(e, m),
            yield t2(e),
            yield function(S, E) {
                var N, I;
                return J(this, void 0, void 0, function*() {
                    let {options: F} = S;
                    E ? (Y("[MetaMaskSDK: handleAutoAndExtensionConnections()] preferExtension is detected -- connect with it."),
                    (N = S.analytics) === null || N === void 0 || N.send({
                        event: Le.SDK_EXTENSION_UTILIZED
                    }),
                    fd(S).catch(q => {
                        console.warn("Can't connect with MetaMask extension...", q),
                        localStorage.removeItem(Wo)
                    }
                    )) : F.checkInstallationImmediately && (!((I = S.platformManager) === null || I === void 0) && I.isDesktopWeb() ? (Y("[MetaMaskSDK: handleAutoAndExtensionConnections()] checkInstallationImmediately"),
                    S.connect().catch(q => {
                        Y(`[MetaMaskSDK: handleAutoAndExtensionConnections()] checkInstallationImmediately --- IGNORED --- error on autoconnect _err=${q}`)
                    }
                    )) : console.warn("[handleAutoAndExtensionConnections()] checkInstallationImmediately --- IGNORED --- only for web desktop")),
                    S._initialized = !0
                })
            }(e, v);
            try {
                yield(d = e.remoteConnection) === null || d === void 0 ? void 0 : d.startConnection({
                    initialCheck: !0
                })
            } catch (S) {
                console.error("[MetaMaskSDK: setupRemoteConnectionAndInstaller()] Error while checking installation", S)
            }
            e.emit(nt.ProviderUpdate, jt.INITIALIZED)
        }
    })
}
var Cd = class extends _r.default {
    constructor(t={
        storage: {
            enabled: !0
        },
        injectProvider: !0,
        forceInjectProvider: !1,
        enableAnalytics: !0,
        shouldShimWeb3: !0,
        useDeeplink: !0,
        extensionOnly: !0,
        headless: !1,
        dappMetadata: {
            name: "",
            url: "",
            iconUrl: ""
        },
        _source: dd,
        i18nOptions: {
            enabled: !1
        }
    }) {
        var n, r, i;
        super(),
        this.extensionActive = !1,
        this._initialized = !1,
        this.sdkInitPromise = void 0,
        this.debug = !1,
        this.readonlyRPCCalls = !1,
        this.availableLanguages = ["en"],
        We.default.disable();
        let o = ((n = t.logging) === null || n === void 0 ? void 0 : n.developerMode) === !0;
        if ((!((r = t.logging) === null || r === void 0) && r.sdk || o) && We.default.enable("MM_SDK"),
        Y("[MetaMaskSDK: constructor()]: begin."),
        this.setMaxListeners(50),
        !(!((i = t.dappMetadata) === null || i === void 0) && i.url)) {
            if (typeof window > "u" || typeof document > "u")
                throw new Error("You must provide dAppMetadata url");
            t.dappMetadata = Object.assign(Object.assign({}, t.dappMetadata), {
                url: `${window.location.protocol}//${window.location.host}`
            })
        }
        this.options = t,
        this.options._source || (t._source = dd),
        this.init().then( () => {
            Y("[MetaMaskSDK: constructor()]: initialized successfully."),
            typeof window < "u" && (window.mmsdk = this)
        }
        ).catch(s => {
            console.error("[MetaMaskSDK: constructor()] error during initialization", s)
        }
        )
    }
    init() {
        return J(this, void 0, void 0, function*() {
            return function(t) {
                var n;
                return J(this, void 0, void 0, function*() {
                    if (typeof window < "u" && (!((n = window.mmsdk) === null || n === void 0) && n.isInitialized()))
                        return Y("[MetaMaskSDK: initializeMetaMaskSDK()] already initialized"),
                        Promise.resolve(window.mmsdk);
                    if (t._initialized)
                        return Y("[MetaMaskSDK: initializeMetaMaskSDK()] already initialized"),
                        t.sdkInitPromise;
                    if (t.sdkInitPromise)
                        return Y("[MetaMaskSDK: initializeMetaMaskSDK()] already initializing"),
                        t.sdkInitPromise;
                    try {
                        t.sdkInitPromise = g2(t),
                        yield t.sdkInitPromise
                    } catch (r) {
                        throw console.error(r),
                        r
                    }
                    return t.sdkInitPromise
                })
            }(this)
        })
    }
    isExtensionActive() {
        return this.extensionActive
    }
    checkExtensionAvailability() {
        var t;
        return typeof window < "u" && !!(!((t = window.ethereum) === null || t === void 0) && t.isMetaMask)
    }
    connect() {
        return J(this, void 0, void 0, function*() {
            return function(t) {
                return J(this, void 0, void 0, function*() {
                    if (t._initialized || (Y("[MetaMaskSDK: connect()] provider not ready -- wait for init()"),
                    yield t.init()),
                    Y(`[MetaMaskSDK: connect()] isExtensionActive=${t.isExtensionActive()} activeProvider`, t.activeProvider),
                    !t.activeProvider)
                        throw new Error("SDK state invalid -- undefined provider");
                    let n = t.activeProvider.getSelectedAddress();
                    return n ? [n] : t.activeProvider.request({
                        method: le.ETH_REQUESTACCOUNTS,
                        params: []
                    })
                })
            }(this)
        })
    }
    connectAndSign({msg: t}) {
        return J(this, void 0, void 0, function*() {
            return Xm({
                instance: this,
                msg: t
            })
        })
    }
    connectWith(t) {
        return J(this, void 0, void 0, function*() {
            return function({instance: n, rpc: r}) {
                return J(this, void 0, void 0, function*() {
                    if (n._initialized || (Y("[MetaMaskSDK: connectWith()] provider not ready -- wait for init()"),
                    yield n.init()),
                    Y(`[MetaMaskSDK: connectWith()] method: ${r.method} rpc=${r}`),
                    !n.activeProvider)
                        throw new Error("SDK state invalid -- undefined provider");
                    return n.activeProvider.request({
                        method: le.METAMASK_CONNECTWITH,
                        params: [r]
                    })
                })
            }({
                instance: this,
                rpc: t
            })
        })
    }
    resume() {
        return function(t) {
            var n, r, i;
            return J(this, void 0, void 0, function*() {
                if (!(!((r = (n = t.remoteConnection) === null || n === void 0 ? void 0 : n.getConnector()) === null || r === void 0) && r.isReady()))
                    return Y("[MetaMaskSDK: resume()] channel is not ready -- starting connection"),
                    void ((i = t.remoteConnection) === null || i === void 0 || i.startConnection());
                Y("[MetaMaskSDK: resume()] channel is ready")
            })
        }(this)
    }
    disconnect() {
        return console.warn("MetaMaskSDK.disconnect() is deprecated, use terminate()"),
        this.terminate()
    }
    isAuthorized() {
        var t;
        (t = this.remoteConnection) === null || t === void 0 || t.isAuthorized()
    }
    terminate() {
        return function(t) {
            var n, r, i;
            return J(this, void 0, void 0, function*() {
                if (!(!((n = t.platformManager) === null || n === void 0) && n.isMetaMaskMobileWebView())) {
                    if (Jm && (window.localStorage.removeItem(Wo),
                    window.localStorage.removeItem(za),
                    window.localStorage.removeItem(Fa)),
                    t.extensionActive) {
                        try {
                            yield(r = t.activeProvider) === null || r === void 0 ? void 0 : r.request({
                                method: le.WALLET_REVOKEPERMISSIONS,
                                params: [{
                                    eth_accounts: {}
                                }]
                            })
                        } catch (o) {
                            Y("[MetaMaskSDK: terminate()] error revoking permissions", o)
                        }
                        return t.options.extensionOnly ? (t.emit(nt.ProviderUpdate, jt.TERMINATE),
                        void Y("[MetaMaskSDK: terminate()] extensionOnly --- prevent switching providers")) : (t.activeProvider = t.sdkProvider,
                        window.ethereum = t.activeProvider,
                        t.extensionActive = !1,
                        void t.emit(nt.ProviderUpdate, jt.TERMINATE))
                    }
                    t.emit(nt.ProviderUpdate, jt.TERMINATE),
                    Y(`[MetaMaskSDK: terminate()] remoteConnection=${t.remoteConnection}`),
                    (i = t.remoteConnection) === null || i === void 0 || i.disconnect({
                        terminate: !0,
                        sendMessage: !0
                    })
                }
            })
        }(this)
    }
    isInitialized() {
        return this._initialized
    }
    setReadOnlyRPCCalls(t) {
        this.readonlyRPCCalls = t
    }
    hasReadOnlyRPCCalls() {
        return this.readonlyRPCCalls
    }
    getProvider() {
        if (this.activeProvider)
            return this.activeProvider;
        console.warn("MetaMaskSDK: No active provider found")
    }
    getMobileProvider() {
        if (!this.sdkProvider)
            throw new Error("SDK state invalid -- undefined mobile provider");
        return this.sdkProvider
    }
    getUniversalLink() {
        var t;
        let n = (t = this.remoteConnection) === null || t === void 0 ? void 0 : t.getUniversalLink();
        if (!n)
            throw new Error("No Universal Link available, please call eth_requestAccounts first.");
        return n
    }
    getChannelId() {
        var t, n;
        return (n = (t = this.remoteConnection) === null || t === void 0 ? void 0 : t.getChannelConfig()) === null || n === void 0 ? void 0 : n.channelId
    }
    getRPCHistory() {
        var t, n;
        return (n = (t = this.remoteConnection) === null || t === void 0 ? void 0 : t.getConnector()) === null || n === void 0 ? void 0 : n.getRPCMethodTracker()
    }
    getVersion() {
        return Vn.version
    }
    getWalletStatus() {
        var t, n;
        return (n = (t = this.remoteConnection) === null || t === void 0 ? void 0 : t.getConnector()) === null || n === void 0 ? void 0 : n.getConnectionStatus()
    }
    _getChannelConfig() {
        var t;
        return (t = this.remoteConnection) === null || t === void 0 ? void 0 : t.getChannelConfig()
    }
    _ping() {
        var t, n;
        (n = (t = this.remoteConnection) === null || t === void 0 ? void 0 : t.getConnector()) === null || n === void 0 || n.ping()
    }
    _keyCheck() {
        var t, n;
        (n = (t = this.remoteConnection) === null || t === void 0 ? void 0 : t.getConnector()) === null || n === void 0 || n.keyCheck()
    }
    _getServiceStatus() {
        var t, n;
        return (n = (t = this.remoteConnection) === null || t === void 0 ? void 0 : t.getConnector()) === null || n === void 0 ? void 0 : n.getServiceStatus()
    }
    _getRemoteConnection() {
        return this.remoteConnection
    }
    _getDappMetadata() {
        return this.dappMetadata
    }
    _getKeyInfo() {
        var t;
        return (t = this.remoteConnection) === null || t === void 0 ? void 0 : t.getKeyInfo()
    }
    _resetKeys() {
        var t, n;
        (n = (t = this.remoteConnection) === null || t === void 0 ? void 0 : t.getConnector()) === null || n === void 0 || n.resetKeys()
    }
    _getConnection() {
        return this.remoteConnection
    }
    emit(t, n) {
        return super.emit(t, n)
    }
    on(t, n) {
        return super.on(t, n)
    }
}
  , y2 = Object.freeze({
    __proto__: null,
    StorageManagerWeb: class {
        constructor({enabled: e}={
            enabled: !1
        }) {
            this.enabled = !1,
            this.enabled = e
        }
        persistChannelConfig(e) {
            return J(this, void 0, void 0, function*() {
                let t = JSON.stringify(e);
                Y(`[StorageManagerWeb: persistChannelConfig()] enabled=${this.enabled}`, e),
                localStorage.setItem(aa, t)
            })
        }
        getPersistedChannelConfig() {
            return J(this, void 0, void 0, function*() {
                let e;
                try {
                    if (Y(`[StorageManagerWeb: getPersistedChannelConfig()] enabled=${this.enabled}`),
                    e = localStorage.getItem(aa),
                    Y("[StorageManagerWeb: getPersistedChannelConfig()]", e),
                    !e)
                        return;
                    let t = JSON.parse(e);
                    return Y("[StorageManagerWeb: getPersistedChannelConfig()] channelConfig", t),
                    t
                } catch (t) {
                    return void console.error("[StorageManagerWeb: getPersistedChannelConfig()] Can't find existing channel config", t)
                }
            })
        }
        persistAccounts(e) {
            return J(this, void 0, void 0, function*() {
                Y(`[StorageManagerWeb: persistAccounts()] enabled=${this.enabled}`, e);
                let t = JSON.stringify(e);
                localStorage.setItem(Fa, t)
            })
        }
        getCachedAccounts() {
            return J(this, void 0, void 0, function*() {
                try {
                    let e = localStorage.getItem(Fa);
                    return e ? JSON.parse(e) : []
                } catch (e) {
                    throw console.error("[StorageManagerWeb: getCachedAccounts()] Error reading cached accounts", e),
                    e
                }
            })
        }
        persistChainId(e) {
            return J(this, void 0, void 0, function*() {
                Y(`[StorageManagerWeb: persistChainId()] enabled=${this.enabled}`, e),
                localStorage.setItem(za, e)
            })
        }
        getCachedChainId() {
            return J(this, void 0, void 0, function*() {
                try {
                    let e = localStorage.getItem(za);
                    return e ?? void 0
                } catch (e) {
                    throw console.error("[StorageManagerWeb: getCachedChainId()] Error reading cached chainId", e),
                    e
                }
            })
        }
        terminate() {
            return J(this, void 0, void 0, function*() {
                Y(`[StorageManagerWeb: terminate()] enabled=${this.enabled}`),
                localStorage.removeItem(aa)
            })
        }
    }
})
  , v2 = "hydrated"
  , b2 = !1
  , w2 = !1
  , E2 = !0
  , _2 = Object.defineProperty
  , Mc = new WeakMap
  , Sn = e => Mc.get(e)
  , Tc = (e, t) => Mc.set(t.$lazyInstance$ = e, t)
  , Sd = (e, t) => t in e
  , jn = (e, t) => (0,
console.error)(e, t)
  , ca = new Map
  , mo = new Map
  , m0 = "slot-fb{display:contents}slot-fb[hidden]{display:none}"
  , os = typeof window < "u" ? window : {}
  , Dt = os.document || {
    head: {}
}
  , Ke = {
    $flags$: 0,
    $resourcesUrl$: "",
    jmp: e => e(),
    raf: e => requestAnimationFrame(e),
    ael: (e, t, n, r) => e.addEventListener(t, n, r),
    rel: (e, t, n, r) => e.removeEventListener(t, n, r),
    ce: (e, t) => new CustomEvent(e,t)
}
  , g0 = ( () => {
    try {
        return new CSSStyleSheet,
        typeof new CSSStyleSheet().replaceSync == "function"
    } catch {}
    return !1
}
)()
  , Ja = !1
  , kd = []
  , y0 = []
  , C2 = (e, t) => n => {
    e.push(n),
    Ja || (Ja = !0,
    4 & Ke.$flags$ ? Rc(Xa) : Ke.raf(Xa))
}
  , xd = e => {
    for (let t = 0; t < e.length; t++)
        try {
            e[t](performance.now())
        } catch (n) {
            jn(n)
        }
    e.length = 0
}
  , Xa = () => {
    xd(kd),
    xd(y0),
    (Ja = kd.length > 0) && Ke.raf(Xa)
}
  , Rc = e => (t => Promise.resolve(t))().then(e)
  , S2 = C2(y0)
  , Ad = {}
  , Oc = e => (e = typeof e) == "object" || e === "function";
function v0(e) {
    var t, n, r;
    return (r = (n = (t = e.head) == null ? void 0 : t.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : n.getAttribute("content")) != null ? r : void 0
}
( (e, t) => {
    for (var n in t)
        _2(e, n, {
            get: t[n],
            enumerable: !0
        })
}
)({}, {
    err: () => b0,
    map: () => k2,
    ok: () => Qa,
    unwrap: () => x2,
    unwrapErr: () => A2
});
var Qa = e => ({
    isOk: !0,
    isErr: !1,
    value: e
})
  , b0 = e => ({
    isOk: !1,
    isErr: !0,
    value: e
});
function k2(e, t) {
    if (e.isOk) {
        let n = t(e.value);
        return n instanceof Promise ? n.then(r => Qa(r)) : Qa(n)
    }
    if (e.isErr) {
        let n = e.value;
        return b0(n)
    }
    throw "should never get here"
}
var go, Lc, x2 = e => {
    if (e.isOk)
        return e.value;
    throw e.value
}
, A2 = e => {
    if (e.isErr)
        return e.value;
    throw e.value
}
, B = (e, t, ...n) => {
    let r = null
      , i = !1
      , o = !1
      , s = []
      , a = l => {
        for (let u = 0; u < l.length; u++)
            r = l[u],
            Array.isArray(r) ? a(r) : r != null && typeof r != "boolean" && ((i = typeof e != "function" && !Oc(r)) && (r = String(r)),
            i && o ? s[s.length - 1].$text$ += r : s.push(i ? Jo(null, r) : r),
            o = i)
    }
    ;
    if (a(n),
    t) {
        let l = t.className || t.class;
        l && (t.class = typeof l != "object" ? l : Object.keys(l).filter(u => l[u]).join(" "))
    }
    if (typeof e == "function")
        return e(t === null ? {} : t, s, T2);
    let c = Jo(e, null);
    return c.$attrs$ = t,
    s.length > 0 && (c.$children$ = s),
    c
}
, Jo = (e, t) => ({
    $flags$: 0,
    $tag$: e,
    $text$: t,
    $elm$: null,
    $children$: null,
    $attrs$: null
}), M2 = {}, T2 = {
    forEach: (e, t) => e.map(Md).forEach(t),
    map: (e, t) => e.map(Md).map(t).map(R2)
}, Md = e => ({
    vattrs: e.$attrs$,
    vchildren: e.$children$,
    vkey: e.$key$,
    vname: e.$name$,
    vtag: e.$tag$,
    vtext: e.$text$
}), R2 = e => {
    if (typeof e.vtag == "function") {
        let n = xe({}, e.vattrs);
        return e.vkey && (n.key = e.vkey),
        e.vname && (n.name = e.vname),
        B(e.vtag, n, ...e.vchildren || [])
    }
    let t = Jo(e.vtag, e.vtext);
    return t.$attrs$ = e.vattrs,
    t.$children$ = e.vchildren,
    t.$key$ = e.vkey,
    t.$name$ = e.vname,
    t
}
, ss = e => Sn(e).$hostElement$, xn = (e, t, n) => {
    let r = ss(e);
    return {
        emit: i => w0(r, t, {
            bubbles: !!(4 & n),
            composed: !!(2 & n),
            cancelable: !!(1 & n),
            detail: i
        })
    }
}
, w0 = (e, t, n) => {
    let r = Ke.ce(t, n);
    return e.dispatchEvent(r),
    r
}
, Td = new WeakMap, O2 = e => {
    let t = e.$cmpMeta$
      , n = e.$hostElement$
      , r = t.$flags$
      , i = (t.$tagName$,
    () => {}
    )
      , o = ( (s, a, c) => {
        var l;
        let u = E0(a)
          , d = mo.get(u);
        if (s = s.nodeType === 11 ? s : Dt,
        d)
            if (typeof d == "string") {
                s = s.head || s;
                let h, f = Td.get(s);
                if (f || Td.set(s, f = new Set),
                !f.has(u)) {
                    {
                        h = Dt.createElement("style"),
                        h.innerHTML = d;
                        let g = (l = Ke.$nonce$) != null ? l : v0(Dt);
                        if (g != null && h.setAttribute("nonce", g),
                        !(1 & a.$flags$))
                            if (s.nodeName === "HEAD") {
                                let m = s.querySelectorAll("link[rel=preconnect]")
                                  , v = m.length > 0 ? m[m.length - 1].nextSibling : s.querySelector("style");
                                s.insertBefore(h, v)
                            } else if ("host"in s)
                                if (g0) {
                                    let m = new CSSStyleSheet;
                                    m.replaceSync(d),
                                    s.adoptedStyleSheets = [m, ...s.adoptedStyleSheets]
                                } else {
                                    let m = s.querySelector("style");
                                    m ? m.innerHTML = d + m.innerHTML : s.prepend(h)
                                }
                            else
                                s.append(h);
                        1 & a.$flags$ && s.nodeName !== "HEAD" && s.insertBefore(h, null)
                    }
                    4 & a.$flags$ && (h.innerHTML += m0),
                    f && f.add(u)
                }
            } else
                s.adoptedStyleSheets.includes(d) || (s.adoptedStyleSheets = [...s.adoptedStyleSheets, d]);
        return u
    }
    )(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
    10 & r && 2 & r && (n["s-sc"] = o,
    n.classList.add(o + "-h")),
    i()
}
, E0 = (e, t) => "sc-" + e.$tagName$, Rd = (e, t, n, r, i, o) => {
    if (n !== r) {
        let s = Sd(e, t)
          , a = t.toLowerCase();
        if (t === "class") {
            let c = e.classList
              , l = Od(n)
              , u = Od(r);
            c.remove(...l.filter(d => d && !u.includes(d))),
            c.add(...u.filter(d => d && !l.includes(d)))
        } else if (t === "style") {
            for (let c in n)
                r && r[c] != null || (c.includes("-") ? e.style.removeProperty(c) : e.style[c] = "");
            for (let c in r)
                n && r[c] === n[c] || (c.includes("-") ? e.style.setProperty(c, r[c]) : e.style[c] = r[c])
        } else if (s || t[0] !== "o" || t[1] !== "n") {
            let c = Oc(r);
            if ((s || c && r !== null) && !i)
                try {
                    if (e.tagName.includes("-"))
                        e[t] = r;
                    else {
                        let l = r ?? "";
                        t === "list" ? s = !1 : n != null && e[t] == l || (typeof e.__lookupSetter__(t) == "function" ? e[t] = l : e.setAttribute(t, l))
                    }
                } catch {}
            r == null || r === !1 ? r === !1 && e.getAttribute(t) !== "" || e.removeAttribute(t) : (!s || 4 & o || i) && !c && (r = r === !0 ? "" : r,
            e.setAttribute(t, r))
        } else if (t = t[2] === "-" ? t.slice(3) : Sd(os, a) ? a.slice(2) : a[2] + t.slice(3),
        n || r) {
            let c = t.endsWith(_0);
            t = t.replace(P2, ""),
            n && Ke.rel(e, t, n, c),
            r && Ke.ael(e, t, r, c)
        }
    }
}
, L2 = /\s/, Od = e => e ? e.split(L2) : [], _0 = "Capture", P2 = new RegExp(_0 + "$"), C0 = (e, t, n) => {
    let r = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$
      , i = e && e.$attrs$ || Ad
      , o = t.$attrs$ || Ad;
    for (let s of Ld(Object.keys(i)))
        s in o || Rd(r, s, i[s], void 0, n, t.$flags$);
    for (let s of Ld(Object.keys(o)))
        Rd(r, s, i[s], o[s], n, t.$flags$)
}
;
function Ld(e) {
    return e.includes("ref") ? [...e.filter(t => t !== "ref"), "ref"] : e
}
var S0 = !1
  , wt = !1
  , Pc = (e, t, n, r) => {
    let i = t.$children$[n], o, s, a = 0;
    if (i.$text$ !== null)
        o = i.$elm$ = Dt.createTextNode(i.$text$);
    else {
        if (wt || (wt = i.$tag$ === "svg"),
        o = i.$elm$ = Dt.createElementNS(wt ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", !S0 && w2 && 2 & i.$flags$ ? "slot-fb" : i.$tag$),
        wt && i.$tag$ === "foreignObject" && (wt = !1),
        C0(null, i, wt),
        o.getRootNode().querySelector("body") && b2 && (c => c != null)(go) && o["s-si"] !== go && o.classList.add(o["s-si"] = go),
        i.$children$)
            for (a = 0; a < i.$children$.length; ++a)
                s = Pc(e, i, a),
                s && o.appendChild(s);
        i.$tag$ === "svg" ? wt = !1 : o.tagName === "foreignObject" && (wt = !0)
    }
    return o["s-hn"] = Lc,
    o
}
  , Pd = (e, t, n, r, i, o) => {
    let s, a = e;
    for (a.shadowRoot && a.tagName === Lc && (a = a.shadowRoot); i <= o; ++i)
        r[i] && (s = Pc(null, n, i),
        s && (r[i].$elm$ = s,
        yo(a, s, t)))
}
  , Id = (e, t, n) => {
    for (let r = t; r <= n; ++r) {
        let i = e[r];
        if (i) {
            let o = i.$elm$;
            o && o.remove()
        }
    }
}
  , Qi = (e, t, n=!1) => e.$tag$ === t.$tag$
  , qr = (e, t, n=!1) => {
    let r = t.$elm$ = e.$elm$
      , i = e.$children$
      , o = t.$children$
      , s = t.$tag$
      , a = t.$text$;
    a === null ? (C0(e, t, wt = s === "svg" || s !== "foreignObject" && wt),
    i !== null && o !== null ? ( (c, l, u, d, h=!1) => {
        let f, g = 0, m = 0, v = l.length - 1, p = l[0], S = l[v], E = d.length - 1, N = d[0], I = d[E];
        for (; g <= v && m <= E; )
            p == null ? p = l[++g] : S == null ? S = l[--v] : N == null ? N = d[++m] : I == null ? I = d[--E] : Qi(p, N, h) ? (qr(p, N, h),
            p = l[++g],
            N = d[++m]) : Qi(S, I, h) ? (qr(S, I, h),
            S = l[--v],
            I = d[--E]) : Qi(p, I, h) ? (qr(p, I, h),
            yo(c, p.$elm$, S.$elm$.nextSibling),
            p = l[++g],
            I = d[--E]) : Qi(S, N, h) ? (qr(S, N, h),
            yo(c, S.$elm$, p.$elm$),
            S = l[--v],
            N = d[++m]) : (f = Pc(l && l[m], u, m),
            N = d[++m],
            f && yo(p.$elm$.parentNode, f, p.$elm$));
        g > v ? Pd(c, d[E + 1] == null ? null : d[E + 1].$elm$, u, d, m, E) : m > E && Id(l, g, v)
    }
    )(r, i, t, o, n) : o !== null ? (e.$text$ !== null && (r.textContent = ""),
    Pd(r, null, t, o, 0, o.length - 1)) : !n && E2 && i !== null && Id(i, 0, i.length - 1),
    wt && s === "svg" && (wt = !1)) : e.$text$ !== a && (r.data = a)
}
  , yo = (e, t, n) => e?.insertBefore(t, n)
  , I2 = (e, t, n=!1) => {
    let r = e.$hostElement$
      , i = e.$cmpMeta$
      , o = e.$vnode$ || Jo(null, null)
      , s = (a = t) && a.$tag$ === M2 ? t : B(null, null, t);
    var a;
    if (Lc = r.tagName,
    n && s.$attrs$)
        for (let c of Object.keys(s.$attrs$))
            r.hasAttribute(c) && !["key", "ref", "style", "class"].includes(c) && (s.$attrs$[c] = r[c]);
    s.$tag$ = null,
    s.$flags$ |= 4,
    e.$vnode$ = s,
    s.$elm$ = o.$elm$ = r.shadowRoot || r,
    go = r["s-sc"],
    S0 = (1 & i.$flags$) != 0,
    qr(o, s, n)
}
  , k0 = (e, t) => {
    t && !e.$onRenderResolve$ && t["s-p"] && t["s-p"].push(new Promise(n => e.$onRenderResolve$ = n))
}
  , Ic = (e, t) => (e.$flags$ |= 16,
4 & e.$flags$ ? void (e.$flags$ |= 512) : (k0(e, e.$ancestorComponent$),
S2( () => N2(e, t))))
  , N2 = (e, t) => {
    let n = e.$hostElement$
      , r = (e.$cmpMeta$.$tagName$,
    () => {}
    )
      , i = e.$lazyInstance$;
    if (!i)
        throw new Error(`Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
    return r(),
    B2(void 0, () => $2(e, i, t))
}
  , B2 = (e, t) => D2(e) ? e.then(t).catch(n => {
    console.error(n),
    t()
}
) : t()
  , D2 = e => e instanceof Promise || e && e.then && typeof e.then == "function"
  , $2 = (e, t, n) => we(void 0, null, function*() {
    var r;
    let i = e.$hostElement$
      , o = (e.$cmpMeta$.$tagName$,
    () => {}
    )
      , s = i["s-rc"];
    n && O2(e);
    let a = (e.$cmpMeta$.$tagName$,
    () => {}
    );
    j2(e, t, i, n),
    s && (s.map(c => c()),
    i["s-rc"] = void 0),
    a(),
    o();
    {
        let c = (r = i["s-p"]) != null ? r : []
          , l = () => K2(e);
        c.length === 0 ? l() : (Promise.all(c).then(l),
        e.$flags$ |= 4,
        c.length = 0)
    }
})
  , j2 = (e, t, n, r) => {
    try {
        t = t.render(),
        e.$flags$ &= -17,
        e.$flags$ |= 2,
        I2(e, t, r)
    } catch (i) {
        jn(i, e.$hostElement$)
    }
    return null
}
  , K2 = e => {
    e.$cmpMeta$.$tagName$;
    let t = e.$hostElement$
      , n = () => {}
      , r = e.$lazyInstance$
      , i = e.$ancestorComponent$;
    64 & e.$flags$ ? n() : (e.$flags$ |= 64,
    A0(t),
    Nc(r, "componentDidLoad"),
    n(),
    e.$onReadyResolve$(t),
    i || x0()),
    e.$onRenderResolve$ && (e.$onRenderResolve$(),
    e.$onRenderResolve$ = void 0),
    512 & e.$flags$ && Rc( () => Ic(e, !1)),
    e.$flags$ &= -517
}
  , x0 = e => {
    A0(Dt.documentElement),
    Rc( () => w0(os, "appload", {
        detail: {
            namespace: "sdk-install-modal-web"
        }
    }))
}
  , Nc = (e, t, n) => {
    if (e && e[t])
        try {
            return e[t](n)
        } catch (r) {
            jn(r)
        }
}
  , A0 = e => {
    var t;
    return e.classList.add((t = v2) != null ? t : "hydrated")
}
  , U2 = (e, t, n, r) => {
    let i = Sn(e);
    if (!i)
        throw new Error(`Couldn't find host element for "${r.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);
    let o = i.$hostElement$
      , s = i.$instanceValues$.get(t)
      , a = i.$flags$
      , c = i.$lazyInstance$;
    var l, u;
    l = n,
    u = r.$members$[t][0],
    n = l == null || Oc(l) ? l : 4 & u ? l !== "false" && (l === "" || !!l) : 1 & u ? String(l) : l;
    let d = Number.isNaN(s) && Number.isNaN(n);
    if ((!(8 & a) || s === void 0) && n !== s && !d && (i.$instanceValues$.set(t, n),
    c)) {
        if (r.$watchers$ && 128 & a) {
            let h = r.$watchers$[t];
            h && h.map(f => {
                try {
                    c[f](n, s, t)
                } catch (g) {
                    jn(g, o)
                }
            }
            )
        }
        (18 & a) == 2 && Ic(i, !1)
    }
}
  , M0 = (e, t, n) => {
    var r, i;
    let o = e.prototype;
    if (t.$members$ || t.$watchers$ || e.watchers) {
        e.watchers && !t.$watchers$ && (t.$watchers$ = e.watchers);
        let s = Object.entries((r = t.$members$) != null ? r : {});
        if (s.map( ([a,[c]]) => {
            (31 & c || 2 & n && 32 & c) && Object.defineProperty(o, a, {
                get() {
                    return l = a,
                    Sn(this).$instanceValues$.get(l);
                    var l
                },
                set(l) {
                    U2(this, a, l, t)
                },
                configurable: !0,
                enumerable: !0
            })
        }
        ),
        1 & n) {
            let a = new Map;
            o.attributeChangedCallback = function(c, l, u) {
                Ke.jmp( () => {
                    var d;
                    let h = a.get(c);
                    if (this.hasOwnProperty(h))
                        u = this[h],
                        delete this[h];
                    else {
                        if (o.hasOwnProperty(h) && typeof this[h] == "number" && this[h] == u)
                            return;
                        if (h == null) {
                            let f = Sn(this)
                              , g = f?.$flags$;
                            if (g && !(8 & g) && 128 & g && u !== l) {
                                let m = f.$lazyInstance$
                                  , v = (d = t.$watchers$) == null ? void 0 : d[c];
                                v?.forEach(p => {
                                    m[p] != null && m[p].call(m, u, l, c)
                                }
                                )
                            }
                            return
                        }
                    }
                    this[h] = (u !== null || typeof this[h] != "boolean") && u
                }
                )
            }
            ,
            e.observedAttributes = Array.from(new Set([...Object.keys((i = t.$watchers$) != null ? i : {}), ...s.filter( ([c,l]) => 15 & l[0]).map( ([c,l]) => {
                let u = l[1] || c;
                return a.set(u, c),
                u
            }
            )]))
        }
    }
    return e
}
  , H2 = (e, t, n, r) => we(void 0, null, function*() {
    let i;
    if (!(32 & t.$flags$)) {
        if (t.$flags$ |= 32,
        n.$lazyBundleId$) {
            let a = ( (l, u, d) => {
                let h = l.$tagName$.replace(/-/g, "_")
                  , f = l.$lazyBundleId$;
                if (!f)
                    return;
                let g = ca.get(f);
                if (g)
                    return g[h];
                {
                    let m = v => (ca.set(f, v),
                    v[h]);
                    if (f === "mm-install-modal_3")
                        return Promise.resolve().then(function() {
                            return rg
                        }).then(m, jn)
                }
                return hp(`./${f}.entry.js`).then(m => (ca.set(f, m),
                m[h]), jn)
            }
            )(n);
            if (a && "then"in a) {
                let l = () => {}
                ;
                i = yield a,
                l()
            } else
                i = a;
            if (!i)
                throw new Error(`Constructor for "${n.$tagName$}#${t.$modeName$}" was not found`);
            i.isProxied || (n.$watchers$ = i.watchers,
            M0(i, n, 2),
            i.isProxied = !0);
            let c = (n.$tagName$,
            () => {}
            );
            t.$flags$ |= 8;
            try {
                new i(t)
            } catch (l) {
                jn(l)
            }
            t.$flags$ &= -9,
            t.$flags$ |= 128,
            c(),
            ec(t.$lazyInstance$)
        } else {
            i = e.constructor;
            let a = e.localName;
            customElements.whenDefined(a).then( () => t.$flags$ |= 128)
        }
        if (i && i.style) {
            let a;
            typeof i.style == "string" && (a = i.style);
            let c = E0(n);
            if (!mo.has(c)) {
                let l = (n.$tagName$,
                () => {}
                );
                ( (u, d, h) => {
                    let f = mo.get(u);
                    g0 && h ? (f = f || new CSSStyleSheet,
                    typeof f == "string" ? f = d : f.replaceSync(d)) : f = d,
                    mo.set(u, f)
                }
                )(c, a, !!(1 & n.$flags$)),
                l()
            }
        }
    }
    let o = t.$ancestorComponent$
      , s = () => Ic(t, !0);
    o && o["s-rc"] ? o["s-rc"].push(s) : s()
})
  , ec = e => {
    Nc(e, "connectedCallback")
}
  , Nd = e => {
    Nc(e, "disconnectedCallback")
}
  , F2 = (e, t={}) => {
    var n;
    let r = () => {}
    , i = [], o = t.exclude || [], s = os.customElements, a = Dt.head, c = a.querySelector("meta[charset]"), l = Dt.createElement("style"), u = [], d, h = !0;
    Object.assign(Ke, t),
    Ke.$resourcesUrl$ = new URL(t.resourcesUrl || "./",Dt.baseURI).href;
    let f = !1;
    if (e.map(g => {
        g[1].map(m => {
            var v;
            let p = {
                $flags$: m[0],
                $tagName$: m[1],
                $members$: m[2],
                $listeners$: m[3]
            };
            4 & p.$flags$ && (f = !0),
            p.$members$ = m[2],
            p.$watchers$ = (v = m[4]) != null ? v : {};
            let S = p.$tagName$
              , E = class extends HTMLElement {
                constructor(N) {
                    if (super(N),
                    this.hasRegisteredEventListeners = !1,
                    ( (I, F) => {
                        let q = {
                            $flags$: 0,
                            $hostElement$: I,
                            $cmpMeta$: F,
                            $instanceValues$: new Map
                        };
                        q.$onReadyPromise$ = new Promise(z => q.$onReadyResolve$ = z),
                        I["s-p"] = [],
                        I["s-rc"] = [],
                        Mc.set(I, q)
                    }
                    )(N = this, p),
                    1 & p.$flags$)
                        if (N.shadowRoot) {
                            if (N.shadowRoot.mode !== "open")
                                throw new Error(`Unable to re-use existing shadow root for ${p.$tagName$}! Mode is set to ${N.shadowRoot.mode} but Stencil only supports open shadow roots.`)
                        } else
                            N.attachShadow({
                                mode: "open"
                            })
                }
                connectedCallback() {
                    Sn(this),
                    this.hasRegisteredEventListeners || (this.hasRegisteredEventListeners = !0),
                    d && (clearTimeout(d),
                    d = null),
                    h ? u.push(this) : Ke.jmp( () => (N => {
                        if (!(1 & Ke.$flags$)) {
                            let I = Sn(N)
                              , F = I.$cmpMeta$
                              , q = (F.$tagName$,
                            () => {}
                            );
                            if (1 & I.$flags$)
                                I?.$lazyInstance$ ? ec(I.$lazyInstance$) : I?.$onReadyPromise$ && I.$onReadyPromise$.then( () => ec(I.$lazyInstance$));
                            else {
                                I.$flags$ |= 1;
                                {
                                    let z = N;
                                    for (; z = z.parentNode || z.host; )
                                        if (z["s-p"]) {
                                            k0(I, I.$ancestorComponent$ = z);
                                            break
                                        }
                                }
                                F.$members$ && Object.entries(F.$members$).map( ([z,[G]]) => {
                                    if (31 & G && N.hasOwnProperty(z)) {
                                        let U = N[z];
                                        delete N[z],
                                        N[z] = U
                                    }
                                }
                                ),
                                H2(N, I, F)
                            }
                            q()
                        }
                    }
                    )(this))
                }
                disconnectedCallback() {
                    Ke.jmp( () => (N => we(this, null, function*() {
                        if (!(1 & Ke.$flags$)) {
                            let I = Sn(N);
                            I?.$lazyInstance$ ? Nd(I.$lazyInstance$) : I?.$onReadyPromise$ && I.$onReadyPromise$.then( () => Nd(I.$lazyInstance$))
                        }
                    }))(this))
                }
                componentOnReady() {
                    return Sn(this).$onReadyPromise$
                }
            }
            ;
            p.$lazyBundleId$ = g[0],
            o.includes(S) || s.get(S) || (i.push(S),
            s.define(S, M0(E, p, 1)))
        }
        )
    }
    ),
    i.length > 0 && (f && (l.textContent += m0),
    l.textContent += i.sort() + "{visibility:hidden}.hydrated{visibility:inherit}",
    l.innerHTML.length)) {
        l.setAttribute("data-styles", "");
        let g = (n = Ke.$nonce$) != null ? n : v0(Dt);
        g != null && l.setAttribute("nonce", g),
        a.insertBefore(l, c ? c.nextSibling : a.firstChild)
    }
    h = !1,
    u.length ? u.map(g => g.connectedCallback()) : Ke.jmp( () => d = setTimeout(x0, 30)),
    r()
}
;
(function() {
    if (typeof window < "u" && window.Reflect !== void 0 && window.customElements !== void 0) {
        var e = HTMLElement;
        window.HTMLElement = function() {
            return Reflect.construct(e, [], this.constructor)
        }
        ,
        HTMLElement.prototype = e.prototype,
        HTMLElement.prototype.constructor = HTMLElement,
        Object.setPrototypeOf(HTMLElement, e)
    }
}
)();
var z2 = Object.freeze({
    __proto__: null,
    defineCustomElements: (e, t) => we(void 0, null, function*() {
        if (typeof window < "u")
            return yield void 0,
            F2([["mm-install-modal_3", [[1, "mm-install-modal", {
                link: [1],
                sdkVersion: [1, "sdk-version"],
                preferDesktop: [4, "prefer-desktop"],
                tab: [32],
                isDefaultTab: [32],
                translationsLoaded: [32]
            }, null, {
                preferDesktop: ["updatePreferDesktop"]
            }], [1, "mm-pending-modal", {
                displayOTP: [4, "display-o-t-p"],
                sdkVersion: [1, "sdk-version"],
                otpCode: [1, "otp-code"],
                translationsLoaded: [32]
            }], [1, "mm-select-modal", {
                link: [1],
                sdkVersion: [1, "sdk-version"],
                preferDesktop: [4, "prefer-desktop"],
                tab: [32],
                isDefaultTab: [32],
                translationsLoaded: [32]
            }, null, {
                preferDesktop: ["updatePreferDesktop"]
            }]]]], t)
    }),
    setNonce: e => Ke.$nonce$ = e
})
  , q2 = {
    fontFamily: "Roboto, sans-serif"
}
  , Bc = ({className: e}, t) => B("div", {
    style: q2,
    class: e
}, t)
  , la = ({Icon: e, text: t}) => B("div", {
    class: "flexContainer",
    style: {
        padding: "6",
        flexDirection: "row"
    }
}, B("div", {
    class: "flexItem1"
}, B(e, null)), B("div", {
    class: "flexItem11"
}, B("span", {
    style: {
        lineHeight: "2",
        color: "black"
    }
}, t)))
  , V2 = () => B("svg", {
    width: "20",
    height: "18",
    viewBox: "0 0 20 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, B("path", {
    d: "M20.0002 7.9702V10.0302C20.0002 10.5802 19.5602 11.0302 19.0002 11.0502H17.0402C15.9602 11.0502 14.9702 10.2602 14.8802 9.1802C14.8202 8.5502 15.0602 7.9602 15.4802 7.5502C15.8502 7.1702 16.3602 6.9502 16.9202 6.9502H19.0002C19.5602 6.9702 20.0002 7.4202 20.0002 7.9702Z",
    fill: "#037DD6"
}), B("path", {
    d: "M18.47 12.55H17.04C15.14 12.55 13.54 11.12 13.38 9.3C13.29 8.26 13.67 7.22 14.43 6.48C15.07 5.82 15.96 5.45 16.92 5.45H18.47C18.76 5.45 19 5.21 18.97 4.92C18.75 2.49 17.14 0.83 14.75 0.55C14.51 0.51 14.26 0.5 14 0.5H5C4.72 0.5 4.45 0.52 4.19 0.56C1.64 0.88 0 2.78 0 5.5V12.5C0 15.26 2.24 17.5 5 17.5H14C16.8 17.5 18.73 15.75 18.97 13.08C19 12.79 18.76 12.55 18.47 12.55ZM11 6.75H5C4.59 6.75 4.25 6.41 4.25 6C4.25 5.59 4.59 5.25 5 5.25H11C11.41 5.25 11.75 5.59 11.75 6C11.75 6.41 11.41 6.75 11 6.75Z",
    fill: "#037DD6"
}))
  , W2 = () => B("svg", {
    width: "20",
    height: "18",
    viewBox: "0 0 20 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, B("path", {
    d: "M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z",
    fill: "#037DD6"
}))
  , G2 = () => B("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, B("path", {
    d: "M16.28 7.53V6.28C16.28 3.58 15.63 0 10 0C4.37 0 3.72 3.58 3.72 6.28V7.53C0.92 7.88 0 9.3 0 12.79V14.65C0 18.75 1.25 20 5.35 20H14.65C18.75 20 20 18.75 20 14.65V12.79C20 9.3 19.08 7.88 16.28 7.53ZM10 16.74C8.33 16.74 6.98 15.38 6.98 13.72C6.98 12.05 8.34 10.7 10 10.7C11.66 10.7 13.02 12.06 13.02 13.72C13.02 15.39 11.67 16.74 10 16.74ZM5.35 7.44C5.27 7.44 5.2 7.44 5.12 7.44V6.28C5.12 3.35 5.95 1.4 10 1.4C14.05 1.4 14.88 3.35 14.88 6.28V7.45C14.8 7.45 14.73 7.45 14.65 7.45H5.35V7.44Z",
    fill: "#037DD6"
}))
  , Y2 = () => B("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, B("path", {
    d: "M16.4405 8.8999C20.0405 9.2099 21.5105 11.0599 21.5105 15.1099V15.2399C21.5105 19.7099 19.7205 21.4999 15.2505 21.4999H8.74047C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.2399 7.47047 8.9099",
    stroke: "white",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M12 2V14.88",
    stroke: "white",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M15.3504 12.6499L12.0004 15.9999L8.65039 12.6499",
    stroke: "white",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}));
function Dc({version: e}) {
    return B("div", {
        style: {
            textAlign: "center",
            color: "#BBC0C5",
            fontSize: "12"
        }
    }, "SDK Version ", e ? `v${e}` : "unknown")
}
var $c = () => B("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, B("rect", {
    width: "16",
    height: "16",
    fill: "white"
}), B("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M2.40554 2.40554C2.94627 1.86482 3.82296 1.86482 4.36369 2.40554L8 6.04186L11.6363 2.40554C12.177 1.86482 13.0537 1.86482 13.5945 2.40554C14.1352 2.94627 14.1352 3.82296 13.5945 4.36369L9.95814 8L13.5945 11.6363C14.1352 12.177 14.1352 13.0537 13.5945 13.5945C13.0537 14.1352 12.177 14.1352 11.6363 13.5945L8 9.95814L4.36369 13.5945C3.82296 14.1352 2.94627 14.1352 2.40554 13.5945C1.86482 13.0537 1.86482 12.177 2.40554 11.6363L6.04186 8L2.40554 4.36369C1.86482 3.82296 1.86482 2.94627 2.40554 2.40554Z",
    fill: "#BBC0C5"
}))
  , jc = () => B("svg", {
    width: "273",
    height: "51",
    viewBox: "0 0 273 51",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, B("path", {
    d: "M240.882 25.9263C239.472 24.997 237.916 24.3361 236.443 23.5101C235.489 22.9731 234.473 22.4982 233.643 21.8167C232.233 20.6602 232.524 18.3885 233.996 17.3973C236.112 15.993 239.617 16.7777 239.99 19.6483C239.99 19.7102 240.052 19.7515 240.114 19.7515H243.308C243.391 19.7515 243.454 19.6896 243.433 19.607C243.267 17.6244 242.5 15.9723 241.089 14.9191C239.741 13.9072 238.206 13.3702 236.568 13.3702C228.127 13.3702 227.359 22.271 231.901 25.0796C232.42 25.41 236.879 27.6404 238.455 28.611C240.032 29.5816 240.529 31.3576 239.845 32.7619C239.223 34.0423 237.605 34.9303 235.987 34.8271C234.224 34.7238 232.855 33.7738 232.378 32.2869C232.295 32.0185 232.254 31.5022 232.254 31.275C232.254 31.2131 232.192 31.1511 232.129 31.1511H228.666C228.604 31.1511 228.541 31.2131 228.541 31.275C228.541 33.7738 229.164 35.1575 230.864 36.4172C232.461 37.615 234.203 38.1106 236.008 38.1106C240.737 38.1106 243.184 35.4466 243.682 32.6793C244.117 29.974 243.308 27.5371 240.882 25.9263Z",
    fill: "#24292E"
}), B("path", {
    d: "M90.4943 13.8246H88.9595H87.2795C87.2173 13.8246 87.1758 13.8659 87.1551 13.9072L84.3137 23.2416C84.2722 23.3655 84.1063 23.3655 84.0648 23.2416L81.2234 13.9072C81.2026 13.8452 81.1612 13.8246 81.0989 13.8246H79.419H77.8842H75.8102C75.748 13.8246 75.6857 13.8865 75.6857 13.9485V37.7802C75.6857 37.8422 75.748 37.9041 75.8102 37.9041H79.2738C79.336 37.9041 79.3982 37.8422 79.3982 37.7802V19.6689C79.3982 19.5244 79.6056 19.5037 79.6471 19.6276L82.5093 29.024L82.7167 29.6849C82.7374 29.7468 82.7789 29.7675 82.8411 29.7675H85.4959C85.5581 29.7675 85.5996 29.7262 85.6203 29.6849L85.8277 29.024L88.6899 19.6276C88.7313 19.4831 88.9387 19.5244 88.9387 19.6689V37.7802C88.9387 37.8422 89.001 37.9041 89.0632 37.9041H92.5268C92.589 37.9041 92.6513 37.8422 92.6513 37.7802V13.9485C92.6513 13.8865 92.589 13.8246 92.5268 13.8246H90.4943Z",
    fill: "#24292E"
}), B("path", {
    d: "M187.849 13.8246C187.787 13.8246 187.745 13.8659 187.725 13.9072L184.883 23.2416C184.842 23.3655 184.676 23.3655 184.634 23.2416L181.793 13.9072C181.772 13.8452 181.731 13.8246 181.668 13.8246H176.4C176.338 13.8246 176.276 13.8865 176.276 13.9485V37.7802C176.276 37.8422 176.338 37.9041 176.4 37.9041H179.864C179.926 37.9041 179.988 37.8422 179.988 37.7802V19.6689C179.988 19.5244 180.196 19.5037 180.237 19.6276L183.099 29.024L183.307 29.6849C183.328 29.7468 183.369 29.7675 183.431 29.7675H186.086C186.148 29.7675 186.19 29.7262 186.211 29.6849L186.418 29.024L189.28 19.6276C189.322 19.4831 189.529 19.5244 189.529 19.6689V37.7802C189.529 37.8422 189.591 37.9041 189.653 37.9041H193.117C193.179 37.9041 193.241 37.8422 193.241 37.7802V13.9485C193.241 13.8865 193.179 13.8246 193.117 13.8246H187.849Z",
    fill: "#24292E"
}), B("path", {
    d: "M143.174 13.8246H136.724H133.261H126.81C126.748 13.8246 126.686 13.8865 126.686 13.9485V16.9223C126.686 16.9843 126.748 17.0462 126.81 17.0462H133.136V37.7802C133.136 37.8422 133.198 37.9041 133.261 37.9041H136.724C136.786 37.9041 136.849 37.8422 136.849 37.7802V17.0462H143.174C143.237 17.0462 143.299 16.9843 143.299 16.9223V13.9485C143.299 13.8865 143.257 13.8246 143.174 13.8246Z",
    fill: "#24292E"
}), B("path", {
    d: "M163.604 37.9041H166.756C166.839 37.9041 166.901 37.8215 166.881 37.7389L160.368 13.8245C160.347 13.7626 160.306 13.7419 160.244 13.7419H159.041H156.925H155.722C155.66 13.7419 155.619 13.7832 155.598 13.8245L149.085 37.7389C149.065 37.8215 149.127 37.9041 149.21 37.9041H152.362C152.425 37.9041 152.466 37.8628 152.487 37.8215L154.374 30.862C154.395 30.8 154.436 30.7794 154.499 30.7794H161.467C161.53 30.7794 161.571 30.8207 161.592 30.862L163.479 37.8215C163.5 37.8628 163.562 37.9041 163.604 37.9041ZM155.328 27.3719L157.859 18.0581C157.9 17.9342 158.066 17.9342 158.107 18.0581L160.638 27.3719C160.659 27.4545 160.596 27.5371 160.513 27.5371H155.453C155.37 27.5371 155.308 27.4545 155.328 27.3719Z",
    fill: "#24292E"
}), B("path", {
    d: "M217.362 37.9041H220.515C220.598 37.9041 220.66 37.8215 220.639 37.7389L214.127 13.8245C214.106 13.7626 214.065 13.7419 214.002 13.7419H212.8H210.684H209.481C209.419 13.7419 209.377 13.7832 209.357 13.8245L202.844 37.7389C202.823 37.8215 202.886 37.9041 202.969 37.9041H206.121C206.183 37.9041 206.225 37.8628 206.246 37.8215L208.133 30.862C208.154 30.8 208.195 30.7794 208.257 30.7794H215.226C215.288 30.7794 215.33 30.8207 215.351 30.862L217.238 37.8215C217.259 37.8628 217.3 37.9041 217.362 37.9041ZM209.087 27.3719L211.617 18.0581C211.659 17.9342 211.825 17.9342 211.866 18.0581L214.397 27.3719C214.417 27.4545 214.355 27.5371 214.272 27.5371H209.211C209.129 27.5371 209.066 27.4545 209.087 27.3719Z",
    fill: "#24292E"
}), B("path", {
    d: "M106.713 34.3727V26.9795C106.713 26.9176 106.775 26.8556 106.837 26.8556H116.067C116.129 26.8556 116.191 26.7936 116.191 26.7317V23.7579C116.191 23.6959 116.129 23.634 116.067 23.634H106.837C106.775 23.634 106.713 23.572 106.713 23.5101V17.1907C106.713 17.1288 106.775 17.0668 106.837 17.0668H117.332C117.394 17.0668 117.457 17.0049 117.457 16.9429V13.9691C117.457 13.9072 117.394 13.8452 117.332 13.8452H106.713H103.125C103.063 13.8452 103.001 13.9072 103.001 13.9691V17.0668V23.6546V26.8763V34.5173V37.7802C103.001 37.8422 103.063 37.9041 103.125 37.9041H106.713H117.768C117.83 37.9041 117.892 37.8422 117.892 37.7802V34.6412C117.892 34.5792 117.83 34.5173 117.768 34.5173H106.817C106.755 34.4966 106.713 34.4553 106.713 34.3727Z",
    fill: "#24292E"
}), B("path", {
    d: "M272.532 37.6976L260.544 25.3687C260.502 25.3274 260.502 25.2448 260.544 25.2035L271.329 14.0517C271.412 13.9691 271.349 13.8452 271.246 13.8452H266.828C266.787 13.8452 266.766 13.8659 266.745 13.8865L257.599 23.3449C257.516 23.4275 257.391 23.3655 257.391 23.2623V13.9691C257.391 13.9072 257.329 13.8452 257.267 13.8452H253.803C253.741 13.8452 253.679 13.9072 253.679 13.9691V37.8009C253.679 37.8628 253.741 37.9248 253.803 37.9248H257.267C257.329 37.9248 257.391 37.8628 257.391 37.8009V27.3099C257.391 27.2067 257.536 27.1447 257.599 27.2273L267.969 37.8835C267.989 37.9041 268.031 37.9248 268.052 37.9248H272.469C272.552 37.9041 272.615 37.7596 272.532 37.6976Z",
    fill: "#24292E"
}), B("path", {
    d: "M52.021 1L31.0526 16.4886L34.9517 7.36063L52.021 1Z",
    fill: "#E17726",
    stroke: "#E17726",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M3.65491 1L24.4366 16.6331L20.7241 7.36063L3.65491 1Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M44.4716 36.9127L38.8925 45.4211L50.8389 48.7047L54.261 37.0986L44.4716 36.9127Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M1.43555 37.0986L4.83695 48.7047L16.7626 45.4211L11.2042 36.9127L1.43555 37.0986Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M16.1197 22.5395L12.8013 27.5371L24.6232 28.074L24.2292 15.3734L16.1197 22.5395Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M39.5561 22.5394L31.3222 15.2288L31.0526 28.0739L42.8746 27.537L39.5561 22.5394Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M16.7626 45.4212L23.918 41.9724L17.7582 37.1813L16.7626 45.4212Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M31.7578 41.9724L38.8925 45.4212L37.9177 37.1813L31.7578 41.9724Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M38.8923 45.4212L31.7577 41.9724L32.3384 46.5983L32.2762 48.5602L38.8923 45.4212Z",
    fill: "#D5BFB2",
    stroke: "#D5BFB2",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M16.7625 45.4212L23.3994 48.5602L23.3579 46.5983L23.9179 41.9724L16.7625 45.4212Z",
    fill: "#D5BFB2",
    stroke: "#D5BFB2",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M23.5239 34.1249L17.5922 32.3902L21.7818 30.4696L23.5239 34.1249Z",
    fill: "#233447",
    stroke: "#233447",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M32.1517 34.1249L33.8939 30.4696L38.1042 32.3902L32.1517 34.1249Z",
    fill: "#233447",
    stroke: "#233447",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M16.7626 45.4212L17.7996 36.9128L11.2042 37.0987L16.7626 45.4212Z",
    fill: "#CC6228",
    stroke: "#CC6228",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M37.8761 36.9128L38.8924 45.4212L44.4715 37.0987L37.8761 36.9128Z",
    fill: "#CC6228",
    stroke: "#CC6228",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M42.8745 27.5371L31.0526 28.074L32.1518 34.1249L33.894 30.4696L38.1042 32.3902L42.8745 27.5371Z",
    fill: "#CC6228",
    stroke: "#CC6228",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M17.5922 32.3902L21.7817 30.4696L23.5239 34.1249L24.6232 28.074L12.8012 27.5371L17.5922 32.3902Z",
    fill: "#CC6228",
    stroke: "#CC6228",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M12.8013 27.5371L17.7582 37.1813L17.5923 32.3902L12.8013 27.5371Z",
    fill: "#E27525",
    stroke: "#E27525",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M38.1044 32.3902L37.9177 37.1813L42.8746 27.5371L38.1044 32.3902Z",
    fill: "#E27525",
    stroke: "#E27525",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M24.6232 28.0741L23.524 34.125L24.9136 41.2703L25.2247 31.8533L24.6232 28.0741Z",
    fill: "#E27525",
    stroke: "#E27525",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M31.0526 28.0741L30.4719 31.8327L30.7623 41.2703L32.1519 34.125L31.0526 28.0741Z",
    fill: "#E27525",
    stroke: "#E27525",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M32.1519 34.1249L30.7623 41.2702L31.7578 41.9724L37.9177 37.1813L38.1043 32.3901L32.1519 34.1249Z",
    fill: "#F5841F",
    stroke: "#F5841F",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M17.5922 32.3901L17.7581 37.1813L23.918 41.9724L24.9135 41.2702L23.5239 34.1249L17.5922 32.3901Z",
    fill: "#F5841F",
    stroke: "#F5841F",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M32.2763 48.5602L32.3385 46.5983L31.7993 46.1439H23.8765L23.358 46.5983L23.3995 48.5602L16.7626 45.4211L19.0855 47.3211L23.7935 50.5633H31.8615L36.5903 47.3211L38.8924 45.4211L32.2763 48.5602Z",
    fill: "#C0AC9D",
    stroke: "#C0AC9D",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M31.7578 41.9724L30.7622 41.2703H24.9135L23.918 41.9724L23.358 46.5983L23.8765 46.144H31.7993L32.3385 46.5983L31.7578 41.9724Z",
    fill: "#24292E",
    stroke: "#24292E",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M52.9128 17.5005L54.6757 8.95079L52.021 1L31.7578 15.9723L39.5561 22.5394L50.5692 25.7404L52.9958 22.9111L51.938 22.147L53.618 20.6188L52.3321 19.6276L54.0121 18.3472L52.9128 17.5005Z",
    fill: "#763E1A",
    stroke: "#763E1A",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M1 8.95079L2.78366 17.5005L1.64295 18.3472L3.34365 19.6276L2.05775 20.6188L3.73771 22.147L2.67996 22.9111L5.10657 25.7404L16.1196 22.5394L23.918 15.9723L3.65475 1L1 8.95079Z",
    fill: "#763E1A",
    stroke: "#763E1A",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M50.5692 25.7404L39.5561 22.5394L42.8746 27.5371L37.9177 37.1813L44.4716 37.0987H54.261L50.5692 25.7404Z",
    fill: "#F5841F",
    stroke: "#F5841F",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M16.1196 22.5394L5.10651 25.7404L1.43549 37.0987H11.2041L17.7581 37.1813L12.8011 27.5371L16.1196 22.5394Z",
    fill: "#F5841F",
    stroke: "#F5841F",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M31.0526 28.0741L31.7578 15.9724L34.9518 7.36072H20.7239L23.9179 15.9724L24.6231 28.0741L24.8927 31.8739L24.9135 41.2703H30.7622L30.783 31.8739L31.0526 28.0741Z",
    fill: "#F5841F",
    stroke: "#F5841F",
    "stroke-width": "0.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}));
function Ln(e, t) {
    return e.toString(2).padStart(t, "0")
}
function Bd(e, t) {
    let n = e % t;
    return n >= 0 ? n : t + n
}
function ut(e, t) {
    return new Array(e).fill(t)
}
function Dd(...e) {
    let t = 0;
    for (let r of e)
        t = Math.max(t, r.length);
    let n = [];
    for (let r = 0; r < t; r++)
        for (let i of e)
            r >= i.length || n.push(i[r]);
    return new Uint8Array(n)
}
function $d(e, t, n) {
    if (n < 0 || n + t.length > e.length)
        return !1;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e[n + r])
            return !1;
    return !0
}
function jd(e) {
    return {
        has: t => e.includes(t),
        decode: t => {
            if (!Array.isArray(t) || t.length && typeof t[0] != "string")
                throw new Error("alphabet.decode input should be array of strings");
            return t.map(n => {
                if (typeof n != "string")
                    throw new Error(`alphabet.decode: not string element=${n}`);
                let r = e.indexOf(n);
                if (r === -1)
                    throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);
                return r
            }
            )
        }
        ,
        encode: t => {
            if (!Array.isArray(t) || t.length && typeof t[0] != "number")
                throw new Error("alphabet.encode input should be an array of numbers");
            return t.map(n => {
                if (function(r) {
                    if (!Number.isSafeInteger(r))
                        throw new Error(`Wrong integer: ${r}`)
                }(n),
                n < 0 || n >= e.length)
                    throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);
                return e[n]
            }
            )
        }
    }
}
var ei = class e {
    static size(t, n) {
        if (typeof t == "number" && (t = {
            height: t,
            width: t
        }),
        !Number.isSafeInteger(t.height) && t.height !== 1 / 0)
            throw new Error(`Bitmap: wrong height=${t.height} (${typeof t.height})`);
        if (!Number.isSafeInteger(t.width) && t.width !== 1 / 0)
            throw new Error(`Bitmap: wrong width=${t.width} (${typeof t.width})`);
        return n !== void 0 && (t = {
            width: Math.min(t.width, n.width),
            height: Math.min(t.height, n.height)
        }),
        t
    }
    static fromString(t) {
        let n = (t = t.replace(/^\n+/g, "").replace(/\n+$/g, "")).split(`
`), r = n.length, i = new Array(r), o;
        for (let s of n) {
            let a = s.split("").map(c => {
                if (c === "X")
                    return !0;
                if (c === " ")
                    return !1;
                if (c !== "?")
                    throw new Error(`Bitmap.fromString: unknown symbol=${c}`)
            }
            );
            if (o && a.length !== o)
                throw new Error(`Bitmap.fromString different row sizes: width=${o} cur=${a.length}`);
            o = a.length,
            i.push(a)
        }
        return o || (o = 0),
        new e({
            height: r,
            width: o
        },i)
    }
    constructor(t, n) {
        let {height: r, width: i} = e.size(t);
        this.data = n || Array.from({
            length: r
        }, () => ut(i, void 0)),
        this.height = r,
        this.width = i
    }
    point(t) {
        return this.data[t.y][t.x]
    }
    isInside(t) {
        return 0 <= t.x && t.x < this.width && 0 <= t.y && t.y < this.height
    }
    size(t) {
        if (!t)
            return {
                height: this.height,
                width: this.width
            };
        let {x: n, y: r} = this.xy(t);
        return {
            height: this.height - r,
            width: this.width - n
        }
    }
    xy(t) {
        if (typeof t == "number" && (t = {
            x: t,
            y: t
        }),
        !Number.isSafeInteger(t.x))
            throw new Error(`Bitmap: wrong x=${t.x}`);
        if (!Number.isSafeInteger(t.y))
            throw new Error(`Bitmap: wrong y=${t.y}`);
        return t.x = Bd(t.x, this.width),
        t.y = Bd(t.y, this.height),
        t
    }
    rect(t, n, r) {
        let {x: i, y: o} = this.xy(t)
          , {height: s, width: a} = e.size(n, this.size({
            x: i,
            y: o
        }));
        for (let c = 0; c < s; c++)
            for (let l = 0; l < a; l++)
                this.data[o + c][i + l] = typeof r == "function" ? r({
                    x: l,
                    y: c
                }, this.data[o + c][i + l]) : r;
        return this
    }
    rectRead(t, n, r) {
        return this.rect(t, n, (i, o) => (r(i, o),
        o))
    }
    hLine(t, n, r) {
        return this.rect(t, {
            width: n,
            height: 1
        }, r)
    }
    vLine(t, n, r) {
        return this.rect(t, {
            width: 1,
            height: n
        }, r)
    }
    border(t=2, n) {
        let r = this.height + 2 * t
          , i = this.width + 2 * t
          , o = ut(t, n)
          , s = Array.from({
            length: t
        }, () => ut(i, n));
        return new e({
            height: r,
            width: i
        },[...s, ...this.data.map(a => [...o, ...a, ...o]), ...s])
    }
    embed(t, n) {
        return this.rect(t, n.size(), ({x: r, y: i}) => n.data[i][r])
    }
    rectSlice(t, n=this.size()) {
        let r = new e(e.size(n, this.size(this.xy(t))));
        return this.rect(t, n, ({x: i, y: o}, s) => r.data[o][i] = s),
        r
    }
    inverse() {
        let {height: t, width: n} = this;
        return new e({
            height: n,
            width: t
        }).rect({
            x: 0,
            y: 0
        }, 1 / 0, ({x: r, y: i}) => this.data[r][i])
    }
    scale(t) {
        if (!Number.isSafeInteger(t) || t > 1024)
            throw new Error(`Wrong scale factor: ${t}`);
        let {height: n, width: r} = this;
        return new e({
            height: t * n,
            width: t * r
        }).rect({
            x: 0,
            y: 0
        }, 1 / 0, ({x: i, y: o}) => this.data[Math.floor(o / t)][Math.floor(i / t)])
    }
    clone() {
        return new e(this.size()).rect({
            x: 0,
            y: 0
        }, this.size(), ({x: t, y: n}) => this.data[n][t])
    }
    assertDrawn() {
        this.rectRead(0, 1 / 0, (t, n) => {
            if (typeof n != "boolean")
                throw new Error("Invalid color type=" + typeof n)
        }
        )
    }
    toString() {
        return this.data.map(t => t.map(n => n === void 0 ? "?" : n ? "X" : " ").join("")).join(`
`)
    }
    toASCII() {
        let {height: t, width: n, data: r} = this
          , i = "";
        for (let o = 0; o < t; o += 2) {
            for (let s = 0; s < n; s++) {
                let a = r[o][s]
                  , c = o + 1 >= t || r[o + 1][s];
                a || c ? !a && c ? i += "\u2580" : a && !c ? i += "\u2584" : a && c && (i += " ") : i += "\u2588"
            }
            i += `
`
        }
        return i
    }
    toTerm() {
        let t = "\x1B[0m"
          , n = `\x1B[1;47m  ${t}`
          , r = `\x1B[40m  ${t}`;
        return this.data.map(i => i.map(o => o ? r : n).join("")).join(`
`)
    }
    toSVG() {
        let t = `<svg xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 ${this.width} ${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
        return this.rectRead(0, 1 / 0, ({x: n, y: r}, i) => {
            i && (t += `<rect x="${n}" y="${r}" width="1" height="1" />`)
        }
        ),
        t += "</svg>",
        t
    }
    toGIF() {
        let t = a => [255 & a, a >>> 8 & 255]
          , n = [...t(this.width), ...t(this.height)]
          , r = [];
        this.rectRead(0, 1 / 0, (a, c) => r.push(+(c === !0)));
        let i = 126
          , o = [71, 73, 70, 56, 55, 97, ...n, 246, 0, 0, 255, 255, 255, ...ut(381, 0), 44, 0, 0, 0, 0, ...n, 0, 7]
          , s = Math.floor(r.length / i);
        for (let a = 0; a < s; a++)
            o.push(127, 128, ...r.slice(i * a, i * (a + 1)).map(c => +c));
        return o.push(r.length % i + 1, 128, ...r.slice(s * i).map(a => +a)),
        o.push(1, 129, 0, 59),
        new Uint8Array(o)
    }
    toImage(t=!1) {
        let {height: n, width: r} = this.size()
          , i = new Uint8Array(n * r * (t ? 3 : 4))
          , o = 0;
        for (let s = 0; s < n; s++)
            for (let a = 0; a < r; a++) {
                let c = this.data[s][a] ? 0 : 255;
                i[o++] = c,
                i[o++] = c,
                i[o++] = c,
                t || (i[o++] = 255)
            }
        return {
            height: n,
            width: r,
            data: i
        }
    }
}
  , Kd = ["low", "medium", "quartile", "high"]
  , Ud = ["numeric", "alphanumeric", "byte", "kanji", "eci"]
  , Z2 = [26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706]
  , J2 = {
    low: [7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    medium: [10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    quartile: [13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    high: [17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
}
  , X2 = {
    low: [1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    medium: [1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    quartile: [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    high: [1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
}
  , Ve = {
    size: {
        encode: e => 21 + 4 * (e - 1),
        decode: e => (e - 17) / 4
    },
    sizeType: e => Math.floor((e + 7) / 17),
    alignmentPatterns(e) {
        if (e === 1)
            return [];
        let t = Ve.size.encode(e) - 6 - 1
          , n = t - 6
          , r = Math.ceil(n / 28)
          , i = Math.floor(n / r);
        i % 2 ? i += 1 : n % r * 2 >= r && (i += 2);
        let o = [6];
        for (let s = 1; s < r; s++)
            o.push(t - (r - s) * i);
        return o.push(t),
        o
    },
    ECCode: {
        low: 1,
        medium: 0,
        quartile: 3,
        high: 2
    },
    formatMask: 21522,
    formatBits(e, t) {
        let n = Ve.ECCode[e] << 3 | t
          , r = n;
        for (let i = 0; i < 10; i++)
            r = r << 1 ^ 1335 * (r >> 9);
        return (n << 10 | r) ^ Ve.formatMask
    },
    versionBits(e) {
        let t = e;
        for (let n = 0; n < 12; n++)
            t = t << 1 ^ 7973 * (t >> 11);
        return e << 12 | t
    },
    alphabet: {
        numeric: jd("0123456789"),
        alphanumerc: jd("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:")
    },
    lengthBits: (e, t) => ({
        numeric: [10, 12, 14],
        alphanumeric: [9, 11, 13],
        byte: [8, 16, 16],
        kanji: [8, 10, 12],
        eci: [0, 0, 0]
    })[t][Ve.sizeType(e)],
    modeBits: {
        numeric: "0001",
        alphanumeric: "0010",
        byte: "0100",
        kanji: "1000",
        eci: "0111"
    },
    capacity(e, t) {
        let n = Z2[e - 1]
          , r = J2[t][e - 1]
          , i = X2[t][e - 1]
          , o = Math.floor(n / i) - r
          , s = i - n % i;
        return {
            words: r,
            numBlocks: i,
            shortBlocks: s,
            blockLen: o,
            capacity: 8 * (n - r * i),
            total: (r + o) * i + i - s
        }
    }
}
  , tc = [ (e, t) => (e + t) % 2 == 0, (e, t) => t % 2 == 0, (e, t) => e % 3 == 0, (e, t) => (e + t) % 3 == 0, (e, t) => (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0, (e, t) => e * t % 2 + e * t % 3 == 0, (e, t) => (e * t % 2 + e * t % 3) % 2 == 0, (e, t) => ((e + t) % 2 + e * t % 3) % 2 == 0]
  , oe = {
    tables: (e => {
        let t = ut(256, 0)
          , n = ut(256, 0);
        for (let r = 0, i = 1; r < 256; r++)
            t[r] = i,
            n[i] = r,
            i <<= 1,
            256 & i && (i ^= 285);
        return {
            exp: t,
            log: n
        }
    }
    )(),
    exp: e => oe.tables.exp[e],
    log(e) {
        if (e === 0)
            throw new Error(`GF.log: wrong arg=${e}`);
        return oe.tables.log[e] % 255
    },
    mul: (e, t) => e === 0 || t === 0 ? 0 : oe.tables.exp[(oe.tables.log[e] + oe.tables.log[t]) % 255],
    add: (e, t) => e ^ t,
    pow: (e, t) => oe.tables.exp[oe.tables.log[e] * t % 255],
    inv(e) {
        if (e === 0)
            throw new Error(`GF.inverse: wrong arg=${e}`);
        return oe.tables.exp[255 - oe.tables.log[e]]
    },
    polynomial(e) {
        if (e.length == 0)
            throw new Error("GF.polymomial: wrong length");
        if (e[0] !== 0)
            return e;
        let t = 0;
        for (; t < e.length - 1 && e[t] == 0; t++)
            ;
        return e.slice(t)
    },
    monomial(e, t) {
        if (e < 0)
            throw new Error(`GF.monomial: wrong degree=${e}`);
        if (t == 0)
            return [0];
        let n = ut(e + 1, 0);
        return n[0] = t,
        oe.polynomial(n)
    },
    degree: e => e.length - 1,
    coefficient: (e, t) => e[oe.degree(e) - t],
    mulPoly(e, t) {
        if (e[0] === 0 || t[0] === 0)
            return [0];
        let n = ut(e.length + t.length - 1, 0);
        for (let r = 0; r < e.length; r++)
            for (let i = 0; i < t.length; i++)
                n[r + i] = oe.add(n[r + i], oe.mul(e[r], t[i]));
        return oe.polynomial(n)
    },
    mulPolyScalar(e, t) {
        if (t == 0)
            return [0];
        if (t == 1)
            return e;
        let n = ut(e.length, 0);
        for (let r = 0; r < e.length; r++)
            n[r] = oe.mul(e[r], t);
        return oe.polynomial(n)
    },
    mulPolyMonomial(e, t, n) {
        if (t < 0)
            throw new Error("GF.mulPolyMonomial: wrong degree");
        if (n == 0)
            return [0];
        let r = ut(e.length + t, 0);
        for (let i = 0; i < e.length; i++)
            r[i] = oe.mul(e[i], n);
        return oe.polynomial(r)
    },
    addPoly(e, t) {
        if (e[0] === 0)
            return t;
        if (t[0] === 0)
            return e;
        let n = e
          , r = t;
        n.length > r.length && ([n,r] = [r, n]);
        let i = ut(r.length, 0)
          , o = r.length - n.length
          , s = r.slice(0, o);
        for (let a = 0; a < s.length; a++)
            i[a] = s[a];
        for (let a = o; a < r.length; a++)
            i[a] = oe.add(n[a - o], r[a]);
        return oe.polynomial(i)
    },
    remainderPoly(e, t) {
        let n = Array.from(e);
        for (let r = 0; r < e.length - t.length + 1; r++) {
            let i = n[r];
            if (i !== 0)
                for (let o = 1; o < t.length; o++)
                    t[o] !== 0 && (n[r + o] = oe.add(n[r + o], oe.mul(t[o], i)))
        }
        return n.slice(e.length - t.length + 1, n.length)
    },
    divisorPoly(e) {
        let t = [1];
        for (let n = 0; n < e; n++)
            t = oe.mulPoly(t, [1, oe.pow(2, n)]);
        return t
    },
    evalPoly(e, t) {
        if (t == 0)
            return oe.coefficient(e, 0);
        let n = e[0];
        for (let r = 1; r < e.length; r++)
            n = oe.add(oe.mul(t, n), e[r]);
        return n
    },
    euclidian(e, t, n) {
        oe.degree(e) < oe.degree(t) && ([e,t] = [t, e]);
        let r = e
          , i = t
          , o = [0]
          , s = [1];
        for (; 2 * oe.degree(i) >= n; ) {
            let l = r
              , u = o;
            if (r = i,
            o = s,
            r[0] === 0)
                throw new Error("rLast[0] === 0");
            i = l;
            let d = [0]
              , h = oe.inv(r[0]);
            for (; oe.degree(i) >= oe.degree(r) && i[0] !== 0; ) {
                let f = oe.degree(i) - oe.degree(r)
                  , g = oe.mul(i[0], h);
                d = oe.addPoly(d, oe.monomial(f, g)),
                i = oe.addPoly(i, oe.mulPolyMonomial(r, f, g))
            }
            if (d = oe.mulPoly(d, o),
            s = oe.addPoly(d, u),
            oe.degree(i) >= oe.degree(r))
                throw new Error(`Division failed r: ${i}, rLast: ${r}`)
        }
        let a = oe.coefficient(s, 0);
        if (a == 0)
            throw new Error("sigmaTilde(0) was zero");
        let c = oe.inv(a);
        return [oe.mulPolyScalar(s, c), oe.mulPolyScalar(i, c)]
    }
};
function Q2(e, t) {
    let {words: n, shortBlocks: r, numBlocks: i, blockLen: o, total: s} = Ve.capacity(e, t)
      , a = (c = n,
    {
        encode(l) {
            let u = oe.divisorPoly(c)
              , d = Array.from(l);
            return d.push(...u.slice(0, -1).fill(0)),
            Uint8Array.from(oe.remainderPoly(d, u))
        },
        decode(l) {
            let u = l.slice()
              , d = oe.polynomial(Array.from(l))
              , h = ut(c, 0)
              , f = !1;
            for (let E = 0; E < c; E++) {
                let N = oe.evalPoly(d, oe.exp(E));
                h[h.length - 1 - E] = N,
                N !== 0 && (f = !0)
            }
            if (!f)
                return u;
            h = oe.polynomial(h);
            let g = oe.monomial(c, 1)
              , [m,v] = oe.euclidian(g, h, c)
              , p = ut(oe.degree(m), 0)
              , S = 0;
            for (let E = 1; E < 256 && S < p.length; E++)
                oe.evalPoly(m, E) === 0 && (p[S++] = oe.inv(E));
            if (S !== p.length)
                throw new Error("RS.decode: wrong errors number");
            for (let E = 0; E < p.length; E++) {
                let N = u.length - 1 - oe.log(p[E]);
                if (N < 0)
                    throw new Error("RS.decode: wrong error location");
                let I = oe.inv(p[E])
                  , F = 1;
                for (let q = 0; q < p.length; q++)
                    E !== q && (F = oe.mul(F, oe.add(1, oe.mul(p[q], I))));
                u[N] = oe.add(u[N], oe.mul(oe.evalPoly(v, I), oe.inv(F)))
            }
            return u
        }
    });
    var c;
    return {
        encode(l) {
            let u = []
              , d = [];
            for (let m = 0; m < i; m++) {
                let v = o + (m < r ? 0 : 1);
                u.push(l.subarray(0, v)),
                d.push(a.encode(l.subarray(0, v))),
                l = l.subarray(v)
            }
            let h = Dd(...u)
              , f = Dd(...d)
              , g = new Uint8Array(h.length + f.length);
            return g.set(h),
            g.set(f, h.length),
            g
        },
        decode(l) {
            if (l.length !== s)
                throw new Error(`interleave.decode: len(data)=${l.length}, total=${s}`);
            let u = [];
            for (let f = 0; f < i; f++) {
                let g = f < r;
                u.push(new Uint8Array(n + o + (g ? 0 : 1)))
            }
            let d = 0;
            for (let f = 0; f < o; f++)
                for (let g = 0; g < i; g++)
                    u[g][f] = l[d++];
            for (let f = r; f < i; f++)
                u[f][o] = l[d++];
            for (let f = o; f < o + n; f++)
                for (let g = 0; g < i; g++) {
                    let m = g < r;
                    u[g][f + (m ? 0 : 1)] = l[d++]
                }
            let h = [];
            for (let f of u)
                h.push(...Array.from(a.decode(f)).slice(0, -n));
            return Uint8Array.from(h)
        }
    }
}
function Hd(e, t, n, r) {
    let i = ""
      , o = n.length;
    if (r === "numeric") {
        let d = Ve.alphabet.numeric.decode(n.split(""))
          , h = d.length;
        for (let f = 0; f < h - 2; f += 3)
            i += Ln(100 * d[f] + 10 * d[f + 1] + d[f + 2], 10);
        h % 3 == 1 ? i += Ln(d[h - 1], 4) : h % 3 == 2 && (i += Ln(10 * d[h - 2] + d[h - 1], 7))
    } else if (r === "alphanumeric") {
        let d = Ve.alphabet.alphanumerc.decode(n.split(""))
          , h = d.length;
        for (let f = 0; f < h - 1; f += 2)
            i += Ln(45 * d[f] + d[f + 1], 11);
        h % 2 == 1 && (i += Ln(d[h - 1], 6))
    } else {
        if (r !== "byte")
            throw new Error("encode: unsupported type");
        {
            let d = function(h) {
                if (typeof h != "string")
                    throw new Error("utf8ToBytes expected string, got " + typeof h);
                return new Uint8Array(new TextEncoder().encode(h))
            }(n);
            o = d.length,
            i = Array.from(d).map(h => Ln(h, 8)).join("")
        }
    }
    let {capacity: s} = Ve.capacity(e, t)
      , a = Ln(o, Ve.lengthBits(e, r))
      , c = Ve.modeBits[r] + a + i;
    if (c.length > s)
        throw new Error("Capacity overflow");
    c += "0".repeat(Math.min(4, Math.max(0, s - c.length))),
    c.length % 8 && (c += "0".repeat(8 - c.length % 8));
    let l = "1110110000010001";
    for (let d = 0; c.length !== s; d++)
        c += l[d % 16];
    let u = Uint8Array.from(c.match(/(.{8})/g).map(d => +`0b${d}`));
    return Q2(e, t).encode(u)
}
function Fd(e, t, n, r, i=!1) {
    let o = function(c, l, u, d=!1) {
        let h = Ve.size.encode(c)
          , f = new ei(h + 2)
          , g = new ei(3).rect(0, 3, !0).border(1, !1).border(1, !0).border(1, !1);
        f = f.embed(0, g).embed({
            x: -g.width,
            y: 0
        }, g).embed({
            x: 0,
            y: -g.height
        }, g),
        f = f.rectSlice(1, h);
        let m = new ei(1).rect(0, 1, !0).border(1, !1).border(1, !0)
          , v = Ve.alignmentPatterns(c);
        for (let p of v)
            for (let S of v)
                f.data[p][S] === void 0 && f.embed({
                    x: S - 2,
                    y: p - 2
                }, m);
        f = f.hLine({
            x: 0,
            y: 6
        }, 1 / 0, ({x: p}, S) => S === void 0 ? p % 2 == 0 : S).vLine({
            x: 6,
            y: 0
        }, 1 / 0, ({y: p}, S) => S === void 0 ? p % 2 == 0 : S);
        {
            let p = Ve.formatBits(l, u)
              , S = E => !d && (p >> E & 1) == 1;
            for (let E = 0; E < 6; E++)
                f.data[E][8] = S(E);
            for (let E = 6; E < 8; E++)
                f.data[E + 1][8] = S(E);
            for (let E = 8; E < 15; E++)
                f.data[h - 15 + E][8] = S(E);
            for (let E = 0; E < 8; E++)
                f.data[8][h - E - 1] = S(E);
            for (let E = 8; E < 9; E++)
                f.data[8][15 - E - 1 + 1] = S(E);
            for (let E = 9; E < 15; E++)
                f.data[8][15 - E - 1] = S(E);
            f.data[h - 8][8] = !d
        }
        if (c >= 7) {
            let p = Ve.versionBits(c);
            for (let S = 0; S < 18; S += 1) {
                let E = !d && (p >> S & 1) == 1
                  , N = Math.floor(S / 3)
                  , I = S % 3 + h - 8 - 3;
                f.data[N][I] = E,
                f.data[I][N] = E
            }
        }
        return f
    }(e, t, r, i)
      , s = 0
      , a = 8 * n.length;
    if (function(c, l, u) {
        let d = c.height
          , h = tc[l]
          , f = -1
          , g = d - 1;
        for (let m = d - 1; m > 0; m -= 2) {
            for (m == 6 && (m = 5); ; g += f) {
                for (let v = 0; v < 2; v += 1) {
                    let p = m - v;
                    c.data[g][p] === void 0 && u(p, g, h(p, g))
                }
                if (g + f < 0 || g + f >= d)
                    break
            }
            f = -f
        }
    }(o, r, (c, l, u) => {
        let d = !1;
        s < a && (d = (n[s >>> 3] >> (7 - s & 7) & 1) != 0,
        s++),
        o.data[l][c] = d !== u
    }
    ),
    s !== a)
        throw new Error("QR: bytes left after draw");
    return o
}
function eg(e) {
    let t = e.inverse()
      , n = f => {
        let g = 0;
        for (let m, v = 0, p = 1; v < f.length; v++)
            m === f[v] && (p++,
            v !== f.length - 1) || (p >= 5 && (g += p - 5 + 3),
            m = f[v],
            p = 1);
        return g
    }
      , r = 0;
    e.data.forEach(f => r += n(f)),
    t.data.forEach(f => r += n(f));
    let i = 0
      , o = e.data
      , s = e.width - 1
      , a = e.height - 1;
    for (let f = 0; f < s; f++)
        for (let g = 0; g < a; g++) {
            let m = f + 1
              , v = g + 1;
            o[f][g] === o[m][g] && o[m][g] === o[f][v] && o[m][g] === o[m][v] && (i += 3)
        }
    let c = f => {
        let g = [!0, !1, !0, !0, !0, !1, !0]
          , m = [!1, !1, !1, !1]
          , v = [...g, ...m]
          , p = [...m, ...g]
          , S = 0;
        for (let E = 0; E < f.length; E++)
            $d(f, v, E) && (S += 40),
            $d(f, p, E) && (S += 40);
        return S
    }
      , l = 0;
    for (let f of e.data)
        l += c(f);
    for (let f of t.data)
        l += c(f);
    let u = 0;
    e.rectRead(0, 1 / 0, (f, g) => u += g ? 1 : 0);
    let d = u / (e.height * e.width) * 100
      , h = 10 * Math.floor(Math.abs(d - 50) / 5);
    return r + i + l + h
}
function T0(e, t="raw", n={}) {
    let r = n.ecc !== void 0 ? n.ecc : "medium";
    (function(u) {
        if (!Kd.includes(u))
            throw new Error(`Invalid error correction mode=${u}. Expected: ${Kd}`)
    }
    )(r);
    let i = n.encoding !== void 0 ? n.encoding : function(u) {
        let d = "numeric";
        for (let h of u)
            if (!Ve.alphabet.numeric.has(h) && (d = "alphanumeric",
            !Ve.alphabet.alphanumerc.has(h)))
                return "byte";
        return d
    }(e);
    (function(u) {
        if (!Ud.includes(u))
            throw new Error(`Encoding: invalid mode=${u}. Expected: ${Ud}`);
        if (u === "kanji" || u === "eci")
            throw new Error(`Encoding: ${u} is not supported (yet?).`)
    }
    )(i),
    n.mask !== void 0 && function(u) {
        if (![0, 1, 2, 3, 4, 5, 6, 7].includes(u) || !tc[u])
            throw new Error(`Invalid mask=${u}. Expected number [0..7]`)
    }(n.mask);
    let o, s = n.version, a = new Error("Unknown error");
    if (s !== void 0)
        (function(u) {
            if (!Number.isSafeInteger(u) || u < 1 || u > 40)
                throw new Error(`Invalid version=${u}. Expected number [1..40]`)
        }
        )(s),
        o = Hd(s, r, e, i);
    else
        for (let u = 1; u <= 40; u++)
            try {
                o = Hd(u, r, e, i),
                s = u;
                break
            } catch (d) {
                a = d
            }
    if (!s || !o)
        throw a;
    let c = function(u, d, h, f) {
        if (f === void 0) {
            let g = function() {
                let m, v = 1 / 0;
                return {
                    add(p, S) {
                        p >= v || (m = S,
                        v = p)
                    },
                    get: () => m,
                    score: () => v
                }
            }();
            for (let m = 0; m < tc.length; m++)
                g.add(eg(Fd(u, d, h, m, !0)), m);
            f = g.get()
        }
        if (f === void 0)
            throw new Error("Cannot find mask");
        return Fd(u, d, h, f)
    }(s, r, o, n.mask);
    c.assertDrawn();
    let l = n.border === void 0 ? 2 : n.border;
    if (!Number.isSafeInteger(l))
        throw new Error("Wrong border type=" + typeof l);
    if (c = c.border(l, !1),
    n.scale !== void 0 && (c = c.scale(n.scale)),
    t === "raw")
        return c.data;
    if (t === "ascii")
        return c.toASCII();
    if (t === "svg")
        return c.toSVG();
    if (t === "gif")
        return c.toGIF();
    if (t === "term")
        return c.toTerm();
    throw new Error(`Unknown output: ${t}`)
}
var ua = {
    DESKTOP: "Desktop",
    MOBILE: "Mobile",
    META_MASK_MOBILE_APP: "MetaMask mobile app",
    SCAN_TO_CONNECT: "Scan to connect and sign with",
    CONNECT_WITH_EXTENSION: "Connect With MetaMask Extension",
    INSTALL_MODAL: {
        TRUSTED_BY_USERS: "Trusted by over 30 million users to buy, store, send and swap crypto securely",
        LEADING_CRYPTO_WALLET: "The leading crypto wallet & gateway to blockchain apps built on Ethereum Mainnet, Polygon, Optimism, and many other networks",
        CONTROL_DIGITAL_INTERACTIONS: "Puts you in control of your digital interactions by making power of cryptography more accessible",
        INSTALL_META_MASK_EXTENSION: "Install MetaMask Extension"
    },
    PENDING_MODAL: {
        OPEN_META_MASK_SELECT_CODE: "Please open the MetaMask wallet app and select the code on the screen OR disconnect",
        OPEN_META_MASK_CONTINUE: "Open the MetaMask app to continue with your session.",
        NUMBER_AFTER_OPEN_NOTICE: "If a number doesn't appear after opening MetaMask, please click disconnect and re-scan the QRCode.",
        DISCONNECT: "Disconnect"
    },
    SELECT_MODAL: {
        CRYPTO_TAKE_CONTROL_TEXT: "Take control of your crypto and explore the blockchain with the wallet trusted by over 30 million people worldwide"
    },
    META_MASK_MODAL: {
        ADDRESS_COPIED: "Address copied to clipboard!",
        DISCONNECT: "Disconnect",
        ACTIVE_NETWORK: "Active Network"
    }
}, gi = class {
    constructor(t) {
        var n;
        this.translations = ua,
        this.supportedLocales = ["es", "fr", "he", "it", "pt", "tr"],
        this.baseUrl = (n = t?.baseUrl) !== null && n !== void 0 ? n : "https://raw.githubusercontent.com/MetaMask/metamask-sdk/refs/heads/gh-pages/locales"
    }
    getBrowserLanguage() {
        if ((navigator.languages || [navigator.language]).some(n => n.toLowerCase().startsWith("en")))
            return "en";
        let t = navigator.language.toLowerCase().split("-")[0];
        return this.supportedLocales.includes(t) ? t : "en"
    }
    init(t) {
        return we(this, null, function*() {
            let n = this.getBrowserLanguage() || t.fallbackLng;
            yield this.loadTranslations(n)
        })
    }
    loadTranslations(t) {
        return we(this, null, function*() {
            let n = t.split("-")[0];
            if (n !== "en" && this.supportedLocales.includes(n))
                try {
                    let r = `${this.baseUrl}/${n}.json`
                      , i = yield fetch(r);
                    if (!i.ok)
                        throw new Error(`HTTP error! status: ${i.status}`);
                    this.translations = yield i.json()
                } catch (r) {
                    console.warn(`\u274C Failed to load ${n} translations, falling back to English:`, r),
                    this.translations = ua
                }
            else
                this.translations = ua
        })
    }
    t(t) {
        return this.getNestedTranslation(t, this.translations) || t
    }
    getNestedTranslation(t, n) {
        let r = t.split(".")
          , i = n;
        for (let o of r) {
            if (typeof i != "object")
                return "";
            i = i[o]
        }
        return typeof i == "string" ? i : ""
    }
}
, ti;
(function(e) {
    e.SDK_MODAL_VIEWED = "sdk_modal_viewed",
    e.SDK_MODAL_BUTTON_CLICKED = "sdk_modal_button_clicked",
    e.SDK_MODAL_TOGGLE_CHANGED = "sdk_modal_toggle_changed"
}
)(ti || (ti = {}));
var R0 = class {
    constructor(e) {
        Tc(this, e),
        this.close = xn(this, "close", 7),
        this.startDesktopOnboarding = xn(this, "startDesktopOnboarding", 7),
        this.trackAnalytics = xn(this, "trackAnalytics", 7),
        this.link = void 0,
        this.sdkVersion = void 0,
        this.preferDesktop = void 0,
        this.tab = 1,
        this.isDefaultTab = !0,
        this.translationsLoaded = !1,
        this.onClose = this.onClose.bind(this),
        this.onStartDesktopOnboardingHandler = this.onStartDesktopOnboardingHandler.bind(this),
        this.setTab = this.setTab.bind(this),
        this.render = this.render.bind(this),
        this.setTab(this.preferDesktop ? 1 : 2),
        this.i18nInstance = new gi
    }
    componentDidLoad() {
        this.trackAnalytics.emit({
            event: ti.SDK_MODAL_VIEWED,
            params: {
                extensionInstalled: !1,
                tab: this.tab === 1 ? "desktop" : "mobile"
            }
        })
    }
    connectedCallback() {
        return we(this, null, function*() {
            yield this.i18nInstance.init({
                fallbackLng: "en"
            }),
            this.translationsLoaded = !0
        })
    }
    updatePreferDesktop(e) {
        e ? this.setTab(1) : this.setTab(2)
    }
    onClose(e=!1) {
        this.close.emit({
            shouldTerminate: e
        })
    }
    onStartDesktopOnboardingHandler() {
        this.trackAnalytics.emit({
            event: ti.SDK_MODAL_BUTTON_CLICKED,
            params: {
                button_type: "install_extension",
                tab: "desktop"
            }
        }),
        this.startDesktopOnboarding.emit()
    }
    setTab(e, t=!1) {
        t && this.trackAnalytics.emit({
            event: ti.SDK_MODAL_TOGGLE_CHANGED,
            params: {
                toggle: this.tab === 1 ? "desktop_to_mobile" : "mobile_to_desktop"
            }
        }),
        this.tab = e,
        this.isDefaultTab = !1
    }
    render() {
        if (!this.translationsLoaded)
            return null;
        let e = r => this.i18nInstance.t(r)
          , t = this.isDefaultTab ? this.preferDesktop ? 1 : 2 : this.tab
          , n = T0(this.link, "svg", {
            ecc: "medium",
            scale: 2
        });
        return B(Bc, {
            className: "install-model"
        }, B("div", {
            class: "backdrop",
            onClick: () => this.onClose(!0)
        }), B("div", {
            class: "modal"
        }, B("div", {
            class: "closeButtonContainer"
        }, B("div", {
            class: "right"
        }, B("span", {
            class: "closeButton",
            onClick: () => this.onClose(!0)
        }, B($c, null)))), B("div", {
            class: "logoContainer"
        }, B(jc, null)), B("div", null, B("div", {
            class: "tabcontainer"
        }, B("div", {
            class: "flexContainer"
        }, B("div", {
            onClick: () => this.setTab(1, !0),
            class: "tab flexItem " + (t === 1 ? "tabactive" : "")
        }, e("DESKTOP")), B("div", {
            onClick: () => this.setTab(2, !0),
            class: "tab flexItem " + (t === 2 ? "tabactive" : "")
        }, e("MOBILE")))), B("div", {
            style: {
                display: t === 1 ? "none" : "block"
            }
        }, B("div", {
            class: "flexContainer"
        }, B("div", {
            class: "flexItem",
            style: {
                textAlign: "center",
                marginTop: "4"
            }
        }, n && B("div", {
            id: "sdk-mm-qrcode",
            class: "center",
            innerHTML: n
        }), B("div", {
            class: "connectMobileText"
        }, e("SCAN_TO_CONNECT"), " ", B("br", null), B("span", {
            class: "blue"
        }, B("b", null, e("META_MASK_MOBILE_APP"))))))), B("div", {
            style: {
                display: t === 2 ? "none" : "block"
            }
        }, B("div", {
            class: "item"
        }, B(la, {
            Icon: W2,
            text: e("INSTALL_MODAL.TRUSTED_BY_USERS")
        })), B("div", {
            class: "item"
        }, B(la, {
            Icon: V2,
            text: e("INSTALL_MODAL.LEADING_CRYPTO_WALLET")
        })), B("div", {
            class: "item"
        }, B(la, {
            Icon: G2,
            text: e("INSTALL_MODAL.CONTROL_DIGITAL_INTERACTIONS")
        })), B("button", {
            class: "button",
            onClick: () => this.onStartDesktopOnboardingHandler()
        }, B(Y2, null), B("span", {
            class: "installExtensionText"
        }, e("INSTALL_MODAL.INSTALL_META_MASK_EXTENSION"))))), B(Dc, {
            version: this.sdkVersion
        })))
    }
    get el() {
        return ss(this)
    }
    static get watchers() {
        return {
            preferDesktop: ["updatePreferDesktop"]
        }
    }
}
;
R0.style = `.flexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.flexItem {
    flex: 1;
    justify-content: center;
    align-items: center;
}

.flexItem11 {
    flex: 11;
    justify-content: center;
    align-items: center;
}

.flexItem1 {
    flex: 1;
    justify-content: center;
    align-items: center;
}

.tab {
    padding: 8px;
    cursor: pointer;
    background-color: #F2F4F6;
    font-size: 12px;
    text-align: center;
    color: #24292E;
}

.tabcontainer {
    padding: 4px;
    background-color: #F2F4F6;
    border-radius: 8px;
    margin-bottom: 30px;
    margin-top: 30px;
}

.tabactive {
    background-color: white;
    -webkit-transition: background-color 300ms linear;
    -ms-transition: background-color 300ms linear;
    transition: background-color 300ms linear;
    border-radius: 8px;
}

.item {
    font-size: 12px;
    margin-bottom: 16px;
    border-radius: 8px;
    padding: 10px;
    border: 2px #F2F4F6 solid;
    color: #24292E;
}

.extensionLabel {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    text-align: cetner;
    color: #24272A;
}

.notice {
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
    color: grey;
}

.button {
    margin-top: 41.5px;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    background: #037DD6;
    border-radius: 32px;
    color: white;
    border: 0;
    font-size: 14px;
    cursor: pointer;
}

.backdrop {
    visibility: visible;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 99998;
    background: rgba(0, 0, 0, 0.87);
    opacity: 0.3;
}

.modal {
    visibility: visible;
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
    background: white;
    padding: 20px;
    border-radius: 8px;
    top: 50%;
    max-width: 100%;
    width: 460px;
    min-width: 300px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
    -webkit-font-smoothing: antialiased;
}

.closeButton {
    color: #BBC0C5;
    cursor: pointer;
}

.logoContainer {
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.connectMobileText {
    font-size: 14px;
    color: black;
    margin-top: 28px;
    margin-bottom: 28px;
    line-height: 2;
}

.blue {
    color: #037DD6;
    font-weight: 700;
}

.installExtensionText {
    margin-left: 10px;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.right {
    display: flex;
    align-items: center;
    justify-content: right;
}

#sdk-mm-qrcode {
    svg {
        width: 50%;
    }
}`;
var O0 = class {
    constructor(e) {
        Tc(this, e),
        this.close = xn(this, "close", 7),
        this.disconnect = xn(this, "disconnect", 7),
        this.updateOTPValue = xn(this, "updateOTPValue", 7),
        this.displayOTP = void 0,
        this.sdkVersion = void 0,
        this.otpCode = void 0,
        this.translationsLoaded = !1,
        this.i18nInstance = new gi
    }
    connectedCallback() {
        return we(this, null, function*() {
            yield this.i18nInstance.init({
                fallbackLng: "en"
            }),
            this.translationsLoaded = !0
        })
    }
    onClose() {
        this.close.emit()
    }
    onDisconnect() {
        this.disconnect.emit()
    }
    onUpdateOTPValueHandler(e) {
        this.updateOTPValue.emit({
            otpValue: e
        })
    }
    disconnectedCallback() {
        this.onClose()
    }
    render() {
        var e;
        if (!this.translationsLoaded)
            return null;
        let t = (e = this.displayOTP) === null || e === void 0 || e
          , n = this.sdkVersion
          , r = i => this.i18nInstance.t(i);
        return B(Bc, {
            className: "pending-modal"
        }, B("div", {
            class: "backdrop",
            onClick: () => this.onClose()
        }), B("div", {
            class: "modal"
        }, B("div", {
            class: "closeButtonContainer"
        }, B("div", {
            class: "right"
        }, B("span", {
            class: "closeButton",
            onClick: () => this.onClose()
        }, B($c, null)))), B("div", {
            class: "logoContainer"
        }, B(jc, null)), B("div", null, B("div", {
            class: "flexContainer",
            style: {
                flexDirection: "column",
                color: "black"
            }
        }, B("div", {
            class: "flexItem",
            style: {
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px",
                fontSize: "16px"
            }
        }, r(t ? "PENDING_MODAL.OPEN_META_MASK_SELECT_CODE" : "PENDING_MODAL.OPEN_META_MASK_CONTINUE")), B("div", {
            id: "sdk-mm-otp-value",
            style: {
                padding: "10px",
                fontSize: "32px",
                display: this.otpCode ? "block" : "none"
            }
        }, this.otpCode), t && B("div", {
            class: "notice"
        }, "* ", r("PENDING_MODAL.NUMBER_AFTER_OPEN_NOTICE"))), B("div", {
            style: {
                marginTop: "20px"
            }
        }, B("button", {
            class: "button blue",
            style: {
                marginTop: "5px",
                color: "#0376C9",
                borderColor: "#0376C9",
                borderWidth: "1px",
                borderStyle: "solid",
                backgroundColor: "white"
            },
            onClick: () => this.onDisconnect()
        }, r("PENDING_MODAL.DISCONNECT")))), B(Dc, {
            version: n
        })))
    }
    get el() {
        return ss(this)
    }
}
;
O0.style = `.flexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.flexItem {
    flex: 1;
    justify-content: center;
    align-items: center;
}

.flexItem11 {
    flex: 11;
    justify-content: center;
    align-items: center;
}

.flexItem1 {
    flex: 1;
    justify-content: center;
    align-items: center;
}

.tab {
    padding: 8px;
    cursor: pointer;
    background-color: #F2F4F6;
    font-size: 12px;
    text-align: center;
    color: #24292E;
}

.tabcontainer {
    padding: 4px;
    background-color: #F2F4F6;
    border-radius: 8px;
    margin-bottom: 30px;
    margin-top: 30px;
}

.tabactive {
    background-color: white;
    -webkit-transition: background-color 300ms linear;
    -ms-transition: background-color 300ms linear;
    transition: background-color 300ms linear;
    border-radius: 8px;
}

.item {
    font-size: 12px;
    margin-bottom: 16px;
    border-radius: 8px;
    padding: 10px;
    border: 2px #F2F4F6 solid;
    color: #24292E;
}

.extensionLabel {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    text-align: cetner;
    color: #24272A;
}

.notice {
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
    color: grey;
}

.button {
    margin-top: 41.5px;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    background: #037DD6;
    border-radius: 32px;
    color: white;
    border: 0;
    font-size: 14px;
    cursor: pointer;
}

.backdrop {
    visibility: visible;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 99998;
    background: rgba(0, 0, 0, 0.87);
    opacity: 0.3;
}

.modal {
    visibility: visible;
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
    background: white;
    padding: 20px;
    border-radius: 8px;
    top: 50%;
    max-width: 100%;
    width: 460px;
    min-width: 300px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
    -webkit-font-smoothing: antialiased;
}

.closeButton {
    color: #BBC0C5;
    cursor: pointer;
}

.logoContainer {
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.connectMobileText {
    font-size: 14px;
    color: black;
    margin-top: 28px;
    margin-bottom: 28px;
    line-height: 2;
}

.blue {
    color: #037DD6;
    font-weight: 700;
}

.installExtensionText {
    margin-left: 10px;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.right {
    display: flex;
    align-items: center;
    justify-content: right;
}

#sdk-mm-qrcode {
    svg {
        width: 50%;
    }
}`;
var tg = () => B("svg", {
    width: "21",
    height: "15",
    viewBox: "0 0 21 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, B("path", {
    d: "M14.1364 14.9851C13.5909 14.9851 13.2273 14.5851 13.2273 13.9851C13.2273 13.3851 13.5909 12.9851 14.1364 12.9851C16.6818 12.9851 18.6818 10.7851 18.6818 7.98508C18.6818 5.18508 16.6818 2.98508 14.1364 2.98508C11.5909 2.98508 9.59091 5.18508 9.59091 7.98508C9.59091 8.58508 9.22727 8.98508 8.68182 8.98508C8.13636 8.98508 7.77273 8.58508 7.77273 7.98508C7.77273 4.08508 10.5909 0.985077 14.1364 0.985077C17.6818 0.985077 20.5 4.08508 20.5 7.98508C20.5 11.8851 17.6818 14.9851 14.1364 14.9851ZM6.68182 14.7851C3.22727 14.7851 0.5 11.6851 0.5 7.98508C0.5 4.28508 3.22727 1.18508 6.68182 1.18508C7.22727 1.18508 7.59091 1.58508 7.59091 2.18508C7.59091 2.78508 7.22727 3.18508 6.68182 3.18508C4.22727 3.18508 2.31818 5.38508 2.31818 7.98508C2.31818 10.5851 4.22727 12.7851 6.68182 12.7851C9.13636 12.7851 11.0455 10.6851 11.0455 7.98508C11.0455 7.38508 11.4091 6.98508 11.9545 6.98508C12.5 6.98508 12.8636 7.38508 12.8636 7.98508C12.7727 11.6851 10.0455 14.7851 6.68182 14.7851Z",
    fill: "white"
}))
  , ng = () => B("svg", {
    width: "400",
    height: "300",
    viewBox: "0 0 467 300",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, B("path", {
    d: "M312.387 280.629C312.549 280.583 312.247 280.735 312.387 280.629L339.678 260.425C340.088 260.118 340.132 259.156 340.07 258.647C340.008 258.138 339.573 258.257 339.106 258.084L311.712 247.455C311.292 247.301 311.308 247.402 310.939 247.673C310.569 247.944 310.356 248.21 310.356 248.672L310.459 279.504C310.461 280.025 311.163 280.619 311.614 280.847C311.913 280.996 312.072 280.718 312.387 280.629ZM336.204 259.736L312.979 276.292L313.439 251.139L336.204 259.736Z",
    fill: "url(#paint0_linear_1356_14057)"
}), B("path", {
    d: "M324.639 260.342C324.358 259.547 323.485 258.91 322.707 259.215C319.6 260.432 318.17 262.313 317.287 264.066C316.482 265.665 316.197 267.482 314.188 268.269C312.178 269.055 310.763 268.663 309.162 268.007C307.406 267.287 305.504 266.182 302.397 267.399C299.289 268.616 297.859 270.497 296.976 272.25C296.171 273.849 295.697 274.886 293.685 275.673C291.675 276.459 290.261 276.067 288.659 275.411C286.903 274.691 284.999 273.587 281.894 274.803C278.789 276.019 277.549 278.681 276.666 280.434C275.861 282.034 275.386 283.07 273.374 283.857C272.596 284.161 271.931 285.055 272.211 285.849C272.492 286.644 273.365 287.281 274.143 286.977C277.25 285.76 278.68 283.879 279.563 282.125C280.368 280.526 280.65 278.71 282.662 277.923C284.672 277.136 286.087 277.528 287.688 278.184C289.444 278.904 291.348 280.009 294.453 278.793C297.561 277.576 298.991 275.695 299.874 273.941C300.679 272.342 301.153 271.306 303.165 270.519C305.175 269.732 306.589 270.124 308.191 270.78C309.947 271.5 311.849 272.605 314.956 271.388C318.063 270.172 319.301 267.511 320.184 265.757C320.989 264.158 321.466 263.121 323.476 262.335C324.254 262.032 324.919 261.137 324.639 260.342Z",
    fill: "url(#paint1_linear_1356_14057)"
}), B("path", {
    d: "M389.034 111.124C388.968 112.406 387.342 113.113 386.324 113.549C384.297 114.419 382.089 114.493 379.942 114.5C376.607 114.509 373.215 114.163 369.89 113.976C366.712 113.798 363.156 113.311 360.03 114.232C357.705 114.919 355.667 116.762 353.452 117.739C351.129 118.765 348.957 119.198 346.489 119.687C335.569 121.85 323.587 120.825 312.656 119.977C311.92 119.92 312.539 118.997 313.237 118.981C313.207 118.815 313.001 118.394 313.045 118.201C313.086 118.029 312.781 117.586 312.853 117.421C312.67 117.198 313.316 117.427 313.626 117.204C315.912 115.557 318.721 114.79 321.363 115.041C324.677 115.355 327.293 116.04 330.641 115.781C334.392 115.491 338.125 114.787 341.857 114.312C345.142 113.892 349.09 113.941 352.106 112.28C352.916 111.834 353.137 111.262 353.269 110.287C353.331 109.828 353.672 108.969 353.658 108.511C353.629 107.529 354.191 107.886 355.013 107.298C356.857 105.981 358.274 105.516 360.428 105.784C362.841 106.083 365.264 107.273 367.578 107.953C370.761 108.888 374.328 108.646 377.631 108.477C380.517 108.329 383.141 107.901 385.944 108.653C387.013 108.941 389.104 109.745 389.034 111.124Z",
    fill: "url(#paint2_linear_1356_14057)"
}), B("path", {
    d: "M278.118 85.4414C280.313 83.8186 283.302 83.9 285.853 83.2728C290.501 82.127 295.644 78.4476 300.549 79.1524C301.299 79.2595 300.904 81.0355 300.159 80.9295C300.131 80.9256 300.187 80.9333 300.159 80.9295C300.089 81.0185 299.516 81.1051 299.385 81.1463C294.999 82.515 292.895 87.5083 289.126 89.8598C287.799 90.688 286.771 90.8351 285.258 90.9441C283.515 91.0691 280.964 90.5775 279.269 90.1219C277.15 89.5532 275.965 87.034 278.118 85.4414Z",
    fill: "url(#paint3_linear_1356_14057)"
}), B("path", {
    d: "M122.567 166.093C113.597 172.832 104.535 179.836 99.517 190.092C98.5342 192.099 97.519 195.019 97.9533 197.204C98.9699 202.316 105.76 203.049 110.691 201.96C113.468 201.347 116.325 199.231 115.921 196.319C115.576 193.81 113.158 192.986 112.072 190.73C110.779 188.04 112.35 184.97 114.218 182.62C128.134 165.099 150.074 157.394 171.093 151.607C175.385 150.425 180.897 147.69 180.581 143.099C180.372 140.072 177.118 137.683 174.221 137.383C171.324 137.082 168.481 138.773 165.715 139.776C158.416 142.419 151.17 143.799 143.489 143.526C136.865 143.29 130.976 143.316 129.562 150.781C128.138 158.276 129.53 160.863 122.567 166.093Z",
    fill: "url(#paint4_linear_1356_14057)"
}), B("path", {
    d: "M79.1056 153.531C60.3932 164.378 43.7478 178.354 32.8214 197.415C30.3313 201.76 27.9216 206.554 27.1821 211.512C26.4448 216.47 27.7591 222.525 30.8133 226.337C34.908 231.446 41.6938 232.915 48.1811 233.125C50.7248 233.208 53.0035 233.066 55.3316 231.947C57.6602 230.83 59.7548 228.359 59.5978 225.742C59.3303 221.315 54.5491 219.665 50.9271 217.34C42.6566 212.037 40.4958 199.493 44.2381 190.032C47.9803 180.57 55.8228 173.173 63.2316 166.338C67.229 162.651 71.5194 158.372 76.777 157.522C79.9167 157.015 83.4706 157.589 86.6295 157.252C93.9004 156.479 99.64 151.404 105.588 146.912C115.048 139.765 126.045 134.283 137.501 132.093C141.913 131.248 146.293 130.493 149.682 127.831C151.37 126.507 150.803 123.567 148.726 123.93C138.542 125.713 128.652 131.135 119.142 134.758C105.627 139.914 91.7133 146.223 79.1056 153.531Z",
    fill: "url(#paint5_linear_1356_14057)"
}), B("path", {
    d: "M96.3677 117.321C96.0315 116.64 95.2914 116.612 94.6293 116.975C91.9858 118.417 91.5452 120.509 90.9466 122.178C90.4004 123.702 89.3647 124.67 87.6542 125.604C85.9437 126.538 85.0983 126.316 83.5956 125.91C81.9481 125.465 79.8603 125.424 77.2168 126.866C74.5734 128.309 74.1348 130.401 73.5341 132.07C72.9879 133.593 71.9522 134.562 70.2417 135.496C68.5313 136.43 67.6859 136.208 66.1832 135.801C64.5357 135.357 62.2569 134.538 59.6128 135.978C56.9694 137.42 56.5308 139.512 55.9301 141.181C55.3839 142.705 54.5398 144.454 52.8293 145.388C52.1667 145.748 52.1006 146.485 52.439 147.165C52.7752 147.845 53.5153 147.874 54.1773 147.511C56.8208 146.069 57.2594 143.977 57.86 142.307C58.4062 140.784 59.4419 139.815 61.1524 138.881C62.8629 137.948 63.7083 138.17 65.211 138.576C66.8585 139.021 68.9458 139.059 71.5898 137.619C74.2333 136.177 74.6718 134.085 75.2725 132.416C75.8187 130.892 76.8544 129.924 78.5649 128.99C80.2754 128.056 81.1207 128.278 82.6235 128.684C84.2709 129.129 86.5503 129.95 89.1938 128.507C91.8373 127.065 92.2779 124.973 92.8765 123.304C93.4227 121.78 94.2663 120.03 95.9773 119.098C96.6378 118.738 96.7039 118.001 96.3677 117.321Z",
    fill: "#FBC49D"
}), B("path", {
    d: "M391.827 164.699C392.04 164.639 392.39 164.573 392.6 164.481C393.87 163.921 395.363 162.429 395.893 161.051C396.421 159.673 396.237 158.321 395.712 156.931C394.629 154.061 391.777 152.62 389.155 153.775C386.531 154.931 384.962 158.455 386.042 161.325C387.038 163.963 389.369 165.392 391.827 164.699ZM394.166 157.367C394.529 158.332 394.52 159.751 394.156 160.706C393.792 161.662 393.1 162.534 392.218 162.921C390.398 163.723 388.338 162.878 387.589 160.889C387.226 159.925 387.234 158.506 387.599 157.55C387.963 156.594 388.654 155.723 389.536 155.336C391.356 154.534 393.416 155.376 394.166 157.367Z",
    fill: "#86E29B"
}), B("path", {
    d: "M62.7198 108.691C64.4912 108.191 66.6152 106.609 67.5596 104.824C68.4273 103.187 68.465 101.455 67.9609 99.7066C67.4547 97.9586 66.0792 96.5141 64.4963 95.6786C62.9135 94.843 61.2077 94.8578 59.4756 95.4255C57.7435 95.9933 56.2768 97.4364 55.409 99.074C53.6185 102.456 55.2032 106.494 58.4723 108.22C60.0142 109.035 61.1315 109.138 62.7198 108.691ZM60.6304 96.7682C61.819 96.4332 63.0232 96.8871 64.1048 97.4571C65.2463 98.0603 66.0495 98.8796 66.4145 100.142C66.7791 101.403 66.4488 103.299 65.8224 104.48C64.5299 106.919 61.2212 107.686 58.8638 106.441C56.5063 105.197 55.8538 101.858 57.1462 99.4185C57.7726 98.2375 58.6059 97.3957 59.8573 96.9862C59.9214 96.9635 60.5631 96.7872 60.6304 96.7682Z",
    fill: "#FFB0EB"
}), B("path", {
    d: "M77.0217 242.979C75.9542 243.28 75.1664 242.151 74.9029 241.074C74.6394 239.996 75 239.378 76.0676 239.077C77.1351 238.776 78.5053 238.907 78.7688 239.984C79.0323 241.061 78.0893 242.678 77.0217 242.979Z",
    fill: "url(#paint6_linear_1356_14057)"
}), B("path", {
    d: "M380.506 184.577C379.439 184.878 378.651 183.749 378.387 182.672C378.124 181.594 378.484 180.976 379.552 180.675C380.619 180.374 381.99 180.505 382.253 181.582C382.517 182.659 381.574 184.276 380.506 184.577Z",
    fill: "url(#paint7_linear_1356_14057)"
}), B("path", {
    d: "M348.82 246.969C347.752 247.27 346.382 247.14 346.119 246.063C345.855 244.985 346.798 243.369 347.866 243.068C348.933 242.767 349.721 243.896 349.985 244.973C350.248 246.05 349.888 246.669 348.82 246.969Z",
    fill: "url(#paint8_linear_1356_14057)"
}), B("path", {
    d: "M140.419 282.412C139.351 282.713 138.754 282.365 138.491 281.288C138.227 280.21 138.397 278.812 139.464 278.511C140.532 278.21 142.093 279.121 142.357 280.198C142.62 281.275 141.486 282.111 140.419 282.412Z",
    fill: "url(#paint9_linear_1356_14057)"
}), B("path", {
    d: "M121.462 101.679C120.395 101.979 119.798 101.631 119.534 100.554C119.271 99.4764 119.44 98.0779 120.508 97.777C121.575 97.4761 123.136 98.3868 123.4 99.4642C123.663 100.542 122.53 101.378 121.462 101.679Z",
    fill: "url(#paint10_linear_1356_14057)"
}), B("path", {
    d: "M370.749 159.005C369.682 159.306 368.311 159.175 368.048 158.098C367.784 157.021 368.727 155.404 369.795 155.103C370.863 154.802 371.65 155.931 371.914 157.008C372.177 158.086 371.817 158.704 370.749 159.005Z",
    fill: "url(#paint11_linear_1356_14057)"
}), B("path", {
    d: "M384.211 245.345C383.143 245.646 381.773 245.515 381.51 244.438C381.246 243.361 382.189 241.744 383.257 241.443C384.324 241.142 385.112 242.271 385.376 243.348C385.639 244.426 385.278 245.044 384.211 245.345Z",
    fill: "url(#paint12_linear_1356_14057)"
}), B("path", {
    d: "M364.771 41.3873C363.063 41.8687 361.337 40.8616 360.915 39.1378C360.493 37.414 361.536 35.6263 363.244 35.1449C364.953 34.6634 366.679 35.6706 367.101 37.3944C367.522 39.1182 366.479 40.9059 364.771 41.3873Z",
    fill: "url(#paint13_linear_1356_14057)"
}), B("path", {
    d: "M404.311 77.905C404.602 77.8231 404.875 77.9236 405.084 77.6871C405.437 77.2908 404.814 76.6385 404.703 76.1265L401.277 58.7418C401.149 58.163 400.687 57.5371 400.123 57.3991C399.558 57.2611 398.969 57.3812 398.576 57.835L385.784 73.1179C385.395 73.564 385.199 74.3453 385.393 74.8964C385.585 75.4481 385.978 76.1646 386.548 76.2391L403.538 78.123C403.744 78.1479 404.114 77.9607 404.311 77.905ZM398.948 62.7348L401.811 74.4394L389.841 72.8085L398.948 62.7348Z",
    fill: "#FFB0EB"
}), B("path", {
    d: "M97.5393 295.311C97.7108 295.263 97.4284 295.461 97.5393 295.311L108.785 280.464C108.975 280.211 108.718 279.972 108.594 279.684C108.47 279.396 108.124 279.917 107.821 279.902L88.5106 278.672C88.2101 278.659 87.895 278.62 87.7374 278.89C87.5798 279.159 87.7755 279.402 87.9283 279.67L96.5753 294.749C96.7102 294.99 97.2696 295.297 97.5393 295.311C97.6283 295.319 97.4556 295.335 97.5393 295.311ZM106.465 281.118L96.9667 292.97L90.6295 280.577L106.465 281.118Z",
    fill: "#86E29B"
}), B("path", {
    d: "M393.699 108.848C389.518 104.446 414.629 114.366 413.945 120.659C413.259 126.952 401.355 129.102 403.894 123.491C406.042 118.747 400.376 115.876 393.699 108.848Z",
    fill: "#FBC49D"
}), B("path", {
    d: "M139.414 115.959C139.434 115.953 139.392 115.965 139.414 115.959C141.963 115.2 143.436 111.976 142.717 109.189C142.37 107.839 141.526 107.199 140.408 106.504C139.289 105.808 138.171 105.449 136.933 105.815C135.698 106.182 134.85 107.033 134.222 108.247C133.595 109.461 133.282 111.234 133.63 112.585C133.978 113.935 134.821 114.574 135.94 115.27C137.04 115.952 138.199 116.301 139.414 115.959ZM137.315 107.375C138.222 107.12 139.005 106.994 139.825 107.502C140.661 108.02 140.912 108.618 141.171 109.625C141.708 111.704 140.935 113.834 139.032 114.398C138.11 114.675 137.356 114.791 136.522 114.272C135.686 113.753 135.436 113.155 135.176 112.149C134.917 111.142 134.718 109.714 135.186 108.81C135.654 107.905 136.394 107.649 137.315 107.375C137.329 107.371 137.299 107.38 137.315 107.375Z",
    fill: "#75C4FD"
}), B("path", {
    d: "M308.981 78.7519C310.052 78.4043 311.158 78.7096 312.265 78.6613C313.655 78.6006 314.936 78.517 316.323 78.3531C319.497 77.9795 322.798 77.4906 325.984 77.3012C329.309 77.1025 332.514 76.8551 335.836 77.0295C338.809 77.1842 342.163 77.3405 345.105 77.7558C352.129 78.7468 359.331 79.0578 366.347 80.1158C372.252 81.008 377.93 82.1319 383.722 83.5644C385.925 84.0054 388.267 85.0754 389.126 85.3792C389.421 85.4833 389.37 85.8347 389.317 86.1595C389.306 86.2271 389.353 86.1146 389.317 86.1595C388.269 87.414 386.564 86.8124 385.259 86.4677C384.406 86.241 381.488 85.9494 381.011 85.9957C380.14 86.0815 379.277 86.014 379.656 87.2114C380.122 88.6824 382.391 89.7375 383.704 90.2419C385.883 91.0803 388.771 91.2561 390.845 92.4015C392.968 92.821 395.425 93.5002 397.022 93.9986C402.83 95.8103 407.806 98.8678 413.033 102.002C415.503 103.482 417.829 104.764 419.973 106.72C421.647 108.248 423.771 109.882 424.595 112.091C425.113 113.482 424.451 115.471 422.848 115.085C420.353 114.488 419.638 111.665 418.227 109.714C415.003 105.251 410.067 102.067 405.118 100.06C402.64 99.0556 399.803 98.729 397.204 98.1176C394.411 97.4613 391.597 97.0442 388.707 97.1736C385.646 97.3097 382.846 97.5534 379.819 98.0078C377.027 98.4264 374.252 98.4441 371.514 97.8441C368.766 97.2421 366.276 96.7553 363.6 95.9021C361.662 95.2848 359.013 94.5583 357.232 93.5247C355.699 92.6339 355.631 91.2381 357.241 90.186C359.87 88.4656 362.778 89.8021 365.546 90.3497C365.561 90.3527 365.532 90.3468 365.546 90.3497C367.858 90.804 369.649 90.098 371.923 89.3884C372.489 89.2128 373.255 89.0482 373.47 88.953C374.383 88.5432 375.895 87.8227 375.407 86.7394C374.868 85.5457 372.659 84.8846 371.55 84.4891C369.74 83.8428 368.053 82.9215 366.147 82.6743C365.654 82.6095 365.109 83.1606 364.6 83.1097C363.36 83.1121 361.769 83.348 360.543 83.418C357.43 83.5916 354.583 83.6228 351.464 83.4719C348.714 83.3377 346.432 82.8542 343.741 82.3102C340.773 81.7101 337.52 81.5879 334.471 81.5839C331.393 81.5811 328.6 81.7214 325.583 82.4181C322.758 83.0702 319.757 83.6198 316.887 84.0326C314.698 84.3481 312.467 84.6054 310.319 84.2137C309.079 83.9871 306.994 83.3394 306.461 81.9635C305.846 80.3659 307.736 79.1556 308.981 78.7519Z",
    fill: "url(#paint14_linear_1356_14057)"
}), B("path", {
    d: "M242.269 242.95C242.295 242.947 242.244 242.955 242.269 242.95C244.934 242.606 247.53 241.858 250.2 241.574C253.133 241.264 256.006 240.56 258.906 239.982C263.26 239.117 268.026 238.52 272.254 237.097C274.429 236.365 276.067 235.298 278.251 234.592C280.361 233.909 283.058 233.12 285.216 232.652C289.317 231.764 293.049 231.66 297.016 230.198C301.109 228.69 305.088 226.673 308.819 224.409C312.645 222.086 316.282 219.769 320.622 218.62C322.381 218.154 323.919 218.219 325.65 218.886C327.016 219.413 327.739 220.337 327.196 221.79C326.557 223.504 324.659 224.7 323.131 225.423C320.854 226.5 319.53 227.184 317.134 227.927C314.619 228.707 311.888 229.24 309.395 230.083C308.226 230.947 307.17 232.522 306.105 233.501C303.996 235.441 301.666 237.03 298.945 237.996C292.934 240.129 286.354 238.602 280.183 239.056C279.661 239.095 279.162 239.442 278.635 239.487C275.592 240.135 272.2 240.63 269.156 241.294C264.546 242.299 260.456 243.409 255.808 244.179C251.971 244.814 243.815 245.854 243.815 245.854L242.074 245.505C240.575 245.281 240.751 243.152 242.269 242.95Z",
    fill: "url(#paint15_linear_1356_14057)"
}), B("path", {
    d: "M432.985 171.626C438.212 165.465 445.109 153.64 442.906 144.649C442.162 137.999 433.671 132.912 424.963 135.518C420.16 136.957 416.435 142.146 419.724 144.498C420.656 145.164 422.187 145.591 423.391 145.969C434.204 149.375 434.925 162.538 425.069 169.683C421.087 172.569 416.347 174.292 411.914 176.719C400.151 183.162 399.887 196.847 387.7 202.712C382.326 205.298 375.761 206.838 370.297 209.275C359.98 213.88 352.555 221.733 342.241 226.341C337.225 228.584 330.266 231.632 323.483 234.12C321.475 234.855 321.999 237.058 324.056 236.46C324.098 236.449 324.017 236.474 324.056 236.46C329.079 234.971 334.437 233.161 339.331 231.33C352.278 226.48 365.28 220.971 377.43 214.775C401.78 202.367 416.881 190.609 432.985 171.626Z",
    fill: "url(#paint16_linear_1356_14057)"
}), B("path", {
    d: "M343.644 241.104C348.002 234.144 357.126 232.455 364.343 231.134C368.176 230.431 372.406 229.878 376.137 228.662C380.691 227.175 384.558 224.095 388.327 221.077C389.452 220.177 391.204 218.466 392.393 217.436C393.185 216.748 393.644 216.026 394.33 215.225C396 213.275 399.599 209.812 401.687 208.16C403.263 206.914 407.779 204.758 408.259 207.986C408.611 210.359 406.379 213.087 404.961 214.747C402.224 217.953 398.998 221.079 395.475 223.243C391.749 225.531 387.701 227.439 383.674 229.051C381.672 229.853 379.519 230.073 377.486 230.785C376.001 231.307 374.486 232.236 373.037 232.866C371.034 233.738 368.99 234.28 367.041 235.38C364.436 236.849 361.782 238.783 359.108 240.105C356.331 241.477 353.823 242.691 350.791 243.27C348.6 243.687 345.501 243.641 343.836 241.884C343.526 241.554 343.389 241.51 343.644 241.104Z",
    fill: "url(#paint17_linear_1356_14057)"
}), B("path", {
    d: "M190.163 273.219C222.905 268.849 232.64 262.943 213.962 259.057C195.285 255.172 187.5 262.08 188.434 266.2C189.366 270.32 180.381 271.326 169.286 272.39C158.193 273.454 157.141 276.354 190.163 273.219Z",
    fill: "url(#paint18_linear_1356_14057)"
}), B("path", {
    d: "M295.952 95.4242L241.395 135.226L251.54 111.77L295.952 95.4242Z",
    fill: "#E17726",
    stroke: "#E17726",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M170.111 95.4242L224.181 135.598L214.522 111.77L170.111 95.4242Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M276.309 187.712L261.793 209.576L292.876 218.014L301.78 188.189L276.309 187.712Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M164.336 188.189L173.186 218.014L204.215 209.576L189.753 187.712L164.336 188.189Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M202.542 150.776L193.908 163.618L224.667 164.998L223.642 132.36L202.542 150.776Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M263.52 150.775L242.097 131.989L241.395 164.998L272.154 163.618L263.52 150.775Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M204.215 209.576L222.832 200.714L206.805 188.402L204.215 209.576Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M243.23 200.714L261.793 209.576L259.257 188.402L243.23 200.714Z",
    fill: "#E27625",
    stroke: "#E27625",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M261.793 209.576L243.23 200.714L244.741 212.601L244.579 217.643L261.793 209.576Z",
    fill: "#D5BFB2",
    stroke: "#D5BFB2",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M204.215 209.576L221.483 217.643L221.375 212.601L222.832 200.714L204.215 209.576Z",
    fill: "#D5BFB2",
    stroke: "#D5BFB2",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M221.807 180.547L206.373 176.09L217.274 171.154L221.807 180.547Z",
    fill: "#233447",
    stroke: "#233447",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M244.255 180.547L248.788 171.154L259.742 176.09L244.255 180.547Z",
    fill: "#233447",
    stroke: "#233447",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M204.215 209.576L206.913 187.712L189.753 188.189L204.215 209.576Z",
    fill: "#CC6228",
    stroke: "#CC6228",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M259.149 187.712L261.793 209.576L276.309 188.189L259.149 187.712Z",
    fill: "#CC6228",
    stroke: "#CC6228",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M272.154 163.618L241.395 164.998L244.255 180.547L248.788 171.154L259.742 176.09L272.154 163.618Z",
    fill: "#CC6228",
    stroke: "#CC6228",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M206.373 176.09L217.274 171.154L221.807 180.547L224.667 164.998L193.908 163.618L206.373 176.09Z",
    fill: "#CC6228",
    stroke: "#CC6228",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M193.908 163.618L206.805 188.402L206.373 176.09L193.908 163.618Z",
    fill: "#E27525",
    stroke: "#E27525",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M259.743 176.09L259.257 188.402L272.154 163.618L259.743 176.09Z",
    fill: "#E27525",
    stroke: "#E27525",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M224.667 164.998L221.807 180.548L225.422 198.909L226.232 174.71L224.667 164.998Z",
    fill: "#E27525",
    stroke: "#E27525",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M241.395 164.998L239.884 174.657L240.64 198.909L244.255 180.548L241.395 164.998Z",
    fill: "#E27525",
    stroke: "#E27525",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M244.255 180.547L240.64 198.909L243.23 200.714L259.257 188.402L259.743 176.09L244.255 180.547Z",
    fill: "#F5841F",
    stroke: "#F5841F",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M206.373 176.09L206.805 188.402L222.832 200.714L225.422 198.909L221.807 180.547L206.373 176.09Z",
    fill: "#F5841F",
    stroke: "#F5841F",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M244.579 217.643L244.741 212.601L243.338 211.434H222.724L221.375 212.601L221.483 217.643L204.215 209.576L210.259 214.459L222.508 222.791H243.5L255.803 214.459L261.793 209.576L244.579 217.643Z",
    fill: "#C0AC9D",
    stroke: "#C0AC9D",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M243.23 200.714L240.64 198.909H225.422L222.832 200.714L221.375 212.601L222.724 211.434H243.338L244.741 212.601L243.23 200.714Z",
    fill: "#161616",
    stroke: "#161616",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M298.272 137.827L302.859 115.856L295.952 95.4242L243.23 133.899L263.52 150.775L292.174 159.001L298.488 151.731L295.736 149.767L300.107 145.84L296.761 143.293L301.132 140.002L298.272 137.827Z",
    fill: "#763E1A",
    stroke: "#763E1A",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M163.203 115.856L167.844 137.827L164.876 140.002L169.301 143.293L165.955 145.84L170.326 149.767L167.574 151.731L173.888 159.001L202.542 150.775L222.832 133.899L170.11 95.4242L163.203 115.856Z",
    fill: "#763E1A",
    stroke: "#763E1A",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M292.175 159.001L263.52 150.775L272.154 163.618L259.257 188.402L276.309 188.189H301.78L292.175 159.001Z",
    fill: "#F5841F",
    stroke: "#F5841F",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M202.542 150.775L173.888 159.001L164.336 188.189H189.753L206.805 188.402L193.908 163.618L202.542 150.775Z",
    fill: "#F5841F",
    stroke: "#F5841F",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("path", {
    d: "M241.395 164.998L243.23 133.9L251.54 111.77H214.522L222.832 133.9L224.667 164.998L225.368 174.763L225.422 198.909H240.64L240.694 174.763L241.395 164.998Z",
    fill: "#F5841F",
    stroke: "#F5841F",
    "stroke-width": "0.94513",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), B("defs", null, B("linearGradient", {
    id: "paint0_linear_1356_14057",
    x1: "335.991",
    y1: "250.487",
    x2: "303.873",
    y2: "266.801",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#FFE466"
}), B("stop", {
    offset: "1",
    "stop-color": "#FFAFEA"
})), B("linearGradient", {
    id: "paint1_linear_1356_14057",
    x1: "276.993",
    y1: "303.722",
    x2: "205.254",
    y2: "401.574",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "0.0929",
    "stop-color": "#81C2F6"
}), B("stop", {
    offset: "1",
    "stop-color": "#F0B8BD"
})), B("linearGradient", {
    id: "paint2_linear_1356_14057",
    x1: "271.074",
    y1: "119.924",
    x2: "553.077",
    y2: "104.53",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#FFE466"
}), B("stop", {
    offset: "1",
    "stop-color": "#FFAFEA"
})), B("linearGradient", {
    id: "paint3_linear_1356_14057",
    x1: "264.209",
    y1: "91.0943",
    x2: "357.834",
    y2: "72.8792",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#FFE466"
}), B("stop", {
    offset: "1",
    "stop-color": "#FFAFEA"
})), B("linearGradient", {
    id: "paint4_linear_1356_14057",
    x1: "212.46",
    y1: "121.997",
    x2: "92.6119",
    y2: "183.406",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#FFE466"
}), B("stop", {
    offset: "1",
    "stop-color": "#FFAFEA"
})), B("linearGradient", {
    id: "paint5_linear_1356_14057",
    x1: "23.0498",
    y1: "204.411",
    x2: "161.86",
    y2: "163.003",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "0.0929",
    "stop-color": "#81C2F6"
}), B("stop", {
    offset: "1",
    "stop-color": "#F0B8BD"
})), B("linearGradient", {
    id: "paint6_linear_1356_14057",
    x1: "78.8647",
    y1: "240.375",
    x2: "74.9655",
    y2: "241.328",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "1",
    "stop-color": "#75C3FC"
})), B("linearGradient", {
    id: "paint7_linear_1356_14057",
    x1: "382.349",
    y1: "181.971",
    x2: "378.45",
    y2: "182.925",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "1",
    "stop-color": "#75C3FC"
})), B("linearGradient", {
    id: "paint8_linear_1356_14057",
    x1: "349.889",
    y1: "244.583",
    x2: "345.99",
    y2: "245.537",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "1",
    "stop-color": "#75C3FC"
})), B("linearGradient", {
    id: "paint9_linear_1356_14057",
    x1: "142.262",
    y1: "279.808",
    x2: "138.362",
    y2: "280.762",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "1",
    "stop-color": "#75C3FC"
})), B("linearGradient", {
    id: "paint10_linear_1356_14057",
    x1: "123.305",
    y1: "99.0746",
    x2: "119.406",
    y2: "100.028",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "1",
    "stop-color": "#75C3FC"
})), B("linearGradient", {
    id: "paint11_linear_1356_14057",
    x1: "371.818",
    y1: "156.617",
    x2: "367.919",
    y2: "157.571",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "1",
    "stop-color": "#75C3FC"
})), B("linearGradient", {
    id: "paint12_linear_1356_14057",
    x1: "385.281",
    y1: "242.958",
    x2: "381.382",
    y2: "243.911",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "1",
    "stop-color": "#75C3FC"
})), B("linearGradient", {
    id: "paint13_linear_1356_14057",
    x1: "367.125",
    y1: "37.5052",
    x2: "360.843",
    y2: "38.8076",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "1",
    "stop-color": "#75C3FC"
})), B("linearGradient", {
    id: "paint14_linear_1356_14057",
    x1: "300.182",
    y1: "91.321",
    x2: "479.464",
    y2: "104.041",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#FFE466"
}), B("stop", {
    offset: "1",
    "stop-color": "#FFAFEA"
})), B("linearGradient", {
    id: "paint15_linear_1356_14057",
    x1: "363.434",
    y1: "201.232",
    x2: "102.977",
    y2: "302.269",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#FFE466"
}), B("stop", {
    offset: "1",
    "stop-color": "#FFAFEA"
})), B("linearGradient", {
    id: "paint16_linear_1356_14057",
    x1: "447.962",
    y1: "165.159",
    x2: "313.049",
    y2: "197.95",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "0.0929",
    "stop-color": "#81C2F6"
}), B("stop", {
    offset: "1",
    "stop-color": "#F0B8BD"
})), B("linearGradient", {
    id: "paint17_linear_1356_14057",
    x1: "410.211",
    y1: "215.859",
    x2: "341.378",
    y2: "232.788",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#75C3FC"
}), B("stop", {
    offset: "0.0929",
    "stop-color": "#81C2F6"
}), B("stop", {
    offset: "1",
    "stop-color": "#F0B8BD"
})), B("linearGradient", {
    id: "paint18_linear_1356_14057",
    x1: "222.282",
    y1: "258.986",
    x2: "162.257",
    y2: "273.774",
    gradientUnits: "userSpaceOnUse"
}, B("stop", {
    "stop-color": "#FFE466"
}), B("stop", {
    offset: "1",
    "stop-color": "#FFAFEA"
}))))
  , L0 = class {
    constructor(e) {
        Tc(this, e),
        this.close = xn(this, "close", 7),
        this.connectWithExtension = xn(this, "connectWithExtension", 7),
        this.link = void 0,
        this.sdkVersion = void 0,
        this.preferDesktop = void 0,
        this.tab = 1,
        this.isDefaultTab = !0,
        this.translationsLoaded = !1,
        this.i18nInstance = new gi,
        this.setTab(this.preferDesktop ? 1 : 2)
    }
    connectedCallback() {
        return we(this, null, function*() {
            yield this.i18nInstance.init({
                fallbackLng: "en"
            }),
            this.translationsLoaded = !0
        })
    }
    onClose(e=!1) {
        this.close.emit({
            shouldTerminate: e
        })
    }
    connectWithExtensionHandler() {
        this.connectWithExtension.emit()
    }
    setTab(e) {
        this.tab = e,
        this.isDefaultTab = !1
    }
    disconnectedCallback() {
        this.onClose()
    }
    updatePreferDesktop(e) {
        e ? this.setTab(1) : this.setTab(2)
    }
    render() {
        if (!this.translationsLoaded)
            return null;
        let e = i => this.i18nInstance.t(i)
          , t = this.sdkVersion
          , n = this.isDefaultTab ? this.preferDesktop ? 1 : 2 : this.tab
          , r = T0(this.link, "svg", {
            ecc: "medium",
            scale: 2
        });
        return B(Bc, {
            className: "select-modal"
        }, B("div", {
            class: "backdrop",
            onClick: () => this.onClose(!0)
        }), B("div", {
            class: "modal"
        }, B("div", {
            class: "closeButtonContainer"
        }, B("div", {
            class: "right"
        }, B("span", {
            class: "closeButton",
            onClick: () => this.onClose(!0)
        }, B($c, null)))), B("div", {
            class: "logoContainer"
        }, B(jc, null)), B("div", null, B("div", {
            class: "tabcontainer"
        }, B("div", {
            class: "flexContainer"
        }, B("div", {
            onClick: () => this.setTab(1),
            class: "tab flexItem " + (n === 1 ? "tabactive" : "")
        }, e("DESKTOP")), B("div", {
            onClick: () => this.setTab(2),
            class: "tab flexItem " + (n === 2 ? "tabactive" : "")
        }, e("MOBILE")))), B("div", {
            style: {
                display: n === 1 ? "none" : "block"
            }
        }, B("div", {
            class: "flexContainer"
        }, B("div", {
            class: "flexItem",
            style: {
                textAlign: "center",
                marginTop: "4"
            }
        }, B("div", {
            class: "center",
            id: "sdk-mm-qrcode",
            innerHTML: r
        }), B("div", {
            class: "connectMobileText"
        }, e("SCAN_TO_CONNECT"), B("br", null), B("span", {
            class: "blue"
        }, B("b", null, e("META_MASK_MOBILE_APP"))))))), B("div", {
            style: {
                display: n === 2 ? "none" : "block"
            }
        }, B("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                height: "300",
                marginTop: "-20"
            }
        }, B(ng, null)), B("div", {
            class: "extensionLabel"
        }, e("SELECT_MODAL.CRYPTO_TAKE_CONTROL_TEXT")), B("button", {
            class: "button",
            onClick: () => this.connectWithExtensionHandler()
        }, B(tg, null), B("span", {
            class: "installExtensionText"
        }, e("CONNECT_WITH_EXTENSION"))))), B(Dc, {
            version: t
        })))
    }
    get el() {
        return ss(this)
    }
    static get watchers() {
        return {
            preferDesktop: ["updatePreferDesktop"]
        }
    }
}
;
L0.style = `.flexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.flexItem {
    flex: 1;
    justify-content: center;
    align-items: center;
}

.flexItem11 {
    flex: 11;
    justify-content: center;
    align-items: center;
}

.flexItem1 {
    flex: 1;
    justify-content: center;
    align-items: center;
}

.tab {
    padding: 8px;
    cursor: pointer;
    background-color: #F2F4F6;
    font-size: 12px;
    text-align: center;
    color: #24292E;
}

.tabcontainer {
    padding: 4px;
    background-color: #F2F4F6;
    border-radius: 8px;
    margin-bottom: 30px;
    margin-top: 30px;
}

.tabactive {
    background-color: white;
    -webkit-transition: background-color 300ms linear;
    -ms-transition: background-color 300ms linear;
    transition: background-color 300ms linear;
    border-radius: 8px;
}

.item {
    font-size: 12px;
    margin-bottom: 16px;
    border-radius: 8px;
    padding: 10px;
    border: 2px #F2F4F6 solid;
    color: #24292E;
}

.extensionLabel {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    text-align: cetner;
    color: #24272A;
}

.notice {
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
    color: grey;
}

.button {
    margin-top: 41.5px;
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    background: #037DD6;
    border-radius: 32px;
    color: white;
    border: 0;
    font-size: 14px;
    cursor: pointer;
}

.backdrop {
    visibility: visible;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 99998;
    background: rgba(0, 0, 0, 0.87);
    opacity: 0.3;
}

.modal {
    visibility: visible;
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
    background: white;
    padding: 20px;
    border-radius: 8px;
    top: 50%;
    max-width: 100%;
    width: 460px;
    min-width: 300px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
    -webkit-font-smoothing: antialiased;
}

.closeButton {
    color: #BBC0C5;
    cursor: pointer;
}

.logoContainer {
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.connectMobileText {
    font-size: 14px;
    color: black;
    margin-top: 28px;
    margin-bottom: 28px;
    line-height: 2;
}

.blue {
    color: #037DD6;
    font-weight: 700;
}

.installExtensionText {
    margin-left: 10px;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.right {
    display: flex;
    align-items: center;
    justify-content: right;
}

#sdk-mm-qrcode {
    svg {
        width: 50%;
    }
}`;
var rg = Object.freeze({
    __proto__: null,
    mm_install_modal: R0,
    mm_pending_modal: O0,
    mm_select_modal: L0
});
export {Un as CommunicationLayerPreference, Ue as ConnectionStatus, vr as DEFAULT_SERVER_URL, te as EventType, Te as MessageType, Cd as MetaMaskSDK, nt as MetaMaskSDKEvent, jt as PROVIDER_UPDATE_TYPE, qe as PlatformType, Ha as SDKProvider, Cd as default};
