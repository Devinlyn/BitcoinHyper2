import {c, d, e as r, h as u, o as l, q as p, t as f} from "./chunk-XMCF3TCT.js";
import {e as y} from "./chunk-QE6IBIJD.js";
var a, L, g = y( () => {
    "use strict";
    f();
    a = class extends p {
        constructor(t, i) {
            super(),
            this.finished = !1,
            this.destroyed = !1,
            d(t);
            let h = l(i);
            if (this.iHash = t.create(),
            typeof this.iHash.update != "function")
                throw new Error("Expected instance of class which extends utils.Hash");
            this.blockLen = this.iHash.blockLen,
            this.outputLen = this.iHash.outputLen;
            let o = this.blockLen
              , e = new Uint8Array(o);
            e.set(h.length > o ? t.create().update(h).digest() : h);
            for (let s = 0; s < e.length; s++)
                e[s] ^= 54;
            this.iHash.update(e),
            this.oHash = t.create();
            for (let s = 0; s < e.length; s++)
                e[s] ^= 106;
            this.oHash.update(e),
            u(e)
        }
        update(t) {
            return r(this),
            this.iHash.update(t),
            this
        }
        digestInto(t) {
            r(this),
            c(t, this.outputLen),
            this.finished = !0,
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy()
        }
        digest() {
            let t = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(t),
            t
        }
        _cloneInto(t) {
            t || (t = Object.create(Object.getPrototypeOf(this), {}));
            let {oHash: i, iHash: h, finished: o, destroyed: e, blockLen: s, outputLen: H} = this;
            return t = t,
            t.finished = o,
            t.destroyed = e,
            t.blockLen = s,
            t.outputLen = H,
            t.oHash = i._cloneInto(t.oHash),
            t.iHash = h._cloneInto(t.iHash),
            t
        }
        clone() {
            return this._cloneInto()
        }
        destroy() {
            this.destroyed = !0,
            this.oHash.destroy(),
            this.iHash.destroy()
        }
    }
    ,
    L = (n, t, i) => new a(n,t).update(i).digest();
    L.create = (n, t) => new a(n,t)
}
);
export {L as a, g as b};
