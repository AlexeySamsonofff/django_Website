if (function(e, t) {
        function n(e) {
            var t = e.length,
                n = ue.type(e);
            return ue.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e) {
            var t = Te[e] = {};
            return ue.each(e.match(pe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function s(e, n, i, s) {
            if (ue.acceptData(e)) {
                var o, r, a = ue.expando,
                    l = e.nodeType,
                    d = l ? ue.cache : e,
                    u = l ? e[a] : e[a] && a;
                if (u && d[u] && (s || d[u].data) || i !== t || "string" != typeof n) return u || (u = l ? e[a] = te.pop() || ue.guid++ : a), d[u] || (d[u] = l ? {} : {
                    toJSON: ue.noop
                }), ("object" == typeof n || "function" == typeof n) && (s ? d[u] = ue.extend(d[u], n) : d[u].data = ue.extend(d[u].data, n)), r = d[u], s || (r.data || (r.data = {}), r = r.data), i !== t && (r[ue.camelCase(n)] = i), "string" == typeof n ? (o = r[n], null == o && (o = r[ue.camelCase(n)])) : o = r, o
            }
        }

        function o(e, t, n) {
            if (ue.acceptData(e)) {
                var i, s, o = e.nodeType,
                    r = o ? ue.cache : e,
                    l = o ? e[ue.expando] : ue.expando;
                if (r[l]) {
                    if (t && (i = n ? r[l] : r[l].data)) {
                        ue.isArray(t) ? t = t.concat(ue.map(t, ue.camelCase)) : t in i ? t = [t] : (t = ue.camelCase(t), t = t in i ? [t] : t.split(" ")), s = t.length;
                        for (; s--;) delete i[t[s]];
                        if (n ? !a(i) : !ue.isEmptyObject(i)) return
                    }(n || (delete r[l].data, a(r[l]))) && (o ? ue.cleanData([e], !0) : ue.support.deleteExpando || r != r.window ? delete r[l] : r[l] = null)
                }
            }
        }

        function r(e, n, i) {
            if (i === t && 1 === e.nodeType) {
                var s = "data-" + n.replace(De, "-$1").toLowerCase();
                if (i = e.getAttribute(s), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : xe.test(i) ? ue.parseJSON(i) : i
                    } catch (o) {}
                    ue.data(e, n, i)
                } else i = t
            }
            return i
        }

        function a(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ue.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function d() {
            return !1
        }

        function u() {
            try {
                return J.activeElement
            } catch (e) {}
        }

        function c(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function p(e, t, n) {
            if (ue.isFunction(t)) return ue.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return ue.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (ze.test(t)) return ue.filter(t, e, n);
                t = ue.filter(t, e)
            }
            return ue.grep(e, function(e) {
                return ue.inArray(e, t) >= 0 !== n
            })
        }

        function h(e) {
            var t = Ue.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function f(e, t) {
            return ue.nodeName(e, "table") && ue.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function m(e) {
            return e.type = (null !== ue.find.attr(e, "type")) + "/" + e.type, e
        }

        function g(e) {
            var t = st.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function _(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) ue._data(n, "globalEval", !t || ue._data(t[i], "globalEval"))
        }

        function y(e, t) {
            if (1 === t.nodeType && ue.hasData(e)) {
                var n, i, s, o = ue._data(e),
                    r = ue._data(t, o),
                    a = o.events;
                if (a) {
                    delete r.handle, r.events = {};
                    for (n in a)
                        for (i = 0, s = a[n].length; s > i; i++) ue.event.add(t, n, a[n][i])
                }
                r.data && (r.data = ue.extend({}, r.data))
            }
        }

        function v(e, t) {
            var n, i, s;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ue.support.noCloneEvent && t[ue.expando]) {
                    s = ue._data(t);
                    for (i in s.events) ue.removeEvent(t, i, s.handle);
                    t.removeAttribute(ue.expando)
                }
                "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ue.support.html5Clone && e.innerHTML && !ue.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function b(e, n) {
            var i, s, o = 0,
                r = typeof e.getElementsByTagName !== G ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== G ? e.querySelectorAll(n || "*") : t;
            if (!r)
                for (r = [], i = e.childNodes || e; null != (s = i[o]); o++) !n || ue.nodeName(s, n) ? r.push(s) : ue.merge(r, b(s, n));
            return n === t || n && ue.nodeName(e, n) ? ue.merge([e], r) : r
        }

        function w(e) {
            tt.test(e.type) && (e.defaultChecked = e.checked)
        }

        function M(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, s = Lt.length; s--;)
                if (t = Lt[s] + n, t in e) return t;
            return i
        }

        function k(e, t) {
            return e = t || e, "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e)
        }

        function L(e, t) {
            for (var n, i, s, o = [], r = 0, a = e.length; a > r; r++) i = e[r], i.style && (o[r] = ue._data(i, "olddisplay"), n = i.style.display, t ? (o[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && k(i) && (o[r] = ue._data(i, "olddisplay", S(i.nodeName)))) : o[r] || (s = k(i), (n && "none" !== n || !s) && ue._data(i, "olddisplay", s ? n : ue.css(i, "display"))));
            for (r = 0; a > r; r++) i = e[r], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[r] || "" : "none"));
            return e
        }

        function T(e, t, n) {
            var i = _t.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function x(e, t, n, i, s) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === n && (r += ue.css(e, n + kt[o], !0, s)), i ? ("content" === n && (r -= ue.css(e, "padding" + kt[o], !0, s)), "margin" !== n && (r -= ue.css(e, "border" + kt[o] + "Width", !0, s))) : (r += ue.css(e, "padding" + kt[o], !0, s), "padding" !== n && (r += ue.css(e, "border" + kt[o] + "Width", !0, s)));
            return r
        }

        function D(e, t, n) {
            var i = !0,
                s = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = ut(e),
                r = ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, o);
            if (0 >= s || null == s) {
                if (s = ct(e, t, o), (0 > s || null == s) && (s = e.style[t]), yt.test(s)) return s;
                i = r && (ue.support.boxSizingReliable || s === e.style[t]), s = parseFloat(s) || 0
            }
            return s + x(e, t, n || (r ? "border" : "content"), i, o) + "px"
        }

        function S(e) {
            var t = J,
                n = bt[e];
            return n || (n = Y(e, t), "none" !== n && n || (dt = (dt || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (dt[0].contentWindow || dt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = Y(e, t), dt.detach()), bt[e] = n), n
        }

        function Y(e, t) {
            var n = ue(t.createElement(e)).appendTo(t.body),
                i = ue.css(n[0], "display");
            return n.remove(), i
        }

        function C(e, t, n, i) {
            var s;
            if (ue.isArray(t)) ue.each(t, function(t, s) {
                n || xt.test(e) ? i(e, s) : C(e + "[" + ("object" == typeof s ? t : "") + "]", s, n, i)
            });
            else if (n || "object" !== ue.type(t)) i(e, t);
            else
                for (s in t) C(e + "[" + s + "]", t[s], n, i)
        }

        function E(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, s = 0,
                    o = t.toLowerCase().match(pe) || [];
                if (ue.isFunction(n))
                    for (; i = o[s++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function A(e, n, i, s) {
            function o(l) {
                var d;
                return r[l] = !0, ue.each(e[l] || [], function(e, l) {
                    var u = l(n, i, s);
                    return "string" != typeof u || a || r[u] ? a ? !(d = u) : t : (n.dataTypes.unshift(u), o(u), !1)
                }), d
            }
            var r = {},
                a = e === Rt;
            return o(n.dataTypes[0]) || !r["*"] && o("*")
        }

        function j(e, n) {
            var i, s, o = ue.ajaxSettings.flatOptions || {};
            for (s in n) n[s] !== t && ((o[s] ? e : i || (i = {}))[s] = n[s]);
            return i && ue.extend(!0, e, i), e
        }

        function H(e, n, i) {
            for (var s, o, r, a, l = e.contents, d = e.dataTypes;
                "*" === d[0];) d.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
            if (o)
                for (a in l)
                    if (l[a] && l[a].test(o)) {
                        d.unshift(a);
                        break
                    } if (d[0] in i) r = d[0];
            else {
                for (a in i) {
                    if (!d[0] || e.converters[a + " " + d[0]]) {
                        r = a;
                        break
                    }
                    s || (s = a)
                }
                r = r || s
            }
            return r ? (r !== d[0] && d.unshift(r), i[r]) : t
        }

        function O(e, t, n, i) {
            var s, o, r, a, l, d = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (r in e.converters) d[r.toLowerCase()] = e.converters[r];
            for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (r = d[l + " " + o] || d["* " + o], !r)
                    for (s in d)
                        if (a = s.split(" "), a[1] === o && (r = d[l + " " + a[0]] || d["* " + a[0]])) {
                            r === !0 ? r = d[s] : d[s] !== !0 && (o = a[0], u.unshift(a[1]));
                            break
                        } if (r !== !0)
                    if (r && e["throws"]) t = r(t);
                    else try {
                        t = r(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: r ? c : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function I() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function P() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function $() {
            return setTimeout(function() {
                Kt = t
            }), Kt = ue.now()
        }

        function N(e, t, n) {
            for (var i, s = (on[t] || []).concat(on["*"]), o = 0, r = s.length; r > o; o++)
                if (i = s[o].call(n, t, e)) return i
        }

        function F(e, t, n) {
            var i, s, o = 0,
                r = sn.length,
                a = ue.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (s) return !1;
                    for (var t = Kt || $(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, o = 1 - i, r = 0, l = d.tweens.length; l > r; r++) d.tweens[r].run(o);
                    return a.notifyWith(e, [d, o, n]), 1 > o && l ? n : (a.resolveWith(e, [d]), !1)
                },
                d = a.promise({
                    elem: e,
                    props: ue.extend({}, t),
                    opts: ue.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Kt || $(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = ue.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                        return d.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? d.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; i > n; n++) d.tweens[n].run(1);
                        return t ? a.resolveWith(e, [d, t]) : a.rejectWith(e, [d, t]), this
                    }
                }),
                u = d.props;
            for (W(u, d.opts.specialEasing); r > o; o++)
                if (i = sn[o].call(d, e, u, d.opts)) return i;
            return ue.map(u, N, d), ue.isFunction(d.opts.start) && d.opts.start.call(e, d), ue.fx.timer(ue.extend(l, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
        }

        function W(e, t) {
            var n, i, s, o, r;
            for (n in e)
                if (i = ue.camelCase(n), s = t[i], o = e[n], ue.isArray(o) && (s = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), r = ue.cssHooks[i], r && "expand" in r) {
                    o = r.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = s)
                } else t[i] = s
        }

        function z(e, t, n) {
            var i, s, o, r, a, l, d = this,
                u = {},
                c = e.style,
                p = e.nodeType && k(e),
                h = ue._data(e, "fxshow");
            n.queue || (a = ue._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, d.always(function() {
                d.always(function() {
                    a.unqueued--, ue.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], "inline" === ue.css(e, "display") && "none" === ue.css(e, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? c.zoom = 1 : c.display = "inline-block")), n.overflow && (c.overflow = "hidden", ue.support.shrinkWrapBlocks || d.always(function() {
                c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (s = t[i], en.exec(s)) {
                    if (delete t[i], o = o || "toggle" === s, s === (p ? "hide" : "show")) continue;
                    u[i] = h && h[i] || ue.style(e, i)
                } if (!ue.isEmptyObject(u)) {
                h ? "hidden" in h && (p = h.hidden) : h = ue._data(e, "fxshow", {}), o && (h.hidden = !p), p ? ue(e).show() : d.done(function() {
                    ue(e).hide()
                }), d.done(function() {
                    var t;
                    ue._removeData(e, "fxshow");
                    for (t in u) ue.style(e, t, u[t])
                });
                for (i in u) r = N(p ? h[i] : 0, i, d), i in h || (h[i] = r.start, p && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function R(e, t, n, i, s) {
            return new R.prototype.init(e, t, n, i, s)
        }

        function q(e, t) {
            var n, i = {
                    height: e
                },
                s = 0;
            for (t = t ? 1 : 0; 4 > s; s += 2 - t) n = kt[s], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function B(e) {
            return ue.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var U, V, G = typeof t,
            X = e.location,
            J = e.document,
            Q = J.documentElement,
            K = e.jQuery,
            Z = e.$,
            ee = {},
            te = [],
            ne = "1.10.2",
            ie = te.concat,
            se = te.push,
            oe = te.slice,
            re = te.indexOf,
            ae = ee.toString,
            le = ee.hasOwnProperty,
            de = ne.trim,
            ue = function(e, t) {
                return new ue.fn.init(e, t, V)
            },
            ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            pe = /\S+/g,
            he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            me = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ge = /^[\],:{}\s]*$/,
            _e = /(?:^|:|,)(?:\s*\[)+/g,
            ye = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            ve = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            be = /^-ms-/,
            we = /-([\da-z])/gi,
            Me = function(e, t) {
                return t.toUpperCase()
            },
            ke = function(e) {
                (J.addEventListener || "load" === e.type || "complete" === J.readyState) && (Le(), ue.ready())
            },
            Le = function() {
                J.addEventListener ? (J.removeEventListener("DOMContentLoaded", ke, !1), e.removeEventListener("load", ke, !1)) : (J.detachEvent("onreadystatechange", ke), e.detachEvent("onload", ke))
            };
        ue.fn = ue.prototype = {
                jquery: ne,
                constructor: ue,
                init: function(e, n, i) {
                    var s, o;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (s = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : fe.exec(e), !s || !s[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        if (s[1]) {
                            if (n = n instanceof ue ? n[0] : n, ue.merge(this, ue.parseHTML(s[1], n && n.nodeType ? n.ownerDocument || n : J, !0)), me.test(s[1]) && ue.isPlainObject(n))
                                for (s in n) ue.isFunction(this[s]) ? this[s](n[s]) : this.attr(s, n[s]);
                            return this
                        }
                        if (o = J.getElementById(s[2]), o && o.parentNode) {
                            if (o.id !== s[2]) return i.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = J, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ue.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ue.makeArray(e, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return oe.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e) {
                    var t = ue.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return ue.each(this, e, t)
                },
                ready: function(e) {
                    return ue.ready.promise().done(e), this
                },
                slice: function() {
                    return this.pushStack(oe.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                map: function(e) {
                    return this.pushStack(ue.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: se,
                sort: [].sort,
                splice: [].splice
            }, ue.fn.init.prototype = ue.fn, ue.extend = ue.fn.extend = function() {
                var e, n, i, s, o, r, a = arguments[0] || {},
                    l = 1,
                    d = arguments.length,
                    u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ue.isFunction(a) || (a = {}), d === l && (a = this, --l); d > l; l++)
                    if (null != (o = arguments[l]))
                        for (s in o) e = a[s], i = o[s], a !== i && (u && i && (ue.isPlainObject(i) || (n = ue.isArray(i))) ? (n ? (n = !1, r = e && ue.isArray(e) ? e : []) : r = e && ue.isPlainObject(e) ? e : {}, a[s] = ue.extend(u, r, i)) : i !== t && (a[s] = i));
                return a
            }, ue.extend({
                expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
                noConflict: function(t) {
                    return e.$ === ue && (e.$ = Z), t && e.jQuery === ue && (e.jQuery = K), ue
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ue.readyWait++ : ue.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 ? !--ue.readyWait : !ue.isReady) {
                        if (!J.body) return setTimeout(ue.ready);
                        ue.isReady = !0, e !== !0 && --ue.readyWait > 0 || (U.resolveWith(J, [ue]), ue.fn.trigger && ue(J).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === ue.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === ue.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[ae.call(e)] || "object" : typeof e
                },
                isPlainObject: function(e) {
                    var n;
                    if (!e || "object" !== ue.type(e) || e.nodeType || ue.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (i) {
                        return !1
                    }
                    if (ue.support.ownLast)
                        for (n in e) return le.call(e, n);
                    for (n in e);
                    return n === t || le.call(e, n)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw Error(e)
                },
                parseHTML: function(e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || J;
                    var i = me.exec(e),
                        s = !n && [];
                    return i ? [t.createElement(i[1])] : (i = ue.buildFragment([e], t, s), s && ue(s).remove(), ue.merge([], i.childNodes))
                },
                parseJSON: function(n) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ue.trim(n), n && ge.test(n.replace(ye, "@").replace(ve, "]").replace(_e, ""))) ? Function("return " + n)() : (ue.error("Invalid JSON: " + n), t)
                },
                parseXML: function(n) {
                    var i, s;
                    if (!n || "string" != typeof n) return null;
                    try {
                        e.DOMParser ? (s = new DOMParser, i = s.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (o) {
                        i = t
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(t) {
                    t && ue.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(be, "ms-").replace(we, Me)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, i) {
                    var s, o = 0,
                        r = e.length,
                        a = n(e);
                    if (i) {
                        if (a)
                            for (; r > o && (s = t.apply(e[o], i), s !== !1); o++);
                        else
                            for (o in e)
                                if (s = t.apply(e[o], i), s === !1) break
                    } else if (a)
                        for (; r > o && (s = t.call(e[o], o, e[o]), s !== !1); o++);
                    else
                        for (o in e)
                            if (s = t.call(e[o], o, e[o]), s === !1) break;
                    return e
                },
                trim: de && !de.call("\ufeff ") ? function(e) {
                    return null == e ? "" : de.call(e)
                } : function(e) {
                    return null == e ? "" : (e + "").replace(he, "")
                },
                makeArray: function(e, t) {
                    var i = t || [];
                    return null != e && (n(Object(e)) ? ue.merge(i, "string" == typeof e ? [e] : e) : se.call(i, e)), i
                },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (re) return re.call(t, e, n);
                        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var i = n.length,
                        s = e.length,
                        o = 0;
                    if ("number" == typeof i)
                        for (; i > o; o++) e[s++] = n[o];
                    else
                        for (; n[o] !== t;) e[s++] = n[o++];
                    return e.length = s, e
                },
                grep: function(e, t, n) {
                    var i, s = [],
                        o = 0,
                        r = e.length;
                    for (n = !!n; r > o; o++) i = !!t(e[o], o), n !== i && s.push(e[o]);
                    return s
                },
                map: function(e, t, i) {
                    var s, o = 0,
                        r = e.length,
                        a = n(e),
                        l = [];
                    if (a)
                        for (; r > o; o++) s = t(e[o], o, i), null != s && (l[l.length] = s);
                    else
                        for (o in e) s = t(e[o], o, i), null != s && (l[l.length] = s);
                    return ie.apply([], l)
                },
                guid: 1,
                proxy: function(e, n) {
                    var i, s, o;
                    return "string" == typeof n && (o = e[n], n = e, e = o), ue.isFunction(e) ? (i = oe.call(arguments, 2), s = function() {
                        return e.apply(n || this, i.concat(oe.call(arguments)))
                    }, s.guid = e.guid = e.guid || ue.guid++, s) : t
                },
                access: function(e, n, i, s, o, r, a) {
                    var l = 0,
                        d = e.length,
                        u = null == i;
                    if ("object" === ue.type(i)) {
                        o = !0;
                        for (l in i) ue.access(e, n, l, i[l], !0, r, a)
                    } else if (s !== t && (o = !0, ue.isFunction(s) || (a = !0), u && (a ? (n.call(e, s), n = null) : (u = n, n = function(e, t, n) {
                            return u.call(ue(e), n)
                        })), n))
                        for (; d > l; l++) n(e[l], i, a ? s : s.call(e[l], l, n(e[l], i)));
                    return o ? e : u ? n.call(e) : d ? n(e[0], i) : r
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(e, t, n, i) {
                    var s, o, r = {};
                    for (o in t) r[o] = e.style[o], e.style[o] = t[o];
                    s = n.apply(e, i || []);
                    for (o in t) e.style[o] = r[o];
                    return s
                }
            }), ue.ready.promise = function(t) {
                if (!U)
                    if (U = ue.Deferred(), "complete" === J.readyState) setTimeout(ue.ready);
                    else if (J.addEventListener) J.addEventListener("DOMContentLoaded", ke, !1), e.addEventListener("load", ke, !1);
                else {
                    J.attachEvent("onreadystatechange", ke), e.attachEvent("onload", ke);
                    var n = !1;
                    try {
                        n = null == e.frameElement && J.documentElement
                    } catch (i) {}
                    n && n.doScroll && function s() {
                        if (!ue.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(s, 50)
                            }
                            Le(), ue.ready()
                        }
                    }()
                }
                return U.promise(t)
            }, ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                ee["[object " + t + "]"] = t.toLowerCase()
            }), V = ue(J),
            function(e, t) {
                function n(e, t, n, i) {
                    var s, o, r, a, l, d, u, c, f, m;
                    if ((t ? t.ownerDocument || t : F) !== A && E(t), t = t || A, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (a = t.nodeType) && 9 !== a) return [];
                    if (H && !i) {
                        if (s = ve.exec(e))
                            if (r = s[1]) {
                                if (9 === a) {
                                    if (o = t.getElementById(r), !o || !o.parentNode) return n;
                                    if (o.id === r) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(r)) && $(t, o) && o.id === r) return n.push(o), n
                            } else {
                                if (s[2]) return ee.apply(n, t.getElementsByTagName(e)), n;
                                if ((r = s[3]) && k.getElementsByClassName && t.getElementsByClassName) return ee.apply(n, t.getElementsByClassName(r)), n
                            } if (k.qsa && (!O || !O.test(e))) {
                            if (c = u = N, f = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                                for (d = p(e), (u = t.getAttribute("id")) ? c = u.replace(Me, "\\$&") : t.setAttribute("id", c), c = "[id='" + c + "'] ", l = d.length; l--;) d[l] = c + h(d[l]);
                                f = he.test(e) && t.parentNode || t, m = d.join(",")
                            }
                            if (m) try {
                                return ee.apply(n, f.querySelectorAll(m)), n
                            } catch (g) {} finally {
                                u || t.removeAttribute("id")
                            }
                        }
                    }
                    return w(e.replace(de, "$1"), t, n, i)
                }

                function i() {
                    function e(n, i) {
                        return t.push(n += " ") > T.cacheLength && delete e[t.shift()], e[n] = i
                    }
                    var t = [];
                    return e
                }

                function s(e) {
                    return e[N] = !0, e
                }

                function o(e) {
                    var t = A.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function r(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function d(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function u(e) {
                    return s(function(t) {
                        return t = +t, s(function(n, i) {
                            for (var s, o = e([], n.length, t), r = o.length; r--;) n[s = o[r]] && (n[s] = !(i[s] = n[s]))
                        })
                    })
                }

                function c() {}

                function p(e, t) {
                    var i, s, o, r, a, l, d, u = q[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (a = e, l = [], d = T.preFilter; a;) {
                        (!i || (s = ce.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), i = !1, (s = pe.exec(a)) && (i = s.shift(), o.push({
                            value: i,
                            type: s[0].replace(de, " ")
                        }), a = a.slice(i.length));
                        for (r in T.filter) !(s = _e[r].exec(a)) || d[r] && !(s = d[r](s)) || (i = s.shift(), o.push({
                            value: i,
                            type: r,
                            matches: s
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return t ? a.length : a ? n.error(e) : q(e, l).slice(0)
                }

                function h(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function f(e, t, n) {
                    var i = t.dir,
                        s = n && "parentNode" === i,
                        o = z++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || s) return e(t, n, o)
                    } : function(t, n, r) {
                        var a, l, d, u = W + " " + o;
                        if (r) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || s) && e(t, n, r)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || s)
                                    if (d = t[N] || (t[N] = {}), (l = d[i]) && l[0] === u) {
                                        if ((a = l[1]) === !0 || a === L) return a === !0
                                    } else if (l = d[i] = [u], l[1] = e(t, n, r) || L, l[1] === !0) return !0
                    }
                }

                function m(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var s = e.length; s--;)
                            if (!e[s](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, t, n, i, s) {
                    for (var o, r = [], a = 0, l = e.length, d = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, s)) && (r.push(o), d && t.push(a));
                    return r
                }

                function _(e, t, n, i, o, r) {
                    return i && !i[N] && (i = _(i)), o && !o[N] && (o = _(o, r)), s(function(s, r, a, l) {
                        var d, u, c, p = [],
                            h = [],
                            f = r.length,
                            m = s || b(t || "*", a.nodeType ? [a] : a, []),
                            _ = !e || !s && t ? m : g(m, p, e, a, l),
                            y = n ? o || (s ? e : f || i) ? [] : r : _;
                        if (n && n(_, y, a, l), i)
                            for (d = g(y, h), i(d, [], a, l), u = d.length; u--;)(c = d[u]) && (y[h[u]] = !(_[h[u]] = c));
                        if (s) {
                            if (o || e) {
                                if (o) {
                                    for (d = [], u = y.length; u--;)(c = y[u]) && d.push(_[u] = c);
                                    o(null, y = [], d, l)
                                }
                                for (u = y.length; u--;)(c = y[u]) && (d = o ? ne.call(s, c) : p[u]) > -1 && (s[d] = !(r[d] = c))
                            }
                        } else y = g(y === r ? y.splice(f, y.length) : y), o ? o(null, r, y, l) : ee.apply(r, y)
                    })
                }

                function y(e) {
                    for (var t, n, i, s = e.length, o = T.relative[e[0].type], r = o || T.relative[" "], a = o ? 1 : 0, l = f(function(e) {
                            return e === t
                        }, r, !0), d = f(function(e) {
                            return ne.call(t, e) > -1
                        }, r, !0), u = [function(e, n, i) {
                            return !o && (i || n !== Y) || ((t = n).nodeType ? l(e, n, i) : d(e, n, i))
                        }]; s > a; a++)
                        if (n = T.relative[e[a].type]) u = [f(m(u), n)];
                        else {
                            if (n = T.filter[e[a].type].apply(null, e[a].matches), n[N]) {
                                for (i = ++a; s > i && !T.relative[e[i].type]; i++);
                                return _(a > 1 && m(u), a > 1 && h(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(de, "$1"), n, i > a && y(e.slice(a, i)), s > i && y(e = e.slice(i)), s > i && h(e))
                            }
                            u.push(n)
                        } return m(u)
                }

                function v(e, t) {
                    var i = 0,
                        o = t.length > 0,
                        r = e.length > 0,
                        a = function(s, a, l, d, u) {
                            var c, p, h, f = [],
                                m = 0,
                                _ = "0",
                                y = s && [],
                                v = null != u,
                                b = Y,
                                w = s || r && T.find.TAG("*", u && a.parentNode || a),
                                M = W += null == b ? 1 : Math.random() || .1;
                            for (v && (Y = a !== A && a, L = i); null != (c = w[_]); _++) {
                                if (r && c) {
                                    for (p = 0; h = e[p++];)
                                        if (h(c, a, l)) {
                                            d.push(c);
                                            break
                                        } v && (W = M, L = ++i)
                                }
                                o && ((c = !h && c) && m--, s && y.push(c))
                            }
                            if (m += _, o && _ !== m) {
                                for (p = 0; h = t[p++];) h(y, f, a, l);
                                if (s) {
                                    if (m > 0)
                                        for (; _--;) y[_] || f[_] || (f[_] = K.call(d));
                                    f = g(f)
                                }
                                ee.apply(d, f), v && !s && f.length > 0 && m + t.length > 1 && n.uniqueSort(d)
                            }
                            return v && (W = M, Y = b), y
                        };
                    return o ? s(a) : a
                }

                function b(e, t, i) {
                    for (var s = 0, o = t.length; o > s; s++) n(e, t[s], i);
                    return i
                }

                function w(e, t, n, i) {
                    var s, o, r, a, l, d = p(e);
                    if (!i && 1 === d.length) {
                        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && k.getById && 9 === t.nodeType && H && T.relative[o[1].type]) {
                            if (t = (T.find.ID(r.matches[0].replace(ke, Le), t) || [])[0], !t) return n;
                            e = e.slice(o.shift().value.length)
                        }
                        for (s = _e.needsContext.test(e) ? 0 : o.length; s-- && (r = o[s], !T.relative[a = r.type]);)
                            if ((l = T.find[a]) && (i = l(r.matches[0].replace(ke, Le), he.test(o[0].type) && t.parentNode || t))) {
                                if (o.splice(s, 1), e = i.length && h(o), !e) return ee.apply(n, i), n;
                                break
                            }
                    }
                    return S(e, d)(i, t, !H, n, he.test(e)), n
                }
                var M, k, L, T, x, D, S, Y, C, E, A, j, H, O, I, P, $, N = "sizzle" + -new Date,
                    F = e.document,
                    W = 0,
                    z = 0,
                    R = i(),
                    q = i(),
                    B = i(),
                    U = !1,
                    V = function(e, t) {
                        return e === t ? (U = !0, 0) : 0
                    },
                    G = typeof t,
                    X = 1 << 31,
                    J = {}.hasOwnProperty,
                    Q = [],
                    K = Q.pop,
                    Z = Q.push,
                    ee = Q.push,
                    te = Q.slice,
                    ne = Q.indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    se = "[\\x20\\t\\r\\n\\f]",
                    oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    re = oe.replace("w", "w#"),
                    ae = "\\[" + se + "*(" + oe + ")" + se + "*(?:([*^$|!~]?=)" + se + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + se + "*\\]",
                    le = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)",
                    de = RegExp("^" + se + "+|((?:^|[^\\\\])(?:\\\\.)*)" + se + "+$", "g"),
                    ce = RegExp("^" + se + "*," + se + "*"),
                    pe = RegExp("^" + se + "*([>+~]|" + se + ")" + se + "*"),
                    he = RegExp(se + "*[+~]"),
                    fe = RegExp("=" + se + "*([^\\]'\"]*)" + se + "*\\]", "g"),
                    me = RegExp(le),
                    ge = RegExp("^" + re + "$"),
                    _e = {
                        ID: RegExp("^#(" + oe + ")"),
                        CLASS: RegExp("^\\.(" + oe + ")"),
                        TAG: RegExp("^(" + oe.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + ae),
                        PSEUDO: RegExp("^" + le),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + se + "*(even|odd|(([+-]|)(\\d*)n|)" + se + "*(?:([+-]|)" + se + "*(\\d+)|))" + se + "*\\)|)", "i"),
                        bool: RegExp("^(?:" + ie + ")$", "i"),
                        needsContext: RegExp("^" + se + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + se + "*((?:-\\d)?\\d*)" + se + "*\\)|)(?=[^-]|$)", "i")
                    },
                    ye = /^[^{]+\{\s*\[native \w/,
                    ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    be = /^(?:input|select|textarea|button)$/i,
                    we = /^h\d$/i,
                    Me = /'|\\/g,
                    ke = RegExp("\\\\([\\da-f]{1,6}" + se + "?|(" + se + ")|.)", "ig"),
                    Le = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                    };
                try {
                    ee.apply(Q = te.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
                } catch (Te) {
                    ee = {
                        apply: Q.length ? function(e, t) {
                            Z.apply(e, te.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                D = n.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, k = n.support = {}, E = n.setDocument = function(e) {
                    var n = e ? e.ownerDocument || e : F,
                        i = n.defaultView;
                    return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, j = n.documentElement, H = !D(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                        E()
                    }), k.attributes = o(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), k.getElementsByTagName = o(function(e) {
                        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                    }), k.getElementsByClassName = o(function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), k.getById = o(function(e) {
                        return j.appendChild(e).id = N, !n.getElementsByName || !n.getElementsByName(N).length
                    }), k.getById ? (T.find.ID = function(e, t) {
                        if (typeof t.getElementById !== G && H) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, T.filter.ID = function(e) {
                        var t = e.replace(ke, Le);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete T.find.ID, T.filter.ID = function(e) {
                        var t = e.replace(ke, Le);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), T.find.TAG = k.getElementsByTagName ? function(e, n) {
                        return typeof n.getElementsByTagName !== G ? n.getElementsByTagName(e) : t
                    } : function(e, t) {
                        var n, i = [],
                            s = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[s++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, T.find.CLASS = k.getElementsByClassName && function(e, n) {
                        return typeof n.getElementsByClassName !== G && H ? n.getElementsByClassName(e) : t
                    }, I = [], O = [], (k.qsa = ye.test(n.querySelectorAll)) && (o(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || O.push("\\[" + se + "*(?:value|" + ie + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
                    }), o(function(e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && O.push("[*^$]=" + se + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                    })), (k.matchesSelector = ye.test(P = j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function(e) {
                        k.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), I.push("!=", le)
                    }), O = O.length && RegExp(O.join("|")), I = I.length && RegExp(I.join("|")), $ = ye.test(j.contains) || j.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, V = j.compareDocumentPosition ? function(e, t) {
                        if (e === t) return U = !0, 0;
                        var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                        return i ? 1 & i || !k.sortDetached && t.compareDocumentPosition(e) === i ? e === n || $(F, e) ? -1 : t === n || $(F, t) ? 1 : C ? ne.call(C, e) - ne.call(C, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function(e, t) {
                        var i, s = 0,
                            o = e.parentNode,
                            r = t.parentNode,
                            l = [e],
                            d = [t];
                        if (e === t) return U = !0, 0;
                        if (!o || !r) return e === n ? -1 : t === n ? 1 : o ? -1 : r ? 1 : C ? ne.call(C, e) - ne.call(C, t) : 0;
                        if (o === r) return a(e, t);
                        for (i = e; i = i.parentNode;) l.unshift(i);
                        for (i = t; i = i.parentNode;) d.unshift(i);
                        for (; l[s] === d[s];) s++;
                        return s ? a(l[s], d[s]) : l[s] === F ? -1 : d[s] === F ? 1 : 0
                    }, n) : A
                }, n.matches = function(e, t) {
                    return n(e, null, null, t)
                }, n.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== A && E(e), t = t.replace(fe, "='$1']"), !(!k.matchesSelector || !H || I && I.test(t) || O && O.test(t))) try {
                        var i = P.call(e, t);
                        if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (s) {}
                    return n(t, A, null, [e]).length > 0
                }, n.contains = function(e, t) {
                    return (e.ownerDocument || e) !== A && E(e), $(e, t)
                }, n.attr = function(e, n) {
                    (e.ownerDocument || e) !== A && E(e);
                    var i = T.attrHandle[n.toLowerCase()],
                        s = i && J.call(T.attrHandle, n.toLowerCase()) ? i(e, n, !H) : t;
                    return s === t ? k.attributes || !H ? e.getAttribute(n) : (s = e.getAttributeNode(n)) && s.specified ? s.value : null : s
                }, n.error = function(e) {
                    throw Error("Syntax error, unrecognized expression: " + e)
                }, n.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        s = 0;
                    if (U = !k.detectDuplicates, C = !k.sortStable && e.slice(0), e.sort(V), U) {
                        for (; t = e[s++];) t === e[s] && (i = n.push(s));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return e
                }, x = n.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        s = e.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                        } else if (3 === s || 4 === s) return e.nodeValue
                    } else
                        for (; t = e[i]; i++) n += x(t);
                    return n
                }, T = n.selectors = {
                    cacheLength: 50,
                    createPseudo: s,
                    match: _e,
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
                        ATTR: function(e) {
                            return e[1] = e[1].replace(ke, Le), e[3] = (e[4] || e[5] || "").replace(ke, Le), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var n, i = !e[5] && e[2];
                            return _e.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && me.test(i) && (n = p(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(ke, Le).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = R[e + " "];
                            return t || (t = RegExp("(^|" + se + ")" + e + "(" + se + "|$)")) && R(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, i) {
                            return function(s) {
                                var o = n.attr(s, e);
                                return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, i, s) {
                            var o = "nth" !== e.slice(0, 3),
                                r = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === i && 0 === s ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var d, u, c, p, h, f, m = o !== r ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    _ = a && t.nodeName.toLowerCase(),
                                    y = !l && !a;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (c = t; c = c[m];)
                                                if (a ? c.nodeName.toLowerCase() === _ : 1 === c.nodeType) return !1;
                                            f = m = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                        for (u = g[N] || (g[N] = {}), d = u[e] || [], h = d[0] === W && d[1], p = d[0] === W && d[2], c = h && g.childNodes[h]; c = ++h && c && c[m] || (p = h = 0) || f.pop();)
                                            if (1 === c.nodeType && ++p && c === t) {
                                                u[e] = [W, h, p];
                                                break
                                            }
                                    } else if (y && (d = (t[N] || (t[N] = {}))[e]) && d[0] === W) p = d[1];
                                    else
                                        for (;
                                            (c = ++h && c && c[m] || (p = h = 0) || f.pop()) && ((a ? c.nodeName.toLowerCase() !== _ : 1 !== c.nodeType) || !++p || (y && ((c[N] || (c[N] = {}))[e] = [W, p]), c !== t)););
                                    return p -= s, p === i || 0 === p % i && p / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return o[N] ? o(t) : o.length > 1 ? (i = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? s(function(e, n) {
                                for (var i, s = o(e, t), r = s.length; r--;) i = ne.call(e, s[r]), e[i] = !(n[i] = s[r])
                            }) : function(e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: s(function(e) {
                            var t = [],
                                n = [],
                                i = S(e.replace(de, "$1"));
                            return i[N] ? s(function(e, t, n, s) {
                                for (var o, r = i(e, null, s, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, s, o) {
                                return t[0] = e, i(t, null, o, n), !n.pop()
                            }
                        }),
                        has: s(function(e) {
                            return function(t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: s(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                            }
                        }),
                        lang: s(function(e) {
                            return ge.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(ke, Le).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === j
                        },
                        focus: function(e) {
                            return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function(e) {
                            return we.test(e.nodeName)
                        },
                        input: function(e) {
                            return be.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: u(function() {
                            return [0]
                        }),
                        last: u(function(e, t) {
                            return [t - 1]
                        }),
                        eq: u(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: u(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: u(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: u(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: u(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; t > ++i;) e.push(i);
                            return e
                        })
                    }
                }, T.pseudos.nth = T.pseudos.eq;
                for (M in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) T.pseudos[M] = l(M);
                for (M in {
                        submit: !0,
                        reset: !0
                    }) T.pseudos[M] = d(M);
                c.prototype = T.filters = T.pseudos, T.setFilters = new c, S = n.compile = function(e, t) {
                    var n, i = [],
                        s = [],
                        o = B[e + " "];
                    if (!o) {
                        for (t || (t = p(e)), n = t.length; n--;) o = y(t[n]), o[N] ? i.push(o) : s.push(o);
                        o = B(e, v(s, i))
                    }
                    return o
                }, k.sortStable = N.split("").sort(V).join("") === N, k.detectDuplicates = U, E(), k.sortDetached = o(function(e) {
                    return 1 & e.compareDocumentPosition(A.createElement("div"))
                }), o(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || r("type|href|height|width", function(e, n, i) {
                    return i ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
                }), k.attributes && o(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || r("value", function(e, n, i) {
                    return i || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
                }), o(function(e) {
                    return null == e.getAttribute("disabled")
                }) || r(ie, function(e, n, i) {
                    var s;
                    return i ? t : (s = e.getAttributeNode(n)) && s.specified ? s.value : e[n] === !0 ? n.toLowerCase() : null
                }), ue.find = n, ue.expr = n.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = n.uniqueSort, ue.text = n.getText, ue.isXMLDoc = n.isXML, ue.contains = n.contains
            }(e);
        var Te = {};
        ue.Callbacks = function(e) {
            e = "string" == typeof e ? Te[e] || i(e) : ue.extend({}, e);
            var n, s, o, r, a, l, d = [],
                u = !e.once && [],
                c = function(t) {
                    for (s = e.memory && t, o = !0, a = l || 0, l = 0, r = d.length, n = !0; d && r > a; a++)
                        if (d[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            s = !1;
                            break
                        } n = !1, d && (u ? u.length && c(u.shift()) : s ? d = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (d) {
                            var t = d.length;
                            ! function i(t) {
                                ue.each(t, function(t, n) {
                                    var s = ue.type(n);
                                    "function" === s ? e.unique && p.has(n) || d.push(n) : n && n.length && "string" !== s && i(n)
                                })
                            }(arguments), n ? r = d.length : s && (l = t, c(s))
                        }
                        return this
                    },
                    remove: function() {
                        return d && ue.each(arguments, function(e, t) {
                            for (var i;
                                (i = ue.inArray(t, d, i)) > -1;) d.splice(i, 1), n && (r >= i && r--, a >= i && a--)
                        }), this
                    },
                    has: function(e) {
                        return e ? ue.inArray(e, d) > -1 : !(!d || !d.length)
                    },
                    empty: function() {
                        return d = [], r = 0, this
                    },
                    disable: function() {
                        return d = u = s = t, this
                    },
                    disabled: function() {
                        return !d
                    },
                    lock: function() {
                        return u = t, s || p.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(e, t) {
                        return !d || o && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return p
        }, ue.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", ue.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ue.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ue.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return ue.Deferred(function(n) {
                                ue.each(t, function(t, o) {
                                    var r = o[0],
                                        a = ue.isFunction(e[t]) && e[t];
                                    s[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && ue.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ue.extend(e, i) : i
                        }
                    },
                    s = {};
                return i.pipe = i.then, ue.each(t, function(e, o) {
                    var r = o[2],
                        a = o[3];
                    i[o[1]] = r.add, a && r.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), s[o[0]] = function() {
                        return s[o[0] + "With"](this === s ? i : this, arguments), this
                    }, s[o[0] + "With"] = r.fireWith
                }), i.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var t, n, i, s = 0,
                    o = oe.call(arguments),
                    r = o.length,
                    a = 1 !== r || e && ue.isFunction(e.promise) ? r : 0,
                    l = 1 === a ? e : ue.Deferred(),
                    d = function(e, n, i) {
                        return function(s) {
                            n[e] = this, i[e] = arguments.length > 1 ? oe.call(arguments) : s, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (r > 1)
                    for (t = Array(r), n = Array(r), i = Array(r); r > s; s++) o[s] && ue.isFunction(o[s].promise) ? o[s].promise().done(d(s, i, o)).fail(l.reject).progress(d(s, n, t)) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        }), ue.support = function(t) {
            var n, i, s, o, r, a, l, d, u, c = J.createElement("div");
            if (c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = c.getElementsByTagName("*") || [], i = c.getElementsByTagName("a")[0], !i || !i.style || !n.length) return t;
            o = J.createElement("select"), a = o.appendChild(J.createElement("option")), s = c.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== c.className, t.leadingWhitespace = 3 === c.firstChild.nodeType, t.tbody = !c.getElementsByTagName("tbody").length, t.htmlSerialize = !!c.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")), t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !!i.style.cssFloat, t.checkOn = !!s.value, t.optSelected = a.selected, t.enctype = !!J.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !a.disabled;
            try {
                delete c.test
            } catch (p) {
                t.deleteExpando = !1
            }
            s = J.createElement("input"), s.setAttribute("value", ""), t.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), r = J.createDocumentFragment(), r.appendChild(s), t.appendChecked = s.checked, t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, c.attachEvent && (c.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), c.cloneNode(!0).click());
            for (u in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || c.attributes[l].expando === !1;
            c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === c.style.backgroundClip;
            for (u in ue(t)) break;
            return t.ownLast = "0" !== u, ue(function() {
                var n, i, s, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    r = J.getElementsByTagName("body")[0];
                r && (n = J.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(n).appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = c.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = d && 0 === s[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ue.swap(r, null != r.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    t.boxSizing = 4 === c.offsetWidth
                }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(c, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(c, null) || {
                    width: "4px"
                }).width, i = c.appendChild(J.createElement("div")), i.style.cssText = c.style.cssText = o, i.style.marginRight = i.style.width = "0", c.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof c.style.zoom !== G && (c.innerHTML = "", c.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== c.offsetWidth, t.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(n), n = c = s = i = null)
            }), n = o = r = a = i = s = null, t
        }({});
        var xe = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            De = /([A-Z])/g;
        ue.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? ue.cache[e[ue.expando]] : e[ue.expando], !!e && !a(e)
            },
            data: function(e, t, n) {
                return s(e, t, n)
            },
            removeData: function(e, t) {
                return o(e, t)
            },
            _data: function(e, t, n) {
                return s(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return o(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                var t = e.nodeName && ue.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), ue.fn.extend({
            data: function(e, n) {
                var i, s, o = null,
                    a = 0,
                    l = this[0];
                if (e === t) {
                    if (this.length && (o = ue.data(l), 1 === l.nodeType && !ue._data(l, "parsedAttrs"))) {
                        for (i = l.attributes; i.length > a; a++) s = i[a].name, 0 === s.indexOf("data-") && (s = ue.camelCase(s.slice(5)), r(l, s, o[s]));
                        ue._data(l, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    ue.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    ue.data(this, e, n)
                }) : l ? r(l, e, ue.data(l, e)) : null
            },
            removeData: function(e) {
                return this.each(function() {
                    ue.removeData(this, e)
                })
            }
        }), ue.extend({
            queue: function(e, n, i) {
                var s;
                return e ? (n = (n || "fx") + "queue", s = ue._data(e, n), i && (!s || ue.isArray(i) ? s = ue._data(e, n, ue.makeArray(i)) : s.push(i)), s || []) : t
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ue.queue(e, t),
                    i = n.length,
                    s = n.shift(),
                    o = ue._queueHooks(e, t),
                    r = function() {
                        ue.dequeue(e, t)
                    };
                "inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete o.stop, s.call(e, r, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ue._data(e, n) || ue._data(e, n, {
                    empty: ue.Callbacks("once memory").add(function() {
                        ue._removeData(e, t + "queue"), ue._removeData(e, n)
                    })
                })
            }
        }), ue.fn.extend({
            queue: function(e, n) {
                var i = 2;
                return "string" != typeof e && (n = e, e = "fx", i--), i > arguments.length ? ue.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = ue.queue(this, e, n);
                    ue._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ue.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ue.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = ue.fx ? ue.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var i, s = 1,
                    o = ue.Deferred(),
                    r = this,
                    a = this.length,
                    l = function() {
                        --s || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) i = ue._data(r[a], e + "queueHooks"), i && i.empty && (s++, i.empty.add(l));
                return l(), o.promise(n)
            }
        });
        var Se, Ye, Ce = /[\t\r\n\f]/g,
            Ee = /\r/g,
            Ae = /^(?:input|select|textarea|button|object)$/i,
            je = /^(?:a|area)$/i,
            He = /^(?:checked|selected)$/i,
            Oe = ue.support.getSetAttribute,
            Ie = ue.support.input;
        ue.fn.extend({
            attr: function(e, t) {
                return ue.access(this, ue.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ue.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ue.access(this, ue.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ue.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, i, s, o, r = 0,
                    a = this.length,
                    l = "string" == typeof e && e;
                if (ue.isFunction(e)) return this.each(function(t) {
                    ue(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(pe) || []; a > r; r++)
                        if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ce, " ") : " ")) {
                            for (o = 0; s = t[o++];) 0 > i.indexOf(" " + s + " ") && (i += s + " ");
                            n.className = ue.trim(i)
                        } return this
            },
            removeClass: function(e) {
                var t, n, i, s, o, r = 0,
                    a = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (ue.isFunction(e)) return this.each(function(t) {
                    ue(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(pe) || []; a > r; r++)
                        if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ce, " ") : "")) {
                            for (o = 0; s = t[o++];)
                                for (; i.indexOf(" " + s + " ") >= 0;) i = i.replace(" " + s + " ", " ");
                            n.className = e ? ue.trim(i) : ""
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ue.isFunction(e) ? this.each(function(n) {
                    ue(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, s = ue(this), o = e.match(pe) || []; t = o[i++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                    else(n === G || "boolean" === n) && (this.className && ue._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ue._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ce, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, i, s, o = this[0];
                return arguments.length ? (s = ue.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = s ? e.call(this, n, ue(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), i = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
                })) : o ? (i = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Ee, "") : null == n ? "" : n)) : void 0
            }
        }), ue.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ue.find.attr(e, "value");
                        return null != t ? t : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, s = e.selectedIndex, o = "select-one" === e.type || 0 > s, r = o ? null : [], a = o ? s + 1 : i.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== s || (ue.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ue.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ue(n).val(), o) return t;
                                r.push(t)
                            } return r
                    },
                    set: function(e, t) {
                        for (var n, i, s = e.options, o = ue.makeArray(t), r = s.length; r--;) i = s[r], (i.selected = ue.inArray(ue(i).val(), o) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            },
            attr: function(e, n, i) {
                var s, o, r = e.nodeType;
                return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === G ? ue.prop(e, n, i) : (1 === r && ue.isXMLDoc(e) || (n = n.toLowerCase(), s = ue.attrHooks[n] || (ue.expr.match.bool.test(n) ? Ye : Se)), i === t ? s && "get" in s && null !== (o = s.get(e, n)) ? o : (o = ue.find.attr(e, n), null == o ? t : o) : null !== i ? s && "set" in s && (o = s.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : (ue.removeAttr(e, n), t)) : void 0
            },
            removeAttr: function(e, t) {
                var n, i, s = 0,
                    o = t && t.match(pe);
                if (o && 1 === e.nodeType)
                    for (; n = o[s++];) i = ue.propFix[n] || n, ue.expr.match.bool.test(n) ? Ie && Oe || !He.test(n) ? e[i] = !1 : e[ue.camelCase("default-" + n)] = e[i] = !1 : ue.attr(e, n, ""), e.removeAttribute(Oe ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ue.support.radioValue && "radio" === t && ue.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, n, i) {
                var s, o, r, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? (r = 1 !== a || !ue.isXMLDoc(e), r && (n = ue.propFix[n] || n, o = ue.propHooks[n]), i !== t ? o && "set" in o && (s = o.set(e, i, n)) !== t ? s : e[n] = i : o && "get" in o && null !== (s = o.get(e, n)) ? s : e[n]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ue.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ae.test(e.nodeName) || je.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), Ye = {
            set: function(e, t, n) {
                return t === !1 ? ue.removeAttr(e, n) : Ie && Oe || !He.test(n) ? e.setAttribute(!Oe && ue.propFix[n] || n, n) : e[ue.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ue.each(ue.expr.match.bool.source.match(/\w+/g), function(e, n) {
            var i = ue.expr.attrHandle[n] || ue.find.attr;
            ue.expr.attrHandle[n] = Ie && Oe || !He.test(n) ? function(e, n, s) {
                var o = ue.expr.attrHandle[n],
                    r = s ? t : (ue.expr.attrHandle[n] = t) != i(e, n, s) ? n.toLowerCase() : null;
                return ue.expr.attrHandle[n] = o, r
            } : function(e, n, i) {
                return i ? t : e[ue.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), Ie && Oe || (ue.attrHooks.value = {
            set: function(e, n, i) {
                return ue.nodeName(e, "input") ? (e.defaultValue = n, t) : Se && Se.set(e, n, i)
            }
        }), Oe || (Se = {
            set: function(e, n, i) {
                var s = e.getAttributeNode(i);
                return s || e.setAttributeNode(s = e.ownerDocument.createAttribute(i)), s.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
            }
        }, ue.expr.attrHandle.id = ue.expr.attrHandle.name = ue.expr.attrHandle.coords = function(e, n, i) {
            var s;
            return i ? t : (s = e.getAttributeNode(n)) && "" !== s.value ? s.value : null
        }, ue.valHooks.button = {
            get: function(e, n) {
                var i = e.getAttributeNode(n);
                return i && i.specified ? i.value : t
            },
            set: Se.set
        }, ue.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Se.set(e, "" === t ? !1 : t, n)
            }
        }, ue.each(["width", "height"], function(e, n) {
            ue.attrHooks[n] = {
                set: function(e, i) {
                    return "" === i ? (e.setAttribute(n, "auto"), i) : t
                }
            }
        })), ue.support.hrefNormalized || ue.each(["href", "src"], function(e, t) {
            ue.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ue.support.style || (ue.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), ue.support.optSelected || (ue.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ue.propFix[this.toLowerCase()] = this
        }), ue.support.enctype || (ue.propFix.enctype = "encoding"), ue.each(["radio", "checkbox"], function() {
            ue.valHooks[this] = {
                set: function(e, n) {
                    return ue.isArray(n) ? e.checked = ue.inArray(ue(e).val(), n) >= 0 : t
                }
            }, ue.support.checkOn || (ue.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Pe = /^(?:input|select|textarea)$/i,
            $e = /^key/,
            Ne = /^(?:mouse|contextmenu)|click/,
            Fe = /^(?:focusinfocus|focusoutblur)$/,
            We = /^([^.]*)(?:\.(.+)|)$/;
        ue.event = {
            global: {},
            add: function(e, n, i, s, o) {
                var r, a, l, d, u, c, p, h, f, m, g, _ = ue._data(e);
                if (_) {
                    for (i.handler && (d = i, i = d.handler, o = d.selector), i.guid || (i.guid = ue.guid++), (a = _.events) || (a = _.events = {}), (c = _.handle) || (c = _.handle = function(e) {
                            return typeof ue === G || e && ue.event.triggered === e.type ? t : ue.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = e), n = (n || "").match(pe) || [""], l = n.length; l--;) r = We.exec(n[l]) || [], f = g = r[1], m = (r[2] || "").split(".").sort(), f && (u = ue.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = ue.event.special[f] || {}, p = ue.extend({
                        type: f,
                        origType: g,
                        data: s,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && ue.expr.match.needsContext.test(o),
                        namespace: m.join(".")
                    }, d), (h = a[f]) || (h = a[f] = [], h.delegateCount = 0, u.setup && u.setup.call(e, s, m, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), ue.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, s) {
                var o, r, a, l, d, u, c, p, h, f, m, g = ue.hasData(e) && ue._data(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(pe) || [""], d = t.length; d--;)
                        if (a = We.exec(t[d]) || [], h = m = a[1], f = (a[2] || "").split(".").sort(), h) {
                            for (c = ue.event.special[h] || {}, h = (i ? c.delegateType : c.bindType) || h, p = u[h] || [], a = a[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) r = p[o], !s && m !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (p.splice(o, 1), r.selector && p.delegateCount--, c.remove && c.remove.call(e, r));
                            l && !p.length && (c.teardown && c.teardown.call(e, f, g.handle) !== !1 || ue.removeEvent(e, h, g.handle), delete u[h])
                        } else
                            for (h in u) ue.event.remove(e, h + t[d], n, i, !0);
                    ue.isEmptyObject(u) && (delete g.handle, ue._removeData(e, "events"))
                }
            },
            trigger: function(n, i, s, o) {
                var r, a, l, d, u, c, p, h = [s || J],
                    f = le.call(n, "type") ? n.type : n,
                    m = le.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = c = s = s || J, 3 !== s.nodeType && 8 !== s.nodeType && !Fe.test(f + ue.event.triggered) && (f.indexOf(".") >= 0 && (m = f.split("."), f = m.shift(), m.sort()), a = 0 > f.indexOf(":") && "on" + f, n = n[ue.expando] ? n : new ue.Event(f, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = s), i = null == i ? [n] : ue.makeArray(i, [n]), u = ue.event.special[f] || {}, o || !u.trigger || u.trigger.apply(s, i) !== !1)) {
                    if (!o && !u.noBubble && !ue.isWindow(s)) {
                        for (d = u.delegateType || f, Fe.test(d + f) || (l = l.parentNode); l; l = l.parentNode) h.push(l), c = l;
                        c === (s.ownerDocument || J) && h.push(c.defaultView || c.parentWindow || e)
                    }
                    for (p = 0;
                        (l = h[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? d : u.bindType || f, r = (ue._data(l, "events") || {})[n.type] && ue._data(l, "handle"), r && r.apply(l, i), r = a && l[a], r && ue.acceptData(l) && r.apply && r.apply(l, i) === !1 && n.preventDefault();
                    if (n.type = f, !o && !n.isDefaultPrevented() && (!u._default || u._default.apply(h.pop(), i) === !1) && ue.acceptData(s) && a && s[f] && !ue.isWindow(s)) {
                        c = s[a], c && (s[a] = null), ue.event.triggered = f;
                        try {
                            s[f]()
                        } catch (g) {}
                        ue.event.triggered = t, c && (s[a] = c)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = ue.event.fix(e);
                var n, i, s, o, r, a = [],
                    l = oe.call(arguments),
                    d = (ue._data(this, "events") || {})[e.type] || [],
                    u = ue.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (a = ue.event.handlers.call(this, e, d), n = 0;
                        (o = a[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, r = 0;
                            (s = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, i = ((ue.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var i, s, o, r, a = [],
                    l = n.delegateCount,
                    d = e.target;
                if (l && d.nodeType && (!e.button || "click" !== e.type))
                    for (; d != this; d = d.parentNode || this)
                        if (1 === d.nodeType && (d.disabled !== !0 || "click" !== e.type)) {
                            for (o = [], r = 0; l > r; r++) s = n[r], i = s.selector + " ", o[i] === t && (o[i] = s.needsContext ? ue(i, this).index(d) >= 0 : ue.find(i, this, null, [d]).length), o[i] && o.push(s);
                            o.length && a.push({
                                elem: d,
                                handlers: o
                            })
                        } return n.length > l && a.push({
                    elem: this,
                    handlers: n.slice(l)
                }), a
            },
            fix: function(e) {
                if (e[ue.expando]) return e;
                var t, n, i, s = e.type,
                    o = e,
                    r = this.fixHooks[s];
                for (r || (this.fixHooks[s] = r = Ne.test(s) ? this.mouseHooks : $e.test(s) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, e = new ue.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || J), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var i, s, o, r = n.button,
                        a = n.fromElement;
                    return null == e.pageX && null != n.clientX && (s = e.target.ownerDocument || J, o = s.documentElement, i = s.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || r === t || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== u() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === u() && this.blur ? (this.blur(), !1) : t
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ue.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                    },
                    _default: function(e) {
                        return ue.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var s = ue.extend(new ue.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ue.event.trigger(s, null, t) : ue.event.dispatch.call(t, s), s.isDefaultPrevented() && n.preventDefault()
            }
        }, ue.removeEvent = J.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === G && (e[i] = null), e.detachEvent(i, n))
        }, ue.Event = function(e, n) {
            return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : d) : this.type = e, n && ue.extend(this, n), this.timeStamp = e && e.timeStamp || ue.now(), this[ue.expando] = !0, t) : new ue.Event(e, n)
        }, ue.Event.prototype = {
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ue.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            ue.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        s = e.relatedTarget,
                        o = e.handleObj;
                    return (!s || s !== i && !ue.contains(i, s)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ue.support.submitBubbles || (ue.event.special.submit = {
            setup: function() {
                return ue.nodeName(this, "form") ? !1 : (ue.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        i = ue.nodeName(n, "input") || ue.nodeName(n, "button") ? n.form : t;
                    i && !ue._data(i, "submitBubbles") && (ue.event.add(i, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), ue._data(i, "submitBubbles", !0))
                }), t)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ue.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return ue.nodeName(this, "form") ? !1 : (ue.event.remove(this, "._submit"), t)
            }
        }), ue.support.changeBubbles || (ue.event.special.change = {
            setup: function() {
                return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ue.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ue.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, e, !0)
                })), !1) : (ue.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Pe.test(t.nodeName) && !ue._data(t, "changeBubbles") && (ue.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ue.event.simulate("change", this.parentNode, e, !0)
                    }), ue._data(t, "changeBubbles", !0))
                }), t)
            },
            handle: function(e) {
                var n = e.target;
                return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
            },
            teardown: function() {
                return ue.event.remove(this, "._change"), !Pe.test(this.nodeName)
            }
        }), ue.support.focusinBubbles || ue.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                i = function(e) {
                    ue.event.simulate(t, e.target, ue.event.fix(e), !0)
                };
            ue.event.special[t] = {
                setup: function() {
                    0 === n++ && J.addEventListener(e, i, !0)
                },
                teardown: function() {
                    0 === --n && J.removeEventListener(e, i, !0)
                }
            }
        }), ue.fn.extend({
            on: function(e, n, i, s, o) {
                var r, a;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = t);
                    for (r in e) this.on(r, n, i, e[r], o);
                    return this
                }
                if (null == i && null == s ? (s = n, i = n = t) : null == s && ("string" == typeof n ? (s = i, i = t) : (s = i, i = n, n = t)), s === !1) s = d;
                else if (!s) return this;
                return 1 === o && (a = s, s = function(e) {
                    return ue().off(e), a.apply(this, arguments)
                }, s.guid = a.guid || (a.guid = ue.guid++)), this.each(function() {
                    ue.event.add(this, e, s, i, n)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, n, i) {
                var s, o;
                if (e && e.preventDefault && e.handleObj) return s = e.handleObj, ue(e.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = d), this.each(function() {
                    ue.event.remove(this, e, i, n)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ue.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, n) {
                var i = this[0];
                return i ? ue.event.trigger(e, n, i, !0) : t
            }
        });
        var ze = /^.[^:#\[\.,]*$/,
            Re = /^(?:parents|prev(?:Until|All))/,
            qe = ue.expr.match.needsContext,
            Be = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ue.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    s = i.length;
                if ("string" != typeof e) return this.pushStack(ue(e).filter(function() {
                    for (t = 0; s > t; t++)
                        if (ue.contains(i[t], this)) return !0
                }));
                for (t = 0; s > t; t++) ue.find(e, i[t], n);
                return n = this.pushStack(s > 1 ? ue.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            has: function(e) {
                var t, n = ue(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (ue.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(p(this, e || [], !0))
            },
            filter: function(e) {
                return this.pushStack(p(this, e || [], !1))
            },
            is: function(e) {
                return !!p(this, "string" == typeof e && qe.test(e) ? ue(e) : e || [], !1).length
            },
            closest: function(e, t) {
                for (var n, i = 0, s = this.length, o = [], r = qe.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; s > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (11 > n.nodeType && (r ? r.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
                            n = o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? ue.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ue.inArray(this[0], ue(e)) : ue.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? ue(e, t) : ue.makeArray(e && e.nodeType ? [e] : e),
                    i = ue.merge(this.get(), n);
                return this.pushStack(ue.unique(i))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ue.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ue.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ue.dir(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return ue.dir(e, "nextSibling");
            },
            prevAll: function(e) {
                return ue.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ue.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ue.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ue.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ue.sibling(e.firstChild)
            },
            contents: function(e) {
                return ue.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ue.merge([], e.childNodes)
            }
        }, function(e, t) {
            ue.fn[e] = function(n, i) {
                var s = ue.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = ue.filter(i, s)), this.length > 1 && (Be[e] || (s = ue.unique(s)), Re.test(e) && (s = s.reverse())), this.pushStack(s)
            }
        }), ue.extend({
            filter: function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ue.find.matchesSelector(i, e) ? [i] : [] : ue.find.matches(e, ue.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            },
            dir: function(e, n, i) {
                for (var s = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !ue(o).is(i));) 1 === o.nodeType && s.push(o), o = o[n];
                return s
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ve = / jQuery\d+="(?:null|\d+)"/g,
            Ge = RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
            Xe = /^\s+/,
            Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Qe = /<([\w:]+)/,
            Ke = /<tbody/i,
            Ze = /<|&#?\w+;/,
            et = /<(?:script|style|link)/i,
            tt = /^(?:checkbox|radio)$/i,
            nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            it = /^$|\/(?:java|ecma)script/i,
            st = /^true\/(.*)/,
            ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            rt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ue.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            at = h(J),
            lt = at.appendChild(J.createElement("div"));
        rt.optgroup = rt.option, rt.tbody = rt.tfoot = rt.colgroup = rt.caption = rt.thead, rt.th = rt.td, ue.fn.extend({
            text: function(e) {
                return ue.access(this, function(e) {
                    return e === t ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = f(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = f(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? ue.filter(e, this) : this, s = 0; null != (n = i[s]); s++) t || 1 !== n.nodeType || ue.cleanData(b(n)), n.parentNode && (t && ue.contains(n.ownerDocument, n) && _(b(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ue.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ue.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return ue.clone(this, e, t)
                })
            },
            html: function(e) {
                return ue.access(this, function(e) {
                    var n = this[0] || {},
                        i = 0,
                        s = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : t;
                    if (!("string" != typeof e || et.test(e) || !ue.support.htmlSerialize && Ge.test(e) || !ue.support.leadingWhitespace && Xe.test(e) || rt[(Qe.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Je, "<$1></$2>");
                        try {
                            for (; s > i; i++) n = this[i] || {}, 1 === n.nodeType && (ue.cleanData(b(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = ue.map(this, function(e) {
                        return [e.nextSibling, e.parentNode]
                    }),
                    t = 0;
                return this.domManip(arguments, function(n) {
                    var i = e[t++],
                        s = e[t++];
                    s && (i && i.parentNode !== s && (i = this.nextSibling), ue(this).remove(), s.insertBefore(n, i))
                }, !0), t ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t, n) {
                e = ie.apply([], e);
                var i, s, o, r, a, l, d = 0,
                    u = this.length,
                    c = this,
                    p = u - 1,
                    h = e[0],
                    f = ue.isFunction(h);
                if (f || !(1 >= u || "string" != typeof h || ue.support.checkClone) && nt.test(h)) return this.each(function(i) {
                    var s = c.eq(i);
                    f && (e[0] = h.call(this, i, s.html())), s.domManip(e, t, n)
                });
                if (u && (l = ue.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (r = ue.map(b(l, "script"), m), o = r.length; u > d; d++) s = l, d !== p && (s = ue.clone(s, !0, !0), o && ue.merge(r, b(s, "script"))), t.call(this[d], s, d);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument, ue.map(r, g), d = 0; o > d; d++) s = r[d], it.test(s.type || "") && !ue._data(s, "globalEval") && ue.contains(a, s) && (s.src ? ue._evalUrl(s.src) : ue.globalEval((s.text || s.textContent || s.innerHTML || "").replace(ot, "")));
                    l = i = null
                }
                return this
            }
        }), ue.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ue.fn[e] = function(e) {
                for (var n, i = 0, s = [], o = ue(e), r = o.length - 1; r >= i; i++) n = i === r ? this : this.clone(!0), ue(o[i])[t](n), se.apply(s, n.get());
                return this.pushStack(s)
            }
        }), ue.extend({
            clone: function(e, t, n) {
                var i, s, o, r, a, l = ue.contains(e.ownerDocument, e);
                if (ue.support.html5Clone || ue.isXMLDoc(e) || !Ge.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (lt.innerHTML = e.outerHTML, lt.removeChild(o = lt.firstChild)), !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e)))
                    for (i = b(o), a = b(e), r = 0; null != (s = a[r]); ++r) i[r] && v(s, i[r]);
                if (t)
                    if (n)
                        for (a = a || b(e), i = i || b(o), r = 0; null != (s = a[r]); r++) y(s, i[r]);
                    else y(e, o);
                return i = b(o, "script"), i.length > 0 && _(i, !l && b(e, "script")), i = a = s = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var s, o, r, a, l, d, u, c = e.length, p = h(t), f = [], m = 0; c > m; m++)
                    if (o = e[m], o || 0 === o)
                        if ("object" === ue.type(o)) ue.merge(f, o.nodeType ? [o] : o);
                        else if (Ze.test(o)) {
                    for (a = a || p.appendChild(t.createElement("div")), l = (Qe.exec(o) || ["", ""])[1].toLowerCase(), u = rt[l] || rt._default, a.innerHTML = u[1] + o.replace(Je, "<$1></$2>") + u[2], s = u[0]; s--;) a = a.lastChild;
                    if (!ue.support.leadingWhitespace && Xe.test(o) && f.push(t.createTextNode(Xe.exec(o)[0])), !ue.support.tbody)
                        for (o = "table" !== l || Ke.test(o) ? "<table>" !== u[1] || Ke.test(o) ? 0 : a : a.firstChild, s = o && o.childNodes.length; s--;) ue.nodeName(d = o.childNodes[s], "tbody") && !d.childNodes.length && o.removeChild(d);
                    for (ue.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = p.lastChild
                } else f.push(t.createTextNode(o));
                for (a && p.removeChild(a), ue.support.appendChecked || ue.grep(b(f, "input"), w), m = 0; o = f[m++];)
                    if ((!i || -1 === ue.inArray(o, i)) && (r = ue.contains(o.ownerDocument, o), a = b(p.appendChild(o), "script"), r && _(a), n))
                        for (s = 0; o = a[s++];) it.test(o.type || "") && n.push(o);
                return a = null, p
            },
            cleanData: function(e, t) {
                for (var n, i, s, o, r = 0, a = ue.expando, l = ue.cache, d = ue.support.deleteExpando, u = ue.event.special; null != (n = e[r]); r++)
                    if ((t || ue.acceptData(n)) && (s = n[a], o = s && l[s])) {
                        if (o.events)
                            for (i in o.events) u[i] ? ue.event.remove(n, i) : ue.removeEvent(n, i, o.handle);
                        l[s] && (delete l[s], d ? delete n[a] : typeof n.removeAttribute !== G ? n.removeAttribute(a) : n[a] = null, te.push(s))
                    }
            },
            _evalUrl: function(e) {
                return ue.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), ue.fn.extend({
            wrapAll: function(e) {
                if (ue.isFunction(e)) return this.each(function(t) {
                    ue(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ue(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return ue.isFunction(e) ? this.each(function(t) {
                    ue(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ue(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ue.isFunction(e);
                return this.each(function(n) {
                    ue(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var dt, ut, ct, pt = /alpha\([^)]*\)/i,
            ht = /opacity\s*=\s*([^)]*)/,
            ft = /^(top|right|bottom|left)$/,
            mt = /^(none|table(?!-c[ea]).+)/,
            gt = /^margin/,
            _t = RegExp("^(" + ce + ")(.*)$", "i"),
            yt = RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
            vt = RegExp("^([+-])=(" + ce + ")", "i"),
            bt = {
                BODY: "block"
            },
            wt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Mt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            kt = ["Top", "Right", "Bottom", "Left"],
            Lt = ["Webkit", "O", "Moz", "ms"];
        ue.fn.extend({
            css: function(e, n) {
                return ue.access(this, function(e, n, i) {
                    var s, o, r = {},
                        a = 0;
                    if (ue.isArray(n)) {
                        for (o = ut(e), s = n.length; s > a; a++) r[n[a]] = ue.css(e, n[a], !1, o);
                        return r
                    }
                    return i !== t ? ue.style(e, n, i) : ue.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return L(this, !0)
            },
            hide: function() {
                return L(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    k(this) ? ue(this).show() : ue(this).hide()
                })
            }
        }), ue.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = ct(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
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
                "float": ue.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, i, s) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, l = ue.camelCase(n),
                        d = e.style;
                    if (n = ue.cssProps[l] || (ue.cssProps[l] = M(d, l)), a = ue.cssHooks[n] || ue.cssHooks[l], i === t) return a && "get" in a && (o = a.get(e, !1, s)) !== t ? o : d[n];
                    if (r = typeof i, "string" === r && (o = vt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ue.css(e, n)), r = "number"), !(null == i || "number" === r && isNaN(i) || ("number" !== r || ue.cssNumber[l] || (i += "px"), ue.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (d[n] = "inherit"), a && "set" in a && (i = a.set(e, i, s)) === t))) try {
                        d[n] = i
                    } catch (u) {}
                }
            },
            css: function(e, n, i, s) {
                var o, r, a, l = ue.camelCase(n);
                return n = ue.cssProps[l] || (ue.cssProps[l] = M(e.style, l)), a = ue.cssHooks[n] || ue.cssHooks[l], a && "get" in a && (r = a.get(e, !0, i)), r === t && (r = ct(e, n, s)), "normal" === r && n in Mt && (r = Mt[n]), "" === i || i ? (o = parseFloat(r), i === !0 || ue.isNumeric(o) ? o || 0 : r) : r
            }
        }), e.getComputedStyle ? (ut = function(t) {
            return e.getComputedStyle(t, null)
        }, ct = function(e, n, i) {
            var s, o, r, a = i || ut(e),
                l = a ? a.getPropertyValue(n) || a[n] : t,
                d = e.style;
            return a && ("" !== l || ue.contains(e.ownerDocument, e) || (l = ue.style(e, n)), yt.test(l) && gt.test(n) && (s = d.width, o = d.minWidth, r = d.maxWidth, d.minWidth = d.maxWidth = d.width = l, l = a.width, d.width = s, d.minWidth = o, d.maxWidth = r)), l
        }) : J.documentElement.currentStyle && (ut = function(e) {
            return e.currentStyle
        }, ct = function(e, n, i) {
            var s, o, r, a = i || ut(e),
                l = a ? a[n] : t,
                d = e.style;
            return null == l && d && d[n] && (l = d[n]), yt.test(l) && !ft.test(n) && (s = d.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), d.left = "fontSize" === n ? "1em" : l, l = d.pixelLeft + "px", d.left = s, r && (o.left = r)), "" === l ? "auto" : l
        }), ue.each(["height", "width"], function(e, n) {
            ue.cssHooks[n] = {
                get: function(e, i, s) {
                    return i ? 0 === e.offsetWidth && mt.test(ue.css(e, "display")) ? ue.swap(e, wt, function() {
                        return D(e, n, s)
                    }) : D(e, n, s) : t
                },
                set: function(e, t, i) {
                    var s = i && ut(e);
                    return T(e, t, i ? x(e, n, i, ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, s), s) : 0)
                }
            }
        }), ue.support.opacity || (ue.cssHooks.opacity = {
            get: function(e, t) {
                return ht.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    s = ue.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ue.trim(o.replace(pt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = pt.test(o) ? o.replace(pt, s) : o + " " + s)
            }
        }), ue(function() {
            ue.support.reliableMarginRight || (ue.cssHooks.marginRight = {
                get: function(e, n) {
                    return n ? ue.swap(e, {
                        display: "inline-block"
                    }, ct, [e, "marginRight"]) : t
                }
            }), !ue.support.pixelPosition && ue.fn.position && ue.each(["top", "left"], function(e, n) {
                ue.cssHooks[n] = {
                    get: function(e, i) {
                        return i ? (i = ct(e, n), yt.test(i) ? ue(e).position()[n] + "px" : i) : t
                    }
                }
            })
        }), ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function(e) {
            return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ue.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ue.css(e, "display"))
        }, ue.expr.filters.visible = function(e) {
            return !ue.expr.filters.hidden(e)
        }), ue.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ue.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) s[e + kt[i] + t] = o[i] || o[i - 2] || o[0];
                    return s
                }
            }, gt.test(e) || (ue.cssHooks[e + t].set = T)
        });
        var Tt = /%20/g,
            xt = /\[\]$/,
            Dt = /\r?\n/g,
            St = /^(?:submit|button|image|reset|file)$/i,
            Yt = /^(?:input|select|textarea|keygen)/i;
        ue.fn.extend({
            serialize: function() {
                return ue.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ue.prop(this, "elements");
                    return e ? ue.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ue(this).is(":disabled") && Yt.test(this.nodeName) && !St.test(e) && (this.checked || !tt.test(e))
                }).map(function(e, t) {
                    var n = ue(this).val();
                    return null == n ? null : ue.isArray(n) ? ue.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Dt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Dt, "\r\n")
                    }
                }).get()
            }
        }), ue.param = function(e, n) {
            var i, s = [],
                o = function(e, t) {
                    t = ue.isFunction(t) ? t() : null == t ? "" : t, s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(e) || e.jquery && !ue.isPlainObject(e)) ue.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (i in e) C(i, e[i], n, o);
            return s.join("&").replace(Tt, "+")
        }, ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ue.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ue.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var Ct, Et, At = ue.now(),
            jt = /\?/,
            Ht = /#.*$/,
            Ot = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            $t = /^(?:GET|HEAD)$/,
            Nt = /^\/\//,
            Ft = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Wt = ue.fn.load,
            zt = {},
            Rt = {},
            qt = "*/".concat("*");
        try {
            Et = X.href
        } catch (Bt) {
            Et = J.createElement("a"), Et.href = "", Et = Et.href
        }
        Ct = Ft.exec(Et.toLowerCase()) || [], ue.fn.load = function(e, n, i) {
            if ("string" != typeof e && Wt) return Wt.apply(this, arguments);
            var s, o, r, a = this,
                l = e.indexOf(" ");
            return l >= 0 && (s = e.slice(l, e.length), e = e.slice(0, l)), ue.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (r = "POST"), a.length > 0 && ue.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: n
            }).done(function(e) {
                o = arguments, a.html(s ? ue("<div>").append(ue.parseHTML(e)).find(s) : e)
            }).complete(i && function(e, t) {
                a.each(i, o || [e.responseText, t, e])
            }), this
        }, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ue.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ue.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et,
                type: "GET",
                isLocal: Pt.test(Ct[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qt,
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
                    "text json": ue.parseJSON,
                    "text xml": ue.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? j(j(e, ue.ajaxSettings), t) : j(ue.ajaxSettings, e)
            },
            ajaxPrefilter: E(zt),
            ajaxTransport: E(Rt),
            ajax: function(e, n) {
                function i(e, n, i, s) {
                    var o, c, y, v, w, k = n;
                    2 !== b && (b = 2, l && clearTimeout(l), u = t, a = s || "", M.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (v = H(p, M, i)), v = O(p, v, M, o), o ? (p.ifModified && (w = M.getResponseHeader("Last-Modified"), w && (ue.lastModified[r] = w), w = M.getResponseHeader("etag"), w && (ue.etag[r] = w)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = v.state, c = v.data, y = v.error, o = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), M.status = e, M.statusText = (n || k) + "", o ? m.resolveWith(h, [c, k, M]) : m.rejectWith(h, [M, k, y]), M.statusCode(_), _ = t, d && f.trigger(o ? "ajaxSuccess" : "ajaxError", [M, p, o ? c : y]), g.fireWith(h, [M, k]), d && (f.trigger("ajaxComplete", [M, p]), --ue.active || ue.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var s, o, r, a, l, d, u, c, p = ue.ajaxSetup({}, n),
                    h = p.context || p,
                    f = p.context && (h.nodeType || h.jquery) ? ue(h) : ue.event,
                    m = ue.Deferred(),
                    g = ue.Callbacks("once memory"),
                    _ = p.statusCode || {},
                    y = {},
                    v = {},
                    b = 0,
                    w = "canceled",
                    M = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; t = It.exec(a);) c[t[1].toLowerCase()] = t[2];
                                t = c[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = v[n] = v[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) _[t] = [_[t], e[t]];
                                else M.always(e[M.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return u && u.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(M).complete = g.add, M.success = M.done, M.error = M.fail, p.url = ((e || p.url || Et) + "").replace(Ht, "").replace(Nt, Ct[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ue.trim(p.dataType || "*").toLowerCase().match(pe) || [""], null == p.crossDomain && (s = Ft.exec(p.url.toLowerCase()), p.crossDomain = !(!s || s[1] === Ct[1] && s[2] === Ct[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (Ct[3] || ("http:" === Ct[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ue.param(p.data, p.traditional)), A(zt, p, n, M), 2 === b) return M;
                d = p.global, d && 0 === ue.active++ && ue.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !$t.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (jt.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Ot.test(r) ? r.replace(Ot, "$1_=" + At++) : r + (jt.test(r) ? "&" : "?") + "_=" + At++)), p.ifModified && (ue.lastModified[r] && M.setRequestHeader("If-Modified-Since", ue.lastModified[r]), ue.etag[r] && M.setRequestHeader("If-None-Match", ue.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && M.setRequestHeader("Content-Type", p.contentType), M.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : p.accepts["*"]);
                for (o in p.headers) M.setRequestHeader(o, p.headers[o]);
                if (p.beforeSend && (p.beforeSend.call(h, M, p) === !1 || 2 === b)) return M.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) M[o](p[o]);
                if (u = A(Rt, p, n, M)) {
                    M.readyState = 1, d && f.trigger("ajaxSend", [M, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                        M.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, u.send(y, i)
                    } catch (k) {
                        if (!(2 > b)) throw k;
                        i(-1, k)
                    }
                } else i(-1, "No Transport");
                return M
            },
            getJSON: function(e, t, n) {
                return ue.get(e, t, n, "json")
            },
            getScript: function(e, n) {
                return ue.get(e, t, n, "script")
            }
        }), ue.each(["get", "post"], function(e, n) {
            ue[n] = function(e, i, s, o) {
                return ue.isFunction(i) && (o = o || s, s = i, i = t), ue.ajax({
                    url: e,
                    type: n,
                    dataType: o,
                    data: i,
                    success: s
                })
            }
        }), ue.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ue.globalEval(e), e
                }
            }
        }), ue.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ue.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, i = J.head || ue("head")[0] || J.documentElement;
                return {
                    send: function(t, s) {
                        n = J.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || s(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Ut = [],
            Vt = /(=)\?(?=&|$)|\?\?/;
        ue.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ut.pop() || ue.expando + "_" + At++;
                return this[e] = !0, e
            }
        }), ue.ajaxPrefilter("json jsonp", function(n, i, s) {
            var o, r, a, l = n.jsonp !== !1 && (Vt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ue.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vt, "$1" + o) : n.jsonp !== !1 && (n.url += (jt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return a || ue.error(o + " was not called"), a[0]
            }, n.dataTypes[0] = "json", r = e[o], e[o] = function() {
                a = arguments
            }, s.always(function() {
                e[o] = r, n[o] && (n.jsonpCallback = i.jsonpCallback, Ut.push(o)), a && ue.isFunction(r) && r(a[0]), a = r = t
            }), "script") : t
        });
        var Gt, Xt, Jt = 0,
            Qt = e.ActiveXObject && function() {
                var e;
                for (e in Gt) Gt[e](t, !0)
            };
        ue.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && I() || P()
        } : I, Xt = ue.ajaxSettings.xhr(), ue.support.cors = !!Xt && "withCredentials" in Xt, Xt = ue.support.ajax = !!Xt, Xt && ue.ajaxTransport(function(n) {
            if (!n.crossDomain || ue.support.cors) {
                var i;
                return {
                    send: function(s, o) {
                        var r, a, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (a in n.xhrFields) l[a] = n.xhrFields[a];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in s) l.setRequestHeader(a, s[a])
                        } catch (d) {}
                        l.send(n.hasContent && n.data || null), i = function(e, s) {
                            var a, d, u, c;
                            try {
                                if (i && (s || 4 === l.readyState))
                                    if (i = t, r && (l.onreadystatechange = ue.noop, Qt && delete Gt[r]), s) 4 !== l.readyState && l.abort();
                                    else {
                                        c = {}, a = l.status, d = l.getAllResponseHeaders(), "string" == typeof l.responseText && (c.text = l.responseText);
                                        try {
                                            u = l.statusText
                                        } catch (p) {
                                            u = ""
                                        }
                                        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                                    }
                            } catch (h) {
                                s || o(-1, h)
                            }
                            c && o(a, u, c, d)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (r = ++Jt, Qt && (Gt || (Gt = {}, ue(e).unload(Qt)), Gt[r] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(t, !0)
                    }
                }
            }
        });
        var Kt, Zt, en = /^(?:toggle|show|hide)$/,
            tn = RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
            nn = /queueHooks$/,
            sn = [z],
            on = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        s = tn.exec(t),
                        o = s && s[3] || (ue.cssNumber[e] ? "" : "px"),
                        r = (ue.cssNumber[e] || "px" !== o && +i) && tn.exec(ue.css(n.elem, e)),
                        a = 1,
                        l = 20;
                    if (r && r[3] !== o) {
                        o = o || r[3], s = s || [], r = +i || 1;
                        do a = a || ".5", r /= a, ue.style(n.elem, e, r + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return s && (r = n.start = +r || +i || 0, n.unit = o, n.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), n
                }]
            };
        ue.Animation = ue.extend(F, {
            tweener: function(e, t) {
                ue.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, s = e.length; s > i; i++) n = e[i], on[n] = on[n] || [], on[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? sn.unshift(e) : sn.push(e)
            }
        }), ue.Tween = R, R.prototype = {
            constructor: R,
            init: function(e, t, n, i, s, o) {
                this.elem = e, this.prop = n, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ue.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = R.propHooks[this.prop];
                return e && e.get ? e.get(this) : R.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = R.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
            }
        }, R.prototype.init.prototype = R.prototype, R.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ue.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ue.cssProps[e.prop]] || ue.cssHooks[e.prop]) ? ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ue.each(["toggle", "show", "hide"], function(e, t) {
            var n = ue.fn[t];
            ue.fn[t] = function(e, i, s) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, s)
            }
        }), ue.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(k).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var s = ue.isEmptyObject(e),
                    o = ue.speed(t, n, i),
                    r = function() {
                        var t = F(this, ue.extend({}, e), o);
                        (s || ue._data(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
            },
            stop: function(e, n, i) {
                var s = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = ue.timers,
                        r = ue._data(this);
                    if (n) r[n] && r[n].stop && s(r[n]);
                    else
                        for (n in r) r[n] && r[n].stop && nn.test(n) && s(r[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                    (t || !i) && ue.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ue._data(this),
                        i = n[e + "queue"],
                        s = n[e + "queueHooks"],
                        o = ue.timers,
                        r = i ? i.length : 0;
                    for (n.finish = !0, ue.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; r > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ue.each({
            slideDown: q("show"),
            slideUp: q("hide"),
            slideToggle: q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ue.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ue.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ue.extend({}, e) : {
                complete: n || !n && t || ue.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ue.isFunction(t) && t
            };
            return i.duration = ue.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ue.fx.speeds ? ue.fx.speeds[i.duration] : ue.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ue.isFunction(i.old) && i.old.call(this), i.queue && ue.dequeue(this, i.queue)
            }, i
        }, ue.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ue.timers = [], ue.fx = R.prototype.init, ue.fx.tick = function() {
            var e, n = ue.timers,
                i = 0;
            for (Kt = ue.now(); n.length > i; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
            n.length || ue.fx.stop(), Kt = t
        }, ue.fx.timer = function(e) {
            e() && ue.timers.push(e) && ue.fx.start()
        }, ue.fx.interval = 13, ue.fx.start = function() {
            Zt || (Zt = setInterval(ue.fx.tick, ue.fx.interval))
        }, ue.fx.stop = function() {
            clearInterval(Zt), Zt = null
        }, ue.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ue.fx.step = {}, ue.expr && ue.expr.filters && (ue.expr.filters.animated = function(e) {
            return ue.grep(ue.timers, function(t) {
                return e === t.elem
            }).length
        }), ue.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                ue.offset.setOffset(this, e, t)
            });
            var n, i, s = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            return r ? (n = r.documentElement, ue.contains(n, o) ? (typeof o.getBoundingClientRect !== G && (s = o.getBoundingClientRect()), i = B(r), {
                top: s.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: s.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : s) : void 0
        }, ue.offset = {
            setOffset: function(e, t, n) {
                var i = ue.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var s, o, r = ue(e),
                    a = r.offset(),
                    l = ue.css(e, "top"),
                    d = ue.css(e, "left"),
                    u = ("absolute" === i || "fixed" === i) && ue.inArray("auto", [l, d]) > -1,
                    c = {},
                    p = {};
                u ? (p = r.position(), s = p.top, o = p.left) : (s = parseFloat(l) || 0, o = parseFloat(d) || 0), ue.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (c.top = t.top - a.top + s), null != t.left && (c.left = t.left - a.left + o), "using" in t ? t.using.call(e, c) : r.css(c)
            }
        }, ue.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ue.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ue.nodeName(e[0], "html") || (n = e.offset()), n.top += ue.css(e[0], "borderTopWidth", !0), n.left += ue.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ue.css(i, "marginTop", !0),
                        left: t.left - n.left - ue.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Q; e && !ue.nodeName(e, "html") && "static" === ue.css(e, "position");) e = e.offsetParent;
                    return e || Q
                })
            }
        }), ue.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = /Y/.test(n);
            ue.fn[e] = function(s) {
                return ue.access(this, function(e, s, o) {
                    var r = B(e);
                    return o === t ? r ? n in r ? r[n] : r.document.documentElement[s] : e[s] : (r ? r.scrollTo(i ? ue(r).scrollLeft() : o, i ? o : ue(r).scrollTop()) : e[s] = o, t)
                }, e, s, arguments.length, null)
            }
        }), ue.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            ue.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(i, s) {
                ue.fn[s] = function(s, o) {
                    var r = arguments.length && (i || "boolean" != typeof s),
                        a = i || (s === !0 || o === !0 ? "margin" : "border");
                    return ue.access(this, function(n, i, s) {
                        var o;
                        return ue.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : s === t ? ue.css(n, i, a) : ue.style(n, i, s, a)
                    }, n, r ? s : t, r, null)
                }
            })
        }), ue.fn.size = function() {
            return this.length
        }, ue.fn.andSelf = ue.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ue : (e.jQuery = e.$ = ue, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ue
        }))
    }(window), ! function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
    }(this, function() {
        "use strict";

        function e() {
            return qi.apply(null, arguments)
        }

        function t(e) {
            qi = e
        }

        function n(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function i(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function s(e, t) {
            var n, i = [];
            for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
            return i
        }

        function o(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function r(e, t) {
            for (var n in t) o(t, n) && (e[n] = t[n]);
            return o(t, "toString") && (e.toString = t.toString), o(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function a(e, t, n, i) {
            return Ye(e, t, n, i, !0).utc()
        }

        function l() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function d(e) {
            return null == e._pf && (e._pf = l()), e._pf
        }

        function u(e) {
            if (null == e._isValid) {
                var t = d(e);
                e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
            }
            return e._isValid
        }

        function c(e) {
            var t = a(NaN);
            return null != e ? r(d(t), e) : d(t).userInvalidated = !0, t
        }

        function p(e) {
            return void 0 === e
        }

        function h(e, t) {
            var n, i, s;
            if (p(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), p(t._i) || (e._i = t._i), p(t._f) || (e._f = t._f), p(t._l) || (e._l = t._l), p(t._strict) || (e._strict = t._strict), p(t._tzm) || (e._tzm = t._tzm), p(t._isUTC) || (e._isUTC = t._isUTC), p(t._offset) || (e._offset = t._offset), p(t._pf) || (e._pf = d(t)), p(t._locale) || (e._locale = t._locale), Ui.length > 0)
                for (n in Ui) i = Ui[n], s = t[i], p(s) || (e[i] = s);
            return e
        }

        function f(t) {
            h(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), Vi === !1 && (Vi = !0, e.updateOffset(this), Vi = !1)
        }

        function m(e) {
            return e instanceof f || null != e && null != e._isAMomentObject
        }

        function g(e) {
            return 0 > e ? Math.ceil(e) : Math.floor(e)
        }

        function _(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = g(t)), n
        }

        function y(e, t, n) {
            var i, s = Math.min(e.length, t.length),
                o = Math.abs(e.length - t.length),
                r = 0;
            for (i = 0; s > i; i++)(n && e[i] !== t[i] || !n && _(e[i]) !== _(t[i])) && r++;
            return r + o
        }

        function v() {}

        function b(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function w(e) {
            for (var t, n, i, s, o = 0; o < e.length;) {
                for (s = b(e[o]).split("-"), t = s.length, n = b(e[o + 1]), n = n ? n.split("-") : null; t > 0;) {
                    if (i = M(s.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && y(s, n, !0) >= t - 1) break;
                    t--
                }
                o++
            }
            return null
        }

        function M(e) {
            var t = null;
            if (!Gi[e] && "undefined" != typeof module && module && module.exports) try {
                t = Bi._abbr, require("./locale/" + e), k(t)
            } catch (n) {}
            return Gi[e]
        }

        function k(e, t) {
            var n;
            return e && (n = p(t) ? T(e) : L(e, t), n && (Bi = n)), Bi._abbr
        }

        function L(e, t) {
            return null !== t ? (t.abbr = e, Gi[e] = Gi[e] || new v, Gi[e].set(t), k(e), Gi[e]) : (delete Gi[e], null)
        }

        function T(e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Bi;
            if (!n(e)) {
                if (t = M(e)) return t;
                e = [e]
            }
            return w(e)
        }

        function x(e, t) {
            var n = e.toLowerCase();
            Xi[n] = Xi[n + "s"] = Xi[t] = e
        }

        function D(e) {
            return "string" == typeof e ? Xi[e] || Xi[e.toLowerCase()] : void 0
        }

        function S(e) {
            var t, n, i = {};
            for (n in e) o(e, n) && (t = D(n), t && (i[t] = e[n]));
            return i
        }

        function Y(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function C(t, n) {
            return function(i) {
                return null != i ? (A(this, t, i), e.updateOffset(this, n), this) : E(this, t)
            }
        }

        function E(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function A(e, t, n) {
            e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }

        function j(e, t) {
            var n;
            if ("object" == typeof e)
                for (n in e) this.set(n, e[n]);
            else if (e = D(e), Y(this[e])) return this[e](t);
            return this
        }

        function H(e, t, n) {
            var i = "" + Math.abs(e),
                s = t - i.length,
                o = e >= 0;
            return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + i
        }

        function O(e, t, n, i) {
            var s = i;
            "string" == typeof i && (s = function() {
                return this[i]()
            }), e && (Zi[e] = s), t && (Zi[t[0]] = function() {
                return H(s.apply(this, arguments), t[1], t[2])
            }), n && (Zi[n] = function() {
                return this.localeData().ordinal(s.apply(this, arguments), e)
            })
        }

        function I(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function P(e) {
            var t, n, i = e.match(Ji);
            for (t = 0, n = i.length; n > t; t++) Zi[i[t]] ? i[t] = Zi[i[t]] : i[t] = I(i[t]);
            return function(s) {
                var o = "";
                for (t = 0; n > t; t++) o += i[t] instanceof Function ? i[t].call(s, e) : i[t];
                return o
            }
        }

        function $(e, t) {
            return e.isValid() ? (t = N(t, e.localeData()), Ki[t] = Ki[t] || P(t), Ki[t](e)) : e.localeData().invalidDate()
        }

        function N(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var i = 5;
            for (Qi.lastIndex = 0; i >= 0 && Qi.test(e);) e = e.replace(Qi, n), Qi.lastIndex = 0, i -= 1;
            return e
        }

        function F(e, t, n) {
            _s[e] = Y(t) ? t : function(e, i) {
                return e && n ? n : t
            }
        }

        function W(e, t) {
            return o(_s, e) ? _s[e](t._strict, t._locale) : new RegExp(z(e))
        }

        function z(e) {
            return R(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, s) {
                return t || n || i || s
            }))
        }

        function R(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function q(e, t) {
            var n, i = t;
            for ("string" == typeof e && (e = [e]), "number" == typeof t && (i = function(e, n) {
                    n[t] = _(e)
                }), n = 0; n < e.length; n++) ys[e[n]] = i
        }

        function B(e, t) {
            q(e, function(e, n, i, s) {
                i._w = i._w || {}, t(e, i._w, i, s)
            })
        }

        function U(e, t, n) {
            null != t && o(ys, e) && ys[e](t, n._a, n, e)
        }

        function V(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        function G(e, t) {
            return n(this._months) ? this._months[e.month()] : this._months[Ss.test(t) ? "format" : "standalone"][e.month()]
        }

        function X(e, t) {
            return n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ss.test(t) ? "format" : "standalone"][e.month()]
        }

        function J(e, t, n) {
            var i, s, o;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
                if (s = a([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                if (!n && this._monthsParse[i].test(e)) return i
            }
        }

        function Q(e, t) {
            var n;
            return e.isValid() ? "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), V(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e) : e
        }

        function K(t) {
            return null != t ? (Q(this, t), e.updateOffset(this, !0), this) : E(this, "Month")
        }

        function Z() {
            return V(this.year(), this.month())
        }

        function ee(e) {
            return this._monthsParseExact ? (o(this, "_monthsRegex") || ne.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex
        }

        function te(e) {
            return this._monthsParseExact ? (o(this, "_monthsRegex") || ne.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex
        }

        function ne() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, n, i = [],
                s = [],
                o = [];
            for (t = 0; 12 > t; t++) n = a([2e3, t]), i.push(this.monthsShort(n, "")), s.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
            for (i.sort(e), s.sort(e), o.sort(e), t = 0; 12 > t; t++) i[t] = R(i[t]), s[t] = R(s[t]), o[t] = R(o[t]);
            this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")$", "i")
        }

        function ie(e) {
            var t, n = e._a;
            return n && -2 === d(e).overflow && (t = n[bs] < 0 || n[bs] > 11 ? bs : n[ws] < 1 || n[ws] > V(n[vs], n[bs]) ? ws : n[Ms] < 0 || n[Ms] > 24 || 24 === n[Ms] && (0 !== n[ks] || 0 !== n[Ls] || 0 !== n[Ts]) ? Ms : n[ks] < 0 || n[ks] > 59 ? ks : n[Ls] < 0 || n[Ls] > 59 ? Ls : n[Ts] < 0 || n[Ts] > 999 ? Ts : -1, d(e)._overflowDayOfYear && (vs > t || t > ws) && (t = ws), d(e)._overflowWeeks && -1 === t && (t = xs), d(e)._overflowWeekday && -1 === t && (t = Ds), d(e).overflow = t), e
        }

        function se(t) {
            e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function oe(e, t) {
            var n = !0;
            return r(function() {
                return n && (se(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), n = !1), t.apply(this, arguments)
            }, t)
        }

        function re(e, t) {
            js[e] || (se(t), js[e] = !0)
        }

        function ae(e) {
            var t, n, i, s, o, r, a = e._i,
                l = Hs.exec(a) || Os.exec(a);
            if (l) {
                for (d(e).iso = !0, t = 0, n = Ps.length; n > t; t++)
                    if (Ps[t][1].exec(l[1])) {
                        s = Ps[t][0], i = Ps[t][2] !== !1;
                        break
                    } if (null == s) return void(e._isValid = !1);
                if (l[3]) {
                    for (t = 0, n = $s.length; n > t; t++)
                        if ($s[t][1].exec(l[3])) {
                            o = (l[2] || " ") + $s[t][0];
                            break
                        } if (null == o) return void(e._isValid = !1)
                }
                if (!i && null != o) return void(e._isValid = !1);
                if (l[4]) {
                    if (!Is.exec(l[4])) return void(e._isValid = !1);
                    r = "Z"
                }
                e._f = s + (o || "") + (r || ""), Me(e)
            } else e._isValid = !1
        }

        function le(t) {
            var n = Ns.exec(t._i);
            return null !== n ? void(t._d = new Date(+n[1])) : (ae(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
        }

        function de(e, t, n, i, s, o, r) {
            var a = new Date(e, t, n, i, s, o, r);
            return 100 > e && e >= 0 && isFinite(a.getFullYear()) && a.setFullYear(e), a
        }

        function ue(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return 100 > e && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
        }

        function ce(e) {
            return pe(e) ? 366 : 365
        }

        function pe(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }

        function he() {
            return pe(this.year())
        }

        function fe(e, t, n) {
            var i = 7 + t - n,
                s = (7 + ue(e, 0, i).getUTCDay() - t) % 7;
            return -s + i - 1
        }

        function me(e, t, n, i, s) {
            var o, r, a = (7 + n - i) % 7,
                l = fe(e, i, s),
                d = 1 + 7 * (t - 1) + a + l;
            return 0 >= d ? (o = e - 1, r = ce(o) + d) : d > ce(e) ? (o = e + 1, r = d - ce(e)) : (o = e, r = d), {
                year: o,
                dayOfYear: r
            }
        }

        function ge(e, t, n) {
            var i, s, o = fe(e.year(), t, n),
                r = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
            return 1 > r ? (s = e.year() - 1, i = r + _e(s, t, n)) : r > _e(e.year(), t, n) ? (i = r - _e(e.year(), t, n), s = e.year() + 1) : (s = e.year(), i = r), {
                week: i,
                year: s
            }
        }

        function _e(e, t, n) {
            var i = fe(e, t, n),
                s = fe(e + 1, t, n);
            return (ce(e) - i + s) / 7
        }

        function ye(e, t, n) {
            return null != e ? e : null != t ? t : n
        }

        function ve(t) {
            var n = new Date(e.now());
            return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
        }

        function be(e) {
            var t, n, i, s, o = [];
            if (!e._d) {
                for (i = ve(e), e._w && null == e._a[ws] && null == e._a[bs] && we(e), e._dayOfYear && (s = ye(e._a[vs], i[vs]), e._dayOfYear > ce(s) && (d(e)._overflowDayOfYear = !0), n = ue(s, 0, e._dayOfYear), e._a[bs] = n.getUTCMonth(), e._a[ws] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = o[t] = i[t];
                for (; 7 > t; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[Ms] && 0 === e._a[ks] && 0 === e._a[Ls] && 0 === e._a[Ts] && (e._nextDay = !0, e._a[Ms] = 0), e._d = (e._useUTC ? ue : de).apply(null, o), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ms] = 24)
            }
        }

        function we(e) {
            var t, n, i, s, o, r, a, l;
            t = e._w, null != t.GG || null != t.W || null != t.E ? (o = 1, r = 4, n = ye(t.GG, e._a[vs], ge(Ce(), 1, 4).year), i = ye(t.W, 1), s = ye(t.E, 1), (1 > s || s > 7) && (l = !0)) : (o = e._locale._week.dow, r = e._locale._week.doy, n = ye(t.gg, e._a[vs], ge(Ce(), o, r).year), i = ye(t.w, 1), null != t.d ? (s = t.d, (0 > s || s > 6) && (l = !0)) : null != t.e ? (s = t.e + o, (t.e < 0 || t.e > 6) && (l = !0)) : s = o), 1 > i || i > _e(n, o, r) ? d(e)._overflowWeeks = !0 : null != l ? d(e)._overflowWeekday = !0 : (a = me(n, i, s, o, r), e._a[vs] = a.year, e._dayOfYear = a.dayOfYear)
        }

        function Me(t) {
            if (t._f === e.ISO_8601) return void ae(t);
            t._a = [], d(t).empty = !0;
            var n, i, s, o, r, a = "" + t._i,
                l = a.length,
                u = 0;
            for (s = N(t._f, t._locale).match(Ji) || [], n = 0; n < s.length; n++) o = s[n], i = (a.match(W(o, t)) || [])[0], i && (r = a.substr(0, a.indexOf(i)), r.length > 0 && d(t).unusedInput.push(r), a = a.slice(a.indexOf(i) + i.length), u += i.length), Zi[o] ? (i ? d(t).empty = !1 : d(t).unusedTokens.push(o), U(o, i, t)) : t._strict && !i && d(t).unusedTokens.push(o);
            d(t).charsLeftOver = l - u, a.length > 0 && d(t).unusedInput.push(a), d(t).bigHour === !0 && t._a[Ms] <= 12 && t._a[Ms] > 0 && (d(t).bigHour = void 0), t._a[Ms] = ke(t._locale, t._a[Ms], t._meridiem), be(t), ie(t)
        }

        function ke(e, t, n) {
            var i;
            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n), i && 12 > t && (t += 12), i || 12 !== t || (t = 0), t) : t
        }

        function Le(e) {
            var t, n, i, s, o;
            if (0 === e._f.length) return d(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (s = 0; s < e._f.length; s++) o = 0, t = h({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], Me(t), u(t) && (o += d(t).charsLeftOver, o += 10 * d(t).unusedTokens.length, d(t).score = o, (null == i || i > o) && (i = o, n = t));
            r(e, n || t)
        }

        function Te(e) {
            if (!e._d) {
                var t = S(e._i);
                e._a = s([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                    return e && parseInt(e, 10)
                }), be(e)
            }
        }

        function xe(e) {
            var t = new f(ie(De(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
        }

        function De(e) {
            var t = e._i,
                s = e._f;
            return e._locale = e._locale || T(e._l), null === t || void 0 === s && "" === t ? c({
                nullInput: !0
            }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), m(t) ? new f(ie(t)) : (n(s) ? Le(e) : s ? Me(e) : i(t) ? e._d = t : Se(e), u(e) || (e._d = null), e))
        }

        function Se(t) {
            var o = t._i;
            void 0 === o ? t._d = new Date(e.now()) : i(o) ? t._d = new Date(+o) : "string" == typeof o ? le(t) : n(o) ? (t._a = s(o.slice(0), function(e) {
                return parseInt(e, 10)
            }), be(t)) : "object" == typeof o ? Te(t) : "number" == typeof o ? t._d = new Date(o) : e.createFromInputFallback(t)
        }

        function Ye(e, t, n, i, s) {
            var o = {};
            return "boolean" == typeof n && (i = n, n = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = s, o._l = n, o._i = e, o._f = t, o._strict = i, xe(o)
        }

        function Ce(e, t, n, i) {
            return Ye(e, t, n, i, !1)
        }

        function Ee(e, t) {
            var i, s;
            if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return Ce();
            for (i = t[0], s = 1; s < t.length; ++s)(!t[s].isValid() || t[s][e](i)) && (i = t[s]);
            return i
        }

        function Ae() {
            var e = [].slice.call(arguments, 0);
            return Ee("isBefore", e)
        }

        function je() {
            var e = [].slice.call(arguments, 0);
            return Ee("isAfter", e)
        }

        function He(e) {
            var t = S(e),
                n = t.year || 0,
                i = t.quarter || 0,
                s = t.month || 0,
                o = t.week || 0,
                r = t.day || 0,
                a = t.hour || 0,
                l = t.minute || 0,
                d = t.second || 0,
                u = t.millisecond || 0;
            this._milliseconds = +u + 1e3 * d + 6e4 * l + 36e5 * a, this._days = +r + 7 * o, this._months = +s + 3 * i + 12 * n, this._data = {}, this._locale = T(), this._bubble()
        }

        function Oe(e) {
            return e instanceof He
        }

        function Ie(e, t) {
            O(e, 0, 0, function() {
                var e = this.utcOffset(),
                    n = "+";
                return 0 > e && (e = -e, n = "-"), n + H(~~(e / 60), 2) + t + H(~~e % 60, 2)
            })
        }

        function Pe(e, t) {
            var n = (t || "").match(e) || [],
                i = n[n.length - 1] || [],
                s = (i + "").match(qs) || ["-", 0, 0],
                o = +(60 * s[1]) + _(s[2]);
            return "+" === s[0] ? o : -o
        }

        function $e(t, n) {
            var s, o;
            return n._isUTC ? (s = n.clone(), o = (m(t) || i(t) ? +t : +Ce(t)) - +s, s._d.setTime(+s._d + o), e.updateOffset(s, !1), s) : Ce(t).local()
        }

        function Ne(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function Fe(t, n) {
            var i, s = this._offset || 0;
            return this.isValid() ? null != t ? ("string" == typeof t ? t = Pe(fs, t) : Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && n && (i = Ne(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), s !== t && (!n || this._changeInProgress ? nt(this, Qe(t - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? s : Ne(this) : null != t ? this : NaN
        }

        function We(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }

        function ze(e) {
            return this.utcOffset(0, e)
        }

        function Re(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ne(this), "m")), this
        }

        function qe() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Pe(hs, this._i)), this
        }

        function Be(e) {
            return this.isValid() ? (e = e ? Ce(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1
        }

        function Ue() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Ve() {
            if (!p(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            if (h(e, this), e = De(e), e._a) {
                var t = e._isUTC ? a(e._a) : Ce(e._a);
                this._isDSTShifted = this.isValid() && y(e._a, t.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function Ge() {
            return this.isValid() ? !this._isUTC : !1
        }

        function Xe() {
            return this.isValid() ? this._isUTC : !1
        }

        function Je() {
            return this.isValid() ? this._isUTC && 0 === this._offset : !1
        }

        function Qe(e, t) {
            var n, i, s, r = e,
                a = null;
            return Oe(e) ? r = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : "number" == typeof e ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (a = Bs.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = {
                y: 0,
                d: _(a[ws]) * n,
                h: _(a[Ms]) * n,
                m: _(a[ks]) * n,
                s: _(a[Ls]) * n,
                ms: _(a[Ts]) * n
            }) : (a = Us.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = {
                y: Ke(a[2], n),
                M: Ke(a[3], n),
                d: Ke(a[4], n),
                h: Ke(a[5], n),
                m: Ke(a[6], n),
                s: Ke(a[7], n),
                w: Ke(a[8], n)
            }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (s = et(Ce(r.from), Ce(r.to)), r = {}, r.ms = s.milliseconds, r.M = s.months), i = new He(r), Oe(e) && o(e, "_locale") && (i._locale = e._locale), i
        }

        function Ke(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t
        }

        function Ze(e, t) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function et(e, t) {
            var n;
            return e.isValid() && t.isValid() ? (t = $e(t, e), e.isBefore(t) ? n = Ze(e, t) : (n = Ze(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                milliseconds: 0,
                months: 0
            }
        }

        function tt(e, t) {
            return function(n, i) {
                var s, o;
                return null === i || isNaN(+i) || (re(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, s = Qe(n, i), nt(this, s, e), this
            }
        }

        function nt(t, n, i, s) {
            var o = n._milliseconds,
                r = n._days,
                a = n._months;
            t.isValid() && (s = null == s ? !0 : s, o && t._d.setTime(+t._d + o * i), r && A(t, "Date", E(t, "Date") + r * i), a && Q(t, E(t, "Month") + a * i), s && e.updateOffset(t, r || a))
        }

        function it(e, t) {
            var n = e || Ce(),
                i = $e(n, this).startOf("day"),
                s = this.diff(i, "days", !0),
                o = -6 > s ? "sameElse" : -1 > s ? "lastWeek" : 0 > s ? "lastDay" : 1 > s ? "sameDay" : 2 > s ? "nextDay" : 7 > s ? "nextWeek" : "sameElse",
                r = t && (Y(t[o]) ? t[o]() : t[o]);
            return this.format(r || this.localeData().calendar(o, this, Ce(n)))
        }

        function st() {
            return new f(this)
        }

        function ot(e, t) {
            var n = m(e) ? e : Ce(e);
            return this.isValid() && n.isValid() ? (t = D(p(t) ? "millisecond" : t), "millisecond" === t ? +this > +n : +n < +this.clone().startOf(t)) : !1
        }

        function rt(e, t) {
            var n = m(e) ? e : Ce(e);
            return this.isValid() && n.isValid() ? (t = D(p(t) ? "millisecond" : t), "millisecond" === t ? +n > +this : +this.clone().endOf(t) < +n) : !1
        }

        function at(e, t, n) {
            return this.isAfter(e, n) && this.isBefore(t, n)
        }

        function lt(e, t) {
            var n, i = m(e) ? e : Ce(e);
            return this.isValid() && i.isValid() ? (t = D(t || "millisecond"), "millisecond" === t ? +this === +i : (n = +i, +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))) : !1
        }

        function dt(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
        }

        function ut(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
        }

        function ct(e, t, n) {
            var i, s, o, r;
            return this.isValid() ? (i = $e(e, this), i.isValid() ? (s = 6e4 * (i.utcOffset() - this.utcOffset()), t = D(t), "year" === t || "month" === t || "quarter" === t ? (r = pt(this, i), "quarter" === t ? r /= 3 : "year" === t && (r /= 12)) : (o = this - i, r = "second" === t ? o / 1e3 : "minute" === t ? o / 6e4 : "hour" === t ? o / 36e5 : "day" === t ? (o - s) / 864e5 : "week" === t ? (o - s) / 6048e5 : o), n ? r : g(r)) : NaN) : NaN
        }

        function pt(e, t) {
            var n, i, s = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                o = e.clone().add(s, "months");
            return 0 > t - o ? (n = e.clone().add(s - 1, "months"), i = (t - o) / (o - n)) : (n = e.clone().add(s + 1, "months"), i = (t - o) / (n - o)), -(s + i)
        }

        function ht() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function ft() {
            var e = this.clone().utc();
            return 0 < e.year() && e.year() <= 9999 ? Y(Date.prototype.toISOString) ? this.toDate().toISOString() : $(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : $(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function mt(t) {
            var n = $(this, t || e.defaultFormat);
            return this.localeData().postformat(n)
        }

        function gt(e, t) {
            return this.isValid() && (m(e) && e.isValid() || Ce(e).isValid()) ? Qe({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function _t(e) {
            return this.from(Ce(), e)
        }

        function yt(e, t) {
            return this.isValid() && (m(e) && e.isValid() || Ce(e).isValid()) ? Qe({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function vt(e) {
            return this.to(Ce(), e)
        }

        function bt(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (t = T(e), null != t && (this._locale = t), this)
        }

        function wt() {
            return this._locale
        }

        function Mt(e) {
            switch (e = D(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function kt(e) {
            return e = D(e), void 0 === e || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
        }

        function Lt() {
            return +this._d - 6e4 * (this._offset || 0)
        }

        function Tt() {
            return Math.floor(+this / 1e3)
        }

        function xt() {
            return this._offset ? new Date(+this) : this._d
        }

        function Dt() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }

        function St() {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }

        function Yt() {
            return this.isValid() ? this.toISOString() : "null"
        }

        function Ct() {
            return u(this)
        }

        function Et() {
            return r({}, d(this))
        }

        function At() {
            return d(this).overflow
        }

        function jt() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }

        function Ht(e, t) {
            O(0, [e, e.length], 0, t)
        }

        function Ot(e) {
            return Nt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function It(e) {
            return Nt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function Pt() {
            return _e(this.year(), 1, 4)
        }

        function $t() {
            var e = this.localeData()._week;
            return _e(this.year(), e.dow, e.doy)
        }

        function Nt(e, t, n, i, s) {
            var o;
            return null == e ? ge(this, i, s).year : (o = _e(e, i, s), t > o && (t = o), Ft.call(this, e, t, n, i, s))
        }

        function Ft(e, t, n, i, s) {
            var o = me(e, t, n, i, s),
                r = ue(o.year, 0, o.dayOfYear);
            return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
        }

        function Wt(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }

        function zt(e) {
            return ge(e, this._week.dow, this._week.doy).week
        }

        function Rt() {
            return this._week.dow
        }

        function qt() {
            return this._week.doy
        }

        function Bt(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function Ut(e) {
            var t = ge(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function Vt(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
        }

        function Gt(e, t) {
            return n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()]
        }

        function Xt(e) {
            return this._weekdaysShort[e.day()]
        }

        function Jt(e) {
            return this._weekdaysMin[e.day()]
        }

        function Qt(e, t, n) {
            var i, s, o;
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; 7 > i; i++) {
                if (s = Ce([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
                if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
                if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
                if (!n && this._weekdaysParse[i].test(e)) return i
            }
        }

        function Kt(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = Vt(e, this.localeData()), this.add(e - t, "d")) : t
        }

        function Zt(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }

        function en(e) {
            return this.isValid() ? null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7) : null != e ? this : NaN
        }

        function tn(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }

        function nn() {
            return this.hours() % 12 || 12
        }

        function sn(e, t) {
            O(e, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function on(e, t) {
            return t._meridiemParse
        }

        function rn(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }

        function an(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }

        function ln(e, t) {
            t[Ts] = _(1e3 * ("0." + e))
        }

        function dn() {
            return this._isUTC ? "UTC" : ""
        }

        function un() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function cn(e) {
            return Ce(1e3 * e)
        }

        function pn() {
            return Ce.apply(null, arguments).parseZone()
        }

        function hn(e, t, n) {
            var i = this._calendar[e];
            return Y(i) ? i.call(t, n) : i
        }

        function fn(e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e])
        }

        function mn() {
            return this._invalidDate
        }

        function gn(e) {
            return this._ordinal.replace("%d", e)
        }

        function _n(e) {
            return e
        }

        function yn(e, t, n, i) {
            var s = this._relativeTime[n];
            return Y(s) ? s(e, t, n, i) : s.replace(/%d/i, e)
        }

        function vn(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return Y(n) ? n(t) : n.replace(/%s/i, t)
        }

        function bn(e) {
            var t, n;
            for (n in e) t = e[n], Y(t) ? this[n] = t : this["_" + n] = t;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function wn(e, t, n, i) {
            var s = T(),
                o = a().set(i, t);
            return s[n](o, e)
        }

        function Mn(e, t, n, i, s) {
            if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return wn(e, t, n, s);
            var o, r = [];
            for (o = 0; i > o; o++) r[o] = wn(e, o, n, s);
            return r
        }

        function kn(e, t) {
            return Mn(e, t, "months", 12, "month")
        }

        function Ln(e, t) {
            return Mn(e, t, "monthsShort", 12, "month")
        }

        function Tn(e, t) {
            return Mn(e, t, "weekdays", 7, "day")
        }

        function xn(e, t) {
            return Mn(e, t, "weekdaysShort", 7, "day")
        }

        function Dn(e, t) {
            return Mn(e, t, "weekdaysMin", 7, "day")
        }

        function Sn() {
            var e = this._data;
            return this._milliseconds = _o(this._milliseconds), this._days = _o(this._days), this._months = _o(this._months), e.milliseconds = _o(e.milliseconds), e.seconds = _o(e.seconds), e.minutes = _o(e.minutes), e.hours = _o(e.hours), e.months = _o(e.months), e.years = _o(e.years), this
        }

        function Yn(e, t, n, i) {
            var s = Qe(t, n);
            return e._milliseconds += i * s._milliseconds, e._days += i * s._days, e._months += i * s._months, e._bubble()
        }

        function Cn(e, t) {
            return Yn(this, e, t, 1)
        }

        function En(e, t) {
            return Yn(this, e, t, -1)
        }

        function An(e) {
            return 0 > e ? Math.floor(e) : Math.ceil(e)
        }

        function jn() {
            var e, t, n, i, s, o = this._milliseconds,
                r = this._days,
                a = this._months,
                l = this._data;
            return o >= 0 && r >= 0 && a >= 0 || 0 >= o && 0 >= r && 0 >= a || (o += 864e5 * An(On(a) + r), r = 0, a = 0), l.milliseconds = o % 1e3, e = g(o / 1e3), l.seconds = e % 60, t = g(e / 60), l.minutes = t % 60, n = g(t / 60), l.hours = n % 24, r += g(n / 24), s = g(Hn(r)), a += s, r -= An(On(s)), i = g(a / 12), a %= 12, l.days = r, l.months = a, l.years = i, this
        }

        function Hn(e) {
            return 4800 * e / 146097
        }

        function On(e) {
            return 146097 * e / 4800
        }

        function In(e) {
            var t, n, i = this._milliseconds;
            if (e = D(e), "month" === e || "year" === e) return t = this._days + i / 864e5, n = this._months + Hn(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(On(this._months)), e) {
                case "week":
                    return t / 7 + i / 6048e5;
                case "day":
                    return t + i / 864e5;
                case "hour":
                    return 24 * t + i / 36e5;
                case "minute":
                    return 1440 * t + i / 6e4;
                case "second":
                    return 86400 * t + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + i;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }

        function Pn() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _(this._months / 12)
        }

        function $n(e) {
            return function() {
                return this.as(e)
            }
        }

        function Nn(e) {
            return e = D(e), this[e + "s"]()
        }

        function Fn(e) {
            return function() {
                return this._data[e]
            }
        }

        function Wn() {
            return g(this.days() / 7)
        }

        function zn(e, t, n, i, s) {
            return s.relativeTime(t || 1, !!n, e, i)
        }

        function Rn(e, t, n) {
            var i = Qe(e).abs(),
                s = jo(i.as("s")),
                o = jo(i.as("m")),
                r = jo(i.as("h")),
                a = jo(i.as("d")),
                l = jo(i.as("M")),
                d = jo(i.as("y")),
                u = s < Ho.s && ["s", s] || 1 >= o && ["m"] || o < Ho.m && ["mm", o] || 1 >= r && ["h"] || r < Ho.h && ["hh", r] || 1 >= a && ["d"] || a < Ho.d && ["dd", a] || 1 >= l && ["M"] || l < Ho.M && ["MM", l] || 1 >= d && ["y"] || ["yy", d];
            return u[2] = t, u[3] = +e > 0, u[4] = n, zn.apply(null, u)
        }

        function qn(e, t) {
            return void 0 === Ho[e] ? !1 : void 0 === t ? Ho[e] : (Ho[e] = t, !0)
        }

        function Bn(e) {
            var t = this.localeData(),
                n = Rn(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n)
        }

        function Un() {
            var e, t, n, i = Oo(this._milliseconds) / 1e3,
                s = Oo(this._days),
                o = Oo(this._months);
            e = g(i / 60), t = g(e / 60), i %= 60, e %= 60, n = g(o / 12), o %= 12;
            var r = n,
                a = o,
                l = s,
                d = t,
                u = e,
                c = i,
                p = this.asSeconds();
            return p ? (0 > p ? "-" : "") + "P" + (r ? r + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (d || u || c ? "T" : "") + (d ? d + "H" : "") + (u ? u + "M" : "") + (c ? c + "S" : "") : "P0D"
        }

        function Vn(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
        }

        function Gn(e, t, n) {
            var i = {
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            };
            return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + Vn(i[n], +e)
        }

        function Xn(e, t, n) {
            var i = {
                mm: "munutenn",
                MM: "miz",
                dd: "devezh"
            };
            return e + " " + Kn(i[n], e)
        }

        function Jn(e) {
            switch (Qn(e)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return e + " bloaz";
                default:
                    return e + " vloaz"
            }
        }

        function Qn(e) {
            return e > 9 ? Qn(e % 10) : e
        }

        function Kn(e, t) {
            return 2 === t ? Zn(e) : e
        }

        function Zn(e) {
            var t = {
                m: "v",
                b: "v",
                d: "z"
            };
            return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
        }

        function ei(e, t, n) {
            var i = e + " ";
            switch (n) {
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return i += 1 === e ? "dan" : "dana";
                case "MM":
                    return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        function ti(e) {
            return e > 1 && 5 > e && 1 !== ~~(e / 10)
        }

        function ni(e, t, n, i) {
            var s = e + " ";
            switch (n) {
                case "s":
                    return t || i ? "pár sekund" : "pár sekundami";
                case "m":
                    return t ? "minuta" : i ? "minutu" : "minutou";
                case "mm":
                    return t || i ? s + (ti(e) ? "minuty" : "minut") : s + "minutami";
                case "h":
                    return t ? "hodina" : i ? "hodinu" : "hodinou";
                case "hh":
                    return t || i ? s + (ti(e) ? "hodiny" : "hodin") : s + "hodinami";
                case "d":
                    return t || i ? "den" : "dnem";
                case "dd":
                    return t || i ? s + (ti(e) ? "dny" : "dní") : s + "dny";
                case "M":
                    return t || i ? "měsíc" : "měsícem";
                case "MM":
                    return t || i ? s + (ti(e) ? "měsíce" : "měsíců") : s + "měsíci";
                case "y":
                    return t || i ? "rok" : "rokem";
                case "yy":
                    return t || i ? s + (ti(e) ? "roky" : "let") : s + "lety"
            }
        }

        function ii(e, t, n, i) {
            var s = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? s[n][0] : s[n][1]
        }

        function si(e, t, n, i) {
            var s = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? s[n][0] : s[n][1]
        }

        function oi(e, t, n, i) {
            var s = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? s[n][2] ? s[n][2] : s[n][1] : i ? s[n][0] : s[n][1]
        }

        function ri(e, t, n, i) {
            var s = "";
            switch (n) {
                case "s":
                    return i ? "muutaman sekunnin" : "muutama sekunti";
                case "m":
                    return i ? "minuutin" : "minuutti";
                case "mm":
                    s = i ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return i ? "tunnin" : "tunti";
                case "hh":
                    s = i ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return i ? "päivän" : "päivä";
                case "dd":
                    s = i ? "päivän" : "päivää";
                    break;
                case "M":
                    return i ? "kuukauden" : "kuukausi";
                case "MM":
                    s = i ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return i ? "vuoden" : "vuosi";
                case "yy":
                    s = i ? "vuoden" : "vuotta"
            }
            return s = ai(e, i) + " " + s
        }

        function ai(e, t) {
            return 10 > e ? t ? rr[e] : or[e] : e
        }

        function li(e, t, n) {
            var i = e + " ";
            switch (n) {
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return i += 1 === e ? "dan" : "dana";
                case "MM":
                    return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        function di(e, t, n, i) {
            var s = e;
            switch (n) {
                case "s":
                    return i || t ? "néhány másodperc" : "néhány másodperce";
                case "m":
                    return "egy" + (i || t ? " perc" : " perce");
                case "mm":
                    return s + (i || t ? " perc" : " perce");
                case "h":
                    return "egy" + (i || t ? " óra" : " órája");
                case "hh":
                    return s + (i || t ? " óra" : " órája");
                case "d":
                    return "egy" + (i || t ? " nap" : " napja");
                case "dd":
                    return s + (i || t ? " nap" : " napja");
                case "M":
                    return "egy" + (i || t ? " hónap" : " hónapja");
                case "MM":
                    return s + (i || t ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (i || t ? " év" : " éve");
                case "yy":
                    return s + (i || t ? " év" : " éve")
            }
            return ""
        }

        function ui(e) {
            return (e ? "" : "[múlt] ") + "[" + gr[this.day()] + "] LT[-kor]"
        }

        function ci(e) {
            return e % 100 === 11 ? !0 : e % 10 === 1 ? !1 : !0
        }

        function pi(e, t, n, i) {
            var s = e + " ";
            switch (n) {
                case "s":
                    return t || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "m":
                    return t ? "mínúta" : "mínútu";
                case "mm":
                    return ci(e) ? s + (t || i ? "mínútur" : "mínútum") : t ? s + "mínúta" : s + "mínútu";
                case "hh":
                    return ci(e) ? s + (t || i ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
                case "d":
                    return t ? "dagur" : i ? "dag" : "degi";
                case "dd":
                    return ci(e) ? t ? s + "dagar" : s + (i ? "daga" : "dögum") : t ? s + "dagur" : s + (i ? "dag" : "degi");
                case "M":
                    return t ? "mánuður" : i ? "mánuð" : "mánuði";
                case "MM":
                    return ci(e) ? t ? s + "mánuðir" : s + (i ? "mánuði" : "mánuðum") : t ? s + "mánuður" : s + (i ? "mánuð" : "mánuði");
                case "y":
                    return t || i ? "ár" : "ári";
                case "yy":
                    return ci(e) ? s + (t || i ? "ár" : "árum") : s + (t || i ? "ár" : "ári")
            }
        }

        function hi(e, t, n, i) {
            var s = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? s[n][0] : s[n][1]
        }

        function fi(e) {
            var t = e.substr(0, e.indexOf(" "));
            return gi(t) ? "a " + e : "an " + e
        }

        function mi(e) {
            var t = e.substr(0, e.indexOf(" "));
            return gi(t) ? "viru " + e : "virun " + e
        }

        function gi(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (0 > e) return !0;
            if (10 > e) return e >= 4 && 7 >= e ? !0 : !1;
            if (100 > e) {
                var t = e % 10,
                    n = e / 10;
                return gi(0 === t ? n : t)
            }
            if (1e4 > e) {
                for (; e >= 10;) e /= 10;
                return gi(e)
            }
            return e /= 1e3, gi(e)
        }

        function _i(e, t, n, i) {
            return t ? "kelios sekundės" : i ? "kelių sekundžių" : "kelias sekundes"
        }

        function yi(e, t, n, i) {
            return t ? bi(n)[0] : i ? bi(n)[1] : bi(n)[2]
        }

        function vi(e) {
            return e % 10 === 0 || e > 10 && 20 > e
        }

        function bi(e) {
            return yr[e].split("_")
        }

        function wi(e, t, n, i) {
            var s = e + " ";
            return 1 === e ? s + yi(e, t, n[0], i) : t ? s + (vi(e) ? bi(n)[1] : bi(n)[0]) : i ? s + bi(n)[1] : s + (vi(e) ? bi(n)[1] : bi(n)[2])
        }

        function Mi(e, t, n) {
            return n ? t % 10 === 1 && 11 !== t ? e[2] : e[3] : t % 10 === 1 && 11 !== t ? e[0] : e[1]
        }

        function ki(e, t, n) {
            return e + " " + Mi(vr[n], e, t)
        }

        function Li(e, t, n) {
            return Mi(vr[n], e, t)
        }

        function Ti(e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm"
        }

        function xi(e, t, n, i) {
            var s = "";
            if (t) switch (n) {
                case "s":
                    s = "काही सेकंद";
                    break;
                case "m":
                    s = "एक मिनिट";
                    break;
                case "mm":
                    s = "%d मिनिटे";
                    break;
                case "h":
                    s = "एक तास";
                    break;
                case "hh":
                    s = "%d तास";
                    break;
                case "d":
                    s = "एक दिवस";
                    break;
                case "dd":
                    s = "%d दिवस";
                    break;
                case "M":
                    s = "एक महिना";
                    break;
                case "MM":
                    s = "%d महिने";
                    break;
                case "y":
                    s = "एक वर्ष";
                    break;
                case "yy":
                    s = "%d वर्षे"
            } else switch (n) {
                case "s":
                    s = "काही सेकंदां";
                    break;
                case "m":
                    s = "एका मिनिटा";
                    break;
                case "mm":
                    s = "%d मिनिटां";
                    break;
                case "h":
                    s = "एका तासा";
                    break;
                case "hh":
                    s = "%d तासां";
                    break;
                case "d":
                    s = "एका दिवसा";
                    break;
                case "dd":
                    s = "%d दिवसां";
                    break;
                case "M":
                    s = "एका महिन्या";
                    break;
                case "MM":
                    s = "%d महिन्यां";
                    break;
                case "y":
                    s = "एका वर्षा";
                    break;
                case "yy":
                    s = "%d वर्षां"
            }
            return s.replace(/%d/i, e)
        }

        function Di(e) {
            return 5 > e % 10 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
        }

        function Si(e, t, n) {
            var i = e + " ";
            switch (n) {
                case "m":
                    return t ? "minuta" : "minutę";
                case "mm":
                    return i + (Di(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinę";
                case "hh":
                    return i + (Di(e) ? "godziny" : "godzin");
                case "MM":
                    return i + (Di(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return i + (Di(e) ? "lata" : "lat")
            }
        }

        function Yi(e, t, n) {
            var i = {
                    mm: "minute",
                    hh: "ore",
                    dd: "zile",
                    MM: "luni",
                    yy: "ani"
                },
                s = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (s = " de "), e + s + i[n]
        }

        function Ci(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
        }

        function Ei(e, t, n) {
            var i = {
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            return "m" === n ? t ? "минута" : "минуту" : e + " " + Ci(i[n], +e)
        }

        function Ai(e) {
            return e > 1 && 5 > e
        }

        function ji(e, t, n, i) {
            var s = e + " ";
            switch (n) {
                case "s":
                    return t || i ? "pár sekúnd" : "pár sekundami";
                case "m":
                    return t ? "minúta" : i ? "minútu" : "minútou";
                case "mm":
                    return t || i ? s + (Ai(e) ? "minúty" : "minút") : s + "minútami";
                case "h":
                    return t ? "hodina" : i ? "hodinu" : "hodinou";
                case "hh":
                    return t || i ? s + (Ai(e) ? "hodiny" : "hodín") : s + "hodinami";
                case "d":
                    return t || i ? "deň" : "dňom";
                case "dd":
                    return t || i ? s + (Ai(e) ? "dni" : "dní") : s + "dňami";
                case "M":
                    return t || i ? "mesiac" : "mesiacom";
                case "MM":
                    return t || i ? s + (Ai(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
                case "y":
                    return t || i ? "rok" : "rokom";
                case "yy":
                    return t || i ? s + (Ai(e) ? "roky" : "rokov") : s + "rokmi"
            }
        }

        function Hi(e, t, n, i) {
            var s = e + " ";
            switch (n) {
                case "s":
                    return t || i ? "nekaj sekund" : "nekaj sekundami";
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return s += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || i ? "minuti" : "minutama" : 5 > e ? t || i ? "minute" : "minutami" : t || i ? "minut" : "minutami";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return s += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || i ? "uri" : "urama" : 5 > e ? t || i ? "ure" : "urami" : t || i ? "ur" : "urami";
                case "d":
                    return t || i ? "en dan" : "enim dnem";
                case "dd":
                    return s += 1 === e ? t || i ? "dan" : "dnem" : 2 === e ? t || i ? "dni" : "dnevoma" : t || i ? "dni" : "dnevi";
                case "M":
                    return t || i ? "en mesec" : "enim mesecem";
                case "MM":
                    return s += 1 === e ? t || i ? "mesec" : "mesecem" : 2 === e ? t || i ? "meseca" : "mesecema" : 5 > e ? t || i ? "mesece" : "meseci" : t || i ? "mesecev" : "meseci";
                case "y":
                    return t || i ? "eno leto" : "enim letom";
                case "yy":
                    return s += 1 === e ? t || i ? "leto" : "letom" : 2 === e ? t || i ? "leti" : "letoma" : 5 > e ? t || i ? "leta" : "leti" : t || i ? "let" : "leti"
            }
        }

        function Oi(e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
        }

        function Ii(e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
        }

        function Pi(e, t, n, i) {
            var s = $i(e);
            switch (n) {
                case "mm":
                    return s + " tup";
                case "hh":
                    return s + " rep";
                case "dd":
                    return s + " jaj";
                case "MM":
                    return s + " jar";
                case "yy":
                    return s + " DIS"
            }
        }

        function $i(e) {
            var t = Math.floor(e % 1e3 / 100),
                n = Math.floor(e % 100 / 10),
                i = e % 10,
                s = "";
            return t > 0 && (s += $r[t] + "vatlh"), n > 0 && (s += ("" !== s ? " " : "") + $r[n] + "maH"), i > 0 && (s += ("" !== s ? " " : "") + $r[i]), "" === s ? "pagh" : s
        }

        function Ni(e, t, n, i) {
            var s = {
                s: ["viensas secunds", "'iensas secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", "" + e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", "" + e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", "" + e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", "" + e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", "" + e + " ars"]
            };
            return i ? s[n][0] : t ? s[n][0] : s[n][1]
        }

        function Fi(e, t) {
            var n = e.split("_");
            return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
        }

        function Wi(e, t, n) {
            var i = {
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + Fi(i[n], +e)
        }

        function zi(e, t) {
            var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                },
                i = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
            return n[i][e.day()]
        }

        function Ri(e) {
            return function() {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }
        var qi, Bi, Ui = e.momentProperties = [],
            Vi = !1,
            Gi = {},
            Xi = {},
            Ji = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Qi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Ki = {},
            Zi = {},
            es = /\d/,
            ts = /\d\d/,
            ns = /\d{3}/,
            is = /\d{4}/,
            ss = /[+-]?\d{6}/,
            os = /\d\d?/,
            rs = /\d\d\d\d?/,
            as = /\d\d\d\d\d\d?/,
            ls = /\d{1,3}/,
            ds = /\d{1,4}/,
            us = /[+-]?\d{1,6}/,
            cs = /\d+/,
            ps = /[+-]?\d+/,
            hs = /Z|[+-]\d\d:?\d\d/gi,
            fs = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ms = /[+-]?\d+(\.\d{1,3})?/,
            gs = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            _s = {},
            ys = {},
            vs = 0,
            bs = 1,
            ws = 2,
            Ms = 3,
            ks = 4,
            Ls = 5,
            Ts = 6,
            xs = 7,
            Ds = 8;
        O("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), O("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e)
        }), O("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e)
        }), x("month", "M"), F("M", os), F("MM", os, ts), F("MMM", function(e, t) {
            return t.monthsShortRegex(e)
        }), F("MMMM", function(e, t) {
            return t.monthsRegex(e)
        }), q(["M", "MM"], function(e, t) {
            t[bs] = _(e) - 1
        }), q(["MMM", "MMMM"], function(e, t, n, i) {
            var s = n._locale.monthsParse(e, i, n._strict);
            null != s ? t[bs] = s : d(n).invalidMonth = e
        });
        var Ss = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
            Ys = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            Cs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            Es = gs,
            As = gs,
            js = {};
        e.suppressDeprecationWarnings = !1;
        var Hs = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Os = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Is = /Z|[+-]\d\d(?::?\d\d)?/,
            Ps = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            $s = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            Ns = /^\/?Date\((\-?\d+)/i;
        e.createFromInputFallback = oe("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), O("Y", 0, 0, function() {
            var e = this.year();
            return 9999 >= e ? "" + e : "+" + e
        }), O(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), O(0, ["YYYY", 4], 0, "year"), O(0, ["YYYYY", 5], 0, "year"), O(0, ["YYYYYY", 6, !0], 0, "year"), x("year", "y"), F("Y", ps), F("YY", os, ts), F("YYYY", ds, is), F("YYYYY", us, ss), F("YYYYYY", us, ss), q(["YYYYY", "YYYYYY"], vs), q("YYYY", function(t, n) {
            n[vs] = 2 === t.length ? e.parseTwoDigitYear(t) : _(t)
        }), q("YY", function(t, n) {
            n[vs] = e.parseTwoDigitYear(t)
        }), q("Y", function(e, t) {
            t[vs] = parseInt(e, 10)
        }), e.parseTwoDigitYear = function(e) {
            return _(e) + (_(e) > 68 ? 1900 : 2e3)
        };
        var Fs = C("FullYear", !1);
        e.ISO_8601 = function() {};
        var Ws = oe("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Ce.apply(null, arguments);
                return this.isValid() && e.isValid() ? this > e ? this : e : c()
            }),
            zs = oe("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                var e = Ce.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : c()
            }),
            Rs = function() {
                return Date.now ? Date.now() : +new Date
            };
        Ie("Z", ":"), Ie("ZZ", ""), F("Z", fs), F("ZZ", fs), q(["Z", "ZZ"], function(e, t, n) {
            n._useUTC = !0, n._tzm = Pe(fs, e)
        });
        var qs = /([\+\-]|\d\d)/gi;
        e.updateOffset = function() {};
        var Bs = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            Us = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
        Qe.fn = He.prototype;
        var Vs = tt(1, "add"),
            Gs = tt(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var Xs = oe("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        });
        O(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), O(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), Ht("gggg", "weekYear"), Ht("ggggg", "weekYear"), Ht("GGGG", "isoWeekYear"), Ht("GGGGG", "isoWeekYear"), x("weekYear", "gg"), x("isoWeekYear", "GG"), F("G", ps), F("g", ps), F("GG", os, ts), F("gg", os, ts), F("GGGG", ds, is), F("gggg", ds, is), F("GGGGG", us, ss), F("ggggg", us, ss), B(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
            t[i.substr(0, 2)] = _(e)
        }), B(["gg", "GG"], function(t, n, i, s) {
            n[s] = e.parseTwoDigitYear(t)
        }), O("Q", 0, "Qo", "quarter"), x("quarter", "Q"), F("Q", es), q("Q", function(e, t) {
            t[bs] = 3 * (_(e) - 1)
        }), O("w", ["ww", 2], "wo", "week"), O("W", ["WW", 2], "Wo", "isoWeek"), x("week", "w"), x("isoWeek", "W"), F("w", os), F("ww", os, ts), F("W", os), F("WW", os, ts), B(["w", "ww", "W", "WW"], function(e, t, n, i) {
            t[i.substr(0, 1)] = _(e)
        });
        var Js = {
            dow: 0,
            doy: 6
        };
        O("D", ["DD", 2], "Do", "date"), x("date", "D"), F("D", os), F("DD", os, ts), F("Do", function(e, t) {
            return e ? t._ordinalParse : t._ordinalParseLenient
        }), q(["D", "DD"], ws), q("Do", function(e, t) {
            t[ws] = _(e.match(os)[0], 10)
        });
        var Qs = C("Date", !0);
        O("d", 0, "do", "day"), O("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
        }), O("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
        }), O("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
        }), O("e", 0, 0, "weekday"), O("E", 0, 0, "isoWeekday"), x("day", "d"), x("weekday", "e"), x("isoWeekday", "E"), F("d", os), F("e", os), F("E", os), F("dd", gs), F("ddd", gs), F("dddd", gs), B(["dd", "ddd", "dddd"], function(e, t, n, i) {
            var s = n._locale.weekdaysParse(e, i, n._strict);
            null != s ? t.d = s : d(n).invalidWeekday = e
        }), B(["d", "e", "E"], function(e, t, n, i) {
            t[i] = _(e)
        });
        var Ks = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Zs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            eo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        O("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), x("dayOfYear", "DDD"), F("DDD", ls), F("DDDD", ns), q(["DDD", "DDDD"], function(e, t, n) {
            n._dayOfYear = _(e)
        }), O("H", ["HH", 2], 0, "hour"), O("h", ["hh", 2], 0, nn), O("hmm", 0, 0, function() {
            return "" + nn.apply(this) + H(this.minutes(), 2)
        }), O("hmmss", 0, 0, function() {
            return "" + nn.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2)
        }), O("Hmm", 0, 0, function() {
            return "" + this.hours() + H(this.minutes(), 2)
        }), O("Hmmss", 0, 0, function() {
            return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2)
        }), sn("a", !0), sn("A", !1), x("hour", "h"), F("a", on), F("A", on), F("H", os), F("h", os), F("HH", os, ts), F("hh", os, ts), F("hmm", rs), F("hmmss", as), F("Hmm", rs), F("Hmmss", as), q(["H", "HH"], Ms), q(["a", "A"], function(e, t, n) {
            n._isPm = n._locale.isPM(e), n._meridiem = e
        }), q(["h", "hh"], function(e, t, n) {
            t[Ms] = _(e), d(n).bigHour = !0
        }), q("hmm", function(e, t, n) {
            var i = e.length - 2;
            t[Ms] = _(e.substr(0, i)), t[ks] = _(e.substr(i)), d(n).bigHour = !0
        }), q("hmmss", function(e, t, n) {
            var i = e.length - 4,
                s = e.length - 2;
            t[Ms] = _(e.substr(0, i)), t[ks] = _(e.substr(i, 2)), t[Ls] = _(e.substr(s)), d(n).bigHour = !0
        }), q("Hmm", function(e, t, n) {
            var i = e.length - 2;
            t[Ms] = _(e.substr(0, i)), t[ks] = _(e.substr(i))
        }), q("Hmmss", function(e, t, n) {
            var i = e.length - 4,
                s = e.length - 2;
            t[Ms] = _(e.substr(0, i)), t[ks] = _(e.substr(i, 2)), t[Ls] = _(e.substr(s))
        });
        var to = /[ap]\.?m?\.?/i,
            no = C("Hours", !0);
        O("m", ["mm", 2], 0, "minute"), x("minute", "m"), F("m", os), F("mm", os, ts), q(["m", "mm"], ks);
        var io = C("Minutes", !1);
        O("s", ["ss", 2], 0, "second"), x("second", "s"), F("s", os), F("ss", os, ts), q(["s", "ss"], Ls);
        var so = C("Seconds", !1);
        O("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), O(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), O(0, ["SSS", 3], 0, "millisecond"), O(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), O(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), O(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), O(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), O(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), O(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), x("millisecond", "ms"), F("S", ls, es), F("SS", ls, ts), F("SSS", ls, ns);
        var oo;
        for (oo = "SSSS"; oo.length <= 9; oo += "S") F(oo, cs);
        for (oo = "S"; oo.length <= 9; oo += "S") q(oo, ln);
        var ro = C("Milliseconds", !1);
        O("z", 0, 0, "zoneAbbr"), O("zz", 0, 0, "zoneName");
        var ao = f.prototype;
        ao.add = Vs, ao.calendar = it, ao.clone = st, ao.diff = ct, ao.endOf = kt, ao.format = mt, ao.from = gt, ao.fromNow = _t, ao.to = yt, ao.toNow = vt, ao.get = j, ao.invalidAt = At, ao.isAfter = ot, ao.isBefore = rt, ao.isBetween = at, ao.isSame = lt, ao.isSameOrAfter = dt, ao.isSameOrBefore = ut, ao.isValid = Ct, ao.lang = Xs, ao.locale = bt, ao.localeData = wt, ao.max = zs, ao.min = Ws, ao.parsingFlags = Et, ao.set = j, ao.startOf = Mt, ao.subtract = Gs, ao.toArray = Dt, ao.toObject = St, ao.toDate = xt, ao.toISOString = ft, ao.toJSON = Yt, ao.toString = ht, ao.unix = Tt, ao.valueOf = Lt, ao.creationData = jt, ao.year = Fs, ao.isLeapYear = he, ao.weekYear = Ot, ao.isoWeekYear = It, ao.quarter = ao.quarters = Wt, ao.month = K, ao.daysInMonth = Z, ao.week = ao.weeks = Bt, ao.isoWeek = ao.isoWeeks = Ut, ao.weeksInYear = $t, ao.isoWeeksInYear = Pt, ao.date = Qs, ao.day = ao.days = Kt, ao.weekday = Zt, ao.isoWeekday = en, ao.dayOfYear = tn, ao.hour = ao.hours = no, ao.minute = ao.minutes = io, ao.second = ao.seconds = so, ao.millisecond = ao.milliseconds = ro, ao.utcOffset = Fe, ao.utc = ze, ao.local = Re, ao.parseZone = qe, ao.hasAlignedHourOffset = Be, ao.isDST = Ue, ao.isDSTShifted = Ve, ao.isLocal = Ge, ao.isUtcOffset = Xe, ao.isUtc = Je, ao.isUTC = Je, ao.zoneAbbr = dn, ao.zoneName = un, ao.dates = oe("dates accessor is deprecated. Use date instead.", Qs), ao.months = oe("months accessor is deprecated. Use month instead", K), ao.years = oe("years accessor is deprecated. Use year instead", Fs), ao.zone = oe("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", We);
        var lo = ao,
            uo = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            co = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            po = "Invalid date",
            ho = "%d",
            fo = /\d{1,2}/,
            mo = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            go = v.prototype;
        go._calendar = uo, go.calendar = hn, go._longDateFormat = co, go.longDateFormat = fn, go._invalidDate = po, go.invalidDate = mn, go._ordinal = ho, go.ordinal = gn, go._ordinalParse = fo, go.preparse = _n, go.postformat = _n, go._relativeTime = mo, go.relativeTime = yn, go.pastFuture = vn, go.set = bn, go.months = G, go._months = Ys, go.monthsShort = X, go._monthsShort = Cs, go.monthsParse = J, go._monthsRegex = As, go.monthsRegex = te, go._monthsShortRegex = Es, go.monthsShortRegex = ee, go.week = zt, go._week = Js, go.firstDayOfYear = qt, go.firstDayOfWeek = Rt, go.weekdays = Gt, go._weekdays = Ks, go.weekdaysMin = Jt, go._weekdaysMin = eo, go.weekdaysShort = Xt, go._weekdaysShort = Zs, go.weekdaysParse = Qt, go.isPM = rn, go._meridiemParse = to, go.meridiem = an, k("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 === _(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        }), e.lang = oe("moment.lang is deprecated. Use moment.locale instead.", k), e.langData = oe("moment.langData is deprecated. Use moment.localeData instead.", T);
        var _o = Math.abs,
            yo = $n("ms"),
            vo = $n("s"),
            bo = $n("m"),
            wo = $n("h"),
            Mo = $n("d"),
            ko = $n("w"),
            Lo = $n("M"),
            To = $n("y"),
            xo = Fn("milliseconds"),
            Do = Fn("seconds"),
            So = Fn("minutes"),
            Yo = Fn("hours"),
            Co = Fn("days"),
            Eo = Fn("months"),
            Ao = Fn("years"),
            jo = Math.round,
            Ho = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            Oo = Math.abs,
            Io = He.prototype;
        Io.abs = Sn, Io.add = Cn, Io.subtract = En, Io.as = In, Io.asMilliseconds = yo, Io.asSeconds = vo, Io.asMinutes = bo, Io.asHours = wo, Io.asDays = Mo, Io.asWeeks = ko, Io.asMonths = Lo, Io.asYears = To, Io.valueOf = Pn, Io._bubble = jn, Io.get = Nn, Io.milliseconds = xo, Io.seconds = Do, Io.minutes = So, Io.hours = Yo, Io.days = Co, Io.weeks = Wn, Io.months = Eo, Io.years = Ao, Io.humanize = Bn, Io.toISOString = Un, Io.toString = Un, Io.toJSON = Un, Io.locale = bt, Io.localeData = wt, Io.toIsoString = oe("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Un), Io.lang = Xs, O("X", 0, 0, "unix"), O("x", 0, 0, "valueOf"), F("x", ps), F("X", ms), q("X", function(e, t, n) {
            n._d = new Date(1e3 * parseFloat(e, 10))
        }), q("x", function(e, t, n) {
            n._d = new Date(_(e))
        }), e.version = "2.11.1", t(Ce), e.fn = lo, e.min = Ae, e.max = je, e.now = Rs, e.utc = a, e.unix = cn, e.months = kn, e.isDate = i, e.locale = k, e.invalid = c, e.duration = Qe, e.isMoment = m, e.weekdays = Tn, e.parseZone = pn, e.localeData = T, e.isDuration = Oe, e.monthsShort = Ln, e.weekdaysMin = Dn, e.defineLocale = L, e.weekdaysShort = xn, e.normalizeUnits = D, e.relativeTimeThreshold = qn, e.prototype = lo;
        var Po = e,
            $o = (Po.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function(e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? n ? "vm" : "VM" : n ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                ordinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            }), {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }),
            No = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            Fo = (Po.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return No[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return $o[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            }), Po.defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }),
            Wo = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            zo = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            Ro = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            qo = function(e) {
                return function(t, n, i, s) {
                    var o = zo(t),
                        r = Ro[e][zo(t)];
                    return 2 === o && (r = r[n ? 0 : 1]), r.replace(/%d/i, t)
                }
            },
            Bo = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"],
            Uo = (Po.defineLocale("ar", {
                months: Bo,
                monthsShort: Bo,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: qo("s"),
                    m: qo("m"),
                    mm: qo("m"),
                    h: qo("h"),
                    hh: qo("h"),
                    d: qo("d"),
                    dd: qo("d"),
                    M: qo("M"),
                    MM: qo("M"),
                    y: qo("y"),
                    yy: qo("y")
                },
                preparse: function(e) {
                    return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return Wo[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return Fo[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            }), {
                1: "-inci",
                5: "-inci",
                8: "-inci",
                70: "-inci",
                80: "-inci",
                2: "-nci",
                7: "-nci",
                20: "-nci",
                50: "-nci",
                3: "-üncü",
                4: "-üncü",
                100: "-üncü",
                6: "-ncı",
                9: "-uncu",
                10: "-uncu",
                30: "-uncu",
                60: "-ıncı",
                90: "-ıncı"
            }),
            Vo = (Po.defineLocale("az", {
                months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[sabah saat] LT",
                    nextWeek: "[gələn həftə] dddd [saat] LT",
                    lastDay: "[dünən] LT",
                    lastWeek: "[keçən həftə] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s əvvəl",
                    s: "birneçə saniyyə",
                    m: "bir dəqiqə",
                    mm: "%d dəqiqə",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir il",
                    yy: "%d il"
                },
                meridiemParse: /gecə|səhər|gündüz|axşam/,
                isPM: function(e) {
                    return /^(gündüz|axşam)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return 4 > e ? "gecə" : 12 > e ? "səhər" : 17 > e ? "gündüz" : "axşam"
                },
                ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                ordinal: function(e) {
                    if (0 === e) return e + "-ıncı";
                    var t = e % 10,
                        n = e % 100 - t,
                        i = e >= 100 ? 100 : null;
                    return e + (Uo[t] || Uo[n] || Uo[i])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("be", {
                months: {
                    format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                    standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
                },
                monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                weekdays: {
                    format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                    standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
                },
                weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сёння ў] LT",
                    nextDay: "[Заўтра ў] LT",
                    lastDay: "[Учора ў] LT",
                    nextWeek: function() {
                        return "[У] dddd [ў] LT"
                    },
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return "[У мінулую] dddd [ў] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У мінулы] dddd [ў] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "праз %s",
                    past: "%s таму",
                    s: "некалькі секунд",
                    m: Gn,
                    mm: Gn,
                    h: Gn,
                    hh: Gn,
                    d: "дзень",
                    dd: Gn,
                    M: "месяц",
                    MM: Gn,
                    y: "год",
                    yy: Gn
                },
                meridiemParse: /ночы|раніцы|дня|вечара/,
                isPM: function(e) {
                    return /^(дня|вечара)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return 4 > e ? "ночы" : 12 > e ? "раніцы" : 17 > e ? "дня" : "вечара"
                },
                ordinalParse: /\d{1,2}-(і|ы|га)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-ы" : e + "-і";
                        case "D":
                            return e + "-га";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[В изминалата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[В изминалия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дни",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            }),
            Go = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            },
            Xo = (Po.defineLocale("bn", {
                months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি".split("_"),
                weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function(e) {
                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                        return Go[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return Vo[e]
                    })
                },
                meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                isPM: function(e) {
                    return /^(দুপুর|বিকাল|রাত)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return 4 > e ? "রাত" : 10 > e ? "সকাল" : 17 > e ? "দুপুর" : 20 > e ? "বিকাল" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            }), {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            }),
            Jo = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            },
            Qo = (Po.defineLocale("bo", {
                months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[དི་རིང] LT",
                    nextDay: "[སང་ཉིན] LT",
                    nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                    lastDay: "[ཁ་སང] LT",
                    lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ལ་",
                    past: "%s སྔན་ལ",
                    s: "ལམ་སང",
                    m: "སྐར་མ་གཅིག",
                    mm: "%d སྐར་མ",
                    h: "ཆུ་ཚོད་གཅིག",
                    hh: "%d ཆུ་ཚོད",
                    d: "ཉིན་གཅིག",
                    dd: "%d ཉིན་",
                    M: "ཟླ་བ་གཅིག",
                    MM: "%d ཟླ་བ",
                    y: "ལོ་གཅིག",
                    yy: "%d ལོ"
                },
                preparse: function(e) {
                    return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                        return Jo[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return Xo[e]
                    })
                },
                meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                isPM: function(e) {
                    return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return 4 > e ? "མཚན་མོ" : 10 > e ? "ཞོགས་ཀས" : 17 > e ? "ཉིན་གུང" : 20 > e ? "དགོང་དག" : "མཚན་མོ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            }), Po.defineLocale("br", {
                months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
                weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                longDateFormat: {
                    LT: "h[e]mm A",
                    LTS: "h[e]mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [a viz] MMMM YYYY",
                    LLL: "D [a viz] MMMM YYYY h[e]mm A",
                    LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
                },
                calendar: {
                    sameDay: "[Hiziv da] LT",
                    nextDay: "[Warc'hoazh da] LT",
                    nextWeek: "dddd [da] LT",
                    lastDay: "[Dec'h da] LT",
                    lastWeek: "dddd [paset da] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "a-benn %s",
                    past: "%s 'zo",
                    s: "un nebeud segondennoù",
                    m: "ur vunutenn",
                    mm: Xn,
                    h: "un eur",
                    hh: "%d eur",
                    d: "un devezh",
                    dd: Xn,
                    M: "ur miz",
                    MM: Xn,
                    y: "ur bloaz",
                    yy: Jn
                },
                ordinalParse: /\d{1,2}(añ|vet)/,
                ordinal: function(e) {
                    var t = 1 === e ? "añ" : "vet";
                    return e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: ei,
                    mm: ei,
                    h: ei,
                    hh: ei,
                    d: "dan",
                    dd: ei,
                    M: "mjesec",
                    MM: ei,
                    y: "godinu",
                    yy: ei
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("ca", {
                months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function() {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "fa %s",
                    s: "uns segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                ordinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(e, t) {
                    var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return ("w" === t || "W" === t) && (n = "a"), e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")),
            Ko = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
            Zo = (Po.defineLocale("cs", {
                months: Qo,
                monthsShort: Ko,
                monthsParse: function(e, t) {
                    var n, i = [];
                    for (n = 0; 12 > n; n++) i[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                    return i
                }(Qo, Ko),
                shortMonthsParse: function(e) {
                    var t, n = [];
                    for (t = 0; 12 > t; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                    return n
                }(Ko),
                longMonthsParse: function(e) {
                    var t, n = [];
                    for (t = 0; 12 > t; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                    return n
                }(Qo),
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zítra v] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[včera v] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: ni,
                    m: ni,
                    mm: ni,
                    h: ni,
                    hh: ni,
                    d: ni,
                    dd: ni,
                    M: ni,
                    MM: ni,
                    y: ni,
                    yy: ni
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("cv", {
                months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
                monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
                weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
                weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
                weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                    LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                    LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
                },
                calendar: {
                    sameDay: "[Паян] LT [сехетре]",
                    nextDay: "[Ыран] LT [сехетре]",
                    lastDay: "[Ӗнер] LT [сехетре]",
                    nextWeek: "[Ҫитес] dddd LT [сехетре]",
                    lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
                        return e + t
                    },
                    past: "%s каялла",
                    s: "пӗр-ик ҫеккунт",
                    m: "пӗр минут",
                    mm: "%d минут",
                    h: "пӗр сехет",
                    hh: "%d сехет",
                    d: "пӗр кун",
                    dd: "%d кун",
                    M: "пӗр уйӑх",
                    MM: "%d уйӑх",
                    y: "пӗр ҫул",
                    yy: "%d ҫул"
                },
                ordinalParse: /\d{1,2}-мӗш/,
                ordinal: "%d-мӗш",
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn ôl",
                    s: "ychydig eiliadau",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function(e) {
                    var t = e,
                        n = "",
                        i = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                    return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = i[t]), e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[I dag kl.] LT",
                    nextDay: "[I morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[I går kl.] LT",
                    lastWeek: "[sidste] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "få sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "et år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("de-at", {
                months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: ii,
                    mm: "%d Minuten",
                    h: ii,
                    hh: "%d Stunden",
                    d: ii,
                    dd: ii,
                    M: ii,
                    MM: ii,
                    y: ii,
                    yy: ii
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: si,
                    mm: "%d Minuten",
                    h: si,
                    hh: "%d Stunden",
                    d: si,
                    dd: si,
                    M: si,
                    MM: si,
                    y: si,
                    yy: si
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]),
            er = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"],
            tr = (Po.defineLocale("dv", {
                months: Zo,
                monthsShort: Zo,
                weekdays: er,
                weekdaysShort: er,
                weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /މކ|މފ/,
                isPM: function(e) {
                    return "" === e
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? "މކ" : "މފ"
                },
                calendar: {
                    sameDay: "[މިއަދު] LT",
                    nextDay: "[މާދަމާ] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[އިއްޔެ] LT",
                    lastWeek: "[ފާއިތުވި] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ތެރޭގައި %s",
                    past: "ކުރިން %s",
                    s: "ސިކުންތުކޮޅެއް",
                    m: "މިނިޓެއް",
                    mm: "މިނިޓު %d",
                    h: "ގަޑިއިރެއް",
                    hh: "ގަޑިއިރު %d",
                    d: "ދުވަހެއް",
                    dd: "ދުވަސް %d",
                    M: "މަހެއް",
                    MM: "މަސް %d",
                    y: "އަހަރެއް",
                    yy: "އަހަރު %d"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 7,
                    doy: 12
                }
            }), Po.defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function(e, t) {
                    return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
                },
                isPM: function(e) {
                    return "μ" === (e + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 6:
                                return "[το προηγούμενο] dddd [{}] LT";
                            default:
                                return "[την προηγούμενη] dddd [{}] LT"
                        }
                    },
                    sameElse: "L"
                },
                calendar: function(e, t) {
                    var n = this._calendarEl[e],
                        i = t && t.hours();
                    return Y(n) && (n = n.apply(t)), n.replace("{}", i % 12 === 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                ordinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM, YYYY",
                    LLL: "D MMMM, YYYY h:mm A",
                    LLLL: "dddd, D MMMM, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            }), Po.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
                weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
                weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D[-an de] MMMM, YYYY",
                    LLL: "D[-an de] MMMM, YYYY HH:mm",
                    LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function(e) {
                    return "p" === e.charAt(0).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
                },
                calendar: {
                    sameDay: "[Hodiaŭ je] LT",
                    nextDay: "[Morgaŭ je] LT",
                    nextWeek: "dddd [je] LT",
                    lastDay: "[Hieraŭ je] LT",
                    lastWeek: "[pasinta] dddd [je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "je %s",
                    past: "antaŭ %s",
                    s: "sekundoj",
                    m: "minuto",
                    mm: "%d minutoj",
                    h: "horo",
                    hh: "%d horoj",
                    d: "tago",
                    dd: "%d tagoj",
                    M: "monato",
                    MM: "%d monatoj",
                    y: "jaro",
                    yy: "%d jaroj"
                },
                ordinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {
                    dow: 1,
                    doy: 7
                }
            }), "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),
            nr = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            ir = (Po.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, t) {
                    return /-MMM-/.test(t) ? nr[e.month()] : tr[e.month()]
                },
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("et", {
                months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Täna,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[Järgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pärast",
                    past: "%s tagasi",
                    s: oi,
                    m: oi,
                    mm: oi,
                    h: oi,
                    hh: oi,
                    d: oi,
                    dd: "%d päeva",
                    M: oi,
                    MM: oi,
                    y: oi,
                    yy: oi
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            }), {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            }),
            sr = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            },
            or = (Po.defineLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /قبل از ظهر|بعد از ظهر/,
                isPM: function(e) {
                    return /بعد از ظهر/.test(e)
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چندین ثانیه",
                    m: "یک دقیقه",
                    mm: "%d دقیقه",
                    h: "یک ساعت",
                    hh: "%d ساعت",
                    d: "یک روز",
                    dd: "%d روز",
                    M: "یک ماه",
                    MM: "%d ماه",
                    y: "یک سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/[۰-۹]/g, function(e) {
                        return sr[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return ir[e]
                    }).replace(/,/g, "،")
                },
                ordinalParse: /\d{1,2}م/,
                ordinal: "%dم",
                week: {
                    dow: 6,
                    doy: 12
                }
            }), "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")),
            rr = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", or[7], or[8], or[9]],
            ar = (Po.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
                    s: ri,
                    m: ri,
                    mm: ri,
                    h: ri,
                    hh: ri,
                    d: ri,
                    dd: ri,
                    M: ri,
                    MM: ri,
                    y: ri,
                    yy: ri
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("fo", {
                months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D. MMMM, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Í dag kl.] LT",
                    nextDay: "[Í morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Í gjár kl.] LT",
                    lastWeek: "[síðstu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s síðani",
                    s: "fá sekund",
                    m: "ein minutt",
                    mm: "%d minuttir",
                    h: "ein tími",
                    hh: "%d tímar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein mánaði",
                    MM: "%d mánaðir",
                    y: "eitt ár",
                    yy: "%d ár"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("fr-ca", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd'hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e) {
                    return e + (1 === e ? "er" : "e")
                }
            }), Po.defineLocale("fr-ch", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd'hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e) {
                    return e + (1 === e ? "er" : "e")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd'hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                ordinalParse: /\d{1,2}(er|)/,
                ordinal: function(e) {
                    return e + (1 === e ? "er" : "")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),
            lr = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            dr = (Po.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function(e, t) {
                    return /-MMM-/.test(t) ? lr[e.month()] : ar[e.month()]
                },
                weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[hjoed om] LT",
                    nextDay: "[moarn om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[juster om] LT",
                    lastWeek: "[ôfrûne] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oer %s",
                    past: "%s lyn",
                    s: "in pear sekonden",
                    m: "ien minút",
                    mm: "%d minuten",
                    h: "ien oere",
                    hh: "%d oeren",
                    d: "ien dei",
                    dd: "%d dagen",
                    M: "ien moanne",
                    MM: "%d moannen",
                    y: "ien jier",
                    yy: "%d jierren"
                },
                ordinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"]),
            ur = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            cr = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            pr = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            hr = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            fr = (Po.defineLocale("gd", {
                months: dr,
                monthsShort: ur,
                monthsParseExact: !0,
                weekdays: cr,
                weekdaysShort: pr,
                weekdaysMin: hr,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[An-diugh aig] LT",
                    nextDay: "[A-màireach aig] LT",
                    nextWeek: "dddd [aig] LT",
                    lastDay: "[An-dè aig] LT",
                    lastWeek: "dddd [seo chaidh] [aig] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ann an %s",
                    past: "bho chionn %s",
                    s: "beagan diogan",
                    m: "mionaid",
                    mm: "%d mionaidean",
                    h: "uair",
                    hh: "%d uairean",
                    d: "latha",
                    dd: "%d latha",
                    M: "mìos",
                    MM: "%d mìosan",
                    y: "bliadhna",
                    yy: "%d bliadhna"
                },
                ordinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(e) {
                    var t = 1 === e ? "d" : e % 10 === 2 ? "na" : "mh";
                    return e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("gl", {
                months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
                monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
                weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
                weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
                weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                    },
                    lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return "uns segundos" === e ? "nuns segundos" : "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function(e) {
                        return 2 === e ? "שעתיים" : e + " שעות"
                    },
                    d: "יום",
                    dd: function(e) {
                        return 2 === e ? "יומיים" : e + " ימים"
                    },
                    M: "חודש",
                    MM: function(e) {
                        return 2 === e ? "חודשיים" : e + " חודשים";
                    },
                    y: "שנה",
                    yy: function(e) {
                        return 2 === e ? "שנתיים" : e % 10 === 0 && 10 !== e ? e + " שנה" : e + " שנים"
                    }
                }
            }), {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }),
            mr = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            },
            gr = (Po.defineLocale("hi", {
                months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm बजे",
                    LTS: "A h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s में",
                    past: "%s पहले",
                    s: "कुछ ही क्षण",
                    m: "एक मिनट",
                    mm: "%d मिनट",
                    h: "एक घंटा",
                    hh: "%d घंटे",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महीने",
                    MM: "%d महीने",
                    y: "एक वर्ष",
                    yy: "%d वर्ष"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return mr[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return fr[e]
                    })
                },
                meridiemParse: /रात|सुबह|दोपहर|शाम/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "रात" === t ? 4 > e ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return 4 > e ? "रात" : 10 > e ? "सुबह" : 17 > e ? "दोपहर" : 20 > e ? "शाम" : "रात"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            }), Po.defineLocale("hr", {
                months: {
                    format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: li,
                    mm: li,
                    h: li,
                    hh: li,
                    d: "dan",
                    dd: li,
                    M: "mjesec",
                    MM: li,
                    y: "godinu",
                    yy: li
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            }), "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")),
            _r = (Po.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function(e) {
                    return "u" === e.charAt(1).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function() {
                        return ui.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function() {
                        return ui.call(this, !1)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: di,
                    m: di,
                    mm: di,
                    h: di,
                    hh: di,
                    d: di,
                    dd: di,
                    M: di,
                    MM: di,
                    y: di,
                    yy: di
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("hy-am", {
                months: {
                    format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                    standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                },
                monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY թ.",
                    LLL: "D MMMM YYYY թ., HH:mm",
                    LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                },
                calendar: {
                    sameDay: "[այսօր] LT",
                    nextDay: "[վաղը] LT",
                    lastDay: "[երեկ] LT",
                    nextWeek: function() {
                        return "dddd [օրը ժամը] LT"
                    },
                    lastWeek: function() {
                        return "[անցած] dddd [օրը ժամը] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s հետո",
                    past: "%s առաջ",
                    s: "մի քանի վայրկյան",
                    m: "րոպե",
                    mm: "%d րոպե",
                    h: "ժամ",
                    hh: "%d ժամ",
                    d: "օր",
                    dd: "%d օր",
                    M: "ամիս",
                    MM: "%d ամիս",
                    y: "տարի",
                    yy: "%d տարի"
                },
                meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                isPM: function(e) {
                    return /^(ցերեկվա|երեկոյան)$/.test(e)
                },
                meridiem: function(e) {
                    return 4 > e ? "գիշերվա" : 12 > e ? "առավոտվա" : 17 > e ? "ցերեկվա" : "երեկոյան"
                },
                ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "DDD":
                        case "w":
                        case "W":
                        case "DDDo":
                            return 1 === e ? e + "-ին" : e + "-րդ";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s síðan",
                    s: pi,
                    m: pi,
                    mm: pi,
                    h: "klukkustund",
                    hh: pi,
                    d: pi,
                    dd: pi,
                    M: pi,
                    MM: pi,
                    y: pi,
                    yy: pi
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
                weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
                weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("ja", {
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "Ah時m分",
                    LTS: "Ah時m分s秒",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日Ah時m分",
                    LLLL: "YYYY年M月D日Ah時m分 dddd"
                },
                meridiemParse: /午前|午後/i,
                isPM: function(e) {
                    return "午後" === e
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: "[来週]dddd LT",
                    lastDay: "[昨日] LT",
                    lastWeek: "[前週]dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            }), Po.defineLocale("jv", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /enjing|siyang|sonten|ndalu/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return 11 > e ? "enjing" : 15 > e ? "siyang" : 19 > e ? "sonten" : "ndalu"
                },
                calendar: {
                    sameDay: "[Dinten puniko pukul] LT",
                    nextDay: "[Mbenjang pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kala wingi pukul] LT",
                    lastWeek: "dddd [kepengker pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "wonten ing %s",
                    past: "%s ingkang kepengker",
                    s: "sawetawis detik",
                    m: "setunggal menit",
                    mm: "%d menit",
                    h: "setunggal jam",
                    hh: "%d jam",
                    d: "sedinten",
                    dd: "%d dinten",
                    M: "sewulan",
                    MM: "%d wulan",
                    y: "setaun",
                    yy: "%d taun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("ka", {
                months: {
                    standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                    format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
                },
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: {
                    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                    isFormat: /(წინა|შემდეგ)/
                },
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                    },
                    past: function(e) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
                    },
                    s: "რამდენიმე წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function(e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : 20 > e || 100 >= e && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), {
                0: "-ші",
                1: "-ші",
                2: "-ші",
                3: "-ші",
                4: "-ші",
                5: "-ші",
                6: "-шы",
                7: "-ші",
                8: "-ші",
                9: "-шы",
                10: "-шы",
                20: "-шы",
                30: "-шы",
                40: "-шы",
                50: "-ші",
                60: "-шы",
                70: "-ші",
                80: "-ші",
                90: "-шы",
                100: "-ші"
            }),
            yr = (Po.defineLocale("kk", {
                months: "Қаңтар_Ақпан_Наурыз_Сәуір_Мамыр_Маусым_Шілде_Тамыз_Қыркүйек_Қазан_Қараша_Желтоқсан".split("_"),
                monthsShort: "Қаң_Ақп_Нау_Сәу_Мам_Мау_Шіл_Там_Қыр_Қаз_Қар_Жел".split("_"),
                weekdays: "Жексенбі_Дүйсенбі_Сейсенбі_Сәрсенбі_Бейсенбі_Жұма_Сенбі".split("_"),
                weekdaysShort: "Жек_Дүй_Сей_Сәр_Бей_Жұм_Сен".split("_"),
                weekdaysMin: "Жк_Дй_Сй_Ср_Бй_Жм_Сн".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгін сағат] LT",
                    nextDay: "[Ертең сағат] LT",
                    nextWeek: "dddd [сағат] LT",
                    lastDay: "[Кеше сағат] LT",
                    lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ішінде",
                    past: "%s бұрын",
                    s: "бірнеше секунд",
                    m: "бір минут",
                    mm: "%d минут",
                    h: "бір сағат",
                    hh: "%d сағат",
                    d: "бір күн",
                    dd: "%d күн",
                    M: "бір ай",
                    MM: "%d ай",
                    y: "бір жыл",
                    yy: "%d жыл"
                },
                ordinalParse: /\d{1,2}-(ші|шы)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = e >= 100 ? 100 : null;
                    return e + (_r[e] || _r[t] || _r[n])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("km", {
                months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                    nextDay: "[ស្អែក ម៉ោង] LT",
                    nextWeek: "dddd [ម៉ោង] LT",
                    lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                    lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sទៀត",
                    past: "%sមុន",
                    s: "ប៉ុន្មានវិនាទី",
                    m: "មួយនាទី",
                    mm: "%d នាទី",
                    h: "មួយម៉ោង",
                    hh: "%d ម៉ោង",
                    d: "មួយថ្ងៃ",
                    dd: "%d ថ្ងៃ",
                    M: "មួយខែ",
                    MM: "%d ខែ",
                    y: "មួយឆ្នាំ",
                    yy: "%d ឆ្នាំ"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h시 m분",
                    LTS: "A h시 m분 s초",
                    L: "YYYY.MM.DD",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h시 m분",
                    LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇초",
                    ss: "%d초",
                    m: "일분",
                    mm: "%d분",
                    h: "한시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한달",
                    MM: "%d달",
                    y: "일년",
                    yy: "%d년"
                },
                ordinalParse: /\d{1,2}일/,
                ordinal: "%d일",
                meridiemParse: /오전|오후/,
                isPM: function(e) {
                    return "오후" === e
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? "오전" : "오후"
                }
            }), Po.defineLocale("lb", {
                months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[Gëschter um] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: fi,
                    past: mi,
                    s: "e puer Sekonnen",
                    m: hi,
                    mm: "%d Minutten",
                    h: hi,
                    hh: "%d Stonnen",
                    d: hi,
                    dd: "%d Deeg",
                    M: hi,
                    MM: "%d Méint",
                    y: hi,
                    yy: "%d Joer"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("lo", {
                months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                isPM: function(e) {
                    return "ຕອນແລງ" === e
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                },
                calendar: {
                    sameDay: "[ມື້ນີ້ເວລາ] LT",
                    nextDay: "[ມື້ອື່ນເວລາ] LT",
                    nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                    lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                    lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ອີກ %s",
                    past: "%sຜ່ານມາ",
                    s: "ບໍ່ເທົ່າໃດວິນາທີ",
                    m: "1 ນາທີ",
                    mm: "%d ນາທີ",
                    h: "1 ຊົ່ວໂມງ",
                    hh: "%d ຊົ່ວໂມງ",
                    d: "1 ມື້",
                    dd: "%d ມື້",
                    M: "1 ເດືອນ",
                    MM: "%d ເດືອນ",
                    y: "1 ປີ",
                    yy: "%d ປີ"
                },
                ordinalParse: /(ທີ່)\d{1,2}/,
                ordinal: function(e) {
                    return "ທີ່" + e
                }
            }), {
                m: "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h: "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d: "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M: "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y: "metai_metų_metus",
                yy: "metai_metų_metus"
            }),
            vr = (Po.defineLocale("lt", {
                months: {
                    format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_")
                },
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: {
                    format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                    isFormat: /dddd HH:mm/
                },
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar: {
                    sameDay: "[Šiandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieš %s",
                    s: _i,
                    m: yi,
                    mm: wi,
                    h: yi,
                    hh: wi,
                    d: yi,
                    dd: wi,
                    M: yi,
                    MM: wi,
                    y: yi,
                    yy: wi
                },
                ordinalParse: /\d{1,2}-oji/,
                ordinal: function(e) {
                    return e + "-oji"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), {
                m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                h: "stundas_stundām_stunda_stundas".split("_"),
                hh: "stundas_stundām_stunda_stundas".split("_"),
                d: "dienas_dienām_diena_dienas".split("_"),
                dd: "dienas_dienām_diena_dienas".split("_"),
                M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                y: "gada_gadiem_gads_gadi".split("_"),
                yy: "gada_gadiem_gads_gadi".split("_")
            }),
            br = (Po.defineLocale("lv", {
                months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY.",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar: {
                    sameDay: "[Šodien pulksten] LT",
                    nextDay: "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "pēc %s",
                    past: "pirms %s",
                    s: Ti,
                    m: Li,
                    mm: ki,
                    h: Li,
                    hh: ki,
                    d: Li,
                    dd: ki,
                    M: Li,
                    MM: ki,
                    y: Li,
                    yy: ki
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), {
                words: {
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mjesec", "mjeseca", "mjeseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
                },
                translate: function(e, t, n) {
                    var i = br.words[n];
                    return 1 === n.length ? t ? i[0] : i[1] : e + " " + br.correctGrammaticalCase(e, i)
                }
            }),
            wr = (Po.defineLocale("me", {
                months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
                monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
                weekdays: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
                weekdaysShort: ["ned.", "pon.", "uto.", "sri.", "čet.", "pet.", "sub."],
                weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sjutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        var e = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                        return e[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "nekoliko sekundi",
                    m: br.translate,
                    mm: br.translate,
                    h: br.translate,
                    hh: br.translate,
                    d: "dan",
                    dd: br.translate,
                    M: "mjesec",
                    MM: br.translate,
                    y: "godinu",
                    yy: br.translate
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "[Во] dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Изминатата] dddd [во] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "после %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    M: "месец",
                    MM: "%d месеци",
                    y: "година",
                    yy: "%d години"
                },
                ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("ml", {
                months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                longDateFormat: {
                    LT: "A h:mm -നു",
                    LTS: "A h:mm:ss -നു",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm -നു",
                    LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                },
                calendar: {
                    sameDay: "[ഇന്ന്] LT",
                    nextDay: "[നാളെ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ഇന്നലെ] LT",
                    lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s കഴിഞ്ഞ്",
                    past: "%s മുൻപ്",
                    s: "അൽപ നിമിഷങ്ങൾ",
                    m: "ഒരു മിനിറ്റ്",
                    mm: "%d മിനിറ്റ്",
                    h: "ഒരു മണിക്കൂർ",
                    hh: "%d മണിക്കൂർ",
                    d: "ഒരു ദിവസം",
                    dd: "%d ദിവസം",
                    M: "ഒരു മാസം",
                    MM: "%d മാസം",
                    y: "ഒരു വർഷം",
                    yy: "%d വർഷം"
                },
                meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                isPM: function(e) {
                    return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return 4 > e ? "രാത്രി" : 12 > e ? "രാവിലെ" : 17 > e ? "ഉച്ച കഴിഞ്ഞ്" : 20 > e ? "വൈകുന്നേരം" : "രാത്രി"
                }
            }), {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }),
            Mr = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            },
            kr = (Po.defineLocale("mr", {
                months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm वाजता",
                    LTS: "A h:mm:ss वाजता",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm वाजता",
                    LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[उद्या] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[मागील] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमध्ये",
                    past: "%sपूर्वी",
                    s: xi,
                    m: xi,
                    mm: xi,
                    h: xi,
                    hh: xi,
                    d: xi,
                    dd: xi,
                    M: xi,
                    MM: xi,
                    y: xi,
                    yy: xi
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return Mr[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return wr[e]
                    })
                },
                meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "रात्री" === t ? 4 > e ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return 4 > e ? "रात्री" : 10 > e ? "सकाळी" : 17 > e ? "दुपारी" : 20 > e ? "सायंकाळी" : "रात्री"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            }), Po.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            }),
            Lr = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            },
            Tr = (Po.defineLocale("my", {
                months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ယနေ.] LT [မှာ]",
                    nextDay: "[မနက်ဖြန်] LT [မှာ]",
                    nextWeek: "dddd LT [မှာ]",
                    lastDay: "[မနေ.က] LT [မှာ]",
                    lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "လာမည့် %s မှာ",
                    past: "လွန်ခဲ့သော %s က",
                    s: "စက္ကန်.အနည်းငယ်",
                    m: "တစ်မိနစ်",
                    mm: "%d မိနစ်",
                    h: "တစ်နာရီ",
                    hh: "%d နာရီ",
                    d: "တစ်ရက်",
                    dd: "%d ရက်",
                    M: "တစ်လ",
                    MM: "%d လ",
                    y: "တစ်နှစ်",
                    yy: "%d နှစ်"
                },
                preparse: function(e) {
                    return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                        return Lr[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return kr[e]
                    })
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "for %s siden",
                    s: "noen sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "ett år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }),
            xr = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            },
            Dr = (Po.defineLocale("ne", {
                months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                longDateFormat: {
                    LT: "Aको h:mm बजे",
                    LTS: "Aको h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, Aको h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return xr[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return Tr[e]
                    })
                },
                meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "राति" === t ? 4 > e ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return 3 > e ? "राति" : 12 > e ? "बिहान" : 16 > e ? "दिउँसो" : 20 > e ? "साँझ" : "राति"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[भोलि] LT",
                    nextWeek: "[आउँदो] dddd[,] LT",
                    lastDay: "[हिजो] LT",
                    lastWeek: "[गएको] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमा",
                    past: "%s अगाडि",
                    s: "केही क्षण",
                    m: "एक मिनेट",
                    mm: "%d मिनेट",
                    h: "एक घण्टा",
                    hh: "%d घण्टा",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महिना",
                    MM: "%d महिना",
                    y: "एक बर्ष",
                    yy: "%d बर्ष"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            }), "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),
            Sr = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            Yr = (Po.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, t) {
                    return /-MMM-/.test(t) ? Sr[e.month()] : Dr[e.month()]
                },
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                ordinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
                weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I går klokka] LT",
                    lastWeek: "[Føregåande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "for %s sidan",
                    s: "nokre sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    M: "ein månad",
                    MM: "%d månader",
                    y: "eit år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")),
            Cr = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
            Er = (Po.defineLocale("pl", {
                months: function(e, t) {
                    return "" === t ? "(" + Cr[e.month()] + "|" + Yr[e.month()] + ")" : /D MMMM/.test(t) ? Cr[e.month()] : Yr[e.month()]
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Dziś o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: "[W] dddd [o] LT",
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    m: Si,
                    mm: Si,
                    h: Si,
                    hh: Si,
                    d: "1 dzień",
                    dd: "%d dni",
                    M: "miesiąc",
                    MM: Si,
                    y: "rok",
                    yy: Si
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("pt-br", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "%s atrás",
                    s: "poucos segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº"
            }), Po.defineLocale("pt", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                ordinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s în urmă",
                    s: "câteva secunde",
                    m: "un minut",
                    mm: Yi,
                    h: "o oră",
                    hh: Yi,
                    d: "o zi",
                    dd: Yi,
                    M: "o lună",
                    MM: Yi,
                    y: "un an",
                    yy: Yi
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i]),
            Ar = (Po.defineLocale("ru", {
                months: {
                    format: "Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Августа_Сентября_Октября_Ноября_Декабря".split("_"),
                    standalone: "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_")
                },
                monthsShort: {
                    format: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_"),
                    standalone: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_")
                },
                weekdays: {
                    standalone: "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split("_"),
                    format: "Воскресенье_Понедельник_Вторник_Среду_Четверг_Пятницу_Субботу".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
                },
                weekdaysShort: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
                weekdaysMin: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
                monthsParse: Er,
                longMonthsParse: Er,
                shortMonthsParse: Er,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сегодня в] LT",
                    nextDay: "[Завтра в] LT",
                    lastDay: "[Вчера в] LT",
                    nextWeek: function(e) {
                        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В следующее] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В следующий] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В следующую] dddd [в] LT"
                        }
                    },
                    lastWeek: function(e) {
                        if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В прошлое] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В прошлый] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В прошлую] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    m: Ei,
                    mm: Ei,
                    h: "час",
                    hh: Ei,
                    d: "день",
                    dd: Ei,
                    M: "месяц",
                    MM: Ei,
                    y: "год",
                    yy: Ei
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function(e) {
                    return /^(дня|вечера)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера"
                },
                ordinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        case "w":
                        case "W":
                            return e + "-я";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("se", {
                months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
                monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
                weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
                weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
                weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "MMMM D. [b.] YYYY",
                    LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                    LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                },
                calendar: {
                    sameDay: "[otne ti] LT",
                    nextDay: "[ihttin ti] LT",
                    nextWeek: "dddd [ti] LT",
                    lastDay: "[ikte ti] LT",
                    lastWeek: "[ovddit] dddd [ti] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s geažes",
                    past: "maŋit %s",
                    s: "moadde sekunddat",
                    m: "okta minuhta",
                    mm: "%d minuhtat",
                    h: "okta diimmu",
                    hh: "%d diimmut",
                    d: "okta beaivi",
                    dd: "%d beaivvit",
                    M: "okta mánnu",
                    MM: "%d mánut",
                    y: "okta jahki",
                    yy: "%d jagit"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("si", {
                months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
                monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
                weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
                weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
                weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
                longDateFormat: {
                    LT: "a h:mm",
                    LTS: "a h:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY MMMM D",
                    LLL: "YYYY MMMM D, a h:mm",
                    LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
                },
                calendar: {
                    sameDay: "[අද] LT[ට]",
                    nextDay: "[හෙට] LT[ට]",
                    nextWeek: "dddd LT[ට]",
                    lastDay: "[ඊයේ] LT[ට]",
                    lastWeek: "[පසුගිය] dddd LT[ට]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sකින්",
                    past: "%sකට පෙර",
                    s: "තත්පර කිහිපය",
                    m: "මිනිත්තුව",
                    mm: "මිනිත්තු %d",
                    h: "පැය",
                    hh: "පැය %d",
                    d: "දිනය",
                    dd: "දින %d",
                    M: "මාසය",
                    MM: "මාස %d",
                    y: "වසර",
                    yy: "වසර %d"
                },
                ordinalParse: /\d{1,2} වැනි/,
                ordinal: function(e) {
                    return e + " වැනි"
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
                }
            }), "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")),
            jr = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
            Hr = (Po.defineLocale("sk", {
                months: Ar,
                monthsShort: jr,
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes o] LT",
                    nextDay: "[zajtra o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo štvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT"
                        }
                    },
                    lastDay: "[včera o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulú nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[minulý] dddd [o] LT";
                            case 3:
                                return "[minulú stredu o] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [o] LT";
                            case 6:
                                return "[minulú sobotu o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: ji,
                    m: ji,
                    mm: ji,
                    h: ji,
                    hh: ji,
                    d: ji,
                    dd: ji,
                    M: ji,
                    MM: ji,
                    y: ji,
                    yy: ji
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[včeraj ob] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[prejšnjo] [nedeljo] [ob] LT";
                            case 3:
                                return "[prejšnjo] [sredo] [ob] LT";
                            case 6:
                                return "[prejšnjo] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejšnji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "čez %s",
                    past: "pred %s",
                    s: Hi,
                    m: Hi,
                    mm: Hi,
                    h: Hi,
                    hh: Hi,
                    d: Hi,
                    dd: Hi,
                    M: Hi,
                    MM: Hi,
                    y: Hi,
                    yy: Hi
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                meridiemParse: /PD|MD/,
                isPM: function(e) {
                    return "M" === e.charAt(0)
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot në] LT",
                    nextDay: "[Nesër në] LT",
                    nextWeek: "dddd [në] LT",
                    lastDay: "[Dje në] LT",
                    lastWeek: "dddd [e kaluar në] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "në %s",
                    past: "%s më parë",
                    s: "disa sekonda",
                    m: "një minutë",
                    mm: "%d minuta",
                    h: "një orë",
                    hh: "%d orë",
                    d: "një ditë",
                    dd: "%d ditë",
                    M: "një muaj",
                    MM: "%d muaj",
                    y: "një vit",
                    yy: "%d vite"
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), {
                words: {
                    m: ["један минут", "једне минуте"],
                    mm: ["минут", "минуте", "минута"],
                    h: ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    dd: ["дан", "дана", "дана"],
                    MM: ["месец", "месеца", "месеци"],
                    yy: ["година", "године", "година"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
                },
                translate: function(e, t, n) {
                    var i = Hr.words[n];
                    return 1 === n.length ? t ? i[0] : i[1] : e + " " + Hr.correctGrammaticalCase(e, i)
                }
            }),
            Or = (Po.defineLocale("sr-cyrl", {
                months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
                monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
                weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
                weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
                weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[данас у] LT",
                    nextDay: "[сутра у] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[у] [недељу] [у] LT";
                            case 3:
                                return "[у] [среду] [у] LT";
                            case 6:
                                return "[у] [суботу] [у] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[у] dddd [у] LT"
                        }
                    },
                    lastDay: "[јуче у] LT",
                    lastWeek: function() {
                        var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                        return e[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пре %s",
                    s: "неколико секунди",
                    m: Hr.translate,
                    mm: Hr.translate,
                    h: Hr.translate,
                    hh: Hr.translate,
                    d: "дан",
                    dd: Hr.translate,
                    M: "месец",
                    MM: Hr.translate,
                    y: "годину",
                    yy: Hr.translate
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            }), {
                words: {
                    m: ["jedan minut", "jedne minute"],
                    mm: ["minut", "minute", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mesec", "meseca", "meseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
                },
                translate: function(e, t, n) {
                    var i = Or.words[n];
                    return 1 === n.length ? t ? i[0] : i[1] : e + " " + Or.correctGrammaticalCase(e, i)
                }
            }),
            Ir = (Po.defineLocale("sr", {
                months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
                monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
                weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
                weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
                weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                        return e[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    m: Or.translate,
                    mm: Or.translate,
                    h: Or.translate,
                    hh: Or.translate,
                    d: "dan",
                    dd: Or.translate,
                    M: "mesec",
                    MM: Or.translate,
                    y: "godinu",
                    yy: Or.translate
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Igår] LT",
                    nextWeek: "[På] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "för %s sedan",
                    s: "några sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en månad",
                    MM: "%d månader",
                    y: "ett år",
                    yy: "%d år"
                },
                ordinalParse: /\d{1,2}(e|a)/,
                ordinal: function(e) {
                    var t = e % 10,
                        n = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("sw", {
                months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[leo saa] LT",
                    nextDay: "[kesho saa] LT",
                    nextWeek: "[wiki ijayo] dddd [saat] LT",
                    lastDay: "[jana] LT",
                    lastWeek: "[wiki iliyopita] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s baadaye",
                    past: "tokea %s",
                    s: "hivi punde",
                    m: "dakika moja",
                    mm: "dakika %d",
                    h: "saa limoja",
                    hh: "masaa %d",
                    d: "siku moja",
                    dd: "masiku %d",
                    M: "mwezi mmoja",
                    MM: "miezi %d",
                    y: "mwaka mmoja",
                    yy: "miaka %d"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            }),
            Pr = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            },
            $r = (Po.defineLocale("ta", {
                months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, HH:mm",
                    LLLL: "dddd, D MMMM YYYY, HH:mm"
                },
                calendar: {
                    sameDay: "[இன்று] LT",
                    nextDay: "[நாளை] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[நேற்று] LT",
                    lastWeek: "[கடந்த வாரம்] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s இல்",
                    past: "%s முன்",
                    s: "ஒரு சில விநாடிகள்",
                    m: "ஒரு நிமிடம்",
                    mm: "%d நிமிடங்கள்",
                    h: "ஒரு மணி நேரம்",
                    hh: "%d மணி நேரம்",
                    d: "ஒரு நாள்",
                    dd: "%d நாட்கள்",
                    M: "ஒரு மாதம்",
                    MM: "%d மாதங்கள்",
                    y: "ஒரு வருடம்",
                    yy: "%d ஆண்டுகள்"
                },
                ordinalParse: /\d{1,2}வது/,
                ordinal: function(e) {
                    return e + "வது"
                },
                preparse: function(e) {
                    return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                        return Pr[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return Ir[e]
                    })
                },
                meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                meridiem: function(e, t, n) {
                    return 2 > e ? " யாமம்" : 6 > e ? " வைகறை" : 10 > e ? " காலை" : 14 > e ? " நண்பகல்" : 18 > e ? " எற்பாடு" : 22 > e ? " மாலை" : " யாமம்"
                },
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "யாமம்" === t ? 2 > e ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            }), Po.defineLocale("te", {
                months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
                monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
                weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
                weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
                weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[నేడు] LT",
                    nextDay: "[రేపు] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[నిన్న] LT",
                    lastWeek: "[గత] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s లో",
                    past: "%s క్రితం",
                    s: "కొన్ని క్షణాలు",
                    m: "ఒక నిమిషం",
                    mm: "%d నిమిషాలు",
                    h: "ఒక గంట",
                    hh: "%d గంటలు",
                    d: "ఒక రోజు",
                    dd: "%d రోజులు",
                    M: "ఒక నెల",
                    MM: "%d నెలలు",
                    y: "ఒక సంవత్సరం",
                    yy: "%d సంవత్సరాలు"
                },
                ordinalParse: /\d{1,2}వ/,
                ordinal: "%dవ",
                meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "రాత్రి" === t ? 4 > e ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return 4 > e ? "రాత్రి" : 10 > e ? "ఉదయం" : 17 > e ? "మధ్యాహ్నం" : 20 > e ? "సాయంత్రం" : "రాత్రి"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            }), Po.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                longDateFormat: {
                    LT: "H นาฬิกา m นาที",
                    LTS: "H นาฬิกา m นาที s วินาที",
                    L: "YYYY/MM/DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H นาฬิกา m นาที",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function(e) {
                    return "หลังเที่ยง" === e
                },
                meridiem: function(e, t, n) {
                    return 12 > e ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            }), Po.defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ngayon sa] LT",
                    nextDay: "[Bukas sa] LT",
                    nextWeek: "dddd [sa] LT",
                    lastDay: "[Kahapon sa] LT",
                    lastWeek: "dddd [huling linggo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                ordinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")),
            Nr = (Po.defineLocale("tlh", {
                months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DaHjaj] LT",
                    nextDay: "[wa’leS] LT",
                    nextWeek: "LLL",
                    lastDay: "[wa’Hu’] LT",
                    lastWeek: "LLL",
                    sameElse: "L"
                },
                relativeTime: {
                    future: Oi,
                    past: Ii,
                    s: "puS lup",
                    m: "wa’ tup",
                    mm: Pi,
                    h: "wa’ rep",
                    hh: Pi,
                    d: "wa’ jaj",
                    dd: Pi,
                    M: "wa’ jar",
                    MM: Pi,
                    y: "wa’ DIS",
                    yy: Pi
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            }),
            Fr = (Po.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[haftaya] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen hafta] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
                ordinal: function(e) {
                    if (0 === e) return e + "'ıncı";
                    var t = e % 10,
                        n = e % 100 - t,
                        i = e >= 100 ? 100 : null;
                    return e + (Nr[t] || Nr[n] || Nr[i])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("tzl", {
                months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
                monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
                weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
                weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM [dallas] YYYY",
                    LLL: "D. MMMM [dallas] YYYY HH.mm",
                    LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
                },
                calendar: {
                    sameDay: "[oxhi à] LT",
                    nextDay: "[demà à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[ieiri à] LT",
                    lastWeek: "[sür el] dddd [lasteu à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "osprei %s",
                    past: "ja%s",
                    s: Ni,
                    m: Ni,
                    mm: Ni,
                    h: Ni,
                    hh: Ni,
                    d: Ni,
                    dd: Ni,
                    M: Ni,
                    MM: Ni,
                    y: Ni,
                    yy: Ni
                },
                ordinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("tzm-latn", {
                months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    m: "minuḍ",
                    mm: "%d minuḍ",
                    h: "saɛa",
                    hh: "%d tassaɛin",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            }), Po.defineLocale("tzm", {
                months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                    nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                    nextWeek: "dddd [ⴴ] LT",
                    lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                    lastWeek: "dddd [ⴴ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                    past: "ⵢⴰⵏ %s",
                    s: "ⵉⵎⵉⴽ",
                    m: "ⵎⵉⵏⵓⴺ",
                    mm: "%d ⵎⵉⵏⵓⴺ",
                    h: "ⵙⴰⵄⴰ",
                    hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                    d: "ⴰⵙⵙ",
                    dd: "%d oⵙⵙⴰⵏ",
                    M: "ⴰⵢoⵓⵔ",
                    MM: "%d ⵉⵢⵢⵉⵔⵏ",
                    y: "ⴰⵙⴳⴰⵙ",
                    yy: "%d ⵉⵙⴳⴰⵙⵏ"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            }), Po.defineLocale("uk", {
                months: {
                    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: zi,
                weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY р.",
                    LLL: "D MMMM YYYY р., HH:mm",
                    LLLL: "dddd, D MMMM YYYY р., HH:mm"
                },
                calendar: {
                    sameDay: Ri("[Сьогодні "),
                    nextDay: Ri("[Завтра "),
                    lastDay: Ri("[Вчора "),
                    nextWeek: Ri("[У] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return Ri("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return Ri("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    m: Wi,
                    mm: Wi,
                    h: "годину",
                    hh: Wi,
                    d: "день",
                    dd: Wi,
                    M: "місяць",
                    MM: Wi,
                    y: "рік",
                    yy: Wi
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function(e) {
                    return /^(дня|вечора)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дня" : "вечора"
                },
                ordinalParse: /\d{1,2}-(й|го)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("uz", {
                months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Бугун соат] LT [да]",
                    nextDay: "[Эртага] LT [да]",
                    nextWeek: "dddd [куни соат] LT [да]",
                    lastDay: "[Кеча соат] LT [да]",
                    lastWeek: "[Утган] dddd [куни соат] LT [да]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Якин %s ичида",
                    past: "Бир неча %s олдин",
                    s: "фурсат",
                    m: "бир дакика",
                    mm: "%d дакика",
                    h: "бир соат",
                    hh: "%d соат",
                    d: "бир кун",
                    dd: "%d кун",
                    M: "бир ой",
                    MM: "%d ой",
                    y: "бир йил",
                    yy: "%d йил"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            }), Po.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần rồi lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                ordinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "Ah点mm分",
                    LTS: "Ah点m分s秒",
                    L: "YYYY-MM-DD",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日Ah点mm分",
                    LLLL: "YYYY年MMMD日ddddAh点mm分",
                    l: "YYYY-MM-DD",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日Ah点mm分",
                    llll: "YYYY年MMMD日ddddAh点mm分"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function(e, t, n) {
                    var i = 100 * e + t;
                    return 600 > i ? "凌晨" : 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: function() {
                        return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                    },
                    nextDay: function() {
                        return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                    },
                    lastDay: function() {
                        return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                    },
                    nextWeek: function() {
                        var e, t;
                        return e = Po().startOf("week"), t = this.unix() - e.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
                    },
                    lastWeek: function() {
                        var e, t;
                        return e = Po().startOf("week"), t = this.unix() < e.unix() ? "[上]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
                    },
                    sameElse: "LL"
                },
                ordinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "周";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s内",
                    past: "%s前",
                    s: "几秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            }), Po.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "Ah點mm分",
                    LTS: "Ah點m分s秒",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日Ah點mm分",
                    LLLL: "YYYY年MMMD日ddddAh點mm分",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日Ah點mm分",
                    llll: "YYYY年MMMD日ddddAh點mm分"
                },
                meridiemParse: /早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0), "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    var i = 100 * e + t;
                    return 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                ordinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    m: "一分鐘",
                    mm: "%d分鐘",
                    h: "一小時",
                    hh: "%d小時",
                    d: "一天",
                    dd: "%d天",
                    M: "一個月",
                    MM: "%d個月",
                    y: "一年",
                    yy: "%d年"
                }
            }), Po);
        return Fr.locale("en"), Fr
    }), ! function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.Tether = t()
    }(this, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e) {
            var t = getComputedStyle(e),
                n = t.position;
            if ("fixed" === n) return e;
            for (var i = e; i = i.parentNode;) {
                var s = void 0;
                try {
                    s = getComputedStyle(i)
                } catch (o) {}
                if ("undefined" == typeof s || null === s) return i;
                var r = s,
                    a = r.overflow,
                    l = r.overflowX,
                    d = r.overflowY;
                if (/(auto|scroll)/.test(a + d + l) && ("absolute" !== n || ["relative", "absolute", "fixed"].indexOf(s.position) >= 0)) return i
            }
            return document.body
        }

        function o(e) {
            var t = void 0;
            e === document ? (t = document, e = document.documentElement) : t = e.ownerDocument;
            var n = t.documentElement,
                i = {},
                s = e.getBoundingClientRect();
            for (var o in s) i[o] = s[o];
            var r = L(t);
            return i.top -= r.top, i.left -= r.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - n.clientTop, i.left = i.left - n.clientLeft, i.right = t.body.clientWidth - i.width - i.left, i.bottom = t.body.clientHeight - i.height - i.top, i
        }

        function r(e) {
            return e.offsetParent || document.documentElement
        }

        function a() {
            var e = document.createElement("div");
            e.style.width = "100%", e.style.height = "200px";
            var t = document.createElement("div");
            l(t.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), t.appendChild(e), document.body.appendChild(t);
            var n = e.offsetWidth;
            t.style.overflow = "scroll";
            var i = e.offsetWidth;
            n === i && (i = t.clientWidth), document.body.removeChild(t);
            var s = n - i;
            return {
                width: s,
                height: s
            }
        }

        function l() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = [];
            return Array.prototype.push.apply(t, arguments), t.slice(1).forEach(function(t) {
                if (t)
                    for (var n in t)({}).hasOwnProperty.call(t, n) && (e[n] = t[n])
            }), e
        }

        function d(e, t) {
            if ("undefined" != typeof e.classList) t.split(" ").forEach(function(t) {
                t.trim() && e.classList.remove(t)
            });
            else {
                var n = new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"),
                    i = p(e).replace(n, " ");
                h(e, i)
            }
        }

        function u(e, t) {
            if ("undefined" != typeof e.classList) t.split(" ").forEach(function(t) {
                t.trim() && e.classList.add(t)
            });
            else {
                d(e, t);
                var n = p(e) + (" " + t);
                h(e, n)
            }
        }

        function c(e, t) {
            if ("undefined" != typeof e.classList) return e.classList.contains(t);
            var n = p(e);
            return new RegExp("(^| )" + t + "( |$)", "gi").test(n)
        }

        function p(e) {
            return e.className instanceof SVGAnimatedString ? e.className.baseVal : e.className
        }

        function h(e, t) {
            e.setAttribute("class", t)
        }

        function f(e, t, n) {
            n.forEach(function(n) {
                -1 === t.indexOf(n) && c(e, n) && d(e, n)
            }), t.forEach(function(t) {
                c(e, t) || u(e, t)
            })
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function m(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return e + n >= t && t >= e - n
        }

        function g() {
            return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
        }

        function _() {
            for (var e = {
                    top: 0,
                    left: 0
                }, t = arguments.length, n = Array(t), i = 0; t > i; i++) n[i] = arguments[i];
            return n.forEach(function(t) {
                var n = t.top,
                    i = t.left;
                "string" == typeof n && (n = parseFloat(n, 10)), "string" == typeof i && (i = parseFloat(i, 10)), e.top += n, e.left += i
            }), e
        }

        function y(e, t) {
            return "string" == typeof e.left && -1 !== e.left.indexOf("%") && (e.left = parseFloat(e.left, 10) / 100 * t.width), "string" == typeof e.top && -1 !== e.top.indexOf("%") && (e.top = parseFloat(e.top, 10) / 100 * t.height), e
        }

        function v(e, t) {
            return "scrollParent" === t ? t = e.scrollParent : "window" === t && (t = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), t === document && (t = t.documentElement), "undefined" != typeof t.nodeType && ! function() {
                var e = o(t),
                    n = e,
                    i = getComputedStyle(t);
                t = [n.left, n.top, e.width + n.left, e.height + n.top], R.forEach(function(e, n) {
                    e = e[0].toUpperCase() + e.substr(1), "Top" === e || "Left" === e ? t[n] += parseFloat(i["border" + e + "Width"]) : t[n] -= parseFloat(i["border" + e + "Width"])
                })
            }(), t
        }
        var b = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            w = void 0;
        "undefined" == typeof w && (w = {
            modules: []
        });
        var M = function() {
                var e = 0;
                return function() {
                    return ++e
                }
            }(),
            k = {},
            L = function(e) {
                var t = e._tetherZeroElement;
                "undefined" == typeof t && (t = e.createElement("div"), t.setAttribute("data-tether-id", M()), l(t.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                }), e.body.appendChild(t), e._tetherZeroElement = t);
                var n = t.getAttribute("data-tether-id");
                if ("undefined" == typeof k[n]) {
                    k[n] = {};
                    var i = t.getBoundingClientRect();
                    for (var s in i) k[n][s] = i[s];
                    x(function() {
                        delete k[n]
                    })
                }
                return k[n]
            },
            T = [],
            x = function(e) {
                T.push(e)
            },
            D = function() {
                for (var e = void 0; e = T.pop();) e()
            },
            S = function() {
                function e() {
                    i(this, e)
                }
                return b(e, [{
                    key: "on",
                    value: function(e, t, n) {
                        var i = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
                        "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[e] && (this.bindings[e] = []), this.bindings[e].push({
                            handler: t,
                            ctx: n,
                            once: i
                        })
                    }
                }, {
                    key: "once",
                    value: function(e, t, n) {
                        this.on(e, t, n, !0)
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[e])
                            if ("undefined" == typeof t) delete this.bindings[e];
                            else
                                for (var n = 0; n < this.bindings[e].length;) this.bindings[e][n].handler === t ? this.bindings[e].splice(n, 1) : ++n
                    }
                }, {
                    key: "trigger",
                    value: function(e) {
                        if ("undefined" != typeof this.bindings && this.bindings[e]) {
                            for (var t = 0, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), s = 1; n > s; s++) i[s - 1] = arguments[s];
                            for (; t < this.bindings[e].length;) {
                                var o = this.bindings[e][t],
                                    r = o.handler,
                                    a = o.ctx,
                                    l = o.once,
                                    d = a;
                                "undefined" == typeof d && (d = this), r.apply(d, i), l ? this.bindings[e].splice(t, 1) : ++t
                            }
                        }
                    }
                }]), e
            }();
        w.Utils = {
            getScrollParent: s,
            getBounds: o,
            getOffsetParent: r,
            extend: l,
            addClass: u,
            removeClass: d,
            hasClass: c,
            updateClasses: f,
            defer: x,
            flush: D,
            uniqueId: M,
            Evented: S,
            getScrollBarSize: a
        };
        var Y = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        s = !1,
                        o = void 0;
                    try {
                        for (var r, a = e[Symbol.iterator](); !(i = (r = a.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0);
                    } catch (l) {
                        s = !0, o = l
                    } finally {
                        try {
                            !i && a["return"] && a["return"]()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            b = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }();
        if ("undefined" == typeof w) throw new Error("You must include the utils.js file before tether.js");
        var C = w.Utils,
            s = C.getScrollParent,
            o = C.getBounds,
            r = C.getOffsetParent,
            l = C.extend,
            u = C.addClass,
            d = C.removeClass,
            f = C.updateClasses,
            x = C.defer,
            D = C.flush,
            a = C.getScrollBarSize,
            E = function() {
                if ("undefined" == typeof document) return "";
                for (var e = document.createElement("div"), t = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < t.length; ++n) {
                    var i = t[n];
                    if (void 0 !== e.style[i]) return i
                }
            }(),
            A = [],
            j = function() {
                A.forEach(function(e) {
                    e.position(!1)
                }), D()
            };
        ! function() {
            var e = null,
                t = null,
                n = null,
                i = function s() {
                    return "undefined" != typeof t && t > 16 ? (t = Math.min(t - 16, 250), void(n = setTimeout(s, 250))) : void("undefined" != typeof e && g() - e < 10 || ("undefined" != typeof n && (clearTimeout(n), n = null), e = g(), j(), t = g() - e))
                };
            "undefined" != typeof window && ["resize", "scroll", "touchmove"].forEach(function(e) {
                window.addEventListener(e, i)
            })
        }();
        var H = {
                center: "center",
                left: "right",
                right: "left"
            },
            O = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            },
            I = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            },
            P = function(e, t) {
                var n = e.left,
                    i = e.top;
                return "auto" === n && (n = H[t.left]), "auto" === i && (i = O[t.top]), {
                    left: n,
                    top: i
                }
            },
            $ = function(e) {
                var t = e.left,
                    n = e.top;
                return "undefined" != typeof I[e.left] && (t = I[e.left]), "undefined" != typeof I[e.top] && (n = I[e.top]), {
                    left: t,
                    top: n
                }
            },
            N = function(e) {
                var t = e.split(" "),
                    n = Y(t, 2),
                    i = n[0],
                    s = n[1];
                return {
                    top: i,
                    left: s
                }
            },
            F = N,
            W = function() {
                function e(t) {
                    var n = this;
                    i(this, e), this.position = this.position.bind(this), A.push(this), this.history = [], this.setOptions(t, !1), w.modules.forEach(function(e) {
                        "undefined" != typeof e.initialize && e.initialize.call(n)
                    }), this.position()
                }
                return b(e, [{
                    key: "getClass",
                    value: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            t = this.options.classes;
                        return "undefined" != typeof t && t[e] ? this.options.classes[e] : this.options.classPrefix ? this.options.classPrefix + "-" + e : e
                    }
                }, {
                    key: "setOptions",
                    value: function(e) {
                        var t = this,
                            n = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
                            i = {
                                offset: "0 0",
                                targetOffset: "0 0",
                                targetAttachment: "auto auto",
                                classPrefix: "tether"
                            };
                        this.options = l(i, e);
                        var o = this.options,
                            r = o.element,
                            a = o.target,
                            d = o.targetModifier;
                        if (this.element = r, this.target = a, this.targetModifier = d, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(e) {
                                if ("undefined" == typeof t[e]) throw new Error("Tether Error: Both element and target must be defined");
                                "undefined" != typeof t[e].jquery ? t[e] = t[e][0] : "string" == typeof t[e] && (t[e] = document.querySelector(t[e]))
                            }), u(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && u(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = F(this.options.targetAttachment), this.attachment = F(this.options.attachment), this.offset = N(this.options.offset), this.targetOffset = N(this.options.targetOffset), "undefined" != typeof this.scrollParent && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParent = this.target : this.scrollParent = s(this.target), this.options.enabled !== !1 && this.enable(n)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function() {
                        if ("undefined" == typeof this.targetModifier) return o(this.target);
                        if ("visible" === this.targetModifier) {
                            if (this.target === document.body) return {
                                top: pageYOffset,
                                left: pageXOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                            var e = o(this.target),
                                t = {
                                    height: e.height,
                                    width: e.width,
                                    top: e.top,
                                    left: e.left
                                };
                            return t.height = Math.min(t.height, e.height - (pageYOffset - e.top)), t.height = Math.min(t.height, e.height - (e.top + e.height - (pageYOffset + innerHeight))), t.height = Math.min(innerHeight, t.height), t.height -= 2, t.width = Math.min(t.width, e.width - (pageXOffset - e.left)), t.width = Math.min(t.width, e.width - (e.left + e.width - (pageXOffset + innerWidth))), t.width = Math.min(innerWidth, t.width), t.width -= 2, t.top < pageYOffset && (t.top = pageYOffset), t.left < pageXOffset && (t.left = pageXOffset), t
                        }
                        if ("scroll-handle" === this.targetModifier) {
                            var e = void 0,
                                n = this.target;
                            n === document.body ? (n = document.documentElement, e = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            }) : e = o(n);
                            var i = getComputedStyle(n),
                                s = n.scrollWidth > n.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                                r = 0;
                            s && (r = 15);
                            var a = e.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - r,
                                t = {
                                    width: 15,
                                    height: .975 * a * (a / n.scrollHeight),
                                    left: e.left + e.width - parseFloat(i.borderLeftWidth) - 15
                                },
                                l = 0;
                            408 > a && this.target === document.body && (l = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58), this.target !== document.body && (t.height = Math.max(t.height, 24));
                            var d = this.target.scrollTop / (n.scrollHeight - a);
                            return t.top = d * (a - t.height - l) + e.top + parseFloat(i.borderTopWidth), this.target === document.body && (t.height = Math.max(t.height, 24)), t
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function() {
                        this._cache = {}
                    }
                }, {
                    key: "cache",
                    value: function(e, t) {
                        return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[e] && (this._cache[e] = t.call(this)), this._cache[e]
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                        this.options.addTargetClasses !== !1 && u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position), e && this.position()
                    }
                }, {
                    key: "disable",
                    value: function() {
                        d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParent && this.scrollParent.removeEventListener("scroll", this.position)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this;
                        this.disable(), A.forEach(function(t, n) {
                            return t === e ? void A.splice(n, 1) : void 0
                        })
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function(e, t) {
                        var n = this;
                        e = e || this.attachment, t = t || this.targetAttachment;
                        var i = ["left", "top", "bottom", "right", "middle", "center"];
                        "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                        var s = this._addAttachClasses;
                        e.top && s.push(this.getClass("element-attached") + "-" + e.top), e.left && s.push(this.getClass("element-attached") + "-" + e.left), t.top && s.push(this.getClass("target-attached") + "-" + t.top), t.left && s.push(this.getClass("target-attached") + "-" + t.left);
                        var o = [];
                        i.forEach(function(e) {
                            o.push(n.getClass("element-attached") + "-" + e), o.push(n.getClass("target-attached") + "-" + e)
                        }), x(function() {
                            "undefined" != typeof n._addAttachClasses && (f(n.element, n._addAttachClasses, o), n.options.addTargetClasses !== !1 && f(n.target, n._addAttachClasses, o), delete n._addAttachClasses)
                        })
                    }
                }, {
                    key: "position",
                    value: function() {
                        var e = this,
                            t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var n = P(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, n);
                            var i = this.cache("element-bounds", function() {
                                    return o(e.element)
                                }),
                                s = i.width,
                                l = i.height;
                            if (0 === s && 0 === l && "undefined" != typeof this.lastSize) {
                                var d = this.lastSize;
                                s = d.width, l = d.height
                            } else this.lastSize = {
                                width: s,
                                height: l
                            };
                            var u = this.cache("target-bounds", function() {
                                    return e.getTargetBounds()
                                }),
                                c = u,
                                p = y($(this.attachment), {
                                    width: s,
                                    height: l
                                }),
                                h = y($(n), c),
                                f = y(this.offset, {
                                    width: s,
                                    height: l
                                }),
                                m = y(this.targetOffset, c);
                            p = _(p, f), h = _(h, m);
                            for (var g = u.left + h.left - p.left, v = u.top + h.top - p.top, b = 0; b < w.modules.length; ++b) {
                                var M = w.modules[b],
                                    k = M.position.call(this, {
                                        left: g,
                                        top: v,
                                        targetAttachment: n,
                                        targetPos: u,
                                        elementPos: i,
                                        offset: p,
                                        targetOffset: h,
                                        manualOffset: f,
                                        manualTargetOffset: m,
                                        scrollbarSize: T,
                                        attachment: this.attachment
                                    });
                                if (k === !1) return !1;
                                "undefined" != typeof k && "object" == typeof k && (v = k.top, g = k.left)
                            }
                            var L = {
                                    page: {
                                        top: v,
                                        left: g
                                    },
                                    viewport: {
                                        top: v - pageYOffset,
                                        bottom: pageYOffset - v - l + innerHeight,
                                        left: g - pageXOffset,
                                        right: pageXOffset - g - s + innerWidth
                                    }
                                },
                                T = void 0;
                            return document.body.scrollWidth > window.innerWidth && (T = this.cache("scrollbar-size", a), L.viewport.bottom -= T.height), document.body.scrollHeight > window.innerHeight && (T = this.cache("scrollbar-size", a), L.viewport.right -= T.width), (-1 === ["", "static"].indexOf(document.body.style.position) || -1 === ["", "static"].indexOf(document.body.parentElement.style.position)) && (L.page.bottom = document.body.scrollHeight - v - l, L.page.right = document.body.scrollWidth - g - s), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                                var t = e.cache("target-offsetparent", function() {
                                        return r(e.target)
                                    }),
                                    n = e.cache("target-offsetparent-bounds", function() {
                                        return o(t)
                                    }),
                                    i = getComputedStyle(t),
                                    s = n,
                                    a = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function(e) {
                                        a[e.toLowerCase()] = parseFloat(i["border" + e + "Width"])
                                    }), n.right = document.body.scrollWidth - n.left - s.width + a.right, n.bottom = document.body.scrollHeight - n.top - s.height + a.bottom, L.page.top >= n.top + a.top && L.page.bottom >= n.bottom && L.page.left >= n.left + a.left && L.page.right >= n.right) {
                                    var l = t.scrollTop,
                                        d = t.scrollLeft;
                                    L.offset = {
                                        top: L.page.top - n.top + l - a.top,
                                        left: L.page.left - n.left + d - a.left
                                    }
                                }
                            }(), this.move(L), this.history.unshift(L), this.history.length > 3 && this.history.pop(), t && D(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function(e) {
                        var t = this;
                        if ("undefined" != typeof this.element.parentNode) {
                            var n = {};
                            for (var i in e) {
                                n[i] = {};
                                for (var s in e[i]) {
                                    for (var o = !1, a = 0; a < this.history.length; ++a) {
                                        var d = this.history[a];
                                        if ("undefined" != typeof d[i] && !m(d[i][s], e[i][s])) {
                                            o = !0;
                                            break
                                        }
                                    }
                                    o || (n[i][s] = !0)
                                }
                            }
                            var u = {
                                    top: "",
                                    left: "",
                                    right: "",
                                    bottom: ""
                                },
                                c = function(e, n) {
                                    var i = "undefined" != typeof t.options.optimizations,
                                        s = i ? t.options.optimizations.gpu : null;
                                    if (s !== !1) {
                                        var o = void 0,
                                            r = void 0;
                                        e.top ? (u.top = 0, o = n.top) : (u.bottom = 0, o = -n.bottom), e.left ? (u.left = 0, r = n.left) : (u.right = 0, r = -n.right), u[E] = "translateX(" + Math.round(r) + "px) translateY(" + Math.round(o) + "px)", "msTransform" !== E && (u[E] += " translateZ(0)")
                                    } else e.top ? u.top = n.top + "px" : u.bottom = n.bottom + "px", e.left ? u.left = n.left + "px" : u.right = n.right + "px"
                                },
                                p = !1;
                            if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (u.position = "absolute", c(n.page, e.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (u.position = "fixed", c(n.viewport, e.viewport)) : "undefined" != typeof n.offset && n.offset.top && n.offset.left ? ! function() {
                                    u.position = "absolute";
                                    var i = t.cache("target-offsetparent", function() {
                                        return r(t.target)
                                    });
                                    r(t.element) !== i && x(function() {
                                        t.element.parentNode.removeChild(t.element), i.appendChild(t.element)
                                    }), c(n.offset, e.offset), p = !0
                                }() : (u.position = "absolute", c({
                                    top: !0,
                                    left: !0
                                }, e.page)), !p) {
                                for (var h = !0, f = this.element.parentNode; f && "BODY" !== f.tagName;) {
                                    if ("static" !== getComputedStyle(f).position) {
                                        h = !1;
                                        break
                                    }
                                    f = f.parentNode
                                }
                                h || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element))
                            }
                            var g = {},
                                _ = !1;
                            for (var s in u) {
                                var y = u[s],
                                    v = this.element.style[s];
                                "" !== v && "" !== y && ["top", "left", "bottom", "right"].indexOf(s) >= 0 && (v = parseFloat(v), y = parseFloat(y)), v !== y && (_ = !0, g[s] = y)
                            }
                            _ && x(function() {
                                l(t.element.style, g)
                            })
                        }
                    }
                }]), e
            }();
        W.modules = [], w.position = j;
        var z = l(W, w),
            Y = function() {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        s = !1,
                        o = void 0;
                    try {
                        for (var r, a = e[Symbol.iterator](); !(i = (r = a.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0);
                    } catch (l) {
                        s = !0, o = l
                    } finally {
                        try {
                            !i && a["return"] && a["return"]()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            C = w.Utils,
            o = C.getBounds,
            l = C.extend,
            f = C.updateClasses,
            x = C.defer,
            R = ["left", "top", "right", "bottom"];
        w.modules.push({
            position: function(e) {
                var t = this,
                    n = e.top,
                    i = e.left,
                    s = e.targetAttachment;
                if (!this.options.constraints) return !0;
                var r = this.cache("element-bounds", function() {
                        return o(t.element)
                    }),
                    a = r.height,
                    d = r.width;
                if (0 === d && 0 === a && "undefined" != typeof this.lastSize) {
                    var u = this.lastSize;
                    d = u.width, a = u.height
                }
                var c = this.cache("target-bounds", function() {
                        return t.getTargetBounds()
                    }),
                    p = c.height,
                    h = c.width,
                    m = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function(e) {
                    var t = e.outOfBoundsClass,
                        n = e.pinnedClass;
                    t && m.push(t), n && m.push(n)
                }), m.forEach(function(e) {
                    ["left", "top", "right", "bottom"].forEach(function(t) {
                        m.push(e + "-" + t)
                    })
                });
                var g = [],
                    _ = l({}, s),
                    y = l({}, this.attachment);
                return this.options.constraints.forEach(function(e) {
                    var o = e.to,
                        r = e.attachment,
                        l = e.pin;
                    "undefined" == typeof r && (r = "");
                    var u = void 0,
                        c = void 0;
                    if (r.indexOf(" ") >= 0) {
                        var f = r.split(" "),
                            m = Y(f, 2);
                        c = m[0], u = m[1]
                    } else u = c = r;
                    var b = v(t, o);
                    ("target" === c || "both" === c) && (n < b[1] && "top" === _.top && (n += p, _.top = "bottom"), n + a > b[3] && "bottom" === _.top && (n -= p, _.top = "top")), "together" === c && (n < b[1] && "top" === _.top && ("bottom" === y.top ? (n += p, _.top = "bottom", n += a, y.top = "top") : "top" === y.top && (n += p, _.top = "bottom", n -= a, y.top = "bottom")), n + a > b[3] && "bottom" === _.top && ("top" === y.top ? (n -= p, _.top = "top", n -= a, y.top = "bottom") : "bottom" === y.top && (n -= p, _.top = "top", n += a, y.top = "top")), "middle" === _.top && (n + a > b[3] && "top" === y.top ? (n -= a, y.top = "bottom") : n < b[1] && "bottom" === y.top && (n += a, y.top = "top"))), ("target" === u || "both" === u) && (i < b[0] && "left" === _.left && (i += h, _.left = "right"), i + d > b[2] && "right" === _.left && (i -= h, _.left = "left")), "together" === u && (i < b[0] && "left" === _.left ? "right" === y.left ? (i += h, _.left = "right", i += d, y.left = "left") : "left" === y.left && (i += h, _.left = "right", i -= d, y.left = "right") : i + d > b[2] && "right" === _.left ? "left" === y.left ? (i -= h, _.left = "left", i -= d, y.left = "right") : "right" === y.left && (i -= h, _.left = "left", i += d, y.left = "left") : "center" === _.left && (i + d > b[2] && "left" === y.left ? (i -= d, y.left = "right") : i < b[0] && "right" === y.left && (i += d, y.left = "left"))), ("element" === c || "both" === c) && (n < b[1] && "bottom" === y.top && (n += a, y.top = "top"), n + a > b[3] && "top" === y.top && (n -= a, y.top = "bottom")), ("element" === u || "both" === u) && (i < b[0] && "right" === y.left && (i += d, y.left = "left"), i + d > b[2] && "left" === y.left && (i -= d, y.left = "right")), "string" == typeof l ? l = l.split(",").map(function(e) {
                        return e.trim()
                    }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];
                    var w = [],
                        M = [];
                    n < b[1] && (l.indexOf("top") >= 0 ? (n = b[1], w.push("top")) : M.push("top")), n + a > b[3] && (l.indexOf("bottom") >= 0 ? (n = b[3] - a, w.push("bottom")) : M.push("bottom")), i < b[0] && (l.indexOf("left") >= 0 ? (i = b[0], w.push("left")) : M.push("left")), i + d > b[2] && (l.indexOf("right") >= 0 ? (i = b[2] - d, w.push("right")) : M.push("right")), w.length && ! function() {
                        var e = void 0;
                        e = "undefined" != typeof t.options.pinnedClass ? t.options.pinnedClass : t.getClass("pinned"), g.push(e), w.forEach(function(t) {
                            g.push(e + "-" + t)
                        })
                    }(), M.length && ! function() {
                        var e = void 0;
                        e = "undefined" != typeof t.options.outOfBoundsClass ? t.options.outOfBoundsClass : t.getClass("out-of-bounds"), g.push(e), M.forEach(function(t) {
                            g.push(e + "-" + t)
                        })
                    }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = _.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = _.top = !1), (_.top !== s.top || _.left !== s.left || y.top !== t.attachment.top || y.left !== t.attachment.left) && t.updateAttachClasses(y, _)
                }), x(function() {
                    t.options.addTargetClasses !== !1 && f(t.target, g, m), f(t.element, g, m)
                }), {
                    top: n,
                    left: i
                }
            }
        });
        var C = w.Utils,
            o = C.getBounds,
            f = C.updateClasses,
            x = C.defer;
        w.modules.push({
            position: function(e) {
                var t = this,
                    n = e.top,
                    i = e.left,
                    s = this.cache("element-bounds", function() {
                        return o(t.element)
                    }),
                    r = s.height,
                    a = s.width,
                    l = this.getTargetBounds(),
                    d = n + r,
                    u = i + a,
                    c = [];
                n <= l.bottom && d >= l.top && ["left", "right"].forEach(function(e) {
                    var t = l[e];
                    (t === i || t === u) && c.push(e)
                }), i <= l.right && u >= l.left && ["top", "bottom"].forEach(function(e) {
                    var t = l[e];
                    (t === n || t === d) && c.push(e)
                });
                var p = [],
                    h = [],
                    m = ["left", "top", "right", "bottom"];
                return p.push(this.getClass("abutted")), m.forEach(function(e) {
                    p.push(t.getClass("abutted") + "-" + e)
                }), c.length && h.push(this.getClass("abutted")), c.forEach(function(e) {
                    h.push(t.getClass("abutted") + "-" + e)
                }), x(function() {
                    t.options.addTargetClasses !== !1 && f(t.target, h, p), f(t.element, h, p)
                }), !0
            }
        });
        var Y = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    s = !1,
                    o = void 0;
                try {
                    for (var r, a = e[Symbol.iterator](); !(i = (r = a.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0);
                } catch (l) {
                    s = !0, o = l
                } finally {
                    try {
                        !i && a["return"] && a["return"]()
                    } finally {
                        if (s) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return w.modules.push({
            position: function(e) {
                var t = e.top,
                    n = e.left;
                if (this.options.shift) {
                    var i = this.options.shift;
                    "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                        top: t,
                        left: n
                    }));
                    var s = void 0,
                        o = void 0;
                    if ("string" == typeof i) {
                        i = i.split(" "), i[1] = i[1] || i[0];
                        var r = i,
                            a = Y(r, 2);
                        s = a[0], o = a[1], s = parseFloat(s, 10), o = parseFloat(o, 10)
                    } else s = i.top, o = i.left;
                    return t += s, n += o, {
                        top: t,
                        left: n
                    }
                }
            }
        }), z
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] >= 3) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v3.0.0")
}(jQuery), + function(e) {
    "use strict";

    function t(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function(e, t, n) {
            for (var i = !0; i;) {
                var s = e,
                    o = t,
                    r = n;
                i = !1, null === s && (s = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(s, o);
                if (void 0 !== a) {
                    if ("value" in a) return a.value;
                    var l = a.get;
                    if (void 0 === l) return;
                    return l.call(r)
                }
                var d = Object.getPrototypeOf(s);
                if (null === d) return;
                e = d, t = o, n = r, i = !0, a = d = void 0
            }
        },
        s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = function(e) {
            function t(e) {
                return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function n(e) {
                return (e[0] || e).nodeType
            }

            function i() {
                return {
                    bindType: a.end,
                    delegateType: a.end,
                    handle: function(t) {
                        return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                    }
                }
            }

            function s() {
                if (window.QUnit) return !1;
                var e = document.createElement("bootstrap");
                for (var t in l)
                    if (void 0 !== e.style[t]) return {
                        end: l[t]
                    };
                return !1
            }

            function o(t) {
                var n = this,
                    i = !1;
                return e(this).one(d.TRANSITION_END, function() {
                    i = !0
                }), setTimeout(function() {
                    i || d.triggerTransitionEnd(n)
                }, t), this
            }

            function r() {
                a = s(), e.fn.emulateTransitionEnd = o, d.supportsTransitionEnd() && (e.event.special[d.TRANSITION_END] = i())
            }
            var a = !1,
                l = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                d = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(e) {
                        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
                        return e
                    },
                    getSelectorFromElement: function(e) {
                        var t = e.getAttribute("data-target");
                        return t || (t = e.getAttribute("href") || "", t = /^#[a-z]/i.test(t) ? t : null), t
                    },
                    reflow: function(e) {
                        new Function("bs", "return bs")(e.offsetHeight)
                    },
                    triggerTransitionEnd: function(t) {
                        e(t).trigger(a.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(a)
                    },
                    typeCheckConfig: function(e, i, s) {
                        for (var o in s)
                            if (s.hasOwnProperty(o)) {
                                var r = s[o],
                                    a = i[o],
                                    l = void 0;
                                if (l = a && n(a) ? "element" : t(a), !new RegExp(r).test(l)) throw new Error(e.toUpperCase() + ": " + ('Option "' + o + '" provided type "' + l + '" ') + ('but expected type "' + r + '".'))
                            }
                    }
                };
            return r(), d
        }(jQuery),
        r = (function(e) {
            var t = "alert",
                i = "4.0.0-alpha",
                r = "bs.alert",
                a = "." + r,
                l = ".data-api",
                d = e.fn[t],
                u = 150,
                c = {
                    DISMISS: '[data-dismiss="alert"]'
                },
                p = {
                    CLOSE: "close" + a,
                    CLOSED: "closed" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                h = {
                    ALERT: "alert",
                    FADE: "fade",
                    IN: "in"
                },
                f = function() {
                    function t(e) {
                        n(this, t), this._element = e
                    }
                    return s(t, [{
                        key: "close",
                        value: function(e) {
                            e = e || this._element;
                            var t = this._getRootElement(e),
                                n = this._triggerCloseEvent(t);
                            n.isDefaultPrevented() || this._removeElement(t)
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeData(this._element, r), this._element = null
                        }
                    }, {
                        key: "_getRootElement",
                        value: function(t) {
                            var n = o.getSelectorFromElement(t),
                                i = !1;
                            return n && (i = e(n)[0]), i || (i = e(t).closest("." + h.ALERT)[0]), i
                        }
                    }, {
                        key: "_triggerCloseEvent",
                        value: function(t) {
                            var n = e.Event(p.CLOSE);
                            return e(t).trigger(n), n
                        }
                    }, {
                        key: "_removeElement",
                        value: function(t) {
                            return e(t).removeClass(h.IN), o.supportsTransitionEnd() && e(t).hasClass(h.FADE) ? void e(t).one(o.TRANSITION_END, e.proxy(this._destroyElement, this, t)).emulateTransitionEnd(u) : void this._destroyElement(t)
                        }
                    }, {
                        key: "_destroyElement",
                        value: function(t) {
                            e(t).detach().trigger(p.CLOSED).remove()
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(n) {
                            return this.each(function() {
                                var i = e(this),
                                    s = i.data(r);
                                s || (s = new t(this), i.data(r, s)), "close" === n && s[n](this)
                            })
                        }
                    }, {
                        key: "_handleDismiss",
                        value: function(e) {
                            return function(t) {
                                t && t.preventDefault(), e.close(this)
                            }
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), t
                }();
            return e(document).on(p.CLICK_DATA_API, c.DISMISS, f._handleDismiss(new f)), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function() {
                return e.fn[t] = d, f._jQueryInterface
            }, f
        }(jQuery), function(e) {
            var t = "button",
                i = "4.0.0-alpha",
                o = "bs.button",
                r = "." + o,
                a = ".data-api",
                l = e.fn[t],
                d = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                u = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                c = {
                    CLICK_DATA_API: "click" + r + a,
                    FOCUS_BLUR_DATA_API: "focus" + r + a + " " + ("blur" + r + a)
                },
                p = function() {
                    function t(e) {
                        n(this, t), this._element = e
                    }
                    return s(t, [{
                        key: "toggle",
                        value: function() {
                            var t = !0,
                                n = e(this._element).closest(u.DATA_TOGGLE)[0];
                            if (n) {
                                var i = e(this._element).find(u.INPUT)[0];
                                if (i) {
                                    if ("radio" === i.type)
                                        if (i.checked && e(this._element).hasClass(d.ACTIVE)) t = !1;
                                        else {
                                            var s = e(n).find(u.ACTIVE)[0];
                                            s && e(s).removeClass(d.ACTIVE)
                                        } t && (i.checked = !e(this._element).hasClass(d.ACTIVE), e(this._element).trigger("change"))
                                }
                            } else this._element.setAttribute("aria-pressed", !e(this._element).hasClass(d.ACTIVE));
                            t && e(this._element).toggleClass(d.ACTIVE)
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeData(this._element, o), this._element = null
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(n) {
                            return this.each(function() {
                                var i = e(this).data(o);
                                i || (i = new t(this), e(this).data(o, i)), "toggle" === n && i[n]()
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), t
                }();
            return e(document).on(c.CLICK_DATA_API, u.DATA_TOGGLE_CARROT, function(t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass(d.BUTTON) || (n = e(n).closest(u.BUTTON)), p._jQueryInterface.call(e(n), "toggle")
            }).on(c.FOCUS_BLUR_DATA_API, u.DATA_TOGGLE_CARROT, function(t) {
                var n = e(t.target).closest(u.BUTTON)[0];
                e(n).toggleClass(d.FOCUS, /^focus(in)?$/.test(t.type))
            }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function() {
                return e.fn[t] = l, p._jQueryInterface
            }, p
        }(jQuery), function(e) {
            var t = "carousel",
                i = "4.0.0-alpha",
                r = "bs.carousel",
                a = "." + r,
                l = ".data-api",
                d = e.fn[t],
                u = 600,
                c = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                p = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                h = {
                    NEXT: "next",
                    PREVIOUS: "prev"
                },
                f = {
                    SLIDE: "slide" + a,
                    SLID: "slid" + a,
                    KEYDOWN: "keydown" + a,
                    MOUSEENTER: "mouseenter" + a,
                    MOUSELEAVE: "mouseleave" + a,
                    LOAD_DATA_API: "load" + a + l,
                    CLICK_DATA_API: "click" + a + l
                },
                m = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "right",
                    LEFT: "left",
                    ITEM: "carousel-item"
                },
                g = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".next, .prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                _ = function() {
                    function l(t, i) {
                        n(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(g.INDICATORS)[0], this._addEventListeners()
                    }
                    return s(l, [{
                        key: "next",
                        value: function() {
                            this._isSliding || this._slide(h.NEXT)
                        }
                    }, {
                        key: "nextWhenVisible",
                        value: function() {
                            document.hidden || this.next()
                        }
                    }, {
                        key: "prev",
                        value: function() {
                            this._isSliding || this._slide(h.PREVIOUS)
                        }
                    }, {
                        key: "pause",
                        value: function(t) {
                            t || (this._isPaused = !0), e(this._element).find(g.NEXT_PREV)[0] && o.supportsTransitionEnd() && (o.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }
                    }, {
                        key: "cycle",
                        value: function(t) {
                            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(e.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                        }
                    }, {
                        key: "to",
                        value: function(t) {
                            var n = this;
                            this._activeElement = e(this._element).find(g.ACTIVE_ITEM)[0];
                            var i = this._getItemIndex(this._activeElement);
                            if (!(t > this._items.length - 1 || 0 > t)) {
                                if (this._isSliding) return void e(this._element).one(f.SLID, function() {
                                    return n.to(t)
                                });
                                if (i === t) return this.pause(), void this.cycle();
                                var s = t > i ? h.NEXT : h.PREVIOUS;
                                this._slide(s, this._items[t])
                            }
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e(this._element).off(a), e.removeData(this._element, r), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(n) {
                            return n = e.extend({}, c, n), o.typeCheckConfig(t, n, p), n
                        }
                    }, {
                        key: "_addEventListeners",
                        value: function() {
                            this._config.keyboard && e(this._element).on(f.KEYDOWN, e.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || e(this._element).on(f.MOUSEENTER, e.proxy(this.pause, this)).on(f.MOUSELEAVE, e.proxy(this.cycle, this))
                        }
                    }, {
                        key: "_keydown",
                        value: function(e) {
                            if (e.preventDefault(), !/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                case 37:
                                    this.prev();
                                    break;
                                case 39:
                                    this.next();
                                    break;
                                default:
                                    return
                            }
                        }
                    }, {
                        key: "_getItemIndex",
                        value: function(t) {
                            return this._items = e.makeArray(e(t).parent().find(g.ITEM)), this._items.indexOf(t)
                        }
                    }, {
                        key: "_getItemByDirection",
                        value: function(e, t) {
                            var n = e === h.NEXT,
                                i = e === h.PREVIOUS,
                                s = this._getItemIndex(t),
                                o = this._items.length - 1,
                                r = i && 0 === s || n && s === o;
                            if (r && !this._config.wrap) return t;
                            var a = e === h.PREVIOUS ? -1 : 1,
                                l = (s + a) % this._items.length;
                            return -1 === l ? this._items[this._items.length - 1] : this._items[l]
                        }
                    }, {
                        key: "_triggerSlideEvent",
                        value: function(t, n) {
                            var i = e.Event(f.SLIDE, {
                                relatedTarget: t,
                                direction: n
                            });
                            return e(this._element).trigger(i), i
                        }
                    }, {
                        key: "_setActiveIndicatorElement",
                        value: function(t) {
                            if (this._indicatorsElement) {
                                e(this._indicatorsElement).find(g.ACTIVE).removeClass(m.ACTIVE);
                                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                                n && e(n).addClass(m.ACTIVE)
                            }
                        }
                    }, {
                        key: "_slide",
                        value: function(t, n) {
                            var i = this,
                                s = e(this._element).find(g.ACTIVE_ITEM)[0],
                                r = n || s && this._getItemByDirection(t, s),
                                a = Boolean(this._interval),
                                l = t === h.NEXT ? m.LEFT : m.RIGHT;
                            if (r && e(r).hasClass(m.ACTIVE)) return void(this._isSliding = !1);
                            var d = this._triggerSlideEvent(r, l);
                            if (!d.isDefaultPrevented() && s && r) {
                                this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(r);
                                var c = e.Event(f.SLID, {
                                    relatedTarget: r,
                                    direction: l
                                });
                                o.supportsTransitionEnd() && e(this._element).hasClass(m.SLIDE) ? (e(r).addClass(t), o.reflow(r), e(s).addClass(l), e(r).addClass(l), e(s).one(o.TRANSITION_END, function() {
                                    e(r).removeClass(l).removeClass(t), e(r).addClass(m.ACTIVE), e(s).removeClass(m.ACTIVE).removeClass(t).removeClass(l), i._isSliding = !1, setTimeout(function() {
                                        return e(i._element).trigger(c)
                                    }, 0)
                                }).emulateTransitionEnd(u)) : (e(s).removeClass(m.ACTIVE), e(r).addClass(m.ACTIVE), this._isSliding = !1, e(this._element).trigger(c)), a && this.cycle()
                            }
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(t) {
                            return this.each(function() {
                                var n = e(this).data(r),
                                    i = e.extend({}, c, e(this).data());
                                "object" == typeof t && e.extend(i, t);
                                var s = "string" == typeof t ? t : i.slide;
                                if (n || (n = new l(this, i), e(this).data(r, n)), "number" == typeof t) n.to(t);
                                else if ("string" == typeof s) {
                                    if (void 0 === n[s]) throw new Error('No method named "' + s + '"');
                                    n[s]()
                                } else i.interval && (n.pause(), n.cycle())
                            })
                        }
                    }, {
                        key: "_dataApiClickHandler",
                        value: function(t) {
                            var n = o.getSelectorFromElement(this);
                            if (n) {
                                var i = e(n)[0];
                                if (i && e(i).hasClass(m.CAROUSEL)) {
                                    var s = e.extend({}, e(i).data(), e(this).data()),
                                        a = this.getAttribute("data-slide-to");
                                    a && (s.interval = !1), l._jQueryInterface.call(e(i), s), a && e(i).data(r).to(a), t.preventDefault()
                                }
                            }
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }]), l
                }();
            return e(document).on(f.CLICK_DATA_API, g.DATA_SLIDE, _._dataApiClickHandler), e(window).on(f.LOAD_DATA_API, function() {
                e(g.DATA_RIDE).each(function() {
                    var t = e(this);
                    _._jQueryInterface.call(t, t.data())
                })
            }), e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function() {
                return e.fn[t] = d, _._jQueryInterface
            }, _
        }(jQuery), function(e) {
            var t = "collapse",
                i = "4.0.0-alpha",
                r = "bs.collapse",
                a = "." + r,
                l = ".data-api",
                d = e.fn[t],
                u = 600,
                c = {
                    toggle: !0,
                    parent: ""
                },
                p = {
                    toggle: "boolean",
                    parent: "string"
                },
                h = {
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                f = {
                    IN: "in",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                m = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                g = {
                    ACTIVES: ".panel > .in, .panel > .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                _ = function() {
                    function a(t, i) {
                        n(this, a), this._isTransitioning = !1, this._element = t, this._config = this._getConfig(i), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],' + ('[data-toggle="collapse"][data-target="#' + t.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    return s(a, [{
                        key: "toggle",
                        value: function() {
                            e(this._element).hasClass(f.IN) ? this.hide() : this.show()
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var t = this;
                            if (!this._isTransitioning && !e(this._element).hasClass(f.IN)) {
                                var n = void 0,
                                    i = void 0;
                                if (this._parent && (n = e.makeArray(e(g.ACTIVES)), n.length || (n = null)), !(n && (i = e(n).data(r), i && i._isTransitioning))) {
                                    var s = e.Event(h.SHOW);
                                    if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
                                        n && (a._jQueryInterface.call(e(n), "hide"), i || e(n).data(r, null));
                                        var l = this._getDimension();
                                        e(this._element).removeClass(f.COLLAPSE).addClass(f.COLLAPSING), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && e(this._triggerArray).removeClass(f.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var d = function() {
                                            e(t._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).addClass(f.IN), t._element.style[l] = "", t.setTransitioning(!1), e(t._element).trigger(h.SHOWN)
                                        };
                                        if (!o.supportsTransitionEnd()) return void d();
                                        var c = l[0].toUpperCase() + l.slice(1),
                                            p = "scroll" + c;
                                        e(this._element).one(o.TRANSITION_END, d).emulateTransitionEnd(u), this._element.style[l] = this._element[p] + "px"
                                    }
                                }
                            }
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            var t = this;
                            if (!this._isTransitioning && e(this._element).hasClass(f.IN)) {
                                var n = e.Event(h.HIDE);
                                if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                    var i = this._getDimension(),
                                        s = i === m.WIDTH ? "offsetWidth" : "offsetHeight";
                                    this._element.style[i] = this._element[s] + "px", o.reflow(this._element), e(this._element).addClass(f.COLLAPSING).removeClass(f.COLLAPSE).removeClass(f.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && e(this._triggerArray).addClass(f.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                    var r = function() {
                                        t.setTransitioning(!1), e(t._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).trigger(h.HIDDEN)
                                    };
                                    return this._element.style[i] = 0, o.supportsTransitionEnd() ? void e(this._element).one(o.TRANSITION_END, r).emulateTransitionEnd(u) : void r()
                                }
                            }
                        }
                    }, {
                        key: "setTransitioning",
                        value: function(e) {
                            this._isTransitioning = e
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeData(this._element, r), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(n) {
                            return n = e.extend({}, c, n), n.toggle = Boolean(n.toggle), o.typeCheckConfig(t, n, p), n
                        }
                    }, {
                        key: "_getDimension",
                        value: function() {
                            var t = e(this._element).hasClass(m.WIDTH);
                            return t ? m.WIDTH : m.HEIGHT
                        }
                    }, {
                        key: "_getParent",
                        value: function() {
                            var t = this,
                                n = e(this._config.parent)[0],
                                i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                            return e(n).find(i).each(function(e, n) {
                                t._addAriaAndCollapsedClass(a._getTargetFromElement(n), [n])
                            }), n
                        }
                    }, {
                        key: "_addAriaAndCollapsedClass",
                        value: function(t, n) {
                            if (t) {
                                var i = e(t).hasClass(f.IN);
                                t.setAttribute("aria-expanded", i), n.length && e(n).toggleClass(f.COLLAPSED, !i).attr("aria-expanded", i)
                            }
                        }
                    }], [{
                        key: "_getTargetFromElement",
                        value: function(t) {
                            var n = o.getSelectorFromElement(t);
                            return n ? e(n)[0] : null
                        }
                    }, {
                        key: "_jQueryInterface",
                        value: function(t) {
                            return this.each(function() {
                                var n = e(this),
                                    i = n.data(r),
                                    s = e.extend({}, c, n.data(), "object" == typeof t && t);
                                if (!i && s.toggle && /show|hide/.test(t) && (s.toggle = !1), i || (i = new a(this, s), n.data(r, i)), "string" == typeof t) {
                                    if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                    i[t]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }]), a
                }();
            return e(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function(t) {
                t.preventDefault();
                var n = _._getTargetFromElement(this),
                    i = e(n).data(r),
                    s = i ? "toggle" : e(this).data();
                _._jQueryInterface.call(e(n), s)
            }), e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function() {
                return e.fn[t] = d, _._jQueryInterface
            }, _
    
        }(jQuery), function(e) {
            var t = "modal",
                i = "4.0.0-alpha",
                r = "bs.modal",
                a = "." + r,
                l = ".data-api",
                d = e.fn[t],
                u = 300,
                c = 150,
                p = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                h = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                f = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    FOCUSIN: "focusin" + a,
                    RESIZE: "resize" + a,
                    CLICK_DISMISS: "click.dismiss" + a,
                    KEYDOWN_DISMISS: "keydown.dismiss" + a,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + a,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                m = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    IN: "in"
                },
                g = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
                },
                _ = function() {
                    function l(t, i) {
                        n(this, l), this._config = this._getConfig(i), this._element = t, this._dialog = e(t).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    return s(l, [{
                        key: "toggle",
                        value: function(e) {
                            return this._isShown ? this.hide() : this.show(e)
                        }
                    }, {
                        key: "show",
                        value: function(t) {
                            var n = this,
                                i = e.Event(f.SHOW, {
                                    relatedTarget: t
                                });
                            e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), e(document.body).addClass(m.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(f.CLICK_DISMISS, g.DATA_DISMISS, e.proxy(this.hide, this)), e(this._dialog).on(f.MOUSEDOWN_DISMISS, function() {
                                e(n._element).one(f.MOUSEUP_DISMISS, function(t) {
                                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(e.proxy(this._showElement, this, t)))
                        }
                    }, {
                        key: "hide",
                        value: function(t) {
                            t && t.preventDefault();
                            var n = e.Event(f.HIDE);
                            e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), e(document).off(f.FOCUSIN), e(this._element).removeClass(m.IN), e(this._element).off(f.CLICK_DISMISS), e(this._dialog).off(f.MOUSEDOWN_DISMISS), o.supportsTransitionEnd() && e(this._element).hasClass(m.FADE) ? e(this._element).one(o.TRANSITION_END, e.proxy(this._hideModal, this)).emulateTransitionEnd(u) : this._hideModal())
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeData(this._element, r), e(window).off(a), e(document).off(a), e(this._element).off(a), e(this._backdrop).off(a), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(n) {
                            return n = e.extend({}, p, n), o.typeCheckConfig(t, n, h), n
                        }
                    }, {
                        key: "_showElement",
                        value: function(t) {
                            var n = this,
                                i = o.supportsTransitionEnd() && e(this._element).hasClass(m.FADE);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.scrollTop = 0, i && o.reflow(this._element), e(this._element).addClass(m.IN), this._config.focus && this._enforceFocus();
                            var s = e.Event(f.SHOWN, {
                                    relatedTarget: t
                                }),
                                r = function() {
                                    n._config.focus && n._element.focus(), e(n._element).trigger(s)
                                };
                            i ? e(this._dialog).one(o.TRANSITION_END, r).emulateTransitionEnd(u) : r()
                        }
                    }, {
                        key: "_enforceFocus",
                        value: function() {
                            var t = this;
                            e(document).off(f.FOCUSIN).on(f.FOCUSIN, function(n) {
                                t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
                            })
                        }
                    }, {
                        key: "_setEscapeEvent",
                        value: function() {
                            var t = this;
                            this._isShown && this._config.keyboard ? e(this._element).on(f.KEYDOWN_DISMISS, function(e) {
                                27 === e.which && t.hide()
                            }) : this._isShown || e(this._element).off(f.KEYDOWN_DISMISS)
                        }
                    }, {
                        key: "_setResizeEvent",
                        value: function() {
                            this._isShown ? e(window).on(f.RESIZE, e.proxy(this._handleUpdate, this)) : e(window).off(f.RESIZE)
                        }
                    }, {
                        key: "_hideModal",
                        value: function() {
                            var t = this;
                            this._element.style.display = "none", this._showBackdrop(function() {
                                e(document.body).removeClass(m.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(f.HIDDEN)
                            })
                        }
                    }, {
                        key: "_removeBackdrop",
                        value: function() {
                            this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                        }
                    }, {
                        key: "_showBackdrop",
                        value: function(t) {
                            var n = this,
                                i = e(this._element).hasClass(m.FADE) ? m.FADE : "";
                            if (this._isShown && this._config.backdrop) {
                                var s = o.supportsTransitionEnd() && i;
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = m.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(f.CLICK_DISMISS, function(e) {
                                        return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                                    }), s && o.reflow(this._backdrop), e(this._backdrop).addClass(m.IN), !t) return;
                                if (!s) return void t();
                                e(this._backdrop).one(o.TRANSITION_END, t).emulateTransitionEnd(c)
                            } else if (!this._isShown && this._backdrop) {
                                e(this._backdrop).removeClass(m.IN);
                                var r = function() {
                                    n._removeBackdrop(), t && t()
                                };
                                o.supportsTransitionEnd() && e(this._element).hasClass(m.FADE) ? e(this._backdrop).one(o.TRANSITION_END, r).emulateTransitionEnd(c) : r()
                            } else t && t()
                        }
                    }, {
                        key: "_handleUpdate",
                        value: function() {
                            this._adjustDialog()
                        }
                    }, {
                        key: "_adjustDialog",
                        value: function() {
                            var e = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px~")
                        }
                    }, {
                        key: "_resetAdjustments",
                        value: function() {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }
                    }, {
                        key: "_checkScrollbar",
                        value: function() {
                            var e = window.innerWidth;
                            if (!e) {
                                var t = document.documentElement.getBoundingClientRect();
                                e = t.right - Math.abs(t.left)
                            }
                            this._isBodyOverflowing = document.body.clientWidth < e, this._scrollbarWidth = this._getScrollbarWidth()
                        }
                    }, {
                        key: "_setScrollbar",
                        value: function() {
                            var t = parseInt(e(g.FIXED_CONTENT).css("padding-right") || 0, 10);
                            this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px")
                        }
                    }, {
                        key: "_resetScrollbar",
                        value: function() {
                            document.body.style.paddingRight = this._originalBodyPadding
                        }
                    }, {
                        key: "_getScrollbarWidth",
                        value: function() {
                            var e = document.createElement("div");
                            e.className = m.SCROLLBAR_MEASURER, document.body.appendChild(e);
                            var t = e.offsetWidth - e.clientWidth;
                            return document.body.removeChild(e), t
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(t, n) {
                            return this.each(function() {
                                var i = e(this).data(r),
                                    s = e.extend({}, l.Default, e(this).data(), "object" == typeof t && t);
                                if (i || (i = new l(this, s), e(this).data(r, i)), "string" == typeof t) {
                                    if (void 0 === i[t]) throw new Error('No method named "' + t + '"');
                                    i[t](n)
                                } else s.show && i.show(n)
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return p
                        }
                    }]), l
                }();
            return e(document).on(f.CLICK_DATA_API, g.DATA_TOGGLE, function(t) {
                var n = this,
                    i = void 0,
                    s = o.getSelectorFromElement(this);
                s && (i = e(s)[0]);
                var a = e(i).data(r) ? "toggle" : e.extend({}, e(i).data(), e(this).data());
                "A" === this.tagName && t.preventDefault();
                var l = e(i).one(f.SHOW, function(t) {
                    t.isDefaultPrevented() || l.one(f.HIDDEN, function() {
                        e(n).is(":visible") && n.focus()
                    })
                });
                _._jQueryInterface.call(e(i), a, this)
            }), e.fn[t] = _._jQueryInterface, e.fn[t].Constructor = _, e.fn[t].noConflict = function() {
                return e.fn[t] = d, _._jQueryInterface
            }, _
        }(jQuery), function(e) {
            var t = "scrollspy",
                i = "4.0.0-alpha",
                r = "bs.scrollspy",
                a = "." + r,
                l = ".data-api",
                d = e.fn[t],
                u = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                c = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                p = {
                    ACTIVATE: "activate" + a,
                    SCROLL: "scroll" + a,
                    LOAD_DATA_API: "load" + a + l
                },
                h = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    NAV_LINK: "nav-link",
                    NAV: "nav",
                    ACTIVE: "active"
                },
                f = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    LIST_ITEM: ".list-item",
                    LI: "li",
                    LI_DROPDOWN: "li.dropdown",
                    NAV_LINKS: ".nav-link",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                m = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                g = function() {
                    function l(t, i) {
                        n(this, l), this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(i), this._selector = this._config.target + " " + f.NAV_LINKS + "," + (this._config.target + " " + f.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(p.SCROLL, e.proxy(this._process, this)), this.refresh(), this._process()
                    }
                    return s(l, [{
                        key: "refresh",
                        value: function() {
                            var t = this,
                                n = this._scrollElement !== this._scrollElement.window ? m.POSITION : m.OFFSET,
                                i = "auto" === this._config.method ? n : this._config.method,
                                s = i === m.POSITION ? this._getScrollTop() : 0;
                            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                            var r = e.makeArray(e(this._selector));
                            r.map(function(t) {
                                var n = void 0,
                                    r = o.getSelectorFromElement(t);
                                return r && (n = e(r)[0]), n && (n.offsetWidth || n.offsetHeight) ? [e(n)[i]().top + s, r] : void 0
                            }).filter(function(e) {
                                return e
                            }).sort(function(e, t) {
                                return e[0] - t[0]
                            }).forEach(function(e) {
                                t._offsets.push(e[0]), t._targets.push(e[1])
                            })
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeData(this._element, r), e(this._scrollElement).off(a), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(n) {
                            if (n = e.extend({}, u, n), "string" != typeof n.target) {
                                var i = e(n.target).attr("id");
                                i || (i = o.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i
                            }
                            return o.typeCheckConfig(t, n, c), n
                        }
                    }, {
                        key: "_getScrollTop",
                        value: function() {
                            return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                        }
                    }, {
                        key: "_getScrollHeight",
                        value: function() {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }
                    }, {
                        key: "_process",
                        value: function() {
                            var e = this._getScrollTop() + this._config.offset,
                                t = this._getScrollHeight(),
                                n = this._config.offset + t - this._scrollElement.offsetHeight;
                            if (this._scrollHeight !== t && this.refresh(), e >= n) {
                                var i = this._targets[this._targets.length - 1];
                                this._activeTarget !== i && this._activate(i)
                            }
                            if (this._activeTarget && e < this._offsets[0]) return this._activeTarget = null, void this._clear();
                            for (var s = this._offsets.length; s--;) {
                                var o = this._activeTarget !== this._targets[s] && e >= this._offsets[s] && (void 0 === this._offsets[s + 1] || e < this._offsets[s + 1]);
                                o && this._activate(this._targets[s])
                            }
                        }
                    }, {
                        key: "_activate",
                        value: function(t) {
                            this._activeTarget = t, this._clear();
                            var n = this._selector.split(",");
                            n = n.map(function(e) {
                                return e + '[data-target="' + t + '"],' + (e + '[href="' + t + '"]')
                            });
                            var i = e(n.join(","));
                            i.hasClass(h.DROPDOWN_ITEM) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(h.ACTIVE), i.addClass(h.ACTIVE)) : i.parents(f.LI).find(f.NAV_LINKS).addClass(h.ACTIVE), e(this._scrollElement).trigger(p.ACTIVATE, {
                                relatedTarget: t
                            })
                        }
                    }, {
                        key: "_clear",
                        value: function() {
                            e(this._selector).filter(f.ACTIVE).removeClass(h.ACTIVE)
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(t) {
                            return this.each(function() {
                                var n = e(this).data(r),
                                    i = "object" == typeof t && t || null;
                                if (n || (n = new l(this, i), e(this).data(r, n)), "string" == typeof t) {
                                    if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return u
                        }
                    }]), l
                }();
            return e(window).on(p.LOAD_DATA_API, function() {
                for (var t = e.makeArray(e(f.DATA_SPY)), n = t.length; n--;) {
                    var i = e(t[n]);
                    g._jQueryInterface.call(i, i.data())
                }
            }), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function() {
                return e.fn[t] = d, g._jQueryInterface
            }, g
        }(jQuery), function(e) {
            var t = "tab",
                i = "4.0.0-alpha",
                r = "bs.tab",
                a = "." + r,
                l = ".data-api",
                d = e.fn[t],
                u = 150,
                c = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    CLICK_DATA_API: "click" + a + l
                },
                p = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    FADE: "fade",
                    IN: "in"
                },
                h = {
                    A: "a",
                    LI: "li",
                    DROPDOWN: ".dropdown",
                    UL: "ul:not(.dropdown-menu)",
                    FADE_CHILD: "> .nav-item .fade, > .fade",
                    ACTIVE: ".active",
                    ACTIVE_CHILD: "> .nav-item > .active, > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                f = function() {
                    function t(e) {
                        n(this, t), this._element = e
                    }
                    return s(t, [{
                        key: "show",
                        value: function() {
                            var t = this;
                            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !e(this._element).hasClass(p.ACTIVE)) {
                                var n = void 0,
                                    i = void 0,
                                    s = e(this._element).closest(h.UL)[0],
                                    r = o.getSelectorFromElement(this._element);
                                s && (i = e.makeArray(e(s).find(h.ACTIVE)), i = i[i.length - 1]);
                                var a = e.Event(c.HIDE, {
                                        relatedTarget: this._element
                                    }),
                                    l = e.Event(c.SHOW, {
                                        relatedTarget: i
                                    });
                                if (i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                    r && (n = e(r)[0]), this._activate(this._element, s);
                                    var d = function() {
                                        var n = e.Event(c.HIDDEN, {
                                                relatedTarget: t._element
                                            }),
                                            s = e.Event(c.SHOWN, {
                                                relatedTarget: i
                                            });
                                        e(i).trigger(n), e(t._element).trigger(s)
                                    };
                                    n ? this._activate(n, n.parentNode, d) : d()
                                }
                            }
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            e.removeClass(this._element, r), this._element = null
                        }
                    }, {
                        key: "_activate",
                        value: function(t, n, i) {
                            var s = e(n).find(h.ACTIVE_CHILD)[0],
                                r = i && o.supportsTransitionEnd() && (s && e(s).hasClass(p.FADE) || Boolean(e(n).find(h.FADE_CHILD)[0])),
                                a = e.proxy(this._transitionComplete, this, t, s, r, i);
                            s && r ? e(s).one(o.TRANSITION_END, a).emulateTransitionEnd(u) : a(), s && e(s).removeClass(p.IN)
                        }
                    }, {
                        key: "_transitionComplete",
                        value: function(t, n, i, s) {
                            if (n) {
                                e(n).removeClass(p.ACTIVE);
                                var r = e(n).find(h.DROPDOWN_ACTIVE_CHILD)[0];
                                r && e(r).removeClass(p.ACTIVE), n.setAttribute("aria-expanded", !1)
                            }
                            if (e(t).addClass(p.ACTIVE), t.setAttribute("aria-expanded", !0), i ? (o.reflow(t), e(t).addClass(p.IN)) : e(t).removeClass(p.FADE), t.parentNode && e(t.parentNode).hasClass(p.DROPDOWN_MENU)) {
                                var a = e(t).closest(h.DROPDOWN)[0];
                                a && e(a).find(h.DROPDOWN_TOGGLE).addClass(p.ACTIVE), t.setAttribute("aria-expanded", !0)
                            }
                            s && s()
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(n) {
                            return this.each(function() {
                                var i = e(this),
                                    s = i.data(r);
                                if (s || (s = s = new t(this), i.data(r, s)), "string" == typeof n) {
                                    if (void 0 === s[n]) throw new Error('No method named "' + n + '"');
                                    s[n]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }]), t
                }();
            return e(document).on(c.CLICK_DATA_API, h.DATA_TOGGLE, function(t) {
                t.preventDefault(), f._jQueryInterface.call(e(this), "show")
            }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function() {
                return e.fn[t] = d, f._jQueryInterface
            }, f
        }(jQuery), function(e) {
            if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");
            var t = "tooltip",
                i = "4.0.0-alpha",
                r = "bs.tooltip",
                a = "." + r,
                l = e.fn[t],
                d = 150,
                u = "bs-tether",
                c = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: []
                },
                p = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array"
                },
                h = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                f = {
                    IN: "in",
                    OUT: "out"
                },
                m = {
                    HIDE: "hide" + a,
                    HIDDEN: "hidden" + a,
                    SHOW: "show" + a,
                    SHOWN: "shown" + a,
                    INSERTED: "inserted" + a,
                    CLICK: "click" + a,
                    FOCUSIN: "focusin" + a,
                    FOCUSOUT: "focusout" + a,
                    MOUSEENTER: "mouseenter" + a,
                    MOUSELEAVE: "mouseleave" + a
                },
                g = {
                    FADE: "fade",
                    IN: "in"
                },
                _ = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner"
                },
                y = {
                    element: !1,
                    enabled: !1
                },
                v = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                b = function() {
                    function l(e, t) {
                        n(this, l), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                    }
                    return s(l, [{
                        key: "enable",
                        value: function() {
                            this._isEnabled = !0
                        }
                    }, {
                        key: "disable",
                        value: function() {
                            this._isEnabled = !1
                        }
                    }, {
                        key: "toggleEnabled",
                        value: function() {
                            this._isEnabled = !this._isEnabled
                        }
                    }, {
                        key: "toggle",
                        value: function(t) {
                            if (t) {
                                var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (e(this.getTipElement()).hasClass(g.IN)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            clearTimeout(this._timeout), this.cleanupTether(), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var t = this,
                                n = e.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                e(this.element).trigger(n);
                                var i = e.contains(this.element.ownerDocument.documentElement, this.element);
                                if (n.isDefaultPrevented() || !i) return;
                                var s = this.getTipElement(),
                                    r = o.getUID(this.constructor.NAME);
                                s.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && e(s).addClass(g.FADE);
                                var a = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                                    d = this._getAttachment(a);
                                e(s).data(this.constructor.DATA_KEY, this).appendTo(document.body), e(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                        attachment: d,
                                        element: s,
                                        target: this.element,
                                        classes: y,
                                        classPrefix: u,
                                        offset: this.config.offset,
                                        constraints: this.config.constraints,
                                        addTargetClasses: !1
                                    }), o.reflow(s), this._tether.position(),
                                    e(s).addClass(g.IN);
                                var c = function() {
                                    var n = t._hoverState;
                                    t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === f.OUT && t._leave(null, t)
                                };
                                if (o.supportsTransitionEnd() && e(this.tip).hasClass(g.FADE)) return void e(this.tip).one(o.TRANSITION_END, c).emulateTransitionEnd(l._TRANSITION_DURATION);
                                c()
                            }
                        }
                    }, {
                        key: "hide",
                        value: function(t) {
                            var n = this,
                                i = this.getTipElement(),
                                s = e.Event(this.constructor.Event.HIDE),
                                r = function() {
                                    n._hoverState !== f.IN && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), n.cleanupTether(), t && t()
                                };
                            e(this.element).trigger(s), s.isDefaultPrevented() || (e(i).removeClass(g.IN), o.supportsTransitionEnd() && e(this.tip).hasClass(g.FADE) ? e(i).one(o.TRANSITION_END, r).emulateTransitionEnd(d) : r(), this._hoverState = "")
                        }
                    }, {
                        key: "isWithContent",
                        value: function() {
                            return Boolean(this.getTitle())
                        }
                    }, {
                        key: "getTipElement",
                        value: function() {
                            return this.tip = this.tip || e(this.config.template)[0]
                        }
                    }, {
                        key: "setContent",
                        value: function() {
                            var t = e(this.getTipElement());
                            this.setElementContent(t.find(_.TOOLTIP_INNER), this.getTitle()), t.removeClass(g.FADE).removeClass(g.IN), this.cleanupTether()
                        }
                    }, {
                        key: "setElementContent",
                        value: function(t, n) {
                            var i = this.config.html;
                            "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                        }
                    }, {
                        key: "getTitle",
                        value: function() {
                            var e = this.element.getAttribute("data-original-title");
                            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                        }
                    }, {
                        key: "cleanupTether",
                        value: function() {
                            this._tether && this._tether.destroy()
                        }
                    }, {
                        key: "_getAttachment",
                        value: function(e) {
                            return h[e.toUpperCase()]
                        }
                    }, {
                        key: "_setListeners",
                        value: function() {
                            var t = this,
                                n = this.config.trigger.split(" ");
                            n.forEach(function(n) {
                                if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, e.proxy(t.toggle, t));
                                else if (n !== v.MANUAL) {
                                    var i = n === v.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                        s = n === v.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                    e(t.element).on(i, t.config.selector, e.proxy(t._enter, t)).on(s, t.config.selector, e.proxy(t._leave, t))
                                }
                            }), this.config.selector ? this.config = e.extend({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        }
                    }, {
                        key: "_fixTitle",
                        value: function() {
                            var e = typeof this.element.getAttribute("data-original-title");
                            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }
                    }, {
                        key: "_enter",
                        value: function(t, n) {
                            var i = this.constructor.DATA_KEY;
                            return n = n || e(t.currentTarget).data(i), n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? v.FOCUS : v.HOVER] = !0), e(n.getTipElement()).hasClass(g.IN) || n._hoverState === f.IN ? void(n._hoverState = f.IN) : (clearTimeout(n._timeout), n._hoverState = f.IN, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function() {
                                n._hoverState === f.IN && n.show()
                            }, n.config.delay.show)) : void n.show())
                        }
                    }, {
                        key: "_leave",
                        value: function(t, n) {
                            var i = this.constructor.DATA_KEY;
                            return n = n || e(t.currentTarget).data(i), n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? v.FOCUS : v.HOVER] = !1), n._isWithActiveTrigger() ? void 0 : (clearTimeout(n._timeout), n._hoverState = f.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function() {
                                n._hoverState === f.OUT && n.hide()
                            }, n.config.delay.hide)) : void n.hide())
                        }
                    }, {
                        key: "_isWithActiveTrigger",
                        value: function() {
                            for (var e in this._activeTrigger)
                                if (this._activeTrigger[e]) return !0;
                            return !1
                        }
                    }, {
                        key: "_getConfig",
                        value: function(n) {
                            return n = e.extend({}, this.constructor.Default, e(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
                                show: n.delay,
                                hide: n.delay
                            }), o.typeCheckConfig(t, n, this.constructor.DefaultType), n
                        }
                    }, {
                        key: "_getDelegateConfig",
                        value: function() {
                            var e = {};
                            if (this.config)
                                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                            return e
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(t) {
                            return this.each(function() {
                                var n = e(this).data(r),
                                    i = "object" == typeof t ? t : null;
                                if ((n || !/destroy|hide/.test(t)) && (n || (n = new l(this, i), e(this).data(r, n)), "string" == typeof t)) {
                                    if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return r
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return m
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return p
                        }
                    }]), l
                }();
            return e.fn[t] = b._jQueryInterface, e.fn[t].Constructor = b, e.fn[t].noConflict = function() {
                return e.fn[t] = l, b._jQueryInterface
            }, b
        }(jQuery));
    ! function(e) {
        var o = "popover",
            a = "4.0.0-alpha",
            l = "bs.popover",
            d = "." + l,
            u = e.fn[o],
            c = e.extend({}, r.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            p = e.extend({}, r.DefaultType, {
                content: "(string|element|function)"
            }),
            h = {
                FADE: "fade",
                IN: "in"
            },
            f = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content",
                ARROW: ".popover-arrow"
            },
            m = {
                HIDE: "hide" + d,
                HIDDEN: "hidden" + d,
                SHOW: "show" + d,
                SHOWN: "shown" + d,
                INSERTED: "inserted" + d,
                CLICK: "click" + d,
                FOCUSIN: "focusin" + d,
                FOCUSOUT: "focusout" + d,
                MOUSEENTER: "mouseenter" + d,
                MOUSELEAVE: "mouseleave" + d
            },
            g = function(r) {
                function u() {
                    n(this, u), i(Object.getPrototypeOf(u.prototype), "constructor", this).apply(this, arguments)
                }
                return t(u, r), s(u, [{
                    key: "isWithContent",
                    value: function() {
                        return this.getTitle() || this._getContent()
                    }
                }, {
                    key: "getTipElement",
                    value: function() {
                        return this.tip = this.tip || e(this.config.template)[0]
                    }
                }, {
                    key: "setContent",
                    value: function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(f.TITLE), this.getTitle()), this.setElementContent(t.find(f.CONTENT), this._getContent()), t.removeClass(h.FADE).removeClass(h.IN), this.cleanupTether()
                    }
                }, {
                    key: "_getContent",
                    value: function() {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function(t) {
                        return this.each(function() {
                            var n = e(this).data(l),
                                i = "object" == typeof t ? t : null;
                            if ((n || !/destroy|hide/.test(t)) && (n || (n = new u(this, i), e(this).data(l, n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new Error('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }
                }, {
                    key: "VERSION",
                    get: function() {
                        return a
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return c
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return o
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return l
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return m
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return d
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return p
                    }
                }]), u
            }(r);
        return e.fn[o] = g._jQueryInterface, e.fn[o].Constructor = g, e.fn[o].noConflict = function() {
            return e.fn[o] = u, g._jQueryInterface
        }, g
    }(jQuery)
}(jQuery);
var ResponsiveBootstrapToolkit = function(e) {
    var t = {
            detectionDivs: {
                bootstrap: {
                    xs: e('<div class="device-xs visible-xs visible-xs-block"></div>'),
                    sm: e('<div class="device-sm visible-sm visible-sm-block"></div>'),
                    md: e('<div class="device-md visible-md visible-md-block"></div>'),
                    lg: e('<div class="device-lg visible-lg visible-lg-block"></div>')
                },
                foundation: {
                    small: e('<div class="device-xs show-for-small-only"></div>'),
                    medium: e('<div class="device-sm show-for-medium-only"></div>'),
                    large: e('<div class="device-md show-for-large-only"></div>'),
                    xlarge: e('<div class="device-lg show-for-xlarge-only"></div>')
                }
            },
            applyDetectionDivs: function() {
                e(document).ready(function() {
                    e.each(n.breakpoints, function(e) {
                        n.breakpoints[e].appendTo(".responsive-bootstrap-toolkit")
                    })
                })
            },
            isAnExpression: function(e) {
                return "<" == e.charAt(0) || ">" == e.charAt(0)
            },
            splitExpression: function(e) {
                var t = e.charAt(0),
                    n = "=" == e.charAt(1) ? !0 : !1,
                    i = 1 + (n ? 1 : 0),
                    s = e.slice(i);
                return {
                    operator: t,
                    orEqual: n,
                    breakpointName: s
                }
            },
            isAnyActive: function(t) {
                var i = !1;
                return e.each(t, function(e, t) {
                    return n.breakpoints[t].is(":visible") ? (i = !0, !1) : void 0
                }), i
            },
            isMatchingExpression: function(e) {
                var i = t.splitExpression(e),
                    s = Object.keys(n.breakpoints),
                    o = s.indexOf(i.breakpointName);
                if (-1 !== o) {
                    var r = 0,
                        a = 0;
                    "<" == i.operator && (r = 0, a = i.orEqual ? ++o : o), ">" == i.operator && (r = i.orEqual ? o : ++o, a = void 0);
                    var l = s.slice(r, a);
                    return t.isAnyActive(l)
                }
            }
        },
        n = {
            interval: 300,
            framework: null,
            breakpoints: null,
            is: function(e) {
                return t.isAnExpression(e) ? t.isMatchingExpression(e) : n.breakpoints[e] && n.breakpoints[e].is(":visible")
            },
            use: function(e, i) {
                n.framework = e.toLowerCase(), n.breakpoints = "bootstrap" === n.framework || "foundation" === n.framework ? t.detectionDivs[n.framework] : i, t.applyDetectionDivs()
            },
            current: function() {
                var t = "unrecognized";
                return e.each(n.breakpoints, function(e) {
                    n.is(e) && (t = e)
                }), t
            },
            changed: function(e, t) {
                var i;
                return function() {
                    clearTimeout(i), i = setTimeout(function() {
                        e()
                    }, t || n.interval)
                }
            }
        };
    return e(document).ready(function() {
        e('<div class="responsive-bootstrap-toolkit"></div>').appendTo("body")
    }), null === n.framework && n.use("bootstrap"), n
}(jQuery);
! function(e) {
    var t = -1,
        n = -1,
        i = function(e) {
            return parseFloat(e) || 0
        },
        s = function(t) {
            var n = 1,
                s = e(t),
                o = null,
                r = [];
            return s.each(function() {
                var t = e(this),
                    s = t.offset().top - i(t.css("margin-top")),
                    a = r.length > 0 ? r[r.length - 1] : null;
                null === a ? r.push(t) : Math.floor(Math.abs(o - s)) <= n ? r[r.length - 1] = a.add(t) : r.push(t), o = s
            }), r
        },
        o = function(t) {
            var n = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof t ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t : "remove" === t && (n.remove = !0), n)
        },
        r = e.fn.matchHeight = function(t) {
            var n = o(t);
            if (n.remove) {
                var i = this;
                return this.css(n.property, ""), e.each(r._groups, function(e, t) {
                    t.elements = t.elements.not(i)
                }), this
            }
            return this.length <= 1 && !n.target ? this : (r._groups.push({
                elements: this,
                options: n
            }), r._apply(this, n), this)
        };
    r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._apply = function(t, n) {
        var a = o(n),
            l = e(t),
            d = [l],
            u = e(window).scrollTop(),
            c = e("html").outerHeight(!0),
            p = l.parents().filter(":hidden");
        return p.each(function() {
            var t = e(this);
            t.data("style-cache", t.attr("style"))
        }), p.css("display", "block"), a.byRow && !a.target && (l.each(function() {
            var t = e(this),
                n = "inline-block" === t.css("display") ? "inline-block" : "block";
            t.data("style-cache", t.attr("style")), t.css({
                display: n,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px"
            })
        }), d = s(l), l.each(function() {
            var t = e(this);
            t.attr("style", t.data("style-cache") || "")
        })), e.each(d, function(t, n) {
            var s = e(n),
                o = 0;
            if (a.target) o = a.target.outerHeight(!1);
            else {
                if (a.byRow && s.length <= 1) return void s.css(a.property, "");
                s.each(function() {
                    var t = e(this),
                        n = "inline-block" === t.css("display") ? "inline-block" : "block",
                        i = {
                            display: n
                        };
                    i[a.property] = "", t.css(i), t.outerHeight(!1) > o && (o = t.outerHeight(!1)), t.css("display", "")
                })
            }
            s.each(function() {
                var t = e(this),
                    n = 0;
                a.target && t.is(a.target) || ("border-box" !== t.css("box-sizing") && (n += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), n += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(a.property, o - n))
            })
        }), p.each(function() {
            var t = e(this);
            t.attr("style", t.data("style-cache") || null)
        }), r._maintainScroll && e(window).scrollTop(u / c * e("html").outerHeight(!0)), this
    }, r._applyDataApi = function() {
        var t = {};
        e("[data-match-height], [data-mh]").each(function() {
            var n = e(this),
                i = n.attr("data-mh") || n.attr("data-match-height");
            i in t ? t[i] = t[i].add(n) : t[i] = n
        }), e.each(t, function() {
            this.matchHeight(!0)
        })
    };
    var a = function(t) {
        r._beforeUpdate && r._beforeUpdate(t, r._groups), e.each(r._groups, function() {
            r._apply(this.elements, this.options)
        }), r._afterUpdate && r._afterUpdate(t, r._groups)
    };
    r._update = function(i, s) {
        if (s && "resize" === s.type) {
            var o = e(window).width();
            if (o === t) return;
            t = o
        }
        i ? -1 === n && (n = setTimeout(function() {
            a(s), n = -1
        }, r._throttle)) : a(s)
    }, e(r._applyDataApi), e(window).bind("load", function(e) {
        r._update(!1, e)
    }), e(window).bind("resize orientationchange", function(e) {
        r._update(!0, e)
    })
}(jQuery), ! function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(this, function(e) {
    ! function(e) {
        "use strict";

        function t(t) {
            var n = [{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            }];
            return e.each(n, function() {
                t = t.replace(this.re, this.ch)
            }), t
        }

        function n(e) {
            var t = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                n = "(?:" + Object.keys(t).join("|") + ")",
                i = new RegExp(n),
                s = new RegExp(n, "g"),
                o = null == e ? "" : "" + e;
            return i.test(o) ? o.replace(s, function(e) {
                return t[e]
            }) : o
        }

        function i(t, n) {
            var i = arguments,
                o = t,
                r = n;
            [].shift.apply(i);
            var a, l = this.each(function() {
                var t = e(this);
                if (t.is("select")) {
                    var n = t.data("selectpicker"),
                        l = "object" == typeof o && o;
                    if (n) {
                        if (l)
                            for (var d in l) l.hasOwnProperty(d) && (n.options[d] = l[d])
                    } else {
                        var u = e.extend({}, s.DEFAULTS, e.fn.selectpicker.defaults || {}, t.data(), l);
                        u.template = e.extend({}, s.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, t.data().template, l.template), t.data("selectpicker", n = new s(this, u, r))
                    }
                    "string" == typeof o && (a = n[o] instanceof Function ? n[o].apply(n, i) : n.options[o])
                }
            });
            return "undefined" != typeof a ? a : l
        }
        String.prototype.includes || ! function() {
            var e = {}.toString,
                t = function() {
                    try {
                        var e = {},
                            t = Object.defineProperty,
                            n = t(e, e, e) && t
                    } catch (i) {}
                    return n
                }(),
                n = "".indexOf,
                i = function(t) {
                    if (null == this) throw new TypeError;
                    var i = String(this);
                    if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
                    var s = i.length,
                        o = String(t),
                        r = o.length,
                        a = arguments.length > 1 ? arguments[1] : void 0,
                        l = a ? Number(a) : 0;
                    l != l && (l = 0);
                    var d = Math.min(Math.max(l, 0), s);
                    return r + d > s ? !1 : -1 != n.call(i, o, l)
                };
            t ? t(String.prototype, "includes", {
                value: i,
                configurable: !0,
                writable: !0
            }) : String.prototype.includes = i
        }(), String.prototype.startsWith || ! function() {
            var e = function() {
                    try {
                        var e = {},
                            t = Object.defineProperty,
                            n = t(e, e, e) && t
                    } catch (i) {}
                    return n
                }(),
                t = {}.toString,
                n = function(e) {
                    if (null == this) throw new TypeError;
                    var n = String(this);
                    if (e && "[object RegExp]" == t.call(e)) throw new TypeError;
                    var i = n.length,
                        s = String(e),
                        o = s.length,
                        r = arguments.length > 1 ? arguments[1] : void 0,
                        a = r ? Number(r) : 0;
                    a != a && (a = 0);
                    var l = Math.min(Math.max(a, 0), i);
                    if (o + l > i) return !1;
                    for (var d = -1; ++d < o;)
                        if (n.charCodeAt(l + d) != s.charCodeAt(d)) return !1;
                    return !0
                };
            e ? e(String.prototype, "startsWith", {
                value: n,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = n
        }(), Object.keys || (Object.keys = function(e, t, n) {
            n = [];
            for (t in e) n.hasOwnProperty.call(e, t) && n.push(t);
            return n
        }), e.fn.triggerNative = function(e) {
            var t, n = this[0];
            n.dispatchEvent ? ("function" == typeof Event ? t = new Event(e, {
                bubbles: !0
            }) : (t = document.createEvent("Event"), t.initEvent(e, !0, !1)), n.dispatchEvent(t)) : (n.fireEvent && (t = document.createEventObject(), t.eventType = e, n.fireEvent("on" + e, t)), this.trigger(e))
        }, e.expr[":"].icontains = function(t, n, i) {
            var s = e(t),
                o = (s.data("tokens") || s.text()).toUpperCase();
            return o.includes(i[3].toUpperCase())
        }, e.expr[":"].ibegins = function(t, n, i) {
            var s = e(t),
                o = (s.data("tokens") || s.text()).toUpperCase();
            return o.startsWith(i[3].toUpperCase())
        }, e.expr[":"].aicontains = function(t, n, i) {
            var s = e(t),
                o = (s.data("tokens") || s.data("normalizedText") || s.text()).toUpperCase();
            return o.includes(i[3].toUpperCase())
        }, e.expr[":"].aibegins = function(t, n, i) {
            var s = e(t),
                o = (s.data("tokens") || s.data("normalizedText") || s.text()).toUpperCase();
            return o.startsWith(i[3].toUpperCase())
        };
        var s = function(t, n, i) {
            i && (i.stopPropagation(), i.preventDefault()), this.$element = e(t), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = n, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = s.prototype.val, this.render = s.prototype.render, this.refresh = s.prototype.refresh, this.setStyle = s.prototype.setStyle, this.selectAll = s.prototype.selectAll, this.deselectAll = s.prototype.deselectAll, this.destroy = s.prototype.destroy, this.remove = s.prototype.remove, this.show = s.prototype.show, this.hide = s.prototype.hide, this.init()
        };
        s.VERSION = "1.9.4", s.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-default",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1
        }, s.prototype = {
            constructor: s,
            init: function() {
                var t = this,
                    n = this.$element.attr("id");
                this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof n && (this.$button.attr("data-id", n), e('label[for="' + n + '"]').click(function(e) {
                    e.preventDefault(), t.$button.focus()
                })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        t.$element.trigger("hide.bs.select", e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        t.$element.trigger("hidden.bs.select", e)
                    },
                    "show.bs.dropdown": function(e) {
                        t.$element.trigger("show.bs.select", e)
                    },
                    "shown.bs.dropdown": function(e) {
                        t.$element.trigger("shown.bs.select", e)
                    }
                }), t.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                    t.$button.addClass("bs-invalid").focus(), t.$element.on({
                        "focus.bs.select": function() {
                            t.$button.focus(), t.$element.off("focus.bs.select")
                        },
                        "shown.bs.select": function() {
                            t.$element.val(t.$element.val()).off("shown.bs.select")
                        },
                        "rendered.bs.select": function() {
                            this.validity.valid && t.$button.removeClass("bs-invalid"), t.$element.off("rendered.bs.select")
                        }
                    })
                }), setTimeout(function() {
                    t.$element.trigger("loaded.bs.select")
                })
            },
            createDropdown: function() {
                var t = this.multiple ? " show-tick" : "",
                    i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    s = this.autofocus ? " autofocus" : "",
                    o = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    r = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + n(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                    a = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                    l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                    d = '<div class="btn-group bootstrap-select' + t + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + s + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + o + r + a + '<ul class="dropdown-menu inner" role="menu"></ul>' + l + "</div></div>";
                return e(d)
            },
            createView: function() {
                var e = this.createDropdown(),
                    t = this.createLi();
                return e.find("ul")[0].innerHTML = t, e
            },
            reloadLi: function() {
                this.destroyLi();
                var e = this.createLi();
                this.$menuInner[0].innerHTML = e
            },
            destroyLi: function() {
                this.$menu.find("li").remove()
            },
            createLi: function() {
                var i = this,
                    s = [],
                    o = 0,
                    r = document.createElement("option"),
                    a = -1,
                    l = function(e, t, n, i) {
                        return "<li" + ("undefined" != typeof n & "" !== n ? ' class="' + n + '"' : "") + ("undefined" != typeof t & null !== t ? ' data-original-index="' + t + '"' : "") + ("undefined" != typeof i & null !== i ? 'data-optgroup="' + i + '"' : "") + ">" + e + "</li>"
                    },
                    d = function(e, s, o, r) {
                        return '<a tabindex="0"' + ("undefined" != typeof s ? ' class="' + s + '"' : "") + ("undefined" != typeof o ? ' style="' + o + '"' : "") + (i.options.liveSearchNormalize ? ' data-normalized-text="' + t(n(e)) + '"' : "") + ("undefined" != typeof r || null !== r ? ' data-tokens="' + r + '"' : "") + ">" + e + '<span class="' + i.options.iconBase + " " + i.options.tickIcon + ' check-mark"></span></a>'
                    };
                if (this.options.title && !this.multiple && (a--, !this.$element.find(".bs-title-option").length)) {
                    var u = this.$element[0];
                    r.className = "bs-title-option", r.appendChild(document.createTextNode(this.options.title)), r.value = "", u.insertBefore(r, u.firstChild), void 0 === e(u.options[u.selectedIndex]).attr("selected") && (r.selected = !0)
                }
                return this.$element.find("option").each(function(t) {
                    var n = e(this);
                    if (a++, !n.hasClass("bs-title-option")) {
                        var r = this.className || "",
                            u = this.style.cssText,
                            c = n.data("content") ? n.data("content") : n.html(),
                            p = n.data("tokens") ? n.data("tokens") : null,
                            h = "undefined" != typeof n.data("subtext") ? '<small class="text-muted">' + n.data("subtext") + "</small>" : "",
                            f = "undefined" != typeof n.data("icon") ? '<span class="' + i.options.iconBase + " " + n.data("icon") + '"></span> ' : "",
                            m = "OPTGROUP" === this.parentNode.tagName,
                            g = this.disabled || m && this.parentNode.disabled;
                        if ("" !== f && g && (f = "<span>" + f + "</span>"), i.options.hideDisabled && g && !m) return void a--;
                        if (n.data("content") || (c = f + '<span class="text">' + c + h + "</span>"), m && n.data("divider") !== !0) {
                            var _ = " " + this.parentNode.className || "";
                            if (0 === n.index()) {
                                o += 1;
                                var y = this.parentNode.label,
                                    v = "undefined" != typeof n.parent().data("subtext") ? '<small class="text-muted">' + n.parent().data("subtext") + "</small>" : "",
                                    b = n.parent().data("icon") ? '<span class="' + i.options.iconBase + " " + n.parent().data("icon") + '"></span> ' : "";
                                y = b + '<span class="text">' + y + v + "</span>", 0 !== t && s.length > 0 && (a++, s.push(l("", null, "divider", o + "div"))), a++, s.push(l(y, null, "dropdown-header" + _, o))
                            }
                            if (i.options.hideDisabled && g) return void a--;
                            s.push(l(d(c, "opt " + r + _, u, p), t, "", o))
                        } else n.data("divider") === !0 ? s.push(l("", t, "divider")) : n.data("hidden") === !0 ? s.push(l(d(c, r, u, p), t, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (a++, s.push(l("", null, "divider", o + "div"))), s.push(l(d(c, r, u, p), t)));
                        i.liObj[t] = a
                    }
                }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), s.join("")
            },
            findLis: function() {
                return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
            },
            render: function(t) {
                var n, i = this;
                t !== !1 && this.$element.find("option").each(function(e) {
                    var t = i.findLis().eq(i.liObj[e]);
                    i.setDisabled(e, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, t), i.setSelected(e, this.selected, t)
                }), this.tabIndex();
                var s = this.$element.find("option").map(function() {
                        if (this.selected) {
                            if (i.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                            var t, n = e(this),
                                s = n.data("icon") && i.options.showIcon ? '<i class="' + i.options.iconBase + " " + n.data("icon") + '"></i> ' : "";
                            return t = i.options.showSubtext && n.data("subtext") && !i.multiple ? ' <small class="text-muted">' + n.data("subtext") + "</small>" : "", "undefined" != typeof n.attr("title") ? n.attr("title") : n.data("content") && i.options.showContent ? n.data("content") : s + n.html() + t
                        }
                    }).toArray(),
                    o = this.multiple ? s.join(this.options.multipleSeparator) : s[0];
                if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var r = this.options.selectedTextFormat.split(">");
                    if (r.length > 1 && s.length > r[1] || 1 == r.length && s.length >= 2) {
                        n = this.options.hideDisabled ? ", [disabled]" : "";
                        var a = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + n).length,
                            l = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(s.length, a) : this.options.countSelectedText;
                        o = l.replace("{0}", s.length.toString()).replace("{1}", a.toString())
                    }
                }
                void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (o = this.options.title), o || (o = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", e.trim(o.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(o), this.$element.trigger("rendered.bs.select")
            },
            setStyle: function(e, t) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var n = e ? e : this.options.style;
                "add" == t ? this.$button.addClass(n) : "remove" == t ? this.$button.removeClass(n) : (this.$button.removeClass(this.options.style), this.$button.addClass(n))
            },
            liHeight: function(t) {
                if (t || this.options.size !== !1 && !this.sizeInfo) {
                    var n = document.createElement("div"),
                        i = document.createElement("div"),
                        s = document.createElement("ul"),
                        o = document.createElement("li"),
                        r = document.createElement("li"),
                        a = document.createElement("a"),
                        l = document.createElement("span"),
                        d = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                        u = this.options.liveSearch ? document.createElement("div") : null,
                        c = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        p = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (l.className = "text", n.className = this.$menu[0].parentNode.className + " open", i.className = "dropdown-menu open", s.className = "dropdown-menu inner", o.className = "divider", l.appendChild(document.createTextNode("Inner text")), a.appendChild(l), r.appendChild(a), s.appendChild(r), s.appendChild(o), d && i.appendChild(d), u) {
                        var h = document.createElement("span");
                        u.className = "bs-searchbox", h.className = "form-control", u.appendChild(h), i.appendChild(u)
                    }
                    c && i.appendChild(c), i.appendChild(s), p && i.appendChild(p), n.appendChild(i), document.body.appendChild(n);
                    var f = a.offsetHeight,
                        m = d ? d.offsetHeight : 0,
                        g = u ? u.offsetHeight : 0,
                        _ = c ? c.offsetHeight : 0,
                        y = p ? p.offsetHeight : 0,
                        v = e(o).outerHeight(!0),
                        b = "function" == typeof getComputedStyle ? getComputedStyle(i) : !1,
                        w = b ? null : e(i),
                        M = parseInt(b ? b.paddingTop : w.css("paddingTop")) + parseInt(b ? b.paddingBottom : w.css("paddingBottom")) + parseInt(b ? b.borderTopWidth : w.css("borderTopWidth")) + parseInt(b ? b.borderBottomWidth : w.css("borderBottomWidth")),
                        k = M + parseInt(b ? b.marginTop : w.css("marginTop")) + parseInt(b ? b.marginBottom : w.css("marginBottom")) + 2;
                    document.body.removeChild(n), this.sizeInfo = {
                        liHeight: f,
                        headerHeight: m,
                        searchHeight: g,
                        actionsHeight: _,
                        doneButtonHeight: y,
                        dividerHeight: v,
                        menuPadding: M,
                        menuExtras: k
                    }
                }
            },
            setSize: function() {
                if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
                    var t, n, i, s, o = this,
                        r = this.$menu,
                        a = this.$menuInner,
                        l = e(window),
                        d = this.$newElement[0].offsetHeight,
                        u = this.sizeInfo.liHeight,
                        c = this.sizeInfo.headerHeight,
                        p = this.sizeInfo.searchHeight,
                        h = this.sizeInfo.actionsHeight,
                        f = this.sizeInfo.doneButtonHeight,
                        m = this.sizeInfo.dividerHeight,
                        g = this.sizeInfo.menuPadding,
                        _ = this.sizeInfo.menuExtras,
                        y = this.options.hideDisabled ? ".disabled" : "",
                        v = function() {
                            i = o.$newElement.offset().top - l.scrollTop(), s = l.height() - i - d
                        };
                    if (v(), "auto" === this.options.size) {
                        var b = function() {
                            var l, d = function(t, n) {
                                    return function(i) {
                                        return n ? i.classList ? i.classList.contains(t) : e(i).hasClass(t) : !(i.classList ? i.classList.contains(t) : e(i).hasClass(t))
                                    }
                                },
                                m = o.$menuInner[0].getElementsByTagName("li"),
                                y = Array.prototype.filter ? Array.prototype.filter.call(m, d("hidden", !1)) : o.$lis.not(".hidden"),
                                b = Array.prototype.filter ? Array.prototype.filter.call(y, d("dropdown-header", !0)) : y.filter(".dropdown-header");
                            v(), t = s - _, o.options.container ? (r.data("height") || r.data("height", r.height()), n = r.data("height")) : n = r.height(), o.options.dropupAuto && o.$newElement.toggleClass("dropup", i > s && n > t - _), o.$newElement.hasClass("dropup") && (t = i - _), l = y.length + b.length > 3 ? 3 * u + _ - 2 : 0, r.css({
                                "max-height": t + "px",
                                overflow: "hidden",
                                "min-height": l + c + p + h + f + "px"
                            }), a.css({
                                "max-height": t - c - p - h - f - g + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(l - g, 0) + "px"
                            })
                        };
                        b(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", b), l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", b)
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(y).length > this.options.size) {
                        var w = this.$lis.not(".divider").not(y).children().slice(0, this.options.size).last().parent().index(),
                            M = this.$lis.slice(0, w + 1).filter(".divider").length;
                        t = u * this.options.size + M * m + g, o.options.container ? (r.data("height") || r.data("height", r.height()), n = r.data("height")) : n = r.height(), o.options.dropupAuto && this.$newElement.toggleClass("dropup", i > s && n > t - _), r.css({
                            "max-height": t + c + p + h + f + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }), a.css({
                            "max-height": t - g + "px",
                            "overflow-y": "auto",
                            "min-height": ""
                        })
                    }
                }
            },
            setWidth: function() {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var e = this.$menu.parent().clone().appendTo("body"),
                        t = this.options.container ? this.$newElement.clone().appendTo("body") : e,
                        n = e.children(".dropdown-menu").outerWidth(),
                        i = t.css("width", "auto").children("button").outerWidth();
                    e.remove(), t.remove(), this.$newElement.css("width", Math.max(n, i) + "px")
                } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = e('<div class="bs-container" />');
                var t, n, i = this,
                    s = function(e) {
                        i.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", e.hasClass("dropup")), t = e.offset(), n = e.hasClass("dropup") ? 0 : e[0].offsetHeight, i.$bsContainer.css({
                            top: t.top + n,
                            left: t.left,
                            width: e[0].offsetWidth
                        })
                    };
                this.$button.on("click", function() {
                    var t = e(this);
                    i.isDisabled() || (s(i.$newElement), i.$bsContainer.appendTo(i.options.container).toggleClass("open", !t.hasClass("open")).append(i.$menu))
                }), e(window).on("resize scroll", function() {
                    s(i.$newElement)
                }), this.$element.on("hide.bs.select", function() {
                    i.$menu.data("height", i.$menu.height()), i.$bsContainer.detach()
                })
            },
            setSelected: function(e, t, n) {
                n || (n = this.findLis().eq(this.liObj[e])), n.toggleClass("selected", t)
            },
            setDisabled: function(e, t, n) {
                n || (n = this.findLis().eq(this.liObj[e])), t ? n.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : n.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")),
                    this.$button.click(function() {
                        return !e.isDisabled()
                    })
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var t = this,
                    n = e(document);
                this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(e) {
                    e.stopPropagation()
                }), n.data("spaceSelect", !1), this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && n.data("spaceSelect") && (e.preventDefault(), n.data("spaceSelect", !1))
                }), this.$button.on("click", function() {
                    t.setSize(), t.$element.on("shown.bs.select", function() {
                        if (t.options.liveSearch || t.multiple) {
                            if (!t.multiple) {
                                var e = t.liObj[t.$element[0].selectedIndex];
                                if ("number" != typeof e || t.options.size === !1) return;
                                var n = t.$lis.eq(e)[0].offsetTop - t.$menuInner[0].offsetTop;
                                n = n - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2, t.$menuInner[0].scrollTop = n
                            }
                        } else t.$menuInner.find(".selected a").focus()
                    })
                }), this.$menuInner.on("click", "li a", function(n) {
                    var i = e(this),
                        s = i.parent().data("originalIndex"),
                        o = t.$element.val(),
                        r = t.$element.prop("selectedIndex");
                    if (t.multiple && n.stopPropagation(), n.preventDefault(), !t.isDisabled() && !i.parent().hasClass("disabled")) {
                        var a = t.$element.find("option"),
                            l = a.eq(s),
                            d = l.prop("selected"),
                            u = l.parent("optgroup"),
                            c = t.options.maxOptions,
                            p = u.data("maxOptions") || !1;
                        if (t.multiple) {
                            if (l.prop("selected", !d), t.setSelected(s, !d), i.blur(), c !== !1 || p !== !1) {
                                var h = c < a.filter(":selected").length,
                                    f = p < u.find("option:selected").length;
                                if (c && h || p && f)
                                    if (c && 1 == c) a.prop("selected", !1), l.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(s, !0);
                                    else if (p && 1 == p) {
                                    u.find("option:selected").prop("selected", !1), l.prop("selected", !0);
                                    var m = i.parent().data("optgroup");
                                    t.$menuInner.find('[data-optgroup="' + m + '"]').removeClass("selected"), t.setSelected(s, !0)
                                } else {
                                    var g = "function" == typeof t.options.maxOptionsText ? t.options.maxOptionsText(c, p) : t.options.maxOptionsText,
                                        _ = g[0].replace("{n}", c),
                                        y = g[1].replace("{n}", p),
                                        v = e('<div class="notify"></div>');
                                    g[2] && (_ = _.replace("{var}", g[2][c > 1 ? 0 : 1]), y = y.replace("{var}", g[2][p > 1 ? 0 : 1])), l.prop("selected", !1), t.$menu.append(v), c && h && (v.append(e("<div>" + _ + "</div>")), t.$element.trigger("maxReached.bs.select")), p && f && (v.append(e("<div>" + y + "</div>")), t.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                        t.setSelected(s, !1)
                                    }, 10), v.delay(750).fadeOut(300, function() {
                                        e(this).remove()
                                    })
                                }
                            }
                        } else a.prop("selected", !1), l.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(s, !0);
                        t.multiple ? t.options.liveSearch && t.$searchbox.focus() : t.$button.focus(), (o != t.$element.val() && t.multiple || r != t.$element.prop("selectedIndex") && !t.multiple) && (t.$element.triggerNative("change"), t.$element.trigger("changed.bs.select", [s, l.prop("selected"), d]))
                    }
                }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(n) {
                    n.currentTarget == this && (n.preventDefault(), n.stopPropagation(), t.options.liveSearch && !e(n.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus())
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus()
                }), this.$menu.on("click", ".popover-title .close", function() {
                    t.$button.click()
                }), this.$searchbox.on("click", function(e) {
                    e.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function(n) {
                    t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(), n.preventDefault(), n.stopPropagation(), e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll(), t.$element.triggerNative("change")
                }), this.$element.change(function() {
                    t.render(!1)
                })
            },
            liveSearchListener: function() {
                var i = this,
                    s = e('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                    i.$menuInner.find(".active").removeClass("active"), i.$searchbox.val() && (i.$searchbox.val(""), i.$lis.not(".is-hidden").removeClass("hidden"), s.parent().length && s.remove()), i.multiple || i.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
                        i.$searchbox.focus()
                    }, 10)
                }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(e) {
                    e.stopPropagation()
                }), this.$searchbox.on("input propertychange", function() {
                    if (i.$searchbox.val()) {
                        var o = i.$lis.not(".is-hidden").removeClass("hidden").children("a");
                        o = i.options.liveSearchNormalize ? o.not(":a" + i._searchStyle() + '("' + t(i.$searchbox.val()) + '")') : o.not(":" + i._searchStyle() + '("' + i.$searchbox.val() + '")'), o.parent().addClass("hidden"), i.$lis.filter(".dropdown-header").each(function() {
                            var t = e(this),
                                n = t.data("optgroup");
                            0 === i.$lis.filter("[data-optgroup=" + n + "]").not(t).not(".hidden").length && (t.addClass("hidden"), i.$lis.filter("[data-optgroup=" + n + "div]").addClass("hidden"))
                        });
                        var r = i.$lis.not(".hidden");
                        r.each(function(t) {
                            var n = e(this);
                            n.hasClass("divider") && (n.index() === r.first().index() || n.index() === r.last().index() || r.eq(t + 1).hasClass("divider")) && n.addClass("hidden")
                        }), i.$lis.not(".hidden, .no-results").length ? s.parent().length && s.remove() : (s.parent().length && s.remove(), s.html(i.options.noneResultsText.replace("{0}", '"' + n(i.$searchbox.val()) + '"')).show(), i.$menuInner.append(s))
                    } else i.$lis.not(".is-hidden").removeClass("hidden"), s.parent().length && s.remove();
                    i.$lis.filter(".active").removeClass("active"), i.$searchbox.val() && i.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), e(this).focus()
                })
            },
            _searchStyle: function() {
                var e = {
                    begins: "ibegins",
                    startsWith: "ibegins"
                };
                return e[this.options.liveSearchStyle] || "icontains"
            },
            val: function(e) {
                return "undefined" != typeof e ? (this.$element.val(e), this.render(), this.$element) : this.$element.val()
            },
            changeAll: function(t) {
                "undefined" == typeof t && (t = !0), this.findLis();
                for (var n = this.$element.find("option"), i = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", t), s = i.length, o = [], r = 0; s > r; r++) {
                    var a = i[r].getAttribute("data-original-index");
                    o[o.length] = n.eq(a)[0]
                }
                e(o).prop("selected", t), this.render(!1)
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            keydown: function(n) {
                var i, s, o, r, a, l, d, u, c, p = e(this),
                    h = p.is("input") ? p.parent().parent() : p.parent(),
                    f = h.data("this"),
                    m = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                    g = {
                        32: " ",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        59: ";",
                        65: "a",
                        66: "b",
                        67: "c",
                        68: "d",
                        69: "e",
                        70: "f",
                        71: "g",
                        72: "h",
                        73: "i",
                        74: "j",
                        75: "k",
                        76: "l",
                        77: "m",
                        78: "n",
                        79: "o",
                        80: "p",
                        81: "q",
                        82: "r",
                        83: "s",
                        84: "t",
                        85: "u",
                        86: "v",
                        87: "w",
                        88: "x",
                        89: "y",
                        90: "z",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9"
                    };
                if (f.options.liveSearch && (h = p.parent().parent()), f.options.container && (h = f.$menu), i = e("[role=menu] li", h), c = f.$newElement.hasClass("open"), !c && (n.keyCode >= 48 && n.keyCode <= 57 || n.keyCode >= 96 && n.keyCode <= 105 || n.keyCode >= 65 && n.keyCode <= 90) && (f.options.container ? f.$button.trigger("click") : (f.setSize(), f.$menu.parent().addClass("open"), c = !0), f.$searchbox.focus()), f.options.liveSearch && (/(^9$|27)/.test(n.keyCode.toString(10)) && c && 0 === f.$menu.find(".active").length && (n.preventDefault(), f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus()), i = e("[role=menu] li" + m, h), p.val() || /(38|40)/.test(n.keyCode.toString(10)) || 0 === i.filter(".active").length && (i = f.$menuInner.find("li"), i = f.options.liveSearchNormalize ? i.filter(":a" + f._searchStyle() + "(" + t(g[n.keyCode]) + ")") : i.filter(":" + f._searchStyle() + "(" + g[n.keyCode] + ")"))), i.length) {
                    if (/(38|40)/.test(n.keyCode.toString(10))) s = i.index(i.find("a").filter(":focus").parent()), r = i.filter(m).first().index(), a = i.filter(m).last().index(), o = i.eq(s).nextAll(m).eq(0).index(), l = i.eq(s).prevAll(m).eq(0).index(), d = i.eq(o).prevAll(m).eq(0).index(), f.options.liveSearch && (i.each(function(t) {
                        e(this).hasClass("disabled") || e(this).data("index", t)
                    }), s = i.index(i.filter(".active")), r = i.first().data("index"), a = i.last().data("index"), o = i.eq(s).nextAll().eq(0).data("index"), l = i.eq(s).prevAll().eq(0).data("index"), d = i.eq(o).prevAll().eq(0).data("index")), u = p.data("prevIndex"), 38 == n.keyCode ? (f.options.liveSearch && s--, s != d && s > l && (s = l), r > s && (s = r), s == u && (s = a)) : 40 == n.keyCode && (f.options.liveSearch && s++, -1 == s && (s = 0), s != d && o > s && (s = o), s > a && (s = a), s == u && (s = r)), p.data("prevIndex", s), f.options.liveSearch ? (n.preventDefault(), p.hasClass("dropdown-toggle") || (i.removeClass("active").eq(s).addClass("active").children("a").focus(), p.focus())) : i.eq(s).children("a").focus();
                    else if (!p.is("input")) {
                        var _, y, v = [];
                        i.each(function() {
                            e(this).hasClass("disabled") || e.trim(e(this).children("a").text().toLowerCase()).substring(0, 1) == g[n.keyCode] && v.push(e(this).index())
                        }), _ = e(document).data("keycount"), _++, e(document).data("keycount", _), y = e.trim(e(":focus").text().toLowerCase()).substring(0, 1), y != g[n.keyCode] ? (_ = 1, e(document).data("keycount", _)) : _ >= v.length && (e(document).data("keycount", 0), _ > v.length && (_ = 1)), i.eq(v[_ - 1]).children("a").focus()
                    }
                    if ((/(13|32)/.test(n.keyCode.toString(10)) || /(^9$)/.test(n.keyCode.toString(10)) && f.options.selectOnTab) && c) {
                        if (/(32)/.test(n.keyCode.toString(10)) || n.preventDefault(), f.options.liveSearch) /(32)/.test(n.keyCode.toString(10)) || (f.$menuInner.find(".active a").click(), p.focus());
                        else {
                            var b = e(":focus");
                            b.click(), b.focus(), n.preventDefault(), e(document).data("spaceSelect", !0)
                        }
                        e(document).data("keycount", 0)
                    }(/(^9$|27)/.test(n.keyCode.toString(10)) && c && (f.multiple || f.options.liveSearch) || /(27)/.test(n.keyCode.toString(10)) && !c) && (f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus())
                }
            },
            mobile: function() {
                this.$element.addClass("mobile-device")
            },
            refresh: function() {
                this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(), this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var o = e.fn.selectpicker;
        e.fn.selectpicker = i, e.fn.selectpicker.Constructor = s, e.fn.selectpicker.noConflict = function() {
            return e.fn.selectpicker = o, this
        }, e(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', s.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(e) {
            e.stopPropagation()
        }), e(window).on("load.bs.select.data-api", function() {
            e(".selectpicker").each(function() {
                var t = e(this);
                i.call(t, t.data())
            })
        })
    }(e)
}), ! function(e) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jquery", "moment"], e);
    else if ("object" == typeof exports) e(require("jquery"), require("moment"));
    else {
        if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
        if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
        e(jQuery, moment)
    }
}(function(e, t) {
    "use strict";
    if (!t) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
    var n = function(n, i) {
        var s, o, r, a, l, d, u, c = {},
            p = !0,
            h = !1,
            f = !1,
            m = 0,
            g = [{
                clsName: "days",
                navFnc: "M",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "y",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "y",
                navStep: 10
            }, {
                clsName: "decades",
                navFnc: "y",
                navStep: 100
            }],
            _ = ["days", "months", "years", "decades"],
            y = ["top", "bottom", "auto"],
            v = ["left", "right", "auto"],
            b = ["default", "top", "bottom"],
            w = {
                up: 38,
                38: "up",
                down: 40,
                40: "down",
                left: 37,
                37: "left",
                right: 39,
                39: "right",
                tab: 9,
                9: "tab",
                escape: 27,
                27: "escape",
                enter: 13,
                13: "enter",
                pageUp: 33,
                33: "pageUp",
                pageDown: 34,
                34: "pageDown",
                shift: 16,
                16: "shift",
                control: 17,
                17: "control",
                space: 32,
                32: "space",
                t: 84,
                84: "t",
                "delete": 46,
                46: "delete"
            },
            M = {},
            k = function(e) {
                var n, s, o, r, a, l = !1;
                return void 0 !== t.tz && void 0 !== i.timeZone && null !== i.timeZone && "" !== i.timeZone && (l = !0), void 0 === e || null === e ? n = l ? t().tz(i.timeZone).startOf("d") : t().startOf("d") : l ? (s = t().tz(i.timeZone).utcOffset(), o = t(e, d, i.useStrict).utcOffset(), o !== s ? (r = t().tz(i.timeZone).format("Z"), a = t(e, d, i.useStrict).format("YYYY-MM-DD[T]HH:mm:ss") + r, n = t(a, d, i.useStrict).tz(i.timeZone)) : n = t(e, d, i.useStrict).tz(i.timeZone)) : n = t(e, d, i.useStrict), n
            },
            L = function(e) {
                if ("string" != typeof e || e.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                switch (e) {
                    case "y":
                        return -1 !== l.indexOf("Y");
                    case "M":
                        return -1 !== l.indexOf("M");
                    case "d":
                        return -1 !== l.toLowerCase().indexOf("d");
                    case "h":
                    case "H":
                        return -1 !== l.toLowerCase().indexOf("h");
                    case "m":
                        return -1 !== l.indexOf("m");
                    case "s":
                        return -1 !== l.indexOf("s");
                    default:
                        return !1
                }
            },
            T = function() {
                return L("h") || L("m") || L("s")
            },
            x = function() {
                return L("y") || L("M") || L("d")
            },
            D = function() {
                var t = e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action", "previous").append(e("<span>").addClass(i.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", i.calendarWeeks ? "6" : "5")).append(e("<th>").addClass("next").attr("data-action", "next").append(e("<span>").addClass(i.icons.next)))),
                    n = e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan", i.calendarWeeks ? "8" : "7")));
                return [e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table-condensed").append(t).append(e("<tbody>"))), e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())), e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())), e("<div>").addClass("datepicker-decades").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone()))]
            },
            S = function() {
                var t = e("<tr>"),
                    n = e("<tr>"),
                    s = e("<tr>");
                return L("h") && (t.append(e("<td>").append(e("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: i.tooltips.incrementHour
                }).addClass("btn").attr("data-action", "incrementHours").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr({
                    "data-time-component": "hours",
                    title: i.tooltips.pickHour
                }).attr("data-action", "showHours"))), s.append(e("<td>").append(e("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: i.tooltips.decrementHour
                }).addClass("btn").attr("data-action", "decrementHours").append(e("<span>").addClass(i.icons.down))))), L("m") && (L("h") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), s.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: i.tooltips.incrementMinute
                }).addClass("btn").attr("data-action", "incrementMinutes").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr({
                    "data-time-component": "minutes",
                    title: i.tooltips.pickMinute
                }).attr("data-action", "showMinutes"))), s.append(e("<td>").append(e("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: i.tooltips.decrementMinute
                }).addClass("btn").attr("data-action", "decrementMinutes").append(e("<span>").addClass(i.icons.down))))), L("s") && (L("m") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), s.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: i.tooltips.incrementSecond
                }).addClass("btn").attr("data-action", "incrementSeconds").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr({
                    "data-time-component": "seconds",
                    title: i.tooltips.pickSecond
                }).attr("data-action", "showSeconds"))), s.append(e("<td>").append(e("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: i.tooltips.decrementSecond
                }).addClass("btn").attr("data-action", "decrementSeconds").append(e("<span>").addClass(i.icons.down))))), a || (t.append(e("<td>").addClass("separator")), n.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr({
                    "data-action": "togglePeriod",
                    tabindex: "-1",
                    title: i.tooltips.togglePeriod
                }))), s.append(e("<td>").addClass("separator"))), e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([t, n, s]))
            },
            Y = function() {
                var t = e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")),
                    n = e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")),
                    i = e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")),
                    s = [S()];
                return L("h") && s.push(t), L("m") && s.push(n), L("s") && s.push(i), s
            },
            C = function() {
                var t = [];
                return i.showTodayButton && t.push(e("<td>").append(e("<a>").attr({
                    "data-action": "today",
                    title: i.tooltips.today
                }).append(e("<span>").addClass(i.icons.today)))), !i.sideBySide && x() && T() && t.push(e("<td>").append(e("<a>").attr({
                    "data-action": "togglePicker",
                    title: i.tooltips.selectTime
                }).append(e("<span>").addClass(i.icons.time)))), i.showClear && t.push(e("<td>").append(e("<a>").attr({
                    "data-action": "clear",
                    title: i.tooltips.clear
                }).append(e("<span>").addClass(i.icons.clear)))), i.showClose && t.push(e("<td>").append(e("<a>").attr({
                    "data-action": "close",
                    title: i.tooltips.close
                }).append(e("<span>").addClass(i.icons.close)))), e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(t)))
            },
            E = function() {
                var t = e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                    n = e("<div>").addClass("datepicker").append(D()),
                    s = e("<div>").addClass("timepicker").append(Y()),
                    o = e("<ul>").addClass("list-unstyled"),
                    r = e("<li>").addClass("picker-switch" + (i.collapse ? " accordion-toggle" : "")).append(C());
                return i.inline && t.removeClass("dropdown-menu"), a && t.addClass("usetwentyfour"), L("s") && !a && t.addClass("wider"), i.sideBySide && x() && T() ? (t.addClass("timepicker-sbs"), "top" === i.toolbarPlacement && t.append(r), t.append(e("<div>").addClass("row").append(n.addClass("col-md-6")).append(s.addClass("col-md-6"))), "bottom" === i.toolbarPlacement && t.append(r), t) : ("top" === i.toolbarPlacement && o.append(r), x() && o.append(e("<li>").addClass(i.collapse && T() ? "collapse in" : "").append(n)), "default" === i.toolbarPlacement && o.append(r), T() && o.append(e("<li>").addClass(i.collapse && x() ? "collapse" : "").append(s)), "bottom" === i.toolbarPlacement && o.append(r), t.append(o))
            },
            A = function() {
                var t, s = {};
                return t = n.is("input") || i.inline ? n.data() : n.find("input").data(), t.dateOptions && t.dateOptions instanceof Object && (s = e.extend(!0, s, t.dateOptions)), e.each(i, function(e) {
                    var n = "date" + e.charAt(0).toUpperCase() + e.slice(1);
                    void 0 !== t[n] && (s[e] = t[n])
                }), s
            },
            j = function() {
                var t, s = (h || n).position(),
                    o = (h || n).offset(),
                    r = i.widgetPositioning.vertical,
                    a = i.widgetPositioning.horizontal;
                if (i.widgetParent) t = i.widgetParent.append(f);
                else if (n.is("input")) t = n.after(f).parent();
                else {
                    if (i.inline) return void(t = n.append(f));
                    t = n, n.children().first().after(f)
                }
                if ("auto" === r && (r = o.top + 1.5 * f.height() >= e(window).height() + e(window).scrollTop() && f.height() + n.outerHeight() < o.top ? "top" : "bottom"), "auto" === a && (a = t.width() < o.left + f.outerWidth() / 2 && o.left + f.outerWidth() > e(window).width() ? "right" : "left"), "top" === r ? f.addClass("top").removeClass("bottom") : f.addClass("bottom").removeClass("top"), "right" === a ? f.addClass("pull-right") : f.removeClass("pull-right"), "relative" !== t.css("position") && (t = t.parents().filter(function() {
                        return "relative" === e(this).css("position")
                    }).first()), 0 === t.length) throw new Error("datetimepicker component should be placed within a relative positioned container");
                f.css({
                    top: "top" === r ? "auto" : s.top + n.outerHeight(),
                    bottom: "top" === r ? s.top + n.outerHeight() : "auto",
                    left: "left" === a ? t === n ? 0 : s.left : "auto",
                    right: "left" === a ? "auto" : t.outerWidth() - n.outerWidth() - (t === n ? 0 : s.left)
                })
            },
            H = function(e) {
                "dp.change" === e.type && (e.date && e.date.isSame(e.oldDate) || !e.date && !e.oldDate) || n.trigger(e)
            },
            O = function(e) {
                "y" === e && (e = "YYYY"), H({
                    type: "dp.update",
                    change: e,
                    viewDate: o.clone()
                })
            },
            I = function(e) {
                f && (e && (u = Math.max(m, Math.min(3, u + e))), f.find(".datepicker > div").hide().filter(".datepicker-" + g[u].clsName).show())
            },
            P = function() {
                var t = e("<tr>"),
                    n = o.clone().startOf("w").startOf("d");
                for (i.calendarWeeks === !0 && t.append(e("<th>").addClass("cw").text("#")); n.isBefore(o.clone().endOf("w"));) t.append(e("<th>").addClass("dow").text(n.format("dd"))), n.add(1, "d");
                f.find(".datepicker-days thead").append(t)
            },
            $ = function(e) {
                return i.disabledDates[e.format("YYYY-MM-DD")] === !0
            },
            N = function(e) {
                return i.enabledDates[e.format("YYYY-MM-DD")] === !0
            },
            F = function(e) {
                return i.disabledHours[e.format("H")] === !0
            },
            W = function(e) {
                return i.enabledHours[e.format("H")] === !0
            },
            z = function(t, n) {
                if (!t.isValid()) return !1;
                if (i.disabledDates && "d" === n && $(t)) return !1;
                if (i.enabledDates && "d" === n && !N(t)) return !1;
                if (i.minDate && t.isBefore(i.minDate, n)) return !1;
                if (i.maxDate && t.isAfter(i.maxDate, n)) return !1;
                if (i.daysOfWeekDisabled && "d" === n && -1 !== i.daysOfWeekDisabled.indexOf(t.day())) return !1;
                if (i.disabledHours && ("h" === n || "m" === n || "s" === n) && F(t)) return !1;
                if (i.enabledHours && ("h" === n || "m" === n || "s" === n) && !W(t)) return !1;
                if (i.disabledTimeIntervals && ("h" === n || "m" === n || "s" === n)) {
                    var s = !1;
                    if (e.each(i.disabledTimeIntervals, function() {
                            return t.isBetween(this[0], this[1]) ? (s = !0, !1) : void 0
                        }), s) return !1
                }
                return !0
            },
            R = function() {
                for (var t = [], n = o.clone().startOf("y").startOf("d"); n.isSame(o, "y");) t.push(e("<span>").attr("data-action", "selectMonth").addClass("month").text(n.format("MMM"))), n.add(1, "M");
                f.find(".datepicker-months td").empty().append(t)
            },
            q = function() {
                var t = f.find(".datepicker-months"),
                    n = t.find("th"),
                    r = t.find("tbody").find("span");
                n.eq(0).find("span").attr("title", i.tooltips.prevYear), n.eq(1).attr("title", i.tooltips.selectYear), n.eq(2).find("span").attr("title", i.tooltips.nextYear), t.find(".disabled").removeClass("disabled"), z(o.clone().subtract(1, "y"), "y") || n.eq(0).addClass("disabled"), n.eq(1).text(o.year()), z(o.clone().add(1, "y"), "y") || n.eq(2).addClass("disabled"), r.removeClass("active"), s.isSame(o, "y") && !p && r.eq(s.month()).addClass("active"), r.each(function(t) {
                    z(o.clone().month(t), "M") || e(this).addClass("disabled")
                })
            },
            B = function() {
                var e = f.find(".datepicker-years"),
                    t = e.find("th"),
                    n = o.clone().subtract(5, "y"),
                    r = o.clone().add(6, "y"),
                    a = "";
                for (t.eq(0).find("span").attr("title", i.tooltips.prevDecade), t.eq(1).attr("title", i.tooltips.selectDecade), t.eq(2).find("span").attr("title", i.tooltips.nextDecade), e.find(".disabled").removeClass("disabled"), i.minDate && i.minDate.isAfter(n, "y") && t.eq(0).addClass("disabled"), t.eq(1).text(n.year() + "-" + r.year()), i.maxDate && i.maxDate.isBefore(r, "y") && t.eq(2).addClass("disabled"); !n.isAfter(r, "y");) a += '<span data-action="selectYear" class="year' + (n.isSame(s, "y") && !p ? " active" : "") + (z(n, "y") ? "" : " disabled") + '">' + n.year() + "</span>", n.add(1, "y");
                e.find("td").html(a)
            },
            U = function() {
                var e = f.find(".datepicker-decades"),
                    n = e.find("th"),
                    r = t({
                        y: o.year() - o.year() % 100 - 1
                    }),
                    a = r.clone().add(100, "y"),
                    l = r.clone(),
                    d = "";
                for (n.eq(0).find("span").attr("title", i.tooltips.prevCentury), n.eq(2).find("span").attr("title", i.tooltips.nextCentury), e.find(".disabled").removeClass("disabled"), (r.isSame(t({
                        y: 1900
                    })) || i.minDate && i.minDate.isAfter(r, "y")) && n.eq(0).addClass("disabled"), n.eq(1).text(r.year() + "-" + a.year()), (r.isSame(t({
                        y: 2e3
                    })) || i.maxDate && i.maxDate.isBefore(a, "y")) && n.eq(2).addClass("disabled"); !r.isAfter(a, "y");) d += '<span data-action="selectDecade" class="decade' + (r.isSame(s, "y") ? " active" : "") + (z(r, "y") ? "" : " disabled") + '" data-selection="' + (r.year() + 6) + '">' + (r.year() + 1) + " - " + (r.year() + 12) + "</span>", r.add(12, "y");
                d += "<span></span><span></span><span></span>", e.find("td").html(d), n.eq(1).text(l.year() + 1 + "-" + r.year())
            },
            V = function() {
                var t, n, r, a, l = f.find(".datepicker-days"),
                    d = l.find("th"),
                    u = [];
                if (x()) {
                    for (d.eq(0).find("span").attr("title", i.tooltips.prevMonth), d.eq(1).attr("title", i.tooltips.selectMonth), d.eq(2).find("span").attr("title", i.tooltips.nextMonth), l.find(".disabled").removeClass("disabled"), d.eq(1).text(o.format(i.dayViewHeaderFormat)), z(o.clone().subtract(1, "M"), "M") || d.eq(0).addClass("disabled"), z(o.clone().add(1, "M"), "M") || d.eq(2).addClass("disabled"), t = o.clone().startOf("M").startOf("w").startOf("d"), a = 0; 42 > a; a++) 0 === t.weekday() && (n = e("<tr>"), i.calendarWeeks && n.append('<td class="cw">' + t.week() + "</td>"), u.push(n)), r = "", t.isBefore(o, "M") && (r += " old"), t.isAfter(o, "M") && (r += " new"), t.isSame(s, "d") && !p && (r += " active"), z(t, "d") || (r += " disabled"), t.isSame(k(), "d") && (r += " today"), (0 === t.day() || 6 === t.day()) && (r += " weekend"), n.append('<td data-action="selectDay" data-day="' + t.format("L") + '" class="day' + r + '">' + t.date() + "</td>"), t.add(1, "d");
                    l.find("tbody").empty().append(u), q(), B(), U()
                }
            },
            G = function() {
                var t = f.find(".timepicker-hours table"),
                    n = o.clone().startOf("d"),
                    i = [],
                    s = e("<tr>");
                for (o.hour() > 11 && !a && n.hour(12); n.isSame(o, "d") && (a || o.hour() < 12 && n.hour() < 12 || o.hour() > 11);) n.hour() % 4 === 0 && (s = e("<tr>"), i.push(s)), s.append('<td data-action="selectHour" class="hour' + (z(n, "h") ? "" : " disabled") + '">' + n.format(a ? "HH" : "hh") + "</td>"), n.add(1, "h");
                t.empty().append(i)
            },
            X = function() {
                for (var t = f.find(".timepicker-minutes table"), n = o.clone().startOf("h"), s = [], r = e("<tr>"), a = 1 === i.stepping ? 5 : i.stepping; o.isSame(n, "h");) n.minute() % (4 * a) === 0 && (r = e("<tr>"), s.push(r)), r.append('<td data-action="selectMinute" class="minute' + (z(n, "m") ? "" : " disabled") + '">' + n.format("mm") + "</td>"), n.add(a, "m");
                t.empty().append(s)
            },
            J = function() {
                for (var t = f.find(".timepicker-seconds table"), n = o.clone().startOf("m"), i = [], s = e("<tr>"); o.isSame(n, "m");) n.second() % 20 === 0 && (s = e("<tr>"), i.push(s)), s.append('<td data-action="selectSecond" class="second' + (z(n, "s") ? "" : " disabled") + '">' + n.format("ss") + "</td>"), n.add(5, "s");
                t.empty().append(i)
            },
            Q = function() {
                var e, t, n = f.find(".timepicker span[data-time-component]");
                a || (e = f.find(".timepicker [data-action=togglePeriod]"), t = s.clone().add(s.hours() >= 12 ? -12 : 12, "h"), e.text(s.format("A")), z(t, "h") ? e.removeClass("disabled") : e.addClass("disabled")), n.filter("[data-time-component=hours]").text(s.format(a ? "HH" : "hh")), n.filter("[data-time-component=minutes]").text(s.format("mm")), n.filter("[data-time-component=seconds]").text(s.format("ss")), G(), X(), J()
            },
            K = function() {
                f && (V(), Q())
            },
            Z = function(e) {
                var t = p ? null : s;
                return e ? (e = e.clone().locale(i.locale), 1 !== i.stepping && e.minutes(Math.round(e.minutes() / i.stepping) * i.stepping % 60).seconds(0), void(z(e) ? (s = e, o = s.clone(), r.val(s.format(l)), n.data("date", s.format(l)), p = !1, K(), H({
                    type: "dp.change",
                    date: s.clone(),
                    oldDate: t
                })) : (i.keepInvalid || r.val(p ? "" : s.format(l)), H({
                    type: "dp.error",
                    date: e
                })))) : (p = !0, r.val(""), n.data("date", ""), H({
                    type: "dp.change",
                    date: !1,
                    oldDate: t
                }), void K())
            },
            ee = function() {
                var t = !1;
                return f ? (f.find(".collapse").each(function() {
                    var n = e(this).data("collapse");
                    return n && n.transitioning ? (t = !0, !1) : !0
                }), t ? c : (h && h.hasClass("btn") && h.toggleClass("active"), f.hide(), e(window).off("resize", j), f.off("click", "[data-action]"), f.off("mousedown", !1), f.remove(), f = !1, H({
                    type: "dp.hide",
                    date: s.clone()
                }), r.blur(), c)) : c
            },
            te = function() {
                Z(null)
            }    
        
    }
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}


(function(e) {
    var t = function() {
            if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
            var t;
            return function() {
                if (!t || !t.requirejs) {
                    t ? n = t : t = {};
                    var e, n, i;
                    ! function(t) {
                        function s(e, t) {
                            return b.call(e, t)
                        }

                        function o(e, t) {
                            var n, i, s, o, r, a, l, d, u, c, p, h = t && t.split("/"),
                                f = y.map,
                                m = f && f["*"] || {};
                            if (e && "." === e.charAt(0))
                                if (t) {
                                    for (e = e.split("/"), r = e.length - 1, y.nodeIdCompat && M.test(e[r]) && (e[r] = e[r].replace(M, "")), e = h.slice(0, h.length - 1).concat(e), u = 0; u < e.length; u += 1)
                                        if (p = e[u], "." === p) e.splice(u, 1), u -= 1;
                                        else if (".." === p) {
                                        if (1 === u && (".." === e[2] || ".." === e[0])) break;
                                        u > 0 && (e.splice(u - 1, 2), u -= 2)
                                    }
                                    e = e.join("/")
                                } else 0 === e.indexOf("./") && (e = e.substring(2));
                            if ((h || m) && f) {
                                for (n = e.split("/"), u = n.length; u > 0; u -= 1) {
                                    if (i = n.slice(0, u).join("/"), h)
                                        for (c = h.length; c > 0; c -= 1)
                                            if (s = f[h.slice(0, c).join("/")], s && (s = s[i])) {
                                                o = s, a = u;
                                                break
                                            } if (o) break;
                                    !l && m && m[i] && (l = m[i], d = u)
                                }!o && l && (o = l, a = d), o && (n.splice(0, a, o), e = n.join("/"))
                            }
                            return e
                        }

                        function r(e, n) {
                            return function() {
                                var i = w.call(arguments, 0);
                                return "string" != typeof i[0] && 1 === i.length && i.push(null), h.apply(t, i.concat([e, n]))
                            }
                        }

                        function a(e) {
                            return function(t) {
                                return o(t, e)
                            }
                        }

                        function l(e) {
                            return function(t) {
                                g[e] = t
                            }
                        }

                        function d(e) {
                            if (s(_, e)) {
                                var n = _[e];
                                delete _[e], v[e] = !0, p.apply(t, n)
                            }
                            if (!s(g, e) && !s(v, e)) throw new Error("No " + e);
                            return g[e]
                        }

                        function u(e) {
                            var t, n = e ? e.indexOf("!") : -1;
                            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                        }

                        function c(e) {
                            return function() {
                                return y && y.config && y.config[e] || {}
                            }
                        }
                        var p, h, f, m, g = {},
                            _ = {},
                            y = {},
                            v = {},
                            b = Object.prototype.hasOwnProperty,
                            w = [].slice,
                            M = /\.js$/;
                        f = function(e, t) {
                            var n, i = u(e),
                                s = i[0];
                            return e = i[1], s && (s = o(s, t), n = d(s)), s ? e = n && n.normalize ? n.normalize(e, a(t)) : o(e, t) : (e = o(e, t), i = u(e), s = i[0], e = i[1], s && (n = d(s))), {
                                f: s ? s + "!" + e : e,
                                n: e,
                                pr: s,
                                p: n
                            }
                        }, m = {
                            require: function(e) {
                                return r(e)
                            },
                            exports: function(e) {
                                var t = g[e];
                                return "undefined" != typeof t ? t : g[e] = {}
                            },
                            module: function(e) {
                                return {
                                    id: e,
                                    uri: "",
                                    exports: g[e],
                                    config: c(e)
                                }
                            }
                        }, p = function(e, n, i, o) {
                            var a, u, c, p, h, y, b = [],
                                w = typeof i;
                            if (o = o || e, "undefined" === w || "function" === w) {
                                for (n = !n.length && i.length ? ["require", "exports", "module"] : n, h = 0; h < n.length; h += 1)
                                    if (p = f(n[h], o), u = p.f, "require" === u) b[h] = m.require(e);
                                    else if ("exports" === u) b[h] = m.exports(e), y = !0;
                                else if ("module" === u) a = b[h] = m.module(e);
                                else if (s(g, u) || s(_, u) || s(v, u)) b[h] = d(u);
                                else {
                                    if (!p.p) throw new Error(e + " missing " + u);
                                    p.p.load(p.n, r(o, !0), l(u), {}), b[h] = g[u]
                                }
                                c = i ? i.apply(g[e], b) : void 0, e && (a && a.exports !== t && a.exports !== g[e] ? g[e] = a.exports : c === t && y || (g[e] = c))
                            } else e && (g[e] = i)
                        }, e = n = h = function(e, n, i, s, o) {
                            if ("string" == typeof e) return m[e] ? m[e](n) : d(f(e, n).f);
                            if (!e.splice) {
                                if (y = e, y.deps && h(y.deps, y.callback), !n) return;
                                n.splice ? (e = n, n = i, i = null) : e = t
                            }
                            return n = n || function() {}, "function" == typeof i && (i = s, s = o), s ? p(t, e, n, i) : setTimeout(function() {
                                p(t, e, n, i)
                            }, 4), h
                        }, h.config = function(e) {
                            return h(e)
                        }, e._defined = g, i = function(e, t, n) {
                            if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                            t.splice || (n = t, t = []), s(g, e) || s(_, e) || (_[e] = [e, t, n])
                        }, i.amd = {
                            jQuery: !0
                        }
                    }(), t.requirejs = e, t.require = n, t.define = i
                }
            }(), t.define("almond", function() {}), t.define("jquery", [], function() {
                var t = e || $;
                return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
            }), t.define("select2/utils", ["jquery"], function(e) {
                function t(e) {
                    var t = e.prototype,
                        n = [];
                    for (var i in t) {
                        var s = t[i];
                        "function" == typeof s && "constructor" !== i && n.push(i)
                    }
                    return n
                }
                var n = {};
                n.Extend = function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    var i = {}.hasOwnProperty;
                    for (var s in t) i.call(t, s) && (e[s] = t[s]);
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                }, n.Decorate = function(e, n) {
                    function i() {
                        var t = Array.prototype.unshift,
                            i = n.prototype.constructor.length,
                            s = e.prototype.constructor;
                        i > 0 && (t.call(arguments, e.prototype.constructor), s = n.prototype.constructor), s.apply(this, arguments)
                    }

                    function s() {
                        this.constructor = i
                    }
                    var o = t(n),
                        r = t(e);
                    n.displayName = e.displayName, i.prototype = new s;
                    for (var a = 0; a < r.length; a++) {
                        var l = r[a];
                        i.prototype[l] = e.prototype[l]
                    }
                    for (var d = (function(e) {
                            var t = function() {};
                            e in i.prototype && (t = i.prototype[e]);
                            var s = n.prototype[e];
                            return function() {
                                var e = Array.prototype.unshift;
                                return e.call(arguments, t), s.apply(this, arguments)
                            }
                        }), u = 0; u < o.length; u++) {
                        var c = o[u];
                        i.prototype[c] = d(c)
                    }
                    return i
                };
                var i = function() {
                    this.listeners = {}
                };
                return i.prototype.on = function(e, t) {
                    this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                }, i.prototype.trigger = function(e) {
                    var t = Array.prototype.slice;
                    this.listeners = this.listeners || {}, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, i.prototype.invoke = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++) e[n].apply(this, t)
                }, n.Observable = i, n.generateChars = function(e) {
                    for (var t = "", n = 0; e > n; n++) {
                        var i = Math.floor(36 * Math.random());
                        t += i.toString(36)
                    }
                    return t
                }, n.bind = function(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }, n._convertData = function(e) {
                    for (var t in e) {
                        var n = t.split("-"),
                            i = e;
                        if (1 !== n.length) {
                            for (var s = 0; s < n.length; s++) {
                                var o = n[s];
                                o = o.substring(0, 1).toLowerCase() + o.substring(1), o in i || (i[o] = {}), s == n.length - 1 && (i[o] = e[t]), i = i[o]
                            }
                            delete e[t]
                        }
                    }
                    return e
                }, n.hasScroll = function(t, n) {
                    var i = e(n),
                        s = n.style.overflowX,
                        o = n.style.overflowY;
                    return s !== o || "hidden" !== o && "visible" !== o ? "scroll" === s || "scroll" === o ? !0 : i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth : !1
                }, n.escapeMarkup = function(e) {
                    var t = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                        return t[e]
                    })
                }, n.appendMany = function(t, n) {
                    if ("1.7" === e.fn.jquery.substr(0, 3)) {
                        var i = e();
                        e.map(n, function(e) {
                            i = i.add(e)
                        }), n = i
                    }
                    t.append(n)
                }, n
            }), t.define("select2/results", ["jquery", "./utils"], function(e, t) {
                function n(e, t, i) {
                    this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
                }
                return t.Extend(n, t.Observable), n.prototype.render = function() {
                    var t = e('<ul class="select2-results__options" role="tree"></ul>');
                    return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                }, n.prototype.clear = function() {
                    this.$results.empty()
                }, n.prototype.displayMessage = function(t) {
                    var n = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                        s = this.options.get("translations").get(t.message);
                    i.append(n(s(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                }, n.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }, n.prototype.append = function(e) {
                    this.hideLoading();
                    var t = [];
                    if (null == e.results || 0 === e.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    }));
                    e.results = this.sort(e.results);
                    for (var n = 0; n < e.results.length; n++) {
                        var i = e.results[n],
                            s = this.option(i);
                        t.push(s)
                    }
                    this.$results.append(t)
                }, n.prototype.position = function(e, t) {
                    var n = t.find(".select2-results");
                    n.append(e)
                }, n.prototype.sort = function(e) {
                    var t = this.options.get("sorter");
                    return t(e)
                }, n.prototype.setClasses = function() {
                    var t = this;
                    this.data.current(function(n) {
                        var i = e.map(n, function(e) {
                                return e.id.toString()
                            }),
                            s = t.$results.find(".select2-results__option[aria-selected]");
                        s.each(function() {
                            var t = e(this),
                                n = e.data(this, "data"),
                                s = "" + n.id;
                            null != n.element && n.element.selected || null == n.element && e.inArray(s, i) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                        });
                        var o = s.filter("[aria-selected=true]");
                        o.length > 0 ? o.first().trigger("mouseenter") : s.first().trigger("mouseenter")
                    })
                }, n.prototype.showLoading = function(e) {
                    this.hideLoading();
                    var t = this.options.get("translations").get("searching"),
                        n = {
                            disabled: !0,
                            loading: !0,
                            text: t(e)
                        },
                        i = this.option(n);
                    i.className += " loading-results", this.$results.prepend(i)
                }, n.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, n.prototype.option = function(t) {
                    var n = document.createElement("li");
                    n.className = "select2-results__option";
                    var i = {
                        role: "treeitem",
                        "aria-selected": "false"
                    };
                    t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == t.id && delete i["aria-selected"], null != t._resultId && (n.id = t._resultId), t.title && (n.title = t.title), t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]);
                    for (var s in i) {
                        var o = i[s];
                        n.setAttribute(s, o)
                    }
                    if (t.children) {
                        var r = e(n),
                            a = document.createElement("strong");
                        a.className = "select2-results__group", e(a), this.template(t, a);
                        for (var l = [], d = 0; d < t.children.length; d++) {
                            var u = t.children[d],
                                c = this.option(u);
                            l.push(c)
                        }
                        var p = e("<ul></ul>", {
                            "class": "select2-results__options select2-results__options--nested"
                        });
                        p.append(l), r.append(a), r.append(p)
                    } else this.template(t, n);
                    return e.data(n, "data", t), n
                }, n.prototype.bind = function(t, n) {
                    var i = this,
                        s = t.id + "-results";
                    this.$results.attr("id", s), t.on("results:all", function(e) {
                        i.clear(), i.append(e.data), t.isOpen() && i.setClasses()
                    }), t.on("results:append", function(e) {
                        i.append(e.data), t.isOpen() && i.setClasses()
                    }), t.on("query", function(e) {
                        i.hideMessages(), i.showLoading(e)
                    }), t.on("select", function() {
                        t.isOpen() && i.setClasses()
                    }), t.on("unselect", function() {
                        t.isOpen() && i.setClasses()
                    }), t.on("open", function() {
                        i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
                    }), t.on("close", function() {
                        i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
                    }), t.on("results:toggle", function() {
                        var e = i.getHighlightedResults();
                        0 !== e.length && e.trigger("mouseup")
                    }), t.on("results:select", function() {
                        var e = i.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = e.data("data");
                            "true" == e.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                                data: t
                            })
                        }
                    }), t.on("results:previous", function() {
                        var e = i.getHighlightedResults(),
                            t = i.$results.find("[aria-selected]"),
                            n = t.index(e);
                        if (0 !== n) {
                            var s = n - 1;
                            0 === e.length && (s = 0);
                            var o = t.eq(s);
                            o.trigger("mouseenter");
                            var r = i.$results.offset().top,
                                a = o.offset().top,
                                l = i.$results.scrollTop() + (a - r);
                            0 === s ? i.$results.scrollTop(0) : 0 > a - r && i.$results.scrollTop(l)
                        }
                    }), t.on("results:next", function() {
                        var e = i.getHighlightedResults(),
                            t = i.$results.find("[aria-selected]"),
                            n = t.index(e),
                            s = n + 1;
                        if (!(s >= t.length)) {
                            var o = t.eq(s);
                            o.trigger("mouseenter");
                            var r = i.$results.offset().top + i.$results.outerHeight(!1),
                                a = o.offset().top + o.outerHeight(!1),
                                l = i.$results.scrollTop() + a - r;
                            0 === s ? i.$results.scrollTop(0) : a > r && i.$results.scrollTop(l)
                        }
                    }), t.on("results:focus", function(e) {
                        e.element.addClass("select2-results__option--highlighted")
                    }), t.on("results:message", function(e) {
                        i.displayMessage(e)
                    }), e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                        var t = i.$results.scrollTop(),
                            n = i.$results.get(0).scrollHeight - i.$results.scrollTop() + e.deltaY,
                            s = e.deltaY > 0 && t - e.deltaY <= 0,
                            o = e.deltaY < 0 && n <= i.$results.height();
                        s ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation())
                    }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                        var n = e(this),
                            s = n.data("data");
                        return "true" === n.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
                            originalEvent: t,
                            data: s
                        }) : i.trigger("close", {})) : void i.trigger("select", {
                            originalEvent: t,
                            data: s
                        })
                    }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(t) {
                        var n = e(this).data("data");
                        i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                            data: n,
                            element: e(this)
                        })
                    })
                }, n.prototype.getHighlightedResults = function() {
                    var e = this.$results.find(".select2-results__option--highlighted");
                    return e
                }, n.prototype.destroy = function() {
                    this.$results.remove()
                }, n.prototype.ensureHighlightVisible = function() {
                    var e = this.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = this.$results.find("[aria-selected]"),
                            n = t.index(e),
                            i = this.$results.offset().top,
                            s = e.offset().top,
                            o = this.$results.scrollTop() + (s - i),
                            r = s - i;
                        o -= 2 * e.outerHeight(!1), 2 >= n ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || 0 > r) && this.$results.scrollTop(o)
                    }
                }, n.prototype.template = function(t, n) {
                    var i = this.options.get("templateResult"),
                        s = this.options.get("escapeMarkup"),
                        o = i(t, n);
                    null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = s(o) : e(n).append(o)
                }, n
            }), t.define("select2/keys", [], function() {
                var e = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                };
                return e
            }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, n) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return t.Extend(i, t.Observable), i.prototype.render = function() {
                    var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
                }, i.prototype.bind = function(e, t) {
                    var i = this,
                        s = (e.id + "-container", e.id + "-results");
                    this.container = e, this.$selection.on("focus", function(e) {
                        i.trigger("focus", e)
                    }), this.$selection.on("blur", function(e) {
                        i._handleBlur(e)
                    }), this.$selection.on("keydown", function(e) {
                        i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                    }), e.on("results:focus", function(e) {
                        i.$selection.attr("aria-activedescendant", e.data._resultId)
                    }), e.on("selection:update", function(e) {
                        i.update(e.data)
                    }), e.on("open", function() {
                        i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", s), i._attachCloseHandler(e)
                    }), e.on("close", function() {
                        i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(e)
                    }), e.on("enable", function() {
                        i.$selection.attr("tabindex", i._tabindex)
                    }), e.on("disable", function() {
                        i.$selection.attr("tabindex", "-1")
                    })
                }, i.prototype._handleBlur = function(t) {
                    var n = this;
                    window.setTimeout(function() {
                        document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                    }, 1)
                }, i.prototype._attachCloseHandler = function(t) {
                    e(document.body).on("mousedown.select2." + t.id, function(t) {
                        var n = e(t.target),
                            i = n.closest(".select2"),
                            s = e(".select2.select2-container--open");
                        s.each(function() {
                            var t = e(this);
                            if (this != i[0]) {
                                var n = t.data("element");
                                n.select2("close")
                            }
                        })
                    })
                }, i.prototype._detachCloseHandler = function(t) {
                    e(document.body).off("mousedown.select2." + t.id)
                }, i.prototype.position = function(e, t) {
                    var n = t.find(".selection");
                    n.append(e)
                }, i.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, i.prototype.update = function(e) {
                    throw new Error("The `update` method must be defined in child classes.")
                }, i
            }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, i) {
                function s() {
                    s.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(s, t), s.prototype.render = function() {
                    var e = s.__super__.render.call(this);
                    return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                }, s.prototype.bind = function(e, t) {
                    var n = this;
                    s.__super__.bind.apply(this, arguments);
                    var i = e.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(e) {
                        1 === e.which && n.trigger("toggle", {
                            originalEvent: e
                        })
                    }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), e.on("selection:update", function(e) {
                        n.update(e.data)
                    })
                }, s.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, s.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection"),
                        i = this.options.get("escapeMarkup");
                    return i(n(e, t))
                }, s.prototype.selectionContainer = function() {
                    return e("<span></span>")
                }, s.prototype.update = function(e) {
                    if (0 === e.length) return void this.clear();
                    var t = e[0],
                        n = this.$selection.find(".select2-selection__rendered"),
                        i = this.display(t, n);
                    n.empty().append(i), n.prop("title", t.title || t.text)
                }, s
            }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, n) {
                function i(e, t) {
                    i.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(i, t), i.prototype.render = function() {
                    var e = i.__super__.render.call(this);
                    return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                }, i.prototype.bind = function(t, n) {
                    var s = this;
                    i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                        s.trigger("toggle", {
                            originalEvent: e
                        })
                    }), this.$selection.on("click", ".select2-selection__choice__remove", function(t) {
                        if (!s.options.get("disabled")) {
                            var n = e(this),
                                i = n.parent(),
                                o = i.data("data");
                            s.trigger("unselect", {
                                originalEvent: t,
                                data: o
                            })
                        }
                    })
                }, i.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, i.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection"),
                        i = this.options.get("escapeMarkup");
                    return i(n(e, t))
                }, i.prototype.selectionContainer = function() {
                    var t = e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                    return t
                }, i.prototype.update = function(e) {
                    if (this.clear(), 0 !== e.length) {
                        for (var t = [], i = 0; i < e.length; i++) {
                            var s = e[i],
                                o = this.selectionContainer(),
                                r = this.display(s, o);
                            o.append(r), o.prop("title", s.title || s.text), o.data("data", s), t.push(o)
                        }
                        var a = this.$selection.find(".select2-selection__rendered");
                        n.appendMany(a, t)
                    }
                }, i
            }), t.define("select2/selection/placeholder", ["../utils"], function(e) {
                function t(e, t, n) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                }
                return t.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, t.prototype.createPlaceholder = function(e, t) {
                    var n = this.selectionContainer();
                    return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                }, t.prototype.update = function(e, t) {
                    var n = 1 == t.length && t[0].id != this.placeholder.id,
                        i = t.length > 1;
                    if (i || n) return e.call(this, t);
                    this.clear();
                    var s = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(s)
                }, t
            }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, t) {
                function n() {}
                return n.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                        i._handleClear(e)
                    }), t.on("keypress", function(e) {
                        i._handleKeyboardClear(e, t)
                    })
                }, n.prototype._handleClear = function(e, t) {
                    if (!this.options.get("disabled")) {
                        var n = this.$selection.find(".select2-selection__clear");
                        if (0 !== n.length) {
                            t.stopPropagation();
                            for (var i = n.data("data"), s = 0; s < i.length; s++) {
                                var o = {
                                    data: i[s]
                                };
                                if (this.trigger("unselect", o), o.prevented) return
                            }
                            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }, n.prototype._handleKeyboardClear = function(e, n, i) {
                    i.isOpen() || (n.which == t.DELETE || n.which == t.BACKSPACE) && this._handleClear(n)
                }, n.prototype.update = function(t, n) {
                    if (t.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                        var i = e('<span class="select2-selection__clear">&times;</span>');
                        i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                    }
                }, n
            }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, n) {
                function i(e, t, n) {
                    e.call(this, t, n)
                }
                return i.prototype.render = function(t) {
                    var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = n, this.$search = n.find("input");
                    var i = t.call(this);
                    return this._transferTabIndex(), i
                }, i.prototype.bind = function(e, t, i) {
                    var s = this;
                    e.call(this, t, i), t.on("open", function() {
                        s.$search.trigger("focus")
                    }), t.on("close", function() {
                        s.$search.val(""), s.$search.removeAttr("aria-activedescendant"), s.$search.trigger("focus")
                    }), t.on("enable", function() {
                        s.$search.prop("disabled", !1), s._transferTabIndex()
                    }), t.on("disable", function() {
                        s.$search.prop("disabled", !0)
                    }), t.on("focus", function(e) {
                        s.$search.trigger("focus")
                    }), t.on("results:focus", function(e) {
                        s.$search.attr("aria-activedescendant", e.id)
                    }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                        s.trigger("focus", e)
                    }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                        s._handleBlur(e)
                    }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                        e.stopPropagation(), s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented();
                        var t = e.which;
                        if (t === n.BACKSPACE && "" === s.$search.val()) {
                            var i = s.$searchContainer.prev(".select2-selection__choice");
                            if (i.length > 0) {
                                var o = i.data("data");
                                s.searchRemoveChoice(o), e.preventDefault()
                            }
                        }
                    });
                    var o = document.documentMode,
                        r = o && 11 >= o;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                        return r ? void s.$selection.off("input.search input.searchcheck") : void s.$selection.off("keyup.search")
                    }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                        if (r && "input" === e.type) return void s.$selection.off("input.search input.searchcheck");
                        var t = e.which;
                        t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && s.handleSearch(e)
                    })
                }, i.prototype._transferTabIndex = function(e) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, i.prototype.createPlaceholder = function(e, t) {
                    this.$search.attr("placeholder", t.text)
                }, i.prototype.update = function(e, t) {
                    var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                }, i.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var e = this.$search.val();
                        this.trigger("query", {
                            term: e
                        })
                    }
                    this._keyUpPrevented = !1
                }, i.prototype.searchRemoveChoice = function(e, t) {
                    this.trigger("unselect", {
                        data: t
                    }), this.$search.val(t.text), this.handleSearch()
                }, i.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var e = "";
                    if ("" !== this.$search.attr("placeholder")) e = this.$selection.find(".select2-selection__rendered").innerWidth();
                    else {
                        var t = this.$search.val().length + 1;
                        e = .75 * t + "em"
                    }
                    this.$search.css("width", e)
                }, i
            }), t.define("select2/selection/eventRelay", ["jquery"], function(e) {
                function t() {}
                return t.prototype.bind = function(t, n, i) {
                    var s = this,
                        o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                        r = ["opening", "closing", "selecting", "unselecting"];
                    t.call(this, n, i), n.on("*", function(t, n) {
                        if (-1 !== e.inArray(t, o)) {
                            n = n || {};
                            var i = e.Event("select2:" + t, {
                                params: n
                            });
                            s.$element.trigger(i), -1 !== e.inArray(t, r) && (n.prevented = i.isDefaultPrevented())
                        }
                    })
                }, t
            }), t.define("select2/translation", ["jquery", "require"], function(e, t) {
                function n(e) {
                    this.dict = e || {}
                }
                return n.prototype.all = function() {
                    return this.dict
                }, n.prototype.get = function(e) {
                    return this.dict[e]
                }, n.prototype.extend = function(t) {
                    this.dict = e.extend({}, t.all(), this.dict)
                }, n._cache = {}, n.loadPath = function(e) {
                    if (!(e in n._cache)) {
                        var i = t(e);
                        n._cache[e] = i
                    }
                    return new n(n._cache[e])
                }, n
            }), t.define("select2/diacritics", [], function() {
                var e = {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "ẞ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ſ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ß": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ẛ": "s",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "Ά": "Α",
                    "Έ": "Ε",
                    "Ή": "Η",
                    "Ί": "Ι",
                    "Ϊ": "Ι",
                    "Ό": "Ο",
                    "Ύ": "Υ",
                    "Ϋ": "Υ",
                    "Ώ": "Ω",
                    "ά": "α",
                    "έ": "ε",
                    "ή": "η",
                    "ί": "ι",
                    "ϊ": "ι",
                    "ΐ": "ι",
                    "ό": "ο",
                    "ύ": "υ",
                    "ϋ": "υ",
                    "ΰ": "υ",
                    "ω": "ω",
                    "ς": "σ"
                };
                return e
            }), t.define("select2/data/base", ["../utils"], function(e) {
                function t(e, n) {
                    t.__super__.constructor.call(this)
                }
                return e.Extend(t, e.Observable), t.prototype.current = function(e) {
                    throw new Error("The `current` method must be defined in child classes.")
                }, t.prototype.query = function(e, t) {
                    throw new Error("The `query` method must be defined in child classes.")
                }, t.prototype.bind = function(e, t) {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, n) {
                    var i = t.id + "-result-";
                    return i += e.generateChars(4), i += null != n.id ? "-" + n.id.toString() : "-" + e.generateChars(4)
                }, t
            }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, n) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return t.Extend(i, e), i.prototype.current = function(e) {
                    var t = [],
                        i = this;
                    this.$element.find(":selected").each(function() {
                        var e = n(this),
                            s = i.item(e);
                        t.push(s)
                    }), e(t)
                }, i.prototype.select = function(e) {
                    var t = this;
                    if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current(function(i) {
                        var s = [];
                        e = [e], e.push.apply(e, i);
                        for (var o = 0; o < e.length; o++) {
                            var r = e[o].id; - 1 === n.inArray(r, s) && s.push(r)
                        }
                        t.$element.val(s), t.$element.trigger("change")
                    });
                    else {
                        var i = e.id;
                        this.$element.val(i), this.$element.trigger("change")
                    }
                }, i.prototype.unselect = function(e) {
                    var t = this;
                    return this.$element.prop("multiple") ? (e.selected = !1, n(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(i) {
                        for (var s = [], o = 0; o < i.length; o++) {
                            var r = i[o].id;
                            r !== e.id && -1 === n.inArray(r, s) && s.push(r)
                        }
                        t.$element.val(s), t.$element.trigger("change")
                    })) : void 0
                }, i.prototype.bind = function(e, t) {
                    var n = this;
                    this.container = e, e.on("select", function(e) {
                        n.select(e.data)
                    }), e.on("unselect", function(e) {
                        n.unselect(e.data)
                    })
                }, i.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        n.removeData(this, "data")
                    })
                }, i.prototype.query = function(e, t) {
                    var i = [],
                        s = this,
                        o = this.$element.children();
                    o.each(function() {
                        var t = n(this);
                        if (t.is("option") || t.is("optgroup")) {
                            var o = s.item(t),
                                r = s.matches(e, o);
                            null !== r && i.push(r)
                        }
                    }), t({
                        results: i
                    })
                }, i.prototype.addOptions = function(e) {
                    t.appendMany(this.$element, e)
                }, i.prototype.option = function(e) {
                    var t;
                    e.children ? (t = document.createElement("optgroup"), t.label = e.text) : (t = document.createElement("option"), void 0 !== t.textContent ? t.textContent = e.text : t.innerText = e.text), e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                    var i = n(t),
                        s = this._normalizeItem(e);
                    return s.element = t, n.data(t, "data", s), i
                }, i.prototype.item = function(e) {
                    var t = {};
                    if (t = n.data(e[0], "data"), null != t) return t;
                    if (e.is("option")) t = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                    else if (e.is("optgroup")) {
                        t = {
                            text: e.prop("label"),
                            children: [],
                            title: e.prop("title")
                        };
                        for (var i = e.children("option"), s = [], o = 0; o < i.length; o++) {
                            var r = n(i[o]),
                                a = this.item(r);
                            s.push(a)
                        }
                        t.children = s
                    }
                    return t = this._normalizeItem(t), t.element = e[0], n.data(e[0], "data", t), t
                }, i.prototype._normalizeItem = function(e) {
                    n.isPlainObject(e) || (e = {
                        id: e,
                        text: e
                    }), e = n.extend({}, {
                        text: ""
                    }, e);
                    var t = {
                        selected: !1,
                        disabled: !1
                    };
                    return null != e.id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e)
                }, i.prototype.matches = function(e, t) {
                    var n = this.options.get("matcher");
                    return n(e, t)
                }, i
            }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, n) {
                function i(e, t) {
                    var n = t.get("data") || [];
                    i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                }
                return t.Extend(i, e), i.prototype.select = function(e) {
                    var t = this.$element.find("option").filter(function(t, n) {
                        return n.value == e.id.toString()
                    });
                    0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
                }, i.prototype.convertToOptions = function(e) {
                    function i(e) {
                        return function() {
                            return n(this).val() == e.id
                        }
                    }
                    for (var s = this, o = this.$element.find("option"), r = o.map(function() {
                            return s.item(n(this)).id
                        }).get(), a = [], l = 0; l < e.length; l++) {
                        var d = this._normalizeItem(e[l]);
                        if (n.inArray(d.id, r) >= 0) {
                            var u = o.filter(i(d)),
                                c = this.item(u),
                                p = n.extend(!0, {}, c, d),
                                h = this.option(p);
                            u.replaceWith(h)
                        } else {
                            var f = this.option(d);
                            if (d.children) {
                                var m = this.convertToOptions(d.children);
                                t.appendMany(f, m)
                            }
                            a.push(f)
                        }
                    }
                    return a
                }, i
            }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, n) {
                function i(e, t) {
                    this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
                }
                return t.Extend(i, e), i.prototype._applyDefaults = function(e) {
                    var t = {
                        data: function(e) {
                            return n.extend({}, e, {
                                q: e.term
                            })
                        },
                        transport: function(e, t, i) {
                            var s = n.ajax(e);
                            return s.then(t), s.fail(i), s
                        }
                    };
                    return n.extend({}, t, e, !0)
                }, i.prototype.processResults = function(e) {
                    return e
                }, i.prototype.query = function(e, t) {
                    function i() {
                        var i = o.transport(o, function(i) {
                            var o = s.processResults(i, e);
                            s.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(o)
                        }, function() {});
                        s._request = i
                    }
                    var s = this;
                    null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var o = n.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" == typeof o.url && (o.url = o.url.call(this.$element, e)), "function" == typeof o.data && (o.data = o.data.call(this.$element, e)), this.ajaxOptions.delay && "" !== e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                }, i
            }), t.define("select2/data/tags", ["jquery"], function(e) {
                function t(t, n, i) {
                    var s = i.get("tags"),
                        o = i.get("createTag");
                    if (void 0 !== o && (this.createTag = o), t.call(this, n, i), e.isArray(s))
                        for (var r = 0; r < s.length; r++) {
                            var a = s[r],
                                l = this._normalizeItem(a),
                                d = this.option(l);
                            this.$element.append(d)
                        }
                }
                return t.prototype.query = function(e, t, n) {
                    function i(e, o) {
                        for (var r = e.results, a = 0; a < r.length; a++) {
                            var l = r[a],
                                d = null != l.children && !i({
                                    results: l.children
                                }, !0),
                                u = l.text === t.term;
                            if (u || d) return o ? !1 : (e.data = r, void n(e))
                        }
                        if (o) return !0;
                        var c = s.createTag(t);
                        if (null != c) {
                            var p = s.option(c);
                            p.attr("data-select2-tag", !0), s.addOptions([p]), s.insertTag(r, c)
                        }
                        e.results = r, n(e)
                    }
                    var s = this;
                    return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, n) : void e.call(this, t, i)
                }, t.prototype.createTag = function(t, n) {
                    var i = e.trim(n.term);
                    return "" === i ? null : {
                        id: i,
                        text: i
                    }
                }, t.prototype.insertTag = function(e, t, n) {
                    t.unshift(n)
                }, t.prototype._removeOldTags = function(t) {
                    var n = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                    n.each(function() {
                        this.selected || e(this).remove()
                    })
                }, t
            }), t.define("select2/data/tokenizer", ["jquery"], function(e) {
                function t(e, t, n) {
                    var i = n.get("tokenizer");
                    void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                }
                return t.prototype.bind = function(e, t, n) {
                    e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                }, t.prototype.query = function(e, t, n) {
                    function i(e) {
                        s.trigger("select", {
                            data: e
                        })
                    }
                    var s = this;
                    t.term = t.term || "";
                    var o = this.tokenizer(t, this.options, i);
                    o.term !== t.term && (this.$search.length && (this.$search.val(o.term), this.$search.focus()), t.term = o.term), e.call(this, t, n)
                }, t.prototype.tokenizer = function(t, n, i, s) {
                    for (var o = i.get("tokenSeparators") || [], r = n.term, a = 0, l = this.createTag || function(e) {
                            return {
                                id: e.term,
                                text: e.term
                            }
                        }; a < r.length;) {
                        var d = r[a];
                        if (-1 !== e.inArray(d, o)) {
                            var u = r.substr(0, a),
                                c = e.extend({}, n, {
                                    term: u
                                }),
                                p = l(c);
                            null != p ? (s(p), r = r.substr(a + 1) || "", a = 0) : a++
                        } else a++
                    }
                    return {
                        term: r
                    }
                }, t
            }), t.define("select2/data/minimumInputLength", [], function() {
                function e(e, t, n) {
                    this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : void e.call(this, t, n)
                }, e
            }), t.define("select2/data/maximumInputLength", [], function() {
                function e(e, t, n) {
                    this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : void e.call(this, t, n)
                }, e
            }), t.define("select2/data/maximumSelectionLength", [], function() {
                function e(e, t, n) {
                    this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    var i = this;
                    this.current(function(s) {
                        var o = null != s ? s.length : 0;
                        return i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? void i.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: i.maximumSelectionLength
                            }
                        }) : void e.call(i, t, n)
                    })
                }, e
            }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this)
                }
                return t.Extend(n, t.Observable), n.prototype.render = function() {
                    var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, n
            }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(e, t) {
                function n() {}
                return n.prototype.render = function(t) {
                    var n = t.call(this),
                        i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                    return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                }, n.prototype.bind = function(t, n, i) {
                    var s = this;
                    t.call(this, n, i), this.$search.on("keydown", function(e) {
                        s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented()
                    }), this.$search.on("input", function(t) {
                        e(this).off("keyup")
                    }), this.$search.on("keyup input", function(e) {
                        s.handleSearch(e)
                    }), n.on("open", function() {
                        s.$search.attr("tabindex", 0), s.$search.focus(), window.setTimeout(function() {
                            s.$search.focus()
                        }, 0)
                    }), n.on("close", function() {
                        s.$search.attr("tabindex", -1), s.$search.val("")
                    }), n.on("results:all", function(e) {
                        if (null == e.query.term || "" === e.query.term) {
                            var t = s.showSearch(e);
                            t ? s.$searchContainer.removeClass("select2-search--hide") : s.$searchContainer.addClass("select2-search--hide")
                        }
                    })
                }, n.prototype.handleSearch = function(e) {
                    if (!this._keyUpPrevented) {
                        var t = this.$search.val();
                        this.trigger("query", {
                            term: t
                        })
                    }
                    this._keyUpPrevented = !1
                }, n.prototype.showSearch = function(e, t) {
                    return !0
                }, n
            }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                function e(e, t, n, i) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                }
                return e.prototype.append = function(e, t) {
                    t.results = this.removePlaceholder(t.results), e.call(this, t)
                }, e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, e.prototype.removePlaceholder = function(e, t) {
                    for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                        var s = t[i];
                        this.placeholder.id === s.id && n.splice(i, 1)
                    }
                    return n
                }, e
            }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
                function t(e, t, n, i) {
                    this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return t.prototype.append = function(e, t) {
                    this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                }, t.prototype.bind = function(t, n, i) {
                    var s = this;
                    t.call(this, n, i), n.on("query", function(e) {
                        s.lastParams = e, s.loading = !0
                    }), n.on("query:append", function(e) {
                        s.lastParams = e, s.loading = !0
                    }), this.$results.on("scroll", function() {
                        var t = e.contains(document.documentElement, s.$loadingMore[0]);
                        if (!s.loading && t) {
                            var n = s.$results.offset().top + s.$results.outerHeight(!1),
                                i = s.$loadingMore.offset().top + s.$loadingMore.outerHeight(!1);
                            n + 50 >= i && s.loadMore()
                        }
                    })
                }, t.prototype.loadMore = function() {
                    this.loading = !0;
                    var t = e.extend({}, {
                        page: 1
                    }, this.lastParams);
                    t.page++, this.trigger("query:append", t)
                }, t.prototype.showLoadingMore = function(e, t) {
                    return t.pagination && t.pagination.more
                }, t.prototype.createLoadingMore = function() {
                    var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                        n = this.options.get("translations").get("loadingMore");
                    return t.html(n(this.lastParams)), t
                }, t
            }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
                function n(t, n, i) {
                    this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, n, i)
                }
                return n.prototype.bind = function(e, t, n) {
                    var i = this,
                        s = !1;
                    e.call(this, t, n), t.on("open", function() {
                        i._showDropdown(), i._attachPositioningHandler(t), s || (s = !0, t.on("results:all", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }), t.on("results:append", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }))
                    }), t.on("close", function() {
                        i._hideDropdown(), i._detachPositioningHandler(t)
                    }), this.$dropdownContainer.on("mousedown", function(e) {
                        e.stopPropagation()
                    })
                }, n.prototype.destroy = function(e) {
                    e.call(this), this.$dropdownContainer.remove()
                }, n.prototype.position = function(e, t, n) {
                    t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = n
                }, n.prototype.render = function(t) {
                    var n = e("<span></span>"),
                        i = t.call(this);
                    return n.append(i), this.$dropdownContainer = n, n
                }, n.prototype._hideDropdown = function(e) {
                    this.$dropdownContainer.detach()
                }, n.prototype._attachPositioningHandler = function(n, i) {
                    var s = this,
                        o = "scroll.select2." + i.id,
                        r = "resize.select2." + i.id,
                        a = "orientationchange.select2." + i.id,
                        l = this.$container.parents().filter(t.hasScroll);
                    l.each(function() {
                        e(this).data("select2-scroll-position", {
                            x: e(this).scrollLeft(),
                            y: e(this).scrollTop()
                        })
                    }), l.on(o, function(t) {
                        var n = e(this).data("select2-scroll-position");
                        e(this).scrollTop(n.y)
                    }), e(window).on(o + " " + r + " " + a, function(e) {
                        s._positionDropdown(), s._resizeDropdown()
                    })
                }, n.prototype._detachPositioningHandler = function(n, i) {
                    var s = "scroll.select2." + i.id,
                        o = "resize.select2." + i.id,
                        r = "orientationchange.select2." + i.id,
                        a = this.$container.parents().filter(t.hasScroll);
                    a.off(s), e(window).off(s + " " + o + " " + r)
                }, n.prototype._positionDropdown = function() {
                    var t = e(window),
                        n = this.$dropdown.hasClass("select2-dropdown--above"),
                        i = this.$dropdown.hasClass("select2-dropdown--below"),
                        s = null,
                        o = (this.$container.position(), this.$container.offset());
                    o.bottom = o.top + this.$container.outerHeight(!1);
                    var r = {
                        height: this.$container.outerHeight(!1)
                    };
                    r.top = o.top, r.bottom = o.top + r.height;
                    var a = {
                            height: this.$dropdown.outerHeight(!1)
                        },
                        l = {
                            top: t.scrollTop(),
                            bottom: t.scrollTop() + t.height()
                        },
                        d = l.top < o.top - a.height,
                        u = l.bottom > o.bottom + a.height,
                        c = {
                            left: o.left,
                            top: r.bottom
                        };
                    if ("static" !== this.$dropdownParent[0].style.position) {
                        var p = this.$dropdownParent.offset();
                        c.top -= p.top, c.left -= p.left
                    }
                    n || i || (s = "below"), u || !d || n ? !d && u && n && (s = "below") : s = "above", ("above" == s || n && "below" !== s) && (c.top = r.top - a.height), null != s && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + s), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + s)), this.$dropdownContainer.css(c)
                }, n.prototype._resizeDropdown = function() {
                    var e = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.width = "auto"), this.$dropdown.css(e)
                }, n.prototype._showDropdown = function(e) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, n
            }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function e(t) {
                    for (var n = 0, i = 0; i < t.length; i++) {
                        var s = t[i];
                        s.children ? n += e(s.children) : n++
                    }
                    return n
                }

                function t(e, t, n, i) {
                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                }
                return t.prototype.showSearch = function(t, n) {
                    return e(n.data.results) < this.minimumResultsForSearch ? !1 : t.call(this, n)
                }, t
            }), t.define("select2/dropdown/selectOnClose", [], function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("close", function() {
                        i._handleSelectOnClose()
                    })
                }, e.prototype._handleSelectOnClose = function() {
                    var e = this.getHighlightedResults();
                    if (!(e.length < 1)) {
                        var t = e.data("data");
                        null != t.element && t.element.selected || null == t.element && t.selected || this.trigger("select", {
                            data: t
                        })
                    }
                }, e
            }), t.define("select2/dropdown/closeOnSelect", [], function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("select", function(e) {
                        i._selectTriggered(e)
                    }), t.on("unselect", function(e) {
                        i._selectTriggered(e)
                    })
                }, e.prototype._selectTriggered = function(e, t) {
                    var n = t.originalEvent;
                    n && n.ctrlKey || this.trigger("close", {})
                }, e
            }), t.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(e) {
                        var t = e.input.length - e.maximum,
                            n = "Please delete " + t + " character";
                        return 1 != t && (n += "s"), n
                    },
                    inputTooShort: function(e) {
                        var t = e.minimum - e.input.length,
                            n = "Please enter " + t + " or more characters";
                        return n
                    },
                    loadingMore: function() {
                        return "Loading more results…"
                    },
                    maximumSelected: function(e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching…"
                    }
                }
            }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, n, i, s, o, r, a, l, d, u, c, p, h, f, m, g, _, y, v, b, w, M, k, L, T, x, D, S) {
                function Y() {
                    this.reset()
                }
                Y.prototype.apply = function(c) {
                    if (c = e.extend({}, this.defaults, c), null == c.dataAdapter) {
                        if (null != c.ajax ? c.dataAdapter = f : null != c.data ? c.dataAdapter = h : c.dataAdapter = p, c.minimumInputLength > 0 && (c.dataAdapter = d.Decorate(c.dataAdapter, _)), c.maximumInputLength > 0 && (c.dataAdapter = d.Decorate(c.dataAdapter, y)), c.maximumSelectionLength > 0 && (c.dataAdapter = d.Decorate(c.dataAdapter, v)), c.tags && (c.dataAdapter = d.Decorate(c.dataAdapter, m)), (null != c.tokenSeparators || null != c.tokenizer) && (c.dataAdapter = d.Decorate(c.dataAdapter, g)), null != c.query) {
                            var S = t(c.amdBase + "compat/query");
                            c.dataAdapter = d.Decorate(c.dataAdapter, S)
                        }
                        if (null != c.initSelection) {
                            var Y = t(c.amdBase + "compat/initSelection");
                            c.dataAdapter = d.Decorate(c.dataAdapter, Y)
                        }
                    }
                    if (null == c.resultsAdapter && (c.resultsAdapter = n, null != c.ajax && (c.resultsAdapter = d.Decorate(c.resultsAdapter, k)), null != c.placeholder && (c.resultsAdapter = d.Decorate(c.resultsAdapter, M)), c.selectOnClose && (c.resultsAdapter = d.Decorate(c.resultsAdapter, x))), null == c.dropdownAdapter) {
                        if (c.multiple) c.dropdownAdapter = b;
                        else {
                            var C = d.Decorate(b, w);
                            c.dropdownAdapter = C
                        }
                        if (0 !== c.minimumResultsForSearch && (c.dropdownAdapter = d.Decorate(c.dropdownAdapter, T)), c.closeOnSelect && (c.dropdownAdapter = d.Decorate(c.dropdownAdapter, D)), null != c.dropdownCssClass || null != c.dropdownCss || null != c.adaptDropdownCssClass) {
                            var E = t(c.amdBase + "compat/dropdownCss");
                            c.dropdownAdapter = d.Decorate(c.dropdownAdapter, E)
                        }
                        c.dropdownAdapter = d.Decorate(c.dropdownAdapter, L)
                    }
                    if (null == c.selectionAdapter) {
                        if (c.multiple ? c.selectionAdapter = s : c.selectionAdapter = i, null != c.placeholder && (c.selectionAdapter = d.Decorate(c.selectionAdapter, o)), c.allowClear && (c.selectionAdapter = d.Decorate(c.selectionAdapter, r)), c.multiple && (c.selectionAdapter = d.Decorate(c.selectionAdapter, a)), null != c.containerCssClass || null != c.containerCss || null != c.adaptContainerCssClass) {
                            var A = t(c.amdBase + "compat/containerCss");
                            c.selectionAdapter = d.Decorate(c.selectionAdapter, A)
                        }
                        c.selectionAdapter = d.Decorate(c.selectionAdapter, l)
                    }
                    if ("string" == typeof c.language)
                        if (c.language.indexOf("-") > 0) {
                            var j = c.language.split("-"),
                                H = j[0];
                            c.language = [c.language, H]
                        } else c.language = [c.language];
                    if (e.isArray(c.language)) {
                        var O = new u;
                        c.language.push("en");
                        for (var I = c.language, P = 0; P < I.length; P++) {
                            var $ = I[P],
                                N = {};
                            try {
                                N = u.loadPath($)
                            } catch (F) {
                                try {
                                    $ = this.defaults.amdLanguageBase + $, N = u.loadPath($)
                                } catch (W) {
                                    c.debug && window.console && console.warn && console.warn('Select2: The language file for "' + $ + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            O.extend(N)
                        }
                        c.translations = O
                    } else {
                        var z = u.loadPath(this.defaults.amdLanguageBase + "en"),
                            R = new u(c.language);
                        R.extend(z), c.translations = R
                    }
                    return c
                }, Y.prototype.reset = function() {
                    function t(e) {
                        function t(e) {
                            return c[e] || e
                        }
                        return e.replace(/[^\u0000-\u007E]/g, t)
                    }

                    function n(i, s) {
                        if ("" === e.trim(i.term)) return s;
                        if (s.children && s.children.length > 0) {
                            for (var o = e.extend(!0, {}, s), r = s.children.length - 1; r >= 0; r--) {
                                var a = s.children[r],
                                    l = n(i, a);
                                null == l && o.children.splice(r, 1)
                            }
                            return o.children.length > 0 ? o : n(i, o)
                        }
                        var d = t(s.text).toUpperCase(),
                            u = t(i.term).toUpperCase();
                        return d.indexOf(u) > -1 ? s : null
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: d.escapeMarkup,
                        language: S,
                        matcher: n,
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        sorter: function(e) {
                            return e
                        },
                        templateResult: function(e) {
                            return e.text
                        },
                        templateSelection: function(e) {
                            return e.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, Y.prototype.set = function(t, n) {
                    var i = e.camelCase(t),
                        s = {};
                    s[i] = n;
                    var o = d._convertData(s);
                    e.extend(this.defaults, o)
                };
                var C = new Y;
                return C
            }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, n, i) {
                function s(t, s) {
                    if (this.options = t, null != s && this.fromElement(s), this.options = n.apply(this.options), s && s.is("input")) {
                        var o = e(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                    }
                }
                return s.prototype.fromElement = function(e) {
                    var n = ["select2"];
                    null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                    var s = {};
                    s = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                    var o = t.extend(!0, {}, s);
                    o = i._convertData(o);
                    for (var r in o) t.inArray(r, n) > -1 || (t.isPlainObject(this.options[r]) ? t.extend(this.options[r], o[r]) : this.options[r] = o[r]);
                    return this
                }, s.prototype.get = function(e) {
                    return this.options[e]
                }, s.prototype.set = function(e, t) {
                    this.options[e] = t
                }, s
            }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, n, i) {
                var s = function(e, n) {
                    null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), n = n || {}, this.options = new t(n, e), s.__super__.constructor.call(this);
                    var i = e.attr("tabindex") || 0;
                    e.data("old-tabindex", i), e.attr("tabindex", "-1");
                    var o = this.options.get("dataAdapter");
                    this.dataAdapter = new o(e, this.options);
                    var r = this.render();
                    this._placeContainer(r);
                    var a = this.options.get("selectionAdapter");
                    this.selection = new a(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
                    var l = this.options.get("dropdownAdapter");
                    this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
                    var d = this.options.get("resultsAdapter");
                    this.results = new d(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var u = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                        u.trigger("selection:update", {
                            data: e
                        })
                    }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                };
                return n.Extend(s, n.Observable), s.prototype._generateId = function(e) {
                    var t = "";
                    return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), t = "select2-" + t
                }, s.prototype._placeContainer = function(e) {
                    e.insertAfter(this.$element);
                    var t = this._resolveWidth(this.$element, this.options.get("width"));
                    null != t && e.css("width", t)
                }, s.prototype._resolveWidth = function(e, t) {
                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == t) {
                        var i = this._resolveWidth(e, "style");
                        return null != i ? i : this._resolveWidth(e, "element")
                    }
                    if ("element" == t) {
                        var s = e.outerWidth(!1);
                        return 0 >= s ? "auto" : s + "px"
                    }
                    if ("style" == t) {
                        var o = e.attr("style");
                        if ("string" != typeof o) return null;
                        for (var r = o.split(";"), a = 0, l = r.length; l > a; a += 1) {
                            var d = r[a].replace(/\s/g, ""),
                                u = d.match(n);
                            if (null !== u && u.length >= 1) return u[1]
                        }
                        return null
                    }
                    return t
                }, s.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, s.prototype._registerDomEvents = function() {
                    var t = this;
                    this.$element.on("change.select2", function() {
                        t.dataAdapter.current(function(e) {
                            t.trigger("selection:update", {
                                data: e
                            })
                        })
                    }), this._sync = n.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                    var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != i ? (this._observer = new i(function(n) {
                        e.each(n, t._sync)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", t._sync, !1)
                }, s.prototype._registerDataEvents = function() {
                    var e = this;
                    this.dataAdapter.on("*", function(t, n) {
                        e.trigger(t, n)
                    })
                }, s.prototype._registerSelectionEvents = function() {
                    var t = this,
                        n = ["toggle", "focus"];
                    this.selection.on("toggle", function() {
                        t.toggleDropdown()
                    }), this.selection.on("focus", function(e) {
                        t.focus(e)
                    }), this.selection.on("*", function(i, s) {
                        -1 === e.inArray(i, n) && t.trigger(i, s)
                    })
                }, s.prototype._registerDropdownEvents = function() {
                    var e = this;
                    this.dropdown.on("*", function(t, n) {
                        e.trigger(t, n)
                    })
                }, s.prototype._registerResultsEvents = function() {
                    var e = this;
                    this.results.on("*", function(t, n) {
                        e.trigger(t, n)
                    })
                }, s.prototype._registerEvents = function() {
                    var e = this;
                    this.on("open", function() {
                        e.$container.addClass("select2-container--open")
                    }), this.on("close", function() {
                        e.$container.removeClass("select2-container--open")
                    }), this.on("enable", function() {
                        e.$container.removeClass("select2-container--disabled")
                    }), this.on("disable", function() {
                        e.$container.addClass("select2-container--disabled")
                    }), this.on("blur", function() {
                        e.$container.removeClass("select2-container--focus")
                    }), this.on("query", function(t) {
                        e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function(n) {
                            e.trigger("results:all", {
                                data: n,
                                query: t
                            })
                        })
                    }), this.on("query:append", function(t) {
                        this.dataAdapter.query(t, function(n) {
                            e.trigger("results:append", {
                                data: n,
                                query: t
                            })
                        })
                    }), this.on("keypress", function(t) {
                        var n = t.which;
                        e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                    })
                }, s.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, s.prototype.trigger = function(e, t) {
                    var n = s.__super__.trigger,
                        i = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        };
                    if (void 0 === t && (t = {}), e in i) {
                        var o = i[e],
                            r = {
                                prevented: !1,
                                name: e,
                                args: t
                            };
                        if (n.call(this, o, r), r.prevented) return void(t.prevented = !0)
                    }
                    n.call(this, e, t)
                }, s.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, s.prototype.open = function() {
                    this.isOpen() || this.trigger("query", {})
                }, s.prototype.close = function() {
                    this.isOpen() && this.trigger("close", {})
                }, s.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, s.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, s.prototype.focus = function(e) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, s.prototype.enable = function(e) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
                    var t = !e[0];
                    this.$element.prop("disabled", t)
                }, s.prototype.data = function() {
                    this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var e = [];
                    return this.dataAdapter.current(function(t) {
                        e = t
                    }), e
                }, s.prototype.val = function(t) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                    var n = t[0];
                    e.isArray(n) && (n = e.map(n, function(e) {
                        return e.toString()
                    })), this.$element.val(n).trigger("change")
                }, s.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, s.prototype.render = function() {
                    var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
                }, s
            }), t.define("jquery-mousewheel", ["jquery"], function(e) {
                return e
            }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(e, t, n, i) {
                if (null == e.fn.select2) {
                    var s = ["open", "close", "destroy"];
                    e.fn.select2 = function(t) {
                        if (t = t || {}, "object" == typeof t) return this.each(function() {
                            var i = e.extend(!0, {}, t);
                            new n(e(this), i)
                        }), this;
                        if ("string" == typeof t) {
                            var i;
                            return this.each(function() {
                                var n = e(this).data("select2");
                                null == n && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2.");
                                var s = Array.prototype.slice.call(arguments, 1);
                                i = n[t].apply(n, s)
                            }), e.inArray(t, s) > -1 ? this : i
                        }
                        throw new Error("Invalid arguments for Select2: " + t)
                    }
                }
                return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
            }), {
                define: t.define,
                require: t.require
            }
        }(),
        n = t.require("jquery.select2");
    return e.fn.select2.amd = t, n
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var r = t || window.event,
            a = l.call(arguments, 1),
            d = 0,
            c = 0,
            p = 0,
            h = 0,
            f = 0,
            m = 0;
        if (t = e.event.fix(r), t.type = "mousewheel", "detail" in r && (p = -1 * r.detail), "wheelDelta" in r && (p = r.wheelDelta), "wheelDeltaY" in r && (p = r.wheelDeltaY), "wheelDeltaX" in r && (c = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (c = -1 * p, p = 0), d = 0 === p ? c : p, "deltaY" in r && (p = -1 * r.deltaY, d = p), "deltaX" in r && (c = r.deltaX, 0 === p && (d = -1 * c)), 0 !== p || 0 !== c) {
            if (1 === r.deltaMode) {
                var g = e.data(this, "mousewheel-line-height");
                d *= g, p *= g, c *= g
            } else if (2 === r.deltaMode) {
                var _ = e.data(this, "mousewheel-page-height");
                d *= _, p *= _, c *= _
            }
            if (h = Math.max(Math.abs(p), Math.abs(c)), (!o || o > h) && (o = h, i(r, h) && (o /= 40)), i(r, h) && (d /= 40, c /= 40, p /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / o), c = Math[c >= 1 ? "floor" : "ceil"](c / o), p = Math[p >= 1 ? "floor" : "ceil"](p / o), u.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                f = t.clientX - y.left, m = t.clientY - y.top
            }
            return t.deltaX = c, t.deltaY = p, t.deltaFactor = o, t.offsetX = f, t.offsetY = m, t.deltaMode = 0, a.unshift(t, d, c, p), s && clearTimeout(s), s = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
        }
    }

    function n() {
        o = null
    }

    function i(e, t) {
        return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }
    var s, o, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (e.event.fixHooks)
        for (var d = r.length; d;) e.event.fixHooks[r[--d]] = e.event.mouseHooks;
    var u = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
            else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = a.length; n;) this.removeEventListener(a[--n], t, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var n = e(t),
                i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    e.fn.jScrollPane = function(t) {
        function n(t, n) {
            function i(n) {
                var o, a, d, u, c, f, m = !1,
                    g = !1;
                if (N = n, void 0 === F) c = t.scrollTop(), f = t.scrollLeft(), t.css({
                    overflow: "hidden",
                    padding: 0
                }), W = t.innerWidth() + _e, z = t.innerHeight(), t.width(W), F = e('<div class="jspPane" />').css("padding", ge).append(t.children()), R = e('<div class="jspContainer" />').css({
                    width: W + "px",
                    height: z + "px"
                }).append(F).appendTo(t);
                else {
                    if (t.css("width", ""), m = N.stickToBottom && x(), g = N.stickToRight && D(), u = t.innerWidth() + _e != W || t.outerHeight() != z, u && (W = t.innerWidth() + _e, z = t.innerHeight(), R.css({
                            width: W + "px",
                            height: z + "px"
                        })), !u && ye == q && F.outerHeight() == B) return void t.width(W);
                    ye = q, F.css("width", ""), t.width(W), R.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                F.css("overflow", "auto"), q = n.contentWidth ? n.contentWidth : F[0].scrollWidth, B = F[0].scrollHeight, F.css("overflow", ""), U = q / W, V = B / z, G = V > 1, X = U > 1, X || G ? (t.addClass("jspScrollable"), o = N.maintainPosition && (K || te), o && (a = L(), d = T()), s(), r(), l(), o && (M(g ? q - W : a, !1), w(m ? B - z : d, !1)), E(), S(), P(), N.enableKeyboardNavigation && j(), N.clickOnTrack && p(), O(), N.hijackInternalLinks && I()) : (t.removeClass("jspScrollable"), F.css({
                    top: 0,
                    left: 0,
                    width: R.width() - _e
                }), Y(), A(), H(), h()), N.autoReinitialise && !me ? me = setInterval(function() {
                    i(N)
                }, N.autoReinitialiseDelay) : !N.autoReinitialise && me && clearInterval(me), c && t.scrollTop(0) && w(c, !1), f && t.scrollLeft(0) && M(f, !1), t.trigger("jsp-initialised", [X || G])
            }

            function s() {
                G && (R.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), ne = R.find(">.jspVerticalBar"), ie = ne.find(">.jspTrack"), J = ie.find(">.jspDrag"), N.showArrows && (ae = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", u(0, -1)).bind("click.jsp", C), le = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", u(0, 1)).bind("click.jsp", C), N.arrowScrollOnHover && (ae.bind("mouseover.jsp", u(0, -1, ae)), le.bind("mouseover.jsp", u(0, 1, le))), d(ie, N.verticalArrowPositions, ae, le)), oe = z, R.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                    oe -= e(this).outerHeight()
                }), J.hover(function() {
                    J.addClass("jspHover")
                }, function() {
                    J.removeClass("jspHover")
                }).bind("mousedown.jsp", function(t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", C), J.addClass("jspActive");
                    var n = t.pageY - J.position().top;
                    return e("html").bind("mousemove.jsp", function(e) {
                        m(e.pageY - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", f), !1
                }), o())
            }

            function o() {
                ie.height(oe + "px"), K = 0, se = N.verticalGutter + ie.outerWidth(), F.width(W - se - _e);
                try {
                    0 === ne.position().left && F.css("margin-left", se + "px")
                } catch (e) {}
            }

            function r() {
                X && (R.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), de = R.find(">.jspHorizontalBar"), ue = de.find(">.jspTrack"), Z = ue.find(">.jspDrag"), N.showArrows && (he = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", u(-1, 0)).bind("click.jsp", C), fe = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", u(1, 0)).bind("click.jsp", C), N.arrowScrollOnHover && (he.bind("mouseover.jsp", u(-1, 0, he)), fe.bind("mouseover.jsp", u(1, 0, fe))), d(ue, N.horizontalArrowPositions, he, fe)), Z.hover(function() {
                    Z.addClass("jspHover")
                }, function() {
                    Z.removeClass("jspHover")
                }).bind("mousedown.jsp", function(t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", C), Z.addClass("jspActive");
                    var n = t.pageX - Z.position().left;
                    return e("html").bind("mousemove.jsp", function(e) {
                        _(e.pageX - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", f), !1
                }), ce = R.innerWidth(), a())
            }

            function a() {
                R.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    ce -= e(this).outerWidth()
                }), ue.width(ce + "px"), te = 0
            }

            function l() {
                if (X && G) {
                    var t = ue.outerHeight(),
                        n = ie.outerWidth();
                    oe -= t, e(de).find(">.jspCap:visible,>.jspArrow").each(function() {
                        ce += e(this).outerWidth()
                    }), ce -= n, z -= n, W -= t, ue.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), o(), a()
                }
                X && F.width(R.outerWidth() - _e + "px"), B = F.outerHeight(), V = B / z, X && (pe = Math.ceil(1 / U * ce), pe > N.horizontalDragMaxWidth ? pe = N.horizontalDragMaxWidth : pe < N.horizontalDragMinWidth && (pe = N.horizontalDragMinWidth), Z.width(pe + "px"), ee = ce - pe, y(te)), G && (re = Math.ceil(1 / V * oe), re > N.verticalDragMaxHeight ? re = N.verticalDragMaxHeight : re < N.verticalDragMinHeight && (re = N.verticalDragMinHeight), J.height(re + "px"), Q = oe - re, g(K))
            }

            function d(e, t, n, i) {
                var s, o = "before",
                    r = "after";
                "os" == t && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == o ? r = t : t == r && (o = t, s = n, n = i, i = s), e[o](n)[r](i)
            }

            function u(e, t, n) {
                return function() {
                    return c(e, t, this, n), this.blur(), !1
                }
            }

            function c(t, n, i, s) {
                i = e(i).addClass("jspActive");
                var o, r, a = !0,
                    l = function() {
                        0 !== t && ve.scrollByX(t * N.arrowButtonSpeed), 0 !== n && ve.scrollByY(n * N.arrowButtonSpeed), r = setTimeout(l, a ? N.initialDelay : N.arrowRepeatFreq), a = !1
                    };
                l(), o = s ? "mouseout.jsp" : "mouseup.jsp", s = s || e("html"), s.bind(o, function() {
                    i.removeClass("jspActive"), r && clearTimeout(r), r = null, s.unbind(o)
                })
            }

            function p() {
                h(), G && ie.bind("mousedown.jsp", function(t) {
                    if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                        var n, i = e(this),
                            s = i.offset(),
                            o = t.pageY - s.top - K,
                            r = !0,
                            a = function() {
                                var e = i.offset(),
                                    s = t.pageY - e.top - re / 2,
                                    d = z * N.scrollPagePercent,
                                    u = Q * d / (B - z);
                                if (0 > o) K - u > s ? ve.scrollByY(-d) : m(s);
                                else {
                                    if (!(o > 0)) return void l();
                                    s > K + u ? ve.scrollByY(d) : m(s)
                                }
                                n = setTimeout(a, r ? N.initialDelay : N.trackClickRepeatFreq), r = !1
                            },
                            l = function() {
                                n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", l)
                            };
                        return a(), e(document).bind("mouseup.jsp", l), !1
                    }
                }), X && ue.bind("mousedown.jsp", function(t) {
                    if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                        var n, i = e(this),
                            s = i.offset(),
                            o = t.pageX - s.left - te,
                            r = !0,
                            a = function() {
                                var e = i.offset(),
                                    s = t.pageX - e.left - pe / 2,
                                    d = W * N.scrollPagePercent,
                                    u = ee * d / (q - W);
                                if (0 > o) te - u > s ? ve.scrollByX(-d) : _(s);
                                else {
                                    if (!(o > 0)) return void l();
                                    s > te + u ? ve.scrollByX(d) : _(s)
                                }
                                n = setTimeout(a, r ? N.initialDelay : N.trackClickRepeatFreq), r = !1
                            },
                            l = function() {
                                n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", l)
                            };
                        return a(), e(document).bind("mouseup.jsp", l), !1
                    }
                })
            }

            function h() {
                ue && ue.unbind("mousedown.jsp"), ie && ie.unbind("mousedown.jsp")
            }

            function f() {
                e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), J && J.removeClass("jspActive"), Z && Z.removeClass("jspActive")
            }

            function m(e, t) {
                G && (0 > e ? e = 0 : e > Q && (e = Q), void 0 === t && (t = N.animateScroll), t ? ve.animate(J, "top", e, g) : (J.css("top", e), g(e)))
            }

            function g(e) {
                void 0 === e && (e = J.position().top), R.scrollTop(0), K = e || 0;
                var n = 0 === K,
                    i = K == Q,
                    s = e / Q,
                    o = -s * (B - z);
                (be != n || Me != i) && (be = n, Me = i, t.trigger("jsp-arrow-change", [be, Me, we, ke])), v(n, i), F.css("top", o), t.trigger("jsp-scroll-y", [-o, n, i]).trigger("scroll")
            }

            function _(e, t) {
                X && (0 > e ? e = 0 : e > ee && (e = ee), void 0 === t && (t = N.animateScroll), t ? ve.animate(Z, "left", e, y) : (Z.css("left", e), y(e)))
            }

            function y(e) {
                void 0 === e && (e = Z.position().left), R.scrollTop(0), te = e || 0;
                var n = 0 === te,
                    i = te == ee,
                    s = e / ee,
                    o = -s * (q - W);
                (we != n || ke != i) && (we = n, ke = i, t.trigger("jsp-arrow-change", [be, Me, we, ke])), b(n, i), F.css("left", o), t.trigger("jsp-scroll-x", [-o, n, i]).trigger("scroll")
            }

            function v(e, t) {
                N.showArrows && (ae[e ? "addClass" : "removeClass"]("jspDisabled"), le[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function b(e, t) {
                N.showArrows && (he[e ? "addClass" : "removeClass"]("jspDisabled"), fe[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function w(e, t) {
                var n = e / (B - z);
                m(n * Q, t)
            }

            function M(e, t) {
                var n = e / (q - W);
                _(n * ee, t)
            }

            function k(t, n, i) {
                var s, o, r, a, l, d, u, c, p, h = 0,
                    f = 0;
                try {
                    s = e(t)
                } catch (m) {
                    return
                }
                for (o = s.outerHeight(), r = s.outerWidth(), R.scrollTop(0), R.scrollLeft(0); !s.is(".jspPane");)
                    if (h += s.position().top, f += s.position().left, s = s.offsetParent(), /^body|html$/i.test(s[0].nodeName)) return;
                a = T(), d = a + z, a > h || n ? c = h - N.horizontalGutter : h + o > d && (c = h - z + o + N.horizontalGutter), isNaN(c) || w(c, i), l = L(), u = l + W, l > f || n ? p = f - N.horizontalGutter : f + r > u && (p = f - W + r + N.horizontalGutter), isNaN(p) || M(p, i)
            }

            function L() {
                return -F.position().left
            }

            function T() {
                return -F.position().top
            }

            function x() {
                var e = B - z;
                return e > 20 && e - T() < 10
            }

            function D() {
                var e = q - W;
                return e > 20 && e - L() < 10
            }

            function S() {
                R.unbind(Te).bind(Te, function(e, t, n, i) {
                    te || (te = 0), K || (K = 0);
                    var s = te,
                        o = K,
                        r = e.deltaFactor || N.mouseWheelSpeed;
                    return ve.scrollBy(n * r, -i * r, !1), s == te && o == K
                })
            }

            function Y() {
                R.unbind(Te)
            }

            function C() {
                return !1
            }

            function E() {
                F.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(e) {
                    k(e.target, !1)
                })
            }

            function A() {
                F.find(":input,a").unbind("focus.jsp")
            }

            function j() {
                function n() {
                    var e = te,
                        t = K;
                    switch (i) {
                        case 40:
                            ve.scrollByY(N.keyboardSpeed, !1);
                            break;
                        case 38:
                            ve.scrollByY(-N.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            ve.scrollByY(z * N.scrollPagePercent, !1);
                            break;
                        case 33:
                            ve.scrollByY(-z * N.scrollPagePercent, !1);
                            break;
                        case 39:
                            ve.scrollByX(N.keyboardSpeed, !1);
                            break;
                        case 37:
                            ve.scrollByX(-N.keyboardSpeed, !1)
                    }
                    return s = e != te || t != K
                }
                var i, s, o = [];
                X && o.push(de[0]), G && o.push(ne[0]), F.bind("focus.jsp", function() {
                    t.focus()
                }), t.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(t) {
                    if (t.target === this || o.length && e(t.target).closest(o).length) {
                        var r = te,
                            a = K;
                        switch (t.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                i = t.keyCode, n();
                                break;
                            case 35:
                                w(B - z), i = null;
                                break;
                            case 36:
                                w(0), i = null
                        }
                        return s = t.keyCode == i && r != te || a != K, !s
                    }
                }).bind("keypress.jsp", function(e) {
                    return e.keyCode == i && n(), !s
                }), N.hideFocus ? (t.css("outline", "none"), "hideFocus" in R[0] && t.attr("hideFocus", !0)) : (t.css("outline", ""), "hideFocus" in R[0] && t.attr("hideFocus", !1))
            }

            function H() {
                t.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), F.unbind(".jsp")
            }

            function O() {
                if (location.hash && location.hash.length > 1) {
                    var t, n, i = escape(location.hash.substr(1));
                    try {
                        t = e("#" + i + ', a[name="' + i + '"]')
                    } catch (s) {
                        return
                    }
                    t.length && F.find(i) && (0 === R.scrollTop() ? n = setInterval(function() {
                        R.scrollTop() > 0 && (k(t, !0), e(document).scrollTop(R.position().top), clearInterval(n))
                    }, 50) : (k(t, !0), e(document).scrollTop(R.position().top)))
                }
            }

            function I() {
                e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function(t) {
                    var n, i, s, o, r, a, l = this.href.substr(0, this.href.indexOf("#")),
                        d = location.href;
                    if (-1 !== location.href.indexOf("#") && (d = location.href.substr(0, location.href.indexOf("#"))), l === d) {
                        n = escape(this.href.substr(this.href.indexOf("#") + 1));
                        try {
                            i = e("#" + n + ', a[name="' + n + '"]')
                        } catch (u) {
                            return
                        }
                        i.length && (s = i.closest(".jspScrollable"), o = s.data("jsp"), o.scrollToElement(i, !0), s[0].scrollIntoView && (r = e(window).scrollTop(), a = i.offset().top, (r > a || a > r + e(window).height()) && s[0].scrollIntoView()), t.preventDefault())
                    }
                }))
            }

            function P() {
                var e, t, n, i, s, o = !1;
                R.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(r) {
                    var a = r.originalEvent.touches[0];
                    e = L(), t = T(), n = a.pageX, i = a.pageY, s = !1, o = !0
                }).bind("touchmove.jsp", function(r) {
                    if (o) {
                        var a = r.originalEvent.touches[0],
                            l = te,
                            d = K;
                        return ve.scrollTo(e + n - a.pageX, t + i - a.pageY), s = s || Math.abs(n - a.pageX) > 5 || Math.abs(i - a.pageY) > 5, l == te && d == K
                    }
                }).bind("touchend.jsp", function(e) {
                    o = !1
                }).bind("click.jsp-touchclick", function(e) {
                    return s ? (s = !1, !1) : void 0
                })
            }

            function $() {
                var e = T(),
                    n = L();
                t.removeClass("jspScrollable").unbind(".jsp"), F.unbind(".jsp"), t.replaceWith(Le.append(F.children())), Le.scrollTop(e), Le.scrollLeft(n), me && clearInterval(me)
            }
            var N, F, W, z, R, q, B, U, V, G, X, J, Q, K, Z, ee, te, ne, ie, se, oe, re, ae, le, de, ue, ce, pe, he, fe, me, ge, _e, ye, ve = this,
                be = !0,
                we = !0,
                Me = !1,
                ke = !1,
                Le = t.clone(!1, !1).empty(),
                Te = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            "border-box" === t.css("box-sizing") ? (ge = 0, _e = 0) : (ge = t.css("paddingTop") + " " + t.css("paddingRight") + " " + t.css("paddingBottom") + " " + t.css("paddingLeft"), _e = (parseInt(t.css("paddingLeft"), 10) || 0) + (parseInt(t.css("paddingRight"), 10) || 0)), e.extend(ve, {
                reinitialise: function(t) {
                    t = e.extend({}, N, t), i(t)
                },
                scrollToElement: function(e, t, n) {
                    k(e, t, n)
                },
                scrollTo: function(e, t, n) {
                    M(e, n), w(t, n)
                },
                scrollToX: function(e, t) {
                    M(e, t)
                },
                scrollToY: function(e, t) {
                    w(e, t)
                },
                scrollToPercentX: function(e, t) {
                    M(e * (q - W), t)
                },
                scrollToPercentY: function(e, t) {
                    w(e * (B - z), t)
                },
                scrollBy: function(e, t, n) {
                    ve.scrollByX(e, n), ve.scrollByY(t, n)
                },
                scrollByX: function(e, t) {
                    var n = L() + Math[0 > e ? "floor" : "ceil"](e),
                        i = n / (q - W);
                    _(i * ee, t)
                },
                scrollByY: function(e, t) {
                    var n = T() + Math[0 > e ? "floor" : "ceil"](e),
                        i = n / (B - z);
                    m(i * Q, t)
                },
                positionDragX: function(e, t) {
                    _(e, t)
                },
                positionDragY: function(e, t) {
                    m(e, t)
                },
                animate: function(e, t, n, i) {
                    var s = {};
                    s[t] = n, e.animate(s, {
                        duration: N.animateDuration,
                        easing: N.animateEase,
                        queue: !1,
                        step: i
                    })
                },
                getContentPositionX: function() {
                    return L()
                },
                getContentPositionY: function() {
                    return T()
                },
                getContentWidth: function() {
                    return q
                },
                getContentHeight: function() {
                    return B
                },
                getPercentScrolledX: function() {
                    return L() / (q - W)
                },
                getPercentScrolledY: function() {
                    return T() / (B - z)
                },
                getIsScrollableH: function() {
                    return X
                },
                getIsScrollableV: function() {
                    return G
                },
                getContentPane: function() {
                    return F
                },
                scrollToBottom: function(e) {
                    m(Q, e)
                },
                hijackInternalLinks: e.noop,
                destroy: function() {
                    $();
                }
            }), i(n)
        }
        return t = e.extend({}, e.fn.jScrollPane.defaults, t), e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            t[this] = t[this] || t.speed
        }), this.each(function() {
            var i = e(this),
                s = i.data("jsp");
            s ? s.reinitialise(t) : (e("script", i).filter('[type="text/javascript"],:not([type])').remove(), s = new n(i, t), i.data("jsp", s))
        })
    }, e.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: void 0,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
}), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, n) {
        return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n
    } : e(jQuery)
}(function(e) {
    window.Typeahead = {
        version: "2.3.2"
    };
    var t = {
            input: null,
            minLength: 2,
            maxItem: 8,
            dynamic: !1,
            delay: 300,
            order: null,
            offset: !1,
            hint: !1,
            accent: !1,
            highlight: !0,
            group: !1,
            groupOrder: null,
            maxItemPerGroup: null,
            dropdownFilter: !1,
            dynamicFilter: null,
            backdrop: !1,
            backdropOnFocus: !1,
            cache: !1,
            ttl: 36e5,
            compression: !1,
            suggestion: !1,
            searchOnFocus: !1,
            resultContainer: null,
            generateOnLoad: null,
            mustSelectItem: !1,
            href: null,
            display: ["display"],
            template: null,
            correlativeTemplate: !1,
            emptyTemplate: !1,
            filter: !0,
            matcher: null,
            source: null,
            callback: {
                onInit: null,
                onReady: null,
                onShowLayout: null,
                onHideLayout: null,
                onSearch: null,
                onResult: null,
                onLayoutBuiltBefore: null,
                onLayoutBuiltAfter: null,
                onNavigateBefore: null,
                onNavigateAfter: null,
                onMouseEnter: null,
                onMouseLeave: null,
                onClickBefore: null,
                onClickAfter: null,
                onSendRequest: null,
                onReceiveRequest: null,
                onPopulateSource: null,
                onCacheSave: null,
                onSubmit: null
            },
            selector: {
                container: "typeahead-container",
                result: "typeahead-result",
                list: "typeahead-list",
                group: "typeahead-group",
                item: "typeahead-item",
                empty: "typeahead-empty",
                display: "typeahead-display",
                query: "typeahead-query",
                filter: "typeahead-filter",
                filterButton: "typeahead-filter-button",
                filterValue: "typeahead-filter-value",
                dropdown: "typeahead-dropdown",
                dropdownCaret: "typeahead-caret",
                button: "typeahead-button",
                backdrop: "typeahead-backdrop",
                hint: "typeahead-hint"
            },
            debug: !1
        },
        n = ".typeahead",
        i = {
            from: "ãàáäâẽèéëêìíïîõòóöôùúüûñç",
            to: "aaaaaeeeeeiiiiooooouuuunc"
        },
        s = ~navigator.appVersion.indexOf("MSIE 9."),
        o = function(e, t) {
            this.rawQuery = "", this.query = e.val() || "", this.tmpSource = {}, this.source = {}, this.isGenerated = null, this.generatedGroupCount = 0, this.groupCount = 0, this.groupBy = "group", this.result = {}, this.resultCount = 0, this.resultCountPerGroup = {}, this.options = t, this.node = e, this.container = null, this.resultContainer = null, this.item = null, this.xhr = {}, this.hintIndex = null, this.filters = {
                dropdown: {},
                dynamic: {}
            }, this.requests = {}, this.backdrop = {}, this.hint = {}, this.__construct()
        };
    o.prototype = {
        extendOptions: function() {
            this.options.dynamic && (this.options.cache = !1, this.options.compression = !1), this.options.cache && (this.options.cache = function(e) {
                var t, n = ["localStorage", "sessionStorage"];
                if (e === !0) e = "localStorage";
                else if ("string" == typeof e && !~n.indexOf(e)) return !1;
                t = "undefined" != typeof window[e];
                try {
                    window[e].setItem("typeahead", "typeahead"), window[e].removeItem("typeahead")
                } catch (i) {
                    t = !1
                }
                return t && e || !1
            }.call(this, this.options.cache)), this.options.compression && ("object" == typeof LZString && this.options.cache || (this.options.compression = !1)), "undefined" == typeof this.options.maxItem || /^\d+$/.test(this.options.maxItem) && 0 !== this.options.maxItem || (this.options.maxItem = 1 / 0), this.options.maxItemPerGroup && !/^\d+$/.test(this.options.maxItemPerGroup) && (this.options.maxItemPerGroup = null), !this.options.display || this.options.display instanceof Array || (this.options.display = [this.options.display]), !this.options.group || this.options.group instanceof Array || (this.options.group = [this.options.group]), this.options.highlight && !~["any", !0].indexOf(this.options.highlight) && (this.options.highlight = !1), !this.options.dynamicFilter || this.options.dynamicFilter instanceof Array || (this.options.dynamicFilter = [this.options.dynamicFilter]), this.options.accent && ("object" == typeof this.options.accent ? this.options.accent.from && this.options.accent.to && this.options.accent.from.length === this.options.accent.to.length : this.options.accent = i), this.options.resultContainer && ("string" == typeof this.options.resultContainer && (this.options.resultContainer = e(this.options.resultContainer)), this.options.resultContainer instanceof jQuery && this.options.resultContainer[0] && (this.resultContainer = this.options.resultContainer)), this.options.group && "string" == typeof this.options.group[0] && this.options.maxItemPerGroup && (this.groupBy = this.options.group[0]), this.options.callback && this.options.callback.onClick && (this.options.callback.onClickBefore = this.options.callback.onClick, delete this.options.callback.onClick), this.options.callback && this.options.callback.onNavigate && (this.options.callback.onNavigateBefore = this.options.callback.onNavigate, delete this.options.callback.onNavigate), this.options = e.extend(!0, {}, t, this.options)
        },
        unifySourceFormat: function() {
            if (this.options.source instanceof Array) return this.options.source = {
                group: {
                    data: this.options.source
                }
            }, this.groupCount += 1, !0;
            ("undefined" != typeof this.options.source.data || "undefined" != typeof this.options.source.url) && (this.options.source = {
                group: this.options.source
            });
            var e;
            for (var t in this.options.source)
                if (this.options.source.hasOwnProperty(t)) {
                    if (e = this.options.source[t], ("string" == typeof e || e instanceof Array) && (e = {
                            url: e
                        }), !e.data && !e.url) return !1;
                    !e.display || e.display instanceof Array || (e.display = [e.display]), e.ignore && (e.ignore instanceof RegExp || delete e.ignore), this.options.source[t] = e, this.groupCount += 1
                } return !0
        },
        init: function() {
            this.helper.executeCallback.call(this, this.options.callback.onInit, [this.node]), this.container = this.node.closest("." + this.options.selector.container)
        },
        delegateEvents: function() {
            var t = this,
                i = ["focus" + n, "input" + n, "propertychange" + n, "keydown" + n, "keyup" + n, "dynamic" + n, "generateOnLoad" + n];
            this.container.off(n).on("click" + n + " touchstart" + n, function(n) {
                n.stopPropagation(), t.options.dropdownFilter && t.container.hasClass("filter") && !e(n.target).closest("." + t.options.selector.dropdown.replace(" ", "."))[0] && t.container.removeClass("filter")
            }), this.node.closest("form").on("submit", function(e) {
                return t.options.mustSelectItem && t.helper.isEmpty(t.item) ? void e.preventDefault() : (t.hideLayout(), t.rawQuery = "", t.query = "", t.helper.executeCallback.call(t, t.options.callback.onSubmit, [t.node, this, t.item, e]) ? !1 : void 0)
            });
            var o = !1;
            this.node.off(n).on(i.join(" "), function(e) {
                switch (e.type) {
                    case "focus":
                        t.options.backdropOnFocus && (t.buildBackdropLayout(), t.showLayout());
                    case "generateOnLoad":
                        t.options.searchOnFocus && t.query.length >= t.options.minLength && (t.isGenerated ? t.showLayout() : null === t.isGenerated && t.generateSource());
                    case "keydown":
                        null !== t.isGenerated || t.options.dynamic || t.generateSource(), e.keyCode && ~[9, 13, 27, 38, 39, 40].indexOf(e.keyCode) && (o = !0, t.navigate(e));
                        break;
                    case "keyup":
                        s && t.node[0].value.replace(/^\s+/, "").toString().length < t.query.length && t.node.trigger("input" + n);
                        break;
                    case "propertychange":
                        if (o) {
                            o = !1;
                            break
                        }
                        case "input":
                            if (t.rawQuery = t.node[0].value.toString(), t.query = t.rawQuery.replace(/^\s+/, ""), t.options.hint && t.hint.container && "" !== t.hint.container.val() && 0 !== t.hint.container.val().indexOf(t.rawQuery) && t.hint.container.val(""), t.options.dynamic) return t.isGenerated = null, void t.helper.typeWatch(function() {
                                t.query.length >= t.options.minLength ? t.generateSource() : t.hideLayout()
                            }, t.options.delay);
                        case "dynamic":
                            if (!t.isGenerated) break;
                            if (t.searchResult(), t.query.length < t.options.minLength) {
                                t.hideLayout();
                                break
                            }
                            t.buildLayout(), t.result.length > 0 || t.options.emptyTemplate ? t.showLayout() : t.hideLayout()
                }
            }), this.options.generateOnLoad && this.node.trigger("generateOnLoad" + n)
        },
        generateSource: function() {
            if (!this.isGenerated || this.options.dynamic) {
                if (this.generatedGroupCount = 0, this.isGenerated = !1, !this.helper.isEmpty(this.xhr)) {
                    for (var e in this.xhr) this.xhr.hasOwnProperty(e) && this.xhr[e].abort();
                    this.xhr = {}
                }
                var t, n, i, s;
                for (t in this.options.source)
                    if (this.options.source.hasOwnProperty(t)) {
                        if (n = this.options.source[t], this.options.cache && (i = window[this.options.cache].getItem("TYPEAHEAD_" + this.node.selector + ":" + t))) {
                            this.options.compression && (i = LZString.decompressFromUTF16(i)), s = !1;
                            try {
                                i = JSON.parse(i + ""), i.data && i.ttl > (new Date).getTime() ? (this.populateSource(i.data, t), s = !0) : window[this.options.cache].removeItem("TYPEAHEAD_" + this.node.selector + ":" + t)
                            } catch (o) {}
                            if (s) continue
                        }!n.data || n.url ? n.url && (this.requests[t] || (this.requests[t] = this.generateRequestObject(t))) : this.populateSource("function" == typeof n.data && n.data() || n.data, t)
                    } this.handleRequests()
            }
        },
        generateRequestObject: function(t) {
            var n = this,
                i = this.options.source[t];
            i.url instanceof Array || (i.url = [i.url]);
            var s = {
                request: {
                    url: null,
                    dataType: "json",
                    beforeSend: function(e, s) {
                        n.xhr[t] = e;
                        var o = n.requests[t].extra.beforeSend || i.url[0].beforeSend;
                        "function" == typeof o && o.apply(null, arguments)
                    }
                },
                extra: {
                    path: null,
                    group: t,
                    callback: {
                        done: null,
                        fail: null,
                        complete: null,
                        always: null
                    }
                },
                validForGroup: [t]
            };
            Object.defineProperty(s.request, "beforeSend", {
                writable: !1
            }), i.url[0] instanceof Object ? (i.url[0].callback && (s.extra.callback = i.url[0].callback, delete i.url[0].callback), s.request = e.extend(!0, s.request, i.url[0])) : "string" == typeof i.url[0] && (s.request.url = i.url[0]), i.url[1] && "string" == typeof i.url[1] && (s.extra.path = i.url[1]), "jsonp" === s.request.dataType.toLowerCase() && (s.request.jsonpCallback = "callback_" + t);
            var o;
            for (var r in this.requests)
                if (this.requests.hasOwnProperty(r) && (o = JSON.stringify(this.requests[r].request), o === JSON.stringify(s.request))) {
                    this.requests[r].validForGroup.push(t), s.isDuplicated = !0, delete s.validForGroup;
                    break
                } return s
        },
        handleRequests: function() {
            var t = this,
                n = Object.keys(this.requests).length;
            this.helper.executeCallback.call(this, this.options.callback.onSendRequest, [this.node, this.query]);
            for (var i in this.requests) this.requests.hasOwnProperty(i) && (this.requests[i].isDuplicated || ! function(i, s) {
                if ("function" == typeof t.options.source[i].url[0]) {
                    var o = t.options.source[i].url[0].call(t, t.query);
                    if (s.request = e.extend(!0, s.request, o), "object" != typeof s.request || !s.request.url) return;
                    o.beforeSend && (t.requests[i].extra.beforeSend = o.beforeSend)
                }
                var r, a = !1;
                if (~s.request.url.indexOf("{{query}}") && (a || (s = e.extend(!0, {}, s), a = !0), s.request.url = s.request.url.replace("{{query}}", t.query.sanitize())), s.request.data)
                    for (var l in s.request.data)
                        if (s.request.data.hasOwnProperty(l) && ~String(s.request.data[l]).indexOf("{{query}}")) {
                            a || (s = e.extend(!0, {}, s), a = !0), s.request.data[l] = s.request.data[l].replace("{{query}}", t.query.sanitize());
                            break
                        } e.ajax(s.request).done(function(e, i, o) {
                    for (var a, l = 0; l < s.validForGroup.length; l++) r = t.requests[s.validForGroup[l]], r.extra.callback.done instanceof Function && (a = r.extra.callback.done(e, i, o), e = a instanceof Array && a || e), t.populateSource(e, r.extra.group, r.extra.path), n -= 1, 0 === n && t.helper.executeCallback.call(t, t.options.callback.onReceiveRequest, [t.node, t.query])
                }).fail(function(e, n, i) {
                    for (var o = 0; o < s.validForGroup.length; o++) r = t.requests[s.validForGroup[o]], r.extra.callback.fail instanceof Function && r.extra.callback.fail(e, n, i)
                }).then(function(e, n) {
                    for (var i = 0; i < s.validForGroup.length; i++) r = t.requests[s.validForGroup[i]], r.extra.callback.then instanceof Function && r.extra.callback.then(e, n)
                }).always(function(e, n, i) {
                    for (var o = 0; o < s.validForGroup.length; o++) r = t.requests[s.validForGroup[o]], r.extra.callback.always instanceof Function && r.extra.callback.always(e, n, i)
                })
            }(i, this.requests[i]))
        },
        populateSource: function(e, t, n) {
            var i = this,
                s = this.options.source[t],
                o = s.url && s.data;
            e = "string" == typeof n ? this.helper.namespace(n, e) : e, e instanceof Array || (e = []), o && ("function" == typeof o && (o = o()), o instanceof Array && (e = e.concat(o)));
            for (var r, a = s.display ? "compiled" === s.display[0] ? s.display[1] : s.display[0] : "compiled" === this.options.display[0] ? this.options.display[1] : this.options.display[0], l = 0; l < e.length; l++) "string" == typeof e[l] && (r = {}, r[a] = e[l], e[l] = r), e[l].group = t;
            if (this.options.correlativeTemplate) {
                var d = s.template || this.options.template,
                    u = "";
                if ("function" == typeof d && (d = d()), d) {
                    if (this.options.correlativeTemplate instanceof Array)
                        for (var l = 0; l < this.options.correlativeTemplate.length; l++) u += "{{" + this.options.correlativeTemplate[l] + "}} ";
                    else u = d.replace(/<.+?>/g, "");
                    for (var l = 0; l < e.length; l++) e[l].compiled = u.replace(/\{\{([\w\-\.]+)(?:\|(\w+))?}}/g, function(t, n) {
                        return i.helper.namespace(n, e[l], "get", "")
                    }).trim();
                    s.display ? ~s.display.indexOf("compiled") || s.display.unshift("compiled") : ~this.options.display.indexOf("compiled") || this.options.display.unshift("compiled")
                }
            }
            if (this.options.callback.onPopulateSource && (e = this.helper.executeCallback.call(this, this.options.callback.onPopulateSource, [this.node, e, t, n])), this.tmpSource[t] = e, this.options.cache && !window[this.options.cache].getItem("TYPEAHEAD_" + this.node.selector + ":" + t)) {
                this.options.callback.onCacheSave && (e = this.helper.executeCallback.call(this, this.options.callback.onCacheSave, [this.node, e, t, n]));
                var c = JSON.stringify({
                    data: e,
                    ttl: (new Date).getTime() + this.options.ttl
                });
                this.options.compression && (c = LZString.compressToUTF16(c)), window[this.options.cache].setItem("TYPEAHEAD_" + this.node.selector + ":" + t, c)
            }
            this.incrementGeneratedGroup()
        },
        incrementGeneratedGroup: function() {
            if (this.generatedGroupCount += 1, this.groupCount === this.generatedGroupCount) {
                this.isGenerated = !0, this.xhr = {};
                for (var e = Object.keys(this.options.source), t = 0; t < e.length; t++) this.source[e[t]] = this.tmpSource[e[t]];
                this.tmpSource = {}, this.node.trigger("dynamic" + n)
            }
        },
        navigate: function(e) {
            if (this.helper.executeCallback.call(this, this.options.callback.onNavigateBefore, [this.node, this.query, e]), ~[9, 27].indexOf(e.keyCode)) return this.query.length || 27 !== e.keyCode || this.node.blur(), void this.hideLayout();
            if (this.isGenerated && this.result.length) {
                var t = this.resultContainer.find("> ul > li:not([data-search-group])"),
                    n = t.filter(".active"),
                    i = n[0] && t.index(n) || null,
                    s = null;
                if (13 === e.keyCode) {
                    if (n.length > 0) return e.preventDefault(), void n.find("a:first")[0].click();
                    if (this.options.mustSelectItem && this.helper.isEmpty(this.item)) return;
                    return void this.hideLayout()
                }
                if (39 === e.keyCode) return void(i ? t.eq(i).find("a:first")[0].click() : this.options.hint && "" !== this.hint.container.val() && this.helper.getCaret(this.node[0]) >= this.query.length && t.find('a[data-index="' + this.hintIndex + '"]')[0].click());
                t.length > 0 && n.removeClass("active"), 38 === e.keyCode ? (e.preventDefault(), n.length > 0 ? i - 1 >= 0 && (s = i - 1, t.eq(s).addClass("active")) : (s = t.length - 1, t.last().addClass("active"))) : 40 === e.keyCode && (e.preventDefault(), n.length > 0 ? i + 1 < t.length && (s = i + 1, t.eq(s).addClass("active")) : (s = 0, t.first().addClass("active"))), e.preventInputChange && ~[38, 40].indexOf(e.keyCode) && this.buildHintLayout(null !== s && s < this.result.length ? [this.result[s]] : null), this.options.hint && this.hint.container && this.hint.container.css("color", e.preventInputChange ? this.hint.css.color : null === s && this.hint.css.color || this.hint.container.css("background-color") || "fff"), this.node.val(null === s || e.preventInputChange ? this.rawQuery : this.result[s][this.result[s].matchedKey]), this.helper.executeCallback.call(this, this.options.callback.onNavigateAfter, [this.node, t, null !== s && t.eq(s).find("a:first") || void 0, null !== s && this.result[s] || void 0, this.query, e])
            }
        },
        searchResult: function(e) {
            if (e || (this.item = {}), this.resetLayout(), this.helper.executeCallback.call(this, this.options.callback.onSearch, [this.node, this.query]), !(this.query.length < this.options.minLength)) {
                var t, n, i, s, o, r, a, l, d, u, c, p, h = this,
                    f = this.options.group && "boolean" != typeof this.options.group[0] ? this.options.group[0] : "group",
                    m = null,
                    g = this.query.toLowerCase(),
                    _ = this.options.maxItemPerGroup,
                    y = this.filters.dynamic && !this.helper.isEmpty(this.filters.dynamic),
                    v = "function" == typeof this.options.matcher && this.options.matcher;
                this.options.accent && (g = this.helper.removeAccent.call(this, g));
                for (t in this.source)
                    if (this.source.hasOwnProperty(t) && (!this.filters.dropdown || "group" !== this.filters.dropdown.key || this.filters.dropdown.value === t)) {
                        r = "undefined" != typeof this.options.source[t].filter ? this.options.source[t].filter : this.options.filter, l = "function" == typeof this.options.source[t].matcher && this.options.source[t].matcher || v;
                        for (var b = 0; b < this.source[t].length && (!(this.result.length >= this.options.maxItem) || this.options.callback.onResult); b++)
                            if (!y || this.dynamicFilter.validate.apply(this, [this.source[t][b]])) {
                                if (n = this.source[t][b], m = "group" === f ? t : n[f], m && !this.result[m] && (this.result[m] = [], this.resultCountPerGroup[m] = 0), _ && "group" === f && this.result[m].length >= _ && !this.options.callback.onResult) break;
                                o = this.options.source[t].display || this.options.display;
                                for (var w = 0; w < o.length; w++) {
                                    if ("function" == typeof r) {
                                        if (a = r.call(this, n, n[o[w]]), void 0 === a) break;
                                        if (!a) continue;
                                        "object" == typeof a && (n = a)
                                    }
                                    if (~[void 0, !0].indexOf(r)) {
                                        if (s = n[o[w]], !s) continue;
                                        if (s = s.toString().toLowerCase(), this.options.accent && (s = this.helper.removeAccent.call(this, s)), i = s.indexOf(g), this.options.correlativeTemplate && "compiled" === o[w] && 0 > i && /\s/.test(g)) {
                                            u = !0, c = g.split(" "), p = s;
                                            for (var M = 0; M < c.length; M++)
                                                if ("" !== c[M]) {
                                                    if (!~p.indexOf(c[M])) {
                                                        u = !1;
                                                        break
                                                    }
                                                    p = p.replace(c[M], "")
                                                }
                                        }
                                        if (0 > i && !u) continue;
                                        if (this.options.offset && 0 !== i) continue;
                                        if (this.options.source[t].ignore && this.options.source[t].ignore.test(s)) continue;
                                        if (l) {
                                            if (d = l.call(this, n, n[o[w]]), void 0 === d) break;
                                            if (!d) continue;
                                            "object" == typeof d && (n = d)
                                        }
                                    }
                                    if (!this.filters.dropdown || this.filters.dropdown.value == n[this.filters.dropdown.key]) {
                                        if (this.resultCount++, this.resultCountPerGroup[m]++, this.resultItemCount < this.options.maxItem) {
                                            if (_ && this.result[m].length >= _) break;
                                            n.matchedKey = o[w], this.result[m].push(n), this.resultItemCount++
                                        }
                                        break
                                    }
                                }
                                if (!this.options.callback.onResult) {
                                    if (this.resultItemCount >= this.options.maxItem) break;
                                    if (_ && this.result[m].length >= _ && "group" === f) break
                                }
                            }
                    } if (this.options.order) {
                    var k, o = [];
                    for (var t in this.result)
                        if (this.result.hasOwnProperty(t)) {
                            for (var w = 0; w < this.result[t].length; w++) k = this.options.source[this.result[t][w].group].display || this.options.display, ~o.indexOf(k[0]) || o.push(k[0]);
                            this.result[t].sort(h.helper.sort(o, "asc" === h.options.order, function(e) {
                                return e.toString().toUpperCase()
                            }))
                        }
                }
                var L, T = [];
                L = "function" == typeof this.options.groupOrder ? this.options.groupOrder.apply(this, [this.node, this.query, this.result, this.resultCount, this.resultCountPerGroup]) : this.options.groupOrder instanceof Array ? this.options.groupOrder : "string" == typeof this.options.groupOrder && ~["asc", "desc"].indexOf(this.options.groupOrder) ? Object.keys(this.result).sort(h.helper.sort([], "asc" === h.options.groupOrder, function(e) {
                    return e.toString().toUpperCase()
                })) : Object.keys(this.result);
                for (var w = 0; w < L.length; w++) T = T.concat(this.result[L[w]] || []);
                this.result = T, this.helper.executeCallback.call(this, this.options.callback.onResult, [this.node, this.query, this.result, this.resultCount, this.resultCountPerGroup])
            }
        },
        buildLayout: function() {
            this.resultContainer || (this.resultContainer = e("<div/>", {
                "class": this.options.selector.result
            }), this.container.append(this.resultContainer));
            var t = this.query.toLowerCase();
            this.options.accent && (t = this.helper.removeAccent.call(this, t));
            var n = this,
                i = e("<ul/>", {
                    "class": this.options.selector.list + (n.helper.isEmpty(n.result) ? " empty" : ""),
                    html: function() {
                        if (n.options.emptyTemplate && n.helper.isEmpty(n.result)) {
                            var i = "function" == typeof n.options.emptyTemplate ? n.options.emptyTemplate.call(n, n.query) : n.options.emptyTemplate.replace(/\{\{query}}/gi, n.query.sanitize());
                            return i instanceof jQuery && "LI" === i[0].nodeName ? i : e("<li/>", {
                                "class": n.options.selector.empty,
                                html: e("<a/>", {
                                    href: "javascript:;",
                                    html: i
                                })
                            })
                        }
                        for (var s in n.result) n.result.hasOwnProperty(s) && ! function(i, s, o) {
                            var r, a, l, d, u = s.group,
                                c = [],
                                p = n.options.source[s.group].display || n.options.display,
                                h = n.options.source[s.group].href || n.options.href;
                            n.options.group && (n.options.group[1] ? "function" == typeof n.options.group[1] ? u = n.options.group[1](s) : "string" == typeof n.options.group[1] && (u = n.options.group[1].replace(/(\{\{group}})/gi, s[n.options.group[0]] || u)) : "boolean" != typeof n.options.group[0] && s[n.options.group[0]] && (u = s[n.options.group[0]]), e(o).find('li[data-search-group="' + u + '"]')[0] || e(o).append(e("<li/>", {
                                "class": n.options.selector.group,
                                html: e("<a/>", {
                                    href: "javascript:;",
                                    html: u
                                }),
                                "data-search-group": u
                            }))), r = e("<li/>", {
                                "class": n.options.selector.item,
                                html: e("<a/>", {
                                    href: function() {
                                        return h && ("string" == typeof h ? h = h.replace(/\{\{([\w\-\.]+)(?:\|(\w+))?}}/g, function(e, t, i) {
                                            var o = n.helper.namespace(t, s, "get", "");
                                            return i && "raw" === i ? o : n.helper.slugify.call(n, o)
                                        }) : "function" == typeof h && (h = h(s)), s.href = h), h || "javascript:;"
                                    },
                                    "data-group": u,
                                    "data-index": i,
                                    html: function() {
                                        if (d = s.group && n.options.source[s.group].template || n.options.template) "function" == typeof d && (d = d.call(n, n.query, s)), a = d.replace(/\{\{([\w\-\.]+)(?:\|(\w+))?}}/g, function(e, i, o) {
                                            var r = String(n.helper.namespace(i, s, "get", "")).sanitize();
                                            return o && "raw" === o || n.options.highlight === !0 && t && ~p.indexOf(i) && (r = n.helper.highlight.call(n, r, t.split(" "), n.options.accent)), r
                                        });
                                        else {
                                            for (var i = 0; i < p.length; i++) c.push(s[p[i]]);
                                            a = '<span class="' + n.options.selector.display + '">' + String(c.join(" ")).sanitize() + "</span>"
                                        }(n.options.highlight === !0 && t && !d || "any" === n.options.highlight) && (a = n.helper.highlight.call(n, a, t.split(" "), n.options.accent)), e(this).append(a)
                                    },
                                    click: function(t) {
                                        return n.options.mustSelectItem && n.helper.isEmpty(s) ? void t.preventDefault() : (n.item = s, n.helper.executeCallback.call(n, n.options.callback.onClickBefore, [n.node, e(this), s, t]), void(t.originalEvent && t.originalEvent.defaultPrevented || t.isDefaultPrevented() || (n.query = n.rawQuery = s[s.matchedKey].toString(), n.node.val(n.query).focus(), n.searchResult(!0), n.buildLayout(), n.hideLayout(), n.helper.executeCallback.call(n, n.options.callback.onClickAfter, [n.node, e(this), s, t]))))
                                    },
                                    mouseenter: function(t) {
                                        e(this).closest("ul").find("li.active").removeClass("active"), e(this).closest("li").addClass("active"), n.helper.executeCallback.call(n, n.options.callback.onMouseEnter, [n.node, e(this), s, t])
                                    },
                                    mouseleave: function(t) {
                                        e(this).closest("li").removeClass("active"), n.helper.executeCallback.call(n, n.options.callback.onMouseLeave, [n.node, e(this), s, t])
                                    }
                                })
                            }), n.options.group ? (l = e(o).find('a[data-group="' + u + '"]:last').closest("li"), l[0] || (l = e(o).find('li[data-search-group="' + u + '"]')), e(r).insertAfter(l)) : e(o).append(r)
                        }(s, n.result[s], this)
                    }
                });
            if (this.buildBackdropLayout(), this.buildHintLayout(), this.options.callback.onLayoutBuiltBefore) {
                var s = this.helper.executeCallback.call(this, this.options.callback.onLayoutBuiltBefore, [this.node, this.query, this.result, i]);
                s instanceof jQuery && (i = s)
            }
            this.resultContainer.html(i), this.options.callback.onLayoutBuiltAfter && this.helper.executeCallback.call(this, this.options.callback.onLayoutBuiltAfter, [this.node, this.query, this.result])
        },
        buildBackdropLayout: function() {
            this.options.backdrop && (this.backdrop.container || (this.backdrop.css = e.extend({
                opacity: .6,
                filter: "alpha(opacity=60)",
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                "z-index": 1040,
                "background-color": "#000"
            }, this.options.backdrop), this.backdrop.container = e("<div/>", {
                "class": this.options.selector.backdrop,
                css: this.backdrop.css
            }).insertAfter(this.container)), this.container.addClass("backdrop").css({
                "z-index": this.backdrop.css["z-index"] + 1,
                position: "relative"
            }))
        },
        buildHintLayout: function(t) {
            if (this.options.hint) {
                var n = this,
                    i = "",
                    t = t || this.result,
                    s = this.query.toLowerCase();
                if (this.options.accent && (s = this.helper.removeAccent.call(this, s)), this.hintIndex = null, this.query.length >= this.options.minLength) {
                    if (this.hint.container || (this.hint.css = e.extend({
                            "border-color": "transparent",
                            position: "absolute",
                            top: 0,
                            display: "inline",
                            "z-index": -1,
                            "float": "none",
                            color: "silver",
                            "box-shadow": "none",
                            cursor: "default",
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "user-select": "none"
                        }, this.options.hint), this.hint.container = e("<input/>", {
                            type: this.node.attr("type"),
                            "class": this.node.attr("class"),
                            readonly: !0,
                            unselectable: "on",
                            tabindex: -1,
                            click: function() {
                                n.node.focus()
                            }
                        }).addClass(this.options.selector.hint).css(this.hint.css).insertAfter(this.node), this.node.parent().css({
                            position: "relative"
                        })), this.hint.container.css("color", this.hint.css.color), s)
                        for (var o, r, a, l = 0; l < t.length; l++) {
                            r = t[l].group, o = this.options.source[r].display || this.options.display;
                            for (var d = 0; d < o.length; d++)
                                if (a = String(t[l][o[d]]).toLowerCase(), this.options.accent && (a = this.helper.removeAccent.call(this, a)), 0 === a.indexOf(s)) {
                                    i = String(t[l][o[d]]), this.hintIndex = l;
                                    break
                                } if (null !== this.hintIndex) break
                        }
                    this.hint.container.val(i.length > 0 && this.rawQuery + i.substring(this.query.length) || "")
                }
            }
        },
        buildDropdownLayout: function() {
            function t(e) {
                "*" === e.value ? delete this.filters.dropdown : this.filters.dropdown = e, this.container.removeClass("filter").find("." + this.options.selector.filterValue).html(e.display || e.value), this.node.trigger("dynamic" + n), this.node.focus()
            }
            if (this.options.dropdownFilter) {
                var i, s = this;
                if ("boolean" == typeof this.options.dropdownFilter) i = "all";
                else if ("string" == typeof this.options.dropdownFilter) i = this.options.dropdownFilter;
                else if (this.options.dropdownFilter instanceof Array)
                    for (var o = 0; o < this.options.dropdownFilter.length; o++)
                        if ("*" === this.options.dropdownFilter[o].value && this.options.dropdownFilter[o].display) {
                            i = this.options.dropdownFilter[o].display;
                            break
                        } e("<span/>", {
                    "class": this.options.selector.filter,
                    html: function() {
                        e(this).append(e("<button/>", {
                            type: "button",
                            "class": s.options.selector.filterButton,
                            html: "<span class='" + s.options.selector.filterValue + "'>" + i + "</span> <span class='" + s.options.selector.dropdownCaret + "'></span>",
                            click: function(e) {
                                e.stopPropagation(), s.container.toggleClass("filter")
                            }
                        })), e(this).append(e("<ul/>", {
                            "class": s.options.selector.dropdown,
                            html: function() {
                                var n = s.options.dropdownFilter;
                                if (~["string", "boolean"].indexOf(typeof s.options.dropdownFilter)) {
                                    n = [];
                                    for (var i in s.options.source) s.options.source.hasOwnProperty(i) && n.push({
                                        key: "group",
                                        value: i
                                    });
                                    n.push({
                                        key: "group",
                                        value: "*",
                                        display: "string" == typeof s.options.dropdownFilter && s.options.dropdownFilter || "All"
                                    })
                                }
                                for (var o = 0; o < n.length; o++) ! function(n, i, o) {
                                    (i.key || "*" === i.value) && i.value && ("*" === i.value && e(o).append(e("<li/>", {
                                        "class": "divider"
                                    })), e(o).append(e("<li/>", {
                                        html: e("<a/>", {
                                            href: "javascript:;",
                                            html: i.display || i.value,
                                            click: function(e) {
                                                e.preventDefault(), t.apply(s, [i])
                                            }
                                        })
                                    })))
                                }(o, n[o], this)
                            }
                        }))
                    }
                }).insertAfter(s.container.find("." + s.options.selector.query))
            }
        },
        dynamicFilter: {
            validate: function(e) {
                var t, n, i = null,
                    s = null;
                for (var o in this.filters.dynamic)
                    if (this.filters.dynamic.hasOwnProperty(o) && (n = ~o.indexOf(".") ? this.helper.namespace(o, e, "get") : e[o], "|" !== this.filters.dynamic[o].modifier || i || (i = n == this.filters.dynamic[o].value || !1), "&" === this.filters.dynamic[o].modifier)) {
                        if (n != this.filters.dynamic[o].value) {
                            s = !1;
                            break
                        }
                        s = !0
                    } return t = i, null !== s && (t = s, s === !0 && null !== i && (t = i)), !!t
            },
            set: function(e, t) {
                var n = e.match(/^([|&])?(.+)/);
                t ? this.filters.dynamic[n[2]] = {
                    modifier: n[1] || "|",
                    value: t
                } : delete this.filters.dynamic[n[2]], this.searchResult(), this.buildLayout()
            },
            bind: function() {
                if (this.options.dynamicFilter)
                    for (var t, i = this, s = 0; s < this.options.dynamicFilter.length; s++) t = this.options.dynamicFilter[s], "string" == typeof t.selector && (t.selector = e(t.selector)), t.selector instanceof jQuery && t.selector[0] && t.key && ! function(e) {
                        e.selector.off(n).on("change" + n, function() {
                            i.dynamicFilter.set.apply(i, [e.key, i.dynamicFilter.getValue(this)])
                        }).trigger("change" + n)
                    }(t)
            },
            getValue: function(e) {
                var t;
                return "SELECT" === e.tagName ? t = e.value : "INPUT" === e.tagName && ("checkbox" === e.type ? t = e.checked || null : "radio" === e.type && e.checked && (t = e.value)), t
            }
        },
        showLayout: function() {
            if (!this.container.hasClass("result") && (this.result.length || this.options.emptyTemplate || this.options.backdropOnFocus)) {
                var t = this;
                e("html").off(n).one("click" + n + " touchstart" + n, function() {
                    t.hideLayout()
                }), this.container.addClass([this.result.length || this.options.emptyTemplate && this.query.length >= this.options.minLength ? "result " : "", this.options.hint && this.query.length >= this.options.minLength ? "hint" : "", this.options.backdrop || this.options.backdropOnFocus ? "backdrop" : ""].join(" ")), this.helper.executeCallback.call(this, this.options.callback.onShowLayout, [this.node, this.query])
            }
        },
        hideLayout: function() {
            this.container.removeClass("result hint filter" + (this.options.backdropOnFocus && e(this.node).is(":focus") ? "" : " backdrop")), this.options.backdropOnFocus && this.container.hasClass("backdrop") || (e("html").off(n), this.helper.executeCallback.call(this, this.options.callback.onHideLayout, [this.node, this.query]))
        },
        resetLayout: function() {
            this.result = {}, this.resultCount = 0, this.resultCountPerGroup = {}, this.resultItemCount = 0, this.resultContainer && this.resultContainer.html(""), this.options.hint && this.hint.container && this.hint.container.val("")
        },
        __construct: function() {
            this.extendOptions(), this.unifySourceFormat() && (this.init(), this.delegateEvents(), this.buildDropdownLayout(), this.dynamicFilter.bind.apply(this), this.helper.executeCallback.call(this, this.options.callback.onReady, [this.node]))
        },
        helper: {
            isEmpty: function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            },
            removeAccent: function(e) {
                if ("string" == typeof e) {
                    var t = this.options.accent || i;
                    return e = e.toLowerCase().replace(new RegExp("[" + t.from + "]", "g"), function(e) {
                        return t.to[t.from.indexOf(e)]
                    })
                }
            },
            slugify: function(e) {
                return e = String(e), "" !== e && (e = this.helper.removeAccent.call(this, e), e = e.replace(/[^-a-z0-9]+/g, "-").replace(/-+/g, "-").trim("-")), e
            },
            sort: function(e, t, n) {
                var i = function(t) {
                    for (var i = 0; i < e.length; i++)
                        if ("undefined" != typeof t[e[i]]) return n(t[e[i]]);
                    return t
                };
                return t = [-1, 1][+!!t],
                    function(e, n) {
                        return e = i(e), n = i(n), t * ((e > n) - (n > e))
                    }
            },
            replaceAt: function(e, t, n, i) {
                return e.substring(0, t) + i + e.substring(t + n)
            },
            highlight: function(e, t, n) {
                e = String(e);
                var i = n && this.helper.removeAccent.call(this, e) || e,
                    s = [];
                t instanceof Array || (t = [t]), t.sort(function(e, t) {
                    return t.length - e.length
                });
                for (var o = t.length - 1; o >= 0; o--) "" !== t[o].trim() ? t[o] = t[o].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : t.splice(o, 1);
                i.replace(new RegExp("(?:" + t.join("|") + ")(?!([^<]+)?>)", "gi"), function(e, t, n) {
                    s.push({
                        offset: n,
                        length: e.length
                    })
                });
                for (var o = s.length - 1; o >= 0; o--) e = this.helper.replaceAt(e, s[o].offset, s[o].length, "<strong>" + e.substr(s[o].offset, s[o].length) + "</strong>");
                return e
            },
            getCaret: function(e) {
                if (e.selectionStart) return e.selectionStart;
                if (document.selection) {
                    e.focus();
                    var t = document.selection.createRange();
                    if (null == t) return 0;
                    var n = e.createTextRange(),
                        i = n.duplicate();
                    return n.moveToBookmark(t.getBookmark()), i.setEndPoint("EndToStart", n), i.text.length
                }
                return 0
            },
            executeCallback: function(e, t) {
                if (!e) return !1;
                var n;
                if ("function" == typeof e) n = e;
                else if (("string" == typeof e || e instanceof Array) && ("string" == typeof e && (e = [e, []]), n = this.helper.namespace(e[0], window), "function" != typeof n)) return !1;
                return n.apply(this, (e[1] || []).concat(t ? t : [])) || !0
            },
            namespace: function(e, t, n, i) {
                if ("string" != typeof e || "" === e) return !1;
                for (var s = e.split("."), o = t || window, n = n || "get", r = i || {}, a = "", l = 0, d = s.length; d > l; l++) {
                    if (a = s[l], "undefined" == typeof o[a]) {
                        if (~["get", "delete"].indexOf(n)) return "undefined" != typeof i ? i : void 0;
                        o[a] = {}
                    }
                    if (~["set", "create", "delete"].indexOf(n) && l === d - 1) {
                        if ("set" !== n && "create" !== n) return delete o[a], !0;
                        o[a] = r
                    }
                    o = o[a]
                }
                return o
            },
            typeWatch: function() {
                var e = 0;
                return function(t, n) {
                    clearTimeout(e), e = setTimeout(t, n)
                }
            }()
        }
    }, e.fn.typeahead = e.typeahead = function(e) {
        return r.typeahead(this, e)
    };
    var r = {
        typeahead: function(t, n) {
            if (n && n.source && "object" == typeof n.source) {
                if ("function" == typeof t) {
                    if (!n.input) return;
                    t = e(n.input)
                }
                if (t.length && "INPUT" === t[0].nodeName)
                    for (var i, s = 0; s < t.length; s++) i = 1 === t.length ? t : e(t.selector.split(",")[s].trim()), window.Typeahead[i.selector || n.input] = new o(i, n)
            }
        }
    };
    "sanitize" in String.prototype || (String.prototype.sanitize = function() {
        var e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        return this.replace(/[&<>"'\/]/g, function(t) {
            return e[t]
        })
    }), window.console = window.console || {
        log: function() {}
    }, "trim" in String.prototype || (String.prototype.trim = function() {
        return this.replace(/^\s+/, "").replace(/\s+$/, "")
    }), "indexOf" in Array.prototype || (Array.prototype.indexOf = function(e, t) {
        void 0 === t && (t = 0), 0 > t && (t += this.length), 0 > t && (t = 0);
        for (var n = this.length; n > t; t++)
            if (t in this && this[t] === e) return t;
        return -1
    }), Object.keys || (Object.keys = function(e) {
        var t, n = [];
        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
        return n
    })
}), ! function(window, document, $, undefined) {
    function _buildRegexFromString(e) {
        function t() {}
        if (!e || "string" != typeof e && !(e instanceof RegExp)) return t(), !1;
        "string" != typeof e && (e = e.toString());
        for (var n, i, s, o = e.charAt(0), r = e.length - 1; r > 0 && /[gimsxeU]/.test(e.charAt(r));) r--;
        e.charAt(r) !== o && (o = null), o && r !== e.length - 1 && (i = e.substr(r + 1, e.length - 1)), n = o ? e.substr(1, r - 1) : e;
        try {
            s = new RegExp(n, i)
        } catch (a) {
            return t(), !1
        }
        return s
    }

    function isEmpty(e) {
        for (var t in e)
            if (e.hasOwnProperty(t)) return !1;
        return !0
    }
    window.Validation = {
        form: [],
        labels: {},
        hasScrolled: !1
    }, "function" != typeof Object.preventExtensions && (Object.preventExtensions = function(e) {
        return e
    });
    var _rules = {
            NOTEMPTY: /\S/,
            INTEGER: /^\d+$/,
            NUMERIC: /^\d+(?:[,\s]\d{3})*(?:\.\d+)?$/,
            MIXED: /^[\w\s-]+$/,
            NAME: /^['a-zãàáäâẽèéëêìíïîõòóöôùúüûñç\s-]+$/i,
            NOSPACE: /^(?!\s)\S*$/,
            TRIM: /^[^\s].*[^\s]$/,
            DATE: /^\d{4}-\d{2}-\d{2}(\s\d{2}:\d{2}(:\d{2})?)?$/,
            EMAIL: /^([^@]+?)@(([a-z0-9]-*)*[a-z0-9]+\.)+([a-z0-9]+)$/i,
            URL: /^(https?:\/\/)?((([a-z0-9]-*)*[a-z0-9]+\.?)*([a-z0-9]+))(\/[\w?=\.-]*)*$/,
            PHONE: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
            OPTIONAL: /\S/,
            COMPARISON: /^\s*([LV])\s*([<>]=?|==|!=)\s*([^<>=!]+?)\s*$/
        },
        _messages = {
            "default": "$ contain error(s).",
            NOTEMPTY: "$ must not be empty.",
            INTEGER: "$ must be an integer.",
            NUMERIC: "$ must be numeric.",
            MIXED: "$ must be letters or numbers (no special characters).",
            NAME: "$ must not contain special characters.",
            NOSPACE: "$ must not contain spaces.",
            TRIM: "$ must not start or end with space character.",
            DATE: "$ is not a valid with format YYYY-MM-DD.",
            EMAIL: "$ is not valid.",
            URL: "$ is not valid.",
            PHONE: "$ is not a valid phone number.",
            "<": "$ must be less than % characters.",
            "<=": "$ must be less or equal to % characters.",
            ">": "$ must be greater than % characters.",
            ">=": "$ must be greater or equal to % characters.",
            "==": "$ must be equal to %",
            "!=": "$ must be different than %"
        },
        _data = {
            validation: "data-validation",
            validationMessage: "data-validation-message",
            regex: "data-validation-regex",
            regexReverse: "data-validation-regex-reverse",
            regexMessage: "data-validation-regex-message",
            group: "data-validation-group",
            label: "data-validation-label",
            errorList: "data-error-list"
        },
        _options = {
            submit: {
                settings: {
                    form: null,
                    display: "inline",
                    insertion: "append",
                    allErrors: !1,
                    trigger: "click",
                    button: "[type='submit']",
                    errorClass: "error",
                    errorListClass: "error-list",
                    errorListContainer: null,
                    inputContainer: null,
                    clear: "focusin",
                    scrollToError: !1
                },
                callback: {
                    onInit: null,
                    onValidate: null,
                    onError: null,
                    onBeforeSubmit: null,
                    onSubmit: null,
                    onAfterSubmit: null
                }
            },
            dynamic: {
                settings: {
                    trigger: null,
                    delay: 300
                },
                callback: {
                    onSuccess: null,
                    onError: null,
                    onComplete: null
                }
            },
            rules: {},
            messages: {},
            labels: {},
            debug: !1
        },
        _supported = {
            submit: {
                settings: {
                    display: ["inline", "block"],
                    insertion: ["append", "prepend"],
                    allErrors: [!0, !1],
                    clear: ["focusin", "keypress", !1],
                    trigger: ["click", "dblclick", "focusout", "hover", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "toggle"]
                }
            },
            dynamic: {
                settings: {
                    trigger: ["focusout", "keydown", "keypress", "keyup"]
                }
            },
            debug: [!0, !1]
        },
        Validation = function(node, options) {
            function extendRules() {
                options.rules = $.extend(!0, {}, _rules, options.rules)
            }

            function extendMessages() {
                options.messages = $.extend(!0, {}, _messages, options.messages)
            }

            function extendOptions() {
                options instanceof Object || (options = {});
                var e = Object.preventExtensions($.extend(!0, {}, _options));
                for (var t in options)
                    if (options.hasOwnProperty(t) && "debug" !== t)
                        if (~["labels", "messages", "rules"].indexOf(t) && options[t] instanceof Object) e[t] = options[t];
                        else if (_options[t] && options[t] instanceof Object)
                    for (var n in options[t])
                        if (options[t].hasOwnProperty(n) && _options[t][n] && options[t][n] instanceof Object) {
                            for (var i in options[t][n]) options[t][n].hasOwnProperty(i) && _supported[t] && _supported[t][n] && _supported[t][n][i] && -1 === $.inArray(options[t][n][i], _supported[t][n][i]) && delete options[t][n][i];
                            e[t] && e[t][n] && (e[t][n] = $.extend(Object.preventExtensions(e[t][n]), options[t][n]))
                        } e.dynamic.settings.trigger && "keypress" === e.dynamic.settings.trigger && "keypress" === e.submit.settings.clear && (e.dynamic.settings.trigger = "keydown"), options = e
            }

            function delegateDynamicValidation() {
                if (!options.dynamic.settings.trigger) return !1;
                if (!node.find("[" + _data.validation + "],[" + _data.regex + "]")[0]) return !1;
                var e = options.dynamic.settings.trigger + delegateSuffix;
                "focusout" !== options.dynamic.settings.trigger && (e += " change" + delegateSuffix + " paste" + delegateSuffix), $.each(node.find("[" + _data.validation + "],[" + _data.regex + "]"), function(t, n) {
                    $(n).unbind(e).on(e, function(e) {
                        if ($(this).is(":disabled")) return !1;
                        var t = this,
                            n = e.keyCode || null;
                        _typeWatch(function() {
                            validateInput(t) ? _executeCallback(options.dynamic.callback.onSuccess, [node, t, n]) : (displayOneError(t.name), _executeCallback(options.dynamic.callback.onError, [node, t, n, errors[t.name]])), _executeCallback(options.dynamic.callback.onComplete, [node, t, n])
                        }, options.dynamic.settings.delay)
                    })
                })
            }

            function delegateValidation() {
                _executeCallback(options.submit.callback.onInit, [node]);
                var e = options.submit.settings.trigger + ".vd";
                return node.find(options.submit.settings.button)[0] ? (node.on("submit", !1), void node.find(options.submit.settings.button).off(".vd").on(e, function(e) {
                    return e.preventDefault(), resetErrors(), _executeCallback(options.submit.callback.onValidate, [node]), validateForm() ? (_executeCallback(options.submit.callback.onBeforeSubmit, [node]), options.submit.callback.onSubmit ? _executeCallback(options.submit.callback.onSubmit, [node, formData]) : submitForm(), _executeCallback(options.submit.callback.onAfterSubmit, [node])) : (displayErrors(), _executeCallback(options.submit.callback.onError, [node, errors, formData])), !1
                })) : !1
            }

            function validateForm() {
                var e = isEmpty(errors);
                return formData = {}, $.each(node.find('input:not([type="submit"]), select, textarea').not(":disabled"), function(t, n) {
                    n = $(n);
                    var i = _getInputValue(n[0]),
                        s = n.attr("name");
                    s && (/\[]$/.test(s) ? (s = s.replace(/\[]$/, ""), formData[s] instanceof Array || (formData[s] = []), formData[s].push(i)) : formData[s] = i), (n.attr(_data.validation) || n.attr(_data.regex)) && (validateInput(n[0], i) || (e = !1))
                }), prepareFormData(), e
            }

            function prepareFormData() {
                var e, t, n = {};
                for (var i in formData)
                    if (formData.hasOwnProperty(i)) {
                        t = 0, e = i.split(/\[(.+?)]/g);
                        for (var s = {}, o = [], r = e.length - 1; r >= 0; r--) "" !== e[r] ? (o.length < 1 ? s[e[r]] = Number(formData[i]) || formData[i] : (s = {}, s[e[r]] = o[o.length - 1]), o.push(s)) : e.splice(r, 1);
                        n = $.extend(!0, n, s)
                    } formData = n
            }

            function validateInput(e, t) {
                var n = $(e).attr("name"),
                    t = t || _getInputValue(e);
                if (!n) return !1;
                var i = n.replace(/]$/, "").split(/]\[|[[\]]/g),
                    s = window.Validation.labels[n] || options.labels[n] || $(e).attr(_data.label) || i[i.length - 1],
                    o = $(e).attr(_data.validation),
                    r = $(e).attr(_data.validationMessage),
                    a = $(e).attr(_data.regex),
                    l = !($(e).attr(_data.regexReverse) === undefined),
                    d = $(e).attr(_data.regexMessage),
                    u = !1;
                if (o && (o = _api._splitValidation(o)), o instanceof Array && o.length > 0) {
                    if ("" === $.trim(t) && ~o.indexOf("OPTIONAL")) return !0;
                    $.each(o, function(e, i) {
                        if (u === !0) return !0;
                        try {
                            validateRule(t, i)
                        } catch (o) {
                            (r || !options.submit.settings.allErrors) && (u = !0), o[0] = r || o[0], registerError(n, o[0].replace("$", s).replace("%", o[1]))
                        }
                    })
                }
                if (a) {
                    var c = _buildRegexFromString(a);
                    if (!(c instanceof RegExp)) return !0;
                    try {
                        validateRule(t, c, l)
                    } catch (p) {
                        p[0] = d || p[0], registerError(n, p[0].replace("$", s))
                    }
                }
                return !errors[n] || errors[n] instanceof Array && 0 === errors[n].length
            }

            function validateRule(value, rule, reversed) {
                if (rule instanceof RegExp) {
                    var isValid = rule.test(value);
                    if (reversed && (isValid = !isValid), !isValid) throw [options.messages["default"], ""]
                } else if (options.rules[rule]) {
                    if (!options.rules[rule].test(value)) throw [options.messages[rule], ""]
                } else {
                    var comparison = rule.match(options.rules.COMPARISON);
                    if (comparison && 4 === comparison.length) {
                        var type = comparison[1],
                            operator = comparison[2],
                            compared = comparison[3],
                            comparedValue;
                        switch (type) {
                            case "L":
                                if (isNaN(compared)) return !1;
                                if (!value || eval(value.length + operator + parseFloat(compared)) === !1) throw [options.messages[operator], compared];
                                break;
                            case "V":
                            default:
                                if (isNaN(compared)) {
                                    if (comparedValue = node.find('[name="' + compared + '"]').val(), !comparedValue) return !1;
                                    if (!value || !eval('"' + encodeURIComponent(value) + '"' + operator + '"' + encodeURIComponent(comparedValue) + '"')) throw [options.messages[operator].replace(" characters", ""), compared]
                                } else if (!value || isNaN(value) || !eval(value + operator + parseFloat(compared))) throw [options.messages[operator].replace(" characters", ""), compared]
                        }
                    }
                }
            }

            function registerError(e, t) {
                errors[e] || (errors[e] = []), t = t.capitalize();
                for (var n = !1, i = 0; i < errors[e].length; i++)
                    if (errors[e][i] === t) {
                        n = !0;
                        break
                    } n || errors[e].push(t)
            }

            function displayOneError(e) {
                var t, n, i, s, o, r, a = '<div class="' + options.submit.settings.errorListClass + '" ' + _data.errorList + "><ul></ul></div>";
                if (!errors.hasOwnProperty(e)) return !1;
                if (t = node.find('[name="' + e + '"]'), s = null, !t[0]) return !1;
                if (o = t.attr(_data.group), o ? (r = node.find('[name="' + e + '"]'), s = node.find('[id="' + o + '"]'), s[0] && (s.addClass(options.submit.settings.errorClass), i = s)) : (t.addClass(options.submit.settings.errorClass), options.submit.settings.inputContainer && t.parentsUntil(node, options.submit.settings.inputContainer).addClass(options.submit.settings.errorClass), n = t.attr("id"), n && (s = node.find('label[for="' + n + '"]')[0]), s || (s = t.parentsUntil(node, "label")[0]), s && (s = $(s), s.addClass(options.submit.settings.errorClass))), "inline" === options.submit.settings.display ? i = options.submit.settings.errorListContainer ? t.parentsUntil(node, options.submit.settings.errorListContainer) : i || t.parent() : "block" === options.submit.settings.display && (i = node), "inline" === options.submit.settings.display && i.find("[" + _data.errorList + "]")[0]) return !1;
                ("inline" === options.submit.settings.display || "block" === options.submit.settings.display && !i.find("[" + _data.errorList + "]")[0]) && ("append" === options.submit.settings.insertion ? i.append(a) : "prepend" === options.submit.settings.insertion && i.prepend(a));
                for (var l = 0; l < errors[e].length; l++) i.find("[" + _data.errorList + "] ul").append("<li>" + errors[e][l] + "</li>");
                if (options.submit.settings.clear || options.dynamic.settings.trigger) {
                    o && r && (t = r);
                    var d = "coucou" + resetSuffix;
                    options.submit.settings.clear && (d += " " + options.submit.settings.clear + resetSuffix, ~["radio", "checkbox"].indexOf(t[0].type) && (d += " change" + resetSuffix)), options.dynamic.settings.trigger && (d += " " + options.dynamic.settings.trigger + resetSuffix, "focusout" === options.dynamic.settings.trigger || ~["radio", "checkbox"].indexOf(t[0].type) || (d += " change" + resetSuffix + " paste" + resetSuffix)), t.unbind(d).on(d, function(e, t, n, i, s) {
                        return function() {
                            s ? $(n).hasClass(options.submit.settings.errorClass) && resetOneError(e, t, n, i, s) : $(t).hasClass(options.submit.settings.errorClass) && resetOneError(e, t, n, i)
                        }
                    }(e, t, s, i, o))
                }
                if (options.submit.settings.scrollToError && !window.Validation.hasScrolled) {
                    window.Validation.hasScrolled = !0;
                    var u = parseFloat(options.submit.settings.scrollToError.offset) || 0,
                        c = parseFloat(options.submit.settings.scrollToError.duration) || 500,
                        p = "block" === options.submit.settings.display ? i : t;
                    $("html, body").animate({
                        scrollTop: p.offset().top + u
                    }, c)
                }
            }

            function displayErrors() {
                for (var e in errors) errors.hasOwnProperty(e) && displayOneError(e)
            }

            function resetOneError(e, t, n, i, s) {
                if (delete errors[e], i) options.submit.settings.inputContainer && (s ? n : t).parentsUntil(node, options.submit.settings.inputContainer).removeClass(options.submit.settings.errorClass), n && n.removeClass(options.submit.settings.errorClass), t.removeClass(options.submit.settings.errorClass), "inline" === options.submit.settings.display && i.find("[" + _data.errorList + "]").remove();
                else {
                    if (!t && (t = node.find('[name="' + e + '"]'), !t[0])) return !1;
                    t.trigger("coucou" + resetSuffix)
                }
            }

            function resetErrors() {
                errors = [], window.Validation.hasScrolled = !1, node.find("[" + _data.errorList + "]").remove(), node.find("." + options.submit.settings.errorClass).removeClass(options.submit.settings.errorClass)
            }

            function submitForm() {
                node[0].submit()
            }

            function destroy() {
                return resetErrors(), node.find("[" + _data.validation + "],[" + _data.regex + "]").off(delegateSuffix + " " + resetSuffix), node.find(options.submit.settings.button).off(delegateSuffix).on("click" + delegateSuffix, function() {
                    $(this).closest("form")[0].submit()
                }), !0
            }
            var errors = [],
                messages = {},
                formData = {},
                delegateSuffix = ".vd",
                resetSuffix = ".vr";
            window.Validation.hasScrolled = !1;
            var _getInputValue = function(e) {
                    var t;
                    switch ($(e).attr("type")) {
                        case "checkbox":
                            t = $(e).is(":checked") ? 1 : "";
                            break;
                        case "radio":
                            t = node.find('input[name="' + $(e).attr("name") + '"]:checked').val() || "";
                            break;
                        default:
                            t = $(e).val()
                    }
                    return t
                },
                _typeWatch = function() {
                    var e = 0;
                    return function(t, n) {
                        clearTimeout(e), e = setTimeout(t, n)
                    }
                }(),
                _executeCallback = function(e, t) {
                    if (!e) return !1;
                    var n;
                    if ("function" == typeof e) n = e;
                    else if ("string" == typeof e || e instanceof Array) {
                        n = window, "string" == typeof e && (e = [e, []]);
                        for (var i = e[0].split("."), s = e[1], o = !0, r = 0; r < i.length;) {
                            if ("undefined" == typeof n) {
                                o = !1;
                                break
                            }
                            n = n[i[r++]]
                        }
                        if (!o || "function" != typeof n) return !1
                    }
                    return n.apply(this, $.merge(s || [], t ? t : [])), !0
                };
            return this.__construct = function() {
                extendOptions(), extendRules(), extendMessages(), delegateDynamicValidation(), delegateValidation()
            }(), {
                registerError: registerError,
                displayOneError: displayOneError,
                displayErrors: displayErrors,
                resetOneError: resetOneError,
                resetErrors: resetErrors,
                destroy: destroy
            }
        };
    $.fn.validate = $.validate = function(e) {
        return _api.validate(this, e)
    }, $.fn.addValidation = function(e) {
        return _api.addValidation(this, e)
    }, $.fn.removeValidation = function(e) {
        return _api.removeValidation(this, e)
    }, $.fn.addError = function(e) {
        return _api.addError(this, e)
    }, $.fn.removeError = function(e) {
        return _api.removeError(this, e)
    }, $.fn.alterValidationRules = $.alterValidationRules = function(e) {
        e instanceof Array || (e = [e]);
        for (var t = 0; t < e.length; t++) _api.alterValidationRules(e[t])
    };
    var _api = {
        _formatValidation: function(e) {
            return e = e.toString().replace(/\s/g, ""), "[" === e.charAt(0) && "]" === e.charAt(e.length - 1) && (e = e.replace(/^\[|]$/g, "")), e
        },
        _splitValidation: function(e) {
            for (var t, n = this._formatValidation(e).split(","), i = 0; i < n.length; i++) t = n[i], /^[a-z]+$/i.test(t) && (n[i] = t.toUpperCase());
            return n
        },
        _joinValidation: function(e) {
            return "[" + e.join(", ") + "]"
        },
        validate: function(e, t) {
            if ("function" == typeof e) {
                if (!t.submit.settings.form) return;
                if (e = $(t.submit.settings.form), !e[0] || "form" !== e[0].nodeName.toLowerCase()) return
            } else if ("undefined" == typeof e[0]) return;
            if ("destroy" === t) {
                if (!window.Validation.form[e.selector]) return;
                return void window.Validation.form[e.selector].destroy()
            }
            return e.each(function() {
                window.Validation.form[e.selector] = new Validation($(this), t)
            })
        },
        addValidation: function(e, t) {
            var n = this;
            return t = n._splitValidation(t), t ? e.each(function() {
                for (var e, i = $(this), s = i.attr(_data.validation), o = s && s.length ? n._splitValidation(s) : [], r = 0; r < t.length; r++) e = n._formatValidation(t[r]), -1 === $.inArray(e, o) && o.push(e);
                o.length && i.attr(_data.validation, n._joinValidation(o))
            }) : !1
        },
        removeValidation: function(e, t) {
            var n = this;
            return t = n._splitValidation(t), t ? e.each(function() {
                var e, i, s = $(this),
                    o = s.attr(_data.validation),
                    r = o && o.length ? n._splitValidation(o) : [];
                if (!r.length) return s.removeAttr(_data.validation), !0;
                for (var a = 0; a < t.length; a++) e = n._formatValidation(t[a]), i = $.inArray(e, r), -1 !== i && r.splice(i, 1);
                return r.length ? void s.attr(_data.validation, n._joinValidation(r)) : (s.removeAttr(_data.validation), !0)
            }) : !1
        },
        addError: function(e, t) {
            if (!window.Validation.form[e.selector]) return !1;
            if ("object" != typeof t || "[object Object]" !== Object.prototype.toString.call(t)) return !1;
            var n, i = !0;
            for (var s in t)
                if (t.hasOwnProperty(s) && (t[s] instanceof Array || (t[s] = [t[s]]), n = $(e.selector).find('[name="' + s + '"]'), n[0])) {
                    i && (window.Validation.hasScrolled = !1, i = !1), window.Validation.form[e.selector].resetOneError(s, n);
                    for (var o = 0; o < t[s].length; o++) "string" == typeof t[s][o] && window.Validation.form[e.selector].registerError(s, t[s][o]);
                    window.Validation.form[e.selector].displayOneError(s)
                }
        },
        removeError: function(e, t) {
            if (!window.Validation.form[e.selector]) return !1;
            if (!t) return window.Validation.form[e.selector].resetErrors(), !1;
            if ("object" == typeof t && "[object Array]" !== Object.prototype.toString.call(t)) return !1;
            t instanceof Array || (t = [t]);
            for (var n, i = 0; i < t.length; i++) n = $(e.selector).find('[name="' + t[i] + '"]'), n[0] && window.Validation.form[e.selector].resetOneError(t[i], n)
        },
        alterValidationRules: function(e) {
            if (!e.rule || !e.regex && !e.message) return !1;
            if (e.rule = e.rule.toUpperCase(), e.regex) {
                var t = _buildRegexFromString(e.regex);
                if (!(t instanceof RegExp)) return !1;
                _rules[e.rule] = t
            }
            return e.message && (_messages[e.rule] = e.message), !0
        }
    };
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }, Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        var t = this.length >>> 0,
            n = Number(arguments[1]) || 0;
        for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += t); t > n; n++)
            if (n in this && this[n] === e) return n;
        return -1
    })
}(window, document, window.jQuery), ! function(e, t) {
    function n(t) {
        var n = m(),
            i = n.querySelector("h2"),
            s = n.querySelector("p"),
            o = n.querySelector("button.cancel"),
            r = n.querySelector("button.confirm");
        if (i.innerHTML = b(t.title).split("\n").join("<br>"), s.innerHTML = b(t.text || "").split("\n").join("<br>"), t.text && M(s), L(n.querySelectorAll(".icon")), t.type) {
            for (var a = !1, l = 0; l < h.length; l++)
                if (t.type === h[l]) {
                    a = !0;
                    break
                } if (!a) return e.console.error("Unknown alert type: " + t.type), !1;
            var d = n.querySelector(".icon." + t.type);
            switch (M(d), t.type) {
                case "success":
                    y(d, "animate"), y(d.querySelector(".tip"), "animateSuccessTip"), y(d.querySelector(".long"), "animateSuccessLong");
                    break;
                case "error":
                    y(d, "animateErrorIcon"), y(d.querySelector(".x-mark"), "animateXMark");
                    break;
                case "warning":
                    y(d, "pulseWarning"), y(d.querySelector(".body"), "pulseWarningIns"), y(d.querySelector(".dot"), "pulseWarningIns")
            }
        }
        if (t.imageUrl) {
            var u = n.querySelector(".icon.custom");
            u.style.backgroundImage = "url(" + t.imageUrl + ")", M(u);
            var c = 80,
                p = 80;
            if (t.imageSize) {
                var f = t.imageSize.split("x")[0],
                    g = t.imageSize.split("x")[1];
                f && g ? (c = f, p = g, u.css({
                    width: f + "px",
                    height: g + "px"
                })) : e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize)
            }
            u.setAttribute("style", u.getAttribute("style") + "width:" + c + "px; height:" + p + "px")
        }
        n.setAttribute("data-has-cancel-button", t.showCancelButton), t.showCancelButton ? o.style.display = "inline-block" : L(o), n.setAttribute("data-has-confirm-button", t.showConfirmButton), t.showConfirmButton ? r.style.display = "inline-block" : L(r), t.cancelButtonText && (o.innerHTML = b(t.cancelButtonText)), t.confirmButtonText && (r.innerHTML = b(t.confirmButtonText)), r.className = "confirm btn btn-lg", y(n, t.containerClass), y(r, t.confirmButtonClass), y(o, t.cancelButtonClass), y(i, t.titleClass), y(s, t.textClass), n.setAttribute("data-allow-ouside-click", t.allowOutsideClick);
        var _ = t.doneFunction ? !0 : !1;
        n.setAttribute("data-has-done-function", _), n.setAttribute("data-timer", t.timer)
    }

    function i(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function s() {
        var e = m();
        D(g(), 10), M(e), y(e, "showSweetAlert"), v(e, "hideSweetAlert"), a = t.activeElement;
        var n = e.querySelector("button.confirm");
        n.focus(), setTimeout(function() {
            y(e, "visible")
        }, 500);
        var i = e.getAttribute("data-timer");
        "null" !== i && "" !== i && setTimeout(function() {
            o()
        }, i)
    }

    function o() {
        var n = m();
        S(g(), 5), S(n, 5), v(n, "showSweetAlert"), y(n, "hideSweetAlert"), v(n, "visible");
        var i = n.querySelector(".icon.success");
        v(i, "animate"), v(i.querySelector(".tip"), "animateSuccessTip"), v(i.querySelector(".long"), "animateSuccessLong");
        var s = n.querySelector(".icon.error");
        v(s, "animateErrorIcon"), v(s.querySelector(".x-mark"), "animateXMark");
        var o = n.querySelector(".icon.warning");
        v(o, "pulseWarning"), v(o.querySelector(".body"), "pulseWarningIns"), v(o.querySelector(".dot"), "pulseWarningIns"), e.onkeydown = d, t.onclick = l, a && a.focus(), u = void 0
    }

    function r() {
        var e = m();
        e.style.marginTop = x(m())
    }
    var a, l, d, u, c = ".sweet-alert",
        p = ".sweet-overlay",
        h = ["error", "warning", "info", "success"],
        f = {
            title: "",
            text: "",
            type: null,
            allowOutsideClick: !1,
            showCancelButton: !1,
            showConfirmButton: !0,
            closeOnConfirm: !0,
            closeOnCancel: !0,
            confirmButtonText: "OK",
            confirmButtonClass: "btn-primary",
            cancelButtonText: "Cancel",
            cancelButtonClass: "btn-default",
            containerClass: "",
            titleClass: "",
            textClass: "",
            imageUrl: null,
            imageSize: null,
            timer: null
        },
        m = function() {
            return t.querySelector(c)
        },
        g = function() {
            return t.querySelector(p)
        },
        _ = function(e, t) {
            return new RegExp(" " + t + " ").test(" " + e.className + " ")
        },
        y = function(e, t) {
            t && !_(e, t) && (e.className += " " + t)
        },
        v = function(e, t) {
            var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
            if (_(e, t)) {
                for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                e.className = n.replace(/^\s+|\s+$/g, "")
            }
        },
        b = function(e) {
            var n = t.createElement("div");
            return n.appendChild(t.createTextNode(e)), n.innerHTML
        },
        w = function(e) {
            e.style.opacity = "", e.style.display = "block"
        },
        M = function(e) {
            if (e && !e.length) return w(e);
            for (var t = 0; t < e.length; ++t) w(e[t])
        },
        k = function(e) {
            e.style.opacity = "", e.style.display = "none"
        },
        L = function(e) {
            if (e && !e.length) return k(e);
            for (var t = 0; t < e.length; ++t) k(e[t])
        },
        T = function(e, t) {
            for (var n = t.parentNode; null !== n;) {
                if (n === e) return !0;
                n = n.parentNode
            }
            return !1
        },
        x = function(e) {
            e.style.left = "-9999px", e.style.display = "block";
            var t = e.clientHeight,
                n = parseInt(getComputedStyle(e).getPropertyValue("padding"), 10);
            return e.style.left = "", e.style.display = "none", "-" + parseInt(t / 2 + n) + "px"
        },
        D = function(e, t) {
            if (+e.style.opacity < 1) {
                t = t || 16, e.style.opacity = 0, e.style.display = "block";
                var n = +new Date,
                    i = function() {
                        e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(i, t)
                    };
                i()
            }
        },
        S = function(e, t) {
            t = t || 16, e.style.opacity = 1;
            var n = +new Date,
                i = function() {
                    e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(i, t) : e.style.display = "none"
                };
            i()
        },
        Y = function(n) {
            if (MouseEvent) {
                var i = new MouseEvent("click", {
                    view: e,
                    bubbles: !1,
                    cancelable: !0
                });
                n.dispatchEvent(i)
            } else if (t.createEvent) {
                var s = t.createEvent("MouseEvents");
                s.initEvent("click", !1, !1), n.dispatchEvent(s)
            } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
        },
        C = function(t) {
            "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
        };
    e.sweetAlertInitialize = function() {
            var e = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p class="lead text-muted">Text</p><p><button class="cancel btn btn-lg" tabIndex="2">Cancel</button> <button class="confirm btn btn-lg" tabIndex="1">OK</button></p></div>',
                n = t.createElement("div");
            n.innerHTML = e, t.body.appendChild(n)
        }, e.sweetAlert = e.swal = function() {
            function a(e) {
                var t = e.keyCode || e.which;
                if (-1 !== [9, 13, 32, 27].indexOf(t)) {
                    for (var n = e.target || e.srcElement, i = -1, s = 0; s < M.length; s++)
                        if (n === M[s]) {
                            i = s;
                            break
                        } 9 === t ? (n = -1 === i ? b : i === M.length - 1 ? M[0] : M[i + 1], C(e), n.focus()) : (n = 13 === t || 32 === t ? -1 === i ? b : void 0 : 27 !== t || w.hidden || "none" === w.style.display ? void 0 : w, void 0 !== n && Y(n, e))
                }
            }

            function c(e) {
                var t = e.target || e.srcElement,
                    n = e.relatedTarget,
                    i = _(h, "visible");
                if (i) {
                    var s = -1;
                    if (null !== n) {
                        for (var o = 0; o < M.length; o++)
                            if (n === M[o]) {
                                s = o;
                                break
                            } - 1 === s && t.focus()
                    } else u = t
                }
            }
            if (void 0 === arguments[0]) return e.console.error("sweetAlert expects at least 1 attribute!"), !1;
            var p = i({}, f);
            switch (typeof arguments[0]) {
                case "string":
                    p.title = arguments[0], p.text = arguments[1] || "", p.type = arguments[2] || "";
                    break;
                case "object":
                    if (void 0 === arguments[0].title) return e.console.error('Missing "title" argument!'), !1;
                    p.title = arguments[0].title, p.text = arguments[0].text || f.text, p.type = arguments[0].type || f.type, p.allowOutsideClick = arguments[0].allowOutsideClick || f.allowOutsideClick, p.showCancelButton = void 0 !== arguments[0].showCancelButton ? arguments[0].showCancelButton : f.showCancelButton, p.showConfirmButton = void 0 !== arguments[0].showConfirmButton ? arguments[0].showConfirmButton : f.showConfirmButton, p.closeOnConfirm = void 0 !== arguments[0].closeOnConfirm ? arguments[0].closeOnConfirm : f.closeOnConfirm, p.closeOnCancel = void 0 !== arguments[0].closeOnCancel ? arguments[0].closeOnCancel : f.closeOnCancel, p.timer = arguments[0].timer || f.timer, p.confirmButtonText = f.showCancelButton ? "Confirm" : f.confirmButtonText, p.confirmButtonText = arguments[0].confirmButtonText || f.confirmButtonText, p.confirmButtonClass = arguments[0].confirmButtonClass || (arguments[0].type ? "btn-" + arguments[0].type : null) || f.confirmButtonClass, p.cancelButtonText = arguments[0].cancelButtonText || f.cancelButtonText, p.cancelButtonClass = arguments[0].cancelButtonClass || f.cancelButtonClass, p.containerClass = arguments[0].containerClass || f.containerClass, p.titleClass = arguments[0].titleClass || f.titleClass, p.textClass = arguments[0].textClass || f.textClass, p.imageUrl = arguments[0].imageUrl || f.imageUrl, p.imageSize = arguments[0].imageSize || f.imageSize, p.doneFunction = arguments[1] || null;
                    break;
                default:
                    return e.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
            }
            n(p), r(), s();
            for (var h = m(), g = function(e) {
                    var t = e.target || e.srcElement,
                        n = t.className.indexOf("confirm") > -1,
                        i = _(h, "visible"),
                        s = p.doneFunction && "true" === h.getAttribute("data-has-done-function");
                    switch (e.type) {
                        case "click":
                            if (n && s && i) p.doneFunction(!0), p.closeOnConfirm && o();
                            else if (s && i) {
                                var r = String(p.doneFunction).replace(/\s/g, ""),
                                    a = "function(" === r.substring(0, 9) && ")" !== r.substring(9, 10);
                                a && p.doneFunction(!1), p.closeOnCancel && o()
                            } else o()
                    }
                }, y = h.querySelectorAll("button"), v = 0; v < y.length; v++) y[v].onclick = g;
            l = t.onclick, t.onclick = function(e) {
                var t = e.target || e.srcElement,
                    n = h === t,
                    i = T(h, e.target),
                    s = _(h, "visible"),
                    r = "true" === h.getAttribute("data-allow-ouside-click");
                !n && !i && s && r && o()
            };
            var b = h.querySelector("button.confirm"),
                w = h.querySelector("button.cancel"),
                M = h.querySelectorAll("button:not([type=hidden])");
            d = e.onkeydown, e.onkeydown = a, b.onblur = c, w.onblur = c, e.onfocus = function() {
                e.setTimeout(function() {
                    void 0 !== u && (u.focus(), u = void 0)
                }, 0)
            }
        }, e.swal.setDefaults = function(e) {
            if (!e) throw new Error("userParams is required");
            if ("object" != typeof e) throw new Error("userParams has to be a object");
            i(f, e)
        }, e.swal.close = function() {
            o()
        },
        function() {
            "complete" === t.readyState || "interactive" === t.readyState && t.body ? sweetAlertInitialize() : t.addEventListener ? t.addEventListener("DOMContentLoaded", function e() {
                t.removeEventListener("DOMContentLoaded", e, !1), sweetAlertInitialize()
            }, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function n() {
                "complete" === t.readyState && (t.detachEvent("onreadystatechange", n), sweetAlertInitialize())
            })
        }()
}(window, document),
function(e, t, n, i) {
    var s = e.fn.peity = function(t, n) {
            return l && this.each(function() {
                var i = e(this),
                    r = i.data("_peity");
                r ? (t && (r.type = t), e.extend(r.opts, n)) : (r = new o(i, t, e.extend({}, s.defaults[t], i.data("peity"), n)), i.change(function() {
                    r.draw()
                }).data("_peity", r)), r.draw()
            }), this
        },
        o = function(e, t, n) {
            this.$el = e, this.type = t, this.opts = n
        },
        r = o.prototype,
        a = r.svgElement = function(n, i) {
            return e(t.createElementNS("http://www.w3.org/2000/svg", n)).attr(i)
        },
        l = "createElementNS" in t && a("svg", {})[0].createSVGRect;
    r.draw = function() {
        var e = this.opts;
        s.graphers[this.type].call(this, e), e.after && e.after.call(this, e)
    }, r.fill = function() {
        var t = this.opts.fill;
        return e.isFunction(t) ? t : function(e, n) {
            return t[n % t.length]
        }
    }, r.prepare = function(e, t) {
        return this.$svg || this.$el.hide().after(this.$svg = a("svg", {
            "class": "peity"
        })), this.$svg.empty().data("peity", this).attr({
            height: t,
            width: e
        })
    }, r.values = function() {
        return e.map(this.$el.text().split(this.opts.delimiter), function(e) {
            return parseFloat(e)
        })
    }, s.defaults = {}, s.graphers = {}, s.register = function(e, t, n) {
        this.defaults[e] = t, this.graphers[e] = n
    }, s.register("pie", {
        fill: ["#ff9900", "#fff4dd", "#ffc66e"],
        radius: 8
    }, function(t) {
        if (!t.delimiter) {
            var i = this.$el.text().match(/[^0-9\.]/);
            t.delimiter = i ? i[0] : ","
        }
        if (i = e.map(this.values(), function(e) {
                return e > 0 ? e : 0
            }), "/" == t.delimiter) var s = i[0],
            i = [s, n.max(0, i[1] - s)];
        for (var o = 0, s = i.length, r = 0; s > o; o++) r += i[o];
        r || (s = 2, r = 1, i = [0, 1]);
        var l = 2 * t.radius,
            l = this.prepare(t.width || l, t.height || l),
            o = l.width(),
            d = l.height(),
            u = o / 2,
            c = d / 2,
            d = n.min(u, c),
            t = t.innerRadius;
        "donut" == this.type && !t && (t = .5 * d);
        for (var p = n.PI, h = this.fill(), f = this.scale = function(e, t) {
                var i = e / r * p * 2 - p / 2;
                return [t * n.cos(i) + u, t * n.sin(i) + c]
            }, m = 0, o = 0; s > o; o++) {
            var g = i[o],
                _ = g / r;
            if (0 != _) {
                if (1 == _)
                    if (t) var _ = u - .01,
                        y = c - d,
                        v = c - t,
                        _ = a("path", {
                            d: ["M", u, y, "A", d, d, 0, 1, 1, _, y, "L", _, v, "A", t, t, 0, 1, 0, u, v].join(" ")
                        });
                    else _ = a("circle", {
                        cx: u,
                        cy: c,
                        r: d
                    });
                else y = m + g, v = ["M"].concat(f(m, d), "A", d, d, 0, _ > .5 ? 1 : 0, 1, f(y, d), "L"), t ? v = v.concat(f(y, t), "A", t, t, 0, _ > .5 ? 1 : 0, 0, f(m, t)) : v.push(u, c), m += g, _ = a("path", {
                    d: v.join(" ")
                });
                _.attr("fill", h.call(this, g, o, i)), l.append(_)
            }
        }
    }), s.register("donut", e.extend(!0, {}, s.defaults.pie), function(e) {
        s.graphers.pie.call(this, e)
    }), s.register("line", {
        delimiter: ",",
        fill: "#c6d9fd",
        height: 16,
        min: 0,
        stroke: "#4d89f9",
        strokeWidth: 1,
        width: 32
    }, function(e) {
        var t = this.values();
        1 == t.length && t.push(t[0]);
        for (var s = n.max.apply(n, e.max == i ? t : t.concat(e.max)), o = n.min.apply(n, e.min == i ? t : t.concat(e.min)), r = this.prepare(e.width, e.height), l = e.strokeWidth, d = r.width(), u = r.height() - l, c = s - o, s = this.x = function(e) {
                return e * (d / (t.length - 1))
            }, p = this.y = function(e) {
                var t = u;
                return c && (t -= (e - o) / c * u), t + l / 2
            }, h = p(n.max(o, 0)), f = [0, h], m = 0; m < t.length; m++) f.push(s(m), p(t[m]));
        f.push(d, h), e.fill && r.append(a("polygon", {
            fill: e.fill,
            points: f.join(" ")
        })), l && r.append(a("polyline", {
            fill: "none",
            points: f.slice(2, f.length - 2).join(" "),
            stroke: e.stroke,
            "stroke-width": l,
            "stroke-linecap": "square"
        }))
    }), s.register("bar", {
        delimiter: ",",
        fill: ["#4D89F9"],
        height: 16,
        min: 0,
        padding: .1,
        width: 32
    }, function(e) {
        for (var t = this.values(), s = n.max.apply(n, e.max == i ? t : t.concat(e.max)), o = n.min.apply(n, e.min == i ? t : t.concat(e.min)), r = this.prepare(e.width, e.height), l = r.width(), d = r.height(), u = s - o, e = e.padding, c = this.fill(), p = this.x = function(e) {
                return e * l / t.length
            }, h = this.y = function(e) {
                return d - (u ? (e - o) / u * d : 1)
            }, f = 0; f < t.length; f++) {
            var m, g = p(f + e),
                _ = p(f + 1 - e) - g,
                y = t[f],
                v = h(y),
                b = v;
            u ? 0 > y ? b = h(n.min(s, 0)) : v = h(n.max(o, 0)) : m = 1, m = v - b, 0 == m && (m = 1, s > 0 && u && b--), r.append(a("rect", {
                fill: c.call(this, y, f, t),
                x: g,
                y: b,
                width: _,
                height: m
            }))
        }
    })
}(jQuery, document, Math), ! function(e, t) {
    if ("function" == typeof define && define.amd) define(["exports", "module"], t);
    else if ("undefined" != typeof exports && "undefined" != typeof module) t(exports, module);
    else {
        var n = {
            exports: {}
        };
        t(n.exports, n), e.autosize = n.exports
    }
}(this, function(e, t) {
    "use strict";

    function n(e) {
        function t() {
            var t = window.getComputedStyle(e, null);
            h = t.overflowY, "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), p = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(p) && (p = 0), s()
        }

        function n(t) {
            var n = e.style.width;
            e.style.width = "0px", e.offsetWidth, e.style.width = n, h = t, c && (e.style.overflowY = t), i()
        }

        function i() {
            var t = window.pageYOffset,
                n = document.body.scrollTop,
                i = e.style.height;
            e.style.height = "auto";
            var s = e.scrollHeight + p;
            return 0 === e.scrollHeight ? void(e.style.height = i) : (e.style.height = s + "px", f = e.clientWidth, document.documentElement.scrollTop = t, void(document.body.scrollTop = n))
        }

        function s() {
            var t = e.style.height;
            i();
            var s = window.getComputedStyle(e, null);
            if (s.height !== e.style.height ? "visible" !== h && n("visible") : "hidden" !== h && n("hidden"), t !== e.style.height) {
                var o = r("autosize:resized");
                e.dispatchEvent(o)
            }
        }
        var a = void 0 === arguments[1] ? {} : arguments[1],
            l = a.setOverflowX,
            d = void 0 === l ? !0 : l,
            u = a.setOverflowY,
            c = void 0 === u ? !0 : u;
        if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
            var p = null,
                h = null,
                f = e.clientWidth,
                m = function() {
                    e.clientWidth !== f && s()
                },
                g = function(t) {
                    window.removeEventListener("resize", m, !1), e.removeEventListener("input", s, !1), e.removeEventListener("keyup", s, !1), e.removeEventListener("autosize:destroy", g, !1), e.removeEventListener("autosize:update", s, !1), o["delete"](e), Object.keys(t).forEach(function(n) {
                        e.style[n] = t[n]
                    })
                }.bind(e, {
                    height: e.style.height,
                    resize: e.style.resize,
                    overflowY: e.style.overflowY,
                    overflowX: e.style.overflowX,
                    wordWrap: e.style.wordWrap
                });
            e.addEventListener("autosize:destroy", g, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", s, !1), window.addEventListener("resize", m, !1), e.addEventListener("input", s, !1), e.addEventListener("autosize:update", s, !1), o.add(e), d && (e.style.overflowX = "hidden", e.style.wordWrap = "break-word"), t()
        }
    }

    function i(e) {
        if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
            var t = r("autosize:destroy");
            e.dispatchEvent(t)
        }
    }

    function s(e) {
        if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
            var t = r("autosize:update");
            e.dispatchEvent(t)
        }
    }
    var o = "function" == typeof Set ? new Set : function() {
            var e = [];
            return {
                has: function(t) {
                    return Boolean(e.indexOf(t) > -1)
                },
                add: function(t) {
                    e.push(t)
                },
                "delete": function(t) {
                    e.splice(e.indexOf(t), 1)
                }
            }
        }(),
        r = function(e) {
            return new Event(e)
        };
    try {
        new Event("test")
    } catch (a) {
        r = function(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !1), t
        }
    }
    var l = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (l = function(e) {
        return e
    }, l.destroy = function(e) {
        return e
    }, l.update = function(e) {
        return e
    }) : (l = function(e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
            return n(e, t)
        }), e
    }, l.destroy = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], i), e
    }, l.update = function(e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], s), e
    }), t.exports = l


})(window.jQuery || window.Zepto, window, document);