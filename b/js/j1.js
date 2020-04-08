/**
 * Swiper 4.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 14, 2018
 */
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
    "use strict";
    var f = "undefined" == typeof document ? {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: {
                blur: function () {},
                nodeName: ""
            },
            querySelector: function () {
                return null
            },
            querySelectorAll: function () {
                return []
            },
            getElementById: function () {
                return null
            },
            createEvent: function () {
                return {
                    initEvent: function () {}
                }
            },
            createElement: function () {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        Y = "undefined" == typeof window ? {
            document: f,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function () {
                return this
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
                return {
                    getPropertyValue: function () {
                        return ""
                    }
                }
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {}
        } : window,
        l = function (e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function L(e, t) {
        var a = [],
            i = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
            if ("string" == typeof e) {
                var s, r, n = e.trim();
                if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                    var o = "div";
                    for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
            } else if (e.nodeType || e === Y || e === f) a.push(e);
        else if (0 < e.length && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new l(a)
    }

    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }
    L.fn = l.prototype, L.Class = l, L.Dom7 = l;
    var t = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        },
        removeClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        },
        hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        },
        attr: function (e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === a.length) this[i].setAttribute(e, t);
                else
                    for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function (e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0
            }
        },
        transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e, a.transform = e
            }
            return this
        },
        transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e, a.transitionDuration = e
            }
            return this
        },
        on: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0],
                r = t[1],
                n = t[2],
                s = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);
                    else
                        for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }
            "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
                            listener: n,
                            proxyListener: o
                        }), u.addEventListener(h, o, s)
                    } else
                        for (d = 0; d < p.length; d += 1) {
                            var v = p[d];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
                                listener: n,
                                proxyListener: l
                            }), u.addEventListener(v, l, s)
                        }
            }
            return this
        },
        off: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0],
                s = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], p = 0; p < this.length; p += 1) {
                    var c = this[p],
                        u = void 0;
                    if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length)
                        for (var h = u.length - 1; 0 <= h; h -= 1) {
                            var v = u[h];
                            r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
                for (var r = a[s], n = 0; n < this.length; n += 1) {
                    var o = this[n],
                        l = void 0;
                    try {
                        l = new Y.CustomEvent(r, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
                    }
                    o.dom7EventData = e.filter(function (e, t) {
                        return 0 < t
                    }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
                }
            return this
        },
        transitionEnd: function (t) {
            var a, i = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function r(e) {
                if (e.target === this)
                    for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
            }
            if (t)
                for (a = 0; a < i.length; a += 1) s.on(i[a], r);
            return this
        },
        outerWidth: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function () {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    a = f.body,
                    i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0,
                    r = e === Y ? Y.scrollY : e.scrollTop,
                    n = e === Y ? Y.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - i,
                    left: t.left + n - s
                }
            }
            return null
        },
        css: function (e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var i in e) this[a].style[i] = e[i];
                    return this
                }
                if (this[0]) return Y.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function (e) {
            var t, a, i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = L(e), a = 0; a < t.length; a += 1)
                    if (t[a] === i) return !0;
                return !1
            }
            if (e === f) return i === f;
            if (e === Y) return i === Y;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
                    if (t[a] === i) return !0;
                return !1
            }
            return !1
        },
        index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t, a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var r = f.createElement("div");
                        for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
                    } else if (e instanceof l)
                    for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
                else this[s].appendChild(e)
            }
            return this
        },
        prepend: function (e) {
            var t, a, i = this;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var s = f.createElement("div");
                    for (s.innerHTML = e, a = s.childNodes.length - 1; 0 <= a; a -= 1) i[t].insertBefore(s.childNodes[a], i[t].childNodes[0])
                } else if (e instanceof l)
                for (a = 0; a < e.length; a += 1) i[t].insertBefore(e[a], i[t].childNodes[0]);
            else i[t].insertBefore(e, i[t].childNodes[0]);
            return this
        },
        next: function (e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function (e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.nextElementSibling;) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        },
        prev: function (e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function (e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.previousElementSibling;) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        },
        parent: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return L(r(t))
        },
        parents: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return L(r(t))
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
            return new l(t)
        },
        children: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t))
        },
        remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
            }
            return this
        },
        styles: function () {
            return this[0] ? Y.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function (e) {
        L.fn[e] = t[e]
    });
    var e, a, i, V = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach(function (e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function () {
                return Date.now()
            },
            getTranslate: function (e, t) {
                var a, i, s;
                void 0 === t && (t = "x");
                var r = Y.getComputedStyle(e, null);
                return Y.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
                    return e.replace(",", ".")
                }).join(", ")), s = new Y.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = Y.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = Y.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
            },
            parseUrlQuery: function (e) {
                var t, a, i, s, r = {},
                    n = e || Y.location.href;
                if ("string" == typeof n && n.length)
                    for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                            return "" !== e
                        })).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                return r
            },
            isObject: function (e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function () {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (null != s)
                        for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                            var l = r[n],
                                d = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== d && d.enumerable && (V.isObject(a[l]) && V.isObject(s[l]) ? V.extend(a[l], s[l]) : !V.isObject(a[l]) && V.isObject(s[l]) ? (a[l] = {}, V.extend(a[l], s[l])) : a[l] = s[l])
                        }
                }
                return a
            }
        },
        R = (i = f.createElement("div"), {
            touch: Y.Modernizr && !0 === Y.Modernizr.touch || !!("ontouchstart" in Y || Y.DocumentTouch && f instanceof Y.DocumentTouch),
            pointerEvents: !(!Y.navigator.pointerEnabled && !Y.PointerEvent),
            prefixedPointerEvents: !!Y.navigator.msPointerEnabled,
            transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
            transforms3d: Y.Modernizr && !0 === Y.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
            flexbox: function () {
                for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                    if (t[a] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in Y || "WebkitMutationObserver" in Y,
            passiveListener: function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    Y.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in Y
        }),
        s = function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
                t.on(e, t.params.on[e])
            })
        },
        n = {
            components: {
                configurable: !0
            }
        };
    s.prototype.on = function (e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
        }), i
    }, s.prototype.once = function (i, s, e) {
        var r = this;
        if ("function" != typeof s) return r;
        return r.on(i, function e() {
            for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
            s.apply(r, t), r.off(i, e)
        }, e)
    }, s.prototype.off = function (e, i) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function (a) {
            void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) {
                e === i && s.eventsListeners[a].splice(t, 1)
            })
        }), s
    }, s.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var a, i, s, r = this;
        return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function (e) {
                    t.push(e)
                }), t.forEach(function (e) {
                    e.apply(s, i)
                })
            }
        })), r
    }, s.prototype.useModulesParams = function (a) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function (e) {
            var t = i.modules[e];
            t.params && V.extend(a, t.params)
        })
    }, s.prototype.useModules = function (i) {
        void 0 === i && (i = {});
        var s = this;
        s.modules && Object.keys(s.modules).forEach(function (e) {
            var a = s.modules[e],
                t = i[e] || {};
            a.instance && Object.keys(a.instance).forEach(function (e) {
                var t = a.instance[e];
                s[e] = "function" == typeof t ? t.bind(s) : t
            }), a.on && s.on && Object.keys(a.on).forEach(function (e) {
                s.on(e, a.on[e])
            }), a.create && a.create.bind(s)(t)
        })
    }, n.components.set = function (e) {
        this.use && this.use(e)
    }, s.installModule = function (t) {
        for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = t.name || Object.keys(i.prototype.modules).length + "_" + V.now();
        return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
            i.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function (e) {
            i[e] = t.static[e]
        }), t.install && t.install.apply(i, e), i
    }, s.use = function (e) {
        for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(s, n);
    var o = {
        updateSize: function () {
            var e, t, a = this,
                i = a.$el;
            e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), V.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
        },
        updateSlides: function () {
            var e = this,
                t = e.params,
                a = e.$wrapperEl,
                i = e.size,
                s = e.rtlTranslate,
                r = e.wrongRTL,
                n = e.virtual && t.virtual.enabled,
                o = n ? e.virtual.slides.length : e.slides.length,
                l = a.children("." + e.params.slideClass),
                d = n ? e.virtual.slides.length : l.length,
                p = [],
                c = [],
                u = [],
                h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length,
                m = e.snapGrid.length,
                g = t.spaceBetween,
                b = -h,
                w = 0,
                y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = C - (t.slidesPerColumn * C - d), k = 0; k < d; k += 1) {
                    T = 0;
                    var z = l.eq(k);
                    if (1 < t.slidesPerColumn) {
                        var P = void 0,
                            $ = void 0,
                            L = void 0;
                        "column" === t.slidesPerColumnFill ? (L = k - ($ = Math.floor(k / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), P = $ + L * x / S, z.css({
                            "-webkit-box-ordinal-group": P,
                            "-moz-box-ordinal-group": P,
                            "-ms-flex-order": P,
                            "-webkit-order": P,
                            order: P
                        })) : $ = k - (L = Math.floor(k / C)) * C, z.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
                    }
                    if ("none" !== z.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = Y.getComputedStyle(z[0], null),
                                D = z[0].style.transform,
                                O = z[0].style.webkitTransform;
                            D && (z[0].style.transform = "none"), O && (z[0].style.webkitTransform = "none"), T = t.roundLengths ? e.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0) : e.isHorizontal() ? z[0].getBoundingClientRect().width + parseFloat(I.getPropertyValue("margin-left")) + parseFloat(I.getPropertyValue("margin-right")) : z[0].getBoundingClientRect().height + parseFloat(I.getPropertyValue("margin-top")) + parseFloat(I.getPropertyValue("margin-bottom")), D && (z[0].style.transform = D), O && (z[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
                        } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? l[k].style.width = T + "px" : l[k].style.height = T + "px");
                        l[k] && (l[k].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== k && (b = b - i / 2 - g), 0 === k && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }), R.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    }), t.centeredSlides)) {
                    E = [];
                    for (var A = 0; A < p.length; A += 1) {
                        var H = p[A];
                        t.roundLengths && (H = Math.floor(H)), p[A] < e.virtualSize + p[0] && E.push(H)
                    }
                    p = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var B = 0; B < p.length; B += 1) {
                        var G = p[B];
                        t.roundLengths && (G = Math.floor(G)), p[B] <= e.virtualSize - i && E.push(G)
                    }
                    p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
                        marginLeft: g + "px"
                    }) : l.css({
                        marginRight: g + "px"
                    }) : l.css({
                        marginBottom: g + "px"
                    })), t.centerInsufficientSlides) {
                    var N = 0;
                    if (u.forEach(function (e) {
                            N += e + (t.spaceBetween ? t.spaceBetween : 0)
                        }), (N -= t.spaceBetween) < i) {
                        var X = (i - N) / 2;
                        p.forEach(function (e, t) {
                            p[t] = e - X
                        }), c.forEach(function (e, t) {
                            c[t] = e + X
                        })
                    }
                }
                V.extend(e, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function (e) {
            var t, a = this,
                i = [],
                s = 0;
            if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                    var r = a.activeIndex + t;
                    if (r > a.slides.length) break;
                    i.push(a.slides.eq(r)[0])
                } else i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var n = i[t].offsetHeight;
                    s = s < n ? n : s
                } s && a.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this,
                a = t.params,
                i = t.slides,
                s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset),
                            p = d + t.slidesSizesGrid[n];
                        (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                t.visibleSlides = L(t.visibleSlides)
            }
        },
        updateProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this,
                a = t.params,
                i = t.maxTranslate() - t.minTranslate(),
                s = t.progress,
                r = t.isBeginning,
                n = t.isEnd,
                o = r,
                l = n;
            0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), V.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: n
            }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
        },
        updateSlidesClasses: function () {
            var e, t = this,
                a = t.slides,
                i = t.params,
                s = t.$wrapperEl,
                r = t.activeIndex,
                n = t.realIndex,
                o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function (e) {
            var t, a = this,
                i = a.rtlTranslate ? a.translate : -a.translate,
                s = a.slidesGrid,
                r = a.snapGrid,
                n = a.params,
                o = a.activeIndex,
                l = a.realIndex,
                d = a.snapIndex,
                p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
            }
            if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                V.extend(a, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: p
                }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
            } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
        },
        updateClickedSlide: function (e) {
            var t = this,
                a = t.params,
                i = L(e.target).closest("." + a.slideClass)[0],
                s = !1;
            if (i)
                for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
            if (!i || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var d = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                a = this.rtlTranslate,
                i = this.translate,
                s = this.$wrapperEl;
            if (t.virtualTranslate) return a ? -i : i;
            var r = V.getTranslate(s[0], e);
            return a && (r = -r), r || 0
        },
        setTranslate: function (e, t) {
            var a = this,
                i = a.rtlTranslate,
                s = a.params,
                r = a.$wrapperEl,
                n = a.progress,
                o = 0,
                l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (R.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
        },
        minTranslate: function () {
            return -this.snapGrid[0]
        },
        maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var p = {
        setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        },
        transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.params,
                r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
                if ("reset" === n) return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.previousIndex;
            a.animating = !1, a.setTransition(0);
            var r = t;
            if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
                if ("reset" === r) return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
            }
        }
    };
    var c = {
        slideTo: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = this,
                r = e;
            r < 0 && (r = 0);
            var n = s.params,
                o = s.snapGrid,
                l = s.slidesGrid,
                d = s.previousIndex,
                p = s.activeIndex,
                c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h, v = -o[u];
            if (s.updateProgress(v), n.normalizeSlideIndex)
                for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
            }
            return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && R.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
            }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
        },
        slideToLoop: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
        },
        slideNext: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating;
            return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        },
        slidePrev: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating,
                n = i.snapGrid,
                o = i.slidesGrid,
                l = i.rtlTranslate;
            if (s.loop) {
                if (r) return !1;
                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var p, c = d(l ? i.translate : -i.translate),
                u = n.map(function (e) {
                    return d(e)
                }),
                h = (o.map(function (e) {
                    return d(e)
                }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
        },
        slideReset: function (e, t, a) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
        },
        slideToClosest: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.activeIndex,
                r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate,
                    o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
            }
            return i.slideTo(s, e, t, a)
        },
        slideToClickedSlide: function () {
            var e, t = this,
                a = t.params,
                i = t.$wrapperEl,
                s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
                r = t.clickedIndex;
            if (a.loop) {
                if (t.animating) return;
                e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), V.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), V.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r)
            } else t.slideTo(r)
        }
    };
    var u = {
        loopCreate: function () {
            var i = this,
                e = i.params,
                t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = [],
                l = [];
            s.each(function (e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
        },
        loopFix: function () {
            var e, t = this,
                a = t.params,
                i = t.activeIndex,
                s = t.slides,
                r = t.loopedSlides,
                n = t.allowSlidePrev,
                o = t.allowSlideNext,
                l = t.snapGrid,
                d = t.rtlTranslate;
            t.allowSlidePrev = !0, t.allowSlideNext = !0;
            var p = -l[i] - t.getTranslate();
            i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
            t.allowSlidePrev = n, t.allowSlideNext = o
        },
        loopDestroy: function () {
            var e = this.$wrapperEl,
                t = this.params,
                a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), a.removeAttr("data-swiper-slide-index")
        }
    };
    var h = {
        setGrabCursor: function (e) {
            if (!(R.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function () {
            R.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var v = {
            appendSlide: function (e) {
                var t = this,
                    a = t.$wrapperEl,
                    i = t.params;
                if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
                else a.append(e);
                i.loop && t.loopCreate(), i.observer && R.observer || t.update()
            },
            prependSlide: function (e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                    r = s + e.length
                } else i.prepend(e);
                a.loop && t.loopCreate(), a.observer && R.observer || t.update(), t.slideTo(r, 0, !1)
            },
            addSlide: function (e, t) {
                var a = this,
                    i = a.$wrapperEl,
                    s = a.params,
                    r = a.activeIndex;
                s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
                var n = a.slides.length;
                if (e <= 0) a.prependSlide(t);
                else if (n <= e) a.appendSlide(t);
                else {
                    for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                        var p = a.slides.eq(d);
                        p.remove(), l.unshift(p)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                        o = e < r ? r + t.length : r
                    } else i.append(t);
                    for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                    s.loop && a.loopCreate(), s.observer && R.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
                }
            },
            removeSlide: function (e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
                var r, n = s;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                    n = Math.max(n, 0)
                } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
                a.loop && t.loopCreate(), a.observer && R.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
            },
            removeAllSlides: function () {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        m = function () {
            var e = Y.navigator.userAgent,
                t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: Y.cordova || Y.phonegap,
                    phonegap: Y.cordova || Y.phonegap
                },
                a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                s = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var o = t.osVersion.split("."),
                    l = f.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
            }
            return t.pixelRatio = Y.devicePixelRatio || 1, t
        }();

    function g() {
        var e = this,
            t = e.params,
            a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                s = e.allowSlidePrev,
                r = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }
    var b = {
        attachEvents: function () {
            var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                s = e.wrapperEl;
            e.onTouchStart = function (e) {
                var t = this,
                    a = t.touchEventsData,
                    i = t.params,
                    s = t.touches;
                if (!t.animating || !i.preventInteractionOnTransition) {
                    var r = e;
                    if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved))
                        if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
                        else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                        s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                        var n = s.currentX,
                            o = s.currentY,
                            l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                            d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                        if (!l || !(n <= d || n >= Y.screen.width - d)) {
                            if (V.extend(a, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), s.startX = n, s.startY = o, a.touchStartTime = V.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                                var p = !0;
                                L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur(), p && t.allowTouchMove && i.touchStartPreventDefault && r.preventDefault()
                            }
                            t.emit("touchStart", r)
                        }
                    }
                }
            }.bind(e), e.onTouchMove = function (e) {
                var t = this,
                    a = t.touchEventsData,
                    i = t.params,
                    s = t.touches,
                    r = t.rtlTranslate,
                    n = e;
                if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
                    if (!a.isTouchEvent || "mousemove" !== n.type) {
                        var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                            l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                        if (n.preventedByNestedSwiper) return s.startX = o, void(s.startY = l);
                        if (!t.allowTouchMove) return t.allowClick = !1, void(a.isTouched && (V.extend(s, {
                            startX: o,
                            startY: l,
                            currentX: o,
                            currentY: l
                        }), a.touchStartTime = V.now()));
                        if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                            if (t.isVertical()) {
                                if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
                            } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                        if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void(t.allowClick = !1);
                        if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                            s.currentX = o, s.currentY = l;
                            var d, p = s.currentX - s.startX,
                                c = s.currentY - s.startY;
                            if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
                                if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;
                                else if (a.startMoving) {
                                t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                                var u = t.isHorizontal() ? p : c;
                                s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                                var h = !0,
                                    v = i.resistanceRatio;
                                if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                                    if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
                                    if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void(s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                }
                                i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                                    position: s[t.isHorizontal() ? "startX" : "startY"],
                                    time: a.touchStartTime
                                }), a.velocities.push({
                                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                    time: V.now()
                                })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
                            }
                        }
                    }
                } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
            }.bind(e), e.onTouchEnd = function (e) {
                var t = this,
                    a = t.touchEventsData,
                    i = t.params,
                    s = t.touches,
                    r = t.rtlTranslate,
                    n = t.$wrapperEl,
                    o = t.slidesGrid,
                    l = t.snapGrid,
                    d = e;
                if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
                i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = V.now(),
                    u = c - a.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = V.nextTick(function () {
                        t && !t.destroyed && t.emit("click", d)
                    }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = V.now(), V.nextTick(function () {
                        t.destroyed || (t.allowClick = !0)
                    }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
                if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (1 < a.velocities.length) {
                            var h = a.velocities.pop(),
                                v = a.velocities.pop(),
                                f = h.position - v.position,
                                m = h.time - v.time;
                            t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < V.now() - h.time) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                        var g = 1e3 * i.freeModeMomentumRatio,
                            b = t.velocity * g,
                            w = t.translate + b;
                        r && (w = -w);
                        var y, x, T = !1,
                            E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
                        else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
                        else if (i.freeModeSticky) {
                            for (var S, C = 0; C < l.length; C += 1)
                                if (l[C] > -w) {
                                    S = C;
                                    break
                                } w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                        }
                        if (x && t.once("transitionEnd", function () {
                                t.loopFix()
                            }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                        else if (i.freeModeSticky) return void t.slideToClosest();
                        i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                            t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var M = 0, k = t.slidesSizesGrid[0], z = 0; z < o.length; z += i.slidesPerGroup) void 0 !== o[z + i.slidesPerGroup] ? p >= o[z] && p < o[z + i.slidesPerGroup] && (k = o[(M = z) + i.slidesPerGroup] - o[z]) : p >= o[z] && (M = z, k = o[o.length - 1] - o[o.length - 2]);
                    var P = (p - o[M]) / k;
                    if (u > i.longSwipesMs) {
                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                    } else {
                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
                    }
                }
            }.bind(e), e.onClick = function (e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }.bind(e);
            var r = "container" === t.touchEventsTarget ? i : s,
                n = !!t.nested;
            if (R.touch || !R.pointerEvents && !R.prefixedPointerEvents) {
                if (R.touch) {
                    var o = !("touchstart" !== a.start || !R.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, R.passiveListener ? {
                        passive: !1,
                        capture: n
                    } : n), r.addEventListener(a.end, e.onTouchEnd, o)
                }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !R.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
            } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
        },
        detachEvents: function () {
            var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                s = e.wrapperEl,
                r = "container" === t.touchEventsTarget ? i : s,
                n = !!t.nested;
            if (R.touch || !R.pointerEvents && !R.prefixedPointerEvents) {
                if (R.touch) {
                    var o = !("onTouchStart" !== a.start || !R.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
                }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !R.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
            } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
        }
    };
    var w, y = {
            setBreakpoint: function () {
                var e = this,
                    t = e.activeIndex,
                    a = e.initialized,
                    i = e.loopedSlides;
                void 0 === i && (i = 0);
                var s = e.params,
                    r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = e.getBreakpoint(r);
                    if (n && e.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : e.originalParams,
                            l = s.loop && o.slidesPerView !== s.slidesPerView;
                        V.extend(e.params, o), V.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), e.currentBreakpoint = n, l && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                    }
                }
            },
            getBreakpoint: function (e) {
                if (e) {
                    var t = !1,
                        a = [];
                    Object.keys(e).forEach(function (e) {
                        a.push(e)
                    }), a.sort(function (e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var i = 0; i < a.length; i += 1) {
                        var s = a[i];
                        this.params.breakpointsInverse ? s <= Y.innerWidth && (t = s) : s >= Y.innerWidth && !t && (t = s)
                    }
                    return t || "max"
                }
            }
        },
        I = {
            isIE: !!Y.navigator.userAgent.match(/Trident/g) || !!Y.navigator.userAgent.match(/MSIE/g),
            isEdge: !!Y.navigator.userAgent.match(/Edge/g),
            isSafari: (w = Y.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Y.navigator.userAgent)
        };
    var x = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        T = {
            update: o,
            translate: d,
            transition: p,
            slide: c,
            loop: u,
            grabCursor: h,
            manipulation: v,
            events: b,
            breakpoints: y,
            checkOverflow: {
                checkOverflow: function () {
                    var e = this,
                        t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var t = this.classNames,
                        a = this.params,
                        e = this.rtl,
                        i = this.$el,
                        s = [];
                    s.push(a.direction), a.freeMode && s.push("free-mode"), R.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), (I.isIE || I.isEdge) && (R.pointerEvents || R.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) {
                        t.push(a.containerModifierClass + e)
                    }), i.addClass(t.join(" "))
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function (e, t, a, i, s, r) {
                    var n;

                    function o() {
                        r && r()
                    }
                    e.complete && s ? o() : t ? ((n = new Y.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
                },
                preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        E = {},
        S = function (u) {
            function h() {
                for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = V.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(T).forEach(function (t) {
                    Object.keys(T[t]).forEach(function (e) {
                        h.prototype[e] || (h.prototype[e] = T[t][e])
                    })
                });
                var r = this;
                void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
                    var t = r.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0],
                            i = t.params[a];
                        if ("object" != typeof i || null === i) return;
                        if (!(a in s && "enabled" in i)) return;
                        !0 === s[a] && (s[a] = {
                            enabled: !0
                        }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
                            enabled: !1
                        })
                    }
                });
                var n = V.extend({}, x);
                r.useModulesParams(n), r.params = V.extend({}, n, E, s), r.originalParams = V.extend({}, r.params), r.passedParams = V.extend({}, s);
                var o = (r.$ = L)(r.params.el);
                if (t = o[0]) {
                    if (1 < o.length) {
                        var l = [];
                        return o.each(function (e, t) {
                            var a = V.extend({}, s, {
                                el: t
                            });
                            l.push(new h(a))
                        }), l
                    }
                    t.swiper = r, o.data("swiper", r);
                    var d, p, c = o.children("." + r.params.wrapperClass);
                    return V.extend(r, {
                        $el: o,
                        el: t,
                        $wrapperEl: c,
                        wrapperEl: c[0],
                        classNames: [],
                        slides: L(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === r.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === r.params.direction
                        },
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                        rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                        wrongRTL: "-webkit-box" === c.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], R.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : R.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
                            start: d[0],
                            move: d[1],
                            end: d[2]
                        }, r.touchEventsDesktop = {
                            start: p[0],
                            move: p[1],
                            end: p[2]
                        }, R.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: V.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.useModules(), r.params.init && r.init(), r
                }
            }
            u && (h.__proto__ = u);
            var e = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
                var e = this,
                    t = e.params,
                    a = e.slides,
                    i = e.slidesGrid,
                    s = e.size,
                    r = e.activeIndex,
                    n = 1;
                if (t.centeredSlides) {
                    for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
                    for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
                } else
                    for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                return n
            }, h.prototype.update = function () {
                var a = this;
                if (a && !a.destroyed) {
                    var e = a.snapGrid,
                        t = a.params;
                    t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
                }

                function i() {
                    var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                        t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                    a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
                }
            }, h.prototype.init = function () {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, h.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var a = this,
                    i = a.params,
                    s = a.$el,
                    r = a.$wrapperEl,
                    n = a.slides;
                return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
                    a.off(e)
                }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), V.deleteProps(a)), a.destroyed = !0), null
            }, h.extendDefaults = function (e) {
                V.extend(E, e)
            }, e.extendedDefaults.get = function () {
                return E
            }, e.defaults.get = function () {
                return x
            }, e.Class.get = function () {
                return u
            }, e.$.get = function () {
                return L
            }, Object.defineProperties(h, e), h
        }(s),
        C = {
            name: "device",
            proto: {
                device: m
            },
            static: {
                device: m
            }
        },
        M = {
            name: "support",
            proto: {
                support: R
            },
            static: {
                support: R
            }
        },
        k = {
            name: "browser",
            proto: {
                browser: I
            },
            static: {
                browser: I
            }
        },
        z = {
            name: "resize",
            create: function () {
                var e = this;
                V.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function () {
                    Y.addEventListener("resize", this.resize.resizeHandler), Y.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function () {
                    Y.removeEventListener("resize", this.resize.resizeHandler), Y.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        P = {
            func: Y.MutationObserver || Y.WebkitMutationObserver,
            attach: function (e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = new P.func(function (e) {
                        if (1 !== e.length) {
                            var t = function () {
                                a.emit("observerUpdate", e[0])
                            };
                            Y.requestAnimationFrame ? Y.requestAnimationFrame(t) : Y.setTimeout(t, 0)
                        } else a.emit("observerUpdate", e[0])
                    });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), a.observer.observers.push(i)
            },
            init: function () {
                var e = this;
                if (R.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {
                        childList: !1
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        $ = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1
            },
            create: function () {
                V.extend(this, {
                    observer: {
                        init: P.init.bind(this),
                        attach: P.attach.bind(this),
                        destroy: P.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function () {
                    this.observer.init()
                },
                destroy: function () {
                    this.observer.destroy()
                }
            }
        },
        D = {
            update: function (e) {
                var t = this,
                    a = t.params,
                    i = a.slidesPerView,
                    s = a.slidesPerGroup,
                    r = a.centeredSlides,
                    n = t.params.virtual,
                    o = n.addSlidesBefore,
                    l = n.addSlidesAfter,
                    d = t.virtual,
                    p = d.from,
                    c = d.to,
                    u = d.slides,
                    h = d.slidesGrid,
                    v = d.renderSlide,
                    f = d.offset;
                t.updateActiveIndex();
                var m, g, b, w = t.activeIndex || 0;
                m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
                var y = Math.max((w || 0) - b, 0),
                    x = Math.min((w || 0) + g, u.length - 1),
                    T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

                function E() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (V.extend(t.virtual, {
                        from: y,
                        to: x,
                        offset: T,
                        slidesGrid: t.slidesGrid
                    }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: y,
                    to: x,
                    slides: function () {
                        for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void E();
                var S = [],
                    C = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var M = p; M <= c; M += 1)(M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var k = 0; k < u.length; k += 1) y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k)));
                C.forEach(function (e) {
                    t.$wrapperEl.append(v(u[e], e))
                }), S.sort(function (e, t) {
                    return e < t
                }).forEach(function (e) {
                    t.$wrapperEl.prepend(v(u[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
            },
            renderSlide: function (e, t) {
                var a = this,
                    i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
            },
            appendSlide: function (e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            },
            prependSlide: function (e) {
                var t = this;
                if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                    var a = t.virtual.cache,
                        i = {};
                    Object.keys(a).forEach(function (e) {
                        i[e + 1] = a[e]
                    }), t.virtual.cache = i
                }
                t.virtual.update(!0), t.slideNext(0)
            }
        },
        O = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function () {
                var e = this;
                V.extend(e, {
                    virtual: {
                        update: D.update.bind(e),
                        appendSlide: D.appendSlide.bind(e),
                        prependSlide: D.prependSlide.bind(e),
                        renderSlide: D.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        V.extend(e.params, t), V.extend(e.originalParams, t), e.virtual.update()
                    }
                },
                setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        A = {
            handle: function (e) {
                var t = this,
                    a = t.rtlTranslate,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var r = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = Y.innerWidth,
                            o = Y.innerHeight,
                            l = t.$el.offset();
                        a && (l.left -= t.$el[0].scrollLeft);
                        for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
                            var c = d[p];
                            0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
                        }
                        if (!r) return
                    }
                    t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
                }
            },
            enable: function () {
                this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function () {
                this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        H = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function () {
                V.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: A.enable.bind(this),
                        disable: A.disable.bind(this),
                        handle: A.handle.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var B = {
            lastScrollTime: V.now(),
            event: -1 < Y.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
                var e = "onwheel",
                    t = e in f;
                if (!t) {
                    var a = f.createElement("div");
                    a.setAttribute(e, "return;"), t = "function" == typeof a[e]
                }
                return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel",
            normalize: function (e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: a,
                    pixelX: i,
                    pixelY: s
                }
            },
            handleMouseEnter: function () {
                this.mouseEntered = !0
            },
            handleMouseLeave: function () {
                this.mouseEntered = !1
            },
            handle: function (e) {
                var t = e,
                    a = this,
                    i = a.params.mousewheel;
                if (!a.mouseEntered && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var s = 0,
                    r = a.rtlTranslate ? -1 : 1,
                    n = B.normalize(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
                        s = n.pixelX * r
                    } else {
                        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
                        s = n.pixelY
                    }
                else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
                if (0 === s) return !0;
                if (i.invert && (s = -s), a.params.freeMode) {
                    a.params.loop && a.loopFix();
                    var o = a.getTranslate() + s * i.sensitivity,
                        l = a.isBeginning,
                        d = a.isEnd;
                    if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = V.nextTick(function () {
                            a.slideToClosest()
                        }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
                } else {
                    if (60 < V.now() - a.mousewheel.lastScrollTime)
                        if (s < 0)
                            if (a.isEnd && !a.params.loop || a.animating) {
                                if (i.releaseOnEdges) return !0
                            } else a.slideNext(), a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges) return !0
                    } else a.slidePrev(), a.emit("scroll", t);
                    a.mousewheel.lastScrollTime = (new Y.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function () {
                var e = this;
                if (!B.event) return !1;
                if (e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(B.event, e.mousewheel.handle), e.mousewheel.enabled = !0
            },
            disable: function () {
                var e = this;
                if (!B.event) return !1;
                if (!e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(B.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
            }
        },
        G = {
            update: function () {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            init: function () {
                var e, t, a = this,
                    i = a.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", function (e) {
                    e.preventDefault(), a.isEnd && !a.params.loop || a.slideNext()
                }), t && 0 < t.length && t.on("click", function (e) {
                    e.preventDefault(), a.isBeginning && !a.params.loop || a.slidePrev()
                }), V.extend(a.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function () {
                var e = this.navigation,
                    t = e.$nextEl,
                    a = e.$prevEl;
                t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), a && a.length && (a.off("click"), a.removeClass(this.params.navigation.disabledClass))
            }
        },
        N = {
            update: function () {
                var e = this,
                    t = e.rtl,
                    s = e.params.pagination;
                if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                        var o, l, d, p = e.pagination.bullets;
                        if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) {
                            var a = L(t),
                                i = a.index();
                            i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                        });
                        else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
                            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
                            c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                        }
                        if (s.dynamicBullets) {
                            var v = Math.min(p.length, s.dynamicMainBullets + 4),
                                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                m = t ? "right" : "left";
                            p.css(e.isHorizontal() ? m : "top", f + "px")
                        }
                    }
                    if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
                        var g;
                        g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        var b = (r + 1) / n,
                            w = 1,
                            y = 1;
                        "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
                    }
                    "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
                }
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function () {
                var a = this,
                    e = a.params.pagination;
                if (e.el) {
                    var t = L(e.el);
                    0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
                        e.preventDefault();
                        var t = L(this).index() * a.params.slidesPerGroup;
                        a.params.loop && (t += a.loopedSlides), a.slideTo(t)
                    }), V.extend(a.pagination, {
                        $el: t,
                        el: t[0]
                    }))
                }
            },
            destroy: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
                }
            }
        },
        X = {
            setTranslate: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtlTranslate,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = s,
                        p = (r - s) * i;
                    a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (R.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (R.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
                        o[0].style.opacity = 0, o.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function (e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    a[0].style.width = "", a[0].style.height = "";
                    var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        o = n * (r / e.size);
                    s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), V.extend(t, {
                        trackSize: r,
                        divider: n,
                        moveDivider: o,
                        dragSize: s
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function (e) {
                var t, a = this,
                    i = a.scrollbar,
                    s = a.rtlTranslate,
                    r = i.$el,
                    n = i.dragSize,
                    o = i.trackSize;
                t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
            },
            onDragStart: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function (e) {
                var t = this.scrollbar,
                    a = this.$wrapperEl,
                    i = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = V.nextTick(function () {
                    i.css("opacity", 0), i.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
            },
            enableDraggable: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEvents,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!R.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        o = !(!R.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    R.touch || !R.pointerEvents && !R.prefixedPointerEvents ? (R.touch && (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !R.touch && m.ios) && (r.addEventListener("mousedown", e.scrollbar.onDragStart, n), f.addEventListener("mousemove", e.scrollbar.onDragMove, n), f.addEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
                }
            },
            disableDraggable: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEvents,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!R.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        o = !(!R.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    R.touch || !R.pointerEvents && !R.prefixedPointerEvents ? (R.touch && (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !R.touch && m.ios) && (r.removeEventListener("mousedown", e.scrollbar.onDragStart, n), f.removeEventListener("mousemove", e.scrollbar.onDragMove, n), f.removeEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
                }
            },
            init: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.$el,
                        i = e.params.scrollbar,
                        s = L(i.el);
                    e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                    var r = s.find("." + e.params.scrollbar.dragClass);
                    0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), V.extend(t, {
                        $el: s,
                        el: s[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }), i.draggable && t.enableDraggable()
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable()
            }
        },
        F = {
            setTransform: function (e, t) {
                var a = this.rtl,
                    i = L(e),
                    s = a ? -1 : 1,
                    r = i.attr("data-swiper-parallax") || "0",
                    n = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y"),
                    l = i.attr("data-swiper-parallax-scale"),
                    d = i.attr("data-swiper-parallax-opacity");
                if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
                    var p = d - (d - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = p
                }
                if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
                else {
                    var c = l - (l - 1) * (1 - Math.abs(t));
                    i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function () {
                var i = this,
                    e = i.$el,
                    t = i.slides,
                    s = i.progress,
                    r = i.snapGrid;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                    i.parallax.setTransform(t, s)
                }), t.each(function (e, t) {
                    var a = t.progress;
                    1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                        i.parallax.setTransform(t, a)
                    })
                })
            },
            setTransition: function (s) {
                void 0 === s && (s = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                    var a = L(t),
                        i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                    0 === s && (i = 0), a.transition(i)
                })
            }
        },
        q = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
            },
            onGestureStart: function (e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !R.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, s.scaleStart = q.getDistanceBetweenTouches(e)
                }
                s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
            },
            onGestureChange: function (e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!R.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    a.fakeGestureMoved = !0, i.scaleMove = q.getDistanceBetweenTouches(e)
                }
                i.$imageEl && 0 !== i.$imageEl.length && (R.gestures ? this.zoom.scale = e.scale * a.currentScale : a.scale = i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
            },
            onGestureEnd: function (e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!R.gestures) {
                    if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;
                    a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
                }
                i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
            },
            onTouchStart: function (e) {
                var t = this.zoom,
                    a = t.gesture,
                    i = t.image;
                a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function (e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = V.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = V.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var n = s.width * a.scale,
                        o = s.height * a.scale;
                    if (!(n < i.slideWidth && o < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
                            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
                    a.isTouched = !1, a.isMoved = !1;
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    a.currentX = o, a.currentY = d;
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
                }
            },
            onTransitionEnd: function () {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function (e) {
                var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this,
                    b = g.zoom,
                    w = g.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
            },
            out: function () {
                var e = this,
                    t = e.zoom,
                    a = e.params.zoom,
                    i = t.gesture;
                i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function () {
                var e = this,
                    t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var a = !("touchstart" !== e.touchEvents.start || !R.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    R.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            },
            disable: function () {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var a = !("touchstart" !== e.touchEvents.start || !R.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    R.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            }
        },
        W = {
            loadInSlide: function (e, l) {
                void 0 === l && (l = !0);
                var d = this,
                    p = d.params.lazy;
                if (void 0 !== e && 0 !== d.slides.length) {
                    var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                        t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                    !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) {
                        var i = L(t);
                        i.addClass(p.loadingClass);
                        var s = i.attr("data-background"),
                            r = i.attr("data-src"),
                            n = i.attr("data-srcset"),
                            o = i.attr("data-sizes");
                        d.loadImage(i[0], r || s, n, o, !1, function () {
                            if (null != d && d && (!d || d.params) && !d.destroyed) {
                                if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                                    var e = c.attr("data-swiper-slide-index");
                                    if (c.hasClass(d.params.slideDuplicateClass)) {
                                        var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                        d.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        d.lazy.loadInSlide(a.index(), !1)
                                    }
                                }
                                d.emit("lazyImageReady", c[0], i[0])
                            }
                        }), d.emit("lazyImageLoad", c[0], i[0])
                    })
                }
            },
            load: function () {
                var i = this,
                    t = i.$wrapperEl,
                    a = i.params,
                    s = i.slides,
                    e = i.activeIndex,
                    r = i.virtual && a.virtual.enabled,
                    n = a.lazy,
                    o = a.slidesPerView;

                function l(e) {
                    if (r) {
                        if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (s[e]) return !0;
                    return !1
                }

                function d(e) {
                    return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
                }
                if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
                    var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
                    i.lazy.loadInSlide(a)
                });
                else if (1 < o)
                    for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
                else i.lazy.loadInSlide(e);
                if (n.loadPrevNext)
                    if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
                        for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
                        for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
                    } else {
                        var g = t.children("." + a.slideNextClass);
                        0 < g.length && i.lazy.loadInSlide(d(g));
                        var b = t.children("." + a.slidePrevClass);
                        0 < b.length && i.lazy.loadInSlide(d(b))
                    }
            }
        },
        j = {
            LinearSpline: function (e, t) {
                var a, i, s, r, n, o = function (e, t) {
                    for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
                    return a
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new j.LinearSpline(t.slidesGrid, e.slidesGrid) : new j.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function (e, t) {
                var a, i, s = this,
                    r = s.controller.control;

                function n(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]);
                else r instanceof S && t !== r && n(r)
            },
            setTransition: function (t, e) {
                var a, i = this,
                    s = i.controller.control;

                function r(e) {
                    e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && V.nextTick(function () {
                        e.updateAutoHeight()
                    }), e.$wrapperEl.transitionEnd(function () {
                        s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
                    }))
                }
                if (Array.isArray(s))
                    for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]);
                else s instanceof S && e !== s && r(s)
            }
        },
        U = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function (e) {
                var t = this,
                    a = t.params.a11y;
                if (13 === e.keyCode) {
                    var i = L(e.target);
                    t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function () {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
                }
            },
            updatePagination: function () {
                var i = this,
                    s = i.params.a11y;
                i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
                    var a = L(t);
                    i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                })
            },
            init: function () {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, a, i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function () {
                var e, t, a = this;
                a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
            }
        },
        K = {
            init: function () {
                var e = this;
                if (e.params.history) {
                    if (!Y.history || !Y.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0, t.paths = K.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || Y.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function () {
                this.params.history.replaceState || Y.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function () {
                this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function () {
                var e = Y.location.pathname.slice(1).split("/").filter(function (e) {
                        return "" !== e
                    }),
                    t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function (e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var a = this.slides.eq(t),
                        i = K.slugify(a.attr("data-history"));
                    Y.location.pathname.includes(e) || (i = e + "/" + i);
                    var s = Y.history.state;
                    s && s.value === i || (this.params.history.replaceState ? Y.history.replaceState({
                        value: i
                    }, null, i) : Y.history.pushState({
                        value: i
                    }, null, i))
                }
            },
            slugify: function (e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function (e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (K.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            var o = n.index();
                            i.slideTo(o, e, a)
                        }
                    } else i.slideTo(0, e, a)
            }
        },
        _ = {
            onHashCange: function () {
                var e = this,
                    t = f.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === a) return;
                    e.slideTo(a)
                }
            },
            setHash: function () {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && Y.history && Y.history.replaceState) Y.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        f.location.hash = a || ""
                    }
            },
            init: function () {
                var e = this;
                if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                    e.hashNavigation.initialized = !0;
                    var t = f.location.hash.replace("#", "");
                    if (t)
                        for (var a = 0, i = e.slides.length; a < i; a += 1) {
                            var s = e.slides.eq(a);
                            if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                                var r = s.index();
                                e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
                            }
                        }
                    e.params.hashNavigation.watchState && L(Y).on("hashchange", e.hashNavigation.onHashCange)
                }
            },
            destroy: function () {
                this.params.hashNavigation.watchState && L(Y).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        Z = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = V.nextTick(function () {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, a)
            },
            start: function () {
                var e = this;
                return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
            },
            stop: function () {
                var e = this;
                return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        Q = {
            setTranslate: function () {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || (r = s, s = 0);
                    var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: n
                    }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                }
            },
            setTransition: function (e) {
                var a = this,
                    t = a.slides,
                    i = a.$wrapperEl;
                if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    t.transitionEnd(function () {
                        if (!s && a && !a.destroyed) {
                            s = !0, a.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
                        }
                    })
                }
            }
        },
        J = {
            setTranslate: function () {
                var e, t = this,
                    a = t.$el,
                    i = t.$wrapperEl,
                    s = t.slides,
                    r = t.width,
                    n = t.height,
                    o = t.rtlTranslate,
                    l = t.size,
                    d = t.params.cubeEffect,
                    p = t.isHorizontal(),
                    c = t.virtual && t.params.virtual.enabled,
                    u = 0;
                d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: r + "px"
                })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
                for (var h = 0; h < s.length; h += 1) {
                    var v = s.eq(h),
                        f = h;
                    c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && (m = -m, g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
                    var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                        var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), d.shadow)
                    if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                            k = d.shadowScale,
                            z = d.shadowScale / M,
                            P = d.shadowOffset;
                        e.transform("scale3d(" + k + ", 1, " + z + ") translate3d(0px, " + (n / 2 + P) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
                    } var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
            },
            setTransition: function (e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        ee = {
            setTranslate: function () {
                for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                    var s = t.eq(i),
                        r = s[0].progress;
                    e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
                        var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
                    }
                    s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function (e) {
                var a = this,
                    t = a.slides,
                    i = a.activeIndex,
                    s = a.$wrapperEl;
                if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    t.eq(i).transitionEnd(function () {
                        if (!r && a && !a.destroyed) {
                            r = !0, a.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                        }
                    })
                }
            }
        },
        te = {
            setTranslate: function () {
                for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
                    var v = i.eq(u),
                        f = r[u],
                        m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
                        g = o ? p * m : 0,
                        b = o ? 0 : p * m,
                        w = -c * Math.abs(m),
                        y = o ? 0 : n.stretch * m,
                        x = o ? n.stretch * m : 0;
                    Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
                    var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                    if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
                        var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
                    }
                }(R.pointerEvents || R.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        ae = {
            init: function () {
                var e = this,
                    t = e.params.thumbs,
                    a = e.constructor;
                t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, V.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), V.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : V.isObject(t.swiper) && (e.thumbs.swiper = new a(V.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            },
            onThumbClick: function () {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var a = t.clickedIndex;
                    if (null != a) {
                        var i;
                        if (i = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
                            var s = e.activeIndex;
                            e.slides.eq(s).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, s = e.activeIndex);
                            var r = e.slides.eq(s).prevAll('[data-swiper-slide-index="' + i + '"]').eq(0).index(),
                                n = e.slides.eq(s).nextAll('[data-swiper-slide-index="' + i + '"]').eq(0).index();
                            i = void 0 === r ? n : void 0 === n ? r : n - s < s - r ? n : r
                        }
                        e.slideTo(i)
                    }
                }
            },
            update: function (e) {
                var t = this,
                    a = t.thumbs.swiper;
                if (a) {
                    var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                    if (t.realIndex !== a.realIndex) {
                        var s, r = a.activeIndex;
                        if (a.params.loop) {
                            a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
                            var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                            s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                        } else s = t.realIndex;
                        a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
                    }
                    var l = 1,
                        d = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop)
                        for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
                    else
                        for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
                }
            }
        },
        ie = [C, M, k, z, $, O, H, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function () {
                var e = this;
                V.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: B.enable.bind(e),
                        disable: B.disable.bind(e),
                        handle: B.handle.bind(e),
                        handleMouseEnter: B.handleMouseEnter.bind(e),
                        handleMouseLeave: B.handleMouseLeave.bind(e),
                        lastScrollTime: V.now()
                    }
                })
            },
            on: {
                init: function () {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function () {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function () {
                V.extend(this, {
                    navigation: {
                        init: G.init.bind(this),
                        update: G.update.bind(this),
                        destroy: G.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function () {
                    this.navigation.update()
                },
                fromEdge: function () {
                    this.navigation.update()
                },
                destroy: function () {
                    this.navigation.destroy()
                },
                click: function (e) {
                    var t = this.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    !this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function (e) {
                        return e
                    },
                    formatFractionTotal: function (e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function () {
                var e = this;
                V.extend(e, {
                    pagination: {
                        init: N.init.bind(e),
                        render: N.render.bind(e),
                        update: N.update.bind(e),
                        destroy: N.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function () {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function () {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function () {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function () {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function () {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function () {
                    this.pagination.destroy()
                },
                click: function (e) {
                    var t = this;
                    t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function () {
                var e = this;
                V.extend(e, {
                    scrollbar: {
                        init: X.init.bind(e),
                        destroy: X.destroy.bind(e),
                        updateSize: X.updateSize.bind(e),
                        setTranslate: X.setTranslate.bind(e),
                        setTransition: X.setTransition.bind(e),
                        enableDraggable: X.enableDraggable.bind(e),
                        disableDraggable: X.disableDraggable.bind(e),
                        setDragPosition: X.setDragPosition.bind(e),
                        onDragStart: X.onDragStart.bind(e),
                        onDragMove: X.onDragMove.bind(e),
                        onDragEnd: X.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function () {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function () {
                    this.scrollbar.updateSize()
                },
                resize: function () {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function () {
                    this.scrollbar.updateSize()
                },
                setTranslate: function () {
                    this.scrollbar.setTranslate()
                },
                setTransition: function (e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function () {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function () {
                V.extend(this, {
                    parallax: {
                        setTransform: F.setTransform.bind(this),
                        setTranslate: F.setTranslate.bind(this),
                        setTransition: F.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function () {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTranslate: function () {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTransition: function (e) {
                    this.params.parallax && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function () {
                var t = this,
                    a = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
                    a[e] = q[e].bind(t)
                }), V.extend(t, {
                    zoom: a
                })
            },
            on: {
                init: function () {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function () {
                    this.zoom.disable()
                },
                touchStart: function (e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function (e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function (e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function () {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function () {
                V.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: W.load.bind(this),
                        loadInSlide: W.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function () {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function () {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function () {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function () {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function () {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function () {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function () {
                var e = this;
                V.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: j.getInterpolateFunction.bind(e),
                        setTranslate: j.setTranslate.bind(e),
                        setTransition: j.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function (e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function (e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function () {
                var t = this;
                V.extend(t, {
                    a11y: {
                        liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(U).forEach(function (e) {
                    t.a11y[e] = U[e].bind(t)
                })
            },
            on: {
                init: function () {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function () {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function () {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function () {
                var e = this;
                V.extend(e, {
                    history: {
                        init: K.init.bind(e),
                        setHistory: K.setHistory.bind(e),
                        setHistoryPopState: K.setHistoryPopState.bind(e),
                        scrollToSlide: K.scrollToSlide.bind(e),
                        destroy: K.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function () {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function () {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function () {
                var e = this;
                V.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: _.init.bind(e),
                        destroy: _.destroy.bind(e),
                        setHash: _.setHash.bind(e),
                        onHashCange: _.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function () {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function () {
                var t = this;
                V.extend(t, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: Z.run.bind(t),
                        start: Z.start.bind(t),
                        stop: Z.stop.bind(t),
                        pause: Z.pause.bind(t),
                        onTransitionEnd: function (e) {
                            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function () {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function (e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function () {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                destroy: function () {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function () {
                V.extend(this, {
                    fadeEffect: {
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        V.extend(e.params, t), V.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function (e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function () {
                V.extend(this, {
                    cubeEffect: {
                        setTranslate: J.setTranslate.bind(this),
                        setTransition: J.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        V.extend(e.params, t), V.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function (e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function () {
                V.extend(this, {
                    flipEffect: {
                        setTranslate: ee.setTranslate.bind(this),
                        setTransition: ee.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        V.extend(e.params, t), V.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function (e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function () {
                V.extend(this, {
                    coverflowEffect: {
                        setTranslate: te.setTranslate.bind(this),
                        setTransition: te.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function () {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function (e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function () {
                V.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: ae.init.bind(this),
                        update: ae.update.bind(this),
                        onThumbClick: ae.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function (e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function () {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ie), S
});
//# sourceMappingURL=swiper.min.js.map
;
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function (b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.5", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function (b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
        }))
    }

    function d(b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function (b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.5", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "disable-ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
    "use strict";

    function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.5", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
            d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);;;
(function ($, window, document) {
    var pluginNS = "mThumbnailScroller",
        pluginPfx = "mTS",
        defaultSelector = ".mThumbnailScroller",
        defaults = {
            setTop: 0,
            setLeft: 0,
            type: "hover-50",
            axis: "x",
            speed: 15,
            contentTouchScroll: 25,
            markup: {
                buttonsPlaceholder: false,
                buttonsHTML: {
                    up: "SVG set 1",
                    down: "SVG set 1",
                    left: "SVG set 1",
                    right: "SVG set 1"
                }
            },
            advanced: {
                autoExpandHorizontalScroll: true,
                updateOnContentResize: true,
                updateOnImageLoad: true
            },
            theme: "none",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: true
            }
        },
        totalInstances = 0,
        liveTimers = {},
        oldIE = (window.attachEvent && !window.addEventListener) ? 1 : 0,
        touchActive = false,
        touchi, classes = ["mTS_disabled", "mTS_destroyed", "mTS_no_scroll"],
        methods = {
            init: function (options) {
                var options = $.extend(true, {}, defaults, options),
                    selector = _selector.call(this);
                if (options.live) {
                    var liveSelector = options.liveSelector || this.selector || defaultSelector,
                        $liveSelector = $(liveSelector);
                    if (options.live === "off") {
                        removeLiveTimers(liveSelector);
                        return;
                    }
                    liveTimers[liveSelector] = setTimeout(function () {
                        $liveSelector.mThumbnailScroller(options);
                        if (options.live === "once" && $liveSelector.length) {
                            removeLiveTimers(liveSelector);
                        }
                    }, 500);
                } else {
                    removeLiveTimers(liveSelector);
                }
                options.speed = options.speed === 0 ? 100 : options.speed;
                _theme(options);
                return $(selector).each(function () {
                    var $this = $(this);
                    if (!$this.data(pluginPfx)) {
                        $this.data(pluginPfx, {
                            idx: ++totalInstances,
                            opt: options,
                            html: null,
                            overflowed: null,
                            bindEvents: false,
                            tweenRunning: false,
                            langDir: $this.css("direction"),
                            cbOffsets: null,
                            trigger: null
                        });
                        var o = $this.data(pluginPfx).opt,
                            htmlDataAxis = $this.data("mts-axis"),
                            htmlDataType = $this.data("mts-type"),
                            htmlDataTheme = $this.data("mts-theme");
                        if (htmlDataAxis) {
                            o.axis = htmlDataAxis;
                        }
                        if (htmlDataType) {
                            o.type = htmlDataType;
                        }
                        if (htmlDataTheme) {
                            o.theme = htmlDataTheme;
                            _theme(o);
                        }
                        _pluginMarkup.call(this);
                        methods.update.call(null, $this);
                    }
                });
            },
            update: function (el) {
                var selector = el || _selector.call(this);
                return $(selector).each(function () {
                    var $this = $(this);
                    if ($this.data(pluginPfx)) {
                        var d = $this.data(pluginPfx),
                            o = d.opt,
                            mTS_container = $("#mTS_" + d.idx + "_container");
                        if (!mTS_container.length) {
                            return;
                        }
                        if (d.tweenRunning) {
                            _stop($this);
                        }
                        if ($this.hasClass(classes[0])) {
                            $this.removeClass(classes[0]);
                        }
                        if ($this.hasClass(classes[1])) {
                            $this.removeClass(classes[1]);
                        }
                        _maxHeight.call(this);
                        _expandContentHorizontally.call(this);
                        d.overflowed = _overflowed.call(this);
                        _buttonsVisibility.call(this);
                        _bindEvents.call(this);
                        var to = [(mTS_container[0].offsetTop), (mTS_container[0].offsetLeft)];
                        if (o.axis !== "x") {
                            if (!d.overflowed[0]) {
                                _resetContentPosition.call(this);
                                if (o.axis === "y") {
                                    _scrollTo($this, "0", {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    });
                                    _unbindEvents.call(this);
                                } else if (o.axis === "yx" && d.overflowed[1]) {
                                    _scrollTo($this, to[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    });
                                }
                            } else {
                                _scrollTo($this, to[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                });
                            }
                        }
                        if (o.axis !== "y") {
                            if (!d.overflowed[1]) {
                                _resetContentPosition.call(this);
                                if (o.axis === "x") {
                                    _scrollTo($this, "0", {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    });
                                    _unbindEvents.call(this);
                                } else if (o.axis === "yx" && d.overflowed[0]) {
                                    _scrollTo($this, to[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    });
                                }
                            } else {
                                _scrollTo($this, to[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                });
                            }
                        }
                        if (!d.overflowed[0] && !d.overflowed[1]) {
                            $this.addClass(classes[2]);
                        } else {
                            $this.removeClass(classes[2]);
                        }
                        _autoUpdate.call(this);
                    }
                });
            },
            scrollTo: function (val, options) {
                if (typeof val == "undefined" || val == null) {
                    return;
                }
                var selector = _selector.call(this);
                return $(selector).each(function () {
                    var $this = $(this);
                    if ($this.data(pluginPfx)) {
                        var d = $this.data(pluginPfx),
                            o = d.opt,
                            methodDefaults = {
                                trigger: "external",
                                speed: o.speed,
                                duration: 1000,
                                easing: "easeInOut",
                                timeout: 60,
                                callbacks: true,
                                onStart: true,
                                onUpdate: true,
                                onComplete: true
                            },
                            methodOptions = $.extend(true, {}, methodDefaults, options),
                            to = _arr.call(this, val),
                            dur = methodOptions.duration ? methodOptions.duration : 7000 / (methodOptions.speed || 1);
                        to[0] = _to.call(this, to[0], "y");
                        to[1] = _to.call(this, to[1], "x");
                        methodOptions.dur = dur > 0 && dur < 17 ? 17 : dur;
                        setTimeout(function () {
                            if (to[0] !== null && typeof to[0] !== "undefined" && o.axis !== "x" && d.overflowed[0]) {
                                methodOptions.dir = "y";
                                methodOptions.overwrite = "all";
                                _scrollTo($this, -to[0].toString(), methodOptions);
                            }
                            if (to[1] !== null && typeof to[1] !== "undefined" && o.axis !== "y" && d.overflowed[1]) {
                                methodOptions.dir = "x";
                                methodOptions.overwrite = "none";
                                _scrollTo($this, -to[1].toString(), methodOptions);
                            }
                        }, methodOptions.timeout);
                    }
                });
            },
            stop: function () {
                var selector = _selector.call(this);
                return $(selector).each(function () {
                    var $this = $(this);
                    if ($this.data(pluginPfx)) {
                        _stop($this);
                    }
                });
            },
            disable: function (r) {
                var selector = _selector.call(this);
                return $(selector).each(function () {
                    var $this = $(this);
                    if ($this.data(pluginPfx)) {
                        var d = $this.data(pluginPfx),
                            o = d.opt;
                        _autoUpdate.call(this, "remove");
                        _unbindEvents.call(this);
                        if (r) {
                            _resetContentPosition.call(this);
                        }
                        _buttonsVisibility.call(this, true);
                        $this.addClass(classes[0]);
                    }
                });
            },
            destroy: function () {
                var selector = _selector.call(this);
                return $(selector).each(function () {
                    var $this = $(this);
                    if ($this.data(pluginPfx)) {
                        var d = $this.data(pluginPfx),
                            o = d.opt,
                            mTS_wrapper = $("#mTS_" + d.idx),
                            mTS_container = $("#mTS_" + d.idx + "_container"),
                            mTS_buttons = $("#mTS_" + d.idx + "_buttonUp,#mTS_" + d.idx + "_buttonDown,#mTS_" + d.idx + "_buttonLeft,#mTS_" + d.idx + "_buttonRight");
                        if (o.live) {
                            removeLiveTimers(selector);
                        }
                        _autoUpdate.call(this, "remove");
                        _unbindEvents.call(this);
                        _resetContentPosition.call(this);
                        $this.removeData(pluginPfx);
                        _delete(this, "mts");
                        mTS_buttons.remove();
                        mTS_wrapper.replaceWith(d.html);
                        $this.removeClass(pluginNS + " _" + pluginPfx + "_" + d.idx + " " + pluginPfx + "-" + o.theme + " " + classes[2] + " " + classes[0]).addClass(classes[1]);
                    }
                });
            }
        },
        _selector = function () {
            return (typeof $(this) !== "object" || $(this).length < 1) ? defaultSelector : this;
        },
        _theme = function (obj) {
            var buttonsPlaceholderOutside = ["buttons-out"],
                buttonsHtmlSet2 = ["buttons-in"],
                buttonsHtmlSet3 = ["buttons-out"],
                typeHover85 = ["hover-classic"],
                typeHoverPrecise = ["hover-full"];
            obj.markup.buttonsPlaceholder = $.inArray(obj.theme, buttonsPlaceholderOutside) > -1 ? "outside" : obj.markup.buttonsPlaceholder;
            obj.markup.buttonsHTML = $.inArray(obj.theme, buttonsHtmlSet2) > -1 ? {
                up: "SVG set 2",
                down: "SVG set 2",
                left: "SVG set 2",
                right: "SVG set 2"
            } : $.inArray(obj.theme, buttonsHtmlSet3) > -1 ? {
                up: "SVG set 3",
                down: "SVG set 3",
                left: "SVG set 3",
                right: "SVG set 3"
            } : obj.markup.buttonsHTML;
            obj.type = $.inArray(obj.theme, typeHover85) > -1 ? "hover-85" : $.inArray(obj.theme, typeHoverPrecise) > -1 ? "hover-precise" : obj.type;
            obj.speed = $.inArray(obj.theme, typeHover85) > -1 ? 60 : $.inArray(obj.theme, typeHoverPrecise) > -1 ? 10 : obj.speed;
        },
        removeLiveTimers = function (selector) {
            if (liveTimers[selector]) {
                clearTimeout(liveTimers[selector]);
                _delete(liveTimers, selector);
            }
        },
        _pluginMarkup = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                wrapperClass = o.axis === "yx" ? "mTS_vertical_horizontal" : o.axis === "x" ? "mTS_horizontal" : "mTS_vertical",
                thumbsContainer = o.markup.thumbnailsContainer || "ul",
                thumbContainer = o.markup.thumbnailContainer || "li",
                thumbElement = o.markup.thumbnailElement || "img";
            d.html = $this.children().clone(true, true);
            if (!$this.find(thumbsContainer).length) {
                var thumbsAutoContainer = $this.find("li").length ? "<ul class='" + pluginPfx + "AutoContainer' />" : "<div class='" + pluginPfx + "AutoContainer' />";
                $this.wrapInner(thumbsAutoContainer);
                thumbsContainer = "." + pluginPfx + "AutoContainer";
            }
            if (o.setWidth) {
                $this.css("width", o.setWidth);
            }
            if (o.setHeight) {
                $this.css("height", o.setHeight);
            }
            o.setLeft = (o.axis !== "y" && d.langDir === "rtl") ? "-989999px" : o.setLeft;
            $this.addClass(pluginNS + " _" + pluginPfx + "_" + d.idx + " " + pluginPfx + "-" + o.theme).find(thumbsContainer).wrap("<div id='mTS_" + d.idx + "' class='mTSWrapper " + wrapperClass + "' />").addClass(pluginPfx + "Container").attr("id", "mTS_" + d.idx + "_container").css({
                "position": "relative",
                "top": o.setTop,
                "left": o.setLeft
            }).find(thumbContainer).addClass(pluginPfx + "ThumbContainer").find(thumbElement).addClass(pluginPfx + "Thumb");
            _scrollButtons.call(this);
        },
        _expandContentHorizontally = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                mTS_container = $("#mTS_" + d.idx + "_container");
            if (o.advanced.autoExpandHorizontalScroll && o.axis !== "y") {
                mTS_container.css({
                    "position": "absolute",
                    "width": "auto"
                }).wrap("<div class='mTS_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    "width": (Math.ceil(mTS_container[0].getBoundingClientRect().right) - Math.floor(mTS_container[0].getBoundingClientRect().left)),
                    "position": "relative"
                }).unwrap();
            }
        },
        _scrollButtons = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                placeholder = !o.markup.buttonsPlaceholder ? $("#mTS_" + d.idx) : o.markup.buttonsPlaceholder === "outside" ? $this : $(o.markup.buttonsPlaceholder),
                btnHTML = ["<a href='#' id='mTS_" + d.idx + "_buttonUp' class='mTSButton mTSButtonUp'><span class='mTSButtonIconContainer'>" + _scrollButtonsIcons.call(this, "up") + "</span></a>", "<a href='#' id='mTS_" + d.idx + "_buttonDown' class='mTSButton mTSButtonDown'><span class='mTSButtonIconContainer'>" + _scrollButtonsIcons.call(this, "down") + "</span></a>", "<a href='#' id='mTS_" + d.idx + "_buttonLeft' class='mTSButton mTSButtonLeft'><span class='mTSButtonIconContainer'>" + _scrollButtonsIcons.call(this, "left") + "</span></a>", "<a href='#' id='mTS_" + d.idx + "_buttonRight' class='mTSButton mTSButtonRight'><span class='mTSButtonIconContainer'>" + _scrollButtonsIcons.call(this, "right") + "</span></a>"],
                btn = [(o.axis === "x" ? btnHTML[2] : btnHTML[0]), (o.axis === "x" ? btnHTML[3] : btnHTML[1])];
            if (placeholder.hasClass(pluginNS) && placeholder.css("position") === "static") {
                placeholder.css("position", "relative");
            }
            if (o.type.indexOf("click") !== -1) {
                if (o.axis !== "x") {
                    placeholder.append(btnHTML[0] + btnHTML[1]);
                }
                if (o.axis !== "y") {
                    placeholder.append(btnHTML[2] + btnHTML[3]);
                }
            }
        },
        _scrollButtonsIcons = function (b) {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                btn = o.markup.buttonsHTML,
                i = btn[b] === "SVG set 1" ? 0 : btn[b] === "SVG set 2" ? 1 : btn[b] === "SVG set 3" ? 2 : btn[b] === "SVG set 4" ? 3 : btn[b] === "SVG set 5" ? 4 : null;
            switch (b) {
                case "up":
                    return i === null ? btn[b] : oldIE ? "&uarr;" : _icons(btn[b])[i][0];
                    break;
                case "down":
                    return i === null ? btn[b] : oldIE ? "&darr;" : _icons(btn[b])[i][1];
                    break;
                case "left":
                    return i === null ? btn[b] : oldIE ? "&larr;" : _icons(btn[b])[i][2];
                    break;
                case "right":
                    return i === null ? btn[b] : oldIE ? "&rarr;" : _icons(btn[b])[i][3];
                    break;
            }
        },
        _icons = function () {
            var svgo = "<svg version='1.1' viewBox='0 0 24 24' preserveAspectRatio='xMinYMin meet' class='mTSButtonIcon'><g><line stroke-width='1' x1='' y1='' x2='' y2='' stroke='#449FDB' opacity=''></line></g>",
                svgc = "</svg>";
            return [[svgo + "<path d='M20.561 9.439l-7.5-7.5c-0.586-0.586-1.535-0.586-2.121 0l-7.5 7.5c-0.586 0.586-0.586 1.536 0 2.121s1.536 0.586 2.121 0l4.939-4.939v14.379c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5v-14.379l4.939 4.939c0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439c0.586-0.586 0.586-1.535 0-2.121z'></path>" + svgc, svgo + "<path d='M3.439 14.561l7.5 7.5c0.586 0.586 1.536 0.586 2.121 0l7.5-7.5c0.586-0.586 0.586-1.536 0-2.121s-1.536-0.586-2.121 0l-4.939 4.939v-14.379c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5v14.379l-4.939-4.939c-0.293-0.293-0.677-0.439-1.061-0.439s-0.768 0.146-1.061 0.439c-0.586 0.586-0.586 1.536 0 2.121z'></path>" + svgc, svgo + "<path d='M9.439 3.439l-7.5 7.5c-0.586 0.586-0.586 1.536 0 2.121l7.5 7.5c0.586 0.586 1.536 0.586 2.121 0s0.586-1.536 0-2.121l-4.939-4.939h14.379c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5h-14.379l4.939-4.939c0.293-0.293 0.439-0.677 0.439-1.061s-0.146-0.768-0.439-1.061c-0.586-0.586-1.536-0.586-2.121 0z'></path>" + svgc, svgo + "<path d='M14.561 20.561l7.5-7.5c0.586-0.586 0.586-1.536 0-2.121l-7.5-7.5c-0.586-0.586-1.536-0.586-2.121 0s-0.586 1.536 0 2.121l4.939 4.939h-14.379c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5h14.379l-4.939 4.939c-0.293 0.293-0.439 0.677-0.439 1.061s0.146 0.768 0.439 1.061c0.586 0.586 1.536 0.586 2.121 0z'></path>" + svgc], [svgo + "<path d='M18.58 13.724c-0.488-0.502-5.634-5.402-5.634-5.402-0.262-0.268-0.604-0.402-0.946-0.402-0.343 0-0.685 0.134-0.946 0.402 0 0-5.146 4.901-5.635 5.402-0.488 0.502-0.522 1.404 0 1.939 0.523 0.534 1.252 0.577 1.891 0l4.69-4.496 4.688 4.496c0.641 0.577 1.37 0.534 1.891 0 0.523-0.536 0.491-1.439 0-1.939z'</path>" + svgc, svgo + "<path d='M18.58 10.276c-0.488 0.502-5.634 5.404-5.634 5.404-0.262 0.268-0.604 0.401-0.946 0.401-0.343 0-0.685-0.133-0.946-0.401 0 0-5.146-4.902-5.635-5.404-0.488-0.502-0.522-1.403 0-1.939 0.523-0.535 1.252-0.577 1.891 0l4.69 4.498 4.688-4.496c0.641-0.577 1.37-0.535 1.891 0 0.523 0.535 0.491 1.438 0 1.938z'></path>" + svgc, svgo + "<path d='M13.724 5.419c-0.502 0.49-5.402 5.635-5.402 5.635-0.268 0.262-0.401 0.604-0.401 0.946s0.133 0.684 0.401 0.946c0 0 4.901 5.146 5.402 5.634 0.502 0.49 1.404 0.523 1.939 0 0.534-0.522 0.576-1.25-0.001-1.89l-4.496-4.69 4.496-4.69c0.577-0.641 0.535-1.369 0.001-1.891-0.536-0.522-1.439-0.49-1.939 0z'></path>" + svgc, svgo + "<path d='M10.276 5.419c0.502 0.49 5.402 5.635 5.402 5.635 0.269 0.262 0.402 0.604 0.402 0.946s-0.133 0.684-0.402 0.946c0 0-4.901 5.146-5.402 5.634-0.502 0.49-1.403 0.523-1.939 0-0.535-0.522-0.577-1.25 0-1.89l4.498-4.69-4.496-4.69c-0.577-0.641-0.535-1.369 0-1.891s1.438-0.49 1.938 0z'></path>" + svgc], [svgo + "<path d='M20.902 17.279c0.325 0.322 0.851 0.322 1.175 0 0.325-0.322 0.325-0.841 0-1.163l-9.49-9.396c-0.324-0.322-0.85-0.322-1.174 0l-9.49 9.396c-0.324 0.322-0.325 0.841 0 1.163s0.85 0.322 1.175 0l8.902-8.569 8.902 8.569z'></path>" + svgc, svgo + "<path d='M3.098 6.721c-0.325-0.322-0.851-0.322-1.175 0-0.324 0.32-0.324 0.841 0 1.163l9.49 9.396c0.325 0.322 0.85 0.322 1.175 0l9.49-9.396c0.324-0.322 0.325-0.841 0-1.163s-0.852-0.322-1.175-0.001l-8.903 8.569-8.902-8.568z'></path>" + svgc, svgo + "<path d='M17.279 20.902c0.322 0.325 0.322 0.85 0 1.175s-0.841 0.325-1.163 0l-9.396-9.488c-0.322-0.325-0.322-0.851 0-1.175l9.396-9.49c0.322-0.325 0.841-0.325 1.163 0s0.322 0.85 0 1.175l-8.568 8.902 8.568 8.902z'</path>" + svgc, svgo + "<path d='M6.72 20.902c-0.322 0.325-0.322 0.85 0 1.175s0.841 0.325 1.163 0l9.396-9.488c0.322-0.325 0.322-0.851 0-1.175l-9.396-9.49c-0.322-0.325-0.841-0.325-1.163 0s-0.322 0.85 0 1.175l8.568 8.902-8.568 8.902z'</path>" + svgc], [svgo + "<path d='M12 0l-12 12h7.5v12l9 0v-12h7.5z'></path>" + svgc, svgo + "<path d='M12 24l12-12h-7.5v-12l-9-0v12h-7.5z'></path>" + svgc, svgo + "<path d='M0 12l12 12v-7.5h12l0-9h-12v-7.5z'></path>" + svgc, svgo + "<path d='M24 12l-12-12v7.5h-12l-0 9h12v7.5z'></path>" + svgc], [svgo + "<path d='M6.48 16.8h11.040l-5.521-9.6z'></path>" + svgc, svgo + "<path d='M17.52 7.201l-11.040-0.001 5.52 9.6z'></path>" + svgc, svgo + "<path d='M16.799 6.48l0.001 11.040-9.6-5.52z'></path>" + svgc, svgo + "<path d='M7.201 6.48l-0.001 11.040 9.6-5.52z'></path>" + svgc]];
        },
        _maxHeight = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                mTS_wrapper = $("#mTS_" + d.idx),
                mh = $this.css("max-height"),
                pct = mh.indexOf("%") !== -1,
                bs = $this.css("box-sizing");
            if (mh !== "none") {
                var val = pct ? $this.parent().height() * parseInt(mh) / 100 : parseInt(mh);
                if (bs === "border-box") {
                    val -= (($this.innerHeight() - $this.height()) + ($this.outerHeight() - $this.innerHeight()));
                }
                mTS_wrapper.css("max-height", Math.round(val));
            }
        },
        _overflowed = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                mTS_wrapper = $("#mTS_" + d.idx),
                mTS_container = $("#mTS_" + d.idx + "_container");
            return [mTS_container.height() > mTS_wrapper.height(), mTS_container.width() > mTS_wrapper.width()];
        },
        _resetContentPosition = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                mTS_wrapper = $("#mTS_" + d.idx),
                mTS_container = $("#mTS_" + d.idx + "_container");
            _stop($this);
            if ((o.axis !== "x" && !d.overflowed[0]) || (o.axis === "y" && d.overflowed[0])) {
                mTS_container.css("top", 0);
            }
            if ((o.axis !== "y" && !d.overflowed[1]) || (o.axis === "x" && d.overflowed[1])) {
                var rp = d.langDir === "rtl" ? mTS_wrapper.width() - mTS_container.width() : 0;
                mTS_container.css("left", rp);
            }
        },
        _bindEvents = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt;
            if (!d.bindEvents) {
                if (o.contentTouchScroll) {
                    _contentDraggable.call(this);
                }
                if (o.type.indexOf("hover") !== -1) {
                    if (o.type === "hover-precise") {
                        _hoverPrecise.call(this);
                    } else {
                        _hover.call(this);
                    }
                } else if (o.type.indexOf("click") !== -1) {
                    _click.call(this);
                }
                d.bindEvents = true;
            }
        },
        _unbindEvents = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                namespace = pluginPfx + "_" + d.idx,
                sel = $("#mTS_" + d.idx + ",#mTS_" + d.idx + "_container,#mTS_" + d.idx + "_buttonUp,#mTS_" + d.idx + "_buttonDown,#mTS_" + d.idx + "_buttonLeft,#mTS_" + d.idx + "_buttonRight"),
                mTS_container = $("#mTS_" + d.idx + "_container");
            if (d.bindEvents) {
                sel.each(function () {
                    $(this).unbind("." + namespace);
                });
                clearTimeout(mTS_container[0].onCompleteTimeout);
                _delete(mTS_container[0], "onCompleteTimeout");
                d.bindEvents = false;
            }
        },
        _buttonsVisibility = function (disabled, hideBtn, dir) {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt;
            if (o.type.indexOf("click") !== -1) {
                if (!dir) {
                    dir = o.axis;
                }
                var mTS_buttons = [$("#mTS_" + d.idx + "_buttonUp"), $("#mTS_" + d.idx + "_buttonDown"), $("#mTS_" + d.idx + "_buttonLeft"), $("#mTS_" + d.idx + "_buttonRight")],
                    hideClass = pluginPfx + "-hidden";
                if (dir !== "x") {
                    if (d.overflowed[0] && !disabled && !hideBtn) {
                        sel = [!d.overflowed[1] ? mTS_buttons[2].add(mTS_buttons[3]) : null, mTS_buttons[0].add(mTS_buttons[1])];
                    } else {
                        sel = hideBtn === 1 ? [mTS_buttons[0], mTS_buttons[1]] : hideBtn === 2 ? [mTS_buttons[1], mTS_buttons[0]] : [mTS_buttons[0].add(mTS_buttons[1]), null];
                    }
                }
                if (dir !== "y") {
                    if (d.overflowed[1] && !disabled && !hideBtn) {
                        sel = [!d.overflowed[0] ? mTS_buttons[0].add(mTS_buttons[1]) : null, mTS_buttons[2].add(mTS_buttons[3])];
                    } else {
                        sel = hideBtn === 1 ? [mTS_buttons[2], mTS_buttons[3]] : hideBtn === 2 ? [mTS_buttons[3], mTS_buttons[2]] : [mTS_buttons[2].add(mTS_buttons[3]), null];
                    }
                }
                if (sel[0]) {
                    sel[0].addClass(hideClass);
                }
                if (sel[1]) {
                    sel[1].removeClass(hideClass);
                }
            }
        },
        _coordinates = function (e) {
            var t = e.type;
            switch (t) {
                case "pointerdown":
                case "MSPointerDown":
                case "pointermove":
                case "MSPointerMove":
                case "pointerup":
                case "MSPointerUp":
                    return [e.originalEvent.pageY, e.originalEvent.pageX];
                    break;
                case "touchstart":
                case "touchmove":
                case "touchend":
                    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    return [touch.pageY, touch.pageX];
                    break;
                default:
                    return [e.pageY, e.pageX];
            }
        },
        _inputType = function (e) {
            return touchi || e.type.indexOf("touch") !== -1 || (typeof e.pointerType !== "undefined" && (e.pointerType === 2 || e.pointerType === "touch")) ? "touch" : "mouse";
        },
        _contentDraggable = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                namespace = pluginPfx + "_" + d.idx,
                mTS_wrapper = $("#mTS_" + d.idx),
                mTS_container = $("#mTS_" + d.idx + "_container"),
                dragY, dragX, touchStartY, touchStartX, touchMoveY = [],
                touchMoveX = [],
                startTime, runningTime, endTime, distance, speed, amount, durA = 0,
                durB, overwrite = o.axis === "yx" ? "none" : "all",
                touchIntent = [];
            mTS_container.bind("touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function (e) {
                if (!_pointerTouch(e) || touchActive) {
                    return;
                }
                var offset = mTS_container.offset();
                dragY = _coordinates(e)[0] - offset.top;
                dragX = _coordinates(e)[1] - offset.left;
                touchIntent = [_coordinates(e)[0], _coordinates(e)[1]];
            }).bind("touchmove." + namespace + " pointermove." + namespace + " MSPointerMove." + namespace, function (e) {
                if (!_pointerTouch(e) || touchActive) {
                    return;
                }
                e.stopImmediatePropagation();
                runningTime = _getTime();
                var offset = mTS_wrapper.offset(),
                    y = _coordinates(e)[0] - offset.top,
                    x = _coordinates(e)[1] - offset.left,
                    easing = "linearOut";
                touchMoveY.push(y);
                touchMoveX.push(x);
                touchIntent[2] = Math.abs(_coordinates(e)[0] - touchIntent[0]);
                touchIntent[3] = Math.abs(_coordinates(e)[1] - touchIntent[1]);
                if (d.overflowed[0]) {
                    var limit = mTS_wrapper.height() - mTS_container.height(),
                        prevent = ((dragY - y) > 0 && (y - dragY) > limit && (touchIntent[3] * 2 < touchIntent[2]));
                }
                if (d.overflowed[1]) {
                    var limitX = mTS_wrapper.width() - mTS_container.width(),
                        preventX = ((dragX - x) > 0 && (x - dragX) > limitX && (touchIntent[2] * 2 < touchIntent[3]));
                }
                if (prevent || preventX) {
                    e.preventDefault();
                }
                amount = o.axis === "yx" ? [(dragY - y), (dragX - x)] : o.axis === "x" ? [null, (dragX - x)] : [(dragY - y), null];
                mTS_container[0].idleTimer = 250;
                if (d.overflowed[0]) {
                    _drag(amount[0], durA, easing, "y", "all");
                }
                if (d.overflowed[1]) {
                    _drag(amount[1], durA, easing, "x", overwrite);
                }
            });
            mTS_wrapper.bind("touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function (e) {
                if (!_pointerTouch(e) || touchActive) {
                    return;
                }
                e.stopImmediatePropagation();
                touchi = true;
                _stop($this);
                startTime = _getTime();
                var offset = mTS_wrapper.offset();
                touchStartY = _coordinates(e)[0] - offset.top;
                touchStartX = _coordinates(e)[1] - offset.left;
                touchMoveY = [];
                touchMoveX = [];
            }).bind("touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace, function (e) {
                if (!_pointerTouch(e) || touchActive) {
                    return;
                }
                e.stopImmediatePropagation();
                endTime = _getTime();
                var offset = mTS_wrapper.offset(),
                    y = _coordinates(e)[0] - offset.top,
                    x = _coordinates(e)[1] - offset.left;
                if ((endTime - runningTime) > 30) {
                    return;
                }
                speed = 1000 / (endTime - startTime);
                var easing = "easeOut",
                    slow = speed < 2.5,
                    diff = slow ? [touchMoveY[touchMoveY.length - 2], touchMoveX[touchMoveX.length - 2]] : [0, 0];
                distance = slow ? [(y - diff[0]), (x - diff[1])] : [y - touchStartY, x - touchStartX];
                var absDistance = [Math.abs(distance[0]), Math.abs(distance[1])];
                speed = slow ? [Math.abs(distance[0] / 4), Math.abs(distance[1] / 4)] : [speed, speed];
                var a = [Math.abs(mTS_container[0].offsetTop) - (distance[0] * _m((absDistance[0] / speed[0]), speed[0])), Math.abs(mTS_container[0].offsetLeft) - (distance[1] * _m((absDistance[1] / speed[1]), speed[1]))];
                amount = o.axis === "yx" ? [a[0], a[1]] : o.axis === "x" ? [null, a[1]] : [a[0], null];
                durB = [(absDistance[0] * 4) + (o.speed * 60), (absDistance[1] * 4) + (o.speed * 60)];
                var md = parseInt(o.contentTouchScroll) || 0;
                amount[0] = absDistance[0] > md ? amount[0] : 0;
                amount[1] = absDistance[1] > md ? amount[1] : 0;
                if (d.overflowed[0]) {
                    _drag(amount[0], durB[0], easing, "y", overwrite);
                }
                if (d.overflowed[1]) {
                    _drag(amount[1], durB[1], easing, "x", overwrite);
                }
            });

            function _m(ds, s) {
                var r = [s * 1.5, s * 2, s / 1.5, s / 2];
                if (ds > 90) {
                    return s > 4 ? r[0] : r[3];
                } else if (ds > 60) {
                    return s > 3 ? r[3] : r[2];
                } else if (ds > 30) {
                    return s > 8 ? r[1] : s > 6 ? r[0] : s > 4 ? s : r[2];
                } else {
                    return s > 8 ? s : r[3];
                }
            }

            function _drag(amount, dur, easing, dir, overwrite) {
                if (!amount) {
                    return;
                }
                _scrollTo($this, -amount.toString(), {
                    dur: dur,
                    easing: easing,
                    dir: dir,
                    overwrite: overwrite
                });
            }
        },
        _hoverPrecise = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                namespace = pluginPfx + "_" + d.idx,
                mTS_wrapper = $("#mTS_" + d.idx),
                mTS_container = $("#mTS_" + d.idx + "_container"),
                evt = window.navigator.pointerEnabled ? "pointermove" : window.navigator.msPointerEnabled ? "MSPointerMove" : "mousemove",
                cursor, dest, to;
            mTS_wrapper.bind(evt + "." + namespace, function (e) {
                if (_inputType(e.originalEvent || e) === "touch" || (!d.overflowed[0] && !d.overflowed[1])) {
                    return;
                }
                e.preventDefault();
                var wrapperHeight = mTS_wrapper.height(),
                    containerHeight = mTS_container.height(),
                    wrapperWidth = mTS_wrapper.width(),
                    containerWidth = mTS_container.width(),
                    speed = ((containerWidth / wrapperWidth) * 7000) / (o.speed || 1);
                cursor = [_coordinates(e)[0] - mTS_wrapper.offset().top, _coordinates(e)[1] - mTS_wrapper.offset().left];
                dest = [cursor[0] / mTS_wrapper.height(), cursor[1] / mTS_wrapper.width()];
                to = [Math.round(-((containerHeight - wrapperHeight) * (dest[0]))), Math.round(-((containerWidth - wrapperWidth) * (dest[1])))];
                if (o.axis !== "x" && d.overflowed[0]) {
                    _scrollTo($this, to[0].toString(), {
                        dir: "y",
                        dur: speed,
                        easing: "easeOut"
                    });
                }
                if (o.axis !== "y" && d.overflowed[1]) {
                    _scrollTo($this, to[1].toString(), {
                        dir: "x",
                        dur: speed,
                        easing: "easeOut"
                    });
                }
            });
        },
        _hover = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                namespace = pluginPfx + "_" + d.idx,
                mTS_wrapper = $("#mTS_" + d.idx),
                mTS_container = $("#mTS_" + d.idx + "_container"),
                evt = window.navigator.pointerEnabled ? ["pointerover", "pointermove", "pointerout"] : window.navigator.msPointerEnabled ? ["MSPointerOver", "MSPointerMove", "MSPointerOut"] : ["mouseenter", "mousemove", "mouseleave"],
                rAF, cursor, dest, to, fps, delay = (!window.requestAnimationFrame) ? 17 : 0,
                speed = o.speed,
                pct = parseInt(o.type.split("hover-")[1]) || 1,
                idle = speed * pct / 100,
                _pause = [0, 0];
            mTS_wrapper.bind(evt[0] + "." + namespace, function (e) {
                if (_inputType(e.originalEvent || e) === "touch" || (!d.overflowed[0] && !d.overflowed[1])) {
                    return;
                }
                _on();
            }).bind(evt[1] + "." + namespace, function (e) {
                if (_inputType(e.originalEvent || e) === "touch" || (!d.overflowed[0] && !d.overflowed[1])) {
                    return;
                }
                cursor = [_coordinates(e)[0] - mTS_wrapper.offset().top, _coordinates(e)[1] - mTS_wrapper.offset().left];
                dest = [Math.round((Math.cos((cursor[0] / mTS_wrapper.height()) * Math.PI)) * speed), Math.round((Math.cos((cursor[1] / mTS_wrapper.width()) * Math.PI)) * speed)];
                dest[0] = dest[0] <= -idle ? dest[0] += idle : dest[0] >= idle ? dest[0] -= idle : dest[0] = 0;
                dest[1] = dest[1] <= -idle ? dest[1] += idle : dest[1] >= idle ? dest[1] -= idle : dest[1] = 0;
                _pause = [0, 0];
            }).bind(evt[2] + "." + namespace, function (e) {
                if (_inputType(e.originalEvent || e) === "touch" || (!d.overflowed[0] && !d.overflowed[1])) {
                    return;
                }
                _off();
            });

            function _on() {
                if (mTS_wrapper[0].rAF) {
                    return;
                }
                rAF = (!window.requestAnimationFrame) ? function (f) {
                    return setTimeout(f, 17);
                } : window.requestAnimationFrame;
                mTS_wrapper[0].rAF = rAF(_anim);
            }

            function _off() {
                if (mTS_wrapper[0].rAF == null) {
                    return;
                }
                if (!window.requestAnimationFrame) {
                    clearTimeout(mTS_wrapper[0].rAF);
                } else {
                    window.cancelAnimationFrame(mTS_wrapper[0].rAF);
                }
                clearTimeout(fps);
                mTS_wrapper[0].rAF = null;
            }

            function _anim() {
                if (touchi) {
                    return;
                }
                to = [dest[0] + mTS_container[0].offsetTop, dest[1] + mTS_container[0].offsetLeft];
                var limit = [mTS_wrapper.height() - mTS_container.height(), mTS_wrapper.width() - mTS_container.width()];
                if (o.axis !== "x" && d.overflowed[0]) {
                    to[0] = to[0] > 0 ? 0 : to[0] < limit[0] ? limit[0] : to[0];
                    if (dest[0] && !_pause[0]) {
                        _scrollTo($this, to[0], {
                            dir: "y",
                            dur: 0,
                            easing: "linear"
                        });
                    }
                    if (to[0] >= 0 || to[0] <= limit[0]) {
                        _pause[0] = 1;
                    }
                }
                if (o.axis !== "y" && d.overflowed[1]) {
                    to[1] = to[1] > 0 ? 0 : to[1] < limit[1] ? limit[1] : to[1];
                    if (dest[1] && !_pause[1]) {
                        _scrollTo($this, to[1], {
                            dir: "x",
                            dur: 0,
                            easing: "linear"
                        });
                    }
                    if (to[1] >= 0 || to[1] <= limit[1]) {
                        _pause[1] = 1;
                    }
                }
                fps = setTimeout(function () {
                    mTS_wrapper[0].rAF = rAF(_anim);
                }, delay);
            }
        },
        _click = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                namespace = pluginPfx + "_" + d.idx,
                mTS_wrapper = $("#mTS_" + d.idx),
                mTS_container = $("#mTS_" + d.idx + "_container"),
                mTS_buttons = [$("#mTS_" + d.idx + "_buttonUp"), $("#mTS_" + d.idx + "_buttonDown"), $("#mTS_" + d.idx + "_buttonLeft"), $("#mTS_" + d.idx + "_buttonRight")],
                sel = mTS_buttons[0].add(mTS_buttons[1]).add(mTS_buttons[2]).add(mTS_buttons[3]);
            sel.bind("click." + namespace, function (e) {
                if (!_mouseBtnLeft(e) || (!d.overflowed[0] && !d.overflowed[1])) {
                    return;
                }
                e.preventDefault();
                if (d.tweenRunning) {
                    return;
                }
                if (o.axis !== "x" && d.overflowed[0]) {
                    var h = mTS_wrapper.height(),
                        dir = o.type === "click-thumb" ? 0 : $(this).hasClass("mTSButtonUp") ? "+=" : $(this).hasClass("mTSButtonDown") ? "-=" : 0;
                    if (o.type !== "click-thumb") {
                        var pct = parseInt(o.type.split("click-")[1]) || 1,
                            amount = dir ? [dir + (h * pct / 100), null] : 0;
                    } else {
                        var firstThumb = _firstLast.call($this[0])[0],
                            lastThumb = _firstLast.call($this[0])[1];
                        if ($(this).hasClass("mTSButtonDown")) {
                            var amount = lastThumb ? (lastThumb[0].offsetTop - parseInt(lastThumb.css("margin-bottom"))) - h : 989999;
                        } else if ($(this).hasClass("mTSButtonUp")) {
                            var amount = firstThumb ? firstThumb[0].offsetTop - parseInt(firstThumb.css("margin-top")) : 0;
                            if (mTS_container[0].offsetTop === 0) {
                                return;
                            }
                        }
                    }
                }
                if (o.axis !== "y" && d.overflowed[1]) {
                    var w = mTS_wrapper.width(),
                        dir = o.type === "click-thumb" ? 0 : $(this).hasClass("mTSButtonLeft") ? "+=" : $(this).hasClass("mTSButtonRight") ? "-=" : 0;
                    if (o.type !== "click-thumb") {
                        var pct = parseInt(o.type.split("click-")[1]) || 1,
                            amount = dir ? [null, dir + (w * pct / 100)] : amount;
                    } else {
                        var firstThumb = _firstLast.call($this[0])[2],
                            lastThumb = _firstLast.call($this[0])[3];
                        if ($(this).hasClass("mTSButtonRight")) {
                            var amount = lastThumb ? (lastThumb[0].offsetLeft - parseInt(lastThumb.css("margin-right"))) - w : 989999;
                        } else if ($(this).hasClass("mTSButtonLeft")) {
                            var amount = firstThumb ? firstThumb[0].offsetLeft - parseInt(firstThumb.css("margin-left")) : 0;
                            if (mTS_container[0].offsetLeft === 0) {
                                return;
                            }
                        }
                    }
                }
                if (amount !== null) {
                    methods.scrollTo.call($this[0], amount, {
                        duration: 0
                    });
                }
            });
        },
        _firstLast = function () {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                mTS_container = $("#mTS_" + d.idx + "_container"),
                mTS_wrapper = $("#mTS_" + d.idx),
                mTS_item = mTS_container.find(".mTSThumbContainer"),
                f, l, fx, lx;
            mTS_item.each(function () {
                var el = $(this),
                    pos = [Math.round((el.offset().top - mTS_container.offset().top) + mTS_container[0].offsetTop), Math.round((el.offset().left - mTS_container.offset().left) + mTS_container[0].offsetLeft)];
                if (pos[0] <= 0 - parseInt(el.css("margin-top"))) {
                    f = pos[0] === 0 ? mTS_item.eq(el.index() - 1) : mTS_item.eq(el.index());
                } else if (pos[0] <= mTS_wrapper.height() + parseInt(el.css("margin-bottom"))) {
                    var i = mTS_item.eq(el.index() + 1);
                    l = i.length ? i : null;
                }
                if (pos[1] <= 0 - parseInt(el.css("margin-left"))) {
                    fx = pos[1] === 0 ? mTS_item.eq(el.index() - 1) : mTS_item.eq(el.index());
                } else if (pos[1] <= mTS_wrapper.width() + parseInt(el.css("margin-right"))) {
                    var ix = mTS_item.eq(el.index() + 1);
                    lx = ix.length ? ix : null;
                }
            });
            return [f, l, fx, lx];
        },
        _arr = function (val) {
            var o = $(this).data(pluginPfx).opt,
                vals = [];
            if (typeof val === "function") {
                val = val();
            }
            if (!(val instanceof Array)) {
                vals[0] = val.y ? val.y : val.x || o.axis === "x" ? null : val;
                vals[1] = val.x ? val.x : val.y || o.axis === "y" ? null : val;
            } else {
                vals = val.length > 1 ? [val[0], val[1]] : o.axis === "x" ? [null, val[0]] : [val[0], null];
            }
            if (typeof vals[0] === "function") {
                vals[0] = vals[0]();
            }
            if (typeof vals[1] === "function") {
                vals[1] = vals[1]();
            }
            return vals;
        },
        _to = function (val, dir) {
            if (val == null || typeof val == "undefined") {
                return;
            }
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                mTS_wrapper = $("#mTS_" + d.idx),
                mTS_container = $("#mTS_" + d.idx + "_container"),
                t = typeof val;
            if (!dir) {
                dir = o.axis === "x" ? "x" : "y";
            }
            var contentLength = dir === "x" ? mTS_container.width() : mTS_container.height(),
                contentOffset = dir === "x" ? mTS_container.offset().left : mTS_container.offset().top,
                contentPos = dir === "x" ? mTS_container[0].offsetLeft : mTS_container[0].offsetTop,
                cssProp = dir === "x" ? "left" : "top";
            switch (t) {
                case "function":
                    return val();
                    break;
                case "object":
                    if (val.nodeType) {
                        var objOffset = dir === "x" ? $(val).offset().left : $(val).offset().top;
                    } else if (val.jquery) {
                        if (!val.length) {
                            return;
                        }
                        var objOffset = dir === "x" ? val.offset().left : val.offset().top;
                    }
                    return objOffset - contentOffset;
                    break;
                case "string":
                case "number":
                    if (_isNumeric(val)) {
                        return Math.abs(val);
                    } else if (val.indexOf("%") !== -1) {
                        return Math.abs(contentLength * parseInt(val) / 100);
                    } else if (val.indexOf("-=") !== -1) {
                        return Math.abs(contentPos - parseInt(val.split("-=")[1]));
                    } else if (val.indexOf("+=") !== -1) {
                        var p = (contentPos + parseInt(val.split("+=")[1]));
                        return p >= 0 ? 0 : Math.abs(p);
                    } else if (val.indexOf("px") !== -1 && _isNumeric(val.split("px")[0])) {
                        return Math.abs(val.split("px")[0]);
                    } else {
                        if (val === "top" || val === "left") {
                            return 0;
                        } else if (val === "bottom") {
                            return Math.abs(mTS_wrapper.height() - mTS_container.height());
                        } else if (val === "right") {
                            return Math.abs(mTS_wrapper.width() - mTS_container.width());
                        } else if (val === "first" || val === "last") {
                            var obj = mTS_container.find(":" + val),
                                objOffset = dir === "x" ? $(obj).offset().left : $(obj).offset().top;
                            return objOffset - contentOffset;
                        } else {
                            if ($(val).length) {
                                var objOffset = dir === "x" ? $(val).offset().left : $(val).offset().top;
                                return objOffset - contentOffset;
                            } else {
                                mTS_container.css(cssProp, val);
                                methods.update.call(null, $this[0]);
                                return;
                            }
                        }
                    }
                    break;
            }
        },
        _autoUpdate = function (rem) {
            var $this = $(this),
                d = $this.data(pluginPfx),
                o = d.opt,
                mTS_wrapper = $("#mTS_" + d.idx),
                mTS_container = $("#mTS_" + d.idx + "_container");
            if (rem) {
                clearTimeout(mTS_container[0].autoUpdate);
                _delete(mTS_container[0], "autoUpdate");
                return;
            }
            var oldSelSize = sizesSum(),
                newSelSize, os = [mTS_container.height(), mTS_container.width(), mTS_wrapper.height(), mTS_wrapper.width(), $this.height(), $this.width()],
                ns, oldImgsLen = imgSum(),
                newImgsLen;
            upd();

            function upd() {
                clearTimeout(mTS_container[0].autoUpdate);
                mTS_container[0].autoUpdate = setTimeout(function () {
                    if (o.advanced.updateOnSelectorChange) {
                        newSelSize = sizesSum();
                        if (newSelSize !== oldSelSize) {
                            doUpd();
                            oldSelSize = newSelSize;
                            return;
                        }
                    }
                    if (o.advanced.updateOnContentResize) {
                        ns = [mTS_container.height(), mTS_container.width(), mTS_wrapper.height(), mTS_wrapper.width(), $this.height(), $this.width()];
                        if (ns[0] !== os[0] || ns[1] !== os[1] || ns[2] !== os[2] || ns[3] !== os[3] || ns[4] !== os[4] || ns[5] !== os[5]) {
                            doUpd();
                            os = ns;
                        }
                    }
                    if (o.advanced.updateOnImageLoad) {
                        newImgsLen = imgSum();
                        if (newImgsLen !== oldImgsLen) {
                            mTS_container.find("img").each(function () {
                                imgLoader(this.src);
                            });
                            oldImgsLen = newImgsLen;
                        }
                    }
                    if (o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad) {
                        upd();
                    }
                }, 60);
            }

            function imgSum() {
                var total = 0
                if (o.advanced.updateOnImageLoad) {
                    total = mTS_container.find("img").length;
                }
                return total;
            }

            function imgLoader(src) {
                var img = new Image();

                function createDelegate(contextObject, delegateMethod) {
                    return function () {
                        return delegateMethod.apply(contextObject, arguments);
                    }
                }

                function imgOnLoad() {
                    this.onload = null;
                    doUpd();
                }
                img.onload = createDelegate(img, imgOnLoad);
                img.src = src;
            }

            function sizesSum() {
                if (o.advanced.updateOnSelectorChange === true) {
                    o.advanced.updateOnSelectorChange = "*";
                }
                var total = 0,
                    sel = mTS_container.find(o.advanced.updateOnSelectorChange);
                if (o.advanced.updateOnSelectorChange && sel.length > 0) {
                    sel.each(function () {
                        total += $(this).height() + $(this).width();
                    });
                }
                return total;
            }

            function doUpd() {
                clearTimeout(mTS_container[0].autoUpdate);
                methods.update.call(null, $this[0]);
            }
        },
        _stop = function (el) {
            var d = el.data(pluginPfx),
                sel = $("#mTS_" + d.idx + "_container");
            sel.each(function () {
                _stopTween.call(this);
            });
        },
        _scrollTo = function (el, to, options) {
            var d = el.data(pluginPfx),
                o = d.opt,
                defaults = {
                    trigger: "internal",
                    dir: "y",
                    easing: "easeOut",
                    dur: o.speed * 60,
                    overwrite: "all",
                    callbacks: true,
                    onStart: true,
                    onUpdate: true,
                    onComplete: true
                },
                options = $.extend(defaults, options),
                mTS_wrapper = $("#mTS_" + d.idx),
                mTS_container = $("#mTS_" + d.idx + "_container"),
                totalScrollOffsets = o.callbacks.onTotalScrollOffset ? _arr.call(el, o.callbacks.onTotalScrollOffset) : [0, 0],
                totalScrollBackOffsets = o.callbacks.onTotalScrollBackOffset ? _arr.call(el, o.callbacks.onTotalScrollBackOffset) : [0, 0];
            d.trigger = options.trigger;
            if (mTS_wrapper.scrollTop() !== 0 || mTS_wrapper.scrollLeft() !== 0) {
                mTS_wrapper.scrollTop(0).scrollLeft(0);
            }
            switch (options.dir) {
                case "x":
                    var property = "left",
                        contentPos = mTS_container[0].offsetLeft,
                        limit = mTS_wrapper.width() - mTS_container.width(),
                        scrollTo = to,
                        tso = totalScrollOffsets[1],
                        tsbo = totalScrollBackOffsets[1],
                        totalScrollOffset = tso > 0 ? tso : 0,
                        totalScrollBackOffset = tsbo > 0 ? tsbo : 0;
                    break;
                case "y":
                    var property = "top",
                        contentPos = mTS_container[0].offsetTop,
                        limit = mTS_wrapper.height() - mTS_container.height(),
                        scrollTo = to,
                        tso = totalScrollOffsets[0],
                        tsbo = totalScrollBackOffsets[0],
                        totalScrollOffset = tso > 0 ? tso : 0,
                        totalScrollBackOffset = tsbo > 0 ? tsbo : 0;
                    break;
            }
            if (scrollTo >= 0) {
                scrollTo = 0;
                _buttonsVisibility.call(el, false, 1, options.dir);
            } else if (scrollTo <= limit) {
                scrollTo = limit;
                _buttonsVisibility.call(el, false, 2, options.dir);
            } else {
                scrollTo = scrollTo;
                _buttonsVisibility.call(el, false, 0, options.dir);
            }
            if (!el[0].mts) {
                _mts();
                if (_cb("onInit")) {
                    o.callbacks.onInit.call(el[0]);
                }
            }
            clearTimeout(mTS_container[0].onCompleteTimeout);
            if (!d.tweenRunning && ((contentPos === 0 && scrollTo >= 0) || (contentPos === limit && scrollTo <= limit))) {
                return;
            }
            _tweenTo(mTS_container[0], property, Math.round(scrollTo), options.dur, options.easing, options.overwrite, {
                onStart: function () {
                    if (options.callbacks && options.onStart && !d.tweenRunning) {
                        if (_cb("onScrollStart")) {
                            _mts();
                            o.callbacks.onScrollStart.call(el[0]);
                        }
                        d.tweenRunning = true;
                        d.cbOffsets = _cbOffsets();
                    }
                },
                onUpdate: function () {
                    if (options.callbacks && options.onUpdate) {
                        if (_cb("whileScrolling")) {
                            _mts();
                            o.callbacks.whileScrolling.call(el[0]);
                        }
                    }
                },
                onComplete: function () {
                    if (options.callbacks && options.onComplete) {
                        if (o.axis === "yx") {
                            clearTimeout(mTS_container[0].onCompleteTimeout);
                        }
                        var t = mTS_container[0].idleTimer || 0;
                        mTS_container[0].onCompleteTimeout = setTimeout(function () {
                            if (_cb("onScroll")) {
                                _mts();
                                o.callbacks.onScroll.call(el[0]);
                            }
                            if (_cb("onTotalScroll") && scrollTo <= limit + totalScrollOffset && d.cbOffsets[0]) {
                                _mts();
                                o.callbacks.onTotalScroll.call(el[0]);
                            }
                            if (_cb("onTotalScrollBack") && scrollTo >= -totalScrollBackOffset && d.cbOffsets[1]) {
                                _mts();
                                o.callbacks.onTotalScrollBack.call(el[0]);
                            }
                            d.tweenRunning = false;
                            mTS_container[0].idleTimer = 0;
                        }, t);
                    }
                }
            });

            function _cb(cb) {
                return d && o.callbacks[cb] && typeof o.callbacks[cb] === "function";
            }

            function _cbOffsets() {
                return [o.callbacks.alwaysTriggerOffsets || contentPos >= limit + tso, o.callbacks.alwaysTriggerOffsets || contentPos <= -tsbo];
            }

            function _mts() {
                var cp = [mTS_container[0].offsetTop, mTS_container[0].offsetLeft],
                    cl = [mTS_container.height(), mTS_container.width()],
                    pl = [mTS_wrapper.height(), mTS_wrapper.width()];
                el[0].mts = {
                    content: mTS_container,
                    top: cp[0],
                    left: cp[1],
                    topPct: Math.round((100 * Math.abs(cp[0])) / (Math.abs(cl[0]) - pl[0])),
                    leftPct: Math.round((100 * Math.abs(cp[1])) / (Math.abs(cl[1]) - pl[1])),
                    direction: options.dir
                };
            }
        },
        _tweenTo = function (el, prop, to, duration, easing, overwrite, callbacks) {
            if (!el._mTween) {
                el._mTween = {
                    top: {},
                    left: {}
                };
            }
            var callbacks = callbacks || {},
                onStart = callbacks.onStart || function () {},
                onUpdate = callbacks.onUpdate || function () {},
                onComplete = callbacks.onComplete || function () {},
                startTime = _getTime(),
                _delay, progress = 0,
                from = el.offsetTop,
                elStyle = el.style,
                _request, tobj = el._mTween[prop];
            if (prop === "left") {
                from = el.offsetLeft;
            }
            var diff = to - from;
            tobj.stop = 0;
            if (overwrite !== "none") {
                _cancelTween();
            }
            _startTween();

            function _step() {
                if (tobj.stop) {
                    return;
                }
                if (!progress) {
                    onStart.call();
                }
                progress = _getTime() - startTime;
                _tween();
                if (progress >= tobj.time) {
                    tobj.time = (progress > tobj.time) ? progress + _delay - (progress - tobj.time) : progress + _delay - 1;
                    if (tobj.time < progress + 1) {
                        tobj.time = progress + 1;
                    }
                }
                if (tobj.time < duration) {
                    tobj.id = _request(_step);
                } else {
                    onComplete.call();
                }
            }

            function _tween() {
                if (duration > 0) {
                    tobj.currVal = _ease(tobj.time, from, diff, duration, easing);
                    elStyle[prop] = Math.round(tobj.currVal) + "px";
                } else {
                    elStyle[prop] = to + "px";
                }
                onUpdate.call();
            }

            function _startTween() {
                _delay = 1000 / 60;
                tobj.time = progress + _delay;
                _request = (!window.requestAnimationFrame) ? function (f) {
                    _tween();
                    return setTimeout(f, 0.01);
                } : window.requestAnimationFrame;
                tobj.id = _request(_step);
            }

            function _cancelTween() {
                if (tobj.id == null) {
                    return;
                }
                if (!window.requestAnimationFrame) {
                    clearTimeout(tobj.id);
                } else {
                    window.cancelAnimationFrame(tobj.id);
                }
                tobj.id = null;
            }

            function _ease(t, b, c, d, type) {
                switch (type) {
                    case "linear":
                        return c * t / d + b;
                        break;
                    case "linearOut":
                        t /= d;
                        t--;
                        return c * Math.sqrt(1 - t * t) + b;
                        break;
                    case "easeInOutSmooth":
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t + b;
                        t--;
                        return -c / 2 * (t * (t - 2) - 1) + b;
                        break;
                    case "easeInOutStrong":
                        t /= d / 2;
                        if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                        t--;
                        return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
                        break;
                    case "easeInOut":
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t * t + b;
                        t -= 2;
                        return c / 2 * (t * t * t + 2) + b;
                        break;
                    case "easeOutSmooth":
                        t /= d;
                        t--;
                        return -c * (t * t * t * t - 1) + b;
                        break;
                    case "easeOutStrong":
                        return c * (-Math.pow(2, -10 * t / d) + 1) + b;
                        break;
                    case "easeOut":
                    default:
                        var ts = (t /= d) * t,
                            tc = ts * t;
                        return b + c * (0.499999999999997 * tc * ts + -2.5 * ts * ts + 5.5 * tc + -6.5 * ts + 4 * t);
                }
            }
        },
        _getTime = function () {
            if (window.performance && window.performance.now) {
                return window.performance.now();
            } else {
                if (window.performance && window.performance.webkitNow) {
                    return window.performance.webkitNow();
                } else {
                    if (Date.now) {
                        return Date.now();
                    } else {
                        return new Date().getTime();
                    }
                }
            }
        },
        _stopTween = function () {
            var el = this;
            if (!el._mTween) {
                el._mTween = {
                    top: {},
                    left: {}
                };
            }
            var props = ["top", "left"];
            for (var i = 0; i < props.length; i++) {
                var prop = props[i];
                if (el._mTween[prop].id) {
                    if (!window.requestAnimationFrame) {
                        clearTimeout(el._mTween[prop].id);
                    } else {
                        window.cancelAnimationFrame(el._mTween[prop].id);
                    }
                    el._mTween[prop].id = null;
                    el._mTween[prop].stop = 1;
                }
            }
        },
        _delete = function (c, m) {
            try {
                delete c[m];
            } catch (e) {
                c[m] = null;
            }
        },
        _mouseBtnLeft = function (e) {
            return !(e.which && e.which !== 1);
        },
        _pointerTouch = function (e) {
            var t = e.originalEvent.pointerType;
            return !(t && t !== "touch" && t !== 2);
        },
        _isNumeric = function (val) {
            return !isNaN(parseFloat(val)) && isFinite(val);
        };
    $.fn[pluginNS] = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist");
        }
    };
    $[pluginNS] = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist");
        }
    };
    $[pluginNS].defaults = defaults;
    window[pluginNS] = true;
    $(window).load(function () {
        var elems = $(defaultSelector),
            instances = [];
        if (elems.length) {
            elems.each(function () {
                var elem = $(this),
                    axis = elem.data("mts-axis") || defaults.axis,
                    type = elem.data("mts-type") || defaults.type,
                    theme = elem.data("mts-theme") || defaults.theme,
                    elemClass = "auto-" + pluginPfx + "-" + axis + "-" + type + "-" + theme,
                    instance = [elemClass, axis, type];
                elem.addClass(elemClass);
                if ($.inArray(elemClass, instances) === -1) {
                    instances.push(instance);
                }
            });
            for (var i = 0; i < instances.length; i++) {
                $("." + instances[i][0])[pluginNS]({
                    axis: instances[i][1],
                    type: instances[i][2]
                });
            }
        }
    });
})(jQuery, window, document);;
! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1339)
}({
    10: function (e, t, n) {
        var r = n(23),
            i = n(49),
            o = n(50),
            a = "[object Null]",
            s = "[object Undefined]",
            u = r ? r.toStringTag : void 0;
        e.exports = function (e) {
            return null == e ? void 0 === e ? s : a : u && u in Object(e) ? i(e) : o(e)
        }
    },
    100: function (e, t, n) {
        var r = n(10),
            i = n(53),
            o = n(12),
            a = "[object String]";
        e.exports = function (e) {
            return "string" == typeof e || !i(e) && o(e) && r(e) == a
        }
    },
    101: function (e, t, n) {
        var r = n(102),
            i = n(103);
        e.exports = function (e) {
            return null == e ? [] : r(e, i(e))
        }
    },
    102: function (e, t, n) {
        var r = n(89);
        e.exports = function (e, t) {
            return r(t, function (t) {
                return e[t]
            })
        }
    },
    103: function (e, t, n) {
        var r = n(104),
            i = n(114),
            o = n(42);
        e.exports = function (e) {
            return o(e) ? r(e) : i(e)
        }
    },
    104: function (e, t, n) {
        var r = n(105),
            i = n(106),
            o = n(53),
            a = n(108),
            s = n(74),
            u = n(110),
            l = Object.prototype.hasOwnProperty;
        e.exports = function (e, t) {
            var n = o(e),
                c = !n && i(e),
                f = !n && !c && a(e),
                d = !n && !c && !f && u(e),
                p = n || c || f || d,
                h = p ? r(e.length, String) : [],
                v = h.length;
            for (var y in e) !t && !l.call(e, y) || p && ("length" == y || f && ("offset" == y || "parent" == y) || d && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || s(y, v)) || h.push(y);
            return h
        }
    },
    105: function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }
    },
    106: function (e, t, n) {
        var r = n(107),
            i = n(12),
            o = Object.prototype,
            a = o.hasOwnProperty,
            s = o.propertyIsEnumerable,
            u = r(function () {
                return arguments
            }()) ? r : function (e) {
                return i(e) && a.call(e, "callee") && !s.call(e, "callee")
            };
        e.exports = u
    },
    107: function (e, t, n) {
        var r = n(10),
            i = n(12),
            o = "[object Arguments]";
        e.exports = function (e) {
            return i(e) && r(e) == o
        }
    },
    108: function (e, t, n) {
        (function (e) {
            var r = n(18),
                i = n(109),
                o = t && !t.nodeType && t,
                a = o && "object" == typeof e && e && !e.nodeType && e,
                s = a && a.exports === o ? r.Buffer : void 0,
                u = (s ? s.isBuffer : void 0) || i;
            e.exports = u
        }).call(this, n(31)(e))
    },
    109: function (e, t) {
        e.exports = function () {
            return !1
        }
    },
    110: function (e, t, n) {
        var r = n(111),
            i = n(112),
            o = n(113),
            a = o && o.isTypedArray,
            s = a ? i(a) : r;
        e.exports = s
    },
    111: function (e, t, n) {
        var r = n(10),
            i = n(43),
            o = n(12),
            a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function (e) {
            return o(e) && i(e.length) && !!a[r(e)]
        }
    },
    112: function (e, t) {
        e.exports = function (e) {
            return function (t) {
                return e(t)
            }
        }
    },
    113: function (e, t, n) {
        (function (e) {
            var r = n(30),
                i = t && !t.nodeType && t,
                o = i && "object" == typeof e && e && !e.nodeType && e,
                a = o && o.exports === i && r.process,
                s = function () {
                    try {
                        var e = o && o.require && o.require("util").types;
                        return e || a && a.binding && a.binding("util")
                    } catch (e) {}
                }();
            e.exports = s
        }).call(this, n(31)(e))
    },
    114: function (e, t, n) {
        var r = n(115),
            i = n(116),
            o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            if (!r(e)) return i(e);
            var t = [];
            for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
    },
    115: function (e, t) {
        var n = Object.prototype;
        e.exports = function (e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || n)
        }
    },
    116: function (e, t, n) {
        var r = n(117)(Object.keys, Object);
        e.exports = r
    },
    117: function (e, t) {
        e.exports = function (e, t) {
            return function (n) {
                return e(t(n))
            }
        }
    },
    12: function (e, t) {
        e.exports = function (e) {
            return null != e && "object" == typeof e
        }
    },
    1339: function (e, t, n) {
        "use strict";
        var r = f(n(154)),
            i = f(n(1340)),
            o = n(142),
            a = f(o),
            s = f(n(1342)),
            u = n(25),
            l = f(n(472)),
            c = f(n(1343));

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function d(e, t, n) {
            Array.from(document.querySelectorAll(e)).forEach(function (e) {
                var r = e.getAttribute(t);
                (0, u.trackLink)(e, n, {
                    cta_location: r
                })
            })
        }
        document.addEventListener("DOMContentLoaded", function () {
            (0, a.default)(), (0, o.scrollOnHover)("[data-scrollable]"), (0, o.centerMiddleElementInScrollableContainer)('[data-scrollable="examples"]'),
            function () {
                for (var e = document.querySelectorAll("[data-design-card]"), t = 0; t < e.length; t++) e[t].style.visibility = "visible"
            }(), r.default.create({
                stepClickEventMessage: "Clicked Carousel Trigger on Home Page"
            }), i.default.create();
            var e = document.querySelector("[data-two-image-swap]");
            e && new s.default(e), d("[data-homepage-cta]", "data-homepage-cta-location", "Clicked CTA on Home Page"), d("[data-design-card-link]", "data-design-card-link-category", "Clicked Design Card on Home Page"), d("[data-blog-link]", "data-blog-link-location", "Clicked Blog Link on Home Page"), d("[data-designer-link]", "data-designer-link-designer", "Clicked Designer Link on Home Page"), Array.from(document.querySelectorAll("[data-two-image-swap-button]")).forEach(function (e) {
                e.addEventListener("click", function () {
                    (0, u.trackEvent)("Clicked Two Image Swap button on Home Page")
                })
            })
        })
    },
    1340: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = a(n(331)),
            o = a(n(1341));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = "[data-overlay-hero-video-trigger]",
            u = function () {
                function e(t) {
                    var n = this;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.element = t, this.inlinePlayer = this._setupInlinePlayer(), this.overlayPlayer = this._setupOverlayPlayer(), this.overlay = this._setupOverlay(), this.element.querySelector(s).addEventListener("click", function () {
                        return n._showOverlayPlayer()
                    })
                }
                return r(e, [{
                    key: "_setupOverlay",
                    value: function () {
                        var e = this;
                        return new i.default({
                            element: this.element.querySelector("[data-video-hero-overlay]"),
                            options: {
                                onOpen: function () {
                                    e.overlayPlayer.play()
                                },
                                onClose: function () {
                                    e.overlayPlayer.pause(), e._showOverlayPlayer()
                                }
                            }
                        })
                    }
                }, {
                    key: "_setupOverlayPlayer",
                    value: function () {
                        var e = this;
                        return new o.default({
                            id: "wistia_video_frontpage_hero_overlay",
                            triggers: [this.element.querySelector(s)],
                            options: {
                                onEnd: function () {
                                    return e._attemptToShowPostRollContent()
                                },
                                onFullscreenLeave: function () {
                                    return e._handleFullscreenLeave()
                                }
                            }
                        })
                    }
                }, {
                    key: "_setupInlinePlayer",
                    value: function () {
                        var e = this,
                            t = this.element.querySelectorAll("[data-hero-video-inline-player-status-watcher]");
                        return new o.default({
                            id: "wistia_video_frontpage_hero_inline",
                            triggers: this.element.querySelectorAll("[data-inline-video-player-trigger]"),
                            options: {
                                onPlay: function () {
                                    var e = !0,
                                        n = !1,
                                        r = void 0;
                                    try {
                                        for (var i, o = t[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                                            i.value.setAttribute("data-wistia-player-active", !0)
                                        }
                                    } catch (e) {
                                        n = !0, r = e
                                    } finally {
                                        try {
                                            !e && o.return && o.return()
                                        } finally {
                                            if (n) throw r
                                        }
                                    }
                                },
                                onPause: function () {
                                    var e = !0,
                                        n = !1,
                                        r = void 0;
                                    try {
                                        for (var i, o = t[Symbol.iterator](); !(e = (i = o.next()).done); e = !0) {
                                            i.value.removeAttribute("data-wistia-player-active")
                                        }
                                    } catch (e) {
                                        n = !0, r = e
                                    } finally {
                                        try {
                                            !e && o.return && o.return()
                                        } finally {
                                            if (n) throw r
                                        }
                                    }
                                },
                                onReady: function () {
                                    e.element.querySelector("[data-hero-video-inline-player-container]").setAttribute("data-wistia-player-ready", !0)
                                }
                            }
                        })
                    }
                }, {
                    key: "_showOverlayPlayer",
                    value: function () {
                        this.element.querySelector("[data-overlay-hero-video-container]").removeAttribute("data-hidden"), this.element.querySelector("[data-overlay-hero-video-post-roll]").setAttribute("data-hidden", "")
                    }
                }, {
                    key: "_handleFullscreenLeave",
                    value: function () {
                        "ended" === this.overlayPlayer.state() && this._attemptToShowPostRollContent()
                    }
                }, {
                    key: "_attemptToShowPostRollContent",
                    value: function () {
                        this.overlayPlayer.isFullscreen || this._showPostRollContent()
                    }
                }, {
                    key: "_showPostRollContent",
                    value: function () {
                        this.element.querySelector("[data-overlay-hero-video-post-roll]").removeAttribute("data-hidden"), this.element.querySelector("[data-overlay-hero-video-container]").setAttribute("data-hidden", "")
                    }
                }], [{
                    key: "create",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[data-video-hero]",
                            n = document.querySelector(t);
                        n && new e(n)
                    }
                }]), e
            }();
        t.default = u
    },
    1341: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var i = function () {
            function e(t) {
                var n, r, i, o = t.id,
                    a = t.triggers,
                    s = void 0 === a ? [] : a,
                    u = t.options,
                    l = void 0 === u ? {} : u;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.id = o, this.triggers = s, this.options = l, this._setup = this._setup.bind(this), window._wq = window._wq || [], window._wq.push((n = {}, r = this.id, i = this._setup, r in n ? Object.defineProperty(n, r, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = i, n))
            }
            return r(e, [{
                key: "pause",
                value: function () {
                    this.player && this.player.pause()
                }
            }, {
                key: "play",
                value: function () {
                    this.player && this.player.play()
                }
            }, {
                key: "state",
                value: function () {
                    if (this.player) return this.player.state()
                }
            }, {
                key: "_setup",
                value: function (e) {
                    var t = this;
                    this.player = e, this.isFullscreen = !1, this.player.bind("heightchange", function (e) {
                        var n = t._detectFullscreenChange(e);
                        n && "enter" === n && t.options.onFullscreenEnter && t.options.onFullscreenEnter(), n && "leave" === n && t.options.onFullscreenLeave && t.options.onFullscreenLeave()
                    }), this.options.onPlay && this.player.bind("play", this.options.onPlay), this.options.onPause && this.player.bind("pause", this.options.onPause), this.options.onEnd && this.player.bind("end", this.options.onEnd), this.options.onReady && this.options.onReady();
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = this.triggers[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            o.value.addEventListener("click", function () {
                                t.play()
                            })
                        }
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            !n && a.return && a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                }
            }, {
                key: "_detectFullscreenChange",
                value: function (e) {
                    var t = e + 1;
                    return t === window.screen.height ? (this.isFullscreen = !0, "enter") : this.isFullscreen && t !== window.screen.height ? (this.isFullscreen = !1, "leave") : null
                }
            }]), e
        }();
        t.default = i
    },
    1342: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
    },
    1343: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
    },
    142: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[data-scrollable]",
                t = document.querySelectorAll(e),
                n = !0,
                r = !1,
                i = void 0;
            try {
                for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                    var s = o.value,
                        u = s.querySelector("[data-scrollable-inner]"),
                        l = u.clientHeight - s.clientHeight;
                    0 === l ? (u.style.marginTop = "-20px", u.style.bottom = "-20px", u.style.paddingBottom = "20px") : (u.style.marginTop = l + "px", u.style.bottom = l + "px")
                }
            } catch (e) {
                r = !0, i = e
            } finally {
                try {
                    !n && a.return && a.return()
                } finally {
                    if (r) throw i
                }
            }
        }, t.centerAlignScrollableElement = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[data-scrollable]",
                t = (0, r.default)(e + " [data-scrollable-inner]");
            return new Promise(function (e) {
                t.each(function (e, t) {
                    t.scrollLeft = ((0, r.default)(t).data("size") - window.innerWidth) / 2
                }), e(t)
            })
        }, t.scrollOnHover = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[data-scrollable]",
                t = document.querySelectorAll(e),
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
                    var u = a.value,
                        l = u.querySelector("[data-scrollable-inner]");
                    new i.default(l, document.documentElement, window.requestAnimationFrame.bind(window))
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && s.return && s.return()
                } finally {
                    if (r) throw o
                }
            }
        }, t.centerMiddleElementInScrollableContainer = function (e) {
            var t = document.querySelector(e);
            if (t) {
                var n = t.querySelector("[data-scrollable-inner]"),
                    r = n.children[0].children,
                    i = Math.round(r.length / 2),
                    o = r[0].clientWidth,
                    a = r[i - 1].offsetLeft,
                    s = (window.innerWidth - o) / 2;
                n.scrollLeft = a - s
            }
        };
        var r = o(n(5)),
            i = o(n(175));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    154: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, i = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(25),
            a = n(59),
            s = n(32),
            u = n(176),
            l = (r = u) && r.__esModule ? r : {
                default: r
            };
        var c = "data-slide-carousel-track",
            f = function () {
                function e(t) {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.captureStepClick = this.captureStepClick.bind(this), this.element = t.element, this.stepElement = t.stepElement, this.trackElement = this.element.querySelector("[" + c + "]"), this.index = 1, this._count = null, this.stepClickEventMessage = t.stepClickEventMessage || null, this.listenForStepClicks(), this.listenForPrevTriggerClick(), this.listenForNextTriggerClick(), this.goToStepWithoutAnchoring(this.index), this.initGestureRecognition()
                }
                return i(e, [{
                    key: "count",
                    value: function () {
                        return this._count || (this._count = this.stepElement.querySelectorAll("[data-carousel-step]").length), this._count
                    }
                }, {
                    key: "goToStepWithoutAnchoring",
                    value: function (e) {
                        for (var t = this.stepElement.querySelectorAll("[data-carousel-active]"), n = this.element.querySelectorAll("[data-slide-carousel-content]"), r = 0; r < t.length; r++) t[r].removeAttribute("data-carousel-active");
                        for (r = 0; r < n.length; r++) n[r].removeAttribute("data-carousel-active");
                        this.index = Math.abs(e) % this.count() || this.count(), this.element.setAttribute("data-carousel-step", this.index), this.currentStepElement().setAttribute("data-carousel-active", !0), this.currentContentElement().setAttribute("data-carousel-active", !0), this.slideToStep(), this.setCurrentColor()
                    }
                }, {
                    key: "goToStep",
                    value: function (e) {
                        this.goToStepWithoutAnchoring(e), this.anchorContent()
                    }
                }, {
                    key: "slideToStep",
                    value: function () {
                        this.trackElement.style.transform = "translateX(-" + ((this.index - 1) / this.count() * 100).toFixed(2) + "%)"
                    }
                }, {
                    key: "setCurrentColor",
                    value: function () {
                        var e = this.currentContentElement().getAttribute("data-color");
                        e && (this.element.style.color = e)
                    }
                }, {
                    key: "currentStepElement",
                    value: function () {
                        return this.stepElement.querySelector('[data-carousel-step="' + this.index + '"]')
                    }
                }, {
                    key: "currentContentElement",
                    value: function () {
                        return this.element.querySelector('[data-slide-carousel-content][data-carousel-step="' + this.index + '"]')
                    }
                }, {
                    key: "listenForStepClicks",
                    value: function () {
                        for (var e = this.stepElement.querySelectorAll("[data-carousel-step]"), t = 0; t < e.length; t++) e[t].addEventListener("click", this.captureStepClick)
                    }
                }, {
                    key: "listenForPrevTriggerClick",
                    value: function () {
                        var e = this;
                        this.element.querySelector("[data-slide-carousel-prev-trigger]").addEventListener("click", function () {
                            e.goToStep(e.index - 1), e.trackEventForLocation("left-button")
                        })
                    }
                }, {
                    key: "listenForNextTriggerClick",
                    value: function () {
                        var e = this;
                        this.element.querySelector("[data-slide-carousel-next-trigger]").addEventListener("click", function () {
                            e.goToStep(e.index + 1), e.trackEventForLocation("right-button")
                        })
                    }
                }, {
                    key: "captureStepClick",
                    value: function (e) {
                        var t = e.target,
                            n = parseInt(t.getAttribute("data-carousel-step"));
                        n && this.goToStep(n), this.trackEventForLocation("indicator-step")
                    }
                }, {
                    key: "trackEventForLocation",
                    value: function (e) {
                        this.stepClickEventMessage && (0, o.trackEvent)(this.stepClickEventMessage, {
                            location: e,
                            image_index: this.index - 1
                        })
                    }
                }, {
                    key: "anchorContent",
                    value: function () {
                        var e = this.element.querySelector("[data-slide-carousel-content-anchor-top]"),
                            t = !!e,
                            n = (0, a.isSmallViewport)() || (0, a.isMediumViewport)();
                        if (t && n) {
                            window.scrollTo({
                                top: (0, s.getOffset)(e).top - 20,
                                behavior: "instant"
                            })
                        }
                    }
                }, {
                    key: "initGestureRecognition",
                    value: function () {
                        var e = this;
                        new l.default.Region(this.element, !0, !1).bind(this.element, "swipe", function (t) {
                            var n = t.detail.data[0].currentDirection;
                            n >= 150 && n <= 210 ? (e.goToStep(e.index + 1), e.trackEventForLocation("left-swipe")) : (n >= 0 && n <= 30 || n >= 330 && n <= 360) && (e.goToStep(e.index - 1), e.trackEventForLocation("right-swipe"))
                        })
                    }
                }], [{
                    key: "create",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.elementSelector,
                            r = void 0 === n ? "[data-slide-carousel]" : n,
                            i = t.stepElementSelector,
                            o = void 0 === i ? "[data-carousel-steps]" : i,
                            a = t.stepClickEventMessage,
                            s = void 0 === a ? null : a,
                            u = document.querySelector(r);
                        if (u) {
                            var l = u.querySelector(o);
                            return new e({
                                element: u,
                                stepElement: l,
                                stepClickEventMessage: s
                            })
                        }
                    }
                }]), e
            }();
        t.default = f
    },
    17: function (e, t) {
        e.exports = function (e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
    },
    175: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, i = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = n(59),
            a = (r = o) && r.__esModule ? r : {
                default: r
            };
        var s = function () {
            function e(t, n, r) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.element = t, this.container = n, this.raf = r, this.velocity = 0, this.threshold = 300, this.maxVelocity = 10, this.waitForMovement(), this.startVelocityDetection()
            }
            return i(e, [{
                key: "waitForMovement",
                value: function () {
                    var e = this;
                    this.raf.call(null, function () {
                        0 !== e.velocity && e.move(e.velocity), e.waitForMovement()
                    })
                }
            }, {
                key: "startVelocityDetection",
                value: function () {
                    var e = this,
                        t = new a.default;
                    this.element.addEventListener("mousemove", function (n) {
                        var r = n.clientX,
                            i = e.container.clientWidth - n.clientX;
                        t.inSize(["small"]) ? e.velocity = 0 : e.velocity = e.calculateVelocity(r, i)
                    }, !1), this.element.addEventListener("mouseleave", function (t) {
                        e.velocity = 0
                    }, !1)
                }
            }, {
                key: "calculateVelocity",
                value: function (e, t) {
                    return e < this.threshold ? (this.threshold - e) / this.threshold * -this.maxVelocity : t < this.threshold ? (this.threshold - t) / this.threshold * this.maxVelocity : 0
                }
            }, {
                key: "move",
                value: function (e) {
                    this.element.scrollLeft += e
                }
            }]), e
        }();
        t.default = s
    },
    176: function (e, t, n) {
        n(177), e.exports = ZingTouch
    },
    177: function (e, t) {
        ! function (e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
            }
            var n = {};
            t.m = e, t.c = n, t.p = "", t(0)
        }([function (e, t, n) {
            "use strict";
            var r = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(1));
            window.ZingTouch = r.default
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(n(2)),
                o = r(n(4)),
                a = r(n(10)),
                s = r(n(12)),
                u = r(n(13)),
                l = r(n(14)),
                c = r(n(15)),
                f = r(n(16)),
                d = {
                    _regions: [],
                    Gesture: o.default,
                    Expand: a.default,
                    Pan: s.default,
                    Pinch: u.default,
                    Rotate: l.default,
                    Swipe: c.default,
                    Tap: f.default,
                    Region: function (e, t, n) {
                        var r = d._regions.length,
                            o = new i.default(e, t, n, r);
                        return d._regions.push(o), o
                    }
                };
            t.default = d
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = r(n(3)),
                a = r(n(4)),
                s = r(n(6)),
                u = r(n(9)),
                l = function () {
                    function e(t, n, r, i) {
                        var o = this;
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, e), this.id = i, this.element = t, this.capture = void 0 !== n && n, this.preventDefault = void 0 === r || r, this.state = new u.default(i);
                        (window.PointerEvent && !window.TouchEvent ? ["pointerdown", "pointermove", "pointerup"] : ["mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend"]).map(function (e) {
                            t.addEventListener(e, function (e) {
                                (0, s.default)(e, o)
                            }, o.capture)
                        })
                    }
                    return i(e, [{
                        key: "bind",
                        value: function (e, t, n, r, i) {
                            if (!e || e && !e.tagName) throw "Bind must contain an element";
                            return i = void 0 !== i && i, t ? void this.state.addBinding(e, t, n, r, i) : new o.default(e, i, this.state)
                        }
                    }, {
                        key: "bindOnce",
                        value: function (e, t, n, r) {
                            this.bind(e, t, n, r, !0)
                        }
                    }, {
                        key: "unbind",
                        value: function (e, t) {
                            var n = this,
                                r = this.state.retrieveBindingsByElement(e),
                                i = [];
                            return r.forEach(function (r) {
                                t ? "string" == typeof t && n.state.registeredGestures[t] && n.state.registeredGestures[t].id === r.gesture.id && (e.removeEventListener(r.gesture.getId(), r.handler, r.capture), i.push(r)) : (e.removeEventListener(r.gesture.getId(), r.handler, r.capture), i.push(r))
                            }), i
                        }
                    }, {
                        key: "register",
                        value: function (e, t) {
                            if ("string" != typeof e) throw new Error("Parameter key is an invalid string");
                            if (!t instanceof a.default) throw new Error("Parameter gesture is an invalid Gesture object");
                            t.setType(e), this.state.registerGesture(t, e)
                        }
                    }, {
                        key: "unregister",
                        value: function (e) {
                            this.state.bindings.forEach(function (t) {
                                t.gesture.getType() === e && t.element.removeEventListener(t.gesture.getId(), t.handler, t.capture)
                            });
                            var t = this.state.registeredGestures[e];
                            return delete this.state.registeredGestures[e], t
                        }
                    }]), e
                }();
            t.default = l
        }, function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function e(t, n, r) {
                var i = this;
                (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), this.element = t, Object.keys(r.registeredGestures).forEach(function (e) {
                    i[e] = function (t, o) {
                        return r.addBinding(i.element, e, t, o, n), i
                    }
                })
            }
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                i = function (e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(5)),
                o = function () {
                    function e() {
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, e), this.type = null, this.id = null
                    }
                    return r(e, [{
                        key: "setType",
                        value: function (e) {
                            this.type = e
                        }
                    }, {
                        key: "getType",
                        value: function () {
                            return this.type
                        }
                    }, {
                        key: "setId",
                        value: function (e) {
                            this.id = e
                        }
                    }, {
                        key: "getId",
                        value: function () {
                            return null !== this.id ? this.id : this.type
                        }
                    }, {
                        key: "update",
                        value: function (e) {
                            for (var t in e) this[t] && (this[t] = e[t])
                        }
                    }, {
                        key: "start",
                        value: function (e, t, n) {
                            return null
                        }
                    }, {
                        key: "move",
                        value: function (e, t, n) {
                            return null
                        }
                    }, {
                        key: "end",
                        value: function (e) {
                            return null
                        }
                    }, {
                        key: "isValid",
                        value: function (e, t, n) {
                            var r = !0;
                            return e.length > 1 && e.forEach(function (e) {
                                i.default.isInside(e.initial.x, e.initial.y, n) || (r = !1)
                            }), r
                        }
                    }]), e
                }();
            t.default = o
        }, function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = 360,
                r = {
                    normalizeEvent: function (e) {
                        switch (e) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                                return "start";
                            case "mousemove":
                            case "touchmove":
                            case "pointermove":
                                return "move";
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                                return "end";
                            default:
                                return null
                        }
                    },
                    isWithin: function (e, t, n, r, i) {
                        return Math.abs(t - r) <= i && Math.abs(e - n) <= i
                    },
                    distanceBetweenTwoPoints: function (e, t, n, r) {
                        var i = Math.sqrt((t - e) * (t - e) + (r - n) * (r - n));
                        return Math.round(100 * i) / 100
                    },
                    getMidpoint: function (e, t, n, r) {
                        return {
                            x: (e + t) / 2,
                            y: (n + r) / 2
                        }
                    },
                    getAngle: function (e, t, r, i) {
                        var o = Math.atan2(i - t, r - e) * (180 / Math.PI);
                        return n - (o < 0 ? n + o : o)
                    },
                    getAngularDistance: function (e, t) {
                        var r = (t - e) % n,
                            i = r < 0 ? 1 : -1;
                        return (r = Math.abs(r)) > 180 ? i * (n - r) : i * r
                    },
                    getVelocity: function (e, t, n, r, i, o) {
                        return this.distanceBetweenTwoPoints(e, r, t, i) / (o - n)
                    },
                    getRightMostInput: function (e) {
                        var t = null,
                            n = Number.MIN_VALUE;
                        return e.forEach(function (e) {
                            e.initial.x > n && (t = e)
                        }), t
                    },
                    isInteger: function (e) {
                        return "number" == typeof e && e % 1 == 0
                    },
                    isInside: function (e, t, n) {
                        var r = n.getBoundingClientRect();
                        return e > r.left && e < r.left + r.width && t > r.top && t < r.top + r.height
                    },
                    getPropagationPath: function (e) {
                        if (e.path) return e.path;
                        for (var t = [], n = e.target; n != document;) t.push(n), n = n.parentNode;
                        return t
                    },
                    getPathIndex: function (e, t) {
                        var n = e.length;
                        return e.forEach(function (e, r) {
                            e === t && (n = r)
                        }), n
                    },
                    setMSPreventDefault: function (e) {
                        e.style["-ms-content-zooming"] = "none", e.style["touch-action"] = "none"
                    },
                    removeMSPreventDefault: function (e) {
                        e.style["-ms-content-zooming"] = "", e.style["touch-action"] = ""
                    }
                };
            t.default = r
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(n(7)),
                o = r(n(8)),
                a = r(n(5));
            t.default = function (e, t) {
                var n = t.state;
                if (0 !== n.inputs.length || "start" === a.default.normalizeEvent(e.type)) {
                    if (void 0 !== e.buttons && "end" !== a.default.normalizeEvent(e.type) && 0 === e.buttons) return void n.resetInputs();
                    if (n.updateInputs(e, t.element)) {
                        var r = n.retrieveBindingsByInitialPos();
                        r.length > 0 && function () {
                            t.preventDefault ? (a.default.setMSPreventDefault(t.element), e.preventDefault ? e.preventDefault() : e.returnValue = !1) : a.default.removeMSPreventDefault(t.element);
                            var s = {};
                            (0, o.default)(r, e, n).forEach(function (t) {
                                var n = t.binding.gesture.id;
                                if (s[n]) {
                                    var r = a.default.getPropagationPath(e);
                                    a.default.getPathIndex(r, t.binding.element) < a.default.getPathIndex(r, s[n].binding.element) && (s[n] = t)
                                } else s[n] = t
                            }), Object.keys(s).forEach(function (e) {
                                var t = s[e];
                                (0, i.default)(t.binding, t.data, t.events)
                            })
                        }();
                        var s = 0;
                        n.inputs.forEach(function (e) {
                            "end" === e.getCurrentEventType() && s++
                        }), s === n.inputs.length && n.resetInputs()
                    }
                }
            }
        }, function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e, t, n) {
                t.events = n;
                var r = new CustomEvent(e.gesture.getId(), {
                    detail: t,
                    bubbles: !0,
                    cancelable: !0
                });
                ! function (e, t, n) {
                    e.dispatchEvent(t), n.bindOnce && ZingTouch.unbind(n.element, n.gesture.getType())
                }(e.element, r, e)
            }
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(5));
            t.default = function (e, t, n) {
                var i = r.default.normalizeEvent(t.type),
                    o = [];
                return e.forEach(function (e) {
                    var t = e.gesture[i](n.inputs, n, e.element);
                    t && function () {
                        var r = [];
                        n.inputs.forEach(function (e) {
                            r.push(e.current)
                        }), o.push({
                            binding: e,
                            data: t,
                            events: r
                        })
                    }()
                }), o
            }
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                a = r(n(4)),
                s = r(n(10)),
                u = r(n(12)),
                l = r(n(13)),
                c = r(n(14)),
                f = r(n(15)),
                d = r(n(16)),
                p = r(n(17)),
                h = r(n(18)),
                v = r(n(5)),
                y = function () {
                    function e(t) {
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, e), this.regionId = t, this.inputs = [], this.bindings = [], this.numGestures = 0, this.registeredGestures = {}, this.registerGesture(new s.default, "expand"), this.registerGesture(new u.default, "pan"), this.registerGesture(new c.default, "rotate"), this.registerGesture(new l.default, "pinch"), this.registerGesture(new f.default, "swipe"), this.registerGesture(new d.default, "tap")
                    }
                    return o(e, [{
                        key: "addBinding",
                        value: function (e, t, n, r, o) {
                            var s = void 0;
                            if (e && void 0 === e.tagName) throw new Error("Parameter element is an invalid object.");
                            if ("function" != typeof n) throw new Error("Parameter handler is invalid.");
                            if ("string" == typeof t && -1 === Object.keys(this.registeredGestures).indexOf(t)) throw new Error("Parameter " + t + " is not a registered gesture");
                            if ("object" === (void 0 === t ? "undefined" : i(t)) && !(t instanceof a.default)) throw new Error("Parameter for the gesture is not of a Gesture type");
                            "string" == typeof t ? s = this.registeredGestures[t] : "" === (s = t).id && this.assignGestureId(s), this.bindings.push(new p.default(e, s, n, r, o)), e.addEventListener(s.getId(), n, r)
                        }
                    }, {
                        key: "retrieveBindingsByElement",
                        value: function (e) {
                            var t = [];
                            return this.bindings.map(function (n) {
                                n.element === e && t.push(n)
                            }), t
                        }
                    }, {
                        key: "retrieveBindingsByInitialPos",
                        value: function () {
                            var e = this,
                                t = [];
                            return this.bindings.forEach(function (n) {
                                e.inputs.filter(function (e) {
                                    return v.default.isInside(e.initial.x, e.initial.y, n.element)
                                }).length > 0 && t.push(n)
                            }), t
                        }
                    }, {
                        key: "updateInputs",
                        value: function (e, t) {
                            function n(e, t, n, r) {
                                var i = v.default.normalizeEvent(e.type),
                                    o = function (e, t) {
                                        for (var n = 0; n < e.length; n++)
                                            if (e[n].identifier === t) return e[n];
                                        return null
                                    }(t.inputs, n);
                                return "start" === i && o ? void t.resetInputs() : "start" !== i && o && !v.default.isInside(o.current.x, o.current.y, r) ? void t.resetInputs() : "start" === i || o ? void("start" === i ? t.inputs.push(new h.default(e, n)) : o.update(e, n)) : void t.resetInputs()
                            }
                            switch (e.touches ? "TouchEvent" : e.pointerType ? "PointerEvent" : "MouseEvent") {
                                case "TouchEvent":
                                    for (var r in e.changedTouches) e.changedTouches.hasOwnProperty(r) && v.default.isInteger(parseInt(r)) && n(e, this, e.changedTouches[r].identifier, t);
                                    break;
                                case "PointerEvent":
                                    n(e, this, e.pointerId, t);
                                    break;
                                case "MouseEvent":
                                default:
                                    n(e, this, 0, t)
                            }
                            return !0
                        }
                    }, {
                        key: "resetInputs",
                        value: function () {
                            this.inputs = []
                        }
                    }, {
                        key: "numActiveInputs",
                        value: function () {
                            return this.inputs.filter(function (e) {
                                return "end" !== e.current.type
                            }).length
                        }
                    }, {
                        key: "registerGesture",
                        value: function (e, t) {
                            this.assignGestureId(e), this.registeredGestures[t] = e
                        }
                    }, {
                        key: "assignGestureId",
                        value: function (e) {
                            e.setId(this.regionId + "-" + this.numGestures++)
                        }
                    }]), e
                }();
            t.default = y
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function (e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(11)),
                i = function (e) {
                    function t(e) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class like a function")
                        }(this, t);
                        var n = function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.type = "expand", n
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, r.default), t
                }();
            t.default = i
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = r(n(4)),
                a = r(n(5)),
                s = 1,
                u = function (e) {
                    function t(e) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return n.type = "distance", n.threshold = e && e.threshold ? e.threshold : s, n
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, o.default), i(t, [{
                        key: "start",
                        value: function (e, t, n) {
                            if (!this.isValid(e, t, n)) return null;
                            2 === e.length && (e[0].getGestureProgress(this.type).lastEmittedDistance = a.default.distanceBetweenTwoPoints(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y))
                        }
                    }, {
                        key: "move",
                        value: function (e, t, n) {
                            if (2 === t.numActiveInputs()) {
                                var r = a.default.distanceBetweenTwoPoints(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y),
                                    i = a.default.distanceBetweenTwoPoints(e[0].previous.x, e[1].previous.x, e[0].previous.y, e[1].previous.y),
                                    o = a.default.getMidpoint(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y),
                                    s = e[0].getGestureProgress(this.type);
                                if ("Expand" === this.constructor.name) {
                                    if (r < i) s.lastEmittedDistance = r;
                                    else if (r - s.lastEmittedDistance >= this.threshold) return s.lastEmittedDistance = r, {
                                        distance: r,
                                        center: o
                                    }
                                } else if (r > i) s.lastEmittedDistance = r;
                                else if (r < i && s.lastEmittedDistance - r >= this.threshold) return s.lastEmittedDistance = r, {
                                    distance: r,
                                    center: o
                                };
                                return null
                            }
                        }
                    }]), t
                }();
            t.default = u
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = r(n(4)),
                a = r(n(5)),
                s = 1,
                u = 1,
                l = function (e) {
                    function t(e) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return n.type = "pan", n.numInputs = e && e.numInputs ? e.numInputs : s, n.threshold = e && e.threshold ? e.threshold : u, n
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, o.default), i(t, [{
                        key: "start",
                        value: function (e) {
                            var t = this;
                            e.forEach(function (e) {
                                var n = e.getGestureProgress(t.getId());
                                n.active = !0, n.lastEmitted = {
                                    x: e.current.x,
                                    y: e.current.y
                                }
                            })
                        }
                    }, {
                        key: "move",
                        value: function (e, t, n) {
                            if (this.numInputs === e.length)
                                for (var r = {
                                        data: []
                                    }, i = 0; i < e.length; i++) {
                                    var o, s = e[i].getGestureProgress(this.getId()),
                                        u = Math.abs(e[i].current.y - s.lastEmitted.y) > this.threshold,
                                        l = Math.abs(e[i].current.x - s.lastEmitted.x) > this.threshold;
                                    if (o = u || l, !s.active || !o) return null;
                                    r.data[i] = {
                                        distanceFromOrigin: a.default.distanceBetweenTwoPoints(e[i].initial.x, e[i].current.x, e[i].initial.y, e[i].current.y),
                                        directionFromOrigin: a.default.getAngle(e[i].initial.x, e[i].initial.y, e[i].current.x, e[i].current.y),
                                        currentDirection: a.default.getAngle(s.lastEmitted.x, s.lastEmitted.y, e[i].current.x, e[i].current.y)
                                    }, s.lastEmitted.x = e[i].current.x, s.lastEmitted.y = e[i].current.y
                                }
                            return r
                        }
                    }, {
                        key: "end",
                        value: function (e) {
                            var t = this;
                            return e.forEach(function (e) {
                                e.getGestureProgress(t.getId()).active = !1
                            }), null
                        }
                    }]), t
                }();
            t.default = l
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(n(11)),
                o = (r(n(5)), function (e) {
                    function t(e) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.type = "pinch", n
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, i.default), t
                }());
            t.default = o
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = r(n(4)),
                a = r(n(5)),
                s = function (e) {
                    function t() {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var e = function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return e.type = "rotate", e
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, o.default), i(t, [{
                        key: "move",
                        value: function (e, t, n) {
                            if (t.numActiveInputs() <= 2) {
                                var r = void 0,
                                    i = void 0,
                                    o = void 0,
                                    s = void 0;
                                if (1 === t.numActiveInputs()) {
                                    var u = n.getBoundingClientRect();
                                    r = {
                                        x: u.left + u.width / 2,
                                        y: u.top + u.height / 2
                                    }, s = e[0], i = o = 0
                                } else {
                                    r = a.default.getMidpoint(e[0].initial.x, e[1].initial.x, e[0].initial.y, e[1].initial.y);
                                    var l = a.default.getMidpoint(e[0].current.x, e[1].current.x, e[0].current.y, e[1].current.y);
                                    i = r.x - l.x, o = r.y - l.y, s = a.default.getRightMostInput(e)
                                }
                                var c = a.default.getAngle(r.x, r.y, s.current.x + i, s.current.y + o),
                                    f = s.getGestureProgress(this.getId());
                                return f.initialAngle ? (f.change = a.default.getAngularDistance(f.previousAngle, c), f.distance = f.distance + f.change) : (f.initialAngle = f.previousAngle = c, f.distance = f.change = 0), f.previousAngle = c, {
                                    angle: c,
                                    distanceFromOrigin: f.distance,
                                    distanceFromLast: f.change
                                }
                            }
                            return null
                        }
                    }]), t
                }();
            t.default = s
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = r(n(4)),
                a = r(n(5)),
                s = 1,
                u = 100,
                l = .2,
                c = 100,
                f = 10,
                d = function (e) {
                    function t(e) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return n.type = "swipe", n.numInputs = e && e.numInputs ? e.numInputs : s, n.maxRestTime = e && e.maxRestTime ? e.maxRestTime : u, n.escapeVelocity = e && e.escapeVelocity ? e.escapeVelocity : l, n.timeDistortion = e && e.timeDistortion ? e.timeDistortion : c, n.maxProgressStack = e && e.maxProgressStack ? e.maxProgressStack : f, n
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, o.default), i(t, [{
                        key: "move",
                        value: function (e, t, n) {
                            if (this.numInputs === e.length)
                                for (var r = 0; r < e.length; r++) {
                                    var i = e[r].getGestureProgress(this.getId());
                                    i.moves || (i.moves = []), i.moves.push({
                                        time: (new Date).getTime(),
                                        x: e[r].current.x,
                                        y: e[r].current.y
                                    }), i.length > this.maxProgressStack && i.moves.shift()
                                }
                            return null
                        }
                    }, {
                        key: "end",
                        value: function (e) {
                            if (this.numInputs === e.length) {
                                for (var t = {
                                        data: []
                                    }, n = 0; n < e.length; n++) {
                                    if ("end" !== e[n].current.type) return;
                                    var r = e[n].getGestureProgress(this.getId());
                                    if (r.moves && r.moves.length > 2) {
                                        var i = r.moves.pop();
                                        if ((new Date).getTime() - i.time > this.maxRestTime) return null;
                                        for (var o = void 0, s = r.moves.length - 1; - 1 !== s;) {
                                            if (r.moves[s].time !== i.time) {
                                                o = r.moves[s];
                                                break
                                            }
                                            s--
                                        }
                                        o || ((o = r.moves.pop()).time += this.timeDistortion);
                                        var u = a.default.getVelocity(o.x, o.y, o.time, i.x, i.y, i.time);
                                        t.data[n] = {
                                            velocity: u,
                                            distance: a.default.distanceBetweenTwoPoints(o.x, i.x, o.y, i.y),
                                            duration: i.time - o.time,
                                            currentDirection: a.default.getAngle(o.x, o.y, i.x, i.y)
                                        }
                                    }
                                }
                                for (n = 0; n < t.data.length; n++)
                                    if (u < this.escapeVelocity) return null;
                                if (t.data.length > 0) return t
                            }
                            return null
                        }
                    }]), t
                }();
            t.default = d
        }, function (e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                a = r(n(4)),
                s = r(n(5)),
                u = 0,
                l = 300,
                c = 1,
                f = 10,
                d = function (e) {
                    function t(e) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return n.type = "tap", n.minDelay = e && e.minDelay ? e.minDelay : u, n.maxDelay = e && e.maxDelay ? e.maxDelay : l, n.numInputs = e && e.numInputs ? e.numInputs : c, n.tolerance = e && e.tolerance ? e.tolerance : f, n
                    }
                    return function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, a.default), o(t, [{
                        key: "start",
                        value: function (e) {
                            var t = this;
                            return e.length === this.numInputs && e.forEach(function (e) {
                                e.getGestureProgress(t.type).start = (new Date).getTime()
                            }), null
                        }
                    }, {
                        key: "move",
                        value: function (e, t, n) {
                            for (var r = this, o = 0; o < e.length; o++)
                                if ("move" === e[o].getCurrentEventType()) {
                                    var a = e[o].current,
                                        u = e[o].previous;
                                    if (!s.default.isWithin(a.x, a.y, u.x, u.y, this.tolerance)) {
                                        var l = function () {
                                            var t = r.type;
                                            return e.forEach(function (e) {
                                                e.resetProgress(t)
                                            }), {
                                                v: null
                                            }
                                        }();
                                        if ("object" === (void 0 === l ? "undefined" : i(l))) return l.v
                                    }
                                }
                            return null
                        }
                    }, {
                        key: "end",
                        value: function (e) {
                            var t = this;
                            if (e.length !== this.numInputs) return null;
                            for (var n = Number.MAX_VALUE, r = 0; r < e.length; r++) {
                                if ("end" !== e[r].getCurrentEventType()) return null;
                                var o = e[r].getGestureProgress(this.type);
                                if (!o.start) return null;
                                o.start < n && (n = o.start)
                            }
                            var a = (new Date).getTime() - n;
                            if (this.minDelay <= a && this.maxDelay >= a) return {
                                interval: a
                            };
                            var s = function () {
                                var n = t.type;
                                return e.forEach(function (e) {
                                    e.resetProgress(n)
                                }), {
                                    v: null
                                }
                            }();
                            return "object" === (void 0 === s ? "undefined" : i(s)) ? s.v : void 0
                        }
                    }]), t
                }();
            t.default = d
        }, function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function e(t, n, r, i, o) {
                (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), this.element = t, this.gesture = n, this.handler = r, this.capture = void 0 !== i && i, this.bindOnce = void 0 !== o && o
            }
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                i = function (e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n(19)),
                o = function () {
                    function e(t, n) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var r = new i.default(t, n);
                        this.initial = r, this.current = r, this.previous = r, this.identifier = void 0 !== n ? n : 0, this.progress = {}
                    }
                    return r(e, [{
                        key: "update",
                        value: function (e, t) {
                            this.previous = this.current, this.current = new i.default(e, t)
                        }
                    }, {
                        key: "getGestureProgress",
                        value: function (e) {
                            return this.progress[e] || (this.progress[e] = {}), this.progress[e]
                        }
                    }, {
                        key: "getCurrentEventType",
                        value: function () {
                            return this.current.type
                        }
                    }, {
                        key: "resetProgress",
                        value: function (e) {
                            this.progress[e] = {}
                        }
                    }]), e
                }();
            t.default = o
        }, function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(5));
            t.default = function e(t, n) {
                (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), this.originalEvent = t, this.type = r.default.normalizeEvent(t.type), this.x = 0, this.y = 0;
                var i = void 0;
                if (t.touches && t.changedTouches) {
                    for (var o = 0; o < t.changedTouches.length; o++)
                        if (t.changedTouches[o].identifier === n) {
                            i = t.changedTouches[o];
                            break
                        }
                } else i = t;
                this.x = this.clientX = i.clientX, this.y = this.clientY = i.clientY, this.pageX = i.pageX, this.pageY = i.pageY, this.screenX = i.screenX, this.screenY = i.screenY
            }
        }])
    },
    18: function (e, t, n) {
        var r = n(30),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        e.exports = o
    },
    23: function (e, t, n) {
        var r = n(18).Symbol;
        e.exports = r
    },
    25: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(56);
        Object.keys(r).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return r[e]
                }
            })
        });
        var i = n(33);
        Object.defineProperty(t, "trackEvent", {
            enumerable: !0,
            get: function () {
                return a(i).default
            }
        });
        var o = n(60);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "trackLink", {
            enumerable: !0,
            get: function () {
                return a(o).default
            }
        })
    },
    27: function (e, t, n) {
        var r = n(17),
            i = n(46),
            o = NaN,
            a = /^\s+|\s+$/g,
            s = /^[-+]0x[0-9a-f]+$/i,
            u = /^0b[01]+$/i,
            l = /^0o[0-7]+$/i,
            c = parseInt;
        e.exports = function (e) {
            if ("number" == typeof e) return e;
            if (i(e)) return o;
            if (r(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = r(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(a, "");
            var n = u.test(e);
            return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : s.test(e) ? o : +e
        }
    },
    30: function (e, t, n) {
        (function (t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(this, n(8))
    },
    31: function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    },
    32: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getOffset = function (e) {
            var t = e.getBoundingClientRect();
            return {
                left: t.left + (window.scrollX || window.pageXOffset),
                top: t.top + (window.scrollY || window.pageYOffset)
            }
        }
    },
    33: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments[3],
                i = window.trackParams || {};
            t = Object.assign({
                url: window.location.href
            }, i, t), 0;
            window.analytics ? window.analytics.track(e, t, n, r) : "function" == typeof r && r()
        }
    },
    331: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        var i = function () {
            function e(t) {
                var n = t.element,
                    r = t.options,
                    i = void 0 === r ? {} : r;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.el = n, this.options = i, this.scrollPosition = null;
                var o = this.el.getAttribute("data-fullscreen-overlay-id"),
                    a = document.querySelectorAll('[data-fullscreen-overlay-open="' + o + '"]'),
                    s = document.querySelectorAll('[data-fullscreen-overlay-close="' + o + '"]');
                this._handleClose = this._handleClose.bind(this), this._handleOpen = this._handleOpen.bind(this), this._handleKeyDown = this._handleKeyDown.bind(this);
                var u = !0,
                    l = !1,
                    c = void 0;
                try {
                    for (var f, d = a[Symbol.iterator](); !(u = (f = d.next()).done); u = !0) {
                        var p = f.value;
                        p.hasAttribute("data-fullscreen-overlay-trigger-set") || (p.addEventListener("click", this._handleOpen), p.setAttribute("data-fullscreen-overlay-trigger-set", !0))
                    }
                } catch (e) {
                    l = !0, c = e
                } finally {
                    try {
                        !u && d.return && d.return()
                    } finally {
                        if (l) throw c
                    }
                }
                var h = !0,
                    v = !1,
                    y = void 0;
                try {
                    for (var g, m = s[Symbol.iterator](); !(h = (g = m.next()).done); h = !0) {
                        g.value.addEventListener("click", this._handleClose)
                    }
                } catch (e) {
                    v = !0, y = e
                } finally {
                    try {
                        !h && m.return && m.return()
                    } finally {
                        if (v) throw y
                    }
                }
            }
            return r(e, [{
                key: "_handleClose",
                value: function (e) {
                    e.preventDefault(), this._close()
                }
            }, {
                key: "_handleKeyDown",
                value: function (e) {
                    27 === e.keyCode && this._close()
                }
            }, {
                key: "_handleOpen",
                value: function (e) {
                    e.preventDefault(), this._open()
                }
            }, {
                key: "_close",
                value: function () {
                    var e = this;
                    document.body.removeEventListener("keydown", this._handleKeyDown, {
                        passive: !0
                    }), this.el.classList.remove("fullscreen-overlay--visible"), setTimeout(function () {
                        e.el.removeAttribute("data-fullscreen-overlay-active"), document.body.removeAttribute("data-disable-scroll")
                    }, 300), this.options.onClose && this.options.onClose(), this.options.fixedViewport && (document.body.removeAttribute("data-fixed-viewport-active"), this.setBodyScrollTop(this.scrollPosition))
                }
            }, {
                key: "_open",
                value: function () {
                    var e = this;
                    document.body.addEventListener("keydown", this._handleKeyDown, {
                        passive: !0
                    }), this.el.setAttribute("data-fullscreen-overlay-active", !0), document.body.setAttribute("data-disable-scroll", !0), setTimeout(function () {
                        e.el.classList.add("fullscreen-overlay--visible")
                    }, 0), this.options.onOpen && this.options.onOpen(), this.options.fixedViewport && (this.scrollPosition = this.getBodyScrollTop(), document.body.setAttribute("data-fixed-viewport-active", !0))
                }
            }, {
                key: "getBodyScrollTop",
                value: function () {
                    return (document.scrollingElement || document.documentElement).scrollTop
                }
            }, {
                key: "setBodyScrollTop",
                value: function (e) {
                    var t = document.scrollingElement || document.documentElement;
                    return t.scrollTop = e, t.scrollTop
                }
            }]), e
        }();
        t.default = i
    },
    37: function (e, t, n) {
        var r = n(17),
            i = n(57),
            o = n(27),
            a = "Expected a function",
            s = Math.max,
            u = Math.min;
        e.exports = function (e, t, n) {
            var l, c, f, d, p, h, v = 0,
                y = !1,
                g = !1,
                m = !0;
            if ("function" != typeof e) throw new TypeError(a);

            function b(t) {
                var n = l,
                    r = c;
                return l = c = void 0, v = t, d = e.apply(r, n)
            }

            function w(e) {
                var n = e - h;
                return void 0 === h || n >= t || n < 0 || g && e - v >= f
            }

            function x() {
                var e = i();
                if (w(e)) return k(e);
                p = setTimeout(x, function (e) {
                    var n = t - (e - h);
                    return g ? u(n, f - (e - v)) : n
                }(e))
            }

            function k(e) {
                return p = void 0, m && l ? b(e) : (l = c = void 0, d)
            }

            function _() {
                var e = i(),
                    n = w(e);
                if (l = arguments, c = this, h = e, n) {
                    if (void 0 === p) return function (e) {
                        return v = e, p = setTimeout(x, t), y ? b(e) : d
                    }(h);
                    if (g) return p = setTimeout(x, t), b(h)
                }
                return void 0 === p && (p = setTimeout(x, t)), d
            }
            return t = o(t) || 0, r(n) && (y = !!n.leading, f = (g = "maxWait" in n) ? s(o(n.maxWait) || 0, t) : f, m = "trailing" in n ? !!n.trailing : m), _.cancel = function () {
                void 0 !== p && clearTimeout(p), v = 0, l = h = c = p = void 0
            }, _.flush = function () {
                return void 0 === p ? d : k(i())
            }, _
        }
    },
    42: function (e, t, n) {
        var r = n(71),
            i = n(43);
        e.exports = function (e) {
            return null != e && i(e.length) && !r(e)
        }
    },
    43: function (e, t) {
        var n = 9007199254740991;
        e.exports = function (e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
        }
    },
    46: function (e, t, n) {
        var r = n(10),
            i = n(12),
            o = "[object Symbol]";
        e.exports = function (e) {
            return "symbol" == typeof e || i(e) && r(e) == o
        }
    },
    472: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n(473));
        var o = function () {
            function e() {
                var t = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[data-sticky-bar]";
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.stickyBar = document.querySelector(n), this.stickyBar && (this.initialPosition = this.getInitialPosition(), this.handleOnScroll = this.handleOnScroll.bind(this), window.addEventListener("scroll", this.handleOnScroll), this.updatingInitialPosition = !1, window.addEventListener("resize", function () {
                    t.updateInitialPosition(), t.handleOnScroll()
                }), this.isFixable() && this.fix())
            }
            return r(e, [{
                key: "fix",
                value: function () {
                    this.stickyBar.setAttribute("data-sticky-bar-active", !0)
                }
            }, {
                key: "unfix",
                value: function () {
                    this.stickyBar.removeAttribute("data-sticky-bar-active")
                }
            }, {
                key: "isHidden",
                value: function () {
                    return "none" === getComputedStyle(this.stickyBar).display
                }
            }, {
                key: "isHiddenTillActive",
                value: function () {
                    return this.stickyBar.hasAttribute("data-sticky-bar-hidden-till-active")
                }
            }, {
                key: "isActive",
                value: function () {
                    return this.stickyBar.hasAttribute("data-sticky-bar-active")
                }
            }, {
                key: "isFixable",
                value: function () {
                    return this.isPassedScrollPoint() && !this.isActive() && (!this.isHidden() || this.isHiddenTillActive())
                }
            }, {
                key: "getInitialPosition",
                value: function () {
                    return i.distanceFromTop(this.stickyBar) + window.pageYOffset - 50
                }
            }, {
                key: "isPassedScrollPoint",
                value: function () {
                    return i.distanceFromTop(this.stickyBar) <= 0
                }
            }, {
                key: "handleOnScroll",
                value: function () {
                    if (!this.isHidden() || this.isHiddenTillActive()) {
                        var e = window.pageYOffset;
                        this.isPassedScrollPoint() && !this.isActive() ? this.fix() : e <= this.initialPosition && this.isActive() && this.unfix()
                    }
                }
            }, {
                key: "updateInitialPosition",
                value: function () {
                    var e = this;
                    this.updatingInitialPosition || window.requestAnimationFrame(function () {
                        e.stickyBar.style.position = "relative", e.initialPosition = e.getInitialPosition(), e.stickyBar.style.position = "", e.updatingInitialPosition = !1
                    })
                }
            }]), e
        }();
        t.default = o
    },
    473: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.distanceFromTop = function (e) {
            return e.getBoundingClientRect().top
        }, t.distanceFromBottom = function (e) {
            return e.getBoundingClientRect().bottom
        }
    },
    49: function (e, t, n) {
        var r = n(23),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            s = r ? r.toStringTag : void 0;
        e.exports = function (e) {
            var t = o.call(e, s),
                n = e[s];
            try {
                e[s] = void 0;
                var r = !0
            } catch (e) {}
            var i = a.call(e);
            return r && (t ? e[s] = n : delete e[s]), i
        }
    },
    5: function (e, t, n) {
        var r, i, o;
        i = "undefined" != typeof window ? window : this, o = function (n, i) {
            var o = [],
                a = o.slice,
                s = o.concat,
                u = o.push,
                l = o.indexOf,
                c = {},
                f = c.toString,
                d = c.hasOwnProperty,
                p = {},
                h = n.document,
                v = function (e, t) {
                    return new v.fn.init(e, t)
                },
                y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                g = /^-ms-/,
                m = /-([\da-z])/gi,
                b = function (e, t) {
                    return t.toUpperCase()
                };

            function w(e) {
                var t = "length" in e && e.length,
                    n = v.type(e);
                return "function" !== n && !v.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
            }
            v.fn = v.prototype = {
                jquery: "2.1.4",
                constructor: v,
                selector: "",
                length: 0,
                toArray: function () {
                    return a.call(this)
                },
                get: function (e) {
                    return null != e ? e < 0 ? this[e + this.length] : this[e] : a.call(this)
                },
                pushStack: function (e) {
                    var t = v.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function (e, t) {
                    return v.each(this, e, t)
                },
                map: function (e) {
                    return this.pushStack(v.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function () {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: u,
                sort: o.sort,
                splice: o.splice
            }, v.extend = v.fn.extend = function () {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (v.isPlainObject(r) || (i = v.isArray(r))) ? (i ? (i = !1, o = n && v.isArray(n) ? n : []) : o = n && v.isPlainObject(n) ? n : {}, a[t] = v.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, v.extend({
                expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {},
                isFunction: function (e) {
                    return "function" === v.type(e)
                },
                isArray: Array.isArray,
                isWindow: function (e) {
                    return null != e && e === e.window
                },
                isNumeric: function (e) {
                    return !v.isArray(e) && e - parseFloat(e) + 1 >= 0
                },
                isPlainObject: function (e) {
                    return "object" === v.type(e) && !e.nodeType && !v.isWindow(e) && !(e.constructor && !d.call(e.constructor.prototype, "isPrototypeOf"))
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[f.call(e)] || "object" : typeof e
                },
                globalEval: function (e) {
                    var t, n = eval;
                    (e = v.trim(e)) && (1 === e.indexOf("use strict") ? ((t = h.createElement("script")).text = e, h.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                },
                camelCase: function (e) {
                    return e.replace(g, "ms-").replace(m, b)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function (e, t, n) {
                    var r = 0,
                        i = e.length,
                        o = w(e);
                    if (n) {
                        if (o)
                            for (; r < i && !1 !== t.apply(e[r], n); r++);
                        else
                            for (r in e)
                                if (!1 === t.apply(e[r], n)) break
                    } else if (o)
                        for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                trim: function (e) {
                    return null == e ? "" : (e + "").replace(y, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (w(Object(e)) ? v.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : l.call(t, e, n)
                },
                merge: function (e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function (e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                    return r
                },
                map: function (e, t, n) {
                    var r, i = 0,
                        o = e.length,
                        a = [];
                    if (w(e))
                        for (; i < o; i++) null != (r = t(e[i], i, n)) && a.push(r);
                    else
                        for (i in e) null != (r = t(e[i], i, n)) && a.push(r);
                    return s.apply([], a)
                },
                guid: 1,
                proxy: function (e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), v.isFunction(e)) return r = a.call(arguments, 2), (i = function () {
                        return e.apply(t || this, r.concat(a.call(arguments)))
                    }).guid = e.guid = e.guid || v.guid++, i
                },
                now: Date.now,
                support: p
            }), v.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                c["[object " + t + "]"] = t.toLowerCase()
            });
            var x = function (e) {
                var t, n, r, i, o, a, s, u, l, c, f, d, p, h, v, y, g, m, b, w = "sizzle" + 1 * new Date,
                    x = e.document,
                    k = 0,
                    _ = 0,
                    E = ae(),
                    T = ae(),
                    C = ae(),
                    j = function (e, t) {
                        return e === t && (f = !0), 0
                    },
                    S = 1 << 31,
                    O = {}.hasOwnProperty,
                    P = [],
                    A = P.pop,
                    L = P.push,
                    D = P.push,
                    N = P.slice,
                    M = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    I = "[\\x20\\t\\r\\n\\f]",
                    F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    H = F.replace("w", "w#"),
                    R = "\\[" + I + "*(" + F + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + I + "*\\]",
                    B = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                    W = new RegExp(I + "+", "g"),
                    $ = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
                    G = new RegExp("^" + I + "*," + I + "*"),
                    z = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                    V = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
                    X = new RegExp(B),
                    U = new RegExp("^" + H + "$"),
                    Y = {
                        ID: new RegExp("^#(" + F + ")"),
                        CLASS: new RegExp("^\\.(" + F + ")"),
                        TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + R),
                        PSEUDO: new RegExp("^" + B),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + q + ")$", "i"),
                        needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                    },
                    K = /^(?:input|select|textarea|button)$/i,
                    Q = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = /'|\\/g,
                    ne = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
                    re = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    ie = function () {
                        d()
                    };
                try {
                    D.apply(P = N.call(x.childNodes), x.childNodes), P[x.childNodes.length].nodeType
                } catch (e) {
                    D = {
                        apply: P.length ? function (e, t) {
                            L.apply(e, N.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function oe(e, t, r, i) {
                    var o, s, l, c, f, h, g, m, k, _;
                    if ((t ? t.ownerDocument || t : x) !== p && d(t), r = r || [], c = (t = t || p).nodeType, "string" != typeof e || !e || 1 !== c && 9 !== c && 11 !== c) return r;
                    if (!i && v) {
                        if (11 !== c && (o = Z.exec(e)))
                            if (l = o[1]) {
                                if (9 === c) {
                                    if (!(s = t.getElementById(l)) || !s.parentNode) return r;
                                    if (s.id === l) return r.push(s), r
                                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(l)) && b(t, s) && s.id === l) return r.push(s), r
                            } else {
                                if (o[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                                if ((l = o[3]) && n.getElementsByClassName) return D.apply(r, t.getElementsByClassName(l)), r
                            }
                        if (n.qsa && (!y || !y.test(e))) {
                            if (m = g = w, k = t, _ = 1 !== c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                                for (h = a(e), (g = t.getAttribute("id")) ? m = g.replace(te, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = h.length; f--;) h[f] = m + ye(h[f]);
                                k = ee.test(e) && he(t.parentNode) || t, _ = h.join(",")
                            }
                            if (_) try {
                                return D.apply(r, k.querySelectorAll(_)), r
                            } catch (e) {} finally {
                                g || t.removeAttribute("id")
                            }
                        }
                    }
                    return u(e.replace($, "$1"), t, r, i)
                }

                function ae() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                }

                function se(e) {
                    return e[w] = !0, e
                }

                function ue(e) {
                    var t = p.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function le(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;) r.attrHandle[n[i]] = t
                }

                function ce(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || S) - (~e.sourceIndex || S);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function de(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function pe(e) {
                    return se(function (t) {
                        return t = +t, se(function (n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function he(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = oe.support = {}, o = oe.isXML = function (e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, d = oe.setDocument = function (e) {
                        var t, i, a = e ? e.ownerDocument || e : x;
                        return a !== p && 9 === a.nodeType && a.documentElement ? (p = a, h = a.documentElement, (i = a.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", ie, !1) : i.attachEvent && i.attachEvent("onunload", ie)), v = !o(a), n.attributes = ue(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = ue(function (e) {
                            return e.appendChild(a.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = J.test(a.getElementsByClassName), n.getById = ue(function (e) {
                            return h.appendChild(e).id = w, !a.getElementsByName || !a.getElementsByName(w).length
                        }), n.getById ? (r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && v) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        }, r.filter.ID = function (e) {
                            var t = e.replace(ne, re);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete r.find.ID, r.filter.ID = function (e) {
                            var t = e.replace(ne, re);
                            return function (e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                            if (v) return t.getElementsByClassName(e)
                        }, g = [], y = [], (n.qsa = J.test(a.querySelectorAll)) && (ue(function (e) {
                            h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + I + "*(?:value|" + q + ")"), e.querySelectorAll("[id~=" + w + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || y.push(".#.+[+~]")
                        }), ue(function (e) {
                            var t = a.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + I + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                        })), (n.matchesSelector = J.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                            n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", B)
                        }), y = y.length && new RegExp(y.join("|")), g = g.length && new RegExp(g.join("|")), t = J.test(h.compareDocumentPosition), b = t || J.test(h.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, j = t ? function (e, t) {
                            if (e === t) return f = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === a || e.ownerDocument === x && b(x, e) ? -1 : t === a || t.ownerDocument === x && b(x, t) ? 1 : c ? M(c, e) - M(c, t) : 0 : 4 & r ? -1 : 1)
                        } : function (e, t) {
                            if (e === t) return f = !0, 0;
                            var n, r = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                s = [e],
                                u = [t];
                            if (!i || !o) return e === a ? -1 : t === a ? 1 : i ? -1 : o ? 1 : c ? M(c, e) - M(c, t) : 0;
                            if (i === o) return ce(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) u.unshift(n);
                            for (; s[r] === u[r];) r++;
                            return r ? ce(s[r], u[r]) : s[r] === x ? -1 : u[r] === x ? 1 : 0
                        }, a) : p
                    }, oe.matches = function (e, t) {
                        return oe(e, null, null, t)
                    }, oe.matchesSelector = function (e, t) {
                        if ((e.ownerDocument || e) !== p && d(e), t = t.replace(V, "='$1']"), n.matchesSelector && v && (!g || !g.test(t)) && (!y || !y.test(t))) try {
                            var r = m.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {}
                        return oe(t, p, null, [e]).length > 0
                    }, oe.contains = function (e, t) {
                        return (e.ownerDocument || e) !== p && d(e), b(e, t)
                    }, oe.attr = function (e, t) {
                        (e.ownerDocument || e) !== p && d(e);
                        var i = r.attrHandle[t.toLowerCase()],
                            o = i && O.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
                        return void 0 !== o ? o : n.attributes || !v ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }, oe.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, oe.uniqueSort = function (e) {
                        var t, r = [],
                            i = 0,
                            o = 0;
                        if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(j), f) {
                            for (; t = e[o++];) t === e[o] && (i = r.push(o));
                            for (; i--;) e.splice(r[i], 1)
                        }
                        return c = null, e
                    }, i = oe.getText = function (e) {
                        var t, n = "",
                            r = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += i(t);
                        return n
                    }, (r = oe.selectors = {
                        cacheLength: 50,
                        createPseudo: se,
                        match: Y,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(ne, re), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, re), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                            },
                            PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(ne, re).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function (e) {
                                var t = E[e + " "];
                                return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && E(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (e, t, n) {
                                return function (r) {
                                    var i = oe.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function (e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === i ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, u) {
                                    var l, c, f, d, p, h, v = o !== a ? "nextSibling" : "previousSibling",
                                        y = t.parentNode,
                                        g = s && t.nodeName.toLowerCase(),
                                        m = !u && !s;
                                    if (y) {
                                        if (o) {
                                            for (; v;) {
                                                for (f = t; f = f[v];)
                                                    if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                                h = v = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                            for (p = (l = (c = y[w] || (y[w] = {}))[e] || [])[0] === k && l[1], d = l[0] === k && l[2], f = p && y.childNodes[p]; f = ++p && f && f[v] || (d = p = 0) || h.pop();)
                                                if (1 === f.nodeType && ++d && f === t) {
                                                    c[e] = [k, p, d];
                                                    break
                                                }
                                        } else if (m && (l = (t[w] || (t[w] = {}))[e]) && l[0] === k) d = l[1];
                                        else
                                            for (;
                                                (f = ++p && f && f[v] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++d || (m && ((f[w] || (f[w] = {}))[e] = [k, d]), f !== t)););
                                        return (d -= i) === r || d % r == 0 && d / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function (e, t) {
                                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                                return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                                    for (var r, o = i(e, t), a = o.length; a--;) e[r = M(e, o[a])] = !(n[r] = o[a])
                                }) : function (e) {
                                    return i(e, 0, n)
                                }) : i
                            }
                        },
                        pseudos: {
                            not: se(function (e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace($, "$1"));
                                return r[w] ? se(function (e, t, n, i) {
                                    for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function (e, i, o) {
                                    return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: se(function (e) {
                                return function (t) {
                                    return oe(e, t).length > 0
                                }
                            }),
                            contains: se(function (e) {
                                return e = e.replace(ne, re),
                                    function (t) {
                                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: se(function (e) {
                                return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(ne, re).toLowerCase(),
                                    function (t) {
                                        var n;
                                        do {
                                            if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function (e) {
                                return e === h
                            },
                            focus: function (e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function (e) {
                                return !1 === e.disabled
                            },
                            disabled: function (e) {
                                return !0 === e.disabled
                            },
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function (e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function (e) {
                                return Q.test(e.nodeName)
                            },
                            input: function (e) {
                                return K.test(e.nodeName)
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: pe(function () {
                                return [0]
                            }),
                            last: pe(function (e, t) {
                                return [t - 1]
                            }),
                            eq: pe(function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: pe(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: pe(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: pe(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: pe(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = fe(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = de(t);

                function ve() {}

                function ye(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function ge(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === r,
                        o = _++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) return e(t, n, o)
                    } : function (t, n, a) {
                        var s, u, l = [k, o];
                        if (a) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || i) {
                                    if ((s = (u = t[w] || (t[w] = {}))[r]) && s[0] === k && s[1] === o) return l[2] = s[2];
                                    if (u[r] = l, l[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function me(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function be(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                    return a
                }

                function we(e, t, n, r, i, o) {
                    return r && !r[w] && (r = we(r)), i && !i[w] && (i = we(i, o)), se(function (o, a, s, u) {
                        var l, c, f, d = [],
                            p = [],
                            h = a.length,
                            v = o || function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !o && t ? v : be(v, d, e, s, u),
                            g = n ? i || (o ? e : h || r) ? [] : a : y;
                        if (n && n(y, g, s, u), r)
                            for (l = be(g, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (g[p[c]] = !(y[p[c]] = f));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (l = [], c = g.length; c--;)(f = g[c]) && l.push(y[c] = f);
                                    i(null, g = [], l, u)
                                }
                                for (c = g.length; c--;)(f = g[c]) && (l = i ? M(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f))
                            }
                        } else g = be(g === a ? g.splice(h, g.length) : g), i ? i(null, a, g, u) : D.apply(a, g)
                    })
                }

                function xe(e) {
                    for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = ge(function (e) {
                            return e === t
                        }, s, !0), f = ge(function (e) {
                            return M(t, e) > -1
                        }, s, !0), d = [function (e, n, r) {
                            var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return t = null, i
                        }]; u < o; u++)
                        if (n = r.relative[e[u].type]) d = [ge(me(d), n)];
                        else {
                            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[w]) {
                                for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                                return we(u > 1 && me(d), u > 1 && ye(e.slice(0, u - 1).concat({
                                    value: " " === e[u - 2].type ? "*" : ""
                                })).replace($, "$1"), n, u < i && xe(e.slice(u, i)), i < o && xe(e = e.slice(i)), i < o && ye(e))
                            }
                            d.push(n)
                        }
                    return me(d)
                }
                return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve, a = oe.tokenize = function (e, t) {
                    var n, i, o, a, s, u, l, c = T[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, u = [], l = r.preFilter; s;) {
                        for (a in n && !(i = G.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                                value: n,
                                type: i[0].replace($, " ")
                            }), s = s.slice(n.length)), r.filter) !(i = Y[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? oe.error(e) : T(e, u).slice(0)
                }, s = oe.compile = function (e, t) {
                    var n, i = [],
                        o = [],
                        s = C[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;)(s = xe(t[n]))[w] ? i.push(s) : o.push(s);
                        (s = C(e, function (e, t) {
                            var n = t.length > 0,
                                i = e.length > 0,
                                o = function (o, a, s, u, c) {
                                    var f, d, h, v = 0,
                                        y = "0",
                                        g = o && [],
                                        m = [],
                                        b = l,
                                        w = o || i && r.find.TAG("*", c),
                                        x = k += null == b ? 1 : Math.random() || .1,
                                        _ = w.length;
                                    for (c && (l = a !== p && a); y !== _ && null != (f = w[y]); y++) {
                                        if (i && f) {
                                            for (d = 0; h = e[d++];)
                                                if (h(f, a, s)) {
                                                    u.push(f);
                                                    break
                                                }
                                            c && (k = x)
                                        }
                                        n && ((f = !h && f) && v--, o && g.push(f))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (d = 0; h = t[d++];) h(g, m, a, s);
                                        if (o) {
                                            if (v > 0)
                                                for (; y--;) g[y] || m[y] || (m[y] = A.call(u));
                                            m = be(m)
                                        }
                                        D.apply(u, m), c && !o && m.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                                    }
                                    return c && (k = x, l = b), g
                                };
                            return n ? se(o) : o
                        }(o, i))).selector = e
                    }
                    return s
                }, u = oe.select = function (e, t, i, o) {
                    var u, l, c, f, d, p = "function" == typeof e && e,
                        h = !o && a(e = p.selector || e);
                    if (i = i || [], 1 === h.length) {
                        if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && n.getById && 9 === t.nodeType && v && r.relative[l[1].type]) {
                            if (!(t = (r.find.ID(c.matches[0].replace(ne, re), t) || [])[0])) return i;
                            p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (u = Y.needsContext.test(e) ? 0 : l.length; u-- && (c = l[u], !r.relative[f = c.type]);)
                            if ((d = r.find[f]) && (o = d(c.matches[0].replace(ne, re), ee.test(l[0].type) && he(t.parentNode) || t))) {
                                if (l.splice(u, 1), !(e = o.length && ye(l))) return D.apply(i, o), i;
                                break
                            }
                    }
                    return (p || s(e, h))(o, t, !v, i, ee.test(e) && he(t.parentNode) || t), i
                }, n.sortStable = w.split("").sort(j).join("") === w, n.detectDuplicates = !!f, d(), n.sortDetached = ue(function (e) {
                    return 1 & e.compareDocumentPosition(p.createElement("div"))
                }), ue(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || le("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && ue(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || le("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ue(function (e) {
                    return null == e.getAttribute("disabled")
                }) || le(q, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), oe
            }(n);
            v.find = x, v.expr = x.selectors, v.expr[":"] = v.expr.pseudos, v.unique = x.uniqueSort, v.text = x.getText, v.isXMLDoc = x.isXML, v.contains = x.contains;
            var k = v.expr.match.needsContext,
                _ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                E = /^.[^:#\[\.,]*$/;

            function T(e, t, n) {
                if (v.isFunction(t)) return v.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType) return v.grep(e, function (e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (E.test(t)) return v.filter(t, e, n);
                    t = v.filter(t, e)
                }
                return v.grep(e, function (e) {
                    return l.call(t, e) >= 0 !== n
                })
            }
            v.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? v.find.matchesSelector(r, e) ? [r] : [] : v.find.matches(e, v.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, v.fn.extend({
                find: function (e) {
                    var t, n = this.length,
                        r = [],
                        i = this;
                    if ("string" != typeof e) return this.pushStack(v(e).filter(function () {
                        for (t = 0; t < n; t++)
                            if (v.contains(i[t], this)) return !0
                    }));
                    for (t = 0; t < n; t++) v.find(e, i[t], r);
                    return (r = this.pushStack(n > 1 ? v.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r
                },
                filter: function (e) {
                    return this.pushStack(T(this, e || [], !1))
                },
                not: function (e) {
                    return this.pushStack(T(this, e || [], !0))
                },
                is: function (e) {
                    return !!T(this, "string" == typeof e && k.test(e) ? v(e) : e || [], !1).length
                }
            });
            var C, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (v.fn.init = function (e, t) {
                var n, r;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || C).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof v ? t[0] : t, v.merge(this, v.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : h, !0)), _.test(n[1]) && v.isPlainObject(t))
                            for (n in t) v.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return (r = h.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = h, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : v.isFunction(e) ? void 0 !== C.ready ? C.ready(e) : e(v) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
            }).prototype = v.fn, C = v(h);
            var S = /^(?:parents|prev(?:Until|All))/,
                O = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function P(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            v.extend({
                dir: function (e, t, n) {
                    for (var r = [], i = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && v(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                sibling: function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            }), v.fn.extend({
                has: function (e) {
                    var t = v(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++)
                            if (v.contains(this, t[e])) return !0
                    })
                },
                closest: function (e, t) {
                    for (var n, r = 0, i = this.length, o = [], a = k.test(e) || "string" != typeof e ? v(e, t || this.context) : 0; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? v.unique(o) : o)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? l.call(v(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(v.unique(v.merge(this.get(), v(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), v.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (e) {
                    return v.dir(e, "parentNode")
                },
                parentsUntil: function (e, t, n) {
                    return v.dir(e, "parentNode", n)
                },
                next: function (e) {
                    return P(e, "nextSibling")
                },
                prev: function (e) {
                    return P(e, "previousSibling")
                },
                nextAll: function (e) {
                    return v.dir(e, "nextSibling")
                },
                prevAll: function (e) {
                    return v.dir(e, "previousSibling")
                },
                nextUntil: function (e, t, n) {
                    return v.dir(e, "nextSibling", n)
                },
                prevUntil: function (e, t, n) {
                    return v.dir(e, "previousSibling", n)
                },
                siblings: function (e) {
                    return v.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return v.sibling(e.firstChild)
                },
                contents: function (e) {
                    return e.contentDocument || v.merge([], e.childNodes)
                }
            }, function (e, t) {
                v.fn[e] = function (n, r) {
                    var i = v.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = v.filter(r, i)), this.length > 1 && (O[e] || v.unique(i), S.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var A, L = /\S+/g,
                D = {};

            function N() {
                h.removeEventListener("DOMContentLoaded", N, !1), n.removeEventListener("load", N, !1), v.ready()
            }
            v.Callbacks = function (e) {
                e = "string" == typeof e ? D[e] || function (e) {
                    var t = D[e] = {};
                    return v.each(e.match(L) || [], function (e, n) {
                        t[n] = !0
                    }), t
                }(e) : v.extend({}, e);
                var t, n, r, i, o, a, s = [],
                    u = !e.once && [],
                    l = function (f) {
                        for (t = e.memory && f, n = !0, a = i || 0, i = 0, o = s.length, r = !0; s && a < o; a++)
                            if (!1 === s[a].apply(f[0], f[1]) && e.stopOnFalse) {
                                t = !1;
                                break
                            }
                        r = !1, s && (u ? u.length && l(u.shift()) : t ? s = [] : c.disable())
                    },
                    c = {
                        add: function () {
                            if (s) {
                                var n = s.length;
                                ! function t(n) {
                                    v.each(n, function (n, r) {
                                        var i = v.type(r);
                                        "function" === i ? e.unique && c.has(r) || s.push(r) : r && r.length && "string" !== i && t(r)
                                    })
                                }(arguments), r ? o = s.length : t && (i = n, l(t))
                            }
                            return this
                        },
                        remove: function () {
                            return s && v.each(arguments, function (e, t) {
                                for (var n;
                                    (n = v.inArray(t, s, n)) > -1;) s.splice(n, 1), r && (n <= o && o--, n <= a && a--)
                            }), this
                        },
                        has: function (e) {
                            return e ? v.inArray(e, s) > -1 : !(!s || !s.length)
                        },
                        empty: function () {
                            return s = [], o = 0, this
                        },
                        disable: function () {
                            return s = u = t = void 0, this
                        },
                        disabled: function () {
                            return !s
                        },
                        lock: function () {
                            return u = void 0, t || c.disable(), this
                        },
                        locked: function () {
                            return !u
                        },
                        fireWith: function (e, t) {
                            return !s || n && !u || (t = [e, (t = t || []).slice ? t.slice() : t], r ? u.push(t) : l(t)), this
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!n
                        }
                    };
                return c
            }, v.extend({
                Deferred: function (e) {
                    var t = [["resolve", "done", v.Callbacks("once memory"), "resolved"], ["reject", "fail", v.Callbacks("once memory"), "rejected"], ["notify", "progress", v.Callbacks("memory")]],
                        n = "pending",
                        r = {
                            state: function () {
                                return n
                            },
                            always: function () {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function () {
                                var e = arguments;
                                return v.Deferred(function (n) {
                                    v.each(t, function (t, o) {
                                        var a = v.isFunction(e[t]) && e[t];
                                        i[o[1]](function () {
                                            var e = a && a.apply(this, arguments);
                                            e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function (e) {
                                return null != e ? v.extend(e, r) : r
                            }
                        },
                        i = {};
                    return r.pipe = r.then, v.each(t, function (e, o) {
                        var a = o[2],
                            s = o[3];
                        r[o[1]] = a.add, s && a.add(function () {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                            return i[o[0] + "With"](this === i ? r : this, arguments), this
                        }, i[o[0] + "With"] = a.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function (e) {
                    var t, n, r, i = 0,
                        o = a.call(arguments),
                        s = o.length,
                        u = 1 !== s || e && v.isFunction(e.promise) ? s : 0,
                        l = 1 === u ? e : v.Deferred(),
                        c = function (e, n, r) {
                            return function (i) {
                                n[e] = this, r[e] = arguments.length > 1 ? a.call(arguments) : i, r === t ? l.notifyWith(n, r) : --u || l.resolveWith(n, r)
                            }
                        };
                    if (s > 1)
                        for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && v.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(l.reject).progress(c(i, n, t)) : --u;
                    return u || l.resolveWith(r, o), l.promise()
                }
            }), v.fn.ready = function (e) {
                return v.ready.promise().done(e), this
            }, v.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? v.readyWait++ : v.ready(!0)
                },
                ready: function (e) {
                    (!0 === e ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== e && --v.readyWait > 0 || (A.resolveWith(h, [v]), v.fn.triggerHandler && (v(h).triggerHandler("ready"), v(h).off("ready"))))
                }
            }), v.ready.promise = function (e) {
                return A || (A = v.Deferred(), "complete" === h.readyState ? setTimeout(v.ready) : (h.addEventListener("DOMContentLoaded", N, !1), n.addEventListener("load", N, !1))), A.promise(e)
            }, v.ready.promise();
            var M = v.access = function (e, t, n, r, i, o, a) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === v.type(n))
                    for (s in i = !0, n) v.access(e, t, s, n[s], !0, o, a);
                else if (void 0 !== r && (i = !0, v.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                        return l.call(v(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            };

            function q() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function () {
                        return {}
                    }
                }), this.expando = v.expando + q.uid++
            }
            v.acceptData = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }, q.uid = 1, q.accepts = v.acceptData, q.prototype = {
                key: function (e) {
                    if (!q.accepts(e)) return 0;
                    var t = {},
                        n = e[this.expando];
                    if (!n) {
                        n = q.uid++;
                        try {
                            t[this.expando] = {
                                value: n
                            }, Object.defineProperties(e, t)
                        } catch (r) {
                            t[this.expando] = n, v.extend(e, t)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                },
                set: function (e, t, n) {
                    var r, i = this.key(e),
                        o = this.cache[i];
                    if ("string" == typeof t) o[t] = n;
                    else if (v.isEmptyObject(o)) v.extend(this.cache[i], t);
                    else
                        for (r in t) o[r] = t[r];
                    return o
                },
                get: function (e, t) {
                    var n = this.cache[this.key(e)];
                    return void 0 === t ? n : n[t]
                },
                access: function (e, t, n) {
                    var r;
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, v.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function (e, t) {
                    var n, r, i, o = this.key(e),
                        a = this.cache[o];
                    if (void 0 === t) this.cache[o] = {};
                    else {
                        v.isArray(t) ? r = t.concat(t.map(v.camelCase)) : (i = v.camelCase(t), r = t in a ? [t, i] : (r = i) in a ? [r] : r.match(L) || []), n = r.length;
                        for (; n--;) delete a[r[n]]
                    }
                },
                hasData: function (e) {
                    return !v.isEmptyObject(this.cache[e[this.expando]] || {})
                },
                discard: function (e) {
                    e[this.expando] && delete this.cache[e[this.expando]]
                }
            };
            var I = new q,
                F = new q,
                H = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                R = /([A-Z])/g;

            function B(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(R, "-$1").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : H.test(n) ? v.parseJSON(n) : n)
                        } catch (e) {}
                        F.set(e, t, n)
                    } else n = void 0;
                return n
            }
            v.extend({
                hasData: function (e) {
                    return F.hasData(e) || I.hasData(e)
                },
                data: function (e, t, n) {
                    return F.access(e, t, n)
                },
                removeData: function (e, t) {
                    F.remove(e, t)
                },
                _data: function (e, t, n) {
                    return I.access(e, t, n)
                },
                _removeData: function (e, t) {
                    I.remove(e, t)
                }
            }), v.fn.extend({
                data: function (e, t) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = F.get(o), 1 === o.nodeType && !I.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = v.camelCase(r.slice(5)), B(o, r, i[r]));
                            I.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function () {
                        F.set(this, e)
                    }) : M(this, function (t) {
                        var n, r = v.camelCase(e);
                        if (o && void 0 === t) return void 0 !== (n = F.get(o, e)) ? n : void 0 !== (n = F.get(o, r)) ? n : void 0 !== (n = B(o, r, void 0)) ? n : void 0;
                        this.each(function () {
                            var n = F.get(this, r);
                            F.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && F.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function (e) {
                    return this.each(function () {
                        F.remove(this, e)
                    })
                }
            }), v.extend({
                queue: function (e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = I.get(e, t), n && (!r || v.isArray(n) ? r = I.access(e, t, v.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = v.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = v._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                        v.dequeue(e, t)
                    }, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return I.get(e, n) || I.access(e, n, {
                        empty: v.Callbacks("once memory").add(function () {
                            I.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), v.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? v.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = v.queue(this, e, t);
                        v._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && v.dequeue(this, e)
                    })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        v.dequeue(this, e)
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    var n, r = 1,
                        i = v.Deferred(),
                        o = this,
                        a = this.length,
                        s = function () {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = I.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var W, $, G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                z = ["Top", "Right", "Bottom", "Left"],
                V = function (e, t) {
                    return e = t || e, "none" === v.css(e, "display") || !v.contains(e.ownerDocument, e)
                },
                X = /^(?:checkbox|radio)$/i;
            W = h.createDocumentFragment().appendChild(h.createElement("div")), ($ = h.createElement("input")).setAttribute("type", "radio"), $.setAttribute("checked", "checked"), $.setAttribute("name", "t"), W.appendChild($), p.checkClone = W.cloneNode(!0).cloneNode(!0).lastChild.checked, W.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!W.cloneNode(!0).lastChild.defaultValue, p.focusinBubbles = "onfocusin" in n;
            var U = /^key/,
                Y = /^(?:mouse|pointer|contextmenu)|click/,
                K = /^(?:focusinfocus|focusoutblur)$/,
                Q = /^([^.]*)(?:\.(.+)|)$/;

            function J() {
                return !0
            }

            function Z() {
                return !1
            }

            function ee() {
                try {
                    return h.activeElement
                } catch (e) {}
            }
            v.event = {
                global: {},
                add: function (e, t, n, r, i) {
                    var o, a, s, u, l, c, f, d, p, h, y, g = I.get(e);
                    if (g)
                        for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = v.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                                return void 0 !== v && v.event.triggered !== t.type ? v.event.dispatch.apply(e, arguments) : void 0
                            }), l = (t = (t || "").match(L) || [""]).length; l--;) p = y = (s = Q.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = v.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = v.event.special[p] || {}, c = v.extend({
                            type: p,
                            origType: y,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && v.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), v.event.global[p] = !0)
                },
                remove: function (e, t, n, r, i) {
                    var o, a, s, u, l, c, f, d, p, h, y, g = I.hasData(e) && I.get(e);
                    if (g && (u = g.events)) {
                        for (l = (t = (t || "").match(L) || [""]).length; l--;)
                            if (p = y = (s = Q.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                                for (f = v.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && y !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                                a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || v.removeEvent(e, p, g.handle), delete u[p])
                            } else
                                for (p in u) v.event.remove(e, p + t[l], n, r, !0);
                        v.isEmptyObject(u) && (delete g.handle, I.remove(e, "events"))
                    }
                },
                trigger: function (e, t, r, i) {
                    var o, a, s, u, l, c, f, p = [r || h],
                        y = d.call(e, "type") ? e.type : e,
                        g = d.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (a = s = r = r || h, 3 !== r.nodeType && 8 !== r.nodeType && !K.test(y + v.event.triggered) && (y.indexOf(".") >= 0 && (g = y.split("."), y = g.shift(), g.sort()), l = y.indexOf(":") < 0 && "on" + y, (e = e[v.expando] ? e : new v.Event(y, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : v.makeArray(t, [e]), f = v.event.special[y] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                        if (!i && !f.noBubble && !v.isWindow(r)) {
                            for (u = f.delegateType || y, K.test(u + y) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                            s === (r.ownerDocument || h) && p.push(s.defaultView || s.parentWindow || n)
                        }
                        for (o = 0;
                            (a = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : f.bindType || y, (c = (I.get(a, "events") || {})[e.type] && I.get(a, "handle")) && c.apply(a, t), (c = l && a[l]) && c.apply && v.acceptData(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                        return e.type = y, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), t) || !v.acceptData(r) || l && v.isFunction(r[y]) && !v.isWindow(r) && ((s = r[l]) && (r[l] = null), v.event.triggered = y, r[y](), v.event.triggered = void 0, s && (r[l] = s)), e.result
                    }
                },
                dispatch: function (e) {
                    e = v.event.fix(e);
                    var t, n, r, i, o, s, u = a.call(arguments),
                        l = (I.get(this, "events") || {})[e.type] || [],
                        c = v.event.special[e.type] || {};
                    if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                        for (s = v.event.handlers.call(this, e, l), t = 0;
                            (i = s[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((v.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, i, o, a = [],
                        s = t.delegateCount,
                        u = e.target;
                    if (s && u.nodeType && (!e.button || "click" !== e.type))
                        for (; u !== this; u = u.parentNode || this)
                            if (!0 !== u.disabled || "click" !== e.type) {
                                for (r = [], n = 0; n < s; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? v(i, this).index(u) >= 0 : v.find(i, this, null, [u]).length), r[i] && r.push(o);
                                r.length && a.push({
                                    elem: u,
                                    handlers: r
                                })
                            }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }), a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, t) {
                        var n, r, i, o = t.button;
                        return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || h).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                    }
                },
                fix: function (e) {
                    if (e[v.expando]) return e;
                    var t, n, r, i = e.type,
                        o = e,
                        a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = Y.test(i) ? this.mouseHooks : U.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new v.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
                    return e.target || (e.target = h), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            if (this !== ee() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            if (this === ee() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && v.nodeName(this, "input")) return this.click(), !1
                        },
                        _default: function (e) {
                            return v.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, n, r) {
                    var i = v.extend(new v.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, v.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }, v.Event = function (e, t) {
                if (!(this instanceof v.Event)) return new v.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? J : Z) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
            }, v.Event.prototype = {
                isDefaultPrevented: Z,
                isPropagationStopped: Z,
                isImmediatePropagationStopped: Z,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = J, e && e.preventDefault && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = J, e && e.stopPropagation && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = J, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, v.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                v.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, r = e.relatedTarget,
                            i = e.handleObj;
                        return r && (r === this || v.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), p.focusinBubbles || v.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = function (e) {
                    v.event.simulate(t, e.target, v.event.fix(e), !0)
                };
                v.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = I.access(r, t);
                        i || r.addEventListener(e, n, !0), I.access(r, t, (i || 0) + 1)
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = I.access(r, t) - 1;
                        i ? I.access(r, t, i) : (r.removeEventListener(e, n, !0), I.remove(r, t))
                    }
                }
            }), v.fn.extend({
                on: function (e, t, n, r, i) {
                    var o, a;
                    if ("object" == typeof e) {
                        for (a in "string" != typeof t && (n = n || t, t = void 0), e) this.on(a, t, n, e[a], i);
                        return this
                    }
                    if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = Z;
                    else if (!r) return this;
                    return 1 === i && (o = r, (r = function (e) {
                        return v().off(e), o.apply(this, arguments)
                    }).guid = o.guid || (o.guid = v.guid++)), this.each(function () {
                        v.event.add(this, e, r, n, t)
                    })
                },
                one: function (e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, v(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Z), this.each(function () {
                        v.event.remove(this, e, n, t)
                    })
                },
                trigger: function (e, t) {
                    return this.each(function () {
                        v.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return v.event.trigger(e, t, n, !0)
                }
            });
            var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                ne = /<([\w:]+)/,
                re = /<|&#?\w+;/,
                ie = /<(?:script|style|link)/i,
                oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                ae = /^$|\/(?:java|ecma)script/i,
                se = /^true\/(.*)/,
                ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                le = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function ce(e, t) {
                return v.nodeName(e, "table") && v.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function fe(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function de(e) {
                var t = se.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function pe(e, t) {
                for (var n = 0, r = e.length; n < r; n++) I.set(e[n], "globalEval", !t || I.get(t[n], "globalEval"))
            }

            function he(e, t) {
                var n, r, i, o, a, s, u, l;
                if (1 === t.nodeType) {
                    if (I.hasData(e) && (o = I.access(e), a = I.set(t, o), l = o.events))
                        for (i in delete a.handle, a.events = {}, l)
                            for (n = 0, r = l[i].length; n < r; n++) v.event.add(t, i, l[i][n]);
                    F.hasData(e) && (s = F.access(e), u = v.extend({}, s), F.set(t, u))
                }
            }

            function ve(e, t) {
                var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && v.nodeName(e, t) ? v.merge([e], n) : n
            }
            le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td, v.extend({
                clone: function (e, t, n) {
                    var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                        f = v.contains(e.ownerDocument, e);
                    if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || v.isXMLDoc(e)))
                        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && X.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                    if (t)
                        if (n)
                            for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) he(o[r], a[r]);
                        else he(e, c);
                    return (a = ve(c, "script")).length > 0 && pe(a, !f && ve(e, "script")), c
                },
                buildFragment: function (e, t, n, r) {
                    for (var i, o, a, s, u, l, c = t.createDocumentFragment(), f = [], d = 0, p = e.length; d < p; d++)
                        if ((i = e[d]) || 0 === i)
                            if ("object" === v.type(i)) v.merge(f, i.nodeType ? [i] : i);
                            else if (re.test(i)) {
                        for (o = o || c.appendChild(t.createElement("div")), a = (ne.exec(i) || ["", ""])[1].toLowerCase(), s = le[a] || le._default, o.innerHTML = s[1] + i.replace(te, "<$1></$2>") + s[2], l = s[0]; l--;) o = o.lastChild;
                        v.merge(f, o.childNodes), (o = c.firstChild).textContent = ""
                    } else f.push(t.createTextNode(i));
                    for (c.textContent = "", d = 0; i = f[d++];)
                        if ((!r || -1 === v.inArray(i, r)) && (u = v.contains(i.ownerDocument, i), o = ve(c.appendChild(i), "script"), u && pe(o), n))
                            for (l = 0; i = o[l++];) ae.test(i.type || "") && n.push(i);
                    return c
                },
                cleanData: function (e) {
                    for (var t, n, r, i, o = v.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                        if (v.acceptData(n) && (i = n[I.expando]) && (t = I.cache[i])) {
                            if (t.events)
                                for (r in t.events) o[r] ? v.event.remove(n, r) : v.removeEvent(n, r, t.handle);
                            I.cache[i] && delete I.cache[i]
                        }
                        delete F.cache[n[F.expando]]
                    }
                }
            }), v.fn.extend({
                text: function (e) {
                    return M(this, function (e) {
                        return void 0 === e ? v.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function () {
                    return this.domManip(arguments, function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ce(this, e).appendChild(e)
                    })
                },
                prepend: function () {
                    return this.domManip(arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = ce(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function () {
                    return this.domManip(arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function (e, t) {
                    for (var n, r = e ? v.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || v.cleanData(ve(n)), n.parentNode && (t && v.contains(n.ownerDocument, n) && pe(ve(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (v.cleanData(ve(e, !1)), e.textContent = "");
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return v.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return M(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !ie.test(e) && !le[(ne.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(te, "<$1></$2>");
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (v.cleanData(ve(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function () {
                    var e = arguments[0];
                    return this.domManip(arguments, function (t) {
                        e = this.parentNode, v.cleanData(ve(this)), e && e.replaceChild(t, this)
                    }), e && (e.length || e.nodeType) ? this : this.remove()
                },
                detach: function (e) {
                    return this.remove(e, !0)
                },
                domManip: function (e, t) {
                    e = s.apply([], e);
                    var n, r, i, o, a, u, l = 0,
                        c = this.length,
                        f = this,
                        d = c - 1,
                        h = e[0],
                        y = v.isFunction(h);
                    if (y || c > 1 && "string" == typeof h && !p.checkClone && oe.test(h)) return this.each(function (n) {
                        var r = f.eq(n);
                        y && (e[0] = h.call(this, n, r.html())), r.domManip(e, t)
                    });
                    if (c && (r = (n = v.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === n.childNodes.length && (n = r), r)) {
                        for (o = (i = v.map(ve(n, "script"), fe)).length; l < c; l++) a = n, l !== d && (a = v.clone(a, !0, !0), o && v.merge(i, ve(a, "script"))), t.call(this[l], a, l);
                        if (o)
                            for (u = i[i.length - 1].ownerDocument, v.map(i, de), l = 0; l < o; l++) a = i[l], ae.test(a.type || "") && !I.access(a, "globalEval") && v.contains(u, a) && (a.src ? v._evalUrl && v._evalUrl(a.src) : v.globalEval(a.textContent.replace(ue, "")))
                    }
                    return this
                }
            }), v.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                v.fn[e] = function (e) {
                    for (var n, r = [], i = v(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), v(i[a])[t](n), u.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var ye, ge = {};

            function me(e, t) {
                var r, i = v(t.createElement(e)).appendTo(t.body),
                    o = n.getDefaultComputedStyle && (r = n.getDefaultComputedStyle(i[0])) ? r.display : v.css(i[0], "display");
                return i.detach(), o
            }

            function be(e) {
                var t = h,
                    n = ge[e];
                return n || ("none" !== (n = me(e, t)) && n || ((t = (ye = (ye || v("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = me(e, t), ye.detach()), ge[e] = n), n
            }
            var we = /^margin/,
                xe = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
                ke = function (e) {
                    return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : n.getComputedStyle(e, null)
                };

            function _e(e, t, n) {
                var r, i, o, a, s = e.style;
                return (n = n || ke(e)) && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || v.contains(e.ownerDocument, e) || (a = v.style(e, t)), xe.test(a) && we.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function Ee(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function () {
                var e, t, r = h.documentElement,
                    i = h.createElement("div"),
                    o = h.createElement("div");

                function a() {
                    o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", r.appendChild(i);
                    var a = n.getComputedStyle(o, null);
                    e = "1%" !== a.top, t = "4px" === a.width, r.removeChild(i)
                }
                o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === o.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(o), n.getComputedStyle && v.extend(p, {
                    pixelPosition: function () {
                        return a(), e
                    },
                    boxSizingReliable: function () {
                        return null == t && a(), t
                    },
                    reliableMarginRight: function () {
                        var e, t = o.appendChild(h.createElement("div"));
                        return t.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", o.style.width = "1px", r.appendChild(i), e = !parseFloat(n.getComputedStyle(t, null).marginRight), r.removeChild(i), o.removeChild(t), e
                    }
                }))
            }(), v.swap = function (e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                return i
            };
            var Te = /^(none|table(?!-c[ea]).+)/,
                Ce = new RegExp("^(" + G + ")(.*)$", "i"),
                je = new RegExp("^([+-])=(" + G + ")", "i"),
                Se = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Oe = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Pe = ["Webkit", "O", "Moz", "ms"];

            function Ae(e, t) {
                if (t in e) return t;
                for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Pe.length; i--;)
                    if ((t = Pe[i] + n) in e) return t;
                return r
            }

            function Le(e, t, n) {
                var r = Ce.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function De(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += v.css(e, n + z[o], !0, i)), r ? ("content" === n && (a -= v.css(e, "padding" + z[o], !0, i)), "margin" !== n && (a -= v.css(e, "border" + z[o] + "Width", !0, i))) : (a += v.css(e, "padding" + z[o], !0, i), "padding" !== n && (a += v.css(e, "border" + z[o] + "Width", !0, i)));
                return a
            }

            function Ne(e, t, n) {
                var r = !0,
                    i = "width" === t ? e.offsetWidth : e.offsetHeight,
                    o = ke(e),
                    a = "border-box" === v.css(e, "boxSizing", !1, o);
                if (i <= 0 || null == i) {
                    if (((i = _e(e, t, o)) < 0 || null == i) && (i = e.style[t]), xe.test(i)) return i;
                    r = a && (p.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + De(e, t, n || (a ? "border" : "content"), r, o) + "px"
            }

            function Me(e, t) {
                for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (o[a] = I.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && V(r) && (o[a] = I.access(r, "olddisplay", be(r.nodeName)))) : (i = V(r), "none" === n && i || I.set(r, "olddisplay", i ? n : v.css(r, "display"))));
                for (a = 0; a < s; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
                return e
            }

            function qe(e, t, n, r, i) {
                return new qe.prototype.init(e, t, n, r, i)
            }
            v.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = _e(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = v.camelCase(t),
                            u = e.style;
                        if (t = v.cssProps[s] || (v.cssProps[s] = Ae(u, s)), a = v.cssHooks[t] || v.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                        "string" === (o = typeof n) && (i = je.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(v.css(e, t)), o = "number"), null != n && n == n && ("number" !== o || v.cssNumber[s] || (n += "px"), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))
                    }
                },
                css: function (e, t, n, r) {
                    var i, o, a, s = v.camelCase(t);
                    return t = v.cssProps[s] || (v.cssProps[s] = Ae(e.style, s)), (a = v.cssHooks[t] || v.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Oe && (i = Oe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || v.isNumeric(o) ? o || 0 : i) : i
                }
            }), v.each(["height", "width"], function (e, t) {
                v.cssHooks[t] = {
                    get: function (e, n, r) {
                        if (n) return Te.test(v.css(e, "display")) && 0 === e.offsetWidth ? v.swap(e, Se, function () {
                            return Ne(e, t, r)
                        }) : Ne(e, t, r)
                    },
                    set: function (e, n, r) {
                        var i = r && ke(e);
                        return Le(0, n, r ? De(e, t, r, "border-box" === v.css(e, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), v.cssHooks.marginRight = Ee(p.reliableMarginRight, function (e, t) {
                if (t) return v.swap(e, {
                    display: "inline-block"
                }, _e, [e, "marginRight"])
            }), v.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (e, t) {
                v.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + z[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, we.test(e) || (v.cssHooks[e + t].set = Le)
            }), v.fn.extend({
                css: function (e, t) {
                    return M(this, function (e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (v.isArray(t)) {
                            for (r = ke(e), i = t.length; a < i; a++) o[t[a]] = v.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? v.style(e, t, n) : v.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function () {
                    return Me(this, !0)
                },
                hide: function () {
                    return Me(this)
                },
                toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        V(this) ? v(this).show() : v(this).hide()
                    })
                }
            }), v.Tween = qe, qe.prototype = {
                constructor: qe,
                init: function (e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (v.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = qe.propHooks[this.prop];
                    return e && e.get ? e.get(this) : qe.propHooks._default.get(this)
                },
                run: function (e) {
                    var t, n = qe.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : qe.propHooks._default.set(this), this
                }
            }, qe.prototype.init.prototype = qe.prototype, qe.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = v.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
                    },
                    set: function (e) {
                        v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[v.cssProps[e.prop]] || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, qe.propHooks.scrollTop = qe.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, v.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, v.fx = qe.prototype.init, v.fx.step = {};
            var Ie, Fe, He = /^(?:toggle|show|hide)$/,
                Re = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
                Be = /queueHooks$/,
                We = [function (e, t, n) {
                    var r, i, o, a, s, u, l, c = this,
                        f = {},
                        d = e.style,
                        p = e.nodeType && V(e),
                        h = I.get(e, "fxshow");
                    n.queue || (null == (s = v._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
                        s.unqueued || u()
                    }), s.unqueued++, c.always(function () {
                        c.always(function () {
                            s.unqueued--, v.queue(e, "fx").length || s.empty.fire()
                        })
                    }));
                    1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = v.css(e, "display"), "inline" === ("none" === l ? I.get(e, "olddisplay") || be(e.nodeName) : l) && "none" === v.css(e, "float") && (d.display = "inline-block"));
                    n.overflow && (d.overflow = "hidden", c.always(function () {
                        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                    }));
                    for (r in t)
                        if (i = t[r], He.exec(i)) {
                            if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                                if ("show" !== i || !h || void 0 === h[r]) continue;
                                p = !0
                            }
                            f[r] = h && h[r] || v.style(e, r)
                        } else l = void 0;
                    if (v.isEmptyObject(f)) "inline" === ("none" === l ? be(e.nodeName) : l) && (d.display = l);
                    else
                        for (r in h ? "hidden" in h && (p = h.hidden) : h = I.access(e, "fxshow", {}), o && (h.hidden = !p), p ? v(e).show() : c.done(function () {
                                v(e).hide()
                            }), c.done(function () {
                                var t;
                                for (t in I.remove(e, "fxshow"), f) v.style(e, t, f[t])
                            }), f) a = Ve(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
                }],
                $e = {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            i = Re.exec(t),
                            o = i && i[3] || (v.cssNumber[e] ? "" : "px"),
                            a = (v.cssNumber[e] || "px" !== o && +r) && Re.exec(v.css(n.elem, e)),
                            s = 1,
                            u = 20;
                        if (a && a[3] !== o) {
                            o = o || a[3], i = i || [], a = +r || 1;
                            do {
                                a /= s = s || ".5", v.style(n.elem, e, a + o)
                            } while (s !== (s = n.cur() / r) && 1 !== s && --u)
                        }
                        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                    }]
                };

            function Ge() {
                return setTimeout(function () {
                    Ie = void 0
                }), Ie = v.now()
            }

            function ze(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = z[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function Ve(e, t, n) {
                for (var r, i = ($e[t] || []).concat($e["*"]), o = 0, a = i.length; o < a; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function Xe(e, t, n) {
                var r, i, o = 0,
                    a = We.length,
                    s = v.Deferred().always(function () {
                        delete u.elem
                    }),
                    u = function () {
                        if (i) return !1;
                        for (var t = Ie || Ge(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (s.resolveWith(e, [l]), !1)
                    },
                    l = s.promise({
                        elem: e,
                        props: v.extend({}, t),
                        opts: v.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Ie || Ge(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var r = v.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r
                        },
                        stop: function (t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; n < r; n++) l.tweens[n].run(1);
                            return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    c = l.props;
                for (! function (e, t) {
                        var n, r, i, o, a;
                        for (n in e)
                            if (i = t[r = v.camelCase(n)], o = e[n], v.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = v.cssHooks[r]) && "expand" in a)
                                for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                            else t[r] = i
                    }(c, l.opts.specialEasing); o < a; o++)
                    if (r = We[o].call(l, e, c, l.opts)) return r;
                return v.map(c, Ve, l), v.isFunction(l.opts.start) && l.opts.start.call(e, l), v.fx.timer(v.extend(u, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }
            v.Animation = v.extend(Xe, {
                    tweener: function (e, t) {
                        v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], $e[n] = $e[n] || [], $e[n].unshift(t)
                    },
                    prefilter: function (e, t) {
                        t ? We.unshift(e) : We.push(e)
                    }
                }), v.speed = function (e, t, n) {
                    var r = e && "object" == typeof e ? v.extend({}, e) : {
                        complete: n || !n && t || v.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !v.isFunction(t) && t
                    };
                    return r.duration = v.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                        v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
                    }, r
                }, v.fn.extend({
                    fadeTo: function (e, t, n, r) {
                        return this.filter(V).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function (e, t, n, r) {
                        var i = v.isEmptyObject(e),
                            o = v.speed(t, n, r),
                            a = function () {
                                var t = Xe(this, v.extend({}, e), o);
                                (i || I.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function (e, t, n) {
                        var r = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = v.timers,
                                a = I.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && Be.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                            !t && n || v.dequeue(this, e)
                        })
                    },
                    finish: function (e) {
                        return !1 !== e && (e = e || "fx"), this.each(function () {
                            var t, n = I.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = v.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, v.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), v.each(["toggle", "show", "hide"], function (e, t) {
                    var n = v.fn[t];
                    v.fn[t] = function (e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ze(t, !0), e, r, i)
                    }
                }), v.each({
                    slideDown: ze("show"),
                    slideUp: ze("hide"),
                    slideToggle: ze("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function (e, t) {
                    v.fn[e] = function (e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), v.timers = [], v.fx.tick = function () {
                    var e, t = 0,
                        n = v.timers;
                    for (Ie = v.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || v.fx.stop(), Ie = void 0
                }, v.fx.timer = function (e) {
                    v.timers.push(e), e() ? v.fx.start() : v.timers.pop()
                }, v.fx.interval = 13, v.fx.start = function () {
                    Fe || (Fe = setInterval(v.fx.tick, v.fx.interval))
                }, v.fx.stop = function () {
                    clearInterval(Fe), Fe = null
                }, v.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, v.fn.delay = function (e, t) {
                    return e = v.fx && v.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function () {
                            clearTimeout(r)
                        }
                    })
                },
                function () {
                    var e = h.createElement("input"),
                        t = h.createElement("select"),
                        n = t.appendChild(h.createElement("option"));
                    e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = n.selected, t.disabled = !0, p.optDisabled = !n.disabled, (e = h.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
                }();
            var Ue, Ye = v.expr.attrHandle;
            v.fn.extend({
                attr: function (e, t) {
                    return M(this, v.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        v.removeAttr(this, e)
                    })
                }
            }), v.extend({
                attr: function (e, t, n) {
                    var r, i, o = e.nodeType;
                    if (e && 3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? v.prop(e, t, n) : (1 === o && v.isXMLDoc(e) || (t = t.toLowerCase(), r = v.attrHooks[t] || (v.expr.match.bool.test(t) ? Ue : void 0)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = v.find.attr(e, t)) ? void 0 : i : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void v.removeAttr(e, t))
                },
                removeAttr: function (e, t) {
                    var n, r, i = 0,
                        o = t && t.match(L);
                    if (o && 1 === e.nodeType)
                        for (; n = o[i++];) r = v.propFix[n] || n, v.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!p.radioValue && "radio" === t && v.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }
            }), Ue = {
                set: function (e, t, n) {
                    return !1 === t ? v.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, v.each(v.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = Ye[t] || v.find.attr;
                Ye[t] = function (e, t, r) {
                    var i, o;
                    return r || (o = Ye[t], Ye[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ye[t] = o), i
                }
            });
            var Ke = /^(?:input|select|textarea|button)$/i;
            v.fn.extend({
                prop: function (e, t) {
                    return M(this, v.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[v.propFix[e] || e]
                    })
                }
            }), v.extend({
                propFix: {
                    for: "htmlFor",
                    class: "className"
                },
                prop: function (e, t, n) {
                    var r, i, o = e.nodeType;
                    if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !v.isXMLDoc(e)) && (t = v.propFix[t] || t, i = v.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            return e.hasAttribute("tabindex") || Ke.test(e.nodeName) || e.href ? e.tabIndex : -1
                        }
                    }
                }
            }), p.optSelected || (v.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }
            }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                v.propFix[this.toLowerCase()] = this
            });
            var Qe = /[\t\r\n\f]/g;
            v.fn.extend({
                addClass: function (e) {
                    var t, n, r, i, o, a, s = "string" == typeof e && e,
                        u = 0,
                        l = this.length;
                    if (v.isFunction(e)) return this.each(function (t) {
                        v(this).addClass(e.call(this, t, this.className))
                    });
                    if (s)
                        for (t = (e || "").match(L) || []; u < l; u++)
                            if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Qe, " ") : " ")) {
                                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                a = v.trim(r), n.className !== a && (n.className = a)
                            }
                    return this
                },
                removeClass: function (e) {
                    var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e,
                        u = 0,
                        l = this.length;
                    if (v.isFunction(e)) return this.each(function (t) {
                        v(this).removeClass(e.call(this, t, this.className))
                    });
                    if (s)
                        for (t = (e || "").match(L) || []; u < l; u++)
                            if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(Qe, " ") : "")) {
                                for (o = 0; i = t[o++];)
                                    for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                                a = e ? v.trim(r) : "", n.className !== a && (n.className = a)
                            }
                    return this
                },
                toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : v.isFunction(e) ? this.each(function (n) {
                        v(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function () {
                        if ("string" === n)
                            for (var t, r = 0, i = v(this), o = e.match(L) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else "undefined" !== n && "boolean" !== n || (this.className && I.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : I.get(this, "__className__") || "")
                    })
                },
                hasClass: function (e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Qe, " ").indexOf(t) >= 0) return !0;
                    return !1
                }
            });
            var Je = /\r/g;
            v.fn.extend({
                val: function (e) {
                    var t, n, r, i = this[0];
                    return arguments.length ? (r = v.isFunction(e), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, v(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : v.isArray(i) && (i = v.map(i, function (e) {
                            return null == e ? "" : e + ""
                        })), (t = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    })) : i ? (t = v.valHooks[i.type] || v.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Je, "") : null == n ? "" : n : void 0
                }
            }), v.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = v.find.attr(e, "value");
                            return null != t ? t : v.trim(v.text(e))
                        }
                    },
                    select: {
                        get: function (e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                                if (((n = r[u]).selected || u === i) && (p.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = v(n).val(), o) return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function (e, t) {
                            for (var n, r, i = e.options, o = v.makeArray(t), a = i.length; a--;)((r = i[a]).selected = v.inArray(r.value, o) >= 0) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), v.each(["radio", "checkbox"], function () {
                v.valHooks[this] = {
                    set: function (e, t) {
                        if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
                    }
                }, p.checkOn || (v.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                v.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), v.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                },
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var Ze = v.now(),
                et = /\?/;
            v.parseJSON = function (e) {
                return JSON.parse(e + "")
            }, v.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + e), t
            };
            var tt = /#.*$/,
                nt = /([?&])_=[^&]*/,
                rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                it = /^(?:GET|HEAD)$/,
                ot = /^\/\//,
                at = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                st = {},
                ut = {},
                lt = "*/".concat("*"),
                ct = n.location.href,
                ft = at.exec(ct.toLowerCase()) || [];

            function dt(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(L) || [];
                    if (v.isFunction(n))
                        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function pt(e, t, n, r) {
                var i = {},
                    o = e === ut;

                function a(s) {
                    var u;
                    return i[s] = !0, v.each(e[s] || [], function (e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                    }), u
                }
                return a(t.dataTypes[0]) || !i["*"] && a("*")
            }

            function ht(e, t) {
                var n, r, i = v.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && v.extend(!0, e, r), e
            }
            v.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: ct,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ft[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": lt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": v.parseJSON,
                        "text xml": v.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? ht(ht(e, v.ajaxSettings), t) : ht(v.ajaxSettings, e)
                },
                ajaxPrefilter: dt(st),
                ajaxTransport: dt(ut),
                ajax: function (e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var n, r, i, o, a, s, u, l, c = v.ajaxSetup({}, t),
                        f = c.context || c,
                        d = c.context && (f.nodeType || f.jquery) ? v(f) : v.event,
                        p = v.Deferred(),
                        h = v.Callbacks("once memory"),
                        y = c.statusCode || {},
                        g = {},
                        m = {},
                        b = 0,
                        w = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === b) {
                                    if (!o)
                                        for (o = {}; t = rt.exec(i);) o[t[1].toLowerCase()] = t[2];
                                    t = o[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function () {
                                return 2 === b ? i : null
                            },
                            setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return b || (e = m[n] = m[n] || e, g[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return b || (c.mimeType = e), this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (b < 2)
                                        for (t in e) y[t] = [y[t], e[t]];
                                    else x.always(e[x.status]);
                                return this
                            },
                            abort: function (e) {
                                var t = e || w;
                                return n && n.abort(t), k(0, t), this
                            }
                        };
                    if (p.promise(x).complete = h.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || ct) + "").replace(tt, "").replace(ot, ft[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = v.trim(c.dataType || "*").toLowerCase().match(L) || [""], null == c.crossDomain && (s = at.exec(c.url.toLowerCase()), c.crossDomain = !(!s || s[1] === ft[1] && s[2] === ft[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (ft[3] || ("http:" === ft[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = v.param(c.data, c.traditional)), pt(st, c, t, x), 2 === b) return x;
                    for (l in (u = v.event && c.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !it.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (et.test(r) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = nt.test(r) ? r.replace(nt, "$1_=" + Ze++) : r + (et.test(r) ? "&" : "?") + "_=" + Ze++)), c.ifModified && (v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + lt + "; q=0.01" : "") : c.accepts["*"]), c.headers) x.setRequestHeader(l, c.headers[l]);
                    if (c.beforeSend && (!1 === c.beforeSend.call(f, x, c) || 2 === b)) return x.abort();
                    for (l in w = "abort", {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) x[l](c[l]);
                    if (n = pt(ut, c, t, x)) {
                        x.readyState = 1, u && d.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (a = setTimeout(function () {
                            x.abort("timeout")
                        }, c.timeout));
                        try {
                            b = 1, n.send(g, k)
                        } catch (e) {
                            if (!(b < 2)) throw e;
                            k(-1, e)
                        }
                    } else k(-1, "No Transport");

                    function k(e, t, o, s) {
                        var l, g, m, w, k, _ = t;
                        2 !== b && (b = 2, a && clearTimeout(a), n = void 0, i = s || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, o && (w = function (e, t, n) {
                            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (i in s)
                                    if (s[i] && s[i].test(r)) {
                                        u.unshift(i);
                                        break
                                    }
                            if (u[0] in n) o = u[0];
                            else {
                                for (i in n) {
                                    if (!u[0] || e.converters[i + " " + u[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o) return o !== u[0] && u.unshift(o), n[o]
                        }(c, x, o)), w = function (e, t, n, r) {
                            var i, o, a, s, u, l = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + u + " to " + o
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(c, w, x, l), l ? (c.ifModified && ((k = x.getResponseHeader("Last-Modified")) && (v.lastModified[r] = k), (k = x.getResponseHeader("etag")) && (v.etag[r] = k)), 204 === e || "HEAD" === c.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = w.state, g = w.data, l = !(m = w.error))) : (m = _, !e && _ || (_ = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || _) + "", l ? p.resolveWith(f, [g, _, x]) : p.rejectWith(f, [x, _, m]), x.statusCode(y), y = void 0, u && d.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : m]), h.fireWith(f, [x, _]), u && (d.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop")))
                    }
                    return x
                },
                getJSON: function (e, t, n) {
                    return v.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return v.get(e, void 0, t, "script")
                }
            }), v.each(["get", "post"], function (e, t) {
                v[t] = function (e, n, r, i) {
                    return v.isFunction(n) && (i = i || r, r = n, n = void 0), v.ajax({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    })
                }
            }), v._evalUrl = function (e) {
                return v.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, v.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return v.isFunction(e) ? this.each(function (t) {
                        v(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = v(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                },
                wrapInner: function (e) {
                    return v.isFunction(e) ? this.each(function (t) {
                        v(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = v(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function (e) {
                    var t = v.isFunction(e);
                    return this.each(function (n) {
                        v(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), v.expr.filters.hidden = function (e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0
            }, v.expr.filters.visible = function (e) {
                return !v.expr.filters.hidden(e)
            };
            var vt = /%20/g,
                yt = /\[\]$/,
                gt = /\r?\n/g,
                mt = /^(?:submit|button|image|reset|file)$/i,
                bt = /^(?:input|select|textarea|keygen)/i;

            function wt(e, t, n, r) {
                var i;
                if (v.isArray(t)) v.each(t, function (t, i) {
                    n || yt.test(e) ? r(e, i) : wt(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== v.type(t)) r(e, t);
                else
                    for (i in t) wt(e + "[" + i + "]", t[i], n, r)
            }
            v.param = function (e, t) {
                var n, r = [],
                    i = function (e, t) {
                        t = v.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = v.ajaxSettings && v.ajaxSettings.traditional), v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function () {
                    i(this.name, this.value)
                });
                else
                    for (n in e) wt(n, e[n], t, i);
                return r.join("&").replace(vt, "+")
            }, v.fn.extend({
                serialize: function () {
                    return v.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = v.prop(this, "elements");
                        return e ? v.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !v(this).is(":disabled") && bt.test(this.nodeName) && !mt.test(e) && (this.checked || !X.test(e))
                    }).map(function (e, t) {
                        var n = v(this).val();
                        return null == n ? null : v.isArray(n) ? v.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(gt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(gt, "\r\n")
                        }
                    }).get()
                }
            }), v.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest
                } catch (e) {}
            };
            var xt = 0,
                kt = {},
                _t = {
                    0: 200,
                    1223: 204
                },
                Et = v.ajaxSettings.xhr();
            n.attachEvent && n.attachEvent("onunload", function () {
                for (var e in kt) kt[e]()
            }), p.cors = !!Et && "withCredentials" in Et, p.ajax = Et = !!Et, v.ajaxTransport(function (e) {
                var t;
                if (p.cors || Et && !e.crossDomain) return {
                    send: function (n, r) {
                        var i, o = e.xhr(),
                            a = ++xt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (i in e.xhrFields) o[i] = e.xhrFields[i];
                        for (i in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) o.setRequestHeader(i, n[i]);
                        t = function (e) {
                            return function () {
                                t && (delete kt[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(_t[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                    text: o.responseText
                                } : void 0, o.getAllResponseHeaders()))
                            }
                        }, o.onload = t(), o.onerror = t("error"), t = kt[a] = t("abort");
                        try {
                            o.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t) throw e
                        }
                    },
                    abort: function () {
                        t && t()
                    }
                }
            }), v.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function (e) {
                        return v.globalEval(e), e
                    }
                }
            }), v.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), v.ajaxTransport("script", function (e) {
                var t, n;
                if (e.crossDomain) return {
                    send: function (r, i) {
                        t = v("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), h.head.appendChild(t[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            });
            var Tt = [],
                Ct = /(=)\?(?=&|$)|\?\?/;
            v.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Tt.pop() || v.expando + "_" + Ze++;
                    return this[e] = !0, e
                }
            }), v.ajaxPrefilter("json jsonp", function (e, t, r) {
                var i, o, a, s = !1 !== e.jsonp && (Ct.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ct.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ct, "$1" + i) : !1 !== e.jsonp && (e.url += (et.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                    return a || v.error(i + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
                    a = arguments
                }, r.always(function () {
                    n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Tt.push(i)), a && v.isFunction(o) && o(a[0]), a = o = void 0
                }), "script"
            }), v.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || h;
                var r = _.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, i), i && i.length && v(i).remove(), v.merge([], r.childNodes))
            };
            var jt = v.fn.load;
            v.fn.load = function (e, t, n) {
                if ("string" != typeof e && jt) return jt.apply(this, arguments);
                var r, i, o, a = this,
                    s = e.indexOf(" ");
                return s >= 0 && (r = v.trim(e.slice(s)), e = e.slice(0, s)), v.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && v.ajax({
                    url: e,
                    type: i,
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    o = arguments, a.html(r ? v("<div>").append(v.parseHTML(e)).find(r) : e)
                }).complete(n && function (e, t) {
                    a.each(n, o || [e.responseText, t, e])
                }), this
            }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                v.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), v.expr.filters.animated = function (e) {
                return v.grep(v.timers, function (t) {
                    return e === t.elem
                }).length
            };
            var St = n.document.documentElement;

            function Ot(e) {
                return v.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            v.offset = {
                setOffset: function (e, t, n) {
                    var r, i, o, a, s, u, l = v.css(e, "position"),
                        c = v(e),
                        f = {};
                    "static" === l && (e.style.position = "relative"), s = c.offset(), o = v.css(e, "top"), u = v.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
                }
            }, v.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        v.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        },
                        o = r && r.ownerDocument;
                    return o ? (t = o.documentElement, v.contains(t, r) ? (void 0 !== r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = Ot(o), {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) : i) : void 0
                },
                position: function () {
                    if (this[0]) {
                        var e, t, n = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === v.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), v.nodeName(e[0], "html") || (r = e.offset()), r.top += v.css(e[0], "borderTopWidth", !0), r.left += v.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - r.top - v.css(n, "marginTop", !0),
                            left: t.left - r.left - v.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent || St; e && !v.nodeName(e, "html") && "static" === v.css(e, "position");) e = e.offsetParent;
                        return e || St
                    })
                }
            }), v.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (e, t) {
                var r = "pageYOffset" === t;
                v.fn[e] = function (i) {
                    return M(this, function (e, i, o) {
                        var a = Ot(e);
                        if (void 0 === o) return a ? a[t] : e[i];
                        a ? a.scrollTo(r ? n.pageXOffset : o, r ? o : n.pageYOffset) : e[i] = o
                    }, e, i, arguments.length, null)
                }
            }), v.each(["top", "left"], function (e, t) {
                v.cssHooks[t] = Ee(p.pixelPosition, function (e, n) {
                    if (n) return n = _e(e, t), xe.test(n) ? v(e).position()[t] + "px" : n
                })
            }), v.each({
                Height: "height",
                Width: "width"
            }, function (e, t) {
                v.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function (n, r) {
                    v.fn[r] = function (r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r),
                            a = n || (!0 === r || !0 === i ? "margin" : "border");
                        return M(this, function (t, n, r) {
                            var i;
                            return v.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? v.css(t, n, a) : v.style(t, n, r, a)
                        }, t, o ? r : void 0, o, null)
                    }
                })
            }), v.fn.size = function () {
                return this.length
            }, v.fn.andSelf = v.fn.addBack, void 0 === (r = function () {
                return v
            }.apply(t, [])) || (e.exports = r);
            var Pt = n.jQuery,
                At = n.$;
            return v.noConflict = function (e) {
                return n.$ === v && (n.$ = At), e && n.jQuery === v && (n.jQuery = Pt), v
            }, void 0 === i && (n.jQuery = n.$ = v), v
        }, "object" == typeof e.exports ? e.exports = i.document ? o(i, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return o(e)
        } : o(i)
    },
    50: function (e, t) {
        var n = Object.prototype.toString;
        e.exports = function (e) {
            return n.call(e)
        }
    },
    53: function (e, t) {
        var n = Array.isArray;
        e.exports = n
    },
    56: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = t.bugsnag = {
            notify: function (e, t, n, r) {
                if (!window.Bugsnag) return console.error(e, t, n);
                window.Bugsnag.notify(e, t, n, r)
            }
        };
        t.default = r
    },
    57: function (e, t, n) {
        var r = n(18);
        e.exports = function () {
            return r.Date.now()
        }
    },
    59: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SIZES = t.sizes = void 0;
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        t.isElementInViewport = function (e) {
            var t = e.getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
        }, t.isSmallViewport = function () {
            return c(u.small[0], u.small[1])
        }, t.isMediumViewport = function () {
            return c(u.medium[0], u.medium[1])
        }, t.isNormalViewport = function () {
            return c(u.normal[0], u.normal[1])
        }, t.isLargeViewport = function () {
            return c(u.large[0], u.large[1])
        };
        var i = n(82),
            o = s(n(96)),
            a = s(n(37));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = t.sizes = {
                small: [0, 599],
                medium: [600, 899],
                normal: [900, 1299],
                large: [1300, 5e3]
            },
            l = (t.SIZES = {
                SMALL: "small",
                MEDIUM: "medium",
                NORMAL: "normal",
                LARGE: "large"
            }, function (e) {
                function t() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var e = function (e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return e.size = null, e.handleResize(), e.listen(), e.width = window.innerWidth, e
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, i.EventEmitter), r(t, [{
                    key: "listen",
                    value: function () {
                        var e = this;
                        window.addEventListener("resize", (0, a.default)(function () {
                            e.width !== window.innerWidth && e.handleResize()
                        }, 100))
                    }
                }, {
                    key: "handleResize",
                    value: function () {
                        var e = this;
                        this.width = window.innerWidth, Object.keys(u).forEach(function (t) {
                            var n = u[t];
                            c(n[0], n[1]) && (e.size = t)
                        }), this.emit("change")
                    }
                }, {
                    key: "inSize",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return (0, o.default)(e, this.size)
                    }
                }]), t
            }());

        function c(e, t) {
            return window.innerWidth >= e && window.innerWidth <= t
        }
        t.default = l
    },
    60: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e) return this;
            if (e instanceof Array) return e.forEach(function (e) {
                return i(e, t, n)
            }), this;
            if (e instanceof NodeList) {
                for (var r = 0; r < e.length; r++) i(e[r], t, n);
                return this
            }
            return i(e, t, n), this
        };
        var r = n(61);

        function i(e, t, n) {
            var i = window.trackParams || {};
            n = Object.assign({
                url: window.location.href,
                target_path: (0, r.getLinkTargetPath)(e),
                target_url: (0, r.getLinkTargetUrl)(e, window.location)
            }, i, n), window.analytics && window.analytics.trackLink(e, t, n)
        }
    },
    61: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(62);
        Object.keys(r).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return r[e]
                }
            })
        });
        var i = n(63);
        Object.keys(i).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return i[e]
                }
            })
        });
        var o = n(64);
        Object.keys(o).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return o[e]
                }
            })
        });
        var a = n(65);
        Object.keys(a).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return a[e]
                }
            })
        })
    },
    62: function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (e.width < t.width && e.height < t.height) return e;
            var n = t.width / e.width,
                r = t.height / e.height,
                i = Math.min(n, r);
            return {
                width: Math.floor(e.width * i),
                height: Math.floor(e.height * i)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getDimensionsConstrainedToContainer = r, t.default = r
    },
    63: function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n = {
                width: t.width,
                height: Math.floor(t.width / e.width * e.height)
            };
            return t.width > e.width ? e : n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getDimensionsConstrainedToContainerWidth = r, t.default = r
    },
    64: function (e, t, n) {
        "use strict";

        function r(e) {
            if (!e) return null;
            var t = e.getAttribute("href");
            return t && t.match(/^http/) ? t.replace(/^http[s]{0,1}:\/\/.[^\/]+[\/]*/, "/") : t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getLinkTargetPath = r, t.default = r
    },
    65: function (e, t, n) {
        "use strict";

        function r(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
            if (!e) return null;
            var n = e.getAttribute("href"),
                r = t.protocol + "//" + t.hostname + (t.port ? ":" + t.port : "");
            return n && !n.match(/^http/) ? "" + r + n : n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getLinkTargetUrl = r, t.default = r
    },
    66: function (e, t, n) {
        var r = n(27),
            i = 1 / 0,
            o = 1.7976931348623157e308;
        e.exports = function (e) {
            return e ? (e = r(e)) === i || e === -i ? (e < 0 ? -1 : 1) * o : e == e ? e : 0 : 0 === e ? e : 0
        }
    },
    68: function (e, t, n) {
        var r = n(66);
        e.exports = function (e) {
            var t = r(e),
                n = t % 1;
            return t == t ? n ? t - n : t : 0
        }
    },
    71: function (e, t, n) {
        var r = n(10),
            i = n(17),
            o = "[object AsyncFunction]",
            a = "[object Function]",
            s = "[object GeneratorFunction]",
            u = "[object Proxy]";
        e.exports = function (e) {
            if (!i(e)) return !1;
            var t = r(e);
            return t == a || t == s || t == o || t == u
        }
    },
    74: function (e, t) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        e.exports = function (e, t) {
            var i = typeof e;
            return !!(t = null == t ? n : t) && ("number" == i || "symbol" != i && r.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
    },
    8: function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    82: function (e, t) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function r(e) {
            return "function" == typeof e
        }

        function i(e) {
            return "object" == typeof e && null !== e
        }

        function o(e) {
            return void 0 === e
        }
        e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, n.prototype.emit = function (e) {
            var t, n, a, s, u, l;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw c.context = t, c
            }
            if (o(n = this._events[e])) return !1;
            if (r(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
            } else if (i(n))
                for (s = Array.prototype.slice.call(arguments, 1), a = (l = n.slice()).length, u = 0; u < a; u++) l[u].apply(this, s);
            return !0
        }, n.prototype.addListener = function (e, t) {
            var a;
            if (!r(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, i(this._events[e]) && !this._events[e].warned && (a = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && a > 0 && this._events[e].length > a && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (e, t) {
            if (!r(t)) throw TypeError("listener must be a function");
            var n = !1;

            function i() {
                this.removeListener(e, i), n || (n = !0, t.apply(this, arguments))
            }
            return i.listener = t, this.on(e, i), this
        }, n.prototype.removeListener = function (e, t) {
            var n, o, a, s;
            if (!r(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (a = (n = this._events[e]).length, o = -1, n === t || r(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (i(n)) {
                for (s = a; s-- > 0;)
                    if (n[s] === t || n[s].listener && n[s].listener === t) {
                        o = s;
                        break
                    }
                if (o < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, n.prototype.removeAllListeners = function (e) {
            var t, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (r(n = this._events[e])) this.removeListener(e, n);
            else if (n)
                for (; n.length;) this.removeListener(e, n[n.length - 1]);
            return delete this._events[e], this
        }, n.prototype.listeners = function (e) {
            return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, n.prototype.listenerCount = function (e) {
            if (this._events) {
                var t = this._events[e];
                if (r(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, n.listenerCount = function (e, t) {
            return e.listenerCount(t)
        }
    },
    88: function (e, t, n) {
        var r = n(97),
            i = n(98),
            o = n(99);
        e.exports = function (e, t, n) {
            return t == t ? o(e, t, n) : r(e, i, n)
        }
    },
    89: function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
            return i
        }
    },
    96: function (e, t, n) {
        var r = n(88),
            i = n(42),
            o = n(100),
            a = n(68),
            s = n(101),
            u = Math.max;
        e.exports = function (e, t, n, l) {
            e = i(e) ? e : s(e), n = n && !l ? a(n) : 0;
            var c = e.length;
            return n < 0 && (n = u(c + n, 0)), o(e) ? n <= c && e.indexOf(t, n) > -1 : !!c && r(e, t, n) > -1
        }
    },
    97: function (e, t) {
        e.exports = function (e, t, n, r) {
            for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
    },
    98: function (e, t) {
        e.exports = function (e) {
            return e != e
        }
    },
    99: function (e, t) {
        e.exports = function (e, t, n) {
            for (var r = n - 1, i = e.length; ++r < i;)
                if (e[r] === t) return r;
            return -1
        }
    }
});
/*!
 * The Final Countdown for jQuery v2.1.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2015 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
! function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    "use strict";

    function b(a) {
        if (a instanceof Date) return a;
        if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }

    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b)
    }

    function d(a) {
        return function (b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; g > f; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || "",
                        l = h[3] || "",
                        m = null;
                    h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && 10 > m && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
                }
            return b = b.replace(/%%/, "%")
        }
    }

    function e(a, b) {
        var c = "s",
            d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), 1 === Math.abs(b) ? d : c
    }
    var f = [],
        g = [],
        h = {
            precision: 100,
            elapse: !1
        };
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
    var i = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            w: "weeks",
            d: "daysToWeek",
            D: "totalDays",
            H: "hours",
            M: "minutes",
            S: "seconds"
        },
        j = function (b, c, d) {
            this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.start()
        };
    a.extend(j.prototype, {
        start: function () {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(), this.interval = setInterval(function () {
                a.update.call(a)
            }, this.options.precision)
        },
        stop: function () {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        toggle: function () {
            this.interval ? this.stop() : this.start()
        },
        pause: function () {
            this.stop()
        },
        resume: function () {
            this.start()
        },
        remove: function () {
            this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function (a) {
            this.finalDate = b(a)
        },
        update: function () {
            if (0 === this.$el.closest("html").length) return void this.remove();
            var b, c = void 0 !== a._data(this.el, "events"),
                d = new Date;
            b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && 0 > b ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - d.getFullYear())
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
        },
        dispatchEvent: function (b) {
            var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
        }
    }), a.fn.countdown = function () {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c],
                    e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else new j(this, b[0], b[1])
        })
    }
});;
if (typeof jQuery === "undefined") {
    throw new Error("jquery-confirm requires jQuery");
}
var jconfirm, Jconfirm;
(function ($, window) {
    $.fn.confirm = function (options, option2) {
        if (typeof options === "undefined") {
            options = {};
        }
        if (typeof options === "string") {
            options = {
                content: options,
                title: (option2) ? option2 : false
            };
        }
        $(this).each(function () {
            var $this = $(this);
            if ($this.attr("jc-attached")) {
                console.warn("jConfirm has already been attached to this element ", $this[0]);
                return;
            }
            $this.on("click", function (e) {
                e.preventDefault();
                var jcOption = $.extend({}, options);
                if ($this.attr("data-title")) {
                    jcOption.title = $this.attr("data-title");
                }
                if ($this.attr("data-content")) {
                    jcOption.content = $this.attr("data-content");
                }
                if (typeof jcOption.buttons == "undefined") {
                    jcOption.buttons = {};
                }
                jcOption["$target"] = $this;
                if ($this.attr("href") && Object.keys(jcOption.buttons).length == 0) {
                    var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
                    var firstBtn = Object.keys(buttons)[0];
                    jcOption.buttons = buttons;
                    jcOption.buttons[firstBtn].action = function () {
                        location.href = $this.attr("href");
                    };
                }
                jcOption.closeIcon = false;
                var instance = $.confirm(jcOption);
            });
            $this.attr("jc-attached", true);
        });
        return $(this);
    };
    $.confirm = function (options, option2) {
        if (typeof options === "undefined") {
            options = {};
        }
        if (typeof options === "string") {
            options = {
                content: options,
                title: (option2) ? option2 : false
            };
        }
        if (typeof options.buttons != "object") {
            options.buttons = {};
        }
        if (Object.keys(options.buttons).length == 0) {
            var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
            options.buttons = buttons;
        }
        return jconfirm(options);
    };
    $.alert = function (options, option2) {
        if (typeof options === "undefined") {
            options = {};
        }
        if (typeof options === "string") {
            options = {
                content: options,
                title: (option2) ? option2 : false
            };
        }
        if (typeof options.buttons != "object") {
            options.buttons = {};
        }
        if (Object.keys(options.buttons).length == 0) {
            var buttons = $.extend(true, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
            var firstBtn = Object.keys(buttons)[0];
            options.buttons[firstBtn] = buttons[firstBtn];
        }
        return jconfirm(options);
    };
    $.dialog = function (options, option2) {
        if (typeof options === "undefined") {
            options = {};
        }
        if (typeof options === "string") {
            options = {
                content: options,
                title: (option2) ? option2 : false,
                closeIcon: function () {}
            };
        }
        options.buttons = {};
        if (typeof options.closeIcon == "undefined") {
            options.closeIcon = function () {};
        }
        options.confirmKeys = [13];
        return jconfirm(options);
    };
    jconfirm = function (options) {
        if (typeof options === "undefined") {
            options = {};
        }
        var pluginOptions = $.extend(true, {}, jconfirm.pluginDefaults);
        if (jconfirm.defaults) {
            pluginOptions = $.extend(true, pluginOptions, jconfirm.defaults);
        }
        pluginOptions = $.extend(true, {}, pluginOptions, options);
        var instance = new Jconfirm(pluginOptions);
        jconfirm.instances.push(instance);
        return instance;
    };
    Jconfirm = function (options) {
        $.extend(this, options);
        this._init();
    };
    Jconfirm.prototype = {
        _init: function () {
            var that = this;
            if (!jconfirm.instances.length) {
                jconfirm.lastFocused = $("body").find(":focus");
            }
            this._id = Math.round(Math.random() * 99999);
            this.contentParsed = $(document.createElement("div"));
            if (!this.lazyOpen) {
                setTimeout(function () {
                    that.open();
                }, 0);
            }
        },
        _buildHTML: function () {
            var that = this;
            this._parseAnimation(this.animation, "o");
            this._parseAnimation(this.closeAnimation, "c");
            this._parseBgDismissAnimation(this.backgroundDismissAnimation);
            this._parseColumnClass(this.columnClass);
            this._parseTheme(this.theme);
            this._parseType(this.type);
            var template = $(this.template);
            template.find(".jconfirm-box").addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed);
            if (this.typeAnimated) {
                template.find(".jconfirm-box").addClass("jconfirm-type-animated");
            }
            if (this.useBootstrap) {
                template.find(".jc-bs3-row").addClass(this.bootstrapClasses.row);
                template.find(".jc-bs3-row").addClass("justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center");
                template.find(".jconfirm-box-container").addClass(this.columnClassParsed);
                if (this.containerFluid) {
                    template.find(".jc-bs3-container").addClass(this.bootstrapClasses.containerFluid);
                } else {
                    template.find(".jc-bs3-container").addClass(this.bootstrapClasses.container);
                }
            } else {
                template.find(".jconfirm-box").css("width", this.boxWidth);
            }
            if (this.titleClass) {
                template.find(".jconfirm-title-c").addClass(this.titleClass);
            }
            template.addClass(this.themeParsed);
            var ariaLabel = "jconfirm-box" + this._id;
            template.find(".jconfirm-box").attr("aria-labelledby", ariaLabel).attr("tabindex", -1);
            template.find(".jconfirm-content").attr("id", ariaLabel);
            if (this.bgOpacity !== null) {
                template.find(".jconfirm-bg").css("opacity", this.bgOpacity);
            }
            if (this.rtl) {
                template.addClass("jconfirm-rtl");
            }
            this.$el = template.appendTo(this.container);
            this.$jconfirmBoxContainer = this.$el.find(".jconfirm-box-container");
            this.$jconfirmBox = this.$body = this.$el.find(".jconfirm-box");
            this.$jconfirmBg = this.$el.find(".jconfirm-bg");
            this.$title = this.$el.find(".jconfirm-title");
            this.$titleContainer = this.$el.find(".jconfirm-title-c");
            this.$content = this.$el.find("div.jconfirm-content");
            this.$contentPane = this.$el.find(".jconfirm-content-pane");
            this.$icon = this.$el.find(".jconfirm-icon-c");
            this.$closeIcon = this.$el.find(".jconfirm-closeIcon");
            this.$holder = this.$el.find(".jconfirm-holder");
            this.$btnc = this.$el.find(".jconfirm-buttons");
            this.$scrollPane = this.$el.find(".jconfirm-scrollpane");
            that.setStartingPoint();
            this._contentReady = $.Deferred();
            this._modalReady = $.Deferred();
            this.$holder.css({
                "padding-top": this.offsetTop,
                "padding-bottom": this.offsetBottom,
            });
            this.setTitle();
            this.setIcon();
            this._setButtons();
            this._parseContent();
            this.initDraggable();
            if (this.isAjax) {
                this.showLoading(false);
            }
            $.when(this._contentReady, this._modalReady).then(function () {
                if (that.isAjaxLoading) {
                    setTimeout(function () {
                        that.isAjaxLoading = false;
                        that.setContent();
                        that.setTitle();
                        that.setIcon();
                        setTimeout(function () {
                            that.hideLoading(false);
                            that._updateContentMaxHeight();
                        }, 100);
                        if (typeof that.onContentReady === "function") {
                            that.onContentReady();
                        }
                    }, 50);
                } else {
                    that._updateContentMaxHeight();
                    that.setTitle();
                    that.setIcon();
                    if (typeof that.onContentReady === "function") {
                        that.onContentReady();
                    }
                }
                if (that.autoClose) {
                    that._startCountDown();
                }
            });
            this._watchContent();
            if (this.animation === "none") {
                this.animationSpeed = 1;
                this.animationBounce = 1;
            }
            this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce));
            this.$contentPane.css(this._getCSS(this.animationSpeed, 1));
            this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1));
            this.$jconfirmBoxContainer.css(this._getCSS(this.animationSpeed, 1));
        },
        _typePrefix: "jconfirm-type-",
        typeParsed: "",
        _parseType: function (type) {
            this.typeParsed = this._typePrefix + type;
        },
        setType: function (type) {
            var oldClass = this.typeParsed;
            this._parseType(type);
            this.$jconfirmBox.removeClass(oldClass).addClass(this.typeParsed);
        },
        themeParsed: "",
        _themePrefix: "jconfirm-",
        setTheme: function (theme) {
            var previous = this.theme;
            this.theme = theme || this.theme;
            this._parseTheme(this.theme);
            if (previous) {
                this.$el.removeClass(previous);
            }
            this.$el.addClass(this.themeParsed);
            this.theme = theme;
        },
        _parseTheme: function (theme) {
            var that = this;
            theme = theme.split(",");
            $.each(theme, function (k, a) {
                if (a.indexOf(that._themePrefix) === -1) {
                    theme[k] = that._themePrefix + $.trim(a);
                }
            });
            this.themeParsed = theme.join(" ").toLowerCase();
        },
        backgroundDismissAnimationParsed: "",
        _bgDismissPrefix: "jconfirm-hilight-",
        _parseBgDismissAnimation: function (bgDismissAnimation) {
            var animation = bgDismissAnimation.split(",");
            var that = this;
            $.each(animation, function (k, a) {
                if (a.indexOf(that._bgDismissPrefix) === -1) {
                    animation[k] = that._bgDismissPrefix + $.trim(a);
                }
            });
            this.backgroundDismissAnimationParsed = animation.join(" ").toLowerCase();
        },
        animationParsed: "",
        closeAnimationParsed: "",
        _animationPrefix: "jconfirm-animation-",
        setAnimation: function (animation) {
            this.animation = animation || this.animation;
            this._parseAnimation(this.animation, "o");
        },
        _parseAnimation: function (animation, which) {
            which = which || "o";
            var animations = animation.split(",");
            var that = this;
            $.each(animations, function (k, a) {
                if (a.indexOf(that._animationPrefix) === -1) {
                    animations[k] = that._animationPrefix + $.trim(a);
                }
            });
            var a_string = animations.join(" ").toLowerCase();
            if (which === "o") {
                this.animationParsed = a_string;
            } else {
                this.closeAnimationParsed = a_string;
            }
            return a_string;
        },
        setCloseAnimation: function (closeAnimation) {
            this.closeAnimation = closeAnimation || this.closeAnimation;
            this._parseAnimation(this.closeAnimation, "c");
        },
        setAnimationSpeed: function (speed) {
            this.animationSpeed = speed || this.animationSpeed;
        },
        columnClassParsed: "",
        setColumnClass: function (colClass) {
            if (!this.useBootstrap) {
                console.warn("cannot set columnClass, useBootstrap is set to false");
                return;
            }
            this.columnClass = colClass || this.columnClass;
            this._parseColumnClass(this.columnClass);
            this.$jconfirmBoxContainer.addClass(this.columnClassParsed);
        },
        _updateContentMaxHeight: function () {
            var height = $(window).height() - (this.$jconfirmBox.outerHeight() - this.$contentPane.outerHeight()) - (this.offsetTop + this.offsetBottom);
            this.$contentPane.css({
                "max-height": height + "px"
            });
        },
        setBoxWidth: function (width) {
            if (this.useBootstrap) {
                console.warn("cannot set boxWidth, useBootstrap is set to true");
                return;
            }
            this.boxWidth = width;
            this.$jconfirmBox.css("width", width);
        },
        _parseColumnClass: function (colClass) {
            colClass = colClass.toLowerCase();
            var p;
            switch (colClass) {
                case "xl":
                case "xlarge":
                    p = "col-md-12";
                    break;
                case "l":
                case "large":
                    p = "col-md-8 col-md-offset-2";
                    break;
                case "m":
                case "medium":
                    p = "col-md-6 col-md-offset-3";
                    break;
                case "s":
                case "small":
                    p = "col-md-4 col-md-offset-4";
                    break;
                case "xs":
                case "xsmall":
                    p = "col-md-2 col-md-offset-5";
                    break;
                default:
                    p = colClass;
            }
            this.columnClassParsed = p;
        },
        initDraggable: function () {
            var that = this;
            var $t = this.$titleContainer;
            this.resetDrag();
            if (this.draggable) {
                $t.on("mousedown", function (e) {
                    $t.addClass("jconfirm-hand");
                    that.mouseX = e.clientX;
                    that.mouseY = e.clientY;
                    that.isDrag = true;
                });
                $(window).on("mousemove." + this._id, function (e) {
                    if (that.isDrag) {
                        that.movingX = e.clientX - that.mouseX + that.initialX;
                        that.movingY = e.clientY - that.mouseY + that.initialY;
                        that.setDrag();
                    }
                });
                $(window).on("mouseup." + this._id, function () {
                    $t.removeClass("jconfirm-hand");
                    if (that.isDrag) {
                        that.isDrag = false;
                        that.initialX = that.movingX;
                        that.initialY = that.movingY;
                    }
                });
            }
        },
        resetDrag: function () {
            this.isDrag = false;
            this.initialX = 0;
            this.initialY = 0;
            this.movingX = 0;
            this.movingY = 0;
            this.mouseX = 0;
            this.mouseY = 0;
            this.$jconfirmBoxContainer.css("transform", "translate(" + 0 + "px, " + 0 + "px)");
        },
        setDrag: function () {
            if (!this.draggable) {
                return;
            }
            this.alignMiddle = false;
            var boxWidth = this.$jconfirmBox.outerWidth();
            var boxHeight = this.$jconfirmBox.outerHeight();
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            var that = this;
            var dragUpdate = 1;
            if (that.movingX % dragUpdate === 0 || that.movingY % dragUpdate === 0) {
                if (that.dragWindowBorder) {
                    var leftDistance = (windowWidth / 2) - boxWidth / 2;
                    var topDistance = (windowHeight / 2) - boxHeight / 2;
                    topDistance -= that.dragWindowGap;
                    leftDistance -= that.dragWindowGap;
                    if (leftDistance + that.movingX < 0) {
                        that.movingX = -leftDistance;
                    } else {
                        if (leftDistance - that.movingX < 0) {
                            that.movingX = leftDistance;
                        }
                    }
                    if (topDistance + that.movingY < 0) {
                        that.movingY = -topDistance;
                    } else {
                        if (topDistance - that.movingY < 0) {
                            that.movingY = topDistance;
                        }
                    }
                }
                that.$jconfirmBoxContainer.css("transform", "translate(" + that.movingX + "px, " + that.movingY + "px)");
            }
        },
        _scrollTop: function () {
            if (typeof pageYOffset !== "undefined") {
                return pageYOffset;
            } else {
                var B = document.body;
                var D = document.documentElement;
                D = (D.clientHeight) ? D : B;
                return D.scrollTop;
            }
        },
        _watchContent: function () {
            var that = this;
            if (this._timer) {
                clearInterval(this._timer);
            }
            var prevContentHeight = 0;
            this._timer = setInterval(function () {
                if (that.smoothContent) {
                    var contentHeight = that.$content.outerHeight() || 0;
                    if (contentHeight !== prevContentHeight) {
                        that.$contentPane.css({
                            height: contentHeight
                        }).scrollTop(0);
                        prevContentHeight = contentHeight;
                    }
                    var wh = $(window).height();
                    var total = that.offsetTop + that.offsetBottom + that.$jconfirmBox.height() - that.$contentPane.height() + that.$content.height();
                    if (total < wh) {
                        that.$contentPane.addClass("no-scroll");
                    } else {
                        that.$contentPane.removeClass("no-scroll");
                    }
                }
            }, this.watchInterval);
        },
        _overflowClass: "jconfirm-overflow",
        _hilightAnimating: false,
        highlight: function () {
            this.hiLightModal();
        },
        hiLightModal: function () {
            var that = this;
            if (this._hilightAnimating) {
                return;
            }
            that.$body.addClass("hilight");
            var duration = parseFloat(that.$body.css("animation-duration")) || 2;
            this._hilightAnimating = true;
            setTimeout(function () {
                that._hilightAnimating = false;
                that.$body.removeClass("hilight");
            }, duration * 1000);
        },
        _bindEvents: function () {
            var that = this;
            this.boxClicked = false;
            this.$scrollPane.click(function (e) {
                if (!that.boxClicked) {
                    var buttonName = false;
                    var shouldClose = false;
                    var str;
                    if (typeof that.backgroundDismiss == "function") {
                        str = that.backgroundDismiss();
                    } else {
                        str = that.backgroundDismiss;
                    }
                    if (typeof str == "string" && typeof that.buttons[str] != "undefined") {
                        buttonName = str;
                        shouldClose = false;
                    } else {
                        if (typeof str == "undefined" || !!(str) == true) {
                            shouldClose = true;
                        } else {
                            shouldClose = false;
                        }
                    }
                    if (buttonName) {
                        var btnResponse = that.buttons[buttonName].action.apply(that);
                        shouldClose = (typeof btnResponse == "undefined") || !!(btnResponse);
                    }
                    if (shouldClose) {
                        that.close();
                    } else {
                        that.hiLightModal();
                    }
                }
                that.boxClicked = false;
            });
            this.$jconfirmBox.click(function (e) {
                that.boxClicked = true;
            });
            var isKeyDown = false;
            $(window).on("jcKeyDown." + that._id, function (e) {
                if (!isKeyDown) {
                    isKeyDown = true;
                }
            });
            $(window).on("keyup." + that._id, function (e) {
                if (isKeyDown) {
                    that.reactOnKey(e);
                    isKeyDown = false;
                }
            });
            $(window).on("resize." + this._id, function () {
                that._updateContentMaxHeight();
                setTimeout(function () {
                    that.resetDrag();
                }, 100);
            });
        },
        _cubic_bezier: "0.36, 0.55, 0.19",
        _getCSS: function (speed, bounce) {
            return {
                "-webkit-transition-duration": speed / 1000 + "s",
                "transition-duration": speed / 1000 + "s",
                "-webkit-transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + bounce + ")",
                "transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + bounce + ")"
            };
        },
        _setButtons: function () {
            var that = this;
            var total_buttons = 0;
            if (typeof this.buttons !== "object") {
                this.buttons = {};
            }
            $.each(this.buttons, function (key, button) {
                total_buttons += 1;
                if (typeof button === "function") {
                    that.buttons[key] = button = {
                        action: button
                    };
                }
                that.buttons[key].text = button.text || key;
                that.buttons[key].btnClass = button.btnClass || "btn-default";
                that.buttons[key].action = button.action || function () {};
                that.buttons[key].keys = button.keys || [];
                that.buttons[key].isHidden = button.isHidden || false;
                that.buttons[key].isDisabled = button.isDisabled || false;
                $.each(that.buttons[key].keys, function (i, a) {
                    that.buttons[key].keys[i] = a.toLowerCase();
                });
                var button_element = $('<button type="button" class="btn"></button>').html(that.buttons[key].text).addClass(that.buttons[key].btnClass).prop("disabled", that.buttons[key].isDisabled).css("display", that.buttons[key].isHidden ? "none" : "").click(function (e) {
                    e.preventDefault();
                    var res = that.buttons[key].action.apply(that, [that.buttons[key]]);
                    that.onAction.apply(that, [key, that.buttons[key]]);
                    that._stopCountDown();
                    if (typeof res === "undefined" || res) {
                        that.close();
                    }
                });
                that.buttons[key].el = button_element;
                that.buttons[key].setText = function (text) {
                    button_element.html(text);
                };
                that.buttons[key].addClass = function (className) {
                    button_element.addClass(className);
                };
                that.buttons[key].removeClass = function (className) {
                    button_element.removeClass(className);
                };
                that.buttons[key].disable = function () {
                    that.buttons[key].isDisabled = true;
                    button_element.prop("disabled", true);
                };
                that.buttons[key].enable = function () {
                    that.buttons[key].isDisabled = false;
                    button_element.prop("disabled", false);
                };
                that.buttons[key].show = function () {
                    that.buttons[key].isHidden = false;
                    button_element.css("display", "");
                };
                that.buttons[key].hide = function () {
                    that.buttons[key].isHidden = true;
                    button_element.css("display", "none");
                };
                that["$_" + key] = that["$$" + key] = button_element;
                that.$btnc.append(button_element);
            });
            if (total_buttons === 0) {
                this.$btnc.hide();
            }
            if (this.closeIcon === null && total_buttons === 0) {
                this.closeIcon = true;
            }
            if (this.closeIcon) {
                if (this.closeIconClass) {
                    var closeHtml = '<i class="' + this.closeIconClass + '"></i>';
                    this.$closeIcon.html(closeHtml);
                }
                this.$closeIcon.click(function (e) {
                    e.preventDefault();
                    var buttonName = false;
                    var shouldClose = false;
                    var str;
                    if (typeof that.closeIcon == "function") {
                        str = that.closeIcon();
                    } else {
                        str = that.closeIcon;
                    }
                    if (typeof str == "string" && typeof that.buttons[str] != "undefined") {
                        buttonName = str;
                        shouldClose = false;
                    } else {
                        if (typeof str == "undefined" || !!(str) == true) {
                            shouldClose = true;
                        } else {
                            shouldClose = false;
                        }
                    }
                    if (buttonName) {
                        var btnResponse = that.buttons[buttonName].action.apply(that);
                        shouldClose = (typeof btnResponse == "undefined") || !!(btnResponse);
                    }
                    if (shouldClose) {
                        that.close();
                    }
                });
                this.$closeIcon.show();
            } else {
                this.$closeIcon.hide();
            }
        },
        setTitle: function (string, force) {
            force = force || false;
            if (typeof string !== "undefined") {
                if (typeof string == "string") {
                    this.title = string;
                } else {
                    if (typeof string == "function") {
                        if (typeof string.promise == "function") {
                            console.error("Promise was returned from title function, this is not supported.");
                        }
                        var response = string();
                        if (typeof response == "string") {
                            this.title = response;
                        } else {
                            this.title = false;
                        }
                    } else {
                        this.title = false;
                    }
                }
            }
            if (this.isAjaxLoading && !force) {
                return;
            }
            this.$title.html(this.title || "");
            this.updateTitleContainer();
        },
        setIcon: function (iconClass, force) {
            force = force || false;
            if (typeof iconClass !== "undefined") {
                if (typeof iconClass == "string") {
                    this.icon = iconClass;
                } else {
                    if (typeof iconClass === "function") {
                        var response = iconClass();
                        if (typeof response == "string") {
                            this.icon = response;
                        } else {
                            this.icon = false;
                        }
                    } else {
                        this.icon = false;
                    }
                }
            }
            if (this.isAjaxLoading && !force) {
                return;
            }
            this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : "");
            this.updateTitleContainer();
        },
        updateTitleContainer: function () {
            if (!this.title && !this.icon) {
                this.$titleContainer.hide();
            } else {
                this.$titleContainer.show();
            }
        },
        setContentPrepend: function (content, force) {
            if (!content) {
                return;
            }
            this.contentParsed.prepend(content);
        },
        setContentAppend: function (content) {
            if (!content) {
                return;
            }
            this.contentParsed.append(content);
        },
        setContent: function (content, force) {
            force = !!force;
            var that = this;
            if (content) {
                this.contentParsed.html("").append(content);
            }
            if (this.isAjaxLoading && !force) {
                return;
            }
            this.$content.html("");
            this.$content.append(this.contentParsed);
            setTimeout(function () {
                that.$body.find("input[autofocus]:visible:first").focus();
            }, 100);
        },
        loadingSpinner: false,
        showLoading: function (disableButtons) {
            this.loadingSpinner = true;
            this.$jconfirmBox.addClass("loading");
            if (disableButtons) {
                this.$btnc.find("button").prop("disabled", true);
            }
        },
        hideLoading: function (enableButtons) {
            this.loadingSpinner = false;
            this.$jconfirmBox.removeClass("loading");
            if (enableButtons) {
                this.$btnc.find("button").prop("disabled", false);
            }
        },
        ajaxResponse: false,
        contentParsed: "",
        isAjax: false,
        isAjaxLoading: false,
        _parseContent: function () {
            var that = this;
            var e = "&nbsp;";
            if (typeof this.content == "function") {
                var res = this.content.apply(this);
                if (typeof res == "string") {
                    this.content = res;
                } else {
                    if (typeof res == "object" && typeof res.always == "function") {
                        this.isAjax = true;
                        this.isAjaxLoading = true;
                        res.always(function (data, status, xhr) {
                            that.ajaxResponse = {
                                data: data,
                                status: status,
                                xhr: xhr
                            };
                            that._contentReady.resolve(data, status, xhr);
                            if (typeof that.contentLoaded == "function") {
                                that.contentLoaded(data, status, xhr);
                            }
                        });
                        this.content = e;
                    } else {
                        this.content = e;
                    }
                }
            }
            if (typeof this.content == "string" && this.content.substr(0, 4).toLowerCase() === "url:") {
                this.isAjax = true;
                this.isAjaxLoading = true;
                var u = this.content.substring(4, this.content.length);
                $.get(u).done(function (html) {
                    that.contentParsed.html(html);
                }).always(function (data, status, xhr) {
                    that.ajaxResponse = {
                        data: data,
                        status: status,
                        xhr: xhr
                    };
                    that._contentReady.resolve(data, status, xhr);
                    if (typeof that.contentLoaded == "function") {
                        that.contentLoaded(data, status, xhr);
                    }
                });
            }
            if (!this.content) {
                this.content = e;
            }
            if (!this.isAjax) {
                this.contentParsed.html(this.content);
                this.setContent();
                that._contentReady.resolve();
            }
        },
        _stopCountDown: function () {
            clearInterval(this.autoCloseInterval);
            if (this.$cd) {
                this.$cd.remove();
            }
        },
        _startCountDown: function () {
            var that = this;
            var opt = this.autoClose.split("|");
            if (opt.length !== 2) {
                console.error("Invalid option for autoClose. example 'close|10000'");
                return false;
            }
            var button_key = opt[0];
            var time = parseInt(opt[1]);
            if (typeof this.buttons[button_key] === "undefined") {
                console.error("Invalid button key '" + button_key + "' for autoClose");
                return false;
            }
            var seconds = Math.ceil(time / 1000);
            this.$cd = $('<span class="countdown"> (' + seconds + ")</span>").appendTo(this["$_" + button_key]);
            this.autoCloseInterval = setInterval(function () {
                that.$cd.html(" (" + (seconds -= 1) + ") ");
                if (seconds <= 0) {
                    that["$$" + button_key].trigger("click");
                    that._stopCountDown();
                }
            }, 1000);
        },
        _getKey: function (key) {
            switch (key) {
                case 192:
                    return "tilde";
                case 13:
                    return "enter";
                case 16:
                    return "shift";
                case 9:
                    return "tab";
                case 20:
                    return "capslock";
                case 17:
                    return "ctrl";
                case 91:
                    return "win";
                case 18:
                    return "alt";
                case 27:
                    return "esc";
                case 32:
                    return "space";
            }
            var initial = String.fromCharCode(key);
            if (/^[A-z0-9]+$/.test(initial)) {
                return initial.toLowerCase();
            } else {
                return false;
            }
        },
        reactOnKey: function (e) {
            var that = this;
            var a = $(".jconfirm");
            if (a.eq(a.length - 1)[0] !== this.$el[0]) {
                return false;
            }
            var key = e.which;
            if (this.$content.find(":input").is(":focus") && /13|32/.test(key)) {
                return false;
            }
            var keyChar = this._getKey(key);
            if (keyChar === "esc" && this.escapeKey) {
                if (this.escapeKey === true) {
                    this.$scrollPane.trigger("click");
                } else {
                    if (typeof this.escapeKey === "string" || typeof this.escapeKey === "function") {
                        var buttonKey;
                        if (typeof this.escapeKey === "function") {
                            buttonKey = this.escapeKey();
                        } else {
                            buttonKey = this.escapeKey;
                        }
                        if (buttonKey) {
                            if (typeof this.buttons[buttonKey] === "undefined") {
                                console.warn("Invalid escapeKey, no buttons found with key " + buttonKey);
                            } else {
                                this["$_" + buttonKey].trigger("click");
                            }
                        }
                    }
                }
            }
            $.each(this.buttons, function (key, button) {
                if (button.keys.indexOf(keyChar) != -1) {
                    that["$_" + key].trigger("click");
                }
            });
        },
        setDialogCenter: function () {
            console.info("setDialogCenter is deprecated, dialogs are centered with CSS3 tables");
        },
        _unwatchContent: function () {
            clearInterval(this._timer);
        },
        close: function () {
            var that = this;
            if (typeof this.onClose === "function") {
                this.onClose();
            }
            this._unwatchContent();
            $(window).unbind("resize." + this._id);
            $(window).unbind("keyup." + this._id);
            $(window).unbind("jcKeyDown." + this._id);
            if (this.draggable) {
                $(window).unbind("mousemove." + this._id);
                $(window).unbind("mouseup." + this._id);
                this.$titleContainer.unbind("mousedown");
            }
            that.$el.removeClass(that.loadedClass);
            $("body").removeClass("jconfirm-no-scroll-" + that._id);
            that.$jconfirmBoxContainer.removeClass("jconfirm-no-transition");
            setTimeout(function () {
                that.$body.addClass(that.closeAnimationParsed);
                that.$jconfirmBg.addClass("jconfirm-bg-h");
                var closeTimer = (that.closeAnimation === "none") ? 1 : that.animationSpeed;
                setTimeout(function () {
                    that.$el.remove();
                    var l = jconfirm.instances;
                    var i = jconfirm.instances.length - 1;
                    for (i; i >= 0; i--) {
                        if (jconfirm.instances[i]._id === that._id) {
                            jconfirm.instances.splice(i, 1);
                        }
                    }
                    if (!jconfirm.instances.length) {
                        if (that.scrollToPreviousElement && jconfirm.lastFocused && jconfirm.lastFocused.length && $.contains(document, jconfirm.lastFocused[0])) {
                            var $lf = jconfirm.lastFocused;
                            if (that.scrollToPreviousElementAnimate) {
                                var st = $(window).scrollTop();
                                var ot = jconfirm.lastFocused.offset().top;
                                var wh = $(window).height();
                                if (!(ot > st && ot < (st + wh))) {
                                    var scrollTo = (ot - Math.round((wh / 3)));
                                    $("html, body").animate({
                                        scrollTop: scrollTo
                                    }, that.animationSpeed, "swing", function () {
                                        $lf.focus();
                                    });
                                } else {
                                    $lf.focus();
                                }
                            } else {
                                $lf.focus();
                            }
                            jconfirm.lastFocused = false;
                        }
                    }
                    if (typeof that.onDestroy === "function") {
                        that.onDestroy();
                    }
                }, closeTimer * 0.4);
            }, 50);
            return true;
        },
        open: function () {
            if (this.isOpen()) {
                return false;
            }
            this._buildHTML();
            this._bindEvents();
            this._open();
            return true;
        },
        setStartingPoint: function () {
            var el = false;
            if (this.animateFromElement !== true && this.animateFromElement) {
                el = this.animateFromElement;
                jconfirm.lastClicked = false;
            } else {
                if (jconfirm.lastClicked && this.animateFromElement === true) {
                    el = jconfirm.lastClicked;
                    jconfirm.lastClicked = false;
                } else {
                    return false;
                }
            }
            if (!el) {
                return false;
            }
            var offset = el.offset();
            var iTop = el.outerHeight() / 2;
            var iLeft = el.outerWidth() / 2;
            iTop -= this.$jconfirmBox.outerHeight() / 2;
            iLeft -= this.$jconfirmBox.outerWidth() / 2;
            var sourceTop = offset.top + iTop;
            sourceTop = sourceTop - this._scrollTop();
            var sourceLeft = offset.left + iLeft;
            var wh = $(window).height() / 2;
            var ww = $(window).width() / 2;
            var targetH = wh - this.$jconfirmBox.outerHeight() / 2;
            var targetW = ww - this.$jconfirmBox.outerWidth() / 2;
            sourceTop -= targetH;
            sourceLeft -= targetW;
            if (Math.abs(sourceTop) > wh || Math.abs(sourceLeft) > ww) {
                return false;
            }
            this.$jconfirmBoxContainer.css("transform", "translate(" + sourceLeft + "px, " + sourceTop + "px)");
        },
        _open: function () {
            var that = this;
            if (typeof that.onOpenBefore === "function") {
                that.onOpenBefore();
            }
            this.$body.removeClass(this.animationParsed);
            this.$jconfirmBg.removeClass("jconfirm-bg-h");
            this.$body.focus();
            that.$jconfirmBoxContainer.css("transform", "translate(" + 0 + "px, " + 0 + "px)");
            setTimeout(function () {
                that.$body.css(that._getCSS(that.animationSpeed, 1));
                that.$body.css({
                    "transition-property": that.$body.css("transition-property") + ", margin"
                });
                that.$jconfirmBoxContainer.addClass("jconfirm-no-transition");
                that._modalReady.resolve();
                if (typeof that.onOpen === "function") {
                    that.onOpen();
                }
                that.$el.addClass(that.loadedClass);
            }, this.animationSpeed);
        },
        loadedClass: "jconfirm-open",
        isClosed: function () {
            return !this.$el || this.$el.css("display") === "";
        },
        isOpen: function () {
            return !this.isClosed();
        },
        toggle: function () {
            if (!this.isOpen()) {
                this.open();
            } else {
                this.close();
            }
        }
    };
    jconfirm.instances = [];
    jconfirm.lastFocused = false;
    jconfirm.pluginDefaults = {
        template: '<div class="jconfirm"><div class="jconfirm-bg jconfirm-bg-h"></div><div class="jconfirm-scrollpane"><div class="jconfirm-row"><div class="jconfirm-cell"><div class="jconfirm-holder"><div class="jc-bs3-container"><div class="jc-bs3-row"><div class="jconfirm-box-container jconfirm-animated"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="jconfirm-closeIcon">&times;</div><div class="jconfirm-title-c"><span class="jconfirm-icon-c"></span><span class="jconfirm-title"></span></div><div class="jconfirm-content-pane"><div class="jconfirm-content"></div></div><div class="jconfirm-buttons"></div><div class="jconfirm-clear"></div></div></div></div></div></div></div></div></div></div>',
        title: "Hello",
        titleClass: "",
        type: "default",
        typeAnimated: true,
        draggable: true,
        dragWindowGap: 15,
        dragWindowBorder: true,
        animateFromElement: true,
        alignMiddle: true,
        smoothContent: true,
        content: "Are you sure to continue?",
        buttons: {},
        defaultButtons: {
            ok: {
                action: function () {}
            },
            close: {
                action: function () {}
            }
        },
        contentLoaded: function () {},
        icon: "",
        lazyOpen: false,
        bgOpacity: null,
        theme: "light",
        animation: "scale",
        closeAnimation: "scale",
        animationSpeed: 400,
        animationBounce: 1,
        escapeKey: true,
        rtl: false,
        container: "body",
        containerFluid: false,
        backgroundDismiss: false,
        backgroundDismissAnimation: "shake",
        autoClose: false,
        closeIcon: null,
        closeIconClass: false,
        watchInterval: 100,
        columnClass: "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
        boxWidth: "50%",
        scrollToPreviousElement: true,
        scrollToPreviousElementAnimate: true,
        useBootstrap: true,
        offsetTop: 40,
        offsetBottom: 40,
        bootstrapClasses: {
            container: "container",
            containerFluid: "container-fluid",
            row: "row"
        },
        onContentReady: function () {},
        onOpenBefore: function () {},
        onOpen: function () {},
        onClose: function () {},
        onDestroy: function () {},
        onAction: function () {}
    };
    var keyDown = false;
    $(window).on("keydown", function (e) {
        if (!keyDown) {
            var $target = $(e.target);
            var pass = false;
            if ($target.closest(".jconfirm-box").length) {
                pass = true;
            }
            if (pass) {
                $(window).trigger("jcKeyDown");
            }
            keyDown = true;
        }
    });
    $(window).on("keyup", function () {
        keyDown = false;
    });
    jconfirm.lastClicked = false;
    $(document).on("mousedown", "button, a", function () {
        jconfirm.lastClicked = $(this);
    });
})(jQuery, window);
var dh_utility_common = {
    params: {
        alertTimeOut: null,
        active_console_log: 0
    },
    init: function () {
        thisObj = this;
        this.isAjax = 0;
        if ($('#BGFixedTransparentLaunchaffiliate').length > 0) {
            $('#BGFixedTransparentLaunchaffiliate, .affiliate-launches-main .butDesignhill a, .affiliate-launches-main .success-msg1 a, .affiliate-launches-main .affiliate-msg-close1 i').on('click', function () {
                thisObj.contest.affiliate.close();
            });
        }
        var isShownOfferPopUp = 0;
        var isShownOfferRightPopUp = 0;
        var isShownOfferAutoPopUpMain = 0;
        var thisPageBodyID = parseInt($('body').attr('data-node-id'));
        if (thisPageBodyID == 744 || thisPageBodyID == 743 || thisPageBodyID == 756 || thisPageBodyID == 738 || thisPageBodyID == 745) {
            isShownOfferPopUp = 1;
        } else {
            if ($('body').hasClass('homeIndex')) {
                isShownOfferPopUp = 1;
            }
            if ($('body').hasClass('pagecategory-listing')) {
                isShownOfferPopUp = 1;
            }
        }
        if (isShownOfferPopUp == 1) {
            if (parseInt($('body').attr('data-usr-logged')) == 1 && parseInt($('body').attr('data-usr-role')) != 4) {
                isShownOfferPopUp = 0;
            }
        }
        if (thisPageBodyID == 789) {
            var currentLocation = window.location.toString();
            if ((currentLocation.indexOf('/tools/logo-maker') < 0) && (currentLocation.indexOf('/tools/business-card-maker') < 0)) {
                isShownOfferPopUp = 1;
                isShownOfferRightPopUp = 0;
                isShownOfferAutoPopUpMain = 0;
            }
        }
        if (isShownOfferPopUp == 1) {
            if (isShownOfferRightPopUp == 1) {
                $('body').append('<div class="offer_class"><div class="outer_offerClass"><div class="offer_imgClass"><a class="offerImg_href"><img src="' + DH.getAssetImgUrl('offer-banner-logo/offer-vip-100-right-side-orange.png') + '" alt="offer"/></a></div></div></div>');
            }
            $('body').append('<div class="modal fade" id="christmas_offer_popup" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><a href="' + (DH.baseURL || base_url) + '/launch?offercode=SPECIAL100" class="banner_href"><img src="' + DH.getAssetImgUrl('offer-banner-logo/offer_banner-save100-red.jpg') + '" alt="15% Off"/></a></div></div></div></div>');
            if (isShownOfferAutoPopUpMain == 1) {
                setTimeout(function () {
                    $('#christmas_offer_popup').modal('show');
                }, 8000);
            }
            $('.offer_class .offerImg_href').click(function () {
                $('#christmas_offer_popup').modal('show');
            });
            var h = ($(window).height() / 2) - 70;
            h = (h > 0) ? h : 5;
            $('.offer_class .outer_offerClass').css({
                top: h + 'px'
            });
            $(window).on('resize orientationChange', function (e) {
                var h = ($(window).height() / 2) - 70;
                h = (h > 0) ? h : 5;
                $('.offer_class .outer_offerClass').css({
                    top: h + 'px'
                });
            });
        }
        if ($('#frmUsrPkgUpgradePopUp').length > 0) {
            $('#price-table-modal .price-mainBody').on('click', function (e) {
                e.preventDefault();
                if ($(this).hasClass('disabled')) {
                    return false;
                }
                if ($(this).hasClass('active')) {
                    return false;
                }
                $('#price-table-modal .price-mainBody .price-selectBtn').text('Select');
                $('#price-table-modal .price-mainBody').removeClass('active');
                $(this).addClass('active');
                $(this).find('.price-selectBtn').text('Selected');
                $('#frmUsrPkgUpgradePopUp input[name="packid"]').val($(this).attr('data-point'));
            });
        }
    },
    alert: function (myval) {
        try {
            clearTimeout(dh_utility_common.params.alertTimeOut);
        } catch (e) {}
        var g = $.extend({
            message: " ",
            type: "success"
        }, myval);
        var tCss = 'success-msg',
            tLabel = 'Success',
            tIcon = 'icon-ok';
        if (g.type == 'error') {
            tCss = 'error-msg';
            tLabel = 'Error';
            tIcon = 'icon-ban-circle';
        }
        if (g.type == 'warning') {
            tCss = 'warning-msg';
            tLabel = 'Warning';
            tIcon = 'icon-warning-sign';
        }
        $('body .common-alerts').remove();
        $('body').append('<div class="common-alerts ' + tCss + '"><p><span><i class="' + tIcon + ' icon-left"></i></span> <span><b>' + tLabel + ':</b> ' + g.message + ' <i class="icon-remove"></i></span></p></div>');
        $('.common-alerts').animate({
            opacity: 1,
            top: "70px"
        }, 'slow').css({
            'visibility': 'visible'
        });
        dh_utility_common.params.alertTimeOut = setTimeout(function () {
            $('.common-alerts').animate({
                opacity: 0,
                top: "50px"
            }, 'slow').css({
                'visibility': 'hidden'
            });
        }, 5000);
        $("body").on("click", '.common-alerts .icon-remove', function (g) {
            g.preventDefault();
            $('.common-alerts').animate({
                opacity: 0,
                top: "50px"
            }, 'slow').css({
                'visibility': 'hidden'
            });
        });
    },
    animate: function () {
        $('.start_img, .invite_img').addClass("hidden_effect").viewportChecker({
            classToAdd: 'visible animated slideInLeft',
            offset: 100
        });
        $('.find_designer').addClass("hidden_effect").viewportChecker({
            classToAdd: 'visible animated slideInRight',
            offset: 100
        });
    },
    popupBox: {
        _closeWrapper: function (popUpBoxObj) {
            popUpBoxObj.fadeOut(function () {
                popUpBoxObj.remove()
            });
        },
        openLoginSignUpBox: function (opt, callbackFunc, tasksubscription) {
            params_default = {
                popupFor: '0',
                divId: '',
                w: 490,
                h: 296,
                type: '',
                hit_area: '',
                shown_pwd: 'no',
                show_user_type: '1',
                'show_faceboox_login_signup_link': 0
            };
            var params_new = $.extend({}, params_default, opt);
            params_new.divId = 'popup-login-signup';
            if (params_new.show_user_type == '1' || params_new.show_user_type == '2') {} else {
                params_new.show_user_type == '1';
            }
            if ($('#popup_signup_inner_box').length <= 0) {
                var signup_popup = dh_utility_templates.popup_register(params_new);
                signup_popup = $("<div/>").html(signup_popup);
                $(signup_popup).find('a#linkSignUpLoginBtnLogin').on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    dh_utility_common.popupBox.loginBox(params_new, callbackFunc);
                });
                $('body').append(signup_popup);
            }
            if ($('#popup_login_inner_box').length <= 0) {
                var login_popup = dh_utility_templates.popup_login(params_new);
                login_popup = $("<div/>").html(login_popup);
                $(login_popup).find('a#linkSignUpLoginBtnRegister').on('click', function (e) {
                    if (tasksubscription) {
                        $('#popup_login_inner_box').modal('hide');
                        return;
                    }
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    dh_utility_common.popupBox.signUpBox(params_new, callbackFunc);
                });
                $('body').append(login_popup);
            }
            $('#popup_login_inner_box form').validate({
                errorLabelContainer: $('#popup_login_inner_box .error-message'),
                wrapper: "li",
                rules: {
                    fname: {
                        required: true,
                        email: true,
                        pattern: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/
                    },
                    loginpassword: {
                        required: true
                    }
                },
                messages: {
                    fname: {
                        required: 'Please enter email address.',
                        email: 'Please enter valid email address.'
                    },
                    loginpassword: {
                        required: 'Please enter your password.'
                    }
                }
            });
            $('#popup_signup_inner_box form').validate({
                errorLabelContainer: $('#popup_signup_inner_box .error-message'),
                wrapper: "li",
                rules: {
                    emailid: {
                        required: true,
                        email: true,
                        pattern: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/
                    },
                    txt_signpassword: {
                        required: true,
                        minlength: 8,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    },
                    txt_signcpassword_again: {
                        equalTo: "#txt_signpassword"
                    },
                    usertype_radio: {
                        required: function (element) {
                            if ($.trim($('#usertype_radio').val()) != '') {
                                return true;
                            } else {
                                return false;
                            }
                        },
                    },
                    txt_isd_code: {
                        required: function (element) {
                            if ($.trim($('#txt_phone_no').val()) != '') {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        pattern: /^[\(\)\s\-\/\+\d]{1,15}[\d]+$/
                    },
                    txt_phone_no: {
                        required: function (element) {
                            if ($.trim($('#txt_isd_code').val()) != '') {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        pattern: /^[\(\)\s\.\-\+\d]{4,20}$/
                    }
                },
                messages: {
                    emailid: {
                        required: 'Please enter email address.',
                        email: 'Please enter valid email address.'
                    },
                    usertype_radio: {
                        required: 'Please Select User Type.'
                    },
                    txt_signpassword: {
                        required: 'Please enter your password.',
                        minlength: 'Please enter your password in alpha-numeric only and use at least 8 characters.',
                        pattern: 'Please enter your password in alpha-numeric only and use at least 8 characters.'
                    },
                    txt_signcpassword_again: {
                        equalTo: 'Confirm Password not Matching.'
                    },
                    txt_isd_code: {
                        required: 'Please select Country Code.',
                        pattern: 'Please enter valid Country Code.'
                    },
                    txt_phone_no: {
                        required: 'Please enter phone/mobile number.',
                        pattern: 'Please enter valid phone/mobile number.'
                    }
                },
                highlight: function (element, errorClass, validClass) {
                    $('#' + element.id).addClass('errorshowbg');
                }
            });
            $('#popup_signup_inner_box form, #popup_login_inner_box form').on('submit', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                var frmObj = $(this);
                if (frmObj.valid() !== true) {
                    return false;
                }
                if (frmObj.hasClass('frm-popup-login')) {
                    var txt_name = frmObj.find('input[name="fname"]').val();
                    var txt_password = frmObj.find('input[name="loginpassword"]').val();
                    $('#loadere').show();
                    var pd_comment = $('#form-comment-textarea').val();
                    var comment_mainid = $('#comment_mainid').val();
                    var comment_section_type = $('#comment_section_type').val();
                    var designTitle = $('#designTitle').val();
                    $.ajax({
                        type: "POST",
                        url: DH.baseURL + '/dh_ajax.php?tmstmprand=' + (new Date).getTime(),
                        data: {
                            action: 'login',
                            name: txt_name,
                            pass: txt_password,
                            form_id: 'user_login',
                            op: 'Log in',
                            hit_area: params_new.hit_area,
                            shown_pwd: params_new.shown_pwd,
                            pd_comment: pd_comment,
                            comment_mainid: comment_mainid,
                            comment_section_type: comment_section_type,
                            designTitle: designTitle
                        },
                    }).done(function (data, textStatus) {
                        var hide_loader = 1;
                        var isError = 1;
                        var msgText = 'Email and/or password is incorrect!';
                        try {
                            if (data.status == 'success') {
                                isError = 0;
                                DH.isLogged = 1;
                                $('#popup_login_inner_box').modal('hide');
                                var dataNextAction = frmObj.attr('data-next-action');
                                switch (dataNextAction) {
                                    case 'contest_save_draft':
                                    case 'contest_save_next_form':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        launchContestJsonFuncObj.launch_contest.save_step_three(dataNextAction);
                                        break;
                                    case 'save3':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        show_addons_next_form('onlySave');
                                        break;
                                    case 'fonts':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        launchContestJsonFuncObj.launch_contest.save_visual_brief('fonts', 'continue', 'brief', 'yes', '');
                                        break;
                                    case 'colors':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        launchContestJsonFuncObj.launch_contest.save_visual_brief('colors', 'continue', 'brief', 'yes', '');
                                        break;
                                    case 'styles':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        launchContestJsonFuncObj.launch_contest.save_visual_brief('styles', 'continue', 'brief', 'yes', '');
                                        break;
                                    case 'contest_vbs_font_save':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        launchContestJsonFuncObj.launch_contest.save_visual_brief('fonts', 'continue', 'brief', 'yes', '');
                                        break;
                                    case 'project_invitation':
                                        window.location.assign(DH.baseURL + "/projects/invitation");
                                        break;
                                    case 'project_invitation_login':
                                        hide_loader = 0;
                                        var data_project_type = frmObj.attr('data-project-type');
                                        var data_project_send_data = frmObj.attr('data-project-send-data');
                                        save_project_ajax(data_project_send_data, data_project_type);
                                        break;
                                    case 'callback':
                                        if (typeof callbackFunc === 'function') {
                                            callbackFunc(data.user_data);
                                        }
                                        break;
                                    default:
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        if (typeof opt.show_loader_after_success != "undefined" && opt.show_loader_after_success == true) {
                                            if (typeof loader_timer == "undefined") {
                                                loader_timer = 0;
                                            }
                                            loader_timer = setInterval(function () {
                                                if ($('#loadere').css("display") != "none") {
                                                    clearInterval(loader_timer);
                                                }
                                                $('#loadere').show();
                                            }, 100);
                                        }
                                        location.reload();
                                        break;
                                }
                            }
                            if (data.status == 'error') {
                                isError = 1;
                                msgText = data.msg;
                            }
                        } catch (err) {}
                        if (hide_loader == 1) {
                            $('#loadere').hide();
                        }
                        if (isError == 1) {
                            frmObj.find('input[name="fname"]').focus();
                            if (typeof data.errType != 'undefined' && data.errType == 'force_pwd_reset') {
                                msgText = '';
                                frmObj.closest('.modal-body').find('.error-message').hide();
                                frmObj.closest('.modal-body').find('.reset_pwd_error').show();
                                setTimeout(() => {
                                    frmObj.closest('.modal-body').find('.reset_pwd_error').hide();
                                }, 20000);
                            } else {
                                frmObj.closest('.modal-body').find('.reset_pwd_error').hide();
                                frmObj.closest('.modal-body').find('.error-message').html(msgText);
                                frmObj.closest('.modal-body').find('.error-message').show();
                            }
                            return false;
                        }
                    }).fail(function (errorObj, textStatus, errorThrown) {
                        $('#loadere').hide();
                        frmObj.closest('.modal-body').find('.error-message').html('There is some problem. Please try again later.');
                        frmObj.closest('.modal-body').find('.error-message').show();
                    });
                } else {
                    var txt_mail = frmObj.find('input[name="emailid"]').val();
                    var txt_password = frmObj.find('input[name="txt_signpassword"]').val();
                    var txt_user_type = 'customer';
                    if (frmObj.find('input[name=usertype_radio]').length > 0) {
                        txt_user_type = (frmObj.find('input[name=usertype_radio]:checked').val() == 2) ? 'designer' : 'customer';
                    } else {
                        txt_user_type = (parseInt(frmObj.find('input[name="usertype"]').val()) == 2) ? 'designer' : 'customer';
                    }
                    var txt_isd_code = frmObj.find('select[name="txt_isd_code"]').val();
                    var txt_phone_no = frmObj.find('input[name="txt_phone_no"]').val();
                    var txt_agency = frmObj.find('input:checkbox[name=txt_agency]');
                    var txt_agency_val = '';
                    if (txt_user_type == 'customer') {
                        if ($(txt_agency).is(':checked')) {
                            txt_agency_val = 'on';
                        }
                    }
                    $('#loadere').show();
                    var txt_signup_source_type = 0;
                    if (params_new.hit_area == 'launch_contest') {
                        txt_signup_source_type = 1;
                    }
                    if (params_new.hit_area == 'submit_design') {
                        txt_signup_source_type = 2;
                    }
                    var pd_comment = $('#form-comment-textarea').val();
                    var comment_mainid = $('#comment_mainid').val();
                    var comment_section_type = $('#comment_section_type').val();
                    var designTitle = $('#designTitle').val();
                    $.ajax({
                        type: "POST",
                        url: DH.baseURL + '/mainAjax2.php?tmstmprand=' + (new Date).getTime(),
                        data: {
                            mail: txt_mail,
                            pass: txt_password,
                            user_type: txt_user_type,
                            action: 'register_user_ajax_pop_front',
                            isd_code: txt_isd_code,
                            phone_no: txt_phone_no,
                            agency: txt_agency_val,
                            hit_area: params_new.hit_area,
                            shown_pwd: params_new.shown_pwd,
                            signup_source_type: txt_signup_source_type,
                            pd_comment: pd_comment,
                            comment_mainid: comment_mainid,
                            comment_section_type: comment_section_type,
                            designTitle: designTitle
                        },
                    }).done(function (data, textStatus) {
                        $('#loadere').hide();
                        if (data == 'EXIST') {
                            frmObj.find('input[name="emailid"]').focus();
                            frmObj.closest('.modal-body').find('.error-message').show().html('This email address already exists');
                            frmObj.find('input[name="emailid"]').addClass('errorshowbg')
                            frmObj.find('input[type="password"]').val('');
                            return false;
                        } else if (data == 'WAITLIST') {
                            frmObj.find('input[name="emailid"]').focus();
                            frmObj.closest('.modal-body').find('.error-message').show().html(dublicateBlackListUserSignupMsg);
                            frmObj.find('input[name="emailid"]').addClass('errorshowbg')
                            frmObj.find('input[type="password"]').val('');
                            return false;
                        } else if ((typeof data === 'string' || data instanceof String) && data.indexOf("waitid") !== -1) {
                            location.href = DH.baseURL + '/waiting-list-user?' + data;
                        } else {
                            DH.isLogged = 1;
                            $('#popup_signup_inner_box').modal('hide');
                            if (typeof growsumo == "undefined") {
                                dh_utility_common.afterSignupAction(frmObj, data, callbackFunc, opt);
                            } else {
                                growsumo.data.email = txt_mail;
                                growsumo.data.customer_key = txt_mail.toLowerCase();
                                growsumo.createSignup(function () {
                                    dh_utility_common.afterSignupAction(frmObj, data, callbackFunc, opt);
                                });
                            }
                        }
                    }).fail(function (errorObj, textStatus, errorThrown) {
                        $('#loadere').hide();
                        frmObj.closest('.modal-body').find('.error-message').show().html('There is some problem. Please try again later.');
                    });
                }
            });
            $('#popup_artist_signup_inner_box .getstartdiv, #popup_artist_login_inner_box .getstartdiv').click(function (e) {
                e.stopPropagation();
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).closest('form').trigger('submit');
            });
            $('#popup_artist_signup_inner_box input, #popup_artist_login_inner_box input').on("keypress", function (e) {
                if (e.which == 13 && !e.shiftKey) {
                    e.stopPropagation();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    $(this).closest('form').trigger('submit');
                }
            });
            $('#popup_signup_inner_box .getstartdiv, #popup_login_inner_box .getstartdiv').click(function (e) {
                e.stopPropagation();
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).closest('form').trigger('submit');
            });
            $('#popup_signup_inner_box input, #popup_login_inner_box input').on("keypress", function (e) {
                if (e.which == 13 && !e.shiftKey) {
                    e.stopPropagation();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    $(this).closest('form').trigger('submit');
                }
            });
        },
        openLoginSignUpBoxArtists: function (opt, callbackFunc, tasksubscription) {
            params_default = {
                popupFor: '0',
                divId: '',
                w: 490,
                h: 296,
                type: '',
                hit_area: '',
                shown_pwd: 'no',
                shown_signup_pwd: 'yes',
                show_user_type: '1',
                'show_faceboox_login_signup_link': 0
            };
            var params_new = $.extend({}, params_default, opt);
            params_new.divId = 'popup-login-signup';
            if (params_new.show_user_type == '1' || params_new.show_user_type == '2') {} else {
                params_new.show_user_type == '1';
            }
            if ($('#popup_artist_signup_inner_box').length <= 0) {
                var signup_popup = dh_utility_templates.popup_register_artist(params_new);
                signup_popup = $("<div/>").html(signup_popup);
                $(signup_popup).find('a#linkSignUpLoginBtnLoginArtist').on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    dh_utility_common.popupBox.loginBoxArtists(params_new, callbackFunc);
                });
                $('body').append(signup_popup);
            }
            if ($('#popup_artist_login_inner_box').length <= 0) {
                var login_popup = dh_utility_templates.popup_login_artist(params_new);
                login_popup = $("<div/>").html(login_popup);
                $(login_popup).find('a#linkSignUpLoginBtnRegisterArtist').on('click', function (e) {
                    if (tasksubscription) {
                        $('#popup_artist_login_inner_box').modal('hide');
                        return;
                    }
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    dh_utility_common.popupBox.signUpBoxArtists(params_new, callbackFunc);
                });
                $('body').append(login_popup);
            }
            $('#popup_artist_login_inner_box form').validate({
                rules: {
                    fname: {
                        required: true,
                        email: true,
                        pattern: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
                    },
                    loginpassword: {
                        required: true
                    }
                },
                messages: {
                    fname: {
                        required: 'Please enter email address.',
                        email: 'Please enter valid email address.'
                    },
                    loginpassword: {
                        required: 'Please enter your password.'
                    }
                },
                highlight: function (element, errorClass, validClass) {
                    $('#popup_artist_login_inner_box').find('label.error').css('float', 'left');
                }
            });
            $('#popup_signup_inner_box form').validate({
                errorLabelContainer: $('#popup_signup_inner_box .error-message'),
                wrapper: "li",
                rules: {
                    emailid: {
                        required: true,
                        email: true,
                        pattern: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
                    },
                    txt_signpassword: {
                        required: true,
                        minlength: 8,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    },
                    txt_signcpassword_again: {
                        equalTo: "#txt_signpassword"
                    },
                    usertype_radio: {
                        required: function (element) {
                            if ($.trim($('#usertype_radio').val()) != '') {
                                return true;
                            } else {
                                return false;
                            }
                        },
                    },
                    txt_isd_code: {
                        required: function (element) {
                            if ($.trim($('#txt_phone_no').val()) != '') {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        pattern: /^[\(\)\s\-\/\+\d]{1,15}[\d]+$/
                    },
                    txt_phone_no: {
                        required: function (element) {
                            if ($.trim($('#txt_isd_code').val()) != '') {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        pattern: /^[\(\)\s\.\-\+\d]{4,20}$/
                    }
                },
                messages: {
                    emailid: {
                        required: 'Please enter email address.',
                        email: 'Please enter valid email address.'
                    },
                    usertype_radio: {
                        required: 'Please Select User Type.'
                    },
                    txt_signpassword: {
                        required: 'Please enter your password.',
                        minlength: 'Please enter your password in alpha-numeric only and use at least 8 characters.',
                        pattern: 'Please enter your password in alpha-numeric only and use at least 8 characters.'
                    },
                    txt_signcpassword_again: {
                        equalTo: 'Confirm Password not Matching.'
                    },
                    txt_isd_code: {
                        required: 'Please select Country Code.',
                        pattern: 'Please enter valid Country Code.'
                    },
                    txt_phone_no: {
                        required: 'Please enter phone/mobile number.',
                        pattern: 'Please enter valid phone/mobile number.'
                    }
                },
                highlight: function (element, errorClass, validClass) {
                    $('#' + element.id).addClass('errorshowbg');
                }
            });
            $('#popup_artist_signup_inner_box form').validate({
                rules: {
                    emailid: {
                        required: true,
                        email: true,
                        pattern: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/
                    },
                    txt_signpassword: {
                        required: true,
                        minlength: 8,
                        pattern: /^[A-Za-z0-9 _.-]+$/
                    },
                    txt_signcpassword_again: {
                        equalTo: "#txt_signpassword"
                    },
                    usertype_radio: {
                        required: function (element) {
                            if ($.trim($('#usertype_radio').val()) != '') {
                                return true;
                            } else {
                                return false;
                            }
                        },
                    },
                    txt_isd_code: {
                        required: function (element) {
                            if ($.trim($('#txt_phone_no').val()) != '') {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        pattern: /^[\(\)\s\-\/\+\d]{1,15}[\d]+$/
                    },
                    txt_phone_no: {
                        required: function (element) {
                            if ($.trim($('#txt_isd_code').val()) != '') {
                                return true;
                            } else {
                                return false;
                            }
                        },
                        pattern: /^[\(\)\s\.\-\+\d]{4,20}$/
                    }
                },
                messages: {
                    emailid: {
                        required: 'Please enter email address.',
                        email: 'Please enter valid email address.'
                    },
                    usertype_radio: {
                        required: 'Please Select User Type.'
                    },
                    txt_signpassword: {
                        required: 'Please enter your password.',
                        minlength: 'Please enter your password in alpha-numeric only and use at least 8 characters.',
                        pattern: 'Please enter your password in alpha-numeric only and use at least 8 characters.'
                    },
                    txt_signcpassword_again: {
                        equalTo: 'Confirm Password not Matching.'
                    },
                    txt_isd_code: {
                        required: 'Please select Country Code.',
                        pattern: 'Please enter valid Country Code.'
                    },
                    txt_phone_no: {
                        required: 'Please enter phone/mobile number.',
                        pattern: 'Please enter valid phone/mobile number.'
                    }
                },
                highlight: function (element, errorClass, validClass) {
                    $('#popup_artist_signup_inner_box').find('label.error').css('float', 'left');
                    if ($('#popup_artist_signup_inner_box div.error-message').length) {
                        $('#popup_artist_signup_inner_box div.error-message').hide();
                        $('#emailid').removeClass('errorshowbg');
                    }
                }
            });
            $('#popup_artist_signup_inner_box form, #popup_artist_login_inner_box form').on('submit', function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                var frmObj = $(this);
                if (frmObj.valid() !== true) {
                    return false;
                }
                if (frmObj.hasClass('frm-popup-login')) {
                    var txt_name = frmObj.find('input[name="fname"]').val();
                    var txt_password = frmObj.find('input[name="loginpassword"]').val();
                    $('#loadere').show();
                    var pd_comment = $('#form-comment-textarea').val();
                    var comment_mainid = $('#comment_mainid').val();
                    var comment_section_type = $('#comment_section_type').val();
                    var designTitle = $('#designTitle').val();
                    $.ajax({
                        type: "POST",
                        url: DH.baseURL + '/dh_ajax.php?tmstmprand=' + (new Date).getTime(),
                        data: {
                            action: 'login',
                            name: txt_name,
                            pass: txt_password,
                            form_id: 'user_login',
                            op: 'Log in',
                            hit_area: params_new.hit_area,
                            shown_pwd: params_new.shown_pwd,
                            pd_comment: pd_comment,
                            comment_mainid: comment_mainid,
                            comment_section_type: comment_section_type,
                            designTitle: designTitle
                        },
                    }).done(function (data, textStatus) {
                        var hide_loader = 1;
                        var isError = 1;
                        var msgText = 'Email and/or password is incorrect!';
                        try {
                            if (data.status == 'success') {
                                isError = 0;
                                DH.isLogged = 1;
                                $('#popup_login_inner_box').modal('hide');
                                var dataNextAction = frmObj.attr('data-next-action');
                                switch (dataNextAction) {
                                    case 'contest_save_draft':
                                    case 'contest_save_next_form':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        launchContestJsonFuncObj.launch_contest.save_step_three(dataNextAction);
                                        break;
                                    case 'save3':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        show_addons_next_form('onlySave');
                                        break;
                                    case 'fonts':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        launchContestJsonFuncObj.launch_contest.save_visual_brief('fonts', 'continue', 'brief', 'yes', '');
                                        break;
                                    case 'colors':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        launchContestJsonFuncObj.launch_contest.save_visual_brief('colors', 'continue', 'brief', 'yes', '');
                                        break;
                                    case 'styles':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        launchContestJsonFuncObj.launch_contest.save_visual_brief('styles', 'continue', 'brief', 'yes', '');
                                        break;
                                    case 'contest_vbs_font_save':
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        launchContestJsonFuncObj.launch_contest.save_visual_brief('fonts', 'continue', 'brief', 'yes', '');
                                        break;
                                    case 'project_invitation':
                                        window.location.assign(DH.baseURL + "/projects/invitation");
                                        break;
                                    case 'project_invitation_login':
                                        hide_loader = 0;
                                        var data_project_type = frmObj.attr('data-project-type');
                                        var data_project_send_data = frmObj.attr('data-project-send-data');
                                        save_project_ajax(data_project_send_data, data_project_type);
                                        break;
                                    case 'callback':
                                        if (typeof callbackFunc === 'function') {
                                            callbackFunc(data.user_data);
                                        }
                                        break;
                                    default:
                                        dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                                        if (typeof opt.show_loader_after_success != "undefined" && opt.show_loader_after_success == true) {
                                            if (typeof loader_timer == "undefined") {
                                                loader_timer = 0;
                                            }
                                            loader_timer = setInterval(function () {
                                                if ($('#loadere').css("display") != "none") {
                                                    clearInterval(loader_timer);
                                                }
                                                $('#loadere').show();
                                            }, 100);
                                        }
                                        location.reload();
                                        break;
                                }
                            }
                            if (data.status == 'error') {
                                isError = 1;
                                msgText = data.msg;
                            }
                        } catch (err) {}
                        if (hide_loader == 1) {
                            $('#loadere').hide();
                        }
                        if (isError == 1) {
                            frmObj.find('input[name="fname"]').focus();
                            if (typeof data.errType != 'undefined' && data.errType == 'force_pwd_reset') {
                                msgText = '';
                                frmObj.closest('.modal-body').find('.error-message').hide();
                                frmObj.closest('.modal-body').find('.reset_pwd_error').show();
                                setTimeout(() => {
                                    frmObj.closest('.modal-body').find('.reset_pwd_error').hide();
                                }, 20000);
                            } else {
                                frmObj.closest('.modal-body').find('.reset_pwd_error').hide();
                                frmObj.closest('.modal-body').find('.error-message').html(msgText);
                                frmObj.closest('.modal-body').find('.error-message').show();
                            }
                            return false;
                        }
                    }).fail(function (errorObj, textStatus, errorThrown) {
                        $('#loadere').hide();
                        frmObj.closest('.modal-body').find('.error-message').html('There is some problem. Please try again later.');
                        frmObj.closest('.modal-body').find('.error-message').show();
                    });
                } else {
                    var txt_mail = frmObj.find('input[name="emailid"]').val();
                    var txt_password = frmObj.find('input[name="txt_signpassword"]').val();
                    var txt_user_type = 'customer';
                    if (frmObj.find('input[name=usertype_radio]').length > 0) {
                        txt_user_type = (frmObj.find('input[name=usertype_radio]:checked').val() == 2) ? 'designer' : 'customer';
                    } else {
                        txt_user_type = (parseInt(frmObj.find('input[name="usertype"]').val()) == 2) ? 'designer' : 'customer';
                    }
                    var txt_isd_code = frmObj.find('select[name="txt_isd_code"]').val();
                    var txt_phone_no = frmObj.find('input[name="txt_phone_no"]').val();
                    var txt_agency = frmObj.find('input:checkbox[name=txt_agency]');
                    var txt_agency_val = '';
                    if (txt_user_type == 'customer') {
                        if ($(txt_agency).is(':checked')) {
                            txt_agency_val = 'on';
                        }
                    }
                    $('#loadere').show();
                    var txt_signup_source_type = 0;
                    if (params_new.hit_area == 'launch_contest') {
                        txt_signup_source_type = 1;
                    }
                    if (params_new.hit_area == 'submit_design') {
                        txt_signup_source_type = 2;
                    }
                    var pd_comment = $('#form-comment-textarea').val();
                    var comment_mainid = $('#comment_mainid').val();
                    var comment_section_type = $('#comment_section_type').val();
                    var designTitle = $('#designTitle').val();
                    $.ajax({
                        type: "POST",
                        url: DH.baseURL + '/mainAjax2.php?tmstmprand=' + (new Date).getTime(),
                        data: {
                            mail: txt_mail,
                            pass: txt_password,
                            user_type: txt_user_type,
                            action: 'register_user_ajax_pop_front',
                            isd_code: txt_isd_code,
                            phone_no: txt_phone_no,
                            agency: txt_agency_val,
                            hit_area: params_new.hit_area,
                            shown_pwd: params_new.shown_pwd,
                            shown_signup_pwd: params_new.shown_signup_pwd,
                            signup_source_type: txt_signup_source_type,
                            pd_comment: pd_comment,
                            comment_mainid: comment_mainid,
                            comment_section_type: comment_section_type,
                            designTitle: designTitle
                        },
                    }).done(function (data, textStatus) {
                        $('#loadere').hide();
                        if (data == 'EXIST') {
                            frmObj.find('input[name="emailid"]').focus();
                            frmObj.closest('.modal-body').find('.error-message').show().html('This email address already exists');
                            frmObj.find('input[type="password"]').val('');
                            return false;
                        } else if (data == 'WAITLIST') {
                            frmObj.find('input[name="emailid"]').focus();
                            frmObj.closest('.modal-body').find('.error-message').show().html(dublicateBlackListUserSignupMsg);
                            frmObj.find('input[name="emailid"]').addClass('errorshowbg')
                            frmObj.find('input[type="password"]').val('');
                            return false;
                        } else if ((typeof data === 'string' || data instanceof String) && data.indexOf("waitid") !== -1) {
                            location.href = DH.baseURL + '/waiting-list-user?' + data;
                        } else {
                            $('#popup_artist_signup_inner_box').modal('hide');
                            processPopUrl({
                                step: 2
                            });
                            if (typeof addUrlToHistory == "function") {
                                addUrlToHistory({
                                    url: "?step=2",
                                    "replace": 1
                                });
                            }
                            signup_artist_n_user();
                            DH.isLogged = 1;
                            $('#popup_artist_signup_inner_box').modal('hide');
                            if (typeof growsumo == "undefined") {
                                dh_utility_common.afterSignupAction(frmObj, data, callbackFunc, opt);
                            } else {
                                growsumo.data.email = txt_mail;
                                growsumo.data.customer_key = txt_mail.toLowerCase();
                                growsumo.createSignup(function () {
                                    dh_utility_common.afterSignupAction(frmObj, data, callbackFunc, opt);
                                });
                            }
                        }
                    }).fail(function (errorObj, textStatus, errorThrown) {
                        $('#loadere').hide();
                        frmObj.closest('.modal-body').find('.error-message').show().html('There is some problem. Please try again later.');
                    });
                }
            });
            $('#popup_artist_signup_inner_box .getstartdiv, #popup_artist_login_inner_box .getstartdiv').click(function (e) {
                e.stopPropagation();
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).closest('form').trigger('submit');
            });
            $('#popup_artist_signup_inner_box input, #popup_artist_login_inner_box input').on("keypress", function (e) {
                if (e.which == 13 && !e.shiftKey) {
                    e.stopPropagation();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    $(this).closest('form').trigger('submit');
                }
            });
            $('#popup_signup_inner_box .getstartdiv, #popup_login_inner_box .getstartdiv').click(function (e) {
                e.stopPropagation();
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).closest('form').trigger('submit');
            });
            $('#popup_signup_inner_box input, #popup_login_inner_box input').on("keypress", function (e) {
                if (e.which == 13 && !e.shiftKey) {
                    e.stopPropagation();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    $(this).closest('form').trigger('submit');
                }
            });
        },
        signUpBox: function (opt, callbackFunc) {
            if ($('#popup_login_inner_box').length) {
                $('#popup_login_inner_box').modal('hide');
            }
            dh_utility_common.popupBox.openLoginSignUpBox(opt, callbackFunc);
            $('#popup_signup_inner_box').modal('show');
        },
        loginBox: function (opt, callbackFunc, tasksubscription) {
            if (typeof tasksubscription == 'undefined') {
                tasksubscription = false;
            }
            if ($('#popup_signup_inner_box').length) {
                $('#popup_signup_inner_box').modal('hide');
            }
            dh_utility_common.popupBox.openLoginSignUpBox(opt, callbackFunc, tasksubscription);
            $('#popup_login_inner_box').modal('show');
        },
        signUpBoxArtists: function (opt, callbackFunc) {
            if ($('#popup_artist_login_inner_box').length) {
                $('#popup_artist_login_inner_box').modal('hide');
            }
            dh_utility_common.popupBox.openLoginSignUpBoxArtists(opt, callbackFunc);
            $('#popup_artist_signup_inner_box').modal('show');
        },
        loginBoxArtists: function (opt, callbackFunc, tasksubscription) {
            if (typeof tasksubscription == 'undefined') {
                tasksubscription = false;
            }
            if ($('#popup_artist_signup_inner_box').length) {
                $('#popup_artist_signup_inner_box').modal('hide');
            }
            dh_utility_common.popupBox.openLoginSignUpBoxArtists(opt, callbackFunc, tasksubscription);
            $('#popup_artist_login_inner_box').modal('show');
        }
    },
    one_to_one_project: {
        uploadFiles: function (project_id, filesLen, files, is_deleted, folder_id, final_design, action, progressElement, callback, del_temp_file) {
            var uploaded_files_metadta = new Array();
            $('.activitySendMsg').prop('disabled', true).addClass('loading');
            no_uploaded = new Array();
            var ajx_df = new Promise(function (resolve, reject) {
                if (typeof del_temp_file != 'undefined' && del_temp_file) {
                    var send_data = new FormData();
                    send_data.append('action', 'delete_temp_files');
                    send_data.append('action_type', action);
                    send_data.append('project_id', project_id);
                    send_data.append('folder_id', folder_id);
                    $.ajax({
                        method: 'POST',
                        url: DH.baseURL + '/one-to-one-ajax.php?tmstmprand=' + (new Date).getTime(),
                        data: send_data,
                        async: true,
                        dataType: 'json',
                        success: function (dataMsg) {
                            resolve(dataMsg);
                        },
                        error: function (XHR, textStatus, errorThrown) {
                            console.log(textStatus);
                            reject(false);
                        },
                        cache: false,
                        contentType: false,
                        processData: false
                    });
                } else {
                    resolve(true);
                }
            });
            ajx_df.then(function (succ_response) {
                var xhr = [];
                var all_request_complete = 1;
                for (i = 0; i < filesLen; i++) {
                    $(progressElement).append('<div id="outer_' + i + '" >' + files[i].name + '<span id="innerspan_' + i + '" class="progress-span">0%</span><div class="progress"><div id="inner_' + i + '" class="progress_outer progress-bar progress-bar-striped active" role="progressbar" style="width:0%" > </div></div>');
                    xhr[i] = new XMLHttpRequest();
                    xhr[i].open('POST', DH.baseURL + '/one-to-one-ajax.php');
                    (function (i, files) {
                        xhr[i].upload.onprogress = function (e) {
                            $(progressElement).find("#innerspan_" + i).html(parseInt((e.loaded / e.total) * 100) + '%');
                            $(progressElement).find("#inner_" + i).css('width', parseInt((e.loaded / e.total) * 100) + '%');
                        };
                        xhr[i].onload = function (e) {
                            $(progressElement).find("#outer_" + i).remove();
                        }
                        xhr[i].onreadystatechange = function () {
                            if (xhr[i].readyState == 4 && xhr[i].status == 200) {
                                all_request_complete--;
                                try {
                                    var jsonResponse = JSON.parse(xhr[i].responseText);
                                    if (typeof jsonResponse.activity_id != 'undefined') {
                                        var activity_id = jsonResponse.activity_id;
                                    }
                                    if (jsonResponse.no_uploaded_files != '') {
                                        no_uploaded.push(jsonResponse.no_uploaded_files);
                                    }
                                    if (jsonResponse.status == 'success') {
                                        uploaded_files_metadta.push(jsonResponse.file_metadata);
                                    }
                                    if (jsonResponse.status != 'success') {
                                        if ('msg' in jsonResponse) {} else {}
                                    }
                                } catch (e) {
                                    dh_utility_common.alert({
                                        message: "Some error occured, Please try again later.",
                                        type: 'error'
                                    });
                                }
                                if (all_request_complete == '1') {
                                    $('.no-upload-msg .content').html('');
                                    if (no_uploaded.length > 0) {
                                        var no_uploaded_file_list = '<li>';
                                        no_uploaded_file_list += no_uploaded.join('</li><li>');
                                        no_uploaded_file_list += '</li>';
                                        var file_text = (no_uploaded.length > 1) ? " files" : " file";
                                        var no_upload_file_msg = '<div class="common-new error-msg-content" style="background:#e74c3c none repeat scroll 0 0;"><ul><li><i class="icon-warning-sign"></i> ' + no_uploaded.length + file_text + ' could not be uploaded:</li>' + no_uploaded_file_list + '</ul></div>';
                                        $('.no-upload-msg .content').html(no_upload_file_msg);
                                        $('.no-upload-msg').css('display', 'block');
                                    }
                                    setTimeout(function () {
                                        activity_id = (typeof activity_id != 'undefined') ? activity_id : 0;
                                        callback(activity_id, uploaded_files_metadta);
                                    }, 1000);
                                }
                            }
                        };
                    }(i, files));
                    var form = new FormData();
                    form.append('one2one_files[]', files[i]);
                    form.append('is_deleted', is_deleted);
                    form.append('folder_id', folder_id);
                    form.append('final_design', final_design);
                    form.append('project_id', project_id);
                    form.append('action', action);
                    if (all_request_complete == filesLen) {
                        form.append('update_activity', '1');
                    }
                    xhr[i].send(form);
                    all_request_complete++;
                }
            });
        },
        getTempFiles: function (callback) {
            var request = new XMLHttpRequest();
            request.open('POST', DH.baseURL + '/one-to-one-ajax.php');
            var form = new FormData();
            form.append('action', 'get_files');
            form.append('project_id', '0');
            form.append('is_deleted', '0');
            form.append('final_design', '0');
            form.append('filter', '');
            form.append('user', DH.userId);
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    try {
                        var resp = JSON.parse(request.response);
                    } catch (e) {
                        alert("Some error occured, Please refresh.");
                    }
                    callback(resp);
                }
            };
            request.send(form);
        },
        getFilesExtAndUrl: function (file_name, file_id, project_id, file_url, type, fUrl) {
            file_ext = file_name.split('.').pop().toUpperCase();
            if (type == 'activity') {
                var back_url = '?back=activity';
            } else if (type == 'files') {
                var back_url = '?back=files';
            } else {}
            if (file_ext == 'JPG' || file_ext == 'JPEG' || file_ext == 'PNG' || file_ext == 'GIF' || file_ext == 'BMP' || file_ext == 'SVG') {
                if (type == 'temp') {
                    var file_image = (fUrl == '') ? file_url : fUrl;
                } else {
                    var file_image = (fUrl == '') ? DH.baseURL + "/uploads/one2one_files/" + project_id + "/" + file_name : fUrl;
                }
                var file_url = file_url + "/" + file_id + back_url;
                var target = '';
            } else if (file_ext == 'AI' || file_ext == 'PSD' || file_ext == 'IN' || file_ext == 'CDR' || file_ext == 'TIFF' || file_ext == 'EPS') {
                var file_image = DH.getAssetImgUrl("projects/source-image.png");
                var file_url = file_url + "/" + file_id + back_url;
                var target = 'target=""';
            } else if (file_ext == 'PDF') {
                var file_image = DH.getAssetImgUrl("projects/pdf.png");
                var file_url = file_url + "/" + file_id + back_url;
                var target = 'target=""';
            } else if (file_ext == 'DOC' || file_ext == 'ODT' || file_ext == 'DOCX') {
                var file_image = DH.getAssetImgUrl("projects/doc.png");
                var file_url = file_url + "/" + file_id + back_url;
                var target = 'target=""';
            } else if (file_ext == 'XLS') {
                var file_image = DH.getAssetImgUrl("projects/xls.png");
                var file_url = DH.baseURL + "/uploads/one2one_files/" + project_id + "/" + file_name;
                var target = 'target=""';
            } else {
                var file_image = DH.getAssetImgUrl("projects/file.png");
                var file_url = file_url + "/" + file_id + back_url;
                var target = 'target=""';
            }
            return [file_image, file_url, target];
        },
        image_resize: function () {
            var myImage = new Image();
            myImage.onload = function () {
                var zoom = 0;
                var ratio = this.width / this.height;
                this.width = parseInt(this.width);
                this.height = parseInt(this.height);
                var height = img_height = this.height;
                var width = img_width = this.width;
                if (parseInt($(window).width()) <= 900) {
                    height = width = $(window).width();
                    $('.expand-fullImage').css('opacity', 0.5);
                    if (this.height < height) {
                        height = this.height;
                    }
                } else {
                    $('.annotations-overlay, .file-image').removeAttr('style');
                    var file_mid = $('.files-mid');
                    var div_width = parseInt(file_mid.get(0).clientWidth);
                    var div_height = parseInt(file_mid.get(0).clientHeight);
                    if (this.width > div_width && this.height > div_height) {
                        $('.icon-search-plus').removeClass('disable-css');
                        if (div_width > div_height) {
                            height = div_height;
                            width = Math.round(height * ratio);
                            if (div_width < width) {
                                height = Math.round(div_width / ratio);
                                width = div_width;
                            }
                        } else {
                            height = Math.round(div_width / ratio);
                            width = div_width;
                            if (div_height > height) {
                                height = div_height;
                                width = Math.round(height * ratio);
                            }
                        }
                    } else if (this.width > div_width) {
                        $('.icon-search-plus').removeClass('disable-css');
                        height = Math.round(div_width / ratio);
                        width = div_width;
                    } else if (this.height > div_height) {
                        $('.icon-search-plus').removeClass('disable-css');
                        height = div_height;
                        width = Math.round(height * ratio);
                    } else {
                        $('.icon-search-plus, .icon-search-minus').addClass('disable-css');
                        height = this.height;
                        width = this.width;
                    }
                    if (height < 400) {
                        height = 400;
                        width = Math.round(height * ratio);
                        $('#big_image').css('min-height', height);
                    }
                }
                $('.annotations-overlay, .file-image').height(height);
                $('.annotations-overlay, .file-image').width(width);
                $('.icon-search-plus').on('click', function () {
                    $(this).addClass('disable-css');
                    $('.icon-search-minus').removeClass('disable-css');
                    $('.annotations-overlay, .file-image').height(img_height);
                    $('.annotations-overlay, .file-image').width(img_width);
                });
                $('.icon-search-minus').on('click', function () {
                    $(this).addClass('disable-css');
                    $('.icon-search-plus').removeClass('disable-css');
                    $('.annotations-overlay, .file-image').height(height);
                    $('.annotations-overlay, .file-image').width(width);
                });
                $('.expand-fullImage').click(function () {
                    if (parseInt($(window).width()) <= 900) {
                        width = $(window).width();
                        height = Math.round(width / ratio);
                    }
                    $('.annotations-overlay, .file-image').height(height);
                    $('.annotations-overlay, .file-image').width(width);
                    $(this).css("opacity", 0);
                });
            }
            if ($('#big_image').length) {
                myImage.name = $('#big_image').attr('alt');
                myImage.src = $('#big_image').attr('src');
            }
        },
    },
    contest: {
        handover: {
            uploadFiles: function (action, filesLen, files, final_design, timestamp, mlid, attribute_id, progressElement, dscat_id, file_label_key, contest_id, callback, del_temp_file) {
                var ajx_df = new Promise(function (resolve, reject) {
                    if (typeof del_temp_file != 'undefined' && del_temp_file) {
                        var send_data = new FormData();
                        send_data.append('action', 'delete_handover_temp_files');
                        send_data.append('attribute_id', attribute_id);
                        send_data.append('uid', DH.userId);
                        $.ajax({
                            method: 'POST',
                            url: DH.baseURL + '/handover_ajax.php?tmstmprand=' + (new Date).getTime(),
                            data: send_data,
                            async: true,
                            dataType: 'json',
                            success: function (dataMsg) {
                                resolve(dataMsg);
                            },
                            error: function (XHR, textStatus, errorThrown) {
                                console.log(textStatus);
                                reject(false);
                            },
                            cache: false,
                            contentType: false,
                            processData: false
                        });
                    } else {
                        resolve(true);
                    }
                });
                ajx_df.then(function (succ_response) {
                    var xhr = [];
                    var all_request_complete = 1;
                    for (var i = 0; i < filesLen; i++) {
                        $(progressElement).append('<div id="outer_' + i + '" >' + files[i].name + '<span id="innerspan_' + i + '" class="progress-span">0%</span><div class="progress"><div id="inner_' + i + '" class="progress_outer progress-bar progress-bar-striped active" role="progressbar" style="width:0%" > </div></div>');
                        xhr[i] = (function (i) {
                            return new Promise(function (resolve, reject) {
                                var ajx = new XMLHttpRequest();
                                ajx.open('POST', DH.baseURL + '/handover_ajax.php');
                                ajx.upload.onprogress = function (e) {
                                    $(progressElement).find("#innerspan_" + i).html(parseInt((e.loaded / e.total) * 100) + '%');
                                    $(progressElement).find("#inner_" + i).css('width', parseInt((e.loaded / e.total) * 100) + '%');
                                };
                                ajx.onload = function (e) {
                                    $(progressElement).find("#outer_" + i).remove();
                                }
                                ajx.onreadystatechange = function () {
                                    if (ajx.readyState == 4 && ajx.status == 200) {
                                        all_request_complete--;
                                        try {
                                            var jsonResponse = JSON.parse(ajx.responseText);
                                            resolve(jsonResponse);
                                        } catch (e) {
                                            resolve({
                                                'status': 'error',
                                                'msg': 'Some error occured, Please try again later.'
                                            });
                                        }
                                    }
                                };
                                var form = new FormData();
                                form.append('Filedata', files[i]);
                                form.append('final_design', final_design);
                                form.append('timestamp', timestamp);
                                form.append('action', action);
                                form.append('attribute_id', attribute_id);
                                form.append('mlid', mlid);
                                form.append('uid', DH.userId);
                                form.append('dscat_id', dscat_id);
                                form.append('file_label_key', file_label_key);
                                form.append('contest_id', contest_id);
                                if ((i + 1) == filesLen) {
                                    form.append('update_activity', '1');
                                }
                                ajx.send(form);
                                all_request_complete++;
                            })
                        })(i);
                    }
                    Promise.all(xhr).then(function (response) {
                        callback(response);
                    });
                }, function (rej_resp) {
                    console.log(rej_resp);
                });
            },
            handover_uploaded_files: function (data) {
                htmlData = '';
                var img_formats = new Array('jpg', 'png', 'svg', 'jpeg', 'bmp', 'gif');
                if (typeof data != 'undefined' && Object.keys(data).length > 0) {
                    $.each(data, function (k, v) {
                        file_image = dh_utility_common.contest.handover.getFilesExtAndUrl(v.attribute_value, '', '');
                        var f_extt = dh_utility_common.getExtension(v.attribute_value).toLowerCase();
                        var extclass = "";
                        if (img_formats.indexOf(f_extt) >= 0) {
                            extclass = "no-extension";
                        }
                        htmlData += '<li>' + '<div class="attachement-listing">' + '<div class="file-box">' + '<div class="file-in">' + '<div class="' + extclass + '" style="background: url(' + file_image[0] + ') no-repeat scroll center center / cover;"> </div>' + '</div>' + '<div class="file-bottom">' + '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 attach-file">' + '<span title="' + v.attribute_value + '" class="cursor-help">' + v.attribute_value + '</span>' + '</div>' + '<div class="attach-file attach-file-right">' + '<div class="dl-attach-section">' + '<div class="delete" id="delete_uploaded_file' + v.id + '" data-id="' + v.id + '" >' + '<i class="icon icon-trash"></i>' + '</div>' + '</div></div></div></div></div>';
                        '</li>';
                    });
                }
                return htmlData;
            },
            getFilesExtAndUrl: function (file_name, type, fUrl) {
                file_ext = file_name.split('.').pop().toUpperCase();
                var file_image = '',
                    file_url = '',
                    target = '';
                if (file_ext == 'JPG' || file_ext == 'JPEG' || file_ext == 'PNG' || file_ext == 'GIF' || file_ext == 'BMP' || file_ext == 'SVG') {
                    if (type == '') {
                        file_image = DH.baseURL + "/uploads/orgfile/" + file_name;
                    } else {
                        file_image = fUrl;
                    }
                } else if (file_ext == 'AI' || file_ext == 'PSD' || file_ext == 'IN' || file_ext == 'CDR' || file_ext == 'TIFF' || file_ext == 'EPS') {
                    file_image = DH.getAssetImgUrl("projects/source-image.png");
                    file_url = fUrl;
                    target = 'target=""';
                } else if (file_ext == 'PDF') {
                    file_image = DH.getAssetImgUrl("projects/pdf.png");
                    file_url = fUrl;
                    target = 'target=""';
                } else if (file_ext == 'DOC' || file_ext == 'ODT' || file_ext == 'DOCX') {
                    file_image = DH.getAssetImgUrl("projects/doc.png");
                    file_url = fUrl;
                    target = 'target=""';
                } else if (file_ext == 'XLS') {
                    file_image = DH.getAssetImgUrl("projects/xls.png");
                    file_url = fUrl;
                    target = 'target=""';
                } else {
                    file_image = DH.getAssetImgUrl("projects/file.png");
                    file_url = fUrl;
                    target = 'target=""';
                }
                return [file_image, file_url, target];
            },
        },
        affiliate: {
            close: function () {
                $('.affiliate-launches-main').animate({
                    top: '-=700'
                }, 500, function () {
                    $('.affiliate-launches-main, #BGFixedTransparentLaunchaffiliate').hide();
                });
            }
        },
        entry: {
            like: function (element, callback) {
                if (DH.isLogged != 1) {
                    dh_utility_common.alert({
                        message: 'Please log in to like an entry.',
                        type: "error"
                    });
                    return false;
                }
                if (DH.userId == $(element).attr('data-designer-id')) {
                    dh_utility_common.alert({
                        message: 'You can not like your own entry.',
                        type: "error"
                    });
                    return false;
                }
                $.ajax({
                    url: DH.baseURL + '/dh_ajax.php?tmstmprand=' + (new Date).getTime(),
                    type: 'post',
                    data: 'action=contest-detail-ajax&action_type=likeEntry&designerId=' + $(element).attr('data-designer-id') + '&designId=' + $(element).attr('data-id') + '&designCode=' + $(element).attr('data-design-code') + '&contestId=' + $(element).attr('data-contest-id'),
                    success: function (dataMsg) {
                        callback(dataMsg);
                    }
                });
            },
            winner: function (all_winner, markup, refundable, selected_position, element, page, win_entry_data) {
                var Guranteed = ((refundable == 2) ? 1 : 0);
                var winners_list = all_winner.trim().split(",");
                var positions = '';
                if (!Guranteed) {
                    for (i = 0; i < selected_position - 1; i++) {
                        if (winners_list[i] == "" || winners_list[i] == null || winners_list[i] == "undefined") {
                            var positions_name = ((i == 0) ? "1st" : ((i == 1) ? "2nd" : "3rd"));
                            positions += positions_name + ",";
                        }
                    }
                    if (positions != '') {
                        positions = positions.substring(0, positions.length - 1);
                        dh_utility_common.alert({
                            message: 'Please select ' + positions + ' winners in order to make this an winner or make this contest guranteed',
                            type: 'error'
                        });
                        return void(0);
                    }
                }
                if ((selected_position == 1 || selected_position == 2 || selected_position == 3) && winners_list[selected_position - 1] != '' && winners_list[selected_position - 1] != undefined) {
                    dh_utility_common.alert({
                        message: 'You have already selected winner for this position.'
                    });
                    return void(0);
                }
                entry_detail = $(element).parents('.target_action_div');
                var entry_main_cont = entry_detail.parents('.entries-box');
                var send_data_winner = "action=contest-detail-ajax&action_type=selectWinner&contest_id=" + $(entry_detail).attr('data-contest-id') + "&designer_id=" + $(entry_detail).attr('data-designer-id') + "&design_id=" + $(entry_detail).attr('data-design-id') + "&design_code=" + $(entry_detail).attr('data-design-code') + "&client_id=" + $(entry_detail).attr('data-client-id') + "&position=" + selected_position + "&markup=" + markup;
                if (typeof page != 'undefined' && page.trim() == 'entry_detail') {
                    var awrd_pop_thumb_src = win_entry_data.entryThumbUrl;
                    var awrd_pop_e_code = '#' + win_entry_data.designCode;
                    var awrd_pop_e_dsg_name = win_entry_data.entryDesignerName;
                    var winner_prices = win_entry_data.winner_prices.price_detail;
                    var win_purchased = win_entry_data.winner_prices.winner_purchased;
                } else {
                    var entry_main_cont = $(element).parents('.entries-main-box');
                    var awrd_modal_cont_obj = $('#winner_confirm');
                    var awrd_pop_thumb_src = $('.entries-thumb span img', entry_main_cont).attr('src');
                    var awrd_pop_e_dsg_name = $('.entry_designer_name', entry_main_cont).html();
                    var awrd_pop_e_code = $('.color-code', entry_main_cont).html();
                    var winner_prices = dh_utility_templates.entryPage.winner_prices;
                    var win_purchased = dh_utility_templates.entryPage.winner_purchased;
                }
                $('#award_pop_entry_thumb', awrd_modal_cont_obj).attr('src', awrd_pop_thumb_src);
                $('#award_pop_entry_no', awrd_modal_cont_obj).html(awrd_pop_e_code);
                $('#award_pop_entry_dsg_name', awrd_modal_cont_obj).html(awrd_pop_e_dsg_name);
                if (typeof winner_prices != 'undefined') {
                    if (selected_position > 0) {
                        if (typeof win_purchased != 'undefined' && win_purchased > 0 && typeof winner_prices[(win_purchased + 1)] != 'undefined' && parseFloat(winner_prices[(win_purchased + 1)].minimum_value) > 0) {
                            $('#additional_winn_price', awrd_modal_cont_obj).html('$' + winner_prices[win_purchased + 1].minimum_value);
                            $('#award_pop_ad_win_cont', awrd_modal_cont_obj).show();
                        } else {
                            $('#award_pop_ad_win_cont', awrd_modal_cont_obj).hide();
                        }
                    } else {
                        $('#award_pop_ad_win_cont', awrd_modal_cont_obj).hide();
                    }
                } else {
                    $('#award_pop_ad_win_cont', awrd_modal_cont_obj).hide();
                }
                $('#winner_confirm').modal({
                    backdrop: 'static',
                    keyboard: false,
                    dt: send_data_winner
                });
                $('#winner_ok').off('click').on('click', function (e) {
                    {
                        $('#winner_confirm').modal('hide');
                        e.stopImmediatePropagation();
                        if ($(element).attr('data-process') == 'yes') {
                            return false;
                        }
                        $(element).attr('data-process', 'yes');
                        $(element).html('Processing....').css('pointer-events', 'none');
                        $('#entriesInn').html('').addClass('dh-loader-css-orange');
                        sendAjaxCall(send_data_winner, (function (dataMsg) {
                            dh_utility_common.alert({
                                message: dataMsg.message,
                                type: ((dataMsg.status == 'Error') ? 'error' : 'success')
                            });
                            if (dataMsg.status == 'Success') {
                                dh_utility_common.contest.entry.proceed_handover($(entry_detail).attr('data-contest-id'), $(entry_detail).attr('data-design-id'), dataMsg.proceed_handover, page);
                            }
                        }));
                    }
                });
            },
            proceed_handover: function (contest_id, entry_id, proceed_handover, page) {
                if (proceed_handover == "YES") {
                    window.location.assign(DH.baseURL + "/handover?contest_id=" + $(entry_detail).attr('data-contest-id') + "&e=" + $(entry_detail).attr('data-design-id'));
                } else {
                    window.location.reload();
                }
            },
        },
        Detail: {
            entry_ui_normal: function (element) {
                $(element).removeClass('active');
                $('.target_action_div > div').slideUp();
                $('.entry-mid.panel-body').removeClass('display_box');
                $('.entry-msgCss').removeClass('messageBox');
                $('.entries-thumb img').css('transform', 'translateY(0px)');
                $('.entry-mid.panel-body').css('transform', 'translateY(115%)');
                $('.entries-main-box').animate({
                    top: '0px'
                });
                $('.entries-main-box').removeAttr('style');
                $('.pagination-listings').animate({
                    marginTop: '0px'
                }, 400);
                $('.entry-msgCss').css({
                    'bottom': '0'
                });
            },
            entry_ui_conditional: function (element) {
                $('body').on('click', element, function (e) {
                    e.stopImmediatePropagation();
                    click_ele = $(this);
                    target = $(this).attr('href');
                    if ($(this).hasClass('report-box-show')) {
                        dh_utility_common.contest.Detail.entry_ui_normal(element);
                        $(this).addClass('active');
                        $('#reportbox').modal('show');
                    } else if ($(this).hasClass('active')) {
                        dh_utility_common.contest.Detail.entry_ui_normal(element);
                        $('.shadow-box').removeAttr('style');
                    } else {
                        dh_utility_common.contest.Detail.entry_ui_normal(element);
                        $(this).addClass('active');
                        $('.shadow-box').removeAttr('style');
                        if ($(click_ele).parents('.entries-main-box').length) {
                            var main_div_width = $('#entriesInn').outerWidth(true);
                            var entries_main_box = $('.entries-main-box').outerWidth(true);
                            var box_in_row = Math.round(main_div_width / entries_main_box);
                            $(click_ele).parents('.entry-mid.panel-body').addClass('display_box');
                            $(click_ele).parents('.entries-box ').find('.entry-msgCss').addClass('messageBox');
                            $(target).slideDown({
                                duration: 'slow',
                                step: function (anime, progr, remain) {
                                    $('.pagination-listings').css('margin-top', ($(this).parent().outerHeight()) + 'px');
                                    $(click_ele).closest('.entries-main-box').nextAll(':nth-of-type(' + box_in_row + 'n+' + (Math.round($(click_ele).closest('.entries-main-box').attr('box-no')) + 1) + ')').css('top', ($(this).parent().outerHeight()) + 'px');
                                },
                                complete: function () {
                                    $('.shadow-box').removeClass('increase-box');
                                    var entryboxHeightv = $(click_ele).parents('.entries-box');
                                    var divMainheight = entryboxHeightv.find('.target_action_div').innerHeight();
                                    var entryboxHeightvm = entryboxHeightv.innerHeight() + divMainheight;
                                    entryboxHeightv.find('.shadow-box').css('min-height', entryboxHeightvm);
                                }
                            });
                        } else {
                            $(target).slideDown({
                                complete: function () {
                                    if (target == '#select_entry_div' && $(target).attr('data-owlcarousel-active') != 'yes') {
                                        $(target).attr('data-owlcarousel-active', 'yes');
                                        var owl = $("#file_carousel_entry_detail");
                                        owl.owlCarousel({
                                            loop: false,
                                            nav: true,
                                            dots: false,
                                            margin: 10,
                                            navText: ["<i class='icon-angle-left'></i>", "<i class='icon-angle-right'></i>"],
                                            responsive: {
                                                0: {
                                                    items: 2
                                                },
                                                600: {
                                                    items: 3
                                                },
                                                1000: {
                                                    items: 3
                                                }
                                            },
                                            onTranslated: $(".owl-carousel").on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
                                                if (!event.namespace)
                                                    return;
                                                var carousel = event.relatedTarget,
                                                    element = event.target,
                                                    current = carousel.current();
                                                $('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
                                                $('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
                                                if ($(this).length > carousel.maximum()) {
                                                    $('.owl-nav').css('display', 'none');
                                                }
                                            })
                                        });
                                    }
                                }
                            });
                        }
                    }
                    return false;
                });
                $('body').on('click', function (e) {
                    if (!($(e.target).parents('.target_action_div').length)) {
                        dh_utility_common.contest.Detail.entry_ui_normal(element);
                        $('.entry-msgCss').css({
                            'bottom': '0'
                        });
                        $('.shadow-box').removeAttr('style').removeClass('increase-box');
                    }
                }).on('click', '.close-entry-detail', function () {
                    return false;
                });
            },
        },
        still_not_heard_notification: function (obj) {
            console.log('Fn Called');
            var contestid = $(obj).data('contest-id');
            var quesno = $(obj).data('ques-no');
            $.ajax({
                url: DH.baseURL + '/mainAjax2.php',
                type: 'post',
                data: 'action=print_not_heard_notification&contest_id=' + contestid + '&ques_no=' + quesno,
                dataType: 'json',
                success: function (dataMsg) {
                    console.log(dataMsg.status);
                    if (dataMsg.status == true) {
                        $(obj).css('display', 'none');
                        $('#havnt_hrd_span_' + quesno).css('display', 'inline-block');
                        setTimeout(function () {
                            $('#havnt_hrd_span_' + quesno).css('display', 'none');
                        }, 2000);
                    }
                }
            });
        }
    },
    personalDesignLikes: function (designID) {
        if (designID == 0) {
            dh_utility_common.alert({
                message: "Sorry, Please reload the page and try again",
                type: "error"
            });
            return;
        }
        var form_data = 'action=addLikes&&designID=' + designID;
        $('#loadere').show();
        $.ajax({
            url: DH.baseURL + '/personal_designs.php?tmstmprand=' + (new Date).getTime(),
            type: 'post',
            data: form_data,
            success: function (dataMsg) {
                data = JSON.parse(dataMsg);
                if (data.error == 0) {
                    $("#totalLikes").html(data.total_like);
                    dh_utility_common.alert({
                        message: "Thank you for liking this design!",
                        type: "success"
                    });
                } else {
                    dh_utility_common.alert({
                        message: data.message,
                        type: "error"
                    });
                }
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            dh_utility_common.alert({
                message: "Ajax request failed due to: Status: " + textStatus + ", Error: " + errorThrown,
                type: "error"
            });
        }).always(function () {
            $('#loadere').hide();
        });
    },
    getCaseStudyTestimonial: function (conestID) {
        if (conestID == 0) {
            dh_utility_common.alert({
                message: "Sorry, Please reload the apge and try again",
                type: "error"
            });
            return;
        }
        var form_data = 'action=CaseStudyTestimonial&&contestID=' + conestID;
        $('#loadere').show();
        var $myDiv = $("#headerFooterContantCaseStudy");
        $myDiv.is("html *");
        $myDiv.empty();
        $.ajax({
            url: DH.baseURL + '/mainAjax.php?tmstmprand=' + (new Date).getTime(),
            type: 'post',
            data: form_data,
            success: function (dataMsg) {
                data = dh_utility_templates.case_study_testimonial(dataMsg);
                $('#headerFooterContantCaseStudy').html(data);
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            dh_utility_common.alert({
                message: "Ajax request failed due to: Status: " + textStatus + ", Error: " + errorThrown,
                type: "error"
            });
        }).always(function () {
            $('#loadere').hide();
        });
    },
    activeTopMenu: function () {
        var pidToCheckHighlight = parseInt($("body").attr("data-node-id"));
        var pageToCheckHighlight = $("body").attr("data-page");
        if ($("body").hasClass("pagecategory-listing")) {
            $('.cat-top-link a').addClass("active");
        }
        if (pidToCheckHighlight == '743' || pidToCheckHighlight == '151' || pidToCheckHighlight == '744' || pageToCheckHighlight == 'award-winning-designs' || pidToCheckHighlight == '575' || pidToCheckHighlight == '777' || pidToCheckHighlight == '679' || pidToCheckHighlight == '104' || pidToCheckHighlight == '120' || pidToCheckHighlight == '756' || pidToCheckHighlight == '55' || pidToCheckHighlight == '745' || pidToCheckHighlight == '763' || pidToCheckHighlight == '799' || pidToCheckHighlight == '55' || pidToCheckHighlight == '743' || pidToCheckHighlight == '173' || pidToCheckHighlight == '516') {
            $("#MainCatList, #makeActiveHIW, #makeActiveContests, #makeActivePrice, #makeActiveAWD").removeClass("active");
            $(".makeActiveMP, .makeActiveDiscover, .makeActiveGSN").removeClass("active");
            if (pidToCheckHighlight == '743')
                $("#makeActivePrice a").addClass("active");
            if (pidToCheckHighlight == '151') {
                $("#makeActiveContests a").addClass("active");
                $(".makeActiveGSN").addClass("active");
                $('#browseContest').addClass('active');
            }
            if (pidToCheckHighlight == '744')
                $("#makeActiveHIW a").addClass("active");
            if (pidToCheckHighlight == '756') {
                $(".makeActiveDiscover").addClass("active");
                $("#makeActiveAWD a").addClass("active");
                $('#awardedDesign').addClass('active');
            }
            if (pidToCheckHighlight == '575' || pidToCheckHighlight == '777' || pidToCheckHighlight == '679' || pidToCheckHighlight == '104') {
                $(".makeActiveMP").addClass("active");
                if (pidToCheckHighlight == '575') {
                    $('#myProjContest').addClass('active');
                } else if (pidToCheckHighlight == '777') {
                    $('#myProjone2one').addClass('active');
                } else if (pidToCheckHighlight == '679') {
                    $('#top_hmenu_item_myDesigners').addClass('active');
                } else if (pidToCheckHighlight == '104') {
                    $('#top_hmenu_item_myClients').addClass('active');
                }
            } else if (pidToCheckHighlight == '120' || pidToCheckHighlight == '55' || pidToCheckHighlight == '745') {
                $(".makeActiveDiscover").addClass("active");
                if (pidToCheckHighlight == '120') {
                    $('#top_hmenu_item_designGallery').addClass('active');
                } else if (pidToCheckHighlight == '55') {
                    $('#subMenuDesigners').addClass('active');
                } else if (pidToCheckHighlight == '745') {
                    $('#subMenuCategory').addClass('active');
                }
            } else if (pidToCheckHighlight == '763' || pidToCheckHighlight == '799' || pidToCheckHighlight == '173' || pidToCheckHighlight == '516') {
                $(".makeActiveGSN").addClass("active");
                if (pidToCheckHighlight == '763') {
                    $('#top_hmenu_item_startProject').addClass('active');
                } else if (pidToCheckHighlight == '799') {
                    $('#top_hmenu_item_buyService').addClass('active');
                } else if (pidToCheckHighlight == '173') {
                    $('#createCusService').addClass('active');
                } else if (pidToCheckHighlight == '516') {
                    $('#top_hmenu_item_uploadPersonalDesign').addClass('active');
                }
            }
        }
    },
    roundToTwo: function (value) {
        return (Math.round(value * 100) / 100);
    },
    number_format: function (number, decimals, dec_point, thousands_sep) {
        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + (Math.round(n * k) / k).toFixed(prec);
            };
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    },
    trim: function (str, charlist) {
        var whitespace, l = 0,
            i = 0;
        str += '';
        if (!charlist) {
            whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
        } else {
            charlist += '';
            whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
        }
        l = str.length;
        for (i = 0; i < l; i++) {
            if (whitespace.indexOf(str.charAt(i)) === -1) {
                str = str.substring(i);
                break;
            }
        }
        l = str.length;
        for (i = l - 1; i >= 0; i--) {
            if (whitespace.indexOf(str.charAt(i)) === -1) {
                str = str.substring(0, i + 1);
                break;
            }
        }
        return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
    },
    getCDNTheme: function (url, min, max) {
        randNum = Math.floor(Math.random() * (max - min)) + min;
        return url.replace(/cdn-x-theme/, 'cdn-' + randNum + '-theme');
    },
    getCDNUpload: function (url, min, max) {
        randNum = Math.floor(Math.random() * (max - min)) + min;
        return url.replace(/cdn-x-uploads/, 'cdn-' + randNum + '-uploads');
    },
    showDropdown: function (ele) {
        $(".drop-menu > li").removeClass('active');
        $(ele).addClass('active');
        $('.dropdown-sub-menu, .drop-children').removeAttr('style');
        var mainDiv = $('.dropdown-sub-menu').innerHeight();
        var divHeight = $(ele).children(".drop-children").innerHeight();
        if (divHeight > mainDiv) {
            $('.dropdown-sub-menu, .drop-children').css({
                'min-height': divHeight + 'px'
            });
        } else {
            $('.dropdown-sub-menu, .drop-children').css({
                'min-height': mainDiv + 'px'
            });
        }
    },
    update_user_active_time: function () {
        $.ajax({
            type: "GET",
            url: DH.baseURL + '/dh_ajax.php',
            data: {
                action: 'common_process',
                activity: 'update_user_active_time',
                tmstmprand: (new Date).getTime()
            }
        });
    },
    get_designer_follow_status: function (type_id) {
        $.ajax({
            type: "POST",
            url: DH.baseURL + '/ajaxDesignerProfile.php?tmstmprand=' + (new Date).getTime(),
            data: {
                action: 'get_designer_follow_status',
                type_id: type_id
            },
            success: function (dataMsg) {
                if (dataMsg == '1') {
                    $('#popupFollow, #popupFollow1').removeClass('btn-white').html("<i class='icon-minus'></i>Following");
                }
            }
        });
    },
    user_popover: {
        xhrObj: null,
        set: function () {
            try {
                $('[data-toggle="user-popover"]').popover('destroy');
            } catch (err) {}
            $('[data-toggle="user-popover"]').popover({
                container: 'body',
                html: true,
                placement: 'auto',
                title: false,
                trigger: 'manual',
                template: '<div class="popover user-popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                content: function () {
                    return '<div class="bspopup-usr-short-info loading"><div class="loader-green-s">&nbsp;</div></div>';
                }
            }).on("mouseenter", function () {
                var _this = this;
                $(this).popover("show");
                $(".popover").on("mouseleave", function () {
                    $(_this).popover('hide');
                });
            }).on("mouseleave", function () {
                var _this = this;
                setTimeout(function () {
                    if (!$(".popover:hover").length) {
                        $(_this).popover("hide");
                    }
                }, 1);
            }).on('shown.bs.popover', function (a, b) {
                dh_utility_common.user_popover.getUserData($(this));
            });
        },
        getUserData: function (eleObj) {
            try {
                var xhr = dh_utility_common.user_popover.xhrObj;
                if (xhr) {
                    xhr.abort();
                }
            } catch (err) {}
            var userId = $(eleObj).attr('data-id');
            dh_utility_common.user_popover.xhrObj = $.ajax({
                url: DH.baseURL + '/dh_ajax.php',
                type: 'GET',
                data: {
                    action: 'common_process',
                    activity: 'get_user_short_info',
                    user_id: userId,
                    tmstmprand: (new Date).getTime()
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                $('.bspopup-usr-short-info').removeClass('loading').html('');
            }).done(function (data, textStatus) {
                try {
                    if (data.status == 'success') {
                        var hExtra = '';
                        if (data.d.expertise_user == '' && data.d.short_address == '') {
                            hExtra = '@' + data.d.name;
                        } else {
                            hExtra = data.d.expertise_user + ' &nbsp;<i class="icon-map-marker"></i>&nbsp;' + data.d.short_address;
                        }
                        var h = '<div class="popover-u-timeline">' +
                            '<div class="popover-u-bgtimeline" style="' + ((data.d.timeline_pic_url == '') ? 'background: #234C76;' : 'background-image: url(\'' + data.d.timeline_pic_url + '\');') + '">' +
                            '</div>' +
                            '</div>';
                        h += '<div class="popover-u-pdt">' +
                            '<div class="popover-u-picture"><img src="' + data.d.profile_pic_url + '" /> </div>'
                        h += '<div class="popover-u-posts">' +
                            '<span class="popover-u-name">' + data.d.display_name + '</span>' +
                            '<span class="popover-u-extra">' + hExtra + '</span>' +
                            '</div>';
                        if (data.d.IsDesigner == 1) {
                            h += '<div class="popupover-level-css">' +
                                '<ul class="popover-u-levels">' +
                                '<li><span class="popover-u-handler">Total Earning <br> <p class="popover-u-points">' + data.d.DesignerTotalEarning + '</p></span></li>' +
                                '<li><span class="popover-u-handler">Ranking <br> <p class="popover-u-points">' + data.d.DesignerRank + '</p></span></li>' +
                                '<li><span class="popover-u-handler">Total Points <br> <p class="popover-u-points">' + data.d.TotalPointsEarn + '</p></span></li>' +
                                '<li><span class="popover-u-handler">Contest Won <br> <p class="popover-u-points">' + data.d.DesignerContestTotalWin + '</p></span></li>' +
                                '</ul>' +
                                '</div>';
                        } else {
                            h += '<div class="popupover-level-css">' +
                                '<ul class="popover-u-levels">' +
                                '<li><span class="popover-u-handler">Open Contest <br> <p class="popover-u-points">' + data.d.OpenContest + '</p></span></li>' +
                                '<li><span class="popover-u-handler">Close Contest <br> <p class="popover-u-points">' + data.d.ClosedContest + '</p></span></li>' +
                                '<li><span class="popover-u-handler">Handover <br> <p class="popover-u-points">' + data.d.ContestDesignHandOver + '</p></span></li>' +
                                '<li><span class="popover-u-handler">Open Project <br> <p class="popover-u-points">' + data.d.OpenProjects + '</p></span></li>' +
                                '</ul>' +
                                '</div>';
                        }
                        h += '</div>';
                        if (data.d.self_profile == 0) {
                            h += '<div class="user-popup-bottom">' +
                                '<div class="user-bottom-follow">' +
                                '<div class="bottom-flollow-btn">' +
                                '<a href="javascript:;" class="post-status btn-follow ' + ((data.d.is_followed == 1) ? 'active' : '') + '" data-action="follow-user" data-area="user-popover" data-id="' + data.d.uid + '" data-val="' + data.d.is_followed + '" data-pre-area="' + $(eleObj).attr('data-area') + '">' + ((data.d.is_followed == 1) ? '<i class="icon icon-check-circle"></i> following' : '<i class="icon icon-plus"></i> follow') + '</a>' +
                                '</div>' +
                                '</div>' +
                                '</div>';
                        }
                        $('.bspopup-usr-short-info').removeClass('loading').html(h);
                    } else {
                        $('.bspopup-usr-short-info').removeClass('loading').html('');
                    }
                } catch (err) {
                    $('.bspopup-usr-short-info').removeClass('loading').html('');
                }
            });
        }
    },
    user: {
        follow: function (_c) {
            var userId = $(_c).attr('data-id');
            var followVal = parseInt($(_c).attr('data-val'));
            var followArea = $(_c).attr('data-area');
            var userIdRemove = '';
            var userIdAdd = '';
            if (followVal == 1) {
                userIdRemove = userId;
            } else {
                userIdAdd = userId;
            }
            if (followArea == 'dashboard-random-list') {
                $(_c).text('Following');
                $('#right-sidebar-whotofollow .loader-blue-s').css({
                    display: 'inline-block'
                });
            } else {
                $(_c).html('&nbsp;&nbsp;&nbsp;&nbsp;').addClass('loader-g-input-center');
            }
            $.ajax({
                url: DH.baseURL + '/dh_ajax.php?tmstmprand=' + (new Date).getTime(),
                type: 'post',
                data: {
                    action: 'process_profile',
                    action_type: 'save_follow_user',
                    user_ids: userIdAdd,
                    userid_tobe_remove: userIdRemove
                }
            }).done(function (data, textStatus) {
                var isError = 1;
                var errorMsg = 'Saving data failed, please try again';
                try {
                    if (data.t == 0) {
                        isError = 0;
                        errorMsg = data.msg;
                    }
                    if (data.t == 1) {
                        isError = 1;
                        errorMsg = data.msg;
                    }
                } catch (err) {}
                if (isError == 1) {
                    dh_utility_common.alert({
                        message: errorMsg,
                        type: "error"
                    });
                    if (followArea == 'dashboard-random-list') {
                        $(_c).html('<i class="icon-user"></i> Follow');
                    } else {
                        if (followVal == 1) {
                            $(_c).html('<i class="icon icon-check-circle"></i> following');
                        } else {
                            $(_c).html('<i class="icon icon-plus"></i> follow');
                        }
                    }
                } else {
                    if (followArea == 'dashboard-random-list') {
                        $(_c).attr('data-val', 1).closest('li').fadeOut('slow', function () {
                            $(this).remove();
                            dh_signed_usr_dashboard.getUsersWhoToFollow(1, 1, 1);
                        });
                    } else {
                        if (followVal == 1) {
                            $(_c).attr('data-val', 0).html('<i class="icon icon-plus"></i> follow').removeClass('active');
                        } else {
                            $(_c).attr('data-val', 1).html('<i class="icon icon-check-circle"></i> following').addClass('active');
                            if ($(_c).attr('data-pre-area') == 'dsb-whoto-follow') {
                                $('#who_to_follow li[data-id="' + userId + '"]').fadeOut('slow', function () {
                                    $('[data-toggle="user-popover"]').popover('hide');
                                    $(this).remove();
                                    dh_signed_usr_dashboard.getUsersWhoToFollow(1, 1, 1);
                                });
                            }
                        }
                    }
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                if (followArea == 'dashboard-random-list') {
                    $(_c).html('<i class="icon-user"></i> Follow');
                } else {
                    if (followVal == 1) {
                        $(_c).html('<i class="icon icon-check-circle"></i> following');
                    } else {
                        $(_c).html('<i class="icon icon-plus"></i> follow');
                    }
                }
                dh_utility_common.alert({
                    message: "Ajax request failed due to: Status: " + textStatus + ", Error: " + errorThrown,
                    type: "error"
                });
            }).always(function () {
                if (followArea == 'dashboard-random-list') {
                    $('#right-sidebar-whotofollow .loader-blue-s').hide();
                } else {
                    $(_c).removeClass('loader-g-input-center');
                }
            });
        },
        profile_timeline_update: function (objImgElement) {
            if ($('#profile-timeline-img-edit-input-sf').length <= 0) {
                $('body').append('<input type="file" name="profile-timeline-img-edit-input-sf" id="profile-timeline-img-edit-input-sf" value="" style="display:none; width:0px; height:0px;" />');
                $('#profile-timeline-img-edit-input-sf').on('change', function () {
                    var f = $(this).val();
                    f = f.toLowerCase();
                    var ext = f.substr((f.lastIndexOf('.') + 1));
                    if ($.trim(f) != '') {
                        if (this.files[0].size > 2097152) {
                            dh_utility_common.alert({
                                message: "File too large, should be less or equal 2 MB !",
                                type: "error"
                            });
                            return false;
                        }
                        if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'gif' || ext == 'bmp') {
                            var formData = new FormData();
                            formData.append('file', $('#profile-timeline-img-edit-input-sf')[0].files[0]);
                            formData.append('action', 'process_profile');
                            formData.append('action_type', 'upload_timeline_img');
                            $('#loadere').show();
                            var loading_url = DH.getAssetImgUrl('dh_loader.gif');
                            objImgElement.css("background", "url(" + loading_url + ") no-repeat scroll center center / cover ");
                            $.ajax({
                                url: DH.baseURL + '/dh_ajax.php?tmstmprand=' + (new Date).getTime(),
                                type: 'POST',
                                data: formData,
                                enctype: 'multipart/form-data',
                                processData: false,
                                contentType: false
                            }).done(function (data, textStatus) {
                                var is_error = 1,
                                    errMsg = 'Invalid request!';
                                try {
                                    if (data.t == 0) {
                                        is_error = 0;
                                        objImgElement.css("background", "url(" + data.img_url + ") no-repeat scroll center center / cover ");
                                    }
                                    if (data.t == 1) {
                                        errMsg = data.msg;
                                    }
                                } catch (err) {}
                                if (is_error == 1) {
                                    dh_utility_common.alert({
                                        message: errMsg,
                                        type: "error"
                                    });
                                }
                            }).fail(function (jqXHR, textStatus, errorThrown) {
                                dh_utility_common.alert({
                                    message: "Ajax request failed due to: Status: " + textStatus + ", Error: " + errorThrown,
                                    type: "error"
                                });
                            }).always(function () {
                                $('#loadere').hide();
                            });
                        } else {
                            dh_utility_common.alert({
                                message: "Please choose or select JPG, PNG, GIF or BMP file!",
                                type: "error"
                            });
                            return false;
                        }
                    }
                });
            }
            $('#profile-timeline-img-edit-input-sf').val('');
            $('#profile-timeline-img-edit-input-sf').trigger('click');
        },
        profile_avatar_update: function (objImgElement) {
            if ($('#profile-avatar-img-edit-input-sf').length <= 0) {
                $('body').append('<input type="file" name="profile-avatar-img-edit-input-sf" id="profile-avatar-img-edit-input-sf" value="" style="display:none; width:0px; height:0px;" />');
                $('#profile-avatar-img-edit-input-sf').on('change', function () {
                    var f = $(this).val();
                    f = f.toLowerCase();
                    var ext = f.substr((f.lastIndexOf('.') + 1));
                    if ($.trim(f) != '') {
                        if (this.files[0].size > 2097152) {
                            dh_utility_common.alert({
                                message: "File too large, should be less or equal 2 MB !",
                                type: "error"
                            });
                            return false;
                        }
                        if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' || ext == 'gif') {
                            var formData = new FormData();
                            formData.append('file', $('#profile-avatar-img-edit-input-sf')[0].files[0]);
                            formData.append('action', 'process_profile');
                            formData.append('action_type', 'upload_profile_img');
                            $('#loadere').show();
                            $.ajax({
                                url: DH.baseURL + '/dh_ajax.php?tmstmprand=' + (new Date).getTime(),
                                type: 'POST',
                                data: formData,
                                enctype: 'multipart/form-data',
                                processData: false,
                                contentType: false
                            }).done(function (data, textStatus) {
                                var is_error = 1,
                                    errMsg = 'Invalid request!';
                                try {
                                    if (data.t == 0) {
                                        is_error = 0;
                                        $('.myaccDropdown > a.cog-css-new').find('img').attr('src', data.header_img_url);
                                        objImgElement.attr('src', data.img_url).attr('data-img', '');
                                        $('.dh-uploadPhoto a.remove-itemPic').closest('li').show();
                                    }
                                    if (data.t == 1) {
                                        errMsg = data.msg;
                                    }
                                } catch (err) {}
                                if (is_error == 1) {
                                    dh_utility_common.alert({
                                        message: errMsg,
                                        type: "error"
                                    });
                                }
                            }).fail(function (jqXHR, textStatus, errorThrown) {
                                dh_utility_common.alert({
                                    message: "Ajax request failed due to: Status: " + textStatus + ", Error: " + errorThrown,
                                    type: "error"
                                });
                            }).always(function () {
                                $('#loadere').hide();
                            });
                        } else {
                            dh_utility_common.alert({
                                message: "Please choose or select JPG, PNG or GIF file!",
                                type: "error"
                            });
                            return false;
                        }
                    }
                });
            }
            $('#profile-avatar-img-edit-input-sf').val('');
            $('#profile-avatar-img-edit-input-sf').trigger('click');
        },
        profile_avatar_remove: function (objImgElement) {
            $('#loadere').show();
            $.ajax({
                url: DH.baseURL + '/dh_ajax.php?tmstmprand=' + (new Date).getTime(),
                type: 'POST',
                data: {
                    action: 'process_profile',
                    action_type: 'del_profile_img'
                }
            }).done(function (data, textStatus) {
                var is_error = 1,
                    errMsg = 'Invalid request!';
                try {
                    if (data.t == 0) {
                        is_error = 0;
                        $('.myaccDropdown > a.cog-css-new').find('img').attr('src', data.header_img_url);
                        objImgElement.attr('src', data.img_url).attr('data-img', 'yes');
                        $('.dh-uploadPhoto a.remove-itemPic').closest('li').hide();
                    }
                    if (data.t == 1) {
                        errMsg = data.msg;
                    }
                } catch (err) {}
                if (is_error == 1) {
                    dh_utility_common.alert({
                        message: errMsg,
                        type: "error"
                    });
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                dh_utility_common.alert({
                    message: "Ajax request failed due to: Status: " + textStatus + ", Error: " + errorThrown,
                    type: "error"
                });
            }).always(function () {
                $('#loadere').hide();
            });
        }
    },
    changeBg: function () {
        $(".gradient-div").on({
            mouseenter: function () {
                $(this).parents('.list-view').css({
                    'transform': 'scale(1.05)',
                    '-webkit-transform': 'scale(1.05)'
                });
            },
            mouseleave: function () {
                $(this).parents('.list-view').css({
                    'transform': 'none',
                    '-webkit-transform': 'none'
                });
            },
            mousemove: function (event) {
                var w = $(this).width();
                pct = (360 * (+event.pageX) / w).toFixed(2);
                bg = "linear-gradient(" + pct + "deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 80%)";
                $(this).css({
                    "background": '-webkit-' + bg,
                    "background": '-moz-' + bg,
                    "background": '-o-' + bg,
                    "background": '-ms-' + bg,
                    "background": bg
                });
            }
        });
    },
    arrowAnimated: function (getHref) {
        var myInterval = '';
        var type = 1;
        myInterval: setInterval(function () {
            $('.worksArrow .common-new:first-child i').css({
                'opacity': 1
            });
            $(getHref).each(function (i) {
                $(this).delay((i++) * 500).fadeTo(100, type);
            });
            type = (type + 1) % 2;
        }, 1500);
        return myInterval;
    },
    getRandomColor: function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },
    console_log: function (msg) {},
    videoPlayer: function () {
        var getWinHeight = $(window).height();
        $('#video_overlay').css('height', getWinHeight);
    },
    start_video: function (src) {
        $('#how_it_works_video').attr('src', src);
    },
    afterSignupAction: function (frmObj, data, callbackFunc, params) {
        var dataNextAction = frmObj.attr('data-next-action');
        switch (dataNextAction) {
            case 'contest_save_draft':
            case 'contest_save_next_form':
                dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                launchContestJsonFuncObj.launch_contest.save_step_three(dataNextAction);
                break;
            case 'save3':
                dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                show_addons_next_form('onlySave');
                break;
            case 'fonts':
                dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                launchContestJsonFuncObj.launch_contest.save_visual_brief('fonts', 'continue', 'brief', 'yes', '');
                break;
            case 'colors':
                dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                launchContestJsonFuncObj.launch_contest.save_visual_brief('colors', 'continue', 'brief', 'yes', '');
                break;
            case 'styles':
                dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                launchContestJsonFuncObj.launch_contest.save_visual_brief('styles', 'continue', 'brief', 'yes', '');
                break;
            case 'contest_vbs_font_save':
                dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                launchContestJsonFuncObj.launch_contest.save_visual_brief('fonts', 'continue', 'brief', 'yes', '');
                break;
            case 'project_invitation':
                window.location.assign(DH.baseURL + "/projects/invitation");
                break;
            case 'project_invitation_login':
                var data_project_type = frmObj.attr('data-project-type');
                var data_project_send_data = frmObj.attr('data-project-send-data');
                save_project_ajax(data_project_send_data, data_project_type);
                break;
            case 'callback':
                if (typeof callbackFunc === 'function') {
                    callbackFunc(data.user_data);
                }
                break;
            default:
                dh_utility_common.popupBox._closeWrapper(frmObj.closest('.model-boxes'));
                if (typeof params.show_loader_after_success != "undefined" && params.show_loader_after_success == true) {
                    if (typeof loader_timer == "undefined") {
                        loader_timer = 0;
                    }
                    loader_timer = setInterval(function () {
                        if ($('#loadere').css("display") != "none") {
                            clearInterval(loader_timer);
                        }
                        $('#loadere').show();
                    }, 100);
                }
                location.reload();
                break;
        }
    },
    getExtension: function (file_name) {
        if (file_name != '') {
            return file_name.split('.').pop();
        }
        return false;
    },
    isUrlValid: function (url, type, params) {
        var check_domain = new Array();
        var strict_domain = 0;
        if (typeof params != "undefined") {
            var strict_domain = (typeof params.strict_domain != "undefined") ? parseInt(params.strict_domain) : 0;
            if (isNaN(strict_domain)) {
                strict_domain = 0;
            }
            if (strict_domain == 1) {
                if (typeof params.check_domain != "undefined") {
                    check_domain = params.check_domain.split(',');
                }
            }
        }
        switch (type) {
            case 'site_url': {
                var res = url.match(/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/ig);
                if (res == null)
                    return false;
                else
                    return true;
                break;
            }
            case 'web': {
                var pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
                return pattern.test(url.toLowerCase());
                break;
            }
            case 'facebook': {
                ;
                if (strict_domain == 1 && check_domain.length > 0) {
                    var pattern = new RegExp("^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?(facebook|fb)+\.(" + (check_domain.join("|")) + ")\/.*");
                } else {
                    var pattern = /^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?(facebook|fb)+\.(([a-z]{1,6}\.[a-z]{1,6})|[a-z]{2,})\/.*/;
                }
                return pattern.test(url.toLowerCase());
                break;
            }
            case 'instagram': {
                ;
                if (strict_domain == 1 && check_domain.length > 0) {
                    var pattern = new RegExp("^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?instagram+\.(" + (check_domain.join("|")) + ")\/.*");
                } else {
                    var pattern = /^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?instagram+\.(([a-z]{1,6}\.[a-z]{1,6})|[a-z]{2,})\/.*/;
                }
                return pattern.test(url.toLowerCase());
                break;
            }
            case 'twitter': {
                ;
                if (strict_domain == 1 && check_domain.length > 0) {
                    var pattern = new RegExp("^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?twitter+\.(" + (check_domain.join("|")) + ")\/.*");
                } else {
                    var pattern = /^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?twitter+\.(([a-z]{1,6}\.[a-z]{1,6})|[a-z]{2,})\/.*/;
                }
                return pattern.test(url.toLowerCase());
                break;
            }
            case 'pinterest': {
                ;
                if (strict_domain == 1 && check_domain.length > 0) {
                    var pattern = new RegExp("^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?pinterest+\.(" + (check_domain.join("|")) + ")\/.*");
                } else {
                    var pattern = /^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?pinterest+\.(([a-z]{1,6}\.[a-z]{1,6})|[a-z]{2,})\/.*/;
                }
                return pattern.test(url.toLowerCase());
                break;
            }
            case 'dribbble': {
                ;
                if (strict_domain == 1 && check_domain.length > 0) {
                    var pattern = new RegExp("^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?dribbble+\.(" + (check_domain.join("|")) + ")\/.*");
                } else {
                    var pattern = /^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?dribbble+\.(([a-z]{1,6}\.[a-z]{1,6})|[a-z]{2,})\/.*/;
                }
                return pattern.test(url.toLowerCase());
                break;
            }
            case 'behance': {
                ;
                if (strict_domain == 1 && check_domain.length > 0) {
                    var pattern = new RegExp("^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?behance+\.(" + (check_domain.join("|")) + ")\/.*");
                } else {
                    var pattern = /^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?behance+\.(([a-z]{1,6}\.[a-z]{1,6})|[a-z]{2,})\/.*/;
                }
                return pattern.test(url.toLowerCase());
                break;
            }
            case 'linkedin': {
                ;
                if (strict_domain == 1 && check_domain.length > 0) {
                    var pattern = new RegExp("^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?linkedin+\.(" + (check_domain.join("|")) + ")\/.*");
                } else {
                    var pattern = /^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?linkedin+\.(([a-z]{1,6}\.[a-z]{1,6})|[a-z]{2,})\/.*/;
                }
                return pattern.test(url.toLowerCase());
                break;
            }
            case 'google': {
                ;
                if (strict_domain == 1 && check_domain.length > 0) {
                    var pattern = new RegExp("^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?google+\.(" + (check_domain.join("|")) + ")\/.*");
                } else {
                    var pattern = /^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?google+\.(([a-z]{1,6}\.[a-z]{1,6})|[a-z]{2,})\/.*/;
                }
                return pattern.test(url.toLowerCase());
                break;
            }
            case 'vimeo': {
                ;
                if (strict_domain == 1 && check_domain.length > 0) {
                    var pattern = new RegExp("^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?vimeo+\.(" + (check_domain.join("|")) + ")\/.*");
                } else {
                    var pattern = /^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?vimeo+\.(([a-z]{1,6}\.[a-z]{1,6})|[a-z]{2,})\/.*/;
                }
                return pattern.test(url.toLowerCase());
                break;
            }
            case 'skillshare': {
                ;
                if (strict_domain == 1 && check_domain.length > 0) {
                    var pattern = new RegExp("^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?skillshare+\.(" + (check_domain.join("|")) + ")\/.*");
                } else {
                    var pattern = /^(?:(?:http|https):\/\/)?(?:www([0-9]*)\.)?skillshare+\.(([a-z]{1,6}\.[a-z]{1,6})|[a-z]{2,})\/.*/;
                }
                return pattern.test(url.toLowerCase());
                break;
            }
            default: {
                return false;
            }
        }
    },
    getCurrentUrlParams: function () {
        var url = window.location.href;
        var vars = [];
        if (url.length > 0 && url.indexOf('?') > -1) {
            hashes = url.split("?")[1];
            if (typeof hashes != 'undefined' && hashes.length > 0) {
                if (hashes.indexOf('&') > -1) {
                    var hash = hashes.split('&');
                    for (var i = 0; i < hash.length; i++) {
                        params = hash[i].split("=");
                        vars[params[0]] = params[1];
                    }
                } else {
                    params = hashes.split("=");
                    vars[params[0]] = params[1];
                }
            }
        }
        return vars;
    },
    nl2br: function (str, is_xhtml) {
        var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br/>' : '<br>';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
    },
    formatAMPM: function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    },
    isPrice: function (evt, element) {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if ((charCode != 45 || $(element).val().indexOf('-') != -1) && (charCode != 46 || $(element).val().indexOf('.') != -1) && (charCode < 48 || charCode > 57))
            return false;
        return true;
    },
    parse_url: function (url) {
        var a = document.createElement('a');
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            params: (function () {
                var ret = {},
                    seg = a.search.replace(/^\?/, '').split('&'),
                    len = seg.length,
                    i = 0,
                    s;
                for (; i < len; i++) {
                    if (!seg[i]) {
                        continue;
                    }
                    s = seg[i].split('=');
                    ret[s[0]] = s[1];
                }
                return ret;
            })(),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            hash: a.hash.replace('#', ''),
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: a.pathname.replace(/^\//, '').split('/')
        };
    },
    cart_count_refresh: function () {
        $.ajax({
            url: DH.baseURL + '/dh_ajax.php',
            type: 'get',
            data: {
                action: 'print_product',
                action_type: 'get_cart_items',
                get_type: 'only_count',
                tmstmprand: (new Date).getTime()
            }
        }).done(function (data, textStatus) {
            if (data.cart_item > 0) {
                $('#pp-head-cart-items-count').text(data.cart_item).show();
            } else {
                $('#pp-head-cart-items-count').text(0).show();
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {}).always(function () {
            $('#loadere').hide();
        });
    },
    getMiliSecondsCurTimeZone: function (dt_time) {
        if (dt_time != '' && dt_time != '0000-00-00 00:00:00') {
            var dt_parts = dt_time.split(" ");
            var milisec = new Date(dt_parts[0] + 'T' + dt_parts[1] + "+05:30").getTime();
            return milisec;
        }
        return 0;
    }
};
$(document).ready(function () {
    dh_utility_common.activeTopMenu();
    dh_utility_common.videoPlayer();
    $('.video_containerBlk').click(function () {
        if ($(this).length == 1) {
            var getvideoOverlayHeight = $('#video_overlay').height();
            $('#help-btn, .top-arrow3').hide();
            $('#video_overlay').slideDown(function () {
                $('.videoWrapper').show();
                $('#player').css('height', getvideoOverlayHeight - 50);
                $('#player').attr('src', 'https://www.youtube.com/embed/2-abeznXL-E?rel=0&amp;wmode=transparent&amp;enablejsapi=1&amp;autoplay=1');
            });
        }
    });
    $(function () {
        $('#HowItWorks').click(function () {
            if ($('#HowItWorks').hasClass('in')) {
                dh_utility_common.start_video('');
            }
        });
    });
    $('.closeBtn').click(function () {
        $('#video_overlay').slideUp(function () {
            $('.videoWrapper').hide();
            $('#player').attr('src', '');
        });
    });
    $('#video_container2').click(function () {
        var getvideoOverlayHeight = $('#video_overlay').height();
        $('#video_overlay').slideDown(function () {
            $('.videoWrapper').show();
            $('#player').css('height', getvideoOverlayHeight - 50);
            $('#player').attr('src', 'https://www.youtube.com/embed/2-abeznXL-E?rel=0&amp;wmode=transparent&amp;enablejsapi=1&amp;autoplay=1');
        });
    });
    $('body').addClass('dhucjs_loaded');
    $('body').on('shown.bs.modal', function (event) {
        $('body').addClass("modal-open");
    });
    $('body').on('hidden.bs.modal', function () {
        if ($('.modal').hasClass('in')) {
            $('body').addClass("modal-open");
        } else {
            $('body').removeClass("modal-open");
        }
    });
    jQuery.validator.addMethod("pattern", function (value, element, param) {
        if (this.optional(element)) {
            return true;
        }
        if (typeof param === "string") {
            param = new RegExp("^(?:" + param + ")$");
        }
        return param.test(value);
    }, "Invalid format.");
    dh_utility_common.init();
    if ($('#header-offercode-countdown').length > 0) {
        $("#header-offercode-countdown").each(function () {
            var timeLeftOfferCode = new Date().getTime() + Number(parseInt($(this).attr('data-time-left')) * 1000);
            $(this).countdown(timeLeftOfferCode).on('update.countdown', function (e) {
                var format = '%H:%M:%S';
                if (e.offset.days > 0) {
                    format = '%-d day%!d ' + format;
                }
                if (e.offset.weeks > 0) {
                    format = '%-w week%!w ' + format;
                }
                $(this).html(e.strftime(format));
            }).on('finish.countdown', function (e) {
                $(this).html('Expired!').parent().addClass('disabled');
            });
        });
    }
    var timeLeftOfferCode = new Date().getTime() + Number(parseInt($('#header-offercode-countdown-applied').attr('data-time-left')) * 1000);
    $('#header-offercode-countdown-applied').countdown(timeLeftOfferCode).on('update.countdown', function (e) {
        var format = '%H:%M:%S';
        if (e.offset.days > 0) {
            format = '%-d day%!d ' + format;
        }
        if (e.offset.weeks > 0) {
            format = '%-w week%!w ' + format;
        }
        $(this).html(e.strftime(format));
    }).on('finish.countdown', function (e) {
        $(this).html('Expired!').parent().addClass('disabled');
    });
    $(".drop-menu > li").on({
        mouseenter: function () {
            dh_utility_common.showDropdown($(this));
        }
    });
    $('.cat-top-link').hover(function () {
        var ele = $(".drop-menu .active");
        dh_utility_common.showDropdown(ele);
    });
    $('body').on('click', 'a#btnExtendHndOverClient', function (e) {
        $('#loadere, #loadere_new1, #loadere_new2').show();
        var elBtn = $(this);
        $.ajax({
            url: DH.baseURL + '/dh_ajax.php?tmstmprand=' + (new Date).getTime(),
            type: 'post',
            data: {
                action: 'contest_details',
                action_type: 'extend_handover',
                contest_id: $(elBtn).attr('data-id'),
                design_id: $(elBtn).attr('data-ds-id')
            }
        }).done(function (data, textStatus) {
            var errVal = 1,
                errMsg = 'Invalid request or you have not permission to extend handover date!';
            try {
                if (data.s == 1) {
                    errVal = 0;
                    alert(data.msg);
                    window.location.reload();
                    return;
                }
                if (data.s == 0) {
                    errMsg = data.msg;
                }
            } catch (err) {}
            if (errVal == 1) {
                $('#loadere, #loadere_new1, #loadere_new2').hide();
                alert(errMsg);
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            $('#loadere, #loadere_new1, #loadere_new2').hide();
            alert("Ajax request failed due to: Status: " + textStatus + ", Error: " + errorThrown);
        }).always(function () {});
    });
    try {
        $('[data-toggle="tooltip"]').tooltip();
        $("#myTooltip").tooltip('destroy');
    } catch (err) {
        console.log("Error: Tooltip is not working...");
    }
    if (parseInt(DH.isLogged) > 0) {
        if (typeof DH.isExecUserActivity !== 'undefined' && parseInt(DH.isExecUserActivity) == 1) {
            var default_interval = 120000;
            if (parseInt(DH.userActivityExecInterval) > 0) {
                default_interval = parseInt(DH.userActivityExecInterval) * 1000;
            }
            setInterval(function () {
                dh_utility_common.update_user_active_time()
            }, default_interval);
        }
    }
    $('body').on('click', '[data-action="follow-user"]', function (e) {
        e.preventDefault();
        e.stopPropagation();
        dh_utility_common.user.follow($(this));
    });
    dh_utility_common.user_popover.set();
    $(document).on('show.bs.modal', '.modal', function (event) {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function () {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    });
    if (typeof ($("img").lazyload) === "function") {
        $('img.g-dh-lazy').lazyload({
            effect: 'fadeIn',
            skip_invisible: false
        });
    }
    $('.no-opacity').css("opacity", 1);
    $('.auto-width').css("width", "auto");
    $('.auto-height').css("height", "auto");
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scroll-bottom-div').addClass('active');
    }
});
setTimeout(function () {
    $('.scroll-bottom-div').remove();
}, 25000);
$('.scroll-bottom-div i.icon-closebtn').click(function () {
    $('.scroll-bottom-div').remove();
});
if ($('#pp-head-cart-items-count').length > 0) {
    $.ajax({
        url: DH.baseURL + '/dh_ajax.php',
        type: 'get',
        data: {
            action: 'print_product',
            action_type: 'get_cart_items',
            get_type: 'only_count',
            tmstmprand: (new Date).getTime()
        }
    }).done(function (data, textStatus) {
        if (data.cart_item > 0) {
            $('#pp-head-cart-items-count').text(data.cart_item).show();
        } else {
            $('#pp-head-cart-items-count').text(0).show();
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {}).always(function () {
        $('#loadere').hide();
    });
}
(function ($) {
    $.fn.textValidator = function (params) {
        var _defaults = {
            error_callback: ''
        };
        this.settings = $.extend({}, _defaults, params);
        this.validation_error_types = new Array();
        this.validation_error_msg = new Array();
        this.actCheckMsg = {
            at: 'Terms of Service reminder: Providing email, Skype, or phone number is only allowed if it is needed as part of the service. Otherwise, all communication must go through Designhill.',
            connect: 'Terms of Service reminder: Providing email, Skype, or phone number is only allowed if it is needed as part of the service. Otherwise, all communication must go through Designhill.',
            ratings: 'Reminder: Asking for a particular rating is against our Terms of Service and may result in your account being restricted.',
            payment: 'Reminder: Never accept or ask for direct payments. Doing so may get your account restricted.',
            customOffer: 'Reminder: Never accept or ask for direct payments. Doing so may get your account restricted.'
        };
        this.actCheckTypes = {
            at: {
                regEx: /@|\[at\]|\(at\)|\{at\}|\-at\-|\+at\+|\[dot\]|\(dot\)|\{dot\}|\-dot\-|\+dot\+/
            },
            connect: {
                regEx: /email|skype.me|skype|messanger|contact.me.at|send.to.my/i
            },
            payment: {
                regEx: /paypal|alertpay|money|pay|dollar|\$|cost|order|gig/i
            },
            ratings: {
                regEx: /(4|5|five|full)(-*|\s*)s-*t-*a-*r|(good|positive)\s*(rating|review)/i
            }
        };
        var _self = this;
        this.validate = function (curobj) {
            var _self = this;
            curobj.data('validation-errors', _self.validation_error_types);
            _self.validation_error_types = new Array();
            _self.validation_error_msg = new Array();
            var validtext = true;
            var obj = curobj;
            if (obj.val().trim() != '') {
                var last_error_type = null;
                var obj_val = obj.val();
                var err_flag = true;
                $.each(_self.actCheckTypes, function (i, o) {
                    var is_not_valid = o.regEx.test(obj_val);
                    if (is_not_valid) {
                        _self.validation_error_types.push(i);
                        _self.validation_error_msg.push(_self.actCheckMsg[i]);
                        if (typeof _self.settings.error_callback === "function") {
                            _self.settings.error_callback.apply(obj, _self.validation_error_msg);
                        } else {
                            _self.showError(obj);
                        }
                    }
                });
                if (_self.validation_error_types.length <= 0) {
                    _self.showError(obj);
                }
            } else {
                if ($.isFunction(_self.settings.error_callback)) {
                    _self.settings.error_callback.apply(obj);
                } else {
                    _self.showError(obj);
                }
            }
            return _self;
        }, this.init = function () {
            var _self = this;
            this.each(function (index, elem) {
                $(this).data('init', 'Y');
                $(elem).on('input', function (e) {
                    _self.validate($(elem));
                });
            });
            return _self;
        }
        this.showError = function (cur_obj) {
            var b = this.validation_error_types;
            var msg = this.validation_error_msg;
            cur_obj.data('error-types', b.join(','));
            if (_self.validation_error_types.length) {
                if (this.settings.error_disp_mode == 'inline') {
                    dh_utility_common.alert({
                        message: msg[0],
                        type: "error"
                    });
                } else {
                    if (cur_obj.parent().find('.msg_inp_sensitive_txt_error').length) {
                        cur_obj.parent().find('.msg_inp_sensitive_txt_error').html(msg[0]).show();
                    } else {
                        cur_obj.parent().append('<div class="msg_inp_sensitive_txt_error warning-text text-area-error"></div>');
                        cur_obj.parent().find('.msg_inp_sensitive_txt_error').html(msg[0]);
                    }
                }
            } else {
                cur_obj.parent().find('.msg_inp_sensitive_txt_error').html('');
            }
            cur_obj.data('validation-errors', _self.validation_error_types);
            return this;
        }
        return this.init();
    }
    $('#additional_winn_price').on('click', function () {
        $('#winner_confirm').modal('hide');
        $('.upgradePoplink').click();
    });
}(jQuery));
var phoneRegex = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
var phoneRegexWithoutExt = /^[\(\)\s\,\.\-\+\d]{4,20}$/;

function strip_tags_js(val) {
    return val.replace(/(<([^>]+)>)/ig, "");
}

function isUrlValid(url) {
    return dh_utility_common.isUrlValid(url, 'web');
}
$(document).ready(function () {
    $(".save_remark").on('click', function () {
        var add_flag = true;
        var review_remark = $('#remark').val();
        var added_by = $('#added_by').val();
        var user_id = $('#user_id').val();
        var log_state = $('#log_state').val();
        var data_status = $('#data_status').val();
        var data_ip = $('#data_ip').val();
        var entriesInn = $("#entriesInn");
        if (review_remark == '') {
            if ($('#myModalFeedbackForm font').length) {
                $('#myModalFeedbackForm font').remove();
            }
            add_flag = false;
            var validate = $('<font>');
            validate.text("Please enter your remark.");
            validate.attr('color', '#ff0000');
            validate.insertAfter($('#remark'));
            return false;
        }
        if (add_flag) {
            $('#loadere').show();
            $.ajax({
                url: DH.baseURL + '/adminAjax.php',
                type: 'post',
                data: {
                    action: 'addUserRemarks',
                    user_id: user_id,
                    log_state: log_state,
                    data_status: data_status,
                    data_ip: data_ip,
                    review_remark: review_remark,
                    added_by: added_by,
                    added_by_type: 1
                }
            }).done(function (data) {
                var isError = 1;
                var errMsg = data.msg;
                try {
                    if (data.msg == 'ok') {
                        isError = 0;
                        $('.data_msg_icon_' + user_id).css('color', 'blue');
                        $('.data_msg_icon_' + user_id).attr('title', 'Add/View Feedback');
                        $('#remark').val('');
                        $('#log_state').val('');
                        $('#data_status').val('');
                        $('#data_ip').val('');
                        if (log_state == 3) {
                            if (data_status == 1) {
                                $('#usr_bpcnst_reasontxt-' + user_id).html('<b>Reason Text:</b><br />' + review_remark);
                                $('.contest_p_dbtn_' + user_id).html('<b>Contest participate:</b> <a class="button btn_blue" style="float:none;" href="javascript:void(0);" data-id="' + user_id + '" data-action="19" data-status="0" data-ip="" onclick="add_feedback(this); return false;">Un-Block</a>');
                            }
                        } else if (log_state == 19) {
                            if (data_status == 0) {
                                $('#usr_bpcnst_reasontxt-' + user_id).html('<b>Reason Text:</b><br />' + review_remark);
                                $('.usr_bpcnst_reasontxt-' + user_id).html('<b>Reason Text:</b><br />' + review_remark);
                                $('.contest_p_dbtn_' + user_id).html('<b>Contest participate:</b> <a class="button" style="float:none;" href="javascript:void(0);" data-id="' + user_id + '" data-action="3" data-status="1" data-ip="" onclick="add_feedback(this); return false;">Block</a>');
                                $('#unblockedTimeContainer_' + user_id).html('');
                                $('.unblockedTimeContainer_' + user_id).html('');
                            }
                        } else if (log_state == 4) {
                            if (data_status == 0) {
                                $('#usr_topdsr_reasontxt-' + user_id).html('<b>Reason Text:</b><br />' + review_remark);
                                $('.usr_topdsr_reasontxt-' + user_id).html('<b>Reason Text:</b><br />' + review_remark);
                                if ($('#topdesigerCnt').length == 1) {
                                    $('a[data-type="topdesiger"][data-id="' + user_id + '"]').parent().html('<a href="javascript:void(0);" class="button button-enable" data-type="topdesiger" data-id="' + user_id + '" data-action="4" data-status="1" data-ip="" data-user-des-approve="" onclick="updateUserFlagStatus(this); return false;">Enable</a>');
                                } else {
                                    entriesInn.find('a[data-type="topdesiger"][data-id="' + user_id + '"]').each(function () {
                                        $(this).parent().html('<a href="javascript:void(0);" class="button button-enable" data-type="topdesiger" data-id="' + user_id + '" data-action="4" data-status="1" data-ip="" data-user-des-approve="" onclick="updateUserFlagStatus(this); return false;">Enable</a>');
                                    });
                                }
                            }
                        } else if (log_state == 5) {
                            if (data_status == 0) {
                                if ($('#onetooneCnt').length == 1) {
                                    $('a[data-type="onetoone"][data-id="' + user_id + '"]').parent().html('<a href="javascript:void(0);" class="button button-enable" data-type="onetoone" data-id="' + user_id + '" data-action="5" data-status="1" data-ip="" data-user-des-approve="" onclick="updateUserFlagStatus(this); return false;">Enable</a>');
                                } else {
                                    entriesInn.find('a[data-type="onetoone"][data-id="' + user_id + '"]').each(function () {
                                        $(this).parent().html('<a href="javascript:void(0);" class="button button-enable" data-type="onetoone" data-id="' + user_id + '" data-action="5" data-status="1" data-ip="" data-user-des-approve="" onclick="updateUserFlagStatus(this); return false;">Enable</a>');
                                    });
                                }
                            }
                        } else if (log_state == 6) {
                            if (data_status == 0) {
                                $('.pddb_' + user_id).html('<div><b style="color:#ff0000">Shown personal design:</b><br /> <a class="button button-enable" data-status="1" data-id="' + user_id + '" data-type="prsdsgn" onclick="updateUserFlagStatus(this); return false;">Enable</a></div>');
                            }
                        } else if (log_state == 7) {
                            if (data_status == 1) {
                                $('.block_ip_user_' + user_id).html('[ <a href="javascript:void(0);" onclick="unblock_ipaddress(\'' + user_id + '\')">Un-Block IP</a> ]');
                            }
                        } else if (log_state == 63) {
                            if (data_status == 0) {
                                if ($('#enbusermpvCnt').length == 1) {
                                    $('a[data-type="enbusermpv"][data-id="' + user_id + '"]').parent().html('<a href="javascript:void(0);" class="button button-enable" data-type="enbusermpv" data-id="' + user_id + '" data-action="63" data-status="1" data-ip="" data-user-des-approve="" onclick="updateUserFlagStatus(this); return false;">Enable</a>');
                                } else {
                                    entriesInn.find('a[data-type="enbusermpv"][data-id="' + user_id + '"]').each(function () {
                                        $(this).parent().html('<a href="javascript:void(0);" class="button button-enable" data-type="enbusermpv" data-id="' + user_id + '" data-action="63" data-status="1" data-ip="" data-user-des-approve="" onclick="updateUserFlagStatus(this); return false;">Enable</a>');
                                    });
                                }
                            }
                        }
                        dh_utility_common.alert({
                            message: "Remark Saved!",
                            type: "success"
                        });
                        $('#myModalFeedbackForm').modal('hide');
                        return false;
                    }
                } catch (err) {
                    errMsg = err;
                }
                if (isError == 1) {
                    $('#loadere').hide();
                    dh_utility_common.alert({
                        message: "Error: " + errMsg,
                        type: "error"
                    });
                    return false;
                }
            }).fail(function (jqXHR, textStatus) {
                dh_utility_common.alert({
                    message: "Request failed: " + textStatus,
                    type: "error"
                });
            }).always(function () {
                $('#loadere').hide();
            });
        }
    });
    var position = $(window).scrollTop();
    var headerHeight = $('.root_header').height();
    var marginFTopElem = $('.pages-content');
    var mainFTopElem = $('.main-content-wrapper');
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > position && scroll >= headerHeight) {
            $('.root_header').removeClass('showing');
            $('.root_header').addClass('not-showing');
        } else {
            $('.root_header').removeClass('not-showing');
            $('.root_header').addClass('showing');
        }
        position = scroll;
    });
    if (marginFTopElem.length > 0) {
        marginFTopElem.css('margin-top', headerHeight + 'px');
    }
    if (mainFTopElem.length > 0) {
        mainFTopElem.css('margin-top', headerHeight + 'px');
    }
    if ($('.prdtdetailrght_fromwp').length > 0) {
        $('.prdtdetailrght_fromwp').css('top', headerHeight + 'px');
    }
});
if ($('.festive-strip').length > 0 && $(window).width() < 991) {
    var startAnimation = setInterval(animationLeft, 50);
    var i = 0;
    var scrollingWidth = $('.front--div').get(0).scrollWidth;
    var totalWidth = $('.front--div').width();

    function animationLeft() {
        $('.front--div').css('margin-left', i + 'px');
        i--;
        if ((totalWidth - scrollingWidth) - 50 > i) {
            clearInterval(startAnimation);
            setTimeout(function () {
                $('.front--div').css('margin-left', '0px');
            }, 4000);
            i = 0;
            setTimeout(function () {
                startAnimation = setInterval(animationLeft, 50);
            }, 6000);
        }
    }
}
var containers = document.querySelectorAll(".dh_pic_lazy");
containers.forEach(function (container) {
    const images = container.querySelectorAll('source, img');
    const config = {
        rootMargin: '400px 400px 50px 400px',
        threshold: 0.01
    };
    let observer;
    let preloadImage = function (element) {
        if (element.dataset && element.dataset.src) {
            element.src = element.dataset.src;
        }
        if (element.dataset && element.dataset.srcset) {
            element.srcset = element.dataset.srcset
        }
    };
    let onIntersection = function (entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                preloadImage(entry.target);
            }
        });
    };
    if (!('IntersectionObserver' in window)) {
        Array.from(images).forEach(function (image) {
            preloadImage(image)
        });
    } else {
        observer = new IntersectionObserver(onIntersection, config);
        images.forEach(function (image) {
            observer.observe(image);
        });
    }
});

function add_feedback(thisObj) {
    var user_id = $(thisObj).attr('data-id');
    var log_state = $(thisObj).attr('data-action');
    var data_status = $(thisObj).attr('data-status');
    var data_ip = $(thisObj).attr('data-ip');
    var html_user_stats = '';
    if (parseInt(log_state) == 3) {
        $('#blocked_user_id').val(user_id);
        $('#blocked_log_state').val(log_state);
        $('#blocked_data_status').val(data_status);
        $('#blocked_data_ip').val(data_ip);
        if ($('#myModalFeedbackForm font').length) {
            $('#myModalFeedbackForm font').remove();
        }
        $('#myModalBlockUnblockForm').modal('show');
    } else {
        $('#user_id').val(user_id);
        $('#log_state').val(log_state);
        $('#data_status').val(data_status);
        $('#data_ip').val(data_ip);
        if ($('#myModalFeedbackForm font').length) {
            $('#myModalFeedbackForm font').remove();
        }
        $('#myModalFeedbackForm').modal('show');
    }
}
$(document).mouseup(function (e) {
    var container = $(".designer_settings");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.parents(".entries-main-box").removeClass("active");
    }
});
$(document).ready(function () {
    $(".footer-section-text.show-accordian").on("click", ".footer-menu-lists", function () {
        $(this).toggleClass("active");
    });
    $(".avail_offer_printshop").click(function () {
        $('#root_header .festive-textCss').addClass('active');
        $.ajax({
            type: "POST",
            url: DH.baseURL + '/dh_ajax.php',
            data: {
                action: 'print_product',
                action_type: 'apply_coupon_header'
            }
        })
    });

    function urlCleanerVersion12(name) {
        return location.href.split('?').map((url, i) => !i ? url : url.replace(new RegExp('&' + name + '=[^&]*|' + name + '=[^&]*', "g"), '').replace(/^&/, "")).filter(txt => txt.length).join('?');
    }
    if (location.href.indexOf('psoffercode=') != -1) {
        history.replaceState(null, null, urlCleanerVersion12('psoffercode'));
    }
});
$(document).ready(function () {
    var curr_url = window.location.href;
    $.ajax({
        method: 'post',
        url: DH.baseURL + '/dh_ajax.php',
        async: true,
        data: {
            action: 'dynamic_subscription_popup_data',
            current_url: curr_url
        },
        success: function (dataMsg) {
            if (typeof x_dh_access == "undefined" && typeof dataMsg.dh_token != "undefined") {
                $("head").append(dataMsg.dh_token);
            }
            if (dataMsg.status == 'ok') {
                if (typeof dataMsg.subscription_popup_data == "object") {
                    if (typeof displaySubscriptionPopup == "function") {
                        displaySubscriptionPopup(dataMsg);
                    }
                }
                if (typeof dataMsg.bottom_subscription_popup_data == "object") {
                    if (typeof displaySubscriptionBottomPopup == "function") {
                        displaySubscriptionBottomPopup(dataMsg);
                    }
                }
            } else {
                if ($(".bottom_popup_container").length > 0) {}
            }
        },
        error: function (XHR, textStatus, errorThrown) {}
    });
    var launch_data = {
        action: 'dynamic_launch_popup_data',
        current_url: curr_url
    };
    if (typeof breadcrumb_url != 'undefined' && breadcrumb_url != '') {
        launch_data.breadcrumb_url = breadcrumb_url;
    }
    $.ajax({
        method: 'post',
        url: DH.baseURL + '/dh_ajax.php',
        async: true,
        data: launch_data,
        success: function (dataMsg) {
            if (typeof x_dh_access == "undefined" && typeof dataMsg.dh_token != "undefined") {
                $("head").append(dataMsg.dh_token);
            }
            if (dataMsg.status == 'ok') {
                if (typeof displayLaunchPopup == "function") {
                    displayLaunchPopup(dataMsg);
                }
            } else {
                if ($(".portal-launch").length > 0) {
                    $(".portal-launch").html("");
                }
            }
        },
        error: function (XHR, textStatus, errorThrown) {}
    });
    $(document).on("click", ".portal-accordian .icon", function () {
        $(this).parents(".portal-launch").toggleClass("active");
        if ($(".portal-launch").hasClass("active")) {
            $(".portal-launch-wrapper").slideDown(300);
        } else {
            $(".portal-launch-wrapper").slideUp(300);
        }
    });
    $(document).on("keypress", "#id_subscription_popup", function (e) {
        if (e.keycode == 13 || e.which == 13) {
            e.preventDefault();
            validate_pop_email(0);
            return false;
        }
    });
    $(document).on("keypress", ".bottom_popup_container #subscribe_email_popup", function (e) {
        if (e.keycode == 13 || e.which == 13) {
            e.preventDefault();
            validate_pop_email(3);
            return false;
        }
    });
    $(document).on("keypress", "#launch_popup_serch_txt", function (e) {
        if (e.keycode == 13 || e.which == 13) {
            e.preventDefault();
            validate_launch_popup();
            return false;
        }
    });
});

function validate_pop_email(sub_type) {
    let email;
    let popid;
    let id_email;
    let id_popup;
    var curr_url = window.location.href;
    if (sub_type == 3) {
        id_input_email = '#subscribe_email_popup';
        id_error_email = '#email_subs_pop';
        id_popup = '#subs_popup_id';
    } else {
        id_input_email = '#id_subscription_popup #subscribe_email_popup';
        id_error_email = '#id_subscription_popup #email_subs_pop';
        id_popup = '#id_subscription_popup #subs_popup_id';
    }
    email = $(id_input_email).val().trim();
    popid = parseInt($(id_popup).val().trim());
    if (email == '') {
        $(id_error_email).html('Please enter email.');
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
        $(id_error_email).html('Please enter valid email.');
        return false;
    } else {
        $("#loadere:hidden").show();
        $(id_error_email).html('');
        $.ajax({
            url: DH.baseURL + '/dh_ajax.php?tmstmprand=' + (new Date).getTime(),
            type: 'post',
            data: {
                'email': email,
                'event': popid,
                'page_url': curr_url,
                'action': 'get_event_data',
                'action_type': 'subscribe_email_popup'
            },
        }).done(function (data, textStatus) {
            if (data.status == 1) {
                dh_utility_common.alert({
                    message: data.msg,
                    type: 'success'
                });
                $(id_input_email).val('');
                $("#loadere:visible").hide();
                $("#loadere").hide();
                if (sub_type == 3) {
                    $('.scroll-triggered-box').remove();
                } else {
                    $("#id_subscription_popup").modal("hide");
                }
            } else {
                $(id_error_email).css('color', 'orangered');
                $(id_error_email).html(data.msg);
                $("#loadere:visible").hide();
                $("#loadere").hide();
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            $("#loadere:hidden").hide();
            console.log("Failed to update attributes");
        });
    }
}

function get_bottom_popup_data(data) {
    var html_data = '';
    if (data.show_popup) {
        html_data += '<div class="scroll-triggered-box">';
        html_data += '<div class="stb-content">';
        html_data += '<div class="box-content-wrapper">';
        html_data += '<div class="container">';
        html_data += '<div class="row">';
        html_data += '<div class="col-sm-12">';
        html_data += '<h2>' + data.popup_heading + '</h2>';
        html_data += '<p>' + data.popup_content + '</p>';
        html_data += '</div>';
        html_data += '<div class="whiteBtnNectar">';
        if (data.btn1_label != '') {
            var btn_bg_style = 'style="background-color:#82bc3b; color:#fff;"';
            if (data.btn1_bg_color != '') {
                var btn_font_color = (data.btn1_font_color != '') ? data.btn1_font_color : 'fff';
                btn_bg_style = 'style="background-color:#' + data.btn1_bg_color + '; color:#' + btn_font_color + ';"';
            }
            html_data += '<a class="btn btn-default" href="' + data.btn1_url + '" ' + btn_bg_style + ' onclick="dynm_bottom_popup_btn_hit(\'btn1\', \'' + data.popup_id + '\', \'' + data.popup_url_id + '\');">' + data.btn1_label + '</a>';
        }
        if (data.btn2_label != '') {
            var btn_bg_style = 'style="background-color:#82bc3b; color:#fff;"';
            if (data.btn2_bg_color != '') {
                var btn_font_color = (data.btn2_font_color != '') ? data.btn2_font_color : 'fff';
                btn_bg_style = 'style="background-color:#' + data.btn2_bg_color + '; color:#' + btn_font_color + ';"';
            }
            html_data += '<a class="btn" href="' + data.btn2_url + '" ' + btn_bg_style + ' onclick="dynm_bottom_popup_btn_hit(\'btn2\', \'' + data.popup_id + '\', \'' + data.popup_url_id + '\');">' + data.btn2_label + '</a>';
        }
        html_data += '</div>';
        html_data += '</div>';
        html_data += '</div>';
        html_data += '</div>';
        html_data += '</div>';
        html_data += '<span class="stb-close">×</span>';
        html_data += '</div>';
    }
    return html_data;
}

function validate_launch_popup() {
    var redirect_link = $('#launch_redirect_link').val().trim();
    var serch_txt = $('#launch_popup_serch_txt').val().trim();
    $('#launch_popup_serch_txt').css('border', '#ccc solid 1px');
    $('#serch_launch_pop').html('');
    if (serch_txt.length === 0) {
        $('#launch_popup_serch_txt').css('border', '#dd2022 solid 1px');
        $('#serch_launch_pop').html('Plese enter business name');
    } else if (redirect_link != '' && serch_txt != '') {
        redirect_link = redirect_link + serch_txt;
        window.open(redirect_link);
    }
    return false;
};
var DH = DH || {};
DH.baseURL;
DH.isLogged;
DH.readymadeLogoURL;
DH.userDataForReadymadeLogo;
DH.dh_header = {
    msgCount: 0,
    notificationCount: 0,
    init: function () {
        if (DH.DH_APP_MODE == 'PRODUCTION') {
            this.zopimChat();
        }
        this.mobileSliderHide();
    },
    zopimChat: function () {},
    mobileSliderHide: function () {
        $(document).ready(function () {
            $('.toggle-menu').click(function () {
                $('.main-body').toggleClass('main-body-slideleft');
                $('.body-left').toggleClass('slide-body-left');
                $("html,body").scrollTop(0);
            });
            $('.user-info-image .user-avatar').click(function () {
                $('.main-body').toggleClass('main-body-slideright')
                $('.body-right').toggleClass('slide-body-right')
                $("html,body").scrollTop(0);
            });
            $('.main-container').click(function (e) {
                var txtIsClose = 1;
                if ($(e.target).closest(".toggle-menu, .user-info-image .user-avatar").length > 0) {
                    txtIsClose = 0;
                }
                if ($(e.target).hasClass('toggle-menu, .user-info-image .user-avatar')) {
                    txtIsClose = 0;
                }
                if (txtIsClose == 1) {
                    $('.main-body').removeClass('main-body-slideright')
                    $('.body-right').removeClass('slide-body-right')
                    $('.main-body').removeClass('main-body-slideleft')
                    $('.body-left').removeClass('slide-body-left')
                }
            });
        });
    },
    updateNotification: function () {
        if (DH.dh_header.notificationCount == 0) {
            DH.dh_header.notificationCount++;
            $.ajax({
                type: "POST",
                url: DH.baseURL + '/dh_ajax.php',
                data: {
                    action: 'updateNotificationCount'
                },
            }).done(function (data, textStatus) {
                $('li#headerNotification ul').html(data);
            }).fail(function (errorObj, textStatus, errorThrown) {});
        }
    },
    updateMessages: function () {
        if (DH.dh_header.msgCount == 0) {
            DH.dh_header.msgCount++;
            $.ajax({
                type: "POST",
                url: DH.baseURL + '/dh_ajax.php',
                data: {
                    action: 'updateMessagesCount'
                },
            }).done(function (data, textStatus) {
                $('li#headerMessage ul').html(data);
            }).fail(function (errorObj, textStatus, errorThrown) {});
        }
    },
    redirectToreadymadeLogo: function () {
        $('#loadere').show();
        if (DH.isLogged) {
            $.ajax({
                type: "POST",
                url: DH.readymadeLogoURL + '/index.php?route=common/home/checkuser',
                data: $.parseJSON(DH.userDataForReadymadeLogo),
            }).done(function (msg, textStatus) {
                DH.dh_header.redirect(DH.readymadeLogoURL);
            }).fail(function (errorObj, textStatus, errorThrown) {
                $('#loadere').hide();
                dh_utility_common.alert({
                    message: "Ajax request failed due to: Status: " + textStatus + ", Error: " + errorThrown,
                    type: "error"
                });
            });
        } else {
            DH.dh_header.redirect(DH.readymadeLogoURL);
        }
    },
    redirect: function (url) {
        window.location.href = url;
    },
    numbersonly: function (myfield, e, dec) {
        var key;
        var keychar;
        if (window.event)
            key = window.event.keyCode;
        else if (e)
            key = e.which;
        else
            return true;
        keychar = String.fromCharCode(key);
        if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27))
            return true;
        else if ((("0123456789").indexOf(keychar) > -1))
            return true;
        else if (dec && (keychar == ".")) {
            myfield.form.elements[dec].focus();
            return false;
        } else
            return false;
    }
};
$(document).ready(function () {
    if (window.location.href == DH.baseURL + '/get-started/' || window.location.href == DH.baseURL + '/get-started') {
        $(".dashboard-wrapper").css({
            "padding-bottom": 0
        });
    } else {
        $(".dashboard-wrapper").css({
            "padding-bottom": "50px"
        });
    }
    var item = $('.getStartedlaunchPopup');

    function openPopUp() {
        if (item.find("img[data-src]").length > 0) {
            item.find("img[data-src]").each(function (index, value) {
                var imgSrc = $(value).data("src");
                $(value).attr("src", imgSrc);
            });
        }
        item.addClass('is-visible');
        setTimeout(function () {
            item.addClass('is-open');
            $('body').css({
                'overflow': 'hidden',
                'padding-right': '15px'
            });
        }, 20);
    }

    function closePopup() {
        item.removeClass('is-open');
        item.one('transitionend', function (e) {
            item.removeClass('is-visible');
            $('body').css({
                'overflow': 'auto',
                'padding-right': '0px'
            });
        });
    }
    $('body').on('click', '.btnClose', function () {
        closePopup();
    });
    $('body').on('click', '.openGetStartedPopup', function () {
        openPopUp();
    });
    DH.dh_header.init();
    if (DH.DH_APP_MODE == 'PRODUCTION' || 1) {
        /*!function (e, l, v, i, o, n) { e[i] || (e[i] = {}), e[i].account_id = n; var g, h; g = l.createElement(v), g.type = "text/javascript", g.async = 1, g.src = o + n, h = l.getElementsByTagName(v)[0], h.parentNode.insertBefore(g, h); e[i].q = []; e[i].on = function (z, y) { e[i].q.push([z, y]) } }(window, document, "script", "_elev", "https://cdn.elev.io/sdk/bootloader/v4/elevio-bootloader.js?cid=", "5c0a520ac9d06");
                if (typeof loadElvionData == "function") {
                    loadElvionData();
                }*/
    }
    (function () {
        var pKey = "pk_7pA1SZcCA0dDFcKZJMASI3g17CAI02Mx";
        if (DH.DH_APP_MODE == 'PRODUCTION') {
            pKey = "pk_cHyQBK6P5gneZLvxKRuLVFqCzpsK0Kvr";
        }
        var gs = document.createElement('script');
        gs.src = 'https://snippet.growsumo.com/growsumo.min.js';
        gs.type = 'text/javascript';
        gs.async = 'true';
        gs.onload = gs.onreadystatechange = function () {
            var rs = this.readyState;
            if (rs && rs != 'complete' && rs != 'loaded')
                return;
            try {
                growsumo._initialize(pKey);
                if (typeof (growsumoInit) === 'function') {
                    growsumoInit();
                }
            } catch (e) {}
        };
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gs, s);
    })();
    (function (w) {
        var s = document.createElement('script');
        s.src = '//survey.survicate.com/workspaces/c943b378118aec6e802f4fa2b14e1e5c/web_surveys.js';
        s.async = true;
        var e = document.getElementsByTagName('script')[0];
        e.parentNode.insertBefore(s, e);
    })(window);
});;
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.submit(function (b) {
                function d() {
                    var d, e;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function () {
            var b, c;
            return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function () {
                b = c.element(this) && b
            })), b
        },
        removeAttrs: function (b) {
            var c = {},
                d = this;
            return a.each(b.split(/\s/), function (a, b) {
                c[b] = d.attr(b), d.removeAttr(b)
            }), c
        },
        rules: function (b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                case "add":
                    a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                    break;
                case "remove":
                    return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
                        i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                    }), i) : (delete e[j.name], f)
            }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                required: h
            }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                remote: h
            })), g
        }
    }), a.extend(a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + a(b).val())
        },
        filled: function (b) {
            return !!a.trim("" + a(b).val())
        },
        unchecked: function (b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    var c = a.data(this[0].form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function (b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function (b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function (b) {
                var c = this.clean(b),
                    d = this.validationTargetFor(c),
                    e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
            },
            showErrors: function (b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (a) {
                var b, c = 0;
                for (b in a) c++;
                return c
            },
            hideErrors: function () {
                this.hideThese(this.toHide)
            },
            hideThese: function (a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function () {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function () {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            },
            clean: function (b) {
                return a(b)[0]
            },
            errors: function () {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function (b) {
                var c, d = a(b),
                    e = b.type;
                return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(),
                    g = a.map(f, function (a, b) {
                        return b
                    }).length,
                    h = !1,
                    i = this.elementValue(b);
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0
            },
            customDataMessage: function (b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function () {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a];
                return void 0
            },
            defaultMessage: function (b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function (b, c) {
                var d = this.defaultMessage(b, c.method),
                    e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d
            },
            addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function () {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (b, c) {
                var d, e, f, g = this.errorsFor(b),
                    h = this.idOrName(b),
                    i = a(b).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
                    c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
                }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
            },
            errorsFor: function (b) {
                var c = this.idOrName(b),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function (b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            },
            checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function (b) {
                return a(this.currentForm).find("[name='" + b + "']")
            },
            getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function (a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function (a) {
                    return a
                },
                string: function (b, c) {
                    return !!a(b, c.form).length
                },
                "function": function (a, b) {
                    return a(b)
                }
            },
            optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function (a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        attributeRules: function (b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function (b) {
            var c, d, e = {},
                f = a(b);
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
            return e
        },
        staticRules: function (b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }), a.each(b, function (d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function () {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
            },
            email: function (a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function (a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function (a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function (a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c, d, e = 0,
                    f = 0,
                    g = !1;
                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                return e % 10 === 0
            },
            minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || d >= e
            },
            rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function (a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function (a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function (b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
                    url: d
                } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function (d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    }), a.format = function () {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function (d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a.extend(a.fn, {
        validateDelegate: function (b, c, d) {
            return this.bind(c, function (c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0
            })
        }
    })
});;

function dropdownOpeningFix() {
    if (typeof dropdown_ele_timer == "undefined") {
        dropdown_ele_timer = 0;
    }
    dropdown_ele_timer = setInterval(function () {
        if ($(".custom_drop_down").length > 0) {
            if (!$(".custom_drop_down").hasClass("focustriggered")) {
                $(".custom_drop_down").on("focus", function (e) {
                    var ele = $(this);
                    setTimeout(function () {
                        var selected_list_handler = ele.data("dropdown");
                        if ($(selected_list_handler).length > 0) {
                            if ($(selected_list_handler).css("display") == "none") {
                                var e = $.Event('keyup');
                                e.which = 37;
                                ele.trigger(e);
                            }
                        }
                    }, 100);
                }).addClass("focustriggered");
            }
            clearInterval(dropdown_ele_timer);
        }
    }, 100);
}
$(document).ready(function () {
    $(".search-main").on('click', function () {
        if ($(this).next().is(':visible')) {
            $(this).next().slideUp(300);
        } else {
            $('.common--dropdown').slideUp(300);
            $(this).next().slideDown(300);
        }
    });
    $("body").on('click', function (e) {
        if ($(e.target).closest('.commonBtnGroup').length == 0) {
            $('.common--dropdown').slideUp(300);
        }
    });
    $("[data-disallowsubmit='enter']").on("keydown", function (e) {
        var x = e.which || e.keyCode;
        if (x === 13) {
            e.preventDefault();
        }
    });
    $("form#frmpStyleMiscInfo #search_ind_fltr_inp_popup").on("keydown", function (e) {
        var _self = $(this);
        var _parent = $("form#frmpStyleMiscInfo");
        var x = e.which || e.keyCode;
        if (x === 13) {
            var ul = $("#indus_styl_popup_ul", _parent);
            var $current = $("li.active", ul);
            _self.val($("a", $current).text());
            e.preventDefault();
        }
    });
});

function dh_dropdown_search(searchbox_id, ulid, event, params) {
    var enter_select_type = (typeof params != "undefined" && typeof params.enter_select_type != "undefined") ? params.enter_select_type : true;
    var handleevent = (typeof params != "undefined" && typeof params.handleevent != "undefined") ? params.handleevent : true;
    var input, filter, ul, li, a, i;
    input = document.getElementById(searchbox_id);
    filter = input.value.toUpperCase();
    if (filter == 'TSHIRT' || filter == 'T SHIRT') {
        filter = 'T-SHIRT DESIGN';
    }
    filter = filter.replace('&', '&amp;').toUpperCase();
    filter = encodeURI(filter);
    ul = document.getElementById(ulid);
    li = ul.getElementsByTagName("li");
    var allow_hide = 1;
    var filtering = 1;
    if (event) {
        var x = event.which || event.keyCode;
        if (x == 40 || x == 38 || x == 13 || x == 39 || x == 37 || x == 9) {
            allow_hide = 0;
            filtering = 0;
            if (x == 9) {}
        }
    }
    var opened = 0;
    if (ul.style.display == 'block' || $(ul).is(":visible")) {
        opened = 1;
    }
    var matched = 0;
    var a_inhtml = '';
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        a_inhtml = encodeURI(a.innerHTML.trim().toUpperCase());
        if (a_inhtml == filter) {
            matched = a;
        }
        if (a_inhtml.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else if (allow_hide == 1 && filtering == 1) {
            li[i].style.display = "none";
        }
    }
    $("#" + searchbox_id).unbind("blur").bind("blur", function (e) {
        var cur_Obj = $(this);
        var cur_Val = $.trim(cur_Obj.val());
        var blur_callback = cur_Obj.data('blur-callback');
        if (cur_Val == '') {
            $("#" + ulid + " li").removeClass("active");
        } else if (matched == 0) {
            $(ul).find("li").removeClass("active");
        }
        if (blur_callback != 'undefined' && typeof blur_callback == 'function') {
            blur_callback();
        } else {
            var e = $.Event('keyup');
            e.which = 13;
            handleSearchDropdownSelectedEvent({
                "input_element": input,
                "selected_element": $("li.active", ul).get(0),
                "ev": e
            });
        }
    });
    $('#' + ulid).slideDown(300);
    if (opened == 1) {
        if (typeof handleevent == "undefined" || handleevent === true) {
            handleSearchDropdownKeyEvents({
                'dr_element': ul,
                'input_element': input,
                'ev': event,
                'enter_select_type': enter_select_type
            });
        }
    }
}

function handleSearchDropdownKeyEvents(eleInfo) {
    var dr_element = eleInfo.dr_element;
    var input_element = eleInfo.input_element;
    var event_info = (eleInfo.ev) ? eleInfo.ev : '';
    if (event_info) {
        var x = event_info.which || event_info.keyCode;
        if (x) {
            var currentListingHasScroll = dr_element.scrollHeight > $(dr_element).height();
            var $nextEle, $prevEle, $currentEle = $("li.active", dr_element);
            if (x === 40) {
                if (!$currentEle.length) {
                    $("li:first", dr_element).addClass("active");
                } else {
                    $nextEle = $currentEle.nextAll("li:visible").first();
                    if ($nextEle.length) {
                        $currentEle.removeClass("active");
                        $nextEle.addClass("active");
                    }
                }
                if (currentListingHasScroll === true) {
                    if ($nextEle && $nextEle.length && typeof $nextEle.position() == 'object') {
                        var listTop = dr_element.scrollTop;
                        var listBottom = listTop + $(dr_element).height();
                        var elementTop = $nextEle.position().top;
                        var previousHeight = 0;
                        $nextEle.prevAll("li:visible").each(function (i, v) {
                            previousHeight += parseFloat($(v).height());
                        });
                        if ((!(previousHeight > listBottom)) || (previousHeight + $nextEle.height() > listBottom)) {
                            if (dr_element.scrollTop == 0) {
                                dr_element.scrollTop += previousHeight - parseFloat($(dr_element).height()) + $nextEle.height();
                            } else {
                                if (previousHeight > listBottom) {
                                    dr_element.scrollTop = previousHeight - parseFloat($(dr_element).height()) + $nextEle.height();
                                } else if (elementTop < 0) {
                                    dr_element.scrollTop = previousHeight;
                                } else {
                                    dr_element.scrollTop += parseFloat($nextEle.height());
                                }
                            }
                        }
                    }
                }
            } else if (x === 38) {
                $prevEle = $currentEle.prevAll("li:visible").first();
                if ($prevEle.length) {
                    $currentEle.removeClass("active");
                    $prevEle.addClass("active");
                }
                if (currentListingHasScroll === true) {
                    if ($prevEle && $prevEle.length && typeof $prevEle.position() == 'object') {
                        var listTop = dr_element.scrollTop;
                        var listBottom = listTop + $(dr_element).height();
                        var elementTop = $prevEle.position().top;
                        var previousHeight = 0;
                        $prevEle.prevAll("li:visible").each(function (i, v) {
                            previousHeight += parseFloat($(v).height());
                        });
                        if (elementTop <= 0) {
                            dr_element.scrollTop += parseFloat(elementTop);
                        } else if ((!(previousHeight > listTop)) || (previousHeight + $prevEle.height() > listBottom)) {
                            dr_element.scrollTop = parseFloat(previousHeight);
                        }
                    }
                }
            } else if (x === 13) {
                var enter_select_type = (typeof eleInfo.enter_select_type != "undefined") ? eleInfo.enter_select_type : '';
                if (enter_select_type !== false) {
                    $(input_element).val($currentEle.text());
                    if (typeof handleSearchDropdownSelectedEvent == "function") {
                        handleSearchDropdownSelectedEvent({
                            "input_element": input_element,
                            "selected_element": $currentEle.get(0),
                            "ev": event_info
                        });
                    }
                    $(dr_element).slideUp(300);
                }
            }
        }
    }
}

function handleSearchDropdownSelectedEvent(eleInfo) {
    var selected_element = eleInfo.selected_element;
    var input_element = eleInfo.input_element;
    var event_info = (eleInfo.ev) ? eleInfo.ev : '';
    if (event_info) {
        var x = event_info.which || event_info.keyCode;
        if (x) {
            if (x === 13) {
                var fill_info = $(input_element).data("fill");
                if (fill_info) {
                    var fill_info_arr = fill_info.split("|");
                    if (fill_info_arr.length > 0) {
                        var fill_ele = fill_info_arr[0];
                        if (fill_ele.substring(0, 2) == 'id') {
                            var fill_element_info = fill_ele.substring(3).split('-');
                            if (fill_element_info.length > 0) {
                                var fill_element = fill_element_info[0];
                                var fill_element_filter = (fill_element_info[1]) ? fill_element_info[1] : '';
                                if (fill_element_filter == 'exactattr') {} else {
                                    fill_element = fill_ele.substring(3).replace(/_/g, "-");
                                }
                                if ($("#" + fill_element).length > 0) {
                                    var fill_by = (fill_info_arr[1]) ? fill_info_arr[1] : '';
                                    if (fill_by) {
                                        var fill_val = '';
                                        if (fill_by.substring(0, 6) == 'a_attr') {
                                            var fill_attr_info = fill_by.substring(7).split('-');
                                            if (fill_attr_info.length > 0) {
                                                var fill_attr = fill_attr_info[0];
                                                fill_val = $("a", selected_element).attr(fill_attr.replace(/_/g, "-"));
                                                var fill_attr_filter = (fill_attr_info[1]) ? fill_attr_info[1] : '';
                                                if (fill_attr_filter) {
                                                    if (fill_attr_filter.substring(0, 12) == 'filteroutval') {
                                                        fill_val = fill_val.replace(fill_attr_filter.substring(13), '');
                                                    }
                                                }
                                            }
                                            $("#" + fill_element).val($.trim(fill_val));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require, exports, module);
    } else {
        root.ouibounce = factory();
    }
}(this, function (require, exports, module) {
    return function ouibounce(el, custom_config) {
        "use strict";
        var config = custom_config || {},
            aggressive = config.aggressive || false,
            sensitivity = setDefault(config.sensitivity, 20),
            timer = setDefault(config.timer, 1000),
            delay = setDefault(config.delay, 0),
            callback = config.callback || function () {},
            cookieExpire = setDefaultCookieExpire(config.cookieExpire) || '',
            cookieDomain = config.cookieDomain ? ';domain=' + config.cookieDomain : '',
            cookieName = config.cookieName ? config.cookieName : 'viewedOuibounceModal',
            sitewide = config.sitewide === true ? ';path=/' : '',
            _delayTimer = null,
            _html = document.documentElement;

        function setDefault(_property, _default) {
            return typeof _property === 'undefined' ? _default : _property;
        }

        function setDefaultCookieExpire(days) {
            var ms = days * 24 * 60 * 60 * 1000;
            var date = new Date();
            date.setTime(date.getTime() + ms);
            return "; expires=" + date.toUTCString();
        }
        setTimeout(attachOuiBounce, timer);

        function attachOuiBounce() {
            if (isDisabled()) {
                return;
            }
            _html.addEventListener('mouseleave', handleMouseleave);
            _html.addEventListener('mouseenter', handleMouseenter);
            _html.addEventListener('keydown', handleKeydown);
        }

        function handleMouseleave(e) {
            if (e.clientY > sensitivity) {
                return;
            }
            _delayTimer = setTimeout(fire, delay);
        }

        function handleMouseenter() {
            if (_delayTimer) {
                clearTimeout(_delayTimer);
                _delayTimer = null;
            }
        }
        var disableKeydown = false;

        function handleKeydown(e) {
            if (disableKeydown) {
                return;
            } else if (!e.metaKey || e.keyCode !== 76) {
                return;
            }
            disableKeydown = true;
            _delayTimer = setTimeout(fire, delay);
        }

        function checkCookieValue(cookieName, value) {
            return parseCookies()[cookieName] === value;
        }

        function parseCookies() {
            var cookies = document.cookie.split('; ');
            var ret = {};
            for (var i = cookies.length - 1; i >= 0; i--) {
                var el = cookies[i].split('=');
                ret[el[0]] = el[1];
            }
            return ret;
        }

        function isDisabled() {
            return checkCookieValue(cookieName, 'true') && !aggressive;
        }

        function fire() {
            if (isDisabled()) {
                return;
            }
            if (el) {
                el.style.display = 'block';
            }
            callback();
            disable();
        }

        function disable(custom_options) {
            var options = custom_options || {};
            if (typeof options.cookieExpire !== 'undefined') {
                cookieExpire = setDefaultCookieExpire(options.cookieExpire);
            }
            if (options.sitewide === true) {
                sitewide = ';path=/';
            }
            if (typeof options.cookieDomain !== 'undefined') {
                cookieDomain = ';domain=' + options.cookieDomain;
            }
            if (typeof options.cookieName !== 'undefined') {
                cookieName = options.cookieName;
            }
            document.cookie = cookieName + '=true' + cookieExpire + cookieDomain + sitewide;
            _html.removeEventListener('mouseleave', handleMouseleave);
            _html.removeEventListener('mouseenter', handleMouseenter);
            _html.removeEventListener('keydown', handleKeydown);
        }
        return {
            fire: fire,
            disable: disable,
            isDisabled: isDisabled
        };
    };
}));;

function get_social_popup_data(data) {
    var html_data = '';
    if (data.show_popup) {
        var modal_type = data.modal_type;
        if (modal_type == 'ouibounce') {
            html_data += '<div id="' + data.popup_opener_name + '" class="ouibounce-modal social-media-popup mob-changes" style="display: none; overflow:auto; ">';
            html_data += '<div class="modal-exit">';
            html_data += '<div class="portfolio-btn-actions exit-poppuClose"><ul class="btn-actionCss"><li><div class="portfolio-closeBtn"><a href="javascript:;" class="close" data-dismiss="modal"><span>close</span></a></div></li></ul></div>';
            html_data += '<div class="modal-body">';
            html_data += '<div class="exit-popups-main">';
            html_data += '<div class="coupon-code-modal">';
            html_data += data.popup_content;
            html_data += '</div>'
            html_data += '</div>';
            html_data += '<div class="exit-copied-section">';
            html_data += '</div>';
            html_data += '</div>';
        } else {
            html_data += '<div class="modal fade social-media-popup" id="' + data.popup_opener_name + '" role="dialog" data-backdrop="static" data-keyboard="false">';
            html_data += '<div class="modal-dialog modal-lg">';
            html_data += '<div class="modal-content">';
            html_data += '<div class="modal-header">';
            html_data += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
            html_data += '</div>';
            html_data += '<div class="modal-body" style="min-height:200px;">' + data.popup_content + '</div>';
            html_data += '</div>';
            html_data += '</div>';
            html_data += '</div>';
        }
    }
    return html_data;
}

function hideSocialPopup(pop_parent) {
    if (pop_parent.hasClass("ouibounce-modal")) {
        pop_parent.hide();
        $('body').removeClass('exit-main-body');
    } else {
        pop_parent.modal("hide");
    }
}

function displaySocialPopup(dataMsg) {
    if (typeof dataMsg.social_data == "object" && typeof get_social_popup_data == "function") {
        var t = parseInt(dataMsg.social_data.popup_appear_time),
            i = get_social_popup_data(dataMsg.social_data),
            n = dataMsg.social_data.popup_opener_name;
        if (!$("#loadere").length) {
            $('body').append('<div id="loadere" style="display:none;"><div id="loadere_new1"></div><div id="loadere_new2"></div></div>');
        }
        var modal_type = dataMsg.social_data.modal_type;
        if (modal_type == 'ouibounce') {
            $('body .main-container').append(i);
            if ($("#" + dataMsg.social_data.popup_opener_name).length > 0) {
                var aggressive = true;
                var ouibounce_opts = {
                    aggressive: true,
                    callback: function () {
                        if (typeof initSocialTargets == "function") {
                            initSocialTargets();
                        }
                        var pop_parent = $('#' + dataMsg.social_data.popup_opener_name);
                        if ($('.modal:visible').length > 0) {
                            pop_parent.hide();
                            $('body').removeClass('exit-main-body');
                            return false;
                        }
                        pop_parent.show().data('sharing_token', dataMsg.social_data.sharing_token);;
                        $(".modal-exit", pop_parent).show();
                        $('body').addClass('exit-main-body');
                        $(".exit-poppuClose", pop_parent).click(function (e) {
                            hideSocialPopup(pop_parent);
                        });
                    }
                }
                var fire_immediate = 0;
                var fire_function = '';
                if (dataMsg.social_data.modal_settings != null && typeof dataMsg.social_data.modal_settings == "object") {
                    if (typeof dataMsg.social_data.modal_settings.dh_oui_sensitivity != "undefined") {
                        ouibounce_opts.sensitivity = parseInt(dataMsg.social_data.modal_settings.dh_oui_sensitivity);
                    }
                    if (typeof dataMsg.social_data.modal_settings.dh_oui_aggressive != "undefined") {
                        ouibounce_opts.aggressive = Boolean(dataMsg.social_data.modal_settings.dh_oui_aggressive);
                    }
                    if (typeof dataMsg.social_data.modal_settings.dh_oui_timer != "undefined") {
                        ouibounce_opts.timer = parseInt(dataMsg.social_data.modal_settings.dh_oui_timer);
                    }
                    if (typeof dataMsg.social_data.modal_settings.dh_oui_delay != "undefined") {
                        ouibounce_opts.delay = parseInt(dataMsg.social_data.modal_settings.dh_oui_delay);
                    }
                    if (typeof dataMsg.social_data.modal_settings.dh_oui_cookie_expire != "undefined" && parseInt(dataMsg.social_data.modal_settings.dh_oui_cookie_expire) > 0) {
                        ouibounce_opts.cookieExpire = parseInt(dataMsg.social_data.modal_settings.dh_oui_cookie_expire);
                        if (typeof dataMsg.social_data.modal_settings.dh_oui_cookie_domain != "undefined") {
                            ouibounce_opts.cookieDomain = $.trim(dataMsg.social_data.modal_settings.dh_oui_cookie_domain);
                        }
                        if (typeof dataMsg.social_data.modal_settings.dh_oui_cookie_name != "undefined") {
                            ouibounce_opts.cookieName = $.trim(dataMsg.social_data.modal_settings.dh_oui_cookie_name);
                        }
                        if (typeof dataMsg.social_data.modal_settings.dh_oui_sitewide_cookie != "undefined") {
                            ouibounce_opts.sitewide = Boolean(dataMsg.social_data.modal_settings.dh_oui_sitewide_cookie);
                        }
                    }
                    if (typeof dataMsg.social_data.modal_settings.dh_oui_immediate != "undefined" && dataMsg.social_data.modal_settings.dh_oui_immediate == 1) {
                        fire_immediate = 1;
                    }
                    if (typeof dataMsg.social_data.modal_settings.dh_oui_buttonclick != "undefined" && dataMsg.social_data.modal_settings.dh_oui_buttonclick != '') {
                        fire_function = function (e) {
                            ouibounce_obj.fire();
                            e.preventDefault();
                        }
                    }
                }
                if (typeof ouibounce == 'function') {
                    var ouibounce_obj = ouibounce(document.getElementById(dataMsg.social_data.popup_opener_name), ouibounce_opts);
                    if (fire_immediate == 1) {
                        if (t > 0) {
                            setTimeout(function () {
                                ouibounce_obj.fire();
                            }, t * 1000);
                        } else {
                            ouibounce_obj.fire();
                        }
                    } else if (typeof fire_function == "function") {
                        $('body .main-container').on('click', dataMsg.social_data.modal_settings.dh_oui_buttonclick, fire_function);
                    }
                }
            }
        } else {
            $('body').append(i);
            var pop_parent = $("#" + n);
            if (pop_parent.length > 0) {
                pop_parent.on('hidden.bs.modal', function (e) {
                    pop_parent.remove();
                }).on('show.bs.modal', function (e) {
                    if (typeof initSocialTargets == "function") {
                        initSocialTargets();
                    }
                }).data('sharing_token', dataMsg.social_data.sharing_token);
                if (t > 0) {
                    setTimeout(function () {
                        pop_parent.modal("show");
                    }, t * 1000);
                } else {
                    pop_parent.modal("show");
                }
            }
        }
    }
}

function get_subscription_popup_data(data) {
    var html_data = '';
    var model_class_name = '';
    if (data.bg_image_uses_as == 1) {
        model_class_name = 'cls_only_bg_mage';
    } else if (data.bg_image_uses_as == 2) {
        model_class_name = 'cls_no_bg_mage';
    } else {
        model_class_name = 'cls_plane_bg_mage_nd_desc';
    }
    html_data += '<div class="modal fade subscription-popup closebtn-design-props" id="' + data.popup_opener_name + '" role="dialog" data-backdrop="static" data-keyboard="false">';
    html_data += '<div class="modal-dialog ">';
    html_data += '<div class="modal-content">';
    html_data += '<div class="portfolio-btn-actions exit-poppuClose"><ul class="btn-actionCss"><li><div class="portfolio-closeBtn"><a href="javascript:;" class="close" data-dismiss="modal"><span>close</span></a></div></li></ul></div>';
    if (data.bg_image_uses_as == 1 || data.bg_image_uses_as == 3) {
        html_data += '<div class="modal-body change-color-props ' + model_class_name + '" style="background:url(\'' + data.popup_bg_image + '\') no-repeat;">';
    } else {
        html_data += '<div class="modal-body change-color-props ' + model_class_name + '" style="">';
    }
    html_data += '<div class="form-group">';
    if ($.inArray(data.popup_bg_image_uses_as, [2, 3])) {
        if (data.popup_sub_type != 3) {
            html_data += '<h3 class="events-popup-titles text-center">' + data.popup_heading + '</h3>';
        }
        html_data += '<p class="events-popup-description text-center">' + data.popup_content + '</p>';
    }
    html_data += '<div class="form-group events-form-wrapper">';
    html_data += '<form>';
    html_data += '<div class="subscription-input-wrapper">';
    html_data += '<input name="subscribe_email_popup" id="subscribe_email_popup" type="text" class="events-mail-id" placeholder="Email" autocomplete="off" />';
    html_data += '<input type="hidden" id="subs_popup_id" name="subs_popup_id" value="' + data.popup_id + '"/>';
    html_data += '<input type="hidden" id="pop_sub_type" name="pop_sub_type" value="' + data.popup_sub_type + '"/>';
    html_data += '<span id="email_subs_pop" class="show-valid-error"></span>';
    html_data += '</div>'
    html_data += '<div class="whiteBtnNectar common-new text-center events-mail-bt-space">';
    html_data += '<button class="btn btn-default btns-wraper" style="background:#' + data.btn1_bg_color + '!important;color:#' + data.btn1_font_color + '!important" onclick="validate_pop_email(' + data.popup_sub_type + ');" type="button">' + data.btn1_label + '</button>';
    if (data.btn2_label != '') {
        html_data += '<a class="btn btn-default btns-wraper" style="background:#' + data.btn2_bg_color + '!important;color:#' + data.btn2_font_color + '!important" href="' + data.btn2_url + '" target="_blank" >' + data.btn2_label + '</a>';
    }
    html_data += '</div>'
    html_data += '</form>';
    html_data += '</div>';
    html_data += '</div>';
    html_data += '</div>';
    html_data += '</div>';
    html_data += '</div>';
    html_data += '</div>';
    return html_data;
}

function hideSubscriptionPopup(pop_parent) {
    pop_parent.modal("hide");
}

function displaySubscriptionPopup(dataMsg) {
    if (typeof dataMsg.subscription_popup_data == "object" && typeof get_subscription_popup_data == "function") {
        var t = parseInt(dataMsg.subscription_popup_data.popup_appear_time),
            i = get_subscription_popup_data(dataMsg.subscription_popup_data),
            n = dataMsg.subscription_popup_data.popup_opener_name,
            pId = parseInt(dataMsg.subscription_popup_data.popup_id);
        if (!$("#loadere").length) {
            $('body').append('<div id="loadere" style="display:none;"><div id="loadere_new1"></div><div id="loadere_new2"></div></div>');
        }
        var modal_type = dataMsg.subscription_popup_data.modal_type;
        if (modal_type == 'email_subscription_popup') {
            $('body .main-container').append(i);
            if ($("#" + dataMsg.subscription_popup_data.popup_opener_name).length > 0) {
                var show_popup = dataMsg.subscription_popup_data.show_popup;
                var pop_parent = $('#' + dataMsg.subscription_popup_data.popup_opener_name);
                var opening_type = dataMsg.subscription_popup_data.popup_opening_type;
                if (pop_parent.length > 0 && show_popup == true) {
                    var close_scroll_btn = 0;
                    $(".exit-poppuClose", pop_parent).click(function (e) {
                        hideSubscriptionPopup(pop_parent);
                    });
                    if (opening_type == 3) {
                        if (t > 0) {
                            setTimeout(function () {
                                pop_parent.modal("show");
                            }, t * 1000);
                        } else {
                            pop_parent.modal("show");
                        }
                    } else if (opening_type == 1) {
                        $(window).on('mouseleave', function (e) {
                            var pageX = e.pageX || e.clientX;
                            var pageY = e.pageY || e.clientY;
                            if (pageX < 0 || pageY < 0) {
                                pop_parent.modal("show");
                            }
                        });
                    } else if (opening_type == 2) {
                        var sel_btn = dataMsg.subscription_popup_data.popup_selector;
                        if (sel_btn != '' && $(sel_btn).length > 0) {
                            $(sel_btn).on('click', function () {
                                pop_parent.modal("show");
                            });
                        }
                    } else if (opening_type == 4) {
                        pop_parent.modal("show");
                    } else if (opening_type == 5) {
                        $(window).scroll(function (e) {
                            var scrollPercent = parseInt(($(window).scrollTop() / ($(document).height() - $(window).height())) * 100);
                            if (scrollPercent >= t && close_scroll_btn == 0) {
                                close_scroll_btn = 1;
                                pop_parent.modal("show");
                            }
                        });
                    }
                }
            }
        }
    }
}

function displaySubscriptionBottomPopup(dataMsg) {
    if (typeof dataMsg.bottom_subscription_popup_data == "object") {
        var popup_appear_on = parseInt(dataMsg.bottom_subscription_popup_data.popup_appear_on);
        var popup_appear_time = parseInt(dataMsg.bottom_subscription_popup_data.popup_appear_time);
        var html_data = get_subscription_bottom_popup_data(dataMsg.bottom_subscription_popup_data);
        $('.bottom_popup_container').html(html_data);
        if (popup_appear_on == 2) {
            setTimeout(function () {
                $('.scroll-triggered-box').slideDown();
                if ($('.scroll-triggered-box').is(':visible') == false) {
                    $('.scroll-triggered-box').slideDown();
                }
            }, popup_appear_time * 1000);
        } else if (popup_appear_on == 3) {
            $(window).scroll(function (e) {
                scrolltriggerbox.showDiv();
            });
            $(window).resize(function (e) {
                scrolltriggerbox.showDiv();
            });
        }
        $('.stb-close').click(function (e) {
            scrolltriggerbox.hideDiv();
        });
        var scrolltriggerbox = (function () {
            var box_subscription = {};
            box_subscription.showDiv = function () {
                var scrollPercent = parseInt(($(window).scrollTop() / ($(document).height() - $(window).height())) * 100);
                if (scrollPercent >= popup_appear_time) {
                    $('.scroll-triggered-box').slideDown();
                }
            };
            box_subscription.hideDiv = function () {
                $('.scroll-triggered-box').remove();
            };
            return box_subscription;
        })();
    }
}

function get_subscription_bottom_popup_data(data) {
    var html_data = '';
    var bottom_popup_class_name = '';
    if (data.bg_image_uses_as == 1) {
        bottom_popup_class_name = 'cls-bottom-only-bg-mage';
    } else if (data.bg_image_uses_as == 2) {
        bottom_popup_class_name = 'cls-bottom-popup-no-image';
    } else {
        bottom_popup_class_name = 'cls-bottom-plane-bg-mage-nd-desc';
    }
    if (data.bg_image_uses_as == 1 || data.bg_image_uses_as == 3) {
        html_data += '<div class="scroll-triggered-box ' + bottom_popup_class_name + '" style="background:rgba(0,0,0,0.4) url(\'' + data.popup_bg_image + '\') no-repeat;">';
    } else {
        html_data += '<div class="scroll-triggered-box ' + bottom_popup_class_name + '" >';
    }
    html_data += '<div class="stb-content">';
    html_data += '<div class="box-content-wrapper">';
    html_data += '<div class="container">';
    html_data += '<div class="row">';
    html_data += '<div class="col-sm-12 text-center">';
    html_data += '<h2>' + data.popup_heading + '</h2>';
    html_data += '<div class="form-group">';
    if ($.inArray(data.popup_bg_image_uses_as, [2, 3])) {
        if (data.popup_sub_type != 3) {
            html_data += '<h3 class="events-popup-titles text-center">' + data.popup_heading + '</h3>';
        }
        html_data += '<p class="events-popup-description text-center">' + data.popup_content + '</p>';
    }
    html_data += '<div class="form-group events-form-wrapper">';
    html_data += '<form>';
    html_data += '<div class="subscription-input-wrapper">';
    html_data += '<input name="subscribe_email_popup" id="subscribe_email_popup" type="text" class="events-mail-id" placeholder="Email" autocomplete="off" />';
    html_data += '<input type="hidden" id="subs_popup_id" name="subs_popup_id" value="' + data.popup_id + '"/>';
    html_data += '<input type="hidden" id="pop_sub_type" name="pop_sub_type" value="' + data.popup_sub_type + '"/>';
    html_data += '<span id="email_subs_pop" class="show-valid-error"></span>';
    html_data += '</div>'
    html_data += '<div class="whiteBtnNectar common-new text-center events-mail-bt-space">';
    html_data += '<button class="btn btn-default btns-wraper" style="background:#' + data.btn1_bg_color + '!important;color:#' + data.btn1_font_color + '!important" onclick="validate_pop_email(' + data.popup_sub_type + ');" type="button">' + data.btn1_label + '</button>';
    if (data.btn2_label != '') {
        html_data += '<a class="btn btn-default btns-wraper" style="background:#' + data.btn2_bg_color + '!important;color:#' + data.btn2_font_color + '!important" href="' + data.btn2_url + '" target="_blank" >' + data.btn2_label + '</a>';
    }
    html_data += '</div>'
    html_data += '</form>';
    html_data += '</div>';
    html_data += '</div>';
    html_data += '</div>';
    html_data += '<div class="whiteBtnNectar"></div>';
    html_data += '</div>';
    html_data += '</div>';
    html_data += '</div>';
    html_data += '</div>';
    html_data += '<div class="portfolio-btn-actions change-bottom-popup exit-poppuClose"><ul class="btn-actionCss"><li><div class="portfolio-closeBtn"><a href="javascript:;" class="stb-close close" data-dismiss="modal"><span>close</span></a></div></li></ul></div>';
    html_data += '</div>';
    return html_data;
}

function loadScriptUrl(path, callback) {
    var done = false;
    var scr = document.createElement('script');
    scr.onload = handleLoad;
    scr.onreadystatechange = handleReadyStateChange;
    scr.onerror = handleError;
    scr.src = path;
    document.body.appendChild(scr);

    function handleLoad() {
        if (!done) {
            done = true;
            callback(path, "ok");
        }
    }

    function handleReadyStateChange() {
        var state;
        if (!done) {
            state = scr.readyState;
            if (state === "complete") {
                handleLoad();
            }
        }
    }

    function handleError() {
        if (!done) {
            done = true;
            callback(path, "error");
        }
    }
}

function displayLaunchPopup(dataMsg) {
    if (typeof dataMsg.bottom_launch_popup_data == "object" && typeof getLaunchPopupData == "function") {
        var t = parseInt(dataMsg.bottom_launch_popup_data.popup_appear_time),
            i = getLaunchPopupData(dataMsg.bottom_launch_popup_data),
            n = dataMsg.bottom_launch_popup_data.popup_opener_name;
        if (!$("#loadere").length) {
            $('body').append('<div id="loadere" style="display:none;"><div id="loadere_new1"></div><div id="loadere_new2"></div></div>');
        }
        var modal_type = dataMsg.bottom_launch_popup_data.modal_type;
        if (modal_type == 'bottom_launch_popup') {
            $('body .main-container').append(i);
            if ($("#" + n).length > 0) {
                var pop_parent = $('#' + n);
                pop_parent.addClass("active").show();
                var popup_type = dataMsg.bottom_launch_popup_data.popup_opening_type;
                if (popup_type == 2) {
                    $(document).on('click', '#' + n + ' .portal-accordian .icon', function () {
                        if (t > 0) {
                            setTimeout(function () {
                                if (pop_parent.hasClass('active') == false) {
                                    pop_parent.addClass("active").show();
                                }
                            }, t * 1000);
                        }
                    });
                } else if (popup_type == 3) {
                    $(window).scroll(function () {
                        var scrollPercent = parseInt(($(window).scrollTop() / ($(document).height() - $(window).height())) * 100);
                        if (scrollPercent >= t) {
                            if (pop_parent.hasClass('active') == false) {
                                pop_parent.addClass("active").show();
                            }
                        }
                    });
                }
            }
        } else {
            var pop_parent = $("#" + n);
            if (pop_parent.length > 0) {
                pop_parent.remove();
            }
        }
    }
}

function getLaunchPopupData(data) {
    var redirect_link = data.popup_redirect_link;
    if (redirect_link != '') {
        var url_param_key = '';
        if (data.redirect_url_type == 1) {
            url_param_key = 'company_name=';
        } else if (data.redirect_url_type == 2) {
            url_param_key = 'logo_name=';
        }
        var pCount = 0;
        if (redirect_link.indexOf('?') >= 0) {
            var searchParams = new URLSearchParams(redirect_link);
            for (var pair of searchParams.entries()) {
                if (pair[0] != '') {
                    pCount++;
                    break;
                }
            }
        }
        if (pCount == 0 || redirect_link.indexOf('?') == redirect_link.length - 1) {
            redirect_link = redirect_link.replace('?', '');
            pCount = 0;
        }
        if (url_param_key != '' && pCount > 0) {
            redirect_link = redirect_link + '&' + url_param_key;
        } else {
            redirect_link = redirect_link + '?' + url_param_key;
        }
    }
    var boxblur = "this.placeholder='Enter your business name*'";
    var boxfocus = "this.placeholder=''";
    var html = '<div class="portal-launch" id="' + data.popup_opener_name + '">';
    html += '<div class="common-new">';
    html += '<a href="javascript:void(0);" class="portal-accordian">' + data.popup_heading + '<i class="icon icon-chevron-down"></i></a>';
    html += '</div>';
    html += '<div class="portal-launch-wrapper">';
    html += '<h2 class="portal-launch-title">' + data.popup_content + '</h2>';
    html += '<label for="search_input"></label>';
    html += '<input name="launch_popup_serch_txt" id="launch_popup_serch_txt" type="text" class="required search-input" placeholder="Enter your business name*" onblur="' + boxblur + '" onfocus="' + boxfocus + '" autocomplete="off" />';
    html += '<span id="serch_launch_pop" class="show-valid-error"></span>';
    html += '<input type="hidden" id="launch_popup_id" name="launch_popup_id" value="' + data.popup_id + '"/>';
    html += '<input type="hidden" id="launch_redirect_link" name="launch_redirect_link" value="' + redirect_link + '"/>';
    html += '<div class="whiteBtnNectar common-new text-center">';
    html += '<button class="submit-search-button" style="background:#' + data.btn1_bg_color + '!important;color:#' + data.btn1_font_color + '!important" onclick="validate_launch_popup();" type="button">' + data.btn1_label + '</button>';
    html += '</div>'
    html += '</div>';
    html += '</div>';
    return html;
}

function get_ck_arr(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    console.log(ca);
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
