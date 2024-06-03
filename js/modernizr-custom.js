/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-bgsizecover-borderradius-csscalc-cssremunit-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-flexboxtweener-inlinesvg-input-objectfit-peerconnection-preserve3d-svg-svgasimg-touchevents-video-videoautoplay-videoloop-videopreload-setclasses-cssclassprefix:browser- !*/! function (A, e, t) {
    function n(A, e) {
        return typeof A === e
    }
    function o() {
        var A, e, t, o, r, i, a;
        for (var s in R) if (R.hasOwnProperty(s)) {
            if (A = [], e = R[s], e.name && (A.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (t = 0; t < e.options.aliases.length; t++) A.push(e.options.aliases[t].toLowerCase());
            for (o = n(e.fn, "function") ? e.fn() : e.fn, r = 0; r < A.length; r++) i = A[r], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), w.push((o ? "" : "no-") + a.join("-"))
        }
    }
    function r(A) {
        var e = T.className,
            t = Modernizr._config.classPrefix || "";
        if (C && (e = e.baseVal), Modernizr._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            e = e.replace(n, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (e += " " + t + A.join(" " + t), C ? T.className.baseVal = e : T.className = e)
    }
    function i() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : C ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }
    function a(A) {
        return A.replace(/([a-z])-([a-z])/g, function (A, e, t) {
            return e + t.toUpperCase()
        }).replace(/^-/, "")
    }
    function s(A, e) {
        if ("object" == typeof A) for (var t in A) F(A, t) && s(t, A[t]);
        else {
            A = A.toLowerCase();
            var n = A.split("."),
                o = Modernizr[n[0]];
            if (2 == n.length && (o = o[n[1]]), "undefined" != typeof o) return Modernizr;
            e = "function" == typeof e ? e() : e, 1 == n.length ? Modernizr[n[0]] = e : (!Modernizr[n[0]] || Modernizr[n[0]] instanceof Boolean || (Modernizr[n[0]] = new Boolean(Modernizr[n[0]])), Modernizr[n[0]][n[1]] = e), r([(e && 0 != e ? "" : "no-") + n.join("-")]), Modernizr._trigger(A, e)
        }
        return Modernizr
    }
    function l() {
        var A = e.body;
        return A || (A = i(C ? "svg" : "body"), A.fake = !0), A
    }
    function c(A, t, n, o) {
        var r, a, s, c, d = "modernizr",
            u = i("div"),
            f = l();
        if (parseInt(n, 10)) for (; n--;) s = i("div"), s.id = o ? o[n] : d + (n + 1), u.appendChild(s);
        return r = i("style"), r.type = "text/css", r.id = "s" + d, (f.fake ? f : u).appendChild(r), f.appendChild(u), r.styleSheet ? r.styleSheet.cssText = A : r.appendChild(e.createTextNode(A)), u.id = d, f.fake && (f.style.background = "", f.style.overflow = "hidden", c = T.style.overflow, T.style.overflow = "hidden", T.appendChild(f)), a = t(u, A), f.fake ? (f.parentNode.removeChild(f), T.style.overflow = c, T.offsetHeight) : u.parentNode.removeChild(u), !! a
    }
    function d(A, e) {
        return !!~ ("" + A).indexOf(e)
    }
    function u(A, e) {
        return function () {
            return A.apply(e, arguments)
        }
    }
    function f(A, e, t) {
        var o;
        for (var r in A) if (A[r] in e) return t === !1 ? A[r] : (o = e[A[r]], n(o, "function") ? u(o, t || e) : o);
        return !1
    }
    function p(A) {
        return A.replace(/([A-Z])/g, function (A, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function h(e, n) {
        var o = e.length;
        if ("CSS" in A && "supports" in A.CSS) {
            for (; o--;) if (A.CSS.supports(p(e[o]), n)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in A) {
            for (var r = []; o--;) r.push("(" + p(e[o]) + ":" + n + ")");
            return r = r.join(" or "), c("@supports (" + r + ") { #modernizr { position: absolute; } }", function (A) {
                return "absolute" == getComputedStyle(A, null).position
            })
        }
        return t
    }
    function m(A, e, o, r) {
        function s() {
            c && (delete P.style, delete P.modElem)
        }
        if (r = n(r, "undefined") ? !1 : r, !n(o, "undefined")) {
            var l = h(A, o);
            if (!n(l, "undefined")) return l
        }
        for (var c, u, f, p, m, g = ["modernizr", "tspan"]; !P.style;) c = !0, P.modElem = i(g.shift()), P.style = P.modElem.style;
        for (f = A.length, u = 0; f > u; u++) if (p = A[u], m = P.style[p], d(p, "-") && (p = a(p)), P.style[p] !== t) {
            if (r || n(o, "undefined")) return s(), "pfx" == e ? p : !0;
            try {
                P.style[p] = o
            } catch (v) {}
            if (P.style[p] != m) return s(), "pfx" == e ? p : !0
        }
        return s(), !1
    }
    function g(A, e, t, o, r) {
        var i = A.charAt(0).toUpperCase() + A.slice(1),
            a = (A + " " + Q.join(i + " ") + i).split(" ");
        return n(e, "string") || n(e, "undefined") ? m(a, e, o, r) : (a = (A + " " + b.join(i + " ") + i).split(" "), f(a, e, t))
    }
    function v(A, e, n) {
        return g(A, t, t, e, n)
    }
    var w = [],
        R = [],
        E = {
            _version: "3.2.0",
            _config: {
                classPrefix: "browser-",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (A, e) {
                var t = this;
                setTimeout(function () {
                    e(t[A])
                }, 0)
            },
            addTest: function (A, e, t) {
                R.push({
                    name: A,
                    fn: e,
                    options: t
                })
            },
            addAsyncTest: function (A) {
                R.push({
                    name: null,
                    fn: A
                })
            }
        }, Modernizr = function () {};
    Modernizr.prototype = E, Modernizr = new Modernizr, Modernizr.addTest("svg", !! e.createElementNS && !! e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var T = e.documentElement,
        C = "svg" === T.nodeName.toLowerCase(),
        x = E._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    E._prefixes = x, Modernizr.addTest("video", function () {
        var A = i("video"),
            e = !1;
        try {
            (e = !! A.canPlayType) && (e = new Boolean(e), e.ogg = A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
        } catch (t) {}
        return e
    }), Modernizr.addTest("csscalc", function () {
        var A = "width:",
            e = "calc(10px);",
            t = i("a");
        return t.style.cssText = A + x.join(e + A), !! t.style.length
    }), Modernizr.addTest("cssremunit", function () {
        var A = i("a").style;
        try {
            A.fontSize = "3rem"
        } catch (e) {}
        return /rem/.test(A.fontSize)
    }), Modernizr.addTest("inlinesvg", function () {
        var A = i("div");
        return A.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && A.firstChild && A.firstChild.namespaceURI)
    }), Modernizr.addTest("videoloop", "loop" in i("video")), Modernizr.addTest("videopreload", "preload" in i("video"));
    var B = "CSS" in A && "supports" in A.CSS,
        y = "supportsCSS" in A;
    Modernizr.addTest("supports", B || y);
    var F;
    ! function () {
        var A = {}.hasOwnProperty;
        F = n(A, "undefined") || n(A.call, "undefined") ? function (A, e) {
            return e in A && n(A.constructor.prototype[e], "undefined")
        } : function (e, t) {
            return A.call(e, t)
        }
    }(), E._l = {}, E.on = function (A, e) {
        this._l[A] || (this._l[A] = []), this._l[A].push(e), Modernizr.hasOwnProperty(A) && setTimeout(function () {
            Modernizr._trigger(A, Modernizr[A])
        }, 0)
    }, E._trigger = function (A, e) {
        if (this._l[A]) {
            var t = this._l[A];
            setTimeout(function () {
                var A, n;
                for (A = 0; A < t.length; A++)(n = t[A])(e)
            }, 0), delete this._l[A]
        }
    }, Modernizr._q.push(function () {
        E.addTest = s
    }), Modernizr.addTest("svgasimg", e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")), Modernizr.addAsyncTest(function () {
        function A(t) {
            clearTimeout(e), n.removeEventListener("playing", A, !1), s("videoautoplay", t && "playing" === t.type || 0 !== n.currentTime), n.parentNode.removeChild(n)
        }
        var e, t = 300,
            n = i("video"),
            o = n.style;
        if (!(Modernizr.video && "autoplay" in n)) return void s("videoautoplay", !1);
        o.position = "absolute", o.height = 0, o.width = 0;
        try {
            if (Modernizr.video.ogg) n.src = "data:video/ogg;base64,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";
            else {
                if (!Modernizr.video.h264) return void s("videoautoplay", !1);
                n.src = "data:video/mp4;base64,AAAAHGZ0eXBtcDQyAAAAAG1wNDJpc29tYXZjMQAAAz5tb292AAAAbG12aGQAAAAAzaNacc2jWnEAAV+QAAFfkAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAGGlvZHMAAAAAEICAgAcAT////3//AAACQ3RyYWsAAABcdGtoZAAAAAHNo1pxzaNacQAAAAEAAAAAAAFfkAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAABAAAAAAAd9tZGlhAAAAIG1kaGQAAAAAzaNacc2jWnEAAV+QAAFfkFXEAAAAAAAhaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAAAAAAGWbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAABVnN0YmwAAACpc3RzZAAAAAAAAAABAAAAmWF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAQAEgAAABIAAAAAAAAAAEOSlZUL0FWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwH0AAr/4QAZZ/QACq609NQYBBkAAAMAAQAAAwAKjxImoAEABWjOAa8gAAAAEmNvbHJuY2xjAAYAAQAGAAAAGHN0dHMAAAAAAAAAAQAAAAUAAEZQAAAAKHN0c3oAAAAAAAAAAAAAAAUAAAIqAAAACAAAAAgAAAAIAAAACAAAAChzdHNjAAAAAAAAAAIAAAABAAAABAAAAAEAAAACAAAAAQAAAAEAAAAYc3RjbwAAAAAAAAACAAADYgAABaQAAAAUc3RzcwAAAAAAAAABAAAAAQAAABFzZHRwAAAAAAREREREAAAAb3VkdGEAAABnbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAA6aWxzdAAAADKpdG9vAAAAKmRhdGEAAAABAAAAAEhhbmRCcmFrZSAwLjkuOCAyMDEyMDcxODAwAAACUm1kYXQAAAHkBgX/4NxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxMjAgLSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDExIC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9uczogY2FiYWM9MCByZWY9MSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjAgbWU9ZXNhIHN1Ym1lPTkgcHN5PTAgbWl4ZWRfcmVmPTAgbWVfcmFuZ2U9NCBjaHJvbWFfbWU9MSB0cmVsbGlzPTAgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0wIGNocm9tYV9xcF9vZmZzZXQ9MCB0aHJlYWRzPTYgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTUwIGtleWludF9taW49NSBzY2VuZWN1dD00MCBpbnRyYV9yZWZyZXNoPTAgcmM9Y3FwIG1idHJlZT0wIHFwPTAAgAAAAD5liISscR8A+E4ACAACFoAAITAAAgsAAPgYCoKgoC+L4vi+KAvi+L4YfAEAACMzgABF9AAEUGUgABDJiXnf4AAAAARBmiKUAAAABEGaQpQAAAAEQZpilAAAAARBmoKU"
            }
        } catch (r) {
            return void s("videoautoplay", !1)
        }
        n.setAttribute("autoplay", ""), n.style.cssText = "display:none", T.appendChild(n), setTimeout(function () {
            n.addEventListener("playing", A, !1), e = setTimeout(A, t)
        }, 0)
    });
    var U = E.testStyles = c;
    Modernizr.addTest("touchevents", function () {
        var t;
        if ("ontouchstart" in A || A.DocumentTouch && e instanceof DocumentTouch) t = !0;
        else {
            var n = ["@media (", x.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            U(n, function (A) {
                t = 9 === A.offsetTop
            })
        }
        return t
    });
    var G = "Moz O ms Webkit",
        Q = E._config.usePrefixes ? G.split(" ") : [];
    E._cssomPrefixes = Q;
    var V = function (e) {
        var n, o = x.length,
            r = A.CSSRule;
        if ("undefined" == typeof r) return t;
        if (!e) return !1;
        if (e = e.replace(/^@/, ""), n = e.replace(/-/g, "_").toUpperCase() + "_RULE", n in r) return "@" + e;
        for (var i = 0; o > i; i++) {
            var a = x[i],
                s = a.toUpperCase() + "_" + n;
            if (s in r) return "@-" + a.toLowerCase() + "-" + e
        }
        return !1
    };
    E.atRule = V;
    var b = E._config.usePrefixes ? G.toLowerCase().split(" ") : [];
    E._domPrefixes = b;
    var Y = {
        elem: i("modernizr")
    };
    Modernizr._q.push(function () {
        delete Y.elem
    });
    var P = {
        style: Y.elem.style
    };
    Modernizr._q.unshift(function () {
        delete P.style
    }), E.testAllProps = g, E.testAllProps = v, Modernizr.addTest("bgsizecover", v("backgroundSize", "cover")), Modernizr.addTest("borderradius", v("borderRadius", "0px", !0)), Modernizr.addTest("flexbox", v("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", v("boxDirection", "reverse", !0)), Modernizr.addTest("flexboxtweener", v("flexAlign", "end", !0)), Modernizr.addTest("csstransforms", function () {
        return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0)
    }), Modernizr.addTest("csstransforms3d", function () {
        var A = !! v("perspective", "1px", !0),
            e = Modernizr._config.usePrefixes;
        if (A && (!e || "webkitPerspective" in T.style)) {
            var t, n = "#modernizr{width:0;height:0}";
            Modernizr.supports ? t = "@supports (perspective: 1px)" : (t = "@media (transform-3d)", e && (t += ",(-webkit-transform-3d)")), t += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", U(n + t, function (e) {
                A = 7 === e.offsetWidth && 18 === e.offsetHeight
            })
        }
        return A
    }), Modernizr.addTest("preserve3d", v("transformStyle", "preserve-3d")), Modernizr.addTest("csstransitions", v("transition", "all", !0));
    var Z = E.prefixed = function (A, e, t) {
        return 0 === A.indexOf("@") ? V(A) : (-1 != A.indexOf("-") && (A = a(A)), e ? g(A, e, t) : g(A, "pfx"))
    };
    Modernizr.addTest("objectfit", !! Z("objectFit"), {
        aliases: ["object-fit"]
    }), Modernizr.addTest("peerconnection", !! Z("RTCPeerConnection", A));
    var S = i("input"),
        I = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        k = {};
    Modernizr.input = function (e) {
        for (var t = 0, n = e.length; n > t; t++) k[e[t]] = !! (e[t] in S);
        return k.list && (k.list = !(!i("datalist") || !A.HTMLDataListElement)), k
    }(I), o(), r(w), delete E.addTest, delete E.addAsyncTest;
    for (var N = 0; N < Modernizr._q.length; N++) Modernizr._q[N]();
    A.Modernizr = Modernizr
}(window, document);