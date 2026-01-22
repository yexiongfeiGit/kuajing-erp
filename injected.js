var injected = (function () {
    "use strict";
    var d, T, h, $, m;

    function defineUnlistedScript(e) {
        return e == null || typeof e == "function" ? {main: e} : e
    }

    var freeGlobal = typeof global == "object" && global && global.Object === Object && global,
        freeSelf = typeof self == "object" && self && self.Object === Object && self,
        root = freeGlobal || freeSelf || Function("return this")(), Symbol$1 = root.Symbol,
        objectProto$c = Object.prototype, hasOwnProperty$9 = objectProto$c.hasOwnProperty,
        nativeObjectToString$1 = objectProto$c.toString, symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;

    function getRawTag(e) {
        var t = hasOwnProperty$9.call(e, symToStringTag$1), r = e[symToStringTag$1];
        try {
            e[symToStringTag$1] = void 0;
            var n = !0
        } catch {
        }
        var a = nativeObjectToString$1.call(e);
        return n && (t ? e[symToStringTag$1] = r : delete e[symToStringTag$1]), a
    }

    var objectProto$b = Object.prototype, nativeObjectToString = objectProto$b.toString;

    function objectToString(e) {
        return nativeObjectToString.call(e)
    }

    var nullTag = "[object Null]", undefinedTag = "[object Undefined]",
        symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;

    function baseGetTag(e) {
        return e == null ? e === void 0 ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(e) ? getRawTag(e) : objectToString(e)
    }

    function isObjectLike(e) {
        return e != null && typeof e == "object"
    }

    var symbolTag$2 = "[object Symbol]";

    function isSymbol(e) {
        return typeof e == "symbol" || isObjectLike(e) && baseGetTag(e) == symbolTag$2
    }

    function arrayMap(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n;) a[r] = t(e[r], r, e);
        return a
    }

    var isArray = Array.isArray, symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0,
        symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;

    function baseToString(e) {
        if (typeof e == "string") return e;
        if (isArray(e)) return arrayMap(e, baseToString) + "";
        if (isSymbol(e)) return symbolToString ? symbolToString.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -1 / 0 ? "-0" : t
    }

    function isObject(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }

    function identity(e) {
        return e
    }

    var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]",
        proxyTag = "[object Proxy]";

    function isFunction(e) {
        if (!isObject(e)) return !1;
        var t = baseGetTag(e);
        return t == funcTag$2 || t == genTag$1 || t == asyncTag || t == proxyTag
    }

    var coreJsData = root["__core-js_shared__"], maskSrcKey = (function () {
        var e = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    })();

    function isMasked(e) {
        return !!maskSrcKey && maskSrcKey in e
    }

    var funcProto$2 = Function.prototype, funcToString$2 = funcProto$2.toString;

    function toSource(e) {
        if (e != null) {
            try {
                return funcToString$2.call(e)
            } catch {
            }
            try {
                return e + ""
            } catch {
            }
        }
        return ""
    }

    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/,
        funcProto$1 = Function.prototype, objectProto$a = Object.prototype, funcToString$1 = funcProto$1.toString,
        hasOwnProperty$8 = objectProto$a.hasOwnProperty,
        reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function baseIsNative(e) {
        if (!isObject(e) || isMasked(e)) return !1;
        var t = isFunction(e) ? reIsNative : reIsHostCtor;
        return t.test(toSource(e))
    }

    function getValue(e, t) {
        return e == null ? void 0 : e[t]
    }

    function getNative(e, t) {
        var r = getValue(e, t);
        return baseIsNative(r) ? r : void 0
    }

    var WeakMap = getNative(root, "WeakMap"), objectCreate = Object.create, baseCreate = (function () {
        function e() {
        }

        return function (t) {
            if (!isObject(t)) return {};
            if (objectCreate) return objectCreate(t);
            e.prototype = t;
            var r = new e;
            return e.prototype = void 0, r
        }
    })();

    function apply(e, t, r) {
        switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
    }

    var HOT_COUNT = 800, HOT_SPAN = 16, nativeNow = Date.now;

    function shortOut(e) {
        var t = 0, r = 0;
        return function () {
            var n = nativeNow(), a = HOT_SPAN - (n - r);
            if (r = n, a > 0) {
                if (++t >= HOT_COUNT) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }

    function constant(e) {
        return function () {
            return e
        }
    }

    var defineProperty = (function () {
        try {
            var e = getNative(Object, "defineProperty");
            return e({}, "", {}), e
        } catch {
        }
    })(), baseSetToString = defineProperty ? function (e, t) {
        return defineProperty(e, "toString", {configurable: !0, enumerable: !1, value: constant(t), writable: !0})
    } : identity, setToString = shortOut(baseSetToString);

    function arrayEach(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;) ;
        return e
    }

    var MAX_SAFE_INTEGER$1 = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;

    function isIndex(e, t) {
        var r = typeof e;
        return t = t ?? MAX_SAFE_INTEGER$1, !!t && (r == "number" || r != "symbol" && reIsUint.test(e)) && e > -1 && e % 1 == 0 && e < t
    }

    function baseAssignValue(e, t, r) {
        t == "__proto__" && defineProperty ? defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : e[t] = r
    }

    function eq(e, t) {
        return e === t || e !== e && t !== t
    }

    var objectProto$9 = Object.prototype, hasOwnProperty$7 = objectProto$9.hasOwnProperty;

    function assignValue(e, t, r) {
        var n = e[t];
        (!(hasOwnProperty$7.call(e, t) && eq(n, r)) || r === void 0 && !(t in e)) && baseAssignValue(e, t, r)
    }

    var nativeMax = Math.max;

    function overRest(e, t, r) {
        return t = nativeMax(t === void 0 ? e.length - 1 : t, 0), function () {
            for (var n = arguments, a = -1, o = nativeMax(n.length - t, 0), i = Array(o); ++a < o;) i[a] = n[t + a];
            a = -1;
            for (var l = Array(t + 1); ++a < t;) l[a] = n[a];
            return l[t] = r(i), apply(e, this, l)
        }
    }

    function baseRest(e, t) {
        return setToString(overRest(e, t, identity), e + "")
    }

    var MAX_SAFE_INTEGER = 9007199254740991;

    function isLength(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER
    }

    function isArrayLike(e) {
        return e != null && isLength(e.length) && !isFunction(e)
    }

    var objectProto$8 = Object.prototype;

    function isPrototype(e) {
        var t = e && e.constructor, r = typeof t == "function" && t.prototype || objectProto$8;
        return e === r
    }

    function baseTimes(e, t) {
        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
        return n
    }

    var argsTag$2 = "[object Arguments]";

    function baseIsArguments(e) {
        return isObjectLike(e) && baseGetTag(e) == argsTag$2
    }

    var objectProto$7 = Object.prototype, hasOwnProperty$6 = objectProto$7.hasOwnProperty,
        propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable, isArguments = baseIsArguments((function () {
            return arguments
        })()) ? baseIsArguments : function (e) {
            return isObjectLike(e) && hasOwnProperty$6.call(e, "callee") && !propertyIsEnumerable$1.call(e, "callee")
        };

    function stubFalse() {
        return !1
    }

    var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports,
        freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module,
        moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2,
        Buffer$1 = moduleExports$2 ? root.Buffer : void 0, nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0,
        isBuffer = nativeIsBuffer || stubFalse, argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]",
        boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]",
        funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]",
        objectTag$3 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]",
        stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]", arrayBufferTag$2 = "[object ArrayBuffer]",
        dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]",
        float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]",
        int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]",
        uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]",
        uint32Tag$2 = "[object Uint32Array]", typedArrayTags = {};
    typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = !0, typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = !1;

    function baseIsTypedArray(e) {
        return isObjectLike(e) && isLength(e.length) && !!typedArrayTags[baseGetTag(e)]
    }

    function baseUnary(e) {
        return function (t) {
            return e(t)
        }
    }

    var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports,
        freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module,
        moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1,
        freeProcess = moduleExports$1 && freeGlobal.process, nodeUtil = (function () {
            try {
                var e = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
                return e || freeProcess && freeProcess.binding && freeProcess.binding("util")
            } catch {
            }
        })(), nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray,
        isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray,
        objectProto$6 = Object.prototype, hasOwnProperty$5 = objectProto$6.hasOwnProperty;

    function arrayLikeKeys(e, t) {
        var r = isArray(e), n = !r && isArguments(e), a = !r && !n && isBuffer(e),
            o = !r && !n && !a && isTypedArray(e), i = r || n || a || o, l = i ? baseTimes(e.length, String) : [],
            c = l.length;
        for (var s in e) hasOwnProperty$5.call(e, s) && !(i && (s == "length" || a && (s == "offset" || s == "parent") || o && (s == "buffer" || s == "byteLength" || s == "byteOffset") || isIndex(s, c))) && l.push(s);
        return l
    }

    function overArg(e, t) {
        return function (r) {
            return e(t(r))
        }
    }

    var nativeKeys = overArg(Object.keys, Object), objectProto$5 = Object.prototype,
        hasOwnProperty$4 = objectProto$5.hasOwnProperty;

    function baseKeys(e) {
        if (!isPrototype(e)) return nativeKeys(e);
        var t = [];
        for (var r in Object(e)) hasOwnProperty$4.call(e, r) && r != "constructor" && t.push(r);
        return t
    }

    function keys(e) {
        return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e)
    }

    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;

    function isKey(e, t) {
        if (isArray(e)) return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || isSymbol(e) ? !0 : reIsPlainProp.test(e) || !reIsDeepProp.test(e) || t != null && e in Object(t)
    }

    var nativeCreate = getNative(Object, "create");

    function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {}, this.size = 0
    }

    function hashDelete(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }

    var HASH_UNDEFINED$1 = "__lodash_hash_undefined__", objectProto$4 = Object.prototype,
        hasOwnProperty$3 = objectProto$4.hasOwnProperty;

    function hashGet(e) {
        var t = this.__data__;
        if (nativeCreate) {
            var r = t[e];
            return r === HASH_UNDEFINED$1 ? void 0 : r
        }
        return hasOwnProperty$3.call(t, e) ? t[e] : void 0
    }

    var objectProto$3 = Object.prototype, hasOwnProperty$2 = objectProto$3.hasOwnProperty;

    function hashHas(e) {
        var t = this.__data__;
        return nativeCreate ? t[e] !== void 0 : hasOwnProperty$2.call(t, e)
    }

    var HASH_UNDEFINED = "__lodash_hash_undefined__";

    function hashSet(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = nativeCreate && t === void 0 ? HASH_UNDEFINED : t, this
    }

    function Hash(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    Hash.prototype.clear = hashClear, Hash.prototype.delete = hashDelete, Hash.prototype.get = hashGet, Hash.prototype.has = hashHas, Hash.prototype.set = hashSet;

    function listCacheClear() {
        this.__data__ = [], this.size = 0
    }

    function assocIndexOf(e, t) {
        for (var r = e.length; r--;) if (eq(e[r][0], t)) return r;
        return -1
    }

    var arrayProto = Array.prototype, splice = arrayProto.splice;

    function listCacheDelete(e) {
        var t = this.__data__, r = assocIndexOf(t, e);
        if (r < 0) return !1;
        var n = t.length - 1;
        return r == n ? t.pop() : splice.call(t, r, 1), --this.size, !0
    }

    function listCacheGet(e) {
        var t = this.__data__, r = assocIndexOf(t, e);
        return r < 0 ? void 0 : t[r][1]
    }

    function listCacheHas(e) {
        return assocIndexOf(this.__data__, e) > -1
    }

    function listCacheSet(e, t) {
        var r = this.__data__, n = assocIndexOf(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
    }

    function ListCache(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    ListCache.prototype.clear = listCacheClear, ListCache.prototype.delete = listCacheDelete, ListCache.prototype.get = listCacheGet, ListCache.prototype.has = listCacheHas, ListCache.prototype.set = listCacheSet;
    var Map = getNative(root, "Map");

    function mapCacheClear() {
        this.size = 0, this.__data__ = {hash: new Hash, map: new (Map || ListCache), string: new Hash}
    }

    function isKeyable(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }

    function getMapData(e, t) {
        var r = e.__data__;
        return isKeyable(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
    }

    function mapCacheDelete(e) {
        var t = getMapData(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }

    function mapCacheGet(e) {
        return getMapData(this, e).get(e)
    }

    function mapCacheHas(e) {
        return getMapData(this, e).has(e)
    }

    function mapCacheSet(e, t) {
        var r = getMapData(this, e), n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this
    }

    function MapCache(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }

    MapCache.prototype.clear = mapCacheClear, MapCache.prototype.delete = mapCacheDelete, MapCache.prototype.get = mapCacheGet, MapCache.prototype.has = mapCacheHas, MapCache.prototype.set = mapCacheSet;
    var FUNC_ERROR_TEXT = "Expected a function";

    function memoize(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(FUNC_ERROR_TEXT);
        var r = function () {
            var n = arguments, a = t ? t.apply(this, n) : n[0], o = r.cache;
            if (o.has(a)) return o.get(a);
            var i = e.apply(this, n);
            return r.cache = o.set(a, i) || o, i
        };
        return r.cache = new (memoize.Cache || MapCache), r
    }

    memoize.Cache = MapCache;
    var MAX_MEMOIZE_SIZE = 500;

    function memoizeCapped(e) {
        var t = memoize(e, function (n) {
            return r.size === MAX_MEMOIZE_SIZE && r.clear(), n
        }), r = t.cache;
        return t
    }

    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        reEscapeChar = /\\(\\)?/g, stringToPath = memoizeCapped(function (e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(rePropName, function (r, n, a, o) {
                t.push(a ? o.replace(reEscapeChar, "$1") : n || r)
            }), t
        });

    function toString(e) {
        return e == null ? "" : baseToString(e)
    }

    function castPath(e, t) {
        return isArray(e) ? e : isKey(e, t) ? [e] : stringToPath(toString(e))
    }

    function toKey(e) {
        if (typeof e == "string" || isSymbol(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -1 / 0 ? "-0" : t
    }

    function baseGet(e, t) {
        t = castPath(t, e);
        for (var r = 0, n = t.length; e != null && r < n;) e = e[toKey(t[r++])];
        return r && r == n ? e : void 0
    }

    function get(e, t, r) {
        var n = e == null ? void 0 : baseGet(e, t);
        return n === void 0 ? r : n
    }

    function arrayPush(e, t) {
        for (var r = -1, n = t.length, a = e.length; ++r < n;) e[a + r] = t[r];
        return e
    }

    var getPrototype = overArg(Object.getPrototypeOf, Object), objectTag$2 = "[object Object]",
        funcProto = Function.prototype, objectProto$2 = Object.prototype, funcToString = funcProto.toString,
        hasOwnProperty$1 = objectProto$2.hasOwnProperty, objectCtorString = funcToString.call(Object);

    function isPlainObject(e) {
        if (!isObjectLike(e) || baseGetTag(e) != objectTag$2) return !1;
        var t = getPrototype(e);
        if (t === null) return !0;
        var r = hasOwnProperty$1.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && funcToString.call(r) == objectCtorString
    }

    function baseSlice(e, t, r) {
        var n = -1, a = e.length;
        t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
        for (var o = Array(a); ++n < a;) o[n] = e[n + t];
        return o
    }

    function stackClear() {
        this.__data__ = new ListCache, this.size = 0
    }

    function stackDelete(e) {
        var t = this.__data__, r = t.delete(e);
        return this.size = t.size, r
    }

    function stackGet(e) {
        return this.__data__.get(e)
    }

    function stackHas(e) {
        return this.__data__.has(e)
    }

    var LARGE_ARRAY_SIZE = 200;

    function stackSet(e, t) {
        var r = this.__data__;
        if (r instanceof ListCache) {
            var n = r.__data__;
            if (!Map || n.length < LARGE_ARRAY_SIZE - 1) return n.push([e, t]), this.size = ++r.size, this;
            r = this.__data__ = new MapCache(n)
        }
        return r.set(e, t), this.size = r.size, this
    }

    function Stack(e) {
        var t = this.__data__ = new ListCache(e);
        this.size = t.size
    }

    Stack.prototype.clear = stackClear, Stack.prototype.delete = stackDelete, Stack.prototype.get = stackGet, Stack.prototype.has = stackHas, Stack.prototype.set = stackSet;
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports,
        freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module,
        moduleExports = freeModule && freeModule.exports === freeExports, Buffer = moduleExports ? root.Buffer : void 0;
    Buffer && Buffer.allocUnsafe;

    function cloneBuffer(e, t) {
        return e.slice()
    }

    function arrayFilter(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n;) {
            var i = e[r];
            t(i, r, e) && (o[a++] = i)
        }
        return o
    }

    function stubArray() {
        return []
    }

    var objectProto$1 = Object.prototype, propertyIsEnumerable = objectProto$1.propertyIsEnumerable,
        nativeGetSymbols = Object.getOwnPropertySymbols, getSymbols = nativeGetSymbols ? function (e) {
            return e == null ? [] : (e = Object(e), arrayFilter(nativeGetSymbols(e), function (t) {
                return propertyIsEnumerable.call(e, t)
            }))
        } : stubArray;

    function baseGetAllKeys(e, t, r) {
        var n = t(e);
        return isArray(e) ? n : arrayPush(n, r(e))
    }

    function getAllKeys(e) {
        return baseGetAllKeys(e, keys, getSymbols)
    }

    var DataView = getNative(root, "DataView"), Promise$1 = getNative(root, "Promise"), Set = getNative(root, "Set"),
        mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]",
        setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]", dataViewTag$2 = "[object DataView]",
        dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1),
        setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap), getTag = baseGetTag;
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map && getTag(new Map) != mapTag$3 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set && getTag(new Set) != setTag$3 || WeakMap && getTag(new WeakMap) != weakMapTag$1) && (getTag = function (e) {
        var t = baseGetTag(e), r = t == objectTag$1 ? e.constructor : void 0, n = r ? toSource(r) : "";
        if (n) switch (n) {
            case dataViewCtorString:
                return dataViewTag$2;
            case mapCtorString:
                return mapTag$3;
            case promiseCtorString:
                return promiseTag;
            case setCtorString:
                return setTag$3;
            case weakMapCtorString:
                return weakMapTag$1
        }
        return t
    });
    var objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;

    function initCloneArray(e) {
        var t = e.length, r = new e.constructor(t);
        return t && typeof e[0] == "string" && hasOwnProperty.call(e, "index") && (r.index = e.index, r.input = e.input), r
    }

    var Uint8Array$1 = root.Uint8Array;

    function cloneArrayBuffer(e) {
        var t = new e.constructor(e.byteLength);
        return new Uint8Array$1(t).set(new Uint8Array$1(e)), t
    }

    function cloneDataView(e, t) {
        var r = cloneArrayBuffer(e.buffer);
        return new e.constructor(r, e.byteOffset, e.byteLength)
    }

    var reFlags = /\w*$/;

    function cloneRegExp(e) {
        var t = new e.constructor(e.source, reFlags.exec(e));
        return t.lastIndex = e.lastIndex, t
    }

    var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0,
        symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;

    function cloneSymbol(e) {
        return symbolValueOf ? Object(symbolValueOf.call(e)) : {}
    }

    function cloneTypedArray(e, t) {
        var r = cloneArrayBuffer(e.buffer);
        return new e.constructor(r, e.byteOffset, e.length)
    }

    var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]",
        numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]",
        stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", arrayBufferTag$1 = "[object ArrayBuffer]",
        dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]",
        float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]",
        int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]",
        uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]",
        uint32Tag$1 = "[object Uint32Array]";

    function initCloneByTag(e, t, r) {
        var n = e.constructor;
        switch (t) {
            case arrayBufferTag$1:
                return cloneArrayBuffer(e);
            case boolTag$1:
            case dateTag$1:
                return new n(+e);
            case dataViewTag$1:
                return cloneDataView(e);
            case float32Tag$1:
            case float64Tag$1:
            case int8Tag$1:
            case int16Tag$1:
            case int32Tag$1:
            case uint8Tag$1:
            case uint8ClampedTag$1:
            case uint16Tag$1:
            case uint32Tag$1:
                return cloneTypedArray(e);
            case mapTag$2:
                return new n;
            case numberTag$1:
            case stringTag$1:
                return new n(e);
            case regexpTag$1:
                return cloneRegExp(e);
            case setTag$2:
                return new n;
            case symbolTag$1:
                return cloneSymbol(e)
        }
    }

    function initCloneObject(e) {
        return typeof e.constructor == "function" && !isPrototype(e) ? baseCreate(getPrototype(e)) : {}
    }

    var mapTag$1 = "[object Map]";

    function baseIsMap(e) {
        return isObjectLike(e) && getTag(e) == mapTag$1
    }

    var nodeIsMap = nodeUtil && nodeUtil.isMap, isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap,
        setTag$1 = "[object Set]";

    function baseIsSet(e) {
        return isObjectLike(e) && getTag(e) == setTag$1
    }

    var nodeIsSet = nodeUtil && nodeUtil.isSet, isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet,
        argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]",
        dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]",
        genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]",
        objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]",
        stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]",
        arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]",
        float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]",
        int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]",
        uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]",
        uint32Tag = "[object Uint32Array]", cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0, cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;

    function baseClone(e, t, r, n, a, o) {
        var i;
        if (r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0) return i;
        if (!isObject(e)) return e;
        var l = isArray(e);
        if (l) i = initCloneArray(e); else {
            var c = getTag(e), s = c == funcTag || c == genTag;
            if (isBuffer(e)) return cloneBuffer(e);
            if (c == objectTag || c == argsTag || s && !a) i = s ? {} : initCloneObject(e); else {
                if (!cloneableTags[c]) return a ? e : {};
                i = initCloneByTag(e, c)
            }
        }
        o || (o = new Stack);
        var u = o.get(e);
        if (u) return u;
        o.set(e, i), isSet(e) ? e.forEach(function (g) {
            i.add(baseClone(g, t, r, g, e, o))
        }) : isMap(e) && e.forEach(function (g, f) {
            i.set(f, baseClone(g, t, r, f, e, o))
        });
        var y = getAllKeys, p = l ? void 0 : y(e);
        return arrayEach(p || e, function (g, f) {
            p && (f = g, g = e[f]), assignValue(i, f, baseClone(g, t, r, f, e, o))
        }), i
    }

    var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;

    function cloneDeepWith(e, t) {
        return t = typeof t == "function" ? t : void 0, baseClone(e, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, t)
    }

    function last(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : void 0
    }

    function parent(e, t) {
        return t.length < 2 ? e : baseGet(e, baseSlice(t, 0, -1))
    }

    function baseInvoke(e, t, r) {
        t = castPath(t, e), e = parent(e, t);
        var n = e == null ? e : e[toKey(last(t))];
        return n == null ? void 0 : apply(n, e, r)
    }

    var invoke = baseRest(baseInvoke);
    const browser$1 = (T = (d = globalThis.browser) == null ? void 0 : d.runtime) != null && T.id ? globalThis.browser : globalThis.chrome,
        browser = browser$1;
    (($ = (h = globalThis.browser) == null ? void 0 : h.runtime) == null ? void 0 : $.id) == null ? globalThis.chrome : globalThis.browser;

    function zero$1(e) {
        let t = e.length;
        for (; --t >= 0;) e[t] = 0
    }

    const MIN_MATCH$1 = 3, MAX_MATCH$1 = 258, LENGTH_CODES$1 = 29, LITERALS$1 = 256,
        L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1, D_CODES$1 = 30, DIST_CODE_LEN = 512,
        static_ltree = new Array((L_CODES$1 + 2) * 2);
    zero$1(static_ltree);
    const static_dtree = new Array(D_CODES$1 * 2);
    zero$1(static_dtree);
    const _dist_code = new Array(DIST_CODE_LEN);
    zero$1(_dist_code);
    const _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
    zero$1(_length_code);
    const base_length = new Array(LENGTH_CODES$1);
    zero$1(base_length);
    const base_dist = new Array(D_CODES$1);
    zero$1(base_dist);
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (e) {
    }
    const _utf8len = new Uint8Array(256);
    for (let e = 0; e < 256; e++) _utf8len[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
    _utf8len[254] = _utf8len[254] = 1;
    const awaitTo = async e => {
        try {
            return [await e, null]
        } catch (t) {
            return [void 0, t]
        }
    }, errorProperties = [{property: "name", enumerable: !1}, {
        property: "message",
        enumerable: !1
    }, {property: "stack", enumerable: !1}, {property: "code", enumerable: !0}, {
        property: "cause",
        enumerable: !1
    }, {property: "errors", enumerable: !1}], toJsonWasCalled = new WeakSet, toJSON = e => {
        toJsonWasCalled.add(e);
        const t = e.toJSON();
        return toJsonWasCalled.delete(e), t
    }, destroyCircular = ({
                              from: e,
                              seen: t,
                              to: r,
                              forceEnumerable: n,
                              maxDepth: a,
                              depth: o,
                              useToJSON: i,
                              serialize: l
                          }) => {
        if (r || (Array.isArray(e) ? r = [] : r = {}), t.push(e), o >= a) return r;
        if (i && typeof e.toJSON == "function" && !toJsonWasCalled.has(e)) return toJSON(e);
        const c = s => destroyCircular({
            from: s,
            seen: [...t],
            forceEnumerable: n,
            maxDepth: a,
            depth: o,
            useToJSON: i,
            serialize: l
        });
        for (const [s, u] of Object.entries(e)) {
            if (u && u instanceof Uint8Array && u.constructor.name === "Buffer") {
                r[s] = "[object Buffer]";
                continue
            }
            if (u !== null && typeof u == "object" && typeof u.pipe == "function") {
                r[s] = "[object Stream]";
                continue
            }
            if (typeof u != "function") {
                if (!u || typeof u != "object") {
                    try {
                        r[s] = u
                    } catch {
                    }
                    continue
                }
                if (!t.includes(e[s])) {
                    o++, r[s] = c(e[s]);
                    continue
                }
                r[s] = "[Circular]"
            }
        }
        for (const {
            property: s,
            enumerable: u
        } of errorProperties) e[s] !== void 0 && e[s] !== null && Object.defineProperty(r, s, {
            value: isErrorLike(e[s]) || Array.isArray(e[s]) ? c(e[s]) : e[s],
            enumerable: !0,
            configurable: !0,
            writable: !0
        });
        return r
    };

    function serializeError(e, t = {}) {
        const {maxDepth: r = Number.POSITIVE_INFINITY, useToJSON: n = !0} = t;
        return typeof e == "object" && e !== null ? destroyCircular({
            from: e,
            seen: [],
            forceEnumerable: !0,
            maxDepth: r,
            depth: 0,
            useToJSON: n,
            serialize: !0
        }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e
    }

    function isErrorLike(e) {
        return !!e && typeof e == "object" && typeof e.name == "string" && typeof e.message == "string" && typeof e.stack == "string"
    }

    const byteToHex = [];
    for (let e = 0; e < 256; ++e) byteToHex.push((e + 256).toString(16).slice(1));

    function unsafeStringify(e, t = 0) {
        return (byteToHex[e[t + 0]] + byteToHex[e[t + 1]] + byteToHex[e[t + 2]] + byteToHex[e[t + 3]] + "-" + byteToHex[e[t + 4]] + byteToHex[e[t + 5]] + "-" + byteToHex[e[t + 6]] + byteToHex[e[t + 7]] + "-" + byteToHex[e[t + 8]] + byteToHex[e[t + 9]] + "-" + byteToHex[e[t + 10]] + byteToHex[e[t + 11]] + byteToHex[e[t + 12]] + byteToHex[e[t + 13]] + byteToHex[e[t + 14]] + byteToHex[e[t + 15]]).toLowerCase()
    }

    let getRandomValues;
    const rnds8 = new Uint8Array(16);

    function rng() {
        if (!getRandomValues) {
            if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            getRandomValues = crypto.getRandomValues.bind(crypto)
        }
        return getRandomValues(rnds8)
    }

    const randomUUID = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        native = {randomUUID};

    function v4(e, t, r) {
        var a;
        if (native.randomUUID && !e) return native.randomUUID();
        e = e || {};
        const n = e.random ?? ((a = e.rng) == null ? void 0 : a.call(e)) ?? rng();
        if (n.length < 16) throw new Error("Random bytes length must be >= 16");
        return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, unsafeStringify(n)
    }

    const messageFlag = "__$$__MESSAGE__$$__",
        createMessage = (e, t) => ({uuid: v4(), key: e, data: t, [messageFlag]: !0}), createMessageFactory = e => {
            let t = null;
            const r = {};

            function n() {
                Object.entries(r).length === 0 && (t == null || t(), t = null)
            }

            async function a(c, s) {
                var _;
                const u = Date.now(), y = await ((_ = e.verifyMessageData) == null ? void 0 : _.call(e, s)) ?? s,
                    p = await e.sendMessage(createMessage(c, y)), g = Date.now();
                console.debug(`%cearth-wxt-message %ctime：${g - u} (${u}~${g}) %c结果:`, "border:1px solid #03b3b2;color:#03b3b2;padding: 1px; border-radius: 2px;", "margin-left:5px;color:#fd974f;", "color:#67c23a;", p);
                const {response: f} = p, {result: S, error: b} = f;
                if (b) throw b.message === "Extension context invalidated." ? new Error("请刷新页面重试") : b;
                return S
            }

            function o(c) {
                if (Object.entries(r).length || t) throw new Error("请勿重复订阅");
                return t || (t = e.addRootListener(async (s, ...u) => {
                    if (s[messageFlag] && s.uuid) {
                        const [y, p] = await awaitTo(c(s, ...u));
                        return {...s, response: {result: y, error: p && serializeError(p)}}
                    }
                })), t
            }

            function i(c, s) {
                if (t || (t = e.addRootListener(async (u, ...y) => {
                    if (u[messageFlag] && u.uuid) {
                        const p = r[u.key];
                        if (p) {
                            const [g, f] = await awaitTo(p(u, ...y));
                            return {...u, response: {result: g, error: f && serializeError(f)}}
                        }
                    }
                })), r[c] != null) throw new Error("请勿重复订阅");
                return r[c] = s, () => {
                    delete r[c], n == null || n()
                }
            }

            function l() {
                Object.keys(r).forEach(c => {
                    delete r[c]
                }), n()
            }

            return {sendMessage: a, onMessage: i, onRootMessage: o, removeAllListeners: l}
        }, createWindowMessageFactory = e => createMessageFactory({
            sendMessage(t) {
                return new Promise(r => {
                    const n = a => {
                        var o;
                        isPlainObject(a.data) && a.data.type === e.responseKey && ((o = a.data.message) == null ? void 0 : o.uuid) === t.uuid && (r(a.data.message), window.removeEventListener("message", n))
                    };
                    window.addEventListener("message", n), window.postMessage({
                        type: e.requestKey,
                        message: t,
                        senderOrigin: location.origin
                    }, "*")
                })
            }, addRootListener: t => {
                const r = async n => {
                    if (isPlainObject(n.data) && n.data.type === e.requestKey) {
                        const a = await t(n.data.message);
                        window.postMessage({type: e.responseKey, message: a}, n.data.senderOrigin)
                    }
                };
                return window.addEventListener("message", r), () => window.removeEventListener("message", r)
            }, verifyMessageData(t) {
                return cloneDeepWith(t, r => {
                    if (isFunction(r)) return r.toString()
                })
            }
        }), createContentScriptService = e => {
            const {onRootMessage: t, sendMessage: r} = createWindowMessageFactory(e);
            return {
                contentScriptServiceRequest: o => {
                    const {path: i, context: l = "background"} = o, c = [];
                    return "data" in o && c.push(o.data), "args" in o && c.push(...o.args), r(i, {params: c, context: l})
                }, onContentScriptServiceRequest: o => {
                    t(async i => {
                        const l = {
                            commonFetch: (...c) => commonFetch(...c),
                            plwFetch: (...c) => plwFetch(...c),
                            browser,
                            globalThis: globalThis || window
                        };
                        if (isPlainObject(i) && i.key && isPlainObject(i.data)) {
                            const {key: c, data: s = {}} = i, {context: u, params: y} = s, p = {path: c, data: y},
                                g = get(l, c);
                            return u === "content_script" && g ? isFunction(g) ? await invoke(l, c, ...p.data || []) : g : await o(p)
                        }
                    })
                }
            }
        }, PLUGIN_TAG = "earth", createPluginNamespace = e => `__$$${PLUGIN_TAG}_browser_extension$$__${e}__`,
        SERVICE_CONFIG = {
            requestKey: createPluginNamespace("service_request_key"),
            responseKey: createPluginNamespace("service_response_key")
        }, {contentScriptServiceRequest} = createContentScriptService(SERVICE_CONFIG),
        injectType = ((m = document.currentScript) == null ? void 0 : m.getAttribute("data-inject-type")) || "",
        getEntrys = async () => {
            var o, i;
            const e = "https://kuajing-plv3.happyporsche.com", t = [], r = [],
                n = await contentScriptServiceRequest({path: "commonFetch", data: {url: `${e}/.vite/manifest.json`}}),
                a = Object.values(n).find(l => l.isEntry && l.name === "index");
            return (o = n["style.css"]) != null && o.file && r.push((i = n["style.css"]) == null ? void 0 : i.file), a && (r.push(...a.css || []), t.push(`${a.file}`)), {
                css: r.map(l => `${e}/${l}`),
                js: t.map(l => `${e}/${l}`)
            }
        }, getCspNonce = () => {
            const e = document.querySelector("script[nonce]") || document.querySelector("link[nonce]");
            let t = (e == null ? void 0 : e.nonce) || (e == null ? void 0 : e.getAttribute("nonce"));
            if (!t) {
                const r = document.querySelector("meta[property=csp-nonce]");
                t = (r == null ? void 0 : r.nonce) || (r == null ? void 0 : r.getAttribute("nonce"))
            }
            if (t && !document.querySelector("meta[property=csp-nonce]")) {
                const r = document.createElement("meta");
                r.setAttribute("nonce", t), r.setAttribute("property", "csp-nonce")
            }
            return t
        }, injectCss = async e => {
            const t = await Promise.all(e.map(n => contentScriptServiceRequest({
                path: "commonFetch",
                data: {url: n, dataType: "text"}
            }))), r = await contentScriptServiceRequest({path: "getCurrentSenderInfo"});
            contentScriptServiceRequest({
                path: "browser.scripting.insertCSS", data: {
                    target: {tabId: r.tab.id, frameIds: r.frameId ? [r.frameId] : void 0}, css: t.join(`
`)
                }
            })
        }, injectScript = async js => {
            const nonce = getCspNonce();
            if (["blob", "inline", "eval"].includes(injectType)) {
                const jsRes = await Promise.all(js.map(e => contentScriptServiceRequest({
                    path: "commonFetch",
                    data: {url: e, dataType: "text"}
                })));
                jsRes.forEach(res => {
                    if (injectType === "eval") eval(res); else {
                        const e = document.createElement("script");
                        if (injectType === "blob") {
                            const t = new Blob([res], {type: "text/javascript"});
                            e.src = URL.createObjectURL(t)
                        } else e.textContent = res;
                        nonce && e.setAttribute("nonce", nonce), document.body.appendChild(e)
                    }
                })
            } else js.forEach(e => {
                const t = document.createElement("script");
                t.src = e, nonce && t.setAttribute("nonce", nonce), document.body.appendChild(t)
            })
        }, definition = defineUnlistedScript(async () => {
            const {css: e, js: t} = await getEntrys();
            injectCss(e), injectScript(t)
        });

    function initPlugins() {
    }

    function print(e, ...t) {
    }

    const logger = {
        debug: (...e) => print(console.debug, ...e),
        log: (...e) => print(console.log, ...e),
        warn: (...e) => print(console.warn, ...e),
        error: (...e) => print(console.error, ...e)
    }, result = (async () => {
        try {
            return await definition.main()
        } catch (e) {
            throw logger.error('The unlisted script "injected" crashed on startup!', e), e
        }
    })();
    return result
})();
injected;