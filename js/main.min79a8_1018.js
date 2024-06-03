
function getParams(e) {
    for (var t = document.getElementById(e).src.split("?").pop().split("&"), n = {}, i = 0; i < t.length; i++) {
        var o = t[i].split("=");
        n[o[0]] = o[1]
    }
    return n
}


function cookiesClose() {
    document.getElementById("cookies-alert").style.display = "none", document.cookie = "legal_ingreso=acepta; expires=Tue, 12 Jan 2030 12:23:00 GMT; path=/", document.Cookie = "legal_ingreso=acepta; expires=Tue, 12 Jan 2030 12:23:00 GMT; path=/"
}

function cookiesAccept() {
    document.cookie = "legal_ingreso=acepta; expires=Tue, 12 Jan 2030 12:23:00 GMT; path=/", document.Cookie = "legal_ingreso=acepta; expires=Tue, 12 Jan 2030 12:23:00 GMT; path=/"
}

function loginPage() {
    return 1
}

function navShow(e) {
    var t = e.data("subnav");
    "" !== t && void 0 !== t ? Modernizr.touchevents && e.closest(".js-main-nav-item").hasClass("is-hover") ? ($(".js-main-nav-item").removeClass("is-hover"), $(".js-main-subnav-section").removeClass("is-active"), $(".js-main-subnav").removeClass("is-active")) : (subnavIsVisible = !0, $(".js-main-nav-item").removeClass("is-hover"), e.closest(".js-main-nav-item").addClass("is-hover"), $(".js-main-subnav-section").removeClass("is-active"), $(".js-main-subnav-section-" + t).addClass("is-active"), $(".js-main-subnav").addClass("is-active").css("min-height", $(".js-main-subnav-section-" + t).outerHeight())) : Modernizr.touchevents && ($(".js-main-nav-item").removeClass("is-hover"), $(".js-main-subnav-section").removeClass("is-active"), $(".js-main-subnav").removeClass("is-active"))
}

function navHide() {
    navIsHover || subnavIsHover || (subnavIsVisible = !1, $(".js-main-nav-item").removeClass("is-hover"), setTimeout(function () {
        navIsHover || subnavIsHover || $(".js-main-subnav").removeClass("is-active")
    }, 110), $(".js-main-subnav-section").removeClass("is-active"))
}

function navHover() {
    navShow($(this))
}

function navOut() {
    navHide()
}

function subnavHover() {
    subnavIsHover = !0
}

function subnavOut() {
    setTimeout(function () {
        subnavIsHover = !1, navHide()
    }, 110)
}

function mmenuInit() {
    mmenuStarted = !0, $("#nav-mobile").mmenu({
        navbar: {
            add: !0
        },
        onmousedown: {
            setSelected: !1
        }
    }, {
        classNames: {
            fixedElements: {
                fixed: "js-mmenu-fixed"
            },
            seleted: "is-selected"
        },
        offCanvas: {
            pageSelector: ".js-main-wrap"
        }
    });
    $("#nav-mobile").data("mmenu")
}

function windowScroll() {
    $(window).scrollTop() > 30 ? ($(".js-main-header").addClass("is-mini"), $("body").addClass("is-header-mini")) : ($(".js-main-header").removeClass("is-mini"), $("body").removeClass("is-header-mini")), $(window).scrollTop() > 200 ? $(".js-main-header-iframe").addClass("is-mini") : $(".js-main-header-iframe").removeClass("is-mini")
}

function windowResize() {
    mmenuStarted || "xxs" != breakpoint.value && "xs" != breakpoint.value && "sm" != breakpoint.value || mmenuInit(), "home" == section && $(".js-home-video").length > 0 && ("xxs" != breakpoint.value && "xs" != breakpoint.value && "sm" != breakpoint.value ? $(".js-home-video").get(0).play() : $(".js-home-video").get(0).pause()), $(".js-news-video").length > 0 && ("xxs" != breakpoint.value && "xs" != breakpoint.value && "sm" != breakpoint.value ? $(".js-news-video").get(0).play() : $(".js-news-video").get(0).pause())
}



! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function i(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (he.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function (e) {
            return oe.inArray(e, t) >= 0 !== n
        })
    }

    function o(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }

    function r(e) {
        var t = Te[e] = {};
        return oe.each(e.match(be) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }

    function a() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (s(), oe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(xe, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? oe.parseJSON(n) : n)
                } catch (o) {}
                oe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function c(e) {
        var t;
        for (t in e) if (("data" !== t || !oe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u(e, t, n, i) {
        if (oe.acceptData(e)) {
            var o, r, s = oe.expando,
                a = e.nodeType,
                l = a ? oe.cache : e,
                c = a ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = a ? e[s] = U.pop() || oe.guid++ : s), l[c] || (l[c] = a ? {} : {
                toJSON: oe.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = oe.extend(l[c], t) : l[c].data = oe.extend(l[c].data, t)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[oe.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[oe.camelCase(t)])) : o = r, o
        }
    }

    function d(e, t, n) {
        if (oe.acceptData(e)) {
            var i, o, r = e.nodeType,
                s = r ? oe.cache : e,
                a = r ? e[oe.expando] : oe.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    oe.isArray(t) ? t = t.concat(oe.map(t, oe.camelCase)) : t in i ? t = [t] : (t = oe.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                    for (; o--;) delete i[t[o]];
                    if (n ? !c(i) : !oe.isEmptyObject(i)) return
                }(n || (delete s[a].data, c(s[a]))) && (r ? oe.cleanData([e], !0) : ne.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Be.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, i, o = 0,
            r = typeof e.getElementsByTagName !== Se ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Se ? e.querySelectorAll(t || "*") : void 0;
        if (!r) for (r = [], n = e.childNodes || e; null != (i = n[o]); o++)!t || oe.nodeName(i, t) ? r.push(i) : oe.merge(r, g(i, t));
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], r) : r
    }

   

    function y(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== oe.find.attr(e, "type")) + "/" + e.type, e
    }

    function T(e) {
        var t = Xe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) oe._data(n, "globalEval", !t || oe._data(t[i], "globalEval"))
    }

    function _(e, t) {
        if (1 === t.nodeType && oe.hasData(e)) {
            var n, i, o, r = oe._data(e),
                s = oe._data(t, r),
                a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a) for (i = 0, o = a[n].length; o > i; i++) oe.event.add(t, n, a[n][i])
            }
            s.data && (s.data = oe.extend({}, s.data))
        }
    }

    
    function C(t, n) {
        var i, o = oe(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : oe.css(o[0], "display");
        return o.detach(), r
    }

    function x(e) {
        var t = fe,
            n = Je[e];
        return n || (n = C(e, t), "none" !== n && n || (Qe = (Qe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Qe[0].contentWindow || Qe[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Qe.detach()), Je[e] = n), n
    }

    function A(e, t) {
        return {
            get: function () {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function P(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = ht.length; o--;) if (t = ht[o] + n, t in e) return t;
        return i
    }

    function E(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s], i.style && (r[s] = oe._data(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ee(i) && (r[s] = oe._data(i, "olddisplay", x(i.nodeName)))) : (o = Ee(i), (n && "none" !== n || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function M(e, t, n) {
        var i = lt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function $(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += oe.css(e, n + Pe[r], !0, o)), i ? ("content" === n && (s -= oe.css(e, "padding" + Pe[r], !0, o)), "margin" !== n && (s -= oe.css(e, "border" + Pe[r] + "Width", !0, o))) : (s += oe.css(e, "padding" + Pe[r], !0, o), "padding" !== n && (s += oe.css(e, "border" + Pe[r] + "Width", !0, o)));
        return s
    }

    function I(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = et(e),
            s = ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = tt(e, t, r), (0 > o || null == o) && (o = e.style[t]), it.test(o)) return o;
            i = s && (ne.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + $(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function k(e, t, n, i, o) {
        return new k.prototype.init(e, t, n, i, o)
    }

    function D() {
        return setTimeout(function () {
            pt = void 0
        }), pt = oe.now()
    }

    function H(e, t) {
        var n, i = {
            height: e
        }, o = 0;
        for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Pe[o], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function G(e, t, n) {
        for (var i, o = (bt[t] || []).concat(bt["*"]), r = 0, s = o.length; s > r; r++) if (i = o[r].call(n, t, e)) return i
    }

    function B(e, t, n) {
        var i, o, r, s, a, l, c, u, d = this,
            h = {}, p = e.style,
            f = e.nodeType && Ee(e),
            m = oe._data(e, "fxshow");
        n.queue || (a = oe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, d.always(function () {
            d.always(function () {
                a.unqueued--, oe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = oe.css(e, "display"), u = "none" === c ? oe._data(e, "olddisplay") || x(e.nodeName) : c, "inline" === u && "none" === oe.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== x(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t) if (o = t[i], mt.exec(o)) {
            if (delete t[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                if ("show" !== o || !m || void 0 === m[i]) continue;
                f = !0
            }
            h[i] = m && m[i] || oe.style(e, i)
        } else c = void 0;
        if (oe.isEmptyObject(h)) "inline" === ("none" === c ? x(e.nodeName) : c) && (p.display = c);
        else {
            m ? "hidden" in m && (f = m.hidden) : m = oe._data(e, "fxshow", {}), r && (m.hidden = !f), f ? oe(e).show() : d.done(function () {
                oe(e).hide()
            }), d.done(function () {
                var t;
                oe._removeData(e, "fxshow");
                for (t in h) oe.style(e, t, h[t])
            });
            for (i in h) s = G(f ? m[i] : 0, i, d), i in m || (m[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function O(e, t) {
        var n, i, o, r, s;
        for (n in e) if (i = oe.camelCase(n), o = t[i], r = e[n], oe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = oe.cssHooks[i], s && "expand" in s) {
            r = s.expand(r), delete e[i];
            for (n in r) n in e || (e[n] = r[n], t[n] = o)
        } else t[i] = o
    }

    function N(e, t, n) {
        var i, o, r = 0,
            s = yt.length,
            a = oe.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = pt || D(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, n]), 1 > r && l ? n : (a.resolveWith(e, [c]), !1)
            }, c = a.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || D(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (O(u, c.opts.specialEasing); s > r; r++) if (i = yt[r].call(c, e, u, c.opts)) return i;
        return oe.map(u, G, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function L(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(be) || [];
            if (oe.isFunction(n)) for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function j(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, oe.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {}, s = e === Wt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function R(e, t) {
        var n, i, o = oe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && oe.extend(!0, e, n), e
    }

    function F(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
        "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
        if (o) for (s in a) if (a[s] && a[s].test(o)) {
            l.unshift(s);
            break
        }
        if (l[0] in n) r = l[0];
        else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                i || (i = s)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function W(e, t, n, i) {
        var o, r, s, a, l, c = {}, u = e.dataTypes.slice();
        if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l;
        else if ("*" !== l && l !== r) {
            if (s = c[l + " " + r] || c["* " + r], !s) for (o in c) if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], u.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && e["throws"]) t = s(t);
            else try {
                t = s(t)
            } catch (d) {
                return {
                    state: "parsererror",
                    error: s ? d : "No conversion from " + l + " to " + r
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }

    function V(e, t, n, i) {
        var o;
        if (oe.isArray(t)) oe.each(t, function (t, o) {
            n || Xt.test(e) ? i(e, o) : V(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== oe.type(t)) i(e, t);
        else for (o in t) V(e + "[" + o + "]", t[o], n, i)
    }

    function z() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function q() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function X(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var U = [],
        K = U.slice,
        Z = U.concat,
        Y = U.push,
        Q = U.indexOf,
        J = {}, ee = J.toString,
        te = J.hasOwnProperty,
        ne = {}, ie = "1.11.3",
        oe = function (e, t) {
            return new oe.fn.init(e, t)
        }, re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        ae = /-([\da-z])/gi,
        le = function (e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ie,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function () {
            return K.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
        },
        pushStack: function (e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return oe.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(oe.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Y,
        sort: U.sort,
        splice: U.splice
    }, oe.extend = oe.fn.extend = function () {
        var e, t, n, i, o, r, s = arguments[0] || {}, a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (o = arguments[a])) for (i in o) e = s[i], n = o[i], s !== n && (c && n && (oe.isPlainObject(n) || (t = oe.isArray(n))) ? (t ? (t = !1, r = e && oe.isArray(e) ? e : []) : r = e && oe.isPlainObject(e) ? e : {}, s[i] = oe.extend(c, r, n)) : void 0 !== n && (s[i] = n));
        return s
    }, oe.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === oe.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !oe.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast) for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[ee.call(e)] || "object" : typeof e
        },
        globalEval: function (t) {
            t && oe.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(se, "ms-").replace(ae, le)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e);
            if (i) {
                if (a) for (; s > r && (o = t.apply(e[r], i), o !== !1); r++);
                else for (r in e) if (o = t.apply(e[r], i), o === !1) break
            } else if (a) for (; s > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
            else for (r in e) if (o = t.call(e[r], r, e[r]), o === !1) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(re, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : Y.call(i, e)), i
        },
        inArray: function (e, t, n) {
            var i;
            if (t) {
                if (Q) return Q.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
            if (n !== n) for (; void 0 !== t[i];) e[o++] = t[i++];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        },
        map: function (e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e),
                l = [];
            if (a) for (; s > r; r++) o = t(e[r], r, i), null != o && l.push(o);
            else for (r in e) o = t(e[r], r, i), null != o && l.push(o);
            return Z.apply([], l)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), oe.isFunction(e) ? (n = K.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat(K.call(arguments)))
            }, i.guid = e.guid = e.guid || oe.guid++, i) : void 0
        },
        now: function () {
            return +new Date
        },
        support: ne
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        J["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function (e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, c, d, p, f, m;
            if ((t ? t.ownerDocument || t : j) !== k && I(t), t = t || k, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && H) {
                if (11 !== a && (o = ye.exec(e))) if (s = o[1]) {
                    if (9 === a) {
                        if (r = t.getElementById(s), !r || !r.parentNode) return n;
                        if (r.id === s) return n.push(r), n
                    } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && N(t, r) && r.id === s) return n.push(r), n
                } else {
                    if (o[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && w.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(s)), n
                }
                if (w.qsa && (!G || !G.test(e))) {
                    if (p = d = L, f = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = x(e), (d = t.getAttribute("id")) ? p = d.replace(Te, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + h(c[l]);
                        f = be.test(e) && u(t.parentNode) || t, m = c.join(",")
                    }
                    if (m) try {
                        return Q.apply(n, f.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return P(e.replace(le, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[L] = !0, e
        }

        function o(e) {
            var t = k.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) _.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function h(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = F++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, r)
            } : function (t, n, s) {
                var a, l, c = [R, r];
                if (s) {
                    for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || o) {
                    if (l = t[L] || (t[L] = {}), (a = l[i]) && a[0] === R && a[1] === r) return c[2] = a[2];
                    if (l[i] = c, c[2] = e(t, n, s)) return !0
                }
            }
        }

        function f(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
            return i
        }

        function g(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), c && t.push(a));
            return s
        }

        function v(e, t, n, o, r, s) {
            return o && !o[L] && (o = v(o)), r && !r[L] && (r = v(r, s)), i(function (i, s, a, l) {
                var c, u, d, h = [],
                    p = [],
                    f = s.length,
                    v = i || m(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? v : g(v, h, e, a, l),
                    b = n ? r || (i ? e : f || o) ? [] : s : y;
                if (n && n(y, b, a, l), o) for (c = g(b, p), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                            r(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (c = r ? ee(i, d) : h[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else b = g(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : Q.apply(s, b)
            })
        }

        function y(e) {
            for (var t, n, i, o = e.length, r = _.relative[e[0].type], s = r || _.relative[" "], a = r ? 1 : 0, l = p(function (e) {
                return e === t
            }, s, !0), c = p(function (e) {
                return ee(t, e) > -1
            }, s, !0), u = [function (e, n, i) {
                var o = !r && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null, o
            }]; o > a; a++) if (n = _.relative[e[a].type]) u = [p(f(u), n)];
            else {
                if (n = _.filter[e[a].type].apply(null, e[a].matches), n[L]) {
                    for (i = ++a; o > i && !_.relative[e[i].type]; i++);
                    return v(a > 1 && f(u), a > 1 && h(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(le, "$1"), n, i > a && y(e.slice(a, i)), o > i && y(e = e.slice(i)), o > i && h(e))
                }
                u.push(n)
            }
            return f(u)
        }

        function b(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function (i, s, a, l, c) {
                    var u, d, h, p = 0,
                        f = "0",
                        m = i && [],
                        v = [],
                        y = E,
                        b = i || r && _.find.TAG("*", c),
                        T = R += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (c && (E = s !== k && s); f !== w && null != (u = b[f]); f++) {
                        if (r && u) {
                            for (d = 0; h = e[d++];) if (h(u, s, a)) {
                                l.push(u);
                                break
                            }
                            c && (R = T)
                        }
                        o && ((u = !h && u) && p--, i && m.push(u))
                    }
                    if (p += f, o && f !== p) {
                        for (d = 0; h = n[d++];) h(m, v, s, a);
                        if (i) {
                            if (p > 0) for (; f--;) m[f] || v[f] || (v[f] = Z.call(l));
                            v = g(v)
                        }
                        Q.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (R = T, E = y), m
                };
            return o ? i(s) : s
        }
        var T, w, _, S, C, x, A, P, E, M, $, I, k, D, H, G, B, O, N, L = "sizzle" + 1 * new Date,
            j = e.document,
            R = 0,
            F = 0,
            W = n(),
            V = n(),
            z = n(),
            q = function (e, t) {
                return e === t && ($ = !0), 0
            }, X = 1 << 31,
            U = {}.hasOwnProperty,
            K = [],
            Z = K.pop,
            Y = K.push,
            Q = K.push,
            J = K.slice,
            ee = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
                return -1
            }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ie.replace("w", "w#"),
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
            se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ce = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = new RegExp(se),
            pe = new RegExp("^" + oe + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            Te = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            _e = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, Se = function () {
                I()
            };
        try {
            Q.apply(K = J.call(j.childNodes), j.childNodes), K[j.childNodes.length].nodeType
        } catch (Ce) {
            Q = {
                apply: K.length ? function (e, t) {
                    Y.apply(e, J.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, I = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : j;
            return i !== k && 9 === i.nodeType && i.documentElement ? (k = i, D = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), H = !C(i), w.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = o(function (e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = o(function (e) {
                return D.appendChild(e).id = L, !i.getElementsByName || !i.getElementsByName(L).length
            }), w.getById ? (_.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, _.filter.ID = function (e) {
                var t = e.replace(we, _e);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete _.find.ID, _.filter.ID = function (e) {
                var t = e.replace(we, _e);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), _.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, _.find.CLASS = w.getElementsByClassName && function (e, t) {
                return H ? t.getElementsByClassName(e) : void 0
            }, B = [], G = [], (w.qsa = ve.test(i.querySelectorAll)) && (o(function (e) {
                D.appendChild(e).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && G.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || G.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + L + "-]").length || G.push("~="), e.querySelectorAll(":checked").length || G.push(":checked"), e.querySelectorAll("a#" + L + "+*").length || G.push(".#.+[+~]")
            }), o(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && G.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || G.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), G.push(",.*:")
            })), (w.matchesSelector = ve.test(O = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function (e) {
                w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), B.push("!=", se)
            }), G = G.length && new RegExp(G.join("|")), B = B.length && new RegExp(B.join("|")), t = ve.test(D.compareDocumentPosition), N = t || ve.test(D.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, q = t ? function (e, t) {
                if (e === t) return $ = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === j && N(j, e) ? -1 : t === i || t.ownerDocument === j && N(j, t) ? 1 : M ? ee(M, e) - ee(M, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return $ = !0, 0;
                var n, o = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    c = [t];
                if (!r || !a) return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : M ? ee(M, e) - ee(M, t) : 0;
                if (r === a) return s(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; l[o] === c[o];) o++;
                return o ? s(l[o], c[o]) : l[o] === j ? -1 : c[o] === j ? 1 : 0
            }, i) : k
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== k && I(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !H || B && B.test(n) || G && G.test(n))) try {
                var i = O.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (o) {}
            return t(n, k, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== k && I(e), N(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== k && I(e);
            var n = _.attrHandle[t.toLowerCase()],
                i = n && U.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== i ? i : w.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                o = 0;
            if ($ = !w.detectDuplicates, M = !w.sortStable && e.slice(0), e.sort(q), $) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return M = null, e
        }, S = t.getText = function (e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += S(t);
            return n
        }, _ = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
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
                    return e[1] = e[1].replace(we, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(we, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = x(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(we, _e).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, h, p, f, m = r !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (d = t; d = d[m];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                for (u = g[L] || (g[L] = {}), c = u[e] || [], p = c[0] === R && c[1], h = c[0] === R && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();) if (1 === d.nodeType && ++h && d === t) {
                                    u[e] = [R, p, h];
                                    break
                                }
                            } else if (y && (c = (t[L] || (t[L] = {}))[e]) && c[0] === R) h = c[1];
                            else for (;
                            (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[L] || (d[L] = {}))[e] = [R, h]), d !== t)););
                            return h -= o, h === i || h % i === 0 && h / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var o, r = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[L] ? r(n) : r.length > 1 ? (o = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        o = A(e.replace(le, "$1"));
                    return o[L] ? i(function (e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace(we, _e),

                    function (t) {
                        return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function (e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, _e).toLowerCase(),

                    function (t) {
                        var n;
                        do if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === D
                },
                focus: function (e) {
                    return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !_.pseudos.empty(e)
                },
                header: function (e) {
                    return ge.test(e.nodeName)
                },
                input: function (e) {
                    return me.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (T in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[T] = a(T);
        for (T in {
            submit: !0,
            reset: !0
        }) _.pseudos[T] = l(T);
        return d.prototype = _.filters = _.pseudos, _.setFilters = new d, x = t.tokenize = function (e, n) {
            var i, o, r, s, a, l, c, u = V[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = _.preFilter; a;) {
                (!i || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ue.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(le, " ")
                }), a = a.slice(i.length));
                for (s in _.filter)!(o = fe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : V(e, l).slice(0)
        }, A = t.compile = function (e, t) {
            var n, i = [],
                o = [],
                r = z[e + " "];
            if (!r) {
                for (t || (t = x(e)), n = t.length; n--;) r = y(t[n]), r[L] ? i.push(r) : o.push(r);
                r = z(e, b(o, i)), r.selector = e
            }
            return r
        }, P = t.select = function (e, t, n, i) {
            var o, r, s, a, l, c = "function" == typeof e && e,
                d = !i && x(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === t.nodeType && H && _.relative[r[1].type]) {
                    if (t = (_.find.ID(s.matches[0].replace(we, _e), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !_.relative[a = s.type]);) if ((l = _.find[a]) && (i = l(s.matches[0].replace(we, _e), be.test(r[0].type) && u(t.parentNode) || t))) {
                    if (r.splice(o, 1), e = i.length && h(r), !e) return Q.apply(n, i), n;
                    break
                }
            }
            return (c || A(e, d))(i, t, !H, n, be.test(e) && u(t.parentNode) || t), n
        }, w.sortStable = L.split("").sort(q).join("") === L, w.detectDuplicates = !! $, I(), w.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(k.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function (e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
    var ue = oe.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^.[^:#\[\.,]*$/;
    oe.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function (e) {
            var t, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
                for (t = 0; o > t; t++) if (oe.contains(i[t], this)) return !0
            }));
            for (t = 0; o > t; t++) oe.find(e, i[t], n);
            return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        },

        not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function (e) {
            return !!i(this, "string" == typeof e && ue.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var pe, fe = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = oe.fn.init = function (e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)), de.test(n[1]) && oe.isPlainObject(t)) for (n in t) oe.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = fe.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = fe, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
        };
    ge.prototype = oe.fn, pe = oe(fe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function (e, t, n) {
            for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), oe.fn.extend({
        has: function (e) {
            var t, n = oe(e, this),
                i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++) if (oe.contains(this, n[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, o = this.length, r = [], s = ue.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; o > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? oe.unique(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? oe.inArray(this[0], oe(e)) : oe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return oe.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return oe.dir(e, "parentNode", n)
        },
        next: function (e) {
            return o(e, "nextSibling")
        },
        prev: function (e) {
            return o(e, "previousSibling")
        },
        nextAll: function (e) {
            return oe.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return oe.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return oe.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return oe.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return oe.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return oe.sibling(e.firstChild)
        },
        contents: function (e) {
            return oe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : oe.merge([], e.childNodes)
        }
    }, function (e, t) {
        oe.fn[e] = function (n, i) {
            var o = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (ye[e] || (o = oe.unique(o)), ve.test(e) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var be = /\S+/g,
        Te = {};
    oe.Callbacks = function (e) {
        e = "string" == typeof e ? Te[e] || r(e) : oe.extend({}, e);
        var t, n, i, o, s, a, l = [],
            c = !e.once && [],
            u = function (r) {
                for (n = e.memory && r, i = !0, s = a || 0, a = 0, o = l.length, t = !0; l && o > s; s++) if (l[s].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
                t = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
            }, d = {
                add: function () {
                    if (l) {
                        var i = l.length;
                        ! function r(t) {
                            oe.each(t, function (t, n) {
                                var i = oe.type(n);
                                "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), t ? o = l.length : n && (a = i, u(n))
                    }
                    return this
                },
                remove: function () {
                    return l && oe.each(arguments, function (e, n) {
                        for (var i;
                        (i = oe.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, s >= i && s--)
                    }), this
                },
                has: function (e) {
                    return e ? oe.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], o = 0, this
                },
                disable: function () {
                    return l = c = n = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return c = void 0, n || d.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, n) {
                    return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return d
    }, oe.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                ["notify", "progress", oe.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return oe.Deferred(function (n) {
                            oe.each(t, function (t, r) {
                                var s = oe.isFunction(e[t]) && e[t];
                                o[r[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? oe.extend(e, i) : i
                    }
                }, o = {};
            return i.pipe = i.then, oe.each(t, function (e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function (e) {
            var t, n, i, o = 0,
                r = K.call(arguments),
                s = r.length,
                a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : oe.Deferred(),
                c = function (e, n, i) {
                    return function (o) {
                        n[e] = this, i[e] = arguments.length > 1 ? K.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && oe.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var we;
    oe.fn.ready = function (e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!fe.body) return setTimeout(oe.ready);
                oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (we.resolveWith(fe, [oe]), oe.fn.triggerHandler && (oe(fe).triggerHandler("ready"), oe(fe).off("ready")))
            }
        }
    }), oe.ready.promise = function (t) {
        if (!we) if (we = oe.Deferred(), "complete" === fe.readyState) setTimeout(oe.ready);
        else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1);
        else {
            fe.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == e.frameElement && fe.documentElement
            } catch (i) {}
            n && n.doScroll && ! function o() {
                if (!oe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    s(), oe.ready()
                }
            }()
        }
        return we.promise(t)
    };
    var _e, Se = "undefined";
    for (_e in oe(ne)) break;
    ne.ownLast = "0" !== _e, ne.inlineBlockNeedsLayout = !1, oe(function () {
        var e, t, n, i;
        n = fe.getElementsByTagName("body")[0], n && n.style && (t = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
    }),

    function () {
        var e = fe.createElement("div");
        if (null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                ne.deleteExpando = !1
            }
        }
        e = null
    }(), oe.acceptData = function (e) {
        var t = oe.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
    };
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xe = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? oe.cache[e[oe.expando]] : e[oe.expando], !! e && !c(e)
        },
        data: function (e, t, n) {
            return u(e, t, n)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, n) {
            return u(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), oe.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = oe.data(r), 1 === r.nodeType && !oe._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(r, i, o[i])));
                    oe._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                oe.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                oe.data(this, e, t)
            }) : r ? l(r, e, oe.data(r, e)) : void 0
        },
        removeData: function (e) {
            return this.each(function () {
                oe.removeData(this, e)
            })
        }
    }), oe.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = oe._data(e, t), n && (!i || oe.isArray(n) ? i = oe._data(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = oe._queueHooks(e, t),
                s = function () {
                    oe.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return oe._data(e, n) || oe._data(e, n, {
                empty: oe.Callbacks("once memory").add(function () {
                    oe._removeData(e, t + "queue"), oe._removeData(e, n)
                })
            })
        }
    }), oe.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                o = oe.Deferred(),
                r = this,
                s = this.length,
                a = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = oe._data(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Pe = ["Top", "Right", "Bottom", "Left"],
        Ee = function (e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        }, Me = oe.access = function (e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === oe.type(n)) {
                o = !0;
                for (a in n) oe.access(e, t, a, n[a], !0, r, s)
            } else if (void 0 !== i && (o = !0, oe.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                return c.call(oe(e), n)
            })), t)) for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        }, $e = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = fe.createElement("input"),
            t = fe.createElement("div"),
            n = fe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !! t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onmousedown", function () {
            ne.noCloneEvent = !1
        }), t.cloneNode(!0).mousedown()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),

    function () {
        var t, n, i = fe.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Ie = /^(?:input|select|textarea)$/i,
        ke = /^key/,
        De = /^(?:mouse|pointer|contextmenu)|mousedown/,
        He = /^(?:focusinfocus|focusoutblur)$/,
        Ge = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, h, p, f, m, g = oe._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = oe.guid++), (s = g.events) || (s = g.events = {}), (u = g.handle) || (u = g.handle = function (e) {
                    return typeof oe === Se || e && oe.event.triggered === e.type ? void 0 : oe.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), t = (t || "").match(be) || [""], a = t.length; a--;) r = Ge.exec(t[a]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (c = oe.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = oe.event.special[p] || {}, d = oe.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, l), (h = s[p]) || (h = s[p] = [], h.delegateCount = 0, c.setup && c.setup.call(e, i, f, u) !== !1 || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), oe.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, h, p, f, m, g = oe.hasData(e) && oe._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(be) || [""], c = t.length; c--;) if (a = Ge.exec(t[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (d = oe.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;) s = h[r], !o && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(r, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(e, s));
                    l && !h.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || oe.removeEvent(e, p, g.handle), delete u[p])
                } else for (p in u) oe.event.remove(e, p + t[c], n, i, !0);
                oe.isEmptyObject(u) && (delete g.handle, oe._removeData(e, "events"))
            }
        },
        trigger: function (t, n, i, o) {
            var r, s, a, l, c, u, d, h = [i || fe],
                p = te.call(t, "type") ? t.type : t,
                f = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = i = i || fe, 3 !== i.nodeType && 8 !== i.nodeType && !He.test(p + oe.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), c = oe.event.special[p] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!o && !c.noBubble && !oe.isWindow(i)) {
                    for (l = c.delegateType || p, He.test(l + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), u = a;
                    u === (i.ownerDocument || fe) && h.push(u.defaultView || u.parentWindow || e)
                }
                for (d = 0;
                (a = h[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || p, r = (oe._data(a, "events") || {})[t.type] && oe._data(a, "handle"), r && r.apply(a, n), r = s && a[s], r && r.apply && oe.acceptData(a) && (t.result = r.apply(a, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !o && !t.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && oe.acceptData(i) && s && i[p] && !oe.isWindow(i)) {
                    u = i[s], u && (i[s] = null), oe.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    oe.event.triggered = void 0, u && (i[s] = u)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = oe.event.fix(e);
            var t, n, i, o, r, s = [],
                a = K.call(arguments),
                l = (oe._data(this, "events") || {})[e.type] || [],
                c = oe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = oe.event.handlers.call(this, e, l), t = 0;
                (o = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, r = 0;
                (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "mousedown" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "mousedown" !== e.type)) {
                for (o = [], r = 0; a > r; r++) i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(i);
                o.length && s.push({
                    elem: l,
                    handlers: o
                })
            }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function (e) {
            if (e[oe.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = De.test(o) ? this.mouseHooks : ke.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || fe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, r) : e
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
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, o, r = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || fe, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            mousedown: {
                trigger: function () {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.mousedown ? (this.mousedown(), !1) : void 0
                },
                _default: function (e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var o = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? oe.event.trigger(o, null, t) : oe.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, oe.removeEvent = fe.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Se && (e[i] = null), e.detachEvent(i, n))
    }, oe.Event = function (e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : p) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return (!o || o !== i && !oe.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (oe.event.special.submit = {
        setup: function () {
            return !oe.nodeName(this, "form") && void oe.event.add(this, "mousedown._submit keypress._submit", function (e) {
                var t = e.target,
                    n = oe.nodeName(t, "input") || oe.nodeName(t, "button") ? t.form : void 0;
                n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), oe._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && oe.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return !oe.nodeName(this, "form") && void oe.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (oe.event.special.change = {
        setup: function () {
            return Ie.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "mousedown._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, e, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ie.test(t.nodeName) && !oe._data(t, "changeBubbles") && (oe.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || oe.event.simulate("change", this.parentNode, e, !0)
                }), oe._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return oe.event.remove(this, "._change"), !Ie.test(this.nodeName)
        }
    }), ne.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            oe.event.simulate(t, e.target, oe.event.fix(e), !0)
        };
        oe.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    o = oe._data(i, t);
                o || i.addEventListener(e, n, !0), oe._data(i, t, (o || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    o = oe._data(i, t) - 1;
                o ? oe._data(i, t, o) : (i.removeEventListener(e, n, !0), oe._removeData(i, t))
            }
        }
    }), oe.fn.extend({
        on: function (e, t, n, i, o) {
            var r, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (r in e) this.on(r, t, n, e[r], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = p;
            else if (!i) return this;
            return 1 === o && (s = i, i = function (e) {
                return oe().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = oe.guid++)), this.each(function () {
                oe.event.add(this, e, i, n, t)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function () {
                oe.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Be = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Oe = / jQuery\d+="(?:null|\d+)"/g,
        Ne = new RegExp("<(?:" + Be + ")[\\s/>]", "i"),
        Le = /^\s+/,
        je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Re = /<([\w:]+)/,
        Fe = /<tbody/i,
        We = /<|&#?\w+;/,
        Ve = /<(?:script|style|link)/i,
        ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^$|\/(?:java|ecma)script/i,
        Xe = /^true\/(.*)/,
        Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ke = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Ze = m(fe),
        Ye = Ze.appendChild(fe.createElement("div"));
    Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td, oe.extend({
        clone: function (e, t, n) {
            var i, o, r, s, a, l = oe.contains(e.ownerDocument, e);
            if (ne.html5Clone || oe.isXMLDoc(e) || !Ne.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ye.innerHTML = e.outerHTML, Ye.removeChild(r = Ye.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e))) for (i = g(r), a = g(e), s = 0; null != (o = a[s]); ++s) i[s] && S(o, i[s]);
            if (t) if (n) for (a = a || g(e), i = i || g(r), s = 0; null != (o = a[s]); s++) _(o, i[s]);
            else _(e, r);
            return i = g(r, "script"), i.length > 0 && w(i, !l && g(e, "script")), i = a = o = null, r
        },
        buildFragment: function (e, t, n, i) {
            for (var o, r, s, a, l, c, u, d = e.length, h = m(t), p = [], f = 0; d > f; f++) if (r = e[f], r || 0 === r) if ("object" === oe.type(r)) oe.merge(p, r.nodeType ? [r] : r);
            else if (We.test(r)) {
                for (a = a || h.appendChild(t.createElement("div")), l = (Re.exec(r) || ["", ""])[1].toLowerCase(), u = Ke[l] || Ke._default, a.innerHTML = u[1] + r.replace(je, "<$1></$2>") + u[2], o = u[0]; o--;) a = a.lastChild;
                if (!ne.leadingWhitespace && Le.test(r) && p.push(t.createTextNode(Le.exec(r)[0])), !ne.tbody) for (r = "table" !== l || Fe.test(r) ? "<table>" !== u[1] || Fe.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) oe.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (oe.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = h.lastChild
            } else p.push(t.createTextNode(r));
            for (a && h.removeChild(a), ne.appendChecked || oe.grep(g(p, "input"), v), f = 0; r = p[f++];) if ((!i || -1 === oe.inArray(r, i)) && (s = oe.contains(r.ownerDocument, r), a = g(h.appendChild(r), "script"), s && w(a), n)) for (o = 0; r = a[o++];) qe.test(r.type || "") && n.push(r);
            return a = null, h
        },
        cleanData: function (e, t) {
            for (var n, i, o, r, s = 0, a = oe.expando, l = oe.cache, c = ne.deleteExpando, u = oe.event.special; null != (n = e[s]); s++) if ((t || oe.acceptData(n)) && (o = n[a], r = o && l[o])) {
                if (r.events) for (i in r.events) u[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, r.handle);
                l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== Se ? n.removeAttribute(a) : n[a] = null, U.push(o))
            }
        }
    }), oe.fn.extend({
        text: function (e) {
            return Me(this, function (e) {
                return void 0 === e ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
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
            for (var n, i = e ? oe.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || oe.cleanData(g(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && oe.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && oe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return oe.clone(this, e, t)
            })
        },
        html: function (e) {
            return Me(this, function (e) {
                var t = this[0] || {}, n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : void 0;
                if (!("string" != typeof e || Ve.test(e) || !ne.htmlSerialize && Ne.test(e) || !ne.leadingWhitespace && Le.test(e) || Ke[(Re.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(je, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, oe.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = Z.apply([], e);
            var n, i, o, r, s, a, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                h = e[0],
                p = oe.isFunction(h);
            if (p || c > 1 && "string" == typeof h && !ne.checkClone && ze.test(h)) return this.each(function (n) {
                var i = u.eq(n);
                p && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
            });
            if (c && (a = oe.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (r = oe.map(g(a, "script"), b), o = r.length; c > l; l++) i = a, l !== d && (i = oe.clone(i, !0, !0), o && oe.merge(r, g(i, "script"))), t.call(this[l], i, l);
                if (o) for (s = r[r.length - 1].ownerDocument, oe.map(r, T), l = 0; o > l; l++) i = r[l], qe.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(s, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ue, "")));
                a = n = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        oe.fn[e] = function (e) {
            for (var n, i = 0, o = [], r = oe(e), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), oe(r[i])[t](n), Y.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Qe, Je = {};
    ! function () {
        var e;
        ne.shrinkWrapBlocks = function () {
            if (null != e) return e;
            e = !1;
            var t, n, i;
            return n = fe.getElementsByTagName("body")[0], n && n.style ? (t = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Se && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(fe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        it = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"),
        ot = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, tt = function (e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || et(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)), it.test(s) && nt.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
    }) : fe.documentElement.currentStyle && (et = function (e) {
        return e.currentStyle
    }, tt = function (e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || et(e), s = n ? n[t] : void 0, null == s && a && a[t] && (s = a[t]), it.test(s) && !ot.test(t) && (i = a.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
    }), ! function () {
        function t() {
            var t, n, i, o;
            n = fe.getElementsByTagName("body")[0], n && n.style && (t = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, s = "4px" === (e.getComputedStyle(t, null) || {
                width: "4px"
            }).width, o = t.appendChild(fe.createElement("div")), o.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(o)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = t.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), n.removeChild(i))
        }
        var n, i, o, r, s, a, l;
        n = fe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (i = o && o.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !! i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, oe.extend(ne, {
            reliableHiddenOffsets: function () {
                return null == a && t(), a
            },
            boxSizingReliable: function () {
                return null == s && t(), s
            },
            pixelPosition: function () {
                return null == r && t(), r
            },
            reliableMarginRight: function () {
                return null == l && t(), l
            }
        }))
    }(), oe.swap = function (e, t, n, i) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = s[r];
        return o
    };
    var rt = /alpha\([^)]*\)/i,
        st = /opacity\s*=\s*([^)]*)/,
        at = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Ae + ")(.*)$", "i"),
        ct = new RegExp("^([+-])=(" + Ae + ")", "i"),
        ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, dt = {
            letterSpacing: "0",
            fontWeight: "400"
        }, ht = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
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
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = oe.camelCase(t),
                    l = e.style;
                if (t = oe.cssProps[a] || (oe.cssProps[a] = P(l, a)), s = oe.cssHooks[t] || oe.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                if (r = typeof n, "string" === r && (o = ct.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || oe.cssNumber[a] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                    l[t] = n
                } catch (c) {}
            }
        },
        css: function (e, t, n, i) {
            var o, r, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = P(e.style, a)), s = oe.cssHooks[t] || oe.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = tt(e, t, i)), "normal" === r && t in dt && (r = dt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || oe.isNumeric(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function (e, t) {
        oe.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? at.test(oe.css(e, "display")) && 0 === e.offsetWidth ? oe.swap(e, ut, function () {
                    return I(e, t, i)
                }) : I(e, t, i) : void 0
            },
            set: function (e, n, i) {
                var o = i && et(e);
                return M(e, n, i ? $(e, t, i, ne.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ne.opacity || (oe.cssHooks.opacity = {
        get: function (e, t) {
            return st.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                i = e.currentStyle,
                o = oe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === oe.trim(r.replace(rt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rt.test(r) ? r.replace(rt, o) : r + " " + o)
        }
    }), oe.cssHooks.marginRight = A(ne.reliableMarginRight, function (e, t) {
        return t ? oe.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        oe.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Pe[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, nt.test(e) || (oe.cssHooks[e + t].set = M)
    }), oe.fn.extend({
        css: function (e, t) {
            return Me(this, function (e, t, n) {
                var i, o, r = {}, s = 0;
                if (oe.isArray(t)) {
                    for (i = et(e), o = t.length; o > s; s++) r[t[s]] = oe.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return E(this, !0)
        },
        hide: function () {
            return E(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ee(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = k, k.prototype = {
        constructor: k,
        init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = k.propHooks[this.prop];
            return e && e.get ? e.get(this) : k.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = k.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : k.propHooks._default.set(this), this
        }
    }, k.prototype.init.prototype = k.prototype, k.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, oe.fx = k.prototype.init, oe.fx.step = {};
    var pt, ft, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [B],
        bt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = gt.exec(t),
                    r = o && o[3] || (oe.cssNumber[e] ? "" : "px"),
                    s = (oe.cssNumber[e] || "px" !== r && +i) && gt.exec(oe.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +i || 1;
                    do a = a || ".5", s /= a, oe.style(n.elem, e, s + r);
                    while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    oe.Animation = oe.extend(N, {
        tweener: function (e, t) {
            oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, o = e.length; o > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? yt.unshift(e) : yt.push(e)
        }
    }), oe.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
        }, i
    }, oe.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var o = oe.isEmptyObject(e),
                r = oe.speed(t, n, i),
                s = function () {
                    var t = N(this, oe.extend({}, e), r);
                    (o || oe._data(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    r = oe.timers,
                    s = oe._data(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else for (o in s) s[o] && s[o].stop && vt.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                (t || !n) && oe.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = oe._data(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    r = oe.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), oe.each(["toggle", "show", "hide"], function (e, t) {
        var n = oe.fn[t];
        oe.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, i, o)
        }
    }), oe.each({
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
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
        oe.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), oe.timers = [], oe.fx.tick = function () {
        var e, t = oe.timers,
            n = 0;
        for (pt = oe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || oe.fx.stop(), pt = void 0
    }, oe.fx.timer = function (e) {
        oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function () {
        ft || (ft = setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function () {
        clearInterval(ft), ft = null
    }, oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, oe.fn.delay = function (e, t) {
        return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    },

    function () {
        var e, t, n, i, o;
        t = fe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = fe.createElement("select"), o = n.appendChild(fe.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !! e.value, ne.optSelected = o.selected, ne.enctype = !! fe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, e = fe.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
    }();
    var Tt = /\r/g;
    oe.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = oe.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, oe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Tt, "") : null == n ? "" : n)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++) if (n = i[l], !(!n.selected && l !== o || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                        if (t = oe(n).val(), r) return t;
                        s.push(t)
                    }
                    return s
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = oe.makeArray(t), s = o.length; s--;) if (i = o[s], oe.inArray(oe.valHooks.option.get(i), r) >= 0) try {
                        i.selected = n = !0
                    } catch (a) {
                        i.scrollHeight
                    } else i.selected = !1;
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (oe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt, _t, St = oe.expr.attrHandle,
        Ct = /^(?:checked|selected)$/i,
        xt = ne.getSetAttribute,
        At = ne.input;
    oe.fn.extend({
        attr: function (e, t) {
            return Me(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === Se ? oe.prop(e, t, n) : (1 === r && oe.isXMLDoc(e) || (t = t.toLowerCase(), i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? _t : wt)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void oe.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var n, i, o = 0,
                r = t && t.match(be);
            if (r && 1 === e.nodeType) for (; n = r[o++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? At && xt || !Ct.test(n) ? e[i] = !1 : e[oe.camelCase("default-" + n)] = e[i] = !1 : oe.attr(e, n, ""), e.removeAttribute(xt ? n : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ne.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), _t = {
        set: function (e, t, n) {
            return t === !1 ? oe.removeAttr(e, n) : At && xt || !Ct.test(n) ? e.setAttribute(!xt && oe.propFix[n] || n, n) : e[oe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = St[t] || oe.find.attr;
        St[t] = At && xt || !Ct.test(t) ? function (e, t, i) {
            var o, r;
            return i || (r = St[t], St[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, St[t] = r), o
        } : function (e, t, n) {
            return n ? void 0 : e[oe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), At && xt || (oe.attrHooks.value = {
        set: function (e, t, n) {
            return oe.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
        }
    }), xt || (wt = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, St.id = St.name = St.coords = function (e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, oe.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: wt.set
    }, oe.attrHooks.contenteditable = {
        set: function (e, t, n) {
            wt.set(e, "" !== t && t, n)
        }
    }, oe.each(["width", "height"], function (e, t) {
        oe.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (oe.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Pt = /^(?:input|select|textarea|button|object)$/i,
        Et = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (e, t) {
            return Me(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = oe.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
                "class": "className"
        },
        prop: function (e, t, n) {
            var i, o, r, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !oe.isXMLDoc(e), r && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Pt.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || oe.each(["href", "src"], function (e, t) {
        oe.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (oe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    }), ne.enctype || (oe.propFix.enctype = "encoding");
    var Mt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, s, a = 0,
                l = this.length,
                c = "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).addClass(e.call(this, t, this.className))
            });
            if (c) for (t = (e || "").match(be) || []; l > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mt, " ") : " ")) {
                for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                s = oe.trim(i), n.className !== s && (n.className = s)
            }
            return this
        },
        removeClass: function (e) {
            var t, n, i, o, r, s, a = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof e && e;
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).removeClass(e.call(this, t, this.className))
            });
            if (c) for (t = (e || "").match(be) || []; l > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mt, " ") : "")) {
                for (r = 0; o = t[r++];) for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                s = e ? oe.trim(i) : "", n.className !== s && (n.className = s)
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(oe.isFunction(e) ? function (n) {
                oe(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n) for (var t, i = 0, o = oe(this), r = e.match(be) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === Se || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Mt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload mousedown dblmousedown mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        oe.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var $t = oe.now(),
        It = /\?/,
        kt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            o = oe.trim(t + "");
        return o && !oe.trim(o.replace(kt, function (e, t, o, r) {
            return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
        })) ? Function("return " + o)() : oe.error("Invalid JSON: " + t)
    }, oe.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var Dt, Ht, Gt = /#.*$/,
        Bt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Nt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lt = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ft = {}, Wt = {}, Vt = "*/".concat("*");
    try {
        Ht = location.href
    } catch (zt) {
        Ht = fe.createElement("a"), Ht.href = "", Ht = Ht.href
    }
    Dt = Rt.exec(Ht.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ht,
            type: "GET",
            isLocal: Nt.test(Dt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vt,
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
                    "text json": oe.parseJSON,
                    "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? R(R(e, oe.ajaxSettings), t) : R(oe.ajaxSettings, e)
        },
        ajaxPrefilter: L(Ft),
        ajaxTransport: L(Wt),
        ajax: function (e, t) {
            function n(e, t, n, i) {
                var o, u, v, y, T, _ = t;
                2 !== b && (b = 2, a && clearTimeout(a), c = void 0, s = i || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = F(d, w, n)), y = W(d, y, w, o), o ? (d.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (oe.lastModified[r] = T), T = w.getResponseHeader("etag"), T && (oe.etag[r] = T)), 204 === e || "HEAD" === d.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = y.state, u = y.data, v = y.error, o = !v)) : (v = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || _) + "", o ? f.resolveWith(h, [u, _, w]) : f.rejectWith(h, [w, _, v]), w.statusCode(g), g = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? u : v]), m.fireWith(h, [w, _]), l && (p.trigger("ajaxComplete", [w, d]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, r, s, a, l, c, u, d = oe.ajaxSetup({}, t),
                h = d.context || d,
                p = d.context && (h.nodeType || h.jquery) ? oe(h) : oe.event,
                f = oe.Deferred(),
                m = oe.Callbacks("once memory"),
                g = d.statusCode || {}, v = {}, y = {}, b = 0,
                T = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!u) for (u = {}; t = Ot.exec(s);) u[t[1].toLowerCase()] = t[2];
                            t = u[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e) if (2 > b) for (t in e) g[t] = [g[t], e[t]];
                        else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return c && c.abort(t), n(0, t), this
                    }
                };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Ht) + "").replace(Gt, "").replace(jt, Dt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = oe.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = Rt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Dt[1] && i[2] === Dt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Dt[3] || ("http:" === Dt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = oe.param(d.data, d.traditional)), j(Ft, d, t, w), 2 === b) return w;
            l = oe.event && d.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Lt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (It.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Bt.test(r) ? r.replace(Bt, "$1_=" + $t++) : r + (It.test(r) ? "&" : "?") + "_=" + $t++)), d.ifModified && (oe.lastModified[r] && w.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && w.setRequestHeader("If-None-Match", oe.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) w.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(h, w, d) === !1 || 2 === b)) return w.abort();
            T = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) w[o](d[o]);
            if (c = j(Wt, d, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (a = setTimeout(function () {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, c.send(v, n)
                } catch (_) {
                    if (!(2 > b)) throw _;
                    n(-1, _)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function (e, t) {
        oe[t] = function (e, n, i, o) {
            return oe.isFunction(n) && (o = o || i, i = n, n = void 0), oe.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), oe._evalUrl = function (e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
                "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function (e) {
            if (oe.isFunction(e)) return this.each(function (t) {
                oe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = oe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return this.each(oe.isFunction(e) ? function (t) {
                oe(this).wrapInner(e.call(this, t))
            } : function () {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = oe.isFunction(e);
            return this.each(function (n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || oe.css(e, "display"))
    }, oe.expr.filters.visible = function (e) {
        return !oe.expr.filters.hidden(e)
    };
    var qt = /%20/g,
        Xt = /\[\]$/,
        Ut = /\r?\n/g,
        Kt = /^(?:submit|button|image|reset|file)$/i,
        Zt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (e, t) {
        var n, i = [],
            o = function (e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
            o(this.name, this.value)
        });
        else for (n in e) V(n, e[n], t, o);
        return i.join("&").replace(qt, "+")
    }, oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Zt.test(this.nodeName) && !Kt.test(e) && (this.checked || !$e.test(e))
            }).map(function (e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Ut, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ut, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && z() || q()
    } : z;
    var Yt = 0,
        Qt = {}, Jt = oe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Qt) Qt[e](void 0, !0)
    }), ne.cors = !! Jt && "withCredentials" in Jt, Jt = ne.ajax = !! Jt, Jt && oe.ajaxTransport(function (e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function (n, i) {
                    var o, r = e.xhr(),
                        s = ++Yt;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) r[o] = e.xhrFields[o];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(e.hasContent && e.data || null), t = function (n, o) {
                        var a, l, c;
                        if (t && (o || 4 === r.readyState)) if (delete Qt[s], t = void 0, r.onreadystatechange = oe.noop, o) 4 !== r.readyState && r.abort();
                        else {
                            c = {}, a = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                            try {
                                l = r.statusText
                            } catch (u) {
                                l = ""
                            }
                            a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                        }
                        c && i(a, l, c, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Qt[s] = t : t()
                },
                abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), oe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = fe.head || oe("head")[0] || fe.documentElement;
            return {
                send: function (i, o) {
                    t = fe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = en.pop() || oe.expando + "_" + $t++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(tn, "$1" + o) : t.jsonp !== !1 && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return s || oe.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, en.push(o)), s && oe.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), oe.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || fe;
        var i = de.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = oe.buildFragment([e], t, o), o && o.length && oe(o).remove(), oe.merge([], i.childNodes))
    };
    var nn = oe.fn.load;
    oe.fn.load = function (e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = oe.trim(e.slice(a, e.length)), e = e.slice(0, a)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && oe.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        oe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function (e) {
        return oe.grep(oe.timers, function (t) {
            return e === t.elem
        }).length
    };
    var on = e.document.documentElement;
    oe.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, s, a, l, c, u = oe.css(e, "position"),
                d = oe(e),
                h = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), r = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && oe.inArray("auto", [r, l]) > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + o), "using" in t ? t.using.call(e, h) : d.css(h)
        }
    }, oe.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                top: 0,
                left: 0
            }, o = this[0],
                r = o && o.ownerDocument;
            return r ? (t = r.documentElement, oe.contains(t, o) ? (typeof o.getBoundingClientRect !== Se && (i = o.getBoundingClientRect()), n = X(r), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === oe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (n = e.offset()), n.top += oe.css(e[0], "borderTopWidth", !0), n.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - oe.css(i, "marginTop", !0),
                    left: t.left - n.left - oe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || on; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || on
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = /Y/.test(t);
        oe.fn[e] = function (i) {
            return Me(this, function (e, i, o) {
                var r = X(e);
                return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? oe(r).scrollLeft() : o, n ? o : oe(r).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), oe.each(["top", "left"], function (e, t) {
        oe.cssHooks[t] = A(ne.pixelPosition, function (e, n) {
            return n ? (n = tt(e, t), it.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
                "": "outer" + e
        }, function (n, i) {
            oe.fn[i] = function (i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || o === !0 ? "margin" : "border");
                return Me(this, function (t, n, i) {
                    var o;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? oe.css(t, n, s) : oe.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), oe.fn.size = function () {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return oe
    });
    var rn = e.jQuery,
        sn = e.$;
    return oe.noConflict = function (t) {
        return e.$ === oe && (e.$ = sn), t && e.jQuery === oe && (e.jQuery = rn), oe
    }, typeof t === Se && (e.jQuery = e.$ = oe), oe
}), + function (e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t) if (void 0 !== e.style[n]) return {
            end: t[n]
        };
        return !1
    }
    e.fn.emulateTransitionEnd = function (t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(o, t), this
    }, e(function () {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function (e) {
    "use strict";

    function t(t, i) {
        return this.each(function () {
            var o = e(this),
                r = o.data("bs.modal"),
                s = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof t ? r[t](i) : s.show && r.show(i);
        })
    }
    var n = function (t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropmousedown = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function (t) {
        var i = this,
            o = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("mousedown.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropmousedown = !0)
            })
        }), this.backdrop(function () {
            var o = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            o ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function (t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("mousedown.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function (e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (t) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && o;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("mousedown.dismiss.bs.modal", e.proxy(function (e) {
                return this.ignoreBackdropmousedown ? void(this.ignoreBackdropmousedown = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function () {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else t && t()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function () {
        return e.fn.modal = i, this
    }, e(document).on("mousedown.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = e(this),
            o = i.attr("href"),
            r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function (e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(r, s, this)
    })
}(jQuery), ! function (e, t) {
    e(function () {
        "use strict";

        function e(e, t) {
            return null != e && null != t && e.toLowerCase() === t.toLowerCase()
        }

        function n(e, t) {
            var n, i, o = e.length;
            if (!o || !t) return !1;
            for (n = t.toLowerCase(), i = 0; o > i; ++i) if (n === e[i].toLowerCase()) return !0;
            return !1
        }

        function i(e) {
            for (var t in e) a.call(e, t) && (e[t] = new RegExp(e[t], "i"))
        }

        function o(e, t) {
            this.ua = e || "", this._cache = {}, this.maxPhoneWidth = t || 600
        }
        var r = {};
        r.mobileDetectRules = {
            phones: {
                iPhone: "\\biPhone\\b|\\biPod\\b",
                BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                Samsung: "Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205",
                LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",
                Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                Asus: "Asus.*Galaxy|PadFone.*Mobile",
                Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                Palm: "PalmSource|Palm",
                Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                Alcatel: "Alcatel",
                Nintendo: "Nintendo 3DS",
                Amoi: "Amoi",
                INQ: "INQ",
                GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
            },
            tablets: {
                iPad: "iPad|iPad.*Mobile",
                NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T360",
                Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b",
                SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C",
                BlackBerryTablet: "PlayBook|RIM Tablet",
                HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b",
                ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                LenovoTablet: "Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                ArnovaTablet: "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                IRUTablet: "M702pro",
                MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",
                MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                FlyTablet: "IQ310|Fly Vision",
                bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",
                HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                NecTablet: "\\bN-06D|\\bN-08D",
                PantechTablet: "Pantech.*P4100",
                BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                NabiTablet: "Android.*\\bNabi",
                KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                PlaystationTablet: "Playstation.*(Portable|Vita)",
                TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                GalapadTablet: "Android.*\\bG1\\b",
                MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                DPSTablet: "DPS Dream 9|DPS Dual 7",
                VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",
                EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                iMobileTablet: "i-mobile i-note",
                TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                AMPETablet: "Android.* A78 ",
                SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                TecnoTablet: "TECNO P9",
                JXDTablet: "Android.*\\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                FX2Tablet: "FX2 PAD7|FX2 PAD10",
                XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                CaptivaTablet: "CAPTIVA PAD",
                IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                JaytechTablet: "TPC-PA762",
                BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                UbislateTablet: "UbiSlate[\\s]?7C",
                PocketBookTablet: "Pocketbook",
                Hudl: "Hudl HT7S3",
                TelstraTablet: "T-Hub2",
                GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b|\\bTP750\\b"
            },
            oss: {
                AndroidOS: "Android",
                BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                WindowsPhoneOS: "Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
                MeeGoOS: "MeeGo",
                MaemoOS: "Maemo",
                JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                webOS: "webOS|hpwOS",
                badaOS: "\\bBada\\b",
                BREWOS: "BREW"
            },
            uas: {
                Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                Dolfin: "\\bDolfin\\b",
                Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                Skyfire: "Skyfire",
                IE: "IEMobile|MSIEMobile",
                Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
                Bolt: "bolt",
                TeaShark: "teashark",
                Blazer: "Blazer",
                Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                Tizen: "Tizen",
                UCBrowser: "UC.*Browser|UCWEB",
                baiduboxapp: "baiduboxapp",
                baidubrowser: "baidubrowser",
                DiigoBrowser: "DiigoBrowser",
                Puffin: "Puffin",
                Mercury: "\\bMercury\\b",
                ObigoBrowser: "Obigo",
                NetFront: "NF-Browser",
                GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
            },
            props: {
                Mobile: "Mobile/[VER]",
                Build: "Build/[VER]",
                Version: "Version/[VER]",
                VendorID: "VendorID/[VER]",
                iPad: "iPad.*CPU[a-z ]+[VER]",
                iPhone: "iPhone.*CPU[a-z ]+[VER]",
                iPod: "iPod.*CPU[a-z ]+[VER]",
                Kindle: "Kindle/[VER]",
                Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                Coast: ["Coast/[VER]"],
                Dolfin: "Dolfin/[VER]",
                Firefox: "Firefox/[VER]",
                Fennec: "Fennec/[VER]",
                IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                NetFront: "NetFront/[VER]",
                NokiaBrowser: "NokiaBrowser/[VER]",
                Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                    "Opera Mini": "Opera Mini/[VER]",
                    "Opera Mobi": "Version/[VER]",
                    "UC Browser": "UC Browser[VER]",
                MQQBrowser: "MQQBrowser/[VER]",
                MicroMessenger: "MicroMessenger/[VER]",
                baiduboxapp: "baiduboxapp/[VER]",
                baidubrowser: "baidubrowser/[VER]",
                Iron: "Iron/[VER]",
                Safari: ["Version/[VER]", "Safari/[VER]"],
                Skyfire: "Skyfire/[VER]",
                Tizen: "Tizen/[VER]",
                Webkit: "webkit[ /][VER]",
                Gecko: "Gecko/[VER]",
                Trident: "Trident/[VER]",
                Presto: "Presto/[VER]",
                iOS: " \\bi?OS\\b [VER][ ;]{1}",
                Android: "Android [VER]",
                BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                BREW: "BREW [VER]",
                Java: "Java/[VER]",
                    "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                    "Windows Phone": "Windows Phone [VER]",
                    "Windows CE": "Windows CE/[VER]",
                    "Windows NT": "Windows NT [VER]",
                Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                webOS: ["webOS/[VER]", "hpwOS/[VER];"]
            },
            utils: {
                Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                DesktopMode: "WPDesktop",
                TV: "SonyDTV|HbbTV",
                WebKit: "(webkit)[ /]([\\w.]+)",
                Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                Watch: "SM-V700"
            }
        }, r.detectMobileBrowsers = {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i
        };
        var s, a = Object.prototype.hasOwnProperty;
        return r.FALLBACK_PHONE = "UnknownPhone", r.FALLBACK_TABLET = "UnknownTablet", r.FALLBACK_MOBILE = "UnknownMobile", s = "isArray" in Array ? Array.isArray : function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },

        function () {
            var e, t, n, o, l, c, u = r.mobileDetectRules;
            for (e in u.props) if (a.call(u.props, e)) {
                for (t = u.props[e], s(t) || (t = [t]), l = t.length, o = 0; l > o; ++o) n = t[o], c = n.indexOf("[VER]"), c >= 0 && (n = n.substring(0, c) + "([\\w._\\+]+)" + n.substring(c + 5)), t[o] = new RegExp(n, "i");
                u.props[e] = t
            }
            i(u.oss), i(u.phones), i(u.tablets), i(u.uas), i(u.utils), u.oss0 = {
                WindowsPhoneOS: u.oss.WindowsPhoneOS,
                WindowsMobileOS: u.oss.WindowsMobileOS
            }
        }(), r.findMatch = function (e, t) {
            for (var n in e) if (a.call(e, n) && e[n].test(t)) return n;
            return null
        }, r.findMatches = function (e, t) {
            var n = [];
            for (var i in e) a.call(e, i) && e[i].test(t) && n.push(i);
            return n
        }, r.getVersionStr = function (e, t) {
            var n, i, o, s, l = r.mobileDetectRules.props;
            if (a.call(l, e)) for (n = l[e], o = n.length, i = 0; o > i; ++i) if (s = n[i].exec(t), null !== s) return s[1];
            return null
        }, r.getVersion = function (e, t) {
            var n = r.getVersionStr(e, t);
            return n ? r.prepareVersionNo(n) : NaN
        }, r.prepareVersionNo = function (e) {
            var t;
            return t = e.split(/[a-z._ \/\-]/i), 1 === t.length && (e = t[0]), t.length > 1 && (e = t[0] + ".", t.shift(), e += t.join("")), Number(e)
        }, r.isMobileFallback = function (e) {
            return r.detectMobileBrowsers.fullPattern.test(e) || r.detectMobileBrowsers.shortPattern.test(e.substr(0, 4))
        }, r.isTabletFallback = function (e) {
            return r.detectMobileBrowsers.tabletPattern.test(e)
        }, r.prepareDetectionCache = function (e, n, i) {
            if (e.mobile === t) {
                var s, a, l;
                return (a = r.findMatch(r.mobileDetectRules.tablets, n)) ? (e.mobile = e.tablet = a, void(e.phone = null)) : (s = r.findMatch(r.mobileDetectRules.phones, n)) ? (e.mobile = e.phone = s, void(e.tablet = null)) : void(r.isMobileFallback(n) ? (l = o.isPhoneSized(i), l === t ? (e.mobile = r.FALLBACK_MOBILE, e.tablet = e.phone = null) : l ? (e.mobile = e.phone = r.FALLBACK_PHONE, e.tablet = null) : (e.mobile = e.tablet = r.FALLBACK_TABLET, e.phone = null)) : r.isTabletFallback(n) ? (e.mobile = e.tablet = r.FALLBACK_TABLET, e.phone = null) : e.mobile = e.tablet = e.phone = null)
            }
        }, r.mobileGrade = function (e) {
            var t = null !== e.mobile();
            return e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !t || e.version("Safari") >= 5 && !t || e.version("Firefox") >= 4 && !t || e.version("MSIE") >= 7 && !t || e.version("Opera") >= 10 && !t ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile") <= 5.2, "C")
        }, r.detectOS = function (e) {
            return r.findMatch(r.mobileDetectRules.oss0, e) || r.findMatch(r.mobileDetectRules.oss, e)
        }, r.getDeviceSmallerSide = function () {
            return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
        }, o.prototype = {
            constructor: o,
            mobile: function () {
                return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
            },
            phone: function () {
                return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
            },
            tablet: function () {
                return r.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
            },
            userAgent: function () {
                return this._cache.userAgent === t && (this._cache.userAgent = r.findMatch(r.mobileDetectRules.uas, this.ua)), this._cache.userAgent
            },
            userAgents: function () {
                return this._cache.userAgents === t && (this._cache.userAgents = r.findMatches(r.mobileDetectRules.uas, this.ua)), this._cache.userAgents
            },
            os: function () {
                return this._cache.os === t && (this._cache.os = r.detectOS(this.ua)), this._cache.os
            },
            version: function (e) {
                return r.getVersion(e, this.ua)
            },
            versionStr: function (e) {
                return r.getVersionStr(e, this.ua)
            },
            is: function (t) {
                return n(this.userAgents(), t) || e(t, this.os()) || e(t, this.phone()) || e(t, this.tablet()) || n(r.findMatches(r.mobileDetectRules.utils, this.ua), t)
            },
            match: function (e) {
                return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
            },
            isPhoneSized: function (e) {
                return o.isPhoneSized(e || this.maxPhoneWidth)
            },
            mobileGrade: function () {
                return this._cache.grade === t && (this._cache.grade = r.mobileGrade(this)), this._cache.grade
            }
        }, "undefined" != typeof window && window.screen ? o.isPhoneSized = function (e) {
            return 0 > e ? t : r.getDeviceSmallerSide() <= e
        } : o.isPhoneSized = function () {}, o._impl = r, o
    })
}(function (e) {
    if ("undefined" != typeof module && module.exports) return function (e) {
        module.exports = e()
    };
    if ("function" == typeof define && define.amd) return define;
    if ("undefined" != typeof window) return function (e) {
        window.MobileDetect = e()
    };
    throw new Error("unknown environment")
}()),

function (e) {
    e.fn.hoverIntent = function (t, n, i) {
        var o = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        };
        o = "object" == typeof t ? e.extend(o, t) : e.isFunction(n) ? e.extend(o, {
            over: t,
            out: n,
            selector: i
        }) : e.extend(o, {
            over: t,
            out: t,
            selector: n
        });
        var r, s, a, l, c = function (e) {
            r = e.pageX, s = e.pageY
        }, u = function (t, n) {
            return n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.sqrt((a - r) * (a - r) + (l - s) * (l - s)) < o.sensitivity ? (e(n).off("mousemove.hoverIntent", c), n.hoverIntent_s = !0, o.over.apply(n, [t])) : (a = r, l = s, n.hoverIntent_t = setTimeout(function () {
                u(t, n)
            }, o.interval), void 0)
        }, d = function (e, t) {
            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, o.out.apply(t, [e])
        }, h = function (t) {
            var n = e.extend({}, t),
                i = this;
            i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)), "mouseenter" === t.type ? (a = n.pageX, l = n.pageY, e(i).on("mousemove.hoverIntent", c), i.hoverIntent_s || (i.hoverIntent_t = setTimeout(function () {
                u(n, i)
            }, o.interval))) : (e(i).off("mousemove.hoverIntent", c), i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function () {
                d(n, i)
            }, o.timeout)))
        };
        return this.on({
            "mouseenter.hoverIntent": h,
                "mouseleave.hoverIntent": h
        }, o.selector)
    }
}(jQuery);
var coverVid = function (e, t, n) {
    function i(e, t) {
        var n = null;
        return function () {
            var i = this,
                o = arguments;
            window.clearTimeout(n), n = window.setTimeout(function () {
                e.apply(i, o)
            }, t)
        }
    }

    function o() {
        var i = e.parentNode.offsetHeight,
            o = e.parentNode.offsetWidth,
            r = t,
            s = n,
            a = i / s,
            l = o / r;
        l > a ? (e.style.height = "auto", e.style.width = o + "px") : (e.style.height = i + "px", e.style.width = "auto")
    }
    document.addEventListener("DOMContentLoaded", o), window.addEventListener("resize", i(o, 50)), e.style.position = "absolute", e.style.top = "50%", e.style.left = "50%", e.style["-webkit-transform"] = "translate(-50%, -50%)", e.style["-ms-transform"] = "translate(-50%, -50%)", e.style.transform = "translate(-50%, -50%)", e.parentNode.style.overflow = "hidden";
    e.getAttribute("poster");
    e.removeAttribute("poster"), e.parentNode.style.backgroundSize = "cover", e.parentNode.style.backgroundPosition = "center center";
    var r = "undefined" != typeof e.canPlayType,
        s = !1;
    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (s = !0), (!r || s) && e && e.parentNode && e.parentNode.removeChild(e)
};
window.jQuery && jQuery.fn.extend({
    coverVid: function () {
        return coverVid(this[0], arguments[0], arguments[1]), this
    }
}), ! function (e, t, n, i) {
    function o(t, n) {
        this.settings = null, this.options = e.extend({}, o.Defaults, n), this.$element = e(t), this.drag = e.extend({}, h), this.state = e.extend({}, p), this.e = e.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], e.each(o.Plugins, e.proxy(function (e, t) {
            this._plugins[e[0].toLowerCase() + e.slice(1)] = new t(this)
        }, this)), e.each(o.Pipe, e.proxy(function (t, n) {
            this._pipe.push({
                filter: n.filter,
                run: e.proxy(n.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function r(e) {
        if (e.touches !== i) return {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
        };
        if (e.touches === i) {
            if (e.pageX !== i) return {
                x: e.pageX,
                y: e.pageY
            };
            if (e.pageX === i) return {
                x: e.clientX,
                y: e.clientY
            }
        }
    }

    function s(e) {
        var t, i, o = n.createElement("div"),
            r = e;
        for (t in r) if (i = r[t], "undefined" != typeof o.style[i]) return o = null, [i, t];
        return [!1]
    }

    function a() {
        return s(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function l() {
        return s(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function c() {
        return s(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function u() {
        return "ontouchstart" in t || !! navigator.msMaxTouchPoints
    }

    function d() {
        return t.navigator.msPointerEnabled
    }
    var h, p, f;
    h = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, p = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, f = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, o.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, o.Plugins = {}, o.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function (e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var e = this._clones,
                t = this.$stage.children(".cloned");
            (t.length !== e.length || !this.settings.loop && e.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var e, t, n = this._clones,
                i = this._items,
                o = this.settings.loop ? n.length - Math.max(2 * this.settings.items, 4) : 0;
            for (e = 0, t = Math.abs(o / 2); t > e; e++) o > 0 ? (this.$stage.children().eq(i.length + n.length - 1).remove(), n.pop(), this.$stage.children().eq(0).remove(), n.pop()) : (n.push(n.length / 2), this.$stage.append(i[n[n.length - 1]].clone().addClass("cloned")), n.push(i.length - 1 - (n.length - 1) / 2), this.$stage.prepend(i[n[n.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var e, t, n, i = this.settings.rtl ? 1 : -1,
                o = (this.width() / this.settings.items).toFixed(3),
                r = 0;
            for (this._coordinates = [], t = 0, n = this._clones.length + this._items.length; n > t; t++) e = this._mergers[this.relative(t)], e = this.settings.mergeFit && Math.min(e, this.settings.items) || e, r += (this.settings.autoWidth ? this._items[this.relative(t)].width() + this.settings.margin : o * e) * i, this._coordinates.push(r)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var t, n, i = (this.width() / this.settings.items).toFixed(3),
                o = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                        "padding-left": this.settings.stagePadding || "",
                        "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(o), o = {
                width: this.settings.autoWidth ? "auto" : i - this.settings.margin
            }, o[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && e.grep(this._mergers, function (e) {
                return e > 1
            }).length > 0) for (t = 0, n = this._coordinates.length; n > t; t++) o.width = Math.abs(this._coordinates[t]) - Math.abs(this._coordinates[t - 1] || 0) - this.settings.margin, this.$stage.children().eq(t).css(o);
            else this.$stage.children().css(o)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (e) {
            e.current && this.reset(this.$stage.children().index(e.current))
        }
    }, {
        filter: ["position"],
        run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function () {
            var e, t, n, i, o = this.settings.rtl ? 1 : -1,
                r = 2 * this.settings.stagePadding,
                s = this.coordinates(this.current()) + r,
                a = s + this.width() * o,
                l = [];
            for (n = 0, i = this._coordinates.length; i > n; n++) e = this._coordinates[n - 1] || 0, t = Math.abs(this._coordinates[n]) + r * o, (this.op(e, "<=", s) && this.op(e, ">", a) || this.op(t, "<", s) && this.op(t, ">", a)) && l.push(n);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], o.prototype.initialize = function () {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var t, n, o;
            if (t = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, o = this.$element.children(n).width(), t.length && 0 >= o) return this.preloadAutoWidthImages(t), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = e("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, o.prototype.setup = function () {
        var t = this.viewport(),
            n = this.options.responsive,
            i = -1,
            o = null;
        n ? (e.each(n, function (e) {
            t >= e && e > i && (i = Number(e))
        }), o = e.extend({}, this.options, n[i]), delete o.responsive, o.responsiveClass && this.$element.attr("class", function (e, t) {
            return t.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + i)) : o = e.extend({}, this.options), (null === this.settings || this._breakpoint !== i) && (this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = i, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, o.prototype.optionsLogic = function () {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function (t) {
        var n = this.trigger("prepare", {
            content: t
        });
        return n.data || (n.data = e("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(t)), this.trigger("prepared", {
            content: n.data
        }), n.data
    }, o.prototype.update = function () {
        for (var t = 0, n = this._pipe.length, i = e.proxy(function (e) {
            return this[e]
        }, this._invalidated), o = {}; n > t;)(this._invalidated.all || e.grep(this._pipe[t].filter, i).length > 0) && this._pipe[t].run(o), t++;
        this._invalidated = {}
    }, o.prototype.width = function (e) {
        switch (e = e || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function () {
        return 0 !== this._items.length && ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = t.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
    }, o.prototype.eventsCall = function () {
        this.e._onDragStart = e.proxy(function (e) {
            this.onDragStart(e)
        }, this), this.e._onDragMove = e.proxy(function (e) {
            this.onDragMove(e)
        }, this), this.e._onDragEnd = e.proxy(function (e) {
            this.onDragEnd(e)
        }, this), this.e._onResize = e.proxy(function (e) {
            this.onResize(e)
        }, this), this.e._transitionEnd = e.proxy(function (e) {
            this.transitionEnd(e)
        }, this), this.e._preventmousedown = e.proxy(function (e) {
            this.preventmousedown(e)
        }, this)
    }, o.prototype.onThrottledResize = function () {
        t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
    }, o.prototype.eventsRouter = function (e) {
        var t = e.type;
        "mousedown" === t || "touchstart" === t ? this.onDragStart(e) : "mousemove" === t || "touchmove" === t ? this.onDragMove(e) : "mouseup" === t || "touchend" === t ? this.onDragEnd(e) : "touchcancel" === t && this.onDragEnd(e)
    }, o.prototype.internalEvents = function () {
        var n = (u(), d());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", e.proxy(function (e) {
            this.eventsRouter(e)
        }, this)), this.$stage.on("dragstart", function () {
            return !1
        }), this.$stage.get(0).onselectstart = function () {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !n && this.$stage.on("touchstart touchcancel", e.proxy(function (e) {
            this.eventsRouter(e)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(t, "resize", e.proxy(this.onThrottledResize, this))
    }, o.prototype.onDragStart = function (i) {
        var o, s, a, l;
        if (o = i.originalEvent || i || t.event, 3 === o.which || this.state.isTouch) return !1;
        if ("mousedown" === o.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, s = r(o).x, a = r(o).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = s - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = s - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), e(n).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", e.proxy(function (e) {
            this.eventsRouter(e)
        }, this))
    }, o.prototype.onDragMove = function (e) {
        var n, o, s, a, l, c;
        this.state.isTouch && (this.state.isScrolling || (n = e.originalEvent || e || t.event, o = r(n).x, s = r(n).y, this.drag.currentX = o - this.drag.startX, this.drag.currentY = s - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), c = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + c), l + c)), (this.drag.distance > 8 || this.drag.distance < -8) && (n.preventDefault !== i ? n.preventDefault() : n.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, o.prototype.onDragEnd = function (t) {
        var i, o, r;
        if (this.state.isTouch) {
            if ("mouseup" === t.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), i = this.drag.endTime - this.drag.startTime, o = Math.abs(this.drag.distance), (o > 3 || i > 300) && this.removemousedown(this.drag.targetEl), r = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(r), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(r) || this.transitionEnd(), this.drag.distance = 0, e(n).off(".owl.dragEvents")
        }
    }, o.prototype.removemousedown = function (n) {
        this.drag.targetEl = n, e(n).on("mousedown.preventmousedown", this.e._preventmousedown), t.setTimeout(function () {
            e(n).off("mousedown.preventmousedown")
        }, 300)
    }, o.prototype.preventmousedown = function (t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation && t.stopPropagation(), e(t.target).off("mousedown.preventmousedown")
    }, o.prototype.getTransformProperty = function () {
        var e, n;
        return e = t.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), e = e.replace(/matrix(3d)?\(|\)/g, "").split(","), n = 16 === e.length, n !== !0 ? e[4] : e[12]
    }, o.prototype.closest = function (t) {
        var n = -1,
            i = 30,
            o = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || e.each(r, e.proxy(function (e, s) {
            return t > s - i && s + i > t ? n = e : this.op(t, "<", s) && this.op(t, ">", r[e + 1] || s - o) && (n = "left" === this.state.direction ? e + 1 : e), -1 === n
        }, this)), this.settings.loop || (this.op(t, ">", r[this.minimum()]) ? n = t = this.minimum() : this.op(t, "<", r[this.maximum()]) && (n = t = this.maximum())), n
    }, o.prototype.animate = function (t) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: t + "px"
        }) : this.$stage.animate({
            left: t
        }, this.speed() / 1e3, this.settings.fallbackEasing, e.proxy(function () {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, o.prototype.current = function (e) {
        if (e === i) return this._current;
        if (0 === this._items.length) return i;
        if (e = this.normalize(e), this._current !== e) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: e
                }
            });
            t.data !== i && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function (e) {
        this._invalidated[e] = !0
    }, o.prototype.reset = function (e) {
        e = this.normalize(e), e !== i && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function (t, n) {
        var o = n ? this._items.length : this._items.length + this._clones.length;
        return !e.isNumeric(t) || 1 > o ? i : t = this._clones.length ? (t % o + o) % o : Math.max(this.minimum(n), Math.min(this.maximum(n), t))
    }, o.prototype.relative = function (e) {
        return e = this.normalize(e), e -= this._clones.length / 2, this.normalize(e, !0)
    }, o.prototype.maximum = function (e) {
        var t, n, i, o = 0,
            r = this.settings;
        if (e) return this._items.length - 1;
        if (!r.loop && r.center) t = this._items.length - 1;
        else if (r.loop || r.center) if (r.loop || r.center) t = this._items.length + r.items;
        else {
            if (!r.autoWidth && !r.merge) throw "Can not detect maximum absolute position.";
            for (revert = r.rtl ? 1 : -1, n = this.$stage.width() - this.$element.width();
            (i = this.coordinates(o)) && !(i * revert >= n);) t = ++o
        } else t = this._items.length - r.items;
        return t
    }, o.prototype.minimum = function (e) {
        return e ? 0 : this._clones.length / 2
    }, o.prototype.items = function (e) {
        return e === i ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, o.prototype.mergers = function (e) {
        return e === i ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, o.prototype.clones = function (t) {
        var n = this._clones.length / 2,
            o = n + this._items.length,
            r = function (e) {
                return e % 2 === 0 ? o + e / 2 : n - (e + 1) / 2
            };
        return t === i ? e.map(this._clones, function (e, t) {
            return r(t)
        }) : e.map(this._clones, function (e, n) {
            return e === t ? r(n) : null
        })
    }, o.prototype.speed = function (e) {
        return e !== i && (this._speed = e), this._speed
    }, o.prototype.coordinates = function (t) {
        var n = null;
        return t === i ? e.map(this._coordinates, e.proxy(function (e, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (n = this._coordinates[t], n += (this.width() - n + (this._coordinates[t - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : n = this._coordinates[t - 1] || 0, n)
    }, o.prototype.duration = function (e, t, n) {
        return Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, o.prototype.to = function (n, i) {
        if (this.settings.loop) {
            var o = n - this.relative(this.current()),
                r = this.current(),
                s = this.current(),
                a = this.current() + o,
                l = 0 > s - a,
                c = this._clones.length + this._items.length;
            a < this.settings.items && l === !1 ? (r = s + this._items.length, this.reset(r)) : a >= c - this.settings.items && l === !0 && (r = s - this._items.length, this.reset(r)), t.clearTimeout(this.e._goToLoop), this.e._goToLoop = t.setTimeout(e.proxy(function () {
                this.speed(this.duration(this.current(), r + o, i)), this.current(r + o), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), n, i)), this.current(n), this.update()
    }, o.prototype.next = function (e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e);
    }, o.prototype.prev = function (e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, o.prototype.transitionEnd = function (e) {
        return (e === i || (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
    }, o.prototype.viewport = function () {
        var i;
        if (this.options.responsiveBaseElement !== t) i = e(this.options.responsiveBaseElement).width();
        else if (t.innerWidth) i = t.innerWidth;
        else {
            if (!n.documentElement || !n.documentElement.clientWidth) throw "Can not detect viewport width.";
            i = n.documentElement.clientWidth
        }
        return i
    }, o.prototype.replace = function (t) {
        this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function () {
            return 1 === this.nodeType
        }).each(e.proxy(function (e, t) {
            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(e.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function (e, t) {
        t = t === i ? this._items.length : this.normalize(t, !0), this.trigger("add", {
            content: e,
            position: t
        }), 0 === this._items.length || t === this._items.length ? (this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[t].before(e), this._items.splice(t, 0, e), this._mergers.splice(t, 0, 1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: t
        })
    }, o.prototype.remove = function (e) {
        e = this.normalize(e, !0), e !== i && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, o.prototype.addTriggerableEvents = function () {
        var t = e.proxy(function (t, n) {
            return e.proxy(function (e) {
                e.relatedTarget !== this && (this.suppress([n]), t.apply(this, [].slice.call(arguments, 1)), this.release([n]))
            }, this)
        }, this);
        e.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, e.proxy(function (e, n) {
            this.$element.on(e + ".owl.carousel", t(n, e + ".owl.carousel"))
        }, this))
    }, o.prototype.watchVisibility = function () {
        function n(e) {
            return e.offsetWidth > 0 && e.offsetHeight > 0
        }

        function i() {
            n(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), t.clearInterval(this.e._checkVisibile))
        }
        n(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), t.clearInterval(this.e._checkVisibile), this.e._checkVisibile = t.setInterval(e.proxy(i, this), 500))
    }, o.prototype.preloadAutoWidthImages = function (t) {
        var n, i, o, r;
        n = 0, i = this, t.each(function (s, a) {
            o = e(a), r = new Image, r.onload = function () {
                n++, o.attr("src", r.src), o.css("opacity", 1), n >= t.length && (i.state.imagesLoaded = !0, i.initialize())
            }, r.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina")
        })
    }, o.prototype.destroy = function () {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && e(t).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var i in this._plugins) this._plugins[i].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), e(n).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, o.prototype.op = function (e, t, n) {
        var i = this.settings.rtl;
        switch (t) {
            case "<":
                return i ? e > n : n > e;
            case ">":
                return i ? n > e : e > n;
            case ">=":
                return i ? n >= e : e >= n;
            case "<=":
                return i ? e >= n : n >= e
        }
    }, o.prototype.on = function (e, t, n, i) {
        e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
    }, o.prototype.off = function (e, t, n, i) {
        e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
    }, o.prototype.trigger = function (t, n, i) {
        var o = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }, r = e.camelCase(e.grep(["on", t, i], function (e) {
            return e
        }).join("-").toLowerCase()),
            s = e.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), e.extend({
                relatedTarget: this
            }, o, n));
        return this._supress[t] || (e.each(this._plugins, function (e, t) {
            t.onTrigger && t.onTrigger(s)
        }), this.$element.trigger(s), this.settings && "function" == typeof this.settings[r] && this.settings[r].apply(this, s)), s
    }, o.prototype.suppress = function (t) {
        e.each(t, e.proxy(function (e, t) {
            this._supress[t] = !0
        }, this))
    }, o.prototype.release = function (t) {
        e.each(t, e.proxy(function (e, t) {
            delete this._supress[t]
        }, this))
    }, o.prototype.browserSupport = function () {
        if (this.support3d = c(), this.support3d) {
            this.transformVendor = l();
            var e = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = e[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = t.orientation
    }, e.fn.owlCarousel = function (t) {
        return this.each(function () {
            e(this).data("owlCarousel") || e(this).data("owlCarousel", new o(this, t))
        })
    }, e.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document),

function (e, t) {
    var n = function (t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": e.proxy(function (t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) for (var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, o = n.center && -1 * i || 0, r = (t.property && t.property.value || this._core.current()) + o, s = this._core.clones().length, a = e.proxy(function (e, t) {
                    this.load(t)
                }, this); o++ < i;) this.load(s / 2 + this._core.relative(r)), s && e.each(this._core.clones(this._core.relative(r++)), a)
            }, this)
        }, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1
    }, n.prototype.load = function (n) {
        var i = this._core.$stage.children().eq(n),
            o = i && i.find(".owl-lazy");
        !o || e.inArray(i.get(0), this._loaded) > -1 || (o.each(e.proxy(function (n, i) {
            var o, r = e(i),
                s = t.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src");
            this._core.trigger("load", {
                element: r,
                url: s
            }, "lazy"), r.is("img") ? r.one("load.owl.lazy", e.proxy(function () {
                r.css("opacity", 1), this._core.trigger("loaded", {
                    element: r,
                    url: s
                }, "lazy")
            }, this)).attr("src", s) : (o = new Image, o.onload = e.proxy(function () {
                r.css({
                    "background-image": "url(" + s + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: r,
                    url: s
                }, "lazy")
            }, this), o.src = s)
        }, this)), this._loaded.push(i.get(0)))
    }, n.prototype.destroy = function () {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document),

function (e) {
    var t = function (n) {
        this._core = n, this._handlers = {
            "initialized.owl.carousel": e.proxy(function () {
                this._core.settings.autoHeight && this.update()
            }, this),
                "changed.owl.carousel": e.proxy(function (e) {
                this._core.settings.autoHeight && "position" == e.property.name && this.update()
            }, this),
                "loaded.owl.lazy": e.proxy(function (e) {
                this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = e.extend({}, t.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    t.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, t.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, t.prototype.destroy = function () {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = t
}(window.Zepto || window.jQuery, window, document),

function (e, t, n) {
    var i = function (t) {
        this._core = t, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": e.proxy(function (e) {
                this._core.settings.video && !this.isInFullScreen() && e.preventDefault()
            }, this),
                "refresh.owl.carousel changed.owl.carousel": e.proxy(function () {
                this._playing && this.stop()
            }, this),
                "prepared.owl.carousel": e.proxy(function (t) {
                var n = e(t.content).find(".owl-video");
                n.length && (n.css("display", "none"), this.fetch(n, e(t.content)))
            }, this)
        }, this._core.options = e.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("mousedown.owl.video", ".owl-video-play-icon", e.proxy(function (e) {
            this.play(e)
        }, this))
    };
    i.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, i.prototype.fetch = function (e, t) {
        var n = e.attr("data-vimeo-id") ? "vimeo" : "youtube",
            i = e.attr("data-vimeo-id") || e.attr("data-youtube-id"),
            o = e.attr("data-width") || this._core.settings.videoWidth,
            r = e.attr("data-height") || this._core.settings.videoHeight,
            s = e.attr("href");
        if (!s) throw new Error("Missing video URL.");
        if (i = s.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) n = "youtube";
        else {
            if (!(i[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            n = "vimeo"
        }
        i = i[6], this._videos[s] = {
            type: n,
            id: i,
            width: o,
            height: r
        }, t.attr("data-video", s), this.thumbnail(e, this._videos[s])
    }, i.prototype.thumbnail = function (t, n) {
        var i, o, r, s = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
            a = t.find("img"),
            l = "src",
            c = "",
            u = this._core.settings,
            d = function (e) {
                o = '<div class="owl-video-play-icon"></div>', i = u.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>', t.after(i), t.after(o)
            };
        return t.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (d(a.attr(l)), a.remove(), !1) : void("youtube" === n.type ? (r = "http://img.youtube.com/vi/" + n.id + "/hqdefault.jpg", d(r)) : "vimeo" === n.type && e.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (e) {
                r = e[0].thumbnail_large, d(r)
            }
        }))
    }, i.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, i.prototype.play = function (t) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var n, i, o = e(t.target || t.srcElement),
            r = o.closest("." + this._core.settings.itemClass),
            s = this._videos[r.attr("data-video")],
            a = s.width || "100%",
            l = s.height || this._core.$stage.height();
        "youtube" === s.type ? n = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + s.id + "?autoplay=1&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type && (n = '<iframe src="http://player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), r.addClass("owl-video-playing"), this._playing = r, i = e('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + n + "</div>"), o.after(i)
    }, i.prototype.isInFullScreen = function () {
        var i = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return i && e(i).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(i && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === t.orientation || (this._core.state.orientation = t.orientation, !1))
    }, i.prototype.destroy = function () {
        var e, t;
        this._core.$element.off("mousedown.owl.video");
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, window, document),

function (e, t, n, i) {
    var o = function (t) {
        this.core = t, this.core.options = e.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": e.proxy(function (e) {
                "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function (e) {
                this.swapping = "translated" == e.type
            }, this),
                "translate.owl.carousel": e.proxy(function () {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, o.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var t, n = e.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                s = this.core.settings.animateOut;
            this.core.current() !== this.previous && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n)), r && o.addClass("animated owl-animated-in").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n))
        }
    }, o.prototype.clear = function (t) {
        e(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, o.prototype.destroy = function () {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document),

function (e, t, n) {
    var i = function (t) {
        this.core = t, this.core.options = e.extend({}, i.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": e.proxy(function () {
                this.autoplay()
            }, this),
                "play.owl.autoplay": e.proxy(function (e, t, n) {
                this.play(t, n)
            }, this),
                "stop.owl.autoplay": e.proxy(function () {
                this.stop()
            }, this),
                "mouseover.owl.autoplay": e.proxy(function () {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
                "mouseleave.owl.autoplay": e.proxy(function () {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    i.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, i.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (t.clearInterval(this.interval), this.interval = t.setInterval(e.proxy(function () {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : t.clearInterval(this.interval)
    }, i.prototype.play = function () {
        return n.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void t.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, i.prototype.stop = function () {
        t.clearInterval(this.interval)
    }, i.prototype.pause = function () {
        t.clearInterval(this.interval)
    }, i.prototype.destroy = function () {
        var e, n;
        t.clearInterval(this.interval);
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.autoplay = i
}(window.Zepto || window.jQuery, window, document),

function (e) {
    "use strict";
    var t = function (n) {
        this._core = n, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": e.proxy(function (t) {
                this._core.settings.dotsData && this._templates.push(e(t.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
                "add.owl.carousel": e.proxy(function (t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 0, e(t.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
                "remove.owl.carousel prepared.owl.carousel": e.proxy(function (e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this),
                "change.owl.carousel": e.proxy(function (e) {
                if ("position" == e.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var t = this._core.current(),
                        n = this._core.maximum(),
                        i = this._core.minimum();
                    e.data = e.property.value > n ? t >= n ? i : n : e.property.value < i ? n : e.property.value
                }
            }, this),
                "changed.owl.carousel": e.proxy(function (e) {
                "position" == e.property.name && this.draw()
            }, this),
                "refreshed.owl.carousel": e.proxy(function () {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = e.extend({}, t.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    t.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, t.prototype.initialize = function () {
        var t, n, i = this._core.settings;
        i.dotsData || (this._templates = [e("<div>").addClass(i.dotClass).append(e("<span>")).prop("outerHTML")]), i.navContainer && i.dotsContainer || (this._controls.$container = e("<div>").addClass(i.controlsClass).appendTo(this.$element)), this._controls.$indicators = i.dotsContainer ? e(i.dotsContainer) : e("<div>").hide().addClass(i.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("mousedown", "div", e.proxy(function (t) {
            var n = e(t.target).parent().is(this._controls.$indicators) ? e(t.target).index() : e(t.target).parent().index();
            t.preventDefault(), this.to(n, i.dotsSpeed)
        }, this)), t = i.navContainer ? e(i.navContainer) : e("<div>").addClass(i.navContainerClass).prependTo(this._controls.$container), this._controls.$next = e("<" + i.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(i.navClass[0]).html(i.navText[0]).hide().prependTo(t).on("mousedown", e.proxy(function () {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next.addClass(i.navClass[1]).html(i.navText[1]).hide().appendTo(t).on("mousedown", e.proxy(function () {
            this.next(i.navSpeed)
        }, this));
        for (n in this._overrides) this._core[n] = e.proxy(this[n], this)
    }, t.prototype.destroy = function () {
        var e, t, n, i;
        for (e in this._handlers) this.$element.off(e, this._handlers[e]);
        for (t in this._controls) this._controls[t].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.prototype.update = function () {
        var e, t, n, i = this._core.settings,
            o = this._core.clones().length / 2,
            r = o + this._core.items().length,
            s = i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items;
        if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots || "page" == i.slideBy) for (this._pages = [], e = o, t = 0, n = 0; r > e; e++)(t >= s || 0 === t) && (this._pages.push({
            start: e - o,
            end: e - o + s - 1
        }), t = 0, ++n), t += this._core.mergers(this._core.relative(e))
    }, t.prototype.draw = function () {
        var t, n, i = "",
            o = this._core.settings,
            r = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!o.nav || o.loop || o.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= r), this._controls.$next.toggleClass("disabled", r >= this._core.maximum())), this._controls.$previous.toggle(o.nav), this._controls.$next.toggle(o.nav), o.dots) {
            if (t = this._pages.length - this._controls.$indicators.children().length, o.dotData && 0 !== t) {
                for (n = 0; n < this._controls.$indicators.children().length; n++) i += this._templates[this._core.relative(n)];
                this._controls.$indicators.html(i)
            } else t > 0 ? (i = new Array(t + 1).join(this._templates[0]), this._controls.$indicators.append(i)) : 0 > t && this._controls.$indicators.children().slice(t).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(e.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(o.dots)
    }, t.prototype.onTrigger = function (t) {
        var n = this._core.settings;
        t.page = {
            index: e.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items)
        }
    }, t.prototype.current = function () {
        var t = this._core.relative(this._core.current());
        return e.grep(this._pages, function (e) {
            return e.start <= t && e.end >= t
        }).pop()
    }, t.prototype.getPosition = function (t) {
        var n, i, o = this._core.settings;
        return "page" == o.slideBy ? (n = e.inArray(this.current(), this._pages), i = this._pages.length, t ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, t ? n += o.slideBy : n -= o.slideBy), n
    }, t.prototype.next = function (t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, t.prototype.prev = function (t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, t.prototype.to = function (t, n, i) {
        var o;
        i ? e.proxy(this._overrides.to, this._core)(t, n) : (o = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % o + o) % o].start, n))
    }, e.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, window, document),

function (e, t) {
    "use strict";
    var n = function (i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": e.proxy(function () {
                "URLHash" == this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
            }, this),
                "prepared.owl.carousel": e.proxy(function (t) {
                var n = e(t.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[n] = t.content
            }, this)
        }, this._core.options = e.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function () {
            var e = t.location.hash.substring(1),
                n = this._core.$stage.children(),
                i = this._hashes[e] && n.index(this._hashes[e]) || 0;
            return !!e && void this._core.to(i, !1, !0)
        }, this))
    };
    n.Defaults = {
        URLhashListener: !1
    }, n.prototype.destroy = function () {
        var n, i;
        e(t).off("hashchange.owl.navigation");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document), ! function (e) {
    function t() {
        e[n].glbl || (a = {
            $wndw: e(window),
            $html: e("html"),
            $body: e("body")
        }, o = {}, r = {}, s = {}, e.each([o, r, s], function (e, t) {
            t.add = function (e) {
                e = e.split(" ");
                for (var n = 0, i = e.length; i > n; n++) t[e[n]] = t.mm(e[n])
            }
        }), o.mm = function (e) {
            return "mm-" + e
        }, o.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), o.umm = function (e) {
            return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
        }, r.mm = function (e) {
            return "mm-" + e
        }, r.add("parent sub"), s.mm = function (e) {
            return e + ".mm"
        }, s.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend mousedown keydown"), e[n]._c = o, e[n]._d = r, e[n]._e = s, e[n].glbl = a)
    }
    var n = "mmenu",
        i = "5.5.3";
    if (!(e[n] && e[n].version > i)) {
        e[n] = function (e, t, n) {
            this.$menu = e, this._api = ["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = t, this.conf = n, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
            var i = this.$pnls.children();
            return this._initAddons(), this.init(i), "function" == typeof this.___debug && this.___debug(), this
        }, e[n].version = i, e[n].addons = {}, e[n].uniqueId = 0, e[n].defaults = {
            extensions: [],
            navbar: {
                add: !0,
                title: "Menu",
                titleLink: "panel"
            },
            onmousedown: {
                setSelected: !0
            },
            slidingSubmenus: !0
        }, e[n].configuration = {
            classNames: {
                divider: "Divider",
                inset: "Inset",
                panel: "Panel",
                selected: "Selected",
                spacer: "Spacer",
                vertical: "Vertical"
            },
            clone: !1,
            openingInterval: 25,
            panelNodetype: "ul, ol, div",
            transitionDuration: 400
        }, e[n].prototype = {
            init: function (e) {
                e = e.not("." + o.nopanel), e = this._initPanels(e), this.trigger("init", e), this.trigger("update")
            },
            update: function () {
                this.trigger("update")
            },
            setSelected: function (e) {
                this.$menu.find("." + o.listview).children().removeClass(o.selected), e.addClass(o.selected), this.trigger("setSelected", e)
            },
            openPanel: function (t) {
                var i = t.parent();
                if (i.hasClass(o.vertical)) {
                    var r = i.parents("." + o.subopened);
                    if (r.length) return this.openPanel(r.first());
                    i.addClass(o.opened)
                } else {
                    if (t.hasClass(o.current)) return;
                    var s = this.$pnls.children("." + o.panel),
                        a = s.filter("." + o.current);
                    s.removeClass(o.highest).removeClass(o.current).not(t).not(a).not("." + o.vertical).addClass(o.hidden), e[n].support.csstransitions || a.addClass(o.hidden), t.hasClass(o.opened) ? t.nextAll("." + o.opened).addClass(o.highest).removeClass(o.opened).removeClass(o.subopened) : (t.addClass(o.highest), a.addClass(o.subopened)), t.removeClass(o.hidden).addClass(o.current), setTimeout(function () {
                        t.removeClass(o.subopened).addClass(o.opened)
                    }, this.conf.openingInterval)
                }
                this.trigger("openPanel", t)
            },
            closePanel: function (e) {
                var t = e.parent();
                t.hasClass(o.vertical) && (t.removeClass(o.opened), this.trigger("closePanel", e))
            },
            closeAllPanels: function () {
                this.$menu.find("." + o.listview).children().removeClass(o.selected).filter("." + o.vertical).removeClass(o.opened);
                var e = this.$pnls.children("." + o.panel),
                    t = e.first();
                this.$pnls.children("." + o.panel).not(t).removeClass(o.subopened).removeClass(o.opened).removeClass(o.current).removeClass(o.highest).addClass(o.hidden), this.openPanel(t)
            },
            togglePanel: function (e) {
                var t = e.parent();
                t.hasClass(o.vertical) && this[t.hasClass(o.opened) ? "closePanel" : "openPanel"](e)
            },
            getInstance: function () {
                return this
            },
            bind: function (e, t) {
                this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t)
            },
            trigger: function () {
                var e = this,
                    t = Array.prototype.slice.call(arguments),
                    n = t.shift();
                if (this.cbck[n]) for (var i = 0, o = this.cbck[n].length; o > i; i++) this.cbck[n][i].apply(e, t)
            },
            _initMenu: function () {
                this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function () {
                    e(this).attr("id", o.mm(e(this).attr("id")))
                })), this.$menu.contents().each(function () {
                    3 == e(this)[0].nodeType && e(this).remove()
                }), this.$pnls = e('<div class="' + o.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(o.wrapper);
                var t = [o.menu];
                this.opts.slidingSubmenus || t.push(o.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && t.push(this.opts.extensions), this.$menu.addClass(t.join(" "))
            },
            _initPanels: function (t) {
                var n = this,
                    i = this.__findAddBack(t, "ul, ol");
                this.__refactorClass(i, this.conf.classNames.inset, "inset").addClass(o.nolistview + " " + o.nopanel), i.not("." + o.nolistview).addClass(o.listview);
                var s = this.__findAddBack(t, "." + o.listview).children();
                this.__refactorClass(s, this.conf.classNames.selected, "selected"), this.__refactorClass(s, this.conf.classNames.divider, "divider"), this.__refactorClass(s, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(t, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
                var a = e(),
                    l = t.add(t.find("." + o.panel)).add(this.__findAddBack(t, "." + o.listview).children().children(this.conf.panelNodetype)).not("." + o.nopanel);
                this.__refactorClass(l, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || l.addClass(o.vertical), l.each(function () {
                    var t = e(this),
                        i = t;
                    t.is("ul, ol") ? (t.wrap('<div class="' + o.panel + '" />'), i = t.parent()) : i.addClass(o.panel);
                    var r = t.attr("id");
                    t.removeAttr("id"), i.attr("id", r || n.__getUniqueId()), t.hasClass(o.vertical) && (t.removeClass(n.conf.classNames.vertical), i.add(i.parent()).addClass(o.vertical)), a = a.add(i)
                });
                var c = e("." + o.panel, this.$menu);
                a.each(function () {
                    var t = e(this),
                        i = t.parent(),
                        s = i.children("a, span").first();
                    if (i.is("." + o.panels) || (i.data(r.sub, t), t.data(r.parent, i)), !i.children("." + o.next).length && i.parent().is("." + o.listview)) {
                        var a = t.attr("id"),
                            l = e('<a class="' + o.next + '" href="#' + a + '" data-target="#' + a + '" />').insertBefore(s);
                        s.is("span") && l.addClass(o.fullsubopen)
                    }
                    if (!t.children("." + o.navbar).length && !i.hasClass(o.vertical)) {
                        if (i.parent().is("." + o.listview)) var i = i.closest("." + o.panel);
                        else var s = i.closest("." + o.panel).find('a[href="#' + t.attr("id") + '"]').first(),
                            i = s.closest("." + o.panel);
                        var c = e('<div class="' + o.navbar + '" />');
                        if (i.length) {
                            var a = i.attr("id");
                            switch (n.opts.navbar.titleLink) {
                                case "anchor":
                                    _url = s.attr("href");
                                    break;
                                case "panel":
                                case "parent":
                                    _url = "#" + a;
                                    break;
                                case "none":
                                default:
                                    _url = !1
                            }
                            c.append('<a class="' + o.btn + " " + o.prev + '" href="#' + a + '" data-target="#' + a + '" />').append(e('<a class="' + o.title + '"' + (_url ? ' href="' + _url + '"' : "") + " />").text(s.text())).prependTo(t), n.opts.navbar.add && t.addClass(o.hasnavbar)
                        } else n.opts.navbar.title && (c.append('<a class="' + o.title + '">' + n.opts.navbar.title + "</a>").prependTo(t), n.opts.navbar.add && t.addClass(o.hasnavbar))
                    }
                });
                var u = this.__findAddBack(t, "." + o.listview).children("." + o.selected).removeClass(o.selected).last().addClass(o.selected);
                u.add(u.parentsUntil("." + o.menu, "li")).filter("." + o.vertical).addClass(o.opened).end().not("." + o.vertical).each(function () {
                    e(this).parentsUntil("." + o.menu, "." + o.panel).not("." + o.vertical).first().addClass(o.opened).parentsUntil("." + o.menu, "." + o.panel).not("." + o.vertical).first().addClass(o.opened).addClass(o.subopened)
                }), u.children("." + o.panel).not("." + o.vertical).addClass(o.opened).parentsUntil("." + o.menu, "." + o.panel).not("." + o.vertical).first().addClass(o.opened).addClass(o.subopened);
                var d = c.filter("." + o.opened);
                return d.length || (d = a.first()), d.addClass(o.opened).last().addClass(o.current), a.not("." + o.vertical).not(d.last()).addClass(o.hidden).end().appendTo(this.$pnls), a
            },
            _initAnchors: function () {
                var t = this;
                a.$body.on(s.mousedown + "-oncanvas", "a[href]", function (i) {
                    var r = e(this),
                        s = !1,
                        a = t.$menu.find(r).length;
                    for (var l in e[n].addons) if (s = e[n].addons[l].mousedownAnchor.call(t, r, a)) break;
                    if (!s && a) {
                        var c = r.attr("href");
                        if (c.length > 1 && "#" == c.slice(0, 1)) try {
                            var u = e(c, t.$menu);
                            u.is("." + o.panel) && (s = !0, t[r.parent().hasClass(o.vertical) ? "togglePanel" : "openPanel"](u))
                        } catch (d) {}
                    }
                    if (s && i.preventDefault(), !s && a && r.is("." + o.listview + " > li > a") && !r.is('[rel="external"]') && !r.is('[target="_blank"]')) {
                        t.__valueOrFn(t.opts.onmousedown.setSelected, r) && t.setSelected(e(i.target).parent());
                        var h = t.__valueOrFn(t.opts.onmousedown.preventDefault, r, "#" == c.slice(0, 1));
                        h && i.preventDefault(), t.__valueOrFn(t.opts.onmousedown.close, r, h) && t.close()
                    }
                })
            },
            _initAddons: function () {
                for (var t in e[n].addons) e[n].addons[t].add.call(this), e[n].addons[t].add = function () {};
                for (var t in e[n].addons) e[n].addons[t].setup.call(this)
            },
            __api: function () {
                var t = this,
                    n = {};
                return e.each(this._api, function () {
                    var e = this;
                    n[e] = function () {
                        var i = t[e].apply(t, arguments);
                        return "undefined" == typeof i ? n : i
                    }
                }), n
            },
            __valueOrFn: function (e, t, n) {
                return "function" == typeof e ? e.call(t[0]) : "undefined" == typeof e && "undefined" != typeof n ? n : e
            },
            __refactorClass: function (e, t, n) {
                return e.filter("." + t).removeClass(t).addClass(o[n])
            },
            __findAddBack: function (e, t) {
                return e.find(t).add(e.filter(t))
            },
            __filterListItems: function (e) {
                return e.not("." + o.divider).not("." + o.hidden)
            },
            __transitionend: function (e, t, n) {
                var i = !1,
                    o = function () {
                        i || t.call(e[0]), i = !0
                    };
                e.one(s.transitionend, o), e.one(s.webkitTransitionEnd, o), setTimeout(o, 1.1 * n)
            },
            __getUniqueId: function () {
                return o.mm(e[n].uniqueId++)
            }
        }, e.fn[n] = function (i, o) {
            return t(), i = e.extend(!0, {}, e[n].defaults, i), o = e.extend(!0, {}, e[n].configuration, o), this.each(function () {
                var t = e(this);
                if (!t.data(n)) {
                    var r = new e[n](t, i, o);
                    t.data(n, r.__api())
                }
            })
        }, e[n].support = {
            touch: "ontouchstart" in window || navigator.msMaxTouchPoints,
            csstransitions: function () {
                if ("undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransitions) return Modernizr.csstransitions;
                var e = document.body || document.documentElement,
                    t = e.style,
                    n = "transition";
                if ("string" == typeof t[n]) return !0;
                var i = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                n = n.charAt(0).toUpperCase() + n.substr(1);
                for (var o = 0; o < i.length; o++) if ("string" == typeof t[i[o] + n]) return !0;
                return !1
            }()
        };
        var o, r, s, a
    }
}(jQuery), ! function (e) {
    var t = "mmenu",

        n = "offCanvas";
    e[t].addons[n] = {
        setup: function () {
            if (this.opts[n]) {
                var o = this.opts[n],
                    r = this.conf[n];
                s = e[t].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), ("top" == o.position || "bottom" == o.position) && (o.zposition = "front"), "string" != typeof r.pageSelector && (r.pageSelector = "> " + r.pageNodetype), s.$allMenus = (s.$allMenus || e()).add(this.$menu), this.vars.opened = !1;
                var a = [i.offcanvas];
                "left" != o.position && a.push(i.mm(o.position)), "back" != o.zposition && a.push(i.mm(o.zposition)), this.$menu.addClass(a.join(" ")).parent().removeClass(i.wrapper), this.setPage(s.$page), this._initBlocker(), this["_initWindow_" + n](), this.$menu[r.menuInjectMethod + "To"](r.menuWrapperSelector)
            }
        },
        add: function () {
            i = e[t]._c, o = e[t]._d, r = e[t]._e, i.add("offcanvas slideout blocking modal background opening blocker page"), o.add("style"), r.add("resize")
        },
        mousedownAnchor: function (e) {
            if (!this.opts[n]) return !1;
            var t = this.$menu.attr("id");
            if (t && t.length && (this.conf.clone && (t = i.umm(t)), e.is('[href="#' + t + '"]'))) return this.open(), !0;
            if (s.$page) {
                var t = s.$page.first().attr("id");
                return !!(t && t.length && e.is('[href="#' + t + '"]')) && (this.close(), !0)
            }
        }
    }, e[t].defaults[n] = {
        position: "left",
        zposition: "back",
        blockUI: !0,
        moveBackground: !0
    }, e[t].configuration[n] = {
        pageNodetype: "div",
        pageSelector: null,
        noPageSelector: [],
        wrapPageIfNeeded: !0,
        menuWrapperSelector: "body",
        menuInjectMethod: "prepend"
    }, e[t].prototype.open = function () {
        if (!this.vars.opened) {
            var e = this;
            this._openSetup(), setTimeout(function () {
                e._openFinish()
            }, this.conf.openingInterval), this.trigger("open")
        }
    }, e[t].prototype._openSetup = function () {
        var t = this,
            a = this.opts[n];
        this.closeAllOthers(), s.$page.each(function () {
            e(this).data(o.style, e(this).attr("style") || "")
        }), s.$wndw.trigger(r.resize + "-" + n, [!0]);
        var l = [i.opened];
        a.blockUI && l.push(i.blocking), "modal" == a.blockUI && l.push(i.modal), a.moveBackground && l.push(i.background), "left" != a.position && l.push(i.mm(this.opts[n].position)), "back" != a.zposition && l.push(i.mm(this.opts[n].zposition)), this.opts.extensions && l.push(this.opts.extensions), s.$html.addClass(l.join(" ")), setTimeout(function () {
            t.vars.opened = !0
        }, this.conf.openingInterval), this.$menu.addClass(i.current + " " + i.opened)
    }, e[t].prototype._openFinish = function () {
        var e = this;
        this.__transitionend(s.$page.first(), function () {
            e.trigger("opened")
        }, this.conf.transitionDuration), s.$html.addClass(i.opening), this.trigger("opening")
    }, e[t].prototype.close = function () {
        if (this.vars.opened) {
            var t = this;
            this.__transitionend(s.$page.first(), function () {
                t.$menu.removeClass(i.current).removeClass(i.opened), s.$html.removeClass(i.opened).removeClass(i.blocking).removeClass(i.modal).removeClass(i.background).removeClass(i.mm(t.opts[n].position)).removeClass(i.mm(t.opts[n].zposition)), t.opts.extensions && s.$html.removeClass(t.opts.extensions), s.$page.each(function () {
                    e(this).attr("style", e(this).data(o.style))
                }), t.vars.opened = !1, t.trigger("closed")
            }, this.conf.transitionDuration), s.$html.removeClass(i.opening), this.trigger("close"), this.trigger("closing")
        }
    }, e[t].prototype.closeAllOthers = function () {
        s.$allMenus.not(this.$menu).each(function () {
            var n = e(this).data(t);
            n && n.close && n.close()
        })
    }, e[t].prototype.setPage = function (t) {
        var o = this,
            r = this.conf[n];
        t && t.length || (t = s.$body.find(r.pageSelector), r.noPageSelector.length && (t = t.not(r.noPageSelector.join(", "))), t.length > 1 && r.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[n].pageNodetype + " />").parent())), t.each(function () {
            e(this).attr("id", e(this).attr("id") || o.__getUniqueId())
        }), t.addClass(i.page + " " + i.slideout), s.$page = t, this.trigger("setPage", t)
    }, e[t].prototype["_initWindow_" + n] = function () {
        s.$wndw.off(r.keydown + "-" + n).on(r.keydown + "-" + n, function (e) {
            return s.$html.hasClass(i.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
        });
        var e = 0;
        s.$wndw.off(r.resize + "-" + n).on(r.resize + "-" + n, function (t, n) {
            if (1 == s.$page.length && (n || s.$html.hasClass(i.opened))) {
                var o = s.$wndw.height();
                (n || o != e) && (e = o, s.$page.css("minHeight", o))
            }
        })
    }, e[t].prototype._initBlocker = function () {
        var t = this;
        this.opts[n].blockUI && (s.$blck || (s.$blck = e('<div id="' + i.blocker + '" class="' + i.slideout + '" />')), s.$blck.appendTo(s.$body).off(r.touchstart + "-" + n + " " + r.touchmove + "-" + n).on(r.touchstart + "-" + n + " " + r.touchmove + "-" + n, function (e) {
            e.preventDefault(), e.stopPropagation(), s.$blck.trigger(r.mousedown + "-" + n)
        }).off(r.mousedown + "-" + n).on(r.mousedown + "-" + n, function (e) {
            e.preventDefault(), s.$html.hasClass(i.modal) || (t.closeAllOthers(), t.close())
        }))
    };
    var i, o, r, s
}(jQuery), ! function (e) {
    var t = "mmenu",
        n = "fixedElements";
    e[t].addons[n] = {
        setup: function () {
            if (this.opts.offCanvas) {
                var i = this.opts[n];
                this.conf[n], s = e[t].glbl, i = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], i);
                var o = function (e) {
                    var t = this.conf.classNames[n].fixed;
                    this.__refactorClass(e.find("." + t), t, "slideout").appendTo(s.$body)
                };
                o.call(this, s.$page), this.bind("setPage", o)
            }
        },
        add: function () {
            i = e[t]._c, o = e[t]._d, r = e[t]._e, i.add("fixed")
        },
        mousedownAnchor: function () {}
    }, e[t].configuration.classNames[n] = {
        fixed: "Fixed"
    };
    var i, o, r, s
}(jQuery),

function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (e) {
    var t, n, i, o, r, s, a = "Close",
        l = "BeforeClose",
        c = "AfterClose",
        u = "BeforeAppend",
        d = "MarkupParse",
        h = "Open",
        p = "Change",
        f = "mfp",
        m = "." + f,
        g = "mfp-ready",
        v = "mfp-removing",
        y = "mfp-prevent-close",
        b = function () {}, T = !! window.jQuery,
        w = e(window),
        _ = function (e, n) {
            t.ev.on(f + e + m, n)
        }, S = function (t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        }, C = function (n, i) {
            t.ev.triggerHandler(f + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        }, x = function (n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
        }, A = function () {
            e.magnificPopup.instance || (t = new b, t.init(), e.magnificPopup.instance = t)
        }, P = function () {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;) if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    b.prototype = {
        constructor: b,
        init: function () {
            var n = navigator.appVersion;
            t.isIE7 = n.indexOf("MSIE 7.") !== -1, t.isIE8 = n.indexOf("MSIE 8.") !== -1, t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = P(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}
        },
        open: function (n) {
            var o;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var s, a = n.items;
                for (o = 0; o < a.length; o++) if (s = a[o], s.parsed && (s = s.el[0]), s === n.el[0]) {
                    t.index = o;
                    break
                }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], r = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentmousedown = !1, t.st.closeOnBgmousedown = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = S("bg").on("mousedown" + m, function () {
                t.close()
            }), t.wrap = S("wrap").attr("tabindex", -1).on("mousedown" + m, function (e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = S("container", t.wrap)), t.contentContainer = S("content"), t.st.preloader && (t.preloader = S("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var c = l[o];
                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
            }
            C("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (_(d, function (e, t, n, i) {
                n.close_replaceWith = x(i.type)
            }), r += " mfp-close-btn-in") : t.wrap.append(x())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: w.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: i.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && i.on("keyup" + m, function (e) {
                27 === e.keyCode && t.close()
            }), w.on("resize" + m, function () {
                t.updateSize()
            }), t.st.closeOnContentmousedown || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
            var u = t.wH = w.height(),
                p = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var f = t._getScrollbarSize();
                f && (p.marginRight = f)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : p.overflow = "hidden");
            var v = t.st.mainClass;
            return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), C("BuildControls"), e("html").css(p), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), i.on("focusin" + m, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), C(h), n
        },
        close: function () {
            t.isOpen && (C(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function () {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function () {
            C(a);
            var n = v + " " + g + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
            }
            i.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, C(c)
        },
        updateSize: function (e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || w.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), C("Resize")
        },
        updateItemHTML: function () {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (C("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var r = !! t.st[i] && t.st[i].markup;
                C("FirstMarkupParse", r), r ? t.currTemplate[i] = e(r) : t.currTemplate[i] = !0
            }
            o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
            var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(s, i), n.preloaded = !0, C(p, n), o = n.type, t.container.prepend(t.contentContainer), C("AfterChange")
        },
        appendContent: function (e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(x()) : t.content = e : t.content = "", C(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function (n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                el: e(o)
            } : (i = o.type, o = {
                data: o,
                src: o.src
            }), o.el) {
                for (var r = t.types, s = 0; s < r.length; s++) if (o.el.hasClass("mfp-" + r[s])) {
                    i = r[s];
                    break
                }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, C("ElementParse", o), t.items[n]
        },
        addGroup: function (e, n) {
            var i = function (i) {
                i.mfpEl = this, t._openmousedown(i, e, n)
            };
            n || (n = {});
            var o = "mousedown.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openmousedown: function (n, i, o) {
            var r = void 0 !== o.midmousedown ? o.midmousedown : e.magnificPopup.defaults.midmousedown;
            if (r || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var s = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (s) if (e.isFunction(s)) {
                    if (!s.call(t)) return !0
                } else if (w.width() < s) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function (e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                C("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("mousedown", function (e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function (n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentmousedown,
                    o = t.st.closeOnBgmousedown;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function (e) {
            return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || w.height())
        },
        _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function (n) {
            if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), !1
        },
        _parseMarkup: function (t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), C(d, [t, n, i]), e.each(n, function (e, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var i = t.find(m + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else t.find(m + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: b.prototype,
        modules: [],
        open: function (t, n) {
            return A(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function (t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midmousedown: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentmousedown: !1,
            closeOnBgmousedown: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function (n) {
        A();
        var i = e(this);
        if ("string" == typeof n) if ("open" === n) {
            var o, r = T ? i.data("magnificPopup") : i[0].magnificPopup,
                s = parseInt(arguments[1], 10) || 0;
            r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openmousedown({
                mfpEl: o
            }, i, r)
        } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), T ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var E, M, $, I = "inline",
        k = function () {
            $ && (M.after($.addClass(E)).detach(), $ = null)
        };
    e.magnificPopup.registerModule(I, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function () {
                t.types.push(I), _(a + "." + I, function () {
                    k()
                })
            },
            getInline: function (n, i) {
                if (k(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var s = r[0].parentNode;
                        s && s.tagName && (M || (E = o.hiddenClass, M = S(E), E = "mfp-" + E), $ = r.after(M).detach().removeClass(E)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var D, H = "ajax",
        G = function () {
            D && e(document.body).removeClass(D)
        }, B = function () {
            G(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function () {
                t.types.push(H), D = t.st.ajax.cursor, _(a + "." + H, B), _("BeforeChange." + H, B)
            },
            getAjax: function (n) {
                D && e(document.body).addClass(D), t.updateStatus("loading");
                var i = e.extend({
                    url: n.src,
                    success: function (i, o, r) {
                        var s = {
                            data: i,
                            xhr: r
                        };
                        C("ParseAjax", s), t.appendContent(e(s.data), H), n.finished = !0, G(), t._setFocus(), setTimeout(function () {
                            t.wrap.addClass(g)
                        }, 16), t.updateStatus("ready"), C("AjaxContentAdded")
                    },
                    error: function () {
                        G(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(i), ""
            }
        }
    });
    var O, N = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function () {
                var n = t.st.image,
                    i = ".image";
                t.types.push("image"), _(h + i, function () {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                }), _(a + i, function () {
                    n.cursor && e(document.body).removeClass(n.cursor), w.off("resize" + m)
                }), _("Resize" + i, t.resizeImage), t.isLowIE && _("AfterChange", t.resizeImage)
            },
            resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, O && clearInterval(O), e.isCheckingImgSize = !1, C("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function (e) {
                var n = 0,
                    i = e.img[0],
                    o = function (r) {
                        O && clearInterval(O), O = setInterval(function () {
                            return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(O), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                        }, r)
                    };
                o(1)
            },
            getImage: function (n, i) {
                var o = 0,
                    r = function () {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, C("ImageLoadComplete")) : (o++, o < 200 ? setTimeout(r, 100) : s()))
                    }, s = function () {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    }, a = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: N(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (O && clearInterval(O), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var L, j = function () {
        return void 0 === L && (L = void 0 !== document.createElement("p").style.MozTransform), L
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function () {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, s = n.duration,
                        c = function (e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                }, r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                        }, u = function () {
                            t.content.css("visibility", "visible")
                        };
                    _("BuildControls" + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void u();
                            r = c(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
                                r.css(t._getOffset(!0)), o = setTimeout(function () {
                                    u(), setTimeout(function () {
                                        r.remove(), e = r = null, C("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }), _(l + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = s, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = c(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), _(a + i, function () {
                        t._allowZoom() && (u(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function () {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function () {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function (n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    s = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var a = {
                    width: i.width(),
                    height: (T ? i.innerHeight() : i[0].offsetHeight) - s - r
                };
                return j() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
            }
        }
    });
    var R = "iframe",
        F = "//about:blank",
        W = function (e) {
            if (t.currTemplate[R]) {
                var n = t.currTemplate[R].find("iframe");
                n.length && (e || (n[0].src = F), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(R, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function () {
                t.types.push(R), _("BeforeChange", function (e, t, n) {
                    t !== n && (t === R ? W() : n === R && W(!0))
                }), _(a + "." + R, function () {
                    W()
                })
            },
            getIframe: function (n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function () {
                    if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1
                });
                var s = {};
                return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(i, s, n), t.updateStatus("ready"), i
            }
        }
    });
    var V = function (e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : e < 0 ? n + e : e
    }, z = function (e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgmousedown: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function () {
                var n = t.st.gallery,
                    o = ".mfp-gallery",
                    s = Boolean(e.fn.mfpFastmousedown);
                return t.direction = !0, !(!n || !n.enabled) && (r += " mfp-gallery", _(h + o, function () {
                    n.navigateByImgmousedown && t.wrap.on("mousedown" + o, ".mfp-img", function () {
                        if (t.items.length > 1) return t.next(), !1
                    }), i.on("keydown" + o, function (e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), _("UpdateStatus" + o, function (e, n) {
                    n.text && (n.text = z(n.text, t.currItem.index, t.items.length))
                }), _(d + o, function (e, i, o, r) {
                    var s = t.items.length;
                    o.counter = s > 1 ? z(n.tCounter, r.index, s) : ""
                }), _("BuildControls" + o, function () {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            r = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            a = s ? "mfpFastmousedown" : "mousedown";
                        o[a](function () {
                            t.prev()
                        }), r[a](function () {
                            t.next()
                        }), t.isIE7 && (S("b", o[0], !1, !0), S("a", o[0], !1, !0), S("b", r[0], !1, !0), S("a", r[0], !1, !0)), t.container.append(o.add(r))
                    }
                }), _(p + o, function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void _(a + o, function () {
                    i.off(o), t.wrap.off("mousedown" + o), t.arrowLeft && s && t.arrowLeft.add(t.arrowRight).destroyMfpFastmousedown(), t.arrowRight = t.arrowLeft = null
                }))
            },
            next: function () {
                t.direction = !0, t.index = V(t.index + 1), t.updateItemHTML()
            },
            prev: function () {
                t.direction = !1, t.index = V(t.index - 1), t.updateItemHTML()
            },
            goTo: function (e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function () {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : i); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : o); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function (n) {
                if (n = V(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), C("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
                        i.hasSize = !0
                    }).on("error.mfploader", function () {
                        i.hasSize = !0, i.loadError = !0, C("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var q = "retina";
    e.magnificPopup.registerModule(q, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (_("ImageHasSize." + q, function (e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), _("ElementParse." + q, function (t, i) {
                        i.src = e.replaceSrc(i, n)
                    }))
                }
            }
        }
    }),

    function () {
        var t = 1e3,
            n = "ontouchstart" in window,
            i = function () {
                w.off("touchmove" + r + " touchend" + r)
            }, o = "mfpFastmousedown",
            r = "." + o;
        e.fn.mfpFastmousedown = function (o) {
            return e(this).each(function () {
                var s, a = e(this);
                if (n) {
                    var l, c, u, d, h, p;
                    a.on("touchstart" + r, function (e) {
                        d = !1, p = 1, h = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = h.clientX, u = h.clientY, w.on("touchmove" + r, function (e) {
                            h = e.originalEvent ? e.originalEvent.touches : e.touches, p = h.length, h = h[0], (Math.abs(h.clientX - c) > 10 || Math.abs(h.clientY - u) > 10) && (d = !0, i())
                        }).on("touchend" + r, function (e) {
                            i(), d || p > 1 || (s = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () {
                                s = !1
                            }, t), o())
                        })
                    })
                }
                a.on("mousedown" + r, function () {
                    s || o()
                })
            })
        }, e.fn.destroyMfpFastmousedown = function () {
            e(this).off("touchstart" + r + " mousedown" + r), n && w.off("touchmove" + r + " touchend" + r)
        }
    }(), A()
}), ! function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function () {
    "use strict";
    var e = function (e, t, n, i) {
        var o = {
            features: null,
            bind: function (e, t, n, i) {
                var o = (i ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], n, !1)
            },
            isArray: function (e) {
                return e instanceof Array
            },
            createEl: function (e, t) {
                var n = document.createElement(t || "div");
                return e && (n.className = e), n
            },
            getScrollY: function () {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            },
            unbind: function (e, t, n) {
                o.bind(e, t, n, !0)
            },
            removeClass: function (e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function (e, t) {
                o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            },
            hasClass: function (e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            },
            getChildByClass: function (e, t) {
                for (var n = e.firstChild; n;) {
                    if (o.hasClass(n, t)) return n;
                    n = n.nextSibling
                }
            },
            arraySearch: function (e, t, n) {
                for (var i = e.length; i--;) if (e[i][n] === t) return i;
                return -1
            },
            extend: function (e, t, n) {
                for (var i in t) if (t.hasOwnProperty(i)) {
                    if (n && e.hasOwnProperty(i)) continue;
                    e[i] = t[i]
                }
            },
            easing: {
                sine: {
                    out: function (e) {
                        return Math.sin(e * (Math.PI / 2))
                    },
                    inOut: function (e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                },
                cubic: {
                    out: function (e) {
                        return --e * e * e + 1
                    }
                }
            },
            detectFeatures: function () {
                if (o.features) return o.features;
                var e = o.createEl(),
                    t = e.style,
                    n = "",
                    i = {};
                if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                    var r = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var s = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        s && s.length > 0 && (s = parseInt(s[1], 10), s >= 1 && 8 > s && (i.isOldIOSPhone = !0))
                    }
                    var a = r.match(/Android\s([0-9\.]*)/),
                        l = a ? a[1] : 0;
                    l = parseFloat(l), l >= 1 && (4.4 > l && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(r)
                }
                for (var c, u, d = ["transform", "perspective", "animationName"], h = ["", "webkit", "Moz", "ms", "O"], p = 0; 4 > p; p++) {
                    n = h[p];
                    for (var f = 0; 3 > f; f++) c = d[f], u = n + (n ? c.charAt(0).toUpperCase() + c.slice(1) : c), !i[c] && u in t && (i[c] = u);
                    n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                }
                if (!i.raf) {
                    var m = 0;
                    i.raf = function (e) {
                        var t = (new Date).getTime(),
                            n = Math.max(0, 16 - (t - m)),
                            i = window.setTimeout(function () {
                                e(t + n)
                            }, n);
                        return m = t + n, i
                    }, i.caf = function (e) {
                        clearTimeout(e)
                    }
                }
                return i.svg = !! document.createElementNS && !! document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
            }
        };
        o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, n, i) {
            t = t.split(" ");
            for (var o, r = (i ? "detach" : "attach") + "Event", s = function () {
                n.handleEvent.call(n)
            }, a = 0; a < t.length; a++) if (o = t[a]) if ("object" == typeof n && n.handleEvent) {
                if (i) {
                    if (!n["oldIE" + o]) return !1
                } else n["oldIE" + o] = s;
                e[r]("on" + o, n["oldIE" + o])
            } else e[r]("on" + o, n)
        });
        var r = this,
            s = 25,
            a = 3,
            l = {
                allowPanToNext: !0,
                spacing: .12,
                bgOpacity: 1,
                mouseUsed: !1,
                loop: !0,
                pinchToClose: !0,
                closeOnScroll: !0,
                closeOnVerticalDrag: !0,
                verticalDragRange: .75,
                hideAnimationDuration: 333,
                showAnimationDuration: 333,
                showHideOpacity: !1,
                focus: !0,
                escKey: !0,
                arrowKeys: !0,
                mainScrollEndFriction: .35,
                panEndFriction: .35,
                ismousedownableElement: function (e) {
                    return "A" === e.tagName
                },
                getDoubleTapZoom: function (e, t) {
                    return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                },
                maxSpreadZoom: 1.33,
                modal: !0,
                scaleMode: "fit"
            };
        o.extend(l, i);
        var c, u, d, h, p, f, m, g, v, y, b, T, w, _, S, C, x, A, P, E, M, $, I, k, D, H, G, B, O, N, L, j, R, F, W, V, z, q, X, U, K, Z, Y, Q, J, ee, te, ne, ie, oe, re, se, ae, le, ce, ue, de = function () {
            return {
                x: 0,
                y: 0
            }
        }, he = de(),
            pe = de(),
            fe = de(),
            me = {}, ge = 0,
            ve = {}, ye = de(),
            be = 0,
            Te = !0,
            we = [],
            _e = {}, Se = !1,
            Ce = function (e, t) {
                o.extend(r, t.publicMethods), we.push(e)
            }, xe = function (e) {
                var t = Jt();
                return e > t - 1 ? e - t : 0 > e ? t + e : e
            }, Ae = {}, Pe = function (e, t) {
                return Ae[e] || (Ae[e] = []), Ae[e].push(t)
            }, Ee = function (e) {
                var t = Ae[e];
                if (t) {
                    var n = Array.prototype.slice.call(arguments);
                    n.shift();
                    for (var i = 0; i < t.length; i++) t[i].apply(r, n)
                }
            }, Me = function () {
                return (new Date).getTime()
            }, $e = function (e) {
                le = e, r.bg.style.opacity = e * l.bgOpacity
            }, Ie = function (e, t, n, i, o) {
                (!Se || o && o !== r.currItem) && (i /= o ? o.fitRatio : r.currItem.fitRatio), e[$] = T + t + "px, " + n + "px" + w + " scale(" + i + ")"
            }, ke = function (e) {
                ie && (e && (y > r.currItem.fitRatio ? Se || (hn(r.currItem, !1, !0), Se = !0) : Se && (hn(r.currItem), Se = !1)), Ie(ie, fe.x, fe.y, y))
            }, De = function (e) {
                e.container && Ie(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
            }, He = function (e, t) {
                t[$] = T + e + "px, 0px" + w
            }, Ge = function (e, t) {
                if (!l.loop && t) {
                    var n = h + (ye.x * ge - e) / ye.x,
                        i = Math.round(e - yt.x);
                    (0 > n && i > 0 || n >= Jt() - 1 && 0 > i) && (e = yt.x + i * l.mainScrollEndFriction)
                }
                yt.x = e, He(e, p)
            }, Be = function (e, t) {
                var n = bt[e] - ve[e];
                return pe[e] + he[e] + n - n * (t / b)
            }, Oe = function (e, t) {
                e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
            }, Ne = function (e) {
                e.x = Math.round(e.x), e.y = Math.round(e.y)
            }, Le = null,
            je = function () {
                Le && (o.unbind(document, "mousemove", je), o.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, Ee("mouseUsed")), Le = setTimeout(function () {
                    Le = null
                }, 100)
            }, Re = function () {
                o.bind(document, "keydown", r), L.transform && o.bind(r.scrollWrap, "mousedown", r), l.mouseUsed || o.bind(document, "mousemove", je), o.bind(window, "resize scroll", r), Ee("bindEvents")
            }, Fe = function () {
                o.unbind(window, "resize", r), o.unbind(window, "scroll", v.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", je), L.transform && o.unbind(r.scrollWrap, "mousedown", r), q && o.unbind(window, m, r), Ee("unbindEvents")
            }, We = function (e, t) {
                var n = ln(r.currItem, me, e);
                return t && (ne = n), n
            }, Ve = function (e) {
                return e || (e = r.currItem),
                e.initialZoomLevel
            }, ze = function (e) {
                return e || (e = r.currItem), e.w > 0 ? l.maxSpreadZoom : 1
            }, qe = function (e, t, n, i) {
                return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Be(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
            }, Xe = function () {
                if ($) {
                    var t = L.perspective && !k;
                    return T = "translate" + (t ? "3d(" : "("), void(w = L.perspective ? ", 0px)" : ")")
                }
                $ = "left", o.addClass(e, "pswp--ie"), He = function (e, t) {
                    t.left = e + "px"
                }, De = function (e) {
                    var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                        n = e.container.style,
                        i = t * e.w,
                        o = t * e.h;
                    n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                }, ke = function () {
                    if (ie) {
                        var e = ie,
                            t = r.currItem,
                            n = t.fitRatio > 1 ? 1 : t.fitRatio,
                            i = n * t.w,
                            o = n * t.h;
                        e.width = i + "px", e.height = o + "px", e.left = fe.x + "px", e.top = fe.y + "px"
                    }
                }
            }, Ue = function (e) {
                var t = "";
                l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
            }, Ke = function (e) {
                e && (K || U || oe || V) && (e.preventDefault(), e.stopPropagation())
            }, Ze = function () {
                r.setScrollOffset(0, o.getScrollY())
            }, Ye = {}, Qe = 0,
            Je = function (e) {
                Ye[e] && (Ye[e].raf && H(Ye[e].raf), Qe--, delete Ye[e])
            }, et = function (e) {
                Ye[e] && Je(e), Ye[e] || (Qe++, Ye[e] = {})
            }, tt = function () {
                for (var e in Ye) Ye.hasOwnProperty(e) && Je(e)
            }, nt = function (e, t, n, i, o, r, s) {
                var a, l = Me();
                et(e);
                var c = function () {
                    if (Ye[e]) {
                        if (a = Me() - l, a >= i) return Je(e), r(n), void(s && s());
                        r((n - t) * o(a / i) + t), Ye[e].raf = D(c)
                    }
                };
                c()
            }, it = {
                shout: Ee,
                listen: Pe,
                viewportSize: me,
                options: l,
                isMainScrollAnimating: function () {
                    return oe
                },
                getZoomLevel: function () {
                    return y
                },
                getCurrentIndex: function () {
                    return h
                },
                isDragging: function () {
                    return q
                },
                isZooming: function () {
                    return J
                },
                setScrollOffset: function (e, t) {
                    ve.x = e, N = ve.y = t, Ee("updateScrollOffset", ve)
                },
                applyZoomPan: function (e, t, n, i) {
                    fe.x = t, fe.y = n, y = e, ke(i)
                },
                init: function () {
                    if (!c && !u) {
                        var n;
                        r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), G = e.className, c = !0, L = o.detectFeatures(), D = L.raf, H = L.caf, $ = L.transform, O = L.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), p = r.container.style, r.itemHolders = C = [{
                            el: r.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {
                            el: r.container.children[1],
                            wrap: 0,
                            index: -1
                        }, {
                            el: r.container.children[2],
                            wrap: 0,
                            index: -1
                        }], C[0].el.style.display = C[2].el.style.display = "none", Xe(), v = {
                            resize: r.updateSize,
                            scroll: Ze,
                            keydown: Ue,
                            mousedown: Ke
                        };
                        var i = L.isOldIOSPhone || L.isOldAndroid || L.isMobileOpera;
                        for (L.animationName && L.transform && !i || (l.showAnimationDuration = l.hideAnimationDuration = 0), n = 0; n < we.length; n++) r["init" + we[n]]();
                        if (t) {
                            var s = r.ui = new t(r, o);
                            s.init()
                        }
                        Ee("firstUpdate"), h = h || l.index || 0, (isNaN(h) || 0 > h || h >= Jt()) && (h = 0), r.currItem = Qt(h), (L.isOldIOSPhone || L.isOldAndroid) && (Te = !1), e.setAttribute("aria-hidden", "false"), l.modal && (Te ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === N && (Ee("initialLayout"), N = B = o.getScrollY());
                        var d = "pswp--open ";
                        for (l.mainClass && (d += l.mainClass + " "), l.showHideOpacity && (d += "pswp--animate_opacity "), d += k ? "pswp--touch" : "pswp--notouch", d += L.animationName ? " pswp--css_animation" : "", d += L.svg ? " pswp--svg" : "", o.addClass(e, d), r.updateSize(), f = -1, be = null, n = 0; a > n; n++) He((n + f) * ye.x, C[n].el.style);
                        O || o.bind(r.scrollWrap, g, r), Pe("initialZoomInEnd", function () {
                            r.setContent(C[0], h - 1), r.setContent(C[2], h + 1), C[0].el.style.display = C[2].el.style.display = "block", l.focus && e.focus(), Re()
                        }), r.setContent(C[1], h), r.updateCurrItem(), Ee("afterInit"), Te || (_ = setInterval(function () {
                            Qe || q || J || y !== r.currItem.initialZoomLevel || r.updateSize()
                        }, 1e3)), o.addClass(e, "pswp--visible")
                    }
                },
                close: function () {
                    c && (c = !1, u = !0, Ee("close"), Fe(), tn(r.currItem, null, !0, r.destroy))
                },
                destroy: function () {
                    Ee("destroy"), Ut && clearTimeout(Ut), e.setAttribute("aria-hidden", "true"), e.className = G, _ && clearInterval(_), o.unbind(r.scrollWrap, g, r), o.unbind(window, "scroll", r), Ct(), tt(), Ae = null
                },
                panTo: function (e, t, n) {
                    n || (e > ne.min.x ? e = ne.min.x : e < ne.max.x && (e = ne.max.x), t > ne.min.y ? t = ne.min.y : t < ne.max.y && (t = ne.max.y)), fe.x = e, fe.y = t, ke()
                },
                handleEvent: function (e) {
                    e = e || window.event, v[e.type] && v[e.type](e)
                },
                goTo: function (e) {
                    e = xe(e);
                    var t = e - h;
                    be = t, h = e, r.currItem = Qt(h), ge -= t, Ge(ye.x * ge), tt(), oe = !1, r.updateCurrItem()
                },
                next: function () {
                    r.goTo(h + 1)
                },
                prev: function () {
                    r.goTo(h - 1)
                },
                updateCurrZoomItem: function (e) {
                    if (e && Ee("beforeChange", 0), C[1].el.children.length) {
                        var t = C[1].el.children[0];
                        ie = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                    } else ie = null;
                    ne = r.currItem.bounds, b = y = r.currItem.initialZoomLevel, fe.x = ne.center.x, fe.y = ne.center.y, e && Ee("afterChange")
                },
                invalidateCurrItems: function () {
                    S = !0;
                    for (var e = 0; a > e; e++) C[e].item && (C[e].item.needsUpdate = !0)
                },
                updateCurrItem: function (e) {
                    if (0 !== be) {
                        var t, n = Math.abs(be);
                        if (!(e && 2 > n)) {
                            r.currItem = Qt(h), Se = !1, Ee("beforeChange", be), n >= a && (f += be + (be > 0 ? -a : a), n = a);
                            for (var i = 0; n > i; i++) be > 0 ? (t = C.shift(), C[a - 1] = t, f++, He((f + 2) * ye.x, t.el.style), r.setContent(t, h - n + i + 1 + 1)) : (t = C.pop(), C.unshift(t), f--, He(f * ye.x, t.el.style), r.setContent(t, h + n - i - 1 - 1));
                            if (ie && 1 === Math.abs(be)) {
                                var o = Qt(x);
                                o.initialZoomLevel !== y && (ln(o, me), hn(o), De(o))
                            }
                            be = 0, r.updateCurrZoomItem(), x = h, Ee("afterChange")
                        }
                    }
                },
                updateSize: function (t) {
                    if (!Te && l.modal) {
                        var n = o.getScrollY();
                        if (N !== n && (e.style.top = n + "px", N = n), !t && _e.x === window.innerWidth && _e.y === window.innerHeight) return;
                        _e.x = window.innerWidth, _e.y = window.innerHeight, e.style.height = _e.y + "px"
                    }
                    if (me.x = r.scrollWrap.clientWidth, me.y = r.scrollWrap.clientHeight, Ze(), ye.x = me.x + Math.round(me.x * l.spacing), ye.y = me.y, Ge(ye.x * ge), Ee("beforeResize"), void 0 !== f) {
                        for (var i, s, c, u = 0; a > u; u++) i = C[u], He((u + f) * ye.x, i.el.style), c = h + u - 1, l.loop && Jt() > 2 && (c = xe(c)), s = Qt(c), s && (S || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(i, c), 1 === u && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && c >= 0 && r.setContent(i, c), s && s.container && (ln(s, me), hn(s), De(s));
                        S = !1
                    }
                    b = y = r.currItem.initialZoomLevel, ne = r.currItem.bounds, ne && (fe.x = ne.center.x, fe.y = ne.center.y, ke(!0)), Ee("resize")
                },
                zoomTo: function (e, t, n, i, r) {
                    t && (b = y, bt.x = Math.abs(t.x) - fe.x, bt.y = Math.abs(t.y) - fe.y, Oe(pe, fe));
                    var s = We(e, !1),
                        a = {};
                    qe("x", s, a, e), qe("y", s, a, e);
                    var l = y,
                        c = {
                            x: fe.x,
                            y: fe.y
                        };
                    Ne(a);
                    var u = function (t) {
                        1 === t ? (y = e, fe.x = a.x, fe.y = a.y) : (y = (e - l) * t + l, fe.x = (a.x - c.x) * t + c.x, fe.y = (a.y - c.y) * t + c.y), r && r(t), ke(1 === t)
                    };
                    n ? nt("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, u) : u(1)
                }
            }, ot = 30,
            rt = 10,
            st = {}, at = {}, lt = {}, ct = {}, ut = {}, dt = [],
            ht = {}, pt = [],
            ft = {}, mt = 0,
            gt = de(),
            vt = 0,
            yt = de(),
            bt = de(),
            Tt = de(),
            wt = function (e, t) {
                return e.x === t.x && e.y === t.y
            }, _t = function (e, t) {
                return Math.abs(e.x - t.x) < s && Math.abs(e.y - t.y) < s
            }, St = function (e, t) {
                return ft.x = Math.abs(e.x - t.x), ft.y = Math.abs(e.y - t.y), Math.sqrt(ft.x * ft.x + ft.y * ft.y)
            }, Ct = function () {
                Z && (H(Z), Z = null)
            }, xt = function () {
                q && (Z = D(xt), Rt())
            }, At = function () {
                return !("fit" === l.scaleMode && y === r.currItem.initialZoomLevel)
            }, Pt = function (e, t) {
                return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : Pt(e.parentNode, t)))
            }, Et = {}, Mt = function (e, t) {
                return Et.prevent = !Pt(e.target, l.ismousedownableElement), Ee("preventDragEvent", e, t, Et), Et.prevent
            }, $t = function (e, t) {
                return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
            }, It = function (e, t, n) {
                n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
            }, kt = function (e, t, n) {
                if (e - R > 50) {
                    var i = pt.length > 2 ? pt.shift() : {};
                    i.x = t, i.y = n, pt.push(i), R = e
                }
            }, Dt = function () {
                var e = fe.y - r.currItem.initialPosition.y;
                return 1 - Math.abs(e / (me.y / 2))
            }, Ht = {}, Gt = {}, Bt = [],
            Ot = function (e) {
                for (; Bt.length > 0;) Bt.pop();
                return I ? (ue = 0, dt.forEach(function (e) {

                    0 === ue ? Bt[0] = e : 1 === ue && (Bt[1] = e), ue++
                })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Bt[0] = $t(e.touches[0], Ht), e.touches.length > 1 && (Bt[1] = $t(e.touches[1], Gt))) : (Ht.x = e.pageX, Ht.y = e.pageY, Ht.id = "", Bt[0] = Ht), Bt
            }, Nt = function (e, t) {
                var n, i, o, s, a = 0,
                    c = fe[e] + t[e],
                    u = t[e] > 0,
                    d = yt.x + t.x,
                    h = yt.x - ht.x;
                return n = c > ne.min[e] || c < ne.max[e] ? l.panEndFriction : 1, c = fe[e] + t[e] * n, !l.allowPanToNext && y !== r.currItem.initialZoomLevel || (ie ? "h" !== re || "x" !== e || U || (u ? (c > ne.min[e] && (n = l.panEndFriction, a = ne.min[e] - c, i = ne.min[e] - pe[e]), (0 >= i || 0 > h) && Jt() > 1 ? (s = d, 0 > h && d > ht.x && (s = ht.x)) : ne.min.x !== ne.max.x && (o = c)) : (c < ne.max[e] && (n = l.panEndFriction, a = c - ne.max[e], i = pe[e] - ne.max[e]), (0 >= i || h > 0) && Jt() > 1 ? (s = d, h > 0 && d < ht.x && (s = ht.x)) : ne.min.x !== ne.max.x && (o = c))) : s = d, "x" !== e) ? void(oe || Y || y > r.currItem.fitRatio && (fe[e] += t[e] * n)) : (void 0 !== s && (Ge(s, !0), Y = s !== ht.x), ne.min.x !== ne.max.x && (void 0 !== o ? fe.x = o : Y || (fe.x += t.x * n)), void 0 !== s)
            }, Lt = function (e) {
                if (!("mousedown" === e.type && e.button > 0)) {
                    if (Yt) return void e.preventDefault();
                    if (!z || "mousedown" !== e.type) {
                        if (Mt(e, !0) && e.preventDefault(), Ee("pointerDown"), I) {
                            var t = o.arraySearch(dt, e.pointerId, "id");
                            0 > t && (t = dt.length), dt[t] = {
                                x: e.pageX,
                                y: e.pageY,
                                id: e.pointerId
                            }
                        }
                        var n = Ot(e),
                            i = n.length;
                        Q = null, tt(), q && 1 !== i || (q = se = !0, o.bind(window, m, r), W = ce = ae = V = Y = K = X = U = !1, re = null, Ee("firstTouchStart", n), Oe(pe, fe), he.x = he.y = 0, Oe(ct, n[0]), Oe(ut, ct), ht.x = ye.x * ge, pt = [{
                            x: ct.x,
                            y: ct.y
                        }], R = j = Me(), We(y, !0), Ct(), xt()), !J && i > 1 && !oe && !Y && (b = y, U = !1, J = X = !0, he.y = he.x = 0, Oe(pe, fe), Oe(st, n[0]), Oe(at, n[1]), It(st, at, Tt), bt.x = Math.abs(Tt.x) - fe.x, bt.y = Math.abs(Tt.y) - fe.y, ee = te = St(st, at))
                    }
                }
            }, jt = function (e) {
                if (e.preventDefault(), I) {
                    var t = o.arraySearch(dt, e.pointerId, "id");
                    if (t > -1) {
                        var n = dt[t];
                        n.x = e.pageX, n.y = e.pageY
                    }
                }
                if (q) {
                    var i = Ot(e);
                    if (re || K || J) Q = i;
                    else if (yt.x !== ye.x * ge) re = "h";
                    else {
                        var r = Math.abs(i[0].x - ct.x) - Math.abs(i[0].y - ct.y);
                        Math.abs(r) >= rt && (re = r > 0 ? "h" : "v", Q = i)
                    }
                }
            }, Rt = function () {
                if (Q) {
                    var e = Q.length;
                    if (0 !== e) if (Oe(st, Q[0]), lt.x = st.x - ct.x, lt.y = st.y - ct.y, J && e > 1) {
                        if (ct.x = st.x, ct.y = st.y, !lt.x && !lt.y && wt(Q[1], at)) return;
                        Oe(at, Q[1]), U || (U = !0, Ee("zoomGestureStarted"));
                        var t = St(st, at),
                            n = qt(t);
                        n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ce = !0);
                        var i = 1,
                            o = Ve(),
                            s = ze();
                        if (o > n) if (l.pinchToClose && !ce && b <= r.currItem.initialZoomLevel) {
                            var a = o - n,
                                c = 1 - a / (o / 1.2);
                            $e(c), Ee("onPinchClose", c), ae = !0
                        } else i = (o - n) / o, i > 1 && (i = 1), n = o - i * (o / 3);
                        else n > s && (i = (n - s) / (6 * o), i > 1 && (i = 1), n = s + i * o);
                        0 > i && (i = 0), ee = t, It(st, at, gt), he.x += gt.x - Tt.x, he.y += gt.y - Tt.y, Oe(Tt, gt), fe.x = Be("x", n), fe.y = Be("y", n), W = n > y, y = n, ke()
                    } else {
                        if (!re) return;
                        if (se && (se = !1, Math.abs(lt.x) >= rt && (lt.x -= Q[0].x - ut.x), Math.abs(lt.y) >= rt && (lt.y -= Q[0].y - ut.y)), ct.x = st.x, ct.y = st.y, 0 === lt.x && 0 === lt.y) return;
                        if ("v" === re && l.closeOnVerticalDrag && !At()) {
                            he.y += lt.y, fe.y += lt.y;
                            var u = Dt();
                            return V = !0, Ee("onVerticalDrag", u), $e(u), void ke()
                        }
                        kt(Me(), st.x, st.y), K = !0, ne = r.currItem.bounds;
                        var d = Nt("x", lt);
                        d || (Nt("y", lt), Ne(fe), ke())
                    }
                }
            }, Ft = function (e) {
                if (L.isOldAndroid) {
                    if (z && "mouseup" === e.type) return;
                    e.type.indexOf("touch") > -1 && (clearTimeout(z), z = setTimeout(function () {
                        z = 0
                    }, 600))
                }
                Ee("pointerUp"), Mt(e, !1) && e.preventDefault();
                var t;
                if (I) {
                    var n = o.arraySearch(dt, e.pointerId, "id");
                    if (n > -1) if (t = dt.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                    else {
                        var i = {
                            4: "mouse",
                            2: "touch",
                            3: "pen"
                        };
                        t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                    }
                }
                var s, a = Ot(e),
                    c = a.length;
                if ("mouseup" === e.type && (c = 0), 2 === c) return Q = null, !0;
                1 === c && Oe(ut, a[0]), 0 !== c || re || oe || (t || ("mouseup" === e.type ? t = {
                    x: e.pageX,
                    y: e.pageY,
                    type: "mouse"
                } : e.changedTouches && e.changedTouches[0] && (t = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY,
                    type: "touch"
                })), Ee("touchRelease", e, t));
                var u = -1;
                if (0 === c && (q = !1, o.unbind(window, m, r), Ct(), J ? u = 0 : -1 !== vt && (u = Me() - vt)), vt = 1 === c ? Me() : -1, s = -1 !== u && 150 > u ? "zoom" : "swipe", J && 2 > c && (J = !1, 1 === c && (s = "zoomPointerUp"), Ee("zoomGestureEnded")), Q = null, K || U || oe || V) if (tt(), F || (F = Wt()), F.calculateSwipeSpeed("x"), V) {
                    var d = Dt();
                    if (d < l.verticalDragRange) r.close();
                    else {
                        var h = fe.y,
                            p = le;
                        nt("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
                            fe.y = (r.currItem.initialPosition.y - h) * e + h, $e((1 - p) * e + p), ke()
                        }), Ee("onVerticalDrag", 1)
                    }
                } else {
                    if ((Y || oe) && 0 === c) {
                        var f = zt(s, F);
                        if (f) return;
                        s = "zoomPointerUp"
                    }
                    if (!oe) return "swipe" !== s ? void Xt() : void(!Y && y > r.currItem.fitRatio && Vt(F))
                }
            }, Wt = function () {
                var e, t, n = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function (i) {
                        pt.length > 1 ? (e = Me() - R + 50, t = pt[pt.length - 2][i]) : (e = Me() - j, t = ut[i]), n.lastFlickOffset[i] = ct[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                    },
                    calculateOverBoundsAnimOffset: function (e, t) {
                        n.backAnimStarted[e] || (fe[e] > ne.min[e] ? n.backAnimDestination[e] = ne.min[e] : fe[e] < ne.max[e] && (n.backAnimDestination[e] = ne.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, nt("bounceZoomPan" + e, fe[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
                            fe[e] = t, ke()
                        }))))
                    },
                    calculateAnimOffset: function (e) {
                        n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, fe[e] += n.distanceOffset[e])
                    },
                    panAnimLoop: function () {
                        return Ye.zoomPan && (Ye.zoomPan.raf = D(n.panAnimLoop), n.now = Me(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), ke(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05) ? (fe.x = Math.round(fe.x), fe.y = Math.round(fe.y), ke(), void Je("zoomPan")) : void 0
                    }
                };
                return n
            }, Vt = function (e) {
                return e.calculateSwipeSpeed("y"), ne = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (et("zoomPan"), e.lastNow = Me(), void e.panAnimLoop())
            }, zt = function (e, t) {
                var n;
                oe || (mt = h);
                var i;
                if ("swipe" === e) {
                    var s = ct.x - ut.x,
                        a = t.lastFlickDist.x < 10;
                    s > ot && (a || t.lastFlickOffset.x > 20) ? i = -1 : -ot > s && (a || t.lastFlickOffset.x < -20) && (i = 1)
                }
                var c;
                i && (h += i, 0 > h ? (h = l.loop ? Jt() - 1 : 0, c = !0) : h >= Jt() && (h = l.loop ? 0 : Jt() - 1, c = !0), (!c || l.loop) && (be += i, ge -= i, n = !0));
                var u, d = ye.x * ge,
                    p = Math.abs(d - yt.x);
                return n || d > yt.x == t.lastFlickSpeed.x > 0 ? (u = Math.abs(t.lastFlickSpeed.x) > 0 ? p / Math.abs(t.lastFlickSpeed.x) : 333, u = Math.min(u, 400), u = Math.max(u, 250)) : u = 333, mt === h && (n = !1), oe = !0, Ee("mainScrollAnimStart"), nt("mainScroll", yt.x, d, u, o.easing.cubic.out, Ge, function () {
                    tt(), oe = !1, mt = -1, (n || mt !== h) && r.updateCurrItem(), Ee("mainScrollAnimComplete")
                }), n && r.updateCurrItem(!0), n
            }, qt = function (e) {
                return 1 / te * e * b
            }, Xt = function () {
                var e = y,
                    t = Ve(),
                    n = ze();
                t > y ? e = t : y > n && (e = n);
                var i, s = 1,
                    a = le;
                return ae && !W && !ce && t > y ? (r.close(), !0) : (ae && (i = function (e) {
                    $e((s - a) * e + a)
                }), r.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
            };
        Ce("Gestures", {
            publicMethods: {
                initGestures: function () {
                    var e = function (e, t, n, i, o) {
                        A = e + t, P = e + n, E = e + i, M = o ? e + o : ""
                    };
                    I = L.pointerEvent, I && L.touch && (L.touch = !1), I ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : L.touch ? (e("touch", "start", "move", "end", "cancel"), k = !0) : e("mouse", "down", "move", "up"), m = P + " " + E + " " + M, g = A, I && !k && (k = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = k, v[A] = Lt, v[P] = jt, v[E] = Ft, M && (v[M] = v[E]), L.touch && (g += " mousedown", m += " mousemove mouseup", v.mousedown = v[A], v.mousemove = v[P], v.mouseup = v[E]), k || (l.allowPanToNext = !1)
                }
            }
        });
        var Ut, Kt, Zt, Yt, Qt, Jt, en, tn = function (t, n, i, s) {
            Ut && clearTimeout(Ut), Yt = !0, Zt = !0;
            var a;
            t.initialLayout ? (a = t.initialLayout, t.initialLayout = null) : a = l.getThumbBoundsFn && l.getThumbBoundsFn(h);
            var c = i ? l.hideAnimationDuration : l.showAnimationDuration,
                u = function () {
                    Je("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : ($e(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), Ee("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), Yt = !1
                };
            if (!c || !a || void 0 === a.x) return Ee("initialZoom" + (i ? "Out" : "In")), y = t.initialZoomLevel, Oe(fe, t.initialPosition), ke(), e.style.opacity = i ? 0 : 1, $e(1), void(c ? setTimeout(function () {
                u()
            }, c) : u());
            var p = function () {
                var n = d,
                    s = !r.currItem.src || r.currItem.loadError || l.showHideOpacity;
                t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = a.w / t.w, fe.x = a.x, fe.y = a.y - B, r[s ? "template" : "bg"].style.opacity = .001, ke()), et("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), s && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
                    o.addClass(e, "pswp--animate_opacity")
                }, 30)), Ut = setTimeout(function () {
                    if (Ee("initialZoom" + (i ? "Out" : "In")), i) {
                        var r = a.w / t.w,
                            l = {
                                x: fe.x,
                                y: fe.y
                            }, d = y,
                            h = le,
                            p = function (t) {
                                1 === t ? (y = r, fe.x = a.x, fe.y = a.y - N) : (y = (r - d) * t + d, fe.x = (a.x - l.x) * t + l.x, fe.y = (a.y - N - l.y) * t + l.y), ke(), s ? e.style.opacity = 1 - t : $e(h - t * h)
                            };
                        n ? nt("initialZoom", 0, 1, c, o.easing.cubic.out, p, u) : (p(1), Ut = setTimeout(u, c + 20))
                    } else y = t.initialZoomLevel, Oe(fe, t.initialPosition), ke(), $e(1), s ? e.style.opacity = 1 : $e(1), Ut = setTimeout(u, c + 20)
                }, i ? 25 : 90)
            };
            p()
        }, nn = {}, on = [],
            rn = {
                index: 0,
                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: !1,
                preload: [1, 1],
                getNumItemsFn: function () {
                    return Kt.length
                }
            }, sn = function () {
                return {
                    center: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 0,
                        y: 0
                    },
                    min: {
                        x: 0,
                        y: 0
                    }
                }
            }, an = function (e, t, n) {
                var i = e.bounds;
                i.center.x = Math.round((nn.x - t) / 2), i.center.y = Math.round((nn.y - n) / 2) + e.vGap.top, i.max.x = t > nn.x ? Math.round(nn.x - t) : i.center.x, i.max.y = n > nn.y ? Math.round(nn.y - n) + e.vGap.top : i.center.y, i.min.x = t > nn.x ? 0 : i.center.x, i.min.y = n > nn.y ? e.vGap.top : i.center.y
            }, ln = function (e, t, n) {
                if (e.src && !e.loadError) {
                    var i = !n;
                    if (i && (e.vGap || (e.vGap = {
                        top: 0,
                        bottom: 0
                    }), Ee("parseVerticalMargin", e)), nn.x = t.x, nn.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                        var o = nn.x / e.w,
                            r = nn.y / e.h;
                        e.fitRatio = r > o ? o : r;
                        var s = l.scaleMode;
                        "orig" === s ? n = 1 : "fit" === s && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = sn())
                    }
                    if (!n) return;
                    return an(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                }
                return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = sn(), e.initialPosition = e.bounds.center, e.bounds
            }, cn = function (e, t, n, i, o, s) {
                t.loadError || i && (t.imageAppended = !0, hn(t, i, t === r.currItem && Se), n.appendChild(i), s && setTimeout(function () {
                    t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                }, 500))
            }, un = function (e) {
                e.loading = !0, e.loaded = !1;
                var t = e.img = o.createEl("pswp__img", "img"),
                    n = function () {
                        e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                    };
                return t.onload = n, t.onerror = function () {
                    e.loadError = !0, n()
                }, t.src = e.src, t
            }, dn = function (e, t) {
                return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0) : void 0
            }, hn = function (e, t, n) {
                if (e.src) {
                    t || (t = e.container.lastChild);
                    var i = n ? e.w : Math.round(e.w * e.fitRatio),
                        o = n ? e.h : Math.round(e.h * e.fitRatio);
                    e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
                }
            }, pn = function () {
                if (on.length) {
                    for (var e, t = 0; t < on.length; t++) e = on[t], e.holder.index === e.index && cn(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                    on = []
                }
            };
        Ce("Controller", {
            publicMethods: {
                lazyLoadItem: function (e) {
                    e = xe(e);
                    var t = Qt(e);
                    t && (!t.loaded && !t.loading || S) && (Ee("gettingData", e, t), t.src && un(t))
                },
                initController: function () {
                    o.extend(l, rn, !0), r.items = Kt = n, Qt = r.getItemAt, Jt = l.getNumItemsFn, en = l.loop, Jt() < 3 && (l.loop = !1), Pe("beforeChange", function (e) {
                        var t, n = l.preload,
                            i = null === e || e >= 0,
                            o = Math.min(n[0], Jt()),
                            s = Math.min(n[1], Jt());
                        for (t = 1;
                        (i ? s : o) >= t; t++) r.lazyLoadItem(h + t);
                        for (t = 1;
                        (i ? o : s) >= t; t++) r.lazyLoadItem(h - t)
                    }), Pe("initialLayout", function () {
                        r.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(h)
                    }), Pe("mainScrollAnimComplete", pn), Pe("initialZoomInEnd", pn), Pe("destroy", function () {
                        for (var e, t = 0; t < Kt.length; t++) e = Kt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                        on = null
                    })
                },
                getItemAt: function (e) {
                    return e >= 0 && void 0 !== Kt[e] && Kt[e]
                },
                allowProgressiveImg: function () {
                    return l.forceProgressiveLoading || !k || l.mouseUsed || screen.width > 1200
                },
                setContent: function (e, t) {
                    l.loop && (t = xe(t));
                    var n = r.getItemAt(e.index);
                    n && (n.container = null);
                    var i, s = r.getItemAt(t);
                    if (!s) return void(e.el.innerHTML = "");
                    Ee("gettingData", t, s), e.index = t, e.item = s;
                    var a = s.container = o.createEl("pswp__zoom-wrap");
                    if (!s.src && s.html && (s.html.tagName ? a.appendChild(s.html) : a.innerHTML = s.html), dn(s), ln(s, me), !s.src || s.loadError || s.loaded) s.src && !s.loadError && (i = o.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = s.src, hn(s, i), cn(t, s, a, i, !0));
                    else {
                        if (s.loadComplete = function (n) {
                            if (c) {
                                if (e && e.index === t) {
                                    if (dn(n, !0)) return n.loadComplete = n.img = null, ln(n, me), De(n), void(e.index === h && r.updateCurrZoomItem());
                                    n.imageAppended ? !Yt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : L.transform && (oe || Yt) ? on.push({
                                        item: n,
                                        baseDiv: a,
                                        img: n.img,
                                        index: t,
                                        holder: e,
                                        clearPlaceholder: !0
                                    }) : cn(t, n, a, n.img, oe || Yt, !0)
                                }
                                n.loadComplete = null, n.img = null, Ee("imageLoadComplete", t, n)
                            }
                        }, o.features.transform) {
                            var u = "pswp__img pswp__img--placeholder";
                            u += s.msrc ? "" : " pswp__img--placeholder--blank";
                            var d = o.createEl(u, s.msrc ? "img" : "");
                            s.msrc && (d.src = s.msrc), hn(s, d), a.appendChild(d), s.placeholder = d
                        }
                        s.loading || un(s), r.allowProgressiveImg() && (!Zt && L.transform ? on.push({
                            item: s,
                            baseDiv: a,
                            img: s.img,
                            index: t,
                            holder: e
                        }) : cn(t, s, a, s.img, !0, !0))
                    }
                    Zt || t !== h ? De(s) : (ie = a.style, tn(s, i || s.img)), e.el.innerHTML = "", e.el.appendChild(a)
                },
                cleanSlide: function (e) {
                    e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });
        var fn, mn = {}, gn = function (e, t, n) {
            var i = document.createEvent("CustomEvent"),
                o = {
                    origEvent: e,
                    target: e.target,
                    releasePoint: t,
                    pointerType: n || "touch"
                };
            i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
        };
        Ce("Tap", {
            publicMethods: {
                initTap: function () {
                    Pe("firstTouchStart", r.onTapStart), Pe("touchRelease", r.onTapRelease), Pe("destroy", function () {
                        mn = {}, fn = null
                    })
                },
                onTapStart: function (e) {
                    e.length > 1 && (clearTimeout(fn), fn = null)
                },
                onTapRelease: function (e, t) {
                    if (t && !K && !X && !Qe) {
                        var n = t;
                        if (fn && (clearTimeout(fn), fn = null, _t(n, mn))) return void Ee("doubleTap", n);
                        if ("mouse" === t.type) return void gn(e, t, "mouse");
                        var i = e.target.tagName.toUpperCase();
                        if ("BUTTON" === i || o.hasClass(e.target, "pswp__single-tap")) return void gn(e, t);
                        Oe(mn, n), fn = setTimeout(function () {
                            gn(e, t), fn = null
                        }, 300)
                    }
                }
            }
        });
        var vn;
        Ce("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function () {
                    O || (k ? Pe("mouseUsed", function () {
                        r.setupDesktopZoom()
                    }) : r.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function (t) {
                    vn = {};
                    var n = "wheel mousewheel DOMMouseScroll";
                    Pe("bindEvents", function () {
                        o.bind(e, n, r.handleMouseWheel)
                    }), Pe("unbindEvents", function () {
                        vn && o.unbind(e, n, r.handleMouseWheel)
                    }), r.mouseZoomedIn = !1;
                    var i, s = function () {
                        r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > y ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), a()
                    }, a = function () {
                        i && (o.removeClass(e, "pswp--dragging"), i = !1)
                    };
                    Pe("resize", s), Pe("afterChange", s), Pe("pointerDown", function () {
                        r.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
                    }), Pe("pointerUp", a), t || s()
                },
                handleMouseWheel: function (e) {
                    if (y <= r.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Qe || q ? e.preventDefault() : $ && Math.abs(e.deltaY) > 2 && (d = !0, r.close())), !0;
                    if (e.stopPropagation(), vn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (vn.x = 18 * e.deltaX, vn.y = 18 * e.deltaY) : (vn.x = e.deltaX, vn.y = e.deltaY);
                    else if ("wheelDelta" in e) e.wheelDeltaX && (vn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? vn.y = -.16 * e.wheelDeltaY : vn.y = -.16 * e.wheelDelta;
                    else {
                        if (!("detail" in e)) return;
                        vn.y = e.detail
                    }
                    We(y, !0);
                    var t = fe.x - vn.x,
                        n = fe.y - vn.y;
                    (l.modal || t <= ne.min.x && t >= ne.max.x && n <= ne.min.y && n >= ne.max.y) && e.preventDefault(), r.panTo(t, n)
                },
                toggleDesktopZoom: function (t) {
                    t = t || {
                        x: me.x / 2 + ve.x,
                        y: me.y / 2 + ve.y
                    };
                    var n = l.getDoubleTapZoom(!0, r.currItem),
                        i = y === n;
                    r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                }
            }
        });
        var yn, bn, Tn, wn, _n, Sn, Cn, xn, An, Pn, En, Mn, $n = {
            history: !0,
            galleryUID: 1
        }, In = function () {
            return En.hash.substring(1)
        }, kn = function () {
            yn && clearTimeout(yn), Tn && clearTimeout(Tn)
        }, Dn = function () {
            var e = In(),
                t = {};
            if (e.length < 5) return t;
            var n, i = e.split("&");
            for (n = 0; n < i.length; n++) if (i[n]) {
                var o = i[n].split("=");
                o.length < 2 || (t[o[0]] = o[1])
            }
            if (l.galleryPIDs) {
                var r = t.pid;
                for (t.pid = 0, n = 0; n < Kt.length; n++) if (Kt[n].pid === r) {
                    t.pid = n;
                    break
                }
            } else t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0), t
        }, Hn = function () {
            if (Tn && clearTimeout(Tn), Qe || q) return void(Tn = setTimeout(Hn, 500));
            wn ? clearTimeout(bn) : wn = !0;
            var e = h + 1,
                t = Qt(h);
            t.hasOwnProperty("pid") && (e = t.pid);
            var n = Cn + "&gid=" + l.galleryUID + "&pid=" + e;
            xn || -1 === En.hash.indexOf(n) && (Pn = !0);
            var i = En.href.split("#")[0] + "#" + n;
            Mn ? "#" + n !== window.location.hash && history[xn ? "replaceState" : "pushState"]("", document.title, i) : xn ? En.replace(i) : En.hash = n, xn = !0, bn = setTimeout(function () {
                wn = !1
            }, 60)
        };
        Ce("History", {
            publicMethods: {
                initHistory: function () {
                    if (o.extend(l, $n, !0), l.history) {
                        En = window.location, Pn = !1, An = !1, xn = !1, Cn = In(), Mn = "pushState" in history, Cn.indexOf("gid=") > -1 && (Cn = Cn.split("&gid=")[0], Cn = Cn.split("?gid=")[0]), Pe("afterChange", r.updateURL), Pe("unbindEvents", function () {
                            o.unbind(window, "hashchange", r.onHashChange)
                        });
                        var e = function () {
                            Sn = !0, An || (Pn ? history.back() : Cn ? En.hash = Cn : Mn ? history.pushState("", document.title, En.pathname + En.search) : En.hash = ""), kn()
                        };
                        Pe("unbindEvents", function () {
                            d && e()
                        }), Pe("destroy", function () {
                            Sn || e()
                        }), Pe("firstUpdate", function () {
                            h = Dn().pid
                        });

                        var t = Cn.indexOf("pid=");
                        t > -1 && (Cn = Cn.substring(0, t), "&" === Cn.slice(-1) && (Cn = Cn.slice(0, -1))), setTimeout(function () {
                            c && o.bind(window, "hashchange", r.onHashChange)
                        }, 40)
                    }
                },
                onHashChange: function () {
                    return In() === Cn ? (An = !0, void r.close()) : void(wn || (_n = !0, r.goTo(Dn().pid), _n = !1))
                },
                updateURL: function () {
                    kn(), _n || (xn ? yn = setTimeout(Hn, 800) : Hn())
                }
            }
        }), o.extend(r, it)
    };
    return e
}), ! function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function () {
    "use strict";
    var e = function (e, t) {
        var n, i, o, r, s, a, l, c, u, d, h, p, f, m, g, v, y, b, T, w = this,
            _ = !1,
            S = !0,
            C = !0,
            x = {
                barsSize: {
                    top: 44,
                    bottom: "auto"
                },
                closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                timeToIdle: 4e3,
                timeToIdleOutside: 1e3,
                loadingIndicatorDelay: 1e3,
                addCaptionHTMLFn: function (e, t) {
                    return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                },
                closeEl: !0,
                captionEl: !0,
                fullscreenEl: !0,
                zoomEl: !0,
                shareEl: !0,
                counterEl: !0,
                arrowEl: !0,
                preloaderEl: !0,
                tapToClose: !1,
                tapToToggleControls: !0,
                mousedownToCloseNonZoomable: !0,
                shareButtons: [{
                    id: "facebook",
                    label: "Share on Facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                }, {
                    id: "twitter",
                    label: "Tweet",
                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                }, {
                    id: "pinterest",
                    label: "Pin it",
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                }, {
                    id: "download",
                    label: "Download image",
                    url: "{{raw_image_url}}",
                    download: !0
                }],
                getImageURLForShare: function () {
                    return e.currItem.src || ""
                },
                getPageURLForShare: function () {
                    return window.location.href
                },
                getTextForShare: function () {
                    return e.currItem.title || ""
                },
                indexIndicatorSep: " / ",
                fitControlsWidth: 1200
            }, A = function (e) {
                if (v) return !0;
                e = e || window.event, g.timeToIdle && g.mouseUsed && !u && B();
                for (var n, i, o = e.target || e.srcElement, r = o.getAttribute("class") || "", s = 0; s < V.length; s++) n = V[s], n.onTap && r.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
                if (i) {
                    e.stopPropagation && e.stopPropagation(), v = !0;
                    var a = t.features.isOldAndroid ? 600 : 30;
                    y = setTimeout(function () {
                        v = !1
                    }, a)
                }
            }, P = function () {
                return !e.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
            }, E = function (e, n, i) {
                t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
            }, M = function () {
                var e = 1 === g.getNumItemsFn();
                e !== m && (E(i, "ui--one-slide", e), m = e)
            }, $ = function () {
                E(l, "share-modal--hidden", C)
            }, I = function () {
                return C = !C, C ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
                    C && $()
                }, 300)) : ($(), setTimeout(function () {
                    C || t.addClass(l, "pswp__share-modal--fade-in")
                }, 30)), C || D(), !1
            }, k = function (t) {
                t = t || window.event;
                var n = t.target || t.srcElement;
                return e.shout("shareLinkmousedown", t, n), !! n.href && ( !! n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), C || I(), !1))
            }, D = function () {
                for (var e, t, n, i, o, r = "", s = 0; s < g.shareButtons.length; s++) e = g.shareButtons[s], n = g.getImageURLForShare(e), i = g.getPageURLForShare(e), o = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(o)), r += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (r = g.parseShareButtonOut(e, r));
                l.children[0].innerHTML = r, l.children[0].onmousedown = k
            }, H = function (e) {
                for (var n = 0; n < g.closeElClasses.length; n++) if (t.hasClass(e, "pswp__" + g.closeElClasses[n])) return !0
            }, G = 0,
            B = function () {
                clearTimeout(T), G = 0, u && w.setIdle(!1)
            }, O = function (e) {
                e = e ? e : window.event;
                var t = e.relatedTarget || e.toElement;
                t && "HTML" !== t.nodeName || (clearTimeout(T), T = setTimeout(function () {
                    w.setIdle(!0)
                }, g.timeToIdleOutside))
            }, N = function () {
                g.fullscreenEl && !t.features.isOldAndroid && (n || (n = w.getFullscreenAPI()), n ? (t.bind(document, n.eventK, w.updateFullscreen), w.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
            }, L = function () {
                g.preloaderEl && (j(!0), d("beforeChange", function () {
                    clearTimeout(f), f = setTimeout(function () {
                        e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && j(!1) : j(!0)
                    }, g.loadingIndicatorDelay)
                }), d("imageLoadComplete", function (t, n) {
                    e.currItem === n && j(!0)
                }))
            }, j = function (e) {
                p !== e && (E(h, "preloader--active", !e), p = e)
            }, R = function (e) {
                var n = e.vGap;
                if (P()) {
                    var s = g.barsSize;
                    if (g.captionEl && "auto" === s.bottom) if (r || (r = t.createEl("pswp__caption pswp__caption--fake"), r.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(r, o), t.addClass(i, "pswp__ui--fit")), g.addCaptionHTMLFn(e, r, !0)) {
                        var a = r.clientHeight;
                        n.bottom = parseInt(a, 10) || 44
                    } else n.bottom = s.top;
                    else n.bottom = "auto" === s.bottom ? 0 : s.bottom;
                    n.top = s.top
                } else n.top = n.bottom = 0
            }, F = function () {
                g.timeToIdle && d("mouseUsed", function () {
                    t.bind(document, "mousemove", B), t.bind(document, "mouseout", O), b = setInterval(function () {
                        G++, 2 === G && w.setIdle(!0)
                    }, g.timeToIdle / 2)
                })
            }, W = function () {
                d("onVerticalDrag", function (e) {
                    S && .95 > e ? w.hideControls() : !S && e >= .95 && w.showControls()
                });
                var e;
                d("onPinchClose", function (t) {
                    S && .9 > t ? (w.hideControls(), e = !0) : e && !S && t > .9 && w.showControls()
                }), d("zoomGestureEnded", function () {
                    e = !1, e && !S && w.showControls()
                })
            }, V = [{
                name: "caption",
                option: "captionEl",
                onInit: function (e) {
                    o = e
                }
            }, {
                name: "share-modal",
                option: "shareEl",
                onInit: function (e) {
                    l = e
                },
                onTap: function () {
                    I()
                }
            }, {
                name: "button--share",
                option: "shareEl",
                onInit: function (e) {
                    a = e
                },
                onTap: function () {
                    I()
                }
            }, {
                name: "button--zoom",
                option: "zoomEl",
                onTap: e.toggleDesktopZoom
            }, {
                name: "counter",
                option: "counterEl",
                onInit: function (e) {
                    s = e
                }
            }, {
                name: "button--close",
                option: "closeEl",
                onTap: e.close
            }, {
                name: "button--arrow--left",
                option: "arrowEl",
                onTap: e.prev
            }, {
                name: "button--arrow--right",
                option: "arrowEl",
                onTap: e.next
            }, {
                name: "button--fs",
                option: "fullscreenEl",
                onTap: function () {
                    n.isFullscreen() ? n.exit() : n.enter()
                }
            }, {
                name: "preloader",
                option: "preloaderEl",
                onInit: function (e) {
                    h = e
                }
            }],
            z = function () {
                var e, n, o, r = function (i) {
                    if (i) for (var r = i.length, s = 0; r > s; s++) {
                        e = i[s], n = e.className;
                        for (var a = 0; a < V.length; a++) o = V[a], n.indexOf("pswp__" + o.name) > -1 && (g[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                    }
                };
                r(i.children);
                var s = t.getChildByClass(i, "pswp__top-bar");
                s && r(s.children)
            };
        w.init = function () {
            t.extend(e.options, x, !0), g = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, W(), d("beforeChange", w.update), d("doubleTap", function (t) {
                var n = e.currItem.initialZoomLevel;
                e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333)
            }), d("preventDragEvent", function (e, t, n) {
                var i = e.target || e.srcElement;
                i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
            }), d("bindEvents", function () {
                t.bind(i, "pswpTap mousedown", A), t.bind(e.scrollWrap, "pswpTap", w.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", w.onMouseOver)
            }), d("unbindEvents", function () {
                C || I(), b && clearInterval(b), t.unbind(document, "mouseout", O), t.unbind(document, "mousemove", B), t.unbind(i, "pswpTap mousedown", A), t.unbind(e.scrollWrap, "pswpTap", w.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", w.onMouseOver), n && (t.unbind(document, n.eventK, w.updateFullscreen), n.isFullscreen() && (g.hideAnimationDuration = 0, n.exit()), n = null)
            }), d("destroy", function () {
                g.captionEl && (r && i.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onmousedown = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), w.setIdle(!1)
            }), g.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), d("initialZoomIn", function () {
                g.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
            }), d("initialZoomOut", function () {
                t.addClass(i, "pswp__ui--hidden")
            }), d("parseVerticalMargin", R), z(), g.shareEl && a && l && (C = !0), M(), F(), N(), L()
        }, w.setIdle = function (e) {
            u = e, E(i, "ui--idle", e)
        }, w.update = function () {
            S && e.currItem ? (w.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(e.currItem, o), E(o, "caption--empty", !e.currItem.title)), _ = !0) : _ = !1, C || I(), M()
        }, w.updateFullscreen = function (i) {
            i && setTimeout(function () {
                e.setScrollOffset(0, t.getScrollY())
            }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, w.updateIndexIndicator = function () {
            g.counterEl && (s.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
        }, w.onGlobalTap = function (n) {
            n = n || window.event;
            var i = n.target || n.srcElement;
            if (!v) if (n.detail && "mouse" === n.detail.pointerType) {
                if (H(i)) return void e.close();
                t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.mousedownToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
            } else if (g.tapToToggleControls && (S ? w.hideControls() : w.showControls()), g.tapToClose && (t.hasClass(i, "pswp__img") || H(i))) return void e.close()
        }, w.onMouseOver = function (e) {
            e = e || window.event;
            var t = e.target || e.srcElement;
            E(i, "ui--over-close", H(t))
        }, w.hideControls = function () {
            t.addClass(i, "pswp__ui--hidden"), S = !1
        }, w.showControls = function () {
            S = !0, _ || w.update(), t.removeClass(i, "pswp__ui--hidden")
        }, w.supportsFullscreen = function () {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, w.getFullscreenAPI = function () {
            var t, n = document.documentElement,
                i = "fullscreenchange";
            return n.requestFullscreen ? t = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: i
            } : n.mozRequestFullScreen ? t = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + i
            } : n.webkitRequestFullscreen ? t = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + i
            } : n.msRequestFullscreen && (t = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), t && (t.enter = function () {
                return c = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, t.exit = function () {
                return g.closeOnScroll = c, document[this.exitK]()
            }, t.isFullscreen = function () {
                return document[this.elementK]
            }), t
        }
    };
    return e
}), ! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    var t = function () {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
        var t;
        return function () {
            if (!t || !t.requirejs) {
                t ? n = t : t = {};
                var e, n, i;
                ! function (t) {
                    function o(e, t) {
                        return T.call(e, t)
                    }

                    function r(e, t) {
                        var n, i, o, r, s, a, l, c, u, d, h, p = t && t.split("/"),
                            f = y.map,
                            m = f && f["*"] || {};
                        if (e && "." === e.charAt(0)) if (t) {
                            for (e = e.split("/"), s = e.length - 1, y.nodeIdCompat && _.test(e[s]) && (e[s] = e[s].replace(_, "")), e = p.slice(0, p.length - 1).concat(e), u = 0; u < e.length; u += 1) if (h = e[u], "." === h) e.splice(u, 1), u -= 1;
                            else if (".." === h) {
                                if (1 === u && (".." === e[2] || ".." === e[0])) break;
                                u > 0 && (e.splice(u - 1, 2), u -= 2)
                            }
                            e = e.join("/")
                        } else 0 === e.indexOf("./") && (e = e.substring(2));
                        if ((p || m) && f) {
                            for (n = e.split("/"), u = n.length; u > 0; u -= 1) {
                                if (i = n.slice(0, u).join("/"), p) for (d = p.length; d > 0; d -= 1) if (o = f[p.slice(0, d).join("/")], o && (o = o[i])) {
                                    r = o, a = u;
                                    break
                                }
                                if (r) break;
                                !l && m && m[i] && (l = m[i], c = u)
                            }!r && l && (r = l, a = c), r && (n.splice(0, a, r), e = n.join("/"))
                        }
                        return e
                    }

                    function s(e, n) {
                        return function () {
                            var i = w.call(arguments, 0);
                            return "string" != typeof i[0] && 1 === i.length && i.push(null), p.apply(t, i.concat([e, n]))
                        }
                    }

                    function a(e) {
                        return function (t) {
                            return r(t, e)
                        }
                    }

                    function l(e) {
                        return function (t) {
                            g[e] = t
                        }
                    }

                    function c(e) {
                        if (o(v, e)) {
                            var n = v[e];
                            delete v[e], b[e] = !0, h.apply(t, n)
                        }
                        if (!o(g, e) && !o(b, e)) throw new Error("No " + e);
                        return g[e]
                    }

                    function u(e) {
                        var t, n = e ? e.indexOf("!") : -1;
                        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                    }

                    function d(e) {
                        return function () {
                            return y && y.config && y.config[e] || {}
                        }
                    }
                    var h, p, f, m, g = {}, v = {}, y = {}, b = {}, T = Object.prototype.hasOwnProperty,
                        w = [].slice,
                        _ = /\.js$/;
                    f = function (e, t) {
                        var n, i = u(e),
                            o = i[0];
                        return e = i[1], o && (o = r(o, t), n = c(o)), o ? e = n && n.normalize ? n.normalize(e, a(t)) : r(e, t) : (e = r(e, t), i = u(e), o = i[0], e = i[1], o && (n = c(o))), {
                            f: o ? o + "!" + e : e,
                            n: e,
                            pr: o,
                            p: n
                        }
                    }, m = {
                        require: function (e) {
                            return s(e)
                        },
                        exports: function (e) {
                            var t = g[e];
                            return "undefined" != typeof t ? t : g[e] = {}
                        },
                        module: function (e) {
                            return {
                                id: e,
                                uri: "",
                                exports: g[e],
                                config: d(e)
                            }
                        }
                    }, h = function (e, n, i, r) {
                        var a, u, d, h, p, y, T = [],
                            w = typeof i;
                        if (r = r || e, "undefined" === w || "function" === w) {
                            for (n = !n.length && i.length ? ["require", "exports", "module"] : n, p = 0; p < n.length; p += 1) if (h = f(n[p], r), u = h.f, "require" === u) T[p] = m.require(e);
                            else if ("exports" === u) T[p] = m.exports(e), y = !0;
                            else if ("module" === u) a = T[p] = m.module(e);
                            else if (o(g, u) || o(v, u) || o(b, u)) T[p] = c(u);
                            else {
                                if (!h.p) throw new Error(e + " missing " + u);
                                h.p.load(h.n, s(r, !0), l(u), {}), T[p] = g[u]
                            }
                            d = i ? i.apply(g[e], T) : void 0, e && (a && a.exports !== t && a.exports !== g[e] ? g[e] = a.exports : d === t && y || (g[e] = d))
                        } else e && (g[e] = i)
                    }, e = n = p = function (e, n, i, o, r) {
                        if ("string" == typeof e) return m[e] ? m[e](n) : c(f(e, n).f);
                        if (!e.splice) {
                            if (y = e, y.deps && p(y.deps, y.callback), !n) return;
                            n.splice ? (e = n, n = i, i = null) : e = t
                        }
                        return n = n || function () {}, "function" == typeof i && (i = o, o = r), o ? h(t, e, n, i) : setTimeout(function () {
                            h(t, e, n, i)
                        }, 4), p
                    }, p.config = function (e) {
                        return p(e)
                    }, e._defined = g, i = function (e, t, n) {
                        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                        t.splice || (n = t, t = []), o(g, e) || o(v, e) || (v[e] = [e, t, n])
                    }, i.amd = {
                        jQuery: !0
                    }
                }(), t.requirejs = e, t.require = n, t.define = i
            }
        }(), t.define("almond", function () {}), t.define("jquery", [], function () {
            var t = e || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
        }), t.define("select2/utils", ["jquery"], function (e) {
            function t(e) {
                var t = e.prototype,
                    n = [];
                for (var i in t) {
                    var o = t[i];
                    "function" == typeof o && "constructor" !== i && n.push(i)
                }
                return n
            }
            var n = {};
            n.Extend = function (e, t) {
                function n() {
                    this.constructor = e
                }
                var i = {}.hasOwnProperty;
                for (var o in t) i.call(t, o) && (e[o] = t[o]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            }, n.Decorate = function (e, n) {
                function i() {
                    var t = Array.prototype.unshift,
                        i = n.prototype.constructor.length,
                        o = e.prototype.constructor;
                    i > 0 && (t.call(arguments, e.prototype.constructor), o = n.prototype.constructor), o.apply(this, arguments)
                }

                function o() {
                    this.constructor = i
                }
                var r = t(n),
                    s = t(e);
                n.displayName = e.displayName, i.prototype = new o;
                for (var a = 0; a < s.length; a++) {
                    var l = s[a];
                    i.prototype[l] = e.prototype[l]
                }
                for (var c = (function (e) {
                    var t = function () {};
                    e in i.prototype && (t = i.prototype[e]);
                    var o = n.prototype[e];
                    return function () {
                        var e = Array.prototype.unshift;
                        return e.call(arguments, t), o.apply(this, arguments)
                    }
                }), u = 0; u < r.length; u++) {
                    var d = r[u];
                    i.prototype[d] = c(d)
                }
                return i
            };
            var i = function () {
                this.listeners = {}
            };
            return i.prototype.on = function (e, t) {
                this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }, i.prototype.trigger = function (e) {
                var t = Array.prototype.slice;
                this.listeners = this.listeners || {}, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
            }, i.prototype.invoke = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++) e[n].apply(this, t)
            }, n.Observable = i, n.generateChars = function (e) {
                for (var t = "", n = 0; e > n; n++) {
                    var i = Math.floor(36 * Math.random());
                    t += i.toString(36)
                }
                return t
            }, n.bind = function (e, t) {
                return function () {
                    e.apply(t, arguments)
                }
            }, n._convertData = function (e) {
                for (var t in e) {
                    var n = t.split("-"),
                        i = e;
                    if (1 !== n.length) {
                        for (var o = 0; o < n.length; o++) {
                            var r = n[o];
                            r = r.substring(0, 1).toLowerCase() + r.substring(1), r in i || (i[r] = {}), o == n.length - 1 && (i[r] = e[t]), i = i[r]
                        }
                        delete e[t]
                    }
                }
                return e
            }, n.hasScroll = function (t, n) {
                var i = e(n),
                    o = n.style.overflowX,
                    r = n.style.overflowY;
                return (o !== r || "hidden" !== r && "visible" !== r) && ("scroll" === o || "scroll" === r || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
            }, n.escapeMarkup = function (e) {
                var t = {
                    "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                    return t[e]
                })
            }, n.appendMany = function (t, n) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                    var i = e();
                    e.map(n, function (e) {
                        i = i.add(e)
                    }), n = i
                }
                t.append(n)
            }, n
        }), t.define("select2/results", ["jquery", "./utils"], function (e, t) {
            function n(e, t, i) {
                this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
            }
            return t.Extend(n, t.Observable), n.prototype.render = function () {
                var t = e('<ul class="select2-results__options" role="tree"></ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
            }, n.prototype.clear = function () {
                this.$results.empty()
            }, n.prototype.displayMessage = function (t) {
                var n = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                    o = this.options.get("translations").get(t.message);
                i.append(n(o(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
            }, n.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove()
            }, n.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null == e.results || 0 === e.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                    message: "noResults"
                }));
                e.results = this.sort(e.results);
                for (var n = 0; n < e.results.length; n++) {
                    var i = e.results[n],
                        o = this.option(i);
                    t.push(o)
                }
                this.$results.append(t)
            }, n.prototype.position = function (e, t) {
                var n = t.find(".select2-results");
                n.append(e)
            }, n.prototype.sort = function (e) {
                var t = this.options.get("sorter");
                return t(e)
            }, n.prototype.setClasses = function () {
                var t = this;
                this.data.current(function (n) {
                    var i = e.map(n, function (e) {
                        return e.id.toString()
                    }),
                        o = t.$results.find(".select2-results__option[aria-selected]");
                    o.each(function () {
                        var t = e(this),
                            n = e.data(this, "data"),
                            o = "" + n.id;
                        null != n.element && n.element.selected || null == n.element && e.inArray(o, i) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                    });
                    var r = o.filter("[aria-selected=true]");
                    r.length > 0 ? r.first().trigger("mouseenter") : o.first().trigger("mouseenter")
                })
            }, n.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = this.options.get("translations").get("searching"),
                    n = {
                        disabled: !0,
                        loading: !0,
                        text: t(e)
                    }, i = this.option(n);
                i.className += " loading-results", this.$results.prepend(i)
            }, n.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove()
            }, n.prototype.option = function (t) {
                var n = document.createElement("li");
                n.className = "select2-results__option";
                var i = {
                    role: "treeitem",
                        "aria-selected": "false"
                };
                t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == t.id && delete i["aria-selected"], null != t._resultId && (n.id = t._resultId), t.title && (n.title = t.title), t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]);
                for (var o in i) {
                    var r = i[o];
                    n.setAttribute(o, r)
                }
                if (t.children) {
                    var s = e(n),
                        a = document.createElement("strong");
                    a.className = "select2-results__group", e(a), this.template(t, a);
                    for (var l = [], c = 0; c < t.children.length; c++) {
                        var u = t.children[c],
                            d = this.option(u);
                        l.push(d)
                    }
                    var h = e("<ul></ul>", {
                        "class": "select2-results__options select2-results__options--nested"
                    });
                    h.append(l), s.append(a), s.append(h)
                } else this.template(t, n);
                return e.data(n, "data", t), n
            }, n.prototype.bind = function (t, n) {
                var i = this,
                    o = t.id + "-results";
                this.$results.attr("id", o), t.on("results:all", function (e) {
                    i.clear(), i.append(e.data), t.isOpen() && i.setClasses()
                }), t.on("results:append", function (e) {
                    i.append(e.data), t.isOpen() && i.setClasses()
                }), t.on("query", function (e) {
                    i.hideMessages(), i.showLoading(e)
                }), t.on("select", function () {
                    t.isOpen() && i.setClasses()
                }), t.on("unselect", function () {
                    t.isOpen() && i.setClasses()
                }), t.on("open", function () {
                    i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
                }), t.on("close", function () {
                    i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
                }), t.on("results:toggle", function () {
                    var e = i.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }), t.on("results:select", function () {
                    var e = i.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = e.data("data");
                        "true" == e.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                            data: t
                        })
                    }
                }), t.on("results:previous", function () {
                    var e = i.getHighlightedResults(),
                        t = i.$results.find("[aria-selected]"),
                        n = t.index(e);
                    if (0 !== n) {
                        var o = n - 1;
                        0 === e.length && (o = 0);
                        var r = t.eq(o);
                        r.trigger("mouseenter");
                        var s = i.$results.offset().top,
                            a = r.offset().top,
                            l = i.$results.scrollTop() + (a - s);
                        0 === o ? i.$results.scrollTop(0) : 0 > a - s && i.$results.scrollTop(l)
                    }
                }), t.on("results:next", function () {
                    var e = i.getHighlightedResults(),
                        t = i.$results.find("[aria-selected]"),
                        n = t.index(e),
                        o = n + 1;
                    if (!(o >= t.length)) {
                        var r = t.eq(o);
                        r.trigger("mouseenter");
                        var s = i.$results.offset().top + i.$results.outerHeight(!1),
                            a = r.offset().top + r.outerHeight(!1),
                            l = i.$results.scrollTop() + a - s;
                        0 === o ? i.$results.scrollTop(0) : a > s && i.$results.scrollTop(l)
                    }
                }), t.on("results:focus", function (e) {
                    e.element.addClass("select2-results__option--highlighted")
                }), t.on("results:message", function (e) {
                    i.displayMessage(e)
                }), e.fn.mousewheel && this.$results.on("mousewheel", function (e) {
                    var t = i.$results.scrollTop(),
                        n = i.$results.get(0).scrollHeight - i.$results.scrollTop() + e.deltaY,
                        o = e.deltaY > 0 && t - e.deltaY <= 0,
                        r = e.deltaY < 0 && n <= i.$results.height();
                    o ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation())
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (t) {
                    var n = e(this),
                        o = n.data("data");
                    return "true" === n.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
                        originalEvent: t,
                        data: o
                    }) : i.trigger("close", {})) : void i.trigger("select", {
                        originalEvent: t,
                        data: o
                    })
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (t) {
                    var n = e(this).data("data");
                    i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                        data: n,
                        element: e(this)
                    })
                })
            }, n.prototype.getHighlightedResults = function () {
                var e = this.$results.find(".select2-results__option--highlighted");
                return e
            }, n.prototype.destroy = function () {
                this.$results.remove()
            }, n.prototype.ensureHighlightVisible = function () {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]"),
                        n = t.index(e),
                        i = this.$results.offset().top,
                        o = e.offset().top,
                        r = this.$results.scrollTop() + (o - i),
                        s = o - i;
                    r -= 2 * e.outerHeight(!1), 2 >= n ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || 0 > s) && this.$results.scrollTop(r)
                }
            }, n.prototype.template = function (t, n) {
                var i = this.options.get("templateResult"),
                    o = this.options.get("escapeMarkup"),
                    r = i(t, n);
                null == r ? n.style.display = "none" : "string" == typeof r ? n.innerHTML = o(r) : e(n).append(r)
            }, n
        }), t.define("select2/keys", [], function () {
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
        }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, n) {
            function i(e, t) {
                this.$element = e, this.options = t, i.__super__.constructor.call(this)
            }
            return t.Extend(i, t.Observable), i.prototype.render = function () {
                var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
            }, i.prototype.bind = function (e, t) {
                var i = this,
                    o = (e.id + "-container", e.id + "-results");
                this.container = e, this.$selection.on("focus", function (e) {
                    i.trigger("focus", e)
                }), this.$selection.on("blur", function (e) {
                    i._handleBlur(e)
                }), this.$selection.on("keydown", function (e) {
                    i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                }), e.on("results:focus", function (e) {
                    i.$selection.attr("aria-activedescendant", e.data._resultId)
                }), e.on("selection:update", function (e) {
                    i.update(e.data)
                }), e.on("open", function () {
                    i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", o), i._attachCloseHandler(e)
                }), e.on("close", function () {
                    i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(e)
                }), e.on("enable", function () {
                    i.$selection.attr("tabindex", i._tabindex)
                }), e.on("disable", function () {
                    i.$selection.attr("tabindex", "-1")
                })
            }, i.prototype._handleBlur = function (t) {
                var n = this;
                window.setTimeout(function () {
                    document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                }, 1)
            }, i.prototype._attachCloseHandler = function (t) {
                e(document.body).on("mousedown.select2." + t.id, function (t) {
                    var n = e(t.target),
                        i = n.closest(".select2"),
                        o = e(".select2.select2-container--open");
                    o.each(function () {
                        var t = e(this);
                        if (this != i[0]) {
                            var n = t.data("element");
                            n.select2("close")
                        }
                    })
                })
            }, i.prototype._detachCloseHandler = function (t) {
                e(document.body).off("mousedown.select2." + t.id)
            }, i.prototype.position = function (e, t) {
                var n = t.find(".selection");
                n.append(e)
            }, i.prototype.destroy = function () {
                this._detachCloseHandler(this.container)
            }, i.prototype.update = function (e) {
                throw new Error("The `update` method must be defined in child classes.")
            }, i
        }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
            function o() {
                o.__super__.constructor.apply(this, arguments)
            }
            return n.Extend(o, t), o.prototype.render = function () {
                var e = o.__super__.render.call(this);
                return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
            }, o.prototype.bind = function (e, t) {
                var n = this;
                o.__super__.bind.apply(this, arguments);
                var i = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e) {
                    1 === e.which && n.trigger("toggle", {
                        originalEvent: e
                    })
                }), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), e.on("selection:update", function (e) {
                    n.update(e.data)
                })
            }, o.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, o.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection"),
                    i = this.options.get("escapeMarkup");
                return i(n(e, t))
            }, o.prototype.selectionContainer = function () {
                return e("<span></span>")
            }, o.prototype.update = function (e) {
                if (0 === e.length) return void this.clear();
                var t = e[0],
                    n = this.$selection.find(".select2-selection__rendered"),
                    i = this.display(t, n);
                n.empty().append(i), n.prop("title", t.title || t.text)
            }, o
        }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, n) {
            function i(e, t) {
                i.__super__.constructor.apply(this, arguments)
            }
            return n.Extend(i, t), i.prototype.render = function () {
                var e = i.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
            }, i.prototype.bind = function (t, n) {
                var o = this;
                i.__super__.bind.apply(this, arguments), this.$selection.on("mousedown", function (e) {
                    o.trigger("toggle", {
                        originalEvent: e
                    })
                }), this.$selection.on("mousedown", ".select2-selection__choice__remove", function (t) {
                    if (!o.options.get("disabled")) {
                        var n = e(this),
                            i = n.parent(),
                            r = i.data("data");
                        o.trigger("unselect", {
                            originalEvent: t,
                            data: r
                        })
                    }
                })
            }, i.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty()
            }, i.prototype.display = function (e, t) {
                var n = this.options.get("templateSelection"),
                    i = this.options.get("escapeMarkup");
                return i(n(e, t))
            }, i.prototype.selectionContainer = function () {
                var t = e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                return t
            }, i.prototype.update = function (e) {
                if (this.clear(), 0 !== e.length) {
                    for (var t = [], i = 0; i < e.length; i++) {
                        var o = e[i],
                            r = this.selectionContainer(),
                            s = this.display(o, r);
                        r.append(s), r.prop("title", o.title || o.text), r.data("data", o), t.push(r)
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    n.appendMany(a, t)
                }
            }, i
        }), t.define("select2/selection/placeholder", ["../utils"], function (e) {
            function t(e, t, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
            }
            return t.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }), t
            }, t.prototype.createPlaceholder = function (e, t) {
                var n = this.selectionContainer();
                return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
            }, t.prototype.update = function (e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id,
                    i = t.length > 1;
                if (i || n) return e.call(this, t);
                this.clear();
                var o = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(o)
            }, t
        }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function (e, t) {
            function n() {}
            return n.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                    i._handleClear(e)
                }), t.on("keypress", function (e) {
                    i._handleKeyboardClear(e, t)
                })
            }, n.prototype._handleClear = function (e, t) {
                if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                        t.stopPropagation();
                        for (var i = n.data("data"), o = 0; o < i.length; o++) {
                            var r = {
                                data: i[o]
                            };
                            if (this.trigger("unselect", r), r.prevented) return
                        }
                        this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                    }
                }
            }, n.prototype._handleKeyboardClear = function (e, n, i) {
                i.isOpen() || (n.which == t.DELETE || n.which == t.BACKSPACE) && this._handleClear(n)
            }, n.prototype.update = function (t, n) {
                if (t.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                    var i = e('<span class="select2-selection__clear">&times;</span>');
                    i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                }
            }, n
        }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, n) {
            function i(e, t, n) {
                e.call(this, t, n)
            }
            return i.prototype.render = function (t) {
                var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = n, this.$search = n.find("input");
                var i = t.call(this);
                return this._transferTabIndex(), i
            }, i.prototype.bind = function (e, t, i) {
                var o = this;
                e.call(this, t, i), t.on("open", function () {
                    o.$search.trigger("focus")
                }), t.on("close", function () {
                    o.$search.val(""), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus")
                }), t.on("enable", function () {
                    o.$search.prop("disabled", !1), o._transferTabIndex()
                }), t.on("disable", function () {
                    o.$search.prop("disabled", !0)
                }), t.on("focus", function (e) {
                    o.$search.trigger("focus")
                }), t.on("results:focus", function (e) {
                    o.$search.attr("aria-activedescendant", e.id)
                }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
                    o.trigger("focus", e)
                }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
                    o._handleBlur(e)
                }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
                    e.stopPropagation(), o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented();
                    var t = e.which;
                    if (t === n.BACKSPACE && "" === o.$search.val()) {
                        var i = o.$searchContainer.prev(".select2-selection__choice");
                        if (i.length > 0) {
                            var r = i.data("data");
                            o.searchRemoveChoice(r), e.preventDefault()
                        }
                    }
                });
				
				
				
				
                var r = document.documentMode,
                    s = r && 11 >= r;
                this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
                    return s ? void o.$selection.off("input.search input.searchcheck") : void o.$selection.off("keyup.search")
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                    if (s && "input" === e.type) return void o.$selection.off("input.search input.searchcheck");
                    var t = e.which;
                    t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e)
                })
            }, i.prototype._transferTabIndex = function (e) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
            }, i.prototype.createPlaceholder = function (e, t) {
                this.$search.attr("placeholder", t.text)
            }, i.prototype.update = function (e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
            }, i.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {
                        term: e
                    })
                }
                this._keyUpPrevented = !1
            }, i.prototype.searchRemoveChoice = function (e, t) {
                this.trigger("unselect", {
                    data: t
                }), this.$search.val(t.text), this.handleSearch()
            }, i.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var e = "";
                if ("" !== this.$search.attr("placeholder")) e = this.$selection.find(".select2-selection__rendered").innerWidth();
                else {
                    var t = this.$search.val().length + 1;
                    e = .75 * t + "em"
                }
                this.$search.css("width", e)
            }, i
        }), t.define("select2/selection/eventRelay", ["jquery"], function (e) {
            function t() {}
            return t.prototype.bind = function (t, n, i) {
                var o = this,
                    r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                    s = ["opening", "closing", "selecting", "unselecting"];
                t.call(this, n, i), n.on("*", function (t, n) {
                    if (-1 !== e.inArray(t, r)) {
                        n = n || {};
                        var i = e.Event("select2:" + t, {
                            params: n
                        });
                        o.$element.trigger(i), -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented())
                    }
                })
            }, t
        }), t.define("select2/translation", ["jquery", "require"], function (e, t) {
            function n(e) {
                this.dict = e || {}
            }
            return n.prototype.all = function () {
                return this.dict
            }, n.prototype.get = function (e) {
                return this.dict[e]
            }, n.prototype.extend = function (t) {
                this.dict = e.extend({}, t.all(), this.dict)
            }, n._cache = {}, n.loadPath = function (e) {
                if (!(e in n._cache)) {
                    var i = t(e);
                    n._cache[e] = i
                }
                return new n(n._cache[e])
            }, n
        }), t.define("select2/diacritics", [], function () {
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
        }), t.define("select2/data/base", ["../utils"], function (e) {
            function t(e, n) {
                t.__super__.constructor.call(this)
            }
            return e.Extend(t, e.Observable), t.prototype.current = function (e) {
                throw new Error("The `current` method must be defined in child classes.")
            }, t.prototype.query = function (e, t) {
                throw new Error("The `query` method must be defined in child classes.")
            }, t.prototype.bind = function (e, t) {}, t.prototype.destroy = function () {}, t.prototype.generateResultId = function (t, n) {
                var i = t.id + "-result-";
                return i += e.generateChars(4), i += null != n.id ? "-" + n.id.toString() : "-" + e.generateChars(4)
            }, t
        }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, n) {
            function i(e, t) {
                this.$element = e, this.options = t, i.__super__.constructor.call(this)
            }
            return t.Extend(i, e), i.prototype.current = function (e) {
                var t = [],
                    i = this;
                this.$element.find(":selected").each(function () {
                    var e = n(this),
                        o = i.item(e);
                    t.push(o)
                }), e(t)
            }, i.prototype.select = function (e) {
                var t = this;
                if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function (i) {
                    var o = [];
                    e = [e], e.push.apply(e, i);
                    for (var r = 0; r < e.length; r++) {
                        var s = e[r].id; - 1 === n.inArray(s, o) && o.push(s)
                    }
                    t.$element.val(o), t.$element.trigger("change")
                });
                else {
                    var i = e.id;
                    this.$element.val(i), this.$element.trigger("change")
                }
            }, i.prototype.unselect = function (e) {
                var t = this;
                if (this.$element.prop("multiple")) return e.selected = !1, n(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (i) {
                    for (var o = [], r = 0; r < i.length; r++) {
                        var s = i[r].id;
                        s !== e.id && -1 === n.inArray(s, o) && o.push(s)
                    }
                    t.$element.val(o), t.$element.trigger("change")
                })
            }, i.prototype.bind = function (e, t) {
                var n = this;
                this.container = e, e.on("select", function (e) {
                    n.select(e.data)
                }), e.on("unselect", function (e) {
                    n.unselect(e.data)
                })
            }, i.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    n.removeData(this, "data")
                })
            }, i.prototype.query = function (e, t) {
                var i = [],
                    o = this,
                    r = this.$element.children();
                r.each(function () {
                    var t = n(this);
                    if (t.is("option") || t.is("optgroup")) {
                        var r = o.item(t),
                            s = o.matches(e, r);
                        null !== s && i.push(s)
                    }
                }), t({
                    results: i
                })
            }, i.prototype.addOptions = function (e) {
                t.appendMany(this.$element, e)
            }, i.prototype.option = function (e) {
                var t;
                e.children ? (t = document.createElement("optgroup"), t.label = e.text) : (t = document.createElement("option"), void 0 !== t.textContent ? t.textContent = e.text : t.innerText = e.text), e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                var i = n(t),
                    o = this._normalizeItem(e);
                return o.element = t, n.data(t, "data", o), i
            }, i.prototype.item = function (e) {
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
                    for (var i = e.children("option"), o = [], r = 0; r < i.length; r++) {
                        var s = n(i[r]),
                            a = this.item(s);
                        o.push(a)
                    }
                    t.children = o
                }
                return t = this._normalizeItem(t), t.element = e[0], n.data(e[0], "data", t), t
            }, i.prototype._normalizeItem = function (e) {
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
            }, i.prototype.matches = function (e, t) {
                var n = this.options.get("matcher");
                return n(e, t)
            }, i
        }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, n) {
            function i(e, t) {
                var n = t.get("data") || [];
                i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
            }
            return t.Extend(i, e), i.prototype.select = function (e) {
                var t = this.$element.find("option").filter(function (t, n) {
                    return n.value == e.id.toString()
                });
                0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
            }, i.prototype.convertToOptions = function (e) {
                function i(e) {
                    return function () {
                        return n(this).val() == e.id
                    }
                }
                for (var o = this, r = this.$element.find("option"), s = r.map(function () {
                    return o.item(n(this)).id
                }).get(), a = [], l = 0; l < e.length; l++) {
                    var c = this._normalizeItem(e[l]);
                    if (n.inArray(c.id, s) >= 0) {
                        var u = r.filter(i(c)),
                            d = this.item(u),
                            h = n.extend(!0, {}, d, c),
                            p = this.option(h);
                        u.replaceWith(p)
                    } else {
                        var f = this.option(c);
                        if (c.children) {
                            var m = this.convertToOptions(c.children);
                            t.appendMany(f, m)
                        }
                        a.push(f)
                    }
                }
                return a
            }, i
        }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, n) {
            function i(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
            }
            return t.Extend(i, e), i.prototype._applyDefaults = function (e) {
                var t = {
                    data: function (e) {
                        return n.extend({}, e, {
                            q: e.term
                        })
                    },
                    transport: function (e, t, i) {
                        var o = n.ajax(e);
                        return o.then(t), o.fail(i), o
                    }
                };
                return n.extend({}, t, e, !0)
            }, i.prototype.processResults = function (e) {
                return e
            }, i.prototype.query = function (e, t) {
                function i() {
                    var i = r.transport(r, function (i) {
                        var r = o.processResults(i, e);
                        o.options.get("debug") && window.console && console.error && (r && r.results && n.isArray(r.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(r)
                    }, function () {});
                    o._request = i
                }
                var o = this;
                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                var r = n.extend({
                    type: "GET"
                }, this.ajaxOptions);
                "function" == typeof r.url && (r.url = r.url.call(this.$element, e)), "function" == typeof r.data && (r.data = r.data.call(this.$element, e)), this.ajaxOptions.delay && "" !== e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
            }, i
        }), t.define("select2/data/tags", ["jquery"], function (e) {
            function t(t, n, i) {
                var o = i.get("tags"),
                    r = i.get("createTag");
                if (void 0 !== r && (this.createTag = r), t.call(this, n, i), e.isArray(o)) for (var s = 0; s < o.length; s++) {
                    var a = o[s],
                        l = this._normalizeItem(a),
                        c = this.option(l);
                    this.$element.append(c)
                }
            }
            return t.prototype.query = function (e, t, n) {
                function i(e, r) {
                    for (var s = e.results, a = 0; a < s.length; a++) {
                        var l = s[a],
                            c = null != l.children && !i({
                                results: l.children
                            }, !0),
                            u = l.text === t.term;
                        if (u || c) return !r && (e.data = s, void n(e))
                    }
                    if (r) return !0;
                    var d = o.createTag(t);
                    if (null != d) {
                        var h = o.option(d);
                        h.attr("data-select2-tag", !0), o.addOptions([h]), o.insertTag(s, d)
                    }
                    e.results = s, n(e)
                }
                var o = this;
                return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, n) : void e.call(this, t, i)
            }, t.prototype.createTag = function (t, n) {
                var i = e.trim(n.term);
                return "" === i ? null : {
                    id: i,
                    text: i
                }
            }, t.prototype.insertTag = function (e, t, n) {
                t.unshift(n)
            }, t.prototype._removeOldTags = function (t) {
                var n = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                n.each(function () {
                    this.selected || e(this).remove()
                })
            }, t
        }), t.define("select2/data/tokenizer", ["jquery"], function (e) {
            function t(e, t, n) {
                var i = n.get("tokenizer");
                void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
            }
            return t.prototype.bind = function (e, t, n) {
                e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
            }, t.prototype.query = function (e, t, n) {
                function i(e) {
                    o.trigger("select", {
                        data: e
                    })
                }
                var o = this;
                t.term = t.term || "";
                var r = this.tokenizer(t, this.options, i);
                r.term !== t.term && (this.$search.length && (this.$search.val(r.term), this.$search.focus()), t.term = r.term), e.call(this, t, n)
            }, t.prototype.tokenizer = function (t, n, i, o) {
                for (var r = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function (e) {
                        return {
                            id: e.term,
                            text: e.term
                        }
                    }; a < s.length;) {
                    var c = s[a];
                    if (-1 !== e.inArray(c, r)) {
                        var u = s.substr(0, a),
                            d = e.extend({}, n, {
                                term: u
                            }),
                            h = l(d);
                        null != h ? (o(h), s = s.substr(a + 1) || "", a = 0) : a++
                    } else a++
                }
                return {
                    term: s
                }
            }, t
        }), t.define("select2/data/minimumInputLength", [], function () {
            function e(e, t, n) {
                this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
            }
            return e.prototype.query = function (e, t, n) {
                return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : void e.call(this, t, n)
            }, e
        }), t.define("select2/data/maximumInputLength", [], function () {
            function e(e, t, n) {
                this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
            }
            return e.prototype.query = function (e, t, n) {
                return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : void e.call(this, t, n)
            }, e
        }), t.define("select2/data/maximumSelectionLength", [], function () {
            function e(e, t, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
            }
            return e.prototype.query = function (e, t, n) {
                var i = this;
                this.current(function (o) {
                    var r = null != o ? o.length : 0;
                    return i.maximumSelectionLength > 0 && r >= i.maximumSelectionLength ? void i.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: i.maximumSelectionLength
                        }
                    }) : void e.call(i, t, n)
                })
            }, e
        }), t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
            function n(e, t) {
                this.$element = e, this.options = t, n.__super__.constructor.call(this)
            }
            return t.Extend(n, t.Observable), n.prototype.render = function () {
                var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
            }, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function () {
                this.$dropdown.remove()
            }, n
        }), t.define("select2/dropdown/search", ["jquery", "../utils"], function (e, t) {
            function n() {}
            return n.prototype.render = function (t) {
                var n = t.call(this),
                    i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
            }, n.prototype.bind = function (t, n, i) {
                var o = this;
                t.call(this, n, i), this.$search.on("keydown", function (e) {
                    o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented()
                }), this.$search.on("input", function (t) {
                    e(this).off("keyup")
                }), this.$search.on("keyup input", function (e) {
                    o.handleSearch(e)
                }), n.on("open", function () {
                    o.$search.attr("tabindex", 0), o.$search.focus(), window.setTimeout(function () {
                        o.$search.focus()
                    }, 0)
                }), n.on("close", function () {
                    o.$search.attr("tabindex", -1), o.$search.val("")
                }), n.on("results:all", function (e) {
                    if (null == e.query.term || "" === e.query.term) {
                        var t = o.showSearch(e);
                        t ? o.$searchContainer.removeClass("select2-search--hide") : o.$searchContainer.addClass("select2-search--hide")
                    }
                })
            }, n.prototype.handleSearch = function (e) {
                if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {
                        term: t
                    })
                }
                this._keyUpPrevented = !1
            }, n.prototype.showSearch = function (e, t) {
                return !0
            }, n
        }), t.define("select2/dropdown/hidePlaceholder", [], function () {
            function e(e, t, n, i) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
            }
            return e.prototype.append = function (e, t) {
                t.results = this.removePlaceholder(t.results), e.call(this, t)
            }, e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }), t
            }, e.prototype.removePlaceholder = function (e, t) {
                for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                    var o = t[i];
                    this.placeholder.id === o.id && n.splice(i, 1)
                }
                return n
            }, e
        }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
            function t(e, t, n, i) {
                this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
            }
            return t.prototype.append = function (e, t) {
                this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
            }, t.prototype.bind = function (t, n, i) {
                var o = this;
                t.call(this, n, i), n.on("query", function (e) {
                    o.lastParams = e, o.loading = !0
                }), n.on("query:append", function (e) {
                    o.lastParams = e, o.loading = !0
                }), this.$results.on("scroll", function () {
                    var t = e.contains(document.documentElement, o.$loadingMore[0]);
                    if (!o.loading && t) {
                        var n = o.$results.offset().top + o.$results.outerHeight(!1),
                            i = o.$loadingMore.offset().top + o.$loadingMore.outerHeight(!1);
                        n + 50 >= i && o.loadMore()
                    }
                })
            }, t.prototype.loadMore = function () {
                this.loading = !0;
                var t = e.extend({}, {
                    page: 1
                }, this.lastParams);
                t.page++, this.trigger("query:append", t)
            }, t.prototype.showLoadingMore = function (e, t) {
                return t.pagination && t.pagination.more
            }, t.prototype.createLoadingMore = function () {
                var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                    n = this.options.get("translations").get("loadingMore");
                return t.html(n(this.lastParams)), t
            }, t
        }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t) {
            function n(t, n, i) {
                this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, n, i)
            }
            return n.prototype.bind = function (e, t, n) {
                var i = this,
                    o = !1;
                e.call(this, t, n), t.on("open", function () {
                    i._showDropdown(), i._attachPositioningHandler(t), o || (o = !0, t.on("results:all", function () {
                        i._positionDropdown(), i._resizeDropdown()
                    }), t.on("results:append", function () {
                        i._positionDropdown(), i._resizeDropdown()
                    }))
                }), t.on("close", function () {
                    i._hideDropdown(), i._detachPositioningHandler(t)
                }), this.$dropdownContainer.on("mousedown", function (e) {
                    e.stopPropagation()
                })
            }, n.prototype.destroy = function (e) {
                e.call(this), this.$dropdownContainer.remove()
            }, n.prototype.position = function (e, t, n) {
                t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                    position: "absolute",
                    top: -999999
                }), this.$container = n
            }, n.prototype.render = function (t) {
                var n = e("<span></span>"),
                    i = t.call(this);
                return n.append(i), this.$dropdownContainer = n, n
            }, n.prototype._hideDropdown = function (e) {
                this.$dropdownContainer.detach()
            }, n.prototype._attachPositioningHandler = function (n, i) {
                var o = this,
                    r = "scroll.select2." + i.id,
                    s = "resize.select2." + i.id,
                    a = "orientationchange.select2." + i.id,
                    l = this.$container.parents().filter(t.hasScroll);
                l.each(function () {
                    e(this).data("select2-scroll-position", {
                        x: e(this).scrollLeft(),
                        y: e(this).scrollTop()
                    })
                }), l.on(r, function (t) {
                    var n = e(this).data("select2-scroll-position");
                    e(this).scrollTop(n.y)
                }), e(window).on(r + " " + s + " " + a, function (e) {
                    o._positionDropdown(), o._resizeDropdown()
                })
            }, n.prototype._detachPositioningHandler = function (n, i) {
                var o = "scroll.select2." + i.id,
                    r = "resize.select2." + i.id,
                    s = "orientationchange.select2." + i.id,
                    a = this.$container.parents().filter(t.hasScroll);
                a.off(o), e(window).off(o + " " + r + " " + s)
            }, n.prototype._positionDropdown = function () {
                var t = e(window),
                    n = this.$dropdown.hasClass("select2-dropdown--above"),
                    i = this.$dropdown.hasClass("select2-dropdown--below"),
                    o = null,
                    r = (this.$container.position(), this.$container.offset());
                r.bottom = r.top + this.$container.outerHeight(!1);
                var s = {
                    height: this.$container.outerHeight(!1)
                };
                s.top = r.top, s.bottom = r.top + s.height;
                var a = {
                    height: this.$dropdown.outerHeight(!1)
                }, l = {
                    top: t.scrollTop(),
                    bottom: t.scrollTop() + t.height()
                }, c = l.top < r.top - a.height,
                    u = l.bottom > r.bottom + a.height,
                    d = {
                        left: r.left,
                        top: s.bottom
                    };
                if ("static" !== this.$dropdownParent[0].style.position) {
                    var h = this.$dropdownParent.offset();
                    d.top -= h.top, d.left -= h.left
                }
                n || i || (o = "below"), u || !c || n ? !c && u && n && (o = "below") : o = "above", ("above" == o || n && "below" !== o) && (d.top = s.top - a.height), null != o && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + o), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + o)), this.$dropdownContainer.css(d)
            }, n.prototype._resizeDropdown = function () {
                var e = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.width = "auto"), this.$dropdown.css(e)
            }, n.prototype._showDropdown = function (e) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
            }, n
        }), t.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(t) {
                for (var n = 0, i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.children ? n += e(o.children) : n++
                }
                return n
            }

            function t(e, t, n, i) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
            }
            return t.prototype.showSearch = function (t, n) {
                return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n)
            }, t
        }), t.define("select2/dropdown/selectOnClose", [], function () {
            function e() {}
            return e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("close", function () {
                    i._handleSelectOnClose()
                })
            }, e.prototype._handleSelectOnClose = function () {
                var e = this.getHighlightedResults();
                if (!(e.length < 1)) {
                    var t = e.data("data");
                    null != t.element && t.element.selected || null == t.element && t.selected || this.trigger("select", {
                        data: t
                    })
                }
            }, e
        }), t.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {}
            return e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n), t.on("select", function (e) {
                    i._selectTriggered(e)
                }), t.on("unselect", function (e) {
                    i._selectTriggered(e)
                })
            }, e.prototype._selectTriggered = function (e, t) {
                var n = t.originalEvent;
                n && n.ctrlKey || this.trigger("close", {})
            }, e
        }), t.define("select2/i18n/en", [], function () {
            return {
                errorLoading: function () {
                    return "The results could not be loaded."
                },
                inputTooLong: function (e) {
                    var t = e.input.length - e.maximum,
                        n = "Please delete " + t + " character";
                    return 1 != t && (n += "s"), n
                },
                inputTooShort: function (e) {
                    var t = e.minimum - e.input.length,
                        n = "Please enter " + t + " or more characters";
                    return n
                },
                loadingMore: function () {
                    return "Loading more results…"
                },
                maximumSelected: function (e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"), t
                },
                noResults: function () {
                    return "No results found"
                },
                searching: function () {
                    return "Searching…"
                }
            }
        }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (e, t, n, i, o, r, s, a, l, c, u, d, h, p, f, m, g, v, y, b, T, w, _, S, C, x, A, P, E) {
            function M() {
                this.reset()
            }
            M.prototype.apply = function (d) {
                if (d = e.extend({}, this.defaults, d), null == d.dataAdapter) {
                    if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = p : d.dataAdapter = h, d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, v)), d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, b)), d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, m)), (null != d.tokenSeparators || null != d.tokenizer) && (d.dataAdapter = c.Decorate(d.dataAdapter, g)), null != d.query) {
                        var E = t(d.amdBase + "compat/query");
                        d.dataAdapter = c.Decorate(d.dataAdapter, E)
                    }
                    if (null != d.initSelection) {
                        var M = t(d.amdBase + "compat/initSelection");
                        d.dataAdapter = c.Decorate(d.dataAdapter, M)
                    }
                }
                if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, S)), null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, _)), d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, A))), null == d.dropdownAdapter) {
                    if (d.multiple) d.dropdownAdapter = T;
                    else {
                        var $ = c.Decorate(T, w);
                        d.dropdownAdapter = $
                    }
                    if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, x)), d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, P)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                        var I = t(d.amdBase + "compat/dropdownCss");
                        d.dropdownAdapter = c.Decorate(d.dropdownAdapter, I)
                    }
                    d.dropdownAdapter = c.Decorate(d.dropdownAdapter, C)
                }
                if (null == d.selectionAdapter) {
                    if (d.multiple ? d.selectionAdapter = o : d.selectionAdapter = i, null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, r)), d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)), d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                        var k = t(d.amdBase + "compat/containerCss");
                        d.selectionAdapter = c.Decorate(d.selectionAdapter, k)
                    }
                    d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                }
                if ("string" == typeof d.language) if (d.language.indexOf("-") > 0) {
                    var D = d.language.split("-"),
                        H = D[0];
                    d.language = [d.language, H]
                } else d.language = [d.language];
                if (e.isArray(d.language)) {
                    var G = new u;
                    d.language.push("en");
                    for (var B = d.language, O = 0; O < B.length; O++) {
                        var N = B[O],
                            L = {};
                        try {
                            L = u.loadPath(N)
                        } catch (j) {
                            try {
                                N = this.defaults.amdLanguageBase + N, L = u.loadPath(N)
                            } catch (R) {
                                d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + N + '" could not be automatically loaded. A fallback will be used instead.');
                                continue
                            }
                        }
                        G.extend(L)
                    }
                    d.translations = G
                } else {
                    var F = u.loadPath(this.defaults.amdLanguageBase + "en"),
                        W = new u(d.language);
                    W.extend(F), d.translations = W
                }
                return d
            }, M.prototype.reset = function () {
                function t(e) {
                    function t(e) {
                        return d[e] || e
                    }
                    return e.replace(/[^\u0000-\u007E]/g, t)
                }

                function n(i, o) {
                    if ("" === e.trim(i.term)) return o;
                    if (o.children && o.children.length > 0) {
                        for (var r = e.extend(!0, {}, o), s = o.children.length - 1; s >= 0; s--) {
                            var a = o.children[s],
                                l = n(i, a);
                            null == l && r.children.splice(s, 1)
                        }
                        return r.children.length > 0 ? r : n(i, r)
                    }
                    var c = t(o.text).toUpperCase(),
                        u = t(i.term).toUpperCase();
                    return c.indexOf(u) > -1 ? o : null
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: E,
                    matcher: n,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (e) {
                        return e
                    },
                    templateResult: function (e) {
                        return e.text
                    },
                    templateSelection: function (e) {
                        return e.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }, M.prototype.set = function (t, n) {
                var i = e.camelCase(t),
                    o = {};
                o[i] = n;
                var r = c._convertData(o);
                e.extend(this.defaults, r)
            };
            var $ = new M;
            return $
        }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, n, i) {
            function o(t, o) {
                if (this.options = t, null != o && this.fromElement(o), this.options = n.apply(this.options), o && o.is("input")) {
                    var r = e(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = i.Decorate(this.options.dataAdapter, r)
                }
            }
            return o.prototype.fromElement = function (e) {
                var n = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                var o = {};
                o = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                var r = t.extend(!0, {}, o);
                r = i._convertData(r);
                for (var s in r) t.inArray(s, n) > -1 || (t.isPlainObject(this.options[s]) ? t.extend(this.options[s], r[s]) : this.options[s] = r[s]);
                return this
            }, o.prototype.get = function (e) {
                return this.options[e]
            }, o.prototype.set = function (e, t) {
                this.options[e] = t
            }, o
        }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, n, i) {
            var o = function (e, n) {
                null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), n = n || {}, this.options = new t(n, e), o.__super__.constructor.call(this);
                var i = e.attr("tabindex") || 0;
                e.data("old-tabindex", i), e.attr("tabindex", "-1");
                var r = this.options.get("dataAdapter");
                this.dataAdapter = new r(e, this.options);
                var s = this.render();
                this._placeContainer(s);
                var a = this.options.get("selectionAdapter");
                this.selection = new a(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
                var l = this.options.get("dropdownAdapter");
                this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
                var c = this.options.get("resultsAdapter");
                this.results = new c(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                var u = this;
                this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
                    u.trigger("selection:update", {
                        data: e
                    })
                }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
            };
            return n.Extend(o, n.Observable), o.prototype._generateId = function (e) {
                var t = "";
                return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), t = "select2-" + t
            }, o.prototype._placeContainer = function (e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }, o.prototype._resolveWidth = function (e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var i = this._resolveWidth(e, "style");
                    return null != i ? i : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var o = e.outerWidth(!1);
                    return 0 >= o ? "auto" : o + "px"
                }
                if ("style" == t) {
                    var r = e.attr("style");
                    if ("string" != typeof r) return null;
                    for (var s = r.split(";"), a = 0, l = s.length; l > a; a += 1) {
                        var c = s[a].replace(/\s/g, ""),
                            u = c.match(n);
                        if (null !== u && u.length >= 1) return u[1]
                    }
                    return null
                }
                return t
            }, o.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
            }, o.prototype._registerDomEvents = function () {
                var t = this;
                this.$element.on("change.select2", function () {
                    t.dataAdapter.current(function (e) {
                        t.trigger("selection:update", {
                            data: e
                        })
                    })
                }), this._sync = n.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != i ? (this._observer = new i(function (n) {
                    e.each(n, t._sync)
                }), this._observer.observe(this.$element[0], {
                    attributes: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", t._sync, !1)
            }, o.prototype._registerDataEvents = function () {
                var e = this;

                this.dataAdapter.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, o.prototype._registerSelectionEvents = function () {
                var t = this,
                    n = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                    t.toggleDropdown()
                }), this.selection.on("focus", function (e) {
                    t.focus(e)
                }), this.selection.on("*", function (i, o) {
                    -1 === e.inArray(i, n) && t.trigger(i, o)
                })
            }, o.prototype._registerDropdownEvents = function () {
                var e = this;
                this.dropdown.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, o.prototype._registerResultsEvents = function () {
                var e = this;
                this.results.on("*", function (t, n) {
                    e.trigger(t, n)
                })
            }, o.prototype._registerEvents = function () {
                var e = this;
                this.on("open", function () {
                    e.$container.addClass("select2-container--open")
                }), this.on("close", function () {
                    e.$container.removeClass("select2-container--open")
                }), this.on("enable", function () {
                    e.$container.removeClass("select2-container--disabled")
                }), this.on("disable", function () {
                    e.$container.addClass("select2-container--disabled")
                }), this.on("blur", function () {
                    e.$container.removeClass("select2-container--focus")
                }), this.on("query", function (t) {
                    e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function (n) {
                        e.trigger("results:all", {
                            data: n,
                            query: t
                        })
                    })
                }), this.on("query:append", function (t) {
                    this.dataAdapter.query(t, function (n) {
                        e.trigger("results:append", {
                            data: n,
                            query: t
                        })
                    })
                }), this.on("keypress", function (t) {
                    var n = t.which;
                    e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                })
            }, o.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
            }, o.prototype.trigger = function (e, t) {
                var n = o.__super__.trigger,
                    i = {
                        open: "opening",
                        close: "closing",
                        select: "selecting",
                        unselect: "unselecting"
                    };
                if (void 0 === t && (t = {}), e in i) {
                    var r = i[e],
                        s = {
                            prevented: !1,
                            name: e,
                            args: t
                        };
                    if (n.call(this, r, s), s.prevented) return void(t.prevented = !0)
                }
                n.call(this, e, t)
            }, o.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
            }, o.prototype.open = function () {
                this.isOpen() || this.trigger("query", {})
            }, o.prototype.close = function () {
                this.isOpen() && this.trigger("close", {})
            }, o.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open")
            }, o.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus");
            }, o.prototype.focus = function (e) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
            }, o.prototype.enable = function (e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }, o.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var e = [];
                return this.dataAdapter.current(function (t) {
                    e = t
                }), e
            }, o.prototype.val = function (t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                var n = t[0];
                e.isArray(n) && (n = e.map(n, function (e) {
                    return e.toString()
                })), this.$element.val(n).trigger("change")
            }, o.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
            }, o.prototype.render = function () {
                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
            }, o
        }), t.define("jquery-mousewheel", ["jquery"], function (e) {
            return e
        }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (e, t, n, i) {
            if (null == e.fn.select2) {
                var o = ["open", "close", "destroy"];
                e.fn.select2 = function (t) {
                    if (t = t || {}, "object" == typeof t) return this.each(function () {
                        var i = e.extend(!0, {}, t);
                        new n(e(this), i)
                    }), this;
                    if ("string" == typeof t) {
                        var i;
                        return this.each(function () {
                            var n = e(this).data("select2");
                            null == n && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2.");
                            var o = Array.prototype.slice.call(arguments, 1);
                            i = n[t].apply(n, o)
                        }), e.inArray(t, o) > -1 ? this : i
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
}), ! function (e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : e.Circles = t()
}(this, function () {
    "use strict";
    var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60)
        }, t = function (e) {
            var t = e.id;
            if (this._el = document.getElementById(t), null !== this._el) {
                this._radius = e.radius || 10, this._duration = void 0 === e.duration ? 500 : e.duration, this._value = 0, this._maxValue = e.maxValue || 100, this._text = void 0 === e.text ? function (e) {
                    return this.htmlifyNumber(e)
                } : e.text, this._strokeWidth = e.width || 10, this._colors = e.colors || ["#EEE", "#F00"], this._svg = null, this._movingPath = null, this._wrapContainer = null, this._textContainer = null, this._wrpClass = e.wrpClass || "circles-wrp", this._textClass = e.textClass || "circles-text", this._valClass = e.valueStrokeClass || "circles-valueStroke", this._maxValClass = e.maxValueStrokeClass || "circles-maxValueStroke", this._styleWrapper = e.styleWrapper !== !1, this._styleText = e.styleText !== !1;
                var n = Math.PI / 180 * 270;
                this._start = -Math.PI / 180 * 90, this._startPrecise = this._precise(this._start), this._circ = n - this._start, this._generate().update(e.value || 0)
            }
        };
    return t.prototype = {
        VERSION: "0.0.6",
        _generate: function () {
            return this._svgSize = 2 * this._radius, this._radiusAdjusted = this._radius - this._strokeWidth / 2, this._generateSvg()._generateText()._generateWrapper(), this._el.innerHTML = "", this._el.appendChild(this._wrapContainer), this
        },
        _setPercentage: function (e) {
            this._movingPath.setAttribute("d", this._calculatePath(e, !0)), this._textContainer.innerHTML = this._getText(this.getValueFromPercent(e))
        },
        _generateWrapper: function () {
            return this._wrapContainer = document.createElement("div"), this._wrapContainer.className = this._wrpClass, this._styleWrapper && (this._wrapContainer.style.position = "relative", this._wrapContainer.style.display = "inline-block"), this._wrapContainer.appendChild(this._svg), this._wrapContainer.appendChild(this._textContainer), this
        },
        _generateText: function () {
            if (this._textContainer = document.createElement("div"), this._textContainer.className = this._textClass, this._styleText) {
                var e = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    textAlign: "center",
                    width: "100%",
                    fontSize: .7 * this._radius + "px",
                    height: this._svgSize + "px",
                    lineHeight: this._svgSize + "px"
                };
                for (var t in e) this._textContainer.style[t] = e[t]
            }
            return this._textContainer.innerHTML = this._getText(0), this
        },
        _getText: function (e) {
            return this._text ? (void 0 === e && (e = this._value), e = parseFloat(e.toFixed(2)), "function" == typeof this._text ? this._text.call(this, e) : this._text) : ""
        },
        _generateSvg: function () {
            return this._svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._svg.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this._svg.setAttribute("width", this._svgSize), this._svg.setAttribute("height", this._svgSize), this._generatePath(100, !1, this._colors[0], this._maxValClass)._generatePath(1, !0, this._colors[1], this._valClass), this._movingPath = this._svg.getElementsByTagName("path")[1], this
        },
        _generatePath: function (e, t, n, i) {
            var o = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return o.setAttribute("fill", "transparent"), o.setAttribute("stroke", n), o.setAttribute("stroke-width", this._strokeWidth), o.setAttribute("d", this._calculatePath(e, t)), o.setAttribute("class", i), this._svg.appendChild(o), this
        },
        _calculatePath: function (e, t) {
            var n = this._start + e / 100 * this._circ,
                i = this._precise(n);
            return this._arc(i, t)
        },
        _arc: function (e, t) {
            var n = e - .001,
                i = e - this._startPrecise < Math.PI ? 0 : 1;
            return ["M", this._radius + this._radiusAdjusted * Math.cos(this._startPrecise), this._radius + this._radiusAdjusted * Math.sin(this._startPrecise), "A", this._radiusAdjusted, this._radiusAdjusted, 0, i, 1, this._radius + this._radiusAdjusted * Math.cos(n), this._radius + this._radiusAdjusted * Math.sin(n), t ? "" : "Z"].join(" ")
        },
        _precise: function (e) {
            return Math.round(1e3 * e) / 1e3
        },
        htmlifyNumber: function (e, t, n) {
            t = t || "circles-integer", n = n || "circles-decimals";
            var i = (e + "").split("."),
                o = '<span class="' + t + '">' + i[0] + "</span>";
            return i.length > 1 && (o += '.<span class="' + n + '">' + i[1].substring(0, 2) + "</span>"), o
        },
        updateRadius: function (e) {
            return this._radius = e, this._generate().update(!0)
        },
        updateWidth: function (e) {
            return this._strokeWidth = e, this._generate().update(!0)
        },
        updateColors: function (e) {
            this._colors = e;
            var t = this._svg.getElementsByTagName("path");
            return t[0].setAttribute("stroke", e[0]), t[1].setAttribute("stroke", e[1]), this
        },
        getPercent: function () {
            return 100 * this._value / this._maxValue
        },
        getValueFromPercent: function (e) {
            return this._maxValue * e / 100
        },
        getValue: function () {
            return this._value
        },
        getMaxValue: function () {
            return this._maxValue
        },
        update: function (t, n) {
            if (t === !0) return this._setPercentage(this.getPercent()), this;
            if (this._value == t || isNaN(t)) return this;
            void 0 === n && (n = this._duration);
            var i, o, r, s, a = this,
                l = a.getPercent(),
                c = 1;
            return this._value = Math.min(this._maxValue, Math.max(0, t)), n ? (i = a.getPercent(), o = i > l, c += i % 1, r = Math.floor(Math.abs(i - l) / c), s = n / r, function u(t) {
                if (o ? l += c : l -= c, o && l >= i || !o && i >= l) return void e(function () {
                    a._setPercentage(i)
                });
                e(function () {
                    a._setPercentage(l)
                });
                var n = Date.now(),
                    r = n - t;
                r >= s ? u(n) : setTimeout(function () {
                    u(Date.now())
                }, s - r)
            }(Date.now()), this) : (this._setPercentage(this.getPercent()), this)
        }
    }, t.create = function (e) {
        return new t(e)
    }, t
}),

function () {
    for (var e, t = function () {}, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = n.length, o = window.console = window.console || {}; i--;) e = n[i], o[e] || (o[e] = t)
}(),

function (e, t) {
    var n = function (e, t, n) {
        var i;
        return function () {
            function o() {
                n || e.apply(r, s), i = null
            }
            var r = this,
                s = arguments;
            i ? clearTimeout(i) : n && e.apply(r, s), i = setTimeout(o, t || 100)
        }
    };
    jQuery.fn[t] = function (e) {
        return e ? this.bind("resize", n(e)) : this.trigger(t)
    }
}(jQuery, "smartresize"),




function (e, t) {
    var n = function (e, t, n) {
        var i;
        return function () {
            function o() {
                n || e.apply(r, s), i = null
            }
            var r = this,
                s = arguments;
            i ? clearTimeout(i) : n && e.apply(r, s), i = setTimeout(o, t || 50)
        }
    };
    jQuery.fn[t] = function (e) {
        return e ? this.bind("scroll", n(e)) : this.trigger(t)
    }
}(jQuery, "smartscroll");
var params = getParams("js-main"),
    baseUrl = params.baseUrl,
    base_url_lang = params.base_url_lang,
    section = params.section,
    subsection = params.subsection,
    isIframe = params.isIframe,
    openVideo = params.openVideo,
    mmenuStarted = !1,
    windowW = $(window).width(),
    windowH = $(window).height(),
    header_mini = params.header_mini,
    KEYCODE_ESC = 27,
    KEYCODE_ENTER = 13,
    KEYCODE_CMD = 91,
    KEYCODE_CMD_RIGHT = 93,
    KEYCODE_CTRL = 17,
    KEYCODE_ALT = 18,
    KEYCODE_C = 67,
    KEYCODE_V = 86,
    KEYCODE_R = 82,
    ctrlDown = !1,
    $search = $(".js-search"),
    $searchInput = $(".js-search-input"),
    searchValPrev = "",
    searchVal = "",
    flexImages = function () {
        function e(e) {
            function t(e, n, i, o) {
                function r(e) {
                    i.maxRows && d > i.maxRows || i.truncate && e && d > 1 ? p[s][0].style.display = "none" : (p[s][4] && (p[s][3].setAttribute("src", p[s][4]), p[s][4] = ""), p[s][0].style.width = a + "px", p[s][0].style.height = m + "px", p[s][0].style.display = "block")
                }
                for (var s, a, l, c, u = 1, d = 1, h = e.clientWidth - 2, p = [], f = 0, m = i.rowHeight, g = 0; g < n.length; g++) if (p.push(n[g]), f += n[g][2] + i.margin, f >= h) {
                    var v = p.length * i.margin;
                    for (u = (h - v) / (f - v), m = Math.ceil(i.rowHeight * u), l = 0, s = 0; s < p.length; s++) a = Math.ceil(p[s][2] * u), l += a + i.margin, l > h && (a -= l - h), r();
                    p = [], f = 0, d++
                }
                for (s = 0; s < p.length; s++) a = Math.floor(p[s][2] * u), c = Math.floor(i.rowHeight * u), r(!0);
                o || h == e.clientWidth || t(e, n, i, !0)
            }
            if (document.querySelector) {
                var n = {
                    selector: 0,
                    container: ".item",
                    object: "img",
                    rowHeight: 180,
                    maxRows: 0,
                    truncate: 0
                };
                for (var i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
                for (var o = "object" == typeof n.selector ? [n.selector] : document.querySelectorAll(n.selector), r = 0; r < o.length; r++) {
                    var s = o[r],
                        a = s.querySelectorAll(n.container),
                        l = [],
                        c = (new Date).getTime();
                    if (a.length) {
                        var u = window.getComputedStyle ? getComputedStyle(a[0], null) : a[0].currentStyle;
                        n.margin = (parseInt(u.marginLeft) || 0) + (parseInt(u.marginRight) || 0) + (Math.round(parseFloat(u.borderLeftWidth)) || 0) + (Math.round(parseFloat(u.borderRightWidth)) || 0);
                        for (var d = 0; d < a.length; d++) {
                            var h = a[d],
                                p = parseInt(h.getAttribute("data-w")),
                                f = p * (n.rowHeight / parseInt(h.getAttribute("data-h"))),
                                m = h.querySelector(n.object);
                            l.push([h, p, f, m, m.getAttribute("data-src")])
                        }
                        t(s, l, n);
                        var g = function () {
                            t(s, l, n)
                        };
                        document.addEventListener ? (window["flexImages_listener" + c] = g, window.removeEventListener("resize", window["flexImages_listener" + s.getAttribute("data-flex-t")]), delete window["flexImages_listener" + s.getAttribute("data-flex-t")], window.addEventListener("resize", window["flexImages_listener" + c])) : s.onresize = g, s.setAttribute("data-flex-t", c)
                    }
                }
            }
        }
        return e
    }();

! function () {
    "function" == typeof define && define.amd ? define("flexImages", function () {
        return flexImages
    }) : "undefined" != typeof module && module.exports ? module.exports = flexImages : window.flexImages = flexImages
}(), $.extend(!0, $.magnificPopup.defaults, {
    closeBtnInside: !1,
    tClose: "Cerrar (Esc)",
    tLoading: "Cargando...",
    gallery: {
        tPrev: "Anterior (Flecha izquierda)",
        tNext: "Siguiente (Flecha derecha)",
        tCounter: '<span class="mfp-counter">%curr% de %total%</span>',
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><svg class="icon-svg mfp-prevent-close" width="29" height="75" viewBox="0 0 29 75" xmlns="http://www.w3.org/2000/svg"><path d="M27.284 2L3 38.284l23.254 34.744" stroke-width="4" fill="none" fill-rule="evenodd"/></svg></button>'
    },
    image: {
        tError: '<a href="%url%">La imagen</a> no se ha podido cargar.'
    },
    ajax: {
        tError: '<a href="%url%">el contenido</a> no se ha podido cargar.'
    },
    closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="icon-svg" width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg"><path d="M41 1L1 41m40 0L1 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" fill-rule="evenodd"/></svg></button>'
});
var breakpoint = {};
breakpoint.refreshValue = function () {
    this.value = window.getComputedStyle(document.querySelector("body"), ":after").getPropertyValue("content").replace(/\"/g, "")
};
var mobileDetect = new MobileDetect(window.navigator.userAgent);
$(document).ready(function () {
    document.cookie.indexOf("legal_ingreso") == -1 && $("#cookies-alert").show(), cookiesAccept()
});
var currentTabletNav = "",
    navIsHover = !1,
    subnavIsHover = !1,
    subnavIsVisible = !1;
Modernizr.touchevents ? $(".js-main-nav-link").on("mousedown", function (e) {
    e.preventDefault(), navShow($(this))
}) : ($(".js-main-nav-link").hoverIntent(navHover, navOut), $(".js-main-subnav").hover(subnavHover, subnavOut), $(".js-main-nav-link").hover(function () {
    navIsHover = !0
}, function () {
    navIsHover = !1
}));

var html_gallery_images = "";
$(window).load(function () {});


var my_to = null;
$(document).ready(function () {
    mobileDetect.mobile() && $("html").addClass("browser-mobile"), $(window).on("load", function () {
        windowLoad()
    }), windowScroll(), $(window).smartscroll(function () {
        windowScroll()
    }), windowResize(), $(window).smartresize(function () {
        windowResize()
    }), $(window).resize(function () {
        breakpoint.refreshValue()
    }).resize(), $("body").on("click", "#nav-mobile .mm-panel > ul > li > a", function () {
        $("#nav-mobile .mm-panel > ul > li").not($(this).parent()).removeClass("mm-opened")
    }), tabletNav(), tabs(), smoothScroll(), carouselProducts(), lightboxGallery(), lightboxVideo(), videoHeroInline(), gallery(), galleryFlex(), dropdownCustom(), "home" == section && home(), "muebles" == section && ("filtros" == subsection ? (filters(), productsSimple()) : "descargas" == subsection ? productsSimple() : "producto" == subsection && productGraphs()), isIframe || search(), "area-privada" == section && loginPage(), "recursos" == section && "arquitectos" == subsection && arquitectos_showrooms(), "" !== openVideo && null !== openVideo && $("#video-" + openVideo).length && "" !== $("#video-" + openVideo).attr("href") && $.magnificPopup.open({
        items: {
            src: $("#video-" + openVideo).attr("href")
        },
        type: "iframe",
        removalDelay: 300,
        mainClass: "mfp-zoom-in",
        iframe: {
            patterns: {
                youtube: {
                    src: "//www.youtube.com/embed/%id%?rel=0&autoplay=0&modestbranding=0&showinfo=0&iv_load_policy=0&autohide=1&rel=0&feature=player_embedded&wmode=transparent"
                }
            }
        },
        callbacks: {
            open: function () {
                if (isIframe && $(".js-hero-content-iframe").length) {
                    $(".js-hero-content-iframe").offset().top
                }
            }
        }
    }), filtro_productos()
});


    var promoWallyTimer, promoWallySegundos, promoWallyElemento, _url_get_promo, promoWally_fase2Timer, promoWally_fase2Segundos, promoWally_fase2Elemento, promoWally_actual_partida_item_id, wallyTotalElements = 0,
    wallyElements = [],
    wally_fase2_finished = !1,
    searchProductsTagsTimeout = null;


